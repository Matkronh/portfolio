/* import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom' */
import BottomHalf from "./components/BottomHalf"
import styles from './components/styles/styles.module.css'
/* import Ommeg from './components/routes/ommeg'
import Utdanning from './components/routes/utdanning'
import Skills from './components/routes/skills'
import Portfoliox from './components/routes/portfolio'
import Referanse from './components/routes/referanse'
import Erfaring from './components/routes/erfaring'
import EmptySpace from './components/EmptySpace' */


/* 
  BottomHalf = layout
  Tophalf = Landing Page
 */

function App() {

  return (
    <div className={styles.app}>
      <BottomHalf/>
    </div>
  )
}

export default App
