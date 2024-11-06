import axios from "axios";
export const adminLoginApi = async (payload) => {
  try {
    let response = await axios.post(
      "http://localhost:8080/admin/login",
      payload
    );
    return response.data;
  } catch (e) {
    console.error("userLoginAPI error", e);
  }
};
