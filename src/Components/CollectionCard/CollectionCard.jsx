import styles from './CollectionCard.module.css'

export default function CollectionCard({ collection }) {
    
    return (
        <section className={styles.card}>
            <h3 className={styles.cardHeader}>{collection.name}</h3>
            <p className={styles.cardTag}>TAG</p>
            <p className={styles.cardDetails}>
                <span className={styles.cardStatusTitle}>Created:</span> Today
                at
                <time dateTime="14:00"> 2:00pm</time>
            </p>
            <p className={styles.cardDetails}>
                <span className={styles.cardStatusTitle}>Last updated:</span>{' '}
                Today at
                <time dateTime="14:00"> 2:00pm</time>
            </p>
        </section>
    )
}
