<script setup lang="ts">
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");

const signUp = async () => {
	const { data, error } = await supabase.auth.signUp({
		email: email.value,
		password: password.value,
	});
	if (error) console.log(error);
	console.log(data);
};
</script>
<template>
	<div>
		<button @click="signUp">Sign In with E-Mail</button>
		<input v-model="email" type="email" />
		<input v-model="password" type="password" />
	</div>
</template>

// vim: set ts=2 sw=2:
