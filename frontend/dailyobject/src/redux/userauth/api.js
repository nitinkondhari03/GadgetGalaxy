import axios from "axios";

export const registerUser = async (userDetails) => {
	try {
		const res = await axios.post(
			`http://localhost:8080/users/register`,
			userDetails
		);
		return res.data;
	} catch (error) {
		return error;
	}
};

