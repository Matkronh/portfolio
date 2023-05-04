import styles from '../styles/styles.module.css'
import { useState } from 'react'

function Dropdown3 (props){
    const [state, setState] = useState(false)
    const toggle = () => {setState(!state)}

    return(
        <div className={styles.dropdowncard}>
            <h2 className={styles.dropdowncardelement} onClick={toggle}>{props.title}</h2>
            {state ? <div className={styles.popout3}>{props.children}</div> : <div className={styles.popin3}>{props.children}</div>}
        </div>
    )
}

export default Dropdown3