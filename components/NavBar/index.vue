<script setup lang="ts">

// Navigation links
const links = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Academy',
    to: '/academy'
  },
  {
    label: 'Challenge',
    to: '/challenge'
  },
  {
    label: 'Event',
    to: '/event'
  },
  {
    label: 'Job',
    to: '/job'
  }
];
</script>

<template>
  <header class="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800">
    <!-- Logo Section -->
    <div class="flex items-center space-x-4">
      <!-- Replace with your logo -->
      <!--<img src="path/to/logo.png" alt="Logo" class="h-8 w-auto" />-->
      <!-- Navigation Links -->
      <UHorizontalNavigation :links="links" class="space-x-6" />
    </div>

    <!-- Right Section -->
    <div class="flex items-center space-x-4">
      <!-- Theme Toggle Button -->
      <ToggleTheme />

      <!-- Notification Icon -->
      <UButton label="Notifications" icon="i-heroicons-bell-20-solid" variant="ghost" color="gray">
        <!-- Optional badge for unread notifications -->
        <span class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
      </UButton>

      <!-- User Profile Icon -->
      <div class="relative">
        <img src="https://avatars.githubusercontent.com/u/739984?v=4" alt="User"
          class="h-8 w-8 rounded-full border-2 border-cyan-500" />
        <!-- Dropdown could be added here for additional user options -->
      </div>
    </div>
  </header>
</template>
