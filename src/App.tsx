import './App.css'
import { Landing } from './components/Landing'
import { DemoUsers } from './components/DemoUsers'
import { Main } from './features/restaurants/Main'
import { Error } from './components/Error'
import { Sorry } from './components/Sorry'

function App() {

return (
  <div>
    <h1>Apres Ski</h1>
    <Landing />
    <h2>User List</h2>
    <DemoUsers />
    <Main />
    <Error />
    <Sorry />
  </div>
)
}

export default App
