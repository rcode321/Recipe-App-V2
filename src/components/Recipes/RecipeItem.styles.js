import styled from "styled-components";

export const Images = styled.img`
	width: 380px;
	height: 250px;
	border-radius: 10px;

	box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
	border-radius: 5px;
	transition: all 0.4s ease;
	margin-bottom: 5rem;
	cursor: pointer;
	&:hover {
		box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.12);
		transform: scale(1.05);
		background-color: #333;
		color: #fff;
	}
`;

export const ButtonRecipe = styled.a`
	border-radius: ${({ bigRadius }) => (bigRadius ? "10px" : "5px")};
	background-color: ${({ primary }) => (primary ? "#ffcb2b" : "#d30051")};
	color: ${({ primary }) => (primary ? "#000" : "#fff")};
	padding: ${({ big }) => (big ? "18px 30px" : "10px 28px")};
	font-size: ${({ bigFont }) => (bigFont ? "20px" : "18px")};
	outline: none;
	cursor: pointer;
	border: none;
	transition: all 0.5s ease;
	&:hover {
		background-color: ${({ primary }) => (primary ? "#fff" : "#ff1971")};
		transform: translateY(-0.5rem) scale(1.02);
		color: #fff;
	}
`;
