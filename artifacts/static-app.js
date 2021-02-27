(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);


function SEO(_ref) {
  var title = _ref.title,
      description = _ref.description,
      _ref$shouldExcludeTit = _ref.shouldExcludeTitleSufix,
      shouldExcludeTitleSufix = _ref$shouldExcludeTit === void 0 ? false : _ref$shouldExcludeTit,
      _ref$shouldIndexPage = _ref.shouldIndexPage,
      shouldIndexPage = _ref$shouldIndexPage === void 0 ? true : _ref$shouldIndexPage;
  var pageTitle = "".concat(title, " ").concat(!shouldExcludeTitleSufix ? ' | M.Oliveira Assessoria e Consultoria Jurídica' : '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, pageTitle), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: description
  }), !shouldIndexPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "robots",
    content: "noindex,nofollow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "referrer",
    content: "no-referrer-when-downgrade"
  }));
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerPrincipal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Titulo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var BannerPrincipal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LandingPages__BannerPrincipal",
  componentId: "sc-2pe88j-0"
})(["margin-bottom:1rem;img{width:100%;}"]);
var Titulo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LandingPages__Titulo",
  componentId: "sc-2pe88j-1"
})(["width:100%;margin:0 auto 2rem;padding:1rem;background:#003566;mix-blend-mode:normal;font-weight:600;font-size:1.6875rem;display:flex;justify-content:center;align-items:center;color:#fff;text-align:center;p{width:100%;max-width:75rem;}@media only screen and (max-width:600px){font-size:1.25rem;}"]);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BtnWhatsApp; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/BtnWhatsApp.js

var Container = external_styled_components_default.a.a.withConfig({
  displayName: "BtnWhatsApp__Container",
  componentId: "ta232z-0"
})(["position:fixed;cursor:pointer;right:90px;bottom:20px;width:50px;height:50px;display:flex;align-items:center;justify-content:center;transition:all 0.2s;img{width:50px;height:50px;z-index:5;}&:hover{transform:scale(1.03);}@media only screen and (max-width:600px){right:20px;}"]);
// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/whatsapp.png
var whatsapp = __webpack_require__(41);
var whatsapp_default = /*#__PURE__*/__webpack_require__.n(whatsapp);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/containers/BtnWhatsApp.js



function BtnWhatsApp(_ref) {
  var _ref$txtComplementar = _ref.txtComplementar,
      txtComplementar = _ref$txtComplementar === void 0 ? '' : _ref$txtComplementar;
  var textoGeral = 'Olá Dra. Mônica! Vi seu anúncio no site e preciso de um especialista';
  return /*#__PURE__*/external_react_default.a.createElement(Container, {
    href: "https://wa.me/5511932820590?text=".concat(textoGeral).concat(txtComplementar, "."),
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: whatsapp_default.a,
    alt: "Whatsapp"
  }));
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Footer; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(16);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/Footer.js

var Container = external_styled_components_default.a.footer.withConfig({
  displayName: "Footer__Container",
  componentId: "ro1y3s-0"
})(["width:100%;max-width:1200px;margin:auto auto 0;text-align:center;background:#003566;color:#fff;display:flex;flex-direction:column;align-items:center;padding:20px;strong{font-size:25px;font-weight:bold;}a{font-weight:600;font-size:20px;margin-top:5px;width:fit-content;display:flex;align-items:center;&.alinharTopo{align-items:flex-start;}svg{margin-right:5px;}&:hover{text-decoration:underline;}&:last-child{align-items:center;}}@media only screen and (max-width:600px){strong{font-size:20px;}a{font-size:16px;}}"]);
// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/containers/Footer.js



function Footer(_ref) {
  var _ref$txtComplementar = _ref.txtComplementar,
      txtComplementar = _ref$txtComplementar === void 0 ? '' : _ref$txtComplementar;
  var textoFooter = 'Olá Dra. Mônica! Vi seu anúncio no site e preciso de um especialista';
  return /*#__PURE__*/external_react_default.a.createElement(Container, null, /*#__PURE__*/external_react_default.a.createElement("strong", null, "M\xF4nica de Oliveira Advocacia"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://www.google.com/maps/place/R.+Londrina,+470+-+Rudge+Ramos,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09626-100",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "alinharTopo"
  }, /*#__PURE__*/external_react_default.a.createElement(ri_["RiMapPinLine"], {
    color: "#fff"
  }), "Rua Londrina, 470 - sala 13 - Rudge Ramos, S\xE3o Bernardo do Campo - S\xE3o Paulo"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "mailto:contato@monicaoliveira.adv.br",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/external_react_default.a.createElement(ri_["RiMailLine"], {
    color: "#fff"
  }), "contato@monicaoliveira.adv.br"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://wa.me/5511932820590?text=".concat(textoFooter).concat(txtComplementar, "."),
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/external_react_default.a.createElement(ri_["RiWhatsappLine"], {
    color: "#fff"
  }), "(11) 93282-0590"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "tel:01125349455",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/external_react_default.a.createElement(ri_["RiPhoneLine"], {
    color: "#fff"
  }), "(11) 2534-9455"));
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ RedesSociais; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/RedesSociais.js

var Container = external_styled_components_default.a.div.withConfig({
  displayName: "RedesSociais__Container",
  componentId: "sc-1lcty9b-0"
})(["width:100%;max-width:1200px;margin:0 auto 25px;text-align:center;p{font-weight:600;font-size:22px;color:#2f3030;letter-spacing:-0.5px;}div{display:flex;align-content:center;justify-content:center;margin-top:15px;a{margin:0 20px;transition:all 0.2s;&:hover{transform:translateY(-2px);}}}"]);
// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/redes-sociais/face.png
var face = __webpack_require__(43);
var face_default = /*#__PURE__*/__webpack_require__.n(face);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/redes-sociais/insta.png
var insta = __webpack_require__(44);
var insta_default = /*#__PURE__*/__webpack_require__.n(insta);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/redes-sociais/linkedin.png
var linkedin = __webpack_require__(45);
var linkedin_default = /*#__PURE__*/__webpack_require__.n(linkedin);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/containers/RedesSociais.js





function RedesSociais() {
  return /*#__PURE__*/external_react_default.a.createElement(Container, null, /*#__PURE__*/external_react_default.a.createElement("p", null, "VOC\xCA PODE ME ENCONTRAR:"), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/MOliveira-Advocacia-787175824681072/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: face_default.a,
    alt: "Facebook",
    title: "Facebook"
  })), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/monicaoliveiraadv/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: insta_default.a,
    alt: "instagram",
    title: "Instagram"
  })), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://www.linkedin.com/in/m%C3%B4nica-de-oliveira-615b8653/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: linkedin_default.a,
    alt: "linkedin",
    title: "Linkedin"
  }))));
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(65);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(67);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(25);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(24);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(20);

var _helpers = __webpack_require__(68);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(64)(module)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ FooterInformativo; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/FooterInformativo.js

