/** @format */

import PageHeader from "../../ui/PageHeader/PageHeader";
import Heading from "../../ui/Heading/Heading";
import TransactionsTable from "../../features/transactions/TransactionsTable/TransactionsTable";
import TransactionsTableOperations from "../../features/transactions/TransactionsTableOperations/TransactionsTableOperations";

import styles from "./Transactions.module.scss";

function Transactions() {
  return (
    <div className={styles.transactions}>
      <PageHeader>
        <Heading>Transactions</Heading>
      </PageHeader>

      <div className={styles.transactions__table}>
        <TransactionsTableOperations />
        <TransactionsTable />
      </div>
    </div>
  );
}

export default Transactions;
