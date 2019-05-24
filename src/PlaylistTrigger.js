const albumTracks = document.getElementById('album-tracks');

let audioObject;
let audioTrackPreview;
let previousAudioTrackPreview;

export const playlistTrigger = () => {
  albumTracks.addEventListener('click', (e) => {
    const {
      target: { parentNode: target },
    } = e;

    audioTrackPreview = target.getAttribute('data-track-preview');

    if (audioTrackPreview !== previousAudioTrackPreview) {
      previousAudioTrackPreview = audioTrackPreview;

      if (audioObject) audioObject.pause(audioTrackPreview);

      audioObject = new Audio(audioTrackPreview);

      audioObject.play();

      target.classList.add('active');

      audioObject.addEventListener('pause', () => {
        target.classList.remove('active');
      });
    } else if (audioObject) {
      audioObject.pause(audioTrackPreview);
      previousAudioTrackPreview = null;
    }
  });
};
