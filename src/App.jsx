import Tasks from './components/Tasks'
import AppNavbar from './components/AppNavbar'
import React, {useState} from 'react'
import './App.css'

function App() {
  
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <AppNavbar expanded={expanded} setExpanded={setExpanded} />
      <div style={{ paddingTop: expanded ? '121px' : '0', transition: 'padding-top 0.24s', transitionTimingFunction: 'ease'}}>   
        <div className='welcomeMsg'>Welcome!</div>
        <Tasks />
        <div className='buttons'>
          <button className="w-100 btn btn-outline-secondary btn-sm" type="button">Back</button>
          <button className="w-100 btn btn-outline-primary btn-sm" type="button">Add</button>
          <button className="w-100 btn btn-outline-danger btn-sm" type="button">Dismiss</button>
        </div>
      </div>
    </div>
  )
}

export default App
