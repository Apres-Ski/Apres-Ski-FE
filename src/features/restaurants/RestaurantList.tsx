import { RestaurantCard } from './RestaurantCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { ReactElement, useEffect, useState } from 'react'
import { CleanedRestaurantsState } from '../../utilities/interfaces'
import { filter } from 'cypress/types/bluebird'

export const RestaurantList = () => {
  const { restaurants } = useSelector((state: RootState) => state.restaurants)
  const { vibes, hasAlcohol, hasHappyHour } = useSelector(
    (state: RootState) => state.filters
  )
  const [renderedRestaurants, setRenderedRestaurants] =
    useState<ReactElement[]>()

  useEffect(() => {
    let filteredRest = restaurants
    if (hasAlcohol) {
      filteredRest = filteredRest.filter((restaurant) => restaurant.alcoholic)
    }

    if (hasHappyHour) {
      filteredRest = filteredRest.filter((restaurant) => restaurant.happyHours)
    }

    if (vibes.length > 0) {
      filteredRest = filteredRest.filter((restaurant) =>
        vibes.every((vibe) => restaurant.vibes.includes(vibe))
      )
    }

    const restaurantCards = filteredRest.map((restaurant) => (
      <RestaurantCard
        key={`restaurant ${restaurant.id}`}
        restaurant={restaurant}
      />
    ))
    console.log(filteredRest)
    setRenderedRestaurants(restaurantCards)
  }, [restaurants, hasAlcohol, hasHappyHour, vibes])

  return <div>{renderedRestaurants}</div>
}
