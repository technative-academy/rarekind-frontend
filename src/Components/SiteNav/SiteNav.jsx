import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";

function SiteNav() {
  const navLinks = [
    { label: "Dashboard", url: "/" },
    { label: "Login", url: "/login" },
    { label: "Signup", url: "/signup" },
    { label: "Users", url: "/users" },
    { label: "All collections", url: "/allcollections" },
    { label: "My collections", url: "/mycollections" },
    { label: "One of my collections", url: "/oneofmycollections" },
  ];
  return (
    <div className={styles.wrapper}>
      <nav className={styles.links}>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.url}
            to={navLink.url}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            {navLink.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default SiteNav;
