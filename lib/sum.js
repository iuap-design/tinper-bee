"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = sum;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function sum(Table) {
  return function (_React$Component) {
    _inherits(SumTable, _React$Component);

    //无状态
    function SumTable(props) {
      _classCallCheck(this, SumTable);

      //array , tree
      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.getNodeItem = function (array, newArray) {
        array.forEach(function (da, i) {
          if (da.children) {
            _this.getNodeItem(da.children, newArray);
          } else {
            newArray.push(da);
          }
        });
      };

      _this.getTableType = function () {
        var columns = _this.props.columns;

        var type = "array";
        columns.find(function (da, i) {
          if (da.children) {
            type = "tree";
            return type;
          }
        });
        return type;
      };

      _this.addSumData = function () {
        var _this$props = _this.props,
            _this$props$data = _this$props.data,
            data = _this$props$data === undefined ? [] : _this$props$data,
            _this$props$columns = _this$props.columns,
            columns = _this$props$columns === undefined ? [] : _this$props$columns;

        var sumdata = {},
            newColumns = [],
            newData = [];
        if (!Array.isArray(columns)) {
          console.log("columns type is error !");return;
        }
        var type = _this.getTableType();
        if (type == 'tree') {
          _this.getNodeItem(columns, newColumns);
        } else {
          newColumns = columns;
        }
        //返回一个新的数据
        newData = data.slice();
        newColumns.forEach(function (column, index) {
          sumdata[column.dataIndex] = "";
          if (column.sumCol) {
            var count = 0;
            data.forEach(function (da, i) {

              var _num = parseFloat(da[column.key]);
              //排查字段值为NAN情况
              if (_num == _num) {
                count += _num;
              }
            });
            sumdata[column.dataIndex] = (0, _utils.DicimalFormater)(count, 2);
          }
          if (index == 0) {
            sumdata[column.dataIndex] = "合计 " + sumdata[column.dataIndex];
          }
        });

        newData.push(sumdata);
        return newData;
      };

      _this.tableType = "array";
      return _this;
    }

    /**
     * 获取当前的表格类型。
     * 
     */


    SumTable.prototype.render = function render() {
      return _react2["default"].createElement(Table, _extends({}, this.props, {
        columns: this.props.columns,
        showSum: true,
        data: this.addSumData()
      }));
    };

    return SumTable;
  }(_react2["default"].Component);
}
module.exports = exports["default"];