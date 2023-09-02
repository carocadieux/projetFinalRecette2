import { config } from '../../config';

class MealsService {
    baseUrl = config.baseUrl;
    endpoint = 'filter.php'

   async getMealsRecipe(category) {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}?c=${category}`);
    console.log(response);
		if (!response.ok) throw new Error();
		const data = await response.json();
    
		return data.meals;
	}
  
}

export default MealsService;