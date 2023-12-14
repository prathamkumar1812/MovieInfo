import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { confi } from "../../../conf";
const initialState = {
    movies: [],
    page:1,
  
};

 export const getMoive=(url)=>
    {
       return  axios(url,{
         headers: {
             accept: 'application/json',
             Authorization: `Bearer ${confi.apiKey}`
           }
     })
     }



export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        fetchMovie: (state, action) => {
            state.movies = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
});
export const { fetchMovie,setPage } = movieSlice.actions;
export default movieSlice.reducer;
