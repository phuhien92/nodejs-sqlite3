module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/actionTypes.js":
/*!********************************!*\
  !*** ./actions/actionTypes.js ***!
  \********************************/
/*! exports provided: SHOW_PAGE_LOADING, HIDE_PAGE_LOADING, AUTH_USER, AUTH_RENEW, UNAUTH_USER, SENT_VERIFICATION, AUTH_ERROR, LOGIN_LOADING, SIGNUP_LOADING, EVENTS_FETCH_SUCCESS, GET_EVENT_SUCCESS, GET_EVENT_FAILURE, PUBLISH_EVENT_SUCCESS, TOGGLE_EDIT_EVENT_TAB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_PAGE_LOADING", function() { return SHOW_PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_PAGE_LOADING", function() { return HIDE_PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_RENEW", function() { return AUTH_RENEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAUTH_USER", function() { return UNAUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENT_VERIFICATION", function() { return SENT_VERIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_LOADING", function() { return LOGIN_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_LOADING", function() { return SIGNUP_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS_FETCH_SUCCESS", function() { return EVENTS_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_EVENT_SUCCESS", function() { return GET_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_EVENT_FAILURE", function() { return GET_EVENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLISH_EVENT_SUCCESS", function() { return PUBLISH_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_EDIT_EVENT_TAB", function() { return TOGGLE_EDIT_EVENT_TAB; });
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

/* Event types page actions */

var EVENTS_FETCH_SUCCESS = 'EVENTS_FETCH_SUCCESS';
var GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
var GET_EVENT_FAILURE = 'GET_EVENT_FAILURE';
var PUBLISH_EVENT_SUCCESS = 'PUBLISH_EVENT_SUCCESS';
var TOGGLE_EDIT_EVENT_TAB = 'TOGGLE_EDIT_EVENT_TAB';

/***/ }),

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: showPageLoading, hidePageLoading, authUser, unauthUser, authRenew, signupUser, loginUser, logoutUser, postIdTokenToSessionLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPageLoading", function() { return showPageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePageLoading", function() { return hidePageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUser", function() { return authUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unauthUser", function() { return unauthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authRenew", function() { return authRenew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUser", function() { return signupUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postIdTokenToSessionLogin", function() { return postIdTokenToSessionLogin; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ "./firebase.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var showPageLoading = function showPageLoading() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SHOW_PAGE_LOADING"]
  };
};
var hidePageLoading = function hidePageLoading() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["HIDE_PAGE_LOADING"]
  };
};
var authUser = function authUser(payload) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["AUTH_USER"],
    payload: payload
  };
};
var unauthUser = function unauthUser() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["UNAUTH_USER"]
  };
};
var authRenew = function authRenew() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["AUTH_RENEW"]
  };
};
var signupUser = function signupUser(payload) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var _ref2, _ref2$data, email, message, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/auth/signup', payload);

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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].signInWithEmailAndPassword(email, password).then(function (user) {
                  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
                  dispatch(showPageLoading());
                }));

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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch, getState) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].signOut());

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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        var resp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, {
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

/***/ "./actions/event.js":
/*!**************************!*\
  !*** ./actions/event.js ***!
  \**************************/
/*! exports provided: eventsFetch, publishEvent, fetchEventById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsFetch", function() { return eventsFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishEvent", function() { return publishEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEventById", function() { return fetchEventById; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../firebase */ "./firebase.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading */ "./actions/loading.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var eventsFetch = function eventsFetch(uid) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var ref, eventsRef;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ref = _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].ref();
                eventsRef = ref.child('events');
                dispatch(_loading__WEBPACK_IMPORTED_MODULE_2__["showPageLoading"]);
                eventsRef.orderByChild('uid').equalTo(uid).once('value').then(function (snap) {
                  var snapData = snap.val();
                  var eventsData = Object.keys(snapData).map(function (key) {
                    return _objectSpread({}, snapData[key], {
                      id: key
                    });
                  });
                  dispatch(_loading__WEBPACK_IMPORTED_MODULE_2__["hidePageLoading"]);
                  dispatch({
                    payload: eventsData,
                    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["EVENTS_FETCH_SUCCESS"]
                  });
                }).catch(function (err) {
                  console.error("Events fetching error: ", err);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var publishEvent = function publishEvent(id, published) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var timestamp, eventRef;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                timestamp = new Date().getTime(), eventRef = _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].ref("/events/".concat(id));
                dispatch(_loading__WEBPACK_IMPORTED_MODULE_2__["showPageLoading"]);
                eventRef.update({
                  published: !published,
                  updated_at: timestamp
                }).then(function () {
                  dispatch(_loading__WEBPACK_IMPORTED_MODULE_2__["hidePageLoading"]);
                  dispatch({
                    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["PUBLISH_EVENT_SUCCESS"],
                    payload: {
                      id: id,
                      published: published
                    }
                  });
                }).catch(function (err) {
                  console.error('published switch: one of the updates failed: ', err);
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var fetchEventById = function fetchEventById(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var eventRef;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                eventRef = _firebase__WEBPACK_IMPORTED_MODULE_1__["db"].ref("/events/".concat(id));
                dispatch(_loading__WEBPACK_IMPORTED_MODULE_2__["showPageLoading"]);
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  eventRef.once('value').then(function (snap) {
                    var snapData = snap.val();
                    dispatch(_loading__WEBPACK_IMPORTED_MODULE_2__["hidePageLoading"]);
                    return resolve(snapData);
                  }).catch(function (error) {
                    console.error("Event fetching by id got error: ", error);
                    dispatch({
                      type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_EVENT_FAILURE"],
                      error: error
                    });
                    return reject(error);
                  });
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: showPageLoading, hidePageLoading, signupUser, loginUser, logoutUser, unauthUser, eventsFetch, publishEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signupUser", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["signupUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["loginUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["logoutUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unauthUser", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["unauthUser"]; });

/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ "./actions/loading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showPageLoading", function() { return _loading__WEBPACK_IMPORTED_MODULE_1__["showPageLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hidePageLoading", function() { return _loading__WEBPACK_IMPORTED_MODULE_1__["hidePageLoading"]; });

/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./actions/event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventsFetch", function() { return _event__WEBPACK_IMPORTED_MODULE_2__["eventsFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishEvent", function() { return _event__WEBPACK_IMPORTED_MODULE_2__["publishEvent"]; });






/***/ }),

/***/ "./actions/loading.js":
/*!****************************!*\
  !*** ./actions/loading.js ***!
  \****************************/
/*! exports provided: showPageLoading, hidePageLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPageLoading", function() { return showPageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePageLoading", function() { return hidePageLoading; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");

var showPageLoading = function showPageLoading() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_PAGE_LOADING"]
  };
};
var hidePageLoading = function hidePageLoading() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_PAGE_LOADING"]
  };
};

/***/ }),

/***/ "./components/BodyWrapper/BodyWrapper.js":
/*!***********************************************!*\
  !*** ./components/BodyWrapper/BodyWrapper.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../firebase */ "./firebase.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PageLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../PageLoading */ "./components/PageLoading/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Header */ "./components/Header/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    min-height: 100vh;\n    width: 100%;\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    box-sizing: border-box;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-sizing: border-box;\n\n    * {\n        box-sizing: border-box;\n    }\n\n    *::-moz-focus-inner {\n        border: none;\n    }\n\n    @media only screen and (max-width: 448px) {\n        font-size: 14px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCalendar"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faAngleDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faPen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTrash"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject());
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject2());

var BodyWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BodyWrapper, _React$Component);

  function BodyWrapper() {
    _classCallCheck(this, BodyWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(BodyWrapper).apply(this, arguments));
  }

  _createClass(BodyWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      _firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].onAuthStateChanged(function (currentUser) {
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
      var _this$props = this.props,
          children = _this$props.children,
          pageLoading = _this$props.pageLoading;
      var content = pageLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageLoading__WEBPACK_IMPORTED_MODULE_5__["default"], null) : children;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), content));
    }
  }]);

  return BodyWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BodyWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  hidePageLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  pageLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  norenew: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
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
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["hidePageLoading"])());
    },
    authUser: function authUser(payload) {
      return dispatch({
        type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_8__["AUTH_USER"],
        payload: payload
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(BodyWrapper));

/***/ }),

