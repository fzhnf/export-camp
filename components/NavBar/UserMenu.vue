<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const avatar = ref<string | undefined>(undefined)
const items = [
	[{
		label: user.value!.email!,
		slot: 'account',
		disabled: true
	}], [{
		label: 'dashboard',
		icon: 'i-heroicons-cog-8-tooth',
		click: () => navigateTo('/dashboard')
	}], [{
		label: 'Sign out',
		icon: 'i-heroicons-arrow-left-on-rectangle',
		click: () => signOut()
	}]
]

const signOut = async () => {
	const { error } = await supabase.auth.signOut()
	navigateTo('/')
	if (error) {
		console.error('Sign out error:', error.message)
	}
}

const getAvatar = async () => {
	if (!user.value) return
	const { data } = await supabase.from('profiles').select('avatar').eq('id', user.value.id).single()
	avatar.value = data?.avatar!
}

onMounted(() => {
	if (user) {
		getAvatar()
	} else {
		navigateTo('/login')
	}
})
</script>

<template>
	<UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' }, width: 'w-auto' }"
		:popper="{ placement: 'bottom-start' }">
		<UAvatar :src="avatar" />

		<template #account="{ item }">
			<div class="text-left">
				<p>
					Signed in as
				</p>
				<p class="truncate font-medium text-gray-900 dark:text-white">
					{{ item.label }}
				</p>
			</div>
		</template>

		<template #item="{ item }">
			<span class="truncate">{{ item.label }}</span>

			<UIcon :name="item.icon"
				class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
		</template>
	</UDropdown>
</template>
