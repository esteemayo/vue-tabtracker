import axios from 'axios';
import logger from './logService';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.interceptors.response.use(null, (err) => {
  const expectedError =
    err.response &&
    err.response.status >= 400 &&
    err.response &&
    err.response.status < 500;

  if (!expectedError) {
    logger.log(err);
    console.log('An unexpected error occurred');
  }

  return Promise.reject(err);
});

const setJWT = (accessToken) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

const http = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
  setJWT,
};

export default http;
