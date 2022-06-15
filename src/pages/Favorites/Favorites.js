import { useContext } from "react";
import RecipeList from "../../components/Recipes/RecipeList";
import FavoritesContext from "../../store/favoritesContext";
import { Paragraph, Text } from "./FavoritesStyles";

function FavoritesPage() {
	const favoritesCtx = useContext(FavoritesContext);

	let content;

	if (favoritesCtx.totalFavorites === 0) {
		content = <Paragraph>You got no favorites yet. Start adding some</Paragraph>;
	} else {
		content = <RecipeList recipes={favoritesCtx.favorites} />;
	}

	return (
		<section>
			<Text>My Favorites</Text>
			{content}
		</section>
	);
}

export default FavoritesPage;
