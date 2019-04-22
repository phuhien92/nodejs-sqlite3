module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "../node_modules/@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css":
/*!**********************************************************************************!*\
  !*** ../node_modules/@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "../node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../node_modules/next/router.js":
/*!**************************************!*\
  !*** ../node_modules/next/router.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "../node_modules/next/dist/client/router.js")


/***/ }),

/***/ "../node_modules/react-calendar/dist/Calendar.css":
/*!********************************************************!*\
  !*** ../node_modules/react-calendar/dist/Calendar.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/react-date-picker/dist/DatePicker.css":
/*!*************************************************************!*\
  !*** ../node_modules/react-date-picker/dist/DatePicker.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../server/routes/index.js":
/*!*********************************!*\
  !*** ../server/routes/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")

module.exports = routes()
    .add('dashboard','/dashboard','dashboard')
    .add('events','/events')
    .add('createEvent','/events/create','events/create')
    .add('eventEdit','/events/:id/edit','events/edit')

    // profile or account
    .add('account', '/account', 'account')

    

/***/ }),

/***/ "./actions/actionTypes.js":
/*!********************************!*\
  !*** ./actions/actionTypes.js ***!
  \********************************/
/*! exports provided: SHOW_PAGE_LOADING, HIDE_PAGE_LOADING, AUTH_USER, AUTH_RENEW, UNAUTH_USER, SENT_VERIFICATION, AUTH_ERROR, LOGIN_LOADING, SIGNUP_LOADING, EVENTS_FETCH_SUCCESS, GET_EVENT_SUCCESS, GET_EVENT_FAILURE, PUBLISH_EVENT_SUCCESS, TOGGLE_EDIT_EVENT_TAB, SHOW_MODAL, HIDE_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_PAGE_LOADING", function() { return SHOW_PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_PAGE_LOADING", function() { return HIDE_PAGE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_USER", function() { return AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_RENEW", function() { return AUTH_RENEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAUTH_USER", function() { return UNAUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENT_VERIFICATION", function() { return SENT_VERIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_LOADING", function() { return LOGIN_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_LOADING", function() { return SIGNUP_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS_FETCH_SUCCESS", function() { return EVENTS_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_EVENT_SUCCESS", function() { return GET_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_EVENT_FAILURE", function() { return GET_EVENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUBLISH_EVENT_SUCCESS", function() { return PUBLISH_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_EDIT_EVENT_TAB", function() { return TOGGLE_EDIT_EVENT_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MODAL", function() { return SHOW_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_MODAL", function() { return HIDE_MODAL; });
/* Page loading actions */
var SHOW_PAGE_LOADING = 'SHOW_PAGE_LOADING';
var HIDE_PAGE_LOADING = 'HIDE_PAGE_LOADING';
/* Login & signup actions */

var AUTH_USER = 'AUTH_USER';
var AUTH_RENEW = 'AUTH_RENEW';
var UNAUTH_USER = 'UNAUTH_USER';
var SENT_VERIFICATION = 'SENT_VERIFICATION';
var AUTH_ERROR = 'AUTH_ERROR';
var LOGIN_LOADING = 'LOGIN_LOADING';
var SIGNUP_LOADING = 'SIGNUP_LOADING';
/* Homepage input actions */

/* Event types page actions */

var EVENTS_FETCH_SUCCESS = 'EVENTS_FETCH_SUCCESS';
var GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
var GET_EVENT_FAILURE = 'GET_EVENT_FAILURE';
var PUBLISH_EVENT_SUCCESS = 'PUBLISH_EVENT_SUCCESS';
var TOGGLE_EDIT_EVENT_TAB = 'TOGGLE_EDIT_EVENT_TAB';
/* Modal */

var SHOW_MODAL = 'SHOW_MODAL';
var HIDE_MODAL = 'HIDE_MODAL';

/***/ }),

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: showPageLoading, hidePageLoading, authUser, unauthUser, authRenew, signupUser, loginUser, logoutUser, postIdTokenToSessionLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPageLoading", function() { return showPageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePageLoading", function() { return hidePageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authUser", function() { return authUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unauthUser", function() { return unauthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authRenew", function() { return authRenew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUser", function() { return signupUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postIdTokenToSessionLogin", function() { return postIdTokenToSessionLogin; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ "./firebase.js");







var showPageLoading = function showPageLoading() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["SHOW_PAGE_LOADING"]
  };
};
var hidePageLoading = function hidePageLoading() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["HIDE_PAGE_LOADING"]
  };
};
var authUser = function authUser(payload) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["AUTH_USER"],
    payload: payload
  };
};
var unauthUser = function unauthUser() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["UNAUTH_USER"]
  };
};
var authRenew = function authRenew() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__["AUTH_RENEW"]
  };
};
var signupUser = function signupUser(payload) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var _ref2, _ref2$data, email, message, status;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/auth/signup', payload);

              case 3:
                _ref2 = _context.sent;
                _ref2$data = _ref2.data;
                email = _ref2$data.email;
                message = _ref2$data.message;
                status = _ref2.status;

                if (status === 200) {
                  loginUser(payload);
                }

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var loginUser = function loginUser(_ref3) {
  var email = _ref3.email,
      password = _ref3.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].signInWithEmailAndPassword(email, password));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var logoutUser = function logoutUser() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch, getState) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].signOut());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3, _x4) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
var postIdTokenToSessionLogin = function postIdTokenToSessionLogin(url, idToken, csrfToken) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        var resp;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, {
                  idToken: idToken,
                  csrfToken: csrfToken
                });

              case 2:
                resp = _context4.sent;

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./actions/event.js":
/*!**************************!*\
  !*** ./actions/event.js ***!
  \**************************/
/*! exports provided: eventsFetch, publishEvent, fetchEventById, fetchAvailablityByUIDandEventId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsFetch", function() { return eventsFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishEvent", function() { return publishEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEventById", function() { return fetchEventById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAvailablityByUIDandEventId", function() { return fetchAvailablityByUIDandEventId; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading */ "./actions/loading.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");








