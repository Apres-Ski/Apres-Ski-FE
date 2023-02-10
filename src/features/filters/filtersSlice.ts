import { createSlice } from '@reduxjs/toolkit'

export interface FiltersState {
  vibes: string[]
  hasAlcohol: boolean
  hasHappyHour: boolean
}

const initialState: FiltersState = {
  vibes: [] as string[],
  hasAlcohol: false,
  hasHappyHour: false,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleHasAlcohol(state, action) {
      state.hasAlcohol = !state.hasAlcohol
    },
    toggleHasHappyHour(state, action) {
      state.hasHappyHour = !state.hasHappyHour
    }
  }
})

export const { toggleHasAlcohol, toggleHasHappyHour } = filtersSlice.actions

export default filtersSlice.reducer