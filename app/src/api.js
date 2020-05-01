import axios from 'axios';


const API =  axios.create({
    baseURL: 'http://localhost:8000/api/'
  });


const token = "b8d67e8b61afd7e1e83054f6086b1d33ca429de9"

localStorage.setItem('access-token', token);

API.interceptors.request.use(config => {
    const refresh_token = localStorage.getItem('refresh-token');
    const token = refresh_token ? refresh_token : localStorage.getItem('access-token');
    if(token ) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});

export default API;