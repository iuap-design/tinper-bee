'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./build/tinper-bee.min.js');
} else {
  module.exports = require('./build/tinper-bee.js');
}
