import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    id: string,
    name: string,
    location: {
        lat: string,
        long: string
    }
}

export interface InitialState {
    users: UserState[],
    activeUser: UserState
}

const initialState: InitialState = {
    users: [
        {
            id: nanoid(),
            name: 'Lily White',
            location: {
                lat: "39.47677681548263",
                long: "-106.04769958271032"
            }
        },
        {
            id: nanoid(),
            name: 'Jack Hill',
            location: {
                lat: "39.483421213997005",
                long: "-106.0668125397151"
            }
        },
        {
            id: nanoid(),
            name: 'Thomas Pena',
            location: {
                lat: "39.47864902244928",
                long: "-106.05251992066566"
            }
        }
    ],
    activeUser: {
        id: '',
        name: '',
        location: {
            lat: '',
            long: ''
        }
    }
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        selectUser (state, action) {
            const { id, name, location } = action.payload
            state.activeUser.id = id,
            state.activeUser.name = name,
            state.activeUser.location = location
        },
        resetUser (state, action) {
          state.activeUser.id = '',
          state.activeUser.name = '',
          state.activeUser.location = { long: '', lat: ''}
        }
    },
})

export const { selectUser, resetUser } = usersSlice.actions

export default usersSlice.reducer