/** @format */

import Heading from "../../ui/Heading/Heading";
import TransactionsTable from "../../features/transactions/TransactionsTable/TransactionsTable";
import TransactionsTableOptions from "../../features/transactions/TransactionsTableOptions/TransactionsTableOptions";

import styles from "./Transactions.module.scss";

function Transactions() {
  return (
    <div className={styles.transactions}>
      <Heading>Transactions</Heading>

      <div className={styles.transactions__table}>
        <TransactionsTableOptions />
        <TransactionsTable />
      </div>
    </div>
  );
}

export default Transactions;
