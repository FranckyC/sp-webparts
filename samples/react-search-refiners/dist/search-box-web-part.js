define("096b96cc-8a44-41fa-9b4d-c0ab2ab2a779_0.0.2", ["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-webpart-base","SearchBoxWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_99__, __WEBPACK_EXTERNAL_MODULE_792__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 790);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(101), exports);


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(7);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(102), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);
tslib_1.__exportStar(__webpack_require__(105), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(106), exports);
tslib_1.__exportStar(__webpack_require__(110), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(111), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(112), exports);
tslib_1.__exportStar(__webpack_require__(113), exports);
tslib_1.__exportStar(__webpack_require__(114), exports);
tslib_1.__exportStar(__webpack_require__(115), exports);
tslib_1.__exportStar(__webpack_require__(116), exports);
tslib_1.__exportStar(__webpack_require__(117), exports);
tslib_1.__exportStar(__webpack_require__(127), exports);
tslib_1.__exportStar(__webpack_require__(128), exports);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(129), exports);
tslib_1.__exportStar(__webpack_require__(130), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);
tslib_1.__exportStar(__webpack_require__(131), exports);
tslib_1.__exportStar(__webpack_require__(54), exports);
tslib_1.__exportStar(__webpack_require__(133), exports);
tslib_1.__exportStar(__webpack_require__(134), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(135), exports);
tslib_1.__exportStar(__webpack_require__(136), exports);
tslib_1.__exportStar(__webpack_require__(137), exports);
tslib_1.__exportStar(__webpack_require__(138), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(140), exports);
tslib_1.__exportStar(__webpack_require__(141), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(142), exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventGroup_1 = __webpack_require__(17);
var scroll_1 = __webpack_require__(44);
var dom_1 = __webpack_require__(11);
var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 */
var AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new EventGroup_1.EventGroup(this);
        this._scrollableParent = scroll_1.findScrollableParent(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = dom_1.getRect(this._scrollableParent);
        // tslint:disable-next-line:no-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        if (!this._scrollRect) {
            return;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < (scrollRectTop + SCROLL_GUTTER_HEIGHT)) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());
exports.AutoScroll = AutoScroll;


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(104);
load_themed_styles_1.loadStyles([{ "rawString": ".scrollDisabled_11e8d933{overflow:hidden !important}\n" }]);
exports.scrollDisabled = "scrollDisabled_11e8d933";


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(7);
var React = __webpack_require__(2);
function provideContext(contextTypes, mapPropsToContext) {
    var Provider = /** @class */ (function (_super) {
        tslib_1.__extends(Provider, _super);
        function Provider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Provider.prototype.getChildContext = function () {
            return mapPropsToContext(this.props);
        };
        Provider.prototype.render = function () {
            return React.Children.only(this.props.children);
        };
        Provider.childContextTypes = contextTypes;
        return Provider;
    }(React.Component));
    return Provider;
}
exports.provideContext = provideContext;


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(7);
var React = __webpack_require__(2);
var PropTypes = __webpack_require__(15);
var BaseComponent_1 = __webpack_require__(45);
/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator. This enables injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop, which should be a json map which contains 1 or more
 * name/value pairs representing injectable props.
 *
 * @public
 */
var Customizer = /** @class */ (function (_super) {
    tslib_1.__extends(Customizer, _super);
    // tslint:disable-next-line:no-any
    function Customizer(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getCustomizations(props, context);
        return _this;
    }
    Customizer.prototype.getChildContext = function () {
        return this.state;
    };
    // tslint:disable-next-line:no-any
    Customizer.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this.setState(this._getCustomizations(newProps, newContext));
    };
    Customizer.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    Customizer.prototype._getCustomizations = function (props, context) {
        var _a = props.settings, settings = _a === void 0 ? {} : _a, _b = props.scopedSettings, scopedSettings = _b === void 0 ? {} : _b;
        var _c = context.customizations, customizations = _c === void 0 ? { settings: {}, scopedSettings: {} } : _c;
        var newScopedSettings = tslib_1.__assign({}, scopedSettings);
        for (var name_1 in customizations.scopedSettings) {
            if (customizations.scopedSettings.hasOwnProperty(name_1)) {
                newScopedSettings[name_1] = tslib_1.__assign({}, scopedSettings[name_1], customizations.scopedSettings[name_1]);
            }
        }
        return {
            customizations: {
                settings: tslib_1.__assign({}, settings, customizations.settings),
                scopedSettings: newScopedSettings
            }
        };
    };
    Customizer.contextTypes = {
        customizations: PropTypes.object
    };
    Customizer.childContextTypes = Customizer.contextTypes;
    return Customizer;
}(BaseComponent_1.BaseComponent));
exports.Customizer = Customizer;


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(46);
var invariant = __webpack_require__(47);
var warning = __webpack_require__(48);
var assign = __webpack_require__(108);

var ReactPropTypesSecret = __webpack_require__(49);
var checkPropTypes = __webpack_require__(109);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("dev" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(47);
  var warning = __webpack_require__(48);
  var ReactPropTypesSecret = __webpack_require__(49);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
exports.setVirtualParent = setVirtualParent;
/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
exports.getVirtualParent = getVirtualParent;
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && (allowVirtualParents && getVirtualParent(child) ||
        child.parentNode && child.parentNode);
}
exports.getParent = getParent;
/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent
 * @param allowVirtualChildren
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && isVirtualElement(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}
exports.getChildren = getChildren;
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = getParent(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
exports.elementContains = elementContains;
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
exports.setSSR = setSSR;
/**
 * Helper to get the window object.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_isSSR || typeof window === 'undefined') {
        return undefined;
    }
    else {
        return (rootElement &&
            rootElement.ownerDocument &&
            rootElement.ownerDocument.defaultView ?
            rootElement.ownerDocument.defaultView :
            window);
    }
}
exports.getWindow = getWindow;
/**
 * Helper to get the document object.
 *
 * @public
 */
function getDocument(rootElement) {
    if (_isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}
exports.getDocument = getDocument;
/**
 * Helper to get bounding client rect, works with window.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
exports.getRect = getRect;
/**
 * Finds the first parent element where the matchFunction returns true
 * @param element element to start searching at
 * @param matchFunction the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(getParent(element), matchFunction);
}
exports.findElementRecursive = findElementRecursive;
/**
 * Determines if an element, or any of its ancestors, contian the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = findElementRecursive(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}
exports.elementContainsAttribute = elementContainsAttribute;
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(7);
var React = __webpack_require__(2);
/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 */
var DelayedRender = /** @class */ (function (_super) {
    tslib_1.__extends(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? React.Children.only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0
    };
    return DelayedRender;
}(React.Component));
exports.DelayedRender = DelayedRender;


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: []
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());
exports.FabricPerformance = FabricPerformance;


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Const enum for keycodes.
 *
 * @public
 */
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
    KeyCodes[KeyCodes["tab"] = 9] = "tab";
    KeyCodes[KeyCodes["enter"] = 13] = "enter";
    KeyCodes[KeyCodes["shift"] = 16] = "shift";
    KeyCodes[KeyCodes["ctrl"] = 17] = "ctrl";
    KeyCodes[KeyCodes["alt"] = 18] = "alt";
    KeyCodes[KeyCodes["pauseBreak"] = 19] = "pauseBreak";
    KeyCodes[KeyCodes["capslock"] = 20] = "capslock";
    KeyCodes[KeyCodes["escape"] = 27] = "escape";
    KeyCodes[KeyCodes["space"] = 32] = "space";
    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
    KeyCodes[KeyCodes["end"] = 35] = "end";
    KeyCodes[KeyCodes["home"] = 36] = "home";
    KeyCodes[KeyCodes["left"] = 37] = "left";
    KeyCodes[KeyCodes["up"] = 38] = "up";
    KeyCodes[KeyCodes["right"] = 39] = "right";
    KeyCodes[KeyCodes["down"] = 40] = "down";
    KeyCodes[KeyCodes["insert"] = 45] = "insert";
    KeyCodes[KeyCodes["del"] = 46] = "del";
    KeyCodes[KeyCodes["zero"] = 48] = "zero";
    KeyCodes[KeyCodes["one"] = 49] = "one";
    KeyCodes[KeyCodes["two"] = 50] = "two";
    KeyCodes[KeyCodes["three"] = 51] = "three";
    KeyCodes[KeyCodes["four"] = 52] = "four";
    KeyCodes[KeyCodes["five"] = 53] = "five";
    KeyCodes[KeyCodes["six"] = 54] = "six";
    KeyCodes[KeyCodes["seven"] = 55] = "seven";
    KeyCodes[KeyCodes["eight"] = 56] = "eight";
    KeyCodes[KeyCodes["nine"] = 57] = "nine";
    KeyCodes[KeyCodes["a"] = 65] = "a";
    KeyCodes[KeyCodes["b"] = 66] = "b";
    KeyCodes[KeyCodes["c"] = 67] = "c";
    KeyCodes[KeyCodes["d"] = 68] = "d";
    KeyCodes[KeyCodes["e"] = 69] = "e";
    KeyCodes[KeyCodes["f"] = 70] = "f";
    KeyCodes[KeyCodes["g"] = 71] = "g";
    KeyCodes[KeyCodes["h"] = 72] = "h";
    KeyCodes[KeyCodes["i"] = 73] = "i";
    KeyCodes[KeyCodes["j"] = 74] = "j";
    KeyCodes[KeyCodes["k"] = 75] = "k";
    KeyCodes[KeyCodes["l"] = 76] = "l";
    KeyCodes[KeyCodes["m"] = 77] = "m";
    KeyCodes[KeyCodes["n"] = 78] = "n";
    KeyCodes[KeyCodes["o"] = 79] = "o";
    KeyCodes[KeyCodes["p"] = 80] = "p";
    KeyCodes[KeyCodes["q"] = 81] = "q";
    KeyCodes[KeyCodes["r"] = 82] = "r";
    KeyCodes[KeyCodes["s"] = 83] = "s";
    KeyCodes[KeyCodes["t"] = 84] = "t";
    KeyCodes[KeyCodes["u"] = 85] = "u";
    KeyCodes[KeyCodes["v"] = 86] = "v";
    KeyCodes[KeyCodes["w"] = 87] = "w";
    KeyCodes[KeyCodes["x"] = 88] = "x";
    KeyCodes[KeyCodes["y"] = 89] = "y";
    KeyCodes[KeyCodes["z"] = 90] = "z";
    KeyCodes[KeyCodes["leftWindow"] = 91] = "leftWindow";
    KeyCodes[KeyCodes["rightWindow"] = 92] = "rightWindow";
    KeyCodes[KeyCodes["select"] = 93] = "select";
    KeyCodes[KeyCodes["zero_numpad"] = 96] = "zero_numpad";
    KeyCodes[KeyCodes["one_numpad"] = 97] = "one_numpad";
    KeyCodes[KeyCodes["two_numpad"] = 98] = "two_numpad";
    KeyCodes[KeyCodes["three_numpad"] = 99] = "three_numpad";
    KeyCodes[KeyCodes["four_numpad"] = 100] = "four_numpad";
    KeyCodes[KeyCodes["five_numpad"] = 101] = "five_numpad";
    KeyCodes[KeyCodes["six_numpad"] = 102] = "six_numpad";
    KeyCodes[KeyCodes["seven_numpad"] = 103] = "seven_numpad";
    KeyCodes[KeyCodes["eight_numpad"] = 104] = "eight_numpad";
    KeyCodes[KeyCodes["nine_numpad"] = 105] = "nine_numpad";
    KeyCodes[KeyCodes["multiply"] = 106] = "multiply";
    KeyCodes[KeyCodes["add"] = 107] = "add";
    KeyCodes[KeyCodes["subtract"] = 109] = "subtract";
    KeyCodes[KeyCodes["decimalPoint"] = 110] = "decimalPoint";
    KeyCodes[KeyCodes["divide"] = 111] = "divide";
    KeyCodes[KeyCodes["f1"] = 112] = "f1";
    KeyCodes[KeyCodes["f2"] = 113] = "f2";
    KeyCodes[KeyCodes["f3"] = 114] = "f3";
    KeyCodes[KeyCodes["f4"] = 115] = "f4";
    KeyCodes[KeyCodes["f5"] = 116] = "f5";
    KeyCodes[KeyCodes["f6"] = 117] = "f6";
    KeyCodes[KeyCodes["f7"] = 118] = "f7";
    KeyCodes[KeyCodes["f8"] = 119] = "f8";
    KeyCodes[KeyCodes["f9"] = 120] = "f9";
    KeyCodes[KeyCodes["f10"] = 121] = "f10";
    KeyCodes[KeyCodes["f11"] = 122] = "f11";
    KeyCodes[KeyCodes["f12"] = 123] = "f12";
    KeyCodes[KeyCodes["numlock"] = 144] = "numlock";
    KeyCodes[KeyCodes["scrollLock"] = 145] = "scrollLock";
    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
    KeyCodes[KeyCodes["equalSign"] = 187] = "equalSign";
    KeyCodes[KeyCodes["comma"] = 188] = "comma";
    KeyCodes[KeyCodes["dash"] = 189] = "dash";
    KeyCodes[KeyCodes["period"] = 190] = "period";
    KeyCodes[KeyCodes["forwardSlash"] = 191] = "forwardSlash";
    KeyCodes[KeyCodes["graveAccent"] = 192] = "graveAccent";
    KeyCodes[KeyCodes["openBracket"] = 219] = "openBracket";
    KeyCodes[KeyCodes["backSlash"] = 220] = "backSlash";
    KeyCodes[KeyCodes["closeBracket"] = 221] = "closeBracket";
    KeyCodes[KeyCodes["singleQuote"] = 222] = "singleQuote";
})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Rectangle helper class.
 *
 * @public
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
exports.findIndex = findIndex;
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
exports.find = find;
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
exports.createArray = createArray;
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns {any[][]} - A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
exports.toMatrix = toMatrix;
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
exports.removeIndex = removeIndex;
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
exports.replaceElement = replaceElement;
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
exports.addElementAtIndex = addElementAtIndex;
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
exports.flatten = flatten;


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}
exports.assertNever = assertNever;


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 * @deprecated This has been deprecated in favor of using arrow function properties
 */
