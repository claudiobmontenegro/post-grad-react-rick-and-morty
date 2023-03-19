import axios from "axios";

const http = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  timeout: 10000,
});

export default http;