/***/ "./components/BodyWrapper/index.js":
/*!*****************************************!*\
  !*** ./components/BodyWrapper/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BodyWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BodyWrapper */ "./components/BodyWrapper/BodyWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _BodyWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Button/Button.js":
/*!*************************************!*\
  !*** ./components/Button/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        stroke: #444;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        width: 15px;\n        height: 15px;\n        margin: 0;\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        width: 20px;\n        height: 20px;\n        margin: 0;\n        animation: ", " 1s linear infinite;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    width: 16px;\n    height: 16px;\n    margin-right: 12px;\n    stroke: #fff;\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    @media only screen and (max-width: 768px) {\n      width: 12px;\n      height: 12px;\n      margin-right: 6px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  -webkit-appearance: none;\n  background-color: #00a2ff;\n  color: #fff;\n  font-weight: 100;\n  border: 1px solid #00a2ff;\n  text-align: center;\n  text-decoration: none;\n  line-height: 20px;\n  cursor: pointer;\n  outline: none;\n  padding: 12px 12px 11px;\n  border-radius: 0;\n  display: inline-block;\n  user-select: none;\n  box-sizing: border-box;\n  font-size: 16px;\n  min-width: 80px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject());
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3___default.a)(_templateObject2(), function (_ref) {
  var type = _ref.type;
  return type === 'loader' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), _helpers_animations__WEBPACK_IMPORTED_MODULE_4__["spin"]);
}, function (_ref2) {
  var round = _ref2.round;
  return round && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4());
}, function (_ref3) {
  var color = _ref3.color;
  return color === 'gray' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5());
});

var Button = function Button(props) {
  var SVGIcon = props.icon ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    type: props.icon,
    round: props.round,
    src: "/images/".concat(props.icon, ".svg")
  }) : '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, props, SVGIcon, props.icon !== 'loader' && props.children);
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  round: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Button.defaultProps = {
  icon: '',
  type: '',
  round: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./components/Button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Error/Error.js":
/*!***********************************!*\
  !*** ./components/Error/Error.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      bottom: ", "px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      right: auto;\n      left: ", "px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  content: '';\n  display: block;\n  font-size: 14px;\n  color: red;\n  animation: ", " 0.3s ease-out;\n\n  @media only screen and (max-width: 768px) {\n    right: 8px;\n    bottom: -40px;\n    font-size: 12px;\n  }\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject(), _helpers_animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"], function (_ref) {
  var left = _ref.left;
  return left > -1 && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2(), left);
}, function (_ref2) {
  var bottom = _ref2.bottom;
  return bottom && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3(), bottom);
});

var Error = function Error(_ref3) {
  var bottom = _ref3.bottom,
      error = _ref3.error,
      left = _ref3.left,
      type = _ref3.type,
      classes = _ref3.classes;
  var message = error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorMessage, {
    left: left,
    bottom: bottom
  }, error);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes
  }, message);
};

Error.propTypes = {
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Error.defaultProps = {
  bottom: -64,
  left: -1,
  classes: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./components/Error/index.js":
/*!***********************************!*\
  !*** ./components/Error/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error */ "./components/Error/Error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Error__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/EventTypes/EventTypes.js":
