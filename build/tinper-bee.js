(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["tinper-bee"] = factory(require("react"), require("react-dom"));
	else
		root["tinper-bee"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var Button = __webpack_require__(1);
	var Badge = __webpack_require__(7);
	var Alert = __webpack_require__(10);
	var ButtonGroup = __webpack_require__(15);
	var ControlLabel = __webpack_require__(18);
	var FormControl = __webpack_require__(21);
	var FormGroup = __webpack_require__(26);
	//var Grid = require('./lib/Grid');
	var InputGroup = __webpack_require__(29);
	var Loadingstate = __webpack_require__(36);
	var Checkbox = __webpack_require__(39);
	var Pagination = __webpack_require__(42);
	var ProgressBar = __webpack_require__(46);
	var RadioGroup = __webpack_require__(49);
	var Switch = __webpack_require__(53);
	var Tooltip = __webpack_require__(56);



	module.exports = {
	  Button: Button,
	  Badge: Badge,
	  Alert: Alert,
	  ButtonGroup: ButtonGroup,
	  ControlLabel: ControlLabel,
	  FormControl: FormControl,
	  FormGroup: FormGroup,
	  InputGroup: InputGroup,
	  Loadingstate: Loadingstate,
	  Checkbox: Checkbox,
	  Pagination: Pagination,
	  ProgressBar: ProgressBar,
	  RadioGroup: RadioGroup,
	  Switch: Switch,
	  Tooltip: Tooltip
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
[59, 3],
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _react.PropTypes.oneOf(['sm', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _react.PropTypes.object,
	    /**
	     * @title 形状
	     */
	    shape: _react.PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', 'border']),
	    /**
	    * @title 类型
	    */
	    colors: _react.PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _react.PropTypes.bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _react.PropTypes.string,

	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _react.PropTypes.oneOf(['submit', 'button', 'reset'])
	};

	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button'

	};

	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left'
	};

	var Button = function (_Component) {
	    _inherits(Button, _Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }

	    Button.prototype.render = function render() {
	        var _props = this.props;
	        var colors = _props.colors;
	        var shape = _props.shape;
	        var disabled = _props.disabled;
	        var className = _props.className;
	        var size = _props.size;
	        var children = _props.children;
	        var htmlType = _props.htmlType;
	        var clsPrefix = _props.clsPrefix;

	        var others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'children', 'htmlType', 'clsPrefix']);

	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };

	    return Button;
	}(_react.Component);

	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;

	exports["default"] = Button;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Badge = __webpack_require__(9);

	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Badge2["default"];
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	/**
	 *  badge 默认显示内容1
	 */
	var defaultProps = {
		children: "1",
		clsPrefix: 'u-badge'
	};

	var Badge = function (_React$Component) {
		_inherits(Badge, _React$Component);

		function Badge(props) {
			_classCallCheck(this, Badge);

			return _possibleConstructorReturn(this, _React$Component.call(this, props));
		}

		Badge.prototype.render = function render() {
			var _props = this.props;
			var colors = _props.colors;
			var className = _props.className;
			var children = _props.children;
			var clsPrefix = _props.clsPrefix;

			var others = _objectWithoutProperties(_props, ['colors', 'className', 'children', 'clsPrefix']);

			var clsObj = {};
			if (className) {
				clsObj[className] = true;
			}
			/**
	   *  以u-badge起头的颜色类判断
	   */
			if (colors) {
				clsObj[clsPrefix + '-' + colors] = true;
			}

			var classNames = (0, _classnames2["default"])(clsPrefix, clsObj);

			return _react2["default"].createElement(
				'span',
				_extends({ className: classNames }, others),
				children
			);
		};

		return Badge;
	}(_react2["default"].Component);

	Badge.defaultProps = defaultProps;

	exports["default"] = Badge;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Alert = __webpack_require__(12);

	var _Alert2 = _interopRequireDefault(_Alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Alert2["default"];
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeButton = __webpack_require__(13);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		onDismiss: _react.PropTypes.func,
		closeLabel: _react.PropTypes.string
	};

	var defaultProps = {
		clsPrefix: "u-alert"
	};

	var Alert = function (_React$Component) {
		_inherits(Alert, _React$Component);

		function Alert(props) {
			_classCallCheck(this, Alert);

			var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

			_this.state = {
				showCloseLabel: !!_this.props.closeLabel
			};
			return _this;
		}
		/**
	  * 渲染右上角关闭alert按钮
	  */


		Alert.prototype.renderDismissButton = function renderDismissButton(onDismiss) {
			return _react2["default"].createElement(
				_beeButton2["default"],
				{
					className: 'close',
					onClick: onDismiss
				},
				_react2["default"].createElement(
					'span',
					null,
					'\xD7'
				)
			);
		};
		/**
	 * 渲染alert信息内部关闭alert的文字按钮
	 * @onDismiss 外界传进来的操作动作方法
	 * @closeLabel 内部关闭按钮显示的文字
	 */


		Alert.prototype.renderSrOnlyDismissButton = function renderSrOnlyDismissButton(onDismiss, closeLabel) {
			return _react2["default"].createElement(
				_beeButton2["default"],
				{
					className: 'close sr-only',
					onClick: onDismiss
				},
				closeLabel
			);
		};

		Alert.prototype.render = function render() {
			var _props = this.props;
			var onDismiss = _props.onDismiss;
			var closeLabel = _props.closeLabel;
			var colors = _props.colors;
			var className = _props.className;
			var children = _props.children;
			var clsPrefix = _props.clsPrefix;

			var others = _objectWithoutProperties(_props, ['onDismiss', 'closeLabel', 'colors', 'className', 'children', 'clsPrefix']);

			var clsObj = {};

			clsObj['' + clsPrefix] = true;

			if (colors) {
				clsObj[clsPrefix + '-' + colors] = true;
			} else {
				clsObj[clsPrefix + '-warning'] = true;
			}
			return _react2["default"].createElement(
				'div',
				_extends({}, others, {
					role: 'alert',
					className: (0, _classnames2["default"])(className, clsObj)
				}),
				children,
				!this.state.showCloseLabel && this.renderDismissButton(onDismiss),
				this.state.showCloseLabel && this.renderSrOnlyDismissButton(onDismiss, closeLabel)
			);
		};

		return Alert;
	}(_react2["default"].Component);

	Alert.propTypes = propTypes;
	Alert.defaultProps = defaultProps;
	exports["default"] = Alert;
	module.exports = exports['default'];

