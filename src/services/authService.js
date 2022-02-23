import http from './httpService';

const apiEndpoint = '/auth/login';
const tokenKey = 'accessToken';

http.setJWT(getJwt());

export function login(credentials) {
  return http.post(apiEndpoint, credentials);
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}
