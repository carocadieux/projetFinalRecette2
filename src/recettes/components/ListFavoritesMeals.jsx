import { useSelector } from "react-redux";
import { favoritesSelector } from "../../favorites/store/favoritesSelectors";
import { Link } from "react-router-dom";
import FavoriteButton from "../../favorites/components/favoriteButton/FavoriteButton";
import { Col, Container, Row } from "react-bootstrap";

const ListFavoritesMeals= () => {
  const favorites = useSelector(favoritesSelector);
  



  return (
    <Container fluid>
      <Col className="text-center">
        <h1>My favorites meals</h1>
      </Col>

      <Row className="justify-content-space-around">
        {favorites.map((meal) => (
          <Col className="text-center">
            <Link to={`/categorie/meals/${meal.idMeal}`} key={meal.idMeal}>
              {meal.strMeal}
            </Link>
            <FavoriteButton meals={meal}/>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default ListFavoritesMeals;
