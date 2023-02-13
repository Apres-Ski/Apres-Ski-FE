import { RestaurantCard } from './RestaurantCard'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../app/store'
import { ReactElement, useEffect, useState } from 'react'
import { filterRestaurants } from '../restaurants/restaurantsSlice'

export const RestaurantList = () => {
  const { restaurants } = useSelector((state: RootState) => state.restaurants)
  const { filteredRestaurants } = useSelector(
    (state: RootState) => state.restaurants
  )
  const { vibes, hasAlcohol, hasHappyHour } = useSelector(
    (state: RootState) => state.filters
  )
  const [renderedRestaurants, setRenderedRestaurants] =
    useState<ReactElement[]>()

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(filterRestaurants(restaurants))

    if (hasAlcohol) {
      dispatch(filterRestaurants(restaurants.filter((restaurant) => restaurant.alcoholic)))
    }

    if (hasHappyHour) {
      dispatch(filterRestaurants(restaurants.filter((restaurant) => restaurant.happyHours)))
    }

    if (vibes.length > 0) {
      dispatch(filterRestaurants(restaurants.filter((restaurant) =>
        vibes.every((vibe) => restaurant.vibes.includes(vibe))))
      )
    }
  }, [restaurants, hasAlcohol, hasHappyHour, vibes])

  useEffect(() => {
    const restaurantCards = filteredRestaurants.map((restaurant) => (
      <RestaurantCard
        key={`restaurant ${restaurant.id}`}
        restaurant={restaurant}
      />
    ))
    setRenderedRestaurants(restaurantCards)
  }, [filteredRestaurants])

  return <div>{renderedRestaurants}</div>
}
