module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallpaper */ "./src/components/wallpaper.js");
var _jsxFileName = "C:\\Users\\Beatrice A. Arthur\\Desktop\\week3Assignment\\src\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Header() {
  return __jsx("header", {
    className: "jsx-3694384677" + " " + "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3694384677" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-3694384677" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Mavel's Fearless"), __jsx("p", {
    className: "jsx-3694384677" + " " + "subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae molestias earum eveniet."), __jsx("div", {
    className: "jsx-3694384677" + " " + "search-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "search",
    placeholder: "Search",
    className: "jsx-3694384677",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  })), __jsx(_wallpaper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3694384677",
    __self: this
  }, ".header.jsx-3694384677{width:100%;height:120vh;padding-top:15rem;padding-bottom:15rem;background-color:var(--color-primary);color:var(--color-secondary);position:relative;}.container.jsx-3694384677{width:124rem;max-width:100%;margin:0rem auto;}@media (max-width:1280px){.container.jsx-3694384677{padding:0rem 10rem;}}@media (max-width:768px){.container.jsx-3694384677{padding:0rem 4rem;}}.title.jsx-3694384677,.subtitle.jsx-3694384677{width:60rem;max-width:100%;}.title.jsx-3694384677{font-size:7.2rem;}.subtitle.jsx-3694384677{margin-bottom:3rem;}.search-bar.jsx-3694384677{width:30rem;max-width:100%;margin-bottom:8rem;border-bottom:2px solid var(--color-tertiary);position:relative;font-size:1.6rem;}.search-bar.jsx-3694384677 input.jsx-3694384677{width:100%;height:100%;border:0;outline:none;font-family:Roboto,-apple-system,BlinkMacSystemFont,\"Segoe UI\", Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmVhdHJpY2UgQS4gQXJ0aHVyXFxEZXNrdG9wXFx3ZWVrM0Fzc2lnbm1lbnRcXHNyY1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHc0IsQUFTRSxBQU1RLEFBTUQsQUFLUixBQUtLLEFBSUUsQUFHUCxBQVVELFdBL0NFLEFBZ0RELENBdEJHLEFBWUEsQ0E3QkEsSUFzQmpCLENBVkUsQ0FOQSxBQW9CRixJQWNXLENBaERTLEdBMEJwQixBQVlxQixDQTdCRixJQXdDSixVQWhEUSxHQVN2QixBQXlDd0UsQ0FaeEIsaUJBckNSLDZCQXVDcEIsU0F0Q1csU0F1Q1osaUJBQ25CLEdBdkNvQixrQkFDcEIseUJBK0NBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQmVhdHJpY2UgQS4gQXJ0aHVyXFxEZXNrdG9wXFx3ZWVrM0Fzc2lnbm1lbnRcXHNyY1xcY29tcG9uZW50c1xcaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdhbGxwYXBhciBmcm9tIFwiLi93YWxscGFwZXJcIjtcblxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+TWF2ZWwncyBGZWFybGVzczwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gYmVhdGFlXG4gICAgICAgICAgbW9sZXN0aWFzIGVhcnVtIGV2ZW5pZXQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8V2FsbHBhcGFyPjwvV2FsbHBhcGFyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMjB2aDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTVyZW07XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTI0cmVtO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDByZW0gYXV0bztcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcmVtIDEwcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMHJlbSA0cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgd2lkdGg6IDYwcmVtO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiA3LjJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgIHdpZHRoOiAzMHJlbTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItdGVydGlhcnkpO1xuXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaC1iYXIgaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Beatrice A. Arthur\\\\Desktop\\\\week3Assignment\\\\src\\\\components\\\\header.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");
