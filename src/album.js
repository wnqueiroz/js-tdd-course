const getAlbum = id => {
  const url = `https://api.spotify.com/v1/albums/${id}`;
  return fetch(url).then(data => data.json());
};

const getAlbumTracks = () => {};

// prettier-ignore
export {
  getAlbum, getAlbumTracks
};
