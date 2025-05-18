<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

defineProps<{ close?: () => void }>();

const route = useRoute();
const items = ref([
  {
    title: "Overview",
    path: "/",
    icon: "ri:dashboard-line",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "grommet-icons:transaction",
  },
  {
    title: "Account",
    path: "/account",
    icon: "mdi:shield-account-outline",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: "hugeicons:contact-02",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "material-symbols-light:settings-outline",
  },
]);

const path = computed(() => route.path);
</script>

<template>
  <div>
    <header
      class="flex cursor-pointer items-center gap-2 p-4 transition hover:scale-[101%]"
    >
      <Logo />
      <p class="font-bold text-black">Nuxt Finance</p>
    </header>

    <div class="grow px-4">
      <div class="grid gap-2">
        <NuxtLink
          v-for="(item, index) in items"
          :href="item.path"
          @click="close && close()"
          :key="index"
          class="flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition hover:bg-neutral-100"
          :class="path === item.path ? 'bg-neutral-100' : ''"
        >
          <Icon :name="item.icon" size="18" color="black" />
          <span class="text-sm">{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
