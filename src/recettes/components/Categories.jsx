import { useQuery } from "@tanstack/react-query";
import CategoriesService from "../services/CategoriesService";

const categoriesService = new CategoriesService();

const Categories = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['categories'],
        queryfn: categoriesService.getAllCategoriesRecipe
    });


    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <Link to={`/categories/${categories.name}`} key={categories.name}>   
                <h1>{categories.name}</h1>
        </Link>
    )
}

export default Categories