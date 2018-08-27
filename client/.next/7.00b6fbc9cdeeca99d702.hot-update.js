webpackHotUpdate(7,{

/***/ "./components/Header/HeaderRightMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HeaderMenuItem__ = __webpack_require__("./components/Header/HeaderMenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Button__ = __webpack_require__("./components/Button/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/Header/HeaderRightMenu.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  float: right;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  border-radius: 50%;\n  width: 60px;\n  border: 5px solid #2979ff;\n  box-shadow: 0 5px 6px rgba(66,165,245,0.5);\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: inline-block;\n\n  @media only screen and (max-width: 488px) {\n    display: none;\n  }\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: #000;\n  font-weight: bold;\n  font-size: 14px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var List = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].ul(_templateObject);
var IMAGE = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].img(_templateObject2);
var LoginContainer = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].div(_templateObject3);
var ItemTitle = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].div(_templateObject4);

var HeaderMenu = function HeaderMenu(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.currentTarget.getAttribute('href');
    if (!path || window.location.pathname === path) return;
    props.showPageLoading();
    __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(path);
  };

  var logoutHandler = function logoutHandler(e) {
    e.preventDefault();
    props.logout().then(function () {
      props.unAuthUser();
      __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push('/login');
    }).catch(function () {});
  };

  var login = !props.auth.isAuthenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HeaderMenuItem__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/login",
    title: "login / signup",
    onClick: goTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Button__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, "Login / Sign up")));
  var profile = props.auth.isAuthenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HeaderMenuItem__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/profile",
    title: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(IMAGE, {
    alt: "avatar",
    src: props.auth.user.photoURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ItemTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, "Account")));
  var event_types = props.auth.isAuthenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HeaderMenuItem__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/event_types",
    title: "Event Types",
    onClick: goTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ItemTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, "Event Types")));
  var logout = props.auth.isAuthenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LoginContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HeaderMenuItem__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/logout",
    title: "logout",
    onClick: logoutHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Button__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, "Logout")))); // const settings = props.auth.isAuthenticated && (
  //   <HeaderMenuItem>
  //     <a href="/settings" title="settings" onClick={goTo}>
  //       <Button>Settings</Button>
  //     </a>
  //   </HeaderMenuItem>
  // );

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, event_types, profile, logout, login);
};

HeaderMenu.propTypes = {
  showPageLoading: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showPageLoading: function showPageLoading() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions__["c" /* showPageLoading */])());
    },
    logout: function logout() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions__["b" /* logoutUser */])());
    },
    unAuthUser: function unAuthUser() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions__["d" /* unauthUser */])());
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(HeaderMenu));

/***/ })

})
//# sourceMappingURL=7.00b6fbc9cdeeca99d702.hot-update.js.map