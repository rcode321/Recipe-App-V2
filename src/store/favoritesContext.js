import { createContext, useState } from "react";

const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorite: () => {},
	removeFavorite: () => {},
	itemIsFavorite: () => {},
});

export const FavoritesContextProvider = (props) => {
	const [userFavorites, setUserFavorites] = useState([]);

	const addFavoriteHandler = (favoriteRecipe) => {
		console.log(favoriteRecipe);
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.concat(favoriteRecipe);
		});
	};

	const removeFavoriteHandler = (recipeId) => {
		console.log(recipeId);
		setUserFavorites((prevUserFavorites) => {
			return prevUserFavorites.filter((recipe) => recipe.id !== recipeId);
		});
	};

	const itemIsFavoriteHandler = (recipeId) => {
		return userFavorites.some((recipe) => recipe.id === recipeId);
	};

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	);
};

export default FavoritesContext;
