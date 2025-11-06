import styles from './LoginForm.module.css'
import { Link } from 'react-router'

function LoginForm() {
    return (
        <div className={styles.wrapper}>
           <Link to={'..'} className={styles.close} aria-label="Close Login">X</Link>
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

export default LoginForm
