/** @format */

import Select from "../Select/Select";
import styles from "./SortBy.module.scss";

function SortBy({ options, label }) {
  return (
    <div className={styles.sort}>
      <p className={styles.sort__label}>{label}</p>
      <Select options={options} />
    </div>
  );
}

export default SortBy;
