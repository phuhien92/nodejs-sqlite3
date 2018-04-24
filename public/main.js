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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Home = __webpack_require__(/*! ./pages/home/Home */ \"./src/pages/home/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _dashBoard = __webpack_require__(/*! ./pages/dashBoard */ \"./src/pages/dashBoard/index.js\");\n\nvar _dashBoard2 = _interopRequireDefault(_dashBoard);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _eventTypes = __webpack_require__(/*! ./pages/eventTypes */ \"./src/pages/eventTypes/index.js\");\n\nvar _eventTypes2 = _interopRequireDefault(_eventTypes);\n\nvar _account = __webpack_require__(/*! ./pages/account */ \"./src/pages/account/index.js\");\n\nvar _account2 = _interopRequireDefault(_account);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n    routes: [_extends({}, _Home2.default, {\n        path: '/',\n        exact: true\n    }), _extends({\n        path: '/admin/dashboard'\n    }, _dashBoard2.default), _extends({}, _eventTypes2.default, {\n        path: '/admin/event_types'\n    }), _extends({}, _account2.default, {\n        path: '/admin/account'\n    })]\n})];\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {\n    return function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n            var res;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            _context.next = 2;\n                            return api.get('/current_user').catch(function (er) {\n                                console.log(\"FAIL CURRENT USER: \", er);\n                            });\n\n                        case 2:\n                            res = _context.sent;\n\n\n                            dispatch({\n                                type: FETCH_CURRENT_USER,\n                                payload: res\n                            });\n\n                        case 4:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, undefined);\n        }));\n\n        return function (_x, _x2, _x3) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n};\n\n//# sourceURL=webpack:///./src/actions/index.js?");

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

/***/ "./src/components/common/EventForm.js":
/*!********************************************!*\
  !*** ./src/components/common/EventForm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar EventForm = function (_React$Component) {\n    _inherits(EventForm, _React$Component);\n\n    function EventForm() {\n        _classCallCheck(this, EventForm);\n\n        return _possibleConstructorReturn(this, (EventForm.__proto__ || Object.getPrototypeOf(EventForm)).apply(this, arguments));\n    }\n\n    _createClass(EventForm, [{\n        key: 'render',\n        value: function render() {\n            return this.props.children;\n        }\n    }]);\n\n    return EventForm;\n}(_react2.default.Component);\n\nexports.default = EventForm;\n\n//# sourceURL=webpack:///./src/components/common/EventForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/lib/index.js\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"./node_modules/react-router-config/es/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _Routes = __webpack_require__(/*! ./Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _ContextWrapper = __webpack_require__(/*! ./components/common/ContextWrapper */ \"./src/components/common/ContextWrapper.js\");\n\nvar _ContextWrapper2 = _interopRequireDefault(_ContextWrapper);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar axiosInstance = _axios2.default.create({\n    baseURL: '/api'\n});\n\nvar store = (0, _redux.createStore)(_reducers2.default, window.APP_STATE, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n\n_reactDom2.default.render(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n        _reactRouterDom.BrowserRouter,\n        null,\n        _react2.default.createElement(\n            'div',\n            null,\n            (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n        )\n    )\n), document.querySelectorAll('[data-ui-role=\"content\"]')[0]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/account/index.js":
/*!************************************!*\
  !*** ./src/pages/account/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _EventForm = __webpack_require__(/*! ./../../components/common/EventForm */ \"./src/components/common/EventForm.js\");\n\nvar _EventForm2 = _interopRequireDefault(_EventForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Account = function (_Component) {\n    _inherits(Account, _Component);\n\n    function Account() {\n        _classCallCheck(this, Account);\n\n        return _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).apply(this, arguments));\n    }\n\n    _createClass(Account, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'container' },\n                _react2.default.createElement(\n                    'h3',\n                    null,\n                    'I\\'m the Account component hello1'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return console.log('hello');\n                        } },\n                    'Click'\n                )\n            );\n        }\n    }]);\n\n    return Account;\n}(_react.Component);\n\nexports.default = { component: Account };\n\n//# sourceURL=webpack:///./src/pages/account/index.js?");

/***/ }),

/***/ "./src/pages/dashBoard/index.js":
/*!**************************************!*\
  !*** ./src/pages/dashBoard/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _EventForm = __webpack_require__(/*! ./../../components/common/EventForm */ \"./src/components/common/EventForm.js\");\n\nvar _EventForm2 = _interopRequireDefault(_EventForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DashBoard = function (_Component) {\n    _inherits(DashBoard, _Component);\n\n    function DashBoard() {\n        _classCallCheck(this, DashBoard);\n\n        return _possibleConstructorReturn(this, (DashBoard.__proto__ || Object.getPrototypeOf(DashBoard)).apply(this, arguments));\n    }\n\n    _createClass(DashBoard, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'container' },\n                _react2.default.createElement(\n                    'h3',\n                    null,\n                    'I\\'m the DashBoard component hello1'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return console.log('hello');\n                        } },\n                    'Click'\n                )\n            );\n        }\n    }]);\n\n    return DashBoard;\n}(_react.Component);\n\nexports.default = { component: DashBoard };\n\n//# sourceURL=webpack:///./src/pages/dashBoard/index.js?");

/***/ }),

/***/ "./src/pages/eventTypes/index.js":
/*!***************************************!*\
  !*** ./src/pages/eventTypes/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _EventForm = __webpack_require__(/*! ./../../components/common/EventForm */ \"./src/components/common/EventForm.js\");\n\nvar _EventForm2 = _interopRequireDefault(_EventForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar EventTypes = function (_Component) {\n    _inherits(EventTypes, _Component);\n\n    function EventTypes() {\n        _classCallCheck(this, EventTypes);\n\n        return _possibleConstructorReturn(this, (EventTypes.__proto__ || Object.getPrototypeOf(EventTypes)).apply(this, arguments));\n    }\n\n    _createClass(EventTypes, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'container' },\n                _react2.default.createElement(\n                    'h3',\n                    null,\n                    'I\\'m the EventTypes component hello1'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return console.log('hello');\n                        } },\n                    'Click'\n                )\n            );\n        }\n    }]);\n\n    return EventTypes;\n}(_react.Component);\n\nexports.default = {\n    component: EventTypes\n};\n\n//# sourceURL=webpack:///./src/pages/eventTypes/index.js?");

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

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/index.js\");\n\nvar _userReducer = __webpack_require__(/*! ./userReducer */ \"./src/reducers/userReducer.js\");\n\nvar _userReducer2 = _interopRequireDefault(_userReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n    userReducer: _userReducer2.default\n});\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/userReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _actions = __webpack_require__(/*! ./../actions */ \"./src/actions/index.js\");\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _actions.FETCH_CURRENT_USER:\n            return action.payload.data;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/reducers/userReducer.js?");

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