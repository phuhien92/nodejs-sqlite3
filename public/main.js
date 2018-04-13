(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./scss/app.scss":
/*!***********************!*\
  !*** ./scss/app.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"css/app.css\";\n\n//# sourceURL=webpack:///./scss/app.scss?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"./node_modules/react-router-config/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n    var route = _ref.route;\n\n    return _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(route.routes)\n    );\n};\n\nexports.default = {\n    component: App\n};\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Home = __webpack_require__(/*! ./pages/home/Home */ \"./src/pages/home/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _DashBoard = __webpack_require__(/*! ./pages/dashboard/DashBoard */ \"./src/pages/dashboard/DashBoard.js\");\n\nvar _DashBoard2 = _interopRequireDefault(_DashBoard);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n    routes: [_extends({}, _Home2.default, {\n        path: '/',\n        exact: true\n    }), {\n        path: '/admin/dashboard',\n        component: _DashBoard2.default\n    }]\n})];\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/components/common/ContextWrapper.js":
/*!*************************************************!*\
  !*** ./src/components/common/ContextWrapper.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ContextWrapper = function (_React$Component) {\n    _inherits(ContextWrapper, _React$Component);\n\n    function ContextWrapper() {\n        _classCallCheck(this, ContextWrapper);\n\n        return _possibleConstructorReturn(this, (ContextWrapper.__proto__ || Object.getPrototypeOf(ContextWrapper)).apply(this, arguments));\n    }\n\n    _createClass(ContextWrapper, [{\n        key: 'getChildContext',\n        value: function getChildContext() {\n            console.log(this.props.data);\n            return { data: this.props.data };\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return this.props.children;\n        }\n    }], [{\n        key: 'childContextTypes',\n        get: function get() {\n            return { data: _propTypes2.default.object };\n        }\n    }]);\n\n    return ContextWrapper;\n}(_react2.default.Component);\n\nexports.default = ContextWrapper;\n\n//# sourceURL=webpack:///./src/components/common/ContextWrapper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"./node_modules/react-router-config/es/index.js\");\n\nvar _Routes = __webpack_require__(/*! ./Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _ContextWrapper = __webpack_require__(/*! ./components/common/ContextWrapper */ \"./src/components/common/ContextWrapper.js\");\n\nvar _ContextWrapper2 = _interopRequireDefault(_ContextWrapper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(\n    _ContextWrapper2.default,\n    { data: window.APP_STATE || {} },\n    _react2.default.createElement(\n        _reactRouterDom.BrowserRouter,\n        null,\n        _react2.default.createElement(\n            'div',\n            null,\n            (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n        )\n    )\n), document.querySelectorAll('[data-ui-role=\"content\"]')[0]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/dashboard/DashBoard.js":
/*!******************************************!*\
  !*** ./src/pages/dashboard/DashBoard.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DashBoard = function (_Component) {\n    _inherits(DashBoard, _Component);\n\n    function DashBoard() {\n        _classCallCheck(this, DashBoard);\n\n        return _possibleConstructorReturn(this, (DashBoard.__proto__ || Object.getPrototypeOf(DashBoard)).apply(this, arguments));\n    }\n\n    _createClass(DashBoard, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'container' },\n                _react2.default.createElement(\n                    'h3',\n                    null,\n                    'I\\'m the DashBoard component hello1'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return console.log('hello');\n                        } },\n                    'Click'\n                )\n            );\n        }\n    }]);\n\n    return DashBoard;\n}(_react.Component);\n\nexports.default = DashBoard;\n\n//# sourceURL=webpack:///./src/pages/dashboard/DashBoard.js?");

/***/ }),

/***/ "./src/pages/home/Home.js":
/*!********************************!*\
  !*** ./src/pages/home/Home.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n    _inherits(Home, _Component);\n\n    function Home() {\n        _classCallCheck(this, Home);\n\n        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n    }\n\n    _createClass(Home, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'container' },\n                _react2.default.createElement(\n                    'h3',\n                    null,\n                    'I\\'m the home component hello1'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return console.log('hello');\n                        } },\n                    'Click'\n                )\n            );\n        }\n    }]);\n\n    return Home;\n}(_react.Component);\n\nexports.default = {\n    component: Home\n};\n\n//# sourceURL=webpack:///./src/pages/home/Home.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/index.js ./scss/app.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./scss/app.scss */\"./scss/app.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./scss/app.scss?");

/***/ })

},[[0,"runtime~main","vendors~main"]]]);