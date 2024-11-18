<script>
export default {
  data() {
    return {
      popularCourses: [
        { id: 1, title: "Kursus 1", image: "/assets/img/populer.png", progress: 75 },
        { id: 2, title: "Kursus 2", image: "/assets/img/populer.png", progress: 40 },
        { id: 3, title: "Kursus 3", image: "/assets/img/populer.png", progress: 20 },
        { id: 4, title: "Kursus 4", image: "/assets/img/populer.png", progress: 90 },
        { id: 5, title: "Kursus 5", image: "/assets/img/populer.png", progress: 75 },
        { id: 6, title: "Kursus 6", image: "/assets/img/populer.png", progress: 40 },
        { id: 7, title: "Kursus 7", image: "/assets/img/populer.png", progress: 20 },
        { id: 8, title: "Kursus 8", image: "/assets/img/populer.png", progress: 90 },
        { id: 9, title: "Kursus 9", image: "/assets/img/populer.png", progress: 75 },
        { id: 10, title: "Kursus 10", image: "/assets/img/populer.png", progress: 40 },
        { id: 11, title: "Kursus 11", image: "/assets/img/populer.png", progress: 20 },
        { id: 12, title: "Kursus 12", image: "/assets/img/populer.png", progress: 90 },
      ],
    };
  },
};
</script>

<template>
  <div>
    <!-- Popular Courses Section -->
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-2xl font-semibold mb-8 text-center">
        Daftar Kursus
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="course in popularCourses"
          :key="course.id"
          class="rounded-lg overflow-hidden shadow-lg bg-white"
        >
          <img
            :src="course.image"
            alt="Course Image"
            class="w-full h-40 object-cover"
          >
          <div class="p-4">
            <p class="text-center font-semibold text-black">
              {{ course.title }}
            </p>
            <div class="mt-4 flex justify-between items-center">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Nonton Course
              </button>
              <div class="text-sm text-gray-500">
                {{ course.progress }}% Selesai
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tambahkan gaya tambahan di sini jika diperlukan */
</style>
