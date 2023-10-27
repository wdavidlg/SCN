import axios from "axios"



// const baseURL = "https://solidaridad-backend-production.up.railway.app/api";
const baseURL = "http://localhost:8083/api";

export const api = axios.create({
    baseURL
})