/*!*********************************************!*\
  !*** ./components/EventTypes/EventTypes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _content_EventList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/EventList */ "./components/EventTypes/content/EventList.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 960px;\n  max-width: 1200px;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  animation: ", " 0.8s ease;\n  box-sizing: border-box;\n  > * {\n    max-width: 100%;\n  }\n\n  hr {\n    width: 100%;\n    height: 1px;\n    outline: none;\n    border: none;\n    background-color: #e3e3e3;\n    margin: 24px 0;\n\n    @media only screen and (max-width: 768px) {\n      margin: 12px 0;\n    }\n  }\n  h3 {\n    font-size: 24px;\n    margin: 32px 0 16px;\n\n    @media only screen and (max-width: 768px) {\n      font-size: 18px;\n    }\n  }\n  p {\n    margin: 24px 0;\n  }\n  a {\n    margin: 32px 0 0;\n    color: #2196f3;\n    text-decoration: none;\n\n    :hover {\n      color: #2196f3;\n      border-bottom: 1px dotted #2196f3;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), _helpers_animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]);

var EventTypes =
/*#__PURE__*/
function (_Component) {
  _inherits(EventTypes, _Component);

  function EventTypes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EventTypes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EventTypes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      openForm: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleEventForm", function () {
      var newState = _objectSpread({}, _this.state);

      var openForm = newState.openForm;

      _this.setState({
        openForm: !openForm
      });
    });

    return _this;
  }

  _createClass(EventTypes, [{
    key: "render",
    value: function render() {
      var isAuthenticated = this.props.isAuthenticated;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content_EventList__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    }
  }]);

  return EventTypes;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

EventTypes.propTypes = {
  auth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
  }).isRequired
};
EventTypes.defaultProps = {};

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(EventTypes));

/***/ }),

/***/ "./components/EventTypes/content/Event.js":
/*!************************************************!*\
  !*** ./components/EventTypes/content/Event.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PublishSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PublishSwitch */ "./components/EventTypes/content/PublishSwitch.js");
/* harmony import */ var _EventDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventDropdown */ "./components/EventTypes/content/EventDropdown.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      background: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 15px;\n    height: 15px;\n    background: #d9d9d9;\n    border-radius: 50%;\n    border: 1px solid #bbb;\n\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: #4D5055;\n    word-wrap: break-word;\n    word-break: break-word;\n    max-width: 80%;\n    line-height: 16px;\n    font-size: 14px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 23px;\n    position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    vertical-align: middle;\n    padding: 11px 11px 7px;\n    font-size: 14px;\n    line-height: 14px;\n    background-color: #fff;\n    transition: border-color .2s ease;\n    position: relative;\n    box-sizing: border-box;\n    display: inline-block;\n    border: 1px solid #dadada;\n    border-radius: 3px;\n    max-width: 32.33%;\n    width: 100%;\n    margin: 5px 0.5%;\n    cursor: pointer;\n\n    :hover {\n        border-color: #00a2ff;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Block = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var BlockInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var EventName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject3());
var Marker = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), function (_ref) {
  var color = _ref.color;
  return color && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5(), color);
});

var Event =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Event, _PureComponent);

  function Event() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Event);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Event)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "switchRef", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dropdownRef", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickOutside", function (e) {
      if (_this.dropdownRef && !_this.dropdownRef.contains(e.target)) {
        _this.props.toggleDropdown('');
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "go", function (e) {
      var target = e.target;

      if (!_this.switchRef.contains(target) && !_this.dropdownRef.contains(target)) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/event_types/edit/".concat(_this.props.id));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleDropdown", function () {
      _this.props.toggleDropdown(_this.props.id);
    });

    return _this;
  }

  _createClass(Event, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.addEventListener('click', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          event_color = _this$props.event_color,
          event_name = _this$props.event_name,
          id = _this$props.id,
          published = _this$props.published,
          toggled = this.props.toggleEvent === id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Block, {
        onClick: this.go
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlockInner, null, published ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Marker, {
        color: event_color.value
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Marker, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        ref: function ref(node) {
          return _this2.dropdownRef = node;
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventDropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: id,
        toggleDropdown: this.toggleDropdown,
        toggled: toggled
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        ref: function ref(node) {
          return _this2.switchRef = node;
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PublishSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: id,
        published: published
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventName, null, event_name)));
    }
  }]);

  return Event;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./components/EventTypes/content/EventDropdown.js":
