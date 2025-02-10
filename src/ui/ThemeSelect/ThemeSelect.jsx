/** @format */

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

import styles from "./ThemeSelect.module.scss";

function ThemeSelect({ label, options, selectedTheme, onChange }) {
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
          type="button"
        >
          <div style={{ display: "flex" }}>
            <div
              className={styles["select__dropdown-circle"]}
              style={{ backgroundColor: selectedTheme.color }}
            ></div>
            <span className={styles["select__dropdown-name"]}>
              {selectedTheme.name}
            </span>
          </div>
          <span className={styles["select__icon-container"]}>
            <CaretDown weight="fill" size="1.6rem" />
          </span>
        </button>
        <ul
          className={`${styles.select__dropdown} ${
            isOpen && styles["select__dropdown--visible"]
          }`}
        >
          {options.map((option) => (
            <li
              key={option.color}
              className={styles["select__dropdown-item"]}
              onClick={() => handleSelect(option)}
            >
              <div
                className={styles["select__dropdown-circle"]}
                style={{ backgroundColor: option.color }}
              ></div>
              <span className={styles["select__dropdown-name"]}>
                {option.name}
              </span>
              {option.used?.budget && (
                <p className={styles["select__used-text"]}>Already used</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ThemeSelect;
