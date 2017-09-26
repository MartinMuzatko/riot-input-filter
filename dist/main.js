/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(riot) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Riot v3.6.0, @license MIT */
(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.riot = global.riot || {});
})(this, function (exports) {
  'use strict';

  var __TAGS_CACHE = [];
  var __TAG_IMPL = {};
  var GLOBAL_MIXIN = '__global_mixin';
  var ATTRS_PREFIX = 'riot-';
  var REF_DIRECTIVES = ['ref', 'data-ref'];
  var IS_DIRECTIVE = 'data-is';
  var CONDITIONAL_DIRECTIVE = 'if';
  var LOOP_DIRECTIVE = 'each';
  var LOOP_NO_REORDER_DIRECTIVE = 'no-reorder';
  var SHOW_DIRECTIVE = 'show';
  var HIDE_DIRECTIVE = 'hide';
  var RIOT_EVENTS_KEY = '__riot-events__';
  var T_STRING = 'string';
  var T_OBJECT = 'object';
  var T_UNDEF = 'undefined';
  var T_FUNCTION = 'function';
  var XLINK_NS = 'http://www.w3.org/1999/xlink';
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var XLINK_REGEX = /^xlink:(\w+)/;
  var WIN = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === T_UNDEF ? undefined : window;
  var RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/;
  var RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;
  var RE_EVENTS_PREFIX = /^on/;
  var RE_RESERVED_NAMES = /^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|refs|parent|opts|trigger|o(?:n|ff|ne))$/;
  var RE_HTML_ATTRS = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;
  var CASE_SENSITIVE_ATTRIBUTES = { 'viewbox': 'viewBox' };
  var RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/;
  var IE_VERSION = (WIN && WIN.document || {}).documentMode | 0;

  /**
   * Check Check if the passed argument is undefined
   * @param   { String } value -
   * @returns { Boolean } -
   */
  function isBoolAttr(value) {
    return RE_BOOL_ATTRS.test(value);
  }

  /**
   * Check if passed argument is a function
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isFunction(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === T_FUNCTION;
  }

  /**
   * Check if passed argument is an object, exclude null
   * NOTE: use isObject(x) && !isArray(x) to excludes arrays.
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isObject(value) {
    return value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === T_OBJECT; // typeof null is 'object'
  }

  /**
   * Check if passed argument is undefined
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isUndefined(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === T_UNDEF;
  }

  /**
   * Check if passed argument is a string
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isString(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === T_STRING;
  }

  /**
   * Check if passed argument is empty. Different from falsy, because we dont consider 0 or false to be blank
   * @param { * } value -
   * @returns { Boolean } -
   */
  function isBlank(value) {
    return isUndefined(value) || value === null || value === '';
  }

  /**
   * Check if passed argument is a kind of array
   * @param   { * } value -
   * @returns { Boolean } -
   */
  function isArray(value) {
    return Array.isArray(value) || value instanceof Array;
  }

  /**
   * Check whether object's property could be overridden
   * @param   { Object }  obj - source object
   * @param   { String }  key - object property
   * @returns { Boolean } -
   */
  function isWritable(obj, key) {
    var descriptor = Object.getOwnPropertyDescriptor(obj, key);
    return isUndefined(obj[key]) || descriptor && descriptor.writable;
  }

  /**
   * Check if passed argument is a reserved name
   * @param   { String } value -
   * @returns { Boolean } -
   */
  function isReservedName(value) {
    return RE_RESERVED_NAMES.test(value);
  }

  var check = Object.freeze({
    isBoolAttr: isBoolAttr,
    isFunction: isFunction,
    isObject: isObject,
    isUndefined: isUndefined,
    isString: isString,
    isBlank: isBlank,
    isArray: isArray,
    isWritable: isWritable,
    isReservedName: isReservedName
  });

  /**
   * Shorter and fast way to select multiple nodes in the DOM
   * @param   { String } selector - DOM selector
   * @param   { Object } ctx - DOM node where the targets of our search will is located
   * @returns { Object } dom nodes found
   */
  function $$(selector, ctx) {
    return Array.prototype.slice.call((ctx || document).querySelectorAll(selector));
  }

  /**
   * Shorter and fast way to select a single node in the DOM
   * @param   { String } selector - unique dom selector
   * @param   { Object } ctx - DOM node where the target of our search will is located
   * @returns { Object } dom node found
   */
  function $(selector, ctx) {
    return (ctx || document).querySelector(selector);
  }

  /**
   * Create a document fragment
   * @returns { Object } document fragment
   */
  function createFrag() {
    return document.createDocumentFragment();
  }

  /**
   * Create a document text node
   * @returns { Object } create a text node to use as placeholder
   */
  function createDOMPlaceholder() {
    return document.createTextNode('');
  }

  /**
   * Check if a DOM node is an svg tag
   * @param   { HTMLElement }  el - node we want to test
   * @returns {Boolean} true if it's an svg node
   */
  function isSvg(el) {
    return !!el.ownerSVGElement;
  }

  /**
   * Create a generic DOM node
   * @param   { String } name - name of the DOM node we want to create
   * @param   { Boolean } isSvg - true if we need to use an svg node
   * @returns { Object } DOM node just created
   */
  function mkEl(name) {
    return name === 'svg' ? document.createElementNS(SVG_NS, name) : document.createElement(name);
  }

  /**
   * Set the inner html of any DOM node SVGs included
   * @param { Object } container - DOM node where we'll inject new html
   * @param { String } html - html to inject
   */
  /* istanbul ignore next */
  function setInnerHTML(container, html) {
    if (!isUndefined(container.innerHTML)) {
      container.innerHTML = html;
    }
    // some browsers do not support innerHTML on the SVGs tags
    else {
        var doc = new DOMParser().parseFromString(html, 'application/xml');
        var node = container.ownerDocument.importNode(doc.documentElement, true);
        container.appendChild(node);
      }
  }

  /**
   * Toggle the visibility of any DOM node
   * @param   { Object }  dom - DOM node we want to hide
   * @param   { Boolean } show - do we want to show it?
   */

  function toggleVisibility(dom, show) {
    dom.style.display = show ? '' : 'none';
    dom['hidden'] = show ? false : true;
  }

  /**
   * Remove any DOM attribute from a node
   * @param   { Object } dom - DOM node we want to update
   * @param   { String } name - name of the property we want to remove
   */
  function remAttr(dom, name) {
    dom.removeAttribute(name);
  }

  /**
   * Convert a style object to a string
   * @param   { Object } style - style object we need to parse
   * @returns { String } resulting css string
   * @example
   * styleObjectToString({ color: 'red', height: '10px'}) // => 'color: red; height: 10px'
   */
  function styleObjectToString(style) {
    return Object.keys(style).reduce(function (acc, prop) {
      return acc + " " + prop + ": " + style[prop] + ";";
    }, '');
  }

  /**
   * Get the value of any DOM attribute on a node
   * @param   { Object } dom - DOM node we want to parse
   * @param   { String } name - name of the attribute we want to get
   * @returns { String | undefined } name of the node attribute whether it exists
   */
  function getAttr(dom, name) {
    return dom.getAttribute(name);
  }

  /**
   * Set any DOM attribute
   * @param { Object } dom - DOM node we want to update
   * @param { String } name - name of the property we want to set
   * @param { String } val - value of the property we want to set
   */
  function setAttr(dom, name, val) {
    var xlink = XLINK_REGEX.exec(name);
    if (xlink && xlink[1]) {
      dom.setAttributeNS(XLINK_NS, xlink[1], val);
    } else {
      dom.setAttribute(name, val);
    }
  }

  /**
   * Insert safely a tag to fix #1962 #1649
   * @param   { HTMLElement } root - children container
   * @param   { HTMLElement } curr - node to insert
   * @param   { HTMLElement } next - node that should preceed the current node inserted
   */
  function safeInsert(root, curr, next) {
    root.insertBefore(curr, next.parentNode && next);
  }

  /**
   * Minimize risk: only zero or one _space_ between attr & value
   * @param   { String }   html - html string we want to parse
   * @param   { Function } fn - callback function to apply on any attribute found
   */
  function walkAttrs(html, fn) {
    if (!html) {
      return;
    }
    var m;
    while (m = RE_HTML_ATTRS.exec(html)) {
      fn(m[1].toLowerCase(), m[2] || m[3] || m[4]);
    }
  }

  /**
   * Walk down recursively all the children tags starting dom node
   * @param   { Object }   dom - starting node where we will start the recursion
   * @param   { Function } fn - callback to transform the child node just found
   * @param   { Object }   context - fn can optionally return an object, which is passed to children
   */
  function walkNodes(dom, fn, context) {
    if (dom) {
      var res = fn(dom, context);
      var next;
      // stop the recursion
      if (res === false) {
        return;
      }

      dom = dom.firstChild;

      while (dom) {
        next = dom.nextSibling;
        walkNodes(dom, fn, res);
        dom = next;
      }
    }
  }

  var dom = Object.freeze({
    $$: $$,
    $: $,
    createFrag: createFrag,
    createDOMPlaceholder: createDOMPlaceholder,
    isSvg: isSvg,
    mkEl: mkEl,
    setInnerHTML: setInnerHTML,
    toggleVisibility: toggleVisibility,
    remAttr: remAttr,
    styleObjectToString: styleObjectToString,
    getAttr: getAttr,
    setAttr: setAttr,
    safeInsert: safeInsert,
    walkAttrs: walkAttrs,
    walkNodes: walkNodes
  });

  var styleNode;
  var cssTextProp;
  var byName = {};
  var remainder = [];
  var needsInject = false;

  // skip the following code on the server
  if (WIN) {
    styleNode = function () {
      // create a new style element with the correct type
      var newNode = mkEl('style');
      setAttr(newNode, 'type', 'text/css');

      // replace any user node or insert the new one into the head
      var userNode = $('style[type=riot]');
      /* istanbul ignore next */
      if (userNode) {
        if (userNode.id) {
          newNode.id = userNode.id;
        }
        userNode.parentNode.replaceChild(newNode, userNode);
      } else {
        document.getElementsByTagName('head')[0].appendChild(newNode);
      }

      return newNode;
    }();
    cssTextProp = styleNode.styleSheet;
  }

  /**
   * Object that will be used to inject and manage the css of every tag instance
   */
  var styleManager = {
    styleNode: styleNode,
    /**
     * Save a tag style to be later injected into DOM
     * @param { String } css - css string
     * @param { String } name - if it's passed we will map the css to a tagname
     */
    add: function add(css, name) {
      if (name) {
        byName[name] = css;
      } else {
        remainder.push(css);
      }
      needsInject = true;
    },
    /**
     * Inject all previously saved tag styles into DOM
     * innerHTML seems slow: http://jsperf.com/riot-insert-style
     */
    inject: function inject() {
      if (!WIN || !needsInject) {
        return;
      }
      needsInject = false;
      var style = Object.keys(byName).map(function (k) {
        return byName[k];
      }).concat(remainder).join('\n');
      /* istanbul ignore next */
      if (cssTextProp) {
        cssTextProp.cssText = style;
      } else {
        styleNode.innerHTML = style;
      }
    }
  };

  /**
   * The riot template engine
   * @version v3.0.8
   */

  var skipRegex = function () {
    //eslint-disable-line no-unused-vars

    var beforeReChars = '[{(,;:?=|&!^~>%*/';

    var beforeReWords = ['case', 'default', 'do', 'else', 'in', 'instanceof', 'prefix', 'return', 'typeof', 'void', 'yield'];

    var wordsLastChar = beforeReWords.reduce(function (s, w) {
      return s + w.slice(-1);
    }, '');

    var RE_REGEX = /^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/;
    var RE_VN_CHAR = /[$\w]/;

    function prev(code, pos) {
      while (--pos >= 0 && /\s/.test(code[pos])) {}
      return pos;
    }

    function _skipRegex(code, start) {

      var re = /.*/g;
      var pos = re.lastIndex = start++;
      var match = re.exec(code)[0].match(RE_REGEX);

      if (match) {
        var next = pos + match[0].length;

        pos = prev(code, pos);
        var c = code[pos];

        if (pos < 0 || ~beforeReChars.indexOf(c)) {
          return next;
        }

        if (c === '.') {

          if (code[pos - 1] === '.') {
            start = next;
          }
        } else if (c === '+' || c === '-') {

          if (code[--pos] !== c || (pos = prev(code, pos)) < 0 || !RE_VN_CHAR.test(code[pos])) {
            start = next;
          }
        } else if (~wordsLastChar.indexOf(c)) {

          var end = pos + 1;

          while (--pos >= 0 && RE_VN_CHAR.test(code[pos])) {}
          if (~beforeReWords.indexOf(code.slice(pos + 1, end))) {
            start = next;
          }
        }
      }

      return start;
    }

    return _skipRegex;
  }();

  /**
   * riot.util.brackets
   *
   * - `brackets    ` - Returns a string or regex based on its parameter
   * - `brackets.set` - Change the current riot brackets
   *
   * @module
   */

  /* global riot */

  /* istanbul ignore next */
  var brackets = function (UNDEF) {

    var REGLOB = 'g',
        R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
        R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,
        S_QBLOCKS = R_STRINGS.source + '|' + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,
        UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),
        NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,
        S_QBLOCK2 = R_STRINGS.source + '|' + /(\/)(?![*\/])/.source,
        FINDBRACES = {
      '(': RegExp('([()])|' + S_QBLOCK2, REGLOB),
      '[': RegExp('([[\\]])|' + S_QBLOCK2, REGLOB),
      '{': RegExp('([{}])|' + S_QBLOCK2, REGLOB)
    },
        DEFAULT = '{ }';

    var _pairs = ['{', '}', '{', '}', /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp('\\\\(})|([[({])|(})|' + S_QBLOCK2, REGLOB), DEFAULT, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/];

    var cachedBrackets = UNDEF,
        _regex,
        _cache = [],
        _settings;

    function _loopback(re) {
      return re;
    }

    function _rewrite(re, bp) {
      if (!bp) {
        bp = _cache;
      }
      return new RegExp(re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : '');
    }

    function _create(pair) {
      if (pair === DEFAULT) {
        return _pairs;
      }

      var arr = pair.split(' ');

      if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
        throw new Error('Unsupported brackets "' + pair + '"');
      }
      arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '));

      arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
      arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
      arr[6] = _rewrite(_pairs[6], arr);
      arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCK2, REGLOB);
      arr[8] = pair;
      return arr;
    }

    function _brackets(reOrIdx) {
      return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx];
    }

    _brackets.split = function split(str, tmpl, _bp) {
      // istanbul ignore next: _bp is for the compiler
      if (!_bp) {
        _bp = _cache;
      }

      var parts = [],
          match,
          isexpr,
          start,
          pos,
          re = _bp[6];

      var qblocks = [];
      var prevStr = '';
      var mark, lastIndex;

      isexpr = start = re.lastIndex = 0;

      while (match = re.exec(str)) {

        lastIndex = re.lastIndex;
        pos = match.index;

        if (isexpr) {

          if (match[2]) {

            var ch = match[2];
            var rech = FINDBRACES[ch];
            var ix = 1;

            rech.lastIndex = lastIndex;
            while (match = rech.exec(str)) {
              if (match[1]) {
                if (match[1] === ch) {
                  ++ix;
                } else if (! --ix) {
                  break;
                }
              } else {
                rech.lastIndex = pushQBlock(match.index, rech.lastIndex, match[2]);
              }
            }
            re.lastIndex = ix ? str.length : rech.lastIndex;
            continue;
          }

          if (!match[3]) {
            re.lastIndex = pushQBlock(pos, lastIndex, match[4]);
            continue;
          }
        }

        if (!match[1]) {
          unescapeStr(str.slice(start, pos));
          start = re.lastIndex;
          re = _bp[6 + (isexpr ^= 1)];
          re.lastIndex = start;
        }
      }

      if (str && start < str.length) {
        unescapeStr(str.slice(start));
      }

      parts.qblocks = qblocks;

      return parts;

      function unescapeStr(s) {
        if (prevStr) {
          s = prevStr + s;
          prevStr = '';
        }
        if (tmpl || isexpr) {
          parts.push(s && s.replace(_bp[5], '$1'));
        } else {
          parts.push(s);
        }
      }

      function pushQBlock(_pos, _lastIndex, slash) {
        //eslint-disable-line
        if (slash) {
          _lastIndex = skipRegex(str, _pos);
        }

        if (tmpl && _lastIndex > _pos + 2) {
          mark = '\u2057' + qblocks.length + '~';
          qblocks.push(str.slice(_pos, _lastIndex));
          prevStr += str.slice(start, _pos) + mark;
          start = _lastIndex;
        }
        return _lastIndex;
      }
    };

    _brackets.hasExpr = function hasExpr(str) {
      return _cache[4].test(str);
    };

    _brackets.loopKeys = function loopKeys(expr) {
      var m = expr.match(_cache[9]);

      return m ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] } : { val: expr.trim() };
    };

    _brackets.array = function array(pair) {
      return pair ? _create(pair) : _cache;
    };

    function _reset(pair) {
      if ((pair || (pair = DEFAULT)) !== _cache[8]) {
        _cache = _create(pair);
        _regex = pair === DEFAULT ? _loopback : _rewrite;
        _cache[9] = _regex(_pairs[9]);
      }
      cachedBrackets = pair;
    }

    function _setSettings(o) {
      var b;

      o = o || {};
      b = o.brackets;
      Object.defineProperty(o, 'brackets', {
        set: _reset,
        get: function get() {
          return cachedBrackets;
        },
        enumerable: true
      });
      _settings = o;
      _reset(b);
    }

    Object.defineProperty(_brackets, 'settings', {
      set: _setSettings,
      get: function get() {
        return _settings;
      }
    });

    /* istanbul ignore next: in the browser riot is always in the scope */
    _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
    _brackets.set = _reset;
    _brackets.skipRegex = skipRegex;

    _brackets.R_STRINGS = R_STRINGS;
    _brackets.R_MLCOMMS = R_MLCOMMS;
    _brackets.S_QBLOCKS = S_QBLOCKS;
    _brackets.S_QBLOCK2 = S_QBLOCK2;

    return _brackets;
  }();

  /**
   * @module tmpl
   *
   * tmpl          - Root function, returns the template value, render with data
   * tmpl.hasExpr  - Test the existence of a expression inside a string
   * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
   */

  /* istanbul ignore next */
  var tmpl = function () {

    var _cache = {};

    function _tmpl(str, data) {
      if (!str) {
        return str;
      }

      return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr.bind({
        data: data,
        tmpl: str
      }));
    }

    _tmpl.hasExpr = brackets.hasExpr;

    _tmpl.loopKeys = brackets.loopKeys;

    // istanbul ignore next
    _tmpl.clearCache = function () {
      _cache = {};
    };

    _tmpl.errorHandler = null;

    function _logErr(err, ctx) {

      err.riotData = {
        tagName: ctx && ctx.__ && ctx.__.tagName,
        _riot_id: ctx && ctx._riot_id //eslint-disable-line camelcase
      };

      if (_tmpl.errorHandler) {
        _tmpl.errorHandler(err);
      } else if (typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error(err.message);
        console.log('<%s> %s', err.riotData.tagName || 'Unknown tag', this.tmpl); // eslint-disable-line
        console.log(this.data); // eslint-disable-line
      }
    }

    function _create(str) {
      var expr = _getTmpl(str);

      if (expr.slice(0, 11) !== 'try{return ') {
        expr = 'return ' + expr;
      }

      return new Function('E', expr + ';'); // eslint-disable-line no-new-func
    }

    var RE_DQUOTE = /\u2057/g;
    var RE_QBMARK = /\u2057(\d+)~/g;

    function _getTmpl(str) {
      var parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);
      var qstr = parts.qblocks;
      var expr;

      if (parts.length > 2 || parts[0]) {
        var i,
            j,
            list = [];

        for (i = j = 0; i < parts.length; ++i) {

          expr = parts[i];

          if (expr && (expr = i & 1 ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, '\\\\').replace(/\r\n?|\n/g, '\\n').replace(/"/g, '\\"') + '"')) {
            list[j++] = expr;
          }
        }

        expr = j < 2 ? list[0] : '[' + list.join(',') + '].join("")';
      } else {

        expr = _parseExpr(parts[1], 0, qstr);
      }

      if (qstr.length) {
        expr = expr.replace(RE_QBMARK, function (_, pos) {
          return qstr[pos].replace(/\r/g, '\\r').replace(/\n/g, '\\n');
        });
      }
      return expr;
    }

    var RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/;
    var RE_BREND = {
      '(': /[()]/g,
      '[': /[[\]]/g,
      '{': /[{}]/g
    };

    function _parseExpr(expr, asText, qstr) {

      expr = expr.replace(/\s+/g, ' ').trim().replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

      if (expr) {
        var list = [],
            cnt = 0,
            match;

        while (expr && (match = expr.match(RE_CSNAME)) && !match.index) {
          var key,
              jsb,
              re = /,|([[{(])|$/g;

          expr = RegExp.rightContext;
          key = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];

          while (jsb = (match = re.exec(expr))[1]) {
            skipBraces(jsb, re);
          }

          jsb = expr.slice(0, match.index);
          expr = RegExp.rightContext;

          list[cnt++] = _wrapExpr(jsb, 1, key);
        }

        expr = !cnt ? _wrapExpr(expr, asText) : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
      }
      return expr;

      function skipBraces(ch, re) {
        var mm,
            lv = 1,
            ir = RE_BREND[ch];

        ir.lastIndex = re.lastIndex;
        while (mm = ir.exec(expr)) {
          if (mm[0] === ch) {
            ++lv;
          } else if (! --lv) {
            break;
          }
        }
        re.lastIndex = lv ? expr.length : ir.lastIndex;
      }
    }

    // istanbul ignore next: not both
    var // eslint-disable-next-line max-len
    JS_CONTEXT = '"in this?this:' + ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' ? 'global' : 'window') + ').',
        JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
        JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

    function _wrapExpr(expr, asText, key) {
      var tb;

      expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
        if (mvar) {
          pos = tb ? 0 : pos + match.length;

          if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
            match = p + '("' + mvar + JS_CONTEXT + mvar;
            if (pos) {
              tb = (s = s[pos]) === '.' || s === '(' || s === '[';
            }
          } else if (pos) {
            tb = !JS_NOPROPS.test(s.slice(pos));
          }
        }
        return match;
      });

      if (tb) {
        expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
      }

      if (key) {

        expr = (tb ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')') + '?"' + key + '":""';
      } else if (asText) {

        expr = 'function(v){' + (tb ? expr.replace('return ', 'v=') : 'v=(' + expr + ')') + ';return v||v===0?v:""}.call(this)';
      }

      return expr;
    }

    _tmpl.version = brackets.version = 'v3.0.8';

    return _tmpl;
  }();

  /* istanbul ignore next */
  var observable$1 = function observable$1(el) {

    /**
     * Extend the original object or create a new empty one
     * @type { Object }
     */

    el = el || {};

    /**
     * Private variables
     */
    var callbacks = {},
        slice = Array.prototype.slice;

    /**
     * Public Api
     */

    // extend the el object adding the observable methods
    Object.defineProperties(el, {
      /**
       * Listen to the given `event` ands
       * execute the `callback` each time an event is triggered.
       * @param  { String } event - event id
       * @param  { Function } fn - callback function
       * @returns { Object } el
       */
      on: {
        value: function value(event, fn) {
          if (typeof fn == 'function') {
            (callbacks[event] = callbacks[event] || []).push(fn);
          }
          return el;
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Removes the given `event` listeners
       * @param   { String } event - event id
       * @param   { Function } fn - callback function
       * @returns { Object } el
       */
      off: {
        value: function value(event, fn) {
          if (event == '*' && !fn) {
            callbacks = {};
          } else {
            if (fn) {
              var arr = callbacks[event];
              for (var i = 0, cb; cb = arr && arr[i]; ++i) {
                if (cb == fn) {
                  arr.splice(i--, 1);
                }
              }
            } else {
              delete callbacks[event];
            }
          }
          return el;
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Listen to the given `event` and
       * execute the `callback` at most once
       * @param   { String } event - event id
       * @param   { Function } fn - callback function
       * @returns { Object } el
       */
      one: {
        value: function value(event, fn) {
          function on() {
            el.off(event, on);
            fn.apply(el, arguments);
          }
          return el.on(event, on);
        },
        enumerable: false,
        writable: false,
        configurable: false
      },

      /**
       * Execute all callback functions that listen to
       * the given `event`
       * @param   { String } event - event id
       * @returns { Object } el
       */
      trigger: {
        value: function value(event) {
          var arguments$1 = arguments;

          // getting the arguments
          var arglen = arguments.length - 1,
              args = new Array(arglen),
              fns,
              fn,
              i;

          for (i = 0; i < arglen; i++) {
            args[i] = arguments$1[i + 1]; // skip first argument
          }

          fns = slice.call(callbacks[event] || [], 0);

          for (i = 0; fn = fns[i]; ++i) {
            fn.apply(el, args);
          }

          if (callbacks['*'] && event != '*') {
            el.trigger.apply(el, ['*', event].concat(args));
          }

          return el;
        },
        enumerable: false,
        writable: false,
        configurable: false
      }
    });

    return el;
  };

  /**
   * Specialized function for looping an array-like collection with `each={}`
   * @param   { Array } list - collection of items
   * @param   {Function} fn - callback function
   * @returns { Array } the array looped
   */
  function each(list, fn) {
    var len = list ? list.length : 0;
    var i = 0;
    for (; i < len; ++i) {
      fn(list[i], i);
    }
    return list;
  }

  /**
   * Check whether an array contains an item
   * @param   { Array } array - target array
   * @param   { * } item - item to test
   * @returns { Boolean } -
   */
  function contains(array, item) {
    return array.indexOf(item) !== -1;
  }

  /**
   * Convert a string containing dashes to camel case
   * @param   { String } str - input string
   * @returns { String } my-string -> myString
   */
  function toCamel(str) {
    return str.replace(/-(\w)/g, function (_, c) {
      return c.toUpperCase();
    });
  }

  /**
   * Faster String startsWith alternative
   * @param   { String } str - source string
   * @param   { String } value - test string
   * @returns { Boolean } -
   */
  function startsWith(str, value) {
    return str.slice(0, value.length) === value;
  }

  /**
   * Helper function to set an immutable property
   * @param   { Object } el - object where the new property will be set
   * @param   { String } key - object key where the new property will be stored
   * @param   { * } value - value of the new property
   * @param   { Object } options - set the propery overriding the default options
   * @returns { Object } - the initial object
   */
  function defineProperty(el, key, value, options) {
    Object.defineProperty(el, key, extend({
      value: value,
      enumerable: false,
      writable: false,
      configurable: true
    }, options));
    return el;
  }

  /**
   * Extend any object with other properties
   * @param   { Object } src - source object
   * @returns { Object } the resulting extended object
   *
   * var obj = { foo: 'baz' }
   * extend(obj, {bar: 'bar', foo: 'bar'})
   * console.log(obj) => {bar: 'bar', foo: 'bar'}
   *
   */
  function extend(src) {
    var obj,
        args = arguments;
    for (var i = 1; i < args.length; ++i) {
      if (obj = args[i]) {
        for (var key in obj) {
          // check if this property of the source object could be overridden
          if (isWritable(src, key)) {
            src[key] = obj[key];
          }
        }
      }
    }
    return src;
  }

  var misc = Object.freeze({
    each: each,
    contains: contains,
    toCamel: toCamel,
    startsWith: startsWith,
    defineProperty: defineProperty,
    extend: extend
  });

  var settings$1 = extend(Object.create(brackets.settings), {
    skipAnonymousTags: true,
    // handle the auto updates on any DOM event
    autoUpdate: true
  });

  /**
   * Trigger DOM events
   * @param   { HTMLElement } dom - dom element target of the event
   * @param   { Function } handler - user function
   * @param   { Object } e - event object
   */
  function handleEvent(dom, handler, e) {
    var ptag = this.__.parent,
        item = this.__.item;

    if (!item) {
      while (ptag && !item) {
        item = ptag.__.item;
        ptag = ptag.__.parent;
      }
    }

    // override the event properties
    /* istanbul ignore next */
    if (isWritable(e, 'currentTarget')) {
      e.currentTarget = dom;
    }
    /* istanbul ignore next */
    if (isWritable(e, 'target')) {
      e.target = e.srcElement;
    }
    /* istanbul ignore next */
    if (isWritable(e, 'which')) {
      e.which = e.charCode || e.keyCode;
    }

    e.item = item;

    handler.call(this, e);

    // avoid auto updates
    if (!settings$1.autoUpdate) {
      return;
    }

    if (!e.preventUpdate) {
      var p = getImmediateCustomParentTag(this);
      // fixes #2083
      if (p.isMounted) {
        p.update();
      }
    }
  }

  /**
   * Attach an event to a DOM node
   * @param { String } name - event name
   * @param { Function } handler - event callback
   * @param { Object } dom - dom node
   * @param { Tag } tag - tag instance
   */
  function setEventHandler(name, handler, dom, tag) {
    var eventName,
        cb = handleEvent.bind(tag, dom, handler);

    // avoid to bind twice the same event
    // possible fix for #2332
    dom[name] = null;

    // normalize event name
    eventName = name.replace(RE_EVENTS_PREFIX, '');

    // cache the listener into the listeners array
    if (!contains(tag.__.listeners, dom)) {
      tag.__.listeners.push(dom);
    }
    if (!dom[RIOT_EVENTS_KEY]) {
      dom[RIOT_EVENTS_KEY] = {};
    }
    if (dom[RIOT_EVENTS_KEY][name]) {
      dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][name]);
    }

    dom[RIOT_EVENTS_KEY][name] = cb;
    dom.addEventListener(eventName, cb, false);
  }

  /**
   * Update dynamically created data-is tags with changing expressions
   * @param { Object } expr - expression tag and expression info
   * @param { Tag }    parent - parent for tag creation
   * @param { String } tagName - tag implementation we want to use
   */
  function updateDataIs(expr, parent, tagName) {
    var conf, isVirtual, head, ref;

    if (expr.tag && expr.tagName === tagName) {
      expr.tag.update();
      return;
    }

    isVirtual = expr.dom.tagName === 'VIRTUAL';
    // sync _parent to accommodate changing tagnames
    if (expr.tag) {
      // need placeholder before unmount
      if (isVirtual) {
        head = expr.tag.__.head;
        ref = createDOMPlaceholder();
        head.parentNode.insertBefore(ref, head);
      }

      expr.tag.unmount(true);
    }

    if (!isString(tagName)) {
      return;
    }

    expr.impl = __TAG_IMPL[tagName];
    conf = { root: expr.dom, parent: parent, hasImpl: true, tagName: tagName };
    expr.tag = initChildTag(expr.impl, conf, expr.dom.innerHTML, parent);
    each(expr.attrs, function (a) {
      return setAttr(expr.tag.root, a.name, a.value);
    });
    expr.tagName = tagName;
    expr.tag.mount();
    if (isVirtual) {
      makeReplaceVirtual(expr.tag, ref || expr.tag.root);
    } // root exist first time, after use placeholder

    // parent is the placeholder tag, not the dynamic tag so clean up
    parent.__.onUnmount = function () {
      var delName = expr.tag.opts.dataIs,
          tags = expr.tag.parent.tags,
          _tags = expr.tag.__.parent.tags;
      arrayishRemove(tags, delName, expr.tag);
      arrayishRemove(_tags, delName, expr.tag);
      expr.tag.unmount();
    };
  }

  /**
   * Nomalize any attribute removing the "riot-" prefix
   * @param   { String } attrName - original attribute name
   * @returns { String } valid html attribute name
   */
  function normalizeAttrName(attrName) {
    if (!attrName) {
      return null;
    }
    attrName = attrName.replace(ATTRS_PREFIX, '');
    if (CASE_SENSITIVE_ATTRIBUTES[attrName]) {
      attrName = CASE_SENSITIVE_ATTRIBUTES[attrName];
    }
    return attrName;
  }

  /**
   * Update on single tag expression
   * @this Tag
   * @param { Object } expr - expression logic
   * @returns { undefined }
   */
  function updateExpression(expr) {
    if (this.root && getAttr(this.root, 'virtualized')) {
      return;
    }

    var dom = expr.dom,

    // remove the riot- prefix
    attrName = normalizeAttrName(expr.attr),
        isToggle = contains([SHOW_DIRECTIVE, HIDE_DIRECTIVE], attrName),
        isVirtual = expr.root && expr.root.tagName === 'VIRTUAL',
        parent = dom && (expr.parent || dom.parentNode),

    // detect the style attributes
    isStyleAttr = attrName === 'style',
        isClassAttr = attrName === 'class',
        hasValue,
        isObj,
        value;

    // if it's a tag we could totally skip the rest
    if (expr._riot_id) {
      if (expr.isMounted) {
        expr.update();
        // if it hasn't been mounted yet, do that now.
      } else {
        expr.mount();
        if (isVirtual) {
          makeReplaceVirtual(expr, expr.root);
        }
      }
      return;
    }
    // if this expression has the update method it means it can handle the DOM changes by itself
    if (expr.update) {
      return expr.update();
    }

    // ...it seems to be a simple expression so we try to calculat its value
    value = tmpl(expr.expr, isToggle ? extend({}, Object.create(this.parent), this) : this);
    hasValue = !isBlank(value);
    isObj = isObject(value);

    // convert the style/class objects to strings
    if (isObj) {
      isObj = !isClassAttr && !isStyleAttr;
      if (isClassAttr) {
        value = tmpl(JSON.stringify(value), this);
      } else if (isStyleAttr) {
        value = styleObjectToString(value);
      }
    }

    // remove original attribute
    if (expr.attr && (!expr.isAttrRemoved || !hasValue || value === false)) {
      remAttr(dom, expr.attr);
      expr.isAttrRemoved = true;
    }

    // for the boolean attributes we don't need the value
    // we can convert it to checked=true to checked=checked
    if (expr.bool) {
      value = value ? attrName : false;
    }
    if (expr.isRtag) {
      return updateDataIs(expr, this, value);
    }
    if (expr.wasParsedOnce && expr.value === value) {
      return;
    }

    // update the expression value
    expr.value = value;
    expr.wasParsedOnce = true;

    // if the value is an object we can not do much more with it
    if (isObj && !isToggle) {
      return;
    }
    // avoid to render undefined/null values
    if (isBlank(value)) {
      value = '';
    }

    // textarea and text nodes have no attribute name
    if (!attrName) {
      // about #815 w/o replace: the browser converts the value to a string,
      // the comparison by "==" does too, but not in the server
      value += '';
      // test for parent avoids error with invalid assignment to nodeValue
      if (parent) {
        // cache the parent node because somehow it will become null on IE
        // on the next iteration
        expr.parent = parent;
        if (parent.tagName === 'TEXTAREA') {
          parent.value = value; // #1113
          if (!IE_VERSION) {
            dom.nodeValue = value;
          } // #1625 IE throws here, nodeValue
        } // will be available on 'updated'
        else {
            dom.nodeValue = value;
          }
      }
      return;
    }

    // event handler
    if (isFunction(value)) {
      setEventHandler(attrName, value, dom, this);
      // show / hide
    } else if (isToggle) {
      toggleVisibility(dom, attrName === HIDE_DIRECTIVE ? !value : value);
      // handle attributes
    } else {
      if (expr.bool) {
        dom[attrName] = value;
      }

      if (attrName === 'value' && dom.value !== value) {
        dom.value = value;
      }

      if (hasValue && value !== false) {
        setAttr(dom, attrName, value);
      }

      // make sure that in case of style changes
      // the element stays hidden
      if (isStyleAttr && dom.hidden) {
        toggleVisibility(dom, false);
      }
    }
  }

  /**
   * Update all the expressions in a Tag instance
   * @this Tag
   * @param { Array } expressions - expression that must be re evaluated
   */
  function updateAllExpressions(expressions) {
    each(expressions, updateExpression.bind(this));
  }

  var IfExpr = {
    init: function init(dom, tag, expr) {
      remAttr(dom, CONDITIONAL_DIRECTIVE);
      this.tag = tag;
      this.expr = expr;
      this.stub = createDOMPlaceholder();
      this.pristine = dom;

      var p = dom.parentNode;
      p.insertBefore(this.stub, dom);
      p.removeChild(dom);

      return this;
    },
    update: function update() {
      this.value = tmpl(this.expr, this.tag);

      if (this.value && !this.current) {
        // insert
        this.current = this.pristine.cloneNode(true);
        this.stub.parentNode.insertBefore(this.current, this.stub);
        this.expressions = [];
        parseExpressions.apply(this.tag, [this.current, this.expressions, true]);
      } else if (!this.value && this.current) {
        // remove
        unmountAll(this.expressions);
        if (this.current._tag) {
          this.current._tag.unmount();
        } else if (this.current.parentNode) {
          this.current.parentNode.removeChild(this.current);
        }
        this.current = null;
        this.expressions = [];
      }

      if (this.value) {
        updateAllExpressions.call(this.tag, this.expressions);
      }
    },
    unmount: function unmount() {
      unmountAll(this.expressions || []);
    }
  };

  var RefExpr = {
    init: function init(dom, parent, attrName, attrValue) {
      this.dom = dom;
      this.attr = attrName;
      this.rawValue = attrValue;
      this.parent = parent;
      this.hasExp = tmpl.hasExpr(attrValue);
      return this;
    },
    update: function update() {
      var old = this.value;
      var customParent = this.parent && getImmediateCustomParentTag(this.parent);
      // if the referenced element is a custom tag, then we set the tag itself, rather than DOM
      var tagOrDom = this.dom.__ref || this.tag || this.dom;

      this.value = this.hasExp ? tmpl(this.rawValue, this.parent) : this.rawValue;

      // the name changed, so we need to remove it from the old key (if present)
      if (!isBlank(old) && customParent) {
        arrayishRemove(customParent.refs, old, tagOrDom);
      }
      if (!isBlank(this.value) && isString(this.value)) {
        // add it to the refs of parent tag (this behavior was changed >=3.0)
        if (customParent) {
          arrayishAdd(customParent.refs, this.value, tagOrDom,
          // use an array if it's a looped node and the ref is not an expression
          null, this.parent.__.index);
        }

        if (this.value !== old) {
          setAttr(this.dom, this.attr, this.value);
        }
      } else {
        remAttr(this.dom, this.attr);
      }

      // cache the ref bound to this dom node
      // to reuse it in future (see also #2329)
      if (!this.dom.__ref) {
        this.dom.__ref = tagOrDom;
      }
    },
    unmount: function unmount() {
      var tagOrDom = this.tag || this.dom;
      var customParent = this.parent && getImmediateCustomParentTag(this.parent);
      if (!isBlank(this.value) && customParent) {
        arrayishRemove(customParent.refs, this.value, tagOrDom);
      }
    }
  };

  /**
   * Convert the item looped into an object used to extend the child tag properties
   * @param   { Object } expr - object containing the keys used to extend the children tags
   * @param   { * } key - value to assign to the new object returned
   * @param   { * } val - value containing the position of the item in the array
   * @param   { Object } base - prototype object for the new item
   * @returns { Object } - new object containing the values of the original item
   *
   * The variables 'key' and 'val' are arbitrary.
   * They depend on the collection type looped (Array, Object)
   * and on the expression used on the each tag
   *
   */
  function mkitem(expr, key, val, base) {
    var item = base ? Object.create(base) : {};
    item[expr.key] = key;
    if (expr.pos) {
      item[expr.pos] = val;
    }
    return item;
  }

  /**
   * Unmount the redundant tags
   * @param   { Array } items - array containing the current items to loop
   * @param   { Array } tags - array containing all the children tags
   */
  function unmountRedundant(items, tags) {
    var i = tags.length,
        j = items.length;

    while (i > j) {
      i--;
      remove.apply(tags[i], [tags, i]);
    }
  }

  /**
   * Remove a child tag
   * @this Tag
   * @param   { Array } tags - tags collection
   * @param   { Number } i - index of the tag to remove
   */
  function remove(tags, i) {
    tags.splice(i, 1);
    this.unmount();
    arrayishRemove(this.parent, this, this.__.tagName, true);
  }

  /**
   * Move the nested custom tags in non custom loop tags
   * @this Tag
   * @param   { Number } i - current position of the loop tag
   */
  function moveNestedTags(i) {
    var this$1 = this;

    each(Object.keys(this.tags), function (tagName) {
      moveChildTag.apply(this$1.tags[tagName], [tagName, i]);
    });
  }

  /**
   * Move a child tag
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to move
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function move(root, nextTag, isVirtual) {
    if (isVirtual) {
      moveVirtual.apply(this, [root, nextTag]);
    } else {
      safeInsert(root, this.root, nextTag.root);
    }
  }

  /**
   * Insert and mount a child tag
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Tag } nextTag - instance of the next tag preceding the one we want to insert
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function insert(root, nextTag, isVirtual) {
    if (isVirtual) {
      makeVirtual.apply(this, [root, nextTag]);
    } else {
      safeInsert(root, this.root, nextTag.root);
    }
  }

  /**
   * Append a new tag into the DOM
   * @this Tag
   * @param   { HTMLElement } root - dom node containing all the loop children
   * @param   { Boolean } isVirtual - is it a virtual tag?
   */
  function append(root, isVirtual) {
    if (isVirtual) {
      makeVirtual.call(this, root);
    } else {
      root.appendChild(this.root);
    }
  }

  /**
   * Manage tags having the 'each'
   * @param   { HTMLElement } dom - DOM node we need to loop
   * @param   { Tag } parent - parent tag instance where the dom node is contained
   * @param   { String } expr - string contained in the 'each' attribute
   * @returns { Object } expression object for this each loop
   */
  function _each(dom, parent, expr) {

    // remove the each property from the original tag
    remAttr(dom, LOOP_DIRECTIVE);

    var mustReorder = _typeof(getAttr(dom, LOOP_NO_REORDER_DIRECTIVE)) !== T_STRING || remAttr(dom, LOOP_NO_REORDER_DIRECTIVE),
        tagName = getTagName(dom),
        impl = __TAG_IMPL[tagName],
        parentNode = dom.parentNode,
        placeholder = createDOMPlaceholder(),
        child = getTag(dom),
        ifExpr = getAttr(dom, CONDITIONAL_DIRECTIVE),
        tags = [],
        oldItems = [],
        hasKeys,
        isLoop = true,
        isAnonymous = !__TAG_IMPL[tagName],
        isVirtual = dom.tagName === 'VIRTUAL';

    // parse the each expression
    expr = tmpl.loopKeys(expr);
    expr.isLoop = true;

    if (ifExpr) {
      remAttr(dom, CONDITIONAL_DIRECTIVE);
    }

    // insert a marked where the loop tags will be injected
    parentNode.insertBefore(placeholder, dom);
    parentNode.removeChild(dom);

    expr.update = function updateEach() {
      // get the new items collection
      expr.value = tmpl(expr.val, parent);

      var frag = createFrag(),
          items = expr.value,
          isObject$$1 = !isArray(items) && !isString(items),
          root = placeholder.parentNode;

      // if this DOM was removed the update here is useless
      // this condition fixes also a weird async issue on IE in our unit test
      if (!root) {
        return;
      }

      // object loop. any changes cause full redraw
      if (isObject$$1) {
        hasKeys = items || false;
        items = hasKeys ? Object.keys(items).map(function (key) {
          return mkitem(expr, items[key], key);
        }) : [];
      } else {
        hasKeys = false;
      }

      if (ifExpr) {
        items = items.filter(function (item, i) {
          if (expr.key && !isObject$$1) {
            return !!tmpl(ifExpr, mkitem(expr, item, i, parent));
          }

          return !!tmpl(ifExpr, extend(Object.create(parent), item));
        });
      }

      // loop all the new items
      each(items, function (item, i) {
        // reorder only if the items are objects
        var doReorder = mustReorder && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === T_OBJECT && !hasKeys,
            oldPos = oldItems.indexOf(item),
            isNew = oldPos === -1,
            pos = !isNew && doReorder ? oldPos : i,

        // does a tag exist in this position?
        tag = tags[pos],
            mustAppend = i >= oldItems.length,
            mustCreate = doReorder && isNew || !doReorder && !tag;

        item = !hasKeys && expr.key ? mkitem(expr, item, i) : item;

        // new tag
        if (mustCreate) {
          tag = new Tag$1(impl, {
            parent: parent,
            isLoop: isLoop,
            isAnonymous: isAnonymous,
            tagName: tagName,
            root: dom.cloneNode(isAnonymous),
            item: item,
            index: i
          }, dom.innerHTML);

          // mount the tag
          tag.mount();

          if (mustAppend) {
            append.apply(tag, [frag || root, isVirtual]);
          } else {
            insert.apply(tag, [root, tags[i], isVirtual]);
          }

          if (!mustAppend) {
            oldItems.splice(i, 0, item);
          }
          tags.splice(i, 0, tag);
          if (child) {
            arrayishAdd(parent.tags, tagName, tag, true);
          }
        } else if (pos !== i && doReorder) {
          // move
          if (contains(items, oldItems[pos])) {
            move.apply(tag, [root, tags[i], isVirtual]);
            // move the old tag instance
            tags.splice(i, 0, tags.splice(pos, 1)[0]);
            // move the old item
            oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
          }

          // update the position attribute if it exists
          if (expr.pos) {
            tag[expr.pos] = i;
          }

          // if the loop tags are not custom
          // we need to move all their custom tags into the right position
          if (!child && tag.tags) {
            moveNestedTags.call(tag, i);
          }
        }

        // cache the original item to use it in the events bound to this node
        // and its children
        tag.__.item = item;
        tag.__.index = i;
        tag.__.parent = parent;

        if (!mustCreate) {
          tag.update(item);
        }
      });

      // remove the redundant tags
      unmountRedundant(items, tags);

      // clone the items array
      oldItems = items.slice();

      // this condition is weird u
      root.insertBefore(frag, placeholder);
    };

    expr.unmount = function () {
      each(tags, function (t) {
        t.unmount();
      });
    };

    return expr;
  }

  /**
   * Walk the tag DOM to detect the expressions to evaluate
   * @this Tag
   * @param   { HTMLElement } root - root tag where we will start digging the expressions
   * @param   { Array } expressions - empty array where the expressions will be added
   * @param   { Boolean } mustIncludeRoot - flag to decide whether the root must be parsed as well
   * @returns { Object } an object containing the root noode and the dom tree
   */
  function parseExpressions(root, expressions, mustIncludeRoot) {
    var this$1 = this;

    var tree = { parent: { children: expressions } };

    walkNodes(root, function (dom, ctx) {
      var type = dom.nodeType,
          parent = ctx.parent,
          attr,
          expr,
          tagImpl;
      if (!mustIncludeRoot && dom === root) {
        return { parent: parent };
      }

      // text node
      if (type === 3 && dom.parentNode.tagName !== 'STYLE' && tmpl.hasExpr(dom.nodeValue)) {
        parent.children.push({ dom: dom, expr: dom.nodeValue });
      }

      if (type !== 1) {
        return ctx;
      } // not an element

      var isVirtual = dom.tagName === 'VIRTUAL';

      // loop. each does it's own thing (for now)
      if (attr = getAttr(dom, LOOP_DIRECTIVE)) {
        if (isVirtual) {
          setAttr(dom, 'loopVirtual', true);
        } // ignore here, handled in _each
        parent.children.push(_each(dom, this$1, attr));
        return false;
      }

      // if-attrs become the new parent. Any following expressions (either on the current
      // element, or below it) become children of this expression.
      if (attr = getAttr(dom, CONDITIONAL_DIRECTIVE)) {
        parent.children.push(Object.create(IfExpr).init(dom, this$1, attr));
        return false;
      }

      if (expr = getAttr(dom, IS_DIRECTIVE)) {
        if (tmpl.hasExpr(expr)) {
          parent.children.push({ isRtag: true, expr: expr, dom: dom, attrs: [].slice.call(dom.attributes) });
          return false;
        }
      }

      // if this is a tag, stop traversing here.
      // we ignore the root, since parseExpressions is called while we're mounting that root
      tagImpl = getTag(dom);
      if (isVirtual) {
        if (getAttr(dom, 'virtualized')) {
          dom.parentElement.removeChild(dom);
        } // tag created, remove from dom
        if (!tagImpl && !getAttr(dom, 'virtualized') && !getAttr(dom, 'loopVirtual')) // ok to create virtual tag
          {
            tagImpl = { tmpl: dom.outerHTML };
          }
      }

      if (tagImpl && (dom !== root || mustIncludeRoot)) {
        if (isVirtual && !getAttr(dom, IS_DIRECTIVE)) {
          // handled in update
          // can not remove attribute like directives
          // so flag for removal after creation to prevent maximum stack error
          setAttr(dom, 'virtualized', true);

          var tag = new Tag$1({ tmpl: dom.outerHTML }, { root: dom, parent: this$1 }, dom.innerHTML);
          parent.children.push(tag); // no return, anonymous tag, keep parsing
        } else {
          var conf = { root: dom, parent: this$1, hasImpl: true };
          parent.children.push(initChildTag(tagImpl, conf, dom.innerHTML, this$1));
          return false;
        }
      }

      // attribute expressions
      parseAttributes.apply(this$1, [dom, dom.attributes, function (attr, expr) {
        if (!expr) {
          return;
        }
        parent.children.push(expr);
      }]);

      // whatever the parent is, all child elements get the same parent.
      // If this element had an if-attr, that's the parent for all child elements
      return { parent: parent };
    }, tree);
  }

  /**
   * Calls `fn` for every attribute on an element. If that attr has an expression,
   * it is also passed to fn.
   * @this Tag
   * @param   { HTMLElement } dom - dom node to parse
   * @param   { Array } attrs - array of attributes
   * @param   { Function } fn - callback to exec on any iteration
   */
  function parseAttributes(dom, attrs, fn) {
    var this$1 = this;

    each(attrs, function (attr) {
      if (!attr) {
        return false;
      }

      var name = attr.name,
          bool = isBoolAttr(name),
          expr;

      if (contains(REF_DIRECTIVES, name)) {
        expr = Object.create(RefExpr).init(dom, this$1, name, attr.value);
      } else if (tmpl.hasExpr(attr.value)) {
        expr = { dom: dom, expr: attr.value, attr: name, bool: bool };
      }

      fn(attr, expr);
    });
  }

  /*
    Includes hacks needed for the Internet Explorer version 9 and below
    See: http://kangax.github.io/compat-table/es5/#ie8
         http://codeplanet.io/dropping-ie8/
  */

  var reHasYield = /<yield\b/i;
  var reYieldAll = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig;
  var reYieldSrc = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig;
  var reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
  var rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' };
  var tblTags = IE_VERSION && IE_VERSION < 10 ? RE_SPECIAL_TAGS : RE_SPECIAL_TAGS_NO_OPTION;
  var GENERIC = 'div';
  var SVG = 'svg';

  /*
    Creates the root element for table or select child elements:
    tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
  */
  function specialTags(el, tmpl, tagName) {

    var select = tagName[0] === 'o',
        parent = select ? 'select>' : 'table>';

    // trim() is important here, this ensures we don't have artifacts,
    // so we can check if we have only one element inside the parent
    el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent;
    parent = el.firstChild;

    // returns the immediate parent if tr/th/td/col is the only element, if not
    // returns the whole tree, as this can include additional elements
    /* istanbul ignore next */
    if (select) {
      parent.selectedIndex = -1; // for IE9, compatible w/current riot behavior
    } else {
      // avoids insertion of cointainer inside container (ex: tbody inside tbody)
      var tname = rootEls[tagName];
      if (tname && parent.childElementCount === 1) {
        parent = $(tname, parent);
      }
    }
    return parent;
  }

  /*
    Replace the yield tag from any tag template with the innerHTML of the
    original tag in the page
  */
  function replaceYield(tmpl, html) {
    // do nothing if no yield
    if (!reHasYield.test(tmpl)) {
      return tmpl;
    }

    // be careful with #1343 - string on the source having `$1`
    var src = {};

    html = html && html.replace(reYieldSrc, function (_, ref, text) {
      src[ref] = src[ref] || text; // preserve first definition
      return '';
    }).trim();

    return tmpl.replace(reYieldDest, function (_, ref, def) {
      // yield with from - to attrs
      return src[ref] || def || '';
    }).replace(reYieldAll, function (_, def) {
      // yield without any "from"
      return html || def || '';
    });
  }

  /**
   * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
   * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
   *
   * @param   { String } tmpl  - The template coming from the custom tag definition
   * @param   { String } html - HTML content that comes from the DOM element where you
   *           will mount the tag, mostly the original tag in the page
   * @param   { Boolean } isSvg - true if the root node is an svg
   * @returns { HTMLElement } DOM element with _tmpl_ merged through `YIELD` with the _html_.
   */
  function mkdom(tmpl, html, isSvg$$1) {
    var match = tmpl && tmpl.match(/^\s*<([-\w]+)/),
        tagName = match && match[1].toLowerCase(),
        el = mkEl(isSvg$$1 ? SVG : GENERIC);

    // replace all the yield tags with the tag inner html
    tmpl = replaceYield(tmpl, html);

    /* istanbul ignore next */
    if (tblTags.test(tagName)) {
      el = specialTags(el, tmpl, tagName);
    } else {
      setInnerHTML(el, tmpl);
    }

    return el;
  }

  /**
   * Another way to create a riot tag a bit more es6 friendly
   * @param { HTMLElement } el - tag DOM selector or DOM node/s
   * @param { Object } opts - tag logic
   * @returns { Tag } new riot tag instance
   */
  function Tag$2(el, opts) {
    // get the tag properties from the class constructor
    var ref = this;
    var name = ref.name;
    var tmpl = ref.tmpl;
    var css = ref.css;
    var attrs = ref.attrs;
    var onCreate = ref.onCreate;
    // register a new tag and cache the class prototype
    if (!__TAG_IMPL[name]) {
      tag$1(name, tmpl, css, attrs, onCreate);
      // cache the class constructor
      __TAG_IMPL[name].class = this.constructor;
    }

    // mount the tag using the class instance
    mountTo(el, name, opts, this);
    // inject the component css
    if (css) {
      styleManager.inject();
    }

    return this;
  }

  /**
   * Create a new riot tag implementation
   * @param   { String }   name - name/id of the new riot tag
   * @param   { String }   tmpl - tag template
   * @param   { String }   css - custom tag css
   * @param   { String }   attrs - root tag attributes
   * @param   { Function } fn - user function
   * @returns { String } name/id of the tag just created
   */
  function tag$1(name, tmpl, css, attrs, fn) {
    if (isFunction(attrs)) {
      fn = attrs;

      if (/^[\w\-]+\s?=/.test(css)) {
        attrs = css;
        css = '';
      } else {
        attrs = '';
      }
    }

    if (css) {
      if (isFunction(css)) {
        fn = css;
      } else {
        styleManager.add(css);
      }
    }

    name = name.toLowerCase();
    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

    return name;
  }

  /**
   * Create a new riot tag implementation (for use by the compiler)
   * @param   { String }   name - name/id of the new riot tag
   * @param   { String }   tmpl - tag template
   * @param   { String }   css - custom tag css
   * @param   { String }   attrs - root tag attributes
   * @param   { Function } fn - user function
   * @returns { String } name/id of the tag just created
   */
  function tag2$1(name, tmpl, css, attrs, fn) {
    if (css) {
      styleManager.add(css, name);
    }

    __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };

    return name;
  }

  /**
   * Mount a tag using a specific tag implementation
   * @param   { * } selector - tag DOM selector or DOM node/s
   * @param   { String } tagName - tag implementation name
   * @param   { Object } opts - tag logic
   * @returns { Array } new tags instances
   */
  function mount$1(selector, tagName, opts) {
    var tags = [];
    var elem, allTags;

    function pushTagsTo(root) {
      if (root.tagName) {
        var riotTag = getAttr(root, IS_DIRECTIVE),
            tag;

        // have tagName? force riot-tag to be the same
        if (tagName && riotTag !== tagName) {
          riotTag = tagName;
          setAttr(root, IS_DIRECTIVE, tagName);
        }

        tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);

        if (tag) {
          tags.push(tag);
        }
      } else if (root.length) {
        each(root, pushTagsTo);
      } // assume nodeList
    }

    // inject styles into DOM
    styleManager.inject();

    if (isObject(tagName)) {
      opts = tagName;
      tagName = 0;
    }

    // crawl the DOM to find the tag
    if (isString(selector)) {
      selector = selector === '*' ?
      // select all registered tags
      // & tags found with the riot-tag attribute set
      allTags = selectTags() :
      // or just the ones named like the selector
      selector + selectTags(selector.split(/, */));

      // make sure to pass always a selector
      // to the querySelectorAll function
      elem = selector ? $$(selector) : [];
    } else
      // probably you have passed already a tag or a NodeList
      {
        elem = selector;
      }

    // select all the registered and mount them inside their root elements
    if (tagName === '*') {
      // get all custom tags
      tagName = allTags || selectTags();
      // if the root els it's just a single tag
      if (elem.tagName) {
        elem = $$(tagName, elem);
      } else {
        // select all the children for all the different root elements
        var nodeList = [];

        each(elem, function (_el) {
          return nodeList.push($$(tagName, _el));
        });

        elem = nodeList;
      }
      // get rid of the tagName
      tagName = 0;
    }

    pushTagsTo(elem);

    return tags;
  }

  // Create a mixin that could be globally shared across all the tags
  var mixins = {};
  var globals = mixins[GLOBAL_MIXIN] = {};
  var mixins_id = 0;

  /**
   * Create/Return a mixin by its name
   * @param   { String }  name - mixin name (global mixin if object)
   * @param   { Object }  mix - mixin logic
   * @param   { Boolean } g - is global?
   * @returns { Object }  the mixin logic
   */
  function mixin$1(name, mix, g) {
    // Unnamed global
    if (isObject(name)) {
      mixin$1("__" + mixins_id++ + "__", name, true);
      return;
    }

    var store = g ? globals : mixins;

    // Getter
    if (!mix) {
      if (isUndefined(store[name])) {
        throw new Error("Unregistered mixin: " + name);
      }

      return store[name];
    }

    // Setter
    store[name] = isFunction(mix) ? extend(mix.prototype, store[name] || {}) && mix : extend(store[name] || {}, mix);
  }

  /**
   * Update all the tags instances created
   * @returns { Array } all the tags instances
   */
  function update$1() {
    return each(__TAGS_CACHE, function (tag) {
      return tag.update();
    });
  }

  function unregister$1(name) {
    __TAG_IMPL[name] = null;
  }

  var version$1 = 'v3.6.0';

  var core = Object.freeze({
    Tag: Tag$2,
    tag: tag$1,
    tag2: tag2$1,
    mount: mount$1,
    mixin: mixin$1,
    update: update$1,
    unregister: unregister$1,
    version: version$1
  });

  // counter to give a unique id to all the Tag instances
  var __uid = 0;

  /**
   * We need to update opts for this tag. That requires updating the expressions
   * in any attributes on the tag, and then copying the result onto opts.
   * @this Tag
   * @param   {Boolean} isLoop - is it a loop tag?
   * @param   { Tag }  parent - parent tag node
   * @param   { Boolean }  isAnonymous - is it a tag without any impl? (a tag not registered)
   * @param   { Object }  opts - tag options
   * @param   { Array }  instAttrs - tag attributes array
   */
  function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) {
    // isAnonymous `each` tags treat `dom` and `root` differently. In this case
    // (and only this case) we don't need to do updateOpts, because the regular parse
    // will update those attrs. Plus, isAnonymous tags don't need opts anyway
    if (isLoop && isAnonymous) {
      return;
    }

    var ctx = !isAnonymous && isLoop ? this : parent || this;
    each(instAttrs, function (attr) {
      if (attr.expr) {
        updateAllExpressions.call(ctx, [attr.expr]);
      }
      // normalize the attribute names
      opts[toCamel(attr.name).replace(ATTRS_PREFIX, '')] = attr.expr ? attr.expr.value : attr.value;
    });
  }

  /**
   * Tag class
   * @constructor
   * @param { Object } impl - it contains the tag template, and logic
   * @param { Object } conf - tag options
   * @param { String } innerHTML - html that eventually we need to inject in the tag
   */
  function Tag$1(impl, conf, innerHTML) {
    if (impl === void 0) impl = {};
    if (conf === void 0) conf = {};

    var opts = extend({}, conf.opts),
        parent = conf.parent,
        isLoop = conf.isLoop,
        isAnonymous = !!conf.isAnonymous,
        skipAnonymous = settings$1.skipAnonymousTags && isAnonymous,
        item = cleanUpData(conf.item),
        index = conf.index,
        // available only for the looped nodes
    instAttrs = [],
        // All attributes on the Tag when it's first parsed
    implAttrs = [],
        // expressions on this type of Tag
    expressions = [],
        root = conf.root,
        tagName = conf.tagName || getTagName(root),
        isVirtual = tagName === 'virtual',
        isInline = !isVirtual && !impl.tmpl,
        propsInSyncWithParent = [],
        dom;

    // make this tag observable
    if (!skipAnonymous) {
      observable$1(this);
    }
    // only call unmount if we have a valid __TAG_IMPL (has name property)
    if (impl.name && root._tag) {
      root._tag.unmount(true);
    }

    // not yet mounted
    this.isMounted = false;

    defineProperty(this, '__', {
      isAnonymous: isAnonymous,
      instAttrs: instAttrs,
      innerHTML: innerHTML,
      tagName: tagName,
      index: index,
      isLoop: isLoop,
      isInline: isInline,
      // tags having event listeners
      // it would be better to use weak maps here but we can not introduce breaking changes now
      listeners: [],
      // these vars will be needed only for the virtual tags
      virts: [],
      tail: null,
      head: null,
      parent: null,
      item: null
    });

    // create a unique id to this tag
    // it could be handy to use it also to improve the virtual dom rendering speed
    defineProperty(this, '_riot_id', ++__uid); // base 1 allows test !t._riot_id
    defineProperty(this, 'root', root);
    extend(this, { opts: opts }, item);
    // protect the "tags" and "refs" property from being overridden
    defineProperty(this, 'parent', parent || null);
    defineProperty(this, 'tags', {});
    defineProperty(this, 'refs', {});

    if (isInline || isLoop && isAnonymous) {
      dom = root;
    } else {
      if (!isVirtual) {
        root.innerHTML = '';
      }
      dom = mkdom(impl.tmpl, innerHTML, isSvg(root));
    }

    /**
     * Update the tag expressions and options
     * @param   { * }  data - data we want to use to extend the tag properties
     * @returns { Tag } the current tag instance
     */
    defineProperty(this, 'update', function tagUpdate(data) {
      var nextOpts = {},
          canTrigger = this.isMounted && !skipAnonymous;

      // make sure the data passed will not override
      // the component core methods
      data = cleanUpData(data);
      extend(this, data);
      updateOpts.apply(this, [isLoop, parent, isAnonymous, nextOpts, instAttrs]);

      if (canTrigger && this.isMounted && isFunction(this.shouldUpdate) && !this.shouldUpdate(data, nextOpts)) {
        return this;
      }

      // inherit properties from the parent, but only for isAnonymous tags
      if (isLoop && isAnonymous) {
        inheritFrom.apply(this, [this.parent, propsInSyncWithParent]);
      }
      extend(opts, nextOpts);
      if (canTrigger) {
        this.trigger('update', data);
      }
      updateAllExpressions.call(this, expressions);
      if (canTrigger) {
        this.trigger('updated');
      }

      return this;
    }.bind(this));

    /**
     * Add a mixin to this tag
     * @returns { Tag } the current tag instance
     */
    defineProperty(this, 'mixin', function tagMixin() {
      var this$1 = this;

      each(arguments, function (mix) {
        var instance, obj;
        var props = [];

        // properties blacklisted and will not be bound to the tag instance
        var propsBlacklist = ['init', '__proto__'];

        mix = isString(mix) ? mixin$1(mix) : mix;

        // check if the mixin is a function
        if (isFunction(mix)) {
          // create the new mixin instance
          instance = new mix();
        } else {
          instance = mix;
        }

        var proto = Object.getPrototypeOf(instance);

        // build multilevel prototype inheritance chain property list
        do {
          props = props.concat(Object.getOwnPropertyNames(obj || instance));
        } while (obj = Object.getPrototypeOf(obj || instance));

        // loop the keys in the function prototype or the all object keys
        each(props, function (key) {
          // bind methods to this
          // allow mixins to override other properties/parent mixins
          if (!contains(propsBlacklist, key)) {
            // check for getters/setters
            var descriptor = Object.getOwnPropertyDescriptor(instance, key) || Object.getOwnPropertyDescriptor(proto, key);
            var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);

            // apply method only if it does not already exist on the instance
            if (!this$1.hasOwnProperty(key) && hasGetterSetter) {
              Object.defineProperty(this$1, key, descriptor);
            } else {
              this$1[key] = isFunction(instance[key]) ? instance[key].bind(this$1) : instance[key];
            }
          }
        });

        // init method will be called automatically
        if (instance.init) {
          instance.init.bind(this$1)();
        }
      });
      return this;
    }.bind(this));

    /**
     * Mount the current tag instance
     * @returns { Tag } the current tag instance
     */
    defineProperty(this, 'mount', function tagMount() {
      var this$1 = this;

      root._tag = this; // keep a reference to the tag just created

      // Read all the attrs on this instance. This give us the info we need for updateOpts
      parseAttributes.apply(parent, [root, root.attributes, function (attr, expr) {
        if (!isAnonymous && RefExpr.isPrototypeOf(expr)) {
          expr.tag = this$1;
        }
        attr.expr = expr;
        instAttrs.push(attr);
      }]);

      // update the root adding custom attributes coming from the compiler
      implAttrs = [];
      walkAttrs(impl.attrs, function (k, v) {
        implAttrs.push({ name: k, value: v });
      });
      parseAttributes.apply(this, [root, implAttrs, function (attr, expr) {
        if (expr) {
          expressions.push(expr);
        } else {
          setAttr(root, attr.name, attr.value);
        }
      }]);

      // initialiation
      updateOpts.apply(this, [isLoop, parent, isAnonymous, opts, instAttrs]);

      // add global mixins
      var globalMixin = mixin$1(GLOBAL_MIXIN);

      if (globalMixin && !skipAnonymous) {
        for (var i in globalMixin) {
          if (globalMixin.hasOwnProperty(i)) {
            this$1.mixin(globalMixin[i]);
          }
        }
      }

      if (impl.fn) {
        impl.fn.call(this, opts);
      }

      if (!skipAnonymous) {
        this.trigger('before-mount');
      }

      // parse layout after init. fn may calculate args for nested custom tags
      parseExpressions.apply(this, [dom, expressions, isAnonymous]);

      this.update(item);

      if (!isAnonymous && !isInline) {
        while (dom.firstChild) {
          root.appendChild(dom.firstChild);
        }
      }

      defineProperty(this, 'root', root);
      defineProperty(this, 'isMounted', true);

      if (skipAnonymous) {
        return;
      }

      // if it's not a child tag we can trigger its mount event
      if (!this.parent) {
        this.trigger('mount');
      }
      // otherwise we need to wait that the parent "mount" or "updated" event gets triggered
      else {
          var p = getImmediateCustomParentTag(this.parent);
          p.one(!p.isMounted ? 'mount' : 'updated', function () {
            this$1.trigger('mount');
          });
        }

      return this;
    }.bind(this));

    /**
     * Unmount the tag instance
     * @param { Boolean } mustKeepRoot - if it's true the root node will not be removed
     * @returns { Tag } the current tag instance
     */
    defineProperty(this, 'unmount', function tagUnmount(mustKeepRoot) {
      var this$1 = this;

      var el = this.root,
          p = el.parentNode,
          ptag,
          tagIndex = __TAGS_CACHE.indexOf(this);

      if (!skipAnonymous) {
        this.trigger('before-unmount');
      }

      // clear all attributes coming from the mounted tag
      walkAttrs(impl.attrs, function (name) {
        if (startsWith(name, ATTRS_PREFIX)) {
          name = name.slice(ATTRS_PREFIX.length);
        }

        remAttr(root, name);
      });

      // remove all the event listeners
      this.__.listeners.forEach(function (dom) {
        Object.keys(dom[RIOT_EVENTS_KEY]).forEach(function (eventName) {
          dom.removeEventListener(eventName, dom[RIOT_EVENTS_KEY][eventName]);
        });
      });

      // remove this tag instance from the global virtualDom variable
      if (tagIndex !== -1) {
        __TAGS_CACHE.splice(tagIndex, 1);
      }

      if (p || isVirtual) {
        if (parent) {
          ptag = getImmediateCustomParentTag(parent);

          if (isVirtual) {
            Object.keys(this.tags).forEach(function (tagName) {
              arrayishRemove(ptag.tags, tagName, this$1.tags[tagName]);
            });
          } else {
            arrayishRemove(ptag.tags, tagName, this);
            // remove from _parent too
            if (parent !== ptag) {
              arrayishRemove(parent.tags, tagName, this);
            }
          }
        } else {
          // remove the tag contents
          setInnerHTML(el, '');
        }

        if (p && !mustKeepRoot) {
          p.removeChild(el);
        }
      }

      if (this.__.virts) {
        each(this.__.virts, function (v) {
          if (v.parentNode) {
            v.parentNode.removeChild(v);
          }
        });
      }

      // allow expressions to unmount themselves
      unmountAll(expressions);
      each(instAttrs, function (a) {
        return a.expr && a.expr.unmount && a.expr.unmount();
      });

      // custom internal unmount function to avoid relying on the observable
      if (this.__.onUnmount) {
        this.__.onUnmount();
      }

      if (!skipAnonymous) {
        this.trigger('unmount');
        this.off('*');
      }

      defineProperty(this, 'isMounted', false);

      delete this.root._tag;

      return this;
    }.bind(this));
  }

  /**
   * Detect the tag implementation by a DOM node
   * @param   { Object } dom - DOM node we need to parse to get its tag implementation
   * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
   */
  function getTag(dom) {
    return dom.tagName && __TAG_IMPL[getAttr(dom, IS_DIRECTIVE) || getAttr(dom, IS_DIRECTIVE) || dom.tagName.toLowerCase()];
  }

  /**
   * Inherit properties from a target tag instance
   * @this Tag
   * @param   { Tag } target - tag where we will inherit properties
   * @param   { Array } propsInSyncWithParent - array of properties to sync with the target
   */
  function inheritFrom(target, propsInSyncWithParent) {
    var this$1 = this;

    each(Object.keys(target), function (k) {
      // some properties must be always in sync with the parent tag
      var mustSync = !isReservedName(k) && contains(propsInSyncWithParent, k);

      if (isUndefined(this$1[k]) || mustSync) {
        // track the property to keep in sync
        // so we can keep it updated
        if (!mustSync) {
          propsInSyncWithParent.push(k);
        }
        this$1[k] = target[k];
      }
    });
  }

  /**
   * Move the position of a custom tag in its parent tag
   * @this Tag
   * @param   { String } tagName - key where the tag was stored
   * @param   { Number } newPos - index where the new tag will be stored
   */
  function moveChildTag(tagName, newPos) {
    var parent = this.parent,
        tags;
    // no parent no move
    if (!parent) {
      return;
    }

    tags = parent.tags[tagName];

    if (isArray(tags)) {
      tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0]);
    } else {
      arrayishAdd(parent.tags, tagName, this);
    }
  }

  /**
   * Create a new child tag including it correctly into its parent
   * @param   { Object } child - child tag implementation
   * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
   * @param   { String } innerHTML - inner html of the child node
   * @param   { Object } parent - instance of the parent tag including the child custom tag
   * @returns { Object } instance of the new child tag just created
   */
  function initChildTag(child, opts, innerHTML, parent) {
    var tag = new Tag$1(child, opts, innerHTML),
        tagName = opts.tagName || getTagName(opts.root, true),
        ptag = getImmediateCustomParentTag(parent);
    // fix for the parent attribute in the looped elements
    defineProperty(tag, 'parent', ptag);
    // store the real parent tag
    // in some cases this could be different from the custom parent tag
    // for example in nested loops
    tag.__.parent = parent;

    // add this tag to the custom parent tag
    arrayishAdd(ptag.tags, tagName, tag);

    // and also to the real parent tag
    if (ptag !== parent) {
      arrayishAdd(parent.tags, tagName, tag);
    }

    return tag;
  }

  /**
   * Loop backward all the parents tree to detect the first custom parent tag
   * @param   { Object } tag - a Tag instance
   * @returns { Object } the instance of the first custom parent tag found
   */
  function getImmediateCustomParentTag(tag) {
    var ptag = tag;
    while (ptag.__.isAnonymous) {
      if (!ptag.parent) {
        break;
      }
      ptag = ptag.parent;
    }
    return ptag;
  }

  /**
   * Trigger the unmount method on all the expressions
   * @param   { Array } expressions - DOM expressions
   */
  function unmountAll(expressions) {
    each(expressions, function (expr) {
      if (expr instanceof Tag$1) {
        expr.unmount(true);
      } else if (expr.tagName) {
        expr.tag.unmount(true);
      } else if (expr.unmount) {
        expr.unmount();
      }
    });
  }

  /**
   * Get the tag name of any DOM node
   * @param   { Object } dom - DOM node we want to parse
   * @param   { Boolean } skipDataIs - hack to ignore the data-is attribute when attaching to parent
   * @returns { String } name to identify this dom node in riot
   */
  function getTagName(dom, skipDataIs) {
    var child = getTag(dom),
        namedTag = !skipDataIs && getAttr(dom, IS_DIRECTIVE);
    return namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase();
  }

  /**
   * With this function we avoid that the internal Tag methods get overridden
   * @param   { Object } data - options we want to use to extend the tag instance
   * @returns { Object } clean object without containing the riot internal reserved words
   */
  function cleanUpData(data) {
    if (!(data instanceof Tag$1) && !(data && isFunction(data.trigger))) {
      return data;
    }

    var o = {};
    for (var key in data) {
      if (!RE_RESERVED_NAMES.test(key)) {
        o[key] = data[key];
      }
    }
    return o;
  }

  /**
   * Set the property of an object for a given key. If something already
   * exists there, then it becomes an array containing both the old and new value.
   * @param { Object } obj - object on which to set the property
   * @param { String } key - property name
   * @param { Object } value - the value of the property to be set
   * @param { Boolean } ensureArray - ensure that the property remains an array
   * @param { Number } index - add the new item in a certain array position
   */
  function arrayishAdd(obj, key, value, ensureArray, index) {
    var dest = obj[key];
    var isArr = isArray(dest);
    var hasIndex = !isUndefined(index);

    if (dest && dest === value) {
      return;
    }

    // if the key was never set, set it once
    if (!dest && ensureArray) {
      obj[key] = [value];
    } else if (!dest) {
      obj[key] = value;
    }
    // if it was an array and not yet set
    else {
        if (isArr) {
          var oldIndex = dest.indexOf(value);
          // this item never changed its position
          if (oldIndex === index) {
            return;
          }
          // remove the item from its old position
          if (oldIndex !== -1) {
            dest.splice(oldIndex, 1);
          }
          // move or add the item
          if (hasIndex) {
            dest.splice(index, 0, value);
          } else {
            dest.push(value);
          }
        } else {
          obj[key] = [dest, value];
        }
      }
  }

  /**
   * Removes an item from an object at a given key. If the key points to an array,
   * then the item is just removed from the array.
   * @param { Object } obj - object on which to remove the property
   * @param { String } key - property name
   * @param { Object } value - the value of the property to be removed
   * @param { Boolean } ensureArray - ensure that the property remains an array
  */
  function arrayishRemove(obj, key, value, ensureArray) {
    if (isArray(obj[key])) {
      var index = obj[key].indexOf(value);
      if (index !== -1) {
        obj[key].splice(index, 1);
      }
      if (!obj[key].length) {
        delete obj[key];
      } else if (obj[key].length === 1 && !ensureArray) {
        obj[key] = obj[key][0];
      }
    } else {
      delete obj[key];
    } // otherwise just delete the key
  }

  /**
   * Mount a tag creating new Tag instance
   * @param   { Object } root - dom node where the tag will be mounted
   * @param   { String } tagName - name of the riot tag we want to mount
   * @param   { Object } opts - options to pass to the Tag instance
   * @param   { Object } ctx - optional context that will be used to extend an existing class ( used in riot.Tag )
   * @returns { Tag } a new Tag instance
   */
  function mountTo(root, tagName, opts, ctx) {
    var impl = __TAG_IMPL[tagName],
        implClass = __TAG_IMPL[tagName].class,
        tag = ctx || (implClass ? Object.create(implClass.prototype) : {}),

    // cache the inner HTML to fix #855
    innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;

    var conf = extend({ root: root, opts: opts }, { parent: opts ? opts.parent : null });

    if (impl && root) {
      Tag$1.apply(tag, [impl, conf, innerHTML]);
    }

    if (tag && tag.mount) {
      tag.mount(true);
      // add this tag to the virtualDom variable
      if (!contains(__TAGS_CACHE, tag)) {
        __TAGS_CACHE.push(tag);
      }
    }

    return tag;
  }

  /**
   * makes a tag virtual and replaces a reference in the dom
   * @this Tag
   * @param { tag } the tag to make virtual
   * @param { ref } the dom reference location
   */
  function makeReplaceVirtual(tag, ref) {
    var frag = createFrag();
    makeVirtual.call(tag, frag);
    ref.parentNode.replaceChild(frag, ref);
  }

  /**
   * Adds the elements for a virtual tag
   * @this Tag
   * @param { Node } src - the node that will do the inserting or appending
   * @param { Tag } target - only if inserting, insert before this tag's first child
   */
  function makeVirtual(src, target) {
    var this$1 = this;

    var head = createDOMPlaceholder(),
        tail = createDOMPlaceholder(),
        frag = createFrag(),
        sib,
        el;

    this.root.insertBefore(head, this.root.firstChild);
    this.root.appendChild(tail);

    this.__.head = el = head;
    this.__.tail = tail;

    while (el) {
      sib = el.nextSibling;
      frag.appendChild(el);
      this$1.__.virts.push(el); // hold for unmounting
      el = sib;
    }

    if (target) {
      src.insertBefore(frag, target.__.head);
    } else {
      src.appendChild(frag);
    }
  }

  /**
   * Move virtual tag and all child nodes
   * @this Tag
   * @param { Node } src  - the node that will do the inserting
   * @param { Tag } target - insert before this tag's first child
   */
  function moveVirtual(src, target) {
    var this$1 = this;

    var el = this.__.head,
        frag = createFrag(),
        sib;

    while (el) {
      sib = el.nextSibling;
      frag.appendChild(el);
      el = sib;
      if (el === this$1.__.tail) {
        frag.appendChild(el);
        src.insertBefore(frag, target.__.head);
        break;
      }
    }
  }

  /**
   * Get selectors for tags
   * @param   { Array } tags - tag names to select
   * @returns { String } selector
   */
  function selectTags(tags) {
    // select all tags
    if (!tags) {
      var keys = Object.keys(__TAG_IMPL);
      return keys + selectTags(keys);
    }

    return tags.filter(function (t) {
      return !/[^-\w]/.test(t);
    }).reduce(function (list, t) {
      var name = t.trim().toLowerCase();
      return list + ",[" + IS_DIRECTIVE + "=\"" + name + "\"]";
    }, '');
  }

  var tags = Object.freeze({
    getTag: getTag,
    inheritFrom: inheritFrom,
    moveChildTag: moveChildTag,
    initChildTag: initChildTag,
    getImmediateCustomParentTag: getImmediateCustomParentTag,
    unmountAll: unmountAll,
    getTagName: getTagName,
    cleanUpData: cleanUpData,
    arrayishAdd: arrayishAdd,
    arrayishRemove: arrayishRemove,
    mountTo: mountTo,
    makeReplaceVirtual: makeReplaceVirtual,
    makeVirtual: makeVirtual,
    moveVirtual: moveVirtual,
    selectTags: selectTags
  });

  /**
   * Riot public api
   */
  var settings = settings$1;
  var util = {
    tmpl: tmpl,
    brackets: brackets,
    styleManager: styleManager,
    vdom: __TAGS_CACHE,
    styleNode: styleManager.styleNode,
    // export the riot internal utils as well
    dom: dom,
    check: check,
    misc: misc,
    tags: tags
  };

  // export the core props/methods
  var Tag$$1 = Tag$2;
  var tag$$1 = tag$1;
  var tag2$$1 = tag2$1;
  var mount$$1 = mount$1;
  var mixin$$1 = mixin$1;
  var update$$1 = update$1;
  var unregister$$1 = unregister$1;
  var version$$1 = version$1;
  var observable = observable$1;

  var riot$1 = extend({}, core, {
    observable: observable$1,
    settings: settings,
    util: util
  });

  exports.settings = settings;
  exports.util = util;
  exports.Tag = Tag$$1;
  exports.tag = tag$$1;
  exports.tag2 = tag2$$1;
  exports.mount = mount$$1;
  exports.mixin = mixin$$1;
  exports.update = update$$1;
  exports.unregister = unregister$$1;
  exports.version = version$$1;
  exports.observable = observable;
  exports['default'] = riot$1;

  Object.defineProperty(exports, '__esModule', { value: true });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) {/**/}

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && typeof target !== 'function') {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _riot = __webpack_require__(0);

var _riot2 = _interopRequireDefault(_riot);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.body.innerHTML = '<app></app>';
_riot2.default.mount('*');
// console.log(components)

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(riot) {

__webpack_require__(4);

__webpack_require__(6);

riot.tag2('app', '<input-datepicker></input-datepicker>', '', '', function (opts) {});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(riot) {

var _nouislider = __webpack_require__(5);

var _nouislider2 = _interopRequireDefault(_nouislider);

var _extend = __webpack_require__(1);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

riot.tag2('input-rangeslider', '<div ref="slider"></div>', '', '', function (opts) {
    var _this = this;

    this.value = parseFloat(this.opts.initialValue) || 0;
    this.on('mount', function () {
        _this.options = {
            start: _this.value,
            connect: [true, false],
            range: {
                min: 0,
                max: 50
            },
            pips: {
                mode: 'count',
                density: 5,
                values: 8
            }
        };
        (0, _extend2.default)(true, _this.options, _this.opts.options);
        _nouislider2.default.create(_this.refs.slider, _this.options);
        _this.refs.slider.noUiSlider.on('update', function (value) {
            _this.value = parseFloat(value);
            _this.trigger('change', value);
        });
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! nouislider - 10.0.0 - 2017-05-28 14:52:48 */

(function (factory) {

	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {

		// Node/CommonJS
		module.exports = factory();
	} else {

		// Browser globals
		window.noUiSlider = factory();
	}
})(function () {

	'use strict';

	var VERSION = '10.0.0';

	function isValidFormatter(entry) {
		return (typeof entry === 'undefined' ? 'undefined' : _typeof(entry)) === 'object' && typeof entry.to === 'function' && typeof entry.from === 'function';
	}

	function removeElement(el) {
		el.parentElement.removeChild(el);
	}

	// Bindable version
	function preventDefault(e) {
		e.preventDefault();
	}

	// Removes duplicates from an array.
	function unique(array) {
		return array.filter(function (a) {
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest(value, to) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset(elem, orientation) {

		var rect = elem.getBoundingClientRect();
		var doc = elem.ownerDocument;
		var docElem = doc.documentElement;
		var pageOffset = getPageOffset(doc);

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
			pageOffset.x = 0;
		}

		return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
	}

	// Checks whether a value is numerical.
	function isNumeric(a) {
		return typeof a === 'number' && !isNaN(a) && isFinite(a);
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor(element, className, duration) {
		if (duration > 0) {
			addClass(element, className);
			setTimeout(function () {
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit(a) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray(a) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals(numStr) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass(el, className) {
		if (el.classList) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass(el, className) {
		if (el.classList) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass(el, className) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset(doc) {

		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
		var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
		var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions() {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}

	// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	// Issue #785
	function getSupportsPassive() {

		var supportsPassive = false;

		try {

			var opts = Object.defineProperty({}, 'passive', {
				get: function get() {
					supportsPassive = true;
				}
			});

			window.addEventListener('test', null, opts);
		} catch (e) {}

		return supportsPassive;
	}

	function getSupportsTouchActionNone() {
		return window.CSS && CSS.supports && CSS.supports('touch-action', 'none');
	}

	// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio(pa, pb) {
		return 100 / (pb - pa);
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage(range, value) {
		return value * 100 / (range[1] - range[0]);
	}

	// (percentage) Where is this value on this range?
	function toPercentage(range, value) {
		return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0]);
	}

	// (value) How much is this percentage on this range?
	function isPercentage(range, value) {
		return value * (range[1] - range[0]) / 100 + range[0];
	}

	// Range conversion

	function getJ(value, arr) {

		var j = 1;

		while (value >= arr[j]) {
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping(xVal, xPct, value) {

		if (value >= xVal.slice(-1)[0]) {
			return 100;
		}

		var j = getJ(value, xVal),
		    va,
		    vb,
		    pa,
		    pb;

		va = xVal[j - 1];
		vb = xVal[j];
		pa = xPct[j - 1];
		pb = xPct[j];

		return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping(xVal, xPct, value) {

		// There is no range group that fits 100
		if (value >= 100) {
			return xVal.slice(-1)[0];
		}

		var j = getJ(value, xPct),
		    va,
		    vb,
		    pa,
		    pb;

		va = xVal[j - 1];
		vb = xVal[j];
		pa = xPct[j - 1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep(xPct, xSteps, snap, value) {

		if (value === 100) {
			return value;
		}

		var j = getJ(value, xPct),
		    a,
		    b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if (snap) {

			a = xPct[j - 1];
			b = xPct[j];

			// Find the closest position, a or b.
			if (value - a > (b - a) / 2) {
				return b;
			}

			return a;
		}

		if (!xSteps[j - 1]) {
			return value;
		}

		return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
	}

	// Entry parsing

	function handleEntryPoint(index, value, that) {

		var percentage;

		// Wrap numerical input in an array.
		if (typeof value === "number") {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if (Object.prototype.toString.call(value) !== '[object Array]') {
			throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if (index === 'min') {
			percentage = 0;
		} else if (index === 'max') {
			percentage = 100;
		} else {
			percentage = parseFloat(index);
		}

		// Check for correct input.
		if (!isNumeric(percentage) || !isNumeric(value[0])) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push(percentage);
		that.xVal.push(value[0]);

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if (!percentage) {
			if (!isNaN(value[1])) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push(isNaN(value[1]) ? false : value[1]);
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint(i, n, that) {

		// Ignore 'false' stepping.
		if (!n) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i + 1]], n) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);

		var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + that.xNumSteps[i] * highestStep;

		that.xHighestCompleteStep[i] = step;
	}

	// Interface

	function Spectrum(entry, snap, singleStep) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [singleStep || false];
		this.xNumSteps = [false];
		this.xHighestCompleteStep = [];

		this.snap = snap;

		var index,
		    ordered = [/* [0, 'min'], [1, '50%'], [2, 'max'] */];

		// Map the object keys to an array.
		for (index in entry) {
			if (entry.hasOwnProperty(index)) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if (ordered.length && _typeof(ordered[0][0]) === "object") {
			ordered.sort(function (a, b) {
				return a[0][0] - b[0][0];
			});
		} else {
			ordered.sort(function (a, b) {
				return a[0] - b[0];
			});
		}

		// Convert all entries to subranges.
		for (index = 0; index < ordered.length; index++) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for (index = 0; index < this.xNumSteps.length; index++) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function (value) {

		var step = this.xNumSteps[0];

		if (step && value / step % 1 !== 0) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function (value) {

		value = toStepping(this.xVal, this.xPct, value);

		return value;
	};

	Spectrum.prototype.fromStepping = function (value) {

		return fromStepping(this.xVal, this.xPct, value);
	};

	Spectrum.prototype.getStep = function (value) {

		value = getStep(this.xPct, this.xSteps, this.snap, value);

		return value;
	};

	Spectrum.prototype.getNearbySteps = function (value) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j - 2], step: this.xNumSteps[j - 2], highestStep: this.xHighestCompleteStep[j - 2] },
			thisStep: { startValue: this.xVal[j - 1], step: this.xNumSteps[j - 1], highestStep: this.xHighestCompleteStep[j - 1] },
			stepAfter: { startValue: this.xVal[j - 0], step: this.xNumSteps[j - 0], highestStep: this.xHighestCompleteStep[j - 0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
	};

	// Outside testing
	Spectrum.prototype.convert = function (value) {
		return this.getStep(this.toStepping(value));
	};

	/*	Every input option is tested and parsed. This'll prevent
 	endless validation in internal methods. These tests are
 	structured with an item for every option available. An
 	option can be marked as required by setting the 'r' flag.
 	The testing function is provided with three arguments:
 		- The provided value for the option;
 		- A reference to the options object;
 		- The name for the option;
 
 	The testing function returns false when an error is detected,
 	or true when everything is OK. It can also modify the option
 	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function to(value) {
			return value !== undefined && value.toFixed(2);
		}, 'from': Number };

	function validateFormat(entry) {

		// Any object with a to and from method is supported.
		if (isValidFormatter(entry)) {
			return true;
		}

		throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
	}

	function testStep(parsed, entry) {

		if (!isNumeric(entry)) {
			throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange(parsed, entry) {

		// Filter incorrect input.
		if ((typeof entry === 'undefined' ? 'undefined' : _typeof(entry)) !== 'object' || Array.isArray(entry)) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
		}

		// Catch missing start or end.
		if (entry.min === undefined || entry.max === undefined) {
			throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if (entry.min === entry.max) {
			throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
	}

	function testStart(parsed, entry) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if (!Array.isArray(entry) || !entry.length) {
			throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap(parsed, entry) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if (typeof entry !== 'boolean') {
			throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
		}
	}

	function testAnimate(parsed, entry) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if (typeof entry !== 'boolean') {
			throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration(parsed, entry) {

		parsed.animationDuration = entry;

		if (typeof entry !== 'number') {
			throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
		}
	}

	function testConnect(parsed, entry) {

		var connect = [false];
		var i;

		// Map legacy options
		if (entry === 'lower') {
			entry = [true, false];
		} else if (entry === 'upper') {
			entry = [false, true];
		}

		// Handle boolean options
		if (entry === true || entry === false) {

			for (i = 1; i < parsed.handles; i++) {
				connect.push(entry);
			}

			connect.push(false);
		}

		// Reject invalid input
		else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
				throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
			} else {
				connect = entry;
			}

		parsed.connect = connect;
	}

	function testOrientation(parsed, entry) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch (entry) {
			case 'horizontal':
				parsed.ort = 0;
				break;
			case 'vertical':
				parsed.ort = 1;
				break;
			default:
				throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
		}
	}

	function testMargin(parsed, entry) {

		if (!isNumeric(entry)) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
		}

		// Issue #582
		if (entry === 0) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if (!parsed.margin) {
			throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit(parsed, entry) {

		if (!isNumeric(entry)) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if (!parsed.limit || parsed.handles < 2) {
			throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testPadding(parsed, entry) {

		if (!isNumeric(entry)) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric.");
		}

		if (entry === 0) {
			return;
		}

		parsed.padding = parsed.spectrum.getMargin(entry);

		if (!parsed.padding) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
		}

		if (parsed.padding < 0) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number.");
		}

		if (parsed.padding >= 50) {
			throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be less than half the range.");
		}
	}

	function testDirection(parsed, entry) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch (entry) {
			case 'ltr':
				parsed.dir = 0;
				break;
			case 'rtl':
				parsed.dir = 1;
				break;
			default:
				throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
		}
	}

	function testBehaviour(parsed, entry) {

		// Make sure the input is a string.
		if (typeof entry !== 'string') {
			throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if (fixed) {

			if (parsed.handles !== 2) {
				throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips(parsed, entry) {

		if (entry === false) {
			return;
		} else if (entry === true) {

			parsed.tooltips = [];

			for (var i = 0; i < parsed.handles; i++) {
				parsed.tooltips.push(true);
			}
		} else {

			parsed.tooltips = asArray(entry);

			if (parsed.tooltips.length !== parsed.handles) {
				throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function (formatter) {
				if (typeof formatter !== 'boolean' && ((typeof formatter === 'undefined' ? 'undefined' : _typeof(formatter)) !== 'object' || typeof formatter.to !== 'function')) {
					throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testAriaFormat(parsed, entry) {
		parsed.ariaFormat = entry;
		validateFormat(entry);
	}

	function testFormat(parsed, entry) {
		parsed.format = entry;
		validateFormat(entry);
	}

	function testCssPrefix(parsed, entry) {

		if (entry !== undefined && typeof entry !== 'string' && entry !== false) {
			throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses(parsed, entry) {

		if (entry !== undefined && (typeof entry === 'undefined' ? 'undefined' : _typeof(entry)) !== 'object') {
			throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
		}

		if (typeof parsed.cssPrefix === 'string') {
			parsed.cssClasses = {};

			for (var key in entry) {
				if (!entry.hasOwnProperty(key)) {
					continue;
				}

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	function testUseRaf(parsed, entry) {
		if (entry === true || entry === false) {
			parsed.useRequestAnimationFrame = entry;
		} else {
			throw new Error("noUiSlider (" + VERSION + "): 'useRequestAnimationFrame' option should be true (default) or false.");
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions(options) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			padding: 0,
			animate: true,
			animationDuration: 300,
			ariaFormat: defaultFormatter,
			format: defaultFormatter
		};

		// Tests are executed in the order they are presented here.
		var tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'padding': { r: false, t: testPadding },
			'behaviour': { r: true, t: testBehaviour },
			'ariaFormat': { r: false, t: testAriaFormat },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: false, t: testCssPrefix },
			'cssClasses': { r: false, t: testCssClasses },
			'useRequestAnimationFrame': { r: false, t: testUseRaf }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal',
			'cssPrefix': 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				handleLower: 'handle-lower',
				handleUpper: 'handle-upper',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			},
			'useRequestAnimationFrame': true
		};

		// AriaFormat defaults to regular format, if any.
		if (options.format && !options.ariaFormat) {
			options.ariaFormat = options.format;
		}

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function (name) {

			// If the option isn't set, but it is required, throw an error.
			if (options[name] === undefined && defaults[name] === undefined) {

				if (tests[name].r) {
					throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t(parsed, options[name] === undefined ? defaults[name] : options[name]);
		});

		// Forward pips options
		parsed.pips = options.pips;

		var styles = [['left', 'top'], ['right', 'bottom']];

		// Pre-define the styles.
		parsed.style = styles[parsed.dir][parsed.ort];
		parsed.styleOposite = styles[parsed.dir ? 0 : 1][parsed.ort];

		return parsed;
	}

	function closure(target, options, originalOptions) {

		var actions = getActions();
		var supportsTouchActionNone = getSupportsTouchActionNone();
		var supportsPassive = supportsTouchActionNone && getSupportsPassive();

		// All variables local to 'closure' are prefixed with 'scope_'
		var scope_Target = target;
		var scope_Locations = [];
		var scope_Base;
		var scope_Handles;
		var scope_HandleNumbers = [];
		var scope_ActiveHandle = false;
		var scope_Connects;
		var scope_Spectrum = options.spectrum;
		var scope_Values = [];
		var scope_Events = {};
		var scope_Self;
		var scope_Pips;
		var scope_Listeners = null;
		var scope_Document = target.ownerDocument;
		var scope_DocumentElement = scope_Document.documentElement;
		var scope_Body = scope_Document.body;

		// Creates a node, adds it to target, returns the new node.
		function addNodeTo(target, className) {

			var div = scope_Document.createElement('div');

			if (className) {
				addClass(div, className);
			}

			target.appendChild(div);

			return div;
		}

		// Append a origin to the base
		function addOrigin(base, handleNumber) {

			var origin = addNodeTo(base, options.cssClasses.origin);
			var handle = addNodeTo(origin, options.cssClasses.handle);

			handle.setAttribute('data-handle', handleNumber);

			// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
			// 0 = focusable and reachable
			handle.setAttribute('tabindex', '0');
			handle.setAttribute('role', 'slider');
			handle.setAttribute('aria-orientation', options.ort ? 'vertical' : 'horizontal');

			if (handleNumber === 0) {
				addClass(handle, options.cssClasses.handleLower);
			} else if (handleNumber === options.handles - 1) {
				addClass(handle, options.cssClasses.handleUpper);
			}

			return origin;
		}

		// Insert nodes for connect elements
		function addConnect(base, add) {

			if (!add) {
				return false;
			}

			return addNodeTo(base, options.cssClasses.connect);
		}

		// Add handles to the slider base.
		function addElements(connectOptions, base) {

			scope_Handles = [];
			scope_Connects = [];

			scope_Connects.push(addConnect(base, connectOptions[0]));

			// [::::O====O====O====]
			// connectOptions = [0, 1, 1, 1]

			for (var i = 0; i < options.handles; i++) {
				// Keep a list of all added handles.
				scope_Handles.push(addOrigin(base, i));
				scope_HandleNumbers[i] = i;
				scope_Connects.push(addConnect(base, connectOptions[i + 1]));
			}
		}

		// Initialize a single slider.
		function addSlider(target) {

			// Apply classes and data to the target.
			addClass(target, options.cssClasses.target);

			if (options.dir === 0) {
				addClass(target, options.cssClasses.ltr);
			} else {
				addClass(target, options.cssClasses.rtl);
			}

			if (options.ort === 0) {
				addClass(target, options.cssClasses.horizontal);
			} else {
				addClass(target, options.cssClasses.vertical);
			}

			scope_Base = addNodeTo(target, options.cssClasses.base);
		}

		function addTooltip(handle, handleNumber) {

			if (!options.tooltips[handleNumber]) {
				return false;
			}

			return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
		}

		// The tooltips option is a shorthand for using the 'update' event.
		function tooltips() {

			// Tooltips are added with options.tooltips in original order.
			var tips = scope_Handles.map(addTooltip);

			bindEvent('update', function (values, handleNumber, unencoded) {

				if (!tips[handleNumber]) {
					return;
				}

				var formattedValue = values[handleNumber];

				if (options.tooltips[handleNumber] !== true) {
					formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
				}

				tips[handleNumber].innerHTML = formattedValue;
			});
		}

		function aria() {

			bindEvent('update', function (values, handleNumber, unencoded, tap, positions) {

				// Update Aria Values for all handles, as a change in one changes min and max values for the next.
				scope_HandleNumbers.forEach(function (handleNumber) {

					var handle = scope_Handles[handleNumber];

					var min = checkHandlePosition(scope_Locations, handleNumber, 0, true, true, true);
					var max = checkHandlePosition(scope_Locations, handleNumber, 100, true, true, true);

					var now = positions[handleNumber];
					var text = options.ariaFormat.to(unencoded[handleNumber]);

					handle.children[0].setAttribute('aria-valuemin', min.toFixed(1));
					handle.children[0].setAttribute('aria-valuemax', max.toFixed(1));
					handle.children[0].setAttribute('aria-valuenow', now.toFixed(1));
					handle.children[0].setAttribute('aria-valuetext', text);
				});
			});
		}

		function getGroup(mode, values, stepped) {

			// Use the range.
			if (mode === 'range' || mode === 'steps') {
				return scope_Spectrum.xVal;
			}

			if (mode === 'count') {

				if (!values) {
					throw new Error("noUiSlider (" + VERSION + "): 'values' required for mode 'count'.");
				}

				// Divide 0 - 100 in 'count' parts.
				var spread = 100 / (values - 1);
				var v;
				var i = 0;

				values = [];

				// List these parts and have them handled as 'positions'.
				while ((v = i++ * spread) <= 100) {
					values.push(v);
				}

				mode = 'positions';
			}

			if (mode === 'positions') {

				// Map all percentages to on-range values.
				return values.map(function (value) {
					return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
				});
			}

			if (mode === 'values') {

				// If the value must be stepped, it needs to be converted to a percentage first.
				if (stepped) {

					return values.map(function (value) {

						// Convert to percentage, apply step, return to value.
						return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
					});
				}

				// Otherwise, we can simply use the values.
				return values;
			}
		}

		function generateSpread(density, mode, group) {

			function safeIncrement(value, increment) {
				// Avoid floating point variance by dropping the smallest decimal places.
				return (value + increment).toFixed(7) / 1;
			}

			var indexes = {};
			var firstInRange = scope_Spectrum.xVal[0];
			var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
			var ignoreFirst = false;
			var ignoreLast = false;
			var prevPct = 0;

			// Create a copy of the group, sort it and filter away all duplicates.
			group = unique(group.slice().sort(function (a, b) {
				return a - b;
			}));

			// Make sure the range starts with the first element.
			if (group[0] !== firstInRange) {
				group.unshift(firstInRange);
				ignoreFirst = true;
			}

			// Likewise for the last one.
			if (group[group.length - 1] !== lastInRange) {
				group.push(lastInRange);
				ignoreLast = true;
			}

			group.forEach(function (current, index) {

				// Get the current step and the lower + upper positions.
				var step;
				var i;
				var q;
				var low = current;
				var high = group[index + 1];
				var newPct;
				var pctDifference;
				var pctPos;
				var type;
				var steps;
				var realSteps;
				var stepsize;

				// When using 'steps' mode, use the provided steps.
				// Otherwise, we'll step on to the next subrange.
				if (mode === 'steps') {
					step = scope_Spectrum.xNumSteps[index];
				}

				// Default to a 'full' step.
				if (!step) {
					step = high - low;
				}

				// Low can be 0, so test for false. If high is undefined,
				// we are at the last subrange. Index 0 is already handled.
				if (low === false || high === undefined) {
					return;
				}

				// Make sure step isn't 0, which would cause an infinite loop (#654)
				step = Math.max(step, 0.0000001);

				// Find all steps in the subrange.
				for (i = low; i <= high; i = safeIncrement(i, step)) {

					// Get the percentage value for the current step,
					// calculate the size for the subrange.
					newPct = scope_Spectrum.toStepping(i);
					pctDifference = newPct - prevPct;

					steps = pctDifference / density;
					realSteps = Math.round(steps);

					// This ratio represents the ammount of percentage-space a point indicates.
					// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
					// Round the percentage offset to an even number, then divide by two
					// to spread the offset on both sides of the range.
					stepsize = pctDifference / realSteps;

					// Divide all points evenly, adding the correct number to this subrange.
					// Run up to <= so that 100% gets a point, event if ignoreLast is set.
					for (q = 1; q <= realSteps; q += 1) {

						// The ratio between the rounded value and the actual size might be ~1% off.
						// Correct the percentage offset by the number of points
						// per subrange. density = 1 will result in 100 points on the
						// full range, 2 for 50, 4 for 25, etc.
						pctPos = prevPct + q * stepsize;
						indexes[pctPos.toFixed(5)] = ['x', 0];
					}

					// Determine the point type.
					type = group.indexOf(i) > -1 ? 1 : mode === 'steps' ? 2 : 0;

					// Enforce the 'ignoreFirst' option by overwriting the type for 0.
					if (!index && ignoreFirst) {
						type = 0;
					}

					if (!(i === high && ignoreLast)) {
						// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
						indexes[newPct.toFixed(5)] = [i, type];
					}

					// Update the percentage count.
					prevPct = newPct;
				}
			});

			return indexes;
		}

		function addMarking(spread, filterFunc, formatter) {

			var element = scope_Document.createElement('div');

			var valueSizeClasses = [options.cssClasses.valueNormal, options.cssClasses.valueLarge, options.cssClasses.valueSub];
			var markerSizeClasses = [options.cssClasses.markerNormal, options.cssClasses.markerLarge, options.cssClasses.markerSub];
			var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
			var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];

			addClass(element, options.cssClasses.pips);
			addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

			function getClasses(type, source) {
				var a = source === options.cssClasses.value;
				var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
				var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

				return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
			}

			function addSpread(offset, values) {

				// Apply the filter function, if it is set.
				values[1] = values[1] && filterFunc ? filterFunc(values[0], values[1]) : values[1];

				// Add a marker for every point
				var node = addNodeTo(element, false);
				node.className = getClasses(values[1], options.cssClasses.marker);
				node.style[options.style] = offset + '%';

				// Values are only appended for points marked '1' or '2'.
				if (values[1]) {
					node = addNodeTo(element, false);
					node.className = getClasses(values[1], options.cssClasses.value);
					node.style[options.style] = offset + '%';
					node.innerText = formatter.to(values[0]);
				}
			}

			// Append all points.
			Object.keys(spread).forEach(function (a) {
				addSpread(a, spread[a]);
			});

			return element;
		}

		function removePips() {
			if (scope_Pips) {
				removeElement(scope_Pips);
				scope_Pips = null;
			}
		}

		function pips(grid) {

			// Fix #669
			removePips();

			var mode = grid.mode;
			var density = grid.density || 1;
			var filter = grid.filter || false;
			var values = grid.values || false;
			var stepped = grid.stepped || false;
			var group = getGroup(mode, values, stepped);
			var spread = generateSpread(density, mode, group);
			var format = grid.format || {
				to: Math.round
			};

			scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));

			return scope_Pips;
		}

		// Shorthand for base dimensions.
		function baseSize() {
			var rect = scope_Base.getBoundingClientRect(),
			    alt = 'offset' + ['Width', 'Height'][options.ort];
			return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
		}

		// Handler for attaching events trough a proxy.
		function attachEvent(events, element, callback, data) {

			// This function can be used to 'filter' events to the slider.
			// element is a node, not a nodeList

			var method = function method(e) {

				if (scope_Target.hasAttribute('disabled')) {
					return false;
				}

				// Stop if an active 'tap' transition is taking place.
				if (hasClass(scope_Target, options.cssClasses.tap)) {
					return false;
				}

				e = fixEvent(e, data.pageOffset);

				// Handle reject of multitouch
				if (!e) {
					return false;
				}

				// Ignore right or middle clicks on start #454
				if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
					return false;
				}

				// Ignore right or middle clicks on start #454
				if (data.hover && e.buttons) {
					return false;
				}

				// 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
				// iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
				// touch-action: manipulation, but that allows panning, which breaks
				// sliders after zooming/on non-responsive pages.
				// See: https://bugs.webkit.org/show_bug.cgi?id=133112
				if (!supportsPassive) {
					e.preventDefault();
				}

				e.calcPoint = e.points[options.ort];

				// Call the event handler with the event [ and additional data ].
				callback(e, data);
			};

			var methods = [];

			// Bind a closure on the target for every event type.
			events.split(' ').forEach(function (eventName) {
				element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
				methods.push([eventName, method]);
			});

			return methods;
		}

		// Provide a clean event with standardized offset values.
		function fixEvent(e, pageOffset) {

			// Filter the event to register the type, which can be
			// touch, mouse or pointer. Offset changes need to be
			// made on an event specific basis.
			var touch = e.type.indexOf('touch') === 0;
			var mouse = e.type.indexOf('mouse') === 0;
			var pointer = e.type.indexOf('pointer') === 0;

			var x;
			var y;

			// IE10 implemented pointer events with a prefix;
			if (e.type.indexOf('MSPointer') === 0) {
				pointer = true;
			}

			if (touch) {

				// Fix bug when user touches with two or more fingers on mobile devices.
				// It's useful when you have two or more sliders on one page,
				// that can be touched simultaneously.
				// #649, #663, #668
				if (e.touches.length > 1) {
					return false;
				}

				// noUiSlider supports one movement at a time,
				// so we can select the first 'changedTouch'.
				x = e.changedTouches[0].pageX;
				y = e.changedTouches[0].pageY;
			}

			pageOffset = pageOffset || getPageOffset(scope_Document);

			if (mouse || pointer) {
				x = e.clientX + pageOffset.x;
				y = e.clientY + pageOffset.y;
			}

			e.pageOffset = pageOffset;
			e.points = [x, y];
			e.cursor = mouse || pointer; // Fix #435

			return e;
		}

		// Translate a coordinate in the document to a percentage on the slider
		function calcPointToPercentage(calcPoint) {
			var location = calcPoint - offset(scope_Base, options.ort);
			var proposal = location * 100 / baseSize();
			return options.dir ? 100 - proposal : proposal;
		}

		// Find handle closest to a certain percentage on the slider
		function getClosestHandle(proposal) {

			var closest = 100;
			var handleNumber = false;

			scope_Handles.forEach(function (handle, index) {

				// Disabled handles are ignored
				if (handle.hasAttribute('disabled')) {
					return;
				}

				var pos = Math.abs(scope_Locations[index] - proposal);

				if (pos < closest) {
					handleNumber = index;
					closest = pos;
				}
			});

			return handleNumber;
		}

		// Moves handle(s) by a percentage
		// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
		function moveHandles(upward, proposal, locations, handleNumbers) {

			var proposals = locations.slice();

			var b = [!upward, upward];
			var f = [upward, !upward];

			// Copy handleNumbers so we don't change the dataset
			handleNumbers = handleNumbers.slice();

			// Check to see which handle is 'leading'.
			// If that one can't move the second can't either.
			if (upward) {
				handleNumbers.reverse();
			}

			// Step 1: get the maximum percentage that any of the handles can move
			if (handleNumbers.length > 1) {

				handleNumbers.forEach(function (handleNumber, o) {

					var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);

					// Stop if one of the handles can't move.
					if (to === false) {
						proposal = 0;
					} else {
						proposal = to - proposals[handleNumber];
						proposals[handleNumber] = to;
					}
				});
			}

			// If using one handle, check backward AND forward
			else {
					b = f = [true];
				}

			var state = false;

			// Step 2: Try to set the handles with the found percentage
			handleNumbers.forEach(function (handleNumber, o) {
				state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
			});

			// Step 3: If a handle moved, fire events
			if (state) {
				handleNumbers.forEach(function (handleNumber) {
					fireEvent('update', handleNumber);
					fireEvent('slide', handleNumber);
				});
			}
		}

		// External event handling
		function fireEvent(eventName, handleNumber, tap) {

			Object.keys(scope_Events).forEach(function (targetEvent) {

				var eventType = targetEvent.split('.')[0];

				if (eventName === eventType) {
					scope_Events[targetEvent].forEach(function (callback) {

						callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice());
					});
				}
			});
		}

		// Fire 'end' when a mouse or pen leaves the document.
		function documentLeave(event, data) {
			if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
				eventEnd(event, data);
			}
		}

		// Handle movement on document for handle and range drag.
		function eventMove(event, data) {

			// Fix #498
			// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
			// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
			// IE9 has .buttons and .which zero on mousemove.
			// Firefox breaks the spec MDN defines.
			if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
				return eventEnd(event, data);
			}

			// Check if we are moving up or down
			var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

			// Convert the movement into a percentage of the slider width/height
			var proposal = movement * 100 / data.baseSize;

			moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
		}

		// Unbind move events on document, call callbacks.
		function eventEnd(event, data) {

			// The handle is no longer active, so remove the class.
			if (scope_ActiveHandle) {
				removeClass(scope_ActiveHandle, options.cssClasses.active);
				scope_ActiveHandle = false;
			}

			// Remove cursor styles and text-selection events bound to the body.
			if (event.cursor) {
				scope_Body.style.cursor = '';
				scope_Body.removeEventListener('selectstart', preventDefault);
			}

			// Unbind the move and end events, which are added on 'start'.
			scope_Listeners.forEach(function (c) {
				scope_DocumentElement.removeEventListener(c[0], c[1]);
			});

			// Remove dragging class.
			removeClass(scope_Target, options.cssClasses.drag);

			setZindex();

			data.handleNumbers.forEach(function (handleNumber) {
				fireEvent('change', handleNumber);
				fireEvent('set', handleNumber);
				fireEvent('end', handleNumber);
			});
		}

		// Bind move events on document.
		function eventStart(event, data) {

			if (data.handleNumbers.length === 1) {

				var handle = scope_Handles[data.handleNumbers[0]];

				// Ignore 'disabled' handles
				if (handle.hasAttribute('disabled')) {
					return false;
				}

				// Mark the handle as 'active' so it can be styled.
				scope_ActiveHandle = handle.children[0];
				addClass(scope_ActiveHandle, options.cssClasses.active);
			}

			// A drag should never propagate up to the 'tap' event.
			event.stopPropagation();

			// Attach the move and end events.
			var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
				startCalcPoint: event.calcPoint,
				baseSize: baseSize(),
				pageOffset: event.pageOffset,
				handleNumbers: data.handleNumbers,
				buttonsProperty: event.buttons,
				locations: scope_Locations.slice()
			});

			var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
				handleNumbers: data.handleNumbers
			});

			var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
				handleNumbers: data.handleNumbers
			});

			scope_Listeners = moveEvent.concat(endEvent, outEvent);

			// Text selection isn't an issue on touch devices,
			// so adding cursor styles can be skipped.
			if (event.cursor) {

				// Prevent the 'I' cursor and extend the range-drag cursor.
				scope_Body.style.cursor = getComputedStyle(event.target).cursor;

				// Mark the target with a dragging state.
				if (scope_Handles.length > 1) {
					addClass(scope_Target, options.cssClasses.drag);
				}

				// Prevent text selection when dragging the handles.
				// In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
				// which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
				// meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
				// The 'cursor' flag is false.
				// See: http://caniuse.com/#search=selectstart
				scope_Body.addEventListener('selectstart', preventDefault, false);
			}

			data.handleNumbers.forEach(function (handleNumber) {
				fireEvent('start', handleNumber);
			});
		}

		// Move closest handle to tapped location.
		function eventTap(event) {

			// The tap event shouldn't propagate up
			event.stopPropagation();

			var proposal = calcPointToPercentage(event.calcPoint);
			var handleNumber = getClosestHandle(proposal);

			// Tackle the case that all handles are 'disabled'.
			if (handleNumber === false) {
				return false;
			}

			// Flag the slider as it is now in a transitional state.
			// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
			if (!options.events.snap) {
				addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
			}

			setHandle(handleNumber, proposal, true, true);

			setZindex();

			fireEvent('slide', handleNumber, true);
			fireEvent('update', handleNumber, true);
			fireEvent('change', handleNumber, true);
			fireEvent('set', handleNumber, true);

			if (options.events.snap) {
				eventStart(event, { handleNumbers: [handleNumber] });
			}
		}

		// Fires a 'hover' event for a hovered mouse/pen position.
		function eventHover(event) {

			var proposal = calcPointToPercentage(event.calcPoint);

			var to = scope_Spectrum.getStep(proposal);
			var value = scope_Spectrum.fromStepping(to);

			Object.keys(scope_Events).forEach(function (targetEvent) {
				if ('hover' === targetEvent.split('.')[0]) {
					scope_Events[targetEvent].forEach(function (callback) {
						callback.call(scope_Self, value);
					});
				}
			});
		}

		// Attach events to several slider parts.
		function bindSliderEvents(behaviour) {

			// Attach the standard drag event to the handles.
			if (!behaviour.fixed) {

				scope_Handles.forEach(function (handle, index) {

					// These events are only bound to the visual handle
					// element, not the 'real' origin element.
					attachEvent(actions.start, handle.children[0], eventStart, {
						handleNumbers: [index]
					});
				});
			}

			// Attach the tap event to the slider base.
			if (behaviour.tap) {
				attachEvent(actions.start, scope_Base, eventTap, {});
			}

			// Fire hover events
			if (behaviour.hover) {
				attachEvent(actions.move, scope_Base, eventHover, { hover: true });
			}

			// Make the range draggable.
			if (behaviour.drag) {

				scope_Connects.forEach(function (connect, index) {

					if (connect === false || index === 0 || index === scope_Connects.length - 1) {
						return;
					}

					var handleBefore = scope_Handles[index - 1];
					var handleAfter = scope_Handles[index];
					var eventHolders = [connect];

					addClass(connect, options.cssClasses.draggable);

					// When the range is fixed, the entire range can
					// be dragged by the handles. The handle in the first
					// origin will propagate the start event upward,
					// but it needs to be bound manually on the other.
					if (behaviour.fixed) {
						eventHolders.push(handleBefore.children[0]);
						eventHolders.push(handleAfter.children[0]);
					}

					eventHolders.forEach(function (eventHolder) {
						attachEvent(actions.start, eventHolder, eventStart, {
							handles: [handleBefore, handleAfter],
							handleNumbers: [index - 1, index]
						});
					});
				});
			}
		}

		// Split out the handle positioning logic so the Move event can use it, too
		function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {

			// For sliders with multiple handles, limit movement to the other handle.
			// Apply the margin option by adding it to the handle positions.
			if (scope_Handles.length > 1) {

				if (lookBackward && handleNumber > 0) {
					to = Math.max(to, reference[handleNumber - 1] + options.margin);
				}

				if (lookForward && handleNumber < scope_Handles.length - 1) {
					to = Math.min(to, reference[handleNumber + 1] - options.margin);
				}
			}

			// The limit option has the opposite effect, limiting handles to a
			// maximum distance from another. Limit must be > 0, as otherwise
			// handles would be unmoveable.
			if (scope_Handles.length > 1 && options.limit) {

				if (lookBackward && handleNumber > 0) {
					to = Math.min(to, reference[handleNumber - 1] + options.limit);
				}

				if (lookForward && handleNumber < scope_Handles.length - 1) {
					to = Math.max(to, reference[handleNumber + 1] - options.limit);
				}
			}

			// The padding option keeps the handles a certain distance from the
			// edges of the slider. Padding must be > 0.
			if (options.padding) {

				if (handleNumber === 0) {
					to = Math.max(to, options.padding);
				}

				if (handleNumber === scope_Handles.length - 1) {
					to = Math.min(to, 100 - options.padding);
				}
			}

			to = scope_Spectrum.getStep(to);

			// Limit percentage to the 0 - 100 range
			to = limit(to);

			// Return false if handle can't move
			if (to === reference[handleNumber] && !getValue) {
				return false;
			}

			return to;
		}

		function toPct(pct) {
			return pct + '%';
		}

		// Updates scope_Locations and scope_Values, updates visual state
		function updateHandlePosition(handleNumber, to) {

			// Update locations.
			scope_Locations[handleNumber] = to;

			// Convert the value to the slider stepping/range.
			scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

			// Called synchronously or on the next animationFrame
			var stateUpdate = function stateUpdate() {
				scope_Handles[handleNumber].style[options.style] = toPct(to);
				updateConnect(handleNumber);
				updateConnect(handleNumber + 1);
			};

			// Set the handle to the new position.
			// Use requestAnimationFrame for efficient painting.
			// No significant effect in Chrome, Edge sees dramatic performace improvements.
			// Option to disable is useful for unit tests, and single-step debugging.
			if (window.requestAnimationFrame && options.useRequestAnimationFrame) {
				window.requestAnimationFrame(stateUpdate);
			} else {
				stateUpdate();
			}
		}

		function setZindex() {

			scope_HandleNumbers.forEach(function (handleNumber) {
				// Handles before the slider middle are stacked later = higher,
				// Handles after the middle later is lower
				// [[7] [8] .......... | .......... [5] [4]
				var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
				var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
				scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
			});
		}

		// Test suggested values and apply margin, step.
		function setHandle(handleNumber, to, lookBackward, lookForward) {

			to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

			if (to === false) {
				return false;
			}

			updateHandlePosition(handleNumber, to);

			return true;
		}

		// Updates style attribute for connect nodes
		function updateConnect(index) {

			// Skip connects set to false
			if (!scope_Connects[index]) {
				return;
			}

			var l = 0;
			var h = 100;

			if (index !== 0) {
				l = scope_Locations[index - 1];
			}

			if (index !== scope_Connects.length - 1) {
				h = scope_Locations[index];
			}

			scope_Connects[index].style[options.style] = toPct(l);
			scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
		}

		// ...
		function setValue(to, handleNumber) {

			// Setting with null indicates an 'ignore'.
			// Inputting 'false' is invalid.
			if (to === null || to === false) {
				return;
			}

			// If a formatted number was passed, attemt to decode it.
			if (typeof to === 'number') {
				to = String(to);
			}

			to = options.format.from(to);

			// Request an update for all links if the value was invalid.
			// Do so too if setting the handle fails.
			if (to !== false && !isNaN(to)) {
				setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
			}
		}

		// Set the slider value.
		function valueSet(input, fireSetEvent) {

			var values = asArray(input);
			var isInit = scope_Locations[0] === undefined;

			// Event fires by default
			fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent;

			values.forEach(setValue);

			// Animation is optional.
			// Make sure the initial values were set before using animated placement.
			if (options.animate && !isInit) {
				addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
			}

			// Now that all base values are set, apply constraints
			scope_HandleNumbers.forEach(function (handleNumber) {
				setHandle(handleNumber, scope_Locations[handleNumber], true, false);
			});

			setZindex();

			scope_HandleNumbers.forEach(function (handleNumber) {

				fireEvent('update', handleNumber);

				// Fire the event only for handles that received a new value, as per #579
				if (values[handleNumber] !== null && fireSetEvent) {
					fireEvent('set', handleNumber);
				}
			});
		}

		// Reset slider to initial values
		function valueReset(fireSetEvent) {
			valueSet(options.start, fireSetEvent);
		}

		// Get the slider value.
		function valueGet() {

			var values = scope_Values.map(options.format.to);

			// If only one handle is used, return a single value.
			if (values.length === 1) {
				return values[0];
			}

			return values;
		}

		// Removes classes from the root and empties it.
		function destroy() {

			for (var key in options.cssClasses) {
				if (!options.cssClasses.hasOwnProperty(key)) {
					continue;
				}
				removeClass(scope_Target, options.cssClasses[key]);
			}

			while (scope_Target.firstChild) {
				scope_Target.removeChild(scope_Target.firstChild);
			}

			delete scope_Target.noUiSlider;
		}

		// Get the current step size for the slider.
		function getCurrentStep() {

			// Check all locations, map them to their stepping point.
			// Get the step point, then find it in the input list.
			return scope_Locations.map(function (location, index) {

				var nearbySteps = scope_Spectrum.getNearbySteps(location);
				var value = scope_Values[index];
				var increment = nearbySteps.thisStep.step;
				var decrement = null;

				// If the next value in this step moves into the next step,
				// the increment is the start of the next step - the current value
				if (increment !== false) {
					if (value + increment > nearbySteps.stepAfter.startValue) {
						increment = nearbySteps.stepAfter.startValue - value;
					}
				}

				// If the value is beyond the starting point
				if (value > nearbySteps.thisStep.startValue) {
					decrement = nearbySteps.thisStep.step;
				} else if (nearbySteps.stepBefore.step === false) {
					decrement = false;
				}

				// If a handle is at the start of a step, it always steps back into the previous step first
				else {
						decrement = value - nearbySteps.stepBefore.highestStep;
					}

				// Now, if at the slider edges, there is not in/decrement
				if (location === 100) {
					increment = null;
				} else if (location === 0) {
					decrement = null;
				}

				// As per #391, the comparison for the decrement step can have some rounding issues.
				var stepDecimals = scope_Spectrum.countStepDecimals();

				// Round per #391
				if (increment !== null && increment !== false) {
					increment = Number(increment.toFixed(stepDecimals));
				}

				if (decrement !== null && decrement !== false) {
					decrement = Number(decrement.toFixed(stepDecimals));
				}

				return [decrement, increment];
			});
		}

		// Attach an event to this slider, possibly including a namespace
		function bindEvent(namespacedEvent, callback) {
			scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
			scope_Events[namespacedEvent].push(callback);

			// If the event bound is 'update,' fire it immediately for all handles.
			if (namespacedEvent.split('.')[0] === 'update') {
				scope_Handles.forEach(function (a, index) {
					fireEvent('update', index);
				});
			}
		}

		// Undo attachment of event
		function removeEvent(namespacedEvent) {

			var event = namespacedEvent && namespacedEvent.split('.')[0];
			var namespace = event && namespacedEvent.substring(event.length);

			Object.keys(scope_Events).forEach(function (bind) {

				var tEvent = bind.split('.')[0],
				    tNamespace = bind.substring(tEvent.length);

				if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
					delete scope_Events[bind];
				}
			});
		}

		// Updateable: margin, limit, padding, step, range, animate, snap
		function updateOptions(optionsToUpdate, fireSetEvent) {

			// Spectrum is created using the range, snap, direction and step options.
			// 'snap' and 'step' can be updated.
			// If 'snap' and 'step' are not passed, they should remain unchanged.
			var v = valueGet();

			var updateAble = ['margin', 'limit', 'padding', 'range', 'animate', 'snap', 'step', 'format'];

			// Only change options that we're actually passed to update.
			updateAble.forEach(function (name) {
				if (optionsToUpdate[name] !== undefined) {
					originalOptions[name] = optionsToUpdate[name];
				}
			});

			var newOptions = testOptions(originalOptions);

			// Load new options into the slider state
			updateAble.forEach(function (name) {
				if (optionsToUpdate[name] !== undefined) {
					options[name] = newOptions[name];
				}
			});

			scope_Spectrum = newOptions.spectrum;

			// Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
			options.margin = newOptions.margin;
			options.limit = newOptions.limit;
			options.padding = newOptions.padding;

			// Update pips, removes existing.
			if (options.pips) {
				pips(options.pips);
			}

			// Invalidate the current positioning so valueSet forces an update.
			scope_Locations = [];
			valueSet(optionsToUpdate.start || v, fireSetEvent);
		}

		// Throw an error if the slider was already initialized.
		if (scope_Target.noUiSlider) {
			throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
		}

		// Create the base element, initialise HTML and set classes.
		// Add handles and connect elements.
		addSlider(scope_Target);
		addElements(options.connect, scope_Base);

		scope_Self = {
			destroy: destroy,
			steps: getCurrentStep,
			on: bindEvent,
			off: removeEvent,
			get: valueGet,
			set: valueSet,
			reset: valueReset,
			// Exposed for unit testing, don't use this in your application.
			__moveHandles: function __moveHandles(a, b, c) {
				moveHandles(a, b, scope_Locations, c);
			},
			options: originalOptions, // Issue #600, #678
			updateOptions: updateOptions,
			target: scope_Target, // Issue #597
			removePips: removePips,
			pips: pips // Issue #594
		};

		// Attach user events.
		bindSliderEvents(options.events);

		// Use the public value method to set the start values.
		valueSet(options.start);

		if (options.pips) {
			pips(options.pips);
		}

		if (options.tooltips) {
			tooltips();
		}

		aria();

		return scope_Self;
	}

	// Run the standard initializer
	function initialize(target, originalOptions) {

		if (!target || !target.nodeName) {
			throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
		}

		// Test the options and create the slider environment;
		var options = testOptions(originalOptions, target);
		var api = closure(target, options, originalOptions);

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expansibility;
	return {
		version: VERSION,
		create: initialize
	};
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(riot) {

var _extend = __webpack_require__(1);

var _extend2 = _interopRequireDefault(_extend);

var _flatpickr = __webpack_require__(7);

var _flatpickr2 = _interopRequireDefault(_flatpickr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

riot.tag2('input-datepicker', '<input ref="datepicker">', '', '', function (opts) {
    var _this = this;

    this.on('mount', function () {
        _this.options = {
            onChange: function onChange(selectedDates) {
                _this.trigger('picked', selectedDates);
            },
            onOpen: function onOpen(selectedDates) {
                if (this.hourElement && this.minuteElement) {
                    this.setDate(this.hourElement.value + ':' + this.minuteElement.value);
                }
            }
        };
        (0, _extend2.default)(true, _this.options, _this.opts.options);
        _this.datepicker = new _flatpickr2.default(_this.refs.datepicker, _this.options);
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

/*! flatpickr v3.0.5-1, @license MIT */
function FlatpickrInstance(element, config) {
	var self = this;

	self._ = {};
	self._.afterDayAnim = afterDayAnim;
	self._bind = bind;
	self._compareDates = compareDates;
	self._setHoursFromDate = setHoursFromDate;
	self.changeMonth = changeMonth;
	self.changeYear = changeYear;
	self.clear = clear;
	self.close = close;
	self._createElement = createElement;
	self.destroy = destroy;
	self.isEnabled = isEnabled;
	self.jumpToDate = jumpToDate;
	self.open = open;
	self.redraw = redraw;
	self.set = set;
	self.setDate = setDate;
	self.toggle = toggle;

	function init() {
		self.element = self.input = element;
		self.instanceConfig = config || {};
		self.parseDate = FlatpickrInstance.prototype.parseDate.bind(self);
		self.formatDate = FlatpickrInstance.prototype.formatDate.bind(self);

		setupFormats();
		parseConfig();
		setupLocale();
		setupInputs();
		setupDates();
		setupHelperFunctions();

		self.isOpen = false;

		self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

		if (!self.isMobile) build();

		bindEvents();

		if (self.selectedDates.length || self.config.noCalendar) {
			if (self.config.enableTime) {
				setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : null);
			}
			updateValue();
		}

		self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;

		if (self.config.weekNumbers) {
			self.calendarContainer.style.width = self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
		}

		if (!self.isMobile) positionCalendar();

		triggerEvent("Ready");
	}

	/**
  * Binds a function to the current flatpickr instance
  * @param {Function} fn the function
  * @return {Function} the function bound to the instance
  */
	function bindToInstance(fn) {
		return fn.bind(self);
	}

	/**
  * The handler for all events targeting the time inputs
  * @param {Event} e the event - "input", "wheel", "increment", etc
  */
	function updateTime(e) {
		if (self.config.noCalendar && !self.selectedDates.length)
			// picking time only
			self.selectedDates = [self.now];

		timeWrapper(e);

		if (!self.selectedDates.length) return;

		if (!self.minDateHasTime || e.type !== "input" || e.target.value.length >= 2) {
			setHoursFromInputs();
			updateValue();
		} else {
			setTimeout(function () {
				setHoursFromInputs();
				updateValue();
			}, 1000);
		}
	}

	/**
  * Syncs the selected date object time with user's time input
  */
	function setHoursFromInputs() {
		if (!self.config.enableTime) return;

		var hours = (parseInt(self.hourElement.value, 10) || 0) % (self.amPM ? 12 : 24),
		    minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
		    seconds = self.config.enableSeconds ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

		if (self.amPM !== undefined) hours = hours % 12 + 12 * (self.amPM.textContent === "PM");

		if (self.minDateHasTime && compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {

			hours = Math.max(hours, self.config.minDate.getHours());
			if (hours === self.config.minDate.getHours()) minutes = Math.max(minutes, self.config.minDate.getMinutes());
		}

		if (self.maxDateHasTime && compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
			hours = Math.min(hours, self.config.maxDate.getHours());
			if (hours === self.config.maxDate.getHours()) minutes = Math.min(minutes, self.config.maxDate.getMinutes());
		}

		setHours(hours, minutes, seconds);
	}

	/**
  * Syncs time input values with a date
  * @param {Date} dateObj the date to sync with
  */
	function setHoursFromDate(dateObj) {
		var date = dateObj || self.latestSelectedDateObj;

		if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
	}

	/**
  * Sets the hours, minutes, and optionally seconds
  * of the latest selected date object and the
  * corresponding time inputs
  * @param {Number} hours the hour. whether its military
  *                 or am-pm gets inferred from config
  * @param {Number} minutes the minutes
  * @param {Number} seconds the seconds (optional)
  */
	function setHours(hours, minutes, seconds) {
		if (self.selectedDates.length) {
			self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
		}

		if (!self.config.enableTime || self.isMobile) return;

		self.hourElement.value = self.pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);

		self.minuteElement.value = self.pad(minutes);

		if (!self.config.time_24hr) self.amPM.textContent = hours >= 12 ? "PM" : "AM";

		if (self.config.enableSeconds === true) self.secondElement.value = self.pad(seconds);
	}

	/**
  * Handles the year input and incrementing events
  * @param {Event} event the keyup or increment event
  */
	function onYearInput(event) {
		var year = event.target.value;
		if (event.delta) year = (parseInt(year) + event.delta).toString();

		if (year.length === 4 || event.key === "Enter") {
			self.currentYearElement.blur();
			if (!/[^\d]/.test(year)) changeYear(year);
		}
	}

	/**
  * Essentially addEventListener + tracking
  * @param {Element} element the element to addEventListener to
  * @param {String} event the event name
  * @param {Function} handler the event handler
  */
	function bind(element, event, handler) {
		if (event instanceof Array) return event.forEach(function (ev) {
			return bind(element, ev, handler);
		});

		if (element instanceof Array) return element.forEach(function (el) {
			return bind(el, event, handler);
		});

		element.addEventListener(event, handler);
		self._handlers.push({ element: element, event: event, handler: handler });
	}

	/**
  * A mousedown handler which mimics click.
  * Minimizes latency, since we don't need to wait for mouseup in most cases.
  * Also, avoids handling right clicks.
  *
  * @param {Function} handler the event handler
  */
	function onClick(handler) {
		return function (evt) {
			return evt.which === 1 && handler(evt);
		};
	}

	/**
  * Adds all the necessary event listeners
  */
	function bindEvents() {
		self._handlers = [];
		self._animationLoop = [];
		if (self.config.wrap) {
			["open", "close", "toggle", "clear"].forEach(function (evt) {
				Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
					return bind(el, "mousedown", onClick(self[evt]));
				});
			});
		}

		if (self.isMobile) return setupMobile();

		self.debouncedResize = debounce(onResize, 50);
		self.triggerChange = function () {
			triggerEvent("Change");
		};
		self.debouncedChange = debounce(self.triggerChange, 300);

		if (self.config.mode === "range" && self.daysContainer) bind(self.daysContainer, "mouseover", function (e) {
			return onMouseOver(e.target);
		});

		bind(window.document.body, "keydown", onKeyDown);

		if (!self.config.static) bind(self._input, "keydown", onKeyDown);

		if (!self.config.inline && !self.config.static) bind(window, "resize", self.debouncedResize);

		if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);

		bind(window.document, "mousedown", onClick(documentClick));
		bind(self._input, "blur", documentClick);

		if (self.config.clickOpens === true) {
			bind(self._input, "focus", self.open);
			bind(self._input, "mousedown", onClick(self.open));
		}

		if (!self.config.noCalendar) {
			self.monthNav.addEventListener("wheel", function (e) {
				return e.preventDefault();
			});
			bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
			bind(self.monthNav, "mousedown", onClick(onMonthNavClick));

			bind(self.monthNav, ["keyup", "increment"], onYearInput);
			bind(self.daysContainer, "mousedown", onClick(selectDate));

			if (self.config.animate) {
				bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
				bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
			}
		}

		if (self.config.enableTime) {
			var selText = function selText(e) {
				return e.target.select();
			};
			bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
			bind(self.timeContainer, "mousedown", onClick(timeIncrement));

			bind(self.timeContainer, ["wheel", "increment"], self.debouncedChange);
			bind(self.timeContainer, "input", self.triggerChange);

			bind([self.hourElement, self.minuteElement], "focus", selText);

			if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
				return self.secondElement.select();
			});

			if (self.amPM !== undefined) {
				bind(self.amPM, "mousedown", onClick(function (e) {
					updateTime(e);
					self.triggerChange(e);
				}));
			}
		}
	}

	function processPostDayAnimation() {
		for (var i = self._animationLoop.length; i--;) {
			self._animationLoop[i]();
			self._animationLoop.splice(i, 1);
		}
	}

	/**
  * Removes the day container that slided out of view
  * @param {Event} e the animation event
  */
	function animateDays(e) {
		if (self.daysContainer.childNodes.length > 1) {
			switch (e.animationName) {
				case "fpSlideLeft":
					self.daysContainer.lastChild.classList.remove("slideLeftNew");
					self.daysContainer.removeChild(self.daysContainer.firstChild);
					self.days = self.daysContainer.firstChild;
					processPostDayAnimation();

					break;

				case "fpSlideRight":
					self.daysContainer.firstChild.classList.remove("slideRightNew");
					self.daysContainer.removeChild(self.daysContainer.lastChild);
					self.days = self.daysContainer.firstChild;
					processPostDayAnimation();

					break;

				default:
					break;
			}
		}
	}

	/**
  * Removes the month element that animated out of view
  * @param {Event} e the animation event
  */
	function animateMonths(e) {
		switch (e.animationName) {
			case "fpSlideLeftNew":
			case "fpSlideRightNew":
				self.navigationCurrentMonth.classList.remove("slideLeftNew");
				self.navigationCurrentMonth.classList.remove("slideRightNew");
				var nav = self.navigationCurrentMonth;

				while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
					self.monthNav.removeChild(nav.nextSibling);
				}while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
					self.monthNav.removeChild(nav.previousSibling);
				}self.oldCurMonth = null;
				break;
		}
	}

	/**
  * Set the calendar view to a particular date.
  * @param {Date} jumpDate the date to set the view to
  */
	function jumpToDate(jumpDate) {
		jumpDate = jumpDate ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

		try {
			self.currentYear = jumpDate.getFullYear();
			self.currentMonth = jumpDate.getMonth();
		} catch (e) {
			/* istanbul ignore next */
			console.error(e.stack);
			/* istanbul ignore next */
			console.warn("Invalid date supplied: " + jumpDate);
		}

		self.redraw();
	}

	/**
  * The up/down arrow handler for time inputs
  * @param {Event} e the click event
  */
	function timeIncrement(e) {
		if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
	}

	/**
  * Increments/decrements the value of input associ-
  * ated with the up/down arrow by dispatching an
  * "increment" event on the input.
  *
  * @param {Event} e the click event
  * @param {Number} delta the diff (usually 1 or -1)
  * @param {Element} inputElem the input element
  */
	function incrementNumInput(e, delta, inputElem) {
		var input = inputElem || e.target.parentNode.childNodes[0];
		var event = createEvent("increment");
		event.delta = delta;
		input.dispatchEvent(event);
	}

	function createNumberInput(inputClassName) {
		var wrapper = createElement("div", "numInputWrapper"),
		    numInput = createElement("input", "numInput " + inputClassName),
		    arrowUp = createElement("span", "arrowUp"),
		    arrowDown = createElement("span", "arrowDown");

		numInput.type = "text";
		numInput.pattern = "\\d*";

		wrapper.appendChild(numInput);
		wrapper.appendChild(arrowUp);
		wrapper.appendChild(arrowDown);

		return wrapper;
	}

	function build() {
		var fragment = window.document.createDocumentFragment();
		self.calendarContainer = createElement("div", "flatpickr-calendar");
		self.calendarContainer.tabIndex = -1;

		if (!self.config.noCalendar) {
			fragment.appendChild(buildMonthNav());
			self.innerContainer = createElement("div", "flatpickr-innerContainer");

			if (self.config.weekNumbers) self.innerContainer.appendChild(buildWeeks());

			self.rContainer = createElement("div", "flatpickr-rContainer");
			self.rContainer.appendChild(buildWeekdays());

			if (!self.daysContainer) {
				self.daysContainer = createElement("div", "flatpickr-days");
				self.daysContainer.tabIndex = -1;
			}

			buildDays();
			self.rContainer.appendChild(self.daysContainer);

			self.innerContainer.appendChild(self.rContainer);
			fragment.appendChild(self.innerContainer);
		}

		if (self.config.enableTime) fragment.appendChild(buildTime());

		toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
		toggleClass(self.calendarContainer, "animate", self.config.animate);

		self.calendarContainer.appendChild(fragment);

		var customAppend = self.config.appendTo && self.config.appendTo.nodeType;

		if (self.config.inline || self.config.static) {
			self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

			if (self.config.inline && !customAppend) {
				return self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
			}

			if (self.config.static) {
				var wrapper = createElement("div", "flatpickr-wrapper");
				self.element.parentNode.insertBefore(wrapper, self.element);
				wrapper.appendChild(self.element);

				if (self.altInput) wrapper.appendChild(self.altInput);

				wrapper.appendChild(self.calendarContainer);
				return;
			}
		}

		(customAppend ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
	}

	function createDay(className, date, dayNumber, i) {
		var dateIsEnabled = isEnabled(date, true),
		    dayElement = createElement("span", "flatpickr-day " + className, date.getDate());

		dayElement.dateObj = date;
		dayElement.$i = i;
		dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

		if (compareDates(date, self.now) === 0) {
			self.todayDateElem = dayElement;
			dayElement.classList.add("today");
		}

		if (dateIsEnabled) {
			dayElement.tabIndex = -1;
			if (isDateSelected(date)) {
				dayElement.classList.add("selected");
				self.selectedDateElem = dayElement;
				if (self.config.mode === "range") {
					toggleClass(dayElement, "startRange", compareDates(date, self.selectedDates[0]) === 0);

					toggleClass(dayElement, "endRange", compareDates(date, self.selectedDates[1]) === 0);
				}
			}
		} else {
			dayElement.classList.add("disabled");
			if (self.selectedDates[0] && date > self.minRangeDate && date < self.selectedDates[0]) self.minRangeDate = date;else if (self.selectedDates[0] && date < self.maxRangeDate && date > self.selectedDates[0]) self.maxRangeDate = date;
		}

		if (self.config.mode === "range") {
			if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");

			if (self.selectedDates.length === 1 && (date < self.minRangeDate || date > self.maxRangeDate)) dayElement.classList.add("notAllowed");
		}

		if (self.config.weekNumbers && className !== "prevMonthDay" && dayNumber % 7 === 1) {
			self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + self.config.getWeek(date) + "</span>");
		}

		triggerEvent("DayCreate", dayElement);

		return dayElement;
	}

	function focusOnDay(currentIndex, offset) {
		var newIndex = currentIndex + offset || 0,
		    targetNode = currentIndex !== undefined ? self.days.childNodes[newIndex] : self.selectedDateElem || self.todayDateElem || self.days.childNodes[0],
		    focus = function focus() {
			targetNode = targetNode || self.days.childNodes[newIndex];
			targetNode.focus();

			if (self.config.mode === "range") onMouseOver(targetNode);
		};

		if (targetNode === undefined && offset !== 0) {
			if (offset > 0) {
				self.changeMonth(1);
				newIndex = newIndex % 42;
			} else if (offset < 0) {
				self.changeMonth(-1);
				newIndex += 42;
			}

			return afterDayAnim(focus);
		}

		focus();
	}

	function afterDayAnim(fn) {
		if (self.config.animate === true) return self._animationLoop.push(fn);
		fn();
	}

	function buildDays(delta) {
		var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
		    isRangeMode = self.config.mode === "range";

		self.prevMonthDays = self.utils.getDaysinMonth((self.currentMonth - 1 + 12) % 12);
		self.selectedDateElem = undefined;
		self.todayDateElem = undefined;

		var daysInMonth = self.utils.getDaysinMonth(),
		    days = window.document.createDocumentFragment();

		var dayNumber = self.prevMonthDays + 1 - firstOfMonth,
		    dayIndex = 0;

		if (self.config.weekNumbers && self.weekNumbers.firstChild) self.weekNumbers.textContent = "";

		if (isRangeMode) {
			// const dateLimits = self.config.enable.length || self.config.disable.length || self.config.mixDate || self.config.maxDate;
			self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
			self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
		}

		// prepend days from the ending of previous month
		for (; dayNumber <= self.prevMonthDays; dayNumber++, dayIndex++) {
			days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
		}

		// Start at 1 since there is no 0th day
		for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
			days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
		}

		// append days from the next month
		for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
			days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
		}

		if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
			self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > days.childNodes[0].dateObj;

			self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
		} else updateNavigationCurrentMonth();

		var dayContainer = createElement("div", "dayContainer");
		dayContainer.appendChild(days);

		if (!self.config.animate || delta === undefined) clearNode(self.daysContainer);else {
			while (self.daysContainer.childNodes.length > 1) {
				self.daysContainer.removeChild(self.daysContainer.firstChild);
			}
		}

		if (delta >= 0) self.daysContainer.appendChild(dayContainer);else self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);

		self.days = self.daysContainer.firstChild;
		return self.daysContainer;
	}

	function clearNode(node) {
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
	}

	function buildMonthNav() {
		var monthNavFragment = window.document.createDocumentFragment();
		self.monthNav = createElement("div", "flatpickr-month");

		self.prevMonthNav = createElement("span", "flatpickr-prev-month");
		self.prevMonthNav.innerHTML = self.config.prevArrow;

		self.currentMonthElement = createElement("span", "cur-month");
		self.currentMonthElement.title = self.l10n.scrollTitle;

		var yearInput = createNumberInput("cur-year");
		self.currentYearElement = yearInput.childNodes[0];
		self.currentYearElement.title = self.l10n.scrollTitle;

		if (self.config.minDate) self.currentYearElement.min = self.config.minDate.getFullYear();

		if (self.config.maxDate) {
			self.currentYearElement.max = self.config.maxDate.getFullYear();

			self.currentYearElement.disabled = self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
		}

		self.nextMonthNav = createElement("span", "flatpickr-next-month");
		self.nextMonthNav.innerHTML = self.config.nextArrow;

		self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
		self.navigationCurrentMonth.appendChild(self.currentMonthElement);
		self.navigationCurrentMonth.appendChild(yearInput);

		monthNavFragment.appendChild(self.prevMonthNav);
		monthNavFragment.appendChild(self.navigationCurrentMonth);
		monthNavFragment.appendChild(self.nextMonthNav);
		self.monthNav.appendChild(monthNavFragment);

		Object.defineProperty(self, "_hidePrevMonthArrow", {
			get: function get() {
				return this.__hidePrevMonthArrow;
			},
			set: function set(bool) {
				if (this.__hidePrevMonthArrow !== bool) self.prevMonthNav.style.display = bool ? "none" : "block";
				this.__hidePrevMonthArrow = bool;
			}
		});

		Object.defineProperty(self, "_hideNextMonthArrow", {
			get: function get() {
				return this.__hideNextMonthArrow;
			},
			set: function set(bool) {
				if (this.__hideNextMonthArrow !== bool) self.nextMonthNav.style.display = bool ? "none" : "block";
				this.__hideNextMonthArrow = bool;
			}
		});

		updateNavigationCurrentMonth();

		return self.monthNav;
	}

	function buildTime() {
		self.calendarContainer.classList.add("hasTime");
		if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
		self.timeContainer = createElement("div", "flatpickr-time");
		self.timeContainer.tabIndex = -1;
		var separator = createElement("span", "flatpickr-time-separator", ":");

		var hourInput = createNumberInput("flatpickr-hour");
		self.hourElement = hourInput.childNodes[0];

		var minuteInput = createNumberInput("flatpickr-minute");
		self.minuteElement = minuteInput.childNodes[0];

		self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;

		self.hourElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.defaultHour);

		self.minuteElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);

		self.hourElement.step = self.config.hourIncrement;
		self.minuteElement.step = self.config.minuteIncrement;

		self.hourElement.min = self.config.time_24hr ? 0 : 1;
		self.hourElement.max = self.config.time_24hr ? 23 : 12;

		self.minuteElement.min = 0;
		self.minuteElement.max = 59;

		self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;

		self.timeContainer.appendChild(hourInput);
		self.timeContainer.appendChild(separator);
		self.timeContainer.appendChild(minuteInput);

		if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

		if (self.config.enableSeconds) {
			self.timeContainer.classList.add("hasSeconds");

			var secondInput = createNumberInput("flatpickr-second");
			self.secondElement = secondInput.childNodes[0];

			self.secondElement.value = self.latestSelectedDateObj ? self.pad(self.latestSelectedDateObj.getSeconds()) : "00";

			self.secondElement.step = self.minuteElement.step;
			self.secondElement.min = self.minuteElement.min;
			self.secondElement.max = self.minuteElement.max;

			self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
			self.timeContainer.appendChild(secondInput);
		}

		if (!self.config.time_24hr) {
			// add self.amPM if appropriate
			self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
			self.amPM.title = self.l10n.toggleTitle;
			self.amPM.tabIndex = -1;
			self.timeContainer.appendChild(self.amPM);
		}

		return self.timeContainer;
	}

	function buildWeekdays() {
		if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");

		var firstDayOfWeek = self.l10n.firstDayOfWeek;
		var weekdays = self.l10n.weekdays.shorthand.slice();

		if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
			weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
		}

		self.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + weekdays.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t";

		return self.weekdayContainer;
	}

	/* istanbul ignore next */
	function buildWeeks() {
		self.calendarContainer.classList.add("hasWeeks");
		self.weekWrapper = createElement("div", "flatpickr-weekwrapper");
		self.weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
		self.weekNumbers = createElement("div", "flatpickr-weeks");
		self.weekWrapper.appendChild(self.weekNumbers);

		return self.weekWrapper;
	}

	function changeMonth(value, is_offset, animate) {
		is_offset = is_offset === undefined || is_offset;
		var delta = is_offset ? value : value - self.currentMonth;
		var skipAnimations = !self.config.animate || animate === false;

		if (delta < 0 && self._hidePrevMonthArrow || delta > 0 && self._hideNextMonthArrow) return;

		self.currentMonth += delta;

		if (self.currentMonth < 0 || self.currentMonth > 11) {
			self.currentYear += self.currentMonth > 11 ? 1 : -1;
			self.currentMonth = (self.currentMonth + 12) % 12;

			triggerEvent("YearChange");
		}

		buildDays(!skipAnimations ? delta : undefined);

		if (skipAnimations) {
			triggerEvent("MonthChange");
			return updateNavigationCurrentMonth();
		}

		// remove possible remnants from clicking too fast
		var nav = self.navigationCurrentMonth;
		if (delta < 0) {
			while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
				self.monthNav.removeChild(nav.nextSibling);
			}
		} else if (delta > 0) {
			while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
				self.monthNav.removeChild(nav.previousSibling);
			}
		}

		self.oldCurMonth = self.navigationCurrentMonth;

		self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);

		if (delta > 0) {
			self.daysContainer.firstChild.classList.add("slideLeft");
			self.daysContainer.lastChild.classList.add("slideLeftNew");

			self.oldCurMonth.classList.add("slideLeft");
			self.navigationCurrentMonth.classList.add("slideLeftNew");
		} else if (delta < 0) {
			self.daysContainer.firstChild.classList.add("slideRightNew");
			self.daysContainer.lastChild.classList.add("slideRight");

			self.oldCurMonth.classList.add("slideRight");
			self.navigationCurrentMonth.classList.add("slideRightNew");
		}

		self.currentMonthElement = self.navigationCurrentMonth.firstChild;
		self.currentYearElement = self.navigationCurrentMonth.lastChild.childNodes[0];

		updateNavigationCurrentMonth();
		self.oldCurMonth.firstChild.textContent = self.utils.monthToStr(self.currentMonth - delta);

		triggerEvent("MonthChange");

		if (document.activeElement && document.activeElement.$i) {
			var index = document.activeElement.$i;
			afterDayAnim(function () {
				focusOnDay(index, 0);
			});
		}
	}

	function clear(triggerChangeEvent) {
		self.input.value = "";

		if (self.altInput) self.altInput.value = "";

		if (self.mobileInput) self.mobileInput.value = "";

		self.selectedDates = [];
		self.latestSelectedDateObj = undefined;
		self.showTimeInput = false;

		self.redraw();

		if (triggerChangeEvent !== false)
			// triggerChangeEvent is true (default) or an Event
			triggerEvent("Change");
	}

	function close() {
		self.isOpen = false;

		if (!self.isMobile) {
			self.calendarContainer.classList.remove("open");
			self._input.classList.remove("active");
		}

		triggerEvent("Close");
	}

	function destroy() {
		if (self.config !== undefined) triggerEvent("Destroy");

		for (var i = self._handlers.length; i--;) {
			var h = self._handlers[i];
			h.element.removeEventListener(h.event, h.handler);
		}

		self._handlers = [];

		if (self.mobileInput) {
			if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
			self.mobileInput = null;
		} else if (self.calendarContainer && self.calendarContainer.parentNode) self.calendarContainer.parentNode.removeChild(self.calendarContainer);

		if (self.altInput) {
			self.input.type = "text";
			if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
			delete self.altInput;
		}

		if (self.input) {
			self.input.type = self.input._type;
			self.input.classList.remove("flatpickr-input");
			self.input.removeAttribute("readonly");
			self.input.value = "";
		}

		["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
			return delete self[k];
		});
	}

	function isCalendarElem(elem) {
		if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;

		return self.calendarContainer.contains(elem);
	}

	function documentClick(e) {
		if (self.isOpen && !self.config.inline) {
			var isCalendarElement = isCalendarElem(e.target);
			var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) ||
			// web components
			e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));

			var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;

			if (lostFocus && self.config.ignoredFocusElements.indexOf(e.target) === -1) {
				self.close();

				if (self.config.mode === "range" && self.selectedDates.length === 1) {
					self.clear(false);
					self.redraw();
				}
			}
		}
	}

	function changeYear(newYear) {
		if (!newYear || self.currentYearElement.min && newYear < self.currentYearElement.min || self.currentYearElement.max && newYear > self.currentYearElement.max) return;

		var newYearNum = parseInt(newYear, 10),
		    isNewYear = self.currentYear !== newYearNum;

		self.currentYear = newYearNum || self.currentYear;

		if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
			self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
		} else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
			self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
		}

		if (isNewYear) {
			self.redraw();
			triggerEvent("YearChange");
		}
	}

	function isEnabled(date, timeless) {
		if (self.config.minDate && compareDates(date, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && compareDates(date, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;

		if (!self.config.enable.length && !self.config.disable.length) return true;

		var dateToCheck = self.parseDate(date, null, true); // timeless

		var bool = self.config.enable.length > 0,
		    array = bool ? self.config.enable : self.config.disable;

		for (var i = 0, d; i < array.length; i++) {
			d = array[i];

			if (d instanceof Function && d(dateToCheck)) // disabled by function
				return bool;else if (d instanceof Date && d.getTime() === dateToCheck.getTime())
				// disabled by date
				return bool;else if (typeof d === "string" && self.parseDate(d, null, true).getTime() === dateToCheck.getTime())
				// disabled by date string
				return bool;else if ( // disabled by range
			(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.from && d.to && dateToCheck >= d.from && dateToCheck <= d.to) return bool;
		}

		return !bool;
	}

	function onKeyDown(e) {
		var isInput = e.target === self._input;
		var calendarElem = isCalendarElem(e.target);
		var allowInput = self.config.allowInput;
		var allowKeydown = self.isOpen && (!allowInput || !isInput);
		var allowInlineKeydown = self.config.inline && isInput && !allowInput;

		if (e.key === "Enter" && allowInput && isInput) {
			self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
			return e.target.blur();
		} else if (calendarElem || allowKeydown || allowInlineKeydown) {
			var isTimeObj = self.timeContainer && self.timeContainer.contains(e.target);
			switch (e.key) {
				case "Enter":
					if (isTimeObj) updateValue();else selectDate(e);

					break;

				case "Escape":
					// escape
					e.preventDefault();
					self.close();
					break;

				case "ArrowLeft":
				case "ArrowRight":
					if (!isTimeObj) {
						e.preventDefault();

						if (self.daysContainer) {
							var _delta = e.key === "ArrowRight" ? 1 : -1;

							if (!e.ctrlKey) focusOnDay(e.target.$i, _delta);else changeMonth(_delta, true);
						} else if (self.config.enableTime && !isTimeObj) self.hourElement.focus();
					}

					break;

				case "ArrowUp":
				case "ArrowDown":
					e.preventDefault();
					var delta = e.key === "ArrowDown" ? 1 : -1;

					if (self.daysContainer) {
						if (e.ctrlKey) {
							changeYear(self.currentYear - delta);
							focusOnDay(e.target.$i, 0);
						} else if (!isTimeObj) focusOnDay(e.target.$i, delta * 7);
					} else if (self.config.enableTime) {
						if (!isTimeObj) self.hourElement.focus();
						updateTime(e);
					}

					break;

				case "Tab":
					if (e.target === self.hourElement) {
						e.preventDefault();
						self.minuteElement.select();
					} else if (e.target === self.minuteElement && (self.secondElement || self.amPM)) {
						e.preventDefault();
						(self.secondElement || self.amPM).focus();
					} else if (e.target === self.secondElement) {
						e.preventDefault();
						self.amPM.focus();
					}

					break;

				case "a":
					if (e.target === self.amPM) {
						self.amPM.textContent = "AM";
						setHoursFromInputs();
						updateValue();
					}
					break;

				case "p":
					if (e.target === self.amPM) {
						self.amPM.textContent = "PM";
						setHoursFromInputs();
						updateValue();
					}
					break;

				default:
					break;

			}

			triggerEvent("KeyDown", e);
		}
	}

	function onMouseOver(elem) {
		if (self.selectedDates.length !== 1 || !elem.classList.contains("flatpickr-day")) return;

		var hoverDate = elem.dateObj,
		    initialDate = self.parseDate(self.selectedDates[0], null, true),
		    rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()),
		    rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()),
		    containsDisabled = false;

		for (var t = rangeStartDate; t < rangeEndDate; t += self.utils.duration.DAY) {
			if (!isEnabled(new Date(t))) {
				containsDisabled = true;
				break;
			}
		}

		var _loop = function _loop(timestamp, i) {
			var outOfRange = timestamp < self.minRangeDate.getTime() || timestamp > self.maxRangeDate.getTime(),
			    dayElem = self.days.childNodes[i];

			if (outOfRange) {
				self.days.childNodes[i].classList.add("notAllowed");
				["inRange", "startRange", "endRange"].forEach(function (c) {
					dayElem.classList.remove(c);
				});
				return "continue";
			} else if (containsDisabled && !outOfRange) return "continue";

			["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
				dayElem.classList.remove(c);
			});

			var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate),
			    maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);

			elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");

			if (initialDate < hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("endRange");

			if (timestamp >= minRangeDate && timestamp <= maxRangeDate) dayElem.classList.add("inRange");
		};

		for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += self.utils.duration.DAY) {
			var _ret = _loop(timestamp, i);

			if (_ret === "continue") continue;
		}
	}

	function onResize() {
		if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
	}

	function open(e, positionElement) {
		if (self.isMobile) {
			if (e) {
				e.preventDefault();
				e.target.blur();
			}

			setTimeout(function () {
				self.mobileInput.click();
			}, 0);

			triggerEvent("Open");
			return;
		}

		if (self.isOpen || self._input.disabled || self.config.inline) return;

		self.isOpen = true;
		self.calendarContainer.classList.add("open");
		positionCalendar(positionElement);
		self._input.classList.add("active");

		triggerEvent("Open");
	}

	function minMaxDateSetter(type) {
		return function (date) {
			var dateObj = self.config["_" + type + "Date"] = self.parseDate(date);

			var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
			var isValidDate = date && dateObj instanceof Date;

			if (isValidDate) {
				self[type + "DateHasTime"] = dateObj.getHours() || dateObj.getMinutes() || dateObj.getSeconds();
			}

			if (self.selectedDates) {
				self.selectedDates = self.selectedDates.filter(function (d) {
					return isEnabled(d);
				});
				if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
				updateValue();
			}

			if (self.daysContainer) {
				redraw();

				if (isValidDate) self.currentYearElement[type] = dateObj.getFullYear();else self.currentYearElement.removeAttribute(type);

				self.currentYearElement.disabled = inverseDateObj && dateObj && inverseDateObj.getFullYear() === dateObj.getFullYear();
			}
		};
	}

	function parseConfig() {
		var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

		var hooks = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange"];

		self.config = Object.create(flatpickr.defaultConfig);

		var userConfig = _extends({}, self.instanceConfig, JSON.parse(JSON.stringify(self.element.dataset || {})));

		self.config.parseDate = userConfig.parseDate;
		self.config.formatDate = userConfig.formatDate;

		Object.defineProperty(self.config, "enable", {
			get: function get() {
				return self.config._enable || [];
			},
			set: function set(dates) {
				return self.config._enable = parseDateRules(dates);
			}
		});

		Object.defineProperty(self.config, "disable", {
			get: function get() {
				return self.config._disable || [];
			},
			set: function set(dates) {
				return self.config._disable = parseDateRules(dates);
			}
		});

		_extends(self.config, userConfig);

		if (!userConfig.dateFormat && userConfig.enableTime) {
			self.config.dateFormat = self.config.noCalendar ? "H:i" + (self.config.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (self.config.enableSeconds ? ":S" : "");
		}

		if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
			self.config.altFormat = self.config.noCalendar ? "h:i" + (self.config.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (self.config.enableSeconds ? ":S" : "") + " K");
		}

		Object.defineProperty(self.config, "minDate", {
			get: function get() {
				return this._minDate;
			},
			set: minMaxDateSetter("min")
		});

		Object.defineProperty(self.config, "maxDate", {
			get: function get() {
				return this._maxDate;
			},
			set: minMaxDateSetter("max")
		});

		self.config.minDate = userConfig.minDate;
		self.config.maxDate = userConfig.maxDate;

		for (var i = 0; i < boolOpts.length; i++) {
			self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
		}for (var _i = hooks.length; _i--;) {
			if (self.config[hooks[_i]] !== undefined) {
				self.config[hooks[_i]] = arrayify(self.config[hooks[_i]] || []).map(bindToInstance);
			}
		}

		for (var _i2 = 0; _i2 < self.config.plugins.length; _i2++) {
			var pluginConf = self.config.plugins[_i2](self) || {};
			for (var key in pluginConf) {

				if (self.config[key] instanceof Array || ~hooks.indexOf(key)) {
					self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
				} else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
			}
		}

		triggerEvent("ParseConfig");
	}

	function setupLocale() {
		if (_typeof(self.config.locale) !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") console.warn("flatpickr: invalid locale " + self.config.locale);

		self.l10n = _extends(Object.create(flatpickr.l10ns.default), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] || {} : {});
	}

	function positionCalendar() {
		var positionElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self._positionElement;

		if (self.calendarContainer === undefined) return;

		var calendarHeight = self.calendarContainer.offsetHeight,
		    calendarWidth = self.calendarContainer.offsetWidth,
		    configPos = self.config.position,
		    inputBounds = positionElement.getBoundingClientRect(),
		    distanceFromBottom = window.innerHeight - inputBounds.bottom,
		    showOnTop = configPos === "above" || configPos !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;

		var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);

		toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
		toggleClass(self.calendarContainer, "arrowBottom", showOnTop);

		if (self.config.inline) return;

		var left = window.pageXOffset + inputBounds.left;
		var right = window.document.body.offsetWidth - inputBounds.right;
		var rightMost = left + calendarWidth > window.document.body.offsetWidth;

		toggleClass(self.calendarContainer, "rightMost", rightMost);

		if (self.config.static) return;

		self.calendarContainer.style.top = top + "px";

		if (!rightMost) {
			self.calendarContainer.style.left = left + "px";
			self.calendarContainer.style.right = "auto";
		} else {
			self.calendarContainer.style.left = "auto";
			self.calendarContainer.style.right = right + "px";
		}
	}

	function redraw() {
		if (self.config.noCalendar || self.isMobile) return;

		buildWeekdays();
		updateNavigationCurrentMonth();
		buildDays();
	}

	function selectDate(e) {
		e.preventDefault();
		e.stopPropagation();

		if (!e.target.classList.contains("flatpickr-day") || e.target.classList.contains("disabled") || e.target.classList.contains("notAllowed")) return;

		var selectedDate = self.latestSelectedDateObj = new Date(e.target.dateObj.getTime());

		var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth && self.config.mode !== "range";

		self.selectedDateElem = e.target;

		if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
			var selectedIndex = isDateSelected(selectedDate);
			if (selectedIndex) self.selectedDates.splice(selectedIndex, 1);else self.selectedDates.push(selectedDate);
		} else if (self.config.mode === "range") {
			if (self.selectedDates.length === 2) self.clear();

			self.selectedDates.push(selectedDate);

			// unless selecting same date twice, sort ascendingly
			if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
				return a.getTime() - b.getTime();
			});
		}

		setHoursFromInputs();

		if (shouldChangeMonth) {
			var isNewYear = self.currentYear !== selectedDate.getFullYear();
			self.currentYear = selectedDate.getFullYear();
			self.currentMonth = selectedDate.getMonth();

			if (isNewYear) triggerEvent("YearChange");

			triggerEvent("MonthChange");
		}

		buildDays();

		if (self.minDateHasTime && self.config.enableTime && compareDates(selectedDate, self.config.minDate) === 0) setHoursFromDate(self.config.minDate);

		updateValue();

		if (self.config.enableTime) setTimeout(function () {
			return self.showTimeInput = true;
		}, 50);

		if (self.config.mode === "range") {
			if (self.selectedDates.length === 1) {
				onMouseOver(e.target);

				self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > self.days.childNodes[0].dateObj;

				self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
			} else updateNavigationCurrentMonth();
		}

		triggerEvent("Change");

		// maintain focus
		if (!shouldChangeMonth) focusOnDay(e.target.$i, 0);else afterDayAnim(function () {
			return self.selectedDateElem.focus();
		});

		if (self.config.enableTime) setTimeout(function () {
			return self.hourElement.select();
		}, 451);

		if (self.config.closeOnSelect) {
			var single = self.config.mode === "single" && !self.config.enableTime;
			var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

			if (single || range) self.close();
		}
	}

	function set(option, value) {
		self.config[option] = value;
		self.redraw();
		jumpToDate();
	}

	function setSelectedDate(inputDate, format) {
		if (inputDate instanceof Array) self.selectedDates = inputDate.map(function (d) {
			return self.parseDate(d, format);
		});else if (inputDate instanceof Date || !isNaN(inputDate)) self.selectedDates = [self.parseDate(inputDate, format)];else if (inputDate && inputDate.substring) {
			switch (self.config.mode) {
				case "single":
					self.selectedDates = [self.parseDate(inputDate, format)];
					break;

				case "multiple":
					self.selectedDates = inputDate.split("; ").map(function (date) {
						return self.parseDate(date, format);
					});
					break;

				case "range":
					self.selectedDates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
						return self.parseDate(date, format);
					});

					break;

				default:
					break;
			}
		}

		self.selectedDates = self.selectedDates.filter(function (d) {
			return d instanceof Date && isEnabled(d, false);
		});

		self.selectedDates.sort(function (a, b) {
			return a.getTime() - b.getTime();
		});
	}

	function setDate(date, triggerChange, format) {
		if (date !== 0 && !date) return self.clear(triggerChange);

		setSelectedDate(date, format);

		self.showTimeInput = self.selectedDates.length > 0;
		self.latestSelectedDateObj = self.selectedDates[0];

		self.redraw();
		jumpToDate();

		setHoursFromDate();
		updateValue(triggerChange);

		if (triggerChange) triggerEvent("Change");
	}

	function parseDateRules(arr) {
		for (var i = arr.length; i--;) {
			if (typeof arr[i] === "string" || +arr[i]) arr[i] = self.parseDate(arr[i], null, true);else if (arr[i] && arr[i].from && arr[i].to) {
				arr[i].from = self.parseDate(arr[i].from);
				arr[i].to = self.parseDate(arr[i].to);
			}
		}

		return arr.filter(function (x) {
			return x;
		}); // remove falsy values
	}

	function setupDates() {
		self.selectedDates = [];
		self.now = new Date();

		var preloadedDate = self.config.defaultDate || self.input.value;
		if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);

		var initialDate = self.selectedDates.length ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now ? self.config.maxDate : self.now;

		self.currentYear = initialDate.getFullYear();
		self.currentMonth = initialDate.getMonth();

		if (self.selectedDates.length) self.latestSelectedDateObj = self.selectedDates[0];

		self.minDateHasTime = self.config.minDate && (self.config.minDate.getHours() || self.config.minDate.getMinutes() || self.config.minDate.getSeconds());

		self.maxDateHasTime = self.config.maxDate && (self.config.maxDate.getHours() || self.config.maxDate.getMinutes() || self.config.maxDate.getSeconds());

		Object.defineProperty(self, "latestSelectedDateObj", {
			get: function get() {
				return self._selectedDateObj || self.selectedDates[self.selectedDates.length - 1];
			},
			set: function set(date) {
				self._selectedDateObj = date;
			}
		});

		if (!self.isMobile) {
			Object.defineProperty(self, "showTimeInput", {
				get: function get() {
					return self._showTimeInput;
				},
				set: function set(bool) {
					self._showTimeInput = bool;
					if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
					positionCalendar();
				}
			});
		}
	}

	function setupHelperFunctions() {
		self.utils = {
			duration: {
				DAY: 86400000
			},
			getDaysinMonth: function getDaysinMonth(month, yr) {
				month = typeof month === "undefined" ? self.currentMonth : month;

				yr = typeof yr === "undefined" ? self.currentYear : yr;

				if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;

				return self.l10n.daysInMonth[month];
			},
			monthToStr: function monthToStr(monthNumber, shorthand) {
				shorthand = typeof shorthand === "undefined" ? self.config.shorthandCurrentMonth : shorthand;

				return self.l10n.months[(shorthand ? "short" : "long") + "hand"][monthNumber];
			}
		};
	}

	/* istanbul ignore next */
	function setupFormats() {
		self.formats = Object.create(FlatpickrInstance.prototype.formats);
		["D", "F", "J", "M", "W", "l"].forEach(function (f) {
			self.formats[f] = FlatpickrInstance.prototype.formats[f].bind(self);
		});

		self.revFormat.F = FlatpickrInstance.prototype.revFormat.F.bind(self);
		self.revFormat.M = FlatpickrInstance.prototype.revFormat.M.bind(self);
	}

	function setupInputs() {
		self.input = self.config.wrap ? self.element.querySelector("[data-input]") : self.element;

		/* istanbul ignore next */
		if (!self.input) return console.warn("Error: invalid input element specified", self.input);

		self.input._type = self.input.type;
		self.input.type = "text";

		self.input.classList.add("flatpickr-input");
		self._input = self.input;

		if (self.config.altInput) {
			// replicate self.element
			self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
			self._input = self.altInput;
			self.altInput.placeholder = self.input.placeholder;
			self.altInput.disabled = self.input.disabled;
			self.altInput.required = self.input.required;
			self.altInput.type = "text";
			self.input.type = "hidden";

			if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
		}

		if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");

		self._positionElement = self.config.positionElement || self._input;
	}

	function setupMobile() {
		var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";

		self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
		self.mobileInput.step = "any";
		self.mobileInput.tabIndex = 1;
		self.mobileInput.type = inputType;
		self.mobileInput.disabled = self.input.disabled;
		self.mobileInput.placeholder = self.input.placeholder;

		self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

		if (self.selectedDates.length) {
			self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
		}

		if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");

		if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");

		self.input.type = "hidden";
		if (self.config.altInput) self.altInput.type = "hidden";

		try {
			self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
		} catch (e) {
			//
		}

		self.mobileInput.addEventListener("change", function (e) {
			self.setDate(e.target.value, false, self.mobileFormatStr);
			triggerEvent("Change");
			triggerEvent("Close");
		});
	}

	function toggle() {
		if (self.isOpen) return self.close();
		self.open();
	}

	function triggerEvent(event, data) {
		var hooks = self.config["on" + event];

		if (hooks !== undefined && hooks.length > 0) {
			for (var i = 0; hooks[i] && i < hooks.length; i++) {
				hooks[i](self.selectedDates, self.input.value, self, data);
			}
		}

		if (event === "Change") {
			self.input.dispatchEvent(createEvent("change"));

			// many front-end frameworks bind to the input event
			self.input.dispatchEvent(createEvent("input"));
		}
	}

	/**
  * Creates an Event, normalized across browsers
  * @param {String} name the event name, e.g. "click"
  * @return {Event} the created event
  */
	function createEvent(name) {
		if (self._supportsEvents) return new Event(name, { bubbles: true });

		self._[name + "Event"] = document.createEvent("Event");
		self._[name + "Event"].initEvent(name, true, true);
		return self._[name + "Event"];
	}

	function isDateSelected(date) {
		for (var i = 0; i < self.selectedDates.length; i++) {
			if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
		}

		return false;
	}

	function isDateInRange(date) {
		if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
		return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
	}

	function updateNavigationCurrentMonth() {
		if (self.config.noCalendar || self.isMobile || !self.monthNav) return;

		self.currentMonthElement.textContent = self.utils.monthToStr(self.currentMonth) + " ";
		self.currentYearElement.value = self.currentYear;

		self._hidePrevMonthArrow = self.config.minDate && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());

		self._hideNextMonthArrow = self.config.maxDate && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
	}

	/**
  * Updates the values of inputs associated with the calendar
  * @return {void}
  */
	function updateValue(triggerChange) {
		if (!self.selectedDates.length) return self.clear(triggerChange);

		if (self.isMobile) {
			self.mobileInput.value = self.selectedDates.length ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
		}

		var joinChar = self.config.mode !== "range" ? "; " : self.l10n.rangeSeparator;

		self.input.value = self.selectedDates.map(function (dObj) {
			return self.formatDate(dObj, self.config.dateFormat);
		}).join(joinChar);

		if (self.config.altInput) {
			self.altInput.value = self.selectedDates.map(function (dObj) {
				return self.formatDate(dObj, self.config.altFormat);
			}).join(joinChar);
		}

		if (triggerChange !== false) triggerEvent("ValueUpdate");
	}

	function mouseDelta(e) {
		return Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
	}

	function onMonthNavScroll(e) {
		e.preventDefault();
		var isYear = self.currentYearElement.parentNode.contains(e.target);

		if (e.target === self.currentMonthElement || isYear) {

			var delta = mouseDelta(e);

			if (isYear) {
				changeYear(self.currentYear + delta);
				e.target.value = self.currentYear;
			} else self.changeMonth(delta, true, false);
		}
	}

	function onMonthNavClick(e) {
		var isPrevMonth = self.prevMonthNav.contains(e.target);
		var isNextMonth = self.nextMonthNav.contains(e.target);

		if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1);else if (e.target === self.currentYearElement) {
			e.preventDefault();
			self.currentYearElement.select();
		} else if (e.target.className === "arrowUp") self.changeYear(self.currentYear + 1);else if (e.target.className === "arrowDown") self.changeYear(self.currentYear - 1);
	}

	/**
  * Creates an HTMLElement with given tag, class, and textual content
  * @param {String} tag the HTML tag
  * @param {String} className the new element's class name
  * @param {String} content The new element's text content
  * @return {HTMLElement} the created HTML element
  */
	function createElement(tag, className, content) {
		var e = window.document.createElement(tag);
		className = className || "";
		content = content || "";

		e.className = className;

		if (content !== undefined) e.textContent = content;

		return e;
	}

	function arrayify(obj) {
		if (obj instanceof Array) return obj;
		return [obj];
	}

	function toggleClass(elem, className, bool) {
		if (bool) return elem.classList.add(className);
		elem.classList.remove(className);
	}

	/* istanbul ignore next */
	function debounce(func, wait, immediate) {
		var timeout = void 0;
		return function () {
			var context = this,
			    args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}

	/**
  * Compute the difference in dates, measured in ms
  * @param {Date} date1
  * @param {Date} date2
  * @param {Boolean} timeless whether to reset times of both dates to 00:00
  * @return {Number} the difference in ms
  */
	function compareDates(date1, date2, timeless) {
		if (!(date1 instanceof Date) || !(date2 instanceof Date)) return false;

		if (timeless !== false) {
			return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
		}

		return date1.getTime() - date2.getTime();
	}

	function timeWrapper(e) {
		e.preventDefault();

		var isKeyDown = e.type === "keydown",
		    isWheel = e.type === "wheel",
		    isIncrement = e.type === "increment",
		    input = e.target;

		if (self.amPM && e.target === self.amPM) return e.target.textContent = ["AM", "PM"][e.target.textContent === "AM" | 0];

		var min = Number(input.min),
		    max = Number(input.max),
		    step = Number(input.step),
		    curValue = parseInt(input.value, 10),
		    delta = e.delta || (!isKeyDown ? Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0 : e.which === 38 ? 1 : -1);

		var newValue = curValue + step * delta;

		if (typeof input.value !== "undefined" && input.value.length === 2) {
			var isHourElem = input === self.hourElement,
			    isMinuteElem = input === self.minuteElement;

			if (newValue < min) {
				newValue = max + newValue + !isHourElem + (isHourElem && !self.amPM);

				if (isMinuteElem) incrementNumInput(null, -1, self.hourElement);
			} else if (newValue > max) {
				newValue = input === self.hourElement ? newValue - max - !self.amPM : min;

				if (isMinuteElem) incrementNumInput(null, 1, self.hourElement);
			}

			if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";

			input.value = self.pad(newValue);
		}
	}

	init();
	return self;
}

