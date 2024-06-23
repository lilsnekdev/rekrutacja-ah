<template>
    <div class="container flex-col gap-4 justify-normal">
        <ul class="list-disc list-inside flex gap-4 flex-wrap justify-center overflow-auto">
            <li v-for="(joke, index) in sortedFavourites" :key="index" class="bg-white opacity-[0.7]
                rounded-xl p-2 flex items-center text-center relative w-[100%] max-w-sm h-[180px] sm:h-[200px]">
                <span class="absolute top-2 left-2">{{ joke.date }}</span>
                <p class="text-xl sm:text-2xl py-6 w-[100%]">{{ joke.joke }}</p>
            </li>
        </ul>
        <Button :to="'/'" small>Powrót</Button>
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
