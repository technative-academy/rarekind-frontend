import styles from './NewCollectionForm.module.css'
import { useDispatch } from 'react-redux'
import { closePopup } from '../PopUp/popupSlice'

function NewCollectionForm() {
    const dispatch = useDispatch()

    return (
        <div className={styles.wrapper}>
            <button
                onClick={() => dispatch(closePopup())}
                className={styles.close}
                aria-label="Close New Collection Form"
            >
                X
            </button>
            <h2>New Collection</h2>
            <form className={styles.form}>
                <label className={styles.label}>
                    Title
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title..."
                        className={styles.title}
                    />
                </label>
                <label className={styles.label}>
                    Description
                    <input
                        type="text"
                        name="species"
                        placeholder="Enter description..."
                        className={styles.description}
                    />
                </label>
                <label className={styles.label}>
                    Species
                    <input
                        type="text"
                        name="species"
                        placeholder="Enter species..."
                        className={styles.species}
                    />
                </label>
                <label className={styles.label}>
                    Tags
                    <input
                        type="text"
                        name="tags"
                        placeholder="Add tags..."
                        className={styles.tags}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    CREATE COLLECTION
                </button>
            </form>
        </div>
    )
}

export default NewCollectionForm
