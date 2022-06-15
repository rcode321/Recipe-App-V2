import { RecipeFeatureText } from "../Recipes/Recipes.styles";
import { Button, SpecialStyled, TitleSpecial } from "./SpecialStyled";

function Specials({ code, geo, type, specialTitle, text }) {
	const isHavePromo = code;

	return (
		<SpecialStyled>
			<TitleSpecial>Specials</TitleSpecial>
			<RecipeFeatureText>{type}</RecipeFeatureText>
			<RecipeFeatureText>{specialTitle}</RecipeFeatureText>
			<RecipeFeatureText>{text}</RecipeFeatureText>
			{isHavePromo ? `PROMO CODE ${code}` : ""}

			<div style={{ marginTop: "20px" }}>
				<Button
					target="_blank"
					href={`https://www.google.com/maps/search/${geo}`}
					rel="noopener noreferrer"
				>
					Check Available Location
				</Button>
			</div>
		</SpecialStyled>
	);
}

export default Specials;
