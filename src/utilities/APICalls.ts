import { API_ROUTES } from './constants'

export const fetchRestaurants = async () => {
  try {
    const response = await fetch(API_ROUTES.GET_RESTAURANTS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  } catch (error) {
    return error
  }
}

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_ROUTES.GET_USERS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  } catch (error) {
    return error
  }
}

export const fetchLifts = async () => {
  try {
    const response = await fetch(API_ROUTES.GET_LIFTS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return await response.json()
  } catch (error) {
    return error
  }
}
