const createMarkup = tracks =>
  tracks.map(
    music => `
  <div class="music" data-track-preview="${music.preview_url}">
    <p class="music-number">${music.track_number}</p>
    <p class="music-title">${music.name}</p>
    <p class="music-duration">${music.duration_ms}</p>
  </div>`
  );

const renderAlbumTracks = (data, element) => {
  const markup = createMarkup(data);

  element.innerHTML = markup.join('');
};

export { renderAlbumTracks };
