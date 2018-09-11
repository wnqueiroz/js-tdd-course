import API_URL from './config';
import toJSON from './utils';

const search = (query, type) => {
  const url = `${API_URL}/search?q=${query}&type=${type}`;
  return fetch(encodeURI(url)).then(toJSON);
};
const searchAlbums = query => search(query, 'album');
const searchArtists = query => search(query, 'artist');
const searchTracks = query => search(query, 'track');
const searchPlaylists = query => search(query, 'playlist');

// prettier-ignore
export {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists
};
