import http from './httpService';
const apiEndpoint = '/bookmarks';

function bookmarkUrl(bookmarkID) {
  return `${apiEndpoint}/${bookmarkID}`;
}

export function getBookmarks() {
  return http.get(`${apiEndpoint}`);
}

export function getBookmark(bookmarkID) {
  return http.get(bookmarkUrl(bookmarkID));
}

export function getOneBookmark(songID) {
  return http.get(`${apiEndpoint}/song/${songID}`);
}

export function createBookmark(data) {
  return http.post(apiEndpoint, data);
}

export function updateBookmark(data, bookmarkID) {
  return http.patch(bookmarkUrl(bookmarkID), data);
}

export function deleteBookmark(bookmarkID) {
  return http.delete(bookmarkUrl(bookmarkID));
}
