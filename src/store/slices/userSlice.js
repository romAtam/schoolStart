
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email:null,
 token:null,
id:null,
}

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
          setStudent(state,action){
        state.email = action.payload.email;
        state.token=action.payload.token;
        state.id=action.payload.id;

    },
    removeStudent(state){
        state.email = null
        state.token=null
        state.id=null

    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setStudent, removeStudent} = studentSlice.actions

export default studentSlice.reducer