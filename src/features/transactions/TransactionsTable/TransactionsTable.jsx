/** @format */

import { useTransactions } from "../useTransactions";

import Spinner from "../../../ui/Spinner/Spinner";
import Table from "../../../ui/Table/Table";

import styles from "./TransactionsTable.module.scss";

function TransactionsTable() {
  const { isLoadingTransactions, transactions } = useTransactions();

  if (isLoadingTransactions) return <Spinner />;

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
