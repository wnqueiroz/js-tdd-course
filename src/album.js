import { API_URL, HEADERS } from './config';
import toJSON from './utils';

// prettier-ignore
const getAlbum = id => fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON);

// prettier-ignore
const getAlbums = ids => fetch(`${API_URL}/albums/?ids=${ids}`, HEADERS).then(toJSON);

// prettier-ignore
const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON);

// prettier-ignore
export {
  getAlbum, getAlbumTracks, getAlbums
};
