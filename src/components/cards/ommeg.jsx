import styles from '../styles/styles.module.css'
import "./styles.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import mePic from "../../img/meg.jpg"
import discSvg from '../../img/discord-icon-svgrepo-com.svg'
import gitSvg from '../../img/github-color-svgrepo-com.svg'
import twitSvg from '../../img/twitter-color-svgrepo-com.svg'
import Modal from '../parts/rodal';



function Ommeg(props){
    return(
        <div className={styles.aboutmecard}>
                    {/* <h1 className={styles.aboutmecardelementtop}>{props.aboutmetitle}</h1> */}
                    <img className={styles.mepic} src={mePic} />
                        <div className={styles.contact3}>
                            <div className={styles.diasp}>
                            <a href="https://discord.com/users/1054331390180728904" target="_blank" rel="noopener noreferrer"><img className={styles.refbtn} src={discSvg}/></a>
                            </div>
                            <div className={styles.diainvis}/>
                            <div className={styles.diasp}>
                            <a href="https://github.com/Matkronh" target="_blank" rel="noopener noreferrer"><img className={styles.refbtn} src={gitSvg}/></a>
                            </div>
                            <div className={styles.diainvis}/>
                            <div className={styles.diasp}>
                            <a href="https://twitter.com/Mats277961" target="_blank" rel="noopener noreferrer"><img className={styles.refbtn} src={twitSvg}/></a>
                            </div>
                        </div>
                        <div>
                            <Modal />
                        </div>
                        <p className={styles.aboutmecardelement}>
                            {props.para1}
                        </p>
                        <p className={styles.aboutmecardelement}>
                            {props.para2}
                        </p>
                        <p className={styles.aboutmecardelement}>
                            {props.para3}
                        </p>
        </div>
    )
}

export default Ommeg