"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./default-test.css");
var App = function () {
    return ((0, jsx_runtime_1.jsx)("section", { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: 'red' }, { children: "123" })) }));
};
exports["default"] = App;