var Container = external_styled_components_default.a.div.withConfig({
  displayName: "FooterInformativo__Container",
  componentId: "ko22h-0"
})(["width:100%;max-width:1200px;margin:5rem auto 1rem;border:0;border-top:1rem solid #dae4ec;border-bottom:1rem solid #dae4ec;padding:1rem;display:flex;justify-content:space-between;align-items:center;.primeira{text-align:center;p,a{font-size:1rem;font-weight:500;margin:0.625rem 0 0.3125rem;}a{transition:all 0.2s;&:hover{text-decoration:underline;}}}.segunda{margin-left:1rem;p{font-size:1.25rem;font-weight:500;color:#000;width:100%;max-width:36.875rem;line-height:1.5625rem;margin-bottom:2rem;}a{background:#419c32;height:50px;border:0;font-size:0.875rem;font-weight:600;color:#fff;padding:1rem 0.625rem;transition:all 0.2s;&:hover{filter:brightness(90%);}}}@media only screen and (max-width:707px){flex-direction:column;justify-content:center;.segunda{margin-left:0;margin-top:2rem;display:flex;flex-direction:column;p{text-align:center;}a{font-size:0.75rem;margin:0 auto 1rem;}}}"]);
// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/rodape.png
var rodape = __webpack_require__(42);
var rodape_default = /*#__PURE__*/__webpack_require__.n(rodape);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/containers/FooterInformativo.js



function FooterInformativo(_ref) {
  var _ref$txtPrincipal = _ref.txtPrincipal,
      txtPrincipal = _ref$txtPrincipal === void 0 ? '' : _ref$txtPrincipal,
      _ref$txtComplementar = _ref.txtComplementar,
      txtComplementar = _ref$txtComplementar === void 0 ? '' : _ref$txtComplementar;
  var texto = 'Olá Dra. Mônica! Vi seu anúncio no site e preciso de um especialista';
  return /*#__PURE__*/external_react_default.a.createElement(Container, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "primeira"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: rodape_default.a,
    alt: "Dra. M\xF4nica Oliveira"
  }), /*#__PURE__*/external_react_default.a.createElement("p", null, "Dra. M\xF4nica de Oliveira Carvalho Pereira", /*#__PURE__*/external_react_default.a.createElement("b", null, " | OAB/SP n\xBA 281.889")), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "mailto:contato@monicaoliveira.adv.br"
  }, "Email: contato@monicaoliveira.adv.br")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "segunda"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "Ficou com alguma d\xFAvida? Precisa de aux\xEDlio de um advogado?", txtPrincipal), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://wa.me/5511932820590?text=".concat(texto).concat(txtComplementar, ".")
  }, "CLIQUE AQUI E FALE COMIGO NO WHATSAPP")));
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Menu; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/components/Router.js
var Router = __webpack_require__(7);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/Menu.js

var Container = external_styled_components_default.a.div.withConfig({
  displayName: "Menu__Container",
  componentId: "sc-8pwv54-0"
})(["width:100%;padding:15px;div{display:flex;align-content:center;justify-content:space-between;width:100%;max-width:1200px;margin:0 auto;color:#003566;font-weight:600;font-size:20px;letter-spacing:-1.04537px;transition:all linear 0.1s;> a img{height:80px;}ul{display:flex;align-content:center;justify-content:flex-end;text-align:center;list-style:none;li{height:fit-content;padding:15px 0;margin:auto 10px;border-top:3px solid transparent;transition:all linear 0.1s;&:last-child{margin-right:0;}&:hover{border-top:3px solid #6896ba;}}.ativo,.ativo:hover{border-top:3px solid #003566;}}}@media only screen and (max-width:600px){div{> a img{height:40px;}font-size:16px;}}@media only screen and (max-width:410px){div{> a img{height:30px;transform:translateY(10px);}font-size:14px;}}.mobile{display:none;@media only screen and (max-width:599px){display:inherit;}}.desk{display:inherit;@media only screen and (max-width:600px){display:none;}}"]);
// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/logo.png
var logo = __webpack_require__(47);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/containers/Menu.js




function Menu(_ref) {
  var ativo = _ref.ativo;
  return /*#__PURE__*/external_react_default.a.createElement(Container, null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: logo_default.a,
    alt: "Logo"
  })), /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", {
    className: ativo === 'home' ? 'ativo' : undefined
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/"
  }, "Home")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: ativo === 'servicos' ? 'ativo' : undefined
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/servico"
  }, "Servi\xE7os")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: ativo === 'contato' ? 'ativo' : undefined
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/contato"
  }, "Contato")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: ativo === 'sobre' ? 'ativo mobile' : 'mobile'
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/sobre"
  }, "Sobre")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: ativo === 'sobre' ? 'ativo desk' : 'desk'
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/sobre"
  }, "Sobre M\xF4nica")))));
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(20);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(66)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(14);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/components/Router.js
var Router = __webpack_require__(7);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(39);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/globalStyles.js


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    min-height: 100vh;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  #root {\n    min-height: 100vh;\n    background: linear-gradient(0deg, rgba(255,255,255,1) 80%, rgba(215,215,214,1) 100%);\n  }\n\n  body, input, button, textarea {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 16px;\n    font-weight: 300;\n  }\n\n  button {\n    cursor: pointer;\n\n    &:enabled:hover {\n      filter: brightness(90%);\n    }\n\n    &:disabled {\n      cursor: default;\n      opacity: 0.5;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n\n  .skip-link {\n    position: absolute;\n    opacity: 0;\n    visibility: hidden;\n    cursor: default;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ var globalStyles = (Object(external_styled_components_["createGlobalStyle"])(_templateObject()));
// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/App.js

var MainContent = external_styled_components_default.a.div.withConfig({
  displayName: "App__MainContent",
  componentId: "bci2p9-0"
})(["min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;"]);
// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/favicon.ico
var favicon = __webpack_require__(40);
var favicon_default = /*#__PURE__*/__webpack_require__.n(favicon);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/App.js







