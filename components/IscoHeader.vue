<template>
  <div class="fixed top-0 left-0 w-full px-3 md:px-8 lg:px-16">
    <header class="mx-auto h-[calc(var(--header-height))] max-w-7xl text-white">
      <div class="hidden w-full justify-end gap-8 py-2 md:flex">
        <div>
          <span class="mr-2"> # </span>
          iscogroup@gmail.com
        </div>
        <div>
          <span class="mr-2"> # </span>
          +62-812367723
        </div>
      </div>
      <div
        class="hidden w-full place-content-center justify-between py-2 md:flex"
      >
        <div class="place-content-center">ISCO Group</div>
        <nav class="place-content-center">
          <ul class="flex flex-row justify-between gap-8">
            <li class="isco-paragraph font-bold text-white">Beranda</li>
            <li class="isco-paragraph text-white">Layanan</li>
            <li class="isco-paragraph text-white">
              Tentang Kami<span class="ml-1.5">#</span>
            </li>
            <li class="isco-paragraph text-white">Berita & Artikel</li>
            <li class="isco-paragraph text-white">
              Anggota<span class="ml-1.5">#</span>
            </li>
          </ul>
        </nav>
        <ButtonCTAIcon />
      </div>
      <div
        class="flex w-full place-content-center justify-between py-4 md:hidden"
      >
        <div class="place-content-center">ISCO Group</div>
        <div>#</div>
      </div>
    </header>
  </div>
</template>
