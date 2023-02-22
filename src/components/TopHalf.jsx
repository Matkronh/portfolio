import styles from './styles/styles.module.css'
import logo from '../img/doggie.png'
import TheTextDiv from './TheTextDiv'



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
                <TheTextDiv 
                    name="Mats Emil Kronheim"
                    title="Junior Developer"
                    number="+47 48 45 82 08"
                    mail="mats.kodehode@gmail.com"
                    adress="Vestre Julegaten 949438 Vestpolen"
                />
            </div>
        </div>
    )
}

export default TopHalf