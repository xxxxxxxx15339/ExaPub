<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Nos réalisations
          </h1>
          <p class="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Un aperçu de nos projets récents et de nos réalisations
          </p>
        </div>
      </div>
    </div>

    <!-- Portfolio Section (moved from index.vue) -->
    <div class="py-6 bg-neutral-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Videos -->
          <div v-for="video in videos" :key="video" class="rounded-lg overflow-hidden shadow bg-neutral-white flex flex-col items-center border border-accent">
            <video :src="video" controls class="w-full h-64 object-cover"></video>
          </div>
          <!-- Images -->
          <div v-for="image in images" :key="image" class="rounded-lg overflow-hidden shadow bg-neutral-white flex flex-col items-center border border-accent">
            <img :src="image" alt="Notre travail" class="w-full h-64 object-cover" />
          </div>
        </div>
        <div class="text-center mt-12">
          <a href="https://instagram.com/exapub" target="_blank" class="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/90 text-neutral-white text-lg font-semibold rounded-full shadow transition-colors">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
            Voir plus sur Instagram
          </a>
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
