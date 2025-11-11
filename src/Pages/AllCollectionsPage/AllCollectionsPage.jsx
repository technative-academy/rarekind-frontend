import styles from './AllCollectionsPage.module.css'
import CollectionCard from '../../Components/CollectionCard/CollectionCard'
import CollectionSearch from '../../Components/CollectionSearch/CollectionSearch'
import CollectionFilter from '../../Components/CollectionFilter/CollectionFilter'

function AllCollectionsPage() {
    return (
        <section className={styles.wrapper}>
            <p>All Collections</p>
            <div className={styles.inputContainer}>
                <CollectionSearch />
                <CollectionFilter />
            </div>
            <div className={styles.grid}>
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
            </div>
        </section>
    )
}

export default AllCollectionsPage
