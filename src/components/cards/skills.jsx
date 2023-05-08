import { useScramble } from 'use-scramble';
import styles from '../styles/styles.module.css'

function Skills(){

    const { ref, replay } = useScramble({ text: 'JavaScript',
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 8,
    seed: 3, });

    return(
      <div className={styles.ws}>
          <h2 className={styles.myskills}>My Skills</h2>
          <h2 className={`${styles.floatingtext} + ${styles.pos1}`} ref={ref} onMouseEnter={replay} />
          <h2 className={`${styles.floatingtext} + ${styles.pos2}`}>React</h2>
          <h2 className={`${styles.floatingtext} + ${styles.pos3}`}>Css</h2>
          <h2 className={`${styles.floatingtext} + ${styles.pos4}`}>Html</h2>
          <h2 className={`${styles.floatingtext} + ${styles.pos5}`}>C#</h2>
          <h2 className={`${styles.floatingtext} + ${styles.pos6}`}>SAP</h2>
    </div>
    )
}

export default Skills