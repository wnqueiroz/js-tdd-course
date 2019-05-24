#!/usr/bin/env node

const program = require('commander');

const { version } = require('../package.json');

program
  .version(version)
  .description('Convert Bitcoin to any currency defined')
  .parse(process.argv);
