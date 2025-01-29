/** @format */

import { useQuery } from "@tanstack/react-query";
import { getBudgets } from "../../services/apiBudgets";

export function useBudgets() {
  const {
    isLoading: isLoadingBudgets,
    data: budgets,
    error,
  } = useQuery({
    queryKey: ["budgets"],
    queryFn: getBudgets,
  });

  return { isLoadingBudgets, budgets, error };
}
