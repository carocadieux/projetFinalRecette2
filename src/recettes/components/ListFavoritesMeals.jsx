import { useSelector } from "react-redux";
import { favoritesSelector } from "../../favorites/store/favoritesSelectors";
import { Link } from "react-router-dom";
import FavoriteButton from "../../favorites/components/favoriteButton/FavoriteButton";

const ListFavoritesMeals= () => {
  const favorites = useSelector(favoritesSelector);
  



  return (
    <div>
      <h1>My favorites meals</h1>
      {favorites.map((meal) => (
        <Link to={"/categorie/meals/:idMeal"} key={meal.idMeal}>
          {meal.strMeal}
          <FavoriteButton meals={meal}/>
        </Link>
      ))}
    </div>
  );
};

export default ListFavoritesMeals;
