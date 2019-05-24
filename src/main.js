#!/usr/bin/env node

const program = require('commander');

const { version } = require('../package.json');

const { convertBTC } = require('../src/ConvertBTC');

program
  .version(version)
  .description('Convert Bitcoin to any currency defined')
  .option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)')
  .option('-A, --amount <amount>', 'Value in Bitcoin to be converted. (Default: 1)')
  .parse(process.argv);

const { currency, amount } = program;

convertBTC(currency, amount);
