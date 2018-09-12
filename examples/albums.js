/** to run: ./node_modules/.bin/babel-node ./albums.js */

import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN'
});
const albums = spotify.search.albums('Maroon 5');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
