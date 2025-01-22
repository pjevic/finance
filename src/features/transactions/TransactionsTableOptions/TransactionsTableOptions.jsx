/** @format */

import SortBy from "../../../ui/SortBy/SortBy";
import styles from "./TransactionsTableOptions.module.scss";

function TransactionsTableOptions() {
  return (
    <div className={styles["table-options"]}>
      <SortBy
        label="Sort by"
        options={[
          { value: "latest", label: "Latest" },
          { value: "oldest", label: "Oldest" },
          { value: "a-z", label: "A-Z" },
          { value: "z-a", label: "Z-A" },
          { value: "highest", label: "Highest" },
          { value: "lowest", label: "Lowest" },
        ]}
      />
    </div>
  );
}

export default TransactionsTableOptions;
