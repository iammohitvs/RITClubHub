import axios from "axios";
import { PORT } from "./constants";

const api = axios.create({
    baseURL: PORT,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
