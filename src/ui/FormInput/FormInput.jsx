/** @format */

import styles from "./FormInput.module.scss";

function FormInput({ placeholder, label, value, onChange }) {
  return (
    <div className={styles.formInput}>
      <div className={styles.formInput__label}>{label}</div>
      <input
        className={styles.formInput__input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
}

export default FormInput;
