import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

let user;
let currentUser: User | null;
let token;

try {
  const root = localStorage.getItem("persist:root");
  user = root ? JSON.parse(root)?.user : null;
  currentUser = user && JSON.parse(user).currentUser;
  token = currentUser?.accessToken;
} catch (error) {
  console.error("Error parsing JSON from localStorage:", error);
  user = null;
  currentUser = null;
}

const axiosInstance = axios.create({ baseURL: BASE_URL });

const privateInstance = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});

export const publicRequest = axiosInstance;

export const userRequest = privateInstance;