var eventsFetch = function eventsFetch(uid) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var eventsRef;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                eventsRef = _firebase__WEBPACK_IMPORTED_MODULE_5__["db"].ref().child('events');
                return _context.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
                  eventsRef.orderByChild('uid').equalTo(uid).once('value').then(function (snap) {
                    var snapData = snap.val();
                    var eventsData = snapData ? _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(snapData).map(function (key) {
                      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, snapData[key], {
                        id: key
                      });
                    }) : [];
                    dispatch(_loading__WEBPACK_IMPORTED_MODULE_6__["hidePageLoading"]);
                    dispatch({
                      payload: eventsData,
                      type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["EVENTS_FETCH_SUCCESS"]
                    });
                    return resolve(eventsData);
                  }).catch(function (err) {
                    console.error('Events fetching error: ', err);
                    return reject(err);
                  });
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var publishEvent = function publishEvent(id, published) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var timestamp, eventRef;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                timestamp = new Date().getTime();
                eventRef = _firebase__WEBPACK_IMPORTED_MODULE_5__["db"].ref("/events/".concat(id));
                dispatch(_loading__WEBPACK_IMPORTED_MODULE_6__["showPageLoading"]);
                eventRef.update({
                  published: !published,
                  updated_at: timestamp
                }).then(function () {
                  dispatch(_loading__WEBPACK_IMPORTED_MODULE_6__["hidePageLoading"]);
                  dispatch({
                    type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["PUBLISH_EVENT_SUCCESS"],
                    payload: {
                      id: id,
                      published: published
                    }
                  });
                }).catch(function (err) {
                  console.error('published switch: one of the updates failed: ', err);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var fetchEventById = function fetchEventById(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var eventRef;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                eventRef = _firebase__WEBPACK_IMPORTED_MODULE_5__["db"].ref("/events/".concat(id));
                dispatch(_loading__WEBPACK_IMPORTED_MODULE_6__["showPageLoading"]);
                return _context3.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
                  eventRef.once('value').then(function (snap) {
                    var snapData = snap.val();
                    dispatch(_loading__WEBPACK_IMPORTED_MODULE_6__["hidePageLoading"]);
                    return resolve(snapData);
                  }).catch(function (error) {
                    console.error('Event fetching by id got error: ', error);
                    dispatch({
                      type: _actionTypes__WEBPACK_IMPORTED_MODULE_7__["GET_EVENT_FAILURE"],
                      error: error
                    });
                    return reject(error);
                  });
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var fetchAvailablityByUIDandEventId = function fetchAvailablityByUIDandEventId(eventId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        var avaiRef;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                avaiRef = _firebase__WEBPACK_IMPORTED_MODULE_5__["db"].ref('availability');
                dispatch(_loading__WEBPACK_IMPORTED_MODULE_6__["showPageLoading"]);
                return _context4.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
                  avaiRef // .orderByChild('uid').equalTo(uid)
                  .orderByChild('eventId').equalTo(eventId).once('value').then(function (snap) {
                    var snapData = snap.val();

                    var avaiValues = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(snapData).map(function (id) {
                      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, snapData[id], {
                        id: id
                      });
                    });

                    dispatch(_loading__WEBPACK_IMPORTED_MODULE_6__["hidePageLoading"]);
                    return resolve(avaiValues[0]);
                  }).catch(function (error) {
                    console.error('Avai fetching by uid/eventId got error: ', error);
                    return reject(error);
                  });
                }));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: readEntity, hideModal, showModal, showPageLoading, hidePageLoading, signupUser, loginUser, logoutUser, unauthUser, eventsFetch, publishEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readEntity", function() { return readEntity; });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signupUser", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["signupUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["loginUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["logoutUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unauthUser", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["unauthUser"]; });

/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading */ "./actions/loading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showPageLoading", function() { return _loading__WEBPACK_IMPORTED_MODULE_1__["showPageLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hidePageLoading", function() { return _loading__WEBPACK_IMPORTED_MODULE_1__["hidePageLoading"]; });

/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./actions/event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventsFetch", function() { return _event__WEBPACK_IMPORTED_MODULE_2__["eventsFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "publishEvent", function() { return _event__WEBPACK_IMPORTED_MODULE_2__["publishEvent"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./actions/modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideModal", function() { return _modal__WEBPACK_IMPORTED_MODULE_3__["hideModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _modal__WEBPACK_IMPORTED_MODULE_3__["showModal"]; });






var readEntity = function readEntity(entityName, id) {
  return {
    type: "REQUEST_READ_".concat(entityName.toUpperCase()),
    urlParams: {
      entityName: entityName,
      id: id
    },
    meta: {
      identifier: id,
      entityName: entityName
    }
  };
};



/***/ }),

/***/ "./actions/loading.js":
/*!****************************!*\
  !*** ./actions/loading.js ***!
  \****************************/
/*! exports provided: showPageLoading, hidePageLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPageLoading", function() { return showPageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hidePageLoading", function() { return hidePageLoading; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");

var showPageLoading = function showPageLoading() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_PAGE_LOADING"]
  };
};
var hidePageLoading = function hidePageLoading() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_PAGE_LOADING"]
  };
};

/***/ }),

/***/ "./actions/modal.js":
/*!**************************!*\
  !*** ./actions/modal.js ***!
  \**************************/
/*! exports provided: showModal, hideModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideModal", function() { return hideModal; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");

var showModal = function showModal(_ref) {
  var modalProps = _ref.modalProps,
      modalType = _ref.modalType;
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_MODAL"],
      modalProps: modalProps,
      modalType: modalType
    });
  };
};
var hideModal = function hideModal() {
  return function (dispatch) {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_MODAL"]
    });
  };
};

/***/ }),

/***/ "./components/AvailabilityForm/AvailabilityItem.js":
/*!*********************************************************!*\
  !*** ./components/AvailabilityForm/AvailabilityItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");









function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: absolute;\n    right: 15px;\n    bottom: 15px;\n\n    > button {\n        padding: 0;\n        min-width: auto;\n        font-size: 12px;\n        font-weight: 700;\n\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: absolute;\n    bottom: 15px;\n    color: #fff;\n    padding: 5px;\n    font-weight: 600;\n    font-size: 13px;\n    border-radius: 5px;\n    border: 1px solid #ddd;\n    background: #f53b38;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    &.active {\n        background: #43aa8b;\n        span {\n            order: 1;\n        }\n        .switcher {\n            order: 2;\n        }\n    }\n\n    .switcher {\n        width: 12px;\n        height: 12px;\n        margin: 3px;\n        border-radius: 50%;\n        background: #fff;        \n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    margin-top: 10px;\n    font-size: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    color: #333538;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.4;\n    margin-top: 0;\n    font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: relative;\n    margin-bottom: 15px;\n    border: 1px solid #d1d1d1!important;\n    padding: 15px;\n    width: 100%;\n    min-height: 160px;\n    float: left;\n    border-radius: 6px;\n    background: #f2f2f2;\n\n    &.active {\n        background: #fff;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var AvaiItem = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.p(_templateObject2());
var Text = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject3());
var StyledSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject4());
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject5());
var dateOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var getWeekday = function getWeekday(index) {
  return dateOfWeek[index];
};

var getTimeRangeStr = function getTimeRangeStr(slotType, timeRange) {
  var txt = timeRange.map(function (time) {
    var timeString = slotType === 'recur' ? [time.start, time.end].join(' - ') : time.start;
    return timeString;
  });
  return txt.join(' , ');
};

var AvailabilityItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AvailabilityItem, _React$Component);

  function AvailabilityItem() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AvailabilityItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AvailabilityItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      active: false,
      index: 0,
      slot: null,
      open: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleAvaiSwitcher", function () {
      var active = _this.state.active;

      _this.setState({
        active: !active
      }, function () {});
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AvailabilityItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          slot = _this$props.slot,
          active = _this$props.active,
          index = _this$props.index;
      this.setState({
        slot: slot,
        active: active,
        index: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          slot = _this$state.slot,
          active = _this$state.active;
      var _this$props2 = this.props,
          openModal = _this$props2.openModal,
          index = _this$props2.index;
      var weekdayName = getWeekday(index);
      var slotType = slot && slot.type ? slot.type : '';
      var timeRange = slot && slot.timeRange ? slot.timeRange.filter(function (time) {
        return time.type === slotType;
      }) : [];
      var timeRangeStr = getTimeRangeStr(slotType, timeRange);
      var classes = classnames__WEBPACK_IMPORTED_MODULE_10___default()({
        'active': active
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(AvaiItem, {
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Title, null, weekdayName), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Text, null, timeRangeStr), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(StyledSwitcher, {
        className: classes,
        onClick: this.toggleAvaiSwitcher,
        "data-index": index
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "switcher"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, active ? "ON" : "OFF")), active && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonWrapper, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        link: true,
        onClick: function onClick(e) {
          return openModal(e, index);
        }
      }, "Edit")));
    }
  }]);

  return AvailabilityItem;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AvailabilityItem);

/***/ }),

