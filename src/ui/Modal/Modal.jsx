/** @format */

import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { XCircle } from "@phosphor-icons/react";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import styles from "./Modal.module.scss";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = (openName) => setOpenName(openName);
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, heading, description }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal} ref={ref}>
        <div className={styles.modal__header}>
          {heading && <h3 className={styles.modal__heading}>{heading}</h3>}

          <button onClick={close} className={styles.modal__close}>
            <XCircle size="3.2rem" />
          </button>
        </div>
        <div className={styles.modal__description}>{description}</div>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
