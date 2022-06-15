import { ButtonRecipe, Images } from "./RecipeItem.styles";
import {
	RecipeFeatureText,
	RecipeFeatureTitle,
} from "./../../pages/Home/Homestyles";
import { RecipeFeatureContent } from "./RecipeList.styles";
import { useContext } from "react";
import FavoritesContext from "../../store/favoritesContext";

const RecipeItem = (props) => {
	const favoritesCtx = useContext(FavoritesContext);
	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
	const toggleFavoriteStatusHandler = (e) => {
		e.preventDefault();
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(props.id);
		} else {
			favoritesCtx.addFavorite({
				id: props.id,
				title: props.title,
				description: props.description,
				images: props.images,
				address: props.address,
				uuid: props.uuid,
			});
		}
	};
	return (
		<div id="recipe">
			<RecipeFeatureContent>
				<RecipeFeatureTitle>{props.title}</RecipeFeatureTitle>
				<RecipeFeatureText>{props.description}</RecipeFeatureText>
				<Images src={props.images?.full || props.images} alt={props.title} />
				<ButtonRecipe
					onMouseDown={(event) => event.stopPropagation()}
					onClick={toggleFavoriteStatusHandler}
				>
					{itemIsFavorite ? "Remove from favorites" : "To Favorites"}
				</ButtonRecipe>
			</RecipeFeatureContent>
		</div>
	);
};

export default RecipeItem;
