import { Map } from '../common/Map'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants } from './restaurantsSlice'
import { RestaurantList } from './RestaurantList'
import { Nav } from '../users/Nav'
import { Filter } from './Filter'

export const Main = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { status, error } = useSelector((state: RootState) => state.restaurants)
  const { users, activeUser } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getRestaurants())
    }
  }, [status, dispatch])

  let content

  if (status === 'loading') {
    content = <p>Loading...</p>
  } else if (status === 'succeeded') {
    content = (
      <div>
        <h1>MAIN COMPONENT</h1>
        <Nav />
        <Map />
        <RestaurantList />
        <Filter />
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

  return <section>{content}</section>
}