// tslint:disable-next-line:no-any
function autobind(target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || (fn && this === fn.prototype) || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn && fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        // tslint:disable-next-line:no-any
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}
exports.autobind = autobind;


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(8);
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 */
function classNamesFunction() {
    // TODO: memoize.
    return function (getStyles, styleProps) { return index_1.mergeStyleSets(getStyles && getStyles(styleProps)); };
}
exports.classNamesFunction = classNamesFunction;


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styleToClassName_1 = __webpack_require__(18);
var extractStyleParts_1 = __webpack_require__(51);
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = extractStyleParts_1.extractStyleParts(args), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(styleToClassName_1.styleToClassName(objects));
    }
    return classes.join(' ');
}
exports.mergeStyles = mergeStyles;


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function kebabRules(rulePairs, index) {
    rulePairs[index] = rulePairs[index].replace(/([A-Z])/g, '-$1').toLowerCase();
}
exports.kebabRules = kebabRules;


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getVendorSettings_1 = __webpack_require__(122);
var autoPrefixNames = {
    'user-select': 1
};
function prefixRules(rulePairs, index) {
    var vendorSettings = getVendorSettings_1.getVendorSettings();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}
exports.prefixRules = prefixRules;


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
            };
        }
    }
    return _vendorSettings;
}
exports.getVendorSettings = getVendorSettings;
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}
exports.setVendorSettings = setVendorSettings;


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex-basis',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom'
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var unit = (NON_PIXEL_NUMBER_PROPS.indexOf(name) === -1) ? 'px' : '';
        rulePairs[index + 1] = "" + value + unit;
    }
}
exports.provideUnits = provideUnits;


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extractStyleParts_1 = __webpack_require__(51);
var concatStyleSets_1 = __webpack_require__(52);
var styleToClassName_1 = __webpack_require__(18);
/**
 * Allows you to pass in 1 or more sets of areas which will return a merged
 * set of classes.
 *
 * @public
 */
function mergeStyleSets() {
    var cssSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cssSets[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var classNameSet = {};
    var classMap = {};
    var cssSet = cssSets[0];
    if (cssSet) {
        if (cssSets.length > 1) {
            cssSet = concatStyleSets_1.concatStyleSets.apply(void 0, cssSets);
        }
        var registrations = [];
        for (var prop in cssSet) {
            if (cssSet.hasOwnProperty(prop)) {
                var args = cssSet[prop];
                // tslint:disable-next-line:no-any
                var _a = extractStyleParts_1.extractStyleParts(args), classes = _a.classes, objects = _a.objects;
                var registration = styleToClassName_1.styleToRegistration({ displayName: prop }, objects);
                registrations.push(registration);
                if (registration) {
                    classMap[prop] = registration.className;
                    classNameSet[prop] = classes.concat([registration.className]).join(' ');
                }
            }
        }
        for (var _b = 0, registrations_1 = registrations; _b < registrations_1.length; _b++) {
            var registration = registrations_1[_b];
            if (registration) {
                styleToClassName_1.applyRegistration(registration, classMap);
            }
        }
    }
    return classNameSet;
}
exports.mergeStyleSets = mergeStyleSets;


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(13);
var styleToClassName_1 = __webpack_require__(18);
/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    Stylesheet_1.Stylesheet.getInstance().insertRule("@font-face{" + styleToClassName_1.serializeRuleEntries(font) + "}");
}
exports.fontFace = fontFace;


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(13);
var styleToClassName_1 = __webpack_require__(18);
/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', styleToClassName_1.serializeRuleEntries(timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}");
    // If needed later, we would add vendor prefixes here.
    return name;
}
exports.keyframes = keyframes;


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if ((arg.hasOwnProperty('toString') && typeof (arg.toString) === 'function')) {
                classes.push(arg.toString());
            }
            else {
                // tslint:disable-next-line:no-any
                for (var key in arg) {
                    // tslint:disable-next-line:no-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
exports.css = css;


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(7);
var React = __webpack_require__(2);
var PropTypes = __webpack_require__(15);
var Customizations_1 = __webpack_require__(26);
var hoistStatics_1 = __webpack_require__(53);
function customizable(scope, fields
// tslint:disable-next-line:no-any
) {
    // tslint:disable-next-line:no-shadowed-variable
    return function customizableFactory(
    // tslint:disable-next-line:no-any
    ComposedComponent
    // tslint:disable-next-line:no-any
    ) {
        var resultClass = (_a = /** @class */ (function (_super) {
                tslib_1.__extends(ComponentWithInjectedProps, _super);
                // tslint:disable-next-line:no-any
                function ComponentWithInjectedProps(props, context) {
                    var _this = _super.call(this, props, context) || this;
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    Customizations_1.Customizations.observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    Customizations_1.Customizations.unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var defaultProps = Customizations_1.Customizations.getSettings(fields, scope, this.context.customizations);
                    return (
                    // tslint:disable-next-line:no-any
                    React.createElement(ComposedComponent, tslib_1.__assign({}, defaultProps, this.props)));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(React.Component)),
            _a.displayName = 'Customized' + scope,
            _a.contextTypes = {
                customizations: PropTypes.object
            },
            _a);
        return hoistStatics_1.hoistStatics(ComposedComponent, resultClass);
        var _a;
    };
}
exports.customizable = customizable;


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-string-literal */
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(11);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true, false, false, includeElementsInFocusZones);
}
exports.getFirstFocusable = getFirstFocusable;
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones);
}
exports.getLastFocusable = getLastFocusable;
/**
 * Gets the last tabbable element.
 *
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones, false, true);
}
exports.getLastTabbable = getLastTabbable;
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        element.focus();
        return true;
    }
    return false;
}
exports.focusFirstChild = focusFirstChild;
/**
 * Traverse to find the previous element.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement ||
        (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && (isElementTabbable(childMatch, true))) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
exports.getPreviousElement = getPreviousElement;
/**
 * Traverse to find the next focusable element.
 *
 * @public
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot) {
    if (!currentElement ||
        (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot);
    }
    return null;
}
exports.getNextElement = getNextElement;
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // tslint:disable-next-line:no-any
        element.isVisible === true); // used as a workaround for testing.
}
exports.isElementVisible = isElementVisible;
/**
 * Determines if an element can receive focus.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            (element.tagName === 'BUTTON') ||
            (element.tagName === 'INPUT') ||
            (element.tagName === 'TEXTAREA') ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet ||
            element.getAttribute && element.getAttribute('role') === 'button');
    return checkTabIndex ? (tabIndex !== -1) && result : result;
}
exports.isElementTabbable = isElementTabbable;
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
exports.isElementFocusZone = isElementFocusZone;
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
exports.isElementFocusSubZone = isElementFocusSubZone;
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = dom_1.getDocument(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && dom_1.elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
exports.doesElementContainFocus = doesElementContainFocus;
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return dom_1.elementContainsAttribute(element, noWrapDataAttribute) === 'true' ? false : true;
}
exports.shouldWrapFocus = shouldWrapFocus;


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(119);
/**
 * Injection mode for the stylesheet.
 *
 * @public
 */
