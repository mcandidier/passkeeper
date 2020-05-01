import axios from 'axios';


const API =  axios.create({
    baseURL: 'http://localhost:8000/api/'
  });


API.interceptors.request.use(config => {
    const token = localStorage.getItem('access-token');
    if(token) {
        config.headers.Authorization = `Token ${token}`;
    }

    return config;
});

export default API;