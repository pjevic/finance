/** @format */

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Funnel, SortAscending } from "@phosphor-icons/react";

import { useTransactionsCategories } from "../useTransactionsCategories";
import SearchInput from "../../../ui/Input/SearchInput/SearchInput";
import CustomSelect from "../../../ui/CustomSelect/CustomSelect";
import styles from "./TransactionsTableOptions.module.scss";

import { SORT_BY } from "../../../utils/constants";

function TransactionsTableOptions() {
  const { transactionsCategories } = useTransactionsCategories();
  const [categories, setCategories] = useState(["All Transactions"]);
  const [searchParams, setSearechParams] = useSearchParams();

  // Searching
  const handleSearchChange = (searchQuery) => {
    searchParams.set("search", searchQuery);
    setSearechParams(searchParams);
  };

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

  // Setting Filtering Options
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
      <SearchInput onSearchChange={handleSearchChange} />
      <div className={styles["table-options__select"]}>
        <CustomSelect
          label="Sort by"
          options={SORT_BY}
          onChange={handleSortChange}
          Icon={SortAscending}
        />
        {categories.length > 0 && (
          <CustomSelect
            label="Category"
            options={categories}
            onChange={handleCategoryChange}
            Icon={Funnel}
          />
        )}
      </div>
    </div>
  );
}

export default TransactionsTableOptions;
