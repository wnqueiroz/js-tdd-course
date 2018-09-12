import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({ token: 'anything' });
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke Tests', () => {
    it('should exists the spotify.search.albums method', () => {
      expect(spotify.search.albums).to.exist;
    });
    it('should exists the spotify.search.artists method', () => {
      expect(spotify.search.artists).to.exist;
    });
    it('should exists the spotify.search.tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });
    it('should exists the spotify.search.playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('spotify.search.artists', () => {
    it('should call fetch function', () => {
      spotify.search.artists('Maroon 5');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.search.artists('Maroon 5');

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Maroon%205&type=artist'
      );

      spotify.search.artists('Bruno Mars');

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Bruno%20Mars&type=artist'
      );
    });
  });

  describe('spotify.search.albums', () => {
    it('should call fetch function', () => {
      spotify.search.albums('Blackbird');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.search.albums('Maroon 5');

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Maroon%205&type=album'
      );

      spotify.search.albums('Bruno Mars');

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Bruno%20Mars&type=album'
      );
    });
  });

  describe('spotify.search.tracks', () => {
    it('should call fetch function', () => {
      spotify.search.tracks('Blackbird');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.search.tracks('Maroon 5');

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Maroon%205&type=track'
      );

      spotify.search.tracks('Bruno Mars');

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Bruno%20Mars&type=track'
      );
    });
  });

  describe('spotify.search.playlists', () => {
    it('should call fetch function', () => {
      spotify.search.playlists('Blackbird');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.search.playlists('Maroon 5');

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Maroon%205&type=playlist'
      );

      spotify.search.playlists('Bruno Mars');

      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Bruno%20Mars&type=playlist'
      );
    });
  });
});
