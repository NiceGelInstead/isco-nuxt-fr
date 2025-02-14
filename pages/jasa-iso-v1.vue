<template>
  <div id="landing-page" class="landing-page bg-gray-100">
    <section id="hero" class="pt-0 lg:pt-16 bg-secondary">
      <div class="container min-h-[120vh] lg:min-h-screen place-content-center">
        <div class="grid lg:grid-cols-2">
          <div class="flex flex-col gap-12 my-auto">
            <div class="flex flex-col gap-2">
              <h1 class="isco-h3 isco-text-responsive text-accent">
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
      <div class="container">
        <div class="flex flex-col text-center mb-16">
          <h2 class="isco-h3">
            Mengapa Memilih Kami
          </h2>
          <h3 class="isco-h2">
            Membantu Anda Meraih Tender Lebih Banyak
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
    <section>
      <div class="container">
        <div class="flex flex-col text-center mb-16">
          <h2 class="isco-h3">
            Layanan Kami
          </h2>
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
    <section class="bg-secondary">
      <div class="container">
        <div class="grid lg:grid-cols-2 w-full">
          <img src="@/assets/images/test2.png" class="h-2/3 place-self-center" alt="poto">
          <div class="flex flex-col">
            <div class="flex flex-col mb-8">
              <h2 class="isco-h3 text-start text-accent">
                Bagaimana Caranya?
              </h2>
              <h3 class="isco-h2 text-white text-start">
                Lengkapi Persyaratan Tender dengan 3 Cara Simpel
              </h3>
            </div>
            <div class="grid grid-rows-3 gap-8 isco-text-break w-full">
              <div class="flex items-end gap-4">
                <span class="text-6xl text-accent">
                  1.
                </span>
                <h4 class="isco-h4 text-white isco-text-break">
                  Konsultasi Gratis
                </h4>
              </div>
              <div class="flex items-end gap-4">
                <span class="text-6xl text-accent">
                  2.
                </span>
                <h4 class="isco-h4 text-white isco-text-break">
                  Audit Dokumentasi dan Persyaratan Anda
                </h4>
              </div>
              <div class="flex items-end gap-4">
                <span class="text-6xl text-accent">
                  3.
                </span>
                <h4 class="isco-h4 text-white isco-text-break">
                  Dapatakan Sertifikasi Anda
                </h4>
              </div>
              <ButtonCTA button-text="Dapatkan Sertifikat ISO" to="/" class="lg:mr-auto text-center"/>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="flex flex-col mb-4 gap-2">
          <h2 class="isco-h2 text-center">
            Dapatkan Serfikat ISO Anda Segera
          </h2>
          <p class="text-center self-center">
            Kami menyediakan sertifikasi dari industri konstruksi, konsultan, hingga manufaktur.
          </p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 w-full place-items-center gap-4">
          <div class="flex flex-col place-items-center gap-2">
            <img src="@/public/images/logo-IscoGroup.png" class="h-8 w-8" alt="poto">
            <span>
              Terdaftar di OJK
            </span>
          </div>
          <div class="flex flex-col place-items-center gap-2">
            <img src="@/public/images/logo-IscoGroup.png" class="h-8 w-8" alt="poto">
            <span>
              LPSE Resmi
            </span>
          </div>
          <div class="flex flex-col place-items-center gap-2">
            <img src="@/public/images/logo-IscoGroup.png" class="h-8 w-8" alt="poto">
            <span>
              Partner LPJK
            </span>
          </div>
          <div class="flex flex-col place-items-center gap-2">
            <img src="@/public/images/logo-IscoGroup.png" class="h-8 w-8" alt="poto">
            <span>
              BNSP Resmi
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
  </template>
    
    <script setup lang="ts"></script>
    