import styles from './styles.module.css'

function TopHalf(){
    return(
        <div className={styles.dimensions}>
            <div className={styles.card1}>
                <div className={styles.rec1}></div>
                <div className={styles.rec2}></div>
                <div className={styles.rec3}></div>
                <div className={styles.rec4}></div>
                <div className={styles.rec5}></div>
                <div className={styles.rec6}></div>
                <div className={styles.rec7}></div>
                <div className={styles.pic}></div>
                <div className={styles.textDiv}></div>
            </div>
        </div>
    )
}

export default TopHalf