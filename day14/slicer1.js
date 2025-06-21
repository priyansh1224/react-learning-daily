import { createSlice } from "@reduxjs/toolkit";

const reactslicer = createSlice({
    name: "slice1",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => { state.count = state.count + 1 },
        decrement: (state) => { state.count = state.count - 1 },
        reset: (state) => { state.count = 0 }
    }
})

export const { increment, decrement, reset } = reactslicer.actions
export default reactslicer.reducer;