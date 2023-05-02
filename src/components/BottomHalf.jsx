import styles from './styles/styles.module.css'
/* import { Link, Outlet } from 'react-router-dom' */
import './styles/styles.module.css'
/* import TheTextDiv from './TheTextDiv' */
import Skills from './routes/skills'
import Utdanning from './routes/utdanning'
import Erfaring from './routes/erfaring'
import Portfoliox from './routes/portfolio'
import Referanse from './routes/referanse'
import Ommeg from './routes/ommeg'
import video1 from '../img/cloudhelloup.mp4'
import video2 from '../img/cloudhello.mp4'
import arrow from '../img/arrup.svg'

function BottomHalf(){

    
    return(
        <div>
            <span className={styles.anchor} id='topsection'></span>
                    <div className={styles.intro}>
                        <div className={styles.backgroundvideo}>
                            <h2 className={styles.namestyle}>Mats Kronheim</h2>
                            <video className={styles.videocss} autoPlay loop muted>
                                <source src={video1} type='video/mp4' />
                            </video>
                            <video className={styles.videocss2} autoPlay loop muted>
                                <source src={video2} type='video/mp4' />
                            </video>
                        </div>
                </div>
                

            <div className={styles.navbar}>
                <div className={styles.navbariteminverse}><br/><a href="#skillssection" className={styles.navbaritemtextinverse}>Skills</a></div>
                <div className={styles.navbaritem}><br/><a href="#utdanningsection" className={styles.navbaritemtext}>Utdanning</a></div>
                <div className={styles.navbariteminverse}><br/><a href="#erfaringsection" className={styles.navbaritemtextinverse}>Erfaring</a></div>
                <div className={styles.navbaritem}><br/><a href="#portfoliosection" className={styles.navbaritemtext}>Portfolio</a></div>
                <div className={styles.navbariteminverse}><br/><a href="#referansesection" className={styles.navbaritemtextinverse}>Referanse</a></div>
                <div className={styles.navbaritem}><br/><a href="#ommegsection" className={styles.navbaritemtext}>OmMeg</a></div>
                <div className={styles.navbartotop}><a href='#topsection'><img className={styles.arr} src={arrow} /></a></div>
            </div >

            <div className={styles.transition}>
                <h2 className={styles.transitiontext}>My Portfolio</h2>
            </div>
            

            <div className={styles.container}>
                <span className={styles.anchor} id="skillssection"></span>
                    <div className={styles.sectionheight}>
                        <Skills />
                    </div>
                <span className={styles.anchor} id="utdanningsection"></span>
                    <div className={styles.sectionheight}>
                        <Utdanning />
                    </div>
                <span className={styles.anchor} id="erfaringsection"></span>
                    <div className={styles.sectionheight}>
                        <Erfaring />
                    </div>
                <span className={styles.anchor} id="portfoliosection"></span>
                    <div className={styles.sectionheight}>
                        <Portfoliox />
                    </div>
                <span className={styles.anchor} id="referansesection"></span>
                    <div className={styles.sectionheight}>
                        <Referanse />
                    </div>
                <span className={styles.anchor} id="ommegsection"></span>
                    <div className={styles.sectionheight}>
                        {<Ommeg />}
                    </div>

            </div>
        </div>
    )   
}


export default BottomHalf