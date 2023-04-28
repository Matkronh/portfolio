/* eslint-disable react/prop-types */
import styles from './styles/styles.module.css'
import icon1 from '../img/icon1r.svg'
import icon2 from '../img/icon2r.svg'
import icon3 from '../img/icon3r.svg'
/* import portrait from '../img/portrait.jpg' */

function TheTextDiv(props){
    return(
        <div className={styles.card}>
            
                    <h2 className={styles.cardelement}>Navn: </h2>
                    <h2 className={styles.cardelement}>{props.name}</h2>
                    <h2 className={styles.cardelement}>{props.title}</h2>
                    <h2 className={styles.cardelement}>Kontakt Info</h2>
                    <h2 className={styles.cardelement}><img className={styles.cardelementico} src={icon1} />{props.number}</h2>
                    <h2 className={styles.cardelement}><img className={styles.cardelementico} src={icon2} />{props.mail}</h2>
                    <h2 className={styles.cardelement}><img className={styles.cardelementico} src={icon3} />{props.adress}</h2>
        </div>
    )
}

export default TheTextDiv