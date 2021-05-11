import stream from 'stream';
import util from 'util';
import TransformCipher from './transformStream.js';

const pipeline = util.promisify(stream.pipeline);

const run = async (inputStream, outputStream, shift) => {
  const transformStream = new TransformCipher({}, shift);
  await pipeline(inputStream, transformStream, outputStream);
};

export default run;
