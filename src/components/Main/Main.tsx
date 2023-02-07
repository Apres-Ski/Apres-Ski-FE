import { Map } from '../Map'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants } from '../../features/restaurants/restaurantsSlice'
import { RestaurantList } from '../RestaurantList/RestaurantList'
import { NavComp } from '../NavComp'

export const Main = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { status, error } = useSelector((state: RootState) => state.restaurants)

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
        <NavComp />
        <Map />
        <RestaurantList />
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
    <section>
      {content}
    </section>
  )
}