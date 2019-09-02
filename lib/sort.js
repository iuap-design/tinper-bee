'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = sort;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * 参数：prefixCls，默认bee-table,用于设置图标的样式
 * @param {*} Table
 * @param {*} Icon
 */
function sort(Table, Icon) {
  var _class, _temp, _initialiseProps;

  var IconType = [{
    'type': 'flat',
    'icon': 'uf-symlist',
    'order': 'flatscend'
  }, {
    'type': 'up',
    'icon': 'uf-sortup',
    'order': 'ascend'
  }, {
    'type': 'down',
    'icon': 'uf-sortdown',
    'order': 'descend'
  }];

  return _temp = _class = function (_Component) {
    _inherits(SortTable, _Component);

    function SortTable(props) {
      _classCallCheck(this, SortTable);

      var _this2 = _possibleConstructorReturn(this, _Component.call(this, props));

      _initialiseProps.call(_this2);

      var flatColumns = [];
      _this2._toFlatColumn(props.columns, -1, flatColumns);
      _this2.state = { data: _this2.props.data, columns: props.columns, flatColumns: flatColumns };

      return _this2;
    }

    //默认是前端排序，值为true为后端排序
    SortTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {

      if (nextProps.data !== this.props.data) {
        this.setState({
          data: nextProps.data,
          oldData: nextProps.data.concat()
        });
      }
      if (nextProps.columns !== this.props.columns) {
        var flatColumns = [];
        this._toFlatColumn(nextProps.columns, -1, flatColumns);
        this.setState({ columns: nextProps.columns, flatColumns: flatColumns });
      }
    };
    /**
     *column扁平化处理，适应多表头避免递归操作
     *
     */


    SortTable.prototype._toFlatColumn = function _toFlatColumn(columns) {
      var parentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var flatColumns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      var _this = this;
      var children = [];
      // const flatColumns = _this.state;
      columns.forEach(function (item, index) {
        item.parentIndex = parentIndex;
        children = item.children;
        flatColumns.push(item);
        if (children) {
          item.children = [];
          _this._toFlatColumn(children, flatColumns.length - 1, flatColumns);
        }
      });
    };

    /**
     * column 当前的排序的列
     * 当有的列不排序时，将该列的orderNum置为‘’，并动态的修改其他列的orderNum。
     */

    /**
     * 获取排序字段
     */


    /**
     * pre：前一条数据
     * after:后一条数据
     * orderType:升序、降序
     */

    /**
     * 多列排序 先排order为1的，其他的基于已排序的数据排
     */

    //每个column上添加orderNum属性，不排序时为“”。
    //点击时orderNum有值则不重新赋值，如果没有值，则取当前column下的有oderNum的length值。并排序
    //点击置为“”时，动态的设置相关column的orderNum值。并排序


    // 默认的比较函数,即字符串比较函数

    // 数值比较函数


    // 中文比较函数，按拼音排序


    SortTable.prototype._flatToColumn = function _flatToColumn(flatColumns) {
      var colLen = flatColumns.length;
      var parentIndex = void 0,
          rsColumns = [];
      //每次渲染需要将父类的children置空，避免重复
      flatColumns.forEach(function (item) {
        if (item.children) {
          item.children = [];
        }
      });
      for (var i = colLen - 1; i >= 0; i--) {
        parentIndex = flatColumns[i].parentIndex;
        if (parentIndex >= 0) {
          flatColumns[parentIndex].children.unshift(flatColumns[i]);
        }
      }
      rsColumns = flatColumns.filter(function (item) {
        return item.parentIndex == -1;
      });
      return rsColumns;
    };

    SortTable.prototype.render = function render() {
      var columns = this.renderColumnsDropdown(this.state.flatColumns.concat());
      return _react2["default"].createElement(Table, _extends({}, this.props, { columns: columns, data: this.state.data }));
    };

    return SortTable;
  }(_react.Component), _class.defaultProps = { sort: { mode: "single", backSource: false } }, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.getOrderNum = function () {
      var orderNum = 0;
      //todo 1
      _this3.state.flatColumns.forEach(function (item, index) {
        if (item.order == "ascend" || item.order == "descend") {
          orderNum++;
        }
      });
      return orderNum ? orderNum : 1;
    };

    this.changeOrderNum = function (column) {
      var flatColumns = _this3.state.flatColumns;
      //todo 2

      flatColumns.forEach(function (col) {
        if (col.orderNum > column.orderNum) {
          col.orderNum--;
        }
        if (column.key == col.key) {
          col.orderNum = "";
        }
      });
      _this3.setState({ flatColumns: flatColumns });
    };

    this.getOrderCols = function (columns) {
      var orderCols = [];
      //todo 3
      columns.forEach(function (item) {
        if (item.order == "ascend" || item.order == "descend") {
          orderCols.push({
            order: item.order,
            field: item.dataIndex,
            orderNum: item.orderNum
          });
        }
      });
      return orderCols;
    };

    this._sortBy = function (pre, after, orderCols, orderColslen, currentIndex) {
      var currentCol = orderCols[currentIndex];
      var preKey = pre[currentCol.key];
      var afterKey = after[currentCol.key];
      var colSortFun = currentCol.sorter;
      if (typeof colSortFun !== 'function') {
        colSortFun = function colSortFun() {
          return preKey - afterKey;
        };
      }
      if (preKey == afterKey && currentIndex + 1 <= orderColslen) {
        return _this3._sortBy(pre, after, orderCols, orderColslen, currentIndex + 1);
      }
      if (currentCol.order == "ascend") {
        return colSortFun(pre, after);
      } else {
        return -colSortFun(pre, after);
      }
    };

    this.multiSort = function (columns) {
      var _state = _this3.state,
          data = _state.data,
          oldData = _state.oldData;

      var self = _this3;
      var orderCols = {},
          orderColslen = 0;
      //todo 4
      columns.forEach(function (item) {
        if (item.orderNum) {
          orderColslen++;
          orderCols[item.orderNum] = item;
        }
      });
      if (orderColslen > 0) {
        data = data.sort(function (a, b) {
          return self._sortBy(a, b, orderCols, orderColslen, 1);
        });
      } else {
        data = oldData.concat();
      }
      return data;
    };

    this.toggleSortOrder = function (order, column) {
      var _state2 = _this3.state,
          data = _state2.data,
          oldData = _state2.oldData,
          flatColumns = _state2.flatColumns;
      var sort = _this3.props.sort;

      var seleObj = void 0;
      if (!oldData) {
        oldData = data.concat();
      }
      var sortCol = void 0;
      //单列排序，清空其他列的排序
      if (sort.mode == "single") {
        //todo 5
        flatColumns.forEach(function (da) {
          if (da.key == column.key) {
            seleObj = da;
          } else {
            if (da.order) {
              da.order = "flatscend";
            }
          }
        });
        seleObj.order = order;
        sortCol = [{ order: order, field: seleObj.dataIndex }];
        //通过后端请求
        if (sort.backSource && typeof sort.sortFun === "function") {
          //获取排序的字段和方式
          sort.sortFun(sortCol);
        } else {
          if (order === "ascend") {
            data = data.sort(function (a, b) {
              return column.sorter(a, b);
            });
          } else if (order === "descend") {
            data = data.sort(function (a, b) {
              return column.sorter(b, a);
            });
          } else {
            data = oldData.concat();
          }
          typeof sort.sortFun === "function" && sort.sortFun(sortCol, data);
        }
      } else {
        seleObj = flatColumns.find(function (da) {
          return da.key == column.key;
        });
        seleObj.order = order;
        if (order === "flatscend") {
          _this3.changeOrderNum(column);
        }
        if (!seleObj.orderNum && (order == "ascend" || order == "descend")) {
          seleObj.orderNum = _this3.getOrderNum();
        }
        sortCol = _this3.getOrderCols(flatColumns);
        if (sort.backSource && typeof sort.sortFun === "function") {
          sort.sortFun(sortCol);
        } else {
          data = _this3.multiSort(flatColumns);
          typeof sort.sortFun === "function" && sort.sortFun(sortCol, data);
        }
      }
      _this3.setState({ data: data, oldData: oldData, flatColumns: flatColumns });
    };

    this.renderColumnsDropdown = function (columns) {
      var tempColumns = [],
          rsColumns = [];
      tempColumns = columns.map(function (originColumn) {
        var column = _extends({}, originColumn);
        return _this3.sortColumn(column);
      });
      rsColumns = _this3._flatToColumn(tempColumns);
      return rsColumns;
    };

    this.sortColumn = function (column) {
      var mode = _this3.props.sort.mode;

      var prefixCls = "bee-table";
      var iconTypeIndex = 0;
      var sorterClass = "flat";

      if (column.order === "ascend") {
        iconTypeIndex = 1;
        sorterClass = "up";
      } else if (column.order === "descend") {
        iconTypeIndex = 2;
        sorterClass = "down";
      }

      var sortButton = void 0;

      // sorter和sortEnable均可触发排序,且sorter优先级更高
      if (column.sorter || column.sortEnable) {
        //大于0说明不是升序就是降序，判断orderNum有没有值，没有值赋值
        if (column.sortEnable && !column.sorter) {
          switch (column.fieldType) {
            case 'number':
              {
                column.sorter = _this3.numberSortFn(column.dataIndex);
                break;
              }
            case 'stringChinese':
              {
                column.sorter = _this3.chineseSortFn(column.dataIndex);
                break;
              }
            default:
              {
                column.sorter = _this3.defaultSortFn(column.dataIndex);
                break;
              }
          }
        }
        if (iconTypeIndex > 0 && !column.orderNum && mode == "multiple") {
          column.orderNum = _this3.getOrderNum();
        }
        sortButton = _react2["default"].createElement(
          'div',
          { className: prefixCls + '-column-sorter' },
          _react2["default"].createElement(
            'span',
            { className: prefixCls + '-column-sorter-' + sorterClass, onClick: function onClick() {
                _this3.toggleSortOrder(IconType[iconTypeIndex == 2 ? 0 : iconTypeIndex + 1].order, column);

                if (column.sorterClick) {
                  column.sorterClick(column, IconType[iconTypeIndex].type);
                }
              } },
            _react2["default"].createElement('i', { className: 'uf ' + IconType[iconTypeIndex].icon }),
            _react2["default"].createElement(
              'span',
              null,
              column.orderNum
            )
          )
        );
      }
      column.title = _react2["default"].createElement(
        'span',
        null,
        column.title,
        sortButton
      );
      return column;
    };

    this.defaultSortFn = function (key) {
      return function (a, b) {
        return a[key] >= b[key] ? 1 : -1;
      };
    };

    this.numberSortFn = function (key) {
      return function (a, b) {
        var numberA = parseFloat(a[key]);
        var numberB = parseFloat(b[key]);
        return numberA >= numberB ? 1 : -1;
      };
    };

    this.chineseSortFn = function (key) {
      return function (a, b) {
        return a[key].localeCompare(b[key], 'zh-Hans-CN', { sensitivity: 'accent' });
      };
    };
  }, _temp;
}
module.exports = exports['default'];