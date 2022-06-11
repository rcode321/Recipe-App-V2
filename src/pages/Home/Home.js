import { Works, Welcome, Recipes, Meals } from "../../components";
import RecipeList from "../../components/Recipes/RecipeList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
	RecipeContainer,
	RecipeWrapper,
	RecipeTitle,
	RecipeContentContainer,
	RecipeTabContainer,
	RecipeBtn,
	RecipeCardWrapper,
	RecipeFeature,
	RecipeFeatureContent,
	RecipeFeatureTitle,
	RecipeFeatureText,
	RecipeFeatureDetails,
	RecipeFeatureItem,
	RecipeItemTitle,
	RecipeItemContent,
	RecipeItemIcon,
	RecipeItemText,
	RecipeCardSection,
	RecipeSmallCards,
	RecipeCard,
	RecipeCardContent,
	RecipeCardHeading,
	RecipeCardDetails,
	RecipeCardItems,
	RecipeCardTitle,
	RecipeCardItem,
	RecipeCardIcon,
	RecipeCardText,
	RecipeImg,
	Img,
} from "./Homestyles";

function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);
	console.log(loadedMeetups);
	useEffect(() => {
		fetch("http://localhost:3001/recipes")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// console.log(data);

				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}
				setIsLoading(false);
				setLoadedMeetups(meetups);
			});
	}, []);
	return (
		<div>
			<Works />
			<Welcome />
			<Recipes />
			{/* <RecipeContentContainer>
				<RecipeCardWrapper>
					<RecipeFeature>
						<RecipeFeatureContent>
							<RecipeFeatureTitle>Title</RecipeFeatureTitle>
							<RecipeFeatureText>
								The hot honey kinda sounds like a hype name used before the 20s, (I
								used it back then). It’s a pefect coating for the salmon to enrinch
								it with sweetness and heat.
							</RecipeFeatureText>
							<RecipeList recipes={loadedMeetups} />
						</RecipeFeatureContent>
					</RecipeFeature>
				</RecipeCardWrapper>
			</RecipeContentContainer> */}
			<RecipeList recipes={loadedMeetups} />

			<Meals />
		</div>
	);
}

export default Home;
