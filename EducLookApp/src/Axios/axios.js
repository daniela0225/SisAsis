import axios from 'axios';

const API = axios.create({
	baseURL: 'http://192.168.20.58:3000/'
});

export default API;