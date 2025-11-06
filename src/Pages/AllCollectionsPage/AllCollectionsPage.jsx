import styles from "./AllCollectionsPage.module.css";
import CollectionCard from "../../Components/CollectionCard/CollectionCard";

function AllCollectionsPage() {
  return (
    <div className={styles.wrapper}>
      <p>All Collections</p>
      <CollectionCard />
      <CollectionCard />
    </div>
  );
}

export default AllCollectionsPage;
