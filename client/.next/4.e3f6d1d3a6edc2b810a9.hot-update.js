webpackHotUpdate(4,{

/***/ "./components/BodyWrapper/BodyWrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_cookie__ = __webpack_require__("../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PageLoading__ = __webpack_require__("./components/PageLoading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__("./actions/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/BodyWrapper/BodyWrapper.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    position: relative;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-sizing: border-box;\n\n    * {\n        box-sizing: border-box;\n    }\n\n    *::-moz-focus-inner {\n        border: none;\n    }\n\n    @media only screen and (max-width: 448px) {\n        font-size: 14px;\n    }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    min-height: 100vh;\n    width: 100%;\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    box-sizing: border-box;\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Wrapper = __WEBPACK_IMPORTED_MODULE_3_styled_components__["a" /* default */].div(_templateObject);
var ContentWrapper = __WEBPACK_IMPORTED_MODULE_3_styled_components__["a" /* default */].div(_templateObject2);

var BodyWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BodyWrapper, _React$Component);

  function BodyWrapper() {
    _classCallCheck(this, BodyWrapper);

    return _possibleConstructorReturn(this, (BodyWrapper.__proto__ || Object.getPrototypeOf(BodyWrapper)).apply(this, arguments));
  }

  _createClass(BodyWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          pageLoading = _props.pageLoading;
      var content = pageLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PageLoading__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }) : children;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContentWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, content));
    }
  }]);

  return BodyWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

BodyWrapper.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  hidePageLoading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  pageLoading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  norenew: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
BodyWrapper.defaultProps = {
  norenew: false
};

var mapStateToProps = function mapStateToProps(_ref) {
  var pageLoading = _ref.loading.page;
  return {
    pageLoading: pageLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hidePageLoading: function hidePageLoading() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions__["a" /* hidePageLoading */])());
    }
  };
};

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* connect */])(mapStateToProps, mapDispatchToProps)(BodyWrapper));

/***/ }),

/***/ "./components/BodyWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BodyWrapper__ = __webpack_require__("./components/BodyWrapper/BodyWrapper.js");
/* unused harmony reexport default */


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("../node_modules/next-redux-wrapper/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_BodyWrapper__ = __webpack_require__("./components/BodyWrapper/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Homepage =
/*#__PURE__*/
function (_Component) {
  _inherits(Homepage, _Component);

  function Homepage() {
    _classCallCheck(this, Homepage);

    return _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).apply(this, arguments));
  }

  _createClass(Homepage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "hello nextapp.js app");
    }
  }]);

  return Homepage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Homepage.propTypes = {};

var mapStateToProps = function mapStateToProps() {};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */], mapStateToProps, mapDispatchToProps)(Homepage));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.e3f6d1d3a6edc2b810a9.hot-update.js.map