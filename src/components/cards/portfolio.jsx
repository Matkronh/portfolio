import styles from '../styles/styles.module.css'
import Dropdown from '../parts/Dropdown'
import Dropdown2 from '../parts/Dropdown2'
import Dropdown3 from '../parts/Dropdown3'

function Portfoliox(){
    return(
        <div className={styles.dropcard}>
            {/* <h1 className={styles.dropdowncard}>Mine Prosjekter</h1> */}
            <Dropdown title="Mine prosjekter" number/>
            <Dropdown title="Mine Github prosjekter">
                <h2 className={styles.dropdowncardelement2}>www.github.com/123</h2>
                <h2 className={styles.dropdowncardelement2}>www.github.com/123</h2>
                <h2 className={styles.dropdowncardelement2}>www.github.com/123</h2>
                <h2 className={styles.dropdowncardelement2}>www.github.com/123</h2>
            </Dropdown>
            <Dropdown2 title="Mine Figma prosjekter">
                <h2 className={styles.dropdowncardelement3}>www.github.com/123</h2>
                <h2 className={styles.dropdowncardelement3}>www.github.com/123</h2>
                <h2 className={styles.dropdowncardelement3}>www.github.com/123</h2>
                <h2 className={styles.dropdowncardelement3}>www.github.com/123</h2>
            </Dropdown2>
            <Dropdown3 title="Mine andre prosjekter">
                <h2 className={styles.dropdowncardelement4}>www.github.com/123</h2>
                <h2 className={styles.dropdowncardelement4}>www.github.com/123</h2>
                <h2 className={styles.dropdowncardelement4}>www.github.com/123</h2>
                <h2 className={styles.dropdowncardelement4}>www.github.com/123</h2>
            </Dropdown3>
        </div>
    )
}

export default Portfoliox