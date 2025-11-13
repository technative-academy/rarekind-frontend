import styles from './DarkMode.module.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../../Slices/darkModeSlice'

function DarkMode() {
    const dispatch = useDispatch()
    const isDarkMode = useSelector((state) => state.darkmode.isDarkMode)

    useEffect(() => {
        const html = document.documentElement
        if (isDarkMode) {
            html.classList.add('dark-mode')
            html.classList.remove('light-mode')
        } else {
            html.classList.add('light-mode')
            html.classList.remove('dark-mode')
        }
    }, [isDarkMode])

    return (
        <div>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={!isDarkMode}
                    onChange={() => dispatch(toggleDarkMode())}
                    aria-label="Toggle dark mode"
                />
                <span className={styles.slider}></span>
            </label>
        </div>
    )
}

export default DarkMode
