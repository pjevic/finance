/** @format */

import { CaretDown } from "@phosphor-icons/react";
import styles from "./Select.module.scss";

function Select({ options, value }) {
  return (
    <div className={styles.select__container}>
      <select className={styles.select} value={value}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={styles.select__option}
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className={styles["select__container--icon"]}>
        <CaretDown weight="fill" size="1.6rem" />
      </div>
    </div>
  );
}

export default Select;
