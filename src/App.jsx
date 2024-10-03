import Tasks from './components/Tasks'
import AppNavbar from './components/AppNavbar'
import React, {useState} from 'react'
import './App.css'

function App() {
  
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <AppNavbar expanded={expanded} setExpanded={setExpanded} />
      <div style={{ paddingTop: expanded ? '120px' : '0', transition: 'padding-top 0.25s', transitionTimingFunction: 'ease'}}>   
        <div className='welcomeMsg'>Welcome!</div>
        <Tasks />
      </div>
    </div>
  )
}

export default App
