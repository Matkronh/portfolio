import styles from '../styles/styles.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { FreeMode, Scrollbar, Mousewheel } from "swiper";



function Ommeg(props){
    return(
        <div className={styles.aboutmecard}>
                    <h1 className={styles.aboutmecardelementtop}>{props.aboutmetitle}</h1>
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