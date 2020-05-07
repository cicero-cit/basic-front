import axios from 'axios';

const API = axios.create({
  baseURL: 'https://5eb46d5d2b81f7001630859d.mockapi.io/basic-front',
});

export default API;
