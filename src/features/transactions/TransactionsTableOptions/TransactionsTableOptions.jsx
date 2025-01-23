/** @format */

import { useState, useEffect } from "react";
import { useTransactionsCategories } from "../useTransactionsCategories";
import CustomSelect from "../../../ui/CustomSelect/CustomSelect";

import styles from "./TransactionsTableOptions.module.scss";

const SORT_BY = ["Latest", "Oldest", "A-Z", "Z-A", "Highest", "Lowest"];

function TransactionsTableOptions() {
  const { transactionsCategories } = useTransactionsCategories();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (transactionsCategories?.length) {
      const uniqueCategories = Array.from(
        new Set(transactionsCategories.map((item) => item.category))
      ).filter(Boolean);

      setCategories(uniqueCategories);
    }
  }, [transactionsCategories]);

  return (
    <div className={styles["table-options"]}>
      <div className={styles["table-options__select"]}>
        <CustomSelect options={SORT_BY} />
        <CustomSelect options={categories} />
      </div>
    </div>
  );
}

export default TransactionsTableOptions;
