/* eslint-disable react/prop-types */
import styles from './ministyles.module.css'
import icon1 from '../../img/icon1r.svg'
import icon2 from '../../img/icon2r.svg'
import icon3 from '../../img/icon3r.svg'

function TheTextDivMini(props){
    return(
        <div className={styles.textDiv}>
                    <h2 className={styles.fontOne}>Navn: </h2>
                    <h2 className={styles.fontTwo}>{props.name}</h2>
                    <h2 className={styles.fontThree}>{props.title}</h2>
                    <h2 className={styles.fontFour}>Kontakt Info</h2>
                    <img className={styles.iconprop1} src={icon1} />
                    <h2 className={styles.fontFive}>{props.number}</h2>
                    <img className={styles.iconprop2} src={icon2} />
                    <h2 className={styles.fontSix}>{props.mail}</h2>
                    <img className={styles.iconprop3} src={icon3} />
                    <h2 className={styles.fontSeven}>{props.adress}</h2>
                </div>
    )
}

export default TheTextDivMini