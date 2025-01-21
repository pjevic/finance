/** @format */

import { useTransactions } from "../../../hooks/useTransactions";

import Spinner from "../../../ui/Spinner/Spinner";
import Table from "../../../ui/Table/Table";

import styles from "./TransactionsTable.module.scss";

function TransactionsTable() {
  const { isLoading, transactions } = useTransactions();

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.table}>
      <Table data={transactions}>
        <Table.Header
          columns={[
            "Recipient / Sender",
            "Catergory",
            "Transaction Date",
            "Amount",
          ]}
        />
        <Table.Body rows={transactions} />
      </Table>
    </div>
  );
}

export default TransactionsTable;
