import axios from "axios";

export const getRecipeRequest = ({
	id,
	onRequest = () => null,
	onSuccess = () => null,
	onFailed = () => null,
}) => {
	onRequest();
	axios
		.get(`http://localhost:3001/recipes/${id}`)
		.then((payload) => {
			onSuccess(payload);
		})
		.catch((e) => {
			onFailed(e);
			console.error("Recipe Request", e);
		});
};
