const request = require('request');

const convertBTC = (currency = 'USD', amount = 1) => {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  request(url, (error, response, body) => {
    const { price = 0 } = JSON.parse(body);

    console.log(`${amount} BTC to ${currency} = ${price}`);
  });
};

module.exports = { convertBTC };
