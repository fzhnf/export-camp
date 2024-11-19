<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const phone = ref("");

const signUpWithPassword = async () => {
	const { error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value,
		phone: phone.value,
	});
	if (error) console.log(error);
};
</script>

<template>
	<div>
		<button @click="signUpWithPassword">Sign Up</button>
		<input v-model="email" type="email" />
		<input v-model="password" type="text" />
		<input v-model="phone" type="number" />
	</div>
</template>
