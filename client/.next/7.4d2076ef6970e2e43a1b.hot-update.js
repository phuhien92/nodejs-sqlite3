webpackHotUpdate(7,{

/***/ "./components/EventTypes/EventTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("../node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_cookie__ = __webpack_require__("../node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("../node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_animations__ = __webpack_require__("./helpers/animations.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/components/EventTypes/EventTypes.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  poistion: relative;\n  width: 600px;\n  max-width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0 0 80px;\n  animation: ", " 0.8s ease;\n\n  > * {\n    max-width: 100%;\n  }\n\n  hr {\n    width: 100%;\n    height: 1px;\n    outline: none;\n    border: none;\n    background-color: #e3e3e3;\n    margin: 24px 0;\n\n    @media only screen and (max-width: 768px) {\n      margin: 12px 0;\n    }\n  }\n  h3 {\n    font-size: 24px;\n    margin: 32px 0 16px;\n\n    @media only screen and (max-width: 768px) {\n      font-size: 18px;\n    }\n  }\n  p {\n    margin: 24px 0;\n  }\n  a {\n    margin: 32px 0 0;\n    color: #2196f3;\n    text-decoration: none;\n\n    :hover {\n      color: #2196f3;\n      border-bottom: 1px dotted #2196f3;\n    }\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Wrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components__["c" /* default */].div(_templateObject, __WEBPACK_IMPORTED_MODULE_7__helpers_animations__["a" /* fadeIn */]);

var EventTypes =
/*#__PURE__*/
function (_Component) {
  _inherits(EventTypes, _Component);

  function EventTypes() {
    _classCallCheck(this, EventTypes);

    return _possibleConstructorReturn(this, (EventTypes.__proto__ || Object.getPrototypeOf(EventTypes)).apply(this, arguments));
  }

  _createClass(EventTypes, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Event Types s");
    }
  }]);

  return EventTypes;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

EventTypes.propTypes = {
  auth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    isAuthenticated: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(EventTypes));

/***/ })

})
//# sourceMappingURL=7.4d2076ef6970e2e43a1b.hot-update.js.map