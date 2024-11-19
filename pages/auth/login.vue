<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
const phone = ref("");

const signInWithPassword = async () => {
	const { error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value,
		phone: phone.value,
	});
	if (error) console.log(error);
};
</script>

<template>
	<div>
		<button @click="signInWithPassword">Sign In with E-Mail</button>
		<input v-model="email" type="email" />
		<input v-model="password" type="text" />
		<input v-model="phone" type="number" />
	</div>
</template>
