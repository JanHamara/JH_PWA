"use strict";
exports.__esModule = true;
var React = require("react");
var navigation_1 = require("./navigation");
var navigationItems = [
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Tech Stack',
        href: '/techstack'
    },
    {
        label: 'Portfolio',
        href: '/portfolio'
    },
    {
        label: 'Awards',
        href: '/awards'
    },
    {
        label: 'Contact',
        href: '/contact'
    },
];
var Layout = function (_a) {
    var pageTitle = _a.pageTitle, children = _a.children;
    return (React.createElement("div", null,
        React.createElement("title", null, pageTitle),
        React.createElement(navigation_1["default"], { items: navigationItems }),
        React.createElement("main", null, children)));
};
exports["default"] = Layout;
