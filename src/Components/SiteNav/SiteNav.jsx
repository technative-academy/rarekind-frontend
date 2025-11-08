import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";
import { useDispatch } from "react-redux";
import { openPopup } from "../PopUp/popupSlice";

function SiteNav() {
  const dispatch = useDispatch();
  const navLinks = [
    { label: "Dashboard", url: "/" },
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
      <button className={styles.newCollectionButton} onClick={() => dispatch(openPopup('newcollection'))}>+ NEW COLLECTION</button>
    </div>
  );
}

export default SiteNav;