function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    href: favicon_default.a
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap",
    rel: "stylesheet"
  })), /*#__PURE__*/external_react_default.a.createElement(MainContent, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content",
    role: "main"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Carregando...")
  }, /*#__PURE__*/external_react_default.a.createElement(Router["b" /* Router */], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  }))))), /*#__PURE__*/external_react_default.a.createElement(globalStyles, null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
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

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(15);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("/home/leandro/Repositorios/monica-adv/node_modules/react-static/lib/browser");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Ops. N\xE3o encontramos essa p\xE1gina :("));
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contato; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _containers_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



function Contato() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SEO__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Contato",
    description: "P\xE1gina de contato da Dra. Monica de Oliveira"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Menu__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    ativo: "contato"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Em breve..."));
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Servico; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _containers_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



function Servico() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SEO__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Servi\xE7os",
    description: "P\xE1gina dos servi\xE7os prestados pela Dra. Monica de Oliveira"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Menu__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    ativo: "servicos"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Em breve..."));
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sobre; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _containers_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



function Sobre() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SEO__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "Sobre",
    description: "P\xE1gina sobre a Dra. Monica de Oliveira"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Menu__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    ativo: "sobre"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Em breve..."));
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Alimentos; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/BtnWhatsApp.js + 1 modules
var BtnWhatsApp = __webpack_require__(8);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/Footer.js + 1 modules
var Footer = __webpack_require__(9);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/FooterInformativo.js + 1 modules
var FooterInformativo = __webpack_require__(12);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/RedesSociais.js + 1 modules
var RedesSociais = __webpack_require__(10);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/SEO.js
var SEO = __webpack_require__(4);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/styles/LandingPages.js
var LandingPages = __webpack_require__(5);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/Alimento.js

var Main = external_styled_components_default.a.main.withConfig({
  displayName: "Alimento__Main",
  componentId: "sc-28j57l-0"
})(["width:100%;max-width:75rem;margin:0 auto;padding:0 1rem;font-weight:500;color:#003566;font-size:1.5625rem;p{width:100%;margin-bottom:1.25rem;&:last-child{margin-bottom:0;}}@media only screen and (max-width:600px){font-size:1.125rem;}"]);
// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/capas/alimento.png
var alimento = __webpack_require__(46);
var alimento_default = /*#__PURE__*/__webpack_require__.n(alimento);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/pages/alimentos.js









function Alimentos() {
  var txtPrincipalFooter = ' Nossa equipe especializada pode te ajudar!';
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(SEO["a" /* default */], {
    title: "Alimentos",
    description: "Especialista em direito de fam\xEDlia e sucess\xF5es."
  }), /*#__PURE__*/external_react_default.a.createElement(LandingPages["a" /* BannerPrincipal */], null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: alimento_default.a,
    alt: "Direito de Fam\xEDlia"
  })), /*#__PURE__*/external_react_default.a.createElement(LandingPages["b" /* Titulo */], null, /*#__PURE__*/external_react_default.a.createElement("p", null, "A\xC7\xD5ES DE ALIMENTOS, REVISIONAL DE ALIMENTOS E EXONERA\xC7\xC3O DE PENS\xC3O")), /*#__PURE__*/external_react_default.a.createElement(Main, null, /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "A FIXA\xC7\xC3O DE ALIMENTOS "), "\xE9 garantia de vida, sobreviv\xEAncia. Por este motivo, provado o v\xEDnculo entre as partes \u2013 pai/m\xE3e do menor ou esposo(a)/companheiro(a), desde o in\xEDcio do processo ser\xE1 fixado um valor provis\xF3rio de PENS\xC3O ALIMENT\xCDCIA. No decorrer da a\xE7\xE3o, o juiz utilizar\xE1 como crit\xE9rio para fixa\xE7\xE3o da pens\xE3o definitiva, a necessidade do alimentado e a possibilidade do alimentante."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Quando o alimentante deixa de pagar a pens\xE3o aliment\xEDcia, se faz necess\xE1rio promover a", /*#__PURE__*/external_react_default.a.createElement("b", null, " EXECU\xC7\xC3O DE ALIMENTOS"), ", a fim de garantir o sustento do menor ou ex-c\xF4njuge / companheiro."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Por\xE9m, a situa\xE7\xE3o econ\xF4mica dos envolvidos pode sofrer algum tipo de altera\xE7\xE3o, e desde que haja a demonstra\xE7\xE3o efetiva dessa altera\xE7\xE3o econ\xF4mica, o alimentante ou alimentado necessitar\xE1 ajuizar uma", /*#__PURE__*/external_react_default.a.createElement("b", null, " A\xC7\xC3O REVISIONAL DE ALIMENTOS"), ", com a finalidade de adequar a pens\xE3o \xE0 sua realidade econ\xF4mica."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Da mesma forma, quando o alimentado (filho) atinge a maioridade ou ex-c\xF4njuge / companheiro n\xE3o preenche mais os requisitos legais, \xE9 poss\xEDvel solicitar por meio de", /*#__PURE__*/external_react_default.a.createElement("b", null, " A\xC7\xC3O DE EXONERA\xC7\xC3O DE ALIMENTOS "), "a cessa\xE7\xE3o dos pagamentos.")), /*#__PURE__*/external_react_default.a.createElement(FooterInformativo["a" /* default */], {
    txtPrincipal: txtPrincipalFooter,
    txtComplementar: " em a\xE7\xF5es de alimentos"
  }), /*#__PURE__*/external_react_default.a.createElement(RedesSociais["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(BtnWhatsApp["a" /* default */], {
    txtComplementar: " em a\xE7\xF5es de alimentos"
  }), /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], {
    txtComplementar: " em a\xE7\xF5es de alimentos"
  }));
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Divorcio; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/BtnWhatsApp.js + 1 modules
var BtnWhatsApp = __webpack_require__(8);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/Footer.js + 1 modules
var Footer = __webpack_require__(9);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/FooterInformativo.js + 1 modules
var FooterInformativo = __webpack_require__(12);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/RedesSociais.js + 1 modules
var RedesSociais = __webpack_require__(10);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/SEO.js
var SEO = __webpack_require__(4);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/capas/divorcio.png
var divorcio = __webpack_require__(48);
var divorcio_default = /*#__PURE__*/__webpack_require__.n(divorcio);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/styles/LandingPages.js
var LandingPages = __webpack_require__(5);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/Divorcio.js

var Main = external_styled_components_default.a.main.withConfig({
  displayName: "Divorcio__Main",
  componentId: "vxpw48-0"
})(["width:100%;max-width:75rem;margin:0 auto;padding:0 1rem;font-weight:500;color:#003566;font-size:1.5625rem;p{width:100%;&:last-child{margin-top:2rem;}}@media only screen and (max-width:600px){font-size:1.125rem;}"]);
// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/pages/divorcio.js









function Divorcio() {
  var txtPrincipalFooter = ' Nossa equipe especializada pode te ajudar!';
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(SEO["a" /* default */], {
    title: "Div\xF3rcio",
    description: "Especialista em direito de fam\xEDlia e sucess\xF5es."
  }), /*#__PURE__*/external_react_default.a.createElement(LandingPages["a" /* BannerPrincipal */], null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: divorcio_default.a,
    alt: "A\xE7\xF5es de div\xF3rcio"
  })), /*#__PURE__*/external_react_default.a.createElement(LandingPages["b" /* Titulo */], null, /*#__PURE__*/external_react_default.a.createElement("p", null, "A\xC7\xC3O DE DIV\xD3RCIO CONSENSUAL (AMIG\xC1VEL) OU LITIGIOSO, JUDICIAL (NO F\xD3RUM) E EXTRAJUDICIAL (NO CART\xD3RIO) E DISSOLU\xC7\xC3O DE UNI\xC3O EST\xC1VEL")), /*#__PURE__*/external_react_default.a.createElement(Main, null, /*#__PURE__*/external_react_default.a.createElement("p", null, "Atuamos de forma humanizada na resolu\xE7\xE3o de conflitos e solu\xE7\xE3o de problemas decorrentes do t\xE9rmino do relacionamento, seja casamento ou uni\xE3o est\xE1vel."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Obst\xE1culos podem ser superados de forma r\xE1pida com emprego de habilidade t\xE9cnica e negocial do advogado. Diverg\xEAncia entre bens e filhos podem ser resolvidas de forma amig\xE1vel, e sem desgaste emocional."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Antes de enfrentar um longo, e por vezes desgastante processo judicial, \xE9 importante buscar uma assessoria jur\xEDdica competente e experiente na \xE1rea, visando a resolu\xE7\xE3o do conflito de forma \xE1gil e eficaz.")), /*#__PURE__*/external_react_default.a.createElement(FooterInformativo["a" /* default */], {
    txtPrincipal: txtPrincipalFooter,
    txtComplementar: " em a\xE7\xE3o de div\xF3rcio"
  }), /*#__PURE__*/external_react_default.a.createElement(RedesSociais["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(BtnWhatsApp["a" /* default */], {
    txtComplementar: " em a\xE7\xE3o de div\xF3rcio"
  }), /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], {
    txtComplementar: " em a\xE7\xE3o de div\xF3rcio"
  }));
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Guarda; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/BtnWhatsApp.js + 1 modules
var BtnWhatsApp = __webpack_require__(8);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/Footer.js + 1 modules
var Footer = __webpack_require__(9);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/FooterInformativo.js + 1 modules
var FooterInformativo = __webpack_require__(12);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/RedesSociais.js + 1 modules
var RedesSociais = __webpack_require__(10);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/SEO.js
var SEO = __webpack_require__(4);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/capas/guarda.png
var guarda = __webpack_require__(49);
var guarda_default = /*#__PURE__*/__webpack_require__.n(guarda);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/styles/LandingPages.js
var LandingPages = __webpack_require__(5);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/Guarda.js

