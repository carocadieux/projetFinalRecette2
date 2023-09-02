import { useQuery } from "@tanstack/react-query";
import MealsService from "../services/MealsService";
import { Link } from 'react-router-dom';

const mealsService = new MealsService();

const Meals = ({category}) => {
    const { data, isLoading, isError} = useQuery({
        queryKey: ['meals', category],
        queryFn: () => mealsService.getMealsRecipe(category),
       
    });
    
    //console.log("data:", data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    if (!data) return <div>No data available.</div>;

    return (
        <div>
            {data && data.meals.map((meal) => (      
               
                <Link to={`/categorie/:name/${meal.strMeal}`} key={meal.idMeal}>   
                    <h2></h2>
                    <p>{meal.strMealThumb}</p>
                </Link>
            ))}  
        </div>
    )
}

export default Meals;