/* eslint-disable no-underscore-dangle */

import { Transform } from 'stream';
import cipher from './caesarCipher.js';

class TransformCipher extends Transform {
  constructor(options, shift) {
    super(options);
    this.shift = shift;
  }

  _transform(chunk, encoding, callback) {
    try {
      const string = chunk.toString('utf-8');
      const encodedString = cipher(string, this.shift);
      this.push(encodedString);
      callback();
    } catch (err) {
      callback(err);
    }
  }
}

export default TransformCipher;
