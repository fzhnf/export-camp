<script lang="ts" setup>
import type { Tables } from '~/types/database.types';

const route = useRoute()

// Initialize Supabase client
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const roadmap = ref<Tables<'roadmaps'>>()
const courses = ref<Tables<'courses'>[]>([])
const enrolled_courses = ref<Tables<'enrolled_courses'>['course_id'][]>([])


// Fetch roadmaps data on component mount
const fetchCourses = async () => {
	const { data, error } = await supabase.from('roadmaps').select(`*,courses (*)`).eq('id', route.params.id).single()
	const { data: dataEnrolledCourses, error: errorEnrolledCourses } = await supabase.from('enrolled_courses').select('course_id').eq('profile_id', user.value?.id!)


	if (error || errorEnrolledCourses) {
		console.error("Error fetching roadmaps:", error || errorEnrolledCourses)
		return
	}

	const { id, name, desc } = data
	roadmap.value = { id, name, desc }
	courses.value = data.courses
	enrolled_courses.value = dataEnrolledCourses.map(enrolledCourse => enrolledCourse.course_id)

}

// Call the fetch function
onMounted(() => {
	fetchCourses()
})
// Filtered courses based on the search query

</script>
<template>
	<!-- Hero Section: Roadmap -->
	<div class="relative bg-gray-800 text-white py-20 px-8 rounded-b-lg shadow-lg">
		<div class="absolute inset-0 bg-cover bg-center"
			:style="`background-image: url('https://via.placeholder.com/1500x500');`"></div>
		<div class="relative z-10 text-center">
			<h1 class="text-4xl font-bold">{{ roadmap?.name }}</h1>
			<p class="mt-4 text-xl">{{ roadmap?.desc }}</p>
		</div>
	</div>

	<!-- Courses Section: List of Courses -->
	<div class="mt-12 px-8">
		<h2 class="text-3xl font-semibold text-gray-800">Courses</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
			<NuxtLink v-for="course in courses" :key="course.id"
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
							<div v-if="enrolled_courses.some(enrolledCourseId => enrolledCourseId === course.id)"
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
