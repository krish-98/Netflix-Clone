import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  login: false,
}

export const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {},
})

// export const {} = subscribeSlice.actions
export default subscribeSlice.reducer
