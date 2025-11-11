import styles from './CollectionFilter.module.css'

export default function CollectionFilter() {
    return (
        <div className={styles.filterWrapper}>
            <select className={styles.filter} aria-label="Sort items by">
                <option value="most-recent">Most Recent</option>
                <option value="title-a-z">Title (A-Z)</option>
                <option value="title-z-a">Title (Z-A)</option>
            </select>
        </div>
    )
}
