// src/routes/contact/+page.server.ts
import { fail, type Actions } from '@sveltejs/kit';

type ContactSuccess = { success: true; message: string };
type ContactInvalid = { success: false; message: string; errors: Record<string, string> };

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions = {
  default: async ({ request }) => {
    const fd = await request.formData();

    const website = String(fd.get('website') ?? '');
    const t0 = Number(fd.get('t0') ?? 0);
    const tooFast = !t0 || Date.now() - t0 < 1500;

    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const company = String(fd.get('company') ?? '').trim();
    const subject = String(fd.get('subject') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();
    const consent = fd.get('consent') === 'yes';

    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Nom requis.';
    if (!email || !emailRx.test(email)) errors.email = 'Email invalide.';
    if (!subject) errors.subject = 'Sujet requis.';
    if (!message || message.length < 20) errors.message = 'Message trop court (≥ 20).';
    if (!consent) errors.consent = 'Consentement requis.';
    if (website || tooFast) errors.form = 'Détection anti-spam.';

    if (Object.keys(errors).length) {
      return fail(400, { success: false, message: 'Merci de corriger les champs indiqués.', errors } satisfies ContactInvalid);
    }

    // TODO: SMTP/API
    return { success: true, message: 'Merci, votre message a bien été envoyé.' } satisfies ContactSuccess;
  }
} satisfies Actions;
