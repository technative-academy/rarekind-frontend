import styles from './AddItemForm.module.css'
import { useDispatch } from 'react-redux'
import { closePopup } from '../PopUp/popupSlice'
import { GrTrash } from "react-icons/gr";

function AddItemForm() {
    const dispatch = useDispatch()

    return (
        <div className={styles.wrapper}>
            <button
                onClick={() => dispatch(closePopup())}
                className={styles.close}
                aria-label="Close add item"
            >
                X
            </button>
            <h2>Item detail</h2>
            <form className={styles.form}>
                <label className={styles.label}>
                    Description
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter item description..."
                        className={styles.description}
                    />
                </label>
                <label className={styles.label}>
                    Additional notes
                    <input
                        type="text"
                        name="notes"
                        placeholder="Enter additional notes..."
                        className={styles.notes}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    UPDATE ITEM
                </button>
                <button type="submit" className={styles.deleteButton}>
                    <GrTrash className={styles.deleteIcon} />
                    DELETE ITEM
                </button>
            </form>
        </div>
    )
}

export default AddItemForm