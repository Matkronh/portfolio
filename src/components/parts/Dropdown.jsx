import styles from '../styles/styles.module.css'
import { useState } from 'react'

function Dropdown (props){
    const [state, setState] = useState(false)
    const toggle = () => {setState(!state)}

    return(
        <div className={styles.card}>
            <h2 className={styles.cardelement} onClick={toggle}>{props.title}</h2>
            {state ? <div className={styles.popout}>{props.children}</div> : <div className={styles.popin}>{props.children}</div>}
        </div>
    )
}

export default Dropdown