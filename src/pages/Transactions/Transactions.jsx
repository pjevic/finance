/** @format */

import Heading from "../../ui/Heading/Heading";
import TransactionsTable from "../../features/transactions/TransactionsTable/TransactionsTable";
import TableOperations from "../../ui/TableOperations/TableOperations";

import styles from "./Transactions.module.scss";

function Transactions() {
  return (
    <div className={styles.transactions}>
      <Heading>Transactions</Heading>

      <TableOperations />
      <TransactionsTable />
    </div>
  );
}

export default Transactions;
