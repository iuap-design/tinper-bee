"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = singleSelect;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * 参数: 单选表头
 * @param {*} Table
 * @param {*} Radio
 */

function singleSelect(Table, Radio) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(SingleSelect, _Component);

    function SingleSelect(props) {
      _classCallCheck(this, SingleSelect);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _this.onRadioChange = function (value, record, index) {
        var selectedRowIndex = _this.state.selectedRowIndex;

        if (selectedRowIndex === index) {
          _this.setState({ selectedRowIndex: '' });
          _this.props.getSelectedDataFunc();
        } else {
          _this.setState({ selectedRowIndex: index });
          _this.props.getSelectedDataFunc(record, index);
        }
      };

      _this.getDefaultColumns = function (columns) {
        var selectedRowIndex = _this.state.selectedRowIndex;


        var _defaultColumns = [{
          title: '',
          key: "radio",
          dataIndex: "radio",
          fixed: "left",
          width: 49,
          render: function render(text, record, index) {
            return _react2["default"].createElement(
              Radio.RadioGroup,
              {
                className: "table-radio",
                name: "table-radio",
                selectedValue: selectedRowIndex,
                onChange: function onChange(value) {
                  return _this.onRadioChange(value, record, index);
                },
                style: { width: '14px', height: '14px', display: 'block', marginLeft: '4px' } },
              _react2["default"].createElement(Radio, { value: index })
            );
          }
        }];
        return _defaultColumns.concat(columns);
      };

      _this.state = {
        data: (0, _util.ObjectAssign)(props.data),
        selectedRowIndex: props.selectedRowIndex
      };
      return _this;
    }

    SingleSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if ('data' in nextProps) {
        this.setState({
          data: (0, _util.ObjectAssign)(nextProps.data)
        });
      }
      if ('selectedRowIndex' in nextProps) {
        this.setState({
          selectedRowIndex: nextProps.selectedRowIndex
        });
      }
    };

    /**
     * 判断是否是数组
     * @param {*} o 
     */


    SingleSelect.prototype.isArray = function isArray(o) {
      return Object.prototype.toString.call(o) == '[object Array]';
    };

    SingleSelect.prototype.render = function render() {
      var columns = this.props.columns;
      var data = this.state.data;

      return _react2["default"].createElement(Table, _extends({}, this.props, {
        columns: this.getDefaultColumns(columns),
        data: data }));
    };

    return SingleSelect;
  }(_react.Component), _class.defaultProps = {
    prefixCls: "u-table-single-select",
    getSelectedDataFunc: function getSelectedDataFunc() {},
    selectedRowIndex: ''
  }, _temp;
}
module.exports = exports["default"];