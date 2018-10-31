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
  var _class, _temp;

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

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _this.getOrderNum = function () {
        var orderNum = 0;
        _this.state.columns.forEach(function (item, index) {
          if (item.order == 'ascend' || item.order == 'descend') {
            orderNum++;
          }
        });
        return orderNum ? orderNum : 1;
      };

      _this.changeOrderNum = function (column) {
        var columns = _this.state.columns;

        columns.forEach(function (col) {
          if (col.orderNum > column.orderNum) {
            col.orderNum--;
          }
          if (column.key == col.key) {
            col.orderNum = '';
          }
        });
        _this.setState({ columns: columns });
      };

      _this.getOrderCols = function (columns) {
        var orderCols = [];
        columns.forEach(function (item) {
          if (item.order == 'ascend' || item.order == 'descend') {
            orderCols.push({ order: item.order,
              field: item.dataIndex,
              orderNum: item.orderNum
            });
          }
        });
        return orderCols;
      };

      _this._sortBy = function (pre, after, orderCols, orderColslen, currentIndex) {
        var preKey = pre[orderCols[currentIndex].key];
        var afterKey = after[orderCols[currentIndex].key];
        if (preKey == afterKey && currentIndex + 1 <= orderColslen) {
          return _this._sortBy(pre, after, orderCols, orderColslen, currentIndex + 1);
        }
        if (orderCols[currentIndex].order == 'ascend') {
          return preKey - afterKey;
        } else {
          return afterKey - preKey;
        }
      };

      _this.multiSort = function (columns) {
        var _this$state = _this.state,
            data = _this$state.data,
            oldData = _this$state.oldData;

        var self = _this;
        var orderCols = {},
            orderColslen = 0;
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

      _this.toggleSortOrder = function (order, column) {
        var _this$state2 = _this.state,
            data = _this$state2.data,
            oldData = _this$state2.oldData,
            columns = _this$state2.columns;
        var sort = _this.props.sort;

        var seleObj = void 0;
        if (!oldData) {
          oldData = data.concat();
        }
        //单列排序，清空其他列的排序
        if (sort.mode == 'single') {
          columns.forEach(function (da) {
            if (da.key == column.key) {
              seleObj = da;
            } else {
              if (da.order) {
                da.order = 'flatscend';
              }
            }
          });
          seleObj.order = order;
          //通过后端请求
          if (sort.backSource && typeof sort.sortFun === "function") {
            //获取排序的字段和方式
            sort.sortFun([{
              order: order,
              field: seleObj.dataIndex
            }]);
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
          }
        } else {
          seleObj = columns.find(function (da) {
            return da.key == column.key;
          });
          seleObj.order = order;
          if (order === "flatscend") {
            _this.changeOrderNum(column);
          }
          if (!seleObj.orderNum && (order == 'ascend' || order == 'descend')) {
            seleObj.orderNum = _this.getOrderNum();
          }
          if (sort.backSource && typeof sort.sortFun === "function") {
            sort.sortFun(_this.getOrderCols(columns));
          } else {
            data = _this.multiSort(columns);
          }
        }
        _this.setState({
          data: data,
          oldData: oldData,
          columns: columns
        });
      };

      _this.renderColumnsDropdown = function (columns) {
        var prefixCls = "bee-table";
        var mode = _this.props.sort.mode;

        return columns.map(function (originColumn) {
          var iconTypeIndex = 0;
          var column = _extends({}, originColumn);
          var sorterClass = 'flat';

          if (column.order === "ascend") {
            iconTypeIndex = 1;
            sorterClass = 'up';
          } else if (column.order === "descend") {
            iconTypeIndex = 2;
            sorterClass = 'down';
          }

          var sortButton = void 0;
          if (column.sorter) {
            //大于0说明不是升序就是降序，判断orderNum有没有值，没有值赋值
            if (iconTypeIndex > 0 && !column.orderNum && mode == 'multiple') {
              column.orderNum = _this.getOrderNum();
            }
            sortButton = _react2["default"].createElement(
              'div',
              { className: prefixCls + '-column-sorter' },
              _react2["default"].createElement(
                'span',
                {
                  className: prefixCls + '-column-sorter-' + sorterClass,
                  onClick: function onClick() {
                    _this.toggleSortOrder(IconType[iconTypeIndex == 2 ? 0 : iconTypeIndex + 1].order, column);

                    if (column.sorterClick) {
                      column.sorterClick(column, IconType[iconTypeIndex].type);
                    }
                  }
                },
                _react2["default"].createElement(Icon, { type: IconType[iconTypeIndex].icon }),
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
        });
      };

      _this.state = {
        data: _this.props.data,
        columns: props.columns
      };
      return _this;
    }

    SortTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        this.setState({
          data: nextProps.data,
          oldData: nextProps.data.concat()
        });
      }
      if (nextProps.columns !== this.props.columns) {
        this.setState({
          columns: nextProps.columns
        });
      }
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


    SortTable.prototype.render = function render() {
      var columns = this.renderColumnsDropdown(this.state.columns.concat());
      return _react2["default"].createElement(Table, _extends({}, this.props, { columns: columns, data: this.state.data }));
    };

    return SortTable;
  }(_react.Component), _class.defaultProps = {
    sort: {
      mode: 'single',
      backSource: false //默认是前端排序，值为true为后端排序
    }
  }, _temp;
}
module.exports = exports['default'];