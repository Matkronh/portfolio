import styles from '../styles/styles.module.css'
import "./styles.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import mePic from "../../img/meg.jpg"



function Ommeg(props){
    return(
        <div className={styles.aboutmecard}>
                    <h1 className={styles.aboutmecardelementtop}>{props.aboutmetitle}</h1>
                    <img className={styles.mepic} src={mePic} />
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