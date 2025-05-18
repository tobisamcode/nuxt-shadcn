import { computed, unref } from "vue";

export function formatCurrency(amount: number | Ref<number>) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return computed(() => {
    const num = unref(amount);
    return formatter.format(num);
  });
}
