import styles from './Header.module.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openPopup } from '../PopUp/popupSlice'

function Header() {
    const dispatch = useDispatch()

    return (
        <div className={styles.wrapper}>
            <img
                src="/images/rarekindlogo.png"
                alt="RareKind Logo"
                className={styles.logo}
            />

            <div className={styles.userButtons}>
                <button className={styles.userButton}
                onClick={() => dispatch(openPopup('signup'))}>Sign up</button>
                <button
                    className={styles.userButton}
                    onClick={() => dispatch(openPopup('login'))}
                >
                    Log in
                </button>
            </div>
        </div>
    )
}

export default Header
