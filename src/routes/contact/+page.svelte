<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
    import { enhance, type SubmitFunction } from '$app/forms';
    import type { ActionData } from './$types';
  
    // Props serveur typées
    let { form }: { form: ActionData } = $props();
  
    // Rune Svelte 5 : état local simple
    let pending = $state(false);
  
    // use:enhance avec typage
    const onEnhance: SubmitFunction = () => {
      pending = true;
      return async ({ result, update }) => {
        await update(result);
        pending = false;
      };
    };
  </script>
  
  <svelte:head>
    <title>Contact — JezConsult</title>
    <meta name="description" content="Contact IT, IA & Finance — réponse rapide, cadrage clair et premiers jalons." />
  </svelte:head>
  
  <div class="bg-gray-50 min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16">
    <div class="relative w-full max-w-3xl">
      <!-- BLOBS animés -->
      <div class="absolute -top-6 -left-6 w-[80%] h-[80%] rounded-full bg-violet-300 mix-blend-multiply blur-xl opacity-70 animate-blob"></div>
      <div class="absolute -top-6 -right-6 w-[80%] h-[80%] rounded-full bg-yellow-300 mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2s"></div>
      <div class="absolute -bottom-10 left-20 w-[80%] h-[80%] rounded-full bg-pink-300 mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-4s"></div>
  
      <!-- Carte formulaire -->
      <div class="relative m-6">
        <div class="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm">
          <div class="p-6 sm:p-8">
            <div class="flex items-center gap-4">
              <img src="/logos/logo.webp" alt="JezConsult" class="h-10 w-10 rounded-full ring-1 ring-black/10" />
              <h1 class="text-xl sm:text-2xl font-semibold">Parlons de votre projet</h1>
            </div>
  
            {#if form?.message}
              <div class="mt-4 rounded-lg border p-3 text-sm {form?.success ? 'bg-green-50 text-green-800 border-green-200' : 'bg-rose-50 text-rose-800 border-rose-200'}">
                {form.message}
              </div>
            {/if}
  
            <form method="POST" class="mt-6 grid gap-5" use:enhance={onEnhance}>
              <!-- Anti‑spam -->
              <input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off" />
              <input type="hidden" name="t0" value={Date.now()} />
  
              <!-- Nom -->
              <div class="relative">
                <input id="name" name="name" type="text" required placeholder=" "
                       class="peer w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-600" />
                <label for="name"
                       class="pointer-events-none absolute left-3 top-3 px-1 text-slate-500 transition-all
                              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-violet-700 bg-white/80">
                  Nom
                </label>
                {#if form?.errors?.name}<p class="mt-1 text-sm text-rose-600">{form.errors.name}</p>{/if}
              </div>
  
              <!-- Email -->
              <div class="relative">
                <input id="email" name="email" type="email" required placeholder=" "
                       class="peer w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-600" />
                <label for="email"
                       class="pointer-events-none absolute left-3 top-3 px-1 text-slate-500 transition-all
                              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-violet-700 bg-white/80">
                  Email
                </label>
                {#if form?.errors?.email}<p class="mt-1 text-sm text-rose-600">{form.errors.email}</p>{/if}
              </div>
  
              <!-- Société -->
              <div class="relative">
                <input id="company" name="company" type="text" placeholder=" "
                       class="peer w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-600" />
                <label for="company"
                       class="pointer-events-none absolute left-3 top-3 px-1 text-slate-500 transition-all
                              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-violet-700 bg-white/80">
                  Société (optionnel)
                </label>
              </div>
  
              <!-- Sujet -->
              <div>
                <label for="subject" class="block text-sm font-medium">Sujet</label>
                <select id="subject" name="subject" required
                        class="mt-2 w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-600">
                  <option value="it">Conseil IT</option>
                  <option value="ai">IA appliquée</option>
                  <option value="finance">Finance & Data</option>
                  <option value="autre">Autre</option>
                </select>
                {#if form?.errors?.subject}<p class="mt-1 text-sm text-rose-600">{form.errors.subject}</p>{/if}
              </div>
  
              <!-- Message -->
              <div class="relative">
                <textarea id="message" name="message" rows="6" required placeholder=" "
                          class="peer w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-4 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-600"></textarea>
                <label for="message"
                       class="pointer-events-none absolute left-3 top-3 px-1 text-slate-500 transition-all
                              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-violet-700 bg-white/80">
                  Message
                </label>
                {#if form?.errors?.message}<p class="mt-1 text-sm text-rose-600">{form.errors.message}</p>{/if}
              </div>
  
              <label class="flex items-start gap-3 text-sm">
                <input type="checkbox" name="consent" value="yes" required
                       class="mt-1 rounded border-slate-300 text-violet-700 focus:ring-violet-600" />
                <span class="text-slate-700">J’accepte d’être recontacté concernant ma demande.</span>
              </label>
              {#if form?.errors?.consent}<p class="text-sm text-rose-600">{form.errors.consent}</p>{/if}
  
              <div class="flex items-center gap-3">
                <button type="submit"
                        class="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 disabled:opacity-60"
                        disabled={pending}>
                  {#if pending}
                    <span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
                    Envoi…
                  {:else}
                    Envoyer
                  {/if}
                </button>
                <a href="mailto:contact@jezconsult.fr" class="text-sm text-slate-600 hover:text-slate-800">Ou écrire un email</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  