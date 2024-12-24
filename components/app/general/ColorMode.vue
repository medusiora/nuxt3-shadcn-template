<script setup lang="ts">
import { MoonStar, Sun } from 'lucide-vue-next'

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <Button variant="ghost" size="icon" @click="isDark = !isDark">
    <MoonStar v-if="isDark" class="h-7 w-7" />
    <Sun v-else class="h-7 w-7" />
    <span class="sr-only">Toggle Color Mode</span>
  </Button>
</template>
