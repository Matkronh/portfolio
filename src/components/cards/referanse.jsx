import styles from '../styles/styles.module.css'

function Referanse(){
    return(
        <div className={styles.card}>
            <h1 className={styles.topcardelement}>Mine Referanser</h1>
            <h2 className={styles.cardelement}>1. Referanse nr 1</h2>
            <h2 className={styles.cardelement}>2. Referanse nr 2</h2>
            <h2 className={styles.cardelement}>3. Referanse nr 3</h2>
            <h2 className={styles.cardelement}>4. Referanse nr 4</h2>
        </div>
    )
}

export default Referanse