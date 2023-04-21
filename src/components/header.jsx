import styles from './styles/styles.module.css'


function Header(){
    return(
        
        <div className={styles.app}>
            <div className={`${styles.header} + ${styles.hvrpop}`}>
                <h2 className={styles.buttonText}>Placeholder text</h2>
            </div>
            <div className={`${styles.header2} + ${styles.hvrpop}`}>
                <h2 className={styles.buttonText}>Placeholder text</h2>
            </div>
        </div>
    )
}

export default Header