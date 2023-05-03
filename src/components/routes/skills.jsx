import styles from '../styles/styles.module.css'
import { useScramble } from 'use-scramble';

function Skills(){

    const { ref, replay } = useScramble({ text: 'JavaScript',
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 8,
    seed: 3, });

    return(
        <div className={styles.cardinverse}>
            <h1 className={styles.cardinverseelement}>Mine Skills</h1>
            <h2 className={styles.cardinverseelement} ref={ref} onMouseOver={replay}/>
            <h2 className={styles.cardinverseelement}>2. React</h2>
            <h2 className={styles.cardinverseelement}>3. CSS</h2>
            <h2 className={styles.cardinverseelement}>4. HTML</h2>
            <h2 className={styles.cardinverseelement}>5. C#</h2>
            <h2 className={styles.cardinverseelement}>6. SAP</h2>
            <h2 className={styles.cardinverseelement}>7. Førerkort Klasse B</h2>
        </div>
    )
}

export default Skills