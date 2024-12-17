<script setup lang="ts">
const user = useSupabaseUser()

const staticLinks = [
  {
    label: 'Roadmap',
    to: '/roadmaps'
  },
  {
    label: 'Course',
    to: '/courses'
  },
  {
    label: 'About',
    to: '/about'
  }
]

// Navigation links
const links = ref(staticLinks)

watchEffect(async () => {
  if (user.value) {
    links.value = [{ label: 'Dashboard', to: '/dashboard' }, ...staticLinks]
  } else {
    links.value = [{ label: 'Home', to: '/' }, ...staticLinks]
  }
})
</script>

<template>
  <header class="flex items-center justify-between px-4 py-2 border-b border-gray-300 dark:border-gray-700">
    <!-- Left Section: Logo and Navigation Links -->
    <div class="flex items-center space-x-4">
      <!-- Logo -->
      <NuxtLink to="/"> <nuxt-icon name="export-camp-logo" class="text-3xl text-green-500" />
      </NuxtLink>

      <!-- Navigation Links -->
      <UHorizontalNavigation :links="links" class="space-x-6" />
    </div>

    <!-- Right Section: Theme Toggle, Notifications, User Profile -->
    <div class="flex items-center space-x-4">
      <!-- Theme Toggle Button -->
      <NavBarToggleTheme />

      <!-- User Profile Icon -->
      <NavBarUserMenu v-if="user" />
      <NavBarGuestButton v-else />
    </div>
  </header>
</template>
