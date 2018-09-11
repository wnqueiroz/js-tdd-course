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
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Spotify', () => {
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
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });
  });
});
