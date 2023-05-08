import styles from '../styles/styles.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { FreeMode, Scrollbar, Mousewheel } from "swiper";



function Ommeg(){
    return(
        <div className={styles.aboutmecard}>

            <Swiper
                direction={"vertical"}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={true}
                mousewheel={true}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <h1 className={styles.aboutmecardelementtop}>Om Meg</h1>
                        <p className={styles.aboutmecardelement}>
                            Jeg heter Mats og jeg er 33 år ung.
                            Jeg elsker å programmere, designe og bruke kreativiteten min til å skape, om det er gjennom html, css eller js- til syvende og sist skal alt flettes sammen og det er noe med den følelsen når alt klikker sammen jeg rett og slett ikke får nok av. Når jeg får på meg headsettet, utestenger alle distraksjoner og kommer inn i sonen så føler jeg at det begynner å krible i fingrene og det er rett opp i syvende gir.
                        </p>
                        <p className={styles.aboutmecardelement}>
                            Jeg liker foruten å bruke fritiden min til bl.a spill og level design i ulike arenaer, har vært innom Unity der jeg selv-lærte meg en del c#, men mesteparten av tiden de siste årene har jeg brukt i Source SDK der jeg har designet og bygget opp spill leveler; noe som hjalp meg veldig når jeg begynte med Javascript siden det gikk veldig mye i logikk, I/O, parenting, class & id i Source SDK og.
                        </p>
                        <p className={styles.aboutmecardelement}>
                            Denne fritidshobbyen min har uten tvil gjort meg til en bedre utvikler med timesvis av feilsøking, tilbakemeldinger og hardt arbeid.
                        </p>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Ommeg