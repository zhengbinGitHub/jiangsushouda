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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/static/modules/editor.js":
/*!***************************************************!*\
  !*** ./resources/assets/static/modules/editor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("layui.define([\"jquery\"], function (exports) {\n  var $ = layui.$;\n  var ue = UE.getEditor('editor');\n  ue.ready(function () {\n    ue.execCommand('serverparam', '_token', $('meta[name=\"csrf_token\"]').attr('content'));\n  });\n  exports('editor', {});\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3N0YXRpYy9tb2R1bGVzL2VkaXRvci5qcz8wMmRjIl0sIm5hbWVzIjpbImxheXVpIiwiZGVmaW5lIiwiZXhwb3J0cyIsIiQiLCJ1ZSIsIlVFIiwiZ2V0RWRpdG9yIiwicmVhZHkiLCJleGVjQ29tbWFuZCIsImF0dHIiXSwibWFwcGluZ3MiOiJBQUFBQSxLQUFLLENBQUNDLE1BQU4sQ0FBYSxDQUFDLFFBQUQsQ0FBYixFQUF3QixVQUFTQyxPQUFULEVBQWlCO0FBQ3JDLE1BQUlDLENBQUMsR0FBR0gsS0FBSyxDQUFDRyxDQUFkO0FBQ0EsTUFBSUMsRUFBRSxHQUFHQyxFQUFFLENBQUNDLFNBQUgsQ0FBYSxRQUFiLENBQVQ7QUFFQUYsSUFBRSxDQUFDRyxLQUFILENBQVMsWUFBVztBQUNoQkgsTUFBRSxDQUFDSSxXQUFILENBQWUsYUFBZixFQUE2QixRQUE3QixFQUFzQ0wsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJNLElBQTdCLENBQWtDLFNBQWxDLENBQXRDO0FBQ0gsR0FGRDtBQUlBUCxTQUFPLENBQUMsUUFBRCxFQUFXLEVBQVgsQ0FBUDtBQUNILENBVEQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL3N0YXRpYy9tb2R1bGVzL2VkaXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxheXVpLmRlZmluZShbXCJqcXVlcnlcIl0sZnVuY3Rpb24oZXhwb3J0cyl7XG4gICAgdmFyICQgPSBsYXl1aS4kO1xuICAgIHZhciB1ZSA9IFVFLmdldEVkaXRvcignZWRpdG9yJyk7XG5cbiAgICB1ZS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgdWUuZXhlY0NvbW1hbmQoJ3NlcnZlcnBhcmFtJywnX3Rva2VuJywkKCdtZXRhW25hbWU9XCJjc3JmX3Rva2VuXCJdJykuYXR0cignY29udGVudCcpKTtcbiAgICB9KTtcblxuICAgIGV4cG9ydHMoJ2VkaXRvcicsIHt9KTtcbn0pOyAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/static/modules/editor.js\n");

/***/ }),

/***/ 5:
/*!*********************************************************!*\
  !*** multi ./resources/assets/static/modules/editor.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /WebServer/jiangsushouda/resources/assets/static/modules/editor.js */"./resources/assets/static/modules/editor.js");


/***/ })

/******/ });