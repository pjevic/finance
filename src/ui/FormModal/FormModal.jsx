/** @format */

import { XCircle } from "@phosphor-icons/react";
import styles from "./FormModal.module.scss";

function FormModal({
  heading,
  description,
  isOpen,
  onClose,
  onSubmit,
  children,
}) {
  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
      onClick={onClose}
    >
      <div
        className={`${styles.modal} ${isOpen ? styles.show : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.modal__header}>
          <h2 className={styles.modal__heading}>{heading}</h2>
          <button className={styles.modal__close} onClick={onClose}>
            <XCircle size="3.2rem" />
          </button>
        </header>
        <form className={styles.modal__content} onSubmit={onSubmit}>
          <p className={styles["modal__content-description"]}>{description}</p>
          {children}
        </form>
      </div>
    </div>
  );
}

export default FormModal;
