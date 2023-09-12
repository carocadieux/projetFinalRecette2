import { createSlice } from "@reduxjs/toolkit";
import reducers from "./favoritesReducers";


export const favoritesSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: [],

    },
    reducers: reducers,
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;