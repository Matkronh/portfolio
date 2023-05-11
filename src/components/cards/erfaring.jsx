import styles from '../styles/styles.module.css'

function Erfaring(props){
    return(
        <div className={styles.card}>
            <h1 id="sec" className={styles.topcardelement}>{props.experience}</h1>
            <h2 className={styles.cardelement}>{props.exp1}</h2>
            <h2 className={styles.cardelement}>{props.exp2}</h2>
            <h2 className={styles.cardelement}>{props.exp3}</h2>
        </div>
    )
}

export default Erfaring