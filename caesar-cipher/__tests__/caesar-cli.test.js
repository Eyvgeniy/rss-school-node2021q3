import { promises as fsp } from 'fs';
import path from 'path';
import caesarCipher, { shiftChar } from '../src/my_caesar_cli';

const inputFile = 'input.txt';
const outputFile = 'output.txt';
const inputPath = path.resolve('__fixtures__', inputFile);
const outputPath = path.resolve('__fixtures__', outputFile);

let inputText, outputText;

beforeAll(async () => {
  inputText = await fsp.readFile(inputPath, 'utf-8');
  outputText = await fsp.readFile(outputPath, 'utf-8');
});

test('test shift downcase char', () => {
  expect(shiftChar('a', 3)).toMatch('d');
  expect(shiftChar('a', 29)).toMatch('d');
  expect(shiftChar('z', 3)).toMatch('c');
});

test('test shift uppercase char', () => {
  expect(shiftChar('A', 3)).toMatch('D');
  expect(shiftChar('A', 29)).toMatch('D');
  expect(shiftChar('Z', 3)).toMatch('C');
});

test('test shift symbols', () => {
  expect(shiftChar('!', 3)).toMatch('!');
  expect(shiftChar('#', 29)).toMatch('#');
  expect(shiftChar(' ', 3)).toMatch(' ');
});

test('test shift text', () => {
  expect(caesarCipher(inputText, 1)).toMatch(outputText);
});

test('test negative shift', () => {
  expect(caesarCipher('A', -1)).toMatch('Z');
  expect(caesarCipher('A', -27)).toMatch('Z');
  expect(caesarCipher('B', -1)).toMatch('A');
  expect(caesarCipher('B', -27)).toMatch('A');
});
