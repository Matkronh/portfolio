import styles from './styles/styles.module.css'
import stylesx from './styles/squares.module.css'
import { Link, Outlet } from 'react-router-dom'
import './styles/styles.module.css'
import TheTextDiv from './TheTextDiv'

function BottomHalf(){

    
    return(
        <div className={styles.app}>
            <br/>
            <Outlet/>
            <br/>
        <div className={styles.dimensions}>
            <div className={styles.flexi}>
                {/* <div className={stylesx.borderOne}></div>
                <div className={stylesx.borderTwo}></div>
                <div className={stylesx.borderThree}></div>
                <div className={stylesx.borderFour}></div> */}

                <Link className={`${stylesx.placeholder} + ${styles.hvrwobbletop}`} to='/utdanning'><br/><h2 className={styles.placeholdertext}>Utdanning</h2></Link>
                <Link className={`${stylesx.placeholder} + ${styles.hvrwobbletop}`} to='/skills'><br/><h2 className={styles.placeholdertext}>Skills</h2></Link>
                <Link className={`${stylesx.placeholder} + ${styles.hvrwobbletop}`} to='/portfolio'><br/><h2 className={styles.placeholdertext}>Portfolio</h2></Link>
                <Link className={`${stylesx.placeholder} + ${styles.hvrwobbletop}`} to='/referanse'> <br/><h2 className={styles.placeholdertext}>Referanse</h2></Link>
                <Link className={`${stylesx.placeholder} + ${styles.hvrwobbletop}`} to='/erfaring'><br/><h2 className={styles.placeholdertext}>Erfaring</h2></Link>
                <Link className={`${stylesx.placeholder} + ${styles.hvrwobbletop}`} to='/ommeg'><br/><h2 className={styles.placeholdertext}>Om Meg</h2></Link>
                <Link className={`${stylesx.placeholder} + ${styles.hvrwobbletop}`} to='/'><br/><h2 className={styles.placeholdertext}>Close</h2></Link>
            </div>

            <TheTextDiv 
                    name="Mats Emil Kronheim"
                    title="Junior Developer"
                    number="+47 48 45 82 08"
                    mail="mats.kodehode@gmail.com"
                    adress="Vestre Julegaten 949438"
                />
            
        </div>
        </div>
    )   
}


export default BottomHalf