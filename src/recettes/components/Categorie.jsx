import { useQuery } from "@tanstack/react-query";
import { useParams } from 'react-router-dom'
import CategoriesService from "../services/CategoriesService";
import { Link } from 'react-router-dom';
import { Container , Row, Col } from "react-bootstrap"; 

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

        
                    
                
        <Container fluid>

            <Link to="/">Accueil</Link>

            <Col className="text-center">    
                <h1 classname="my-4">{params.strCategory}</h1>
            </Col>
            <Row>
                {data && data.map((meals) => ( 
                    <Col className="text-center" md={4} key={meals.idMeal}>  
                        
                        
                        <Link to={`/categorie/meals/${meals.idMeal}`} >   
                            <h4>{meals.strMeal}</h4>
                        
                                <img src={meals.strMealThumb} className="img-thumbnail mb-3" style={{ width: '400px', height: '400px' }} alt={meals.strMealThumb}/>
                            
                        </Link>
                        
                    </Col>
                ))}
            </Row>  
        </Container>
       
    )
   
}

export default Categorie