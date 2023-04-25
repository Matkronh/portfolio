import styles from './styles/styles.module.css'
import { Link, Outlet } from 'react-router-dom'
import './styles/styles.module.css'
import TheTextDiv from './TheTextDiv'
/* import Header from './header' */
function BottomHalf(){

    
    return(
        <div>
            
        <div className={styles.dimensions}>
            <div className={styles.navbar}>
                <Link className={`${styles.navbaritem} + ${styles.hvrwobbletop}`} to='/utdanning'><br/><h2 className={styles.navbaritemtext}>Utdanning</h2></Link>
                <Link className={`${styles.navbaritem} + ${styles.hvrwobbletop}`} to='/skills'><br/><h2 className={styles.navbaritemtext}>Skills</h2></Link>
                <Link className={`${styles.navbaritem} + ${styles.hvrwobbletop}`} to='/portfoliox'><br/><h2 className={styles.navbaritemtext}>Portfolio</h2></Link>
                <Link className={`${styles.navbaritem} + ${styles.hvrwobbletop}`} to='/referanse'> <br/><h2 className={styles.navbaritemtext}>Referanse</h2></Link>
                <Link className={`${styles.navbaritem} + ${styles.hvrwobbletop}`} to='/erfaring'><br/><h2 className={styles.navbaritemtext}>Erfaring</h2></Link>
                <Link className={`${styles.navbaritem} + ${styles.hvrwobbletop}`} to='/ommeg'><br/><h2 className={styles.navbaritemtext}>OmMeg</h2></Link>
            </div>

            <TheTextDiv 
                    name="Mats Emil Kronheim"
                    title="Junior Developer"
                    number="+47 48 45 82 08"
                    mail="mats.kodehode@gmail.com"
                    adress="Vestre Julegaten 949438"
                />
            
        </div>
        <br/>
            <Outlet/>
            <br/>
        </div>
    )   
}


export default BottomHalf