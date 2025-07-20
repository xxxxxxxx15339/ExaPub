<template>
  <div>
    <!-- Global Header -->
    <nav :class="[
      'fixed top-0 left-0 w-full z-50 transition-colors transition-shadow duration-500',
      scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    ]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-20">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0">
          <img src="/assets/photo.png" alt="Logo" class="h-12 w-12 rounded-full object-cover mr-3 border-2 border-white shadow" />
          <h1 class="text-2xl font-bold text-[#674c31]">ExaPub</h1>
        </div>
        
        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex flex-1 justify-center">
          <div class="flex space-x-10">
            <NuxtLink to="/" class="text-neutral-dark hover:text-accent text-lg font-semibold px-3 py-2 transition-all duration-200"
              :exact-active-class="'border-b-2 border-accent'">Accueil</NuxtLink>
            <NuxtLink to="/services" class="text-neutral-dark hover:text-accent text-lg font-semibold px-3 py-2 transition-all duration-200"
              :exact-active-class="'border-b-2 border-accent'">Nos réalisations</NuxtLink>
            <NuxtLink to="/contact" class="text-neutral-dark hover:text-accent text-lg font-semibold px-3 py-2 transition-all duration-200"
              :exact-active-class="'border-b-2 border-accent'">Contact</NuxtLink>
          </div>
        </div>
        
        <!-- Desktop Language Selector -->
        <div class="hidden md:flex items-center ml-12">
          <select class="border border-neutral-200 rounded px-8 py-1 text-neutral-dark focus:outline-none focus:ring-2 focus:ring-accent">
            <option>Français</option>
            <option>English</option>
          </select>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center ml-auto">
          <button 
            @click="toggleMobileMenu" 
            class="text-neutral-dark hover:text-accent focus:outline-none focus:text-accent transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden bg-white shadow-lg border-t border-gray-200"
        :class="scrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'"
      >
        <div class="px-4 py-6 space-y-4">
          <!-- Mobile Navigation Links -->
          <NuxtLink 
            to="/" 
            @click="closeMobileMenu"
            class="block text-neutral-dark hover:text-accent text-lg font-semibold py-3 px-3 transition-all duration-200 border-b border-gray-100"
            :class="$route.path === '/' ? 'text-accent border-accent' : ''"
          >
            Accueil
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            @click="closeMobileMenu"
            class="block text-neutral-dark hover:text-accent text-lg font-semibold py-3 px-3 transition-all duration-200 border-b border-gray-100"
            :class="$route.path === '/services' ? 'text-accent border-accent' : ''"
          >
            Nos réalisations
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            @click="closeMobileMenu"
            class="block text-neutral-dark hover:text-accent text-lg font-semibold py-3 px-3 transition-all duration-200 border-b border-gray-100"
            :class="$route.path === '/contact' ? 'text-accent border-accent' : ''"
          >
            Contact
          </NuxtLink>
          
          <!-- Mobile Language Selector -->
          <div class="pt-4 border-t border-gray-200">
            <select class="w-full border border-neutral-200 rounded px-4 py-3 text-neutral-dark focus:outline-none focus:ring-2 focus:ring-accent">
              <option>Français</option>
              <option>English</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
    <div :class="scrolled ? 'pt-20' : ''">
      <NuxtPage />
      <WhatsAppButton />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import WhatsAppButton from '~/components/WhatsAppButton.vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  const nav = event.target.closest('nav')
  if (!nav && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})

provide('scrolled', scrolled)
</script> 