var Main = external_styled_components_default.a.main.withConfig({
  displayName: "Guarda__Main",
  componentId: "b6ga7d-0"
})(["width:100%;max-width:75rem;margin:0 auto;padding:0 1rem;font-weight:500;color:#003566;font-size:1.5625rem;p{width:100%;& + p{margin-top:2rem;}}ul{margin:2rem 0;list-style:none;li{&:nth-child(2){margin:0.3125rem 0;}}}@media only screen and (max-width:600px){font-size:1.125rem;}"]);
// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/pages/guarda.js









function Guarda() {
  var txtPrincipalFooter = ' Nossa equipe especializada pode te ajudar!';
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(SEO["a" /* default */], {
    title: "Guarda",
    description: "Especialista em direito de fam\xEDlia e sucess\xF5es."
  }), /*#__PURE__*/external_react_default.a.createElement(LandingPages["a" /* BannerPrincipal */], null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: guarda_default.a,
    alt: "Regulamenta\xE7\xE3o de Guarda"
  })), /*#__PURE__*/external_react_default.a.createElement(LandingPages["b" /* Titulo */], null, /*#__PURE__*/external_react_default.a.createElement("p", null, "REGULAMENTA\xC7\xC3O DE GUARDA, REGIME DE VISITAS E ALIENA\xC7\xC3O PARENTAL")), /*#__PURE__*/external_react_default.a.createElement(Main, null, /*#__PURE__*/external_react_default.a.createElement("p", null, "Com o t\xE9rmino do relacionamento, quest\xF5es delicadas devem ser ajustadas entre os ex-parceiros, dentre elas o regime de guarda e regulamenta\xE7\xE3o de visitas dos filhos."), /*#__PURE__*/external_react_default.a.createElement("p", null, "A respeito da guarda de filhos h\xE1 tr\xEAs modalidades:"), /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "- GUARDA COMPARTILHADA:"), " o(s) filho(s) continuam residindo com um dos genitores, sendo fixada uma resid\xEAncia como base. Todavia, todas as quest\xF5es que envolvam o dia a dia do(s) filho(s), como exemplo: escola, sa\xFAde, bem estar dever\xE3o ser decididas em conjunto pelos pais;"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "- GUARDA UNILATERAL OU EXCLUSIVA:"), " ocorre em situa\xE7\xF5es que a crian\xE7a esteja sujeita a maus tratos, abandono, ou falta de condi\xE7\xF5es m\xEDnimas de cuidado e seguran\xE7a. Nesta modalidade, a guarda \xE9 atribu\xEDda a apenas um dos genitores ou algu\xE9m que o substitua;"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("b", null, "- GUARDA ALTERNADA:"), " situa\xE7\xE3o em que a crian\xE7a convive um per\xEDodo com cada um dos pais, ou seja, a crian\xE7a ter\xE1 duas resid\xEAncias e a conviv\xEAncia com os pais ser\xE1 alternada.")), /*#__PURE__*/external_react_default.a.createElement("p", null, "Al\xE9m da defini\xE7\xE3o do regime de guarda, \xE9 necess\xE1rio ajustar o regime de visitas, j\xE1 que independente do t\xE9rmino do relacionamento, filhos e pais devem manter a conviv\xEAncia."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Infelizmente, temos situa\xE7\xF5es em que o regime de visitas n\xE3o \xE9 respeitado por um dos genitores, ou ainda, quando um dos genitores incorre em Aliena\xE7\xE3o Parental, ocasi\xE3o em que se faz necess\xE1ria a interven\xE7\xE3o do Poder Judici\xE1rio a fim de preservar o melhor interesse da crian\xE7a.")), /*#__PURE__*/external_react_default.a.createElement(FooterInformativo["a" /* default */], {
    txtPrincipal: txtPrincipalFooter,
    txtComplementar: " em regulamenta\xE7\xE3o de guarda"
  }), /*#__PURE__*/external_react_default.a.createElement(RedesSociais["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(BtnWhatsApp["a" /* default */], {
    txtComplementar: " em regulamenta\xE7\xE3o de guarda"
  }), /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], {
    txtComplementar: " em regulamenta\xE7\xE3o de guarda"
  }));
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(50);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/components/Router.js
var Router = __webpack_require__(7);

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(6);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/capas/home.png
var home = __webpack_require__(51);
var home_default = /*#__PURE__*/__webpack_require__.n(home);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/BtnWhatsApp.js + 1 modules
var BtnWhatsApp = __webpack_require__(8);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/Footer.js + 1 modules
var Footer = __webpack_require__(9);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/Menu.js + 1 modules
var Menu = __webpack_require__(13);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/RedesSociais.js + 1 modules
var RedesSociais = __webpack_require__(10);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/SEO.js
var SEO = __webpack_require__(4);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/civel.png
var civel = __webpack_require__(52);
var civel_default = /*#__PURE__*/__webpack_require__.n(civel);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/familia.png
var familia = __webpack_require__(53);
var familia_default = /*#__PURE__*/__webpack_require__.n(familia);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/imobiliario.png
var imobiliario = __webpack_require__(54);
var imobiliario_default = /*#__PURE__*/__webpack_require__.n(imobiliario);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/trabalhista.png
var trabalhista = __webpack_require__(55);
var trabalhista_default = /*#__PURE__*/__webpack_require__.n(trabalhista);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/Home.js





