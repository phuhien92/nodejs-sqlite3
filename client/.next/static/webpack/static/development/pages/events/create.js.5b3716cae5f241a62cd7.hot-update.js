webpackHotUpdate("static/development/pages/events/create.js",{

/***/ "./components/WhatEventForm/index.js":
/*!*******************************************!*\
  !*** ./components/WhatEventForm/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! yup */ "../node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Error */ "./components/Error/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _helpers_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../helpers/form */ "./helpers/form.js");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../TextInput */ "./components/TextInput/index.js");
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Textarea */ "./components/Textarea/index.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");
/* harmony import */ var _actions_event__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../actions/event */ "./actions/event.js");
/* harmony import */ var _EventColorList__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./EventColorList */ "./components/WhatEventForm/EventColorList.js");
/* harmony import */ var _EventPublishSwitch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../EventPublishSwitch */ "./components/EventPublishSwitch/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lodash.isequal */ "../node_modules/lodash.isequal/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _AvailabilityForm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../AvailabilityForm */ "./components/AvailabilityForm/index.js");
/* harmony import */ var _EventTypes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../EventTypes */ "./components/EventTypes/index.js");
/* harmony import */ var _RepetitionBox_RepetitionBoxes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../RepetitionBox/RepetitionBoxes */ "./components/RepetitionBox/RepetitionBoxes.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_29__);











function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n    color: red;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n    padding: 15px;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1;\n    color: #555;\n    text-align: center;\n    background-color: #eee;\n    border: 1px solid #ccc;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n    width: 100%;\n    max-width: 800px;\n    margin-bottom: 300px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n    display: flex;\n    margin-right: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n    display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n    margin-top: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





















var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject());
var InlineGroup = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject2());
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject3());
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject4());
var InlineLabel = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].label(_templateObject5());
var Reddot = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].span(_templateObject6());

var EventForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(EventForm, _Component);

  function EventForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, EventForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(EventForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      isSubmitted: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "setEventPublishSwitch", function () {
      var _this$props = _this.props,
          values = _this$props.values,
          setFieldValue = _this$props.setFieldValue;
      var published = values.published;
      setFieldValue("published", !published);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(EventForm, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      var _this$props2 = this.props,
          event = _this$props2.event,
          setValues = _this$props2.setValues,
          action = _this$props2.action,
          availability = _this$props2.availability;

      if (!lodash_isequal__WEBPACK_IMPORTED_MODULE_25___default()(event, nextProps.event)) {
        setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, nextProps.event));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          values = _this$props3.values,
          setSubmitting = _this$props3.setSubmitting,
          isSubmitting = _this$props3.isSubmitting,
          availability = _this$props3.availability,
          event = _this$props3.event,
          touched = _this$props3.touched,
          errors = _this$props3.errors,
          handleChange = _this$props3.handleChange,
          handleBlur = _this$props3.handleBlur,
          handleSubmit = _this$props3.handleSubmit,
          setFieldValue = _this$props3.setFieldValue,
          toggleAvaiSwitcher = _this$props3.toggleAvaiSwitcher;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(FormContainer, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["Form"], {
        id: "et-form",
        onSubmit: handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_EventPublishSwitch__WEBPACK_IMPORTED_MODULE_24__["default"], {
        size: "large",
        setFieldValue: setFieldValue,
        published: values.published,
        isSubmitting: isSubmitting
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_EventTypes__WEBPACK_IMPORTED_MODULE_27__["default"], {
        setFieldValue: setFieldValue,
        value: values.event_type,
        isSubmitting: isSubmitting
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormLabel"], null, "Event name ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Reddot, null, "*")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_19__["default"], {
        id: "event_name",
        type: "text",
        name: "event_name",
        value: values.event_name,
        onChange: handleChange,
        onBlur: handleBlur,
        className: errors.event_name && touched.event_name ? 'text-input error' : 'text-input',
        disabled: isSubmitting
      }), touched.event_name && errors.event_name && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
        error: errors.event_name
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormLabel"], null, "Duration"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(InlineGroup, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_19__["default"], {
        name: "event_duration_hours",
        type: "number",
        min: "0",
        value: values.event_duration_hours,
        onChange: handleChange,
        disabled: isSubmitting,
        className: errors.event_duration_hours && touched.event_duration_hours ? 'text-input error' : 'text-input'
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(InlineLabel, null, "Hours")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_19__["default"], {
        name: "event_duration_minutes",
        type: "number",
        min: "0",
        value: values.event_duration_minutes,
        onChange: handleChange,
        disabled: isSubmitting,
        className: errors.event_duration_minutes && touched.event_duration_minutes ? 'text-input error' : 'text-input'
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(InlineLabel, null, "Minutes"))), touched.event_duration_hours && errors.event_duration_hours && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
        error: errors.event_duration_hours
      }), touched.event_duration_minutes && errors.event_duration_minutes && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
        error: errors.event_duration_minutes
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormLabel"], null, "Location"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_19__["default"], {
        id: "event_location",
        type: "text",
        name: "event_location",
        value: values.event_location,
        onChange: handleChange,
        placeholder: "38 Church Street, Old office building etc",
        disabled: isSubmitting
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormLabel"], null, "Description/Instructions"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Textarea__WEBPACK_IMPORTED_MODULE_20__["default"], {
        name: "event_description",
        value: values.event_description,
        onChange: handleChange,
        placeholder: "Use all your essay writing skills here",
        disabled: isSubmitting
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormLabel"], null, "Event link ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Reddot, null, "*")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TextInput__WEBPACK_IMPORTED_MODULE_19__["default"], {
        type: "text",
        name: "event_link",
        value: values.event_link,
        onChange: handleChange,
        onBlur: handleBlur,
        disabled: isSubmitting,
        className: errors.event_link && touched.event_link ? 'text-input error' : 'text-input'
      }), touched.event_link && errors.event_link && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
        error: errors.event_link
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormLabel"], null, "Event Color"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_EventColorList__WEBPACK_IMPORTED_MODULE_23__["default"], {
        onChange: setFieldValue,
        selectedColor: values.event_color
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormLabel"], null, "Availability"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormSubLabel"], null, "When do you want to schedule your event? Is is a single time event or a recurring event?"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_AvailabilityForm__WEBPACK_IMPORTED_MODULE_26__["default"], {
        availability: availability,
        setSubmitting: setSubmitting,
        toggleAvaiSwitcher: toggleAvaiSwitcher
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormLabel"], null, "Repetition Occurs"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_helpers_form__WEBPACK_IMPORTED_MODULE_18__["FormSubLabel"], null, "How long will the event can be schedule in future?"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_RepetitionBox_RepetitionBoxes__WEBPACK_IMPORTED_MODULE_28__["default"], {
        repetition: values.repetition,
        onChange: setFieldValue,
        startDate: values.start_date,
        endDate: values.end_date
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ButtonWrapper, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
        icon: isSubmitting ? "loader" : "",
        size: "large",
        disabled: isSubmitting
      }, "Save"))));
    }
  }]);

  return EventForm;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

