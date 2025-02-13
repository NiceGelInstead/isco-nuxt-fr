<template>
<div id="landing-page" class="landing-page bg-gray-100">
  <section id="hero" class="lg:mt-12 bg-secondary">
    <div class="container min-h-[120vh] lg:min-h-screen place-content-center">
      <div class="grid lg:grid-cols-12 items-center">
        <div class="flex flex-col lg:col-span-8">
          <h1 class="isco-h3 isco-text-responsive">
            Jasa Sertifikasi ISO
          </h1>
          <h2 class="isco-h1 isco-text-responsive mb-6">
            Menangkan Kontrak, Sukseskan Audit
          </h2>
          <p class="text-white isco-text-responsive mb-9">
            Jasa Sertifikasi ISO Cepat, Mudah, dan Bergaransi Terbaik Se-Tangerang. <br>Melayani Banten dan Sekitarnya.
          </p>
          <ButtonCTA button-text="Ambil Penawaran Segera" to="/" class="lg:mr-auto text-center"/>
          <div class="flex gap-4 flex-wrap mt-4">
              <div class="flex gap-2">
                <svg class="fill-accent w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <span class="text-white">Terdaftar Online</span>
              </div>
              <div class="flex gap-2">
                <svg class="fill-accent w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <span class="text-white">Legalitas Penuh</span>
              </div>
              <div class="flex gap-2">
                <svg class="fill-accent w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <span class="text-white">Hasil Cepat</span>
              </div>
          </div>
        </div>
        <div class="mt-8 lg:col-span-4">
          <img src="@/assets/images/test2.png" class="w-4/5 place-self-center col-span-1" alt="poto">
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container py-24">
      <div class="flex flex-col text-center mb-8">
        <!-- <h2 class="isco-h3">
          International Standard Organization
        </h2> -->
        <h3 class="isco-h2">
          Dapatkan Sertifikasi ISO Lengkap
        </h3>
      </div>
      <div class="grid gap-8 grid-cols-2 lg:grid-cols-4">
        <IconBox 
          svg="check-to-slot"
          tagline="ISO 9001"
          description=""
          styling="vertical"
        />
        <IconBox 
          svg="check-to-slot"
          tagline="ISO 14001"
          description=""
          styling="vert"
        />
        <IconBox 
          svg="check-to-slot"
          tagline="ISO 45001"
          description=""
          styling="vertin"
        />
        <IconBox 
          svg="check-to-slot"
          tagline="ISO 27001"
          description=""
          styling="verguso"
        />
        <IconBox 
          svg="check-to-slot"
          tagline="ISO 13485"
          description=""
          styling="ver"
        />
        <IconBox 
          svg="check-to-slot"
          tagline="ISO 21001"
          description=""
          styling="v"
        />
        <IconBox 
          svg="check-to-slot"
          tagline="ISO 26000"
          description=""
          styling="walah"
        />
        <IconBox 
          svg="check-to-slot"
          tagline="dan Lainnya"
          description=""
          styling="bruh"
        />
      </div>
    </div>
  </section>
</div>
</template>
  
  <script setup lang="ts"></script>
  