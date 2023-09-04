import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom'
import CategoriesService from "../services/CategoriesService";
import { Link } from 'react-router-dom';

const categoriesService = new CategoriesService();

const Categorie = () => {
    const params = useParams();
    
    const { data, isLoading, isError} = useQuery({
        queryKey: ['categorie', params.strCategory],
        queryFn: () => categoriesService.getCategorieRecipe(params.strCategory),
    });



    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    

    return (

        
                    
                
        <div>
              
                 
            <h1>{params.strCategory}</h1>

            {data && data.map((meals) => ( 
                <div key={meals.idMeal}>  
                    
                    
                    <Link to={`/categorie/meals/${meals.idMeal}`} >   
                        <h2>{meals.strMeal}</h2>
                        <img src={meals.strMealThumb} alt={meals.strMealThumb}/>
                    </Link>
                    
                </div>
            ))}  
        </div>
       
    )
   
}

export default Categorie