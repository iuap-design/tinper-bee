"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = bigData;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  rowsInView: _propTypes2["default"].number.isRequired
};
var defaultProps = {
  data: undefined,
  height: 40, //默认行高
  rowsInView: 25
};

function bigData(Table) {
  return function (_Component) {
    _inherits(BigData, _Component);

    function BigData(props) {
      _classCallCheck(this, BigData);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _this.state = {
        currentIndex: 0,
        scrollLeft: 0,
        scrollTop: 0
      };

      _this.cachedRowHeight = [];
      _this.lastScrollTop = 0;
      return _this;
    }
    /**
     *获取数据区高度 
     * 
     * 
    **/

    BigData.prototype.getContentHeight = function getContentHeight() {
      if (!this.props.data) return 0;
      return this.getSumHeight(0, this.props.data.length);
    };

    BigData.prototype.getSumHeight = function getSumHeight(start, end) {
      var rowHeight = this.props.rowHeight;

      var height = 0;
      for (var i = start; i < end; i++) {
        height += this.cachedRowHeight[i] || rowHeight;
      }
      return height;
    };

    BigData.prototype.getData = function getData() {};

    BigData.prototype.render = function render() {
      return _react2["default"].createElement(Table, _extends({}, this.props, { data: this.getData }));
    };

    return BigData;
  }(_react.Component);
  BigData.defaultProps = defaultProps;
  BigData.propTypes = propTypes;
}
module.exports = exports["default"];