"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = sort;

var _react = require("react");

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
  return function (_Component) {
    _inherits(SortTable, _Component);

    function SortTable(props) {
      _classCallCheck(this, SortTable);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _this.toggleSortOrder = function (order, column) {
        var _this$state = _this.state,
            sortOrder = _this$state.sortOrder,
            data = _this$state.data,
            oldData = _this$state.oldData;

        var ascend_sort = function ascend_sort(key) {
          return function (a, b) {
            return a.key - b.key;
          };
        };
        var descend_sort = function descend_sort(key) {
          return function (a, b) {
            return b.key - a.key;
          };
        };
        if (sortOrder === order) {
          // 切换为未排序状态
          order = "";
        }
        if (!oldData) {
          oldData = data.concat();
        }
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
        _this.setState({
          sortOrder: order,
          data: data,
          oldData: oldData
        });
      };

      _this.state = {
        sortOrder: "",
        data: _this.props.data
      };
      return _this;
    }

    SortTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        this.setState({
          sortOrder: "",
          data: nextProps.data,
          oldData: nextProps.data.concat()
        });
      }
    };

    SortTable.prototype.renderColumnsDropdown = function renderColumnsDropdown(columns) {
      var _this2 = this;

      var sortOrder = this.state.sortOrder;

      var prefixCls = this.props.prefixCls || "bee-table";
      return columns.map(function (originColumn) {
        var column = _extends({}, originColumn);
        var sortButton = void 0;
        if (column.sorter) {
          var isAscend = sortOrder === "ascend";
          var isDescend = sortOrder === "descend";
          sortButton = _react2["default"].createElement(
            "div",
            { className: prefixCls + "-column-sorter" },
            _react2["default"].createElement(
              "span",
              {
                className: prefixCls + "-column-sorter-up " + (isAscend ? "on" : "off"),
                title: "\u2191",
                onClick: function onClick() {
                  return _this2.toggleSortOrder("ascend", column);
                }
              },
              _react2["default"].createElement(Icon, { type: "uf-triangle-up" })
            ),
            _react2["default"].createElement(
              "span",
              {
                className: prefixCls + "-column-sorter-down " + (isDescend ? "on" : "off"),
                title: "\u2193",
                onClick: function onClick() {
                  return _this2.toggleSortOrder("descend", column);
                }
              },
              _react2["default"].createElement(Icon, { type: "uf-triangle-down" })
            )
          );
        }
        column.title = _react2["default"].createElement(
          "span",
          null,
          column.title,
          sortButton
        );
        return column;
      });
    };

    SortTable.prototype.render = function render() {
      var columns = this.renderColumnsDropdown(this.props.columns.concat());
      return _react2["default"].createElement(Table, _extends({}, this.props, { columns: columns, data: this.state.data }));
    };

    return SortTable;
  }(_react.Component);
}
module.exports = exports["default"];