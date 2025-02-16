<template>
  <main id="berita">
    <section class="py-44 pb-32">
      <div class="container">
        <HeroTemplate
          title="Berita & Artikel"
          tagline="Temukan Informasi Terkini Di Dunia Konstruksi"
          description="Berita, pengumuman, dan wawasan terkini seputar dunia kontraktor dan konsultan."
        />
      </div>
    </section>

    <section>
      <div class="container">
        <PlayersCarousel :players-per-page="3" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>
