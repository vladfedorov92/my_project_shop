import {createSlice} from "@reduxjs/toolkit";
import {AUTH_USER} from "../utils/constants";

export const authSlice=createSlice({
    name: "auth",
    initialState:{
        authUser: localStorage.getItem(AUTH_USER) || ""
    },
    reducers:{
        login:(state,action)=> {
            state.authUser = action.payload
        },
        logout: (state) => {state.authUser = ""}
    }
});
export const {login,logout} = authSlice.actions;
export default authSlice.reducer;