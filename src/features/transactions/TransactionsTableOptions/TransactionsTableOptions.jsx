/** @format */

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Funnel, SortAscending } from "@phosphor-icons/react";

import { useTransactionsCategories } from "../useTransactionsCategories";
import SearchInput from "../../../ui/Input/SearchInput/SearchInput";
import Select from "../../../ui/Select/Select";
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
        <Select
          label="Sort by"
          options={SORT_BY}
          onChange={handleSortChange}
          Icon={SortAscending}
          defaultOption={SORT_BY.at(0)}
        />
        {categories.length > 0 && (
          <Select
            label="Category"
            options={categories}
            onChange={handleCategoryChange}
            Icon={Funnel}
            defaultOption={categories.at(0)}
          />
        )}
      </div>
    </div>
  );
}

export default TransactionsTableOptions;
