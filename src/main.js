import spotify from './Spotify';

import { renderAlbums } from './AlbumList';

const albums = spotify.search.albums('Alter bridge');

const albumList = document.getElementById('album-list');

albums.then(({ albums: { items = [] } = {} }) => renderAlbums(items, albumList));
