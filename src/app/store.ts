import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import restaurantsReducer from '../features/restaurants/restaurantsSlice'
import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    restaurants: restaurantsReducer,
    filters: filtersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
