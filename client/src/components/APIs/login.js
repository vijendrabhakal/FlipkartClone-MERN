import axios from "axios";

const URL = "http://localhost:5000";

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error calling login api:", error);
    return error.response;
  }
};
