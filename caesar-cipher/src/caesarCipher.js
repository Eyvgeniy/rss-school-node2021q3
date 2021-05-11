const NUMBER_UPPERCASE_ALPHABET_START = 64;
const NUMBER_UPPERCASE_ALPHABET_END = 90;
const NUMBER_DOWNCASE_ALPHABET_START = 96;
const NUMBER_DOWNCASE_ALPHABET_END = 122;
const ALPHABET_LENGTH = 26;

const isDowncaseChar = (idx) => idx > 96 && idx <= 122;
const isUppercaseChar = (idx) => idx > 64 && idx <= 90;

const isAlphabet = (charIdx) => {
  if (isDowncaseChar(charIdx) || isUppercaseChar(charIdx)) return true;
  return false;
};

const checkCharCase = (charIdx) => {
  if (isUppercaseChar(charIdx)) {
    return 'uppercase';
  }
  if (isDowncaseChar(charIdx)) {
    return 'downcase';
  }
  return 'error';
};

const caseMap = {
  downcase: { start: NUMBER_DOWNCASE_ALPHABET_START, end: NUMBER_DOWNCASE_ALPHABET_END },
  uppercase: { start: NUMBER_UPPERCASE_ALPHABET_START, end: NUMBER_UPPERCASE_ALPHABET_END },
};

export const shiftChar = (char, shift) => {
  const charIdx = char.charCodeAt();
  if (!isAlphabet(charIdx)) return char;

  const currentCase = checkCharCase(charIdx);
  const { start, end } = caseMap[currentCase];
  const shiftRemainder = shift % ALPHABET_LENGTH;

  if (charIdx + shiftRemainder > end) {
    const currentShift = charIdx + shiftRemainder - end;
    return String.fromCharCode(start + currentShift);
  }
  if (charIdx + shiftRemainder <= start) {
    const currentShift = charIdx - start + shiftRemainder;
    return String.fromCharCode(end + currentShift);
  }
  return String.fromCharCode(charIdx + shiftRemainder);
};

export default (inputText, shift = 1) => inputText
  .split('')
  .map((char) => shiftChar(char, shift))
  .join('');
