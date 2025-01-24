/** @format */

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useTransactionsCategories } from "../useTransactionsCategories";
import CustomSelect from "../../../ui/CustomSelect/CustomSelect";

import styles from "./TransactionsTableOptions.module.scss";

const SORT_BY = ["Latest", "Oldest", "A-Z", "Z-A", "Highest", "Lowest"];

function TransactionsTableOptions() {
  const { transactionsCategories } = useTransactionsCategories();
  const [categories, setCategories] = useState(["All Transactions"]);

  const [searchParams, setSearechParams] = useSearchParams();

  // Sorting
  const handleSortChange = (sortOption) => {
    searchParams.set("sortBy", sortOption);
    setSearechParams(searchParams);
  };

  // Filtering
  const handleCategoryChange = (category) => {
    searchParams.set("category", category);
    setSearechParams(searchParams);
  };

  useEffect(() => {
    if (transactionsCategories?.length) {
      const uniqueCategories = Array.from(
        new Set(transactionsCategories.map((item) => item.category))
      );

      setCategories(["All Transactions", ...uniqueCategories]);
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
