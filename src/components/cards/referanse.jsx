import styles from '../styles/styles.module.css'
import MediaQuery from 'react-responsive'

function Referanse(props){
    return(
        <div className={styles.card}>
            <MediaQuery maxWidth={600}>
                <h1 className={styles.topcardelement}><br/>{props.reference}</h1>
            </MediaQuery>
            <MediaQuery minWidth={600}>
                <h1 className={styles.topcardelement}>{props.reference}</h1>
            </MediaQuery>
            <h2 className={styles.cardelement}>{props.ref1}</h2>
            <h2 className={styles.cardelement}>{props.ref2}</h2>
            <h2 className={styles.cardelement}>{props.ref3}</h2>
            <h2 className={styles.cardelement}>{props.ref4}</h2>
        </div>
    )
}

export default Referanse