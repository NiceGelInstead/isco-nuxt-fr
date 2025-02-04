<template>

    <div class="grid w-full min-h-screen bg-[#FF5482] place-content-center space-y-4">
        <div class="flex gap-4">
            <svg class="w-32 h-32 fill-white animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
            <svg class="w-38 h-38 fill-white animate-bounce [animation-duration:1.5s]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z"/></svg>
            <svg class="w-32 h-32 fill-white animate-bounce [animation-duration:1.5s] [animation-delay:0.5s]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"/></svg>
        </div>
        <h1 class="text-black">Welcome</h1>
        <p class="text-black">The game will not end unless the world changes.</p>
        <nuxt-link to="/players" class="btn border-black border-2 hover:bg-black hover:text-white font-semibold">Get Started</nuxt-link>
    </div>
        
    </template>
      
    <script>
    export default {
        name: 'Home'
    }
    </script>