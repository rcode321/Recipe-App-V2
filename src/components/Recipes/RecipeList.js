import RecipeItem from "./RecipeItem";

import {
	RecipeContentContainer,
	RecipeCardWrapper,
	Links,
} from "./RecipeList.styles";
const RecipeList = (props) => {
	return (
		<div>
			<RecipeContentContainer>
				{props.recipes.map((recipe) => (
					<RecipeCardWrapper key={recipe?.id}>
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
