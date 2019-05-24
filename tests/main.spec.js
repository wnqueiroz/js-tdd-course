import { expect } from 'chai';

import { exec } from 'child_process';

const isWindows = process.platform === 'win32';

const btcConverter = `${isWindows ? 'node.exe' : ''} ./src/main.js`;

describe('Main CLI', () => {
  it('should do return Hello World', (done) => {
    exec(btcConverter, (err, stdout) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal('Hello World');
      done();
    });
  });
});
