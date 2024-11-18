<script lang="ts" setup>
const supabase = useSupabaseClient();

const { data: country } = await useAsyncData("restaurant", async () => {
	const { data } = await supabase.from("countries").select();

	return data;
});
console.log(country);

const { data: bucket } = await supabase.storage.listBuckets();
</script>

<template>
	<div>
		<!-- Hero Section -->
		<div class="container mx-auto px-4 py-16">
			<div class="flex flex-col md:flex-row items-center">
				<div class="text-center md:text-left md:w-1/2 space-y-4">
					<h1 class="text-4xl font-bold leading-snug">
						Belajar Mudah <br />
						Strategi Dan Cara Ekspor <br />
						Sampai Ahli
					</h1>
					<p class="text-lg text-white">
						Misi kami adalah membantu orang-orang untuk menemukan kursus online
						terbaik dan belajar dengan ahlinya kapan saja, di mana
						saja.rang-orang untuk menemukan kursus online terbaik dan belajar
						dengan ahlinya kapan saja, di mana saja.rang-orang untuk menemukan
						kursus online terbaik dan belajar dengan ahlinya kapan saja, di mana
						saja.rang-orang untuk menemukan kursus online terbaik dan belajar
						dengan ahlinya kapan saja, di mana saja.rang-orang untuk menemukan
						kursus online terbaik dan belajar dengan ahlinya kapan saja, di mana
						saja.rang-orang untuk menemukan kursus online terbaik dan belajar
						dengan ahlinya kapan saja, di mana saja.rang-orang untuk menemukan
						kursus online terbaik dan belajar dengan ahlinya kapan saja, di mana
						saja.
					</p>
					<button class="bg-blue-500 text-white px-6 py-3 rounded-lg">
						Daftar
					</button>
				</div>
				<div class="md:w-1/2 mt-8 md:mt-0 flex justify-center">
					<img
						src="/assets/img/header.jpg"
						alt="Hero Image"
						class="rounded-lg shadow-lg max-w-full h-auto"
					/>
				</div>
			</div>
		</div>

		<!-- Popular Courses Section -->
		<div class="container mx-auto px-4 py-16">
			<h2 class="text-2xl font-semibold mb-8 text-center">Kursus terpopuler</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div
					v-for="course in 8"
					:key="course"
					class="rounded-lg overflow-hidden shadow-lg bg-white"
				>
					<img
						src="/assets/img/populer.png"
						alt="Course Image"
						class="w-full h-40 object-cover"
					/>
					<div class="p-4">
						<p class="text-center font-semibold text-black">Lorem Ipsum</p>
					</div>
				</div>
			</div>
		</div>

		<!-- "Pilihan Road Map Kami" Section -->
		<div class="container mx-auto px-4 py-16 bg-gray-100">
			<h2 class="text-2xl font-semibold mb-8 text-center text-black">
				pilihan Road Map kami
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div
					v-for="roadmap in 4"
					:key="roadmap"
					class="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4"
				>
					<img
						src="/assets/img/populer.png"
						alt="Roadmap Image"
						class="w-1/4 h-24 object-cover rounded-lg"
					/>
					<div class="flex-grow">
						<p class="text-lg font-semibold text-black">Lorem Ipsum</p>
						<p class="text-sm text-gray-500">Kevin Gilbert</p>
						<div class="flex items-center space-x-2 text-sm text-gray-500 mt-2">
							<Icon name="mdi-account" class="w-4 h-4" />
							<span>265.7K siswa</span>
							<Icon name="mdi-chart-line" class="w-4 h-4" />
							<span>pemula</span>
							<Icon name="mdi-clock-outline" class="w-4 h-4" />
							<span>6 jam</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Latest Courses Section -->
			<div class="container mx-auto px-4 py-16">
				<h2 class="text-2xl font-semibold mb-8 text-center dark:text-black">
					Kursus terbaru
				</h2>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
					<div
						v-for="latestCourse in 4"
						:key="latestCourse"
						class="rounded-lg overflow-hidden shadow-lg bg-white"
					>
						<img
							src="/assets/img/populer.png"
							alt="Latest Course Image"
							class="w-full h-40 object-cover"
						/>
						<div class="p-4">
							<p class="text-center font-semibold text-black">Lorem Ipsum</p>
						</div>
					</div>
				</div>
				<div class="text-center mt-8">
					<a href="#" class="text-blue-500">Telusuri Semua Kursus &rarr;</a>
				</div>
			</div>
		</div>
	</div>
</template>
