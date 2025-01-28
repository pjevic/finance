/** @format */

import { MagnifyingGlass } from "@phosphor-icons/react";
import Input from "../Input";
import styles from "./SearchInput.module.scss";

function SearchInput({ onSearchChange }) {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className={styles.input}>
      <Input placeholder="Search" onChange={handleInputChange} />
      <span className={styles["input__icon-container"]}>
        <MagnifyingGlass size="1.6rem" />
      </span>
    </div>
  );
}

export default SearchInput;
