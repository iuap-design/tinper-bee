"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = multiSelect;

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

function multiSelect(Table, Checkbox) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function (_Component) {
    _inherits(MultiSelect, _Component);

    function MultiSelect(props) {
      _classCallCheck(this, MultiSelect);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _initialiseProps.call(_this);

      var obj = _this.getCheckedOrIndeter(props.data);
      _this.state = _extends({}, obj, {
        data: (0, _util.ObjectAssign)(props.data)
      });
      return _this;
    }

    MultiSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if ('data' in nextProps) {
        var obj = this.getCheckedOrIndeter(nextProps.data);
        this.setState(_extends({}, obj, {
          data: (0, _util.ObjectAssign)(nextProps.data)
        }));
      }
    };

    /**
     * @param {*} data 
     */


    MultiSelect.prototype.getCheckedOrIndeter = function getCheckedOrIndeter(data) {
      var obj = {};
      var checkStatus = this.setChecked(data);
      if (!checkStatus) {
        obj.checkedAll = false;
        obj.indeterminate = false;
        return obj;
      }
      if (checkStatus == 'indeter') {
        obj.indeterminate = true;
        obj.checkedAll = false;
      } else if (checkStatus == 'all') {
        obj.checkedAll = true;
        obj.indeterminate = false;
      }
      return obj;
    };

    /**
     * 判断数据是否全部选中
     * @param {*} data 
     * reutnr  string  all(全选)、indeter(半选)
     */


    MultiSelect.prototype.setChecked = function setChecked(data) {
      if (!this.isArray(data)) return false;
      if (data.length == 0) return false;
      var count = 0;
      var disabledCount = 0;
      data.forEach(function (da) {
        if (da._checked) {
          count++;
        }
        if (da._disabled) {
          disabledCount++;
        }
      });

      if (data.length == count + disabledCount) {
        return "all";
      }
      return count == 0 ? false : "indeter";
    };

    /**
     * 判断是否是数组
     * @param {*} o 
     */


    MultiSelect.prototype.isArray = function isArray(o) {
      return Object.prototype.toString.call(o) == '[object Array]';
    };

    MultiSelect.prototype.render = function render() {
      var columns = this.props.columns;
      var data = this.state.data;

      return _react2["default"].createElement(Table, _extends({}, this.props, { columns: this.getDefaultColumns(columns), data: data }));
    };

    return MultiSelect;
  }(_react.Component), _class.defaultProps = {
    prefixCls: "u-table-mult-select",
    getSelectedDataFunc: function getSelectedDataFunc() {}
  }, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onAllCheckChange = function () {
      var _state = _this2.state,
          data = _state.data,
          checkedAll = _state.checkedAll,
          indeterminate = _state.indeterminate;

      var check = false;
      if (checkedAll) {
        check = false;
      } else {
        // if(indeterminate){
        //   check = true;
        // }else{
        //   check = true;
        // }
        check = true;
      }
      var selectList = [];

      data.forEach(function (item) {
        if (!item._disabled) {
          item._checked = check;
        }

        if (item._checked) {
          selectList.push(item);
        }
      });
      if (selectList.length > 0) {
        indeterminate = true;
      } else {
        indeterminate = false;
      }
      _this2.setState({
        indeterminate: indeterminate,
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
        var obj = _this2.getCheckedOrIndeter(data);
        _this2.setState(_extends({
          data: data
        }, obj));
        data.forEach(function (da) {
          if (da._checked) {
            selectList.push(da);
          }
        });
        _this2.props.getSelectedDataFunc(selectList, record, index);
      };
    };

    this.getDefaultColumns = function (columns) {
      var _state2 = _this2.state,
          checkedAll = _state2.checkedAll,
          indeterminate = _state2.indeterminate;

      var checkAttr = { checked: checkedAll ? true : false };
      var data = _this2.props.data;
      var dataLength = data.length;
      var disabledCount = 0;
      indeterminate ? checkAttr.indeterminate = true : "";
      //设置表头Checkbox是否可以点击
      data.forEach(function (item, index, arr) {
        if (item._disabled) {
          disabledCount++;
        }
      });

      var _defaultColumns = [{
        title: _react2["default"].createElement(Checkbox, _extends({
          className: "table-checkbox"
        }, checkAttr, {
          disabled: disabledCount == dataLength ? true : false,
          onChange: _this2.onAllCheckChange
        })),
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