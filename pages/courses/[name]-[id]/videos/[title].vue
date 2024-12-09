<script lang="ts" setup>
import type { Tables } from '~/types/database.types'

// Reactive variables
const route = useRoute()
const router = useRouter()
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const video = ref<Tables<'videos'>>()
const videos = ref<Tables<'videos'>[]>([])
const watchedVideos = ref<Tables<'watched_videos'>['video_id'][]>([])

// Fetch videos for the course
const fetchVideos = async () => {
	const { data, error } = await supabase
		.from('course_videos')
		.select('videos(*)')
		.eq('course_id', route.params.id)

	if (error) {
		console.error('Error fetching videos:', error)
		return
	}

	// Flatten the videos data and store in 'videos'
	videos.value = data.map((video: any) => video.videos)

	// Set the currently selected video based on the title
	video.value = videos.value.find((video: any) => video.title === route.params.title)

	const { data: watchedVideosData, error: watchedVideosError } = await supabase
		.from('watched_videos')
		.select('video_id')
		.eq('profile_id', user.value!.id)

	if (!watchedVideosError) {
		watchedVideos.value = watchedVideosData.map((video) => video.video_id)
	}
}

const handleWatchVideo = async () => {
	// Ensure video is loaded
	if (!video.value || !video.value.id) return

	// Check if the current playing video ID is NOT inside the watchedVideos array
	if (watchedVideos.value.includes(Number(video.value?.id))) {
		return
	}

	// Insert the video ID into the watched_videos table for the user
	const { error } = await supabase
		.from('watched_videos')
		.insert({
			profile_id: user.value!.id,
			video_id: Number(video.value?.id)
		})

	// If there was no error, update the watchedVideos array to include the new video ID
	if (error) {
		console.error('Error inserting watched video:', error)
		return
	}

	// Add video ID to the watchedVideos array
	watchedVideos.value.push(Number(video.value?.id))
}

// Call the fetch function on mount
onMounted(() => {
	if (!user.value?.id) {
		// Handle user not logged in
		router.push('/login')
		return
	}

	fetchVideos()
})
</script>

<template>
	<div class="video-page flex">
		<!-- Video Player Section -->
		<div class="video-player flex-1">
			<div class="video-container bg-black mb-4">
				<!-- Video Player -->
				<video @click="handleWatchVideo" :src="video?.video" controls class="w-full h-full"
					v-if="video">
				</video>
			</div>
			<div class="video-description mt-4 text-black dark:text-white" v-if="video">
				<h2 class="text-2xl font-semibold">{{ video?.title }}</h2>
				<p class="mt-2">{{ video?.desc }}</p>
			</div>
		</div>

		<!-- Playlist Section -->
		<div class="playlist w-64 ml-8">
			<h3 class="text-xl font-semibold text-gray-800 mb-4 dark:text-white">Video Playlist</h3>
			<div class="playlist-items">
				<!-- Loop through videos to create the playlist -->
				<div v-for="videoItem in videos" :key="videoItem.id"
					class="playlist-item flex items-center gap-4 mb-4 cursor-pointer"
					:class="{ 'bg-gray-300': videoItem.id === video?.id }" :style="{
						filter: videoItem.id === video?.id ? 'saturate(100%)' : 'saturate(50%)'
					}">
					<img :src="videoItem.thumbnail!" alt="Video Thumbnail"
						class="w-20 h-20 object-cover rounded-lg" />
					<div>
						<h4 class="text-lg font-medium text-gray-700 dark:text-white">{{ videoItem.title }}</h4>
						<p class="text-sm text-gray-600 dark:text-white">{{ videoItem.desc }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
