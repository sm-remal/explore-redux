import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        id: 1,
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value ++
        },
        decrement: (state) => {
            state.value --
        },
        multiple: (state, action) => {
            state.value *= action.payload
        },

        divided : (state, action) => {
            state.value /= action.payload
        },
        
        reset: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { increment, decrement, multiple, divided, reset } = counterSlice.actions;
export default counterSlice.reducer