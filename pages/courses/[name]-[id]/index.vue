courses<script lang="ts" setup>
import type { Tables } from '~/types/database.types'

const route = useRoute()

// Initialize Supabase client
const supabase = useSupabaseClient()
const user = useSupabaseUser()

// Course and videos state
const course = ref<Tables<'courses'>>()
const enrolledCourse = ref<Tables<'courses'>['id']>()
const videos = ref<Tables<'videos'>[]>([])

// Fetch course data on component mount
const fetchCourseData = async () => {
	const { data, error } = await supabase
		.from('courses')
		.select(`*, videos(*)`)
		.eq('id', route.params.id)
		.single()

	if (error) {
		console.error('Error fetching course:', error)
		return
	}

	const { id, name, desc, category, teacher, teacher_avatar, thumbnail } = data
	course.value = { id, name, desc, category, teacher, teacher_avatar, thumbnail }
	videos.value = data.videos

	// Fetch enrollment data to check if the user has enrolled
	const { data: dataEnrolledCourse, error: errorEnrolledCourse } = await supabase
		.from('enrolled_courses')
		.select('courses(id)')
		.eq('profile_id', user.value?.id!)
		.eq('course_id', route.params.id)
		.single()

	if (errorEnrolledCourse) {
		console.error('Error fetching enrolled course:', errorEnrolledCourse)
		return
	}

	enrolledCourse.value = dataEnrolledCourse?.courses?.id
}

// Call the fetch function on mount
onMounted(() => {
	fetchCourseData()
})

// Function to handle enrollment button click
const handleEnroll = async () => {
	if (!user.value?.id) {
		// Handle user not logged in
		navigateTo('/login')
		return
	}

	// Enroll the user in the course
	const { error } = await supabase.from('enrolled_courses').insert(
		{ profile_id: user.value.id, course_id: Number(route.params.id) })

	if (error) {
		console.error('Error enrolling user:', error)
		return
	}

	enrolledCourse.value = course.value?.id // Mark the user as enrolled
}
</script>

<template>
	<div class="course-page">
		<!-- Course Information Section -->
		<div class="hero-section bg-white shadow-lg rounded-lg p-6 mb-6">
			<img :src="course?.thumbnail!" alt="Course Thumbnail"
				class="w-full h-64 object-cover rounded-lg mb-4" />
			<h2 class="text-2xl font-semibold text-gray-800">{{ course?.name }}</h2>
			<p class="text-gray-600 mt-2">{{ course?.desc }}</p>
			<div class="teacher-info mt-4 flex items-center gap-4">
				<img :src="course?.teacher_avatar!" alt="Teacher Avatar"
					class="w-12 h-12 rounded-full" />
				<div>
					<p class="font-semibold text-gray-800">{{ course?.teacher }}</p>
				</div>
			</div>

			<!-- Enroll Button (Only shown if the user is not enrolled) -->
			<div v-if="!enrolledCourse" class="mt-6 text-center">
				<button @click="handleEnroll" class="px-6 py-2 bg-blue-600 text-white rounded-lg">
					Enroll in this Course
				</button>
			</div>
		</div>

		<!-- Videos Section (only visible if user is enrolled) -->
		<div v-if="enrolledCourse" class="videos-section">
			<h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Course Videos</h3>

			<div v-if="videos.length === 0" class="text-gray-500">
				No videos available for this course yet.
			</div>

			<div v-for="video in videos" :key="video.id" class="video-item flex items-center gap-4 mb-4">
				<NuxtLink :to="`${route.params.name}-${route.params.id}/videos/${video.title!}`">
					<img :src="video.thumbnail!" alt="Video Thumbnail"
						class="w-20 h-20 object-cover rounded-lg" />
					<div>
						<h4 class="font-semibold text-gray-800">{{ video.title }}</h4>
						<p class="text-sm text-gray-600">{{ video.desc }}</p>
					</div>
				</NuxtLink>
			</div>
		</div>

		<!-- Locked Video Content (Visible only if not enrolled) -->
		<div v-if="!enrolledCourse" class="locked-content mt-6 text-center">
			<p class="text-gray-600">Please enroll to view the videos.</p>
		</div>
	</div>
</template>

<style scoped>
.course-page {
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
}

.hero-section {
	background-color: white;
}

.videos-section {
	margin-top: 30px;
}

.video-item {
	padding: 12px;
	background-color: #f9fafb;
	border-radius: 8px;
}
</style>
