/** @format */

import { useQuery } from "@tanstack/react-query";
import { getTransactionsCategories } from "../../services/apiTransactions";

export function useTransactionsCategories() {
  const {
    isLoading: isLoadingTransactionsCategories,
    data: transactionsCategories,
    error,
  } = useQuery({
    queryKey: ["transactions-categories"],
    queryFn: getTransactionsCategories,
  });

  return { isLoadingTransactionsCategories, transactionsCategories, error };
}
