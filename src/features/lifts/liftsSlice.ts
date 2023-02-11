import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CleanedLiftsState } from '../../utilities/interfaces'
import { fetchLifts } from '../../utilities/APICalls'
import { cleanListData } from '../../utilities/utilities'

export interface LiftsState {
  lifts: CleanedLiftsState[]
  status: string
  error: string | null
}

const initialState: LiftsState = {
  lifts: [] as CleanedLiftsState[],
  status: 'idle',
  error: null,
}

export const getLifts = createAsyncThunk('restaurants/fetchLifts', async () => {
  const response = await fetchLifts()
  const lifts = cleanListData(response.data)
  return lifts
})

export const liftsSlice = createSlice({
  name: 'lifts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getLifts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getLifts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.lifts = action.payload
      })
      .addCase(getLifts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message as any
      })
  },
})

export default liftsSlice.reducer
