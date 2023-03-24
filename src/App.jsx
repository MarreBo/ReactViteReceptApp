import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout/>
    </div>
  )
}

export default App





