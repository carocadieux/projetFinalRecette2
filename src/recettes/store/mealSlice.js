import { createSlice } from '@reduxjs/toolkit'
import reducers from './mealReducers';

export const mealsSlice = createSlice({
	name: 'meal',
	initialState: {
		meal: []
	},
	reducers: reducers,
});

export const { updateMeals } = mealsSlice.actions;

export default mealsSlice.reducer;
