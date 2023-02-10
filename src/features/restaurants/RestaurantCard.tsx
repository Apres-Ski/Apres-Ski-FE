import { CleanedRestaurantsState } from '../../utilities/interfaces'

export const RestaurantCard = ({ restaurant }: { restaurant: CleanedRestaurantsState }) => {
  const formattedVibes = restaurant.vibes.join(', ')

  return (
    <div>
      <p>{restaurant.name}</p>
      <p>Vibe: {formattedVibes}</p>
      <p>Distance: .25m</p>
      <img style={{ width: 350 }} src={restaurant.coverImg} />
      <p>PLACEHOLDER FOR VIBE BADGES</p>
      <button>Show Details</button>
    </div>
  )
}
