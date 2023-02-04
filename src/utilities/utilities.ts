import { RestaurantsState } from "../app/store/interfaces";

export const fullCleanedList = (restaurants: RestaurantsState[]) => {
  const cleanedList = restaurants.map((restaurant: RestaurantsState) => {
    return {
      id: restaurant.id,
      name: restaurant.attributes.name,
      address: restaurant.attributes.address,
      foodType: restaurant.attributes['food_type'],
      cost: restaurant.attributes.cost,
      vibe: restaurant.attributes.vibe,
      coverImg: restaurant.attributes['cover_img'],
      alt: restaurant.attributes['alt_text'],
      location: {
        lat: restaurant.attributes.lat,
        long: restaurant.attributes.long
      },
      alcoholic: restaurant.attributes['alcholic_drinks'], // fix spelling
      happyHour: restaurant.attributes['happy_hour'],
      hours: restaurant.relationships[0].hours,
      happyHours: restaurant.relationships[0]['happy_hours']
    }
  })
}