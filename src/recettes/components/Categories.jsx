import { useQuery } from "@tanstack/react-query";
import CategoriesService from "../services/CategoriesService";
import { Link } from 'react-router-dom';
import { Container , Row, Col } from "react-bootstrap";

const categoriesService = new CategoriesService();

const Categories = () => {
    const { data, isLoading, isError} = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoriesService.getAllCategoriesRecipe(),
    });


    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <Container fluid>
            <Col className="text-center">
                <h1 className="my-4">Recipe Categories</h1>
            </Col>
            <Row>
                {data && data.map((categorie) => (      
                // .strCategory  vient de l'api
                <Col md={4}>
                    <Link to={`/categorie/${categorie.strCategory}`} key={categorie.strCategory}>   
                        <h2>{categorie.strCategory}</h2>
                    </Link>
                </Col>   
                    
                ))}
            </Row>    
           
        </Container>
    )
}

export default Categories