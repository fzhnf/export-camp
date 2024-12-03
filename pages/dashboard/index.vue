<script lang="ts" setup>
import type { Tables } from '~/types/database.types'

// Supabase setup
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

// Reactive data
const profile = ref<Tables<'profiles'>>()
const enrolledCourses = ref<Tables<'courses'>[]>([])
const watchedVideos = ref<Tables<'videos'>[]>([])

// Fetch user profile
const getAvatar = async () => {
	if (!user.value) return
	const { data, error } = await supabase.from('profiles').select('*').eq('id', user.value.id).single()
	if (error) return
	profile.value = data!
}

// Fetch enrolled courses
const getEnrolledCourses = async () => {
	if (!user.value) return
	const { data, error } = await supabase.from('enrolled_courses').select('courses(*)').eq('profile_id', user.value.id)
	if (error) return
	enrolledCourses.value = data!.map((course: any) => course.courses)
}

// Fetch watched videos
const getWatchedVideos = async () => {
	if (!user.value) return
	const { data, error } = await supabase.from('watched_videos').select('videos(*)').eq('profile_id', user.value.id)
	if (error) return
	watchedVideos.value = data!.map((video: any) => video.videos)
}

// Initialize dashboard data
onMounted(() => {
	if (!user.value) {
		router.push('/login')
		return
	}
	getAvatar()
	getEnrolledCourses()
	getWatchedVideos()
})

// Watch for user changes and redirect to login if not authenticated
watch(user, () => {
	if (!user.value) router.push('/login')
})
</script>

<template>
	<div class="dashboard-container">
		<!-- Profile Section -->
		<div class="profile-section flex items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
			<img :src="profile?.avatar!" alt="User Avatar" class="w-16 h-16 rounded-full object-cover" />
			<div>
				<h2 class="text-white text-2xl font-semibold">{{ profile?.username }}</h2>
				<p class="text-gray-300">Welcome back!</p>
			</div>
		</div>

		<!-- Enrolled Courses Section -->
		<div class="enrolled-courses mb-8">
			<h3 class="text-xl text-black dark:text-white font-semibold text-gray-800 mb-4">Enrolled Courses</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Loop through enrolled courses -->
				<div v-for="course in enrolledCourses" :key="course.id"
					class="course-card bg-white shadow-lg rounded-lg p-4">
					<img :src="course.thumbnail!" alt="Course Thumbnail"
						class="w-full h-40 object-cover rounded-lg mb-4" />
					<h4 class="text-lg font-medium text-gray-700">{{ course.name }}</h4>
					<p class="text-sm text-gray-600">{{ course.desc }}</p>
					<div class="teacher-info mt-4 flex items-center gap-2">
						<img :src="course.teacher_avatar!" alt="Teacher Avatar"
							class="w-8 h-8 rounded-full object-cover" />
						<span class="text-sm text-gray-500">{{ course.teacher }}</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Watched Videos Section -->
		<div class="watched-videos">
			<h3 class="text-xl text-black dark:text-white font-semibold text-gray-800 mb-4">Watched Videos</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Loop through watched videos -->
				<div v-for="video in watchedVideos" :key="video.id"
					class="video-card bg-white shadow-lg rounded-lg p-4">
					<img :src="video.thumbnail!" alt="Video Thumbnail"
						class="w-full h-40 object-cover rounded-lg mb-4" />
					<h4 class="text-lg font-medium text-gray-700">{{ video.title }}</h4>
					<p class="text-sm text-gray-600">{{ video.desc }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.dashboard-container {
	padding: 2rem;
}

.profile-section {
	display: flex;
	align-items: center;
}

.course-card,
.video-card {
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.course-card:hover,
.video-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.teacher-info {
	display: flex;
	align-items: center;
}

.teacher-info img {
	border: 2px solid #fff;
}

.grid {
	display: grid;
	gap: 1.5rem;
}

@media (max-width: 768px) {
	.grid {
		grid-template-columns: 1fr;
	}
}

@media (min-width: 768px) {
	.grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1024px) {
	.grid {
		grid-template-columns: repeat(3, 1fr);
	}
}
</style>
