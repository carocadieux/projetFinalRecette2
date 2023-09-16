import { useDispatch, useSelector} from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favoritesSlices";
import { favoritesSelector } from "../../store/favoritesSelectors";
import { Button } from "react-bootstrap";


const FavoriteButton = ({ meals }) => {
    const dispatch = useDispatch();

    const favorites = useSelector(favoritesSelector);
    const isFavorite = favorites.filter(favorite => favorite.idMeal === meals.idMeal).length > 0;
//console.log(meal);
    const onClick = () => {
      if (isFavorite) {
        return dispatch(removeFavorite(meals));
      } else {
        return dispatch(addFavorite(meals));
      }
      
    };
    return(
      <div className="d-flex justify-content-center">
        <Button className="text-center mt-2" style={{ display: 'flex', alignItems: 'center' }} type="button" onClick={onClick}>
            {isFavorite ? (
                <p>Enlevez des favoris</p>
            ) : (
                
                <p>Ajoutez aux favoris</p>
            )}
        </Button>
      </div>
    );
};

export default FavoriteButton;