var _jsxFileName = "C:\\Users\\Beatrice A. Arthur\\Desktop\\week3Assignment\\src\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Layout(props) {
  return __jsx("div", {
    className: "layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(GlobalHeader, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

function GlobalHeader() {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Trial"), __jsx("link", {
    rel: "stylesheet",
    href: "/css/global.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Beatrice A. Arthur\\Desktop\\week3Assignment\\src\\components\\navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Navbar() {
  return __jsx("nav", {
    className: "jsx-2280469814" + " " + "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2280469814" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-2280469814",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 11
    }
  }, "Hulk"), __jsx("a", {
    href: "#",
    className: "jsx-2280469814" + " " + "logo is-active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, "Mavel"), __jsx("a", {
    href: "#",
    className: "jsx-2280469814",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, "Venom")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2280469814",
    __self: this
  }, ".navbar.jsx-2280469814{width:100%;height:8rem;background-color:var(--color-secondary);color:#ffffff;position:fixed;left:0;top:0;z-index:99;box-shadow:0px 6px 8px rgba(0,0,0,0.5);}.navbar.jsx-2280469814 .container.jsx-2280469814{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.navbar.jsx-2280469814 a.jsx-2280469814{color:#ffffff;text-transform:uppercase;-webkit-letter-spacing:0.5rem;-moz-letter-spacing:0.5rem;-ms-letter-spacing:0.5rem;letter-spacing:0.5rem;text-align:center;height:100%;padding:2rem;display:grid;place-content:center;}.navbar.jsx-2280469814 a.is-active.jsx-2280469814{border-bottom:4px solid #ffffff;}@media (max-width:768px){.navbar.jsx-2280469814 a.jsx-2280469814{font-size:1.4rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmVhdHJpY2UgQS4gQXJ0aHVyXFxEZXNrdG9wXFx3ZWVrM0Fzc2lnbm1lbnRcXHNyY1xcY29tcG9uZW50c1xcbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF1QixBQUdjLEFBWUMsQUFPRSxBQWFrQixBQUtiLFdBcENQLENBWUMsRUFPWSxHQWtCekIsTUFwQ3dDLFNBK0IxQyxPQVp3Qix3QkFsQlIsY0FDQyxTQVVJLE1BVFosT0FDRCxNQUNLLFdBQytCLDRCQWN4QixXQWJwQixPQWVjLFlBQ0MsS0FWZ0IsUUFZaEIsYUFDUSxxQkFDdkIsaUZBYkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxCZWF0cmljZSBBLiBBcnRodXJcXERlc2t0b3BcXHdlZWszQXNzaWdubWVudFxcc3JjXFxjb21wb25lbnRzXFxuYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+SHVsazwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibG9nbyBpcy1hY3RpdmVcIj5NYXZlbDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VmVub208L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgIC5uYXZiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5uYXZiYXIgLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLm5hdmJhciBhIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXIgYS5pcy1hY3RpdmUge1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2YmFyIGEge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG59YH08L3N0eWxlPlxyXG4gICAgICA8L25hdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Beatrice A. Arthur\\\\Desktop\\\\week3Assignment\\\\src\\\\components\\\\navbar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/wallpaper.js":
/*!*************************************!*\
  !*** ./src/components/wallpaper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Beatrice A. Arthur\\Desktop\\week3Assignment\\src\\components\\wallpaper.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Wallpaper() {
  return __jsx("div", {
    className: "jsx-585677780" + " " + "sample-wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 12
    }
  }, __jsx("article", {
    className: "jsx-585677780" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "./img/venom-1.jpg",
    alt: "Wallpaper #1",
    className: "jsx-585677780" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  })), __jsx("article", {
    className: "jsx-585677780" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "./img/hulk-1.jpg",
    alt: "Wallpaper #1",
    className: "jsx-585677780" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  })), __jsx("article", {
    className: "jsx-585677780" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "./img/venom-2.jpg",
    alt: "./img/venom-2.jpg",
    className: "jsx-585677780" + " " + "wallpaper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "585677780",
    __self: this
  }, ".sample-wallpaper.jsx-585677780{width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));gap:4rem;}.wallpaper.jsx-585677780{height:25rem;box-shadow:0px 10px 10px rgba(0,0,0,0.5);}.wallpaper.jsx-585677780>img.jsx-585677780{width:100%;height:100%;object-fit:cover;object-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmVhdHJpY2UgQS4gQXJ0aHVyXFxEZXNrdG9wXFx3ZWVrM0Fzc2lnbm1lbnRcXHNyY1xcY29tcG9uZW50c1xcd2FsbHBhcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUdjLEFBUUUsQUFLRixXQVhFLEFBWUQsRUFMZ0MsVUFNM0IsQ0FaMEMsZ0JBYXBDLGNBTnpCLFNBT0Esa0JBYlcsU0FDWCIsImZpbGUiOiJDOlxcVXNlcnNcXEJlYXRyaWNlIEEuIEFydGh1clxcRGVza3RvcFxcd2VlazNBc3NpZ25tZW50XFxzcmNcXGNvbXBvbmVudHNcXHdhbGxwYXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFdhbGxwYXBlcigpe1xyXG4gICAgcmV0dXJuKDxkaXYgY2xhc3NOYW1lPVwic2FtcGxlLXdhbGxwYXBlclwiPlxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwid2FsbHBhcGVyXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi9pbWcvdmVub20tMS5qcGdcIiBhbHQ9XCJXYWxscGFwZXIgIzFcIiBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIiAvPlxyXG4gICAgPC9hcnRpY2xlPlxyXG5cclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndhbGxwYXBlclwiPlxyXG4gICAgICA8aW1nIHNyYz1cIi4vaW1nL2h1bGstMS5qcGdcIiBhbHQ9XCJXYWxscGFwZXIgIzFcIiBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIiAvPlxyXG4gICAgPC9hcnRpY2xlPlxyXG5cclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndhbGxwYXBlclwiPlxyXG4gICAgICA8aW1nIHNyYz1cIi4vaW1nL3Zlbm9tLTIuanBnXCIgYWx0PVwiLi9pbWcvdmVub20tMi5qcGdcIiBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIiAvPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLnNhbXBsZS13YWxscGFwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xyXG4gIGdhcDogNHJlbTtcclxufVxyXG5cclxuLndhbGxwYXBlciB7XHJcbiAgaGVpZ2h0OiAyNXJlbTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLndhbGxwYXBlciA+IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG59YH1cclxuXHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGl2PilcclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdhbGxwYXBlciJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Beatrice A. Arthur\\\\Desktop\\\\week3Assignment\\\\src\\\\components\\\\wallpaper.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Wallpaper);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
var _jsxFileName = "C:\\Users\\Beatrice A. Arthur\\Desktop\\week3Assignment\\src\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2FsbHBhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIiwiR2xvYmFsSGVhZGVyIiwiTmF2YmFyIiwiV2FsbHBhcGVyIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFD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O0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixPQUFHLEVBQUMsY0FBakM7QUFBQSx1Q0FBMEQsV0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRE8sRUFLUDtBQUFBLHVDQUFtQixXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsT0FBRyxFQUFDLGNBQWhDO0FBQUEsdUNBQXlELFdBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxPLEVBU1A7QUFBQSx1Q0FBbUIsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLE9BQUcsRUFBQyxtQkFBakM7QUFBQSx1Q0FBK0QsV0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVE87QUFBQTtBQUFBO0FBQUEsMnVFQUFQO0FBb0NIOztBQUNjQSx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFFWixTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBT0g7O0FBQ2NBLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDWkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBXYWxscGFwYXIgZnJvbSBcIi4vd2FsbHBhcGVyXCI7XG5cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPk1hdmVsJ3MgRmVhcmxlc3M8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIGJlYXRhZVxuICAgICAgICAgIG1vbGVzdGlhcyBlYXJ1bSBldmVuaWV0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFdhbGxwYXBhcj48L1dhbGxwYXBhcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTIwdmg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cmVtO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEyNHJlbTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwcmVtIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMHJlbSAxMHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDByZW0gNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgIHdpZHRoOiA2MHJlbTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNy4ycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2gtYmFyIHtcbiAgICAgICAgICB3aWR0aDogMzByZW07XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhyZW07XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcblxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2gtYmFyIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xuXG5cbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICBcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxHbG9iYWxIZWFkZXIgLz5cbiAgICAgIDxOYXZiYXI+PC9OYXZiYXI+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgIFxuICAgICAgICAgIFxuXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICk7XG4gICAgXG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5mdW5jdGlvbiBHbG9iYWxIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+VHJpYWw8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2dsb2JhbC5jc3NcIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cbiIsImZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5IdWxrPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsb2dvIGlzLWFjdGl2ZVwiPk1hdmVsPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5WZW5vbTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgLm5hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLm5hdmJhciAuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4ubmF2YmFyIGEge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciBhLmlzLWFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZmZmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXZiYXIgYSB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbn1gfTwvc3R5bGU+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJmdW5jdGlvbiBXYWxscGFwZXIoKXtcclxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT1cInNhbXBsZS13YWxscGFwZXJcIj5cclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndhbGxwYXBlclwiPlxyXG4gICAgICA8aW1nIHNyYz1cIi4vaW1nL3Zlbm9tLTEuanBnXCIgYWx0PVwiV2FsbHBhcGVyICMxXCIgY2xhc3NOYW1lPVwid2FsbHBhcGVyXCIgLz5cclxuICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIj5cclxuICAgICAgPGltZyBzcmM9XCIuL2ltZy9odWxrLTEuanBnXCIgYWx0PVwiV2FsbHBhcGVyICMxXCIgY2xhc3NOYW1lPVwid2FsbHBhcGVyXCIgLz5cclxuICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIj5cclxuICAgICAgPGltZyBzcmM9XCIuL2ltZy92ZW5vbS0yLmpwZ1wiIGFsdD1cIi4vaW1nL3Zlbm9tLTIuanBnXCIgY2xhc3NOYW1lPVwid2FsbHBhcGVyXCIgLz5cclxuICAgIDwvYXJ0aWNsZT5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC5zYW1wbGUtd2FsbHBhcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcclxuICBnYXA6IDRyZW07XHJcbn1cclxuXHJcbi53YWxscGFwZXIge1xyXG4gIGhlaWdodDogMjVyZW07XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi53YWxscGFwZXIgPiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxufWB9XHJcblxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj4pXHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBXYWxscGFwZXIiLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIFxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9