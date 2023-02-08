import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../app/store"
import { selectRestaurant } from './restaurantsSlice'

export const DetailModal = () => {
    const { restaurants, activeRestaurant } = useSelector((state: RootState) => state.activeRestaurant)

    const dispatch = useDispatch()

    const selectedRestaurant = restaurants.map(spot => (
      <div key={spot.id}>
              <button onClick={() => dispatch(selectRestaurant(spot))}>{spot.name}</button>
      </div>
    ))
  return (
    <div>
      <img src={activeRestaurant.coverImg} alt={activeRestaurant.alt} />
      <p>{activeRestaurant.name}</p>
      <p>{activeRestaurant.address}</p>
      <p>Food Type: {activeRestaurant.name}</p>
      <p>Distance: Logic Placeholder</p>
      <p>Cost: {activeRestaurant.cost}</p>
      <p>Alcohol: {activeRestaurant.name}</p>
      <p>Hours: {activeRestaurant.hours}</p>
      <p>Happy Hours: {activeRestaurant.happyHours}</p>
      <p>Vibe: {activeRestaurant.vibe}</p>
      <button>Collapse</button>
    </div>
  )
}