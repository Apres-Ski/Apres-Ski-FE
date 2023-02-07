import { CleanedRestaurantsState } from '../../app/store/interfaces'

export const RestaurantCard = ({ restaurant }: {restaurant: CleanedRestaurantsState}) => {

  console.log(restaurant)
  return (
    <div>
      <p>{restaurant.name}</p>
      <p>Vibe: {restaurant.vibe}</p>
      <p>Distance: .25m</p>
      <img style={{ width: 350 }} src={restaurant.coverImg} />
      <p>PLACEHOLDER FOR VIBE BADGES</p>
      <button>Show Details</button>
    </div>
  )
}