import { API_URL } from './config';

export default class SpotifyWrapper {
  constructor(options = {}) {
    const { apiUrl = API_URL, token = null } = options;
    this.apiUrl = apiUrl;
    this.token = token;
  }
}
