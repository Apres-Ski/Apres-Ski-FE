import './App.css'
import UsersList from './features/users'
import { Landing } from './components/Landing'
import { Main } from './components/Main/Main'


function App() {

return (
  <div>
    <h1>Apres Ski</h1>
    <Landing />
    <h2>User List</h2>
    <UsersList />
    <Main />
  </div>
)
}

export default App
