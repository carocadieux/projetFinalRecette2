import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../favorites/store/favoritesSlices";

export default configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
});