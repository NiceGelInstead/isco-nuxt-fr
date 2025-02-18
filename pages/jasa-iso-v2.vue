<template>
  <div id="landing-page" class="landing-page bg-gray-100">
    <section id="hero" class="pt-0 lg:pt-16 bg-secondary">
      <div class="container min-h-[120vh] lg:min-h-screen place-content-center">
        <div class="grid lg:grid-cols-12 items-center">
          <div class="flex flex-col lg:col-span-8">
            <h1 class="isco-h3 isco-text-responsive text-accent">
              Jasa Sertifikasi ISO
            </h1>
            <h2 class="isco-h1 isco-text-responsive mb-6">
              Menangkan Kontrak, Sukseskan Audit
            </h2>
            <p class="text-white isco-text-responsive mb-9">
              Jasa Sertifikasi ISO Cepat, Mudah, dan Bergaransi Terbaik
              Se-Tangerang. <br >Melayani Banten dan Sekitarnya.
            </p>
            <ButtonCTA
              button-text="Sukseskan Audit Anda"
              to="/"
              class="lg:mr-auto text-center"
            />
            <div class="flex gap-4 flex-wrap mt-4">
              <div class="flex gap-2">
                <svg
                  class="fill-accent w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
                <span class="text-white">Terdaftar Online</span>
              </div>
              <div class="flex gap-2">
                <svg
                  class="fill-accent w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
                <span class="text-white">Legalitas Penuh</span>
              </div>
              <div class="flex gap-2">
                <svg
                  class="fill-accent w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
                <span class="text-white">Hasil Cepat</span>
              </div>
            </div>
          </div>
          <div class="mt-8 lg:col-span-4">
            <img
              src="@/assets/images/test2.png"
              class="w-4/5 place-self-center col-span-1"
              alt="poto"
            >
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="flex flex-col mb-16 gap-2">
          <h2 class="isco-h2 text-center">Dapatkan Sertifikasi ISO Lengkap</h2>
          <p class="text-center self-center">
            Kami menyediakan sertifikasi dari industri konstruksi, konsultan,
            hingga manufaktur.
          </p>
        </div>
        <div class="grid gap-8 grid-cols-2 lg:grid-cols-4">
          <IconBox
            svg="check-to-slot"
            tagline="ISO 9001"
            description="Sistem Manajemen Mutu"
            styling="vertical"
          />
          <IconBox
            svg="check-to-slot"
            tagline="ISO 14001"
            description="Sistem Manajemen Lingkungan"
            styling="vert"
          />
          <IconBox
            svg="check-to-slot"
            tagline="ISO 45001"
            description="Sistem Manajemen K3"
            styling="vertin"
          />
          <IconBox
            svg="check-to-slot"
            tagline="ISO 27001"
            description="Sistem Manajemen Keamanan Informasi"
            styling="verguso"
          />
          <IconBox
            svg="check-to-slot"
            tagline="ISO 13485"
            description="Sistem Manajemen Mutu (Medis)"
            styling="ver"
          />
          <IconBox
            svg="check-to-slot"
            tagline="ISO 21001"
            description="Sistem Manajemen Pendidikan"
            styling="v"
          />
          <IconBox
            svg="check-to-slot"
            tagline="ISO 26000"
            description="Sistem Manajemen CSR"
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
    <section>
      <div class="container">
        <div class="flex flex-col mb-16 gap-2">
          <h2 class="isco-h2 text-center">Mengapa Memilih Kami?</h2>
          <p class="text-center self-center">
            Berpengalaman lebih dari 10+ tahun, kami membantu 100+ kontraktor
            memenangkan lebih banyak tender.
          </p>
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
    <section class="bg-secondary">
      <div class="container">
        <div class="grid lg:grid-cols-2 w-full">
          <img
            src="@/assets/images/test2.png"
            class="h-2/3 place-self-center"
            alt="poto"
          >
          <div class="flex flex-col">
            <h2 class="isco-h2 text-white text-start mb-8">Cara Kerjanya</h2>
            <div class="grid grid-rows-3 gap-8 isco-text-break w-full">
              <div class="flex items-end gap-4">
                <span class="text-6xl text-accent"> 1. </span>
                <div class="flex flex-col isco-text-break">
                  <h4 class="isco-h4 text-white">Konsultasi</h4>
                  <p class="text-white">
                    Hubungi kami melalui WhatsApp dan jadwalkan konsultasi
                    langsung dengan tim kami.
                  </p>
                </div>
              </div>
              <div class="flex items-end gap-4">
                <span class="text-6xl text-accent"> 2. </span>
                <div class="flex flex-col isco-text-break">
                  <h4 class="isco-h4 text-white">Pelatihan & Verifikasi</h4>
                  <p class="text-white">
                    Lakukan pelatihan prosedur dan pehamaman standar ISO.
                  </p>
                </div>
              </div>
              <div class="flex items-end gap-4">
                <span class="text-6xl text-accent"> 3. </span>
                <div class="flex flex-col isco-text-break">
                  <h4 class="isco-h4 text-white">Dokumentasi & Audit</h4>
                  <p class="text-white">
                    Berikan berkas yang dibutuhkan, kami lakukan dokumentasi dan
                    audit.
                  </p>
                </div>
              </div>
              <ButtonCTA
                button-text="Sukseskan Audit Anda"
                to="/"
                class="lg:mr-auto text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="flex flex-col mb-4 gap-2">
          <h2 class="isco-h2 text-center">Dapatkan Serfikat ISO Anda Segera</h2>
          <p class="text-center self-center">
            Kami menyediakan sertifikasi dari industri konstruksi, konsultan,
            hingga manufaktur.
          </p>
        </div>
        <div class="grid grid-cols-4 w-full place-items-center">
          <img
            src="@/public/images/logo/Logo-IscoGroup.png"
            class="h-8 w-8"
            alt="poto"
          >
          <img
            src="@/public/images/logo/Logo-IscoGroup.png"
            class="h-8 w-8"
            alt="poto"
          >
          <img
            src="@/public/images/logo/Logo-IscoGroup.png"
            class="h-8 w-8"
            alt="poto"
          >
          <img
            src="@/public/images/logo/Logo-IscoGroup.png"
            class="h-8 w-8"
            alt="poto"
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
