'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = exports.EventUtil = exports.tryParseInt = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.measureScrollbar = measureScrollbar;
exports.debounce = debounce;
exports.warningOnce = warningOnce;
exports.getOffset = getOffset;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.ObjectAssign = ObjectAssign;
exports.closest = closest;
exports.getMaxColChildrenLength = getMaxColChildrenLength;
exports.getColChildrenLength = getColChildrenLength;
exports.DicimalFormater = DicimalFormater;
exports.checkDicimalInvalid = checkDicimalInvalid;
exports.formatMoney = formatMoney;
exports.convertListToTree = convertListToTree;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _parseInt = require('lodash/parseInt');

var _parseInt2 = _interopRequireDefault(_parseInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var scrollbarSize = void 0;

// Measure scrollbar width for padding body during modal show/hide
var scrollbarMeasure = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

function measureScrollbar() {
  var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vertical';


  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return 0;
  }
  var tableDom = document.querySelector('.u-table');
  var currentDom = tableDom ? tableDom : document.body;

  if (scrollbarSize) {
    return scrollbarSize;
  }
  var scrollDiv = document.createElement('div');
  Object.keys(scrollbarMeasure).forEach(function (scrollProp) {
    scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
  });
  currentDom.appendChild(scrollDiv);
  var size = 0;
  if (direction === 'vertical') {
    size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  } else if (direction === 'horizontal') {
    size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
  }

  currentDom.removeChild(scrollDiv);
  scrollbarSize = size;
  return scrollbarSize;
}

