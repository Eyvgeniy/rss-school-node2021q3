/* eslint-disable no-param-reassign */
import fs from 'fs';
import pipeline from './pipeline.js';
import validate from './validate.js';

export default ({
  shift, action, input, output,
}) => {
  validate(shift, action, input, output);

  let inputStream;
  let outputStream;
  if (input === undefined) {
    inputStream = process.stdin;
  } else {
    inputStream = fs.createReadStream(input);
  }

  if (output === undefined) {
    outputStream = process.stdout;
  } else {
    outputStream = fs.createWriteStream(output, { flags: 'a' });
  }

  if (action === 'decode') shift = -shift;

  pipeline(inputStream, outputStream, shift).catch(process.stderr.write);
};
