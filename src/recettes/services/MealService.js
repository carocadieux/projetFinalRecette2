import { config } from '../../config';

class MealService {
    baseUrl = config.baseUrl;
    endpoint = 'lookup.php'

   async getMealRecipe(idMeal) {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}?i=${idMeal}`);
		console.log(response);
		if (!response.ok) throw new Error();
		const data = await response.json();
    
		return data.meals;
	}

}

export default MealService;