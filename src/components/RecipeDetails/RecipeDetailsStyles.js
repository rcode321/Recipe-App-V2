import styled from "styled-components";

const fontsize = {
	H3FONTSIZE: "55px",
};

export const H3 = styled.h3`
	font-size: ${fontsize.H3FONTSIZE};
	font-weight: 10000;
	font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
`;

export const DIV = styled.div`
	display: flex;
	justify-content: center;
`;

export const SpecialsStyles = styled.div`
	display: flex;
`;

export const SpecialAndIngredients = styled.div`
	/* display: flex;
	justify-content: space-around; */
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
	grid-gap: 10rem;
	margin-top: 9rem;
	justify-content: space-around;
`;

export const IngredientsTitle = styled.div`
	text-align: center;
	font-size: 3.5rem;
	margin-top: 3.5rem;
`;

export const FONTSIZE = styled.h3`
	font-size: 1rem;
	padding-bottom: 1rem;
`;

export const RecipeDetailsText = styled.p`
	font-size: 1.8rem;
	display: inline-block;
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;

export const RecipeDetailsText2 = styled.p`
	font-size: 2rem;
	display: inline-block;
	font-weight: 700;
	color: grey;
	margin-top: 0.5rem;
	padding-left: 6px;
`;
