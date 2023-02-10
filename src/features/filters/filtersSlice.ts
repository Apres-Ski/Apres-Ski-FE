import { createSlice } from '@reduxjs/toolkit'

export interface Vibes {
  familyFriendly: boolean,
  casual: boolean,
  upscale: boolean,
  quickEasy: boolean,
  lively: boolean,
  fun: boolean,
  cozy: boolean
}

export interface FiltersState {
  vibes: Vibes
  hasAlcohol: boolean
  hasHappyHour: boolean
}

const initialState: FiltersState = {
  vibes: {
    familyFriendly: true,
    casual: false,
    upscale: false,
    quickEasy: false,
    lively: false,
    fun: false,
    cozy: false
  },
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