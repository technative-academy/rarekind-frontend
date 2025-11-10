import styles from './Footer.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className={styles.wrapper}>
            <div>
                <Link
                    to="https://github.com/technative-academy/rarekind-frontend"
                    target='blank'
                    className={styles.footerLink}
                >
                    Front-end repo
                </Link>
                <Link
                    to="https://github.com/technative-academy/rarekind-backend"
                    target='blank'
                    className={styles.footerLink}
                >
                    Back-end repo
                </Link>
            </div>
            <div>
                <a className={styles.footerSubLink}>
                    Terms and Conditions
                </a>
                <a className={styles.footerSubLink}>Cookies</a>
            </div>
            <p>© 2025 RareKind</p>
        </div>
    )
}

export default Footer
