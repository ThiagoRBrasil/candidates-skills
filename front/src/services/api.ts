import { BASE_URL } from "@helpers/address";
import axios from "axios";

const app = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default app