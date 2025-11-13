import styles from './OneOfMyCollectionsPage.module.css'
import CollectionDetails from '../../Components/CollectionDetails/CollectionDetails'
import ItemCard from '../../Components/ItemCard/ItemCard'
import AddItems from '../../Components/AddItems/AddItems'
import ToggleButton from '../../Components/ToggleButton/ToggleButton'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchItemsByCollectionId } from '../../API/itemAPISlice'

function OneOfMyCollectionsPage() {
    const selectedToggle = useSelector((state) => state.toggle.selectedToggle)
    const dispatch = useDispatch()
    const items = useSelector((state) => state.items.items)
    const status = useSelector((state) => state.items.status)
    const error = useSelector((state) => state.items.error)
    const { id } = useParams()

    useEffect(() => {
        if (id && status === 'idle') {
            dispatch(fetchItemsByCollectionId(id))
        }
    }, [dispatch, id, status])

    useEffect(() => {
        console.log('[OneOfMyCollectionsPage] Current state:', {
            status,
            itemsCount: items?.length,
            items,
            error
        })
    }, [items, status, error])

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
                    {items.map((item) => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default OneOfMyCollectionsPage
