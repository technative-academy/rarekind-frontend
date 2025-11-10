import styles from "./Footer.module.css";
import React from "react";


function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div>
          <button className={styles.footerLink}>Footer link 1</button>
          <button className={styles.footerLink}>Footer link 2</button>
          </div>
          <div>
          <a className={styles.footerSubLink}>Terms and Conditions</a>
          <a className={styles.footerSubLink}>Cookies</a>
          </div>
          <p>© 2025 RareKind</p>
    </footer>
  );
}

export default Footer;