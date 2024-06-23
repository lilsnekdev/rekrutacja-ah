<template>
    <div
        :class="{ 'layout': true, 'high-quality-portrait': isPortraitHighQualityLoaded, 'high-quality-landscape': isLandscapeHighQualityLoaded }">
        <Nuxt class="h-[100vh] w-full" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPortraitHighQualityLoaded: false,
            isLandscapeHighQualityLoaded: false
        };
    },
    mounted() {
        this.loadHighQualityImage();
        window.addEventListener('resize', this.loadHighQualityImage);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.loadHighQualityImage);
    },
    methods: {
        loadHighQualityImage() {
            const isPortrait = window.matchMedia("(orientation: portrait)").matches;
            if (isPortrait && !this.isPortraitHighQualityLoaded) {
                const imgPortrait = new Image();
                imgPortrait.src = require('~/assets/images/bg-portrait-hq.jpg');
                imgPortrait.onload = () => {
                    this.isPortraitHighQualityLoaded = true;
                };
            } else if (!isPortrait && !this.isLandscapeHighQualityLoaded) {
                const imgLandscape = new Image();
                imgLandscape.src = require('~/assets/images/bg-landscape-hq.jpg');
                imgLandscape.onload = () => {
                    this.isLandscapeHighQualityLoaded = true;
                };
            }
        }
    }
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

    .high-quality-portrait {
        background-image: url('~assets/images/bg-portrait-hq.jpg');
    }
}

@media (orientation: landscape) {
    .layout {
        background-image: url('~assets/images/bg-landscape.jpg');
    }

    .high-quality-landscape {
        background-image: url('~assets/images/bg-landscape-hq.jpg');
    }
}
</style>
