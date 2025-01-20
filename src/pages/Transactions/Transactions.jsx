/** @format */

import { useEffect } from "react";
import { getTransactions } from "../../services/apiTransactions";

function Transactions() {
  useEffect(function () {
    getTransactions().then((data) => console.log(data));
  }, []);

  return <>Transactions</>;
}

export default Transactions;
