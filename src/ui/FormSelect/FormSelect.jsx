/** @format */
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./FormSelect.module.scss";

function FormSelect({ options, label, onChange, selectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.select}>
      <div className={styles.select__label}>{label}</div>
      <div className={styles.select__toggle}>
        <button
          className={styles["select__toggle--select"]}
          onClick={toggleDropdown}
        >
          <span className={styles["select__label"]}>{selectedOption}</span>
          <span className={styles["select__icon-container"]}>
            <CaretDown weight="fill" size="1.6rem" />
          </span>
        </button>
        <ul
          className={`${styles.select__dropdown} ${
            isOpen && styles["select__dropdown--visible"]
          }`}
        >
          {options.map((option, i) => (
            <li
              key={i}
              className={`${styles["select__dropdown-option"]} ${
                selectedOption === option
                  ? styles["select__dropdown-option--active"]
                  : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FormSelect;
