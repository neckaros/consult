<script>
  // Svelte 5 — pas nécessaire ici, mais prêt pour ajouter des interactions
  let openDemo = $state(false);
</script>

<svelte:head>
  <title>JezConsult — IT | IA | Finance</title>
  <meta name="description" content="Conseil en informatique, IA appliquée et finance : architectures web, IA pragmatique (RAG/agents) et data finance orientées résultats." />
</svelte:head>

<!-- Fond dégradé doux + halo -->
<div class="relative isolate">
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-violet-700/10 via-fuchsia-600/10 to-white"
  ></div>

  <!-- HERO -->
  <section class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
    <div class="absolute -top-6 -left-6 w-72 h-72 rounded-full bg-violet-300/50 mix-blend-multiply blur-xl opacity-70 animate-blob"></div>
    <div class="absolute -top-6 -right-6 w-72 h-72 rounded-full bg-yellow-300/50 mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2s"></div>
    <div class="absolute -bottom-10 left-20 w-72 h-72 rounded-full bg-pink-300/50 mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-4s"></div>
    <div class="flex flex-col items-center text-center">
      <!-- Placez votre logo dans static/logo-jezconsult.png -->
      <img
        src="/logos/logo.webp"
        alt="JezConsult"
        class="h-40 w-40 rounded-full shadow-lg ring-1 ring-black/10"
      />

      <h1 class="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Accélérez votre business avec IT & IA
      </h1>
      <p class="mt-5 max-w-2xl text-base/7 sm:text-lg text-slate-600">
        De l’architecture web à l’IA appliquée, en passant par la gestion de projet, de la data, pour livrer vite, bien, et mesurablement.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a href="/contact"
           class="rounded-md bg-violet-700 px-5 py-3 text-white shadow-sm hover:bg-violet-600">
          Démarrer un projet
        </a>
        <button
          class="rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-900 hover:bg-white/70"
          onclick={() => openDemo = true}>
          Voir une étude de cas
        </button>
      </div>
    </div>
  </section>

  <!-- BAND RÉASSURANCE (points clés) -->
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div class="rounded-xl border border-slate-200 bg-white/60 backdrop-blur p-5">
        <p class="text-sm text-slate-500">Time‑to‑value</p>
        <p class="mt-1 font-medium">Livraisons rapides et itératives</p>
      </div>
      <div class="rounded-xl border border-slate-200 bg-white/60 backdrop-blur p-5">
        <p class="text-sm text-slate-500">Qualité</p>
        <p class="mt-1 font-medium">Perf, sécurité, DX soignée</p>
      </div>
      <div class="rounded-xl border border-slate-200 bg-white/60 backdrop-blur p-5">
        <p class="text-sm text-slate-500">Impact</p>
        <p class="mt-1 font-medium">KPIs métier et ROI mesuré</p>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
    <h2 class="text-2xl font-semibold tracking-tight">Expertises</h2>
    <p class="mt-2 max-w-2xl text-slate-600">
      Interventions ciblées, stacks modernes et livrables clairs pour accélérer produits et équipes.
    </p>

    <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <!-- IT -->
      <article class="group rounded-2xl border border-slate-200 bg-white/60 backdrop-blur p-6 hover:shadow-md transition">
        <h3 class="text-lg font-semibold">Gestion de projet</h3>
        <p class="mt-2 text-sm text-slate-600">
          En méthodologie Agile avec gestion des deadlines et maitrise des risques.
        </p>
        <ul class="mt-4 text-sm text-slate-700 space-y-1">
          <li>• Longue éxpérience dans la mise en place de l'agilité à l'echette en société</li>
          <li>• Mise en place de KPI pour suivre l'avancé et les gains du projet</li>
          <li>• Identification et remédiations des risques</li>
        </ul>
        <a href="/services#it" class="mt-5 inline-block text-violet-700 hover:text-violet-600">En savoir plus →</a>
      </article>
      <!-- IT -->
      <article class="group rounded-2xl border border-slate-200 bg-white/60 backdrop-blur p-6 hover:shadow-md transition">
        <h3 class="text-lg font-semibold">Conseil IT</h3>
        <p class="mt-2 text-sm text-slate-600">
          Architecture SvelteKit/TypeScript, API, intégration CI/CD et observabilité, de la conception à la mise en prod.
        </p>
        <ul class="mt-4 text-sm text-slate-700 space-y-1">
          <li>• Apps web SvelteKit & SSR</li>
          <li>• API, Auth, performances</li>
          <li>• DevOps & qualité logicielle</li>
        </ul>
        <a href="/services#it" class="mt-5 inline-block text-violet-700 hover:text-violet-600">En savoir plus →</a>
      </article>

      <!-- IA -->
      <article class="group rounded-2xl border border-slate-200 bg-white/60 backdrop-blur p-6 hover:shadow-md transition">
        <h3 class="text-lg font-semibold">IA appliquée</h3>
        <p class="mt-2 text-sm text-slate-600">
          RAG, agents, automatisation et intégration données pour améliorer support, recherche et productivité.
        </p>
        <ul class="mt-4 text-sm text-slate-700 space-y-1">
          <li>• Automatisation de vos taches</li>
          <li>• RAG sur docs internes</li>
          <li>• Workflows & agents</li>
          <li>• Évaluation & garde‑fous</li>
        </ul>
        <a href="/services#ia" class="mt-5 inline-block text-violet-700 hover:text-violet-600">En savoir plus →</a>
      </article>

      <!-- Finance -->
      <article class="group rounded-2xl border border-slate-200 bg-white/60 backdrop-blur p-6 hover:shadow-md transition">
        <h3 class="text-lg font-semibold">Finance & Data</h3>
        <p class="mt-2 text-sm text-slate-600">
          Pipelines data finance, reporting fiable et optimisation des coûts cloud/produit pilotée par indicateurs.
        </p>
        <ul class="mt-4 text-sm text-slate-700 space-y-1">
          <li>• Modélisation & qualité data</li>
          <li>• Tableaux de bord</li>
          <li>• FinOps & gouvernance</li>
        </ul>
        <a href="/services#finance" class="mt-5 inline-block text-violet-700 hover:text-violet-600">En savoir plus →</a>
      </article>
    </div>
  </section>

  <!-- APPROCHE -->
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
    <div class="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur p-8">
      <h2 class="text-2xl font-semibold tracking-tight">Approche</h2>
      <div class="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <p class="text-sm text-slate-500">01</p>
          <p class="font-medium">Cadrage rapide</p>
          <p class="mt-1 text-sm text-slate-600">Objectifs, périmètre et KPIs partagés.</p>
        </div>
        <div>
          <p class="text-sm text-slate-500">02</p>
          <p class="font-medium">Livraisons courtes</p>
          <p class="mt-1 text-sm text-slate-600">Incréments utiles toutes les 1–2 semaines.</p>
        </div>
        <div>
          <p class="text-sm text-slate-500">03</p>
          <p class="font-medium">Mesure & itérations</p>
          <p class="mt-1 text-sm text-slate-600">Pilotage par résultats et retours utilisateurs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA final -->
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    <div class="flex flex-col items-center rounded-2xl border border-slate-200 bg-gradient-to-r from-violet-700 to-fuchsia-600 p-10 text-center text-white">
      <h3 class="text-2xl font-semibold">Un projet à lancer ou accélérer ?</h3>
      <p class="mt-2 text-white/90">Parlons objectifs, délais et métriques de succès.</p>
      <a href="/contact" class="mt-6 rounded-md bg-white px-5 py-3 text-slate-900 hover:bg-white/90">Prendre contact</a>
    </div>
  </section>
</div>

<!-- Démo (overlay simple) -->
{#if openDemo}
  <div class="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
    <div class="w-full max-w-2xl rounded-2xl bg-white p-6">
      <div class="flex items-center justify-between">
        <h4 class="text-lg font-semibold">Étude de cas</h4>
        <button class="text-slate-500 hover:text-slate-700" onclick={() => openDemo = false}>✕</button>
      </div>
      <p class="mt-2 text-sm text-slate-600">Exemple de gains de performance, coûts et adoption utilisateur.</p>
      <!-- Remplacez par une vidéo ou un visuel -->
      <div class="mt-4 aspect-video rounded-lg bg-slate-100"></div>
    </div>
  </div>
{/if}
