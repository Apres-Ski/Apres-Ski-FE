import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../../utilities/APICalls'
import { CleanedUserState } from '../../utilities/interfaces'
import { cleanUsersData } from '../../utilities/utilities'

export interface InitialState {
  users: CleanedUserState[]
  activeUser: CleanedUserState
  status: string
  error: string | null
}

const initialState: InitialState = {
  users: [] as CleanedUserState[],
  status: 'idle',
  error: null,
  activeUser: {
    id: null,
    name: '',
    location: {
      lat: '',
      long: '',
    },
  },
}

export const getUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchUsers()
  const userList = cleanUsersData(response.data)
  return userList.splice(0, 3)
})

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser(state, action) {
      const { id, name, location } = action.payload;
      (state.activeUser.id = id),
      (state.activeUser.name = name),
      (state.activeUser.location = location)
    },
    resetUser (state, action) {
      state.activeUser.id = null,
      state.activeUser.name = '',
      state.activeUser.location = { long: '', lat: ''}
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message as any
      })
  },
})

export const { selectUser, resetUser } = usersSlice.actions

export default usersSlice.reducer
