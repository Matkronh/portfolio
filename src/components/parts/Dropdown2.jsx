import styles from '../styles/styles.module.css'
import { useState } from 'react'

function Dropdown2 (props){
    const [state, setState] = useState(false)
    const toggle = () => {setState(!state)}

    return(
        <div className={styles.dropdowncard}>
            <h2 className={styles.dropdowncardelement} onClick={toggle}>{props.title}</h2>
            {state ? <div className={styles.popout2}>{props.children}</div> : <div className={styles.popin2}>{props.children}</div>}
        </div>
    )
}

export default Dropdown2