/***/ },
/* 13 */
[59, 14],
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _react.PropTypes.oneOf(['sm', 'xg', 'lg', '']),
	    /**
	     * @title 样式
	     */
	    style: _react.PropTypes.object,
	    /**
	     * @title 形状
	     */
	    shape: _react.PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', '']),
	    /**
	    * @title 类型
	    */
	    type: _react.PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', '']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _react.PropTypes.bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _react.PropTypes.string,
	    /**
	     * @title 内容
	     */
	    children: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _react.PropTypes.oneOf(['submit', 'button', 'reset'])
	};

	var defaultProps = {
	    size: '',
	    type: 'primary',
	    shape: '',
	    disabled: false,
	    className: '',
	    children: '',
	    htmlType: 'button'
	};

	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    typeMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left'
	},
	    clsPrefix = 'u-button';

	var Button = function (_React$Component) {
	    _inherits(Button, _React$Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _React$Component.call(this, props));
	    }

	    Button.prototype.render = function render() {
	        var _props = this.props;
	        var type = _props.type;
	        var shape = _props.shape;
	        var disabled = _props.disabled;
	        var className = _props.className;
	        var size = _props.size;
	        var children = _props.children;
	        var htmlType = _props.htmlType;

	        var others = _objectWithoutProperties(_props, ['type', 'shape', 'disabled', 'className', 'size', 'children', 'htmlType']);

	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (typeMap[type]) {
	            clsObj[clsPrefix + '-' + typeMap[type]] = true;
	        }
	        var classNames = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classNames,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };

	    return Button;
	}(_react2["default"].Component);

	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;

	exports["default"] = Button;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ButtonGroup = __webpack_require__(17);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _ButtonGroup2["default"];
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	// import Button from 'bee-button';


	var propTypes = {
	  /**
	   * 是否垂直排列
	  */
	  vertical: _react2["default"].PropTypes.bool,
	  /**
	   * 是否对齐
	   */
	  justified: _react2["default"].PropTypes.bool,

	  /**
	   * 垂直时是否为块状元素
	   */
	  block: _react2["default"].PropTypes.bool
	};

	var defaultProps = {
	  block: false,
	  justified: false,
	  vertical: false
	};

	var clsPrefix = "u-button-group";

	var ButtonGroup = function (_React$Component) {
	  _inherits(ButtonGroup, _React$Component);

	  function ButtonGroup() {
	    _classCallCheck(this, ButtonGroup);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ButtonGroup.prototype.render = function render() {
	    var _tbClass;

	    var _props = this.props;
	    var block = _props.block;
	    var justified = _props.justified;
	    var vertical = _props.vertical;
	    var classes = _props.classes;

	    var others = _objectWithoutProperties(_props, ['block', 'justified', 'vertical', 'classes']);

	    var tbClass = (_tbClass = {}, _defineProperty(_tbClass, '' + clsPrefix, vertical ? false : true), _defineProperty(_tbClass, clsPrefix + '-block', vertical ? block : false), _defineProperty(_tbClass, clsPrefix + '-vertical', vertical), _defineProperty(_tbClass, clsPrefix + '-justified', justified), _tbClass);

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbClass, classes)
	      }),
	      this.props.children
	    );
	  };

	  return ButtonGroup;
	}(_react2["default"].Component);

	ButtonGroup.propTypes = propTypes;
	ButtonGroup.defaultProps = defaultProps;

	exports["default"] = ButtonGroup;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ControlLabel = __webpack_require__(20);

	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _ControlLabel2["default"];
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ControlLabel = function (_Component) {
	  _inherits(ControlLabel, _Component);

	  function ControlLabel() {
	    _classCallCheck(this, ControlLabel);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  ControlLabel.prototype.render = function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;

	    var others = _objectWithoutProperties(_props, ['className', 'children']);

	    var classes = {
	      'control-label': true
	    };

	    return _react2["default"].createElement(
	      'label',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      children
	    );
	  };

	  return ControlLabel;
	}(_react.Component);

	exports["default"] = ControlLabel;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FormControl = __webpack_require__(23);

	var _FormControl2 = _interopRequireDefault(_FormControl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _FormControl2["default"];
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _warning = __webpack_require__(24);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
	  type: _react.PropTypes.string,
	  id: _react.PropTypes.string
	};

	var defaultProps = {
	  componentClass: 'input',
	  clsPrefix: 'u-form-control',
	  type: 'text'
	};

	var FormControl = function (_React$Component) {
	  _inherits(FormControl, _React$Component);

	  function FormControl() {
	    _classCallCheck(this, FormControl);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  FormControl.prototype.render = function render() {
	    var formGroup = this.context.$bs_formGroup;
	    var controlId = formGroup && formGroup.controlId;

	    var _props = this.props;
	    var Component = _props.componentClass;
	    var type = _props.type;
	    var _props$id = _props.id;
	    var id = _props$id === undefined ? controlId : _props$id;
	    var className = _props.className;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['componentClass', 'type', 'id', 'className', 'clsPrefix']);

	    (0, _warning2["default"])(controlId == null || id === controlId, '`controlId` is ignored on `<FormControl>` when `id` is specified.');

	    // input[type="file"] 不应该有类名 .form-control.
	    var classes = {};
	    var classNames = void 0;
	    if (type !== 'file') {
	      classNames = (0, _classnames2["default"])(clsPrefix, classes);
	    }

	    return _react2["default"].createElement(Component, _extends({}, others, {
	      type: type,
	      id: id,
	      className: (0, _classnames2["default"])(className, classNames)
	    }));
	  };

	  return FormControl;
	}(_react2["default"].Component);

	FormControl.propTypes = propTypes;
	FormControl.defaultProps = defaultProps;

	exports["default"] = FormControl;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(27);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FormGroup = __webpack_require__(28);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _FormGroup2["default"];
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		validationState: _react2["default"].PropTypes.oneOf(['success', 'warning', 'error'])
	};

	var FormGroup = function (_React$Component) {
		_inherits(FormGroup, _React$Component);

		function FormGroup(props) {
			_classCallCheck(this, FormGroup);

			return _possibleConstructorReturn(this, _React$Component.call(this, props));
		}

		FormGroup.prototype.render = function render() {
			var _props = this.props;
			var validationState = _props.validationState;
			var className = _props.className;
			var children = _props.children;

			var others = _objectWithoutProperties(_props, ['validationState', 'className', 'children']);
			/**
	  * @title 默认显示类名’‘
	  */


			var classes = {
				'form-group': true
			};
			/**
	  * @title badge 默认显示内容1
	  */
			if (validationState) {
				classes['has-' + validationState] = true;
			}

			return _react2["default"].createElement(
				'div',
				_extends({}, others, {
					className: (0, _classnames2["default"])(className, classes)
				}),
				children
			);
		};

		return FormGroup;
	}(_react2["default"].Component);

	FormGroup.propTypes = propTypes;

	exports["default"] = FormGroup;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(31);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeInputGroupAddon = __webpack_require__(32);

	var _beeInputGroupAddon2 = _interopRequireDefault(_beeInputGroupAddon);

	var _beeInputGroupButton = __webpack_require__(34);

	var _beeInputGroupButton2 = _interopRequireDefault(_beeInputGroupButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var defaultProps = {
	  clsPrefix: 'u-input-group'
	};

	var InputGroup = function (_React$Component) {
	  _inherits(InputGroup, _React$Component);

	  function InputGroup() {
	    _classCallCheck(this, InputGroup);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  InputGroup.prototype.render = function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['className', 'clsPrefix']);

	    return _react2["default"].createElement('span', _extends({}, others, {
	      className: (0, _classnames2["default"])(className, clsPrefix)
	    }));
	  };

	  return InputGroup;
	}(_react2["default"].Component);

	/**
	  * 将InputGroupAddon与InputGroupButton组件作为InputGroup的附属组件
	  */


	InputGroup.Addon = _beeInputGroupAddon2["default"];
	InputGroup.Button = _beeInputGroupButton2["default"];
	InputGroup.defaultProps = defaultProps;
	exports["default"] = InputGroup;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _InputGroupAddon = __webpack_require__(33);

	var _InputGroupAddon2 = _interopRequireDefault(_InputGroupAddon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _InputGroupAddon2["default"];
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var defaultProps = {
	  clsPrefix: 'u-input-group-addon'
	};

	var InputGroupAddon = function (_React$Component) {
	  _inherits(InputGroupAddon, _React$Component);

	  function InputGroupAddon() {
	    _classCallCheck(this, InputGroupAddon);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  InputGroupAddon.prototype.render = function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['className', 'clsPrefix']);

	    return _react2["default"].createElement('span', _extends({}, others, {
	      className: (0, _classnames2["default"])(className, clsPrefix)
	    }));
	  };

	  return InputGroupAddon;
	}(_react2["default"].Component);

	InputGroupAddon.defaultProps = defaultProps;
	exports["default"] = InputGroupAddon;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _InputGroupButton = __webpack_require__(35);

	var _InputGroupButton2 = _interopRequireDefault(_InputGroupButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _InputGroupButton2["default"];
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var defaultProps = {
	  clsPrefix: 'u-input-group-btn'
	};

	var InputGroupButton = function (_React$Component) {
	  _inherits(InputGroupButton, _React$Component);

	  function InputGroupButton() {
	    _classCallCheck(this, InputGroupButton);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  InputGroupButton.prototype.render = function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['className', 'clsPrefix']);

	    return _react2["default"].createElement('span', _extends({}, others, {
	      className: (0, _classnames2["default"])(className, clsPrefix)
	    }));
	  };

	  return InputGroupButton;
	}(_react2["default"].Component);

	InputGroupButton.defaultProps = defaultProps;
	exports["default"] = InputGroupButton;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Loadingstate = __webpack_require__(38);

	var _Loadingstate2 = _interopRequireDefault(_Loadingstate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Loadingstate2["default"];
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _beeButton = __webpack_require__(2);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		/**
	  * @title loading时间
	  */
		loadingTime: _react.PropTypes.string,
		/**
	  * @title loading时的文字
	  */
		loadingText: _react.PropTypes.string

	};

	var defaultProps = {
		loadingTime: '300',
		loadingText: 'loading'

	};

	var Loadingstate = function (_Component) {
		_inherits(Loadingstate, _Component);

		function Loadingstate(props) {
			_classCallCheck(this, Loadingstate);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props));

			_this.state = {
				clickFlag: false,
				loadingText: _this.props.children
			};
			return _this;
		}
		/**
	  * 手动触发修改状态
	  */


		Loadingstate.prototype.handleClick = function handleClick() {
			this.setState({ clickFlag: true, loadingText: this.props.loadingText });
			/**
	   * 设置定时器 根据参数时间 设定定时时间 而去改变状态
	   */
			this.timer = setInterval(function () {
				this.setState({ clickFlag: false, loadingText: this.props.children });
			}.bind(this), this.props.loadingTime);
		};
		// 组件移除


		Loadingstate.prototype.componentWillUnmount = function componentWillUnmount() {

			clearInterval(this.timer);
		};

		Loadingstate.prototype.render = function render() {
			var _props = this.props;
			var loadingTime = _props.loadingTime;
			var loadingText = _props.loadingText;

			var others = _objectWithoutProperties(_props, ['loadingTime', 'loadingText']);

			return _react2["default"].createElement(
				_beeButton2["default"],
				_extends({
					disabled: this.state.clickFlag,
					onClick: this.handleClick.bind(this)
				}, others),
				this.state.loadingText
			);
		};

		return Loadingstate;
	}(_react.Component);

	Loadingstate.propTypes = propTypes;
	Loadingstate.defaultProps = defaultProps;

	exports["default"] = Loadingstate;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(40);


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Checkbox = __webpack_require__(41);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Checkbox2["default"];
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	//import warning from 'warning';


	var propTypes = {

	  colors: _react2["default"].PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),

	  disabled: _react2["default"].PropTypes.bool

	};

	var defaultProps = {
	  disabled: false,
	  colors: 'primary'
	};
	var clsPrefix = 'u-checkbox';

	var Checkbox = function (_React$Component) {
	  _inherits(Checkbox, _React$Component);

	  function Checkbox(props) {
	    _classCallCheck(this, Checkbox);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.state = {
	      checked: _this.props.checked
	    };
	    return _this;
	  }

	  Checkbox.prototype.changeState = function changeState() {
	    if (this.props.disabled == false) {
	      this.setState({ checked: !this.state.checked });
	    }
	  };

	  Checkbox.prototype.render = function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var colors = _props.colors;
	    var size = _props.size;
	    var className = _props.className;
	    var children = _props.children;

	    var others = _objectWithoutProperties(_props, ['disabled', 'colors', 'size', 'className', 'children']);

	    var input = _react2["default"].createElement('input', _extends({}, others, {
	      type: 'checkbox',
	      disabled: this.props.disabled
	    }));

	    var classes = {
	      'u-checkbox': true,
	      'is-checked': this.state.checked,
	      disabled: disabled
	    };

	    if (colors) {
	      classes[clsPrefix + '-' + colors] = true;
	    }

	    if (colors) {
	      classes[clsPrefix + '-' + colors] = true;
	    }

	    if (size) {
	      classes[clsPrefix + '-' + size] = true;
	    }

	    return _react2["default"].createElement(
	      'label',
	      { className: (0, _classnames2["default"])(className, classes), onClick: this.changeState.bind(this) },
	      input,
	      _react2["default"].createElement(
	        'label',
	        { className: 'u-checkbox-label' },
	        children
	      )
	    );
	  };

	  return Checkbox;
	}(_react2["default"].Component);

	Checkbox.propTypes = propTypes;
	Checkbox.defaultProps = defaultProps;

	exports["default"] = Checkbox;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(43);


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Pagination = __webpack_require__(44);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Pagination2["default"];
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _PaginationButton = __webpack_require__(45);

	var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * 当前激活状态页
	   */
	  activePage: _react2["default"].PropTypes.number,
	  /**
	   * 总页数
	   */
	  items: _react2["default"].PropTypes.number,
	  /**
	   * 显示按钮从1到maxButton的按钮数
	   */
	  maxButtons: _react2["default"].PropTypes.number,

	  /**
	   * 当为true,不管切换到多少页都显示第一页和最后一页的按钮
	   */
	  boundaryLinks: _react2["default"].PropTypes.bool,

	  /**
	   * 当为true,显示省略号，否则
	   * 
	   */
	  ellipsis: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.bool, _react2["default"].PropTypes.node]),

	  /**
	   *  当为true,显示点击到第一页的按钮
	   */
	  first: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.bool, _react2["default"].PropTypes.node]),

	  /**
	   *  当为true,显示点击到最后一页的按钮
	   */
	  last: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.bool, _react2["default"].PropTypes.node]),

	  /**
	   * 当为true,显示前一页按钮
	   */
	  prev: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.bool, _react2["default"].PropTypes.node]),

	  /**
	   * 当为true,显示下一页按钮
	   */
	  next: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.bool, _react2["default"].PropTypes.node]),

	  /**
	   * 暴露给用户的切换页的方法
	   */
	  onSelect: _react2["default"].PropTypes.func,

	  /**
	   * You can use a custom element for the buttons
	   */
	  buttonComponentClass: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
	};

	var defaultProps = {
	  activePage: 1,
	  items: 1,
	  maxButtons: 0,
	  first: false,
	  last: false,
	  prev: false,
	  next: false,
	  ellipsis: true,
	  boundaryLinks: false
	};

	var Pagination = function (_React$Component) {
	  _inherits(Pagination, _React$Component);

	  function Pagination() {
	    _classCallCheck(this, Pagination);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Pagination.prototype.renderPageButtons = function renderPageButtons(activePage, items, maxButtons, boundaryLinks, ellipsis, buttonProps) {
	    var pageButtons = [];

	    var startPage = void 0;
	    var endPage = void 0;
	    var hasHiddenPagesAfter = void 0;

	    if (maxButtons) {
	      //根据max很当前activepage计算出应隐藏activeButton之前的页数
	      var hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
	      startPage = hiddenPagesBefore > 2 ? hiddenPagesBefore : 1;
	      //计算出是否存在隐藏activeButton之后的页数
	      hasHiddenPagesAfter = startPage + maxButtons < items;

	      if (!hasHiddenPagesAfter) {
	        endPage = items;
	        startPage = items - maxButtons + 1;
	        if (startPage < 1) {
	          startPage = 1;
	        }
	      } else {
	        endPage = startPage + maxButtons - 1;
	      }
	    } else {
	      startPage = 1;
	      endPage = items;
	    }
	    //将所有的button循环渲染出来
	    for (var pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
	      pageButtons.push(_react2["default"].createElement(
	        _PaginationButton2["default"],
	        _extends({}, buttonProps, {
	          key: pagenumber,
	          eventKey: pagenumber,
	          active: pagenumber === activePage
	        }),
	        pagenumber
	      ));
	    }
	    //如果boundaryLinks和eclipsis且startPage!=1 需要加上before More Button
	    if (boundaryLinks && ellipsis && startPage !== 1) {
	      pageButtons.unshift(_react2["default"].createElement(
	        _PaginationButton2["default"],
	        {
	          key: 'ellipsisFirst',
	          disabled: true,
	          componentClass: buttonProps.componentClass
	        },
	        _react2["default"].createElement(
	          'span',
	          { 'aria-label': 'More' },
	          ellipsis === true ? '\u2026' : ellipsis
	        )
	      ));
	      //加上最小边界 Button
	      pageButtons.unshift(_react2["default"].createElement(
	        _PaginationButton2["default"],
	        _extends({}, buttonProps, {
	          key: 1,
	          eventKey: 1,
	          active: false
	        }),
	        '1'
	      ));
	    }
	    //如果maxButtons和eclipsis且hasHiddenPagesAfter 需加上after More Button
	    if (maxButtons && hasHiddenPagesAfter && ellipsis) {
	      pageButtons.push(_react2["default"].createElement(
	        _PaginationButton2["default"],
	        {
	          key: 'ellipsis',
	          disabled: true,
	          componentClass: buttonProps.componentClass
	        },
	        _react2["default"].createElement(
	          'span',
	          { 'aria-label': 'More' },
	          ellipsis === true ? '\u2026' : ellipsis
	        )
	      ));
	      //如果最后一个页数按钮不等于总页数 且 边界为true 需加上最大边界按钮
	      if (boundaryLinks && endPage !== items) {
	        pageButtons.push(_react2["default"].createElement(
	          _PaginationButton2["default"],
	          _extends({}, buttonProps, {
	            key: items,
	            eventKey: items,
	            active: false
	          }),
	          items
	        ));
	      }
	    }

	    return pageButtons;
	  };

	  Pagination.prototype.render = function render() {
	    var _props = this.props;
	    var activePage = _props.activePage;
	    var items = _props.items;
	    var maxButtons = _props.maxButtons;
	    var boundaryLinks = _props.boundaryLinks;
	    var ellipsis = _props.ellipsis;
	    var first = _props.first;
	    var last = _props.last;
	    var prev = _props.prev;
	    var next = _props.next;
	    var onSelect = _props.onSelect;
	    var buttonComponentClass = _props.buttonComponentClass;
	    var className = _props.className;

	    var others = _objectWithoutProperties(_props, ['activePage', 'items', 'maxButtons', 'boundaryLinks', 'ellipsis', 'first', 'last', 'prev', 'next', 'onSelect', 'buttonComponentClass', 'className']);

	    var classes = {
	      "u-pagination": true
	    };

	    /**
	     *  页按钮属性
	     *  onSelect:暴露在外层交互动作，也是与父组件Pagination的交流接口
	     *  componentClass: 用户定义的按钮dom元素类型
	     */
	    var buttonProps = {
	      onSelect: onSelect,
	      componentClass: buttonComponentClass
	    };

	    return _react2["default"].createElement(
	      'ul',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      first && _react2["default"].createElement(
	        _PaginationButton2["default"],
	        _extends({}, buttonProps, {
	          eventKey: 1,
	          disabled: activePage === 1
	        }),
	        _react2["default"].createElement(
	          'span',
	          { 'aria-label': 'First' },
	          first === true ? '\xAB' : first
	        )
	      ),
	      prev && _react2["default"].createElement(
	        _PaginationButton2["default"],
	        _extends({}, buttonProps, {
	          eventKey: activePage - 1,
	          disabled: activePage === 1
	        }),
	        _react2["default"].createElement(
	          'span',
	          { 'aria-label': 'Previous' },
	          prev === true ? '\u2039' : prev
	        )
	      ),
	      this.renderPageButtons(activePage, items, maxButtons, boundaryLinks, ellipsis, buttonProps),
	      next && _react2["default"].createElement(
	        _PaginationButton2["default"],
	        _extends({}, buttonProps, {
	          eventKey: activePage + 1,
	          disabled: activePage >= items
	        }),
	        _react2["default"].createElement(
	          'span',
	          { 'aria-label': 'Next' },
	          next === true ? '\u203A' : next
	        )
	      ),
	      last && _react2["default"].createElement(
	        _PaginationButton2["default"],
	        _extends({}, buttonProps, {
	          eventKey: items,
	          disabled: activePage >= items
	        }),
	        _react2["default"].createElement(
	          'span',
	          { 'aria-label': 'Last' },
	          last === true ? '\xBB' : last
	        )
	      )
	    );
	  };

	  return Pagination;
	}(_react2["default"].Component);

	Pagination.propTypes = propTypes;
	Pagination.defaultProps = defaultProps;

	exports["default"] = Pagination;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	// TODO: This should be `<Pagination.Item>`.

	// TODO: This should use `componentClass` like other components.

	var propTypes = {
	  className: _react2["default"].PropTypes.string,
	  eventKey: _react2["default"].PropTypes.any,
	  onSelect: _react2["default"].PropTypes.func,
	  disabled: _react2["default"].PropTypes.bool,
	  active: _react2["default"].PropTypes.bool,
	  onClick: _react2["default"].PropTypes.func
	};

	var defaultProps = {
	  active: false,
	  disabled: false
	};

	var PaginationButton = function (_React$Component) {
	  _inherits(PaginationButton, _React$Component);

	  function PaginationButton(props, context) {
	    _classCallCheck(this, PaginationButton);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  PaginationButton.prototype.handleClick = function handleClick(event) {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var onSelect = _props.onSelect;
	    var eventKey = _props.eventKey;


	    if (disabled) {
	      return;
	    }

	    if (onSelect) {
	      onSelect(eventKey, event);
	    }
	  };

	  PaginationButton.prototype.render = function render() {
	    var _props2 = this.props;
	    var Component = _props2.componentClass;
	    var active = _props2.active;
	    var disabled = _props2.disabled;
	    var onClick = _props2.onClick;
	    var className = _props2.className;
	    var style = _props2.style;

	    var props = _objectWithoutProperties(_props2, ['componentClass', 'active', 'disabled', 'onClick', 'className', 'style']);

	    delete props.onSelect;

	    return _react2["default"].createElement(
	      'li',
	      {
	        className: (0, _classnames2["default"])(className, { active: active, disabled: disabled }),
	        style: style
	      },
	      _react2["default"].createElement('a', _extends({ href: '#'
	      }, props, {
	        disabled: disabled,
	        onClick: this.handleClick
	      }))
	    );
	  };

	  return PaginationButton;
	}(_react2["default"].Component);

	PaginationButton.propTypes = propTypes;
	PaginationButton.defaultProps = defaultProps;

	exports["default"] = PaginationButton;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(47);


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ProgressBar = __webpack_require__(48);

	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _ProgressBar2["default"];
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ROUND_PRECISION = 1000;

	/**
	 * 自定义验证children是<ProgressBar>的实例.
	 * @props 实例后的propTypes
	 * @propName 本身propTypes的属性名 即 children
	 * @componentName 实例后的children名 期望是ProgressBar
	 */
	function onlyProgressBar(props, propName, componentName) {
	  var children = props[propName];
	  if (!children) {
	    return null;
	  }

	  var error = null;

	  _react2["default"].Children.forEach(children, function (child) {
	    if (error) {
	      return;
	    }

	    if (child.type === ProgressBar) {
	      // eslint-disable-line no-use-before-define
	      return;
	    }

	    var childIdentifier = _react2["default"].isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
	    error = new Error('Children of ' + componentName + ' can contain only ProgressBar ' + ('components. Found ' + childIdentifier + '.'));
	  });

	  return error;
	}

	var propTypes = {
	  min: _react.PropTypes.number,
	  now: _react.PropTypes.number,
	  max: _react.PropTypes.number,
	  label: _react.PropTypes.node,
	  srOnly: _react.PropTypes.bool,
	  striped: _react.PropTypes.bool,
	  active: _react.PropTypes.bool,
	  children: onlyProgressBar,

	  /**
	   * @private
	   */
	  isChild: _react.PropTypes.bool
	};

	var defaultProps = {
	  min: 0,
	  max: 100,
	  active: false,
	  isChild: false,
	  srOnly: false,
	  striped: false
	};

	/**
	 * 计算实际显示比例 
	 * @now 显示的总数值
	 * @min 最小数值
	 * @max 最大数值
	 */
	function getPercentage(now, min, max) {
	  var percentage = (now - min) / (max - min) * 100;
	  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
	}

	var clsPrefix = 'u-progress-bar';

	var ProgressBar = function (_React$Component) {
	  _inherits(ProgressBar, _React$Component);

	  function ProgressBar() {
	    _classCallCheck(this, ProgressBar);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ProgressBar.prototype.renderProgressBar = function renderProgressBar(_ref) {
	    var min = _ref.min;
	    var now = _ref.now;
	    var max = _ref.max;
	    var label = _ref.label;
	    var srOnly = _ref.srOnly;
	    var striped = _ref.striped;
	    var active = _ref.active;
	    var colors = _ref.colors;
	    var className = _ref.className;
	    var style = _ref.style;

	    var others = _objectWithoutProperties(_ref, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'colors', 'className', 'style']);

	    var classes = {
	      active: active,
	      'u-progress-bar': true,
	      'u-progress-bar-striped': active || striped
	    };

	    if (colors) {
	      classes[clsPrefix + '-' + colors] = true;
	    }
	    //返回不敢wrapper的progressbar
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        role: 'progressbar',
	        className: (0, _classnames2["default"])(className, classes),
	        style: _extends({ width: getPercentage(now, min, max) + '%' }, style),
	        'u-valuenow': now,
	        'u-valuemin': min,
	        'u-valuemax': max
	      }),
	      srOnly ? _react2["default"].createElement(
	        'span',
	        { className: 'sr-only' },
	        label
	      ) : label
	    );
	  };

	  ProgressBar.prototype.render = function render() {
	    //先处理以组ProgressBar形式使用情况
	    var _props = this.props;
	    var isChild = _props.isChild;

	    var props = _objectWithoutProperties(_props, ['isChild']);

	    // 判断isChild是否为true,如果是true,直接渲染成bar


	    if (isChild) {
	      return this.renderProgressBar(props);
	    }

	    var min = props.min;
	    var now = props.now;
	    var max = props.max;
	    var label = props.label;
	    var srOnly = props.srOnly;
	    var striped = props.striped;
	    var active = props.active;
	    var colors = props.colors;
	    var className = props.className;
	    var style = props.style;
	    var children = props.children;

	    var wrapperProps = _objectWithoutProperties(props, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'colors', 'className', 'style', 'children']);

	    /**
	    * 如果是单独直接用<ProgressBar /> 走children判断为false语句。
	    * 如果以组的形式使用<ProgressBar><ProgressBar now={10} /><ProgressBar now={20}/></ProgressBar> 走判断语句为true，
	    * 将children分别加上isChild=true的属性
	    */


	    return _react2["default"].createElement(
	      'div',
	      _extends({}, wrapperProps, {
	        className: (0, _classnames2["default"])(className, 'u-progress')
	      }),
	      children ? _react2["default"].Children.map(children, function (child) {
	        return (0, _react.cloneElement)(child, { isChild: true });
	      }) : this.renderProgressBar({
	        min: min, now: now, max: max, label: label, srOnly: srOnly, striped: striped, active: active, colors: colors, className: className, style: style
	      })
	    );
	  };

	  return ProgressBar;
	}(_react2["default"].Component);

	ProgressBar.propTypes = propTypes;
	ProgressBar.defaultProps = defaultProps;

	exports["default"] = ProgressBar;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(50);


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _RadioGroup = __webpack_require__(51);

	var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _RadioGroup2["default"];
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Radio = __webpack_require__(52);

	var _Radio2 = _interopRequireDefault(_Radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  name: _react.PropTypes.string,
	  /**
	   * 选中的值
	   */
	  selectedValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]),
	  /**
	  * 暴露给用户，且与子Radio通信的方法
	  */
	  onChange: _react.PropTypes.func,

	  children: _react.PropTypes.node.isRequired,

	  Component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func, _react.PropTypes.object])
	};

	var defaultProps = {
	  Component: 'div'
	};

	/**
	 * 与子Radio通信
	 */
	var childContextTypes = {
	  radioGroup: _react2["default"].PropTypes.object
	};

	var RadioGroup = function (_React$Component) {
	  _inherits(RadioGroup, _React$Component);

	  function RadioGroup(props, context) {
	    _classCallCheck(this, RadioGroup);

	    return _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	  }

	  /**
	    * 一旦外层change方法触发本身props发生改变，则调用getChildContext更新与子Radio的通信信息（radioGroup）
	    */

	  RadioGroup.prototype.getChildContext = function getChildContext() {
	    var _props = this.props;
	    var name = _props.name;
	    var selectedValue = _props.selectedValue;
	    var onChange = _props.onChange;

	    return {
	      radioGroup: {
	        name: name, selectedValue: selectedValue, onChange: onChange
	      }
	    };
	  };

	  RadioGroup.prototype.render = function render() {
	    var _props2 = this.props;
	    var Component = _props2.Component;
	    var name = _props2.name;
	    var selectedValue = _props2.selectedValue;
	    var onChange = _props2.onChange;
	    var children = _props2.children;

	    var others = _objectWithoutProperties(_props2, ['Component', 'name', 'selectedValue', 'onChange', 'children']);

	    return _react2["default"].createElement(
	      Component,
	      others,
	      children
	    );
	  };

	  return RadioGroup;
	}(_react2["default"].Component);

	RadioGroup.childContextTypes = childContextTypes;
	RadioGroup.propTypes = propTypes;
	RadioGroup.defaultProps = defaultProps;
	RadioGroup.Radio = _Radio2["default"];
	exports["default"] = RadioGroup;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	    * radio 颜色 样式
	    */
	  colors: _react2["default"].PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),
	  /**
	  * radio 是否可用
	  */
	  disabled: _react2["default"].PropTypes.bool
	};

	var defaultProps = {
	  active: false,
	  disabled: false
	};

	/**
	 * 建立与RadioGroup通信
	 */
	var contextTypes = {
	  radioGroup: _react2["default"].PropTypes.object
	};

	var clsPrefix = "u-radio";

	var Radio = function (_React$Component) {
	  _inherits(Radio, _React$Component);

	  function Radio(props, context) {
	    _classCallCheck(this, Radio);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleClick = _this.handleClick.bind(_this);

	    return _this;
	  }

	  Radio.prototype.handleClick = function handleClick(event) {
	    var onChange = this.context.radioGroup.onChange;


	    if (this.props.disabled) {
	      return;
	    }

	    if (onChange) {
	      onChange(this.props.value);
	    }
	  };

	  Radio.prototype.render = function render() {
	    var _context$radioGroup = this.context.radioGroup;
	    var name = _context$radioGroup.name;
	    var selectedValue = _context$radioGroup.selectedValue;
	    /**
	     * 自身的属性
	     */

	    var _props = this.props;
	    var disabled = _props.disabled;
	    var colors = _props.colors;
	    var className = _props.className;
	    var children = _props.children;

	    var others = _objectWithoutProperties(_props, ['disabled', 'colors', 'className', 'children']);

	    var optional = {};
	    /**
	     * 若父级selectedValue与本身的value值相同，则改radio被选中
	     */
	    if (selectedValue !== undefined) {
	      optional.checked = this.props.value === selectedValue;
	    }

	    var classes = {
	      'u-radio': true,
	      'is-checked': optional.checked,
	      disabled: disabled
	    };

	    if (colors) {
	      classes[clsPrefix + '-' + colors] = true;
	    }

	    var input = _react2["default"].createElement('input', _extends({}, others, {
	      type: 'radio',
	      name: name,
	      disabled: this.props.disabled
	    }));
	    return _react2["default"].createElement(
	      'label',
	      { onClick: this.handleClick, className: (0, _classnames2["default"])(className, classes) },
	      input,
	      _react2["default"].createElement(
	        'label',
	        { className: 'u-radio-label' },
	        children
	      )
	    );
	  };

	  return Radio;
	}(_react2["default"].Component);

	Radio.contextTypes = contextTypes;
	Radio.propTypes = propTypes;
	Radio.defaultProps = defaultProps;

	exports["default"] = Radio;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(54);


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Switch = __webpack_require__(55);

	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Switch2["default"];
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		clsPrefix: _react.PropTypes.string,
		disabled: _react.PropTypes.bool,
		checkedChildren: _react.PropTypes.any,
		unCheckedChildren: _react.PropTypes.any,
		onChangeHandler: _react.PropTypes.func
	};
	var defaultProps = {
		clsPrefix: 'u-switch',
		checkedChildren: null,
		unCheckedChildren: null,
		defaultChecked: false,
		size: '',
		disabled: false,
		onChangeHandler: function onChangeHandler() {}
	};

	var Switch = function (_Component) {
		_inherits(Switch, _Component);

		function Switch(props) {
			_classCallCheck(this, Switch);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props));

			var checked = false;
			if ('checked' in _this.props) {
				checked = !!_this.props.checked;
			} else {
				checked = !!_this.props.defaultChecked;
			}
			_this.state = {
				checked: checked
			};
			_this.clickHandler = _this.clickHandler.bind(_this);
			return _this;
		}
		//点击switch改变状态


		Switch.prototype.clickHandler = function clickHandler() {
			var checked = this.state.checked;
			this.setState({
				checked: !checked
			});
			this.props.onChangeHandler(!checked);
		};

		Switch.prototype.render = function render() {
			var _props = this.props;
			var checkedChildren = _props.checkedChildren;
			var unCheckedChildren = _props.unCheckedChildren;
			var onChangeHandler = _props.onChangeHandler;
			var size = _props.size;
			var className = _props.className;
			var clsPrefix = _props.clsPrefix;
			var colors = _props.colors;
			//获取checked

			var checked = this.state.checked;
			var classes = {
				'is-checked': checked
			};
			if (size) {
				classes[clsPrefix + '-' + size] = true;
			}
			if (colors) {
				classes[clsPrefix + '-' + colors] = true;
			}
			var classNames = (0, _classnames2["default"])(clsPrefix, classes);

			return _react2["default"].createElement(
				'div',
				null,
				_react2["default"].createElement(
					'span',
					{ onClick: this.clickHandler, className: (0, _classnames2["default"])(className, classNames), tabIndex: '0' },
					_react2["default"].createElement(
						'span',
						{
							className: clsPrefix + '-inner' },
						checked ? checkedChildren : unCheckedChildren
					)
				)
			);
		};

		return Switch;
	}(_react.Component);

	Switch.propTypes = propTypes;
	Switch.defaultProps = defaultProps;
	exports["default"] = Switch;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(57);


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Tooltip = __webpack_require__(58);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Tooltip2["default"];
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * An html id attribute, necessary for accessibility
	   * @type {string|number}
	   * @required
	   */
	  id: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),

	  /**
	   * Sets the direction the Tooltip is positioned towards.
	   */
	  placement: _react2["default"].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

	  /**
	   * The "top" position value for the Tooltip.
	   */
	  positionTop: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),
	  /**
	   * The "left" position value for the Tooltip.
	   */
	  positionLeft: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),

	  /**
	   * 与目标Top的距离
	   */
	  arrowOffsetTop: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),
	  /**
	   * 与目标Left的距离
	   */
	  arrowOffsetLeft: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string])
	};

	var defaultProps = {
	  placement: 'right'
	};

	var clsPrefix = 'u-tooltip';

	var Tooltip = function (_React$Component) {
	  _inherits(Tooltip, _React$Component);

	  function Tooltip() {
	    _classCallCheck(this, Tooltip);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Tooltip.prototype.render = function render() {
	    var _props = this.props;
	    var placement = _props.placement;
	    var positionTop = _props.positionTop;
	    var positionLeft = _props.positionLeft;
	    var arrowOffsetTop = _props.arrowOffsetTop;
	    var arrowOffsetLeft = _props.arrowOffsetLeft;
	    var className = _props.className;
	    var style = _props.style;
	    var children = _props.children;

	    var others = _objectWithoutProperties(_props, ['placement', 'positionTop', 'positionLeft', 'arrowOffsetTop', 'arrowOffsetLeft', 'className', 'style', 'children']);

	    var classes = _defineProperty({
	      'u-tooltip': true
	    }, placement, true);

	    var outerStyle = _extends({
	      top: positionTop,
	      left: positionLeft
	    }, style);

	    var arrowStyle = {
	      top: arrowOffsetTop,
	      left: arrowOffsetLeft
	    };

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        role: 'tooltip',
	        className: (0, _classnames2["default"])(className, classes),
	        style: outerStyle
	      }),
	      _react2["default"].createElement('div', { className: 'tooltip-arrow', style: arrowStyle }),
	      _react2["default"].createElement(
	        'div',
	        { className: 'tooltip-inner' },
	        children
	      )
	    );
	  };

	  return Tooltip;
	}(_react2["default"].Component);

	Tooltip.propTypes = propTypes;
	Tooltip.defaultProps = defaultProps;

	exports["default"] = Tooltip;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(__webpack_module_template_argument_0__);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }
/******/ ])))
});
;