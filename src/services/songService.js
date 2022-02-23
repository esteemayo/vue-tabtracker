import http from './httpService';
const apiEndpoint = '/songs';

const songUrl = (songID) => {
  return `${apiEndpoint}/${songID}`;
};

export function getSongs(search) {
  return http.get(apiEndpoint, {
    params: {
      search,
    },
  });
}

export function getSongById(songID) {
  return http.get(songUrl(songID));
}

export function getSongBySlug(slug) {
  return http.get(`${apiEndpoint}/detail/${slug}`);
}

export function createSong(data) {
  return http.post(apiEndpoint, data);
}

export function updateSong(data, songID) {
  return http.patch(songUrl(songID), data);
}

export function deleteSong(songID) {
  return http.delete(songUrl(songID));
}
