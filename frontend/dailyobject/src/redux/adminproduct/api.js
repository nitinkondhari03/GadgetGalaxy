import axios from "axios";

export const getProductFromApi = async () => {
	try {
		let response = await axios.get(`https://gadgetgalaxy.onrender.com/products`);
		return response.data;
	} catch (error) {
		return error;
	}
};

export const getSingleProductFromApi = async (id) => {
	try {
		let response = await axios.get(
			`https://gadgetgalaxy.onrender.com/products/${id}`
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const postDataToApi = async (payload) => {
	try {
		let response = await axios.post(
			`https://gadgetgalaxy.onrender.com/products/add`,
			payload
		);
		return response.data;
	} catch (error) {
		return error;
	}
};

export const deleteDataFromApi = async (id) => {
	try {
		let response = await axios.delete(
			`https://gadgetgalaxy.cyclic.app/products/delete/${id}`
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};
