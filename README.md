# Typescript solutions to Cracking the Coding Interview

These are solutions and associated unit tests for the questions in Cracking the
Coding Interview 6th edition using Typescript features. These solutions
specifically take advantage of Typescript and require the latest Node.js
(>= v12.0.0) to work properly. As not all Typescript
features are available in V8 yet babel is being used to fill in the gaps.

### Setup the project

Once downloaded ensure that Node.js is installed and run the following commands
in this directory:

```bash
npm install
```

### Running unit tests

The solutions are demonstrated by a set of unit tests which use the Mocha unit
test framework and Chai as an assertions library. These tests can be executed
at any time with:

```bash
npm test
```

As part of the unit tests ESLint will also be run against all files to ensure
that the Typescript is valid and follows best practice.

### Linting source code

While executing ESLint by itself is not necessary (as it runs as part of the
unit test execution) you can choose to run it with:

```bash
npm run lint
```

### Dependencies

This implementation of the solutions requires the following dependencies:

- Node.js >= v12.0.0
- npm >= v8
- Mocha (installed via npm)
- ts-mocha (installed via npm)
- Chai (installed via npm)
- Typescript (installed via npm)
- Eslint (installed via npm)

### References

- [Book website](https://www.crackingthecodinginterview.com/)
