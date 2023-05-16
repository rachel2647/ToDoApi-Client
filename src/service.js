import axios from 'axios';

const apiClient=axios.create({
  baseURL:process.env.REACT_APP_API_KEY
})
console.log('process.env.API_URL', process.env.REACT_APP_API_KEY)

export default {
  getTasks: async () => {
    const result = await apiClient.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    const result = await apiClient.post(`/items`,{name:name,isComplete:false})    
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    await apiClient.put(`/items/${id}?isComplete=${isComplete}`)
  },

  deleteTask:async(id)=>{
    const result = await apiClient.delete(`/items/${id}`)    
    return result.data;
  }
};

apiClient.interceptors.response.use(function (response) {
  
  return response;
}, function (error) {
  console.error(error);
  return Promise.reject(error);
});


