import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { getAlbum, getAlbumTracks } from '../src/album';

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
    // verifica se o dado é recebido pela Promise
  });
});
