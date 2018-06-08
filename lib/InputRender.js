"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = renderInput;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * 渲染输入框
 * @param Form
 * @param Input
 * @param Icon
 * @returns {InputRender}
 */
function renderInput(Form, Input, Icon) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
        _inherits(InputRender, _Component);

        function InputRender() {
            var _temp, _this, _ret;

            _classCallCheck(this, InputRender);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
                value: _this.props.value,
                editable: false
            }, _this.handleChange = function (e) {
                var value = e;
                _this.setState({ value: value });
            }, _this.check = function () {
                if (typeof _this.flag === "undefined" || _this.flag) {
                    _this.props.check(_this.flag, _this.obj);
                    _this.setState({ editable: false });
                    if (_this.props.onChange) {
                        _this.props.onChange(_this.state.value);
                    }
                    _this.flag = undefined;
                }
            }, _this.checkValidate = function (flag, obj) {
                _this.flag = flag;
                _this.obj = obj;
            }, _this.edit = function () {
                _this.setState({ editable: true });
            }, _this.handleKeydown = function (event) {
                if (event.keyCode == 13) {
                    _this.check();
                } else if (event.keyCode == 9) {}
            }, _this.formatCurrency = function (money) {
                if (money && money != null && !!Number(money)) {
                    money = String(money);
                    var left = money.split(".")[0],
                        right = money.split(".")[1];
                    right = right ? right.length >= 2 ? "." + right.substr(0, 2) : "." + right + "0" : ".00";
                    var temp = left.split("").reverse().join("").match(/(\d{1,3})/g);
                    return (Number(money) < 0 ? "-" : "") + temp.join(",").split("").reverse().join("") + right;
                } else if (money === 0) {
                    //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
                    return "0.00";
                } else {
                    return "";
                }
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        //货币的格式化方法


        InputRender.prototype.render = function render() {
            var _state = this.state,
                value = _state.value,
                editable = _state.editable;

            var _props = this.props,
                name = _props.name,
                placeholder = _props.placeholder,
                isclickTrigger = _props.isclickTrigger,
                format = _props.format,
                formItemClassName = _props.formItemClassName,
                mesClassName = _props.mesClassName,
                check = _props.check,
                other = _objectWithoutProperties(_props, ["name", "placeholder", "isclickTrigger", "format", "formItemClassName", "mesClassName", "check"]);

            var cellContent = "";
            if (editable) {
                cellContent = isclickTrigger ? _react2["default"].createElement(
                    "div",
                    { className: "editable-cell-input-wrapper" },
                    _react2["default"].createElement(
                        Form.FormItem,
                        _extends({
                            className: "formItem-style " + formItemClassName,
                            mesClassName: "errMessage-style " + mesClassName,
                            change: this.handleChange,
                            blur: this.check,
                            check: this.checkValidate
                        }, other),
                        _react2["default"].createElement(Input, {
                            name: name,
                            placeholder: placeholder,
                            onKeyDown: this.handleKeydown,
                            autoFocus: true,
                            value: value
                        })
                    )
                ) : _react2["default"].createElement(
                    "div",
                    { className: "editable-cell-input-wrapper" },
                    _react2["default"].createElement(
                        Form.FormItem,
                        _extends({
                            className: "formItem-style " + formItemClassName,
                            mesClassName: "errMessage-style " + mesClassName,
                            change: this.handleChange,
                            blur: this.check,
                            check: this.checkValidate
                        }, other),
                        _react2["default"].createElement(Input, {
                            name: name,
                            placeholder: placeholder,
                            onKeyDown: this.handleKeydown,
                            autoFocus: true,
                            value: value
                        })
                    ),
                    _react2["default"].createElement(Icon, {
                        type: "uf-correct",
                        className: "editable-cell-icon-check",
                        onClick: this.check
                    })
                );
            } else {
                if (format && format === "Currency") {
                    value = this.formatCurrency(value);
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

        return InputRender;
    }(_react.Component), _class.propTypes = {
        check: _propTypes2["default"].func
    }, _class.defaultProps = {
        check: function check() {
            return "";
        }
    }, _temp2;
}
module.exports = exports["default"];