/***/ "./components/AvailabilityForm/AvailabilityList.js":
/*!*********************************************************!*\
  !*** ./components/AvailabilityForm/AvailabilityList.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AvailabilityItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AvailabilityItem */ "./components/AvailabilityForm/AvailabilityItem.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");









function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding: 0;\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 700px;\n    position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var List = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.ul(_templateObject());

var AvaiList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AvaiList, _React$Component);

  function AvaiList() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AvaiList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AvaiList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showModal: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openModal", function (e, index) {
      e.preventDefault(); //console.log(this.props.showModal)

      _this.props.showModal(_this.props.availability.slots[index], 'availability');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeModal", function () {
      _this.props.setSubmitting(false); //this.setState({showModal: false})


      _this.props.hideModal();

      return false;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AvaiList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var view,
          _this$props = this.props,
          availability = _this$props.availability,
          toggleAvaiSwitcher = _this$props.toggleAvaiSwitcher,
          showModal = this.state.showModal;

      if (availability && availability.slots) {
        view = availability.slots.map(function (slot, index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AvailabilityItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
            key: index,
            slot: slot,
            active: slot.on,
            index: index,
            openModal: _this2.openModal,
            toggleAvaiSwitcher: toggleAvaiSwitcher
          });
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(List, null, view));
    }
  }]);

  return AvaiList;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hideModal: function hideModal() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["hideModal"])());
    },
    showModal: function showModal(modalProps, modalType) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_12__["showModal"])({
        modalProps: modalProps,
        modalType: modalType
      }));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(null, mapDispatchToProps)(AvaiList));

/***/ }),

/***/ "./components/AvailabilityForm/index.js":
/*!**********************************************!*\
  !*** ./components/AvailabilityForm/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AvailabilityList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvailabilityList */ "./components/AvailabilityForm/AvailabilityList.js");



var AvailabilityForm = function AvailabilityForm(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AvailabilityList__WEBPACK_IMPORTED_MODULE_1__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (AvailabilityForm);

/***/ }),

/***/ "./components/BodyWrapper/BodyWrapper.js":
/*!***********************************************!*\
  !*** ./components/BodyWrapper/BodyWrapper.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../firebase */ "./firebase.js");
/* harmony import */ var _PageLoading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../PageLoading */ "./components/PageLoading/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Sidebar */ "./components/Sidebar/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Header */ "./components/Header/index.js");
/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Modals */ "./components/Modals/index.js");







function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    overflow: auto;\n    display: flex;\n    flex: 0 0 auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    overflow-x: hidden;\n    display: flex;\n    flex: 1;\n    height: 100vh;\n    width: 100%;\n    flex-direction: column;\n    &.layout-column {\n        \n        \n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    display: flex;\n    box-sizing: border-box;\n    flex-direction: row;\n    height: 100%;\n    max-height: 100vh;\n    * {\n        box-sizing: border-box;\n    }\n\n    &.auth-view {\n        overflow: hidden;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faTachometerAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faCalendar"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faAngleDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faPen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faUsers"]);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject());
var MainContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject2());
var ContentInnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject3());

var BodyWrapper =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BodyWrapper, _React$Component);

  function BodyWrapper() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BodyWrapper);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BodyWrapper).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BodyWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var hidePageLoading = this.props.hidePageLoading;
      _firebase__WEBPACK_IMPORTED_MODULE_13__["auth"].onAuthStateChanged(function (currentUser) {
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
          modalBackdrop = _this$props.modalBackdrop;
      var content = pageLoading ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PageLoading__WEBPACK_IMPORTED_MODULE_14__["default"], null) : children;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_11___default()({
        'auth-view': isAuthenticated
      }); //console.log(modalType)

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ContentWrapper, {
        className: classes
      }, template === 'admin' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_17__["default"], this.props), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MainContentWrapper, {
        className: isAuthenticated ? "layout-column" : ""
      }, !pageLoading && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_18__["default"], this.props), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ContentInnerWrapper, null, content)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Modals__WEBPACK_IMPORTED_MODULE_19__["default"], {
        modalType: modalType,
        modalBackdrop: modalBackdrop
      }));
    }
  }]);

  return BodyWrapper;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

BodyWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  hidePageLoading: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  pageLoading: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired,
  norenew: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
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
      modalProps = _ref$modal.modalProps,
      modalBackdrop = _ref$modal.modalBackdrop;
  return {
    pageLoading: pageLoading,
    isAuthenticated: isAuthenticated,
    modalType: modalType,
    modalProps: modalProps,
    modalBackdrop: modalBackdrop
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    authUser: function authUser(payload) {
      return dispatch({
        type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_16__["AUTH_USER"],
        payload: payload
      });
    },
    hidePageLoading: function hidePageLoading() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["hidePageLoading"])());
    },
    showPageLoading: function showPageLoading() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["showPageLoading"])());
    },
    hideModal: function hideModal() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["hideModal"])());
    },
    showModal: function showModal(modalProps, modalType) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["showModal"])({
        modalProps: modalProps,
        modalType: modalType
      }));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(BodyWrapper));

/***/ }),

/***/ "./components/BodyWrapper/index.js":
/*!*****************************************!*\
  !*** ./components/BodyWrapper/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BodyWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BodyWrapper */ "./components/BodyWrapper/BodyWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _BodyWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Button/Button.js":
/*!*************************************!*\
  !*** ./components/Button/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4__);
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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: #000;\n    background: none;\n    border: none;\n    :hover {\n      background: none;\n      border: none;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        color: black;\n        background: linear-gradient(to right, #e0e0e0, #bdbdbd);\n        box-shadow: 0 5px 6px rgba(160, 160, 160, 0.5);\n        border-color: #ccc;\n        :focus,\n        :hover {\n          box-shadow: 0 6px 15px rgba(160, 160, 160, 0.5);\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        background: linear-gradient(to right, #7e57c2, #6200ea);\n        box-shadow: 0 5px 6px rgba(81, 45, 168, 0.5);\n        :focus,\n        :hover {\n          box-shadow: 0 6px 15px rgba(81, 45, 168, 0.5);\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        background-color: #00a2ff;\n        border: 1px solid #00a2ff;\n        color: #fff;\n        :hover {\n          background-color: #005596;\n          border: 1px solid #005596;\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #000;\n  font-weight: 300;\n  text-align: center;\n  text-decoration: none;\n  line-height: 20px;\n  cursor: pointer;\n  outline: none;\n  padding: 12px 12px 11px;\n  border-radius: 0;\n  display: inline-block;\n  user-select: none;\n  box-sizing: border-box;\n  font-size: 16px;\n  min-width: 80px;\n  border-radius: 4px;\n  transition: all 0.2s ease-in-out;\n\n  :disabled {\n    opacity: 0.5;\n  }\n\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject(), function (_ref) {
  var color = _ref.color;

  if (color === 'blue') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
  }

  if (color === 'purple') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3());
  }

  if (color === 'gray') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4());
  }

  return null;
}, function (_ref2) {
  var link = _ref2.link;
  return link && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5());
}, function (_ref3) {
  var size = _ref3.size;
  return size === 'large' && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject6());
}, function (_ref4) {
  var size = _ref4.size;
  return size === 'small' && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject7());
});
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_inlinesvg__WEBPACK_IMPORTED_MODULE_4___default.a)(_templateObject8(), function (_ref5) {
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

/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./components/Button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Error/Error.js":
/*!***********************************!*\
  !*** ./components/Error/Error.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  content: '';\n  display: block;\n  font-size: 14px;\n  color: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p(_templateObject());

var Error = function Error(_ref) {
  var error = _ref.error,
      bottom = _ref.bottom,
      left = _ref.left,
      type = _ref.type,
      classes = _ref.classes;
  var message = error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorMessage, {
    left: left,
    bottom: bottom
  }, error);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes
  }, message);
};

Error.propTypes = {
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Error.defaultProps = {
  bottom: 0,
  left: 0,
  classes: '',
  type: 'alert-primary'
};
/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./components/Error/index.js":
/*!***********************************!*\
  !*** ./components/Error/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error */ "./components/Error/Error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Error__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/EventPublishSwitch/index.js":
