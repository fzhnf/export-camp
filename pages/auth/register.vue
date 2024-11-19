<script setup lang="ts">
import { useRouter } from "vue-router"

const supabase = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref("");
const phone = ref("");

async function signUpWithPassword() {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    phone: phone.value,
  });
  if (error){
    console.log(error);
  } else {
    router.push("/auth/login")
  }
}
</script>

<template>
  <div>
    <button @click="signUpWithPassword">
      Sign Up
    </button>
    <input v-model="email" type="email">
    <input v-model="password" type="text">
    <input v-model="phone" type="number">
  </div>
</template>
