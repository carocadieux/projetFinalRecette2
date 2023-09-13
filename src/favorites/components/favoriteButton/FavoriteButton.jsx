import { useDispatch, useSelector} from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favoritesSlices";
import { favoritesSelector } from "../../store/favoritesSelectors";


const FavoriteButton = ({ meal }) => {
    const dispatch = useDispatch();

    const favorites = useSelector(favoritesSelector);
    const isFavorite = favorites.filter(favorites => favorites.idMeal === meal.idMeal).length > 0;
console.log(meal);
    const onClick = () => {
      if (isFavorite) {
        return dispatch(removeFavorite(meal));
      } else {
        return dispatch(addFavorite(meal));
      }
      
    };
    return(
        <button type="button" onClick={onClick}>
            {isFavorite ? (
                <p>Ajoutez aux favoris</p>
            ) : (
                <p>Enlevez des favoris</p>
            )}
    </button>
    );
};

export default FavoriteButton;