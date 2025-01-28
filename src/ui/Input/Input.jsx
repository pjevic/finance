/** @format */

import styles from "./Input.module.scss";

function Input({ placeholder, type = "text", value, onChange }) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
