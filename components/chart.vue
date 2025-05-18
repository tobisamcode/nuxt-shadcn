<script setup lang="ts">
import { Line } from "vue-chartjs";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [40, 39, 10, 40, 39, 80, 40],
    },
    {
      label: "Data One",
      backgroundColor: "blue",
      data: [30, 33, 20, 10, 59, 30, 20],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <div class="rounded-lg border p-4">
    <Line style="height: 400px" :data="data" :options="options" />
  </div>
</template>
