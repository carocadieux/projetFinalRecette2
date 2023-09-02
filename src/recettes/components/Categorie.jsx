import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom'
import CategoriesService from "../services/CategoriesService";
import Meals from './Meals';
//import { Link } from 'react-router-dom';

const categoriesService = new CategoriesService();

const Categorie = () => {
    const params = useParams();
    const { data, isLoading, isError} = useQuery({
        queryKey: ['categorie', params.name],
        queryFn: () => categoriesService.getCategorieRecipe(params.name),
    });


    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <div>
            
            {data &&  (      
              <div>
               <Meals category={data} />
              </div> 
            )}
        </div>
    )
}

export default Categorie