import styles from './OneOfMyCollectionsPage.module.css'
import CollectionDetails from '../../Components/CollectionDetails/CollectionDetails'
import ItemCard from '../../Components/ItemCard/ItemCard'

import AddItems from '../../Components/Items/AddItems'

function OneOfMyCollectionsPage() {
    return (
        <>
            <section className={styles.wrapper}>
                <CollectionDetails />
            </section>

            <section className={styles.itemContainer}>
                {/* <AddItems /> */}
                <div className={styles.grid}>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </section>
        </>
    )
}

export default OneOfMyCollectionsPage
