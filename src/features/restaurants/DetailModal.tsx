import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../app/store"
import { HappyHours } from "./HappyHours"

export const DetailModal = () => {
  const { activeRestaurant } = useSelector((state: RootState) => state.restaurants)

  const showHours = Object.entries(activeRestaurant.hours).map((day) => {
    return `${day[0][0].toUpperCase()}: ${day[1]}`
  })

  function hasBooze () {
    if(activeRestaurant.alcoholic) {
      return 'Yes'
    } else {
      return 'No'
    }
  }

  return (
    <div>
      <img src={activeRestaurant.coverImg} alt={activeRestaurant.alt} className="img-fluid"/>
      <p>{activeRestaurant.name}</p>
      <p>{activeRestaurant.address}</p>
      <p>Food Type: {activeRestaurant.foodType}</p>
      <p>Distance: Logic Placeholder</p>
      <p>Cost: {activeRestaurant.cost}</p>
      <p>Alcohol: {hasBooze()}</p>
      <div style={{ display: 'flex' , justifyContent: 'space-around'}}>
        <div>Hours: 
          <p>{showHours[0]}</p>
          <p>{showHours[1]}</p>
          <p>{showHours[2]}</p>
          <p>{showHours[3]}</p>
          <p>{showHours[4]}</p>
          <p>{showHours[5]}</p>
          <p>{showHours[6]}</p>
        </div>
        {activeRestaurant.happyHours ? <HappyHours /> : <p>No Specials Available</p>}
      </div>
      <p>Vibes: {activeRestaurant.vibes}</p>
    </div>
  )
}