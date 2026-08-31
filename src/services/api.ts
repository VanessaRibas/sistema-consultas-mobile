import axios, { AxiosError } from "axios";

const BASE_URL = "http://localhost:8080";

const api = axios.create({
 baseURL: BASE_URL,
 timeout: 10000,
 headers: {
 "Content-Type": "application/json",
 },
});

export default api;


export function isNetworkError(error: unknown): boolean {
 if (error instanceof AxiosError) {
 return !error.response;
 }
 return false;
}

export async function healthCheck(): Promise<boolean> {
 try {
 await axios.get(`${BASE_URL}/health`, { timeout: 3000 });
 return true;
 } catch {
 return false;
 }
}