var Container = external_styled_components_default.a.div.withConfig({
  displayName: "Home__Container",
  componentId: "sc-7bhpt3-0"
})(["width:100%;max-width:1200px;display:flex;flex-direction:column;margin:0 auto;> img{width:100%;margin:25px 0;}"]);
var Titulo = external_styled_components_default.a.div.withConfig({
  displayName: "Home__Titulo",
  componentId: "sc-7bhpt3-1"
})(["width:100%;max-width:1200px;padding:1rem;margin:0 auto 10px;background:#003566;mix-blend-mode:normal;font-weight:600;font-size:27px;display:flex;justify-content:center;align-items:center;color:#fff;"]);
var MainCards = external_styled_components_default.a.main.withConfig({
  displayName: "Home__MainCards",
  componentId: "sc-7bhpt3-2"
})(["width:100%;max-width:1200px;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem;margin:0 auto 25px;@media only screen and (max-width:720px){grid-template-columns:1fr;padding:0 1rem;}"]);
var CardAtuacao = external_styled_components_default.a.a.withConfig({
  displayName: "Home__CardAtuacao",
  componentId: "sc-7bhpt3-3"
})(["cursor:pointer;position:relative;width:100%;display:flex;flex-direction:column;flex:1;transition:all 0.2s;top:0;.image{width:100%;height:220px;margin-bottom:5px;overflow:hidden;transition:all 0.2s;img{width:100%;transform:translateY(-90px);}}", " ", " ", " ", " .texto{font-weight:600;font-size:1.375rem;line-height:38px;background:#dae4ec;color:#000;width:100%;text-align:center;mix-blend-mode:normal;@media only screen and (max-width:600px){font-size:1rem;}}&:hover{.image{transform:", ";}}", ""], function (props) {
  return props.trabalhista && Object(external_styled_components_["css"])([".image{background:url(", ") no-repeat center center;background-size:100%;}"], trabalhista_default.a);
}, function (props) {
  return props.civel && Object(external_styled_components_["css"])([".image{background:url(", ") no-repeat center center;background-size:100%;}"], civel_default.a);
}, function (props) {
  return props.familia && Object(external_styled_components_["css"])([".image{background:url(", ") no-repeat center center;background-size:100%;}"], familia_default.a);
}, function (props) {
  return props.imobiliario && Object(external_styled_components_["css"])([".image{background:url(", ") no-repeat center center;background-size:100%;}"], imobiliario_default.a);
}, function (props) {
  return props.mostrarLinks ? '' : 'scale(1.03)';
}, function (props) {
  return props.mostrarLinks && Object(external_styled_components_["css"])(["top:-225px;margin-bottom:-225px;"]);
});
var CardAtuacaoSubLinks = external_styled_components_default.a.div.withConfig({
  displayName: "Home__CardAtuacaoSubLinks",
  componentId: "sc-7bhpt3-4"
})(["width:100%;max-width:592px;height:263px;overflow:hidden;.listaLinks{height:100%;background:#dae4ec;}ul{border-top:4px solid #fff;width:100%;z-index:1;list-style:none;display:grid;grid-template-columns:repeat(2,1fr);font-size:1.25rem;grid-gap:1rem;z-index:1;padding:1rem;li{display:flex;align-items:center;justify-content:flex-start;height:fit-content;svg{width:25px;height:25px;margin:0.1875rem 0.3125rem -0.25rem 0;}& a:hover{text-decoration:underline;}}}@media only screen and (max-width:720px){margin:0 auto;}@media only screen and (max-width:600px){ul{font-size:1rem;grid-gap:0.875rem;padding:0.875rem;li svg{width:20px;height:20px;}}}"]);
// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/pages/index.js











/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      linksFamilia = _useState2[0],
      setLinksFamilia = _useState2[1];

  function mostrarLinksFamilia() {
    setLinksFamilia(function (state) {
      return !state;
    });
  }

  function esconderLinks() {
    setLinksFamilia(false);
  }

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(SEO["a" /* default */], {
    title: "Dra. Monica de Oliveira",
    description: "M.Oliveira Advocacia",
    shouldExcludeTitleSufix: true
  }), /*#__PURE__*/external_react_default.a.createElement(Menu["a" /* default */], {
    ativo: "home"
  }), /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "skip-link",
    href: "#mainCards"
  }, "Skip to main"), /*#__PURE__*/external_react_default.a.createElement(Container, null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: home_default.a,
    alt: "Banner"
  })), /*#__PURE__*/external_react_default.a.createElement(Titulo, null, /*#__PURE__*/external_react_default.a.createElement("p", null, "\xC1REAS DE ATUA\xC7\xC3O")), /*#__PURE__*/external_react_default.a.createElement(MainCards, {
    id: "mainCards"
  }, /*#__PURE__*/external_react_default.a.createElement(CardAtuacaoSubLinks, null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/trabalhista"
  }, /*#__PURE__*/external_react_default.a.createElement(CardAtuacao, {
    trabalhista: true
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "image"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "texto"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "Trabalhista"))))), /*#__PURE__*/external_react_default.a.createElement(CardAtuacaoSubLinks, null, /*#__PURE__*/external_react_default.a.createElement(CardAtuacao, {
    onClick: esconderLinks,
    civel: true
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "image"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "texto"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "Direito C\xEDvel")))), /*#__PURE__*/external_react_default.a.createElement(CardAtuacaoSubLinks, null, /*#__PURE__*/external_react_default.a.createElement(CardAtuacao, {
    onClick: mostrarLinksFamilia,
    mostrarLinks: linksFamilia,
    familia: true
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "image"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "texto"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "Direito de Fam\xEDlia e Sucess\xF5es"))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "listaLinks"
  }, /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/investigacao-paternidade"
  }, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    color: "#003566"
  }), "A\xE7\xE3o de Investiga\xE7\xE3o de Paternidade")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/alimentos"
  }, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    color: "#003566"
  }), "Alimentos")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/divorcio"
  }, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    color: "#003566"
  }), "Div\xF3rcio")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/guarda"
  }, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    color: "#003566"
  }), "Guarda")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/inventario"
  }, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    color: "#003566"
  }), "Invent\xE1rio"))))), /*#__PURE__*/external_react_default.a.createElement(CardAtuacaoSubLinks, null, /*#__PURE__*/external_react_default.a.createElement(CardAtuacao, {
    onClick: esconderLinks,
    imobiliario: true
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "image"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "texto"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "Direito Imobili\xE1rio"))))), /*#__PURE__*/external_react_default.a.createElement(RedesSociais["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(BtnWhatsApp["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], null));
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Inventario; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/BtnWhatsApp.js + 1 modules
var BtnWhatsApp = __webpack_require__(8);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/Footer.js + 1 modules
var Footer = __webpack_require__(9);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/FooterInformativo.js + 1 modules
var FooterInformativo = __webpack_require__(12);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/RedesSociais.js + 1 modules
var RedesSociais = __webpack_require__(10);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/SEO.js
var SEO = __webpack_require__(4);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/capas/inventario.png
var inventario = __webpack_require__(56);
var inventario_default = /*#__PURE__*/__webpack_require__.n(inventario);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/styles/LandingPages.js
var LandingPages = __webpack_require__(5);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/Inventario.js

var Main = external_styled_components_default.a.main.withConfig({
  displayName: "Inventario__Main",
  componentId: "h0fppa-0"
})(["width:100%;max-width:75rem;margin:0 auto;padding:0 1rem;font-weight:500;color:#003566;font-size:1.5625rem;p{width:100%;& + p{margin-top:2rem;}&:first-child{font-weight:bold;}}@media only screen and (max-width:600px){font-size:1.125rem;}"]);
// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/pages/inventario.js









