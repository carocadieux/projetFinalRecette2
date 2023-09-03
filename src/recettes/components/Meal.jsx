import { useQuery } from "@tanstack/react-query";
import MealService from "../services/MealService";
import { Link } from 'react-router-dom';

const mealService = new MealService();

const Meal = () => {
    const { data, isLoading, isError} = useQuery({
        queryKey: ['meal'],
        queryFn: () => mealService.getMealRecipe(),
       
    });
    
    

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    if (!data) return <div>No data available.</div>;
    console.log(data);
    return (
        <div>
            {data && data.map((meal) => (      
               
                <Link to={`/categorie/:strCategory/meals${meal.idMeal}`} key={meal.idMeal}>
                    <h1>{meal.strCategory}</h1>   
                    <h2>{meal.strMeal}</h2>
                    <div>{meal.strMealThumb}</div>
                    
                </Link>
            ))}  
        </div>
    )
}

export default Meal;