FlatpickrInstance.prototype = {
	formats: {
		// get the date in UTC
		Z: function Z(date) {
			return date.toISOString();
		},

		// weekday name, short, e.g. Thu
		D: function D(date) {
			return this.l10n.weekdays.shorthand[this.formats.w(date)];
		},

		// full month name e.g. January
		F: function F(date) {
			return this.utils.monthToStr(this.formats.n(date) - 1, false);
		},

		// padded hour 1-12
		G: function G(date) {
			return FlatpickrInstance.prototype.pad(FlatpickrInstance.prototype.formats.h(date));
		},

		// hours with leading zero e.g. 03
		H: function H(date) {
			return FlatpickrInstance.prototype.pad(date.getHours());
		},

		// day (1-30) with ordinal suffix e.g. 1st, 2nd
		J: function J(date) {
			return date.getDate() + this.l10n.ordinal(date.getDate());
		},

		// AM/PM
		K: function K(date) {
			return date.getHours() > 11 ? "PM" : "AM";
		},

		// shorthand month e.g. Jan, Sep, Oct, etc
		M: function M(date) {
			return this.utils.monthToStr(date.getMonth(), true);
		},

		// seconds 00-59
		S: function S(date) {
			return FlatpickrInstance.prototype.pad(date.getSeconds());
		},

		// unix timestamp
		U: function U(date) {
			return date.getTime() / 1000;
		},

		W: function W(date) {
			return this.config.getWeek(date);
		},

		// full year e.g. 2016
		Y: function Y(date) {
			return date.getFullYear();
		},

		// day in month, padded (01-30)
		d: function d(date) {
			return FlatpickrInstance.prototype.pad(date.getDate());
		},

		// hour from 1-12 (am/pm)
		h: function h(date) {
			return date.getHours() % 12 ? date.getHours() % 12 : 12;
		},

		// minutes, padded with leading zero e.g. 09
		i: function i(date) {
			return FlatpickrInstance.prototype.pad(date.getMinutes());
		},

		// day in month (1-30)
		j: function j(date) {
			return date.getDate();
		},

		// weekday name, full, e.g. Thursday
		l: function l(date) {
			return this.l10n.weekdays.longhand[date.getDay()];
		},

		// padded month number (01-12)
		m: function m(date) {
			return FlatpickrInstance.prototype.pad(date.getMonth() + 1);
		},

		// the month number (1-12)
		n: function n(date) {
			return date.getMonth() + 1;
		},

		// seconds 0-59
		s: function s(date) {
			return date.getSeconds();
		},

		// number of the day of the week
		w: function w(date) {
			return date.getDay();
		},

		// last two digits of year e.g. 16 for 2016
		y: function y(date) {
			return String(date.getFullYear()).substring(2);
		}
	},

	/**
  * Formats a given Date object into a string based on supplied format
  * @param {Date} dateObj the date object
  * @param {String} frmt a string composed of formatting tokens e.g. "Y-m-d"
  * @return {String} The textual representation of the date e.g. 2017-02-03
  */
	formatDate: function formatDate(dateObj, frmt) {
		var _this = this;

		if (this.config !== undefined && this.config.formatDate !== undefined) return this.config.formatDate(dateObj, frmt);

		return frmt.split("").map(function (c, i, arr) {
			return _this.formats[c] && arr[i - 1] !== "\\" ? _this.formats[c](dateObj) : c !== "\\" ? c : "";
		}).join("");
	},

	revFormat: {
		D: function D() {},
		F: function F(dateObj, monthName) {
			dateObj.setMonth(this.l10n.months.longhand.indexOf(monthName));
		},
		G: function G(dateObj, hour) {
			dateObj.setHours(parseFloat(hour));
		},
		H: function H(dateObj, hour) {
			dateObj.setHours(parseFloat(hour));
		},
		J: function J(dateObj, day) {
			dateObj.setDate(parseFloat(day));
		},
		K: function K(dateObj, amPM) {
			var hours = dateObj.getHours();

			if (hours !== 12) dateObj.setHours(hours % 12 + 12 * /pm/i.test(amPM));
		},
		M: function M(dateObj, shortMonth) {
			dateObj.setMonth(this.l10n.months.shorthand.indexOf(shortMonth));
		},
		S: function S(dateObj, seconds) {
			dateObj.setSeconds(seconds);
		},
		U: function U(dateObj, unixSeconds) {
			return new Date(parseFloat(unixSeconds) * 1000);
		},

		W: function W(dateObj, weekNumber) {
			weekNumber = parseInt(weekNumber);
			return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0, 0);
		},
		Y: function Y(dateObj, year) {
			dateObj.setFullYear(year);
		},
		Z: function Z(dateObj, ISODate) {
			return new Date(ISODate);
		},

		d: function d(dateObj, day) {
			dateObj.setDate(parseFloat(day));
		},
		h: function h(dateObj, hour) {
			dateObj.setHours(parseFloat(hour));
		},
		i: function i(dateObj, minutes) {
			dateObj.setMinutes(parseFloat(minutes));
		},
		j: function j(dateObj, day) {
			dateObj.setDate(parseFloat(day));
		},
		l: function l() {},
		m: function m(dateObj, month) {
			dateObj.setMonth(parseFloat(month) - 1);
		},
		n: function n(dateObj, month) {
			dateObj.setMonth(parseFloat(month) - 1);
		},
		s: function s(dateObj, seconds) {
			dateObj.setSeconds(parseFloat(seconds));
		},
		w: function w() {},
		y: function y(dateObj, year) {
			dateObj.setFullYear(2000 + parseFloat(year));
		}
	},

	tokenRegex: {
		D: "(\\w+)",
		F: "(\\w+)",
		G: "(\\d\\d|\\d)",
		H: "(\\d\\d|\\d)",
		J: "(\\d\\d|\\d)\\w+",
		K: "(am|AM|Am|aM|pm|PM|Pm|pM)",
		M: "(\\w+)",
		S: "(\\d\\d|\\d)",
		U: "(.+)",
		W: "(\\d\\d|\\d)",
		Y: "(\\d{4})",
		Z: "(.+)",
		d: "(\\d\\d|\\d)",
		h: "(\\d\\d|\\d)",
		i: "(\\d\\d|\\d)",
		j: "(\\d\\d|\\d)",
		l: "(\\w+)",
		m: "(\\d\\d|\\d)",
		n: "(\\d\\d|\\d)",
		s: "(\\d\\d|\\d)",
		w: "(\\d\\d|\\d)",
		y: "(\\d{2})"
	},

	pad: function pad(number) {
		return ("0" + number).slice(-2);
	},

	/**
  * Parses a date(+time) string into a Date object
  * @param {String} date the date string, e.g. 2017-02-03 14:45
  * @param {String} givenFormat the date format, e.g. Y-m-d H:i
  * @param {Boolean} timeless whether to reset the time of Date object
  * @return {Date} the parsed Date object
  */
	parseDate: function parseDate(date, givenFormat, timeless) {
		if (date !== 0 && !date) return null;

		var date_orig = date;

		if (date instanceof Date) date = new Date(date.getTime()); // create a copy

		else if (date.toFixed !== undefined) // timestamp
				date = new Date(date);else {
				// date string
				var format = givenFormat || (this.config || flatpickr.defaultConfig).dateFormat;
				date = String(date).trim();

				if (date === "today") {
					date = new Date();
					timeless = true;
				} else if (/Z$/.test(date) || /GMT$/.test(date)) // datestrings w/ timezone
					date = new Date(date);else if (this.config && this.config.parseDate) date = this.config.parseDate(date, format);else {
					var parsedDate = !this.config || !this.config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));

					var matched = void 0;

					for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
						var token = format[i];
						var isBackSlash = token === "\\";
						var escaped = format[i - 1] === "\\" || isBackSlash;

						if (this.tokenRegex[token] && !escaped) {
							regexStr += this.tokenRegex[token];
							var match = new RegExp(regexStr).exec(date);
							if (match && (matched = true)) {
								parsedDate = this.revFormat[token](parsedDate, match[++matchIndex]) || parsedDate;
							}
						} else if (!isBackSlash) regexStr += "."; // don't really care
					}

					date = matched ? parsedDate : null;
				}
			}

		/* istanbul ignore next */
		if (!(date instanceof Date)) {
			console.warn("flatpickr: invalid date " + date_orig);
			console.info(this.element);
			return null;
		}

		if (timeless === true) date.setHours(0, 0, 0, 0);

		return date;
	}
};

