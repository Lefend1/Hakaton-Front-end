import axios from "axios";

export const API_URL = "https://localhost:9090";

const $api = axios.create({
    baseURL: API_URL,
});

export default $api;