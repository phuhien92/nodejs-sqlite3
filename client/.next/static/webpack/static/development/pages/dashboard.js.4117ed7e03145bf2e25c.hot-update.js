webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/Header/HeaderRightMenu.js":
/*!**********************************************!*\
  !*** ./components/Header/HeaderRightMenu.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderMenuItem */ "./components/Header/HeaderMenuItem.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: 2px solid transparent;\n  transition: all 0.1s linear;\n  opacity: 0.6;\n  &:hover {\n    opacity: 1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n\n  @media only screen and (max-width: 488px) {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  float: right;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  @media only screen and (max-width: 488px) {\n    justify-content: space-evenly;\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








 //import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var List = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].ul(_templateObject()); // const IMAGE = styled.img`
//   border-radius: 3px;
//   width: 60px;
//   box-shadow: 0 5px 6px #7c7e79;
// `;

var LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2());
var ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject3());

var HeaderMenu = function HeaderMenu(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.currentTarget.getAttribute('href');
    if (!path || window.location.pathname === path) return;
    props.showPageLoading();
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(path);
  };

  var logoutHandler = function logoutHandler(e) {
    e.preventDefault();
    props.logout().then(function () {
      props.unAuthUser();
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
    }).catch(function (error) {
      console.error("Header Right Menu :", error);
    });
  };

  var login = !props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/login",
    title: "login / sign up",
    onClick: goTo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Login / Sign up")));
  var account = props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/account",
    title: "account",
    onClick: goTo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemTitle, null, "Account")));
  var event_types = props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/events",
    title: "events",
    onClick: goTo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemTitle, null, "Event Types")));
  var logout = props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoginContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/logout",
    title: "logout",
    onClick: logoutHandler
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemTitle, null, "Logout"))));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, null, event_types, account, logout, login);
};

HeaderMenu.propTypes = {
  showPageLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
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
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["showPageLoading"])());
    },
    logout: function logout() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["logoutUser"])());
    },
    unAuthUser: function unAuthUser() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["unauthUser"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(HeaderMenu));

/***/ })

})
//# sourceMappingURL=dashboard.js.4117ed7e03145bf2e25c.hot-update.js.map