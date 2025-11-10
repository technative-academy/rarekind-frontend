import styles from './OneOfMyCollectionsPage.module.css'
import { FaPencil, FaTrashCan } from 'react-icons/fa6'

function OneOfMyCollectionsPage() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.collectionContainer}>
                <h2 className={styles.pageTitle}>Title of Collection </h2>
                <div className={styles.descriptionContainer}>
                    <h3 className={styles.title}>Description</h3>
                    <p className={styles.description}>
                        Additional info filled up by the user when creating
                        collection. This text could be quite long so we don't
                        want it to be in a narrow column.
                    </p>
                </div>
                <div className={styles.additionalContainer}>
                    <h3 className={styles.title}>Additional</h3>
                    <p>
                        Additional info filled up by the user when creating
                        collection. This text could be quite long so we don't
                        want it to be in a narrow column.
                    </p>
                </div>
                <div className={styles.tagsContainer}>
                    <h3 className={styles.title}>Tags</h3>
                    <ul className={styles.tagList}>
                        <li className={styles.tag}>Tag</li>
                        <li className={styles.tag}>Tag</li>
                    </ul>
                </div>
                <div className={styles.statusContainer}>
                    <p className={styles.statusDetails}>
                        <span className={styles.statusTitle}>Created:</span>{' '}
                        Today at
                        <time dateTime="14:00"> 2:00pm</time>
                    </p>
                    <p className={styles.statusDetails}>
                        <span className={styles.statusTitle}>
                            Last updated:
                        </span>{' '}
                        Today at
                        <time dateTime="14:00"> 2:00pm</time>
                    </p>
                </div>
                <div>
                    <button className={styles.editCollectionButton}>
                        <FaPencil className={styles.icon} />
                        Edit Collection
                    </button>
                    <button className={styles.deleteCollectionButton}>
                        <FaTrashCan className={styles.icon} />
                        Delete Collection
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OneOfMyCollectionsPage
