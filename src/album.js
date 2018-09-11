import API_URL from './config';
import toJSON from './utils';

// prettier-ignore
const getAlbum = id => fetch(`${API_URL}/albums/${id}`).then(toJSON);

// prettier-ignore
const getAlbums = ids => fetch(`${API_URL}/albums/?ids=${ids}`).then(toJSON);

// prettier-ignore
const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/tracks`).then(toJSON);

// prettier-ignore
export {
  getAlbum, getAlbumTracks, getAlbums
};
