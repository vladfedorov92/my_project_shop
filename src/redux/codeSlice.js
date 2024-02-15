import {createSlice} from "@reduxjs/toolkit";

const codeSlice = createSlice({
    name: "code",
    initialState: {
        code: "OK"
    },
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload;
        },
        resetCode: (state) => {
            state.code = "OK";
        }
    }
});

export const {setCode, resetCode} = codeSlice.actions;

export default codeSlice.reducer;