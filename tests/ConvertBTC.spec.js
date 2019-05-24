import chalk from 'chalk';
import nock from 'nock';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

import { convertBTC } from '../src/ConvertBTC';

chai.use(sinonChai);

describe('ConvertBTC', () => {
  let consoleStub;

  const responseMock = {
    time: '2019-05-24 20:05:41',
    price: 8046.23,
    success: true,
  };

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should use currency USD and 1 as amount default', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 1 })
      .reply(200, responseMock);

    convertBTC();

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledOnceWith(
        `${chalk.red('1')} BTC to ${chalk.cyan('USD')} = ${chalk.yellow(responseMock.price)}`,
      );
      done();
    }, 300);
  });

  it('should use currency USD and 10 as amount default', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 10 })
      .reply(200, responseMock);

    convertBTC('USD', 10);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledOnceWith(
        `${chalk.red('10')} BTC to ${chalk.cyan('USD')} = ${chalk.yellow(responseMock.price)}`,
      );
      done();
    }, 300);
  });

  it('should use currency BRL and 1 as amount default', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 1 })
      .reply(200, responseMock);

    convertBTC('BRL');

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledOnceWith(
        `${chalk.red('1')} BTC to ${chalk.cyan('BRL')} = ${chalk.yellow(responseMock.price)}`,
      );
      done();
    }, 300);
  });

  it('should message user when api reply with error', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 1 })
      .replyWithError('Error');

    convertBTC('BRL');

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledOnceWith(
        chalk.red('Something went wrong in the API. Try again in a few minutes.'),
      );
      done();
    }, 300);
  });
});
