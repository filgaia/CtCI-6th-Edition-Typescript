import lint from 'mocha-eslint';

// Array of paths to lint
// Note: a seperate Mocha test will be run for each path and each file which
// matches a glob pattern
const paths = [
  'src/**/*.ts',
];

// Specify style of output
const options = {
  formatter: 'compact',
  timeout: 10000,
};

// Only display warnings if a test is failing
// options.alwaysWarn = false; // Defaults to true, always show warnings

// Run the tests
lint(paths, options);
