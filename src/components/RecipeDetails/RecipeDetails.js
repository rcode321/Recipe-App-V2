import * as React from "react";
import { Images } from "../Recipes/RecipeItem.styles";

const RecipeDetails = ({
	directions,
	ingredients,
	title,
	servings,
	prepTime,
	cookTime,
	description,
	editDate,
	postDate,
	images,
}) => {
	return (
		<div>
			<div>
				<div m={4}>
					<h2 variant="h3"> {title}</h2>
					<h2 variant="subtitle1"> {description}</h2>
				</div>
				<Images src={images} alt={title} />

				<div>
					<div>
						<div> {cookTime}</div>
					</div>

					<div secondary={`${servings} persons`} />

					<div>{prepTime}</div>

					<div>{editDate}</div>
					<div>{postDate}</div>
				</div>
			</div>
			<h2 variant="h3" p={2}>
				Directions
			</h2>
			<div p={2}>
				<h2>{directions}</h2>
			</div>
			<h2 variant="h3" p={2}>
				Ingredients
			</h2>
			<div p={1}>
				<div>{ingredients}</div>
			</div>
		</div>
	);
};

export default RecipeDetails;
