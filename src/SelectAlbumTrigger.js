import spotify from './Spotify';

import { renderAlbumInfo } from './AlbumInfo';
import { renderAlbumTracks } from './AlbumTracks';

const listAlbums = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

export const selectAlbumTrigger = () => {
  listAlbums.addEventListener('click', (e) => {
    e.preventDefault();
    const { target } = e;

    spotify.album
      .getAlbum(target.getAttribute('data-album-id'))
      .then((data) => {
        renderAlbumInfo(data, albumInfo);
        return data;
      })
      .then(({ tracks: { items = [] } = {} }) => renderAlbumTracks(items, albumTracks));
  });
};
