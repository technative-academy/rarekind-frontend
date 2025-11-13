import styles from './MyCollectionsPage.module.css'
import CollectionCard from '../../Components/CollectionCard/CollectionCard'
import CollectionSearch from '../../Components/CollectionSearch/CollectionSearch'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { fetchCollections } from '../../API/collectionAPISlice'
import Loading from '../../Components/Loading/Loading'

export default function MyCollectionsPage() {
    const dispatch = useDispatch()
    const collections = useSelector((state) => state.collections.items)
    const status = useSelector((state) => state.collections.status)
    const error = useSelector((state) => state.collections.error)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCollections())
        }
    }, [dispatch, status])

    return (
        <section className={styles.wrapper}>
            <p>All Collections</p>
            <CollectionSearch />
            {status === 'loading' && <Loading />}
            <div className={styles.grid}>
                {collections.map((collection) => (
                    <CollectionCard
                        key={collection.id}
                        collection={collection}
                    />
                ))}
            </div>
        </section>
    )
}
