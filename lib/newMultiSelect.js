"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = newMultiSelect;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * 参数: 过滤表头
 * @param {*} Table
 * @param {*} Checkbox
 * @param {*} Popover
 * @param {*} Icon
 */

function newMultiSelect(Table, Checkbox) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function (_Component) {
    _inherits(NewMultiSelect, _Component);

    function NewMultiSelect(props) {
      _classCallCheck(this, NewMultiSelect);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _initialiseProps.call(_this);

      var checkedAll = _this.setChecked(props.data);
      _this.state = {
        checkedAll: checkedAll,
        data: (0, _util.ObjectAssign)(props.data)
      };
      return _this;
    }

    NewMultiSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.data != nextProps.data) {
        this.setState({
          data: (0, _util.ObjectAssign)(nextProps.data),
          checkedAll: this.setChecked(nextProps.data)
        });
      }
    };

    NewMultiSelect.prototype.setChecked = function setChecked(data) {
      var allCheck = true;
      if (data) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var da = _step.value;

            if (!da._checked) {
              allCheck = false;
              break;
            }
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
      }
      return allCheck;
    };

    NewMultiSelect.prototype.render = function render() {
      var columns = this.props.columns;
      var data = this.state.data;

      return _react2["default"].createElement(Table, _extends({}, this.props, { columns: this.getDefaultColumns(columns), data: data }));
    };

    return NewMultiSelect;
  }(_react.Component), _class.defaultProps = {
    prefixCls: "u-table-mult-select"
  }, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onAllCheckChange = function () {
      var _state = _this2.state,
          data = _state.data,
          checkedAll = _state.checkedAll;

      var selectList = [];
      var check = checkedAll ? false : true;
      data.forEach(function (item) {
        item._checked = check;
        if (item._checked) {
          selectList.push(item);
        }
      });
      _this2.setState({
        checkedAll: check
      });
      _this2.props.getSelectedDataFunc(selectList);
    };

    this.handleClick = function () {};

    this.onCheckboxChange = function (text, record, index) {
      return function () {
        var data = _this2.state.data;

        var selectList = [];
        record._checked = record._checked ? false : true;
        var checkedAll = true;
        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          if (!item._checked || item._checked == false) {
            checkedAll = false;
            break;
          }
        }
        _this2.setState(_extends({}, _this2.state, {
          checkedAll: checkedAll
        }));
        data.forEach(function (da) {
          if (da._checked) {
            selectList.push(da);
          }
        });
        _this2.props.getSelectedDataFunc(selectList, record, index);
      };
    };

    this.getDefaultColumns = function (columns) {
      // let checkedAll = init?false:this.state.checkedAll;
      var checkedAll = _this2.state.checkedAll;

      var _defaultColumns = [{
        title: _react2["default"].createElement(Checkbox, {
          className: "table-checkbox",
          checked: checkedAll
          // indeterminate={indeterminate_bool && !this.state.checkedAll}
          , onChange: _this2.onAllCheckChange
        }),
        key: "checkbox",
        dataIndex: "checkbox",
        fixed: "left",
        width: 50,
        render: function render(text, record, index) {
          var attr = {};
          record._disabled ? attr.disabled = record._disabled : "";
          return _react2["default"].createElement(Checkbox, _extends({
            key: index,
            className: "table-checkbox"
          }, attr, {
            checked: record._checked,
            onClick: _this2.handleClick,
            onChange: _this2.onCheckboxChange(text, record, index)
          }));
        }
      }];
      return _defaultColumns.concat(columns);
    };
  }, _temp;
}
module.exports = exports["default"];