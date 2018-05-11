'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sortBy = sortBy;
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