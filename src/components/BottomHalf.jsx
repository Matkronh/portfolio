import styles from './styles/styles.module.css'
import TopHalfMini from './mini/TopHalfMini'

function BottomHalf(){
    return(
        <div className={styles.dimensions2}>
            <div>
                <div className={styles.borderOne}></div>
                <div className={styles.borderTwo}></div>
                <div className={styles.borderThree}></div>
                <div className={styles.borderFour}></div>

                <div className={styles.brec8}><TopHalfMini /></div>

                <div className={styles.brec2}><br/><h2 className={styles.brectext}>Utdanning</h2></div>
                <div className={styles.brec3}><br/><h2 className={styles.brectext2}>Skills</h2></div>
                <div className={styles.brec4}><br/><h2 className={styles.brectext2}>Portfolio</h2></div>
                <div className={styles.brec5}><br/><h2 className={styles.brectext3}>Referanse</h2></div>
                <div className={styles.brec6}><br/><h2 className={styles.brectext2}>Erfaring</h2></div>
                <div className={styles.brec7}><br/><h2 className={styles.brectext2}>Om Meg</h2></div>
            </div>
            
        </div>
    )
}

export default BottomHalf