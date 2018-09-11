import chai, { expect } from 'chai';
import {
  search,
  searchAlbuns,
  searchArtists,
  searchTracks,
  searchPlaylists
} from '../src/main';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Spotify', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke Tests', () => {
    it('should exists the search method', () => {
      expect(search).to.exist;
    });
    it('should exists the searchAlbuns method', () => {
      expect(searchAlbuns).to.exist;
    });
    it('should exists the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });
    it('should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });
    it('should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct URL to fetch', () => {
      context('passing one type', () => {
        const artists = search('Maron 5', 'artist');

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Maron%205&type=artist'
        );

        const album = search('Maron 5', 'album');

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Maron%205&type=album'
        );
      });
      context('passing more than one type', () => {
        const artistsAndAlbuns = search('Maron 5', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Maron%205&type=artist,album'
        );
      });
    });

    it('should return JSON Data from the Promise', () => {
      const artists = search('Maron 5', 'artist');
      artists.then(data => expect(data).to.be.eql({ album: 'name' }));
    });
  });
});
