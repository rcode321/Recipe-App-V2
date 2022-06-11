import styled from "styled-components";

export const Images = styled.img`
	width: 380px;
	height: 250px;
	border-radius: 10px;

	box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
	border-radius: 10px;
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
