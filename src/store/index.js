import { configureStore } from "@reduxjs/toolkit";
import starWarsReducer from "./starWarsSlice";
import photoReducer from "./photoSlice";


const store = configureStore({
    reducer:{
        starWars: starWarsReducer,
        photo: photoReducer
    }
})

export default store;