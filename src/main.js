const search = (query, type) => {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;
  return fetch(encodeURI(url)).then(data => data.json());
};
const searchAlbums = query => search(query, 'album');
const searchArtists = query => search(query, 'artist');
const searchTracks = query => search(query, 'track');
const searchPlaylists = query => search(query, 'playlist');

// prettier-ignore
export {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists
};
