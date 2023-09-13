import { useQuery } from "@tanstack/react-query";
import MealService from "../services/MealService";
import { useParams } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import FavoriteButton from "../../favorites/components/favoriteButton/FavoriteButton";

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

                    <Link to="/">Accueil</Link>

                    {data.map((meal) => (
                        <div key={meal.idMeal}>
                            <h1>{meal.strCategory}</h1>
                            <h2>{meal.strMeal}</h2>
                            <img src={meal.strMealThumb} className="img-thumbnail w-25 h-25" alt={meal.strMealThumb}/>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Instructions</Accordion.Header>
                                        <Accordion.Body>
                                            {meal.strInstructions}
                                        </Accordion.Body>
                                </Accordion.Item>
                                
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Ingredients</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {Array.from({ length: 20 }, (_, index) => {
                                                const ingredient = meal[`strIngredient${index + 1}`];
                                                const measure = meal[`strMeasure${index + 1}`];
                                                if (ingredient && measure) {
                                                    return (
                                                    <li key={index}>
                                                        {`${ingredient}: ${measure}`}
                                                    </li>
                                                    );
                                                }
                                                return null;
                                                })}
                                            </ul>
                                        </Accordion.Body>
                                </Accordion.Item>    
                            </Accordion>
                            <FavoriteButton/>
                        </div>
                    ))}
                </div>
           )
}

export default Meal;