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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	exports.push([module.id, ".watchVideo-component {\n  background: #000;\n  z-index: 10000;\n  position: fixed;\n  bottom: 10px;\n  right: 20px;\n  width: 300px;\n  height: 280px;\n  overflow: hidden;\n}\n.watchVideo-component #vevo-player {\n  width: 300px;\n  height: 200px;\n}\n.watchVideo-component .logo {\n  width: 100px;\n  height: 22px;\n  background: url("+__webpack_require__(21)+") no-repeat center;\n}\n.watchVideo-component .loading {\n  color: #fff;\n  font-size: 28px;\n  text-align: center;\n  line-height: 200px;\n  height: 200px;\n}\n.watchVideo-component p {\n  color: #ccc;\n  font-family: sans-serif;\n  padding: 7px;\n}\n.watchVideo-component p a {\n  text-decoration: underline;\n  color: #6495ed;\n  cursor: pointer;\n}\n.watchVideo-component p a:hover {\n  text-decoration: none;\n}\n", ""]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	
	var React = __webpack_require__(13)
	  , pellet = __webpack_require__(9)
	__webpack_require__(3)
	
	if(false) {
	  var vevoAPI = require('./data-access-layer');
	  var youtube = require('jsx!react-youtube');
	
	  var watchVideoComponent = React.createClass({displayName: 'watchVideoComponent',
	    getInitialState: function() {
	      var self = this;
	      vevoAPI.getPlaylist('f2e58a00-780d-4904-a1cc-0305f29425bf', function(err, data) {
	        self.setState({videos:data.videos});
	        self.showVideo(0)
	      });
	
	      return {video: null, index:-1, loading: true};
	    },
	
	    showVideo: function(index) {
	      if(!this.state.videos[index]) {index = 0;}
	
	      var self = this;
	      vevoAPI.getVideo(this.state.videos[index].isrc, function(err, data) {
	        console.log('video Data', data);
	        self.setState({video:data, index: index, loading:false});
	      });
	    },
	
	    next: function() {
	      this.showVideo(this.state.index + 1);
	    },
	    render: function() {
	      return (
	        React.DOM.div({className: "watchVideo-component"}, 
	          this.state.loading?(React.DOM.div({className: "loading"}, "LOADING...")):youtube({id:"vevo-player", url:'https://www.youtube.com/watch?v='+this.state.video.youTubeId, autoplay:1}), 
	          React.DOM.div({className: "logo"}), 
	          React.DOM.p(null, this.state.video && this.state.video.title, " ", React.DOM.a({onClick: this.next}, "Next Video (VOTE)"))
	        )
	      );
	    }
	  });
	
	  (function () {
	    // need to include react, assets, component
	    var embedPlayer = document.createElement("div");
	    document.body.appendChild(embedPlayer);
	    React.renderComponent(watchVideoComponent(), embedPlayer);
	
	  })();
	
	}
	/*
	(function() {
	  function a(u) {var h = document.head || document.getElementsByTagName('head')[0];var s = document.createElement('script');s.type = 'text/javascript';s.charset = 'utf8';s.async = false;s.src = u;h.appendChild(s);}
	  a('//cdnjs.cloudflare.com/ajax/libs/react/0.11.2/react-with-addons.js');
	  a('//localhost:3000/js/component.js');
	})()
	*/

/***/ },
/* 6 */
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
/* 7 */,
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var /*director = require('director')
	  , */kefir = __webpack_require__(12)
	  , globlePellet;
	
	function pellet() {
	  this.readyFnQue = [];
	  this.initFnQue = [];
	
	  this.emitters = {};
	}
	
	
	pellet.prototype.getEmitter = function(key, namespace) {
	  if(this.emitters[key]) {
	    return this.emitters[key];
	  }
	
	  var stream = this.emitters[key] = kefir.emitter();
	  stream.onEnd(function() {
	    delete this.emitters[key];
	  });
	
	  return stream;
	}
	
	/**
	 * register a function to be called once pellet is ready
	 * @param fn
	 */
	pellet.prototype.onReady = function(fn) {
	  // if all ready running fire immediately with the last know err (or null if no errors)
	  if(typeof(this.readyError) != 'undefined') {
	    setTimeout(function() {
	      fn(module.exports.readyError);
	    }, 1);
	
	    return;
	  }
	
	  this.readyFnQue.push(fn);
	};
	
	/**
	 * register a function needed to complete before pellet is ready
	 * @param fn
	 */
	pellet.prototype.registerInitFn = function(fn) {
	  this.initFnQue.push(fn);
	};
	
	/**
	 * Called after everyone has register their load functions
	 */
	pellet.prototype.startInit = function() {
	  if(typeof(this.readyError) != 'undefined') {
	    throw new Error('Can not reinit because pellet is all ready running.');
	  }
	
	  var cbCount = this.initFnQue.length;
	  function done(err) {
	    if(err) {
	      // console log the error and safe the most recent error
	      console.error('Error init pellet because:', err.message);
	      module.exports.readyError = err;
	    }
	
	    if(--cbCount <= 0) {
	      // if all callback had no error set to null
	      if(!module.exports.readyError) {
	        module.exports.readyError = null;
	      }
	
	      var fn;
	      while(fn = module.exports.readyFnQue.pop()) {
	        fn(module.exports.readyError);
	      }
	    }
	  }
	
	  if(cbCount === 0) {
	    done(null);
	    return;
	  }
	
	  // now call all init fn and wait until all done
	  for(var i in this.initFnQue) {
	    this.initFnQue[i](done);
	  }
	};
	
	// for the server environment define the middleware
	if(true) {
	  pellet.prototype.middleware = function (req, res, next) {
	    var stream = globlePellet.getEmitter('route:change');
	
	    // if no observers skip route
	    if(!stream._active) {
	      next();
	      return;
	    }
	
	    stream.emit({
	      path: req.path,
	      query: req.query,
	      req: req,
	      res: res,
	      next: next
	    });
	  };
	
	  pellet.prototype.renderServerSide = function() {
	    var markup;
	
	    var ourBodyScripts = '<script src="//cdnjs.cloudflare.com/ajax/libs/history.js/1.8/native.history.min.js"></script>'+
	      '<script src="//cdnjs.cloudflare.com/ajax/libs/react/0.11.1/react-with-addons.js"></script>'+
	      '<script src="/js/demo.js"></script>';
	
	    // for bots only return the markup with out react state and bootstrap call
	    if(/googlebot|gurujibot|twitterbot|yandexbot|slurp|msnbot|bingbot|rogerbot|facebookexternalhit/i.test(message.req.headers['user-agent']||'')) {
	      markup = react.renderComponentToStaticMarkup(layout({body:message.component, meta:message.meta, locales:app.i18n.locales, messages:app.i18n.messages}));
	    } else {
	      markup = react.renderComponentToString(layout({body:message.component, meta:message.meta, locales:app.i18n.locales, messages:app.i18n.messages}));
	
	      if(message.id) {
	        ourBodyScripts += '<script>app.bootstrap("'+message.id+'",'+JSON.stringify(message.props)+','+JSON.stringify(message.meta)+');</script>';
	      }
	    }
	
	    ourBodyScripts += '<!-- Google Analytics: change UA-XXXXX-X to be your site\'s ID. -->\n'+
	    '<script>\n'+
	      '(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n'+
	      'function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n'+
	      'e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n'+
	      'e.src=\'//www.google-analytics.com/analytics.js\';\n'+
	      'r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));\n'+
	      'ga(\'create\',\'UA-XXXXX-X\');ga(\'send\',\'pageview\');\n'+
	    '</script>';
	
	    // workaround because react does not support doctype or <!-- -->
	    message.res.status((message.meta && message.meta.status) || 200);
	    message.res.end('<!DOCTYPE html>\n'+
	      '<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->\n'+
	      '<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->\n'+
	      '<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->\n'+
	      '<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->\n'+
	      '<head>'+
	        '<meta charset="utf-8">'+
	        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
	        ((message.meta && message.meta.title) ? '  <title>' + message.meta.title + '</title>' : '') +
	        '<meta name="description" content="">'+
	        '<meta name="viewport" content="width=device-width, initial-scale=1">'+
	        '<script src="//polyfill.io"></script>'+
	        '<script src="/js/demo-assets.js"></script>'+
	      '</head>'+
	      '<body>'+
	        '<!--[if lt IE 7]>\n'+
	        '<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>\n'+
	        '<![endif]-->\n'+
	        '<div id="__APP__">'+
	          markup +
	        '</div>'+
	        ourBodyScripts+
	      '</body>'+
	      '</html>');
	  }
	}
	
	// hack the environment so that we can create a singleton that can be shared
	// between the native nodejs environment and the webpacks container.
	if(false) {
	  globlePellet = new pellet();
	} else {
	  if(global.__pelletSingleton) {
	    globlePellet = global.__pelletSingleton;
	  } else {
	    globlePellet = global.__pelletSingleton = new pellet();
	  }
	}
	
	module.exports = globlePellet;


