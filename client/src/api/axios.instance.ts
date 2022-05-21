import axios from 'axios';
import { GlobalConstants } from '../common/constants';

const BASE_URL = GlobalConstants.WEB_API;

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
