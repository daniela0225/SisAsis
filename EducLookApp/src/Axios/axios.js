import axios from 'axios';

const API = axios.create({
	baseURL: 'http://192.168.43.186:3000/'
});

export default API;