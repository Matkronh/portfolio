import styles from './styles/styles.module.css'
import stylesx from './styles/squares.module.css'
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
                <div className={stylesx.borderOne}></div>
                <div className={stylesx.borderTwo}></div>
                <div className={stylesx.borderThree}></div>
                <div className={stylesx.borderFour}></div>

                <div className={styles.brec8}><Link to='/'><TopHalfMini /></Link></div>

                <Link className={`${stylesx.brec2} + ${styles.hvrwobbletop}`} to='/utdanning'><br/><h2 className={styles.brectext}>Utdanning</h2></Link>
                <Link className={`${stylesx.brec3} + ${styles.hvrwobbletop}`} to='/skills'><br/><h2 className={styles.brectext2}>Skills</h2></Link>
                <Link className={`${stylesx.brec4} + ${styles.hvrwobbletop}`} to='/portfolio'><br/><h2 className={styles.brectext2}>Portfolio</h2></Link>
                <Link className={`${stylesx.brec5} + ${styles.hvrwobbletop}`} to='/referanse'> <br/><h2 className={styles.brectext3}>Referanse</h2></Link>
                <Link className={`${stylesx.brec6} + ${styles.hvrwobbletop}`} to='/erfaring'><br/><h2 className={styles.brectext2}>Erfaring</h2></Link>
                <Link className={`${stylesx.brec7} + ${styles.hvrwobbletop}`} to='/ommeg'><br/><h2 className={styles.brectext2}>Om Meg</h2></Link>
            </div>
            
        </div>
        </div>
    )   
}

export default BottomHalf