import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'

export const HappyHours = () => {
  const { activeRestaurant } = useSelector(
    (state: RootState) => state.restaurants
  )

  function showHappyHours() {
    return Object.entries(activeRestaurant.happyHours).map((day) => {
      if (day[1]) {
        return `${day[0][0].toUpperCase()}: ${day[1]}`
      }
    })!
  }

  function showSpecial() {
    return Object.entries(activeRestaurant.happyHours).find((item) => {
      return item[0] === 'special'
    })!
  }

  return (
    <div>
      Happy Hours: {showSpecial()[1]}
      <p>{showHappyHours()[0]}</p>
      <p>{showHappyHours()[1]}</p>
      <p>{showHappyHours()[2]}</p>
      <p>{showHappyHours()[3]}</p>
      <p>{showHappyHours()[4]}</p>
      <p>{showHappyHours()[5]}</p>
      <p>{showHappyHours()[6]}</p>
    </div>
  )
}
