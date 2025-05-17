<script setup lang="ts">
const open = ref(true);
</script>

<template>
  <div class="relative">
    <div
      class="z-50 flex h-full w-full items-center justify-between p-4 lg:hidden"
    >
      <Logo />
      <Icon
        class="top-2 left-2 z-50 size-10 cursor-pointer"
        name="mdi-light:menu"
        @click="open = true"
      />
      <div
        v-if="open"
        class="absolute top-0 left-0 z-50 h-screen w-full bg-white"
      >
        <SidebarMenu />
      </div>
    </div>
    <div
      class="hidden h-screen w-[250px] flex-col justify-between border-r lg:flex"
    >
      <SidebarMenu />
      <div class="">useritem</div>
    </div>
  </div>
</template>
