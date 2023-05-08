import styles from '../styles/styles.module.css'

function Utdanning(){
    return(
        <div className={styles.card}>
                    <h1 className={styles.topcardelement}>Min Utdanning</h1>
                    <h2 className={styles.cardelement}>1. Sandsli VGS - Hotell- og resturantfag</h2>
                    <h2 className={styles.cardelement}>2. Krokeide VGS - IKT-Servicefag VG2</h2>
                    <h2 className={styles.cardelement}>3. LINK A2G Åsane - Påbygging til generell studiekompetanse VG3</h2>
                    <h2 className={styles.cardelement}>4. Kodehode AMO Kurs</h2>
        </div>
    )
}

export default Utdanning