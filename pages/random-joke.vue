<template>
    <div class="container">
        <div class="flex flex-col gap-3 sm:gap-5 min-w-full justify-center items-center">
            <div class="bg-white opacity-[0.7] rounded-xl p-4 min-h-[300px] flex items-center text-center relative">
                <button v-if="!isFavourite" @click="saveToFavourites" class="absolute top-2 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6">
                        <title>pin</title>
                        <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
                    </svg>
                </button>
                <p class="text-2xl mb-4">{{ joke }}</p>
            </div>
            <Button :to="'/'" small>Powrót</Button>
            <p v-if="savedMessage" class="text-green-500 mt-4">{{ savedMessage }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Button from '@/components/ui/Button.vue'

export default {
    components: {
        Button
    },
    data() {
        return {
            joke: '',
            savedMessage: '',
            isFavourite: false
        };
    },
    async created() {
        const response = await axios.get('/api/random');
        this.joke = response.data.joke;
        this.checkIfFavourite();
    },
    methods: {
        saveToFavourites() {
            const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
            favourites.push({ joke: this.joke, date: new Date().toISOString().split('T')[0] });
            localStorage.setItem('favourites', JSON.stringify(favourites));
            this.isFavourite = true;
            this.savedMessage = 'Zapisano ulubiony żart';
        },
        checkIfFavourite() {
            const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
            this.isFavourite = favourites.some(fav => fav.joke === this.joke);
        }
    }
}
</script>
