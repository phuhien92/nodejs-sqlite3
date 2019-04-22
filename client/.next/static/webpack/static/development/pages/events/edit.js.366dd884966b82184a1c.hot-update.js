webpackHotUpdate("static/development/pages/events/edit.js",{

/***/ "./components/Modals/avaiModal.js":
/*!****************************************!*\
  !*** ./components/Modals/avaiModal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 40px;\n    font-weight: 100;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding-top: 0;\n    margin-top: 0;\n    margin-right: 10px;\n    cursor: pointer;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    pointer-events: auto;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid rgba(0,0,0,.2);\n    border-radius: .3rem;\n    outline: 0;\n    width: 800px;\n    margin: 30px auto auto auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject2());
var ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var StyledCloseButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject4());

var AvaiModal = function AvaiModal(_ref) {
  var closeModal = _ref.closeModal,
      title = _ref.title,
      message = _ref.message;

  var cancel = function cancel() {
    return closeModal();
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalContent, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalHeader, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalTitle, null, "Avai Modal"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCloseButton, {
    src: "/images/cross.png",
    onClick: cancel
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AvaiModal);

/***/ })

})
//# sourceMappingURL=edit.js.366dd884966b82184a1c.hot-update.js.map