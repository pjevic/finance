/** @format */

import { useState, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import styles from "./ButtonDots.module.scss";

import Form from "../Form/Form";
import FormSelect from "../FormSelect/FormSelect";
import FormInput from "../FormInput/FormInput";
import ThemeSelect from "../ThemeSelect/ThemeSelect";
import { SELECT_CATEGORY, SELECT_COLOR } from "../../utils/constants";
import Button from "../Button/Button";

function ButtonDots({
  type,
  selectedOption,
  setSelectedOption,
  newBudget,
  setNewBudget,
  selectedTheme,
  setSelectedTheme,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal>
      <div ref={dropdownRef}>
        <button className={styles.dots} onClick={toggleDropdown}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </button>

        {isOpen && (
          <ul className={styles.dropdown}>
            <Modal.Open opens="edit">
              <li className={styles.dropdown__item}>Edit {type}</li>
            </Modal.Open>

            <Modal.Open>
              <li className={styles.dropdown__item}>Delete {type}</li>
            </Modal.Open>
          </ul>
        )}
      </div>

      <Modal.Window
        name="edit"
        heading="Edit Budget"
        description="If your budget changes, feel free to update it."
      >
        <Form onSubmit={handleSubmit}>
          <FormSelect
            options={SELECT_CATEGORY}
            label="Budget Category"
            selectedOption={selectedOption}
            onChange={setSelectedOption}
          />

          <FormInput
            label="Maximum Spend"
            placeholder={newBudget}
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
          />

          <ThemeSelect
            label="Theme"
            options={SELECT_COLOR}
            selectedTheme={selectedTheme}
            onChange={setSelectedTheme}
          />

          <Button variant="primary--wide" type="submit">
            Add Budget
          </Button>
        </Form>
      </Modal.Window>

      <Modal.Window>
        <div>DELETE</div>
      </Modal.Window>
    </Modal>
  );
}

export default ButtonDots;
