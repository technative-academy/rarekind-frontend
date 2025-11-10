import styles from './AddItemForm.module.css'
import { useDispatch } from 'react-redux'
import { closePopup } from '../PopUp/popupSlice'

function AddItemForm() {
    const dispatch = useDispatch()

    return (
        <div className={styles.wrapper}>
            <button
                onClick={() => dispatch(closePopup())}
                className={styles.close}
                aria-label="Close Login"
            >
                X
            </button>
            <h2>Log in</h2>
            <form className={styles.form}>
                <label className={styles.label}>
                    Email
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter email..."
                        className={styles.emailInput}
                    />
                </label>
                <label className={styles.label}>
                    Password
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password..."
                        className={styles.passwordInput}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    LOG IN
                </button>
            </form>
        </div>
    )
}

export default AddItemForm