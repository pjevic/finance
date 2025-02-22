/** @format */

import { useState, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import styles from "./ButtonDots.module.scss";

function ButtonDots({ type }) {
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

  return (
    <div ref={dropdownRef}>
      <button className={styles.dots} onClick={toggleDropdown}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          <Modal>
            <Modal.Open opens="edit">
              <li className={styles.dropdown__item}>Edit {type}</li>
            </Modal.Open>
            <Modal.Window name="edit">
              <div>EDIT</div>
            </Modal.Window>
          </Modal>

          <Modal>
            <Modal.Open>
              <li className={styles.dropdown__item}>Delete {type}</li>
            </Modal.Open>
            <Modal.Window>
              <div>DELETE</div>
            </Modal.Window>
          </Modal>
        </ul>
      )}
    </div>
  );
}

export default ButtonDots;
