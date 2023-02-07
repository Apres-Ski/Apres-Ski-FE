import './App.css'
import UsersList from './features/users'
import { Landing } from './components/Landing'
import { DemoUsers } from './components/DemoUsers'
import { Main } from './components/Main/Main'

function App() {

return (
  <div>
    <h1>Apres Ski</h1>
    <Landing />
    <h2>User List</h2>
    <DemoUsers />
    <Main />
  </div>
)
}

export default App
