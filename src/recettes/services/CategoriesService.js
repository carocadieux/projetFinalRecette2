import { config } from '../../config';

class CategoriesService {
    baseUrl = config.baseUrl;
    endpoint = 'categories.php'
	fiterEnpoint = 'filter.php'

    async getAllCategoriesRecipe() {
		const response = await fetch(`${this.baseUrl}/${this.endpoint}`);
		if (!response.ok) throw new Error();
		const data = await response.json();
		return data.categories;
	}

	async getCategorieRecipe(strCategory) {
		const response = await fetch(`${this.baseUrl}/${this.fiterEnpoint}?c=${strCategory}`);
		if (!response.ok) throw new Error();
		const data = await response.json();
		return data.meals;
	}

}


export default CategoriesService;