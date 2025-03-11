/** @format */

import { useQuery } from "@tanstack/react-query";
import { getPots } from "../../services/apiPots";

export function usePots() {
  const {
    isLoading: isLoadingpots,
    data: pots,
    error,
  } = useQuery({
    queryKey: ["pots"],
    queryFn: getPots,
  });

  return { isLoadingpots, pots, error };
}
