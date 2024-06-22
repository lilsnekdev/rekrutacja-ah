<template>
    <div class="layout">
        <Nuxt class="h-[100vh] w-full" />
    </div>
</template>

<script>
export default {
    layout: 'default'
}
</script>

<style>
.layout {
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    background-position: center;
    transition: background-image 1s ease-in-out;
}

@media (orientation: portrait) {
    .layout {
        background-image: url('~assets/images/bg-portrait.jpg');
    }
}

@media (orientation: landscape) {
    .layout {
        background-image: url('~assets/images/bg-landscape.jpg');
    }
}
</style>
