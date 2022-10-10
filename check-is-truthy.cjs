"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = exports.isFalsy = exports.isTruthy = exports.isNaN = exports.NaN = void 0;
exports.NaN = (0 / 0);
var isNaN = function (value) { return value !== value; };
exports.isNaN = isNaN;
var isTruthy = function (value) {
    return !!value;
};
exports.isTruthy = isTruthy;
exports.isFalsy = (function (value) { return !value; });
exports.toggle = exports.isFalsy;
