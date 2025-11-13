import styles from './OneOfMyCollectionsPage.module.css'

import CollectionDetails from '../../Components/CollectionDetails/CollectionDetails'
import ItemCard from '../../Components/ItemCard/ItemCard'
import AddItems from '../../Components/AddItems/AddItems'
import ToggleButton from '../../Components/ToggleButton/ToggleButton'

import { useSelector } from 'react-redux'

function OneOfMyCollectionsPage() {
    const selectedToggle = useSelector((state) => state.toggle.selectedToggle)

    return (
        <>
            {!selectedToggle && (
                <section className={styles.wrapper}>
                    <CollectionDetails />
                </section>
            )}
            <ToggleButton />

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
