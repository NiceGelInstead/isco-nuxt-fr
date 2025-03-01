<template>
  <div class="w-full px-3 md:px-8 lg:px-16 fixed top-0 left-0">
    <header class="h-[calc(var(--header-height))] max-w-7xl mx-auto text-white">
      <div class="hidden md:flex gap-8 justify-end w-full py-2">
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
        class="hidden md:flex justify-between place-content-center w-full py-2"
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
        class="flex md:hidden justify-between place-content-center w-full py-4"
      >
        <div class="place-content-center">ISCO Group</div>
        <div>#</div>
      </div>
    </header>
  </div>
</template>
