<script setup lang="ts">
import { columns } from "./column";

type Status = "pending" | "completed" | "failed";

export interface DummyRecord {
  id: string;
  amount: number;
  status: Status;
  email: string;
}

const data = ref<DummyRecord[]>([]);

function generateRandomData(numberOfRecords: number): DummyRecord[] {
  const statuses: Status[] = ["pending", "completed", "failed"];
  const emails = ["john@example.com", "jane@example.com", "bob@example.com"];

  const randomData: DummyRecord[] = [];

  for (let i = 0; i < numberOfRecords; i++) {
    const id = Math.random().toString().substring(2, 8);
    const amount = Math.floor(Math.random() * 1000) + 50;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const email = emails[Math.floor(Math.random() * emails.length)];

    randomData.push({
      id,
      amount,
      status,
      email,
    });
  }
  return (data.value = randomData);
}

onMounted(() => {
  generateRandomData(10);
});
</script>

<template>
  <div>
    <header class="mb-6 flex items-start justify-between">
      <div>
        <h1>Transactions</h1>
        <p>All your transactions</p>
      </div>
    </header>

    <DataTable :data="data" :columns="columns" />
  </div>
</template>
