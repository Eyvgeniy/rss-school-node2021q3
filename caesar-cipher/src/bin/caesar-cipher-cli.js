#!/bin/env node

import { program } from 'commander';
import caesarCipher from '../streams.js';

program.version('0.0.1');
program
  .description('Encode/Decode text using Caesar cipher')
  .option('-s, --shift <shift>', 'a shift')
  .option('-i, --input <input>', 'a input file')
  .option('-o, --output <output>', 'a output file')
  .option('-a, --action <action>', 'an action encode/decode')
  .action(() => caesarCipher(program.opts()));

program.parse(process.argv);
