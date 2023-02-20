import BottomHalf from "./components/BottomHalf"
import TopHalf from "./components/TopHalf"
import styles from './components/styles.module.css'

function App() {

  return (
    <div className={styles.app}>
      <TopHalf />
      <br/>
      <BottomHalf />
    </div>
  )
}

export default App
