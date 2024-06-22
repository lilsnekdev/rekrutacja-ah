<template>
    <div class="container">
        <ul class="list-disc list-inside">
            <li v-for="(joke, index) in sortedFavourites" :key="index" class="mb-4">
                <span class="font-bold">{{ joke.date }}</span>: {{ joke.joke }}
            </li>
        </ul>
        <Button :to="'/'">Powrót</Button>
    </div>
</template>

<script>
import Button from '@/components/ui/Button.vue'

export default {
    components: {
        Button
    },
    data() {
        return {
            favourites: []
        };
    },
    created() {
        this.favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    },
    computed: {
        sortedFavourites() {
            return this.favourites.sort((a, b) => new Date(a.date) - new Date(b.date));
        }
    },
}
</script>
