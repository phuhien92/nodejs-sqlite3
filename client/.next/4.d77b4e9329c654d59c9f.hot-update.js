webpackHotUpdate(4,{

/***/ "../node_modules/next-redux-wrapper/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setPromise = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("../node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireWildcard(__webpack_require__("../node_modules/react/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _Promise = Promise;
var _debug = false;
var DEFAULT_KEY = '__NEXT_REDUX_STORE__';
var isServer = typeof window === 'undefined';

var setPromise = function setPromise(Promise) {
  return _Promise = Promise;
};
/**
 * @param makeStore
 * @param initialState
 * @param config
 * @param ctx
 * @return {{getState: function, dispatch: function}}
 */


exports.setPromise = setPromise;

var initStore = function initStore(_ref) {
  var makeStore = _ref.makeStore,
      initialState = _ref.initialState,
      config = _ref.config,
      _ref$ctx = _ref.ctx,
      ctx = _ref$ctx === void 0 ? {} : _ref$ctx;
  var storeKey = config.storeKey;

  var createStore = function createStore() {
    return makeStore(config.deserializeState(initialState), _objectSpread({}, ctx, config, {
      isServer: isServer
    }));
  };

  if (isServer) return createStore(); // Memoize store if client

  if (!window[storeKey]) {
    window[storeKey] = createStore();
  }

  return window[storeKey];
};
/**
 * @param makeStore
 * @param config
 * @return {function(App): {getInitialProps, new(): WrappedApp, prototype: WrappedApp}}
 */


var _default = function _default(makeStore) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  config = _objectSpread({
    storeKey: DEFAULT_KEY,
    debug: _debug,
    serializeState: function serializeState(state) {
      return state;
    },
    deserializeState: function deserializeState(state) {
      return state;
    }
  }, config);
  return function (App) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_Component) {
      _inherits(WrappedApp, _Component);

      function WrappedApp(props, context) {
        var _this;

        _classCallCheck(this, WrappedApp);

        _this = _possibleConstructorReturn(this, (WrappedApp.__proto__ || Object.getPrototypeOf(WrappedApp)).call(this, props, context));
        var initialState = props.initialState,
            store = props.store;
        var hasStore = store && 'dispatch' in store && 'getState' in store; //TODO Always recreate the store even if it could be reused? @see https://github.com/zeit/next.js/pull/4295#pullrequestreview-118516366

        store = hasStore ? store : initStore({
          makeStore: makeStore,
          initialState: initialState,
          config: config
        });
        if (config.debug) console.log('4. WrappedApp.render', hasStore ? 'picked up existing one,' : 'created new store with', 'initialState', initialState);
        _this.store = store;
        return _this;
      }

      _createClass(WrappedApp, [{
        key: "render",
        value: function render() {
          var _props = this.props,
              initialProps = _props.initialProps,
              initialState = _props.initialState,
              store = _props.store,
              props = _objectWithoutProperties(_props, ["initialProps", "initialState", "store"]); // Cmp render must return something like <Provider><Component/></Provider>


          return _react.default.createElement(App, _extends({}, props, initialProps, {
            store: this.store
          }));
        }
      }]);

      return WrappedApp;
    }(_react.Component), Object.defineProperty(_class, "displayName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: "withRedux(".concat(App.displayName || App.name || 'App', ")")
    }), Object.defineProperty(_class, "getInitialProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(appCtx) {
          var store, initialProps;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (appCtx) {
                    _context.next = 2;
                    break;
                  }

                  throw new Error('No app context');

                case 2:
                  if (appCtx.ctx) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('No page context');

                case 4:
                  store = initStore({
                    makeStore: makeStore,
                    config: config,
                    ctx: appCtx.ctx
                  });
                  if (config.debug) console.log('1. WrappedApp.getInitialProps wrapper got the store with state', store.getState());
                  appCtx.ctx.store = store;
                  appCtx.ctx.isServer = isServer;
                  initialProps = {};

                  if (!('getInitialProps' in App)) {
                    _context.next = 13;
                    break;
                  }

                  _context.next = 12;
                  return App.getInitialProps.call(App, appCtx);

                case 12:
                  initialProps = _context.sent;

                case 13:
                  if (config.debug) console.log('3. WrappedApp.getInitialProps has store state', store.getState());
                  return _context.abrupt("return", {
                    store: store,
                    isServer: isServer,
                    initialState: config.serializeState(store.getState()),
                    initialProps: initialProps
                  });

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp;
  };
};

exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("../node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("../node_modules/next-redux-wrapper/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_BodyWrapper__ = __webpack_require__("./components/BodyWrapper/index.js");
var _jsxFileName = "/Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Homepage =
/*#__PURE__*/
function (_Component) {
  _inherits(Homepage, _Component);

  function Homepage() {
    _classCallCheck(this, Homepage);

    return _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).apply(this, arguments));
  }

  _createClass(Homepage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_BodyWrapper__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "hello nextapp.js app");
    }
  }]);

  return Homepage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Homepage.propTypes = {};

var mapStateToProps = function mapStateToProps() {};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
}; //export default Homepage;


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */], mapStateToProps, mapDispatchToProps)(Homepage));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("../node_modules/redux-devtools-extension/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("../node_modules/redux-thunk/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("./reducers/index.js");





var store = function store(initialState) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__["a" /* default */])));
};

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })

})
//# sourceMappingURL=4.d77b4e9329c654d59c9f.hot-update.js.map