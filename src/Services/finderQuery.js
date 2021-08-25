import axios from "axios";

const finderQuery = axios.create({
    baseURL: `https://api.themoviedb.org/3/search/multi?api_key=aef553b39eabae2c8356eb04d1fc5afe&language=en-US&page=1&include_adult=false&query=`,
});


export default finderQuery;