/*!************************************************!*\
  !*** ./components/EventPublishSwitch/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n            color: #fff;\n            background: #407f33;\n            > span {\n                order: 2;\n            }\n            > small {\n                border: 2px solid #407f33;\n                order: 1;\n            }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        justify-content: space-between;\n        width: 90px;\n        height: 28px;\n        font-size: 12px;\n        padding: 5px;\n        color: #000;\n        font-weight: 700;\n        display: flex;\n        > span {\n            order: 1;\n        }\n        > small {\n            height: 16px;\n            width: 16px;\n            background: #fff;\n            border: 2px solid #000;\n            border-radius: 50%;\n            order: 2;\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 25px;\n    height: 11px;\n    position: relative;\n    top: 1px;\n    cursor: pointer;\n    border: 1px solid #d0d0d0;\n    border-radius: 5px;\n    background-color: #eeee;\n    transition: all .2s ease-in-out;\n    display: flex;\n\n    ", ";\n\n    &.checked {\n        ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    display: inline-block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Switch = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label(_templateObject());
var Slider = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), function (_ref) {
  var size = _ref.size;
  return size === 'large' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3());
}, function (_ref2) {
  var size = _ref2.size;
  return size === 'large' && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4());
});

var EventPublishSwitch = function EventPublishSwitch(_ref3) {
  var size = _ref3.size,
      setFieldValue = _ref3.setFieldValue,
      published = _ref3.published;
  var currentState = published;

  var setValue = function setValue() {
    currentState = !currentState; // return;

    setFieldValue('published', currentState);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Switch, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Slider, {
    size: size,
    onClick: setValue,
    className: currentState ? 'checked' : ''
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, currentState && 'PUBLIC'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, !currentState && 'PRIVATE'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (EventPublishSwitch);

/***/ }),

/***/ "./components/EventTypes/EventType.js":
/*!********************************************!*\
  !*** ./components/EventTypes/EventType.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #fff;\n    padding: 20px;\n    text-align: center;\n    border: 1px dashed #d0d0d0;\n    cursor: pointer;\n    position: relative;\n    flex: 1; \n\n    &.active {\n        background: #1c3d5e;\n        color: #fff;\n\n        > .text-muted {\n            color: #fff;\n        }\n    }\n\n    > .text-muted {\n        color: #777;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var EventTypeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div;

var EventType = function EventType(_ref) {
  var eventType = _ref.eventType,
      type = _ref.type,
      title = _ref.title,
      description = _ref.description,
      selectThisType = _ref.selectThisType;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
    'active': eventType === type
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EventTypeWrapper, {
    className: classes,
    onClick: selectThisType.bind(_this, type)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, type === 'OnetoOne' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "user"
  }), type === 'GroupEvent' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "users"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-muted"
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (EventType);

/***/ }),

/***/ "./components/EventTypes/index.js":
/*!****************************************!*\
  !*** ./components/EventTypes/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _EventType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EventType */ "./components/EventTypes/EventType.js");









function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding: 0;\n    list-style: none;\n    display: flex;\n    flex: 0 0 50%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var event_types = [{
  type: 'OnetoOne',
  title: 'One To One',
  description: 'Individual, Interview, professionals meetings'
}, {
  type: "GroupEvent",
  title: "Group Event",
  description: 'Events with more than one people attending together'
}];
var EventTypeList = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.ul(_templateObject());

var EventTypes =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EventTypes, _React$PureComponent);

  function EventTypes() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EventTypes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EventTypes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "selectThisType", function (type) {
      return _this.props.setFieldValue("event_type", type);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EventTypes, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.props.value;
      var view = event_types.map(function (event, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_EventType__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: index,
          eventType: value,
          type: event.type,
          title: event.title,
          description: event.description,
          selectThisType: _this2.selectThisType
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(EventTypeList, null, view);
    }
  }]);

  return EventTypes;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (EventTypes);

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeaderLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderLogo */ "./components/Header/HeaderLogo.js");
/* harmony import */ var _HeaderLeftMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderLeftMenu */ "./components/Header/HeaderLeftMenu.js");
/* harmony import */ var _HeaderRightMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeaderRightMenu */ "./components/Header/HeaderRightMenu.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n\n    @media only screen and (max-width: 488px) {\n        flex-direction: column;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    padding: 20px 32px;\n    background: rgb(3, 155, 229);\n\n    &.js-authenticated {\n        margin-bottom: 50px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.header(_templateObject());
var LeftMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject2());

var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
      'js-authenticated': props.isAuthenticated
    })
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeftMenuWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderLeftMenu__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderRightMenu__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

Header.propTypes = {
  showPageLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showPageLoading: function showPageLoading() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["showPageLoading"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/Header/HeaderLeftMenu.js":
/*!*********************************************!*\
  !*** ./components/Header/HeaderLeftMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: flex-end;\n  list-style: none;\n  margin: 0 0 3px;\n  padding: 0;\n\n  @media only screen and (max-width: 488px) {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var List = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.ul(_templateObject());

var HeaderLeftMenu = function HeaderLeftMenu(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.currentTarget.getAttribute('href');
    if (!path || window.location.pathname === path) return; //props.showPageLoading();

    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(path);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, null);
};

HeaderLeftMenu.propTypes = {
  showPageLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  auth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
  }).isRequired
};

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showPageLoading: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_actions__WEBPACK_IMPORTED_MODULE_7__["showPageLoading"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(HeaderLeftMenu));

/***/ }),

/***/ "./components/Header/HeaderLogo.js":
/*!*****************************************!*\
  !*** ./components/Header/HeaderLogo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n\n  img {\n    width: 18px;\n    margin-right: 11px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject());

var HeaderLogo = function HeaderLogo(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.target.getAttribute('href');
    if (window.location.pathname === path) return;
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(path);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/images/logo.svg",
    alt: ""
  })));
};

HeaderLogo.propTypes = {//showPageLoading: PropTypes.func.isRequired,
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderLogo);

/***/ }),

/***/ "./components/Header/HeaderMenuItem.js":
/*!*********************************************!*\
  !*** ./components/Header/HeaderMenuItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  & > a {\n    padding-bottom: 1px;\n    color: inherit;\n    text-decoration: none;\n  }\n  & > a:hover {\n    color: #2196f3;\n    border-bottom: 1px dotted #2196f3;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: 32px;\n  animation: ", " 0.8s ease;\n  text-align: center;\n  \n  @media only screen and (max-width: 488px) {\n    margin-left: 16px;\n    font-size: 13px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li(_templateObject(), _helpers_animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]);
var ListLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());

var HeaderMenuItem = function HeaderMenuItem(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItem, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListLink, null, children));
};

HeaderMenuItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderMenuItem);

/***/ }),

