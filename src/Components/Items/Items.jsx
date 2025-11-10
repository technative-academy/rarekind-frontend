import styles from './Items.module.css'

import { FaInbox, FaPlus } from 'react-icons/fa6'

export default function Items() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.noItemsContainer}>
                <FaInbox className={styles.inboxIcon} />
                <p className={styles.textBold}>No items added, yet</p>
                <p className={styles.textLight}>
                    Would you like to add one now?
                </p>
                <button className={styles.addItemButton}>
                    <FaPlus className={styles.addIcon} />
                    ADD ITEM
                </button>
            </div>
        </section>
    )
}
