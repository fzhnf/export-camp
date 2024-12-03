<template>
	<div class="flex items-center space-x-4">
		<UAvatar :src="avatar" alt="Avatar" />
		<div class="space-y-2">
			<USkeleton class="h-4 w-[250px]" />
			<USkeleton class="h-4 w-[200px]" />
		</div>
	</div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const avatar = ref<string | undefined>(undefined)

async function getAvatar() {
	if (!user.value) return
	const { data } = await supabase.from('profiles').select('avatar').eq('id', user.value.id).single()
	avatar.value = data?.avatar!
}
onMounted(() => { if (user) getAvatar() })
watch(user, () => { if (!user.value) navigateTo('/') })
</script>
