const request = require('request');

const convertBTC = (currency = 'USD', amount = 1) => {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  request(url, (error, response, body) => {
    let parsedBody = {};
    try {
      parsedBody = JSON.parse(body);
    } catch (parseError) {
      console.log('Something went wrong in the API. Try again in a few minutes.');
      return parseError;
    }
    const { price = 0 } = parsedBody;
    console.log(`${amount} BTC to ${currency} = ${price}`);
    return null;
  });
};

module.exports = { convertBTC };
