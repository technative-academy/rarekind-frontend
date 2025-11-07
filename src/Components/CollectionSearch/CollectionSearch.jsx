import { FaSearch } from "react-icons/fa";
import styles from "./CollectionSearch.module.css";

export default function CollectionSearch() {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        aria-label="Search collections"
        name="search"
        id="search"
        type="text"
        placeholder="Search collections..."
      ></input>
      <button className={styles.searchButton} htmlFor="search">
        <FaSearch />
      </button>
    </div>
  );
}
