<script setup lang="ts">
import Counter from './components/counter.vue'
import { useExampleStore } from './stores/example'

const exampleStore = useExampleStore()
</script>

<template>
  <Counter>
    <div class="text-center flex flex-col gap-2 text-slate-500">
      <span class="text-6xl font-bold">Counter Example</span>
      <span class="text-lg font-semibold italic"
        >Number converting to scuare real number is {{ exampleStore.count }}</span
      >
    </div>
  </Counter>
</template>
