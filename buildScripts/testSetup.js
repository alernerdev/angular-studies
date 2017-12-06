// this file is not transpiled, must use CommonJS and ES 5

// register babel to transpile code before tests are run
require('babel-register')();

// disable webpack features that Mocha doesnt understands
// this is because we have included index.css in index.js
// so webpack understands it, mocha does not
require.extensions['.css'] = function() {};