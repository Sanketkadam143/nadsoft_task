import axios from "axios";

const API_URL = "https://crudcrud.com/api/305915076b244eef85aaf0f61b1f0af5/";
const API = axios.create({ baseURL: API_URL });

export const addTasks = (formData) => API.post("members", formData);
export const getTasks = () => API.get("members");
export const getSingleTask = (id) => API.get(`members/${id}`);
export const deleteTasks = (id) => API.delete(`members/${id}`);
export const updateTask = (formData) => {
  const updatedData = { ...formData };
  delete updatedData._id;
  return API.put(`members/${formData._id}`, updatedData);
};
