import { useQuery } from "@tanstack/react-query";
import MealService from "../services/MealService";
import { useParams } from "react-router-dom";

const mealService = new MealService();

const Meal = () => {
    const params = useParams();
    const { data, isLoading, isError} = useQuery({
        queryKey: ['meal', params.idMeal],
        queryFn: () => mealService.getMealRecipe(params.idMeal),
       
    });
    
    

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    if (!data) return <div>No data available.</div>;
    
    return (
                <div>
                    {data.map((meal) => (
                        <div key={meal.idMeal}>
                            <h1>{meal.strCategory}</h1>
                            <h2>{meal.strMeal}</h2>
                            <img src={meal.strMealThumb} alt={meal.strMealThumb}/>
                            <p>{meal.strInstructions}</p>
                            <p>{meal.strIngredient1}{meal.strMeasure1}</p>
                        </div>
                    ))}
                </div>
           )
}

export default Meal;