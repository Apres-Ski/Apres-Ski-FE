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
    },
    toggleVibes(state, action) {
      if (state.vibes.includes(action.payload)) {
        const index = state.vibes.indexOf(action.payload)
        state.vibes.splice(index, 1)
      } else {
        state.vibes.push(action.payload)
      }
    },
  },
})

export const { toggleHasAlcohol, toggleHasHappyHour, toggleVibes } =
  filtersSlice.actions

export default filtersSlice.reducer
