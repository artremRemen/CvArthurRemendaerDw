/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/CanvasAnimation.ts":
/*!***********************************!*\
  !*** ./src/ts/CanvasAnimation.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.CanvasAnimation = void 0;\n\nvar CanvasAnimation =\n/** @class */\nfunction () {\n  function CanvasAnimation(canvas) {\n    this.canvas = canvas;\n    this.ctx = this.canvas.getContext('webgl');\n    this.verifWebGl(); //requestAnimationFrame(this.refresh);\n  }\n\n  CanvasAnimation.prototype.verifWebGl = function () {\n    if (!this.ctx) {\n      console.log(\"Impossible d'initialiser WebGL. Votre navigateur ou votre machine peut ne pas le supporter.\");\n    } else {\n      console.log(\"WebGl initialiser.\");\n    }\n  };\n\n  CanvasAnimation.prototype.refresh = function () {\n    this.ctx.clearColor(0.0, 0.0, 0.0, 1.0);\n    this.ctx.clear(this.ctx.DEPTH_BUFFER_BIT | this.ctx.COLOR_BUFFER_BIT);\n    requestAnimationFrame(this.refresh);\n    return this;\n  };\n\n  return CanvasAnimation;\n}();\n\nexports.CanvasAnimation = CanvasAnimation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUNiQSw4Q0FBNkM7QUFBRUcsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0M7QUFDQUQsdUJBQUEsR0FBMEIsS0FBSyxDQUEvQjs7QUFDQSxJQUFJRSxlQUFlO0FBQUc7QUFBZSxZQUFZO0FBQzdDLFdBQVNBLGVBQVQsQ0FBeUJDLE1BQXpCLEVBQWlDO0FBQzdCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLRCxNQUFMLENBQVlFLFVBQVosQ0FBdUIsT0FBdkIsQ0FBWDtBQUNBLFNBQUtDLFVBQUwsR0FINkIsQ0FJN0I7QUFDSDs7QUFDREosRUFBQUEsZUFBZSxDQUFDSyxTQUFoQixDQUEwQkQsVUFBMUIsR0FBdUMsWUFBWTtBQUMvQyxRQUFJLENBQUMsS0FBS0YsR0FBVixFQUFlO0FBQ1hJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZGQUFaO0FBQ0gsS0FGRCxNQUdLO0FBQ0RELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0g7QUFDSixHQVBEOztBQVFBUCxFQUFBQSxlQUFlLENBQUNLLFNBQWhCLENBQTBCRyxPQUExQixHQUFvQyxZQUFZO0FBQzVDLFNBQUtOLEdBQUwsQ0FBU08sVUFBVCxDQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4QixHQUE5QixFQUFtQyxHQUFuQztBQUNBLFNBQUtQLEdBQUwsQ0FBU1EsS0FBVCxDQUFlLEtBQUtSLEdBQUwsQ0FBU1MsZ0JBQVQsR0FBNEIsS0FBS1QsR0FBTCxDQUFTVSxnQkFBcEQ7QUFDQUMsSUFBQUEscUJBQXFCLENBQUMsS0FBS0wsT0FBTixDQUFyQjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBTEQ7O0FBTUEsU0FBT1IsZUFBUDtBQUNILENBdEJvQyxFQUFyQzs7QUF1QkFGLHVCQUFBLEdBQTBCRSxlQUExQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3NyYy90cy9DYW52YXNBbmltYXRpb24udHM/MjhlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNhbnZhc0FuaW1hdGlvbiA9IHZvaWQgMDtcclxudmFyIENhbnZhc0FuaW1hdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENhbnZhc0FuaW1hdGlvbihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJyk7XHJcbiAgICAgICAgdGhpcy52ZXJpZldlYkdsKCk7XHJcbiAgICAgICAgLy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZWZyZXNoKTtcclxuICAgIH1cclxuICAgIENhbnZhc0FuaW1hdGlvbi5wcm90b3R5cGUudmVyaWZXZWJHbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY3R4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSBkJ2luaXRpYWxpc2VyIFdlYkdMLiBWb3RyZSBuYXZpZ2F0ZXVyIG91IHZvdHJlIG1hY2hpbmUgcGV1dCBuZSBwYXMgbGUgc3VwcG9ydGVyLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2ViR2wgaW5pdGlhbGlzZXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDYW52YXNBbmltYXRpb24ucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyKHRoaXMuY3R4LkRFUFRIX0JVRkZFUl9CSVQgfCB0aGlzLmN0eC5DT0xPUl9CVUZGRVJfQklUKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZWZyZXNoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzQW5pbWF0aW9uO1xyXG59KCkpO1xyXG5leHBvcnRzLkNhbnZhc0FuaW1hdGlvbiA9IENhbnZhc0FuaW1hdGlvbjtcclxuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQ2FudmFzQW5pbWF0aW9uIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInZlcmlmV2ViR2wiLCJwcm90b3R5cGUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaCIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkRFUFRIX0JVRkZFUl9CSVQiLCJDT0xPUl9CVUZGRVJfQklUIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/CanvasAnimation.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/CanvasAnimation.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;