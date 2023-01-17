import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL, TIMEOUT } from '../const';
import { getToken } from './token';


export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (!config.headers){
        return config;
      }

      const token = getToken();
      if (token){
        config.headers['x-token'] = token;
      }
      return config;
    }
  );

  return api;
};
