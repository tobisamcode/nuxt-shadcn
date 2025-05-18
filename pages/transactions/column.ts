import { h } from "vue";
import type { DummyRecord } from "./index.vue";
import type { ColumnDef } from "@tanstack/vue-table";
import Button from "~/components/ui/button/Button.vue";
import { ArrowUpDown, ChevronDown } from "lucide-vue-next";

export const columns: ColumnDef<DummyRecord>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => ["Email", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })],
      );
    },
    cell: ({ row }) =>
      h(
        "div",
        { class: "text-left p-0 text-xs lg:text-sm lg:p-1 font-medium" },
        row.getValue("email"),
      ),
  },

  {
    accessorKey: "amount",
    header: () => h("div", { class: "text-left" }, "Amount"),
    cell: ({ row }) => {
      const amount: number = row.getValue("amount");
      const formattedAmount = formatCurrency(amount);

      return h(
        "div",
        { class: "text-left p-1 font-medium" },
        formattedAmount.value,
      );
    },
  },

  {
    accessorKey: "status",
    header: () => h("div", { class: "text-left" }, "Status"),
    cell: ({ row }) => {
      const status: "success" | "error" | "pending" = row.getValue("status");

      return h("div", { class: "text-left p-1 font-medium" }, status);
    },
  },

  {
    accessorKey: "id",
    header: () => h("div", { class: "text-left" }, "ID"),
    cell: ({ row }) => {
      const id: string = row.getValue("id");

      return h("div", { class: "text-left p-1 font-medium" }, id);
    },
  },
];
