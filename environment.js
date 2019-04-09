'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./build/tinper-bee.js');
} else {
  module.exports = require('./build/tinper-bee.js');
}
