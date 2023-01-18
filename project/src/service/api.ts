import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL, TIMEOUT } from '../const';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];


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

  api.interceptors.request.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.message);
      }
      throw error;
    }
  );

  return api;
};

export const api = createApi();