;
var FormikForm = Object(formik__WEBPACK_IMPORTED_MODULE_14__["withFormik"])({
  mapPropsToValues: function mapPropsToValues(_ref) {
    var defaultEvent = _ref.defaultEvent;
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultEvent);
  },
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_15__["object"]().shape({
    event_name: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required('Please provide an event name.'),
    event_duration_hours: yup__WEBPACK_IMPORTED_MODULE_15__["number"]().positive("Hour must be a positive number.").integer("Hour must be an integer.").max(12, "Duration can't be more than 12 hours."),
    event_duration_minutes: yup__WEBPACK_IMPORTED_MODULE_15__["number"]().positive("Minutes must be a positive number").integer("Minutes must be an integer").max(59, "Minutes can't be more than 59"),
    event_link: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required('Please provide an event link.').test({
      name: 'no_white_space',
      test: function test(value) {
        return value && value.indexOf(" ") > -1 ? false : true;
      },
      message: "Can't contain spaces"
    }).test({
      name: 'event_link',
      message: "Event link can't contain special character.",
      test: function test(value) {
        return value && value.match(/[!@#$%^&*(),.?":{}|<>]/g) ? false : true;
      }
    }),
    event_color: yup__WEBPACK_IMPORTED_MODULE_15__["string"]().required('Please pick your event color.')
  }),
  handleSubmit: function handleSubmit(values, bag) {
    var _bag$props = bag.props,
        action = _bag$props.action,
        auth = _bag$props.auth,
        availability = _bag$props.availability,
        router = _bag$props.router,
        setSubmitting = bag.setSubmitting;
    var uid = auth.user.uid;
    console.log(bag);
    setSubmitting(true);
    return;

    if (action === "update") {
      var id = router.query.id;
      updateEvent(id, values, availability, setSubmitting);
      setSubmitting(false);
    } else if (action === "create") {
      createEvent(auth.user.uid, values, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, availability, {
        uid: uid
      }));
      setSubmitting(false);
    }
  }
})(EventForm);

var updateEvent = function updateEvent(id, values, availability, setSubmitting) {
  /* update action */
  var avaiValues = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, availability, {
    uid: values.uid
  }),
      avaiId = availability.id;

  var delayedPush = function delayedPush(event) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      setTimeout(function () {
        _firebase__WEBPACK_IMPORTED_MODULE_21__["db"].ref("/events/".concat(id)).update(event).then(resolve, reject);
      }, 1000);
    });
  };

  delayedPush(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values)).then(function () {
    return _firebase__WEBPACK_IMPORTED_MODULE_21__["db"].ref("/availability/".concat(avaiId)).push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, avaiValues)).catch(function (error) {
      console.error(error);
    });
  }).catch(function (error) {
    console.error('Error writing availability to DB: ', error);
  });
};

var createEvent = function createEvent(uid, values, availability) {
  var ref = _firebase__WEBPACK_IMPORTED_MODULE_21__["db"].ref();
  var eventsRef = ref.child('events');
  var avaiRef = ref.child('availability');

  var delayedPush = function delayedPush(event) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      setTimeout(function () {
        eventsRef.push(event).then(resolve, reject);
      }, 1);
    });
  };

  delayedPush(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, {
    uid: uid,
    createAt: new Date().getTime(),
    updateAt: new Date().getTime()
  })).then(function () {
    return eventsRef.orderByKey().on('child_added', function (snap) {
      var key = snap.key;
      var refAvaiId = avaiRef.orderByChild('id').equalTo(key);
      refAvaiId.once('value', function (snapshot) {
        if (!snapshot.hasChildren()) {
          snapshot.ref.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, availability, {
            eventId: key
          })).then(function () {
            next_router__WEBPACK_IMPORTED_MODULE_29___default.a.push('/events');
          });
        }

        next_router__WEBPACK_IMPORTED_MODULE_29___default.a.push('/events');
      });
    });
  }).catch(function (error) {
    console.error('Error writing new event to DB: ', error);
  });
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth,
      loading = _ref2.loading,
      event = _ref2.event;
  return {
    auth: auth,
    loading: loading,
    defaultEvent: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchEvent: function fetchEvent(id) {
      return dispatch(Object(_actions_event__WEBPACK_IMPORTED_MODULE_22__["fetchEventById"])(id));
    }
  };
};

var WhatEventForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(FormikForm);
/* harmony default export */ __webpack_exports__["default"] = (WhatEventForm);

/***/ })

})
//# sourceMappingURL=create.js.5b3716cae5f241a62cd7.hot-update.js.map