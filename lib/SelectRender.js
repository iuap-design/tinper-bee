"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = renderSelect;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * 渲染下拉框
 * @param Select
 * @param Icon
 * @returns {SelectRender}
 */
function renderSelect(Select, Icon) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
        _inherits(SelectRender, _Component);

        function SelectRender() {
            var _temp, _this, _ret;

            _classCallCheck(this, SelectRender);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
                value: _this.props.value,
                editable: false
            }, _this.handleChange = function (e) {
                var value = e;
                if (_this.props.onChange) {
                    _this.props.onChange(value);
                }
                _this.setState({ value: value });
                setTimeout(function () {
                    _this.setState({ editable: false });
                }, 0);
            }, _this.check = function () {
                _this.setState({ editable: false });
                if (_this.props.onChange) {
                    _this.props.onChange(_this.state.value);
                }
            }, _this.edit = function () {
                _this.setState({ editable: true });
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        SelectRender.prototype.render = function render() {
            var _this2 = this;

            var _state = this.state,
                value = _state.value,
                editable = _state.editable;
            var _props = this.props,
                isclickTrigger = _props.isclickTrigger,
                dataSource = _props.dataSource;

            var cellContent = "";
            if (editable) {
                cellContent = isclickTrigger ? _react2["default"].createElement(
                    "div",
                    { className: "editable-cell-input-wrapper" },
                    _react2["default"].createElement(
                        Select,
                        _extends({}, this.props, {
                            value: this.state.value,
                            onBlur: function onBlur(value) {
                                console.log(value);
                                // this.props.onBlur();
                            },

                            onFocus: function onFocus(value) {
                                console.log(value);
                                // this.props.onBlur();
                            },

                            onChange: this.handleChange
                        }),
                        this.props.children
                    ),
                    _react2["default"].createElement(Icon, {
                        type: "uf-correct",
                        className: "editable-cell-icon-check",
                        onClick: this.check
                    })
                ) : _react2["default"].createElement(
                    "div",
                    { className: "editable-cell-input-wrapper" },
                    _react2["default"].createElement(
                        Select,
                        _extends({}, this.props, {
                            value: this.state.value,
                            onBlur: function onBlur() {
                                _this2.setState({
                                    editable: true
                                });
                                _this2.props.onBlur();
                            },
                            onChange: this.handleChange
                        }),
                        this.props.children
                    ),
                    _react2["default"].createElement(Icon, {
                        type: "uf-correct",
                        className: "editable-cell-icon-check",
                        onClick: this.check
                    })
                );
            } else {
                if (dataSource && dataSource.length > 0) {
                    for (var index = 0; index < dataSource.length; index++) {
                        var element = dataSource[index];
                        if (element.value === value) {
                            value = element.key;
                            break;
                        }
                    }
                }
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

        return SelectRender;
    }(_react.Component), _class.propTypes = {
        dataSource: _propTypes2["default"].array
    }, _temp2;
}
module.exports = exports["default"];