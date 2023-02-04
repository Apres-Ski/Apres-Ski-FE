import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersList from './features/users'

function App() {
  const dispatch = useDispatch<AppDispatch>()


  return (
    <div>
      <UsersList />
    </div>
  )
}

export default App
