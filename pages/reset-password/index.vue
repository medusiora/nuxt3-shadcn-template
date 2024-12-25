<script setup lang="ts">
import { AutoForm, AutoFormField } from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button'
import { toast } from 'vue-sonner'
import * as z from 'zod'

definePageMeta({
  layout: 'auth',
})

useHead({
  title: 'Reset Password',
})

const schema = z.object({
  username: z
    .string({
      required_error: 'Username is required.',
    })
    .min(2, {
      message: 'Username must be at least 2 characters.',
    }),
})

const loading = ref(false)
const isResetPasswordWasSent = ref(false)

function onSubmit(values: Record<string, any>) {
  console.log('Submitted values:', values)
  loading.value = true

  setTimeout(() => {
    loading.value = false
    // useRouter().push({ name: 'login' })
    isResetPasswordWasSent.value = true
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
  <div class="flex items-center justify-center py-12">
    <div v-if="!isResetPasswordWasSent" class="mx-auto grid w-[350px] gap-6">
      <div class="grid gap-2 text-center">
        <h1 class="text-3xl font-bold">Reset Your Password</h1>
        <p class="text-balance text-muted-foreground">
          Enter your username below to reset your password
        </p>
      </div>
      <AutoForm
        class="grid gap-4"
        :schema="schema"
        :field-config="{
          username: {
            description:
              'We will send you an email with instructions on how to reset your password.',
          },
        }"
        @submit="onSubmit"
      >
        <Button type="submit">
          <Spinner v-if="loading" class="mr-2" />
          Reset Password
        </Button>
        <Button variant="ghost" as-child>
          <NuxtLink to="/login">Back</NuxtLink>
        </Button>
      </AutoForm>
    </div>
    <div v-else class="mx-auto grid w-[350px] gap-6">
      <div class="grid gap-2 text-center">
        <h1 class="text-3xl font-bold">Password Reset Email Sent</h1>
        <p class="text-balance text-muted-foreground">
          Check your email for instructions on how to reset your password.
        </p>
        <p class="text-balance text-muted-foreground">
          You can use the link in the email to reset your password. The link
          will expire in 1 hours.
        </p>
        <Divider label="Or" />
        <p class="text-balance text-muted-foreground">
          If you don't receive an email, please check your spam folder. Or
          <a href="#" class="underline underline-offset-4 hover:text-primary">
            click here
          </a>
          to resend the email.
        </p>
      </div>

      <Button variant="ghost" as-child>
        <NuxtLink to="/login">Back</NuxtLink>
      </Button>
    </div>
  </div>
</template>
