webpackHotUpdate("static/development/pages/account.js",{

/***/ "./components/Button/Button.js":
/*!*************************************!*\
  !*** ./components/Button/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-inlinesvg */ "../node_modules/react-inlinesvg/es/index.js");
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");


function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        stroke: #444;\n      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        width: 15px;\n        height: 15px;\n        margin: 0;\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        width: 20px;\n        height: 20px;\n        margin: 0;\n        animation: ", " 1s linear infinite;\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  svg {\n    width: 16px;\n    height: 16px;\n    margin-right: 12px;\n    stroke: #fff;\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    @media only screen and (max-width: 768px) {\n      width: 12px;\n      height: 12px;\n      margin-right: 6px;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 5px 10px;\n    font-size: 12px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 14px 20px;\n    font-size: 18px;\n    min-width: 180px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        color: black;\n        background: linear-gradient(to right, #e0e0e0, #bdbdbd);\n        box-shadow: 0 5px 6px rgba(160, 160, 160, 0.5);\n        border-color: #ccc;\n        :focus,\n        :hover {\n          box-shadow: 0 6px 15px rgba(160, 160, 160, 0.5);\n        }\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        background: linear-gradient(to right, #7e57c2, #6200ea);\n        box-shadow: 0 5px 6px rgba(81, 45, 168, 0.5);\n        :focus,\n        :hover {\n          box-shadow: 0 6px 15px rgba(81, 45, 168, 0.5);\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        background-color: #00a2ff;\n        border: 1px solid #00a2ff;\n        color: #fff;\n        :hover {\n          background-color: #005596;\n          border: 1px solid #005596;\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: #000;\n    background: none;\n    border: none;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #000;\n  font-weight: 300;\n  text-align: center;\n  text-decoration: none;\n  line-height: 20px;\n  cursor: pointer;\n  outline: none;\n  padding: 12px 12px 11px;\n  border-radius: 0;\n  display: inline-block;\n  user-select: none;\n  box-sizing: border-box;\n  font-size: 16px;\n  min-width: 80px;\n  border-radius: 4px;\n\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button(_templateObject(), function (_ref) {
  var link = _ref.link;
  return link && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
}, function (_ref2) {
  var color = _ref2.color;

  if (color === 'blue') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
  }

  if (color === 'purple') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
  }

  if (color === 'gray') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5());
  }

  return null;
}, function (_ref3) {
  var size = _ref3.size;
  return size === 'large' && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject6());
}, function (_ref4) {
  var size = _ref4.size;
  return size === 'small' && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject7());
});
var Icon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__["default"])(_templateObject8(), function (_ref5) {
  var type = _ref5.type;
  return type === 'loader' && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject9(), _helpers_animations__WEBPACK_IMPORTED_MODULE_5__["spin"]);
}, function (_ref6) {
  var round = _ref6.round;
  return round && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject10());
}, function (_ref7) {
  var color = _ref7.color;
  return color === 'gray' && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject11());
});

var Button = function Button(props) {
  var SVGIcon = props.icon ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    type: props.icon,
    round: props.round,
    color: props.color,
    src: "/images/".concat(props.icon, ".svg")
  }) : '';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton, props, SVGIcon, props.icon !== 'loader' && props.children);
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  round: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Button.defaultProps = {
  color: 'blue',
  icon: '',
  type: '',
  round: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=account.js.566fde6655d9ae5096a5.hot-update.js.map