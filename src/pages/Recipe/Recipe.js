import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Specials from "../../components/Specials/Specials";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";

function Recipe(props) {
	const { id } = useParams();
	const [loadedMeetups, setLoadedMeetups] = useState({ recipe: [], special: [] });
	const [specials, setSpecials] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const fetchRecipes = await axios(`http://localhost:3001/recipes/${id}`);
			const fetchSpecials = await axios(`http://localhost:3001/specials/`);
			setLoadedMeetups({ recipe: fetchRecipes.data, special: fetchSpecials.data });

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

	const direction = loadedMeetups?.recipe?.directions?.map((dir) => (
		<h1 key={dir.instructions}>
			<div>
				<li>{dir.instructions}</li>
			</div>
		</h1>
	));

	const style = {
		width: "100%",
		maxWidth: 360,
		bgcolor: "background.paper",
	};

	const ingredient = loadedMeetups?.recipe?.ingredients?.map((keys) => (
		// <ul>
		// 	<Typography variant="subtitle1">
		// 		<li>
		// 			<ListItem>{keys.name}</ListItem>
		// 		</li>
		// 		<li>
		// 			<ListItem>amount: {keys.amount}</ListItem>
		// 		</li>
		// 		<li>
		// 			<ListItem>measurement:{keys.measurement}</ListItem>
		// 		</li>
		// 	</Typography>
		// </ul>
		<div sx={style} component="nav">
			<div gutters>
				<div primary={keys.name} secondary="name" />
			</div>
			<div gutters divider>
				<div primary={keys.amount} secondary="amount" />
			</div>
			<div gutters>
				<div primary={keys.measurement} secondary="measurement" />
			</div>
		</div>
	));

	return (
		<div mt={2}>
			<div>
				<RecipeDetails
					servings={loadedMeetups.recipe?.servings}
					prepTime={loadedMeetups.recipe?.prepTime}
					cookTime={loadedMeetups.recipe?.cookTime}
					postDate={loadedMeetups.recipe?.postDate}
					editDate={loadedMeetups.recipe?.editDate}
					description={loadedMeetups.recipe.description}
					images={loadedMeetups.recipe.images?.full}
					title={loadedMeetups.recipe?.title}
					directions={direction}
					ingredients={ingredient}
					geo={specials?.geo}
				/>
			</div>
			<div>
				<Specials
					type={specials?.type}
					title={specials?.title}
					text={specials?.text}
					code={specials?.code}
					geo={specials?.geo}
				/>
			</div>
		</div>
	);
}

export default Recipe;
