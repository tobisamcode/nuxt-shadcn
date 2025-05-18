<script setup lang="ts">
import { ref } from "vue";

const open = ref(true);
</script>

<template>
  <div class="">
    <!-- MOBILE -->
    <div
      class="z-50 flex h-full w-full items-center justify-between p-4 lg:hidden"
    >
      <header
        class="flex cursor-pointer items-center gap-2 transition hover:scale-[101%]"
      >
        <Logo />
        <p class="font-bold text-black">Nuxt Finance</p>
      </header>

      <Icon
        class="top-2 left-2 z-50 size-10 cursor-pointer"
        name="mdi-light:menu"
        @click="open = true"
      />
      <div
        class="ease fixed z-100 w-full bg-white transition-all duration-200"
        :class="open ? 'inset-0' : 'top-0 right-0 bottom-0 -left-full'"
      >
        <Icon
          name="material-symbols:close"
          size="30"
          @click="open = false"
          class="absolute top-4 right-4 z-50 cursor-pointer"
        />
        <SidebarMenu :close="() => (open = false)" />
      </div>
    </div>

    <!-- DESKTOP -->
    <div
      class="hidden h-screen w-[250px] flex-col justify-between border-r lg:flex"
    >
      <SidebarMenu />
      <div class="">useritem</div>
    </div>
  </div>
</template>
