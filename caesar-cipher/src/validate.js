import fs from 'fs';

const validate = (shift, action, input) => {
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

  if (input !== undefined) {
    try {
      fs.accessSync(input);
    } catch {
      errors.push(`Error: No access to ${input}`);
    }
  }

  if (errors.length > 0) {
    process.stderr.write(errors[0]);
    process.exit(1);
  }
};

export default validate;
