"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = filterColumn;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * 参数: 过滤表头
 * @param {*} Table
 */

function filterColumn(Table) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function (_Component) {
    _inherits(filterColumn, _Component);

    function filterColumn(props) {
      _classCallCheck(this, filterColumn);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _initialiseProps.call(_this);

      var columns = props.columns;

      var _column = [];
      _extends(_column, columns);
      _column.forEach(function (da) {
        da.checked = true;
        da.disable = true;
      });
      _this.state = {
        columns: _column,
        showModal: false,
        width: props.width ? props.width : 150,
        screenX: 0,
        screenY: 0
      };
      return _this;
    }

    filterColumn.prototype.render = function render() {
      var data = this.props.data;
      var _state = this.state,
          columns = _state.columns,
          showModal = _state.showModal,
          width = _state.width,
          screenX = _state.screenX,
          screenY = _state.screenY;

      var _columns = [];
      columns.forEach(function (da) {
        if (da.disable) {
          _columns.push(da);
        }
      });

      var content = _react2["default"].createElement(
        "div",
        { className: "pop-cont" },
        _react2["default"].createElement(
          "span",
          { className: "clear-setting", onClick: this.clear },
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
        { className: "bee-table-column-filter-cont" },
        _react2["default"].createElement(Table, _extends({}, this.props, { columns: _columns, data: data })),
        _react2["default"].createElement(
          _beePopover2["default"],
          {
            placement: "leftTop",
            content: content, id: "aa",
            show: showModal },
          _react2["default"].createElement(
            "div",
            { className: "bee-table-column-filter" },
            _react2["default"].createElement(_beeIcon2["default"], { type: "uf-navmenu", onClick: this.openCloumList })
          )
        )
      );
    };

    return filterColumn;
  }(_react.Component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.getShowModal = function (event) {
      var showModal = _this2.state.showModal;

      if (showModal) {
        _this2.setState({
          showModal: false
        });
      }
    };

    this.checkedColumItemClick = function (da) {
      var columns = _this2.state.columns;

      da.checked = da.checked ? false : true;
      da.disable = da.checked ? true : false;
      _this2.setState(_extends({}, _this2.state));
    };

    this.openCloumList = function (ev) {
      var oEvent = ev || event;
      _this2.setState({
        screenX: oEvent.clientX,
        screenY: oEvent.clientY,
        showModal: true
      });
    };

    this.getCloumItem = function () {
      var columns = _this2.state.columns;

      return columns.map(function (da, i) {
        return _react2["default"].createElement(
          "div",
          { key: da.key + "_" + i, className: "item", onClick: function onClick() {
              _this2.checkedColumItemClick(da);
            } },
          _react2["default"].createElement(_beeCheckbox2["default"], { id: da.key, checked: da.checked }),
          _react2["default"].createElement(
            "span",
            null,
            da.title
          )
        );
      });
    };

    this.clear = function () {
      var columns = _this2.state.columns;
      // let _chek = columns[0].checked?false:true;

      columns.forEach(function (da) {
        da.checked = true;
        da.disable = true;
      });
      _this2.setState(_extends({}, _this2.state));
    };
  }, _temp;
}
module.exports = exports["default"];