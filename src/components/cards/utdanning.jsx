import styles from '../styles/styles.module.css'

function Utdanning(props){
    return(
        <div className={styles.card}>
                    <h1 className={styles.topcardelement}>{props.education}</h1>
                    <h2 className={styles.cardelement}>{props.edu1}</h2>
                    <h2 className={styles.cardelement}>{props.edu2}</h2>
                    <h2 className={styles.cardelement}>{props.edu3}</h2>
                    <h2 className={styles.cardelement}>{props.edu4}</h2>
        </div>
    )
}

export default Utdanning