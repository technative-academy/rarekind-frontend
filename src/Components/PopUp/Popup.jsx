import React from 'react'
import styles from './Popup.module.css'
import { useSelector } from 'react-redux'
import LoginForm from '../LoginForm/LoginForm.jsx'
import SignupForm from '../SignupForm/SignupForm.jsx'
import NewCollectionForm from '../NewCollectionForm/NewCollectionForm.jsx'

function PopupRoot() {
    const selectedPopup = useSelector((state) => state.popup.selectedPopup)

    if (!selectedPopup) return null

    if (selectedPopup === 'login') {
        return (
            <div className={styles.backdrop}>
                <LoginForm />
            </div>
        )
    }
    if (selectedPopup === 'signup') {
        return (
            <div className={styles.backdrop}>
                <SignupForm />
            </div>
        )
    }
    if (selectedPopup === 'newcollection') {
        return (
            <div className={styles.backdrop}>
                <NewCollectionForm />
            </div>
        )
    }
}

export default PopupRoot
