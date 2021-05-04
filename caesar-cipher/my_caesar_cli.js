const NUMBER_UPPERCASE_ALPHABET_START = 64;
const NUMBER_UPPERCASE_ALPHABET_END = 90;
const NUMBER_DOWNCASE_ALPHABET_START = 96;
const NUMBER_DOWNCASE_ALPHABET_END = 122;
const ALPHABET_LENGTH = 26;

const isAlphabet = (charIdx) => {
  if ((charIdx > 64 && charIdx <= 90) || (charIdx > 96 && charIdx <= 122)) return true;
  return false;
};

const checkCharCase = (charIdx) => {
  if (charIdx > 64 && charIdx <= 90) {
    return 'uppercase';
  } else if (charIdx > 96 && charIdx <= 122) {
    return 'downcase';
  }
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
  return String.fromCharCode(charIdx + shiftRemainder);
};

export default (inputText, shift) => {
  return inputText
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
};
