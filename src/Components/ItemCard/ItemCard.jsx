import styles from './ItemCard.module.css'

export default function ItemCard() {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardHeader}>Title of Item</h3>
            <p>Description of the item maybe </p>
        </div>
    )
}