/***/ "./components/Header/HeaderRightMenu.js":
/*!**********************************************!*\
  !*** ./components/Header/HeaderRightMenu.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderMenuItem */ "./components/Header/HeaderMenuItem.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Link */ "./components/Link/index.js");


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: 2px solid transparent;\n  transition: all 0.1s linear;\n  opacity: 0.6;\n  &:hover {\n    opacity: 1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n\n  @media only screen and (max-width: 488px) {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  float: right;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  @media only screen and (max-width: 488px) {\n    justify-content: space-evenly;\n    width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









 //import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var List = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.ul(_templateObject()); // const IMAGE = styled.img`
//   border-radius: 3px;
//   width: 60px;
//   box-shadow: 0 5px 6px #7c7e79;
// `;

var LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject2());
var ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject3());

var HeaderMenu = function HeaderMenu(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.currentTarget.getAttribute('href');
    if (!path || window.location.pathname === path) return;
    props.showPageLoading();
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(path);
  };

  var logoutHandler = function logoutHandler(e) {
    e.preventDefault();
    props.logout().then(function () {
      props.unAuthUser();
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
    }).catch(function (error) {
      console.error("Header Right Menu :", error);
    });
  };

  var login = !props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/login",
    title: "login / sign up",
    onClick: goTo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Login / Sign up")));
  var account = props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/account",
    title: "account",
    onClick: goTo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemTitle, null, "Account")));
  var event_types = props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    path: "/events"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemTitle, null, "Event Types")));
  var logout = props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoginContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/logout",
    title: "logout",
    onClick: logoutHandler
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemTitle, null, "Logout"))));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, null, event_types, account, logout, login);
};

HeaderMenu.propTypes = {
  showPageLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    auth: auth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showPageLoading: function showPageLoading() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["showPageLoading"])());
    },
    logout: function logout() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["logoutUser"])());
    },
    unAuthUser: function unAuthUser() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_7__["unauthUser"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(HeaderMenu));

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.js */ "./components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Link/index.js":
/*!**********************************!*\
  !*** ./components/Link/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");






var Link = function Link(props) {
  var goTo = function goTo() {
    var path = props.path;
    if (!path || window.location.pathname === path) return;
    props.showPageLoading();
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(path);
    return false;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: goTo
  }, props.children);
};

Link.propTypes = {
  showPageLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showPageLoading: function showPageLoading() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["showPageLoading"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(Link));

/***/ }),

/***/ "./components/Modals/avaiModal.js":
/*!****************************************!*\
  !*** ./components/Modals/avaiModal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");









function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    font-size: 40px;\n    font-weight: 100;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding-top: 0;\n    margin-top: 0;\n    margin-right: 10px;\n    cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    text-align: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    background-color: #EEEFF1;\n    border-top: 1px solid #DBDCDE;\n    padding: 10px 0;\n    text-align: right;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    pointer-events: auto;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid rgba(0,0,0,.2);\n    border-radius: .3rem;\n    outline: 0;\n    width: 800px;\n    margin: 30px auto auto auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject());
var ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject2());
var ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject3());
var ModalFooter = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject4());
var ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.h2(_templateObject5());
var StyledCloseButton = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.img(_templateObject6());

var AvaiModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AvaiModal, _React$Component);

  function AvaiModal() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AvaiModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AvaiModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isSubmitting: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "cancel", function () {
      return _this.state.isSubmitting ? false : _this.props.closeModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "save", function () {
      _this.setState({
        isSubmitting: !_this.state.isSubmitting
      });

      return false;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AvaiModal, [{
    key: "render",
    value: function render() {
      var isSubmitting = this.state.isSubmitting;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ModalContent, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ModalHeader, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ModalTitle, null, "Avai Modal"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(StyledCloseButton, {
        src: "/images/cross.png",
        onClick: this.cancel
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ModalBody, null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ModalFooter, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: "large",
        icon: isSubmitting ? "loader" : "",
        disabled: isSubmitting,
        onClick: this.save
      }, "Done"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        link: true,
        size: "large",
        onClick: this.cancel,
        disabled: isSubmitting
      }, "Cancel")));
    }
  }]);

  return AvaiModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AvaiModal);

/***/ }),

/***/ "./components/Modals/index.js":
/*!************************************!*\
  !*** ./components/Modals/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Modals_avaiModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Modals/avaiModal */ "./components/Modals/avaiModal.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");











function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n    top                   : 0;\n    left                  : 0;\n    width                 : 100%;\n    height                :  100%;\n    position              : fixed;\n    z-index: 1041;\n    \n    &.fade {\n        transition: opacity .15s linear;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1040;\n    width: 100vw;\n    height: 100vh;\n    background-color: #000;\n    opacity: .5;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var mapStateToProps = function mapStateToProps(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, state.modal);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hideModal: function hideModal() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_15__["hideModal"])());
    }
  };
};

var StyledModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_14___default.a.div(_templateObject());
var StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_14___default.a.div(_templateObject2());

var ModalContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ModalContainer, _React$Component);

  function ModalContainer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ModalContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ModalContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      modalIsOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "closeModal", function () {
      _this.setState({
        modalIsOpen: false
      }, function () {
        _this.props.hideModal();
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ModalContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState({
          modalIsOpen: nextProps.modalProps.on
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.modalType) {
        return null;
      }

      var view = this.props.modalType === "availability" ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Modals_avaiModal__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        closeModal: this.closeModal
      }, this.props.modalProps)) : null;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_12___default.a, {
        isOpen: this.state.modalIsOpen,
        onAfterOpen: this.afterOpenModal,
        onRequestClose: this.closeModal,
        overlayClassName: "modal fade show",
        bodyOpenClassName: "modal-open",
        className: "modal-dialog modal-dialog-centered",
        contentLabel: "",
        ariaHideApp: false
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledModal, {
        className: this.props.modalBackdrop ? 'fade' : ''
      }, view)), this.state.modalIsOpen ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(StyledModalBackdrop, null) : null);
    }
  }]);

  return ModalContainer;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(ModalContainer));

/***/ }),

/***/ "./components/NavLink/index.js":
/*!*************************************!*\
  !*** ./components/NavLink/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _server_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../server/routes */ "../server/routes/index.js");
/* harmony import */ var _server_routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_server_routes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);














var NavLink =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(NavLink, _React$Component);

  function NavLink() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, NavLink);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(NavLink).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(NavLink, [{
    key: "render",
    value: function render() {
      var componentName = "NavLink";

      var _this$props = this.props,
          activeClassName = _this$props.activeClassName,
          className = _this$props.className,
          children = _this$props.children,
          router = _this$props.router,
          props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["activeClassName", "className", "children", "router"]);

      var isActiveRoute = props.route === undefined ? false : router.route.indexOf(_server_routes__WEBPACK_IMPORTED_MODULE_11___default.a.findAndGetUrls(props.route, props.params).urls.as) === 0;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_server_routes__WEBPACK_IMPORTED_MODULE_11__["Link"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        prefetch: true
      }, props), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(componentName, className, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(activeClassName), isActiveRoute))
      }, props), children));
    }
  }]);

  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

NavLink.propTypes = {
  activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired
};
NavLink.defaultProps = {
  activeClassName: "active"
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(NavLink));

/***/ }),

/***/ "./components/PageLoading/PageLoading.js":
/*!***********************************************!*\
  !*** ./components/PageLoading/PageLoading.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  width: 28px;\n  height: 28px;\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 0 48px;\n  flex: 1 1 auto;\n  flex-basis: 250px;\n  height: 100vh;\n  display: flex;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Loading = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject2(), _helpers_animations__WEBPACK_IMPORTED_MODULE_3__["spin"]);

var pageLoading = function pageLoading() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loading, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    src: "/images/loader.svg"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (pageLoading);

/***/ }),

/***/ "./components/PageLoading/index.js":
/*!*****************************************!*\
  !*** ./components/PageLoading/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageLoading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageLoading */ "./components/PageLoading/PageLoading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PageLoading__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/RepetitionBox/DateRadioBox.js":
