import { createSlice } from '@reduxjs/toolkit'
export const authSlice = createSlice({
   name: 'auth',
   initialState: {
        status: 'No state',
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
   },
   reducers: {
       login : ( state, action ) => {
            console.log(action)
       },
       logout : (state, payload) => {

       }, 
       checkingCredentials: (state)  => {
          state.status = 'checking'; 
       }
   }
});
export const { login,logout, checkingCredentials } = authSlice.actions;