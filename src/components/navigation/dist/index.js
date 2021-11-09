"use strict";
exports.__esModule = true;
var gatsby_1 = require("gatsby");
var React = require("react");
var Navigation = function (_a) {
    var items = _a.items;
    return (React.createElement("nav", null, items.map(function (item, index) { return (React.createElement(gatsby_1.Link, { to: item.href, key: index }, item.label)); })));
};
exports["default"] = Navigation;
