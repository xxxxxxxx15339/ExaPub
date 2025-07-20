<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Contactez-nous
          </h1>
          <p class="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Prêt à booster votre visibilité ? Discutons de votre projet et voyons comment nous pouvons vous aider à vous démarquer.
          </p>
        </div>
      </div>
    </div>

    <!-- Contact Form and Info -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700">Prénom</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  required
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  required
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label for="location" class="block text-sm font-medium text-gray-700">Localisation</label>
              <input
                type="text"
                id="location"
                v-model="form.location"
                placeholder="City, Country"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label for="company" class="block text-sm font-medium text-gray-700">Entreprise</label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label for="service" class="block text-sm font-medium text-gray-700">Service souhaité</label>
              <select
                id="service"
                v-model="form.service"
                required
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Sélectionnez un service</option>
                <option value="signage-banners">Enseignes & Bâches</option>
                <option value="large-format-printing">Impression grand format</option>
                <option value="urban-furniture">Mobilier urbain</option>
                <option value="storefront-graphics">Habillage de vitrine</option>
                <option value="advertising-installations">Installations publicitaires</option>
                <option value="custom-design-branding">Design & identité visuelle sur mesure</option>
                <option value="multiple">Plusieurs services</option>
              </select>
            </div>
                    
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Détails du projet</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                placeholder="Décrivez-nous votre projet, vos objectifs et vos délais..."
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#111518] hover:bg-[#23272e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23272e] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">Envoi en cours...</span>
                <span v-else>Envoyer le message</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Quick Contact -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact rapide</h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-[#455d74] rounded-full flex items-center justify-center">
                    <span class="text-white text-sm">📧</span>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">E-mail</p>
                  <p class="text-sm text-gray-600">hello@exapub.com</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-[#455d74] rounded-full flex items-center justify-center">
                    <span class="text-white text-sm">💬</span>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">WhatsApp</p>
                  <p class="text-sm text-gray-600">+212 662-751645</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-[#455d74] rounded-full flex items-center justify-center">
                    <span class="text-white text-sm">📱</span>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Téléphone</p>
                  <p class="text-sm text-gray-600">+212 662-751645</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-8 h-8 bg-[#455d74] rounded-full flex items-center justify-center">
                    <span class="text-white text-sm">📍</span>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">Localisation</p>
                  <a 
                    href="https://maps.app.goo.gl/vjxeGK4PgUdYVAA9A" 
                    target="_blank" 
                    class="text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>
            
            <!-- WhatsApp Contact Button -->
            <div class="mt-6">
              <a
                :href="whatsappUrl"
                target="_blank"
                class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                <span class="mr-2">💬</span>
                Chat sur WhatsApp
              </a>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Suivez-nous</h2>
            <div class="grid grid-cols-2 gap-4">
              <a href="https://instagram.com/exapub" target="_blank" class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <span class="text-2xl mr-3">📸</span>
                <div>
                  <p class="text-sm font-medium text-gray-900">Instagram</p>
                  <p class="text-xs text-gray-500">@exapub</p>
                </div>
              </a>
              <a href="https://www.facebook.com/100038285030820/about/?_rdr" target="_blank" class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <span class="text-2xl mr-3">📘</span>
                <div>
                  <p class="text-sm font-medium text-gray-900">Facebook</p>
                  <p class="text-xs text-gray-500">ExaPub Agency</p>
                </div>
              </a>
              <a href="mailto:hello@exapub.com" class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <span class="text-2xl mr-3">✉️</span>
                <div>
                  <p class="text-sm font-medium text-gray-900">Email</p>
                  <p class="text-xs text-gray-500">hello@exapub.com</p>
                </div>
              </a>
              <a href="https://wa.me/212662751645" target="_blank" class="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <span class="text-2xl mr-3">💬</span>
                <div>
                  <p class="text-sm font-medium text-gray-900">WhatsApp</p>
                  <p class="text-xs text-gray-500">+212 662-751645</p>
                </div>
              </a>
            </div>
          </div>

          <!-- FAQ -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-sm font-medium text-gray-900">En combien de temps pouvez-vous démarrer un projet ?</h3>
                <p class="text-sm text-gray-600 mt-1">Nous commençons généralement les projets dans les 1-2 semaines suivant la signature du contrat, selon l'ampleur du projet.</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-900">Proposez-vous un support continu ?</h3>
                <p class="text-sm text-gray-600 mt-1">Oui, nous proposons des packages de support et de maintenance continus pour tous nos services.</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-900">Dans quels secteurs travaillez-vous ?</h3>
                <p class="text-sm text-gray-600 mt-1">Nous travaillons avec des entreprises de tous secteurs, des startups aux entreprises établies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Location Map -->
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
            <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8m-9 4v8"/></svg>(+212) 662 751 645</li>
            <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>ExaPub@gmail.com</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">© 2024 ExaPub. Tous droits réservés.</div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  company: '',
  service: '',
  budget: '',
  message: ''
})

const whatsappNumber = '212662751645' // business number without +

const submitForm = () => {
  // Check required fields
  if (!form.value.firstName || !form.value.lastName || !form.value.email || !form.value.service || !form.value.message) {
    alert('Veuillez remplir tous les champs obligatoires.')
    return
  }
  // Build WhatsApp message
  const msg =
    `Nouveau message de contact :\n` +
    `Prénom : ${form.value.firstName}\n` +
    `Nom : ${form.value.lastName}\n` +
    `E-mail : ${form.value.email}\n` +
    `Téléphone : ${form.value.phone || '-'}\n` +
    `Localisation : ${form.value.location || '-'}\n` +
    `Entreprise : ${form.value.company || '-'}\n` +
    `Service souhaité : ${form.value.service}\n` +
    `Budget : ${form.value.budget || '-'}\n` +
    `Détails du projet : ${form.value.message}`
  const encodedMsg = encodeURIComponent(msg)
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`
  window.open(waUrl, '_blank')
}
</script> 
