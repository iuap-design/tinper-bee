"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = sum;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//创建新列存放  “合计”  字段
var columns2 = {
  title: "合计",
  key: "showSum",
  dataIndex: "showSum"
};

function sum(Table) {
  return function (_React$Component) {
    _inherits(SumTable, _React$Component);

    //无状态
    function SumTable(props) {
      _classCallCheck(this, SumTable);

      //array , tree
      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.currentFooter = function () {
        var data_2 = _this.props.data;
        var columns_sum = _this.props.columns.concat();
        var sumCol_index = void 0;
        //用一个对象存储合计数据，这里合计对象的属性对应每列字段
        for (var i = 0; i < columns_sum.length; i++) {
          if (columns_sum[i].sumCol) {
            sumCol_index = columns_sum[i].dataIndex;
            break;
          }
        }
        var obj = {};
        obj[sumCol_index] = 0;
        if (Array.isArray(data_2)) {
          for (var _i = 0; _i < data_2.length; _i++) {
            if (typeof data_2[_i][sumCol_index] == "number" || !isNaN(data_2[_i][sumCol_index])) {
              obj[sumCol_index] -= -data_2[_i][sumCol_index];
            } else {
              obj[sumCol_index] = "";
            }
          }
        }
        obj.key = "sumData";
        obj.showSum = "合计";
        obj = [obj];
        //将设置的和用户传入的合并属性
        columns_sum[0] = _extends({}, columns_sum[0], columns2);
        //除去列为特殊渲染的，避免像a标签这种html代码写入到合计中
        columns_sum.map(function (item, index) {
          if (typeof item.render == "function" && !item.sumCol) {
            item.render = "";
          }
          return item;
        });
        return _react2["default"].createElement(Table, _extends({}, _this.props, { loading: false, footerScroll: true, showHeader: false, columns: columns_sum, data: obj }));
      };

      _this.currentTreeFooter = function () {
        var _this$props = _this.props,
            columns = _this$props.columns,
            data = _this$props.data;

        var _columns = [];
        _this.getNodeItem(columns, _columns);
        var _countObj = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var column = _step.value;

            if (typeof column.render == "function" && !column.sumCol) {
              column.render = "";
            }
            if (column.sumCol) {
              var count = 0;
              data.forEach(function (da, i) {
                var _num = da[column.key];
                count += _num;
              });
              _countObj[column.key] = count;
            }
          };

          for (var _iterator = _columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _sumArray = [_extends({ key: "sumData", showSum: "合计" }, _countObj)];
        columns[0] = _extends({}, columns[0], columns2);
        return _react2["default"].createElement(Table, _extends({}, _this.props, { bordered: false, loading: false, footerScroll: true, showHeader: false, columns: columns, data: _sumArray }));
      };

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

      _this.setFooterRender = function () {
        var columns = _this.props.columns;

        if (!Array.isArray(columns)) {
          console.log("data type is error !");return;
        }
        var type = _this.getTableType();
        if (type == "tree") {
          return _this.currentTreeFooter();
        } else {
          return _this.currentFooter();
        }
      };

      _this.tableType = "array";
      return _this;
    }

    SumTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var columns = this.props.columns;

      if (columns != nextProps.columns) {
        this.setFooterRender();
      }
    };

    //合计数字列,并将计算所得数据存储到一个obj对象中


    /**
     * 获取当前的表格类型。
     * 
     */


    SumTable.prototype.render = function render() {
      return _react2["default"].createElement(Table, _extends({}, this.props, {
        footerScroll: true,
        columns: this.props.columns,
        data: this.props.data,
        footer: this.setFooterRender
      }));
    };

    return SumTable;
  }(_react2["default"].Component);
}
module.exports = exports["default"];