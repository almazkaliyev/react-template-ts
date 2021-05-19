import axios from 'axios';

import LS from '@/utils/LS';

export const setAxiosAuthHeader = (token: string | null) => {
  if (token) axios.defaults.headers['Authorization'] = `Bearer ${token}`;
};

axios.defaults.baseURL = process.env.API_URL;

const token = LS.getAuthToken();
setAxiosAuthHeader(token);
