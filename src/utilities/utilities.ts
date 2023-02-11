import {
  CleanedRestaurantsState,
  CleanedUserState,
  Engagement,
  RestaurantsState,
  Users,
} from './interfaces'

export const cleanList = (
  restaurants: RestaurantsState[]
): CleanedRestaurantsState[] => {
  return restaurants.map((restaurant: RestaurantsState) => {
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
    {
      /* {JSON.stringify(showHappyHours[0])} */
    }
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
      acc.push(`${capitalizeWords(engagement.vibe)} `)
    }
    return acc
  }, [])
}

const cleanHours = (restaurant: RestaurantsState) => {
  const cleanedHours = (({ id, restaurant, ...obj }) => obj)(
    restaurant.attributes.hour[0]
  )
  return cleanedHours
}

const cleanHappyHours = (restaurant: RestaurantsState) => {
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
