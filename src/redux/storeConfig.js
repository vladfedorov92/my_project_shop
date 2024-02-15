import {configureStore} from "@reduxjs/toolkit";
import auth from "./authSlice";
import code from "./codeSlice";

export const store = configureStore({
    reducer: {
        auth,
        code
    }
});