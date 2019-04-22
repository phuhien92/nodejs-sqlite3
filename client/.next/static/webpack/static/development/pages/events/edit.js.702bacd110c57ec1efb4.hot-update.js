webpackHotUpdate("static/development/pages/events/edit.js",{

/***/ "./components/BodyWrapper/BodyWrapper.js":
/*!***********************************************!*\
  !*** ./components/BodyWrapper/BodyWrapper.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");
/* harmony import */ var _PageLoading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../PageLoading */ "./components/PageLoading/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Sidebar */ "./components/Sidebar/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Header */ "./components/Header/index.js");
/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Modals */ "./components/Modals/index.js");








function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    overflow: auto;\n    display: flex;\n    flex: 0 0 auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    overflow-x: hidden;\n    display: flex;\n    flex: 1;\n    height: 100vh;\n    width: 100%;\n    flex-direction: column;\n    &.layout-column {\n        \n        \n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    display: flex;\n    box-sizing: border-box;\n    flex-direction: row;\n    height: 100%;\n    max-height: 100vh;\n    * {\n        box-sizing: border-box;\n    }\n\n    &.auth-view {\n        overflow: hidden;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faTachometerAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCalendar"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faAngleDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faUsers"]);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());
var MainContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject2());
var ContentInnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject3());

var BodyWrapper =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BodyWrapper, _React$Component);

  function BodyWrapper() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BodyWrapper);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(BodyWrapper).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BodyWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var hidePageLoading = this.props.hidePageLoading;
      _firebase__WEBPACK_IMPORTED_MODULE_14__["auth"].onAuthStateChanged(function (currentUser) {
        if (currentUser) {
          _this.props.authUser({
            uid: currentUser.uid,
            photoURL: currentUser.photoURL,
            email: currentUser.email,
            refreshToken: currentUser.refreshToken
          });
        }

        hidePageLoading();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isAuthenticated = _this$props.isAuthenticated,
          template = _this$props.template,
          pageLoading = _this$props.pageLoading,
          modalType = _this$props.modalType,
          modalProps = _this$props.modalProps;
      var content = pageLoading ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PageLoading__WEBPACK_IMPORTED_MODULE_15__["default"], null) : children;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_12___default()({
        'auth-view': isAuthenticated
      }); //console.log(modalType)

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ContentWrapper, {
        className: classes
      }, template === 'admin' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_18__["default"], this.props), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MainContentWrapper, {
        className: isAuthenticated ? "layout-column" : ""
      }, !pageLoading && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_19__["default"], this.props), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ContentInnerWrapper, null, content)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_20__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        modalType: modalType
      }, modalProps)));
    }
  }]);

  return BodyWrapper;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

BodyWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  hidePageLoading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  pageLoading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  norenew: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};
BodyWrapper.defaultProps = {
  norenew: false,
  modalType: null
};

var mapStateToProps = function mapStateToProps(_ref) {
  var pageLoading = _ref.loading.page,
      isAuthenticated = _ref.auth.isAuthenticated,
      _ref$modal = _ref.modal,
      modalType = _ref$modal.modalType,
      modalProps = _ref$modal.modalProps;
  return {
    pageLoading: pageLoading,
    isAuthenticated: isAuthenticated,
    modalType: modalType,
    modalProps: modalProps
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    authUser: function authUser(payload) {
      return dispatch({
        type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_17__["AUTH_USER"],
        payload: payload
      });
    },
    hidePageLoading: function hidePageLoading() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_16__["hidePageLoading"])());
    },
    showPageLoading: function showPageLoading() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_16__["showPageLoading"])());
    },
    hideModal: function hideModal() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_16__["hideModal"])());
    },
    showModal: function showModal(modalProps, modalType) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_16__["showModal"])({
        modalProps: modalProps,
        modalType: modalType
      }));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(BodyWrapper));

/***/ })

})
//# sourceMappingURL=edit.js.702bacd110c57ec1efb4.hot-update.js.map