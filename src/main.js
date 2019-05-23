import spotify from './Spotify';

import { renderAlbums } from './AlbumList';
import { renderAlbumInfo } from './AlbumInfo';

const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');

const albums = spotify.search.albums('Alter bridge');

const album = spotify.album.getAlbum('6hqietEuZCikevdO2oGTcx');

albums.then(({ albums: { items = [] } = {} }) => renderAlbums(items, albumList));

album.then(data => renderAlbumInfo(data, albumInfo));
