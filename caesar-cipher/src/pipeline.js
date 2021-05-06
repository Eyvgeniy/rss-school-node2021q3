import stream from 'stream';
import util from 'util';
import cipher from './caesar_cipher.js';

const pipeline = util.promisify(stream.pipeline);

const run = async (inputStream, outputStream, shift) => {
  await pipeline(
    inputStream,
    async function* transformStream(source) {
      source.setEncoding('utf8'); // Work with strings rather than `Buffer`s.
      for await (const chunk of source) {
        yield cipher(chunk, shift);
      }
    },
    outputStream,
  );
};

export default run;
