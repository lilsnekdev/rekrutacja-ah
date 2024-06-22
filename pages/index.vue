<template>
  <div class="container">
    <Button variant="gradient" :to="'/random-joke'">Losuj Chuck-a</Button>
    <Button :to="'/favourites'">
      Lista zapisanych Chuck-ów
    </Button>
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
