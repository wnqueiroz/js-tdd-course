import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { getAlbum, getAlbumTracks, getAlbums } from '../src/album';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke Tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });
    it('should have getAlbum method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      getAlbum('');
      expect(fetchedStub).to.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy'
      );

      getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk'
      );
    });

    it('should the correct data from Promise', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      album.then(data => expect(data).to.be.eql({ album: 'name' }));
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      getAlbums();
      expect(fetchedStub).to.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk'
      );

      getAlbums(['4aawyAB9vmqN3uQ7FjRGTk', '4aawyAB9vmqN3uQ7FjRGTy']);
      expect(fetchedStub).to.been.calledWith(
        'https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTk,4aawyAB9vmqN3uQ7FjRGTy'
      );
    });

    it('should the correct data from Promise', () => {
      const album = getAlbums([
        '4aawyAB9vmqN3uQ7FjRGTy',
        '4aawyAB9vmqN3uQ7FjRGTk'
      ]);
      album.then(data => expect(data).to.be.eql({ album: 'name' }));
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      getAlbumTracks();
      expect(fetchedStub).to.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      let id = '4aawyAB9vmqN3uQ7FjRGTy';
      getAlbumTracks(id);
      expect(fetchedStub).to.been.calledWith(
        `https://api.spotify.com/v1/albums/${id}/tracks`
      );
      id = '4aawyAB9vmqN3uQ7FjRGTk';
      getAlbumTracks(id);
      expect(fetchedStub).to.been.calledWith(
        `https://api.spotify.com/v1/albums/${id}/tracks`
      );
    });

    it('should the correct data from Promise', () => {
      const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      album.then(data => expect(data).to.be.eql({ album: 'name' }));
    });
  });
});
