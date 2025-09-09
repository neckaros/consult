// src/routes/contact/+page.server.ts
import { fail, type Actions } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY, MAIL_FROM, MAIL_TO } from '$env/static/private';


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

    const resend = new Resend(RESEND_API_KEY);

    function escapeHtml(s: string) {
      return s
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
    }
    
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company ?? '');
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMsgHtml = escapeHtml(message).replace(/\r?\n/g, '<br>'); // préserve les retours en HTML
    const safeMsgText = message; // version texte brute, retours conservés
    
    await resend.emails.send({
      from: MAIL_FROM,               // ex: "JezConsult <contact@tondomaine.fr>"
      to: [MAIL_TO],
      subject: `Consult Query - ${safeName} ${safeCompany}`,
      replyTo: email,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br>${safeMsgHtml}</p>
      `,
      text: `Name: ${name}
    Company: ${company ?? ''}
    Email: ${email}
    Subject: ${subject}
    Message:
    ${safeMsgText}`
    });
      
    return { success: true, message: 'Merci, votre message a bien été envoyé.' } satisfies ContactSuccess;
  }
} satisfies Actions;
