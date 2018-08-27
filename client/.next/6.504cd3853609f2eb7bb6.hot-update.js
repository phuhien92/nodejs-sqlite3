webpackHotUpdate(6,{

/***/ "./components/Header/HeaderLeftMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("../node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HeaderMenuItem__ = __webpack_require__("./components/Header/HeaderMenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__("./actions/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/Header/HeaderLeftMenu.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  list-style: none;\n  margin: 0 0 3px;\n  padding: 0;\n\n  @media only screen and (max-width: 488px) {\n    display: none;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var List = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].ul(_templateObject);

var HeaderLeftMenu = function HeaderLeftMenu(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.currentTarget.getAttribute('href');
    if (!path || window.location.pathname === path) return;
    props.showPageLoading();
    __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push(path);
  };

  var event_types = props.auth.isAuthenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__HeaderMenuItem__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/event_types",
    title: "Event Types",
    onClick: goTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Event Types"));
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, event_types);
};

HeaderLeftMenu.propTypes = {
  showPageLoading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  auth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    isAuthenticated: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
  }).isRequired
};

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showPageLoading: Object(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_7__actions__["d" /* showPageLoading */], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(HeaderLeftMenu));

/***/ })

})
//# sourceMappingURL=6.504cd3853609f2eb7bb6.hot-update.js.map