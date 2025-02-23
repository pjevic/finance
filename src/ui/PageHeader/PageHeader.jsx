/** @format */

import styles from "./PageHeader.module.scss";

function PageHeader({ children }) {
  return <header className={styles.header}>{children}</header>;
}

export default PageHeader;
