import { expect } from 'chai';

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper();
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive apiUrl as an option', () => {
    const apiUrl = 'anything';
    const spotify = new SpotifyWrapper({
      apiUrl
    });
    expect(spotify.apiUrl).to.be.equal(apiUrl);
  });

  it('should use the default apiUrl if not provided', () => {
    const spotify = new SpotifyWrapper();
    expect(spotify.apiUrl).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    const token = 'token';
    const spotify = new SpotifyWrapper({
      token
    });
    expect(spotify.token).to.be.equal(token);
  });
});