/*!**************************************************!*\
  !*** ./components/RepetitionBox/DateRadioBox.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_date_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-date-picker/dist/entry.nostyle */ "react-date-picker/dist/entry.nostyle");
/* harmony import */ var react_date_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_date_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../node_modules/react-calendar/dist/Calendar.css */ "../node_modules/react-calendar/dist/Calendar.css");
/* harmony import */ var _node_modules_react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_react_date_picker_dist_DatePicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../node_modules/react-date-picker/dist/DatePicker.css */ "../node_modules/react-date-picker/dist/DatePicker.css");
/* harmony import */ var _node_modules_react_date_picker_dist_DatePicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_date_picker_dist_DatePicker_css__WEBPACK_IMPORTED_MODULE_5__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-left: 20px;\n    display: inline-block;\n\n    .react-date-picker {\n        .react-date-picker__wrapper {\n            .react-date-picker__inputGroup__input {\n                min-width: 2.5em;\n                text-align: center;\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var DatePickerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var DateRadioBox = function DateRadioBox(_ref) {
  var value = _ref.value,
      endDate = _ref.endDate,
      repetition = _ref.repetition,
      onChange = _ref.onChange,
      onEndDateChange = _ref.onEndDateChange;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    name: "repetition",
    id: value,
    value: value,
    checked: repetition === value,
    onChange: onChange
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: value
  }, "Till Date", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DatePickerWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_date_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3___default.a, {
    clearIcon: null,
    disabled: repetition !== value,
    onChange: onEndDateChange,
    value: endDate
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DateRadioBox);

/***/ }),

/***/ "./components/RepetitionBox/InternalRadioBox.js":
/*!******************************************************!*\
  !*** ./components/RepetitionBox/InternalRadioBox.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wojtekmaj_react_daterange_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wojtekmaj/react-daterange-picker/dist/entry.nostyle */ "@wojtekmaj/react-daterange-picker/dist/entry.nostyle");
/* harmony import */ var _wojtekmaj_react_daterange_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wojtekmaj_react_daterange_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../node_modules/react-calendar/dist/Calendar.css */ "../node_modules/react-calendar/dist/Calendar.css");
/* harmony import */ var _node_modules_react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_wojtekmaj_react_daterange_picker_dist_DateRangePicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../node_modules/@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css */ "../node_modules/@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css");
/* harmony import */ var _node_modules_wojtekmaj_react_daterange_picker_dist_DateRangePicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_wojtekmaj_react_daterange_picker_dist_DateRangePicker_css__WEBPACK_IMPORTED_MODULE_5__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-left: 20px;\n    display: inline-block;\n    .react-daterange-picker__wrapper {\n        .react-daterange-picker__inputGroup__input {\n            min-width: 2.5em;\n            text-align: center;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var DateRangeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var IntervalRadioBox = function IntervalRadioBox(_ref) {
  var value = _ref.value,
      dateRange = _ref.dateRange,
      repetition = _ref.repetition,
      onChange = _ref.onChange,
      setDateRange = _ref.setDateRange;
  var checked = repetition === value;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    name: "repetition",
    id: value,
    value: value,
    checked: checked,
    onChange: onChange
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: value
  }, "Between", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateRangeWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wojtekmaj_react_daterange_picker_dist_entry_nostyle__WEBPACK_IMPORTED_MODULE_3___default.a, {
    clearIcon: null,
    disabled: !checked,
    onChange: setDateRange,
    value: dateRange
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IntervalRadioBox);

/***/ }),

/***/ "./components/RepetitionBox/NeverEndRadioBox.js":
/*!******************************************************!*\
  !*** ./components/RepetitionBox/NeverEndRadioBox.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



var NeverEndRadioBox = function NeverEndRadioBox(_ref) {
  var value = _ref.value,
      repetition = _ref.repetition,
      onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "radio",
    name: "repetition",
    id: value,
    value: value,
    checked: repetition === value,
    onChange: onChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: value
  }, "Repetition never ends"));
};

/* harmony default export */ __webpack_exports__["default"] = (NeverEndRadioBox);

/***/ }),

/***/ "./components/RepetitionBox/RepetitionBoxes.js":
/*!*****************************************************!*\
  !*** ./components/RepetitionBox/RepetitionBoxes.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _NeverEndRadioBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NeverEndRadioBox */ "./components/RepetitionBox/NeverEndRadioBox.js");
/* harmony import */ var _DateRadioBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DateRadioBox */ "./components/RepetitionBox/DateRadioBox.js");
/* harmony import */ var _InternalRadioBox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InternalRadioBox */ "./components/RepetitionBox/InternalRadioBox.js");









function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    margin-top: 30px;\n    > div {\n        margin-left: 10px;\n        margin-bottom: 35px;\n        position: relative;\n        label, input {\n            cursor: pointer;\n            \n        }\n        label {\n            padding-left: 20px;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var RepetitionOptions = ["never", "date", "interval"];
var RadioBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject());

var RepetitionBoxes =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RepetitionBoxes, _PureComponent);

  function RepetitionBoxes() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RepetitionBoxes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RepetitionBoxes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      startDate: null,
      endDate: null,
      dateRange: [null, null]
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentWillUpdate", function (nextProps) {
      var repetition = nextProps.repetition,
          startDate = nextProps.startDate,
          endDate = nextProps.endDate,
          update = {};

      if (_this.props.startDate !== startDate || _this.props.endDate !== endDate) {
        if (repetition === "date") {
          update = {
            endDate: endDate ? new Date(endDate) : null
          };
        } else if (repetition === "interval") {
          update = {
            dateRange: [startDate === null ? null : new Date(startDate), endDate === null ? null : new Date(endDate)]
          };
        }

        _this.setState(update);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "selectThisRepOpt", function (e) {
      _this.props.onChange("repetition", e.target.value);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setDateRange", function (date) {
      var end_date = date ? date[1] : null;
      var start_date = date ? date[0] : null;

      _this.props.onChange("start_date", start_date.toString());

      _this.props.onChange("end_date", end_date.toString());

      return false;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeEndDate", function (date) {
      //this.props.onChange("start_date", new Date());
      _this.props.onChange("end_date", date.toString());

      return false;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RepetitionBoxes, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(RadioBoxWrapper, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_NeverEndRadioBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: "never",
        repetition: this.props.repetition,
        onChange: this.selectThisRepOpt
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DateRadioBox__WEBPACK_IMPORTED_MODULE_11__["default"], {
        value: "date",
        endDate: this.state.endDate,
        repetition: this.props.repetition,
        onChange: this.selectThisRepOpt,
        onEndDateChange: this.changeEndDate
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_InternalRadioBox__WEBPACK_IMPORTED_MODULE_12__["default"], {
        value: "interval",
        dateRange: this.state.dateRange,
        repetition: this.props.repetition,
        onChange: this.selectThisRepOpt,
        setDateRange: this.setDateRange
      }));
    }
  }]);

  return RepetitionBoxes;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (RepetitionBoxes);

/***/ }),

/***/ "./components/Sidebar/LeftSidebar.js":
/*!*******************************************!*\
  !*** ./components/Sidebar/LeftSidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/routes */ "../server/routes/index.js");
/* harmony import */ var _server_routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_server_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 8px 24px;\n    color: #fff;\n    display: block;\n    text-decoration: none;\n\n    &:hover {\n        background-color: rgba(255,255,255,.08);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 16px;\n    margin: auto;\n    text-align: left;\n    margin-right: 15px;\n    width: 20px;\n    display: inline-block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-align: left;\n    cursor: pointer;\n    color: #fff;\n    font-size: 15px;\n\n    &.active {\n        color: #fff;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject2());
var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject3());

