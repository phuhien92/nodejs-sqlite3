webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/modal.js":
/*!***************************!*\
  !*** ./reducers/modal.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");

var initialState = {
  modalType: null,
  modalBackdrop: true,
  modalProps: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_MODAL"]:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        modalBackdrop: action.modalBackdrop || state.modalBackdrop,
        type: action.type
      };

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_MODAL"]:
      return initialState;

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.85ce3d23b40eac7023b1.hot-update.js.map