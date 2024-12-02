<script setup lang="ts">
// Navigation links
const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: 'Course',
    to: '/course'
  },
  {
    label: "Challenge",
  },
  {
    label: "Event",
  },
  {
    label: "Job",
  },
];
</script>

<template>
  <header class="flex items-center justify-between px-4 py-2 border-b border-gray-300 dark:border-gray-700">
    <!-- Left Section: Logo and Navigation Links -->
    <div class="flex items-center space-x-4">
      <!-- Logo -->
      <nuxt-icon name="export-camp-logo" class="text-3xl text-green-500" />

      <!-- Navigation Links -->
      <UHorizontalNavigation :links="links" class="space-x-6" />
    </div>

    <!-- Right Section: Theme Toggle, Notifications, User Profile -->
    <div class="flex items-center space-x-4">
      <!-- Theme Toggle Button -->
      <NavBarToggleTheme />

      <!-- Notification Icon -->
      <UButton label="Notifications" icon="i-heroicons-bell-20-solid" variant="ghost" color="gray">
        <!-- Optional badge for unread notifications -->
        <span class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
      </UButton>

      <!-- User Profile Icon -->
      <div class="relative">
        <img
          src="https://avatars.githubusercontent.com/u/739984?v=4" alt="User"
          class="h-8 w-8 rounded-full border-2 border-cyan-500"
        >
        <!-- Dropdown could be added here for additional user options -->
      </div>
    </div>
  </header>
</template>
