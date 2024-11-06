import axios from "axios";
export const adminLoginApi = async (payload) => {
  try {
    let response = await axios.post(
      "https://gadgetgalaxy.onrender.com/admin/login",
      payload
    );
    return response.data;
  } catch (e) {
    console.error("userLoginAPI error", e);
  }
};
