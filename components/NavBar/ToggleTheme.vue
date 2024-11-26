<!-- ToggleTheme.vue -->
<script lang="ts" setup>
import { computed } from "vue";

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

function toggleTheme() {
  isDark.value = !isDark.value;
}
</script>

<template>
  <UButton
    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray" variant="ghost"
    aria-label="Theme" @click="toggleTheme"
  />
</template>
