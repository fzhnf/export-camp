<script setup lang="ts">
const supabase = useSupabaseClient()
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: state.email,
    password: state.password,
  })
  if (error) { console.log(error) } else {
    navigateTo('/dashboard')
  }
  console.log(data)
  console.log(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
  Don't have an account?
  <ULink to="/register" active-class="text-primary"
    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
    Register here
  </ULink>
</template>
