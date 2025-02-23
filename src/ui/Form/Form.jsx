/** @format */

import styles from "./Form.module.scss";

function Form({ onSubmit, children }) {
  return (
    <div className={styles.form}>
      <form className={styles.form__content} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}

export default Form;
