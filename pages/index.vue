<template>
  <div class="container">
    <div class="flex flex-col sm:flex-row gap-3 sm:gap-5 min-w-full justify-center">
      <Button variant="gradient" :to="'/random-joke'">Losuj Chuck-a</Button>
      <Button :to="'/favourites'">
        Lista zapisanych Chuck-ów
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button.vue'

export default {
  components: {
    Button
  },
}
</script>