/*!********************************************************!*\
  !*** ./components/EventTypes/content/EventDropdown.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 1px solid #dadada;\n    text-align: left;\n    padding: 10px 20px 10px 14px;\n    color: #383838;\n    white-space: nowrap;\n    font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    display: none;\n    min-width: 170px;\n    border: 1px solid #666a73;\n    background: #fff;\n    list-style: none;\n    padding-left: 0;\n    margin-top: 3px;\n    &.open {\n        display: block;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    color: #aeaeae;\n    :hover {\n        color: #666a73;\n    }\n    .fa-cog {\n        margin-right: 2px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    float: right;\n    margin-left: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var DropdownWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var SettingsButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var DropdownList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul(_templateObject3());
var List = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li(_templateObject4());

var EventDropdown =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(EventDropdown, _React$PureComponent);

  function EventDropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EventDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EventDropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "go", function (path) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(path);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deleteEvent", function () {
      console.info("Delete event ".concat(_this.props.id));
    });

    return _this;
  }

  _createClass(EventDropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          toggled = _this$props.toggled,
          toggleDropdown = _this$props.toggleDropdown,
          id = _this$props.id;
      this.setState({
        open: toggled
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettingsButton, {
        onClick: toggleDropdown
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: "cog"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: "angle-down"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownList, {
        className: toggled && 'open'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
        onClick: this.go.bind(this, "/event_types/edit/".concat(id))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: "pen"
      }), " Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
        onClick: this.deleteEvent
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: "trash"
      }), " Delete")));
    }
  }]);

  return EventDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ }),

/***/ "./components/EventTypes/content/EventList.js":
/*!****************************************************!*\
  !*** ./components/EventTypes/content/EventList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../firebase */ "./firebase.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ "./actions/index.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Event */ "./components/EventTypes/content/Event.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var EventListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.section(_templateObject());

var EventList =
/*#__PURE__*/
function (_Component) {
  _inherits(EventList, _Component);

  function EventList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EventList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EventList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      toggleEvent: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleDropdown", function (id) {
      var toggleEventId = _this.state.toggleEvent === id ? '' : id;

      _this.setState({
        toggleEvent: toggleEventId
      });
    });

    return _this;
  }

  _createClass(EventList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var user = this.props.auth.user;
      this.props.eventsFetch(user.uid);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var events = this.props.events;
      var view = events.map(function (event) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Event__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, event, {
          key: event.id,
          toggleDropdown: _this2.toggleDropdown,
          toggleEvent: _this2.state.toggleEvent
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventListWrapper, null, view);
    }
  }]);

  return EventList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth,
      events = _ref.events.events;
  return {
    auth: auth,
    events: events
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    eventsFetch: function eventsFetch(uid) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["eventsFetch"])(uid));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(EventList));

/***/ }),

/***/ "./components/EventTypes/content/PublishSwitch.js":
/*!********************************************************!*\
  !*** ./components/EventTypes/content/PublishSwitch.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../firebase */ "./firebase.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../actions */ "./actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 25px;\n    height: 11px;\n    position: relative;\n    top: 1px;\n    display: inline-block;\n    cursor: pointer;\n    border: 1px solid #d0d0d0;\n    border-radius: 5px;\n    background-color: #f6f6f6;\n    transition: all .2s ease-in-out;\n\n    &.checked {\n        background-color: #caeec7;\n        border-color: #87c97a;\n        :before {\n            left: 12px;\n        }\n    }\n\n    :hover {\n        border-color: #ccc;\n    }\n\n    :before {\n        content: \"\";\n        position: absolute;\n        top: -2px;\n        left: -2px;\n        height: 11px;\n        width: 11px;\n        border: 1px solid #a8a8a8;\n        border-radius: 50%;\n        background-color: #fff;\n        box-shadow: rgba(0, 0, 0, 0.15) 0 1px 2px;\n        transition: all .2s ease-in-out;\n        backface-visibility: hidden;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    float: right;\n    position: relative;\n    top: -5px;\n    margin-left: 10px;\n    padding: 5px 0;\n    cursor: pointer;\n    transition: transform .2s ease-in-out, opacity .2s ease-in-out, z-index 0s, -webkit-transform .2s ease-in-out;\n    user-select: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Switch = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label(_templateObject());
var Slider = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());

var PublicSwitch =
/*#__PURE__*/
function (_Component) {
  _inherits(PublicSwitch, _Component);

  function PublicSwitch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PublicSwitch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PublicSwitch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      published: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "publishEvent", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          published = _this$props.published;

      _this.props.publishEvent(id, published);

      _this.setState({
        published: !published
      });
    });

    return _this;
  }

  _createClass(PublicSwitch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        published: this.props.published
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Switch, {
        name: "publish"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slider, {
        onClick: this.publishEvent,
        className: this.state.published && 'checked'
      }));
    }
  }]);

  return PublicSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    publishEvent: function publishEvent(id, published) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["publishEvent"])(id, published));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(PublicSwitch));

