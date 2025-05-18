<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const lists = [
  {
    title: "Today",
    component: resolveComponent("TabsToday"),
  },
  {
    title: "Week",
    component: resolveComponent("TabsWeek"),
  },
  {
    title: "Month",
    component: resolveComponent("TabsMonth"),
  },
  {
    title: "Year",
    component: resolveComponent("TabsYear"),
  },
];
</script>

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
      <Tabs default-value="Today" class="w-[400px]">
        <TabsList>
          <TabsTrigger
            v-for="(item, index) in lists"
            :key="index"
            :value="item.title"
          >
            {{ item.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          v-for="(item, index) in lists"
          :key="index"
          :value="item.title"
        >
          <component :is="item.component" />
        </TabsContent>
      </Tabs>
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
