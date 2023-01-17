import axios, { AxiosInstance } from 'axios';
import { BASE_URL, TIMEOUT } from '../const';


export const createApi = (): AxiosInstance => axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});
