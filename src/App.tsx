import './App.css'
import UsersList from './features/users'
import { AppDispatch, RootState } from './app/store/store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants } from './features/restaurants/restaurantsSlice'
import { Map } from './components/Map'
import { Landing } from './components/Landing'
import { DemoUsers } from './components/DemoUsers'
import { NavComp } from './components/NavComp'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const { status, restaurants, error } = useSelector((state: RootState) => state.restaurants)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getRestaurants())
    }
  }, [status, dispatch])

  let content
  if (status === 'loading') {
    content = <p>Loading...</p>
  } else if (status === 'succeeded') {
    const renderedRestaurants = restaurants.map((restaurant) => (
      <div key={restaurant.id}>
        <p>{restaurant.name}</p>
        <img style={{ width: 350 }} src={restaurant.coverImg} />
      </div>
    ))
    content = (
      <div>
        <h1>Apres Ski</h1>
        <Landing />
        <DemoUsers />
        <NavComp />
        <Map />
        <h2>List of Restaurants</h2>
        {renderedRestaurants}
      </div>
    )
  } else if (status === 'failed') {
    content = (
      <div>
        <h2 style={{ color: 'red' }}>ERROR</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default App
