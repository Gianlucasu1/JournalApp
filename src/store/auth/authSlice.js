import { createSlice } from '@reduxjs/toolkit'
export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      status: 'Checking',
      uid: null,
      email: null,
      displayName: null,
      photoUrl: null,
      errorMessage: null
   },
   reducers: {
      login: (state, {payload}) => {
         state.status = 'Authenticated';
         state.email= payload.email;
         state.uid= payload.uid;
         state.displayName= payload.displayName;
         state.photoUrl= payload.photoUrl;
         state.errorMessage= null
      },
      logout: (state, {payload}) => {
         state.status = 'No authenticated';
         state.email= null;
         state.uid= null;
         state.displayName= null;
         state.photoUrl= null;
         state.errorMessage= payload?.errorMessage;
      },
      logoutInvalidPassword: (state) => {
         state.status = 'No authenticated';
         state.email= null;
         state.uid= null;
         state.displayName= null;
         state.photoUrl= null;
         state.errorMessage= "Email or password Invalid";
      },
      checkingCredentials: (state) => {
         state.status = 'checking';
      }
   }
});
export const { login, logout,logoutInvalidPassword, checkingCredentials } = authSlice.actions;