/***/ },
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Kefir.js v0.2.6
	 *  https://github.com/pozadi/kefir
	 */
	;(function(global){
	  "use strict";
	
	var NOTHING = ['<nothing>'];
	
	function get(map, key, notFound) {
	  if (map && key in map) {
	    return map[key];
	  } else {
	    return notFound;
	  }
	}
	
	function own(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	function createObj(proto) {
	  var F = function() {};
	  F.prototype = proto;
	  return new F();
	}
	
	function extend(target /*, mixin1, mixin2...*/) {
	  var length = arguments.length
	    , i, prop;
	  for (i = 1; i < length; i++) {
	    for (prop in arguments[i]) {
	      target[prop] = arguments[i][prop];
	    }
	  }
	  return target;
	}
	
	function inherit(Child, Parent /*, mixin1, mixin2...*/) {
	  var length = arguments.length
	    , i;
	  Child.prototype = createObj(Parent.prototype);
	  Child.prototype.constructor = Child;
	  for (i = 2; i < length; i++) {
	    extend(Child.prototype, arguments[i]);
	  }
	  return Child;
	}
	
	function agrsToArray(args) {
	  if (args.length === 1 && isArray(args[0])) {
	    return args[0];
	  }
	  return cloneArray(args);
	}
	
	function getFn(fn, context) {
	  if (isFn(fn)) {
	    return fn;
	  } else {
	    if (context == null || !isFn(context[fn])) {
	      throw new Error('Not a function: ' + fn + ' in context: ' + context);
	    } else {
	      return context[fn];
	    }
	  }
	}
	
	function apply(fn, c, a) {
	  var aLength = a ? a.length : 0;
	  if (c == null) {
	    switch (aLength) {
	      case 0:  return fn();
	      case 1:  return fn(a[0]);
	      case 2:  return fn(a[0], a[1]);
	      case 3:  return fn(a[0], a[1], a[2]);
	      case 4:  return fn(a[0], a[1], a[2], a[3]);
	      default: return fn.apply(null, a);
	    }
	  } else {
	    switch (aLength) {
	      case 0:  return fn.call(c);
	      default: return fn.apply(c, a);
	    }
	  }
	}
	
	function bindWithoutContext(fn, a, length) {
	  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	  switch (length) {
	    case 0:
	      switch (a.length) {
	        case 0:  return fn;
	        case 1:  return function() {return fn(a0)}
	        case 2:  return function() {return fn(a0, a1)}
	        case 3:  return function() {return fn(a0, a1, a2)}
	        case 4:  return function() {return fn(a0, a1, a2, a3)}
	        default: return function() {return fn.apply(null, a)}
	      }
	      break;
	    case 1:
	      switch (a.length) {
	        case 0:  return fn;
	        case 1:  return function(b0) {return fn(a0, b0)}
	        case 2:  return function(b0) {return fn(a0, a1, b0)}
	        case 3:  return function(b0) {return fn(a0, a1, a2, b0)}
	        case 4:  return function(b0) {return fn(a0, a1, a2, a3, b0)}
	        default: return function(b0) {return fn.apply(null, concat(a, [b0]))}
	      }
	      break;
	    case 2:
	      switch (a.length) {
	        case 0:  return fn;
	        case 1:  return function(b0, b1) {return fn(a0, b0, b1)}
	        case 2:  return function(b0, b1) {return fn(a0, a1, b0, b1)}
	        case 3:  return function(b0, b1) {return fn(a0, a1, a2, b0, b1)}
	        case 4:  return function(b0, b1) {return fn(a0, a1, a2, a3, b0, b1)}
	        default: return function(b0, b1) {return fn.apply(null, concat(a, [b0, b1]))}
	      }
	      break;
	    default:
	      switch (a.length) {
	        case 0:  return fn;
	        default: return function() {return apply(fn, null, concat(a, arguments))}
	      }
	  }
	}
	
	function bindWithContext(fn, c, a, length) {
	  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	  switch (length) {
	    case 0:
	      switch (a.length) {
	        case 0:  return function() {return fn.call(c)}
	        default: return function() {return fn.apply(c, a)}
	      }
	      break;
	    case 1:
	      switch (a.length) {
	        case 0:  return function(b0) {return fn.call(c, b0)}
	        case 1:  return function(b0) {return fn.call(c, a0, b0)}
	        case 2:  return function(b0) {return fn.call(c, a0, a1, b0)}
	        case 3:  return function(b0) {return fn.call(c, a0, a1, a2, b0)}
	        case 4:  return function(b0) {return fn.call(c, a0, a1, a2, a3, b0)}
	        default: return function(b0) {return fn.apply(c, concat(a, [b0]))}
	      }
	      break;
	    case 2:
	      switch (a.length) {
	        case 0:  return function(b0, b1) {return fn.call(c, b0, b1)}
	        case 1:  return function(b0, b1) {return fn.call(c, a0, b0, b1)}
	        case 2:  return function(b0, b1) {return fn.call(c, a0, a1, b0, b1)}
	        case 3:  return function(b0, b1) {return fn.call(c, a0, a1, a2, b0, b1)}
	        case 4:  return function(b0, b1) {return fn.call(c, a0, a1, a2, a3, b0, b1)}
	        default: return function(b0, b1) {return fn.apply(c, concat(a, [b0, b1]))}
	      }
	      break;
	    default:
	      switch (a.length) {
	        case 0: return function() {return fn.apply(c, arguments)}
	        default: return function() {return fn.apply(c, concat(a, arguments))}
	      }
	  }
	}
	
	function bind(fn, context, args, boundFunctionLength) {
	  if (context == null) {
	    return bindWithoutContext(fn, args, boundFunctionLength);
	  } else {
	    return bindWithContext(fn, context, args, boundFunctionLength);
	  }
	}
	
	function concat(a, b) {
	  var result = new Array(a.length + b.length)
	    , j = 0
	    , length, i;
	  if (a.length === 0) {  return b  }
	  if (b.length === 0) {  return a  }
	  length = a.length;
	  for (i = 0; i < length; i++, j++) {
	    result[j] = a[i];
	  }
	  length = b.length;
	  for (i = 0; i < length; i++, j++) {
	    result[j] = b[i];
	  }
	  return result;
	}
	
	function find(arr, value) {
	  var length = arr.length
	    , i;
	  for (i = 0; i < length; i++) {
	    if (arr[i] === value) {  return i  }
	  }
	  return -1;
	}
	
	function findByPred(arr, pred) {
	  var length = arr.length
	    , i;
	  for (i = 0; i < length; i++) {
	    if (pred(arr[i])) {  return i  }
	  }
	  return -1;
	}
	
	function cloneArray(input) {
	  var length = input.length
	    , result = new Array(length)
	    , i;
	  for (i = 0; i < length; i++) {
	    result[i] = input[i];
	  }
	  return result;
	}
	
	function remove(input, index) {
	  var length = input.length
	    , result, i, j;
	  if (index >= 0 && index < length) {
	    if (length === 1) {
	      return [];
	    } else {
	      result = new Array(length - 1);
	      for (i = 0, j = 0; i < length; i++) {
	        if (i !== index) {
	          result[j] = input[i];
	          j++;
	        }
	      }
	      return result;
	    }
	  } else {
	    return input;
	  }
	}
	
	function removeByPred(input, pred) {
	  return remove(input, findByPred(input, pred));
	}
	
	function map(input, fn) {
	  var length = input.length
	    , result = new Array(length)
	    , i;
	  for (i = 0; i < length; i++) {
	    result[i] = fn(input[i]);
	  }
	  return result;
	}
	
	function forEach(arr, fn) {
	  var length = arr.length
	    , i;
	  for (i = 0; i < length; i++) {  fn(arr[i])  }
	}
	
	function fillArray(arr, value) {
	  var length = arr.length
	    , i;
	  for (i = 0; i < length; i++) {
	    arr[i] = value;
	  }
	}
	
	function contains(arr, value) {
	  return find(arr, value) !== -1;
	}
	
	function rest(arr, start, onEmpty) {
	  if (arr.length > start) {
	    return Array.prototype.slice.call(arr, start);
	  }
	  return onEmpty;
	}
	
	var now = Date.now ?
	  function() { return Date.now() } :
	  function() { return new Date().getTime() };
	
	function isFn(fn) {
	  return typeof fn === 'function';
	}
	
	function isUndefined(x) {
	  return typeof x === 'undefined';
	}
	
	function isArrayLike(xs) {
	  return isArray(xs) || isArguments(xs);
	}
	
	var isArray = Array.isArray || function(xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	}
	
	var isArguments = function(xs) {
	  return Object.prototype.toString.call(xs) === '[object Arguments]';
	}
	
	// For IE
	if (!isArguments(arguments)) {
	  isArguments = function(obj) {
	    return !!(obj && own(obj, 'callee'));
	  }
	}
	
	function isEqualArrays(a, b) {
	  var length, i;
	  if (a == null && b == null) {
	    return true;
	  }
	  if (a == null || b == null) {
	    return false;
	  }
	  if (a.length !== b.length) {
	    return false;
	  }
	  for (i = 0, length = a.length; i < length; i++) {
	    if (a[i] !== b[i]) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function and() {
	  for (var i = 0; i < arguments.length; i++) {
	    if (!arguments[i]) {
	      return arguments[i];
	    }
	  }
	  return arguments[i - 1];
	}
	
	function or() {
	  for (var i = 0; i < arguments.length; i++) {
	    if (arguments[i]) {
	      return arguments[i];
	    }
	  }
	  return arguments[i - 1];
	}
	
	function withInterval(name, mixin) {
	
	  function AnonymousStream(wait, args) {
	    Stream.call(this);
	    this._wait = wait;
	    this._intervalId = null;
	    var $ = this;
	    this._$onTick = function() {  $._onTick()  }
	    this._init(args);
	  }
	
	  inherit(AnonymousStream, Stream, {
	
	    _name: name,
	
	    _init: function(args) {},
	    _free: function() {},
	
	    _onTick: function() {},
	
	    _onActivation: function() {
	      this._intervalId = setInterval(this._$onTick, this._wait);
	    },
	    _onDeactivation: function() {
	      if (this._intervalId !== null) {
	        clearInterval(this._intervalId);
	        this._intervalId = null;
	      }
	    },
	
	    _clear: function() {
	      Stream.prototype._clear.call(this);
	      this._$onTick = null;
	      this._free();
	    }
	
	  }, mixin);
	
	  Kefir[name] = function(wait) {
	    return new AnonymousStream(wait, rest(arguments, 1, []));
	  }
	}
	
	function withOneSource(name, mixin, options) {
	
	
	  options = extend({
	    streamMethod: function(StreamClass, PropertyClass) {
	      return function() {  return new StreamClass(this, arguments)  }
	    },
	    propertyMethod: function(StreamClass, PropertyClass) {
	      return function() {  return new PropertyClass(this, arguments)  }
	    }
	  }, options || {});
	
	
	
	  mixin = extend({
	    _init: function(args) {},
	    _free: function() {},
	
	    _handleValue: function(x, isCurrent) {  this._send('value', x, isCurrent)  },
	    _handleEnd: function(__, isCurrent) {  this._send('end', null, isCurrent)  },
	
	    _onActivationHook: function() {},
	    _onDeactivationHook: function() {},
	
	    _handleAny: function(event) {
	      switch (event.type) {
	        case 'value': this._handleValue(event.value, event.current); break;
	        case 'end': this._handleEnd(event.value, event.current); break;
	      }
	    },
	
	    _onActivation: function() {
	      this._onActivationHook();
	      this._source.onAny([this._handleAny, this]);
	    },
	    _onDeactivation: function() {
	      this._onDeactivationHook();
	      this._source.offAny([this._handleAny, this]);
	    }
	  }, mixin || {});
	
	
	
	  function buildClass(BaseClass) {
	    function AnonymousObservable(source, args) {
	      BaseClass.call(this);
	      this._source = source;
	      this._name = source._name + '.' + name;
	      this._init(args);
	    }
	
	    inherit(AnonymousObservable, BaseClass, {
	      _clear: function() {
	        BaseClass.prototype._clear.call(this);
	        this._source = null;
	        this._free();
	      }
	    }, mixin);
	
	    return AnonymousObservable;
	  }
	
	
	  var AnonymousStream = buildClass(Stream);
	  var AnonymousProperty = buildClass(Property);
	
	  if (options.streamMethod) {
	    Stream.prototype[name] = options.streamMethod(AnonymousStream, AnonymousProperty);
	  }
	
	  if (options.propertyMethod) {
	    Property.prototype[name] = options.propertyMethod(AnonymousStream, AnonymousProperty);
	  }
	
	}
	
	
	
	var Kefir = {};
	
	
	
	
	// Fn
	
	function normFnMeta(fnMeta) {
	  if (fnMeta instanceof _Fn) {
	    return fnMeta;
	  } else {
	    if (isFn(fnMeta)) {
	      return {
	        fn: fnMeta,
	        context: null,
	        args: []
	      };
	    } else {
	      if (isArrayLike(fnMeta)) {
	        return {
	          fn: getFn(fnMeta[0], fnMeta[1]),
	          context: (fnMeta[1] == null ? null : fnMeta[1]),
	          args: rest(fnMeta, 2, [])
	        };
	      } else {
	        throw new Error('Object isn\'t a function, and can\'t be converted to it: ' + fnMeta);
	      }
	    }
	  }
	}
	
	function applyFnMeta(fnMeta, args) {
	  fnMeta = normFnMeta(fnMeta);
	  return apply(fnMeta.fn, fnMeta.context, concat(fnMeta.args, args));
	}
	
	function _Fn(fnMeta, length) {
	  this.context = fnMeta.context;
	  this.fn = fnMeta.fn;
	  this.args = fnMeta.args;
	  this.invoke = bind(this.fn, this.context, this.args, length);
	}
	
	_Fn.prototype.apply = function(args) {
	  return apply(this.invoke, null, args);
	}
	
	_Fn.prototype.applyWithContext = function(context, args) {
	  if (this.context === null) {
	    return apply(this.fn, context, concat(this.args, args));
	  } else {
	    return this.apply(args);
	  }
	}
	
	function Fn(fnMeta, length) {
	  if (fnMeta instanceof _Fn) {
	    return fnMeta;
	  } else {
	    return new _Fn(normFnMeta(fnMeta), length == null ? 100 : length);
	  }
	}
	
	Fn.isEqual = function(a, b) {
	  if (a === b) {
	    return true;
	  }
	  a = Fn(a, null, true);
	  b = Fn(b, null, true);
	  return a.fn === b.fn &&
	    a.context === b.context &&
	    isEqualArrays(a.args, b.args);
	}
	
	Kefir.Fn = Fn;
	
	
	
	
	
	// Subscribers
	
	function Subscribers() {
	  this._fns = [];
	}
	
	extend(Subscribers, {
	  callOne: function(fn, event) {
	    if (fn.type === 'any') {
	      fn.invoke(event);
	    } else if (fn.type === event.type) {
	      if (fn.type === 'value') {
	        fn.invoke(event.value);
	      } else {
	        fn.invoke();
	      }
	    }
	  },
	  callOnce: function(type, fnMeta, event) {
	    if (type === 'any') {
	      applyFnMeta(fnMeta, [event]);
	    } else if (type === event.type) {
	      if (type === 'value') {
	        applyFnMeta(fnMeta, [event.value]);
	      } else {
	        applyFnMeta(fnMeta, []);
	      }
	    }
	  }
	});
	
	extend(Subscribers.prototype, {
	  add: function(type, fn) {
	    fn = Fn(fn, type === 'end' ? 0 : 1);
	    fn.type = type;
	    this._fns = concat(this._fns, [fn]);
	  },
	  remove: function(type, fn) {
	    fn = Fn(fn);
	    this._fns = removeByPred(this._fns, function(x) {
	      return x.type === type && Fn.isEqual(x, fn);
	    });
	  },
	  callAll: function(event) {
	    var fns = this._fns;
	    for (var i = 0; i < fns.length; i++) {
	      Subscribers.callOne(fns[i], event);
	    }
	  },
	  isEmpty: function() {
	    return this._fns.length === 0;
	  }
	});
	
	
	
	
	
	// Events
	
	function Event(type, value, current) {
	  return {type: type, value: value, current: !!current};
	}
	
	var CURRENT_END = Event('end', undefined, true);
	
	
	
	
	
	// Observable
	
	function Observable() {
	  this._subscribers = new Subscribers();
	  this._active = false;
	  this._alive = true;
	}
	Kefir.Observable = Observable;
	
	extend(Observable.prototype, {
	
	  _name: 'observable',
	
	  _onActivation: function() {},
	  _onDeactivation: function() {},
	
	  _setActive: function(active) {
	    if (this._active !== active) {
	      this._active = active;
	      if (active) {
	        this._onActivation();
	      } else {
	        this._onDeactivation();
	      }
	    }
	  },
	
	  _clear: function() {
	    this._setActive(false);
	    this._alive = false;
	    this._subscribers = null;
	  },
	
	  _send: function(type, x, isCurrent) {
	    if (this._alive) {
	      this._subscribers.callAll(Event(type, x, isCurrent));
	      if (type === 'end') {  this._clear()  }
	    }
	  },
	
	  on: function(type, fn) {
	    if (this._alive) {
	      this._subscribers.add(type, fn);
	      this._setActive(true);
	    } else {
	      Subscribers.callOnce(type, fn, CURRENT_END);
	    }
	    return this;
	  },
	
	  off: function(type, fn) {
	    if (this._alive) {
	      this._subscribers.remove(type, fn);
	      if (this._subscribers.isEmpty()) {
	        this._setActive(false);
	      }
	    }
	    return this;
	  },
	
	  onValue:  function(fn) {  return this.on('value', fn)   },
	  onEnd:    function(fn) {  return this.on('end', fn)     },
	  onAny:    function(fn) {  return this.on('any', fn)     },
	
	  offValue: function(fn) {  return this.off('value', fn)  },
	  offEnd:   function(fn) {  return this.off('end', fn)    },
	  offAny:   function(fn) {  return this.off('any', fn)    }
	
	});
	
	
	// extend() can't handle `toString` in IE8
	Observable.prototype.toString = function() {  return '[' + this._name + ']'  };
	
	
	
	
	
	
	
	
	
	// Stream
	
	function Stream() {
	  Observable.call(this);
	}
	Kefir.Stream = Stream;
	
	inherit(Stream, Observable, {
	
	  _name: 'stream'
	
	});
	
	
	
	
	
	
	
	// Property
	
	function Property() {
	  Observable.call(this);
	  this._current = NOTHING;
	}
	Kefir.Property = Property;
	
	inherit(Property, Observable, {
	
	  _name: 'property',
	
	  _send: function(type, x, isCurrent) {
	    if (this._alive) {
	      if (!isCurrent) {
	        this._subscribers.callAll(Event(type, x));
	      }
	      if (type === 'value') {  this._current = x  }
	      if (type === 'end') {  this._clear()  }
	    }
	  },
	
	  on: function(type, fn) {
	    if (this._alive) {
	      this._subscribers.add(type, fn);
	      this._setActive(true);
	    }
	    if (this._current !== NOTHING) {
	      Subscribers.callOnce(type, fn, Event('value', this._current, true));
	    }
	    if (!this._alive) {
	      Subscribers.callOnce(type, fn, CURRENT_END);
	    }
	    return this;
	  }
	
	});
	
	
	
	
	
	
	// Log
	
	function logCb(name, event) {
	  var typeStr = '<' + event.type + (event.current ? ':current' : '') + '>';
	  if (event.type === 'value') {
	    console.log(name, typeStr, event.value);
	  } else {
	    console.log(name, typeStr);
	  }
	}
	
	Observable.prototype.log = function(name) {
	  this.onAny([logCb, null, name || this.toString()]);
	  return this;
	}
	
	Observable.prototype.offLog = function(name) {
	  this.offAny([logCb, null, name || this.toString()]);
	  return this;
	}
	
	
	
	// Kefir.withInterval()
	
	withInterval('withInterval', {
	  _init: function(args) {
	    this._fn = Fn(args[0], 1);
	    var $ = this;
	    this._emitter = {
	      emit: function(x) {  $._send('value', x)  },
	      end: function() {  $._send('end')  }
	    }
	  },
	  _free: function() {
	    this._fn = null;
	    this._emitter = null;
	  },
	  _onTick: function() {
	    this._fn.invoke(this._emitter);
	  }
	});
	
	
	
	
	
	// Kefir.fromPoll()
	
	withInterval('fromPoll', {
	  _init: function(args) {
	    this._fn = Fn(args[0], 0);
	  },
	  _free: function() {
	    this._fn = null;
	  },
	  _onTick: function() {
	    this._send('value', this._fn.invoke());
	  }
	});
	
	
	
	
	
	// Kefir.interval()
	
	withInterval('interval', {
	  _init: function(args) {
	    this._x = args[0];
	  },
	  _free: function() {
	    this._x = null;
	  },
	  _onTick: function() {
	    this._send('value', this._x);
	  }
	});
	
	
	
	
	// Kefir.sequentially()
	
	withInterval('sequentially', {
	  _init: function(args) {
	    this._xs = cloneArray(args[0]);
	    if (this._xs.length === 0) {
	      this._send('end')
	    }
	  },
	  _free: function() {
	    this._xs = null;
	  },
	  _onTick: function() {
	    switch (this._xs.length) {
	      case 1:
	        this._send('value', this._xs[0]);
	        this._send('end');
	        break;
	      default:
	        this._send('value', this._xs.shift());
	    }
	  }
	});
	
	
	
	
	// Kefir.repeatedly()
	
	withInterval('repeatedly', {
	  _init: function(args) {
	    this._xs = cloneArray(args[0]);
	    this._i = -1;
	  },
	  _onTick: function() {
	    if (this._xs.length > 0) {
	      this._i = (this._i + 1) % this._xs.length;
	      this._send('value', this._xs[this._i]);
	    }
	  }
	});
	
	
	
	
	
	// Kefir.later()
	
	withInterval('later', {
	  _init: function(args) {
	    this._x = args[0];
	  },
	  _free: function() {
	    this._x = null;
	  },
	  _onTick: function() {
	    this._send('value', this._x);
	    this._send('end');
	  }
	});
	
	function _AbstractPool(options) {
	  Stream.call(this);
	
	  this._queueLim = get(options, 'queueLim', 0);    // -1...∞
	  this._concurLim = get(options, 'concurLim', -1); // -1, 1...∞
	  this._drop = get(options, 'drop', 'new');        // old, new
	  if (this._concurLim === 0) {
	    throw new Error('options.concurLim can\'t be 0');
	  }
	
	  this._queue = [];
	  this._curSources = [];
	  this._activating = false;
	}
	
	inherit(_AbstractPool, Stream, {
	
	  _name: 'abstractPool',
	
	  _add: function(obs) {
	    if (this._concurLim === -1 || this._curSources.length < this._concurLim) {
	      this._addToCur(obs);
	    } else {
	      if (this._queueLim === -1 || this._queue.length < this._queueLim) {
	        this._addToQueue(obs);
	      } else if (this._drop === 'old') {
	        this._removeOldest();
	        this._add(obs);
	      }
	    }
	  },
	  _addAll: function(obss) {
	    var $ = this;
	    forEach(obss, function(obs) {  $._add(obs)  });
	  },
	  _remove: function(obs) {
	    if (this._removeCur(obs) === -1) {
	      this._removeQueue(obs);
	    }
	  },
	
	  _addToQueue: function(obs) {
	    this._queue = concat(this._queue, [obs]);
	  },
	  _addToCur: function(obs) {
	    this._curSources = concat(this._curSources, [obs]);
	    if (this._active) {  this._sub(obs)  }
	  },
	  _sub: function(obs) {
	    obs.onAny([this._handleSubAny, this]);
	    obs.onEnd([this._removeCur, this, obs]);
	  },
	  _unsub: function(obs) {
	    obs.offAny([this._handleSubAny, this]);
	    obs.offEnd([this._removeCur, this, obs]);
	  },
	  _handleSubAny: function(event) {
	    if (event.type === 'value') {
	      this._send('value', event.value, event.current && this._activating);
	    }
	  },
	
	  _removeQueue: function(obs) {
	    var index = find(this._queue, obs);
	    this._queue = remove(this._queue, index);
	    return index;
	  },
	  _removeCur: function(obs) {
	    if (this._active) {  this._unsub(obs)  }
	    var index = find(this._curSources, obs);
	    this._curSources = remove(this._curSources, index);
	    if (index !== -1) {
	      if (this._queue.length !== 0) {
	        this._pullQueue();
	      } else if (this._curSources.length === 0) {
	        this._onEmpty();
	      }
	    }
	    return index;
	  },
	  _removeOldest: function() {
	    this._removeCur(this._curSources[0]);
	  },
	
	  _pullQueue: function() {
	    if (this._queue.length !== 0) {
	      this._queue = cloneArray(this._queue);
	      this._addToCur(this._queue.shift());
	    }
	  },
	
	  _onActivation: function() {
	    var sources = this._curSources
	      , i;
	    this._activating = true;
	    for (i = 0; i < sources.length; i++) {  this._sub(sources[i])  }
	    this._activating = false;
	  },
	  _onDeactivation: function() {
	    var sources = this._curSources
	      , i;
	    for (i = 0; i < sources.length; i++) {  this._unsub(sources[i])  }
	  },
	
	  _isEmpty: function() {  return this._curSources.length === 0  },
	  _onEmpty: function() {},
	
	  _clear: function() {
	    Stream.prototype._clear.call(this);
	    this._queue = null;
	    this._curSources = null;
	  }
	
	});
	
	
	
	
	
	// .merge()
	
	var MergeLike = {
	  _onEmpty: function() {
	    if (this._initialised) {  this._send('end', null, this._activating)  }
	  }
	};
	
	function Merge(sources) {
	  _AbstractPool.call(this);
	  if (sources.length === 0) {  this._send('end')  } else {  this._addAll(sources)  }
	  this._initialised = true;
	}
	
	inherit(Merge, _AbstractPool, extend({_name: 'merge'}, MergeLike));
	
	Kefir.merge = function() {
	  return new Merge(agrsToArray(arguments));
	}
	
	Observable.prototype.merge = function(other) {
	  return Kefir.merge([this, other]);
	}
	
	
	
	
	// .concat()
	
	function Concat(sources) {
	  _AbstractPool.call(this, {concurLim: 1, queueLim: -1});
	  if (sources.length === 0) {  this._send('end')  } else {  this._addAll(sources)  }
	  this._initialised = true;
	}
	
	inherit(Concat, _AbstractPool, extend({_name: 'concat'}, MergeLike));
	
	Kefir.concat = function() {
	  return new Concat(agrsToArray(arguments));
	}
	
	Observable.prototype.concat = function(other) {
	  return Kefir.concat([this, other]);
	}
	
	
	
	
	
	
	// .pool()
	
	function Pool() {
	  _AbstractPool.call(this);
	}
	
	inherit(Pool, _AbstractPool, {
	
	  _name: 'pool',
	
	  add: function(obs) {
	    this._add(obs);
	    return this;
	  },
	  remove: function(obs) {
	    this._remove(obs);
	    return this;
	  }
	
	});
	
	Kefir.pool = function() {
	  return new Pool();
	}
	
	
	
	
	
	// .flatMap()
	
	function FlatMap(source, fn, options) {
	  _AbstractPool.call(this, options);
	  this._source = source;
	  this._fn = fn ? Fn(fn, 1) : null;
	  this._mainEnded = false;
	  this._lastCurrent = null;
	}
	
	inherit(FlatMap, _AbstractPool, {
	
	  _onActivation: function() {
	    _AbstractPool.prototype._onActivation.call(this);
	    this._activating = true;
	    this._source.onAny([this._handleMainSource, this]);
	    this._activating = false;
	  },
	  _onDeactivation: function() {
	    _AbstractPool.prototype._onDeactivation.call(this);
	    this._source.offAny([this._handleMainSource, this]);
	  },
	
	  _handleMainSource: function(event) {
	    if (event.type === 'value') {
	      if (!event.current || this._lastCurrent !== event.value) {
	        this._add(this._fn ? this._fn.invoke(event.value) : event.value);
	      }
	      this._lastCurrent = event.value;
	    } else {
	      if (this._isEmpty()) {
	        this._send('end', null, event.current);
	      } else {
	        this._mainEnded = true;
	      }
	    }
	  },
	
	  _onEmpty: function() {
	    if (this._mainEnded) {  this._send('end')  }
	  },
	
	  _clear: function() {
	    _AbstractPool.prototype._clear.call(this);
	    this._source = null;
	    this._lastCurrent = null;
	  }
	
	});
	
	Observable.prototype.flatMap = function(fn) {
	  return new FlatMap(this, fn)
	    .setName(this, 'flatMap');
	}
	
	Observable.prototype.flatMapLatest = function(fn) {
	  return new FlatMap(this, fn, {concurLim: 1, drop: 'old'})
	    .setName(this, 'flatMapLatest');
	}
	
	Observable.prototype.flatMapFirst = function(fn) {
	  return new FlatMap(this, fn, {concurLim: 1})
	    .setName(this, 'flatMapFirst');
	}
	
	Observable.prototype.flatMapConcat = function(fn) {
	  return new FlatMap(this, fn, {queueLim: -1, concurLim: 1})
	    .setName(this, 'flatMapConcat');
	}
	
	Observable.prototype.flatMapWithConcurrencyLimit = function(fn, limit) {
	  var result;
	  if (limit === 0) {
	    result = Kefir.never();
	  } else {
	    if (limit < 0) {  limit = -1  }
	    result = new FlatMap(this, fn, {queueLim: -1, concurLim: limit});
	  }
	  return result.setName(this, 'flatMapWithConcurrencyLimit');
	}
	
	
	
	
	
	// .sampledBy()
	
	function SampledBy(passive, active, combinator) {
	  Stream.call(this);
	  if (active.length === 0) {
	    this._send('end');
	  } else {
	    this._passiveCount = passive.length;
	    this._combinator = combinator ? Fn(combinator) : null;
	    this._sources = concat(passive, active);
	    this._aliveCount = 0;
	    this._currents = new Array(this._sources.length);
	    fillArray(this._currents, NOTHING);
	    this._activating = false;
	    this._emitAfterActivation = false;
	    this._endAfterActivation = false;
	  }
	}
	
	inherit(SampledBy, Stream, {
	
	  _name: 'sampledBy',
	
	  _onActivation: function() {
	    var length = this._sources.length,
	        i;
	    this._aliveCount = length - this._passiveCount;
	    this._activating = true;
	    for (i = 0; i < length; i++) {
	      this._sources[i].onAny([this._handleAny, this, i]);
	    }
	    this._activating = false;
	    if (this._emitAfterActivation) {
	      this._emitAfterActivation = false;
	      this._emitIfFull(true);
	    }
	    if (this._endAfterActivation) {
	      this._send('end', null, true);
	    }
	  },
	
	  _onDeactivation: function() {
	    var length = this._sources.length,
	        i;
	    for (i = 0; i < length; i++) {
	      this._sources[i].offAny([this._handleAny, this, i]);
	    }
	  },
	
	  _emitIfFull: function(isCurrent) {
	    if (!contains(this._currents, NOTHING)) {
	      var combined = cloneArray(this._currents);
	      if (this._combinator) {
	        combined = this._combinator.apply(this._currents);
	      }
	      this._send('value', combined, isCurrent);
	    }
	  },
	
	  _handleAny: function(i, event) {
	    if (event.type === 'value') {
	      this._currents[i] = event.value;
	      if (i >= this._passiveCount) {
	        if (this._activating) {
	          this._emitAfterActivation = true;
	        } else {
	          this._emitIfFull(event.current);
	        }
	      }
	    } else {
	      if (i >= this._passiveCount) {
	        this._aliveCount--;
	        if (this._aliveCount === 0) {
	          if (this._activating) {
	            this._endAfterActivation = true;
	          } else {
	            this._send('end', null, event.current);
	          }
	        }
	      }
	    }
	  },
	
	  _clear: function() {
	    Stream.prototype._clear.call(this);
	    this._sources = null;
	    this._currents = null;
	  }
	
	});
	
	Kefir.sampledBy = function(passive, active, combinator) {
	  return new SampledBy(passive, active, combinator);
	}
	
	Observable.prototype.sampledBy = function(other, combinator) {
	  return Kefir.sampledBy([this], [other], combinator);
	}
	
	
	
	
	// .combine()
	
	Kefir.combine = function(sources, combinator) {
	  var result = new SampledBy([], sources, combinator);
	  result._name = 'combine';
	  return result;
	}
	
	Observable.prototype.combine = function(other, combinator) {
	  return Kefir.combine([this, other], combinator);
	}
	
	function produceStream(StreamClass, PropertyClass) {
	  return function() {  return new StreamClass(this, arguments)  }
	}
	function produceProperty(StreamClass, PropertyClass) {
	  return function() {  return new PropertyClass(this, arguments)  }
	}
	
	
	
	// .toProperty()
	
	withOneSource('toProperty', {
	  _init: function(args) {
	    if (args.length > 0) {
	      this._send('value', args[0]);
	    }
	  }
	}, {propertyMethod: null, streamMethod: produceProperty});
	
	
	
	
	// .changes()
	
	withOneSource('changes', {
	  _handleValue: function(x, isCurrent) {
	    if (!isCurrent) {
	      this._send('value', x);
	    }
	  }
	}, {streamMethod: null, propertyMethod: produceStream});
	
	
	
	
	// .withHandler()
	
	withOneSource('withHandler', {
	  _init: function(args) {
	    this._handler = Fn(args[0], 2);
	    this._forcedCurrent = false;
	    var $ = this;
	    this._emitter = {
	      emit: function(x) {  $._send('value', x, $._forcedCurrent)  },
	      end: function() {  $._send('end', null, $._forcedCurrent)  }
	    }
	  },
	  _free: function() {
	    this._handler = null;
	    this._emitter = null;
	  },
	  _handleAny: function(event) {
	    this._forcedCurrent = event.current;
	    this._handler.invoke(this._emitter, event);
	    this._forcedCurrent = false;
	  }
	});
	
	
	
	
	var withFnArgMixin = {
	  _init: function(args) {  this._fn = Fn(args[0], 1)  },
	  _free: function() {  this._fn = null  }
	};
	
	
	// .map(fn)
	
	withOneSource('map', extend({
	  _handleValue: function(x, isCurrent) {
	    this._send('value', this._fn.invoke(x), isCurrent);
	  }
	}, withFnArgMixin));
	
	
	
	
	
	// .filter(fn)
	
	withOneSource('filter', extend({
	  _handleValue: function(x, isCurrent) {
	    if (this._fn.invoke(x)) {
	      this._send('value', x, isCurrent);
	    }
	  }
	}, withFnArgMixin));
	
	
	
	
	
	// .takeWhile(fn)
	
	withOneSource('takeWhile', extend({
	  _handleValue: function(x, isCurrent) {
	    if (this._fn.invoke(x)) {
	      this._send('value', x, isCurrent);
	    } else {
	      this._send('end', null, isCurrent);
	    }
	  }
	}, withFnArgMixin));
	
	
	
	
	
	// .take(n)
	
	withOneSource('take', {
	  _init: function(args) {
	    this._n = args[0];
	    if (this._n <= 0) {
	      this._send('end');
	    }
	  },
	  _handleValue: function(x, isCurrent) {
	    this._n--;
	    this._send('value', x, isCurrent);
	    if (this._n === 0) {
	      this._send('end');
	    }
	  }
	});
	
	
	
	
	
	// .skip(n)
	
	withOneSource('skip', {
	  _init: function(args) {
	    this._n = args[0] < 0 ? 0 : args[0];
	  },
	  _handleValue: function(x, isCurrent) {
	    if (this._n === 0) {
	      this._send('value', x, isCurrent);
	    } else {
	      this._n--;
	    }
	  }
	});
	
	
	
	
	// .skipDuplicates([fn])
	
	withOneSource('skipDuplicates', {
	  _init: function(args) {
	    this._fn = args[0] && Fn(args[0], 2);
	    this._prev = NOTHING;
	  },
	  _free: function() {
	    this._fn = null;
	    this._prev = null;
	  },
	  _isEqual: function(a, b) {
	    return this._fn ? this._fn.invoke(a, b) : a === b;
	  },
	  _handleValue: function(x, isCurrent) {
	    if (this._prev === NOTHING || !this._isEqual(this._prev, x)) {
	      this._send('value', x, isCurrent);
	      this._prev = x;
	    }
	  }
	});
	
	
	
	
	
	// .skipWhile(fn)
	
	withOneSource('skipWhile', {
	  _init: function(args) {
	    this._fn = Fn(args[0], 1);
	    this._skip = true;
	  },
	  _free: function() {
	    this._fn = null;
	  },
	  _handleValue: function(x, isCurrent) {
	    if (!this._skip) {
	      this._send('value', x, isCurrent);
	      return;
	    }
	    if (!this._fn.invoke(x)) {
	      this._skip = false;
	      this._fn = null;
	      this._send('value', x, isCurrent);
	    }
	  }
	});
	
	
	
	
	
	// .diff(seed, fn)
	
	withOneSource('diff', {
	  _init: function(args) {
	    this._prev = args[0];
	    this._fn = Fn(args[1], 2);
	  },
	  _free: function() {
	    this._prev = null;
	    this._fn = null;
	  },
	  _handleValue: function(x, isCurrent) {
	    this._send('value', this._fn.invoke(this._prev, x), isCurrent);
	    this._prev = x;
	  }
	});
	
	
	
	
	
	// .scan(seed, fn)
	
	withOneSource('scan', {
	  _init: function(args) {
	    this._send('value', args[0], true);
	    this._fn = Fn(args[1], 2);
	  },
	  _free: function() {
	    this._fn = null;
	  },
	  _handleValue: function(x, isCurrent) {
	    this._send('value', this._fn.invoke(this._current, x), isCurrent);
	  }
	}, {streamMethod: produceProperty});
	
	
	
	
	
	// .reduce(seed, fn)
	
	withOneSource('reduce', {
	  _init: function(args) {
	    this._result = args[0];
	    this._fn = Fn(args[1], 2);
	  },
	  _free: function(){
	    this._fn = null;
	    this._result = null;
	  },
	  _handleValue: function(x) {
	    this._result = this._fn.invoke(this._result, x);
	  },
	  _handleEnd: function(__, isCurrent) {
	    this._send('value', this._result, isCurrent);
	    this._send('end', null, isCurrent);
	  }
	});
	
	
	
	
	
	// .debounce(wait, {immediate})
	
	withOneSource('debounce', {
	  _init: function(args) {
	    this._wait = Math.max(0, args[0]);
	    this._immediate = get(args[1], 'immediate', false);
	    this._lastAttempt = 0;
	    this._timeoutId = null;
	    this._laterValue = null;
	    this._endLater = false;
	    var $ = this;
	    this._$later = function() {  $._later()  };
	  },
	  _free: function() {
	    this._laterValue = null;
	    this._$later = null;
	  },
	  _handleValue: function(x, isCurrent) {
	    if (isCurrent) {
	      this._send('value', x, isCurrent);
	    } else {
	      this._lastAttempt = now();
	      if (this._immediate && !this._timeoutId) {
	        this._send('value', x);
	      }
	      if (!this._timeoutId) {
	        this._timeoutId = setTimeout(this._$later, this._wait);
	      }
	      if (!this._immediate) {
	        this._laterValue = x;
	      }
	    }
	  },
	  _handleEnd: function(__, isCurrent) {
	    if (isCurrent) {
	      this._send('end', null, isCurrent);
	    } else {
	      if (this._timeoutId && !this._immediate) {
	        this._endLater = true;
	      } else {
	        this._send('end');
	      }
	    }
	  },
	  _later: function() {
	    var last = now() - this._lastAttempt;
	    if (last < this._wait && last >= 0) {
	      this._timeoutId = setTimeout(this._$later, this._wait - last);
	    } else {
	      this._timeoutId = null;
	      if (!this._immediate) {
	        this._send('value', this._laterValue);
	        this._laterValue = null;
	      }
	      if (this._endLater) {
	        this._send('end');
	      }
	    }
	  }
	});
	
	
	
	
	
	// .throttle(wait, {leading, trailing})
	
	withOneSource('throttle', {
	  _init: function(args) {
	    this._wait = Math.max(0, args[0]);
	    this._leading = get(args[1], 'leading', true);
	    this._trailing = get(args[1], 'trailing', true);
	    this._trailingValue = null;
	    this._timeoutId = null;
	    this._endLater = false;
	    this._lastCallTime = 0;
	    var $ = this;
	    this._$trailingCall = function() {  $._trailingCall()  };
	  },
	  _free: function() {
	    this._trailingValue = null;
	    this._$trailingCall = null;
	  },
	  _handleValue: function(x, isCurrent) {
	    if (isCurrent) {
	      this._send('value', x, isCurrent);
	    } else {
	      var curTime = now();
	      if (this._lastCallTime === 0 && !this._leading) {
	        this._lastCallTime = curTime;
	      }
	      var remaining = this._wait - (curTime - this._lastCallTime);
	      if (remaining <= 0) {
	        this._cancelTraling();
	        this._lastCallTime = curTime;
	        this._send('value', x);
	      } else if (this._trailing) {
	        this._cancelTraling();
	        this._trailingValue = x;
	        this._timeoutId = setTimeout(this._$trailingCall, remaining);
	      }
	    }
	  },
	  _handleEnd: function(__, isCurrent) {
	    if (isCurrent) {
	      this._send('end', null, isCurrent);
	    } else {
	      if (this._timeoutId) {
	        this._endLater = true;
	      } else {
	        this._send('end');
	      }
	    }
	  },
	  _cancelTraling: function() {
	    if (this._timeoutId !== null) {
	      clearTimeout(this._timeoutId);
	      this._timeoutId = null;
	    }
	  },
	  _trailingCall: function() {
	    this._send('value', this._trailingValue);
	    this._timeoutId = null;
	    this._trailingValue = null;
	    this._lastCallTime = !this._leading ? 0 : now();
	    if (this._endLater) {
	      this._send('end');
	    }
	  }
	});
	
	
	
	
	
	// .delay()
	
	withOneSource('delay', {
	  _init: function(args) {
	    this._wait = Math.max(0, args[0]);
	    this._buff = [];
	    var $ = this;
	    this._$shiftBuff = function() {  $._send('value', $._buff.shift())  }
	  },
	  _free: function() {
	    this._buff = null;
	    this._$shiftBuff = null;
	  },
	  _handleValue: function(x, isCurrent) {
	    if (isCurrent) {
	      this._send('value', x, isCurrent);
	    } else {
	      this._buff.push(x);
	      setTimeout(this._$shiftBuff, this._wait);
	    }
	  },
	  _handleEnd: function(__, isCurrent) {
	    if (isCurrent) {
	      this._send('end', null, isCurrent);
	    } else {
	      var $ = this;
	      setTimeout(function() {  $._send('end')  }, this._wait);
	    }
	  }
	});
	
	// Kefir.fromBinder(fn)
	
	function FromBinder(fn) {
	  Stream.call(this);
	  this._fn = Fn(fn, 1);
	  this._unsubscribe = null;
	}
	
	inherit(FromBinder, Stream, {
	
	  _name: 'fromBinder',
	
	  _onActivation: function() {
	    var $ = this
	      , unsub
	      , isCurrent = true
	      , emitter = {
	        emit: function(x) {  $._send('value', x, isCurrent)  },
	        end: function() {  $._send('end', null, isCurrent)  }
	      };
	    unsub = this._fn.invoke(emitter);
	    isCurrent = false;
	    if (unsub) {
	      this._unsubscribe = Fn(unsub, 0);
	    }
	  },
	  _onDeactivation: function() {
	    if (this._unsubscribe !== null) {
	      this._unsubscribe.invoke();
	      this._unsubscribe = null;
	    }
	  },
	
	  _clear: function() {
	    Stream.prototype._clear.call(this);
	    this._fn = null;
	  }
	
	})
	
	Kefir.fromBinder = function(fn) {
	  return new FromBinder(fn);
	}
	
	
	
	
	
	
	// Kefir.emitter()
	
	function Emitter() {
	  Stream.call(this);
	}
	
	inherit(Emitter, Stream, {
	  _name: 'emitter',
	  emit: function(x) {  this._send('value', x)  },
	  end: function() {  this._send('end')  }
	});
	
	Kefir.emitter = function() {
	  return new Emitter();
	}
	
	
	
	
	
	
	
	// Kefir.never()
	
	var neverObj = new Stream();
	neverObj._send('end');
	neverObj._name = 'never';
	Kefir.never = function() {  return neverObj  }
	
	
	
	
	
	// Kefir.constant(x)
	
	function Constant(x) {
	  Property.call(this);
	  this._send('value', x);
	  this._send('end');
	}
	
	inherit(Constant, Property, {
	  _name: 'constant'
	})
	
	Kefir.constant = function(x) {
	  return new Constant(x);
	}
	
	
	// .setName
	
	Observable.prototype.setName = function(sourceObs, selfName /* or just selfName */) {
	  this._name = selfName ? sourceObs._name + '.' + selfName : sourceObs;
	  return this;
	}
	
	
	
	// .mapTo
	
	Observable.prototype.mapTo = function(value) {
	  return this.map(function() {  return value  }).setName(this, 'mapTo');
	}
	
	
	
	// .pluck
	
	Observable.prototype.pluck = function(propertyName) {
	  return this.map(function(x) {
	    return x[propertyName];
	  }).setName(this, 'pluck');
	}
	
	
	
	// .invoke
	
	Observable.prototype.invoke = function(methodName /*, arg1, arg2... */) {
	  var args = rest(arguments, 1);
	  return this.map(args ?
	    function(x) {  return apply(x[methodName], x, args)  } :
	    function(x) {  return x[methodName]()  }
	  ).setName(this, 'invoke');
	}
	
	
	
	// .tap
	
	Observable.prototype.tap = function(fn) {
	  fn = Fn(fn, 1);
	  return this.map(function(x) {
	    fn.invoke(x);
	    return x;
	  }).setName(this, 'tap');
	}
	
	
	
	// .and
	
	Kefir.and = function(observables) {
	  return Kefir.combine(observables, and).setName('and');
	}
	
	Observable.prototype.and = function(other) {
	  return this.combine(other, and).setName('and');
	}
	
	
	
	// .or
	
	Kefir.or = function(observables) {
	  return Kefir.combine(observables, or).setName('or');
	}
	
	Observable.prototype.or = function(other) {
	  return this.combine(other, or).setName('or');
	}
	
	
	
	// .not
	
	Observable.prototype.not = function() {
	  return this.map(function(x) {  return !x  }).setName(this, 'not');
	}
	
	
	
	// .awaiting
	
	Observable.prototype.awaiting = function(other) {
	  return Kefir.merge([
	    this.mapTo(true),
	    other.mapTo(false)
	  ]).skipDuplicates().toProperty(false).setName(this, 'awaiting');
	}
	
	
	
	// .filterBy
	
	Observable.prototype.filterBy = function(other) {
	  return other
	    .sampledBy(this)
	    .withHandler(function(emitter, e) {
	      if (e.type === 'end') {
	        emitter.end();
	      } else if (e.value[0]) {
	        emitter.emit(e.value[1]);
	      }
	    })
	    .setName(this, 'filterBy');
	}
	
	
	
	
	// .fromCallback
	
	Kefir.fromCallback = function(callbackConsumer) {
	  callbackConsumer = Fn(callbackConsumer, 1);
	  var called = false;
	  return Kefir.fromBinder(function(emitter) {
	    if (!called) {
	      callbackConsumer.invoke(function(x) {
	        emitter.emit(x);
	        emitter.end();
	      });
	      called = true;
	    }
	  }).setName('fromCallback');
	}
	
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Kefir;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    global.Kefir = Kefir;
	  } else if (typeof module === "object" && typeof exports === "object") {
	    module.exports = Kefir;
	    Kefir.Kefir = Kefir;
	  } else {
	    global.Kefir = Kefir;
	  }
	
	}(this));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("/Users/demi/Projects/react-pellet/node_modules/react/react.js");

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI4OHB4IiBoZWlnaHQ9IjIycHgiIHZpZXdCb3g9IjAgMCA4OCAyMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgODggMjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjRUQxQTNCIiBkPSJNMjAuODA0LDAuNzFjLTMuOTA1LDAtNC42NDksMi4yOTktNS44MTQsMy45NzljMCwwLTMuMTY4LDQuODI1LTQuMzczLDYuNjYyTDguMDE4LDAuNzFoLTYuOTgKCQkJCUw1LjQ0LDE4LjUzM2MwLjkxMiwzLjE4NCwzLjUwNCwyLjk4MSwzLjUwNCwyLjk4MWMxLjc3NSwwLDMuMTA2LTAuOTQxLDQuMzEyLTIuNzIyTDI1LjEzMSwwLjcxCgkJCQlDMjUuMTMxLDAuNzEsMjAuOTc3LDAuNzEsMjAuODA0LDAuNzF6IE02My45NDksMC43MWMtMy45MDUsMC00LjY0OSwyLjI5OS01LjgxNCwzLjk3OWMwLDAtMy4xNjcsNC44MjUtNC4zNzQsNi42NjJMNTEuMTYzLDAuNzEKCQkJCWgtNi45ODFsNC40MDMsMTcuODIzYzAuOTExLDMuMTg0LDMuNTA0LDIuOTgxLDMuNTA0LDIuOTgxYzEuNzc1LDAsMy4xMDUtMC45NDEsNC4zMTItMi43MjJMNjguMjc2LDAuNzEKCQkJCUM2OC4yNzYsMC43MSw2NC4xMjIsMC43MSw2My45NDksMC43MXogTTc3LjE1OSwwLjI2NEM3MC4zMTcsMC4yNjIsNjQuOTQsNS45OTIsNjQuNzI4LDEyLjE3NwoJCQkJYy0wLjE4Nyw1LjQyNiwzLjQ1MSw5LjU2Myw5LjY4OSw5LjU2NGM2Ljg4MSwwLDEyLjI1OC01LjcyOSwxMi40NzEtMTEuOTUyQzg3LjA3Myw0LjQwMSw4My40MzYsMC4yNjUsNzcuMTU5LDAuMjY0egoJCQkJIE03NS4wNjEsMTUuMzljLTIuMDU3LDAtMy40MDUtMS4zNjktMy4zMjctMy41NDZjMC4wODgtMi40NTcsMi4wNjEtNS4yMyw0LjgxOC01LjIzYzIuMDU4LDAsMy40MDUsMS4zNzEsMy4zMjksMy41MTIKCQkJCUM3OS43OTIsMTIuNjE3LDc3LjgxOCwxNS4zOTEsNzUuMDYxLDE1LjM5eiBNMzQuMzE4LDAuMjU5Yy02Ljg0NC0wLjAwMi0xMi4yMTksNS43MjgtMTIuNDMyLDExLjkxMwoJCQkJYy0wLjE4Nyw1LjQyNywzLjQ1Miw5LjU2Myw5LjY4OSw5LjU2NGM0Ljk0NiwwLDkuMTE1LTIuOTYyLDExLjE0OC02LjkzN2wtNy42MDYsMGMtMC44MjUsMC43MDMtMS44MzQsMS4xNDgtMi45NjQsMS4xNDgKCQkJCWMtMS45NTIsMC0zLjMxNi0xLjE3Mi0zLjU4LTMuMDk0bDEzLjA0MSwwLjAwMWMxLjAzMywwLDEuOTk1LTAuMTQ4LDIuMjEyLTEuMjI1YzAuMTIzLTAuNjA3LDAuMTk4LTEuMjIzLDAuMjE5LTEuODQ2CgkJCQlDNDQuMjMyLDQuMzk2LDQwLjU5NCwwLjI2LDM0LjMxOCwwLjI1OXogTTM2LjcwOSw4LjY0NGgtNy4xMzdjMC45My0xLjQ4NiwyLjQxNi0yLjU5Niw0LjIwNS0yLjU5NgoJCQkJYzEuNjIzLDAsMi44MzYsMC44MTMsMy4zNTIsMi4xOEMzNy4yMDMsOC41MTQsMzcuMDIyLDguNjQ0LDM2LjcwOSw4LjY0NHoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ }
/******/ ])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDI4M2IxYzYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy93YXRjaC12aWRlby93YXRjaC12aWRlby5zdHlsPzEyYzgqIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vd2F0Y2gtdmlkZW8uc3R5bD80OGU2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vd2F0Y2gtdmlkZW8uanN4Iiwid2VicGFjazovLy8vVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzP2RlNzIiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9+L2Nzcy1sb2FkZXIvY3NzVG9TdHJpbmcuanM/ZTUwOCIsIndlYnBhY2s6Ly8vL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L3NyYy9wZWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9+L2tlZmlyL2Rpc3Qva2VmaXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9yZWFjdC9yZWFjdC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vdmV2by1oZWFkZXIuc3ZnPzMyY2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7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Ozs7QUFLdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLDBDQUEwQztBQUNuRSx3QkFBdUI7QUFDdkI7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7OztBQUtEO0FBQ0EsMEJBQXlCLDhCQUE4QjtBQUN2RCxzQkFBcUI7QUFDckI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7O0FBTUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7O0FBTUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7O0FBTUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7O0FBTUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7OztBQUtEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7OztBQU1EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7OztBQU1EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7OztBQU1EOztBQUVBO0FBQ0E7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Q0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQSxnQ0FBK0IsY0FBYztBQUM3Qzs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsSUFBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBLEVBQUMsUTs7Ozs7O0FDcDdERCwyRjs7Ozs7Ozs7Ozs7OztBQ0FBLHNDQUFxQyw0MkUiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0MjgzYjFjNlxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvZGVtaS9Qcm9qZWN0cy92ZXZvLWVtYmVkL2lubGluZS1wbGF5ZXIvY29tcG9uZW50cy93YXRjaC12aWRlby93YXRjaC12aWRlby5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW21vZHVsZS5pZCwgY29udGVudCwgJyddO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2RlbWkvUHJvamVjdHMvdmV2by1lbWJlZC9pbmxpbmUtcGxheWVyL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vd2F0Y2gtdmlkZW8uc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3Zldm8tZW1iZWQvaW5saW5lLXBsYXllci9jb21wb25lbnRzL3dhdGNoLXZpZGVvL3dhdGNoLXZpZGVvLnN0eWxcIik7XG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vd2F0Y2gtdmlkZW8uc3R5bFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9jc3NUb1N0cmluZy5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLndhdGNoVmlkZW8tY29tcG9uZW50IHtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICB6LWluZGV4OiAxMDAwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyODBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi53YXRjaFZpZGVvLWNvbXBvbmVudCAjdmV2by1wbGF5ZXIge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuLndhdGNoVmlkZW8tY29tcG9uZW50IC5sb2dvIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIityZXF1aXJlKFwiLi92ZXZvLWhlYWRlci5zdmdcIikrXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxufVxcbi53YXRjaFZpZGVvLWNvbXBvbmVudCAubG9hZGluZyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcbi53YXRjaFZpZGVvLWNvbXBvbmVudCBwIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiA3cHg7XFxufVxcbi53YXRjaFZpZGVvLWNvbXBvbmVudCBwIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogIzY0OTVlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLndhdGNoVmlkZW8tY29tcG9uZW50IHAgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvfi9jc3MtbG9hZGVyIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9+L2F1dG9wcmVmaXhlci1sb2FkZXIhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L34vc3R5bHVzLWxvYWRlciEuL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vd2F0Y2gtdmlkZW8uc3R5bFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbiAgLCBwZWxsZXQgPSByZXF1aXJlKCdwZWxsZXQnKVxucmVxdWlyZSgnLi93YXRjaC12aWRlby5zdHlsJylcblxuaWYoIVNFUlZFUl9FTlYpIHtcbiAgdmFyIHZldm9BUEkgPSByZXF1aXJlKCcuL2RhdGEtYWNjZXNzLWxheWVyJyk7XG4gIHZhciB5b3V0dWJlID0gcmVxdWlyZSgnanN4IXJlYWN0LXlvdXR1YmUnKTtcblxuICB2YXIgd2F0Y2hWaWRlb0NvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ3dhdGNoVmlkZW9Db21wb25lbnQnLFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2ZXZvQVBJLmdldFBsYXlsaXN0KCdmMmU1OGEwMC03ODBkLTQ5MDQtYTFjYy0wMzA1ZjI5NDI1YmYnLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7dmlkZW9zOmRhdGEudmlkZW9zfSk7XG4gICAgICAgIHNlbGYuc2hvd1ZpZGVvKDApXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHt2aWRlbzogbnVsbCwgaW5kZXg6LTEsIGxvYWRpbmc6IHRydWV9O1xuICAgIH0sXG5cbiAgICBzaG93VmlkZW86IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBpZighdGhpcy5zdGF0ZS52aWRlb3NbaW5kZXhdKSB7aW5kZXggPSAwO31cblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmV2b0FQSS5nZXRWaWRlbyh0aGlzLnN0YXRlLnZpZGVvc1tpbmRleF0uaXNyYywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2aWRlbyBEYXRhJywgZGF0YSk7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe3ZpZGVvOmRhdGEsIGluZGV4OiBpbmRleCwgbG9hZGluZzpmYWxzZX0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zaG93VmlkZW8odGhpcy5zdGF0ZS5pbmRleCArIDEpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoe2NsYXNzTmFtZTogXCJ3YXRjaFZpZGVvLWNvbXBvbmVudFwifSwgXG4gICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nPyhSZWFjdC5ET00uZGl2KHtjbGFzc05hbWU6IFwibG9hZGluZ1wifSwgXCJMT0FESU5HLi4uXCIpKTp5b3V0dWJlKHtpZDpcInZldm8tcGxheWVyXCIsIHVybDonaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0nK3RoaXMuc3RhdGUudmlkZW8ueW91VHViZUlkLCBhdXRvcGxheToxfSksIFxuICAgICAgICAgIFJlYWN0LkRPTS5kaXYoe2NsYXNzTmFtZTogXCJsb2dvXCJ9KSwgXG4gICAgICAgICAgUmVhY3QuRE9NLnAobnVsbCwgdGhpcy5zdGF0ZS52aWRlbyAmJiB0aGlzLnN0YXRlLnZpZGVvLnRpdGxlLCBcIiBcIiwgUmVhY3QuRE9NLmEoe29uQ2xpY2s6IHRoaXMubmV4dH0sIFwiTmV4dCBWaWRlbyAoVk9URSlcIikpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIG5lZWQgdG8gaW5jbHVkZSByZWFjdCwgYXNzZXRzLCBjb21wb25lbnRcbiAgICB2YXIgZW1iZWRQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZW1iZWRQbGF5ZXIpO1xuICAgIFJlYWN0LnJlbmRlckNvbXBvbmVudCh3YXRjaFZpZGVvQ29tcG9uZW50KCksIGVtYmVkUGxheWVyKTtcblxuICB9KSgpO1xuXG59XG4vKlxuKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBhKHUpIHt2YXIgaCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTt2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO3MudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO3MuY2hhcnNldCA9ICd1dGY4JztzLmFzeW5jID0gZmFsc2U7cy5zcmMgPSB1O2guYXBwZW5kQ2hpbGQocyk7fVxuICBhKCcvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC8wLjExLjIvcmVhY3Qtd2l0aC1hZGRvbnMuanMnKTtcbiAgYSgnLy9sb2NhbGhvc3Q6MzAwMC9qcy9jb21wb25lbnQuanMnKTtcbn0pKClcbiovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vd2F0Y2gtdmlkZW8uanN4XG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge307XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcyk7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0Ly8gdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLyosIHNvdXJjZU1hcDogc291cmNlTWFwKi99O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKTtcclxuXHRyZXR1cm4gZnVuY3Rpb24obmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAvKiYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAqLylcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdC8vIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHQvLyBObyBicm93c2VyIHN1cHBvcnRcclxuXHQvLyBpZihzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0Ly8gdHJ5IHtcclxuXHRcdFx0Ly8gY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkgKyBcIiAqL1wiO1xyXG5cdFx0Ly8gfSBjYXRjaChlKSB7fVxyXG5cdC8vIH1cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG5cclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvfi9jc3MtbG9hZGVyL2Nzc1RvU3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgLypkaXJlY3RvciA9IHJlcXVpcmUoJ2RpcmVjdG9yJylcbiAgLCAqL2tlZmlyID0gcmVxdWlyZSgna2VmaXInKVxuICAsIGdsb2JsZVBlbGxldDtcblxuZnVuY3Rpb24gcGVsbGV0KCkge1xuICB0aGlzLnJlYWR5Rm5RdWUgPSBbXTtcbiAgdGhpcy5pbml0Rm5RdWUgPSBbXTtcblxuICB0aGlzLmVtaXR0ZXJzID0ge307XG59XG5cblxucGVsbGV0LnByb3RvdHlwZS5nZXRFbWl0dGVyID0gZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcbiAgaWYodGhpcy5lbWl0dGVyc1trZXldKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlcnNba2V5XTtcbiAgfVxuXG4gIHZhciBzdHJlYW0gPSB0aGlzLmVtaXR0ZXJzW2tleV0gPSBrZWZpci5lbWl0dGVyKCk7XG4gIHN0cmVhbS5vbkVuZChmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpcy5lbWl0dGVyc1trZXldO1xuICB9KTtcblxuICByZXR1cm4gc3RyZWFtO1xufVxuXG4vKipcbiAqIHJlZ2lzdGVyIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uY2UgcGVsbGV0IGlzIHJlYWR5XG4gKiBAcGFyYW0gZm5cbiAqL1xucGVsbGV0LnByb3RvdHlwZS5vblJlYWR5ID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gaWYgYWxsIHJlYWR5IHJ1bm5pbmcgZmlyZSBpbW1lZGlhdGVseSB3aXRoIHRoZSBsYXN0IGtub3cgZXJyIChvciBudWxsIGlmIG5vIGVycm9ycylcbiAgaWYodHlwZW9mKHRoaXMucmVhZHlFcnJvcikgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZm4obW9kdWxlLmV4cG9ydHMucmVhZHlFcnJvcik7XG4gICAgfSwgMSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnJlYWR5Rm5RdWUucHVzaChmbik7XG59O1xuXG4vKipcbiAqIHJlZ2lzdGVyIGEgZnVuY3Rpb24gbmVlZGVkIHRvIGNvbXBsZXRlIGJlZm9yZSBwZWxsZXQgaXMgcmVhZHlcbiAqIEBwYXJhbSBmblxuICovXG5wZWxsZXQucHJvdG90eXBlLnJlZ2lzdGVySW5pdEZuID0gZnVuY3Rpb24oZm4pIHtcbiAgdGhpcy5pbml0Rm5RdWUucHVzaChmbik7XG59O1xuXG4vKipcbiAqIENhbGxlZCBhZnRlciBldmVyeW9uZSBoYXMgcmVnaXN0ZXIgdGhlaXIgbG9hZCBmdW5jdGlvbnNcbiAqL1xucGVsbGV0LnByb3RvdHlwZS5zdGFydEluaXQgPSBmdW5jdGlvbigpIHtcbiAgaWYodHlwZW9mKHRoaXMucmVhZHlFcnJvcikgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgcmVpbml0IGJlY2F1c2UgcGVsbGV0IGlzIGFsbCByZWFkeSBydW5uaW5nLicpO1xuICB9XG5cbiAgdmFyIGNiQ291bnQgPSB0aGlzLmluaXRGblF1ZS5sZW5ndGg7XG4gIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgaWYoZXJyKSB7XG4gICAgICAvLyBjb25zb2xlIGxvZyB0aGUgZXJyb3IgYW5kIHNhZmUgdGhlIG1vc3QgcmVjZW50IGVycm9yXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0IHBlbGxldCBiZWNhdXNlOicsIGVyci5tZXNzYWdlKTtcbiAgICAgIG1vZHVsZS5leHBvcnRzLnJlYWR5RXJyb3IgPSBlcnI7XG4gICAgfVxuXG4gICAgaWYoLS1jYkNvdW50IDw9IDApIHtcbiAgICAgIC8vIGlmIGFsbCBjYWxsYmFjayBoYWQgbm8gZXJyb3Igc2V0IHRvIG51bGxcbiAgICAgIGlmKCFtb2R1bGUuZXhwb3J0cy5yZWFkeUVycm9yKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzLnJlYWR5RXJyb3IgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm47XG4gICAgICB3aGlsZShmbiA9IG1vZHVsZS5leHBvcnRzLnJlYWR5Rm5RdWUucG9wKCkpIHtcbiAgICAgICAgZm4obW9kdWxlLmV4cG9ydHMucmVhZHlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYoY2JDb3VudCA9PT0gMCkge1xuICAgIGRvbmUobnVsbCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbm93IGNhbGwgYWxsIGluaXQgZm4gYW5kIHdhaXQgdW50aWwgYWxsIGRvbmVcbiAgZm9yKHZhciBpIGluIHRoaXMuaW5pdEZuUXVlKSB7XG4gICAgdGhpcy5pbml0Rm5RdWVbaV0oZG9uZSk7XG4gIH1cbn07XG5cbi8vIGZvciB0aGUgc2VydmVyIGVudmlyb25tZW50IGRlZmluZSB0aGUgbWlkZGxld2FyZVxuaWYodHlwZW9mIEJST1dTRVJfRU5WID09PSAndW5kZWZpbmVkJyB8fCAhQlJPV1NFUl9FTlYpIHtcbiAgcGVsbGV0LnByb3RvdHlwZS5taWRkbGV3YXJlID0gZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdmFyIHN0cmVhbSA9IGdsb2JsZVBlbGxldC5nZXRFbWl0dGVyKCdyb3V0ZTpjaGFuZ2UnKTtcblxuICAgIC8vIGlmIG5vIG9ic2VydmVycyBza2lwIHJvdXRlXG4gICAgaWYoIXN0cmVhbS5fYWN0aXZlKSB7XG4gICAgICBuZXh0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RyZWFtLmVtaXQoe1xuICAgICAgcGF0aDogcmVxLnBhdGgsXG4gICAgICBxdWVyeTogcmVxLnF1ZXJ5LFxuICAgICAgcmVxOiByZXEsXG4gICAgICByZXM6IHJlcyxcbiAgICAgIG5leHQ6IG5leHRcbiAgICB9KTtcbiAgfTtcblxuICBwZWxsZXQucHJvdG90eXBlLnJlbmRlclNlcnZlclNpZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbWFya3VwO1xuXG4gICAgdmFyIG91ckJvZHlTY3JpcHRzID0gJzxzY3JpcHQgc3JjPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvaGlzdG9yeS5qcy8xLjgvbmF0aXZlLmhpc3RvcnkubWluLmpzXCI+PC9zY3JpcHQ+JytcbiAgICAgICc8c2NyaXB0IHNyYz1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LzAuMTEuMS9yZWFjdC13aXRoLWFkZG9ucy5qc1wiPjwvc2NyaXB0PicrXG4gICAgICAnPHNjcmlwdCBzcmM9XCIvanMvZGVtby5qc1wiPjwvc2NyaXB0Pic7XG5cbiAgICAvLyBmb3IgYm90cyBvbmx5IHJldHVybiB0aGUgbWFya3VwIHdpdGggb3V0IHJlYWN0IHN0YXRlIGFuZCBib290c3RyYXAgY2FsbFxuICAgIGlmKC9nb29nbGVib3R8Z3VydWppYm90fHR3aXR0ZXJib3R8eWFuZGV4Ym90fHNsdXJwfG1zbmJvdHxiaW5nYm90fHJvZ2VyYm90fGZhY2Vib29rZXh0ZXJuYWxoaXQvaS50ZXN0KG1lc3NhZ2UucmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXXx8JycpKSB7XG4gICAgICBtYXJrdXAgPSByZWFjdC5yZW5kZXJDb21wb25lbnRUb1N0YXRpY01hcmt1cChsYXlvdXQoe2JvZHk6bWVzc2FnZS5jb21wb25lbnQsIG1ldGE6bWVzc2FnZS5tZXRhLCBsb2NhbGVzOmFwcC5pMThuLmxvY2FsZXMsIG1lc3NhZ2VzOmFwcC5pMThuLm1lc3NhZ2VzfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrdXAgPSByZWFjdC5yZW5kZXJDb21wb25lbnRUb1N0cmluZyhsYXlvdXQoe2JvZHk6bWVzc2FnZS5jb21wb25lbnQsIG1ldGE6bWVzc2FnZS5tZXRhLCBsb2NhbGVzOmFwcC5pMThuLmxvY2FsZXMsIG1lc3NhZ2VzOmFwcC5pMThuLm1lc3NhZ2VzfSkpO1xuXG4gICAgICBpZihtZXNzYWdlLmlkKSB7XG4gICAgICAgIG91ckJvZHlTY3JpcHRzICs9ICc8c2NyaXB0PmFwcC5ib290c3RyYXAoXCInK21lc3NhZ2UuaWQrJ1wiLCcrSlNPTi5zdHJpbmdpZnkobWVzc2FnZS5wcm9wcykrJywnK0pTT04uc3RyaW5naWZ5KG1lc3NhZ2UubWV0YSkrJyk7PC9zY3JpcHQ+JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXJCb2R5U2NyaXB0cyArPSAnPCEtLSBHb29nbGUgQW5hbHl0aWNzOiBjaGFuZ2UgVUEtWFhYWFgtWCB0byBiZSB5b3VyIHNpdGVcXCdzIElELiAtLT5cXG4nK1xuICAgICc8c2NyaXB0PlxcbicrXG4gICAgICAnKGZ1bmN0aW9uKGIsbyxpLGwsZSxyKXtiLkdvb2dsZUFuYWx5dGljc09iamVjdD1sO2JbbF18fChiW2xdPVxcbicrXG4gICAgICAnZnVuY3Rpb24oKXsoYltsXS5xPWJbbF0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0pO2JbbF0ubD0rbmV3IERhdGU7XFxuJytcbiAgICAgICdlPW8uY3JlYXRlRWxlbWVudChpKTtyPW8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoaSlbMF07XFxuJytcbiAgICAgICdlLnNyYz1cXCcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanNcXCc7XFxuJytcbiAgICAgICdyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUscil9KHdpbmRvdyxkb2N1bWVudCxcXCdzY3JpcHRcXCcsXFwnZ2FcXCcpKTtcXG4nK1xuICAgICAgJ2dhKFxcJ2NyZWF0ZVxcJyxcXCdVQS1YWFhYWC1YXFwnKTtnYShcXCdzZW5kXFwnLFxcJ3BhZ2V2aWV3XFwnKTtcXG4nK1xuICAgICc8L3NjcmlwdD4nO1xuXG4gICAgLy8gd29ya2Fyb3VuZCBiZWNhdXNlIHJlYWN0IGRvZXMgbm90IHN1cHBvcnQgZG9jdHlwZSBvciA8IS0tIC0tPlxuICAgIG1lc3NhZ2UucmVzLnN0YXR1cygobWVzc2FnZS5tZXRhICYmIG1lc3NhZ2UubWV0YS5zdGF0dXMpIHx8IDIwMCk7XG4gICAgbWVzc2FnZS5yZXMuZW5kKCc8IURPQ1RZUEUgaHRtbD5cXG4nK1xuICAgICAgJzwhLS1baWYgbHQgSUUgN10+ICAgICAgPGh0bWwgY2xhc3M9XCJuby1qcyBsdC1pZTkgbHQtaWU4IGx0LWllN1wiPiA8IVtlbmRpZl0tLT5cXG4nK1xuICAgICAgJzwhLS1baWYgSUUgN10+ICAgICAgICAgPGh0bWwgY2xhc3M9XCJuby1qcyBsdC1pZTkgbHQtaWU4XCI+IDwhW2VuZGlmXS0tPlxcbicrXG4gICAgICAnPCEtLVtpZiBJRSA4XT4gICAgICAgICA8aHRtbCBjbGFzcz1cIm5vLWpzIGx0LWllOVwiPiA8IVtlbmRpZl0tLT5cXG4nK1xuICAgICAgJzwhLS1baWYgZ3QgSUUgOF0+PCEtLT4gPGh0bWwgY2xhc3M9XCJuby1qc1wiPiA8IS0tPCFbZW5kaWZdLS0+XFxuJytcbiAgICAgICc8aGVhZD4nK1xuICAgICAgICAnPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+JytcbiAgICAgICAgJzxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiPicrXG4gICAgICAgICgobWVzc2FnZS5tZXRhICYmIG1lc3NhZ2UubWV0YS50aXRsZSkgPyAnICA8dGl0bGU+JyArIG1lc3NhZ2UubWV0YS50aXRsZSArICc8L3RpdGxlPicgOiAnJykgK1xuICAgICAgICAnPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiPicrXG4gICAgICAgICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj4nK1xuICAgICAgICAnPHNjcmlwdCBzcmM9XCIvL3BvbHlmaWxsLmlvXCI+PC9zY3JpcHQ+JytcbiAgICAgICAgJzxzY3JpcHQgc3JjPVwiL2pzL2RlbW8tYXNzZXRzLmpzXCI+PC9zY3JpcHQ+JytcbiAgICAgICc8L2hlYWQ+JytcbiAgICAgICc8Ym9keT4nK1xuICAgICAgICAnPCEtLVtpZiBsdCBJRSA3XT5cXG4nK1xuICAgICAgICAnPHAgY2xhc3M9XCJicm93c2VoYXBweVwiPllvdSBhcmUgdXNpbmcgYW4gPHN0cm9uZz5vdXRkYXRlZDwvc3Ryb25nPiBicm93c2VyLiBQbGVhc2UgPGEgaHJlZj1cImh0dHA6Ly9icm93c2VoYXBweS5jb20vXCI+dXBncmFkZSB5b3VyIGJyb3dzZXI8L2E+IHRvIGltcHJvdmUgeW91ciBleHBlcmllbmNlLjwvcD5cXG4nK1xuICAgICAgICAnPCFbZW5kaWZdLS0+XFxuJytcbiAgICAgICAgJzxkaXYgaWQ9XCJfX0FQUF9fXCI+JytcbiAgICAgICAgICBtYXJrdXAgK1xuICAgICAgICAnPC9kaXY+JytcbiAgICAgICAgb3VyQm9keVNjcmlwdHMrXG4gICAgICAnPC9ib2R5PicrXG4gICAgICAnPC9odG1sPicpO1xuICB9XG59XG5cbi8vIGhhY2sgdGhlIGVudmlyb25tZW50IHNvIHRoYXQgd2UgY2FuIGNyZWF0ZSBhIHNpbmdsZXRvbiB0aGF0IGNhbiBiZSBzaGFyZWRcbi8vIGJldHdlZW4gdGhlIG5hdGl2ZSBub2RlanMgZW52aXJvbm1lbnQgYW5kIHRoZSB3ZWJwYWNrcyBjb250YWluZXIuXG5pZih0eXBlb2YgQlJPV1NFUl9FTlYgIT09ICd1bmRlZmluZWQnICYmIEJST1dTRVJfRU5WKSB7XG4gIGdsb2JsZVBlbGxldCA9IG5ldyBwZWxsZXQoKTtcbn0gZWxzZSB7XG4gIGlmKGdsb2JhbC5fX3BlbGxldFNpbmdsZXRvbikge1xuICAgIGdsb2JsZVBlbGxldCA9IGdsb2JhbC5fX3BlbGxldFNpbmdsZXRvbjtcbiAgfSBlbHNlIHtcbiAgICBnbG9ibGVQZWxsZXQgPSBnbG9iYWwuX19wZWxsZXRTaW5nbGV0b24gPSBuZXcgcGVsbGV0KCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9ibGVQZWxsZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9zcmMvcGVsbGV0LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyohIEtlZmlyLmpzIHYwLjIuNlxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3phZGkva2VmaXJcbiAqL1xuOyhmdW5jdGlvbihnbG9iYWwpe1xuICBcInVzZSBzdHJpY3RcIjtcblxudmFyIE5PVEhJTkcgPSBbJzxub3RoaW5nPiddO1xuXG5mdW5jdGlvbiBnZXQobWFwLCBrZXksIG5vdEZvdW5kKSB7XG4gIGlmIChtYXAgJiYga2V5IGluIG1hcCkge1xuICAgIHJldHVybiBtYXBba2V5XTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm90Rm91bmQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3duKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9iaihwcm90bykge1xuICB2YXIgRiA9IGZ1bmN0aW9uKCkge307XG4gIEYucHJvdG90eXBlID0gcHJvdG87XG4gIHJldHVybiBuZXcgRigpO1xufVxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0IC8qLCBtaXhpbjEsIG1peGluMi4uLiovKSB7XG4gIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpLCBwcm9wO1xuICBmb3IgKGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHByb3AgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICB0YXJnZXRbcHJvcF0gPSBhcmd1bWVudHNbaV1bcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXQoQ2hpbGQsIFBhcmVudCAvKiwgbWl4aW4xLCBtaXhpbjIuLi4qLykge1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaTtcbiAgQ2hpbGQucHJvdG90eXBlID0gY3JlYXRlT2JqKFBhcmVudC5wcm90b3R5cGUpO1xuICBDaGlsZC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDaGlsZDtcbiAgZm9yIChpID0gMjsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZXh0ZW5kKENoaWxkLnByb3RvdHlwZSwgYXJndW1lbnRzW2ldKTtcbiAgfVxuICByZXR1cm4gQ2hpbGQ7XG59XG5cbmZ1bmN0aW9uIGFncnNUb0FycmF5KGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuICByZXR1cm4gY2xvbmVBcnJheShhcmdzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm4oZm4sIGNvbnRleHQpIHtcbiAgaWYgKGlzRm4oZm4pKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9IGVsc2Uge1xuICAgIGlmIChjb250ZXh0ID09IG51bGwgfHwgIWlzRm4oY29udGV4dFtmbl0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIGZ1bmN0aW9uOiAnICsgZm4gKyAnIGluIGNvbnRleHQ6ICcgKyBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnRleHRbZm5dO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseShmbiwgYywgYSkge1xuICB2YXIgYUxlbmd0aCA9IGEgPyBhLmxlbmd0aCA6IDA7XG4gIGlmIChjID09IG51bGwpIHtcbiAgICBzd2l0Y2ggKGFMZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogIHJldHVybiBmbigpO1xuICAgICAgY2FzZSAxOiAgcmV0dXJuIGZuKGFbMF0pO1xuICAgICAgY2FzZSAyOiAgcmV0dXJuIGZuKGFbMF0sIGFbMV0pO1xuICAgICAgY2FzZSAzOiAgcmV0dXJuIGZuKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgY2FzZSA0OiAgcmV0dXJuIGZuKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIGZuLmFwcGx5KG51bGwsIGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFMZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogIHJldHVybiBmbi5jYWxsKGMpO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIGZuLmFwcGx5KGMsIGEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kV2l0aG91dENvbnRleHQoZm4sIGEsIGxlbmd0aCkge1xuICB2YXIgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHN3aXRjaCAoYS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiAgcmV0dXJuIGZuO1xuICAgICAgICBjYXNlIDE6ICByZXR1cm4gZnVuY3Rpb24oKSB7cmV0dXJuIGZuKGEwKX1cbiAgICAgICAgY2FzZSAyOiAgcmV0dXJuIGZ1bmN0aW9uKCkge3JldHVybiBmbihhMCwgYTEpfVxuICAgICAgICBjYXNlIDM6ICByZXR1cm4gZnVuY3Rpb24oKSB7cmV0dXJuIGZuKGEwLCBhMSwgYTIpfVxuICAgICAgICBjYXNlIDQ6ICByZXR1cm4gZnVuY3Rpb24oKSB7cmV0dXJuIGZuKGEwLCBhMSwgYTIsIGEzKX1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKCkge3JldHVybiBmbi5hcHBseShudWxsLCBhKX1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHN3aXRjaCAoYS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiAgcmV0dXJuIGZuO1xuICAgICAgICBjYXNlIDE6ICByZXR1cm4gZnVuY3Rpb24oYjApIHtyZXR1cm4gZm4oYTAsIGIwKX1cbiAgICAgICAgY2FzZSAyOiAgcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuKGEwLCBhMSwgYjApfVxuICAgICAgICBjYXNlIDM6ICByZXR1cm4gZnVuY3Rpb24oYjApIHtyZXR1cm4gZm4oYTAsIGExLCBhMiwgYjApfVxuICAgICAgICBjYXNlIDQ6ICByZXR1cm4gZnVuY3Rpb24oYjApIHtyZXR1cm4gZm4oYTAsIGExLCBhMiwgYTMsIGIwKX1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuLmFwcGx5KG51bGwsIGNvbmNhdChhLCBbYjBdKSl9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogIHJldHVybiBmbjtcbiAgICAgICAgY2FzZSAxOiAgcmV0dXJuIGZ1bmN0aW9uKGIwLCBiMSkge3JldHVybiBmbihhMCwgYjAsIGIxKX1cbiAgICAgICAgY2FzZSAyOiAgcmV0dXJuIGZ1bmN0aW9uKGIwLCBiMSkge3JldHVybiBmbihhMCwgYTEsIGIwLCBiMSl9XG4gICAgICAgIGNhc2UgMzogIHJldHVybiBmdW5jdGlvbihiMCwgYjEpIHtyZXR1cm4gZm4oYTAsIGExLCBhMiwgYjAsIGIxKX1cbiAgICAgICAgY2FzZSA0OiAgcmV0dXJuIGZ1bmN0aW9uKGIwLCBiMSkge3JldHVybiBmbihhMCwgYTEsIGEyLCBhMywgYjAsIGIxKX1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKGIwLCBiMSkge3JldHVybiBmbi5hcHBseShudWxsLCBjb25jYXQoYSwgW2IwLCBiMV0pKX1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogIHJldHVybiBmbjtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKCkge3JldHVybiBhcHBseShmbiwgbnVsbCwgY29uY2F0KGEsIGFyZ3VtZW50cykpfVxuICAgICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRXaXRoQ29udGV4dChmbiwgYywgYSwgbGVuZ3RoKSB7XG4gIHZhciBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM107XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgc3dpdGNoIChhLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6ICByZXR1cm4gZnVuY3Rpb24oKSB7cmV0dXJuIGZuLmNhbGwoYyl9XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBmdW5jdGlvbigpIHtyZXR1cm4gZm4uYXBwbHkoYywgYSl9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogIHJldHVybiBmdW5jdGlvbihiMCkge3JldHVybiBmbi5jYWxsKGMsIGIwKX1cbiAgICAgICAgY2FzZSAxOiAgcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuLmNhbGwoYywgYTAsIGIwKX1cbiAgICAgICAgY2FzZSAyOiAgcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuLmNhbGwoYywgYTAsIGExLCBiMCl9XG4gICAgICAgIGNhc2UgMzogIHJldHVybiBmdW5jdGlvbihiMCkge3JldHVybiBmbi5jYWxsKGMsIGEwLCBhMSwgYTIsIGIwKX1cbiAgICAgICAgY2FzZSA0OiAgcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuLmNhbGwoYywgYTAsIGExLCBhMiwgYTMsIGIwKX1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuLmFwcGx5KGMsIGNvbmNhdChhLCBbYjBdKSl9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogIHJldHVybiBmdW5jdGlvbihiMCwgYjEpIHtyZXR1cm4gZm4uY2FsbChjLCBiMCwgYjEpfVxuICAgICAgICBjYXNlIDE6ICByZXR1cm4gZnVuY3Rpb24oYjAsIGIxKSB7cmV0dXJuIGZuLmNhbGwoYywgYTAsIGIwLCBiMSl9XG4gICAgICAgIGNhc2UgMjogIHJldHVybiBmdW5jdGlvbihiMCwgYjEpIHtyZXR1cm4gZm4uY2FsbChjLCBhMCwgYTEsIGIwLCBiMSl9XG4gICAgICAgIGNhc2UgMzogIHJldHVybiBmdW5jdGlvbihiMCwgYjEpIHtyZXR1cm4gZm4uY2FsbChjLCBhMCwgYTEsIGEyLCBiMCwgYjEpfVxuICAgICAgICBjYXNlIDQ6ICByZXR1cm4gZnVuY3Rpb24oYjAsIGIxKSB7cmV0dXJuIGZuLmNhbGwoYywgYTAsIGExLCBhMiwgYTMsIGIwLCBiMSl9XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBmdW5jdGlvbihiMCwgYjEpIHtyZXR1cm4gZm4uYXBwbHkoYywgY29uY2F0KGEsIFtiMCwgYjFdKSl9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3dpdGNoIChhLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbigpIHtyZXR1cm4gZm4uYXBwbHkoYywgYXJndW1lbnRzKX1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKCkge3JldHVybiBmbi5hcHBseShjLCBjb25jYXQoYSwgYXJndW1lbnRzKSl9XG4gICAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZChmbiwgY29udGV4dCwgYXJncywgYm91bmRGdW5jdGlvbkxlbmd0aCkge1xuICBpZiAoY29udGV4dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGJpbmRXaXRob3V0Q29udGV4dChmbiwgYXJncywgYm91bmRGdW5jdGlvbkxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJpbmRXaXRoQ29udGV4dChmbiwgY29udGV4dCwgYXJncywgYm91bmRGdW5jdGlvbkxlbmd0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0KGEsIGIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShhLmxlbmd0aCArIGIubGVuZ3RoKVxuICAgICwgaiA9IDBcbiAgICAsIGxlbmd0aCwgaTtcbiAgaWYgKGEubGVuZ3RoID09PSAwKSB7ICByZXR1cm4gYiAgfVxuICBpZiAoYi5sZW5ndGggPT09IDApIHsgIHJldHVybiBhICB9XG4gIGxlbmd0aCA9IGEubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyssIGorKykge1xuICAgIHJlc3VsdFtqXSA9IGFbaV07XG4gIH1cbiAgbGVuZ3RoID0gYi5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKywgaisrKSB7XG4gICAgcmVzdWx0W2pdID0gYltpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaW5kKGFyciwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGhcbiAgICAsIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0gPT09IHZhbHVlKSB7ICByZXR1cm4gaSAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gZmluZEJ5UHJlZChhcnIsIHByZWQpIHtcbiAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGhcbiAgICAsIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVkKGFycltpXSkpIHsgIHJldHVybiBpICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBjbG9uZUFycmF5KGlucHV0KSB7XG4gIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGhcbiAgICAsIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpXG4gICAgLCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSBpbnB1dFtpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZW1vdmUoaW5wdXQsIGluZGV4KSB7XG4gIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGhcbiAgICAsIHJlc3VsdCwgaSwgajtcbiAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGggLSAxKTtcbiAgICAgIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgcmVzdWx0W2pdID0gaW5wdXRbaV07XG4gICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQnlQcmVkKGlucHV0LCBwcmVkKSB7XG4gIHJldHVybiByZW1vdmUoaW5wdXQsIGZpbmRCeVByZWQoaW5wdXQsIHByZWQpKTtcbn1cblxuZnVuY3Rpb24gbWFwKGlucHV0LCBmbikge1xuICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoXG4gICAgLCByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKVxuICAgICwgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2ldID0gZm4oaW5wdXRbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goYXJyLCBmbikge1xuICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aFxuICAgICwgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7ICBmbihhcnJbaV0pICB9XG59XG5cbmZ1bmN0aW9uIGZpbGxBcnJheShhcnIsIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoXG4gICAgLCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIHZhbHVlKSB7XG4gIHJldHVybiBmaW5kKGFyciwgdmFsdWUpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gcmVzdChhcnIsIHN0YXJ0LCBvbkVtcHR5KSB7XG4gIGlmIChhcnIubGVuZ3RoID4gc3RhcnQpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyLCBzdGFydCk7XG4gIH1cbiAgcmV0dXJuIG9uRW1wdHk7XG59XG5cbnZhciBub3cgPSBEYXRlLm5vdyA/XG4gIGZ1bmN0aW9uKCkgeyByZXR1cm4gRGF0ZS5ub3coKSB9IDpcbiAgZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9O1xuXG5mdW5jdGlvbiBpc0ZuKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheUxpa2UoeHMpIHtcbiAgcmV0dXJuIGlzQXJyYXkoeHMpIHx8IGlzQXJndW1lbnRzKHhzKTtcbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG52YXIgaXNBcmd1bWVudHMgPSBmdW5jdGlvbih4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59XG5cbi8vIEZvciBJRVxuaWYgKCFpc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gIGlzQXJndW1lbnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvd24ob2JqLCAnY2FsbGVlJykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRXF1YWxBcnJheXMoYSwgYikge1xuICB2YXIgbGVuZ3RoLCBpO1xuICBpZiAoYSA9PSBudWxsICYmIGIgPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuZ3RoID0gYS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBhbmQoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFhcmd1bWVudHNbaV0pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmd1bWVudHNbaSAtIDFdO1xufVxuXG5mdW5jdGlvbiBvcigpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJndW1lbnRzW2ldKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJndW1lbnRzW2kgLSAxXTtcbn1cblxuZnVuY3Rpb24gd2l0aEludGVydmFsKG5hbWUsIG1peGluKSB7XG5cbiAgZnVuY3Rpb24gQW5vbnltb3VzU3RyZWFtKHdhaXQsIGFyZ3MpIHtcbiAgICBTdHJlYW0uY2FsbCh0aGlzKTtcbiAgICB0aGlzLl93YWl0ID0gd2FpdDtcbiAgICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcbiAgICB2YXIgJCA9IHRoaXM7XG4gICAgdGhpcy5fJG9uVGljayA9IGZ1bmN0aW9uKCkgeyAgJC5fb25UaWNrKCkgIH1cbiAgICB0aGlzLl9pbml0KGFyZ3MpO1xuICB9XG5cbiAgaW5oZXJpdChBbm9ueW1vdXNTdHJlYW0sIFN0cmVhbSwge1xuXG4gICAgX25hbWU6IG5hbWUsXG5cbiAgICBfaW5pdDogZnVuY3Rpb24oYXJncykge30sXG4gICAgX2ZyZWU6IGZ1bmN0aW9uKCkge30sXG5cbiAgICBfb25UaWNrOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5fJG9uVGljaywgdGhpcy5fd2FpdCk7XG4gICAgfSxcbiAgICBfb25EZWFjdGl2YXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2ludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElkKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICBTdHJlYW0ucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5fJG9uVGljayA9IG51bGw7XG4gICAgICB0aGlzLl9mcmVlKCk7XG4gICAgfVxuXG4gIH0sIG1peGluKTtcblxuICBLZWZpcltuYW1lXSA9IGZ1bmN0aW9uKHdhaXQpIHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c1N0cmVhbSh3YWl0LCByZXN0KGFyZ3VtZW50cywgMSwgW10pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aXRoT25lU291cmNlKG5hbWUsIG1peGluLCBvcHRpb25zKSB7XG5cblxuICBvcHRpb25zID0gZXh0ZW5kKHtcbiAgICBzdHJlYW1NZXRob2Q6IGZ1bmN0aW9uKFN0cmVhbUNsYXNzLCBQcm9wZXJ0eUNsYXNzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7ICByZXR1cm4gbmV3IFN0cmVhbUNsYXNzKHRoaXMsIGFyZ3VtZW50cykgIH1cbiAgICB9LFxuICAgIHByb3BlcnR5TWV0aG9kOiBmdW5jdGlvbihTdHJlYW1DbGFzcywgUHJvcGVydHlDbGFzcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgeyAgcmV0dXJuIG5ldyBQcm9wZXJ0eUNsYXNzKHRoaXMsIGFyZ3VtZW50cykgIH1cbiAgICB9XG4gIH0sIG9wdGlvbnMgfHwge30pO1xuXG5cblxuICBtaXhpbiA9IGV4dGVuZCh7XG4gICAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHt9LFxuICAgIF9mcmVlOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbih4LCBpc0N1cnJlbnQpIHsgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCwgaXNDdXJyZW50KSAgfSxcbiAgICBfaGFuZGxlRW5kOiBmdW5jdGlvbihfXywgaXNDdXJyZW50KSB7ICB0aGlzLl9zZW5kKCdlbmQnLCBudWxsLCBpc0N1cnJlbnQpICB9LFxuXG4gICAgX29uQWN0aXZhdGlvbkhvb2s6IGZ1bmN0aW9uKCkge30sXG4gICAgX29uRGVhY3RpdmF0aW9uSG9vazogZnVuY3Rpb24oKSB7fSxcblxuICAgIF9oYW5kbGVBbnk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAndmFsdWUnOiB0aGlzLl9oYW5kbGVWYWx1ZShldmVudC52YWx1ZSwgZXZlbnQuY3VycmVudCk7IGJyZWFrO1xuICAgICAgICBjYXNlICdlbmQnOiB0aGlzLl9oYW5kbGVFbmQoZXZlbnQudmFsdWUsIGV2ZW50LmN1cnJlbnQpOyBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9vbkFjdGl2YXRpb25Ib29rKCk7XG4gICAgICB0aGlzLl9zb3VyY2Uub25BbnkoW3RoaXMuX2hhbmRsZUFueSwgdGhpc10pO1xuICAgIH0sXG4gICAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX29uRGVhY3RpdmF0aW9uSG9vaygpO1xuICAgICAgdGhpcy5fc291cmNlLm9mZkFueShbdGhpcy5faGFuZGxlQW55LCB0aGlzXSk7XG4gICAgfVxuICB9LCBtaXhpbiB8fCB7fSk7XG5cblxuXG4gIGZ1bmN0aW9uIGJ1aWxkQ2xhc3MoQmFzZUNsYXNzKSB7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzT2JzZXJ2YWJsZShzb3VyY2UsIGFyZ3MpIHtcbiAgICAgIEJhc2VDbGFzcy5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5fc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fbmFtZSA9IHNvdXJjZS5fbmFtZSArICcuJyArIG5hbWU7XG4gICAgICB0aGlzLl9pbml0KGFyZ3MpO1xuICAgIH1cblxuICAgIGluaGVyaXQoQW5vbnltb3VzT2JzZXJ2YWJsZSwgQmFzZUNsYXNzLCB7XG4gICAgICBfY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBCYXNlQ2xhc3MucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgICAgICB0aGlzLl9mcmVlKCk7XG4gICAgICB9XG4gICAgfSwgbWl4aW4pO1xuXG4gICAgcmV0dXJuIEFub255bW91c09ic2VydmFibGU7XG4gIH1cblxuXG4gIHZhciBBbm9ueW1vdXNTdHJlYW0gPSBidWlsZENsYXNzKFN0cmVhbSk7XG4gIHZhciBBbm9ueW1vdXNQcm9wZXJ0eSA9IGJ1aWxkQ2xhc3MoUHJvcGVydHkpO1xuXG4gIGlmIChvcHRpb25zLnN0cmVhbU1ldGhvZCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGVbbmFtZV0gPSBvcHRpb25zLnN0cmVhbU1ldGhvZChBbm9ueW1vdXNTdHJlYW0sIEFub255bW91c1Byb3BlcnR5KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnByb3BlcnR5TWV0aG9kKSB7XG4gICAgUHJvcGVydHkucHJvdG90eXBlW25hbWVdID0gb3B0aW9ucy5wcm9wZXJ0eU1ldGhvZChBbm9ueW1vdXNTdHJlYW0sIEFub255bW91c1Byb3BlcnR5KTtcbiAgfVxuXG59XG5cblxuXG52YXIgS2VmaXIgPSB7fTtcblxuXG5cblxuLy8gRm5cblxuZnVuY3Rpb24gbm9ybUZuTWV0YShmbk1ldGEpIHtcbiAgaWYgKGZuTWV0YSBpbnN0YW5jZW9mIF9Gbikge1xuICAgIHJldHVybiBmbk1ldGE7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRm4oZm5NZXRhKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm46IGZuTWV0YSxcbiAgICAgICAgY29udGV4dDogbnVsbCxcbiAgICAgICAgYXJnczogW11cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0FycmF5TGlrZShmbk1ldGEpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZm46IGdldEZuKGZuTWV0YVswXSwgZm5NZXRhWzFdKSxcbiAgICAgICAgICBjb250ZXh0OiAoZm5NZXRhWzFdID09IG51bGwgPyBudWxsIDogZm5NZXRhWzFdKSxcbiAgICAgICAgICBhcmdzOiByZXN0KGZuTWV0YSwgMiwgW10pXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBpc25cXCd0IGEgZnVuY3Rpb24sIGFuZCBjYW5cXCd0IGJlIGNvbnZlcnRlZCB0byBpdDogJyArIGZuTWV0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5Rm5NZXRhKGZuTWV0YSwgYXJncykge1xuICBmbk1ldGEgPSBub3JtRm5NZXRhKGZuTWV0YSk7XG4gIHJldHVybiBhcHBseShmbk1ldGEuZm4sIGZuTWV0YS5jb250ZXh0LCBjb25jYXQoZm5NZXRhLmFyZ3MsIGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gX0ZuKGZuTWV0YSwgbGVuZ3RoKSB7XG4gIHRoaXMuY29udGV4dCA9IGZuTWV0YS5jb250ZXh0O1xuICB0aGlzLmZuID0gZm5NZXRhLmZuO1xuICB0aGlzLmFyZ3MgPSBmbk1ldGEuYXJncztcbiAgdGhpcy5pbnZva2UgPSBiaW5kKHRoaXMuZm4sIHRoaXMuY29udGV4dCwgdGhpcy5hcmdzLCBsZW5ndGgpO1xufVxuXG5fRm4ucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24oYXJncykge1xuICByZXR1cm4gYXBwbHkodGhpcy5pbnZva2UsIG51bGwsIGFyZ3MpO1xufVxuXG5fRm4ucHJvdG90eXBlLmFwcGx5V2l0aENvbnRleHQgPSBmdW5jdGlvbihjb250ZXh0LCBhcmdzKSB7XG4gIGlmICh0aGlzLmNvbnRleHQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXBwbHkodGhpcy5mbiwgY29udGV4dCwgY29uY2F0KHRoaXMuYXJncywgYXJncykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLmFwcGx5KGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIEZuKGZuTWV0YSwgbGVuZ3RoKSB7XG4gIGlmIChmbk1ldGEgaW5zdGFuY2VvZiBfRm4pIHtcbiAgICByZXR1cm4gZm5NZXRhO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgX0ZuKG5vcm1Gbk1ldGEoZm5NZXRhKSwgbGVuZ3RoID09IG51bGwgPyAxMDAgOiBsZW5ndGgpO1xuICB9XG59XG5cbkZuLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgYSA9IEZuKGEsIG51bGwsIHRydWUpO1xuICBiID0gRm4oYiwgbnVsbCwgdHJ1ZSk7XG4gIHJldHVybiBhLmZuID09PSBiLmZuICYmXG4gICAgYS5jb250ZXh0ID09PSBiLmNvbnRleHQgJiZcbiAgICBpc0VxdWFsQXJyYXlzKGEuYXJncywgYi5hcmdzKTtcbn1cblxuS2VmaXIuRm4gPSBGbjtcblxuXG5cblxuXG4vLyBTdWJzY3JpYmVyc1xuXG5mdW5jdGlvbiBTdWJzY3JpYmVycygpIHtcbiAgdGhpcy5fZm5zID0gW107XG59XG5cbmV4dGVuZChTdWJzY3JpYmVycywge1xuICBjYWxsT25lOiBmdW5jdGlvbihmbiwgZXZlbnQpIHtcbiAgICBpZiAoZm4udHlwZSA9PT0gJ2FueScpIHtcbiAgICAgIGZuLmludm9rZShldmVudCk7XG4gICAgfSBlbHNlIGlmIChmbi50eXBlID09PSBldmVudC50eXBlKSB7XG4gICAgICBpZiAoZm4udHlwZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICBmbi5pbnZva2UoZXZlbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uaW52b2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjYWxsT25jZTogZnVuY3Rpb24odHlwZSwgZm5NZXRhLCBldmVudCkge1xuICAgIGlmICh0eXBlID09PSAnYW55Jykge1xuICAgICAgYXBwbHlGbk1ldGEoZm5NZXRhLCBbZXZlbnRdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGV2ZW50LnR5cGUpIHtcbiAgICAgIGlmICh0eXBlID09PSAndmFsdWUnKSB7XG4gICAgICAgIGFwcGx5Rm5NZXRhKGZuTWV0YSwgW2V2ZW50LnZhbHVlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcHBseUZuTWV0YShmbk1ldGEsIFtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHRlbmQoU3Vic2NyaWJlcnMucHJvdG90eXBlLCB7XG4gIGFkZDogZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICBmbiA9IEZuKGZuLCB0eXBlID09PSAnZW5kJyA/IDAgOiAxKTtcbiAgICBmbi50eXBlID0gdHlwZTtcbiAgICB0aGlzLl9mbnMgPSBjb25jYXQodGhpcy5fZm5zLCBbZm5dKTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgIGZuID0gRm4oZm4pO1xuICAgIHRoaXMuX2ZucyA9IHJlbW92ZUJ5UHJlZCh0aGlzLl9mbnMsIGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB4LnR5cGUgPT09IHR5cGUgJiYgRm4uaXNFcXVhbCh4LCBmbik7XG4gICAgfSk7XG4gIH0sXG4gIGNhbGxBbGw6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGZucyA9IHRoaXMuX2ZucztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgICAgU3Vic2NyaWJlcnMuY2FsbE9uZShmbnNbaV0sIGV2ZW50KTtcbiAgICB9XG4gIH0sXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mbnMubGVuZ3RoID09PSAwO1xuICB9XG59KTtcblxuXG5cblxuXG4vLyBFdmVudHNcblxuZnVuY3Rpb24gRXZlbnQodHlwZSwgdmFsdWUsIGN1cnJlbnQpIHtcbiAgcmV0dXJuIHt0eXBlOiB0eXBlLCB2YWx1ZTogdmFsdWUsIGN1cnJlbnQ6ICEhY3VycmVudH07XG59XG5cbnZhciBDVVJSRU5UX0VORCA9IEV2ZW50KCdlbmQnLCB1bmRlZmluZWQsIHRydWUpO1xuXG5cblxuXG5cbi8vIE9ic2VydmFibGVcblxuZnVuY3Rpb24gT2JzZXJ2YWJsZSgpIHtcbiAgdGhpcy5fc3Vic2NyaWJlcnMgPSBuZXcgU3Vic2NyaWJlcnMoKTtcbiAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gIHRoaXMuX2FsaXZlID0gdHJ1ZTtcbn1cbktlZmlyLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuXG5leHRlbmQoT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcblxuICBfbmFtZTogJ29ic2VydmFibGUnLFxuXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uKCkge30sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7fSxcblxuICBfc2V0QWN0aXZlOiBmdW5jdGlvbihhY3RpdmUpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fb25BY3RpdmF0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbkRlYWN0aXZhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5fYWxpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG51bGw7XG4gIH0sXG5cbiAgX3NlbmQ6IGZ1bmN0aW9uKHR5cGUsIHgsIGlzQ3VycmVudCkge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlcnMuY2FsbEFsbChFdmVudCh0eXBlLCB4LCBpc0N1cnJlbnQpKTtcbiAgICAgIGlmICh0eXBlID09PSAnZW5kJykgeyAgdGhpcy5fY2xlYXIoKSAgfVxuICAgIH1cbiAgfSxcblxuICBvbjogZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmFkZCh0eXBlLCBmbik7XG4gICAgICB0aGlzLl9zZXRBY3RpdmUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFN1YnNjcmliZXJzLmNhbGxPbmNlKHR5cGUsIGZuLCBDVVJSRU5UX0VORCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzLnJlbW92ZSh0eXBlLCBmbik7XG4gICAgICBpZiAodGhpcy5fc3Vic2NyaWJlcnMuaXNFbXB0eSgpKSB7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uVmFsdWU6ICBmdW5jdGlvbihmbikgeyAgcmV0dXJuIHRoaXMub24oJ3ZhbHVlJywgZm4pICAgfSxcbiAgb25FbmQ6ICAgIGZ1bmN0aW9uKGZuKSB7ICByZXR1cm4gdGhpcy5vbignZW5kJywgZm4pICAgICB9LFxuICBvbkFueTogICAgZnVuY3Rpb24oZm4pIHsgIHJldHVybiB0aGlzLm9uKCdhbnknLCBmbikgICAgIH0sXG5cbiAgb2ZmVmFsdWU6IGZ1bmN0aW9uKGZuKSB7ICByZXR1cm4gdGhpcy5vZmYoJ3ZhbHVlJywgZm4pICB9LFxuICBvZmZFbmQ6ICAgZnVuY3Rpb24oZm4pIHsgIHJldHVybiB0aGlzLm9mZignZW5kJywgZm4pICAgIH0sXG4gIG9mZkFueTogICBmdW5jdGlvbihmbikgeyAgcmV0dXJuIHRoaXMub2ZmKCdhbnknLCBmbikgICAgfVxuXG59KTtcblxuXG4vLyBleHRlbmQoKSBjYW4ndCBoYW5kbGUgYHRvU3RyaW5nYCBpbiBJRThcbk9ic2VydmFibGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7ICByZXR1cm4gJ1snICsgdGhpcy5fbmFtZSArICddJyAgfTtcblxuXG5cblxuXG5cblxuXG5cbi8vIFN0cmVhbVxuXG5mdW5jdGlvbiBTdHJlYW0oKSB7XG4gIE9ic2VydmFibGUuY2FsbCh0aGlzKTtcbn1cbktlZmlyLlN0cmVhbSA9IFN0cmVhbTtcblxuaW5oZXJpdChTdHJlYW0sIE9ic2VydmFibGUsIHtcblxuICBfbmFtZTogJ3N0cmVhbSdcblxufSk7XG5cblxuXG5cblxuXG5cbi8vIFByb3BlcnR5XG5cbmZ1bmN0aW9uIFByb3BlcnR5KCkge1xuICBPYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gIHRoaXMuX2N1cnJlbnQgPSBOT1RISU5HO1xufVxuS2VmaXIuUHJvcGVydHkgPSBQcm9wZXJ0eTtcblxuaW5oZXJpdChQcm9wZXJ0eSwgT2JzZXJ2YWJsZSwge1xuXG4gIF9uYW1lOiAncHJvcGVydHknLFxuXG4gIF9zZW5kOiBmdW5jdGlvbih0eXBlLCB4LCBpc0N1cnJlbnQpIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIGlmICghaXNDdXJyZW50KSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmNhbGxBbGwoRXZlbnQodHlwZSwgeCkpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICd2YWx1ZScpIHsgIHRoaXMuX2N1cnJlbnQgPSB4ICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ2VuZCcpIHsgIHRoaXMuX2NsZWFyKCkgIH1cbiAgICB9XG4gIH0sXG5cbiAgb246IGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycy5hZGQodHlwZSwgZm4pO1xuICAgICAgdGhpcy5fc2V0QWN0aXZlKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VycmVudCAhPT0gTk9USElORykge1xuICAgICAgU3Vic2NyaWJlcnMuY2FsbE9uY2UodHlwZSwgZm4sIEV2ZW50KCd2YWx1ZScsIHRoaXMuX2N1cnJlbnQsIHRydWUpKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9hbGl2ZSkge1xuICAgICAgU3Vic2NyaWJlcnMuY2FsbE9uY2UodHlwZSwgZm4sIENVUlJFTlRfRU5EKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufSk7XG5cblxuXG5cblxuXG4vLyBMb2dcblxuZnVuY3Rpb24gbG9nQ2IobmFtZSwgZXZlbnQpIHtcbiAgdmFyIHR5cGVTdHIgPSAnPCcgKyBldmVudC50eXBlICsgKGV2ZW50LmN1cnJlbnQgPyAnOmN1cnJlbnQnIDogJycpICsgJz4nO1xuICBpZiAoZXZlbnQudHlwZSA9PT0gJ3ZhbHVlJykge1xuICAgIGNvbnNvbGUubG9nKG5hbWUsIHR5cGVTdHIsIGV2ZW50LnZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhuYW1lLCB0eXBlU3RyKTtcbiAgfVxufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHRoaXMub25BbnkoW2xvZ0NiLCBudWxsLCBuYW1lIHx8IHRoaXMudG9TdHJpbmcoKV0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUub2ZmTG9nID0gZnVuY3Rpb24obmFtZSkge1xuICB0aGlzLm9mZkFueShbbG9nQ2IsIG51bGwsIG5hbWUgfHwgdGhpcy50b1N0cmluZygpXSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gS2VmaXIud2l0aEludGVydmFsKClcblxud2l0aEludGVydmFsKCd3aXRoSW50ZXJ2YWwnLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5fZm4gPSBGbihhcmdzWzBdLCAxKTtcbiAgICB2YXIgJCA9IHRoaXM7XG4gICAgdGhpcy5fZW1pdHRlciA9IHtcbiAgICAgIGVtaXQ6IGZ1bmN0aW9uKHgpIHsgICQuX3NlbmQoJ3ZhbHVlJywgeCkgIH0sXG4gICAgICBlbmQ6IGZ1bmN0aW9uKCkgeyAgJC5fc2VuZCgnZW5kJykgIH1cbiAgICB9XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gICAgdGhpcy5fZW1pdHRlciA9IG51bGw7XG4gIH0sXG4gIF9vblRpY2s6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2ZuLmludm9rZSh0aGlzLl9lbWl0dGVyKTtcbiAgfVxufSk7XG5cblxuXG5cblxuLy8gS2VmaXIuZnJvbVBvbGwoKVxuXG53aXRoSW50ZXJ2YWwoJ2Zyb21Qb2xsJywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuX2ZuID0gRm4oYXJnc1swXSwgMCk7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9vblRpY2s6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5fZm4uaW52b2tlKCkpO1xuICB9XG59KTtcblxuXG5cblxuXG4vLyBLZWZpci5pbnRlcnZhbCgpXG5cbndpdGhJbnRlcnZhbCgnaW50ZXJ2YWwnLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5feCA9IGFyZ3NbMF07XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94ID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2VuZCgndmFsdWUnLCB0aGlzLl94KTtcbiAgfVxufSk7XG5cblxuXG5cbi8vIEtlZmlyLnNlcXVlbnRpYWxseSgpXG5cbndpdGhJbnRlcnZhbCgnc2VxdWVudGlhbGx5Jywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuX3hzID0gY2xvbmVBcnJheShhcmdzWzBdKTtcbiAgICBpZiAodGhpcy5feHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9zZW5kKCdlbmQnKVxuICAgIH1cbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3hzID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl94cy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCB0aGlzLl94c1swXSk7XG4gICAgICAgIHRoaXMuX3NlbmQoJ2VuZCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5feHMuc2hpZnQoKSk7XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuLy8gS2VmaXIucmVwZWF0ZWRseSgpXG5cbndpdGhJbnRlcnZhbCgncmVwZWF0ZWRseScsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl94cyA9IGNsb25lQXJyYXkoYXJnc1swXSk7XG4gICAgdGhpcy5faSA9IC0xO1xuICB9LFxuICBfb25UaWNrOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5feHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5faSA9ICh0aGlzLl9pICsgMSkgJSB0aGlzLl94cy5sZW5ndGg7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHRoaXMuX3hzW3RoaXMuX2ldKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuXG5cbi8vIEtlZmlyLmxhdGVyKClcblxud2l0aEludGVydmFsKCdsYXRlcicsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl94ID0gYXJnc1swXTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSBudWxsO1xuICB9LFxuICBfb25UaWNrOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHRoaXMuX3gpO1xuICAgIHRoaXMuX3NlbmQoJ2VuZCcpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gX0Fic3RyYWN0UG9vbChvcHRpb25zKSB7XG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xuXG4gIHRoaXMuX3F1ZXVlTGltID0gZ2V0KG9wdGlvbnMsICdxdWV1ZUxpbScsIDApOyAgICAvLyAtMS4uLuKInlxuICB0aGlzLl9jb25jdXJMaW0gPSBnZXQob3B0aW9ucywgJ2NvbmN1ckxpbScsIC0xKTsgLy8gLTEsIDEuLi7iiJ5cbiAgdGhpcy5fZHJvcCA9IGdldChvcHRpb25zLCAnZHJvcCcsICduZXcnKTsgICAgICAgIC8vIG9sZCwgbmV3XG4gIGlmICh0aGlzLl9jb25jdXJMaW0gPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29wdGlvbnMuY29uY3VyTGltIGNhblxcJ3QgYmUgMCcpO1xuICB9XG5cbiAgdGhpcy5fcXVldWUgPSBbXTtcbiAgdGhpcy5fY3VyU291cmNlcyA9IFtdO1xuICB0aGlzLl9hY3RpdmF0aW5nID0gZmFsc2U7XG59XG5cbmluaGVyaXQoX0Fic3RyYWN0UG9vbCwgU3RyZWFtLCB7XG5cbiAgX25hbWU6ICdhYnN0cmFjdFBvb2wnLFxuXG4gIF9hZGQ6IGZ1bmN0aW9uKG9icykge1xuICAgIGlmICh0aGlzLl9jb25jdXJMaW0gPT09IC0xIHx8IHRoaXMuX2N1clNvdXJjZXMubGVuZ3RoIDwgdGhpcy5fY29uY3VyTGltKSB7XG4gICAgICB0aGlzLl9hZGRUb0N1cihvYnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fcXVldWVMaW0gPT09IC0xIHx8IHRoaXMuX3F1ZXVlLmxlbmd0aCA8IHRoaXMuX3F1ZXVlTGltKSB7XG4gICAgICAgIHRoaXMuX2FkZFRvUXVldWUob2JzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZHJvcCA9PT0gJ29sZCcpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlT2xkZXN0KCk7XG4gICAgICAgIHRoaXMuX2FkZChvYnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2FkZEFsbDogZnVuY3Rpb24ob2Jzcykge1xuICAgIHZhciAkID0gdGhpcztcbiAgICBmb3JFYWNoKG9ic3MsIGZ1bmN0aW9uKG9icykgeyAgJC5fYWRkKG9icykgIH0pO1xuICB9LFxuICBfcmVtb3ZlOiBmdW5jdGlvbihvYnMpIHtcbiAgICBpZiAodGhpcy5fcmVtb3ZlQ3VyKG9icykgPT09IC0xKSB7XG4gICAgICB0aGlzLl9yZW1vdmVRdWV1ZShvYnMpO1xuICAgIH1cbiAgfSxcblxuICBfYWRkVG9RdWV1ZTogZnVuY3Rpb24ob2JzKSB7XG4gICAgdGhpcy5fcXVldWUgPSBjb25jYXQodGhpcy5fcXVldWUsIFtvYnNdKTtcbiAgfSxcbiAgX2FkZFRvQ3VyOiBmdW5jdGlvbihvYnMpIHtcbiAgICB0aGlzLl9jdXJTb3VyY2VzID0gY29uY2F0KHRoaXMuX2N1clNvdXJjZXMsIFtvYnNdKTtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7ICB0aGlzLl9zdWIob2JzKSAgfVxuICB9LFxuICBfc3ViOiBmdW5jdGlvbihvYnMpIHtcbiAgICBvYnMub25BbnkoW3RoaXMuX2hhbmRsZVN1YkFueSwgdGhpc10pO1xuICAgIG9icy5vbkVuZChbdGhpcy5fcmVtb3ZlQ3VyLCB0aGlzLCBvYnNdKTtcbiAgfSxcbiAgX3Vuc3ViOiBmdW5jdGlvbihvYnMpIHtcbiAgICBvYnMub2ZmQW55KFt0aGlzLl9oYW5kbGVTdWJBbnksIHRoaXNdKTtcbiAgICBvYnMub2ZmRW5kKFt0aGlzLl9yZW1vdmVDdXIsIHRoaXMsIG9ic10pO1xuICB9LFxuICBfaGFuZGxlU3ViQW55OiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSAndmFsdWUnKSB7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIGV2ZW50LnZhbHVlLCBldmVudC5jdXJyZW50ICYmIHRoaXMuX2FjdGl2YXRpbmcpO1xuICAgIH1cbiAgfSxcblxuICBfcmVtb3ZlUXVldWU6IGZ1bmN0aW9uKG9icykge1xuICAgIHZhciBpbmRleCA9IGZpbmQodGhpcy5fcXVldWUsIG9icyk7XG4gICAgdGhpcy5fcXVldWUgPSByZW1vdmUodGhpcy5fcXVldWUsIGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG4gIF9yZW1vdmVDdXI6IGZ1bmN0aW9uKG9icykge1xuICAgIGlmICh0aGlzLl9hY3RpdmUpIHsgIHRoaXMuX3Vuc3ViKG9icykgIH1cbiAgICB2YXIgaW5kZXggPSBmaW5kKHRoaXMuX2N1clNvdXJjZXMsIG9icyk7XG4gICAgdGhpcy5fY3VyU291cmNlcyA9IHJlbW92ZSh0aGlzLl9jdXJTb3VyY2VzLCBpbmRleCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLl9wdWxsUXVldWUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VyU291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fb25FbXB0eSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG4gIF9yZW1vdmVPbGRlc3Q6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JlbW92ZUN1cih0aGlzLl9jdXJTb3VyY2VzWzBdKTtcbiAgfSxcblxuICBfcHVsbFF1ZXVlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLl9xdWV1ZSA9IGNsb25lQXJyYXkodGhpcy5fcXVldWUpO1xuICAgICAgdGhpcy5fYWRkVG9DdXIodGhpcy5fcXVldWUuc2hpZnQoKSk7XG4gICAgfVxuICB9LFxuXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzb3VyY2VzID0gdGhpcy5fY3VyU291cmNlc1xuICAgICAgLCBpO1xuICAgIHRoaXMuX2FjdGl2YXRpbmcgPSB0cnVlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSsrKSB7ICB0aGlzLl9zdWIoc291cmNlc1tpXSkgIH1cbiAgICB0aGlzLl9hY3RpdmF0aW5nID0gZmFsc2U7XG4gIH0sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvdXJjZXMgPSB0aGlzLl9jdXJTb3VyY2VzXG4gICAgICAsIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHsgIHRoaXMuX3Vuc3ViKHNvdXJjZXNbaV0pICB9XG4gIH0sXG5cbiAgX2lzRW1wdHk6IGZ1bmN0aW9uKCkgeyAgcmV0dXJuIHRoaXMuX2N1clNvdXJjZXMubGVuZ3RoID09PSAwICB9LFxuICBfb25FbXB0eTogZnVuY3Rpb24oKSB7fSxcblxuICBfY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fcXVldWUgPSBudWxsO1xuICAgIHRoaXMuX2N1clNvdXJjZXMgPSBudWxsO1xuICB9XG5cbn0pO1xuXG5cblxuXG5cbi8vIC5tZXJnZSgpXG5cbnZhciBNZXJnZUxpa2UgPSB7XG4gIF9vbkVtcHR5OiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faW5pdGlhbGlzZWQpIHsgIHRoaXMuX3NlbmQoJ2VuZCcsIG51bGwsIHRoaXMuX2FjdGl2YXRpbmcpICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIE1lcmdlKHNvdXJjZXMpIHtcbiAgX0Fic3RyYWN0UG9vbC5jYWxsKHRoaXMpO1xuICBpZiAoc291cmNlcy5sZW5ndGggPT09IDApIHsgIHRoaXMuX3NlbmQoJ2VuZCcpICB9IGVsc2UgeyAgdGhpcy5fYWRkQWxsKHNvdXJjZXMpICB9XG4gIHRoaXMuX2luaXRpYWxpc2VkID0gdHJ1ZTtcbn1cblxuaW5oZXJpdChNZXJnZSwgX0Fic3RyYWN0UG9vbCwgZXh0ZW5kKHtfbmFtZTogJ21lcmdlJ30sIE1lcmdlTGlrZSkpO1xuXG5LZWZpci5tZXJnZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IE1lcmdlKGFncnNUb0FycmF5KGFyZ3VtZW50cykpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiBLZWZpci5tZXJnZShbdGhpcywgb3RoZXJdKTtcbn1cblxuXG5cblxuLy8gLmNvbmNhdCgpXG5cbmZ1bmN0aW9uIENvbmNhdChzb3VyY2VzKSB7XG4gIF9BYnN0cmFjdFBvb2wuY2FsbCh0aGlzLCB7Y29uY3VyTGltOiAxLCBxdWV1ZUxpbTogLTF9KTtcbiAgaWYgKHNvdXJjZXMubGVuZ3RoID09PSAwKSB7ICB0aGlzLl9zZW5kKCdlbmQnKSAgfSBlbHNlIHsgIHRoaXMuX2FkZEFsbChzb3VyY2VzKSAgfVxuICB0aGlzLl9pbml0aWFsaXNlZCA9IHRydWU7XG59XG5cbmluaGVyaXQoQ29uY2F0LCBfQWJzdHJhY3RQb29sLCBleHRlbmQoe19uYW1lOiAnY29uY2F0J30sIE1lcmdlTGlrZSkpO1xuXG5LZWZpci5jb25jYXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBDb25jYXQoYWdyc1RvQXJyYXkoYXJndW1lbnRzKSk7XG59XG5cbk9ic2VydmFibGUucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiBLZWZpci5jb25jYXQoW3RoaXMsIG90aGVyXSk7XG59XG5cblxuXG5cblxuXG4vLyAucG9vbCgpXG5cbmZ1bmN0aW9uIFBvb2woKSB7XG4gIF9BYnN0cmFjdFBvb2wuY2FsbCh0aGlzKTtcbn1cblxuaW5oZXJpdChQb29sLCBfQWJzdHJhY3RQb29sLCB7XG5cbiAgX25hbWU6ICdwb29sJyxcblxuICBhZGQ6IGZ1bmN0aW9uKG9icykge1xuICAgIHRoaXMuX2FkZChvYnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG9icykge1xuICAgIHRoaXMuX3JlbW92ZShvYnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn0pO1xuXG5LZWZpci5wb29sID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9vbCgpO1xufVxuXG5cblxuXG5cbi8vIC5mbGF0TWFwKClcblxuZnVuY3Rpb24gRmxhdE1hcChzb3VyY2UsIGZuLCBvcHRpb25zKSB7XG4gIF9BYnN0cmFjdFBvb2wuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgdGhpcy5fc291cmNlID0gc291cmNlO1xuICB0aGlzLl9mbiA9IGZuID8gRm4oZm4sIDEpIDogbnVsbDtcbiAgdGhpcy5fbWFpbkVuZGVkID0gZmFsc2U7XG4gIHRoaXMuX2xhc3RDdXJyZW50ID0gbnVsbDtcbn1cblxuaW5oZXJpdChGbGF0TWFwLCBfQWJzdHJhY3RQb29sLCB7XG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgX0Fic3RyYWN0UG9vbC5wcm90b3R5cGUuX29uQWN0aXZhdGlvbi5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2FjdGl2YXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX3NvdXJjZS5vbkFueShbdGhpcy5faGFuZGxlTWFpblNvdXJjZSwgdGhpc10pO1xuICAgIHRoaXMuX2FjdGl2YXRpbmcgPSBmYWxzZTtcbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBfQWJzdHJhY3RQb29sLnByb3RvdHlwZS5fb25EZWFjdGl2YXRpb24uY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9zb3VyY2Uub2ZmQW55KFt0aGlzLl9oYW5kbGVNYWluU291cmNlLCB0aGlzXSk7XG4gIH0sXG5cbiAgX2hhbmRsZU1haW5Tb3VyY2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd2YWx1ZScpIHtcbiAgICAgIGlmICghZXZlbnQuY3VycmVudCB8fCB0aGlzLl9sYXN0Q3VycmVudCAhPT0gZXZlbnQudmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYWRkKHRoaXMuX2ZuID8gdGhpcy5fZm4uaW52b2tlKGV2ZW50LnZhbHVlKSA6IGV2ZW50LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RDdXJyZW50ID0gZXZlbnQudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pc0VtcHR5KCkpIHtcbiAgICAgICAgdGhpcy5fc2VuZCgnZW5kJywgbnVsbCwgZXZlbnQuY3VycmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tYWluRW5kZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfb25FbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX21haW5FbmRlZCkgeyAgdGhpcy5fc2VuZCgnZW5kJykgIH1cbiAgfSxcblxuICBfY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIF9BYnN0cmFjdFBvb2wucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5fbGFzdEN1cnJlbnQgPSBudWxsO1xuICB9XG5cbn0pO1xuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwID0gZnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIG5ldyBGbGF0TWFwKHRoaXMsIGZuKVxuICAgIC5zZXROYW1lKHRoaXMsICdmbGF0TWFwJyk7XG59XG5cbk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBMYXRlc3QgPSBmdW5jdGlvbihmbikge1xuICByZXR1cm4gbmV3IEZsYXRNYXAodGhpcywgZm4sIHtjb25jdXJMaW06IDEsIGRyb3A6ICdvbGQnfSlcbiAgICAuc2V0TmFtZSh0aGlzLCAnZmxhdE1hcExhdGVzdCcpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwRmlyc3QgPSBmdW5jdGlvbihmbikge1xuICByZXR1cm4gbmV3IEZsYXRNYXAodGhpcywgZm4sIHtjb25jdXJMaW06IDF9KVxuICAgIC5zZXROYW1lKHRoaXMsICdmbGF0TWFwRmlyc3QnKTtcbn1cblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcENvbmNhdCA9IGZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBuZXcgRmxhdE1hcCh0aGlzLCBmbiwge3F1ZXVlTGltOiAtMSwgY29uY3VyTGltOiAxfSlcbiAgICAuc2V0TmFtZSh0aGlzLCAnZmxhdE1hcENvbmNhdCcpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwV2l0aENvbmN1cnJlbmN5TGltaXQgPSBmdW5jdGlvbihmbiwgbGltaXQpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGxpbWl0ID09PSAwKSB7XG4gICAgcmVzdWx0ID0gS2VmaXIubmV2ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAobGltaXQgPCAwKSB7ICBsaW1pdCA9IC0xICB9XG4gICAgcmVzdWx0ID0gbmV3IEZsYXRNYXAodGhpcywgZm4sIHtxdWV1ZUxpbTogLTEsIGNvbmN1ckxpbTogbGltaXR9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0LnNldE5hbWUodGhpcywgJ2ZsYXRNYXBXaXRoQ29uY3VycmVuY3lMaW1pdCcpO1xufVxuXG5cblxuXG5cbi8vIC5zYW1wbGVkQnkoKVxuXG5mdW5jdGlvbiBTYW1wbGVkQnkocGFzc2l2ZSwgYWN0aXZlLCBjb21iaW5hdG9yKSB7XG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xuICBpZiAoYWN0aXZlLmxlbmd0aCA9PT0gMCkge1xuICAgIHRoaXMuX3NlbmQoJ2VuZCcpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3Bhc3NpdmVDb3VudCA9IHBhc3NpdmUubGVuZ3RoO1xuICAgIHRoaXMuX2NvbWJpbmF0b3IgPSBjb21iaW5hdG9yID8gRm4oY29tYmluYXRvcikgOiBudWxsO1xuICAgIHRoaXMuX3NvdXJjZXMgPSBjb25jYXQocGFzc2l2ZSwgYWN0aXZlKTtcbiAgICB0aGlzLl9hbGl2ZUNvdW50ID0gMDtcbiAgICB0aGlzLl9jdXJyZW50cyA9IG5ldyBBcnJheSh0aGlzLl9zb3VyY2VzLmxlbmd0aCk7XG4gICAgZmlsbEFycmF5KHRoaXMuX2N1cnJlbnRzLCBOT1RISU5HKTtcbiAgICB0aGlzLl9hY3RpdmF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fZW1pdEFmdGVyQWN0aXZhdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuX2VuZEFmdGVyQWN0aXZhdGlvbiA9IGZhbHNlO1xuICB9XG59XG5cbmluaGVyaXQoU2FtcGxlZEJ5LCBTdHJlYW0sIHtcblxuICBfbmFtZTogJ3NhbXBsZWRCeScsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuX3NvdXJjZXMubGVuZ3RoLFxuICAgICAgICBpO1xuICAgIHRoaXMuX2FsaXZlQ291bnQgPSBsZW5ndGggLSB0aGlzLl9wYXNzaXZlQ291bnQ7XG4gICAgdGhpcy5fYWN0aXZhdGluZyA9IHRydWU7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW2ldLm9uQW55KFt0aGlzLl9oYW5kbGVBbnksIHRoaXMsIGldKTtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZhdGluZyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9lbWl0QWZ0ZXJBY3RpdmF0aW9uKSB7XG4gICAgICB0aGlzLl9lbWl0QWZ0ZXJBY3RpdmF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbWl0SWZGdWxsKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5kQWZ0ZXJBY3RpdmF0aW9uKSB7XG4gICAgICB0aGlzLl9zZW5kKCdlbmQnLCBudWxsLCB0cnVlKTtcbiAgICB9XG4gIH0sXG5cbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW2ldLm9mZkFueShbdGhpcy5faGFuZGxlQW55LCB0aGlzLCBpXSk7XG4gICAgfVxuICB9LFxuXG4gIF9lbWl0SWZGdWxsOiBmdW5jdGlvbihpc0N1cnJlbnQpIHtcbiAgICBpZiAoIWNvbnRhaW5zKHRoaXMuX2N1cnJlbnRzLCBOT1RISU5HKSkge1xuICAgICAgdmFyIGNvbWJpbmVkID0gY2xvbmVBcnJheSh0aGlzLl9jdXJyZW50cyk7XG4gICAgICBpZiAodGhpcy5fY29tYmluYXRvcikge1xuICAgICAgICBjb21iaW5lZCA9IHRoaXMuX2NvbWJpbmF0b3IuYXBwbHkodGhpcy5fY3VycmVudHMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCBjb21iaW5lZCwgaXNDdXJyZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgX2hhbmRsZUFueTogZnVuY3Rpb24oaSwgZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgdGhpcy5fY3VycmVudHNbaV0gPSBldmVudC52YWx1ZTtcbiAgICAgIGlmIChpID49IHRoaXMuX3Bhc3NpdmVDb3VudCkge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgICAgIHRoaXMuX2VtaXRBZnRlckFjdGl2YXRpb24gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2VtaXRJZkZ1bGwoZXZlbnQuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGkgPj0gdGhpcy5fcGFzc2l2ZUNvdW50KSB7XG4gICAgICAgIHRoaXMuX2FsaXZlQ291bnQtLTtcbiAgICAgICAgaWYgKHRoaXMuX2FsaXZlQ291bnQgPT09IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgICAgICAgdGhpcy5fZW5kQWZ0ZXJBY3RpdmF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2VuZCgnZW5kJywgbnVsbCwgZXZlbnQuY3VycmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9jbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgU3RyZWFtLnByb3RvdHlwZS5fY2xlYXIuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9zb3VyY2VzID0gbnVsbDtcbiAgICB0aGlzLl9jdXJyZW50cyA9IG51bGw7XG4gIH1cblxufSk7XG5cbktlZmlyLnNhbXBsZWRCeSA9IGZ1bmN0aW9uKHBhc3NpdmUsIGFjdGl2ZSwgY29tYmluYXRvcikge1xuICByZXR1cm4gbmV3IFNhbXBsZWRCeShwYXNzaXZlLCBhY3RpdmUsIGNvbWJpbmF0b3IpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5zYW1wbGVkQnkgPSBmdW5jdGlvbihvdGhlciwgY29tYmluYXRvcikge1xuICByZXR1cm4gS2VmaXIuc2FtcGxlZEJ5KFt0aGlzXSwgW290aGVyXSwgY29tYmluYXRvcik7XG59XG5cblxuXG5cbi8vIC5jb21iaW5lKClcblxuS2VmaXIuY29tYmluZSA9IGZ1bmN0aW9uKHNvdXJjZXMsIGNvbWJpbmF0b3IpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBTYW1wbGVkQnkoW10sIHNvdXJjZXMsIGNvbWJpbmF0b3IpO1xuICByZXN1bHQuX25hbWUgPSAnY29tYmluZSc7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbk9ic2VydmFibGUucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbihvdGhlciwgY29tYmluYXRvcikge1xuICByZXR1cm4gS2VmaXIuY29tYmluZShbdGhpcywgb3RoZXJdLCBjb21iaW5hdG9yKTtcbn1cblxuZnVuY3Rpb24gcHJvZHVjZVN0cmVhbShTdHJlYW1DbGFzcywgUHJvcGVydHlDbGFzcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7ICByZXR1cm4gbmV3IFN0cmVhbUNsYXNzKHRoaXMsIGFyZ3VtZW50cykgIH1cbn1cbmZ1bmN0aW9uIHByb2R1Y2VQcm9wZXJ0eShTdHJlYW1DbGFzcywgUHJvcGVydHlDbGFzcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7ICByZXR1cm4gbmV3IFByb3BlcnR5Q2xhc3ModGhpcywgYXJndW1lbnRzKSAgfVxufVxuXG5cblxuLy8gLnRvUHJvcGVydHkoKVxuXG53aXRoT25lU291cmNlKCd0b1Byb3BlcnR5Jywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgYXJnc1swXSk7XG4gICAgfVxuICB9XG59LCB7cHJvcGVydHlNZXRob2Q6IG51bGwsIHN0cmVhbU1ldGhvZDogcHJvZHVjZVByb3BlcnR5fSk7XG5cblxuXG5cbi8vIC5jaGFuZ2VzKClcblxud2l0aE9uZVNvdXJjZSgnY2hhbmdlcycsIHtcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbih4LCBpc0N1cnJlbnQpIHtcbiAgICBpZiAoIWlzQ3VycmVudCkge1xuICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCB4KTtcbiAgICB9XG4gIH1cbn0sIHtzdHJlYW1NZXRob2Q6IG51bGwsIHByb3BlcnR5TWV0aG9kOiBwcm9kdWNlU3RyZWFtfSk7XG5cblxuXG5cbi8vIC53aXRoSGFuZGxlcigpXG5cbndpdGhPbmVTb3VyY2UoJ3dpdGhIYW5kbGVyJywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuX2hhbmRsZXIgPSBGbihhcmdzWzBdLCAyKTtcbiAgICB0aGlzLl9mb3JjZWRDdXJyZW50ID0gZmFsc2U7XG4gICAgdmFyICQgPSB0aGlzO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSB7XG4gICAgICBlbWl0OiBmdW5jdGlvbih4KSB7ICAkLl9zZW5kKCd2YWx1ZScsIHgsICQuX2ZvcmNlZEN1cnJlbnQpICB9LFxuICAgICAgZW5kOiBmdW5jdGlvbigpIHsgICQuX3NlbmQoJ2VuZCcsIG51bGwsICQuX2ZvcmNlZEN1cnJlbnQpICB9XG4gICAgfVxuICB9LFxuICBfZnJlZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faGFuZGxlciA9IG51bGw7XG4gICAgdGhpcy5fZW1pdHRlciA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVBbnk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fZm9yY2VkQ3VycmVudCA9IGV2ZW50LmN1cnJlbnQ7XG4gICAgdGhpcy5faGFuZGxlci5pbnZva2UodGhpcy5fZW1pdHRlciwgZXZlbnQpO1xuICAgIHRoaXMuX2ZvcmNlZEN1cnJlbnQgPSBmYWxzZTtcbiAgfVxufSk7XG5cblxuXG5cbnZhciB3aXRoRm5BcmdNaXhpbiA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHsgIHRoaXMuX2ZuID0gRm4oYXJnc1swXSwgMSkgIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHsgIHRoaXMuX2ZuID0gbnVsbCAgfVxufTtcblxuXG4vLyAubWFwKGZuKVxuXG53aXRoT25lU291cmNlKCdtYXAnLCBleHRlbmQoe1xuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHgsIGlzQ3VycmVudCkge1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5fZm4uaW52b2tlKHgpLCBpc0N1cnJlbnQpO1xuICB9XG59LCB3aXRoRm5BcmdNaXhpbikpO1xuXG5cblxuXG5cbi8vIC5maWx0ZXIoZm4pXG5cbndpdGhPbmVTb3VyY2UoJ2ZpbHRlcicsIGV4dGVuZCh7XG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgaWYgKHRoaXMuX2ZuLmludm9rZSh4KSkge1xuICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCB4LCBpc0N1cnJlbnQpO1xuICAgIH1cbiAgfVxufSwgd2l0aEZuQXJnTWl4aW4pKTtcblxuXG5cblxuXG4vLyAudGFrZVdoaWxlKGZuKVxuXG53aXRoT25lU291cmNlKCd0YWtlV2hpbGUnLCBleHRlbmQoe1xuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHgsIGlzQ3VycmVudCkge1xuICAgIGlmICh0aGlzLl9mbi5pbnZva2UoeCkpIHtcbiAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCwgaXNDdXJyZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VuZCgnZW5kJywgbnVsbCwgaXNDdXJyZW50KTtcbiAgICB9XG4gIH1cbn0sIHdpdGhGbkFyZ01peGluKSk7XG5cblxuXG5cblxuLy8gLnRha2Uobilcblxud2l0aE9uZVNvdXJjZSgndGFrZScsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl9uID0gYXJnc1swXTtcbiAgICBpZiAodGhpcy5fbiA8PSAwKSB7XG4gICAgICB0aGlzLl9zZW5kKCdlbmQnKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgdGhpcy5fbi0tO1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCwgaXNDdXJyZW50KTtcbiAgICBpZiAodGhpcy5fbiA9PT0gMCkge1xuICAgICAgdGhpcy5fc2VuZCgnZW5kJyk7XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuXG4vLyAuc2tpcChuKVxuXG53aXRoT25lU291cmNlKCdza2lwJywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuX24gPSBhcmdzWzBdIDwgMCA/IDAgOiBhcmdzWzBdO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHgsIGlzQ3VycmVudCkge1xuICAgIGlmICh0aGlzLl9uID09PSAwKSB7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgsIGlzQ3VycmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX24tLTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuXG4vLyAuc2tpcER1cGxpY2F0ZXMoW2ZuXSlcblxud2l0aE9uZVNvdXJjZSgnc2tpcER1cGxpY2F0ZXMnLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5fZm4gPSBhcmdzWzBdICYmIEZuKGFyZ3NbMF0sIDIpO1xuICAgIHRoaXMuX3ByZXYgPSBOT1RISU5HO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xuICB9LFxuICBfaXNFcXVhbDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiB0aGlzLl9mbiA/IHRoaXMuX2ZuLmludm9rZShhLCBiKSA6IGEgPT09IGI7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgaWYgKHRoaXMuX3ByZXYgPT09IE5PVEhJTkcgfHwgIXRoaXMuX2lzRXF1YWwodGhpcy5fcHJldiwgeCkpIHtcbiAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCwgaXNDdXJyZW50KTtcbiAgICAgIHRoaXMuX3ByZXYgPSB4O1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG5cblxuLy8gLnNraXBXaGlsZShmbilcblxud2l0aE9uZVNvdXJjZSgnc2tpcFdoaWxlJywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuX2ZuID0gRm4oYXJnc1swXSwgMSk7XG4gICAgdGhpcy5fc2tpcCA9IHRydWU7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgaWYgKCF0aGlzLl9za2lwKSB7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgsIGlzQ3VycmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fZm4uaW52b2tlKHgpKSB7XG4gICAgICB0aGlzLl9za2lwID0gZmFsc2U7XG4gICAgICB0aGlzLl9mbiA9IG51bGw7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgsIGlzQ3VycmVudCk7XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuXG4vLyAuZGlmZihzZWVkLCBmbilcblxud2l0aE9uZVNvdXJjZSgnZGlmZicsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl9wcmV2ID0gYXJnc1swXTtcbiAgICB0aGlzLl9mbiA9IEZuKGFyZ3NbMV0sIDIpO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHgsIGlzQ3VycmVudCkge1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5fZm4uaW52b2tlKHRoaXMuX3ByZXYsIHgpLCBpc0N1cnJlbnQpO1xuICAgIHRoaXMuX3ByZXYgPSB4O1xuICB9XG59KTtcblxuXG5cblxuXG4vLyAuc2NhbihzZWVkLCBmbilcblxud2l0aE9uZVNvdXJjZSgnc2NhbicsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIGFyZ3NbMF0sIHRydWUpO1xuICAgIHRoaXMuX2ZuID0gRm4oYXJnc1sxXSwgMik7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgdGhpcy5fc2VuZCgndmFsdWUnLCB0aGlzLl9mbi5pbnZva2UodGhpcy5fY3VycmVudCwgeCksIGlzQ3VycmVudCk7XG4gIH1cbn0sIHtzdHJlYW1NZXRob2Q6IHByb2R1Y2VQcm9wZXJ0eX0pO1xuXG5cblxuXG5cbi8vIC5yZWR1Y2Uoc2VlZCwgZm4pXG5cbndpdGhPbmVTb3VyY2UoJ3JlZHVjZScsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl9yZXN1bHQgPSBhcmdzWzBdO1xuICAgIHRoaXMuX2ZuID0gRm4oYXJnc1sxXSwgMik7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpe1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgICB0aGlzLl9yZXN1bHQgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHgpIHtcbiAgICB0aGlzLl9yZXN1bHQgPSB0aGlzLl9mbi5pbnZva2UodGhpcy5fcmVzdWx0LCB4KTtcbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24oX18sIGlzQ3VycmVudCkge1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5fcmVzdWx0LCBpc0N1cnJlbnQpO1xuICAgIHRoaXMuX3NlbmQoJ2VuZCcsIG51bGwsIGlzQ3VycmVudCk7XG4gIH1cbn0pO1xuXG5cblxuXG5cbi8vIC5kZWJvdW5jZSh3YWl0LCB7aW1tZWRpYXRlfSlcblxud2l0aE9uZVNvdXJjZSgnZGVib3VuY2UnLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5fd2FpdCA9IE1hdGgubWF4KDAsIGFyZ3NbMF0pO1xuICAgIHRoaXMuX2ltbWVkaWF0ZSA9IGdldChhcmdzWzFdLCAnaW1tZWRpYXRlJywgZmFsc2UpO1xuICAgIHRoaXMuX2xhc3RBdHRlbXB0ID0gMDtcbiAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMuX2xhdGVyVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX2VuZExhdGVyID0gZmFsc2U7XG4gICAgdmFyICQgPSB0aGlzO1xuICAgIHRoaXMuXyRsYXRlciA9IGZ1bmN0aW9uKCkgeyAgJC5fbGF0ZXIoKSAgfTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xhdGVyVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuXyRsYXRlciA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgaWYgKGlzQ3VycmVudCkge1xuICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCB4LCBpc0N1cnJlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXN0QXR0ZW1wdCA9IG5vdygpO1xuICAgICAgaWYgKHRoaXMuX2ltbWVkaWF0ZSAmJiAhdGhpcy5fdGltZW91dElkKSB7XG4gICAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX3RpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLl90aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuXyRsYXRlciwgdGhpcy5fd2FpdCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2ltbWVkaWF0ZSkge1xuICAgICAgICB0aGlzLl9sYXRlclZhbHVlID0geDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uKF9fLCBpc0N1cnJlbnQpIHtcbiAgICBpZiAoaXNDdXJyZW50KSB7XG4gICAgICB0aGlzLl9zZW5kKCdlbmQnLCBudWxsLCBpc0N1cnJlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fdGltZW91dElkICYmICF0aGlzLl9pbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5fZW5kTGF0ZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2VuZCgnZW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfbGF0ZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0ID0gbm93KCkgLSB0aGlzLl9sYXN0QXR0ZW1wdDtcbiAgICBpZiAobGFzdCA8IHRoaXMuX3dhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICB0aGlzLl90aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuXyRsYXRlciwgdGhpcy5fd2FpdCAtIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9pbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCB0aGlzLl9sYXRlclZhbHVlKTtcbiAgICAgICAgdGhpcy5fbGF0ZXJWYWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fZW5kTGF0ZXIpIHtcbiAgICAgICAgdGhpcy5fc2VuZCgnZW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuXG4vLyAudGhyb3R0bGUod2FpdCwge2xlYWRpbmcsIHRyYWlsaW5nfSlcblxud2l0aE9uZVNvdXJjZSgndGhyb3R0bGUnLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5fd2FpdCA9IE1hdGgubWF4KDAsIGFyZ3NbMF0pO1xuICAgIHRoaXMuX2xlYWRpbmcgPSBnZXQoYXJnc1sxXSwgJ2xlYWRpbmcnLCB0cnVlKTtcbiAgICB0aGlzLl90cmFpbGluZyA9IGdldChhcmdzWzFdLCAndHJhaWxpbmcnLCB0cnVlKTtcbiAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMuX2VuZExhdGVyID0gZmFsc2U7XG4gICAgdGhpcy5fbGFzdENhbGxUaW1lID0gMDtcbiAgICB2YXIgJCA9IHRoaXM7XG4gICAgdGhpcy5fJHRyYWlsaW5nQ2FsbCA9IGZ1bmN0aW9uKCkgeyAgJC5fdHJhaWxpbmdDYWxsKCkgIH07XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl8kdHJhaWxpbmdDYWxsID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbih4LCBpc0N1cnJlbnQpIHtcbiAgICBpZiAoaXNDdXJyZW50KSB7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgsIGlzQ3VycmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjdXJUaW1lID0gbm93KCk7XG4gICAgICBpZiAodGhpcy5fbGFzdENhbGxUaW1lID09PSAwICYmICF0aGlzLl9sZWFkaW5nKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDYWxsVGltZSA9IGN1clRpbWU7XG4gICAgICB9XG4gICAgICB2YXIgcmVtYWluaW5nID0gdGhpcy5fd2FpdCAtIChjdXJUaW1lIC0gdGhpcy5fbGFzdENhbGxUaW1lKTtcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgICB0aGlzLl9jYW5jZWxUcmFsaW5nKCk7XG4gICAgICAgIHRoaXMuX2xhc3RDYWxsVGltZSA9IGN1clRpbWU7XG4gICAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3RyYWlsaW5nKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbFRyYWxpbmcoKTtcbiAgICAgICAgdGhpcy5fdHJhaWxpbmdWYWx1ZSA9IHg7XG4gICAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IHNldFRpbWVvdXQodGhpcy5fJHRyYWlsaW5nQ2FsbCwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uKF9fLCBpc0N1cnJlbnQpIHtcbiAgICBpZiAoaXNDdXJyZW50KSB7XG4gICAgICB0aGlzLl9zZW5kKCdlbmQnLCBudWxsLCBpc0N1cnJlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fdGltZW91dElkKSB7XG4gICAgICAgIHRoaXMuX2VuZExhdGVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbmQoJ2VuZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2NhbmNlbFRyYWxpbmc6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl90aW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0SWQpO1xuICAgICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIF90cmFpbGluZ0NhbGw6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5fdHJhaWxpbmdWYWx1ZSk7XG4gICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0Q2FsbFRpbWUgPSAhdGhpcy5fbGVhZGluZyA/IDAgOiBub3coKTtcbiAgICBpZiAodGhpcy5fZW5kTGF0ZXIpIHtcbiAgICAgIHRoaXMuX3NlbmQoJ2VuZCcpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG5cblxuLy8gLmRlbGF5KClcblxud2l0aE9uZVNvdXJjZSgnZGVsYXknLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5fd2FpdCA9IE1hdGgubWF4KDAsIGFyZ3NbMF0pO1xuICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgICB2YXIgJCA9IHRoaXM7XG4gICAgdGhpcy5fJHNoaWZ0QnVmZiA9IGZ1bmN0aW9uKCkgeyAgJC5fc2VuZCgndmFsdWUnLCAkLl9idWZmLnNoaWZ0KCkpICB9XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9idWZmID0gbnVsbDtcbiAgICB0aGlzLl8kc2hpZnRCdWZmID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbih4LCBpc0N1cnJlbnQpIHtcbiAgICBpZiAoaXNDdXJyZW50KSB7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgsIGlzQ3VycmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5fJHNoaWZ0QnVmZiwgdGhpcy5fd2FpdCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbihfXywgaXNDdXJyZW50KSB7XG4gICAgaWYgKGlzQ3VycmVudCkge1xuICAgICAgdGhpcy5fc2VuZCgnZW5kJywgbnVsbCwgaXNDdXJyZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyICQgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgICQuX3NlbmQoJ2VuZCcpICB9LCB0aGlzLl93YWl0KTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBLZWZpci5mcm9tQmluZGVyKGZuKVxuXG5mdW5jdGlvbiBGcm9tQmluZGVyKGZuKSB7XG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xuICB0aGlzLl9mbiA9IEZuKGZuLCAxKTtcbiAgdGhpcy5fdW5zdWJzY3JpYmUgPSBudWxsO1xufVxuXG5pbmhlcml0KEZyb21CaW5kZXIsIFN0cmVhbSwge1xuXG4gIF9uYW1lOiAnZnJvbUJpbmRlcicsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyICQgPSB0aGlzXG4gICAgICAsIHVuc3ViXG4gICAgICAsIGlzQ3VycmVudCA9IHRydWVcbiAgICAgICwgZW1pdHRlciA9IHtcbiAgICAgICAgZW1pdDogZnVuY3Rpb24oeCkgeyAgJC5fc2VuZCgndmFsdWUnLCB4LCBpc0N1cnJlbnQpICB9LFxuICAgICAgICBlbmQ6IGZ1bmN0aW9uKCkgeyAgJC5fc2VuZCgnZW5kJywgbnVsbCwgaXNDdXJyZW50KSAgfVxuICAgICAgfTtcbiAgICB1bnN1YiA9IHRoaXMuX2ZuLmludm9rZShlbWl0dGVyKTtcbiAgICBpc0N1cnJlbnQgPSBmYWxzZTtcbiAgICBpZiAodW5zdWIpIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gRm4odW5zdWIsIDApO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fdW5zdWJzY3JpYmUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlLmludm9rZSgpO1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICBfY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9XG5cbn0pXG5cbktlZmlyLmZyb21CaW5kZXIgPSBmdW5jdGlvbihmbikge1xuICByZXR1cm4gbmV3IEZyb21CaW5kZXIoZm4pO1xufVxuXG5cblxuXG5cblxuLy8gS2VmaXIuZW1pdHRlcigpXG5cbmZ1bmN0aW9uIEVtaXR0ZXIoKSB7XG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG5pbmhlcml0KEVtaXR0ZXIsIFN0cmVhbSwge1xuICBfbmFtZTogJ2VtaXR0ZXInLFxuICBlbWl0OiBmdW5jdGlvbih4KSB7ICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgpICB9LFxuICBlbmQ6IGZ1bmN0aW9uKCkgeyAgdGhpcy5fc2VuZCgnZW5kJykgIH1cbn0pO1xuXG5LZWZpci5lbWl0dGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgRW1pdHRlcigpO1xufVxuXG5cblxuXG5cblxuXG4vLyBLZWZpci5uZXZlcigpXG5cbnZhciBuZXZlck9iaiA9IG5ldyBTdHJlYW0oKTtcbm5ldmVyT2JqLl9zZW5kKCdlbmQnKTtcbm5ldmVyT2JqLl9uYW1lID0gJ25ldmVyJztcbktlZmlyLm5ldmVyID0gZnVuY3Rpb24oKSB7ICByZXR1cm4gbmV2ZXJPYmogIH1cblxuXG5cblxuXG4vLyBLZWZpci5jb25zdGFudCh4KVxuXG5mdW5jdGlvbiBDb25zdGFudCh4KSB7XG4gIFByb3BlcnR5LmNhbGwodGhpcyk7XG4gIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCk7XG4gIHRoaXMuX3NlbmQoJ2VuZCcpO1xufVxuXG5pbmhlcml0KENvbnN0YW50LCBQcm9wZXJ0eSwge1xuICBfbmFtZTogJ2NvbnN0YW50J1xufSlcblxuS2VmaXIuY29uc3RhbnQgPSBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBuZXcgQ29uc3RhbnQoeCk7XG59XG5cblxuLy8gLnNldE5hbWVcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2V0TmFtZSA9IGZ1bmN0aW9uKHNvdXJjZU9icywgc2VsZk5hbWUgLyogb3IganVzdCBzZWxmTmFtZSAqLykge1xuICB0aGlzLl9uYW1lID0gc2VsZk5hbWUgPyBzb3VyY2VPYnMuX25hbWUgKyAnLicgKyBzZWxmTmFtZSA6IHNvdXJjZU9icztcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyAubWFwVG9cblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUubWFwVG8gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7ICByZXR1cm4gdmFsdWUgIH0pLnNldE5hbWUodGhpcywgJ21hcFRvJyk7XG59XG5cblxuXG4vLyAucGx1Y2tcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUucGx1Y2sgPSBmdW5jdGlvbihwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geFtwcm9wZXJ0eU5hbWVdO1xuICB9KS5zZXROYW1lKHRoaXMsICdwbHVjaycpO1xufVxuXG5cblxuLy8gLmludm9rZVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbihtZXRob2ROYW1lIC8qLCBhcmcxLCBhcmcyLi4uICovKSB7XG4gIHZhciBhcmdzID0gcmVzdChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gdGhpcy5tYXAoYXJncyA/XG4gICAgZnVuY3Rpb24oeCkgeyAgcmV0dXJuIGFwcGx5KHhbbWV0aG9kTmFtZV0sIHgsIGFyZ3MpICB9IDpcbiAgICBmdW5jdGlvbih4KSB7ICByZXR1cm4geFttZXRob2ROYW1lXSgpICB9XG4gICkuc2V0TmFtZSh0aGlzLCAnaW52b2tlJyk7XG59XG5cblxuXG4vLyAudGFwXG5cbk9ic2VydmFibGUucHJvdG90eXBlLnRhcCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGZuID0gRm4oZm4sIDEpO1xuICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oeCkge1xuICAgIGZuLmludm9rZSh4KTtcbiAgICByZXR1cm4geDtcbiAgfSkuc2V0TmFtZSh0aGlzLCAndGFwJyk7XG59XG5cblxuXG4vLyAuYW5kXG5cbktlZmlyLmFuZCA9IGZ1bmN0aW9uKG9ic2VydmFibGVzKSB7XG4gIHJldHVybiBLZWZpci5jb21iaW5lKG9ic2VydmFibGVzLCBhbmQpLnNldE5hbWUoJ2FuZCcpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy5jb21iaW5lKG90aGVyLCBhbmQpLnNldE5hbWUoJ2FuZCcpO1xufVxuXG5cblxuLy8gLm9yXG5cbktlZmlyLm9yID0gZnVuY3Rpb24ob2JzZXJ2YWJsZXMpIHtcbiAgcmV0dXJuIEtlZmlyLmNvbWJpbmUob2JzZXJ2YWJsZXMsIG9yKS5zZXROYW1lKCdvcicpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLmNvbWJpbmUob3RoZXIsIG9yKS5zZXROYW1lKCdvcicpO1xufVxuXG5cblxuLy8gLm5vdFxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5ub3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHgpIHsgIHJldHVybiAheCAgfSkuc2V0TmFtZSh0aGlzLCAnbm90Jyk7XG59XG5cblxuXG4vLyAuYXdhaXRpbmdcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuYXdhaXRpbmcgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gS2VmaXIubWVyZ2UoW1xuICAgIHRoaXMubWFwVG8odHJ1ZSksXG4gICAgb3RoZXIubWFwVG8oZmFsc2UpXG4gIF0pLnNraXBEdXBsaWNhdGVzKCkudG9Qcm9wZXJ0eShmYWxzZSkuc2V0TmFtZSh0aGlzLCAnYXdhaXRpbmcnKTtcbn1cblxuXG5cbi8vIC5maWx0ZXJCeVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5maWx0ZXJCeSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiBvdGhlclxuICAgIC5zYW1wbGVkQnkodGhpcylcbiAgICAud2l0aEhhbmRsZXIoZnVuY3Rpb24oZW1pdHRlciwgZSkge1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgZW1pdHRlci5lbmQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS52YWx1ZVswXSkge1xuICAgICAgICBlbWl0dGVyLmVtaXQoZS52YWx1ZVsxXSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuc2V0TmFtZSh0aGlzLCAnZmlsdGVyQnknKTtcbn1cblxuXG5cblxuLy8gLmZyb21DYWxsYmFja1xuXG5LZWZpci5mcm9tQ2FsbGJhY2sgPSBmdW5jdGlvbihjYWxsYmFja0NvbnN1bWVyKSB7XG4gIGNhbGxiYWNrQ29uc3VtZXIgPSBGbihjYWxsYmFja0NvbnN1bWVyLCAxKTtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gS2VmaXIuZnJvbUJpbmRlcihmdW5jdGlvbihlbWl0dGVyKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxiYWNrQ29uc3VtZXIuaW52b2tlKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgZW1pdHRlci5lbWl0KHgpO1xuICAgICAgICBlbWl0dGVyLmVuZCgpO1xuICAgICAgfSk7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSkuc2V0TmFtZSgnZnJvbUNhbGxiYWNrJyk7XG59XG5cblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBLZWZpcjtcbiAgICB9KTtcbiAgICBnbG9iYWwuS2VmaXIgPSBLZWZpcjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLZWZpcjtcbiAgICBLZWZpci5LZWZpciA9IEtlZmlyO1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5LZWZpciA9IEtlZmlyO1xuICB9XG5cbn0odGhpcykpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L34va2VmaXIvZGlzdC9rZWZpci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCIvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzXCJcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFM0xqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhkcFpIUm9QU0k0T0hCNElpQm9aV2xuYUhROUlqSXljSGdpSUhacFpYZENiM2c5SWpBZ01DQTRPQ0F5TWlJZ1pXNWhZbXhsTFdKaFkydG5jbTkxYm1ROUltNWxkeUF3SURBZ09EZ2dNaklpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnbzhaejRLQ1R4blBnb0pDVHhuUGdvSkNRazhjR0YwYUNCbWFXeHNQU0lqUlVReFFUTkNJaUJrUFNKTk1qQXVPREEwTERBdU56RmpMVE11T1RBMUxEQXROQzQyTkRrc01pNHlPVGt0TlM0NE1UUXNNeTQ1Tnpsak1Dd3dMVE11TVRZNExEUXVPREkxTFRRdU16Y3pMRFl1TmpZeVREZ3VNREU0TERBdU56Rm9MVFl1T1RnS0NRa0pDVXcxTGpRMExERTRMalV6TTJNd0xqa3hNaXd6TGpFNE5Dd3pMalV3TkN3eUxqazRNU3d6TGpVd05Dd3lMams0TVdNeExqYzNOU3d3TERNdU1UQTJMVEF1T1RReExEUXVNekV5TFRJdU56SXlUREkxTGpFek1Td3dMamN4Q2drSkNRbERNalV1TVRNeExEQXVOekVzTWpBdU9UYzNMREF1TnpFc01qQXVPREEwTERBdU56RjZJRTAyTXk0NU5Ea3NNQzQzTVdNdE15NDVNRFVzTUMwMExqWTBPU3d5TGpJNU9TMDFMamd4TkN3ekxqazNPV013TERBdE15NHhOamNzTkM0NE1qVXROQzR6TnpRc05pNDJOakpNTlRFdU1UWXpMREF1TnpFS0NRa0pDV2d0Tmk0NU9ERnNOQzQwTURNc01UY3VPREl6WXpBdU9URXhMRE11TVRnMExETXVOVEEwTERJdU9UZ3hMRE11TlRBMExESXVPVGd4WXpFdU56YzFMREFzTXk0eE1EVXRNQzQ1TkRFc05DNHpNVEl0TWk0M01qSk1Oamd1TWpjMkxEQXVOekVLQ1FrSkNVTTJPQzR5TnpZc01DNDNNU3cyTkM0eE1qSXNNQzQzTVN3Mk15NDVORGtzTUM0M01Yb2dUVGMzTGpFMU9Td3dMakkyTkVNM01DNHpNVGNzTUM0eU5qSXNOalF1T1RRc05TNDVPVElzTmpRdU56STRMREV5TGpFM053b0pDUWtKWXkwd0xqRTROeXcxTGpReU5pd3pMalExTVN3NUxqVTJNeXc1TGpZNE9TdzVMalUyTkdNMkxqZzRNU3d3TERFeUxqSTFPQzAxTGpjeU9Td3hNaTQwTnpFdE1URXVPVFV5UXpnM0xqQTNNeXcwTGpRd01TdzRNeTQwTXpZc01DNHlOalVzTnpjdU1UVTVMREF1TWpZMGVnb0pDUWtKSUUwM05TNHdOakVzTVRVdU16bGpMVEl1TURVM0xEQXRNeTQwTURVdE1TNHpOamt0TXk0ek1qY3RNeTQxTkRaak1DNHdPRGd0TWk0ME5UY3NNaTR3TmpFdE5TNHlNeXcwTGpneE9DMDFMakl6WXpJdU1EVTRMREFzTXk0ME1EVXNNUzR6TnpFc015NHpNamtzTXk0MU1USUtDUWtKQ1VNM09TNDNPVElzTVRJdU5qRTNMRGMzTGpneE9Dd3hOUzR6T1RFc056VXVNRFl4TERFMUxqTTVlaUJOTXpRdU16RTRMREF1TWpVNVl5MDJMamcwTkMwd0xqQXdNaTB4TWk0eU1Ua3NOUzQzTWpndE1USXVORE15TERFeExqa3hNd29KQ1FrSll5MHdMakU0Tnl3MUxqUXlOeXd6TGpRMU1pdzVMalUyTXl3NUxqWTRPU3c1TGpVMk5HTTBMamswTml3d0xEa3VNVEUxTFRJdU9UWXlMREV4TGpFME9DMDJMamt6TjJ3dE55NDJNRFlzTUdNdE1DNDRNalVzTUM0M01ETXRNUzQ0TXpRc01TNHhORGd0TWk0NU5qUXNNUzR4TkRnS0NRa0pDV010TVM0NU5USXNNQzB6TGpNeE5pMHhMakUzTWkwekxqVTRMVE11TURrMGJERXpMakEwTVN3d0xqQXdNV014TGpBek15d3dMREV1T1RrMUxUQXVNVFE0TERJdU1qRXlMVEV1TWpJMVl6QXVNVEl6TFRBdU5qQTNMREF1TVRrNExURXVNakl6TERBdU1qRTVMVEV1T0RRMkNna0pDUWxETkRRdU1qTXlMRFF1TXprMkxEUXdMalU1TkN3d0xqSTJMRE0wTGpNeE9Dd3dMakkxT1hvZ1RUTTJMamN3T1N3NExqWTBOR2d0Tnk0eE16ZGpNQzQ1TXkweExqUTROaXd5TGpReE5pMHlMalU1Tml3MExqSXdOUzB5TGpVNU5nb0pDUWtKWXpFdU5qSXpMREFzTWk0NE16WXNNQzQ0TVRNc015NHpOVElzTWk0eE9FTXpOeTR5TURNc09DNDFNVFFzTXpjdU1ESXlMRGd1TmpRMExETTJMamN3T1N3NExqWTBOSG9pTHo0S0NRazhMMmMrQ2drOEwyYytDand2Wno0S1BDOXpkbWMrQ2c9PVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vdmV2by1oZWFkZXIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiY29tcG9uZW50LmpzIn0=