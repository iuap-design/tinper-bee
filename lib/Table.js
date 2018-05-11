"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Table = function (_React$PureComponent) {
  _inherits(Table, _React$PureComponent);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  Table.prototype.render = function render() {
    return _react2["default"].createElement(
      "table",
      { className: "table table-bordered" },
      _react2["default"].createElement(
        "thead",
        null,
        _react2["default"].createElement(
          "tr",
          null,
          _react2["default"].createElement(
            "th",
            null,
            "#"
          ),
          _react2["default"].createElement(
            "th",
            null,
            "First Name"
          ),
          _react2["default"].createElement(
            "th",
            null,
            "Last Name"
          ),
          _react2["default"].createElement(
            "th",
            null,
            "Username"
          )
        )
      ),
      _react2["default"].createElement(
        "tbody",
        null,
        _react2["default"].createElement(
          "tr",
          null,
          _react2["default"].createElement(
            "th",
            { scope: "row" },
            "1"
          ),
          _react2["default"].createElement(
            "td",
            null,
            "Mark"
          ),
          _react2["default"].createElement(
            "td",
            null,
            "Otto"
          ),
          _react2["default"].createElement(
            "td",
            null,
            "@mdo"
          )
        ),
        _react2["default"].createElement(
          "tr",
          null,
          _react2["default"].createElement(
            "th",
            { scope: "row" },
            "2"
          ),
          _react2["default"].createElement(
            "td",
            null,
            "Jacob"
          ),
          _react2["default"].createElement(
            "td",
            null,
            "Thornton"
          ),
          _react2["default"].createElement(
            "td",
            null,
            "@fat"
          )
        ),
        _react2["default"].createElement(
          "tr",
          null,
          _react2["default"].createElement(
            "th",
            { scope: "row" },
            "3"
          ),
          _react2["default"].createElement(
            "td",
            null,
            "Larry"
          ),
          _react2["default"].createElement(
            "td",
            null,
            "the Bird"
          ),
          _react2["default"].createElement(
            "td",
            null,
            "@twitter"
          )
        )
      )
    );
  };

  return Table;
}(_react2["default"].PureComponent);

exports["default"] = Table;
module.exports = exports["default"];