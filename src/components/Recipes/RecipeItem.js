import { Image, Images } from "./RecipeItem.styles";
import {
	RecipeFeatureText,
	RecipeFeatureTitle,
} from "./../../pages/Home/Homestyles";
import { Img, RecipeFeature, RecipeFeatureContent } from "./RecipeList.styles";

const RecipeItem = ({
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
		<>
			<RecipeFeatureContent>
				<RecipeFeatureTitle>{title}</RecipeFeatureTitle>
				<RecipeFeatureText>{description}</RecipeFeatureText>
				<Images src={images?.full} alt="Personalized Chicken meal" />
			</RecipeFeatureContent>
		</>
	);
};

export default RecipeItem;
