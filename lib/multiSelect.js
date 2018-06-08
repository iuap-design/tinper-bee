'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = multiSelect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function indexOf(array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === val) return i;
  }
  return -1;
};

function remove(array, val) {
  var index = indexOf(array, val);
  if (index > -1) {
    array.splice(index, 1);
  }
};

/**
 * multiSelect={
 *  type--默认值为checkbox
 *  param--可以设置返回的选中的数据属性；默认值：null；
 * }
 * getSelectedDataFunc--function，能获取到选中的数据
 * 使用全选时得注意，data中的key值一定要是唯一值
 */
function multiSelect(Table, Checkbox) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function (_Component) {
    _inherits(MultiSelect, _Component);

    function MultiSelect(props) {
      _classCallCheck(this, MultiSelect);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        checkedAll: false,
        checkedObj: {},
        selIds: [],
        data: props.data
      };
      return _this;
    }

    MultiSelect.prototype.componentDidMount = function componentDidMount() {
      this.setState(this.initCheckedObj(this.props));
    };

    MultiSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var props = this.props,
          selectDisabled = props.selectDisabled,
          selectedRow = props.selectedRow,
          data = props.data,
          selIds = void 0,
          obj = void 0,
          checkedObj = {};

      if (nextProps.data !== data || nextProps.selectDisabled !== selectDisabled || nextProps.selectedRow !== selectedRow) {
        obj = this.initCheckedObj(nextProps);
        checkedObj = obj.checkedObj;
        selIds = obj.selIds;
        this.setState({
          checkedAll: false,
          checkedObj: checkedObj,
          selIds: selIds,
          data: nextProps.data
        });
      }
    };

    MultiSelect.prototype.renderColumnsMultiSelect = function renderColumnsMultiSelect(columns) {
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
          title: _react2["default"].createElement(Checkbox, {
            className: 'table-checkbox',
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
            return _react2["default"].createElement(Checkbox, {
              className: 'table-checkbox',
              checked: checkedObj[rowKey],
              disabled: !bool,
              onClick: _this2.handleClick,
              onChange: _this2.onCheckboxChange.bind(_this2, text, record, index)
            });
          }
        }];
        columns = defaultColumns.concat(columns);
      }
      return columns;
    };

    MultiSelect.prototype.render = function render() {
      var _this3 = this;

      var columns = this.renderColumnsMultiSelect(this.props.columns).concat();
      return _react2["default"].createElement(Table, _extends({ ref: function ref(table_ref) {
          _this3.table_ref = table_ref;
        } }, this.props, { columns: columns }));
    };

    return MultiSelect;
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
          data = props.data,
          selIds_ = [].concat(_toConsumableArray(_this4.state.selIds)),
          selIds_length = selIds_.length;

      for (var i = 0; i < data.length; i++) {
        var bool = selectDisabled && selectDisabled(data[i], i) || false;
        var rowKey = data[i]["key"] ? data[i]["key"] : _this4.getRowKey(data[i], i);
        if (!bool) {
          if (selectedRow && selectedRow(data[i], i)) {
            if (selIds_length > 0) {
              for (var index = 0; index < selIds_length; index++) {
                var selid = selIds_[index];
                if (selid[rowKey] !== data[i][rowKey]) {
                  selIds_.push(data[i]);
                }
              }
            } else {
              selIds_.push(data[i]);
            }
            checkedObj[rowKey] = true;
          } else {
            checkedObj[rowKey] = false;
          }
        }
      }
      return {
        checkedObj: checkedObj,
        selIds: selIds_
      };
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
        remove(selIds, id);
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

    this.handleClick = function (e) {
      e.stopPropagation();
    };
  }, _temp;
}
module.exports = exports['default'];