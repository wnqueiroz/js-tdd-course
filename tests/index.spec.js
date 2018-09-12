import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

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

  describe('request method', () => {
    let fetchedStub;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.resolves({ json: () => ({ album: 'name' }) });
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should have request method', () => {
      const spotify = new SpotifyWrapper();
      expect(spotify.request).to.be.exist;
    });

    it('should call fetch when request', () => {
      const spotify = new SpotifyWrapper({
        token: 'anything...'
      });
      spotify.request('anything...');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with right URL passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'anything...'
      });
      spotify.request('anything...');
      expect(fetchedStub).to.have.been.calledWith('anything...');
    });

    it('should call fetch with right headers passed', () => {
      const token = 'anything...';
      const spotify = new SpotifyWrapper({ token });
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      spotify.request('anything...');
      expect(fetchedStub).to.have.been.calledWith('anything...', headers);
    });
  });
});
