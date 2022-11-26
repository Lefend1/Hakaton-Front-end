import axios from "axios";

export const API_URL = "http://164.92.180.148:9090";

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
