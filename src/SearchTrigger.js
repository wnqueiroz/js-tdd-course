import spotify from './Spotify';

import { renderAlbums } from './AlbumList';

const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

export const searchEnterTrigger = () => {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    spotify.search
      .albums(searchInput.value)
      .then(({ albums: { items = [] } = {} }) => renderAlbums(items, albumList));
  });
};
