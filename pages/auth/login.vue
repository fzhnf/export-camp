<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");

async function signInWithPassword() {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error)
    console.log(error);
}
</script>

<template>
  <div>
    <button @click="signInWithPassword">
      Sign In with E-Mail
    </button>
    <input v-model="email" type="email">
    <input v-model="password" type="text">
  </div>
</template>
