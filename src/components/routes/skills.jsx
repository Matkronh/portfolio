import styles from '../styles/styles.module.css'

function Skills(){
    return(
        <div className={styles.dimensions}>
            <h1 className={styles.h1text}>Mine Skills</h1>
            <h2 className={styles.h2text}>1. CSS</h2>
            <h2 className={styles.h2text}>2. C#</h2>
            <h2 className={styles.h2text}>3. JS</h2>
            <h2 className={styles.h2text}>4. HTML</h2>
            <h2 className={styles.h2text}>5. BBQ</h2>
        </div>
    )
}

export default Skills