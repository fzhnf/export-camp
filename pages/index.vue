<template>
  <div>
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col md:flex-row items-center">
        <div class="text-center md:text-left md:w-1/2 space-y-4 pr-1">
          <h1 class="text-4xl font-bold leading-snug">
            Belajar Mudah <br>
            Strategi Dan Cara Ekspor <br>
            Sampai Ahli
          </h1>
          <p class="text-lg text-black dark:text-white">
            Misi kami adalah membantu orang-orang untuk menemukan kursus online
            terbaik dan belajar dengan ahlinya kapan saja, di mana saja.
          </p>
          <button class="bg-blue-500 text-white px-6 py-3 rounded-lg">
            Daftar
          </button>
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src="/assets/img/utama.jpg" alt="Hero Image" class="rounded-lg shadow-lg max-w-full h-auto">
        </div>
      </div>
    </div>

    <!-- Popular Courses Section -->
    <div class="container mx-auto  px-4 py-16 rounded-t-lg">
      <h2 class="text-2xl font-semibold mb-8 text-center text-black dark:text-white">
        Kursus Terpopuler
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="course in 1" :key="course" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white">
          <img src="/assets/img/EKSPOR-IMPOR.png" alt="Course Image" class="w-full h-40 object-cover">
          <div class="p-4">
            <p class="text-center font-semibold text-black dark:text-white dark:text-white">
              Pelatihan Prosedur Ekspor Impor
            </p>
          </div>
        </div>
        <div v-for="course in 1" :key="course" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white">
          <img src="/assets/img/eksport_becak.jpg" alt="Course Image" class="w-full h-40 object-cover">
          <div class="p-4">
            <p class="text-center font-semibold text-black dark:text-white">
              Pelatihan Ekspor Becak
            </p>
          </div>
        </div>
        <div v-for="course in 1" :key="course" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white">
          <img src="/assets/img/ikan_hias.jpg" alt="Course Image" class="w-full h-40 object-cover">
          <div class="p-4">
            <p class="text-center font-semibold text-black dark:text-white">
              Pelatihan Ekspor Ikan Hias
            </p>
          </div>
        </div>
        <div v-for="course in 1" :key="course" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white">
          <img src="/assets/img/img-training.jpg" alt="Course Image" class="w-full h-40 object-cover">
          <div class="p-4">
            <p class="text-center font-semibold text-black dark:text-white">
              Pelatihan Tips Pemasaran Ekspor Produk Pertanian
            </p>
          </div>
        </div>
        <div v-for="course in 1" :key="course" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white">
          <img src="/assets/img/Kelas-Ekspor-Fundamental.png" alt="Course Image" class="w-full h-40 object-cover">
          <div class="p-4">
            <p class="text-center font-semibold text-black dark:text-white">
              Pelatihan Ekspor Kelas Fundamental 
            </p>
          </div>
        </div>
        <div v-for="course in 1" :key="course" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white">
          <img src="/assets/img/Kelas-Ekspor-Master-Class.png" alt="Course Image" class="w-full h-40 object-cover">
          <div class="p-4">
            <p class="text-center font-semibold text-black dark:text-white">
              Pelatihan Ekspor Master Class
            </p>
          </div>
        </div>
        <div v-for="course in 1" :key="course" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white">
          <img src="/assets/img/pengiriman+produk.jpg" alt="Course Image" class="w-full h-40 object-cover">
          <div class="p-4">
            <p class="text-center font-semibold text-black dark:text-white">
              Pelatihan Pengiriman Produk Ekspor 
            </p>
          </div>
        </div>
        <div v-for="course in 1" :key="course" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white">
          <img src="/assets/img/professional_training.png" alt="Course Image" class="w-full h-40 object-cover">
          <div class="p-4">
            <p class="text-center font-semibold text-black dark:text-white">
              Pelatihan Professional Ekspor
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- "Pilihan Road Map Kami" Section -->
    <div class="container mx-auto px-4 py-16 ">
      <h2 class="text-2xl font-semibold mb-8 text-center text-black dark:text-white">
        Pilihan Road Map Kami
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="roadmap in 1" :key="roadmap" class="bg-white dark:bg-gray-600 rounded-lg shadow-lg p-4 flex items-center space-x-4">
          <img src="/assets/img/EKSPOR-IMPOR.png" alt="Roadmap Image" class="w-1/4 h-24 object-cover rounded-lg">
          <div class="flex-grow">
            <p class="text-lg font-semibold text-black dark:text-white dark:text-gray-200">
              Pelatihan Prosedur Ekspor Impor
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-200">
              John Doe
            </p>
            <div class="flex items-center space-x-2 text-sm text-gray-500 mt-2 dark:text-gray-200">
              <Icon name="mdi-account" class="w-4 h-4" />
              <span>959.4K siswa</span>
              <Icon name="mdi-chart-line" class="w-4 h-4" />
              <span>pemula</span>
              <Icon name="mdi-clock-outline" class="w-4 h-4" />
              <span>8 jam</span>
            </div>
          </div>
        </div>
        <div v-for="roadmap in 1" :key="roadmap" class="bg-white dark:bg-gray-600 rounded-lg shadow-lg p-4 flex items-center space-x-4">
          <img src="/assets/img/ikan_hias.jpg" alt="Roadmap Image" class="w-1/4 h-24 object-cover rounded-lg">
          <div class="flex-grow">
            <p class="text-lg font-semibold text-black dark:text-white dark:text-gray-200">
              Pelatihan Ekspor Ikan Hias
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-200">
              Kevin Angger
            </p>
            <div class="flex items-center space-x-2 text-sm text-gray-500 mt-2 dark:text-gray-200">
              <Icon name="mdi-account" class="w-4 h-4" />
              <span>843.7K siswa</span>
              <Icon name="mdi-chart-line" class="w-4 h-4" />
              <span>mahir</span>
              <Icon name="mdi-clock-outline" class="w-4 h-4" />
              <span>8 jam</span>
            </div>
          </div>
        </div>
        <div v-for="roadmap in 1" :key="roadmap" class="bg-white dark:bg-gray-600 rounded-lg shadow-lg p-4 flex items-center space-x-4">
          <img src="/assets/img/Kelas-Ekspor-Fundamental.png" alt="Roadmap Image" class="w-1/4 h-24 object-cover rounded-lg">
          <div class="flex-grow">
            <p class="text-lg font-semibold text-black dark:text-white dark:text-gray-200">
              Pelatihan Ekspor Kelas Fundamental 
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-200">
              Iwan False
            </p>
            <div class="flex items-center space-x-2 text-sm text-gray-500 mt-2 dark:text-gray-200">
              <Icon name="mdi-account" class="w-4 h-4" />
              <span>583.7K siswa</span>
              <Icon name="mdi-chart-line" class="w-4 h-4" />
              <span>mahir</span>
              <Icon name="mdi-clock-outline" class="w-4 h-4" />
              <span>12 jam</span>
            </div>
          </div>
        </div>
        <div v-for="roadmap in 1" :key="roadmap" class="bg-white dark:bg-gray-600 rounded-lg shadow-lg p-4 flex items-center space-x-4">
          <img src="/assets/img/pengiriman+produk.jpg" alt="Roadmap Image" class="w-1/4 h-24 object-cover rounded-lg">
          <div class="flex-grow">
            <p class="text-lg font-semibold text-black dark:text-white dark:text-gray-200">
              Pelatihan Pengiriman Produk Ekspor
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-200">
              Arya Andika Trisnawan
            </p>
            <div class="flex items-center space-x-2 text-sm text-gray-500 mt-2 dark:text-gray-200">
              <Icon name="mdi-account" class="w-4 h-4" />
              <span>432.7K siswa</span>
              <Icon name="mdi-chart-line" class="w-4 h-4" />
              <span>pemula</span>
              <Icon name="mdi-clock-outline" class="w-4 h-4" />
              <span>8 jam</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Latest Courses Section -->
      <div class="container mx-auto px-4 py-16 rounded-b-lg">
        <h2 class="text-2xl font-semibold mb-8 text-center dark:text-white">
          Kursus terbaru
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="latestCourse in 1" :key="latestCourse" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white dark:bg-gray-600">
            <img src="/assets/img/eksport_becak.jpg" alt="Latest Course Image" class="w-full h-40 object-cover">
            <div class="p-4">
              <p class="text-center font-semibold text-black dark:text-white dark:text-gray-200">
                Pelatihan Ekspor Becak
              </p>
            </div>
          </div>
          <div v-for="latestCourse in 1" :key="latestCourse" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white dark:bg-gray-600">
            <img src="/assets/img/img-training.jpg" alt="Latest Course Image" class="w-full h-40 object-cover">
            <div class="p-4">
              <p class="text-center font-semibold text-black dark:text-white dark:text-gray-200">
                Pelatihan Tips Pemasaran Ekspor Produk Pertanian
              </p>
            </div>
          </div>
          <div v-for="latestCourse in 1" :key="latestCourse" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white dark:bg-gray-600">
            <img src="/assets/img/Kelas-Ekspor-Master-Class.png" alt="Latest Course Image" class="w-full h-40 object-cover">
            <div class="p-4">
              <p class="text-center font-semibold text-black dark:text-white dark:text-gray-200">
                Pelatihan Ekspor Master Class
              </p>
            </div>
          </div>
          <div v-for="latestCourse in 1" :key="latestCourse" class="rounded-lg overflow-hidden dark:bg-gray-600 shadow-lg bg-white dark:bg-gray-600">
            <img src="/assets/img/professional_training.png" alt="Latest Course Image" class="w-full h-40 object-cover">
            <div class="p-4">
              <p class="text-center font-semibold text-black dark:text-white dark:text-gray-200">
                Pelatihan Professional Ekspor
              </p>
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
