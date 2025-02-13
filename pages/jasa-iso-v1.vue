<template>
<div id="landing-page" class="landing-page bg-gray-100">
  <section id="hero" class="lg:mt-12 bg-secondary">
    <div class="container min-h-[120vh] lg:min-h-screen place-content-center">
      <div class="grid lg:grid-cols-2">
        <div class="flex flex-col gap-12 my-auto">
          <div class="flex flex-col gap-2">
            <h1 class="isco-h3 isco-text-responsive">
              Jasa Sertifikasi ISO
            </h1>
            <h2 class="isco-h1 isco-text-responsive">
              Menangkan Kontrak, Sukseskan Audit
            </h2>
            <p class="text-white isco-text-responsive">
              Jasa Sertifikasi ISO Cepat, Mudah, dan Bergaransi Terbaik Se-Tangerang. <br>Melayani Banten dan Sekitarnya.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <ButtonCTA button-text="Dapatkan Sertifikat ISO" to="/" class="lg:mr-auto text-center"/>
            <div class="flex gap-4 flex-wrap">
              <div class="flex gap-2">
                <svg class="fill-accent w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <span class="text-white">Online</span>
              </div>
              <div class="flex gap-2">
                <svg class="fill-accent w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <span class="text-white">Legal</span>
              </div>
              <div class="flex gap-2">
                <svg class="fill-accent w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                <span class="text-white">Cepat</span>
              </div>
            </div>
          </div>
          
        </div>
        <img src="@/assets/images/test2.png" class="h-2/3 place-self-center" alt="poto">
      </div>
    </div>
  </section>
  <section>
    <div class="container py-24">
      <div class="flex flex-col text-center mb-8">
        <h2 class="isco-h3">
          Mengapa Memilih Kami
        </h2>
        <h3 class="isco-h2">
          Membantu Anda Meraih Tender <u>Lebih Banyak</u>
        </h3>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        <IconBox 
          svg="check-to-slot"
          tagline="100% Tingkat Keberhasilan"
          description="Kami menjamin sertifikasi ISO Anda terbit tepat waktu."
          styling="horizontal"
        />
        <IconBox 
          svg="bolt"
          tagline="Proses Cepat"
          description="Dapatkan sertifikasi dalam 7 hari kerja."
          styling="horizontal"
        />
        <IconBox 
          svg="ERROR"
          tagline="ERROR ERROR ERROR"
          description="lorem4234324242342342342lorem4234324242342342342lorem4234324242342342342lorem4234324242342342342lorem4234324242342342342lorem4234324242342342342lorem4234324242342342342lorem4234324242342342342"
          styling="horizontal"
        />
        <IconBox 
          svg="user-tie"
          tagline="Konsultan Terpercaya"
          description="10+ tahun berpengalaman dalam audita dan persyaratan."
          styling="horizontal"
        />
      </div>
    </div>
  </section>
</div>
</template>
  
  <script setup lang="ts"></script>
  