var LeftSidebar = function LeftSidebar(props) {
  var goTo = function goTo(e) {
    e.preventDefault();
    var path = e.currentTarget.getAttribute('href');
    if (!path || window.location.pathname === path) return;
    props.showPageLoading();
    _server_routes__WEBPACK_IMPORTED_MODULE_3__["Router"].push(path);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SidebarWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {
    href: "/dashboard",
    onClick: goTo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    className: "fa-icon",
    icon: "tachometer-alt"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {
    href: "/events",
    onClick: goTo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    className: "fa-icon",
    icon: "calendar"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Events")));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSidebar);

/***/ }),

/***/ "./components/Sidebar/RightSidebar.js":
/*!********************************************!*\
  !*** ./components/Sidebar/RightSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavLink */ "./components/NavLink/index.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    left: 75px;\n    width: 250px;\n    background-image: linear-gradient(to bottom,#1e2635,#283346);\n    background-color: #102a5a;\n    padding-left: 0;\n    margin: 0;\n    list-style: none;\n    padding-left: 45px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    > a {\n        height: 75px;\n        line-height: 75px;\n        z-index: 3;\n        font-size: 26px;\n        color: #F6F6FA;\n        font-weight: lighter;\n        letter-spacing: 1px;\n        text-decoration: none;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject());
var List = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());

var RightSidebar = function RightSidebar(props) {
  var view = null,
      router = props.router;

  if (router.asPath.indexOf('/events') > -1) {
    view = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageTitle, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      route: "events"
    }, "Event")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      route: "eventCreate"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Create Event")));
  } else {
    view = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, null);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, view);
};

/* harmony default export */ __webpack_exports__["default"] = (RightSidebar);

/***/ }),

/***/ "./components/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/Sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LeftSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LeftSidebar */ "./components/Sidebar/LeftSidebar.js");
/* harmony import */ var _RightSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RightSidebar */ "./components/Sidebar/RightSidebar.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme */ "./theme/index.js");


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                    border-right: 1px solid ", ";\n                    background-color: ", ";            \n                "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    width: 256px;\n    transition: width .3s cubic-bezier(0.4,0.0,0.2,1);\n    position: relative;\n    z-index: 12;\n    flex-direction: column;\n    align-items: stretch;\n\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 26px;\n    text-transform: none;\n    letter-spacing: .25px;\n    min-width: 60px;\n    background: transparent;\n    color: #fff;\n    line-height: 46px;\n    border: none;\n    border-bottom: 1px solid #bbb;\n    text-align: left;\n    margin-bottom: 20px;\n    img {\n        width: 28px;\n        margin-left: 15px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SiteLogo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject());
var SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.nav(_templateObject2(), function (_ref) {
  var theme = _ref.theme;

  if (theme === "dark") {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), _theme__WEBPACK_IMPORTED_MODULE_6__["DARK_BLUE"], _theme__WEBPACK_IMPORTED_MODULE_6__["DARK_BLUE"]);
  }

  return null;
});

var Sidebar = function Sidebar(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SidebarWrapper, {
    theme: "dark"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SiteLogo, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "//www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
    role: "presentation"
  }), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Bookme")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LeftSidebar__WEBPACK_IMPORTED_MODULE_3__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Sidebar));

/***/ }),

/***/ "./components/Sidebar/index.js":
/*!*************************************!*\
  !*** ./components/Sidebar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar/Sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/TextInput/TextInput.js":
/*!*******************************************!*\
  !*** ./components/TextInput/TextInput.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  min-height: 46px;\n  box-sizing: border-box;\n  border: 1px solid #d0d0d0;\n  background: #fff;\n  padding: 11px 14px;\n  font-size: 16px;\n  word-break: normal;\n  outline: none;\n  -webkit-appearance: none;\n  border-radius: 5px;\n\n  &.error {\n    border-color: red;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var LinkInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.input(_templateObject());

var TextInput = function TextInput(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkInput, props);
};

TextInput.propTypes = {
  small: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  tiny: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
TextInput.defaultProps = {
  small: false,
  tiny: false
};
/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./components/TextInput/index.js":
/*!***************************************!*\
  !*** ./components/TextInput/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput */ "./components/TextInput/TextInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Textarea/Textarea.js":
/*!*****************************************!*\
  !*** ./components/Textarea/Textarea.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/animations */ "./helpers/animations.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  min-height: 46px;\n  box-sizing: border-box;\n  border: 1px solid #d0d0d0;\n  background: #fff;\n  padding: 11px 14px;\n  font-size: 16px;\n  word-break: normal;\n  outline: none;\n  -webkit-appearance: none;\n  border-radius: 0;\n  display: block;\n  resize: vertical;\n  margin-bottom: 5px;\n  min-height: 150px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var TextBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.textarea(_templateObject());

var Textarea = function Textarea(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextBox, props);
}; // TextInput.propTypes = {
//   small: PropTypes.bool,
//   tiny: PropTypes.bool,
// };
// Textarea.defaultProps = {
//   small: false,
//   tiny: false,
// };


/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./components/Textarea/index.js":
/*!**************************************!*\
  !*** ./components/Textarea/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textarea */ "./components/Textarea/Textarea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/WhatEventForm/EventColor.js":
/*!************************************************!*\
  !*** ./components/WhatEventForm/EventColor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        background: ", ";\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 40px;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Circle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), color);
});

var EventColor = function EventColor(_ref2) {
  var color = _ref2.color,
      selectedColor = _ref2.selectedColor,
      selectThisColor = _ref2.selectThisColor;
  var selected = color.label === selectedColor.label;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Circle, {
    color: color.value,
    onClick: selectThisColor.bind(_this, color)
  }, selected && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "check",
    className: "fa-lg fa-inverse"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EventColor);

/***/ }),

/***/ "./components/WhatEventForm/EventColorList.js":
/*!****************************************************!*\
  !*** ./components/WhatEventForm/EventColorList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _EventColor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventColor */ "./components/WhatEventForm/EventColor.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);









function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ColorList = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.ul(_templateObject());
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EventColorList, _Component);

  function EventColorList() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EventColorList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EventColorList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "selectThisColor", function (selectedColor) {
      _this.props.onChange('event_color', selectedColor);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EventColorList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedColor = this.props.selectedColor || colors[0],
          view = colors.map(function (color, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_EventColor__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: index,
          color: color,
          selectedColor: selectedColor,
          selectThisColor: _this2.selectThisColor
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ColorList, null, view);
    }
  }]);

  return EventColorList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EventColorList);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! yup */ "yup");
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
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lodash.isequal */ "lodash.isequal");
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





















var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div(_templateObject());
var InlineGroup = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div(_templateObject2());
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div(_templateObject3());
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.div(_templateObject4());
var InlineLabel = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.label(_templateObject5());
var Reddot = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.span(_templateObject6());

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
          toggleAvaiSwitcher = _this$props3.toggleAvaiSwitcher; //console.info(availability)

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
      }), touched.event_link && errors.event_link && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Error__WEBPACK_IMPORTED_MODULE_16__["default"], {
        error: "Format: event_link_name"
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
    event_duration_hours: yup__WEBPACK_IMPORTED_MODULE_15__["number"]().positive("Hour must be a positive number.").min(0, "Hour must be an integer.").max(12, "Duration can't be more than 12 hours."),
    event_duration_minutes: yup__WEBPACK_IMPORTED_MODULE_15__["number"]().positive("Minutes must be a positive number").min(0, "Minutes must be an integer").max(59, "Minutes can't be more than 59"),
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
    setSubmitting(true); //console.log(availability)
    //return;

    if (action === "update") {
      var id = router.query.id;
      updateEvent(id, values, availability, function () {
        setSubmitting(false);
      });
    } else if (action === "create") {
      createEvent(auth.user.uid, values, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, availability, {
        uid: uid
      }), function () {
        setSubmitting(false);
      });
    }
  }
})(EventForm);

