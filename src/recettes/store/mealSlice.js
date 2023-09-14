import { createSlice } from '@reduxjs/toolkit'
import reducers from './mealReducers';

export const mealsSlice = createSlice({
	name: 'meals',
	initialState: {
		meals: []
	},
	reducers: reducers,
});

export const { updateMeals } = mealsSlice.actions;

export default mealsSlice.reducer;
