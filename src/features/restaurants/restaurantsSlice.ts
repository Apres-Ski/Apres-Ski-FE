import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  CleanedHappyHours,
  CleanedHours,
  CleanedRestaurantsState,
} from '../../utilities/interfaces'
import { fetchRestaurants } from '../../utilities/APICalls'
import { cleanList } from '../../utilities/utilities'

export interface RestaurantsState {
  restaurants: CleanedRestaurantsState[]
  activeRestaurant: CleanedRestaurantsState
  filteredRestaurants: CleanedRestaurantsState[]
  mapClickedRestaurant: string | null
  status: string
  error: string | null
}

const initialState: RestaurantsState = {
  restaurants: [] as CleanedRestaurantsState[],
  filteredRestaurants: [] as CleanedRestaurantsState[],
  mapClickedRestaurant: null,
  status: 'idle',
  error: null,
  activeRestaurant: {
    id: '',
    name: '',
    address: '',
    foodType: '',
    cost: '',
    vibes: {},
    coverImg: '',
    alt: '',
    location: {
      lat: '',
      long: '',
    },
    alcoholic: false,
    happyHour: false,
    hours: {} as CleanedHours,
    happyHours: {} as CleanedHappyHours,
    engagements: [],
    avgRating: 0,
    ratingDist: [],
    photo: []
  },
}

export const getRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
    const response = await fetchRestaurants()
    const restaurantList = cleanList(response.data)
    return restaurantList
  }
)

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    filterRestaurants(state, action) {
      state.filteredRestaurants = action.payload
    },
    selectRestaurant(state, action) {
      const restaurant = action.payload
      state.activeRestaurant = restaurant
    },
    resetRestaurant(state, action) {
      ;(state.activeRestaurant.id = ''),
        (state.activeRestaurant.name = ''),
        (state.activeRestaurant.address = ''),
        (state.activeRestaurant.foodType = ''),
        (state.activeRestaurant.cost = ''),
        (state.activeRestaurant.vibes = {}),
        (state.activeRestaurant.coverImg = ''),
        (state.activeRestaurant.alt = ''),
        (state.activeRestaurant.location = {
          lat: '',
          long: '',
        }),
        (state.activeRestaurant.alcoholic = false),
        (state.activeRestaurant.happyHour = false),
        (state.activeRestaurant.hours = {} as CleanedHours),
        (state.activeRestaurant.happyHours = {} as CleanedHappyHours),
        (state.activeRestaurant.engagements = []),
        (state.activeRestaurant.avgRating = 0),
        (state.activeRestaurant.ratingDist = [])
    },
    setMapClickedRestaurant(state, action) {
      state.mapClickedRestaurant = action.payload
    },
    setDistance(state, action) {
      const rest = state.restaurants.find(restaurant => restaurant.id === action.payload.id)
      rest ? rest.userDistance = action.payload.distance : null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getRestaurants.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.restaurants = action.payload
        state.filteredRestaurants = action.payload
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message as any
      })
  },
})

export const { filterRestaurants, selectRestaurant, resetRestaurant, setMapClickedRestaurant, setDistance } =
  restaurantsSlice.actions

export default restaurantsSlice.reducer
