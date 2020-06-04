/**
 * @license
 * EMP-Player 2.2.132-548 
 * Copyright Ericsson, Inc. <https://www.ericsson.com/>
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.empShaka = factory());
}(this, (function () { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var win;

  if (typeof window !== "undefined") {
      win = window;
  } else if (typeof commonjsGlobal !== "undefined") {
      win = commonjsGlobal;
  } else if (typeof self !== "undefined"){
      win = self;
  } else {
      win = {};
  }

  var window_1 = win;

  var shakaPlayer_compiled = createCommonjsModule(function (module, exports) {
  (function(){var innerGlobal=typeof window!="undefined"?window:commonjsGlobal;var exportTo={};(function(window,global){var q,ba="function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value);},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function da(){da=function(){};ca.Symbol||(ca.Symbol=ea);}var ea=function(){var b=0;return function(c){return "jscomp_symbol_"+(c||"")+b++}}();
  function ia(){da();var b=ca.Symbol.iterator;b||(b=ca.Symbol.iterator=ca.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&ba(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return ja(this)}});ia=function(){};}function ja(b){var c=0;return ka(function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}})}function ka(b){ia();b={next:b};b[ca.Symbol.iterator]=function(){return this};return b}function r(b){ia();var c=b[Symbol.iterator];return c?c.call(b):ja(b)}
  function la(b,c){if(c){for(var d=ca,e=b.split("."),f=0;f<e.length-1;f++){var g=e[f];g in d||(d[g]={});d=d[g];}e=e[e.length-1];f=d[e];g=c(f);g!=f&&null!=g&&ba(d,e,{configurable:!0,writable:!0,value:g});}}
  la("Promise",function(b){function c(b){this.b=0;this.g=void 0;this.a=[];var c=this.c();try{b(c.resolve,c.reject);}catch(l){c.reject(l);}}function d(){this.a=null;}function e(b){return b instanceof c?b:new c(function(c){c(b);})}if(b)return b;d.prototype.b=function(b){null==this.a&&(this.a=[],this.f());this.a.push(b);};d.prototype.f=function(){var b=this;this.c(function(){b.h();});};var f=ca.setTimeout;d.prototype.c=function(b){f(b,0);};d.prototype.h=function(){for(;this.a&&this.a.length;){var b=this.a;this.a=
  [];for(var c=0;c<b.length;++c){var d=b[c];b[c]=null;try{d();}catch(m){this.g(m);}}}this.a=null;};d.prototype.g=function(b){this.c(function(){throw b;});};c.prototype.c=function(){function b(b){return function(e){d||(d=!0,b.call(c,e));}}var c=this,d=!1;return {resolve:b(this.s),reject:b(this.f)}};c.prototype.s=function(b){if(b===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof c)this.u(b);else{a:switch(typeof b){case "object":var d=null!=b;break a;case "function":d=!0;
  break a;default:d=!1;}d?this.m(b):this.h(b);}};c.prototype.m=function(b){var c=void 0;try{c=b.then;}catch(l){this.f(l);return}"function"==typeof c?this.C(c,b):this.h(b);};c.prototype.f=function(b){this.i(2,b);};c.prototype.h=function(b){this.i(1,b);};c.prototype.i=function(b,c){if(0!=this.b)throw Error("Cannot settle("+b+", "+c+"): Promise already settled in state"+this.b);this.b=b;this.g=c;this.l();};c.prototype.l=function(){if(null!=this.a){for(var b=0;b<this.a.length;++b)g.b(this.a[b]);this.a=null;}};
  var g=new d;c.prototype.u=function(b){var c=this.c();b.ac(c.resolve,c.reject);};c.prototype.C=function(b,c){var d=this.c();try{b.call(c,d.resolve,d.reject);}catch(m){d.reject(m);}};c.prototype.then=function(b,d){function e(b,c){return "function"==typeof b?function(c){try{f(b(c));}catch(y){g(y);}}:c}var f,g,h=new c(function(b,c){f=b;g=c;});this.ac(e(b,f),e(d,g));return h};c.prototype["catch"]=function(b){return this.then(void 0,b)};c.prototype.ac=function(b,c){function d(){switch(e.b){case 1:b(e.g);break;
  case 2:c(e.g);break;default:throw Error("Unexpected state: "+e.b);}}var e=this;null==this.a?g.b(d):this.a.push(d);};c.resolve=e;c.reject=function(b){return new c(function(c,d){d(b);})};c.race=function(b){return new c(function(c,d){for(var f=r(b),g=f.next();!g.done;g=f.next())e(g.value).ac(c,d);})};c.all=function(b){var d=r(b),f=d.next();return f.done?e([]):new c(function(b,c){function g(c){return function(d){h[c]=d;k--;0==k&&b(h);}}var h=[],k=0;do h.push(void 0),k++,e(f.value).ac(g(h.length-1),c),f=d.next();
  while(!f.done)})};return c});la("Promise.prototype.finally",function(b){return b?b:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;})})}});function ma(b){function c(c){return b.next(c)}function d(c){return b["throw"](c)}return new Promise(function(e,f){function g(b){b.done?e(b.value):Promise.resolve(b.value).then(c,d).then(g,f);}g(b.next());})}function t(b){return ma(b())}
  var na="function"==typeof Object.create?Object.create:function(b){function c(){}c.prototype=b;return new c},pa;if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var ra={pe:!0},sa={};try{sa.__proto__=ra;qa=sa.pe;break a}catch(b){}qa=!1;}pa=qa?function(b,c){b.__proto__=c;if(b.__proto__!==c)throw new TypeError(b+" is not extensible");return b}:null;}var ta=pa;function ua(){this.g=!1;this.c=null;this.o=void 0;this.j=1;this.b=this.f=0;this.i=this.a=null;}
  function va(b){if(b.g)throw new TypeError("Generator is already running");b.g=!0;}ua.prototype.h=function(b){this.o=b;};function wa(b,c){b.a={Cd:c,Jd:!0};b.j=b.f||b.b;}ua.prototype["return"]=function(b){this.a={"return":b};this.j=this.b;};function u(b,c,d){b.j=d;return {value:c}}ua.prototype.A=function(b){this.j=b;};function w(b){b.j=0;}function xa(b,c,d){b.f=c;void 0!=d&&(b.b=d);}function ya(b,c){b.f=0;b.b=c||0;}function za(b,c){b.j=c;b.f=0;}function Ca(b){b.f=0;var c=b.a.Cd;b.a=null;return c}
  function Da(b){b.i=[b.a];b.f=0;b.b=0;}function Ea(b,c){var d=b.i.splice(0)[0];(d=b.a=b.a||d)?d.Jd?b.j=b.f||b.b:void 0!=d.A&&b.b<d.A?(b.j=d.A,b.a=null):b.j=b.b:b.j=c;}function Fa(b){this.a=new ua;this.b=b;}function Ga(b,c){va(b.a);var d=b.a.c;if(d)return Ha(b,"return"in d?d["return"]:function(b){return {value:b,done:!0}},c,b.a["return"]);b.a["return"](c);return Ia(b)}
  function Ha(b,c,d,e){try{var f=c.call(b.a.c,d);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return b.a.g=!1,f;var g=f.value;}catch(h){return b.a.c=null,wa(b.a,h),Ia(b)}b.a.c=null;e.call(b.a,g);return Ia(b)}
  function Ia(b){for(;b.a.j;)try{var c=b.b(b.a);if(c)return b.a.g=!1,{value:c.value,done:!1}}catch(d){b.a.o=void 0,wa(b.a,d);}b.a.g=!1;if(b.a.a){c=b.a.a;b.a.a=null;if(c.Jd)throw c.Cd;return {value:c["return"],done:!0}}return {value:void 0,done:!0}}
  function La(b){this.next=function(c){va(b.a);b.a.c?c=Ha(b,b.a.c.next,c,b.a.h):(b.a.h(c),c=Ia(b));return c};this["throw"]=function(c){va(b.a);b.a.c?c=Ha(b,b.a.c["throw"],c,b.a.h):(wa(b.a,c),c=Ia(b));return c};this["return"]=function(c){return Ga(b,c)};ia();this[Symbol.iterator]=function(){return this};}function A(b,c){La.prototype=b.prototype;return new La(new Fa(c))}function Ma(b){if(!(b instanceof Array)){b=r(b);for(var c,d=[];!(c=b.next()).done;)d.push(c.value);b=d;}return b}
  function Na(b,c){return Object.prototype.hasOwnProperty.call(b,c)}
  la("WeakMap",function(b){function c(b){this.a=(g+=Math.random()+1).toString();if(b){da();ia();b=r(b);for(var c;!(c=b.next()).done;)c=c.value,this.set(c[0],c[1]);}}function d(b){Na(b,f)||ba(b,f,{value:{}});}function e(b){var c=Object[b];c&&(Object[b]=function(b){d(b);return c(b)});}if(function(){if(!b||!Object.seal)return !1;try{var c=Object.seal({}),d=Object.seal({}),e=new b([[c,2],[d,3]]);if(2!=e.get(c)||3!=e.get(d))return !1;e["delete"](c);e.set(d,4);return !e.has(c)&&4==e.get(d)}catch(m){return !1}}())return b;
  var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;c.prototype.set=function(b,c){d(b);if(!Na(b,f))throw Error("WeakMap key fail: "+b);b[f][this.a]=c;return this};c.prototype.get=function(b){return Na(b,f)?b[f][this.a]:void 0};c.prototype.has=function(b){return Na(b,f)&&Na(b[f],this.a)};c.prototype["delete"]=function(b){return Na(b,f)&&Na(b[f],this.a)?delete b[f][this.a]:!1};return c});
  la("Map",function(b){function c(){var b={};return b.Fa=b.next=b.head=b}function d(b,c){var d=b.a;return ka(function(){if(d){for(;d.head!=b.a;)d=d.Fa;for(;d.next!=d.head;)return d=d.next,{done:!1,value:c(d)};d=null;}return {done:!0,value:void 0}})}function e(b,c){var d=c&&typeof c;"object"==d||"function"==d?g.has(c)?d=g.get(c):(d=""+ ++h,g.set(c,d)):d="p_"+c;var e=b.b[d];if(e&&Na(b.b,d))for(var f=0;f<e.length;f++){var k=e[f];if(c!==c&&k.key!==k.key||c===k.key)return {id:d,list:e,index:f,X:k}}return {id:d,
  list:e,index:-1,X:void 0}}function f(b){this.b={};this.a=c();this.size=0;if(b){b=r(b);for(var d;!(d=b.next()).done;)d=d.value,this.set(d[0],d[1]);}}if(function(){if(!b||"function"!=typeof b||!b.prototype.entries||"function"!=typeof Object.seal)return !1;try{var c=Object.seal({x:4}),d=new b(r([[c,"s"]]));if("s"!=d.get(c)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return !1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||"s"!=f.value[1])return !1;f=e.next();return f.done||4!=f.value[0].x||
  "t"!=f.value[1]||!e.next().done?!1:!0}catch(p){return !1}}())return b;da();ia();var g=new WeakMap;f.prototype.set=function(b,c){var d=e(this,b);d.list||(d.list=this.b[d.id]=[]);d.X?d.X.value=c:(d.X={next:this.a,Fa:this.a.Fa,head:this.a,key:b,value:c},d.list.push(d.X),this.a.Fa.next=d.X,this.a.Fa=d.X,this.size++);return this};f.prototype["delete"]=function(b){b=e(this,b);return b.X&&b.list?(b.list.splice(b.index,1),b.list.length||delete this.b[b.id],b.X.Fa.next=b.X.next,b.X.next.Fa=b.X.Fa,b.X.head=
  null,this.size--,!0):!1};f.prototype.clear=function(){this.b={};this.a=this.a.Fa=c();this.size=0;};f.prototype.has=function(b){return !!e(this,b).X};f.prototype.get=function(b){return (b=e(this,b).X)&&b.value};f.prototype.entries=function(){return d(this,function(b){return [b.key,b.value]})};f.prototype.keys=function(){return d(this,function(b){return b.key})};f.prototype.values=function(){return d(this,function(b){return b.value})};f.prototype.forEach=function(b,c){for(var d=this.entries(),e;!(e=d.next()).done;)e=
  e.value,b.call(c,e[1],e[0],this);};f.prototype[Symbol.iterator]=f.prototype.entries;var h=0;return f});
  la("Set",function(b){function c(b){this.a=new Map;if(b){b=r(b);for(var c;!(c=b.next()).done;)this.add(c.value);}this.size=this.a.size;}if(function(){if(!b||"function"!=typeof b||!b.prototype.entries||"function"!=typeof Object.seal)return !1;try{var c=Object.seal({x:4}),e=new b(r([c]));if(!e.has(c)||1!=e.size||e.add(c)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return !1;var f=e.entries(),g=f.next();if(g.done||g.value[0]!=c||g.value[1]!=c)return !1;g=f.next();return g.done||g.value[0]==c||4!=g.value[0].x||
  g.value[1]!=g.value[0]?!1:f.next().done}catch(h){return !1}}())return b;da();ia();c.prototype.add=function(b){this.a.set(b,b);this.size=this.a.size;return this};c.prototype["delete"]=function(b){b=this.a["delete"](b);this.size=this.a.size;return b};c.prototype.clear=function(){this.a.clear();this.size=0;};c.prototype.has=function(b){return this.a.has(b)};c.prototype.entries=function(){return this.a.entries()};c.prototype.values=function(){return this.a.values()};c.prototype.keys=c.prototype.values;
  c.prototype[Symbol.iterator]=c.prototype.values;c.prototype.forEach=function(b,c){var d=this;this.a.forEach(function(e){return b.call(c,e,e,d)});};return c});function Oa(b,c,d){b instanceof String&&(b=String(b));for(var e=b.length,f=0;f<e;f++){var g=b[f];if(c.call(d,g,f,b))return {Gd:f,ke:g}}return {Gd:-1,ke:void 0}}la("Array.prototype.findIndex",function(b){return b?b:function(b,d){return Oa(this,b,d).Gd}});
  function Pa(b,c){ia();b instanceof String&&(b+="");var d=0,e={next:function(){if(d<b.length){var f=d++;return {value:c(f,b[f]),done:!1}}e.next=function(){return {done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e}la("Array.prototype.keys",function(b){return b?b:function(){return Pa(this,function(b){return b})}});la("Object.is",function(b){return b?b:function(b,d){return b===d?0!==b||1/b===1/d:b!==b&&d!==d}});
  la("Array.prototype.includes",function(b){return b?b:function(b,d){var c=this;c instanceof String&&(c=String(c));var f=c.length,g=d||0;for(0>g&&(g=Math.max(g+f,0));g<f;g++){var h=c[g];if(h===b||Object.is(h,b))return !0}return !1}});function Qa(b,c,d){if(null==b)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return b+""}
  la("String.prototype.includes",function(b){return b?b:function(b,d){return -1!==Qa(this,b,"includes").indexOf(b,d||0)}});la("Array.from",function(b){return b?b:function(b,d,e){ia();d=null!=d?d:function(b){return b};var c=[],g=b[Symbol.iterator];if("function"==typeof g)for(b=g.call(b);!(g=b.next()).done;)c.push(d.call(e,g.value));else{g=b.length;for(var h=0;h<g;h++)c.push(d.call(e,b[h]));}return c}});
  la("String.prototype.startsWith",function(b){return b?b:function(b,d){for(var c=Qa(this,b,"startsWith"),f=c.length,g=b.length,h=Math.max(0,Math.min(d|0,c.length)),k=0;k<g&&h<f;)if(c[h++]!=b[k++])return !1;return k>=g}});la("Array.prototype.find",function(b){return b?b:function(b,d){return Oa(this,b,d).ke}});var Ra="function"==typeof Object.assign?Object.assign:function(b,c){for(var d=1;d<arguments.length;d++){var e=arguments[d];if(e)for(var f in e)Na(e,f)&&(b[f]=e[f]);}return b};
  la("Object.assign",function(b){return b||Ra});var Sa=this;Sa.a=!0;function B(b,c){var d=b.split("."),e=Sa;d[0]in e||!e.execScript||e.execScript("var "+d[0]);for(var f;d.length&&(f=d.shift());)d.length||void 0===c?e[f]?e=e[f]:e=e[f]={}:e[f]=c;}function Ta(b,c){function d(){}d.prototype=c.prototype;b.fg=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.tg=function(b,d,g){return c.prototype[d].apply(b,Array.prototype.slice.call(arguments,2))};}function Va(b){this.c=Math.exp(Math.log(.5)/b);this.b=this.a=0;}function Wa(b,c,d){var e=Math.pow(b.c,c);d=d*(1-e)+e*b.a;isNaN(d)||(b.a=d,b.b+=c);}function Xa(b){return b.a/(1-Math.pow(b.c,b.b))}function Ya(){this.c=new Va(2);this.f=new Va(5);this.b=0;this.a=null;}Ya.prototype.configure=function(b){this.a=b;};Ya.prototype.getBandwidthEstimate=function(b){return this.b<(this.a.minTotalBytes?this.a.minTotalBytes:128E3)?b:Math.min(Xa(this.c),Xa(this.f))};function Za(){}function $a(){}function ab(){}window.console&&window.console.log.bind&&($a=console.warn.bind(console),Za=console.error.bind(console));var bb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function fb(b){var c;b instanceof fb?(gb(this,b.ta),this.bb=b.bb,this.sa=b.sa,hb(this,b.zb),this.ja=b.ja,ib(this,b.a.clone()),this.Sa=b.Sa):b&&(c=String(b).match(bb))?(gb(this,c[1]||"",!0),this.bb=jb(c[2]||""),this.sa=jb(c[3]||"",!0),hb(this,c[4]),this.ja=jb(c[5]||"",!0),ib(this,c[6]||"",!0),this.Sa=jb(c[7]||"")):this.a=new kb(null);}q=fb.prototype;q.ta="";q.bb="";q.sa="";q.zb=null;q.ja="";q.Sa="";
  q.toString=function(){var b=[],c=this.ta;c&&b.push(lb(c,mb,!0),":");if(c=this.sa){b.push("//");var d=this.bb;d&&b.push(lb(d,mb,!0),"@");b.push(encodeURIComponent(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));c=this.zb;null!=c&&b.push(":",String(c));}if(c=this.ja)this.sa&&"/"!=c.charAt(0)&&b.push("/"),b.push(lb(c,"/"==c.charAt(0)?nb:ob,!0));(c=this.a.toString())&&b.push("?",c);(c=this.Sa)&&b.push("#",lb(c,pb));return b.join("")};
  q.resolve=function(b){var c=this.clone();"data"===c.ta&&(c=new fb);var d=!!b.ta;d?gb(c,b.ta):d=!!b.bb;d?c.bb=b.bb:d=!!b.sa;d?c.sa=b.sa:d=null!=b.zb;var e=b.ja;if(d)hb(c,b.zb);else if(d=!!b.ja){if("/"!=e.charAt(0))if(this.sa&&!this.ja)e="/"+e;else{var f=c.ja.lastIndexOf("/");-1!=f&&(e=c.ja.substr(0,f+1)+e);}if(".."==e||"."==e)e="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){f=0==e.lastIndexOf("/",0);e=e.split("/");for(var g=[],h=0;h<e.length;){var k=e[h++];"."==k?f&&h==e.length&&g.push(""):".."==
  k?((1<g.length||1==g.length&&""!=g[0])&&g.pop(),f&&h==e.length&&g.push("")):(g.push(k),f=!0);}e=g.join("/");}}d?c.ja=e:d=""!==b.a.toString();d?ib(c,b.a.clone()):d=!!b.Sa;d&&(c.Sa=b.Sa);return c};q.clone=function(){return new fb(this)};function gb(b,c,d){b.ta=d?jb(c,!0):c;b.ta&&(b.ta=b.ta.replace(/:$/,""));}function hb(b,c){if(c){c=Number(c);if(isNaN(c)||0>c)throw Error("Bad port number "+c);b.zb=c;}else b.zb=null;}function ib(b,c,d){c instanceof kb?b.a=c:(d||(c=lb(c,ub)),b.a=new kb(c));}
  function jb(b,c){return b?c?decodeURI(b):decodeURIComponent(b):""}function lb(b,c,d){return "string"==typeof b?(b=encodeURI(b).replace(c,vb),d&&(b=b.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b):null}function vb(b){b=b.charCodeAt(0);return "%"+(b>>4&15).toString(16)+(b&15).toString(16)}var mb=/[#\/\?@]/g,ob=/[#\?:]/g,nb=/[#\?]/g,ub=/[#\?@]/g,pb=/#/g;function kb(b){this.a=b||null;}q=kb.prototype;q.ha=null;q.cc=null;
  q.add=function(b,c){if(!this.ha&&(this.ha={},this.cc=0,this.a))for(var d=this.a.split("&"),e=0;e<d.length;e++){var f=d[e].indexOf("="),g=null;if(0<=f){var h=d[e].substring(0,f);g=d[e].substring(f+1);}else h=d[e];h=decodeURIComponent(h.replace(/\+/g," "));g=g||"";this.add(h,decodeURIComponent(g.replace(/\+/g," ")));}this.a=null;(d=this.ha.hasOwnProperty(b)&&this.ha[b])||(this.ha[b]=d=[]);d.push(c);this.cc++;return this};
  q.toString=function(){if(this.a)return this.a;if(!this.ha)return "";var b=[],c;for(c in this.ha)for(var d=encodeURIComponent(c),e=this.ha[c],f=0;f<e.length;f++){var g=d;""!==e[f]&&(g+="="+encodeURIComponent(e[f]));b.push(g);}return this.a=b.join("&")};q.clone=function(){var b=new kb;b.a=this.a;if(this.ha){var c={},d;for(d in this.ha)c[d]=this.ha[d].concat();b.ha=c;b.cc=this.cc;}return b};function wb(b){this.b=b;this.a=null;}wb.prototype.P=function(b){var c=this;this.stop();var d=!0,e=null;this.a=function(){window.clearTimeout(e);d=!1;};e=window.setTimeout(function(){d&&c.b();},1E3*b);return this};wb.prototype.stop=function(){this.a&&(this.a(),this.a=null);};function C(b){this.b=b;this.a=null;}B("shaka.util.Timer",C);C.prototype.uc=function(){this.stop();this.b();return this};C.prototype.tickNow=C.prototype.uc;C.prototype.P=function(b){var c=this;this.stop();this.a=(new wb(function(){c.b();})).P(b);return this};C.prototype.tickAfter=C.prototype.P;C.prototype.Na=function(b){var c=this;this.stop();this.a=(new wb(function(){c.a.P(b);c.b();})).P(b);return this};C.prototype.tickEvery=C.prototype.Na;C.prototype.stop=function(){this.a&&(this.a.stop(),this.a=null);};
  C.prototype.stop=C.prototype.stop;function xb(b,c){var d=yb();this.i=null==b.maxAttempts?d.maxAttempts:b.maxAttempts;this.f=null==b.baseDelay?d.baseDelay:b.baseDelay;this.h=null==b.fuzzFactor?d.fuzzFactor:b.fuzzFactor;this.g=null==b.backoffFactor?d.backoffFactor:b.backoffFactor;this.a=0;this.b=this.f;if(this.c=void 0===c?!1:c)this.a=1;}
  function zb(b){return t(function d(){var e,f;return A(d,function(d){switch(d.j){case 1:if(b.a>=b.i)if(b.c)b.a=1,b.b=b.f;else return d["return"](Promise.reject());e=b.a;b.a++;if(0==e)return d["return"]();f=b.b*(1+(2*Math.random()-1)*b.h);return u(d,new Promise(function(b){(new C(b)).P(f/1E3);}),2);case 2:b.b*=b.g,w(d);}})})}function yb(){return {maxAttempts:2,baseDelay:1E3,backoffFactor:2,fuzzFactor:.5,timeout:0}}function D(b,c,d,e){for(var f=[],g=3;g<arguments.length;++g)f[g-3]=arguments[g];this.severity=b;this.category=c;this.code=d;this.data=f;this.handled=!1;}B("shaka.util.Error",D);D.prototype.toString=function(){return "shaka.util.Error "+JSON.stringify(this,null,"  ")};D.Severity={RECOVERABLE:1,CRITICAL:2};D.Category={NETWORK:1,TEXT:2,MEDIA:3,MANIFEST:4,STREAMING:5,DRM:6,PLAYER:7,CAST:8,STORAGE:9};
  D.Code={UNSUPPORTED_SCHEME:1E3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,UNKNOWN_DATA_URI_ENCODING:1005,REQUEST_FILTER_ERROR:1006,RESPONSE_FILTER_ERROR:1007,MALFORMED_TEST_URI:1008,UNEXPECTED_TEST_REQUEST:1009,INVALID_TEXT_HEADER:2E3,INVALID_TEXT_CUE:2001,UNABLE_TO_DETECT_ENCODING:2003,BAD_ENCODING:2004,INVALID_XML:2005,INVALID_MP4_TTML:2007,INVALID_MP4_VTT:2008,UNABLE_TO_EXTRACT_CUE_START_TIME:2009,BUFFER_READ_OUT_OF_BOUNDS:3E3,JS_INTEGER_OVERFLOW:3001,EBML_OVERFLOW:3002,
  EBML_BAD_FLOATING_POINT_SIZE:3003,MP4_SIDX_WRONG_BOX_TYPE:3004,MP4_SIDX_INVALID_TIMESCALE:3005,MP4_SIDX_TYPE_NOT_SUPPORTED:3006,WEBM_CUES_ELEMENT_MISSING:3007,WEBM_EBML_HEADER_ELEMENT_MISSING:3008,WEBM_SEGMENT_ELEMENT_MISSING:3009,WEBM_INFO_ELEMENT_MISSING:3010,WEBM_DURATION_ELEMENT_MISSING:3011,WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:3012,WEBM_CUE_TIME_ELEMENT_MISSING:3013,MEDIA_SOURCE_OPERATION_FAILED:3014,MEDIA_SOURCE_OPERATION_THREW:3015,VIDEO_ERROR:3016,QUOTA_EXCEEDED_ERROR:3017,TRANSMUXING_FAILED:3018,
  UNABLE_TO_GUESS_MANIFEST_TYPE:4E3,DASH_INVALID_XML:4001,DASH_NO_SEGMENT_INFO:4002,DASH_EMPTY_ADAPTATION_SET:4003,DASH_EMPTY_PERIOD:4004,DASH_WEBM_MISSING_INIT:4005,DASH_UNSUPPORTED_CONTAINER:4006,DASH_PSSH_BAD_ENCODING:4007,DASH_NO_COMMON_KEY_SYSTEM:4008,DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:4009,DASH_CONFLICTING_KEY_IDS:4010,UNPLAYABLE_PERIOD:4011,RESTRICTIONS_CANNOT_BE_MET:4012,NO_PERIODS:4014,HLS_PLAYLIST_HEADER_MISSING:4015,INVALID_HLS_TAG:4016,HLS_INVALID_PLAYLIST_HIERARCHY:4017,DASH_DUPLICATE_REPRESENTATION_ID:4018,
  HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:4020,HLS_COULD_NOT_GUESS_MIME_TYPE:4021,HLS_MASTER_PLAYLIST_NOT_PROVIDED:4022,HLS_REQUIRED_ATTRIBUTE_MISSING:4023,HLS_REQUIRED_TAG_MISSING:4024,HLS_COULD_NOT_GUESS_CODECS:4025,HLS_KEYFORMATS_NOT_SUPPORTED:4026,DASH_UNSUPPORTED_XLINK_ACTUATE:4027,DASH_XLINK_DEPTH_LIMIT:4028,HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:4030,CONTENT_UNSUPPORTED_BY_BROWSER:4032,CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM:4033,HLS_AES_128_ENCRYPTION_NOT_SUPPORTED:4034,INVALID_STREAMS_CHOSEN:5005,
  NO_RECOGNIZED_KEY_SYSTEMS:6E3,REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:6001,FAILED_TO_CREATE_CDM:6002,FAILED_TO_ATTACH_TO_VIDEO:6003,INVALID_SERVER_CERTIFICATE:6004,FAILED_TO_CREATE_SESSION:6005,FAILED_TO_GENERATE_LICENSE_REQUEST:6006,LICENSE_REQUEST_FAILED:6007,LICENSE_RESPONSE_REJECTED:6008,ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:6010,NO_LICENSE_SERVER_GIVEN:6012,OFFLINE_SESSION_REMOVED:6013,EXPIRED:6014,SERVER_CERTIFICATE_REQUIRED:6015,INIT_DATA_TRANSFORM_ERROR:6016,LOAD_INTERRUPTED:7E3,OPERATION_ABORTED:7001,
  NO_VIDEO_ELEMENT:7002,CAST_API_UNAVAILABLE:8E3,NO_CAST_RECEIVERS:8001,ALREADY_CASTING:8002,UNEXPECTED_CAST_ERROR:8003,CAST_CANCELED_BY_USER:8004,CAST_CONNECTION_TIMED_OUT:8005,CAST_RECEIVER_APP_UNAVAILABLE:8006,CAST_RECEIVER_APP_ID_MISSING:8007,STORAGE_NOT_SUPPORTED:9E3,INDEXED_DB_ERROR:9001,DEPRECATED_OPERATION_ABORTED:9002,REQUESTED_ITEM_NOT_FOUND:9003,MALFORMED_OFFLINE_URI:9004,CANNOT_STORE_LIVE_OFFLINE:9005,STORE_ALREADY_IN_PROGRESS:9006,NO_INIT_DATA_FOR_OFFLINE:9007,LOCAL_PLAYER_INSTANCE_REQUIRED:9008,
  NEW_KEY_OPERATION_NOT_SUPPORTED:9011,KEY_NOT_FOUND:9012,MISSING_STORAGE_CELL:9013};function F(){var b,c,d=new Promise(function(d,f){b=d;c=f;});d.resolve=b;d.reject=c;return d}F.prototype.resolve=function(){};F.prototype.reject=function(){};function H(b,c){this.promise=b;this.Md=c;this.a=!1;}B("shaka.util.AbortableOperation",H);function Ab(b){return new H(Promise.reject(b),function(){return Promise.resolve()})}H.failed=Ab;function Db(){var b=Promise.reject(new D(2,7,7001));b["catch"](function(){});return new H(b,function(){return Promise.resolve()})}H.aborted=Db;function Eb(b){return new H(Promise.resolve(b),function(){return Promise.resolve()})}H.completed=Eb;
  function Fb(b){return new H(b,function(){return b["catch"](function(){})})}H.notAbortable=Fb;H.prototype.abort=function(){this.a=!0;return this.Md()};H.prototype.abort=H.prototype.abort;function Gb(b){return new H(Promise.all(b.map(function(b){return b.promise})),function(){return Promise.all(b.map(function(b){return b.abort()}))})}H.all=Gb;H.prototype["finally"]=function(b){this.promise.then(function(){return b(!0)},function(){return b(!1)});return this};H.prototype["finally"]=H.prototype["finally"];
  H.prototype.U=function(b,c){function d(){f.reject(new D(2,7,7001));return e.abort()}var e=this,f=new F;this.promise.then(function(c){e.a?f.reject(new D(2,7,7001)):b?d=Hb(b,c,f):f.resolve(c);},function(b){c?d=Hb(c,b,f):f.reject(b);});return new H(f,function(){return d()})};H.prototype.chain=H.prototype.U;
  function Hb(b,c,d){try{var e=b(c);if(e&&e.promise&&e.abort)return d.resolve(e.promise),function(){return e.abort()};d.resolve(e);return function(){return Promise.resolve(e).then(function(){})["catch"](function(){})}}catch(f){return d.reject(f),function(){return Promise.resolve()}}}function I(b,c){c=void 0===c?{}:c;for(var d in c)this[d]=c[d];this.defaultPrevented=this.cancelable=this.bubbles=!1;this.timeStamp=window.performance&&window.performance.now?window.performance.now():Date.now();this.type=b;this.isTrusted=!1;this.target=this.currentTarget=null;this.a=!1;}I.prototype.preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0);};I.prototype.stopImmediatePropagation=function(){this.a=!0;};I.prototype.stopPropagation=function(){};function Ib(){this.a={};}q=Ib.prototype;q.push=function(b,c){this.a.hasOwnProperty(b)?this.a[b].push(c):this.a[b]=[c];};q.get=function(b){return (b=this.a[b])?b.slice():null};q.getAll=function(){var b=[],c;for(c in this.a)b.push.apply(b,this.a[c]);return b};q.remove=function(b,c){var d=this.a[b];if(d)for(var e=0;e<d.length;++e)d[e]==c&&(d.splice(e,1),--e);};q.forEach=function(b){for(var c in this.a)b(c,this.a[c]);};function Jb(){this.Fc=new Ib;this.Yb=this;}Jb.prototype.addEventListener=function(b,c){this.Fc.push(b,c);};Jb.prototype.removeEventListener=function(b,c){this.Fc.remove(b,c);};Jb.prototype.dispatchEvent=function(b){for(var c=this.Fc.get(b.type)||[],d=0;d<c.length;++d){b.target=this.Yb;b.currentTarget=this.Yb;var e=c[d];try{e.handleEvent?e.handleEvent(b):e.call(this,b);}catch(f){}if(b.a)break}return b.defaultPrevented};function Kb(b){function c(b){switch(typeof b){case "undefined":case "boolean":case "number":case "string":case "symbol":case "function":return b;default:if(!b||b.buffer&&b.buffer.constructor==ArrayBuffer)return b;if(d.has(b))return null;var e=b.constructor==Array;if(b.constructor!=Object&&!e)return null;d.add(b);var g=e?[]:{},h;for(h in b)g[h]=c(b[h]);e&&(g.length=b.length);return g}}var d=new Set;return c(b)}function Lb(b,c){return "number"===typeof b&&"number"===typeof c&&isNaN(b)&&isNaN(c)?!0:b===c}function Mb(b,c){var d=b.indexOf(c);-1<d&&b.splice(d,1);}function Nb(b,c){var d=0;b.forEach(function(b){d+=c(b)?1:0;});return d}
  function Ob(b,c,d){d||(d=Lb);if(b.length!=c.length)return !1;c=c.slice();var e={};b=r(b);for(var f=b.next();!f.done;e={item:e.item},f=b.next()){e.item=f.value;f=c.findIndex(function(b){return function(c){return d(b.item,c)}}(e));if(-1==f)return !1;c[f]=c[c.length-1];c.pop();}return 0==c.length}function Pb(){this.a=[];}function Qb(b,c){b.a.push(c["finally"](function(){Mb(b.a,c);}));}Pb.prototype.destroy=function(){var b=[];this.a.forEach(function(c){c.promise["catch"](function(){});b.push(c.abort());});this.a=[];return Promise.all(b)};function J(b){Jb.call(this);this.f=!1;this.g=new Pb;this.a=new Set;this.b=new Set;this.c=b||null;}Ta(J,Jb);B("shaka.net.NetworkingEngine",J);J.RequestType={MANIFEST:0,SEGMENT:1,LICENSE:2,APP:3,TIMING:4};J.PluginPriority={FALLBACK:1,PREFERRED:2,APPLICATION:3};var Rb={};function Sb(b,c,d){d=d||3;var e=Rb[b];if(!e||d>=e.priority)Rb[b]={priority:d,Df:c};}J.registerScheme=Sb;J.unregisterScheme=function(b){delete Rb[b];};J.prototype.Ff=function(b){this.a.add(b);};J.prototype.registerRequestFilter=J.prototype.Ff;
  J.prototype.hg=function(b){this.a["delete"](b);};J.prototype.unregisterRequestFilter=J.prototype.hg;J.prototype.ye=function(){this.a.clear();};J.prototype.clearAllRequestFilters=J.prototype.ye;J.prototype.Gf=function(b){this.b.add(b);};J.prototype.registerResponseFilter=J.prototype.Gf;J.prototype.ig=function(b){this.b["delete"](b);};J.prototype.unregisterResponseFilter=J.prototype.ig;J.prototype.ze=function(){this.b.clear();};J.prototype.clearAllResponseFilters=J.prototype.ze;
  J.defaultRetryParameters=function(){return yb()};function Ub(b,c){return {uris:b,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:c,licenseRequestType:null,sessionId:null}}J.makeRequest=Ub;J.prototype.destroy=function(){this.f=!0;this.a.clear();this.b.clear();return this.g.destroy()};J.prototype.destroy=J.prototype.destroy;
  J.prototype.request=function(b,c){var d=this,e=new Vb;if(this.f){var f=Promise.reject(new D(2,7,7001));f["catch"](function(){});return new Wb(f,function(){return Promise.resolve()},e)}c.method=c.method||"GET";c.headers=c.headers||{};c.retryParameters=c.retryParameters?Kb(c.retryParameters):yb();c.uris=Kb(c.uris);f=Xb(this,b,c);var g=f.U(function(){return Yb(d,b,c,new xb(c.retryParameters,!1),0,null,e)}),h=g.U(function(c){return Zb(d,b,c)}),k=Date.now(),l=0;f.promise.then(function(){l=Date.now()-k;},
  function(){});var m=0;g.promise.then(function(){m=Date.now();},function(){});f=h.U(function(c){var e=Date.now()-m,f=c.response;f.timeMs+=l;f.timeMs+=e;c.cf||!d.c||f.fromCache||1!=b||d.c(f.timeMs,f.data.byteLength);return f},function(b){b&&(b.severity=2);throw b;});f=new Wb(f.promise,f.Md,e);Qb(this.g,f);return f};J.prototype.request=J.prototype.request;
  function Xb(b,c,d){var e=Eb(void 0),f={};b=r(b.a);for(var g=b.next();!g.done;f={ld:f.ld},g=b.next())f.ld=g.value,e=e.U(function(b){return function(){return b.ld(c,d)}}(f));return e.U(void 0,function(b){if(b&&7001==b.code)throw b;throw new D(2,1,1006,b);})}
  function Yb(b,c,d,e,f,g,h){var k=new fb(d.uris[f]),l=k.ta,m=!1;l||(l=location.protocol,l=l.slice(0,-1),gb(k,l),d.uris[f]=k.toString());l=l.toLowerCase();var n=(l=Rb[l])?l.Df:null;if(!n)return Ab(new D(2,1,1E3,k));var p;return Fb(zb(e)).U(function(){if(b.f)return Db();p=Date.now();return n(d.uris[f],d,c,function(d,e,f){b.c&&1==c&&(b.c(d,e),m=!0,h.a=f);})}).U(function(b){void 0==b.timeMs&&(b.timeMs=Date.now()-p);return {response:b,cf:m}},function(k){if(k&&7001==k.code)throw k;if(b.f)return Db();if(k&&
  1==k.severity)return b.dispatchEvent(new I("retry",{error:k instanceof D?k:null})),f=(f+1)%d.uris.length,Yb(b,c,d,e,f,k,h);throw k||g;})}function Zb(b,c,d){var e=Eb(void 0);b=r(b.b);for(var f=b.next();!f.done;f=b.next())e=e.U(f.value.bind(null,c,d.response));return e.U(function(){return d},function(b){if(b&&7001==b.code)throw b;var c=2;b instanceof D&&(c=b.severity);throw new D(c,1,1007,b);})}function Vb(){this.a=0;}J.NumBytesRemainingClass=Vb;function Wb(b,c,d){H.call(this,b,c);this.b=d;}var $b=Wb;
  $b.prototype=na(H.prototype);$b.prototype.constructor=$b;if(ta)ta($b,H);else for(var ac in H)if("prototype"!=ac)if(Object.defineProperties){var bc=Object.getOwnPropertyDescriptor(H,ac);bc&&Object.defineProperty($b,ac,bc);}else $b[ac]=H[ac];$b.fg=H.prototype;J.PendingRequest=Wb;Wb.all=Gb;Wb.notAbortable=Fb;Wb.completed=Eb;Wb.aborted=Db;Wb.failed=Ab;function cc(){}B("shaka.util.IReleasable",cc);cc.prototype.release=function(){};function K(){this.a=new Ib;}B("shaka.util.EventManager",K);K.prototype.release=function(){this.$a();this.a=null;};K.prototype.release=K.prototype.release;K.prototype.w=function(b,c,d,e){this.a&&(b=new dc(b,c,d,e),this.a.push(c,b));};K.prototype.listen=K.prototype.w;K.prototype.da=function(b,c,d,e){function f(e){g.ea(b,c,f);d(e);}var g=this;this.w(b,c,f,e);};K.prototype.listenOnce=K.prototype.da;
  K.prototype.ea=function(b,c,d){if(this.a){var e=this.a.get(c)||[];e=r(e);for(var f=e.next();!f.done;f=e.next())f=f.value,f.target!=b||d!=f.listener&&d||(f.ea(),this.a.remove(c,f));}};K.prototype.unlisten=K.prototype.ea;K.prototype.$a=function(){if(this.a){var b=this.a.getAll();b=r(b);for(var c=b.next();!c.done;c=b.next())c.value.ea();this.a.a={};}};K.prototype.removeAll=K.prototype.$a;
  function dc(b,c,d,e){this.target=b;this.type=c;this.listener=d;this.a=ec(b,e);this.target.addEventListener(c,d,this.a);}dc.prototype.ea=function(){this.target.removeEventListener(this.type,this.listener,this.a);this.listener=this.target=null;this.a=!1;};dc.prototype.unlisten=dc.prototype.ea;function ec(b,c){if(void 0==c)return !1;if("boolean"==typeof c)return c;var d=new Set(["passive","capture"]);Object.keys(c).filter(function(b){return !d.has(b)});return fc(b)?c:c.capture||!1}
  function fc(b){var c=gc;if(void 0==c){c=!1;try{var d={},e={get:function(){c=!0;return !1}};Object.defineProperty(d,"passive",e);Object.defineProperty(d,"capture",e);e=function(){};b.addEventListener("test",e,d);b.removeEventListener("test",e,d);}catch(f){c=!1;}gc=c;}return c||!1}var gc=void 0;function hc(b){b=new Uint8Array(b);if((new DataView(b.buffer,b.byteOffset,b.byteLength)).getUint32(0,!0)+4!=b.byteLength)throw new RangeError("Malformed FairPlay init data");b=ic(b.subarray(4),!0);return (new fb(b)).sa}B("shaka.util.FairPlayUtils.defaultGetContentId",hc);
  function jc(b,c,d){function e(b){(new DataView(g.buffer)).setUint32(h,b.byteLength,!0);h+=4;f(b);}function f(b){g.set(b,h);h+=b.byteLength;}if(!d||!d.byteLength)throw new D(2,6,6015);c="string"==typeof c?new Uint8Array(kc(c,!0)):new Uint8Array(c);var g=new Uint8Array(8+b.byteLength+c.byteLength+d.byteLength),h=0;f(new Uint8Array(b));e(c);e(new Uint8Array(d));return g}B("shaka.util.FairPlayUtils.initDataTransform",jc);function lc(b,c){for(var d=[],e=r(b),f=e.next();!f.done;f=e.next())d.push(c(f.value));return d}function mc(b,c){for(var d=r(b),e=d.next();!e.done;e=d.next())if(!c(e.value))return !1;return !0}function nc(b){var c=new Map;Object.keys(b).forEach(function(d){c.set(d,b[d]);});return c}function oc(b){var c={};b.forEach(function(b,e){c[e]=b;});return c}function pc(b,c){var d=b;c&&(d+='; codecs="'+c+'"');return d}function qc(b){var c=[b.mimeType];rc.forEach(function(d,e){var f=b[e];f&&c.push(d+'="'+f+'"');});return c.join(";")}function sc(b){b=b.split(".");var c=b[0];b.pop();return [c,b.join(".")]}var rc=(new Map).set("codecs","codecs").set("frameRate","framerate").set("bandwidth","bitrate").set("width","width").set("height","height").set("channelsCount","channels");function tc(){return window.MediaSource&&MediaSource.isTypeSupported?!0:!1}function uc(b){return ""!=vc().canPlayType(b)}function xc(b){return (navigator.userAgent||"").includes(b)}function vc(){if(yc)return yc;zc||(zc=new C(function(){yc=null;}));(yc=document.querySelector("video")||document.querySelector("audio"))||(yc=document.createElement("video"));zc.P(1);return yc}var zc=null,yc=null;function Ac(b){if(!b)return "";b=new Uint8Array(b);239==b[0]&&187==b[1]&&191==b[2]&&(b=b.subarray(3));b=Bc(b);b=escape(b);try{return decodeURIComponent(b)}catch(c){throw new D(2,2,2004);}}B("shaka.util.StringUtils.fromUTF8",Ac);
  function ic(b,c,d){if(!b)return "";if(!d&&0!=b.byteLength%2)throw new D(2,2,2004);if(b instanceof ArrayBuffer)var e=b;else d=new Uint8Array(b.byteLength),d.set(new Uint8Array(b)),e=d.buffer;b=Math.floor(b.byteLength/2);d=new Uint16Array(b);e=new DataView(e);for(var f=0;f<b;f++)d[f]=e.getUint16(2*f,c);return Bc(d)}B("shaka.util.StringUtils.fromUTF16",ic);
  function Cc(b){var c=new Uint8Array(b);if(239==c[0]&&187==c[1]&&191==c[2])return Ac(c);if(254==c[0]&&255==c[1])return ic(c.subarray(2),!1);if(255==c[0]&&254==c[1])return ic(c.subarray(2),!0);var d=function(b,c){return b.byteLength<=c||32<=b[c]&&126>=b[c]}.bind(null,c);if(0==c[0]&&0==c[2])return ic(b,!1);if(0==c[1]&&0==c[3])return ic(b,!0);if(d(0)&&d(1)&&d(2)&&d(3))return Ac(b);throw new D(2,2,2003);}B("shaka.util.StringUtils.fromBytesAutoDetect",Cc);
  function Dc(b){b=encodeURIComponent(b);b=unescape(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c.buffer}B("shaka.util.StringUtils.toUTF8",Dc);function kc(b,c){for(var d=new Uint8Array(2*b.length),e=new DataView(d.buffer),f=0;f<b.length;++f)e.setUint16(2*f,b.charCodeAt(f),c);return d.buffer}B("shaka.util.StringUtils.toUTF16",kc);
  function Bc(b){if(!Ec)for(var c=function(b){try{var c=new Uint8Array(b);Ma(c);return !0}catch(g){return !1}},d={size:65536};0<d.size;d={size:d.size},d.size/=2)if(c(d.size)){Ec=function(b){return function(c){for(var d="",e=0;e<c.length;e+=b.size)d+=String.fromCharCode.apply(String,Ma(c.subarray(e,e+b.size)));return d}}(d);break}return Ec(b)}var Ec=null;var L={vc:function(b,c){var d=Bc(b);c=void 0==c?!0:c;d=window.btoa(d).replace(/\+/g,"-").replace(/\//g,"_");return c?d:d.replace(/=*$/,"")}};B("shaka.util.Uint8ArrayUtils.toBase64",L.vc);L.Ba=function(b){b=window.atob(b.replace(/-/g,"+").replace(/_/g,"/"));for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c};B("shaka.util.Uint8ArrayUtils.fromBase64",L.Ba);
  L.Mc=function(b){for(var c=new Uint8Array(b.length/2),d=0;d<b.length;d+=2)c[d/2]=window.parseInt(b.substr(d,2),16);return c};B("shaka.util.Uint8ArrayUtils.fromHex",L.Mc);L.wc=function(b){for(var c="",d=0;d<b.length;++d){var e=b[d].toString(16);1==e.length&&(e="0"+e);c+=e;}return c};B("shaka.util.Uint8ArrayUtils.toHex",L.wc);L.za=function(b,c){if(!b&&!c)return !0;if(!b||!c||b.length!=c.length)return !1;for(var d=0;d<b.length;++d)if(b[d]!=c[d])return !1;return !0};B("shaka.util.Uint8ArrayUtils.equal",L.za);
  L.concat=function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];for(var e=d=0;e<c.length;++e)d+=c[e].length;d=new Uint8Array(d);for(var f=e=0;f<c.length;++f)d.set(c[f],e),e+=c[f].length;return d};B("shaka.util.Uint8ArrayUtils.concat",L.concat);function Fc(b){var c=this;this.C=b;this.u=new Set;this.h=this.l=null;this.S=!1;this.K=0;this.a=null;this.i=new K;this.b=new Map;this.s=[];this.m=new F;this.f=null;this.g=function(d){c.m.reject(d);b.onError(d);};this.pa=new Map;this.W=new Map;this.R=new C(function(){return Gc(c)});this.c=!1;this.na=new F;this.D=!1;this.F=[];this.oa=!1;this.$=(new C(function(){Hc(c);})).Na(1);this.m["catch"](function(){});}q=Fc.prototype;
  q.destroy=function(){var b=this;return t(function d(){return A(d,function(d){switch(d.j){case 1:if(b.c)return u(d,b.na,0);b.c=!0;return u(d,Ic(b),4);case 4:b.na.resolve(),d.A(0);}})})};
  function Ic(b){return t(function d(){return A(d,function(d){switch(d.j){case 1:return b.i.release(),b.i=null,b.m.reject(),b.$.stop(),b.$=null,b.R.stop(),b.R=null,u(d,Jc(b),2);case 2:if(!b.h){d.A(3);break}xa(d,4);return u(d,b.h.setMediaKeys(null),6);case 6:za(d,5);break;case 4:Ca(d);case 5:b.h=null;case 3:b.a=null,b.u.clear(),b.l=null,b.s=[],b.f=null,b.g=null,b.C=null,w(d);}})})}q.configure=function(b){this.f=b;};function Kc(b,c,d){b.s=[];b.D=d;return Lc(b,c)}
  function Mc(b,c,d){b.s=d;b.D=0<d.length;return Lc(b,c)}function Nc(b,c,d,e,f,g){var h=new Map;h.set(c,{audioCapabilities:f,videoCapabilities:g,distinctiveIdentifier:"optional",persistentState:"required",sessionTypes:["persistent-license"],label:c,drmInfos:[{keySystem:c,licenseServerUri:d,distinctiveIdentifierRequired:!1,persistentStateRequired:!0,audioRobustness:"",videoRobustness:"",serverCertificate:e,initData:null,keyIds:null}]});return Oc(b,h)}
  function Lc(b,c){var d=Pc(b);if(d)for(var e=r(c),f=e.next();!f.done;f=e.next())f.value.drmInfos=[d];d=c.some(function(b){return 0<b.drmInfos.length});d||(f=nc(b.f.servers),Qc(c,f));e=r(c);for(f=e.next();!f.done;f=e.next()){f=r(f.value.drmInfos);for(var g=f.next();!g.done;g=f.next())Rc(g.value,nc(b.f.servers),nc(b.f.advanced||{}));}e=r(c);for(f=e.next();!f.done;f=e.next())for(f=f.value,g=f.drmInfos.length;g--;)"com.chromecast.playready"===f.drmInfos[g].keySystem&&f.drmInfos.splice(g,1);f=Sc(b,c);if(!f.size)return b.S=
  !0,Promise.resolve();f=Oc(b,f);return d?f:f["catch"](function(){})}
  q.Gb=function(b){var c=this;if(!this.l)return this.i.da(b,"encrypted",function(){c.g(new D(2,6,6010));}),Promise.resolve();this.h=b;this.i.da(this.h,"play",function(){for(var b=0;b<c.F.length;b++)Tc(c,c.F[b]);c.oa=!0;c.F=[];});"webkitCurrentPlaybackTargetIsWireless"in this.h&&this.i.w(this.h,"webkitcurrentplaybacktargetiswirelesschanged",function(){return Jc(c)});b=this.h.setMediaKeys(this.l);b=b["catch"](function(b){return Promise.reject(new D(2,6,6003,b.message))});var d=Uc(this);return Promise.all([b,
  d]).then(function(){if(c.c)return Promise.reject();Vc(c);c.a.initData.length||c.s.length||c.i.w(c.h,"encrypted",function(b){return Wc(c,b.initDataType,new Uint8Array(b.initData))});})["catch"](function(b){if(!c.c)return Promise.reject(b)})};
  function Uc(b){return t(function d(){var e;return A(d,function(d){switch(d.j){case 1:if(!(b.l&&b.a&&b.a.serverCertificate&&b.a.serverCertificate.length)){d.A(0);break}xa(d,3);return u(d,b.l.setServerCertificate(b.a.serverCertificate),5);case 5:za(d,0);break;case 3:return e=Ca(d),d["return"](Promise.reject(new D(2,6,6004,e.message)))}})})}
  function Xc(b,c){return t(function e(){var f,g,h;return A(e,function(e){switch(e.j){case 1:return u(e,Yc(b,c),2);case 2:f=e.o;if(!f)return e["return"]();g=[];if(h=b.b.get(f))h.ya=new F,g.push(h.ya);g.push(f.remove());return u(e,Promise.all(g),0)}})})}function Vc(b){var c=b.a?b.a.initData:[];c.forEach(function(c){return Zc(b,c.initDataType,c.initData)});b.s.forEach(function(c){return Yc(b,c)});c.length||b.s.length||b.m.resolve();return b.m}
  function Wc(b,c,d){var e=b.b.values();e=r(e);for(var f=e.next();!f.done;f=e.next())if(L.za(d,f.value.initData))return;Zc(b,c,d);}function $c(b){return b?b.keySystem:""}function ad(b,c){return xc("Edge/")?!0:b.u.has(c)}function bd(b){b=b.b.keys();b=lc(b,function(b){return b.sessionId});return Array.from(b)}q.Jb=function(){var b=Infinity,c=this.b.keys();c=r(c);for(var d=c.next();!d.done;d=c.next())d=d.value,isNaN(d.expiration)||(b=Math.min(b,d.expiration));return b};
  function Sc(b,c){for(var d=new Set,e=r(c),f=e.next();!f.done;f=e.next()){var g=r(f.value.drmInfos);for(f=g.next();!f.done;f=g.next())d.add(f.value);}e=r(d);for(f=e.next();!f.done;f=e.next())Rc(f.value,nc(b.f.servers),nc(b.f.advanced||{}));g=b.D?"required":"optional";var h=b.D?["persistent-license"]:["temporary"];e=new Map;d=r(d);for(f=d.next();!f.done;f=d.next())f=f.value,e.set(f.keySystem,{audioCapabilities:[],videoCapabilities:[],distinctiveIdentifier:"optional",persistentState:g,sessionTypes:h,
  label:f.keySystem,drmInfos:[]});d=r(c);for(f=d.next();!f.done;f=d.next()){f=f.value;g=f.audio;h=f.video;var k=g?pc(g.mimeType,g.codecs):"",l=h?pc(h.mimeType,h.codecs):"",m=r(f.drmInfos);for(f=m.next();!f.done;f=m.next()){f=f.value;var n=e.get(f.keySystem);n.drmInfos.push(f);f.distinctiveIdentifierRequired&&(n.distinctiveIdentifier="required");f.persistentStateRequired&&(n.persistentState="required");g&&n.audioCapabilities.push({robustness:f.audioRobustness||"",contentType:k});h&&n.videoCapabilities.push({robustness:f.videoRobustness||
  "",contentType:l});}}return e}
  function Oc(b,c){if(1==c.size&&c.has(""))return Promise.reject(new D(2,6,6E3));for(var d=r(c.values()),e=d.next();!e.done;e=d.next())e=e.value,0==e.audioCapabilities.length&&delete e.audioCapabilities,0==e.videoCapabilities.length&&delete e.videoCapabilities;var f=d=new F;[!0,!1].forEach(function(b){var d=this;c.forEach(function(c,e){c.drmInfos.some(function(b){return !!b.licenseServerUri})==b&&(f=f["catch"](function(){if(!this.c)return navigator.requestMediaKeySystemAccess(e,[c])}.bind(d)));});}.bind(b));
  f=f["catch"](function(){return Promise.reject(new D(2,6,6001))});f=f.then(function(b){if(this.c)return Promise.reject();this.u.clear();var d=b.getConfiguration(),e=d.videoCapabilities||[],f=r(d.audioCapabilities||[]);for(d=f.next();!d.done;d=f.next())this.u.add(d.value.contentType);e=r(e);for(d=e.next();!d.done;d=e.next())this.u.add(d.value.contentType);e=b.keySystem;d=c.get(b.keySystem);f=[];var g=[],n=[],p=[];cd(d.drmInfos,f,g,n,p);this.a={keySystem:e,licenseServerUri:f[0],distinctiveIdentifierRequired:"required"==
  d.distinctiveIdentifier,persistentStateRequired:"required"==d.persistentState,audioRobustness:(d.audioCapabilities?d.audioCapabilities[0].robustness:"")||"",videoRobustness:(d.videoCapabilities?d.videoCapabilities[0].robustness:"")||"",serverCertificate:g[0],initData:n,keyIds:p};return this.a.licenseServerUri?b.createMediaKeys():Promise.reject(new D(2,6,6012,this.a.keySystem))}.bind(b)).then(function(b){if(this.c)return Promise.reject();this.l=b;this.S=!0;}.bind(b))["catch"](function(b){if(!this.c)return this.a=
  null,this.u.clear(),b instanceof D?Promise.reject(b):Promise.reject(new D(2,6,6002,b.message))}.bind(b));d.reject();return f}
  function Pc(b){b=nc(b.f.clearKeys);if(0==b.size)return null;var c=[],d=[];b.forEach(function(b,e){var f=L.Mc(e),g=L.Mc(b);f={kty:"oct",kid:L.vc(f,!1),k:L.vc(g,!1)};c.push(f);d.push(f.kid);});b=JSON.stringify({keys:c});var e=JSON.stringify({kids:d});e=[{initData:new Uint8Array(Dc(e)),initDataType:"keyids"}];return {keySystem:"org.w3.clearkey",licenseServerUri:"data:application/json;base64,"+window.btoa(b),distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",
  serverCertificate:null,initData:e,keyIds:[]}}
  function Yc(b,c){try{var d=b.l.createSession("persistent-license");}catch(g){var e=new D(2,6,6005,g.message);b.g(e);return Promise.reject(e)}b.i.w(d,"message",b.Ud.bind(b));b.i.w(d,"keystatuseschange",b.Sd.bind(b));var f={initData:null,loaded:!1,cd:Infinity,ya:null};b.b.set(d,f);return d.load(c).then(function(b){if(this.c)return Promise.reject();if(b)return f.loaded=!0,dd(this)&&this.m.resolve(),d;this.b["delete"](d);this.g(new D(2,6,6013));}.bind(b),function(b){this.c||(this.b["delete"](d),this.g(new D(2,
  6,6005,b.message)));}.bind(b))}
  function Zc(b,c,d){try{var e=b.D?b.l.createSession("persistent-license"):b.l.createSession();}catch(f){b.g(new D(2,6,6005,f.message));return}b.i.w(e,"message",b.Ud.bind(b));b.i.w(e,"keystatuseschange",b.Sd.bind(b));b.b.set(e,{initData:d,loaded:!1,cd:Infinity,ya:null});try{d=b.f.initDataTransform(d,b.a);}catch(f){c=f;f instanceof D||(c=new D(2,6,6016,f));b.g(c);return}e.generateRequest(c,d.buffer)["catch"](function(c){if(!b.c){b.b["delete"](e);if(c.errorCode&&c.errorCode.systemCode){var d=c.errorCode.systemCode;
  0>d&&(d+=Math.pow(2,32));d="0x"+d.toString(16);}b.g(new D(2,6,6006,c.message,c,d));}});}function ed(b,c){if($c(c).startsWith("com.apple.fps")){var d=c.serverCertificate,e=hc(b);b=jc(b,e,d);}return b}q.Ud=function(b){this.h&&this.f.delayLicenseRequestUntilPlayed&&this.h.paused&&!this.oa?this.F.push(b):Tc(this,b);};
  function Tc(b,c){var d=c.target,e=b.b.get(d),f=b.a.licenseServerUri,g=b.f.advanced[b.a.keySystem];"individualization-request"==c.messageType&&g&&g.individualizationServer&&(f=g.individualizationServer);f=Ub([f],b.f.retryParameters);f.body=c.message;f.method="POST";f.licenseRequestType=c.messageType;f.sessionId=d.sessionId;"com.microsoft.playready"!=b.a.keySystem&&"com.chromecast.playready"!=b.a.keySystem||fd(f);b.a.keySystem.startsWith("com.apple.fps")&&b.f.fairPlayTransform&&gd(f);var h=Date.now();
  b.C.tb.request(2,f).promise.then(function(b){if(this.c)return Promise.reject();this.a.keySystem.startsWith("com.apple.fps")&&this.f.fairPlayTransform&&hd(b);this.K+=(Date.now()-h)/1E3;return d.update(b.data).then(function(){var b=this;this.C.onEvent(new I("drmsessionupdate"));e&&(e.ya&&e.ya.resolve(),(new C(function(){e.loaded=!0;dd(b)&&b.m.resolve();})).P(id));}.bind(this))}.bind(b),function(b){this.c||(b=new D(2,6,6007,b),this.g(b),e&&e.ya&&e.ya.reject(b));}.bind(b))["catch"](function(b){this.c||(b=
  new D(2,6,6008,b.message),this.g(b),e&&e.ya&&e.ya.reject(b));}.bind(b));}function fd(b){var c=ic(b.body,!0,!0);if(c.includes("PlayReadyKeyMessage")){c=(new DOMParser).parseFromString(c,"application/xml");for(var d=c.getElementsByTagName("HttpHeader"),e=0;e<d.length;++e)b.headers[d[e].querySelector("name").textContent]=d[e].querySelector("value").textContent;b.body=L.Ba(c.querySelector("Challenge").textContent).buffer;}else b.headers["Content-Type"]="text/xml; charset=utf-8";}
  function gd(b){var c=new Uint8Array(b.body);c="spc="+L.vc(c);b.headers["Content-Type"]="application/x-www-form-urlencoded";b.body=Dc(c);}function hd(b){try{var c=Ac(b.data);}catch(d){return}c=c.trim();"<ckc>"===c.substr(0,5)&&"</ckc>"===c.substr(-6)&&(c=c.slice(5,-6));try{c=JSON.parse(c).ckc;}catch(d){}b.data=L.Ba(c).buffer;}
  q.Sd=function(b){b=b.target;var c=this.b.get(b),d=!1;b.keyStatuses.forEach(function(b,e){if("string"==typeof e){var f=e;e=b;b=f;}if("com.microsoft.playready"==this.a.keySystem&&16==e.byteLength&&!xc("Tizen")){f=new DataView(e);var g=f.getUint32(0,!0),l=f.getUint16(4,!0),m=f.getUint16(6,!0);f.setUint32(0,g,!1);f.setUint16(4,l,!1);f.setUint16(6,m,!1);}"com.microsoft.playready"==this.a.keySystem&&"status-pending"==b&&(b="usable");"status-pending"!=b&&(c.loaded=!0);"expired"==b&&(d=!0);f=L.wc(new Uint8Array(e));
  this.pa.set(f,b);}.bind(this));var e=b.expiration-Date.now();(0>e||d&&1E3>e)&&c&&!c.ya&&(this.b["delete"](b),b.close()["catch"](function(){}));dd(this)&&(this.m.resolve(),this.R.P(jd));};function Gc(b){var c=b.pa,d=b.W;d.clear();c.forEach(function(b,c){return d.set(c,b)});c=Array.from(d.values());c.length&&c.every(function(b){return "expired"==b})&&b.g(new D(2,6,6014));b.C.mc(oc(d));}
  function kd(){function b(b){return t(function h(){var c,f,m;return A(h,function(h){switch(h.j){case 1:return xa(h,2),u(h,navigator.requestMediaKeySystemAccess(b,d),4);case 4:return c=h.o,m=(f=c.getConfiguration().sessionTypes)?f.includes("persistent-license"):!1,xc("Tizen 3")&&(m=!1),e.set(b,{persistentState:m}),u(h,c.createMediaKeys(),5);case 5:za(h,0);break;case 2:Ca(h),e.set(b,null),w(h);}})})}var c=[{contentType:'video/mp4; codecs="avc1.42E01E"'},{contentType:'video/webm; codecs="vp8"'}],d=[{videoCapabilities:c,
  persistentState:"required",sessionTypes:["persistent-license"]},{videoCapabilities:c}],e=new Map;c="org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").map(function(c){return b(c)});return Promise.all(c).then(function(){return oc(e)})}
  function ld(b,c){var d=c.audio,e=c.video;if(d&&d.encrypted&&!ad(b,pc(d.mimeType,d.codecs))||e&&e.encrypted&&!ad(b,pc(e.mimeType,e.codecs)))return !1;var f=$c(b.a);return 0==c.drmInfos.length||c.drmInfos.some(function(b){return b.keySystem==f})}
  function md(b,c){if(!b.length)return c;if(!c.length)return b;for(var d=[],e=0;e<b.length;e++)for(var f=0;f<c.length;f++)if(b[e].keySystem==c[f].keySystem){var g=b[e];f=c[f];var h=[];h=h.concat(g.initData||[]);h=h.concat(f.initData||[]);var k=[];k=k.concat(g.keyIds);k=k.concat(f.keyIds);d.push({keySystem:g.keySystem,licenseServerUri:g.licenseServerUri||f.licenseServerUri,distinctiveIdentifierRequired:g.distinctiveIdentifierRequired||f.distinctiveIdentifierRequired,persistentStateRequired:g.persistentStateRequired||
  f.persistentStateRequired,videoRobustness:g.videoRobustness||f.videoRobustness,audioRobustness:g.audioRobustness||f.audioRobustness,serverCertificate:g.serverCertificate||f.serverCertificate,initData:h,keyIds:k});break}return d}
  function Jc(b){return t(function d(){var e;return A(d,function(d){switch(d.j){case 1:return e=Array.from(b.b.keys()),b.b.clear(),u(d,Promise.all(e.map(function(b){return t(function k(){return A(k,function(d){switch(d.j){case 1:return xa(d,2),u(d,Promise.all([b.close(),b.closed]),4);case 4:za(d,0);break;case 2:Ca(d),w(d);}})})})),0)}})})}function Hc(b){b.b.forEach(function(c,d){var e=c.cd,f=d.expiration;isNaN(f)&&(f=Infinity);f!=e&&(b.C.onExpirationUpdated(d.sessionId,f),c.cd=f);});}
  function dd(b){b=b.b.values();return mc(b,function(b){return b.loaded})}function Qc(b,c){var d=[];c.forEach(function(b,c){d.push({keySystem:c,licenseServerUri:b,distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:[],keyIds:[]});});for(var e=r(b),f=e.next();!f.done;f=e.next())f.value.drmInfos=d;}
  function cd(b,c,d,e,f){b.forEach(function(b){c.includes(b.licenseServerUri)||c.push(b.licenseServerUri);b.serverCertificate&&(d.some(function(c){return L.za(c,b.serverCertificate)})||d.push(b.serverCertificate));b.initData&&b.initData.forEach(function(b){e.some(function(c){return c.keyId&&c.keyId==b.keyId?!0:c.initDataType==b.initDataType&&L.za(c.initData,b.initData)})||e.push(b);});if(b.keyIds)for(var g=0;g<b.keyIds.length;++g)f.includes(b.keyIds[g])||f.push(b.keyIds[g]);});}
  function Rc(b,c,d){if(b.keySystem&&("org.w3.clearkey"!=b.keySystem||!b.licenseServerUri)){c.size&&(c=c.get(b.keySystem)||"",b.licenseServerUri=c);b.keyIds||(b.keyIds=[]);if(d=d.get(b.keySystem))b.distinctiveIdentifierRequired||(b.distinctiveIdentifierRequired=d.distinctiveIdentifierRequired),b.persistentStateRequired||(b.persistentStateRequired=d.persistentStateRequired),b.videoRobustness||(b.videoRobustness=d.videoRobustness),b.audioRobustness||(b.audioRobustness=d.audioRobustness),b.serverCertificate||
  (b.serverCertificate=d.serverCertificate);window.cast&&window.cast.__platform__&&"com.microsoft.playready"==b.keySystem&&(b.keySystem="com.chromecast.playready");}}var id=5,jd=.5;function nd(){this.a=new muxjs.mp4.CaptionParser;this.g=[];this.f={};}nd.prototype.init=function(b){var c=muxjs.mp4.probe;b=new Uint8Array(b);this.g=c.videoTrackIds(b);this.f=c.timescale(b);this.a.init();};nd.prototype.b=function(b,c){var d=new Uint8Array(b);(d=this.a.parse(d,this.g,this.f))&&d.captions&&c(d.captions);this.a.clearParsedCaptions();};nd.prototype.c=function(){this.a.resetCaptionStream();};function od(){}od.prototype.init=function(){};od.prototype.b=function(){};od.prototype.c=function(){};function pd(b){return !b||1==b.length&&1E-6>b.end(0)-b.start(0)?null:b.length?b.end(b.length-1):null}function qd(b,c,d){d=void 0===d?0:d;return !b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0)||c>b.end(b.length-1)?!1:c+d>=b.start(0)}function rd(b,c){if(!b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0))return 0;for(var d=0,e=b.length-1;0<=e&&b.end(e)>c;--e)d+=b.end(e)-Math.max(b.start(e),c);return d}
  function sd(b){if(!b)return [];for(var c=[],d=0;d<b.length;d++)c.push({start:b.start(d),end:b.end(d)});return c}var td={Ae:function(b,c){return b.reduce(function(b,c,f){return c["catch"](b.bind(null,f))}.bind(null,c),Promise.reject())},Cc:function(b,c){return b.concat(c)},kc:function(){},Ia:function(b){return null!=b}};function ud(b,c){if(0==c.length)return b;var d=c.map(function(b){return new fb(b)});return b.map(function(b){return new fb(b)}).map(function(b){return d.map(b.resolve.bind(b))}).reduce(td.Cc,[]).map(function(b){return b.toString()})}function xd(b,c){return {keySystem:b,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:c||[],keyIds:[]}}
  var yd={Pa:"video",Db:"audio",ra:"text",rg:"image",pg:"application"},zd=1/15;function Ad(){this.a=new muxjs.mp4.Transmuxer({keepOriginalTimestamps:!0});this.b=null;this.g=[];this.c=[];this.f=!1;this.a.on("data",this.i.bind(this));this.a.on("done",this.h.bind(this));}Ad.prototype.destroy=function(){this.a.dispose();this.a=null;return Promise.resolve()};function Bd(b,c){return window.muxjs&&"mp2t"==b.toLowerCase().split(";")[0].split("/")[1]?c?MediaSource.isTypeSupported(Cd(c,b)):MediaSource.isTypeSupported(Cd("audio",b))||MediaSource.isTypeSupported(Cd("video",b)):!1}
  function Cd(b,c){var d=c.replace(/mp2t/i,"mp4");"audio"==b&&(d=d.replace("video","audio"));var e=/avc1\.(66|77|100)\.(\d+)/.exec(d);if(e){var f="avc1.",g=e[1],h=Number(e[2]);f=("66"==g?f+"4200":"77"==g?f+"4d00":f+"6400")+(h>>4).toString(16);f+=(h&15).toString(16);d=d.replace(e[0],f);}return d}function Dd(b,c){b.f=!0;b.b=new F;b.g=[];b.c=[];var d=new Uint8Array(c);b.a.push(d);b.a.flush();b.f&&b.b.reject(new D(2,3,3018));return b.b}
  Ad.prototype.i=function(b){this.c=b.captions;var c=new Uint8Array(b.data.byteLength+b.initSegment.byteLength);c.set(b.initSegment,0);c.set(b.data,b.initSegment.byteLength);this.g.push(c);};Ad.prototype.h=function(){var b={data:L.concat.apply(null,this.g),captions:this.c};this.b.resolve(b);this.f=!1;};function Ed(b,c,d){this.startTime=b;this.direction=Fd;this.endTime=c;this.payload=d;this.region=new Gd;this.position=null;this.positionAlign=Hd;this.size=100;this.textAlign=Id;this.writingMode=Jd;this.lineInterpretation=Kd;this.line=null;this.lineHeight="";this.lineAlign=Ld;this.displayAlign=Md;this.fontSize=this.backgroundImage=this.backgroundColor=this.color="";this.fontWeight=Nd;this.fontStyle=Od;this.fontFamily="";this.textDecoration=[];this.wrapLine=!0;this.id="";this.nestedCues=[];this.spacer=
  !1;}B("shaka.text.Cue",Ed);var Hd="auto";Ed.positionAlign={LEFT:"line-left",RIGHT:"line-right",CENTER:"center",AUTO:Hd};var Id="center",Pd={LEFT:"left",RIGHT:"right",CENTER:Id,START:"start",END:"end"};Ed.textAlign=Pd;var Md="after",Qd={BEFORE:"before",CENTER:"center",AFTER:Md};Ed.displayAlign=Qd;var Fd="ltr";Ed.direction={HORIZONTAL_LEFT_TO_RIGHT:Fd,HORIZONTAL_RIGHT_TO_LEFT:"rtl"};var Jd="horizontal-tb";Ed.writingMode={HORIZONTAL_TOP_TO_BOTTOM:Jd,VERTICAL_LEFT_TO_RIGHT:"vertical-lr",VERTICAL_RIGHT_TO_LEFT:"vertical-rl"};
  var Kd=0;Ed.lineInterpretation={LINE_NUMBER:Kd,PERCENTAGE:1};var Ld="start",Rd={CENTER:"center",START:Ld,END:"end"};Ed.lineAlign=Rd;var Nd=400;Ed.fontWeight={NORMAL:Nd,BOLD:700};var Od="normal",Sd={NORMAL:Od,ITALIC:"italic",OBLIQUE:"oblique"};Ed.fontStyle=Sd;Ed.textDecoration={UNDERLINE:"underline",LINE_THROUGH:"lineThrough",OVERLINE:"overline"};
  function Gd(){this.id="";this.regionAnchorY=this.regionAnchorX=this.viewportAnchorY=this.viewportAnchorX=0;this.height=this.width=100;this.viewportAnchorUnits=this.widthUnits=this.heightUnits=Td;this.scroll=Ud;}B("shaka.text.CueRegion",Gd);var Td=1;Gd.units={PX:0,PERCENTAGE:Td,LINES:2};var Ud="";Gd.scrollMode={NONE:Ud,UP:"up"};function Vd(b){this.g=null;this.c=b;this.f=this.m=0;this.h=Infinity;this.b=this.a=null;this.l="";this.i=new Map;}var Wd={};B("shaka.text.TextEngine.registerParser",function(b,c){Wd[b]=c;});B("shaka.text.TextEngine.unregisterParser",function(b){delete Wd[b];});function Xd(b){return Wd[b]||window.muxjs&&"application/cea-608"==b?!0:!1}Vd.prototype.destroy=function(){this.c=this.g=null;this.i.clear();return Promise.resolve()};function Yd(b,c){"application/cea-608"!=c&&(b.g=new Wd[c]);}
  Vd.prototype.Rc=function(b){var c={periodStart:0,segmentStart:null,segmentEnd:0};try{return this.g.parseMedia(new Uint8Array(b),c)[0].startTime}catch(d){throw new D(2,2,2009,d);}};
  function Zd(b,c,d,e){return Promise.resolve().then(function(){if(this.g&&this.c)if(null==d||null==e)this.g.parseInit(new Uint8Array(c));else{var b={periodStart:this.m,segmentStart:d,segmentEnd:e};b=this.g.parseMedia(new Uint8Array(c),b).filter(function(b){return b.startTime>=this.f&&b.startTime<this.h}.bind(this));this.c.append(b);null==this.a&&(this.a=Math.max(d,this.f));this.b=Math.min(e,this.h);}}.bind(b))}
  Vd.prototype.remove=function(b,c){return Promise.resolve().then(function(){!this.c||!this.c.remove(b,c)||null==this.a||c<=this.a||b>=this.b||(b<=this.a&&c>=this.b?this.a=this.b=null:b<=this.a&&c<this.b?this.a=c:b>this.a&&c>=this.b&&(this.b=b));}.bind(this))};Vd.prototype.se=function(b){this.c.append(b);};Vd.prototype.appendCues=Vd.prototype.se;
  Vd.prototype.tc=function(b,c){this.l=b;var d=this.i.get(b);if(d)for(var e=r(d.keys()),f=e.next();!f.done;f=e.next())(f=d.get(f.value).filter(function(b){return b.endTime<=c}))&&this.c.append(f);};Vd.prototype.setSelectedClosedCaptionId=Vd.prototype.tc;
  function $d(b,c,d,e,f){var g=d+" "+e,h=new Map;c=r(c);for(var k=c.next();!k.done;k=c.next()){var l=k.value;k=l.stream;h.has(k)||h.set(k,new Map);h.get(k).has(g)||h.get(k).set(g,[]);l.startTime+=f;l.endTime+=f;l.startTime>=b.f&&l.startTime<b.h&&(l=new Ed(l.startTime,l.endTime,l.text),h.get(k).get(g).push(l),k==b.l&&b.c.append([l]));}f=r(h.keys());for(g=f.next();!g.done;g=f.next())for(g=g.value,b.i.has(g)||b.i.set(g,new Map),c=r(h.get(g).keys()),k=c.next();!k.done;k=c.next())k=k.value,l=h.get(g).get(k),
  b.i.get(g).set(k,l);b.a=null==b.a?Math.max(d,b.f):Math.min(b.a,Math.max(d,b.f));b.b=Math.max(b.b,Math.min(e,b.h));}function ae(b,c,d){this.f=b;this.g=d;this.b={};this.a=null;this.c={};this.i=new K;this.u=!1;this.l={};this.m=c;b=this.s=new F;c=new MediaSource;this.i.da(c,"sourceopen",b.resolve);this.f.src=be(c);this.h=c;}var be=window.URL.createObjectURL;function ce(b){var c=pc(b.mimeType,b.codecs),d=qc(b);return Xd(c)||MediaSource.isTypeSupported(d)||Bd(c,b.type)}q=ae.prototype;
  q.destroy=function(){var b=this;this.u=!0;var c=[],d;for(d in this.c){var e=this.c[d],f=e[0];this.c[d]=e.slice(0,1);f&&c.push(f.p["catch"](td.kc));for(f=1;f<e.length;++f)e[f].p.reject();}this.a&&c.push(this.a.destroy());this.g&&c.push(this.g.destroy());for(var g in this.l)c.push(this.l[g].destroy());return Promise.all(c).then(function(){b.i&&(b.i.release(),b.i=null);b.f&&(b.f.removeAttribute("src"),b.f.load(),b.f=null);b.h=null;b.a=null;b.g=null;b.b={};b.l={};b.m=null;b.c={};})};
  q.init=function(b,c){var d=this;return t(function f(){var g;return A(f,function(f){switch(f.j){case 1:return g=yd,u(f,d.s,2);case 2:b.forEach(function(b,f){var h=pc(b.mimeType,b.codecs);f==g.ra?de(d,h):(!c&&MediaSource.isTypeSupported(h)||!Bd(h,f)||(d.l[f]=new Ad,h=Cd(f,h)),h=d.h.addSourceBuffer(h),d.i.w(h,"error",d.Yf.bind(d,f)),d.i.w(h,"updateend",d.wb.bind(d,f)),d.b[f]=h,d.c[f]=[]);}),w(f);}})})};function de(b,c){b.a||(b.a=new Vd(b.g));Yd(b.a,c);}
  function ee(b){return b.h?"ended"==b.h.readyState:!0}function fe(b,c){if("text"==c)var d=b.a.a;else d=ge(b,c),d=!d||1==d.length&&1E-6>d.end(0)-d.start(0)?null:1==d.length&&0>d.start(0)?0:d.length?d.start(0):null;return d}function he(b,c){return "text"==c?b.a.b:pd(ge(b,c))}function ie(b,c,d){if("text"==c)return b=b.a,null==b.b||b.b<d?0:b.b-Math.max(d,b.a);b=ge(b,c);return rd(b,d)}
  q.Oc=function(b){b.total=sd(this.f.buffered);b.audio=sd(ge(this,"audio"));b.video=sd(ge(this,"video"));b.text=[];if(this.a){var c=this.a.a,d=this.a.b;null!=c&&null!=d&&b.text.push({start:c,end:d});}};function ge(b,c){try{return b.b[c].buffered}catch(d){return null}}
  function je(b,c,d,e,f,g){if("text"==c)return Zd(b.a,d,e,f);if(b.l[c])return Dd(b.l[c],d).then(function(b){this.a||de(this,"text/vtt");b.captions&&b.captions.length&&$d(this.a,b.captions,e,f,this.b.video.timestampOffset);return ke(this,c,this.ge.bind(this,c,b.data.buffer))}.bind(b));g&&window.muxjs&&(b.a||de(b,"text/vtt"),null==e&&null==f?b.m.init(d):b.m.b(d,function(c){c.length&&$d(b.a,c,e,f,b.b.video.timestampOffset);}));return ke(b,c,b.ge.bind(b,c,d))}
  q.tc=function(b){var c=he(this,"video")||0;this.a.tc(b,c);};q.remove=function(b,c,d){return "text"==b?this.a.remove(c,d):ke(this,b,this.he.bind(this,b,c,d))};function le(b,c){if("text"==c){if(!b.a)return Promise.resolve();b.m.c();return b.a.remove(0,Infinity)}return ke(b,c,b.he.bind(b,c,0,b.h.duration))}q.flush=function(b){return "text"==b?Promise.resolve():ke(this,b,this.Fe.bind(this,b))};
  function me(b,c,d,e,f){return "text"==c?(b.a.m=d,b=b.a,b.f=e,b.h=f,Promise.resolve()):Promise.all([ke(b,c,b.qe.bind(b,c)),ke(b,c,b.Xf.bind(b,c,d)),ke(b,c,b.Uf.bind(b,c,e,f))])}q.endOfStream=function(b){return ne(this,function(){ee(this)||(b?this.h.endOfStream(b):this.h.endOfStream());}.bind(this))};q.xa=function(b){return ne(this,function(){this.h.duration=b;}.bind(this))};q.Y=function(){return this.h.duration};q.ge=function(b,c){this.b[b].appendBuffer(c);};
  q.he=function(b,c,d){d<=c?this.wb(b):this.b[b].remove(c,d);};q.qe=function(b){var c=this.b[b].appendWindowStart,d=this.b[b].appendWindowEnd;this.b[b].abort();this.b[b].appendWindowStart=c;this.b[b].appendWindowEnd=d;this.wb(b);};q.Fe=function(b){this.f.currentTime-=.001;this.wb(b);};q.Xf=function(b,c){0>c&&(c+=.001);this.b[b].timestampOffset=c;this.wb(b);};q.Uf=function(b,c,d){this.b[b].appendWindowStart=0;this.b[b].appendWindowEnd=d;this.b[b].appendWindowStart=c;this.wb(b);};
  q.Yf=function(b){this.c[b][0].p.reject(new D(2,3,3014,this.f.error?this.f.error.code:0));};q.wb=function(b){var c=this.c[b][0];c&&(c.p.resolve(),oe(this,b));};function ke(b,c,d){if(b.u)return Promise.reject();d={start:d,p:new F};b.c[c].push(d);if(1==b.c[c].length)try{d.start();}catch(e){"QuotaExceededError"==e.name?d.p.reject(new D(2,3,3017,c)):d.p.reject(new D(2,3,3015,e)),oe(b,c);}return d.p}
  function ne(b,c){if(b.u)return Promise.reject();var d=[],e;for(e in b.b){var f=new F,g={start:function(b){b.resolve();}.bind(null,f),p:f};b.c[e].push(g);d.push(f);1==b.c[e].length&&g.start();}return Promise.all(d).then(function(){try{c();}catch(l){var b=Promise.reject(new D(2,3,3015,l));}for(var d in this.b)oe(this,d);return b}.bind(b),function(b){throw b;}.bind(b))}function oe(b,c){b.c[c].shift();var d=b.c[c][0];if(d)try{d.start();}catch(e){d.p.reject(new D(2,3,3015,e)),oe(b,c);}}function pe(b,c){b=M(b);c=M(c);return b.split("-")[0]==c.split("-")[0]}function qe(b,c){b=M(b);c=M(c);var d=b.split("-"),e=c.split("-");return d[0]==e[0]&&1==d.length&&2==e.length}function M(b){var c=b.split("-");b=c[0]||"";c=c[1]||"";b=b.toLowerCase();b=re.get(b)||b;return (c=c.toUpperCase())?b+"-"+c:b}function se(b){return b.language?M(b.language):b.audio&&b.audio.language?M(b.audio.language):b.video&&b.video.language?M(b.video.language):"und"}
  function te(b,c){for(var d=M(b),e=new Set,f=r(c),g=f.next();!g.done;g=f.next())e.add(M(g.value));f=r(e);for(g=f.next();!g.done;g=f.next())if(g=g.value,g==d)return g;f=r(e);for(g=f.next();!g.done;g=f.next())if(g=g.value,qe(g,d))return g;f=r(e);for(g=f.next();!g.done;g=f.next()){var h=g=g.value,k=d;h=M(h);k=M(k);h=h.split("-");k=k.split("-");if(2==h.length&&2==k.length&&h[0]==k[0])return g}e=r(e);for(g=e.next();!g.done;g=e.next())if(f=g.value,qe(d,f))return f;return null}
  var re=new Map([["aar","aa"],["abk","ab"],["afr","af"],["aka","ak"],["alb","sq"],["amh","am"],["ara","ar"],["arg","an"],["arm","hy"],["asm","as"],["ava","av"],["ave","ae"],["aym","ay"],["aze","az"],["bak","ba"],["bam","bm"],["baq","eu"],["bel","be"],["ben","bn"],["bih","bh"],["bis","bi"],["bod","bo"],["bos","bs"],["bre","br"],["bul","bg"],["bur","my"],["cat","ca"],["ces","cs"],["cha","ch"],["che","ce"],["chi","zh"],["chu","cu"],["chv","cv"],["cor","kw"],["cos","co"],["cre","cr"],["cym","cy"],["cze",
  "cs"],["dan","da"],["deu","de"],["div","dv"],["dut","nl"],["dzo","dz"],["ell","el"],["eng","en"],["epo","eo"],["est","et"],["eus","eu"],["ewe","ee"],["fao","fo"],["fas","fa"],["fij","fj"],["fin","fi"],["fra","fr"],["fre","fr"],["fry","fy"],["ful","ff"],["geo","ka"],["ger","de"],["gla","gd"],["gle","ga"],["glg","gl"],["glv","gv"],["gre","el"],["grn","gn"],["guj","gu"],["hat","ht"],["hau","ha"],["heb","he"],["her","hz"],["hin","hi"],["hmo","ho"],["hrv","hr"],["hun","hu"],["hye","hy"],["ibo","ig"],["ice",
  "is"],["ido","io"],["iii","ii"],["iku","iu"],["ile","ie"],["ina","ia"],["ind","id"],["ipk","ik"],["isl","is"],["ita","it"],["jav","jv"],["jpn","ja"],["kal","kl"],["kan","kn"],["kas","ks"],["kat","ka"],["kau","kr"],["kaz","kk"],["khm","km"],["kik","ki"],["kin","rw"],["kir","ky"],["kom","kv"],["kon","kg"],["kor","ko"],["kua","kj"],["kur","ku"],["lao","lo"],["lat","la"],["lav","lv"],["lim","li"],["lin","ln"],["lit","lt"],["ltz","lb"],["lub","lu"],["lug","lg"],["mac","mk"],["mah","mh"],["mal","ml"],["mao",
  "mi"],["mar","mr"],["may","ms"],["mkd","mk"],["mlg","mg"],["mlt","mt"],["mon","mn"],["mri","mi"],["msa","ms"],["mya","my"],["nau","na"],["nav","nv"],["nbl","nr"],["nde","nd"],["ndo","ng"],["nep","ne"],["nld","nl"],["nno","nn"],["nob","nb"],["nor","no"],["nya","ny"],["oci","oc"],["oji","oj"],["ori","or"],["orm","om"],["oss","os"],["pan","pa"],["per","fa"],["pli","pi"],["pol","pl"],["por","pt"],["pus","ps"],["que","qu"],["roh","rm"],["ron","ro"],["rum","ro"],["run","rn"],["rus","ru"],["sag","sg"],["san",
  "sa"],["sin","si"],["slk","sk"],["slo","sk"],["slv","sl"],["sme","se"],["smo","sm"],["sna","sn"],["snd","sd"],["som","so"],["sot","st"],["spa","es"],["sqi","sq"],["srd","sc"],["srp","sr"],["ssw","ss"],["sun","su"],["swa","sw"],["swe","sv"],["tah","ty"],["tam","ta"],["tat","tt"],["tel","te"],["tgk","tg"],["tgl","tl"],["tha","th"],["tib","bo"],["tir","ti"],["ton","to"],["tsn","tn"],["tso","ts"],["tuk","tk"],["tur","tr"],["twi","tw"],["uig","ug"],["ukr","uk"],["urd","ur"],["uzb","uz"],["ven","ve"],["vie",
  "vi"],["vol","vo"],["wel","cy"],["wln","wa"],["wol","wo"],["xho","xh"],["yid","yi"],["yor","yo"],["zha","za"],["zho","zh"],["zul","zu"]]);function ue(b,c,d){function e(b,c,d){return b>=c&&b<=d}var f=b.video;return f&&f.width&&f.height&&(!e(f.width,c.minWidth,Math.min(c.maxWidth,d.width))||!e(f.height,c.minHeight,Math.min(c.maxHeight,d.height))||!e(f.width*f.height,c.minPixels,c.maxPixels))||b&&b.frameRate&&!e(b.frameRate,c.minFrameRate,c.maxFrameRate)||!e(b.bandwidth,c.minBandwidth,c.maxBandwidth)?!1:!0}
  function ve(b,c,d){var e=!1;b.forEach(function(b){var f=b.allowedByApplication;b.allowedByApplication=ue(b,c,d);f!=b.allowedByApplication&&(e=!0);});return e}function we(b,c,d,e){e.variants=e.variants.filter(function(e){if(b&&b.S&&!ld(b,e))return !1;var f=e.audio;e=e.video;return f&&!ce(f)||e&&!ce(e)||f&&c&&!xe(f,c)||e&&d&&!xe(e,d)?!1:!0});e.textStreams=e.textStreams.filter(function(b){return Xd(pc(b.mimeType,b.codecs))});}
  function xe(b,c){return b.mimeType!=c.mimeType||b.codecs.split(".")[0]!=c.codecs.split(".")[0]?!1:!0}
  function ye(b){var c=b.audio,d=b.video,e=c?c.codecs:null,f=d?d.codecs:null,g=[];f&&g.push(f);e&&g.push(e);var h=[];d&&h.push(d.mimeType);c&&h.push(c.mimeType);h=h[0]||null;var k=[];c&&k.push(c.kind);d&&k.push(d.kind);k=k[0]||null;var l=new Set;c&&c.roles.forEach(function(b){return l.add(b)});d&&d.roles.forEach(function(b){return l.add(b)});b={id:b.id,active:!1,type:"variant",bandwidth:b.bandwidth,language:b.language,label:null,kind:k,width:null,height:null,frameRate:null,pixelAspectRatio:null,mimeType:h,
  codecs:g.join(", "),audioCodec:e,videoCodec:f,primary:b.primary,roles:Array.from(l),audioRoles:null,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:null};d&&(b.videoId=d.id,b.originalVideoId=d.originalId,b.width=d.width||null,b.height=d.height||null,b.frameRate=d.frameRate||null,b.pixelAspectRatio=d.pixelAspectRatio||null,b.videoBandwidth=d.bandwidth||null);c&&(b.audioId=c.id,b.originalAudioId=
  c.originalId,b.channelsCount=c.channelsCount,b.audioSamplingRate=c.audioSamplingRate,b.audioBandwidth=c.bandwidth||null,b.label=c.label,b.audioRoles=c.roles);return b}
  function ze(b){return {id:b.id,active:!1,type:"text",bandwidth:0,language:b.language,label:b.label,kind:b.kind||null,width:null,height:null,frameRate:null,pixelAspectRatio:null,mimeType:b.mimeType,codecs:b.codecs||null,audioCodec:null,videoCodec:null,primary:b.primary,roles:b.roles,audioRoles:null,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:b.originalId}}
  function Ae(b){b.__shaka_id||(b.__shaka_id=Be++);return b.__shaka_id}var Be=0;
  function Ce(b){return {id:Ae(b),active:!1,type:"",bandwidth:0,language:M(b.language),label:b.label,kind:b.kind,width:null,height:null,frameRate:null,pixelAspectRatio:null,mimeType:null,codecs:null,audioCodec:null,videoCodec:null,primary:!1,roles:[],audioRoles:null,videoId:null,audioId:null,channelsCount:null,audioSamplingRate:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:null}}
  function De(b){return b.allowedByApplication&&b.allowedByKeySystem}function Ee(b){return b.filter(function(b){return De(b)})}
  function Fe(b,c){var d=b.filter(function(b){return b.audio&&b.audio.channelsCount}),e=new Map;d=r(d);for(var f=d.next();!f.done;f=d.next()){f=f.value;var g=f.audio.channelsCount;e.has(g)||e.set(g,[]);e.get(g).push(f);}d=Array.from(e.keys());if(0==d.length)return b;f=d.filter(function(b){return b<=c});return f.length?e.get(Math.max.apply(null,f)):e.get(Math.min.apply(null,d))}
  function Ge(b,c,d){var e=b,f=b.filter(function(b){return b.primary});f.length&&(e=f);var g=e.length?e[0].language:"";e=e.filter(function(b){return b.language==g});if(c){var h=te(M(c),b.map(function(b){return b.language}));h&&(e=b.filter(function(b){return M(b.language)==h}));}if(d){if(b=He(e,d),b.length)return b}else if(b=e.filter(function(b){return 0==b.roles.length}),b.length)return b;b=e.map(function(b){return b.roles}).reduce(td.Cc,[]);return b.length?He(e,b[0]):e}
  function He(b,c){return b.filter(function(b){return b.roles.includes(c)})}function Ie(b,c,d){for(var e=0;e<d.length;e++)if(d[e].audio==b&&d[e].video==c)return d[e];return null}function Je(b){var c=[];b.audio&&c.push(b.audio);b.video&&c.push(b.video);return c}function N(){this.h=null;this.f=!1;this.b=new Ya;this.c=[];this.i=!1;this.a=this.g=null;}B("shaka.abr.SimpleAbrManager",N);N.prototype.stop=function(){this.h=null;this.f=!1;this.c=[];this.g=null;};N.prototype.stop=N.prototype.stop;N.prototype.init=function(b){this.h=b;};N.prototype.init=N.prototype.init;
  N.prototype.chooseVariant=function(){var b=Ke(this.a.restrictions,this.c),c=this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.c.length&&!b.length&&(b=Ke(null,this.c),b=[b[0]]);for(var d=b[0]||null,e=0;e<b.length;++e){var f=b[e],g=(b[e+1]||{bandwidth:Infinity}).bandwidth/this.a.bandwidthUpgradeTarget;c>=f.bandwidth/this.a.bandwidthDowngradeTarget&&c<=g&&(d=f);}this.g=Date.now();return d};N.prototype.chooseVariant=N.prototype.chooseVariant;N.prototype.enable=function(){this.f=!0;};
  N.prototype.enable=N.prototype.enable;N.prototype.disable=function(){this.f=!1;};N.prototype.disable=N.prototype.disable;
  N.prototype.segmentDownloaded=function(b,c){var d=this.b;if(!(c<(d.a.minBytes?d.a.minBytes:16E3))){var e=8E3*c/b,f=b/1E3;d.b+=c;Wa(d.c,f,e);Wa(d.f,f,e);}if(null!=this.g&&this.f)a:{if(!this.i){d=this.b;if(!(d.b>=(d.a.minTotalBytes?d.a.minTotalBytes:128E3)))break a;this.i=!0;}else if(Date.now()-this.g<1E3*this.a.switchInterval)break a;d=this.chooseVariant();this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.h(d);}};N.prototype.segmentDownloaded=N.prototype.segmentDownloaded;
  N.prototype.getBandwidthEstimate=function(){return this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate)};N.prototype.getBandwidthEstimate=N.prototype.getBandwidthEstimate;N.prototype.setVariants=function(b){this.c=b;};N.prototype.setVariants=N.prototype.setVariants;N.prototype.configure=function(b){this.a=b;this.b&&this.b.configure(b);};N.prototype.configure=N.prototype.configure;
  function Ke(b,c){b&&(c=c.filter(function(c){return ue(c,b,{width:Infinity,height:Infinity})}));return c.sort(function(b,c){return b.bandwidth-c.bandwidth})}function Le(b,c){this.a=b;this.b=c;}Le.prototype.toString=function(){return "v"+this.a+"."+this.b};function Me(b,c){var d=new Le(2,6),e=Ne,f=e.a,g=d.b-f.b;(0<(d.a-f.a||g)?e.c:e.b)(e.a,d,b,c);}function Oe(b,c,d,e){$a([d,"has been deprecated and will be removed in",c,". We are currently at version",b,". Additional information:",e].join(" "));}function Pe(b,c,d,e){Za([d,"has been deprecated and has been removed in",c,". We are now at version",b,". Additional information:",e].join(""));}var Ne=null;var Qe="ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),Re="buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),Se=["loop","playbackRate"],Te=["pause","play"],Ue="abrstatuschanged adaptation buffering drmsessionupdate emsg error expirationupdated largegap loading manifestparsed onstatechange onstateidle streaming textchanged texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged unloading variantchanged".split(" "),
  Ve={getAssetUri:2,getAudioLanguages:2,getAudioLanguagesAndRoles:2,getBufferedInfo:2,getConfiguration:2,getExpiration:2,getPlaybackRate:2,getTextLanguages:2,getTextLanguagesAndRoles:2,getTextTracks:2,getStats:5,getVariantTracks:2,isAudioOnly:10,isBuffering:1,isInProgress:1,isLive:10,isTextTrackVisible:1,keySystem:10,seekRange:1,usingEmbeddedTextTrack:2,getLoadMode:10},We={getPlayheadTimeAsDate:1,getPresentationStartTimeAsDate:20},Xe=[["getConfiguration","configure"]],Ye=[["isTextTrackVisible","setTextTrackVisibility"]],
  Ze="addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectEmbeddedTextTrack selectTextLanguage selectTextTrack selectVariantTrack selectVariantsByLabel setTextTrackVisibility trickPlay".split(" "),$e=["attach","detach","load","unload"];
  function af(b){return JSON.stringify(b,function(b,d){if("function"!=typeof d){if(d instanceof Event||d instanceof I){var c={},f;for(f in d){var g=d[f];g&&"object"==typeof g?"detail"==f&&(c[f]=g):f in Event||(c[f]=g);}return c}if(d instanceof TimeRanges)for(c={__type__:"TimeRanges",length:d.length,start:[],end:[]},f=0;f<d.length;++f)c.start.push(d.start(f)),c.end.push(d.end(f));else c=d instanceof Uint8Array?{__type__:"Uint8Array",entries:Array.from(d)}:"number"==typeof d?isNaN(d)?"NaN":isFinite(d)?
  d:0>d?"-Infinity":"Infinity":d;return c}})}function bf(b){return JSON.parse(b,function(b,d){return "NaN"==d?NaN:"-Infinity"==d?-Infinity:"Infinity"==d?Infinity:d&&"object"==typeof d&&"TimeRanges"==d.__type__?cf(d):d&&"object"==typeof d&&"Uint8Array"==d.__type__?new Uint8Array(d.entries):d})}function cf(b){return {length:b.length,start:function(c){return b.start[c]},end:function(c){return b.end[c]}}}function df(b,c,d,e,f,g){this.S=b;this.f=new C(c);this.R=d;this.l=!1;this.F=e;this.K=f;this.C=g;this.b=this.h=!1;this.D="";this.i=null;this.m=this.Qd.bind(this);this.s=this.pf.bind(this);this.a={video:{},player:{}};this.u=0;this.c={};this.g=null;}var ef=!1,ff=null;q=df.prototype;q.destroy=function(){gf(this);ff&&hf(this);this.f&&(this.f.stop(),this.f=null);this.K=this.F=null;this.b=this.h=!1;this.s=this.m=this.g=this.c=this.a=this.i=null;return Promise.resolve()};q.ga=function(){return this.b};
  q.hd=function(){return this.D};q.init=function(){if(window.chrome&&chrome.cast&&chrome.cast.isAvailable){delete window.__onGCastApiAvailable;this.h=!0;this.f.uc();var b=new chrome.cast.SessionRequest(this.S);b=new chrome.cast.ApiConfig(b,this.Rd.bind(this),this.tf.bind(this),"origin_scoped");chrome.cast.initialize(b,function(){},function(){});ef&&this.f.P(.02);(b=ff)&&b.status!=chrome.cast.SessionStatus.STOPPED?this.Rd(b):ff=null;}else window.__onGCastApiAvailable=function(b){b&&this.init();}.bind(this);};
  q.pd=function(b){this.i=b;this.b&&jf({type:"appData",appData:this.i});};q.cast=function(b){if(!this.h)return Promise.reject(new D(1,8,8E3));if(!ef)return Promise.reject(new D(1,8,8001));if(this.b)return Promise.reject(new D(1,8,8002));this.g=new F;chrome.cast.requestSession(this.ed.bind(this,b),this.Pd.bind(this));return this.g};q.Ib=function(){this.b&&(gf(this),ff&&(hf(this),ff.stop(function(){},function(){}),ff=null));};
  q.get=function(b,c){if("video"==b){if(Te.includes(c))return this.ae.bind(this,b,c)}else if("player"==b){if(We[c]&&!this.get("player","isLive")())return function(){};if(Ze.includes(c))return this.ae.bind(this,b,c);if($e.includes(c))return this.If.bind(this,b,c);if(Ve[c])return this.Yd.bind(this,b,c)}return this.Yd(b,c)};q.set=function(b,c,d){this.a[b][c]=d;jf({type:"set",targetName:b,property:c,value:d});};
  q.ed=function(b,c){ff=c;c.addUpdateListener(this.m);c.addMessageListener("urn:x-cast:com.google.shaka.v2",this.s);this.Qd();jf({type:"init",initState:b,appData:this.i});this.g.resolve();};q.Pd=function(b){var c=8003;switch(b.code){case "cancel":c=8004;break;case "timeout":c=8005;break;case "receiver_unavailable":c=8006;}this.g.reject(new D(2,8,c,b));};q.Yd=function(b,c){return this.a[b][c]};
  q.ae=function(b,c,d){for(var e=[],f=2;f<arguments.length;++f)e[f-2]=arguments[f];jf({type:"call",targetName:b,methodName:c,args:e});};q.If=function(b,c,d){for(var e=[],f=2;f<arguments.length;++f)e[f-2]=arguments[f];f=new F;var g=this.u.toString();this.u++;this.c[g]=f;jf({type:"asyncCall",targetName:b,methodName:c,args:e,id:g});return f};q.Rd=function(b){var c=this.C();this.g=new F;this.l=!0;this.ed(c,b);};q.tf=function(b){ef="available"==b;this.f.uc();};
  function hf(b){var c=ff;c.removeUpdateListener(b.m);c.removeMessageListener("urn:x-cast:com.google.shaka.v2",b.s);}q.Qd=function(){var b=ff?"connected"==ff.status:!1;if(this.b&&!b){this.K();for(var c in this.a)this.a[c]={};gf(this);}this.D=(this.b=b)?ff.receiver.friendlyName:"";this.f.uc();};function gf(b){for(var c in b.c){var d=b.c[c];delete b.c[c];d.reject(new D(1,7,7E3));}}
  q.pf=function(b,c){var d=bf(c);switch(d.type){case "event":var e=d.event;this.F(d.targetName,new I(e.type,e));break;case "update":e=d.update;for(var f in e){d=this.a[f]||{};for(var g in e[f])d[g]=e[f][g];}this.l&&(this.R(),this.l=!1);break;case "asyncComplete":if(f=d.id,d=d.error,g=this.c[f],delete this.c[f],g)if(d){f=new D(d.severity,d.category,d.code);for(e in d)f[e]=d[e];g.reject(f);}else g.resolve();}};function jf(b){b=af(b);ff.sendMessage("urn:x-cast:com.google.shaka.v2",b,function(){},ab);}function O(b,c,d){var e=this;Jb.call(this);this.c=b;this.b=c;this.i=this.g=this.f=this.l=this.h=null;if(this.m=d)this.a=new df(d,function(){return kf(e)},function(){return lf(e)},function(b,c){return mf(e,b,c)},function(){return nf(e)},function(){return of(e)});pf(this);}Ta(O,Jb);B("shaka.cast.CastProxy",O);
  O.prototype.destroy=function(b){b&&this.a&&this.a.Ib();this.i&&(this.i.release(),this.i=null);b=[];this.b&&(b.push(this.b.destroy()),this.b=null);this.a&&(b.push(this.a.destroy()),this.a=null);this.l=this.h=this.c=null;return Promise.all(b)};O.prototype.destroy=O.prototype.destroy;O.prototype.bf=function(){return this.h};O.prototype.getVideo=O.prototype.bf;O.prototype.Ve=function(){return this.l};O.prototype.getPlayer=O.prototype.Ve;O.prototype.ue=function(){return this.a?this.a.h&&ef:!1};
  O.prototype.canCast=O.prototype.ue;O.prototype.ga=function(){return this.a?this.a.ga():!1};O.prototype.isCasting=O.prototype.ga;O.prototype.hd=function(){return this.a?this.a.hd():""};O.prototype.receiverName=O.prototype.hd;O.prototype.cast=function(){if(!this.a)throw new D(1,8,8007);var b=of(this);return this.a.cast(b).then(function(){if(this.b)return this.b.xd()}.bind(this))};O.prototype.cast=O.prototype.cast;O.prototype.pd=function(b){this.a&&this.a.pd(b);};O.prototype.setAppData=O.prototype.pd;
  O.prototype.eg=function(){if(this.a){var b=this.a;if(b.b){var c=b.C();chrome.cast.requestSession(b.ed.bind(b,c),b.Pd.bind(b));}}};O.prototype.suggestDisconnect=O.prototype.eg;
  O.prototype.xe=function(b){var c=this;return t(function e(){return A(e,function(e){switch(e.j){case 1:if(b==c.m)return e["return"]();c.m=b;if(!c.a){e.A(2);break}c.a.Ib();return u(e,c.a.destroy(),3);case 3:c.a=null;case 2:c.a=new df(b,function(){return kf(c)},function(){return lf(c)},function(b,e){return mf(c,b,e)},function(){return nf(c)},function(){return of(c)}),c.a.init(),w(e);}})})};O.prototype.changeReceiverId=O.prototype.xe;O.prototype.Ib=function(){this.a&&this.a.Ib();};
  O.prototype.forceDisconnect=O.prototype.Ib;function pf(b){b.a&&b.a.init();b.i=new K;Qe.forEach(function(b){this.i.w(this.c,b,this.ng.bind(this));}.bind(b));Ue.forEach(function(b){this.i.w(this.b,b,this.Cf.bind(this));}.bind(b));b.h={};for(var c in b.c)Object.defineProperty(b.h,c,{configurable:!1,enumerable:!0,get:b.mg.bind(b,c),set:b.og.bind(b,c)});b.l={};for(var d in b.b)Object.defineProperty(b.l,d,{configurable:!1,enumerable:!0,get:b.Xd.bind(b,d)});b.f=new Jb;b.f.Yb=b.h;b.g=new Jb;b.g.Yb=b.l;}
  function of(b){var c={video:{},player:{},playerAfterLoad:{},manifest:b.b.ec(),startTime:null};b.c.pause();Se.forEach(function(b){c.video[b]=this.c[b];}.bind(b));b.c.ended||(c.startTime=b.c.currentTime);Xe.forEach(function(b){var d=b[1];b=this.b[b[0]]();c.player[d]=b;}.bind(b));Ye.forEach(function(b){var d=b[1];b=this.b[b[0]]();c.playerAfterLoad[d]=b;}.bind(b));return c}function kf(b){b.dispatchEvent(new I("caststatuschanged"));}function lf(b){b.f.dispatchEvent(new I(b.h.paused?"pause":"play"));}
  function nf(b){Xe.forEach(function(b){var c=b[1];b=this.a.get("player",b[0])();this.b[c](b);}.bind(b));var c=b.a.get("player","getAssetUri")(),d=b.a.get("video","ended"),e=Promise.resolve(),f=b.c.autoplay,g=null;d||(g=b.a.get("video","currentTime"));c&&(b.c.autoplay=!1,e=b.b.load(c,g));var h={};Se.forEach(function(b){h[b]=this.a.get("video",b);}.bind(b));e.then(function(){b.c&&(Se.forEach(function(b){this.c[b]=h[b];}.bind(b)),Ye.forEach(function(b){var c=b[1];b=this.a.get("player",b[0])();this.b[c](b);}.bind(b)),
  b.c.autoplay=f,c&&b.c.play());},function(c){b.b.dispatchEvent(new I("error",{detail:c}));});}q=O.prototype;q.mg=function(b){if("addEventListener"==b)return this.f.addEventListener.bind(this.f);if("removeEventListener"==b)return this.f.removeEventListener.bind(this.f);if(this.a&&this.a.ga()&&0==Object.keys(this.a.a.video).length){var c=this.c[b];if("function"!=typeof c)return c}return this.a&&this.a.ga()?this.a.get("video",b):(b=this.c[b],"function"==typeof b&&(b=b.bind(this.c)),b)};
  q.og=function(b,c){this.a&&this.a.ga()?this.a.set("video",b,c):this.c[b]=c;};q.ng=function(b){this.a&&this.a.ga()||this.f.dispatchEvent(new I(b.type,b));};
  q.Xd=function(b){if("addEventListener"==b)return this.g.addEventListener.bind(this.g);if("removeEventListener"==b)return this.g.removeEventListener.bind(this.g);if("getMediaElement"==b)return function(){return this.h}.bind(this);if("getSharedConfiguration"==b)return this.a?this.a.get("player","getConfiguration"):this.b.getConfiguration();if("getNetworkingEngine"==b)return this.b.Kb.bind(this.b);if(this.a&&this.a.ga()){if("getManifest"==b||"drmInfo"==b)return function(){$a(b+"() does not work while casting!");
  return null};if("getManifestUri"==b)return Me("getManifestUri",'Please use "getAssetUri" instead.'),this.Xd("getAssetUri");if("attach"==b||"detach"==b)return function(){$a(b+"() does not work while casting!");return Promise.resolve()}}return this.a&&this.a.ga()&&0==Object.keys(this.a.a.video).length&&Ve[b]||!this.a||!this.a.ga()?this.b[b].bind(this.b):this.a.get("player",b)};q.Cf=function(b){this.a&&this.a.ga()||this.g.dispatchEvent(b);};
  function mf(b,c,d){b.a.ga()&&("video"==c?b.f.dispatchEvent(d):"player"==c&&b.g.dispatchEvent(d));}function qf(b,c,d,e){var f=this;Jb.call(this);this.a=b;this.b=c;this.c=new K;this.D={video:b,player:c};this.s=d||function(){};this.F=e||function(b){return b};this.u=!1;this.h=!0;this.g=0;this.m=!1;this.l=!0;this.i=this.f=null;this.C=new C(function(){rf(f);});sf(this);}Ta(qf,Jb);B("shaka.cast.CastReceiver",qf);qf.prototype.isConnected=function(){return this.u};qf.prototype.isConnected=qf.prototype.isConnected;qf.prototype.ff=function(){return this.h};qf.prototype.isIdle=qf.prototype.ff;
  qf.prototype.destroy=function(){var b=this;return t(function d(){var e,f;return A(d,function(d){switch(d.j){case 1:return b.c&&(b.c.release(),b.c=null),e=[],b.b&&(e.push(b.b.destroy()),b.b=null),b.C&&(b.C.stop(),b.C=null),b.a=null,b.D=null,b.s=null,b.u=!1,b.h=!0,b.f=null,b.i=null,u(d,Promise.all(e),2);case 2:f=cast.receiver.CastReceiverManager.getInstance(),f.stop(),w(d);}})})};qf.prototype.destroy=qf.prototype.destroy;
  function sf(b){var c=cast.receiver.CastReceiverManager.getInstance();c.onSenderConnected=b.Td.bind(b);c.onSenderDisconnected=b.Td.bind(b);c.onSystemVolumeChanged=b.Ee.bind(b);b.i=c.getCastMessageBus("urn:x-cast:com.google.cast.media");b.i.onMessage=b.jf.bind(b);b.f=c.getCastMessageBus("urn:x-cast:com.google.shaka.v2");b.f.onMessage=b.vf.bind(b);c.start();Qe.forEach(function(b){this.c.w(this.a,b,this.Zd.bind(this,"video"));}.bind(b));Ue.forEach(function(b){this.c.w(this.b,b,this.Zd.bind(this,"player"));}.bind(b));
  cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?b.b.qd(3840,2160):b.b.qd(1920,1080);b.c.w(b.a,"loadeddata",function(){this.m=!0;}.bind(b));b.c.w(b.b,"loading",function(){this.h=!1;tf(this);}.bind(b));b.c.w(b.a,"playing",function(){this.h=!1;tf(this);}.bind(b));b.c.w(b.a,"pause",function(){tf(this);}.bind(b));b.c.w(b.b,"unloading",function(){this.h=!0;tf(this);}.bind(b));b.c.w(b.a,"ended",function(){var b=this;(new C(function(){b.a&&b.a.ended&&
  (b.h=!0,tf(b));})).P(5);}.bind(b));}q=qf.prototype;q.Td=function(){this.g=0;this.l=!0;this.u=0!=cast.receiver.CastReceiverManager.getInstance().getSenders().length;tf(this);};function tf(b){Promise.resolve().then(function(){this.b&&(this.dispatchEvent(new I("caststatuschanged")),uf(this)||vf(this,0));}.bind(b));}
  function wf(b,c,d){for(var e in c.player)b.b[e](c.player[e]);b.s(d);d=Promise.resolve();var f=b.a.autoplay;c.manifest&&(b.a.autoplay=!1,d=b.b.load(c.manifest,c.startTime));d.then(function(){if(b.b){for(var d in c.video)b.a[d]=c.video[d];for(var e in c.playerAfterLoad)b.b[e](c.playerAfterLoad[e]);b.a.autoplay=f;c.manifest&&(b.a.play(),vf(b,0));}},function(c){b.b.dispatchEvent(new I("error",{detail:c}));});}q.Zd=function(b,c){this.b&&(rf(this),xf(this,{type:"event",targetName:b,event:c},this.f));};
  function rf(b){b.C.P(.5);var c={video:{},player:{}};Re.forEach(function(b){c.video[b]=this.a[b];}.bind(b));if(b.b.V())for(var d in We)0==b.g%We[d]&&(c.player[d]=b.b[d]());for(var e in Ve)0==b.g%Ve[e]&&(c.player[e]=b.b[e]());if(d=cast.receiver.CastReceiverManager.getInstance().getSystemVolume())c.video.volume=d.level,c.video.muted=d.muted;b.m&&(b.g+=1);xf(b,{type:"update",update:c},b.f);uf(b);}function uf(b){return b.l&&(b.a.duration||b.b.V())?(yf(b),b.l=!1,!0):!1}
  function yf(b){var c={contentId:b.b.ec(),streamType:b.b.V()?"LIVE":"BUFFERED",duration:b.a.duration,contentType:""};vf(b,0,c);}q.Ee=function(){var b=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();b&&xf(this,{type:"update",update:{video:{volume:b.level,muted:b.muted}}},this.f);xf(this,{type:"event",targetName:"video",event:{type:"volumechange"}},this.f);};
  q.vf=function(b){var c=bf(b.data);switch(c.type){case "init":this.g=0;this.m=!1;this.l=!0;wf(this,c.initState,c.appData);rf(this);break;case "appData":this.s(c.appData);break;case "set":var d=c.targetName,e=c.property;c=c.value;if("video"==d){var f=cast.receiver.CastReceiverManager.getInstance();if("volume"==e){f.setSystemVolumeLevel(c);break}else if("muted"==e){f.setSystemVolumeMuted(c);break}}this.D[d][e]=c;break;case "call":d=this.D[c.targetName];d[c.methodName].apply(d,c.args);break;case "asyncCall":d=
  c.targetName;e=c.methodName;"player"==d&&"load"==e&&(this.g=0,this.m=!1);f=c.id;b=b.senderId;var g=this.D[d];c=g[e].apply(g,c.args);"player"==d&&"load"==e&&(c=c.then(function(){this.l=!0;}.bind(this)));c.then(this.de.bind(this,b,f,null),this.de.bind(this,b,f));}};
  q.jf=function(b){var c=bf(b.data);switch(c.type){case "PLAY":this.a.play();vf(this,0);break;case "PAUSE":this.a.pause();vf(this,0);break;case "SEEK":b=c.currentTime;var d=c.resumeState;null!=b&&(this.a.currentTime=Number(b));d&&"PLAYBACK_START"==d?(this.a.play(),vf(this,0)):d&&"PLAYBACK_PAUSE"==d&&(this.a.pause(),vf(this,0));break;case "STOP":this.b.xd().then(function(){this.b&&vf(this,0);}.bind(this));break;case "GET_STATUS":vf(this,Number(c.requestId));break;case "VOLUME":d=c.volume;b=d.level;d=
  d.muted;var e=this.a.volume,f=this.a.muted;null!=b&&(this.a.volume=Number(b));null!=d&&(this.a.muted=d);e==this.a.volume&&f==this.a.muted||vf(this,0);break;case "LOAD":this.g=0;this.l=this.m=!1;b=c.media;d=c.currentTime;e=this.F(b.contentId);f=c.autoplay||!0;this.s(b.customData);f&&(this.a.autoplay=!0);this.b.load(e,d).then(function(){this.b&&yf(this);}.bind(this))["catch"](function(b){var d="LOAD_FAILED";7==b.category&&7E3==b.code&&(d="LOAD_CANCELLED");xf(this,{requestId:Number(c.requestId),type:d},
  this.i);}.bind(this));break;default:xf(this,{requestId:Number(c.requestId),type:"INVALID_REQUEST",reason:"INVALID_COMMAND"},this.i);}};q.de=function(b,c,d){this.b&&xf(this,{type:"asyncComplete",id:c,error:d},this.f,b);};function xf(b,c,d,e){b.u&&(b=af(c),e?d.getCastChannel(e).send(b):d.broadcast(b));}
  function vf(b,c,d){var e=b.a.playbackRate;var f=zf;f=b.h?f.IDLE:b.b.Tc()?f.le:b.a.paused?f.ne:f.oe;e={mediaSessionId:0,playbackRate:e,playerState:f,currentTime:b.a.currentTime,supportedMediaCommands:15,volume:{level:b.a.volume,muted:b.a.muted}};d&&(e.media=d);xf(b,{requestId:c,type:"MEDIA_STATUS",status:[e]},b.i);}var zf={IDLE:"IDLE",oe:"PLAYING",le:"BUFFERING",ne:"PAUSED"};function P(b,c){this.J=b;this.b=c==Af;this.a=0;}B("shaka.util.DataViewReader",P);var Af=1;P.Endianness={qg:0,sg:Af};P.prototype.ua=function(){return this.a<this.J.byteLength};P.prototype.hasMoreData=P.prototype.ua;P.prototype.ca=function(){return this.a};P.prototype.getPosition=P.prototype.ca;P.prototype.Le=function(){return this.J.byteLength};P.prototype.getLength=P.prototype.Le;P.prototype.la=function(){try{var b=this.J.getUint8(this.a);this.a+=1;return b}catch(c){Bf();}};P.prototype.readUint8=P.prototype.la;
  P.prototype.Rb=function(){try{var b=this.J.getUint16(this.a,this.b);this.a+=2;return b}catch(c){Bf();}};P.prototype.readUint16=P.prototype.Rb;P.prototype.G=function(){try{var b=this.J.getUint32(this.a,this.b);this.a+=4;return b}catch(c){Bf();}};P.prototype.readUint32=P.prototype.G;P.prototype.$d=function(){try{var b=this.J.getInt32(this.a,this.b);this.a+=4;return b}catch(c){Bf();}};P.prototype.readInt32=P.prototype.$d;
  P.prototype.Ab=function(){try{if(this.b){var b=this.J.getUint32(this.a,!0);var c=this.J.getUint32(this.a+4,!0);}else c=this.J.getUint32(this.a,!1),b=this.J.getUint32(this.a+4,!1);}catch(d){Bf();}if(2097151<c)throw new D(2,3,3001);this.a+=8;return c*Math.pow(2,32)+b};P.prototype.readUint64=P.prototype.Ab;P.prototype.Za=function(b){this.a+b>this.J.byteLength&&Bf();var c=new Uint8Array(this.J.buffer,this.J.byteOffset+this.a,b);this.a+=b;return c};P.prototype.readBytes=P.prototype.Za;
  P.prototype.M=function(b){this.a+b>this.J.byteLength&&Bf();this.a+=b;};P.prototype.skip=P.prototype.M;P.prototype.be=function(b){this.a<b&&Bf();this.a-=b;};P.prototype.rewind=P.prototype.be;P.prototype.seek=function(b){(0>b||b>this.J.byteLength)&&Bf();this.a=b;};P.prototype.seek=P.prototype.seek;P.prototype.gd=function(){for(var b=this.a;this.ua()&&0!=this.J.getUint8(this.a);)this.a+=1;b=new Uint8Array(this.J.buffer,this.J.byteOffset+b,this.a-b);this.a+=1;return Ac(b)};
  P.prototype.readTerminatedString=P.prototype.gd;function Bf(){throw new D(2,3,3E3);}function Q(){this.c=[];this.b=[];this.a=!1;}B("shaka.util.Mp4Parser",Q);Q.prototype.H=function(b,c){var d=Cf(b);this.c[d]=0;this.b[d]=c;return this};Q.prototype.box=Q.prototype.H;Q.prototype.fa=function(b,c){var d=Cf(b);this.c[d]=1;this.b[d]=c;return this};Q.prototype.fullBox=Q.prototype.fa;Q.prototype.stop=function(){this.a=!0;};Q.prototype.stop=Q.prototype.stop;
  Q.prototype.parse=function(b,c){var d=new Uint8Array(b);d=new P(new DataView(d.buffer,d.byteOffset,d.byteLength),0);for(this.a=!1;d.ua()&&!this.a;)this.oc(0,d,c);};Q.prototype.parse=Q.prototype.parse;
  Q.prototype.oc=function(b,c,d){var e=c.ca(),f=c.G(),g=c.G();switch(f){case 0:f=c.J.byteLength-e;break;case 1:f=c.Ab();}var h=this.b[g];if(h){var k=null,l=null;1==this.c[g]&&(l=c.G(),k=l>>>24,l&=16777215);g=e+f;d&&g>c.J.byteLength&&(g=c.J.byteLength);g-=c.ca();c=0<g?c.Za(g):new Uint8Array(0);c=new P(new DataView(c.buffer,c.byteOffset,c.byteLength),0);h({parser:this,partialOkay:d||!1,version:k,flags:l,reader:c,size:f,start:e+b});}else c.M(Math.min(e+f-c.ca(),c.J.byteLength-c.ca()));};
  Q.prototype.parseNext=Q.prototype.oc;function Df(b){for(var c=null!=b.flags?12:8;b.reader.ua()&&!b.parser.a;)b.parser.oc(b.start+c,b.reader,b.partialOkay);}Q.children=Df;function Ef(b){for(var c=null!=b.flags?12:8,d=b.reader.G();0<d&&!b.parser.a;--d)b.parser.oc(b.start+c,b.reader,b.partialOkay);}Q.sampleDescription=Ef;function Ff(b){return function(c){b(c.reader.Za(c.reader.J.byteLength-c.reader.ca()));}}Q.allData=Ff;function Cf(b){for(var c=0,d=0;d<b.length;d++)c=c<<8|b.charCodeAt(d);return c}
  function Gf(b){return String.fromCharCode(b>>24&255,b>>16&255,b>>8&255,b&255)}Q.typeToString=Gf;function Hf(b){var c=this;this.b=[];this.a=[];this.data=[];(new Q).H("moov",Df).fa("pssh",function(b){if(!(1<b.version)){var d=b.reader.J;d=new Uint8Array(d.buffer,d.byteOffset-12,b.size);c.data.push(d);c.b.push(L.wc(b.reader.Za(16)));if(0<b.version){d=b.reader.G();for(var f=0;f<d;++f){var g=L.wc(b.reader.Za(16));c.a.push(g);}}}}).parse(b);}
  function If(b){if(!b)return b;var c=new Hf(b);if(1>=c.data.length)return b;b=[];var d={};c=r(c.data);for(var e=c.next();!e.done;d={hc:d.hc},e=c.next())d.hc=e.value,b.some(function(b){return function(c){return L.za(c,b.hc)}}(d))||b.push(d.hc);return L.concat.apply(L,Ma(b))}(new Map).set("org.w3.clearkey","1077efecc0b24d02ace33c1e52e2fb4b").set("com.widevine.alpha","edef8ba979d64acea3c827dcd51d21ed").set("com.microsoft.playready","9a04f07998404286ab92e65be0885f95").set("com.adobe.primetime","f239e769efa348509c16a903c6932efb");var R={dc:function(b,c){var d=R.O(b,c);return 1!=d.length?null:d[0]},Kc:function(b,c,d){b=R.Dd(b,c,d);return 1!=b.length?null:b[0]},O:function(b,c){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&b.tagName==c})},Dd:function(b,c,d){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&b.localName==d&&b.namespaceURI==c})},getAttributeNS:function(b,c,d){return b.hasAttributeNS(c,d)?b.getAttributeNS(c,d):null},fc:function(b){return Array.prototype.every.call(b.childNodes,
  function(b){return b.nodeType==Node.TEXT_NODE||b.nodeType==Node.CDATA_SECTION_NODE})?b.textContent.trim():null},I:function(b,c,d,e){e=void 0===e?null:e;var f=null;b=b.getAttribute(c);null!=b&&(f=d(b));return null==f?e:f},zf:function(b){if(!b)return null;/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(b)&&(b+="Z");b=Date.parse(b);return isNaN(b)?null:Math.floor(b/1E3)},Ea:function(b){if(!b)return null;b=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(b);
  if(!b)return null;b=31536E3*Number(b[1]||null)+2592E3*Number(b[2]||null)+86400*Number(b[3]||null)+3600*Number(b[4]||null)+60*Number(b[5]||null)+Number(b[6]||null);return isFinite(b)?b:null},qc:function(b){var c=/([0-9]+)-([0-9]+)/.exec(b);if(!c)return null;b=Number(c[1]);if(!isFinite(b))return null;c=Number(c[2]);return isFinite(c)?{start:b,end:c}:null},parseInt:function(b){b=Number(b);return 0===b%1?b:null},pc:function(b){b=Number(b);return 0===b%1&&0<b?b:null},xb:function(b){b=Number(b);return 0===
  b%1&&0<=b?b:null},parseFloat:function(b){b=Number(b);return isNaN(b)?null:b},Ce:function(b){var c;b=(c=b.match(/^(\d+)\/(\d+)$/))?Number(c[1])/Number(c[2]):Number(b);return isNaN(b)?null:b},Wd:function(b,c){var d=new DOMParser;try{var e=d.parseFromString(b,"text/xml");}catch(g){}if(e&&e.documentElement.tagName==c)var f=e.documentElement;return f&&0<f.getElementsByTagName("parsererror").length?null:f},Vd:function(b,c){try{var d=Ac(b);return R.Wd(d,c)}catch(e){}}};var Jf=(new Map).set("urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b","org.w3.clearkey").set("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed","com.widevine.alpha").set("urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95","com.microsoft.playready").set("urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb","com.adobe.primetime");
  function Kf(b,c,d){var e=Lf(b),f=null;b=[];var g=[],h=new Set(e.map(function(b){return b.keyId}));h["delete"](null);if(1<h.size)throw new D(2,4,4010);d||(g=e.filter(function(b){return "urn:mpeg:dash:mp4protection:2011"==b.ce?(f=b.init||f,!1):!0}),g.length&&(b=Mf(f,c,g),0==b.length&&(b=[xd("",f)])));if(e.length&&(d||!g.length))for(b=[],c=r(Jf.values()),d=c.next();!d.done;d=c.next())d=d.value,"org.w3.clearkey"!=d&&b.push(xd(d,f));if(h=Array.from(h)[0]||null)for(c=r(b),d=c.next();!d.done;d=c.next())for(d=
  r(d.value.initData),e=d.next();!e.done;e=d.next())e.value.keyId=h;return {Bd:h,ug:f,drmInfos:b,Ed:!0}}function Nf(b,c,d,e){var f=Kf(b,c,e);if(d.Ed){b=1==d.drmInfos.length&&!d.drmInfos[0].keySystem;c=0==f.drmInfos.length;if(0==d.drmInfos.length||b&&!c)d.drmInfos=f.drmInfos;d.Ed=!1;}else if(0<f.drmInfos.length&&(d.drmInfos=d.drmInfos.filter(function(b){return f.drmInfos.some(function(c){return c.keySystem==b.keySystem})}),0==d.drmInfos.length))throw new D(2,4,4008);return f.Bd||d.Bd}
  function Of(b){var c=0,d=(new DataView(b)).getUint32(c,!0);if(d!==b.byteLength)return [];c+=6;d=[];for(var e=new DataView(b);c<b.byteLength-1;){var f=e.getUint16(c,!0);c+=2;var g=e.getUint16(c,!0);c+=2;var h=new Uint8Array(b,c,g);d.push({type:f,value:h});c+=g;}return d}function Pf(b){return (b=b.querySelector("DATA > LA_URL"))?b.textContent:""}
  function Mf(b,c,d){var e=[];d=r(d);for(var f=d.next();!f.done;f=d.next()){f=f.value;var g=Jf.get(f.ce);if(g){var h;if(h=R.Kc(f.node,"urn:microsoft:playready","pro")){h=L.Ba(h.textContent);var k=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]),l=h.length,m=k.length+16+l,n=new ArrayBuffer(m),p=new Uint8Array(n);n=new DataView(n);var v=0;n.setUint32(v,m);v+=4;n.setUint32(v,1886614376);v+=4;n.setUint32(v,0);v+=4;p.set(k,v);v+=k.length;n.setUint32(v,l);v+=4;p.set(h,v);h=[{initData:p,
  initDataType:"cenc",keyId:f.keyId}];}else h=null;e.push(xd(g,f.init||b||h));}else for(f=c(f.node)||[],f=r(f),g=f.next();!g.done;g=f.next())e.push(g.value);}return e}
  (new Map).set("com.widevine.alpha",function(b){return (b=R.Kc(b.node,"urn:microsoft","laurl"))?b.getAttribute("licenseUrl")||"":""}).set("com.microsoft.playready",function(b){b=R.Kc(b.node,"urn:microsoft:playready","pro");if(!b)return "";b=L.Ba(b.textContent);b=Of(b.buffer).filter(function(b){return 1===b.type})[0];if(!b)return "";b=ic(b.value,!0);return (b=R.Wd(b,"WRMHEADER"))?Pf(b):""});function Lf(b){var c=[];b=r(b);for(var d=b.next();!d.done;d=b.next())(d=Qf(d.value))&&c.push(d);return c}
  function Qf(b){var c=b.getAttribute("schemeIdUri"),d=R.getAttributeNS(b,"urn:mpeg:cenc:2013","default_KID"),e=R.Dd(b,"urn:mpeg:cenc:2013","pssh").map(R.fc);if(!c)return null;c=c.toLowerCase();if(d&&(d=d.replace(/-/g,"").toLowerCase(),d.includes(" ")))throw new D(2,4,4009);var f=[];try{f=e.map(function(b){return {initDataType:"cenc",initData:L.Ba(b),keyId:null}});}catch(g){throw new D(2,4,4007);}return {node:b,ce:c,keyId:d,init:0<f.length?f:null}}function Rf(b,c,d,e,f){var g={RepresentationID:c,Number:d,Bandwidth:e,Time:f};return b.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,function(b,c,d,e){if("$$"==b)return "$";var f=g[c];if(null==f)return b;"RepresentationID"==c&&d&&(d=void 0);"Time"==c&&(f=Math.round(f));switch(e){case void 0:case "d":case "i":case "u":b=f.toString();break;case "o":b=f.toString(8);break;case "x":b=f.toString(16);break;case "X":b=f.toString(16).toUpperCase();break;default:b=f.toString();}d=
  window.parseInt(d,10)||1;return Array(Math.max(0,d-b.length)+1).join("0")+b})}
  function Sf(b,c){var d=Tf(b,c,"timescale"),e=1;d&&(e=R.pc(d)||1);d=Tf(b,c,"duration");(d=R.pc(d||""))&&(d/=e);var f=Tf(b,c,"startNumber"),g=Number(Tf(b,c,"presentationTimeOffset"))||0,h=R.xb(f||"");if(null==f||null==h)h=1;var k=Uf(b,c,"SegmentTimeline");f=null;if(k){f=e;var l=b.T.duration||Infinity;k=R.O(k,"S");for(var m=[],n=0,p=0;p<k.length;++p){var v=k[p],x=R.I(v,"t",R.xb),z=R.I(v,"d",R.xb);v=R.I(v,"r",R.parseInt);null!=x&&(x-=g);if(!z)break;x=null!=x?x:n;v=v||0;if(0>v)if(p+1<k.length){v=R.I(k[p+
  1],"t",R.xb);if(null==v)break;else if(x>=v)break;v=Math.ceil((v-x)/z)-1;}else{if(Infinity==l)break;else if(x/f>=l)break;v=Math.ceil((l*f-x)/z)-1;}0<m.length&&x!=n&&(m[m.length-1].end=x/f);for(var y=0;y<=v;++y)n=x+z,m.push({start:x/f,end:n/f,jg:x}),x=n;}f=m;}return {timescale:e,Z:d,ab:h,ma:g/e||0,yd:g,N:f}}function Tf(b,c,d){return [c(b.B),c(b.aa),c(b.ka)].filter(td.Ia).map(function(b){return b.getAttribute(d)}).reduce(function(b,c){return b||c})}
  function Uf(b,c,d){return [c(b.B),c(b.aa),c(b.ka)].filter(td.Ia).map(function(b){return R.dc(b,d)}).reduce(function(b,c){return b||c})}
  function Vf(b,c,d,e,f,g){for(var h=R.getAttributeNS(b,"http://www.w3.org/1999/xlink","href"),k=R.getAttributeNS(b,"http://www.w3.org/1999/xlink","actuate")||"onRequest",l=0;l<b.attributes.length;l++){var m=b.attributes[l];"http://www.w3.org/1999/xlink"==m.namespaceURI&&(b.removeAttributeNS(m.namespaceURI,m.localName),--l);}if(5<=g)return Ab(new D(2,4,4028));if("onLoad"!=k)return Ab(new D(2,4,4027));var n=ud([e],[h]);return f.request(0,Ub(n,c)).U(function(e){e=R.Vd(e.data,b.tagName);if(!e)return Ab(new D(2,
  4,4001,h));for(;b.childNodes.length;)b.removeChild(b.childNodes[0]);for(;e.childNodes.length;){var k=e.childNodes[0];e.removeChild(k);b.appendChild(k);}for(k=0;k<e.attributes.length;k++){var l=e.attributes[k].nodeName,m=e.getAttribute(l);b.setAttribute(l,m);}return Wf(b,c,d,n[0],f,g+1)})}
  function Wf(b,c,d,e,f,g){g=void 0===g?0:g;if(R.getAttributeNS(b,"http://www.w3.org/1999/xlink","href")){var h=Vf(b,c,d,e,f,g);d&&(h=h.U(void 0,function(){return Wf(b,c,d,e,f,g)}));return h}h=[];for(var k=0;k<b.childNodes.length;k++){var l=b.childNodes[k];l instanceof Element&&("urn:mpeg:dash:resolve-to-zero:2013"==R.getAttributeNS(l,"http://www.w3.org/1999/xlink","href")?(b.removeChild(l),--k):"SegmentTimeline"!=l.tagName&&h.push(Wf(l,c,d,e,f,g)));}return Gb(h).U(function(){return b})}function Xf(b,c,d){this.c=b;this.b=c;this.a=d;}B("shaka.media.InitSegmentReference",Xf);Xf.prototype.Ec=function(){return this.c()};Xf.prototype.createUris=Xf.prototype.Ec;Xf.prototype.Qc=function(){return this.b};Xf.prototype.getStartByte=Xf.prototype.Qc;Xf.prototype.Pc=function(){return this.a};Xf.prototype.getEndByte=Xf.prototype.Pc;function S(b,c,d,e,f,g){this.position=b;this.startTime=c;this.endTime=d;this.c=e;this.b=f;this.a=g;}B("shaka.media.SegmentReference",S);S.prototype.ca=function(){return this.position};
  S.prototype.getPosition=S.prototype.ca;S.prototype.Rc=function(){return this.startTime};S.prototype.getStartTime=S.prototype.Rc;S.prototype.Je=function(){return this.endTime};S.prototype.getEndTime=S.prototype.Je;S.prototype.Ec=function(){return this.c()};S.prototype.createUris=S.prototype.Ec;S.prototype.Qc=function(){return this.b};S.prototype.getStartByte=S.prototype.Qc;S.prototype.Pc=function(){return this.a};S.prototype.getEndByte=S.prototype.Pc;function Yf(b,c,d,e){var f,g=(new Q).fa("sidx",function(b){f=Zf(c,e,d,b);});b&&g.parse(b);if(f)return f;throw new D(2,3,3004);}
  function Zf(b,c,d,e){var f=[];e.reader.M(4);var g=e.reader.G();if(0==g)throw new D(2,3,3005);if(0==e.version){var h=e.reader.G();var k=e.reader.G();}else h=e.reader.Ab(),k=e.reader.Ab();e.reader.M(2);var l=e.reader.Rb();b=b+e.size+k;for(k=0;k<l;k++){var m=e.reader.G(),n=(m&2147483648)>>>31;m&=2147483647;var p=e.reader.G();e.reader.M(4);if(1==n)throw new D(2,3,3006);f.push(new S(f.length,h/g-c,(h+p)/g-c,function(){return d},b,b+m-1));h+=p;b+=m;}e.parser.stop();return f}function T(b){this.a=b;}B("shaka.media.SegmentIndex",T);T.prototype.destroy=function(){this.a=null;return Promise.resolve()};T.prototype.destroy=T.prototype.destroy;T.prototype.find=function(b){for(var c=this.a.length-1;0<=c;--c){var d=this.a[c];if(b>=d.startTime&&b<d.endTime)return d.position}return this.a.length&&b<this.a[0].startTime?this.a[0].position:null};T.prototype.find=T.prototype.find;
  T.prototype.get=function(b){if(0==this.a.length)return null;b-=this.a[0].position;return 0>b||b>=this.a.length?null:this.a[b]};T.prototype.get=T.prototype.get;T.prototype.offset=function(b){for(var c=0;c<this.a.length;++c)this.a[c].startTime+=b,this.a[c].endTime+=b;};T.prototype.offset=T.prototype.offset;
  T.prototype.Yc=function(b){for(var c=[],d=0,e=0;d<this.a.length&&e<b.length;){var f=this.a[d],g=b[e];f.startTime<g.startTime?(c.push(f),d++):(f.startTime>g.startTime?0==d&&c.push(g):(.1<Math.abs(f.endTime-g.endTime)?c.push(new S(f.position,g.startTime,g.endTime,g.c,g.b,g.a)):c.push(f),d++),e++);}for(;d<this.a.length;)c.push(this.a[d++]);if(c.length)for(d=c[c.length-1].position+1;e<b.length;)f=b[e++],f=new S(d++,f.startTime,f.endTime,f.c,f.b,f.a),c.push(f);else c=b;this.a=c;};T.prototype.merge=T.prototype.Yc;
  T.prototype.Hc=function(b){for(var c=0;c<this.a.length;++c)if(this.a[c].endTime>b){this.a.splice(0,c);return}this.a=[];};T.prototype.evict=T.prototype.Hc;function $f(b,c){for(;b.a.length;)if(b.a[b.a.length-1].startTime>=c)b.a.pop();else break;for(;b.a.length;)if(0>=b.a[0].endTime)b.a.shift();else break;if(0!=b.a.length){var d=b.a[b.a.length-1];b.a[b.a.length-1]=new S(d.position,d.startTime,c,d.c,d.b,d.a);}}function ag(b){this.b=b;this.a=new P(b,0);bg||(bg=[new Uint8Array([255]),new Uint8Array([127,255]),new Uint8Array([63,255,255]),new Uint8Array([31,255,255,255]),new Uint8Array([15,255,255,255,255]),new Uint8Array([7,255,255,255,255,255]),new Uint8Array([3,255,255,255,255,255,255]),new Uint8Array([1,255,255,255,255,255,255,255])]);}var bg;ag.prototype.ua=function(){return this.a.ua()};
  function cg(b){var c=dg(b);if(7<c.length)throw new D(2,3,3002);for(var d=0,e=0;e<c.length;e++)d=256*d+c[e];c=d;d=dg(b);a:{e=L.za;for(var f=0;f<bg.length;f++)if(e(d,bg[f])){e=!0;break a}e=!1;}if(e)d=b.b.byteLength-b.a.ca();else{if(8==d.length&&d[1]&224)throw new D(2,3,3001);e=d[0]&(1<<8-d.length)-1;for(f=1;f<d.length;f++)e=256*e+d[f];d=e;}d=b.a.ca()+d<=b.b.byteLength?d:b.b.byteLength-b.a.ca();e=new DataView(b.b.buffer,b.b.byteOffset+b.a.ca(),d);b.a.M(d);return new eg(c,e)}
  function dg(b){var c=b.a.la(),d;for(d=1;8>=d&&!(c&1<<8-d);d++);if(8<d)throw new D(2,3,3002);var e=new Uint8Array(d);e[0]=c;for(c=1;c<d;c++)e[c]=b.a.la();return e}function eg(b,c){this.id=b;this.a=c;}function fg(b){if(8<b.a.byteLength)throw new D(2,3,3002);if(8==b.a.byteLength&&b.a.getUint8(0)&224)throw new D(2,3,3001);for(var c=0,d=0;d<b.a.byteLength;d++){var e=b.a.getUint8(d);c=256*c+e;}return c}function gg(){}
  gg.prototype.parse=function(b,c,d,e){var f;c=new ag(new DataView(c));if(440786851!=cg(c).id)throw new D(2,3,3008);var g=cg(c);if(408125543!=g.id)throw new D(2,3,3009);c=g.a.byteOffset;g=new ag(g.a);for(f=null;g.ua();){var h=cg(g);if(357149030==h.id){f=h;break}}if(!f)throw new D(2,3,3010);g=new ag(f.a);f=1E6;for(h=null;g.ua();){var k=cg(g);if(2807729==k.id)f=fg(k);else if(17545==k.id)if(h=k,4==h.a.byteLength)h=h.a.getFloat32(0);else if(8==h.a.byteLength)h=h.a.getFloat64(0);else throw new D(2,3,3003);
  }if(null==h)throw new D(2,3,3011);g=f/1E9;f=h*g;b=cg(new ag(new DataView(b)));if(475249515!=b.id)throw new D(2,3,3007);return hg(b,c,g,f,d,e)};function hg(b,c,d,e,f,g){function h(){return f}var k=[];b=new ag(b.a);for(var l=null,m=null;b.ua();){var n=cg(b);if(187==n.id){var p=ig(n);p&&(n=d*p.kg,p=c+p.Hf,null!=l&&k.push(new S(k.length,l-g,n-g,h,m,p-1)),l=n,m=p);}}null!=l&&k.push(new S(k.length,l-g,e-g,h,m,null));return k}
  function ig(b){var c=new ag(b.a);b=cg(c);if(179!=b.id)throw new D(2,3,3013);b=fg(b);c=cg(c);if(183!=c.id)throw new D(2,3,3012);c=new ag(c.a);for(var d=0;c.ua();){var e=cg(c);if(241==e.id){d=fg(e);break}}return {kg:b,Hf:d}}function jg(b,c){var d=Uf(b,c,"Initialization");if(!d)return null;var e=b.B.qa,f=d.getAttribute("sourceURL");f&&(e=ud(b.B.qa,[f]));f=0;var g=null;if(d=R.I(d,"range",R.qc))f=d.start,g=d.end;return new Xf(function(){return e},f,g)}
  function kg(b,c){var d=Number(Tf(b,lg,"presentationTimeOffset"))||0,e=Tf(b,lg,"timescale"),f=1;e&&(f=R.pc(e)||1);d=d/f||0;e=jg(b,lg);var g=b.B.contentType;f=b.B.mimeType.split("/")[1];if("text"!=g&&"mp4"!=f&&"webm"!=f)throw new D(2,4,4006);if("webm"==f&&!e)throw new D(2,4,4005);g=Uf(b,lg,"RepresentationIndex");var h=Tf(b,lg,"indexRange"),k=b.B.qa;h=R.qc(h||"");if(g){var l=g.getAttribute("sourceURL");l&&(k=ud(b.B.qa,[l]));h=R.I(g,"range",R.qc,h);}if(!h)throw new D(2,4,4002);f=mg(b,c,e,k,h.start,h.end,
  f,d);return {createSegmentIndex:f.createSegmentIndex,findSegmentPosition:f.findSegmentPosition,getSegmentReference:f.getSegmentReference,initSegmentReference:e,ma:d}}
  function mg(b,c,d,e,f,g,h,k){var l=b.presentationTimeline,m=!b.mb||!b.T.Vc,n=b.T.start,p=b.T.duration,v=c,x=null;return {createSegmentIndex:function(){var b=[v(e,f,g),"webm"==h?v(d.c(),d.b,d.a):null];v=null;return Promise.all(b).then(function(b){var c=b[0];b=b[1]||null;c="mp4"==h?Yf(c,f,e,k):(new gg).parse(c,b,e,k);l.ub(c,n);x=new T(c);m&&$f(x,p);})},findSegmentPosition:function(b){return x.find(b)},getSegmentReference:function(b){return x.get(b)}}}function lg(b){return b.Sb}function ng(b,c){var d=jg(b,og);var e=pg(b);var f=Sf(b,og),g=f.ab;0==g&&(g=1);var h=0;f.Z?h=f.Z*(g-1):f.N&&0<f.N.length&&(h=f.N[0].start);e={Z:f.Z,startTime:h,ab:g,ma:f.ma,N:f.N,sb:e};if(!e.Z&&!e.N&&1<e.sb.length)throw new D(2,4,4002);if(!e.Z&&!b.T.duration&&!e.N&&1==e.sb.length)throw new D(2,4,4002);if(e.N&&0==e.N.length)throw new D(2,4,4002);g=f=null;b.ka.id&&b.B.id&&(g=b.ka.id+","+b.B.id,f=c[g]);h=qg(b.T.duration,e.ab,b.B.qa,e);f?(f.Yc(h),g=b.presentationTimeline.Mb(),f.Hc(g-b.T.start)):(b.presentationTimeline.ub(h,
  b.T.start),f=new T(h),g&&b.mb&&(c[g]=f));b.mb&&b.T.Vc||$f(f,b.T.duration);return {createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:f.find.bind(f),getSegmentReference:f.get.bind(f),initSegmentReference:d,ma:e.ma}}function og(b){return b.La}
  function qg(b,c,d,e){var f=e.sb.length;e.N&&e.N.length!=e.sb.length&&(f=Math.min(e.N.length,e.sb.length));for(var g=[],h=e.startTime,k=0;k<f;k++){var l=e.sb[k],m=ud(d,[l.gf]),n=void 0;n=null!=e.Z?h+e.Z:e.N?e.N[k].end:h+b;g.push(new S(k+c,h,n,function(b){return b}.bind(null,m),l.start,l.end));h=n;}return g}
  function pg(b){return [b.B.La,b.aa.La,b.ka.La].filter(td.Ia).map(function(b){return R.O(b,"SegmentURL")}).reduce(function(b,d){return 0<b.length?b:d}).map(function(c){c.getAttribute("indexRange")&&!b.Id&&(b.Id=!0);var d=c.getAttribute("media");c=R.I(c,"mediaRange",R.qc,{start:0,end:null});return {gf:d,start:c.start,end:c.end}})}function rg(b,c,d,e){var f=sg(b);var g=Sf(b,tg);var h=Tf(b,tg,"media"),k=Tf(b,tg,"index");g={Z:g.Z,timescale:g.timescale,ab:g.ab,ma:g.ma,yd:g.yd,N:g.N,Xc:h,Ob:k};h=g.Ob?1:0;h+=g.N?1:0;h+=g.Z?1:0;if(0==h)throw new D(2,4,4002);1!=h&&(g.Ob&&(g.N=null),g.Z=null);if(!g.Ob&&!g.Xc)throw new D(2,4,4002);if(g.Ob){d=b.B.mimeType.split("/")[1];if("mp4"!=d&&"webm"!=d)throw new D(2,4,4006);if("webm"==d&&!f)throw new D(2,4,4005);e=Rf(g.Ob,b.B.id,null,b.bandwidth||null,null);e=ud(b.B.qa,[e]);b=mg(b,c,f,e,0,null,
  d,g.ma);}else g.Z?(e||(b.presentationTimeline.$c(g.Z),b.presentationTimeline.ad(b.T.start)),b=ug(b,g)):(h=c=null,b.ka.id&&b.B.id&&(h=b.ka.id+","+b.B.id,c=d[h]),k=vg(b,g),e=!b.mb||!b.T.Vc,c?(e&&$f(new T(k),b.T.duration),c.Yc(k),d=b.presentationTimeline.Mb(),c.Hc(d-b.T.start)):(b.presentationTimeline.ub(k,b.T.start),c=new T(k),h&&b.mb&&(d[h]=c)),e&&$f(c,b.T.duration),b={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:c.find.bind(c),getSegmentReference:c.get.bind(c)});return {createSegmentIndex:b.createSegmentIndex,
  findSegmentPosition:b.findSegmentPosition,getSegmentReference:b.getSegmentReference,initSegmentReference:f,ma:g.ma}}function tg(b){return b.Ub}
  function ug(b,c){var d=b.T.duration,e=c.Z,f=c.ab,g=c.timescale,h=c.Xc,k=b.bandwidth||null,l=b.B.id,m=b.B.qa;return {createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0>b||d&&b>=d?null:Math.floor(b/e)},getSegmentReference:function(b){var c=b*e,n=c+e;d&&(n=Math.min(n,d));return 0>n||d&&c>=d?null:new S(b,c,n,function(){var d=Rf(h,l,b+f,k,c*g);return ud(m,[d])},0,null)}}}
  function vg(b,c){for(var d=[],e=0;e<c.N.length;e++){var f=e+c.ab;d.push(new S(f,c.N[e].start,c.N[e].end,function(b,c,d,e,f,n){b=Rf(b,c,f,d,n);return ud(e,[b]).map(function(b){return b.toString()})}.bind(null,c.Xc,b.B.id,b.bandwidth||null,b.B.qa,f,c.N[e].jg+c.yd),0,null));}return d}function sg(b){var c=Tf(b,tg,"initialization");if(!c)return null;var d=b.B.id,e=b.bandwidth||null,f=b.B.qa;return new Xf(function(){var b=Rf(c,d,null,e,null);return ud(f,[b])},0,null)}var U={yb:{},Qb:{},kd:function(b,c){U.Qb[b]=c;}};B("shaka.media.ManifestParser.registerParserByExtension",U.kd);U.Bb=function(b,c){U.yb[b]=c;};B("shaka.media.ManifestParser.registerParserByMime",U.Bb);
  U.Ef=function(){var b={};if(tc()){for(var c in U.yb)b[c]=!0;for(var d in U.Qb)b[d]=!0;}c={mpd:"application/dash+xml",m3u8:"application/x-mpegurl",ism:"application/vnd.ms-sstr+xml"};d=r(["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"]);for(var e=d.next();!e.done;e=d.next())e=e.value,b[e]=tc()?!!U.yb[e]:uc(e);for(var f in c)b[f]=tc()?!!U.Qb[f]:uc(c[f]);return b};
  U.create=function(b,c,d,e){return t(function g(){var h,k;return A(g,function(g){switch(g.j){case 1:return xa(g,2),u(g,U.Ke(b,c,d,e),4);case 4:return h=g.o,g["return"](new h);case 2:throw k=Ca(g),k.severity=2,k;}})})};
  U.Ke=function(b,c,d,e){return t(function g(){var h,k,l,m,n;return A(g,function(g){switch(g.j){case 1:h=U;if(e&&(k=h.yb[e.toLowerCase()]))return g["return"](k);if(l=h.getExtension(b))if(m=h.Qb[l])return g["return"](m);if(e){g.A(2);break}return u(g,h.Se(b,c,d),3);case 3:if(e=g.o)if(n=U.yb[e])return g["return"](n);case 2:throw new D(2,4,4E3,b);}})})};
  U.Se=function(b,c,d){return t(function f(){var g,h,k;return A(f,function(f){switch(f.j){case 1:return g=Ub([b],d),g.method="HEAD",u(f,c.request(0,g).promise,2);case 2:return h=f.o,k=h.headers["content-type"],f["return"](k?k.toLowerCase().split(";").shift():"")}})})};U.getExtension=function(b){b=(new fb(b)).ja.split("/").pop().split(".");return 1==b.length?"":b.pop().toLowerCase()};U.isSupported=function(b,c){return tc()?c in U.yb||U.getExtension(b)in U.Qb?!0:!1:!1};function V(b,c,d){this.f=b;this.rc=c;this.h=this.g=Infinity;this.b=1;this.c=this.a=null;this.l=0;this.m=!0;this.i=0;this.s=void 0===d?!0:d;}B("shaka.media.PresentationTimeline",V);V.prototype.Y=function(){return this.g};V.prototype.getDuration=V.prototype.Y;V.prototype.Qe=function(){return this.b};V.prototype.getMaxSegmentDuration=V.prototype.Qe;V.prototype.xa=function(b){this.g=b;};V.prototype.setDuration=V.prototype.xa;V.prototype.Xe=function(){return this.f};
  V.prototype.getPresentationStartTime=V.prototype.Xe;V.prototype.ee=function(b){this.l=b;};V.prototype.setClockOffset=V.prototype.ee;V.prototype.Vb=function(b){this.m=b;};V.prototype.setStatic=V.prototype.Vb;V.prototype.sd=function(b){this.h=b;};V.prototype.setSegmentAvailabilityDuration=V.prototype.sd;V.prototype.Vf=function(b){this.rc=b;};V.prototype.setDelay=V.prototype.Vf;V.prototype.Ie=function(){return this.rc};V.prototype.getDelay=V.prototype.Ie;
  V.prototype.ub=function(b,c){if(0!=b.length){var d=b[b.length-1].endTime+c;this.ad(b[0].startTime+c);this.b=b.reduce(function(b,c){return Math.max(b,c.endTime-c.startTime)},this.b);this.c=Math.max(this.c,d);null!=this.f&&this.s&&(this.f=(Date.now()+this.l)/1E3-this.c-this.b);}};V.prototype.notifySegments=V.prototype.ub;V.prototype.ad=function(b){this.a=null==this.a?b:2.1<b-this.a?Math.min(this.a,b):Math.max(this.a,b);this.a=Math.ceil(this.a*Math.pow(10,4))/Math.pow(10,4);};
  V.prototype.notifyMinSegmentStartTime=V.prototype.ad;V.prototype.$c=function(b){this.b=Math.max(this.b,b);};V.prototype.notifyMaxSegmentDuration=V.prototype.$c;V.prototype.offset=function(b){null!=this.a&&(this.a+=b);null!=this.c&&(this.c+=b);};V.prototype.offset=V.prototype.offset;V.prototype.V=function(){return Infinity==this.g&&!this.m};V.prototype.isLive=V.prototype.V;V.prototype.Xa=function(){return Infinity!=this.g&&!this.m};V.prototype.isInProgress=V.prototype.Xa;
  V.prototype.Mb=function(){if(Infinity==this.h)return this.i;var b=this.pb()-this.h;return Math.max(this.i,b)};V.prototype.getSegmentAvailabilityStart=V.prototype.Mb;V.prototype.fe=function(b){this.i=b;};V.prototype.setUserSeekStart=V.prototype.fe;V.prototype.pb=function(){return this.V()||this.Xa()?Math.min(Math.max(0,(Date.now()+this.l)/1E3-this.b-this.f),this.g):this.g};V.prototype.getSegmentAvailabilityEnd=V.prototype.pb;
  V.prototype.Lb=function(b){var c=Math.max(this.a,this.i);if(Infinity==this.h)return c;var d=this.pb()-this.h;b=Math.min(d+b,this.Ca());return Math.max(c,b)};V.prototype.getSafeSeekRangeStart=V.prototype.Lb;V.prototype.ob=function(){return this.Lb(0)};V.prototype.getSeekRangeStart=V.prototype.ob;V.prototype.Ca=function(){var b=this.V()||this.Xa()?this.rc:0;return Math.max(0,this.pb()-b)};V.prototype.getSeekRangeEnd=V.prototype.Ca;V.prototype.je=function(){return null==this.f||null!=this.c?!1:!0};
  V.prototype.usingPresentationStartTime=V.prototype.je;function wg(b,c,d,e){b=Ub(b,e);if(0!=c||null!=d)b.headers.Range=d?"bytes="+c+"-"+d:"bytes="+c+"-";return b}function xg(){var b=this;this.b=this.a=null;this.f=[];this.c=null;this.l=[];this.h=1;this.m={};this.s=0;this.u=new Va(5);this.i=new C(function(){yg(b);});this.g=new Pb;}B("shaka.dash.DashParser",xg);q=xg.prototype;q.configure=function(b){this.a=b;};q.start=function(b,c){var d=this;return t(function f(){var g;return A(f,function(f){switch(f.j){case 1:return d.f=[b],d.b=c,u(f,zg(d),2);case 2:g=f.o;d.b&&Ag(d,g);if(!d.b)throw new D(2,7,7001);return f["return"](d.c)}})})};
  q.stop=function(){this.a=this.b=null;this.f=[];this.c=null;this.l=[];this.m={};null!=this.i&&(this.i.stop(),this.i=null);return this.g.destroy()};q.update=function(){zg(this)["catch"](function(b){if(this.b)this.b.onError(b);}.bind(this));};q.onExpirationUpdated=function(){};
  function zg(b){var c=Date.now(),d=b.b.networkingEngine.request(0,Ub(b.f,b.a.retryParameters));Qb(b.g,d);return d.promise.then(function(c){if(b.b)return c.uri&&!b.f.includes(c.uri)&&b.f.unshift(c.uri),Bg(b,c.data,c.uri)}).then(function(){var d=(Date.now()-c)/1E3;Wa(b.u,1,d);return d})}function Bg(b,c,d){c=R.Vd(c,"MPD");if(!c)throw new D(2,4,4001,d);c=Wf(c,b.a.retryParameters,b.a.dash.xlinkFailGracefully,d,b.b.networkingEngine);Qb(b.g,c);return c.promise.then(function(c){return Cg(b,c,d)})}
  function Cg(b,c,d){return t(function f(){var g,h,k,l,m,n,p,v,x,z,y,G,E,Z,aa,fa,qb,Ua,W,oa,ha,Ja,Aa,Ba,rb,cb,sb;return A(f,function(f){switch(f.j){case 1:l=td;m=R;n=[d];p=m.O(c,"Location").map(m.fc).filter(l.Ia);0<p.length&&(v=ud(n,p),n=b.f=v);x=m.O(c,"BaseURL").map(m.fc);z=ud(n,x);y=b.a.dash.ignoreMinBufferTime;G=0;y||(G=m.I(c,"minBufferTime",m.Ea));b.s=m.I(c,"minimumUpdatePeriod",m.Ea,-1);E=m.I(c,"availabilityStartTime",m.zf);Z=m.I(c,"timeShiftBufferDepth",m.Ea);aa=m.I(c,"maxSegmentDuration",m.Ea);
  fa=c.getAttribute("type")||"static";qb=b.a.dash.ignoreSuggestedPresentationDelay;Ua=null;qb||(Ua=m.I(c,"suggestedPresentationDelay",m.Ea));b.c?W=b.c.presentationTimeline:(oa=Math.max(b.a.dash.defaultPresentationDelay,1.5*G),ha=null!=Ua?Ua:oa,W=new V(E,ha,b.a.dash.autoCorrectDrift));Ja={mb:"static"!=fa,presentationTimeline:W,ka:null,T:null,aa:null,B:null,bandwidth:0,Id:!1};for(var db=Ja,wc=z,Bb=R.I(c,"mediaPresentationDuration",R.Ea),vd=[],Ka=0,eb=R.O(c,"Period"),Tb=0;Tb<eb.length;Tb++){var Cb=eb[Tb];
  Ka=R.I(Cb,"start",R.Ea,Ka);var wd=R.I(Cb,"duration",R.Ea),tb=null;if(Tb!=eb.length-1){var Uh=R.I(eb[Tb+1],"start",R.Ea);null!=Uh&&(tb=Uh-Ka);}else null!=Bb&&(tb=Bb-Ka);null==tb&&(tb=wd);Cb=Dg(b,db,wc,{start:Ka,duration:tb,node:Cb,Vc:null==tb||Tb==eb.length-1});vd.push(Cb);wd=db.ka.id;b.l.includes(wd)||(b.l.push(wd),b.c&&(b.b.filterNewPeriod(Cb),b.c.periods.push(Cb)));if(null==tb){Ka=null;break}Ka+=tb;}null==b.c&&b.b.filterAllPeriods(vd);null!=Bb?(g=vd,h=Bb,k=!1):(g=vd,h=Ka,k=!0);Aa=h;Ba=g;W.Vb("static"==
  fa);"static"!=fa&&k||W.xa(Aa||Infinity);(rb=W.V())&&!isNaN(b.a.availabilityWindowOverride)&&(Z=b.a.availabilityWindowOverride);null==Z&&(Z=Infinity);W.sd(Z);W.$c(aa||1);if(b.c){f.A(0);break}b.c={presentationTimeline:W,periods:Ba,offlineSessionIds:[],minBufferTime:G||0};if(!W.je()){f.A(0);break}cb=m.O(c,"UTCTiming");return u(f,Eg(b,z,cb),4);case 4:sb=f.o;if(!b.b)return f["return"]();W.ee(sb);w(f);}})})}
  function Dg(b,c,d,e){c.ka=Fg(e.node,null,d);c.T=e;c.ka.id||(c.ka.id="__shaka_period_"+e.start);R.O(e.node,"EventStream").forEach(b.Af.bind(b,e.start,e.duration));d=R.O(e.node,"AdaptationSet").map(b.yf.bind(b,c)).filter(td.Ia);if(c.mb){c=[];for(var f=r(d),g=f.next();!g.done;g=f.next()){g=r(g.value.Kf);for(var h=g.next();!h.done;h=g.next())c.push(h.value);}if(c.length!=(new Set(c)).size)throw new D(2,4,4018);}var k=d.filter(function(b){return !b.wd});d.filter(function(b){return b.wd}).forEach(function(b){var c=
  b.streams[0],d=b.wd;k.forEach(function(b){b.id==d&&b.streams.forEach(function(b){b.trickModeVideo=c;});});});c=Gg(k,"video");f=Gg(k,"audio");if(!c.length&&!f.length)throw new D(2,4,4004);d=b.a.disableAudio;if(!f.length||d)f=[null];d=b.a.disableVideo;if(!c.length||d)c=[null];d=[];for(g=0;g<f.length;g++)for(h=0;h<c.length;h++)Hg(b,f[g],c[h],d);c=[];if(!b.a.disableText)for(b=Gg(k,"text"),f=0;f<b.length;f++)c.push.apply(c,b[f].streams);return {startTime:e.start,textStreams:c,variants:d}}
  function Gg(b,c){return b.filter(function(b){return b.contentType==c})}
  function Hg(b,c,d,e){if(c||d)if(c&&d){var f=c.drmInfos;var g=d.drmInfos;if(f.length&&g.length?0<md(f,g).length:1){g=md(c.drmInfos,d.drmInfos);for(var h=0;h<c.streams.length;h++)for(var k=0;k<d.streams.length;k++)f=(d.streams[k].bandwidth||0)+(c.streams[h].bandwidth||0),f={id:b.h++,language:c.language,primary:c.Wc||d.Wc,audio:c.streams[h],video:d.streams[k],bandwidth:f,drmInfos:g,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}}else for(g=c||d,h=0;h<g.streams.length;h++)f=g.streams[h].bandwidth||
  0,f={id:b.h++,language:g.language||"und",primary:g.Wc,audio:c?g.streams[h]:null,video:d?g.streams[h]:null,bandwidth:f,drmInfos:g.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}
  q.yf=function(b,c){b.aa=Fg(c,b.ka,null);if("image"==b.aa.contentType)return null;var d=!1,e=R.O(c,"Role"),f=e.map(function(b){return b.getAttribute("value")}).filter(td.Ia),g=void 0,h="text"==b.aa.contentType;h&&(g="subtitle");for(var k=0;k<e.length;k++){var l=e[k].getAttribute("schemeIdUri");if(null==l||"urn:mpeg:dash:role:2011"==l)switch(l=e[k].getAttribute("value"),l){case "main":d=!0;break;case "caption":case "subtitle":g=l;}}var m=null,n=!1;R.O(c,"EssentialProperty").forEach(function(b){"http://dashif.org/guidelines/trickmode"==
  b.getAttribute("schemeIdUri")?m=b.getAttribute("value"):n=!0;});k=R.O(c,"Accessibility");var p=new Map;e={};k=r(k);for(l=k.next();!l.done;e={Hb:e.Hb},l=k.next()){var v=l.value;l=v.getAttribute("schemeIdUri");v=v.getAttribute("value");"urn:scte:dash:cc:cea-608:2015"==l||"urn:scte:dash:cc:cea-708:2015"==l?(e.Hb=1,null!=v?v.split(";").forEach(function(b){return function(c){if(c.includes("=")){c=c.split("=");var d=c[0].startsWith("CC")?c[0]:"CC"+c[0];c=c[1].split(",")[0].split(":").pop();}else d="CC"+b.Hb,
  b.Hb+=2;p.set(d,M(c));}}(e)):p.set("CC1","und")):"urn:mpeg:dash:role:2011"==l&&null!=v&&(f.push(v),"captions"==v&&(g="caption"));}if(n)return null;e=R.O(c,"ContentProtection");var x=Kf(e,this.a.dash.customScheme,this.a.dash.ignoreDrmInfo);e=M(c.getAttribute("lang")||"und");k=c.getAttribute("label");(l=R.O(c,"Label"))&&l.length&&(l=l[0],l.textContent&&(k=l.textContent));l=R.O(c,"Representation");f=l.map(this.Bf.bind(this,b,x,g,e,k,d,f,p)).filter(function(b){return !!b});if(0==f.length){if(this.a.dash.ignoreEmptyAdaptationSet||
  h)return null;throw new D(2,4,4003);}b.aa.contentType&&"application"!=b.aa.contentType||(b.aa.contentType=Ig(f[0].mimeType,f[0].codecs),f.forEach(function(c){c.type=b.aa.contentType;}));f.forEach(function(b){x.drmInfos.forEach(function(c){b.keyId&&c.keyIds.push(b.keyId);});});h=l.map(function(b){return b.getAttribute("id")}).filter(td.Ia);return {id:b.aa.id||"__fake__"+this.h++,contentType:b.aa.contentType,language:e,Wc:d,streams:f,drmInfos:x.drmInfos,wd:m,Kf:h}};
  q.Bf=function(b,c,d,e,f,g,h,k,l){b.B=Fg(l,b.aa,null);if(!Jg(b.B))return null;b.bandwidth=R.I(l,"bandwidth",R.pc)||0;var m=b.B.contentType;m="text"==m||"application"==m;try{var n=this.Lf.bind(this);if(b.B.Sb)var p=kg(b,n);else if(b.B.La)p=ng(b,this.m);else if(b.B.Ub)p=rg(b,n,this.m,!!this.c);else{var v=b.B.qa,x=b.T.duration||0;p={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0<=b&&b<x?1:null},getSegmentReference:function(b){return 1!=b?null:new S(1,0,x,function(){return v},
  0,null)},initSegmentReference:null,ma:0};}}catch(z){if(m&&4002==z.code)return null;throw z;}l=R.O(l,"ContentProtection");l=Nf(l,this.a.dash.customScheme,c,this.a.dash.ignoreDrmInfo);return {id:this.h++,originalId:b.B.id,createSegmentIndex:p.createSegmentIndex,findSegmentPosition:p.findSegmentPosition,getSegmentReference:p.getSegmentReference,initSegmentReference:p.initSegmentReference,presentationTimeOffset:p.ma,mimeType:b.B.mimeType,codecs:b.B.codecs,frameRate:b.B.frameRate,pixelAspectRatio:b.B.pixelAspectRatio,
  bandwidth:b.bandwidth,width:b.B.width,height:b.B.height,kind:d,encrypted:0<c.drmInfos.length,keyId:l,language:e,label:f,type:b.aa.contentType,primary:g,trickModeVideo:null,emsgSchemeIdUris:b.B.emsgSchemeIdUris,roles:h,channelsCount:b.B.bd,audioSamplingRate:b.B.audioSamplingRate,closedCaptions:k}};
  function yg(b){t(function d(){var e,f;return A(d,function(d){switch(d.j){case 1:return e=0,xa(d,2),u(d,zg(b),4);case 4:e=d.o;za(d,3);break;case 2:f=Ca(d),b.b&&(f.severity=1,b.b.onError(f));case 3:if(!b.b)return d["return"]();Ag(b,e);w(d);}})});}function Ag(b,c){0>b.s||b.i.P(Math.max(3,b.s-c,Xa(b.u)));}
  function Fg(b,c,d){c=c||{contentType:"",mimeType:"",codecs:"",emsgSchemeIdUris:[],frameRate:void 0,bd:null,audioSamplingRate:null};d=d||c.qa;var e=R.xb,f=R.Ce,g=R.O(b,"BaseURL").map(R.fc),h=b.getAttribute("contentType")||c.contentType,k=b.getAttribute("mimeType")||c.mimeType,l=b.getAttribute("codecs")||c.codecs;f=R.I(b,"frameRate",f)||c.frameRate;var m=b.getAttribute("par")||c.pixelAspectRatio,n=R.O(b,"InbandEventStream"),p=c.emsgSchemeIdUris.slice();n=r(n);for(var v=n.next();!v.done;v=n.next())v=
  v.value.getAttribute("schemeIdUri"),p.includes(v)||p.push(v);n=R.O(b,"AudioChannelConfiguration");n=Kg(n)||c.bd;v=R.I(b,"audioSamplingRate",e)||c.audioSamplingRate;h||(h=Ig(k,l));return {qa:ud(d,g),Sb:R.dc(b,"SegmentBase")||c.Sb,La:R.dc(b,"SegmentList")||c.La,Ub:R.dc(b,"SegmentTemplate")||c.Ub,width:R.I(b,"width",e)||c.width,height:R.I(b,"height",e)||c.height,contentType:h,mimeType:k,codecs:l,frameRate:f,pixelAspectRatio:m,emsgSchemeIdUris:p,id:b.getAttribute("id"),bd:n,audioSamplingRate:v}}
  function Kg(b){for(var c=0;c<b.length;++c){var d=b[c],e=d.getAttribute("schemeIdUri");if(e&&(d=d.getAttribute("value")))switch(e){case "urn:mpeg:dash:outputChannelPositionList:2012":return d.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":e=parseInt(d,10);if(!e)continue;return e;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":if(e=parseInt(d,
  16)){for(b=0;e;)e&1&&++b,e>>=1;return b}}}return null}function Jg(b){var c=b.Sb?1:0;c+=b.La?1:0;c+=b.Ub?1:0;if(0==c)return "text"==b.contentType||"application"==b.contentType?!0:!1;1!=c&&(b.Sb&&(b.La=null),b.Ub=null);return !0}
  function Lg(b,c,d,e){c=ud(c,[d]);c=Ub(c,b.a.retryParameters);c.method=e;c=b.b.networkingEngine.request(4,c);Qb(b.g,c);return c.promise.then(function(b){if("HEAD"==e){if(!b.headers||!b.headers.date)return 0;b=b.headers.date;}else b=Ac(b.data);b=Date.parse(b);return isNaN(b)?0:b-Date.now()})}
  function Eg(b,c,d){d=d.map(function(b){return {scheme:b.getAttribute("schemeIdUri"),value:b.getAttribute("value")}});var e=b.a.dash.clockSyncUri;!d.length&&e&&d.push({scheme:"urn:mpeg:dash:utc:http-head:2014",value:e});return td.Ae(d,function(b){var d=b.scheme;b=b.value;switch(d){case "urn:mpeg:dash:utc:http-head:2014":case "urn:mpeg:dash:utc:http-head:2012":return Lg(this,c,b,"HEAD");case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return Lg(this,
  c,b,"GET");case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return d=Date.parse(b),isNaN(d)?0:d-Date.now();case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":return $a("NTP UTCTiming scheme is not supported"),Promise.reject();default:return $a("Unrecognized scheme in UTCTiming element",d),Promise.reject()}}.bind(b))["catch"](function(){$a("A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!");
  return 0})}q.Af=function(b,c,d){var e=R.xb,f=d.getAttribute("schemeIdUri")||"",g=d.getAttribute("value")||"",h=R.I(d,"timescale",e)||1;R.O(d,"Event").forEach(function(d){var k=R.I(d,"presentationTime",e)||0,m=R.I(d,"duration",e)||0;k=k/h+b;m=k+m/h;null!=c&&(k=Math.min(k,b+c),m=Math.min(m,b+c));d={schemeIdUri:f,value:g,startTime:k,endTime:m,id:d.getAttribute("id")||"",eventElement:d};this.b.onTimelineRegionAdded(d);}.bind(this));};
  q.Lf=function(b,c,d){b=wg(b,c,d,this.a.retryParameters);b=this.b.networkingEngine.request(1,b);Qb(this.g,b);return b.promise.then(function(b){return b.data})};function Ig(b,c){return Xd(pc(b,c))?"text":b.split("/")[0]}U.kd("mpd",xg);U.Bb("application/dash+xml",xg);U.Bb("video/vnd.mpeg.dash.mpd",xg);function Mg(b,c,d,e){this.b=b;this.type=c;this.a=d;this.segments=e||null;}function Ng(b,c,d,e){this.id=b;this.name=c;this.a=d;this.value=void 0===e?null:e;}Ng.prototype.toString=function(){function b(b){return b.name+"="+(isNaN(Number(b.value))?'"'+b.value+'"':b.value)}var c="#"+this.name,d=this.a?this.a.map(b):[];this.value&&d.unshift(this.value);0<d.length&&(c+=":"+d.join(","));return c};function Og(b,c){this.name=b;this.value=c;}
  Ng.prototype.getAttribute=function(b){var c=this.a.filter(function(c){return c.name==b});return c.length?c[0]:null};function Pg(b,c,d){return (b=b.getAttribute(c))?b.value:d||null}function Qg(b,c){this.b=c;this.a=b;}var Rg={nb:function(b,c){return b.filter(function(b){return b.name==c})},Ta:function(b,c){var d=Rg.nb(b,c);return d.length?d[0]:null},Lc:function(b,c,d){return b.filter(function(b){var e=b.getAttribute("TYPE");b=b.getAttribute("GROUP-ID");return e.value==c&&b.value==d})},Dc:function(b,c){return ud([b],[c])[0]},Uc:function(b){return /^#(?!EXT)/m.test(b)}};function Sg(b){this.b=b;this.a=0;}function Tg(b){Ug(b,/[ \t]+/gm);}function Ug(b,c){c.lastIndex=b.a;var d=c.exec(b.b);d=null==d?null:{position:d.index,length:d[0].length,Nf:d};if(b.a==b.b.length||null==d||d.position!=b.a)return null;b.a+=d.length;return d.Nf}function Vg(b){return b.a==b.b.length?null:(b=Ug(b,/[^ \t\n]*/gm))?b[0]:null}function Wg(){this.a=0;}
  function Xg(b,c,d){c=Ac(c);c=c.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n").trim();var e=c.split(/\n+/m);if(!/^#EXTM3U($|[ \t\n])/m.test(e[0]))throw new D(2,4,4015);c=0;for(var f=1;f<e.length;f++)if(!Rg.Uc(e[f])){var g=Yg(b,e[f]);--b.a;if(Zg.includes(g.name)){c=1;break}else"EXT-X-STREAM-INF"==g.name&&(f+=1);}f=[];for(g=1;g<e.length;)if(Rg.Uc(e[g]))g+=1;else{var h=Yg(b,e[g]);if($g.includes(h.name)){if(1!=c)throw new D(2,4,4017);e=e.splice(g,e.length-g);b=ah(b,d,e,f);return new Mg(d,c,f,b)}f.push(h);g+=1;"EXT-X-STREAM-INF"==
  h.name&&(h.a.push(new Og("URI",e[g])),g+=1);}return new Mg(d,c,f)}function ah(b,c,d,e){var f=[],g=[];d.forEach(function(d){if(/^(#EXT)/.test(d))d=Yg(b,d),Zg.includes(d.name)?e.push(d):g.push(d);else{if(Rg.Uc(d))return [];d=Rg.Dc(c,d.trim());f.push(new Qg(d,g));g=[];}});return f}
  function Yg(b,c){var d=b.a++,e=c.match(/^#(EXT[^:]*)(?::(.*))?$/);if(!e)throw new D(2,4,4016,c);var f=e[1],g=e[2];e=[];var h;if(g){g=new Sg(g);var k;(k=Ug(g,/^([^,=]+)(?:,|$)/g))&&(h=k[1]);for(var l=/([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;k=Ug(g,l);)e.push(new Og(k[1],k[2]||k[3]));}return new Ng(d,f,e,h)}var Zg="EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(" "),$g="EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");function bh(b){try{var c=bh.parse(b);return Eb({uri:b,fd:b,data:c.data,headers:{"content-type":c.contentType}})}catch(d){return Ab(d)}}B("shaka.net.DataUriPlugin",bh);
  bh.parse=function(b){var c=b.split(":");if(2>c.length||"data"!=c[0])throw new D(2,1,1004,b);c=c.slice(1).join(":").split(",");if(2>c.length)throw new D(2,1,1004,b);var d=c[0];c=window.decodeURIComponent(c.slice(1).join(","));d=d.split(";");var e=null;1<d.length&&(e=d[1]);if("base64"==e)b=L.Ba(c).buffer;else{if(e)throw new D(2,1,1005,b);b=Dc(c);}return {data:b,contentType:d[0]}};Sb("data",bh);function ch(){var b=this;this.a=this.g=null;this.$=1;this.D=new Map;this.S=new Set;this.b=new Map;this.c=null;this.u="";this.s=new Wg;this.R=0;this.h=new C(function(){dh(b);});this.f=eh;this.m=null;this.C=0;this.F=Infinity;this.i=new Pb;this.K=[];this.l=new Map;this.W=!1;}B("shaka.hls.HlsParser",ch);q=ch.prototype;q.configure=function(b){this.a=b;};
  q.start=function(b,c){var d=this;return t(function f(){var g,h;return A(f,function(f){switch(f.j){case 1:return d.g=c,u(f,fh(d,Ub([b],d.a.retryParameters),0),2);case 2:return g=f.o,d.u=g.uri,u(f,gh(d,g.data),3);case 3:return h=d.R,0<h&&d.h.P(h),f["return"](d.m)}})})};q.stop=function(){this.h&&(this.h.stop(),this.h=null);var b=[];this.i&&(b.push(this.i.destroy()),this.i=null);this.a=this.g=null;this.D.clear();this.S.clear();this.b.clear();this.m=null;return Promise.all(b)};
  q.update=function(){if(this.f!=hh.Qa){for(var b=[],c=r(this.b.values()),d=c.next();!d.done;d=c.next())b.push(ih(this,d.value));return Promise.all(b)}};
  function ih(b,c){return t(function e(){var f,g,h,k,l,m,n,p,v,x,z;return A(e,function(e){switch(e.j){case 1:return f=Rg,g=hh,h=c.re,u(e,fh(b,Ub([h],b.a.retryParameters),0),2);case 2:k=e.o;l=Xg(b.s,k.data,k.uri);if(1!=l.type)throw new D(2,4,4017);n=(m=f.Ta(l.a,"EXT-X-MEDIA-SEQUENCE"))?Number(m.value):0;p=c.stream;return u(e,jh(b,c.xc,l,n,p.mimeType,p.codecs),3);case 3:v=e.o;c.Tb.a=v;x=v[v.length-1];if(z=f.Ta(l.a,"EXT-X-ENDLIST"))kh(b,g.Qa),b.c.xa(x.endTime);w(e);}})})}q.onExpirationUpdated=function(){};
  function gh(b,c){return t(function e(){var f,g,h,k,l,m,n,p,v,x,z;return A(e,function(e){switch(e.j){case 1:f=Xg(b.s,c,b.u);if(0!=f.type)throw new D(2,4,4022);return u(e,lh(b,f),2);case 2:g=e.o;if(!b.g)throw new D(2,7,7001);if(b.W&&0==g.variants.length)throw new D(2,4,4034);b.g.filterAllPeriods([g]);h=Infinity;k=0;l=Infinity;for(var y=r(b.b.values()),E=y.next();!E.done;E=y.next())m=E.value,h=Math.min(h,m.Zc),k=Math.max(k,m.Zc),"text"!=m.stream.type&&(l=Math.min(l,m.duration));b.f!=hh.Qa?(b.c=new V(0,
  3*b.C),b.c.Vb(!1)):(b.c=new V(null,0),b.c.Vb(!0));mh(b);if(b.f!=hh.Qa){b.R=b.F;n=hh;b.f==n.zd&&(p=b.c.rc,isNaN(b.a.availabilityWindowOverride)||(p=b.a.availabilityWindowOverride),b.c.sd(p));for(v=0;95443.7176888889<=k;)v+=95443.7176888889,k-=95443.7176888889;if(v)for(y=r(b.b.values()),E=y.next();!E.done;E=y.next())x=E.value,95443.7176888889>x.Zc&&(x.stream.presentationTimeOffset=-v,x.Tb.offset(v));}else for(b.c.xa(l),b.c.offset(-h),y=r(b.b.values()),E=y.next();!E.done;E=y.next())z=E.value,z.stream.presentationTimeOffset=
  h,z.Tb.offset(-h),$f(z.Tb,l);b.m={presentationTimeline:b.c,periods:[g],offlineSessionIds:[],minBufferTime:0};w(e);}})})}
  function lh(b,c){return t(function e(){var f,g,h,k,l,m,n,p,v,x,z,y;return A(e,function(e){switch(e.j){case 1:return f=Rg,g=td,h=c.a,k=f.nb(c.a,"EXT-X-MEDIA"),l=k.filter(function(b){return "SUBTITLES"==nh(b,"TYPE")}.bind(b)),m=l.map(function(b){var c=this;return t(function fa(){var e;return A(fa,function(f){switch(f.j){case 1:if(c.a.disableText)return f["return"](null);xa(f,2);return u(f,oh(c,b),4);case 4:return f["return"](f.o);case 2:e=Ca(f);if(c.a.hls.ignoreTextStreamFailures)return f["return"](null);
  throw e;}})})}.bind(b)),n=k.filter(function(b){return "CLOSED-CAPTIONS"==nh(b,"TYPE")}),ph(b,n),u(e,Promise.all(m),2);case 2:return p=e.o,v=f.nb(h,"EXT-X-STREAM-INF"),x=v.map(function(b){return qh(this,b,c)}.bind(b)),u(e,Promise.all(x),3);case 3:return z=e.o,y=z.reduce(g.Cc,[]),y=y.filter(function(b){return null!=b}),e["return"]({startTime:0,variants:y,textStreams:p.filter(function(b){return null!=b})})}})})}
  function qh(b,c,d){return t(function f(){var g,h,k,l,m,n,p,v,x,z,y,G,E,Z,aa,fa,qb,Ua,W,oa,ha,Ja,Aa,Ba,rb,cb,sb;return A(f,function(f){switch(f.j){case 1:g=yd;h=Rg;k=Pg(c,"CODECS","avc1.42E01E,mp4a.40.2");l=rh(k.split(/\s*,\s*/));m=c.getAttribute("RESOLUTION");p=n=null;v=Pg(c,"FRAME-RATE");x=Number(nh(c,"BANDWIDTH"));m&&(z=m.value.split("x"),n=z[0],p=z[1]);y=h.nb(d.a,"EXT-X-MEDIA");y=y.filter(function(b){return "CLOSED-CAPTIONS"!=nh(b,"TYPE")});y=y.filter(function(b){var c=Pg(b,"URI")||"";return "SUBTITLES"==
  (Pg(b,"TYPE")||"")||""!=c});G=Pg(c,"AUDIO");E=Pg(c,"VIDEO");G?y=h.Lc(y,"AUDIO",G):E&&(y=h.Lc(y,"VIDEO",E));if(Z=sh(g.ra,l)){if(aa=Pg(c,"SUBTITLES"))if(fa=h.Lc(y,"SUBTITLES",aa),fa.length&&(qb=b.D.get(fa[0].id)))qb.stream.codecs=Z;Mb(l,Z);}Ua=y.map(function(b){return th(this,b,l)}.bind(b));W=[];oa=[];return u(f,Promise.all(Ua),2);case 2:Ja=f.o;Ja=Ja.filter(function(b){return null!=b});G?W=Ja:E&&(oa=Ja);Ba=!1;W.length||oa.length?W.length?(cb=nh(c,"URI"),sb=W[0].xc,cb==sb?(Aa=g.Db,Ba=!0):Aa=g.Pa):Aa=
  g.Db:1==l.length?(rb=sh(g.Pa,l),Aa=m||v||rb?g.Pa:g.Db):(Aa=g.Pa,l=[l.join(",")]);if(Ba){f.A(3);break}return u(f,uh(b,c,l,Aa),4);case 4:ha=f.o;case 3:if(ha)ha.stream.type==g.Db?W=[ha]:oa=[ha];else if(null===ha)return f["return"]([]);oa&&vh(oa);W&&vh(W);return f["return"](wh(b,W,oa,x,n,p,v))}})})}function vh(b){b.forEach(function(b){var c=b.stream.codecs.split(",");c=c.filter(function(b){return "mp4a.40.34"!=b});b.stream.codecs=c.join(",");});}
  function wh(b,c,d,e,f,g,h){d.forEach(function(b){if(b=b.stream)b.width=Number(f)||void 0,b.height=Number(g)||void 0,b.frameRate=Number(h)||void 0;}.bind(b));var k=b.a?b.a.disableAudio:!1;if(!c.length||k)c=[null];k=b.a?b.a.disableVideo:!1;if(!d.length||k)d=[null];k=[];c=r(c);for(var l=c.next();!l.done;l=c.next()){l=l.value;for(var m=r(d),n=m.next();!n.done;n=m.next()){var p=n.value;n=l?l.stream:null;var v=p?p.stream:null,x=l?l.drmInfos:null,z=p?p.drmInfos:null;p=(p?p.xc:"")+" - "+(l?l.xc:"");var y=
  void 0;if(n&&v)if(x.length&&z.length?0<md(x,z).length:1)y=md(x,z);else continue;else n?y=x:v&&(y=z);b.S.has(p)||(n=xh(b,n,v,e,y),k.push(n),b.S.add(p));}}return k}function xh(b,c,d,e,f){return {id:b.$++,language:c?c.language:"und",primary:!!c&&c.primary||!!d&&d.primary,audio:c,video:d,bandwidth:e,drmInfos:f,allowedByApplication:!0,allowedByKeySystem:!0}}
  function oh(b,c){return t(function e(){var f;return A(e,function(e){switch(e.j){case 1:return nh(c,"TYPE"),u(e,th(b,c,[]),2);case 2:return f=e.o,e["return"](f.stream)}})})}function ph(b,c){for(var d=r(c),e=d.next();!e.done;e=d.next()){e=e.value;nh(e,"TYPE");var f=Pg(e,"LANGUAGE")||"und";f=M(f);var g=nh(e,"GROUP-ID");e=nh(e,"INSTREAM-ID");b.l.get(g)||b.l.set(g,new Map);b.l.get(g).set(e,f);}}
  function th(b,c,d){return t(function f(){var g,h,k,l,m,n,p,v,x,z,y;return A(f,function(f){switch(f.j){case 1:g=nh(c,"URI");if(b.b.has(g))return f["return"](b.b.get(g));h=nh(c,"TYPE").toLowerCase();k=yd;"subtitles"==h&&(h=k.ra);l=M(Pg(c,"LANGUAGE","und"));m=Pg(c,"NAME");n=c.getAttribute("DEFAULT");p=c.getAttribute("AUTOSELECT");v=Pg(c,"CHANNELS");if("audio"==h)if(v){var E=v.split("/")[0];E=parseInt(E,10);}else E=null;else E=null;x=E;z=!!n||!!p;return u(f,yh(b,g,d,h,l,z,m,x,null),2);case 2:y=f.o;if(null==
  y)return f["return"](null);if(b.b.has(g))return f["return"](b.b.get(g));b.D.set(c.id,y);b.b.set(g,y);return f["return"](y)}})})}
  function uh(b,c,d,e){return t(function g(){var h,k,l,m,n;return A(g,function(g){switch(g.j){case 1:h=yd;k=nh(c,"URI");if(b.b.has(k))return g["return"](b.b.get(k));l=Pg(c,"CLOSED-CAPTIONS");m=null;e==h.Pa&&l&&"NONE"!=l&&(m=b.l.get(l));return u(g,yh(b,k,d,e,"und",!1,null,null,m),2);case 2:n=g.o;if(null==n)return g["return"](null);if(b.b.has(k))return g["return"](b.b.get(k));b.b.set(k,n);return g["return"](n)}})})}
  function yh(b,c,d,e,f,g,h,k,l){return t(function n(){var p,v,x,z,y,G,E,Z,aa,fa,qb,Ua,W,oa,ha,Ja,Aa,Ba,rb,cb,sb,db,Th,wc,Bb;return A(n,function(n){switch(n.j){case 1:return p=Rg,v=p.Dc(b.u,c),u(n,fh(b,Ub([v],b.a.retryParameters),0),2);case 2:x=n.o;v=x.uri;z=Xg(b.s,x.data,v);if(1!=z.type)throw new D(2,4,4017);y=[];z.segments.forEach(function(b){b=p.nb(b.b,"EXT-X-KEY");y.push.apply(y,b);});G=!1;E=[];Z=null;for(var Ka=r(y),eb=Ka.next();!eb.done;eb=Ka.next())if(aa=eb.value,fa=nh(aa,"METHOD"),"NONE"!=fa){G=
  !0;if("AES-128"==fa)return b.W=!0,n["return"](null);qb=nh(aa,"KEYFORMAT");if(W=(Ua=zh[qb])?Ua(aa):null)W.keyIds.length&&(Z=W.keyIds[0]),E.push(W);}if(G&&!E.length)throw new D(2,4,4026);Ah(b,z);oa=Bh(e,d);return u(n,Ch(b,e,oa,z),3);case 3:ha=n.o;if("audio/mpeg"==ha||"audio/aac"==ha)oa="";Aa=(Ja=p.Ta(z.a,"EXT-X-MEDIA-SEQUENCE"))?Number(Ja.value):0;return u(n,jh(b,c,z,Aa,ha,oa),4);case 4:return Ba=n.o,rb=Ba[0].startTime,cb=Ba[Ba.length-1].endTime,sb=cb-rb,db=new T(Ba),Th=Dh(z),wc=void 0,"text"==e&&(wc=
  "subtitle"),Bb={id:b.$++,originalId:h,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:db.find.bind(db),getSegmentReference:db.get.bind(db),initSegmentReference:Th,presentationTimeOffset:0,mimeType:ha,codecs:oa,kind:wc,encrypted:G,keyId:Z,language:f,label:h,type:e,primary:g,trickModeVideo:null,emsgSchemeIdUris:null,frameRate:void 0,pixelAspectRatio:void 0,width:void 0,height:void 0,bandwidth:void 0,roles:[],channelsCount:k,audioSamplingRate:null,closedCaptions:l},n["return"]({stream:Bb,
  Tb:db,drmInfos:E,xc:c,re:v,Zc:rb,vg:cb,duration:sb})}})})}function Ah(b,c){var d=hh,e=Rg.Ta(c.a,"EXT-X-PLAYLIST-TYPE"),f=Rg.Ta(c.a,"EXT-X-ENDLIST");f=e&&"VOD"==e.value||f;e=e&&"EVENT"==e.value&&!f;e=!f&&!e;f?kh(b,d.Qa):(e?kh(b,d.zd):kh(b,d.me),d=Eh(c.a,"EXT-X-TARGETDURATION"),d=Number(d.value),b.C=Math.max(d,b.C),b.F=Math.min(d,b.F));}
  function Dh(b){var c=Rg.nb(b.a,"EXT-X-MAP");if(!c.length)return null;if(1<c.length)throw new D(2,4,4020);c=c[0];var d=nh(c,"URI"),e=Rg.Dc(b.b,d);b=0;d=null;if(c=Pg(c,"BYTERANGE"))b=c.split("@"),c=Number(b[0]),b=Number(b[1]),d=b+c-1;return new Xf(function(){return [e]},b,d)}
  function Fh(b,c,d,e){var f=c.b,g=c.a;c=Eh(f,"EXTINF").value.split(",");c=e+Number(c[0]);var h=0,k=null;if(f=Rg.Ta(f,"EXT-X-BYTERANGE"))h=f.value.split("@"),f=Number(h[0]),h=h[1]?Number(h[1]):b.a+1,k=h+f-1;return new S(d,e,c,function(){return [g]},h,k)}function mh(b){b.c&&(b.K.forEach(function(c){b.c.ub(c,0);}),b.K=[]);}
  function jh(b,c,d,e,f,g){return t(function k(){var l,m,n,p,v,x,z,y,G,E,Z;return A(k,function(k){switch(k.j){case 1:return l=d.segments,m=[],n=l[0].a,p=Fh(null,l[0],e,0),v=Dh(d),u(k,Gh(b,c,v,p,f,g),2);case 2:x=k.o;n.split("/").pop();for(var aa=0;aa<l.length;++aa)z=l[aa],y=m[m.length-1],G=0==aa?x:y.endTime,E=e+aa,Z=Fh(y,z,E,G),m.push(Z);b.K.push(m);mh(b);return k["return"](m)}})})}
  function Hh(b,c){return t(function e(){var f,g,h,k,l,m;return A(e,function(e){switch(e.j){case 1:return f=1,g=wg(c.c(),c.b,c.b+2048-1,b.a.retryParameters),h=wg(c.c(),c.b,c.a,b.a.retryParameters),xa(e,2),u(e,fh(b,g,f),4);case 4:return k=e.o,e["return"](k);case 2:l=Ca(e);if(7001==l.code)throw l;$a("Unable to fetch a partial HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",g.uris[0]);return u(e,fh(b,h,f),5);case 5:return m=
  e.o,e["return"](m)}})})}
  function Gh(b,c,d,e,f,g){return t(function k(){var l,m,n,p,v,x,z,y,G;return A(k,function(k){switch(k.j){case 1:if(b.m&&(l=b.b.get(c),m=l.Tb,n=m.get(e.position)))return k["return"](n.startTime);if("audio/mpeg"==f||"audio/aac"==f)return k["return"](null);if("video/mp4"!=f&&"audio/mp4"!=f){k.A(2);break}p=[Hh(b,e)];d&&p.push(Hh(b,d));return u(k,Promise.all(p),3);case 3:return v=k.o,x=v[0],z=v[1]||v[0],k["return"](Ih(x.data,z.data));case 2:if("video/mp2t"!=f){k.A(4);break}return u(k,Hh(b,e),5);case 5:return y=
  k.o,k["return"](Jh(y.data));case 4:if("application/mp4"!=f&&!f.startsWith("text/")){k.A(6);break}return u(k,Hh(b,e),7);case 7:return G=k.o,k["return"](Kh(f,g,G.data));case 6:if("video/webm"==f)return k["return"](null);throw new D(2,4,4030);}})})}
  function Ih(b,c){var d=0;(new Q).H("moov",Df).H("trak",Df).H("mdia",Df).fa("mdhd",function(b){b.reader.M(0==b.version?8:16);d=b.reader.G();b.parser.stop();}).parse(c,!0);if(!d)throw new D(2,4,4030);var e=0,f=!1;(new Q).H("moof",Df).H("traf",Df).fa("tfdt",function(b){e=(0==b.version?b.reader.G():b.reader.Ab())/d;f=!0;b.parser.stop();}).parse(b,!0);if(!f)throw new D(2,4,4030);return e}
  function Jh(b){function c(){throw new D(2,4,4030);}b=new P(new DataView(b),0);for(var d=0,e=0;;)if(d=b.ca(),e=b.la(),71!=e&&c(),b.Rb()&16384||c(),e=(b.la()&48)>>4,0!=e&&2!=e||c(),3==e&&(e=b.la(),b.M(e)),1!=b.G()>>8)b.seek(d+188),e=b.la(),71!=e&&(b.seek(d+192),e=b.la()),71!=e&&(b.seek(d+204),e=b.la()),71!=e&&c(),b.be(1);else return b.M(3),d=b.la()>>6,0!=d&&1!=d||c(),0==b.la()&&c(),d=b.la(),e=b.Rb(),b=b.Rb(),(1073741824*((d&14)>>1)+((e&65534)<<14|(b&65534)>>1))/9E4}
  function Kh(b,c,d){b=pc(b,c);if(!Xd(b))return 0;c=new Vd(null);Yd(c,b);return c.Rc(d)}function rh(b){var c=new Set,d=[];b=r(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=sc(e)[0];c.has(f)||(d.push(e),c.add(f));}return d}function sh(b,c){for(var d=Lh[b],e=0;e<d.length;e++)for(var f=0;f<c.length;f++)if(d[e].test(c[f].trim()))return c[f].trim();return "text"==b?"":null}function Bh(b,c){if(1==c.length)return c[0];var d=sh(b,c);if(null!=d)return d;throw new D(2,4,4025,c);}
  function Ch(b,c,d,e){return t(function g(){var h,k,l,m,n,p,v,x,z;return A(g,function(g){switch(g.j){case 1:h=yd;k=e.segments[0].a;l=new fb(k);m=l.ja.split(".").pop();n=Mh[c];if(p=n[m])return g["return"](p);if(c==h.ra)return d&&"vtt"!=d?g["return"]("application/mp4"):g["return"]("text/vtt");v=Ub([k],b.a.retryParameters);v.method="HEAD";return u(g,fh(b,v,1),2);case 2:x=g.o;z=x.headers["content-type"];if(!z)throw new D(2,4,4021,m);return g["return"](z.split(";")[0])}})})}
  function nh(b,c){var d=b.getAttribute(c);if(!d)throw new D(2,4,4023,c);return d.value}function Eh(b,c){var d=Rg.Ta(b,c);if(!d)throw new D(2,4,4024,c);return d}
  var Lh={audio:[/^vorbis$/,/^opus$/,/^flac$/,/^mp4a/,/^[ae]c-3$/],video:[/^avc/,/^hev/,/^hvc/,/^vp0?[89]/,/^av1$/],text:[/^vtt$/,/^wvtt/,/^stpp/]},Mh={audio:{mp4:"audio/mp4",m4s:"audio/mp4",m4i:"audio/mp4",m4a:"audio/mp4",ts:"video/mp2t",aac:"audio/aac"},video:{mp4:"video/mp4",m4s:"video/mp4",m4i:"video/mp4",m4v:"video/mp4",ts:"video/mp2t"},text:{mp4:"application/mp4",m4s:"application/mp4",m4i:"application/mp4",vtt:"text/vtt",ttml:"application/ttml+xml"}};
  function dh(b){t(function d(){var e,f;return A(d,function(d){switch(d.j){case 1:if(!b.g)return d["return"]();xa(d,2);return u(d,b.update(),4);case 4:e=b.R;b.h.P(e);za(d,0);break;case 2:f=Ca(d),f.severity=1,b.g.onError(f),b.h.P(.1),w(d);}})});}function kh(b,c){b.f=c;b.c&&b.c.Vb(b.f==hh.Qa);b.f!=hh.Qa||b.h.stop();}function fh(b,c,d){if(!b.i)throw new D(2,7,7001);c=b.g.networkingEngine.request(d,c);Qb(b.i,c);return c.promise}
  var zh={"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":function(b){var c=nh(b,"METHOD");Me("HLS SAMPLE-AES-CENC","SAMPLE-AES-CENC will no longer be supported, see Issue #1227");if(!["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].includes(c))return null;c=nh(b,"URI");c=bh.parse(c);c=new Uint8Array(c.data);c=xd("com.widevine.alpha",[{initDataType:"cenc",initData:c}]);if(b=Pg(b,"KEYID"))c.keyIds=[b.substr(2).toLowerCase()];return c}},eh="VOD",hh={Qa:eh,me:"EVENT",zd:"LIVE"};U.kd("m3u8",ch);
  U.Bb("application/x-mpegurl",ch);U.Bb("application/vnd.apple.mpegurl",ch);function Nh(){this.a=new Map;}function Oh(b,c,d){Ph(b,c).text=d;}function Ph(b,c){b.a.has(c)||b.a.set(c,new Qh);return b.a.get(c)}function Qh(){this.text=this.variant=null;}function Rh(b,c){this.a=b;this.b=new Set([b]);c=c||[];for(var d=r(c),e=d.next();!e.done;e=d.next())this.add(e.value);}Rh.prototype.add=function(b){return Sh(this.a,b)?(this.b.add(b),!0):!1};function Sh(b,c){var d;if(!(d=!!b.audio!=!!c.audio||!!b.video!=!!c.video||b.language!=c.language)&&(d=b.audio&&c.audio)){d=b.audio;var e=c.audio;d=!(d.channelsCount==e.channelsCount&&Vh(d,e)&&Wh(d.roles,e.roles));}!d&&(d=b.video&&c.video)&&(d=b.video,e=c.video,d=!(Vh(d,e)&&Wh(d.roles,e.roles)));return d?!1:!0}
  Rh.prototype.values=function(){return this.b.values()};function Vh(b,c){if(b.mimeType!=c.mimeType)return !1;var d=b.codecs.split(",").map(function(b){return sc(b)[0]}),e=c.codecs.split(",").map(function(b){return sc(b)[0]});if(d.length!=e.length)return !1;d.sort();e.sort();for(var f=0;f<d.length;f++)if(d[f]!=e[f])return !1;return !0}
  function Wh(b,c){var d=new Set(b),e=new Set(c);d["delete"]("main");e["delete"]("main");if(d.size!=e.size)return !1;d=r(d);for(var f=d.next();!f.done;f=d.next())if(!e.has(f.value))return !1;return !0}function Xh(b){this.a=b;this.b=new Yh(b.language,"",b.audio&&b.audio.channelsCount?b.audio.channelsCount:0,"");}Xh.prototype.create=function(b){var c=this,d=b.filter(function(b){return Sh(c.a,b)});return d.length?new Rh(d[0],d):this.b.create(b)};function Yh(b,c,d,e){this.f=b;this.c=c;this.a=d;this.b=void 0===e?"":e;}
  Yh.prototype.create=function(b){var c=[];c=Zh(b,this.f);var d=b.filter(function(b){return b.primary});c=c.length?c:d.length?d:b;this.c&&(b=$h(c,this.c),b.length&&(c=b));this.a&&(b=Fe(c,this.a),b.length&&(c=b));this.b&&(b=ai(c,this.b),b.length&&(c=b));b=new Rh(c[0]);c=r(c);for(d=c.next();!d.done;d=c.next())d=d.value,Sh(b.a,d)&&b.add(d);return b};function Zh(b,c){var d=M(c),e=te(d,b.map(function(b){return se(b)}));return e?b.filter(function(b){return e==se(b)}):[]}
  function $h(b,c){return b.filter(function(b){var d=b.audio;b=b.video;return d&&0<=d.roles.indexOf(c)||b&&0<=b.roles.indexOf(c)})}function ai(b,c){return b.filter(function(b){return b.audio?b.audio.label.toLowerCase()==c.toLowerCase():!1})}function bi(){this.a=ci;this.b=(new Map).set(ci,2).set(di,1);}function ei(b,c,d){b.b.set(ci,d).set(di,c);}var di=0,ci=1;function fi(b,c){this.g=b;this.h=gi(b);this.a=b.a.currentTime;this.f=Date.now()/1E3;this.b=!1;this.i=c;this.c=function(){};}fi.prototype.release=function(){this.g=null;this.c=function(){};};function hi(b,c){b.c=c;}function ii(b){this.a=b;}function gi(b){if(b.a.paused||0==b.a.playbackRate||null==b.a.buffered)var c=!1;else a:{c=b.a.buffered;b=b.a.currentTime;for(var d=0;d<c.length;d++){var e=c.start(d),f=c.end(d);if(!(b<e||b>f-.5)){c=!0;break a}}c=!1;}return c}function ji(b,c,d,e,f){var g=this;this.a=b;this.u=c;this.s=d;this.l=f;this.f=new K;this.i=!1;this.m=b.readyState;this.c=!1;this.b=e;this.h=!1;this.f.w(b,"waiting",function(){return ki(g)});this.g=(new C(function(){ki(g);})).Na(.25);}ji.prototype.release=function(){this.f&&(this.f.release(),this.f=null);null!=this.g&&(this.g.stop(),this.g=null);this.b&&(this.b.release(),this.b=null);this.a=this.u=this.l=null;};ji.prototype.dd=function(){this.h=!0;ki(this);};
  function ki(b){if(0!=b.a.readyState){if(b.a.seeking){if(!b.i)return}else b.i=!1;if(!b.a.paused){b.a.readyState!=b.m&&(b.c=!1,b.m=b.a.readyState);var c=b.s.smallGapLimit,d=b.a.currentTime,e=b.a.buffered;a:{if(e&&e.length&&!(1==e.length&&1E-6>e.end(0)-e.start(0))){var f=xc("Edge/")||xc("Trident/")||xc("Tizen")||xc("CrKey")?.5:.1;for(var g=0;g<e.length;g++)if(e.start(g)>d&&(0==g||e.end(g-1)-d<=f)){f=g;break a}}f=null;}if(null==f){if(b.b){b=b.b;e=b.g;d=gi(e);f=e.a.currentTime;g=Date.now()/1E3;if(b.a!=
  f||b.h!=d)b.f=g,b.a=f,b.h=d,b.b=!1;f=g-b.f;f>=b.i&&d&&!b.b&&(b.c(b.a,f),b.b=!0,b.a=e.a.currentTime);}}else if(0!=f||b.h){g=e.start(f);var h=b.u.Ca();if(!(g>=h)){h=g-d;c=h<=c;var k=!1;.001>h||(c||b.c||(b.c=!0,d=new I("largegap",{currentTime:d,gapSize:h}),d.cancelable=!0,b.l(d),b.s.jumpLargeGaps&&!d.defaultPrevented&&(k=!0)),!c&&!k)||(0!=f&&e.end(f-1),b.a.currentTime=g);}}}}}function li(b){var c=this;this.c=b;this.a=new Set;this.b=(new C(function(){mi(c,!1);})).Na(.25);}li.prototype.release=function(){this.b.stop();for(var b=r(this.a),c=b.next();!c.done;c=b.next())c.value.release();this.a.clear();};function mi(b,c){for(var d=r(b.a),e=d.next();!e.done;e=d.next())e.value.g(b.c.currentTime,c);}function ni(b){var c=[];b=r(b);for(var d=b.next();!d.done;d=b.next()){d=r(d.value.variants);for(var e=d.next();!e.done;e=d.next())c.push(e.value);}return c}function oi(b,c){for(var d=null,e=r(b),f=e.next();!f.done;f=e.next())f=f.value,c>=f.startTime&&(d=f);return d}function pi(b){this.c=b;this.a=null;this.b=function(){};}pi.prototype.release=function(){this.a=this.c=null;this.b=function(){};};pi.prototype.g=function(b){var c=this.a,d=this.c.periods;b=oi(d,b)||d[0];c!=b&&this.b(b);this.a=b;};function qi(b,c){b.b=c;}function ri(b){var c=this;this.a=b;this.f=!1;this.c=this.a.gc();this.b=new C(function(){c.a.Ld(.25*c.c);});}ri.prototype.release=function(){this.b&&(this.b.stop(),this.b=null);this.a=null;};ri.prototype.set=function(b){this.c=b;si(this);};function si(b){b.b.stop();var c=b.f?0:b.c;if(0<=c)try{b.a.gc()!=c&&b.a.rd(c);return}catch(d){}b.b.Na(.25);0!=b.a.gc()&&b.a.rd(0);}function ti(b,c,d){this.a=b;this.f=c;this.g=d;this.h=!1;this.b=new K;this.c=new ui(b);0<b.readyState?vi(this,d):wi(this,d);}ti.prototype.release=function(){this.b&&(this.b.release(),this.b=null);null!=this.c&&(this.c.release(),this.c=null);this.f=function(){};this.a=null;};function xi(b){return b.h?b.a.currentTime:b.g}function wi(b,c){b.g=c;b.b.ea(b.a,"loadedmetadata");b.b.da(b.a,"loadedmetadata",function(){vi(b,c);});}
  function vi(b,c){.001>Math.abs(b.a.currentTime-c)?yi(b):(b.b.da(b.a,"seeking",function(){yi(b);}),zi(b.c,0==b.a.currentTime?c:b.a.currentTime));}function yi(b){b.h=!0;b.b.w(b.a,"seeking",function(){return b.f()});}function ui(b){var c=this;this.b=b;this.h=10;this.g=this.f=this.c=0;this.a=new C(function(){0>=c.c?c.a.stop():c.b.currentTime!=c.f?c.a.stop():(c.b.currentTime=c.g,c.c--);});}ui.prototype.release=function(){this.a&&(this.a.stop(),this.a=null);this.b=null;};
  function zi(b,c){b.f=b.b.currentTime;b.g=c;b.c=b.h;b.b.currentTime=c;b.a.Na(.1);}function Ai(b){function c(){null==d.c?d.f=!0:(d.b.da(d.a,"seeking",function(){d.f=!0;}),d.a.currentTime=Math.max(0,d.a.currentTime+d.c));}var d=this;this.a=b;this.f=!1;this.c=null;this.b=new K;0==this.a.readyState?this.b.da(this.a,"loadeddata",c):c();}Ai.prototype.release=function(){this.b&&(this.b.release(),this.b=null);this.a=null;};Ai.prototype.m=function(b){this.c=this.f?this.c:b;};Ai.prototype.h=function(){return (this.f?this.a.currentTime:this.c)||0};Ai.prototype.s=function(){};
  function Bi(b,c,d,e,f,g){var h=this;this.b=b;this.a=c.presentationTimeline;this.C=c.minBufferTime||0;this.g=d;this.u=f;this.l=null;this.f=new ji(b,c.presentationTimeline,d,Ci(b,d),g);this.c=new ti(b,function(){a:{var b=h.f;b.i=!0;b.h=!1;b.c=!1;var c=xi(h.c);b=Di(h,c);if(.001<Math.abs(b-c)&&(c=(new Date).getTime()/1E3,!h.l||h.l<c-1)){h.l=c;c=h.c;0<c.a.readyState?zi(c.c,b):wi(c,b);b=void 0;break a}h.u();b=void 0;}return b},Ei(this,e));this.i=(new C(function(){if(0!=h.b.readyState&&!h.b.paused){var b=
  h.b.currentTime,c=h.a.ob(),d=h.a.Ca();3>d-c&&(c=d-3);b<c&&(b=Di(h,b),h.b.currentTime=b);}})).Na(.25);}Bi.prototype.release=function(){this.c&&(this.c.release(),this.c=null);this.f&&(this.f.release(),this.f=null);this.i&&(this.i.stop(),this.i=null);this.b=this.c=this.a=this.g=null;this.u=function(){};};Bi.prototype.m=function(b){var c=this.c;0<c.a.readyState?zi(c.c,b):wi(c,b);};Bi.prototype.h=function(){var b=xi(this.c);return 0<this.b.readyState&&!this.b.paused?Fi(this,b):b};
  function Ei(b,c){null==c?c=Infinity>b.a.Y()?b.a.ob():b.a.Ca():0>c&&(c=b.a.Ca()+c);return Gi(b,Fi(b,c))}Bi.prototype.s=function(){this.f.dd();};function Gi(b,c){var d=b.a.Y();return c>=d?d-b.g.durationBackoff:c}function Di(b,c){var d=qd.bind(null,b.b.buffered),e=Math.max(b.C,b.g.rebufferingGoal),f=b.g.safeSeekOffset,g=b.a.ob(),h=b.a.Ca(),k=b.a.Y();3>h-g&&(g=h-3);var l=b.a.Lb(e),m=b.a.Lb(f);e=b.a.Lb(e+f);return c>=k?Gi(b,c):c>h?h:c<g?d(m)?m:e:c>=l||d(c)?c:e}
  function Fi(b,c){var d=b.a.ob();if(c<d)return d;d=b.a.Ca();return c>d?d:c}function Ci(b,c){if(!c.stallEnabled)return null;var d=c.stallSkip,e=new fi(new ii(b),c.stallThreshold);hi(e,function(){b.currentTime+=d;});return e}function Hi(){this.b=function(){};this.a=new Set;}Hi.prototype.release=function(){this.b=function(){};this.a.clear();};function Ii(b,c){b.b=c;}function Ji(b){var c=this;this.h=b;this.f=new Map;this.a=function(){};this.b=function(){};this.c=function(){};this.i=[{eb:null,cb:Ki,Wa:function(b,e){return c.a(b,e)}},{eb:Li,cb:Ki,Wa:function(b,e){return c.a(b,e)}},{eb:Mi,cb:Ki,Wa:function(b,e){return c.a(b,e)}},{eb:Ki,cb:Li,Wa:function(b,e){return c.b(b,e)}},{eb:Ki,cb:Mi,Wa:function(b,e){return c.b(b,e)}},{eb:Li,cb:Mi,Wa:function(b,e){return c.c(b,e)}},{eb:Mi,cb:Li,Wa:function(b,e){return c.c(b,e)}}];}
  Ji.prototype.release=function(){this.h=null;this.f.clear();this.a=function(){};this.b=function(){};this.c=function(){};};Ji.prototype.g=function(b,c){for(var d=r(this.h.a),e=d.next();!e.done;e=d.next()){e=e.value;var f=this.f.get(e),g=b<e.startTime?Li:b>e.endTime?Mi:Ki;this.f.set(e,g);for(var h=r(this.i),k=h.next();!k.done;k=h.next())k=k.value,k.eb==f&&k.cb==g&&k.Wa(e,c);}};function Ni(b,c,d,e){b.a=c;b.b=d;b.c=e;}var Li=1,Ki=2,Mi=3;function Oi(b,c){this.a=c;this.c=b;this.g=null;this.l=1;this.u=Promise.resolve();this.h=[];this.i=new Map;this.b=new Map;this.s=!1;this.F=null;this.D=this.f=this.m=!1;this.C=0;}Oi.prototype.destroy=function(){for(var b=r(this.b.values()),c=b.next();!c.done;c=b.next())Pi(c.value);this.b.clear();this.i.clear();this.g=this.h=this.u=this.c=this.a=null;this.f=!0;return Promise.resolve()};
  Oi.prototype.configure=function(b){this.g=b;this.F=new xb({maxAttempts:Math.max(b.retryParameters.maxAttempts,2),baseDelay:b.retryParameters.baseDelay,backoffFactor:b.retryParameters.backoffFactor,fuzzFactor:b.retryParameters.fuzzFactor,timeout:0},!0);};
  Oi.prototype.start=function(){var b=this;return t(function d(){var e,f,g;return A(d,function(d){switch(d.j){case 1:return e=b.a.Ua(),f=Qi(b,e),g=b.a.Od(b.c.periods[f]),g.variant||g.text?u(d,Ri(b,g.variant?g.variant.audio:null,g.variant?g.variant.video:null,g.text,e),2):d["return"](new D(2,5,5005));case 2:if(b.f)return d["return"]();b.a&&b.a.lf&&b.a.lf();w(d);}})})};function Si(b){return Ti(b,"audio")}function Ui(b){return Ti(b,"video")}
  function Ti(b,c){var d=b.b.get(c);return d?d.Ka||d.stream:null}
  function Vi(b,c){return t(function e(){var f,g,h,k,l,m,n,p,v,x;return A(e,function(e){switch(e.j){case 1:return f=yd,u(e,le(b.a.L,f.ra),2);case 2:return b.C++,b.D=!1,g=b.C,h=b.a.L,k=new Map,l=new Set,k.set(f.ra,c),l.add(c),u(e,h.init(k,!1),3);case 3:return b.f?e["return"]():u(e,Wi(b,l),4);case 4:if(b.f)return e["return"]();n=(m=b.a.L.g.isTextVisible())||b.g.alwaysStreamText;b.C!=g||b.b.has(f.ra)||b.D||!n||(p=b.a.Ua(),v=Qi(b,p),x=Xi(c,v,0),b.b.set(f.ra,x),Yi(b,x,0));w(e);}})})}
  function Zi(b,c){var d=b.b.get("video");if(d){var e=d.stream;if(e)if(c){var f=e.trickModeVideo;f&&!d.Ka&&($i(b,f,!1,0,!1),d.Ka=e);}else if(e=d.Ka)d.Ka=null,$i(b,e,!0,0,!1);}}function aj(b,c,d,e){c.video&&$i(b,c.video,d,e,!1);c.audio&&$i(b,c.audio,d,e,!1);}
  function $i(b,c,d,e,f){var g=b.b.get(c.type);if(!g&&"text"==c.type&&b.g.ignoreTextStreamFailures)Vi(b,c);else if(g){var h=bj(b,c),k=Array.from(b.b.values()).every(function(b){return b.ia==g.ia});d&&h!=g.ia&&k?b.b.forEach(function(c){cj(b,c);}):(g.Ka&&(c.trickModeVideo?(g.Ka=c,c=c.trickModeVideo):g.Ka=null),(k=b.h[h])&&k.Cb&&(k=b.i.get(c.id))&&k.Cb&&(g.stream!=c||f)&&("text"==c.type&&de(b.a.L,pc(c.mimeType,c.codecs)),g.stream=c,g.jc=!0,dj(b,g,h)&&g.Pb.abort(),d&&(g.Ra?g.yc=!0:g.Ja?(g.Oa=!0,g.bc=e,g.yc=
  !0):(Pi(g),ej(b,g,!0,e)["catch"](function(c){if(b.a)b.a.onError(c);})))));}}function dj(b,c,d){if(!c.Pb)return !1;var e=b.a.Ua(),f=he(b.a.L,c.type);d=(d=fj(b,c,e,f,d))?d.a?d.a-d.b:null:null;if(null==d)return !1;var g=c.stream.initSegmentReference;g&&(d+=(g.a?g.a-g.b:null)||0);g=b.a.getBandwidthEstimate();return 8*d/g<f-e-Math.max(b.c.minBufferTime||0,b.g.rebufferingGoal)||c.Pb.b.a>d?!0:!1}
  function gj(b){function c(c){var f=b.a.L;"text"==c?(c=f.a,c=null==c.a||null==c.b?!1:d>=c.a&&d<c.b):(c=ge(f,c),c=qd(c,d,e));return c}var d=b.a.Ua(),e=b.g.smallGapLimit,f=Qi(b,d);if(mc(b.b.values(),function(b){return b.ia==f}))for(var g=r(b.b.keys()),h=g.next();!h.done;h=g.next())h=h.value,c(h)||cj(b,b.b.get(h));else mc(b.b.keys(),c)||b.b.forEach(function(c){cj(b,c);});}
  function cj(b,c){c.Ra||c.Oa||(c.Ja?(c.Oa=!0,c.bc=0):null==fe(b.a.L,c.type)?null==c.Ga&&Yi(b,c,0):(Pi(c),ej(b,c,!1,0)["catch"](function(c){if(b.a)b.a.onError(c);})));}
  function Ri(b,c,d,e,f){return t(function h(){var k,l,m,n,p,v,x;return A(h,function(h){switch(h.j){case 1:return k=b.a.Ua(),l=Qi(b,k),m=yd,n=new Map,p=new Set,c&&(n.set(m.Db,c),p.add(c)),d&&(n.set(m.Pa,d),p.add(d)),e&&(n.set(m.ra,e),p.add(e)),v=b.a.L,x=b.g.forceTransmuxTS,u(h,v.init(n,x),2);case 2:if(b.f)return h["return"]();hj(b);return u(h,Wi(b,p),3);case 3:if(b.f)return h["return"]();n.forEach(function(c,d){if(!b.b.has(d)){var e=Xi(c,l,f);b.b.set(d,e);Yi(b,e,0);}});w(h);}})})}
  function Xi(b,c,d){return {stream:b,type:b.type,rb:null,Da:null,Ka:null,jc:!0,ia:c,endOfStream:!1,Ja:!1,Ga:null,Oa:!1,bc:0,yc:!1,Ra:!1,jd:!1,Nb:!1,md:d||0,Pb:null}}
  function ij(b,c){var d=b.h[c];if(d)return d.promise;d={promise:new F,Cb:!1};b.h[c]=d;for(var e=new Set,f=r(b.c.periods[c].variants),g=f.next();!g.done;g=f.next())g=g.value,g.video&&e.add(g.video),g.video&&g.video.trickModeVideo&&e.add(g.video.trickModeVideo),g.audio&&e.add(g.audio);f=r(b.c.periods[c].textStreams);for(g=f.next();!g.done;g=f.next())e.add(g.value);b.u=b.u.then(function(){if(!this.f)return Wi(this,e)}.bind(b)).then(function(){this.f||(this.h[c].promise.resolve(),this.h[c].Cb=!0);}.bind(b))["catch"](function(b){this.f||
  (this.h[c].promise["catch"](function(){}),this.h[c].promise.reject(),delete this.h[c],this.a.onError(b));}.bind(b));return d.promise}
  function Wi(b,c){return t(function e(){var f,g,h,k,l,m,n;return A(e,function(e){switch(e.j){case 1:f=[];for(var p=r(c),x=p.next();!x.done;x=p.next())g=x.value,(h=b.i.get(g.id))?f.push(h.promise):(b.i.set(g.id,{promise:new F,Cb:!1}),f.push(g.createSegmentIndex()));xa(e,2);return u(e,Promise.all(f),4);case 4:if(b.f)return e["return"]();za(e,3);break;case 2:k=Ca(e);if(b.f)return e["return"]();e=r(c);for(x=e.next();!x.done;x=e.next())l=x.value,b.i.get(l.id).promise["catch"](function(){}),b.i.get(l.id).promise.reject(),
  b.i["delete"](l.id);throw k;case 3:p=r(c);for(x=p.next();!x.done;x=p.next())m=x.value,n=b.i.get(m.id),n.Cb||(n.promise.resolve(),n.Cb=!0);w(e);}})})}function hj(b){var c=b.c.presentationTimeline.Y();Infinity>c?b.a.L.xa(c):b.a.L.xa(Math.pow(2,32));}
  function jj(b,c){if(!b.f&&!c.Ja&&null!=c.Ga&&!c.Ra)if(c.Ga=null,c.Oa)ej(b,c,c.yc,c.bc);else{try{var d=kj(b,c);null!=d&&(Yi(b,c,d),c.Nb=!1);}catch(e){lj(b,e);return}d=Array.from(b.b.values());mj(b,c);b.s&&d.every(function(b){return b.endOfStream})&&b.a.L.endOfStream().then(function(){if(!this.f){var b=this.a.L.Y();0!=b&&b<this.c.presentationTimeline.Y()&&this.c.presentationTimeline.xa(b);}}.bind(b));}}
  function kj(b,c){if(nj(c))return b.a.L.tc(c.stream.originalId||""),null;var d=b.a.Ua(),e=oj(b,c,d),f=bj(b,c.stream),g=Qi(b,e),h=ie(b.a.L,c.type,d),k=Math.max(b.c.minBufferTime||0,b.g.rebufferingGoal,b.g.bufferingGoal)*b.l;if(e>=b.c.presentationTimeline.Y())return c.endOfStream=!0,"video"==c.type&&(e=b.b.get("text"))&&"application/cea-608"==e.stream.mimeType&&(e.endOfStream=!0),null;c.endOfStream=!1;c.ia=g;if(g!=f)return null;if(h>=k)return .5;g=he(b.a.L,c.type);g=fj(b,c,d,g,f);if(!g)return 1;var l=
  Infinity;Array.from(b.b.values()).forEach(function(c){nj(c)||(c=oj(b,c,d),l=Math.min(l,c));});if(e>=l+b.c.presentationTimeline.b)return 1;c.md=0;pj(b,c,d,f,g);return null}function oj(b,c,d){if(!c.rb||!c.Da)return Math.max(d,c.md);d=bj(b,c.rb);return b.c.periods[d].startTime+c.Da.endTime}
  function fj(b,c,d,e,f){if(c.Da&&c.stream==c.rb)return qj(b,c,f,c.Da.position+1);c.Da?(d=bj(b,c.rb),d=c.stream.findSegmentPosition(Math.max(0,b.c.periods[d].startTime+c.Da.endTime-b.c.periods[f].startTime))):d=c.stream.findSegmentPosition(Math.max(0,(e||d)-b.c.periods[f].startTime));if(null==d)return null;var g=null;null==e&&(g=qj(b,c,f,Math.max(0,d-1)));return g||qj(b,c,f,d)}
  function qj(b,c,d,e){d=b.c.periods[d];c=c.stream.getSegmentReference(e);if(!c)return null;e=b.c.presentationTimeline;b=e.Mb();e=e.pb();return d.startTime+c.endTime<b||d.startTime+c.startTime>e?null:c}
  function pj(b,c,d,e,f){var g=b.c.periods[e],h=c.stream,k=b.c.presentationTimeline.Y(),l=b.c.periods[e+1];e=rj(b,c,e,Math.max(0,g.startTime-.1),l?l.startTime+.01:k);c.Ja=!0;c.jc=!1;k=sj(b,c,f);Promise.all([e,k]).then(function(b){if(!this.f&&!this.m)return tj(this,c,d,g,h,f,b[1])}.bind(b)).then(function(){this.f||this.m||(c.Ja=!1,c.jd=!1,c.Oa||this.a.dd(),Yi(this,c,0),uj(this,h));}.bind(b))["catch"](function(b){this.f||this.m||(c.Ja=!1,"text"==c.type&&this.g.ignoreTextStreamFailures?this.b["delete"]("text"):
  7001==b.code?(c.Ja=!1,c.Ga=null,Yi(this,c,0)):3017==b.code?vj(this,c,b):(c.Nb=!0,b.severity=2,lj(this,b)));}.bind(b));}function vj(b,c,d){if(!Array.from(b.b.values()).some(function(b){return b!=c&&b.jd})){var e=Math.round(100*b.l);if(20<e)b.l-=.2;else if(4<e)b.l-=.04;else{c.Nb=!0;b.m=!0;b.a.onError(d);return}c.jd=!0;}Yi(b,c,4);}
  function rj(b,c,d,e,f){if(!c.jc)return Promise.resolve();d=me(b.a.L,c.type,b.c.periods[d].startTime-c.stream.presentationTimeOffset,e,f);if(!c.stream.initSegmentReference)return d;b=sj(b,c,c.stream.initSegmentReference).then(function(b){if(!this.f)return je(this.a.L,c.type,b,null,null,c.stream.closedCaptions&&0<c.stream.closedCaptions.size)}.bind(b))["catch"](function(b){c.jc=!0;return Promise.reject(b)});return Promise.all([d,b])}
  function tj(b,c,d,e,f,g,h){var k=f.closedCaptions&&0<f.closedCaptions.size;null!=f.emsgSchemeIdUris&&0<f.emsgSchemeIdUris.length&&(new Q).fa("emsg",b.K.bind(b,e,g,f.emsgSchemeIdUris)).parse(h);return wj(b,c,d).then(function(){if(!this.f)return je(this.a.L,c.type,h,g.startTime+e.startTime,g.endTime+e.startTime,k)}.bind(b)).then(function(){if(!this.f)return c.rb=f,c.Da=g,Promise.resolve()}.bind(b))}
  Oi.prototype.K=function(b,c,d,e){var f=e.reader.gd(),g=e.reader.gd(),h=e.reader.G(),k=e.reader.G(),l=e.reader.G(),m=e.reader.G();e=e.reader.Za(e.reader.J.byteLength-e.reader.ca());b=b.startTime+c.startTime+k/h;if(d.includes(f))if("urn:mpeg:dash:event:2012"==f)this.a.mf();else this.a.onEvent(new I("emsg",{detail:{startTime:b,endTime:b+l/h,schemeIdUri:f,value:g,timescale:h,presentationTimeDelta:k,eventDuration:l,id:m,messageData:e}}));};
  function wj(b,c,d){var e=Math.max(b.g.bufferBehind,b.c.presentationTimeline.b),f=fe(b.a.L,c.type);if(null==f)return Promise.resolve();d=d-f-e;return 0>=d?Promise.resolve():b.a.L.remove(c.type,f,f+d).then(function(){}.bind(b))}
  function uj(b,c){if(!b.s){var d=Array.from(b.b.values());if(1!=d.length||"text"!=d[0].type)b.s=d.every(function(b){return "text"==b.type?!0:!b.Oa&&!b.Ra&&b.Da});if(b.s){d=bj(b,c);b.h[d]||ij(b,d).then(function(){this.f||this.a.Nd();}.bind(b))["catch"](td.kc);for(d=0;d<b.c.periods.length;++d)ij(b,d)["catch"](td.kc);b.a.wf&&b.a.wf();}}}
  function mj(b,c){var d=bj(b,c.stream);if(c.ia!=d){var e=c.ia,f=Array.from(b.b.values());f.every(function(b){return b.ia==e||nj(b)})&&f.every(xj)&&ij(b,e).then(function(){if(!this.f&&f.every(function(b){var c=xj(b),d=bj(this,b.stream);return nj(b)?!0:c&&b.ia==e&&d!=e}.bind(this))){var b=this.c.periods[e],c=this.a.Od(b),d=new Map;c.variant&&c.variant.video&&d.set("video",c.variant.video);c.variant&&c.variant.audio&&d.set("audio",c.variant.audio);c.text&&d.set("text",c.text);c=r(this.b.keys());for(var l=
  c.next();!l.done;l=c.next())if(l=l.value,!d.has(l)&&"text"!=l){this.a.onError(new D(2,5,5005));return}c=r(Array.from(d.keys()));for(l=c.next();!l.done;l=c.next())if(l=l.value,!this.b.has(l))if("text"==l)Ri(this,null,null,d.get("text"),b.startTime),d["delete"](l);else{this.a.onError(new D(2,5,5005));return}c=r(Array.from(this.b.keys()));for(l=c.next();!l.done;l=c.next()){l=l.value;var m=this.b.get(l),n=d.get(l);if(n){var p=nj(m);p&&(m.ia=e,m.md=b.startTime);$i(this,n,!1,0,!1);p&&nj(m)||Yi(this,this.b.get(l),
  0);}else this.b["delete"](l);}this.a.Nd();}}.bind(b))["catch"](td.kc);}}function nj(b){return b&&"text"==b.type&&"application/cea-608"==b.stream.mimeType}function xj(b){return !b.Ja&&null==b.Ga&&!b.Oa&&!b.Ra}function Qi(b,c){var d=oi(b.c.periods,c+zd);return d?b.c.periods.indexOf(d):0}
  function bj(b,c){for(var d=b.c.periods,e=0;e<d.length;e++){for(var f=d[e],g=new Set,h=r(f.variants),k=h.next();!k.done;k=h.next())k=k.value,k.audio&&g.add(k.audio),k.video&&g.add(k.video),k.video&&k.video.trickModeVideo&&g.add(k.video.trickModeVideo);f=r(f.textStreams);for(h=f.next();!h.done;h=f.next())g.add(h.value);if(g.has(c))return e}return -1}function sj(b,c,d){d=wg(d.c(),d.b,d.a,b.g.retryParameters);b=b.a.tb.request(1,d);c.Pb=b;return b.promise.then(function(b){c.Pb=null;return b.data})}
  function ej(b,c,d,e){return t(function g(){var h,k,l;return A(g,function(g){switch(g.j){case 1:return c.Oa=!1,c.yc=!1,c.bc=0,c.Ra=!0,e?(k=b.a.Ua(),l=b.a.L.Y(),h=b.a.L.remove(c.type,k+e,l)):h=le(b.a.L,c.type).then(function(){if(!this.f&&d)return this.a.L.flush(c.type)}.bind(b)),u(g,h,2);case 2:if(b.f)return g["return"]();c.rb=null;c.Da=null;c.Ra=!1;c.endOfStream=!1;Yi(b,c,0);w(g);}})})}
  function Yi(b,c,d){c.Ga=(new wb(function(){return t(function f(){var d;return A(f,function(f){switch(f.j){case 1:return xa(f,2),u(f,jj(b,c),4);case 4:za(f,0);break;case 2:d=Ca(f);if(b.a)b.a.onError(d);w(f);}})})})).P(d);}function Pi(b){null!=b.Ga&&(b.Ga.stop(),b.Ga=null);}function lj(b,c){zb(b.F).then(function(){this.f||(this.a.onError(c),c.handled||this.g.failureCallback(c));}.bind(b));}function yj(b,c,d,e,f,g){if(200<=d&&299>=d&&202!=d)return {uri:f||e,fd:e,data:c,headers:b,fromCache:!!b["x-shaka-from-cache"]};f=null;try{f=Cc(c);}catch(h){}throw new D(401==d||403==d?2:1,1,1001,e,d,f,b,g);}function zj(b,c,d,e){var f=new zj.b;nc(c.headers).forEach(function(b,c){f.append(c,b);});var g=new zj.a,h={Ad:!1,ie:!1};b=zj.l(b,d,{body:c.body||void 0,headers:f,method:c.method,signal:g.signal,credentials:c.allowCrossSiteCredentials?"include":void 0},h,e);b=new H(b,function(){h.Ad=!0;g.abort();return Promise.resolve()});if(c=c.retryParameters.timeout){var k=new C(function(){h.ie=!0;g.abort();});k.P(c/1E3);b["finally"](function(){k.stop();});}return b}B("shaka.net.HttpFetchPlugin",zj);
  zj.l=function(b,c,d,e,f){return t(function h(){var k,l,m,n,p,v,x,z,y,G,E,Z,aa,fa;return A(h,function(h){switch(h.j){case 1:return k=zj.g,l=zj.c,v=p=0,x=Date.now(),xa(h,2),u(h,k(b,d),4);case 4:return m=h.o,z=m.clone().body.getReader(),G=(y=m.headers.get("Content-Length"))?parseInt(y,10):0,E=function(b){function c(){return t(function ha(){var d,e;return A(ha,function(h){switch(h.j){case 1:return xa(h,2),u(h,z.read(),4);case 4:d=h.o;za(h,3);break;case 2:return Ca(h),h["return"]();case 3:d.done||(p+=
  d.value.byteLength);e=Date.now();if(100<e-x||d.done)f(e-x,p-v,G-p),v=p,x=e;d.done?b.close():(b.enqueue(d.value),c());w(h);}})})}c();},new l({start:E}),u(h,m.arrayBuffer(),5);case 5:n=h.o;za(h,3);break;case 2:Z=Ca(h);if(e.Ad)throw new D(1,1,7001,b,c);if(e.ie)throw new D(1,1,1003,b,c);throw new D(1,1,1002,b,Z,c);case 3:return aa={},fa=m.headers,fa.forEach(function(b,c){aa[c.trim()]=b;}),h["return"](yj(aa,n,m.status,b,m.url,c))}})})};
  zj.isSupported=function(){if(window.ReadableStream)try{new ReadableStream({});}catch(b){return !1}else return !1;return !(!window.fetch||!window.AbortController)};zj.isSupported=zj.isSupported;zj.g=window.fetch;zj.a=window.AbortController;zj.c=window.ReadableStream;zj.b=window.Headers;zj.isSupported()&&(Sb("http",zj,2),Sb("https",zj,2));function Aj(b,c,d,e){var f=new Aj.f,g=Date.now(),h=0,k=new Promise(function(k,m){f.open(c.method,b,!0);f.responseType="arraybuffer";f.timeout=c.retryParameters.timeout;f.withCredentials=c.allowCrossSiteCredentials;f.onabort=function(){m(new D(1,1,7001,b,d));};f.onload=function(c){c=c.target;var e=c.getAllResponseHeaders().trim().split("\r\n"),f={};e=r(e);for(var g=e.next();!g.done;g=e.next())g=g.value.split(": "),f[g[0].toLowerCase()]=g.slice(1).join(": ");try{var h=yj(f,c.response,c.status,b,c.responseURL,
  d);k(h);}catch(G){m(G);}};f.onerror=function(c){m(new D(1,1,1002,b,c,d));};f.ontimeout=function(){m(new D(1,1,1003,b,d));};f.onprogress=function(b){var c=Date.now();if(100<c-g||b.lengthComputable&&b.loaded==b.total)e(c-g,b.loaded-h,b.total-b.loaded),h=b.loaded,g=c;};for(var l in c.headers)f.setRequestHeader(l.toLowerCase(),c.headers[l]);f.send(c.body);});return new H(k,function(){f.abort();return Promise.resolve()})}B("shaka.net.HttpXHRPlugin",Aj);Aj.f=window.XMLHttpRequest;Sb("http",Aj,1);
  Sb("https",Aj,1);function Bj(){this.a=this.f=this.b=0;this.c=new Map;this.g=0;}function Cj(b,c){b.b+=c;var d=b.g;b.g++;b.c.set(d,c);return d}Bj.prototype.close=function(b,c){if(this.c.has(b)){var d=this.c.get(b);this.c["delete"](b);this.f+=d;this.a+=c;}};function Dj(b,c,d){this.h=b;this.b=new Map;this.c=!1;this.g=c;this.f=d;this.a=new Bj;}Dj.prototype.destroy=function(){this.c=!0;return Promise.all(this.b.values()).then(function(){},function(){})};
  function Ej(b,c,d,e,f,g){var h=Cj(b.a,e);e=b.b.get(c)||Promise.resolve();b.b.set(c,e.then(function(){return t(function l(){var c,e,p,v;return A(l,function(l){switch(l.j){case 1:return u(l,Fj(b,d),2);case 2:c=l.o;if(b.c)throw new D(2,9,7001);if(f){e=new Uint8Array(c);p=new Hf(e);for(var m=r(p.data),n=m.next();!n.done;n=m.next())v=n.value,b.f(v);}b.a.close(h,c.byteLength);m=b.a;b.g(0==m.b?0:m.f/m.b,b.a.a);return l["return"](g(c))}})})}));}
  function Gj(b){return t(function d(){return A(d,function(d){switch(d.j){case 1:return u(d,Promise.all(b.b.values()),2);case 2:return d["return"](b.a.a)}})})}function Fj(b,c){return t(function e(){var f,g;return A(e,function(e){switch(e.j){case 1:return f=b.h.request(1,c),u(e,f.promise,2);case 2:return g=e.o,e["return"](g.data)}})})}function Hj(b,c){var d=this;this.c=b;this.b=b.objectStore(c);this.a=new F;b.onabort=function(b){b.preventDefault();d.a.reject();};b.onerror=function(b){b.preventDefault();d.a.reject();};b.oncomplete=function(){d.a.resolve();};}Hj.prototype.abort=function(){try{this.c.abort();}catch(b){}return this.a["catch"](function(){})};
  function Ij(b,c){return new Promise(function(d,e){var f=b.b.openCursor();f.onerror=e;f.onsuccess=function(b){b=b.target.result;if(!b)return d();c(b.key,b.value,b);b["continue"]();};})}Hj.prototype.store=function(){return this.b};Hj.prototype.promise=function(){return this.a};function Jj(b){this.b=b;this.a=[];}Jj.prototype.destroy=function(){return Promise.all(this.a.map(function(b){return b.abort()}))};function Kj(b,c){return Lj(b,c,"readonly")}function Mj(b,c){return Lj(b,c,"readwrite")}function Lj(b,c,d){d=b.b.transaction([c],d);var e=new Hj(d,c);b.a.push(e);e.promise().then(function(){Mb(b.a,e);},function(){Mb(b.a,e);});return e}function Nj(b){this.a=new Jj(b);}Nj.prototype.destroy=function(){return this.a.destroy()};Nj.prototype.getAll=function(){var b=this;return t(function d(){var e,f;return A(d,function(d){switch(d.j){case 1:return e=Kj(b.a,"session-ids"),f=[],u(d,Ij(e,function(b,d){f.push(d);}),2);case 2:return u(d,e.promise(),3);case 3:return d["return"](f)}})})};Nj.prototype.add=function(b){var c=Mj(this.a,"session-ids"),d=c.store();b=r(b);for(var e=b.next();!e.done;e=b.next())d.add(e.value);return c.promise()};
  Nj.prototype.remove=function(b){var c=this;return t(function e(){var f;return A(e,function(e){switch(e.j){case 1:return f=Mj(c.a,"session-ids"),u(e,Ij(f,function(c,e,f){0<=b.indexOf(e.sessionId)&&f["delete"]();}),2);case 2:return u(e,f.promise(),0)}})})};function Oj(){this.a=new Map;}Oj.prototype.destroy=function(){for(var b=[],c=r(this.a.values()),d=c.next();!d.done;d=c.next())b.push(d.value.destroy());this.a.clear();return Promise.all(b)};Oj.prototype.init=function(){var b=this;Pj.forEach(function(c,d){var e=c();e&&b.a.set(d,e);});for(var c=[],d=r(this.a.values()),e=d.next();!e.done;e=d.next())c.push(e.value.init());return Promise.all(c)};
  function Qj(b){var c=null;b.a.forEach(function(b,e){b.getCells().forEach(function(b,d){b.hasFixedKeySpace()||c||(c={path:{wa:e,ba:d},ba:b});});});if(c)return c;throw new D(2,9,9013,"Could not find a cell that supports add-operations");}function Rj(b,c){b.a.forEach(function(b,e){b.getCells().forEach(function(b,d){c({wa:e,ba:d},b);});});}
  function Sj(b,c,d){b=b.a.get(c);if(!b)throw new D(2,9,9013,"Could not find mechanism with name "+c);c=b.getCells().get(d);if(!c)throw new D(2,9,9013,"Could not find cell with name "+d);return c}function Tj(b,c){b.a.forEach(function(b){c(b.getEmeSessionCell());});}function Uj(b){var c=Array.from(b.a.keys());if(!c.length)throw new D(2,9,9E3,"No supported storage mechanisms found");return b.a.get(c[0]).getEmeSessionCell()}
  Oj.prototype.erase=function(){var b=this;return t(function d(){var e,f,g;return A(d,function(d){switch(d.j){case 1:return e=Array.from(b.a.values()),f=0<e.length,f||(g=Pj,g.forEach(function(b){(b=b())&&e.push(b);})),u(d,Promise.all(e.map(function(b){return b.erase()})),2);case 2:if(f)d.A(0);else return u(d,Promise.all(e.map(function(b){return b.destroy()})),0)}})})};function Vj(b,c){Pj.set(b,c);}B("shaka.offline.StorageMuxer.register",Vj);B("shaka.offline.StorageMuxer.unregister",function(b){Pj["delete"](b);});
  var Pj=new Map;function Wj(b){this.a=new Jj(b);}q=Wj.prototype;q.destroy=function(){return this.a.destroy()};q.hasFixedKeySpace=function(){return !0};q.addSegments=function(){return Xj("segment")};q.removeSegments=function(b,c){return Yj(this,"segment",b,c)};q.getSegments=function(b){return Zj(this,"segment",b).then(function(b){return b.map(ak)})};q.addManifests=function(){return Xj("manifest")};
  q.updateManifestExpiration=function(b,c){var d=Mj(this.a,"manifest"),e=d.store(),f=new F;e.get(b).onsuccess=function(d){(d=d.target.result)?(d.expiration=c,e.put(d),f.resolve()):f.reject(new D(2,9,9012,"Could not find values for "+b));};return d.promise().then(function(){return f})};q.removeManifests=function(b,c){return Yj(this,"manifest",b,c)};q.getManifests=function(b){return Zj(this,"manifest",b).then(function(b){return b.map(bk)})};
  q.getAllManifests=function(){var b=this;return t(function d(){var e,f;return A(d,function(d){switch(d.j){case 1:return e=Kj(b.a,"manifest"),f=new Map,u(d,Ij(e,function(b,d){f.set(b,bk(d));}),2);case 2:return u(d,e.promise(),3);case 3:return d["return"](f)}})})};function Xj(b){return Promise.reject(new D(2,9,9011,"Cannot add new value to "+b))}function Yj(b,c,d,e){b=Mj(b.a,c);var f=b.store();d.forEach(function(b){f["delete"](b).onsuccess=function(){return e(b)};});return b.promise()}
  function Zj(b,c,d){b=Kj(b.a,c);var e=b.store(),f={},g=[];d.forEach(function(b){e.get(b).onsuccess=function(c){c=c.target.result;void 0==c&&g.push(b);f[b]=c;};});return b.promise().then(function(){return g.length?Promise.reject(new D(2,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}
  function bk(b){return {originalManifestUri:b.originalManifestUri,duration:b.duration,size:b.size,expiration:null==b.expiration?Infinity:b.expiration,periods:b.periods.map(ck),sessionIds:b.sessionIds,drmInfo:b.drmInfo,appMetadata:b.appMetadata}}function ck(b){dk(b);b.streams.forEach(function(){});return {startTime:b.startTime,streams:b.streams.map(ek)}}
  function ek(b){var c=b.df?fk(b.df):null;return {id:b.id,originalId:null,primary:b.primary,presentationTimeOffset:b.presentationTimeOffset,contentType:b.contentType,mimeType:b.mimeType,codecs:b.codecs,frameRate:b.frameRate,pixelAspectRatio:void 0,kind:b.kind,language:b.language,label:b.label,width:b.width,height:b.height,initSegmentKey:c,encrypted:b.encrypted,keyId:b.keyId,segments:b.segments.map(gk),variantIds:b.variantIds}}
  function gk(b){var c=fk(b.uri);return {startTime:b.startTime,endTime:b.endTime,dataKey:c}}function ak(b){return {data:b.data}}function fk(b){var c;if((c=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(b))||(c=/^offline:segment\/([0-9]+)$/.exec(b)))return Number(c[1]);throw new D(2,9,9004,"Could not parse uri "+b);}
  function dk(b){var c=b.streams.filter(function(b){return "audio"==b.contentType}),d=b.streams.filter(function(b){return "video"==b.contentType});if(!c.every(function(b){return b.variantIds})||!d.every(function(b){return b.variantIds})){c.forEach(function(b){b.variantIds=[];});d.forEach(function(b){b.variantIds=[];});var e=0;if(d.length&&!c.length){var f=e++;d.forEach(function(b){b.variantIds.push(f);});}if(!d.length&&c.length){var g=e++;c.forEach(function(b){b.variantIds.push(g);});}d.length&&c.length&&c.forEach(function(b){d.forEach(function(c){var d=
  e++;b.variantIds.push(d);c.variantIds.push(d);});});}}function hk(b,c,d,e){this.a=new Jj(b);this.c=c;this.b=d;this.f=e;}q=hk.prototype;q.destroy=function(){return this.a.destroy()};q.hasFixedKeySpace=function(){return this.f};q.addSegments=function(b){return ik(this,this.c,b)};q.removeSegments=function(b,c){return jk(this,this.c,b,c)};q.getSegments=function(b){return kk(this,this.c,b)};q.addManifests=function(b){return ik(this,this.b,b)};
  q.updateManifestExpiration=function(b,c){var d=Mj(this.a,this.b),e=d.store();e.get(b).onsuccess=function(d){if(d=d.target.result)d.expiration=c,e.put(d,b);};return d.promise()};q.removeManifests=function(b,c){return jk(this,this.b,b,c)};q.getManifests=function(b){return kk(this,this.b,b)};
  q.getAllManifests=function(){var b=this;return t(function d(){var e,f;return A(d,function(d){switch(d.j){case 1:return e=Kj(b.a,b.b),f=new Map,u(d,Ij(e,function(b,d){f.set(b,d);}),2);case 2:return u(d,e.promise(),3);case 3:return d["return"](f)}})})};
  function ik(b,c,d){if(b.f)return Promise.reject(new D(1,9,9011,"Cannot add new value to "+c));b=Mj(b.a,c);var e=b.store(),f=[];d.forEach(function(b){e.add(b).onsuccess=function(b){f.push(b.target.result);};});return b.promise().then(function(){return f})}function jk(b,c,d,e){b=Mj(b.a,c);var f=b.store();d.forEach(function(b){f["delete"](b).onsuccess=function(){return e(b)};});return b.promise()}
  function kk(b,c,d){b=Kj(b.a,c);var e=b.store(),f={},g=[];d.forEach(function(b){var c=e.get(b);c.onsuccess=function(){void 0==c.result&&g.push(b);f[b]=c.result;};});return b.promise().then(function(){return g.length?Promise.reject(new D(1,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}function lk(){this.g=this.c=this.b=this.a=this.f=null;}q=lk.prototype;
  q.init=function(){var b=this,c=new F,d=window.indexedDB.open("shaka_offline_db",4);d.onsuccess=function(d){d=d.target.result;b.f=d;var e=d.objectStoreNames;e=e.contains("manifest")&&e.contains("segment")?new Wj(d):null;b.a=e;e=d.objectStoreNames;e=e.contains("manifest-v2")&&e.contains("segment-v2")?new hk(d,"segment-v2","manifest-v2",!0):null;b.b=e;e=d.objectStoreNames;e=e.contains("manifest-v3")&&e.contains("segment-v3")?new hk(d,"segment-v3","manifest-v3",!1):null;b.c=e;d=d.objectStoreNames.contains("session-ids")?
  new Nj(d):null;b.g=d;c.resolve();};d.onupgradeneeded=function(b){b=b.target.result;for(var c=r(["segment-v3","manifest-v3","session-ids"]),d=c.next();!d.done;d=c.next())d=d.value,b.objectStoreNames.contains(d)||b.createObjectStore(d,{autoIncrement:!0});};d.onerror=function(b){c.reject(new D(2,9,9001,d.error));b.preventDefault();};return c};
  q.destroy=function(){var b=this;return t(function d(){return A(d,function(d){switch(d.j){case 1:if(!b.a){d.A(2);break}return u(d,b.a.destroy(),2);case 2:if(!b.b){d.A(4);break}return u(d,b.b.destroy(),4);case 4:if(!b.c){d.A(6);break}return u(d,b.c.destroy(),6);case 6:if(!b.g){d.A(8);break}return u(d,b.g.destroy(),8);case 8:b.f&&b.f.close(),w(d);}})})};q.getCells=function(){var b=new Map;this.a&&b.set("v1",this.a);this.b&&b.set("v2",this.b);this.c&&b.set("v3",this.c);return b};q.getEmeSessionCell=function(){return this.g};
  q.erase=function(){var b=this;return t(function d(){return A(d,function(d){switch(d.j){case 1:if(!b.a){d.A(2);break}return u(d,b.a.destroy(),2);case 2:if(!b.b){d.A(4);break}return u(d,b.b.destroy(),4);case 4:if(!b.c){d.A(6);break}return u(d,b.c.destroy(),6);case 6:return b.f&&b.f.close(),u(d,mk(),8);case 8:return b.f=null,b.a=null,b.b=null,b.c=null,u(d,b.init(),0)}})})};
  function mk(){var b=new F,c=window.indexedDB.deleteDatabase("shaka_offline_db");c.onblocked=function(){};c.onsuccess=function(){b.resolve();};c.onerror=function(d){b.reject(new D(2,9,9001,c.error));d.preventDefault();};return b}Vj("idb",function(){return window.indexedDB?new lk:null});function nk(b,c,d,e){this.a=b;this.g=c;this.f=d;this.c=e;this.b=["offline:",b,"/",c,"/",d,"/",e].join("");}nk.prototype.wa=function(){return this.g};nk.prototype.ba=function(){return this.f};nk.prototype.key=function(){return this.c};nk.prototype.toString=function(){return this.b};
  function ok(b){b=/^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(b);if(null==b)return null;var c=b[1];if("manifest"!=c&&"segment"!=c)return null;var d=b[2];if(!d)return null;var e=b[3];return e&&null!=c?new nk(c,d,e,Number(b[4])):null}function pk(b,c){this.b=b;this.a=c;}function qk(b,c){var d=new V(null,0);d.xa(c.duration);var e=c.periods.map(function(c){return rk(b,c,d)}),f=c.drmInfo?[c.drmInfo]:[];c.drmInfo&&e.forEach(function(b){b.variants.forEach(function(b){b.drmInfos=f;});});return {presentationTimeline:d,minBufferTime:2,offlineSessionIds:c.sessionIds,periods:e}}
  function rk(b,c,d){var e=c.streams.filter(function(b){return "audio"==b.contentType}),f=c.streams.filter(function(b){return "video"==b.contentType});e=sk(b,e,f);f=c.streams.filter(function(b){return "text"==b.contentType}).map(function(c){return tk(b,c)});c.streams.forEach(function(e){e=e.segments.map(function(c,d){return uk(b,d,c)});d.ub(e,c.startTime);});return {startTime:c.startTime,variants:Array.from(e.values()),textStreams:f}}
  function sk(b,c,d){for(var e=new Set,f=r(c),g=f.next();!g.done;g=f.next()){var h=r(g.value.variantIds);for(g=h.next();!g.done;g=h.next())e.add(g.value);}f=r(d);for(g=f.next();!g.done;g=f.next())for(h=r(g.value.variantIds),g=h.next();!g.done;g=h.next())e.add(g.value);f=new Map;e=r(e);for(g=e.next();!g.done;g=e.next())g=g.value,f.set(g,{id:g,language:"",primary:!1,audio:null,video:null,bandwidth:0,drmInfos:[],allowedByApplication:!0,allowedByKeySystem:!0});c=r(c);for(e=c.next();!e.done;e=c.next())for(e=
  e.value,g=tk(b,e),h=r(e.variantIds),e=h.next();!e.done;e=h.next())e=f.get(e.value),e.language=g.language,e.primary=e.primary||g.primary,e.audio=g;d=r(d);for(c=d.next();!c.done;c=d.next())for(e=c.value,c=tk(b,e),g=r(e.variantIds),e=g.next();!e.done;e=g.next())e=f.get(e.value),e.primary=e.primary||c.primary,e.video=c;return f}
  function tk(b,c){var d=c.segments.map(function(c,d){return uk(b,d,c)}),e=new T(d);d={id:c.id,originalId:c.originalId,createSegmentIndex:function(){return Promise.resolve()},findSegmentPosition:function(b){return e.find(b)},getSegmentReference:function(b){return e.get(b)},initSegmentReference:null,presentationTimeOffset:c.presentationTimeOffset,mimeType:c.mimeType,codecs:c.codecs,width:c.width||void 0,height:c.height||void 0,frameRate:c.frameRate||void 0,pixelAspectRatio:c.pixelAspectRatio||void 0,
  kind:c.kind,encrypted:c.encrypted,keyId:c.keyId,language:c.language,label:c.label||null,type:c.contentType,primary:c.primary,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],channelsCount:null,audioSamplingRate:null,closedCaptions:null};null!=c.initSegmentKey&&(d.initSegmentReference=vk(b,c.initSegmentKey));return d}function uk(b,c,d){var e=new nk("segment",b.b,b.a,d.dataKey);return new S(c,d.startTime,d.endTime,function(){return [e.toString()]},0,null)}
  function vk(b,c){var d=new nk("segment",b.b,b.a,c);return new Xf(function(){return [d.toString()]},0,null)}function wk(){this.a=null;}q=wk.prototype;q.configure=function(){};
  q.start=function(b){var c=this;return t(function e(){var f,g,h,k,l,m;return A(e,function(e){switch(e.j){case 1:f=ok(b);c.a=f;if(null==f||"manifest"!=f.a)return e["return"](Promise.reject(new D(2,1,9004,f)));g=new Oj;ya(e,2);return u(e,g.init(),4);case 4:return u(e,Sj(g,f.wa(),f.ba()),5);case 5:return h=e.o,u(e,h.getManifests([f.key()]),6);case 6:return k=e.o,l=k[0],m=new pk(f.wa(),f.ba()),e["return"](qk(m,l));case 2:return Da(e),u(e,g.destroy(),7);case 7:Ea(e,0);}})})};q.stop=function(){return Promise.resolve()};
  q.update=function(){};
  q.onExpirationUpdated=function(b,c){var d=this;return t(function f(){var g,h,k,l,m,n,p;return A(f,function(f){switch(f.j){case 1:return g=d.a,h=new Oj,xa(f,2,3),u(f,h.init(),5);case 5:return u(f,Sj(h,g.wa(),g.ba()),6);case 6:return k=f.o,u(f,k.getManifests([g.key()]),7);case 7:l=f.o;m=l[0];n=m.sessionIds.includes(b);p=void 0==m.expiration||m.expiration>c;if(!n||!p){f.A(3);break}return u(f,k.updateManifestExpiration(g.key(),c),3);case 3:return Da(f),u(f,h.destroy(),10);case 10:Ea(f,0);break;case 2:Ca(f),
  f.A(3);}})})};U.Bb("application/x-offline-manifest",wk);function xk(b){var c=ok(b);return c&&"manifest"==c.a?xk.h(b):c&&"segment"==c.a?xk.i(c.key(),c):Ab(new D(2,1,9004,b))}B("shaka.offline.OfflineScheme",xk);xk.h=function(b){b={uri:b,fd:b,data:new ArrayBuffer(0),headers:{"content-type":"application/x-offline-manifest"}};return Eb(b)};xk.i=function(b,c){var d=new Oj;return Eb(void 0).U(function(){return d.init()}).U(function(){return Sj(d,c.wa(),c.ba())}).U(function(b){return b.getSegments([c.key()])}).U(function(b){return {uri:c,fd:c,data:b[0].data,headers:{}}})["finally"](function(){return d.destroy()})};
  Sb("offline",xk);function yk(b,c,d){return t(function f(){var g,h,k,l,m,n;return A(f,function(f){switch(f.j){case 1:g=[];for(var p=[],x=r(d),z=x.next();!z.done;z=x.next()){z=z.value;for(var y=!1,G=r(p),E=G.next();!E.done;E=G.next())if(E=E.value,zk(E.info,z)){E.sessionIds.push(z.sessionId);y=!0;break}y||p.push({info:z,sessionIds:[z.sessionId]});}h=r(p);k=h.next();case 2:if(k.done){f.A(4);break}l=k.value;m=Ak(b,c,l);return u(f,m,5);case 5:n=f.o;g=g.concat(n);k=h.next();f.A(2);break;case 4:return f["return"](g)}})})}
  function Ak(b,c,d){return t(function f(){var g,h;return A(f,function(f){switch(f.j){case 1:return g=new Fc({tb:c,onError:function(){},mc:function(){},onExpirationUpdated:function(){},onEvent:function(){}}),xa(f,2),g.configure(b),u(f,Nc(g,d.info.keySystem,d.info.licenseUri,d.info.serverCertificate,d.info.audioCapabilities,d.info.videoCapabilities),4);case 4:za(f,3);break;case 2:return Ca(f),u(f,g.destroy(),5);case 5:return f["return"]([]);case 3:return xa(f,6),u(f,Uc(g),8);case 8:za(f,7);break;case 6:return Ca(f),
  u(f,g.destroy(),9);case 9:return f["return"]([]);case 7:return h=[],u(f,Promise.all(d.sessionIds.map(function(b){return t(function n(){return A(n,function(c){switch(c.j){case 1:return xa(c,2),u(c,Xc(g,b),4);case 4:h.push(b);za(c,0);break;case 2:Ca(c),w(c);}})})})),10);case 10:return u(f,g.destroy(),11);case 11:return f["return"](h)}})})}
  function zk(b,c){function d(b,c){return b.robustness==c.robustness&&b.contentType==c.contentType}return b.keySystem==c.keySystem&&b.licenseUri==c.licenseUri&&Ob(b.audioCapabilities,c.audioCapabilities,d)&&Ob(b.videoCapabilities,c.videoCapabilities,d)}function Bk(b,c){var d=Ck(),e=this;this.g=c;this.c=b;this.i=d;this.h=null;this.f=[];this.b=this.a=null;this.l=!0;this.m=Promise.resolve().then(function(){return Dk(e)});}Bk.prototype.destroy=function(){var b=this;return t(function d(){var e;return A(d,function(d){switch(d.j){case 1:return b.l=!1,b.b&&b.b.abort(),Ek(b),u(d,b.m,2);case 2:b.a&&b.a.va.Ya();for(var f=r(b.f),h=f.next();!h.done;h=f.next())e=h.value,e.va.Ya();b.a=null;b.f=[];b.g=null;w(d);}})})};
  function Fk(b,c){var d={vb:function(){},lc:function(){},Ya:function(){},onError:function(){},nc:function(){},xg:function(){}};b.f.push({create:c,va:d});b.b&&b.b.abort();Ek(b);return d}
  function Dk(b){return t(function d(){return A(d,function(d){switch(d.j){case 1:if(b.l){if(0==b.f.length||b.a&&!b.a.Va)var e=!1;else{b.a&&(b.a.va.Ya(),b.a=null);e=b.f.shift();var g=e.create(b.i);g?(e.va.vb(),b.a={node:g.node,payload:g.payload,Va:g.Va,va:e.va}):e.va.nc();e=!0;}e?e=Promise.resolve():b.a?e=Gk(b):(b.g.kf(b.c),b.h=new F,e=b.h);return u(d,e,1)}d.A(0);}})})}
  function Gk(b){return t(function d(){var e,f;return A(d,function(d){switch(d.j){case 1:return b.c=b.g.Te(b.c,b.i,b.a.node,b.a.payload),xa(d,2),b.b=b.g.Be(b.c,b.i,b.a.payload),u(d,b.b.promise,4);case 4:b.b=null;b.c==b.a.node&&(b.a.va.lc(),b.a=null);za(d,0);break;case 2:e=Ca(d);if(7001==e.code)b.a.va.Ya();else b.a.va.onError(e);b.a=null;b.b=null;f=b;return u(d,b.g.handleError(b.i,e),5);case 5:f.c=d.o,w(d);}})})}function Ek(b){b.h&&(b.h.resolve(),b.h=null);}function Hk(b){this.a=null;for(var c=0;c<b.textTracks.length;++c){var d=b.textTracks[c];d.mode="disabled";"Shaka Player TextTrack"==d.label&&(this.a=d);}this.a||(this.a=b.addTextTrack("subtitles","Shaka Player TextTrack"));this.a.mode="hidden";}B("shaka.text.SimpleTextDisplayer",Hk);Hk.prototype.remove=function(b,c){if(!this.a)return !1;Ik(this.a,function(d){return d.startTime<c&&d.endTime>b});return !0};Hk.prototype.remove=Hk.prototype.remove;
  Hk.prototype.append=function(b){for(var c=Jk,d=[],e=0;e<b.length;e++){var f=c(b[e]);f&&d.push(f);}d.slice().sort(function(b,c){return b.startTime!=c.startTime?b.startTime-c.startTime:b.endTime!=c.endTime?b.endTime-c.startTime:d.indexOf(c)-d.indexOf(b)}).forEach(function(b){this.a.addCue(b);}.bind(this));};Hk.prototype.append=Hk.prototype.append;Hk.prototype.destroy=function(){this.a&&Ik(this.a,function(){return !0});this.a=null;return Promise.resolve()};Hk.prototype.destroy=Hk.prototype.destroy;
  Hk.prototype.isTextVisible=function(){return "showing"==this.a.mode};Hk.prototype.isTextVisible=Hk.prototype.isTextVisible;Hk.prototype.setTextVisibility=function(b){this.a.mode=b?"showing":"hidden";};Hk.prototype.setTextVisibility=Hk.prototype.setTextVisibility;
  function Jk(b){if(b.startTime>=b.endTime)return null;var c=new VTTCue(b.startTime,b.endTime,b.payload);c.lineAlign=b.lineAlign;c.positionAlign=b.positionAlign;c.size=b.size;try{c.align=b.textAlign;}catch(d){}"center"==b.textAlign&&"center"!=c.align&&(c.align="middle");"vertical-lr"==b.writingMode?c.vertical="lr":"vertical-rl"==b.writingMode&&(c.vertical="rl");1==b.lineInterpretation&&(c.snapToLines=!1);null!=b.line&&(c.line=b.line);null!=b.position&&(c.position=b.position);return c}
  function Ik(b,c){var d=b.mode;b.mode="showing"==d?"showing":"hidden";for(var e=b.cues,f=e.length-1;0<=f;f--){var g=e[f];g&&c(g)&&b.removeCue(g);}b.mode=d;}function Kk(b,c,d,e,f){var g=f in e,h=!0,k;for(k in c){var l=f+"."+k,m=g?e[f]:d[k];g||k in d?void 0===c[k]?void 0===m||g?delete b[k]:b[k]=Kb(m):m.constructor==Object&&c[k]&&c[k].constructor==Object?(b[k]||(b[k]=Kb(m)),l=Kk(b[k],c[k],m,e,l),h=h&&l):typeof c[k]!=typeof m||null==c[k]||c[k].constructor!=m.constructor?h=!1:b[k]=c[k]:h=!1;}return h}B("shaka.util.ConfigUtils.mergeConfigObjects",Kk);
  function Lk(b,c){for(var d={},e=d,f=0,g=0;;){f=b.indexOf(".",f);if(0>f)break;if(0==f||"\\"!=b[f-1])g=b.substring(g,f).replace(/\\\./g,"."),e[g]={},e=e[g],g=f+1;f+=1;}e[b.substring(g).replace(/\\\./g,".")]=c;return d}B("shaka.util.ConfigUtils.convertToConfigObject",Lk);function Mk(){}B("shaka.util.PlayerConfiguration",Mk);
  function Nk(){var b=5E5,c=Infinity;navigator.connection&&(b=1E6*navigator.connection.downlink,navigator.connection.saveData&&(c=360));var d={retryParameters:yb(),servers:{},clearKeys:{},advanced:{},delayLicenseRequestUntilPlayed:!1,initDataTransform:ed,fairPlayTransform:!0},e={retryParameters:yb(),availabilityWindowOverride:NaN,disableAudio:!1,disableVideo:!1,disableText:!1,dash:{customScheme:function(b){if(b)return null},clockSyncUri:"",ignoreDrmInfo:!1,xlinkFailGracefully:!1,defaultPresentationDelay:10,
  ignoreMinBufferTime:!1,autoCorrectDrift:!0,ignoreSuggestedPresentationDelay:!1,ignoreEmptyAdaptationSet:!1},hls:{ignoreTextStreamFailures:!1}},f={retryParameters:yb(),failureCallback:function(){},rebufferingGoal:2,bufferingGoal:10,bufferBehind:30,ignoreTextStreamFailures:!1,alwaysStreamText:!1,startAtSegmentBoundary:!1,smallGapLimit:.5,jumpLargeGaps:!1,durationBackoff:1,forceTransmuxTS:!1,safeSeekOffset:5,stallEnabled:!0,stallThreshold:1,stallSkip:.1,useNativeHlsOnSafari:!0};xc("Web0S")&&(f.stallEnabled=
  !1);var g={trackSelectionCallback:function(b){return b},progressCallback:function(){},usePersistentLicense:!0},h={drm:d,manifest:e,streaming:f,offline:g,abrFactory:N,abr:{enabled:!0,defaultBandwidthEstimate:b,switchInterval:8,bandwidthUpgradeTarget:.85,bandwidthDowngradeTarget:.95,minBytes:16E3,minTotalBytes:128E3,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:c,minPixels:0,maxPixels:Infinity,minFrameRate:0,maxFrameRate:Infinity,minBandwidth:0,maxBandwidth:Infinity}},preferredAudioLanguage:"",
  preferredTextLanguage:"",preferredVariantRole:"",preferredTextRole:"",preferredAudioChannelCount:2,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minFrameRate:0,maxFrameRate:Infinity,minBandwidth:0,maxBandwidth:Infinity},playRangeStart:0,playRangeEnd:Infinity,textDisplayFactory:function(){return null}};g.trackSelectionCallback=function(b){return Ok(b,h.preferredAudioLanguage)};return h}
  function Pk(b,c,d){var e={".drm.servers":"",".drm.clearKeys":"",".drm.advanced":{distinctiveIdentifierRequired:!1,persistentStateRequired:!1,videoRobustness:"",audioRobustness:"",serverCertificate:new Uint8Array(0),individualizationServer:""}};return Kk(b,c,d||Nk(),e,"")}Mk.mergeConfigObjects=Pk;
  function Ok(b,c){var d=b.filter(function(b){return "variant"==b.type}),e=[],f=te(c,d.map(function(b){return b.language}));f&&(e=d.filter(function(b){return M(b.language)==f}));0==e.length&&(e=d.filter(function(b){return b.primary}));0==e.length&&(d.map(function(b){return b.language}),e=d);var g=e.filter(function(b){return b.height&&480>=b.height});g.length&&(g.sort(function(b,c){return c.height-b.height}),e=g.filter(function(b){return b.height==g[0].height}));d=[];if(e.length){var h=Math.floor(e.length/
  2);e.sort(function(b,c){return b.bandwidth-c.bandwidth});d.push(e[h]);}e=r(b);for(h=e.next();!h.done;h=e.next())h=h.value,"text"==h.type&&d.push(h);return d}function Qk(){this.a=null;this.b=[];}function Rk(b,c){if(null==b.a)b.a={timestamp:Date.now()/1E3,state:c,duration:0};else{var d=Date.now()/1E3;b.a.duration=d-b.a.timestamp;b.a.state!=c&&(b.b.push(b.a),b.a={timestamp:d,state:c,duration:0});}}function Sk(b,c){var d=0;b.a&&b.a.state==c&&(d+=b.a.duration);for(var e=r(b.b),f=e.next();!f.done;f=e.next())f=f.value,d+=f.state==c?f.duration:0;return d}
  function Tk(b){function c(b){return {timestamp:b.timestamp,state:b.state,duration:b.duration}}for(var d=[],e=r(b.b),f=e.next();!f.done;f=e.next())d.push(c(f.value));b.a&&d.push(c(b.a));return d}function Uk(){this.b=this.c=null;this.a=[];}function Vk(){this.f=this.s=this.h=this.b=this.i=this.l=this.m=this.g=this.u=NaN;this.a=new Qk;this.c=new Uk;}function X(b,c){var d=this;Jb.call(this);this.i=Wk;this.a=null;this.gb=!1;this.g=new K;this.zc=this.l=this.Eb=this.b=this.s=this.f=this.Wb=this.C=this.Xb=this.W=this.ib=this.m=this.F=this.h=this.K=null;this.Kd=1E9;this.Zb=new Set;this.kb=!0;this.pa=null;this.Hd=!1;this.Fd=0;this.oa=null;this.$=new Nh;this.c=Xk(this);this.$b={width:Infinity,height:Infinity};this.u=null;this.Fb=new Yh(this.c.preferredAudioLanguage,this.c.preferredVariantRole,this.c.preferredAudioChannelCount);this.na=this.c.preferredTextLanguage;
  this.fb=this.c.preferredTextRole;c&&c(this);this.K=Yk(this);this.g.w(window,"online",function(){d.nd();});this.D={name:"detach"};this.R={name:"attach"};this.Ha={name:"unload"};this.Ic={name:"manifest-parser"};this.Gc={name:"manifest"};this.hb={name:"media-source"};this.Ac={name:"drm-engine"};this.S={name:"load"};this.Nc={name:"src-equals-drm-engine"};this.jb={name:"src-equals"};var e=new Map;e.set(this.R,function(b,c){return Fb(Zk(d,b,c))});e.set(this.D,function(b){b.v&&(d.g.ea(b.v,"error"),b.v=null);
  d.a=null;b=Promise.resolve();return Fb(b)});e.set(this.Ha,function(b){return Fb($k(d,b))});e.set(this.hb,function(b){b=al(d,b);return Fb(b)});e.set(this.Ic,function(b,c){var e=bl(d,b,c);return Fb(e)});e.set(this.Gc,function(b){return cl(d,b)});e.set(this.Ac,function(){var b=dl(d);return Fb(b)});e.set(this.S,function(b,c){return Fb(el(d,b,c))});e.set(this.Nc,function(b){b=fl(d,b);return Fb(b)});e.set(this.jb,function(b,c){return gl(d,b,c)});this.lb=new Bk(this.D,{Te:function(b,c,e,k){var f=null;b==
  d.D&&(f=e==d.D?d.D:d.R);b==d.R&&(f=e==d.D||c.v!=k.v?d.D:e==d.R?d.R:e==d.hb||e==d.S?d.hb:e==d.jb?d.Nc:null);b==d.hb&&(f=e==d.S&&c.v==k.v?d.Ic:d.Ha);b==d.Ic&&(f=hl(d.S,d.Gc,d.Ha,e,c,k));b==d.Gc&&(f=hl(d.S,d.Ac,d.Ha,e,c,k));b==d.Ac&&(f=hl(d.S,d.S,d.Ha,e,c,k));b==d.Nc&&(f=e==d.jb&&c.v==k.v?d.jb:d.Ha);if(b==d.S||b==d.jb)f=d.Ha;b==d.Ha&&(f=k.v&&c.v==k.v?d.R:d.D);return f},Be:function(b,c,h){d.dispatchEvent(new I("onstatechange",{state:b.name}));return e.get(b)(c,h)},handleError:function(b){return t(function h(){return A(h,
  function(c){switch(c.j){case 1:return u(c,$k(d,b),2);case 2:return c["return"](b.v?d.R:d.D)}})})},kf:function(b){d.dispatchEvent(new I("onstateidle",{state:b.name}));}});b&&this.Gb(b,!0);}Ta(X,Jb);B("shaka.Player",X);
  X.prototype.destroy=function(){var b=this;return t(function d(){var e;return A(d,function(d){switch(d.j){case 1:if(b.i==il)return d["return"]();b.i=il;e=Fk(b.lb,function(){return {node:b.D,payload:Ck(),Va:!1}});return u(d,new Promise(function(b){e.vb=function(){};e.lc=function(){b();};e.Ya=function(){b();};e.onError=function(){b();};e.nc=function(){b();};}),2);case 2:return u(d,b.lb.destroy(),3);case 3:b.g&&(b.g.release(),b.g=null);b.zc=null;b.l=null;b.c=null;if(!b.K){d.A(0);break}return u(d,b.K.destroy(),
  5);case 5:b.K=null,w(d);}})})};X.prototype.destroy=X.prototype.destroy;X.version="2.5.8-2";var jl=["","5"];Ne=new function(b){this.a=b;this.c=Oe;this.b=Pe;}(new Le(Number(jl[0]),Number(jl[1])));var kl=["output-restricted","internal-error"],ll={};X.registerSupportPlugin=function(b,c){ll[b]=c;};
  X.isBrowserSupported=function(){return window.Promise&&window.Uint8Array&&Array.prototype.forEach&&window.MediaKeys&&window.navigator&&window.navigator.requestMediaKeySystemAccess&&window.MediaKeySystemAccess&&window.MediaKeySystemAccess.prototype.getConfiguration?tc()?!0:uc("application/x-mpegurl"):!1};
  X.probeSupport=function(){return kd().then(function(b){for(var c=U.Ef(),d={},e=r('video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",video/mp4; codecs="av01.0.01M.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",")),f=
  e.next();!f.done;f=e.next()){f=f.value;d[f]=tc()?Xd(f)?!0:MediaSource.isTypeSupported(f)||Bd(f):uc(f);var g=f.split(";")[0];d[g]=d[g]||d[f];}b={manifest:c,media:d,drm:b};for(var h in ll)b[h]=ll[h]();return b})};X.prototype.Gb=function(b,c){c=void 0===c?!0:c;if(this.i==il)return Promise.reject(ml());var d=Ck();d.v=b;tc()||(c=!1);var e=c?this.hb:this.R,f=Fk(this.lb,function(){return {node:e,payload:d,Va:!1}});f.vb=function(){};return nl(f)};X.prototype.attach=X.prototype.Gb;
  X.prototype.detach=function(){var b=this;if(this.i==il)return Promise.reject(ml());var c=Fk(this.lb,function(){return {node:b.D,payload:Ck(),Va:!1}});c.vb=function(){};return nl(c)};X.prototype.detach=X.prototype.detach;X.prototype.xd=function(b){var c=this;b=void 0===b?!0:b;if(this.i==il)return Promise.reject(ml());tc()||(b=!1);var d=Ck(),e=Fk(this.lb,function(e){var f=e.v&&b?c.hb:e.v?c.R:c.D;d.v=e.v;return {node:f,payload:d,Va:!1}});e.vb=function(){};return nl(e)};X.prototype.unload=X.prototype.xd;
  X.prototype.load=function(b,c,d){if(this.i==il)return Promise.reject(ml());this.dispatchEvent(new I("loading"));var e=Ck();e.uri=b;e.ud=Date.now()/1E3;d&&"string"!=typeof d&&(Me("Loading with a manifest parser factory","Please register a manifest parser and for the mime-type."),e.Aa=function(){return new d});d&&"string"==typeof d&&(e.mimeType=d);void 0!==c&&(e.startTime=c);var f=ol(this,e)?this.jb:this.S,g=Fk(this.lb,function(b){if(null==b.v)return null;e.v=b.v;return {node:f,payload:e,Va:!0}});g.vb=
  function(){};return new Promise(function(b,c){g.nc=function(){return c(new D(2,7,7002))};g.lc=function(){return b()};g.Ya=function(){return c(ml())};g.onError=function(b){return c(b)};})};X.prototype.load=X.prototype.load;
  function ol(b,c){if(c.Aa)return !1;if(!tc())return !0;var d=c.mimeType,e=c.uri||"";d||(d={mp4:"video/mp4",m4v:"video/mp4",m4a:"audio/mp4",webm:"video/webm",weba:"audio/webm",mkv:"video/webm",ts:"video/mp2t",ogv:"video/ogg",ogg:"audio/ogg",mpg:"video/mpeg",mpeg:"video/mpeg",m3u8:"application/x-mpegurl",mp3:"audio/mpeg",aac:"audio/aac",flac:"audio/flac",wav:"audio/wav"}[U.getExtension(e)]);return d?""==(c.v||vc()).canPlayType(d)?!1:U.isSupported(e,d)?!!navigator.vendor&&navigator.vendor.includes("Apple")&&
  b.c.streaming.useNativeHlsOnSafari:!0:!1}function Zk(b,c,d){null==c.v&&(c.v=d.v,b.g.w(c.v,"error",function(){var c=pl(b);c&&b.Ma(c);}));b.a=c.v;return Promise.resolve()}
  function $k(b,c){return t(function e(){return A(e,function(e){switch(e.j){case 1:b.i!=il&&(b.i=Wk);b.dispatchEvent(new I("unloading"));c.Aa=null;c.mimeType=null;c.startTime=null;c.uri=null;c.v&&(b.g.ea(c.v,"loadeddata"),b.g.ea(c.v,"playing"),b.g.ea(c.v,"pause"),b.g.ea(c.v,"ended"),b.g.ea(c.v,"ratechange"));b.ib&&(b.ib.release(),b.ib=null);b.Xb&&(b.Xb.stop(),b.Xb=null);if(!b.s){e.A(2);break}return u(e,b.s.stop(),3);case 3:b.s=null;case 2:if(!b.l){e.A(4);break}return u(e,b.l.stop(),4);case 4:if(!b.f){e.A(6);
  break}return u(e,b.f.destroy(),7);case 7:b.f=null;case 6:b.m&&(b.m.release(),b.m=null);if(!b.F){e.A(8);break}return u(e,b.F.destroy(),9);case 9:b.F=null;case 8:if(!c.v||!c.v.src){e.A(10);break}return u(e,new Promise(function(b){return (new C(b)).P(.1)}),11);case 11:c.v.removeAttribute("src"),c.v.load();case 10:if(!b.h){e.A(12);break}return u(e,b.h.destroy(),13);case 13:b.h=null;case 12:b.$.a.clear(),b.Eb=null,b.C=null,b.Zb.clear(),b.b=null,b.u=null,b.Bc=null,b.kb=!0,ql(b),w(e);}})})}
  function al(b,c){return t(function e(){var f,g,h,k;return A(e,function(e){switch(e.j){case 1:return f=window.muxjs?new nd:new od,g=b.c.textDisplayFactory,h=new g,b.Bc=g,k=new ae(c.v,f,h),u(e,k.s,2);case 2:b.F=k,w(e);}})})}
  function bl(b,c,d){return t(function f(){var g,h,k;return A(f,function(f){switch(f.j){case 1:c.Aa=d.Aa;c.mimeType=d.mimeType;c.uri=d.uri;g=c.uri;h=b.K;b.Eb=g;if(c.Aa){b.s=c.Aa();f.A(2);break}k=b;return u(f,U.create(g,h,b.c.manifest.retryParameters,c.mimeType),3);case 3:k.s=f.o;case 2:b.s.configure(b.c.manifest),w(f);}})})}
  function cl(b,c){var d=c.uri,e=b.K;b.Wb=new Hi;Ii(b.Wb,function(c){rl(b,"timelineregionadded",c);});var f={networkingEngine:e,filterNewPeriod:function(c){return b.Jc(c)},filterAllPeriods:function(c){return sl(b,c)},onTimelineRegionAdded:function(c){var d=b.Wb;a:{var e=r(d.a);for(var f=e.next();!f.done;f=e.next())if(f=f.value,f.schemeIdUri==c.schemeIdUri&&f.id==c.id&&f.startTime==c.startTime&&f.endTime==c.endTime){e=f;break a}e=null;}null==e&&(d.a.add(c),d.b(c));},onEvent:function(c){return b.dispatchEvent(c)},
  onError:function(c){return b.Ma(c)}};return new H(Promise.resolve().then(function(){return t(function h(){var c;return A(h,function(e){switch(e.j){case 1:return c=b,u(e,b.s.start(d,f),2);case 2:c.b=e.o;b.dispatchEvent(new I("manifestparsed"));if(0==b.b.periods.length)throw new D(2,4,4014);tl(b.b.periods);w(e);}})})}),function(){return b.s.stop()})}
  function dl(b){return t(function d(){return A(d,function(d){switch(d.j){case 1:return b.h=new Fc({tb:b.K,onError:function(d){b.Ma(d);},mc:function(d){ul(b,d);},onExpirationUpdated:function(d,e){vl(b,d,e);},onEvent:function(d){b.dispatchEvent(d);}}),b.h.configure(b.c.drm),u(d,Mc(b.h,ni(b.b.periods),b.b.offlineSessionIds),2);case 2:sl(b,b.b.periods),w(d);}})})}
  function el(b,c,d){return t(function f(){var g,h,k,l,m,n,p,v,x;return A(f,function(f){switch(f.j){case 1:return c.startTime=d.startTime,g=c.v,h=c.uri,b.Eb=h,b.u=new Vk,k=function(){return wl(b)},l=function(){var c=b.a.playbackRate;0!=c&&b.W.set(c);},b.g.w(g,"playing",k),b.g.w(g,"pause",k),b.g.w(g,"ended",k),b.g.w(g,"ratechange",l),m=b.c.abrFactory,b.l&&b.zc==m||(b.zc=m,b.l=new m,b.l.configure(b.c.abr)),xl(b,b.b.periods),b.Fb=new Yh(b.c.preferredAudioLanguage,b.c.preferredVariantRole,b.c.preferredAudioChannelCount),
  b.na=b.c.preferredTextLanguage,yl(b.b.presentationTimeline,b.c.playRangeStart,b.c.playRangeEnd),u(f,b.h.Gb(g),2);case 2:return b.l.init(function(c,d,f){d=void 0===d?!1:d;f=void 0===f?0:f;a:{var g=r(b.b.periods);for(var h=g.next();!h.done;h=g.next())if(h=h.value,h.variants.includes(c)){g=h;break a}g=null;}zl(b,g,c,!0);b.f&&(aj(b.f,c,d,f),Al(b));}),b.m=Bl(b,c.startTime),b.ib=Cl(b),b.W=new ri({gc:function(){return c.v.playbackRate},rd:function(b){c.v.playbackRate=b;},Ld:function(b){c.v.currentTime+=b;}}),
  n=Math.max(b.b.minBufferTime,b.c.streaming.rebufferingGoal),Dl(b,n),b.f=El(b),b.f.configure(b.c.streaming),Fl(b),b.i=Gl,b.dispatchEvent(new I("streaming")),u(f,b.f.start(),3);case 3:b.c.streaming.startAtSegmentBoundary&&(p=b.m.h(),v=Hl(b,p),b.m.m(v)),b.b.periods.forEach(b.Jc.bind(b)),Il(b),Al(b),x=Jl(b)||b.b.periods[0],x.variants.some(function(b){return b.primary}),Kl(b,x.variants),b.g.da(g,"loadeddata",function(){b.u.b=Date.now()/1E3-d.ud;}),w(f);}})})}
  function fl(b,c){return t(function e(){var f,g;return A(e,function(e){switch(e.j){case 1:return f=yd,b.h=new Fc({tb:b.K,onError:function(c){b.Ma(c);},mc:function(c){ul(b,c);},onExpirationUpdated:function(c,e){vl(b,c,e);},onEvent:function(c){b.dispatchEvent(c);}}),b.h.configure(b.c.drm),g={id:0,language:"und",primary:!1,audio:null,video:{id:0,originalId:null,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return null},getSegmentReference:function(){return null},initSegmentReference:null,
  presentationTimeOffset:0,mimeType:"video/mp4",codecs:"",encrypted:!0,keyId:null,language:"und",label:null,type:f.Pa,primary:!1,frameRate:void 0,pixelAspectRatio:void 0,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],channelsCount:null,audioSamplingRate:null,closedCaptions:null},bandwidth:100,drmInfos:[],allowedByApplication:!0,allowedByKeySystem:!0},u(e,Mc(b.h,[g],[]),2);case 2:return u(e,b.h.Gb(c.v),0)}})})}
  function gl(b,c,d){function e(){return wl(b)}c.uri=d.uri;c.startTime=d.startTime;b.Eb=c.uri;b.u=new Vk;b.m=new Ai(c.v);null!=c.startTime&&b.m.m(c.startTime);b.W=new ri({gc:function(){return c.v.playbackRate},rd:function(b){c.v.playbackRate=b;},Ld:function(b){c.v.currentTime+=b;}});Dl(b,b.c.streaming.rebufferingGoal);b.g.w(c.v,"playing",e);b.g.w(c.v,"pause",e);b.g.w(c.v,"ended",e);b.g.da(c.v,"loadeddata",function(){b.u.b=Date.now()/1E3-d.ud;});b.a.audioTracks&&(b.g.w(b.a.audioTracks,"addtrack",function(){return Il(b)}),
  b.g.w(b.a.audioTracks,"removetrack",function(){return Il(b)}),b.g.w(b.a.audioTracks,"change",function(){return Il(b)}));if(b.a.textTracks){var f=b.a.textTracks;b.g.w(f,"addtrack",function(){return Il(b)});b.g.w(f,"removetrack",function(){return Il(b)});b.g.w(f,"change",function(){return Il(b)});}c.v.src=c.uri;b.i=Ll;b.dispatchEvent(new I("streaming"));var g=new F;b.a.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?g.resolve():b.a.error?g.reject(pl(b)):(b.g.da(b.a,"loadeddata",function(){g.resolve();}),
  b.g.da(b.a,"error",function(){g.reject(pl(b));}));return new H(g,function(){g.reject(new D(2,7,7001));return Promise.resolve()})}function tl(b){function c(b){return b.video&&b.audio||b.video&&b.video.codecs.includes(",")}b.some(function(b){return b.variants.some(c)})&&b.forEach(function(b){b.variants=b.variants.filter(c);});}
  function Fl(b){function c(b){var c="";b.video&&(c=sc(b.video.codecs)[0]);var d="";b.audio&&(d=sc(b.audio.codecs)[0]);return c+"-"+d}var d=b.b.periods.reduce(function(b,c){return b.concat(c.variants)},[]);d=Fe(d,b.c.preferredAudioChannelCount);var e=new Ib;d.forEach(function(b){var d=c(b);e.push(d,b);});var f=null,g=Infinity;e.forEach(function(b,c){var d=0,e=0;c.forEach(function(b){d+=b.bandwidth||0;++e;});var h=d/e;h<g&&(f=b,g=h);});b.b.periods.forEach(function(b){b.variants=b.variants.filter(function(b){return c(b)==
  f?!0:!1});});}function Yk(b){return new J(function(c,d){b.l&&b.l.segmentDownloaded(c,d);})}function Bl(b,c){return new Bi(b.a,b.b,b.c.streaming,c,function(){b.ib&&mi(b.ib,!0);b.f&&gj(b.f);b.C&&Ml(b);},function(c){return b.dispatchEvent(c)})}
  function Cl(b){var c=new pi(b.b);qi(c,function(){Il(b);});var d=new Ji(b.Wb);Ni(d,function(c){rl(b,"timelineregionenter",c);},function(c){rl(b,"timelineregionexit",c);},function(c,d){d||(rl(b,"timelineregionenter",c),rl(b,"timelineregionexit",c));});var e=new li(b.a);e.a.add(c);e.a.add(d);return e}function Dl(b,c){b.C=new bi;b.C.a=di;ei(b.C,c,Math.min(.5,c/2));ql(b);b.Xb=(new C(function(){Ml(b);})).Na(.25);}
  function Ml(b){switch(b.i){case Ll:var c=b.a.ended?!0:pd(b.a.buffered)>=b.a.duration-1;break;case Gl:a:if(b.a.ended||ee(b.F))c=!0;else{if(b.b.presentationTimeline.V()){var d=b.b.presentationTimeline.pb();if(pd(b.a.buffered)>=d){c=!0;break a}}c=!1;}break;default:c=!1;}var e=rd(b.a.buffered,b.a.currentTime);d=b.C;var f=c,g=d.b.get(d.a);c=d.a;e=f||e>=g?ci:di;d.a=e;c!=e&&ql(b);}
  function El(b){return new Oi(b.b,{Ua:function(){return b.m.h()},getBandwidthEstimate:function(){return b.l.getBandwidthEstimate()},L:b.F,tb:b.K,Od:b.hf.bind(b),Nd:b.ve.bind(b),onError:b.Ma.bind(b),onEvent:function(c){return b.dispatchEvent(c)},mf:b.nf.bind(b),dd:b.uf.bind(b)})}X.prototype.configure=function(b,c){2==arguments.length&&"string"==typeof b&&(b=Lk(b,c));var d=Pk(this.c,b,Xk(this));Nl(this);return d};X.prototype.configure=X.prototype.configure;
  function Nl(b){b.s&&b.s.configure(b.c.manifest);b.h&&b.h.configure(b.c.drm);if(b.f){b.f.configure(b.c.streaming);try{b.b.periods.forEach(b.Jc.bind(b));}catch(g){b.Ma(g);}var c=Si(b.f),d=Ui(b.f),e=Jl(b);c=Ie(c,d,e.variants);b.l&&c&&c.allowedByApplication&&c.allowedByKeySystem?Kl(b,e.variants):Ol(b,e);}if(b.F&&(e=b.c.textDisplayFactory,b.Bc!=e)){c=new e;d=b.F;var f=d.g;d.g=c;f&&(c.setTextVisibility(f.isTextVisible()),f.destroy());d.a&&(d.a.c=c);b.Bc=e;b.f&&(e=b.f,(c=e.b.get("text"))&&$i(e,c.stream,!0,
  0,!0));}b.l&&(b.l.configure(b.c.abr),b.c.abr.enabled&&!b.kb?b.l.enable():b.l.disable(),Pl(b));b.C&&(e=b.c.streaming.rebufferingGoal,b.b&&(e=Math.max(e,b.b.minBufferTime)),ei(b.C,e,Math.min(.5,e/2)));}X.prototype.getConfiguration=function(){var b=Xk(this);Pk(b,this.c,Xk(this));return b};X.prototype.getConfiguration=X.prototype.getConfiguration;X.prototype.Mf=function(){for(var b in this.c)delete this.c[b];Pk(this.c,Xk(this),Xk(this));Nl(this);};X.prototype.resetConfiguration=X.prototype.Mf;
  X.prototype.Me=function(){return this.i};X.prototype.getLoadMode=X.prototype.Me;X.prototype.Re=function(){return this.a};X.prototype.getMediaElement=X.prototype.Re;X.prototype.Kb=function(){return this.K};X.prototype.getNetworkingEngine=X.prototype.Kb;X.prototype.ec=function(){return this.Eb};X.prototype.getAssetUri=X.prototype.ec;X.prototype.Pe=function(){Me("getManifestUri",'Please use "getAssetUri" instead.');return this.ec()};X.prototype.getManifestUri=X.prototype.Pe;
  X.prototype.V=function(){return this.b?this.b.presentationTimeline.V():this.a&&this.a.src?Infinity==this.a.duration:!1};X.prototype.isLive=X.prototype.V;X.prototype.Xa=function(){return this.b?this.b.presentationTimeline.Xa():!1};X.prototype.isInProgress=X.prototype.Xa;
  X.prototype.ef=function(){if(this.b){if(!this.b.periods.length)return !1;var b=this.b.periods[0].variants;return b.length?!b[0].video:!1}return this.a&&this.a.src?this.a.videoTracks?0==this.a.videoTracks.length:0==this.a.videoHeight:!1};X.prototype.isAudioOnly=X.prototype.ef;X.prototype.Of=function(){if(this.b){var b=this.b.presentationTimeline;return {start:b.ob(),end:b.Ca()}}return this.a&&this.a.src&&(b=this.a.seekable,b.length)?{start:b.start(0),end:b.end(b.length-1)}:{start:0,end:0}};
  X.prototype.seekRange=X.prototype.Of;X.prototype.keySystem=function(){return $c(this.drmInfo())};X.prototype.keySystem=X.prototype.keySystem;X.prototype.drmInfo=function(){return this.h?this.h.a:null};X.prototype.drmInfo=X.prototype.drmInfo;X.prototype.Jb=function(){return this.h?this.h.Jb():Infinity};X.prototype.getExpiration=X.prototype.Jb;X.prototype.Tc=function(){return this.C?this.C.a==di:!1};X.prototype.isBuffering=X.prototype.Tc;
  X.prototype.Ue=function(){if(this.W){var b=this.W;b=b.f?0:b.c;}else b=0;return b};X.prototype.getPlaybackRate=X.prototype.Ue;X.prototype.gg=function(b){0==b?$a("A trick play rate of 0 is unsupported!"):(this.a.paused&&this.a.play(),this.W.set(b),this.i==Gl&&Zi(this.f,1<Math.abs(b)));};X.prototype.trickPlay=X.prototype.gg;X.prototype.we=function(){this.i==Ll&&this.W.set(1);this.i==Gl&&(this.W.set(1),Zi(this.f,!1));};X.prototype.cancelTrickPlay=X.prototype.we;
  X.prototype.Sc=function(){if(this.b&&this.m){for(var b=Ql(this),c=[],d=r(Rl(this)),e=d.next();!e.done;e=d.next()){e=e.value;var f=ye(e);f.active=e==b;c.push(f);}return c}return this.a&&this.a.audioTracks?Array.from(this.a.audioTracks).map(function(b){var c=Ce(b);c.active=b.enabled;c.type="variant";c.originalAudioId=b.id;"main"==b.kind?(c.primary=!0,c.roles=["main"],c.audioRoles=["main"]):c.audioRoles=[];return c}):[]};X.prototype.getVariantTracks=X.prototype.Sc;
  X.prototype.qb=function(){if(this.b&&this.m){for(var b=Sl(this),c=[],d=r(Tl(this)),e=d.next();!e.done;e=d.next()){e=e.value;var f=ze(e);f.active=e==b;c.push(f);}return c}return this.a&&this.a.src&&this.a.textTracks?Array.from(this.a.textTracks).map(function(b){var c=Ce(b);c.active="disabled"!=b.mode;c.type="text";c.originalTextId=b.id;"captions"==b.kind&&(c.mimeType="application/cea-608");return c}):[]};X.prototype.getTextTracks=X.prototype.qb;
  X.prototype.od=function(b){if(this.b&&this.f){var c=Jl(this),d=c.textStreams.find(function(c){return c.id==b.id});d&&(Ul(this,c,d,!1),Vl(this,d),this.na=d.language);}else if(this.a&&this.a.src&&this.a.textTracks){c=Array.from(this.a.textTracks);c=r(c);for(d=c.next();!d.done;d=c.next())d=d.value,Ae(d)==b.id?d.mode=this.gb?"showing":"hidden":d.mode="disabled";Wl(this);}};X.prototype.selectTextTrack=X.prototype.od;
  X.prototype.Qf=function(){Me("selectEmbeddedTextTrack","If closed captions are signaled in the manifest, a text stream will be created to represent them. Please use SelectTextTrack.");var b=this.qb().filter(function(b){return "application/cea-608"==b.mimeType});0<b.length&&this.od(b[0]);};X.prototype.selectEmbeddedTextTrack=X.prototype.Qf;
  X.prototype.lg=function(){Me("usingEmbeddedTextTrack","If closed captions are signaled in the manifest, a text stream will be created to represent them. There should be no reason to know if the player is playing embedded text.");var b=this.qb().filter(function(b){return b.active})[0];return b?"application/cea-608"==b.mimeType:!1};X.prototype.usingEmbeddedTextTrack=X.prototype.lg;
  X.prototype.Sf=function(b,c,d){d=void 0===d?0:d;if(this.b&&this.f){var e=Jl(this);this.c.abr.enabled&&$a("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");var f=e.variants.find(function(c){return c.id==b.id});f&&De(f)&&(zl(this,e,f,!1),Xl(this,f,c,d),this.Fb=new Xh(f),Kl(this,e.variants));}else if(this.a&&this.a.audioTracks){c=Array.from(this.a.audioTracks);c=r(c);for(d=c.next();!d.done;d=
  c.next())d=d.value,Ae(d)==b.id&&(d.enabled=!0);Yl(this);}};X.prototype.selectVariantTrack=X.prototype.Sf;X.prototype.He=function(){return Zl(this.Sc())};X.prototype.getAudioLanguagesAndRoles=X.prototype.He;X.prototype.af=function(){return Zl(this.qb())};X.prototype.getTextLanguagesAndRoles=X.prototype.af;X.prototype.Ge=function(){return Array.from($l(this.Sc()))};X.prototype.getAudioLanguages=X.prototype.Ge;X.prototype.$e=function(){return Array.from($l(this.qb()))};X.prototype.getTextLanguages=X.prototype.$e;
  X.prototype.Pf=function(b,c){if(this.b&&this.m){var d=Jl(this);this.Fb=new Yh(b,c||"",0);am(this,d);}else if(this.a&&this.a.audioTracks){d=Array.from(this.a.audioTracks);d=r(d);for(var e=d.next();!e.done;e=d.next())e=e.value,e.language==b&&(e.enabled=!0);Yl(this);}};X.prototype.selectAudioLanguage=X.prototype.Pf;
  X.prototype.Rf=function(b,c){if(this.b&&this.m){var d=Jl(this);this.na=b;this.fb=c||"";var e=Ge(d.textStreams,this.na,this.fb)[0]||null;e&&(Ul(this,d,e,!1),(this.c.streaming.alwaysStreamText||this.ic())&&Vl(this,e));}else(d=this.qb().filter(function(c){return c.language==b})[0])&&this.od(d);};X.prototype.selectTextLanguage=X.prototype.Rf;
  X.prototype.Tf=function(b){if(this.b&&this.m){for(var c=Jl(this),d=null,e=r(Rl(this)),f=e.next();!f.done;f=e.next())if(f=f.value,f.audio.label==b){d=f;break}null!=d&&(this.Fb=new Yh(d.language,"",0,b),am(this,c));}};X.prototype.selectVariantsByLabel=X.prototype.Tf;X.prototype.ic=function(){var b=this.gb;return this.b?this.F.g.isTextVisible():this.a&&this.a.src&&this.a.textTracks?Array.from(this.a.textTracks).some(function(b){return "showing"==b.mode}):b};X.prototype.isTextTrackVisible=X.prototype.ic;
  X.prototype.Wf=function(b){var c=this;return t(function e(){var f,g,h,k,l,m;return A(e,function(e){switch(e.j){case 1:f=c.gb;g=b;if(f==g)return e["return"]();c.gb=g;if(c.i!=Gl){if(c.a&&c.a.src&&c.a.textTracks){h=Array.from(c.a.textTracks);for(var n=r(h),v=n.next();!v.done;v=n.next())k=v.value,"disabled"!=k.mode&&(k.mode=b?"showing":"hidden");}e.A(2);break}c.F.g.setTextVisibility(b);if(c.c.streaming.alwaysStreamText){e.A(2);break}if(!b){n=c.f;n.D=!0;if(v=n.b.get("text"))Pi(v),n.b["delete"]("text");
  e.A(2);break}l=Jl(c);m=Ge(l.textStreams,c.na,c.fb);if(!(0<m.length)){e.A(2);break}return u(e,Vi(c.f,m[0]),2);case 2:bm(c),w(e);}})})};X.prototype.setTextTrackVisibility=X.prototype.Wf;X.prototype.We=function(){if(!this.V())return null;if(this.b)return new Date(1E3*(this.b.presentationTimeline.f+this.a.currentTime));if(this.a&&this.a.getStartDate){var b=this.a.getStartDate();return isNaN(b.getTime())?null:new Date(b.getTime()+1E3*this.a.currentTime)}return null};X.prototype.getPlayheadTimeAsDate=X.prototype.We;
  X.prototype.Ye=function(){if(!this.V())return null;if(this.b)return new Date(1E3*this.b.presentationTimeline.f);if(this.a&&this.a.getStartDate){var b=this.a.getStartDate();return isNaN(b.getTime())?null:b}return null};X.prototype.getPresentationStartTimeAsDate=X.prototype.Ye;X.prototype.Oc=function(){var b={total:[],audio:[],video:[],text:[]};this.i==Ll&&(b.total=sd(this.a.buffered));this.i==Gl&&this.F.Oc(b);return b};X.prototype.getBufferedInfo=X.prototype.Oc;
  X.prototype.getStats=function(){if(this.i!=Gl&&this.i!=Ll)return {width:NaN,height:NaN,streamBandwidth:NaN,decodedFrames:NaN,droppedFrames:NaN,corruptedFrames:NaN,estimatedBandwidth:NaN,loadLatency:NaN,playTime:NaN,pauseTime:NaN,bufferingTime:NaN,licenseTime:NaN,switchHistory:[],stateHistory:[]};wl(this);var b=this.a;if(b.getVideoPlaybackQuality){b=b.getVideoPlaybackQuality();var c=this.u,d=Number(b.totalVideoFrames);c.m=Number(b.droppedVideoFrames);c.l=d;this.u.i=Number(b.corruptedVideoFrames);}this.h?
  (b=this.h,b=b.K?b.K:NaN):b=NaN;this.u.h=b;if(this.i==Gl){if(b=Ql(this))this.u.s=b.bandwidth;b&&b.video&&(c=this.u,d=b.video.height||NaN,c.u=b.video.width||NaN,c.g=d);b=this.l.getBandwidthEstimate();this.u.f=b;}var e=this.u;b=e.u;c=e.g;d=e.s;var f=e.l,g=e.m,h=e.i,k=e.f,l=e.b,m=Sk(e.a,"playing"),n=Sk(e.a,"paused"),p=Sk(e.a,"buffering"),v=e.h,x=Tk(e.a),z=[];e=r(e.c.a);for(var y=e.next();!y.done;y=e.next())y=y.value,z.push({timestamp:y.timestamp,id:y.id,type:y.type,fromAdaptation:y.fromAdaptation,bandwidth:y.bandwidth});
  return {width:b,height:c,streamBandwidth:d,decodedFrames:f,droppedFrames:g,corruptedFrames:h,estimatedBandwidth:k,loadLatency:l,playTime:m,pauseTime:n,bufferingTime:p,licenseTime:v,stateHistory:x,switchHistory:z}};X.prototype.getStats=X.prototype.getStats;
  X.prototype.addTextTrack=function(b,c,d,e,f,g){var h=this;return t(function l(){var m,n,p,v,x,z,y,G,E;return A(l,function(l){switch(l.j){case 1:if(h.i==Ll)throw Error("State error!");if(h.i!=Gl)throw Error("State error!");m=Jl(h);n=yd;p=h.b.periods.indexOf(m);v=p+1;x=v>=h.b.periods.length?h.b.presentationTimeline.Y():h.b.periods[v].startTime;z=x-m.startTime;if(Infinity==z)throw new D(1,4,4033);y=new S(1,0,z,function(){return [b]},0,null);G={id:h.Kd++,originalId:null,createSegmentIndex:Promise.resolve.bind(Promise),
  findSegmentPosition:function(){return 1},getSegmentReference:function(b){return 1==b?y:null},initSegmentReference:null,presentationTimeOffset:0,mimeType:e,codecs:f||"",kind:d,encrypted:!1,keyId:null,language:c,label:g||null,type:n.ra,primary:!1,frameRate:void 0,pixelAspectRatio:void 0,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],channelsCount:null,audioSamplingRate:null,closedCaptions:null};h.Zb.add(G);m.textStreams.push(G);return u(l,Vi(h.f,G),2);case 2:return (E=Ti(h.f,"text"))&&Oh(h.$,m,E),
  h.Zb["delete"](G),Ol(h,m),Il(h),l["return"](ze(G))}})})};X.prototype.addTextTrack=X.prototype.addTextTrack;X.prototype.qd=function(b,c){this.$b.width=b;this.$b.height=c;};X.prototype.setMaxHardwareResolution=X.prototype.qd;X.prototype.nd=function(){if(this.i==Gl){var b=this.f;if(b.f)b=!1;else if(b.m)b=!1;else{for(var c=r(b.b.values()),d=c.next();!d.done;d=c.next())d=d.value,d.Nb&&(d.Nb=!1,Yi(b,d,.1));b=!0;}}else b=!1;return b};X.prototype.retryStreaming=X.prototype.nd;X.prototype.Ne=function(){return this.b};
  X.prototype.getManifest=X.prototype.Ne;X.prototype.Oe=function(){return this.s?this.s.constructor:null};X.prototype.getManifestParserFactory=X.prototype.Oe;function zl(b,c,d,e){Ph(b.$,c).variant=d;b=b.u.c;b.c!=d&&(b.c=d,b.a.push({timestamp:Date.now()/1E3,id:d.id,type:"variant",fromAdaptation:e,bandwidth:d.bandwidth}));}function Ul(b,c,d,e){Oh(b.$,c,d);b=b.u.c;b.b!=d&&(b.b=d,b.a.push({timestamp:Date.now()/1E3,id:d.id,type:"text",fromAdaptation:e,bandwidth:null}));}
  function Xk(b){var c=Nk();c.streaming.failureCallback=function(c){var d=[1001,1002,1003];b.V()&&d.includes(c.code)&&(c.severity=1,b.nd());};c.textDisplayFactory=function(){return new Hk(b.a)};return c}
  function xl(b,c){for(var d=0;d<c.length;d++){for(var e=c[d],f=new Map,g=r(e.variants),h=g.next();!h.done;h=g.next())if(h=h.value,h.video&&h.video.closedCaptions){h=h.video;for(var k=r(h.closedCaptions.keys()),l=k.next();!l.done;l=k.next())if(l=l.value,!f.has(l)){var m={id:b.Kd++,originalId:l,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return null},getSegmentReference:function(){return null},initSegmentReference:null,presentationTimeOffset:0,mimeType:"application/cea-608",
  codecs:"",kind:"caption",encrypted:!1,keyId:null,language:h.closedCaptions.get(l),label:null,type:"text",primary:!1,frameRate:void 0,pixelAspectRatio:void 0,trickModeVideo:null,emsgSchemeIdUris:null,roles:h.roles,channelsCount:null,audioSamplingRate:null,closedCaptions:null};f.set(l,m);}}f=r(f.values());for(g=f.next();!g.done;g=f.next())e.textStreams.push(g.value);}}
  function sl(b,c){var d=b.f?Si(b.f):null,e=b.f?Ui(b.f):null;c.forEach(we.bind(null,b.h,d,e));d=Nb(c,function(b){return b.variants.some(De)});if(0==d)throw new D(2,4,4032);if(d<c.length)throw new D(2,4,4011);c.forEach(function(b){ve(b.variants,this.c.restrictions,this.$b)&&this.f&&Jl(this)==b&&Il(this);cm(this,b.variants);}.bind(b));}q=X.prototype;
  q.Jc=function(b){var c=this.f?Si(this.f):null,d=this.f?Ui(this.f):null;we(this.h,c,d,b);c=b.variants;if(!c.some(De))throw new D(2,4,4011);cm(this,b.variants);ve(c,this.c.restrictions,this.$b)&&this.f&&Jl(this)==b&&Il(this);if(b=this.h?this.h.a:null)for(c=r(c),d=c.next();!d.done;d=c.next()){d=r(d.value.drmInfos);for(var e=d.next();!e.done;e=d.next())if(e=e.value,e.keySystem==b.keySystem){e=r(e.initData||[]);for(var f=e.next();!f.done;f=e.next())f=f.value,Wc(this.h,f.initDataType,f.initData);}}};
  function Xl(b,c,d,e){d=void 0===d?!1:d;e=void 0===e?0:e;b.kb?(b.pa=c,b.Hd=d,b.Fd=e):(aj(b.f,c,d,e),Yl(b));}function Vl(b,c){b.kb?b.oa=c:($i(b.f,c,!0,0,!1),Wl(b));}function Hl(b,c){function d(b,c){if(!b)return null;var d=b.findSegmentPosition(c-g.startTime);return null==d?null:(d=b.getSegmentReference(d))?d.startTime+g.startTime:null}var e=Si(b.f),f=Ui(b.f),g=Jl(b);e=d(e,c);f=d(f,c);return null!=f&&null!=e?Math.max(f,e):null!=f?f:null!=e?e:c}
  function ql(b){var c=b.Tc();if(b.u&&b.C&&b.m){var d=b.W;d.f=c;si(d);wl(b);}b.dispatchEvent(new I("buffering",{buffering:c}));}function wl(b){if(b.u&&b.C){var c=b.u.a;b.C.a==di?Rk(c,"buffering"):b.a.paused?Rk(c,"paused"):b.a.ended?Rk(c,"ended"):Rk(c,"playing");}}function Kl(b,c){try{cm(b,c);}catch(e){return b.Ma(e),null}var d=c.filter(function(b){return De(b)});d=b.Fb.create(d);b.l.setVariants(Array.from(d.values()));return b.l.chooseVariant()}
  function Ol(b,c){am(b,c,!1);var d=!1;d=void 0===d?!0:d;var e=Ge(c.textStreams,b.na,b.fb)[0]||null;e&&(b.c.streaming.alwaysStreamText||b.ic())&&(Ul(b,c,e,!0),Vl(b,e));d&&Al(b);Al(b);}function am(b,c,d){d=void 0===d?!0:d;var e=Kl(b,c.variants);e&&(zl(b,c,e,!0),Xl(b,e,!0));d&&Al(b);}
  q.hf=function(b){try{this.kb=!0;this.l.disable();Pl(this);var c=Kl(this,b.variants),d=Ge(b.textStreams,this.na,this.fb)[0]||null;this.pa&&(b.variants.includes(this.pa)&&(c=this.pa),this.pa=null);this.oa&&(b.textStreams.includes(this.oa)&&(d=this.oa),this.oa=null);c&&zl(this,b,c,!0);d&&Ul(this,b,d,!0);var e=this.f,f=e.b.get("video");if(f)var g=e.c.periods[f.ia];else{var h=e.b.get("audio");g=h?e.c.periods[h.ia]:null;}var k=c?c.audio:null;if(!g&&d){var l;if(l=k){b=d;var m=M(this.c.preferredTextLanguage),
  n=M(k.language),p=M(b.language);l=pe(p,m)&&!pe(n,p);}l&&(this.gb=!0);this.gb&&this.F.g.setTextVisibility(!0);bm(this);}return this.c.streaming.alwaysStreamText||this.ic()?{variant:c,text:d}:{variant:c,text:null}}catch(v){return this.Ma(v),{variant:null,text:null}}};q.ve=function(){this.kb=!1;this.c.abr.enabled&&(this.l.enable(),Pl(this));this.pa&&(aj(this.f,this.pa,this.Hd,this.Fd),Yl(this),this.pa=null);this.oa&&($i(this.f,this.oa,!0,0,!1),Wl(this),this.oa=null);};
  q.nf=function(){this.s&&this.s.update&&this.s.update();};q.uf=function(){this.m&&this.m.s();};function Al(b){dm(b,new I("adaptation"));}function Il(b){dm(b,new I("trackschanged"));}function Yl(b){dm(b,new I("variantchanged"));}function Wl(b){dm(b,new I("textchanged"));}function bm(b){dm(b,new I("texttrackvisibility"));}function Pl(b){dm(b,new I("abrstatuschanged",{wg:b.c.abr.enabled}));}q.Ma=function(b){if(this.i!=il){var c=new I("error",{detail:b});this.dispatchEvent(c);c.defaultPrevented&&(b.handled=!0);}};
  function rl(b,c,d){b.dispatchEvent(new I(c,{detail:{schemeIdUri:d.schemeIdUri,value:d.value,startTime:d.startTime,endTime:d.endTime,id:d.id,eventElement:d.eventElement}}));}function pl(b){if(!b.a.error)return null;var c=b.a.error.code;if(1==c)return null;var d=b.a.error.msExtendedCode;d&&(0>d&&(d+=Math.pow(2,32)),d=d.toString(16));return new D(2,3,3016,c,d,b.a.error.message)}
  function ul(b,c){if(b.f){var d=Jl(b),e=!1,f=Object.keys(c),g=1==f.length&&"00"==f[0];f.length&&b.b.periods.forEach(function(b){b.variants.forEach(function(b){Je(b).forEach(function(d){var f=b.allowedByKeySystem;d.keyId&&(d=c[g?"00":d.keyId],b.allowedByKeySystem=!!d&&!kl.includes(d));f!=b.allowedByKeySystem&&(e=!0);});});});f=Si(b.f);var h=Ui(b.f);(f=Ie(f,h,d.variants))&&!f.allowedByKeySystem&&am(b,d);e&&(Il(b),Kl(b,d.variants));}}
  function vl(b,c,d){if(b.s&&b.s.onExpirationUpdated)b.s.onExpirationUpdated(c,d);b.dispatchEvent(new I("expirationupdated"));}function yl(b,c,d){0<c&&(b.V()||b.fe(c));d<b.Y()&&(b.V()||b.xa(d));}
  function cm(b,c){var d=b.h?oc(b.h.W):{},e=Object.keys(d);e=e.length&&"00"==e[0];for(var f=!1,g=!1,h=[],k=[],l=r(c),m=l.next();!m.done;m=l.next()){m=m.value;var n=[];m.audio&&n.push(m.audio);m.video&&n.push(m.video);n=r(n);for(var p=n.next();!p.done;p=n.next())if(p=p.value,p.keyId){var v=d[e?"00":p.keyId];v?kl.includes(v)&&(k.includes(v)||k.push(v)):h.includes(p.keyId)||h.push(p.keyId);}m.allowedByApplication?m.allowedByKeySystem&&(f=!0):g=!0;}if(!f)throw new D(2,4,4012,{hasAppRestrictions:g,missingKeys:h,
  restrictedKeyStatuses:k});}function dm(b,c){t(function e(){return A(e,function(e){switch(e.j){case 1:return u(e,Promise.resolve(),2);case 2:b.i!=il&&b.dispatchEvent(c),w(e);}})});}function $l(b){var c=new Set;b=r(b);for(var d=b.next();!d.done;d=b.next())d=d.value,d.language?c.add(M(d.language)):c.add("und");return c}
  function Zl(b){var c=new Map;b=r(b);for(var d=b.next();!d.done;d=b.next()){var e=d.value;d="und";var f=[];e.language&&(d=M(e.language));"variant"==e.type?f=e.audioRoles:f=e.roles;f&&f.length||(f=[""]);c.has(d)||c.set(d,new Set);e=r(f);for(f=e.next();!f.done;f=e.next())f=f.value,c.get(d).add(f);}var g=[];c.forEach(function(b,c){for(var d=r(b),e=d.next();!e.done;e=d.next())g.push({language:c,role:e.value});});return g}
  function Rl(b){b=Jl(b);return null==b?[]:b.variants.filter(function(b){return De(b)})}function Tl(b){var c=Jl(b);return null==c?[]:c.textStreams.filter(function(c){return !b.Zb.has(c)})}function Jl(b){var c=b.m.h(),d=null;b=r(b.b.periods);for(var e=b.next();!e.done;e=b.next())e=e.value,e.startTime<=c&&(d=e);return d}function Ql(b){var c=Jl(b);return Ph(b.$,c).variant}
  function Sl(b){var c=Jl(b);if(null==c)return null;if(!Ph(b.$,c).text){var d=Ge(c.textStreams,b.na,b.fb);d.length&&Oh(b.$,c,d[0]);}return Ph(b.$,c).text}function ml(){return new D(2,7,7E3)}function hl(b,c,d,e,f,g){return e==b&&f.v==g.v&&f.uri==g.uri&&f.mimeType==g.mimeType&&f.Aa==g.Aa?c:d}function Ck(){return {Aa:null,v:null,mimeType:null,startTime:null,ud:null,uri:null}}
  function nl(b){return new Promise(function(c,d){b.Ya=function(){return d(ml())};b.lc=function(){return c()};b.onError=function(b){return d(b)};b.nc=function(){return d(ml())};})}var il=0,Wk=1,Gl=2,Ll=3;X.LoadMode={DESTROYED:il,NOT_LOADED:Wk,MEDIA_SOURCE:Gl,SRC_EQUALS:Ll};function em(b,c,d){var e=void 0==c.expiration?Infinity:c.expiration,f=c.presentationTimeline.Y();c=fm(c.periods[0]);return {offlineUri:null,originalManifestUri:b,duration:f,size:0,expiration:e,tracks:c,appMetadata:d}}function gm(b,c){var d=rk(new pk(b.wa(),b.ba()),c.periods[0],new V(null,0)),e=c.appMetadata||{};d=fm(d);return {offlineUri:b.toString(),originalManifestUri:c.originalManifestUri,duration:c.duration,size:c.size,expiration:c.expiration,tracks:d,appMetadata:e}}
  function fm(b){var c=[],d=Ee(b.variants);d=r(d);for(var e=d.next();!e.done;e=d.next())c.push(ye(e.value));b=r(b.textStreams);for(d=b.next();!d.done;d=b.next())c.push(ze(d.value));return c}function hm(){this.a={};}function im(b,c,d){d=d.endTime-d.startTime;return jm(b,c)*d}function jm(b,c){var d=b.a[c];null==d&&(d=0);return d}function km(b){this.a=!1;this.b=new F;this.c=b;}km.prototype.destroy=function(){var b=this;if(this.a)return this.b;this.a=!0;return this.c().then(function(){b.b.resolve();},function(){b.b.resolve();})};function lm(b,c){for(var d={width:Infinity,height:Infinity},e=r(b.periods),f=e.next();!f.done;f=e.next())f=f.value,f.variants=f.variants.filter(function(b){return ue(b,c,d)});}function mm(b){b=r(b.periods);for(var c=b.next();!c.done;c=b.next())c=c.value,c.variants=c.variants.filter(function(b){var c=!0;b.audio&&(c=c&&ce(b.audio));b.video&&(c=c&&ce(b.video));return c});}
  function nm(b,c){for(var d=r(b.periods),e=d.next();!e.done;e=d.next())e=e.value,e.variants=e.variants.filter(function(b){return ld(c,b)});}function om(b){var c=new pm;b.periods.forEach(function(b,d){var e=qm(b.variants);if(0==d){e=r(e.a);for(var f=e.next();!f.done;f=e.next())c.add(f.value);}else rm(c,e);});b=r(b.periods);for(var d=b.next();!d.done;d=b.next())d=d.value,d.variants=d.variants.filter(function(b){return sm(c,new tm(b))});}
  function um(b,c){var d=new pm;b.periods.forEach(function(b,f){0<f&&(b.variants=b.variants.filter(function(b){return sm(d,new tm(b))}));c(b);d=qm(b.variants);});}function tm(b){var c=b.audio;b=b.video;this.b=c?c.mimeType:null;this.a=c?c.codecs.split(".")[0]:null;this.f=b?b.mimeType:null;this.c=b?b.codecs.split(".")[0]:null;}function pm(){this.a=[];}pm.prototype.add=function(b){sm(this,b)||this.a.push(b);};function rm(b,c){b.a=b.a.filter(function(b){return sm(c,b)});}
  function sm(b,c){return b.a.some(function(b){return c.b==b.b&&c.a==b.a&&c.f==b.f&&c.c==b.c})}function qm(b){var c=new pm;b=r(b);for(var d=b.next();!d.done;d=b.next())c.add(new tm(d.value));return c}function Y(b){var c=this;if(b&&b.constructor!=X)throw new D(2,9,9008);this.b=this.a=null;b?(this.a=b.c,this.b=b.Kb()):(this.a=Nk(),this.b=new J);this.f=!1;this.c=[];this.g=[];var d=!b;this.h=new km(function(){return t(function f(){var b;return A(f,function(f){switch(f.j){case 1:return b=function(){},u(f,Promise.all(c.g.map(function(c){return c.then(b,b)})),2);case 2:if(!d){f.A(3);break}return u(f,c.b.destroy(),3);case 3:c.a=null,c.b=null,w(f);}})})});}B("shaka.offline.Storage",Y);
  function vm(){if(tc())a:{var b=r(Pj.values());for(var c=b.next();!c.done;c=b.next())if(c=c.value,c=c()){c.destroy();b=!0;break a}b=!1;}else b=!1;return b}Y.support=vm;Y.prototype.destroy=function(){return this.h.destroy()};Y.prototype.destroy=Y.prototype.destroy;
  Y.prototype.configure=function(b,c){2==arguments.length&&"string"==typeof b&&(b=Lk(b,c));var d=b,e=!1;null!=d.trackSelectionCallback&&(e=!0,d.offline=d.offline||{},d.offline.trackSelectionCallback=d.trackSelectionCallback,delete d.trackSelectionCallback);null!=d.progressCallback&&(e=!0,d.offline=d.offline||{},d.offline.progressCallback=d.progressCallback,delete d.progressCallback);null!=d.usePersistentLicense&&(e=!0,d.offline=d.offline||{},d.offline.usePersistentLicense=d.usePersistentLicense,delete d.usePersistentLicense);
  e&&Me("Storage.configure with OfflineConfig","Please configure storage with a player configuration.");return Pk(this.a,b)};Y.prototype.configure=Y.prototype.configure;Y.prototype.getConfiguration=function(){var b=Nk();Pk(b,this.a,Nk());return b};Y.prototype.getConfiguration=Y.prototype.getConfiguration;Y.prototype.Kb=function(){return this.b};Y.prototype.getNetworkingEngine=Y.prototype.Kb;
  Y.prototype.store=function(b,c,d){var e=this;return wm(this,xm(this,b,c||{},function(){return t(function g(){var c,k;return A(g,function(g){switch(g.j){case 1:return d&&"string"!=typeof d?(Me("Storing with a manifest parser factory","Please register a manifest parser and for the mime-type."),c=d,g["return"](new c)):u(g,U.create(b,e.b,e.a.manifest.retryParameters,d),2);case 2:return k=g.o,g["return"](k)}})})}))};Y.prototype.store=Y.prototype.store;Y.prototype.Ze=function(){return this.f};
  Y.prototype.getStoreInProgress=Y.prototype.Ze;
  function xm(b,c,d,e){return t(function g(){var h,k,l,m,n,p,v,x,z,y;return A(g,function(g){switch(g.j){case 1:ym();if(b.f)return g["return"](Promise.reject(new D(2,9,9006)));b.f=!0;return u(g,zm(b,c,e),2);case 2:h=g.o;Am(b);k=!h.presentationTimeline.V()&&!h.presentationTimeline.Xa();if(!k)throw new D(2,9,9005,c);l=null;m=new Oj;p=n=null;xa(g,3,4);return u(g,Bm(b,h,function(b){p=p||b;}),6);case 6:l=g.o;Am(b);if(p)throw p;Cm(b,h,l);return u(g,m.init(),7);case 7:return Am(b),u(g,Qj(m),8);case 8:return n=
  g.o,Am(b),u(g,Dm(b,n.ba,l,h,c,d),9);case 9:v=g.o;Am(b);if(p)throw p;return u(g,n.ba.addManifests([v]),10);case 10:return x=g.o,Am(b),z=new nk("manifest",n.path.wa,n.path.ba,x[0]),g["return"](gm(z,v));case 4:return Da(g),b.f=!1,b.c=[],u(g,m.destroy(),11);case 11:if(!l){g.A(12);break}return u(g,l.destroy(),12);case 12:Ea(g,0);break;case 3:y=Ca(g);if(!n){g.A(14);break}return u(g,n.ba.removeSegments(b.c,function(){}),14);case 14:throw p||y;}})})}
  function Cm(b,c,d){lm(c,b.a.restrictions);mm(c);nm(c,d);om(c);um(c,function(c){for(var d=[],e=r(c.variants),h=e.next();!h.done;h=e.next())d.push(ye(h.value));e=r(c.textStreams);for(h=e.next();!h.done;h=e.next())d.push(ze(h.value));d=b.a.offline.trackSelectionCallback(d);var k=new Set,l=new Set;d=r(d);for(e=d.next();!e.done;e=d.next())e=e.value,"variant"==e.type&&k.add(e.id),"text"==e.type&&l.add(e.id);c.variants=c.variants.filter(function(b){return k.has(b.id)});c.textStreams=c.textStreams.filter(function(b){return l.has(b.id)});});
  Em(c);}
  function Dm(b,c,d,e,f,g){return t(function k(){var l,m,n,p,v,x,z,y;return A(k,function(k){switch(k.j){case 1:return l=em(f,e,g),m=e.periods.some(function(b){return b.variants.some(function(b){return b.drmInfos&&b.drmInfos.length})}),n=e.periods.some(function(b){return b.variants.some(function(b){return b.drmInfos.some(function(b){return b.initData&&b.initData.length})})}),p=m&&!n,v=new Dj(b.b,function(c,d){l.size=d;b.a.offline.progressCallback(l,c);},function(c){p&&b.a.offline.usePersistentLicense&&Wc(d,
  "cenc",c);}),ya(k,2),z=x=Fm(b,v,c,d,e,f,g),u(k,Gj(v),4);case 4:z.size=k.o;x.expiration=d.Jb();y=bd(d);x.sessionIds=b.a.offline.usePersistentLicense?y:[];if(m&&b.a.offline.usePersistentLicense&&!y.length)throw new D(2,9,9007);return k["return"](x);case 2:return Da(k),u(k,v.destroy(),5);case 5:Ea(k,0);}})})}Y.prototype.remove=function(b){return wm(this,Gm(this,b))};Y.prototype.remove=Y.prototype.remove;
  function Gm(b,c){return t(function e(){var f,g,h,k,l,m;return A(e,function(e){switch(e.j){case 1:ym();f=ok(c);if(null==f||"manifest"!=f.a)return e["return"](Promise.reject(new D(2,9,9004,c)));g=f;h=new Oj;ya(e,2);return u(e,h.init(),4);case 4:return u(e,Sj(h,g.wa(),g.ba()),5);case 5:return k=e.o,u(e,k.getManifests([g.key()]),6);case 6:return l=e.o,m=l[0],u(e,Promise.all([Hm(b,m,h),Im(b,k,g,m)]),2);case 2:return Da(e),u(e,h.destroy(),8);case 8:Ea(e,0);}})})}
  function Jm(b,c){for(var d=[],e=r(b.periods),f=e.next();!f.done;f=e.next()){f=r(f.value.streams);for(var g=f.next();!g.done;g=f.next())g=g.value,c&&"video"==g.contentType?d.push({contentType:pc(g.mimeType,g.codecs),robustness:b.drmInfo.videoRobustness}):c||"audio"!=g.contentType||d.push({contentType:pc(g.mimeType,g.codecs),robustness:b.drmInfo.audioRobustness});}return d}function Hm(b,c,d){return t(function f(){return A(f,function(f){switch(f.j){case 1:return u(f,Km(b.b,b.a.drm,d,c),0)}})})}
  function Im(b,c,d,e){function f(){k+=1;b.a.offline.progressCallback(l,k/h);}var g=Lm(e),h=g.length+1,k=0,l=gm(d,e);return Promise.all([c.removeSegments(g,f),c.removeManifests([d.key()],f)])}Y.prototype.Jf=function(){return wm(this,Mm(this))};Y.prototype.removeEmeSessions=Y.prototype.Jf;
  function Mm(b){return t(function d(){var e,f,g,h,k,l,m,n,p;return A(d,function(d){switch(d.j){case 1:return ym(),e=b.b,f=b.a.drm,g=new Oj,h=!1,ya(d,2),u(d,g.init(),4);case 4:k=[];Tj(g,function(b){return k.push(b)});l=Promise.resolve();m={};n=r(k);for(p=n.next();!p.done;m={sc:m.sc},p=n.next())m.sc=p.value,l=l.then(function(b){return function(){return t(function y(){var d,g;return A(y,function(k){switch(k.j){case 1:return u(k,b.sc.getAll(),2);case 2:return d=k.o,u(k,yk(f,e,d),3);case 3:return g=k.o,
  u(k,b.sc.remove(g),4);case 4:g.length!=d.length&&(h=!0),w(k);}})})}}(m));return u(d,l,2);case 2:return Da(d),u(d,g.destroy(),6);case 6:Ea(d,3);break;case 3:return d["return"](!h)}})})}Y.prototype.list=function(){return wm(this,Nm())};Y.prototype.list=Y.prototype.list;
  function Nm(){return t(function c(){var d,e,f;return A(c,function(c){switch(c.j){case 1:return ym(),d=[],e=new Oj,ya(c,2),u(c,e.init(),4);case 4:return f=Promise.resolve(),Rj(e,function(c,e){f=f.then(function(){return t(function m(){var f;return A(m,function(g){switch(g.j){case 1:return u(g,e.getAllManifests(),2);case 2:f=g.o,f.forEach(function(e,f){var g=gm(new nk("manifest",c.wa,c.ba,f),e);d.push(g);}),w(g);}})})});}),u(c,f,2);case 2:return Da(c),u(c,e.destroy(),6);case 6:Ea(c,3);break;case 3:return c["return"](d)}})})}
  function zm(b,c,d){return t(function f(){var g,h,k,l,m,n;return A(f,function(f){switch(f.j){case 1:return g=null,h=b.b,k={networkingEngine:h,filterAllPeriods:function(){},filterNewPeriod:function(){},onTimelineRegionAdded:function(){},onEvent:function(){},onError:function(b){g=b;}},u(f,d(),2);case 2:return l=f.o,l.configure(b.a.manifest),Am(b),ya(f,3),u(f,l.start(c,k),5);case 5:return m=f.o,Am(b),n=Om(m),u(f,Promise.all(Array.from(n).map(function(b){return b.createSegmentIndex()})),6);case 6:Am(b);
  if(g)throw g;return f["return"](m);case 3:return Da(f),u(f,l.stop(),7);case 7:Ea(f,0);}})})}function Bm(b,c,d){return t(function f(){var g,h,k;return A(f,function(f){switch(f.j){case 1:return g=new Fc({tb:b.b,onError:d,mc:function(){},onExpirationUpdated:function(){},onEvent:function(){}}),h=ni(c.periods),k=b.a,g.configure(k.drm),u(f,Kc(g,h,k.offline.usePersistentLicense),2);case 2:return u(f,Uc(g),3);case 3:return u(f,Vc(g),4);case 4:return f["return"](g)}})})}
  function Fm(b,c,d,e,f,g,h){var k=new hm,l=f.periods.map(function(e){return Pm(b,c,d,k,f,e)}),m=e.a,n=b.a.offline.usePersistentLicense;m&&n&&(m.initData=[]);return {originalManifestUri:g,duration:f.presentationTimeline.Y(),size:0,expiration:e.Jb(),periods:l,sessionIds:n?bd(e):[],drmInfo:m,appMetadata:h}}
  function Pm(b,c,d,e,f,g){f.periods.forEach(function(b){b.variants.forEach(function(b){var c=b.audio,d=b.video;c&&!d&&(e.a[c.id]=c.bandwidth||b.bandwidth);!c&&d&&(e.a[d.id]=d.bandwidth||b.bandwidth);if(c&&d){var f=c.bandwidth||393216,g=d.bandwidth||b.bandwidth-f;0>=g&&(g=b.bandwidth);e.a[c.id]=f;e.a[d.id]=g;}});b.textStreams.forEach(function(b){e.a[b.id]=52;});});var h=Om(f),k=new Map;h=r(h);for(var l=h.next();!l.done;l=h.next()){l=l.value;var m=Qm(b,c,d,e,f,l);k.set(l.id,m);}g.variants.forEach(function(b){b.audio&&
  k.get(b.audio.id).variantIds.push(b.id);b.video&&k.get(b.video.id).variantIds.push(b.id);});return {startTime:g.startTime,streams:Array.from(k.values())}}
  function Qm(b,c,d,e,f,g){var h={id:g.id,originalId:g.originalId,primary:g.primary,presentationTimeOffset:g.presentationTimeOffset||0,contentType:g.type,mimeType:g.mimeType,codecs:g.codecs,frameRate:g.frameRate,pixelAspectRatio:g.pixelAspectRatio,kind:g.kind,language:g.language,label:g.label,width:g.width||null,height:g.height||null,initSegmentKey:null,encrypted:g.encrypted,keyId:g.keyId,segments:[],variantIds:[]};f=f.presentationTimeline.Mb();var k=g.id,l=g.initSegmentReference;l&&(l=wg(l.c(),l.b,
  l.a,b.a.streaming.retryParameters),Ej(c,k,l,.5*jm(e,g.id),!0,function(c){return t(function p(){var e;return A(p,function(f){switch(f.j){case 1:return u(f,d.addSegments([{data:c}]),2);case 2:e=f.o,b.c.push(e[0]),h.initSegmentKey=e[0],w(f);}})})}));Rm(g,f,function(f){var l=wg(f.c(),f.b,f.a,b.a.streaming.retryParameters);Ej(c,k,l,im(e,g.id,f),!1,function(c){return t(function x(){var e;return A(x,function(g){switch(g.j){case 1:return u(g,d.addSegments([{data:c}]),2);case 2:e=g.o,b.c.push(e[0]),h.segments.push({startTime:f.startTime,
  endTime:f.endTime,dataKey:e[0]}),w(g);}})})});});return h}function Rm(b,c,d){c=b.findSegmentPosition(c);for(var e=null==c?null:b.getSegmentReference(c);e;)d(e),e=b.getSegmentReference(++c);}function Am(b){if(b.h.a)throw new D(2,9,7001);}function ym(){if(!vm())throw new D(2,9,9E3);}function wm(b,c){return t(function e(){return A(e,function(e){switch(e.j){case 1:return b.g.push(c),ya(e,2),u(e,c,4);case 4:return e["return"](e.o);case 2:Da(e),Mb(b.g,c),Ea(e,0);}})})}
  function Lm(b){var c=[];b.periods.forEach(function(b){b.streams.forEach(function(b){null!=b.initSegmentKey&&c.push(b.initSegmentKey);b.segments.forEach(function(b){c.push(b.dataKey);});});});return c}Y.deleteAll=function(){return t(function c(){var d;return A(c,function(c){switch(c.j){case 1:return d=new Oj,ya(c,2),u(c,d.erase(),2);case 2:return Da(c),u(c,d.destroy(),5);case 5:Ea(c,0);}})})};
  function Km(b,c,d,e){return t(function g(){var h,k,l;return A(g,function(g){switch(g.j){case 1:if(!e.drmInfo)return g["return"]();h=Uj(d);k=e.sessionIds.map(function(b){return {sessionId:b,keySystem:e.drmInfo.keySystem,licenseUri:e.drmInfo.licenseServerUri,serverCertificate:e.drmInfo.serverCertificate,audioCapabilities:Jm(e,!1),videoCapabilities:Jm(e,!0)}});return u(g,yk(c,b,k),2);case 2:return l=g.o,u(g,h.remove(l),3);case 3:return u(g,h.add(k.filter(function(b){return -1==l.indexOf(b.sessionId)})),
  0)}})})}function Om(b){var c=new Set;b=r(b.periods);for(var d=b.next();!d.done;d=b.next()){d=d.value;for(var e=r(d.textStreams),f=e.next();!f.done;f=e.next())c.add(f.value);d=r(d.variants);for(e=d.next();!e.done;e=d.next())e=e.value,e.audio&&c.add(e.audio),e.video&&c.add(e.video);}return c}function Em(b){if(0==b.periods.length)throw new D(2,4,4014);b=r(b.periods);for(var c=b.next();!c.done;c=b.next())Sm(c.value);}
  function Sm(b){b.variants.map(function(b){return b.video});var c=new Set(b.variants.map(function(b){return b.audio}));b=b.textStreams;for(var d=r(c),e=d.next();!e.done;e=d.next()){e=r(c);for(var f=e.next();!f.done;f=e.next());}c=r(b);for(d=c.next();!d.done;d=c.next())for(d=r(b),e=d.next();!e.done;e=d.next());}ll.offline=vm;B("shaka.polyfill.installAll",function(){for(var b=0;b<Tm.length;++b)try{Tm[b].te();}catch(c){$a("Error installing polyfill!",c);}});var Tm=[];function Um(b,c){c=c||0;for(var d={priority:c,te:b},e=0;e<Tm.length;e++)if(Tm[e].priority<c){Tm.splice(e,0,d);return}Tm.push(d);}B("shaka.polyfill.register",Um);Um(function(){Vm();},-1);function Wm(b){var c=b.type.replace(/^(webkit|moz|MS)/,"").toLowerCase();if("function"===typeof Event)var d=new Event(c,b);else d=document.createEvent("Event"),d.initEvent(c,b.bubbles,b.cancelable);b.target.dispatchEvent(d);}
  Um(function(){if(window.Document){var b=Element.prototype;b.requestFullscreen=b.requestFullscreen||b.mozRequestFullScreen||b.msRequestFullscreen||b.webkitRequestFullscreen;b=Document.prototype;b.exitFullscreen=b.exitFullscreen||b.mozCancelFullScreen||b.msExitFullscreen||b.webkitExitFullscreen;"fullscreenElement"in document||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}}),Object.defineProperty(document,
  "fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled}}));document.addEventListener("webkitfullscreenchange",Wm);document.addEventListener("webkitfullscreenerror",Wm);document.addEventListener("mozfullscreenchange",Wm);document.addEventListener("mozfullscreenerror",Wm);document.addEventListener("MSFullscreenChange",Wm);document.addEventListener("MSFullscreenError",Wm);}});Um(function(){var b=!1;if(xc("CrKey"))b=!0;else try{window.indexedDB&&(b=!1);}catch(c){b=!0;}b&&delete window.indexedDB;});function Xm(b,c,d){if("input"==b)switch(this.type){case "range":b="change";}HTMLInputElement.prototype.originalAddEventListener.call(this,b,c,d);}Um(function(){xc("Trident/")&&!HTMLInputElement.prototype.originalAddEventListener&&(HTMLInputElement.prototype.originalAddEventListener=HTMLInputElement.prototype.addEventListener,HTMLInputElement.prototype.addEventListener=Xm);});Um(function(){navigator.languages||Object.defineProperty(navigator,"languages",{get:function(){return navigator.language?[navigator.language]:["en"]}});});Um(function(){});function Ym(){var b=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];d=b.apply(this,d);d.abort=function(){};return d};}function Zm(){var b=SourceBuffer.prototype.remove;SourceBuffer.prototype.remove=function(c,d){return b.call(this,c,d-.001)};}function $m(){var b=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(c){return "mp2t"==c.split(/ *; */)[0].split("/")[1].toLowerCase()?!1:b(c)};}
  function an(){var b=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(c){return "opus"!=sc(c)[0]&&b(c)};}
  function bn(){var b=MediaSource.isTypeSupported,c=/^dv(?:h[e1]|a[v1])\./;MediaSource.isTypeSupported=function(d){for(var e=d.split(/ *; */),f=e[0],g={},h=1;h<e.length;++h){var k=e[h].split("="),l=k[0];k=k[1].replace(/"(.*)"/,"$1");g[l]=k;}e=g.codecs;if(!e)return b(d);var m=!1,n=!1;d=e.split(",").filter(function(b){c.test(b)&&(n=!0);/^(hev|hvc)1\.2/.test(b)&&(m=!0);return !0});n&&(m=!1);g.codecs=d.join(",");m&&(g.eotf="smpte2084");for(var p in g)f+="; "+p+'="'+g[p]+'"';return cast.__platform__.canDisplayType(f)};}
  Um(function(){if(window.MediaSource)if(window.cast&&cast.__platform__&&cast.__platform__.canDisplayType)bn();else if(navigator.vendor&&navigator.vendor.includes("Apple")){var b=navigator.appVersion.match(/Version\/(\d+)/);b=parseInt(b[1],10);$m();10>=b?window.MediaSource=null:12>=b?(Ym(),Zm()):Ym();}else xc("Tizen")&&an();});function cn(b,c){try{var d=new dn(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}
  function dn(b,c){this.keySystem=b;if(b.startsWith("com.apple.fps"))for(var d=r(c),e=d.next();!e.done;e=d.next()){var f=e.value;if("required"==f.persistentState)e=null;else{e={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:f.initDataTypes,sessionTypes:["temporary"],label:f.label};var g=!1,h=!1;if(f.audioCapabilities)for(var k=r(f.audioCapabilities),l=k.next();!l.done;l=k.next())if(l=l.value,l.contentType){g=!0;var m=l.contentType.split(";")[0];
  WebKitMediaKeys.isTypeSupported(this.keySystem,m)&&(e.audioCapabilities.push(l),h=!0);}if(f.videoCapabilities)for(f=r(f.videoCapabilities),l=f.next();!l.done;l=f.next())k=l.value,k.contentType&&(g=!0,l=k.contentType.split(";")[0],WebKitMediaKeys.isTypeSupported(this.keySystem,l)&&(e.videoCapabilities.push(k),h=!0));g||(h=WebKitMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));e=h?e:null;}if(e){this.a=e;return}}d=Error("Unsupported keySystem");d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;
  throw d;}dn.prototype.createMediaKeys=function(){var b=new en(this.keySystem);return Promise.resolve(b)};dn.prototype.getConfiguration=function(){return this.a};function fn(b){var c=this.mediaKeys;c&&c!=b&&gn(c,null);delete this.mediaKeys;return (this.mediaKeys=b)?gn(b,this):Promise.resolve()}function en(b){this.b=new WebKitMediaKeys(b);this.a=new K;}
  en.prototype.createSession=function(b){b=b||"temporary";if("temporary"!=b)throw new TypeError("Session type "+b+" is unsupported on this platform.");return new hn(this.b,b)};en.prototype.setServerCertificate=function(b){return Promise.resolve(!0)};
  function gn(b,c){b.a.$a();if(!c)return Promise.resolve();b.a.w(c,"webkitneedkey",jn);try{return 1<=c.readyState?c.webkitSetMediaKeys(b.b):b.a.da(c,"loadedmetadata",function(){c.webkitSetMediaKeys(b.b);}),Promise.resolve()}catch(d){return Promise.reject(d)}}function hn(b){Jb.call(this);this.b=null;this.g=b;this.c=this.a=null;this.f=new K;this.sessionId="";this.expiration=NaN;this.closed=new F;this.keyStatuses=new kn;}Ta(hn,Jb);q=hn.prototype;
  q.generateRequest=function(b,c){this.a=new F;try{this.b=this.g.createSession("video/mp4",new Uint8Array(c)),this.sessionId=this.b.sessionId||"",this.f.w(this.b,"webkitkeymessage",this.ag.bind(this)),this.f.w(this.b,"webkitkeyadded",this.Zf.bind(this)),this.f.w(this.b,"webkitkeyerror",this.$f.bind(this)),ln(this,"status-pending");}catch(d){this.a.reject(d);}return this.a};q.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};q.update=function(b){this.c=new F;try{this.b.update(new Uint8Array(b));}catch(c){this.c.reject(c);}return this.c};
  q.close=function(){try{this.b.close(),this.closed.resolve(),this.f.$a();}catch(b){this.closed.reject(b);}return this.closed};q.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};function jn(b){var c=new Event("encrypted");c.initDataType="cenc";c.initData=b.initData;this.dispatchEvent(c);}
  q.ag=function(b){this.a&&(this.a.resolve(),this.a=null);this.dispatchEvent(new I("message",{messageType:void 0==this.keyStatuses.a?"license-request":"license-renewal",message:b.message.buffer}));};q.Zf=function(){this.c&&(ln(this,"usable"),this.c.resolve(),this.c=null);};
  q.$f=function(){var b=Error("EME PatchedMediaKeysApple key error");b.errorCode=this.b.error;if(null!=this.a)this.a.reject(b),this.a=null;else if(null!=this.c)this.c.reject(b),this.c=null;else switch(this.b.error.code){case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:ln(this,"output-not-allowed");break;default:ln(this,"internal-error");}};function ln(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new I("keystatuseschange"));}
  function kn(){this.size=0;this.a=void 0;}var mn;q=kn.prototype;q.forEach=function(b){this.a&&b(this.a,mn);};q.get=function(b){if(this.has(b))return this.a};q.has=function(b){var c=mn;return this.a&&L.za(new Uint8Array(b),new Uint8Array(c))?!0:!1};q.entries=function(){};q.keys=function(){};q.values=function(){};
  Um(function(){window.HTMLVideoElement&&window.WebKitMediaKeys&&(mn=(new Uint8Array([0])).buffer,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=fn,window.MediaKeys=en,window.MediaKeySystemAccess=dn,navigator.requestMediaKeySystemAccess=cn);});function nn(b,c){try{var d=new on(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}
  function on(b,c){this.keySystem=b;for(var d=!1,e=0;e<c.length;++e){var f=c[e],g={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:f.initDataTypes,sessionTypes:["temporary"],label:f.label},h=!1;if(f.audioCapabilities)for(var k=0;k<f.audioCapabilities.length;++k){var l=f.audioCapabilities[k];if(l.contentType){h=!0;var m=l.contentType.split(";")[0];MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.audioCapabilities.push(l),d=!0);}}if(f.videoCapabilities)for(k=
  0;k<f.videoCapabilities.length;++k)l=f.videoCapabilities[k],l.contentType&&(h=!0,m=l.contentType.split(";")[0],MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.videoCapabilities.push(l),d=!0));h||(d=MSMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));"required"==f.persistentState&&(d=!1);if(d){this.a=g;return}}d=Error("Unsupported keySystem");d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}on.prototype.createMediaKeys=function(){var b=new pn(this.keySystem);return Promise.resolve(b)};
  on.prototype.getConfiguration=function(){return this.a};function qn(b){var c=this.mediaKeys;c&&c!=b&&rn(c,null);delete this.mediaKeys;return (this.mediaKeys=b)?rn(b,this):Promise.resolve()}function pn(b){this.a=new MSMediaKeys(b);this.b=new K;}pn.prototype.createSession=function(b){b=b||"temporary";if("temporary"!=b)throw new TypeError("Session type "+b+" is unsupported on this platform.");return new sn(this.a,b)};pn.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
  function rn(b,c){function d(){c.msSetMediaKeys(e.a);c.removeEventListener("loadedmetadata",d);}b.b.$a();if(!c)return Promise.resolve();b.b.w(c,"msneedkey",tn);var e=b;try{return 1<=c.readyState?c.msSetMediaKeys(b.a):c.addEventListener("loadedmetadata",d),Promise.resolve()}catch(f){return Promise.reject(f)}}function sn(b){Jb.call(this);this.c=null;this.g=b;this.b=this.a=null;this.f=new K;this.sessionId="";this.expiration=NaN;this.closed=new F;this.keyStatuses=new un;}Ta(sn,Jb);q=sn.prototype;
  q.generateRequest=function(b,c){this.a=new F;try{this.c=this.g.createSession("video/mp4",new Uint8Array(c),null),this.f.w(this.c,"mskeymessage",this.sf.bind(this)),this.f.w(this.c,"mskeyadded",this.qf.bind(this)),this.f.w(this.c,"mskeyerror",this.rf.bind(this)),vn(this,"status-pending");}catch(d){this.a.reject(d);}return this.a};q.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};q.update=function(b){this.b=new F;try{this.c.update(new Uint8Array(b));}catch(c){this.b.reject(c);}return this.b};
  q.close=function(){try{this.c.close(),this.closed.resolve(),this.f.$a();}catch(b){this.closed.reject(b);}return this.closed};q.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};function tn(b){if(b.initData){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="cenc";c.initData=If(b.initData);this.dispatchEvent(c);}}
  q.sf=function(b){this.a&&(this.a.resolve(),this.a=null);this.dispatchEvent(new I("message",{messageType:void 0==this.keyStatuses.a?"license-request":"license-renewal",message:b.message.buffer}));};q.qf=function(){this.a?(vn(this,"usable"),this.a.resolve(),this.a=null):this.b&&(vn(this,"usable"),this.b.resolve(),this.b=null);};
  q.rf=function(){var b=Error("EME PatchedMediaKeysMs key error");b.errorCode=this.c.error;if(null!=this.a)this.a.reject(b),this.a=null;else if(null!=this.b)this.b.reject(b),this.b=null;else switch(this.c.error.code){case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:vn(this,"output-not-allowed");break;default:vn(this,"internal-error");}};function vn(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new I("keystatuseschange"));}
  function un(){this.size=0;this.a=void 0;}var wn;q=un.prototype;q.forEach=function(b){this.a&&b(this.a,wn);};q.get=function(b){if(this.has(b))return this.a};q.has=function(b){var c=wn;return this.a&&L.za(new Uint8Array(b),new Uint8Array(c))?!0:!1};q.entries=function(){};q.keys=function(){};q.values=function(){};
  Um(function(){!window.HTMLVideoElement||!window.MSMediaKeys||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(wn=(new Uint8Array([0])).buffer,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=qn,window.MediaKeys=pn,window.MediaKeySystemAccess=on,navigator.requestMediaKeySystemAccess=nn);});function xn(){return Promise.reject(Error("The key system specified is not supported."))}function yn(b){return null==b?Promise.resolve():Promise.reject(Error("MediaKeys not supported."))}function zn(){throw new TypeError("Illegal constructor.");}zn.prototype.createSession=function(){};zn.prototype.setServerCertificate=function(){};function An(){throw new TypeError("Illegal constructor.");}An.prototype.getConfiguration=function(){};An.prototype.createMediaKeys=function(){};
  Um(function(){!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(navigator.requestMediaKeySystemAccess=xn,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=yn,window.MediaKeys=zn,window.MediaKeySystemAccess=An);},-10);var Bn="";function Cn(b){var c=Bn;return c?c+b.charAt(0).toUpperCase()+b.slice(1):b}function Dn(b,c){try{var d=new En(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}function Fn(b){var c=this.mediaKeys;c&&c!=b&&Gn(c,null);delete this.mediaKeys;(this.mediaKeys=b)&&Gn(b,this);return Promise.resolve()}
  function En(b,c){this.a=this.keySystem=b;var d=!1;"org.w3.clearkey"==b&&(this.a="webkit-org.w3.clearkey",d=!1);var e=!1;var f=document.getElementsByTagName("video");f=f.length?f[0]:document.createElement("video");for(var g=0;g<c.length;++g){var h=c[g],k={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:h.initDataTypes,sessionTypes:["temporary"],label:h.label},l=!1;if(h.audioCapabilities)for(var m=0;m<h.audioCapabilities.length;++m){var n=
  h.audioCapabilities[m];if(n.contentType){l=!0;var p=n.contentType.split(";")[0];f.canPlayType(p,this.a)&&(k.audioCapabilities.push(n),e=!0);}}if(h.videoCapabilities)for(m=0;m<h.videoCapabilities.length;++m)n=h.videoCapabilities[m],n.contentType&&(l=!0,f.canPlayType(n.contentType,this.a)&&(k.videoCapabilities.push(n),e=!0));l||(e=f.canPlayType("video/mp4",this.a)||f.canPlayType("video/webm",this.a));"required"==h.persistentState&&(d?(k.persistentState="required",k.sessionTypes=["persistent-license"]):
  e=!1);if(e){this.b=k;return}}d="Unsupported keySystem";if("org.w3.clearkey"==b||"com.widevine.alpha"==b)d="None of the requested configurations were supported.";d=Error(d);d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}En.prototype.createMediaKeys=function(){var b=new Hn(this.a);return Promise.resolve(b)};En.prototype.getConfiguration=function(){return this.b};function Hn(b){this.g=b;this.b=null;this.a=new K;this.c=[];this.f={};}
  function Gn(b,c){b.b=c;b.a.$a();var d=Bn;c&&(b.a.w(c,d+"needkey",b.xf.bind(b)),b.a.w(c,d+"keymessage",b.dg.bind(b)),b.a.w(c,d+"keyadded",b.bg.bind(b)),b.a.w(c,d+"keyerror",b.cg.bind(b)));}q=Hn.prototype;q.createSession=function(b){b=b||"temporary";if("temporary"!=b&&"persistent-license"!=b)throw new TypeError("Session type "+b+" is unsupported on this platform.");var c=this.b||document.createElement("video");c.src||(c.src="about:blank");b=new In(c,this.g,b);this.c.push(b);return b};
  q.setServerCertificate=function(){return Promise.resolve(!1)};q.xf=function(b){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="webm";c.initData=b.initData;this.b.dispatchEvent(c);};q.dg=function(b){var c=Jn(this,b.sessionId);c&&(b=new I("message",{messageType:void 0==c.keyStatuses.a?"licenserequest":"licenserenewal",message:b.message}),c.b&&(c.b.resolve(),c.b=null),c.dispatchEvent(b));};
  q.bg=function(b){if(b=Jn(this,b.sessionId))Kn(b,"usable"),b.a&&b.a.resolve(),b.a=null;};q.cg=function(b){var c=Jn(this,b.sessionId);c&&c.handleError(b);};function Jn(b,c){var d=b.f[c];return d?d:(d=b.c.shift())?(d.sessionId=c,b.f[c]=d):null}function In(b,c,d){Jb.call(this);this.f=b;this.h=!1;this.a=this.b=null;this.c=c;this.g=d;this.sessionId="";this.expiration=NaN;this.closed=new F;this.keyStatuses=new Ln;}Ta(In,Jb);q=In.prototype;
  q.handleError=function(b){var c=Error("EME v0.1b key error");c.errorCode=b.errorCode;c.errorCode.systemCode=b.systemCode;!b.sessionId&&this.b?(c.method="generateRequest",45==b.systemCode&&(c.message="Unsupported session type."),this.b.reject(c),this.b=null):b.sessionId&&this.a?(c.method="update",this.a.reject(c),this.a=null):(c=b.systemCode,b.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?Kn(this,"output-restricted"):1==c?Kn(this,"expired"):Kn(this,"internal-error"));};
  function Mn(b,c,d){if(b.h)return Promise.reject(Error("The session is already initialized."));b.h=!0;try{if("persistent-license"==b.g)if(d)var e=new Uint8Array(Dc("LOAD_SESSION|"+d));else{var f=Dc("PERSISTENT|"),g=new Uint8Array(f.byteLength+c.byteLength);g.set(new Uint8Array(f),0);g.set(new Uint8Array(c),f.byteLength);e=g;}else e=new Uint8Array(c);}catch(k){return Promise.reject(k)}b.b=new F;var h=Cn("generateKeyRequest");try{b.f[h](b.c,e);}catch(k){if("InvalidStateError"!=k.name)return b.b=null,Promise.reject(k);
  (new C(function(){try{b.f[h](b.c,e);}catch(l){b.b.reject(l),b.b=null;}})).P(.01);}return b.b}
  q.td=function(b,c){if(this.a)this.a.then(this.td.bind(this,b,c))["catch"](this.td.bind(this,b,c));else{this.a=b;if("webkit-org.w3.clearkey"==this.c){var d=Ac(c);var e=JSON.parse(d);"oct"!=e.keys[0].kty&&(this.a.reject(Error("Response is not a valid JSON Web Key Set.")),this.a=null);d=L.Ba(e.keys[0].k);e=L.Ba(e.keys[0].kid);}else d=new Uint8Array(c),e=null;var f=Cn("addKey");try{this.f[f](this.c,d,e,this.sessionId);}catch(g){this.a.reject(g),this.a=null;}}};
  function Kn(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new I("keystatuseschange"));}q.generateRequest=function(b,c){return Mn(this,c,null)};q.load=function(b){return "persistent-license"==this.g?Mn(this,null,b):Promise.reject(Error("Not a persistent session."))};q.update=function(b){var c=new F;this.td(c,b);return c};
  q.close=function(){if("persistent-license"!=this.g){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;var b=Cn("cancelKeyRequest");try{this.f[b](this.c,this.sessionId);}catch(c){}}this.closed.resolve();return this.closed};q.remove=function(){return "persistent-license"!=this.g?Promise.reject(Error("Not a persistent session.")):this.close()};function Ln(){this.size=0;this.a=void 0;}var Nn;q=Ln.prototype;q.forEach=function(b){this.a&&b(this.a,Nn);};q.get=function(b){if(this.has(b))return this.a};
  q.has=function(b){var c=Nn;return this.a&&L.za(new Uint8Array(b),new Uint8Array(c))?!0:!1};q.entries=function(){};q.keys=function(){};q.values=function(){};
  Um(function(){if(!(!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration)){if(HTMLMediaElement.prototype.webkitGenerateKeyRequest)Bn="webkit";else if(!HTMLMediaElement.prototype.generateKeyRequest)return;Nn=(new Uint8Array([0])).buffer;navigator.requestMediaKeySystemAccess=Dn;delete HTMLMediaElement.prototype.mediaKeys;HTMLMediaElement.prototype.mediaKeys=null;HTMLMediaElement.prototype.setMediaKeys=Fn;window.MediaKeys=Hn;window.MediaKeySystemAccess=
  En;}});function On(b){b=b.target;if("picture-in-picture"==b.webkitPresentationMode){document.pictureInPictureElement=b;var c=new Event("enterpictureinpicture");b.dispatchEvent(c);}else document.pictureInPictureElement==b&&(document.pictureInPictureElement=null),c=new Event("leavepictureinpicture"),b.dispatchEvent(c);}
  function Pn(){return this.webkitSupportsPresentationMode("picture-in-picture")?(this.webkitSetPresentationMode("picture-in-picture"),document.pictureInPictureElement=this,Promise.resolve()):Promise.reject(Error("PiP not allowed by video element"))}function Qn(){var b=document.pictureInPictureElement;return b?(b.webkitSetPresentationMode("inline"),document.pictureInPictureElement=null,Promise.resolve()):Promise.reject(Error("No picture in picture element found"))}
  Um(function(){if(window.HTMLVideoElement){var b=HTMLVideoElement.prototype;b.requestPictureInPicture&&document.exitPictureInPicture||!b.webkitSupportsPresentationMode||(document.pictureInPictureEnabled=!0,document.pictureInPictureElement=null,b.requestPictureInPicture=Pn,document.exitPictureInPicture=Qn,document.addEventListener("webkitpresentationmodechanged",On,!0));}});Um(function(){if(window.HTMLMediaElement){var b=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){var c=b.apply(this);c&&c["catch"](function(){});return c};}});function Rn(){return {droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}}Um(function(){if(window.HTMLVideoElement){var b=HTMLVideoElement.prototype;!b.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in b&&(b.getVideoPlaybackQuality=Rn);}});function Sn(b,c,d){return new window.TextTrackCue(b,c,d)}function Tn(b,c,d){return new window.TextTrackCue(b+"-"+c+"-"+d,b,c,d)}Um(function(){if(!window.VTTCue&&window.TextTrackCue){var b=TextTrackCue.length;if(3==b)window.VTTCue=Sn;else if(6==b)window.VTTCue=Tn;else{try{var c=!!Sn(1,2,"");}catch(d){c=!1;}c&&(window.VTTCue=Sn);}}});function Un(){}Un.prototype.parseInit=function(){};
  Un.prototype.parseMedia=function(b,c){var d=Ac(b),e=[],f=new DOMParser,g=null;if(""==d)return e;try{g=f.parseFromString(d,"text/xml");}catch(aa){throw new D(2,2,2005,"Failed to parse TTML.");}if(g){if(d=g.getElementsByTagName("parsererror")[0])throw new D(2,2,2005,d.textContent);if(f=g.getElementsByTagName("tt")[0]){var h=R.getAttributeNS(f,"http://www.w3.org/ns/ttml#parameter","frameRate");var k=R.getAttributeNS(f,"http://www.w3.org/ns/ttml#parameter","subFrameRate");var l=R.getAttributeNS(f,"http://www.w3.org/ns/ttml#parameter",
  "frameRateMultiplier");var m=R.getAttributeNS(f,"http://www.w3.org/ns/ttml#parameter","tickRate");g=f.getAttribute("xml:space")||"default";d=f.getAttribute("tts:extent");}else throw new D(2,2,2005,"TTML does not contain <tt> tag.");if("default"!=g&&"preserve"!=g)throw new D(2,2,2005,"Invalid xml:space value: "+g);g="default"==g;h=new Vn(h,k,l,m);k=Wn(f.getElementsByTagName("metadata")[0]);l=Wn(f.getElementsByTagName("styling")[0]);m=Wn(f.getElementsByTagName("layout")[0]);for(var n=[],p=0;p<m.length;p++){var v=
  m[p],x=l,z=d;var y=new Gd;var G=v.getAttribute("xml:id");if(G){y.id=G;G=null;z&&(G=Xn.exec(z)||Yn.exec(z));z=G?Number(G[1]):null;G=G?Number(G[2]):null;var E,Z;if(E=Zn(v,x,"extent"))E=(Z=Xn.exec(E))||Yn.exec(E),null!=E&&(y.width=null!=z?100*Number(E[1])/z:Number(E[1]),y.height=null!=G?100*Number(E[2])/G:Number(E[2]),y.widthUnits=Z||null!=z?Td:0,y.heightUnits=Z||null!=G?Td:0);if(v=Zn(v,x,"origin"))E=(Z=Xn.exec(v))||Yn.exec(v),null!=E&&(y.viewportAnchorX=null!=G?100*Number(E[1])/G:Number(E[1]),y.viewportAnchorY=
  null!=z?100*Number(E[2])/z:Number(E[2]),y.viewportAnchorUnits=Z||null!=z?Td:0);}else y=null;y&&n.push(y);}d=(d=f.getElementsByTagName("body")[0])?Array.from(d.querySelectorAll("[begin]")):[];d=r(d);for(f=d.next();!f.done;f=d.next())(f=$n(f.value,c.periodStart,h,k,l,m,n,g,!1))&&e.push(f);}return e};
  var Xn=/^(\d{1,2}(?:\.\d+)?|100)% (\d{1,2}(?:\.\d+)?|100)%$/,ao=/^(\d+px|\d+em)$/,Yn=/^(\d+)px (\d+)px$/,bo=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,co=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,eo=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,fo=/^(\d*(?:\.\d*)?)f$/,go=/^(\d*(?:\.\d*)?)t$/,ho=/^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,io={left:Ld,center:"center",right:"end",start:Ld,end:"end"},jo={left:"line-left",center:"center",right:"line-right"};
  function Wn(b){var c=[];if(!b)return c;for(var d=r(b.childNodes),e=d.next();!e.done;e=d.next())e=e.value,e.nodeType==Node.ELEMENT_NODE&&"br"!==e.nodeName&&(e=Wn(e),c=c.concat(e));c.length||c.push(b);return c}function ko(b,c){for(var d="",e=r(b.childNodes),f=e.next();!f.done;f=e.next())f=f.value,"br"==f.nodeName&&b.childNodes[0]!==f?d+="\n":f.childNodes&&0<f.childNodes.length?d+=ko(f,c):c?(f=f.textContent.trim(),f=f.replace(/\s+/g," "),d+=f):d+=f.textContent;return d}
  function $n(b,c,d,e,f,g,h,k,l){if(l&&"br"==b.nodeName)return b=new Ed(0,0,""),b.spacer=!0,b;var m=/^[\s\n]*$/.test(b.textContent),n=b.nodeType==Node.ELEMENT_NODE&&!b.hasAttribute("begin")&&!b.hasAttribute("end");if(b.nodeType!=Node.ELEMENT_NODE||n&&m||n&&!l)return null;m=lo(b.getAttribute("begin"),d);n=lo(b.getAttribute("end"),d);var p=lo(b.getAttribute("dur"),d);null==n&&null!=p&&(n=m+p);if(!l&&(null==m||null==n))throw new D(2,2,2001);m+=c;n+=c;p="";l=[];if(Array.from(b.childNodes).find(function(b){return b.nodeType===
  Node.TEXT_NODE&&/\w+/.test(b.textContent)}))p=ko(b,k);else for(var v=r(b.childNodes),x=v.next();!x.done;x=v.next())(x=$n(x.value,c,d,e,f,g,h,k,!0))&&l.push(x);c=new Ed(m,n,p);c.nestedCues=l;if((g=mo(b,"region",g,"")[0])&&g.getAttribute("xml:id")){var z=g.getAttribute("xml:id");c.region=h.filter(function(b){return b.id==z})[0];}e=mo(b,"smpte:backgroundImage",e,"#")[0];no(c,b,g,e,f);return c}
  function no(b,c,d,e,f){"rtl"==oo(c,d,f,"direction")&&(b.direction="rtl");var g=oo(c,d,f,"writingMode");"tb"==g||"tblr"==g?b.writingMode="vertical-lr":"tbrl"==g?b.writingMode="vertical-rl":"rltb"==g||"rl"==g?b.direction="rtl":g&&(b.direction=Fd);(g=oo(c,d,f,"textAlign"))?(b.positionAlign=jo[g],b.lineAlign=io[g],b.textAlign=Pd[g.toUpperCase()]):b.textAlign="start";if(g=oo(c,d,f,"displayAlign"))b.displayAlign=Qd[g.toUpperCase()];if(g=oo(c,d,f,"color"))b.color=g;if(g=oo(c,d,f,"backgroundColor"))b.backgroundColor=
  g;if(g=oo(c,d,f,"fontFamily"))b.fontFamily=g;(g=oo(c,d,f,"fontWeight"))&&"bold"==g&&(b.fontWeight=700);(g=oo(c,d,f,"wrapOption"))&&"noWrap"==g&&(b.wrapLine=!1);(g=oo(c,d,f,"lineHeight"))&&g.match(ao)&&(b.lineHeight=g);(g=oo(c,d,f,"fontSize"))&&g.match(ao)&&(b.fontSize=g);if(g=oo(c,d,f,"fontStyle"))b.fontStyle=Sd[g.toUpperCase()];if(e){g=e.getAttribute("imagetype");var h=e.getAttribute("encoding");e=e.textContent.trim();"PNG"==g&&"Base64"==h&&e&&(b.backgroundImage="data:image/png;base64,"+e);}(d=Zn(d,
  f,"textDecoration"))&&po(b,d);(c=qo(c,f,"textDecoration"))&&po(b,c);}
  function po(b,c){for(var d=c.split(" "),e=0;e<d.length;e++)switch(d[e]){case "underline":b.textDecoration.includes("underline")||b.textDecoration.push("underline");break;case "noUnderline":b.textDecoration.includes("underline")&&Mb(b.textDecoration,"underline");break;case "lineThrough":b.textDecoration.includes("lineThrough")||b.textDecoration.push("lineThrough");break;case "noLineThrough":b.textDecoration.includes("lineThrough")&&Mb(b.textDecoration,"lineThrough");break;case "overline":b.textDecoration.includes("overline")||
  b.textDecoration.push("overline");break;case "noOverline":b.textDecoration.includes("overline")&&Mb(b.textDecoration,"overline");}}function oo(b,c,d,e){return (b=qo(b,d,e))?b:Zn(c,d,e)}function Zn(b,c,d){for(var e=Wn(b),f=0;f<e.length;f++){var g=R.getAttributeNS(e[f],"http://www.w3.org/ns/ttml#styling",d);if(g)return g}return (b=mo(b,"style",c,"")[0])?R.getAttributeNS(b,"http://www.w3.org/ns/ttml#styling",d):null}
  function qo(b,c,d){var e=R.getAttributeNS(b,"http://www.w3.org/ns/ttml#styling",d);if(e)return e;b=mo(b,"style",c,"");c=null;for(e=0;e<b.length;e++){var f=R.getAttributeNS(b[e],"http://www.w3.org/ns/ttml#styling",d);f&&(c=f);}return c}
  function mo(b,c,d,e){var f=[];if(!b||1>d.length)return f;var g=b;for(b=null;g&&!(b=g.getAttribute(c))&&(g=g.parentNode,g instanceof Element););if(c=b)for(c=c.split(" "),c=r(c),b=c.next();!b.done;b=c.next()){b=b.value;g=r(d);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e+h.getAttribute("xml:id")==b){f.push(h);break}}return f}
  function lo(b,c){var d=null;if(bo.test(b)){d=bo.exec(b);var e=Number(d[1]),f=Number(d[2]),g=Number(d[3]),h=Number(d[4]);h+=(Number(d[5])||0)/c.b;g+=h/c.frameRate;d=g+60*f+3600*e;}else co.test(b)?d=ro(co,b):eo.test(b)?d=ro(eo,b):fo.test(b)?(d=fo.exec(b),d=Number(d[1])/c.frameRate):go.test(b)?(d=go.exec(b),d=Number(d[1])/c.a):ho.test(b)&&(d=ro(ho,b));return d}
  function ro(b,c){var d=b.exec(c);return null==d||""==d[0]?null:(Number(d[4])||0)/1E3+(Number(d[3])||0)+60*(Number(d[2])||0)+3600*(Number(d[1])||0)}function Vn(b,c,d,e){this.frameRate=Number(b)||30;this.b=Number(c)||1;this.a=Number(e);0==this.a&&(this.a=b?this.frameRate*this.b:1);d&&(b=/^(\d+) (\d+)$/g.exec(d))&&(this.frameRate*=Number(b[1])/Number(b[2]));}Wd["application/ttml+xml"]=Un;function so(){this.a=new Un;}so.prototype.parseInit=function(b){var c=!1;(new Q).H("moov",Df).H("trak",Df).H("mdia",Df).H("minf",Df).H("stbl",Df).fa("stsd",Ef).H("stpp",function(b){c=!0;b.parser.stop();}).parse(b);if(!c)throw new D(2,2,2007);};so.prototype.parseMedia=function(b,c){var d=!1,e=[];(new Q).H("mdat",Ff(function(b){d=!0;e=e.concat(this.a.parseMedia(b,c));}.bind(this))).parse(b);if(!d)throw new D(2,2,2007);return e};Wd['application/mp4; codecs="stpp"']=so;
  Wd['application/mp4; codecs="stpp.TTML.im1t"']=so;function to(){}to.prototype.parseInit=function(){};
  to.prototype.parseMedia=function(b,c){var d=Ac(b);d=d.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n");d=d.split(/\n{2,}/m);if(!/^WEBVTT($|[ \t\n])/m.test(d[0]))throw new D(2,2,2E3);var e=c.segmentStart;if(null==e&&(e=0,d[0].includes("X-TIMESTAMP-MAP"))){var f=d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),g=d[0].match(/MPEGTS:(\d+)/m);if(f&&g){e=uo(new Sg(f[1]));if(null==e)throw new D(2,2,2E3);e=c.periodStart+(Number(g[1])/9E4-e);}}g=[];var h=d[0].split("\n");for(f=1;f<h.length;f++)if(/^Region:/.test(h[f])){var k=
  new Sg(h[f]),l=new Gd;Vg(k);Tg(k);for(var m=Vg(k);m;){var n=l,p=m;(m=/^id=(.*)$/.exec(p))?n.id=m[1]:(m=/^width=(\d{1,2}|100)%$/.exec(p))?n.width=Number(m[1]):(m=/^lines=(\d+)$/.exec(p))?(n.height=Number(m[1]),n.heightUnits=2):(m=/^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(p))?(n.regionAnchorX=Number(m[1]),n.regionAnchorY=Number(m[2])):(m=/^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(p))?(n.viewportAnchorX=Number(m[1]),n.viewportAnchorY=Number(m[2])):/^scroll=up$/.exec(p)&&(n.scroll=
  "up");Tg(k);m=Vg(k);}g.push(l);}f=[];for(k=1;k<d.length;k++){h=d[k].split("\n");m=h;p=e;h=g;if(1==m.length&&!m[0]||/^NOTE($|[ \t])/.test(m[0])||"STYLE"==m[0])h=null;else{l=null;m[0].includes("--\x3e")||(l=m[0],m.splice(0,1));n=new Sg(m[0]);var v=uo(n),x=Ug(n,/[ \t]+--\x3e[ \t]+/g),z=uo(n);if(null==v||null==x||null==z)throw new D(2,2,2001);m=new Ed(v+p,z+p,m.slice(1).join("\n").trim());Tg(n);for(p=Vg(n);p;)vo(m,p,h),Tg(n),p=Vg(n);null!=l&&(m.id=l);h=m;}h&&f.push(h);}return f};
  function vo(b,c,d){var e;if(e=/^align:(start|middle|center|end|left|right)$/.exec(c))c=e[1],"middle"==c?b.textAlign=Id:b.textAlign=Pd[c.toUpperCase()];else if(e=/^vertical:(lr|rl)$/.exec(c))b.writingMode="lr"==e[1]?"vertical-lr":"vertical-rl";else if(e=/^size:([\d.]+)%$/.exec(c))b.size=Number(e[1]);else if(e=/^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(c))b.position=Number(e[1]),e[2]&&(c=e[2],b.positionAlign="line-left"==c||"start"==c?"line-left":"line-right"==c||"end"==
  c?"line-right":"center");else if(e=/^region:(.*)$/.exec(c)){if(c=wo(d,e[1]))b.region=c;}else if(d=/^line:([\d.]+)%(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=1,b.line=Number(d[1]),d[2]&&(b.lineAlign=Rd[d[2].toUpperCase()]);else if(d=/^line:(-?\d+)(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=Kd,b.line=Number(d[1]),d[2]&&(b.lineAlign=Rd[d[2].toUpperCase()]);}function wo(b,c){var d=b.filter(function(b){return b.id==c});return d.length?d[0]:null}
  function uo(b){b=Ug(b,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);if(null==b)return null;var c=Number(b[2]),d=Number(b[3]);return 59<c||59<d?null:Number(b[4])/1E3+d+60*c+3600*(Number(b[1])||0)}Wd["text/vtt"]=to;Wd['text/vtt; codecs="vtt"']=to;function xo(){this.a=null;}xo.prototype.parseInit=function(b){var c=!1;(new Q).H("moov",Df).H("trak",Df).H("mdia",Df).fa("mdhd",function(b){0==b.version?(b.reader.M(4),b.reader.M(4),this.a=b.reader.G(),b.reader.M(4)):(b.reader.M(8),b.reader.M(8),this.a=b.reader.G(),b.reader.M(8));b.reader.M(4);}.bind(this)).H("minf",Df).H("stbl",Df).fa("stsd",Ef).H("wvtt",function(){c=!0;}).parse(b);if(!this.a)throw new D(2,2,2008);if(!c)throw new D(2,2,2008);};
  xo.prototype.parseMedia=function(b,c){var d=this;if(!this.a)throw new D(2,2,2008);var e=0,f=[],g,h=[],k=!1,l=!1,m=!1,n=null;(new Q).H("moof",Df).H("traf",Df).fa("tfdt",function(b){k=!0;e=0==b.version?b.reader.G():b.reader.Ab();}).fa("tfhd",function(b){var c=b.flags;b=b.reader;b.M(4);c&1&&b.M(8);c&2&&b.M(4);n=c&8?b.G():null;}).fa("trun",function(b){l=!0;var c=b.version,d=b.flags;b=b.reader;var e=b.G();d&1&&b.M(4);d&4&&b.M(4);for(var g=[],h=0;h<e;h++){var k={duration:null,sampleSize:null,vd:null};d&256&&
  (k.duration=b.G());d&512&&(k.sampleSize=b.G());d&1024&&b.M(4);d&2048&&(k.vd=0==c?b.G():b.$d());g.push(k);}f=g;}).H("mdat",Ff(function(b){m=!0;g=b;})).parse(b);if(!m&&!k&&!l)throw new D(2,2,2008);var p=e,v=new DataView(g.buffer,g.byteOffset,g.byteLength),x=new P(v,0);f.forEach(function(b){var f=b.duration||n,g=b.vd?e+b.vd:p;p=g+(f||0);var k=0;do{var l=x.G();k+=l;var m=x.G(),v=null;"vttc"==Gf(m)?8<l&&(v=x.Za(l-8)):x.M(l-8);f&&v&&h.push(yo(v,c.periodStart+g/d.a,c.periodStart+p/d.a));}while(b.sampleSize&&
  k<b.sampleSize)});return h.filter(td.Ia)};function yo(b,c,d){var e,f,g;(new Q).H("payl",Ff(function(b){e=Ac(b);})).H("iden",Ff(function(b){f=Ac(b);})).H("sttg",Ff(function(b){g=Ac(b);})).parse(b);return e?zo(e,f,g,c,d):null}function zo(b,c,d,e,f){b=new Ed(e,f,b);c&&(b.id=c);if(d)for(c=new Sg(d),d=Vg(c);d;)vo(b,d,[]),Tg(c),d=Vg(c);return b}Wd['application/mp4; codecs="wvtt"']=xo;B("shaka.util.Dom.createHTMLElement",function(b){return document.createElement(b)});B("shaka.util.Dom.createVideoElement",function(){var b=document.createElement("video");b.muted=!0;b.width=600;b.height=400;return b});B("shaka.util.Dom.asHTMLElement",function(b){return b});B("shaka.util.Dom.asHTMLMediaElement",function(b){return b});B("shaka.util.Dom.removeAllChildren",function(b){for(;b.firstChild;)b.removeChild(b.firstChild);});/*
   @license
   EME Encryption Scheme Polyfill
   Copyright 2019 Google LLC
   SPDX-License-Identifier: Apache-2.0
  */
  function Ao(){}var Bo;B("EmeEncryptionSchemePolyfill",Ao);function Co(){Bo?console.debug("EmeEncryptionSchemePolyfill: Already installed."):navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration?(Bo=navigator.requestMediaKeySystemAccess,console.debug("EmeEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."),navigator.requestMediaKeySystemAccess=Do):console.debug("EmeEncryptionSchemePolyfill: EME not found");}Ao.install=Co;
  function Do(b,c){var d=this;return t(function f(){var g;return A(f,function(f){switch(f.j){case 1:return console.assert(d==navigator,'bad "this" for requestMediaKeySystemAccess'),u(f,Bo.call(d,b,c),2);case 2:g=f.o;if(Eo(g))return console.debug("EmeEncryptionSchemePolyfill: Native encryptionScheme support found."),navigator.requestMediaKeySystemAccess=Bo,f["return"](g);console.debug("EmeEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");navigator.requestMediaKeySystemAccess=
  Fo;return f["return"](Fo.call(d,b,c))}})})}
  function Fo(b,c){var d=this;return t(function f(){var g,h,k,l,m,n,p,v;return A(f,function(f){switch(f.j){case 1:console.assert(d==navigator,'bad "this" for requestMediaKeySystemAccess');g=Go(b);h=[];for(var x=r(c),y=x.next();!y.done;y=x.next())k=y.value,l=Ho(k.videoCapabilities,g),m=Ho(k.audioCapabilities,g),k.videoCapabilities&&k.videoCapabilities.length&&!l.length||k.audioCapabilities&&k.audioCapabilities.length&&!m.length||(n=Object.assign({},k),n.videoCapabilities=l,n.audioCapabilities=m,h.push(n));
  if(!h.length)throw p=Error("Unsupported keySystem or supportedConfigurations."),p.name="NotSupportedError",p.code=DOMException.NOT_SUPPORTED_ERR,p;return u(f,Bo.call(d,b,h),2);case 2:return v=f.o,f["return"](new Io(v,g))}})})}function Ho(b,c){return b?b.filter(function(b){return !b.encryptionScheme||b.encryptionScheme==c}):b}function Jo(){}var Ko;B("McEncryptionSchemePolyfill",Jo);
  function Lo(){navigator.mediaCapabilities?(Ko=navigator.mediaCapabilities.decodingInfo,console.debug("McEncryptionSchemePolyfill: Waiting to detect encryptionScheme support."),navigator.mediaCapabilities.decodingInfo=Mo):console.debug("McEncryptionSchemePolyfill: MediaCapabilities not found");}Jo.install=Lo;
  function Mo(b){var c=this;return t(function e(){var f,g;return A(e,function(e){switch(e.j){case 1:return console.assert(c==navigator.mediaCapabilities,'bad "this" for decodingInfo'),u(e,Ko.call(c,b),2);case 2:f=e.o;if(!b.keySystemConfiguration)return e["return"](f);g=f.keySystemAccess;if(Eo(g))return console.debug("McEncryptionSchemePolyfill: Native encryptionScheme support found."),navigator.mediaCapabilities.decodingInfo=Ko,e["return"](f);console.debug("McEncryptionSchemePolyfill: No native encryptionScheme support found. Patching encryptionScheme support.");
  navigator.mediaCapabilities.decodingInfo=No;return e["return"](No.call(c,b))}})})}
  function No(b){var c=this;return t(function e(){var f,g,h,k,l,m,n;return A(e,function(e){switch(e.j){case 1:return console.assert(c==navigator.mediaCapabilities,'bad "this" for decodingInfo'),f=null,b.keySystemConfiguration&&(g=b.keySystemConfiguration,h=g.keySystem,k=g.audio&&g.audio.encryptionScheme,l=g.video&&g.video.encryptionScheme,f=Go(h),m={powerEfficient:!1,smooth:!1,supported:!1,keySystemAccess:null,configuration:b},k&&k!=f||l&&l!=f)?e["return"](m):u(e,Ko.call(c,b),2);case 2:return n=e.o,
  n.keySystemAccess&&(n.keySystemAccess=new Io(n.keySystemAccess,f)),e["return"](n)}})})}function Io(b,c){this.b=b;this.a=c;this.keySystem=b.keySystem;}Io.prototype.getConfiguration=function(){var b=this.b.getConfiguration();if(b.videoCapabilities)for(var c=r(b.videoCapabilities),d=c.next();!d.done;d=c.next())d.value.encryptionScheme=this.a;if(b.audioCapabilities)for(c=r(b.audioCapabilities),d=c.next();!d.done;d=c.next())d.value.encryptionScheme=this.a;return b};Io.prototype.createMediaKeys=function(){return this.b.createMediaKeys()};
  function Go(b){if(b.startsWith("com.widevine")||b.startsWith("com.microsoft")||b.startsWith("com.adobe")||b.startsWith("org.w3"))return "cenc";if(b.startsWith("com.apple"))return "cbcs-1-9";console.warn("EmeEncryptionSchemePolyfill: Unknown key system:",b,"Please contribute!");return null}function Eo(b){b=b.getConfiguration();var c=b.audioCapabilities&&b.audioCapabilities[0];return void 0!==(b.videoCapabilities&&b.videoCapabilities[0]||c).encryptionScheme?!0:!1}function Oo(){}
  B("EncryptionSchemePolyfills",Oo);function Vm(){Co();Lo();}Oo.install=Vm;module.De&&(module.De=Oo);}).call(exportTo,innerGlobal,innerGlobal);for(var k in exportTo.shaka)exports[k]=exportTo.shaka[k];})();


  });

  /* eslint-disable */

  var shaka = window.shaka ? window.shaka : shakaPlayer_compiled;
  /* eslint-enable */

  var videojsTmp = window_1.videojs;
  var videojs = videojsTmp;

  /**
   * EmpPlayerEvents - Holds all available player events
   *
   * @class EmpPlayerEvents
   */
  var EmpPlayerEvents =
  /**
   * constructor
   */
  function EmpPlayerEvents() {
    /**
    * Fired when video playback ends
    * @event ENDED
    */
    this.ENDED = 'ended';
    /**
    * Fired when an error occurs
    * @event ERROR
    */

    this.ERROR = 'error';
    /**
    * Fired when the player has downloaded data at the current playback position
    * @event LOADED_DATA
    */

    this.LOADED_DATA = 'loadeddata';
    /**
    * Fired when the timeshift changes
    * @event TIMESHIFT_CHANGE
    */

    this.TIMESHIFT_CHANGE = 'timeshiftchange';
    /**
    * Fired when the video duration changes
    * @event DURATION_CHANGE
    */

    this.DURATION_CHANGE = 'durationchange';
    /**
    * Fired when the player has initial duration and dimension information
    * @event LOADED_METADATA
    */

    this.LOADED_METADATA = 'loadedmetadata';
    /**
    * Fired when the player started seeking
    * @event SEEKING
    */

    this.SEEKING = 'seeking';
    /**
    * Fired when the current playback position has changed
    * @event TIME_UPDATE
    */

    this.TIME_UPDATE = 'timeupdate';
    /**
    * Fired when the user is active
    * @event USER_ACTIVE
    */

    this.USER_ACTIVE = 'useractive';
    /**
    * Fired when the user is inactive
    * @event USERIN_ACTIVE
    */

    this.USERIN_ACTIVE = 'userinactive';
    /**
    * Fired when the volume changes
    * @event VOLUME_CHANGE
    */

    this.VOLUME_CHANGE = 'volumechange';
    /**
    * Fired when the video is starting to load
    * @event LOAD_START
    */

    this.LOAD_START = 'loadstart';
    /**
    * Fired when the player can start playback
    * @event CAN_PLAY
    */

    this.CAN_PLAY = 'canplay';
    /**
    * Fired when the player has starting playback
    * @event PLAYING
    */

    this.PLAYING = 'playing';
    /**
    * Fired when the player starts buffering
    * @event WAITING
    */

    this.WAITING = 'waiting';
    /**
    * Fired when the player seeked to a different point in time
    * @event SEEKED
    */

    this.SEEKED = 'seeked';
    /**
    * Fired when playback is aborted
    * @event ABORT
    */

    this.ABORT = 'abort';
    /**
    * Fired when the player will start playing
    * @event PLAY
    */

    this.PLAY = 'play';
    /**
    * Fired when the player is paused
    * @event PAUSE
    */

    this.PAUSE = 'pause';
    /**
    * Fired when the player is destroyed.
    * @event DISPOSE
    */

    this.DISPOSE = 'dispose';
    /**
    * Fired when an AudioTrack object changes its enabled value
    * @event MODE_CHANGE
    */

    this.MODE_CHANGE = 'modechange';
    /**
    * Fired when a state changes. Used for example when an AudioTrack changes its enabled value
    * @event CHANGE
    */

    this.CHANGE = 'change';
    /**
    * Fired when an AudioTrack object has been added to an AudioTrackList object.
    * @event ADD_TRACK
    */

    this.ADD_TRACK = 'addtrack';
    /**
    * Fired when an AudioTrack object has been removed from an AudioTrackList object.
    * @event REMOVE_TRACK
    */

    this.REMOVE_TRACK = 'removetrack';
    /**
    * Fired by Dash.js when a metric changes
    * @event METRIC_CHANGED
    */

    this.METRIC_CHANGED = 'metricchanged';
    /**
    * Fired when a recoverable asset error occurs
    * @event RECOVERABLE_ASSET_ERROR
    */

    this.RECOVERABLE_ASSET_ERROR = 'recoverableasseterror';
    /**
    * Fired when the video bitrate changes
    * @event BITRATE_CHANGED
    */

    this.BITRATE_CHANGED = 'bitratechanged';
    /**
    * Used when something closes. Fired by VideoJS when the CloseButton closes
    * @event CLOSE
    */

    this.CLOSE = 'close';
    /**
    * Used when something is ready. Fired when the tech is ready
    * @event READY
    */

    this.READY = 'ready';
    /**
    * Used when an html element resizes. Fired when the video element changes size
    * @event RESIZE
    */

    this.RESIZE = 'resize';
    /**
    * Used when an html element is tapped. Fired by VideoJS on components
    * @event TAP
    */

    this.TAP = 'tap';
    /**
    * Used when an html element is clicked. Fired by VideoJS on components
    * @event CLICK
    */

    this.CLICK = 'click';
    /**
    * Used when an html element gains focus. Fired by VideoJS on components
    * @event FOCUS
    */

    this.FOCUS = 'focus';
    /**
    * Used when an html element loses focus. Fired by VideoJS on components
    * @event BLUR
    */

    this.BLUR = 'blur';
    /**
    * Used when a modal html view is about to be opened. Fired by VideoJS on the ModalDialog
    * @event BEFORE_MODAL_OPEN
    */

    this.BEFORE_MODAL_OPEN = 'beforemodalopen';
    /**
    * Used when a modal html view has been opened. Fired by VideoJS on the ModalDialog
    * @event MODAL_OPEN
    */

    this.MODAL_OPEN = 'modalopen';
    /**
    * Used when a modal html view will be closed. Fired by VideoJS on the ModalDialog
    * @event BEFORE_MODAL_CLOSE
    */

    this.BEFORE_MODAL_CLOSE = 'beforemodalclose';
    /**
    * Used when a modal html view has been closed. Fired by VideoJS on the ModalDialog
    * @event MODAL_CLOSE
    */

    this.MODAL_CLOSE = 'modalclose';
    /**
    * Used when a modal html view will be populated with html content. Fired by VideoJS on the ModalDialog
    * @event BEFORE_MODAL_FILL
    */

    this.BEFORE_MODAL_FILL = 'beforemodalfill';
    /**
    * Used when a modal html view has been populated with html content. Fired by VideoJS on the ModalDialog
    * @event MODAL_FILL
    */

    this.MODAL_FILL = 'modalfill';
    /**
    * Used when a modal html view will clear its content. Fired by VideoJS on the ModalDialog
    * @event BEFORE_MODAL_EMPTY
    */

    this.BEFORE_MODAL_EMPTY = 'beforemodalempty';
    /**
    * Used when a modal html view has cleared its content. Fired by VideoJS on the ModalDialog
    * @event MODAL_EMPTY
    */

    this.MODAL_EMPTY = 'modalempty';
    /**
    * Enough data has been loaded to play the media up to its end
    * @event CAN_PLAY_THROUGH
    */

    this.CAN_PLAY_THROUGH = 'canplaythrough';
    /**
    * Video is played for the first time
    * @event FIRST_PLAY
    */

    this.FIRST_PLAY = 'firstplay';
    /**
    * When the user agent is downloading media data
    * @event PROGRESS
    */

    this.PROGRESS = 'progress';
    /**
    * When the player is suspended from downloading media data
    * @event SUSPEND
    */

    this.SUSPEND = 'suspend';
    /**
    * When the current playlist is empty
    * @event EMPTIED
    */

    this.EMPTIED = 'emptied';
    /**
    * When the player is trying to get media data, but data is not available
    * @event STALLED
    */

    this.STALLED = 'stalled';
    /**
    * When the playing speed of the audio/video is changed
    * @event RATE_CHANGE
    */

    this.RATE_CHANGE = 'ratechange';
    /**
    * When the text track has been changed
    * @event TEXT_TRACK_CHANGE
    */

    this.TEXT_TRACK_CHANGE = 'texttrackchange';
    /**
    * When the track has been changed
    * @event TRACK_CHANGE
    */

    this.TRACK_CHANGE = 'trackchanged';
    /**
    * When the video poster changes
    * @event POSTER_CHANGE
    */

    this.POSTER_CHANGE = 'posterchange';
    /**
    * When a key is down
    * @event KEY_DOWN
    */

    this.KEY_DOWN = 'keydown';
    /**
    * When a key is up
    * @event KEY_UP
    */

    this.KEY_UP = 'keyup';
    /**
    * When the mouse is down
    * @event MOUSE_DOWN
    */

    this.MOUSE_DOWN = 'mousedown';
    /**
    * When the mouse is moved
    * @event MOUSE_MOVE
    */

    this.MOUSE_MOVE = 'mousemove';
    /**
    * When the mouse is up
    * @event MOUSE_UP
    */

    this.MOUSE_UP = 'mouseup';
    /**
    * When touch started
    * @event TOUCH_START
    */

    this.TOUCH_START = 'touchstart';
    /**
    * When touch moved
    * @event TOUCH_MOVE
    */

    this.TOUCH_MOVE = 'touchmove';
    /**
    * When touch ended
    * @event TOUCH_END
    */

    this.TOUCH_END = 'touchend';
    /**
    * When a touch point is moved off the interactive area of an element
    * @event TOUCH_LEAVE
    */

    this.TOUCH_LEAVE = 'touchleave';
    /**
    * When a touch point has been disrupted
    * @event TOUCH_CANCEL
    */

    this.TOUCH_CANCEL = 'touchcancel';
    /**
    * When the fullscreen state changes
    * @event FULLSCREEN_CHANGE
    */

    this.FULLSCREEN_CHANGE = 'fullscreenchange';
    /**
    * When fullscreen isn't supported and the video will resize to the window
    * @event ENTER_FULL_WINDOW
    */

    this.ENTER_FULL_WINDOW = 'enterFullWindow';
    /**
    * When exiting full window
    * @event EXIT_FULL_WINDOW
    */

    this.EXIT_FULL_WINDOW = 'exitFullWindow';
    /**
    * When controls are enabled
    * @event CONTROLS_ENABLED
    */

    this.CONTROLS_ENABLED = 'controlsenabled';
    /**
    * When controls are disabled
    * @event CONTROLS_DISABLED
    */

    this.CONTROLS_DISABLED = 'controlsdisabled';
    /**
    * When native tech or device controls are being used
    * @event USING_NATIVE_CONTROLS
    */

    this.USING_NATIVE_CONTROLS = 'usingnativecontrols';
    /**
    * When custom controls are being used
    * @event USING_CUSTOM_CONTROLS
    */

    this.USING_CUSTOM_CONTROLS = 'usingcustomcontrols';
    /**
    * Fired when a VideoJS slider is active
    * @event SLIDER_ACTIVE
    */

    this.SLIDER_ACTIVE = 'slideractive';
    /**
    * Fired when a VideoJS slider is inactive
    * @event SLIDER_INACTIVE
    */

    this.SLIDER_INACTIVE = 'sliderinactive';
    /**
     * Fired when a new entitlement is used to start playback
     */

    this.ENTITLEMENT_CHANGE = 'entitlementchange';
    /**
     * Fired when the entitlement loading starts
     */

    this.ENTITLEMENT_LOAD_START = 'entitlementloadstart';
    /**
     * Fired when the player is initalized
     */

    this.PLAYER_CREATED = 'playercreated';
    /**
     * Fired when playback is restarted
     */

    this.RESTARTING = 'restarting';
    /**
     * Fired when ad timeline changed
     */

    this.AD_TIMELINE_CHANGED = 'adtimelinechanged';
    /**
     * Fired when chromecast begins casting
     */

    this.CHROMECAST_CASTING = 'chromecastcasting';
    /**
     * Fired when chromecast has stopped casting
     */

    this.CHROMECAST_STOPPED = 'chromecaststopped';
    /**
    * Fired when chromecast has join a session
    */

    this.CHROMECAST_JOIN = 'chromecastjoin';
    /**
     * Fired when playback is stopped
     */

    this.STOPPED = 'stopped';
    /**
     * Fired when the video is ready to be played
     */

    this.READY_TO_PLAY = 'readytoplay';
    /**
     * Fired when program changes in a live or catchUp stream
      */

    this.PROGRAM_CHANGED = 'programchanged';
    /**
    * Fired when vod/asset changes
     */

    this.ASSET_CHANGED = 'assetchanged';
    /**
     * Fired when prefetch segment before seek in a vod/catchup stream
    */

    this.SEGMENT_MISSING = 'segmentmissing';
    /**
    * Fired when airplayStart
    */

    this.AIRPLAY_START = 'airplayStart';
    /**
    * Fired when replay
    */

    this.REPLAY = 'replay';
    /**
    * Fired during download
    */

    this.DOWNLOAD_PROGRESS = 'downloadprogress';
    /**
    * Fired when drm session try to update
    */

    this.DRM_SESSION_UPDATE = 'drmsessionupdate';
    /**
    * Fired when switch to picture-in-picture
    */

    this.PIP_START = 'pipStart';
    /**
    * Fired when playlist change
    */

    this.PLAYLIST_CHANGE = 'playlistchange';
    /**
    * Fired when Chromecast Que change
    */

    this.CC_QUE_CHANGE = 'ccquechange';
  };

  var empPlayerEvents = new EmpPlayerEvents();

  var logToBrowserConsole = false;

  var logTemp = function logTemp() {
    if (logToBrowserConsole) {
      _log(null, arguments);
    }
  }; // Allway log if EMP_DEBUG_LOG and with correct stack trace


  if (window_1.EMP_DEBUG_LOG) {
    /* eslint-disable */
    logTemp = window_1.console && window_1.console.log && console.log.bind(console) || function () {};
    /* eslint-enable */

  }
  /**
   * Log plain debug messages
   * @method log
   */


  var log = logTemp;
  /**
   * Keep a history of log messages
   * @type {Array}
   */

  log.history = [];
  /**
   * Log error messages
   */

  log.error = function () {
    _log('error', arguments);
  };
  /**
   * Log warning messages
   */


  log.warn = function () {
    _log('warn', arguments);
  };
  /**
   * Log debug  messages
   */


  log.debug = function () {
    _log('debug', arguments);
  }; // Allway log if EMP_DEBUG_LOG and with correct stack trace


  if (window_1.EMP_DEBUG_LOG) {
    var noop = function noop() {};
    /* eslint-disable */


    log.debug = window_1.console && window_1.console.debug && console.debug.bind(console) || noop;
    log.warn = window_1.WARN = window_1.console && window_1.console.warn && console.warn.bind(console) || noop;
    log.error = window_1.ERROR = window_1.console && window_1.console.error && console.error.bind(console) || noop;
    /* eslint-enable */
  }
  /**
   * setLogToBrowserConsole and debug mode
   *
   * @param {boolean} value = false
   */


  log.setLogToBrowserConsole = function (value) {
    if (value === void 0) {
      value = false;
    }

    logToBrowserConsole = value;
  };
  /**
   * Log messages to the console and history based on the type of message
   *
   * @param {string} type The type of message, or 'null' for 'log'
   * @param {Object} args The arguments to be passed to the log
   * @private
   * @method _log
   */


  function _log(type, args) {
    // converts args to an array to get array functions
    var argsArray = Array.prototype.slice.call(args); // if there's no console then don't try to output messages
    // they will be stored in the log.history

    var noop = function noop() {};

    var console = window_1.console || {
      log: noop,
      warn: noop,
      error: noop,
      trace: noop
    };

    if (type) {
      // add log type in front of message
      argsArray.unshift(type.toUpperCase() + ':');
    } else {
      type = 'log';
    } // add to history
    // log.history.push(argsArray);
    // add console prefix after adding to history


    argsArray.unshift('EMPPlayer:'); // call the appropriate log function

    if (console[type].apply) {
      console[type].apply(console, argsArray);
    } else {
      console[type](argsArray.join(' '));
    }
  }

  /**
  * @file obj.js
  * @module obj
  */
  /**
   * Get the keys of an Object
   *
   * @param {Object} object
   *        The Object to get the keys from
   *
   * @return {string[]}
   *         An array of the keys from the object. Returns an empty array if the
   *         object passed in was invalid or had no keys.
   *
   * @private
   */

  var keys = function keys(object) {
    return isObject(object) ? Object.keys(object) : [];
  };
  /**
   * Array-like iteration for objects.
   *
   * @param {Object} object The object to iterate over
   * @param {EachCallback} fn The callback function which is called for each key in the object.
   */


  function each(object, fn) {
    keys(object).forEach(function (key) {
      return fn(object[key], key);
    });
  }
  /**
   * Object.assign-style object shallow merge/extend.
   *
   * @param  {Object} target target
   * @param  {Object} ...sources sources
   * @return {Object} assign object
   */

  function assign(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (Object.assign) {
      return Object.assign.apply(Object, [target].concat(sources));
    }

    sources.forEach(function (source) {
      if (!source) {
        return;
      }

      each(source, function (value, key) {
        target[key] = value;
      });
    });
    return target;
  }
  /**
   * Returns whether a value is an object of any kind - including DOM nodes,
   * arrays, regular expressions, etc. Not functions, though.
   *
   * This avoids the gotcha where using `typeof` on a `null` value
   * results in `'object'`.
   *
   * @param  {Object} value value
   * @return {boolean} isObject
   */

  function isObject(value) {
    return !!value && typeof value === 'object';
  }
  /**
   * Check is Object is isEmpty
   *
   * @param {Object} value value
   * @return {boolean} isEmpty
   */

  function isEmpty(value) {
    return keys(value).length === 0;
  }

  /* global
    document, atob
  */
  /**
   * base64EncodeUint8Array
   *
   * @param {Array} input input
   * @return {string} base64
   */

  function base64EncodeUint8Array(input) {
    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var chr1;
    var chr2;
    var chr3;
    var enc1;
    var enc2;
    var enc3;
    var enc4;
    var i = 0;
    var output = '';

    while (i < input.length) {
      chr1 = input[i++]; // Not sure if the index

      chr2 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

      chr3 = i < input.length ? input[i++] : Number.NaN;
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }

    return output;
  }
  /**
   * check if type is string
   *
   * @param {Object} val val
   * @return {boolean} isString
   */

  function isString(val) {
    return typeof val === 'string' || !!val && typeof val === 'object' && Object.prototype.toString.call(val) === '[object String]';
  }
  /**
   * Filter out single bad source objects or multiple source objects in an
   * array. Also flattens nested source object arrays into a 1 dimensional
   * array of source objects.
   *
   * @param {string} src src
   * @return {Array} Sources
   */

  function filterSource(src) {
    // traverse array
    if (Array.isArray(src)) {
      var newsrc = [];
      src.forEach(function (srcobj) {
        srcobj = filterSource(srcobj);

        if (Array.isArray(srcobj)) {
          newsrc = newsrc.concat(srcobj);
        } else if (isObject(srcobj)) {
          newsrc.push(srcobj);
        }
      });
      src = newsrc;
    } else if (typeof src === 'string' && src.trim()) {
      // convert string into object
      src = [{
        src: src
      }];
    } else if (isObject(src) && typeof src.src === 'string' && src.src && src.src.trim()) {
      // src is already valid
      src = [src];
    } else {
      // invalid source, turn it into an empty array
      src = [];
    }

    return src;
  }
  /**
   * round up
   *
   * @param {number} value
   * @param {number} decimals
   * @return {number} up rounded result
   */

  function roundUp(value, decimals) {
    return Math.ceil(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }

  var minDoc = {};

  var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
      typeof window !== 'undefined' ? window : {};


  var doccy;

  if (typeof document !== 'undefined') {
      doccy = document;
  } else {
      doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

      if (!doccy) {
          doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
      }
  }

  var document_1 = doccy;

  /**
   * Whether the current DOM interface appears to be real.
   *
   * @return {boolean} DOM interface appears to be real.
   */


  function isReal() {
    return (// Both document and window will never be undefined thanks to `global`.
      document_1 === window_1.document && // In IE < 9, DOM methods return "object" as their type, so all we can
      // confidently check is that it exists.
      typeof document_1.createElement !== 'undefined'
    );
  }

  var USER_AGENT = window_1.navigator && window_1.navigator.userAgent || '';
  var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
  var appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;
  /*
   * Device is an iPhone
   *
   * @type {Boolean}
   * @constant
   * @private
   */

  var IS_IPAD = /iPad/i.test(USER_AGENT);
  var IS_CHROMECAST = window_1.navigator.userAgent.indexOf('CrKey') >= 0; // The Facebook app's UIWebView identifies as both an iPhone and iPad, so
  // to identify iPhones, we need to exclude iPads.
  // http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/

  var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
  var IS_IPOD = /iPod/i.test(USER_AGENT);
  var IOS_VERSION = function () {
    var match = USER_AGENT.match(/OS (\d+)_/i);

    if (match && match[1]) {
      return match[1];
    }

    return null;
  }();
  var IS_ANDROID = /Android/i.test(USER_AGENT);
  var ANDROID_VERSION = function () {
    // This matches Android Major.Minor.Patch versions
    // ANDROID_VERSION is Major.Minor as a Number, if Minor isn't available, then only Major is returned
    var match = USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);

    if (!match) {
      return null;
    }

    var major = match[1] && parseFloat(match[1]);
    var minor = match[2] && parseFloat(match[2]);

    if (major && minor) {
      return parseFloat(match[1] + '.' + match[2]);
    } else if (major) {
      return major;
    }

    return null;
  }(); // Old Android is defined as Version older than 2.3, and requiring a webkit version of the android browser

  var IS_OLD_ANDROID = IS_ANDROID && /webkit/i.test(USER_AGENT) && ANDROID_VERSION < 2.3;
  var IS_WINDOWS = /Win/i.test(window_1.navigator.platform);
  var IS_FIREFOX = /Firefox/i.test(USER_AGENT);
  var IS_EDGE = /Edge/i.test(USER_AGENT);
  var IS_CHROMIUM_EDGE = /Edg/i.test(USER_AGENT) && !IS_EDGE;
  var IS_CHROME = !IS_CHROMIUM_EDGE && !IS_EDGE && /Chrome/i.test(USER_AGENT);
  var CHROME_VERSION = function () {
    var match = USER_AGENT.match(/Chrome\/(\d+)/);

    if (match && match[1]) {
      return parseFloat(match[1]);
    }

    return null;
  }();
  var IS_IE8 = /MSIE\s8\.0/.test(USER_AGENT);
  var IE_VERSION = function () {
    var result = /MSIE\s(\d+)\.\d/.exec(USER_AGENT);
    var version = result && parseFloat(result[1]);

    if (!version && /Trident\/7.0/i.test(USER_AGENT) && /rv:11.0/.test(USER_AGENT)) {
      // IE 11 has a different user agent string than other IE versions
      version = 11.0;
    }

    return version;
  }();
  var IS_TIZEN = /Tizen/i.test(USER_AGENT);
  var IS_WEBOS = /webOS/i.test(USER_AGENT) || /Web0S/i.test(USER_AGENT) || /WebOS/i.test(USER_AGENT) || /NetCast/i.test(USER_AGENT);
  var IS_SMARTTV = /SmartTV/i.test(USER_AGENT) || IS_WEBOS || IS_TIZEN;
  var IS_SAFARI = /Safari/i.test(USER_AGENT) && !IS_CHROME && !IS_ANDROID && !IS_EDGE && !IS_CHROMIUM_EDGE;
  var TOUCH_ENABLED = isReal() && ('ontouchstart' in window_1 || window_1.DocumentTouch && window_1.document instanceof window_1.DocumentTouch);
  var BACKGROUND_SIZE_SUPPORTED = isReal() && 'backgroundSize' in window_1.document.createElement('video').style;

  /* global
    XMLHttpRequest
  */

  /**
   * EmpTech - General tech implementation, not specific to a certain tech
   *
   * @class EmpTech
   */

  var EmpTech = /*#__PURE__*/function () {
    function EmpTech() {}

    var _proto = EmpTech.prototype;

    /**
     * Returns the language code of a language string: 'en-English' to 'en' or returns the original string if '-' can't be found
     *
     * @param {string} language language string
     * @return {string} language code
     * @private
     */
    _proto.languageCode = function languageCode(language) {
      return language ? language.split('-')[0] : null;
    }
    /**
     * Get remainingTime
     *
     * @return {number} remainingTime
     */
    ;

    _proto.remainingTime = function remainingTime() {
      var seekrange = this.seekable();
      var end = 0;

      if (seekrange.length > 0) {
        end = seekrange.end(0);
      }

      if (end === Infinity || end === 0) {
        return Infinity;
      }

      return end - this.currentTime();
    }
    /**
     * supportsEpgProgramChange
     *
     * @return {boolean} supportsEpgProgramChange
     * @private
     */
    ;

    _proto.supportsEpgProgramChange = function supportsEpgProgramChange() {
      return this.supportsEpgProgramChange_ || false;
    }
    /**
     * es6-mixins adds the method to the prototype
     * meaning the second time this object is created the methods are already on the prototype
     * therefore do not merge duplicates
     */
    ;

    _proto.base = function base() {} // noop

    /**
    * Trigger a recoverable error
    * allows the player to fallback to another tech
    *
    * @param {Object} error error object
    * @param {string} techName techName
    * @private
    */
    ;

    _proto.triggerRecoverableTechError = function triggerRecoverableTechError(error, techName) {
      log('RecoverableTechError', techName, error);
      var category = error.category || '';
      var code = error.code || '';
      var msg = error.message || '';
      var message = 'Tech: ' + techName + '  Can\'t load video: error category: ' + category + ' code: ' + code + ' message: ' + msg;
      this.trigger(empPlayerEvents.RECOVERABLE_ASSET_ERROR, {
        source: this.options_.source,
        techName: techName,
        message: message,
        error: error
      });
    }
    /**
      * Tracking Duration
      *
      * @private
      */
    ;

    _proto.trackDuration = function trackDuration() {
      if (this.durationInterval) {
        this.stopTrackingDuration();
      }

      this.preDuration_ = 0;
      this.durationInterval = this.setInterval(function () {
        if (this.isReady_) {
          this.onDurationUpdate();
        }
      }, 1000);
    }
    /**
      * stop Tracking Duration
      *
      * @private
      */
    ;

    _proto.stopTrackingDuration = function stopTrackingDuration() {
      if (this.durationInterval) {
        this.clearInterval(this.durationInterval);
        this.durationInterval = null;
        this.preDuration_ = 0;
        this.trigger(empPlayerEvents.DURATION_CHANGE);
      }
    }
    /**
    * Trigger durationchange event
    *
    * @private
    */
    ;

    _proto.onDurationUpdate = function onDurationUpdate() {
      var duration = this.duration();

      if (this.preDuration_ !== duration) {
        // only trigger DURATION_CHANGE if change bigger than 1 sec.
        if (!this.preDuration_ || duration === 0 || duration - this.preDuration_ >= 1.0 || duration - this.preDuration_ <= -1.0) {
          this.preDuration_ = this.duration();
          this.trigger(empPlayerEvents.DURATION_CHANGE);
        }
      }
    }
    /**
     * fetchWidevineCertificate
     *
     * @param {string} certificateUrl
     * @param {Function=} callback
     * @private
     */
    ;

    _proto.fetchWidevineCertificate = function fetchWidevineCertificate(certificateUrl, callback) {
      var _this = this;

      log('fetchWidevineCertificate'); // Can't trigger here no handlers yet
      // this.trigger({ type: EmpPlayerEvents.DRM_SESSION_UPDATE, bubbles: true }, { 'messageType': 'WIDEVINE_CERTIFICATE_REQUEST', 'code': undefined, 'info': certificateUrl });

      var request = new XMLHttpRequest();
      request.addEventListener('error', this.checkForRecoverableErrors, false); // 'irdeto'

      request.responseType = 'arraybuffer';
      request.addEventListener('load', function (event) {
        _this.onWidevineCertificateLoad_(event, {
          callback: callback,
          certificateUrl: certificateUrl
        });
      }, false);
      request.open('GET', certificateUrl, true);
      request.send();
    }
    /**
     * onWidevineCertificateLoad_
     *
     * @param {EventTarget~Event} [event]
     * @param {Object} callback
     * @param {string} certificateUrl
     * @private
     */
    ;

    _proto.onWidevineCertificateLoad_ = function onWidevineCertificateLoad_(event, _ref) {
      var callback = _ref.callback,
          certificateUrl = _ref.certificateUrl;
      log('onWidevineCertificateLoad');
      this.trigger({
        type: empPlayerEvents.DRM_SESSION_UPDATE,
        bubbles: true
      }, {
        messageType: 'WIDEVINE_CERTIFICATE_REQUEST',
        code: undefined,
        info: certificateUrl
      });
      var request = event.target;

      if (request.status < 300 && request.readyState === 4) {
        var certificate = new Uint8Array(event.target.response);
        this.trigger({
          type: empPlayerEvents.DRM_SESSION_UPDATE,
          bubbles: true
        }, {
          messageType: 'WIDEVINE_CERTIFICATE_RESPONSE',
          code: undefined,
          info: 'onWidevineCertificateLoad'
        });
        callback(certificate);
      } else {
        var error = {
          message: 'onWidevineCertificateLoad',
          code: request.status
        };

        if (request.responseType === 'arraybuffer') {
          var enc = new TextDecoder('utf-8');
          error.message = enc.decode(request.response);
        }

        error.category = 6;
        callback(null, error);
      }
    }
    /**
     * baseHandleSource
     *
     * @param {Object} source
     * @param {Object} tech
     * @return {boolean} Has handle the source
     * @private
     */
    ;

    _proto.baseHandleSource = function baseHandleSource(source, tech) {
      var _this2 = this;

      if (!source.src) {
        return false;
      }

      var licenseServer = source.licenseServer || source.licenseserver;
      var keySystems = source.keySystems || source.keysystems; // Don't fetch certificate if IE or Edge or CC or smartTV

      if (window_1.document.documentMode || IE_VERSION || IS_EDGE || IS_CHROMIUM_EDGE && IS_WINDOWS || IS_CHROMECAST || IS_ANDROID || IS_SMARTTV) {
        this.certificate_ = null;
      } else if (source.certificateServer && !this.certificate_ && (licenseServer || keySystems && !isEmpty(keySystems))) {
        this.fetchWidevineCertificate(source.certificateServer, function (cert, error) {
          if (cert) {
            if (_this2.name_ === 'EmpDashif') {
              _this2.certificate_ = base64EncodeUint8Array(cert);
            } else {
              // Is Shaka
              _this2.certificate_ = cert;
            }

            _this2.handleSource(source, tech);
          } else {
            _this2.checkForRecoverableErrors(error ? error : {
              message: 'no certificate',
              category: 6
            });
          }
        });
        return false;
      }

      if (this.stopTrackingDuration) {
        this.stopTrackingDuration();
      }

      this.stopped_ = false;
      this.ended_ = false;
      this.hasStarted_ = false;
      this.hasMetadata_ = false;
      var options = this.options_;
      options.source = source; // If user select language keep it

      var preAudioLanguage = this.options_.audioLanguage;
      var preSubtitleLanguage = this.options_.subtitleLanguage;
      this.options_ = assign(this.options_, source.options);

      if (preAudioLanguage) {
        this.options_.audioLanguage = preAudioLanguage;
      }

      if (preSubtitleLanguage) {
        this.options_.subtitleLanguage = preSubtitleLanguage;
      }

      this.currentProgram_ = null;
      this.currentVOD_ = null;

      if (licenseServer || keySystems) {
        this.playToken = source.playToken || source.playtoken;
      }

      this.clearTracks(['text']);
      return true;
    }
    /**
    * Set current Program
    *
    * @param {Object} currentProgram
    * @return {Object} currentProgram
    */
    ;

    _proto.program = function program(currentProgram) {
      if (currentProgram !== undefined) {
        this.currentProgram_ = currentProgram;
        this.currentVOD_ = null;

        if (currentProgram && currentProgram.asset && this.options_.source) {
          this.options_.source.assetId = currentProgram.asset.assetId;
        }
      } else {
        return this.currentProgram_;
      }
    }
    /**
     * Set current VOD
     *
     * @param {Object} currentVOD
     * @return {Object} currentVOD
     */
    ;

    _proto.VOD = function VOD(currentVOD) {
      if (currentVOD !== undefined) {
        this.currentVOD_ = currentVOD;
        this.currentProgram_ = null;

        if (currentVOD && this.options_.source) {
          this.options_.source.assetId = currentVOD.assetId;
        }
      } else {
        return this.currentVOD_;
      }
    } // /////////////////// Text tracks

    /**
     * isTextTrackSynchronized
     *
     * @param {string[]} techTracksLanguages
     * @return {boolean} is Synchronized
     * @private
     */
    ;

    _proto.isTechTextTrackSynchronized = function isTechTextTrackSynchronized(techTracksLanguages) {
      techTracksLanguages = techTracksLanguages.sort();
      var videojsTextTracks = this.textTracks();
      var videojsTextTracksLanguages = [];

      for (var i = 0; i < videojsTextTracks.length; i++) {
        videojsTextTracksLanguages.push(videojsTextTracks[i].language);
      }

      videojsTextTracksLanguages = videojsTextTracksLanguages.sort();
      var isSync = techTracksLanguages.join() === videojsTextTracksLanguages.join(); // log('isTextTrackSynchronized', isSync, techTracksLanguages.join(), videojsTextTracksLanguages.join());

      log('isTextTrackSynchronized', isSync);
      return isSync;
    }
    /**
    * syncVideojsTexttrackVisibility
    *
    * @private
    */
    ;

    _proto.syncVideojsTexttrackVisibility = function syncVideojsTexttrackVisibility() {
      log('syncVideojsTexttrackVisibility');
      this.blockLocalTrackChange = true;
      var textTracks = this.textTracks();
      var i = textTracks.length;

      if (!this.shakaPlayer_.isTextTrackVisible()) {
        while (i--) {
          var track = textTracks[i];

          if (track.mode === 'showing') {
            track.mode = 'hidden';
          }
        }
      } else {
        var selectedTechTextLanguage = this.getSelectedTechTextLanguage();

        while (i--) {
          var _track = textTracks[i];

          if (_track.language === selectedTechTextLanguage && _track.mode !== 'showing') {
            _track.mode = 'showing';
          } else if (_track.language !== selectedTechTextLanguage && _track.mode !== 'disabled') {
            _track.mode = 'disabled';
          }
        }
      }

      this.stopBlockLocalTrackChange('syncVideojsTexttrackVisibility');
    }
    /**
    * deferredSelectTextTrack
    * When changing tracklist we get many onTextTrackChange, wait to the update is done
     *
    * @param {string} languageCode
    * @private
    */
    ;

    _proto.deferredSelectTextTrack = function deferredSelectTextTrack(languageCode) {
      log('deferredSelectTextTrack enter', languageCode);

      if (this.deferredTextTrackChangeTimeOut) {
        // Reset TrackChange, new selection comming in
        clearTimeout(this.deferredTextTrackChangeTimeOut);
      }

      this.deferredTextTrackChangeTimeOut = setTimeout(function () {
        log('update texttrack');
        clearTimeout(this.deferredTextTrackChangeTimeOut);
        this.deferredTextTrackChangeTimeOut = null;

        if (this.isDispose_) {
          return;
        }

        this.blockLocalTrackChange = true;
        this.selectTechTextLanguage(languageCode);
        this.stopBlockLocalTrackChange('deferredSelectTextTrack exit');
      }.bind(this), 2000);
    }
    /**
    * selectVideojsTextLanguage
     *
    * @param {string} languageCode
    * @private
    */
    ;

    _proto.selectVideojsTextLanguage = function selectVideojsTextLanguage(languageCode) {
      log('selectVideojsTextLanguage', languageCode);
      var textTracks = this.textTracks();
      var i = textTracks.length;

      while (i--) {
        var track = textTracks[i];

        if (languageCode === track.language && track.mode !== 'showing') {
          this.blockLocalTrackChange = true;
          track.mode = 'showing';
        } else if (languageCode !== track.language && track.mode === 'showing') {
          this.blockLocalTrackChange = true;
          track.mode = 'disabled';
        }
      }

      this.stopBlockLocalTrackChange('selectVideojsAudioLanguage');
    }
    /**
    * VideoJS Text track change
     *
    * @param {EventTarget~Event} [event]
    * One of the VideoJS text track changed its mode
    *
    * @private
    */
    ;

    _proto.baseTextTrackChange = function baseTextTrackChange(event) {
      if (this.blockLocalTrackChange) {
        log('blockLocalTrackChange', 'baseTextTrackChange');
        return;
      }

      log('ontextTrackChange');
      var textTracks = this.textTracks();
      var i = textTracks.length;

      while (i--) {
        var track = textTracks[i];

        if (track.mode === 'showing') {
          this.deferredSelectTextTrack(track.language);
          return;
        }
      }

      this.deferredSelectTextTrack(null);
    } // /////////////////// Audio tracks

    /**
    * isTechAudioTrackSynchronized
    *
    * @param {string[]} techTracksLanguages
    * @return {boolean} is Synchronized
    * @private
    */
    ;

    _proto.isTechAudioTrackSynchronized = function isTechAudioTrackSynchronized(techTracksLanguages) {
      techTracksLanguages = techTracksLanguages.sort();
      var videojsAudioTracks = this.audioTracks();
      var videojsAudioTracksLanguages = [];

      for (var i = 0; i < videojsAudioTracks.length; i++) {
        videojsAudioTracksLanguages.push(videojsAudioTracks[i].language);
      }

      videojsAudioTracksLanguages = videojsAudioTracksLanguages.sort();
      var isSync = techTracksLanguages.join() === videojsAudioTracksLanguages.join(); // log('isAudioTrackSynchronized', isSync, techTracksLanguages.join(), videojsAudioTracksLanguages.join());

      log('isAudioTrackSynchronized', isSync);
      return isSync;
    }
    /**
     * VideoJS
     * One of the VideoJS audio track changed its enabled
     *
     * @param {EventTarget~Event} [event]
     * @private
     */
    ;

    _proto.baseAudioTrackChange = function baseAudioTrackChange(event) {
      if (this.blockLocalTrackChange) {
        log('blockLocalTrackChange', 'baseAudioTrackChange');
        return;
      }

      log('onAudioTrackChange');
      var audioTracks = this.audioTracks();
      var i = audioTracks.length;

      while (i--) {
        var track = audioTracks[i];

        if (track.enabled) {
          this.selectTechAudioLanguage(track.language);
          return;
        }
      }
    }
    /**
    * selectVideojsAudioLanguage
     *
    * @param {string} languageCode
    * @private
    */
    ;

    _proto.selectVideojsAudioLanguage = function selectVideojsAudioLanguage(languageCode) {
      log('selectVideojsAudioLanguage', languageCode);

      if (languageCode) {
        var audioTracks = this.audioTracks();
        var i = audioTracks.length;

        while (i--) {
          var track = audioTracks[i];

          if (track.language === languageCode && !track.enabled) {
            this.blockLocalTrackChange = true;
            track.enabled = true;
            break;
          }
        }

        this.stopBlockLocalTrackChange('selectVideojsAudioLanguage');
      }
    }
    /**
     *
     * @param {string} kind
     * @param {string} label
     * @param {string} language
     * @param {boolean} enabled = false
     * @return {Object} new Track
     * @private
     */

    /**
     * addAudioTrack
     *
     * @param {string} kind
     * @param {string} label
     * @param {string} language
     * @param {boolean=} enabled
     * @return {Object} Track
     */
    ;

    _proto.addAudioTrack = function addAudioTrack(kind, label, language, enabled) {
      if (enabled === void 0) {
        enabled = false;
      }

      // Add the track to the player's audio track list.
      var track = new videojs.AudioTrack({
        enabled: enabled,
        kind: kind || 'main',
        label: label,
        language: language
      });
      this.audioTracks().addTrack(track);
      return track;
    }
    /**
    * stopBlockLocalTrackChange
     *
    * @param {string} caller
    * @private
    */
    ;

    _proto.stopBlockLocalTrackChange = function stopBlockLocalTrackChange(caller) {
      if (this.blockLocalTrackChange) {
        if (this.blockLocalTrackChangeTimeOut) {
          clearTimeout(this.blockLocalTrackChangeTimeOut);
        }

        this.blockLocalTrackChangeTimeOut = setTimeout(function () {
          try {
            clearTimeout(this.blockLocalTrackChangeTimeOut);
            this.blockLocalTrackChangeTimeOut = null;
            log(caller, 'stopBlockLocalTrackChange', ' TRACK_CHANGE');
            this.trigger(empPlayerEvents.TRACK_CHANGE);
            this.blockLocalTrackChange = false;
          } catch (e) {// Crash when navigate away
          }
        }.bind(this), 2000);
      }
    };

    return EmpTech;
  }();

  /**
   * @file time-ranges.js
   *
   */

  /**
   * Should create a fake TimeRange object
   * Mimics an HTML5 time range instance, which has functions that
   * return the start and end times for a range
   * TimeRanges are returned by the buffered() method
   *
   * @param  {(number|Array)} start of a single range or an array of ranges
   * @param  {number} end of a single range
   * @return {Object} TimeRangesObject
   * @private
   */

  function createTimeRanges(start, end) {
    if (Array.isArray(start)) {
      return createTimeRangesObj(start);
    } else if (start === undefined || end === undefined) {
      return createTimeRangesObj();
    }

    return createTimeRangesObj([[start, end]]);
  }
  /**
   * Create a time range object given ranges of time.
   *
   * @private
   * @param   {Array} [ranges]
   *          An array of time ranges.
   * @return {Object} TimeRangesObj
   */

  function createTimeRangesObj(ranges) {
    if (ranges === undefined || ranges.length === 0) {
      return {
        length: 0,
        start: function start() {
          throw new Error('This TimeRanges object is empty');
        },
        end: function end() {
          throw new Error('This TimeRanges object is empty');
        }
      };
    }

    return {
      length: ranges.length,
      start: getRange.bind(null, 'start', 0, ranges),
      end: getRange.bind(null, 'end', 1, ranges)
    };
  }
  /**
   * Get the time for the specified index at the start or end
   * of a TimeRange object.
   *
   * @private
   * @param      {string} fnName
   *             The function name to use for logging
   *
   * @param      {string} valueIndex
   *             The property that should be used to get the time. should be
   *             'start' or 'end'
   *
   * @param      {Array} ranges
   *             An array of time ranges
   *
   * @param      {Array} [rangeIndex=0]
   *             The index to start the search at
   *
   * @return     {number}
   *             The time that offset at the specified index.
   *
   * @deprecated rangeIndex must be set to a value, in the future this will throw an error.
   * @throws     {Error} if rangeIndex is more than the length of ranges
   */


  function getRange(fnName, valueIndex, ranges, rangeIndex) {
    if (rangeIndex === undefined) {
      log.warn("DEPRECATED: Function '" + fnName + "' on 'TimeRanges' called without an index argument.");
      rangeIndex = 0;
    }

    rangeCheck(fnName, rangeIndex, ranges.length - 1);
    return ranges[rangeIndex][valueIndex];
  }
  /**
   * Check if any of the time ranges are over the maximum index.
   *
   * @private
   * @param   {string} fnName
   *          The function name to use for logging
   *
   * @param   {number} index
   *          The index to check
   *
   * @param   {number} maxIndex
   *          The maximum possible index
   *
   * @throws  {Error} if the timeRanges provided are over the maxIndex
   */


  function rangeCheck(fnName, index, maxIndex) {
    if (index < 0 || index > maxIndex) {
      throw new Error("Failed to execute '" + fnName + "' on 'TimeRanges': The index provided (" + index + ") is greater than or equal to the maximum bound (" + maxIndex + ").");
    }
  }

  var _classCallCheck$1 = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass$1 = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  /**
   * Remember mixins? Until facebook and various react utilities figure out a new solution this will
   * make mixins work how they used to, by adding mixin methods directly to your react component.
   *
   * @param {function/array} mixins A reference to your mixin class
   * @param {object} context A reference to the react component class. Usually just "this".
   * @param {object} options An object of optional settings".
   * @returns undefined
   *
   * use it like this in your constructor:
   * mixins([mixin1, mixin2], this, {options});
   */

  var Mixins = (function () {
      function Mixins() {
          _classCallCheck$1(this, Mixins);
      }

      _createClass$1(Mixins, [{
          key: 'init',
          value: function init(mixins, context, options) {
              this.mixins = mixins;
              this.context = context;

              this.opt = {
                  warn: true,
                  mergeDuplicates: true
              };

              this.contextMethods = Object.getOwnPropertyNames(this.context.constructor.prototype);
              this.reactMethods = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

              if (options) {
                  this.opt.warn = options.warn !== undefined ? options.warn : this.opt.warn;
                  this.opt.mergeDuplicates = options.mergeDuplicates !== undefined ? options.mergeDuplicates : this.opt.mergeDuplicates;
              }

              if (this.mixins.constructor === Array) {
                  mixins.map(function (mixin) {
                      this.grabMethods(mixin);
                  }, this);
              } else if (typeof mixins === 'function' || typeof mixins === 'object') {
                  this.grabMethods(mixins);
              } else {
                  throw 'mixins expects a function, an array, or an object. Please and thank you';
              }
          }
      }, {
          key: 'addNewMethod',

          /**
           * If the method doesn't already exist on the react component, simply add this to it.
           *
           * @param {string} mm The name of a single mixin method
           * @param {function} currentMixin A reference to the mixin you are adding to the react component
           */
          value: function addNewMethod(mm, currentMixin) {
              if (this.mixins.prototype) {
                  this.context.constructor.prototype[mm] = this.mixins.prototype[mm];
              } else {
                  this.context.constructor.prototype[mm] = typeof currentMixin === 'object' ? currentMixin[mm] : currentMixin.prototype[mm];
              }
              this.contextMethods = Object.getOwnPropertyNames(this.context.constructor.prototype);
          }
      }, {
          key: 'extendMethod',

          /**
           * If there is already a method on your react component that matches the mixin method create a new function that
           * calls both methods so they can live in harmony.
           *
           * @param {string} mm The name of a single mixin method
           * @param {string} cm The name of the matched react method to extend
           * @param {function} currentMixin A reference to the mixin being added to the react method.
           */
          value: function extendMethod(mm, cm, currentMixin) {
              var orig = this.context[cm];
              var newMethod = typeof currentMixin === 'object' ? currentMixin[mm] : currentMixin.prototype[mm];
              this.context[mm] = function () {
                  newMethod.call(this, arguments);
                  orig.call(this, arguments);
              };
          }
      }, {
          key: 'grabMethods',

          /**
           * Takes a mixin method and sends it along the pipe
           * @param {function} mixin A single method from your mixin
           *
           */
          value: function grabMethods(mixin) {
              var _this = this;

              var currentMixin = mixin;
              var mixinMethods = typeof mixin === 'object' ? Object.getOwnPropertyNames(mixin) : Object.getOwnPropertyNames(mixin.prototype);

              mixinMethods.map(function (method) {
                  if (method !== 'constructor' && method !== 'render') {
                      _this.checkForMatch(method, currentMixin);
                  }
              }, this);
          }
      }, {
          key: 'checkForMatch',

          /**
           * Checks the react component to see if the method we want to add is already there.
           * If it is a duplicate and a React lifecycle method it silently extends the React method.
           * If it is a duplicate and not a React lifecycle method it warns you before extending the React method.
           *
           * @param {string} mm the mixin method to check against the react methods
           * @param {function} currentMixin A reference to the mixin being added to the React Component.
           */
          value: function checkForMatch(mm, currentMixin) {
              var _this2 = this;

              this.contextMethods.map(function (ctxMethod) {
                  if (mm === ctxMethod) {
                      if (_this2.reactMethods.indexOf(mm) > -1) {
                          _this2.extendMethod(mm, ctxMethod, currentMixin);
                      } else {
                          if (_this2.opt.warn) {
                              console.warn(mm + ' method already exists within the ' + _this2.context.constructor.name + ' component.');
                          }
                          if (_this2.opt.mergeDuplicates) {
                              _this2.extendMethod(mm, ctxMethod, currentMixin);
                          }
                      }
                  }
              });
              this.addNewMethod(mm, currentMixin);
          }
      }]);

      return Mixins;
  })();

  var mix = new Mixins();

  var es6Mixins = mix.init.bind(mix);

  /**
   * ISO639Converter
   */

  function ISO639Converter() {
    this.aar = {
      'ISO_639-1': 'aa',
      'ISO_639-3': 'aar'
    };
    this.abk = {
      'ISO_639-1': 'ab',
      'ISO_639-3': 'abk'
    };
    this.ave = {
      'ISO_639-1': 'ae',
      'ISO_639-3': 'ave'
    };
    this.afr = {
      'ISO_639-1': 'af',
      'ISO_639-3': 'afr'
    };
    this.aka = {
      'ISO_639-1': 'ak',
      'ISO_639-3': 'aka'
    };
    this.amh = {
      'ISO_639-1': 'am',
      'ISO_639-3': 'amh'
    };
    this.arg = {
      'ISO_639-1': 'an',
      'ISO_639-3': 'arg'
    };
    this.ara = {
      'ISO_639-1': 'ar',
      'ISO_639-3': 'ara'
    };
    this.asm = {
      'ISO_639-1': 'as',
      'ISO_639-3': 'asm'
    };
    this.ava = {
      'ISO_639-1': 'av',
      'ISO_639-3': 'ava'
    };
    this.aym = {
      'ISO_639-1': 'ay',
      'ISO_639-3': 'aym'
    };
    this.aze = {
      'ISO_639-1': 'az',
      'ISO_639-3': 'aze'
    };
    this.bak = {
      'ISO_639-1': 'ba',
      'ISO_639-3': 'bak'
    };
    this.bel = {
      'ISO_639-1': 'be',
      'ISO_639-3': 'bel'
    };
    this.bul = {
      'ISO_639-1': 'bg',
      'ISO_639-3': 'bul'
    };
    this.bis = {
      'ISO_639-1': 'bi',
      'ISO_639-3': 'bis'
    };
    this.bam = {
      'ISO_639-1': 'bm',
      'ISO_639-3': 'bam'
    };
    this.ben = {
      'ISO_639-1': 'bn',
      'ISO_639-3': 'ben'
    };
    this.bod = {
      'ISO_639-1': 'bo',
      'ISO_639-3': 'bod'
    };
    this.bre = {
      'ISO_639-1': 'br',
      'ISO_639-3': 'bre'
    };
    this.bos = {
      'ISO_639-1': 'bs',
      'ISO_639-3': 'bos'
    };
    this.cat = {
      'ISO_639-1': 'ca',
      'ISO_639-3': 'cat'
    };
    this.che = {
      'ISO_639-1': 'ce',
      'ISO_639-3': 'che'
    };
    this.cha = {
      'ISO_639-1': 'ch',
      'ISO_639-3': 'cha'
    };
    this.cos = {
      'ISO_639-1': 'co',
      'ISO_639-3': 'cos'
    };
    this.cre = {
      'ISO_639-1': 'cr',
      'ISO_639-3': 'cre'
    };
    this.ces = {
      'ISO_639-1': 'cs',
      'ISO_639-3': 'ces'
    };
    this.chu = {
      'ISO_639-1': 'cu',
      'ISO_639-3': 'chu'
    };
    this.chv = {
      'ISO_639-1': 'cv',
      'ISO_639-3': 'chv'
    };
    this.cym = {
      'ISO_639-1': 'cy',
      'ISO_639-3': 'cym'
    };
    this.dan = {
      'ISO_639-1': 'da',
      'ISO_639-3': 'dan'
    };
    this.deu = {
      'ISO_639-1': 'de',
      'ISO_639-3': 'deu'
    };
    this.div = {
      'ISO_639-1': 'dv',
      'ISO_639-3': 'div'
    };
    this.dzo = {
      'ISO_639-1': 'dz',
      'ISO_639-3': 'dzo'
    };
    this.ewe = {
      'ISO_639-1': 'ee',
      'ISO_639-3': 'ewe'
    };
    this.ell = {
      'ISO_639-1': 'el',
      'ISO_639-3': 'ell'
    };
    this.eng = {
      'ISO_639-1': 'en',
      'ISO_639-3': 'eng'
    };
    this.epo = {
      'ISO_639-1': 'eo',
      'ISO_639-3': 'epo'
    };
    this.spa = {
      'ISO_639-1': 'es',
      'ISO_639-3': 'spa'
    };
    this.est = {
      'ISO_639-1': 'et',
      'ISO_639-3': 'est'
    };
    this.eus = {
      'ISO_639-1': 'eu',
      'ISO_639-3': 'eus'
    };
    this.fas = {
      'ISO_639-1': 'fa',
      'ISO_639-3': 'fas'
    };
    this.ful = {
      'ISO_639-1': 'ff',
      'ISO_639-3': 'ful'
    };
    this.fin = {
      'ISO_639-1': 'fi',
      'ISO_639-3': 'fin'
    };
    this.fij = {
      'ISO_639-1': 'fj',
      'ISO_639-3': 'fij'
    };
    this.fao = {
      'ISO_639-1': 'fo',
      'ISO_639-3': 'fao'
    };
    this.fra = {
      'ISO_639-1': 'fr',
      'ISO_639-3': 'fra'
    };
    this.fry = {
      'ISO_639-1': 'fy',
      'ISO_639-3': 'fry'
    }; // Bugfix some track have "ger" as code

    this.ger = {
      'ISO_639-1': 'de',
      'ISO_639-3': 'deu'
    };
    this.gle = {
      'ISO_639-1': 'ga',
      'ISO_639-3': 'gle'
    };
    this.gla = {
      'ISO_639-1': 'gd',
      'ISO_639-3': 'gla'
    };
    this.glg = {
      'ISO_639-1': 'gl',
      'ISO_639-3': 'glg'
    };
    this.grn = {
      'ISO_639-1': 'gn',
      'ISO_639-3': 'grn'
    };
    this.guj = {
      'ISO_639-1': 'gu',
      'ISO_639-3': 'guj'
    };
    this.glv = {
      'ISO_639-1': 'gv',
      'ISO_639-3': 'glv'
    };
    this.hau = {
      'ISO_639-1': 'ha',
      'ISO_639-3': 'hau'
    };
    this.heb = {
      'ISO_639-1': 'he',
      'ISO_639-3': 'heb'
    };
    this.hin = {
      'ISO_639-1': 'hi',
      'ISO_639-3': 'hin'
    };
    this.hmo = {
      'ISO_639-1': 'ho',
      'ISO_639-3': 'hmo'
    };
    this.hrv = {
      'ISO_639-1': 'hr',
      'ISO_639-3': 'hrv'
    };
    this.hat = {
      'ISO_639-1': 'ht',
      'ISO_639-3': 'hat'
    };
    this.hun = {
      'ISO_639-1': 'hu',
      'ISO_639-3': 'hun'
    };
    this.hye = {
      'ISO_639-1': 'hy',
      'ISO_639-3': 'hye'
    };
    this.her = {
      'ISO_639-1': 'hz',
      'ISO_639-3': 'her'
    };
    this.ina = {
      'ISO_639-1': 'ia',
      'ISO_639-3': 'ina'
    };
    this.ind = {
      'ISO_639-1': 'id',
      'ISO_639-3': 'ind'
    };
    this.ile = {
      'ISO_639-1': 'ie',
      'ISO_639-3': 'ile'
    };
    this.ibo = {
      'ISO_639-1': 'ig',
      'ISO_639-3': 'ibo'
    };
    this.iii = {
      'ISO_639-1': 'ii',
      'ISO_639-3': 'iii'
    };
    this.ipk = {
      'ISO_639-1': 'ik',
      'ISO_639-3': 'ipk'
    };
    this.ido = {
      'ISO_639-1': 'io',
      'ISO_639-3': 'ido'
    };
    this.isl = {
      'ISO_639-1': 'is',
      'ISO_639-3': 'isl'
    };
    this.ita = {
      'ISO_639-1': 'it',
      'ISO_639-3': 'ita'
    };
    this.iku = {
      'ISO_639-1': 'iu',
      'ISO_639-3': 'iku'
    };
    this.jpn = {
      'ISO_639-1': 'ja',
      'ISO_639-3': 'jpn'
    };
    this.jav = {
      'ISO_639-1': 'jv',
      'ISO_639-3': 'jav'
    };
    this.kat = {
      'ISO_639-1': 'ka',
      'ISO_639-3': 'kat'
    };
    this.kon = {
      'ISO_639-1': 'kg',
      'ISO_639-3': 'kon'
    };
    this.kik = {
      'ISO_639-1': 'ki',
      'ISO_639-3': 'kik'
    };
    this.kua = {
      'ISO_639-1': 'kj',
      'ISO_639-3': 'kua'
    };
    this.kaz = {
      'ISO_639-1': 'kk',
      'ISO_639-3': 'kaz'
    };
    this.kal = {
      'ISO_639-1': 'kl',
      'ISO_639-3': 'kal'
    };
    this.khm = {
      'ISO_639-1': 'km',
      'ISO_639-3': 'khm'
    };
    this.kan = {
      'ISO_639-1': 'kn',
      'ISO_639-3': 'kan'
    };
    this.kor = {
      'ISO_639-1': 'ko',
      'ISO_639-3': 'kor'
    };
    this.kau = {
      'ISO_639-1': 'kr',
      'ISO_639-3': 'kau'
    };
    this.kas = {
      'ISO_639-1': 'ks',
      'ISO_639-3': 'kas'
    };
    this.kur = {
      'ISO_639-1': 'ku',
      'ISO_639-3': 'kur'
    };
    this.kom = {
      'ISO_639-1': 'kv',
      'ISO_639-3': 'kom'
    };
    this.cor = {
      'ISO_639-1': 'kw',
      'ISO_639-3': 'cor'
    };
    this.kir = {
      'ISO_639-1': 'ky',
      'ISO_639-3': 'kir'
    };
    this.lat = {
      'ISO_639-1': 'la',
      'ISO_639-3': 'lat'
    };
    this.ltz = {
      'ISO_639-1': 'lb',
      'ISO_639-3': 'ltz'
    };
    this.lug = {
      'ISO_639-1': 'lg',
      'ISO_639-3': 'lug'
    };
    this.lim = {
      'ISO_639-1': 'li',
      'ISO_639-3': 'lim'
    };
    this.lin = {
      'ISO_639-1': 'ln',
      'ISO_639-3': 'lin'
    };
    this.lao = {
      'ISO_639-1': 'lo',
      'ISO_639-3': 'lao'
    };
    this.lit = {
      'ISO_639-1': 'lt',
      'ISO_639-3': 'lit'
    };
    this.lub = {
      'ISO_639-1': 'lu',
      'ISO_639-3': 'lub'
    };
    this.lav = {
      'ISO_639-1': 'lv',
      'ISO_639-3': 'lav'
    };
    this.mlg = {
      'ISO_639-1': 'mg',
      'ISO_639-3': 'mlg'
    };
    this.mah = {
      'ISO_639-1': 'mh',
      'ISO_639-3': 'mah'
    };
    this.mri = {
      'ISO_639-1': 'mi',
      'ISO_639-3': 'mri'
    };
    this.mkd = {
      'ISO_639-1': 'mk',
      'ISO_639-3': 'mkd'
    };
    this.mal = {
      'ISO_639-1': 'ml',
      'ISO_639-3': 'mal'
    };
    this.mon = {
      'ISO_639-1': 'mn',
      'ISO_639-3': 'mon'
    };
    this.mar = {
      'ISO_639-1': 'mr',
      'ISO_639-3': 'mar'
    };
    this.msa = {
      'ISO_639-1': 'ms',
      'ISO_639-3': 'msa'
    };
    this.mlt = {
      'ISO_639-1': 'mt',
      'ISO_639-3': 'mlt'
    };
    this.mya = {
      'ISO_639-1': 'my',
      'ISO_639-3': 'mya'
    };
    this.nau = {
      'ISO_639-1': 'na',
      'ISO_639-3': 'nau'
    };
    this.nob = {
      'ISO_639-1': 'nb',
      'ISO_639-3': 'nob'
    };
    this.nde = {
      'ISO_639-1': 'nd',
      'ISO_639-3': 'nde'
    };
    this.nep = {
      'ISO_639-1': 'ne',
      'ISO_639-3': 'nep'
    };
    this.ndo = {
      'ISO_639-1': 'ng',
      'ISO_639-3': 'ndo'
    };
    this.nld = {
      'ISO_639-1': 'nl',
      'ISO_639-3': 'nld'
    };
    this.nno = {
      'ISO_639-1': 'nn',
      'ISO_639-3': 'nno'
    };
    this.nor = {
      'ISO_639-1': 'no',
      'ISO_639-3': 'nor'
    };
    this.nbl = {
      'ISO_639-1': 'nr',
      'ISO_639-3': 'nbl'
    };
    this.nav = {
      'ISO_639-1': 'nv',
      'ISO_639-3': 'nav'
    };
    this.nya = {
      'ISO_639-1': 'ny',
      'ISO_639-3': 'nya'
    };
    this.oci = {
      'ISO_639-1': 'oc',
      'ISO_639-3': 'oci'
    };
    this.oji = {
      'ISO_639-1': 'oj',
      'ISO_639-3': 'oji'
    };
    this.orm = {
      'ISO_639-1': 'om',
      'ISO_639-3': 'orm'
    };
    this.ori = {
      'ISO_639-1': 'or',
      'ISO_639-3': 'ori'
    };
    this.oss = {
      'ISO_639-1': 'os',
      'ISO_639-3': 'oss'
    };
    this.pan = {
      'ISO_639-1': 'pa',
      'ISO_639-3': 'pan'
    };
    this.pli = {
      'ISO_639-1': 'pi',
      'ISO_639-3': 'pli'
    };
    this.pol = {
      'ISO_639-1': 'pl',
      'ISO_639-3': 'pol'
    };
    this.pus = {
      'ISO_639-1': 'ps',
      'ISO_639-3': 'pus'
    };
    this.por = {
      'ISO_639-1': 'pt',
      'ISO_639-3': 'por'
    };
    this.que = {
      'ISO_639-1': 'qu',
      'ISO_639-3': 'que'
    };
    this.roh = {
      'ISO_639-1': 'rm',
      'ISO_639-3': 'roh'
    };
    this.run = {
      'ISO_639-1': 'rn',
      'ISO_639-3': 'run'
    };
    this.ron = {
      'ISO_639-1': 'ro',
      'ISO_639-3': 'ron'
    };
    this.rus = {
      'ISO_639-1': 'ru',
      'ISO_639-3': 'rus'
    };
    this.kin = {
      'ISO_639-1': 'rw',
      'ISO_639-3': 'kin'
    };
    this.san = {
      'ISO_639-1': 'sa',
      'ISO_639-3': 'san'
    };
    this.srd = {
      'ISO_639-1': 'sc',
      'ISO_639-3': 'srd'
    };
    this.snd = {
      'ISO_639-1': 'sd',
      'ISO_639-3': 'snd'
    };
    this.sme = {
      'ISO_639-1': 'se',
      'ISO_639-3': 'sme'
    };
    this.sag = {
      'ISO_639-1': 'sg',
      'ISO_639-3': 'sag'
    };
    this.hbs = {
      'ISO_639-1': 'sh (deprecated)',
      'ISO_639-3': 'hbs'
    };
    this.sin = {
      'ISO_639-1': 'si',
      'ISO_639-3': 'sin'
    };
    this.slk = {
      'ISO_639-1': 'sk',
      'ISO_639-3': 'slk'
    };
    this.slv = {
      'ISO_639-1': 'sl',
      'ISO_639-3': 'slv'
    };
    this.smo = {
      'ISO_639-1': 'sm',
      'ISO_639-3': 'smo'
    };
    this.sna = {
      'ISO_639-1': 'sn',
      'ISO_639-3': 'sna'
    };
    this.som = {
      'ISO_639-1': 'so',
      'ISO_639-3': 'som'
    };
    this.sqi = {
      'ISO_639-1': 'sq',
      'ISO_639-3': 'sqi'
    };
    this.srp = {
      'ISO_639-1': 'sr',
      'ISO_639-3': 'srp'
    };
    this.ssw = {
      'ISO_639-1': 'ss',
      'ISO_639-3': 'ssw'
    };
    this.sot = {
      'ISO_639-1': 'st',
      'ISO_639-3': 'sot'
    };
    this.sun = {
      'ISO_639-1': 'su',
      'ISO_639-3': 'sun'
    };
    this.swe = {
      'ISO_639-1': 'sv',
      'ISO_639-3': 'swe'
    };
    this.swa = {
      'ISO_639-1': 'sw',
      'ISO_639-3': 'swa'
    };
    this.tam = {
      'ISO_639-1': 'ta',
      'ISO_639-3': 'tam'
    };
    this.tel = {
      'ISO_639-1': 'te',
      'ISO_639-3': 'tel'
    };
    this.tgk = {
      'ISO_639-1': 'tg',
      'ISO_639-3': 'tgk'
    };
    this.tha = {
      'ISO_639-1': 'th',
      'ISO_639-3': 'tha'
    };
    this.tir = {
      'ISO_639-1': 'ti',
      'ISO_639-3': 'tir'
    };
    this.tuk = {
      'ISO_639-1': 'tk',
      'ISO_639-3': 'tuk'
    };
    this.tgl = {
      'ISO_639-1': 'tl',
      'ISO_639-3': 'tgl'
    };
    this.tsn = {
      'ISO_639-1': 'tn',
      'ISO_639-3': 'tsn'
    };
    this.ton = {
      'ISO_639-1': 'to',
      'ISO_639-3': 'ton'
    };
    this.tur = {
      'ISO_639-1': 'tr',
      'ISO_639-3': 'tur'
    };
    this.tso = {
      'ISO_639-1': 'ts',
      'ISO_639-3': 'tso'
    };
    this.tat = {
      'ISO_639-1': 'tt',
      'ISO_639-3': 'tat'
    };
    this.twi = {
      'ISO_639-1': 'tw',
      'ISO_639-3': 'twi'
    };
    this.tah = {
      'ISO_639-1': 'ty',
      'ISO_639-3': 'tah'
    };
    this.uig = {
      'ISO_639-1': 'ug',
      'ISO_639-3': 'uig'
    };
    this.ukr = {
      'ISO_639-1': 'uk',
      'ISO_639-3': 'ukr'
    };
    this.urd = {
      'ISO_639-1': 'ur',
      'ISO_639-3': 'urd'
    };
    this.uzb = {
      'ISO_639-1': 'uz',
      'ISO_639-3': 'uzb'
    };
    this.ven = {
      'ISO_639-1': 've',
      'ISO_639-3': 'ven'
    };
    this.vie = {
      'ISO_639-1': 'vi',
      'ISO_639-3': 'vie'
    };
    this.vol = {
      'ISO_639-1': 'vo',
      'ISO_639-3': 'vol'
    };
    this.wln = {
      'ISO_639-1': 'wa',
      'ISO_639-3': 'wln'
    };
    this.wol = {
      'ISO_639-1': 'wo',
      'ISO_639-3': 'wol'
    };
    this.xho = {
      'ISO_639-1': 'xh',
      'ISO_639-3': 'xho'
    };
    this.yid = {
      'ISO_639-1': 'yi',
      'ISO_639-3': 'yid'
    };
    this.yor = {
      'ISO_639-1': 'yo',
      'ISO_639-3': 'yor'
    };
    this.zha = {
      'ISO_639-1': 'za',
      'ISO_639-3': 'zha'
    };
    this.zho = {
      'ISO_639-1': 'zh',
      'ISO_639-3': 'zho'
    };
    this.zul = {
      'ISO_639-1': 'zu',
      'ISO_639-3': 'zul'
    };
  }

  ISO639Converter.prototype.from3to1 = function (ISO3Code) {
    if (this.hasOwnProperty(ISO3Code)) {
      return this[ISO3Code]['ISO_639-1'];
    }

    return null;
  };

  window_1.iso639Converter = new ISO639Converter();
  /**
  	 * @author Phil Teare
  	 * using wikipedia data
  	 */

  var isoLangs = {
    ab: {
      name: 'Abkhaz',
      nativeName: 'аҧсуа'
    },
    aa: {
      name: 'Afar',
      nativeName: 'Afaraf'
    },
    af: {
      name: 'Afrikaans',
      nativeName: 'Afrikaans'
    },
    ak: {
      name: 'Akan',
      nativeName: 'Akan'
    },
    sq: {
      name: 'Albanian',
      nativeName: 'Shqip'
    },
    am: {
      name: 'Amharic',
      nativeName: 'አማርኛ'
    },
    ar: {
      name: 'Arabic',
      nativeName: 'العربية'
    },
    an: {
      name: 'Aragonese',
      nativeName: 'Aragonés'
    },
    hy: {
      name: 'Armenian',
      nativeName: 'Հայերեն'
    },
    as: {
      name: 'Assamese',
      nativeName: 'অসমীয়া'
    },
    av: {
      name: 'Avaric',
      nativeName: 'авар мацӀ, магӀарул мацӀ'
    },
    ae: {
      name: 'Avestan',
      nativeName: 'avesta'
    },
    ay: {
      name: 'Aymara',
      nativeName: 'aymar aru'
    },
    az: {
      name: 'Azerbaijani',
      nativeName: 'azərbaycan dili'
    },
    bm: {
      name: 'Bambara',
      nativeName: 'bamanankan'
    },
    ba: {
      name: 'Bashkir',
      nativeName: 'башҡорт теле'
    },
    eu: {
      name: 'Basque',
      nativeName: 'euskara, euskera'
    },
    be: {
      name: 'Belarusian',
      nativeName: 'Беларуская'
    },
    bn: {
      name: 'Bengali',
      nativeName: 'বাংলা'
    },
    bh: {
      name: 'Bihari',
      nativeName: 'भोजपुरी'
    },
    bi: {
      name: 'Bislama',
      nativeName: 'Bislama'
    },
    bs: {
      name: 'Bosnian',
      nativeName: 'bosanski jezik'
    },
    br: {
      name: 'Breton',
      nativeName: 'brezhoneg'
    },
    bg: {
      name: 'Bulgarian',
      nativeName: 'български език'
    },
    my: {
      name: 'Burmese',
      nativeName: 'ဗမာစာ'
    },
    ca: {
      name: 'Catalan; Valencian',
      nativeName: 'Català'
    },
    ch: {
      name: 'Chamorro',
      nativeName: 'Chamoru'
    },
    ce: {
      name: 'Chechen',
      nativeName: 'нохчийн мотт'
    },
    ny: {
      name: 'Chichewa; Chewa; Nyanja',
      nativeName: 'chiCheŵa, chinyanja'
    },
    zh: {
      name: 'Chinese',
      nativeName: '中文 (Zhōngwén), 汉语, 漢語'
    },
    cv: {
      name: 'Chuvash',
      nativeName: 'чӑваш чӗлхи'
    },
    kw: {
      name: 'Cornish',
      nativeName: 'Kernewek'
    },
    co: {
      name: 'Corsican',
      nativeName: 'corsu, lingua corsa'
    },
    cr: {
      name: 'Cree',
      nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ'
    },
    hr: {
      name: 'Croatian',
      nativeName: 'hrvatski'
    },
    cs: {
      name: 'Czech',
      nativeName: 'česky, čeština'
    },
    da: {
      name: 'Danish',
      nativeName: 'dansk'
    },
    dv: {
      name: 'Divehi; Dhivehi; Maldivian;',
      nativeName: 'ދިވެހި'
    },
    nl: {
      name: 'Dutch',
      nativeName: 'Nederlands, Vlaams'
    },
    en: {
      name: 'English',
      nativeName: 'English'
    },
    eo: {
      name: 'Esperanto',
      nativeName: 'Esperanto'
    },
    et: {
      name: 'Estonian',
      nativeName: 'eesti, eesti keel'
    },
    ee: {
      name: 'Ewe',
      nativeName: 'Eʋegbe'
    },
    fo: {
      name: 'Faroese',
      nativeName: 'føroyskt'
    },
    fj: {
      name: 'Fijian',
      nativeName: 'vosa Vakaviti'
    },
    fi: {
      name: 'Finnish',
      nativeName: 'suomi, suomen kieli'
    },
    fr: {
      name: 'French',
      nativeName: 'français, langue française'
    },
    ff: {
      name: 'Fula; Fulah; Pulaar; Pular',
      nativeName: 'Fulfulde, Pulaar, Pular'
    },
    gl: {
      name: 'Galician',
      nativeName: 'Galego'
    },
    ka: {
      name: 'Georgian',
      nativeName: 'ქართული'
    },
    de: {
      name: 'German',
      nativeName: 'Deutsch'
    },
    el: {
      name: 'Greek, Modern',
      nativeName: 'Ελληνικά'
    },
    gn: {
      name: 'Guaraní',
      nativeName: 'Avañeẽ'
    },
    gu: {
      name: 'Gujarati',
      nativeName: 'ગુજરાતી'
    },
    ht: {
      name: 'Haitian; Haitian Creole',
      nativeName: 'Kreyòl ayisyen'
    },
    ha: {
      name: 'Hausa',
      nativeName: 'Hausa, هَوُسَ'
    },
    he: {
      name: 'Hebrew (modern)',
      nativeName: 'עברית'
    },
    hz: {
      name: 'Herero',
      nativeName: 'Otjiherero'
    },
    hi: {
      name: 'Hindi',
      nativeName: 'हिन्दी, हिंदी'
    },
    ho: {
      name: 'Hiri Motu',
      nativeName: 'Hiri Motu'
    },
    hu: {
      name: 'Hungarian',
      nativeName: 'Magyar'
    },
    ia: {
      name: 'Interlingua',
      nativeName: 'Interlingua'
    },
    id: {
      name: 'Indonesian',
      nativeName: 'Bahasa Indonesia'
    },
    ie: {
      name: 'Interlingue',
      nativeName: 'Originally called Occidental; then Interlingue after WWII'
    },
    ga: {
      name: 'Irish',
      nativeName: 'Gaeilge'
    },
    ig: {
      name: 'Igbo',
      nativeName: 'Asụsụ Igbo'
    },
    ik: {
      name: 'Inupiaq',
      nativeName: 'Iñupiaq, Iñupiatun'
    },
    io: {
      name: 'Ido',
      nativeName: 'Ido'
    },
    is: {
      name: 'Icelandic',
      nativeName: 'Íslenska'
    },
    it: {
      name: 'Italian',
      nativeName: 'Italiano'
    },
    iu: {
      name: 'Inuktitut',
      nativeName: 'ᐃᓄᒃᑎᑐᑦ'
    },
    ja: {
      name: 'Japanese',
      nativeName: '日本語 (にほんご／にっぽんご)'
    },
    jv: {
      name: 'Javanese',
      nativeName: 'basa Jawa'
    },
    kl: {
      name: 'Kalaallisut, Greenlandic',
      nativeName: 'kalaallisut, kalaallit oqaasii'
    },
    kn: {
      name: 'Kannada',
      nativeName: 'ಕನ್ನಡ'
    },
    kr: {
      name: 'Kanuri',
      nativeName: 'Kanuri'
    },
    ks: {
      name: 'Kashmiri',
      nativeName: 'कश्मीरी, كشميري‎'
    },
    kk: {
      name: 'Kazakh',
      nativeName: 'Қазақ тілі'
    },
    km: {
      name: 'Khmer',
      nativeName: 'ភាសាខ្មែរ'
    },
    ki: {
      name: 'Kikuyu, Gikuyu',
      nativeName: 'Gĩkũyũ'
    },
    rw: {
      name: 'Kinyarwanda',
      nativeName: 'Ikinyarwanda'
    },
    ky: {
      name: 'Kirghiz, Kyrgyz',
      nativeName: 'кыргыз тили'
    },
    kv: {
      name: 'Komi',
      nativeName: 'коми кыв'
    },
    kg: {
      name: 'Kongo',
      nativeName: 'KiKongo'
    },
    ko: {
      name: 'Korean',
      nativeName: '한국어 (韓國語), 조선말 (朝鮮語)'
    },
    ku: {
      name: 'Kurdish',
      nativeName: 'Kurdî, كوردی‎'
    },
    kj: {
      name: 'Kwanyama, Kuanyama',
      nativeName: 'Kuanyama'
    },
    la: {
      name: 'Latin',
      nativeName: 'latine, lingua latina'
    },
    lb: {
      name: 'Luxembourgish, Letzeburgesch',
      nativeName: 'Lëtzebuergesch'
    },
    lg: {
      name: 'Luganda',
      nativeName: 'Luganda'
    },
    li: {
      name: 'Limburgish, Limburgan, Limburger',
      nativeName: 'Limburgs'
    },
    ln: {
      name: 'Lingala',
      nativeName: 'Lingála'
    },
    lo: {
      name: 'Lao',
      nativeName: 'ພາສາລາວ'
    },
    lt: {
      name: 'Lithuanian',
      nativeName: 'lietuvių kalba'
    },
    lu: {
      name: 'Luba-Katanga',
      nativeName: ''
    },
    lv: {
      name: 'Latvian',
      nativeName: 'latviešu valoda'
    },
    gv: {
      name: 'Manx',
      nativeName: 'Gaelg, Gailck'
    },
    mk: {
      name: 'Macedonian',
      nativeName: 'македонски јазик'
    },
    mg: {
      name: 'Malagasy',
      nativeName: 'Malagasy fiteny'
    },
    ms: {
      name: 'Malay',
      nativeName: 'bahasa Melayu, بهاس ملايو‎'
    },
    ml: {
      name: 'Malayalam',
      nativeName: 'മലയാളം'
    },
    mt: {
      name: 'Maltese',
      nativeName: 'Malti'
    },
    mi: {
      name: 'Māori',
      nativeName: 'te reo Māori'
    },
    mr: {
      name: 'Marathi (Marāṭhī)',
      nativeName: 'मराठी'
    },
    mh: {
      name: 'Marshallese',
      nativeName: 'Kajin M̧ajeļ'
    },
    mn: {
      name: 'Mongolian',
      nativeName: 'монгол'
    },
    na: {
      name: 'Nauru',
      nativeName: 'Ekakairũ Naoero'
    },
    nv: {
      name: 'Navajo, Navaho',
      nativeName: 'Diné bizaad, Dinékʼehǰí'
    },
    nb: {
      name: 'Norwegian Bokmål',
      nativeName: 'Norsk bokmål'
    },
    nd: {
      name: 'North Ndebele',
      nativeName: 'isiNdebele'
    },
    ne: {
      name: 'Nepali',
      nativeName: 'नेपाली'
    },
    ng: {
      name: 'Ndonga',
      nativeName: 'Owambo'
    },
    nn: {
      name: 'Norwegian Nynorsk',
      nativeName: 'Norsk nynorsk'
    },
    no: {
      name: 'Norwegian',
      nativeName: 'Norsk'
    },
    ii: {
      name: 'Nuosu',
      nativeName: 'ꆈꌠ꒿ Nuosuhxop'
    },
    nr: {
      name: 'South Ndebele',
      nativeName: 'isiNdebele'
    },
    oc: {
      name: 'Occitan',
      nativeName: 'Occitan'
    },
    oj: {
      name: 'Ojibwe, Ojibwa',
      nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
    },
    cu: {
      name: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
      nativeName: 'ѩзыкъ словѣньскъ'
    },
    om: {
      name: 'Oromo',
      nativeName: 'Afaan Oromoo'
    },
    or: {
      name: 'Oriya',
      nativeName: 'ଓଡ଼ିଆ'
    },
    os: {
      name: 'Ossetian, Ossetic',
      nativeName: 'ирон æвзаг'
    },
    pa: {
      name: 'Panjabi, Punjabi',
      nativeName: 'ਪੰਜਾਬੀ, پنجابی‎'
    },
    pi: {
      name: 'Pāli',
      nativeName: 'पाऴि'
    },
    fa: {
      name: 'Persian',
      nativeName: 'فارسی'
    },
    pl: {
      name: 'Polish',
      nativeName: 'polski'
    },
    ps: {
      name: 'Pashto, Pushto',
      nativeName: 'پښتو'
    },
    pt: {
      name: 'Portuguese',
      nativeName: 'Português'
    },
    qu: {
      name: 'Quechua',
      nativeName: 'Runa Simi, Kichwa'
    },
    rm: {
      name: 'Romansh',
      nativeName: 'rumantsch grischun'
    },
    rn: {
      name: 'Kirundi',
      nativeName: 'kiRundi'
    },
    ro: {
      name: 'Romanian, Moldavian, Moldovan',
      nativeName: 'română'
    },
    ru: {
      name: 'Russian',
      nativeName: 'русский язык'
    },
    sa: {
      name: 'Sanskrit (Saṁskṛta)',
      nativeName: 'संस्कृतम्'
    },
    sc: {
      name: 'Sardinian',
      nativeName: 'sardu'
    },
    sd: {
      name: 'Sindhi',
      nativeName: 'सिन्धी, سنڌي، سندھی‎'
    },
    se: {
      name: 'Northern Sami',
      nativeName: 'Davvisámegiella'
    },
    sm: {
      name: 'Samoan',
      nativeName: 'gagana faa Samoa'
    },
    sg: {
      name: 'Sango',
      nativeName: 'yângâ tî sängö'
    },
    sr: {
      name: 'Serbian',
      nativeName: 'српски језик'
    },
    gd: {
      name: 'Scottish Gaelic; Gaelic',
      nativeName: 'Gàidhlig'
    },
    sn: {
      name: 'Shona',
      nativeName: 'chiShona'
    },
    si: {
      name: 'Sinhala, Sinhalese',
      nativeName: 'සිංහල'
    },
    sk: {
      name: 'Slovak',
      nativeName: 'slovenčina'
    },
    sl: {
      name: 'Slovene',
      nativeName: 'slovenščina'
    },
    so: {
      name: 'Somali',
      nativeName: 'Soomaaliga, af Soomaali'
    },
    st: {
      name: 'Southern Sotho',
      nativeName: 'Sesotho'
    },
    es: {
      name: 'Spanish; Castilian',
      nativeName: 'español, castellano'
    },
    su: {
      name: 'Sundanese',
      nativeName: 'Basa Sunda'
    },
    sw: {
      name: 'Swahili',
      nativeName: 'Kiswahili'
    },
    ss: {
      name: 'Swati',
      nativeName: 'SiSwati'
    },
    sv: {
      name: 'Swedish',
      nativeName: 'svenska'
    },
    ta: {
      name: 'Tamil',
      nativeName: 'தமிழ்'
    },
    te: {
      name: 'Telugu',
      nativeName: 'తెలుగు'
    },
    tg: {
      name: 'Tajik',
      nativeName: 'тоҷикӣ, toğikī, تاجیکی‎'
    },
    th: {
      name: 'Thai',
      nativeName: 'ไทย'
    },
    ti: {
      name: 'Tigrinya',
      nativeName: 'ትግርኛ'
    },
    bo: {
      name: 'Tibetan Standard, Tibetan, Central',
      nativeName: 'བོད་ཡིག'
    },
    tk: {
      name: 'Turkmen',
      nativeName: 'Türkmen, Түркмен'
    },
    tl: {
      name: 'Tagalog',
      nativeName: 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔'
    },
    tn: {
      name: 'Tswana',
      nativeName: 'Setswana'
    },
    to: {
      name: 'Tonga (Tonga Islands)',
      nativeName: 'faka Tonga'
    },
    tr: {
      name: 'Turkish',
      nativeName: 'Türkçe'
    },
    ts: {
      name: 'Tsonga',
      nativeName: 'Xitsonga'
    },
    tt: {
      name: 'Tatar',
      nativeName: 'татарча, tatarça, تاتارچا‎'
    },
    tw: {
      name: 'Twi',
      nativeName: 'Twi'
    },
    ty: {
      name: 'Tahitian',
      nativeName: 'Reo Tahiti'
    },
    ug: {
      name: 'Uighur, Uyghur',
      nativeName: 'Uyƣurqə, ئۇيغۇرچە‎'
    },
    uk: {
      name: 'Ukrainian',
      nativeName: 'українська'
    },
    ur: {
      name: 'Urdu',
      nativeName: 'اردو'
    },
    uz: {
      name: 'Uzbek',
      nativeName: 'zbek, Ўзбек, أۇزبېك‎'
    },
    ve: {
      name: 'Venda',
      nativeName: 'Tshivenḓa'
    },
    vi: {
      name: 'Vietnamese',
      nativeName: 'Tiếng Việt'
    },
    vo: {
      name: 'Volapük',
      nativeName: 'Volapük'
    },
    wa: {
      name: 'Walloon',
      nativeName: 'Walon'
    },
    cy: {
      name: 'Welsh',
      nativeName: 'Cymraeg'
    },
    wo: {
      name: 'Wolof',
      nativeName: 'Wollof'
    },
    fy: {
      name: 'Western Frisian',
      nativeName: 'Frysk'
    },
    xh: {
      name: 'Xhosa',
      nativeName: 'isiXhosa'
    },
    yi: {
      name: 'Yiddish',
      nativeName: 'ייִדיש'
    },
    yo: {
      name: 'Yoruba',
      nativeName: 'Yorùbá'
    },
    za: {
      name: 'Zhuang, Chuang',
      nativeName: 'Saɯ cueŋƅ, Saw cuengh'
    }
  };
  /**
   * get Language Name
   *
   * @param {string} value Language code
   * @return {string} Language Name
   */

  function getLanguageName(value) {
    var key;

    if (value.length === 3) {
      key = window_1.iso639Converter.from3to1(value);
    } else {
      key = value.slice(0, 2);
    }

    var lang = isoLangs[key]; // Return value if no hit

    return lang ? lang.name : value;
  }

  /**
  * EmpPlayerErrorCodes - Holds all available error codes
  */

  var EmpPlayerErrorCodes = {
    UNKNOWN: 100,
    LOAD_ASSET: 101,
    ENTITLEMENT: 102,
    ENTITLEMENT2: 103,
    SHAKA_TECH: 200,
    HLS_TECH: 300,
    CHROMECAST_TECH: 500,
    HLS_MSE_TECH: 10000,
    DASHIF_TECH: 20000,
    SMOOTH_TECH: 30000
  };
  /**
   * The class for EmpPlayerError
   *
   * @class EmpPlayerError
   * @extends Error
  */

  var EmpPlayerError = /*#__PURE__*/function (_Error) {
    _inheritsLoose(EmpPlayerError, _Error);

    /**
     * Create EmpPlayerError
     *
     * @param {any} value
     * @param {number=} code
     * @param {Object=} status
     */
    function EmpPlayerError(value, code, status) {
      var _this;

      if (code === void 0) {
        code = EmpPlayerErrorCodes.UNKNOWN;
      }

      if (status === void 0) {
        status = null;
      }

      _this = _Error.call(this) || this;
      _this.code = code;

      if (isString(value)) {
        _this.message = value;
      } else if (value.message) {
        _this.message = value.message;
      }

      _this.status = status;

      if (Error.captureStackTrace) {
        Error.captureStackTrace(_assertThisInitialized(_this), EmpPlayerError);
      }

      return _this;
    }
    /**
     * Get EmpPlayerErrorCodes
     *
     * @return {number} EmpPlayerErrorCodes
     */


    _createClass(EmpPlayerError, [{
      key: "codes",
      get: function get() {
        return EmpPlayerErrorCodes;
      }
    }]);

    return EmpPlayerError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var Plugin = videojs.getPlugin('plugin');
  var Tech = videojs.getComponent('Tech');
  /**
   * Download Service Plugin
   *  This manages persistent offline data including storage, listing, and deleting stored manifests.
   *  Playback of offline manifests are done through the Player using a special URI (see shaka.offline.OfflineUri).
   *  First, check isSupported to see if offline is supported by the platform.
   *  Second, listen to EmpPlayerEvents.DOWNLOAD_PROGRESS on the download plugin
   *  Third, call startDownload(), remove(), or list() as needed.
   *  Start playback with load().
   *
   * @param {Player} player The `Player` that this class should be attached to.
   * @param {Object=} options The key/value store of player options.
   * @extends videojs.Plugin
   * @class DownloadService
   */

  var DownloadService = /*#__PURE__*/function (_Plugin) {
    _inheritsLoose(DownloadService, _Plugin);

    /**
     * Create the DownloadService
     *
     * @param {Player} player The `Player` that this class should be attached to.
     * @param {Object=} options The key/value store of player options.
     */
    function DownloadService(player, options) {
      var _this;

      _this = _Plugin.call(this, player, options) || this;
      log('DownloadService', 'create');
      _this.options_ = options ? options : {};
      _this.offlineOperationInProgress_ = false;
      return _this;
    }
    /**
     * if offline is supported by the platform
     *
     * @return {boolean} isSupported
     */


    var _proto = DownloadService.prototype;

    /**
     * Delete all
     *
     * @return {Promise} deleteAll
     */
    _proto.deleteAll = function deleteAll() {
      return shaka.offline.Storage.deleteAll(this.player.tech_.shakaPlayer_);
    }
    /**
     * start download of asset or program
     *
     * @param {any} assetId   Identifier of the asset to load
     * @param {any} channelId Identifier of the channel to load
     * @param {any} programId Identifier of the program to load
     * @param {?Object} metadata (optional) An arbitrary object from the application that will be stored along-side the offline content. Use this for any application-specific metadata you need associated with the stored content. For details on the data types that can be stored here, please refer to https://goo.gl/h62coS
     * @param {?boolean} usePersistentLicense (optional) use PersistentLicense default=true
     * @return {Promise} startDownload
     */
    ;

    _proto.startDownload = function startDownload(assetId, channelId, programId, metadata, usePersistentLicense) {
      var _this2 = this;

      var errorMsg;
      var exposure;

      if (this.offlineOperationInProgress_) {
        errorMsg = 'Offline Operation In Progress';
        log.error(errorMsg);
        return Promise.reject(errorMsg);
      }

      if (!assetId && !channelId && !programId) {
        errorMsg = 'assetId or channelId or programId is undefined';
        log.error(errorMsg);
        return Promise.reject(errorMsg);
      }

      this.offlineOperationInProgress_ = true;
      var entitlementRequest = {
        assetId: assetId ? assetId : null,
        programId: programId ? programId : null,
        channelId: channelId ? channelId : null
      };

      if (this.player.programService) {
        exposure = this.player.programService().exposure;
      } else {
        errorMsg = 'No programService';
        log.error(errorMsg);
        return Promise.reject(errorMsg);
      }

      var entitlementPlayRequest = Tech.getTech('EmpShaka').entitlementPlayRequest;
      return new Promise(function (resolve, reject) {
        exposure.getEntitlement(entitlementRequest, entitlementPlayRequest, function (entitlement, error) {
          // If we have an fatal error during playcall break out of the loop else try next tech
          if (error) {
            if (error.fatal) {
              _this2.offlineOperationInProgress_ = false;
              var empPlayerError = new EmpPlayerError(error, EmpPlayerErrorCodes.ENTITLEMENT);

              if (_this2.player.analytics) {
                _this2.player.analytics().onError({
                  code: empPlayerError.code,
                  message: empPlayerError.message,
                  stack: empPlayerError.stack
                });
              }

              reject(empPlayerError);
            }
          } else {
            if (!metadata) {
              metadata = {};
            }

            if (!metadata.name) {
              metadata.name = entitlement.assetId ? entitlement.assetId : entitlement.channelId;
            }

            metadata.assetId = assetId;
            metadata.programId = programId;
            metadata.channelId = channelId;

            _this2.player.programService().getAssetMetadata(metadata.assetId, function (assetMetadata) {
              if (assetMetadata) {
                metadata.title = assetMetadata.title;
                metadata.subtitle = assetMetadata.subtitle;
                metadata.images = assetMetadata.images;
              }

              _this2.startDownloadEntitlement_(entitlement, metadata, usePersistentLicense, resolve, reject);
            });
          }
        });
      });
    }
    /**
     * startDownloadEntitlement
     *
     * @param {Entitlement} entitlement
     * @param {Object} metadata
     * @param {boolean} usePersistentLicense
     * @param {Object} resolve
     * @param {Object} reject
     * @private
     */
    ;

    _proto.startDownloadEntitlement_ = function startDownloadEntitlement_(entitlement, metadata, usePersistentLicense, resolve, reject) {
      var _this3 = this;

      this.startDownloadSource(entitlement, metadata, usePersistentLicense).then(function (content) {
        _this3.offlineOperationInProgress_ = false;
        resolve(content);
      })["catch"](function (error) {
        if (this.cancelInProgress_) {
          resolve(null);
        } else {
          this.offlineOperationInProgress_ = false;

          if (this.player.analytics) {
            this.player.analytics().onError({
              code: error.code,
              message: error.message,
              stack: error.stack
            });
          }

          log.error(error.message);
          reject(error);
        }
      });
    }
    /**
     * start download of a source
     *
     * @param {string|Object} source The Source element of a video element
     * @param {?Object} metadata (optional) An arbitrary object from the application that will be stored along-side the offline content. Use this for any application-specific metadata you need associated with the stored content. For details on the data types that can be stored here, please refer to https://goo.gl/h62coS
     * @param {?boolean} usePersistentLicense (optional) use PersistentLicense default=true
     * @return {Promise} StartDownloadSource Promise
     */
    ;

    _proto.startDownloadSource = function startDownloadSource(source, metadata, usePersistentLicense) {
      var errorMsg;
      this.cancelInProgress_ = false;

      if (typeof source === 'undefined') {
        errorMsg = 'source is undefined';
        log.error(errorMsg);
        return Promise.reject(errorMsg);
      } // filter out invalid sources and turn our source into
      // an array of source objects


      var sources = filterSource(source);

      if (!sources.length) {
        errorMsg = 'source is undefined';
        log.error(errorMsg);
        return Promise.reject(errorMsg);
      }

      this.destroy();

      if (!this.storage_) {
        this.initStorage_();
      }

      this.offlineOperationInProgress_ = true;
      var config = {};

      if (window_1.navigator.userAgent.indexOf('Android') === -1) {
        config.drm = {
          advanced: {
            'com.widevine.alpha': {
              videoRobustness: 'SW_SECURE_DECODE',
              audioRobustness: 'SW_SECURE_CRYPTO'
            }
          }
        };
      } else {
        // Android
        config.drm = {
          advanced: {
            'com.widevine.alpha': {
              videoRobustness: 'SW_SECURE_CRYPTO',
              audioRobustness: 'SW_SECURE_CRYPTO'
            }
          }
        };
      }

      var licenseServer = source.licenseServer || source.licenseserver;
      var keySystems = source.keySystems || source.keysystems;

      if (licenseServer) {
        config.drm.servers = {
          'com.widevine.alpha': licenseServer,
          'com.microsoft.playready': licenseServer,
          'com.adobe.primetime': licenseServer
        };
      } else if (keySystems) {
        config.drm.servers = keySystems;
      }

      config.offline = {
        progressCallback: this.setDownloadProgress_.bind(this),
        // 'trackSelectionCallback': this.selectTracks_.bind(this),
        usePersistentLicense: usePersistentLicense
      };
      this.player.tech_.shakaPlayer_.configure(config);

      if (metadata) {
        metadata.downloaded = new Date();
      }

      return this.storage_.store(sources[0].src, metadata);
    }
    /**
     * selectTracks
     *
     * @param {Object[]} tracks
     * @return {Object[]} selectTracks
     * @private
     */
    ;

    _proto.selectTracks_ = function selectTracks_(tracks) {
      // Store the highest bandwidth variant. Later we will support user selected bandwidth
      var found = tracks.filter(function (track) {
        return track.type === 'variant';
      }).sort(function (a, b) {
        return a.bandwidth > b.bandwidth;
      }).pop();
      log('Offline Track: ' + found);
      return [found];
    }
    /**
     * initStorage
     *
     * @private
     */
    ;

    _proto.initStorage_ = function initStorage_() {
      if (this.storage_) {
        this.storage_.destroy();
        this.storage_ = null;
      }

      if (this.player.techName_ !== 'EmpShaka' || !this.player.tech_) {
        this.player.loadTech_('EmpShaka');
      }

      if (!this.player.tech_.shakaPlayer_) {
        this.player.tech_.createPlayer_(true);
      }

      this.storage_ = new shaka.offline.Storage(this.player.tech_.shakaPlayer_);
    }
    /**
     * setDownloadProgress
     *
     * @param {?Object} content
     * @param {number} progress
     *
     * @private
     */
    ;

    _proto.setDownloadProgress_ = function setDownloadProgress_(content, progress) {
      this.trigger(empPlayerEvents.DOWNLOAD_PROGRESS, {
        content: content,
        progress: progress
      });
    }
    /**
     * List all downloaded assests
     *
     * @return {Promise} list
     */
    ;

    _proto.list = function list() {
      if (!this.storage_) {
        this.initStorage_();
      }

      return this.storage_.list();
    }
    /**
     * Remove downloaded assest
     *
     * @param {string} offlineUri
     * @return {Promise} Remove Promise
     */
    ;

    _proto.remove = function remove(offlineUri) {
      if (!this.storage_) {
        this.initStorage_();
      }

      return this.storage_.remove(offlineUri);
    }
    /**
     * Play downloaded assest
     *
     * @param {string} offlineUri
     * @param {Object=} options Player Options
     */
    ;

    _proto.load = function load(offlineUri, options) {
      if (options === void 0) {
        options = {
          autoplay: true
        };
      }

      if (!offlineUri) {
        log.error('offlineUri is undefined');
        return;
      }

      if (options) {
        this.player.options(options);

        if (options.autoplay) {
          this.player.autoplay(options.autoplay);
        }
      }

      this.player.src({
        type: 'application/dash+xml',
        src: offlineUri
      });
    }
    /**
     * cancel
     */
    ;

    _proto.cancel = function cancel() {
      if (this.offlineOperationInProgress_) {
        this.cancelInProgress_ = true;
        this.destroy();
      }
    }
    /**
     * destroy current download
     */
    ;

    _proto.destroy = function destroy() {
      if (this.storage_) {
        this.storage_.destroy();
        this.storage_ = null;
      }

      this.offlineOperationInProgress_ = false;
    }
    /**
     * dispose DownloadService
     */
    ;

    _proto.dispose = function dispose() {
      log('DownloadService is being disposed');

      if (this.storage_) {
        this.storage_.destroy();
        this.storage_ = null;
      }

      this.offlineOperationInProgress_ = false;

      _Plugin.prototype.dispose.call(this);
    };

    _createClass(DownloadService, [{
      key: "isSupported",
      get: function get() {
        if (shaka.offline.Storage) {
          return shaka.offline.Storage.support();
        }

        return false;
      }
      /**
       * offlineOperationInProgress
       *
       * @return {boolean} offlineOperationInProgress
       */

    }, {
      key: "offlineOperationInProgress",
      get: function get() {
        return this.offlineOperationInProgress_;
      }
    }]);

    return DownloadService;
  }(Plugin);

  DownloadService.VERSION = '2.2.132-548';

  if (videojs.getPlugin('DownloadService')) {
    videojs.log.warn('A plugin named "DownloadService" already exists.');
  } else {
    videojs.registerPlugin('download', DownloadService);
  }

  var Html5 = videojs.getTech('Html5');
  var Tech$1 = videojs.getComponent('Tech');
  var TechName = 'EmpShaka';
  /* global
    ShakaPlayerDnaWrapper
  */

  /**
   * HTML5 Dash Media Controller - Wrapper for HTML5 Media API using MPEG-Dash playback
   *
   * @param {Object=} options The key/value store of tech options.
   * @param {Function=} ready Ready callback function
   * @extends videojs.Html5
   * @class EmpShaka
   */

  var EmpShaka = /*#__PURE__*/function (_Html) {
    _inheritsLoose(EmpShaka, _Html);

    /**
     * Create a EmpShaka tech object
     *
     * @param {Object=} options The key/value store of tech options.
     * @param {Function} [ready] - Ready callback function
     */
    function EmpShaka(options, ready) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      if (ready === void 0) {
        ready = function ready() {};
      }

      // Block call to handleSource before constructor
      options.constructing_ = true;
      _this = _Html.call(this, options, ready) || this; // es6-mixins adds the method to the prototype
      // meaning the second time this object is created the methods are already on the prototype
      // therefore do not merge duplicates

      if (!_this.base) {
        es6Mixins(EmpTech, _assertThisInitialized(_this), {
          mergeDuplicates: false
        });
      }

      _this.isDispose_ = false;
      _this.loading_ = false;
      _this.certificate_ = null; // Shaka polyfills, fullscreen has been excluded because VideoJS handles this api

      shaka.polyfill.installAll();
      _this.textTrackChangeBind = _this.baseTextTrackChange.bind(_assertThisInitialized(_this));

      _this.textTracks().on('selectedlanguagechange', _this.textTrackChangeBind);

      _this.audioTrackChangeBind = _this.baseAudioTrackChange.bind(_assertThisInitialized(_this));

      _this.audioTracks().on(empPlayerEvents.CHANGE, _this.audioTrackChangeBind);

      _this.onEndedBind = _this.onEnded.bind(_assertThisInitialized(_this));

      _this.el_.addEventListener(empPlayerEvents.ENDED, _this.onEndedBind);

      _this.preActiveVariantTrack = null;
      _this.preActiveTextTrack = null;
      _this.onLoadStartBind = _this.onLoadStart.bind(_assertThisInitialized(_this));

      _this.on(_assertThisInitialized(_this), empPlayerEvents.LOAD_START, _this.onLoadStartBind); // Workaround for Firefox bug
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1491365


      if (IS_FIREFOX) {
        window_1.VTTRegion = null;
      }

      _this.options_.constructing_ = options.constructing_ = undefined;

      if (_this.options_.source && _this.options_.source.src) {
        _this.setSource(_this.options_.source);
      }

      return _this;
    }
    /**
     * Get StreamType (DASH OR HLS)
     *
     * @return {string} StreamType
     */


    var _proto = EmpShaka.prototype;

    /**
     * onLoadStart
     *
     * @param {EventTarget~Event} event
     * @private
     */
    _proto.onLoadStart = function onLoadStart(event) {
      this.hasMetadata_ = true;
      log('onLoadStart');

      if (this.stopped_) {
        event.stopImmediatePropagation();
        this.trigger(empPlayerEvents.ENDED);
      }
    }
    /**
     * Disables timeshifting for livestreams
     *
     * Setting this to true, hides the player progress controlbar
     *
     * @param {boolean} disable
     */
    ;

    _proto.disableTimeShift = function disableTimeShift(disable) {
      if (!this.options_) {
        this.options_ = {
          timeShiftDisabled: disable
        };
      } else {
        this.options_.timeShiftDisabled = disable;
      }

      this.trigger(empPlayerEvents.DURATION_CHANGE);
    }
    /**
     * Handle source
     *
     * Source handler for dash playback.
     *
     * @param {Object} source Source object for playback
     * @param {EmpShaka} tech The instance of the EmpShaka tech
     * @method handleSource
     */
    ;

    _proto.handleSource = function handleSource(source, tech) {
      var _this2 = this;

      if (tech.options_.constructing_ || !this.baseHandleSource(source, tech)) {
        return;
      }

      this.preActiveVariantTrack = null;
      this.preActiveTextTrack = null; // Shaka is loading

      if (this.loading_ || !source.src) {
        log.warn('handleSource shaka is loading');

        if (this.shakaPlayer_) {
          this.shakaPlayer_.destroy();
          this.shakaPlayer_ = null;
          this.streamrootWrapper_ = null;
        }
      }

      if (!this.shakaPlayer_) {
        // We can re-use the old player. calling the 'load' method automatically calls 'unload' if a previous manifest has
        // been loaded
        this.createPlayer_(this.options_.autoplay);
      } else if (!this.el_.paused) {
        // Needed for not get Promise rejected error
        // If playing, pause first before load new asset
        this.el_.pause();
      }

      this.shakaPlayer_.resetConfiguration(); // Default language is defined (in descending order)
      // 1. language set in player options
      // 2. document language (lang attribute on html tag)
      // 3. Browser preferred language
      // 4. 'None'

      var audioLanguage = this.options_.audioLanguage || this.options_.language;
      var textLanguage = this.options_.subtitleLanguage || this.options_.language;
      textLanguage = textLanguage !== 'None' ? textLanguage : '';
      log('preferredAudioLanguage', audioLanguage);
      log('preferredTextLanguage', textLanguage);
      var config = {
        streaming: {},
        abr: {},
        restrictions: {},
        preferredAudioLanguage: audioLanguage,
        preferredTextLanguage: textLanguage
      };
      config.abr.enabled = true;
      config.abr.minBytes = 16e3; // minBandwidth/maxBandwidth bit/sec, from entitlement we get kbit/sec. Not Byte/sec.
      // It's Video+Audio bitrate

      if (source.minBitrate) {
        config.restrictions.minBandwidth = source.minBitrate * 1000;
      }

      if (source.maxBitrate) {
        config.restrictions.maxBandwidth = source.maxBitrate * 1000;
      }

      if (source.maxResWidth) {
        config.restrictions.maxWidth = source.maxResWidth;
      }

      if (source.maxResHeight) {
        config.restrictions.maxHeight = source.maxResHeight;
      } // override with custom value


      if (this.options_.maxBitrate) {
        config.restrictions.maxBandwidth = this.options_.maxBitrate * 1000;
      }

      config.manifest = {
        dash: {}
      };

      if (this.options_.clockSyncUri) {
        config.manifest.dash.clockSyncUri = this.options_.clockSyncUri;
      }

      if (this.options_.liveDelay !== undefined || source.liveDelay !== undefined) {
        config.manifest.dash.defaultPresentationDelay = this.options_.liveDelay !== undefined ? this.options_.liveDelay : source.liveDelay;
        config.manifest.dash.ignoreMinBufferTime = true;
      }

      if (this.options_.ignoreSuggestedPresentationDelay) {
        config.manifest.dash.ignoreSuggestedPresentationDelay = this.options_.ignoreSuggestedPresentationDelay;
      }

      if (this.options_.abr) {
        if (this.options_.abr.defaultBandwidthEstimate) {
          config.abr.defaultBandwidthEstimate = this.options_.abr.defaultBandwidthEstimate;
        }

        if (this.options_.abr.bandwidth_upgrade_target) {
          config.abr.bandwidthUpgradeTarget = this.options_.abr.bandwidth_upgrade_target;
        }

        if (this.options_.abr.bandwidth_downgrade_target) {
          config.abr.bandwidthDowngradeTarget = this.options_.abr.bandwidth_downgrade_target;
        }

        if (this.options_.abr.switch_interval_ms) {
          config.abr.switchInterval = this.options_.abr.switch_interval_ms / 1000;
        }

        if (this.options_.abr.minBytes) {
          config.abr.minBytes = this.options_.abr.minBytes;
        }

        if (this.options_.abr.minTotalBytes) {
          config.abr.minTotalBytes = this.options_.abr.minTotalBytes;
        }
      }

      var retryParameters = assign({
        maxAttempts: 6,
        baseDelay: 1000,
        backoffFactor: 2,
        fuzzFactor: 0.5,
        timeout: 2000
      }, this.options_.retryParameters ? this.options_.retryParameters : {});
      config.streaming = {
        retryParameters: retryParameters,
        failureCallback: this.streamingFailureCallback.bind(this),
        ignoreTextStreamFailures: true,
        jumpLargeGaps: true,
        alwaysStreamText: true // startAtSegmentBoundary: true

      };

      if (IS_ANDROID || IS_SMARTTV) {
        config.drm = {
          advanced: {
            'com.widevine.alpha': {
              videoRobustness: 'SW_SECURE_CRYPTO',
              audioRobustness: 'SW_SECURE_CRYPTO'
            }
          }
        };
      } else {
        config.drm = {
          advanced: {
            'com.widevine.alpha': {
              videoRobustness: 'SW_SECURE_DECODE',
              audioRobustness: 'SW_SECURE_CRYPTO'
            }
          }
        };
      }

      var licenseServer = source.licenseServer || source.licenseserver;
      var keySystems = source.keySystems || source.keysystems;

      if (licenseServer) {
        config.drm.servers = {
          'com.widevine.alpha': licenseServer,
          'com.microsoft.playready': licenseServer,
          'com.adobe.primetime': licenseServer
        };
      } else if (keySystems) {
        config.drm.servers = keySystems;
      } // Remove playready from smartTV, Chromecast and Chromium Edge, we only use widevine


      if ((IS_SMARTTV || IS_CHROMECAST) && config.drm.servers && config.drm.servers['com.microsoft.playready'] && config.drm.servers['com.widevine.alpha']) {
        delete config.drm.servers['com.microsoft.playready']; // config.drm.servers['com.microsoft.playready'] = undefined;
      }

      if (this.certificate_ && config.drm.advanced && config.drm.advanced['com.widevine.alpha']) {
        config.drm.advanced['com.widevine.alpha'].serverCertificate = this.certificate_;
      }

      this.shakaPlayer_.configure(config);
      this.shakaPlayer_.setTextTrackVisibility(textLanguage !== ''); // Configure network filters

      var networkingEngine = this.shakaPlayer_.getNetworkingEngine(); // Filter requests and set auth header

      if (this.playToken) {
        var header = {
          Authorization: 'Bearer ' + this.playToken
        };

        if (this.requestFilter) {
          networkingEngine.unregisterRequestFilter(this.requestFilter);
        }

        this.requestFilter = this.addLicenseRequestHeaders.bind(null, header);
        networkingEngine.registerRequestFilter(this.requestFilter);
      }

      var startTime; // In order to start from the beginning of live stream send 0.1s as startTime

      if (this.options_.startTime > 0) {
        startTime = this.options_.startTime;
      }

      log('before load stream', source.src); // Block load call if loading

      this.loading_ = true;

      if (window_1.ShakaPlayerDnaWrapper && this.options_.streamrootkey && !this.streamrootWrapper_) {
        this.createStreamrootWrapper_(this.options_.streamrootkey);
      }

      if (this.options_.autoplay) {
        this.el_.autoplay = true;
      } else {
        this.el_.autoplay = false;
      }

      this.shakaPlayer_.load(source.src, startTime).then(function () {
        log('after load stream', _this2.options_.startTime); // fix bug with wrong endtime for event programs
        // Don't use lastViewedOffset and liveTime 30 sec from end

        if (_this2.options_.startTime > 0 && !_this2.shakaPlayer_.isLive() && _Html.prototype.duration.call(_this2) > 0 && _Html.prototype.duration.call(_this2) < Infinity && _this2.options_.startTime + 30 > _Html.prototype.duration.call(_this2)) {
          _Html.prototype.setCurrentTime.call(_this2, 0.1);
        }

        _this2.loading_ = false;
        _this2.hasMetadata_ = true;

        _this2.trackDuration(); // this.trigger(EmpPlayerEvents.LOAD_START);

      })["catch"](function (error) {
        _this2.loading_ = false;

        if (error.code === shaka.util.Error.Code.LOAD_INTERRUPTED) {
          log('Shaka load() interrupted');
        } else {
          _this2.checkForRecoverableErrors(error);
        }
      });
    }
    /**
     * createStreamrootWrapper
     *
     * @param {string} streamrootkey
     * @return {Object} streamrootWrapper
     * @private
     */
    ;

    _proto.createStreamrootWrapper_ = function createStreamrootWrapper_(streamrootkey) {
      var dnaConfig = {};
      var wrapperConfig = {
        shakaNamespace: shaka
      };
      this.streamrootWrapper_ = new ShakaPlayerDnaWrapper(this.shakaPlayer_, streamrootkey, dnaConfig, wrapperConfig);
      return this.streamrootWrapper_;
    }
    /**
     * streamingFailureCallback
     *
     * @param {Error} error
     * @private
     */
    ;

    _proto.streamingFailureCallback = function streamingFailureCallback(error) {
      // The default streamingFailureCallback will infiniteRetriesForLiveStreams
      // Error will be fire later
      log(TechName, 'Streaming Failure', error);
    }
    /**
     * Get techVersion
     *
     * @return {string} techVersion
     */
    ;

    _proto.techVersion = function techVersion() {
      if (shaka && shaka.Player) {
        return shaka.Player.version || 'N/A';
      }

      return 'N/A';
    }
    /**
     * Creates an instance of Shaka.Player for use and sets the relevant listeners
     *
     * @param {boolean} autoplay
     * @return {Object} shaka.Player
     * @private
     */
    ;

    _proto.createPlayer_ = function createPlayer_(autoplay) {
      var _this3 = this;

      log('createPlayer Shaka');

      if (autoplay) {
        this.el_.autoplay = true;
      }

      this.shakaPlayer_ = new shaka.Player(this.el_);
      this.shakaPlayer_.addEventListener('texttrackvisibility', function (event) {
        log('texttrackvisibility', _this3.hasMetadata_, _this3.shakaPlayer_.isTextTrackVisible());

        if (_this3.hasMetadata_ && !_this3.blockLocalTrackChange) {
          _this3.syncVideojsTexttrackVisibility();
        }
      }); // For custom shaka build

      this.shakaPlayer_.addEventListener('drmsessionbeforeupdate', function (event) {
        _this3.drmsessionbeforeupdate_(event);
      });
      this.shakaPlayer_.addEventListener('drmsessionupdate', function (event) {
        log('drmsessionupdate', event); // We use standard Shaka

        _this3.drmsessionbeforeupdate_(event);

        if (_this3.shakaPlayer_.drmInfo()) {
          var message;

          if (_this3.shakaPlayer_.drmInfo().keySystem === 'com.microsoft.playready') {
            message = {
              messageType: 'PLAYREADY_LICENSE_RESPONSE',
              code: undefined,
              info: 'drmsessionupdate'
            };
          } else if (_this3.shakaPlayer_.drmInfo().keySystem === 'com.widevine.alpha') {
            if (event.isCertificateRequest) {
              message = {
                messageType: 'WIDEVINE_CERTIFICATE_RESPONSE',
                code: undefined,
                info: 'drmsessionupdate'
              };
            } else {
              message = {
                messageType: 'WIDEVINE_LICENSE_RESPONSE',
                code: undefined,
                info: 'drmsessionupdate'
              };
            }
          } else {
            message = {
              messageType: 'FAIRPLAY_LICENSE_RESPONSE',
              code: undefined,
              info: 'drmsessionupdate'
            };
          }

          _this3.trigger({
            type: empPlayerEvents.DRM_SESSION_UPDATE,
            bubbles: true
          }, message);
        }
      });
      this.shakaPlayer_.addEventListener('adaptation', function (event) {
        log('Shaka adaptationchanged');

        if (!_this3.hasMetadata_) {
          return;
        } // For debug
        // var state = this.shakaPlayer_.getStats();
        // log('Shaka state', state.estimatedBandwidth, state.streamBandwidth, state.switchHistory.length, state.switchHistory);
        // if(state.switchHistory.length > 1) {
        //  log('switchHistory1', state.switchHistory[state.switchHistory.length -2].id, state.switchHistory[state.switchHistory.length -2].type, state.switchHistory[state.switchHistory.length -2].bandwidth);
        //  log('switchHistory2', state.switchHistory[state.switchHistory.length -1].id, state.switchHistory[state.switchHistory.length -1].type, state.switchHistory[state.switchHistory.length -1].bandwidth);
        // }


        var activeVariantTrack = _this3.getActiveVariantTrack();

        var activeTextTrack = _this3.getActiveTextTrack();

        if (!activeVariantTrack) {
          return;
        }

        if (_this3.preActiveVariantTrack === null || activeVariantTrack.language !== _this3.preActiveVariantTrack.language) {
          _this3.blockLocalTrackChange = true;

          _this3.configureVideojsAudioTracks();
        }

        if (_this3.preActiveTextTrack === null || activeTextTrack && activeTextTrack.language !== _this3.preActiveTextTrack.language) {
          // Shaka bug fix
          if (_this3.preActiveTextTrack === null && _this3.shakaPlayer_.getConfiguration().preferredTextLanguage === '' && _this3.shakaPlayer_.isTextTrackVisible()) {
            _this3.shakaPlayer_.setTextTrackVisibility(false);
          }

          if (_this3.filterUniqueTexttracks_(_this3.shakaPlayer_.getTextTracks()).length || _this3.textTracks().length) {
            _this3.blockLocalTrackChange = true;

            _this3.configureVideojsTextTracks();
          }
        }

        if (!_this3.preActiveVariantTrack || activeVariantTrack && activeVariantTrack.videoBandwidth !== _this3.preActiveVariantTrack.videoBandwidth) {
          log('BITRATE_CHANGED', activeVariantTrack.videoBandwidth);
          var auto = false;

          var config = _this3.shakaPlayer_.getConfiguration();

          if (config.abr.enabled) {
            auto = true;
          }

          _this3.trigger({
            type: empPlayerEvents.BITRATE_CHANGED,
            bubbles: true
          }, {
            bitrate: activeVariantTrack.videoBandwidth,
            auto: auto
          });
        }

        _this3.stopBlockLocalTrackChange('adaptationchanged');

        _this3.preActiveVariantTrack = activeVariantTrack;
        _this3.preActiveTextTrack = activeTextTrack;
      }); // With multi periods we maybe have to update tracks and send TRACK_CHANGE from here.

      this.shakaPlayer_.addEventListener('trackschanged', function (event) {
        log('Shaka trackschanged', event);
      });
      this.shakaPlayer_.addEventListener('error', function (event) {
        _this3.checkForRecoverableErrors(event.detail);
      });
      this.shakaPlayer_.addEventListener('buffering', function (event) {
        // Shaka player send buffering after ended and stop
        if (!_this3.stopped_ && !_this3.ended_) {
          log('buffering', event, event ? event.buffering : null);

          if (event.buffering) {
            _this3.trigger(empPlayerEvents.WAITING);
          } else if (_this3.el_ && _this3.el_.paused) {
            // Needed for not get Promise rejected error
            if (_this3.paused()) {
              _this3.trigger({
                type: empPlayerEvents.PAUSE,
                bubbles: true
              });
            } else {
              _this3.trigger({
                type: empPlayerEvents.PLAYING,
                bubbles: true
              });
            }
          }
        }
      });
      return this.shakaPlayer_;
    }
    /**
     * drmsessionbeforeupdate
     *
     * @param {EventTarget~Event} event
     * @private
     */
    ;

    _proto.drmsessionbeforeupdate_ = function drmsessionbeforeupdate_(event) {
      log('drmsessionbeforeupdate', event);

      if (this.shakaPlayer_.drmInfo()) {
        var message;

        if (this.shakaPlayer_.drmInfo().keySystem === 'com.microsoft.playready') {
          message = {
            messageType: 'PLAYREADY_LICENSE_REQUEST',
            code: undefined,
            info: this.shakaPlayer_.drmInfo().licenseServerUri
          };
        } else if (this.shakaPlayer_.drmInfo().keySystem === 'com.widevine.alpha') {
          if (event.isCertificateRequest) {
            message = {
              messageType: 'WIDEVINE_CERTIFICATE_REQUEST',
              code: undefined,
              info: this.shakaPlayer_.drmInfo().licenseServerUri
            };
          } else {
            message = {
              messageType: 'WIDEVINE_LICENSE_REQUEST',
              code: undefined,
              info: this.shakaPlayer_.drmInfo().licenseServerUri
            };
          }
        } else {
          message = {
            messageType: 'FAIRPLAY_LICENSE_REQUES',
            code: undefined,
            info: this.shakaPlayer_.drmInfo().licenseServerUri
          };
        }

        this.trigger({
          type: empPlayerEvents.DRM_SESSION_UPDATE,
          bubbles: true
        }, message);
      }
    }
    /**
     * addErrorMessage
     *
     * @param {Error} error
     * @private
     */
    ;

    _proto.addErrorMessage = function addErrorMessage(error) {
      if (error.message) {
        return;
      }

      var categoryName = 'UNKNOWN';
      var codeName = 'UNKNOWN';

      for (var k in shaka.util.Error.Category) {
        if (shaka.util.Error.Category[k] === error.category) {
          categoryName = k;
        }
      }

      for (var c in shaka.util.Error.Code) {
        if (shaka.util.Error.Code[c] === error.code) {
          codeName = c;
        }
      }

      error.message = categoryName + ' ' + codeName;
    }
    /**
    * Check for recoverable errors
    * allows the player to fallback to another tech
    *
    * @param {Object} error
    * @private
    */
    ;

    _proto.checkForRecoverableErrors = function checkForRecoverableErrors(error) {
      this.addErrorMessage(error);

      if (error && error.data && error.data.length > 0) {
        log.error(TechName, error.code, error.data, error.message);
      }

      switch (error.category) {
        // Errors from the network stack.
        case 1:
          if (error.code === 1002) {
            log.warn('An HTTP network request failed with an error, but not from the server.');
            return;
          } else if (error.code === 1003) {
            log.warn('A network request timed out.');
            return;
          }

        // Errors parsing or processing audio or video streams.
        // falls through

        case 3:
          // Ignore Reload error from previous mediasource
          if (error.code === 3015) {
            return;
          }

          this.triggerRecoverableError(error);
          break;
        // Errors parsing the Manifest.

        case 4:
          this.triggerRecoverableError(error);
          break;
        // Errors related to DRM.

        case 6:
          var messageType = 'WIDEVINE_LICENSE_ERROR';

          if (this.shakaPlayer_.drmInfo()) {
            var keySystem = this.shakaPlayer_.drmInfo().keySystem;

            if (keySystem === 'com.microsoft.playready') {
              messageType = 'PLAYREADY_LICENSE_ERROR';
            } else if (keySystem === 'com.widevine.alpha') {
              messageType = 'WIDEVINE_LICENSE_ERROR';
            } else {
              messageType = 'FAIRPLAY_LICENSE_ERROR';
            }
          }

          this.trigger({
            type: empPlayerEvents.DRM_SESSION_UPDATE,
            bubbles: true
          }, {
            messageType: messageType,
            code: error.code,
            info: error.message
          });
          this.triggerRecoverableError(error);
          break;

        default:
          this.triggerRecoverableError(error);
          break;
      }
    }
    /**
     * Stop playback
     *
     * @param {Function=}afterStopCallback
     */
    ;

    _proto.stop = function stop(afterStopCallback) {
      var _this4 = this;

      this.stopped_ = true;
      this.loading_ = false;
      this.stopTrackingDuration();

      if (this.shakaPlayer_) {
        this.hasMetadata_ = false;
        this.shakaPlayer_.unload().then(function () {
          _this4.clearTracks(['text']);

          _this4.clearTracks(['audio']);

          _this4.trigger({
            type: empPlayerEvents.PAUSE,
            bubbles: true
          });

          _this4.trigger({
            type: empPlayerEvents.ABORT,
            bubbles: true
          });

          _this4.trigger({
            type: empPlayerEvents.STOPPED,
            bubbles: true
          });

          if (afterStopCallback) {
            afterStopCallback();
          }
        });
      }
    }
    /**
     * onEnded
     *
     * @param {EventTarget~Event} event
     * @private
     */
    ;

    _proto.onEnded = function onEnded(event) {
      this.ended_ = true;
      this.stopTrackingDuration();

      if (this.shakaPlayer_) {
        this.reset();
      }
    }
    /**
     * Reset the tech by removing all sources and then calling
     * {@link Html5.resetMediaElement}.
     */
    ;

    _proto.reset = function reset() {
      this.loading_ = false;
      this.hasMetadata_ = false;
      this.clearTracks(['text']);
      this.clearTracks(['audio']);

      _Html.prototype.reset.call(this);
    }
    /**
     * Adds headers to the license requests
     *
     * @param {!Object.<string, string>} headers
     * @param {shaka.net.NetworkingEngine.RequestType} requestType
     * @param {shakaExtern.Request} request
     * @private
     */
    ;

    _proto.addLicenseRequestHeaders = function addLicenseRequestHeaders(headers, requestType, request) {
      if (requestType !== shaka.net.NetworkingEngine.RequestType.LICENSE) {
        return;
      } // Add these to the existing headers.  Do not clobber them!
      // For PlayReady, there will already be headers in the request.


      for (var field in headers) {
        request.headers[field] = headers[field];
      }
    }
    /**
    * Is current playback live or not?
    *
    * @return {boolean} whether or not current playback is live
    */
    ;

    _proto.live = function live() {
      if (this.shakaPlayer_ && !this.loading_) {
        return this.shakaPlayer_.isLive();
      } else if (this.options_ && this.options_.source) {
        return this.options_.source.live;
      }

      return false;
    }
    /**
     * Duration
     *
     * Total length of the video
     *
     * @return {number} The duration of the video in seconds
     */
    ;

    _proto.duration = function duration() {
      if (this.live()) {
        if (!this.shakaPlayer_) {
          return 0;
        }

        var seekRange = this.shakaPlayer_.seekRange();
        var duration = seekRange.end - seekRange.start;

        if (duration <= this.options_.minDvrWindow) {
          return Infinity;
        }

        return duration;
      }

      return _Html.prototype.duration.call(this);
    }
    /**
     * currentTime
     *
     * The time at which the video is currently playing
     *
     * @return {number} Current time in seconds
     */
    ;

    _proto.currentTime = function currentTime() {
      if (!this.shakaPlayer_) {
        return 0;
      }

      var currentTime = _Html.prototype.currentTime.call(this);

      return currentTime;
    }
    /**
    * Get or the raw current time (in seconds) from the video element
    *
    * > **NOTE**: It's the raw currentTime from the video element
    *
    * @return {number}
    *         - the current time in seconds when getting
    */
    ;

    _proto.baseCurrentTime = function baseCurrentTime() {
      return _Html.prototype.currentTime.call(this);
    }
    /**
     * Set the playheadTime as a Date
     *
     * @param {Date} value
     */
    ;

    _proto.setAbsoluteTime = function setAbsoluteTime(value) {
      log('setAbsoluteTime', value.date);

      try {
        if (this.live()) {
          var moreAccurateTime = (value.date - this.startTimeLive()) / 1000;
          log('setAbsoluteTime setCurrentTime', moreAccurateTime);
          this.setCurrentTime(moreAccurateTime);
        } else {
          // Is VOD
          this.setCurrentTime(value.date / 1000);
        }
      } catch (e) {
        log.error(e);
      }
    }
    /**
     * Get the playheadTime as a Date
     *
     * @param {number=} nowDate
     * @return {Date} playheadTime
     */
    ;

    _proto.getAbsoluteTime = function getAbsoluteTime(nowDate) {
      if (!this.el_) {
        return 0;
      }

      if (this.live()) {
        var absoluteTime = this.startTimeLive() / 1000 + _Html.prototype.currentTime.call(this);

        return new Date(absoluteTime * 1000);
      }

      return new Date(_Html.prototype.currentTime.call(this) * 1000);
    }
    /**
     * seconds behinde live edge
     *
     * @return {number} timeBehindLive
     */
    ;

    _proto.timeBehindLive = function timeBehindLive() {
      if (!this.shakaPlayer_ || !this.live()) {
        return 0;
      }

      var seekRange = this.shakaPlayer_.seekRange();

      var currentTime = _Html.prototype.currentTime.call(this);

      return Math.floor(seekRange.end - currentTime);
    }
    /**
     * The unix time (ms) when stream was started
     *
     * @return {number} Start Time Live
     */
    ;

    _proto.startTimeLive = function startTimeLive() {
      var starttime = 0;

      if (this.live()) {
        if (this.options_.source && this.options_.source.streamInfo) {
          starttime = this.options_.source.streamInfo.referenceTime;
        } else {
          starttime = this.getPresentationStartTime();
        }
      }

      return starttime;
    }
    /**
     * getPresentationStartTime + drifting
     *
     * @return {number} Shaka PresentationStartTime
     */
    ;

    _proto.getPresentationStartTime = function getPresentationStartTime() {
      if (this.shakaPlayer_ && !this.loading_ && this.live() && this.shakaPlayer_.getPresentationStartTimeAsDate()) {
        return this.shakaPlayer_.getPresentationStartTimeAsDate().getTime();
      }

      return 0;
    }
    /**
     * allowJump
     *
     * @param {number} time
     * @return {boolean} is allowJump
     * @private
     */
    ;

    _proto.allowJump_ = function allowJump_(time) {
      var seekRange = this.shakaPlayer_.seekRange();

      if (time > seekRange.end - 2) {
        return true;
      }

      return time < 2;
    }
    /**
     * Set current time
     *
     * @param {number} time Current time of video
     * @method setCurrentTime
     */
    ;

    _proto.setCurrentTime = function setCurrentTime(time) {
      if (!this.shakaPlayer_) {
        return;
      } // handle restrictions


      if (this.options_.source) {
        if (this.options_.source.ffEnabled === false && !this.allowJump_(time)) {
          if (this.currentTime() <= time) {
            return;
          }
        }

        if (this.options_.source.rwEnabled === false && !this.allowJump_(time)) {
          if (this.currentTime() >= time) {
            return;
          }
        }
      }

      if (!this.timeShiftEnabled()) {
        return;
      }

      var seekRange = this.shakaPlayer_.seekRange();

      if (seekRange) {
        // Clamp to seek range
        time = time > seekRange.start ? time : roundUp(seekRange.start, 3);
        time = time < seekRange.end ? time : seekRange.end;

        _Html.prototype.setCurrentTime.call(this, time);
      } else {
        _Html.prototype.setCurrentTime.call(this, time);
      }
    }
    /**
     * Get timeShiftEnabled
     *
     * @return {boolean} if timeShift is enabled
     */
    ;

    _proto.timeShiftEnabled = function timeShiftEnabled() {
      return this.options_.timeShiftDisabled === false;
    }
    /**
     * Returns a list of available bitrates
     *
     * @return {number[]}) Array of available bitrates
     */
    ;

    _proto.bitrates = function bitrates() {
      if (!this.shakaPlayer_) {
        return [];
      }

      var activeVariantTrack = this.getActiveVariantTrack();
      var variantTracks = this.getVariantTracks();
      var bitrates = [];
      variantTracks.forEach(function (track) {
        // Add only unique videoBandwidth
        if (track.language === activeVariantTrack.language && bitrates.indexOf(track.videoBandwidth) === -1) {
          bitrates.push(track.videoBandwidth);
        }
      });
      bitrates.sort(function (a, b) {
        return b - a;
      });
      return bitrates;
    }
    /**
     * Get/Set bitrate
     *
     * Will return a bitrate equal to the current video bitrate. However if ABR is enabled will return 0 to indicate a non-fixed bitrate.
     *
     * Setting this value disable dynamic switching, and fixes the bitrate as specified.
     * To set a ceiling, but allow it to dynamically switch quality when
     * able use setMaxBitrate instead
     *
     * @throws TypeError Invalid bitrate specified.
     * @param {number} value Bitrate to set. 0 to 'reset' back to ABR
     * @return {number} bitrate when getting
     */
    ;

    _proto.bitrate = function bitrate(value) {
      if (value === void 0) {
        value = null;
      }

      var activeVariantTrack = this.getActiveVariantTrack();

      if (value === null) {
        // Get video bitrate
        var config = this.shakaPlayer_.getConfiguration();

        if (config.abr.enabled) {
          return 0;
        } else if (activeVariantTrack) {
          return activeVariantTrack.videoBandwidth;
        }

        return 0;
      } else if (value === 0) {
        // Reset bitrate, it should auto switch again.
        this.shakaPlayer_.configure({
          abr: {
            enabled: true
          }
        });
        this.trigger({
          type: empPlayerEvents.BITRATE_CHANGED,
          bubbles: true
        }, {
          bitrate: value,
          auto: true
        });
        this.preActiveVariantTrack = null;
        return;
      } // Set bitrate and stop auto switch.


      var variantTracks = this.getVariantTracks();
      var newTrack = null;

      for (var i = 0; i < variantTracks.length; i++) {
        var track = variantTracks[i];

        if (track.videoBandwidth === value && track.language === activeVariantTrack.language) {
          newTrack = track;
          break;
        }
      }

      if (newTrack === null) {
        throw new TypeError('Invalid bitrate specified.');
      }

      this.shakaPlayer_.configure({
        abr: {
          enabled: false
        }
      }); // Finnaly, set the bitrate

      this.shakaPlayer_.selectVariantTrack(newTrack, true);
      this.trigger({
        type: empPlayerEvents.BITRATE_CHANGED,
        bubbles: true
      }, {
        bitrate: value,
        auto: false
      });
    }
    /**
     * Get current bitrate
     *
     * Always returns the current bitrate, unlike bitrate() which returns 0 if ABR is enabled
     *
     * @return {number} bitrate
     */
    ;

    _proto.getBitrate = function getBitrate() {
      var activeVariantTrack = this.getActiveVariantTrack();

      if (activeVariantTrack) {
        return activeVariantTrack.videoBandwidth;
      }

      return 0;
    }
    /**
     * Check if Dash media is supported by this browser/device.
     *
     * @return {boolean}
     *         - True if HTML5 media is supported.
     *         - False if HTML5 media is not supported.
     */
    ;

    EmpShaka.isSupported = function isSupported() {
      // Dash is definitely not supported if HTML5 video isn't
      if (!videojs.getTech('Html5').isSupported()) {
        return false;
      }

      var hasWebKit = ('WebKitMediaSource' in window_1);
      var hasMediaSource = ('MediaSource' in window_1);
      return hasWebKit || hasMediaSource;
    }
    /**
     * Define source handler options.
     *
     * These options check whether or not we can playback the source object.
     *
     * @return {Object} nativeSourceHandler
     * @static
     */
    ;

    /**
     * Set max bitrate
     *
     * Setting this to NaN will clear the max bitrate
     *
     * @param {number} bitrate in kbps
     */
    _proto.setMaxBitrate = function setMaxBitrate(bitrate) {
      if (this.shakaPlayer_) {
        // set to max
        if (isNaN(bitrate)) {
          bitrate = Number.POSITIVE_INFINITY;
        } else {
          bitrate = bitrate * 1000;
        }

        var config = {
          restrictions: {
            maxBandwidth: bitrate
          }
        };
        this.shakaPlayer_.configure(config); // Updates the bitrate button

        this.trigger(empPlayerEvents.LOADED_DATA);
      } else {
        this.options_.maxBitrate = bitrate;
      }
    }
    /**
     * Get bitrate
     *
     * @return {number} bitrate in kbps
     */
    ;

    _proto.getMaxBitrate = function getMaxBitrate() {
      if (this.shakaPlayer_) {
        var config = this.shakaPlayer_.getConfiguration();

        if (config.restrictions.maxBandwidth) {
          return config.restrictions.maxBandwidth / 1000;
        }

        return config.restrictions.maxBandwidth;
      }

      return this.options_.maxBitrate;
    }
    /**
     * can Play Hls
     *
     * @return {boolean} if it can play hls
     */
    ;

    /**
     * Returns true if the playback can be restarted
     *
     * @return {boolean} canRestart
     */
    _proto.canRestart = function canRestart() {
      return !this.live() || this.timeShiftEnabled();
    }
    /**
     * Get the current track of a specific type
     *
     * @return {Object} Active VariantTrack
     * @private
     */
    ;

    _proto.getActiveVariantTrack = function getActiveVariantTrack() {
      var variantTracks = this.getVariantTracks();

      for (var i = 0; i < variantTracks.length; i++) {
        var track = variantTracks[i];

        if (track.active) {
          return track;
        }
      }

      return null;
    }
    /**
     * Get all variantTracks
     *
     * @return {Array} Array with Track items
     * @private
     */
    ;

    _proto.getVariantTracks = function getVariantTracks() {
      var variantTracks = this.shakaPlayer_.getVariantTracks();
      return variantTracks;
    } // /////////////////// Audio tracks

    /**
    * isAudioTrackSynchronized
    *
    * @return {boolean} isAudioTrackSynchronized
    * @private
    */
    ;

    _proto.isAudioTrackSynchronized = function isAudioTrackSynchronized() {
      var langcodes = this.shakaPlayer_.getVariantTracks().map(function (track) {
        return track.language;
      }).filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      return this.isTechAudioTrackSynchronized(langcodes);
    }
    /**
     * Configure audio tracks
     *
     * Adds available audio tracks to the video
     *
     * @private
     */
    ;

    _proto.configureVideojsAudioTracks = function configureVideojsAudioTracks() {
      var _this5 = this;

      if (this.isAudioTrackSynchronized()) {
        this.selectVideojsAudioLanguage(this.getSelectedTechAudioLanguage());
        return;
      }

      log('configureVideojsAudioTracks');
      var variantTracks = this.getVariantTracks(); // Clear current audio tracks

      this.clearTracks(['audio']); // Audio tracks can have multiple bitrates, filter out the highest for each language

      var filteredTracks = {};
      variantTracks.forEach(function (variantTrack) {
        var language = variantTrack.language; // Check if language has been added already

        if (filteredTracks.hasOwnProperty(language)) {
          var track = filteredTracks[language]; // replace the filtered track if the current track contains a higher bandwidth

          if (variantTrack.audioBandwidth > track.audioBandwidth) {
            filteredTracks[language] = variantTrack;
          } // Language hasn't been added yet

        } else {
          filteredTracks[language] = variantTrack;
        }
      });
      var activeVariantTrack = this.getActiveVariantTrack();
      /*
       Videojs AudioTrack kind
        "alternative": A possible alternative to the main track.
        "descriptions": An audio description of a video track.
        "main": The primary audio track for this video.
        "main-desc": The primary audio track, mixed with audio descriptions.
        "translation": A translated version of the main audio track.
        "commentary": Commentary on the primary audio track, e.g. a director's commentary.
        "" (default): No explicit kind, or the kind given by the track's metadata is not recognized by the user agent.
      */

      Object.keys(filteredTracks).forEach(function (key) {
        var audioTrack = filteredTracks[key];

        _this5.addAudioTrack(audioTrack.kind, getLanguageName(audioTrack.language).split(';')[0], audioTrack.language, audioTrack.language === activeVariantTrack.language);
      });
    }
    /**
     * selectTechAudioLanguage
     *
     * @param {string} languageCode
     * @private
     */
    ;

    _proto.selectTechAudioLanguage = function selectTechAudioLanguage(languageCode) {
      if (languageCode) {
        // Make selection sticky
        if (!this.options_) {
          this.options_ = {
            audioLanguage: languageCode
          };
        } else {
          this.options_.audioLanguage = languageCode;
        }

        if (languageCode !== this.getSelectedTechAudioLanguage()) {
          log('selectTechAudioLanguage', languageCode);
          this.shakaPlayer_.selectAudioLanguage(languageCode);
        }
      }
    }
    /**
     * getSelectedTechAudioLanguage
     *
     * @return {string} AudioLanguage code
     * @private
     */
    ;

    _proto.getSelectedTechAudioLanguage = function getSelectedTechAudioLanguage() {
      if (!this.shakaPlayer_) {
        return null;
      }

      var activeVariantTrack = this.getActiveVariantTrack();
      return activeVariantTrack ? activeVariantTrack.language : null;
    } // ////////////////////////// Text tracks

    /**
    * get Shaka ActiveTextTrack
    *
    * @return {Object} Active TextTrack
    * @private
    */
    ;

    _proto.getActiveTextTrack = function getActiveTextTrack() {
      var textTracks = this.filterUniqueTexttracks_(this.shakaPlayer_.getTextTracks());
      var activeTextTrack = textTracks.filter(function (track) {
        return track.active;
      });
      return activeTextTrack.length > 0 ? activeTextTrack[0] : null;
    }
    /**
    * getSelectedTechTextLanguage
    *
    * @return {string} Active TextTrack Language
    * @private
    */
    ;

    _proto.getSelectedTechTextLanguage = function getSelectedTechTextLanguage() {
      if (!this.shakaPlayer_) {
        return null;
      }

      var activeTextTrack = this.getActiveTextTrack();
      return activeTextTrack && this.shakaPlayer_.isTextTrackVisible() ? activeTextTrack.language : null;
    }
    /**
    * isTextTrackSynchronized
    *
    * @return {boolean} is TextTrack Synchronized
    * @private
    */
    ;

    _proto.isTextTrackSynchronized = function isTextTrackSynchronized() {
      var shakaTextTracksLanguages = this.filterUniqueTexttracks_(this.shakaPlayer_.getTextTracks()).map(function (track) {
        return track.language;
      });
      return this.isTechTextTrackSynchronized(shakaTextTracksLanguages);
    }
    /**
     * Configure text tracks
     *
     * Clear all videojs text tracks then Adds shaka text tracks to the videojs
     *
     * @private
     */
    ;

    _proto.configureVideojsTextTracks = function configureVideojsTextTracks() {
      var _this6 = this;

      if (this.isTextTrackSynchronized()) {
        this.selectVideojsTextLanguage(this.getSelectedTechTextLanguage());
        return;
      }

      this.blockLocalTrackChange = true;
      log('configureVideojsTextTracks'); // Clear videojs text tracks

      this.clearTracks(['text']); // Add available text tracks to videojs

      var textTracks = this.filterUniqueTexttracks_(this.shakaPlayer_.getTextTracks());
      var selectedVideojsTrack;
      var selectedShakaTextLanguage = this.getSelectedTechTextLanguage();
      /*
       Videojs TextTrack kind
        "subtitles" (default): Translations of the dialogue in the video for when audio is available but not understood. Subtitles are shown over the video.
        "captions": Transcription of the dialogue, sound effects, musical cues, and other audio information for viewer who are deaf/hard of hearing, or the video is muted. Captions are also shown over the video.
        "chapters": Chapter titles that are used to create navigation within the video. Typically, these are in the form of a list of chapters that the viewer can use to navigate the video.
        "descriptions": Text descriptions of the action in the content for when the video portion isn't available or because the viewer is blind or not using a screen. Descriptions are read by a screen reader or turned into a separate audio track.
        "metadata": Tracks that have data meant for JavaScript to parse and do something with. These aren't shown to the user
      */

      textTracks.forEach(function (track) {
        var newTrack = _this6.addTextTrack(track.kind ? track.kind : 'subtitles', getLanguageName(track.language).split(';')[0], track.language);

        if (selectedShakaTextLanguage === track.language) {
          selectedVideojsTrack = newTrack;
        }
      }); // We need change mode after all tracks are added for UI menu to work.

      if (selectedVideojsTrack) {
        selectedVideojsTrack.mode = 'showing';

        if (!this.shakaPlayer_.isTextTrackVisible()) {
          this.shakaPlayer_.setTextTrackVisibility(true);
        }
      } else {
        this.shakaPlayer_.setTextTrackVisibility(false);
      }

      this.stopBlockLocalTrackChange('configureVideojsTextTracks');
    }
    /**
     * filter Unique Texttracks
     * use fragmented version if exists
     *
     * @param {Array} tracks
     * @return {Array} filtred tracks
     * @private
     */
    ;

    _proto.filterUniqueTexttracks_ = function filterUniqueTexttracks_(tracks) {
      var uniqueTexttracks = [];
      tracks.forEach(function (track) {
        var found = uniqueTexttracks.find(function (t) {
          return t.language === track.language;
        });

        if (!found) {
          uniqueTexttracks.push(track);
        } else if (track.mimeType === 'application/mp4' && found.mimeType !== 'application/mp4') {
          var index = uniqueTexttracks.indexOf(found);
          uniqueTexttracks[index] = track;
        }
      });
      return uniqueTexttracks;
    }
    /**
    * selectTechTextLanguage
    *
    * @param {string} languageCode
    * @private
    */
    ;

    _proto.selectTechTextLanguage = function selectTechTextLanguage(languageCode) {
      if (languageCode) {
        // Show text track
        if (!this.shakaPlayer_.isTextTrackVisible()) {
          log('Shaka texttrack', 'show', this.getSelectedTechTextLanguage());
          this.shakaPlayer_.setTextTrackVisibility(true);
        }

        if (this.getSelectedTechTextLanguage() !== languageCode) {
          log('select Shaka texttrack', languageCode);
          this.shakaPlayer_.selectTextLanguage(languageCode);
        }
      } else if (this.shakaPlayer_.isTextTrackVisible()) {
        // Hide text track
        log('Shaka texttrack', 'hide');
        this.shakaPlayer_.setTextTrackVisibility(false);
      }

      languageCode = languageCode ? languageCode : 'None'; // Make selection sticky

      if (!this.options_) {
        this.options_ = {
          subtitleLanguage: languageCode
        };
      } else {
        this.options_.subtitleLanguage = languageCode;
      }
    } // ///////////////// Text tracks end

    /**
     * Attempt to begin playback at the first opportunity.
     *
     * @return {Promise|undefined}
     *         Returns a promise if the browser supports Promises (or one
     *         was passed in as an option). This promise will be resolved on
     *         the return value of play. If this is undefined it will fulfill the
     *         promise chain otherwise the promise chain will be fulfilled when
     *         the promise from play is fulfilled.
     */
    ;

    _proto.play = function play() {
      var _this7 = this;

      // Overide play() and block videojs from send play when autoplay, should be handle by Shaka player
      if (this.stopped_ || this.ended_) {
        this.trigger({
          type: empPlayerEvents.REPLAY,
          bubbles: true
        });
      } else if (!this.loading_) {
        // Don't working! do we still need it? Can't press play button  with sll and autoplay
        // if ((!this.options_.autoplay && this.el_.networkState > this.el_.HAVE_METADATA) ||
        // (this.hasStarted_ && this.el_.networkState > this.el_.HAVE_METADATA)) {
        // this.trigger('play'); not needed
        // return this.el_.play();
        if (this.el() && this.hasMetadata_ && this.el_.networkState >= this.el_.HAVE_METADATA) {
          return _Html.prototype.play.call(this);
        }
      } else {
        log('Call play when loading, wait...');
        setTimeout(function () {
          _this7.play();
        }, 1000);
      }
    }
    /**
     * pause playback
     */
    ;

    _proto.pause = function pause() {
      if (this.live() && !this.timeShiftEnabled()) {
        return;
      }

      _Html.prototype.pause.call(this);

      this.trigger({
        type: empPlayerEvents.PAUSE,
        bubbles: true
      });
    }
    /**
     *
     * Dispose of the tech
     *
     * @private
     */
    ;

    _proto.dispose = function dispose() {
      if (!this.isDispose_) {
        log('dispose ' + TechName);
        this.stopTrackingDuration();
        this.textTracks().off('selectedlanguagechange', this.textTrackChangeBind);
        this.audioTracks().off('change', this.audioTrackChangeBind);
        this.el_.removeEventListener('ended', this.onEndedBind);
        this.off(empPlayerEvents.LOAD_START, this.onLoadStartBind);

        if (this.shakaPlayer_) {
          try {
            this.shakaPlayer_.destroy();
          } catch (e) {// Do nothing
          }
        }

        this.shakaPlayer_ = null;
        this.streamrootWrapper_ = null;
        this.certificate_ = null;

        _Html.prototype.dispose.call(this);

        this.isDispose_ = true;
      }
    }
    /**
     * Returns the TimeRanges of the media that are currently available
     * for seeking to.
     *
     * @return {TimeRanges} the seekable intervals of the media timeline
     * @method Player#seekable
     */
    ;

    _proto.seekable = function seekable() {
      if (this.shakaPlayer_) {
        var seekRange = this.shakaPlayer_.seekRange();
        var start = roundUp(seekRange.start, 3);

        if (this.options_.source && this.options_.source.isDynamicCachupAsLive) {
          var streamInfoStart = this.options_.source.streamInfo.startTime / 1000;

          if (streamInfoStart > start) {
            start = streamInfoStart;
          }
        }

        return createTimeRanges(start, seekRange.end);
      }

      return createTimeRanges(0, 0);
    }
    /**
     * triggerRecoverableError
     *
     * @param {Error} error
     * @private
     */
    ;

    _proto.triggerRecoverableError = function triggerRecoverableError(error) {
      this.triggerRecoverableTechError(error, TechName);
    }
    /**
     * Get EMP log object
     *
     * @return {Object} EMP log
     */
    ;

    _createClass(EmpShaka, [{
      key: "streamType",
      get: function get() {
        if (this.options_ && this.options_.streamType === 'HLS') {
          return 'HLS';
        }

        return 'DASH';
      }
    }], [{
      key: "nativeSourceHandler",
      get: function get() {
        /**
         *
         * @param {Object} source Source for playback
         * @param {Object=} options The key/value store of tech options.
         * @return {probably|maybe|*} canHandleSource
         */
        return {
          /**
           * canHandleSource
           *
           * @param {Object} source Source for playback
           * @param {Object=} options The key/value store of tech options.
           * @return {probably|maybe|*} canHandleSource
           * @method canHandleSource
           */
          canHandleSource: function canHandleSource(source, options) {
            // Keep this so when setting the source to an mpd url it still works
            var dashExtRE = /\.mpd/i;

            if (EmpShaka.nativeSourceHandler.canPlayType(source.type, options)) {
              return 'probably';
            } else if (dashExtRE.test(source.src)) {
              return 'maybe';
            }

            return '';
          },

          /**
           * Handle source
           *
           * @param {Object} source Source for playback
           * @param {Tech}   tech Tech object to use for playback
           */
          handleSource: function handleSource(source, tech) {
            tech.handleSource(source, tech);
          },

          /**
           * Determine if we can play type
           *
           * @param {string}  type mime-type
           * @param {Object=} options The key/value store of tech options.
           * @return {probably|''} canPlayType
           */
          canPlayType: function canPlayType(type, options) {
            var dashTypeRE = /^application\/dash\+xml/i;

            if (dashTypeRE.test(type) && shaka.Player.isBrowserSupported()) {
              return 'probably';
            }

            if (window_1.muxjs && options && options.streamType === 'HLS') {
              var xMpegRE = /^application\/x-mpegurl/i;
              var vndMpegRE = /^application\/x-vnd.apple.mpegurl/i;

              if (xMpegRE.test(type) || vndMpegRE.test(type)) {
                return 'probably';
              }
            }

            return '';
          }
        };
      }
    }, {
      key: "canPlayHls",
      get: function get() {
        return !!window_1.muxjs;
      }
      /**
       * Return the object presentation of the play-request required for the entitlement engine
       *
       * @return {Object} entitlementPlayRequest
       */

    }, {
      key: "entitlementPlayRequest",
      get: function get() {
        return {
          drm: 'CENC',
          format: 'DASH',
          type: 'application/dash+xml'
        };
      }
      /**
       * Get Entitlement PlayRequests
       *
       * @return {Object[]} entitlementPlayRequests
       */

    }, {
      key: "entitlementPlayRequests",
      get: function get() {
        return {
          DASH: {
            drm: 'CENC',
            format: 'DASH',
            type: 'application/dash+xml'
          },
          HLS: {
            drm: 'UNENCRYPTED',
            format: 'HLS',
            type: 'application/x-mpegurl'
          }
        };
      }
    }, {
      key: "log",
      get: function get() {
        return log;
      }
    }]);

    return EmpShaka;
  }(Html5);

  EmpShaka.prototype.featuresNativeTextTracks = false;
  EmpShaka.prototype.featuresNativeAudioTracks = false;
  Tech$1.withSourceHandlers(EmpShaka);
  EmpShaka.VERSION = '2.2.132-548'; // Unset source handlers set by Html5 super class.
  // We do not intent to support any sources other then sources allowed by nativeSourceHandler

  EmpShaka.sourceHandlers = [];
  EmpShaka.registerSourceHandler(EmpShaka.nativeSourceHandler);

  if (Tech$1.getTech(TechName)) {
    videojs.log.warn('Not using ' + TechName + ' as it appears to already be registered');
    videojs.log.warn(TechName + ' should only be used with emp-player@2 and above');
  } else {
    Tech$1.registerTech(TechName, EmpShaka);
  }

  return EmpShaka;

})));
