webpackHotUpdate("static/development/pages/events/edit.js",{

/***/ "./components/AvailabilityForm/AvailabilityItem.js":
/*!*********************************************************!*\
  !*** ./components/AvailabilityForm/AvailabilityItem.js ***!
  \*********************************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");









function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: absolute;\n    right: 15px;\n    bottom: 15px;\n\n    > button {\n        padding: 0;\n        min-width: auto;\n        font-size: 12px;\n        font-weight: 700;\n\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: absolute;\n    bottom: 15px;\n    color: #fff;\n    padding: 5px;\n    font-weight: 600;\n    font-size: 13px;\n    border-radius: 5px;\n    border: 1px solid #ddd;\n    background: #f53b38;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    &.active {\n        background: #43aa8b;\n        span {\n            order: 1;\n        }\n        .switcher {\n            order: 2;\n        }\n    }\n\n    .switcher {\n        width: 12px;\n        height: 12px;\n        margin: 3px;\n        border-radius: 50%;\n        background: #fff;        \n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    margin-top: 10px;\n    font-size: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    color: #333538;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.4;\n    margin-top: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: relative;\n    margin-bottom: 15px;\n    border: 1px solid #d1d1d1!important;\n    padding: 15px;\n    width: 100%;\n    min-height: 160px;\n    float: left;\n    border-radius: 6px;\n    background: #f2f2f2;\n\n    &.active {\n        background: #fff;\n    }\n\n    &:nth-child(odd) {\n        margin: 0 2% 2% 0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var AvaiItem = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p(_templateObject2());
var Text = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject3());
var StyledSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject4());
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject5());
var dateOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var getWeekday = function getWeekday(index) {
  return dateOfWeek[index];
};

var getTimeRangeStr = function getTimeRangeStr(slotType, timeRange) {
  var txt = timeRange.map(function (time) {
    var timeString = slotType === 'recur' ? [time.start, time.end].join(' - ') : time.start;
    return timeString;
  });
  return txt.join(' , ');
};

var AvailabilityItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AvailabilityItem, _React$Component);

  function AvailabilityItem() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AvailabilityItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AvailabilityItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      active: false,
      index: 0,
      slot: null,
      open: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleAvaiSwitcher", function () {
      var active = _this.state.active;

      _this.setState({
        active: !active
      }, function () {});
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AvailabilityItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          slot = _this$props.slot,
          active = _this$props.active,
          index = _this$props.index;
      this.setState({
        slot: slot,
        active: active,
        index: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          slot = _this$state.slot,
          active = _this$state.active;
      var _this$props2 = this.props,
          openModal = _this$props2.openModal,
          index = _this$props2.index;
      var weekdayName = getWeekday(index);
      var slotType = slot && slot.type ? slot.type : '';
      var timeRange = slot && slot.timeRange ? slot.timeRange.filter(function (time) {
        return time.type === slotType;
      }) : [];
      var timeRangeStr = getTimeRangeStr(slotType, timeRange);
      var classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()({
        'active': active
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(AvaiItem, {
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Title, null, weekdayName), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Text, null, timeRangeStr), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(StyledSwitcher, {
        className: classes,
        onClick: this.toggleAvaiSwitcher,
        "data-index": index
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "switcher"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, active ? "ON" : "OFF")), active && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonWrapper, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        link: true,
        onClick: function onClick(e) {
          return openModal(e, index);
        }
      }, "Edit")));
    }
  }]);

  return AvailabilityItem;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AvailabilityItem);

/***/ })

})
//# sourceMappingURL=edit.js.36fdb088f1ca9af0c90c.hot-update.js.map