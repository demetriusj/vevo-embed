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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


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

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	
	var React = __webpack_require__(7)
	  , pellet = __webpack_require__(9)
	__webpack_require__(3)
	
	if(true) {
	  var vevoAPI = __webpack_require__(22);
	  var youtube = __webpack_require__(15);
	
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

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

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

/***/ 9:
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
	if(false) {
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
	if(true) {
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

/***/ 12:
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

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	
	/**
	 * Module dependencies
	 */
	
	var React = __webpack_require__(7);
	var sdk = __webpack_require__(16)('https://www.youtube.com/iframe_api', 'YT');
	var loadTrigger = sdk.trigger();
	
	// YT API requires global ready event handler
	window.onYouTubeIframeAPIReady = function () {
	  loadTrigger();
	  delete window.onYouTubeIframeAPIReady;
	};
	
	function noop() {}
	
	/**
	 * Separates video ID from valid YouTube URL
	 *
	 * @param {string} url
	 * @return {string}
	 */
	
	function getVideoId(url) {
	  var regex = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/;
	  if (url) return url.match(regex)[5];
	}
	
	/**
	 * Simple wrapper over YouTube JavaScript API
	 */
	
	module.exports = React.createClass({displayName: 'exports',
	  propTypes: {
	    id: React.PropTypes.string,
	    url: React.PropTypes.string,
	    autoplay: React.PropTypes.bool,
	    playing: React.PropTypes.func,
	    stopped: React.PropTypes.func,
	    ended: React.PropTypes.func
	  },
	
	  getDefaultProps: function() {
	    return {
	      id: 'react-yt-player',
	      url: undefined,
	      autoplay: false,
	      playing: noop,
	      stopped: noop,
	      ended: noop
	    };
	  },
	
	  /**
	   * Once YouTube API had loaded, a new YT.Player
	   * instance will be created and its events bound.
	   */
	  
	  componentDidMount: function() {
	    var _this = this;
	    // called once API has loaded.
	    sdk(function(err, youtube) {
	      var player = new youtube.Player(_this.props.id, {
	        videoId: getVideoId(_this.props.url),
	        events: {
	          'onStateChange': _this._handlePlayerStateChange
	        }
	      });
	
	      _this.setState({player: player});
	    });
	  },
	
	  componentWillUpdate: function(nextProps) {
	    if (this.props.url !== nextProps.url) {
	      this._loadNewUrl(nextProps.url);
	    }
	  },
	
	  /**
	   * Start a new video
	   *
	   * @param {string} url
	   */
	  
	  _loadNewUrl: function(url) {
	    this.props.autoplay
	      ? this.state.player.loadVideoById(getVideoId(url))
	      : this.state.player.cueVideoById(getVideoId(url));
	  },
	
	  /**
	   * Respond to player events
	   *
	   * @param {object} event
	   */
	  
	  _handlePlayerStateChange: function(event) {
	    switch(event.data) {
	      case 0: 
	        this.props.ended();
	        break;
	
	      case 1:
	        this.props.playing();
	        break;
	
	      case 2:
	        this.props.stopped();
	        break;
	
	      default: 
	        return;
	    }
	  },
	
	  render: function() {
	    return (
	      React.DOM.div({id: this.props.id})
	    );
	  }
	});


/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var pubsub = __webpack_require__(17);
	var loadScript = __webpack_require__(18);
	
	module.exports = requireSDK;
	
	function requireSDK (url, global) {
	  var onReady = pubsub();
	
	  var hasManualTrigger;
	  var isLoading;
	  var isLoaded;
	
	  load.trigger = setManualTrigger;
	
	  return load;
	
	  function isAlreadyLoaded () {
	    return window[global];
	  }
	
	  function load (callback) {
	    if (isAlreadyLoaded() || isLoaded) {
	      return callback && callback(undefined, window[global]);
	    }
	
	    callback && onReady.subscribe(callback);
	
	    if (isLoading) return;
	
	    isLoading = true;
	
	    if (!url) return;
	
	    loadScript(url, function (error) {
	      if (hasManualTrigger) return;
	
	      if (error) {
	        isLoaded = true;
	        return onReady.publish(error);
	      }
	
	      trigger();
	    });
	
	  };
	
	  function trigger () {
	    isLoaded = true;
	    onReady.publish(undefined, global ? window[global] : undefined);
	  }
	
	  function setManualTrigger () {
	    hasManualTrigger = true;
	    return trigger;
	  }
	
	
	}


/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	module.exports = PubSub;
	
	function PubSub(mix){
	
	  var proxy = mix || function pubsubProxy(){
	    arguments.length && sub.apply(undefined, arguments);
	  };
	
	  function sub(callback){
	    subscribe(proxy, callback);
	  }
	
	  function subOnce(callback){
	    once(proxy, callback);
	  }
	
	  function unsubOnce(callback){
	    unsubscribeOnce(proxy, callback);
	  }
	
	  function unsub(callback){
	    unsubscribe(proxy, callback);
	  }
	
	  function pub(){
	    var args = [proxy];
	    Array.prototype.push.apply(args, arguments);
	    publish.apply(undefined, args);
	  }
	
	  proxy.subscribers        = [];
	  proxy.subscribersForOnce = [];
	
	  proxy.subscribe          = sub;
	  proxy.subscribe.once     = subOnce;
	  proxy.unsubscribe        = unsub;
	  proxy.unsubscribe.once   = unsubOnce;
	  proxy.publish            = pub;
	
	  return proxy;
	}
	
	/**
	 * Publish "from" by applying given args
	 *
	 * @param {Function} from
	 * @param {...Any} args
	 */
	function publish(from){
	
	  var args = Array.prototype.slice.call(arguments, 1);
	
	  if (from && from.subscribers && from.subscribers.length > 0) {
	    from.subscribers.forEach(function(cb, i){
	      if(!cb) return;
	
	      try {
	        cb.apply(undefined, args);
	      } catch(exc) {
	        setTimeout(function(){ throw exc; }, 0);
	      }
	    });
	  }
	
	  if (from && from.subscribersForOnce && from.subscribersForOnce.length > 0) {
	    from.subscribersForOnce.forEach(function(cb, i){
	      if(!cb) return;
	
	      try {
	        cb.apply(undefined, args);
	      } catch(exc) {
	        setTimeout(function(){ throw exc; }, 0);
	      }
	    });
	
	    from.subscribersForOnce = [];
	
	  }
	
	}
	
	/**
	 * Subscribe callback to given pubsub object.
	 *
	 * @param {Pubsub} to
	 * @param {Function} callback
	 */
	function subscribe(to, callback){
	  if(!callback) return false;
	  return to.subscribers.push(callback);
	}
	
	
	/**
	 * Subscribe callback to given pubsub object for only one publish.
	 *
	 * @param {Pubsub} to
	 * @param {Function} callback
	 */
	function once(to, callback){
	  if(!callback) return false;
	
	  return to.subscribersForOnce.push(callback);
	}
	
	/**
	 * Unsubscribe callback to given pubsub object.
	 *
	 * @param {Pubsub} to
	 * @param {Function} callback
	 */
	function unsubscribe(to, callback){
	  var i = to.subscribers.length;
	
	  while(i--){
	    if(to.subscribers[i] && to.subscribers[i] == callback){
	      to.subscribers[i] = undefined;
	
	      return i;
	    }
	  }
	
	  return false;
	}
	
	
	/**
	 * Unsubscribe callback subscribed for once to specified pubsub.
	 *
	 * @param {Pubsub} to
	 * @param {Function} callback
	 * @return {Boolean or Number}
	 */
	function unsubscribeOnce(to, callback){
	  var i = to.subscribersForOnce.length;
	
	  while(i--){
	    if(to.subscribersForOnce[i] && to.subscribersForOnce[i] == callback){
	      to.subscribersForOnce[i] = undefined;
	
	      return i;
	    }
	  }
	
	  return false;
	}


/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = function load (src, cb) {
	  var head = document.head || document.getElementsByTagName('head')[0]
	  var script = document.createElement('script')
	
	  cb = cb || function() {};
	
	  script.type = 'text/javascript'
	  script.charset = 'utf8'
	  script.async = true
	  script.src = src
	
	  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
	  onend(script, cb)
	
	  // some good legacy browsers (firefox) fail the 'in' detection above
	  // so as a fallback we always set onload
	  // old IE will ignore this and new IE will set onload
	  if (!script.onload) {
	    stdOnEnd(script, cb);
	  }
	
	  head.appendChild(script)
	}
	
	function stdOnEnd (script, cb) {
	  script.onload = function () {
	    this.onerror = this.onload = null
	    cb()
	  }
	  script.onerror = function () {
	    // this.onload = null here is necessary
	    // because even IE9 works not like others
	    this.onerror = this.onload = null
	    cb(new Error('Failed to load ' + this.src))
	  }
	}
	
	function ieOnEnd (script, cb) {
	  script.onreadystatechange = function () {
	    if (this.readyState != 'complete' && this.readyState != 'loaded') return
	    this.onreadystatechange = null
	    cb(null, true) // there is no way to catch loading errors in IE8
	  }
	}


/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSI4OHB4IiBoZWlnaHQ9IjIycHgiIHZpZXdCb3g9IjAgMCA4OCAyMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgODggMjIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjRUQxQTNCIiBkPSJNMjAuODA0LDAuNzFjLTMuOTA1LDAtNC42NDksMi4yOTktNS44MTQsMy45NzljMCwwLTMuMTY4LDQuODI1LTQuMzczLDYuNjYyTDguMDE4LDAuNzFoLTYuOTgKCQkJCUw1LjQ0LDE4LjUzM2MwLjkxMiwzLjE4NCwzLjUwNCwyLjk4MSwzLjUwNCwyLjk4MWMxLjc3NSwwLDMuMTA2LTAuOTQxLDQuMzEyLTIuNzIyTDI1LjEzMSwwLjcxCgkJCQlDMjUuMTMxLDAuNzEsMjAuOTc3LDAuNzEsMjAuODA0LDAuNzF6IE02My45NDksMC43MWMtMy45MDUsMC00LjY0OSwyLjI5OS01LjgxNCwzLjk3OWMwLDAtMy4xNjcsNC44MjUtNC4zNzQsNi42NjJMNTEuMTYzLDAuNzEKCQkJCWgtNi45ODFsNC40MDMsMTcuODIzYzAuOTExLDMuMTg0LDMuNTA0LDIuOTgxLDMuNTA0LDIuOTgxYzEuNzc1LDAsMy4xMDUtMC45NDEsNC4zMTItMi43MjJMNjguMjc2LDAuNzEKCQkJCUM2OC4yNzYsMC43MSw2NC4xMjIsMC43MSw2My45NDksMC43MXogTTc3LjE1OSwwLjI2NEM3MC4zMTcsMC4yNjIsNjQuOTQsNS45OTIsNjQuNzI4LDEyLjE3NwoJCQkJYy0wLjE4Nyw1LjQyNiwzLjQ1MSw5LjU2Myw5LjY4OSw5LjU2NGM2Ljg4MSwwLDEyLjI1OC01LjcyOSwxMi40NzEtMTEuOTUyQzg3LjA3Myw0LjQwMSw4My40MzYsMC4yNjUsNzcuMTU5LDAuMjY0egoJCQkJIE03NS4wNjEsMTUuMzljLTIuMDU3LDAtMy40MDUtMS4zNjktMy4zMjctMy41NDZjMC4wODgtMi40NTcsMi4wNjEtNS4yMyw0LjgxOC01LjIzYzIuMDU4LDAsMy40MDUsMS4zNzEsMy4zMjksMy41MTIKCQkJCUM3OS43OTIsMTIuNjE3LDc3LjgxOCwxNS4zOTEsNzUuMDYxLDE1LjM5eiBNMzQuMzE4LDAuMjU5Yy02Ljg0NC0wLjAwMi0xMi4yMTksNS43MjgtMTIuNDMyLDExLjkxMwoJCQkJYy0wLjE4Nyw1LjQyNywzLjQ1Miw5LjU2Myw5LjY4OSw5LjU2NGM0Ljk0NiwwLDkuMTE1LTIuOTYyLDExLjE0OC02LjkzN2wtNy42MDYsMGMtMC44MjUsMC43MDMtMS44MzQsMS4xNDgtMi45NjQsMS4xNDgKCQkJCWMtMS45NTIsMC0zLjMxNi0xLjE3Mi0zLjU4LTMuMDk0bDEzLjA0MSwwLjAwMWMxLjAzMywwLDEuOTk1LTAuMTQ4LDIuMjEyLTEuMjI1YzAuMTIzLTAuNjA3LDAuMTk4LTEuMjIzLDAuMjE5LTEuODQ2CgkJCQlDNDQuMjMyLDQuMzk2LDQwLjU5NCwwLjI2LDM0LjMxOCwwLjI1OXogTTM2LjcwOSw4LjY0NGgtNy4xMzdjMC45My0xLjQ4NiwyLjQxNi0yLjU5Niw0LjIwNS0yLjU5NgoJCQkJYzEuNjIzLDAsMi44MzYsMC44MTMsMy4zNTIsMi4xOEMzNy4yMDMsOC41MTQsMzcuMDIyLDguNjQ0LDM2LjcwOSw4LjY0NHoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	// In the web.webpack config request is alias to browser-request
	// a proxy version of request built to run in browsers using XHR
	var request = __webpack_require__(81)
	  , lru = __webpack_require__(24);
	
	var endpoint = 'https://stg-apiv2.vevo.com';
	
	/**
	 * DAL is the data access layer.
	 *
	 * @constructor
	 * @class DAL
	 * @return foobar
	 */
	function DAL() {
	  this.accessToken = this.tokenExpires = null;
	  this.requestQue = [];
	  this.cache = lru({
	    max: 500,
	    maxAge: 60000, // 1 min
	    stale: false
	  });
	}
	
	DAL.prototype.refreshAccessToken = function() {
	
	  var self = this;
	  request.post(endpoint + '/oauth/token')
	    .set('Content-Type', 'application/json')
	    .send(JSON.stringify({
	      client_id: 'b950d913dc384d0583dfe73f65f34255',
	      client_secret: 'a07a3f08e9fb4695b288ba707977ad21',
	      grant_type: 'client_credentials',
	      country: 'US',
	      locale: 'en-us'
	    }))
	    .end(function(res) {
	      if(res.error) {
	        console.error('Cannot get access token because:', res.error, res.body);
	      }
	
	      body = res.body;
	
	      self.accessToken = body.access_token;
	      self.tokenExpires = body.expires_in;
	
	      var cmd;
	      while(cmd = self.requestQue.shift()) {
	        cmd.fn.apply(self, cmd.args);
	      }
	    });
	}
	
	DAL.prototype.get = function(cacheKey, url, next) {
	  if(!this.accessToken || this.tokenTimeout =='bad') {
	    this.requestQue.push({fn:this.get, args:[cacheKey, url, next]});
	    this.refreshAccessToken();
	    return;
	  }
	
	  if(cacheKey) {
	    var data = this.cache.get(cacheKey);
	    if (data) {
	      return next(null, data);
	    }
	  }
	
	  url = endpoint + url;
	  if(url.indexOf('?') == -1) {
	    url += '?token=' + this.accessToken;
	  } else {
	    url += '&token=' + this.accessToken;
	  }
	
	  var self = this;
	
	  request.get(url, function(res) {
	    if(res.error) {
	      return next(new Error('Cannot get because:'+res.error));
	    }
	
	    if(res.status != 200) {
	      return next(new Error('Failed because:'+res.status));
	    }
	
	    body = res.body;
	
	    if(cacheKey) {
	      self.cache.set(cacheKey, body);
	    }
	
	    next(null, body);
	  });
	}
	
	DAL.prototype.getNowFeed = function(next) {
	  this.get('now-feed', '/now?page=1&size=40', next);
	}
	
	DAL.prototype.getPlaylist = function(id, next) {
	  this.get('PL-' + id, '/playlist/' + id, function(err, playlistData) {
	    if(err) {
	      return next(err);
	    }
	
	    for(var j in playlistData.videos) {
	      var i, details={}, data = playlistData.videos[j];
	
	      // merge in stuff we need for our view
	      for(i in data.artists) {
	        item = data.artists[i];
	        if(item.role == 'Main') {
	          data.artist = item.name;
	          data.artistUrl = '/artist/'+item.urlSafeName;
	          data.artistImg = item.thumbnailUrl.replace(/^[^:]+:/,'');
	          break;
	        }
	      }
	
	      for(i in data.credits) {
	        item = data.credits[i];
	
	        if(!details[item.name]) details[item.name] = [item.value];
	        else details[item.name].push(item.value);
	      }
	
	      for(i in details) {
	        data[i] = details[i].join(',');
	      }
	    }
	
	    next(null, playlistData);
	  });
	}
	
	DAL.prototype.getArtist = function(id, next) {
	  this.get('A-' + id, '/artist/' + id, next);
	}
	
	DAL.prototype.getArtists = function(next) {
	  this.get('artists', '/artist', next);
	}
	
	DAL.prototype.getVideo = function(id, next) {
	  this.get('V-' + id, '/video/' + id, function(err, data) {
	    var i, details={};
	
	    if(err) {
	      return next(err);
	    }
	
	    // merge in stuff we need for our view
	    for(i in data.artists) {
	      item = data.artists[i];
	      if(item.role == 'Main') {
	        data.artist = item.name;
	        data.artistUrl = '/artist/'+item.urlSafeName;
	        data.artistImg = item.thumbnailUrl.replace(/^[^:]+:/,'');
	        break;
	      }
	    }
	
	    for(i in data.credits) {
	      item = data.credits[i];
	
	      if(!details[item.name]) details[item.name] = [item.value];
	      else details[item.name].push(item.value);
	    }
	
	    for(i in details) {
	      data[i] = details[i].join(',');
	    }
	
	    next(null, data);
	  });
	}
	
	DAL.prototype.searchVideo = function(options, next) {
	  if(!options) options = {};
	  if(!options.page) options.page = 1;
	  if(!options.size) options.size = 6;
	
	  var url = '/videos?page='+options.page+'&size='+options.size;
	  var id = options.page.toString() + options.size;
	
	  if(options.sort) {
	    id += options.sort;
	    url += '&sort=' + options.sort;
	  }
	
	  // todo: need to make static mappings and check undefined
	
	  if(options.ispremiere) {
	    id += options.ispremiere;
	    url += true?'true':'false';
	  }
	
	  if(options.live) {
	    id += options.live;
	    url += '&islive=' + (options.live ? 'true':'false');
	  }
	
	  this.get('VS-'+id, url, next);
	}
	
	module.exports = new DAL();


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	;(function () { // closure for web browsers
	
	if (typeof module === 'object' && module.exports) {
	  module.exports = LRUCache
	} else {
	  // just set the global for non-node platforms.
	  this.LRUCache = LRUCache
	}
	
	function hOP (obj, key) {
	  return Object.prototype.hasOwnProperty.call(obj, key)
	}
	
	function naiveLength () { return 1 }
	
	function LRUCache (options) {
	  if (!(this instanceof LRUCache))
	    return new LRUCache(options)
	
	  if (typeof options === 'number')
	    options = { max: options }
	
	  if (!options)
	    options = {}
	
	  this._max = options.max
	  // Kind of weird to have a default max of Infinity, but oh well.
	  if (!this._max || !(typeof this._max === "number") || this._max <= 0 )
	    this._max = Infinity
	
	  this._lengthCalculator = options.length || naiveLength
	  if (typeof this._lengthCalculator !== "function")
	    this._lengthCalculator = naiveLength
	
	  this._allowStale = options.stale || false
	  this._maxAge = options.maxAge || null
	  this._dispose = options.dispose
	  this.reset()
	}
	
	// resize the cache when the max changes.
	Object.defineProperty(LRUCache.prototype, "max",
	  { set : function (mL) {
	      if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
	      this._max = mL
	      if (this._length > this._max) trim(this)
	    }
	  , get : function () { return this._max }
	  , enumerable : true
	  })
	
	// resize the cache when the lengthCalculator changes.
	Object.defineProperty(LRUCache.prototype, "lengthCalculator",
	  { set : function (lC) {
	      if (typeof lC !== "function") {
	        this._lengthCalculator = naiveLength
	        this._length = this._itemCount
	        for (var key in this._cache) {
	          this._cache[key].length = 1
	        }
	      } else {
	        this._lengthCalculator = lC
	        this._length = 0
	        for (var key in this._cache) {
	          this._cache[key].length = this._lengthCalculator(this._cache[key].value)
	          this._length += this._cache[key].length
	        }
	      }
	
	      if (this._length > this._max) trim(this)
	    }
	  , get : function () { return this._lengthCalculator }
	  , enumerable : true
	  })
	
	Object.defineProperty(LRUCache.prototype, "length",
	  { get : function () { return this._length }
	  , enumerable : true
	  })
	
	
	Object.defineProperty(LRUCache.prototype, "itemCount",
	  { get : function () { return this._itemCount }
	  , enumerable : true
	  })
	
	LRUCache.prototype.forEach = function (fn, thisp) {
	  thisp = thisp || this
	  var i = 0;
	  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
	    i++
	    var hit = this._lruList[k]
	    if (this._maxAge && (Date.now() - hit.now > this._maxAge)) {
	      del(this, hit)
	      if (!this._allowStale) hit = undefined
	    }
	    if (hit) {
	      fn.call(thisp, hit.value, hit.key, this)
	    }
	  }
	}
	
	LRUCache.prototype.keys = function () {
	  var keys = new Array(this._itemCount)
	  var i = 0
	  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
	    var hit = this._lruList[k]
	    keys[i++] = hit.key
	  }
	  return keys
	}
	
	LRUCache.prototype.values = function () {
	  var values = new Array(this._itemCount)
	  var i = 0
	  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
	    var hit = this._lruList[k]
	    values[i++] = hit.value
	  }
	  return values
	}
	
	LRUCache.prototype.reset = function () {
	  if (this._dispose && this._cache) {
	    for (var k in this._cache) {
	      this._dispose(k, this._cache[k].value)
	    }
	  }
	
	  this._cache = Object.create(null) // hash of items by key
	  this._lruList = Object.create(null) // list of items in order of use recency
	  this._mru = 0 // most recently used
	  this._lru = 0 // least recently used
	  this._length = 0 // number of items in the list
	  this._itemCount = 0
	}
	
	// Provided for debugging/dev purposes only. No promises whatsoever that
	// this API stays stable.
	LRUCache.prototype.dump = function () {
	  return this._cache
	}
	
	LRUCache.prototype.dumpLru = function () {
	  return this._lruList
	}
	
	LRUCache.prototype.set = function (key, value) {
	  if (hOP(this._cache, key)) {
	    // dispose of the old one before overwriting
	    if (this._dispose) this._dispose(key, this._cache[key].value)
	    if (this._maxAge) this._cache[key].now = Date.now()
	    this._cache[key].value = value
	    this.get(key)
	    return true
	  }
	
	  var len = this._lengthCalculator(value)
	  var age = this._maxAge ? Date.now() : 0
	  var hit = new Entry(key, value, this._mru++, len, age)
	
	  // oversized objects fall out of cache automatically.
	  if (hit.length > this._max) {
	    if (this._dispose) this._dispose(key, value)
	    return false
	  }
	
	  this._length += hit.length
	  this._lruList[hit.lu] = this._cache[key] = hit
	  this._itemCount ++
	
	  if (this._length > this._max) trim(this)
	  return true
	}
	
	LRUCache.prototype.has = function (key) {
	  if (!hOP(this._cache, key)) return false
	  var hit = this._cache[key]
	  if (this._maxAge && (Date.now() - hit.now > this._maxAge)) {
	    return false
	  }
	  return true
	}
	
	LRUCache.prototype.get = function (key) {
	  return get(this, key, true)
	}
	
	LRUCache.prototype.peek = function (key) {
	  return get(this, key, false)
	}
	
	LRUCache.prototype.pop = function () {
	  var hit = this._lruList[this._lru]
	  del(this, hit)
	  return hit || null
	}
	
	LRUCache.prototype.del = function (key) {
	  del(this, this._cache[key])
	}
	
	function get (self, key, doUse) {
	  var hit = self._cache[key]
	  if (hit) {
	    if (self._maxAge && (Date.now() - hit.now > self._maxAge)) {
	      del(self, hit)
	      if (!self._allowStale) hit = undefined
	    } else {
	      if (doUse) use(self, hit)
	    }
	    if (hit) hit = hit.value
	  }
	  return hit
	}
	
	function use (self, hit) {
	  shiftLU(self, hit)
	  hit.lu = self._mru ++
	  self._lruList[hit.lu] = hit
	}
	
	function trim (self) {
	  while (self._lru < self._mru && self._length > self._max)
	    del(self, self._lruList[self._lru])
	}
	
	function shiftLU (self, hit) {
	  delete self._lruList[ hit.lu ]
	  while (self._lru < self._mru && !self._lruList[self._lru]) self._lru ++
	}
	
	function del (self, hit) {
	  if (hit) {
	    if (self._dispose) self._dispose(hit.key, hit.value)
	    self._length -= hit.length
	    self._itemCount --
	    delete self._cache[ hit.key ]
	    shiftLU(self, hit)
	  }
	}
	
	// classy, since V8 prefers predictable objects.
	function Entry (key, value, lu, length, now) {
	  this.key = key
	  this.value = value
	  this.lu = lu
	  this.length = length
	  this.now = now
	}
	
	})()


