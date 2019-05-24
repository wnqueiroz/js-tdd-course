import { expect } from 'chai';

import { exec } from 'child_process';

const isWindows = process.platform === 'win32';

const btcConverter = `${isWindows ? 'node.exe' : ''} ./src/main.js`;

const { version } = require('../package.json');

describe('Main CLI', () => {
  it('should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(version);
      done();
    });
  });

  it('should return the description when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) throw err;

      expect(stdout.includes('Convert Bitcoin to any currency defined')).to.be.equal(true);

      done();
    });
  });

  it('should return the currency when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) throw err;

      expect(stdout.includes('--currency')).to.be.equal(true);

      done();
    });
  });

  it('should return the amount when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout) => {
      if (err) throw err;

      expect(stdout.includes('--amount')).to.be.equal(true);

      done();
    });
  });
});
