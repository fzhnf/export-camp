<script lang="ts" setup>
import type { Tables } from '~/types/database.types';

// Initialize Supabase client
const supabase = useSupabaseClient()
const user = useSupabaseUser()

// Create a reactive variable to store roadmaps data
const courses = ref<Tables<'courses'>[]>([])
const enrolled_courses = ref<Tables<'courses'>[]>([])

// Fetch roadmaps data on component mount
const fetchCourses = async () => {
	const { data: dataCourses, error: errorCourses } = await supabase.from('courses').select('*')
	const { data: dataEnrolledCourses, error: errorEnrolledCourses } = await supabase.from('profiles').select(`courses (*)`).eq('id', user.value?.id!).single()

	if (errorCourses || errorEnrolledCourses) {
		console.error("Error fetching roadmaps:", errorCourses || errorEnrolledCourses)
		return
	}
	courses.value = dataCourses
	enrolled_courses.value = dataEnrolledCourses.courses

}

// Call the fetch function
onMounted(() => {
	fetchCourses()
})

const searchQuery = ref('')
const filteredCourses = computed(() => {
	if (!searchQuery.value.trim()) return courses.value
	const query = searchQuery.value.toLowerCase()
	return courses.value.filter(course =>
		course.name.toLowerCase().includes(query) ||
		course.desc?.toLowerCase().includes(query) ||
		course.category?.toLowerCase().includes(query)
	)
})
</script>
<template>
	<!-- Search bar at the top -->
	<div class="px-8 py-4">
		<UInput v-model="searchQuery" icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white"
			:trailing="false" placeholder="Search..." class="w-full max-w-lg mx-auto" />
	</div>

	<!-- Grid of courses -->
	<div class="px-8 mt-6">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			<NuxtLink v-for="course in filteredCourses" :key="course.id"
				:to="`/courses/${course.name}-${course.id}`">
				<UCard :background="'bg-white dark:bg-gray-800'" :shadow="'shadow-lg'"
					:rounded="'rounded-lg'" :ui="{
						base: 'mb-6',
						body: {
							base: '',
							background: 'bg-gray-50 dark:bg-gray-900',
							padding: 'px-4 py-5 sm:p-6'
						},
						header: {
							base: '',
							background: '',
							padding: 'px-4 py-5 sm:px-6'
						},
						footer: {
							base: '',
							background: 'bg-gray-100 dark:bg-gray-700',
							padding: 'px-4 py-4 sm:px-6'
						}
					}">
					<!-- Header slot for course title -->
					<template #header>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{
							course.name
						}}</h3>
					</template>

					<!-- Default slot for course description and category -->
					<img :src="course.thumbnail!" alt="Course Thumbnail"
						class="w-full h-48 object-cover rounded-lg mb-4" />
					<p class="mt-2 text-gray-600 dark:text-gray-300 text-sm">{{ course.desc }}</p>

					<div class="mt-4 text-xs text-gray-500 dark:text-gray-400">
						<span class="block">
							<UBadge>{{ course.category }}</UBadge>
						</span>
					</div>

					<!-- Footer slot for teacher info and avatar -->
					<template #footer>
						<div class="flex flex-row items-center justify-between">
							<div class="flex-col">
								<p class="block text-gray-800 dark:text-white">{{
									course.teacher
								}}</p>
								<img :src="course.teacher_avatar!" alt="Teacher Avatar"
									class="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-600" />
							</div>
							<div v-if="enrolled_courses.some(enrolledCourse => enrolledCourse.id === course.id)"
								class="text-sm text-green-500">
								<UIcon name="mdi:check" class="w-5 h-5" />
								<span>Enrolled</span>
							</div>
						</div>
					</template>
				</UCard>
			</NuxtLink>

		</div>
	</div>
</template>
