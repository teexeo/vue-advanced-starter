<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <div class="text-2xl font-bold text-red-300">Title: {{ title }}</div>
</template>
