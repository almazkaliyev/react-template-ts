import Axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from 'config';
import storage from 'utils/storage';

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
};

export const axios = Axios.create({
  baseURL: API_URL,
});

export const setAxiosAuthorizationToken = (token: null | string): void => {
  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

axios.interceptors.request.use(authRequestInterceptor);
