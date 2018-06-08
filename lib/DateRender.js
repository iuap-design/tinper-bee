"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = renderDate;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function renderDate(DatePicker, Icon) {
    var _class, _temp2;

    var MonthPicker = DatePicker.MonthPicker,
        RangePicker = DatePicker.RangePicker,
        WeekPicker = DatePicker.WeekPicker;

    return _temp2 = _class = function (_Component) {
        _inherits(DateRender, _Component);

        function DateRender() {
            var _temp, _this, _ret;

            _classCallCheck(this, DateRender);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
                value: _this.props.value,
                editable: false
            }, _this.handleChange = function (e) {
                var _ref = _this.props || "YYYY-MM-DD",
                    format = _ref.format;

                var value = e ? e.format(format) : "";
                _this.setState({ value: value, editable: false });
                if (_this.props.onChange) {
                    _this.props.onChange(value);
                }
            }, _this.check = function () {
                _this.setState({ editable: false });
                if (_this.props.onChange) {
                    _this.props.onChange(_this.state.value);
                }
            }, _this.edit = function () {
                _this.setState({ editable: true });
            }, _this.handleKeydown = function (event) {
                if (event.keyCode == 13) {
                    _this.check();
                }
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        DateRender.prototype.render = function render() {
            var _state = this.state,
                value = _state.value,
                editable = _state.editable;
            var _props = this.props,
                isclickTrigger = _props.isclickTrigger,
                type = _props.type;

            var cellContent = "";
            var TComponent = void 0;
            switch (type.toLowerCase()) {
                case "monthpicker":
                    TComponent = MonthPicker;
                    break;
                // case "rangepicker":
                //   TComponent = RangePicker;
                //   break;
                case "weekpicker":
                    TComponent = WeekPicker;
                    break;
                default:
                    TComponent = DatePicker;
                    break;
            }

            var date_value = value ? (0, _moment2["default"])(value) : value;
            if (editable) {
                cellContent = isclickTrigger ? _react2["default"].createElement(
                    "div",
                    { className: "editable-cell-input-wrapper" },
                    _react2["default"].createElement(TComponent, _extends({}, this.props, {
                        value: date_value,
                        onChange: this.handleChange
                    })),
                    _react2["default"].createElement(Icon, {
                        type: "uf-correct",
                        className: "editable-cell-icon-check",
                        onClick: this.check
                    })
                ) : _react2["default"].createElement(
                    "div",
                    { className: "editable-cell-input-wrapper" },
                    _react2["default"].createElement(TComponent, _extends({}, this.props, {
                        value: date_value,
                        onChange: this.handleChange
                    })),
                    _react2["default"].createElement(Icon, {
                        type: "uf-correct",
                        className: "editable-cell-icon-check",
                        onClick: this.check
                    })
                );
            } else {
                cellContent = isclickTrigger ? _react2["default"].createElement(
                    "div",
                    { className: "editable-cell-text-wrapper", onClick: this.edit },
                    value || " "
                ) : _react2["default"].createElement(
                    "div",
                    { className: "editable-cell-text-wrapper" },
                    value || " ",
                    _react2["default"].createElement(Icon, {
                        type: "uf-pencil",
                        className: "editable-cell-icon",
                        onClick: this.edit
                    })
                );
            }
            return _react2["default"].createElement(
                "div",
                { className: "editable-cell" },
                cellContent
            );
        };

        return DateRender;
    }(_react.Component), _class.defaultProps = {
        type: "DatePicker"
    }, _temp2;
}
module.exports = exports["default"];