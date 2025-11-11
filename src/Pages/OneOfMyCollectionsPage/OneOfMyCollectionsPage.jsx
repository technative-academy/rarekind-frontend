import styles from './OneOfMyCollectionsPage.module.css'
import CollectionDetails from '../../Components/CollectionDetails/CollectionDetails'

import Items from '../../Components/Items/Items'

function OneOfMyCollectionsPage() {
    return (
        <>
            <section className={styles.wrapper}>
                <CollectionDetails />
            </section>
            <Items />
        </>
    )
}

export default OneOfMyCollectionsPage
