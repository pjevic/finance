/** @format */

import { useState, useEffect } from "react";
import { useTransactionsCategories } from "../useTransactionsCategories";
import CustomSelect from "../../../ui/CustomSelect/CustomSelect";

import styles from "./TransactionsTableOptions.module.scss";

const SORT_BY = ["Latest", "Oldest", "A-Z", "Z-A", "Highest", "Lowest"];

function TransactionsTableOptions() {
  const { transactionsCategories } = useTransactionsCategories();
  const [categories, setCategories] = useState(["All Transactions"]);

  // Handlers for CustomSelect
  const handleSortChange = (sortOption) => {
    console.log("Sort selected:", sortOption);
    // sorting logic here
  };

  const handleCategoryChange = (category) => {
    console.log("Category selected:", category);
    // filtering logic here
  };

  useEffect(() => {
    if (transactionsCategories?.length) {
      const uniqueCategories = Array.from(
        new Set(transactionsCategories.map((item) => item.category))
      );

      setCategories(["All Transaction", ...uniqueCategories]);
    }
  }, [transactionsCategories]);

  return (
    <div className={styles["table-options"]}>
      <div className={styles["table-options__select"]}>
        <CustomSelect
          label="Sort by"
          options={SORT_BY}
          onChange={handleSortChange}
        />
        {categories.length > 0 && (
          <CustomSelect
            label="Category"
            options={categories}
            onChange={handleCategoryChange}
          />
        )}
      </div>
    </div>
  );
}

export default TransactionsTableOptions;
