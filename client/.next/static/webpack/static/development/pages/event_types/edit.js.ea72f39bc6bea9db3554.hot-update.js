webpackHotUpdate("static/development/pages/event_types/edit.js",{

/***/ "./components/WhatEventForm/EventColorList.js":
/*!****************************************************!*\
  !*** ./components/WhatEventForm/EventColorList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventColor */ "./components/WhatEventForm/EventColor.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "../node_modules/next/node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
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





var ColorList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul(_templateObject());
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
      console.log(selectedColor);

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

/***/ })

})
//# sourceMappingURL=edit.js.ea72f39bc6bea9db3554.hot-update.js.map