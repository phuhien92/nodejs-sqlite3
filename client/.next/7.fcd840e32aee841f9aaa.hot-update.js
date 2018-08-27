webpackHotUpdate(7,{

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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(BodyWrapper));

/***/ })

})
//# sourceMappingURL=7.fcd840e32aee841f9aaa.hot-update.js.map