/***/ }),

/***/ "./components/EventTypes/index.js":
/*!****************************************!*\
  !*** ./components/EventTypes/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventTypes */ "./components/EventTypes/EventTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EventTypes__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeaderLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderLogo */ "./components/Header/HeaderLogo.js");
/* harmony import */ var _HeaderLeftMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderLeftMenu */ "./components/Header/HeaderLeftMenu.js");
/* harmony import */ var _HeaderRightMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeaderRightMenu */ "./components/Header/HeaderRightMenu.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n\n    @media only screen and (max-width: 488px) {\n        flex-direction: column;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 1232px;\n    max-width: 100%;\n    padding: 0 32px;\n    height: 102px;\n    justify-content: space-between;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n        height: auto;\n        align-items: flex-start;\n        padding: 16px;\n        margin-bottom: 32px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.header(_templateObject());
var LeftMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject2());

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LeftMenuWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showPageLoading: props.showPageLoading
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderLeftMenu__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderRightMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showPageLoading: props.showPageLoading
  }));
};

Header.propTypes = {
  showPageLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showPageLoading: function showPageLoading() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["showPageLoading"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/Header/HeaderLeftMenu.js":
/*!*********************************************!*\
  !*** ./components/Header/HeaderLeftMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderMenuItem */ "./components/Header/HeaderMenuItem.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  list-style: none;\n  margin: 0 0 3px;\n  padding: 0;\n\n  @media only screen and (max-width: 488px) {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var List = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.ul(_templateObject());

var HeaderLeftMenu = function HeaderLeftMenu(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.currentTarget.getAttribute('href');
    if (!path || window.location.pathname === path) return;
    props.showPageLoading();
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(path);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, null);
};

HeaderLeftMenu.propTypes = {
  showPageLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  auth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
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
    showPageLoading: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_actions__WEBPACK_IMPORTED_MODULE_7__["showPageLoading"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(HeaderLeftMenu));

/***/ }),

/***/ "./components/Header/HeaderLogo.js":
/*!*****************************************!*\
  !*** ./components/Header/HeaderLogo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  & > a {\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin: 0 8px 0 0;\n    font-size: 22px;\n    font-weight: bold;\n    text-decoration: none;\n    color: inherit;\n    transition: border-color 0.2s ease-out;\n  }\n\n  @media only screen and (max-width: 488px) {\n    a {\n      display: none;\n    }\n  }\n\n  img {\n    width: 18px;\n    margin-right: 11px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());

var HeaderLogo = function HeaderLogo(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.target.getAttribute('href');
    if (window.location.pathname === path) return;
    props.showPageLoading();
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(path);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoImage, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    title: "Homepage",
    onClick: goTo
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/logo.svg",
    alt: ""
  }), "LOGO"));
};

HeaderLogo.propTypes = {
  showPageLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderLogo);

/***/ }),

/***/ "./components/Header/HeaderMenuItem.js":
/*!*********************************************!*\
  !*** ./components/Header/HeaderMenuItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  & > a {\n    padding-bottom: 1px;\n    color: inherit;\n    text-decoration: none;\n  }\n  & > a:hover {\n    color: #2196f3;\n    border-bottom: 1px dotted #2196f3;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 32px;\n  animation: ", " 0.8s ease;\n  text-align: center;\n  \n  @media only screen and (max-width: 488px) {\n    margin-left: 16px;\n    font-size: 13px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li(_templateObject(), _helpers_animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]);
var ListLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());

var HeaderMenuItem = function HeaderMenuItem(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListLink, null, children));
};

HeaderMenuItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderMenuItem);

/***/ }),

/***/ "./components/Header/HeaderRightMenu.js":
/*!**********************************************!*\
  !*** ./components/Header/HeaderRightMenu.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeaderMenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderMenuItem */ "./components/Header/HeaderMenuItem.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  font-weight: bold;\n  font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n\n  @media only screen and (max-width: 488px) {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 3px;\n  width: 60px;\n  box-shadow: 0 5px 6px #7c7e79;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  float: right;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  @media only screen and (max-width: 488px) {\n    justify-content: space-evenly;\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var List = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.ul(_templateObject());
var IMAGE = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img(_templateObject2());
var LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject3());
var ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject4());

var HeaderMenu = function HeaderMenu(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.currentTarget.getAttribute('href');
    if (!path || window.location.pathname === path) return;
    props.showPageLoading();
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(path);
  };

  var logoutHandler = function logoutHandler(e) {
    e.preventDefault();
    props.logout().then(function () {
      props.unAuthUser();
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');
    }).catch(function () {});
  };

  var login = !props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/login",
    title: "login / signup",
    onClick: goTo
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Login / Sign up")));
  var profile = props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/profile",
    title: "profile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IMAGE, {
    alt: "avatar",
    src: props.auth.user.photoURL
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemTitle, null, "Account")));
  var event_types = props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/event_types",
    title: "Event Types",
    onClick: goTo
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: "calendar",
    className: "fa-5x"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemTitle, null, "Event Types")));
  var logout = props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/logout",
    title: "logout",
    onClick: logoutHandler
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Logout")))); // const settings = props.auth.isAuthenticated && (
  //   <HeaderMenuItem>
  //     <a href="/settings" title="settings" onClick={goTo}>
  //       <Button>Settings</Button>
  //     </a>
  //   </HeaderMenuItem>
  // );

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, null, event_types, profile, logout, login);
};

