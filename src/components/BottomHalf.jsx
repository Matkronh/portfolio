import styles from './styles/styles.module.css'
import TopHalfMini from './mini/TopHalfMini'
import { Link, Outlet } from 'react-router-dom'
import './styles/styles.module.css'

function BottomHalf(){

    
    return(
        <div>
            <br/>
            <Outlet/>
            <br/>
        <div className={styles.dimensions2}>
            <div>
                <div className={styles.borderOne}></div>
                <div className={styles.borderTwo}></div>
                <div className={styles.borderThree}></div>
                <div className={styles.borderFour}></div>

                <div className={`${styles.brec8} + ${styles.hvrpulseshrink}`}><Link to='/'><TopHalfMini /></Link></div>

                <Link className={`${styles.brec2} + ${styles.hvrwobbletop}`} to='/utdanning'><br/><h2 className={styles.brectext}>Utdanning</h2></Link>
                <Link className={`${styles.brec3} + ${styles.hvrwobbletop}`} to='/skills'><br/><h2 className={styles.brectext2}>Skills</h2></Link>
                <Link className={`${styles.brec4} + ${styles.hvrwobbletop}`} to='/portfolio'><br/><h2 className={styles.brectext2}>Portfolio</h2></Link>
                <Link className={`${styles.brec5} + ${styles.hvrwobbletop}`} to='/referanse'> <br/><h2 className={styles.brectext3}>Referanse</h2></Link>
                <Link className={`${styles.brec6} + ${styles.hvrwobbletop}`} to='/erfaring'><br/><h2 className={styles.brectext2}>Erfaring</h2></Link>
                <Link className={`${styles.brec7} + ${styles.hvrwobbletop}`} to='/ommeg'><br/><h2 className={styles.brectext2}>Om Meg</h2></Link>
            </div>
            
        </div>
        </div>
    )   
}

export default BottomHalf