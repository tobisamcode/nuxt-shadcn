<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Card from "@/components/card.vue";

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

const cards = [
  {
    title: "Sales",
    progression: 12,
    amount: 1284.44,
    label: "View sales",
    description: "Sales of March 2024",
    icon: "solar:ticket-sale-outline",
  },
  {
    title: "Refunds",
    progression: 8,
    amount: 84.44,
    label: "View refunds",
    description: "Refunds of beginning of year",
    icon: "heroicons-outline:receipt-refund",
  },
  {
    title: "Payouts",
    progression: 14,
    amount: 684.44,
    label: "View payouts",
    description: "Payouts of beginning of this week",
    icon: "tabler:zoom-money",
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
      <ProductNew />
    </header>
    <main class="grid w-full gap-4">
      <Tabs default-value="Today">
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
          class="w-full"
        >
          <Chart />
        </TabsContent>
      </Tabs>
    </main>
    <footer>
      <div class="grid gap-4 lg:grid-cols-3">
        <Card v-for="(item, index) in cards" :key="index" :card="item"></Card>
      </div>
    </footer>
  </div>
</template>
