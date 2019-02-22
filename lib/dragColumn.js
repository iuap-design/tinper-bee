'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports["default"] = dragColumn;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var cloneDeep = require('lodash.clonedeep');
/**
 * 参数: 列拖拽
 * @param {*} Table
 */

function dragColumn(Table) {

    return function (_Component) {
        _inherits(DragColumn, _Component);

        function DragColumn(props) {
            _classCallCheck(this, DragColumn);

            var _this = _possibleConstructorReturn(this, _Component.call(this, props));

            _this.setColumOrderByIndex = function (_column) {
                _column.forEach(function (da, i) {
                    da.dragIndex = i;
                    da.drgHover = false;
                });
                return _column;
            };

            _this.onDrop = function (event, data) {
                var dragSource = data.dragSource,
                    dragTarg = data.dragTarg;
                var columns = _this.state.columns;

                var sourceIndex = -1,
                    targetIndex = -1;

                sourceIndex = columns.findIndex(function (da, i) {
                    return da.key == dragSource.key;
                });
                targetIndex = columns.findIndex(function (da, i) {
                    return da.key == dragTarg.key;
                });
                // for (let index = 0; index < columns.length; index++) {
                //   const da = columns[index];
                //   if(da.key === dragSource.key){
                //     columns[index] = dragTargColum; 
                //   }
                //   if(da.key === dragTarg.key){
                //     columns[index] = dragSourceColum;
                //   }
                // }
                // 向前移动
                if (targetIndex < sourceIndex) {
                    targetIndex = targetIndex + 1;
                }
                columns.splice(targetIndex, 0, columns.splice(sourceIndex, 1)[0]);
                _this.setState({
                    columns: cloneDeep(columns)
                });
                if (_this.props.onDrop) {
                    _this.props.onDrop(event, data, columns);
                }
            };

            _this.getTarget = function (evt) {
                return evt.target || evt.srcElement;
            };

            _this.state = {
                columns: _this.setColumOrderByIndex(props.columns)
            };
            return _this;
        }

        DragColumn.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            if (nextProps.columns != this.props.columns) {
                this.setState({
                    columns: this.setColumOrderByIndex(nextProps.columns)
                });
            }
        };

        DragColumn.prototype.cloneDeep = function cloneDeep(obj) {
            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || Object.keys(obj).length === 0) {
                return obj;
            }
            var resultData = {};
            return this.recursion(obj, resultData);
        };

        DragColumn.prototype.recursion = function (_recursion) {
            function recursion(_x) {
                return _recursion.apply(this, arguments);
            }

            recursion.toString = function () {
                return _recursion.toString();
            };

            return recursion;
        }(function (obj) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            for (key in obj) {
                if (_typeof(obj[key]) == 'object' && Object.keys(obj[key].length > 0)) {
                    data[key] = recursion(obj[key]);
                } else {
                    data[key] = obj[key];
                }
            }
            return data;
        });

        DragColumn.prototype.render = function render() {
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
                onDragStart: this.onDragStart,
                onDragOver: this.onDragOver,
                onDrop: this.onDrop,
                onDragEnter: this.onDragEnter,
                draggable: draggable,
                dragborder: dragborder
                // dragborder={false}
                , dragborderKey: key
            }));
        };

        return DragColumn;
    }(_react.Component);
}
module.exports = exports['default'];