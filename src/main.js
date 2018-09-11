const search = (query, type) => {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;
  return fetch(encodeURI(url)).then(data => data.json());
};
const searchAlbuns = () => {};
const searchArtists = () => {};
const searchTracks = () => {};
const searchPlaylists = () => {};

// prettier-ignore
export {
  search, searchAlbuns, searchArtists, searchTracks, searchPlaylists
};
