/*!
 * Pellet v0.0.1
 * https://github.com/Rebelizer/pellet
 * 
 * Copyright 2014 Demetrius Johnson
 * Released under the MIT license
 * https://github.com/Rebelizer/pellet/LICENSE
 * 
 * 
 * Date: 2014-09-26T03:23:20.041Z
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [module.id, content, ''];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content);
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/demi/Projects/react-pellet/node_modules/css-loader/index.js!/Users/demi/Projects/react-pellet/node_modules/autoprefixer-loader/index.js!/Users/demi/Projects/react-pellet/node_modules/stylus-loader/index.js!/Users/demi/Projects/vevo-embed/inline-player/components/watch-video/watch-video.styl", function() {
			var newContent = require("!!/Users/demi/Projects/react-pellet/node_modules/css-loader/index.js!/Users/demi/Projects/react-pellet/node_modules/autoprefixer-loader/index.js!/Users/demi/Projects/react-pellet/node_modules/stylus-loader/index.js!/Users/demi/Projects/vevo-embed/inline-player/components/watch-video/watch-video.styl");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	exports.push([module.id, ".watchVideo-component {\n  background: #000;\n  z-index: 10000;\n  position: fixed;\n  bottom: 10px;\n  right: 20px;\n  width: 300px;\n  height: 280px;\n  overflow: hidden;\n}\n.watchVideo-component #vevo-player {\n  width: 300px;\n  height: 200px;\n}\n.watchVideo-component .logo {\n  width: 100px;\n  height: 22px;\n  background: url("+__webpack_require__(21)+") no-repeat center;\n}\n.watchVideo-component .loading {\n  color: #fff;\n  font-size: 28px;\n  text-align: center;\n  line-height: 200px;\n  height: 200px;\n}\n.watchVideo-component p {\n  color: #ccc;\n  font-family: sans-serif;\n  padding: 7px;\n}\n.watchVideo-component p a {\n  text-decoration: underline;\n  color: #6495ed;\n  cursor: pointer;\n}\n.watchVideo-component p a:hover {\n  text-decoration: none;\n}\n", ""]);

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {};
	
	module.exports = function(list) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
		var styles = listToStyles(list);
		addStylesToDom(styles);
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j]));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j]));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			// var sourceMap = item[3];
			var part = {css: css, media: media/*, sourceMap: sourceMap*/};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function addStyle(obj) {
		var styleElement = document.createElement("style");
		var head = document.head || document.getElementsByTagName("head")[0];
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		applyToTag(styleElement, obj);
		return function(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media /*&& newObj.sourceMap === obj.sourceMap*/)
					return;
				applyToTag(styleElement, obj = newObj);
			} else {
				head.removeChild(styleElement);
			}
		};
	};
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		// var sourceMap = obj.sourceMap;
	
		// No browser support
		// if(sourceMap && typeof btoa === "function") {
			// try {
				// css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
			// } catch(e) {}
		// }
		if(media) {
			styleElement.setAttribute("media", media)
		}
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	
	}


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI4OHB4IiBoZWlnaHQ9IjIycHgiIHZpZXdCb3g9IjAgMCA4OCAyMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgODggMjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjRUQxQTNCIiBkPSJNMjAuODA0LDAuNzFjLTMuOTA1LDAtNC42NDksMi4yOTktNS44MTQsMy45NzljMCwwLTMuMTY4LDQuODI1LTQuMzczLDYuNjYyTDguMDE4LDAuNzFoLTYuOTgKCQkJCUw1LjQ0LDE4LjUzM2MwLjkxMiwzLjE4NCwzLjUwNCwyLjk4MSwzLjUwNCwyLjk4MWMxLjc3NSwwLDMuMTA2LTAuOTQxLDQuMzEyLTIuNzIyTDI1LjEzMSwwLjcxCgkJCQlDMjUuMTMxLDAuNzEsMjAuOTc3LDAuNzEsMjAuODA0LDAuNzF6IE02My45NDksMC43MWMtMy45MDUsMC00LjY0OSwyLjI5OS01LjgxNCwzLjk3OWMwLDAtMy4xNjcsNC44MjUtNC4zNzQsNi42NjJMNTEuMTYzLDAuNzEKCQkJCWgtNi45ODFsNC40MDMsMTcuODIzYzAuOTExLDMuMTg0LDMuNTA0LDIuOTgxLDMuNTA0LDIuOTgxYzEuNzc1LDAsMy4xMDUtMC45NDEsNC4zMTItMi43MjJMNjguMjc2LDAuNzEKCQkJCUM2OC4yNzYsMC43MSw2NC4xMjIsMC43MSw2My45NDksMC43MXogTTc3LjE1OSwwLjI2NEM3MC4zMTcsMC4yNjIsNjQuOTQsNS45OTIsNjQuNzI4LDEyLjE3NwoJCQkJYy0wLjE4Nyw1LjQyNiwzLjQ1MSw5LjU2Myw5LjY4OSw5LjU2NGM2Ljg4MSwwLDEyLjI1OC01LjcyOSwxMi40NzEtMTEuOTUyQzg3LjA3Myw0LjQwMSw4My40MzYsMC4yNjUsNzcuMTU5LDAuMjY0egoJCQkJIE03NS4wNjEsMTUuMzljLTIuMDU3LDAtMy40MDUtMS4zNjktMy4zMjctMy41NDZjMC4wODgtMi40NTcsMi4wNjEtNS4yMyw0LjgxOC01LjIzYzIuMDU4LDAsMy40MDUsMS4zNzEsMy4zMjksMy41MTIKCQkJCUM3OS43OTIsMTIuNjE3LDc3LjgxOCwxNS4zOTEsNzUuMDYxLDE1LjM5eiBNMzQuMzE4LDAuMjU5Yy02Ljg0NC0wLjAwMi0xMi4yMTksNS43MjgtMTIuNDMyLDExLjkxMwoJCQkJYy0wLjE4Nyw1LjQyNywzLjQ1Miw5LjU2Myw5LjY4OSw5LjU2NGM0Ljk0NiwwLDkuMTE1LTIuOTYyLDExLjE0OC02LjkzN2wtNy42MDYsMGMtMC44MjUsMC43MDMtMS44MzQsMS4xNDgtMi45NjQsMS4xNDgKCQkJCWMtMS45NTIsMC0zLjMxNi0xLjE3Mi0zLjU4LTMuMDk0bDEzLjA0MSwwLjAwMWMxLjAzMywwLDEuOTk1LTAuMTQ4LDIuMjEyLTEuMjI1YzAuMTIzLTAuNjA3LDAuMTk4LTEuMjIzLDAuMjE5LTEuODQ2CgkJCQlDNDQuMjMyLDQuMzk2LDQwLjU5NCwwLjI2LDM0LjMxOCwwLjI1OXogTTM2LjcwOSw4LjY0NGgtNy4xMzdjMC45My0xLjQ4NiwyLjQxNi0yLjU5Niw0LjIwNS0yLjU5NgoJCQkJYzEuNjIzLDAsMi44MzYsMC44MTMsMy4zNTIsMi4xOEMzNy4yMDMsOC41MTQsMzcuMDIyLDguNjQ0LDM2LjcwOSw4LjY0NHoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ }

