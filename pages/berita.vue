<template>
  <section class="pt-32 pb-32">
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
      <PlayersCarousel :playersPerPage="3" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>
