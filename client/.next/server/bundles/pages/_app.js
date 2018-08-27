module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHOW_PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HIDE_PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_RENEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UNAUTH_USER; });
/* unused harmony export SENT_VERIFICATION */
/* unused harmony export AUTH_ERROR */
/* unused harmony export LOGIN_LOADING */
/* unused harmony export SIGNUP_LOADING */
/* Page loading actions */
var SHOW_PAGE_LOADING = 'SHOW_PAGE_LOADING';
var HIDE_PAGE_LOADING = 'HIDE_PAGE_LOADING';
/* Login & signup actions */

var AUTH_USER = 'AUTH_USER';
var AUTH_RENEW = 'AUTH_RENEW';
var UNAUTH_USER = 'UNAUTH_USER';
var SENT_VERIFICATION = 'SENT_VERIFICATION';
var AUTH_ERROR = 'AUTH_ERROR';
var LOGIN_LOADING = 'LOGIN_LOADING';
var SIGNUP_LOADING = 'SIGNUP_LOADING';
/* Homepage input actions */

/***/ }),

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_js_cookie__ = __webpack_require__("js-cookie");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase__ = __webpack_require__("./firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
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










var Wrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject);
var ContentWrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject2);

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
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(BodyWrapper));

/***/ }),

/***/ "./components/BodyWrapper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BodyWrapper__ = __webpack_require__("./components/BodyWrapper/BodyWrapper.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BodyWrapper__["a"]; });


/***/ }),

/***/ "./components/Button/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_inlinesvg__ = __webpack_require__("react-inlinesvg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_inlinesvg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_inlinesvg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_animations__ = __webpack_require__("./helpers/animations.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/Button/Button.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: relative;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 32px;\n  font-size: 13px;\n  font-weight: normal;\n  text-align: center;\n  line-height: 1;\n  word-break: keep-all;\n  color: white;\n  background: linear-gradient(to right, #42a5f5, #2979ff);\n  box-shadow: 0 5px 6px rgba(66, 165, 245, 0.5);\n  border: none;\n  border-radius: 100px;\n  transition: all 0.4s ease-out;\n  cursor: pointer;\n  overflow: hidden;\n\n  :hover,\n  :focus {\n    outline: none;\n    box-shadow: 0 6px 15px rgba(66, 165, 245, 0.5);\n    transform: translateY(-2px) scale(1.02, 1.02);\n  }\n\n  a & {\n    text-decoration: none;\n    border: none;\n  }\n\n  @media only screen and (max-width: 448px) {\n    height: 32px;\n    padding: 0 24px;\n    font-size: 12px;\n  }\n\n  ", ";\n\n  ", ";\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n        background: linear-gradient(to right, #7e57c2, #6200ea);\n        box-shadow: 0 5px 6px rgba(81, 45, 168, 0.5);\n\n        :focus,\n        :hover {\n          box-shadow: 0 6px 15px rgba(81, 45, 168, 0.5);\n        }\n      "]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n        color: black;\n        background: linear-gradient(to right, #e0e0e0, #bdbdbd);\n        box-shadow: 0 5px 6px rgba(160, 160, 160, 0.5);\n\n        :focus,\n        :hover {\n          box-shadow: 0 6px 15px rgba(160, 160, 160, 0.5);\n        }\n      "]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n      height: 56px;\n      @media only screen and (max-width: 448px) {\n        height: 40px;\n      }\n    "]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  svg {\n    width: 16px;\n    height: 16px;\n    margin-right: 12px;\n    stroke: #fff;\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    @media only screen and (max-width: 768px) {\n      width: 12px;\n      height: 12px;\n      margin-right: 6px;\n    }\n  }\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n        width: 20px;\n        height: 20px;\n        margin: 0;\n        animation: ", " 1s linear infinite;\n      "]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n        width: 15px;\n        height: 15px;\n        margin: 0;\n      "]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral(["\n        stroke: #444;\n      "]);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var StyledButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.button(_templateObject, function (_ref) {
  var color = _ref.color;

  if (color === 'purple') {
    return Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(_templateObject2);
  }

  if (color === 'gray') {
    return Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(_templateObject3);
  }

  return null;
}, function (_ref2) {
  var big = _ref2.big;
  return big && Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(_templateObject4);
});
var Icon = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_react_inlinesvg___default.a)(_templateObject5, function (_ref3) {
  var type = _ref3.type;
  return type === 'loader' && Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(_templateObject6, __WEBPACK_IMPORTED_MODULE_4__helpers_animations__["b" /* spin */]);
}, function (_ref4) {
  var round = _ref4.round;
  return round && Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(_templateObject7);
}, function (_ref5) {
  var color = _ref5.color;
  return color === 'gray' && Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(_templateObject8);
});