function Inventario() {
  var txtPrincipalFooter = ' Nossa equipe é especializada em todos os tipos de inventários e testamentos.';
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(SEO["a" /* default */], {
    title: "Invent\xE1rio",
    description: "Especialista em direito de fam\xEDlia e sucess\xF5es."
  }), /*#__PURE__*/external_react_default.a.createElement(LandingPages["a" /* BannerPrincipal */], null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: inventario_default.a,
    alt: "Invent\xE1rio Judicial"
  })), /*#__PURE__*/external_react_default.a.createElement(LandingPages["b" /* Titulo */], null, /*#__PURE__*/external_react_default.a.createElement("p", null, "INVENT\xC1RIO JUDICIAL E EXTRAJUDICIAL, TESTAMENTOS")), /*#__PURE__*/external_react_default.a.createElement(Main, null, /*#__PURE__*/external_react_default.a.createElement("p", null, "QUANDO O INVENT\xC1RIO \xC9 NECESS\xC1RIO?"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Quando uma pessoa morre e deixa bens, para partilhar a heran\xE7a e quitar eventuais d\xEDvidas do falecido \xE9 obrigat\xF3ria a abertura de invent\xE1rio. O prazo para abertura do processo sem incid\xEAncia de multa sobre o ITCMD \u2013 Imposto de Transmiss\xE3o Causa Mortis \xE9 de 60 dias a contar do \xF3bito."), /*#__PURE__*/external_react_default.a.createElement("p", null, "O invent\xE1rio pode ser feito por meio de processo judicial ou extrajudicial (diretamente em cart\xF3rio) por meio de escritura p\xFAblica, de maneira mais c\xE9lere e menos burocr\xE1tica. Para evitar conflitos entre os herdeiros, muitos tem optado pelo testamento, documento em que se deixa estipulado quem ficar\xE1 com os bens em caso de falecimento, desde que respeitadas as restri\xE7\xF5es legais para aqueles que possuam herdeiros necess\xE1rios (filhos/pais/c\xF4njuges)."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Antes de enfrentar um longo e caro processo judicial, \xE9 importante que os herdeiros busquem uma assessoria jur\xEDdica competente e experiente na \xE1rea.")), /*#__PURE__*/external_react_default.a.createElement(FooterInformativo["a" /* default */], {
    txtPrincipal: txtPrincipalFooter,
    txtComplementar: " em invent\xE1rio judicial, testamentos"
  }), /*#__PURE__*/external_react_default.a.createElement(RedesSociais["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(BtnWhatsApp["a" /* default */], {
    txtComplementar: " em invent\xE1rio judicial, testamentos"
  }), /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], {
    txtComplementar: " em invent\xE1rio judicial, testamentos"
  }));
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ investigacaoPaternidade; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/BtnWhatsApp.js + 1 modules
var BtnWhatsApp = __webpack_require__(8);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/Footer.js + 1 modules
var Footer = __webpack_require__(9);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/FooterInformativo.js + 1 modules
var FooterInformativo = __webpack_require__(12);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/RedesSociais.js + 1 modules
var RedesSociais = __webpack_require__(10);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/SEO.js
var SEO = __webpack_require__(4);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/capas/investigacao-paternidade.png
var investigacao_paternidade = __webpack_require__(57);
var investigacao_paternidade_default = /*#__PURE__*/__webpack_require__.n(investigacao_paternidade);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/styles/LandingPages.js
var LandingPages = __webpack_require__(5);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/InvestigacaoPaternidade.js

var Main = external_styled_components_default.a.main.withConfig({
  displayName: "InvestigacaoPaternidade__Main",
  componentId: "sc-1kxso5b-0"
})(["width:100%;max-width:75rem;margin:0 auto;padding:0 1rem;font-weight:500;color:#003566;font-size:1.5625rem;p{width:100%;& + p{margin-top:2rem;}&:nth-child(2){font-weight:bold;}}@media only screen and (max-width:600px){font-size:1.125rem;}"]);
// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/pages/investigacao-paternidade.js









function investigacaoPaternidade() {
  var txtPrincipalFooter = ' Nossa equipe especializada pode te ajudar!';
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(SEO["a" /* default */], {
    title: "Paternidade",
    description: "Especialista em direito de fam\xEDlia e sucess\xF5es."
  }), /*#__PURE__*/external_react_default.a.createElement(LandingPages["a" /* BannerPrincipal */], null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: investigacao_paternidade_default.a,
    alt: "A\xE7\xF5es de regulamenta\xE7\xE3o de paternidade"
  })), /*#__PURE__*/external_react_default.a.createElement(LandingPages["b" /* Titulo */], null, /*#__PURE__*/external_react_default.a.createElement("p", null, "A\xC7\xC3O DE REGULAMENTA\xC7\xC3O OU INVESTIGA\xC7\xC3O DE PATERNIDADE")), /*#__PURE__*/external_react_default.a.createElement(Main, null, /*#__PURE__*/external_react_default.a.createElement("p", null, "Em situa\xE7\xF5es em que o pai se recusa a reconhecer a paternidade do filho ou desconhece da sua paternidade."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Quem pode pedir a investiga\xE7\xE3o de paternidade?"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Para situa\xE7\xF5es em que o filho nasce e n\xE3o \xE9 reconhecido pelo pai biol\xF3gico, ou at\xE9 mesmo a m\xE3e da crian\xE7a deixa de informar quem \xE9 o pai, ser\xE1 necess\xE1rio o ajuizamento de A\xE7\xE3o de Investiga\xE7\xE3o de Paternidade."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Para entrar com esta a\xE7\xE3o judicial, se menor o filho dever\xE1 ser representado pela genitora. Em contrapartida, se maior de idade, ele mesmo pode promover a a\xE7\xE3o. \xC9 preciso destacar que o suposto pai n\xE3o \xE9 obrigado a se submeter a um exame de DNA, por\xE9m, o juiz pode considerar a recusa como presun\xE7\xE3o relativa de paternidade. A prova do relacionamento entre a m\xE3e e o suposto pai dever\xE1 ser produzida.")), /*#__PURE__*/external_react_default.a.createElement(FooterInformativo["a" /* default */], {
    txtPrincipal: txtPrincipalFooter,
    txtComplementar: " em a\xE7\xF5es de regulamenta\xE7\xE3o de paternidade"
  }), /*#__PURE__*/external_react_default.a.createElement(RedesSociais["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(BtnWhatsApp["a" /* default */], {
    txtComplementar: " em a\xE7\xF5es de regulamenta\xE7\xE3o de paternidade"
  }), /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], {
    txtComplementar: " em a\xE7\xF5es de regulamenta\xE7\xE3o de paternidade"
  }));
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Trabalhista; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(6);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/BtnWhatsApp.js + 1 modules
var BtnWhatsApp = __webpack_require__(8);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/Footer.js + 1 modules
var Footer = __webpack_require__(9);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/FooterInformativo.js + 1 modules
var FooterInformativo = __webpack_require__(12);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/RedesSociais.js + 1 modules
var RedesSociais = __webpack_require__(10);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/containers/SEO.js
var SEO = __webpack_require__(4);

// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/styles/LandingPages.js
var LandingPages = __webpack_require__(5);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/styles/Trabalhista.js

var Main = external_styled_components_default.a.main.withConfig({
  displayName: "Trabalhista__Main",
  componentId: "rqsmeb-0"
})(["width:100%;max-width:55rem;margin:0 auto;padding:0 1rem;p{color:#003566;font-weight:600;font-size:1.6875rem;width:100%;text-align:center;margin-bottom:3rem;}ul{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);font-size:1.5rem;grid-gap:1rem;font-weight:600;li{svg{width:25px;margin:0.1875rem 0.3125rem -0.25rem 0;}}}@media only screen and (max-width:600px){p{font-size:1.25rem;}ul{grid-template-columns:1fr;}}"]);
// EXTERNAL MODULE: /home/leandro/Repositorios/monica-adv/src/assets/capas/trabalhista.png
var trabalhista = __webpack_require__(58);
var trabalhista_default = /*#__PURE__*/__webpack_require__.n(trabalhista);

// CONCATENATED MODULE: /home/leandro/Repositorios/monica-adv/src/pages/trabalhista.js










function Trabalhista() {
  var txtPrincipalFooter = ' Há 11 anos cuidamos da defesa dos direitos do trabalhador. Atendimento presencial ou remoto.';
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(SEO["a" /* default */], {
    title: "Trabalhista",
    description: "Especialista em direito do trabalho"
  }), /*#__PURE__*/external_react_default.a.createElement(LandingPages["a" /* BannerPrincipal */], null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: trabalhista_default.a,
    alt: "Direito Trabalhista"
  })), /*#__PURE__*/external_react_default.a.createElement(LandingPages["b" /* Titulo */], null, /*#__PURE__*/external_react_default.a.createElement("p", null, "RECLAMA\xC7\xC3O TRABALHISTA")), /*#__PURE__*/external_react_default.a.createElement(Main, null, /*#__PURE__*/external_react_default.a.createElement("p", null, "COMO PODEMOS LHE AJUDAR?"), /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    size: 25,
    color: "#003566"
  }), "Estabilidade para Gestantes"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    size: 25,
    color: "#003566"
  }), "F\xE9rias"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    size: 25,
    color: "#003566"
  }), "Empregados sem Registro"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    size: 25,
    color: "#003566"
  }), "Horas Extras"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    size: 25,
    color: "#003566"
  }), "Empregado PJ"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    size: 25,
    color: "#003566"
  }), "Acidente de Trabalho"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    size: 25,
    color: "#003566"
  }), "FGTS n\xE3o recolhido"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    size: 25,
    color: "#003566"
  }), "Justa Causa"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    size: 25,
    color: "#003566"
  }), "Verbas Rescis\xF3rias"), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(fi_["FiChevronRight"], {
    size: 25,
    color: "#003566"
  }), "Adicional de Periculosidade e Insalubridade"))), /*#__PURE__*/external_react_default.a.createElement(FooterInformativo["a" /* default */], {
    txtPrincipal: txtPrincipalFooter,
    txtComplementar: " em direito do trabalho"
  }), /*#__PURE__*/external_react_default.a.createElement(RedesSociais["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(BtnWhatsApp["a" /* default */], {
    txtComplementar: " em direito do trabalho"
  }), /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], {
    txtComplementar: " em direito do trabalho"
  }));
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(14);

