import { Works, Welcome, Recipes, Meals } from "../../components";
import RecipeList from "../../components/Recipes/RecipeList";
import { useState, useEffect } from "react";

function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadRecipes, setRecipes] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3001/recipes")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}
				setIsLoading(false);
				setRecipes(meetups);
			});
	}, []);
	return (
		<div>
			<Works />
			<Welcome />
			<Recipes />
			<RecipeList recipes={loadRecipes} />
			<Meals />
		</div>
	);
}
export default Home;
