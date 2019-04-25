'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = newMultiSelect;

var _multiSelect = require('./multiSelect');

var _multiSelect2 = _interopRequireDefault(_multiSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function newMultiSelect(Table, Checkbox) {
  return (0, _multiSelect2["default"])(Table, Checkbox);
}
module.exports = exports['default'];