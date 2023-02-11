import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../app/store"
import { selectRestaurant } from './restaurantsSlice'

export const DetailModal = () => {
  const { activeRestaurant } = useSelector((state: RootState) => state.restaurants)

  const showHours = Object.entries(activeRestaurant.hours).map((day) => {
    return `${day[0][0].toUpperCase()}: ${day[1]}`
  })

  function showHappyHours() {
    Object.entries(activeRestaurant.happyHours).map((day) => {
      if(day[1]) {
        return `${day[0][0].toUpperCase()}: ${day[1]}`
    }})
  }

  const showSpecial = () => {
    Object.entries(activeRestaurant.happyHours).find((day) => {
      return day[0] === 'special'
    })!
  }

  function hasBooze () {
    if(activeRestaurant.alcoholic) {
      return 'Yes'
    } else {
      return 'No'
    }
  }

  const displayHappyHours = () => {
    if(!activeRestaurant.happyHour) {
      return 'No Specials Available'
    } else {
      return (
        <div>Happy Hours: {showSpecial[1]}
          <p>{showHappyHours[0]}</p>
          <p>{showHappyHours[1]}</p>
          <p>{showHappyHours[2]}</p>
          <p>{showHappyHours[3]}</p>
          <p>{showHappyHours[4]}</p>
          <p>{showHappyHours[5]}</p>
          <p>{showHappyHours[6]}</p>
        </div>
      )
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
        {displayHappyHours()}
        {/* <div>Happy Hours: {showSpecial[1]}
          <p>{showHappyHours[0]}</p>
          <p>{showHappyHours[1]}</p>
          <p>{showHappyHours[2]}</p>
          <p>{showHappyHours[3]}</p>
          <p>{showHappyHours[4]}</p>
          <p>{showHappyHours[5]}</p>
          <p>{showHappyHours[6]}</p>
        </div> */}
      </div>
      <p>Vibes: {activeRestaurant.vibes}</p>
    </div>
  )
}