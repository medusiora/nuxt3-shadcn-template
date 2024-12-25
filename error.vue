<script setup lang="ts">
import type { NuxtError } from '#app'
import {
  ActivityIcon,
  FingerprintIcon,
  SproutIcon,
  TelescopeIcon,
} from 'lucide-vue-next'

defineProps({
  error: Object as () => NuxtError,
})

const route = useRoute()
const handleError = (path = '/') => clearError({ redirect: path })
const isDev = import.meta.dev
</script>

<template>
  <div class="container">
    <div
      class="flex min-h-screen items-center justify-center bg-background p-4"
    >
      <div class="w-full space-y-6 text-center">
        <!-- 401 Unauthorized -->
        <div v-if="error?.statusCode === 401" class="space-y-6">
          <FingerprintIcon :size="120" class="mx-auto text-muted-foreground" />
          <h1 class="text-4xl font-bold tracking-tight">Access Denied</h1>
          <p class="text-muted-foreground">
            Sorry, you don't have permission to access this page. Please log in
            or contact your administrator.
          </p>
        </div>

        <!-- 404 Not Found -->
        <div v-else-if="error?.statusCode === 404" class="space-y-6">
          <TelescopeIcon :size="120" class="mx-auto text-muted-foreground" />
          <h1 class="text-4xl font-bold tracking-tight">Page Not Found</h1>
          <p class="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <!-- 500 Server Error -->
        <div v-else-if="error?.statusCode === 500" class="space-y-6">
          <ActivityIcon :size="120" class="mx-auto text-muted-foreground" />
          <h1 class="text-4xl font-bold tracking-tight">Server Error</h1>
          <p class="text-muted-foreground">
            Oops! Something went wrong on our end. Please try again later.
          </p>
        </div>

        <!-- Default Error -->
        <div v-else class="space-y-6">
          <SproutIcon :size="120" class="mx-auto text-muted-foreground" />
          <h1 class="text-4xl font-bold tracking-tight">
            Oops! An Error Occurred
          </h1>
          <p class="text-muted-foreground">
            {{
              error?.message ||
              'Something unexpected happened. Please try again.'
            }}
          </p>
        </div>

        <!-- Stack -->
        <div
          v-if="isDev"
          class="max-h-[65vh] overflow-auto rounded-lg bg-gray-100 p-5 text-left"
        >
          <div v-if="error?.stack" v-html="error?.stack"></div>
        </div>

        <!-- Common Actions -->
        <div class="space-x-4">
          <Button variant="link" @click="handleError(route.fullPath)">
            Try Again
          </Button>
          <Button variant="link" @click="handleError('/')"> Go Home </Button>
        </div>
      </div>
    </div>
  </div>
</template>
