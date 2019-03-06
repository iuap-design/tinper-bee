"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = renderCheckbox;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * 渲染checkbox
 * @param Checkbox
 * @param Icon
 * @returns {CheckboxRender}
 */
function renderCheckbox(Checkbox, Icon) {
    return function (_Component) {
        _inherits(CheckboxRender, _Component);

        function CheckboxRender() {
            var _temp, _this, _ret;

            _classCallCheck(this, CheckboxRender);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
                value: _this.props.value,
                editable: false
            }, _this.handleChange = function (e) {
                var value = e.target.value;
                _this.setState({ value: value });
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

        CheckboxRender.prototype.render = function render() {
            var _state = this.state,
                value = _state.value,
                editable = _state.editable;

            var cellContent = "";
            if (editable) {
                cellContent = _react2["default"].createElement(
                    "div",
                    { className: "editable-cell-input-wrapper" },
                    _react2["default"].createElement(Checkbox, {
                        onChange: this.handleChange,
                        onKeyDown: this.handleKeydown,
                        onBlur: this.check,
                        autoFocus: true,
                        value: value
                    })
                );
            } else {
                cellContent = _react2["default"].createElement(
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

        return CheckboxRender;
    }(_react.Component);
}
module.exports = exports["default"];