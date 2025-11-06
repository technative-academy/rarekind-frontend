import styles from './SignupForm.module.css'
import { Link } from 'react-router'

function SignupForm() {
    return (
        <div className={styles.wrapper}>
           <Link to={'..'} className={styles.close} aria-label="Close Login">X</Link>
            <h2>Sign up</h2>
            <form className={styles.form}>
                <label className={styles.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name..."
                        className={styles.emailInput}
                    />
                </label>
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

export default SignupForm