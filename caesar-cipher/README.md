# Caesar cipher CLI tool

**CLI tool that encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift, mandatory option, integer value
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode, mandatory option

Example call:

```
$ node caesar-cipher-cli -s 7 -a encode -i input.txt -o output.txt
```

---

### 1. Install dependencies:

```
$ npm install
```

### 2. Install tool:

```
$ npm publish --dry-run
$ npm link
```

---