/* istanbul ignore next */
function _flatpickr(nodeList, config) {
	var nodes = Array.prototype.slice.call(nodeList); // static list
	var instances = [];
	for (var i = 0; i < nodes.length; i++) {
		try {
			if (nodes[i].getAttribute("data-fp-omit") !== null) continue;

			if (nodes[i]._flatpickr) {
				nodes[i]._flatpickr.destroy();
				nodes[i]._flatpickr = null;
			}

			nodes[i]._flatpickr = new FlatpickrInstance(nodes[i], config || {});
			instances.push(nodes[i]._flatpickr);
		} catch (e) {
			console.warn(e, e.stack);
		}
	}

	return instances.length === 1 ? instances[0] : instances;
}

/* istanbul ignore next */
if (typeof HTMLElement !== "undefined") {
	// browser env
	HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
		return _flatpickr(this, config);
	};

	HTMLElement.prototype.flatpickr = function (config) {
		return _flatpickr([this], config);
	};
}

/* istanbul ignore next */
function flatpickr(selector, config) {
	if (selector instanceof NodeList) return _flatpickr(selector, config);else if (!(selector instanceof HTMLElement)) return _flatpickr(window.document.querySelectorAll(selector), config);

	return _flatpickr([selector], config);
}

/* istanbul ignore next */
flatpickr.defaultConfig = FlatpickrInstance.defaultConfig = {
	mode: "single",

	position: "auto",

	animate: window.navigator.userAgent.indexOf("MSIE") === -1,

	// wrap: see https://chmln.github.io/flatpickr/examples/#flatpickr-external-elements
	wrap: false,

	// enables week numbers
	weekNumbers: false,

	// allow manual datetime input
	allowInput: false,

	/*
 	clicking on input opens the date(time)picker.
 	disable if you wish to open the calendar manually with .open()
 */
	clickOpens: true,

	/*
 	closes calendar after date selection,
 	unless 'mode' is 'multiple' or enableTime is true
 */
	closeOnSelect: true,

	// display time picker in 24 hour mode
	time_24hr: false,

	// enables the time picker functionality
	enableTime: false,

	// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
	noCalendar: false,

	// more date format chars at https://chmln.github.io/flatpickr/#dateformat
	dateFormat: "Y-m-d",

	// date format used in aria-label for days
	ariaDateFormat: "F j, Y",

	// altInput - see https://chmln.github.io/flatpickr/#altinput
	altInput: false,

	// the created altInput element will have this class.
	altInputClass: "form-control input",

	// same as dateFormat, but for altInput
	altFormat: "F j, Y", // defaults to e.g. June 10, 2016

	// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
	defaultDate: null,

	// the minimum date that user can pick (inclusive)
	minDate: null,

	// the maximum date that user can pick (inclusive)
	maxDate: null,

	// dateparser that transforms a given string to a date object
	parseDate: null,

	// dateformatter that transforms a given date object to a string, according to passed format
	formatDate: null,

	getWeek: function getWeek(givenDate) {
		var date = new Date(givenDate.getTime());
		var onejan = new Date(date.getFullYear(), 0, 1);
		return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
	},

	// see https://chmln.github.io/flatpickr/#disable
	enable: [],

	// see https://chmln.github.io/flatpickr/#disable
	disable: [],

	// display the short version of month names - e.g. Sep instead of September
	shorthandCurrentMonth: false,

	// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
	inline: false,

	// position calendar inside wrapper and next to the input element
	// leave at false unless you know what you"re doing
	"static": false,

	// DOM node to append the calendar to in *static* mode
	appendTo: null,

	// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
	prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
	nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",

	// enables seconds in the time picker
	enableSeconds: false,

	// step size used when scrolling/incrementing the hour element
	hourIncrement: 1,

	// step size used when scrolling/incrementing the minute element
	minuteIncrement: 5,

	// initial value in the hour element
	defaultHour: 12,

	// initial value in the minute element
	defaultMinute: 0,

	// disable native mobile datetime input support
	disableMobile: false,

	// default locale
	locale: "default",

	plugins: [],

	ignoredFocusElements: [],

	// called every time calendar is closed
	onClose: undefined, // function (dateObj, dateStr) {}

	// onChange callback when user selects a date or time
	onChange: undefined, // function (dateObj, dateStr) {}

	// called for every day element
	onDayCreate: undefined,

	// called every time the month is changed
	onMonthChange: undefined,

	// called every time calendar is opened
	onOpen: undefined, // function (dateObj, dateStr) {}

	// called after the configuration has been parsed
	onParseConfig: undefined,

	// called after calendar is ready
	onReady: undefined, // function (dateObj, dateStr) {}

	// called after input value updated
	onValueUpdate: undefined,

	// called every time the year is changed
	onYearChange: undefined,

	onKeyDown: undefined,

	onDestroy: undefined
};

/* istanbul ignore next */
flatpickr.l10ns = {
	en: {
		weekdays: {
			shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		},
		months: {
			shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		},
		daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		firstDayOfWeek: 0,
		ordinal: function ordinal(nth) {
			var s = nth % 100;
			if (s > 3 && s < 21) return "th";
			switch (s % 10) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd";
				default:
					return "th";
			}
		},
		rangeSeparator: " to ",
		weekAbbreviation: "Wk",
		scrollTitle: "Scroll to increment",
		toggleTitle: "Click to toggle"
	}
};

flatpickr.l10ns.default = Object.create(flatpickr.l10ns.en);
flatpickr.localize = function (l10n) {
	return _extends(flatpickr.l10ns.default, l10n || {});
};
flatpickr.setDefaults = function (config) {
	return _extends(flatpickr.defaultConfig, config || {});
};

/* istanbul ignore next */
if (typeof jQuery !== "undefined") {
	jQuery.fn.flatpickr = function (config) {
		return _flatpickr(this, config);
	};
}

Date.prototype.fp_incr = function (days) {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
};

if (true) module.exports = flatpickr;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map