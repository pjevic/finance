/** @format */

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./Select.module.scss";

function Select({ options, onChange, label, Icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options.at(0));
  const [toggleSelectWidth, setToggleSelectWidth] = useState(0);

  const measureRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    if (measureRef.current) {
      const widths = options.map((option) => {
        measureRef.current.textContent = option;
        return measureRef.current.offsetWidth;
      });

      setToggleSelectWidth(Math.max(...widths));
    }
  }, [options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleSelect = useCallback(
    (option) => {
      setSelectedOption(option);
      setIsOpen(false);
      if (onChange) onChange(option);
    },
    [onChange]
  );

  const dropdownOptions = useMemo(
    () =>
      options.map((option, i) => (
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
      )),
    [options, selectedOption, handleSelect]
  );

  return (
    <div className={styles.select} ref={selectRef}>
      <span className={styles.select__label}>{label}</span>

      {/* Hidden span for measuring text width */}
      <span ref={measureRef} className={styles.hiddenMeasure} />

      <div className={styles.select__toggle}>
        <button
          className={styles["select__toggle--select"]}
          onClick={toggleDropdown}
          style={{ width: `${toggleSelectWidth}px` }}
        >
          <span className={styles["select__label"]}>{selectedOption}</span>
          <span className={styles["select__icon-container"]}>
            <CaretDown weight="fill" size="1.6rem" />
          </span>
        </button>

        {Icon && (
          <button
            className={styles["select__toggle--icon"]}
            onClick={toggleDropdown}
          >
            <Icon weight="fill" size="2rem" />
          </button>
        )}
      </div>

      <ul
        className={`${styles.select__dropdown} ${
          isOpen && styles["select__dropdown--visible"]
        }`}
      >
        {dropdownOptions}
      </ul>
    </div>
  );
}

export default Select;