var updateEvent = function updateEvent(id, values, availability, successCallback, errorCallback) {
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
    return _firebase__WEBPACK_IMPORTED_MODULE_21__["db"].ref("/availability/".concat(avaiId)).update(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, avaiValues)).then(function () {
      next_router__WEBPACK_IMPORTED_MODULE_29___default.a.push('/events');
    }).catch(function (error) {
      console.error(error);
    });
  }).catch(function (error) {
    console.error('Error writing availability to DB: ', error);
  });
};

var createEvent = function createEvent(uid, values, availability, successCallback, errorCallback) {
  var ref = _firebase__WEBPACK_IMPORTED_MODULE_21__["db"].ref();
  var eventsRef = ref.child('events');
  var avaiRef = ref.child('availability');

  var delayedPush = function delayedPush(event) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      setTimeout(function () {
        eventsRef.push(event).then(resolve, reject);
      }, 500);
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

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/*! exports provided: auth, db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);



var prodConfig = {
  apiKey: "AIzaSyAZ5IR7117AIoPXQhadL619_z0JFZBIoFY",
  authDomain: "nextjs-b37bf.firebaseapp.com",
  databaseURL: "https://nextjs-b37bf.firebaseio.com",
  projectId: "nextjs-b37bf",
  storageBucket: "nextjs-b37bf.appspot.com",
  messagingSenderId: "656349642811"
};
var devConfig = {
  apiKey: "AIzaSyAZ5IR7117AIoPXQhadL619_z0JFZBIoFY",
  authDomain: "nextjs-b37bf.firebaseapp.com",
  databaseURL: "https://nextjs-b37bf.firebaseio.com",
  projectId: "nextjs-b37bf",
  storageBucket: "nextjs-b37bf.appspot.com",
  messagingSenderId: "656349642811"
};
var config =  false ? undefined : devConfig;

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth(); //auth.setPersistence(firebase.auth.Auth.Persistence.NONE);

var db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database();


/***/ }),

/***/ "./helpers/animations.js":
/*!*******************************!*\
  !*** ./helpers/animations.js ***!
  \*******************************/
/*! exports provided: fadeIn, spin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spin", function() { return spin; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(-360deg);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var spin = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject2());

/***/ }),

/***/ "./helpers/form.js":
/*!*************************!*\
  !*** ./helpers/form.js ***!
  \*************************/
/*! exports provided: Form, FormGroup, FormLabel, FormSubLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return FormLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubLabel", function() { return FormSubLabel; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./helpers/animations.js");


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: #777;\n    font-size: 12px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    margin-bottom: 0.5rem;\n    font-weight: 700;\n\n    > .reddot {\n        color: red;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    margin-bottom: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: relative;\n    flex-basis: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: stretch;\n    animation: ", " 0.8s ease-out;\n    width: 100%;\n    margin-top: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form(_templateObject(), _animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]);
var FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var FormLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label(_templateObject3());
var FormSubLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());

/***/ }),

/***/ "./helpers/grid.js":
/*!*************************!*\
  !*** ./helpers/grid.js ***!
  \*************************/
/*! exports provided: AuthWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWrapper", function() { return AuthWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 40px 0 0 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var AuthWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "./pages/events/edit.js":
/*!******************************!*\
  !*** ./pages/events/edit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_BodyWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/BodyWrapper */ "./components/BodyWrapper/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_EventTypes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/EventTypes */ "./components/EventTypes/index.js");
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../helpers/grid */ "./helpers/grid.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _components_WhatEventForm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/WhatEventForm */ "./components/WhatEventForm/index.js");
/* harmony import */ var _components_AvailabilityForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/AvailabilityForm */ "./components/AvailabilityForm/index.js");
/* harmony import */ var _actions_event__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../actions/event */ "./actions/event.js");
























var Content =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Content, _React$Component);

  function Content() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Content);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Content)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      event: {},
      availability: {}
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var query = this.props.router.query;
      this.props.fetchEvent(query.id).then(function (evt) {
        var event = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, evt, {
          eventId: query.id
        });

        _this2.setState({
          event: event
        });
      });
      this.props.fetchAvailablity(query.id).then(function (avai) {
        _this2.setState({
          availability: avai
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_helpers_grid__WEBPACK_IMPORTED_MODULE_17__["AuthWrapper"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", null, "Edit Event Type"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_WhatEventForm__WEBPACK_IMPORTED_MODULE_19__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        event: this.state.event,
        availability: this.state.availability,
        action: "update"
      }, this.props)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.router.query;
                return _context.abrupt("return", {
                  query: query
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

Content.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var isAuthenticated = _ref2.auth.isAuthenticated;
  return {
    isAuthenticated: isAuthenticated
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchEvent: function fetchEvent(id) {
      return dispatch(Object(_actions_event__WEBPACK_IMPORTED_MODULE_21__["fetchEventById"])(id));
    },
    fetchAvailablity: function fetchAvailablity(eventId) {
      return dispatch(Object(_actions_event__WEBPACK_IMPORTED_MODULE_21__["fetchAvailablityByUIDandEventId"])(eventId));
    }
  };
};

var EditEventPage = Object(next_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_BodyWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    template: "admin"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Content, props));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispatchToProps)(EditEventPage));

/***/ }),

/***/ "./theme/index.js":
/*!************************!*\
  !*** ./theme/index.js ***!
  \************************/
/*! exports provided: DARK_BLUE, DARKER_BLUE, backgroundColor, textColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE", function() { return DARK_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARKER_BLUE", function() { return DARKER_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColor", function() { return backgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textColor", function() { return textColor; });
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-theming */ "styled-theming");
/* harmony import */ var styled_theming__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_0__);

var DARK_BLUE = "#262f3d";
var DARKER_BLUE = "#19212b"; // define background colours for `mode` theme

var backgroundColor = styled_theming__WEBPACK_IMPORTED_MODULE_0___default()('mode', {
  light: '#fafafa',
  dark: '#222'
}); // define text color for `mode` theme

var textColor = styled_theming__WEBPACK_IMPORTED_MODULE_0___default()('mode', {
  light: '#000',
  dark: '#fff'
});

/***/ }),

/***/ 7:
/*!************************************!*\
  !*** multi ./pages/events/edit.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hluong/Desktop/experiment_source/NodeJS_Apps/SQLITE_NODEJS/client/pages/events/edit.js */"./pages/events/edit.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@wojtekmaj/react-daterange-picker/dist/entry.nostyle":
/*!***********************************************************************!*\
  !*** external "@wojtekmaj/react-daterange-picker/dist/entry.nostyle" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wojtekmaj/react-daterange-picker/dist/entry.nostyle");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash.isequal":
/*!*********************************!*\
  !*** external "lodash.isequal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.isequal");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-date-picker/dist/entry.nostyle":
/*!*******************************************************!*\
  !*** external "react-date-picker/dist/entry.nostyle" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-date-picker/dist/entry.nostyle");

/***/ }),

/***/ "react-inlinesvg":
/*!**********************************!*\
  !*** external "react-inlinesvg" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-inlinesvg");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-theming":
/*!*********************************!*\
  !*** external "styled-theming" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-theming");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=edit.js.map