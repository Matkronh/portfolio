import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import BottomHalf from "./components/BottomHalf"
import styles from './components/styles/styles.module.css'
import TopHalf from './components/TopHalf'
import Ommeg from './components/routes/ommeg'
import Utdanning from './components/routes/utdanning'
import Skills from './components/routes/skills'
import Portfolio from './components/routes/portfolio'
import Referanse from './components/routes/referanse'
import Erfaring from './components/routes/erfaring'


/* 
  BottomHalf = layout
  Tophalf = Landing Page
 */

function App() {

  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path='/' element={<BottomHalf />}>
            <Route index element={<TopHalf />}/>
            <Route path='ommeg' element={<Ommeg />}/>
            <Route path='utdanning' element={<Utdanning />}/>
            <Route path='skills' element={<Skills />}/>
            <Route path='portfolio' element={<Portfolio />}/>
            <Route path='referanse' element={<Referanse />}/>
            <Route path='erfaring' element={<Erfaring />}/>
            <Route path='*' element={<h1>404 Error</h1>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
