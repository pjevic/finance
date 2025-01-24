/** @format */

import { useSearchParams } from "react-router-dom";
import { useTransactions } from "../useTransactions";

import Spinner from "../../../ui/Spinner/Spinner";
import Table from "../../../ui/Table/Table";

import styles from "./TransactionsTable.module.scss";

function TransactionsTable() {
  const { isLoadingTransactions, transactions } = useTransactions();
  const [searchParams] = useSearchParams();

  if (isLoadingTransactions) return <Spinner />;

  const filterValue = searchParams.get("category") || "All Transactions";
  const filteredTransactions =
    filterValue === "All Transactions"
      ? transactions
      : transactions.filter(
          (transaction) => transaction.category === filterValue
        );

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
        <Table.Body rows={filteredTransactions} />
      </Table>
    </div>
  );
}

export default TransactionsTable;
