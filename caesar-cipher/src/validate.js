import fs from 'fs';

const checkFileAccess = (path, errors) => {
  if (path !== undefined) {
    try {
      fs.accessSync(path);
    } catch {
      errors.push(`Error: No access to ${path}`);
    }
  }
};

const validate = (shift, action, input, output) => {
  const errors = [];
  if (shift === undefined) {
    errors.push("Error: required option '-s, --shift <shift>' not specified");
  }
  if (!Number.isInteger(Number(shift))) {
    errors.push("Error: required option '-s, --shift <shift>', value must be integer");
  }
  if (action === undefined) {
    errors.push("Error: required option '-a, --action <action>' not specified");
  }
  if (!(action === 'decode' || action === 'encode')) {
    errors.push("Error: action option must be 'encode' or 'decode'");
  }

  checkFileAccess(input, errors);
  checkFileAccess(output, errors);

  if (errors.length > 0) {
    process.stderr.write(errors[0]);
    process.exit(1);
  }
};

export default validate;
