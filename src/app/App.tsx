import '../App.css'
import { Landing } from '../components/Landing'
import { DemoUsers } from '../features/users/DemoUsers'
import { Main } from '../features/restaurants/Dashboard'
import { Error } from '../components/Error'
import { Routes, Route, NavLink } from 'react-router-dom'
import { APP_ROUTES } from '../utilities/constants'

function App() {
  return (
    <div>
        <Routes>
          <Route path={APP_ROUTES.LANDING} element={(<Landing />)} />
          <Route path={APP_ROUTES.DEMO} element={(<DemoUsers />)} />
          <Route path={APP_ROUTES.DASH} element={(<Main />)} />
          <Route path='/*' element={(<Error />)} />
        </Routes>
    </div>
  )
}

export default App
