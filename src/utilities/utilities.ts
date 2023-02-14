import {
  CleanedRestaurantsState,
  CleanedUserState,
  Engagement,
  Restaurants,
  Users,
  Lifts,
  CleanedLiftsState
} from './interfaces'

export const cleanList = (
  restaurants: Restaurants[]
): CleanedRestaurantsState[] => {
  return restaurants.map((restaurant: Restaurants) => {
    const vibes = getVibes(restaurant.attributes.engagement)
    const cleanedHours = cleanHours(restaurant)
    const cleanedHappyHours = cleanHappyHours(restaurant)
    const avgRating = getAvgRating(restaurant.attributes.engagement)

    return {
      id: restaurant.id,
      name: restaurant.attributes.name,
      address: restaurant.attributes.address,
      foodType: restaurant.attributes['food_type'],
      cost: restaurant.attributes.cost,
      vibes: vibes,
      coverImg: restaurant.attributes['cover_img'],
      alt: restaurant.attributes['alt_text'],
      location: {
        lat: restaurant.attributes.lat,
        long: restaurant.attributes.lon,
      },
      alcoholic: restaurant.attributes['alcoholic_drinks'],
      happyHour: restaurant.attributes['has_happy_hour'],
      hours: cleanedHours,
      happyHours: cleanedHappyHours,
      engagements: restaurant.attributes.engagement,
      avgRating: avgRating,
    } as CleanedRestaurantsState
  })
}

const getAvgRating = (engagements: Engagement[]) => {
  let ratingCount = 0
  const totalRating = engagements.reduce(
    (acc: number, engagement: Engagement) => {
      if (engagement.rating) {
        acc += Number(engagement.rating)
        ratingCount++
      }
      return acc
    },
    0
  )
  return totalRating / ratingCount
}

const capitalizeWords = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const getVibes = (engagements: Engagement[]) => {
  return engagements.reduce((acc: string[], engagement: Engagement) => {
    if (!acc.includes(engagement.vibe)) {
      engagement.vibe[0].toUpperCase()
      acc.push(engagement.vibe)
    }
    return acc
  }, [])
}

const cleanHours = (restaurant: Restaurants) => {
  const cleanedHours = (({ id, restaurant, ...obj }) => obj)(
    restaurant.attributes.hour[0]
  )
  return cleanedHours
}

const cleanHappyHours = (restaurant: Restaurants) => {
  if (restaurant.attributes.happyhour[0]) {
    const cleanedHappyHours = (({ id, restaurant, ...obj }) => obj)(
      restaurant.attributes.happyhour[0]
    )
    return cleanedHappyHours
  }
}

export const cleanUsersData = (users: Users[]): CleanedUserState[] => {
  return users.map((user: Users) => {
    return {
      id: user.id,
      name: user.attributes.name,
      location: {
        lat: user.attributes.lat,
        long: user.attributes.lon,
      },
    } as CleanedUserState
  })
}

export const cleanLiftsData = (lifts: Lifts[]): CleanedLiftsState[] => {
  return lifts.map((lift: Lifts) => {
    return {
      id: lift.id,
      name: lift.attributes.name,
      location: {
        lat: lift.attributes.lat,
        long: lift.attributes.lon,
      }
    }
  })
}

export const getUserDistance = (
  userLat: number,
  userLong: number,
  restLat: number,
  restLong: number
): string => {
  let R = 6371 // Radius of the earth in km
  let dLat = deg2rad(restLat - userLat) // deg2rad below
  let dLon = deg2rad(restLong - userLong)
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(userLat)) *
      Math.cos(deg2rad(restLat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  let d = R * c // Distance in km
  let miles = d / 1.609
  return miles.toFixed(2)
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180)
}
