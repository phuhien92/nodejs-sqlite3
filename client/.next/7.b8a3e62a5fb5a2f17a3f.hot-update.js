webpackHotUpdate(7,{

/***/ "./actions/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return showPageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hidePageLoading; });
/* unused harmony export authUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unauthUser; });
/* unused harmony export authRenew */
/* unused harmony export signupUser */
/* unused harmony export loginUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logoutUser; });
/* unused harmony export postIdTokenToSessionLogin */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_cookie__ = __webpack_require__("../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionTypes__ = __webpack_require__("./actions/actionTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase__ = __webpack_require__("./firebase.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var showPageLoading = function showPageLoading() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["d" /* SHOW_PAGE_LOADING */]
  };
};
var hidePageLoading = function hidePageLoading() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["c" /* HIDE_PAGE_LOADING */]
  };
};
var authUser = function authUser(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["b" /* AUTH_USER */],
    payload: payload
  };
};
var unauthUser = function unauthUser() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["e" /* UNAUTH_USER */]
  };
};
var authRenew = function authRenew() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_4__actionTypes__["a" /* AUTH_RENEW */]
  };
};
var signupUser = function signupUser(payload) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
        var _ref2, _ref2$data, email, message, status;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/auth/signup', payload);

              case 3:
                _ref2 = _context.sent;
                _ref2$data = _ref2.data;
                email = _ref2$data.email;
                message = _ref2$data.message;
                status = _ref2.status;

                if (status === 200) {
                  loginUser(payload);
                }

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var loginUser = function loginUser(_ref3) {
  var email = _ref3.email,
      password = _ref3.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //dispatch(showLoginLoading());
                // As httpOnly cookies are to be used. do not persist any state client side
                __WEBPACK_IMPORTED_MODULE_5__firebase__["a" /* auth */].signInWithEmailAndPassword(email, password).then(function (user) {
                  // get the user's ID token a it is needed to exchange for a session cookie
                  console.log(__WEBPACK_IMPORTED_MODULE_5__firebase__["a" /* auth */]); // return auth.User.getIdToken()
                  // .then(idToken => {
                  //     console.log("idToken: ", idToken);
                  //     // dispatch(authUser({
                  //     //     email, photoURL, uid, refreshToken, idToken
                  //     // }));
                  //     const csrfToken = cookie.get('csrfToken');
                  //     return postIdTokenToSessionLogin('/api/auth/sessionLogin', idToken, csrfToken);
                  // })
                  // .then(() => {
                  //     // a page redirect would suffice as the persistence is set to NONE
                  //     return logoutUser()
                  // })
                  // .then(() => {
                  //     Router.push('/');
                  // })
                  // .catch(error => {
                  //     console.log("actions/auth/loginUser: idToken :", error);
                  // })

                  __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/');
                  dispatch(showPageLoading());
                }).catch(function (error) {
                  var errorCode = error.code;
                  var errorMsg = error.message;
                  console.log("/action/auth/loginUser:", error);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var logoutUser = function logoutUser() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch, getState) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", __WEBPACK_IMPORTED_MODULE_5__firebase__["a" /* auth */].signOut());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3, _x4) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
var postIdTokenToSessionLogin = function postIdTokenToSessionLogin(url, idToken, csrfToken) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(dispatch) {
        var resp;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(url, {
                  idToken: idToken,
                  csrfToken: csrfToken
                });

              case 2:
                resp = _context4.sent;

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__("./actions/auth.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["a"]; });
/* unused harmony reexport signupUser */
/* unused harmony reexport loginUser */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["d"]; });



/***/ }),

/***/ "./components/BodyWrapper/BodyWrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase__ = __webpack_require__("./firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PageLoading__ = __webpack_require__("./components/PageLoading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_actionTypes__ = __webpack_require__("./actions/actionTypes.js");
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










var Wrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].div(_templateObject);
var ContentWrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].div(_templateObject2);

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
    value: function componentDidMount() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_3__firebase__["a" /* auth */].onAuthStateChanged(function (currentUser) {
        if (currentUser) {
          _this.props.authUser({
            uid: currentUser.uid,
            photoURL: currentUser.photoURL,
            email: currentUser.email,
            refreshToken: currentUser.refreshToken
          });
        }

        _this.props.hidePageLoading();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          pageLoading = _props.pageLoading;
      var content = pageLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PageLoading__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }) : children;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ContentWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), content));
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
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions__["a" /* hidePageLoading */])());
    },
    authUser: function authUser(payload) {
      return dispatch({
        type: __WEBPACK_IMPORTED_MODULE_8__actions_actionTypes__["b" /* AUTH_USER */],
        payload: payload
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(BodyWrapper));

/***/ }),

/***/ "./components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("../node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HeaderLogo__ = __webpack_require__("./components/Header/HeaderLogo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HeaderLeftMenu__ = __webpack_require__("./components/Header/HeaderLeftMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HeaderRightMenu__ = __webpack_require__("./components/Header/HeaderRightMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions__ = __webpack_require__("./actions/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/Header/Header.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    display: flex;\n    width: 1232px;\n    max-width: 100%;\n    padding: 0 32px;\n    height: 102px;\n    justify-content: space-between;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n        height: auto;\n        align-items: flex-start;\n        padding: 16px;\n        margin-bottom: 32px;\n    }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    display: flex;\n\n    @media only screen and (max-width: 488px) {\n        flex-direction: column;\n    }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var Wrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].header(_templateObject);
var LeftMenuWrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].div(_templateObject2);

var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LeftMenuWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HeaderLogo__["a" /* default */], {
    showPageLoading: props.showPageLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__HeaderLeftMenu__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__HeaderRightMenu__["a" /* default */], {
    showPageLoading: props.showPageLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }));
};

Header.propTypes = {
  showPageLoading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showPageLoading: function showPageLoading() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions__["c" /* showPageLoading */])());
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(null, mapDispatchToProps)(Header));

/***/ }),

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
    showPageLoading: Object(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_7__actions__["c" /* showPageLoading */], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(HeaderLeftMenu));

/***/ }),

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
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  border-radius: 50%;\n  width: 60px;\n  border: 5px solid #2979ff;\n  box-shadow: 0 5px 6px rgba(66,165,245,0.5);\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var List = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].ul(_templateObject);
var IMAGE = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].img(_templateObject2);

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
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/login",
    title: "login / signup",
    onClick: goTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Button__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "Login / Sign up")));
  var profile = props.auth.isAuthenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HeaderMenuItem__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/profile",
    title: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(IMAGE, {
    alt: "avatar",
    src: props.auth.user.photoURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  })));
  var event_types = props.auth.isAuthenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HeaderMenuItem__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/event_types",
    title: "Event Types",
    onClick: goTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, "Event Types"));
  var logout = props.auth.isAuthenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HeaderMenuItem__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/logout",
    title: "logout",
    onClick: logoutHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Button__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "Logout"))); // const settings = props.auth.isAuthenticated && (
  //   <HeaderMenuItem>
  //     <a href="/settings" title="settings" onClick={goTo}>
  //       <Button>Settings</Button>
  //     </a>
  //   </HeaderMenuItem>
  // );

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
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
//# sourceMappingURL=7.b8a3e62a5fb5a2f17a3f.hot-update.js.map