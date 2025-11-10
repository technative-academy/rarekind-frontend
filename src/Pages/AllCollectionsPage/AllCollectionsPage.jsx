import styles from "./AllCollectionsPage.module.css";
import CollectionCard from "../../Components/CollectionCard/CollectionCard";
import CollectionSearch from "../../Components/CollectionSearch/CollectionSearch";

function AllCollectionsPage() {
  return (
    <section className={styles.wrapper}>
      <p>All Collections</p>
      <CollectionSearch />
      <div className={styles.grid}>
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </section>
  );
}

export default AllCollectionsPage;
