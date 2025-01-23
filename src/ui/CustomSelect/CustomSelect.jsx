/** @format */

import { useState, useEffect, useRef, useMemo } from "react";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./CustomSelect.module.scss";

function CustomSelect({ options, onChange, defaultOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || options.at(0)
  );
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Memoize the rendered options
  const renderedOptions = useMemo(() => {
    const handleSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
      if (onChange) onChange(option);
    };

    return options.map((option, index) => (
      <li
        key={index}
        role="option"
        aria-selected={selectedOption === option}
        className={styles["customSelect__option"]}
        onClick={() => handleSelect(option)}
      >
        {option}
      </li>
    ));
  }, [options, selectedOption, onChange]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={styles.customSelect}>
      {/* Toggle */}
      <button
        type="button"
        className={`${styles["customSelect__toggle"]} ${
          isOpen ? styles["customSelect__toggle--expanded"] : ""
        }`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{selectedOption}</span>
        <CaretDown
          weight="fill"
          size="1.6rem"
          className={`${styles["customSelect__icon"]} ${
            isOpen ? styles["customSelect__icon--rotated"] : ""
          }`}
        />
      </button>

      {/* Options */}
      {isOpen && (
        <ul
          className={styles["customSelect__menu"]}
          role="listbox"
          aria-activedescendant={selectedOption}
          tabIndex="0"
        >
          {renderedOptions}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
