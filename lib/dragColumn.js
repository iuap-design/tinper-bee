"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = dragColumn;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeCheckbox = require("bee-checkbox");

var _beeCheckbox2 = _interopRequireDefault(_beeCheckbox);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _beePopover = require("bee-popover");

var _beePopover2 = _interopRequireDefault(_beePopover);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// import createColResizable from '../resiztable'
// import Table from './Table';
/**
 * 参数: 列拖拽
 * @param {*} Table
 */

function dragColumn(Table) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function (_Component) {
    _inherits(dragColumn, _Component);

    function dragColumn(props) {
      _classCallCheck(this, dragColumn);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _initialiseProps.call(_this);

      var columns = props.columns;

      _this.dragBorderObj = { startScreenX: 0, endScreenX: 0 };
      _this.mouse = false;
      _this.setColumOrderByIndex(columns);
      return _this;
    }

    dragColumn.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (nextProps.columns != this.props.columns) {
        this.setColumOrderByIndex();
      }
    };

    // componentDidMount() {
    //   const domElemTableList = document.querySelectorAll('table');
    //    createColResizable(domElemTableList[0], {
    //     liveDrag: true
    //   });
    //   createColResizable(domElemTableList[1], {
    //     liveDrag: false,
    //     headerOnly: false
    //   });
    // }

    dragColumn.prototype.render = function render() {
      var _props = this.props,
          data = _props.data,
          dragborder = _props.dragborder,
          draggable = _props.draggable,
          className = _props.className;
      var columns = this.state.columns;


      return _react2["default"].createElement(Table, _extends({}, this.props, { columns: columns, data: data, className: className + " u-table-drag-border",
        onDragStart: this.onDragStart, onDragOver: this.onDragOver, onDrop: this.onDrop,
        onDragEnter: this.onDragEnter,
        draggable: draggable,

        dragborder: true,
        onMouseDown: this.onMouseDown,
        onMouseMove: this.onMouseMove,
        onMouseUp: this.onMouseUp
      }));
    };

    return dragColumn;
  }(_react.Component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.setColumOrderByIndex = function (columns) {
      var _column = [];
      _extends(_column, columns);
      _column.forEach(function (da, i) {
        da.dragIndex = i;
        da.drgHover = false;
      });
      _this2.state = {
        columns: _column
      };
    };

    this.onDragStart = function (event, data) {};

    this.onDragOver = function (event, data) {};

    this.onDragEnter = function (event, data) {
      var _columns = _this2.state.columns;

      var columns = [];
      _extends(columns, _columns);
      columns.forEach(function (da) {
        return da.drgHover = false;
      });
      var current = columns.find(function (da) {
        return da.key == data.key;
      });
      current.drgHover = true;
      _this2.setState({
        columns: columns
      });
    };

    this.onDrop = function (event, data) {
      var columns = _this2.state.columns;

      var id = event.dataTransfer.getData("Text");
      var objIndex = columns.findIndex(function (_da, i) {
        return _da.key == id;
      });
      var targetIndex = columns.findIndex(function (_da, i) {
        return _da.key == data.key;
      });

      columns.forEach(function (da, i) {
        da.drgHover = false;
        if (da.key == id) {
          //obj
          da.dragIndex = targetIndex;
        }
        if (da.key == data.key) {
          //targetObj
          da.dragIndex = objIndex;
        }
      });
      var _columns = (0, _util.sortBy)(columns, function (da) {
        return da.dragIndex;
      });
      _this2.setState({
        columns: _columns
      });
    };

    this.onMouseDown = function (event, data) {
      _this2.mouse = true;
      _this2.dragBorderObj.startScreenX = event.screenX;
    };

    this.onMouseMove = function (event, data) {
      if (!_this2.mouse) return;
      var endx = event.screenX - _this2.dragBorderObj.startScreenX;
      var _columns = _this2.state.columns;

      var columns = [];
      _extends(columns, _columns);
      // let currentIndex = columns.findIndex((_da,i)=>_da.key == data.key);
      // currentIndex = currentIndex==0?currentIndex:(currentIndex-1);

      var currObj = columns.find(function (_da, i) {
        return _da.key == data.key;
      });
      if (!currObj) return;
      currObj.width = currObj.width ? currObj.width + endx : endx;
      _this2.setState({
        columns: columns
      });
    };

    this.getTarget = function (evt) {
      return evt.target || evt.srcElement;
    };

    this.onMouseUp = function (event, data) {
      var endx = event.screenX - _this2.dragBorderObj.startScreenX;
      _this2.mouse = false;
    };
  }, _temp;
}
module.exports = exports["default"];