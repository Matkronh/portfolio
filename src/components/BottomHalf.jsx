import styles from './styles/styles.module.css'
/* import { Link, Outlet } from 'react-router-dom' */
import './styles/styles.module.css'
import TheTextDiv from './TheTextDiv'
import Skills from './routes/skills'
import Utdanning from './routes/utdanning'
import Erfaring from './routes/erfaring'
import Portfoliox from './routes/portfolio'
import Referanse from './routes/referanse'
import Ommeg from './routes/ommeg'
import video1 from '../img/bgvidfixed.mp4'
import video2 from '../img/bgvidvert.mp4'

function BottomHalf(){

    
    return(
        <div>
            <div className={styles.backgroundvideo}>
                <video className={styles.videohorizontal} autoPlay loop muted>
                    <source src={video1} type='video/mp4' />
                </video>
                <video className={styles.videovertical} autoPlay loop muted>
                    <source src={video2} type='video/mp4' />
                </video>
            </div>

            <div className={styles.navbar}>
                <div className={styles.navbariteminverse}><br/><a href="#skillssection" className={styles.navbaritemtextinverse}>Skills</a></div>
                <div className={styles.navbaritem}><br/><a href="#utdanningsection" className={styles.navbaritemtext}>Utdanning</a></div>
                <div className={styles.navbariteminverse}><br/><a href="#erfaringsection" className={styles.navbaritemtextinverse}>Erfaring</a></div>
                <div className={styles.navbaritem}><br/><a href="#portfoliosection" className={styles.navbaritemtext}>Portfolio</a></div>
                <div className={styles.navbariteminverse}><br/><a href="#referansesection" className={styles.navbaritemtextinverse}>Referanse</a></div>
                <div className={styles.navbaritem}><br/><a href="#ommegsection" className={styles.navbaritemtext}>OmMeg</a></div>
            </div>
            <div className={styles.container}>
                <TheTextDiv 
                    name="Mats Emil Kronheim"
                    title="Junior Developer"
                    number="+4748458208"
                    mail="mats.kodehode@gmail.com"
                    adress="Sætervegen 1298A, Bergen"
                />
                <span className={styles.anchor} id="skillssection"></span>
                <Skills />
                <span className={styles.anchor} id="utdanningsection"></span>
                <Utdanning />
                <span className={styles.anchor} id="erfaringsection"></span>
                <Erfaring />
                <span className={styles.anchor} id="portfoliosection"></span>
                <Portfoliox />
                <span className={styles.anchor} id="referansesection"></span>
                <Referanse />
                <span className={styles.anchor} id="ommegsection"></span>
                <Ommeg />

            </div>
        </div>
    )   
}


export default BottomHalf