import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../app/store"
import { selectRestaurant } from './restaurantsSlice'

export const DetailModal = () => {
  const { activeRestaurant } = useSelector((state: RootState) => state.restaurants)

  const showHours = Object.entries(activeRestaurant.hours).map((day) => {
      return `${day[0][0].toUpperCase()}: ${day[1]}`
    })

  return (
    <div>
      <img src={activeRestaurant.coverImg} alt={activeRestaurant.alt} className="img-fluid"/>
      <p>{activeRestaurant.name}</p>
      <p>{activeRestaurant.address}</p>
      <p>Food Type: {activeRestaurant.name}</p>
      <p>Distance: Logic Placeholder</p>
      <p>Cost: {activeRestaurant.cost}</p>
      <p>Alcohol: {activeRestaurant.name}</p>
      <div>Hours: 
        <p>{showHours[0]}</p>
        <p>{showHours[1]}</p>
        <p>{showHours[2]}</p>
        <p>{showHours[3]}</p>
        <p>{showHours[4]}</p>
        <p>{showHours[5]}</p>
        <p>{showHours[6]}</p>
      </div>
      <p>Happy Hours: {activeRestaurant.happyHours}</p>
      <p>Vibes: {activeRestaurant.vibes}</p>
    </div>
  )
}