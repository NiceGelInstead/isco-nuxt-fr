<template>
    <header class="fixed top-0 w-full" id="navbar">
        <div class="w-full bg-white" id="upper-navbar">
            <div class="isco-container px-4 justify-center">
                <a href="https://wa.me/iscogroup" target="_blank" rel="noopener noreferrer nofollow">
                    +62 8123-456-789
                </a>
            </div>    
        </div>
        <nav class="w-full bg-primary" id="lower-navbar">
            <div class="isco-container p-2 text-white space-x-4 flex">
                <nuxt-link to="/" class="btn hover:bg-secondary">Home</nuxt-link>
                <nuxt-link to="/players" class="btn hover:bg-secondary">Players</nuxt-link>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>