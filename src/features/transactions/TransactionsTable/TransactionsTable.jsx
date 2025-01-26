/** @format */

import { useSearchParams } from "react-router-dom";
import { useTransactions } from "../useTransactions";

import Spinner from "../../../ui/Spinner/Spinner";
import Table from "../../../ui/Table/Table";

import styles from "./TransactionsTable.module.scss";
import Pagination from "../../../ui/Pagination/Pagination";

import { PAGE_SIZE } from "../../../utils/constants";

function TransactionsTable() {
  const { isLoadingTransactions, transactions } = useTransactions();
  const [searchParams] = useSearchParams();

  if (isLoadingTransactions) return <Spinner />;

  const sortValue = searchParams.get("sortBy") || "Latest";
  const filterValue = searchParams.get("category") || "All Transactions";
  const currentPage = Number(searchParams.get("page")) || 1;

  // Filter transactions
  const filteredTransactions =
    filterValue === "All Transactions"
      ? transactions
      : transactions.filter(
          (transaction) => transaction.category === filterValue
        );

  // Sort transactions
  const sortedTransactions = filteredTransactions.sort((a, b) => {
    switch (sortValue) {
      case "Latest":
        return new Date(b.date) - new Date(a.date);
      case "Oldest":
        return new Date(a.date) - new Date(b.date);
      case "A-Z":
        return a.name.localeCompare(b.name);
      case "Z-A":
        return b.name.localeCompare(a.name);
      case "Highest":
        return Math.abs(b.amount) - Math.abs(a.amount);
      case "Lowest":
        return Math.abs(a.amount) - Math.abs(b.amount);
      default:
        return 0;
    }
  });

  // Pagination logic
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedTransactions = sortedTransactions.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  return (
    <div className={styles.table}>
      <Table data={transactions}>
        <Table.Header
          columns={[
            "Recipient / Sender",
            "Category",
            "Transaction Date",
            "Amount",
          ]}
        />
        <Table.Body rows={paginatedTransactions} />
        <Table.Footer>
          <Pagination totalItems={sortedTransactions.length} />
        </Table.Footer>
      </Table>
    </div>
  );
}

export default TransactionsTable;