/******/ })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTNmMGIwNGIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy93YXRjaC12aWRlby93YXRjaC12aWRlby5zdHlsPzEyYzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy93YXRjaC12aWRlby93YXRjaC12aWRlby5zdHlsIiwid2VicGFjazovLy8vVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8vVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvfi9jc3MtbG9hZGVyL2Nzc1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vdmV2by1oZWFkZXIuc3ZnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ2pCQTtBQUNBLGtEQUFpRCxxQkFBcUIsbUJBQW1CLG9CQUFvQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixrQkFBa0IscUJBQXFCLEdBQUcsc0NBQXNDLGlCQUFpQixrQkFBa0IsR0FBRywrQkFBK0IsaUJBQWlCLGlCQUFpQixrRUFBdUUsR0FBRyxrQ0FBa0MsZ0JBQWdCLG9CQUFvQix1QkFBdUIsdUJBQXVCLGtCQUFrQixHQUFHLDJCQUEyQixnQkFBZ0IsNEJBQTRCLGlCQUFpQixHQUFHLDZCQUE2QiwrQkFBK0IsbUJBQW1CLG9CQUFvQixHQUFHLG1DQUFtQywwQkFBMEIsR0FBRyxVOzs7Ozs7O0FDRDF5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBLG1CQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0EsU0FBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLGtCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQSxpQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQ7QUFDM0QsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNmQSxzQ0FBcUMsNDJFIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOTNmMGIwNGJcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2RlbWkvUHJvamVjdHMvdmV2by1lbWJlZC9pbmxpbmUtcGxheWVyL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vd2F0Y2gtdmlkZW8uc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFttb2R1bGUuaWQsIGNvbnRlbnQsICcnXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3Zldm8tZW1iZWQvaW5saW5lLXBsYXllci9jb21wb25lbnRzL3dhdGNoLXZpZGVvL3dhdGNoLXZpZGVvLnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvZGVtaS9Qcm9qZWN0cy92ZXZvLWVtYmVkL2lubGluZS1wbGF5ZXIvY29tcG9uZW50cy93YXRjaC12aWRlby93YXRjaC12aWRlby5zdHlsXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXTtcblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb21wb25lbnRzL3dhdGNoLXZpZGVvL3dhdGNoLXZpZGVvLnN0eWxcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvY3NzVG9TdHJpbmcuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi53YXRjaFZpZGVvLWNvbXBvbmVudCB7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjgwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ud2F0Y2hWaWRlby1jb21wb25lbnQgI3Zldm8tcGxheWVyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcbi53YXRjaFZpZGVvLWNvbXBvbmVudCAubG9nbyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIrcmVxdWlyZShcIi4vdmV2by1oZWFkZXIuc3ZnXCIpK1wiKSBuby1yZXBlYXQgY2VudGVyO1xcbn1cXG4ud2F0Y2hWaWRlby1jb21wb25lbnQgLmxvYWRpbmcge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG4ud2F0Y2hWaWRlby1jb21wb25lbnQgcCB7XFxuICBjb2xvcjogI2NjYztcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogN3B4O1xcbn1cXG4ud2F0Y2hWaWRlby1jb21wb25lbnQgcCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6ICM2NDk1ZWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi53YXRjaFZpZGVvLWNvbXBvbmVudCBwIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L34vY3NzLWxvYWRlciEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvfi9hdXRvcHJlZml4ZXItbG9hZGVyIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9+L3N0eWx1cy1sb2FkZXIhLi9jb21wb25lbnRzL3dhdGNoLXZpZGVvL3dhdGNoLXZpZGVvLnN0eWxcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0KSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMpO1xyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdC8vIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYS8qLCBzb3VyY2VNYXA6IHNvdXJjZU1hcCovfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaikge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0dmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0YXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaik7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgLyomJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKi8pXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHQvLyB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0Ly8gTm8gYnJvd3NlciBzdXBwb3J0XHJcblx0Ly8gaWYoc291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdC8vIHRyeSB7XHJcblx0XHRcdC8vIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpICsgXCIgKi9cIjtcclxuXHRcdC8vIH0gY2F0Y2goZSkge31cclxuXHQvLyB9XHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxuXHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L34vY3NzLWxvYWRlci9jc3NUb1N0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFM0xqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhkcFpIUm9QU0k0T0hCNElpQm9aV2xuYUhROUlqSXljSGdpSUhacFpYZENiM2c5SWpBZ01DQTRPQ0F5TWlJZ1pXNWhZbXhsTFdKaFkydG5jbTkxYm1ROUltNWxkeUF3SURBZ09EZ2dNaklpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnbzhaejRLQ1R4blBnb0pDVHhuUGdvSkNRazhjR0YwYUNCbWFXeHNQU0lqUlVReFFUTkNJaUJrUFNKTk1qQXVPREEwTERBdU56RmpMVE11T1RBMUxEQXROQzQyTkRrc01pNHlPVGt0TlM0NE1UUXNNeTQ1Tnpsak1Dd3dMVE11TVRZNExEUXVPREkxTFRRdU16Y3pMRFl1TmpZeVREZ3VNREU0TERBdU56Rm9MVFl1T1RnS0NRa0pDVXcxTGpRMExERTRMalV6TTJNd0xqa3hNaXd6TGpFNE5Dd3pMalV3TkN3eUxqazRNU3d6TGpVd05Dd3lMams0TVdNeExqYzNOU3d3TERNdU1UQTJMVEF1T1RReExEUXVNekV5TFRJdU56SXlUREkxTGpFek1Td3dMamN4Q2drSkNRbERNalV1TVRNeExEQXVOekVzTWpBdU9UYzNMREF1TnpFc01qQXVPREEwTERBdU56RjZJRTAyTXk0NU5Ea3NNQzQzTVdNdE15NDVNRFVzTUMwMExqWTBPU3d5TGpJNU9TMDFMamd4TkN3ekxqazNPV013TERBdE15NHhOamNzTkM0NE1qVXROQzR6TnpRc05pNDJOakpNTlRFdU1UWXpMREF1TnpFS0NRa0pDV2d0Tmk0NU9ERnNOQzQwTURNc01UY3VPREl6WXpBdU9URXhMRE11TVRnMExETXVOVEEwTERJdU9UZ3hMRE11TlRBMExESXVPVGd4WXpFdU56YzFMREFzTXk0eE1EVXRNQzQ1TkRFc05DNHpNVEl0TWk0M01qSk1Oamd1TWpjMkxEQXVOekVLQ1FrSkNVTTJPQzR5TnpZc01DNDNNU3cyTkM0eE1qSXNNQzQzTVN3Mk15NDVORGtzTUM0M01Yb2dUVGMzTGpFMU9Td3dMakkyTkVNM01DNHpNVGNzTUM0eU5qSXNOalF1T1RRc05TNDVPVElzTmpRdU56STRMREV5TGpFM053b0pDUWtKWXkwd0xqRTROeXcxTGpReU5pd3pMalExTVN3NUxqVTJNeXc1TGpZNE9TdzVMalUyTkdNMkxqZzRNU3d3TERFeUxqSTFPQzAxTGpjeU9Td3hNaTQwTnpFdE1URXVPVFV5UXpnM0xqQTNNeXcwTGpRd01TdzRNeTQwTXpZc01DNHlOalVzTnpjdU1UVTVMREF1TWpZMGVnb0pDUWtKSUUwM05TNHdOakVzTVRVdU16bGpMVEl1TURVM0xEQXRNeTQwTURVdE1TNHpOamt0TXk0ek1qY3RNeTQxTkRaak1DNHdPRGd0TWk0ME5UY3NNaTR3TmpFdE5TNHlNeXcwTGpneE9DMDFMakl6WXpJdU1EVTRMREFzTXk0ME1EVXNNUzR6TnpFc015NHpNamtzTXk0MU1USUtDUWtKQ1VNM09TNDNPVElzTVRJdU5qRTNMRGMzTGpneE9Dd3hOUzR6T1RFc056VXVNRFl4TERFMUxqTTVlaUJOTXpRdU16RTRMREF1TWpVNVl5MDJMamcwTkMwd0xqQXdNaTB4TWk0eU1Ua3NOUzQzTWpndE1USXVORE15TERFeExqa3hNd29KQ1FrSll5MHdMakU0Tnl3MUxqUXlOeXd6TGpRMU1pdzVMalUyTXl3NUxqWTRPU3c1TGpVMk5HTTBMamswTml3d0xEa3VNVEUxTFRJdU9UWXlMREV4TGpFME9DMDJMamt6TjJ3dE55NDJNRFlzTUdNdE1DNDRNalVzTUM0M01ETXRNUzQ0TXpRc01TNHhORGd0TWk0NU5qUXNNUzR4TkRnS0NRa0pDV010TVM0NU5USXNNQzB6TGpNeE5pMHhMakUzTWkwekxqVTRMVE11TURrMGJERXpMakEwTVN3d0xqQXdNV014TGpBek15d3dMREV1T1RrMUxUQXVNVFE0TERJdU1qRXlMVEV1TWpJMVl6QXVNVEl6TFRBdU5qQTNMREF1TVRrNExURXVNakl6TERBdU1qRTVMVEV1T0RRMkNna0pDUWxETkRRdU1qTXlMRFF1TXprMkxEUXdMalU1TkN3d0xqSTJMRE0wTGpNeE9Dd3dMakkxT1hvZ1RUTTJMamN3T1N3NExqWTBOR2d0Tnk0eE16ZGpNQzQ1TXkweExqUTROaXd5TGpReE5pMHlMalU1Tml3MExqSXdOUzB5TGpVNU5nb0pDUWtKWXpFdU5qSXpMREFzTWk0NE16WXNNQzQ0TVRNc015NHpOVElzTWk0eE9FTXpOeTR5TURNc09DNDFNVFFzTXpjdU1ESXlMRGd1TmpRMExETTJMamN3T1N3NExqWTBOSG9pTHo0S0NRazhMMmMrQ2drOEwyYytDand2Wno0S1BDOXpkbWMrQ2c9PVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vdmV2by1oZWFkZXIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiYXNzZXRzLmpzIn0=