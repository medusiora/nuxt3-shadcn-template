<script setup lang="ts">
import { AutoForm, AutoFormField } from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button'
import { toast } from 'vue-sonner'
import * as z from 'zod'

definePageMeta({
  layout: 'plain',
})

const schema = z.object({
  username: z
    .string({
      required_error: 'Username is required.',
    })
    .min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .min(8, {
      message: 'Password must be at least 8 characters.',
    }),
})

const loading = ref(false)
function onSubmit(values: Record<string, any>) {
  console.log('Submitted values:', values)
  loading.value = true

  setTimeout(() => {
    loading.value = false
    useRouter().push({ name: 'index' })
  }, 1000)

  // toast('Event has been created', {
  //   description: 'Sunday, December 03, 2023 at 9:00 AM',
  //   action: {
  //     label: 'Undo',
  //     onClick: () => console.log('Undo'),
  //   },
  // })
}
</script>

<template>
  <div
    class="container relative grid h-[800px] min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <div
      class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
    >
      <div class="absolute inset-0 bg-zinc-900" />
      <div class="relative z-20 flex items-center text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="mr-2 h-6 w-6"
        >
          <path
            d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
          />
        </svg>
        Acme Inc
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">
            &ldquo;This library has saved me countless hours of work and helped
            me deliver stunning designs to my clients faster than ever
            before.&rdquo;
          </p>
          <footer class="text-sm">Sofia Davis</footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div class="flex items-center justify-center py-12">
        <div class="mx-auto grid w-[350px] gap-6">
          <div class="grid gap-2 text-center">
            <h1 class="text-3xl font-bold">Login</h1>
            <p class="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <AutoForm
            class="grid gap-4"
            :schema="schema"
            :field-config="{
              password: {
                inputProps: {
                  type: 'password',
                  placeholder: '••••••••',
                },
              },
            }"
            @submit="onSubmit"
          >
            <div class="flex items-center">
              <a href="#" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>

            <Button type="submit">
              <Spinner v-if="loading" class="mr-2" />
              Login
            </Button>
          </AutoForm>

          <div class="mt-4 text-center text-sm">
            Don't have an account?
            <a href="#" class="underline"> Sign up </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
