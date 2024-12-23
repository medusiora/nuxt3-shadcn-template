<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <Toaster class="pointer-events-auto" />
  </div>
</template>
