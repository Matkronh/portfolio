import { useScramble } from 'use-scramble';
import styles from '../styles/styles.module.css'

function Js(){

    const { ref, replay } = useScramble({ text: 'JavaScript',
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 8,
    seed: 3, });

    return(
        <h2 className={styles.cardelement} ref={ref} onMouseOver={replay}/>
    )
}

export default Js