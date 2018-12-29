'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = bigData;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultHeight = 40;
var rowDiff = 3; //行差值

function bigData(Table) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function (_Component) {
    _inherits(BigData, _Component);

    function BigData(props) {
      _classCallCheck(this, BigData);

      var _this2 = _possibleConstructorReturn(this, _Component.call(this, props));

      _initialiseProps.call(_this2);

      _this2.state = {
        scrollLeft: 0,
        scrollTop: 0
      };
      var rowHeight = _this2.props.height ? _this2.props.height : defaultHeight;
      //默认显示25条，rowsInView根据定高算的。在非固定高下，这个只是一个大概的值。
      var scrollY = _this2.props.scroll.y ? parseInt(_this2.props.scroll.y) : 0;
      _this2.rowsInView = scrollY ? Math.ceil(scrollY / rowHeight) : 20;
      _this2.currentIndex = 0;
      _this2.loadCount = props.loadBuffer ? _this2.rowsInView + props.loadBuffer * 2 : 26; //一次加载多少数据
      _this2.cachedRowHeight = []; //缓存每行的高度
      _this2.lastScrollTop = 0;
      _this2.currentScrollTop = 0;
      _this2.startIndex = _this2.currentIndex; //数据开始位置
      _this2.endIndex = _this2.currentIndex + _this2.loadCount; //数据结束位置 
      _this2.setRowHeight = _this2.setRowHeight.bind(_this2);
      return _this2;
    }
    /**
     *获取数据区高度
     *
     *
     **/


    BigData.prototype.getContentHeight = function getContentHeight() {
      if (!this.props.data) return 0;
      return this.getSumHeight(0, this.props.data.length);
    };

    BigData.prototype.getSumHeight = function getSumHeight(start, end) {
      var height = this.props.height;

      var rowHeight = height ? height : defaultHeight;
      var sumHeight = 0;
      for (var i = start; i < end; i++) {
        sumHeight += this.cachedRowHeight[i] || rowHeight;
      }
      return sumHeight;
    };
    /**
     *@description  根据返回的scrollTop计算当前的索引。此处做了两次缓存一个是根据上一次的currentIndex计算当前currentIndex。另一个是根据当前内容区的数据是否在缓存中如果在则不重新render页面
     *@param 最新一次滚动的scrollTop
     */


    BigData.prototype.setRowHeight = function setRowHeight(height, index) {
      this.cachedRowHeight[index] = height;
    };

    BigData.prototype.render = function render() {
      var data = this.props.data;
      var scrollTop = this.scrollTop;
      var endIndex = this.endIndex,
          startIndex = this.startIndex;

      var lazyLoad = {
        preHeight: this.getSumHeight(0, startIndex),
        sufHeight: this.getSumHeight(endIndex, data.length),
        startIndex: startIndex
      };
      return _react2["default"].createElement(Table, _extends({}, this.props, {
        data: data.slice(startIndex, endIndex),
        lazyLoad: lazyLoad,
        handleScroll: this.handleScroll,
        scrollTop: scrollTop,
        setRowHeight: this.setRowHeight
        //   className={'lazy-table'}
      }));
    };

    return BigData;
  }(_react.Component), _class.defaultProps = {
    data: [],
    loadBuffer: 5
  }, _class.propTypes = {
    loadBuffer: _propTypes2["default"].number
  }, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.handleScroll = function (nextScrollTop) {
      var _this = _this3;
      var _this$props = _this.props,
          data = _this$props.data,
          height = _this$props.height,
          _this$props$scroll = _this$props.scroll,
          scroll = _this$props$scroll === undefined ? {} : _this$props$scroll,
          loadBuffer = _this$props.loadBuffer;

      var rowHeight = height ? height : defaultHeight;
      var _this$currentIndex = _this.currentIndex,
          currentIndex = _this$currentIndex === undefined ? 0 : _this$currentIndex,
          loadCount = _this.loadCount,
          scrollTop = _this.scrollTop,
          currentScrollTop = _this.currentScrollTop;
      var endIndex = _this.endIndex,
          startIndex = _this.startIndex;
      var needRender = _this.state.needRender;

      var viewHeight = parseInt(scroll.y);
      // let index = currentIndex;//记录下次当前位置
      // let temp = currentIndex ?nextScrollTop - currentScrollTop:nextScrollTop;

      // const isOrder = temp > 0 ?true:false;//true为向下滚动、false为向上滚动

      // //根据scrollTop计算下次当前索引的位置
      // if(isOrder){
      //     while (temp > 0) {
      //         temp -= this.cachedRowHeight[index] || rowHeight
      //         if(temp > 0){
      //           index += 1
      //           //保存当前index对应的scrollTop
      //         this.currentScrollTop += this.cachedRowHeight[index]|| rowHeight;
      //         }
      //       }
      // }else{
      //     while(temp < 0){
      //         temp += this.cachedRowHeight[index] || rowHeight
      //         if(temp < 0){
      //           index -= 1
      //           this.currentScrollTop -= this.cachedRowHeight[index]|| rowHeight;
      //         }
      //     }
      // }
      var index = 0;
      var temp = nextScrollTop;
      while (temp > 0) {
        temp -= _this3.cachedRowHeight[index] || rowHeight;
        if (temp > 0) {
          index += 1;
        }
      }
      var isOrder = index - currentIndex > 0 ? true : false;
      if (index < 0) index = 0;
      console.log('currentIndex****' + index);
      //如果之前的索引和下一次的不一样则重置索引和滚动的位置
      if (currentIndex !== index) {
        _this.currentIndex = index;
        _this.scrollTop = nextScrollTop;
        var rowsInView = 0; //可视区域显示多少行
        var rowsHeight = 0; //可视区域内容高度

        //如果可视区域中需要展示的数据已经在缓存中则不重现render。
        if (viewHeight) {
          //有时滚动过快时this.cachedRowHeight[rowsInView + index]为undifined
          while (rowsHeight < viewHeight && _this3.cachedRowHeight[rowsInView + index]) {
            rowsHeight += _this3.cachedRowHeight[rowsInView + index];
            rowsInView++;
          }
          // 如果rowsInView 小于 缓存的数据则重新render 
          // 向下滚动 下临界值超出缓存的endIndex则重新渲染
          if (rowsInView + index > endIndex - rowDiff && isOrder) {

            _this3.startIndex = index - loadBuffer;
            endIndex = _this3.startIndex + loadCount;
            if (endIndex > data.length) {
              endIndex = data.length;
            }
            _this3.endIndex = endIndex;
            _this3.setState({ needRender: !needRender });
          }
          // 向上滚动，当前的index是否已经加载（currentIndex），若干上临界值小于startIndex则重新渲染
          if (!isOrder && index < startIndex + rowDiff) {
            startIndex = index - loadBuffer;
            if (startIndex < 0) {
              startIndex = 0;
            }
            _this3.startIndex = startIndex;
            _this3.endIndex = _this3.startIndex + loadCount;
            _this3.setState({ needRender: !needRender });
          }
        }
        console.log('**index**' + index, "**startIndex**" + _this3.startIndex, "**endIndex**" + _this3.endIndex);
      }
    };
  }, _temp;
}
module.exports = exports['default'];