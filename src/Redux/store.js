import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./feature/Moive/MovieSlice";
export const store = configureStore({
    reducer: movieReducer,
})