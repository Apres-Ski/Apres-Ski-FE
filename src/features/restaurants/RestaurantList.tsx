import { RestaurantCard } from './RestaurantCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { ReactElement, useEffect, useState } from 'react'

export const RestaurantList = () => {
  const { restaurants } = useSelector((state: RootState) => state.restaurants)
  const [renderedRestaurants, setRenderedRestaurants] = useState<ReactElement[]>()

  useEffect(() => {
    let filteredRestaurants = restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />) //naming variable filteredRestaurants for now because I assume later we will do filtering here and maybe change the dependancy to the store filters
    setRenderedRestaurants(filteredRestaurants)
  }, [restaurants])

  return <div>{renderedRestaurants}</div>
}