HeaderMenu.propTypes = {
  showPageLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
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
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["showPageLoading"])());
    },
    logout: function logout() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["logoutUser"])());
    },
    unAuthUser: function unAuthUser() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["unauthUser"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(HeaderMenu));

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.js */ "./components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/PageLoading/PageLoading.js":
/*!***********************************************!*\
  !*** ./components/PageLoading/PageLoading.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: 28px;\n  height: 28px;\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 0 48px;\n  flex: 1 1 auto;\n  flex-basis: 250px;\n  display: flex;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Loading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject2(), _helpers_animations__WEBPACK_IMPORTED_MODULE_2__["spin"]);

var pageLoading = function pageLoading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    src: "/images/loader.svg"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (pageLoading);

/***/ }),

/***/ "./components/PageLoading/index.js":
/*!*****************************************!*\
  !*** ./components/PageLoading/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageLoading */ "./components/PageLoading/PageLoading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PageLoading__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/TextInput/TextInput.js":
/*!*******************************************!*\
  !*** ./components/TextInput/TextInput.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 46px;\n  box-sizing: border-box;\n  border: 1px solid #d0d0d0;\n  background: #fff;\n  padding: 11px 14px;\n  font-size: 16px;\n  word-break: normal;\n  outline: none;\n  -webkit-appearance: none;\n  border-radius: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var LinkInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input(_templateObject());

var TextInput = function TextInput(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkInput, props);
};

TextInput.propTypes = {
  small: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tiny: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
TextInput.defaultProps = {
  small: false,
  tiny: false
};
/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./components/TextInput/index.js":
/*!***************************************!*\
  !*** ./components/TextInput/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput */ "./components/TextInput/TextInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Textarea/Textarea.js":
/*!*****************************************!*\
  !*** ./components/Textarea/Textarea.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 46px;\n  box-sizing: border-box;\n  border: 1px solid #d0d0d0;\n  background: #fff;\n  padding: 11px 14px;\n  font-size: 16px;\n  word-break: normal;\n  outline: none;\n  -webkit-appearance: none;\n  border-radius: 0;\n  display: block;\n  resize: vertical;\n  margin-bottom: 5px;\n  min-height: 150px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var TextBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.textarea(_templateObject());

var Textarea = function Textarea(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextBox, props);
}; // TextInput.propTypes = {
//   small: PropTypes.bool,
//   tiny: PropTypes.bool,
// };
// Textarea.defaultProps = {
//   small: false,
//   tiny: false,
// };


/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./components/Textarea/index.js":
/*!**************************************!*\
  !*** ./components/Textarea/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textarea */ "./components/Textarea/Textarea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/WhatEventForm/EventColor.js":
/*!************************************************!*\
  !*** ./components/WhatEventForm/EventColor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined;

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        background: ", ";\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 40px;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Circle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), color);
});

var EventColor = function EventColor(_ref2) {
  var color = _ref2.color,
      selectedColor = _ref2.selectedColor,
      selectThisColor = _ref2.selectThisColor;
  var selected = color.label === selectedColor.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
    color: color.value,
    onClick: selectThisColor.bind(_this, color)
  }, selected && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "check",
    className: "fa-lg fa-inverse"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EventColor);

/***/ }),

/***/ "./components/WhatEventForm/EventColorList.js":
/*!****************************************************!*\
  !*** ./components/WhatEventForm/EventColorList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventColor */ "./components/WhatEventForm/EventColor.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ColorList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul(_templateObject());
var colors = [{
  value: '#FF3C38',
  label: 'RED'
}, {
  value: '#2B193D',
  label: 'PURPLE'
}, {
  value: '#43AA8B',
  label: 'GREEN'
}, {
  value: '#124E78',
  label: 'BLUE'
}, {
  value: '#FF9F1C',
  label: 'ORANGE'
}];

var EventColorList =
/*#__PURE__*/
function (_Component) {
  _inherits(EventColorList, _Component);

  function EventColorList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EventColorList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EventColorList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectThisColor", function (selectedColor) {
      _this.props.onChange('event_color', selectedColor);
    });

    return _this;
  }

  _createClass(EventColorList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedColor = this.props.selectedColor,
          view = colors.map(function (color, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventColor__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: index,
          color: color,
          selectedColor: selectedColor,
          selectThisColor: _this2.selectThisColor
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorList, null, view);
    }
  }]);

  return EventColorList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EventColorList);

/***/ }),

/***/ "./components/WhatEventForm/index.js":
/*!*******************************************!*\
  !*** ./components/WhatEventForm/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Error */ "./components/Error/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/form */ "./helpers/form.js");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TextInput */ "./components/TextInput/index.js");
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Textarea */ "./components/Textarea/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_toggled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toggled */ "react-toggled");
/* harmony import */ var react_toggled__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_toggled__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");
/* harmony import */ var _actions_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/event */ "./actions/event.js");
/* harmony import */ var _EventColorList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EventColorList */ "./components/WhatEventForm/EventColorList.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    flex-basis: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: stretch;\n    animation: ", " 0.8s ease-out;\n    width: 100%;\n    margin-top: 20px;\n    input {\n        margin-bottom: 48px;\n    }\n    @media only screen and (max-width: 768px) {\n        input {\n        margin-bottom: 32px;\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    > button {\n        margin-right: 1rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


















