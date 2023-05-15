import axios from 'axios';

<<<<<<< HEAD
const instance = axios.create({ baseURL: "http://localhost:5201" });
=======
const instance = axios.defaults.baseURL(process.env.REACT_APP_HOST)
>>>>>>> 0b756b1 (env-commit)

instance.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
  }
);

export default {
  getTasks: async () => {
    const result = await instance.get(`/items`);
    return result.data;
  },

  addTask: async (name) => {
    const result = await instance.post(`/items`, { name: name, isComplete: false });
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    const result = await instance.put(`/items/${id}?isComplete=${isComplete}`);
    return result.data;
  },
  deleteTask: async (id) => {
    const result = await instance.delete(`/items/${id}`);
    return result.data;
  }
};