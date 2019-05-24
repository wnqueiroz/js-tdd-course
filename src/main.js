import { renderAlbumInfo } from './AlbumInfo';
import { renderAlbumTracks } from './AlbumTracks';
import { searchEnterTrigger } from './SearchTrigger';

searchEnterTrigger();

const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

const album = spotify.album.getAlbum('6hqietEuZCikevdO2oGTcx');

album
  .then((data) => {
    renderAlbumInfo(data, albumInfo);
    return data;
  })
  .then(({ tracks: { items = [] } = {} }) => renderAlbumTracks(items, albumTracks));