var Button = function Button(props) {
  var SVGIcon = props.icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
    type: props.icon,
    round: props.round,
    color: props.color,
    src: "/images/".concat(props.icon, ".svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }) : '';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledButton, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    }
  }), SVGIcon, props.icon !== 'loader' && props.children);
};

Button.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  icon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  round: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
Button.defaultProps = {
  color: 'blue',
  icon: '',
  type: '',
  round: false
};
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./components/Button/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button__ = __webpack_require__("./components/Button/Button.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Button__["a"]; });


/***/ }),

/***/ "./components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HeaderLogo__ = __webpack_require__("./components/Header/HeaderLogo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HeaderLeftMenu__ = __webpack_require__("./components/Header/HeaderLeftMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HeaderRightMenu__ = __webpack_require__("./components/Header/HeaderRightMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions__ = __webpack_require__("./actions/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/Header/Header.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    display: flex;\n    width: 1232px;\n    max-width: 100%;\n    padding: 0 32px;\n    height: 102px;\n    justify-content: space-between;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n        height: auto;\n        align-items: flex-start;\n        padding: 16px;\n        margin-bottom: 32px;\n    }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    display: flex;\n\n    @media only screen and (max-width: 488px) {\n        flex-direction: column;\n    }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var Wrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.header(_templateObject);
var LeftMenuWrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject2);

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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(null, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/Header/HeaderLeftMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HeaderMenuItem__ = __webpack_require__("./components/Header/HeaderMenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__("./actions/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/Header/HeaderLeftMenu.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  list-style: none;\n  margin: 0 0 3px;\n  padding: 0;\n\n  @media only screen and (max-width: 488px) {\n    display: none;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var List = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.ul(_templateObject);

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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(HeaderLeftMenu));

/***/ }),

/***/ "./components/Header/HeaderLogo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/Header/HeaderLogo.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  & > a {\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin: 0 8px 0 0;\n    font-size: 22px;\n    font-weight: bold;\n    text-decoration: none;\n    color: inherit;\n    transition: border-color 0.2s ease-out;\n  }\n\n  @media only screen and (max-width: 488px) {\n    a {\n      font-size: 18px;\n    }\n  }\n\n  img {\n    width: 18px;\n    margin-right: 11px;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var LogoImage = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div(_templateObject);

var HeaderLogo = function HeaderLogo(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.target.getAttribute('href');
    if (window.location.pathname === path) return;
    props.showPageLoading();
    __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push(path);
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(LogoImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/",
    title: "Homepage",
    onClick: goTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/images/logo.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), "LOGO"));
};

HeaderLogo.propTypes = {
  showPageLoading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (HeaderLogo);

/***/ }),

/***/ "./components/Header/HeaderMenuItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_animations__ = __webpack_require__("./helpers/animations.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/Header/HeaderMenuItem.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin-left: 32px;\n  animation: ", " 0.8s ease;\n\n  @media only screen and (max-width: 488px) {\n    margin-left: 16px;\n    font-size: 13px;\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  & > a {\n    padding-bottom: 1px;\n    color: inherit;\n    text-decoration: none;\n  }\n  & > a:hover {\n    color: #2196f3;\n    border-bottom: 1px dotted #2196f3;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ListItem = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.li(_templateObject, __WEBPACK_IMPORTED_MODULE_3__helpers_animations__["a" /* fadeIn */]);
var ListLink = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject2);

var HeaderMenuItem = function HeaderMenuItem(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, children));
};

HeaderMenuItem.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (HeaderMenuItem);

/***/ }),

/***/ "./components/Header/HeaderRightMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HeaderMenuItem__ = __webpack_require__("./components/Header/HeaderMenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Button__ = __webpack_require__("./components/Button/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/Header/HeaderRightMenu.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  float: right;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  border-radius: 50%;\n  width: 60px;\n  border: 5px solid #2979ff;\n  box-shadow: 0 5px 6px rgba(66,165,245,0.5);\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: inline-block;\n\n  @media only screen and (max-width: 488px) {\n    display: none;\n  }\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: #000;\n  font-weight: bold;\n  font-size: 14px;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var List = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.ul(_templateObject);
var IMAGE = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.img(_templateObject2);
var LoginContainer = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject3);
var ItemTitle = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject4);

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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(HeaderMenu));

