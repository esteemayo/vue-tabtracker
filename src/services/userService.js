import http from './httpService';

const apiEndpoint = '/users/register';

export function register(credentials) {
  return http.post(apiEndpoint, credentials);
}
