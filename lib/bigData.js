"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = bigData;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultHeight = 30;
var rowDiff = 2; //行差值
var treeTypeIndex = 0;
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
      _this2.rowsInView = scrollY ? Math.floor(scrollY / rowHeight) : 20;
      _this2.currentIndex = 0;
      _this2.loadCount = props.loadBuffer ? _this2.rowsInView + props.loadBuffer * 2 : 26; //一次加载多少数据
      _this2.cachedRowHeight = []; //缓存每行的高度
      _this2.cachedRowParentIndex = [];
      _this2.expandChildRowKeys = [];
      _this2.firstLevelKey = [];
      _this2.keys = [];
      _this2.lastScrollTop = 0;
      _this2.currentScrollTop = 0;
      _this2.startIndex = _this2.currentIndex; //数据开始位置
      _this2.endIndex = _this2.currentIndex + _this2.loadCount; //数据结束位置
      _this2.setRowHeight = _this2.setRowHeight.bind(_this2);
      _this2.setRowParentIndex = _this2.setRowParentIndex.bind(_this2);
      _this2.expandedRowKeys = [];
      _this2.flatTreeKeysMap = {}; //树表，扁平结构数据的 Map 映射，方便获取各节点信息
      _this2.flatTreeData = []; //深度遍历处理后的data数组
      _this2.treeData = []; //树表的data数据
      return _this2;
    }

    BigData.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var props = this.props;
      var currentIndex = nextProps.currentIndex,
          data = nextProps.data;

      var _this = this,
          dataLen = data.length;
      if (nextProps.scroll.y !== props.scroll.y) {
        var rowHeight = nextProps.height ? nextProps.height : defaultHeight;
        var scrollY = nextProps.scroll.y ? parseInt(nextProps.scroll.y) : 0;
        _this.rowsInView = scrollY ? Math.floor(scrollY / rowHeight) : 20;
        _this.loadCount = props.loadBuffer ? _this.rowsInView + props.loadBuffer * 2 : 26; //一次加载多少数据
        _this.currentIndex = 0;
        _this.startIndex = _this.currentIndex; //数据开始位置
        _this.endIndex = _this.currentIndex + _this.loadCount; //数据结束位置
      }
      if (nextProps.data.toString() !== props.data.toString()) {
        //fix: 滚动加载场景中,数据动态改变下占位计算错误的问题(26 Jun)
        _this.cachedRowHeight = []; //缓存每行的高度
        _this.cachedRowParentIndex = [];
        _this.computeCachedRowParentIndex(nextProps.data);
        if (nextProps.data.length > 0) {
          _this.endIndex = _this.currentIndex - nextProps.loadBuffer + _this.loadCount; //数据结束位置
        }
      }
      //如果传currentIndex，会判断该条数据是否在可视区域，如果没有的话，则重新计算startIndex和endIndex
      if (currentIndex !== -1 && currentIndex !== this.currentIndex) {
        _this.setStartAndEndIndex(currentIndex, dataLen);
      }
    };

    BigData.prototype.componentWillMount = function componentWillMount() {
      var endIndex = this.endIndex,
          startIndex = this.startIndex;

      var sliceTreeList = [];
      var _props = this.props,
          data = _props.data,
          isTree = _props.isTree;

      var isTreeType = isTree ? true : this.checkIsTreeType();
      //设置data中每个元素的parentIndex
      this.computeCachedRowParentIndex(data);
      //如果是树表，递归data
      if (isTreeType) {
        this.treeType = isTreeType;
        var flatTreeData = this.deepTraversal(data);
        sliceTreeList = flatTreeData.slice(startIndex, endIndex);
        this.flatTreeData = flatTreeData;
        this.handleTreeListChange(sliceTreeList);
      }
    };

    /**
     * 深度遍历树形 data，把数据拍平，变为一维数组
     * @param {*} data 
     * @param {*} parentKey 标识父节点
     * @param {*} isShown 该节点是否显示在页面中，当节点的父节点是展开状态 或 该节点是根节点时，该值为 true
     */


    /**
     * 将截取后的 List 数组转换为 Tree 结构，并更新 state
     */


    /**
     *设置data中每个元素的parentIndex
     *
     */


    BigData.prototype.setStartAndEndIndex = function setStartAndEndIndex(currentIndex, dataLen) {
      var _this = this;
      if (currentIndex > _this.currentIndex + _this.rowsInView) {
        _this.currentIndex = currentIndex;
        _this.endIndex = _this.currentIndex; //数据开始位置
        _this.startIndex = _this.currentIndex - _this.loadCount; //数据结束位置
        if (_this.endIndex > dataLen) {
          _this.endIndex = dataLen;
        }
        if (_this.startIndex < 0) {
          _this.startIndex = 0;
        }
        //重新设定scrollTop值
        _this.scrollTop = _this.getSumHeight(0, _this.endIndex - _this.rowsInView + 2);
      } else if (currentIndex < _this.currentIndex) {
        _this.currentIndex = currentIndex;
        _this.startIndex = currentIndex;
        _this.endIndex = currentIndex + _this.loadCount;
        if (_this.endIndex > dataLen) {
          _this.endIndex = dataLen;
        }
        if (_this.startIndex < 0) {
          _this.startIndex = 0;
        }
        //重新设定scrollTop值
        _this.scrollTop = _this.getSumHeight(0, _this.startIndex);
      }
    };

    BigData.prototype.getRowKey = function getRowKey(record, index) {
      var rowKey = this.props.rowKey;
      var key = typeof rowKey === "function" ? rowKey(record, index) : record[rowKey];

      return key;
    };
    /**
     *判断是否是树形结构
     *
     */


    BigData.prototype.checkIsTreeType = function checkIsTreeType() {
      var data = this.props.data;

      var rs = false;
      var len = data.length > 30 ? 30 : data.length;
      //取前三十个看看是否有children属性，有则为树形结构
      for (var i = 0; i < len; i++) {
        if (data[i].children) {
          rs = true;
          break;
        }
      }
      return rs;
    };

    BigData.prototype.getData = function getData(data, parentIndex) {
      var _this3 = this;

      data.forEach(function (subItem, subIndex) {
        _this3.cachedRowParentIndex[treeTypeIndex] = parentIndex;
        _this3.keys[treeTypeIndex] = _this3.getRowKey(subItem, subIndex);
        treeTypeIndex++;
        if (subItem.children) {
          _this3.getData(subItem.children, parentIndex);
        }
      });
    };

    BigData.prototype.componentWillUnmount = function componentWillUnmount() {
      this.cachedRowHeight = [];
      this.cachedRowParentIndex = [];
    };
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
      var sumHeight = 0,
          currentKey = void 0,
          currentRowHeight = rowHeight;

      for (var i = start; i < end; i++) {
        if (this.cachedRowHeight[i] == undefined) {
          if (this.treeType) {
            // currentKey = this.keys[i];
            currentKey = this.flatTreeData[i].key;
            currentRowHeight = 0;
            if (this.flatTreeKeysMap.hasOwnProperty(currentKey)) {
              currentRowHeight = rowHeight;
            }
          }
          sumHeight += currentRowHeight;
        } else {
          sumHeight += this.cachedRowHeight[i];
        }
      }
      return sumHeight;
    };

    /**
     *@description  根据返回的scrollTop计算当前的索引。此处做了两次缓存一个是根据上一次的currentIndex计算当前currentIndex。另一个是根据当前内容区的数据是否在缓存中如果在则不重新render页面
     *@param 最新一次滚动的scrollTop
     *@param treeType是否是树状表
     *@param callback表体滚动过程中触发的回调
     */


    BigData.prototype.setRowHeight = function setRowHeight(height, index) {
      this.cachedRowHeight[index] = height;
    };

    BigData.prototype.setRowParentIndex = function setRowParentIndex(parentIndex, index) {}
    // this.cachedRowParentIndex[index] = parentIndex;

    /**
     *
     *根据当前行号获取该行的父节点行号
     * @param {*} currentIndex 当前行号
     */
    ;

    BigData.prototype.getParentIndex = function getParentIndex(targetIndex) {
      var data = this.props.data;

      var parentIndex = -1;
      parentIndex = this.getIndex(data, -1, targetIndex);
      if (parentIndex < 0) {
        //小于0说明没有展开的子节点
        parentIndex = targetIndex;
      }
      return parentIndex;
    };

    BigData.prototype.getIndex = function getIndex(data, index, targetIndex) {
      var parentIndex = index;
      for (var i = 0; i < data.length; i++) {
        index++;
        if (targetIndex <= index) {
          break;
        }
        if (data[i].children) {
          this.getIndex(data[i].children, index, targetIndex);
        }
      }
      return parentIndex;
    };

    BigData.prototype.render = function render() {
      var data = this.props.data;
      var scrollTop = this.scrollTop;
      var endIndex = this.endIndex,
          startIndex = this.startIndex,
          treeData = this.treeData,
          treeType = this.treeType,
          flatTreeData = this.flatTreeData;

      var expandedRowKeys = this.props.expandedRowKeys ? this.props.expandedRowKeys : this.expandedRowKeys;
      if (startIndex < 0) {
        startIndex = 0;
      }
      if (endIndex < 0) {
        endIndex = 0;
      }
      if (treeType && endIndex > flatTreeData.length || !treeType && endIndex > data.length) {
        endIndex = treeType ? flatTreeData.length : data.length;
      }
      var lazyLoad = {
        startIndex: startIndex,
        endIndex: endIndex,
        startParentIndex: startIndex //为树状节点做准备
      };
      if (treeType) {
        // const preSubCounts = this.cachedRowParentIndex.findIndex(item => {
        //   return item == startIndex;
        // });
        // const sufSubCounts = this.cachedRowParentIndex.findIndex(item => {
        //   return item == endIndex;
        // });
        // lazyLoad.preHeight = this.getSumHeight(
        //   0,
        //   preSubCounts > -1 ? preSubCounts : 0
        // );
        // lazyLoad.sufHeight = this.getSumHeight(
        //   sufSubCounts + 1 > 0
        //     ? sufSubCounts + 1
        //     : this.cachedRowParentIndex.length,
        //   this.cachedRowParentIndex.length
        // );

        // if (preSubCounts > 0) {
        //   lazyLoad.startIndex = preSubCounts;
        // }
        lazyLoad.preHeight = this.getSumHeight(0, startIndex);
        lazyLoad.sufHeight = this.getSumHeight(endIndex, flatTreeData.length);
      } else {
        lazyLoad.preHeight = this.getSumHeight(0, startIndex);
        lazyLoad.sufHeight = this.getSumHeight(endIndex, data.length);
      }
      // console.log('*******expandedRowKeys*****'+expandedRowKeys);
      return _react2["default"].createElement(Table, _extends({}, this.props, {
        data: Array.isArray(treeData) && treeData.length > 0 ? treeData : data.slice(startIndex, endIndex),
        lazyLoad: lazyLoad,
        handleScrollY: this.handleScrollY,
        scrollTop: scrollTop,
        setRowHeight: this.setRowHeight,
        setRowParentIndex: this.setRowParentIndex,
        onExpand: this.onExpand,
        onExpandedRowsChange: this.onExpandedRowsChange,
        expandedRowKeys: expandedRowKeys
        //   className={'lazy-table'}
      }));
    };

    return BigData;
  }(_react.Component), _class.defaultProps = {
    data: [],
    loadBuffer: 5,
    rowKey: "key",
    onExpand: function onExpand() {},

    scroll: {},
    currentIndex: -1,
    isTree: false
  }, _class.propTypes = {
    loadBuffer: _propTypes2["default"].number
  }, _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.deepTraversal = function (treeData) {
      var parentKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var isShown = arguments[2];

      var _this = _this4;
      var cacheExpandedKeys = _this.cacheExpandedKeys,
          _this$expandedRowKeys = _this.expandedRowKeys,
          expandedRowKeys = _this$expandedRowKeys === undefined ? [] : _this$expandedRowKeys,
          flatTreeKeysMap = _this.flatTreeKeysMap,
          flatTreeData = [],
          dataCopy = treeData;

      if (Array.isArray(dataCopy)) {
        for (var i = 0, l = dataCopy.length; i < l; i++) {
          var _dataCopy$i = dataCopy[i],
              key = _dataCopy$i.key,
              children = _dataCopy$i.children,
              props = _objectWithoutProperties(_dataCopy$i, ["key", "children"]);

          var dataCopyI = new Object();
          var isLeaf = children ? false : true,
              isExpanded = cacheExpandedKeys ? cacheExpandedKeys.indexOf(key) !== -1 : expandedRowKeys.indexOf(key) !== -1;
          dataCopyI = _extends(dataCopyI, {
            key: key,
            isExpanded: isExpanded,
            parentKey: parentKey,
            isShown: isShown,
            isLeaf: isLeaf,
            index: flatTreeData.length
          }, _extends({}, props));
          //该节点的父节点是展开状态 或 该节点是根节点
          if (isShown || parentKey === null) {
            flatTreeData.push(dataCopyI); // 取每项数据放入一个新数组
            flatTreeKeysMap[key] = dataCopyI;
          }
          if (Array.isArray(children) && children.length > 0) {
            // 若存在children则递归调用，把数据拼接到新数组中，并且删除该children
            flatTreeData = flatTreeData.concat(_this4.deepTraversal(children, key, isExpanded));
          }
        }
      }
      return flatTreeData;
    };

    this.handleTreeListChange = function (treeList, startIndex, endIndex) {
      // 属性配置设置
      var attr = {
        id: 'key',
        parendId: 'parentKey',
        rootId: null,
        isLeaf: 'isLeaf'
      };
      var treeData = (0, _utils.convertListToTree)(treeList, attr, _this4.flatTreeKeysMap);

      _this4.startIndex = typeof startIndex !== "undefined" ? startIndex : _this4.startIndex;
      _this4.endIndex = typeof endIndex !== "undefined" ? endIndex : _this4.endIndex;

      _this4.treeData = treeData;
    };

    this.computeCachedRowParentIndex = function (data) {
      var isTree = _this4.props.isTree;

      var isTreeType = isTree ? true : _this4.checkIsTreeType();
      treeTypeIndex = 0;
      if (isTreeType) {
        data.forEach(function (item, index) {
          _this4.firstLevelKey[index] = _this4.getRowKey(item, index);
          _this4.cachedRowParentIndex[treeTypeIndex] = index;
          //保存所有的keys跟小标对应起来
          _this4.keys[treeTypeIndex] = _this4.getRowKey(item, index);
          treeTypeIndex++;
          if (item.children) {
            _this4.getData(item.children, index);
          }
        });
      }
    };

    this.handleScrollY = function (nextScrollTop, treeType, callback) {
      //树表逻辑
      // 关键点是动态的获取startIndex和endIndex
      // 法子一：子节点也看成普通tr，最开始需要设置一共有多少行，哪行显示哪行不显示如何确定
      // 动态取start = current+buffer对应的父节点、end = start+loadCount+row的height为0的行数 展开节点的下一个节点作为end值，
      var _this = _this4;
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
          currentScrollTop = _this.currentScrollTop,
          flatTreeData = _this.flatTreeData;
      var endIndex = _this.endIndex,
          startIndex = _this.startIndex;
      var needRender = _this.state.needRender;

      _this.scrollTop = nextScrollTop;
      var viewHeight = parseInt(scroll.y);
      _this.treeType = treeType;
      var index = 0;
      var temp = nextScrollTop;
      var currentKey = void 0;
      while (temp > 0) {
        var currentRowHeight = _this4.cachedRowHeight[index];
        if (currentRowHeight === undefined) {
          if (_this4.treeType) {
            // currentKey = this.keys[index];
            currentKey = _this4.flatTreeData[index].key;
            currentRowHeight = 0;
            if (_this4.flatTreeKeysMap.hasOwnProperty(currentKey)) {
              currentRowHeight = rowHeight;
            }
          } else {
            currentRowHeight = rowHeight;
          }
        }
        temp -= currentRowHeight;
        if (temp > 0) {
          index += 1;
        }
      }
      // console.log('currentIndex****',index);
      var isOrder = index - currentIndex > 0 ? true : false;
      if (index < 0) index = 0;
      //如果之前的索引和下一次的不一样则重置索引和滚动的位置
      if (currentIndex !== index) {
        _this.currentIndex = index;
        var rowsInView = 0; //可视区域显示多少行
        var rowsHeight = 0; //可视区域内容高度
        var tempIndex = index;
        //如果可视区域中需要展示的数据已经在缓存中则不重现render。
        if (viewHeight) {
          //有时滚动过快时this.cachedRowHeight[rowsInView + index]为undifined

          while (rowsHeight < viewHeight && tempIndex < _this4.cachedRowHeight.length) {
            if (_this4.cachedRowHeight[tempIndex]) {
              rowsHeight += _this4.cachedRowHeight[tempIndex];
              // if (
              //   (treeType &&
              //     _this.cachedRowParentIndex[tempIndex] !== tempIndex) ||
              //   !treeType
              // ) {
              rowsInView++;
              // }
            }
            tempIndex++;
          }
          // if (treeType) {
          //   const treeIndex = index;
          //   index = _this.cachedRowParentIndex[treeIndex];
          //   if (index === undefined) {
          //     // console.log('index is undefined********'+treeIndex);
          //     index = this.getParentIndex(treeIndex);
          //     // console.log("getParentIndex****"+index);
          //   }
          // }
          // console.log('parentIndex*********',index);
          // 如果rowsInView 小于 缓存的数据则重新render
          // 向下滚动 下临界值超出缓存的endIndex则重新渲染
          if (rowsInView + index > endIndex - rowDiff && isOrder) {
            startIndex = index - loadBuffer > 0 ? index - loadBuffer : 0;
            // endIndex = startIndex + rowsInView + loadBuffer*2;
            endIndex = startIndex + loadCount;
            if (treeType && endIndex > flatTreeData.length || !treeType && endIndex > data.length) {
              endIndex = treeType ? flatTreeData.length : data.length;
            }
            if (endIndex > _this4.endIndex) {
              _this4.startIndex = startIndex;
              _this4.endIndex = endIndex;
              if (treeType) {
                _this4.handleTreeListChange(flatTreeData.slice(startIndex, endIndex), startIndex, endIndex);
              }
              _this4.setState({ needRender: !needRender });
              callback(parseInt(currentIndex + rowsInView));
            }
          }
          // 向上滚动，当前的index是否已经加载（currentIndex），若干上临界值小于startIndex则重新渲染
          if (!isOrder && index < startIndex + rowDiff) {
            startIndex = index - loadBuffer;
            if (startIndex < 0) {
              startIndex = 0;
            }
            if (startIndex < _this4.startIndex) {
              _this4.startIndex = startIndex;
              _this4.endIndex = _this4.startIndex + loadCount;
              if (treeType) {
                _this4.handleTreeListChange(flatTreeData.slice(startIndex, _this4.endIndex), startIndex, _this4.endIndex);
              }
              _this4.setState({ needRender: !needRender });
              callback(parseInt(currentIndex + rowsInView));
            }
            // console.log(
            //   "**index**" + index,
            //   "**startIndex**" + this.startIndex,
            //   "**endIndex**" + this.endIndex
            // );
          }
        }
      }
    };

    this.onExpand = function (expandState, record, index) {
      var _this = _this4;
      var _this$expandedRowKeys2 = _this.expandedRowKeys,
          expandedRowKeys = _this$expandedRowKeys2 === undefined ? [] : _this$expandedRowKeys2;
      var needRender = _this.state.needRender;
      var data = _this.props.data;

      var rowKey = _this.getRowKey(record, index);
      // 记录展开子表行的key
      // 展开
      if (record.children) {
        if (expandState) {
          record.children.forEach(function (item, index) {
            _this.expandChildRowKeys.push(rowKey);
          });
        } else {
          // 收起
          record.children.forEach(function (item, index) {
            _this.expandChildRowKeys.splice(_this.expandChildRowKeys.findIndex(function (fitem) {
              return fitem.key === item.key;
            }), 1);
          });
        }
      }
      //滚动加载expandedRowKeys自己维护，否则有展开不全的问题
      if (!_this.props.expandedRowKeys) {
        if (expandState) {
          expandedRowKeys.push(rowKey);
          _this4.setState({ needRender: !needRender });
        } else {
          var _index = -1;
          expandedRowKeys.forEach(function (r, i) {
            if (r === rowKey) {
              _index = i;
            }
          });
          if (_index !== -1) {
            expandedRowKeys.splice(_index, 1);
            _this4.setState({ needRender: !needRender });
          }
        }
      }

      if (_this4.treeType) {
        //收起和展开时，缓存 expandedKeys
        _this.cacheExpandedKeys = expandedRowKeys;
        //重新递归数据
        var flatTreeData = _this.deepTraversal(data);
        var sliceTreeList = flatTreeData.slice(_this.startIndex, _this.endIndex);
        _this.flatTreeData = flatTreeData;
        _this.handleTreeListChange(sliceTreeList);
        _this.cacheExpandedKeys = null;
      }

      // expandState为true时，记录下
      _this.props.onExpand(expandState, record);
    };
  }, _temp;
}
module.exports = exports["default"];