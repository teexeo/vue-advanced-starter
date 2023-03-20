<script setup lang="ts">
import Add from '@vicons/fluent/Add12Filled'
import Minus from '@vicons/fluent/Subtract12Filled'
import { useExampleStore } from '../stores/example'

const exampleStore = useExampleStore()
</script>

<template>
  <div
    class="w-full h-screen flex flex-col items-center justify-center gap-10 bg-slate-100 select-none"
  >
    <slot />
    <div class="max-w-4xl flex items-center justify-around bg-white rounded-md shadow-md p-4">
      <ElButton @click="exampleStore.increase()" size="large" type="success" class="w-44 shadow-md">
        <NIcon size="20"> <Add /> </NIcon>
        <span>Add</span>
      </ElButton>
      <div class="min-w-[170px] px-8 text-7xl font-bold text-slate-400 text-center">
        {{ exampleStore.counter_square }}
      </div>
      <ElButton @click="exampleStore.decrease()" size="large" type="danger" class="w-44 shadow-md">
        <NIcon size="20"> <Minus /> </NIcon>
        <span>Minus</span>
      </ElButton>
    </div>
  </div>
</template>
