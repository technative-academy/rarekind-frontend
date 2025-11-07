import styles from "./Header.module.css";
import React from "react";
import SiteNav from "../SiteNav/SiteNav";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <img
        src="/images/rarekindlogo.png"
        alt="RareKind Logo"
        className={styles.logo}
      />

      
      <div className={styles.userButtons}>
        <Link to="/signup" className={styles.userButton}>
          Sign up
        </Link>
        <Link to="/login" className={styles.userButton}>
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Header;
