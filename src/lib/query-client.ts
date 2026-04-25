import { QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { queryConfig } from "@/lib/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    ...queryConfig,
    mutations: {
      onError: () => {
        toast.error("Sebuah kesalahan terjadi", {
          description: "Kontak tim support jika masalah terus menerus",
        });
      },
    },
  },
});
