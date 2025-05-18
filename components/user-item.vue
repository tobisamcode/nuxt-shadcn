<script setup lang="ts">
const name = ref("Tobi Adesokan");
const description = ref("Cofounder & Developer");
</script>

<template>
  <div
    class="m-2 flex cursor-pointer justify-start gap-2 rounded border p-2 transition hover:bg-neutral-50"
  >
    <div
      class="flex size-10 items-center justify-center rounded-full bg-green-500 font-bold text-white"
    >
      {{ name.slice(0, 1) }}
    </div>
    <div>
      <p class="m-0 text-sm font-bold text-black">{{ name }}</p>
      <p class="m-0 text-xs">{{ description }}</p>
    </div>
  </div>
</template>
