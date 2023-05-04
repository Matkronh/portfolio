import styles from '../styles/styles.module.css'
import { useScramble } from 'use-scramble';
import Dropdown from '../parts/Dropdown'

function Skills(){

    const { ref, replay } = useScramble({ text: 'JavaScript',
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 8,
    seed: 3, });

    return(
        <div /* className={styles.card} */>
            <Dropdown title="My Skills">
            <h2 className={styles.cardelement} ref={ref} onMouseOver={replay}/>
            <h2 className={styles.cardelement}>React</h2>
            <h2 className={styles.cardelement}>CSS</h2>
            <h2 className={styles.cardelement}>HTML</h2>
            <h2 className={styles.cardelement}>C#</h2>
            <h2 className={styles.cardelement}>SAP</h2>
            <h2 className={styles.cardelement}>Førerkort Klasse B</h2>
            </Dropdown>
        </div>
    )
}

export default Skills