/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(83);
	var reduce = __webpack_require__(82);
	
	/**
	 * Root reference for iframes.
	 */
	
	var root = 'undefined' == typeof window
	  ? this
	  : window;
	
	/**
	 * Noop.
	 */
	
	function noop(){};
	
	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isHost(obj) {
	  var str = {}.toString.call(obj);
	
	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Determine XHR.
	 */
	
	function getXHR() {
	  if (root.XMLHttpRequest
	    && ('file:' != root.location.protocol || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	}
	
	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */
	
	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };
	
	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(obj) {
	  return obj === Object(obj);
	}
	
	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */
	
	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pairs.push(encodeURIComponent(key)
	        + '=' + encodeURIComponent(obj[key]));
	    }
	  }
	  return pairs.join('&');
	}
	
	/**
	 * Expose serialization method.
	 */
	
	 request.serializeObject = serialize;
	
	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */
	
	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;
	
	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }
	
	  return obj;
	}
	
	/**
	 * Expose parser.
	 */
	
	request.parseString = parseString;
	
	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */
	
	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};
	
	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */
	
	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };
	
	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */
	
	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};
	
	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;
	
	  lines.pop(); // trailing CRLF
	
	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }
	
	  return fields;
	}
	
	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	function type(str){
	  return str.split(/ *; */).shift();
	};
	
	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();
	
	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};
	
	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */
	
	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  this.text = this.xhr.responseText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text)
	    : null;
	}
	
	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};
	
	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */
	
	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);
	
	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};
	
	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */
	
	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  return parse && str && str.length
	    ? parse(str)
	    : null;
	};
	
	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	Response.prototype.setStatusProperties = function(status){
	  var type = status / 100 | 0;
	
	  // status / class
	  this.status = status;
	  this.statusType = type;
	
	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;
	
	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status || 1223 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};
	
	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */
	
	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;
	
	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;
	
	  return err;
	};
	
	/**
	 * Expose `Response`.
	 */
	
	request.Response = Response;
	
	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */
	
	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function(){
	    try {
	      var res = new Response(self);
	      if ('HEAD' == method) res.text = null;
	      self.callback(null, res);
	    } catch(e) {
	      var err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      self.callback(err);
	    }
	  });
	}
	
	/**
	 * Mixin `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Allow for extension
	 */
	
	Request.prototype.use = function(fn) {
	  fn(this);
	  return this;
	}
	
	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.timeout = function(ms){
	  this._timeout = ms;
	  return this;
	};
	
	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.clearTimeout = function(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};
	
	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};
	
	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};
	
	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};
	
	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */
	
	Request.prototype.getHeader = function(field){
	  return this._header[field.toLowerCase()];
	};
	
	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.auth = function(user, pass){
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};
	
	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/
	
	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};
	
	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.field = function(name, val){
	  if (!this._formData) this._formData = new FormData();
	  this._formData.append(name, val);
	  return this;
	};
	
	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.attach = function(field, file, filename){
	  if (!this._formData) this._formData = new FormData();
	  this._formData.append(field, file, filename);
	  return this;
	};
	
	/**
	 * Send `data`, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // querystring
	 *       request.get('/search')
	 *         .end(callback)
	 *
	 *       // multiple data "writes"
	 *       request.get('/search')
	 *         .send({ search: 'query' })
	 *         .send({ range: '1..5' })
	 *         .send({ order: 'desc' })
	 *         .end(callback)
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"})
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');
	
	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }
	
	  if (!obj) return this;
	  if (!type) this.type('json');
	  return this;
	};
	
	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */
	
	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  if (2 == fn.length) return fn(err, res);
	  if (err) return this.emit('error', err);
	  fn(res);
	};
	
	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */
	
	Request.prototype.crossDomainError = function(){
	  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
	  err.crossDomain = true;
	  this.callback(err);
	};
	
	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */
	
	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};
	
	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */
	
	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};
	
	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;
	
	  // store callback
	  this._callback = fn || noop;
	
	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;
	    if (0 == xhr.status) {
	      if (self.aborted) return self.timeoutError();
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };
	
	  // progress
	  if (xhr.upload) {
	    xhr.upload.onprogress = function(e){
	      e.percent = e.loaded / e.total * 100;
	      self.emit('progress', e);
	    };
	  }
	
	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.abort();
	    }, timeout);
	  }
	
	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	
	  // initiate request
	  xhr.open(this.method, this.url, true);
	
	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;
	
	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var serialize = request.serialize[this.getHeader('Content-Type')];
	    if (serialize) data = serialize(data);
	  }
	
	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }
	
	  // send stuff
	  this.emit('request', this);
	  xhr.send(data);
	  return this;
	};
	
	/**
	 * Expose `Request`.
	 */
	
	request.Request = Request;
	
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */
	
	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }
	
	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }
	
	  return new Request(method, url);
	}
	
	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.del = function(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * Expose `request`.
	 */
	
	module.exports = request;


/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */
	
	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];
	
	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ }

/******/ })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzE5MDFkMWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy93YXRjaC12aWRlby93YXRjaC12aWRlby5zdHlsPzEyYzgqIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vd2F0Y2gtdmlkZW8uc3R5bD80OGU2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vd2F0Y2gtdmlkZW8uanN4Iiwid2VicGFjazovLy8vVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzP2RlNzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L34vY3NzLWxvYWRlci9jc3NUb1N0cmluZy5qcz9lNTA4Iiwid2VicGFjazovLy8vVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvc3JjL3BlbGxldC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L34va2VmaXIvZGlzdC9rZWZpci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXlvdXR1YmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC15b3V0dWJlL34vcmVxdWlyZS1zZGsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC15b3V0dWJlL34vcmVxdWlyZS1zZGsvfi9wdWJzdWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC15b3V0dWJlL34vcmVxdWlyZS1zZGsvfi9sb2FkLXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dhdGNoLXZpZGVvL3Zldm8taGVhZGVyLnN2Zz8zMmNlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vZGF0YS1hY2Nlc3MtbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9scnUtY2FjaGUvbGliL2xydS1jYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvfi9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3VwZXJhZ2VudC9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7O0FDakJBO0FBQ0Esa0RBQWlELHFCQUFxQixtQkFBbUIsb0JBQW9CLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGtCQUFrQixxQkFBcUIsR0FBRyxzQ0FBc0MsaUJBQWlCLGtCQUFrQixHQUFHLCtCQUErQixpQkFBaUIsaUJBQWlCLGtFQUF1RSxHQUFHLGtDQUFrQyxnQkFBZ0Isb0JBQW9CLHVCQUF1Qix1QkFBdUIsa0JBQWtCLEdBQUcsMkJBQTJCLGdCQUFnQiw0QkFBNEIsaUJBQWlCLEdBQUcsNkJBQTZCLCtCQUErQixtQkFBbUIsb0JBQW9CLEdBQUcsbUNBQW1DLDBCQUEwQixHQUFHLFU7Ozs7Ozs7QUNEMXlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixtQkFBbUI7QUFD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QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7O0FBS0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7O0FBTUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7O0FBTUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7O0FBTUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFDLEdBQUcsOEJBQThCOzs7Ozs7QUFNbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7QUFNRCxxQkFBb0IsVUFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVDQSxzQ0FBcUMsNDJFOzs7Ozs7O0FDQXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLDJCQUEwQix3Q0FBd0M7QUFDbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsTUFBTTtBQUNqQixhQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGMxOTAxZDFkXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3Zldm8tZW1iZWQvaW5saW5lLXBsYXllci9jb21wb25lbnRzL3dhdGNoLXZpZGVvL3dhdGNoLXZpZGVvLnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbbW9kdWxlLmlkLCBjb250ZW50LCAnJ107XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvZGVtaS9Qcm9qZWN0cy92ZXZvLWVtYmVkL2lubGluZS1wbGF5ZXIvY29tcG9uZW50cy93YXRjaC12aWRlby93YXRjaC12aWRlby5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanMhL1VzZXJzL2RlbWkvUHJvamVjdHMvdmV2by1lbWJlZC9pbmxpbmUtcGxheWVyL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vd2F0Y2gtdmlkZW8uc3R5bFwiKTtcblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ107XG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29tcG9uZW50cy93YXRjaC12aWRlby93YXRjaC12aWRlby5zdHlsXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Nzc1RvU3RyaW5nLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIud2F0Y2hWaWRlby1jb21wb25lbnQge1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI4MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLndhdGNoVmlkZW8tY29tcG9uZW50ICN2ZXZvLXBsYXllciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG4ud2F0Y2hWaWRlby1jb21wb25lbnQgLmxvZ28ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiK3JlcXVpcmUoXCIuL3Zldm8taGVhZGVyLnN2Z1wiKStcIikgbm8tcmVwZWF0IGNlbnRlcjtcXG59XFxuLndhdGNoVmlkZW8tY29tcG9uZW50IC5sb2FkaW5nIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuLndhdGNoVmlkZW8tY29tcG9uZW50IHAge1xcbiAgY29sb3I6ICNjY2M7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDdweDtcXG59XFxuLndhdGNoVmlkZW8tY29tcG9uZW50IHAgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiAjNjQ5NWVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ud2F0Y2hWaWRlby1jb21wb25lbnQgcCBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9+L2Nzcy1sb2FkZXIhL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L34vYXV0b3ByZWZpeGVyLWxvYWRlciEvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvfi9zdHlsdXMtbG9hZGVyIS4vY29tcG9uZW50cy93YXRjaC12aWRlby93YXRjaC12aWRlby5zdHlsXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuICAsIHBlbGxldCA9IHJlcXVpcmUoJ3BlbGxldCcpXG5yZXF1aXJlKCcuL3dhdGNoLXZpZGVvLnN0eWwnKVxuXG5pZighU0VSVkVSX0VOVikge1xuICB2YXIgdmV2b0FQSSA9IHJlcXVpcmUoJy4vZGF0YS1hY2Nlc3MtbGF5ZXInKTtcbiAgdmFyIHlvdXR1YmUgPSByZXF1aXJlKCdqc3ghcmVhY3QteW91dHViZScpO1xuXG4gIHZhciB3YXRjaFZpZGVvQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnd2F0Y2hWaWRlb0NvbXBvbmVudCcsXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZldm9BUEkuZ2V0UGxheWxpc3QoJ2YyZTU4YTAwLTc4MGQtNDkwNC1hMWNjLTAzMDVmMjk0MjViZicsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgICBzZWxmLnNldFN0YXRlKHt2aWRlb3M6ZGF0YS52aWRlb3N9KTtcbiAgICAgICAgc2VsZi5zaG93VmlkZW8oMClcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge3ZpZGVvOiBudWxsLCBpbmRleDotMSwgbG9hZGluZzogdHJ1ZX07XG4gICAgfSxcblxuICAgIHNob3dWaWRlbzogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGlmKCF0aGlzLnN0YXRlLnZpZGVvc1tpbmRleF0pIHtpbmRleCA9IDA7fVxuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2ZXZvQVBJLmdldFZpZGVvKHRoaXMuc3RhdGUudmlkZW9zW2luZGV4XS5pc3JjLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIERhdGEnLCBkYXRhKTtcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7dmlkZW86ZGF0YSwgaW5kZXg6IGluZGV4LCBsb2FkaW5nOmZhbHNlfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNob3dWaWRlbyh0aGlzLnN0YXRlLmluZGV4ICsgMSk7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgUmVhY3QuRE9NLmRpdih7Y2xhc3NOYW1lOiBcIndhdGNoVmlkZW8tY29tcG9uZW50XCJ9LCBcbiAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmc/KFJlYWN0LkRPTS5kaXYoe2NsYXNzTmFtZTogXCJsb2FkaW5nXCJ9LCBcIkxPQURJTkcuLi5cIikpOnlvdXR1YmUoe2lkOlwidmV2by1wbGF5ZXJcIiwgdXJsOidodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PScrdGhpcy5zdGF0ZS52aWRlby55b3VUdWJlSWQsIGF1dG9wbGF5OjF9KSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmRpdih7Y2xhc3NOYW1lOiBcImxvZ29cIn0pLCBcbiAgICAgICAgICBSZWFjdC5ET00ucChudWxsLCB0aGlzLnN0YXRlLnZpZGVvICYmIHRoaXMuc3RhdGUudmlkZW8udGl0bGUsIFwiIFwiLCBSZWFjdC5ET00uYSh7b25DbGljazogdGhpcy5uZXh0fSwgXCJOZXh0IFZpZGVvIChWT1RFKVwiKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gbmVlZCB0byBpbmNsdWRlIHJlYWN0LCBhc3NldHMsIGNvbXBvbmVudFxuICAgIHZhciBlbWJlZFBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbWJlZFBsYXllcik7XG4gICAgUmVhY3QucmVuZGVyQ29tcG9uZW50KHdhdGNoVmlkZW9Db21wb25lbnQoKSwgZW1iZWRQbGF5ZXIpO1xuXG4gIH0pKCk7XG5cbn1cbi8qXG4oZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGEodSkge3ZhciBoID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO3ZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7cy50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7cy5jaGFyc2V0ID0gJ3V0ZjgnO3MuYXN5bmMgPSBmYWxzZTtzLnNyYyA9IHU7aC5hcHBlbmRDaGlsZChzKTt9XG4gIGEoJy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LzAuMTEuMi9yZWFjdC13aXRoLWFkZG9ucy5qcycpO1xuICBhKCcvL2xvY2FsaG9zdDozMDAwL2pzL2NvbXBvbmVudC5qcycpO1xufSkoKVxuKi9cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY29tcG9uZW50cy93YXRjaC12aWRlby93YXRjaC12aWRlby5qc3hcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCkge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzKTtcclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHQvLyB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEvKiwgc291cmNlTWFwOiBzb3VyY2VNYXAqL307XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmopIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopO1xyXG5cdHJldHVybiBmdW5jdGlvbihuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhIC8qJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCovKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0YXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0Ly8gdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdC8vIE5vIGJyb3dzZXIgc3VwcG9ydFxyXG5cdC8vIGlmKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHQvLyB0cnkge1xyXG5cdFx0XHQvLyBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYShKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSArIFwiICovXCI7XHJcblx0XHQvLyB9IGNhdGNoKGUpIHt9XHJcblx0Ly8gfVxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcblxyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvZGVtaS9Qcm9qZWN0cy9yZWFjdC1wZWxsZXQvfi9jc3MtbG9hZGVyL2Nzc1RvU3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDFcbiAqKi8iLCJ2YXIgLypkaXJlY3RvciA9IHJlcXVpcmUoJ2RpcmVjdG9yJylcbiAgLCAqL2tlZmlyID0gcmVxdWlyZSgna2VmaXInKVxuICAsIGdsb2JsZVBlbGxldDtcblxuZnVuY3Rpb24gcGVsbGV0KCkge1xuICB0aGlzLnJlYWR5Rm5RdWUgPSBbXTtcbiAgdGhpcy5pbml0Rm5RdWUgPSBbXTtcblxuICB0aGlzLmVtaXR0ZXJzID0ge307XG59XG5cblxucGVsbGV0LnByb3RvdHlwZS5nZXRFbWl0dGVyID0gZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcbiAgaWYodGhpcy5lbWl0dGVyc1trZXldKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlcnNba2V5XTtcbiAgfVxuXG4gIHZhciBzdHJlYW0gPSB0aGlzLmVtaXR0ZXJzW2tleV0gPSBrZWZpci5lbWl0dGVyKCk7XG4gIHN0cmVhbS5vbkVuZChmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpcy5lbWl0dGVyc1trZXldO1xuICB9KTtcblxuICByZXR1cm4gc3RyZWFtO1xufVxuXG4vKipcbiAqIHJlZ2lzdGVyIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uY2UgcGVsbGV0IGlzIHJlYWR5XG4gKiBAcGFyYW0gZm5cbiAqL1xucGVsbGV0LnByb3RvdHlwZS5vblJlYWR5ID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gaWYgYWxsIHJlYWR5IHJ1bm5pbmcgZmlyZSBpbW1lZGlhdGVseSB3aXRoIHRoZSBsYXN0IGtub3cgZXJyIChvciBudWxsIGlmIG5vIGVycm9ycylcbiAgaWYodHlwZW9mKHRoaXMucmVhZHlFcnJvcikgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZm4obW9kdWxlLmV4cG9ydHMucmVhZHlFcnJvcik7XG4gICAgfSwgMSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnJlYWR5Rm5RdWUucHVzaChmbik7XG59O1xuXG4vKipcbiAqIHJlZ2lzdGVyIGEgZnVuY3Rpb24gbmVlZGVkIHRvIGNvbXBsZXRlIGJlZm9yZSBwZWxsZXQgaXMgcmVhZHlcbiAqIEBwYXJhbSBmblxuICovXG5wZWxsZXQucHJvdG90eXBlLnJlZ2lzdGVySW5pdEZuID0gZnVuY3Rpb24oZm4pIHtcbiAgdGhpcy5pbml0Rm5RdWUucHVzaChmbik7XG59O1xuXG4vKipcbiAqIENhbGxlZCBhZnRlciBldmVyeW9uZSBoYXMgcmVnaXN0ZXIgdGhlaXIgbG9hZCBmdW5jdGlvbnNcbiAqL1xucGVsbGV0LnByb3RvdHlwZS5zdGFydEluaXQgPSBmdW5jdGlvbigpIHtcbiAgaWYodHlwZW9mKHRoaXMucmVhZHlFcnJvcikgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgcmVpbml0IGJlY2F1c2UgcGVsbGV0IGlzIGFsbCByZWFkeSBydW5uaW5nLicpO1xuICB9XG5cbiAgdmFyIGNiQ291bnQgPSB0aGlzLmluaXRGblF1ZS5sZW5ndGg7XG4gIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgaWYoZXJyKSB7XG4gICAgICAvLyBjb25zb2xlIGxvZyB0aGUgZXJyb3IgYW5kIHNhZmUgdGhlIG1vc3QgcmVjZW50IGVycm9yXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0IHBlbGxldCBiZWNhdXNlOicsIGVyci5tZXNzYWdlKTtcbiAgICAgIG1vZHVsZS5leHBvcnRzLnJlYWR5RXJyb3IgPSBlcnI7XG4gICAgfVxuXG4gICAgaWYoLS1jYkNvdW50IDw9IDApIHtcbiAgICAgIC8vIGlmIGFsbCBjYWxsYmFjayBoYWQgbm8gZXJyb3Igc2V0IHRvIG51bGxcbiAgICAgIGlmKCFtb2R1bGUuZXhwb3J0cy5yZWFkeUVycm9yKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzLnJlYWR5RXJyb3IgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm47XG4gICAgICB3aGlsZShmbiA9IG1vZHVsZS5leHBvcnRzLnJlYWR5Rm5RdWUucG9wKCkpIHtcbiAgICAgICAgZm4obW9kdWxlLmV4cG9ydHMucmVhZHlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYoY2JDb3VudCA9PT0gMCkge1xuICAgIGRvbmUobnVsbCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gbm93IGNhbGwgYWxsIGluaXQgZm4gYW5kIHdhaXQgdW50aWwgYWxsIGRvbmVcbiAgZm9yKHZhciBpIGluIHRoaXMuaW5pdEZuUXVlKSB7XG4gICAgdGhpcy5pbml0Rm5RdWVbaV0oZG9uZSk7XG4gIH1cbn07XG5cbi8vIGZvciB0aGUgc2VydmVyIGVudmlyb25tZW50IGRlZmluZSB0aGUgbWlkZGxld2FyZVxuaWYodHlwZW9mIEJST1dTRVJfRU5WID09PSAndW5kZWZpbmVkJyB8fCAhQlJPV1NFUl9FTlYpIHtcbiAgcGVsbGV0LnByb3RvdHlwZS5taWRkbGV3YXJlID0gZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdmFyIHN0cmVhbSA9IGdsb2JsZVBlbGxldC5nZXRFbWl0dGVyKCdyb3V0ZTpjaGFuZ2UnKTtcblxuICAgIC8vIGlmIG5vIG9ic2VydmVycyBza2lwIHJvdXRlXG4gICAgaWYoIXN0cmVhbS5fYWN0aXZlKSB7XG4gICAgICBuZXh0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RyZWFtLmVtaXQoe1xuICAgICAgcGF0aDogcmVxLnBhdGgsXG4gICAgICBxdWVyeTogcmVxLnF1ZXJ5LFxuICAgICAgcmVxOiByZXEsXG4gICAgICByZXM6IHJlcyxcbiAgICAgIG5leHQ6IG5leHRcbiAgICB9KTtcbiAgfTtcblxuICBwZWxsZXQucHJvdG90eXBlLnJlbmRlclNlcnZlclNpZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbWFya3VwO1xuXG4gICAgdmFyIG91ckJvZHlTY3JpcHRzID0gJzxzY3JpcHQgc3JjPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvaGlzdG9yeS5qcy8xLjgvbmF0aXZlLmhpc3RvcnkubWluLmpzXCI+PC9zY3JpcHQ+JytcbiAgICAgICc8c2NyaXB0IHNyYz1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3JlYWN0LzAuMTEuMS9yZWFjdC13aXRoLWFkZG9ucy5qc1wiPjwvc2NyaXB0PicrXG4gICAgICAnPHNjcmlwdCBzcmM9XCIvanMvZGVtby5qc1wiPjwvc2NyaXB0Pic7XG5cbiAgICAvLyBmb3IgYm90cyBvbmx5IHJldHVybiB0aGUgbWFya3VwIHdpdGggb3V0IHJlYWN0IHN0YXRlIGFuZCBib290c3RyYXAgY2FsbFxuICAgIGlmKC9nb29nbGVib3R8Z3VydWppYm90fHR3aXR0ZXJib3R8eWFuZGV4Ym90fHNsdXJwfG1zbmJvdHxiaW5nYm90fHJvZ2VyYm90fGZhY2Vib29rZXh0ZXJuYWxoaXQvaS50ZXN0KG1lc3NhZ2UucmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXXx8JycpKSB7XG4gICAgICBtYXJrdXAgPSByZWFjdC5yZW5kZXJDb21wb25lbnRUb1N0YXRpY01hcmt1cChsYXlvdXQoe2JvZHk6bWVzc2FnZS5jb21wb25lbnQsIG1ldGE6bWVzc2FnZS5tZXRhLCBsb2NhbGVzOmFwcC5pMThuLmxvY2FsZXMsIG1lc3NhZ2VzOmFwcC5pMThuLm1lc3NhZ2VzfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXJrdXAgPSByZWFjdC5yZW5kZXJDb21wb25lbnRUb1N0cmluZyhsYXlvdXQoe2JvZHk6bWVzc2FnZS5jb21wb25lbnQsIG1ldGE6bWVzc2FnZS5tZXRhLCBsb2NhbGVzOmFwcC5pMThuLmxvY2FsZXMsIG1lc3NhZ2VzOmFwcC5pMThuLm1lc3NhZ2VzfSkpO1xuXG4gICAgICBpZihtZXNzYWdlLmlkKSB7XG4gICAgICAgIG91ckJvZHlTY3JpcHRzICs9ICc8c2NyaXB0PmFwcC5ib290c3RyYXAoXCInK21lc3NhZ2UuaWQrJ1wiLCcrSlNPTi5zdHJpbmdpZnkobWVzc2FnZS5wcm9wcykrJywnK0pTT04uc3RyaW5naWZ5KG1lc3NhZ2UubWV0YSkrJyk7PC9zY3JpcHQ+JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXJCb2R5U2NyaXB0cyArPSAnPCEtLSBHb29nbGUgQW5hbHl0aWNzOiBjaGFuZ2UgVUEtWFhYWFgtWCB0byBiZSB5b3VyIHNpdGVcXCdzIElELiAtLT5cXG4nK1xuICAgICc8c2NyaXB0PlxcbicrXG4gICAgICAnKGZ1bmN0aW9uKGIsbyxpLGwsZSxyKXtiLkdvb2dsZUFuYWx5dGljc09iamVjdD1sO2JbbF18fChiW2xdPVxcbicrXG4gICAgICAnZnVuY3Rpb24oKXsoYltsXS5xPWJbbF0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0pO2JbbF0ubD0rbmV3IERhdGU7XFxuJytcbiAgICAgICdlPW8uY3JlYXRlRWxlbWVudChpKTtyPW8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoaSlbMF07XFxuJytcbiAgICAgICdlLnNyYz1cXCcvL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanNcXCc7XFxuJytcbiAgICAgICdyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUscil9KHdpbmRvdyxkb2N1bWVudCxcXCdzY3JpcHRcXCcsXFwnZ2FcXCcpKTtcXG4nK1xuICAgICAgJ2dhKFxcJ2NyZWF0ZVxcJyxcXCdVQS1YWFhYWC1YXFwnKTtnYShcXCdzZW5kXFwnLFxcJ3BhZ2V2aWV3XFwnKTtcXG4nK1xuICAgICc8L3NjcmlwdD4nO1xuXG4gICAgLy8gd29ya2Fyb3VuZCBiZWNhdXNlIHJlYWN0IGRvZXMgbm90IHN1cHBvcnQgZG9jdHlwZSBvciA8IS0tIC0tPlxuICAgIG1lc3NhZ2UucmVzLnN0YXR1cygobWVzc2FnZS5tZXRhICYmIG1lc3NhZ2UubWV0YS5zdGF0dXMpIHx8IDIwMCk7XG4gICAgbWVzc2FnZS5yZXMuZW5kKCc8IURPQ1RZUEUgaHRtbD5cXG4nK1xuICAgICAgJzwhLS1baWYgbHQgSUUgN10+ICAgICAgPGh0bWwgY2xhc3M9XCJuby1qcyBsdC1pZTkgbHQtaWU4IGx0LWllN1wiPiA8IVtlbmRpZl0tLT5cXG4nK1xuICAgICAgJzwhLS1baWYgSUUgN10+ICAgICAgICAgPGh0bWwgY2xhc3M9XCJuby1qcyBsdC1pZTkgbHQtaWU4XCI+IDwhW2VuZGlmXS0tPlxcbicrXG4gICAgICAnPCEtLVtpZiBJRSA4XT4gICAgICAgICA8aHRtbCBjbGFzcz1cIm5vLWpzIGx0LWllOVwiPiA8IVtlbmRpZl0tLT5cXG4nK1xuICAgICAgJzwhLS1baWYgZ3QgSUUgOF0+PCEtLT4gPGh0bWwgY2xhc3M9XCJuby1qc1wiPiA8IS0tPCFbZW5kaWZdLS0+XFxuJytcbiAgICAgICc8aGVhZD4nK1xuICAgICAgICAnPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+JytcbiAgICAgICAgJzxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiPicrXG4gICAgICAgICgobWVzc2FnZS5tZXRhICYmIG1lc3NhZ2UubWV0YS50aXRsZSkgPyAnICA8dGl0bGU+JyArIG1lc3NhZ2UubWV0YS50aXRsZSArICc8L3RpdGxlPicgOiAnJykgK1xuICAgICAgICAnPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiPicrXG4gICAgICAgICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj4nK1xuICAgICAgICAnPHNjcmlwdCBzcmM9XCIvL3BvbHlmaWxsLmlvXCI+PC9zY3JpcHQ+JytcbiAgICAgICAgJzxzY3JpcHQgc3JjPVwiL2pzL2RlbW8tYXNzZXRzLmpzXCI+PC9zY3JpcHQ+JytcbiAgICAgICc8L2hlYWQ+JytcbiAgICAgICc8Ym9keT4nK1xuICAgICAgICAnPCEtLVtpZiBsdCBJRSA3XT5cXG4nK1xuICAgICAgICAnPHAgY2xhc3M9XCJicm93c2VoYXBweVwiPllvdSBhcmUgdXNpbmcgYW4gPHN0cm9uZz5vdXRkYXRlZDwvc3Ryb25nPiBicm93c2VyLiBQbGVhc2UgPGEgaHJlZj1cImh0dHA6Ly9icm93c2VoYXBweS5jb20vXCI+dXBncmFkZSB5b3VyIGJyb3dzZXI8L2E+IHRvIGltcHJvdmUgeW91ciBleHBlcmllbmNlLjwvcD5cXG4nK1xuICAgICAgICAnPCFbZW5kaWZdLS0+XFxuJytcbiAgICAgICAgJzxkaXYgaWQ9XCJfX0FQUF9fXCI+JytcbiAgICAgICAgICBtYXJrdXAgK1xuICAgICAgICAnPC9kaXY+JytcbiAgICAgICAgb3VyQm9keVNjcmlwdHMrXG4gICAgICAnPC9ib2R5PicrXG4gICAgICAnPC9odG1sPicpO1xuICB9XG59XG5cbi8vIGhhY2sgdGhlIGVudmlyb25tZW50IHNvIHRoYXQgd2UgY2FuIGNyZWF0ZSBhIHNpbmdsZXRvbiB0aGF0IGNhbiBiZSBzaGFyZWRcbi8vIGJldHdlZW4gdGhlIG5hdGl2ZSBub2RlanMgZW52aXJvbm1lbnQgYW5kIHRoZSB3ZWJwYWNrcyBjb250YWluZXIuXG5pZih0eXBlb2YgQlJPV1NFUl9FTlYgIT09ICd1bmRlZmluZWQnICYmIEJST1dTRVJfRU5WKSB7XG4gIGdsb2JsZVBlbGxldCA9IG5ldyBwZWxsZXQoKTtcbn0gZWxzZSB7XG4gIGlmKGdsb2JhbC5fX3BlbGxldFNpbmdsZXRvbikge1xuICAgIGdsb2JsZVBlbGxldCA9IGdsb2JhbC5fX3BlbGxldFNpbmdsZXRvbjtcbiAgfSBlbHNlIHtcbiAgICBnbG9ibGVQZWxsZXQgPSBnbG9iYWwuX19wZWxsZXRTaW5nbGV0b24gPSBuZXcgcGVsbGV0KCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9ibGVQZWxsZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9zcmMvcGVsbGV0LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyohIEtlZmlyLmpzIHYwLjIuNlxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3phZGkva2VmaXJcbiAqL1xuOyhmdW5jdGlvbihnbG9iYWwpe1xuICBcInVzZSBzdHJpY3RcIjtcblxudmFyIE5PVEhJTkcgPSBbJzxub3RoaW5nPiddO1xuXG5mdW5jdGlvbiBnZXQobWFwLCBrZXksIG5vdEZvdW5kKSB7XG4gIGlmIChtYXAgJiYga2V5IGluIG1hcCkge1xuICAgIHJldHVybiBtYXBba2V5XTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm90Rm91bmQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3duKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9iaihwcm90bykge1xuICB2YXIgRiA9IGZ1bmN0aW9uKCkge307XG4gIEYucHJvdG90eXBlID0gcHJvdG87XG4gIHJldHVybiBuZXcgRigpO1xufVxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0IC8qLCBtaXhpbjEsIG1peGluMi4uLiovKSB7XG4gIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpLCBwcm9wO1xuICBmb3IgKGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHByb3AgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICB0YXJnZXRbcHJvcF0gPSBhcmd1bWVudHNbaV1bcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXQoQ2hpbGQsIFBhcmVudCAvKiwgbWl4aW4xLCBtaXhpbjIuLi4qLykge1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaTtcbiAgQ2hpbGQucHJvdG90eXBlID0gY3JlYXRlT2JqKFBhcmVudC5wcm90b3R5cGUpO1xuICBDaGlsZC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDaGlsZDtcbiAgZm9yIChpID0gMjsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZXh0ZW5kKENoaWxkLnByb3RvdHlwZSwgYXJndW1lbnRzW2ldKTtcbiAgfVxuICByZXR1cm4gQ2hpbGQ7XG59XG5cbmZ1bmN0aW9uIGFncnNUb0FycmF5KGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuICByZXR1cm4gY2xvbmVBcnJheShhcmdzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm4oZm4sIGNvbnRleHQpIHtcbiAgaWYgKGlzRm4oZm4pKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9IGVsc2Uge1xuICAgIGlmIChjb250ZXh0ID09IG51bGwgfHwgIWlzRm4oY29udGV4dFtmbl0pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIGZ1bmN0aW9uOiAnICsgZm4gKyAnIGluIGNvbnRleHQ6ICcgKyBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnRleHRbZm5dO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseShmbiwgYywgYSkge1xuICB2YXIgYUxlbmd0aCA9IGEgPyBhLmxlbmd0aCA6IDA7XG4gIGlmIChjID09IG51bGwpIHtcbiAgICBzd2l0Y2ggKGFMZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogIHJldHVybiBmbigpO1xuICAgICAgY2FzZSAxOiAgcmV0dXJuIGZuKGFbMF0pO1xuICAgICAgY2FzZSAyOiAgcmV0dXJuIGZuKGFbMF0sIGFbMV0pO1xuICAgICAgY2FzZSAzOiAgcmV0dXJuIGZuKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgY2FzZSA0OiAgcmV0dXJuIGZuKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIGZuLmFwcGx5KG51bGwsIGEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFMZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogIHJldHVybiBmbi5jYWxsKGMpO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIGZuLmFwcGx5KGMsIGEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kV2l0aG91dENvbnRleHQoZm4sIGEsIGxlbmd0aCkge1xuICB2YXIgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHN3aXRjaCAoYS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiAgcmV0dXJuIGZuO1xuICAgICAgICBjYXNlIDE6ICByZXR1cm4gZnVuY3Rpb24oKSB7cmV0dXJuIGZuKGEwKX1cbiAgICAgICAgY2FzZSAyOiAgcmV0dXJuIGZ1bmN0aW9uKCkge3JldHVybiBmbihhMCwgYTEpfVxuICAgICAgICBjYXNlIDM6ICByZXR1cm4gZnVuY3Rpb24oKSB7cmV0dXJuIGZuKGEwLCBhMSwgYTIpfVxuICAgICAgICBjYXNlIDQ6ICByZXR1cm4gZnVuY3Rpb24oKSB7cmV0dXJuIGZuKGEwLCBhMSwgYTIsIGEzKX1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKCkge3JldHVybiBmbi5hcHBseShudWxsLCBhKX1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHN3aXRjaCAoYS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiAgcmV0dXJuIGZuO1xuICAgICAgICBjYXNlIDE6ICByZXR1cm4gZnVuY3Rpb24oYjApIHtyZXR1cm4gZm4oYTAsIGIwKX1cbiAgICAgICAgY2FzZSAyOiAgcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuKGEwLCBhMSwgYjApfVxuICAgICAgICBjYXNlIDM6ICByZXR1cm4gZnVuY3Rpb24oYjApIHtyZXR1cm4gZm4oYTAsIGExLCBhMiwgYjApfVxuICAgICAgICBjYXNlIDQ6ICByZXR1cm4gZnVuY3Rpb24oYjApIHtyZXR1cm4gZm4oYTAsIGExLCBhMiwgYTMsIGIwKX1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuLmFwcGx5KG51bGwsIGNvbmNhdChhLCBbYjBdKSl9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogIHJldHVybiBmbjtcbiAgICAgICAgY2FzZSAxOiAgcmV0dXJuIGZ1bmN0aW9uKGIwLCBiMSkge3JldHVybiBmbihhMCwgYjAsIGIxKX1cbiAgICAgICAgY2FzZSAyOiAgcmV0dXJuIGZ1bmN0aW9uKGIwLCBiMSkge3JldHVybiBmbihhMCwgYTEsIGIwLCBiMSl9XG4gICAgICAgIGNhc2UgMzogIHJldHVybiBmdW5jdGlvbihiMCwgYjEpIHtyZXR1cm4gZm4oYTAsIGExLCBhMiwgYjAsIGIxKX1cbiAgICAgICAgY2FzZSA0OiAgcmV0dXJuIGZ1bmN0aW9uKGIwLCBiMSkge3JldHVybiBmbihhMCwgYTEsIGEyLCBhMywgYjAsIGIxKX1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKGIwLCBiMSkge3JldHVybiBmbi5hcHBseShudWxsLCBjb25jYXQoYSwgW2IwLCBiMV0pKX1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogIHJldHVybiBmbjtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKCkge3JldHVybiBhcHBseShmbiwgbnVsbCwgY29uY2F0KGEsIGFyZ3VtZW50cykpfVxuICAgICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRXaXRoQ29udGV4dChmbiwgYywgYSwgbGVuZ3RoKSB7XG4gIHZhciBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM107XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgc3dpdGNoIChhLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6ICByZXR1cm4gZnVuY3Rpb24oKSB7cmV0dXJuIGZuLmNhbGwoYyl9XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBmdW5jdGlvbigpIHtyZXR1cm4gZm4uYXBwbHkoYywgYSl9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogIHJldHVybiBmdW5jdGlvbihiMCkge3JldHVybiBmbi5jYWxsKGMsIGIwKX1cbiAgICAgICAgY2FzZSAxOiAgcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuLmNhbGwoYywgYTAsIGIwKX1cbiAgICAgICAgY2FzZSAyOiAgcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuLmNhbGwoYywgYTAsIGExLCBiMCl9XG4gICAgICAgIGNhc2UgMzogIHJldHVybiBmdW5jdGlvbihiMCkge3JldHVybiBmbi5jYWxsKGMsIGEwLCBhMSwgYTIsIGIwKX1cbiAgICAgICAgY2FzZSA0OiAgcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuLmNhbGwoYywgYTAsIGExLCBhMiwgYTMsIGIwKX1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKGIwKSB7cmV0dXJuIGZuLmFwcGx5KGMsIGNvbmNhdChhLCBbYjBdKSl9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogIHJldHVybiBmdW5jdGlvbihiMCwgYjEpIHtyZXR1cm4gZm4uY2FsbChjLCBiMCwgYjEpfVxuICAgICAgICBjYXNlIDE6ICByZXR1cm4gZnVuY3Rpb24oYjAsIGIxKSB7cmV0dXJuIGZuLmNhbGwoYywgYTAsIGIwLCBiMSl9XG4gICAgICAgIGNhc2UgMjogIHJldHVybiBmdW5jdGlvbihiMCwgYjEpIHtyZXR1cm4gZm4uY2FsbChjLCBhMCwgYTEsIGIwLCBiMSl9XG4gICAgICAgIGNhc2UgMzogIHJldHVybiBmdW5jdGlvbihiMCwgYjEpIHtyZXR1cm4gZm4uY2FsbChjLCBhMCwgYTEsIGEyLCBiMCwgYjEpfVxuICAgICAgICBjYXNlIDQ6ICByZXR1cm4gZnVuY3Rpb24oYjAsIGIxKSB7cmV0dXJuIGZuLmNhbGwoYywgYTAsIGExLCBhMiwgYTMsIGIwLCBiMSl9XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBmdW5jdGlvbihiMCwgYjEpIHtyZXR1cm4gZm4uYXBwbHkoYywgY29uY2F0KGEsIFtiMCwgYjFdKSl9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgc3dpdGNoIChhLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbigpIHtyZXR1cm4gZm4uYXBwbHkoYywgYXJndW1lbnRzKX1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZ1bmN0aW9uKCkge3JldHVybiBmbi5hcHBseShjLCBjb25jYXQoYSwgYXJndW1lbnRzKSl9XG4gICAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluZChmbiwgY29udGV4dCwgYXJncywgYm91bmRGdW5jdGlvbkxlbmd0aCkge1xuICBpZiAoY29udGV4dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGJpbmRXaXRob3V0Q29udGV4dChmbiwgYXJncywgYm91bmRGdW5jdGlvbkxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJpbmRXaXRoQ29udGV4dChmbiwgY29udGV4dCwgYXJncywgYm91bmRGdW5jdGlvbkxlbmd0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0KGEsIGIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShhLmxlbmd0aCArIGIubGVuZ3RoKVxuICAgICwgaiA9IDBcbiAgICAsIGxlbmd0aCwgaTtcbiAgaWYgKGEubGVuZ3RoID09PSAwKSB7ICByZXR1cm4gYiAgfVxuICBpZiAoYi5sZW5ndGggPT09IDApIHsgIHJldHVybiBhICB9XG4gIGxlbmd0aCA9IGEubGVuZ3RoO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyssIGorKykge1xuICAgIHJlc3VsdFtqXSA9IGFbaV07XG4gIH1cbiAgbGVuZ3RoID0gYi5sZW5ndGg7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKywgaisrKSB7XG4gICAgcmVzdWx0W2pdID0gYltpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaW5kKGFyciwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGhcbiAgICAsIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0gPT09IHZhbHVlKSB7ICByZXR1cm4gaSAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gZmluZEJ5UHJlZChhcnIsIHByZWQpIHtcbiAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGhcbiAgICAsIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChwcmVkKGFycltpXSkpIHsgIHJldHVybiBpICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBjbG9uZUFycmF5KGlucHV0KSB7XG4gIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGhcbiAgICAsIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpXG4gICAgLCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSBpbnB1dFtpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZW1vdmUoaW5wdXQsIGluZGV4KSB7XG4gIHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGhcbiAgICAsIHJlc3VsdCwgaSwgajtcbiAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGggLSAxKTtcbiAgICAgIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgcmVzdWx0W2pdID0gaW5wdXRbaV07XG4gICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQnlQcmVkKGlucHV0LCBwcmVkKSB7XG4gIHJldHVybiByZW1vdmUoaW5wdXQsIGZpbmRCeVByZWQoaW5wdXQsIHByZWQpKTtcbn1cblxuZnVuY3Rpb24gbWFwKGlucHV0LCBmbikge1xuICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoXG4gICAgLCByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKVxuICAgICwgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2ldID0gZm4oaW5wdXRbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goYXJyLCBmbikge1xuICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aFxuICAgICwgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7ICBmbihhcnJbaV0pICB9XG59XG5cbmZ1bmN0aW9uIGZpbGxBcnJheShhcnIsIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoXG4gICAgLCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIHZhbHVlKSB7XG4gIHJldHVybiBmaW5kKGFyciwgdmFsdWUpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gcmVzdChhcnIsIHN0YXJ0LCBvbkVtcHR5KSB7XG4gIGlmIChhcnIubGVuZ3RoID4gc3RhcnQpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyLCBzdGFydCk7XG4gIH1cbiAgcmV0dXJuIG9uRW1wdHk7XG59XG5cbnZhciBub3cgPSBEYXRlLm5vdyA/XG4gIGZ1bmN0aW9uKCkgeyByZXR1cm4gRGF0ZS5ub3coKSB9IDpcbiAgZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9O1xuXG5mdW5jdGlvbiBpc0ZuKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheUxpa2UoeHMpIHtcbiAgcmV0dXJuIGlzQXJyYXkoeHMpIHx8IGlzQXJndW1lbnRzKHhzKTtcbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG52YXIgaXNBcmd1bWVudHMgPSBmdW5jdGlvbih4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59XG5cbi8vIEZvciBJRVxuaWYgKCFpc0FyZ3VtZW50cyhhcmd1bWVudHMpKSB7XG4gIGlzQXJndW1lbnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAmJiBvd24ob2JqLCAnY2FsbGVlJykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRXF1YWxBcnJheXMoYSwgYikge1xuICB2YXIgbGVuZ3RoLCBpO1xuICBpZiAoYSA9PSBudWxsICYmIGIgPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuZ3RoID0gYS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBhbmQoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFhcmd1bWVudHNbaV0pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmd1bWVudHNbaSAtIDFdO1xufVxuXG5mdW5jdGlvbiBvcigpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJndW1lbnRzW2ldKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJndW1lbnRzW2kgLSAxXTtcbn1cblxuZnVuY3Rpb24gd2l0aEludGVydmFsKG5hbWUsIG1peGluKSB7XG5cbiAgZnVuY3Rpb24gQW5vbnltb3VzU3RyZWFtKHdhaXQsIGFyZ3MpIHtcbiAgICBTdHJlYW0uY2FsbCh0aGlzKTtcbiAgICB0aGlzLl93YWl0ID0gd2FpdDtcbiAgICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcbiAgICB2YXIgJCA9IHRoaXM7XG4gICAgdGhpcy5fJG9uVGljayA9IGZ1bmN0aW9uKCkgeyAgJC5fb25UaWNrKCkgIH1cbiAgICB0aGlzLl9pbml0KGFyZ3MpO1xuICB9XG5cbiAgaW5oZXJpdChBbm9ueW1vdXNTdHJlYW0sIFN0cmVhbSwge1xuXG4gICAgX25hbWU6IG5hbWUsXG5cbiAgICBfaW5pdDogZnVuY3Rpb24oYXJncykge30sXG4gICAgX2ZyZWU6IGZ1bmN0aW9uKCkge30sXG5cbiAgICBfb25UaWNrOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5fJG9uVGljaywgdGhpcy5fd2FpdCk7XG4gICAgfSxcbiAgICBfb25EZWFjdGl2YXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2ludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElkKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9jbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICBTdHJlYW0ucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5fJG9uVGljayA9IG51bGw7XG4gICAgICB0aGlzLl9mcmVlKCk7XG4gICAgfVxuXG4gIH0sIG1peGluKTtcblxuICBLZWZpcltuYW1lXSA9IGZ1bmN0aW9uKHdhaXQpIHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c1N0cmVhbSh3YWl0LCByZXN0KGFyZ3VtZW50cywgMSwgW10pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aXRoT25lU291cmNlKG5hbWUsIG1peGluLCBvcHRpb25zKSB7XG5cblxuICBvcHRpb25zID0gZXh0ZW5kKHtcbiAgICBzdHJlYW1NZXRob2Q6IGZ1bmN0aW9uKFN0cmVhbUNsYXNzLCBQcm9wZXJ0eUNsYXNzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7ICByZXR1cm4gbmV3IFN0cmVhbUNsYXNzKHRoaXMsIGFyZ3VtZW50cykgIH1cbiAgICB9LFxuICAgIHByb3BlcnR5TWV0aG9kOiBmdW5jdGlvbihTdHJlYW1DbGFzcywgUHJvcGVydHlDbGFzcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgeyAgcmV0dXJuIG5ldyBQcm9wZXJ0eUNsYXNzKHRoaXMsIGFyZ3VtZW50cykgIH1cbiAgICB9XG4gIH0sIG9wdGlvbnMgfHwge30pO1xuXG5cblxuICBtaXhpbiA9IGV4dGVuZCh7XG4gICAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHt9LFxuICAgIF9mcmVlOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbih4LCBpc0N1cnJlbnQpIHsgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCwgaXNDdXJyZW50KSAgfSxcbiAgICBfaGFuZGxlRW5kOiBmdW5jdGlvbihfXywgaXNDdXJyZW50KSB7ICB0aGlzLl9zZW5kKCdlbmQnLCBudWxsLCBpc0N1cnJlbnQpICB9LFxuXG4gICAgX29uQWN0aXZhdGlvbkhvb2s6IGZ1bmN0aW9uKCkge30sXG4gICAgX29uRGVhY3RpdmF0aW9uSG9vazogZnVuY3Rpb24oKSB7fSxcblxuICAgIF9oYW5kbGVBbnk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAndmFsdWUnOiB0aGlzLl9oYW5kbGVWYWx1ZShldmVudC52YWx1ZSwgZXZlbnQuY3VycmVudCk7IGJyZWFrO1xuICAgICAgICBjYXNlICdlbmQnOiB0aGlzLl9oYW5kbGVFbmQoZXZlbnQudmFsdWUsIGV2ZW50LmN1cnJlbnQpOyBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9vbkFjdGl2YXRpb25Ib29rKCk7XG4gICAgICB0aGlzLl9zb3VyY2Uub25BbnkoW3RoaXMuX2hhbmRsZUFueSwgdGhpc10pO1xuICAgIH0sXG4gICAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX29uRGVhY3RpdmF0aW9uSG9vaygpO1xuICAgICAgdGhpcy5fc291cmNlLm9mZkFueShbdGhpcy5faGFuZGxlQW55LCB0aGlzXSk7XG4gICAgfVxuICB9LCBtaXhpbiB8fCB7fSk7XG5cblxuXG4gIGZ1bmN0aW9uIGJ1aWxkQ2xhc3MoQmFzZUNsYXNzKSB7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzT2JzZXJ2YWJsZShzb3VyY2UsIGFyZ3MpIHtcbiAgICAgIEJhc2VDbGFzcy5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5fc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fbmFtZSA9IHNvdXJjZS5fbmFtZSArICcuJyArIG5hbWU7XG4gICAgICB0aGlzLl9pbml0KGFyZ3MpO1xuICAgIH1cblxuICAgIGluaGVyaXQoQW5vbnltb3VzT2JzZXJ2YWJsZSwgQmFzZUNsYXNzLCB7XG4gICAgICBfY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBCYXNlQ2xhc3MucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLl9zb3VyY2UgPSBudWxsO1xuICAgICAgICB0aGlzLl9mcmVlKCk7XG4gICAgICB9XG4gICAgfSwgbWl4aW4pO1xuXG4gICAgcmV0dXJuIEFub255bW91c09ic2VydmFibGU7XG4gIH1cblxuXG4gIHZhciBBbm9ueW1vdXNTdHJlYW0gPSBidWlsZENsYXNzKFN0cmVhbSk7XG4gIHZhciBBbm9ueW1vdXNQcm9wZXJ0eSA9IGJ1aWxkQ2xhc3MoUHJvcGVydHkpO1xuXG4gIGlmIChvcHRpb25zLnN0cmVhbU1ldGhvZCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGVbbmFtZV0gPSBvcHRpb25zLnN0cmVhbU1ldGhvZChBbm9ueW1vdXNTdHJlYW0sIEFub255bW91c1Byb3BlcnR5KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnByb3BlcnR5TWV0aG9kKSB7XG4gICAgUHJvcGVydHkucHJvdG90eXBlW25hbWVdID0gb3B0aW9ucy5wcm9wZXJ0eU1ldGhvZChBbm9ueW1vdXNTdHJlYW0sIEFub255bW91c1Byb3BlcnR5KTtcbiAgfVxuXG59XG5cblxuXG52YXIgS2VmaXIgPSB7fTtcblxuXG5cblxuLy8gRm5cblxuZnVuY3Rpb24gbm9ybUZuTWV0YShmbk1ldGEpIHtcbiAgaWYgKGZuTWV0YSBpbnN0YW5jZW9mIF9Gbikge1xuICAgIHJldHVybiBmbk1ldGE7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRm4oZm5NZXRhKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm46IGZuTWV0YSxcbiAgICAgICAgY29udGV4dDogbnVsbCxcbiAgICAgICAgYXJnczogW11cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0FycmF5TGlrZShmbk1ldGEpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZm46IGdldEZuKGZuTWV0YVswXSwgZm5NZXRhWzFdKSxcbiAgICAgICAgICBjb250ZXh0OiAoZm5NZXRhWzFdID09IG51bGwgPyBudWxsIDogZm5NZXRhWzFdKSxcbiAgICAgICAgICBhcmdzOiByZXN0KGZuTWV0YSwgMiwgW10pXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBpc25cXCd0IGEgZnVuY3Rpb24sIGFuZCBjYW5cXCd0IGJlIGNvbnZlcnRlZCB0byBpdDogJyArIGZuTWV0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5Rm5NZXRhKGZuTWV0YSwgYXJncykge1xuICBmbk1ldGEgPSBub3JtRm5NZXRhKGZuTWV0YSk7XG4gIHJldHVybiBhcHBseShmbk1ldGEuZm4sIGZuTWV0YS5jb250ZXh0LCBjb25jYXQoZm5NZXRhLmFyZ3MsIGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gX0ZuKGZuTWV0YSwgbGVuZ3RoKSB7XG4gIHRoaXMuY29udGV4dCA9IGZuTWV0YS5jb250ZXh0O1xuICB0aGlzLmZuID0gZm5NZXRhLmZuO1xuICB0aGlzLmFyZ3MgPSBmbk1ldGEuYXJncztcbiAgdGhpcy5pbnZva2UgPSBiaW5kKHRoaXMuZm4sIHRoaXMuY29udGV4dCwgdGhpcy5hcmdzLCBsZW5ndGgpO1xufVxuXG5fRm4ucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24oYXJncykge1xuICByZXR1cm4gYXBwbHkodGhpcy5pbnZva2UsIG51bGwsIGFyZ3MpO1xufVxuXG5fRm4ucHJvdG90eXBlLmFwcGx5V2l0aENvbnRleHQgPSBmdW5jdGlvbihjb250ZXh0LCBhcmdzKSB7XG4gIGlmICh0aGlzLmNvbnRleHQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXBwbHkodGhpcy5mbiwgY29udGV4dCwgY29uY2F0KHRoaXMuYXJncywgYXJncykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLmFwcGx5KGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIEZuKGZuTWV0YSwgbGVuZ3RoKSB7XG4gIGlmIChmbk1ldGEgaW5zdGFuY2VvZiBfRm4pIHtcbiAgICByZXR1cm4gZm5NZXRhO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgX0ZuKG5vcm1Gbk1ldGEoZm5NZXRhKSwgbGVuZ3RoID09IG51bGwgPyAxMDAgOiBsZW5ndGgpO1xuICB9XG59XG5cbkZuLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgYSA9IEZuKGEsIG51bGwsIHRydWUpO1xuICBiID0gRm4oYiwgbnVsbCwgdHJ1ZSk7XG4gIHJldHVybiBhLmZuID09PSBiLmZuICYmXG4gICAgYS5jb250ZXh0ID09PSBiLmNvbnRleHQgJiZcbiAgICBpc0VxdWFsQXJyYXlzKGEuYXJncywgYi5hcmdzKTtcbn1cblxuS2VmaXIuRm4gPSBGbjtcblxuXG5cblxuXG4vLyBTdWJzY3JpYmVyc1xuXG5mdW5jdGlvbiBTdWJzY3JpYmVycygpIHtcbiAgdGhpcy5fZm5zID0gW107XG59XG5cbmV4dGVuZChTdWJzY3JpYmVycywge1xuICBjYWxsT25lOiBmdW5jdGlvbihmbiwgZXZlbnQpIHtcbiAgICBpZiAoZm4udHlwZSA9PT0gJ2FueScpIHtcbiAgICAgIGZuLmludm9rZShldmVudCk7XG4gICAgfSBlbHNlIGlmIChmbi50eXBlID09PSBldmVudC50eXBlKSB7XG4gICAgICBpZiAoZm4udHlwZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICBmbi5pbnZva2UoZXZlbnQudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uaW52b2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjYWxsT25jZTogZnVuY3Rpb24odHlwZSwgZm5NZXRhLCBldmVudCkge1xuICAgIGlmICh0eXBlID09PSAnYW55Jykge1xuICAgICAgYXBwbHlGbk1ldGEoZm5NZXRhLCBbZXZlbnRdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGV2ZW50LnR5cGUpIHtcbiAgICAgIGlmICh0eXBlID09PSAndmFsdWUnKSB7XG4gICAgICAgIGFwcGx5Rm5NZXRhKGZuTWV0YSwgW2V2ZW50LnZhbHVlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcHBseUZuTWV0YShmbk1ldGEsIFtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG5leHRlbmQoU3Vic2NyaWJlcnMucHJvdG90eXBlLCB7XG4gIGFkZDogZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICBmbiA9IEZuKGZuLCB0eXBlID09PSAnZW5kJyA/IDAgOiAxKTtcbiAgICBmbi50eXBlID0gdHlwZTtcbiAgICB0aGlzLl9mbnMgPSBjb25jYXQodGhpcy5fZm5zLCBbZm5dKTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbih0eXBlLCBmbikge1xuICAgIGZuID0gRm4oZm4pO1xuICAgIHRoaXMuX2ZucyA9IHJlbW92ZUJ5UHJlZCh0aGlzLl9mbnMsIGZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB4LnR5cGUgPT09IHR5cGUgJiYgRm4uaXNFcXVhbCh4LCBmbik7XG4gICAgfSk7XG4gIH0sXG4gIGNhbGxBbGw6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGZucyA9IHRoaXMuX2ZucztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgICAgU3Vic2NyaWJlcnMuY2FsbE9uZShmbnNbaV0sIGV2ZW50KTtcbiAgICB9XG4gIH0sXG4gIGlzRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9mbnMubGVuZ3RoID09PSAwO1xuICB9XG59KTtcblxuXG5cblxuXG4vLyBFdmVudHNcblxuZnVuY3Rpb24gRXZlbnQodHlwZSwgdmFsdWUsIGN1cnJlbnQpIHtcbiAgcmV0dXJuIHt0eXBlOiB0eXBlLCB2YWx1ZTogdmFsdWUsIGN1cnJlbnQ6ICEhY3VycmVudH07XG59XG5cbnZhciBDVVJSRU5UX0VORCA9IEV2ZW50KCdlbmQnLCB1bmRlZmluZWQsIHRydWUpO1xuXG5cblxuXG5cbi8vIE9ic2VydmFibGVcblxuZnVuY3Rpb24gT2JzZXJ2YWJsZSgpIHtcbiAgdGhpcy5fc3Vic2NyaWJlcnMgPSBuZXcgU3Vic2NyaWJlcnMoKTtcbiAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gIHRoaXMuX2FsaXZlID0gdHJ1ZTtcbn1cbktlZmlyLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuXG5leHRlbmQoT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcblxuICBfbmFtZTogJ29ic2VydmFibGUnLFxuXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uKCkge30sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7fSxcblxuICBfc2V0QWN0aXZlOiBmdW5jdGlvbihhY3RpdmUpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fb25BY3RpdmF0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbkRlYWN0aXZhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5fYWxpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG51bGw7XG4gIH0sXG5cbiAgX3NlbmQ6IGZ1bmN0aW9uKHR5cGUsIHgsIGlzQ3VycmVudCkge1xuICAgIGlmICh0aGlzLl9hbGl2ZSkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlcnMuY2FsbEFsbChFdmVudCh0eXBlLCB4LCBpc0N1cnJlbnQpKTtcbiAgICAgIGlmICh0eXBlID09PSAnZW5kJykgeyAgdGhpcy5fY2xlYXIoKSAgfVxuICAgIH1cbiAgfSxcblxuICBvbjogZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmFkZCh0eXBlLCBmbik7XG4gICAgICB0aGlzLl9zZXRBY3RpdmUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFN1YnNjcmliZXJzLmNhbGxPbmNlKHR5cGUsIGZuLCBDVVJSRU5UX0VORCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24odHlwZSwgZm4pIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzLnJlbW92ZSh0eXBlLCBmbik7XG4gICAgICBpZiAodGhpcy5fc3Vic2NyaWJlcnMuaXNFbXB0eSgpKSB7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uVmFsdWU6ICBmdW5jdGlvbihmbikgeyAgcmV0dXJuIHRoaXMub24oJ3ZhbHVlJywgZm4pICAgfSxcbiAgb25FbmQ6ICAgIGZ1bmN0aW9uKGZuKSB7ICByZXR1cm4gdGhpcy5vbignZW5kJywgZm4pICAgICB9LFxuICBvbkFueTogICAgZnVuY3Rpb24oZm4pIHsgIHJldHVybiB0aGlzLm9uKCdhbnknLCBmbikgICAgIH0sXG5cbiAgb2ZmVmFsdWU6IGZ1bmN0aW9uKGZuKSB7ICByZXR1cm4gdGhpcy5vZmYoJ3ZhbHVlJywgZm4pICB9LFxuICBvZmZFbmQ6ICAgZnVuY3Rpb24oZm4pIHsgIHJldHVybiB0aGlzLm9mZignZW5kJywgZm4pICAgIH0sXG4gIG9mZkFueTogICBmdW5jdGlvbihmbikgeyAgcmV0dXJuIHRoaXMub2ZmKCdhbnknLCBmbikgICAgfVxuXG59KTtcblxuXG4vLyBleHRlbmQoKSBjYW4ndCBoYW5kbGUgYHRvU3RyaW5nYCBpbiBJRThcbk9ic2VydmFibGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7ICByZXR1cm4gJ1snICsgdGhpcy5fbmFtZSArICddJyAgfTtcblxuXG5cblxuXG5cblxuXG5cbi8vIFN0cmVhbVxuXG5mdW5jdGlvbiBTdHJlYW0oKSB7XG4gIE9ic2VydmFibGUuY2FsbCh0aGlzKTtcbn1cbktlZmlyLlN0cmVhbSA9IFN0cmVhbTtcblxuaW5oZXJpdChTdHJlYW0sIE9ic2VydmFibGUsIHtcblxuICBfbmFtZTogJ3N0cmVhbSdcblxufSk7XG5cblxuXG5cblxuXG5cbi8vIFByb3BlcnR5XG5cbmZ1bmN0aW9uIFByb3BlcnR5KCkge1xuICBPYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gIHRoaXMuX2N1cnJlbnQgPSBOT1RISU5HO1xufVxuS2VmaXIuUHJvcGVydHkgPSBQcm9wZXJ0eTtcblxuaW5oZXJpdChQcm9wZXJ0eSwgT2JzZXJ2YWJsZSwge1xuXG4gIF9uYW1lOiAncHJvcGVydHknLFxuXG4gIF9zZW5kOiBmdW5jdGlvbih0eXBlLCB4LCBpc0N1cnJlbnQpIHtcbiAgICBpZiAodGhpcy5fYWxpdmUpIHtcbiAgICAgIGlmICghaXNDdXJyZW50KSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzLmNhbGxBbGwoRXZlbnQodHlwZSwgeCkpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICd2YWx1ZScpIHsgIHRoaXMuX2N1cnJlbnQgPSB4ICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ2VuZCcpIHsgIHRoaXMuX2NsZWFyKCkgIH1cbiAgICB9XG4gIH0sXG5cbiAgb246IGZ1bmN0aW9uKHR5cGUsIGZuKSB7XG4gICAgaWYgKHRoaXMuX2FsaXZlKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycy5hZGQodHlwZSwgZm4pO1xuICAgICAgdGhpcy5fc2V0QWN0aXZlKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY3VycmVudCAhPT0gTk9USElORykge1xuICAgICAgU3Vic2NyaWJlcnMuY2FsbE9uY2UodHlwZSwgZm4sIEV2ZW50KCd2YWx1ZScsIHRoaXMuX2N1cnJlbnQsIHRydWUpKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9hbGl2ZSkge1xuICAgICAgU3Vic2NyaWJlcnMuY2FsbE9uY2UodHlwZSwgZm4sIENVUlJFTlRfRU5EKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufSk7XG5cblxuXG5cblxuXG4vLyBMb2dcblxuZnVuY3Rpb24gbG9nQ2IobmFtZSwgZXZlbnQpIHtcbiAgdmFyIHR5cGVTdHIgPSAnPCcgKyBldmVudC50eXBlICsgKGV2ZW50LmN1cnJlbnQgPyAnOmN1cnJlbnQnIDogJycpICsgJz4nO1xuICBpZiAoZXZlbnQudHlwZSA9PT0gJ3ZhbHVlJykge1xuICAgIGNvbnNvbGUubG9nKG5hbWUsIHR5cGVTdHIsIGV2ZW50LnZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhuYW1lLCB0eXBlU3RyKTtcbiAgfVxufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHRoaXMub25BbnkoW2xvZ0NiLCBudWxsLCBuYW1lIHx8IHRoaXMudG9TdHJpbmcoKV0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUub2ZmTG9nID0gZnVuY3Rpb24obmFtZSkge1xuICB0aGlzLm9mZkFueShbbG9nQ2IsIG51bGwsIG5hbWUgfHwgdGhpcy50b1N0cmluZygpXSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8gS2VmaXIud2l0aEludGVydmFsKClcblxud2l0aEludGVydmFsKCd3aXRoSW50ZXJ2YWwnLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5fZm4gPSBGbihhcmdzWzBdLCAxKTtcbiAgICB2YXIgJCA9IHRoaXM7XG4gICAgdGhpcy5fZW1pdHRlciA9IHtcbiAgICAgIGVtaXQ6IGZ1bmN0aW9uKHgpIHsgICQuX3NlbmQoJ3ZhbHVlJywgeCkgIH0sXG4gICAgICBlbmQ6IGZ1bmN0aW9uKCkgeyAgJC5fc2VuZCgnZW5kJykgIH1cbiAgICB9XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gICAgdGhpcy5fZW1pdHRlciA9IG51bGw7XG4gIH0sXG4gIF9vblRpY2s6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2ZuLmludm9rZSh0aGlzLl9lbWl0dGVyKTtcbiAgfVxufSk7XG5cblxuXG5cblxuLy8gS2VmaXIuZnJvbVBvbGwoKVxuXG53aXRoSW50ZXJ2YWwoJ2Zyb21Qb2xsJywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuX2ZuID0gRm4oYXJnc1swXSwgMCk7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9vblRpY2s6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5fZm4uaW52b2tlKCkpO1xuICB9XG59KTtcblxuXG5cblxuXG4vLyBLZWZpci5pbnRlcnZhbCgpXG5cbndpdGhJbnRlcnZhbCgnaW50ZXJ2YWwnLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5feCA9IGFyZ3NbMF07XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl94ID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2VuZCgndmFsdWUnLCB0aGlzLl94KTtcbiAgfVxufSk7XG5cblxuXG5cbi8vIEtlZmlyLnNlcXVlbnRpYWxseSgpXG5cbndpdGhJbnRlcnZhbCgnc2VxdWVudGlhbGx5Jywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuX3hzID0gY2xvbmVBcnJheShhcmdzWzBdKTtcbiAgICBpZiAodGhpcy5feHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9zZW5kKCdlbmQnKVxuICAgIH1cbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3hzID0gbnVsbDtcbiAgfSxcbiAgX29uVGljazogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLl94cy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCB0aGlzLl94c1swXSk7XG4gICAgICAgIHRoaXMuX3NlbmQoJ2VuZCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5feHMuc2hpZnQoKSk7XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuLy8gS2VmaXIucmVwZWF0ZWRseSgpXG5cbndpdGhJbnRlcnZhbCgncmVwZWF0ZWRseScsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl94cyA9IGNsb25lQXJyYXkoYXJnc1swXSk7XG4gICAgdGhpcy5faSA9IC0xO1xuICB9LFxuICBfb25UaWNrOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5feHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5faSA9ICh0aGlzLl9pICsgMSkgJSB0aGlzLl94cy5sZW5ndGg7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHRoaXMuX3hzW3RoaXMuX2ldKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuXG5cbi8vIEtlZmlyLmxhdGVyKClcblxud2l0aEludGVydmFsKCdsYXRlcicsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl94ID0gYXJnc1swXTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3ggPSBudWxsO1xuICB9LFxuICBfb25UaWNrOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHRoaXMuX3gpO1xuICAgIHRoaXMuX3NlbmQoJ2VuZCcpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gX0Fic3RyYWN0UG9vbChvcHRpb25zKSB7XG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xuXG4gIHRoaXMuX3F1ZXVlTGltID0gZ2V0KG9wdGlvbnMsICdxdWV1ZUxpbScsIDApOyAgICAvLyAtMS4uLuKInlxuICB0aGlzLl9jb25jdXJMaW0gPSBnZXQob3B0aW9ucywgJ2NvbmN1ckxpbScsIC0xKTsgLy8gLTEsIDEuLi7iiJ5cbiAgdGhpcy5fZHJvcCA9IGdldChvcHRpb25zLCAnZHJvcCcsICduZXcnKTsgICAgICAgIC8vIG9sZCwgbmV3XG4gIGlmICh0aGlzLl9jb25jdXJMaW0gPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29wdGlvbnMuY29uY3VyTGltIGNhblxcJ3QgYmUgMCcpO1xuICB9XG5cbiAgdGhpcy5fcXVldWUgPSBbXTtcbiAgdGhpcy5fY3VyU291cmNlcyA9IFtdO1xuICB0aGlzLl9hY3RpdmF0aW5nID0gZmFsc2U7XG59XG5cbmluaGVyaXQoX0Fic3RyYWN0UG9vbCwgU3RyZWFtLCB7XG5cbiAgX25hbWU6ICdhYnN0cmFjdFBvb2wnLFxuXG4gIF9hZGQ6IGZ1bmN0aW9uKG9icykge1xuICAgIGlmICh0aGlzLl9jb25jdXJMaW0gPT09IC0xIHx8IHRoaXMuX2N1clNvdXJjZXMubGVuZ3RoIDwgdGhpcy5fY29uY3VyTGltKSB7XG4gICAgICB0aGlzLl9hZGRUb0N1cihvYnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fcXVldWVMaW0gPT09IC0xIHx8IHRoaXMuX3F1ZXVlLmxlbmd0aCA8IHRoaXMuX3F1ZXVlTGltKSB7XG4gICAgICAgIHRoaXMuX2FkZFRvUXVldWUob2JzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZHJvcCA9PT0gJ29sZCcpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlT2xkZXN0KCk7XG4gICAgICAgIHRoaXMuX2FkZChvYnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2FkZEFsbDogZnVuY3Rpb24ob2Jzcykge1xuICAgIHZhciAkID0gdGhpcztcbiAgICBmb3JFYWNoKG9ic3MsIGZ1bmN0aW9uKG9icykgeyAgJC5fYWRkKG9icykgIH0pO1xuICB9LFxuICBfcmVtb3ZlOiBmdW5jdGlvbihvYnMpIHtcbiAgICBpZiAodGhpcy5fcmVtb3ZlQ3VyKG9icykgPT09IC0xKSB7XG4gICAgICB0aGlzLl9yZW1vdmVRdWV1ZShvYnMpO1xuICAgIH1cbiAgfSxcblxuICBfYWRkVG9RdWV1ZTogZnVuY3Rpb24ob2JzKSB7XG4gICAgdGhpcy5fcXVldWUgPSBjb25jYXQodGhpcy5fcXVldWUsIFtvYnNdKTtcbiAgfSxcbiAgX2FkZFRvQ3VyOiBmdW5jdGlvbihvYnMpIHtcbiAgICB0aGlzLl9jdXJTb3VyY2VzID0gY29uY2F0KHRoaXMuX2N1clNvdXJjZXMsIFtvYnNdKTtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7ICB0aGlzLl9zdWIob2JzKSAgfVxuICB9LFxuICBfc3ViOiBmdW5jdGlvbihvYnMpIHtcbiAgICBvYnMub25BbnkoW3RoaXMuX2hhbmRsZVN1YkFueSwgdGhpc10pO1xuICAgIG9icy5vbkVuZChbdGhpcy5fcmVtb3ZlQ3VyLCB0aGlzLCBvYnNdKTtcbiAgfSxcbiAgX3Vuc3ViOiBmdW5jdGlvbihvYnMpIHtcbiAgICBvYnMub2ZmQW55KFt0aGlzLl9oYW5kbGVTdWJBbnksIHRoaXNdKTtcbiAgICBvYnMub2ZmRW5kKFt0aGlzLl9yZW1vdmVDdXIsIHRoaXMsIG9ic10pO1xuICB9LFxuICBfaGFuZGxlU3ViQW55OiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSAndmFsdWUnKSB7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIGV2ZW50LnZhbHVlLCBldmVudC5jdXJyZW50ICYmIHRoaXMuX2FjdGl2YXRpbmcpO1xuICAgIH1cbiAgfSxcblxuICBfcmVtb3ZlUXVldWU6IGZ1bmN0aW9uKG9icykge1xuICAgIHZhciBpbmRleCA9IGZpbmQodGhpcy5fcXVldWUsIG9icyk7XG4gICAgdGhpcy5fcXVldWUgPSByZW1vdmUodGhpcy5fcXVldWUsIGluZGV4KTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG4gIF9yZW1vdmVDdXI6IGZ1bmN0aW9uKG9icykge1xuICAgIGlmICh0aGlzLl9hY3RpdmUpIHsgIHRoaXMuX3Vuc3ViKG9icykgIH1cbiAgICB2YXIgaW5kZXggPSBmaW5kKHRoaXMuX2N1clNvdXJjZXMsIG9icyk7XG4gICAgdGhpcy5fY3VyU291cmNlcyA9IHJlbW92ZSh0aGlzLl9jdXJTb3VyY2VzLCBpbmRleCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKHRoaXMuX3F1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLl9wdWxsUXVldWUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VyU291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fb25FbXB0eSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH0sXG4gIF9yZW1vdmVPbGRlc3Q6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JlbW92ZUN1cih0aGlzLl9jdXJTb3VyY2VzWzBdKTtcbiAgfSxcblxuICBfcHVsbFF1ZXVlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLl9xdWV1ZSA9IGNsb25lQXJyYXkodGhpcy5fcXVldWUpO1xuICAgICAgdGhpcy5fYWRkVG9DdXIodGhpcy5fcXVldWUuc2hpZnQoKSk7XG4gICAgfVxuICB9LFxuXG4gIF9vbkFjdGl2YXRpb246IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzb3VyY2VzID0gdGhpcy5fY3VyU291cmNlc1xuICAgICAgLCBpO1xuICAgIHRoaXMuX2FjdGl2YXRpbmcgPSB0cnVlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSsrKSB7ICB0aGlzLl9zdWIoc291cmNlc1tpXSkgIH1cbiAgICB0aGlzLl9hY3RpdmF0aW5nID0gZmFsc2U7XG4gIH0sXG4gIF9vbkRlYWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNvdXJjZXMgPSB0aGlzLl9jdXJTb3VyY2VzXG4gICAgICAsIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHsgIHRoaXMuX3Vuc3ViKHNvdXJjZXNbaV0pICB9XG4gIH0sXG5cbiAgX2lzRW1wdHk6IGZ1bmN0aW9uKCkgeyAgcmV0dXJuIHRoaXMuX2N1clNvdXJjZXMubGVuZ3RoID09PSAwICB9LFxuICBfb25FbXB0eTogZnVuY3Rpb24oKSB7fSxcblxuICBfY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fcXVldWUgPSBudWxsO1xuICAgIHRoaXMuX2N1clNvdXJjZXMgPSBudWxsO1xuICB9XG5cbn0pO1xuXG5cblxuXG5cbi8vIC5tZXJnZSgpXG5cbnZhciBNZXJnZUxpa2UgPSB7XG4gIF9vbkVtcHR5OiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faW5pdGlhbGlzZWQpIHsgIHRoaXMuX3NlbmQoJ2VuZCcsIG51bGwsIHRoaXMuX2FjdGl2YXRpbmcpICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIE1lcmdlKHNvdXJjZXMpIHtcbiAgX0Fic3RyYWN0UG9vbC5jYWxsKHRoaXMpO1xuICBpZiAoc291cmNlcy5sZW5ndGggPT09IDApIHsgIHRoaXMuX3NlbmQoJ2VuZCcpICB9IGVsc2UgeyAgdGhpcy5fYWRkQWxsKHNvdXJjZXMpICB9XG4gIHRoaXMuX2luaXRpYWxpc2VkID0gdHJ1ZTtcbn1cblxuaW5oZXJpdChNZXJnZSwgX0Fic3RyYWN0UG9vbCwgZXh0ZW5kKHtfbmFtZTogJ21lcmdlJ30sIE1lcmdlTGlrZSkpO1xuXG5LZWZpci5tZXJnZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IE1lcmdlKGFncnNUb0FycmF5KGFyZ3VtZW50cykpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiBLZWZpci5tZXJnZShbdGhpcywgb3RoZXJdKTtcbn1cblxuXG5cblxuLy8gLmNvbmNhdCgpXG5cbmZ1bmN0aW9uIENvbmNhdChzb3VyY2VzKSB7XG4gIF9BYnN0cmFjdFBvb2wuY2FsbCh0aGlzLCB7Y29uY3VyTGltOiAxLCBxdWV1ZUxpbTogLTF9KTtcbiAgaWYgKHNvdXJjZXMubGVuZ3RoID09PSAwKSB7ICB0aGlzLl9zZW5kKCdlbmQnKSAgfSBlbHNlIHsgIHRoaXMuX2FkZEFsbChzb3VyY2VzKSAgfVxuICB0aGlzLl9pbml0aWFsaXNlZCA9IHRydWU7XG59XG5cbmluaGVyaXQoQ29uY2F0LCBfQWJzdHJhY3RQb29sLCBleHRlbmQoe19uYW1lOiAnY29uY2F0J30sIE1lcmdlTGlrZSkpO1xuXG5LZWZpci5jb25jYXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBDb25jYXQoYWdyc1RvQXJyYXkoYXJndW1lbnRzKSk7XG59XG5cbk9ic2VydmFibGUucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiBLZWZpci5jb25jYXQoW3RoaXMsIG90aGVyXSk7XG59XG5cblxuXG5cblxuXG4vLyAucG9vbCgpXG5cbmZ1bmN0aW9uIFBvb2woKSB7XG4gIF9BYnN0cmFjdFBvb2wuY2FsbCh0aGlzKTtcbn1cblxuaW5oZXJpdChQb29sLCBfQWJzdHJhY3RQb29sLCB7XG5cbiAgX25hbWU6ICdwb29sJyxcblxuICBhZGQ6IGZ1bmN0aW9uKG9icykge1xuICAgIHRoaXMuX2FkZChvYnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG9icykge1xuICAgIHRoaXMuX3JlbW92ZShvYnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn0pO1xuXG5LZWZpci5wb29sID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9vbCgpO1xufVxuXG5cblxuXG5cbi8vIC5mbGF0TWFwKClcblxuZnVuY3Rpb24gRmxhdE1hcChzb3VyY2UsIGZuLCBvcHRpb25zKSB7XG4gIF9BYnN0cmFjdFBvb2wuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgdGhpcy5fc291cmNlID0gc291cmNlO1xuICB0aGlzLl9mbiA9IGZuID8gRm4oZm4sIDEpIDogbnVsbDtcbiAgdGhpcy5fbWFpbkVuZGVkID0gZmFsc2U7XG4gIHRoaXMuX2xhc3RDdXJyZW50ID0gbnVsbDtcbn1cblxuaW5oZXJpdChGbGF0TWFwLCBfQWJzdHJhY3RQb29sLCB7XG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgX0Fic3RyYWN0UG9vbC5wcm90b3R5cGUuX29uQWN0aXZhdGlvbi5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2FjdGl2YXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX3NvdXJjZS5vbkFueShbdGhpcy5faGFuZGxlTWFpblNvdXJjZSwgdGhpc10pO1xuICAgIHRoaXMuX2FjdGl2YXRpbmcgPSBmYWxzZTtcbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBfQWJzdHJhY3RQb29sLnByb3RvdHlwZS5fb25EZWFjdGl2YXRpb24uY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9zb3VyY2Uub2ZmQW55KFt0aGlzLl9oYW5kbGVNYWluU291cmNlLCB0aGlzXSk7XG4gIH0sXG5cbiAgX2hhbmRsZU1haW5Tb3VyY2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd2YWx1ZScpIHtcbiAgICAgIGlmICghZXZlbnQuY3VycmVudCB8fCB0aGlzLl9sYXN0Q3VycmVudCAhPT0gZXZlbnQudmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYWRkKHRoaXMuX2ZuID8gdGhpcy5fZm4uaW52b2tlKGV2ZW50LnZhbHVlKSA6IGV2ZW50LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RDdXJyZW50ID0gZXZlbnQudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pc0VtcHR5KCkpIHtcbiAgICAgICAgdGhpcy5fc2VuZCgnZW5kJywgbnVsbCwgZXZlbnQuY3VycmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tYWluRW5kZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfb25FbXB0eTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX21haW5FbmRlZCkgeyAgdGhpcy5fc2VuZCgnZW5kJykgIH1cbiAgfSxcblxuICBfY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIF9BYnN0cmFjdFBvb2wucHJvdG90eXBlLl9jbGVhci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5fbGFzdEN1cnJlbnQgPSBudWxsO1xuICB9XG5cbn0pO1xuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwID0gZnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIG5ldyBGbGF0TWFwKHRoaXMsIGZuKVxuICAgIC5zZXROYW1lKHRoaXMsICdmbGF0TWFwJyk7XG59XG5cbk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBMYXRlc3QgPSBmdW5jdGlvbihmbikge1xuICByZXR1cm4gbmV3IEZsYXRNYXAodGhpcywgZm4sIHtjb25jdXJMaW06IDEsIGRyb3A6ICdvbGQnfSlcbiAgICAuc2V0TmFtZSh0aGlzLCAnZmxhdE1hcExhdGVzdCcpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwRmlyc3QgPSBmdW5jdGlvbihmbikge1xuICByZXR1cm4gbmV3IEZsYXRNYXAodGhpcywgZm4sIHtjb25jdXJMaW06IDF9KVxuICAgIC5zZXROYW1lKHRoaXMsICdmbGF0TWFwRmlyc3QnKTtcbn1cblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcENvbmNhdCA9IGZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBuZXcgRmxhdE1hcCh0aGlzLCBmbiwge3F1ZXVlTGltOiAtMSwgY29uY3VyTGltOiAxfSlcbiAgICAuc2V0TmFtZSh0aGlzLCAnZmxhdE1hcENvbmNhdCcpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwV2l0aENvbmN1cnJlbmN5TGltaXQgPSBmdW5jdGlvbihmbiwgbGltaXQpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGxpbWl0ID09PSAwKSB7XG4gICAgcmVzdWx0ID0gS2VmaXIubmV2ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAobGltaXQgPCAwKSB7ICBsaW1pdCA9IC0xICB9XG4gICAgcmVzdWx0ID0gbmV3IEZsYXRNYXAodGhpcywgZm4sIHtxdWV1ZUxpbTogLTEsIGNvbmN1ckxpbTogbGltaXR9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0LnNldE5hbWUodGhpcywgJ2ZsYXRNYXBXaXRoQ29uY3VycmVuY3lMaW1pdCcpO1xufVxuXG5cblxuXG5cbi8vIC5zYW1wbGVkQnkoKVxuXG5mdW5jdGlvbiBTYW1wbGVkQnkocGFzc2l2ZSwgYWN0aXZlLCBjb21iaW5hdG9yKSB7XG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xuICBpZiAoYWN0aXZlLmxlbmd0aCA9PT0gMCkge1xuICAgIHRoaXMuX3NlbmQoJ2VuZCcpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3Bhc3NpdmVDb3VudCA9IHBhc3NpdmUubGVuZ3RoO1xuICAgIHRoaXMuX2NvbWJpbmF0b3IgPSBjb21iaW5hdG9yID8gRm4oY29tYmluYXRvcikgOiBudWxsO1xuICAgIHRoaXMuX3NvdXJjZXMgPSBjb25jYXQocGFzc2l2ZSwgYWN0aXZlKTtcbiAgICB0aGlzLl9hbGl2ZUNvdW50ID0gMDtcbiAgICB0aGlzLl9jdXJyZW50cyA9IG5ldyBBcnJheSh0aGlzLl9zb3VyY2VzLmxlbmd0aCk7XG4gICAgZmlsbEFycmF5KHRoaXMuX2N1cnJlbnRzLCBOT1RISU5HKTtcbiAgICB0aGlzLl9hY3RpdmF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fZW1pdEFmdGVyQWN0aXZhdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuX2VuZEFmdGVyQWN0aXZhdGlvbiA9IGZhbHNlO1xuICB9XG59XG5cbmluaGVyaXQoU2FtcGxlZEJ5LCBTdHJlYW0sIHtcblxuICBfbmFtZTogJ3NhbXBsZWRCeScsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuX3NvdXJjZXMubGVuZ3RoLFxuICAgICAgICBpO1xuICAgIHRoaXMuX2FsaXZlQ291bnQgPSBsZW5ndGggLSB0aGlzLl9wYXNzaXZlQ291bnQ7XG4gICAgdGhpcy5fYWN0aXZhdGluZyA9IHRydWU7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW2ldLm9uQW55KFt0aGlzLl9oYW5kbGVBbnksIHRoaXMsIGldKTtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZhdGluZyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9lbWl0QWZ0ZXJBY3RpdmF0aW9uKSB7XG4gICAgICB0aGlzLl9lbWl0QWZ0ZXJBY3RpdmF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbWl0SWZGdWxsKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5kQWZ0ZXJBY3RpdmF0aW9uKSB7XG4gICAgICB0aGlzLl9zZW5kKCdlbmQnLCBudWxsLCB0cnVlKTtcbiAgICB9XG4gIH0sXG5cbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLl9zb3VyY2VzW2ldLm9mZkFueShbdGhpcy5faGFuZGxlQW55LCB0aGlzLCBpXSk7XG4gICAgfVxuICB9LFxuXG4gIF9lbWl0SWZGdWxsOiBmdW5jdGlvbihpc0N1cnJlbnQpIHtcbiAgICBpZiAoIWNvbnRhaW5zKHRoaXMuX2N1cnJlbnRzLCBOT1RISU5HKSkge1xuICAgICAgdmFyIGNvbWJpbmVkID0gY2xvbmVBcnJheSh0aGlzLl9jdXJyZW50cyk7XG4gICAgICBpZiAodGhpcy5fY29tYmluYXRvcikge1xuICAgICAgICBjb21iaW5lZCA9IHRoaXMuX2NvbWJpbmF0b3IuYXBwbHkodGhpcy5fY3VycmVudHMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCBjb21iaW5lZCwgaXNDdXJyZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgX2hhbmRsZUFueTogZnVuY3Rpb24oaSwgZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgdGhpcy5fY3VycmVudHNbaV0gPSBldmVudC52YWx1ZTtcbiAgICAgIGlmIChpID49IHRoaXMuX3Bhc3NpdmVDb3VudCkge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgICAgIHRoaXMuX2VtaXRBZnRlckFjdGl2YXRpb24gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2VtaXRJZkZ1bGwoZXZlbnQuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGkgPj0gdGhpcy5fcGFzc2l2ZUNvdW50KSB7XG4gICAgICAgIHRoaXMuX2FsaXZlQ291bnQtLTtcbiAgICAgICAgaWYgKHRoaXMuX2FsaXZlQ291bnQgPT09IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5fYWN0aXZhdGluZykge1xuICAgICAgICAgICAgdGhpcy5fZW5kQWZ0ZXJBY3RpdmF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2VuZCgnZW5kJywgbnVsbCwgZXZlbnQuY3VycmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9jbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgU3RyZWFtLnByb3RvdHlwZS5fY2xlYXIuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9zb3VyY2VzID0gbnVsbDtcbiAgICB0aGlzLl9jdXJyZW50cyA9IG51bGw7XG4gIH1cblxufSk7XG5cbktlZmlyLnNhbXBsZWRCeSA9IGZ1bmN0aW9uKHBhc3NpdmUsIGFjdGl2ZSwgY29tYmluYXRvcikge1xuICByZXR1cm4gbmV3IFNhbXBsZWRCeShwYXNzaXZlLCBhY3RpdmUsIGNvbWJpbmF0b3IpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5zYW1wbGVkQnkgPSBmdW5jdGlvbihvdGhlciwgY29tYmluYXRvcikge1xuICByZXR1cm4gS2VmaXIuc2FtcGxlZEJ5KFt0aGlzXSwgW290aGVyXSwgY29tYmluYXRvcik7XG59XG5cblxuXG5cbi8vIC5jb21iaW5lKClcblxuS2VmaXIuY29tYmluZSA9IGZ1bmN0aW9uKHNvdXJjZXMsIGNvbWJpbmF0b3IpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBTYW1wbGVkQnkoW10sIHNvdXJjZXMsIGNvbWJpbmF0b3IpO1xuICByZXN1bHQuX25hbWUgPSAnY29tYmluZSc7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbk9ic2VydmFibGUucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbihvdGhlciwgY29tYmluYXRvcikge1xuICByZXR1cm4gS2VmaXIuY29tYmluZShbdGhpcywgb3RoZXJdLCBjb21iaW5hdG9yKTtcbn1cblxuZnVuY3Rpb24gcHJvZHVjZVN0cmVhbShTdHJlYW1DbGFzcywgUHJvcGVydHlDbGFzcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7ICByZXR1cm4gbmV3IFN0cmVhbUNsYXNzKHRoaXMsIGFyZ3VtZW50cykgIH1cbn1cbmZ1bmN0aW9uIHByb2R1Y2VQcm9wZXJ0eShTdHJlYW1DbGFzcywgUHJvcGVydHlDbGFzcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7ICByZXR1cm4gbmV3IFByb3BlcnR5Q2xhc3ModGhpcywgYXJndW1lbnRzKSAgfVxufVxuXG5cblxuLy8gLnRvUHJvcGVydHkoKVxuXG53aXRoT25lU291cmNlKCd0b1Byb3BlcnR5Jywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgYXJnc1swXSk7XG4gICAgfVxuICB9XG59LCB7cHJvcGVydHlNZXRob2Q6IG51bGwsIHN0cmVhbU1ldGhvZDogcHJvZHVjZVByb3BlcnR5fSk7XG5cblxuXG5cbi8vIC5jaGFuZ2VzKClcblxud2l0aE9uZVNvdXJjZSgnY2hhbmdlcycsIHtcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbih4LCBpc0N1cnJlbnQpIHtcbiAgICBpZiAoIWlzQ3VycmVudCkge1xuICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCB4KTtcbiAgICB9XG4gIH1cbn0sIHtzdHJlYW1NZXRob2Q6IG51bGwsIHByb3BlcnR5TWV0aG9kOiBwcm9kdWNlU3RyZWFtfSk7XG5cblxuXG5cbi8vIC53aXRoSGFuZGxlcigpXG5cbndpdGhPbmVTb3VyY2UoJ3dpdGhIYW5kbGVyJywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuX2hhbmRsZXIgPSBGbihhcmdzWzBdLCAyKTtcbiAgICB0aGlzLl9mb3JjZWRDdXJyZW50ID0gZmFsc2U7XG4gICAgdmFyICQgPSB0aGlzO1xuICAgIHRoaXMuX2VtaXR0ZXIgPSB7XG4gICAgICBlbWl0OiBmdW5jdGlvbih4KSB7ICAkLl9zZW5kKCd2YWx1ZScsIHgsICQuX2ZvcmNlZEN1cnJlbnQpICB9LFxuICAgICAgZW5kOiBmdW5jdGlvbigpIHsgICQuX3NlbmQoJ2VuZCcsIG51bGwsICQuX2ZvcmNlZEN1cnJlbnQpICB9XG4gICAgfVxuICB9LFxuICBfZnJlZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faGFuZGxlciA9IG51bGw7XG4gICAgdGhpcy5fZW1pdHRlciA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVBbnk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fZm9yY2VkQ3VycmVudCA9IGV2ZW50LmN1cnJlbnQ7XG4gICAgdGhpcy5faGFuZGxlci5pbnZva2UodGhpcy5fZW1pdHRlciwgZXZlbnQpO1xuICAgIHRoaXMuX2ZvcmNlZEN1cnJlbnQgPSBmYWxzZTtcbiAgfVxufSk7XG5cblxuXG5cbnZhciB3aXRoRm5BcmdNaXhpbiA9IHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHsgIHRoaXMuX2ZuID0gRm4oYXJnc1swXSwgMSkgIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHsgIHRoaXMuX2ZuID0gbnVsbCAgfVxufTtcblxuXG4vLyAubWFwKGZuKVxuXG53aXRoT25lU291cmNlKCdtYXAnLCBleHRlbmQoe1xuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHgsIGlzQ3VycmVudCkge1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5fZm4uaW52b2tlKHgpLCBpc0N1cnJlbnQpO1xuICB9XG59LCB3aXRoRm5BcmdNaXhpbikpO1xuXG5cblxuXG5cbi8vIC5maWx0ZXIoZm4pXG5cbndpdGhPbmVTb3VyY2UoJ2ZpbHRlcicsIGV4dGVuZCh7XG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgaWYgKHRoaXMuX2ZuLmludm9rZSh4KSkge1xuICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCB4LCBpc0N1cnJlbnQpO1xuICAgIH1cbiAgfVxufSwgd2l0aEZuQXJnTWl4aW4pKTtcblxuXG5cblxuXG4vLyAudGFrZVdoaWxlKGZuKVxuXG53aXRoT25lU291cmNlKCd0YWtlV2hpbGUnLCBleHRlbmQoe1xuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHgsIGlzQ3VycmVudCkge1xuICAgIGlmICh0aGlzLl9mbi5pbnZva2UoeCkpIHtcbiAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCwgaXNDdXJyZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VuZCgnZW5kJywgbnVsbCwgaXNDdXJyZW50KTtcbiAgICB9XG4gIH1cbn0sIHdpdGhGbkFyZ01peGluKSk7XG5cblxuXG5cblxuLy8gLnRha2Uobilcblxud2l0aE9uZVNvdXJjZSgndGFrZScsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl9uID0gYXJnc1swXTtcbiAgICBpZiAodGhpcy5fbiA8PSAwKSB7XG4gICAgICB0aGlzLl9zZW5kKCdlbmQnKTtcbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgdGhpcy5fbi0tO1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCwgaXNDdXJyZW50KTtcbiAgICBpZiAodGhpcy5fbiA9PT0gMCkge1xuICAgICAgdGhpcy5fc2VuZCgnZW5kJyk7XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuXG4vLyAuc2tpcChuKVxuXG53aXRoT25lU291cmNlKCdza2lwJywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuX24gPSBhcmdzWzBdIDwgMCA/IDAgOiBhcmdzWzBdO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHgsIGlzQ3VycmVudCkge1xuICAgIGlmICh0aGlzLl9uID09PSAwKSB7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgsIGlzQ3VycmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX24tLTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuXG4vLyAuc2tpcER1cGxpY2F0ZXMoW2ZuXSlcblxud2l0aE9uZVNvdXJjZSgnc2tpcER1cGxpY2F0ZXMnLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5fZm4gPSBhcmdzWzBdICYmIEZuKGFyZ3NbMF0sIDIpO1xuICAgIHRoaXMuX3ByZXYgPSBOT1RISU5HO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICAgIHRoaXMuX3ByZXYgPSBudWxsO1xuICB9LFxuICBfaXNFcXVhbDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiB0aGlzLl9mbiA/IHRoaXMuX2ZuLmludm9rZShhLCBiKSA6IGEgPT09IGI7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgaWYgKHRoaXMuX3ByZXYgPT09IE5PVEhJTkcgfHwgIXRoaXMuX2lzRXF1YWwodGhpcy5fcHJldiwgeCkpIHtcbiAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCwgaXNDdXJyZW50KTtcbiAgICAgIHRoaXMuX3ByZXYgPSB4O1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG5cblxuLy8gLnNraXBXaGlsZShmbilcblxud2l0aE9uZVNvdXJjZSgnc2tpcFdoaWxlJywge1xuICBfaW5pdDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuX2ZuID0gRm4oYXJnc1swXSwgMSk7XG4gICAgdGhpcy5fc2tpcCA9IHRydWU7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgaWYgKCF0aGlzLl9za2lwKSB7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgsIGlzQ3VycmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fZm4uaW52b2tlKHgpKSB7XG4gICAgICB0aGlzLl9za2lwID0gZmFsc2U7XG4gICAgICB0aGlzLl9mbiA9IG51bGw7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgsIGlzQ3VycmVudCk7XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuXG4vLyAuZGlmZihzZWVkLCBmbilcblxud2l0aE9uZVNvdXJjZSgnZGlmZicsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl9wcmV2ID0gYXJnc1swXTtcbiAgICB0aGlzLl9mbiA9IEZuKGFyZ3NbMV0sIDIpO1xuICB9LFxuICBfZnJlZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcHJldiA9IG51bGw7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHgsIGlzQ3VycmVudCkge1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5fZm4uaW52b2tlKHRoaXMuX3ByZXYsIHgpLCBpc0N1cnJlbnQpO1xuICAgIHRoaXMuX3ByZXYgPSB4O1xuICB9XG59KTtcblxuXG5cblxuXG4vLyAuc2NhbihzZWVkLCBmbilcblxud2l0aE9uZVNvdXJjZSgnc2NhbicsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIGFyZ3NbMF0sIHRydWUpO1xuICAgIHRoaXMuX2ZuID0gRm4oYXJnc1sxXSwgMik7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9mbiA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgdGhpcy5fc2VuZCgndmFsdWUnLCB0aGlzLl9mbi5pbnZva2UodGhpcy5fY3VycmVudCwgeCksIGlzQ3VycmVudCk7XG4gIH1cbn0sIHtzdHJlYW1NZXRob2Q6IHByb2R1Y2VQcm9wZXJ0eX0pO1xuXG5cblxuXG5cbi8vIC5yZWR1Y2Uoc2VlZCwgZm4pXG5cbndpdGhPbmVTb3VyY2UoJ3JlZHVjZScsIHtcbiAgX2luaXQ6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB0aGlzLl9yZXN1bHQgPSBhcmdzWzBdO1xuICAgIHRoaXMuX2ZuID0gRm4oYXJnc1sxXSwgMik7XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpe1xuICAgIHRoaXMuX2ZuID0gbnVsbDtcbiAgICB0aGlzLl9yZXN1bHQgPSBudWxsO1xuICB9LFxuICBfaGFuZGxlVmFsdWU6IGZ1bmN0aW9uKHgpIHtcbiAgICB0aGlzLl9yZXN1bHQgPSB0aGlzLl9mbi5pbnZva2UodGhpcy5fcmVzdWx0LCB4KTtcbiAgfSxcbiAgX2hhbmRsZUVuZDogZnVuY3Rpb24oX18sIGlzQ3VycmVudCkge1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5fcmVzdWx0LCBpc0N1cnJlbnQpO1xuICAgIHRoaXMuX3NlbmQoJ2VuZCcsIG51bGwsIGlzQ3VycmVudCk7XG4gIH1cbn0pO1xuXG5cblxuXG5cbi8vIC5kZWJvdW5jZSh3YWl0LCB7aW1tZWRpYXRlfSlcblxud2l0aE9uZVNvdXJjZSgnZGVib3VuY2UnLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5fd2FpdCA9IE1hdGgubWF4KDAsIGFyZ3NbMF0pO1xuICAgIHRoaXMuX2ltbWVkaWF0ZSA9IGdldChhcmdzWzFdLCAnaW1tZWRpYXRlJywgZmFsc2UpO1xuICAgIHRoaXMuX2xhc3RBdHRlbXB0ID0gMDtcbiAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMuX2xhdGVyVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX2VuZExhdGVyID0gZmFsc2U7XG4gICAgdmFyICQgPSB0aGlzO1xuICAgIHRoaXMuXyRsYXRlciA9IGZ1bmN0aW9uKCkgeyAgJC5fbGF0ZXIoKSAgfTtcbiAgfSxcbiAgX2ZyZWU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xhdGVyVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuXyRsYXRlciA9IG51bGw7XG4gIH0sXG4gIF9oYW5kbGVWYWx1ZTogZnVuY3Rpb24oeCwgaXNDdXJyZW50KSB7XG4gICAgaWYgKGlzQ3VycmVudCkge1xuICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCB4LCBpc0N1cnJlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXN0QXR0ZW1wdCA9IG5vdygpO1xuICAgICAgaWYgKHRoaXMuX2ltbWVkaWF0ZSAmJiAhdGhpcy5fdGltZW91dElkKSB7XG4gICAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX3RpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLl90aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuXyRsYXRlciwgdGhpcy5fd2FpdCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2ltbWVkaWF0ZSkge1xuICAgICAgICB0aGlzLl9sYXRlclZhbHVlID0geDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uKF9fLCBpc0N1cnJlbnQpIHtcbiAgICBpZiAoaXNDdXJyZW50KSB7XG4gICAgICB0aGlzLl9zZW5kKCdlbmQnLCBudWxsLCBpc0N1cnJlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fdGltZW91dElkICYmICF0aGlzLl9pbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5fZW5kTGF0ZXIgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2VuZCgnZW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfbGF0ZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0ID0gbm93KCkgLSB0aGlzLl9sYXN0QXR0ZW1wdDtcbiAgICBpZiAobGFzdCA8IHRoaXMuX3dhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICB0aGlzLl90aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHRoaXMuXyRsYXRlciwgdGhpcy5fd2FpdCAtIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9pbW1lZGlhdGUpIHtcbiAgICAgICAgdGhpcy5fc2VuZCgndmFsdWUnLCB0aGlzLl9sYXRlclZhbHVlKTtcbiAgICAgICAgdGhpcy5fbGF0ZXJWYWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fZW5kTGF0ZXIpIHtcbiAgICAgICAgdGhpcy5fc2VuZCgnZW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuXG4vLyAudGhyb3R0bGUod2FpdCwge2xlYWRpbmcsIHRyYWlsaW5nfSlcblxud2l0aE9uZVNvdXJjZSgndGhyb3R0bGUnLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5fd2FpdCA9IE1hdGgubWF4KDAsIGFyZ3NbMF0pO1xuICAgIHRoaXMuX2xlYWRpbmcgPSBnZXQoYXJnc1sxXSwgJ2xlYWRpbmcnLCB0cnVlKTtcbiAgICB0aGlzLl90cmFpbGluZyA9IGdldChhcmdzWzFdLCAndHJhaWxpbmcnLCB0cnVlKTtcbiAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl90aW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMuX2VuZExhdGVyID0gZmFsc2U7XG4gICAgdGhpcy5fbGFzdENhbGxUaW1lID0gMDtcbiAgICB2YXIgJCA9IHRoaXM7XG4gICAgdGhpcy5fJHRyYWlsaW5nQ2FsbCA9IGZ1bmN0aW9uKCkgeyAgJC5fdHJhaWxpbmdDYWxsKCkgIH07XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl8kdHJhaWxpbmdDYWxsID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbih4LCBpc0N1cnJlbnQpIHtcbiAgICBpZiAoaXNDdXJyZW50KSB7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgsIGlzQ3VycmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjdXJUaW1lID0gbm93KCk7XG4gICAgICBpZiAodGhpcy5fbGFzdENhbGxUaW1lID09PSAwICYmICF0aGlzLl9sZWFkaW5nKSB7XG4gICAgICAgIHRoaXMuX2xhc3RDYWxsVGltZSA9IGN1clRpbWU7XG4gICAgICB9XG4gICAgICB2YXIgcmVtYWluaW5nID0gdGhpcy5fd2FpdCAtIChjdXJUaW1lIC0gdGhpcy5fbGFzdENhbGxUaW1lKTtcbiAgICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgICB0aGlzLl9jYW5jZWxUcmFsaW5nKCk7XG4gICAgICAgIHRoaXMuX2xhc3RDYWxsVGltZSA9IGN1clRpbWU7XG4gICAgICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3RyYWlsaW5nKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbFRyYWxpbmcoKTtcbiAgICAgICAgdGhpcy5fdHJhaWxpbmdWYWx1ZSA9IHg7XG4gICAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IHNldFRpbWVvdXQodGhpcy5fJHRyYWlsaW5nQ2FsbCwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIF9oYW5kbGVFbmQ6IGZ1bmN0aW9uKF9fLCBpc0N1cnJlbnQpIHtcbiAgICBpZiAoaXNDdXJyZW50KSB7XG4gICAgICB0aGlzLl9zZW5kKCdlbmQnLCBudWxsLCBpc0N1cnJlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fdGltZW91dElkKSB7XG4gICAgICAgIHRoaXMuX2VuZExhdGVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbmQoJ2VuZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2NhbmNlbFRyYWxpbmc6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl90aW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0SWQpO1xuICAgICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIF90cmFpbGluZ0NhbGw6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NlbmQoJ3ZhbHVlJywgdGhpcy5fdHJhaWxpbmdWYWx1ZSk7XG4gICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICB0aGlzLl90cmFpbGluZ1ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0Q2FsbFRpbWUgPSAhdGhpcy5fbGVhZGluZyA/IDAgOiBub3coKTtcbiAgICBpZiAodGhpcy5fZW5kTGF0ZXIpIHtcbiAgICAgIHRoaXMuX3NlbmQoJ2VuZCcpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuXG5cblxuLy8gLmRlbGF5KClcblxud2l0aE9uZVNvdXJjZSgnZGVsYXknLCB7XG4gIF9pbml0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5fd2FpdCA9IE1hdGgubWF4KDAsIGFyZ3NbMF0pO1xuICAgIHRoaXMuX2J1ZmYgPSBbXTtcbiAgICB2YXIgJCA9IHRoaXM7XG4gICAgdGhpcy5fJHNoaWZ0QnVmZiA9IGZ1bmN0aW9uKCkgeyAgJC5fc2VuZCgndmFsdWUnLCAkLl9idWZmLnNoaWZ0KCkpICB9XG4gIH0sXG4gIF9mcmVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9idWZmID0gbnVsbDtcbiAgICB0aGlzLl8kc2hpZnRCdWZmID0gbnVsbDtcbiAgfSxcbiAgX2hhbmRsZVZhbHVlOiBmdW5jdGlvbih4LCBpc0N1cnJlbnQpIHtcbiAgICBpZiAoaXNDdXJyZW50KSB7XG4gICAgICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgsIGlzQ3VycmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1ZmYucHVzaCh4KTtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5fJHNoaWZ0QnVmZiwgdGhpcy5fd2FpdCk7XG4gICAgfVxuICB9LFxuICBfaGFuZGxlRW5kOiBmdW5jdGlvbihfXywgaXNDdXJyZW50KSB7XG4gICAgaWYgKGlzQ3VycmVudCkge1xuICAgICAgdGhpcy5fc2VuZCgnZW5kJywgbnVsbCwgaXNDdXJyZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyICQgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgICQuX3NlbmQoJ2VuZCcpICB9LCB0aGlzLl93YWl0KTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBLZWZpci5mcm9tQmluZGVyKGZuKVxuXG5mdW5jdGlvbiBGcm9tQmluZGVyKGZuKSB7XG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xuICB0aGlzLl9mbiA9IEZuKGZuLCAxKTtcbiAgdGhpcy5fdW5zdWJzY3JpYmUgPSBudWxsO1xufVxuXG5pbmhlcml0KEZyb21CaW5kZXIsIFN0cmVhbSwge1xuXG4gIF9uYW1lOiAnZnJvbUJpbmRlcicsXG5cbiAgX29uQWN0aXZhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyICQgPSB0aGlzXG4gICAgICAsIHVuc3ViXG4gICAgICAsIGlzQ3VycmVudCA9IHRydWVcbiAgICAgICwgZW1pdHRlciA9IHtcbiAgICAgICAgZW1pdDogZnVuY3Rpb24oeCkgeyAgJC5fc2VuZCgndmFsdWUnLCB4LCBpc0N1cnJlbnQpICB9LFxuICAgICAgICBlbmQ6IGZ1bmN0aW9uKCkgeyAgJC5fc2VuZCgnZW5kJywgbnVsbCwgaXNDdXJyZW50KSAgfVxuICAgICAgfTtcbiAgICB1bnN1YiA9IHRoaXMuX2ZuLmludm9rZShlbWl0dGVyKTtcbiAgICBpc0N1cnJlbnQgPSBmYWxzZTtcbiAgICBpZiAodW5zdWIpIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gRm4odW5zdWIsIDApO1xuICAgIH1cbiAgfSxcbiAgX29uRGVhY3RpdmF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fdW5zdWJzY3JpYmUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlLmludm9rZSgpO1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmUgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICBfY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIFN0cmVhbS5wcm90b3R5cGUuX2NsZWFyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZm4gPSBudWxsO1xuICB9XG5cbn0pXG5cbktlZmlyLmZyb21CaW5kZXIgPSBmdW5jdGlvbihmbikge1xuICByZXR1cm4gbmV3IEZyb21CaW5kZXIoZm4pO1xufVxuXG5cblxuXG5cblxuLy8gS2VmaXIuZW1pdHRlcigpXG5cbmZ1bmN0aW9uIEVtaXR0ZXIoKSB7XG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG5pbmhlcml0KEVtaXR0ZXIsIFN0cmVhbSwge1xuICBfbmFtZTogJ2VtaXR0ZXInLFxuICBlbWl0OiBmdW5jdGlvbih4KSB7ICB0aGlzLl9zZW5kKCd2YWx1ZScsIHgpICB9LFxuICBlbmQ6IGZ1bmN0aW9uKCkgeyAgdGhpcy5fc2VuZCgnZW5kJykgIH1cbn0pO1xuXG5LZWZpci5lbWl0dGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgRW1pdHRlcigpO1xufVxuXG5cblxuXG5cblxuXG4vLyBLZWZpci5uZXZlcigpXG5cbnZhciBuZXZlck9iaiA9IG5ldyBTdHJlYW0oKTtcbm5ldmVyT2JqLl9zZW5kKCdlbmQnKTtcbm5ldmVyT2JqLl9uYW1lID0gJ25ldmVyJztcbktlZmlyLm5ldmVyID0gZnVuY3Rpb24oKSB7ICByZXR1cm4gbmV2ZXJPYmogIH1cblxuXG5cblxuXG4vLyBLZWZpci5jb25zdGFudCh4KVxuXG5mdW5jdGlvbiBDb25zdGFudCh4KSB7XG4gIFByb3BlcnR5LmNhbGwodGhpcyk7XG4gIHRoaXMuX3NlbmQoJ3ZhbHVlJywgeCk7XG4gIHRoaXMuX3NlbmQoJ2VuZCcpO1xufVxuXG5pbmhlcml0KENvbnN0YW50LCBQcm9wZXJ0eSwge1xuICBfbmFtZTogJ2NvbnN0YW50J1xufSlcblxuS2VmaXIuY29uc3RhbnQgPSBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBuZXcgQ29uc3RhbnQoeCk7XG59XG5cblxuLy8gLnNldE5hbWVcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc2V0TmFtZSA9IGZ1bmN0aW9uKHNvdXJjZU9icywgc2VsZk5hbWUgLyogb3IganVzdCBzZWxmTmFtZSAqLykge1xuICB0aGlzLl9uYW1lID0gc2VsZk5hbWUgPyBzb3VyY2VPYnMuX25hbWUgKyAnLicgKyBzZWxmTmFtZSA6IHNvdXJjZU9icztcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLyAubWFwVG9cblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUubWFwVG8gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7ICByZXR1cm4gdmFsdWUgIH0pLnNldE5hbWUodGhpcywgJ21hcFRvJyk7XG59XG5cblxuXG4vLyAucGx1Y2tcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUucGx1Y2sgPSBmdW5jdGlvbihwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geFtwcm9wZXJ0eU5hbWVdO1xuICB9KS5zZXROYW1lKHRoaXMsICdwbHVjaycpO1xufVxuXG5cblxuLy8gLmludm9rZVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbihtZXRob2ROYW1lIC8qLCBhcmcxLCBhcmcyLi4uICovKSB7XG4gIHZhciBhcmdzID0gcmVzdChhcmd1bWVudHMsIDEpO1xuICByZXR1cm4gdGhpcy5tYXAoYXJncyA/XG4gICAgZnVuY3Rpb24oeCkgeyAgcmV0dXJuIGFwcGx5KHhbbWV0aG9kTmFtZV0sIHgsIGFyZ3MpICB9IDpcbiAgICBmdW5jdGlvbih4KSB7ICByZXR1cm4geFttZXRob2ROYW1lXSgpICB9XG4gICkuc2V0TmFtZSh0aGlzLCAnaW52b2tlJyk7XG59XG5cblxuXG4vLyAudGFwXG5cbk9ic2VydmFibGUucHJvdG90eXBlLnRhcCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGZuID0gRm4oZm4sIDEpO1xuICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oeCkge1xuICAgIGZuLmludm9rZSh4KTtcbiAgICByZXR1cm4geDtcbiAgfSkuc2V0TmFtZSh0aGlzLCAndGFwJyk7XG59XG5cblxuXG4vLyAuYW5kXG5cbktlZmlyLmFuZCA9IGZ1bmN0aW9uKG9ic2VydmFibGVzKSB7XG4gIHJldHVybiBLZWZpci5jb21iaW5lKG9ic2VydmFibGVzLCBhbmQpLnNldE5hbWUoJ2FuZCcpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gdGhpcy5jb21iaW5lKG90aGVyLCBhbmQpLnNldE5hbWUoJ2FuZCcpO1xufVxuXG5cblxuLy8gLm9yXG5cbktlZmlyLm9yID0gZnVuY3Rpb24ob2JzZXJ2YWJsZXMpIHtcbiAgcmV0dXJuIEtlZmlyLmNvbWJpbmUob2JzZXJ2YWJsZXMsIG9yKS5zZXROYW1lKCdvcicpO1xufVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiB0aGlzLmNvbWJpbmUob3RoZXIsIG9yKS5zZXROYW1lKCdvcicpO1xufVxuXG5cblxuLy8gLm5vdFxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5ub3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHgpIHsgIHJldHVybiAheCAgfSkuc2V0TmFtZSh0aGlzLCAnbm90Jyk7XG59XG5cblxuXG4vLyAuYXdhaXRpbmdcblxuT2JzZXJ2YWJsZS5wcm90b3R5cGUuYXdhaXRpbmcgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gS2VmaXIubWVyZ2UoW1xuICAgIHRoaXMubWFwVG8odHJ1ZSksXG4gICAgb3RoZXIubWFwVG8oZmFsc2UpXG4gIF0pLnNraXBEdXBsaWNhdGVzKCkudG9Qcm9wZXJ0eShmYWxzZSkuc2V0TmFtZSh0aGlzLCAnYXdhaXRpbmcnKTtcbn1cblxuXG5cbi8vIC5maWx0ZXJCeVxuXG5PYnNlcnZhYmxlLnByb3RvdHlwZS5maWx0ZXJCeSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIHJldHVybiBvdGhlclxuICAgIC5zYW1wbGVkQnkodGhpcylcbiAgICAud2l0aEhhbmRsZXIoZnVuY3Rpb24oZW1pdHRlciwgZSkge1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgZW1pdHRlci5lbmQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS52YWx1ZVswXSkge1xuICAgICAgICBlbWl0dGVyLmVtaXQoZS52YWx1ZVsxXSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuc2V0TmFtZSh0aGlzLCAnZmlsdGVyQnknKTtcbn1cblxuXG5cblxuLy8gLmZyb21DYWxsYmFja1xuXG5LZWZpci5mcm9tQ2FsbGJhY2sgPSBmdW5jdGlvbihjYWxsYmFja0NvbnN1bWVyKSB7XG4gIGNhbGxiYWNrQ29uc3VtZXIgPSBGbihjYWxsYmFja0NvbnN1bWVyLCAxKTtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gS2VmaXIuZnJvbUJpbmRlcihmdW5jdGlvbihlbWl0dGVyKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxiYWNrQ29uc3VtZXIuaW52b2tlKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgZW1pdHRlci5lbWl0KHgpO1xuICAgICAgICBlbWl0dGVyLmVuZCgpO1xuICAgICAgfSk7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSkuc2V0TmFtZSgnZnJvbUNhbGxiYWNrJyk7XG59XG5cblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBLZWZpcjtcbiAgICB9KTtcbiAgICBnbG9iYWwuS2VmaXIgPSBLZWZpcjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLZWZpcjtcbiAgICBLZWZpci5LZWZpciA9IEtlZmlyO1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5LZWZpciA9IEtlZmlyO1xuICB9XG5cbn0odGhpcykpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2RlbWkvUHJvamVjdHMvcmVhY3QtcGVsbGV0L34va2VmaXIvZGlzdC9rZWZpci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBzZGsgPSByZXF1aXJlKCdyZXF1aXJlLXNkaycpKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJywgJ1lUJyk7XG52YXIgbG9hZFRyaWdnZXIgPSBzZGsudHJpZ2dlcigpO1xuXG4vLyBZVCBBUEkgcmVxdWlyZXMgZ2xvYmFsIHJlYWR5IGV2ZW50IGhhbmRsZXJcbndpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgbG9hZFRyaWdnZXIoKTtcbiAgZGVsZXRlIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeTtcbn07XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIFNlcGFyYXRlcyB2aWRlbyBJRCBmcm9tIHZhbGlkIFlvdVR1YmUgVVJMXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGdldFZpZGVvSWQodXJsKSB7XG4gIHZhciByZWdleCA9IC8oeW91dHVcXC5iZVxcL3x5b3V0dWJlXFwuY29tXFwvKHdhdGNoXFw/KC4qJik/dj18KGVtYmVkfHYpXFwvKSkoW15cXD8mXCInPl0rKS87XG4gIGlmICh1cmwpIHJldHVybiB1cmwubWF0Y2gocmVnZXgpWzVdO1xufVxuXG4vKipcbiAqIFNpbXBsZSB3cmFwcGVyIG92ZXIgWW91VHViZSBKYXZhU2NyaXB0IEFQSVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnZXhwb3J0cycsXG4gIHByb3BUeXBlczoge1xuICAgIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhdXRvcGxheTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgcGxheWluZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgc3RvcHBlZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgZW5kZWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6ICdyZWFjdC15dC1wbGF5ZXInLFxuICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBwbGF5aW5nOiBub29wLFxuICAgICAgc3RvcHBlZDogbm9vcCxcbiAgICAgIGVuZGVkOiBub29wXG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogT25jZSBZb3VUdWJlIEFQSSBoYWQgbG9hZGVkLCBhIG5ldyBZVC5QbGF5ZXJcbiAgICogaW5zdGFuY2Ugd2lsbCBiZSBjcmVhdGVkIGFuZCBpdHMgZXZlbnRzIGJvdW5kLlxuICAgKi9cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIC8vIGNhbGxlZCBvbmNlIEFQSSBoYXMgbG9hZGVkLlxuICAgIHNkayhmdW5jdGlvbihlcnIsIHlvdXR1YmUpIHtcbiAgICAgIHZhciBwbGF5ZXIgPSBuZXcgeW91dHViZS5QbGF5ZXIoX3RoaXMucHJvcHMuaWQsIHtcbiAgICAgICAgdmlkZW9JZDogZ2V0VmlkZW9JZChfdGhpcy5wcm9wcy51cmwpLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IF90aGlzLl9oYW5kbGVQbGF5ZXJTdGF0ZUNoYW5nZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe3BsYXllcjogcGxheWVyfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudXJsICE9PSBuZXh0UHJvcHMudXJsKSB7XG4gICAgICB0aGlzLl9sb2FkTmV3VXJsKG5leHRQcm9wcy51cmwpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU3RhcnQgYSBuZXcgdmlkZW9cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgXG4gIF9sb2FkTmV3VXJsOiBmdW5jdGlvbih1cmwpIHtcbiAgICB0aGlzLnByb3BzLmF1dG9wbGF5XG4gICAgICA/IHRoaXMuc3RhdGUucGxheWVyLmxvYWRWaWRlb0J5SWQoZ2V0VmlkZW9JZCh1cmwpKVxuICAgICAgOiB0aGlzLnN0YXRlLnBsYXllci5jdWVWaWRlb0J5SWQoZ2V0VmlkZW9JZCh1cmwpKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVzcG9uZCB0byBwbGF5ZXIgZXZlbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudFxuICAgKi9cbiAgXG4gIF9oYW5kbGVQbGF5ZXJTdGF0ZUNoYW5nZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBzd2l0Y2goZXZlbnQuZGF0YSkge1xuICAgICAgY2FzZSAwOiBcbiAgICAgICAgdGhpcy5wcm9wcy5lbmRlZCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLnByb3BzLnBsYXlpbmcoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5wcm9wcy5zdG9wcGVkKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OiBcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5ET00uZGl2KHtpZDogdGhpcy5wcm9wcy5pZH0pXG4gICAgKTtcbiAgfVxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9kZW1pL1Byb2plY3RzL3JlYWN0LXBlbGxldC9+L2pzeC1sb2FkZXIhLi9+L3JlYWN0LXlvdXR1YmUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIHB1YnN1YiA9IHJlcXVpcmUoXCJwdWJzdWJcIik7XG52YXIgbG9hZFNjcmlwdCA9IHJlcXVpcmUoXCJsb2FkLXNjcmlwdFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlU0RLO1xuXG5mdW5jdGlvbiByZXF1aXJlU0RLICh1cmwsIGdsb2JhbCkge1xuICB2YXIgb25SZWFkeSA9IHB1YnN1YigpO1xuXG4gIHZhciBoYXNNYW51YWxUcmlnZ2VyO1xuICB2YXIgaXNMb2FkaW5nO1xuICB2YXIgaXNMb2FkZWQ7XG5cbiAgbG9hZC50cmlnZ2VyID0gc2V0TWFudWFsVHJpZ2dlcjtcblxuICByZXR1cm4gbG9hZDtcblxuICBmdW5jdGlvbiBpc0FscmVhZHlMb2FkZWQgKCkge1xuICAgIHJldHVybiB3aW5kb3dbZ2xvYmFsXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWQgKGNhbGxiYWNrKSB7XG4gICAgaWYgKGlzQWxyZWFkeUxvYWRlZCgpIHx8IGlzTG9hZGVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sgJiYgY2FsbGJhY2sodW5kZWZpbmVkLCB3aW5kb3dbZ2xvYmFsXSk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2sgJiYgb25SZWFkeS5zdWJzY3JpYmUoY2FsbGJhY2spO1xuXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuO1xuXG4gICAgaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgIGlmICghdXJsKSByZXR1cm47XG5cbiAgICBsb2FkU2NyaXB0KHVybCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoaGFzTWFudWFsVHJpZ2dlcikgcmV0dXJuO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gb25SZWFkeS5wdWJsaXNoKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgdHJpZ2dlcigpO1xuICAgIH0pO1xuXG4gIH07XG5cbiAgZnVuY3Rpb24gdHJpZ2dlciAoKSB7XG4gICAgaXNMb2FkZWQgPSB0cnVlO1xuICAgIG9uUmVhZHkucHVibGlzaCh1bmRlZmluZWQsIGdsb2JhbCA/IHdpbmRvd1tnbG9iYWxdIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE1hbnVhbFRyaWdnZXIgKCkge1xuICAgIGhhc01hbnVhbFRyaWdnZXIgPSB0cnVlO1xuICAgIHJldHVybiB0cmlnZ2VyO1xuICB9XG5cblxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QteW91dHViZS9+L3JlcXVpcmUtc2RrL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUHViU3ViO1xuXG5mdW5jdGlvbiBQdWJTdWIobWl4KXtcblxuICB2YXIgcHJveHkgPSBtaXggfHwgZnVuY3Rpb24gcHVic3ViUHJveHkoKXtcbiAgICBhcmd1bWVudHMubGVuZ3RoICYmIHN1Yi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc3ViKGNhbGxiYWNrKXtcbiAgICBzdWJzY3JpYmUocHJveHksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1Yk9uY2UoY2FsbGJhY2spe1xuICAgIG9uY2UocHJveHksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuc3ViT25jZShjYWxsYmFjayl7XG4gICAgdW5zdWJzY3JpYmVPbmNlKHByb3h5LCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnN1YihjYWxsYmFjayl7XG4gICAgdW5zdWJzY3JpYmUocHJveHksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1Yigpe1xuICAgIHZhciBhcmdzID0gW3Byb3h5XTtcbiAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgIHB1Ymxpc2guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxuXG4gIHByb3h5LnN1YnNjcmliZXJzICAgICAgICA9IFtdO1xuICBwcm94eS5zdWJzY3JpYmVyc0Zvck9uY2UgPSBbXTtcblxuICBwcm94eS5zdWJzY3JpYmUgICAgICAgICAgPSBzdWI7XG4gIHByb3h5LnN1YnNjcmliZS5vbmNlICAgICA9IHN1Yk9uY2U7XG4gIHByb3h5LnVuc3Vic2NyaWJlICAgICAgICA9IHVuc3ViO1xuICBwcm94eS51bnN1YnNjcmliZS5vbmNlICAgPSB1bnN1Yk9uY2U7XG4gIHByb3h5LnB1Ymxpc2ggICAgICAgICAgICA9IHB1YjtcblxuICByZXR1cm4gcHJveHk7XG59XG5cbi8qKlxuICogUHVibGlzaCBcImZyb21cIiBieSBhcHBseWluZyBnaXZlbiBhcmdzXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnJvbVxuICogQHBhcmFtIHsuLi5Bbnl9IGFyZ3NcbiAqL1xuZnVuY3Rpb24gcHVibGlzaChmcm9tKXtcblxuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgaWYgKGZyb20gJiYgZnJvbS5zdWJzY3JpYmVycyAmJiBmcm9tLnN1YnNjcmliZXJzLmxlbmd0aCA+IDApIHtcbiAgICBmcm9tLnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24oY2IsIGkpe1xuICAgICAgaWYoIWNiKSByZXR1cm47XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNiLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICB9IGNhdGNoKGV4Yykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHRocm93IGV4YzsgfSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZnJvbSAmJiBmcm9tLnN1YnNjcmliZXJzRm9yT25jZSAmJiBmcm9tLnN1YnNjcmliZXJzRm9yT25jZS5sZW5ndGggPiAwKSB7XG4gICAgZnJvbS5zdWJzY3JpYmVyc0Zvck9uY2UuZm9yRWFjaChmdW5jdGlvbihjYiwgaSl7XG4gICAgICBpZighY2IpIHJldHVybjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgIH0gY2F0Y2goZXhjKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgdGhyb3cgZXhjOyB9LCAwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZyb20uc3Vic2NyaWJlcnNGb3JPbmNlID0gW107XG5cbiAgfVxuXG59XG5cbi8qKlxuICogU3Vic2NyaWJlIGNhbGxiYWNrIHRvIGdpdmVuIHB1YnN1YiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtQdWJzdWJ9IHRvXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5mdW5jdGlvbiBzdWJzY3JpYmUodG8sIGNhbGxiYWNrKXtcbiAgaWYoIWNhbGxiYWNrKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0by5zdWJzY3JpYmVycy5wdXNoKGNhbGxiYWNrKTtcbn1cblxuXG4vKipcbiAqIFN1YnNjcmliZSBjYWxsYmFjayB0byBnaXZlbiBwdWJzdWIgb2JqZWN0IGZvciBvbmx5IG9uZSBwdWJsaXNoLlxuICpcbiAqIEBwYXJhbSB7UHVic3VifSB0b1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZnVuY3Rpb24gb25jZSh0bywgY2FsbGJhY2spe1xuICBpZighY2FsbGJhY2spIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdG8uc3Vic2NyaWJlcnNGb3JPbmNlLnB1c2goY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIFVuc3Vic2NyaWJlIGNhbGxiYWNrIHRvIGdpdmVuIHB1YnN1YiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtQdWJzdWJ9IHRvXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5mdW5jdGlvbiB1bnN1YnNjcmliZSh0bywgY2FsbGJhY2spe1xuICB2YXIgaSA9IHRvLnN1YnNjcmliZXJzLmxlbmd0aDtcblxuICB3aGlsZShpLS0pe1xuICAgIGlmKHRvLnN1YnNjcmliZXJzW2ldICYmIHRvLnN1YnNjcmliZXJzW2ldID09IGNhbGxiYWNrKXtcbiAgICAgIHRvLnN1YnNjcmliZXJzW2ldID0gdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuLyoqXG4gKiBVbnN1YnNjcmliZSBjYWxsYmFjayBzdWJzY3JpYmVkIGZvciBvbmNlIHRvIHNwZWNpZmllZCBwdWJzdWIuXG4gKlxuICogQHBhcmFtIHtQdWJzdWJ9IHRvXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7Qm9vbGVhbiBvciBOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHVuc3Vic2NyaWJlT25jZSh0bywgY2FsbGJhY2spe1xuICB2YXIgaSA9IHRvLnN1YnNjcmliZXJzRm9yT25jZS5sZW5ndGg7XG5cbiAgd2hpbGUoaS0tKXtcbiAgICBpZih0by5zdWJzY3JpYmVyc0Zvck9uY2VbaV0gJiYgdG8uc3Vic2NyaWJlcnNGb3JPbmNlW2ldID09IGNhbGxiYWNrKXtcbiAgICAgIHRvLnN1YnNjcmliZXJzRm9yT25jZVtpXSA9IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QteW91dHViZS9+L3JlcXVpcmUtc2RrL34vcHVic3ViL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb2FkIChzcmMsIGNiKSB7XG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdXG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gIGNiID0gY2IgfHwgZnVuY3Rpb24oKSB7fTtcblxuICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXG4gIHNjcmlwdC5jaGFyc2V0ID0gJ3V0ZjgnXG4gIHNjcmlwdC5hc3luYyA9IHRydWVcbiAgc2NyaXB0LnNyYyA9IHNyY1xuXG4gIHZhciBvbmVuZCA9ICdvbmxvYWQnIGluIHNjcmlwdCA/IHN0ZE9uRW5kIDogaWVPbkVuZFxuICBvbmVuZChzY3JpcHQsIGNiKVxuXG4gIC8vIHNvbWUgZ29vZCBsZWdhY3kgYnJvd3NlcnMgKGZpcmVmb3gpIGZhaWwgdGhlICdpbicgZGV0ZWN0aW9uIGFib3ZlXG4gIC8vIHNvIGFzIGEgZmFsbGJhY2sgd2UgYWx3YXlzIHNldCBvbmxvYWRcbiAgLy8gb2xkIElFIHdpbGwgaWdub3JlIHRoaXMgYW5kIG5ldyBJRSB3aWxsIHNldCBvbmxvYWRcbiAgaWYgKCFzY3JpcHQub25sb2FkKSB7XG4gICAgc3RkT25FbmQoc2NyaXB0LCBjYik7XG4gIH1cblxuICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcbn1cblxuZnVuY3Rpb24gc3RkT25FbmQgKHNjcmlwdCwgY2IpIHtcbiAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9uZXJyb3IgPSB0aGlzLm9ubG9hZCA9IG51bGxcbiAgICBjYigpXG4gIH1cbiAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdGhpcy5vbmxvYWQgPSBudWxsIGhlcmUgaXMgbmVjZXNzYXJ5XG4gICAgLy8gYmVjYXVzZSBldmVuIElFOSB3b3JrcyBub3QgbGlrZSBvdGhlcnNcbiAgICB0aGlzLm9uZXJyb3IgPSB0aGlzLm9ubG9hZCA9IG51bGxcbiAgICBjYihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkICcgKyB0aGlzLnNyYykpXG4gIH1cbn1cblxuZnVuY3Rpb24gaWVPbkVuZCAoc2NyaXB0LCBjYikge1xuICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgIT0gJ2NvbXBsZXRlJyAmJiB0aGlzLnJlYWR5U3RhdGUgIT0gJ2xvYWRlZCcpIHJldHVyblxuICAgIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbFxuICAgIGNiKG51bGwsIHRydWUpIC8vIHRoZXJlIGlzIG5vIHdheSB0byBjYXRjaCBsb2FkaW5nIGVycm9ycyBpbiBJRThcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QteW91dHViZS9+L3JlcXVpcmUtc2RrL34vbG9hZC1zY3JpcHQvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFM0xqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZ29KSUhkcFpIUm9QU0k0T0hCNElpQm9aV2xuYUhROUlqSXljSGdpSUhacFpYZENiM2c5SWpBZ01DQTRPQ0F5TWlJZ1pXNWhZbXhsTFdKaFkydG5jbTkxYm1ROUltNWxkeUF3SURBZ09EZ2dNaklpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnbzhaejRLQ1R4blBnb0pDVHhuUGdvSkNRazhjR0YwYUNCbWFXeHNQU0lqUlVReFFUTkNJaUJrUFNKTk1qQXVPREEwTERBdU56RmpMVE11T1RBMUxEQXROQzQyTkRrc01pNHlPVGt0TlM0NE1UUXNNeTQ1Tnpsak1Dd3dMVE11TVRZNExEUXVPREkxTFRRdU16Y3pMRFl1TmpZeVREZ3VNREU0TERBdU56Rm9MVFl1T1RnS0NRa0pDVXcxTGpRMExERTRMalV6TTJNd0xqa3hNaXd6TGpFNE5Dd3pMalV3TkN3eUxqazRNU3d6TGpVd05Dd3lMams0TVdNeExqYzNOU3d3TERNdU1UQTJMVEF1T1RReExEUXVNekV5TFRJdU56SXlUREkxTGpFek1Td3dMamN4Q2drSkNRbERNalV1TVRNeExEQXVOekVzTWpBdU9UYzNMREF1TnpFc01qQXVPREEwTERBdU56RjZJRTAyTXk0NU5Ea3NNQzQzTVdNdE15NDVNRFVzTUMwMExqWTBPU3d5TGpJNU9TMDFMamd4TkN3ekxqazNPV013TERBdE15NHhOamNzTkM0NE1qVXROQzR6TnpRc05pNDJOakpNTlRFdU1UWXpMREF1TnpFS0NRa0pDV2d0Tmk0NU9ERnNOQzQwTURNc01UY3VPREl6WXpBdU9URXhMRE11TVRnMExETXVOVEEwTERJdU9UZ3hMRE11TlRBMExESXVPVGd4WXpFdU56YzFMREFzTXk0eE1EVXRNQzQ1TkRFc05DNHpNVEl0TWk0M01qSk1Oamd1TWpjMkxEQXVOekVLQ1FrSkNVTTJPQzR5TnpZc01DNDNNU3cyTkM0eE1qSXNNQzQzTVN3Mk15NDVORGtzTUM0M01Yb2dUVGMzTGpFMU9Td3dMakkyTkVNM01DNHpNVGNzTUM0eU5qSXNOalF1T1RRc05TNDVPVElzTmpRdU56STRMREV5TGpFM053b0pDUWtKWXkwd0xqRTROeXcxTGpReU5pd3pMalExTVN3NUxqVTJNeXc1TGpZNE9TdzVMalUyTkdNMkxqZzRNU3d3TERFeUxqSTFPQzAxTGpjeU9Td3hNaTQwTnpFdE1URXVPVFV5UXpnM0xqQTNNeXcwTGpRd01TdzRNeTQwTXpZc01DNHlOalVzTnpjdU1UVTVMREF1TWpZMGVnb0pDUWtKSUUwM05TNHdOakVzTVRVdU16bGpMVEl1TURVM0xEQXRNeTQwTURVdE1TNHpOamt0TXk0ek1qY3RNeTQxTkRaak1DNHdPRGd0TWk0ME5UY3NNaTR3TmpFdE5TNHlNeXcwTGpneE9DMDFMakl6WXpJdU1EVTRMREFzTXk0ME1EVXNNUzR6TnpFc015NHpNamtzTXk0MU1USUtDUWtKQ1VNM09TNDNPVElzTVRJdU5qRTNMRGMzTGpneE9Dd3hOUzR6T1RFc056VXVNRFl4TERFMUxqTTVlaUJOTXpRdU16RTRMREF1TWpVNVl5MDJMamcwTkMwd0xqQXdNaTB4TWk0eU1Ua3NOUzQzTWpndE1USXVORE15TERFeExqa3hNd29KQ1FrSll5MHdMakU0Tnl3MUxqUXlOeXd6TGpRMU1pdzVMalUyTXl3NUxqWTRPU3c1TGpVMk5HTTBMamswTml3d0xEa3VNVEUxTFRJdU9UWXlMREV4TGpFME9DMDJMamt6TjJ3dE55NDJNRFlzTUdNdE1DNDRNalVzTUM0M01ETXRNUzQ0TXpRc01TNHhORGd0TWk0NU5qUXNNUzR4TkRnS0NRa0pDV010TVM0NU5USXNNQzB6TGpNeE5pMHhMakUzTWkwekxqVTRMVE11TURrMGJERXpMakEwTVN3d0xqQXdNV014TGpBek15d3dMREV1T1RrMUxUQXVNVFE0TERJdU1qRXlMVEV1TWpJMVl6QXVNVEl6TFRBdU5qQTNMREF1TVRrNExURXVNakl6TERBdU1qRTVMVEV1T0RRMkNna0pDUWxETkRRdU1qTXlMRFF1TXprMkxEUXdMalU1TkN3d0xqSTJMRE0wTGpNeE9Dd3dMakkxT1hvZ1RUTTJMamN3T1N3NExqWTBOR2d0Tnk0eE16ZGpNQzQ1TXkweExqUTROaXd5TGpReE5pMHlMalU1Tml3MExqSXdOUzB5TGpVNU5nb0pDUWtKWXpFdU5qSXpMREFzTWk0NE16WXNNQzQ0TVRNc015NHpOVElzTWk0eE9FTXpOeTR5TURNc09DNDFNVFFzTXpjdU1ESXlMRGd1TmpRMExETTJMamN3T1N3NExqWTBOSG9pTHo0S0NRazhMMmMrQ2drOEwyYytDand2Wno0S1BDOXpkbWMrQ2c9PVwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2NvbXBvbmVudHMvd2F0Y2gtdmlkZW8vdmV2by1oZWFkZXIuc3ZnXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAxXG4gKiovIiwiLy8gSW4gdGhlIHdlYi53ZWJwYWNrIGNvbmZpZyByZXF1ZXN0IGlzIGFsaWFzIHRvIGJyb3dzZXItcmVxdWVzdFxuLy8gYSBwcm94eSB2ZXJzaW9uIG9mIHJlcXVlc3QgYnVpbHQgdG8gcnVuIGluIGJyb3dzZXJzIHVzaW5nIFhIUlxudmFyIHJlcXVlc3QgPSByZXF1aXJlKCdzdXBlcmFnZW50JylcbiAgLCBscnUgPSByZXF1aXJlKCdscnUtY2FjaGUnKTtcblxudmFyIGVuZHBvaW50ID0gJ2h0dHBzOi8vc3RnLWFwaXYyLnZldm8uY29tJztcblxuLyoqXG4gKiBEQUwgaXMgdGhlIGRhdGEgYWNjZXNzIGxheWVyLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGNsYXNzIERBTFxuICogQHJldHVybiBmb29iYXJcbiAqL1xuZnVuY3Rpb24gREFMKCkge1xuICB0aGlzLmFjY2Vzc1Rva2VuID0gdGhpcy50b2tlbkV4cGlyZXMgPSBudWxsO1xuICB0aGlzLnJlcXVlc3RRdWUgPSBbXTtcbiAgdGhpcy5jYWNoZSA9IGxydSh7XG4gICAgbWF4OiA1MDAsXG4gICAgbWF4QWdlOiA2MDAwMCwgLy8gMSBtaW5cbiAgICBzdGFsZTogZmFsc2VcbiAgfSk7XG59XG5cbkRBTC5wcm90b3R5cGUucmVmcmVzaEFjY2Vzc1Rva2VuID0gZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXF1ZXN0LnBvc3QoZW5kcG9pbnQgKyAnL29hdXRoL3Rva2VuJylcbiAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgY2xpZW50X2lkOiAnYjk1MGQ5MTNkYzM4NGQwNTgzZGZlNzNmNjVmMzQyNTUnLFxuICAgICAgY2xpZW50X3NlY3JldDogJ2EwN2EzZjA4ZTlmYjQ2OTViMjg4YmE3MDc5NzdhZDIxJyxcbiAgICAgIGdyYW50X3R5cGU6ICdjbGllbnRfY3JlZGVudGlhbHMnLFxuICAgICAgY291bnRyeTogJ1VTJyxcbiAgICAgIGxvY2FsZTogJ2VuLXVzJ1xuICAgIH0pKVxuICAgIC5lbmQoZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZihyZXMuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IGdldCBhY2Nlc3MgdG9rZW4gYmVjYXVzZTonLCByZXMuZXJyb3IsIHJlcy5ib2R5KTtcbiAgICAgIH1cblxuICAgICAgYm9keSA9IHJlcy5ib2R5O1xuXG4gICAgICBzZWxmLmFjY2Vzc1Rva2VuID0gYm9keS5hY2Nlc3NfdG9rZW47XG4gICAgICBzZWxmLnRva2VuRXhwaXJlcyA9IGJvZHkuZXhwaXJlc19pbjtcblxuICAgICAgdmFyIGNtZDtcbiAgICAgIHdoaWxlKGNtZCA9IHNlbGYucmVxdWVzdFF1ZS5zaGlmdCgpKSB7XG4gICAgICAgIGNtZC5mbi5hcHBseShzZWxmLCBjbWQuYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbkRBTC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oY2FjaGVLZXksIHVybCwgbmV4dCkge1xuICBpZighdGhpcy5hY2Nlc3NUb2tlbiB8fCB0aGlzLnRva2VuVGltZW91dCA9PSdiYWQnKSB7XG4gICAgdGhpcy5yZXF1ZXN0UXVlLnB1c2goe2ZuOnRoaXMuZ2V0LCBhcmdzOltjYWNoZUtleSwgdXJsLCBuZXh0XX0pO1xuICAgIHRoaXMucmVmcmVzaEFjY2Vzc1Rva2VuKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoY2FjaGVLZXkpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuY2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgcmV0dXJuIG5leHQobnVsbCwgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdXJsID0gZW5kcG9pbnQgKyB1cmw7XG4gIGlmKHVybC5pbmRleE9mKCc/JykgPT0gLTEpIHtcbiAgICB1cmwgKz0gJz90b2tlbj0nICsgdGhpcy5hY2Nlc3NUb2tlbjtcbiAgfSBlbHNlIHtcbiAgICB1cmwgKz0gJyZ0b2tlbj0nICsgdGhpcy5hY2Nlc3NUb2tlbjtcbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICByZXF1ZXN0LmdldCh1cmwsIGZ1bmN0aW9uKHJlcykge1xuICAgIGlmKHJlcy5lcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQobmV3IEVycm9yKCdDYW5ub3QgZ2V0IGJlY2F1c2U6JytyZXMuZXJyb3IpKTtcbiAgICB9XG5cbiAgICBpZihyZXMuc3RhdHVzICE9IDIwMCkge1xuICAgICAgcmV0dXJuIG5leHQobmV3IEVycm9yKCdGYWlsZWQgYmVjYXVzZTonK3Jlcy5zdGF0dXMpKTtcbiAgICB9XG5cbiAgICBib2R5ID0gcmVzLmJvZHk7XG5cbiAgICBpZihjYWNoZUtleSkge1xuICAgICAgc2VsZi5jYWNoZS5zZXQoY2FjaGVLZXksIGJvZHkpO1xuICAgIH1cblxuICAgIG5leHQobnVsbCwgYm9keSk7XG4gIH0pO1xufVxuXG5EQUwucHJvdG90eXBlLmdldE5vd0ZlZWQgPSBmdW5jdGlvbihuZXh0KSB7XG4gIHRoaXMuZ2V0KCdub3ctZmVlZCcsICcvbm93P3BhZ2U9MSZzaXplPTQwJywgbmV4dCk7XG59XG5cbkRBTC5wcm90b3R5cGUuZ2V0UGxheWxpc3QgPSBmdW5jdGlvbihpZCwgbmV4dCkge1xuICB0aGlzLmdldCgnUEwtJyArIGlkLCAnL3BsYXlsaXN0LycgKyBpZCwgZnVuY3Rpb24oZXJyLCBwbGF5bGlzdERhdGEpIHtcbiAgICBpZihlcnIpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgfVxuXG4gICAgZm9yKHZhciBqIGluIHBsYXlsaXN0RGF0YS52aWRlb3MpIHtcbiAgICAgIHZhciBpLCBkZXRhaWxzPXt9LCBkYXRhID0gcGxheWxpc3REYXRhLnZpZGVvc1tqXTtcblxuICAgICAgLy8gbWVyZ2UgaW4gc3R1ZmYgd2UgbmVlZCBmb3Igb3VyIHZpZXdcbiAgICAgIGZvcihpIGluIGRhdGEuYXJ0aXN0cykge1xuICAgICAgICBpdGVtID0gZGF0YS5hcnRpc3RzW2ldO1xuICAgICAgICBpZihpdGVtLnJvbGUgPT0gJ01haW4nKSB7XG4gICAgICAgICAgZGF0YS5hcnRpc3QgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgZGF0YS5hcnRpc3RVcmwgPSAnL2FydGlzdC8nK2l0ZW0udXJsU2FmZU5hbWU7XG4gICAgICAgICAgZGF0YS5hcnRpc3RJbWcgPSBpdGVtLnRodW1ibmFpbFVybC5yZXBsYWNlKC9eW146XSs6LywnJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGkgaW4gZGF0YS5jcmVkaXRzKSB7XG4gICAgICAgIGl0ZW0gPSBkYXRhLmNyZWRpdHNbaV07XG5cbiAgICAgICAgaWYoIWRldGFpbHNbaXRlbS5uYW1lXSkgZGV0YWlsc1tpdGVtLm5hbWVdID0gW2l0ZW0udmFsdWVdO1xuICAgICAgICBlbHNlIGRldGFpbHNbaXRlbS5uYW1lXS5wdXNoKGl0ZW0udmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmb3IoaSBpbiBkZXRhaWxzKSB7XG4gICAgICAgIGRhdGFbaV0gPSBkZXRhaWxzW2ldLmpvaW4oJywnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0KG51bGwsIHBsYXlsaXN0RGF0YSk7XG4gIH0pO1xufVxuXG5EQUwucHJvdG90eXBlLmdldEFydGlzdCA9IGZ1bmN0aW9uKGlkLCBuZXh0KSB7XG4gIHRoaXMuZ2V0KCdBLScgKyBpZCwgJy9hcnRpc3QvJyArIGlkLCBuZXh0KTtcbn1cblxuREFMLnByb3RvdHlwZS5nZXRBcnRpc3RzID0gZnVuY3Rpb24obmV4dCkge1xuICB0aGlzLmdldCgnYXJ0aXN0cycsICcvYXJ0aXN0JywgbmV4dCk7XG59XG5cbkRBTC5wcm90b3R5cGUuZ2V0VmlkZW8gPSBmdW5jdGlvbihpZCwgbmV4dCkge1xuICB0aGlzLmdldCgnVi0nICsgaWQsICcvdmlkZW8vJyArIGlkLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICB2YXIgaSwgZGV0YWlscz17fTtcblxuICAgIGlmKGVycikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyKTtcbiAgICB9XG5cbiAgICAvLyBtZXJnZSBpbiBzdHVmZiB3ZSBuZWVkIGZvciBvdXIgdmlld1xuICAgIGZvcihpIGluIGRhdGEuYXJ0aXN0cykge1xuICAgICAgaXRlbSA9IGRhdGEuYXJ0aXN0c1tpXTtcbiAgICAgIGlmKGl0ZW0ucm9sZSA9PSAnTWFpbicpIHtcbiAgICAgICAgZGF0YS5hcnRpc3QgPSBpdGVtLm5hbWU7XG4gICAgICAgIGRhdGEuYXJ0aXN0VXJsID0gJy9hcnRpc3QvJytpdGVtLnVybFNhZmVOYW1lO1xuICAgICAgICBkYXRhLmFydGlzdEltZyA9IGl0ZW0udGh1bWJuYWlsVXJsLnJlcGxhY2UoL15bXjpdKzovLCcnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yKGkgaW4gZGF0YS5jcmVkaXRzKSB7XG4gICAgICBpdGVtID0gZGF0YS5jcmVkaXRzW2ldO1xuXG4gICAgICBpZighZGV0YWlsc1tpdGVtLm5hbWVdKSBkZXRhaWxzW2l0ZW0ubmFtZV0gPSBbaXRlbS52YWx1ZV07XG4gICAgICBlbHNlIGRldGFpbHNbaXRlbS5uYW1lXS5wdXNoKGl0ZW0udmFsdWUpO1xuICAgIH1cblxuICAgIGZvcihpIGluIGRldGFpbHMpIHtcbiAgICAgIGRhdGFbaV0gPSBkZXRhaWxzW2ldLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICBuZXh0KG51bGwsIGRhdGEpO1xuICB9KTtcbn1cblxuREFMLnByb3RvdHlwZS5zZWFyY2hWaWRlbyA9IGZ1bmN0aW9uKG9wdGlvbnMsIG5leHQpIHtcbiAgaWYoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgaWYoIW9wdGlvbnMucGFnZSkgb3B0aW9ucy5wYWdlID0gMTtcbiAgaWYoIW9wdGlvbnMuc2l6ZSkgb3B0aW9ucy5zaXplID0gNjtcblxuICB2YXIgdXJsID0gJy92aWRlb3M/cGFnZT0nK29wdGlvbnMucGFnZSsnJnNpemU9JytvcHRpb25zLnNpemU7XG4gIHZhciBpZCA9IG9wdGlvbnMucGFnZS50b1N0cmluZygpICsgb3B0aW9ucy5zaXplO1xuXG4gIGlmKG9wdGlvbnMuc29ydCkge1xuICAgIGlkICs9IG9wdGlvbnMuc29ydDtcbiAgICB1cmwgKz0gJyZzb3J0PScgKyBvcHRpb25zLnNvcnQ7XG4gIH1cblxuICAvLyB0b2RvOiBuZWVkIHRvIG1ha2Ugc3RhdGljIG1hcHBpbmdzIGFuZCBjaGVjayB1bmRlZmluZWRcblxuICBpZihvcHRpb25zLmlzcHJlbWllcmUpIHtcbiAgICBpZCArPSBvcHRpb25zLmlzcHJlbWllcmU7XG4gICAgdXJsICs9ICcmaXNwcmVtaWVyZT0nICsgb3B0aW9ucy5pc3ByZW1pZXJlPyd0cnVlJzonZmFsc2UnO1xuICB9XG5cbiAgaWYob3B0aW9ucy5saXZlKSB7XG4gICAgaWQgKz0gb3B0aW9ucy5saXZlO1xuICAgIHVybCArPSAnJmlzbGl2ZT0nICsgKG9wdGlvbnMubGl2ZSA/ICd0cnVlJzonZmFsc2UnKTtcbiAgfVxuXG4gIHRoaXMuZ2V0KCdWUy0nK2lkLCB1cmwsIG5leHQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBEQUwoKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jb21wb25lbnRzL3dhdGNoLXZpZGVvL2RhdGEtYWNjZXNzLWxheWVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIjsoZnVuY3Rpb24gKCkgeyAvLyBjbG9zdXJlIGZvciB3ZWIgYnJvd3NlcnNcblxuaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gTFJVQ2FjaGVcbn0gZWxzZSB7XG4gIC8vIGp1c3Qgc2V0IHRoZSBnbG9iYWwgZm9yIG5vbi1ub2RlIHBsYXRmb3Jtcy5cbiAgdGhpcy5MUlVDYWNoZSA9IExSVUNhY2hlXG59XG5cbmZ1bmN0aW9uIGhPUCAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuZnVuY3Rpb24gbmFpdmVMZW5ndGggKCkgeyByZXR1cm4gMSB9XG5cbmZ1bmN0aW9uIExSVUNhY2hlIChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBMUlVDYWNoZSkpXG4gICAgcmV0dXJuIG5ldyBMUlVDYWNoZShvcHRpb25zKVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ251bWJlcicpXG4gICAgb3B0aW9ucyA9IHsgbWF4OiBvcHRpb25zIH1cblxuICBpZiAoIW9wdGlvbnMpXG4gICAgb3B0aW9ucyA9IHt9XG5cbiAgdGhpcy5fbWF4ID0gb3B0aW9ucy5tYXhcbiAgLy8gS2luZCBvZiB3ZWlyZCB0byBoYXZlIGEgZGVmYXVsdCBtYXggb2YgSW5maW5pdHksIGJ1dCBvaCB3ZWxsLlxuICBpZiAoIXRoaXMuX21heCB8fCAhKHR5cGVvZiB0aGlzLl9tYXggPT09IFwibnVtYmVyXCIpIHx8IHRoaXMuX21heCA8PSAwIClcbiAgICB0aGlzLl9tYXggPSBJbmZpbml0eVxuXG4gIHRoaXMuX2xlbmd0aENhbGN1bGF0b3IgPSBvcHRpb25zLmxlbmd0aCB8fCBuYWl2ZUxlbmd0aFxuICBpZiAodHlwZW9mIHRoaXMuX2xlbmd0aENhbGN1bGF0b3IgIT09IFwiZnVuY3Rpb25cIilcbiAgICB0aGlzLl9sZW5ndGhDYWxjdWxhdG9yID0gbmFpdmVMZW5ndGhcblxuICB0aGlzLl9hbGxvd1N0YWxlID0gb3B0aW9ucy5zdGFsZSB8fCBmYWxzZVxuICB0aGlzLl9tYXhBZ2UgPSBvcHRpb25zLm1heEFnZSB8fCBudWxsXG4gIHRoaXMuX2Rpc3Bvc2UgPSBvcHRpb25zLmRpc3Bvc2VcbiAgdGhpcy5yZXNldCgpXG59XG5cbi8vIHJlc2l6ZSB0aGUgY2FjaGUgd2hlbiB0aGUgbWF4IGNoYW5nZXMuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTFJVQ2FjaGUucHJvdG90eXBlLCBcIm1heFwiLFxuICB7IHNldCA6IGZ1bmN0aW9uIChtTCkge1xuICAgICAgaWYgKCFtTCB8fCAhKHR5cGVvZiBtTCA9PT0gXCJudW1iZXJcIikgfHwgbUwgPD0gMCApIG1MID0gSW5maW5pdHlcbiAgICAgIHRoaXMuX21heCA9IG1MXG4gICAgICBpZiAodGhpcy5fbGVuZ3RoID4gdGhpcy5fbWF4KSB0cmltKHRoaXMpXG4gICAgfVxuICAsIGdldCA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21heCB9XG4gICwgZW51bWVyYWJsZSA6IHRydWVcbiAgfSlcblxuLy8gcmVzaXplIHRoZSBjYWNoZSB3aGVuIHRoZSBsZW5ndGhDYWxjdWxhdG9yIGNoYW5nZXMuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTFJVQ2FjaGUucHJvdG90eXBlLCBcImxlbmd0aENhbGN1bGF0b3JcIixcbiAgeyBzZXQgOiBmdW5jdGlvbiAobEMpIHtcbiAgICAgIGlmICh0eXBlb2YgbEMgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aGlzLl9sZW5ndGhDYWxjdWxhdG9yID0gbmFpdmVMZW5ndGhcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gdGhpcy5faXRlbUNvdW50XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl9jYWNoZSkge1xuICAgICAgICAgIHRoaXMuX2NhY2hlW2tleV0ubGVuZ3RoID0gMVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9sZW5ndGhDYWxjdWxhdG9yID0gbENcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fY2FjaGUpIHtcbiAgICAgICAgICB0aGlzLl9jYWNoZVtrZXldLmxlbmd0aCA9IHRoaXMuX2xlbmd0aENhbGN1bGF0b3IodGhpcy5fY2FjaGVba2V5XS52YWx1ZSlcbiAgICAgICAgICB0aGlzLl9sZW5ndGggKz0gdGhpcy5fY2FjaGVba2V5XS5sZW5ndGhcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fbGVuZ3RoID4gdGhpcy5fbWF4KSB0cmltKHRoaXMpXG4gICAgfVxuICAsIGdldCA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2xlbmd0aENhbGN1bGF0b3IgfVxuICAsIGVudW1lcmFibGUgOiB0cnVlXG4gIH0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShMUlVDYWNoZS5wcm90b3R5cGUsIFwibGVuZ3RoXCIsXG4gIHsgZ2V0IDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbGVuZ3RoIH1cbiAgLCBlbnVtZXJhYmxlIDogdHJ1ZVxuICB9KVxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShMUlVDYWNoZS5wcm90b3R5cGUsIFwiaXRlbUNvdW50XCIsXG4gIHsgZ2V0IDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5faXRlbUNvdW50IH1cbiAgLCBlbnVtZXJhYmxlIDogdHJ1ZVxuICB9KVxuXG5MUlVDYWNoZS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIHZhciBpID0gMDtcbiAgZm9yICh2YXIgayA9IHRoaXMuX21ydSAtIDE7IGsgPj0gMCAmJiBpIDwgdGhpcy5faXRlbUNvdW50OyBrLS0pIGlmICh0aGlzLl9scnVMaXN0W2tdKSB7XG4gICAgaSsrXG4gICAgdmFyIGhpdCA9IHRoaXMuX2xydUxpc3Rba11cbiAgICBpZiAodGhpcy5fbWF4QWdlICYmIChEYXRlLm5vdygpIC0gaGl0Lm5vdyA+IHRoaXMuX21heEFnZSkpIHtcbiAgICAgIGRlbCh0aGlzLCBoaXQpXG4gICAgICBpZiAoIXRoaXMuX2FsbG93U3RhbGUpIGhpdCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAoaGl0KSB7XG4gICAgICBmbi5jYWxsKHRoaXNwLCBoaXQudmFsdWUsIGhpdC5rZXksIHRoaXMpXG4gICAgfVxuICB9XG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xuICB2YXIga2V5cyA9IG5ldyBBcnJheSh0aGlzLl9pdGVtQ291bnQpXG4gIHZhciBpID0gMFxuICBmb3IgKHZhciBrID0gdGhpcy5fbXJ1IC0gMTsgayA+PSAwICYmIGkgPCB0aGlzLl9pdGVtQ291bnQ7IGstLSkgaWYgKHRoaXMuX2xydUxpc3Rba10pIHtcbiAgICB2YXIgaGl0ID0gdGhpcy5fbHJ1TGlzdFtrXVxuICAgIGtleXNbaSsrXSA9IGhpdC5rZXlcbiAgfVxuICByZXR1cm4ga2V5c1xufVxuXG5MUlVDYWNoZS5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KHRoaXMuX2l0ZW1Db3VudClcbiAgdmFyIGkgPSAwXG4gIGZvciAodmFyIGsgPSB0aGlzLl9tcnUgLSAxOyBrID49IDAgJiYgaSA8IHRoaXMuX2l0ZW1Db3VudDsgay0tKSBpZiAodGhpcy5fbHJ1TGlzdFtrXSkge1xuICAgIHZhciBoaXQgPSB0aGlzLl9scnVMaXN0W2tdXG4gICAgdmFsdWVzW2krK10gPSBoaXQudmFsdWVcbiAgfVxuICByZXR1cm4gdmFsdWVzXG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2Rpc3Bvc2UgJiYgdGhpcy5fY2FjaGUpIHtcbiAgICBmb3IgKHZhciBrIGluIHRoaXMuX2NhY2hlKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlKGssIHRoaXMuX2NhY2hlW2tdLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuX2NhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKSAvLyBoYXNoIG9mIGl0ZW1zIGJ5IGtleVxuICB0aGlzLl9scnVMaXN0ID0gT2JqZWN0LmNyZWF0ZShudWxsKSAvLyBsaXN0IG9mIGl0ZW1zIGluIG9yZGVyIG9mIHVzZSByZWNlbmN5XG4gIHRoaXMuX21ydSA9IDAgLy8gbW9zdCByZWNlbnRseSB1c2VkXG4gIHRoaXMuX2xydSA9IDAgLy8gbGVhc3QgcmVjZW50bHkgdXNlZFxuICB0aGlzLl9sZW5ndGggPSAwIC8vIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdFxuICB0aGlzLl9pdGVtQ291bnQgPSAwXG59XG5cbi8vIFByb3ZpZGVkIGZvciBkZWJ1Z2dpbmcvZGV2IHB1cnBvc2VzIG9ubHkuIE5vIHByb21pc2VzIHdoYXRzb2V2ZXIgdGhhdFxuLy8gdGhpcyBBUEkgc3RheXMgc3RhYmxlLlxuTFJVQ2FjaGUucHJvdG90eXBlLmR1bXAgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9jYWNoZVxufVxuXG5MUlVDYWNoZS5wcm90b3R5cGUuZHVtcExydSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX2xydUxpc3Rcbn1cblxuTFJVQ2FjaGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIGlmIChoT1AodGhpcy5fY2FjaGUsIGtleSkpIHtcbiAgICAvLyBkaXNwb3NlIG9mIHRoZSBvbGQgb25lIGJlZm9yZSBvdmVyd3JpdGluZ1xuICAgIGlmICh0aGlzLl9kaXNwb3NlKSB0aGlzLl9kaXNwb3NlKGtleSwgdGhpcy5fY2FjaGVba2V5XS52YWx1ZSlcbiAgICBpZiAodGhpcy5fbWF4QWdlKSB0aGlzLl9jYWNoZVtrZXldLm5vdyA9IERhdGUubm93KClcbiAgICB0aGlzLl9jYWNoZVtrZXldLnZhbHVlID0gdmFsdWVcbiAgICB0aGlzLmdldChrZXkpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHZhciBsZW4gPSB0aGlzLl9sZW5ndGhDYWxjdWxhdG9yKHZhbHVlKVxuICB2YXIgYWdlID0gdGhpcy5fbWF4QWdlID8gRGF0ZS5ub3coKSA6IDBcbiAgdmFyIGhpdCA9IG5ldyBFbnRyeShrZXksIHZhbHVlLCB0aGlzLl9tcnUrKywgbGVuLCBhZ2UpXG5cbiAgLy8gb3ZlcnNpemVkIG9iamVjdHMgZmFsbCBvdXQgb2YgY2FjaGUgYXV0b21hdGljYWxseS5cbiAgaWYgKGhpdC5sZW5ndGggPiB0aGlzLl9tYXgpIHtcbiAgICBpZiAodGhpcy5fZGlzcG9zZSkgdGhpcy5fZGlzcG9zZShrZXksIHZhbHVlKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdGhpcy5fbGVuZ3RoICs9IGhpdC5sZW5ndGhcbiAgdGhpcy5fbHJ1TGlzdFtoaXQubHVdID0gdGhpcy5fY2FjaGVba2V5XSA9IGhpdFxuICB0aGlzLl9pdGVtQ291bnQgKytcblxuICBpZiAodGhpcy5fbGVuZ3RoID4gdGhpcy5fbWF4KSB0cmltKHRoaXMpXG4gIHJldHVybiB0cnVlXG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGlmICghaE9QKHRoaXMuX2NhY2hlLCBrZXkpKSByZXR1cm4gZmFsc2VcbiAgdmFyIGhpdCA9IHRoaXMuX2NhY2hlW2tleV1cbiAgaWYgKHRoaXMuX21heEFnZSAmJiAoRGF0ZS5ub3coKSAtIGhpdC5ub3cgPiB0aGlzLl9tYXhBZ2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuTFJVQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGdldCh0aGlzLCBrZXksIHRydWUpXG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gZ2V0KHRoaXMsIGtleSwgZmFsc2UpXG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoaXQgPSB0aGlzLl9scnVMaXN0W3RoaXMuX2xydV1cbiAgZGVsKHRoaXMsIGhpdClcbiAgcmV0dXJuIGhpdCB8fCBudWxsXG59XG5cbkxSVUNhY2hlLnByb3RvdHlwZS5kZWwgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGRlbCh0aGlzLCB0aGlzLl9jYWNoZVtrZXldKVxufVxuXG5mdW5jdGlvbiBnZXQgKHNlbGYsIGtleSwgZG9Vc2UpIHtcbiAgdmFyIGhpdCA9IHNlbGYuX2NhY2hlW2tleV1cbiAgaWYgKGhpdCkge1xuICAgIGlmIChzZWxmLl9tYXhBZ2UgJiYgKERhdGUubm93KCkgLSBoaXQubm93ID4gc2VsZi5fbWF4QWdlKSkge1xuICAgICAgZGVsKHNlbGYsIGhpdClcbiAgICAgIGlmICghc2VsZi5fYWxsb3dTdGFsZSkgaGl0ID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkb1VzZSkgdXNlKHNlbGYsIGhpdClcbiAgICB9XG4gICAgaWYgKGhpdCkgaGl0ID0gaGl0LnZhbHVlXG4gIH1cbiAgcmV0dXJuIGhpdFxufVxuXG5mdW5jdGlvbiB1c2UgKHNlbGYsIGhpdCkge1xuICBzaGlmdExVKHNlbGYsIGhpdClcbiAgaGl0Lmx1ID0gc2VsZi5fbXJ1ICsrXG4gIHNlbGYuX2xydUxpc3RbaGl0Lmx1XSA9IGhpdFxufVxuXG5mdW5jdGlvbiB0cmltIChzZWxmKSB7XG4gIHdoaWxlIChzZWxmLl9scnUgPCBzZWxmLl9tcnUgJiYgc2VsZi5fbGVuZ3RoID4gc2VsZi5fbWF4KVxuICAgIGRlbChzZWxmLCBzZWxmLl9scnVMaXN0W3NlbGYuX2xydV0pXG59XG5cbmZ1bmN0aW9uIHNoaWZ0TFUgKHNlbGYsIGhpdCkge1xuICBkZWxldGUgc2VsZi5fbHJ1TGlzdFsgaGl0Lmx1IF1cbiAgd2hpbGUgKHNlbGYuX2xydSA8IHNlbGYuX21ydSAmJiAhc2VsZi5fbHJ1TGlzdFtzZWxmLl9scnVdKSBzZWxmLl9scnUgKytcbn1cblxuZnVuY3Rpb24gZGVsIChzZWxmLCBoaXQpIHtcbiAgaWYgKGhpdCkge1xuICAgIGlmIChzZWxmLl9kaXNwb3NlKSBzZWxmLl9kaXNwb3NlKGhpdC5rZXksIGhpdC52YWx1ZSlcbiAgICBzZWxmLl9sZW5ndGggLT0gaGl0Lmxlbmd0aFxuICAgIHNlbGYuX2l0ZW1Db3VudCAtLVxuICAgIGRlbGV0ZSBzZWxmLl9jYWNoZVsgaGl0LmtleSBdXG4gICAgc2hpZnRMVShzZWxmLCBoaXQpXG4gIH1cbn1cblxuLy8gY2xhc3N5LCBzaW5jZSBWOCBwcmVmZXJzIHByZWRpY3RhYmxlIG9iamVjdHMuXG5mdW5jdGlvbiBFbnRyeSAoa2V5LCB2YWx1ZSwgbHUsIGxlbmd0aCwgbm93KSB7XG4gIHRoaXMua2V5ID0ga2V5XG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB0aGlzLmx1ID0gbHVcbiAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgdGhpcy5ub3cgPSBub3dcbn1cblxufSkoKVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbHJ1LWNhY2hlL2xpYi9scnUtY2FjaGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xudmFyIHJlZHVjZSA9IHJlcXVpcmUoJ3JlZHVjZScpO1xuXG4vKipcbiAqIFJvb3QgcmVmZXJlbmNlIGZvciBpZnJhbWVzLlxuICovXG5cbnZhciByb290ID0gJ3VuZGVmaW5lZCcgPT0gdHlwZW9mIHdpbmRvd1xuICA/IHRoaXNcbiAgOiB3aW5kb3c7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBUT0RPOiBmdXR1cmUgcHJvb2YsIG1vdmUgdG8gY29tcG9lbnQgbGFuZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5mdW5jdGlvbiBnZXRYSFIoKSB7XG4gIGlmIChyb290LlhNTEh0dHBSZXF1ZXN0XG4gICAgJiYgKCdmaWxlOicgIT0gcm9vdC5sb2NhdGlvbi5wcm90b2NvbCB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBhZGRlZCB0byBzdXBwb3J0IElFLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgdHJpbSA9ICcnLnRyaW1cbiAgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzLnRyaW0oKTsgfVxuICA6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nLCAnJyk7IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAobnVsbCAhPSBvYmpba2V5XSkge1xuICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemVPYmplY3QgPSBzZXJpYWxpemU7XG5cbiAvKipcbiAgKiBQYXJzZSB0aGUgZ2l2ZW4geC13d3ctZm9ybS11cmxlbmNvZGVkIGBzdHJgLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAqIEByZXR1cm4ge09iamVjdH1cbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KCcmJyk7XG4gIHZhciBwYXJ0cztcbiAgdmFyIHBhaXI7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcGFpciA9IHBhaXJzW2ldO1xuICAgIHBhcnRzID0gcGFpci5zcGxpdCgnPScpO1xuICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAnYXBwbGljYXRpb24veG1sJyxcbiAgdXJsZW5jb2RlZDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtLWRhdGEnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbiByZXF1ZXN0LnNlcmlhbGl6ZSA9IHtcbiAgICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBzZXJpYWxpemUsXG4gICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5XG4gfTtcblxuIC8qKlxuICAqIERlZmF1bHQgcGFyc2Vycy5cbiAgKlxuICAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHN0cil7XG4gICogICAgICAgcmV0dXJuIHsgb2JqZWN0IHBhcnNlZCBmcm9tIHN0ciB9O1xuICAqICAgICB9O1xuICAqXG4gICovXG5cbnJlcXVlc3QucGFyc2UgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBwYXJzZVN0cmluZyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnBhcnNlXG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBoZWFkZXIgYHN0cmAgaW50b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1hcHBlZCBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIoc3RyKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgZmllbGRzID0ge307XG4gIHZhciBpbmRleDtcbiAgdmFyIGxpbmU7XG4gIHZhciBmaWVsZDtcbiAgdmFyIHZhbDtcblxuICBsaW5lcy5wb3AoKTsgLy8gdHJhaWxpbmcgQ1JMRlxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICBpbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBtaW1lIHR5cGUgZm9yIHRoZSBnaXZlbiBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0eXBlKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykuc2hpZnQoKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGhlYWRlciBmaWVsZCBwYXJhbWV0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcmFtcyhzdHIpe1xuICByZXR1cm4gcmVkdWNlKHN0ci5zcGxpdCgvICo7ICovKSwgZnVuY3Rpb24ob2JqLCBzdHIpe1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgvICo9ICovKVxuICAgICAgLCBrZXkgPSBwYXJ0cy5zaGlmdCgpXG4gICAgICAsIHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbCkgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZWAgd2l0aCB0aGUgZ2l2ZW4gYHhocmAuXG4gKlxuICogIC0gc2V0IGZsYWdzICgub2ssIC5lcnJvciwgZXRjKVxuICogIC0gcGFyc2UgaGVhZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogIEFsaWFzaW5nIGBzdXBlcmFnZW50YCBhcyBgcmVxdWVzdGAgaXMgbmljZTpcbiAqXG4gKiAgICAgIHJlcXVlc3QgPSBzdXBlcmFnZW50O1xuICpcbiAqICBXZSBjYW4gdXNlIHRoZSBwcm9taXNlLWxpa2UgQVBJLCBvciBwYXNzIGNhbGxiYWNrczpcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJykuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJywgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgU2VuZGluZyBkYXRhIGNhbiBiZSBjaGFpbmVkOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5zZW5kKClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnBvc3QoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIE9yIGZ1cnRoZXIgcmVkdWNlZCB0byBhIHNpbmdsZSBjYWxsIGZvciBzaW1wbGUgY2FzZXM6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogQHBhcmFtIHtYTUxIVFRQUmVxdWVzdH0geGhyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2UocmVxLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7XG4gIHRoaXMudGV4dCA9IHRoaXMueGhyLnJlc3BvbnNlVGV4dDtcbiAgdGhpcy5zZXRTdGF0dXNQcm9wZXJ0aWVzKHRoaXMueGhyLnN0YXR1cyk7XG4gIHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXJzID0gcGFyc2VIZWFkZXIodGhpcy54aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAvLyBnZXRBbGxSZXNwb25zZUhlYWRlcnMgc29tZXRpbWVzIGZhbHNlbHkgcmV0dXJucyBcIlwiIGZvciBDT1JTIHJlcXVlc3RzLCBidXRcbiAgLy8gZ2V0UmVzcG9uc2VIZWFkZXIgc3RpbGwgd29ya3MuIHNvIHdlIGdldCBjb250ZW50LXR5cGUgZXZlbiBpZiBnZXR0aW5nXG4gIC8vIG90aGVyIGhlYWRlcnMgZmFpbHMuXG4gIHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKTtcbiAgdGhpcy5zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcbiAgdGhpcy5ib2R5ID0gdGhpcy5yZXEubWV0aG9kICE9ICdIRUFEJ1xuICAgID8gdGhpcy5wYXJzZUJvZHkodGhpcy50ZXh0KVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5wYXJzZUJvZHkgPSBmdW5jdGlvbihzdHIpe1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIHJldHVybiBwYXJzZSAmJiBzdHIgJiYgc3RyLmxlbmd0aFxuICAgID8gcGFyc2Uoc3RyKVxuICAgIDogbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IGZsYWdzIHN1Y2ggYXMgYC5va2AgYmFzZWQgb24gYHN0YXR1c2AuXG4gKlxuICogRm9yIGV4YW1wbGUgYSAyeHggcmVzcG9uc2Ugd2lsbCBnaXZlIHlvdSBhIGAub2tgIG9mIF9fdHJ1ZV9fXG4gKiB3aGVyZWFzIDV4eCB3aWxsIGJlIF9fZmFsc2VfXyBhbmQgYC5lcnJvcmAgd2lsbCBiZSBfX3RydWVfXy4gVGhlXG4gKiBgLmNsaWVudEVycm9yYCBhbmQgYC5zZXJ2ZXJFcnJvcmAgYXJlIGFsc28gYXZhaWxhYmxlIHRvIGJlIG1vcmVcbiAqIHNwZWNpZmljLCBhbmQgYC5zdGF0dXNUeXBlYCBpcyB0aGUgY2xhc3Mgb2YgZXJyb3IgcmFuZ2luZyBmcm9tIDEuLjVcbiAqIHNvbWV0aW1lcyB1c2VmdWwgZm9yIG1hcHBpbmcgcmVzcG9uZCBjb2xvcnMgZXRjLlxuICpcbiAqIFwic3VnYXJcIiBwcm9wZXJ0aWVzIGFyZSBhbHNvIGRlZmluZWQgZm9yIGNvbW1vbiBjYXNlcy4gQ3VycmVudGx5IHByb3ZpZGluZzpcbiAqXG4gKiAgIC0gLm5vQ29udGVudFxuICogICAtIC5iYWRSZXF1ZXN0XG4gKiAgIC0gLnVuYXV0aG9yaXplZFxuICogICAtIC5ub3RBY2NlcHRhYmxlXG4gKiAgIC0gLm5vdEZvdW5kXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbihzdGF0dXMpe1xuICB2YXIgdHlwZSA9IHN0YXR1cyAvIDEwMCB8IDA7XG5cbiAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgLy8gYmFzaWNzXG4gIHRoaXMuaW5mbyA9IDEgPT0gdHlwZTtcbiAgdGhpcy5vayA9IDIgPT0gdHlwZTtcbiAgdGhpcy5jbGllbnRFcnJvciA9IDQgPT0gdHlwZTtcbiAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgdGhpcy5lcnJvciA9ICg0ID09IHR5cGUgfHwgNSA9PSB0eXBlKVxuICAgID8gdGhpcy50b0Vycm9yKClcbiAgICA6IGZhbHNlO1xuXG4gIC8vIHN1Z2FyXG4gIHRoaXMuYWNjZXB0ZWQgPSAyMDIgPT0gc3RhdHVzO1xuICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXMgfHwgMTIyMyA9PSBzdGF0dXM7XG4gIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XG4gIHRoaXMudW5hdXRob3JpemVkID0gNDAxID09IHN0YXR1cztcbiAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gIHRoaXMuZm9yYmlkZGVuID0gNDAzID09IHN0YXR1cztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnRvRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgcmVxID0gdGhpcy5yZXE7XG4gIHZhciBtZXRob2QgPSByZXEubWV0aG9kO1xuICB2YXIgdXJsID0gcmVxLnVybDtcblxuICB2YXIgbXNnID0gJ2Nhbm5vdCAnICsgbWV0aG9kICsgJyAnICsgdXJsICsgJyAoJyArIHRoaXMuc3RhdHVzICsgJyknO1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IG1ldGhvZDtcbiAgZXJyLnVybCA9IHVybDtcblxuICByZXR1cm4gZXJyO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5yZXF1ZXN0LlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIEVtaXR0ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9O1xuICB0aGlzLl9oZWFkZXIgPSB7fTtcbiAgdGhpcy5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICB0cnkge1xuICAgICAgdmFyIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTtcbiAgICAgIGlmICgnSEVBRCcgPT0gbWV0aG9kKSByZXMudGV4dCA9IG51bGw7XG4gICAgICBzZWxmLmNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdQYXJzZXIgaXMgdW5hYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZScpO1xuICAgICAgZXJyLnBhcnNlID0gdHJ1ZTtcbiAgICAgIGVyci5vcmlnaW5hbCA9IGU7XG4gICAgICBzZWxmLmNhbGxiYWNrKGVycik7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogQWxsb3cgZm9yIGV4dGVuc2lvblxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIGZuKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBTZXQgdGltZW91dCB0byBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbihtcyl7XG4gIHRoaXMuX3RpbWVvdXQgPSBtcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsZWFyIHByZXZpb3VzIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3RpbWVvdXQgPSAwO1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLmFib3J0ZWQpIHJldHVybjtcbiAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgdGhpcy54aHIuYWJvcnQoKTtcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciBgZmllbGRgIHRvIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0LlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1BUEktS2V5JzogJ2Zvb2JhcicgfSlcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCl7XG4gIGlmIChpc09iamVjdChmaWVsZCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGhlYWRlciBgZmllbGRgLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAudW5zZXQoJ1VzZXItQWdlbnQnKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgaGVhZGVyIGBmaWVsZGAgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5nZXRIZWFkZXIgPSBmdW5jdGlvbihmaWVsZCl7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBDb250ZW50LVR5cGUgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBY2NlcHQgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMuanNvbiA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2VwdFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQWNjZXB0JywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBdXRob3JpemF0aW9uIGZpZWxkIHZhbHVlIHdpdGggYHVzZXJgIGFuZCBgcGFzc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXNzXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXV0aCA9IGZ1bmN0aW9uKHVzZXIsIHBhc3Mpe1xuICB2YXIgc3RyID0gYnRvYSh1c2VyICsgJzonICsgcGFzcyk7XG4gIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBzdHIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuKlxuKiBFeGFtcGxlczpcbipcbiogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiogICAgIC5xdWVyeSgnc2l6ZT0xMCcpXG4qICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4qXG4qIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdmFsXG4qIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuKiBAYXBpIHB1YmxpY1xuKi9cblxuUmVxdWVzdC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbih2YWwpe1xuICBpZiAoJ3N0cmluZycgIT0gdHlwZW9mIHZhbCkgdmFsID0gc2VyaWFsaXplKHZhbCk7XG4gIGlmICh2YWwpIHRoaXMuX3F1ZXJ5LnB1c2godmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdyaXRlIHRoZSBmaWVsZCBgbmFtZWAgYW5kIGB2YWxgIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICogcmVxdWVzdCBib2RpZXMuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoJ2ZvbycsICdiYXInKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ3xCbG9ifEZpbGV9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24obmFtZSwgdmFsKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgdGhpcy5fZm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBRdWV1ZSB0aGUgZ2l2ZW4gYGZpbGVgIGFzIGFuIGF0dGFjaG1lbnQgdG8gdGhlIHNwZWNpZmllZCBgZmllbGRgLFxuICogd2l0aCBvcHRpb25hbCBgZmlsZW5hbWVgLlxuICpcbiAqIGBgYCBqc1xuICogcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAqICAgLmF0dGFjaChuZXcgQmxvYihbJzxhIGlkPVwiYVwiPjxiIGlkPVwiYlwiPmhleSE8L2I+PC9hPiddLCB7IHR5cGU6IFwidGV4dC9odG1sXCJ9KSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEBwYXJhbSB7QmxvYnxGaWxlfSBmaWxlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbihmaWVsZCwgZmlsZSwgZmlsZW5hbWUpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQoZmllbGQsIGZpbGUsIGZpbGVuYW1lKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgLCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIHF1ZXJ5c3RyaW5nXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbXVsdGlwbGUgZGF0YSBcIndyaXRlc1wiXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5zZW5kKHsgc2VhcmNoOiAncXVlcnknIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgcmFuZ2U6ICcxLi41JyB9KVxuICogICAgICAgICAuc2VuZCh7IG9yZGVyOiAnZGVzYycgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAgKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpe1xuICB2YXIgb2JqID0gaXNPYmplY3QoZGF0YSk7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuXG4gIC8vIG1lcmdlXG4gIGlmIChvYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIGlmICghdHlwZSkgdGhpcy50eXBlKCdmb3JtJyk7XG4gICAgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghb2JqKSByZXR1cm4gdGhpcztcbiAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2pzb24nKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCBgZXJyYCBhbmQgYHJlc2BcbiAqIGFuZCBoYW5kbGUgYXJpdHkgY2hlY2suXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrID0gZnVuY3Rpb24oZXJyLCByZXMpe1xuICB2YXIgZm4gPSB0aGlzLl9jYWxsYmFjaztcbiAgaWYgKDIgPT0gZm4ubGVuZ3RoKSByZXR1cm4gZm4oZXJyLCByZXMpO1xuICBpZiAoZXJyKSByZXR1cm4gdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIGZuKHJlcyk7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHgtZG9tYWluIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdPcmlnaW4gaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJyk7XG4gIGVyci5jcm9zc0RvbWFpbiA9IHRydWU7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggdGltZW91dCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50aW1lb3V0RXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3RpbWVvdXQgb2YgJyArIHRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnKTtcbiAgZXJyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbml0aWF0ZSByZXF1ZXN0LCBpbnZva2luZyBjYWxsYmFjayBgZm4ocmVzKWBcbiAqIHdpdGggYW4gaW5zdGFuY2VvZiBgUmVzcG9uc2VgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB4aHIgPSB0aGlzLnhociA9IGdldFhIUigpO1xuICB2YXIgcXVlcnkgPSB0aGlzLl9xdWVyeS5qb2luKCcmJyk7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGRhdGEgPSB0aGlzLl9mb3JtRGF0YSB8fCB0aGlzLl9kYXRhO1xuXG4gIC8vIHN0b3JlIGNhbGxiYWNrXG4gIHRoaXMuX2NhbGxiYWNrID0gZm4gfHwgbm9vcDtcblxuICAvLyBzdGF0ZSBjaGFuZ2VcbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKDQgIT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICBpZiAoMCA9PSB4aHIuc3RhdHVzKSB7XG4gICAgICBpZiAoc2VsZi5hYm9ydGVkKSByZXR1cm4gc2VsZi50aW1lb3V0RXJyb3IoKTtcbiAgICAgIHJldHVybiBzZWxmLmNyb3NzRG9tYWluRXJyb3IoKTtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdlbmQnKTtcbiAgfTtcblxuICAvLyBwcm9ncmVzc1xuICBpZiAoeGhyLnVwbG9hZCkge1xuICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wZXJjZW50ID0gZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwO1xuICAgICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIGUpO1xuICAgIH07XG4gIH1cblxuICAvLyB0aW1lb3V0XG4gIGlmICh0aW1lb3V0ICYmICF0aGlzLl90aW1lcikge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2VsZi5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgLy8gcXVlcnlzdHJpbmdcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdChxdWVyeSk7XG4gICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKVxuICAgICAgPyAnJicgKyBxdWVyeVxuICAgICAgOiAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKCdHRVQnICE9IHRoaXMubWV0aG9kICYmICdIRUFEJyAhPSB0aGlzLm1ldGhvZCAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSAmJiAhaXNIb3N0KGRhdGEpKSB7XG4gICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgdmFyIHNlcmlhbGl6ZSA9IHJlcXVlc3Quc2VyaWFsaXplW3RoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKV07XG4gICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIC8vIHNldCBoZWFkZXIgZmllbGRzXG4gIGZvciAodmFyIGZpZWxkIGluIHRoaXMuaGVhZGVyKSB7XG4gICAgaWYgKG51bGwgPT0gdGhpcy5oZWFkZXJbZmllbGRdKSBjb250aW51ZTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCwgdGhpcy5oZWFkZXJbZmllbGRdKTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG4gIHhoci5zZW5kKGRhdGEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRXhwb3NlIGBSZXF1ZXN0YC5cbiAqL1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG4vKipcbiAqIElzc3VlIGEgcmVxdWVzdDpcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICByZXF1ZXN0KCdHRVQnLCAnL3VzZXJzJykuZW5kKGNhbGxiYWNrKVxuICogICAgcmVxdWVzdCgnL3VzZXJzJykuZW5kKGNhbGxiYWNrKVxuICogICAgcmVxdWVzdCgnL3VzZXJzJywgY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHVybCBvciBjYWxsYmFja1xuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmVxdWVzdChtZXRob2QsIHVybCkge1xuICAvLyBjYWxsYmFja1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpLmVuZCh1cmwpO1xuICB9XG5cbiAgLy8gdXJsIGZpcnN0XG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QoJ0dFVCcsIG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlcXVlc3QobWV0aG9kLCB1cmwpO1xufVxuXG4vKipcbiAqIEdFVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5nZXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0dFVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBIRUFEIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmhlYWQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKXtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0hFQUQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBERUxFVEUgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZGVsID0gZnVuY3Rpb24odXJsLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdERUxFVEUnLCB1cmwpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQQVRDSCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBhdGNoID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQQVRDSCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBPU1QgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wb3N0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQT1NUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUFVUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucHV0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQVVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlcXVlc3RgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWVzdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N1cGVyYWdlbnQvbGliL2NsaWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbi8qKlxuICogUmVkdWNlIGBhcnJgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge01peGVkfSBpbml0aWFsXG4gKlxuICogVE9ETzogY29tYmF0aWJsZSBlcnJvciBoYW5kbGluZz9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgZm4sIGluaXRpYWwpeyAgXG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIGN1cnIgPSBhcmd1bWVudHMubGVuZ3RoID09IDNcbiAgICA/IGluaXRpYWxcbiAgICA6IGFycltpZHgrK107XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGN1cnIgPSBmbi5jYWxsKG51bGwsIGN1cnIsIGFycltpZHhdLCArK2lkeCwgYXJyKTtcbiAgfVxuICBcbiAgcmV0dXJuIGN1cnI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N1cGVyYWdlbnQvfi9yZWR1Y2UtY29tcG9uZW50L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHNlbGYub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N1cGVyYWdlbnQvfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJjb21wb25lbnQuanMifQ==