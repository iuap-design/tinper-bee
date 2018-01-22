"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = multiSelect;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _beeCheckbox = require("bee-checkbox");

var _beeCheckbox2 = _interopRequireDefault(_beeCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * multiSelect={
 *  type--默认值为checkbox
 *  param--可以设置返回的选中的数据属性；默认值：null；
 * }
 * getSelectedDataFunc--function，能获取到选中的数据
 * 使用全选时得注意，data中的key值一定要是唯一值
 */
function multiSelect(Table) {
  var _class, _temp, _initialiseProps;

  Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == val) return i;
    }
    return -1;
  };
  Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
      this.splice(index, 1);
    }
  };
  return _temp = _class = function (_Component) {
    _inherits(multiSelect, _Component);

    function multiSelect(props) {
      _classCallCheck(this, multiSelect);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _initialiseProps.call(_this);

      var data = props.data,
          checkedObj = _this.initCheckedObj(props);

      _this.state = {
        checkedAll: false,
        checkedObj: checkedObj,
        selIds: [],
        data: _this.props.data
      };
      return _this;
    }

    multiSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var props = this.props,
          selectDisabled = props.selectDisabled,
          selectedRow = props.selectedRow,
          data = props.data,
          checkedObj = {};

      if (nextProps.data !== data || nextProps.selectDisabled !== selectDisabled || nextProps.selectedRow !== selectedRow) {
        checkedObj = this.initCheckedObj(nextProps);
        this.setState({
          checkedAll: false,
          checkedObj: checkedObj,
          selIds: [],
          data: nextProps.data
        });
      }
    };

    multiSelect.prototype.renderColumnsMultiSelect = function renderColumnsMultiSelect(columns) {
      var _this2 = this;

      var data = this.state.data;

      var checkedObj = _extends({}, this.state.checkedObj);
      var checkedArray = Object.keys(checkedObj);
      var multiSelect = this.props.multiSelect;

      var select_column = {};
      var indeterminate_bool = false;
      if (!multiSelect || !multiSelect.type) {
        multiSelect = _extends({}, multiSelect, { type: "checkbox" });
      }
      if (multiSelect && multiSelect.type === "checkbox") {
        var i = checkedArray.length;
        while (i--) {
          if (checkedObj[checkedArray[i]]) {
            indeterminate_bool = true;
            break;
          }
        }
        var defaultColumns = [{
          title: _react2["default"].createElement(_beeCheckbox2["default"], {
            className: "table-checkbox",
            checked: this.state.checkedAll,
            indeterminate: indeterminate_bool && !this.state.checkedAll,
            onChange: this.onAllCheckChange
          }),
          key: "checkbox",
          dataIndex: "checkbox",
          width: "100px",
          render: function render(text, record, index) {
            var rowKey = record["key"] ? record["key"] : _this2.getRowKey(record, i);
            var bool = checkedObj.hasOwnProperty(rowKey);
            return _react2["default"].createElement(_beeCheckbox2["default"], {
              className: "table-checkbox",
              checked: checkedObj[rowKey],
              disabled: !bool,
              onChange: _this2.onCheckboxChange.bind(_this2, text, record, index)
            });
          }
        }];
        columns = defaultColumns.concat(columns);
      }
      return columns;
    };

    multiSelect.prototype.render = function render() {
      var _this3 = this;

      var columns = this.renderColumnsMultiSelect(this.props.columns).concat();
      return _react2["default"].createElement(Table, _extends({ ref: function ref(table_ref) {
          _this3.table_ref = table_ref;
        } }, this.props, { columns: columns }));
    };

    return multiSelect;
  }(_react.Component), _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.getRowKey = function (record, index) {
      var rowKey = _this4.props.rowKey || 'key';
      var key = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
      return key;
    };

    this.initCheckedObj = function (props) {
      var checkedObj = {},
          selectDisabled = props.selectDisabled,
          selectedRow = props.selectedRow,
          data = props.data;

      for (var i = 0; i < data.length; i++) {
        var bool = selectDisabled && selectDisabled(data[i], i) || false;
        var rowKey = data[i]["key"] ? data[i]["key"] : _this4.getRowKey(data[i], i);
        if (!bool) {
          checkedObj[rowKey] = selectedRow && selectedRow(data[i], i) || false;
        }
      }
      return checkedObj;
    };

    this.onAllCheckChange = function () {
      var self = _this4;
      var listData = self.state.data.concat();
      var checkedObj = _extends({}, self.state.checkedObj);
      var data = self.props.data;

      var selIds = [];
      var id = self.props.multiSelect.param;
      if (self.state.checkedAll) {
        selIds = [];
      } else {
        for (var i = 0; i < listData.length; i++) {
          if (id) {
            selIds[i] = listData[i][id];
          } else {
            selIds[i] = listData[i];
          }
        }
      }
      for (var i = 0; i < data.length; i++) {
        var rowKey = data[i]["key"] ? data[i]["key"] : _this4.getRowKey(data[i], i);
        var bool = checkedObj.hasOwnProperty(rowKey);
        if (!bool) {
          selIds.splice(i, 1);
        } else {
          checkedObj[rowKey] = !self.state.checkedAll;
        }
      }
      self.setState({
        checkedAll: !self.state.checkedAll,
        checkedObj: checkedObj,
        selIds: selIds
      });
      self.props.getSelectedDataFunc(selIds);
    };

    this.onCheckboxChange = function (text, record, index) {
      var self = _this4;
      var allFlag = false;
      var selIds = self.state.selIds;
      var id = self.props.multiSelect ? self.props.multiSelect.param ? record[self.props.multiSelect.param] : record : record;
      var checkedObj = _extends({}, self.state.checkedObj);
      var checkedArray = Object.keys(checkedObj);
      var getSelectedDataFunc = self.props.getSelectedDataFunc;

      var rowKey = record["key"] ? record["key"] : _this4.getRowKey(record, i);
      if (checkedObj[rowKey]) {
        selIds.remove(id);
      } else {
        selIds.push(id);
      }
      checkedObj[rowKey] = !checkedObj[rowKey];
      for (var i = 0; i < checkedArray.length; i++) {
        if (!checkedObj[checkedArray[i]]) {
          allFlag = false;
          break;
        } else {
          allFlag = true;
        }
      }
      self.setState({
        checkedAll: allFlag,
        checkedObj: checkedObj,
        selIds: selIds
      });
      if (typeof getSelectedDataFunc === "function") {
        getSelectedDataFunc(selIds);
      }
    };
  }, _temp;
}
module.exports = exports["default"];