import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import { RecipeStyles } from "./RecipeStyles";

function Recipe(props) {
	const { id } = useParams();
	const [loadRecipes, setRecipes] = useState({ recipe: [], special: [] });
	const [specials, setSpecials] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const fetchRecipes = await axios(`http://localhost:3001/recipes/${id}`);
			const fetchSpecials = await axios(`http://localhost:3001/specials/`);
			setRecipes({ recipe: fetchRecipes.data, special: fetchSpecials.data });

			let hasSpecial = false;
			fetchRecipes?.data?.ingredients.forEach((ingr) => {
				if (!hasSpecial) {
					fetchSpecials?.data?.forEach((e) => {
						if (e.ingredientId === ingr.uuid) {
							setSpecials({ ...e });
							hasSpecial = true;
						}
					});
				}
			});
			console.log(fetchRecipes, "fetchRecipes", fetchSpecials, "fetchSpecials");
			console.log(typeof fetchRecipes);
		};
		fetchData();
	}, [id]);

	const direction = loadRecipes?.recipe?.directions?.map((dir) => (
		<p key={dir.instructions}>
			<h2>{dir.instructions}</h2>
		</p>
	));

	const ingredient = loadRecipes?.recipe?.ingredients?.map((keys) => (
		<RecipeStyles>
			<p>{`Name : ${keys.name}`}</p>
			<p>{`Amount : ${keys.amount}`}</p>
			<p>{`Measurement : ${keys.measurement}`}</p>
		</RecipeStyles>
	));

	return (
		<div>
			<RecipeDetails
				servings={loadRecipes.recipe?.servings}
				prepTime={loadRecipes.recipe?.prepTime}
				cookTime={loadRecipes.recipe?.cookTime}
				postDate={loadRecipes.recipe?.postDate}
				editDate={loadRecipes.recipe?.editDate}
				description={loadRecipes.recipe.description}
				images={loadRecipes.recipe.images?.full}
				title={loadRecipes.recipe?.title}
				directions={direction}
				ingredients={ingredient}
				geo={specials?.geo}
				text={specials?.text}
				code={specials?.code}
				type={specials?.type}
				specialTitle={specials?.title}
			/>
		</div>
	);
}

export default Recipe;
