import { configureStore } from "@reduxjs/toolkit"
import subscribeReducer from "../features/subscribeSlice"

const store = configureStore({
  reducer: {
    subscribe: subscribeReducer,
  },
})

export default store
