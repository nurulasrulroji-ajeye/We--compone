import axios from "axios";
import { server } from "./server";

const connection = axios.create({
    baseURL: server
})

export default connection;