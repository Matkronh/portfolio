import styles from '../styles/styles.module.css'

function Portfoliox(){
    return(
        <div className={styles.card}>
            <h1 className={styles.cardelement}>Mine Prosjekter</h1>
            <h2 className={styles.cardelement}>1. www.github.com/eksempel</h2>
            <h2 className={styles.cardelement}>2. www.Figma.com/eksempel</h2>
            <h2 className={styles.cardelement}>3. Unity playstore/eksempel</h2>
        </div>
    )
}

export default Portfoliox