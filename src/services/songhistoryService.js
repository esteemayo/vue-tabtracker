import http from './httpService';
const apiEndpoint = '/histories';

export function getHistories() {
  return http.get(apiEndpoint);
}

export function createHistory(data) {
  return http.post(apiEndpoint, data);
}
