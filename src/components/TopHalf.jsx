import styles from './styles.module.css'
import logo from '../img/doggie.png'
import icon1 from '../img/icon1r.svg'
import icon2 from '../img/icon2r.svg'
import icon3 from '../img/icon3r.svg'


function TopHalf(){
    return(
        <div className={styles.dimensions}>
            <div className={styles.card1}>
                <div>
                    <div className={styles.rec1}></div>
                    <div className={styles.rec2}></div>
                    <div className={styles.rec3}></div>
                    <div className={styles.rec4}></div>
                    <div className={styles.rec5}></div>
                    <div className={styles.rec6}></div>
                    <div className={styles.rec7}></div>
                </div>
                <div className={styles.pic}><img className={styles.imgprop} src={logo} /></div>
                <div className={styles.textDiv}>
                    <h2 className={styles.fontOne}>Navn: </h2>
                    <h2 className={styles.fontTwo}>Mats Emil Kronheim</h2>
                    <h2 className={styles.fontThree}>Junior Jobb Tittel</h2>
                    <h2 className={styles.fontFour}>Kontakt Info</h2>
                    <img className={styles.iconprop1} src={icon1} />
                    <h2 className={styles.fontFive}>+47 484 582 08</h2>
                    <img className={styles.iconprop2} src={icon2} />
                    <h2 className={styles.fontSix}>mats.kodehode@gmail.com</h2>
                    <img className={styles.iconprop3} src={icon3} />
                    <h2 className={styles.fontSeven}>Sør-vestre Nordpolen 84, 8080 Murica</h2>
                </div>
            </div>
        </div>
    )
}

export default TopHalf