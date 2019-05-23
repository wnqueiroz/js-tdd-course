import spotify from './Spotify';

import { renderAlbums } from './AlbumList';
import { renderAlbumInfo } from './AlbumInfo';
import { renderAlbumTracks } from './AlbumTracks';

const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

const albums = spotify.search.albums('Alter bridge');

const album = spotify.album.getAlbum('6hqietEuZCikevdO2oGTcx');

albums.then(({ albums: { items = [] } = {} }) => renderAlbums(items, albumList));

album
  .then((data) => {
    renderAlbumInfo(data, albumInfo);
    return data;
  })
  .then(({ tracks: { items = [] } = {} }) => renderAlbumTracks(items, albumTracks));
