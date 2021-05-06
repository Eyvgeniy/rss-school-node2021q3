#!/bin/env node

import { program } from 'commander';
import caesarCipher from '../pipeStreams.js';

program.version('0.0.1');
program
  .description('Encode/Decode text using Caesar cipher')
  .option('-s, --shift <shift>', 'a shift, value must be Integer, mandatory option')
  .option('-i, --input <input>', 'a input file')
  .option('-o, --output <output>', 'a output file')
  .option('-a, --action <action>', 'an action, value: encode/decode, mandatory option')
  .action(() => caesarCipher(program.opts()));

program.addHelpText(
  'after',
  `

  Example call:
    $ node caesar-cipher-cli -s 7 -a encode -i input.txt -o output.txt`,
);

program.parse(process.argv);
