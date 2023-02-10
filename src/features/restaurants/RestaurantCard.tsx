import { CleanedRestaurantsState } from '../../utilities/interfaces'
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import { selectRestaurant } from './restaurantsSlice'

export const RestaurantCard = ({ restaurant }: { restaurant: CleanedRestaurantsState }) => {

  const { restaurants, activeRestaurant } = useSelector((state: RootState) => state.restaurants)

  const dispatch = useDispatch<AppDispatch>()

  const selectedRestaurant = restaurants.find(spot => (
      <div key={spot.id}>
              <button onClick={() => dispatch(selectRestaurant(spot))}>{spot.name}</button>
      </div>
    ))

  return (
    <div>
      <p>{restaurant.name}</p>
      <p>Vibe: {restaurant.vibes}</p>
      <p>Distance: .25m</p>
      <img style={{ width: 350 }} src={restaurant.coverImg} />
      <p>PLACEHOLDER FOR VIBE BADGES</p>
      <button onClick={() => dispatch(selectRestaurant(restaurant))}>Show Details</button>
    </div>
  )
}
