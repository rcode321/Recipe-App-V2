import * as React from "react";
import {
	FONTSIZE,
	SpecialAndIngredients,
	IngredientsTitle,
	RecipeDetailsText2,
} from "./RecipeDetailsStyles";
import {
	WelcomeContainer,
	WelcomeContent,
	WelcomeImg,
	WelcomeContentText,
	WelcomeContentTitle,
	WelcomeText,
	Img,
} from "./../Welcome/Welcome.styles";
import Specials from "./../Specials/Specials";

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
	text,
	type,
	code,
	geo,
	specialTitle,
}) => {
	return (
		<>
			<WelcomeContainer>
				<WelcomeContent>
					<WelcomeImg>
						<Img src={images} alt=" Delious Pizza" />
					</WelcomeImg>
					<WelcomeContentText>
						<WelcomeContentTitle>{title}</WelcomeContentTitle>
						<WelcomeText>{description}</WelcomeText>
						<FONTSIZE>
							{directions} <hr />
							<RecipeDetailsText2>
								{`Servings: ${servings} -`}
								<RecipeDetailsText2>{`Cooktime: ${cookTime}-`} </RecipeDetailsText2>
								<RecipeDetailsText2>{`Preptime: ${prepTime}`} </RecipeDetailsText2>
							</RecipeDetailsText2>
						</FONTSIZE>
					</WelcomeContentText>
				</WelcomeContent>
			</WelcomeContainer>

			<IngredientsTitle>
				<h1>Ingredients</h1>
				<p>{description}</p>
			</IngredientsTitle>
			<SpecialAndIngredients>
				<p>{ingredients} </p>
				<Specials
					type={type}
					specialTitle={specialTitle}
					text={text}
					code={code}
					geo={geo}
				/>
			</SpecialAndIngredients>
		</>
	);
};

export default RecipeDetails;
