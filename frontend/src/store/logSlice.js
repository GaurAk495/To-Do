import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
    name: 'logIn',
    initialState: {
        status: false
    },
    reducers: {
        setLogInStatus: (state, action) => {
            state.status = action.payload
        }
    }
})

export const { setLogInStatus } = logSlice.actions
export default logSlice.reducer