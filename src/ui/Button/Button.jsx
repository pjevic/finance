/** @format */

import styles from "./Button.module.scss";

function Button({
  type = "basic",
  label,
  icon,
  iconPosition = "left",
  children,
}) {
  return (
    <button className={`${styles.button} ${styles[`button__${type}`]}`}>
      {iconPosition === "left" && (
        <span className={styles.button__icon}>{icon}</span>
      )}
      {label && <span>{label}</span>}
      {iconPosition === "right" && (
        <span className={styles.button__icon}>{icon}</span>
      )}
      {children}
    </button>
  );
}

export default Button;
