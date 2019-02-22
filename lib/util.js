'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.sortBy = sortBy;
exports.compare = compare;
exports.ObjectAssign = ObjectAssign;
/*
* 快速排序，按某个属性，或按“获取排序依据的函数”，来排序.
* @method soryBy
* @static
* @param {array} arr 待处理数组
* @param {string|function} prop 排序依据属性，获取
* @param {boolean} desc 降序
* @return {array} 返回排序后的新数组
*/

function sortBy(arr, prop, desc) {
  var props = [],
      ret = [],
      i = 0,
      len = arr.length;
  if (typeof prop == 'string') {
    for (; i < len; i++) {
      var oI = arr[i];
      (props[i] = new String(oI && oI[prop] || ''))._obj = oI;
    }
  } else if (typeof prop == 'function') {
    for (; i < len; i++) {
      var _oI = arr[i];
      (props[i] = new String(_oI && prop(_oI) || ''))._obj = _oI;
    }
  } else {
    throw '参数类型错误';
  }
  props.sort();
  for (i = 0; i < len; i++) {
    ret[i] = props[i]._obj;
  }
  if (desc) ret.reverse();
  return ret;
};

/**
 * 数组对象排序
 * console.log(arr.sort(compare('age')))
 * @param {} property 
 */
function compare(property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  };
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