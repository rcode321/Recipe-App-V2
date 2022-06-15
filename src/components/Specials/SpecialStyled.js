import styled from "styled-components";

export const SpecialStyled = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	width: 50%;
	max-height: 40vh;
	padding: 2rem;
	margin-top: 2rem;
`;

export const TitleSpecial = styled.h3`
	font-weight: 10000;
	font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
	color: #ffcb2b;
	font-size: 5.5rem;
	text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

export const Button = styled.a`
	border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "20px")};
	background-color: ${({ primary }) => (primary ? "#ffcb2b" : "#000")};
	color: ${({ primary }) => (primary ? "#000" : "#fff")};
	padding: ${({ big }) => (big ? "18px 30px" : "10px 28px")};
	font-size: ${({ bigFont }) => (bigFont ? "20px" : "10px")};
	outline: none;
	cursor: pointer;
	border: none;
	transition: all 0.5s ease;
	&:hover {
		background-color: ${({ primary }) => (primary ? "#fff" : "#ffcb2b")};
		transform: translateY(-0.5rem) scale(1.02);
		color: #000;
	}
`;
