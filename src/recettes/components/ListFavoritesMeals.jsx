import { useSelector } from "react-redux";
import { favoritesSelector } from "../../favorites/store/favoritesSelectors";

const ListFavoritesMeals= () => {
  const favorites = useSelector(favoritesSelector);

  return (
    <div>
      <h1>My favorites meals</h1>
      {favorites.map((meals) => (
        <div key={meals}>{meals.strMeal}</div>
      ))}
    </div>
  );
};

export default ListFavoritesMeals;
