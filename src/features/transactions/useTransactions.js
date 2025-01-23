/** @format */

import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransactions";

export function useTransactions() {
  const {
    isLoading: isLoadingTransactions,
    data: transactions,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  return { isLoadingTransactions, transactions, error };
}
