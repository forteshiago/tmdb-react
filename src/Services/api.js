import axios from "axios";

const api = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=aef553b39eabae2c8356eb04d1fc5afe`,
});


export default api;