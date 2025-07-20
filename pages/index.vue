<template>
  <div>
    <!-- Hero Section with Background Image -->
    <div class="relative overflow-hidden min-h-screen pt-20" style="background: url('/Body.jpg') center center / cover no-repeat;">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left text-neutral-white">
              <h1 class="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Du logo au papier,</span>
                <span class="block text-accent xl:inline"> on imprime votre succès.</span>
              </h1>
              <p class="mt-3 text-base text-neutral-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Nous aidons les entreprises à se démarquer grâce à des enseignes percutantes, de l'impression grand format, du mobilier urbain et des solutions de branding sur mesure.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <NuxtLink to="/contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutral-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition-colors">
                    Contactez-nous
                  </NuxtLink>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <NuxtLink to="/services" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent hover:bg-accent/90 md:py-4 md:text-lg md:px-10 transition-colors">
                    Nos réalisations
                  </NuxtLink>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>


    <!-- Location/Map Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-8 text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Trouvez-nous ici</h2>
          <p class="text-lg text-gray-600 mb-8">Visitez notre bureau ou obtenez l'itinéraire vers notre localisation</p>
        </div>
        <div class="relative w-full h-96 md:h-[500px]">
          <iframe
            src="https://www.google.com/maps?q=31.634599961439527,-8.065689098661366&z=15&output=embed"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="absolute inset-0 rounded-b-lg"
          ></iframe>
        </div>
        <div class="p-6 bg-gray-50">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">ExaPub Digital Agency</h3>
              <p class="text-sm text-gray-600">Votre partenaire de confiance en communication visuelle</p>
            </div>
            <a
              href="https://maps.app.goo.gl/2sGYPnKQbfoiRAXM9"
              target="_blank"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#111518] hover:bg-[#23272e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23272e] transition-colors"
            >
              <span class="mr-2">📍</span>
              Obtenir l'itinéraire
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Preview -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">Nos Services</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ce que nous proposons
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nous proposons une large gamme de solutions de communication visuelle et de branding pour les entreprises.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="relative bg-gray-50 rounded-lg p-8 shadow flex flex-col items-center text-center">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#455d74] text-white text-2xl mb-4">🪧</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Enseignes & Bâches</h3>
            <p class="text-gray-600">Conception, fabrication et installation d'enseignes commerciales, de bâches et de panneaux d'affichage.</p>
          </div>
          <div class="relative bg-gray-50 rounded-lg p-8 shadow flex flex-col items-center text-center">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#455d74] text-white text-2xl mb-4">🖨️</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Impression grand format</h3>
            <p class="text-gray-600">Impression de haute qualité de supports publicitaires grand format : panneaux, affiches, bâches.</p>
          </div>
          <div class="relative bg-gray-50 rounded-lg p-8 shadow flex flex-col items-center text-center">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#455d74] text-white text-2xl mb-4">🪑</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Mobilier urbain</h3>
            <p class="text-gray-600">Création et habillage de mobilier urbain et structures publicitaires pour collectivités et espaces commerciaux.</p>
          </div>
          <div class="relative bg-gray-50 rounded-lg p-8 shadow flex flex-col items-center text-center">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#455d74] text-white text-2xl mb-4">🏪</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Habillage de vitrine</h3>
            <p class="text-gray-600">Conception et pose de décors de vitrine, adhésifs et habillages pour commerces et entreprises.</p>
          </div>
          <div class="relative bg-gray-50 rounded-lg p-8 shadow flex flex-col items-center text-center">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#455d74] text-white text-2xl mb-4">🔧</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Installations publicitaires</h3>
            <p class="text-gray-600">Installation sur site de supports publicitaires et promotionnels chez nos clients.</p>
          </div>
          <div class="relative bg-gray-50 rounded-lg p-8 shadow flex flex-col items-center text-center">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#455d74] text-white text-2xl mb-4">🎨</div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Design & identité visuelle sur mesure</h3>
            <p class="text-gray-600">Création d'identité visuelle, de logos et de supports graphiques personnalisés pour les marques.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="bg-[#111518] text-gray-200 pt-16 pb-8 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Vision -->
        <div>
          <h2 class="text-2xl font-bold mb-4 text-white">Notre Vision</h2>
          <p class="mb-8">Nous sommes passionnés par la création d'identités visuelles fortes et la valorisation des marques à travers des solutions d'impression, de signalétique et de branding sur mesure.</p>
          <h3 class="text-xl font-semibold mb-2 text-white">Réseaux sociaux</h3>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/100038285030820/about/?_rdr" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-700 transition"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/></svg></a>
            <a href="https://instagram.com/exapub" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-700 transition"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></a>
            <a href="mailto:hello@exapub.com" class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-700 transition"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z"/></svg></a>
          </div>
        </div>
        <!-- Important Links -->
        <div>
          <h2 class="text-2xl font-bold mb-4 text-white">Liens importants</h2>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Politique de confidentialité</a></li>
            <li><a href="#" class="hover:underline">Cookies</a></li>
            <li><a href="#" class="hover:underline">Conditions générales</a></li>
          </ul>
          <h2 class="text-2xl font-bold mt-8 mb-4 text-white">Liens utiles</h2>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Accueil</a></li>
            <li><a href="#" class="hover:underline">Services</a></li>
            <li><a href="#" class="hover:underline">Contact</a></li>
          </ul>
        </div>
        <!-- Contact Info -->
        <div>
          <h2 class="text-2xl font-bold mb-4 text-white">Contact</h2>
          <ul class="space-y-4">
            <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243A8 8 0 1 1 17.657 16.657z"/></svg>Massira II, Marrakech</li>
            <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8m-9 4v8"/></svg>+212 662-751645</li>
            <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>ExaPub@gmail.com</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">© 2024 ExaPub. Tous droits réservés.</div>
    </footer>
  </div>
</template>

<script setup>
const videos = [
  '/our-work/1.mp4',
  '/our-work/2.mp4',
  '/our-work/3.mp4',
  '/our-work/4.mp4',
]
const images = [
  '/our-work/5.jpg',
  '/our-work/6.jpg',
]
</script> 
