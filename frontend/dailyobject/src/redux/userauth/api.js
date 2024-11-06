import axios from "axios";

export const registerUser = async (userDetails) => {
	try {
		const res = await axios.post(
			`https://gadgetgalaxy.onrender.com/users/register`,
			userDetails
		);
		return res.data;
	} catch (error) {
		return error;
	}
};

