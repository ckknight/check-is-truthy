"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = exports.isFalsy = exports.isTruthy = void 0;
var isTruthy = function (value) {
    return !!value;
};
exports.isTruthy = isTruthy;
var isFalsy = function (value) { return !value; };
exports.isFalsy = isFalsy;
exports.toggle = exports.isFalsy;
