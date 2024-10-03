import Tasks from './components/Tasks'
import AppNavbar from './components/AppNavbar'
import './App.css'

function App() {
  return (
    <div>
      <AppNavbar />
      <div className='welcomeMsg'>Welcome!</div>
      <Tasks />
    </div>
  )
}

export default App
