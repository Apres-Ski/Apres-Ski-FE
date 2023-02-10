import '../App.css'
import { Landing } from '../components/Landing'
import { DemoUsers } from '../features/users/DemoUsers'
import { Main } from '../features/restaurants/Dashboard'
import { Error } from '../components/Error'
import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Apres Ski</h1>
        <Routes>
          <Route path='/' element={(<Landing />)} />
          <Route path='/demo' element={(<DemoUsers />)} />
          <Route path='/dashboard' element={(<Main />)} />
          <Route path='/*' element={(<Error message='404 Page Not Found' />)} />
        </Routes>
    </div>
  )
}

export default App
