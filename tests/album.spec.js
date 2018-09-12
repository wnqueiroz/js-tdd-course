import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
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
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });
    it('should have getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
    it('should have getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      spotify.album.getAlbum('');
      expect(fetchedStub).to.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy'
      );

      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk'
      );
    });

    it('should the correct data from Promise', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      album.then(data => expect(data).to.be.eql({ album: 'name' }));
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      spotify.album.getAlbums();
      expect(fetchedStub).to.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.album.getAlbums([
        '4aawyAB9vmqN3uQ7FjRGTy',
        '4aawyAB9vmqN3uQ7FjRGTk'
      ]);
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk'
      );

      spotify.album.getAlbums([
        '4aawyAB9vmqN3uQ7FjRGTk',
        '4aawyAB9vmqN3uQ7FjRGTy'
      ]);
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTk,4aawyAB9vmqN3uQ7FjRGTy'
      );
    });

    it('should the correct data from Promise', () => {
      const album = spotify.album.getAlbums([
        '4aawyAB9vmqN3uQ7FjRGTy',
        '4aawyAB9vmqN3uQ7FjRGTk'
      ]);
      album.then(data => expect(data).to.be.eql({ album: 'name' }));
    });
  });

  describe('getTracks', () => {
    it('should call fetch method', () => {
      spotify.album.getTracks();
      expect(fetchedStub).to.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      let id = '4aawyAB9vmqN3uQ7FjRGTy';
      spotify.album.getTracks(id);
      expect(fetchedStub).to.been.calledWith(
        `https://api.spotify.com/v1/albums/${id}/tracks`
      );
      id = '4aawyAB9vmqN3uQ7FjRGTk';
      spotify.album.getTracks(id);
      expect(fetchedStub).to.been.calledWith(
        `https://api.spotify.com/v1/albums/${id}/tracks`
      );
    });

    it('should the correct data from Promise', () => {
      const album = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      album.then(data => expect(data).to.be.eql({ album: 'name' }));
    });
  });
});
