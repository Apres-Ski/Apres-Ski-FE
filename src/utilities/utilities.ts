import { CleanedHappyHours, CleanedHours, CleanedRestaurantsState, Hours, RestaurantsState } from '../app/interfaces'

export const cleanList = (restaurants: RestaurantsState[]): CleanedRestaurantsState[] => {
  return restaurants.map((restaurant: RestaurantsState) => {
    const cleanedHours = cleanHours(restaurant)
    const cleanedHappyHours = cleanHappyHours(restaurant)

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
        long: restaurant.attributes.long,
      },
      alcoholic: restaurant.attributes['alcholic_drinks'], // fix spelling
      happyHour: restaurant.attributes['happy_hour'],
      hours: cleanedHours,
      happyHours: cleanedHappyHours,
    } as CleanedRestaurantsState
  })
}

const cleanHours = (restaurant: RestaurantsState) => {
  const hoursRelationship = restaurant.relationships.find((r) => {
    return r.hours
  })

  return hoursRelationship?.hours.map((hour) => {
    return {
      id: hour.id,
      weekday: hour.week_day,
      hours: hour.hours,
    } as CleanedHours
  })
}

const cleanHappyHours = (restaurant: RestaurantsState) => {
  const happyHoursRelationship = restaurant.relationships.find((r) => {
    return r.happy_hours
  })

  return happyHoursRelationship?.happy_hours?.map((happyHour) => {
    return {
      id: happyHour.id,
      weekday: happyHour.week_day,
      hours: happyHour.hours,
      specials: happyHour.specals,
    } as CleanedHappyHours
  })
}