var _router = __webpack_require__(17);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/favicon.f05b0781.ico";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/whatsapp.1fd55fe1.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/rodape.e5074cc8.png";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAtCAYAAAA+7zKnAAAD+ElEQVRogdWZWYhPURzHP/M3Yx3rgyXrpCyJQkJikCVjS7bIg5BH24NEeSHUlORBeLA8iEamDBJRvIiQNdl3QiJZsowZ/abfnW537rn3nvs//5nxqanp3nPO73vP/5zfck7e2HHjyYI8oAiYCEwDBgBtY4b7BtwGTgMXgefA9zQS8lPqFoHzgLnAMKCdRd8OQA/92J/AHeAwcAD4bCOiSa+iIpv2zYCFamgJ0BtobjNAAJm8rsBkYCbwG3gA/EnSOWNhaAhQDhwE+mch2EQ/YC9wBZgtExvXIYl4mZ3NwGWgRNd5LpF9UwaUxtmKEy9fvw/YABTkWLQf0bUaOAK0MTWK2rAtdG3Py6nMaMR2ITA1rFXUzG/NgfC/6ip/AJUJ+8hS3Q+0DL4wzfxyYGV2Omt5D1QA19WTfFK7shzaA52AwWrTxGKgi7rX2o8OE78I2OFI+ElgFfAkpl2nGPGoO10BbPceBJeNBJvdut6z5RAwI4FwoWlCW6XqUkPF7wFaORD+AlgKVDsYy09G3XaN5/OLH6QzlS0S8tcCvxwL9xDP08cvXoLBfA3/2XIJOGY5xm+Lts29/ZHvezDbUfSsUJcYhqztYqCnBkBZVlWWiZ2wDFjjiZefoa8D4cKtiHdlmoBli/j8Em/ZLHUkXPhieF7sSLjHAk/8ZIeDVhmeu85EB2b0J+jucFDTvrFJv5PQWQYc4Sgo1TfNRPzo/1C4kMloXuESUwUUlQKkisT5ET45iu+acL0KtJEg98jQr1zfBVPhSk1716QRn6jYDfBHy8K7Fn1e6l8YocVGHBkVYUueQ+8hEzg0Rb/qjOYirrM/G6Qo6ZiiX6WIfw28aTjtNXlNhxT9Pnm5jeQj3Sw7F4TUlRmtT8OibL5uaP+vXK3eLu6IMIwnnvhdlpumUI9Egjl7a2AWcD+kzxxgveb7fvFtLCopPxWe+EuaUCWdgSZavIRhitYywwNTiDRR5nmMr8BxR4OaErM0LtnEeeCDJ14C1VHHBnLJFgK+Wo4pHv4Hwm/oGVCdQLOsYfRYsc0reILiL6vnaayc0FKSMPHCOn+DRsSH4KlamHjxPAtiCun65pHGoXdx4lF3J8HmaSMQ/hEYC1wLvojKDJ8B0/XorqF4obn+2zD7cWntPS0T63x1PSC2JwBXTaaS5ORSLU0CNuqmqQ/26znP4yhbSQsKuR/dBIzRSGxKAbJBovwpvZBeoms9Ettq6IFe9ZSozzWdjoVhKngkyzyntx4z9P9EpL0BPwOc1WvHUcAUYLgcBEWcHvhPoMXlyT66oBmtrOukd1S1pBUvyExKAS5/cikhxcxI3RdS40puLzHDq3fF7e7UjPBmRDGeDOAf6wa1BxH6OFQAAAAASUVORK5CYII="

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFVklEQVRogdWaaWwVVRTHf0wfSxFEtrRqCaBBwbpjxF3BqNHwTWxicIlGTTTGL2o0UT+oMfGDiYlRYzTRBHcT4wLuRoxRFCSKGyIuFBRcS7G0WCjtMwf/V6/z7syb917n0f6T+fBm7tw559xz/2e5b8QZ8xdQIyYCxwLzgMOBGUATsJ+mjYBu4A/gJ2AdsBpYBWyo9eO1KHAq0AacCBwIjAFGAwVdI2Lj+4HdwC6gF+gEPgXeAJ4HuqoRolDheLPmYuACYDawPzAu47sNukzJ8cBUrZYZ4grgHeBB4Oe8FDgFuFoWn1nJR1IwCjhAVytwEvAU8LhWalAU2Ae4ELgSOH6QBA9hAmD+fCgwB3gI+K7cSw0zZqYaswW4FrhJE9cD+2olzD3bgS3VKmAPbgSul8/WG+ZSh4m1fkz6dpRw32jwDlm/YS8I73AysAQ4LmlASIFGCd8WeLZTfG7LulW0mDcOBh4FZgWouUQBo7jLtGlHxZ79BSwFFgKniUpXid/zhlH2/SFX9veAMdIJwH3AlIBAFnAuATbK+uaXbwFzxed5wtx4mlZgtTyhZAWMxu4UJ8fxG/A2sF0WL8p9TJmPgZ46rIJ5xDUy2L+uFHkPFyhYhWAadyQ8+7NOewHlXVf5RnYKTAduS2GcyaK0EMx9xuYu+n+wPXiQ+xXJ9y09OCLlpbF68SxPadvwFwPzgZF1Eh7lXm2i+j3CW7Q9O8OLpuC9wLPKJJuByxUx643FIpBXCqKo0zMK0KoYUSt2ad+47LRSTJRB1xaUMrRkmKBbqW5BbuT4v9nbA13eGIcB7ZMGBcEfgO/FaI1awVlKr7Om5oYj7VsF8WsWLAcu9Sqtoqz3AHCm7i1Tbt/sjTGlVsrqtwMvAH2x780Ru1wkwiiJuAFYhD7aFDgmowK2Att0OVgVtsP7vV0Ru927V1Tl9bCKloHA3OuUOBolXycXKQdjzm2RtM+KYuAKwR9nRroB+CBBeLzAeA/wfkZZJpn7R6pn84TtlU1amXKwVf5IK1EOJvu0QhV1caVwq2Q+ex5wCPCr9suawFxfiQgmZPjOyLyFdxivwmiR2KZHLHKzWMnHJuVes7NMnFTQDDYsgp8v4VGdfY6uODpEBplQLwUWevTrYN9uDYztzdqRIBaQ8kRLoECywNYY+GaRZHaLY3dUaSOpSuSx10zJLZGCSN7IatFKYAF1Q6QoORxhbPV1lNZzGeKwhPCzSDyc2v0aovgceM8U+EZ5ynCCpRxfAt86F3p9mCnwHPChpeWROg4rtBJpCHUeemP343m+Q1LXIjS+u0yXw+R92rm942fb0XcDj6W8OEUlpR+9RyutdWhS98LvbvSr4xyHzdMUayYUVdBMTpHDauH17od/xGR5yqspjdStihl+RI3U4nBpwu9ayTHeGCt4jgpkl1YbdMbOyQZklOmB1AOtziIpsae28COkBYZbgCcTWouT1LdPw1QvYSsHU76ctX30yUNW+oWR3xu1m5u1/PMCucvehLnhJ2rj/K/YiWejver9LK1juzAL2tUsKDnJDKXTPaphXxsSov+TbNr53BehnCqpHtgsJZbkL18q1qiVszxpUNoZWYe07tcJfDUdtFrwpkrOd9PmKHdK2akDhS4VJVkZphYYGz4B3KWzh1SUUwC1Q1Yo5RgnPq+kBZgVOyXwIwqqG7O8l0UBh/Vipx1eoGqssdoqql9qc78M3Aq8JDbMhGr/7GH74Vwd9M1VkPP/7BEiB9d965OA1nkwwc3Xn9E/WSpGtdaz5X5R1rK9YQckFqWtTWnNYlPIAqGjPQuSJvAvsra5iqXwayvpQJQA+BtIKSc8h/mq7AAAAABJRU5ErkJggg=="

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/alimento.7d9bff29.png";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAABnCAMAAABfPtItAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvpQTFRFAAAAADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjADdjgYJYyQAAAP50Uk5TADS59/8DAV75AkH+8H0O0x7lBOeSlriQohvDycppxg3YiCOG5AkihfxiENEcPy6RnArS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"

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/divorcio.62129767.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/guarda.46dee683.png";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/home.6300c546.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/civel.683e9042.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/familia.eb0d1800.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/imobiliario.5664d092.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/trabalhista.661e3756.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/inventario.5cfc4c4b.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/investigacao-paternidade.dd192de4.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/trabalhista.e9f3fb68.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(62);
module.exports = __webpack_require__(69);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(61)["default"];

var _require = __webpack_require__(22),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(22),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(63),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);
























Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/alimentos.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/alimentos */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/alimentos.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/alimentos";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/alimentos.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/contato.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/contato */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/contato.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/contato";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/contato.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/divorcio.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/divorcio */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/divorcio.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/divorcio";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/divorcio.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/guarda.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/guarda */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/guarda.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/guarda";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/guarda.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/index.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/inventario.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/inventario */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/inventario.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/inventario";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/pages/inventario.js';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/investigacao-paternidade.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/investigacao-paternidade */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/investigacao-paternidade.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/investigacao-paternidade";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/pages/investigacao-paternidade.js';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/servico.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/servico */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/servico.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/servico";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/pages/servico.js';
var t_9 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/sobre.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/sobre */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/sobre.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/sobre";
  }
}), universalOptions);
t_9.template = '__react_static_root__/src/pages/sobre.js';
var t_10 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/trabalhista.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/trabalhista */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/trabalhista.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/trabalhista";
  }
}), universalOptions);
t_10.template = '__react_static_root__/src/pages/trabalhista.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/alimentos.js': t_1,
  '__react_static_root__/src/pages/contato.js': t_2,
  '__react_static_root__/src/pages/divorcio.js': t_3,
  '__react_static_root__/src/pages/guarda.js': t_4,
  '__react_static_root__/src/pages/index.js': t_5,
  '__react_static_root__/src/pages/inventario.js': t_6,
  '__react_static_root__/src/pages/investigacao-paternidade.js': t_7,
  '__react_static_root__/src/pages/servico.js': t_8,
  '__react_static_root__/src/pages/sobre.js': t_9,
  '__react_static_root__/src/pages/trabalhista.js': t_10
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
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

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(20);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 15,
	"./": 15,
	"./index": 15,
	"./index.js": 15
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 66;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(24);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(25);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(70);

var _interopRequireDefault = __webpack_require__(71);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(72));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(73));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(74);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(75)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("/home/leandro/Repositorios/monica-adv/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);




/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  };

  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(76)(module)))

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })
/******/ ]);
});