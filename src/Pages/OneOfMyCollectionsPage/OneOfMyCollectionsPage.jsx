import styles from './OneOfMyCollectionsPage.module.css'
import { FaPencil, FaTrashCan } from 'react-icons/fa6'

function OneOfMyCollectionsPage() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.collectionContainer}>
                <h2 className={styles.pageTitle}>Title of Collection </h2>
                <div className={styles.descriptionContainer}>
                    <h3 className={styles.title}>DESCRIPTION</h3>
                    <p className={styles.descriptionText}>
                        Additional info filled up by the user when creating
                        collection. This text could be quite long so we don't
                        want it to be in a narrow column.
                    </p>
                </div>
                <div className={styles.additionalContainer}>
                    <h3 className={styles.title}>ADDITIONAL</h3>
                    <p className={styles.additionalText}>
                        Additional info filled up by the user when creating
                        collection. This text could be quite long so we don't
                        want it to be in a narrow column.
                    </p>
                </div>
                <div className={styles.tagsContainer}>
                    <h4 className={styles.title}>TAGS</h4>
                    <ul className={styles.tagList}>
                        <li className={styles.tag}>TAG</li>
                        <li className={styles.tag}>TAG</li>
                    </ul>
                </div>
                <div className={styles.statusContainer}>
                    <p className={styles.statusDetails}>
                        <span className={styles.statusTitle}>CREATED: </span>
                        <time dateTime="14:00"> 2:00pm</time>
                    </p>
                    <p className={styles.statusDetails}>
                        <span className={styles.statusTitle}>
                            LAST UPDATED:
                        </span>

                        <time dateTime="14:00"> 2:00pm</time>
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.editCollectionButton}>
                        <FaPencil className={styles.icon} />
                        EDIT COLLECTION
                    </button>
                    <button className={styles.deleteCollectionButton}>
                        <FaTrashCan className={styles.icon} />
                        DELETE COLLECTION
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OneOfMyCollectionsPage