var InjectionMode;
(function (InjectionMode) {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    InjectionMode[InjectionMode["none"] = 0] = "none";
    /**
     * Inserts rules using the insertRule api.
     */
    InjectionMode[InjectionMode["insertNode"] = 1] = "insertNode";
    /**
     * Appends rules using appendChild.
     */
    InjectionMode[InjectionMode["appendChild"] = 2] = "appendChild";
})(InjectionMode = exports.InjectionMode || (exports.InjectionMode = {}));
var STYLESHEET_SETTING = '__stylesheet__';
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._config = tslib_1.__assign({ injectionMode: 1 /* insertNode */, defaultPrefix: 'css' }, config);
        this.reset();
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        // tslint:disable-next-line:no-any
        var win = typeof window !== 'undefined' ? window : {};
        _stylesheet = win[STYLESHEET_SETTING];
        if (!_stylesheet) {
            // tslint:disable-next-line:no-string-literal
            var fabricConfig = (win && win['FabricConfig']) || {};
            _stylesheet = win[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = tslib_1.__assign({}, this._config, config);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var prefix = displayName || this._config.defaultPrefix;
        return prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return (entry && entry.args);
    };
    /**
   * Gets the arguments associated with a given classname which was
   * previously registered using cacheClassName.
   */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return (entry && entry.rules);
    };
    /**
     * Inserts a css rule into the stylesheet.
     */
    Stylesheet.prototype.insertRule = function (rule) {
        var element = this._getElement();
        var injectionMode = element ? this._config.injectionMode : 0 /* none */;
        switch (injectionMode) {
            case 1 /* insertNode */:
                var sheet = element.sheet;
                try {
                    // tslint:disable-next-line:no-any
                    sheet.insertRule(rule, sheet.cssRules.length);
                }
                catch (e) {
                    /* no-op on errors */
                }
                break;
            case 2 /* appendChild */:
                _createStyleElement(rule);
                break;
            default:
                this._rules.push(rule);
                break;
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function () {
        return (this._rules.join('') || '') + (this._rulesToInsert.join('') || '');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        if (this._timerId) {
            clearTimeout(this._timerId);
            this._timerId = 0;
        }
    };
    Stylesheet.prototype._getElement = function () {
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = _createStyleElement();
        }
        return this._styleElement;
    };
    return Stylesheet;
}());
exports.Stylesheet = Stylesheet;
function _createStyleElement(content) {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('data-merge-styles', 'true');
    styleElement.type = 'text/css';
    if (content) {
        styleElement.appendChild(document.createTextNode(content));
    }
    document.head.appendChild(styleElement);
    return styleElement;
}


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
// tslint:disable-next-line:no-any
function hoistMethods(destination, source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () { source[methodName].apply(source, arguments); };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
exports.hoistMethods = hoistMethods;
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any
function unhoistMethods(source, methodNames) {
    methodNames
        .forEach(function (methodName) { return delete source[methodName]; });
}
exports.unhoistMethods = unhoistMethods;


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) || PHONENUMBER_REGEX.test(displayName)) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}
exports.getInitials = getInitials;


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.localStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        window.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines the distance between two points.
 *
 * @public
 */
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
exports.getDistanceBetweenPoints = getDistanceBetweenPoints;
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale
    };
}
exports.fitContentToBounds = fitContentToBounds;
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
exports.calculatePrecision = calculatePrecision;
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value The value that is being rounded.
 * @param precision The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}
