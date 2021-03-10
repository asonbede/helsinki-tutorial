import axios from "axios";
const baseUrl = "http://localhost:8082/api/login"; //http://localhost:8081

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };
