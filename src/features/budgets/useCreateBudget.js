/** @format */

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createBudget as createBudgetAPI } from "../../services/apiBudgets";

export function useCreateBudget() {
  const queryClient = useQueryClient();

  const { isLoading: isCreatingBudget, mutateAsync: createBudget } =
    useMutation({
      mutationFn: createBudgetAPI,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["budgets"],
        });
      },
    });

  return { isCreatingBudget, createBudget };
}