exports.precisionRound = precisionRound;


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = (typeof WeakMap === 'undefined') ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
exports.setMemoizeWeakMap = setMemoizeWeakMap;
/**
 * Memoize decorator to be used on class methods. Note that the "this" reference
 * will be inaccessible within a memoized method, given that a cached method's this
 * would not be instance specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
exports.memoize = memoize;
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    var rootNode;
    var cacheSize = 0;
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined || (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
exports.memoizeFunction = memoizeFunction;
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null
    };
}


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
exports.hasHorizontalOverflow = hasHorizontalOverflow;
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
exports.hasVerticalOverflow = hasVerticalOverflow;
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}
exports.hasOverflow = hasOverflow;


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(55);
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
exports.baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel'
];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
exports.baseElementProperties = [
    'defaultChecked',
    'defaultValue',
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'children',
    'classID',
    'className',
    'cols',
    'colSpan',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'role',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap'
];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
exports.htmlElementProperties = exports.baseElementProperties.concat(exports.baseElementEvents);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
exports.anchorProperties = exports.htmlElementProperties.concat([
    'href',
    'target'
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
exports.buttonProperties = exports.htmlElementProperties.concat([
    'disabled'
]);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
exports.divProperties = exports.htmlElementProperties.concat(['align', 'noWrap']);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
exports.inputProperties = exports.buttonProperties;
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
exports.textAreaProperties = exports.buttonProperties;
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
exports.imageProperties = exports.divProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return object_1.filteredAssign(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) && ((propName.indexOf('data-') === 0) ||
            (propName.indexOf('aria-') === 0) ||
            (allowedPropNames.indexOf(propName) >= 0)));
    }, {}, props);
}
exports.getNativeProps = getNativeProps;


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
exports.getResourceUrl = getResourceUrl;
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}
exports.setBaseUrl = setBaseUrl;


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(11);
var sessionStorage_1 = __webpack_require__(139);
var rtlifyRules_1 = __webpack_require__(50);
var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = sessionStorage_1.getItem(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = dom_1.getDocument();
        if (_isRTL === undefined && doc) {
            _isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
            rtlifyRules_1.setRTL(_isRTL);
        }
    }
    return !!_isRTL;
}
exports.getRTL = getRTL;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        sessionStorage_1.setItem(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    rtlifyRules_1.setRTL(_isRTL);
}
exports.setRTL = setRTL;
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === 37 /* left */) {
            key = 39 /* right */;
        }
        else if (key === 39 /* right */) {
            key = 37 /* left */;
        }
    }
    return key;
}
exports.getRTLSafeKeyCode = getRTLSafeKeyCode;


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.sessionStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    try {
        window.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * Example "I love {0} every {1}".format("CXP") will result in a Debug Exception.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        // tslint:disable-next-line:no-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return (s.replace(FORMAT_REGEX, replace_func));
}
exports.format = format;


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(7);
var React = __webpack_require__(2);
var index_1 = __webpack_require__(8);
/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets. Example:
 *
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   {
 *     getStyles: props => ({ root: { background: 'red' }})
 *   }
 * );
 * ```
 *
 */
function styled(Component, getBaseStyles, getProps) {
    var Wrapped = (function (componentProps) {
        var getStyles = function (styleProps) { return index_1.concatStyleSets(getBaseStyles && getBaseStyles(styleProps), componentProps && componentProps.getStyles && componentProps.getStyles(styleProps)); };
        var additionalProps = getProps ? getProps(componentProps) : {};
        return (React.createElement(Component, tslib_1.__assign({}, additionalProps, componentProps, { getStyles: getStyles })));
    });
    Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
    return Wrapped;
}
exports.styled = styled;


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createRef() {
    var refObject = (function (element) {
        refObject.value = element;
    });
    refObject.value = null;
    return refObject;
}
exports.createRef = createRef;


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(144), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable */
var React = __webpack_require__(2);
/* tslint:enable */
var Icon_Props_1 = __webpack_require__(56);
var Image_1 = __webpack_require__(70);
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(5);
var Icon_classNames_1 = __webpack_require__(159);
exports.Icon = function (props) {
    var ariaLabel = props.ariaLabel, className = props.className, styles = props.styles, iconName = props.iconName;
    var classNames = Icon_classNames_1.getClassNames(styles);
    if (props.iconType === Icon_Props_1.IconType.image || props.iconType === Icon_Props_1.IconType.Image) {
        var containerClassName = Utilities_1.css('ms-Icon', 'ms-Icon-imageContainer', classNames.root, classNames.imageContainer, className);
        return (React.createElement("div", { className: Utilities_1.css(containerClassName, classNames.root) },
            React.createElement(Image_1.Image, tslib_1.__assign({}, props.imageProps))));
    }
    else if (typeof iconName === 'string' && iconName.length === 0) {
        return (React.createElement("i", tslib_1.__assign({ "aria-label": ariaLabel }, (ariaLabel ? {} : {
            role: 'presentation',
            'aria-hidden': true
        }), Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties), { className: Utilities_1.css('ms-Icon ms-Icon-placeHolder', classNames.rootHasPlaceHolder, props.className) })));
    }
    else {
        var iconDefinition = Styling_1.getIcon(iconName) || {
            subset: {
                className: undefined
            },
            code: undefined
        };
        return (React.createElement("i", tslib_1.__assign({ "aria-label": ariaLabel }, (ariaLabel ? {} : {
            role: 'presentation',
            'aria-hidden': true,
            'data-icon-name': iconName,
        }), Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties), { className: Utilities_1.css('ms-Icon', // dangerous?
            iconDefinition.subset.className, classNames.root, props.className) }), iconDefinition.code));
    }
};


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(19);
tslib_1.__exportStar(__webpack_require__(146), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
tslib_1.__exportStar(__webpack_require__(57), exports);


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationClassNames_1 = __webpack_require__(147);
exports.AnimationClassNames = AnimationClassNames_1.AnimationClassNames;
var FontClassNames_1 = __webpack_require__(156);
exports.FontClassNames = FontClassNames_1.FontClassNames;
var ColorClassNames_1 = __webpack_require__(157);
exports.ColorClassNames = ColorClassNames_1.ColorClassNames;


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(28);
var index_2 = __webpack_require__(20);
exports.AnimationClassNames = index_1.buildClassMap(index_2.AnimationStyles);


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MergeStyles_1 = __webpack_require__(57);
/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // tslint:disable-next-line:no-any
                        className_1 = MergeStyles_1.mergeStyles(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}
exports.buildClassMap = buildClassMap;


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(8);
var icons_1 = __webpack_require__(58);
var defaultIconStyles = {
    display: 'inline-block'
};
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = icons_1.getIcon(name);
    if (icon) {
        className = index_1.mergeStyles(icon.subset.className, defaultIconStyles, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\""
                }
            }
        });
    }
    return className;
}
exports.getIconClassName = getIconClassName;


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(107)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(8);
/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = index_1.keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
});
var FADE_OUT = index_1.keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 }
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = index_1.keyframes({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_DOWN98 = index_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' },
});
var SCALE_DOWN100 = index_1.keyframes({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_UP103 = index_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' }
});
var ROTATE90 = index_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' }
});
var ROTATE_N90 = index_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' }
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
exports.AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
exports.AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)
    // expandCollapse 100/200/400, delay 100/200
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both'
    };
}
function _createSlideInX(fromX) {
    return index_1.keyframes({
        from: { transform: "translate3d(" + fromX + "px,0,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideInY(fromY) {
    return index_1.keyframes({
        from: { transform: "translate3d(0," + fromY + "px,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideOutX(toX) {
    return index_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" }
    });
}
function _createSlideOutY(toY) {
    return index_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" }
    });
}


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommonStyles_1 = __webpack_require__(61);
/**
 * Generates a focus style which can be used to define an :after focus border.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border.
 * @param color - The color for the border.
 * @param position - The positioning applied to the container. Must
 * be 'relative' or 'absolute' so that the focus border can live around it.
 * @param highContrastStyle - Style for high contrast mode.
 * @returns The style object.
 */
function getFocusStyle(theme, inset, position, highContrastStyle) {
    if (inset === void 0) { inset = 0; }
    if (position === void 0) { position = 'relative'; }
    if (highContrastStyle === void 0) { highContrastStyle = undefined; }
    return {
        outline: 'transparent',
        position: position,
        selectors: {
            '::-moz-focus-inner': {
                border: '0'
            },
            '.ms-Fabric.is-focusVisible &:focus:after': {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: '1px solid ' + theme.palette.white,
                outline: '1px solid ' + theme.palette.neutralSecondary,
                zIndex: 1,
                selectors: (_a = {},
                    _a[CommonStyles_1.HighContrastSelector] = highContrastStyle,
                    _a)
            }
        }
    };
    var _a;
}
exports.getFocusStyle = getFocusStyle;
/**
 * Generates style to clear browser specific focus styles.
 */
function focusClear() {
    return {
        selectors: {
            '&::-moz-focus-inner': {
                // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
                border: 0
            },
            '&': {
                // Clear browser specific focus styles and use transparent as placeholder for focus style
                outline: 'transparent'
            }
        }
    };
}
exports.focusClear = focusClear;


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden'
};


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(19);
var Customizations_1 = __webpack_require__(26);
var DefaultFontStyles_1 = __webpack_require__(59);
var DefaultPalette_1 = __webpack_require__(29);
var load_themed_styles_1 = __webpack_require__(154);
var _theme = {
    palette: DefaultPalette_1.DefaultPalette,
    semanticColors: _makeSemanticColorsFromPalette(DefaultPalette_1.DefaultPalette, false),
    fonts: DefaultFontStyles_1.DefaultFontStyles,
    isInverted: false
};
var _onThemeChangeCallbacks = [];
exports.ThemeSettingName = 'theme';
if (!Customizations_1.Customizations.getSettings([exports.ThemeSettingName]).theme) {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable:no-string-literal no-any
    if (win && win['FabricConfig'] && win['FabricConfig'].theme) {
        _theme = createTheme(win['FabricConfig'].theme);
    }
    // tslint:enable:no-string-literal no-any
    // Set the default theme.
    Customizations_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
}
/**
 * Gets the theme object.
 */
function getTheme() {
    return _theme;
}
exports.getTheme = getTheme;
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
exports.registerOnThemeChangeCallback = registerOnThemeChangeCallback;
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
exports.removeOnThemeChangeCallback = removeOnThemeChangeCallback;
/**
 * Applies the theme, while filling in missing slots.
 */
function loadTheme(theme) {
    _theme = createTheme(theme);
    // Invoke the legacy method of theming the page as well.
    load_themed_styles_1.loadTheme(tslib_1.__assign({}, _theme.palette, _theme.semanticColors));
    Customizations_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
    var _a;
}
exports.loadTheme = loadTheme;
/**
 * Creates a custom theme definition which can be used with the Customizer.
 */
function createTheme(theme) {
    var newPalette = tslib_1.__assign({}, DefaultPalette_1.DefaultPalette, theme.palette);
    if (!theme.palette || !theme.palette.accent) {
        newPalette.accent = newPalette.themePrimary;
    }
    // mix in custom overrides with good slots first, since custom overrides might be used in fixing deprecated slots
    var newSemanticColors = tslib_1.__assign({}, _makeSemanticColorsFromPalette(newPalette, !!theme.isInverted), theme.semanticColors);
    newSemanticColors = tslib_1.__assign({}, _fixDeprecatedSlots(newSemanticColors), theme.semanticColors);
    return {
        palette: newPalette,
        fonts: tslib_1.__assign({}, DefaultFontStyles_1.DefaultFontStyles, theme.fonts),
        semanticColors: newSemanticColors,
        isInverted: !!theme.isInverted
    };
}
exports.createTheme = createTheme;
// Generates all the semantic slot colors based on the Fabric palette.
// We'll use these as fallbacks for semantic slots that the passed in theme did not define.
// This does NOT fix deprecated slots.
function _makeSemanticColorsFromPalette(p, isInverted) {
    var toReturn = {
        bodyBackground: p.white,
        bodyText: p.neutralPrimary,
        bodyTextChecked: p.black,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralTertiaryAlt,
        disabledBackground: p.neutralLighter,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiaryAlt,
        disabledSubtext: p.neutralQuaternary,
        focusBorder: p.black,
        errorText: !isInverted ? p.redDark : '#ff5f5f',
        warningText: !isInverted ? '#333333' : '#ffffff',
        errorBackground: !isInverted ? 'rgba(232, 17, 35, .2)' : 'rgba(232, 17, 35, .5)',
        blockingBackground: !isInverted ? 'rgba(234, 67, 0, .2)' : 'rgba(234, 67, 0, .5)',
        warningBackground: !isInverted ? 'rgba(255, 185, 0, .2)' : 'rgba(255, 251, 0, .6)',
        warningHighlight: !isInverted ? '#ffb900' : '#fff100',
        successBackground: !isInverted ? 'rgba(186, 216, 10, .2)' : 'rgba(186, 216, 10, .4)',
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralDark,
        inputBackground: p.white,
        inputBackgroundChecked: p.themePrimary,
        inputBackgroundCheckedHovered: p.themeDarkAlt,
        inputForegroundChecked: p.white,
        inputFocusBorderAlt: p.themePrimary,
        smallInputBorder: p.neutralSecondary,
        inputPlaceholderText: p.neutralSecondary,
        buttonBackground: p.neutralLighter,
        buttonBackgroundChecked: p.neutralTertiaryAlt,
        buttonBackgroundHovered: p.neutralLight,
        buttonBackgroundCheckedHovered: p.neutralLight,
        buttonBorder: 'transparent',
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.black,
        buttonTextChecked: p.neutralDark,
        buttonTextCheckedHovered: p.black,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundChecked: p.neutralLight,
        menuIcon: p.themePrimary,
        menuHeader: p.themePrimary,
        listBackground: p.white,
        listText: p.neutralPrimary,
        listItemBackgroundHovered: p.neutralLighter,
        listItemBackgroundChecked: p.neutralLight,
        listItemBackgroundCheckedHovered: p.neutralQuaternaryAlt,
        link: p.themePrimary,
        linkHovered: p.themeDarker,
        // Deprecated slots, fixed by _fixDeprecatedSlots()
        listTextColor: ''
    };
    return toReturn;
}
function _fixDeprecatedSlots(s) {
    s.listTextColor = s.listText;
    return s;
}
var _a;


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file mimics styles and mixins from _General.Mixins.scss
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
};


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(28);
var index_2 = __webpack_require__(20);
exports.FontClassNames = index_1.buildClassMap(index_2.DefaultFontStyles);


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(8);
var DefaultPalette_1 = __webpack_require__(29);
var index_2 = __webpack_require__(20);
exports.ColorClassNames = {};
for (var colorName in DefaultPalette_1.DefaultPalette) {
    if (DefaultPalette_1.DefaultPalette.hasOwnProperty(colorName)) {
        // Foreground color
        _defineGetter(exports.ColorClassNames, colorName, '', false, 'color');
        // Hover color
        _defineGetter(exports.ColorClassNames, colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(exports.ColorClassNames, colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(exports.ColorClassNames, colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(exports.ColorClassNames, colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(exports.ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            // tslint:disable-next-line:no-any
            var style = (_a = {}, _a[cssProperty] = index_2.getTheme().palette[colorName], _a);
            return index_1.mergeStyles(isHover ? { selectors: { ':hover': style } } : style).toString();
            var _a;
        },
        enumerable: true,
        configurable: true
    });
}


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": ".root_b5bfe99c{overflow:hidden}.rootIsMaximizeFrame_b5bfe99c{height:100%;width:100%}.image_b5bfe99c{display:block;opacity:0}.image_b5bfe99c.imageIsLoaded_b5bfe99c{opacity:1}.imageIsCenter_b5bfe99c,.imageIsContain_b5bfe99c,.imageIsCover_b5bfe99c{position:relative;top:50%}[dir='ltr'] .imageIsCenter_b5bfe99c,[dir='ltr'] .imageIsContain_b5bfe99c,[dir='ltr'] .imageIsCover_b5bfe99c{left:50%}[dir='rtl'] .imageIsCenter_b5bfe99c,[dir='rtl'] .imageIsContain_b5bfe99c,[dir='rtl'] .imageIsCover_b5bfe99c{right:50%}html[dir='ltr'] .imageIsCenter_b5bfe99c,html[dir='ltr'] .imageIsContain_b5bfe99c,html[dir='ltr'] .imageIsCover_b5bfe99c{-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}html[dir='rtl'] .imageIsCenter_b5bfe99c,html[dir='rtl'] .imageIsContain_b5bfe99c,html[dir='rtl'] .imageIsCover_b5bfe99c{-webkit-transform:translate(50%, -50%);transform:translate(50%, -50%)}.imageIsContain_b5bfe99c.imageIsLandscape_b5bfe99c{width:100%;height:auto}.imageIsContain_b5bfe99c.imageIsPortrait_b5bfe99c{height:100%;width:auto}.imageIsCover_b5bfe99c.imageIsLandscape_b5bfe99c{height:100%;width:auto}.imageIsCover_b5bfe99c.imageIsPortrait_b5bfe99c{width:100%;height:auto}.imageIsNone_b5bfe99c{height:auto;width:auto}.imageIsScaleWidthHeight_b5bfe99c{height:100%;width:100%}.imageIsScaleWidth_b5bfe99c{height:auto;width:100%}.imageIsScaleHeight_b5bfe99c{height:100%;width:auto}\n" }]);
exports.root = "root_b5bfe99c";
exports.rootIsMaximizeFrame = "rootIsMaximizeFrame_b5bfe99c";
exports.image = "image_b5bfe99c";
exports.imageIsLoaded = "imageIsLoaded_b5bfe99c";
exports.imageIsCenter = "imageIsCenter_b5bfe99c";
exports.imageIsContain = "imageIsContain_b5bfe99c";
exports.imageIsCover = "imageIsCover_b5bfe99c";
exports.imageIsLandscape = "imageIsLandscape_b5bfe99c";
exports.imageIsPortrait = "imageIsPortrait_b5bfe99c";
exports.imageIsNone = "imageIsNone_b5bfe99c";
exports.imageIsScaleWidthHeight = "imageIsScaleWidthHeight_b5bfe99c";
exports.imageIsScaleWidth = "imageIsScaleWidth_b5bfe99c";
exports.imageIsScaleHeight = "imageIsScaleHeight_b5bfe99c";


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(5);
var Utilities_1 = __webpack_require__(1);
exports.getClassNames = Utilities_1.memoizeFunction(function (customStyles) {
    return Styling_1.mergeStyleSets({
        root: {
            display: 'inline-block'
        },
        rootHasPlaceHolder: {
            width: '1em'
        },
        imageContainer: {
            overflow: 'hidden'
        }
    }, customStyles);
});


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-string-literal */
Object.defineProperty(exports, "__esModule", { value: true });
/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    // tslint:disable-next-line:no-any
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (
    // tslint:disable-next-line:no-any
    target, eventName, 
    // tslint:disable-next-line:no-any
    eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                Object.assign(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
                // tslint:disable-next-line:no-any
            }
            else if (document['createEventObject']) {
                // tslint:disable-next-line:no-any
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    // tslint:disable-next-line:no-any
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    // tslint:disable-next-line:no-any
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    // tslint:disable-next-line:no-any
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener ||
            (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, useCapture);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                useCapture: useCapture || false
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] = events[eventName] || {
                count: 0
            };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                // tslint:disable-next-line:no-any
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, useCapture);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) {
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                // tslint:disable-next-line:no-any
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    // tslint:disable-next-line:no-any
    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
                    }
                    else if (eventRecord.target.detachEvent) {
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    // tslint:disable-next-line:no-inferrable-types
    EventGroup._uniqueId = 0;
    return EventGroup;
}());
exports.EventGroup = EventGroup;


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(13);
var kebabRules_1 = __webpack_require__(120);
var prefixRules_1 = __webpack_require__(121);
var provideUnits_1 = __webpack_require__(123);
var rtlifyRules_1 = __webpack_require__(50);
var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            // tslint:disable-next-line:no-any
            for (var prop in arg) {
                if (prop === 'selectors') {
                    // tslint:disable-next-line:no-any
                    var selectors = arg.selectors;
                    for (var newSelector in selectors) {
                        if (selectors.hasOwnProperty(newSelector)) {
                            var selectorValue = selectors[newSelector];
                            if (newSelector.indexOf(':global(') === 0) {
                                newSelector = newSelector.replace(/:global\(|\)$/g, '');
                            }
                            else if (newSelector.indexOf('@media') === 0) {
                                newSelector = newSelector + '{' + currentSelector;
                            }
                            else if (newSelector.indexOf(':') === 0) {
                                newSelector = currentSelector + newSelector;
                            }
                            else if (newSelector.indexOf('&') < 0) {
                                newSelector = currentSelector + ' ' + newSelector;
                            }
                            extractRules([selectorValue], rules, newSelector);
                        }
                    }
                }
                else {
                    // Else, add the rule to the currentSelector.
                    if (prop === 'margin' || prop === 'padding') {
                        // tslint:disable-next-line:no-any
                        expandQuads(currentRules, prop, arg[prop]);
                    }
                    else {
                        // tslint:disable-next-line:no-any
                        currentRules[prop] = arg[prop];
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = (typeof value === 'string') ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(rules) {
    var serialized = [];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function serializeRuleEntries(ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        kebabRules_1.kebabRules(allEntries, i);
        provideUnits_1.provideUnits(allEntries, i);
        rtlifyRules_1.rtlifyRules(allEntries, i);
        prefixRules_1.prefixRules(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
exports.serializeRuleEntries = serializeRuleEntries;
function styleToRegistration() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(rules);
    if (key) {
        var stylesheet = Stylesheet_1.Stylesheet.getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
}
exports.styleToRegistration = styleToRegistration;
function applyRegistration(registration, classMap) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                // Fix selector using map.
                selector = selector.replace(/(&)|\$([\w-]+)\b/g, function (match, amp, cn) {
                    if (amp) {
                        return '.' + registration.className;
                    }
                    else if (cn) {
                        return '.' + ((classMap && classMap[cn]) || cn);
                    }
                    return '';
                });
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + ((selector.indexOf('@media') === 0) ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
exports.applyRegistration = applyRegistration;
function styleToClassName() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, args);
    if (registration) {
        applyRegistration(registration);
        return registration.className;
    }
    return '';
}
exports.styleToClassName = styleToClassName;


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(185), exports);


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(186), exports);


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var Icon_1 = __webpack_require__(6);
var stylesImport = __webpack_require__(187);
var styles = stylesImport;
var SearchBox = /** @class */ (function (_super) {
    tslib_1.__extends(SearchBox, _super);
    function SearchBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: props.value || '',
            hasFocus: false,
            id: Utilities_1.getId('SearchBox')
        };
        return _this;
    }
    SearchBox.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.value !== undefined) {
            this._latestValue = newProps.value;
            this.setState({
                value: newProps.value
            });
        }
    };
    SearchBox.prototype.render = function () {
        var _a = this.props, labelText = _a.labelText, className = _a.className, disabled = _a.disabled, underlined = _a.underlined;
        var _b = this.state, value = _b.value, hasFocus = _b.hasFocus, id = _b.id;
        return (React.createElement("div", tslib_1.__assign({ ref: this._resolveRef('_rootElement'), className: Utilities_1.css('ms-SearchBox', className, styles.root, (_c = {},
                _c['is-active ' + styles.rootIsActive] = hasFocus,
                _c['is-disabled ' + styles.rootIsDisabled] = disabled,
                _c['can-clear ' + styles.rootCanClear] = value.length > 0,
                _c['is-underlined ' + styles.rootIsUnderlined] = underlined,
                _c)) }, { onFocusCapture: this._onFocusCapture }),
            React.createElement("div", { className: Utilities_1.css('ms-SearchBox-iconContainer', styles.iconContainer) },
                React.createElement(Icon_1.Icon, { className: Utilities_1.css('ms-SearchBox-icon', styles.icon), iconName: 'Search' })),
            React.createElement("input", { id: id, className: Utilities_1.css('ms-SearchBox-field', styles.field), placeholder: labelText, onChange: this._onInputChange, onInput: this._onInputChange, onKeyDown: this._onKeyDown, value: value, disabled: this.props.disabled, "aria-label": this.props.ariaLabel ? this.props.ariaLabel : this.props.labelText, ref: this._resolveRef('_inputElement') }),
            React.createElement("div", { className: Utilities_1.css('ms-SearchBox-clearButton', styles.clearButton), onClick: this._onClear },
                React.createElement(Icon_1.Icon, { iconName: 'Clear' }))));
        var _c;
    };
    /**
     * Sets focus to the search box input field
     */
    SearchBox.prototype.focus = function () {
        if (this._inputElement) {
            this._inputElement.focus();
        }
    };
    SearchBox.prototype._onClear = function (ev) {
        this.props.onClear && this.props.onClear(ev);
        if (!ev.defaultPrevented) {
            this._latestValue = '';
            this.setState({
                value: ''
            });
            this._callOnChange('');
            ev.stopPropagation();
            ev.preventDefault();
            this._inputElement.focus();
        }
    };
    SearchBox.prototype._onFocusCapture = function (ev) {
        this.setState({
            hasFocus: true
        });
        this._events.on(this._rootElement, 'blur', this._onBlur, true);
        if (this.props.onFocus) {
            this.props.onFocus(ev);
        }
    };
    SearchBox.prototype._onKeyDown = function (ev) {
        switch (ev.which) {
            case 27 /* escape */:
                this.props.onEscape && this.props.onEscape(ev);
                if (!ev.defaultPrevented) {
                    this._onClear(ev);
                }
                break;
            case 13 /* enter */:
                if (this.props.onSearch && this.state.value.length > 0) {
                    this.props.onSearch(this.state.value);
                }
                break;
            default:
                this.props.onKeyDown && this.props.onKeyDown(ev);
                if (!ev.defaultPrevented) {
                    return;
                }
        }
        // We only get here if the keypress has been handled,
        // or preventDefault was called in case of default keyDown handler
        ev.preventDefault();
        ev.stopPropagation();
    };
    SearchBox.prototype._onBlur = function (ev) {
        this._events.off(this._rootElement, 'blur');
        this.setState({
            hasFocus: false
        });
        if (this.props.onBlur) {
            this.props.onBlur(ev);
        }
    };
    SearchBox.prototype._onInputChange = function (ev) {
        var value = this._inputElement.value;
        if (value === this._latestValue) {
            return;
        }
        this._latestValue = value;
        this.setState({ value: value });
        this._callOnChange(value);
    };
    SearchBox.prototype._callOnChange = function (newValue) {
        var _a = this.props, onChange = _a.onChange, onChanged = _a.onChanged;
        // Call @deprecated method.
        if (onChanged) {
            onChanged(newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    };
    SearchBox.defaultProps = {
        labelText: 'Search',
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBox.prototype, "_onClear", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBox.prototype, "_onFocusCapture", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBox.prototype, "_onKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBox.prototype, "_onBlur", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SearchBox.prototype, "_onInputChange", null);
    return SearchBox;
}(Utilities_1.BaseComponent));
exports.SearchBox = SearchBox;


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
load_themed_styles_1.loadStyles([{ "rawString": ".root_9229a156{font-size:14px;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:0 0 0 8px;border:1px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";height:32px}html[dir='rtl'] .root_9229a156{padding:0 8px 0 0}@media screen and (-ms-high-contrast: active){.root_9229a156{border:1px solid WindowText}}.iconContainer_9229a156{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;font-size:16px;width:32px;text-align:center;-webkit-transition:width .167s;transition:width .167s;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.icon_9229a156{opacity:1;-webkit-transition:opacity .167s 0s;transition:opacity .167s 0s}.field_9229a156{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:none;box-shadow:none;margin:0;padding:0;border:none;outline:none;font-weight:inherit;font-family:inherit;font-size:inherit;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background-color:transparent;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0px;overflow:hidden;text-overflow:ellipsis;padding-bottom:.5px}.field_9229a156::-ms-clear{display:none}.clearButton_9229a156{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:none;cursor:pointer;text-align:center;font-size:12px;-ms-flex-preferred-size:32px;flex-basis:32px;-ms-flex-negative:0;flex-shrink:0;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.root_9229a156.rootIsUnderlined_9229a156{border-width:0px 0px 1px 0px}.root_9229a156.rootIsUnderlined_9229a156.rootIsDisabled_9229a156{background-color:transparent}.root_9229a156.rootIsActive_9229a156{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.root_9229a156.rootIsActive_9229a156:hover{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.root_9229a156.rootIsActive_9229a156{border-color:Highlight}}.root_9229a156.rootIsActive_9229a156 .iconContainer_9229a156{width:4px;-webkit-transition:width .167s;transition:width .167s}.root_9229a156.rootIsActive_9229a156 .icon_9229a156{opacity:0;opacity:0 0s .167s}.rootIsDisabled_9229a156{border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.rootIsDisabled_9229a156 .iconContainer_9229a156{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.rootIsDisabled_9229a156 .field_9229a156{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.rootCanClear_9229a156 .clearButton_9229a156{display:-webkit-box;display:-ms-flexbox;display:flex}.root_9229a156:hover{border-color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.root_9229a156:hover .label_9229a156{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.root_9229a156:hover .label_9229a156 .iconContainer_9229a156{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}\n" }]);
exports.root = "root_9229a156";
exports.iconContainer = "iconContainer_9229a156";
exports.icon = "icon_9229a156";
exports.field = "field_9229a156";
exports.clearButton = "clearButton_9229a156";
exports.rootIsUnderlined = "rootIsUnderlined_9229a156";
exports.rootIsDisabled = "rootIsDisabled_9229a156";
exports.rootIsActive = "rootIsActive_9229a156";
exports.rootCanClear = "rootCanClear_9229a156";
exports.label = "label_9229a156";


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(19);
var AnimationStyles_1 = __webpack_require__(150);
exports.AnimationStyles = AnimationStyles_1.AnimationStyles;
exports.AnimationVariables = AnimationStyles_1.AnimationVariables;
var DefaultPalette_1 = __webpack_require__(29);
exports.DefaultPalette = DefaultPalette_1.DefaultPalette;
var DefaultFontStyles_1 = __webpack_require__(59);
exports.DefaultFontStyles = DefaultFontStyles_1.DefaultFontStyles;
exports.registerDefaultFontFaces = DefaultFontStyles_1.registerDefaultFontFaces;
var fonts_1 = __webpack_require__(60);
exports.FontSizes = fonts_1.FontSizes;
exports.FontWeights = fonts_1.FontWeights;
exports.IconFontSizes = fonts_1.IconFontSizes;
exports.createFontStyles = fonts_1.createFontStyles;
var getFocusStyle_1 = __webpack_require__(151);
exports.getFocusStyle = getFocusStyle_1.getFocusStyle;
exports.focusClear = getFocusStyle_1.focusClear;
var hiddenContentStyle_1 = __webpack_require__(152);
exports.hiddenContentStyle = hiddenContentStyle_1.hiddenContentStyle;
var theme_1 = __webpack_require__(153);
exports.ThemeSettingName = theme_1.ThemeSettingName;
exports.getTheme = theme_1.getTheme;
exports.loadTheme = theme_1.loadTheme;
exports.createTheme = theme_1.createTheme;
exports.registerOnThemeChangeCallback = theme_1.registerOnThemeChangeCallback;
exports.removeOnThemeChangeCallback = theme_1.removeOnThemeChangeCallback;
tslib_1.__exportStar(__webpack_require__(61), exports);
var GeneralStyles_1 = __webpack_require__(155);
exports.normalize = GeneralStyles_1.normalize;


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _warningCallback = undefined;
/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    for (var propName in deprecationMap) {
        if (props && propName in props) {
            var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
            var replacementPropName = deprecationMap[propName];
            if (replacementPropName) {
                deprecationMessage += " Use '" + replacementPropName + "' instead.";
            }
            warn(deprecationMessage);
        }
    }
}
exports.warnDeprecations = warnDeprecations;
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    for (var propName in exclusiveMap) {
        if (props && propName in props) {
            var propInExclusiveMapValue = exclusiveMap[propName];
            if (propInExclusiveMapValue && propInExclusiveMapValue in props) {
                warn(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
            }
        }
    }
}
exports.warnMutuallyExclusive = warnMutuallyExclusive;
/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
*/
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true) {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                warn(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
exports.warnConditionallyRequiredProps = warnConditionallyRequiredProps;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback) {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
exports.warn = warn;
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}
exports.setWarningCallback = setWarningCallback;


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(7);
var GlobalSettings_1 = __webpack_require__(27);
var EventGroup_1 = __webpack_require__(17);
var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {} };
var _allSettings = GlobalSettings_1.GlobalSettings.getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {}
});
var _events = new EventGroup_1.EventGroup(_allSettings);
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    // tslint:disable-next-line:no-any
    Customizations.applySettings = function (settings) {
        _allSettings.settings = tslib_1.__assign({}, _allSettings.settings, settings);
        Customizations._raiseChange();
    };
    // tslint:disable-next-line:no-any
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = tslib_1.__assign({}, _allSettings.scopedSettings[scopeName], settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings
    // tslint:disable-next-line:no-any
    ) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        // tslint:disable-next-line:no-any
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] = (localScopedSettings[property] ||
                localSettings.settings[property] ||
                globalScopedSettings[property] ||
                _allSettings.settings[property]);
        }
        return settings;
    };
    Customizations.observe = function (onChange) {
        _events.on(_allSettings, 'change', onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events.off(_allSettings, 'change', onChange);
    };
    Customizations._raiseChange = function () {
        _events.raise('change');
    };
    return Customizations;
}());
exports.Customizations = Customizations;


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
// tslint:disable-next-line:no-any
var _globalSettings = {};
var _counter = 0;
if (typeof window !== 'undefined') {
    // tslint:disable-next-line:no-any
    var win = window;
    _globalSettings = win[GLOBAL_SETTINGS_PROP_NAME] = win[GLOBAL_SETTINGS_PROP_NAME] || (_a = {},
        _a[CALLBACK_STATE_PROP_NAME] = {},
        _a);
}
var _callbacks = _globalSettings[CALLBACK_STATE_PROP_NAME];
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        if (_globalSettings[key] === undefined) {
            _globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return _globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var oldValue = _globalSettings[key];
        if (value !== oldValue) {
            _globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key
            };
            for (var id in _callbacks) {
                if (_callbacks.hasOwnProperty(id)) {
                    _callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        _callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        delete _callbacks[cb.__id__];
    };
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;
var _a;


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buildClassMap_1 = __webpack_require__(148);
exports.buildClassMap = buildClassMap_1.buildClassMap;
var icons_1 = __webpack_require__(58);
exports.getIcon = icons_1.getIcon;
exports.registerIcons = icons_1.registerIcons;
exports.registerIconAlias = icons_1.registerIconAlias;
exports.setIconOptions = icons_1.setIconOptions;
var getIconClassName_1 = __webpack_require__(149);
exports.getIconClassName = getIconClassName_1.getIconClassName;


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// When adding or removing a color, make sure you keep this consistent with IColorClassNames by adding the color variants.
exports.DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralPrimaryAlt: '#3c3c3c',
    neutralSecondary: '#666666',
    neutralTertiary: '#a6a6a6',
    neutralTertiaryAlt: '#c8c8c8',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralLighterAlt: '#f8f8f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a80000',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () { };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () { return; };
            /* tslint:disable:no-any */
            noOpFunction.flush = (function () { return null; });
            /* tslint:enable:no-any */
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = (new Date).getTime();
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(new Date().getTime());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = window.requestAnimationFrame ?
                window.requestAnimationFrame(animationFrameCallback) :
                window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    // tslint:disable-next-line:no-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());
exports.Async = Async;


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(11);
var styles = __webpack_require__(103);
var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = dom_1.getDocument();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(styles.scrollDisabled);
    }
    _bodyScrollDisabledCount++;
}
exports.disableBodyScroll = disableBodyScroll;
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = dom_1.getDocument();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(styles.scrollDisabled);
        }
        _bodyScrollDisabledCount--;
    }
}
exports.enableBodyScroll = enableBodyScroll;
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === document.body) {
        // tslint:disable-next-line:no-any
        el = window;
    }
    return el;
}
exports.findScrollableParent = findScrollableParent;


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(7);
var React = __webpack_require__(2);
var Async_1 = __webpack_require__(43);
var EventGroup_1 = __webpack_require__(17);
var warn_1 = __webpack_require__(25);
/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 */
var BaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseComponent, _super);
    // tslint:enable:variable-name
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // tslint:disable-next-line:no-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._shouldUpdateComponentRef = true;
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentWillMount',
            'componentDidMount',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentWillReceiveProps',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component will receive props, make sure the componentRef is updated.
     */
    // tslint:disable-next-line:no-any
    BaseComponent.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this._updateComponentRef(this.props, newProps);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._updateComponentRef(undefined, this.props);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec((this).constructor.toString());
                this.__className = (results && results.length > 1) ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new Async_1.Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_1.EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from `@uifabric/utilities`
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            // tslint:disable-next-line:no-any
            this.__resolves[refName] = function (ref) {
                // tslint:disable-next-line:no-any
                return _this[refName] = ref;
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        if (this._shouldUpdateComponentRef &&
            ((!currentProps && newProps.componentRef) ||
                (currentProps && currentProps.componentRef !== newProps.componentRef))) {
            if (currentProps && currentProps.componentRef) {
                currentProps.componentRef(null);
            }
            if (newProps.componentRef) {
                newProps.componentRef(this);
            }
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        warn_1.warnDeprecations(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        warn_1.warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        warn_1.warnConditionallyRequiredProps(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    return BaseComponent;
}(React.Component));
exports.BaseComponent = BaseComponent;
/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    // tslint:disable:no-any
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    // tslint:enable:no-any
    if (classMethod || prototypeMethod) {
        // tslint:disable-next-line:no-any
        obj[methodName] = function () {
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, arguments);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, arguments);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() { return null; }
exports.nullRender = nullRender;


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(46);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(145), exports);


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize'
};
var _rtl = getRTL();
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    _rtl = isRTL;
}
exports.setRTL = setRTL;
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl = (typeof document !== 'undefined' &&
            !!document.documentElement &&
            document.documentElement.getAttribute('dir') === 'rtl');
    }
    return _rtl;
}
exports.getRTL = getRTL;
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(rulePairs, index) {
    if (getRTL()) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
exports.rtlifyRules = rtlifyRules;
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}
var _a;


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(13);
/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects
    };
}
exports.extractStyleParts = extractStyleParts;


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Combine a set of styles together (but does not register css classes.)
 * @public
 */
function concatStyleSets() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var mergedSet = {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var currentSet = args_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (Array.isArray(mergedValue) ? mergedValue : [mergedValue]).concat((Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    return mergedSet;
}
exports.concatStyleSets = concatStyleSets;


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
Object.defineProperty(exports, "__esModule", { value: true });
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // tslint:disable-next-line:no-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}
exports.hoistStatics = hoistStatics;


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(11);
var localStorage_1 = __webpack_require__(132);
// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = dom_1.getDocument();
        var savedLanguage = localStorage_1.getItem('language');
        if (savedLanguage !== null) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
exports.getLanguage = getLanguage;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 *
 * @public
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    if (!avoidPersisting) {
        localStorage_1.setItem('language', language);
    }
    _language = language;
}
exports.setLanguage = setLanguage;


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// tslint:disable-next-line:no-any
var _global = (typeof window !== 'undefined' && window) || process;
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
// tslint:disable-next-line:no-any
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || (b[propName] !== a[propName])) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Compares a to b and b to a.
 *
 * @public
 */
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
exports.shallowCompare = shallowCompare;
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
exports.assign = assign;
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) &&
                    (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
exports.filteredAssign = filteredAssign;
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || DEFAULT_ID_STRING) + index;
}
exports.getId = getId;
/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
function mapEnumByName(
// tslint:disable-next-line:no-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum).map(function (p) {
        if (String(Number(p)) !== p) {
            return callback(p, theEnum[p]);
        }
    }).filter(function (v) { return !!v; }); // only return elements with values
}
exports.mapEnumByName = mapEnumByName;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)))

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Please keep alphabetized
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use default.
     * @deprecated
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use image.
     * @deprecated
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType = exports.IconType || (exports.IconType = {}));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(8);
exports.InjectionMode = index_1.InjectionMode;
exports.Stylesheet = index_1.Stylesheet;
exports.concatStyleSets = index_1.concatStyleSets;
exports.fontFace = index_1.fontFace;
exports.keyframes = index_1.keyframes;
exports.mergeStyleSets = index_1.mergeStyleSets;
exports.mergeStyles = index_1.mergeStyles;


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(19);
var warn_1 = __webpack_require__(25);
var GlobalSettings_1 = __webpack_require__(27);
var index_1 = __webpack_require__(8);
var ICON_SETTING_NAME = 'icons';
var _iconSettings = GlobalSettings_1.GlobalSettings.getValue(ICON_SETTING_NAME, {
    __options: {
        disableWarnings: false,
        warnOnMissingIcons: true
    },
    __remapped: {}
});
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset, options) {
    var subset = tslib_1.__assign({}, iconSubset, { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    // Grab options, optionally mix user provided ones on top.
    options = options ? tslib_1.__assign({}, _iconSettings.__options, options) : _iconSettings.__options;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = iconName.toLowerCase();
            if (_iconSettings[normalizedIconName]) {
                if (!options.disableWarnings) {
                    warn_1.warn("Icon '" + iconName + " being re-registered. Ignoring duplicate registration.");
                }
            }
            else {
                _iconSettings[normalizedIconName] = {
                    code: code,
                    subset: subset
                };
            }
        }
    }
}
exports.registerIcons = registerIcons;
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _iconSettings.__remapped[iconName.toLowerCase()] = mappedToName.toLowerCase();
}
exports.registerIconAlias = registerIconAlias;
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    var options = _iconSettings.__options;
    name = name ? name.toLowerCase() : '';
    name = _iconSettings.__remapped[name] || name;
    if (name) {
        icon = _iconSettings[name];
        if (icon) {
            var subset = icon.subset;
            if (subset.fontFace && !subset.isRegistered) {
                // Register font face for given icons.
                index_1.fontFace(subset.fontFace);
                // Generate a base class name for the given font.
                subset.className = index_1.mergeStyles(subset.style, {
                    fontFamily: subset.fontFace.fontFamily,
                    fontWeight: subset.fontFace.fontWeight || 'normal',
                    fontStyle: subset.fontFace.fontStyle || 'normal'
                }).toString();
                subset.isRegistered = true;
            }
        }
        else {
            if (!options.disableWarnings && options.warnOnMissingIcons) {
                warn_1.warn("The icon \"" + name + "\" was used but not registered. See http://aka.ms/fabric-icon-usage for more information.");
            }
        }
    }
    return icon;
}
exports.getIcon = getIcon;
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _iconSettings.__options = tslib_1.__assign({}, _iconSettings.__options, options);
}
exports.setIconOptions = setIconOptions;


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(8);
var fonts_1 = __webpack_require__(60);
var language_1 = __webpack_require__(54);
// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
exports.DefaultFontStyles = fonts_1.createFontStyles(language_1.getLanguage());
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    index_1.fontFace({
        fontFamily: fontFamily,
        src: localFontSrc +
            ("url('" + url + ".woff2') format('woff2'),") +
            ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal'
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', fonts_1.FontWeights.light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', fonts_1.FontWeights.semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', fonts_1.FontWeights.regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', fonts_1.FontWeights.semibold, localFontName && localFontName + ' SemiBold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontNames.WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, fonts_1.LocalizedFontFamilies.Selawik, 'selawik', 'selawik');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", fonts_1.FontWeights.light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", fonts_1.FontWeights.semibold);
    }
}
exports.registerDefaultFontFaces = registerDefaultFontFaces;
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable-next-line:no-string-literal no-any
    var fabricConfig = win ? win['FabricConfig'] : undefined;
    return (fabricConfig && fabricConfig.fontBaseUrl !== undefined) ? fabricConfig.fontBaseUrl : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(143), exports);


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
})(LocalizedFontNames = exports.LocalizedFontNames || (exports.LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
})(LocalizedFontFamilies = exports.LocalizedFontFamilies || (exports.LocalizedFontFamilies = {}));
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + LocalizedFontNames.WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    'ar': LocalizedFontFamilies.Arabic,
    'bg': LocalizedFontFamilies.Cyrillic,
    'cs': LocalizedFontFamilies.EastEuropean,
    'el': LocalizedFontFamilies.Greek,
    'et': LocalizedFontFamilies.EastEuropean,
    'he': LocalizedFontFamilies.Hebrew,
    'hi': LocalizedFontFamilies.Hindi,
    'hr': LocalizedFontFamilies.EastEuropean,
    'hu': LocalizedFontFamilies.EastEuropean,
    'ja': LocalizedFontFamilies.Japanese,
    'kk': LocalizedFontFamilies.EastEuropean,
    'ko': LocalizedFontFamilies.Korean,
    'lt': LocalizedFontFamilies.EastEuropean,
    'lv': LocalizedFontFamilies.EastEuropean,
    'pl': LocalizedFontFamilies.EastEuropean,
    'ru': LocalizedFontFamilies.Cyrillic,
    'sk': LocalizedFontFamilies.EastEuropean,
    'sr-latn': LocalizedFontFamilies.EastEuropean,
    'th': LocalizedFontFamilies.Thai,
    'tr': LocalizedFontFamilies.EastEuropean,
    'uk': LocalizedFontFamilies.Cyrillic,
    'vi': LocalizedFontFamilies.Vietnamese,
    'zh-hans': LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': LocalizedFontFamilies.ChineseTraditional,
};
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.mini = '10px';
    FontSizes.xSmall = '11px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '13px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '15px';
    FontSizes.icon = '16px';
    FontSizes.large = '17px';
    FontSizes.xLarge = '21px';
    FontSizes.xxLarge = '28px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '72px';
})(FontSizes = exports.FontSizes || (exports.FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights = exports.FontWeights || (exports.FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes = exports.IconFontSizes || (exports.IconFontSizes = {}));
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var semilightFontFamilyWithFallback = fontFamilyWithFallback;
    // Chrome has a bug where it does not render Segoe UI Semilight correctly, so we force the webfont to be used in that case
    if (localizedFont === defaultFontFamily) {
        semilightFontFamilyWithFallback = _fontFamilyWithFallbacks(LocalizedFontFamilies.WestEuropean);
    }
    var fontStyles = {
        tiny: _createFont(FontSizes.mini, FontWeights.semibold, fontFamilyWithFallback),
        xSmall: _createFont(FontSizes.xSmall, FontWeights.regular, fontFamilyWithFallback),
        small: _createFont(FontSizes.small, FontWeights.regular, fontFamilyWithFallback),
        smallPlus: _createFont(FontSizes.smallPlus, FontWeights.regular, fontFamilyWithFallback),
        medium: _createFont(FontSizes.medium, FontWeights.regular, fontFamilyWithFallback),
        mediumPlus: _createFont(FontSizes.mediumPlus, FontWeights.regular, fontFamilyWithFallback),
        large: _createFont(FontSizes.large, FontWeights.semilight, semilightFontFamilyWithFallback),
        xLarge: _createFont(FontSizes.xLarge, FontWeights.light, fontFamilyWithFallback),
        xxLarge: _createFont(FontSizes.xxLarge, FontWeights.light, fontFamilyWithFallback),
        superLarge: _createFont(FontSizes.superLarge, FontWeights.light, fontFamilyWithFallback),
        mega: _createFont(FontSizes.mega, FontWeights.light, fontFamilyWithFallback)
    };
    return fontStyles;
}
exports.createFontStyles = createFontStyles;
/**
 * If there is a localized font for this language, return that. Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // tslint:disable-next-line:no-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight
    };
}


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HighContrastSelector = '@media screen and (-ms-high-contrast: active)';
exports.ScreenWidthMinSmall = 320;
exports.ScreenWidthMinMedium = 480;
exports.ScreenWidthMinLarge = 640;
exports.ScreenWidthMinXLarge = 1024;
exports.ScreenWidthMinXXLarge = 1366;
exports.ScreenWidthMinXXXLarge = 1920;
exports.ScreenWidthMaxSmall = exports.ScreenWidthMinMedium - 1;
exports.ScreenWidthMaxMedium = exports.ScreenWidthMinLarge - 1;
exports.ScreenWidthMaxLarge = exports.ScreenWidthMinXLarge - 1;
exports.ScreenWidthMaxXLarge = exports.ScreenWidthMinXXLarge - 1;
exports.ScreenWidthMaxXXLarge = exports.ScreenWidthMinXXXLarge - 1;


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(2);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var Image_Props_1 = __webpack_require__(71);
var Styling_1 = __webpack_require__(5);
var stylesImport = __webpack_require__(158);
var styles = stylesImport;
exports.CoverStyleMap = (_a = {},
    _a[Image_Props_1.ImageCoverStyle.landscape] = 'ms-Image-image--landscape ' + styles.imageIsLandscape,
    _a[Image_Props_1.ImageCoverStyle.portrait] = 'ms-Image-image--portrait ' + styles.imageIsPortrait,
    _a);
exports.ImageFitMap = (_b = {},
    _b[Image_Props_1.ImageFit.center] = 'ms-Image-image--center ' + styles.imageIsCenter,
    _b[Image_Props_1.ImageFit.contain] = 'ms-Image-image--contain ' + styles.imageIsContain,
    _b[Image_Props_1.ImageFit.cover] = 'ms-Image-image--cover ' + styles.imageIsCover,
    _b[Image_Props_1.ImageFit.none] = 'ms-Image-image--none ' + styles.imageIsNone,
    _b);
var KEY_PREFIX = 'fabricImage';
var Image = /** @class */ (function (_super) {
    tslib_1.__extends(Image, _super);
    function Image(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = Image_Props_1.ImageCoverStyle.portrait;
        _this.state = {
            loadState: Image_Props_1.ImageLoadState.notLoaded
        };
        return _this;
    }
    Image.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: Image_Props_1.ImageLoadState.notLoaded
            });
        }
        else if (this.state.loadState === Image_Props_1.ImageLoadState.loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    Image.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange
            && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    Image.prototype.render = function () {
        var imageProps = Utilities_1.getNativeProps(this.props, Utilities_1.imageProperties, ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, shouldStartVisible = _a.shouldStartVisible, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame;
        var loadState = this.state.loadState;
        var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
        var loaded = loadState === Image_Props_1.ImageLoadState.loaded || (loadState === Image_Props_1.ImageLoadState.notLoaded && this.props.shouldStartVisible);
        // If image dimensions aren't specified, the natural size of the image is used.
        return (React.createElement("div", { className: Utilities_1.css('ms-Image', styles.root, className, (_b = {},
                _b['ms-Image--maximizeFrame ' + styles.rootIsMaximizeFrame] = maximizeFrame,
                _b)), style: { width: width, height: height }, ref: this._resolveRef('_frameElement') },
            React.createElement("img", tslib_1.__assign({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: Utilities_1.css('ms-Image-image', styles.image, exports.CoverStyleMap[coverStyle], (imageFit !== undefined) && exports.ImageFitMap[imageFit], !loaded && 'is-notLoaded', loaded && 'is-loaded ' + styles.imageIsLoaded, shouldFadeIn && 'is-fadeIn', loadState === Image_Props_1.ImageLoadState.error && 'is-error', loaded && shouldFadeIn && !shouldStartVisible && Styling_1.AnimationClassNames.fadeIn400, (_c = {},
                    _c['ms-Image-image--scaleWidth ' + styles.imageIsScaleWidth] = (imageFit === undefined && !!width && !height),
                    _c['ms-Image-image--scaleHeight ' + styles.imageIsScaleHeight] = (imageFit === undefined && !width && !!height),
                    _c['ms-Image-image--scaleWidthHeight ' + styles.imageIsScaleWidthHeight] = (imageFit === undefined && !!width && !!height),
                    _c)), ref: this._resolveRef('_imageElement'), src: src, alt: alt, role: role }))));
        var _b, _c;
    };
    Image.prototype._onImageLoaded = function (ev) {
        var _a = this.props, src = _a.src, onLoad = _a.onLoad;
        if (onLoad) {
            onLoad(ev);
        }
        this._computeCoverStyle(this.props);
        if (src) {
            this.setState({
                loadState: Image_Props_1.ImageLoadState.loaded
            });
        }
    };
    Image.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === Image_Props_1.ImageLoadState.notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = src && this._imageElement && (this._imageElement.naturalWidth > 0 && this._imageElement.naturalHeight > 0) ||
                (this._imageElement.complete && Image._svgRegex.test(src));
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: Image_Props_1.ImageLoadState.loaded
                });
            }
        }
    };
    Image.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        // Do not compute cover style if it was already specified in props
        if ((imageFit === Image_Props_1.ImageFit.cover || imageFit === Image_Props_1.ImageFit.contain) &&
            this.props.coverStyle === undefined &&
            this._imageElement) {
            // Determine the desired ratio using the width and height props.
            // If those props aren't available, measure measure the frame.
            var desiredRatio = void 0;
            if (!!width && !!height) {
                desiredRatio = width / height;
            }
            else {
                desiredRatio = this._frameElement.clientWidth / this._frameElement.clientHeight;
            }
            // Examine the source image to determine its original ratio.
            var naturalRatio = this._imageElement.naturalWidth / this._imageElement.naturalHeight;
            // Should we crop from the top or the sides?
            if (naturalRatio > desiredRatio) {
                this._coverStyle = Image_Props_1.ImageCoverStyle.landscape;
            }
            else {
                this._coverStyle = Image_Props_1.ImageCoverStyle.portrait;
            }
        }
    };
    Image.prototype._onImageError = function (ev) {
        if (this.props.onError) {
            this.props.onError(ev);
        }
        this.setState({
            loadState: Image_Props_1.ImageLoadState.error
        });
    };
    Image.defaultProps = {
        shouldFadeIn: true
    };
    Image._svgRegex = /\.svg$/i;
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Image.prototype, "_onImageLoaded", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Image.prototype, "_onImageError", null);
    return Image;
}(Utilities_1.BaseComponent));
exports.Image = Image;
var _a, _b;


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The possible methods that can be used to fit the image.
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
})(ImageFit = exports.ImageFit || (exports.ImageFit = {}));
/**
 * The cover style to be used on the image
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle = exports.ImageCoverStyle || (exports.ImageCoverStyle = {}));
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use onLoadingStateChange instead
     * and rerender the Image with a difference src.
     * @deprecated
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState = exports.ImageLoadState || (exports.ImageLoadState = {}));


/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var ReactDom = __webpack_require__(23);
var sp_core_library_1 = __webpack_require__(24);
var sp_webpart_base_1 = __webpack_require__(99);
var SearchBoxContainer_1 = __webpack_require__(791);
var SearchBoxWebPart = (function (_super) {
    __extends(SearchBoxWebPart, _super);
    function SearchBoxWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchBoxWebPart.prototype.render = function () {
        var element = React.createElement(SearchBoxContainer_1.default, {
            eventAggregator: this.context.eventAggregator,
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(SearchBoxWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SearchBoxWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    groups: []
                }
            ]
        };
    };
    return SearchBoxWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = SearchBoxWebPart;



/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var SearchBox_1 = __webpack_require__(184);
var strings = __webpack_require__(792);
var SearchBoxContainer = (function (_super) {
    __extends(SearchBoxContainer, _super);
    function SearchBoxContainer() {
        var _this = _super.call(this) || this;
        _this.onSearch = _this.onSearch.bind(_this);
        return _this;
    }
    SearchBoxContainer.prototype.render = function () {
        var _this = this;
        return (React.createElement(SearchBox_1.SearchBox, { onSearch: this.onSearch, placeholder: strings.SearchInputPlaceholder, onClear: function () { _this.onSearch("*"); } }));
    };
    /**
     * Handler when a user enters new keywords
     * @param queryText The query text entered by the user
     */
    SearchBoxContainer.prototype.onSearch = function (queryText) {
        this.props.eventAggregator.raiseEvent("search:newQueryKeywords", {
            data: queryText,
            sourceId: "SearchBoxQuery",
            targetId: "SearchResults"
        });
    };
    return SearchBoxContainer;
}(React.Component));
exports.default = SearchBoxContainer;



/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_792__;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeStyles_1 = __webpack_require__(118);
exports.mergeStyles = mergeStyles_1.mergeStyles;
var mergeStyleSets_1 = __webpack_require__(124);
exports.mergeStyleSets = mergeStyleSets_1.mergeStyleSets;
var concatStyleSets_1 = __webpack_require__(52);
exports.concatStyleSets = concatStyleSets_1.concatStyleSets;
var fontFace_1 = __webpack_require__(125);
exports.fontFace = fontFace_1.fontFace;
var keyframes_1 = __webpack_require__(126);
exports.keyframes = keyframes_1.keyframes;
var Stylesheet_1 = __webpack_require__(13);
exports.InjectionMode = Stylesheet_1.InjectionMode;
exports.Stylesheet = Stylesheet_1.Stylesheet;


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ })

/******/ })});;
//# sourceMappingURL=search-box-web-part.js.map