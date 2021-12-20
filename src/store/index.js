// import {configureStore} from '@reduxjs/toolkit'
// import studentReducer from "./slices/userSlice"

// export const store = configureStore({
//     reducer:{
//         student:studentReducer
//     }
// })
import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './slices/userSlice'
export const store = configureStore({
  reducer: {
      student: studentReducer
  },
})