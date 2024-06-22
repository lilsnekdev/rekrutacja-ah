<template>
    <div class="container mx-auto text-center mt-12">
        <p class="text-2xl mb-4">{{ joke }}</p>
        <Button :to="'/'">Powrót</Button>
        <Button v-if="!isFavourite" @click="saveToFavourites" >📌</Button>
        <p v-if="savedMessage" class="text-green-500 mt-4">{{ savedMessage }}</p>
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

<style scoped>
.container {
    background-image: url('https://unsplash.com/photos/RmoWqDCqN2E');
    background-size: cover;
}
</style>
