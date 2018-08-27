webpackHotUpdate(7,{

/***/ "./pages/event_types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BodyWrapper__ = __webpack_require__("./components/BodyWrapper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("../node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/pages/event_types.js";





var EventTypesPage = function EventTypesPage(_ref) {
  var isAuthenticated = _ref.isAuthenticated;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_BodyWrapper__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, isAuthenticated ? 'Event Types' : null);
};

EventTypesPage.propTypes = {
  isAuthenticated: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var isAuthenticated = _ref2.auth.isAuthenticated;
  return {
    isAuthenticated: isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, null)(EventTypesPage));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/event_types")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.563fb806cf88af3f717b.hot-update.js.map