import { createSlice } from "@reduxjs/toolkit"
import { fetchUsers } from "./usersAPI"

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    error: null,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isError = false;
            state.error = action.error.message
        })
    }
})

export default usersSlice.reducer