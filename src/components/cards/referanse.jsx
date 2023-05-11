import styles from '../styles/styles.module.css'

function Referanse(props){
    return(
        <div className={styles.card}>
            <h1 className={styles.topcardelement}>{props.reference}</h1>
            <h2 className={styles.cardelement}>{props.ref1}</h2>
            <h2 className={styles.cardelement}>{props.ref2}</h2>
            <h2 className={styles.cardelement}>{props.ref3}</h2>
            <h2 className={styles.cardelement}>{props.ref4}</h2>
        </div>
    )
}

export default Referanse