<script lang="ts" setup>
import type { Tables } from '~/types/database.types';

// Initialize Supabase client
const supabase = useSupabaseClient()

// Create a reactive variable to store roadmaps data
const roadmaps = ref<Tables<'roadmaps'>[]>([])

// Fetch roadmaps data on component mount
const fetchRoadmaps = async () => {
	const { data, error } = await supabase.from('roadmaps').select('*')
	if (error) {
		console.error("Error fetching roadmaps:", error)
	} else {
		roadmaps.value = data
	}
}

// Call the fetch function
onMounted(() => {
	fetchRoadmaps()
})
</script>

<template>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
		<!-- Iterate over the roadmaps and display them in cards -->
		<div v-for="roadmap in roadmaps" :key="roadmap.id" class="relative">
			<NuxtLink :to="`/roadmaps/${roadmap.name}-${roadmap.id}`">
				<UCard class="p-6 shadow-lg bg-white dark:bg-gray-800 rounded-lg">
					<!-- Icon for roadmap -->
					<div class="absolute top-4 right-4 text-green-500">
						<UIcon name="mdi:map-outline" class="w-5 h-5" />
					</div>

					<!-- Card Content -->
					<h3 class="text-2xl font-semibold text-gray-800 dark:text-white">{{ roadmap.name
						}}</h3>
					<p class="mt-2 text-gray-600 dark:text-gray-300">{{ roadmap.desc }}</p>
				</UCard>
			</NuxtLink>
		</div>
	</div>
</template>
