import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h2>Loading</h2>
        </div>
    )
}

export default Loading
