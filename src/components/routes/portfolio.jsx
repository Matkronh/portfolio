import styles from '../styles/styles.module.css'

function Portfolio(){
    return(
        <div className={styles.dimensions}>
            <h1 className={styles.h1text}>Min Portfolio</h1>
            <h2 className={styles.h2text}>1. Github</h2>
            <h2 className={styles.h2text}>2. Figma</h2>
            <h2 className={styles.h2text}>3. Unity</h2>
        </div>
    )
}

export default Portfolio