<script setup lang="ts">
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

defineProps(["card"]);
</script>

<template>
  <Card>
    <CardHeader class="px-4">
      <div class="flex items-center justify-between">
        <p>{{ card.title }}</p>
        <Badge class="rounded-full bg-green-400">{{
          "+" + card.progression + "%"
        }}</Badge>
      </div>
    </CardHeader>
    <CardContent class="flex items-center justify-end border-b px-4 pt-0 pb-2">
      <div class="text-[48px] font-extrabold">
        <span class="text-neutral-300">$</span>
        <span>{{ card.amount }}</span>
      </div>
    </CardContent>
    <CardFooter class="flex items-center justify-between gap-2 px-2">
      <div
        class="flex size-8 items-center justify-center rounded bg-neutral-100"
      >
        <Icon size="20" color="black" :name="card.icon" />
      </div>
      <p class="grow text-xs">{{ card.description }}</p>
      <Button variant="outline">{{ card.label }}</Button>
    </CardFooter>
  </Card>
</template>
