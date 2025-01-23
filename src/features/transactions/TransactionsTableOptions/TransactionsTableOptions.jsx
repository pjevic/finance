/** @format */

import { useState, useEffect } from "react";
import { useTransactionsCategories } from "../useTransactionsCategories";
import SortBy from "../../../ui/SortBy/SortBy";
import styles from "./TransactionsTableOptions.module.scss";

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
  { value: "a-z", label: "A-Z" },
  { value: "z-a", label: "Z-A" },
  { value: "highest", label: "Highest" },
  { value: "lowest", label: "Lowest" },
];

function TransactionsTableOptions() {
  const { transactionsCategories } = useTransactionsCategories();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (transactionsCategories?.length) {
      const uniqueCategories = Array.from(
        new Set(transactionsCategories.map((item) => item.category))
      ).map((category) => ({
        value: category,
        label: category,
      }));

      setCategories(uniqueCategories);
    }
  }, [transactionsCategories]);

  return (
    <div className={styles["table-options"]}>
      <div className={styles["table-options__select"]}>
        <SortBy label="Sort by" options={SORT_OPTIONS} />
        <SortBy label="Category" options={categories} />
      </div>
    </div>
  );
}

export default TransactionsTableOptions;