var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.form(_templateObject2(), _helpers_animations__WEBPACK_IMPORTED_MODULE_14__["fadeIn"]);

var ETInnerForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ETInnerForm, _Component);

  function ETInnerForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ETInnerForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ETInnerForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setEventColor", function (color) {
      _this.setState({
        event_color: color
      }, function () {});

      return false;
    });

    return _this;
  }

  _createClass(ETInnerForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.type === "create") {
        this.props.setValues(_objectSpread({}, this.props.event));
      }

      if (this.props.type === "update") {
        var query = this.props.query;
        this.props.fetchEvent(query.id).then(function (event) {
          _this2.props.setValues(_objectSpread({}, event));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          values = _this$props.values,
          touched = _this$props.touched,
          errors = _this$props.errors,
          isSubmitting = _this$props.isSubmitting,
          handleChange = _this$props.handleChange,
          handleBlur = _this$props.handleBlur,
          handleSubmit = _this$props.handleSubmit,
          setFieldValue = _this$props.setFieldValue,
          setFieldTouched = _this$props.setFieldTouched;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toggled__WEBPACK_IMPORTED_MODULE_13___default.a, {
        on: true
      }, function (_ref) {
        var on = _ref.on,
            getTogglerProps = _ref.getTogglerProps,
            setOn = _ref.setOn;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandableBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandableHeader"], getTogglerProps(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandableTitle"], null, "What event is this?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandableSubtitle"], null, values && values.event_name), !on && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandButtonLink"], null, "Edit")), on && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandableContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
          id: "et-form",
          onSubmit: handleSubmit
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null, "Event name *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "event_name",
          type: "text",
          name: "event_name",
          value: values.event_name,
          onChange: handleChange,
          onBlur: handleBlur,
          className: errors.event_name && touched.event_name ? 'text-input error' : 'text-input',
          autoFocus: true
        }), errors.event_name && touched.event_name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: errors.event_name,
          type: "event_name"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null, "Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "event_location",
          type: "text",
          name: "event_location",
          value: values.event_location,
          onChange: handleChange,
          className: errors.event_location && touched.event_location ? 'text-input error' : 'text-input'
        }), errors.event_location && touched.event_location && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: errors.event_location,
          type: "event_location"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null, "Description/Instructions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Textarea__WEBPACK_IMPORTED_MODULE_10__["default"], {
          name: "event_description",
          value: values.event_description,
          onChange: handleChange,
          className: errors.event_description && touched.event_description ? 'text-input error' : 'text-input'
        }), errors.event_description && touched.event_description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: errors.event_description,
          type: "event_description"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null, "Event link *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "text",
          name: "event_link",
          value: values.event_link,
          onChange: handleChange,
          className: errors.event_link && touched.event_link ? 'text-input error' : 'text-input'
        }), errors.event_link && touched.event_link && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: errors.event_link,
          type: "event_link"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null, "Event Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventColorList__WEBPACK_IMPORTED_MODULE_16__["default"], {
          onChange: setFieldValue,
          selectedColor: values.event_color
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          disabled: isSubmitting,
          type: "submit"
        }, "Save")))));
      });
    }
  }]);

  return ETInnerForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
var ETForm = Object(formik__WEBPACK_IMPORTED_MODULE_4__["withFormik"])({
  mapPropsToValues: function mapPropsToValues() {
    return {
      event_name: '',
      event_color: {},
      event_location: '',
      event_description: '',
      event_link: ''
    };
  },
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_5___default.a.object().shape({
    event_name: yup__WEBPACK_IMPORTED_MODULE_5___default.a.string().required('Please provide an event name.'),
    event_link: yup__WEBPACK_IMPORTED_MODULE_5___default.a.string().required('Please provide an event link.'),
    event_color: yup__WEBPACK_IMPORTED_MODULE_5___default.a.string().required('Please pick your event color.')
  }),
  handleSubmit: function handleSubmit(values, _ref2) {
    var _ref2$props = _ref2.props,
        auth = _ref2$props.auth,
        id = _ref2$props.query.id,
        type = _ref2$props.type,
        setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors;

    if (type === "update") {
      updateEvent(id, values);
    } else if (type === "create") {
      createEvent(auth, values);
    }
  }
})(ETInnerForm);
ETInnerForm.propTypes = {};

var updateEvent = function updateEvent(id, values) {
  /* update action */
  _firebase__WEBPACK_IMPORTED_MODULE_11__["db"].ref("/events/".concat(id)).update(_objectSpread({}, values)).catch(function (error) {
    console.error(error);
  });
};