/***/ }),

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_js__ = __webpack_require__("./components/Header/Header.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Header_js__["a"]; });


/***/ }),

/***/ "./components/PageLoading/PageLoading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_animations__ = __webpack_require__("./helpers/animations.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/PageLoading/PageLoading.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0 0 48px;\n  flex: 1 1 auto;\n  flex-basis: 250px;\n  display: flex;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: block;\n  width: 28px;\n  height: 28px;\n  animation: ", " 1s linear infinite;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Loading = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var Icon = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.img(_templateObject2, __WEBPACK_IMPORTED_MODULE_2__helpers_animations__["b" /* spin */]);

var pageLoading = function pageLoading() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Loading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
    src: "/images/loader.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (pageLoading);

/***/ }),

/***/ "./components/PageLoading/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageLoading__ = __webpack_require__("./components/PageLoading/PageLoading.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__PageLoading__["a"]; });


/***/ }),

/***/ "./firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__("firebase/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_auth__ = __webpack_require__("firebase/auth");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_auth__);


var prodConfig = {
  apiKey: "AIzaSyAZ5IR7117AIoPXQhadL619_z0JFZBIoFY",
  authDomain: "nextjs-b37bf.firebaseapp.com",
  databaseURL: "https://nextjs-b37bf.firebaseio.com",
  projectId: "nextjs-b37bf",
  storageBucket: "nextjs-b37bf.appspot.com",
  messagingSenderId: "656349642811"
};
var devConfig = {
  apiKey: "AIzaSyAZ5IR7117AIoPXQhadL619_z0JFZBIoFY",
  authDomain: "nextjs-b37bf.firebaseapp.com",
  databaseURL: "https://nextjs-b37bf.firebaseio.com",
  projectId: "nextjs-b37bf",
  storageBucket: "nextjs-b37bf.appspot.com",
  messagingSenderId: "656349642811"
};
var config =  false ? prodConfig : devConfig;

if (!__WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.apps.length) {
  __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.initializeApp(config);
}

var auth = __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.auth(); //auth.setPersistence(firebase.auth.Auth.Persistence.NONE);



/***/ }),

/***/ "./helpers/animations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return spin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(-360deg);\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var fadeIn = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["keyframes"])(_templateObject);
var spin = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["keyframes"])(_templateObject2);

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_actionTypes__ = __webpack_require__("./actions/actionTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_BodyWrapper__ = __webpack_require__("./components/BodyWrapper/index.js");

var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MainApp =
/*#__PURE__*/
function (_App) {
  _inherits(MainApp, _App);

  function MainApp() {
    _classCallCheck(this, MainApp);

    return _possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).apply(this, arguments));
  }

  _createClass(MainApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          store = _props.store;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                // we can dispatch from here too
                ctx.store.dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_6__actions_actionTypes__["d" /* SHOW_PAGE_LOADING */],
                  payload: true
                });

                if (!Component.getInitialProps) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                _context.t0 = _context.sent;
                _context.next = 9;
                break;

              case 8:
                _context.t0 = {};

              case 9:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MainApp;
}(__WEBPACK_IMPORTED_MODULE_3_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */])(MainApp));

/***/ }),

/***/ "./reducers/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__("./actions/actionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  isAuthenticated: false,
  user: '',
  renew: false
};

var auth = function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["b" /* AUTH_USER */]:
      return _objectSpread({}, state, {
        isAuthenticated: true,
        user: action.payload
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["a" /* AUTH_RENEW */]:
      return _objectSpread({}, state, {
        renew: true
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["e" /* UNAUTH_USER */]:
      return initialState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (auth);

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__("./reducers/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading__ = __webpack_require__("./reducers/loading.js");



var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  loading: __WEBPACK_IMPORTED_MODULE_2__loading__["a" /* default */],
  auth: __WEBPACK_IMPORTED_MODULE_1__auth__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./reducers/loading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__ = __webpack_require__("./actions/actionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  api: false,
  domain: false,
  login: false,
  signup: false,
  page: false
};

var loading = function loading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["d" /* SHOW_PAGE_LOADING */]:
      return _objectSpread({}, state, {
        page: true
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions_actionTypes__["c" /* HIDE_PAGE_LOADING */]:
      return _objectSpread({}, state, {
        page: false,
        signup: false,
        login: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (loading);

/***/ }),

/***/ "./store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("./reducers/index.js");





var store = function store(initialState) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
};

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/app":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "js-cookie":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-inlinesvg":
/***/ (function(module, exports) {

module.exports = require("react-inlinesvg");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map