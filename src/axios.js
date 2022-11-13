import axios from "axios";

const API = axios.create({
  baseURL: "https://backendhosted123.herokuapp.com/",
});

export default API;
