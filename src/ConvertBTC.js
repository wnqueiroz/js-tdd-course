const chalk = require('chalk');
const request = require('request');
const ora = require('ora');

const spinner = ora({
  text: 'Retrieving Bitcoin data...',
  color: 'yellow',
});

const convertBTC = (currency = 'USD', amount = 1) => {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  spinner.start();
  request(url, (error, response, body) => {
    spinner.stop();

    let parsedBody = {};
    try {
      parsedBody = JSON.parse(body);
    } catch (parseError) {
      console.log(chalk.red('Something went wrong in the API. Try again in a few minutes.'));
      return parseError;
    }
    const { price = 0 } = parsedBody;
    console.log(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(price)}`);
    return null;
  });
};

module.exports = { convertBTC };
