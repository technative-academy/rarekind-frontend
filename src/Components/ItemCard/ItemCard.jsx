import styles from './ItemCard.module.css'



export default function ItemCard({ item }) {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardHeader}>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <p>{item.description}</p>
        </div>
    )
}
