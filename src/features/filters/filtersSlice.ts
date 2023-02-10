import { createSlice } from '@reduxjs/toolkit'

export interface FiltersState {
  vibes: string[]
  alcoholic: boolean | null
  hasHappyHour: boolean | null
}

const initialState: FiltersState = {
  vibes: [] as string[],
  alcoholic: null,
  hasHappyHour: null,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
 
  }
})

export default filtersSlice.reducer