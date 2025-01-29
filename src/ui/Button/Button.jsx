/** @format */

import styles from "./Button.module.scss";

function Button({
  type = "button",
  variant = "basic",
  label,
  icon,
  iconPosition = "left",
  onClick,
  disabled,
  children,
}) {
  return (
    <button
      className={`${styles.button} ${styles[`button__${variant}`]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {iconPosition === "left" && (
        <span className={styles.button__icon}>{icon}</span>
      )}
      {label && <span className={styles.button__label}>{label}</span>}
      {iconPosition === "right" && (
        <span className={styles.button__icon}>{icon}</span>
      )}
      {children}
    </button>
  );
}

export default Button;
