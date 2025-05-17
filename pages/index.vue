<script setup lang="ts"></script>

<template>
  <div class="grid gap-4">
    <header class="flex items-start justify-between">
      <div>
        <p>Hi, Welcome back Tobi ! 🎊</p>
        <h1>Dashboard</h1>
      </div>
      <div class="h-[36px] w-[120px] bg-neutral-200"></div>
    </header>
    <main class="grid gap-4">
      <div class="flex items-center gap-4">
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="h-[36px] w-[120px] bg-neutral-200"
        ></div>
      </div>
      <section>
        <div class="h-[360px] w-full bg-neutral-200"></div>
      </section>
    </main>
    <footer>
      <div class="flex items-center gap-4">
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="h-[266px] w-full bg-neutral-200"
        ></div>
      </div>
    </footer>
  </div>
</template>
