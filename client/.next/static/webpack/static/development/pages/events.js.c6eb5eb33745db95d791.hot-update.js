webpackHotUpdate("static/development/pages/events.js",{

/***/ "./components/Events/Event.js":
/*!************************************!*\
  !*** ./components/Events/Event.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _PublishSwitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PublishSwitch */ "./components/Events/PublishSwitch.js");
/* harmony import */ var _EventDropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EventDropdown */ "./components/Events/EventDropdown.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Link */ "./components/Link/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");









function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n      background: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 15px;\n    height: 15px;\n    background: #d9d9d9;\n    border-radius: 50%;\n    border: 1px solid #bbb;\n\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    color: #4D5055;\n    word-wrap: break-word;\n    word-break: break-word;\n    max-width: 80%;\n    line-height: 16px;\n    font-size: 14px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding-left: 23px;\n    position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    vertical-align: middle;\n    padding: 11px 11px 7px;\n    font-size: 14px;\n    line-height: 14px;\n    background-color: #fff;\n    transition: border-color .2s ease;\n    position: relative;\n    box-sizing: border-box;\n    display: inline-block;\n    border: 1px solid #dadada;\n    border-radius: 3px;\n    width: 100%;\n    margin: 5px 0.5%;\n\n    :hover {\n        border-color: #00a2ff;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Block = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());
var BlockInner = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject2());
var EventName = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].span(_templateObject3());
var Marker = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject4(), function (_ref) {
  var color = _ref.color;
  return color && Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject5(), color);
});

var Event =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Event, _Component);

  function Event() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Event);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Event)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClickOutside", function (e) {
      if (_this.dropdownRef && !_this.dropdownRef.contains(e.target)) {
        _this.props.toggleDropdown('');
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "go", function (e) {
      var target = e.target;

      if (!_this.switchRef.contains(target) && !_this.dropdownRef.contains(target)) {
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/events/edit/".concat(_this.props.id));
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleDropdown", function () {
      _this.props.toggleDropdown(_this.props.id);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Event, [{
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
      var _this$props = this.props,
          event_color = _this$props.event_color,
          event_name = _this$props.event_name,
          id = _this$props.id,
          published = _this$props.published,
          toggled = this.props.toggleEvent === id;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Block, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BlockInner, null, published ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Marker, {
        color: event_color.value
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Marker, null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(EventName, null, event_name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_13__["default"], {
        path: "/events/".concat(id, "/edit")
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        link: true,
        size: 'small'
      }, "Edit Event"))));
    }
  }]);

  return Event;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ })

})
//# sourceMappingURL=events.js.c6eb5eb33745db95d791.hot-update.js.map