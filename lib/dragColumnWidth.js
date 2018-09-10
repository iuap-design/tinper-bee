'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = dragWidthColumn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * 参数: 列拖拽
 * @param {*} Table
 */
// 0、定义一个拖拽dom
// 1、当移动到表头可以显示当前操作列的move图标。
//  2、添加start、move事件、drop事件
function dragWidthColumn(Table) {

  return function (_Component) {
    _inherits(DragWidthColumn, _Component);

    function DragWidthColumn(props) {
      _classCallCheck(this, DragWidthColumn);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _this.setColumOrderByIndex = function (_column) {
        _column.forEach(function (da, i) {
          da.dragIndex = i;
          da.drgHover = false;
        });
        return _column;
      };

      _this.onDragStart = function (event, data) {
        if (_this.props.onDragStart) {
          _this.props.onDragStart(event, data);
        }
      };

      _this.onDragOver = function (event, data) {
        if (_this.props.onDragOver) {
          _this.props.onDragOver(event, data);
        }
      };

      _this.onDragEnter = function (event, data) {};

      _this.onDrop = function (event, data) {};

      _this.getTarget = function (evt) {
        return evt.target || evt.srcElement;
      };

      _this.state = {
        columns: _this.setColumOrderByIndex(props.columns)
      };
      return _this;
    }

    DragWidthColumn.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (nextProps.columns != this.props.columns) {
        this.setState({
          columns: this.setColumOrderByIndex(nextProps.columns)
        });
      }
    };

    DragWidthColumn.prototype.render = function render() {
      var _props = this.props,
          data = _props.data,
          dragborder = _props.dragborder,
          draggable = _props.draggable,
          className = _props.className,
          columns = _props.columns,
          onDragStart = _props.onDragStart,
          onDragEnter = _props.onDragEnter,
          onDragOver = _props.onDragOver,
          onDrop = _props.onDrop,
          others = _objectWithoutProperties(_props, ['data', 'dragborder', 'draggable', 'className', 'columns', 'onDragStart', 'onDragEnter', 'onDragOver', 'onDrop']);

      var key = new Date().getTime();
      return _react2["default"].createElement(Table, _extends({}, others, {
        columns: this.state.columns,
        data: data,
        className: className + ' u-table-drag-border',
        onDragStart: this.onDragWidthStart,
        onDragOver: this.onDragWidthOver,
        onDrop: this.onDropWidth,
        onDragEnter: this.onDragWidthEnter,
        draggable: draggable
        // dragborder={dragborder}
        , dragborder: false,
        dragborderKey: key
      }));
    };

    return DragWidthColumn;
  }(_react.Component);
}
module.exports = exports['default'];