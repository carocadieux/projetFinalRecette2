import { useQuery } from "@tanstack/react-query";
import CategoriesService from "../services/CategoriesService";
import { Link } from 'react-router-dom';

const categoriesService = new CategoriesService();

const Categories = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoriesService.getAllCategoriesRecipe(),
    });


    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <div>
            {data && data.map((categorie) => (
               // .strCategory  vient de l'api
                    <Link to={`/categorie/${categorie.strCategory}`} key={categorie.strCategory}>   
                            <h1>{categorie.strCategory}</h1>
                    </Link>
                
            ))};
        </div>
    )
}

export default Categories