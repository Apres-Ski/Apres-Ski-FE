import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../../features/users/usersSlice'
import restaurantsReducer from '../../features/restaurants/restaurantsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    restaurants: restaurantsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
