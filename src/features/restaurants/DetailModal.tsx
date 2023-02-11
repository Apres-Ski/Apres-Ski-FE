import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../app/store"
import { selectRestaurant } from './restaurantsSlice'

export const DetailModal = () => {
    const { activeRestaurant } = useSelector((state: RootState) => state.restaurants)

  return (
    <div>
      <img src={activeRestaurant.coverImg} alt={activeRestaurant.alt} />
      <button>X</button>
      <p>{activeRestaurant.name}</p>
      <p>{activeRestaurant.address}</p>
      <p>Food Type: {activeRestaurant.name}</p>
      <p>Distance: Logic Placeholder</p>
      <p>Cost: {activeRestaurant.cost}</p>
      <p>Alcohol: {activeRestaurant.name}</p>
      {/* <p>Hours: {activeRestaurant.hours}</p>
      <p>Happy Hours: {activeRestaurant.happyHours}</p> */}
      {/* <p>Vibes: {activeRestaurant.vibes}</p> */}
    </div>
  )
}