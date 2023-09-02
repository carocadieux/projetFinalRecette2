import { useQuery } from "@tanstack/react-query";
import CategoriesService from "../services/CategoriesService";
import { Link } from 'react-router-dom';

const categoriesService = new CategoriesService();

const Categories = () => {
    const { data, isLoading, isError} = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoriesService.getAllCategoriesRecipe(),
    });
console.log(data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <div>
            <h1>Recipe Categories</h1>
            {data && data.map((categorie) => (      
               // .strCategory  vient de l'api
                <Link to={`/categorie/${categorie.strCategory}`} key={categorie.strCategory}>   
                    <h2>{categorie.strCategory}</h2>
                </Link>
                
            ))}
        </div>
    )
}

export default Categories