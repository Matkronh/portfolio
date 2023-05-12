import styles from '../styles/styles.module.css'
import MediaQuery from 'react-responsive'

function Erfaring(props){
    return(
        <div className={styles.card}>
            <MediaQuery maxWidth={600}>
            <h1 id="sec" className={styles.topcardelement}><br/>{props.experience}</h1>
            </MediaQuery>
            <MediaQuery minWidth={600}>
            <h1 id="sec" className={styles.topcardelement}>{props.experience}</h1>
            </MediaQuery>
            <h2 className={styles.cardelement}>{props.exp1}</h2>
            <h2 className={styles.cardelement}>{props.exp2}</h2>
            <h2 className={styles.cardelement}>{props.exp3}</h2>
        </div>
    )
}

export default Erfaring