"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = filterColumn;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _beeCheckbox = require("bee-checkbox");

var _beeCheckbox2 = _interopRequireDefault(_beeCheckbox);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * 参数: 过滤表头
 * @param {*} Table
 * @param {*} Popover
 * @param {*} Icon
 */

function filterColumn(Table, Popover) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function (_Component) {
    _inherits(FilterColumn, _Component);

    function FilterColumn(props) {
      _classCallCheck(this, FilterColumn);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _initialiseProps.call(_this);

      var columns = props.columns;

      _this.state = {
        columns: _this.setColumOrderByIndex((0, _utils.ObjectAssign)(columns)),
        showModal: false,
        screenY: 0
      };
      return _this;
    }

    FilterColumn.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (nextProps.columns != this.props.columns) {
        this.setState({
          columns: (0, _utils.ObjectAssign)(nextProps.columns)
        });
      }
      this.setState({
        showModal: false
      });
    };

    FilterColumn.prototype.render = function render() {
      var _props = this.props,
          data = _props.data,
          prefixCls = _props.prefixCls,
          scrollPro = _props.scroll;
      var _state = this.state,
          columns = _state.columns,
          showModal = _state.showModal;


      var _columns = [],
          widthState = 0,
          scroll = scrollPro;
      columns.forEach(function (da) {
        if (da.disable) {
          _columns.push(da);
          if (da.width) {
            widthState++;
          }
        }
      });
      if (_columns.length == widthState) {
        scroll.x = this.getCloumnsScroll(columns);
      }

      var content = _react2["default"].createElement(
        "div",
        { className: prefixCls + "-pop-cont" },
        _react2["default"].createElement(
          "span",
          { className: prefixCls + "-clear-setting", onClick: this.clear },
          "\u6E05\u9664\u8BBE\u7F6E"
        ),
        _react2["default"].createElement(
          "div",
          null,
          this.getCloumItem()
        )
      );

      return _react2["default"].createElement(
        "div",
        { className: prefixCls + "-cont" },
        _react2["default"].createElement(Table, _extends({}, this.props, { columns: _columns, data: data,
          scroll: scroll
          //  scroll={{x:this.getCloumnsScroll(columns)}}
        })),
        _react2["default"].createElement(
          "div",
          { className: prefixCls + "-filter-icon" },
          _react2["default"].createElement(
            Popover,
            {
              id: "filter_column_popover",
              placement: "leftTop",
              content: content,
              show: showModal },
            _react2["default"].createElement(
              "div",
              { className: prefixCls + "-pop-column-filter-cont" },
              _react2["default"].createElement(_beeIcon2["default"], { type: "uf-navmenu", onClick: this.openCloumList })
            )
          )
        )
      );
    };

    return FilterColumn;
  }(_react.Component), _class.defaultProps = {
    prefixCls: "u-table-filter-column"
  }, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.setColumOrderByIndex = function (_column) {
      _column.forEach(function (da) {
        da.checked = true;
        da.disable = true;
      });
      return _column;
    };

    this.checkedColumItemClick = function (da) {
      var checkMinSize = _this2.props.checkMinSize;
      // if(checkMinSize)

      var sum = 0,
          leng = 0;
      _this2.state.columns.forEach(function (da) {
        da.fixed ? "" : leng++;
        !da.fixed && da.checked ? sum++ : "";
      });
      if (sum < checkMinSize && da.checked) {
        return;
      } else {
        if (sum <= 1 && da.checked) return;
      }
      da.checked = da.checked ? false : true;
      da.disable = da.checked ? true : false;
      _this2.setState(_extends({}, _this2.state));
    };

    this.openCloumList = function () {
      _this2.setState({
        showModal: true
      });
    };

    this.getCloumItem = function () {
      var prefixCls = _this2.props.prefixCls;
      var columns = _this2.state.columns;

      return columns.map(function (da, i) {
        if (!da.fixed) {
          return _react2["default"].createElement(
            "div",
            { key: da.key + "_" + i, className: prefixCls + "-pop-cont-item", onClick: function onClick() {
                _this2.checkedColumItemClick(da);
              } },
            _react2["default"].createElement(_beeCheckbox2["default"], { id: da.key, checked: da.checked }),
            _react2["default"].createElement(
              "span",
              null,
              da.title
            )
          );
        }
      });
    };

    this.clear = function () {
      var columns = _this2.state.columns;

      columns.forEach(function (da) {
        da.checked = true;
        da.disable = true;
      });
      _this2.setState(_extends({}, _this2.state));
    };

    this.getCloumnsScroll = function (columns) {
      var sum = 0;
      columns.forEach(function (da) {
        if (da.checked) {
          sum += da.width;
        }
      });
      console.log("sum", sum);
      return sum;
    };
  }, _temp;
}
module.exports = exports["default"];