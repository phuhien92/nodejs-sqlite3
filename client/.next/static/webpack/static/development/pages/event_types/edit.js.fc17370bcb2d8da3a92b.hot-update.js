webpackHotUpdate("static/development/pages/event_types/edit.js",{

/***/ "./components/WhatEventForm/index.js":
/*!*******************************************!*\
  !*** ./components/WhatEventForm/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.es6.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "../node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Error */ "./components/Error/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/form */ "./helpers/form.js");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TextInput */ "./components/TextInput/index.js");
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Textarea */ "./components/Textarea/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_toggled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toggled */ "../node_modules/react-toggled/dist/react-toggled.esm.js");
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");
/* harmony import */ var _actions_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/event */ "./actions/event.js");
/* harmony import */ var _EventColorList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EventColorList */ "./components/WhatEventForm/EventColorList.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    flex-basis: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: stretch;\n    animation: ", " 0.8s ease-out;\n    width: 100%;\n    margin-top: 20px;\n    input {\n        margin-bottom: 48px;\n    }\n    @media only screen and (max-width: 768px) {\n        input {\n        margin-bottom: 32px;\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    > button {\n        margin-right: 1rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


















var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form(_templateObject2(), _helpers_animations__WEBPACK_IMPORTED_MODULE_14__["fadeIn"]);

var ETInnerForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ETInnerForm, _Component);

  function ETInnerForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ETInnerForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ETInnerForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setEventColor", function (color) {
      _this.props.setValues({
        event_color: color
      });

      return false;
    });

    return _this;
  }

  _createClass(ETInnerForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.type === "create") {
        this.props.setValues(_objectSpread({}, this.props.event));
      }

      if (this.props.type === "update") {
        var query = this.props.query;
        this.props.fetchEvent(query.id).then(function (event) {
          _this2.props.setValues(_objectSpread({}, event));
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          values = _this$props.values,
          touched = _this$props.touched,
          errors = _this$props.errors,
          isSubmitting = _this$props.isSubmitting,
          handleChange = _this$props.handleChange,
          handleBlur = _this$props.handleBlur,
          handleSubmit = _this$props.handleSubmit;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toggled__WEBPACK_IMPORTED_MODULE_13__["default"], {
        on: true
      }, function (_ref) {
        var on = _ref.on,
            getTogglerProps = _ref.getTogglerProps,
            setOn = _ref.setOn;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandableBlock"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandableHeader"], getTogglerProps(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandableTitle"], null, "What event is this?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandableSubtitle"], null, values && values.event_name), !on && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandButtonLink"], null, "Edit")), on && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["ExpandableContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
          id: "et-form",
          onSubmit: handleSubmit
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null, "Event name *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "event_name",
          type: "text",
          name: "event_name",
          value: values.event_name,
          onChange: handleChange,
          onBlur: handleBlur,
          className: errors.event_name && touched.event_name ? 'text-input error' : 'text-input',
          autoFocus: true
        }), errors.event_name && touched.event_name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: errors.event_name,
          type: "event_name"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null, "Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "event_location",
          type: "text",
          name: "event_location",
          value: values.event_location,
          onChange: handleChange,
          className: errors.event_location && touched.event_location ? 'text-input error' : 'text-input'
        }), errors.event_location && touched.event_location && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: errors.event_location,
          type: "event_location"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null, "Description/Instructions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Textarea__WEBPACK_IMPORTED_MODULE_10__["default"], {
          name: "event_description",
          value: values.event_description,
          onChange: handleChange,
          className: errors.event_description && touched.event_description ? 'text-input error' : 'text-input'
        }), errors.event_description && touched.event_description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: errors.event_description,
          type: "event_description"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null, "Event link *"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "text",
          name: "event_link",
          value: values.event_link,
          onChange: handleChange,
          className: errors.event_link && touched.event_link ? 'text-input error' : 'text-input'
        }), errors.event_link && touched.event_link && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
          error: errors.event_link,
          type: "event_link"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null, "Event Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventColorList__WEBPACK_IMPORTED_MODULE_16__["default"], {
          setEventColor: _this3.setEventColor,
          selectedColor: values.event_color
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          disabled: isSubmitting,
          type: "submit"
        }, "Save")))));
      });
    }
  }]);

  return ETInnerForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
var ETForm = Object(formik__WEBPACK_IMPORTED_MODULE_4__["withFormik"])({
  mapPropsToValues: function mapPropsToValues() {
    return {
      event_name: '',
      event_color: '',
      event_location: '',
      event_description: '',
      event_link: ''
    };
  },
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_5___default.a.object().shape({
    event_name: yup__WEBPACK_IMPORTED_MODULE_5___default.a.string().required('Please provide an event name.'),
    event_link: yup__WEBPACK_IMPORTED_MODULE_5___default.a.string().required('Please provide an event link.'),
    event_color: yup__WEBPACK_IMPORTED_MODULE_5___default.a.string().required('Please pick your event color.')
  }),
  handleSubmit: function handleSubmit(values, _ref2) {
    var _ref2$props = _ref2.props,
        auth = _ref2$props.auth,
        id = _ref2$props.query.id,
        type = _ref2$props.type,
        setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors;

    if (type === "update") {
      updateEvent(id, values);
    } else if (type === "create") {
      createEvent(auth, values);
    }
  }
})(ETInnerForm);
ETInnerForm.propTypes = {};

var updateEvent = function updateEvent(id, values) {
  /* update action */
  _firebase__WEBPACK_IMPORTED_MODULE_11__["db"].ref("/events/".concat(id)).update(_objectSpread({}, values)).catch(function (error) {
    console.error(error);
  });
};

var createEvent = function createEvent(auth, values) {
  var uid = auth.user.uid;
  var ref = _firebase__WEBPACK_IMPORTED_MODULE_11__["db"].ref();
  var eventsRef = ref.child('events');

  var delayedPush = function delayedPush(event) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        eventsRef.push(event).then(resolve, reject);
      }, 1);
    });
  };

  delayedPush(_objectSpread({}, values, {
    uid: uid,
    step: 1,
    timestamp: new Date().getTime()
  })).then(function () {
    return eventsRef.orderByKey().on('child_added', function (snap) {
      var key = snap.key;
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/event_types/single?id=".concat(key), "/event_types/".concat(key));
    });
  }).catch(function (error) {
    console.error('Error writing new event to DB: ', error);
  });
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var auth = _ref3.auth,
      loading = _ref3.loading,
      event = _ref3.event;
  return {
    auth: auth,
    loading: loading,
    event: event
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchEvent: function fetchEvent(id) {
      return dispatch(Object(_actions_event__WEBPACK_IMPORTED_MODULE_15__["fetchEventById"])(id));
    }
  };
};

var WhatEventForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ETForm);
/* harmony default export */ __webpack_exports__["default"] = (WhatEventForm);

/***/ })

})
//# sourceMappingURL=edit.js.fc17370bcb2d8da3a92b.hot-update.js.map