function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function debounceFunc() {
    var context = this;
    var args = arguments;
    // https://fb.me/react-event-pooling
    if (args[0] && args[0].persist) {
      args[0].persist();
    }
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

var warned = {};
function warningOnce(condition, format, args) {
  if (!warned[format]) {
    (0, _warning2["default"])(condition, format, args);
    warned[format] = true;
  }
}
function getOffset(Node, offset) {
  if (!offset) {
    offset = {};
    offset.top = 0;
    offset.left = 0;
  }
  if (Node == document.body) {
    return offset;
  }
  offset.top += Node.offsetTop;
  offset.left += Node.offsetLeft;
  if (Node.offsetParent) return getOffset(Node.offsetParent, offset);else return offset;
};

var tryParseInt = exports.tryParseInt = function tryParseInt(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var resultValue = (0, _parseInt2["default"])(value);

  if (isNaN(resultValue)) {
    return defaultValue;
  }
  return resultValue;
};

function addClass(elm, className) {
  if (!className) return;

  var els = Array.isArray(elm) ? elm : [elm];

  els.forEach(function (el) {
    if (el.classList) {
      el.classList.add(className.split(' '));
    } else {
      el.className += ' ' + className;
    }
  });
}

function removeClass(elm, className) {
  if (!className) return;

  var els = Array.isArray(elm) ? elm : [elm];

  els.forEach(function (el) {
    if (el.classList) {
      el.classList.remove(className.split(' '));
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  });
}

/**
 * 简单数组数据对象拷贝
 * @param {*} obj 要拷贝的对象 
 */
function ObjectAssign(obj) {
  var b = obj instanceof Array;
  var tagObj = b ? [] : {};
  if (b) {
    //数组
    obj.forEach(function (da) {
      var _da = {};
      _extends(_da, da);
      tagObj.push(_da);
    });
  } else {
    _extends(tagObj, obj);
  }
  return tagObj;
}
/**
 * 获取某个父元素
 * */

function closest(ele, selector) {
  var matches = ele.matches || ele.webkitMatchesSelector || ele.mozMatchesSelector || ele.msMatchesSelector;
  if (matches) {
    while (ele) {
      if (matches.call(ele, selector)) {
        return ele;
      } else {
        ele = ele.parentElement;
      }
    }
  }
  return null;
}

function getMaxColChildrenLength(columns) {
  var arr = [];
  arr = columns.map(function (item, index) {
    var chilrenLen = 0;
    if (item.children) {
      chilrenLen = getColChildrenLength(item.children, chilrenLen + 1);
    }
    return chilrenLen;
  });
  var max = Math.max.apply(null, arr);
  return max;
}

function getColChildrenLength(columns, chilrenLen) {
  columns.forEach(function (item, index) {
    if (item.children) {
      chilrenLen = getColChildrenLength(item.children, chilrenLen + 1);
    }
  });
  return chilrenLen;
}

function addHandler(element, type, handler) {
  var event = null;
  if (element.addEventListener) {
    //检测是否为DOM2级方法
    event = element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    //检测是否为IE级方法
    event = element.attachEvent("on" + type, handler);
  } else {
    //检测是否为DOM0级方法
    event = element["on" + type] = handler;
  }
  return event;
}

function removeHandler(element, type, handler) {
  if (element && element.removeEventListener) {
    //element&& ie11报错兼容
    element.removeEventListener(type, handler, false);
  } else if (element && element.detachEvent) {
    element.detachEvent("on" + type, handler);
  } else if (element) {
    element["on" + type] = null;
  }
}

//获取事件对象的兼容性写法
function getEvent(event) {
  return event ? event : window.event;
}

//获取事件对象目标的兼容性写法
function getTarget(event) {
  return event.target || event.srcElement;
}

function preventDefault(event) {
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

function stopPropagation(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
}

//用事件冒泡方式，如果想兼容事件捕获只需要添加个bool参数
var EventUtil = exports.EventUtil = {
  addHandler: function addHandler(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    } else {
      element['on' + type] = handler;
    }
  },

  removeHandler: function removeHandler(element, type, handler) {
    //element&& ie11报错兼容
    if (element && element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element && element.detachEvent) {
      element.detachEvent('on' + type, handler);
    } else if (element) {
      element['on' + type] = null;
    }
  }

  /*
   * 处理精度
   */
};function DicimalFormater(value, precision) {
  var value = value + '',
      precision = precision ? precision : 0;
  for (var i = 0; i < value.length; i++) {
    if ("-0123456789.".indexOf(value.charAt(i)) == -1) return "";
  }
  return checkDicimalInvalid(value, precision);
};
function checkDicimalInvalid(value, precision) {
  if (value == null || isNaN(value)) return "";
  // 浮点数总位数不能超过10位
  var digit = parseFloat(value);
  var result = (digit * Math.pow(10, precision) / Math.pow(10, precision)).toFixed(precision);
  if (result == "NaN") return "";
  return result;
};

/**
 * 将数值转化为货币类型
 * @param {*} number 数值
 * @param {*} places 精度
 * @param {*} thousand 是否展示千分位
 */
function formatMoney(number, places, thousand) {
  number = number || 0;
  places = !isNaN(places = Math.abs(places)) ? places : 2;
  var thousandSymbol = thousand ? "," : '';
  var negative = number < 0 ? "-" : "";
  var i = (0, _parseInt2["default"])(number = Math.abs(+number || 0).toFixed(places), 10) + "";
  var j = (j = i.length) > 3 ? j % 3 : 0;
  return negative + (j ? i.substr(0, j) + thousandSymbol : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousandSymbol) + (places ? '.' + Math.abs(number - i).toFixed(places).slice(2) : "");
}

var Event = exports.Event = {
  addHandler: addHandler,
  removeHandler: removeHandler,
  getEvent: getEvent,
  getTarget: getTarget,
  preventDefault: preventDefault,
  stopPropagation: stopPropagation

  /**
   * 将一维数组转换为树结构
   * @param {*} treeData  扁平结构的 List 数组
   * @param {*} attr 属性配置设置
   * @param {*} flatTreeKeysMap 存储所有 key-value 的映射，方便获取各节点信息
   */
};function convertListToTree(treeData, attr, flatTreeKeysMap) {
  var tree = []; //存储所有一级节点
  var resData = treeData,
      //resData 存储截取的节点 + 父节点（除一级节点外）
  resKeysMap = {},
      //resData 的Map映射
  treeKeysMap = {}; //tree 的Map映射
  resData.map(function (element) {
    var key = attr.id;
    resKeysMap[element[key]] = element;
  });
  // 查找父节点，为了补充不完整的数据结构
  var findParentNode = function findParentNode(node) {
    var parentKey = node[attr.parendId];
    if (parentKey !== attr.rootId) {
      //如果不是根节点，则继续递归
      var item = flatTreeKeysMap[parentKey];
      // 用 resKeysMap 判断，避免重复计算某节点的父节点
      if (resKeysMap.hasOwnProperty(item[attr.id])) return;
      resData.unshift(item);
      resKeysMap[item[attr.id]] = item;
      findParentNode(item);
    } else {
      // 用 treeKeysMap 判断，避免重复累加
      if (!treeKeysMap.hasOwnProperty(node[attr.id])) {
        var key = node.key,
            title = node.title,
            children = node.children,
            isLeaf = node.isLeaf,
            otherProps = _objectWithoutProperties(node, ['key', 'title', 'children', 'isLeaf']);

        var obj = {
          key: key,
          title: title,
          isLeaf: isLeaf,
          children: []
        };
        tree.push(_extends(obj, _extends({}, otherProps)));
        treeKeysMap[key] = node;
      }
    }
  };
  // 遍历 resData ，找到所有的一级节点
  for (var i = 0; i < resData.length; i++) {
    var item = resData[i];
    if (item[attr.parendId] === attr.rootId && !treeKeysMap.hasOwnProperty(item[attr.id])) {
      //如果是根节点，就存放进 tree 对象中
      var key = item.key,
          title = item.title,
          children = item.children,
          otherProps = _objectWithoutProperties(item, ['key', 'title', 'children']);

      var obj = {
        key: item[attr.id],
        isLeaf: item[attr.isLeaf],
        children: []
      };
      tree.push(_extends(obj, _extends({}, otherProps)));
      treeKeysMap[key] = item;
      resData.splice(i, 1);
      i--;
    } else {
      //递归查找根节点信息
      findParentNode(item);
    }
  }
  // console.log('resData',resKeysMap);
  var run = function run(treeArrs) {
    if (resData.length > 0) {
      for (var _i = 0; _i < treeArrs.length; _i++) {
        for (var j = 0; j < resData.length; j++) {
          var _item = resData[j];
          if (treeArrs[_i].key === _item[attr.parendId]) {
            var _key = _item.key,
                _title = _item.title,
                _children = _item.children,
                _otherProps = _objectWithoutProperties(_item, ['key', 'title', 'children']);

            var _obj = {
              key: _item[attr.id],
              isLeaf: _item[attr.isLeaf],
              children: []
            };
            treeArrs[_i].children.push(_extends(_obj, _extends({}, _otherProps)));
            resData.splice(j, 1);
            j--;
          }
        }
        run(treeArrs[_i].children);
      }
    }
  };
  run(tree);
  return tree;
}