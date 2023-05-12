import styles from '../styles/styles.module.css'
import MediaQuery from 'react-responsive'

function Utdanning(props){
    return(
        <div className={styles.card}>
                <MediaQuery maxWidth={600}>
                    <h1 className={styles.topcardelement}><br/>{props.education}</h1>
                </MediaQuery>
                <MediaQuery minWidth={600}>
                    <h1 className={styles.topcardelement}>{props.education}</h1>
                </MediaQuery>
                    <h2 className={styles.cardelement}>{props.edu1}</h2>
                    <h2 className={styles.cardelement}>{props.edu2}</h2>
                    <h2 className={styles.cardelement}>{props.edu3}</h2>
                    <h2 className={styles.cardelement}>{props.edu4}</h2>
        </div>
    )
}

export default Utdanning