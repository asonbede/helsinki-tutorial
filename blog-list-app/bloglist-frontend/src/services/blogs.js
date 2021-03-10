import axios from "axios";
const baseUrl = "http://localhost:8082/api/blogs";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

// const create = (newObject) => {
//   const request = axios.post(baseUrl, newObject);
//   return request.then((response) => response.data);
// };
const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, {
    headers: { Authorization: token },
  });
  console.log({ config });
  return response.data;
};

const update = (id, notObject) => {
  console.log("clientid",id)
  console.log("clientid",notObject)
  const request = axios.put(`${baseUrl}/${id}`, notObject);
  return request.then((response) => response.data);
};

const deleteBlog = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`, {
    headers: { Authorization: token },
  });
  return request.then((response) => response.data); //note-app-with-react-node
};

const getOneBlog = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data); //note-app-with-react-node
};

export default { getAll, create, setToken, update, token, deleteBlog,getOneBlog };
