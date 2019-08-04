"use strict";
exports.__esModule = true;
var log = function () {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    return console.log.apply(console, param);
};
exports.log = log;
