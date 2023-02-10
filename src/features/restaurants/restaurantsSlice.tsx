import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CleanedRestaurantsState } from '../../utilities/interfaces'
import { fetchRestaurants } from '../../utilities/APICalls'
import { cleanList } from '../../utilities/utilities'

export interface ListState {
  restaurants: CleanedRestaurantsState[]
  activeRestaurant: CleanedRestaurantsState
  status: string
  error: string | null
}

const initialState = {
  restaurants: [] as CleanedRestaurantsState[],
  status: 'idle',
  error: null,
  activeRestaurant: {
    id: null,
    name: '',
    address: '',
    foodType: '',
    cost: '',
    vibes: '',
    coverImg: '',
    alt: '',
    location: {
      lat: '',
      long: ''
    },
    alcoholic: false,
    happyHour: false,
    hours: [],
    happyHours: [],
    engagements: [],
    avgRating: null
  }
}

export const getRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async () => {
  const response = await fetchRestaurants()
  const restaurantList = cleanList(response.data)
  return restaurantList
})

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRestaurants.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.restaurants = action.payload
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message as any
      })
  },
})

export default restaurantsSlice.reducer

export const selectRestaurantSlice = createSlice({
  name: 'activeRestaurant',
  initialState,
  reducers: {
    selectRestaurant(state, action) {
      const { id } = action.payload;
      (state.activeRestaurant.id)
    },
    resetRestaurant (state, action) {
      state.activeRestaurant.id = null
    }
  }
})

export const { selectRestaurant, resetRestaurant} = selectRestaurantSlice.actions
