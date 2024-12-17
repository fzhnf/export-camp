<template>
  <div>
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col md:flex-row items-center">
        <div class="text-center md:text-center space-y-4 pr-1">
          <h1 class="text-4xl font-bold leading-snug">
            About <br>
          </h1>
        </div>
      </div>
    </div>
    <div class="grid-container">
      <div class="rounded-lg grid-item">
        <img src="/assets/img/ikan_hias-cp.jpg" alt="Zaky Dio" class="w-full h-40 object-cover object-top rounded-lg mb-4">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Zaky Dio</h3>
        <p class="text-gray-600 dark:text-gray-300">Data Analyst</p>
        <p class="text-gray-600 dark:text-gray-300">Supabase, PostgreSQL</p>
        <button @click="showModal('Zaky Dio', 'Data Analyst', 'Zaky is a skilled Data Analyst with experience in Supabase and PostgreSQL.', 
          [{ platform: 'Github', url: 'https://github.com/princenizroh', 
            icon: '/assets/icons/export-camp-logo.svg' }])" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Detail</button>
      </div>
      <div class="rounded-lg grid-item">
        <img src="/assets/img/pelatihan ekspor-cp.jpg" alt="faiz ahnaf" class="w-full h-40 object-cover object-top rounded-lg mb-4">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Faiz Ahnaf</h3>
        <p class="text-gray-600 dark:text-gray-300">FullStack Developer</p>
        <p class="text-gray-600 dark:text-gray-300">Vue, TailwindCSS</p>
        <button @click="showModal('Faiz Ahnaf', 'FullStack Developer', 'Faiz is a FullStack Developer with expertise in Vue and TailwindCSS.', 
          [{ platform: 'Github', url: 'https://github.com/fzhnf', 
            icon: '/assets/icons/linkedin.png' }])" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Detail</button>
      </div>
      <div class="rounded-lg grid-item">
        <img src="/assets/img/pengiriman+produk-cp.jpg" alt="Raihan Fadilah" class="w-full h-40 object-cover rounded-lg mb-4">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Raihan Fadilah</h3>
        <p class="text-gray-600 dark:text-gray-300">Backend Developer</p>
        <p class="text-gray-600 dark:text-gray-300">Vue</p>
        <button @click="showModal('Raihan Fadilah', 'Backend Developer', 'Raihan is a Backend Developer with expertise in Vue.', 
          [{ platform: 'Github', url: 'https://github.com/rvyhvn', 
            icon: '/assets/icons/linkedin.png' }])" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Detail</button>
      </div>
      <div class="rounded-lg grid-item">
        <img src="/assets/img/professional_training-cp.png" alt="Muhammad Rafi Al Ayubi" class="w-full h-40 object-cover rounded-lg mb-4">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Muhammad Rafi Al Ayubi</h3>
        <p class="text-gray-600 dark:text-gray-300">UI/UX Designer</p>
        <p class="text-gray-600 dark:text-gray-300">Figma, Sketch</p>
        <button @click="showModal('Muhammad Rafi Al Ayubi', 'UI/UX Designer', 'Rafi is a UI/UX Designer with expertise in Figma and Sketch.', 
          [{ platform: 'Github', url: 'https://github.com/ryushix', 
            icon: '/assets/icons/linkedin.png' }])" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Detail</button>
      </div>
      <div class="rounded-lg grid-item">
        <img src="/assets/img/eksport_becak-cp.jpg" alt="Erizki Fadli" class="w-full h-40 object-cover rounded-lg mb-4">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Erizki Fadli</h3>
        <p class="text-gray-600 dark:text-gray-300">DevOps Engineer</p>
        <p class="text-gray-600 dark:text-gray-300">Docker, Kubernetes</p>
        <button @click="showModal('Erizki Fadli', 'DevOps Engineer', 'Erizki is a DevOps Engineer with expertise in Docker and Kubernetes.', 
          [{ platform: 'Github', url: 'https://github.com/Erizki0712', 
            icon: '/assets/icons/linkedin.png' }])" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Detail</button>
      </div>
    </div>
    <!-- Modal Pop-up -->
    <div v-if="isModalVisible" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div class="bg-white rounded-lg p-8 max-w-lg w-full">
        <h2 class="text-2xl font-bold mb-4">{{ modalName }}</h2>
        <p class="mb-2"><strong>Role:</strong> {{ modalRole }}</p>
        <p class="mb-4">{{ modalDescription }}</p>
        <div class="flex space-x-4">
          <a v-for="link in modalSocialLinks" :key="link.platform" :href="link.url" target="_blank">
            <img src="/assets/icons/Github-logo.png" :alt="link.platform" class="w-9 h-6">
          </a>
        </div>
        <button @click="closeModal" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const isModalVisible = ref(false);
const modalName = ref('');
const modalRole = ref('');
const modalDescription = ref('');
const modalSocialLinks = ref<Array<{ platform: string, url: string, icon: string }>>([]);

const showModal = (name: string, role: string, description: string, socialLinks: Array<{ platform: string, url: string, icon: string }>) => {
  modalName.value = name;
  modalRole.value = role;
  modalDescription.value = description;
  modalSocialLinks.value = socialLinks;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style>
.grid-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  flex: 0 0 calc(33.333% - 20px);
  padding: 20px;
  margin: 10px;
}
@media (max-width: 768px) {
  .grid-item {
    flex: 0 0 calc(100% - 20px);
  }
}
</style>
