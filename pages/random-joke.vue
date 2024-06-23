<template>
    <div class="container">
        <div class="flex flex-col gap-3 sm:gap-5 min-w-full justify-center items-center">
            <div
                class="w-full bg-white opacity-[0.7] rounded-xl p-4 min-h-[300px] flex items-center text-center relative max-w-[768px]">
                <button v-if="!isFavourite && !loading" @click="saveToFavourites"
                    class="absolute top-2 right-2 opacity-[0.7] hover:opacity-[1]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6">
                        <title>pin</title>
                        <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
                    </svg>
                </button>
                <div class="flex flex-col items-center justify-center min-w-[100%]">
                    <Loader v-if="loading" />
                    <p v-else-if="error" class="text-red-500 text-xl font-bold">{{ error }}</p>
                    <p v-else class="text-2xl mb-4 max-w-sm">{{ joke }}</p>
                    <p v-if="savedMessage" class="text-green-500 mt-4 font-bold text-xl">{{ savedMessage }}</p>
                </div>
            </div>
            <Button :to="'/'" small>Powrót</Button>
            <canvas ref="confettiCanvas" class="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Button from '@/components/ui/Button.vue'
import Loader from '@/components/utils/Loader.vue';
import confetti from 'canvas-confetti';

export default {
    components: {
        Button,
        Loader
    },
    data() {
        return {
            joke: '',
            savedMessage: '',
            isFavourite: false,
            loading: true,
            error: ''
        };
    },
    async created() {
        try {
            const response = await axios.get('/api/random');
            this.joke = response.data.joke;
            this.checkIfFavourite();
        } catch (error) {
            console.error(error);
            this.error = 'Wystąpił błąd podczas ładowania Chuck-a. Spróbuj ponownie później.';
        } finally {
            this.loading = false;
        }
    },
    methods: {
        saveToFavourites() {
            const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
            favourites.push({ joke: this.joke, date: new Date().toISOString().split('T')[0] });
            localStorage.setItem('favourites', JSON.stringify(favourites));
            this.isFavourite = true;
            this.savedMessage = 'Zapisano żart';
            this.launchConfetti();
        },
        checkIfFavourite() {
            const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
            this.isFavourite = favourites.some(fav => fav.joke === this.joke);
        },
        launchConfetti() {
            const myCanvas = this.$refs.confettiCanvas;
            confetti.create(myCanvas, {
                resize: true,
                useWorker: true
            })({
                particleCount: 200,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }
}
</script>
