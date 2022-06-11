import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import { Image } from "./RecipeItem.styles";

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
	Links,
} from "./RecipeList.styles";
const RecipeList = (props) => {
	return (
		<div>
			<RecipeContentContainer>
				{props.recipes.map((recipe) => (
					<RecipeCardWrapper key={recipe.id}>
						<Links to={`/recipes/${recipe.uuid}`}>
							<RecipeItem
								key={recipe.id}
								id={recipe.id}
								images={recipe.images}
								title={recipe.title}
								description={recipe.description}
								servings={recipe.servings}
								prepTime={recipe.prepTime}
								uuid={recipe.uuid}
							/>
						</Links>
					</RecipeCardWrapper>
				))}
			</RecipeContentContainer>
		</div>
	);
};

export default RecipeList;
