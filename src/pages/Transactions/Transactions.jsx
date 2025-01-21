/** @format */

import { useQuery } from "@tanstack/react-query";
import Heading from "../../ui/Heading/Heading";
import { getTransactions } from "../../services/apiTransactions";
import Spinner from "../../ui/Spinner/Spinner";

function Transactions() {
  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  return (
    <>
      <Heading>Transactions</Heading>

      <div>Search / Filter / Sort</div>

      {isLoading && <Spinner />}
    </>
  );
}

export default Transactions;
