import styles from './CollectionCard.module.css'
import { Link } from 'react-router-dom'

export default function CollectionCard({ collection }) {
    return (
        <Link to={`/collection/${collection.id}`} className={styles.card}>
            <h3 className={styles.cardHeader}>{collection.name}</h3>
            <p className={styles.cardTag}>TAG</p>
            <p className={styles.cardDetails}>
                <span className={styles.cardStatusTitle}>Created:</span>{' '}
                <time dateTime="14:00"> {collection.date_created}</time>
            </p>
            <p className={styles.cardDetails}>
                <span className={styles.cardStatusTitle}>Last updated:</span>{' '}
                <time dateTime="14:00"> {collection.date_updated}</time>
            </p>
        </Link>
    )
}