var createEvent = function createEvent(auth, values) {
  var uid = auth.user.uid;
  var ref = _firebase__WEBPACK_IMPORTED_MODULE_11__["db"].ref();
  var eventsRef = ref.child('events');

  var delayedPush = function delayedPush(event) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        eventsRef.push(event).then(resolve, reject);
      }, 1);
    });
  };

  delayedPush(_objectSpread({}, values, {
    uid: uid,
    step: 1,
    timestamp: new Date().getTime()
  })).then(function () {
    return eventsRef.orderByKey().on('child_added', function (snap) {
      var key = snap.key;
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/event_types/single?id=".concat(key), "/event_types/".concat(key));
    });
  }).catch(function (error) {
    console.error('Error writing new event to DB: ', error);
  });
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var auth = _ref3.auth,
      loading = _ref3.loading,
      event = _ref3.event;
  return {
    auth: auth,
    loading: loading,
    event: event
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchEvent: function fetchEvent(id) {
      return dispatch(Object(_actions_event__WEBPACK_IMPORTED_MODULE_15__["fetchEventById"])(id));
    }
  };
};

var WhatEventForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ETForm);
/* harmony default export */ __webpack_exports__["default"] = (WhatEventForm);

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: auth, db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);



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
var config =  false ? undefined : devConfig;

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth(); //auth.setPersistence(firebase.auth.Auth.Persistence.NONE);

var db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database();


/***/ }),

/***/ "./helpers/animations.js":
/*!*******************************!*\
  !*** ./helpers/animations.js ***!
  \*******************************/
/*! exports provided: fadeIn, spin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spin", function() { return spin; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(-360deg);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var spin = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());

/***/ }),

/***/ "./helpers/form.js":
/*!*************************!*\
  !*** ./helpers/form.js ***!
  \*************************/
/*! exports provided: FormGroup, FormLabel, FormControlInput, FormCaption, ExpandableBlock, ExpandableHeader, ExpandableTitle, ExpandableSubtitle, ExpandableContent, ExpandButtonLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return FormLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlInput", function() { return FormControlInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCaption", function() { return FormCaption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableBlock", function() { return ExpandableBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableHeader", function() { return ExpandableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableTitle", function() { return ExpandableTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableSubtitle", function() { return ExpandableSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableContent", function() { return ExpandableContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandButtonLink", function() { return ExpandButtonLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    background: none;\n    color: #000;\n    border: none;\n    box-shadow: none;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    font-size: 14px;\n    cursor: pointer;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    padding: 30px 52px;"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    font-size: 14px;\n    color: #878787;\n    font-weight: 500;\n    margin: 5px 0 10px 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    font-size: 16px;\n    color: #000;\n    margin: 10px 0 0 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: solid 1px #dadada;\n    min-height: 70px;\n    padding: 8px 20px;\n    font-size: 16px;\n    box-sizing: border-box;\n    cursor: pointer;\n    position: relative;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    border: solid 1px #666a73;\n    box-shadow: inset 0 0 0 1px #666a73;\n    width: 100%;\n    margin-bottom: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px 0;\n    font-size: 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    margin-bottom: 0.5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
var FormLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label(_templateObject2());
var FormControlInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_templateObject3());
var FormCaption = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject4());
/* Expandable collection */

var ExpandableBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject5());
var ExpandableHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject6());
var ExpandableTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1(_templateObject7());
var ExpandableSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5(_templateObject8());
var ExpandableContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject9());
var ExpandButtonLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject10());

/***/ }),

/***/ "./helpers/grid.js":
/*!*************************!*\
  !*** ./helpers/grid.js ***!
  \*************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-right: auto;\n    margin-left: auto;\n    padding-right: 20px;\n    padding-left: 20px;\n    max-width: 980px;\n    width: 980px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());

/***/ }),

/***/ "./pages/event_types/edit.js":
/*!***********************************!*\
  !*** ./pages/event_types/edit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BodyWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BodyWrapper */ "./components/BodyWrapper/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_EventTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/EventTypes */ "./components/EventTypes/index.js");
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/grid */ "./helpers/grid.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _components_WhatEventForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/WhatEventForm */ "./components/WhatEventForm/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var EditEventPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditEventPage, _React$Component);

  function EditEventPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EditEventPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditEventPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      step: 1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleForm", function (evt) {
      var target = evt.target,
          step = target.getAttribute('step');

      if (step && parseInt(step)) {
        _this.props.toggleEditEventTab(parseInt(step));
      }
    });

    return _this;
  }

  _createClass(EditEventPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      _objectDestructuringEmpty(this.props);

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BodyWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_helpers_grid__WEBPACK_IMPORTED_MODULE_7__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Edit Event Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_WhatEventForm__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
        type: "update"
      }, this.props))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var url, query;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _ref.req.url, query = _ref.query;
                return _context.abrupt("return", {
                  url: url,
                  query: query
                });

              case 2:
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

  return EditEventPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

EditEventPage.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var isAuthenticated = _ref2.auth.isAuthenticated;
  return {
    isAuthenticated: isAuthenticated
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleEditEventTab: function toggleEditEventTab(id) {
      return dispatch({
        type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_8__["TOGGLE_EDIT_EVENT_TAB"],
        payload: id
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(EditEventPage));

/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./pages/event_types/edit.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/event_types/edit.js */"./pages/event_types/edit.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-inlinesvg":
/*!**********************************!*\
  !*** external "react-inlinesvg" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-inlinesvg");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toggled":
/*!********************************!*\
  !*** external "react-toggled" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toggled");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=edit.js.map