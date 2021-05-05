import util from 'util';
import fs from 'fs';
import stream from 'stream';
const pipeline = util.promisify(stream.pipeline);
import cipher from './my_caesar_cli.js';

async function run(inputStream, outputStream, shift) {
  await pipeline(
    inputStream,
    async function* (source) {
      source.setEncoding('utf8'); // Work with strings rather than `Buffer`s.
      for await (const chunk of source) {
        yield cipher(chunk, shift);
      }
    },
    outputStream,
  );
  console.log('Pipeline succeeded.');
}

export default ({ shift, action, input, output }) => {
  if (shift === undefined)
    return process.stderr.write("Error: required option '-s, --shift <shift>' not specified");
  if (action == undefined)
    return process.stderr.write("Error: required option '-a, --action <action>' not specified");

  let inputStream, outputStream;
  if (input === undefined) {
    inputStream = process.stdin;
  } else {
    inputStream = fs.createReadStream(input);
  }

  if (output === undefined) {
    outputStream = process.stdout;
  } else {
    outputStream = fs.createWriteStream(output);
  }

  if (action === 'decode') shift = -shift;

  run(inputStream, outputStream, shift).catch(console.error);
};
