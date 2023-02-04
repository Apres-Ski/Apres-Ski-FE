import { API_ROUTES } from "./constants"

export const fetchRestaurants = async () => {
 try {
  const response = await fetch(API_ROUTES.GET_RESTAURANTS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
  })

  return await response.json()

 } catch (err) {
  console.error
 }
}

