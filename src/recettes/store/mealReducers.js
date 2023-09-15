const reducers = {
	updateMeals: (state, action) => {
		if (action.payload && action.payload.results) {
			state.meal = action.payload.results;
		}

		return state;
	},
}

export default reducers;
