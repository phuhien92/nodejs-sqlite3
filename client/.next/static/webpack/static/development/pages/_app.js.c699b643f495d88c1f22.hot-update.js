webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/event.js":
/*!***************************!*\
  !*** ./reducers/event.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//  import * as types from '../actions/actionTypes'; 
var initialState = {
  published: false,
  event_type: 'OnetoOne',
  event_name: '',
  event_duration_hours: 0,
  event_duration_minutes: 15,
  event_color: {
    value: '#FF3C38',
    label: 'RED'
  },
  event_location: '',
  event_description: '',
  event_link: '',
  repetition: 'never',
  // 0: never / 1: date / 2: interval,
  start_date: null,
  end_date: null,
  isScheduleAutoConfirm: true,
  allowUserCancelEvent: true,
  sentBookingConfEmailToInvitee: true,
  isSentReminderEmail: false,
  advanceBooingBefore: 0,
  uid: null,
  eventId: null
};

var event = function event() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (event);

/***/ })

})
//# sourceMappingURL=_app.js.c699b643f495d88c1f22.hot-update.js.map