/**
 * @license
 * EMP-Player 2.1.111-453 
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

  function isNativeReflectConstruct() {
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
    if (isNativeReflectConstruct()) {
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
  (function(){var innerGlobal=typeof window!="undefined"?window:commonjsGlobal;var exportTo={};(function(window,global){var p,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value);},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function da(){da=function(){};ca.Symbol||(ca.Symbol=ea);}var ea=function(){var b=0;return function(c){return "jscomp_symbol_"+(c||"")+b++}}();
  function fa(){da();var b=ca.Symbol.iterator;b||(b=ca.Symbol.iterator=ca.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&aa(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return ha(this)}});fa=function(){};}function ha(b){var c=0;return ia(function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}})}function ia(b){fa();b={next:b};b[ca.Symbol.iterator]=function(){return this};return b}function r(b){fa();var c=b[Symbol.iterator];return c?c.call(b):ha(b)}
  function ka(b,c){if(c){for(var d=ca,e=b.split("."),f=0;f<e.length-1;f++){var g=e[f];g in d||(d[g]={});d=d[g];}e=e[e.length-1];f=d[e];g=c(f);g!=f&&null!=g&&aa(d,e,{configurable:!0,writable:!0,value:g});}}
  ka("Promise",function(b){function c(b){this.b=0;this.g=void 0;this.a=[];var c=this.c();try{b(c.resolve,c.reject);}catch(l){c.reject(l);}}function d(){this.a=null;}function e(b){return b instanceof c?b:new c(function(c){c(b);})}if(b)return b;d.prototype.b=function(b){null==this.a&&(this.a=[],this.f());this.a.push(b);};d.prototype.f=function(){var b=this;this.c(function(){b.h();});};var f=ca.setTimeout;d.prototype.c=function(b){f(b,0);};d.prototype.h=function(){for(;this.a&&this.a.length;){var b=this.a;this.a=
  [];for(var c=0;c<b.length;++c){var d=b[c];b[c]=null;try{d();}catch(m){this.g(m);}}}this.a=null;};d.prototype.g=function(b){this.c(function(){throw b;});};c.prototype.c=function(){function b(b){return function(e){d||(d=!0,b.call(c,e));}}var c=this,d=!1;return {resolve:b(this.o),reject:b(this.f)}};c.prototype.o=function(b){if(b===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof c)this.v(b);else{a:switch(typeof b){case "object":var d=null!=b;break a;case "function":d=!0;
  break a;default:d=!1;}d?this.m(b):this.h(b);}};c.prototype.m=function(b){var c=void 0;try{c=b.then;}catch(l){this.f(l);return}"function"==typeof c?this.w(c,b):this.h(b);};c.prototype.f=function(b){this.i(2,b);};c.prototype.h=function(b){this.i(1,b);};c.prototype.i=function(b,c){if(0!=this.b)throw Error("Cannot settle("+b+", "+c+"): Promise already settled in state"+this.b);this.b=b;this.g=c;this.j();};c.prototype.j=function(){if(null!=this.a){for(var b=0;b<this.a.length;++b)g.b(this.a[b]);this.a=null;}};
  var g=new d;c.prototype.v=function(b){var c=this.c();b.Vb(c.resolve,c.reject);};c.prototype.w=function(b,c){var d=this.c();try{b.call(c,d.resolve,d.reject);}catch(m){d.reject(m);}};c.prototype.then=function(b,d){function e(b,c){return "function"==typeof b?function(c){try{f(b(c));}catch(C){g(C);}}:c}var f,g,h=new c(function(b,c){f=b;g=c;});this.Vb(e(b,f),e(d,g));return h};c.prototype["catch"]=function(b){return this.then(void 0,b)};c.prototype.Vb=function(b,c){function d(){switch(e.b){case 1:b(e.g);break;
  case 2:c(e.g);break;default:throw Error("Unexpected state: "+e.b);}}var e=this;null==this.a?g.b(d):this.a.push(d);};c.resolve=e;c.reject=function(b){return new c(function(c,d){d(b);})};c.race=function(b){return new c(function(c,d){for(var f=r(b),g=f.next();!g.done;g=f.next())e(g.value).Vb(c,d);})};c.all=function(b){var d=r(b),f=d.next();return f.done?e([]):new c(function(b,c){function g(c){return function(d){h[c]=d;k--;0==k&&b(h);}}var h=[],k=0;do h.push(void 0),k++,e(f.value).Vb(g(h.length-1),c),f=d.next();
  while(!f.done)})};return c});ka("Promise.prototype.finally",function(b){return b?b:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;})})}});function la(b){function c(c){return b.next(c)}function d(c){return b["throw"](c)}return new Promise(function(e,f){function g(b){b.done?e(b.value):Promise.resolve(b.value).then(c,d).then(g,f);}g(b.next());})}function t(b){return la(b())}
  var ma="function"==typeof Object.create?Object.create:function(b){function c(){}c.prototype=b;return new c},oa;if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={ke:!0},ra={};try{ra.__proto__=qa;pa=ra.ke;break a}catch(b){}pa=!1;}oa=pa?function(b,c){b.__proto__=c;if(b.__proto__!==c)throw new TypeError(b+" is not extensible");return b}:null;}var sa=oa;function ta(){this.g=!1;this.c=null;this.s=void 0;this.l=1;this.b=this.f=0;this.i=this.a=null;}
  function ua(b){if(b.g)throw new TypeError("Generator is already running");b.g=!0;}ta.prototype.h=function(b){this.s=b;};function va(b,c){b.a={td:c,Dd:!0};b.l=b.f||b.b;}ta.prototype["return"]=function(b){this.a={"return":b};this.l=this.b;};function u(b,c,d){b.l=d;return {value:c}}ta.prototype.A=function(b){this.l=b;};function v(b){b.l=0;}function ya(b,c,d){b.f=c;void 0!=d&&(b.b=d);}function za(b,c){b.f=0;b.b=c||0;}function Aa(b,c){b.l=c;b.f=0;}function Da(b){b.f=0;var c=b.a.td;b.a=null;return c}
  function Ea(b){b.i=[b.a];b.f=0;b.b=0;}function Fa(b,c){var d=b.i.splice(0)[0];(d=b.a=b.a||d)?d.Dd?b.l=b.f||b.b:void 0!=d.A&&b.b<d.A?(b.l=d.A,b.a=null):b.l=b.b:b.l=c;}function Ga(b){this.a=new ta;this.b=b;}function Ha(b,c){ua(b.a);var d=b.a.c;if(d)return La(b,"return"in d?d["return"]:function(b){return {value:b,done:!0}},c,b.a["return"]);b.a["return"](c);return Ma(b)}
  function La(b,c,d,e){try{var f=c.call(b.a.c,d);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return b.a.g=!1,f;var g=f.value;}catch(h){return b.a.c=null,va(b.a,h),Ma(b)}b.a.c=null;e.call(b.a,g);return Ma(b)}
  function Ma(b){for(;b.a.l;)try{var c=b.b(b.a);if(c)return b.a.g=!1,{value:c.value,done:!1}}catch(d){b.a.s=void 0,va(b.a,d);}b.a.g=!1;if(b.a.a){c=b.a.a;b.a.a=null;if(c.Dd)throw c.td;return {value:c["return"],done:!0}}return {value:void 0,done:!0}}
  function Na(b){this.next=function(c){ua(b.a);b.a.c?c=La(b,b.a.c.next,c,b.a.h):(b.a.h(c),c=Ma(b));return c};this["throw"]=function(c){ua(b.a);b.a.c?c=La(b,b.a.c["throw"],c,b.a.h):(va(b.a,c),c=Ma(b));return c};this["return"]=function(c){return Ha(b,c)};fa();this[Symbol.iterator]=function(){return this};}function y(b,c){Na.prototype=b.prototype;return new Na(new Ga(c))}function Oa(b,c){return Object.prototype.hasOwnProperty.call(b,c)}
  ka("WeakMap",function(b){function c(b){this.a=(g+=Math.random()+1).toString();if(b){da();fa();b=r(b);for(var c;!(c=b.next()).done;)c=c.value,this.set(c[0],c[1]);}}function d(b){Oa(b,f)||aa(b,f,{value:{}});}function e(b){var c=Object[b];c&&(Object[b]=function(b){d(b);return c(b)});}if(function(){if(!b||!Object.seal)return !1;try{var c=Object.seal({}),d=Object.seal({}),e=new b([[c,2],[d,3]]);if(2!=e.get(c)||3!=e.get(d))return !1;e["delete"](c);e.set(d,4);return !e.has(c)&&4==e.get(d)}catch(m){return !1}}())return b;
  var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;c.prototype.set=function(b,c){d(b);if(!Oa(b,f))throw Error("WeakMap key fail: "+b);b[f][this.a]=c;return this};c.prototype.get=function(b){return Oa(b,f)?b[f][this.a]:void 0};c.prototype.has=function(b){return Oa(b,f)&&Oa(b[f],this.a)};c.prototype["delete"]=function(b){return Oa(b,f)&&Oa(b[f],this.a)?delete b[f][this.a]:!1};return c});
  ka("Map",function(b){function c(){var b={};return b.Aa=b.next=b.head=b}function d(b,c){var d=b.a;return ia(function(){if(d){for(;d.head!=b.a;)d=d.Aa;for(;d.next!=d.head;)return d=d.next,{done:!1,value:c(d)};d=null;}return {done:!0,value:void 0}})}function e(b,c){var d=c&&typeof c;"object"==d||"function"==d?g.has(c)?d=g.get(c):(d=""+ ++h,g.set(c,d)):d="p_"+c;var e=b.b[d];if(e&&Oa(b.b,d))for(var f=0;f<e.length;f++){var k=e[f];if(c!==c&&k.key!==k.key||c===k.key)return {id:d,list:e,index:f,X:k}}return {id:d,
  list:e,index:-1,X:void 0}}function f(b){this.b={};this.a=c();this.size=0;if(b){b=r(b);for(var d;!(d=b.next()).done;)d=d.value,this.set(d[0],d[1]);}}if(function(){if(!b||"function"!=typeof b||!b.prototype.entries||"function"!=typeof Object.seal)return !1;try{var c=Object.seal({x:4}),d=new b(r([[c,"s"]]));if("s"!=d.get(c)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return !1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||"s"!=f.value[1])return !1;f=e.next();return f.done||4!=f.value[0].x||
  "t"!=f.value[1]||!e.next().done?!1:!0}catch(q){return !1}}())return b;da();fa();var g=new WeakMap;f.prototype.set=function(b,c){var d=e(this,b);d.list||(d.list=this.b[d.id]=[]);d.X?d.X.value=c:(d.X={next:this.a,Aa:this.a.Aa,head:this.a,key:b,value:c},d.list.push(d.X),this.a.Aa.next=d.X,this.a.Aa=d.X,this.size++);return this};f.prototype["delete"]=function(b){b=e(this,b);return b.X&&b.list?(b.list.splice(b.index,1),b.list.length||delete this.b[b.id],b.X.Aa.next=b.X.next,b.X.next.Aa=b.X.Aa,b.X.head=
  null,this.size--,!0):!1};f.prototype.clear=function(){this.b={};this.a=this.a.Aa=c();this.size=0;};f.prototype.has=function(b){return !!e(this,b).X};f.prototype.get=function(b){return (b=e(this,b).X)&&b.value};f.prototype.entries=function(){return d(this,function(b){return [b.key,b.value]})};f.prototype.keys=function(){return d(this,function(b){return b.key})};f.prototype.values=function(){return d(this,function(b){return b.value})};f.prototype.forEach=function(b,c){for(var d=this.entries(),e;!(e=d.next()).done;)e=
  e.value,b.call(c,e[1],e[0],this);};f.prototype[Symbol.iterator]=f.prototype.entries;var h=0;return f});
  ka("Set",function(b){function c(b){this.a=new Map;if(b){b=r(b);for(var c;!(c=b.next()).done;)this.add(c.value);}this.size=this.a.size;}if(function(){if(!b||"function"!=typeof b||!b.prototype.entries||"function"!=typeof Object.seal)return !1;try{var c=Object.seal({x:4}),e=new b(r([c]));if(!e.has(c)||1!=e.size||e.add(c)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return !1;var f=e.entries(),g=f.next();if(g.done||g.value[0]!=c||g.value[1]!=c)return !1;g=f.next();return g.done||g.value[0]==c||4!=g.value[0].x||
  g.value[1]!=g.value[0]?!1:f.next().done}catch(h){return !1}}())return b;da();fa();c.prototype.add=function(b){this.a.set(b,b);this.size=this.a.size;return this};c.prototype["delete"]=function(b){b=this.a["delete"](b);this.size=this.a.size;return b};c.prototype.clear=function(){this.a.clear();this.size=0;};c.prototype.has=function(b){return this.a.has(b)};c.prototype.entries=function(){return this.a.entries()};c.prototype.values=function(){return this.a.values()};c.prototype.keys=c.prototype.values;
  c.prototype[Symbol.iterator]=c.prototype.values;c.prototype.forEach=function(b,c){var d=this;this.a.forEach(function(e){return b.call(c,e,e,d)});};return c});function Pa(b,c,d){b instanceof String&&(b=String(b));for(var e=b.length,f=0;f<e;f++){var g=b[f];if(c.call(d,g,f,b))return {zd:f,fe:g}}return {zd:-1,fe:void 0}}ka("Array.prototype.findIndex",function(b){return b?b:function(b,d){return Pa(this,b,d).zd}});
  function Qa(b,c){fa();b instanceof String&&(b+="");var d=0,e={next:function(){if(d<b.length){var f=d++;return {value:c(f,b[f]),done:!1}}e.next=function(){return {done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e}ka("Array.prototype.keys",function(b){return b?b:function(){return Qa(this,function(b){return b})}});ka("Object.is",function(b){return b?b:function(b,d){return b===d?0!==b||1/b===1/d:b!==b&&d!==d}});
  ka("Array.prototype.includes",function(b){return b?b:function(b,d){var c=this;c instanceof String&&(c=String(c));var f=c.length,g=d||0;for(0>g&&(g=Math.max(g+f,0));g<f;g++){var h=c[g];if(h===b||Object.is(h,b))return !0}return !1}});function Ra(b,c,d){if(null==b)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return b+""}
  ka("String.prototype.includes",function(b){return b?b:function(b,d){return -1!==Ra(this,b,"includes").indexOf(b,d||0)}});ka("Array.from",function(b){return b?b:function(b,d,e){fa();d=null!=d?d:function(b){return b};var c=[],g=b[Symbol.iterator];if("function"==typeof g)for(b=g.call(b);!(g=b.next()).done;)c.push(d.call(e,g.value));else{g=b.length;for(var h=0;h<g;h++)c.push(d.call(e,b[h]));}return c}});
  ka("String.prototype.startsWith",function(b){return b?b:function(b,d){for(var c=Ra(this,b,"startsWith"),f=c.length,g=b.length,h=Math.max(0,Math.min(d|0,c.length)),k=0;k<g&&h<f;)if(c[h++]!=b[k++])return !1;return k>=g}});ka("Array.prototype.find",function(b){return b?b:function(b,d){return Pa(this,b,d).fe}});var Sa=this;Sa.a=!0;
  function z(b,c){var d=b.split("."),e=Sa;d[0]in e||!e.execScript||e.execScript("var "+d[0]);for(var f;d.length&&(f=d.shift());)d.length||void 0===c?e[f]?e=e[f]:e=e[f]={}:e[f]=c;}function Ta(b,c){function d(){}d.prototype=c.prototype;b.ag=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.og=function(b,d,g){return c.prototype[d].apply(b,Array.prototype.slice.call(arguments,2))};}function Ua(b){this.c=Math.exp(Math.log(.5)/b);this.b=this.a=0;}function Wa(b,c,d){var e=Math.pow(b.c,c);d=d*(1-e)+e*b.a;isNaN(d)||(b.a=d,b.b+=c);}function Xa(b){return b.a/(1-Math.pow(b.c,b.b))}function Ya(){this.b=new Ua(2);this.c=new Ua(5);this.a=0;}Ya.prototype.getBandwidthEstimate=function(b){return 128E3>this.a?b:Math.min(Xa(this.b),Xa(this.c))};function Za(){}function $a(){}function ab(){}window.console&&window.console.log.bind&&($a=console.warn.bind(console),Za=console.error.bind(console));var bb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function cb(b){var c;b instanceof cb?(db(this,b.sa),this.Xa=b.Xa,this.oa=b.oa,hb(this,b.tb),this.fa=b.fa,ib(this,b.a.clone()),this.Oa=b.Oa):b&&(c=String(b).match(bb))?(db(this,c[1]||"",!0),this.Xa=jb(c[2]||""),this.oa=jb(c[3]||"",!0),hb(this,c[4]),this.fa=jb(c[5]||"",!0),ib(this,c[6]||"",!0),this.Oa=jb(c[7]||"")):this.a=new kb(null);}p=cb.prototype;p.sa="";p.Xa="";p.oa="";p.tb=null;p.fa="";p.Oa="";
  p.toString=function(){var b=[],c=this.sa;c&&b.push(lb(c,mb,!0),":");if(c=this.oa){b.push("//");var d=this.Xa;d&&b.push(lb(d,mb,!0),"@");b.push(encodeURIComponent(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));c=this.tb;null!=c&&b.push(":",String(c));}if(c=this.fa)this.oa&&"/"!=c.charAt(0)&&b.push("/"),b.push(lb(c,"/"==c.charAt(0)?nb:ob,!0));(c=this.a.toString())&&b.push("?",c);(c=this.Oa)&&b.push("#",lb(c,pb));return b.join("")};
  p.resolve=function(b){var c=this.clone();"data"===c.sa&&(c=new cb);var d=!!b.sa;d?db(c,b.sa):d=!!b.Xa;d?c.Xa=b.Xa:d=!!b.oa;d?c.oa=b.oa:d=null!=b.tb;var e=b.fa;if(d)hb(c,b.tb);else if(d=!!b.fa){if("/"!=e.charAt(0))if(this.oa&&!this.fa)e="/"+e;else{var f=c.fa.lastIndexOf("/");-1!=f&&(e=c.fa.substr(0,f+1)+e);}if(".."==e||"."==e)e="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){f=0==e.lastIndexOf("/",0);e=e.split("/");for(var g=[],h=0;h<e.length;){var k=e[h++];"."==k?f&&h==e.length&&g.push(""):".."==
  k?((1<g.length||1==g.length&&""!=g[0])&&g.pop(),f&&h==e.length&&g.push("")):(g.push(k),f=!0);}e=g.join("/");}}d?c.fa=e:d=""!==b.a.toString();d?ib(c,b.a.clone()):d=!!b.Oa;d&&(c.Oa=b.Oa);return c};p.clone=function(){return new cb(this)};function db(b,c,d){b.sa=d?jb(c,!0):c;b.sa&&(b.sa=b.sa.replace(/:$/,""));}function hb(b,c){if(c){c=Number(c);if(isNaN(c)||0>c)throw Error("Bad port number "+c);b.tb=c;}else b.tb=null;}function ib(b,c,d){c instanceof kb?b.a=c:(d||(c=lb(c,qb)),b.a=new kb(c));}
  function jb(b,c){return b?c?decodeURI(b):decodeURIComponent(b):""}function lb(b,c,d){return "string"==typeof b?(b=encodeURI(b).replace(c,rb),d&&(b=b.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b):null}function rb(b){b=b.charCodeAt(0);return "%"+(b>>4&15).toString(16)+(b&15).toString(16)}var mb=/[#\/\?@]/g,ob=/[#\?:]/g,nb=/[#\?]/g,qb=/[#\?@]/g,pb=/#/g;function kb(b){this.a=b||null;}p=kb.prototype;p.ea=null;p.Xb=null;
  p.add=function(b,c){if(!this.ea&&(this.ea={},this.Xb=0,this.a))for(var d=this.a.split("&"),e=0;e<d.length;e++){var f=d[e].indexOf("="),g=null;if(0<=f){var h=d[e].substring(0,f);g=d[e].substring(f+1);}else h=d[e];h=decodeURIComponent(h.replace(/\+/g," "));g=g||"";this.add(h,decodeURIComponent(g.replace(/\+/g," ")));}this.a=null;(d=this.ea.hasOwnProperty(b)&&this.ea[b])||(this.ea[b]=d=[]);d.push(c);this.Xb++;return this};
  p.toString=function(){if(this.a)return this.a;if(!this.ea)return "";var b=[],c;for(c in this.ea)for(var d=encodeURIComponent(c),e=this.ea[c],f=0;f<e.length;f++){var g=d;""!==e[f]&&(g+="="+encodeURIComponent(e[f]));b.push(g);}return this.a=b.join("&")};p.clone=function(){var b=new kb;b.a=this.a;if(this.ea){var c={},d;for(d in this.ea)c[d]=this.ea[d].concat();b.ea=c;b.Xb=this.Xb;}return b};function sb(b){this.b=b;this.a=null;}sb.prototype.O=function(b){var c=this;this.stop();var d=!0,e=null;this.a=function(){window.clearTimeout(e);d=!1;};e=window.setTimeout(function(){d&&c.b();},1E3*b);return this};sb.prototype.stop=function(){this.a&&(this.a(),this.a=null);};function B(b){this.b=b;this.a=null;}z("shaka.util.Timer",B);B.prototype.oc=function(){this.stop();this.b();return this};B.prototype.tickNow=B.prototype.oc;B.prototype.O=function(b){var c=this;this.stop();this.a=(new sb(function(){c.b();})).O(b);return this};B.prototype.tickAfter=B.prototype.O;B.prototype.Ia=function(b){var c=this;this.stop();this.a=(new sb(function(){c.a.O(b);c.b();})).O(b);return this};B.prototype.tickEvery=B.prototype.Ia;B.prototype.stop=function(){this.a&&(this.a.stop(),this.a=null);};
  B.prototype.stop=B.prototype.stop;function tb(b,c){var d=ub();this.i=null==b.maxAttempts?d.maxAttempts:b.maxAttempts;this.f=null==b.baseDelay?d.baseDelay:b.baseDelay;this.h=null==b.fuzzFactor?d.fuzzFactor:b.fuzzFactor;this.g=null==b.backoffFactor?d.backoffFactor:b.backoffFactor;this.a=0;this.b=this.f;if(this.c=void 0===c?!1:c)this.a=1;}
  function zb(b){return t(function d(){var e,f;return y(d,function(d){switch(d.l){case 1:if(b.a>=b.i)if(b.c)b.a=1,b.b=b.f;else return d["return"](Promise.reject());e=b.a;b.a++;if(0==e)return d["return"]();f=b.b*(1+(2*Math.random()-1)*b.h);return u(d,new Promise(function(b){(new B(b)).O(f/1E3);}),2);case 2:b.b*=b.g,v(d);}})})}function ub(){return {maxAttempts:2,baseDelay:1E3,backoffFactor:2,fuzzFactor:.5,timeout:0}}function D(b,c,d,e){for(var f=[],g=3;g<arguments.length;++g)f[g-3]=arguments[g];this.severity=b;this.category=c;this.code=d;this.data=f;this.handled=!1;}z("shaka.util.Error",D);D.prototype.toString=function(){return "shaka.util.Error "+JSON.stringify(this,null,"  ")};D.Severity={RECOVERABLE:1,CRITICAL:2};D.Category={NETWORK:1,TEXT:2,MEDIA:3,MANIFEST:4,STREAMING:5,DRM:6,PLAYER:7,CAST:8,STORAGE:9};
  D.Code={UNSUPPORTED_SCHEME:1E3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,UNKNOWN_DATA_URI_ENCODING:1005,REQUEST_FILTER_ERROR:1006,RESPONSE_FILTER_ERROR:1007,MALFORMED_TEST_URI:1008,UNEXPECTED_TEST_REQUEST:1009,INVALID_TEXT_HEADER:2E3,INVALID_TEXT_CUE:2001,UNABLE_TO_DETECT_ENCODING:2003,BAD_ENCODING:2004,INVALID_XML:2005,INVALID_MP4_TTML:2007,INVALID_MP4_VTT:2008,UNABLE_TO_EXTRACT_CUE_START_TIME:2009,BUFFER_READ_OUT_OF_BOUNDS:3E3,JS_INTEGER_OVERFLOW:3001,EBML_OVERFLOW:3002,
  EBML_BAD_FLOATING_POINT_SIZE:3003,MP4_SIDX_WRONG_BOX_TYPE:3004,MP4_SIDX_INVALID_TIMESCALE:3005,MP4_SIDX_TYPE_NOT_SUPPORTED:3006,WEBM_CUES_ELEMENT_MISSING:3007,WEBM_EBML_HEADER_ELEMENT_MISSING:3008,WEBM_SEGMENT_ELEMENT_MISSING:3009,WEBM_INFO_ELEMENT_MISSING:3010,WEBM_DURATION_ELEMENT_MISSING:3011,WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:3012,WEBM_CUE_TIME_ELEMENT_MISSING:3013,MEDIA_SOURCE_OPERATION_FAILED:3014,MEDIA_SOURCE_OPERATION_THREW:3015,VIDEO_ERROR:3016,QUOTA_EXCEEDED_ERROR:3017,TRANSMUXING_FAILED:3018,
  UNABLE_TO_GUESS_MANIFEST_TYPE:4E3,DASH_INVALID_XML:4001,DASH_NO_SEGMENT_INFO:4002,DASH_EMPTY_ADAPTATION_SET:4003,DASH_EMPTY_PERIOD:4004,DASH_WEBM_MISSING_INIT:4005,DASH_UNSUPPORTED_CONTAINER:4006,DASH_PSSH_BAD_ENCODING:4007,DASH_NO_COMMON_KEY_SYSTEM:4008,DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:4009,DASH_CONFLICTING_KEY_IDS:4010,UNPLAYABLE_PERIOD:4011,RESTRICTIONS_CANNOT_BE_MET:4012,NO_PERIODS:4014,HLS_PLAYLIST_HEADER_MISSING:4015,INVALID_HLS_TAG:4016,HLS_INVALID_PLAYLIST_HIERARCHY:4017,DASH_DUPLICATE_REPRESENTATION_ID:4018,
  HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:4020,HLS_COULD_NOT_GUESS_MIME_TYPE:4021,HLS_MASTER_PLAYLIST_NOT_PROVIDED:4022,HLS_REQUIRED_ATTRIBUTE_MISSING:4023,HLS_REQUIRED_TAG_MISSING:4024,HLS_COULD_NOT_GUESS_CODECS:4025,HLS_KEYFORMATS_NOT_SUPPORTED:4026,DASH_UNSUPPORTED_XLINK_ACTUATE:4027,DASH_XLINK_DEPTH_LIMIT:4028,HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:4030,CONTENT_UNSUPPORTED_BY_BROWSER:4032,CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM:4033,HLS_AES_128_ENCRYPTION_NOT_SUPPORTED:4034,INVALID_STREAMS_CHOSEN:5005,
  NO_RECOGNIZED_KEY_SYSTEMS:6E3,REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:6001,FAILED_TO_CREATE_CDM:6002,FAILED_TO_ATTACH_TO_VIDEO:6003,INVALID_SERVER_CERTIFICATE:6004,FAILED_TO_CREATE_SESSION:6005,FAILED_TO_GENERATE_LICENSE_REQUEST:6006,LICENSE_REQUEST_FAILED:6007,LICENSE_RESPONSE_REJECTED:6008,ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:6010,NO_LICENSE_SERVER_GIVEN:6012,OFFLINE_SESSION_REMOVED:6013,EXPIRED:6014,LOAD_INTERRUPTED:7E3,OPERATION_ABORTED:7001,NO_VIDEO_ELEMENT:7002,CAST_API_UNAVAILABLE:8E3,NO_CAST_RECEIVERS:8001,
  ALREADY_CASTING:8002,UNEXPECTED_CAST_ERROR:8003,CAST_CANCELED_BY_USER:8004,CAST_CONNECTION_TIMED_OUT:8005,CAST_RECEIVER_APP_UNAVAILABLE:8006,STORAGE_NOT_SUPPORTED:9E3,INDEXED_DB_ERROR:9001,DEPRECATED_OPERATION_ABORTED:9002,REQUESTED_ITEM_NOT_FOUND:9003,MALFORMED_OFFLINE_URI:9004,CANNOT_STORE_LIVE_OFFLINE:9005,STORE_ALREADY_IN_PROGRESS:9006,NO_INIT_DATA_FOR_OFFLINE:9007,LOCAL_PLAYER_INSTANCE_REQUIRED:9008,NEW_KEY_OPERATION_NOT_SUPPORTED:9011,KEY_NOT_FOUND:9012,MISSING_STORAGE_CELL:9013};function G(){var b,c,d=new Promise(function(d,f){b=d;c=f;});d.resolve=b;d.reject=c;return d}G.prototype.resolve=function(){};G.prototype.reject=function(){};function H(b,c){this.promise=b;this.Gd=c;this.a=!1;}z("shaka.util.AbortableOperation",H);function Ab(b){return new H(Promise.reject(b),function(){return Promise.resolve()})}H.failed=Ab;function Bb(){var b=Promise.reject(new D(2,7,7001));b["catch"](function(){});return new H(b,function(){return Promise.resolve()})}H.aborted=Bb;function Cb(b){return new H(Promise.resolve(b),function(){return Promise.resolve()})}H.completed=Cb;
  function Db(b){return new H(b,function(){return b["catch"](function(){})})}H.notAbortable=Db;H.prototype.abort=function(){this.a=!0;return this.Gd()};H.prototype.abort=H.prototype.abort;function Eb(b){return new H(Promise.all(b.map(function(b){return b.promise})),function(){return Promise.all(b.map(function(b){return b.abort()}))})}H.all=Eb;H.prototype["finally"]=function(b){this.promise.then(function(){return b(!0)},function(){return b(!1)});return this};H.prototype["finally"]=H.prototype["finally"];
  H.prototype.T=function(b,c){function d(){f.reject(new D(2,7,7001));return e.abort()}var e=this,f=new G;this.promise.then(function(c){e.a?f.reject(new D(2,7,7001)):b?d=Fb(b,c,f):f.resolve(c);},function(b){c?d=Fb(c,b,f):f.reject(b);});return new H(f,function(){return d()})};H.prototype.chain=H.prototype.T;
  function Fb(b,c,d){try{var e=b(c);if(e&&e.promise&&e.abort)return d.resolve(e.promise),function(){return e.abort()};d.resolve(e);return function(){return Promise.resolve(e).then(function(){})["catch"](function(){})}}catch(f){return d.reject(f),function(){return Promise.resolve()}}}function I(b,c){c=void 0===c?{}:c;for(var d in c)this[d]=c[d];this.defaultPrevented=this.cancelable=this.bubbles=!1;this.timeStamp=window.performance&&window.performance.now?window.performance.now():Date.now();this.type=b;this.isTrusted=!1;this.target=this.currentTarget=null;this.a=!1;}I.prototype.preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0);};I.prototype.stopImmediatePropagation=function(){this.a=!0;};I.prototype.stopPropagation=function(){};function Gb(){this.a={};}p=Gb.prototype;p.push=function(b,c){this.a.hasOwnProperty(b)?this.a[b].push(c):this.a[b]=[c];};p.get=function(b){return (b=this.a[b])?b.slice():null};p.getAll=function(){var b=[],c;for(c in this.a)b.push.apply(b,this.a[c]);return b};p.remove=function(b,c){var d=this.a[b];if(d)for(var e=0;e<d.length;++e)d[e]==c&&(d.splice(e,1),--e);};p.forEach=function(b){for(var c in this.a)b(c,this.a[c]);};function J(){this.xc=new Gb;this.Sb=this;}J.prototype.addEventListener=function(b,c){this.xc.push(b,c);};J.prototype.removeEventListener=function(b,c){this.xc.remove(b,c);};J.prototype.dispatchEvent=function(b){for(var c=this.xc.get(b.type)||[],d=0;d<c.length;++d){b.target=this.Sb;b.currentTarget=this.Sb;var e=c[d];try{e.handleEvent?e.handleEvent(b):e.call(this,b);}catch(f){}if(b.a)break}return b.defaultPrevented};function Ib(b){function c(b){switch(typeof b){case "undefined":case "boolean":case "number":case "string":case "symbol":case "function":return b;default:if(!b||b.buffer&&b.buffer.constructor==ArrayBuffer)return b;if(d.has(b))return null;var e=b.constructor==Array;if(b.constructor!=Object&&!e)return null;d.add(b);var g=e?[]:{},h;for(h in b)g[h]=c(b[h]);e&&(g.length=b.length);return g}}var d=new Set;return c(b)}function Jb(b,c){return "number"===typeof b&&"number"===typeof c&&isNaN(b)&&isNaN(c)?!0:b===c}function Kb(b,c){var d=b.indexOf(c);-1<d&&b.splice(d,1);}function Lb(b,c){var d=0;b.forEach(function(b){d+=c(b)?1:0;});return d}
  function Mb(b,c,d){d||(d=Jb);if(b.length!=c.length)return !1;c=c.slice();var e={};b=r(b);for(var f=b.next();!f.done;e={item:e.item},f=b.next()){e.item=f.value;f=c.findIndex(function(b){return function(c){return d(b.item,c)}}(e));if(-1==f)return !1;c[f]=c[c.length-1];c.pop();}return 0==c.length}function Nb(){this.a=[];}function Ob(b,c){b.a.push(c["finally"](function(){Kb(b.a,c);}));}Nb.prototype.destroy=function(){var b=[];this.a.forEach(function(c){c.promise["catch"](function(){});b.push(c.abort());});this.a=[];return Promise.all(b)};function K(b){J.call(this);this.f=!1;this.g=new Nb;this.a=new Set;this.b=new Set;this.c=b||null;}Ta(K,J);z("shaka.net.NetworkingEngine",K);var Pb={MANIFEST:0,SEGMENT:1,LICENSE:2,APP:3,TIMING:4};K.RequestType=Pb;K.PluginPriority={FALLBACK:1,PREFERRED:2,APPLICATION:3};var Qb={};function Rb(b,c,d){d=d||3;var e=Qb[b];if(!e||d>=e.priority)Qb[b]={priority:d,vf:c};}K.registerScheme=Rb;K.unregisterScheme=function(b){delete Qb[b];};K.prototype.xf=function(b){this.a.add(b);};K.prototype.registerRequestFilter=K.prototype.xf;
  K.prototype.cg=function(b){this.a["delete"](b);};K.prototype.unregisterRequestFilter=K.prototype.cg;K.prototype.se=function(){this.a.clear();};K.prototype.clearAllRequestFilters=K.prototype.se;K.prototype.yf=function(b){this.b.add(b);};K.prototype.registerResponseFilter=K.prototype.yf;K.prototype.dg=function(b){this.b["delete"](b);};K.prototype.unregisterResponseFilter=K.prototype.dg;K.prototype.te=function(){this.b.clear();};K.prototype.clearAllResponseFilters=K.prototype.te;
  function Sb(b,c){return {uris:b,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:c,licenseRequestType:null}}K.prototype.destroy=function(){this.f=!0;this.a.clear();this.b.clear();return this.g.destroy()};K.prototype.destroy=K.prototype.destroy;
  K.prototype.request=function(b,c){var d=this,e=new Tb;if(this.f){var f=Promise.reject(new D(2,7,7001));f["catch"](function(){});return new Ub(f,function(){return Promise.resolve()},e)}c.method=c.method||"GET";c.headers=c.headers||{};c.retryParameters=c.retryParameters?Ib(c.retryParameters):ub();c.uris=Ib(c.uris);f=Vb(this,b,c);var g=f.T(function(){return Wb(d,b,c,new tb(c.retryParameters,!1),0,null,e)}),h=g.T(function(c){return Xb(d,b,c)}),k=Date.now(),l=0;f.promise.then(function(){l=Date.now()-k;},
  function(){});var m=0;g.promise.then(function(){m=Date.now();},function(){});f=h.T(function(c){var e=Date.now()-m,f=c.response;f.timeMs+=l;f.timeMs+=e;c.Ve||!d.c||f.fromCache||1!=b||d.c(f.timeMs,f.data.byteLength);return f},function(b){b&&(b.severity=2);throw b;});f=new Ub(f.promise,f.Gd,e);Ob(this.g,f);return f};K.prototype.request=K.prototype.request;
  function Vb(b,c,d){var e=Cb(void 0),f={};b=r(b.a);for(var g=b.next();!g.done;f={ad:f.ad},g=b.next())f.ad=g.value,e=e.T(function(b){return function(){return b.ad(c,d)}}(f));return e.T(void 0,function(b){if(b&&7001==b.code)throw b;throw new D(2,1,1006,b);})}
  function Wb(b,c,d,e,f,g,h){var k=new cb(d.uris[f]),l=k.sa,m=!1;l||(l=location.protocol,l=l.slice(0,-1),db(k,l),d.uris[f]=k.toString());var n=(l=Qb[l])?l.vf:null;if(!n)return Ab(new D(2,1,1E3,k));var q;return Db(zb(e)).T(function(){if(b.f)return Bb();q=Date.now();return n(d.uris[f],d,c,function(d,e,f){b.c&&1==c&&(b.c(d,e),m=!0,h.a=f);})}).T(function(b){void 0==b.timeMs&&(b.timeMs=Date.now()-q);return {response:b,Ve:m}},function(k){if(k&&7001==k.code)throw k;if(b.f)return Bb();if(k&&1==k.severity)return b.dispatchEvent(new I("retry",
  {error:k instanceof D?k:null})),f=(f+1)%d.uris.length,Wb(b,c,d,e,f,k,h);throw k||g;})}function Xb(b,c,d){var e=Cb(void 0);b=r(b.b);for(var f=b.next();!f.done;f=b.next())e=e.T(f.value.bind(null,c,d.response));return e.T(function(){return d},function(b){if(b&&7001==b.code)throw b;var c=2;b instanceof D&&(c=b.severity);throw new D(c,1,1007,b);})}function Tb(){this.a=0;}K.NumBytesRemainingClass=Tb;function Ub(b,c,d){H.call(this,b,c);this.b=d;}var Yb=Ub;Yb.prototype=ma(H.prototype);
  Yb.prototype.constructor=Yb;if(sa)sa(Yb,H);else for(var Zb in H)if("prototype"!=Zb)if(Object.defineProperties){var $b=Object.getOwnPropertyDescriptor(H,Zb);$b&&Object.defineProperty(Yb,Zb,$b);}else Yb[Zb]=H[Zb];Yb.ag=H.prototype;K.PendingRequest=Ub;Ub.all=Eb;Ub.notAbortable=Db;Ub.completed=Cb;Ub.aborted=Bb;Ub.failed=Ab;function ac(){this.b=new Gb;}ac.prototype.a=function(){bc(this);this.b=null;};function L(b,c,d,e){b.b&&(c=new cc(c,d,e),b.b.push(d,c));}function dc(b,c,d,e){function f(g){b.ma(c,d,f);e(g);}L(b,c,d,f);}ac.prototype.ma=function(b,c,d){if(this.b)for(var e=this.b.get(c)||[],f=0;f<e.length;++f){var g=e[f];g.target!=b||d!=g.listener&&d||(g.ma(),this.b.remove(c,g));}};function bc(b){if(b.b){for(var c=b.b.getAll(),d=0;d<c.length;++d)c[d].ma();b.b.a={};}}
  function cc(b,c,d){this.target=b;this.type=c;this.listener=d;this.target.addEventListener(c,d,!1);}cc.prototype.ma=function(){this.target.removeEventListener(this.type,this.listener,!1);this.listener=this.target=null;};function ec(b,c){for(var d=[],e=r(b),f=e.next();!f.done;f=e.next())d.push(c(f.value));return d}function fc(b,c){for(var d=r(b),e=d.next();!e.done;e=d.next())if(!c(e.value))return !1;return !0}function gc(b){var c=new Map;Object.keys(b).forEach(function(d){c.set(d,b[d]);});return c}function hc(b){var c={};b.forEach(function(b,e){c[e]=b;});return c}function ic(b,c){var d=b;c&&(d+='; codecs="'+c+'"');return d}function jc(b){var c=[b.mimeType];kc.forEach(function(d,e){var f=b[e];f&&c.push(d+'="'+f+'"');});return c.join(";")}function lc(b){b=b.split(".");var c=b[0];b.pop();return [c,b.join(".")]}var kc=(new Map).set("codecs","codecs").set("frameRate","framerate").set("bandwidth","bitrate").set("width","width").set("height","height").set("channelsCount","channels");function mc(){return window.MediaSource&&MediaSource.isTypeSupported?!0:!1}function nc(b){return ""!=oc().canPlayType(b)}function pc(b){return (navigator.userAgent||"").includes(b)}function oc(){if(qc)return qc;rc||(rc=new B(function(){qc=null;}));(qc=document.querySelector("video")||document.querySelector("audio"))||(qc=document.createElement("video"));rc.O(1);return qc}var rc=null,qc=null;function sc(b){if(!b)return "";b=new Uint8Array(b);239==b[0]&&187==b[1]&&191==b[2]&&(b=b.subarray(3));b=escape(tc(b));try{return decodeURIComponent(b)}catch(c){throw new D(2,2,2004);}}z("shaka.util.StringUtils.fromUTF8",sc);
  function uc(b,c,d){if(!b)return "";if(!d&&0!=b.byteLength%2)throw new D(2,2,2004);if(b instanceof ArrayBuffer)var e=b;else d=new Uint8Array(b.byteLength),d.set(new Uint8Array(b)),e=d.buffer;b=Math.floor(b.byteLength/2);d=new Uint16Array(b);e=new DataView(e);for(var f=0;f<b;f++)d[f]=e.getUint16(2*f,c);return tc(d)}z("shaka.util.StringUtils.fromUTF16",uc);
  function xc(b){var c=new Uint8Array(b);if(239==c[0]&&187==c[1]&&191==c[2])return sc(c);if(254==c[0]&&255==c[1])return uc(c.subarray(2),!1);if(255==c[0]&&254==c[1])return uc(c.subarray(2),!0);var d=function(b,c){return b.byteLength<=c||32<=b[c]&&126>=b[c]}.bind(null,c);if(0==c[0]&&0==c[2])return uc(b,!1);if(0==c[1]&&0==c[3])return uc(b,!0);if(d(0)&&d(1)&&d(2)&&d(3))return sc(b);throw new D(2,2,2003);}z("shaka.util.StringUtils.fromBytesAutoDetect",xc);
  function yc(b){b=encodeURIComponent(b);b=unescape(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c.buffer}z("shaka.util.StringUtils.toUTF8",yc);function zc(b,c){for(var d=new Uint8Array(2*b.length),e=new DataView(d.buffer),f=0;f<b.length;++f)e.setUint16(2*f,b.charCodeAt(f),c);return d.buffer}z("shaka.util.StringUtils.toUTF16",zc);function tc(b){for(var c="",d=0;d<b.length;d+=16E3)c+=String.fromCharCode.apply(null,b.subarray(d,d+16E3));return c}function Ac(b,c){var d=tc(b);c=void 0==c?!0:c;d=window.btoa(d).replace(/\+/g,"-").replace(/\//g,"_");return c?d:d.replace(/=*$/,"")}z("shaka.util.Uint8ArrayUtils.toBase64",Ac);function Bc(b){b=window.atob(b.replace(/-/g,"+").replace(/_/g,"/"));for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c}z("shaka.util.Uint8ArrayUtils.fromBase64",Bc);function Cc(b){for(var c=new Uint8Array(b.length/2),d=0;d<b.length;d+=2)c[d/2]=window.parseInt(b.substr(d,2),16);return c}
  z("shaka.util.Uint8ArrayUtils.fromHex",Cc);function Dc(b){for(var c="",d=0;d<b.length;++d){var e=b[d].toString(16);1==e.length&&(e="0"+e);c+=e;}return c}z("shaka.util.Uint8ArrayUtils.toHex",Dc);function Ec(b,c){if(!b&&!c)return !0;if(!b||!c||b.length!=c.length)return !1;for(var d=0;d<b.length;++d)if(b[d]!=c[d])return !1;return !0}z("shaka.util.Uint8ArrayUtils.equal",Ec);
  function Fc(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];for(var e=d=0;e<c.length;++e)d+=c[e].length;d=new Uint8Array(d);for(var f=e=0;f<c.length;++f)d.set(c[f],e),e+=c[f].length;return d}z("shaka.util.Uint8ArrayUtils.concat",Fc);function Gc(b){var c=this;this.w=b;this.v=new Set;this.m=this.h=null;this.N=!1;this.a=null;this.i=new ac;this.b=new Map;this.o=[];this.j=new G;this.f=null;this.g=function(d){c.j.reject(d);b.onError(d);};this.ka=new Map;this.S=new Map;this.K=new B(function(){return Hc(c)});this.c=!1;this.W=new G;this.C=!1;this.F=[];this.ja=!1;this.V=(new B(function(){Ic(c);})).Ia(1);this.j["catch"](function(){});}p=Gc.prototype;
  p.destroy=function(){var b=this;return t(function d(){return y(d,function(d){switch(d.l){case 1:if(b.c)return u(d,b.W,0);b.c=!0;return u(d,Jc(b),4);case 4:b.W.resolve(),d.A(0);}})})};
  function Jc(b){return t(function d(){var e;return y(d,function(d){switch(d.l){case 1:return b.i.a(),b.i=null,b.j.reject(),b.V.stop(),b.V=null,b.K.stop(),b.K=null,e=Array.from(b.b.keys()),b.b.clear(),u(d,Promise.all(e.map(function(b){return Promise.resolve().then(function(){return t(function k(){return y(k,function(d){switch(d.l){case 1:return ya(d,2),u(d,Kc(b),4);case 4:Aa(d,0);break;case 2:Da(d),v(d);}})})})})),2);case 2:if(!b.m){d.A(3);break}ya(d,4);return u(d,b.m.setMediaKeys(null),6);case 6:Aa(d,
  5);break;case 4:Da(d);case 5:b.m=null;case 3:b.a=null,b.v.clear(),b.h=null,b.o=[],b.f=null,b.g=null,b.w=null,v(d);}})})}p.configure=function(b){this.f=b;};function Lc(b,c,d){b.o=[];b.C=d;return Mc(b,c)}function Nc(b,c,d){b.o=d;b.C=0<d.length;return Mc(b,c)}
  function Oc(b,c,d,e,f,g){var h=new Map;h.set(c,{audioCapabilities:f,videoCapabilities:g,distinctiveIdentifier:"optional",persistentState:"required",sessionTypes:["persistent-license"],label:c,drmInfos:[{keySystem:c,licenseServerUri:d,distinctiveIdentifierRequired:!1,persistentStateRequired:!0,audioRobustness:"",videoRobustness:"",serverCertificate:e,initData:null,keyIds:null}]});return Pc(b,h)}
  function Mc(b,c){var d=c.some(function(b){return 0<b.drmInfos.length});if(!d){var e=gc(b.f.servers);Qc(c,e);}var f=Rc(b);if(f){var g=r(c);for(e=g.next();!e.done;e=g.next())e.value.drmInfos=[f];}f=r(c);for(e=f.next();!e.done;e=f.next())for(e=r(e.value.drmInfos),g=e.next();!g.done;g=e.next())Sc(g.value,gc(b.f.servers),gc(b.f.advanced||{}));f=r(c);for(e=f.next();!e.done;e=f.next())for(e=e.value,g=e.drmInfos.length;g--;)"com.chromecast.playready"===e.drmInfos[g].keySystem&&e.drmInfos.splice(g,1);e=Tc(b,
  c);if(!e.size)return b.N=!0,Promise.resolve();e=Pc(b,e);return d?e:e["catch"](function(){})}
  p.zb=function(b){var c=this;if(!this.h)return dc(this.i,b,"encrypted",function(){c.g(new D(2,6,6010));}),Promise.resolve();this.m=b;dc(this.i,this.m,"play",function(){for(var b=0;b<c.F.length;b++)Uc(c,c.F[b]);c.ja=!0;c.F=[];});b=this.m.setMediaKeys(this.h);b=b["catch"](function(b){return Promise.reject(new D(2,6,6003,b.message))});var d=Vc(this);return Promise.all([b,d]).then(function(){if(c.c)return Promise.reject();Wc(c);c.a.initData.length||c.o.length||L(c.i,c.m,"encrypted",function(b){return Xc(c,
  b.initDataType,new Uint8Array(b.initData))});})["catch"](function(b){if(!c.c)return Promise.reject(b)})};function Vc(b){return t(function d(){var e;return y(d,function(d){switch(d.l){case 1:if(!(b.h&&b.a&&b.a.serverCertificate&&b.a.serverCertificate.length)){d.A(0);break}ya(d,3);return u(d,b.h.setServerCertificate(b.a.serverCertificate),5);case 5:Aa(d,0);break;case 3:return e=Da(d),d["return"](Promise.reject(new D(2,6,6004,e.message)))}})})}
  function Yc(b,c){return t(function e(){var f,g,h;return y(e,function(e){switch(e.l){case 1:return u(e,Zc(b,c),2);case 2:f=e.s;if(!f)return e["return"]();g=[];if(h=b.b.get(f))h.ua=new G,g.push(h.ua);g.push(f.remove());return u(e,Promise.all(g),0)}})})}function Wc(b){var c=b.a?b.a.initData:[];c.forEach(function(c){return $c(b,c.initDataType,c.initData)});b.o.forEach(function(c){return Zc(b,c)});c.length||b.o.length||b.j.resolve();return b.j}
  function Xc(b,c,d){var e=b.b.values();e=r(e);for(var f=e.next();!f.done;f=e.next())if(Ec(d,f.value.initData))return;$c(b,c,d);}p.keySystem=function(){return this.a?this.a.keySystem:""};function ad(b,c){return pc("Edge/")?!0:b.v.has(c)}function bd(b){b=b.b.keys();b=ec(b,function(b){return b.sessionId});return Array.from(b)}p.bc=function(){var b=Infinity,c=this.b.keys();c=r(c);for(var d=c.next();!d.done;d=c.next())d=d.value,isNaN(d.expiration)||(b=Math.min(b,d.expiration));return b};
  function Tc(b,c){for(var d=new Set,e=r(c),f=e.next();!f.done;f=e.next()){var g=r(f.value.drmInfos);for(f=g.next();!f.done;f=g.next())d.add(f.value);}e=r(d);for(f=e.next();!f.done;f=e.next())Sc(f.value,gc(b.f.servers),gc(b.f.advanced||{}));g=b.C?"required":"optional";var h=b.C?["persistent-license"]:["temporary"];e=new Map;d=r(d);for(f=d.next();!f.done;f=d.next())f=f.value,e.set(f.keySystem,{audioCapabilities:[],videoCapabilities:[],distinctiveIdentifier:"optional",persistentState:g,sessionTypes:h,
  label:f.keySystem,drmInfos:[]});d=r(c);for(f=d.next();!f.done;f=d.next()){f=f.value;g=f.audio;h=f.video;var k=g?ic(g.mimeType,g.codecs):"",l=h?ic(h.mimeType,h.codecs):"",m=r(f.drmInfos);for(f=m.next();!f.done;f=m.next()){f=f.value;var n=e.get(f.keySystem);n.drmInfos.push(f);f.distinctiveIdentifierRequired&&(n.distinctiveIdentifier="required");f.persistentStateRequired&&(n.persistentState="required");g&&n.audioCapabilities.push({robustness:f.audioRobustness||"",contentType:k});h&&n.videoCapabilities.push({robustness:f.videoRobustness||
  "",contentType:l});}}return e}
  function Pc(b,c){if(1==c.size&&c.has(""))return Promise.reject(new D(2,6,6E3));for(var d=r(c.values()),e=d.next();!e.done;e=d.next())e=e.value,0==e.audioCapabilities.length&&delete e.audioCapabilities,0==e.videoCapabilities.length&&delete e.videoCapabilities;var f=d=new G;[!0,!1].forEach(function(b){var d=this;c.forEach(function(c,e){c.drmInfos.some(function(b){return !!b.licenseServerUri})==b&&(f=f["catch"](function(){if(!this.c)return navigator.requestMediaKeySystemAccess(e,[c])}.bind(d)));});}.bind(b));
  f=f["catch"](function(){return Promise.reject(new D(2,6,6001))});f=f.then(function(b){if(this.c)return Promise.reject();this.v.clear();var d=b.getConfiguration(),e=d.videoCapabilities||[],f=r(d.audioCapabilities||[]);for(d=f.next();!d.done;d=f.next())this.v.add(d.value.contentType);e=r(e);for(d=e.next();!d.done;d=e.next())this.v.add(d.value.contentType);e=b.keySystem;d=c.get(b.keySystem);f=[];var g=[],n=[],q=[];cd(d.drmInfos,f,g,n,q);this.a={keySystem:e,licenseServerUri:f[0],distinctiveIdentifierRequired:"required"==
  d.distinctiveIdentifier,persistentStateRequired:"required"==d.persistentState,audioRobustness:d.audioCapabilities?d.audioCapabilities[0].robustness:"",videoRobustness:d.videoCapabilities?d.videoCapabilities[0].robustness:"",serverCertificate:g[0],initData:n,keyIds:q};return this.a.licenseServerUri?b.createMediaKeys():Promise.reject(new D(2,6,6012,this.a.keySystem))}.bind(b)).then(function(b){if(this.c)return Promise.reject();this.h=b;this.N=!0;}.bind(b))["catch"](function(b){if(!this.c)return this.a=
  null,this.v.clear(),b instanceof D?Promise.reject(b):Promise.reject(new D(2,6,6002,b.message))}.bind(b));d.reject();return f}
  function Rc(b){b=gc(b.f.clearKeys);if(0==b.size)return null;var c=[],d=[];b.forEach(function(b,e){var f=Cc(e),g=Cc(b);f={kty:"oct",kid:Ac(f,!1),k:Ac(g,!1)};c.push(f);d.push(f.kid);});b=JSON.stringify({keys:c});var e=JSON.stringify({kids:d});e=[{initData:new Uint8Array(yc(e)),initDataType:"keyids"}];return {keySystem:"org.w3.clearkey",licenseServerUri:"data:application/json;base64,"+window.btoa(b),distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,
  initData:e,keyIds:[]}}
  function Zc(b,c){try{var d=b.h.createSession("persistent-license");}catch(g){var e=new D(2,6,6005,g.message);b.g(e);return Promise.reject(e)}L(b.i,d,"message",b.Od.bind(b));L(b.i,d,"keystatuseschange",b.Md.bind(b));var f={initData:null,loaded:!1,Uc:Infinity,ua:null};b.b.set(d,f);return d.load(c).then(function(b){if(this.c)return Promise.reject();if(b)return f.loaded=!0,dd(this)&&this.j.resolve(),d;this.b["delete"](d);this.g(new D(2,6,6013));}.bind(b),function(b){this.c||(this.b["delete"](d),this.g(new D(2,
  6,6005,b.message)));}.bind(b))}
  function $c(b,c,d){try{var e=b.C?b.h.createSession("persistent-license"):b.h.createSession();}catch(f){b.g(new D(2,6,6005,f.message));return}L(b.i,e,"message",b.Od.bind(b));L(b.i,e,"keystatuseschange",b.Md.bind(b));b.b.set(e,{initData:d,loaded:!1,Uc:Infinity,ua:null});e.generateRequest(c,d.buffer)["catch"](function(c){if(!b.c){b.b["delete"](e);if(c.errorCode&&c.errorCode.systemCode){var d=c.errorCode.systemCode;0>d&&(d+=Math.pow(2,32));d="0x"+d.toString(16);}b.g(new D(2,6,6006,c.message,c,d));}});}
  p.Od=function(b){this.f.delayLicenseRequestUntilPlayed&&this.m.paused&&!this.ja?this.F.push(b):Uc(this,b);};
  function Uc(b,c){var d=c.target,e=b.b.get(d),f=b.a.licenseServerUri,g=b.f.advanced[b.a.keySystem];"individualization-request"==c.messageType&&g&&g.individualizationServer&&(f=g.individualizationServer);f=Sb([f],b.f.retryParameters);f.body=c.message;f.method="POST";f.licenseRequestType=c.messageType;"com.microsoft.playready"!=b.a.keySystem&&"com.chromecast.playready"!=b.a.keySystem||ed(f);b.a.keySystem.startsWith("com.apple.fps")&&fd(f);b.w.nb.request(2,f).promise.then(function(b){if(this.c)return Promise.reject();
  this.a.keySystem.startsWith("com.apple.fps")&&gd(b);return d.update(b.data).then(function(){var b=this;this.w.onEvent(new I("drmsessionupdate"));e&&(e.ua&&e.ua.resolve(),(new B(function(){e.loaded=!0;dd(b)&&b.j.resolve();})).O(hd));}.bind(this))}.bind(b),function(b){this.c||(b=new D(2,6,6007,b),this.g(b),e&&e.ua&&e.ua.reject(b));}.bind(b))["catch"](function(b){this.c||(b=new D(2,6,6008,b.message),this.g(b),e&&e.ua&&e.ua.reject(b));}.bind(b));}
  function ed(b){var c=uc(b.body,!0,!0);if(c.includes("PlayReadyKeyMessage")){c=(new DOMParser).parseFromString(c,"application/xml");for(var d=c.getElementsByTagName("HttpHeader"),e=0;e<d.length;++e)b.headers[d[e].querySelector("name").textContent]=d[e].querySelector("value").textContent;b.body=Bc(c.querySelector("Challenge").textContent).buffer;}else b.headers["Content-Type"]="text/xml; charset=utf-8";}
  function fd(b){var c=new Uint8Array(b.body);c="spc="+Ac(c);b.headers["Content-Type"]="application/x-www-form-urlencoded";b.body=yc(c);}function gd(b){try{var c=sc(b.data);}catch(d){return}c=c.trim();"<ckc>"===c.substr(0,5)&&"</ckc>"===c.substr(-6)&&(c=c.slice(5,-6));try{c=JSON.parse(c).ckc;}catch(d){}b.data=Bc(c).buffer;}
  p.Md=function(b){b=b.target;var c=this.b.get(b),d=!1;b.keyStatuses.forEach(function(b,e){if("string"==typeof e){var f=e;e=b;b=f;}if("com.microsoft.playready"==this.a.keySystem&&16==e.byteLength&&!pc("Tizen")){f=new DataView(e);var g=f.getUint32(0,!0),l=f.getUint16(4,!0),m=f.getUint16(6,!0);f.setUint32(0,g,!1);f.setUint16(4,l,!1);f.setUint16(6,m,!1);}"com.microsoft.playready"==this.a.keySystem&&"status-pending"==b&&(b="usable");"status-pending"!=b&&(c.loaded=!0);"expired"==b&&(d=!0);f=Dc(new Uint8Array(e));
  this.ka.set(f,b);}.bind(this));var e=b.expiration-Date.now();(0>e||d&&1E3>e)&&c&&!c.ua&&(this.b["delete"](b),b.close()["catch"](function(){}));dd(this)&&(this.j.resolve(),this.K.O(id));};function Hc(b){var c=b.ka,d=b.S;d.clear();c.forEach(function(b,c){return d.set(c,b)});c=Array.from(d.values());c.length&&c.every(function(b){return "expired"==b})&&b.g(new D(2,6,6014));b.w.gc(hc(d));}
  function jd(){function b(b){return t(function h(){var c,f,m;return y(h,function(h){switch(h.l){case 1:return ya(h,2),u(h,navigator.requestMediaKeySystemAccess(b,d),4);case 4:return c=h.s,m=(f=c.getConfiguration().sessionTypes)?f.includes("persistent-license"):!1,pc("Tizen 3")&&(m=!1),e.set(b,{persistentState:m}),u(h,c.createMediaKeys(),5);case 5:Aa(h,0);break;case 2:Da(h),e.set(b,null),v(h);}})})}var c=[{contentType:'video/mp4; codecs="avc1.42E01E"'},{contentType:'video/webm; codecs="vp8"'}],d=[{videoCapabilities:c,
  persistentState:"required",sessionTypes:["persistent-license"]},{videoCapabilities:c}],e=new Map;c="org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.3_0 com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").map(function(c){return b(c)});return Promise.all(c).then(function(){return hc(e)})}
  function kd(b,c){var d=c.audio,e=c.video;if(d&&d.encrypted&&!ad(b,ic(d.mimeType,d.codecs))||e&&e.encrypted&&!ad(b,ic(e.mimeType,e.codecs)))return !1;var f=b.keySystem();return 0==c.drmInfos.length||c.drmInfos.some(function(b){return b.keySystem==f})}
  function ld(b,c){if(!b.length)return c;if(!c.length)return b;for(var d=[],e=0;e<b.length;e++)for(var f=0;f<c.length;f++)if(b[e].keySystem==c[f].keySystem){var g=b[e];f=c[f];var h=[];h=h.concat(g.initData||[]);h=h.concat(f.initData||[]);var k=[];k=k.concat(g.keyIds);k=k.concat(f.keyIds);d.push({keySystem:g.keySystem,licenseServerUri:g.licenseServerUri||f.licenseServerUri,distinctiveIdentifierRequired:g.distinctiveIdentifierRequired||f.distinctiveIdentifierRequired,persistentStateRequired:g.persistentStateRequired||
  f.persistentStateRequired,videoRobustness:g.videoRobustness||f.videoRobustness,audioRobustness:g.audioRobustness||f.audioRobustness,serverCertificate:g.serverCertificate||f.serverCertificate,initData:h,keyIds:k});break}return d}function Ic(b){b.b.forEach(function(c,d){var e=c.Uc,f=d.expiration;isNaN(f)&&(f=Infinity);f!=e&&(b.w.onExpirationUpdated(d.sessionId,f),c.Uc=f);});}function dd(b){b=b.b.values();return fc(b,function(b){return b.loaded})}
  function Qc(b,c){var d=[];c.forEach(function(b,c){d.push({keySystem:c,licenseServerUri:b,distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:[],keyIds:[]});});for(var e=r(b),f=e.next();!f.done;f=e.next())f.value.drmInfos=d;}
  function cd(b,c,d,e,f){b.forEach(function(b){c.includes(b.licenseServerUri)||c.push(b.licenseServerUri);b.serverCertificate&&(d.some(function(c){return Ec(c,b.serverCertificate)})||d.push(b.serverCertificate));b.initData&&b.initData.forEach(function(b){e.some(function(c){return c.keyId&&c.keyId==b.keyId?!0:c.initDataType==b.initDataType&&Ec(c.initData,b.initData)})||e.push(b);});if(b.keyIds)for(var g=0;g<b.keyIds.length;++g)f.includes(b.keyIds[g])||f.push(b.keyIds[g]);});}
  function Sc(b,c,d){if(b.keySystem&&("org.w3.clearkey"!=b.keySystem||!b.licenseServerUri)){c.size&&(c=c.get(b.keySystem)||"",b.licenseServerUri=c);b.keyIds||(b.keyIds=[]);if(d=d.get(b.keySystem))b.distinctiveIdentifierRequired||(b.distinctiveIdentifierRequired=d.distinctiveIdentifierRequired),b.persistentStateRequired||(b.persistentStateRequired=d.persistentStateRequired),b.videoRobustness||(b.videoRobustness=d.videoRobustness),b.audioRobustness||(b.audioRobustness=d.audioRobustness),b.serverCertificate||
  (b.serverCertificate=d.serverCertificate);window.cast&&window.cast.__platform__&&"com.microsoft.playready"==b.keySystem&&(b.keySystem="com.chromecast.playready");}}function Kc(b){return t(function d(){var e;return y(d,function(d){switch(d.l){case 1:return e=new Promise(function(b){(new B(b)).O(md);}),u(d,Promise.race([b.close().then(function(){return !0}),e.then(function(){return !1})]),2);case 2:v(d);}})})}var md=1,hd=5,id=.5;function nd(){this.a=new muxjs.mp4.CaptionParser;this.g=[];this.f={};}nd.prototype.init=function(b){var c=muxjs.mp4.probe;b=new Uint8Array(b);this.g=c.videoTrackIds(b);this.f=c.timescale(b);this.a.init();};nd.prototype.b=function(b,c){var d=new Uint8Array(b);(d=this.a.parse(d,this.g,this.f))&&d.captions&&c(d.captions);this.a.clearParsedCaptions();};nd.prototype.c=function(){this.a.resetCaptionStream();};function od(){}od.prototype.init=function(){};od.prototype.b=function(){};od.prototype.c=function(){};function pd(b){return !b||1==b.length&&1E-6>b.end(0)-b.start(0)?null:b.length?b.end(b.length-1):null}function qd(b,c,d){d=void 0===d?0:d;return !b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0)||c>b.end(b.length-1)?!1:c+d>=b.start(0)}function rd(b,c){if(!b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0))return 0;for(var d=0,e=b.length-1;0<=e&&b.end(e)>c;--e)d+=b.end(e)-Math.max(b.start(e),c);return d}
  function sd(b){if(!b)return [];for(var c=[],d=0;d<b.length;d++)c.push({start:b.start(d),end:b.end(d)});return c}var td={ue:function(b,c){return b.reduce(function(b,c,f){return c["catch"](b.bind(null,f))}.bind(null,c),Promise.reject())},uc:function(b,c){return b.concat(c)},Gb:function(){},Da:function(b){return null!=b}};function ud(b,c){if(0==c.length)return b;var d=c.map(function(b){return new cb(b)});return b.map(function(b){return new cb(b)}).map(function(b){return d.map(b.resolve.bind(b))}).reduce(td.uc,[]).map(function(b){return b.toString()})}function vd(b,c){return {keySystem:b,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:c||[],keyIds:[]}}var wd={La:"video",wb:"audio",na:"text",kg:"application"},xd=1/15;function yd(){this.a=new muxjs.mp4.Transmuxer({keepOriginalTimestamps:!0});this.b=null;this.g=[];this.c=[];this.f=!1;this.a.on("data",this.i.bind(this));this.a.on("done",this.h.bind(this));}yd.prototype.destroy=function(){this.a.dispose();this.a=null;return Promise.resolve()};function zd(b,c){return window.muxjs&&"mp2t"==b.split(";")[0].split("/")[1]?c?MediaSource.isTypeSupported(Bd(c,b)):MediaSource.isTypeSupported(Bd("audio",b))||MediaSource.isTypeSupported(Bd("video",b)):!1}
  function Bd(b,c){var d=c.replace("mp2t","mp4");"audio"==b&&(d=d.replace("video","audio"));var e=/avc1\.(66|77|100)\.(\d+)/.exec(d);if(e){var f="avc1.",g=e[1],h=Number(e[2]);f=("66"==g?f+"4200":"77"==g?f+"4d00":f+"6400")+(h>>4).toString(16);f+=(h&15).toString(16);d=d.replace(e[0],f);}return d}function Cd(b,c){b.f=!0;b.b=new G;b.g=[];b.c=[];var d=new Uint8Array(c);b.a.push(d);b.a.flush();b.f&&b.b.reject(new D(2,3,3018));return b.b}
  yd.prototype.i=function(b){this.c=b.captions;var c=new Uint8Array(b.data.byteLength+b.initSegment.byteLength);c.set(b.initSegment,0);c.set(b.data,b.initSegment.byteLength);this.g.push(c);};yd.prototype.h=function(){var b={data:Fc.apply(null,this.g),captions:this.c};this.b.resolve(b);this.f=!1;};function Dd(b,c,d){this.startTime=b;this.direction=Ed;this.endTime=c;this.payload=d;this.region=new Fd;this.position=null;this.positionAlign=Gd;this.size=100;this.textAlign=Hd;this.writingMode=Id;this.lineInterpretation=Jd;this.line=null;this.lineHeight="";this.lineAlign=Kd;this.displayAlign=Ld;this.backgroundColor=this.color="";this.backgroundImage=null;this.fontSize="";this.fontWeight=Md;this.fontStyle=Nd;this.fontFamily="";this.textDecoration=[];this.wrapLine=!0;this.id="";}z("shaka.text.Cue",Dd);
  var Gd="auto";Dd.positionAlign={LEFT:"line-left",RIGHT:"line-right",CENTER:"center",AUTO:Gd};var Hd="center",Od={LEFT:"left",RIGHT:"right",CENTER:Hd,START:"start",END:"end"};Dd.textAlign=Od;var Ld="after",Pd={BEFORE:"before",CENTER:"center",AFTER:Ld};Dd.displayAlign=Pd;var Ed="ltr";Dd.direction={HORIZONTAL_LEFT_TO_RIGHT:Ed,HORIZONTAL_RIGHT_TO_LEFT:"rtl"};var Id="horizontal-tb";Dd.writingMode={HORIZONTAL_TOP_TO_BOTTOM:Id,VERTICAL_LEFT_TO_RIGHT:"vertical-lr",VERTICAL_RIGHT_TO_LEFT:"vertical-rl"};
  var Jd=0;Dd.lineInterpretation={LINE_NUMBER:Jd,PERCENTAGE:1};var Kd="start",Qd={CENTER:"center",START:Kd,END:"end"};Dd.lineAlign=Qd;var Md=400;Dd.fontWeight={NORMAL:Md,BOLD:700};var Nd="normal",Rd={NORMAL:Nd,ITALIC:"italic",OBLIQUE:"oblique"};Dd.fontStyle=Rd;Dd.textDecoration={UNDERLINE:"underline",LINE_THROUGH:"lineThrough",OVERLINE:"overline"};
  function Fd(){this.id="";this.regionAnchorY=this.regionAnchorX=this.viewportAnchorY=this.viewportAnchorX=0;this.height=this.width=100;this.viewportAnchorUnits=this.widthUnits=this.heightUnits=Sd;this.scroll=Td;}z("shaka.text.CueRegion",Fd);var Sd=1;Fd.units={PX:0,PERCENTAGE:Sd,LINES:2};var Td="";Fd.scrollMode={NONE:Td,UP:"up"};function Ud(b){this.g=null;this.c=b;this.f=this.m=0;this.h=Infinity;this.b=this.a=null;this.j="";this.i=new Map;}var Vd={};z("shaka.text.TextEngine.registerParser",function(b,c){Vd[b]=c;});z("shaka.text.TextEngine.unregisterParser",function(b){delete Vd[b];});function Wd(b){return Vd[b]||window.muxjs&&"application/cea-608"==b?!0:!1}Ud.prototype.destroy=function(){this.c=this.g=null;this.i.clear();return Promise.resolve()};function Xd(b,c){"application/cea-608"!=c&&(b.g=new Vd[c]);}
  Ud.prototype.Hc=function(b){var c={periodStart:0,segmentStart:null,segmentEnd:0};try{return this.g.parseMedia(new Uint8Array(b),c)[0].startTime}catch(d){throw new D(2,2,2009,d);}};
  function Yd(b,c,d,e){return Promise.resolve().then(function(){if(this.g&&this.c)if(null==d||null==e)this.g.parseInit(new Uint8Array(c));else{var b={periodStart:this.m,segmentStart:d,segmentEnd:e};b=this.g.parseMedia(new Uint8Array(c),b).filter(function(b){return b.startTime>=this.f&&b.startTime<this.h}.bind(this));this.c.append(b);null==this.a&&(this.a=Math.max(d,this.f));this.b=Math.min(e,this.h);}}.bind(b))}
  Ud.prototype.remove=function(b,c){return Promise.resolve().then(function(){!this.c||!this.c.remove(b,c)||null==this.a||c<=this.a||b>=this.b||(b<=this.a&&c>=this.b?this.a=this.b=null:b<=this.a&&c<this.b?this.a=c:b>this.a&&c>=this.b&&(this.b=b));}.bind(this))};Ud.prototype.ne=function(b){this.c.append(b);};Ud.prototype.appendCues=Ud.prototype.ne;
  Ud.prototype.nc=function(b,c){this.j=b;var d=this.i.get(b);if(d)for(var e=r(d.keys()),f=e.next();!f.done;f=e.next())if(f=d.get(f.value))f=f.filter(function(b){return b.endTime<=c}),this.c.append(f);};Ud.prototype.setSelectedClosedCaptionId=Ud.prototype.nc;
  function Zd(b,c,d,e,f){var g=d+" "+e,h=new Map;c=r(c);for(var k=c.next();!k.done;k=c.next()){var l=k.value;k=l.stream;h.has(k)||h.set(k,new Map);h.get(k).has(g)||h.get(k).set(g,[]);l.startTime+=f;l.endTime+=f;l.startTime>=b.f&&l.startTime<b.h&&(l=new Dd(l.startTime,l.endTime,l.text),h.get(k).get(g).push(l),k==b.j&&b.c.append([l]));}f=r(h.keys());for(g=f.next();!g.done;g=f.next())for(g=g.value,b.i.has(g)||b.i.set(g,new Map),c=r(h.get(g).keys()),k=c.next();!k.done;k=c.next())k=k.value,l=h.get(g).get(k),
  b.i.get(g).set(k,l);b.a=null==b.a?Math.max(d,b.f):Math.min(b.a,Math.max(d,b.f));b.b=Math.max(b.b,Math.min(e,b.h));}function $d(b,c,d){this.f=b;this.h=d;this.b={};this.a=null;this.c={};this.i=new ac;this.v=!1;this.j={};this.m=c;b=this.o=new G;c=new MediaSource;dc(this.i,c,"sourceopen",b.resolve);this.f.src=ae(c);this.g=c;}var ae=window.URL.createObjectURL;function be(b){var c=ic(b.mimeType,b.codecs),d=jc(b);return Wd(c)||MediaSource.isTypeSupported(d)||zd(c,b.type)}p=$d.prototype;
  p.destroy=function(){var b=this;this.v=!0;var c=[],d;for(d in this.c){var e=this.c[d],f=e[0];this.c[d]=e.slice(0,1);f&&c.push(f.p["catch"](td.Gb));for(f=1;f<e.length;++f)e[f].p["catch"](td.Gb),e[f].p.reject();}this.a&&c.push(this.a.destroy());this.h&&c.push(this.h.destroy());for(var g in this.j)c.push(this.j[g].destroy());return Promise.all(c).then(function(){b.i&&(b.i.a(),b.i=null);b.f&&(b.f.removeAttribute("src"),b.f.load(),b.f=null);b.g=null;b.a=null;b.h=null;b.b={};b.j={};b.m=null;b.c={};})};
  p.init=function(b,c){var d=this;return t(function f(){var g;return y(f,function(f){switch(f.l){case 1:return g=wd,u(f,d.o,2);case 2:b.forEach(function(b,f){var h=ic(b.mimeType,b.codecs);f==g.na?ce(d,h):(!c&&MediaSource.isTypeSupported(h)||!zd(h,f)||(d.j[f]=new yd,h=Bd(f,h)),h=d.g.addSourceBuffer(h),L(d.i,h,"error",d.Tf.bind(d,f)),L(d.i,h,"updateend",d.qb.bind(d,f)),d.b[f]=h,d.c[f]=[]);}),v(f);}})})};function ce(b,c){b.a||(b.a=new Ud(b.h));Xd(b.a,c);}
  function de(b,c){if("text"==c)var d=b.a.a;else d=ee(b,c),d=!d||1==d.length&&1E-6>d.end(0)-d.start(0)?null:1==d.length&&0>d.start(0)?0:d.length?d.start(0):null;return d}function fe(b,c){return "text"==c?b.a.b:pd(ee(b,c))}function ge(b,c,d){if("text"==c)return b=b.a,null==b.b||b.b<d?0:b.b-Math.max(d,b.a);b=ee(b,c);return rd(b,d)}
  p.Ec=function(b){b.total=sd(this.f.buffered);b.audio=sd(ee(this,"audio"));b.video=sd(ee(this,"video"));b.text=[];if(this.a){var c=this.a.a,d=this.a.b;null!=c&&null!=d&&b.text.push({start:c,end:d});}};function ee(b,c){try{return b.b[c].buffered}catch(d){return null}}
  function he(b,c,d,e,f,g){if("text"==c)return Yd(b.a,d,e,f);if(b.j[c])return Cd(b.j[c],d).then(function(b){this.a||ce(this,"text/vtt");b.captions&&Zd(this.a,b.captions,e,f,this.b.video.timestampOffset);return ie(this,c,this.be.bind(this,c,b.data.buffer))}.bind(b));g&&window.muxjs&&(b.a||ce(b,"text/vtt"),null==e&&null==f?b.m.init(d):b.m.b(d,function(c){c.length&&Zd(b.a,c,e,f,b.b.video.timestampOffset);}));return ie(b,c,b.be.bind(b,c,d))}p.nc=function(b){var c=fe(this,"video")||0;this.a.nc(b,c);};
  p.remove=function(b,c,d){return "text"==b?this.a.remove(c,d):ie(this,b,this.ce.bind(this,b,c,d))};function je(b,c){if("text"==c){if(!b.a)return Promise.resolve();b.m.c();return b.a.remove(0,Infinity)}return ie(b,c,b.ce.bind(b,c,0,b.g.duration))}p.flush=function(b){return "text"==b?Promise.resolve():ie(this,b,this.ye.bind(this,b))};
  function ke(b,c,d,e,f){return "text"==c?(b.a.m=d,b=b.a,b.f=e,b.h=f,Promise.resolve()):Promise.all([ie(b,c,b.le.bind(b,c)),ie(b,c,b.Of.bind(b,c,d)),ie(b,c,b.Lf.bind(b,c,e,f))])}p.endOfStream=function(b){return le(this,function(){b?this.g.endOfStream(b):this.g.endOfStream();}.bind(this))};p.ta=function(b){return le(this,function(){this.g.duration=b;}.bind(this))};p.Y=function(){return this.g.duration};p.be=function(b,c){this.b[b].appendBuffer(c);};
  p.ce=function(b,c,d){d<=c?this.qb(b):this.b[b].remove(c,d);};p.le=function(b){var c=this.b[b].appendWindowStart,d=this.b[b].appendWindowEnd;this.b[b].abort();this.b[b].appendWindowStart=c;this.b[b].appendWindowEnd=d;this.qb(b);};p.ye=function(b){this.f.currentTime-=.001;this.qb(b);};p.Of=function(b,c){0>c&&(c+=.001);this.b[b].timestampOffset=c;this.qb(b);};p.Lf=function(b,c,d){this.b[b].appendWindowStart=0;this.b[b].appendWindowEnd=d;this.b[b].appendWindowStart=c;this.qb(b);};
  p.Tf=function(b){this.c[b][0].p.reject(new D(2,3,3014,this.f.error?this.f.error.code:0));};p.qb=function(b){var c=this.c[b][0];c&&(c.p.resolve(),me(this,b));};function ie(b,c,d){if(b.v)return Promise.reject();d={start:d,p:new G};b.c[c].push(d);if(1==b.c[c].length)try{d.start();}catch(e){"QuotaExceededError"==e.name?d.p.reject(new D(2,3,3017,c)):d.p.reject(new D(2,3,3015,e)),me(b,c);}return d.p}
  function le(b,c){if(b.v)return Promise.reject();var d=[],e;for(e in b.b){var f=new G,g={start:function(b){b.resolve();}.bind(null,f),p:f};b.c[e].push(g);d.push(f);1==b.c[e].length&&g.start();}return Promise.all(d).then(function(){try{c();}catch(l){var b=Promise.reject(new D(2,3,3015,l));}for(var d in this.b)me(this,d);return b}.bind(b),function(){return Promise.reject()}.bind(b))}function me(b,c){b.c[c].shift();var d=b.c[c][0];if(d)try{d.start();}catch(e){d.p.reject(new D(2,3,3015,e)),me(b,c);}}function ne(b,c){b=M(b);c=M(c);return b.split("-")[0]==c.split("-")[0]}function oe(b,c){b=M(b);c=M(c);var d=b.split("-"),e=c.split("-");return d[0]==e[0]&&1==d.length&&2==e.length}function M(b){var c=b.split("-");b=c[0]||"";c=c[1]||"";b=b.toLowerCase();b=pe.get(b)||b;return (c=c.toUpperCase())?b+"-"+c:b}function qe(b){return b.language?M(b.language):b.audio&&b.audio.language?M(b.audio.language):b.video&&b.video.language?M(b.video.language):"und"}
  function re(b,c){for(var d=M(b),e=new Set,f=r(c),g=f.next();!g.done;g=f.next())e.add(M(g.value));f=r(e);for(g=f.next();!g.done;g=f.next())if(g=g.value,g==d)return g;f=r(e);for(g=f.next();!g.done;g=f.next())if(g=g.value,oe(g,d))return g;f=r(e);for(g=f.next();!g.done;g=f.next()){var h=g=g.value,k=d;h=M(h);k=M(k);h=h.split("-");k=k.split("-");if(2==h.length&&2==k.length&&h[0]==k[0])return g}e=r(e);for(g=e.next();!g.done;g=e.next())if(f=g.value,oe(d,f))return f;return null}
  var pe=new Map([["aar","aa"],["abk","ab"],["afr","af"],["aka","ak"],["alb","sq"],["amh","am"],["ara","ar"],["arg","an"],["arm","hy"],["asm","as"],["ava","av"],["ave","ae"],["aym","ay"],["aze","az"],["bak","ba"],["bam","bm"],["baq","eu"],["bel","be"],["ben","bn"],["bih","bh"],["bis","bi"],["bod","bo"],["bos","bs"],["bre","br"],["bul","bg"],["bur","my"],["cat","ca"],["ces","cs"],["cha","ch"],["che","ce"],["chi","zh"],["chu","cu"],["chv","cv"],["cor","kw"],["cos","co"],["cre","cr"],["cym","cy"],["cze",
  "cs"],["dan","da"],["deu","de"],["div","dv"],["dut","nl"],["dzo","dz"],["ell","el"],["eng","en"],["epo","eo"],["est","et"],["eus","eu"],["ewe","ee"],["fao","fo"],["fas","fa"],["fij","fj"],["fin","fi"],["fra","fr"],["fre","fr"],["fry","fy"],["ful","ff"],["geo","ka"],["ger","de"],["gla","gd"],["gle","ga"],["glg","gl"],["glv","gv"],["gre","el"],["grn","gn"],["guj","gu"],["hat","ht"],["hau","ha"],["heb","he"],["her","hz"],["hin","hi"],["hmo","ho"],["hrv","hr"],["hun","hu"],["hye","hy"],["ibo","ig"],["ice",
  "is"],["ido","io"],["iii","ii"],["iku","iu"],["ile","ie"],["ina","ia"],["ind","id"],["ipk","ik"],["isl","is"],["ita","it"],["jav","jv"],["jpn","ja"],["kal","kl"],["kan","kn"],["kas","ks"],["kat","ka"],["kau","kr"],["kaz","kk"],["khm","km"],["kik","ki"],["kin","rw"],["kir","ky"],["kom","kv"],["kon","kg"],["kor","ko"],["kua","kj"],["kur","ku"],["lao","lo"],["lat","la"],["lav","lv"],["lim","li"],["lin","ln"],["lit","lt"],["ltz","lb"],["lub","lu"],["lug","lg"],["mac","mk"],["mah","mh"],["mal","ml"],["mao",
  "mi"],["mar","mr"],["may","ms"],["mkd","mk"],["mlg","mg"],["mlt","mt"],["mon","mn"],["mri","mi"],["msa","ms"],["mya","my"],["nau","na"],["nav","nv"],["nbl","nr"],["nde","nd"],["ndo","ng"],["nep","ne"],["nld","nl"],["nno","nn"],["nob","nb"],["nor","no"],["nya","ny"],["oci","oc"],["oji","oj"],["ori","or"],["orm","om"],["oss","os"],["pan","pa"],["per","fa"],["pli","pi"],["pol","pl"],["por","pt"],["pus","ps"],["que","qu"],["roh","rm"],["ron","ro"],["rum","ro"],["run","rn"],["rus","ru"],["sag","sg"],["san",
  "sa"],["sin","si"],["slk","sk"],["slo","sk"],["slv","sl"],["sme","se"],["smo","sm"],["sna","sn"],["snd","sd"],["som","so"],["sot","st"],["spa","es"],["sqi","sq"],["srd","sc"],["srp","sr"],["ssw","ss"],["sun","su"],["swa","sw"],["swe","sv"],["tah","ty"],["tam","ta"],["tat","tt"],["tel","te"],["tgk","tg"],["tgl","tl"],["tha","th"],["tib","bo"],["tir","ti"],["ton","to"],["tsn","tn"],["tso","ts"],["tuk","tk"],["tur","tr"],["twi","tw"],["uig","ug"],["ukr","uk"],["urd","ur"],["uzb","uz"],["ven","ve"],["vie",
  "vi"],["vol","vo"],["wel","cy"],["wln","wa"],["wol","wo"],["xho","xh"],["yid","yi"],["yor","yo"],["zha","za"],["zho","zh"],["zul","zu"]]);function se(b,c,d){function e(b,c,d){return b>=c&&b<=d}var f=b.video;return f&&f.width&&f.height&&!(e(f.width,c.minWidth,Math.min(c.maxWidth,d.width))&&e(f.height,c.minHeight,Math.min(c.maxHeight,d.height))&&e(f.width*f.height,c.minPixels,c.maxPixels))||!e(b.bandwidth,c.minBandwidth,c.maxBandwidth)?!1:!0}function te(b,c,d){var e=!1;b.forEach(function(b){var f=b.allowedByApplication;b.allowedByApplication=se(b,c,d);f!=b.allowedByApplication&&(e=!0);});return e}
  function ue(b,c,d,e){e.variants=e.variants.filter(function(e){if(b&&b.N&&!kd(b,e))return !1;var f=e.audio;e=e.video;return f&&!be(f)||e&&!be(e)||f&&c&&!ve(f,c)||e&&d&&!ve(e,d)?!1:!0});e.textStreams=e.textStreams.filter(function(b){return Wd(ic(b.mimeType,b.codecs))});}function ve(b,c){return b.mimeType!=c.mimeType||b.codecs.split(".")[0]!=c.codecs.split(".")[0]?!1:!0}
  function we(b){var c=b.audio,d=b.video,e=c?c.codecs:null,f=d?d.codecs:null,g=[];f&&g.push(f);e&&g.push(e);var h=[];d&&h.push(d.mimeType);c&&h.push(c.mimeType);h=h[0]||null;var k=[];c&&k.push(c.kind);d&&k.push(d.kind);k=k[0]||null;var l=new Set;c&&c.roles.forEach(function(b){return l.add(b)});d&&d.roles.forEach(function(b){return l.add(b)});b={id:b.id,active:!1,type:"variant",bandwidth:b.bandwidth,language:b.language,label:null,kind:k,width:null,height:null,frameRate:null,mimeType:h,codecs:g.join(", "),
  audioCodec:e,videoCodec:f,primary:b.primary,roles:Array.from(l),audioRoles:null,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:null};d&&(b.videoId=d.id,b.originalVideoId=d.originalId,b.width=d.width||null,b.height=d.height||null,b.frameRate=d.frameRate||null,b.videoBandwidth=d.bandwidth||null);c&&(b.audioId=c.id,b.originalAudioId=c.originalId,b.channelsCount=c.channelsCount,b.audioBandwidth=c.bandwidth||
  null,b.label=c.label,b.audioRoles=c.roles);return b}function xe(b){return {id:b.id,active:!1,type:"text",bandwidth:0,language:b.language,label:b.label,kind:b.kind||null,width:null,height:null,frameRate:null,mimeType:b.mimeType,codecs:b.codecs||null,audioCodec:null,videoCodec:null,primary:b.primary,roles:b.roles,audioRoles:null,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:b.originalId}}
  function ye(b){b.__shaka_id||(b.__shaka_id=ze++);return b.__shaka_id}var ze=0;function Ae(b){return {id:ye(b),active:!1,type:"",bandwidth:0,language:M(b.language),label:b.label,kind:b.kind,width:null,height:null,frameRate:null,mimeType:null,codecs:null,audioCodec:null,videoCodec:null,primary:!1,roles:[],audioRoles:null,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:null}}
  function Be(b){return b.allowedByApplication&&b.allowedByKeySystem}function Ce(b){return b.filter(function(b){return Be(b)})}
  function De(b,c){var d=b.filter(function(b){return b.audio&&b.audio.channelsCount}),e=new Map;d=r(d);for(var f=d.next();!f.done;f=d.next()){f=f.value;var g=f.audio.channelsCount;e.has(g)||e.set(g,[]);e.get(g).push(f);}d=Array.from(e.keys());if(0==d.length)return b;f=d.filter(function(b){return b<=c});return f.length?e.get(Math.max.apply(null,f)):e.get(Math.min.apply(null,d))}
  function Ee(b,c,d){var e=b,f=b.filter(function(b){return b.primary});f.length&&(e=f);var g=e.length?e[0].language:"";e=e.filter(function(b){return b.language==g});if(c){var h=re(M(c),b.map(function(b){return b.language}));h&&(e=b.filter(function(b){return M(b.language)==h}));}if(d){if(b=Fe(e,d),b.length)return b}else if(b=e.filter(function(b){return 0==b.roles.length}),b.length)return b;b=e.map(function(b){return b.roles}).reduce(td.uc,[]);return b.length?Fe(e,b[0]):e}
  function Fe(b,c){return b.filter(function(b){return b.roles.includes(c)})}function Ge(b,c,d){for(var e=0;e<d.length;e++)if(d[e].audio==b&&d[e].video==c)return d[e];return null}function He(b){var c=[];b.audio&&c.push(b.audio);b.video&&c.push(b.video);return c}function N(){this.h=null;this.f=!1;this.b=new Ya;this.c=[];this.i=!1;this.a=this.g=null;}z("shaka.abr.SimpleAbrManager",N);N.prototype.stop=function(){this.h=null;this.f=!1;this.c=[];this.g=null;};N.prototype.stop=N.prototype.stop;N.prototype.init=function(b){this.h=b;};N.prototype.init=N.prototype.init;
  N.prototype.chooseVariant=function(){var b=Ie(this.a.restrictions,this.c),c=this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.c.length&&!b.length&&(b=Ie(null,this.c),b=[b[0]]);for(var d=b[0]||null,e=0;e<b.length;++e){var f=b[e],g=(b[e+1]||{bandwidth:Infinity}).bandwidth/this.a.bandwidthUpgradeTarget;c>=f.bandwidth/this.a.bandwidthDowngradeTarget&&c<=g&&(d=f);}this.g=Date.now();return d};N.prototype.chooseVariant=N.prototype.chooseVariant;N.prototype.enable=function(){this.f=!0;};
  N.prototype.enable=N.prototype.enable;N.prototype.disable=function(){this.f=!1;};N.prototype.disable=N.prototype.disable;N.prototype.segmentDownloaded=function(b,c){var d=this.b;if(!(16E3>c)){var e=8E3*c/b,f=b/1E3;d.a+=c;Wa(d.b,f,e);Wa(d.c,f,e);}if(null!=this.g&&this.f)a:{if(!this.i){if(!(128E3<=this.b.a))break a;this.i=!0;}else if(Date.now()-this.g<1E3*this.a.switchInterval)break a;d=this.chooseVariant();this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.h(d);}};
  N.prototype.segmentDownloaded=N.prototype.segmentDownloaded;N.prototype.getBandwidthEstimate=function(){return this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate)};N.prototype.getBandwidthEstimate=N.prototype.getBandwidthEstimate;N.prototype.setVariants=function(b){this.c=b;};N.prototype.setVariants=N.prototype.setVariants;N.prototype.configure=function(b){this.a=b;};N.prototype.configure=N.prototype.configure;
  function Ie(b,c){b&&(c=c.filter(function(c){return se(c,b,{width:Infinity,height:Infinity})}));return c.sort(function(b,c){return b.bandwidth-c.bandwidth})}function Je(b,c){this.a=b;this.b=c;}Je.prototype.toString=function(){return "v"+this.a+"."+this.b};function Ke(b,c){var d=new Je(2,6),e=Le,f=e.a,g=d.b-f.b;(0<(d.a-f.a||g)?e.c:e.b)(e.a,d,b,c);}function Me(b,c,d,e){$a([d,"has been deprecated and will be removed in",c,". We are currently at version",b,". Additional information:",e].join(" "));}function Ne(b,c,d,e){Za([d,"has been deprecated and has been removed in",c,". We are now at version",b,". Additional information:",e].join(""));}var Le=null;var Oe="ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),Pe="buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),Qe=["loop","playbackRate"],Re=["pause","play"],Se="abrstatuschanged adaptation buffering emsg error loading streaming texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged unloading variantchanged textchanged".split(" "),Te={getAssetUri:2,
  getAudioLanguages:2,getAudioLanguagesAndRoles:2,getBufferedInfo:2,getConfiguration:2,getExpiration:2,getPlaybackRate:2,getTextLanguages:2,getTextLanguagesAndRoles:2,getTextTracks:2,getStats:5,getVariantTracks:2,isAudioOnly:10,isBuffering:1,isInProgress:1,isLive:10,isTextTrackVisible:1,keySystem:10,seekRange:1,usingEmbeddedTextTrack:2,getLoadMode:10},Ue={getPlayheadTimeAsDate:1,getPresentationStartTimeAsDate:20},Ve=[["getConfiguration","configure"]],We=[["isTextTrackVisible","setTextTrackVisibility"]],
  Xe="addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectEmbeddedTextTrack selectTextLanguage selectTextTrack selectVariantTrack setTextTrackVisibility trickPlay".split(" "),Ye=["attach","detach","load","unload"];
  function Ze(b){return JSON.stringify(b,function(b,d){if("function"!=typeof d){if(d instanceof Event||d instanceof I){var c={},f;for(f in d){var g=d[f];g&&"object"==typeof g?"detail"==f&&(c[f]=g):f in Event||(c[f]=g);}return c}if(d instanceof TimeRanges)for(c={__type__:"TimeRanges",length:d.length,start:[],end:[]},f=0;f<d.length;++f)c.start.push(d.start(f)),c.end.push(d.end(f));else c=d instanceof Uint8Array?{__type__:"Uint8Array",entries:Array.from(d)}:"number"==typeof d?isNaN(d)?"NaN":isFinite(d)?
  d:0>d?"-Infinity":"Infinity":d;return c}})}function $e(b){return JSON.parse(b,function(b,d){return "NaN"==d?NaN:"-Infinity"==d?-Infinity:"Infinity"==d?Infinity:d&&"object"==typeof d&&"TimeRanges"==d.__type__?af(d):d&&"object"==typeof d&&"Uint8Array"==d.__type__?new Uint8Array(d.entries):d})}function af(b){return {length:b.length,start:function(c){return b.start[c]},end:function(c){return b.end[c]}}}function bf(b,c,d,e,f,g){this.N=b;this.f=new B(c);this.S=d;this.j=!1;this.F=e;this.K=f;this.w=g;this.b=this.h=!1;this.C="";this.i=null;this.m=this.Kd.bind(this);this.o=this.ff.bind(this);this.a={video:{},player:{}};this.v=0;this.c={};this.g=null;}var cf=!1,df=null;p=bf.prototype;p.destroy=function(){ef(this);df&&ff(this);this.f&&(this.f.stop(),this.f=null);this.K=this.F=null;this.b=this.h=!1;this.o=this.m=this.g=this.c=this.a=this.i=null;return Promise.resolve()};p.da=function(){return this.b};
  p.Yc=function(){return this.C};p.init=function(){if(window.chrome&&chrome.cast&&chrome.cast.isAvailable){delete window.__onGCastApiAvailable;this.h=!0;this.f.oc();var b=new chrome.cast.SessionRequest(this.N);b=new chrome.cast.ApiConfig(b,this.Ld.bind(this),this.kf.bind(this),"origin_scoped");chrome.cast.initialize(b,function(){},function(){});cf&&this.f.O(.02);(b=df)&&b.status!=chrome.cast.SessionStatus.STOPPED?this.Ld(b):df=null;}else window.__onGCastApiAvailable=function(b){b&&this.init();}.bind(this);};
  p.dd=function(b){this.i=b;this.b&&gf({type:"appData",appData:this.i});};p.cast=function(b){if(!this.h)return Promise.reject(new D(1,8,8E3));if(!cf)return Promise.reject(new D(1,8,8001));if(this.b)return Promise.reject(new D(1,8,8002));this.g=new G;chrome.cast.requestSession(this.Wc.bind(this,b),this.Jd.bind(this));return this.g};p.Zb=function(){this.b&&(ef(this),df&&(ff(this),df.stop(function(){},function(){}),df=null));};
  p.get=function(b,c){if("video"==b){if(Re.includes(c))return this.Vd.bind(this,b,c)}else if("player"==b){if(Ue[c]&&!this.get("player","isLive")())return function(){};if(Xe.includes(c))return this.Vd.bind(this,b,c);if(Ye.includes(c))return this.Af.bind(this,b,c);if(Te[c])return this.Sd.bind(this,b,c)}return this.Sd(b,c)};p.set=function(b,c,d){this.a[b][c]=d;gf({type:"set",targetName:b,property:c,value:d});};
  p.Wc=function(b,c){df=c;c.addUpdateListener(this.m);c.addMessageListener("urn:x-cast:com.google.shaka.v2",this.o);this.Kd();gf({type:"init",initState:b,appData:this.i});this.g.resolve();};p.Jd=function(b){var c=8003;switch(b.code){case "cancel":c=8004;break;case "timeout":c=8005;break;case "receiver_unavailable":c=8006;}this.g.reject(new D(2,8,c,b));};p.Sd=function(b,c){return this.a[b][c]};
  p.Vd=function(b,c,d){for(var e=[],f=2;f<arguments.length;++f)e[f-2]=arguments[f];gf({type:"call",targetName:b,methodName:c,args:e});};p.Af=function(b,c,d){for(var e=[],f=2;f<arguments.length;++f)e[f-2]=arguments[f];f=new G;var g=this.v.toString();this.v++;this.c[g]=f;gf({type:"asyncCall",targetName:b,methodName:c,args:e,id:g});return f};p.Ld=function(b){var c=this.w();this.g=new G;this.j=!0;this.Wc(c,b);};p.kf=function(b){cf="available"==b;this.f.oc();};
  function ff(b){var c=df;c.removeUpdateListener(b.m);c.removeMessageListener("urn:x-cast:com.google.shaka.v2",b.o);}p.Kd=function(){var b=df?"connected"==df.status:!1;if(this.b&&!b){this.K();for(var c in this.a)this.a[c]={};ef(this);}this.C=(this.b=b)?df.receiver.friendlyName:"";this.f.oc();};function ef(b){for(var c in b.c){var d=b.c[c];delete b.c[c];d.reject(new D(1,7,7E3));}}
  p.ff=function(b,c){var d=$e(c);switch(d.type){case "event":var e=d.event;this.F(d.targetName,new I(e.type,e));break;case "update":e=d.update;for(var f in e){d=this.a[f]||{};for(var g in e[f])d[g]=e[f][g];}this.j&&(this.S(),this.j=!1);break;case "asyncComplete":if(f=d.id,d=d.error,g=this.c[f],delete this.c[f],g)if(d){f=new D(d.severity,d.category,d.code);for(e in d)f[e]=d[e];g.reject(f);}else g.resolve();}};function gf(b){b=Ze(b);df.sendMessage("urn:x-cast:com.google.shaka.v2",b,function(){},ab);}function O(b,c,d){J.call(this);this.c=b;this.b=c;this.i=this.g=this.f=this.j=this.h=null;this.a=new bf(d,this.Pf.bind(this),this.Qf.bind(this),this.Rf.bind(this),this.Sf.bind(this),this.xd.bind(this));hf(this);}Ta(O,J);z("shaka.cast.CastProxy",O);O.prototype.destroy=function(b){b&&this.a&&this.a.Zb();this.i&&(this.i.a(),this.i=null);b=[];this.b&&(b.push(this.b.destroy()),this.b=null);this.a&&(b.push(this.a.destroy()),this.a=null);this.j=this.h=this.c=null;return Promise.all(b)};
  O.prototype.destroy=O.prototype.destroy;O.prototype.Ue=function(){return this.h};O.prototype.getVideo=O.prototype.Ue;O.prototype.Ne=function(){return this.j};O.prototype.getPlayer=O.prototype.Ne;O.prototype.pe=function(){return this.a?this.a.h&&cf:!1};O.prototype.canCast=O.prototype.pe;O.prototype.da=function(){return this.a?this.a.da():!1};O.prototype.isCasting=O.prototype.da;O.prototype.Yc=function(){return this.a?this.a.Yc():""};O.prototype.receiverName=O.prototype.Yc;
  O.prototype.cast=function(){var b=this.xd();return this.a.cast(b).then(function(){if(this.b)return this.b.md()}.bind(this))};O.prototype.cast=O.prototype.cast;O.prototype.dd=function(b){this.a.dd(b);};O.prototype.setAppData=O.prototype.dd;O.prototype.$f=function(){var b=this.a;if(b.b){var c=b.w();chrome.cast.requestSession(b.Wc.bind(b,c),b.Jd.bind(b));}};O.prototype.suggestDisconnect=O.prototype.$f;O.prototype.Zb=function(){this.a.Zb();};O.prototype.forceDisconnect=O.prototype.Zb;
  function hf(b){b.a.init();b.i=new ac;Oe.forEach(function(b){L(this.i,this.c,b,this.ig.bind(this));}.bind(b));Se.forEach(function(b){L(this.i,this.b,b,this.uf.bind(this));}.bind(b));b.h={};for(var c in b.c)Object.defineProperty(b.h,c,{configurable:!1,enumerable:!0,get:b.hg.bind(b,c),set:b.jg.bind(b,c)});b.j={};for(var d in b.b)Object.defineProperty(b.j,d,{configurable:!1,enumerable:!0,get:b.Rd.bind(b,d)});b.f=new J;b.f.Sb=b.h;b.g=new J;b.g.Sb=b.j;}p=O.prototype;
  p.xd=function(){var b={video:{},player:{},playerAfterLoad:{},manifest:this.b.$b(),startTime:null};this.c.pause();Qe.forEach(function(c){b.video[c]=this.c[c];}.bind(this));this.c.ended||(b.startTime=this.c.currentTime);Ve.forEach(function(c){var d=c[1];c=this.b[c[0]]();b.player[d]=c;}.bind(this));We.forEach(function(c){var d=c[1];c=this.b[c[0]]();b.playerAfterLoad[d]=c;}.bind(this));return b};p.Pf=function(){this.dispatchEvent(new I("caststatuschanged"));};
  p.Qf=function(){this.f.dispatchEvent(new I(this.h.paused?"pause":"play"));};
  p.Sf=function(){var b=this;Ve.forEach(function(b){var c=b[1];b=this.a.get("player",b[0])();this.b[c](b);}.bind(this));var c=this.a.get("player","getAssetUri")(),d=this.a.get("video","ended"),e=Promise.resolve(),f=this.c.autoplay,g=null;d||(g=this.a.get("video","currentTime"));c&&(this.c.autoplay=!1,e=this.b.load(c,g));var h={};Qe.forEach(function(b){h[b]=this.a.get("video",b);}.bind(this));e.then(function(){b.c&&(Qe.forEach(function(b){this.c[b]=h[b];}.bind(b)),We.forEach(function(b){var c=b[1];b=this.a.get("player",
  b[0])();this.b[c](b);}.bind(b)),b.c.autoplay=f,c&&b.c.play());},function(c){b.b.dispatchEvent(new I("error",{detail:c}));});};p.hg=function(b){if("addEventListener"==b)return this.f.addEventListener.bind(this.f);if("removeEventListener"==b)return this.f.removeEventListener.bind(this.f);if(this.a.da()&&0==Object.keys(this.a.a.video).length){var c=this.c[b];if("function"!=typeof c)return c}return this.a.da()?this.a.get("video",b):(b=this.c[b],"function"==typeof b&&(b=b.bind(this.c)),b)};
  p.jg=function(b,c){this.a.da()?this.a.set("video",b,c):this.c[b]=c;};p.ig=function(b){this.a.da()||this.f.dispatchEvent(new I(b.type,b));};
  p.Rd=function(b){if("addEventListener"==b)return this.g.addEventListener.bind(this.g);if("removeEventListener"==b)return this.g.removeEventListener.bind(this.g);if("getMediaElement"==b)return function(){return this.h}.bind(this);if("getSharedConfiguration"==b)return this.a.get("player","getConfiguration");if("getNetworkingEngine"==b)return this.b.Bb.bind(this.b);if(this.a.da()){if("getManifest"==b||"drmInfo"==b)return function(){$a(b+"() does not work while casting!");return null};if("getManifestUri"==
  b)return Ke("getManifestUri",'Please use "getAssetUri" instead.'),this.Rd("getAssetUri");if("attach"==b||"detach"==b)return function(){$a(b+"() does not work while casting!");return Promise.resolve()}}return this.a.da()&&0==Object.keys(this.a.a.video).length&&Te[b]||!this.a.da()?this.b[b].bind(this.b):this.a.get("player",b)};p.uf=function(b){this.a.da()||this.g.dispatchEvent(b);};p.Rf=function(b,c){this.a.da()&&("video"==b?this.f.dispatchEvent(c):"player"==b&&this.g.dispatchEvent(c));};function jf(b,c,d,e){var f=this;J.call(this);this.a=b;this.b=c;this.c=new ac;this.w={video:b,player:c};this.C=d||function(){};this.F=e||function(b){return b};this.o=!1;this.h=!0;this.g=0;this.m=!1;this.j=!0;this.i=this.f=null;this.v=new B(function(){kf(f);});lf(this);}Ta(jf,J);z("shaka.cast.CastReceiver",jf);jf.prototype.isConnected=function(){return this.o};jf.prototype.isConnected=jf.prototype.isConnected;jf.prototype.Ye=function(){return this.h};jf.prototype.isIdle=jf.prototype.Ye;
  jf.prototype.destroy=function(){var b=this;return t(function d(){var e,f;return y(d,function(d){switch(d.l){case 1:return b.c&&(b.c.a(),b.c=null),e=[],b.b&&(e.push(b.b.destroy()),b.b=null),b.v&&(b.v.stop(),b.v=null),b.a=null,b.w=null,b.C=null,b.o=!1,b.h=!0,b.f=null,b.i=null,u(d,Promise.all(e),2);case 2:f=cast.receiver.CastReceiverManager.getInstance(),f.stop(),v(d);}})})};jf.prototype.destroy=jf.prototype.destroy;
  function lf(b){var c=cast.receiver.CastReceiverManager.getInstance();c.onSenderConnected=b.Nd.bind(b);c.onSenderDisconnected=b.Nd.bind(b);c.onSystemVolumeChanged=b.xe.bind(b);b.i=c.getCastMessageBus("urn:x-cast:com.google.cast.media");b.i.onMessage=b.af.bind(b);b.f=c.getCastMessageBus("urn:x-cast:com.google.shaka.v2");b.f.onMessage=b.mf.bind(b);c.start();Oe.forEach(function(b){L(this.c,this.a,b,this.Td.bind(this,"video"));}.bind(b));Se.forEach(function(b){L(this.c,this.b,b,this.Td.bind(this,"player"));}.bind(b));
  cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?b.b.ed(3840,2160):b.b.ed(1920,1080);L(b.c,b.a,"loadeddata",function(){this.m=!0;}.bind(b));L(b.c,b.b,"loading",function(){this.h=!1;mf(this);}.bind(b));L(b.c,b.a,"playing",function(){this.h=!1;mf(this);}.bind(b));L(b.c,b.a,"pause",function(){mf(this);}.bind(b));L(b.c,b.b,"unloading",function(){this.h=!0;mf(this);}.bind(b));L(b.c,b.a,"ended",function(){var b=this;(new B(function(){b.a&&b.a.ended&&
  (b.h=!0,mf(b));})).O(5);}.bind(b));}p=jf.prototype;p.Nd=function(){this.g=0;this.j=!0;this.o=0!=cast.receiver.CastReceiverManager.getInstance().getSenders().length;mf(this);};function mf(b){Promise.resolve().then(function(){this.b&&(this.dispatchEvent(new I("caststatuschanged")),nf(this)||of(this,0));}.bind(b));}
  function pf(b,c,d){for(var e in c.player)b.b[e](c.player[e]);b.C(d);d=Promise.resolve();var f=b.a.autoplay;c.manifest&&(b.a.autoplay=!1,d=b.b.load(c.manifest,c.startTime));d.then(function(){if(b.b){for(var d in c.video)b.a[d]=c.video[d];for(var e in c.playerAfterLoad)b.b[e](c.playerAfterLoad[e]);b.a.autoplay=f;c.manifest&&(b.a.play(),of(b,0));}},function(c){b.b.dispatchEvent(new I("error",{detail:c}));});}p.Td=function(b,c){this.b&&(kf(this),qf(this,{type:"event",targetName:b,event:c},this.f));};
  function kf(b){b.v.O(.5);var c={video:{},player:{}};Pe.forEach(function(b){c.video[b]=this.a[b];}.bind(b));if(b.b.U())for(var d in Ue)0==b.g%Ue[d]&&(c.player[d]=b.b[d]());for(var e in Te)0==b.g%Te[e]&&(c.player[e]=b.b[e]());if(d=cast.receiver.CastReceiverManager.getInstance().getSystemVolume())c.video.volume=d.level,c.video.muted=d.muted;b.m&&(b.g+=1);qf(b,{type:"update",update:c},b.f);nf(b);}function nf(b){return b.j&&(b.a.duration||b.b.U())?(rf(b),b.j=!1,!0):!1}
  function rf(b){var c={contentId:b.b.$b(),streamType:b.b.U()?"LIVE":"BUFFERED",duration:b.a.duration,contentType:""};of(b,0,c);}p.xe=function(){var b=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();b&&qf(this,{type:"update",update:{video:{volume:b.level,muted:b.muted}}},this.f);qf(this,{type:"event",targetName:"video",event:{type:"volumechange"}},this.f);};
  p.mf=function(b){var c=$e(b.data);switch(c.type){case "init":this.g=0;this.m=!1;this.j=!0;pf(this,c.initState,c.appData);kf(this);break;case "appData":this.C(c.appData);break;case "set":var d=c.targetName,e=c.property;c=c.value;if("video"==d){var f=cast.receiver.CastReceiverManager.getInstance();if("volume"==e){f.setSystemVolumeLevel(c);break}else if("muted"==e){f.setSystemVolumeMuted(c);break}}this.w[d][e]=c;break;case "call":d=this.w[c.targetName];d[c.methodName].apply(d,c.args);break;case "asyncCall":d=
  c.targetName;e=c.methodName;"player"==d&&"load"==e&&(this.g=0,this.m=!1);f=c.id;b=b.senderId;var g=this.w[d];c=g[e].apply(g,c.args);"player"==d&&"load"==e&&(c=c.then(function(){this.j=!0;}.bind(this)));c.then(this.Zd.bind(this,b,f,null),this.Zd.bind(this,b,f));}};
  p.af=function(b){var c=$e(b.data);switch(c.type){case "PLAY":this.a.play();of(this,0);break;case "PAUSE":this.a.pause();of(this,0);break;case "SEEK":b=c.currentTime;var d=c.resumeState;null!=b&&(this.a.currentTime=Number(b));d&&"PLAYBACK_START"==d?(this.a.play(),of(this,0)):d&&"PLAYBACK_PAUSE"==d&&(this.a.pause(),of(this,0));break;case "STOP":this.b.md().then(function(){this.b&&of(this,0);}.bind(this));break;case "GET_STATUS":of(this,Number(c.requestId));break;case "VOLUME":d=c.volume;b=d.level;d=
  d.muted;var e=this.a.volume,f=this.a.muted;null!=b&&(this.a.volume=Number(b));null!=d&&(this.a.muted=d);e==this.a.volume&&f==this.a.muted||of(this,0);break;case "LOAD":this.g=0;this.j=this.m=!1;b=c.currentTime;d=this.F(c.media.contentId);this.a.autoplay=!0;this.b.load(d,b).then(function(){this.b&&rf(this);}.bind(this))["catch"](function(b){var d="LOAD_FAILED";7==b.category&&7E3==b.code&&(d="LOAD_CANCELLED");qf(this,{requestId:Number(c.requestId),type:d},this.i);}.bind(this));break;default:qf(this,{requestId:Number(c.requestId),
  type:"INVALID_REQUEST",reason:"INVALID_COMMAND"},this.i);}};p.Zd=function(b,c,d){this.b&&qf(this,{type:"asyncComplete",id:c,error:d},this.f,b);};function qf(b,c,d,e){b.o&&(b=Ze(c),e?d.getCastChannel(e).send(b):d.broadcast(b));}
  function of(b,c,d){var e=b.a.playbackRate;var f=sf;f=b.h?f.IDLE:b.b.Jc()?f.ge:b.a.paused?f.ie:f.je;e={mediaSessionId:0,playbackRate:e,playerState:f,currentTime:b.a.currentTime,supportedMediaCommands:15,volume:{level:b.a.volume,muted:b.a.muted}};d&&(e.media=d);qf(b,{requestId:c,type:"MEDIA_STATUS",status:[e]},b.i);}var sf={IDLE:"IDLE",je:"PLAYING",ge:"BUFFERING",ie:"PAUSED"};var P={Yb:function(b,c){var d=P.P(b,c);return 1!=d.length?null:d[0]},ud:function(b,c,d){b=P.vd(b,c,d);return 1!=b.length?null:b[0]},P:function(b,c){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&b.tagName==c})},vd:function(b,c,d){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&b.localName==d&&b.namespaceURI==c})},getAttributeNS:function(b,c,d){return b.hasAttributeNS(c,d)?b.getAttributeNS(c,d):null},ac:function(b){return Array.prototype.every.call(b.childNodes,
  function(b){return b.nodeType==Node.TEXT_NODE||b.nodeType==Node.CDATA_SECTION_NODE})?b.textContent.trim():null},H:function(b,c,d,e){e=void 0===e?null:e;var f=null;b=b.getAttribute(c);null!=b&&(f=d(b));return null==f?e:f},rf:function(b){if(!b)return null;/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(b)&&(b+="Z");b=Date.parse(b);return isNaN(b)?null:Math.floor(b/1E3)},za:function(b){if(!b)return null;b=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(b);
  if(!b)return null;b=31536E3*Number(b[1]||null)+2592E3*Number(b[2]||null)+86400*Number(b[3]||null)+3600*Number(b[4]||null)+60*Number(b[5]||null)+Number(b[6]||null);return isFinite(b)?b:null},kc:function(b){var c=/([0-9]+)-([0-9]+)/.exec(b);if(!c)return null;b=Number(c[1]);if(!isFinite(b))return null;c=Number(c[2]);return isFinite(c)?{start:b,end:c}:null},parseInt:function(b){b=Number(b);return 0===b%1?b:null},jc:function(b){b=Number(b);return 0===b%1&&0<b?b:null},rb:function(b){b=Number(b);return 0===
  b%1&&0<=b?b:null},parseFloat:function(b){b=Number(b);return isNaN(b)?null:b},we:function(b){var c;b=(c=b.match(/^(\d+)\/(\d+)$/))?Number(c[1])/Number(c[2]):Number(b);return isNaN(b)?null:b},Qd:function(b,c){var d=new DOMParser;try{var e=d.parseFromString(b,"text/xml");}catch(g){}if(e&&e.documentElement.tagName==c)var f=e.documentElement;return f&&0<f.getElementsByTagName("parsererror").length?null:f},Pd:function(b,c){try{var d=sc(b);return P.Qd(d,c)}catch(e){}}};var tf=(new Map).set("urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b","org.w3.clearkey").set("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed","com.widevine.alpha").set("urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95","com.microsoft.playready").set("urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb","com.adobe.primetime");
  function uf(b,c,d){var e=vf(b),f=null;b=[];var g=[],h=new Set(e.map(function(b){return b.keyId}));h["delete"](null);if(1<h.size)throw new D(2,4,4010);d||(g=e.filter(function(b){return "urn:mpeg:dash:mp4protection:2011"==b.Yd?(f=b.init||f,!1):!0}),g.length&&(b=wf(f,c,g),0==b.length&&(b=[vd("",f)])));if(e.length&&(d||!g.length))for(b=[],c=r(tf.values()),d=c.next();!d.done;d=c.next())d=d.value,"org.w3.clearkey"!=d&&b.push(vd(d,f));if(h=Array.from(h)[0]||null)for(c=r(b),d=c.next();!d.done;d=c.next())for(d=
  r(d.value.initData),e=d.next();!e.done;e=d.next())e.value.keyId=h;return {rd:h,pg:f,drmInfos:b,wd:!0}}function xf(b,c,d,e){var f=uf(b,c,e);if(d.wd){b=1==d.drmInfos.length&&!d.drmInfos[0].keySystem;c=0==f.drmInfos.length;if(0==d.drmInfos.length||b&&!c)d.drmInfos=f.drmInfos;d.wd=!1;}else if(0<f.drmInfos.length&&(d.drmInfos=d.drmInfos.filter(function(b){return f.drmInfos.some(function(c){return c.keySystem==b.keySystem})}),0==d.drmInfos.length))throw new D(2,4,4008);return f.rd||d.rd}
  function yf(b){var c=0,d=(new DataView(b)).getUint32(c,!0);if(d!==b.byteLength)return [];c+=6;d=[];for(var e=new DataView(b);c<b.byteLength-1;){var f=e.getUint16(c,!0);c+=2;var g=e.getUint16(c,!0);c+=2;var h=new Uint8Array(b,c,g);d.push({type:f,value:h});c+=g;}return d}function zf(b){return (b=b.querySelector("DATA > LA_URL"))?b.textContent:""}
  function wf(b,c,d){var e=[];d=r(d);for(var f=d.next();!f.done;f=d.next()){f=f.value;var g=tf.get(f.Yd);if(g)e.push(vd(g,f.init||b));else for(f=c(f.node)||[],f=r(f),g=f.next();!g.done;g=f.next())e.push(g.value);}return e}
  (new Map).set("com.widevine.alpha",function(b){return (b=P.ud(b.node,"urn:microsoft","laurl"))?b.getAttribute("licenseUrl")||"":""}).set("com.microsoft.playready",function(b){b=P.ud(b.node,"urn:microsoft:playready","pro");if(!b)return "";b=Bc(b.textContent);b=yf(b.buffer).filter(function(b){return 1===b.type})[0];if(!b)return "";b=uc(b.value,!0);return (b=P.Qd(b,"WRMHEADER"))?zf(b):""});function vf(b){var c=[];b=r(b);for(var d=b.next();!d.done;d=b.next())(d=Af(d.value))&&c.push(d);return c}
  function Af(b){var c=b.getAttribute("schemeIdUri"),d=P.getAttributeNS(b,"urn:mpeg:cenc:2013","default_KID"),e=P.vd(b,"urn:mpeg:cenc:2013","pssh").map(P.ac);if(!c)return null;c=c.toLowerCase();if(d&&(d=d.replace(/-/g,"").toLowerCase(),d.includes(" ")))throw new D(2,4,4009);var f=[];try{f=e.map(function(b){return {initDataType:"cenc",initData:Bc(b),keyId:null}});}catch(g){throw new D(2,4,4007);}return {node:b,Yd:c,keyId:d,init:0<f.length?f:null}}function Bf(b,c,d,e,f){var g={RepresentationID:c,Number:d,Bandwidth:e,Time:f};return b.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,function(b,c,d,e){if("$$"==b)return "$";var f=g[c];if(null==f)return b;"RepresentationID"==c&&d&&(d=void 0);"Time"==c&&(f=Math.round(f));switch(e){case void 0:case "d":case "i":case "u":b=f.toString();break;case "o":b=f.toString(8);break;case "x":b=f.toString(16);break;case "X":b=f.toString(16).toUpperCase();break;default:b=f.toString();}d=
  window.parseInt(d,10)||1;return Array(Math.max(0,d-b.length)+1).join("0")+b})}
  function Cf(b,c){var d=Df(b,c,"timescale"),e=1;d&&(e=P.jc(d)||1);d=Df(b,c,"duration");(d=P.jc(d||""))&&(d/=e);var f=Df(b,c,"startNumber"),g=Number(Df(b,c,"presentationTimeOffset"))||0,h=P.rb(f||"");if(null==f||null==h)h=1;var k=Ef(b,c,"SegmentTimeline");f=null;if(k){f=e;var l=b.R.duration||Infinity;k=P.P(k,"S");for(var m=[],n=0,q=0;q<k.length;++q){var x=k[q],w=P.H(x,"t",P.rb),A=P.H(x,"d",P.rb);x=P.H(x,"r",P.parseInt);null!=w&&(w-=g);if(!A)break;w=null!=w?w:n;x=x||0;if(0>x)if(q+1<k.length){x=P.H(k[q+
  1],"t",P.rb);if(null==x)break;else if(w>=x)break;x=Math.ceil((x-w)/A)-1;}else{if(Infinity==l)break;else if(w/f>=l)break;x=Math.ceil((l*f-w)/A)-1;}0<m.length&&w!=n&&(m[m.length-1].end=w/f);for(var C=0;C<=x;++C)n=w+A,m.push({start:w/f,end:n/f,eg:w}),w=n;}f=m;}return {timescale:e,Z:d,Wa:h,ia:g/e||0,nd:g,M:f}}function Df(b,c,d){return [c(b.B),c(b.ba),c(b.ga)].filter(td.Da).map(function(b){return b.getAttribute(d)}).reduce(function(b,c){return b||c})}
  function Ef(b,c,d){return [c(b.B),c(b.ba),c(b.ga)].filter(td.Da).map(function(b){return P.Yb(b,d)}).reduce(function(b,c){return b||c})}
  function Ff(b,c,d,e,f,g){for(var h=P.getAttributeNS(b,"http://www.w3.org/1999/xlink","href"),k=P.getAttributeNS(b,"http://www.w3.org/1999/xlink","actuate")||"onRequest",l=0;l<b.attributes.length;l++){var m=b.attributes[l];"http://www.w3.org/1999/xlink"==m.namespaceURI&&(b.removeAttributeNS(m.namespaceURI,m.localName),--l);}if(5<=g)return Ab(new D(2,4,4028));if("onLoad"!=k)return Ab(new D(2,4,4027));var n=ud([e],[h]);return f.request(0,Sb(n,c)).T(function(e){e=P.Pd(e.data,b.tagName);if(!e)return Ab(new D(2,
  4,4001,h));for(;b.childNodes.length;)b.removeChild(b.childNodes[0]);for(;e.childNodes.length;){var k=e.childNodes[0];e.removeChild(k);b.appendChild(k);}for(k=0;k<e.attributes.length;k++){var l=e.attributes[k].nodeName,m=e.getAttribute(l);b.setAttribute(l,m);}return Gf(b,c,d,n[0],f,g+1)})}
  function Gf(b,c,d,e,f,g){g=void 0===g?0:g;if(P.getAttributeNS(b,"http://www.w3.org/1999/xlink","href")){var h=Ff(b,c,d,e,f,g);d&&(h=h.T(void 0,function(){return Gf(b,c,d,e,f,g)}));return h}h=[];for(var k=0;k<b.childNodes.length;k++){var l=b.childNodes[k];l instanceof Element&&("urn:mpeg:dash:resolve-to-zero:2013"==P.getAttributeNS(l,"http://www.w3.org/1999/xlink","href")?(b.removeChild(l),--k):"SegmentTimeline"!=l.tagName&&h.push(Gf(l,c,d,e,f,g)));}return Eb(h).T(function(){return b})}function Hf(b,c,d){this.c=b;this.b=c;this.a=d;}z("shaka.media.InitSegmentReference",Hf);Hf.prototype.wc=function(){return this.c()};Hf.prototype.createUris=Hf.prototype.wc;Hf.prototype.Gc=function(){return this.b};Hf.prototype.getStartByte=Hf.prototype.Gc;Hf.prototype.Fc=function(){return this.a};Hf.prototype.getEndByte=Hf.prototype.Fc;function Q(b,c,d,e,f,g){this.position=b;this.startTime=c;this.endTime=d;this.c=e;this.b=f;this.a=g;}z("shaka.media.SegmentReference",Q);Q.prototype.aa=function(){return this.position};
  Q.prototype.getPosition=Q.prototype.aa;Q.prototype.Hc=function(){return this.startTime};Q.prototype.getStartTime=Q.prototype.Hc;Q.prototype.Ce=function(){return this.endTime};Q.prototype.getEndTime=Q.prototype.Ce;Q.prototype.wc=function(){return this.c()};Q.prototype.createUris=Q.prototype.wc;Q.prototype.Gc=function(){return this.b};Q.prototype.getStartByte=Q.prototype.Gc;Q.prototype.Fc=function(){return this.a};Q.prototype.getEndByte=Q.prototype.Fc;function R(b,c){this.I=b;this.b=c==If;this.a=0;}z("shaka.util.DataViewReader",R);var If=1;R.Endianness={lg:0,mg:If};R.prototype.pa=function(){return this.a<this.I.byteLength};R.prototype.hasMoreData=R.prototype.pa;R.prototype.aa=function(){return this.a};R.prototype.getPosition=R.prototype.aa;R.prototype.Ee=function(){return this.I.byteLength};R.prototype.getLength=R.prototype.Ee;R.prototype.ha=function(){try{var b=this.I.getUint8(this.a);this.a+=1;return b}catch(c){Jf();}};R.prototype.readUint8=R.prototype.ha;
  R.prototype.Jb=function(){try{var b=this.I.getUint16(this.a,this.b);this.a+=2;return b}catch(c){Jf();}};R.prototype.readUint16=R.prototype.Jb;R.prototype.D=function(){try{var b=this.I.getUint32(this.a,this.b);this.a+=4;return b}catch(c){Jf();}};R.prototype.readUint32=R.prototype.D;R.prototype.Ud=function(){try{var b=this.I.getInt32(this.a,this.b);this.a+=4;return b}catch(c){Jf();}};R.prototype.readInt32=R.prototype.Ud;
  R.prototype.ub=function(){try{if(this.b){var b=this.I.getUint32(this.a,!0);var c=this.I.getUint32(this.a+4,!0);}else c=this.I.getUint32(this.a,!1),b=this.I.getUint32(this.a+4,!1);}catch(d){Jf();}if(2097151<c)throw new D(2,3,3001);this.a+=8;return c*Math.pow(2,32)+b};R.prototype.readUint64=R.prototype.ub;R.prototype.Va=function(b){this.a+b>this.I.byteLength&&Jf();var c=new Uint8Array(this.I.buffer,this.I.byteOffset+this.a,b);this.a+=b;return new Uint8Array(c)};R.prototype.readBytes=R.prototype.Va;
  R.prototype.J=function(b){this.a+b>this.I.byteLength&&Jf();this.a+=b;};R.prototype.skip=R.prototype.J;R.prototype.Xd=function(b){this.a<b&&Jf();this.a-=b;};R.prototype.rewind=R.prototype.Xd;R.prototype.seek=function(b){(0>b||b>this.I.byteLength)&&Jf();this.a=b;};R.prototype.seek=R.prototype.seek;R.prototype.Xc=function(){for(var b=this.a;this.pa()&&0!=this.I.getUint8(this.a);)this.a+=1;b=new Uint8Array(this.I.buffer,this.I.byteOffset+b,this.a-b);this.a+=1;return sc(b)};
  R.prototype.readTerminatedString=R.prototype.Xc;function Jf(){throw new D(2,3,3E3);}function S(){this.c=[];this.b=[];this.a=!1;}z("shaka.util.Mp4Parser",S);S.prototype.G=function(b,c){var d=Kf(b);this.c[d]=0;this.b[d]=c;return this};S.prototype.box=S.prototype.G;S.prototype.ca=function(b,c){var d=Kf(b);this.c[d]=1;this.b[d]=c;return this};S.prototype.fullBox=S.prototype.ca;S.prototype.stop=function(){this.a=!0;};S.prototype.stop=S.prototype.stop;
  S.prototype.parse=function(b,c){var d=new Uint8Array(b);d=new R(new DataView(d.buffer,d.byteOffset,d.byteLength),0);for(this.a=!1;d.pa()&&!this.a;)this.ic(0,d,c);};S.prototype.parse=S.prototype.parse;
  S.prototype.ic=function(b,c,d){var e=c.aa(),f=c.D(),g=c.D();switch(f){case 0:f=c.I.byteLength-e;break;case 1:f=c.ub();}var h=this.b[g];if(h){var k=null,l=null;1==this.c[g]&&(l=c.D(),k=l>>>24,l&=16777215);g=e+f;d&&g>c.I.byteLength&&(g=c.I.byteLength);g-=c.aa();c=0<g?c.Va(g):new Uint8Array(0);c=new R(new DataView(c.buffer,c.byteOffset,c.byteLength),0);h({parser:this,partialOkay:d||!1,version:k,flags:l,reader:c,size:f,start:e+b});}else c.J(Math.min(e+f-c.aa(),c.I.byteLength-c.aa()));};
  S.prototype.parseNext=S.prototype.ic;function Lf(b){for(;b.reader.pa()&&!b.parser.a;)b.parser.ic(b.start,b.reader,b.partialOkay);}S.children=Lf;function Mf(b){for(var c=b.reader.D();0<c&&!b.parser.a;--c)b.parser.ic(b.start,b.reader,b.partialOkay);}S.sampleDescription=Mf;function Nf(b){return function(c){b(c.reader.Va(c.reader.I.byteLength-c.reader.aa()));}}S.allData=Nf;function Kf(b){for(var c=0,d=0;d<b.length;d++)c=c<<8|b.charCodeAt(d);return c}
  function Of(b){return String.fromCharCode(b>>24&255,b>>16&255,b>>8&255,b&255)}S.typeToString=Of;function Pf(b,c,d,e){var f,g=(new S).ca("sidx",function(b){f=Qf(c,e,d,b);});b&&g.parse(b);if(f)return f;throw new D(2,3,3004);}
  function Qf(b,c,d,e){var f=[];e.reader.J(4);var g=e.reader.D();if(0==g)throw new D(2,3,3005);if(0==e.version){var h=e.reader.D();var k=e.reader.D();}else h=e.reader.ub(),k=e.reader.ub();e.reader.J(2);var l=e.reader.Jb();b=b+e.size+k;for(k=0;k<l;k++){var m=e.reader.D(),n=(m&2147483648)>>>31;m&=2147483647;var q=e.reader.D();e.reader.J(4);if(1==n)throw new D(2,3,3006);f.push(new Q(f.length,h/g-c,(h+q)/g-c,function(){return d},b,b+m-1));h+=q;b+=m;}e.parser.stop();return f}function T(b){this.a=b;}z("shaka.media.SegmentIndex",T);T.prototype.destroy=function(){this.a=null;return Promise.resolve()};T.prototype.destroy=T.prototype.destroy;T.prototype.find=function(b){for(var c=this.a.length-1;0<=c;--c){var d=this.a[c];if(b>=d.startTime&&b<d.endTime)return d.position}return this.a.length&&b<this.a[0].startTime?this.a[0].position:null};T.prototype.find=T.prototype.find;
  T.prototype.get=function(b){if(0==this.a.length)return null;b-=this.a[0].position;return 0>b||b>=this.a.length?null:this.a[b]};T.prototype.get=T.prototype.get;T.prototype.offset=function(b){for(var c=0;c<this.a.length;++c)this.a[c].startTime+=b,this.a[c].endTime+=b;};T.prototype.offset=T.prototype.offset;
  T.prototype.Pc=function(b){for(var c=[],d=0,e=0;d<this.a.length&&e<b.length;){var f=this.a[d],g=b[e];f.startTime<g.startTime?(c.push(f),d++):(f.startTime>g.startTime?0==d&&c.push(g):(.1<Math.abs(f.endTime-g.endTime)?c.push(new Q(f.position,g.startTime,g.endTime,g.c,g.b,g.a)):c.push(f),d++),e++);}for(;d<this.a.length;)c.push(this.a[d++]);if(c.length)for(d=c[c.length-1].position+1;e<b.length;)f=b[e++],f=new Q(d++,f.startTime,f.endTime,f.c,f.b,f.a),c.push(f);else c=b;this.a=c;};T.prototype.merge=T.prototype.Pc;
  T.prototype.zc=function(b){for(var c=0;c<this.a.length;++c)if(this.a[c].endTime>b){this.a.splice(0,c);return}this.a=[];};T.prototype.evict=T.prototype.zc;function Rf(b,c){for(;b.a.length;)if(b.a[b.a.length-1].startTime>=c)b.a.pop();else break;for(;b.a.length;)if(0>=b.a[0].endTime)b.a.shift();else break;if(0!=b.a.length){var d=b.a[b.a.length-1];b.a[b.a.length-1]=new Q(d.position,d.startTime,c,d.c,d.b,d.a);}}function Sf(b){this.b=b;this.a=new R(b,0);Tf||(Tf=[new Uint8Array([255]),new Uint8Array([127,255]),new Uint8Array([63,255,255]),new Uint8Array([31,255,255,255]),new Uint8Array([15,255,255,255,255]),new Uint8Array([7,255,255,255,255,255]),new Uint8Array([3,255,255,255,255,255,255]),new Uint8Array([1,255,255,255,255,255,255,255])]);}var Tf;Sf.prototype.pa=function(){return this.a.pa()};
  function Uf(b){var c=Vf(b);if(7<c.length)throw new D(2,3,3002);for(var d=0,e=0;e<c.length;e++)d=256*d+c[e];c=d;d=Vf(b);a:{for(e=0;e<Tf.length;e++)if(Ec(d,Tf[e])){e=!0;break a}e=!1;}if(e)d=b.b.byteLength-b.a.aa();else{if(8==d.length&&d[1]&224)throw new D(2,3,3001);e=d[0]&(1<<8-d.length)-1;for(var f=1;f<d.length;f++)e=256*e+d[f];d=e;}d=b.a.aa()+d<=b.b.byteLength?d:b.b.byteLength-b.a.aa();e=new DataView(b.b.buffer,b.b.byteOffset+b.a.aa(),d);b.a.J(d);return new Wf(c,e)}
  function Vf(b){var c=b.a.ha(),d;for(d=1;8>=d&&!(c&1<<8-d);d++);if(8<d)throw new D(2,3,3002);var e=new Uint8Array(d);e[0]=c;for(c=1;c<d;c++)e[c]=b.a.ha();return e}function Wf(b,c){this.id=b;this.a=c;}function Xf(b){if(8<b.a.byteLength)throw new D(2,3,3002);if(8==b.a.byteLength&&b.a.getUint8(0)&224)throw new D(2,3,3001);for(var c=0,d=0;d<b.a.byteLength;d++){var e=b.a.getUint8(d);c=256*c+e;}return c}function Yf(){}
  Yf.prototype.parse=function(b,c,d,e){var f;c=new Sf(new DataView(c));if(440786851!=Uf(c).id)throw new D(2,3,3008);var g=Uf(c);if(408125543!=g.id)throw new D(2,3,3009);c=g.a.byteOffset;g=new Sf(g.a);for(f=null;g.pa();){var h=Uf(g);if(357149030==h.id){f=h;break}}if(!f)throw new D(2,3,3010);g=new Sf(f.a);f=1E6;for(h=null;g.pa();){var k=Uf(g);if(2807729==k.id)f=Xf(k);else if(17545==k.id)if(h=k,4==h.a.byteLength)h=h.a.getFloat32(0);else if(8==h.a.byteLength)h=h.a.getFloat64(0);else throw new D(2,3,3003);
  }if(null==h)throw new D(2,3,3011);g=f/1E9;f=h*g;b=Uf(new Sf(new DataView(b)));if(475249515!=b.id)throw new D(2,3,3007);return Zf(b,c,g,f,d,e)};function Zf(b,c,d,e,f,g){function h(){return f}var k=[];b=new Sf(b.a);for(var l=null,m=null;b.pa();){var n=Uf(b);if(187==n.id){var q=$f(n);q&&(n=d*q.fg,q=c+q.zf,null!=l&&k.push(new Q(k.length,l-g,n-g,h,m,q-1)),l=n,m=q);}}null!=l&&k.push(new Q(k.length,l-g,e-g,h,m,null));return k}
  function $f(b){var c=new Sf(b.a);b=Uf(c);if(179!=b.id)throw new D(2,3,3013);b=Xf(b);c=Uf(c);if(183!=c.id)throw new D(2,3,3012);c=new Sf(c.a);for(var d=0;c.pa();){var e=Uf(c);if(241==e.id){d=Xf(e);break}}return {fg:b,zf:d}}function ag(b,c){var d=Ef(b,c,"Initialization");if(!d)return null;var e=b.B.la,f=d.getAttribute("sourceURL");f&&(e=ud(b.B.la,[f]));f=0;var g=null;if(d=P.H(d,"range",P.kc))f=d.start,g=d.end;return new Hf(function(){return e},f,g)}
  function bg(b,c){var d=Number(Df(b,cg,"presentationTimeOffset"))||0,e=Df(b,cg,"timescale"),f=1;e&&(f=P.jc(e)||1);d=d/f||0;e=ag(b,cg);var g=b.B.contentType;f=b.B.mimeType.split("/")[1];if("text"!=g&&"mp4"!=f&&"webm"!=f)throw new D(2,4,4006);if("webm"==f&&!e)throw new D(2,4,4005);g=Ef(b,cg,"RepresentationIndex");var h=Df(b,cg,"indexRange"),k=b.B.la;h=P.kc(h||"");if(g){var l=g.getAttribute("sourceURL");l&&(k=ud(b.B.la,[l]));h=P.H(g,"range",P.kc,h);}if(!h)throw new D(2,4,4002);f=dg(b,c,e,k,h.start,h.end,
  f,d);return {createSegmentIndex:f.createSegmentIndex,findSegmentPosition:f.findSegmentPosition,getSegmentReference:f.getSegmentReference,initSegmentReference:e,ia:d}}
  function dg(b,c,d,e,f,g,h,k){var l=b.presentationTimeline,m=!b.gb||!b.R.Lc,n=b.R.start,q=b.R.duration,x=c,w=null;return {createSegmentIndex:function(){var b=[x(e,f,g),"webm"==h?x(d.c(),d.b,d.a):null];x=null;return Promise.all(b).then(function(b){var c=b[0];b=b[1]||null;c="mp4"==h?Pf(c,f,e,k):(new Yf).parse(c,b,e,k);l.ob(c,n);w=new T(c);m&&Rf(w,q);})},findSegmentPosition:function(b){return w.find(b)},getSegmentReference:function(b){return w.get(b)}}}function cg(b){return b.Lb}function eg(b,c){var d=ag(b,fg);var e=gg(b);var f=Cf(b,fg),g=f.Wa;0==g&&(g=1);var h=0;f.Z?h=f.Z*(g-1):f.M&&0<f.M.length&&(h=f.M[0].start);e={Z:f.Z,startTime:h,Wa:g,ia:f.ia,M:f.M,mb:e};if(!e.Z&&!e.M&&1<e.mb.length)throw new D(2,4,4002);if(!e.Z&&!b.R.duration&&!e.M&&1==e.mb.length)throw new D(2,4,4002);if(e.M&&0==e.M.length)throw new D(2,4,4002);g=f=null;b.ga.id&&b.B.id&&(g=b.ga.id+","+b.B.id,f=c[g]);h=hg(b.R.duration,e.Wa,b.B.la,e);f?(f.Pc(h),g=b.presentationTimeline.Db(),f.zc(g-b.R.start)):(b.presentationTimeline.ob(h,
  b.R.start),f=new T(h),g&&b.gb&&(c[g]=f));b.gb&&b.R.Lc||Rf(f,b.R.duration);return {createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:f.find.bind(f),getSegmentReference:f.get.bind(f),initSegmentReference:d,ia:e.ia}}function fg(b){return b.Ga}
  function hg(b,c,d,e){var f=e.mb.length;e.M&&e.M.length!=e.mb.length&&(f=Math.min(e.M.length,e.mb.length));for(var g=[],h=e.startTime,k=0;k<f;k++){var l=e.mb[k],m=ud(d,[l.Ze]),n=void 0;n=null!=e.Z?h+e.Z:e.M?e.M[k].end:h+b;g.push(new Q(k+c,h,n,function(b){return b}.bind(null,m),l.start,l.end));h=n;}return g}
  function gg(b){return [b.B.Ga,b.ba.Ga,b.ga.Ga].filter(td.Da).map(function(b){return P.P(b,"SegmentURL")}).reduce(function(b,d){return 0<b.length?b:d}).map(function(c){c.getAttribute("indexRange")&&!b.Cd&&(b.Cd=!0);var d=c.getAttribute("media");c=P.H(c,"mediaRange",P.kc,{start:0,end:null});return {Ze:d,start:c.start,end:c.end}})}function ig(b,c,d,e){var f=jg(b);var g=Cf(b,kg);var h=Df(b,kg,"media"),k=Df(b,kg,"index");g={Z:g.Z,timescale:g.timescale,Wa:g.Wa,ia:g.ia,nd:g.nd,M:g.M,Oc:h,Fb:k};h=g.Fb?1:0;h+=g.M?1:0;h+=g.Z?1:0;if(0==h)throw new D(2,4,4002);1!=h&&(g.Fb&&(g.M=null),g.Z=null);if(!g.Fb&&!g.Oc)throw new D(2,4,4002);if(g.Fb){d=b.B.mimeType.split("/")[1];if("mp4"!=d&&"webm"!=d)throw new D(2,4,4006);if("webm"==d&&!f)throw new D(2,4,4005);e=Bf(g.Fb,b.B.id,null,b.bandwidth||null,null);e=ud(b.B.la,[e]);b=dg(b,c,f,e,0,null,
  d,g.ia);}else g.Z?(e||(b.presentationTimeline.Rc(g.Z),b.presentationTimeline.Sc(b.R.start)),b=lg(b,g)):(h=c=null,b.ga.id&&b.B.id&&(h=b.ga.id+","+b.B.id,c=d[h]),k=mg(b,g),e=!b.gb||!b.R.Lc,c?(e&&Rf(new T(k),b.R.duration),c.Pc(k),d=b.presentationTimeline.Db(),c.zc(d-b.R.start)):(b.presentationTimeline.ob(k,b.R.start),c=new T(k),h&&b.gb&&(d[h]=c)),e&&Rf(c,b.R.duration),b={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:c.find.bind(c),getSegmentReference:c.get.bind(c)});return {createSegmentIndex:b.createSegmentIndex,
  findSegmentPosition:b.findSegmentPosition,getSegmentReference:b.getSegmentReference,initSegmentReference:f,ia:g.ia}}function kg(b){return b.Nb}
  function lg(b,c){var d=b.R.duration,e=c.Z,f=c.Wa,g=c.timescale,h=c.Oc,k=b.bandwidth||null,l=b.B.id,m=b.B.la;return {createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0>b||d&&b>=d?null:Math.floor(b/e)},getSegmentReference:function(b){var c=b*e,n=c+e;d&&(n=Math.min(n,d));return 0>n||d&&c>=d?null:new Q(b,c,n,function(){var d=Bf(h,l,b+f,k,c*g);return ud(m,[d])},0,null)}}}
  function mg(b,c){for(var d=[],e=0;e<c.M.length;e++){var f=e+c.Wa;d.push(new Q(f,c.M[e].start,c.M[e].end,function(b,c,d,e,f,n){b=Bf(b,c,f,d,n);return ud(e,[b]).map(function(b){return b.toString()})}.bind(null,c.Oc,b.B.id,b.bandwidth||null,b.B.la,f,c.M[e].eg+c.nd),0,null));}return d}function jg(b){var c=Df(b,kg,"initialization");if(!c)return null;var d=b.B.id,e=b.bandwidth||null,f=b.B.la;return new Hf(function(){var b=Bf(c,d,null,e,null);return ud(f,[b])},0,null)}var U={sb:{},Ib:{},$c:function(b,c){U.Ib[b]=c;}};z("shaka.media.ManifestParser.registerParserByExtension",U.$c);U.Kb=function(b,c){U.sb[b]=c;};z("shaka.media.ManifestParser.registerParserByMime",U.Kb);
  U.wf=function(){var b={};if(mc()){for(var c in U.sb)b[c]=!0;for(var d in U.Ib)b[d]=!0;}c={mpd:"application/dash+xml",m3u8:"application/x-mpegurl",ism:"application/vnd.ms-sstr+xml"};d=r(["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"]);for(var e=d.next();!e.done;e=d.next())e=e.value,b[e]=mc()?!!U.sb[e]:nc(e);for(var f in c)b[f]=mc()?!!U.Ib[f]:nc(c[f]);return b};
  U.create=function(b,c,d,e){return t(function g(){var h,k;return y(g,function(g){switch(g.l){case 1:return ya(g,2),u(g,U.De(b,c,d,e),4);case 4:return h=g.s,g["return"](new h);case 2:throw k=Da(g),k.severity=2,k;}})})};
  U.De=function(b,c,d,e){return t(function g(){var h,k,l,m,n;return y(g,function(g){switch(g.l){case 1:h=U;if(e&&(k=h.sb[e.toLowerCase()]))return g["return"](k);if(l=h.getExtension(b))if(m=h.Ib[l])return g["return"](m);if(e){g.A(2);break}return u(g,h.Ke(b,c,d),3);case 3:if(e=g.s)if(n=U.sb[e])return g["return"](n);case 2:throw new D(2,4,4E3,b);}})})};
  U.Ke=function(b,c,d){return t(function f(){var g,h,k;return y(f,function(f){switch(f.l){case 1:return g=Sb([b],d),g.method="HEAD",u(f,c.request(0,g).promise,2);case 2:return h=f.s,k=h.headers["content-type"],f["return"](k?k.toLowerCase():"")}})})};U.getExtension=function(b){b=(new cb(b)).fa.split("/").pop().split(".");return 1==b.length?"":b.pop().toLowerCase()};U.isSupported=function(b,c){return mc()?c in U.sb||U.getExtension(b)in U.Ib?!0:!1:!1};function W(b,c,d){this.f=b;this.lc=c;this.h=this.g=Infinity;this.b=1;this.c=this.a=null;this.j=0;this.m=!0;this.i=0;this.o=void 0===d?!0:d;}z("shaka.media.PresentationTimeline",W);W.prototype.Y=function(){return this.g};W.prototype.getDuration=W.prototype.Y;W.prototype.ta=function(b){this.g=b;};W.prototype.setDuration=W.prototype.ta;W.prototype.Pe=function(){return this.f};W.prototype.getPresentationStartTime=W.prototype.Pe;W.prototype.$d=function(b){this.j=b;};W.prototype.setClockOffset=W.prototype.$d;
  W.prototype.Ob=function(b){this.m=b;};W.prototype.setStatic=W.prototype.Ob;W.prototype.gd=function(b){this.h=b;};W.prototype.setSegmentAvailabilityDuration=W.prototype.gd;W.prototype.Mf=function(b){this.lc=b;};W.prototype.setDelay=W.prototype.Mf;W.prototype.Be=function(){return this.lc};W.prototype.getDelay=W.prototype.Be;
  W.prototype.ob=function(b,c){if(0!=b.length){var d=b[b.length-1].endTime+c;this.Sc(b[0].startTime+c);this.b=b.reduce(function(b,c){return Math.max(b,c.endTime-c.startTime)},this.b);this.c=Math.max(this.c,d);null!=this.f&&this.o&&(this.f=(Date.now()+this.j)/1E3-this.c-this.b);}};W.prototype.notifySegments=W.prototype.ob;W.prototype.Sc=function(b){null==this.a?this.a=b:(this.a=Math.max(this.a,b),window.cast&&window.cast.__platform__&&(this.a=Math.ceil(this.a*Math.pow(10,4))/Math.pow(10,4)));};
  W.prototype.notifyMinSegmentStartTime=W.prototype.Sc;W.prototype.Rc=function(b){this.b=Math.max(this.b,b);};W.prototype.notifyMaxSegmentDuration=W.prototype.Rc;W.prototype.offset=function(b){null!=this.a&&(this.a+=b);null!=this.c&&(this.c+=b);};W.prototype.offset=W.prototype.offset;W.prototype.U=function(){return Infinity==this.g&&!this.m};W.prototype.isLive=W.prototype.U;W.prototype.Ta=function(){return Infinity!=this.g&&!this.m};W.prototype.isInProgress=W.prototype.Ta;
  W.prototype.Db=function(){if(Infinity==this.h)return this.i;var b=this.jb()-this.h;return Math.max(this.i,b)};W.prototype.getSegmentAvailabilityStart=W.prototype.Db;W.prototype.ae=function(b){this.i=b;};W.prototype.setUserSeekStart=W.prototype.ae;W.prototype.jb=function(){return this.U()||this.Ta()?Math.min(Math.max(0,(Date.now()+this.j)/1E3-this.b-this.f),this.g):this.g};W.prototype.getSegmentAvailabilityEnd=W.prototype.jb;
  W.prototype.Cb=function(b){var c=Math.max(this.a,this.i);if(Infinity==this.h)return c;var d=this.jb()-this.h;b=Math.min(d+b,this.wa());return Math.max(c,b)};W.prototype.getSafeSeekRangeStart=W.prototype.Cb;W.prototype.ib=function(){return this.Cb(0)};W.prototype.getSeekRangeStart=W.prototype.ib;W.prototype.wa=function(){var b=this.U()||this.Ta()?this.lc:0;return Math.max(0,this.jb()-b)};W.prototype.getSeekRangeEnd=W.prototype.wa;W.prototype.ee=function(){return null==this.f||null!=this.c?!1:!0};
  W.prototype.usingPresentationStartTime=W.prototype.ee;function ng(b,c,d,e){b=Sb(b,e);if(0!=c||null!=d)b.headers.Range=d?"bytes="+c+"-"+d:"bytes="+c+"-";return b}function og(){var b=this;this.a=this.b=null;this.f=[];this.c=null;this.j=[];this.h=1;this.m={};this.o=0;this.v=new Ua(5);this.i=new B(function(){pg(b);});this.g=new Nb;}z("shaka.dash.DashParser",og);p=og.prototype;p.configure=function(b){this.b=b;};p.start=function(b,c){var d=this;return t(function f(){var g;return y(f,function(f){switch(f.l){case 1:return d.f=[b],d.a=c,u(f,qg(d),2);case 2:g=f.s;d.a&&rg(d,g);if(!d.a)throw new D(2,7,7001);return f["return"](d.c)}})})};
  p.stop=function(){this.b=this.a=null;this.f=[];this.c=null;this.j=[];this.m={};null!=this.i&&(this.i.stop(),this.i=null);return this.g.destroy()};p.update=function(){qg(this)["catch"](function(b){if(this.a)this.a.onError(b);}.bind(this));};p.onExpirationUpdated=function(){};
  function qg(b){var c=Date.now(),d=b.a.networkingEngine.request(0,Sb(b.f,b.b.retryParameters));Ob(b.g,d);return d.promise.then(function(c){if(b.a)return c.uri&&!b.f.includes(c.uri)&&b.f.unshift(c.uri),sg(b,c.data,c.uri)}).then(function(){var d=(Date.now()-c)/1E3;Wa(b.v,1,d);return d})}function sg(b,c,d){c=P.Pd(c,"MPD");if(!c)throw new D(2,4,4001,d);c=Gf(c,b.b.retryParameters,b.b.dash.xlinkFailGracefully,d,b.a.networkingEngine);Ob(b.g,c);return c.promise.then(function(c){return tg(b,c,d)})}
  function tg(b,c,d){return t(function f(){var g,h,k,l,m,n,q,x,w,A,C,E,F,V,Y,wa,Ba,ba,na,xa,ja,Va,Ca,vb,Ia,eb;return y(f,function(f){switch(f.l){case 1:l=td;m=P;n=[d];q=m.P(c,"Location").map(m.ac).filter(l.Da);0<q.length&&(x=ud(n,q),n=b.f=x);w=m.P(c,"BaseURL").map(m.ac);A=ud(n,w);C=b.b.dash.ignoreMinBufferTime;E=0;C||(E=m.H(c,"minBufferTime",m.za));b.o=m.H(c,"minimumUpdatePeriod",m.za,-1);F=m.H(c,"availabilityStartTime",m.rf);V=m.H(c,"timeShiftBufferDepth",m.za);Y=m.H(c,"suggestedPresentationDelay",
  m.za);wa=m.H(c,"maxSegmentDuration",m.za);Ba=c.getAttribute("type")||"static";b.c?ba=b.c.presentationTimeline:(na=Math.max(b.b.dash.defaultPresentationDelay,1.5*E),xa=null!=Y?Y:na,ba=new W(F,xa,b.b.dash.autoCorrectDrift));ja={gb:"static"!=Ba,presentationTimeline:ba,ga:null,R:null,ba:null,B:null,bandwidth:0,Cd:!1};for(var vc=ja,wb=A,Hb=P.H(c,"mediaPresentationDuration",P.za),xb=[],Ja=0,wc=P.P(c,"Period"),gb=0;gb<wc.length;gb++){var Ka=wc[gb];Ja=P.H(Ka,"start",P.za,Ja);var Ad=P.H(Ka,"duration",P.za),
  yb=null;if(gb!=wc.length-1){var fb=P.H(wc[gb+1],"start",P.za);null!=fb&&(yb=fb-Ja);}else null!=Hb&&(yb=Hb-Ja);null==yb&&(yb=Ad);Ka=ug(b,vc,wb,{start:Ja,duration:yb,node:Ka,Lc:null==yb||gb==wc.length-1});xb.push(Ka);Ad=vc.ga.id;b.j.includes(Ad)||(b.j.push(Ad),b.c&&(b.a.filterNewPeriod(Ka),b.c.periods.push(Ka)));if(null==yb){Ja=null;break}Ja+=yb;}null==b.c&&b.a.filterAllPeriods(xb);null!=Hb?(g=xb,h=Hb,k=!1):(g=xb,h=Ja,k=!0);Va=h;Ca=g;ba.Ob("static"==Ba);"static"!=Ba&&k||ba.ta(Va||Infinity);(vb=ba.U())&&
  !isNaN(b.b.availabilityWindowOverride)&&(V=b.b.availabilityWindowOverride);null==V&&(V=Infinity);ba.gd(V);ba.Rc(wa||1);if(b.c){f.A(0);break}b.c={presentationTimeline:ba,periods:Ca,offlineSessionIds:[],minBufferTime:E||0};if(!ba.ee()){f.A(0);break}Ia=m.P(c,"UTCTiming");return u(f,vg(b,A,Ia),4);case 4:eb=f.s;if(!b.a)return f["return"]();ba.$d(eb);v(f);}})})}
  function ug(b,c,d,e){c.ga=wg(e.node,null,d);c.R=e;c.ga.id||(c.ga.id="__shaka_period_"+e.start);P.P(e.node,"EventStream").forEach(b.sf.bind(b,e.start,e.duration));d=P.P(e.node,"AdaptationSet").map(b.qf.bind(b,c)).filter(td.Da);if(c.gb){c=[];for(var f=r(d),g=f.next();!g.done;g=f.next()){g=r(g.value.Cf);for(var h=g.next();!h.done;h=g.next())c.push(h.value);}if(c.length!=(new Set(c)).size)throw new D(2,4,4018);}var k=d.filter(function(b){return !b.ld});d.filter(function(b){return b.ld}).forEach(function(b){var c=
  b.streams[0],d=b.ld;k.forEach(function(b){b.id==d&&b.streams.forEach(function(b){b.trickModeVideo=c;});});});c=xg(k,"video");f=xg(k,"audio");if(!c.length&&!f.length)throw new D(2,4,4004);f.length||(f=[null]);c.length||(c=[null]);d=[];for(g=0;g<f.length;g++)for(h=0;h<c.length;h++)yg(b,f[g],c[h],d);b=xg(k,"text");c=[];for(f=0;f<b.length;f++)c.push.apply(c,b[f].streams);return {startTime:e.start,textStreams:c,variants:d}}function xg(b,c){return b.filter(function(b){return b.contentType==c})}
  function yg(b,c,d,e){if(c||d)if(c&&d){var f=c.drmInfos;var g=d.drmInfos;if(f.length&&g.length?0<ld(f,g).length:1){g=ld(c.drmInfos,d.drmInfos);for(var h=0;h<c.streams.length;h++)for(var k=0;k<d.streams.length;k++)f=(d.streams[k].bandwidth||0)+(c.streams[h].bandwidth||0),f={id:b.h++,language:c.language,primary:c.Nc||d.Nc,audio:c.streams[h],video:d.streams[k],bandwidth:f,drmInfos:g,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}}else for(g=c||d,h=0;h<g.streams.length;h++)f=g.streams[h].bandwidth||
  0,f={id:b.h++,language:g.language||"und",primary:g.Nc,audio:c?g.streams[h]:null,video:d?g.streams[h]:null,bandwidth:f,drmInfos:g.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}
  p.qf=function(b,c){b.ba=wg(c,b.ga,null);var d=!1,e=P.P(c,"Role"),f=e.map(function(b){return b.getAttribute("value")}).filter(td.Da),g=void 0,h="text"==b.ba.contentType;h&&(g="subtitle");for(var k=0;k<e.length;k++){var l=e[k].getAttribute("schemeIdUri");if(null==l||"urn:mpeg:dash:role:2011"==l)switch(l=e[k].getAttribute("value"),l){case "main":d=!0;break;case "caption":case "subtitle":g=l;}}var m=null,n=!1;P.P(c,"EssentialProperty").forEach(function(b){"http://dashif.org/guidelines/trickmode"==b.getAttribute("schemeIdUri")?
  m=b.getAttribute("value"):n=!0;});k=P.P(c,"Accessibility");var q=new Map;e={};k=r(k);for(l=k.next();!l.done;e={Ab:e.Ab},l=k.next()){l=l.value;var x=l.getAttribute("schemeIdUri");if("urn:scte:dash:cc:cea-608:2015"==x||"urn:scte:dash:cc:cea-708:2015"==x)e.Ab=1,l=l.getAttribute("value"),null!=l?l.split(";").forEach(function(b){return function(c){if(c.includes("=")){c=c.split("=");var d=c[0].startsWith("CC")?c[0]:"CC"+c[0];c=c[1].split(",")[0].split(":").pop();}else d="CC"+b.Ab,b.Ab+=2;q.set(d,M(c));}}(e)):
  q.set("CC1","und");}if(n)return null;e=P.P(c,"ContentProtection");var w=uf(e,this.b.dash.customScheme,this.b.dash.ignoreDrmInfo);e=M(c.getAttribute("lang")||"und");l=c.getAttribute("label");k=P.P(c,"Representation");f=k.map(this.tf.bind(this,b,w,g,e,l,d,f,q)).filter(function(b){return !!b});if(0==f.length){if(h)return null;throw new D(2,4,4003);}b.ba.contentType&&"application"!=b.ba.contentType||(b.ba.contentType=zg(f[0].mimeType,f[0].codecs),f.forEach(function(c){c.type=b.ba.contentType;}));f.forEach(function(b){w.drmInfos.forEach(function(c){b.keyId&&
  c.keyIds.push(b.keyId);});});h=k.map(function(b){return b.getAttribute("id")}).filter(td.Da);return {id:b.ba.id||"__fake__"+this.h++,contentType:b.ba.contentType,language:e,Nc:d,streams:f,drmInfos:w.drmInfos,ld:m,Cf:h}};
  p.tf=function(b,c,d,e,f,g,h,k,l){b.B=wg(l,b.ba,null);if(!Ag(b.B))return null;b.bandwidth=P.H(l,"bandwidth",P.jc)||0;var m=b.B.contentType;m="text"==m||"application"==m;try{var n=this.Df.bind(this);if(b.B.Lb)var q=bg(b,n);else if(b.B.Ga)q=eg(b,this.m);else if(b.B.Nb)q=ig(b,n,this.m,!!this.c);else{var x=b.B.la,w=b.R.duration||0;q={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0<=b&&b<w?1:null},getSegmentReference:function(b){return 1!=b?null:new Q(1,0,w,function(){return x},
  0,null)},initSegmentReference:null,ia:0};}}catch(A){if(m&&4002==A.code)return null;throw A;}l=P.P(l,"ContentProtection");l=xf(l,this.b.dash.customScheme,c,this.b.dash.ignoreDrmInfo);return {id:this.h++,originalId:b.B.id,createSegmentIndex:q.createSegmentIndex,findSegmentPosition:q.findSegmentPosition,getSegmentReference:q.getSegmentReference,initSegmentReference:q.initSegmentReference,presentationTimeOffset:q.ia,mimeType:b.B.mimeType,codecs:b.B.codecs,frameRate:b.B.frameRate,bandwidth:b.bandwidth,width:b.B.width,
  height:b.B.height,kind:d,encrypted:0<c.drmInfos.length,keyId:l,language:e,label:f,type:b.ba.contentType,primary:g,trickModeVideo:null,emsgSchemeIdUris:b.B.emsgSchemeIdUris,roles:h,channelsCount:b.B.Tc,closedCaptions:k}};function pg(b){t(function d(){var e,f;return y(d,function(d){switch(d.l){case 1:return e=0,ya(d,2),u(d,qg(b),4);case 4:e=d.s;Aa(d,3);break;case 2:f=Da(d),b.a&&(f.severity=1,b.a.onError(f));case 3:if(!b.a)return d["return"]();rg(b,e);v(d);}})});}
  function rg(b,c){0>b.o||b.i.O(Math.max(3,b.o-c,Xa(b.v)));}
  function wg(b,c,d){c=c||{contentType:"",mimeType:"",codecs:"",emsgSchemeIdUris:[],frameRate:void 0,Tc:null};d=d||c.la;var e=P.rb,f=P.we,g=P.P(b,"BaseURL").map(P.ac),h=b.getAttribute("contentType")||c.contentType,k=b.getAttribute("mimeType")||c.mimeType,l=b.getAttribute("codecs")||c.codecs;f=P.H(b,"frameRate",f)||c.frameRate;var m=P.P(b,"InbandEventStream"),n=c.emsgSchemeIdUris.slice();m=r(m);for(var q=m.next();!q.done;q=m.next())q=q.value.getAttribute("schemeIdUri"),n.includes(q)||n.push(q);m=P.P(b,
  "AudioChannelConfiguration");m=Bg(m)||c.Tc;h||(h=zg(k,l));return {la:ud(d,g),Lb:P.Yb(b,"SegmentBase")||c.Lb,Ga:P.Yb(b,"SegmentList")||c.Ga,Nb:P.Yb(b,"SegmentTemplate")||c.Nb,width:P.H(b,"width",e)||c.width,height:P.H(b,"height",e)||c.height,contentType:h,mimeType:k,codecs:l,frameRate:f,emsgSchemeIdUris:n,id:b.getAttribute("id"),Tc:m}}
  function Bg(b){for(var c=0;c<b.length;++c){var d=b[c],e=d.getAttribute("schemeIdUri");if(e&&(d=d.getAttribute("value")))switch(e){case "urn:mpeg:dash:outputChannelPositionList:2012":return d.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":e=parseInt(d,10);if(!e)continue;return e;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":if(e=parseInt(d,
  16)){for(b=0;e;)e&1&&++b,e>>=1;return b}}}return null}function Ag(b){var c=b.Lb?1:0;c+=b.Ga?1:0;c+=b.Nb?1:0;if(0==c)return "text"==b.contentType||"application"==b.contentType?!0:!1;1!=c&&(b.Lb&&(b.Ga=null),b.Nb=null);return !0}
  function Cg(b,c,d,e){c=ud(c,[d]);c=Sb(c,b.b.retryParameters);c.method=e;c=b.a.networkingEngine.request(4,c);Ob(b.g,c);return c.promise.then(function(b){if("HEAD"==e){if(!b.headers||!b.headers.date)return 0;b=b.headers.date;}else b=sc(b.data);b=Date.parse(b);return isNaN(b)?0:b-Date.now()})}
  function vg(b,c,d){d=d.map(function(b){return {scheme:b.getAttribute("schemeIdUri"),value:b.getAttribute("value")}});var e=b.b.dash.clockSyncUri;!d.length&&e&&d.push({scheme:"urn:mpeg:dash:utc:http-head:2014",value:e});return td.ue(d,function(b){var d=b.scheme;b=b.value;switch(d){case "urn:mpeg:dash:utc:http-head:2014":case "urn:mpeg:dash:utc:http-head:2012":return Cg(this,c,b,"HEAD");case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return Cg(this,
  c,b,"GET");case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return d=Date.parse(b),isNaN(d)?0:d-Date.now();case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":return $a("NTP UTCTiming scheme is not supported"),Promise.reject();default:return $a("Unrecognized scheme in UTCTiming element",d),Promise.reject()}}.bind(b))["catch"](function(){$a("A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!");
  return 0})}p.sf=function(b,c,d){var e=P.rb,f=d.getAttribute("schemeIdUri")||"",g=d.getAttribute("value")||"",h=P.H(d,"timescale",e)||1;P.P(d,"Event").forEach(function(d){var k=P.H(d,"presentationTime",e)||0,m=P.H(d,"duration",e)||0;k=k/h+b;m=k+m/h;null!=c&&(k=Math.min(k,b+c),m=Math.min(m,b+c));d={schemeIdUri:f,value:g,startTime:k,endTime:m,id:d.getAttribute("id")||"",eventElement:d};this.a.onTimelineRegionAdded(d);}.bind(this));};
  p.Df=function(b,c,d){b=ng(b,c,d,this.b.retryParameters);b=this.a.networkingEngine.request(1,b);Ob(this.g,b);return b.promise.then(function(b){return b.data})};function zg(b,c){return Wd(ic(b,c))?"text":b.split("/")[0]}U.$c("mpd",og);U.Kb("application/dash+xml",og);function Dg(b,c,d,e){this.b=b;this.type=c;this.a=d;this.segments=e||null;}function Eg(b,c,d,e){this.id=b;this.name=c;this.a=d;this.value=void 0===e?null:e;}Eg.prototype.toString=function(){function b(b){return b.name+"="+(isNaN(Number(b.value))?'"'+b.value+'"':b.value)}var c="#"+this.name,d=this.a?this.a.map(b):[];this.value&&d.unshift(this.value);0<d.length&&(c+=":"+d.join(","));return c};function Fg(b,c){this.name=b;this.value=c;}
  Eg.prototype.getAttribute=function(b){var c=this.a.filter(function(c){return c.name==b});return c.length?c[0]:null};function Gg(b,c,d){return (b=b.getAttribute(c))?b.value:d||null}function Hg(b,c){this.b=c;this.a=b;}var Ig={hb:function(b,c){return b.filter(function(b){return b.name==c})},Pa:function(b,c){var d=Ig.hb(b,c);return d.length?d[0]:null},Cc:function(b,c,d){return b.filter(function(b){var e=b.getAttribute("TYPE");b=b.getAttribute("GROUP-ID");return e.value==c&&b.value==d})},vc:function(b,c){return ud([b],[c])[0]},Kc:function(b){return /^#(?!EXT)/m.test(b)}};function Jg(b){this.b=b;this.a=0;}function Kg(b){Lg(b,/[ \t]+/gm);}function Lg(b,c){c.lastIndex=b.a;var d=c.exec(b.b);d=null==d?null:{position:d.index,length:d[0].length,Ff:d};if(b.a==b.b.length||null==d||d.position!=b.a)return null;b.a+=d.length;return d.Ff}function Mg(b){return b.a==b.b.length?null:(b=Lg(b,/[^ \t\n]*/gm))?b[0]:null}function Ng(){this.a=0;}
  function Og(b,c,d){c=sc(c);c=c.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n").trim();var e=c.split(/\n+/m);if(!/^#EXTM3U($|[ \t\n])/m.test(e[0]))throw new D(2,4,4015);c=0;for(var f=1;f<e.length;f++)if(!Ig.Kc(e[f])){var g=Pg(b,e[f]);--b.a;if(Qg.includes(g.name)){c=1;break}else"EXT-X-STREAM-INF"==g.name&&(f+=1);}f=[];for(g=1;g<e.length;)if(Ig.Kc(e[g]))g+=1;else{var h=Pg(b,e[g]);if(Rg.includes(h.name)){if(1!=c)throw new D(2,4,4017);e=e.splice(g,e.length-g);b=Sg(b,d,e,f);return new Dg(d,c,f,b)}f.push(h);g+=1;"EXT-X-STREAM-INF"==
  h.name&&(h.a.push(new Fg("URI",e[g])),g+=1);}return new Dg(d,c,f)}function Sg(b,c,d,e){var f=[],g=[];d.forEach(function(d){if(/^(#EXT)/.test(d))d=Pg(b,d),Qg.includes(d.name)?e.push(d):g.push(d);else{if(Ig.Kc(d))return [];d=Ig.vc(c,d.trim());f.push(new Hg(d,g));g=[];}});return f}
  function Pg(b,c){var d=b.a++,e=c.match(/^#(EXT[^:]*)(?::(.*))?$/);if(!e)throw new D(2,4,4016,c);var f=e[1],g=e[2];e=[];var h;if(g){g=new Jg(g);var k;(k=Lg(g,/^([^,=]+)(?:,|$)/g))&&(h=k[1]);for(var l=/([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;k=Lg(g,l);)e.push(new Fg(k[1],k[2]||k[3]));}return new Eg(d,f,e,h)}var Qg="EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(" "),Rg="EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");function Tg(b){try{var c=Tg.parse(b);return Cb({uri:b,data:c.data,headers:{"content-type":c.contentType}})}catch(d){return Ab(d)}}z("shaka.net.DataUriPlugin",Tg);
  Tg.parse=function(b){var c=b.split(":");if(2>c.length||"data"!=c[0])throw new D(2,1,1004,b);c=c.slice(1).join(":").split(",");if(2>c.length)throw new D(2,1,1004,b);var d=c[0];c=window.decodeURIComponent(c.slice(1).join(","));d=d.split(";");var e=null;1<d.length&&(e=d[1]);if("base64"==e)b=Bc(c).buffer;else{if(e)throw new D(2,1,1005,b);b=yc(c);}return {data:b,contentType:d[0]}};Rb("data",Tg);function Ug(){var b=this;this.c=this.g=null;this.W=1;this.C=new Map;this.S=new Set;this.a=new Map;this.b=null;this.v="";this.o=new Ng;this.N=0;this.h=new B(function(){Vg(b);});this.f=Wg;this.m=null;this.w=0;this.F=Infinity;this.i=new Nb;this.K=[];this.j=new Map;this.V=!1;}z("shaka.hls.HlsParser",Ug);p=Ug.prototype;p.configure=function(b){this.c=b;};
  p.start=function(b,c){var d=this;return t(function f(){var g,h;return y(f,function(f){switch(f.l){case 1:return d.g=c,u(f,Xg(d,b),2);case 2:return g=f.s,d.v=g.uri,u(f,Yg(d,g.data),3);case 3:return h=d.N,0<h&&d.h.O(h),f["return"](d.m)}})})};p.stop=function(){this.h&&(this.h.stop(),this.h=null);var b=[];this.i&&(b.push(this.i.destroy()),this.i=null);this.c=this.g=null;this.C.clear();this.S.clear();this.a.clear();this.m=null;return Promise.all(b)};
  p.update=function(){if(this.f!=Zg.Ma){for(var b=[],c=r(this.a.values()),d=c.next();!d.done;d=c.next())b.push($g(this,d.value));return Promise.all(b)}};
  function $g(b,c){return t(function e(){var f,g,h,k,l,m,n,q,x,w,A;return y(e,function(e){switch(e.l){case 1:return f=Ig,g=Zg,h=c.me,u(e,Xg(b,h),2);case 2:k=e.s;l=Og(b.o,k.data,k.uri);if(1!=l.type)throw new D(2,4,4017);n=(m=f.Pa(l.a,"EXT-X-MEDIA-SEQUENCE"))?Number(m.value):0;q=c.stream;return u(e,ah(b,c.pc,l,n,q.mimeType,q.codecs),3);case 3:x=e.s;c.Mb.a=x;w=x[x.length-1];if(A=f.Pa(l.a,"EXT-X-ENDLIST"))bh(b,g.Ma),b.b.ta(w.endTime);v(e);}})})}p.onExpirationUpdated=function(){};
  function Yg(b,c){return t(function e(){var f,g,h,k,l,m,n,q,x,w,A;return y(e,function(e){switch(e.l){case 1:f=Og(b.o,c,b.v);if(0!=f.type)throw new D(2,4,4022);return u(e,ch(b,f),2);case 2:g=e.s;if(!b.g)throw new D(2,7,7001);if(b.V&&0==g.variants.length)throw new D(2,4,4034);b.g.filterAllPeriods([g]);h=Infinity;k=0;l=Infinity;for(var E=r(b.a.values()),F=E.next();!F.done;F=E.next())m=F.value,h=Math.min(h,m.Qc),k=Math.max(k,m.Qc),"text"!=m.stream.type&&(l=Math.min(l,m.duration));b.f!=Zg.Ma?(b.b=new W(0,
  3*b.w),b.b.Ob(!1)):(b.b=new W(null,0),b.b.Ob(!0));dh(b);if(b.f!=Zg.Ma){b.N=b.F;n=Zg;b.f==n.od&&(q=b.b.lc,isNaN(b.c.availabilityWindowOverride)||(q=b.c.availabilityWindowOverride),b.b.gd(q));for(x=0;95443.7176888889<=k;)x+=95443.7176888889,k-=95443.7176888889;if(x)for(E=r(b.a.values()),F=E.next();!F.done;F=E.next())w=F.value,95443.7176888889>w.Qc&&(w.stream.presentationTimeOffset=-x,w.Mb.offset(x));}else for(b.b.ta(l),b.b.offset(-h),E=r(b.a.values()),F=E.next();!F.done;F=E.next())A=F.value,A.stream.presentationTimeOffset=
  h,A.Mb.offset(-h),Rf(A.Mb,l);b.m={presentationTimeline:b.b,periods:[g],offlineSessionIds:[],minBufferTime:0};v(e);}})})}
  function ch(b,c){return t(function e(){var f,g,h,k,l,m,n,q,x,w,A,C;return y(e,function(e){switch(e.l){case 1:return f=Ig,g=td,h=c.a,k=f.hb(c.a,"EXT-X-MEDIA"),l=k.filter(function(b){return "SUBTITLES"==eh(b,"TYPE")}.bind(b)),m=l.map(function(b){return fh(this,b)}.bind(b)),n=k.filter(function(b){return "CLOSED-CAPTIONS"==eh(b,"TYPE")}),gh(b,n),u(e,Promise.all(m),2);case 2:return q=e.s,x=f.hb(h,"EXT-X-STREAM-INF"),w=x.map(function(b){return hh(this,b,c)}.bind(b)),u(e,Promise.all(w),3);case 3:return A=
  e.s,C=A.reduce(g.uc,[]),C=C.filter(function(b){return null!=b}),e["return"]({startTime:0,variants:C,textStreams:q})}})})}
  function hh(b,c,d){return t(function f(){var g,h,k,l,m,n,q,x,w,A,C,E,F,V,Y,wa,Ba,ba,na,xa,ja,Va,Ca,vb,Ia,eb,fb;return y(f,function(f){switch(f.l){case 1:g=wd;h=Ig;k=Gg(c,"CODECS","avc1.42E01E,mp4a.40.2");l=ih(k.split(/\s*,\s*/));m=c.getAttribute("RESOLUTION");q=n=null;x=Gg(c,"FRAME-RATE");w=Number(eh(c,"BANDWIDTH"));m&&(A=m.value.split("x"),n=A[0],q=A[1]);C=h.hb(d.a,"EXT-X-MEDIA");C=C.filter(function(b){return "CLOSED-CAPTIONS"!=eh(b,"TYPE")});C=C.filter(function(b){var c=Gg(b,"URI")||"";return "SUBTITLES"==
  (Gg(b,"TYPE")||"")||""!=c});E=Gg(c,"AUDIO");F=Gg(c,"VIDEO");E?C=h.Cc(C,"AUDIO",E):F&&(C=h.Cc(C,"VIDEO",F));if(V=jh(g.na,l)){if(Y=Gg(c,"SUBTITLES"))wa=h.Cc(C,"SUBTITLES",Y),wa.length&&(Ba=b.C.get(wa[0].id),Ba.stream.codecs=V);Kb(l,V);}ba=C.map(function(b){return kh(this,b,l)}.bind(b));na=[];xa=[];return u(f,Promise.all(ba),2);case 2:Va=f.s;Va=Va.filter(function(b){return null!=b});E?na=Va:F&&(xa=Va);vb=!1;na.length||xa.length?na.length?(eb=eh(c,"URI"),fb=na[0].pc,eb==fb?(Ca=g.wb,vb=!0):Ca=g.La):Ca=
  g.wb:1==l.length?(Ia=jh(g.La,l),Ca=m||x||Ia?g.La:g.wb):(Ca=g.La,l=[l.join(",")]);if(vb){f.A(3);break}return u(f,lh(b,c,l,Ca),4);case 4:ja=f.s;case 3:if(ja)ja.stream.type==g.wb?na=[ja]:xa=[ja];else if(null===ja)return f["return"]([]);xa&&mh(xa);na&&mh(na);return f["return"](nh(b,na,xa,w,n,q,x))}})})}function mh(b){b.forEach(function(b){var c=b.stream.codecs.split(",");c=c.filter(function(b){return "mp4a.40.34"!=b});b.stream.codecs=c.join(",");});}
  function nh(b,c,d,e,f,g,h){d.forEach(function(b){if(b=b.stream)b.width=Number(f)||void 0,b.height=Number(g)||void 0,b.frameRate=Number(h)||void 0;}.bind(b));c.length||(c=[null]);d.length||(d=[null]);var k=[];c=r(c);for(var l=c.next();!l.done;l=c.next()){l=l.value;for(var m=r(d),n=m.next();!n.done;n=m.next()){var q=n.value;n=l?l.stream:null;var x=q?q.stream:null,w=l?l.drmInfos:null,A=q?q.drmInfos:null;q=(q?q.pc:"")+" - "+(l?l.pc:"");var C=void 0;if(n&&x)if(w.length&&A.length?0<ld(w,A).length:1)C=ld(w,
  A);else continue;else n?C=w:x&&(C=A);b.S.has(q)||(n=oh(b,n,x,e,C),k.push(n),b.S.add(q));}}return k}function oh(b,c,d,e,f){return {id:b.W++,language:c?c.language:"und",primary:!!c&&c.primary||!!d&&d.primary,audio:c,video:d,bandwidth:e,drmInfos:f,allowedByApplication:!0,allowedByKeySystem:!0}}function fh(b,c){return t(function e(){var f;return y(e,function(e){switch(e.l){case 1:return eh(c,"TYPE"),u(e,kh(b,c,[]),2);case 2:return f=e.s,e["return"](f.stream)}})})}
  function gh(b,c){for(var d=r(c),e=d.next();!e.done;e=d.next()){e=e.value;eh(e,"TYPE");var f=Gg(e,"LANGUAGE")||"und";f=M(f);var g=eh(e,"GROUP-ID");e=eh(e,"INSTREAM-ID");b.j.get(g)||b.j.set(g,new Map);b.j.get(g).set(e,f);}}
  function kh(b,c,d){return t(function f(){var g,h,k,l,m,n,q,x,w,A,C;return y(f,function(f){switch(f.l){case 1:g=eh(c,"URI");if(b.a.has(g))return f["return"](b.a.get(g));h=eh(c,"TYPE").toLowerCase();k=wd;"subtitles"==h&&(h=k.na);l=M(Gg(c,"LANGUAGE","und"));m=Gg(c,"NAME");n=c.getAttribute("DEFAULT");q=c.getAttribute("AUTOSELECT");x=Gg(c,"CHANNELS");if("audio"==h)if(x){var E=x.split("/")[0];E=parseInt(E,10);}else E=null;else E=null;w=E;A=!!n||!!q;return u(f,ph(b,g,d,h,l,A,m,w,null),2);case 2:C=f.s;if(null==
  C)return f["return"](null);if(b.a.has(g))return f["return"](b.a.get(g));b.C.set(c.id,C);b.a.set(g,C);return f["return"](C)}})})}
  function lh(b,c,d,e){return t(function g(){var h,k,l,m,n;return y(g,function(g){switch(g.l){case 1:h=wd;k=eh(c,"URI");if(b.a.has(k))return g["return"](b.a.get(k));l=Gg(c,"CLOSED-CAPTIONS");m=null;e==h.La&&l&&"NONE"!=l&&(m=b.j.get(l));return u(g,ph(b,k,d,e,"und",!1,null,null,m),2);case 2:n=g.s;if(null==n)return g["return"](null);if(b.a.has(k))return g["return"](b.a.get(k));b.a.set(k,n);return g["return"](n)}})})}
  function ph(b,c,d,e,f,g,h,k,l){return t(function n(){var q,x,w,A,C,E,F,V,Y,wa,Ba,ba,na,xa,ja,Va,Ca,vb,Ia,eb,fb,vc,wb,Hb,xb,Ja;return y(n,function(n){switch(n.l){case 1:return q=Ig,x=q.vc(b.v,c),A="",u(n,Xg(b,x),2);case 2:E=n.s;x=E.uri;w=Og(b.o,E.data,x);if(1!=w.type)throw new D(2,4,4017);F=[];w.segments.forEach(function(b){b=q.hb(b.b,"EXT-X-KEY");F.push.apply(F,b);});V=!1;Y=[];wa=null;for(var gb=r(F),Ka=gb.next();!Ka.done;Ka=gb.next())if(Ba=Ka.value,ba=eh(Ba,"METHOD"),"NONE"!=ba){V=!0;if("AES-128"==
  ba)return b.V=!0,n["return"](null);na=eh(Ba,"KEYFORMAT");if(ja=(xa=qh[na])?xa(Ba):null)ja.keyIds.length&&(wa=ja.keyIds[0]),Y.push(ja);}if(V&&!Y.length)throw new D(2,4,4026);rh(b,w);A=sh(e,d);return u(n,th(b,e,A,w),3);case 3:return C=Va=n.s,vb=(Ca=q.Pa(w.a,"EXT-X-MEDIA-SEQUENCE"))?Number(Ca.value):0,u(n,ah(b,c,w,vb,C,A),4);case 4:return Ia=n.s,eb=Ia[0].startTime,fb=Ia[Ia.length-1].endTime,vc=fb-eb,wb=new T(Ia),Hb=uh(w),xb=void 0,"text"==e&&(xb="subtitle"),Ja={id:b.W++,originalId:h,createSegmentIndex:Promise.resolve.bind(Promise),
  findSegmentPosition:wb.find.bind(wb),getSegmentReference:wb.get.bind(wb),initSegmentReference:Hb,presentationTimeOffset:0,mimeType:C,codecs:A,kind:xb,encrypted:V,keyId:wa,language:f,label:h,type:e,primary:g,trickModeVideo:null,emsgSchemeIdUris:null,frameRate:void 0,width:void 0,height:void 0,bandwidth:void 0,roles:[],channelsCount:k,closedCaptions:l},n["return"]({stream:Ja,Mb:wb,drmInfos:Y,pc:c,me:x,Qc:eb,qg:fb,duration:vc})}})})}
  function rh(b,c){var d=Zg,e=Ig.Pa(c.a,"EXT-X-PLAYLIST-TYPE"),f=Ig.Pa(c.a,"EXT-X-ENDLIST");f=e&&"VOD"==e.value||f;e=e&&"EVENT"==e.value&&!f;e=!f&&!e;f?bh(b,d.Ma):(e?bh(b,d.od):bh(b,d.he),d=vh(c.a,"EXT-X-TARGETDURATION"),d=Number(d.value),b.w=Math.max(d,b.w),b.F=Math.min(d,b.F));}
  function uh(b){var c=Ig.hb(b.a,"EXT-X-MAP");if(!c.length)return null;if(1<c.length)throw new D(2,4,4020);c=c[0];var d=eh(c,"URI"),e=Ig.vc(b.b,d);b=0;d=null;if(c=Gg(c,"BYTERANGE"))b=c.split("@"),c=Number(b[0]),b=Number(b[1]),d=b+c-1;return new Hf(function(){return [e]},b,d)}
  function wh(b,c,d,e){var f=c.b,g=c.a;c=vh(f,"EXTINF").value.split(",");c=e+Number(c[0]);var h=0,k=null;if(f=Ig.Pa(f,"EXT-X-BYTERANGE"))h=f.value.split("@"),f=Number(h[0]),h=h[1]?Number(h[1]):b.a+1,k=h+f-1;return new Q(d,e,c,function(){return [g]},h,k)}function dh(b){b.b&&(b.K.forEach(function(c){b.b.ob(c,0);}),b.K=[]);}
  function ah(b,c,d,e,f,g){return t(function k(){var l,m,n,q,x,w,A,C,E,F,V;return y(k,function(k){switch(k.l){case 1:return l=d.segments,m=[],n=l[0].a,q=wh(null,l[0],e,0),x=uh(d),u(k,xh(b,c,x,q,f,g),2);case 2:w=k.s;n.split("/").pop();for(var Y=0;Y<l.length;++Y)A=l[Y],C=m[m.length-1],E=0==Y?w:C.endTime,F=e+Y,V=wh(C,A,F,E),m.push(V);b.K.push(m);dh(b);return k["return"](m)}})})}
  function yh(b,c){return t(function e(){var f,g,h,k,l,m;return y(e,function(e){switch(e.l){case 1:return f=Pb,g=ng(c.c(),c.b,c.b+2048-1,b.c.retryParameters),h=ng(c.c(),c.b,c.a,b.c.retryParameters),ya(e,2),u(e,zh(b,g,f.pd),4);case 4:return k=e.s,e["return"](k);case 2:l=Da(e);if(7001==l.code)throw l;$a("Unable to fetch a partial HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",g.uris[0]);return u(e,zh(b,h,f.pd),
  5);case 5:return m=e.s,e["return"](m)}})})}
  function xh(b,c,d,e,f,g){return t(function k(){var l,m,n,q,x,w,A,C,E;return y(k,function(k){switch(k.l){case 1:if(b.m&&(l=b.a.get(c),m=l.Mb,n=m.get(e.position)))return k["return"](n.startTime);if("audio/mpeg"==f)return k["return"](0);if("video/mp4"!=f&&"audio/mp4"!=f){k.A(2);break}q=[yh(b,e)];d&&q.push(yh(b,d));return u(k,Promise.all(q),3);case 3:return x=k.s,w=x[0],A=x[1]||x[0],k["return"](Ah(w.data,A.data));case 2:if("video/mp2t"!=f){k.A(4);break}return u(k,yh(b,e),5);case 5:return C=k.s,k["return"](Bh(C.data));
  case 4:if("application/mp4"!=f&&!f.startsWith("text/")){k.A(6);break}return u(k,yh(b,e),7);case 7:return E=k.s,k["return"](Ch(f,g,E.data));case 6:throw new D(2,4,4030);}})})}
  function Ah(b,c){var d=0;(new S).G("moov",Lf).G("trak",Lf).G("mdia",Lf).ca("mdhd",function(b){b.reader.J(0==b.version?8:16);d=b.reader.D();b.parser.stop();}).parse(c,!0);if(!d)throw new D(2,4,4030);var e=0,f=!1;(new S).G("moof",Lf).G("traf",Lf).ca("tfdt",function(b){e=(0==b.version?b.reader.D():b.reader.ub())/d;f=!0;b.parser.stop();}).parse(b,!0);if(!f)throw new D(2,4,4030);return e}
  function Bh(b){function c(){throw new D(2,4,4030);}b=new R(new DataView(b),0);for(var d=0,e=0;;)if(d=b.aa(),e=b.ha(),71!=e&&c(),b.Jb()&16384||c(),e=(b.ha()&48)>>4,0!=e&&2!=e||c(),3==e&&(e=b.ha(),b.J(e)),1!=b.D()>>8)b.seek(d+188),e=b.ha(),71!=e&&(b.seek(d+192),e=b.ha()),71!=e&&(b.seek(d+204),e=b.ha()),71!=e&&c(),b.Xd(1);else return b.J(3),d=b.ha()>>6,0!=d&&1!=d||c(),0==b.ha()&&c(),d=b.ha(),e=b.Jb(),b=b.Jb(),(1073741824*((d&14)>>1)+((e&65534)<<14|(b&65534)>>1))/9E4}
  function Ch(b,c,d){b=ic(b,c);if(!Wd(b))return 0;c=new Ud(null);Xd(c,b);return c.Hc(d)}function ih(b){var c=new Set,d=[];b=r(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=lc(e)[0];c.has(f)||(d.push(e),c.add(f));}return d}function jh(b,c){for(var d=Dh[b],e=0;e<d.length;e++)for(var f=0;f<c.length;f++)if(d[e].test(c[f].trim()))return c[f].trim();return "text"==b?"":null}function sh(b,c){if(1==c.length)return c[0];var d=jh(b,c);if(null!=d)return d;throw new D(2,4,4025,c);}
  function th(b,c,d,e){return t(function g(){var h,k,l,m,n,q,x,w,A,C;return y(g,function(g){switch(g.l){case 1:h=wd;k=Pb;l=e.segments[0].a;m=new cb(l);n=m.fa.split(".").pop();q=Eh[c];if(x=q[n])return g["return"](x);if(c==h.na)return d&&"vtt"!=d?g["return"]("application/mp4"):g["return"]("text/vtt");w=Sb([l],b.c.retryParameters);w.method="HEAD";return u(g,zh(b,w,k.pd),2);case 2:A=g.s;C=A.headers["content-type"];if(!C)throw new D(2,4,4021,n);return g["return"](C.split(";")[0])}})})}
  function eh(b,c){var d=b.getAttribute(c);if(!d)throw new D(2,4,4023,c);return d.value}function vh(b,c){var d=Ig.Pa(b,c);if(!d)throw new D(2,4,4024,c);return d}function Xg(b,c){return zh(b,Sb([c],b.c.retryParameters),Pb.ng)}
  var Dh={audio:[/^vorbis$/,/^opus$/,/^flac$/,/^mp4a/,/^[ae]c-3$/],video:[/^avc/,/^hev/,/^hvc/,/^vp0?[89]/,/^av1$/],text:[/^vtt$/,/^wvtt/,/^stpp/]},Eh={audio:{mp4:"audio/mp4",m4s:"audio/mp4",m4i:"audio/mp4",m4a:"audio/mp4",ts:"video/mp2t"},video:{mp4:"video/mp4",m4s:"video/mp4",m4i:"video/mp4",m4v:"video/mp4",ts:"video/mp2t"},text:{mp4:"application/mp4",m4s:"application/mp4",m4i:"application/mp4",vtt:"text/vtt",ttml:"application/ttml+xml"}};
  function Vg(b){t(function d(){var e,f;return y(d,function(d){switch(d.l){case 1:if(!b.g)return d["return"]();ya(d,2);return u(d,b.update(),4);case 4:e=b.N;b.h.O(e);Aa(d,0);break;case 2:f=Da(d),f.severity=1,b.g.onError(f),b.h.O(.1),v(d);}})});}function bh(b,c){b.f=c;b.b&&b.b.Ob(b.f==Zg.Ma);b.f!=Zg.Ma||b.h.stop();}function zh(b,c,d){if(!b.i)throw new D(2,7,7001);c=b.g.networkingEngine.request(d,c);Ob(b.i,c);return c.promise}
  var qh={"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":function(b){var c=eh(b,"METHOD");Ke("HLS SAMPLE-AES-CENC","SAMPLE-AES-CENC will no longer be supported, see Issue #1227");if(!["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].includes(c))return null;c=eh(b,"URI");c=Tg.parse(c);c=new Uint8Array(c.data);c=vd("com.widevine.alpha",[{initDataType:"cenc",initData:c}]);if(b=Gg(b,"KEYID"))c.keyIds=[b.substr(2).toLowerCase()];return c}},Wg="VOD",Zg={Ma:Wg,he:"EVENT",od:"LIVE"};U.$c("m3u8",Ug);
  U.Kb("application/x-mpegurl",Ug);U.Kb("application/vnd.apple.mpegurl",Ug);function Fh(){this.a=new Map;}function Gh(b,c,d){Hh(b,c).text=d;}function Hh(b,c){b.a.has(c)||b.a.set(c,new Ih);return b.a.get(c)}function Ih(){this.text=this.variant=null;}function Jh(b,c){this.a=b;this.b=new Set([b]);c=c||[];for(var d=r(c),e=d.next();!e.done;e=d.next())this.add(e.value);}Jh.prototype.add=function(b){return Kh(this.a,b)?(this.b.add(b),!0):!1};function Kh(b,c){var d;if(!(d=!!b.audio!=!!c.audio||!!b.video!=!!c.video||b.language!=c.language)&&(d=b.audio&&c.audio)){d=b.audio;var e=c.audio;d=!(d.channelsCount==e.channelsCount&&Lh(d,e)&&Mh(d.roles,e.roles));}!d&&(d=b.video&&c.video)&&(d=b.video,e=c.video,d=!(Lh(d,e)&&Mh(d.roles,e.roles)));return d?!1:!0}
  Jh.prototype.values=function(){return this.b.values()};function Lh(b,c){if(b.mimeType!=c.mimeType)return !1;var d=b.codecs.split(",").map(function(b){return lc(b)[0]}),e=c.codecs.split(",").map(function(b){return lc(b)[0]});if(d.length!=e.length)return !1;d.sort();e.sort();for(var f=0;f<d.length;f++)if(d[f]!=e[f])return !1;return !0}
  function Mh(b,c){var d=new Set(b),e=new Set(c);d["delete"]("main");e["delete"]("main");if(d.size!=e.size)return !1;d=r(d);for(var f=d.next();!f.done;f=d.next())if(!e.has(f.value))return !1;return !0}function Nh(b){this.a=b;this.b=new Oh(b.language,"",b.audio&&b.audio.channelsCount?b.audio.channelsCount:0);}Nh.prototype.create=function(b){var c=this,d=b.filter(function(b){return Kh(c.a,b)});return d.length?new Jh(d[0],d):this.b.create(b)};function Oh(b,c,d){this.c=b;this.b=c;this.a=d;}
  Oh.prototype.create=function(b){var c=[];c=Ph(b,this.c);var d=b.filter(function(b){return b.primary});c=c.length?c:d.length?d:b;this.b&&(b=Qh(c,this.b),b.length&&(c=b));this.a&&(b=De(c,this.a),b.length&&(c=b));b=new Jh(c[0]);c=r(c);for(d=c.next();!d.done;d=c.next())d=d.value,Kh(b.a,d)&&b.add(d);return b};function Ph(b,c){var d=M(c),e=re(d,b.map(function(b){return qe(b)}));return e?b.filter(function(b){return e==qe(b)}):[]}
  function Qh(b,c){return b.filter(function(b){var d=b.audio;b=b.video;return d&&0<=d.roles.indexOf(c)||b&&0<=b.roles.indexOf(c)})}function Rh(b,c){this.a=Sh;this.b=(new Map).set(Sh,c).set(Th,b);}var Th=0,Sh=1;function Uh(b,c){this.g=b;this.h=Vh(b);this.c=b.a.currentTime;this.f=Date.now()/1E3;this.i=c;this.b=function(){};}Uh.prototype.a=function(){this.g=null;this.b=function(){};};function Wh(b,c){b.b=c;}function Xh(b){this.a=b;}function Vh(b){if(b.a.paused||0==b.a.playbackRate||null==b.a.buffered)var c=!1;else a:{c=b.a.buffered;b=b.a.currentTime;for(var d=0;d<c.length;d++){var e=c.start(d),f=c.end(d);if(!(b<e||b>f-.5)){c=!0;break a}}c=!1;}return c}function Yh(b,c,d,e,f){var g=this;this.b=b;this.w=c;this.v=d;this.m=f;this.g=new ac;this.j=!1;this.o=b.readyState;this.f=!1;this.c=e;this.i=!1;L(this.g,b,"waiting",function(){return Zh(g)});this.h=(new B(function(){Zh(g);})).Ia(.25);}Yh.prototype.a=function(){this.g&&(this.g.a(),this.g=null);null!=this.h&&(this.h.stop(),this.h=null);this.c&&(this.c.a(),this.c=null);this.b=this.w=this.m=null;};Yh.prototype.Vc=function(){this.i=!0;Zh(this);};
  function Zh(b){if(0!=b.b.readyState){if(b.b.seeking){if(!b.j)return}else b.j=!1;if(!b.b.paused){b.b.readyState!=b.o&&(b.f=!1,b.o=b.b.readyState);var c=b.v.smallGapLimit,d=b.b.currentTime,e=b.b.buffered;a:{if(e&&e.length&&!(1==e.length&&1E-6>e.end(0)-e.start(0))){var f=pc("Edge/")||pc("Trident/")||pc("Tizen")||pc("CrKey")?.5:.1;for(var g=0;g<e.length;g++)if(e.start(g)>d&&(0==g||e.end(g-1)-d<=f)){f=g;break a}}f=null;}if(null==f){if(b.c){b=b.c;d=b.g;e=Vh(d);d=d.a.currentTime;f=Date.now()/1E3;if(b.c!=
  d||b.h!=e)b.f=f,b.c=d,b.h=e;d=f-b.f;d>=b.i&&e&&b.b(b.c,d);}}else if(0!=f||b.i){g=e.start(f);var h=b.w.wa();if(!(g>=h)){h=g-d;c=h<=c;var k=!1;.001>h||(c||b.f||(b.f=!0,d=new I("largegap",{currentTime:d,gapSize:h}),d.cancelable=!0,b.m(d),b.v.jumpLargeGaps&&!d.defaultPrevented&&(k=!0)),!c&&!k)||(0!=f&&e.end(f-1),b.b.currentTime=g);}}}}}function $h(b){var c=this;this.f=b;this.b=new Set;this.c=(new B(function(){ai(c,!1);})).Ia(.25);}$h.prototype.a=function(){this.c.stop();for(var b=r(this.b),c=b.next();!c.done;c=b.next())c.value.a();this.b.clear();};function ai(b,c){for(var d=r(b.b),e=d.next();!e.done;e=d.next())e.value.h(b.f.currentTime,c);}function bi(b){var c=[];b=r(b);for(var d=b.next();!d.done;d=b.next()){d=r(d.value.variants);for(var e=d.next();!e.done;e=d.next())c.push(e.value);}return c}function ci(b,c){for(var d=null,e=r(b),f=e.next();!f.done;f=e.next())f=f.value,c>=f.startTime&&(d=f);return d}function di(b){this.f=b;this.b=null;this.c=function(){};}di.prototype.a=function(){this.b=this.f=null;this.c=function(){};};di.prototype.h=function(b){var c=this.b,d=this.f.periods;b=ci(d,b)||d[0];c!=b&&this.c(b);this.b=b;};function ei(b,c){b.c=c;}function fi(b){var c=this;this.b=b;this.g=!1;this.f=this.b.cc();this.c=new B(function(){c.b.Fd(.25*c.f);});}fi.prototype.a=function(){this.c&&(this.c.stop(),this.c=null);this.b=null;};fi.prototype.set=function(b){this.f=b;gi(this);};function gi(b){b.c.stop();var c=b.g?0:b.f;0<=c?b.b.cc()!=c&&b.b.fd(c):(b.c.Ia(.25),0!=b.b.cc()&&b.b.fd(0));}function hi(b,c,d){this.b=b;this.g=c;this.h=d;this.c=new ac;this.f=new ii(b);0<b.readyState?ji(this,d):ki(this,d);}hi.prototype.a=function(){this.c&&(this.c.a(),this.c=null);null!=this.f&&(this.f.a(),this.f=null);this.g=function(){};this.b=null;};function li(b){return 0<b.b.readyState?b.b.currentTime:b.h}function ki(b,c){b.h=c;b.c.ma(b.b,"loadedmetadata");dc(b.c,b.b,"loadedmetadata",function(){ji(b,c);});}
  function ji(b,c){.001>Math.abs(b.b.currentTime-c)?mi(b):(dc(b.c,b.b,"seeking",function(){mi(b);}),ni(b.f,0==b.b.currentTime?c:b.b.currentTime));}function mi(b){L(b.c,b.b,"seeking",function(){return b.g()});}function ii(b){var c=this;this.c=b;this.i=10;this.h=this.g=this.f=0;this.b=new B(function(){0>=c.f?c.b.stop():c.c.currentTime!=c.g?c.b.stop():(c.c.currentTime=c.h,c.f--);});}ii.prototype.a=function(){this.b&&(this.b.stop(),this.b=null);this.c=null;};
  function ni(b,c){b.g=b.c.currentTime;b.h=c;b.f=b.i;b.c.currentTime=c;b.b.Ia(.1);}function oi(b){function c(){d.g=!0;null!=d.c&&(d.b.currentTime=d.c);}var d=this;this.b=b;this.g=!1;this.c=null;this.f=new ac;0==this.b.readyState?dc(this.f,this.b,"loadedmetadata",c):c();}oi.prototype.a=function(){this.f&&(this.f.a(),this.f=null);this.b=null;};oi.prototype.o=function(b){this.c=this.g?this.c:b;};oi.prototype.i=function(){return (this.g?this.b.currentTime:this.c)||0};oi.prototype.v=function(){};
  function pi(b,c,d,e,f,g){var h=this;this.c=b;this.b=c.presentationTimeline;this.C=c.minBufferTime||0;this.h=d;this.w=f;this.m=null;this.g=new Yh(b,c.presentationTimeline,d,qi(b,d),g);this.f=new hi(b,function(){a:{var b=h.g;b.j=!0;b.i=!1;b.f=!1;var c=li(h.f);b=ri(h,c);if(.001<Math.abs(b-c)&&(c=(new Date).getTime()/1E3,!h.m||h.m<c-1)){h.m=c;c=h.f;0<c.b.readyState?ni(c.f,b):ki(c,b);b=void 0;break a}h.w();b=void 0;}return b},si(this,e));this.j=(new B(function(){if(0!=h.c.readyState&&!h.c.paused){var b=
  h.c.currentTime,c=h.b.ib(),d=h.b.wa();3>d-c&&(c=d-3);b<c&&(b=ri(h,b),h.c.currentTime=b);}})).Ia(.25);}pi.prototype.a=function(){this.f&&(this.f.a(),this.f=null);this.g&&(this.g.a(),this.g=null);this.j&&(this.j.stop(),this.j=null);this.c=this.f=this.b=this.h=null;this.w=function(){};};pi.prototype.o=function(b){var c=this.f;0<c.b.readyState?ni(c.f,b):ki(c,b);};pi.prototype.i=function(){var b=li(this.f);return 0<this.c.readyState&&!this.c.paused?ti(this,b):b};
  function si(b,c){null==c?c=Infinity>b.b.Y()?b.b.ib():b.b.wa():0>c&&(c=b.b.wa()+c);return ui(b,ti(b,c))}pi.prototype.v=function(){this.g.Vc();};function ui(b,c){var d=b.b.Y();return c>=d?d-b.h.durationBackoff:c}function ri(b,c){var d=qd.bind(null,b.c.buffered),e=Math.max(b.C,b.h.rebufferingGoal),f=b.h.safeSeekOffset,g=b.b.ib(),h=b.b.wa(),k=b.b.Y();3>h-g&&(g=h-3);var l=b.b.Cb(e),m=b.b.Cb(f);e=b.b.Cb(e+f);return c>=k?ui(b,c):c>h?h:c<g?d(m)?m:e:c>=l||d(c)?c:e}
  function ti(b,c){var d=b.b.ib();if(c<d)return d;d=b.b.wa();return c>d?d:c}function qi(b,c){if(!c.stallEnabled)return null;var d=c.stallSkip,e=new Uh(new Xh(b),c.stallThreshold);Wh(e,function(){b.currentTime+=d;});return e}function vi(){this.c=function(){};this.b=new Set;}vi.prototype.a=function(){this.c=function(){};this.b.clear();};function wi(b,c){b.c=c;}function xi(b){var c=this;this.i=b;this.g=new Map;this.b=function(){};this.c=function(){};this.f=function(){};this.j=[{Za:null,Ya:yi,Sa:function(b,e){return c.b(b,e)}},{Za:zi,Ya:yi,Sa:function(b,e){return c.b(b,e)}},{Za:Ai,Ya:yi,Sa:function(b,e){return c.b(b,e)}},{Za:yi,Ya:zi,Sa:function(b,e){return c.c(b,e)}},{Za:yi,Ya:Ai,Sa:function(b,e){return c.c(b,e)}},{Za:zi,Ya:Ai,Sa:function(b,e){return c.f(b,e)}},{Za:Ai,Ya:zi,Sa:function(b,e){return c.f(b,e)}}];}
  xi.prototype.a=function(){this.i=null;this.g.clear();this.b=function(){};this.c=function(){};this.f=function(){};};xi.prototype.h=function(b,c){for(var d=r(this.i.b),e=d.next();!e.done;e=d.next()){e=e.value;var f=this.g.get(e),g=b<e.startTime?zi:b>e.endTime?Ai:yi;this.g.set(e,g);for(var h=r(this.j),k=h.next();!k.done;k=h.next())k=k.value,k.Za==f&&k.Ya==g&&k.Sa(e,c);}};function Bi(b,c,d,e){b.b=c;b.c=d;b.f=e;}var zi=1,yi=2,Ai=3;function Ci(b,c){this.a=c;this.c=b;this.g=null;this.j=1;this.v=Promise.resolve();this.h=[];this.i=new Map;this.b=new Map;this.o=!1;this.F=null;this.C=this.f=this.m=!1;this.w=0;}Ci.prototype.destroy=function(){for(var b=r(this.b.values()),c=b.next();!c.done;c=b.next())Di(c.value);this.b.clear();this.i.clear();this.g=this.h=this.v=this.c=this.a=null;this.f=!0;return Promise.resolve()};
  Ci.prototype.configure=function(b){this.g=b;this.F=new tb({maxAttempts:Math.max(b.retryParameters.maxAttempts,2),baseDelay:b.retryParameters.baseDelay,backoffFactor:b.retryParameters.backoffFactor,fuzzFactor:b.retryParameters.fuzzFactor,timeout:0},!0);};
  Ci.prototype.start=function(){var b=this;return t(function d(){var e,f,g;return y(d,function(d){switch(d.l){case 1:return e=b.a.Qa(),f=Ei(b,e),g=b.a.Id(b.c.periods[f]),g.variant||g.text?u(d,Fi(b,g.variant?g.variant.audio:null,g.variant?g.variant.video:null,g.text,e),2):d["return"](new D(2,5,5005));case 2:if(b.f)return d["return"]();b.a&&b.a.cf&&b.a.cf();v(d);}})})};function Gi(b){return Hi(b,"audio")}function Ii(b){return Hi(b,"video")}
  function Hi(b,c){var d=b.b.get(c);return d?d.Fa||d.stream:null}function Ji(b,c){return t(function e(){var f,g,h,k,l,m,n,q;return y(e,function(e){switch(e.l){case 1:return f=wd,u(e,je(b.a.L,f.na),2);case 2:return b.w++,b.C=!1,g=b.w,h=b.a.L,k=new Map,l=new Set,k.set(f.na,c),l.add(c),u(e,h.init(k,!1),3);case 3:return b.f?e["return"]():u(e,Ki(b,l),4);case 4:if(b.f)return e["return"]();b.w!=g||b.b.has(f.na)||b.C||(m=b.a.Qa(),n=Ei(b,m),q=Li(c,n,0),b.b.set(f.na,q),Mi(b,q,0));v(e);}})})}
  function Ni(b,c){var d=b.b.get("video");if(d){var e=d.stream;if(e)if(c){var f=e.trickModeVideo;f&&!d.Fa&&(Oi(b,f,!1,0,!1),d.Fa=e);}else if(e=d.Fa)d.Fa=null,Oi(b,e,!0,0,!1);}}function Pi(b,c,d,e){c.video&&Oi(b,c.video,d,e,!1);c.audio&&Oi(b,c.audio,d,e,!1);}
  function Oi(b,c,d,e,f){var g=b.b.get(c.type);if(!g&&"text"==c.type&&b.g.ignoreTextStreamFailures)Ji(b,c);else if(g){var h=Qi(b,c);if(d&&h!=g.ya)b.b.forEach(function(c){Ri(b,c);});else{g.Fa&&(c.trickModeVideo?(g.Fa=c,c=c.trickModeVideo):g.Fa=null);var k=b.h[h];k&&k.vb&&(k=b.i.get(c.id))&&k.vb&&(g.stream!=c||f)&&("text"==c.type&&ce(b.a.L,ic(c.mimeType,c.codecs)),g.stream=c,g.ec=!0,Si(b,g,h)&&g.Hb.abort(),d&&(g.Na?g.qc=!0:g.Ea?(g.Ja=!0,g.Wb=e,g.qc=!0):(Di(g),Ti(b,g,!0,e))));}}}
  function Si(b,c,d){if(!c.Hb)return !1;var e=b.a.Qa(),f=fe(b.a.L,c.type);d=(d=Ui(b,c,e,f,d))?d.a?d.a-d.b:null:null;if(null==d)return !1;var g=c.stream.initSegmentReference;g&&(d+=(g.a?g.a-g.b:null)||0);g=b.a.getBandwidthEstimate();return 8*d/g<f-e-Math.max(b.c.minBufferTime||0,b.g.rebufferingGoal)||c.Hb.b.a>d?!0:!1}
  function Vi(b){function c(c){var f=b.a.L;"text"==c?(c=f.a,c=null==c.a||null==c.b?!1:d>=c.a&&d<c.b):(c=ee(f,c),c=qd(c,d,e));return c}var d=b.a.Qa(),e=b.g.smallGapLimit,f=Ei(b,d);if(fc(b.b.values(),function(b){return b.ya==f}))for(var g=r(b.b.keys()),h=g.next();!h.done;h=g.next())h=h.value,c(h)||Ri(b,b.b.get(h));else fc(b.b.keys(),c)||b.b.forEach(function(c){Ri(b,c);});}function Ri(b,c){c.Na||c.Ja||(c.Ea?(c.Ja=!0,c.Wb=0):null==de(b.a.L,c.type)?null==c.Ba&&Mi(b,c,0):(Di(c),Ti(b,c,!1,0)));}
  function Fi(b,c,d,e,f){return t(function h(){var k,l,m,n,q,x,w;return y(h,function(h){switch(h.l){case 1:return k=b.a.Qa(),l=Ei(b,k),m=wd,n=new Map,q=new Set,c&&(n.set(m.wb,c),q.add(c)),d&&(n.set(m.La,d),q.add(d)),e&&(n.set(m.na,e),q.add(e)),x=b.a.L,w=b.g.forceTransmuxTS,u(h,x.init(n,w),2);case 2:if(b.f)return h["return"]();Wi(b);return u(h,Ki(b,q),3);case 3:if(b.f)return h["return"]();n.forEach(function(c,d){if(!b.b.has(d)){var e=Li(c,l,f);b.b.set(d,e);Mi(b,e,0);}});v(h);}})})}
  function Li(b,c,d){return {stream:b,type:b.type,lb:null,xa:null,Fa:null,ec:!0,ya:c,endOfStream:!1,Ea:!1,Ba:null,Ja:!1,Wb:0,qc:!1,Na:!1,Zc:!1,Eb:!1,Wd:d||0,Hb:null}}
  function Xi(b,c){var d=b.h[c];if(d)return d.promise;d={promise:new G,vb:!1};b.h[c]=d;for(var e=new Set,f=r(b.c.periods[c].variants),g=f.next();!g.done;g=f.next())g=g.value,g.video&&e.add(g.video),g.video&&g.video.trickModeVideo&&e.add(g.video.trickModeVideo),g.audio&&e.add(g.audio);f=r(b.c.periods[c].textStreams);for(g=f.next();!g.done;g=f.next())e.add(g.value);b.v=b.v.then(function(){if(!this.f)return Ki(this,e)}.bind(b)).then(function(){this.f||(this.h[c].promise.resolve(),this.h[c].vb=!0);}.bind(b))["catch"](function(b){this.f||
  (this.h[c].promise["catch"](function(){}),this.h[c].promise.reject(),delete this.h[c],this.a.onError(b));}.bind(b));return d.promise}
  function Ki(b,c){return t(function e(){var f,g,h,k,l,m,n;return y(e,function(e){switch(e.l){case 1:f=[];for(var q=r(c),w=q.next();!w.done;w=q.next())g=w.value,(h=b.i.get(g.id))?f.push(h.promise):(b.i.set(g.id,{promise:new G,vb:!1}),f.push(g.createSegmentIndex()));ya(e,2);return u(e,Promise.all(f),4);case 4:if(b.f)return e["return"]();Aa(e,3);break;case 2:k=Da(e);if(b.f)return e["return"]();e=r(c);for(w=e.next();!w.done;w=e.next())l=w.value,b.i.get(l.id).promise["catch"](function(){}),b.i.get(l.id).promise.reject(),
  b.i["delete"](l.id);throw k;case 3:q=r(c);for(w=q.next();!w.done;w=q.next())m=w.value,n=b.i.get(m.id),n.vb||(n.promise.resolve(),n.vb=!0);v(e);}})})}function Wi(b){var c=b.c.presentationTimeline.Y();Infinity>c?b.a.L.ta(c):b.a.L.ta(Math.pow(2,32));}
  function Yi(b,c){if(!b.f&&!c.Ea&&null!=c.Ba&&!c.Na)if(c.Ba=null,c.Ja)Ti(b,c,c.qc,c.Wb);else{try{var d=Zi(b,c);null!=d&&(Mi(b,c,d),c.Eb=!1);}catch(e){$i(b,e);return}d=Array.from(b.b.values());aj(b,c);b.o&&d.every(function(b){return b.endOfStream})&&b.a.L.endOfStream().then(function(){if(!this.f){var b=this.a.L.Y();b<this.c.presentationTimeline.Y()&&this.c.presentationTimeline.ta(b);}}.bind(b));}}
  function Zi(b,c){function d(b){return "text"==b.type&&"application/cea-608"==b.stream.mimeType}if(d(c))return b.a.L.nc(c.stream.originalId||""),null;var e=b.a.Qa(),f=bj(b,c,e),g=Qi(b,c.stream),h=Ei(b,f),k=ge(b.a.L,c.type,e),l=Math.max(b.c.minBufferTime||0,b.g.rebufferingGoal,b.g.bufferingGoal)*b.j;if(f>=b.c.presentationTimeline.Y())return c.endOfStream=!0,"video"==c.type&&(f=b.b.get("text"))&&"application/cea-608"==f.stream.mimeType&&(f.endOfStream=!0),null;c.endOfStream=!1;c.ya=h;if(h!=g)return null;
  if(k>=l)return .5;h=fe(b.a.L,c.type);h=Ui(b,c,e,h,g);if(!h)return 1;var m=Infinity;Array.from(b.b.values()).forEach(function(c){d(c)||(c=bj(b,c,e),m=Math.min(m,c));});if(f>=m+b.c.presentationTimeline.b)return 1;c.Wd=0;cj(b,c,e,g,h);return null}function bj(b,c,d){if(!c.lb||!c.xa)return Math.max(d,c.Wd);d=Qi(b,c.lb);return b.c.periods[d].startTime+c.xa.endTime}
  function Ui(b,c,d,e,f){if(c.xa&&c.stream==c.lb)return dj(b,c,f,c.xa.position+1);c.xa?(d=Qi(b,c.lb),d=c.stream.findSegmentPosition(Math.max(0,b.c.periods[d].startTime+c.xa.endTime-b.c.periods[f].startTime))):d=c.stream.findSegmentPosition(Math.max(0,(e||d)-b.c.periods[f].startTime));if(null==d)return null;var g=null;null==e&&(g=dj(b,c,f,Math.max(0,d-1)));return g||dj(b,c,f,d)}
  function dj(b,c,d,e){d=b.c.periods[d];c=c.stream.getSegmentReference(e);if(!c)return null;e=b.c.presentationTimeline;b=e.Db();e=e.jb();return d.startTime+c.endTime<b||d.startTime+c.startTime>e?null:c}
  function cj(b,c,d,e,f){var g=b.c.periods[e],h=c.stream,k=b.c.presentationTimeline.Y(),l=b.c.periods[e+1];e=ej(b,c,e,Math.max(0,g.startTime-.1),l?l.startTime+.01:k);c.Ea=!0;c.ec=!1;k=fj(b,c,f);Promise.all([e,k]).then(function(b){if(!this.f&&!this.m)return gj(this,c,d,g,h,f,b[1])}.bind(b)).then(function(){this.f||this.m||(c.Ea=!1,c.Zc=!1,c.Ja||this.a.Vc(),Mi(this,c,0),hj(this,h));}.bind(b))["catch"](function(b){this.f||this.m||(c.Ea=!1,"text"==c.type&&this.g.ignoreTextStreamFailures?this.b["delete"]("text"):
  7001==b.code?(c.Ea=!1,c.Ba=null,Mi(this,c,0)):3017==b.code?ij(this,c,b):(c.Eb=!0,b.severity=2,$i(this,b)));}.bind(b));}function ij(b,c,d){if(!Array.from(b.b.values()).some(function(b){return b!=c&&b.Zc})){var e=Math.round(100*b.j);if(20<e)b.j-=.2;else if(4<e)b.j-=.04;else{c.Eb=!0;b.m=!0;b.a.onError(d);return}c.Zc=!0;}Mi(b,c,4);}
  function ej(b,c,d,e,f){if(!c.ec)return Promise.resolve();d=ke(b.a.L,c.type,b.c.periods[d].startTime-c.stream.presentationTimeOffset,e,f);if(!c.stream.initSegmentReference)return d;b=fj(b,c,c.stream.initSegmentReference).then(function(b){if(!this.f)return he(this.a.L,c.type,b,null,null,c.stream.closedCaptions&&0<c.stream.closedCaptions.size)}.bind(b))["catch"](function(b){c.ec=!0;return Promise.reject(b)});return Promise.all([d,b])}
  function gj(b,c,d,e,f,g,h){var k=f.closedCaptions&&0<f.closedCaptions.size;null!=f.emsgSchemeIdUris&&0<f.emsgSchemeIdUris.length&&(new S).ca("emsg",b.K.bind(b,e,g,f.emsgSchemeIdUris)).parse(h);return jj(b,c,d).then(function(){if(!this.f)return he(this.a.L,c.type,h,g.startTime+e.startTime,g.endTime+e.startTime,k)}.bind(b)).then(function(){if(!this.f)return c.lb=f,c.xa=g,Promise.resolve()}.bind(b))}
  Ci.prototype.K=function(b,c,d,e){var f=e.reader.Xc(),g=e.reader.Xc(),h=e.reader.D(),k=e.reader.D(),l=e.reader.D(),m=e.reader.D();e=e.reader.Va(e.reader.I.byteLength-e.reader.aa());b=b.startTime+c.startTime+k/h;if(d.includes(f))if("urn:mpeg:dash:event:2012"==f)this.a.df();else this.a.onEvent(new I("emsg",{detail:{startTime:b,endTime:b+l/h,schemeIdUri:f,value:g,timescale:h,presentationTimeDelta:k,eventDuration:l,id:m,messageData:e}}));};
  function jj(b,c,d){var e=Math.max(b.g.bufferBehind,b.c.presentationTimeline.b),f=de(b.a.L,c.type);if(null==f)return Promise.resolve();d=d-f-e;return 0>=d?Promise.resolve():b.a.L.remove(c.type,f,f+d).then(function(){}.bind(b))}
  function hj(b,c){if(!b.o){var d=Array.from(b.b.values());if(1!=d.length||"text"!=d[0].type)b.o=d.every(function(b){return "text"==b.type?!0:!b.Ja&&!b.Na&&b.xa});if(b.o){d=Qi(b,c);b.h[d]||Xi(b,d).then(function(){this.f||this.a.Hd();}.bind(b))["catch"](td.Gb);for(d=0;d<b.c.periods.length;++d)Xi(b,d)["catch"](td.Gb);b.a.nf&&b.a.nf();}}}
  function aj(b,c){var d=Qi(b,c.stream);if(c.ya!=d){var e=c.ya,f=Array.from(b.b.values());f.every(function(b){return b.ya==e})&&f.every(kj)&&Xi(b,e).then(function(){if(!this.f&&f.every(function(b){var c=kj(b),d=Qi(this,b.stream);return c&&b.ya==e&&d!=e}.bind(this))){var b=this.c.periods[e],c=this.a.Id(b),d=new Map;c.variant&&c.variant.video&&d.set("video",c.variant.video);c.variant&&c.variant.audio&&d.set("audio",c.variant.audio);c.text&&d.set("text",c.text);var l=r(this.b.keys());for(c=l.next();!c.done;c=
  l.next())if(c=c.value,!d.has(c)&&"text"!=c){this.a.onError(new D(2,5,5005));return}l=r(Array.from(d.keys()));for(c=l.next();!c.done;c=l.next())if(c=c.value,!this.b.has(c))if("text"==c)Fi(this,null,null,d.get("text"),b.startTime),d["delete"](c);else{this.a.onError(new D(2,5,5005));return}b=r(Array.from(this.b.keys()));for(c=b.next();!c.done;c=b.next())c=c.value,(l=d.get(c))?(Oi(this,l,!1,0,!1),Mi(this,this.b.get(c),0)):this.b["delete"](c);this.a.Hd();}}.bind(b))["catch"](td.Gb);}}
  function kj(b){return !b.Ea&&null==b.Ba&&!b.Ja&&!b.Na}function Ei(b,c){var d=ci(b.c.periods,c+xd);return d?b.c.periods.indexOf(d):0}function Qi(b,c){for(var d=b.c.periods,e=0;e<d.length;e++){for(var f=d[e],g=new Set,h=r(f.variants),k=h.next();!k.done;k=h.next())k=k.value,k.audio&&g.add(k.audio),k.video&&g.add(k.video),k.video&&k.video.trickModeVideo&&g.add(k.video.trickModeVideo);f=r(f.textStreams);for(h=f.next();!h.done;h=f.next())g.add(h.value);if(g.has(c))return e}return -1}
  function fj(b,c,d){d=ng(d.c(),d.b,d.a,b.g.retryParameters);b=b.a.nb.request(1,d);c.Hb=b;return b.promise.then(function(b){c.Hb=null;return b.data})}
  function Ti(b,c,d,e){t(function g(){var h,k,l;return y(g,function(g){switch(g.l){case 1:return c.Ja=!1,c.qc=!1,c.Wb=0,c.Na=!0,e?(k=b.a.Qa(),l=b.a.L.Y(),h=b.a.L.remove(c.type,k+e,l)):h=je(b.a.L,c.type).then(function(){if(!this.f&&d)return this.a.L.flush(c.type)}.bind(b)),u(g,h,2);case 2:if(b.f)return g["return"]();c.lb=null;c.xa=null;c.Na=!1;c.endOfStream=!1;Mi(b,c,0);v(g);}})});}function Mi(b,c,d){c.Ba=(new sb(function(){Yi(b,c);})).O(d);}function Di(b){null!=b.Ba&&(b.Ba.stop(),b.Ba=null);}
  function $i(b,c){zb(b.F).then(function(){this.f||(this.a.onError(c),c.handled||this.g.failureCallback(c));}.bind(b));}function lj(b,c,d,e,f,g){if(200<=d&&299>=d&&202!=d)return f&&(e=f),{uri:e,data:c,headers:b,fromCache:!!b["x-shaka-from-cache"]};f=null;try{f=xc(c);}catch(h){}throw new D(401==d||403==d?2:1,1,1001,e,d,f,b,g);}function mj(b,c,d,e){var f=new mj.b;gc(c.headers).forEach(function(b,c){f.append(c,b);});var g=new mj.a,h={qd:!1,de:!1};b=mj.h(b,d,{body:c.body||void 0,headers:f,method:c.method,signal:g.signal,credentials:c.allowCrossSiteCredentials?"include":void 0},h,e);b=new H(b,function(){h.qd=!0;g.abort();return Promise.resolve()});if(c=c.retryParameters.timeout){var k=new B(function(){h.de=!0;g.abort();});k.O(c/1E3);b["finally"](function(){k.stop();});}return b}z("shaka.net.HttpFetchPlugin",mj);
  mj.h=function(b,c,d,e,f){return t(function h(){var k,l,m,n,q,x,w,A,C,E,F,V,Y,wa;return y(h,function(h){switch(h.l){case 1:return k=mj.g,l=mj.c,x=q=0,w=Date.now(),ya(h,2),u(h,k(b,d),4);case 4:return m=h.s,A=m.clone().body.getReader(),E=(C=m.headers.get("Content-Length"))?parseInt(C,10):0,F=function(b){function c(){return t(function ja(){var d,e;return y(ja,function(h){switch(h.l){case 1:return ya(h,2),u(h,A.read(),4);case 4:d=h.s;Aa(h,3);break;case 2:return Da(h),h["return"]();case 3:d.done||(q+=d.value.byteLength);
  e=Date.now();if(100<e-w||d.done)f(e-w,q-x,E-q),x=q,w=e;d.done?b.close():(b.enqueue(d.value),c());v(h);}})})}c();},new l({start:F}),u(h,m.arrayBuffer(),5);case 5:n=h.s;Aa(h,3);break;case 2:V=Da(h);if(e.qd)throw new D(1,1,7001,b,c);if(e.de)throw new D(1,1,1003,b,c);throw new D(1,1,1002,b,V,c);case 3:return Y={},wa=m.headers,wa.forEach(function(b,c){Y[c.trim()]=b;}),h["return"](lj(Y,n,m.status,b,m.url,c))}})})};
  mj.isSupported=function(){if(window.ReadableStream)try{new ReadableStream({});}catch(b){return !1}else return !1;return !(!window.fetch||!window.AbortController)};mj.isSupported=mj.isSupported;mj.g=window.fetch;mj.a=window.AbortController;mj.c=window.ReadableStream;mj.b=window.Headers;mj.isSupported()&&(Rb("http",mj,2),Rb("https",mj,2));function nj(b,c,d,e){var f=new nj.f,g=Date.now(),h=0,k=new Promise(function(k,m){f.open(c.method,b,!0);f.responseType="arraybuffer";f.timeout=c.retryParameters.timeout;f.withCredentials=c.allowCrossSiteCredentials;f.onabort=function(){m(new D(1,1,7001,b,d));};f.onload=function(c){c=c.target;var e=c.getAllResponseHeaders().trim().split("\r\n"),f={};e=r(e);for(var g=e.next();!g.done;g=e.next())g=g.value.split(": "),f[g[0].toLowerCase()]=g.slice(1).join(": ");try{var h=lj(f,c.response,c.status,b,c.responseURL,
  d);k(h);}catch(E){m(E);}};f.onerror=function(c){m(new D(1,1,1002,b,c,d));};f.ontimeout=function(){m(new D(1,1,1003,b,d));};f.onprogress=function(b){var c=Date.now();if(100<c-g||b.lengthComputable&&b.loaded==b.total)e(c-g,b.loaded-h,b.total-b.loaded),h=b.loaded,g=c;};for(var l in c.headers)f.setRequestHeader(l.toLowerCase(),c.headers[l]);f.send(c.body);});return new H(k,function(){f.abort();return Promise.resolve()})}z("shaka.net.HttpXHRPlugin",nj);nj.f=window.XMLHttpRequest;Rb("http",nj,1);
  Rb("https",nj,1);function oj(){this.a=this.f=this.b=0;this.c=new Map;this.g=0;}function pj(b,c){b.b+=c;var d=b.g;b.g++;b.c.set(d,c);return d}oj.prototype.close=function(b,c){if(this.c.has(b)){var d=this.c.get(b);this.c["delete"](b);this.f+=d;this.a+=c;}};function qj(b,c){this.g=b;this.b=new Map;this.c=!1;this.f=c;this.a=new oj;}qj.prototype.destroy=function(){this.c=!0;return Promise.all(this.b.values()).then(function(){},function(){})};
  function rj(b,c,d,e,f){var g=pj(b.a,e);e=b.b.get(c)||Promise.resolve();b.b.set(c,e.then(function(){return t(function k(){var c;return y(k,function(e){switch(e.l){case 1:return u(e,sj(b,d),2);case 2:c=e.s;if(b.c)throw new D(2,9,7001);b.a.close(g,c.byteLength);var k=b.a;b.f(0==k.b?0:k.f/k.b,b.a.a);return e["return"](f(c))}})})}));}function tj(b){return t(function d(){return y(d,function(d){switch(d.l){case 1:return u(d,Promise.all(b.b.values()),2);case 2:return d["return"](b.a.a)}})})}
  function sj(b,c){return t(function e(){var f,g;return y(e,function(e){switch(e.l){case 1:return f=b.g.request(1,c),u(e,f.promise,2);case 2:return g=e.s,e["return"](g.data)}})})}function uj(b,c){var d=this;this.c=b;this.b=b.objectStore(c);this.a=new G;b.onabort=function(b){b.preventDefault();d.a.reject();};b.onerror=function(b){b.preventDefault();d.a.reject();};b.oncomplete=function(){d.a.resolve();};}uj.prototype.abort=function(){try{this.c.abort();}catch(b){}return this.a["catch"](function(){})};
  function vj(b,c){return new Promise(function(d,e){var f=b.b.openCursor();f.onerror=e;f.onsuccess=function(b){b=b.target.result;if(!b)return d();c(b.key,b.value,b);b["continue"]();};})}uj.prototype.store=function(){return this.b};uj.prototype.promise=function(){return this.a};function wj(b){this.b=b;this.a=[];}wj.prototype.destroy=function(){return Promise.all(this.a.map(function(b){return b.abort()}))};function xj(b,c){return yj(b,c,"readonly")}function zj(b,c){return yj(b,c,"readwrite")}function yj(b,c,d){d=b.b.transaction([c],d);var e=new uj(d,c);b.a.push(e);e.promise().then(function(){Kb(b.a,e);},function(){Kb(b.a,e);});return e}function Aj(b){this.a=new wj(b);}Aj.prototype.destroy=function(){return this.a.destroy()};Aj.prototype.getAll=function(){var b=this;return t(function d(){var e,f;return y(d,function(d){switch(d.l){case 1:return e=xj(b.a,"session-ids"),f=[],u(d,vj(e,function(b,d){f.push(d);}),2);case 2:return u(d,e.promise(),3);case 3:return d["return"](f)}})})};Aj.prototype.add=function(b){var c=zj(this.a,"session-ids"),d=c.store();b=r(b);for(var e=b.next();!e.done;e=b.next())d.add(e.value);return c.promise()};
  Aj.prototype.remove=function(b){var c=this;return t(function e(){var f;return y(e,function(e){switch(e.l){case 1:return f=zj(c.a,"session-ids"),u(e,vj(f,function(c,e,f){0<=b.indexOf(e.sessionId)&&f["delete"]();}),2);case 2:return u(e,f.promise(),0)}})})};function Bj(){this.a=new Map;}Bj.prototype.destroy=function(){for(var b=[],c=r(this.a.values()),d=c.next();!d.done;d=c.next())b.push(d.value.destroy());this.a.clear();return Promise.all(b)};Bj.prototype.init=function(){var b=this;Cj.forEach(function(c,d){var e=c();e&&b.a.set(d,e);});for(var c=[],d=r(this.a.values()),e=d.next();!e.done;e=d.next())c.push(e.value.init());return Promise.all(c)};
  function Dj(b){var c=null;b.a.forEach(function(b,e){b.getCells().forEach(function(b,d){b.hasFixedKeySpace()||c||(c={path:{ra:e,$:d},$:b});});});if(c)return c;throw new D(2,9,9013,"Could not find a cell that supports add-operations");}function Ej(b,c){b.a.forEach(function(b,e){b.getCells().forEach(function(b,d){c({ra:e,$:d},b);});});}
  function Fj(b,c,d){b=b.a.get(c);if(!b)throw new D(2,9,9013,"Could not find mechanism with name "+c);c=b.getCells().get(d);if(!c)throw new D(2,9,9013,"Could not find cell with name "+d);return c}function Gj(b,c){b.a.forEach(function(b){c(b.getEmeSessionCell());});}function Hj(b){var c=Array.from(b.a.keys());if(!c.length)throw new D(2,9,9E3,"No supported storage mechanisms found");return b.a.get(c[0]).getEmeSessionCell()}
  Bj.prototype.erase=function(){var b=this;return t(function d(){var e,f,g;return y(d,function(d){switch(d.l){case 1:return e=Array.from(b.a.values()),f=0<e.length,f||(g=Cj,g.forEach(function(b){(b=b())&&e.push(b);})),u(d,Promise.all(e.map(function(b){return b.erase()})),2);case 2:if(f)d.A(0);else return u(d,Promise.all(e.map(function(b){return b.destroy()})),0)}})})};function Ij(b,c){Cj.set(b,c);}z("shaka.offline.StorageMuxer.register",Ij);z("shaka.offline.StorageMuxer.unregister",function(b){Cj["delete"](b);});
  var Cj=new Map;function Jj(b){this.a=new wj(b);}p=Jj.prototype;p.destroy=function(){return this.a.destroy()};p.hasFixedKeySpace=function(){return !0};p.addSegments=function(){return Kj("segment")};p.removeSegments=function(b,c){return Lj(this,"segment",b,c)};p.getSegments=function(b){return Mj(this,"segment",b).then(function(b){return b.map(Nj)})};p.addManifests=function(){return Kj("manifest")};
  p.updateManifestExpiration=function(b,c){var d=zj(this.a,"manifest"),e=d.store(),f=new G;e.get(b).onsuccess=function(d){(d=d.target.result)?(d.expiration=c,e.put(d),f.resolve()):f.reject(new D(2,9,9012,"Could not find values for "+b));};return d.promise().then(function(){return f})};p.removeManifests=function(b,c){return Lj(this,"manifest",b,c)};p.getManifests=function(b){return Mj(this,"manifest",b).then(function(b){return b.map(Oj)})};
  p.getAllManifests=function(){var b=this;return t(function d(){var e,f;return y(d,function(d){switch(d.l){case 1:return e=xj(b.a,"manifest"),f=new Map,u(d,vj(e,function(b,d){f.set(b,Oj(d));}),2);case 2:return u(d,e.promise(),3);case 3:return d["return"](f)}})})};function Kj(b){return Promise.reject(new D(2,9,9011,"Cannot add new value to "+b))}function Lj(b,c,d,e){b=zj(b.a,c);var f=b.store();d.forEach(function(b){f["delete"](b).onsuccess=function(){return e(b)};});return b.promise()}
  function Mj(b,c,d){b=xj(b.a,c);var e=b.store(),f={},g=[];d.forEach(function(b){e.get(b).onsuccess=function(c){c=c.target.result;void 0==c&&g.push(b);f[b]=c;};});return b.promise().then(function(){return g.length?Promise.reject(new D(2,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}
  function Oj(b){return {originalManifestUri:b.originalManifestUri,duration:b.duration,size:b.size,expiration:null==b.expiration?Infinity:b.expiration,periods:b.periods.map(Pj),sessionIds:b.sessionIds,drmInfo:b.drmInfo,appMetadata:b.appMetadata}}function Pj(b){Qj(b);b.streams.forEach(function(){});return {startTime:b.startTime,streams:b.streams.map(Rj)}}
  function Rj(b){var c=b.We?Sj(b.We):null;return {id:b.id,originalId:null,primary:b.primary,presentationTimeOffset:b.presentationTimeOffset,contentType:b.contentType,mimeType:b.mimeType,codecs:b.codecs,frameRate:b.frameRate,kind:b.kind,language:b.language,label:b.label,width:b.width,height:b.height,initSegmentKey:c,encrypted:b.encrypted,keyId:b.keyId,segments:b.segments.map(Tj),variantIds:b.variantIds}}function Tj(b){var c=Sj(b.uri);return {startTime:b.startTime,endTime:b.endTime,dataKey:c}}
  function Nj(b){return {data:b.data}}function Sj(b){var c;if((c=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(b))||(c=/^offline:segment\/([0-9]+)$/.exec(b)))return Number(c[1]);throw new D(2,9,9004,"Could not parse uri "+b);}
  function Qj(b){var c=b.streams.filter(function(b){return "audio"==b.contentType}),d=b.streams.filter(function(b){return "video"==b.contentType});if(!c.every(function(b){return b.variantIds})||!d.every(function(b){return b.variantIds})){c.forEach(function(b){b.variantIds=[];});d.forEach(function(b){b.variantIds=[];});var e=0;if(d.length&&!c.length){var f=e++;d.forEach(function(b){b.variantIds.push(f);});}if(!d.length&&c.length){var g=e++;c.forEach(function(b){b.variantIds.push(g);});}d.length&&c.length&&c.forEach(function(b){d.forEach(function(c){var d=
  e++;b.variantIds.push(d);c.variantIds.push(d);});});}}function Uj(b,c,d,e){this.a=new wj(b);this.c=c;this.b=d;this.f=e;}p=Uj.prototype;p.destroy=function(){return this.a.destroy()};p.hasFixedKeySpace=function(){return this.f};p.addSegments=function(b){return Vj(this,this.c,b)};p.removeSegments=function(b,c){return Wj(this,this.c,b,c)};p.getSegments=function(b){return Xj(this,this.c,b)};p.addManifests=function(b){return Vj(this,this.b,b)};
  p.updateManifestExpiration=function(b,c){var d=zj(this.a,this.b),e=d.store();e.get(b).onsuccess=function(d){if(d=d.target.result)d.expiration=c,e.put(d,b);};return d.promise()};p.removeManifests=function(b,c){return Wj(this,this.b,b,c)};p.getManifests=function(b){return Xj(this,this.b,b)};
  p.getAllManifests=function(){var b=this;return t(function d(){var e,f;return y(d,function(d){switch(d.l){case 1:return e=xj(b.a,b.b),f=new Map,u(d,vj(e,function(b,d){f.set(b,d);}),2);case 2:return u(d,e.promise(),3);case 3:return d["return"](f)}})})};
  function Vj(b,c,d){if(b.f)return Promise.reject(new D(1,9,9011,"Cannot add new value to "+c));b=zj(b.a,c);var e=b.store(),f=[];d.forEach(function(b){e.add(b).onsuccess=function(b){f.push(b.target.result);};});return b.promise().then(function(){return f})}function Wj(b,c,d,e){b=zj(b.a,c);var f=b.store();d.forEach(function(b){f["delete"](b).onsuccess=function(){return e(b)};});return b.promise()}
  function Xj(b,c,d){b=xj(b.a,c);var e=b.store(),f={},g=[];d.forEach(function(b){var c=e.get(b);c.onsuccess=function(){void 0==c.result&&g.push(b);f[b]=c.result;};});return b.promise().then(function(){return g.length?Promise.reject(new D(1,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}function Yj(){this.g=this.c=this.b=this.a=this.f=null;}p=Yj.prototype;
  p.init=function(){var b=this,c=new G,d=window.indexedDB.open("shaka_offline_db",4);d.onsuccess=function(d){d=d.target.result;b.f=d;var e=d.objectStoreNames;e=e.contains("manifest")&&e.contains("segment")?new Jj(d):null;b.a=e;e=d.objectStoreNames;e=e.contains("manifest-v2")&&e.contains("segment-v2")?new Uj(d,"segment-v2","manifest-v2",!0):null;b.b=e;e=d.objectStoreNames;e=e.contains("manifest-v3")&&e.contains("segment-v3")?new Uj(d,"segment-v3","manifest-v3",!1):null;b.c=e;d=d.objectStoreNames.contains("session-ids")?
  new Aj(d):null;b.g=d;c.resolve();};d.onupgradeneeded=function(b){b=b.target.result;for(var c=r(["segment-v3","manifest-v3","session-ids"]),d=c.next();!d.done;d=c.next())d=d.value,b.objectStoreNames.contains(d)||b.createObjectStore(d,{autoIncrement:!0});};d.onerror=function(b){c.reject(new D(2,9,9001,d.error));b.preventDefault();};return c};
  p.destroy=function(){var b=this;return t(function d(){return y(d,function(d){switch(d.l){case 1:if(!b.a){d.A(2);break}return u(d,b.a.destroy(),2);case 2:if(!b.b){d.A(4);break}return u(d,b.b.destroy(),4);case 4:if(!b.c){d.A(6);break}return u(d,b.c.destroy(),6);case 6:if(!b.g){d.A(8);break}return u(d,b.g.destroy(),8);case 8:b.f&&b.f.close(),v(d);}})})};p.getCells=function(){var b=new Map;this.a&&b.set("v1",this.a);this.b&&b.set("v2",this.b);this.c&&b.set("v3",this.c);return b};p.getEmeSessionCell=function(){return this.g};
  p.erase=function(){var b=this;return t(function d(){return y(d,function(d){switch(d.l){case 1:if(!b.a){d.A(2);break}return u(d,b.a.destroy(),2);case 2:if(!b.b){d.A(4);break}return u(d,b.b.destroy(),4);case 4:if(!b.c){d.A(6);break}return u(d,b.c.destroy(),6);case 6:return b.f&&b.f.close(),u(d,Zj(),8);case 8:return b.f=null,b.a=null,b.b=null,b.c=null,u(d,b.init(),0)}})})};
  function Zj(){var b=new G,c=window.indexedDB.deleteDatabase("shaka_offline_db");c.onblocked=function(){};c.onsuccess=function(){b.resolve();};c.onerror=function(d){b.reject(new D(2,9,9001,c.error));d.preventDefault();};return b}Ij("idb",function(){return window.indexedDB?new Yj:null});function ak(b,c,d,e){this.a=b;this.g=c;this.f=d;this.c=e;this.b=["offline:",b,"/",c,"/",d,"/",e].join("");}ak.prototype.ra=function(){return this.g};ak.prototype.$=function(){return this.f};ak.prototype.key=function(){return this.c};ak.prototype.toString=function(){return this.b};
  function bk(b){b=/^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(b);if(null==b)return null;var c=b[1];if("manifest"!=c&&"segment"!=c)return null;var d=b[2];if(!d)return null;var e=b[3];return e&&null!=c?new ak(c,d,e,Number(b[4])):null}function ck(b,c){this.b=b;this.a=c;}function dk(b,c){var d=new W(null,0);d.ta(c.duration);var e=c.periods.map(function(c){return ek(b,c,d)}),f=c.drmInfo?[c.drmInfo]:[];c.drmInfo&&e.forEach(function(b){b.variants.forEach(function(b){b.drmInfos=f;});});return {presentationTimeline:d,minBufferTime:2,offlineSessionIds:c.sessionIds,periods:e}}
  function ek(b,c,d){var e=c.streams.filter(function(b){return "audio"==b.contentType}),f=c.streams.filter(function(b){return "video"==b.contentType});e=fk(b,e,f);f=c.streams.filter(function(b){return "text"==b.contentType}).map(function(c){return gk(b,c)});c.streams.forEach(function(e){e=e.segments.map(function(c,d){return hk(b,d,c)});d.ob(e,c.startTime);});return {startTime:c.startTime,variants:Array.from(e.values()),textStreams:f}}
  function fk(b,c,d){for(var e=new Set,f=r(c),g=f.next();!g.done;g=f.next()){var h=r(g.value.variantIds);for(g=h.next();!g.done;g=h.next())e.add(g.value);}f=r(d);for(g=f.next();!g.done;g=f.next())for(h=r(g.value.variantIds),g=h.next();!g.done;g=h.next())e.add(g.value);f=new Map;e=r(e);for(g=e.next();!g.done;g=e.next())g=g.value,f.set(g,{id:g,language:"",primary:!1,audio:null,video:null,bandwidth:0,drmInfos:[],allowedByApplication:!0,allowedByKeySystem:!0});c=r(c);for(e=c.next();!e.done;e=c.next())for(e=
  e.value,g=gk(b,e),h=r(e.variantIds),e=h.next();!e.done;e=h.next())e=f.get(e.value),e.language=g.language,e.primary=e.primary||g.primary,e.audio=g;d=r(d);for(c=d.next();!c.done;c=d.next())for(e=c.value,c=gk(b,e),g=r(e.variantIds),e=g.next();!e.done;e=g.next())e=f.get(e.value),e.primary=e.primary||c.primary,e.video=c;return f}
  function gk(b,c){var d=c.segments.map(function(c,d){return hk(b,d,c)}),e=new T(d);d={id:c.id,originalId:c.originalId,createSegmentIndex:function(){return Promise.resolve()},findSegmentPosition:function(b){return e.find(b)},getSegmentReference:function(b){return e.get(b)},initSegmentReference:null,presentationTimeOffset:c.presentationTimeOffset,mimeType:c.mimeType,codecs:c.codecs,width:c.width||void 0,height:c.height||void 0,frameRate:c.frameRate||void 0,kind:c.kind,encrypted:c.encrypted,keyId:c.keyId,
  language:c.language,label:c.label||null,type:c.contentType,primary:c.primary,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],channelsCount:null,closedCaptions:null};null!=c.initSegmentKey&&(d.initSegmentReference=ik(b,c.initSegmentKey));return d}function hk(b,c,d){var e=new ak("segment",b.b,b.a,d.dataKey);return new Q(c,d.startTime,d.endTime,function(){return [e.toString()]},0,null)}function ik(b,c){var d=new ak("segment",b.b,b.a,c);return new Hf(function(){return [d.toString()]},0,null)}function jk(){this.a=null;}p=jk.prototype;p.configure=function(){};
  p.start=function(b){var c=this;return t(function e(){var f,g,h,k,l,m;return y(e,function(e){switch(e.l){case 1:f=bk(b);c.a=f;if(null==f||"manifest"!=f.a)return e["return"](Promise.reject(new D(2,1,9004,f)));g=new Bj;za(e,2);return u(e,g.init(),4);case 4:return u(e,Fj(g,f.ra(),f.$()),5);case 5:return h=e.s,u(e,h.getManifests([f.key()]),6);case 6:return k=e.s,l=k[0],m=new ck(f.ra(),f.$()),e["return"](dk(m,l));case 2:return Ea(e),u(e,g.destroy(),7);case 7:Fa(e,0);}})})};p.stop=function(){return Promise.resolve()};
  p.update=function(){};
  p.onExpirationUpdated=function(b,c){var d=this;return t(function f(){var g,h,k,l,m,n,q;return y(f,function(f){switch(f.l){case 1:return g=d.a,h=new Bj,ya(f,2,3),u(f,h.init(),5);case 5:return u(f,Fj(h,g.ra(),g.$()),6);case 6:return k=f.s,u(f,k.getManifests([g.key()]),7);case 7:l=f.s;m=l[0];n=m.sessionIds.includes(b);q=void 0==m.expiration||m.expiration>c;if(!n||!q){f.A(3);break}return u(f,k.updateManifestExpiration(g.key(),c),3);case 3:return Ea(f),u(f,h.destroy(),10);case 10:Fa(f,0);break;case 2:Da(f),
  f.A(3);}})})};U.Kb("application/x-offline-manifest",jk);function kk(b){var c=bk(b);return c&&"manifest"==c.a?kk.a(b):c&&"segment"==c.a?kk.b(c.key(),c):Ab(new D(2,1,9004,b))}z("shaka.offline.OfflineScheme",kk);kk.a=function(b){b={uri:b,data:new ArrayBuffer(0),headers:{"content-type":"application/x-offline-manifest"}};return Cb(b)};kk.b=function(b,c){var d=new Bj;return Cb(void 0).T(function(){return d.init()}).T(function(){return Fj(d,c.ra(),c.$())}).T(function(b){return b.getSegments([c.key()])}).T(function(b){return {uri:c,data:b[0].data,headers:{}}})["finally"](function(){return d.destroy()})};
  Rb("offline",kk);function lk(b,c,d){return t(function f(){var g,h,k,l,m,n;return y(f,function(f){switch(f.l){case 1:g=[];for(var q=[],w=r(d),A=w.next();!A.done;A=w.next()){A=A.value;for(var C=!1,E=r(q),F=E.next();!F.done;F=E.next())if(F=F.value,mk(F.info,A)){F.sessionIds.push(A.sessionId);C=!0;break}C||q.push({info:A,sessionIds:[A.sessionId]});}h=r(q);k=h.next();case 2:if(k.done){f.A(4);break}l=k.value;m=nk(b,c,l);return u(f,m,5);case 5:n=f.s;g=g.concat(n);k=h.next();f.A(2);break;case 4:return f["return"](g)}})})}
  function nk(b,c,d){return t(function f(){var g,h;return y(f,function(f){switch(f.l){case 1:return g=new Gc({nb:c,onError:function(){},gc:function(){},onExpirationUpdated:function(){},onEvent:function(){}}),ya(f,2),g.configure(b),u(f,Oc(g,d.info.keySystem,d.info.licenseUri,d.info.serverCertificate,d.info.audioCapabilities,d.info.videoCapabilities),4);case 4:Aa(f,3);break;case 2:return Da(f),u(f,g.destroy(),5);case 5:return f["return"]([]);case 3:return ya(f,6),u(f,Vc(g),8);case 8:Aa(f,7);break;case 6:return Da(f),
  u(f,g.destroy(),9);case 9:return f["return"]([]);case 7:return h=[],u(f,Promise.all(d.sessionIds.map(function(b){return t(function n(){return y(n,function(c){switch(c.l){case 1:return ya(c,2),u(c,Yc(g,b),4);case 4:h.push(b);Aa(c,0);break;case 2:Da(c),v(c);}})})})),10);case 10:return u(f,g.destroy(),11);case 11:return f["return"](h)}})})}
  function mk(b,c){function d(b,c){return b.robustness==c.robustness&&b.contentType==c.contentType}return b.keySystem==c.keySystem&&b.licenseUri==c.licenseUri&&Mb(b.audioCapabilities,c.audioCapabilities,d)&&Mb(b.videoCapabilities,c.videoCapabilities,d)}function ok(b,c){var d=pk(),e=this;this.g=c;this.c=b;this.i=d;this.h=null;this.f=[];this.b=this.a=null;this.j=!0;this.m=Promise.resolve().then(function(){return qk(e)});}ok.prototype.destroy=function(){var b=this;return t(function d(){var e;return y(d,function(d){switch(d.l){case 1:return b.j=!1,b.b&&b.b.abort(),rk(b),u(d,b.m,2);case 2:b.a&&b.a.qa.Ua();for(var f=r(b.f),h=f.next();!h.done;h=f.next())e=h.value,e.qa.Ua();b.a=null;b.f=[];b.g=null;v(d);}})})};
  function sk(b,c){var d={pb:function(){},fc:function(){},Ua:function(){},onError:function(){},hc:function(){},sg:function(){}};b.f.push({create:c,qa:d});b.b&&b.b.abort();rk(b);return d}
  function qk(b){return t(function d(){return y(d,function(d){switch(d.l){case 1:if(b.j){if(0==b.f.length||b.a&&!b.a.Ra)var e=!1;else{b.a&&(b.a.qa.Ua(),b.a=null);e=b.f.shift();var g=e.create(b.i);g?(e.qa.pb(),b.a={node:g.node,payload:g.payload,Ra:g.Ra,qa:e.qa}):e.qa.hc();e=!0;}e?e=Promise.resolve():b.a?e=tk(b):(b.g.bf(b.c),b.h=new G,e=b.h);return u(d,e,1)}d.A(0);}})})}
  function tk(b){return t(function d(){var e,f;return y(d,function(d){switch(d.l){case 1:return b.c=b.g.Le(b.c,b.i,b.a.node,b.a.payload),ya(d,2),b.b=b.g.ve(b.c,b.i,b.a.payload),u(d,b.b.promise,4);case 4:b.b=null;b.c==b.a.node&&(b.a.qa.fc(),b.a=null);Aa(d,0);break;case 2:e=Da(d);if(7001==e.code)b.a.qa.Ua();else b.a.qa.onError(e);b.a=null;b.b=null;f=b;return u(d,b.g.handleError(b.i,e),5);case 5:f.c=d.s,v(d);}})})}function rk(b){b.h&&(b.h.resolve(),b.h=null);}function uk(b){this.a=null;for(var c=0;c<b.textTracks.length;++c){var d=b.textTracks[c];d.mode="disabled";"Shaka Player TextTrack"==d.label&&(this.a=d);}this.a||(this.a=b.addTextTrack("subtitles","Shaka Player TextTrack"));this.a.mode="hidden";}z("shaka.text.SimpleTextDisplayer",uk);uk.prototype.remove=function(b,c){if(!this.a)return !1;vk(this.a,function(d){return d.startTime<c&&d.endTime>b});return !0};uk.prototype.remove=uk.prototype.remove;
  uk.prototype.append=function(b){for(var c=wk,d=[],e=0;e<b.length;e++){var f=c(b[e]);f&&d.push(f);}d.slice().sort(function(b,c){return b.startTime!=c.startTime?b.startTime-c.startTime:b.endTime!=c.endTime?b.endTime-c.startTime:d.indexOf(c)-d.indexOf(b)}).forEach(function(b){this.a.addCue(b);}.bind(this));};uk.prototype.append=uk.prototype.append;uk.prototype.destroy=function(){this.a&&vk(this.a,function(){return !0});this.a=null;return Promise.resolve()};uk.prototype.destroy=uk.prototype.destroy;
  uk.prototype.isTextVisible=function(){return "showing"==this.a.mode};uk.prototype.isTextVisible=uk.prototype.isTextVisible;uk.prototype.setTextVisibility=function(b){this.a.mode=b?"showing":"hidden";};uk.prototype.setTextVisibility=uk.prototype.setTextVisibility;
  function wk(b){if(b.startTime>=b.endTime)return null;var c=new VTTCue(b.startTime,b.endTime,b.payload);c.lineAlign=b.lineAlign;c.positionAlign=b.positionAlign;c.size=b.size;try{c.align=b.textAlign;}catch(d){}"center"==b.textAlign&&"center"!=c.align&&(c.align="middle");"vertical-lr"==b.writingMode?c.vertical="lr":"vertical-rl"==b.writingMode&&(c.vertical="rl");1==b.lineInterpretation&&(c.snapToLines=!1);null!=b.line&&(c.line=b.line);null!=b.position&&(c.position=b.position);return c}
  function vk(b,c){var d=b.mode;b.mode="showing"==d?"showing":"hidden";for(var e=b.cues,f=e.length-1;0<=f;f--){var g=e[f];g&&c(g)&&b.removeCue(g);}b.mode=d;}function xk(b,c,d,e,f){var g=f in e,h=!0,k;for(k in c){var l=f+"."+k,m=g?e[f]:d[k];g||k in d?void 0===c[k]?void 0===m||g?delete b[k]:b[k]=Ib(m):m.constructor==Object&&c[k]&&c[k].constructor==Object?(b[k]||(b[k]=Ib(m)),l=xk(b[k],c[k],m,e,l),h=h&&l):typeof c[k]!=typeof m||null==c[k]||c[k].constructor!=m.constructor?h=!1:b[k]=c[k]:h=!1;}return h}z("shaka.util.ConfigUtils.mergeConfigObjects",xk);
  function yk(b,c){for(var d={},e=d,f=0,g=0;;){f=b.indexOf(".",f);if(0>f)break;if(0==f||"\\"!=b[f-1])g=b.substring(g,f).replace(/\\\./g,"."),e[g]={},e=e[g],g=f+1;f+=1;}e[b.substring(g).replace(/\\\./g,".")]=c;return d}function zk(){var b=5E5,c=Infinity;navigator.connection&&(b=1E6*navigator.connection.downlink,navigator.connection.saveData&&(c=360));var d={retryParameters:ub(),servers:{},clearKeys:{},advanced:{},delayLicenseRequestUntilPlayed:!1},e={retryParameters:ub(),availabilityWindowOverride:NaN,dash:{customScheme:function(b){if(b)return null},clockSyncUri:"",ignoreDrmInfo:!1,xlinkFailGracefully:!1,defaultPresentationDelay:10,ignoreMinBufferTime:!1,autoCorrectDrift:!0}},f={retryParameters:ub(),failureCallback:function(){},
  rebufferingGoal:2,bufferingGoal:10,bufferBehind:30,ignoreTextStreamFailures:!1,alwaysStreamText:!1,startAtSegmentBoundary:!1,smallGapLimit:.5,jumpLargeGaps:!1,durationBackoff:1,forceTransmuxTS:!1,safeSeekOffset:5,stallEnabled:!0,stallThreshold:1,stallSkip:.1};pc("Web0S")&&(f.stallEnabled=!1);var g={trackSelectionCallback:function(b){return b},progressCallback:function(){},usePersistentLicense:!0},h={drm:d,manifest:e,streaming:f,offline:g,abrFactory:N,abr:{enabled:!0,defaultBandwidthEstimate:b,switchInterval:8,
  bandwidthUpgradeTarget:.85,bandwidthDowngradeTarget:.95,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:c,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity}},preferredAudioLanguage:"",preferredTextLanguage:"",preferredVariantRole:"",preferredTextRole:"",preferredAudioChannelCount:2,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity},playRangeStart:0,playRangeEnd:Infinity,textDisplayFactory:function(){return null}};
  g.trackSelectionCallback=function(b){return Ak(b,h.preferredAudioLanguage)};return h}function Bk(b,c,d){var e={".drm.servers":"",".drm.clearKeys":"",".drm.advanced":{distinctiveIdentifierRequired:!1,persistentStateRequired:!1,videoRobustness:"",audioRobustness:"",serverCertificate:new Uint8Array(0),individualizationServer:""}};return xk(b,c,d||zk(),e,"")}
  function Ak(b,c){var d=b.filter(function(b){return "variant"==b.type}),e=[],f=re(c,d.map(function(b){return b.language}));f&&(e=d.filter(function(b){return M(b.language)==f}));0==e.length&&(e=d.filter(function(b){return b.primary}));0==e.length&&(d.map(function(b){return b.language}),e=d);var g=e.filter(function(b){return b.height&&480>=b.height});g.length&&(g.sort(function(b,c){return c.height-b.height}),e=g.filter(function(b){return b.height==g[0].height}));d=[];if(e.length){var h=Math.floor(e.length/
  2);e.sort(function(b,c){return b.bandwidth-c.bandwidth});d.push(e[h]);}e=r(b);for(h=e.next();!h.done;h=e.next())h=h.value,"text"==h.type&&d.push(h);return d}function Ck(){this.a=null;this.b=[];}function Dk(b,c){if(null==b.a)b.a={timestamp:Date.now()/1E3,state:c,duration:0};else{var d=Date.now()/1E3;b.a.duration=d-b.a.timestamp;b.a.state!=c&&(b.b.push(b.a),b.a={timestamp:d,state:c,duration:0});}}function Ek(b,c){var d=0;b.a&&b.a.state==c&&(d+=b.a.duration);for(var e=r(b.b),f=e.next();!f.done;f=e.next())f=f.value,d+=f.state==c?f.duration:0;return d}
  function Fk(b){function c(b){return {timestamp:b.timestamp,state:b.state,duration:b.duration}}for(var d=[],e=r(b.b),f=e.next();!f.done;f=e.next())d.push(c(f.value));b.a&&d.push(c(b.a));return d}function Gk(){this.b=this.c=null;this.a=[];}function Hk(b,c,d){b.b!=c&&(b.b=c,b.a.push({timestamp:Date.now()/1E3,id:c.id,type:"text",fromAdaptation:d,bandwidth:null}));}function Ik(){this.f=this.j=this.c=this.h=this.i=this.g=this.m=NaN;this.a=new Ck;this.b=new Gk;}function X(b,c){var d=this;J.call(this);this.g=Jk;this.a=null;this.$a=!1;this.i=new ac;this.rc=this.j=this.xb=this.c=this.m=this.f=this.Pb=this.V=this.Qb=this.K=this.bb=this.o=this.C=this.h=this.N=null;this.Ed=1E9;this.Tb=new Set;this.eb=!0;this.ka=null;this.Ad=!1;this.yd=0;this.ja=null;this.F=new Fh;this.b=Kk(this);this.Ub={width:Infinity,height:Infinity};this.v=null;this.Rb=new Oh(this.b.preferredAudioLanguage,this.b.preferredVariantRole,this.b.preferredAudioChannelCount);this.Ka=this.b.preferredTextLanguage;
  this.yb=this.b.preferredTextRole;c&&c(this);this.N=Lk(this);L(this.i,window,"online",function(){d.bd();});this.w={name:"detach"};this.S={name:"attach"};this.Ca={name:"unload"};this.Ac={name:"manifest-parser"};this.yc={name:"manifest"};this.ab={name:"media-source"};this.sc={name:"drm-engine"};this.W={name:"load"};this.Dc={name:"src-equals-drm-engine"};this.cb={name:"src-equals"};var e=new Map;e.set(this.S,function(b,c){return Db(Mk(d,b,c))});e.set(this.w,function(b){b.u&&(d.i.ma(b.u,"error"),b.u=null);
  d.a=null;b=Promise.resolve();return Db(b)});e.set(this.Ca,function(b){return Db(Nk(d,b))});e.set(this.ab,function(b){b=Ok(d,b);return Db(b)});e.set(this.Ac,function(b,c){var e=Pk(d,b,c);return Db(e)});e.set(this.yc,function(b){return Qk(d,b)});e.set(this.sc,function(){var b=Rk(d);return Db(b)});e.set(this.W,function(b,c){return Db(Sk(d,b,c))});e.set(this.Dc,function(b){b=Tk(d,b);return Db(b)});e.set(this.cb,function(b,c){return Uk(d,b,c)});this.fb=new ok(this.w,{Le:function(b,c,e,k){var f=null;b==
  d.w&&(f=e==d.w?d.w:d.S);b==d.S&&(f=e==d.w||c.u!=k.u?d.w:e==d.S?d.S:e==d.ab||e==d.W?d.ab:e==d.cb?d.Dc:null);b==d.ab&&(f=e==d.W&&c.u==k.u?d.Ac:d.Ca);b==d.Ac&&(f=Vk(d.W,d.yc,d.Ca,e,c,k));b==d.yc&&(f=Vk(d.W,d.sc,d.Ca,e,c,k));b==d.sc&&(f=Vk(d.W,d.W,d.Ca,e,c,k));b==d.Dc&&(f=e==d.cb&&c.u==k.u?d.cb:d.Ca);if(b==d.W||b==d.cb)f=d.Ca;b==d.Ca&&(f=k.u&&c.u==k.u?d.S:d.w);return f},ve:function(b,c,h){d.dispatchEvent(new I("onstatechange",{state:b.name}));return e.get(b)(c,h)},handleError:function(b){return t(function h(){return y(h,
  function(c){switch(c.l){case 1:return u(c,Nk(d,b),2);case 2:return c["return"](b.u?d.S:d.w)}})})},bf:function(b){d.dispatchEvent(new I("onstateidle",{state:b.name}));}});b&&this.zb(b,!0);}Ta(X,J);z("shaka.Player",X);
  X.prototype.destroy=function(){var b=this;return t(function d(){var e;return y(d,function(d){switch(d.l){case 1:if(b.g==Wk)return d["return"]();b.g=Wk;e=sk(b.fb,function(){return {node:b.w,payload:pk(),Ra:!1}});return u(d,new Promise(function(b){e.pb=function(){};e.fc=function(){b();};e.Ua=function(){b();};e.onError=function(){b();};e.hc=function(){b();};}),2);case 2:return u(d,b.fb.destroy(),3);case 3:b.i&&(b.i.a(),b.i=null);b.rc=null;b.j=null;b.b=null;if(!b.N){d.A(0);break}return u(d,b.N.destroy(),5);
  case 5:b.N=null,v(d);}})})};X.prototype.destroy=X.prototype.destroy;X.version="v2.5.1-1";var Xk=["2","5"];Le=new function(b){this.a=b;this.c=Me;this.b=Ne;}(new Je(Number(Xk[0]),Number(Xk[1])));var Yk=["output-restricted","internal-error"],Zk={};X.registerSupportPlugin=function(b,c){Zk[b]=c;};
  X.isBrowserSupported=function(){return window.Promise&&window.Uint8Array&&Array.prototype.forEach&&window.MediaKeys&&window.navigator&&window.navigator.requestMediaKeySystemAccess&&window.MediaKeySystemAccess&&window.MediaKeySystemAccess.prototype.getConfiguration?mc()?!0:nc("application/x-mpegurl"):!1};
  X.probeSupport=function(){return jd().then(function(b){for(var c=U.wf(),d={},e=r('video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",")),f=
  e.next();!f.done;f=e.next()){f=f.value;d[f]=mc()?Wd(f)?!0:MediaSource.isTypeSupported(f)||zd(f):nc(f);var g=f.split(";")[0];d[g]=d[g]||d[f];}b={manifest:c,media:d,drm:b};for(var h in Zk)b[h]=Zk[h]();return b})};X.prototype.zb=function(b,c){c=void 0===c?!0:c;if(this.g==Wk)return Promise.reject($k());var d=pk();d.u=b;mc()||(c=!1);var e=c?this.ab:this.S,f=sk(this.fb,function(){return {node:e,payload:d,Ra:!1}});f.pb=function(){};return al(f)};X.prototype.attach=X.prototype.zb;
  X.prototype.detach=function(){var b=this;if(this.g==Wk)return Promise.reject($k());var c=sk(this.fb,function(){return {node:b.w,payload:pk(),Ra:!1}});c.pb=function(){};return al(c)};X.prototype.detach=X.prototype.detach;X.prototype.md=function(b){var c=this;b=void 0===b?!0:b;if(this.g==Wk)return Promise.reject($k());mc()||(b=!1);var d=pk(),e=sk(this.fb,function(e){var f=e.u&&b?c.ab:e.u?c.S:c.w;d.u=e.u;return {node:f,payload:d,Ra:!1}});e.pb=function(){};return al(e)};X.prototype.unload=X.prototype.md;
  X.prototype.load=function(b,c,d){if(this.g==Wk)return Promise.reject($k());this.dispatchEvent(new I("loading"));var e=pk();e.uri=b;e.jd=Date.now()/1E3;d&&"string"!=typeof d&&(Ke("Loading with a manifest parser factory","Please register a manifest parser and for the mime-type."),e.va=function(){return new d});d&&"string"==typeof d&&(e.mimeType=d);void 0!==c&&(e.startTime=c);var f=bl(e)?this.cb:this.W,g=sk(this.fb,function(b){if(null==b.u)return null;e.u=b.u;return {node:f,payload:e,Ra:!0}});g.pb=function(){};
  return new Promise(function(b,c){g.hc=function(){return c(new D(2,7,7002))};g.fc=function(){return b()};g.Ua=function(){return c($k())};g.onError=function(b){return c(b)};})};X.prototype.load=X.prototype.load;
  function bl(b){if(b.va)return !1;if(!mc())return !0;var c=b.mimeType;b=b.uri||"";c||(c={mp4:"video/mp4",m4v:"video/mp4",m4a:"audio/mp4",webm:"video/webm",ts:"video/mp2t",m3u8:"application/x-mpegurl",mp3:"audio/mpeg",aac:"audio/aac",flac:"audio/flac"}[U.getExtension(b)]);return c?nc(c)?U.isSupported(b,c)?!!navigator.vendor&&navigator.vendor.includes("Apple"):!0:!1:!1}function Mk(b,c,d){null==c.u&&(c.u=d.u,L(b.i,c.u,"error",function(){var c=cl(b);c&&b.Ha(c);}));b.a=c.u;return Promise.resolve()}
  function Nk(b,c){return t(function e(){return y(e,function(e){switch(e.l){case 1:b.g!=Wk&&(b.g=Jk);b.dispatchEvent(new I("unloading"));c.currentTime=null;c.va=null;c.mimeType=null;c.startTime=null;c.uri=null;c.u&&(b.i.ma(c.u,"loadeddata"),b.i.ma(c.u,"playing"),b.i.ma(c.u,"pause"),b.i.ma(c.u,"ended"),b.i.ma(c.u,"ratechange"));b.bb&&(b.bb.a(),b.bb=null);b.Qb&&(b.Qb.stop(),b.Qb=null);if(!b.m){e.A(2);break}return u(e,b.m.stop(),3);case 3:b.m=null;case 2:if(!b.j){e.A(4);break}return u(e,b.j.stop(),4);
  case 4:if(!b.f){e.A(6);break}return u(e,b.f.destroy(),7);case 7:b.f=null;case 6:b.o&&(b.o.a(),b.o=null);if(!b.C){e.A(8);break}return u(e,b.C.destroy(),9);case 9:b.C=null;case 8:c.u&&c.u.src&&(c.u.removeAttribute("src"),c.u.load());if(!b.h){e.A(10);break}return u(e,b.h.destroy(),11);case 11:b.h=null;case 10:b.F.a.clear(),b.xb=null,b.V=null,b.Tb.clear(),b.c=null,b.v=null,b.tc=null,b.eb=!0,dl(b),v(e);}})})}
  function Ok(b,c){return t(function e(){var f,g,h,k;return y(e,function(e){switch(e.l){case 1:return f=window.muxjs?new nd:new od,g=b.b.textDisplayFactory,h=new g,b.tc=g,k=new $d(c.u,f,h),u(e,k.o,2);case 2:b.C=k,v(e);}})})}
  function Pk(b,c,d){return t(function f(){var g,h,k;return y(f,function(f){switch(f.l){case 1:c.va=d.va;c.mimeType=d.mimeType;c.uri=d.uri;g=c.uri;h=b.N;b.xb=g;if(c.va){b.m=c.va();f.A(2);break}k=b;return u(f,U.create(g,h,b.b.manifest.retryParameters,c.mimeType),3);case 3:k.m=f.s;case 2:b.m.configure(b.b.manifest),v(f);}})})}
  function Qk(b,c){var d=c.uri,e=b.N;b.Pb=new vi;wi(b.Pb,function(c){el(b,"timelineregionadded",c);});var f={networkingEngine:e,filterNewPeriod:function(c){return b.Bc(c)},filterAllPeriods:function(c){return fl(b,c)},onTimelineRegionAdded:function(c){var d=b.Pb;a:{var e=r(d.b);for(var f=e.next();!f.done;f=e.next())if(f=f.value,f.schemeIdUri==c.schemeIdUri&&f.startTime==c.startTime&&f.endTime==c.endTime){e=f;break a}e=null;}null==e&&(d.b.add(c),d.c(c));},onEvent:function(c){return b.dispatchEvent(c)},onError:function(c){return b.Ha(c)}};
  return new H(Promise.resolve().then(function(){return t(function h(){var c;return y(h,function(e){switch(e.l){case 1:return c=b,u(e,b.m.start(d,f),2);case 2:c.c=e.s;b.dispatchEvent(new I("manifestparsed"));if(0==b.c.periods.length)throw new D(2,4,4014);gl(b.c.periods);v(e);}})})}),function(){return b.m.stop()})}
  function Rk(b){return t(function d(){return y(d,function(d){switch(d.l){case 1:return b.h=new Gc({nb:b.N,onError:function(d){b.Ha(d);},gc:function(d){hl(b,d);},onExpirationUpdated:function(d,e){il(b,d,e);},onEvent:function(d){b.dispatchEvent(d);}}),b.h.configure(b.b.drm),u(d,Nc(b.h,bi(b.c.periods),b.c.offlineSessionIds),2);case 2:fl(b,b.c.periods),v(d);}})})}
  function Sk(b,c,d){return t(function f(){var g,h,k,l,m,n,q,x,w;return y(f,function(f){switch(f.l){case 1:return c.startTime=d.startTime,g=c.u,h=c.uri,b.xb=h,b.v=new Ik,k=function(){return jl(b)},l=function(){var c=b.a.playbackRate;0!=c&&b.K.set(c);},L(b.i,g,"playing",k),L(b.i,g,"pause",k),L(b.i,g,"ended",k),L(b.i,g,"ratechange",l),m=b.b.abrFactory,b.j&&b.rc==m||(b.rc=m,b.j=new m,b.j.configure(b.b.abr)),kl(b,b.c.periods),b.Rb=new Oh(b.b.preferredAudioLanguage,b.b.preferredVariantRole,b.b.preferredAudioChannelCount),
  b.Ka=b.b.preferredTextLanguage,ll(b.c.presentationTimeline,b.b.playRangeStart,b.b.playRangeEnd),u(f,b.h.zb(g),2);case 2:return b.j.init(function(c,d,f){d=void 0===d?!1:d;f=void 0===f?0:f;a:{var g=r(b.c.periods);for(var h=g.next();!h.done;h=g.next())if(h=h.value,h.variants.includes(c)){g=h;break a}g=null;}ml(b,g,c,!0);b.f&&(Pi(b.f,c,d,f),nl(b));}),b.o=ol(b,c.startTime),b.bb=pl(b),b.K=new fi({cc:function(){return c.u.playbackRate},fd:function(b){c.u.playbackRate=b;},Fd:function(b){c.u.currentTime+=b;}}),
  n=Math.max(b.c.minBufferTime,b.b.streaming.rebufferingGoal),ql(b,n),b.f=rl(b),b.f.configure(b.b.streaming),sl(b),b.g=tl,b.dispatchEvent(new I("streaming")),u(f,b.f.start(),3);case 3:b.b.streaming.startAtSegmentBoundary&&(q=b.o.i(),x=ul(b,q),b.o.o(x)),b.c.periods.forEach(b.Bc.bind(b)),vl(b),nl(b),w=wl(b),w.variants.some(function(b){return b.primary}),xl(b,w.variants),dc(b.i,g,"loadeddata",function(){b.v.c=Date.now()/1E3-d.jd;}),v(f);}})})}
  function Tk(b,c){return t(function e(){var f,g;return y(e,function(e){switch(e.l){case 1:return f=wd,b.h=new Gc({nb:b.N,onError:function(c){b.Ha(c);},gc:function(c){hl(b,c);},onExpirationUpdated:function(c,e){il(b,c,e);},onEvent:function(c){b.dispatchEvent(c);}}),b.h.configure(b.b.drm),g={id:0,language:"und",primary:!1,audio:null,video:{id:0,originalId:null,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return null},getSegmentReference:function(){return null},initSegmentReference:null,
  presentationTimeOffset:0,mimeType:"video/mp4",codecs:"",encrypted:!0,keyId:null,language:"und",label:null,type:f.La,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],channelsCount:null,closedCaptions:null},bandwidth:100,drmInfos:[],allowedByApplication:!0,allowedByKeySystem:!0},u(e,Nc(b.h,[g],[]),2);case 2:return u(e,b.h.zb(c.u),0)}})})}
  function Uk(b,c,d){function e(){return jl(b)}c.uri=d.uri;c.startTime=d.startTime;b.xb=c.uri;b.v=new Ik;b.o=new oi(c.u);null!=c.startTime&&b.o.o(c.startTime);b.K=new fi({cc:function(){return c.u.playbackRate},fd:function(b){c.u.playbackRate=b;},Fd:function(b){c.u.currentTime+=b;}});ql(b,b.b.streaming.rebufferingGoal);L(b.i,c.u,"playing",e);L(b.i,c.u,"pause",e);L(b.i,c.u,"ended",e);dc(b.i,c.u,"loadeddata",function(){b.v.c=Date.now()/1E3-d.jd;});b.a.audioTracks&&(L(b.i,b.a.audioTracks,"addtrack",function(){return vl(b)}),
  L(b.i,b.a.audioTracks,"removetrack",function(){return vl(b)}));if(b.a.textTracks){var f=b.a.textTracks;L(b.i,f,"addtrack",function(){return vl(b)});L(b.i,f,"removetrack",function(){return vl(b)});}c.u.src=c.uri;b.g=yl;b.dispatchEvent(new I("streaming"));var g=new G;b.a.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?g.resolve():b.a.error?g.reject(cl(b)):(dc(b.i,b.a,"loadeddata",function(){g.resolve();}),dc(b.i,b.a,"error",function(){g.reject(cl(b));}));return new H(g,function(){g.reject(new D(2,7,7001));
  return Promise.resolve()})}function gl(b){function c(b){return b.video&&b.audio||b.video&&b.video.codecs.includes(",")}b.some(function(b){return b.variants.some(c)})&&b.forEach(function(b){b.variants=b.variants.filter(c);});}
  function sl(b){function c(b){var c="";b.video&&(c=lc(b.video.codecs)[0]);var d="";b.audio&&(d=lc(b.audio.codecs)[0]);return c+"-"+d}var d=b.c.periods.reduce(function(b,c){return b.concat(c.variants)},[]);d=De(d,b.b.preferredAudioChannelCount);var e=new Gb;d.forEach(function(b){var d=c(b);e.push(d,b);});var f=null,g=Infinity;e.forEach(function(b,c){var d=0,e=0;c.forEach(function(b){d+=b.bandwidth||0;++e;});var h=d/e;h<g&&(f=b,g=h);});b.c.periods.forEach(function(b){b.variants=b.variants.filter(function(b){return c(b)==
  f?!0:!1});});}function Lk(b){return new K(function(c,d){b.j&&b.j.segmentDownloaded(c,d);})}function ol(b,c){return new pi(b.a,b.c,b.b.streaming,c,function(){b.bb&&ai(b.bb,!0);b.f&&Vi(b.f);},function(c){return b.dispatchEvent(c)})}
  function pl(b){var c=new di(b.c);ei(c,function(){vl(b);});var d=new xi(b.Pb);Bi(d,function(c){el(b,"timelineregionenter",c);},function(c){el(b,"timelineregionexit",c);},function(c,d){d||(el(b,"timelineregionenter",c),el(b,"timelineregionexit",c));});var e=new $h(b.a);e.b.add(c);e.b.add(d);return e}
  function ql(b,c){b.V=new Rh(c,Math.min(.5,c/2));b.V.a=Th;dl(b);b.Qb=(new B(function(){switch(b.g){case yl:var c=b.a.ended?!0:pd(b.a.buffered)>=b.a.duration-.1;break;case tl:a:{var e;(e=b.a.ended)||(e=b.C,e=e.g?"ended"==e.g.readyState:!0);if(e)c=!0;else{if(b.c.presentationTimeline.U()&&(e=b.c.presentationTimeline.jb(),pd(b.a.buffered)>=e)){c=!0;break a}c=!1;}}break;default:c=!1;}var f=rd(b.a.buffered,b.a.currentTime);e=b.V;var g=c,h=e.b.get(e.a);c=e.a;f=g||f>=h?Sh:Th;e.a=f;c!=f&&dl(b);})).Ia(.25);}
  function rl(b){return new Ci(b.c,{Qa:function(){return b.o.i()},getBandwidthEstimate:function(){return b.j.getBandwidthEstimate()},L:b.C,nb:b.N,Id:b.$e.bind(b),Hd:b.qe.bind(b),onError:b.Ha.bind(b),onEvent:function(c){return b.dispatchEvent(c)},df:b.ef.bind(b),Vc:b.lf.bind(b)})}X.prototype.configure=function(b,c){2==arguments.length&&"string"==typeof b&&(b=yk(b,c));var d=Bk(this.b,b,Kk(this));zl(this);return d};X.prototype.configure=X.prototype.configure;
  function zl(b){b.m&&b.m.configure(b.b.manifest);b.h&&b.h.configure(b.b.drm);if(b.f){b.f.configure(b.b.streaming);try{b.c.periods.forEach(b.Bc.bind(b));}catch(g){b.Ha(g);}var c=Gi(b.f),d=Ii(b.f),e=wl(b);c=Ge(c,d,e.variants);b.j&&c&&c.allowedByApplication&&c.allowedByKeySystem?xl(b,e.variants):Al(b,e);}if(b.C&&(e=b.b.textDisplayFactory,b.tc!=e)){c=new e;d=b.C;var f=d.h;d.h=c;f&&(c.setTextVisibility(f.isTextVisible()),f.destroy());d.a&&(d.a.c=c);b.tc=e;b.f&&(e=b.f,(c=e.b.get("text"))&&Oi(e,c.stream,!0,
  0,!0));}b.j&&(b.j.configure(b.b.abr),b.b.abr.enabled&&!b.eb?b.j.enable():b.j.disable(),Bl(b));}X.prototype.getConfiguration=function(){var b=Kk(this);Bk(b,this.b,Kk(this));return b};X.prototype.getConfiguration=X.prototype.getConfiguration;X.prototype.Ef=function(){for(var b in this.b)delete this.b[b];Bk(this.b,Kk(this),Kk(this));zl(this);};X.prototype.resetConfiguration=X.prototype.Ef;X.prototype.Fe=function(){return this.g};X.prototype.getLoadMode=X.prototype.Fe;X.prototype.Je=function(){return this.a};
  X.prototype.getMediaElement=X.prototype.Je;X.prototype.Bb=function(){return this.N};X.prototype.getNetworkingEngine=X.prototype.Bb;X.prototype.$b=function(){return this.xb};X.prototype.getAssetUri=X.prototype.$b;X.prototype.Ie=function(){Ke("getManifestUri",'Please use "getAssetUri" instead.');return this.$b()};X.prototype.getManifestUri=X.prototype.Ie;X.prototype.U=function(){return this.c?this.c.presentationTimeline.U():this.a&&this.a.src?Infinity==this.a.duration:!1};X.prototype.isLive=X.prototype.U;
  X.prototype.Ta=function(){return this.c?this.c.presentationTimeline.Ta():!1};X.prototype.isInProgress=X.prototype.Ta;X.prototype.Xe=function(){if(this.c){if(!this.c.periods.length)return !1;var b=this.c.periods[0].variants;return b.length?!b[0].video:!1}return this.a&&this.a.src?this.a.videoTracks?0==this.a.videoTracks.length:0==this.a.videoHeight:!1};X.prototype.isAudioOnly=X.prototype.Xe;
  X.prototype.Gf=function(){if(this.c){var b=this.c.presentationTimeline;return {start:b.ib(),end:b.wa()}}return this.a&&this.a.src&&(b=this.a.seekable,b.length)?{start:b.start(0),end:b.end(b.length-1)}:{start:0,end:0}};X.prototype.seekRange=X.prototype.Gf;X.prototype.keySystem=function(){return this.h?this.h.keySystem():""};X.prototype.keySystem=X.prototype.keySystem;X.prototype.drmInfo=function(){return this.h?this.h.a:null};X.prototype.drmInfo=X.prototype.drmInfo;
  X.prototype.bc=function(){return this.h?this.h.bc():Infinity};X.prototype.getExpiration=X.prototype.bc;X.prototype.Jc=function(){return this.V?this.V.a==Th:!1};X.prototype.isBuffering=X.prototype.Jc;X.prototype.Me=function(){if(this.K){var b=this.K;b=b.g?0:b.f;}else b=0;return b};X.prototype.getPlaybackRate=X.prototype.Me;X.prototype.bg=function(b){0==b?$a("A trick play rate of 0 is unsupported!"):(this.g==yl&&this.K.set(b),this.g==tl&&(this.K.set(b),Ni(this.f,1<Math.abs(b))));};
  X.prototype.trickPlay=X.prototype.bg;X.prototype.re=function(){this.g==yl&&this.K.set(1);this.g==tl&&(this.K.set(1),Ni(this.f,!1));};X.prototype.cancelTrickPlay=X.prototype.re;
  X.prototype.Ic=function(){if(this.c&&this.o){for(var b=Cl(this),c=[],d=r(Dl(this)),e=d.next();!e.done;e=d.next()){e=e.value;var f=we(e);f.active=e==b;c.push(f);}return c}return this.a&&this.a.audioTracks?Array.from(this.a.audioTracks).map(function(b){var c=Ae(b);c.active=b.enabled;c.type="variant";c.originalAudioId=b.id;"main"==b.kind?(c.primary=!0,c.roles=["main"],c.audioRoles=["main"]):c.audioRoles=[];return c}):[]};X.prototype.getVariantTracks=X.prototype.Ic;
  X.prototype.kb=function(){if(this.c&&this.o){for(var b=El(this),c=[],d=r(Fl(this)),e=d.next();!e.done;e=d.next()){e=e.value;var f=xe(e);f.active=e==b;c.push(f);}return c}return this.a&&this.a.src&&this.a.textTracks?Array.from(this.a.textTracks).map(function(b){var c=Ae(b);c.active="disabled"!=b.mode;c.type="text";c.originalTextId=b.id;"captions"==b.kind&&(c.mimeType="application/cea-608");return c}):[]};X.prototype.getTextTracks=X.prototype.kb;
  X.prototype.cd=function(b){if(this.c&&this.f){var c=wl(this),d=c.textStreams.find(function(c){return c.id==b.id});d&&(Gh(this.F,c,d),Hk(this.v.b,d,!1),Gl(this,d),this.Ka=d.language);}else if(this.a&&this.a.src&&this.a.textTracks){c=Array.from(this.a.textTracks);c=r(c);for(d=c.next();!d.done;d=c.next())d=d.value,ye(d)==b.id?d.mode=this.$a?"showing":"hidden":d.mode="disabled";Hl(this);}};X.prototype.selectTextTrack=X.prototype.cd;
  X.prototype.If=function(){Ke("selectEmbeddedTextTrack","If closed captions are signaled in the manifest, a text stream will be created to represent them. Please use SelectTextTrack.");var b=this.kb().filter(function(b){return "application/cea-608"==b.mimeType});0<b.length&&this.cd(b[0]);};X.prototype.selectEmbeddedTextTrack=X.prototype.If;
  X.prototype.gg=function(){Ke("usingEmbeddedTextTrack","If closed captions are signaled in the manifest, a text stream will be created to represent them. There should be no reason to know if the player is playing embedded text.");var b=this.kb().filter(function(b){return b.active})[0];return b?"application/cea-608"==b.mimeType:!1};X.prototype.usingEmbeddedTextTrack=X.prototype.gg;
  X.prototype.Kf=function(b,c,d){d=void 0===d?0:d;if(this.c&&this.f){var e=wl(this);this.b.abr.enabled&&$a("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");var f=e.variants.find(function(c){return c.id==b.id});f&&Be(f)&&(ml(this,e,f,!1),Il(this,f,c,d),this.Rb=new Nh(f),xl(this,e.variants));}else if(this.a&&this.a.audioTracks){c=Array.from(this.a.audioTracks);c=r(c);for(d=c.next();!d.done;d=
  c.next())d=d.value,ye(d)==b.id&&(d.enabled=!0);Jl(this);}};X.prototype.selectVariantTrack=X.prototype.Kf;X.prototype.Ae=function(){return Kl(this.Ic())};X.prototype.getAudioLanguagesAndRoles=X.prototype.Ae;X.prototype.Te=function(){return Kl(this.kb())};X.prototype.getTextLanguagesAndRoles=X.prototype.Te;X.prototype.ze=function(){return Array.from(Ll(this.Ic()))};X.prototype.getAudioLanguages=X.prototype.ze;X.prototype.Se=function(){return Array.from(Ll(this.kb()))};X.prototype.getTextLanguages=X.prototype.Se;
  X.prototype.Hf=function(b,c){if(this.c&&this.o){var d=wl(this);this.Rb=new Oh(b,c||"",0);Al(this,d);}else if(this.a&&this.a.audioTracks){d=Array.from(this.a.audioTracks);d=r(d);for(var e=d.next();!e.done;e=d.next())e=e.value,e.language==b&&(e.enabled=!0);Jl(this);}};X.prototype.selectAudioLanguage=X.prototype.Hf;X.prototype.Jf=function(b,c){if(this.c&&this.o){var d=wl(this);this.Ka=b;this.yb=c||"";Al(this,d);}else(d=this.kb().filter(function(c){return c.language==b})[0])&&this.cd(d);};
  X.prototype.selectTextLanguage=X.prototype.Jf;X.prototype.Mc=function(){var b=this.$a;return this.c?this.C.h.isTextVisible():this.a&&this.a.src&&this.a.textTracks?Array.from(this.a.textTracks).some(function(b){return "showing"==b.mode}):b};X.prototype.isTextTrackVisible=X.prototype.Mc;
  X.prototype.Nf=function(b){var c=this;return t(function e(){var f,g,h,k,l,m;return y(e,function(e){switch(e.l){case 1:f=c.$a;g=b;if(f==g)return e["return"]();c.$a=g;if(c.g!=tl){if(c.a&&c.a.src&&c.a.textTracks){h=Array.from(c.a.textTracks);for(var n=r(h),x=n.next();!x.done;x=n.next())k=x.value,"disabled"!=k.mode&&(k.mode=b?"showing":"hidden");}e.A(2);break}c.C.h.setTextVisibility(b);if(c.b.streaming.alwaysStreamText){e.A(2);break}if(!b){n=c.f;n.C=!0;if(x=n.b.get("text"))Di(x),n.b["delete"]("text");
  e.A(2);break}l=wl(c);m=Ee(l.textStreams,c.Ka,c.yb);if(!(0<m.length)){e.A(2);break}return u(e,Ji(c.f,m[0]),2);case 2:Ml(c),v(e);}})})};X.prototype.setTextTrackVisibility=X.prototype.Nf;X.prototype.Oe=function(){if(!this.U())return null;if(this.c)return new Date(1E3*(this.c.presentationTimeline.f+this.a.currentTime));if(this.a&&this.a.getStartDate){var b=this.a.getStartDate();return isNaN(b.getTime())?null:new Date(b.getTime()+1E3*this.a.currentTime)}return null};X.prototype.getPlayheadTimeAsDate=X.prototype.Oe;
  X.prototype.Qe=function(){if(!this.U())return null;if(this.c)return new Date(1E3*this.c.presentationTimeline.f);if(this.a&&this.a.getStartDate){var b=this.a.getStartDate();return isNaN(b.getTime())?null:b}return null};X.prototype.getPresentationStartTimeAsDate=X.prototype.Qe;X.prototype.Ec=function(){var b={total:[],audio:[],video:[],text:[]};this.g==yl&&(b.total=sd(this.a.buffered));this.g==tl&&this.C.Ec(b);return b};X.prototype.getBufferedInfo=X.prototype.Ec;
  X.prototype.getStats=function(){if(this.g!=tl&&this.g!=yl)return {width:NaN,height:NaN,streamBandwidth:NaN,decodedFrames:NaN,droppedFrames:NaN,estimatedBandwidth:NaN,loadLatency:NaN,playTime:NaN,pauseTime:NaN,bufferingTime:NaN,switchHistory:[],stateHistory:[]};jl(this);var b=this.a;if(b.getVideoPlaybackQuality){b=b.getVideoPlaybackQuality();var c=this.v,d=Number(b.totalVideoFrames);c.i=Number(b.droppedVideoFrames);c.h=d;}if(this.g==tl){if(b=Cl(this))this.v.j=b.bandwidth;b&&b.video&&(c=this.v,d=b.video.height||
  NaN,c.m=b.video.width||NaN,c.g=d);b=this.j.getBandwidthEstimate();this.v.f=b;}var e=this.v;b=e.m;c=e.g;d=e.j;var f=e.h,g=e.i,h=e.f,k=e.c,l=Ek(e.a,"playing"),m=Ek(e.a,"paused"),n=Ek(e.a,"buffering"),q=Fk(e.a),x=[];e=r(e.b.a);for(var w=e.next();!w.done;w=e.next())w=w.value,x.push({timestamp:w.timestamp,id:w.id,type:w.type,fromAdaptation:w.fromAdaptation,bandwidth:w.bandwidth});return {width:b,height:c,streamBandwidth:d,decodedFrames:f,droppedFrames:g,estimatedBandwidth:h,loadLatency:k,playTime:l,pauseTime:m,
  bufferingTime:n,stateHistory:q,switchHistory:x}};X.prototype.getStats=X.prototype.getStats;
  X.prototype.addTextTrack=function(b,c,d,e,f,g){var h=this;return t(function l(){var m,n,q,x,w,A,C,E,F;return y(l,function(l){switch(l.l){case 1:if(h.g==yl)throw Error("State error!");if(h.g!=tl)throw Error("State error!");m=wl(h);n=wd;q=h.c.periods.indexOf(m);x=q+1;w=x>=h.c.periods.length?h.c.presentationTimeline.Y():h.c.periods[x].startTime;A=w-m.startTime;if(Infinity==A)throw new D(1,4,4033);C=new Q(1,0,A,function(){return [b]},0,null);E={id:h.Ed++,originalId:null,createSegmentIndex:Promise.resolve.bind(Promise),
  findSegmentPosition:function(){return 1},getSegmentReference:function(b){return 1==b?C:null},initSegmentReference:null,presentationTimeOffset:0,mimeType:e,codecs:f||"",kind:d,encrypted:!1,keyId:null,language:c,label:g||null,type:n.na,primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],channelsCount:null,closedCaptions:null};h.Tb.add(E);m.textStreams.push(E);return u(l,Ji(h.f,E),2);case 2:return (F=Hi(h.f,"text"))&&Gh(h.F,m,F),h.Tb["delete"](E),Al(h,m),vl(h),l["return"](xe(E))}})})};
  X.prototype.addTextTrack=X.prototype.addTextTrack;X.prototype.ed=function(b,c){this.Ub.width=b;this.Ub.height=c;};X.prototype.setMaxHardwareResolution=X.prototype.ed;X.prototype.bd=function(){if(this.g==tl){var b=this.f;if(b.f)b=!1;else if(b.m)b=!1;else{for(var c=r(b.b.values()),d=c.next();!d.done;d=c.next())d=d.value,d.Eb&&(d.Eb=!1,Mi(b,d,.1));b=!0;}}else b=!1;return b};X.prototype.retryStreaming=X.prototype.bd;X.prototype.Ge=function(){return this.c};X.prototype.getManifest=X.prototype.Ge;
  X.prototype.He=function(){return this.m?this.m.constructor:null};X.prototype.getManifestParserFactory=X.prototype.He;function ml(b,c,d,e){Hh(b.F,c).variant=d;b=b.v.b;b.c!=d&&(b.c=d,b.a.push({timestamp:Date.now()/1E3,id:d.id,type:"variant",fromAdaptation:e,bandwidth:d.bandwidth}));}function Kk(b){var c=zk();c.streaming.failureCallback=function(c){var d=[1001,1002,1003];b.U()&&d.includes(c.code)&&(c.severity=1,b.bd());};c.textDisplayFactory=function(){return new uk(b.a)};return c}
  function kl(b,c){for(var d=0;d<c.length;d++){for(var e=c[d],f=new Map,g=r(e.variants),h=g.next();!h.done;h=g.next())if(h=h.value,h.video&&h.video.closedCaptions){h=h.video;for(var k=r(h.closedCaptions.keys()),l=k.next();!l.done;l=k.next())if(l=l.value,!f.has(l)){var m={id:b.Ed++,originalId:l,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return null},getSegmentReference:function(){return null},initSegmentReference:null,presentationTimeOffset:0,mimeType:"application/cea-608",
  codecs:"",kind:"caption",encrypted:!1,keyId:null,language:h.closedCaptions.get(l),label:null,type:"text",primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:h.roles,channelsCount:null,closedCaptions:null};f.set(l,m);}}f=r(f.values());for(g=f.next();!g.done;g=f.next())e.textStreams.push(g.value);}}
  function fl(b,c){var d=b.f?Gi(b.f):null,e=b.f?Ii(b.f):null;c.forEach(ue.bind(null,b.h,d,e));d=Lb(c,function(b){return b.variants.some(Be)});if(0==d)throw new D(2,4,4032);if(d<c.length)throw new D(2,4,4011);c.forEach(function(b){te(b.variants,this.b.restrictions,this.Ub)&&this.f&&wl(this)==b&&vl(this);Nl(this,b.variants);}.bind(b));}p=X.prototype;
  p.Bc=function(b){var c=this.f?Gi(this.f):null,d=this.f?Ii(this.f):null;ue(this.h,c,d,b);c=b.variants;if(!c.some(Be))throw new D(2,4,4011);Nl(this,b.variants);te(c,this.b.restrictions,this.Ub)&&this.f&&wl(this)==b&&vl(this);if(b=this.h?this.h.a:null)for(c=r(c),d=c.next();!d.done;d=c.next()){d=r(d.value.drmInfos);for(var e=d.next();!e.done;e=d.next())if(e=e.value,e.keySystem==b.keySystem){e=r(e.initData||[]);for(var f=e.next();!f.done;f=e.next())f=f.value,Xc(this.h,f.initDataType,f.initData);}}};
  function Il(b,c,d,e){d=void 0===d?!1:d;e=void 0===e?0:e;b.eb?(b.ka=c,b.Ad=d,b.yd=e):(Pi(b.f,c,d,e),Jl(b));}function Gl(b,c){b.eb?b.ja=c:(Oi(b.f,c,!0,0,!1),Hl(b));}function ul(b,c){function d(b,c){if(!b)return null;var d=b.findSegmentPosition(c-g.startTime);return null==d?null:(d=b.getSegmentReference(d))?d.startTime+g.startTime:null}var e=Gi(b.f),f=Ii(b.f),g=wl(b);e=d(e,c);f=d(f,c);return null!=f&&null!=e?Math.max(f,e):null!=f?f:null!=e?e:c}
  function dl(b){var c=b.Jc();if(b.v&&b.V&&b.o){var d=b.K;d.g=c;gi(d);jl(b);}b.dispatchEvent(new I("buffering",{buffering:c}));}function jl(b){if(b.v&&b.V){var c=b.v.a;b.V.a==Th?Dk(c,"buffering"):b.a.paused?Dk(c,"paused"):b.a.ended?Dk(c,"ended"):Dk(c,"playing");}}function xl(b,c){try{Nl(b,c);}catch(e){return b.Ha(e),null}var d=c.filter(function(b){return Be(b)});d=b.Rb.create(d);b.j.setVariants(Array.from(d.values()));return b.j.chooseVariant()}
  function Al(b,c){var d=xl(b,c.variants);d&&(ml(b,c,d,!0),Il(b,d,!0));(d=Ee(c.textStreams,b.Ka,b.yb)[0]||null)&&(b.b.streaming.alwaysStreamText||b.Mc())&&(Gh(b.F,c,d),Hk(b.v.b,d,!0),Gl(b,d));nl(b);}
  p.$e=function(b){try{this.eb=!0;this.j.disable();Bl(this);var c=xl(this,b.variants),d=Ee(b.textStreams,this.Ka,this.yb)[0]||null;this.ka&&(b.variants.includes(this.ka)&&(c=this.ka),this.ka=null);this.ja&&(b.textStreams.includes(this.ja)&&(d=this.ja),this.ja=null);c&&ml(this,b,c,!0);if(d){var e=d;Gh(this.F,b,e);Hk(this.v.b,e,!0);}var f=this.f,g=f.b.get("video");if(g)var h=f.c.periods[g.ya];else{var k=f.b.get("audio");h=k?f.c.periods[k.ya]:null;}var l=c?c.audio:null;if(!h&&d){var m;if(m=l){b=d;var n=
  M(this.b.preferredTextLanguage),q=M(l.language),x=M(b.language);m=ne(x,n)&&!ne(q,x);}m&&(this.$a=!0);this.$a&&this.C.h.setTextVisibility(!0);Ml(this);}return this.b.streaming.alwaysStreamText||this.Mc()?{variant:c,text:d}:{variant:c,text:null}}catch(w){return this.Ha(w),{variant:null,text:null}}};p.qe=function(){this.eb=!1;this.b.abr.enabled&&(this.j.enable(),Bl(this));this.ka&&(Pi(this.f,this.ka,this.Ad,this.yd),Jl(this),this.ka=null);this.ja&&(Oi(this.f,this.ja,!0,0,!1),Hl(this),this.ja=null);};
  p.ef=function(){this.m&&this.m.update&&this.m.update();};p.lf=function(){this.o&&this.o.v();};function nl(b){Ol(b,new I("adaptation"));}function vl(b){Ol(b,new I("trackschanged"));}function Jl(b){Ol(b,new I("variantchanged"));}function Hl(b){Ol(b,new I("textchanged"));}function Ml(b){Ol(b,new I("texttrackvisibility"));}function Bl(b){Ol(b,new I("abrstatuschanged",{rg:b.b.abr.enabled}));}p.Ha=function(b){if(this.g!=Wk){var c=new I("error",{detail:b});this.dispatchEvent(c);c.defaultPrevented&&(b.handled=!0);}};
  function el(b,c,d){b.dispatchEvent(new I(c,{detail:{schemeIdUri:d.schemeIdUri,value:d.value,startTime:d.startTime,endTime:d.endTime,id:d.id,eventElement:d.eventElement}}));}function cl(b){if(!b.a.error)return null;var c=b.a.error.code;if(1==c)return null;var d=b.a.error.msExtendedCode;d&&(0>d&&(d+=Math.pow(2,32)),d=d.toString(16));return new D(2,3,3016,c,d,b.a.error.message)}
  function hl(b,c){if(b.f){var d=wl(b),e=!1,f=Object.keys(c),g=1==f.length&&"00"==f[0];f.length&&d.variants.forEach(function(b){He(b).forEach(function(d){var f=b.allowedByKeySystem;d.keyId&&(d=c[g?"00":d.keyId],b.allowedByKeySystem=!!d&&!Yk.includes(d));f!=b.allowedByKeySystem&&(e=!0);});});f=Gi(b.f);var h=Ii(b.f);(f=Ge(f,h,d.variants))&&!f.allowedByKeySystem&&Al(b,d);e&&(vl(b),xl(b,d.variants));}}
  function il(b,c,d){if(b.m&&b.m.onExpirationUpdated)b.m.onExpirationUpdated(c,d);b.dispatchEvent(new I("expirationupdated"));}function ll(b,c,d){0<c&&(b.U()||b.ae(c));d<b.Y()&&(b.U()||b.ta(d));}
  function Nl(b,c){var d=b.h?hc(b.h.S):{},e=Object.keys(d);e=e.length&&"00"==e[0];for(var f=!1,g=!1,h=[],k=[],l=r(c),m=l.next();!m.done;m=l.next()){m=m.value;var n=[];m.audio&&n.push(m.audio);m.video&&n.push(m.video);n=r(n);for(var q=n.next();!q.done;q=n.next())if(q=q.value,q.keyId){var x=d[e?"00":q.keyId];x?Yk.includes(x)&&(k.includes(x)||k.push(x)):h.includes(q.keyId)||h.push(q.keyId);}m.allowedByApplication?m.allowedByKeySystem&&(f=!0):g=!0;}if(!f)throw new D(2,4,4012,{hasAppRestrictions:g,missingKeys:h,
  restrictedKeyStatuses:k});}function Ol(b,c){t(function e(){return y(e,function(e){switch(e.l){case 1:return u(e,Promise.resolve(),2);case 2:b.g!=Wk&&b.dispatchEvent(c),v(e);}})});}function Ll(b){var c=new Set;b=r(b);for(var d=b.next();!d.done;d=b.next())d=d.value,d.language?c.add(M(d.language)):c.add("und");return c}
  function Kl(b){var c=new Map;b=r(b);for(var d=b.next();!d.done;d=b.next()){var e=d.value;d="und";var f=[];e.language&&(d=M(e.language));"variant"==e.type?f=e.audioRoles:f=e.roles;f&&f.length||(f=[""]);c.has(d)||c.set(d,new Set);e=r(f);for(f=e.next();!f.done;f=e.next())f=f.value,c.get(d).add(f);}var g=[];c.forEach(function(b,c){for(var d=r(b),e=d.next();!e.done;e=d.next())g.push({language:c,role:e.value});});return g}
  function Dl(b){b=wl(b);return null==b?[]:b.variants.filter(function(b){return Be(b)})}function Fl(b){var c=wl(b);return null==c?[]:c.textStreams.filter(function(c){return !b.Tb.has(c)})}function wl(b){var c=b.o.i(),d=null;b=r(b.c.periods);for(var e=b.next();!e.done;e=b.next())e=e.value,e.startTime<=c&&(d=e);return d}function Cl(b){var c=wl(b);return Hh(b.F,c).variant}
  function El(b){var c=wl(b);if(null==c)return null;if(!Hh(b.F,c).text){var d=Ee(c.textStreams,b.Ka,b.yb);d.length&&Gh(b.F,c,d[0]);}return Hh(b.F,c).text}function $k(){return new D(2,7,7E3)}function Vk(b,c,d,e,f,g){return e==b&&f.u==g.u&&f.uri==g.uri&&f.mimeType==g.mimeType&&f.va==g.va?c:d}function pk(){return {va:null,u:null,mimeType:null,startTime:null,jd:null,uri:null}}
  function al(b){return new Promise(function(c,d){b.Ua=function(){return d($k())};b.fc=function(){return c()};b.onError=function(b){return d(b)};b.hc=function(){return d($k())};})}var Wk=0,Jk=1,tl=2,yl=3;X.LoadMode={DESTROYED:Wk,NOT_LOADED:Jk,MEDIA_SOURCE:tl,SRC_EQUALS:yl};function Pl(b,c,d){var e=void 0==c.expiration?Infinity:c.expiration,f=c.presentationTimeline.Y();c=Ql(c.periods[0]);return {offlineUri:null,originalManifestUri:b,duration:f,size:0,expiration:e,tracks:c,appMetadata:d}}function Rl(b,c){var d=ek(new ck(b.ra(),b.$()),c.periods[0],new W(null,0)),e=c.appMetadata||{};d=Ql(d);return {offlineUri:b.toString(),originalManifestUri:c.originalManifestUri,duration:c.duration,size:c.size,expiration:c.expiration,tracks:d,appMetadata:e}}
  function Ql(b){var c=[],d=Ce(b.variants);d=r(d);for(var e=d.next();!e.done;e=d.next())c.push(we(e.value));b=r(b.textStreams);for(d=b.next();!d.done;d=b.next())c.push(xe(d.value));return c}function Sl(){this.a={};}function Tl(b,c,d){d=d.endTime-d.startTime;return Ul(b,c)*d}function Ul(b,c){var d=b.a[c];null==d&&(d=0);return d}function Vl(b){this.a=!1;this.b=new G;this.c=b;}Vl.prototype.destroy=function(){var b=this;if(this.a)return this.b;this.a=!0;return this.c().then(function(){b.b.resolve();},function(){b.b.resolve();})};function Wl(b,c){for(var d={width:Infinity,height:Infinity},e=r(b.periods),f=e.next();!f.done;f=e.next())f=f.value,f.variants=f.variants.filter(function(b){return se(b,c,d)});}function Xl(b){b=r(b.periods);for(var c=b.next();!c.done;c=b.next())c=c.value,c.variants=c.variants.filter(function(b){var c=!0;b.audio&&(c=c&&be(b.audio));b.video&&(c=c&&be(b.video));return c});}
  function Yl(b,c){for(var d=r(b.periods),e=d.next();!e.done;e=d.next())e=e.value,e.variants=e.variants.filter(function(b){return kd(c,b)});}function Zl(b){var c=new $l;b.periods.forEach(function(b,d){var e=am(b.variants);if(0==d){e=r(e.a);for(var f=e.next();!f.done;f=e.next())c.add(f.value);}else bm(c,e);});b=r(b.periods);for(var d=b.next();!d.done;d=b.next())d=d.value,d.variants=d.variants.filter(function(b){return cm(c,new dm(b))});}
  function em(b,c){var d=new $l;b.periods.forEach(function(b,f){0<f&&(b.variants=b.variants.filter(function(b){return cm(d,new dm(b))}));c(b);d=am(b.variants);});}function dm(b){var c=b.audio;b=b.video;this.b=c?c.mimeType:null;this.a=c?c.codecs.split(".")[0]:null;this.f=b?b.mimeType:null;this.c=b?b.codecs.split(".")[0]:null;}function $l(){this.a=[];}$l.prototype.add=function(b){cm(this,b)||this.a.push(b);};function bm(b,c){b.a=b.a.filter(function(b){return cm(c,b)});}
  function cm(b,c){return b.a.some(function(b){return c.b==b.b&&c.a==b.a&&c.f==b.f&&c.c==b.c})}function am(b){var c=new $l;b=r(b);for(var d=b.next();!d.done;d=b.next())c.add(new dm(d.value));return c}function Z(b){var c=this;if(b&&b.constructor!=X)throw new D(2,9,9008);this.b=this.a=null;b?(this.a=b.b,this.b=b.Bb()):(this.a=zk(),this.b=new K);this.f=!1;this.c=[];this.g=[];var d=!b;this.h=new Vl(function(){return t(function f(){var b;return y(f,function(f){switch(f.l){case 1:return b=function(){},u(f,Promise.all(c.g.map(function(c){return c.then(b,b)})),2);case 2:if(!d){f.A(3);break}return u(f,c.b.destroy(),3);case 3:c.a=null,c.b=null,v(f);}})})});}z("shaka.offline.Storage",Z);
  function fm(){if(mc())a:{var b=r(Cj.values());for(var c=b.next();!c.done;c=b.next())if(c=c.value,c=c()){c.destroy();b=!0;break a}b=!1;}else b=!1;return b}Z.support=fm;Z.prototype.destroy=function(){return this.h.destroy()};Z.prototype.destroy=Z.prototype.destroy;
  Z.prototype.configure=function(b,c){2==arguments.length&&"string"==typeof b&&(b=yk(b,c));var d=b,e=!1;null!=d.trackSelectionCallback&&(e=!0,d.offline=d.offline||{},d.offline.trackSelectionCallback=d.trackSelectionCallback,delete d.trackSelectionCallback);null!=d.progressCallback&&(e=!0,d.offline=d.offline||{},d.offline.progressCallback=d.progressCallback,delete d.progressCallback);null!=d.usePersistentLicense&&(e=!0,d.offline=d.offline||{},d.offline.usePersistentLicense=d.usePersistentLicense,delete d.usePersistentLicense);
  e&&Ke("Storage.configure with OfflineConfig","Please configure storage with a player configuration.");return Bk(this.a,b)};Z.prototype.configure=Z.prototype.configure;Z.prototype.getConfiguration=function(){var b=zk();Bk(b,this.a,zk());return b};Z.prototype.getConfiguration=Z.prototype.getConfiguration;Z.prototype.Bb=function(){return this.b};Z.prototype.getNetworkingEngine=Z.prototype.Bb;
  Z.prototype.store=function(b,c,d){var e=this;return gm(this,hm(this,b,c||{},function(){return t(function g(){var c,k;return y(g,function(g){switch(g.l){case 1:return d&&"string"!=typeof d?(Ke("Storing with a manifest parser factory","Please register a manifest parser and for the mime-type."),c=d,g["return"](new c)):u(g,U.create(b,e.b,e.a.manifest.retryParameters,d),2);case 2:return k=g.s,g["return"](k)}})})}))};Z.prototype.store=Z.prototype.store;Z.prototype.Re=function(){return this.f};
  Z.prototype.getStoreInProgress=Z.prototype.Re;
  function hm(b,c,d,e){return t(function g(){var h,k,l,m,n,q,x,w,A,C;return y(g,function(g){switch(g.l){case 1:im();if(b.f)return g["return"](Promise.reject(new D(2,9,9006)));b.f=!0;return u(g,jm(b,c,e),2);case 2:h=g.s;km(b);k=!h.presentationTimeline.U()&&!h.presentationTimeline.Ta();if(!k)throw new D(2,9,9005,c);l=null;m=new Bj;q=n=null;ya(g,3,4);return u(g,lm(b,h,function(b){q=q||b;}),6);case 6:l=g.s;km(b);if(q)throw q;mm(b,h,l);return u(g,m.init(),7);case 7:return km(b),u(g,Dj(m),8);case 8:return n=
  g.s,km(b),u(g,nm(b,n.$,l,h,c,d),9);case 9:x=g.s;km(b);if(q)throw q;return u(g,n.$.addManifests([x]),10);case 10:return w=g.s,km(b),A=new ak("manifest",n.path.ra,n.path.$,w[0]),g["return"](Rl(A,x));case 4:return Ea(g),b.f=!1,b.c=[],u(g,m.destroy(),11);case 11:if(!l){g.A(12);break}return u(g,l.destroy(),12);case 12:Fa(g,0);break;case 3:C=Da(g);if(!n){g.A(14);break}return u(g,n.$.removeSegments(b.c,function(){}),14);case 14:throw q||C;}})})}
  function mm(b,c,d){Wl(c,b.a.restrictions);Xl(c);Yl(c,d);Zl(c);em(c,function(c){for(var d=[],e=r(c.variants),h=e.next();!h.done;h=e.next())d.push(we(h.value));e=r(c.textStreams);for(h=e.next();!h.done;h=e.next())d.push(xe(h.value));d=b.a.offline.trackSelectionCallback(d);var k=new Set,l=new Set;d=r(d);for(e=d.next();!e.done;e=d.next())e=e.value,"variant"==e.type&&k.add(e.id),"text"==e.type&&l.add(e.id);c.variants=c.variants.filter(function(b){return k.has(b.id)});c.textStreams=c.textStreams.filter(function(b){return l.has(b.id)});});
  om(c);}function nm(b,c,d,e,f,g){return t(function k(){var l,m,n,q;return y(k,function(k){switch(k.l){case 1:return l=Pl(f,e,g),m=new qj(b.b,function(c,d){l.size=d;b.a.offline.progressCallback(l,c);}),za(k,2),q=n=pm(b,m,c,d,e,f,g),u(k,tj(m),4);case 4:return q.size=k.s,k["return"](n);case 2:return Ea(k),u(k,m.destroy(),5);case 5:Fa(k,0);}})})}Z.prototype.remove=function(b){return gm(this,qm(this,b))};Z.prototype.remove=Z.prototype.remove;
  function qm(b,c){return t(function e(){var f,g,h,k,l,m;return y(e,function(e){switch(e.l){case 1:im();f=bk(c);if(null==f||"manifest"!=f.a)return e["return"](Promise.reject(new D(2,9,9004,c)));g=f;h=new Bj;za(e,2);return u(e,h.init(),4);case 4:return u(e,Fj(h,g.ra(),g.$()),5);case 5:return k=e.s,u(e,k.getManifests([g.key()]),6);case 6:return l=e.s,m=l[0],u(e,Promise.all([rm(b,m,h),sm(b,k,g,m)]),2);case 2:return Ea(e),u(e,h.destroy(),8);case 8:Fa(e,0);}})})}
  function tm(b,c){for(var d=[],e=r(b.periods),f=e.next();!f.done;f=e.next()){f=r(f.value.streams);for(var g=f.next();!g.done;g=f.next())g=g.value,c&&"video"==g.contentType?d.push({contentType:ic(g.mimeType,g.codecs),robustness:b.drmInfo.videoRobustness}):c||"audio"!=g.contentType||d.push({contentType:ic(g.mimeType,g.codecs),robustness:b.drmInfo.audioRobustness});}return d}function rm(b,c,d){return t(function f(){return y(f,function(f){switch(f.l){case 1:return u(f,um(b.b,b.a.drm,d,c),0)}})})}
  function sm(b,c,d,e){function f(){k+=1;b.a.offline.progressCallback(l,k/h);}var g=vm(e),h=g.length+1,k=0,l=Rl(d,e);return Promise.all([c.removeSegments(g,f),c.removeManifests([d.key()],f)])}Z.prototype.Bf=function(){return gm(this,wm(this))};Z.prototype.removeEmeSessions=Z.prototype.Bf;
  function wm(b){return t(function d(){var e,f,g,h,k,l,m,n,q;return y(d,function(d){switch(d.l){case 1:return im(),e=b.b,f=b.a.drm,g=new Bj,h=!1,za(d,2),u(d,g.init(),4);case 4:k=[];Gj(g,function(b){return k.push(b)});l=Promise.resolve();m={};n=r(k);for(q=n.next();!q.done;m={mc:m.mc},q=n.next())m.mc=q.value,l=l.then(function(b){return function(){return t(function C(){var d,g;return y(C,function(k){switch(k.l){case 1:return u(k,b.mc.getAll(),2);case 2:return d=k.s,u(k,lk(f,e,d),3);case 3:return g=k.s,
  u(k,b.mc.remove(g),4);case 4:g.length!=d.length&&(h=!0),v(k);}})})}}(m));return u(d,l,2);case 2:return Ea(d),u(d,g.destroy(),6);case 6:Fa(d,3);break;case 3:return d["return"](!h)}})})}Z.prototype.list=function(){return gm(this,xm())};Z.prototype.list=Z.prototype.list;
  function xm(){return t(function c(){var d,e,f;return y(c,function(c){switch(c.l){case 1:return im(),d=[],e=new Bj,za(c,2),u(c,e.init(),4);case 4:return f=Promise.resolve(),Ej(e,function(c,e){f=f.then(function(){return t(function m(){var f;return y(m,function(g){switch(g.l){case 1:return u(g,e.getAllManifests(),2);case 2:f=g.s,f.forEach(function(e,f){var g=Rl(new ak("manifest",c.ra,c.$,f),e);d.push(g);}),v(g);}})})});}),u(c,f,2);case 2:return Ea(c),u(c,e.destroy(),6);case 6:Fa(c,3);break;case 3:return c["return"](d)}})})}
  function jm(b,c,d){return t(function f(){var g,h,k,l,m,n;return y(f,function(f){switch(f.l){case 1:return g=null,h=b.b,k={networkingEngine:h,filterAllPeriods:function(){},filterNewPeriod:function(){},onTimelineRegionAdded:function(){},onEvent:function(){},onError:function(b){g=b;}},u(f,d(),2);case 2:return l=f.s,l.configure(b.a.manifest),km(b),za(f,3),u(f,l.start(c,k),5);case 5:return m=f.s,km(b),n=ym(m),u(f,Promise.all(Array.from(n).map(function(b){return b.createSegmentIndex()})),6);case 6:km(b);
  if(g)throw g;return f["return"](m);case 3:return Ea(f),u(f,l.stop(),7);case 7:Fa(f,0);}})})}function lm(b,c,d){return t(function f(){var g,h,k;return y(f,function(f){switch(f.l){case 1:return g=new Gc({nb:b.b,onError:d,gc:function(){},onExpirationUpdated:function(){},onEvent:function(){}}),h=bi(c.periods),k=b.a,g.configure(k.drm),u(f,Lc(g,h,k.offline.usePersistentLicense),2);case 2:return u(f,Vc(g),3);case 3:return u(f,Wc(g),4);case 4:return f["return"](g)}})})}
  function pm(b,c,d,e,f,g,h){var k=new Sl,l=f.periods.map(function(e){return zm(b,c,d,k,f,e)}),m=e.a,n=bd(e);if(m&&b.a.offline.usePersistentLicense){if(!n.length)throw new D(2,9,9007,g);m.initData=[];}return {originalManifestUri:g,duration:f.presentationTimeline.Y(),size:0,expiration:e.bc(),periods:l,sessionIds:b.a.offline.usePersistentLicense?n:[],drmInfo:m,appMetadata:h}}
  function zm(b,c,d,e,f,g){f.periods.forEach(function(b){b.variants.forEach(function(b){var c=b.audio,d=b.video;c&&!d&&(e.a[c.id]=c.bandwidth||b.bandwidth);!c&&d&&(e.a[d.id]=d.bandwidth||b.bandwidth);if(c&&d){var f=c.bandwidth||393216,g=d.bandwidth||b.bandwidth-f;0>=g&&(g=b.bandwidth);e.a[c.id]=f;e.a[d.id]=g;}});b.textStreams.forEach(function(b){e.a[b.id]=52;});});var h=ym(f),k=new Map;h=r(h);for(var l=h.next();!l.done;l=h.next()){l=l.value;var m=Am(b,c,d,e,f,l);k.set(l.id,m);}g.variants.forEach(function(b){b.audio&&
  k.get(b.audio.id).variantIds.push(b.id);b.video&&k.get(b.video.id).variantIds.push(b.id);});return {startTime:g.startTime,streams:Array.from(k.values())}}
  function Am(b,c,d,e,f,g){var h={id:g.id,originalId:g.originalId,primary:g.primary,presentationTimeOffset:g.presentationTimeOffset||0,contentType:g.type,mimeType:g.mimeType,codecs:g.codecs,frameRate:g.frameRate,kind:g.kind,language:g.language,label:g.label,width:g.width||null,height:g.height||null,initSegmentKey:null,encrypted:g.encrypted,keyId:g.keyId,segments:[],variantIds:[]};f=f.presentationTimeline.Db();var k=g.id;Bm(g,f,function(f){var l=ng(f.c(),f.b,f.a,b.a.streaming.retryParameters);rj(c,k,
  l,Tl(e,g.id,f),function(c){return d.addSegments([{data:c}]).then(function(c){b.c.push(c[0]);h.segments.push({startTime:f.startTime,endTime:f.endTime,dataKey:c[0]});})});});if(f=g.initSegmentReference)f=ng(f.c(),f.b,f.a,b.a.streaming.retryParameters),rj(c,k,f,.5*Ul(e,g.id),function(c){return d.addSegments([{data:c}]).then(function(c){b.c.push(c[0]);h.initSegmentKey=c[0];})});return h}
  function Bm(b,c,d){c=b.findSegmentPosition(c);for(var e=null==c?null:b.getSegmentReference(c);e;)d(e),e=b.getSegmentReference(++c);}function km(b){if(b.h.a)throw new D(2,9,7001);}function im(){if(!fm())throw new D(2,9,9E3);}function gm(b,c){return t(function e(){return y(e,function(e){switch(e.l){case 1:return b.g.push(c),za(e,2),u(e,c,4);case 4:return e["return"](e.s);case 2:Ea(e),Kb(b.g,c),Fa(e,0);}})})}
  function vm(b){var c=[];b.periods.forEach(function(b){b.streams.forEach(function(b){null!=b.initSegmentKey&&c.push(b.initSegmentKey);b.segments.forEach(function(b){c.push(b.dataKey);});});});return c}Z.deleteAll=function(){return t(function c(){var d;return y(c,function(c){switch(c.l){case 1:return d=new Bj,za(c,2),u(c,d.erase(),2);case 2:return Ea(c),u(c,d.destroy(),5);case 5:Fa(c,0);}})})};
  function um(b,c,d,e){return t(function g(){var h,k,l;return y(g,function(g){switch(g.l){case 1:if(!e.drmInfo)return g["return"]();h=Hj(d);k=e.sessionIds.map(function(b){return {sessionId:b,keySystem:e.drmInfo.keySystem,licenseUri:e.drmInfo.licenseServerUri,serverCertificate:e.drmInfo.serverCertificate,audioCapabilities:tm(e,!1),videoCapabilities:tm(e,!0)}});return u(g,lk(c,b,k),2);case 2:return l=g.s,u(g,h.remove(l),3);case 3:return u(g,h.add(k.filter(function(b){return -1==l.indexOf(b.sessionId)})),
  0)}})})}function ym(b){var c=new Set;b=r(b.periods);for(var d=b.next();!d.done;d=b.next()){d=d.value;for(var e=r(d.textStreams),f=e.next();!f.done;f=e.next())c.add(f.value);d=r(d.variants);for(e=d.next();!e.done;e=d.next())e=e.value,e.audio&&c.add(e.audio),e.video&&c.add(e.video);}return c}function om(b){if(0==b.periods.length)throw new D(2,4,4014);b=r(b.periods);for(var c=b.next();!c.done;c=b.next())Cm(c.value);}
  function Cm(b){b.variants.map(function(b){return b.video});var c=new Set(b.variants.map(function(b){return b.audio}));b=b.textStreams;for(var d=r(c),e=d.next();!e.done;e=d.next()){e=r(c);for(var f=e.next();!f.done;f=e.next());}c=r(b);for(d=c.next();!d.done;d=c.next())for(d=r(b),e=d.next();!e.done;e=d.next());}Zk.offline=fm;z("shaka.polyfill.installAll",function(){for(var b=0;b<Dm.length;++b)Dm[b].oe();});var Dm=[];function Em(b,c){c=c||0;for(var d={priority:c,oe:b},e=0;e<Dm.length;e++)if(Dm[e].priority<c){Dm.splice(e,0,d);return}Dm.push(d);}z("shaka.polyfill.register",Em);function Fm(b){var c=b.type.replace(/^(webkit|moz|MS)/,"").toLowerCase();if("function"===typeof Event)var d=new Event(c,b);else d=document.createEvent("Event"),d.initEvent(c,b.bubbles,b.cancelable);b.target.dispatchEvent(d);}
  Em(function(){if(window.Document){var b=Element.prototype;b.requestFullscreen=b.requestFullscreen||b.mozRequestFullScreen||b.msRequestFullscreen||b.webkitRequestFullscreen;b=Document.prototype;b.exitFullscreen=b.exitFullscreen||b.mozCancelFullScreen||b.msExitFullscreen||b.webkitExitFullscreen;"fullscreenElement"in document||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}}),Object.defineProperty(document,
  "fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitSupportsFullscreen||document.webkitFullscreenEnabled}}));document.addEventListener("webkitfullscreenchange",Fm);document.addEventListener("webkitfullscreenerror",Fm);document.addEventListener("mozfullscreenchange",Fm);document.addEventListener("mozfullscreenerror",Fm);document.addEventListener("MSFullscreenChange",Fm);document.addEventListener("MSFullscreenError",Fm);}});Em(function(){pc("CrKey")&&delete window.indexedDB;});var Gm;function Hm(b,c,d){if("input"==b)switch(this.type){case "range":b="change";}Gm.call(this,b,c,d);}Em(function(){pc("Trident/")&&HTMLInputElement.prototype.addEventListener!=Hm&&(Gm=HTMLInputElement.prototype.addEventListener,HTMLInputElement.prototype.addEventListener=Hm);});Em(function(){navigator.languages||Object.defineProperty(navigator,"languages",{get:function(){return navigator.language?[navigator.language]:["en"]}});});Em(function(){});function Im(){var b=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];d=b.apply(this,d);d.abort=function(){};return d};}function Jm(){var b=SourceBuffer.prototype.remove;SourceBuffer.prototype.remove=function(c,d){return b.call(this,c,d-.001)};}
  function Km(){var b=MediaSource.prototype.endOfStream;MediaSource.prototype.endOfStream=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];for(var h=e=0;h<this.sourceBuffers.length;++h){var k=this.sourceBuffers[h];k=k.buffered.end(k.buffered.length-1);e=Math.max(e,k);}if(!isNaN(this.duration)&&e<this.duration)for(this.Bd=!0,e=0;e<this.sourceBuffers.length;++e)this.sourceBuffers[e].sd=!1;return b.apply(this,d)};var c=!1,d=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=
  function(b){for(var e=[],g=0;g<arguments.length;++g)e[g]=arguments[g];e=d.apply(this,e);e.mediaSource_=this;e.addEventListener("updateend",Lm,!1);c||(this.addEventListener("sourceclose",Mm,!1),c=!0);return e};}function Lm(b){var c=b.target,d=c.mediaSource_;if(d.Bd){b.preventDefault();b.stopPropagation();b.stopImmediatePropagation();c.sd=!0;for(b=0;b<d.sourceBuffers.length;++b)if(0==d.sourceBuffers[b].sd)return;d.Bd=!1;}}
  function Mm(b){b=b.target;for(var c=0;c<b.sourceBuffers.length;++c)b.sourceBuffers[c].removeEventListener("updateend",Lm,!1);b.removeEventListener("sourceclose",Mm,!1);}function Nm(){var b=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(c){return "mp2t"==c.split(/ *; */)[0].split("/")[1]?!1:b(c)};}function Om(){var b=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(c){return "opus"!=lc(c)[0]&&b(c)};}
  function Pm(){var b=MediaSource.isTypeSupported,c=/^dv(?:h[e1]|a[v1])\./;MediaSource.isTypeSupported=function(d){for(var e=d.split(/ *; */),f=e[0],g={},h=1;h<e.length;++h){var k=e[h].split("="),l=k[0];k=k[1].replace(/"(.*)"/,"$1");g[l]=k;}e=g.codecs;if(!e)return b(d);var m=!1,n=!1;d=e.split(",").filter(function(b){c.test(b)&&(n=!0);/^(hev|hvc)1\.2/.test(b)&&(m=!0);return !0});n&&(m=!1);g.codecs=d.join(",");m&&(g.eotf="smpte2084");for(var q in g)f+="; "+q+'="'+g[q]+'"';return cast.__platform__.canDisplayType(f)};}
  Em(function(){if(window.MediaSource)if(window.cast&&cast.__platform__&&cast.__platform__.canDisplayType)Pm();else if(navigator.vendor&&navigator.vendor.includes("Apple")){var b=navigator.appVersion;Nm();if(b.includes("Version/8"))window.MediaSource=null;else if(b.includes("Version/9"))Im();else if(b.includes("Version/10"))Im(),Km();else if(b.includes("Version/11")||b.includes("Version/12"))Im(),Jm();}else pc("Tizen")&&Om();});function Qm(b,c){try{var d=new Rm(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}
  function Rm(b,c){this.keySystem=b;if(b.startsWith("com.apple.fps"))for(var d=r(c),e=d.next();!e.done;e=d.next()){var f=e.value;if("required"==f.persistentState)e=null;else{e={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:f.initDataTypes,sessionTypes:["temporary"],label:f.label};var g=!1,h=!1;if(f.audioCapabilities)for(var k=r(f.audioCapabilities),l=k.next();!l.done;l=k.next())if(l=l.value,l.contentType){g=!0;var m=l.contentType.split(";")[0];
  WebKitMediaKeys.isTypeSupported(this.keySystem,m)&&(e.audioCapabilities.push(l),h=!0);}if(f.videoCapabilities)for(f=r(f.videoCapabilities),l=f.next();!l.done;l=f.next())k=l.value,k.contentType&&(g=!0,l=k.contentType.split(";")[0],WebKitMediaKeys.isTypeSupported(this.keySystem,l)&&(e.videoCapabilities.push(k),h=!0));g||(h=WebKitMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));e=h?e:null;}if(e){this.a=e;return}}d=Error("Unsupported keySystem");d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;
  throw d;}Rm.prototype.createMediaKeys=function(){var b=new Sm(this.keySystem);return Promise.resolve(b)};Rm.prototype.getConfiguration=function(){return this.a};function Tm(b){var c=this.mediaKeys;c&&c!=b&&Um(c,null);delete this.mediaKeys;return (this.mediaKeys=b)?Um(b,this):Promise.resolve()}function Sm(b){this.b=new WebKitMediaKeys(b);this.a=new ac;this.c=null;}
  Sm.prototype.createSession=function(b){b=b||"temporary";if("temporary"!=b)throw new TypeError("Session type "+b+" is unsupported on this platform.");return new Vm(this.b,b)};Sm.prototype.setServerCertificate=function(b){this.c=b?new Uint8Array(b):null;return Promise.resolve(!0)};
  function Um(b,c){bc(b.a);if(!c)return Promise.resolve();L(b.a,c,"webkitneedkey",Wm);try{return 1<=c.readyState?c.webkitSetMediaKeys(b.b):dc(b.a,c,"loadedmetadata",function(){c.webkitSetMediaKeys(b.b);}),Promise.resolve()}catch(d){return Promise.reject(d)}}function Vm(b){J.call(this);this.c=null;this.g=b;this.b=this.a=null;this.f=new ac;this.sessionId="";this.expiration=NaN;this.closed=new G;this.keyStatuses=new Xm;}Ta(Vm,J);p=Vm.prototype;
  p.generateRequest=function(b,c){this.a=new G;try{this.c=this.g.createSession("video/mp4",new Uint8Array(c)),L(this.f,this.c,"webkitkeymessage",this.Wf.bind(this)),L(this.f,this.c,"webkitkeyadded",this.Uf.bind(this)),L(this.f,this.c,"webkitkeyerror",this.Vf.bind(this)),Ym(this,"status-pending");}catch(d){this.a.reject(d);}return this.a};p.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};p.update=function(b){this.b=new G;try{this.c.update(new Uint8Array(b));}catch(c){this.b.reject(c);}return this.b};
  p.close=function(){try{this.c.close(),this.closed.resolve(),bc(this.f);}catch(b){this.closed.reject(b);}return this.closed};p.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};
  function Zm(b,c){function d(b){(new DataView(g.buffer)).setUint32(h,b.byteLength,!0);h+=4;g.set(b,h);h+=b.byteLength;}var e=new Uint8Array(b);if((new DataView(e.buffer)).getUint32(0,!0)+4!=e.byteLength)throw Error("Malformed init data!");var f=uc(e.slice(4),!0);f=(new cb(f)).oa;f=new Uint8Array(zc(f,!0));var g=new Uint8Array(e.byteLength+4+f.byteLength+4+c.byteLength),h=0;g.set(e,h);h+=e.byteLength;d(f);d(new Uint8Array(c));return g}
  function Wm(b){var c=this.mediaKeys.c,d=new Event("encrypted");d.initDataType="cenc";d.initData=Zm(b.initData,c);this.dispatchEvent(d);}p.Wf=function(b){this.a&&(this.a.resolve(),this.a=null);this.dispatchEvent(new I("message",{messageType:void 0==this.keyStatuses.a?"license-request":"license-renewal",message:b.message.buffer}));};p.Uf=function(){this.b&&(Ym(this,"usable"),this.b.resolve(),this.b=null);};
  p.Vf=function(){var b=Error("EME PatchedMediaKeysApple key error");b.errorCode=this.c.error;if(null!=this.a)this.a.reject(b),this.a=null;else if(null!=this.b)this.b.reject(b),this.b=null;else switch(this.c.error.code){case WebKitMediaKeyError.MEDIA_KEYERR_OUTPUT:case WebKitMediaKeyError.MEDIA_KEYERR_HARDWARECHANGE:Ym(this,"output-not-allowed");break;default:Ym(this,"internal-error");}};function Ym(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new I("keystatuseschange"));}
  function Xm(){this.size=0;this.a=void 0;}var $m;p=Xm.prototype;p.forEach=function(b){this.a&&b(this.a,$m);};p.get=function(b){if(this.has(b))return this.a};p.has=function(b){var c=$m;return this.a&&Ec(new Uint8Array(b),new Uint8Array(c))?!0:!1};p.entries=function(){};p.keys=function(){};p.values=function(){};
  Em(function(){window.HTMLVideoElement&&window.WebKitMediaKeys&&($m=(new Uint8Array([0])).buffer,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=Tm,window.MediaKeys=Sm,window.MediaKeySystemAccess=Rm,navigator.requestMediaKeySystemAccess=Qm);});function an(b){this.f=[];this.b=[];this.a=[];(new S).ca("pssh",this.c.bind(this)).parse(b.buffer);}an.prototype.c=function(b){if(!(1<b.version)){var c=Dc(b.reader.Va(16)),d=[];if(0<b.version)for(var e=b.reader.D(),f=0;f<e;++f){var g=Dc(b.reader.Va(16));d.push(g);}e=b.reader.D();b.reader.J(e);this.b.push.apply(this.b,d);this.f.push(c);this.a.push({start:b.start,end:b.start+b.size-1});}};function bn(b,c){try{var d=new cn(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}
  function cn(b,c){this.keySystem=b;for(var d=!1,e=0;e<c.length;++e){var f=c[e],g={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:f.initDataTypes,sessionTypes:["temporary"],label:f.label},h=!1;if(f.audioCapabilities)for(var k=0;k<f.audioCapabilities.length;++k){var l=f.audioCapabilities[k];if(l.contentType){h=!0;var m=l.contentType.split(";")[0];MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.audioCapabilities.push(l),d=!0);}}if(f.videoCapabilities)for(k=
  0;k<f.videoCapabilities.length;++k)l=f.videoCapabilities[k],l.contentType&&(h=!0,m=l.contentType.split(";")[0],MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.videoCapabilities.push(l),d=!0));h||(d=MSMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));"required"==f.persistentState&&(d=!1);if(d){this.a=g;return}}d=Error("Unsupported keySystem");d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}cn.prototype.createMediaKeys=function(){var b=new dn(this.keySystem);return Promise.resolve(b)};
  cn.prototype.getConfiguration=function(){return this.a};function en(b){var c=this.mediaKeys;c&&c!=b&&fn(c,null);delete this.mediaKeys;return (this.mediaKeys=b)?fn(b,this):Promise.resolve()}function dn(b){this.a=new MSMediaKeys(b);this.b=new ac;}dn.prototype.createSession=function(b){b=b||"temporary";if("temporary"!=b)throw new TypeError("Session type "+b+" is unsupported on this platform.");return new gn(this.a,b)};dn.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
  function fn(b,c){function d(){c.msSetMediaKeys(e.a);c.removeEventListener("loadedmetadata",d);}bc(b.b);if(!c)return Promise.resolve();L(b.b,c,"msneedkey",hn);var e=b;try{return 1<=c.readyState?c.msSetMediaKeys(b.a):c.addEventListener("loadedmetadata",d),Promise.resolve()}catch(f){return Promise.reject(f)}}function gn(b){J.call(this);this.c=null;this.g=b;this.b=this.a=null;this.f=new ac;this.sessionId="";this.expiration=NaN;this.closed=new G;this.keyStatuses=new jn;}Ta(gn,J);p=gn.prototype;
  p.generateRequest=function(b,c){this.a=new G;try{this.c=this.g.createSession("video/mp4",new Uint8Array(c),null),L(this.f,this.c,"mskeymessage",this.jf.bind(this)),L(this.f,this.c,"mskeyadded",this.gf.bind(this)),L(this.f,this.c,"mskeyerror",this.hf.bind(this)),kn(this,"status-pending");}catch(d){this.a.reject(d);}return this.a};p.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};p.update=function(b){this.b=new G;try{this.c.update(new Uint8Array(b));}catch(c){this.b.reject(c);}return this.b};
  p.close=function(){try{this.c.close(),this.closed.resolve(),bc(this.f);}catch(b){this.closed.reject(b);}return this.closed};p.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};function hn(b){if(b.initData){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="cenc";c.initData=ln(b.initData);this.dispatchEvent(c);}}
  function ln(b){if(!b)return b;var c=new an(b);if(1>=c.a.length)return b;for(var d=[],e=0;e<c.a.length;e++)d.push(b.subarray(c.a[e].start,c.a[e].end+1));b=[];c={};e=r(d);for(d=e.next();!d.done;c={dc:c.dc},d=e.next())c.dc=d.value,b.some(function(b){return function(c){return Ec(c,b.dc)}}(c))||b.push(c.dc);c=0;e=r(b);for(d=e.next();!d.done;d=e.next())c+=d.value.length;c=new Uint8Array(c);e=0;b=r(b);for(d=b.next();!d.done;d=b.next())d=d.value,c.set(d,e),e+=d.length;return c}
  p.jf=function(b){this.a&&(this.a.resolve(),this.a=null);this.dispatchEvent(new I("message",{messageType:void 0==this.keyStatuses.a?"license-request":"license-renewal",message:b.message.buffer}));};p.gf=function(){this.a?(kn(this,"usable"),this.a.resolve(),this.a=null):this.b&&(kn(this,"usable"),this.b.resolve(),this.b=null);};
  p.hf=function(){var b=Error("EME PatchedMediaKeysMs key error");b.errorCode=this.c.error;if(null!=this.a)this.a.reject(b),this.a=null;else if(null!=this.b)this.b.reject(b),this.b=null;else switch(this.c.error.code){case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:kn(this,"output-not-allowed");break;default:kn(this,"internal-error");}};function kn(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new I("keystatuseschange"));}
  function jn(){this.size=0;this.a=void 0;}var mn;p=jn.prototype;p.forEach=function(b){this.a&&b(this.a,mn);};p.get=function(b){if(this.has(b))return this.a};p.has=function(b){var c=mn;return this.a&&Ec(new Uint8Array(b),new Uint8Array(c))?!0:!1};p.entries=function(){};p.keys=function(){};p.values=function(){};
  Em(function(){!window.HTMLVideoElement||!window.MSMediaKeys||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(mn=(new Uint8Array([0])).buffer,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=en,window.MediaKeys=dn,window.MediaKeySystemAccess=cn,navigator.requestMediaKeySystemAccess=bn);});function nn(){return Promise.reject(Error("The key system specified is not supported."))}function on(b){return null==b?Promise.resolve():Promise.reject(Error("MediaKeys not supported."))}function pn(){throw new TypeError("Illegal constructor.");}pn.prototype.createSession=function(){};pn.prototype.setServerCertificate=function(){};function qn(){throw new TypeError("Illegal constructor.");}qn.prototype.getConfiguration=function(){};qn.prototype.createMediaKeys=function(){};
  Em(function(){!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(navigator.requestMediaKeySystemAccess=nn,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=on,window.MediaKeys=pn,window.MediaKeySystemAccess=qn);},-10);var rn="";function sn(b){var c=rn;return c?c+b.charAt(0).toUpperCase()+b.slice(1):b}function tn(b,c){try{var d=new un(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}function vn(b){var c=this.mediaKeys;c&&c!=b&&wn(c,null);delete this.mediaKeys;(this.mediaKeys=b)&&wn(b,this);return Promise.resolve()}
  function un(b,c){this.a=this.keySystem=b;var d=!1;"org.w3.clearkey"==b&&(this.a="webkit-org.w3.clearkey",d=!1);var e=!1;var f=document.getElementsByTagName("video");f=f.length?f[0]:document.createElement("video");for(var g=0;g<c.length;++g){var h=c[g],k={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:h.initDataTypes,sessionTypes:["temporary"],label:h.label},l=!1;if(h.audioCapabilities)for(var m=0;m<h.audioCapabilities.length;++m){var n=
  h.audioCapabilities[m];if(n.contentType){l=!0;var q=n.contentType.split(";")[0];f.canPlayType(q,this.a)&&(k.audioCapabilities.push(n),e=!0);}}if(h.videoCapabilities)for(m=0;m<h.videoCapabilities.length;++m)n=h.videoCapabilities[m],n.contentType&&(l=!0,f.canPlayType(n.contentType,this.a)&&(k.videoCapabilities.push(n),e=!0));l||(e=f.canPlayType("video/mp4",this.a)||f.canPlayType("video/webm",this.a));"required"==h.persistentState&&(d?(k.persistentState="required",k.sessionTypes=["persistent-license"]):
  e=!1);if(e){this.b=k;return}}d="Unsupported keySystem";if("org.w3.clearkey"==b||"com.widevine.alpha"==b)d="None of the requested configurations were supported.";d=Error(d);d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}un.prototype.createMediaKeys=function(){var b=new xn(this.a);return Promise.resolve(b)};un.prototype.getConfiguration=function(){return this.b};function xn(b){this.g=b;this.b=null;this.a=new ac;this.c=[];this.f={};}
  function wn(b,c){b.b=c;bc(b.a);var d=rn;c&&(L(b.a,c,d+"needkey",b.pf.bind(b)),L(b.a,c,d+"keymessage",b.Zf.bind(b)),L(b.a,c,d+"keyadded",b.Xf.bind(b)),L(b.a,c,d+"keyerror",b.Yf.bind(b)));}p=xn.prototype;p.createSession=function(b){b=b||"temporary";if("temporary"!=b&&"persistent-license"!=b)throw new TypeError("Session type "+b+" is unsupported on this platform.");var c=this.b||document.createElement("video");c.src||(c.src="about:blank");b=new yn(c,this.g,b);this.c.push(b);return b};
  p.setServerCertificate=function(){return Promise.resolve(!1)};p.pf=function(b){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="webm";c.initData=b.initData;this.b.dispatchEvent(c);};p.Zf=function(b){var c=zn(this,b.sessionId);c&&(b=new I("message",{messageType:void 0==c.keyStatuses.a?"licenserequest":"licenserenewal",message:b.message}),c.b&&(c.b.resolve(),c.b=null),c.dispatchEvent(b));};
  p.Xf=function(b){if(b=zn(this,b.sessionId))An(b,"usable"),b.a&&b.a.resolve(),b.a=null;};p.Yf=function(b){var c=zn(this,b.sessionId);c&&c.handleError(b);};function zn(b,c){var d=b.f[c];return d?d:(d=b.c.shift())?(d.sessionId=c,b.f[c]=d):null}function yn(b,c,d){J.call(this);this.f=b;this.h=!1;this.a=this.b=null;this.c=c;this.g=d;this.sessionId="";this.expiration=NaN;this.closed=new G;this.keyStatuses=new Bn;}Ta(yn,J);p=yn.prototype;
  p.handleError=function(b){var c=Error("EME v0.1b key error");c.errorCode=b.errorCode;c.errorCode.systemCode=b.systemCode;!b.sessionId&&this.b?(c.method="generateRequest",45==b.systemCode&&(c.message="Unsupported session type."),this.b.reject(c),this.b=null):b.sessionId&&this.a?(c.method="update",this.a.reject(c),this.a=null):(c=b.systemCode,b.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?An(this,"output-restricted"):1==c?An(this,"expired"):An(this,"internal-error"));};
  function Cn(b,c,d){if(b.h)return Promise.reject(Error("The session is already initialized."));b.h=!0;try{if("persistent-license"==b.g)if(d)var e=new Uint8Array(yc("LOAD_SESSION|"+d));else{var f=yc("PERSISTENT|"),g=new Uint8Array(f.byteLength+c.byteLength);g.set(new Uint8Array(f),0);g.set(new Uint8Array(c),f.byteLength);e=g;}else e=new Uint8Array(c);}catch(k){return Promise.reject(k)}b.b=new G;var h=sn("generateKeyRequest");try{b.f[h](b.c,e);}catch(k){if("InvalidStateError"!=k.name)return b.b=null,Promise.reject(k);
  (new B(function(){try{b.f[h](b.c,e);}catch(l){b.b.reject(l),b.b=null;}})).O(.01);}return b.b}
  p.hd=function(b,c){if(this.a)this.a.then(this.hd.bind(this,b,c))["catch"](this.hd.bind(this,b,c));else{this.a=b;if("webkit-org.w3.clearkey"==this.c){var d=sc(c);var e=JSON.parse(d);"oct"!=e.keys[0].kty&&(this.a.reject(Error("Response is not a valid JSON Web Key Set.")),this.a=null);d=Bc(e.keys[0].k);e=Bc(e.keys[0].kid);}else d=new Uint8Array(c),e=null;var f=sn("addKey");try{this.f[f](this.c,d,e,this.sessionId);}catch(g){this.a.reject(g),this.a=null;}}};
  function An(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new I("keystatuseschange"));}p.generateRequest=function(b,c){return Cn(this,c,null)};p.load=function(b){return "persistent-license"==this.g?Cn(this,null,b):Promise.reject(Error("Not a persistent session."))};p.update=function(b){var c=new G;this.hd(c,b);return c};
  p.close=function(){if("persistent-license"!=this.g){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;var b=sn("cancelKeyRequest");try{this.f[b](this.c,this.sessionId);}catch(c){}}this.closed.resolve();return this.closed};p.remove=function(){return "persistent-license"!=this.g?Promise.reject(Error("Not a persistent session.")):this.close()};function Bn(){this.size=0;this.a=void 0;}var Dn;p=Bn.prototype;p.forEach=function(b){this.a&&b(this.a,Dn);};p.get=function(b){if(this.has(b))return this.a};
  p.has=function(b){var c=Dn;return this.a&&Ec(new Uint8Array(b),new Uint8Array(c))?!0:!1};p.entries=function(){};p.keys=function(){};p.values=function(){};
  Em(function(){if(!(!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration)){if(HTMLMediaElement.prototype.webkitGenerateKeyRequest)rn="webkit";else if(!HTMLMediaElement.prototype.generateKeyRequest)return;Dn=(new Uint8Array([0])).buffer;navigator.requestMediaKeySystemAccess=tn;delete HTMLMediaElement.prototype.mediaKeys;HTMLMediaElement.prototype.mediaKeys=null;HTMLMediaElement.prototype.setMediaKeys=vn;window.MediaKeys=xn;window.MediaKeySystemAccess=
  un;}});function En(b){b=b.target;if("picture-in-picture"==b.webkitPresentationMode){document.pictureInPictureElement=b;var c=new Event("enterpictureinpicture");b.dispatchEvent(c);}else document.pictureInPictureElement==b&&(document.pictureInPictureElement=null),c=new Event("leavepictureinpicture"),b.dispatchEvent(c);}
  function Fn(){return this.webkitSupportsPresentationMode("picture-in-picture")?(this.webkitSetPresentationMode("picture-in-picture"),document.pictureInPictureElement=this,Promise.resolve()):Promise.reject(Error("PiP not allowed by video element"))}function Gn(){var b=document.pictureInPictureElement;return b?(b.webkitSetPresentationMode("inline"),document.pictureInPictureElement=null,Promise.resolve()):Promise.reject(Error("No picture in picture element found"))}
  Em(function(){if(window.HTMLVideoElement){var b=HTMLVideoElement.prototype;b.requestPictureInPicture&&document.exitPictureInPicture||!b.webkitSupportsPresentationMode||(document.pictureInPictureEnabled=!0,document.pictureInPictureElement=null,b.requestPictureInPicture=Fn,document.exitPictureInPicture=Gn,document.addEventListener("webkitpresentationmodechanged",En,!0));}});Em(function(){if(window.HTMLMediaElement){var b=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){var c=b.apply(this);c&&c["catch"](function(){});return c};}});function Hn(){return {droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}}Em(function(){if(window.HTMLVideoElement){var b=HTMLVideoElement.prototype;!b.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in b&&(b.getVideoPlaybackQuality=Hn);}});function In(b,c,d){return new window.TextTrackCue(b,c,d)}function Jn(b,c,d){return new window.TextTrackCue(b+"-"+c+"-"+d,b,c,d)}Em(function(){if(!window.VTTCue&&window.TextTrackCue){var b=TextTrackCue.length;if(3==b)window.VTTCue=In;else if(6==b)window.VTTCue=Jn;else{try{var c=!!In(1,2,"");}catch(d){c=!1;}c&&(window.VTTCue=In);}}});function Kn(){}Kn.prototype.parseInit=function(){};
  Kn.prototype.parseMedia=function(b,c){var d=sc(b),e=[],f=new DOMParser,g=null;try{g=f.parseFromString(d,"text/xml");}catch(Y){throw new D(2,2,2005);}if(g){if(g=g.getElementsByTagName("tt")[0]){var h=P.getAttributeNS(g,"http://www.w3.org/ns/ttml#parameter","frameRate");var k=P.getAttributeNS(g,"http://www.w3.org/ns/ttml#parameter","subFrameRate");var l=P.getAttributeNS(g,"http://www.w3.org/ns/ttml#parameter","frameRateMultiplier");var m=P.getAttributeNS(g,"http://www.w3.org/ns/ttml#parameter","tickRate");
  d=g.getAttribute("xml:space")||"default";f=g.getAttribute("tts:extent");}else throw new D(2,2,2005);if("default"!=d&&"preserve"!=d)throw new D(2,2,2005);d="default"==d;h=new Ln(h,k,l,m);k=Mn(g.getElementsByTagName("metadata")[0]);l=Mn(g.getElementsByTagName("styling")[0]);m=Mn(g.getElementsByTagName("layout")[0]);for(var n=[],q=0;q<m.length;q++){var x=m[q],w=l,A=f;var C=new Fd;var E=x.getAttribute("xml:id");if(E){C.id=E;E=null;A&&(E=Nn.exec(A)||On.exec(A));A=E?Number(E[1]):null;E=E?Number(E[2]):null;
  var F,V;if(F=Pn(x,w,"extent"))F=(V=Nn.exec(F))||On.exec(F),null!=F&&(C.width=null!=A?100*Number(F[1])/A:Number(F[1]),C.height=null!=E?100*Number(F[2])/E:Number(F[2]),C.widthUnits=V||null!=A?Sd:0,C.heightUnits=V||null!=E?Sd:0);if(x=Pn(x,w,"origin"))F=(V=Nn.exec(x))||On.exec(x),null!=F&&(C.viewportAnchorX=null!=E?100*Number(F[1])/E:Number(F[1]),C.viewportAnchorY=null!=A?100*Number(F[2])/A:Number(F[2]),C.viewportAnchorUnits=V||null!=A?Sd:0);}else C=null;C&&n.push(C);}f=Mn(g.getElementsByTagName("body")[0]);
  for(g=0;g<f.length;g++)(q=Qn(f[g],c.periodStart,h,k,l,m,n,d))&&e.push(q);}return e};
  var Nn=/^(\d{1,2}|100)% (\d{1,2}|100)%$/,Rn=/^(\d+px|\d+em)$/,On=/^(\d+)px (\d+)px$/,Sn=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Tn=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,Un=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,Vn=/^(\d*(?:\.\d*)?)f$/,Wn=/^(\d*(?:\.\d*)?)t$/,Xn=/^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,Yn={left:Kd,center:"center",right:"end",start:Kd,end:"end"},Zn={left:"line-left",center:"center",right:"line-right"};
  function Mn(b){var c=[];if(!b)return c;for(var d=b.childNodes,e=0;e<d.length;e++){var f="span"==d[e].nodeName&&"p"==b.nodeName;d[e].nodeType!=Node.ELEMENT_NODE||"br"==d[e].nodeName||f||(f=Mn(d[e]),c=c.concat(f));}c.length||c.push(b);return c}function $n(b,c){for(var d=b.childNodes,e=0;e<d.length;e++)if("br"==d[e].nodeName&&0<e)d[e-1].textContent+="\n";else if(0<d[e].childNodes.length)$n(d[e],c);else if(c){var f=d[e].textContent.trim();f=f.replace(/\s+/g," ");d[e].textContent=f;}}
  function Qn(b,c,d,e,f,g,h,k){if(!b.hasAttribute("begin")&&!b.hasAttribute("end")&&/^\s*$/.test(b.textContent))return null;$n(b,k);k=ao(b.getAttribute("begin"),d);var l=ao(b.getAttribute("end"),d);d=ao(b.getAttribute("dur"),d);var m=b.textContent;null==l&&null!=d&&(l=k+d);if(null==k||null==l)throw new D(2,2,2001);c=new Dd(k+c,l+c,m);if((g=bo(b,"region",g,""))&&g.getAttribute("xml:id")){var n=g.getAttribute("xml:id");h=h.filter(function(b){return b.id==n});c.region=h[0];}e=bo(b,"smpte:backgroundImage",
  e,"#");co(c,b,g,e,f);return c}
  function co(b,c,d,e,f){"rtl"==eo(c,d,f,"direction")&&(b.direction="rtl");var g=eo(c,d,f,"writingMode");"tb"==g||"tblr"==g?b.writingMode="vertical-lr":"tbrl"==g?b.writingMode="vertical-rl":"rltb"==g||"rl"==g?b.direction="rtl":g&&(b.direction=Ed);if(g=eo(c,d,f,"textAlign"))b.positionAlign=Zn[g],b.lineAlign=Yn[g],b.textAlign=Od[g.toUpperCase()];if(g=eo(c,d,f,"displayAlign"))b.displayAlign=Pd[g.toUpperCase()];if(g=eo(c,d,f,"color"))b.color=g;if(g=eo(c,d,f,"backgroundColor"))b.backgroundColor=g;if(g=eo(c,
  d,f,"fontFamily"))b.fontFamily=g;(g=eo(c,d,f,"fontWeight"))&&"bold"==g&&(b.fontWeight=700);(g=eo(c,d,f,"wrapOption"))&&"noWrap"==g&&(b.wrapLine=!1);(g=eo(c,d,f,"lineHeight"))&&g.match(Rn)&&(b.lineHeight=g);(g=eo(c,d,f,"fontSize"))&&g.match(Rn)&&(b.fontSize=g);if(g=eo(c,d,f,"fontStyle"))b.fontStyle=Rd[g.toUpperCase()];if(e){g=e.getAttribute("imagetype");var h=e.getAttribute("encoding");e=e.textContent;"PNG"==g&&"Base64"==h&&e&&(b.backgroundImage="data:image/png;base64,"+e);}(d=Pn(d,f,"textDecoration"))&&
  fo(b,d);(c=go(c,f,"textDecoration"))&&fo(b,c);}
  function fo(b,c){for(var d=c.split(" "),e=0;e<d.length;e++)switch(d[e]){case "underline":b.textDecoration.includes("underline")||b.textDecoration.push("underline");break;case "noUnderline":b.textDecoration.includes("underline")&&Kb(b.textDecoration,"underline");break;case "lineThrough":b.textDecoration.includes("lineThrough")||b.textDecoration.push("lineThrough");break;case "noLineThrough":b.textDecoration.includes("lineThrough")&&Kb(b.textDecoration,"lineThrough");break;case "overline":b.textDecoration.includes("overline")||
  b.textDecoration.push("overline");break;case "noOverline":b.textDecoration.includes("overline")&&Kb(b.textDecoration,"overline");}}function eo(b,c,d,e){return (b=go(b,d,e))?b:Pn(c,d,e)}function Pn(b,c,d){for(var e=Mn(b),f=0;f<e.length;f++){var g=P.getAttributeNS(e[f],"http://www.w3.org/ns/ttml#styling",d);if(g)return g}return (b=bo(b,"style",c,""))?P.getAttributeNS(b,"http://www.w3.org/ns/ttml#styling",d):null}
  function go(b,c,d){return (b=bo(b,"style",c,""))?P.getAttributeNS(b,"http://www.w3.org/ns/ttml#styling",d):null}function bo(b,c,d,e){if(!b||1>d.length)return null;var f=null,g=b;for(b=null;g&&!(b=g.getAttribute(c))&&(g=g.parentNode,g instanceof Element););if(c=b)for(b=0;b<d.length;b++)if(e+d[b].getAttribute("xml:id")==c){f=d[b];break}return f}
  function ao(b,c){var d=null;if(Sn.test(b)){d=Sn.exec(b);var e=Number(d[1]),f=Number(d[2]),g=Number(d[3]),h=Number(d[4]);h+=(Number(d[5])||0)/c.b;g+=h/c.frameRate;d=g+60*f+3600*e;}else Tn.test(b)?d=ho(Tn,b):Un.test(b)?d=ho(Un,b):Vn.test(b)?(d=Vn.exec(b),d=Number(d[1])/c.frameRate):Wn.test(b)?(d=Wn.exec(b),d=Number(d[1])/c.a):Xn.test(b)&&(d=ho(Xn,b));return d}
  function ho(b,c){var d=b.exec(c);return null==d||""==d[0]?null:(Number(d[4])||0)/1E3+(Number(d[3])||0)+60*(Number(d[2])||0)+3600*(Number(d[1])||0)}function Ln(b,c,d,e){this.frameRate=Number(b)||30;this.b=Number(c)||1;this.a=Number(e);0==this.a&&(this.a=b?this.frameRate*this.b:1);d&&(b=/^(\d+) (\d+)$/g.exec(d))&&(this.frameRate*=Number(b[1])/Number(b[2]));}Vd["application/ttml+xml"]=Kn;function io(){this.a=new Kn;}io.prototype.parseInit=function(b){var c=!1;(new S).G("moov",Lf).G("trak",Lf).G("mdia",Lf).G("minf",Lf).G("stbl",Lf).ca("stsd",Mf).G("stpp",function(b){c=!0;b.parser.stop();}).parse(b);if(!c)throw new D(2,2,2007);};io.prototype.parseMedia=function(b,c){var d=!1,e=[];(new S).G("mdat",Nf(function(b){d=!0;e=e.concat(this.a.parseMedia(b,c));}.bind(this))).parse(b);if(!d)throw new D(2,2,2007);return e};Vd['application/mp4; codecs="stpp"']=io;
  Vd['application/mp4; codecs="stpp.TTML.im1t"']=io;function jo(){}jo.prototype.parseInit=function(){};
  jo.prototype.parseMedia=function(b,c){var d=sc(b);d=d.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n");d=d.split(/\n{2,}/m);if(!/^WEBVTT($|[ \t\n])/m.test(d[0]))throw new D(2,2,2E3);var e=c.segmentStart;if(null==e&&(e=0,d[0].includes("X-TIMESTAMP-MAP"))){var f=d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),g=d[0].match(/MPEGTS:(\d+)/m);if(f&&g){e=ko(new Jg(f[1]));if(null==e)throw new D(2,2,2E3);e=c.periodStart+(Number(g[1])/9E4-e);}}g=[];var h=d[0].split("\n");for(f=1;f<h.length;f++)if(/^Region:/.test(h[f])){var k=
  new Jg(h[f]),l=new Fd;Mg(k);Kg(k);for(var m=Mg(k);m;){var n=l,q=m;(m=/^id=(.*)$/.exec(q))?n.id=m[1]:(m=/^width=(\d{1,2}|100)%$/.exec(q))?n.width=Number(m[1]):(m=/^lines=(\d+)$/.exec(q))?(n.height=Number(m[1]),n.heightUnits=2):(m=/^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(q))?(n.regionAnchorX=Number(m[1]),n.regionAnchorY=Number(m[2])):(m=/^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(q))?(n.viewportAnchorX=Number(m[1]),n.viewportAnchorY=Number(m[2])):/^scroll=up$/.exec(q)&&(n.scroll=
  "up");Kg(k);m=Mg(k);}g.push(l);}f=[];for(k=1;k<d.length;k++){h=d[k].split("\n");m=h;q=e;h=g;if(1==m.length&&!m[0]||/^NOTE($|[ \t])/.test(m[0])||"STYLE"==m[0])h=null;else{l=null;m[0].includes("--\x3e")||(l=m[0],m.splice(0,1));n=new Jg(m[0]);var x=ko(n),w=Lg(n,/[ \t]+--\x3e[ \t]+/g),A=ko(n);if(null==x||null==w||null==A)throw new D(2,2,2001);m=new Dd(x+q,A+q,m.slice(1).join("\n").trim());Kg(n);for(q=Mg(n);q;)lo(m,q,h),Kg(n),q=Mg(n);null!=l&&(m.id=l);h=m;}h&&f.push(h);}return f};
  function lo(b,c,d){var e;if(e=/^align:(start|middle|center|end|left|right)$/.exec(c))c=e[1],"middle"==c?b.textAlign=Hd:b.textAlign=Od[c.toUpperCase()];else if(e=/^vertical:(lr|rl)$/.exec(c))b.writingMode="lr"==e[1]?"vertical-lr":"vertical-rl";else if(e=/^size:([\d.]+)%$/.exec(c))b.size=Number(e[1]);else if(e=/^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(c))b.position=Number(e[1]),e[2]&&(c=e[2],b.positionAlign="line-left"==c||"start"==c?"line-left":"line-right"==c||"end"==
  c?"line-right":"center");else if(e=/^region:(.*)$/.exec(c)){if(c=mo(d,e[1]))b.region=c;}else if(d=/^line:([\d.]+)%(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=1,b.line=Number(d[1]),d[2]&&(b.lineAlign=Qd[d[2].toUpperCase()]);else if(d=/^line:(-?\d+)(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=Jd,b.line=Number(d[1]),d[2]&&(b.lineAlign=Qd[d[2].toUpperCase()]);}function mo(b,c){var d=b.filter(function(b){return b.id==c});return d.length?d[0]:null}
  function ko(b){b=Lg(b,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);if(null==b)return null;var c=Number(b[2]),d=Number(b[3]);return 59<c||59<d?null:Number(b[4])/1E3+d+60*c+3600*(Number(b[1])||0)}Vd["text/vtt"]=jo;Vd['text/vtt; codecs="vtt"']=jo;function no(){this.a=null;}no.prototype.parseInit=function(b){var c=!1;(new S).G("moov",Lf).G("trak",Lf).G("mdia",Lf).ca("mdhd",function(b){0==b.version?(b.reader.J(4),b.reader.J(4),this.a=b.reader.D(),b.reader.J(4)):(b.reader.J(8),b.reader.J(8),this.a=b.reader.D(),b.reader.J(8));b.reader.J(4);}.bind(this)).G("minf",Lf).G("stbl",Lf).ca("stsd",Mf).G("wvtt",function(){c=!0;}).parse(b);if(!this.a)throw new D(2,2,2008);if(!c)throw new D(2,2,2008);};
  no.prototype.parseMedia=function(b,c){var d=this;if(!this.a)throw new D(2,2,2008);var e=0,f=[],g,h=[],k=!1,l=!1,m=!1,n=null;(new S).G("moof",Lf).G("traf",Lf).ca("tfdt",function(b){k=!0;e=0==b.version?b.reader.D():b.reader.ub();}).ca("tfhd",function(b){var c=b.flags;b=b.reader;b.J(4);c&1&&b.J(8);c&2&&b.J(4);n=c&8?b.D():null;}).ca("trun",function(b){l=!0;var c=b.version,d=b.flags;b=b.reader;var e=b.D();d&1&&b.J(4);d&4&&b.J(4);for(var g=[],h=0;h<e;h++){var k={duration:null,sampleSize:null,kd:null};d&256&&
  (k.duration=b.D());d&512&&(k.sampleSize=b.D());d&1024&&b.J(4);d&2048&&(k.kd=0==c?b.D():b.Ud());g.push(k);}f=g;}).G("mdat",Nf(function(b){m=!0;g=b;})).parse(b);if(!m&&!k&&!l)throw new D(2,2,2008);var q=e,x=new DataView(g.buffer,g.byteOffset,g.byteLength),w=new R(x,0);f.forEach(function(b){var f=b.duration||n,g=b.kd?e+b.kd:q;q=g+(f||0);var k=0;do{var l=w.D();k+=l;var m=w.D(),x=null;"vttc"==Of(m)?8<l&&(x=w.Va(l-8)):w.J(l-8);f&&x&&h.push(oo(x,c.periodStart+g/d.a,c.periodStart+q/d.a));}while(b.sampleSize&&
  k<b.sampleSize)});return h.filter(td.Da)};function oo(b,c,d){var e,f,g;(new S).G("payl",Nf(function(b){e=sc(b);})).G("iden",Nf(function(b){f=sc(b);})).G("sttg",Nf(function(b){g=sc(b);})).parse(b);return e?po(e,f,g,c,d):null}function po(b,c,d,e,f){b=new Dd(e,f,b);c&&(b.id=c);if(d)for(c=new Jg(d),d=Mg(c);d;)lo(b,d,[]),Kg(c),d=Mg(c);return b}Vd['application/mp4; codecs="wvtt"']=no;z("shaka.util.Dom.createHTMLElement",function(b){return document.createElement(b)});z("shaka.util.Dom.createVideoElement",function(){var b=document.createElement("video");b.muted=!0;b.width=600;b.height=400;return b});z("shaka.util.Dom.asHTMLElement",function(b){return b});z("shaka.util.Dom.asHTMLMediaElement",function(b){return b});z("shaka.util.Dom.removeAllChildren",function(b){for(;b.firstChild;)b.removeChild(b.firstChild);});}).call(exportTo,innerGlobal,innerGlobal);for(var k in exportTo.shaka)exports[k]=exportTo.shaka[k];})();


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
  var IS_FIREFOX = /Firefox/i.test(USER_AGENT);
  var IS_EDGE = /Edge/i.test(USER_AGENT);
  var IS_CHROME = !IS_EDGE && /Chrome/i.test(USER_AGENT);
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
  var IS_SAFARI = /Safari/i.test(USER_AGENT) && !IS_CHROME && !IS_ANDROID && !IS_EDGE;
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

  var EmpTech =
  /*#__PURE__*/
  function () {
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
      var duration = this.duration();

      if (duration === Infinity || duration === 0) {
        return Infinity;
      }

      return duration - this.currentTime();
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
        if (duration - this.preDuration_ >= 1.0 || duration - this.preDuration_ <= -1.0 || duration === 0) {
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

      if (window_1.document.documentMode || /Edge/.test(window_1.navigator.userAgent) || IS_CHROMECAST || IS_ANDROID || IS_SMARTTV) {
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

  var EmpPlayerError =
  /*#__PURE__*/
  function (_Error) {
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
  }(_wrapNativeSuper(Error));

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

  var DownloadService =
  /*#__PURE__*/
  function (_Plugin) {
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

  DownloadService.VERSION = '2.1.111-453';

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

  var EmpShaka =
  /*#__PURE__*/
  function (_Html) {
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
        this.trigger({
          type: empPlayerEvents.ENDED,
          bubbles: true
        });
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
      config.abr.enabled = true; // minBandwidth/maxBandwidth bit/sec, from entitlement we get kbit/sec. Not Byte/sec.
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

      if (this.options_.liveDelay !== undefined) {
        config.manifest.dash.defaultPresentationDelay = this.options_.liveDelay;
        config.manifest.dash.ignoreMinBufferTime = true;
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
      }

      config.streaming = {
        retryParameters: {
          maxAttempts: 6,
          baseDelay: 1000,
          backoffFactor: 2,
          fuzzFactor: 0.5,
          timeout: 0
        },
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
      } // Remove playready from smartTV, we only use widevine for smartTV


      if ((IS_SMARTTV || IS_CHROMECAST) && config.drm.servers && config.drm.servers['com.microsoft.playready']) {
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
        log('after load stream');
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
        var duration = seekRange.end;
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
      // handle restrictions
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

      var hasWebKit = 'WebKitMediaSource' in window_1;
      var hasMediaSource = 'MediaSource' in window_1;
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
     * Return the object presentation of the play-request required for the entitlement engine
     *
     * @return {Object} entitlementPlayRequest
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
      if (this.live() && this.options_.timeShiftDisabled) {
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
          start = this.options_.source.streamInfo.startTime / 1000;
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
  Tech$1.withSourceHandlers(EmpShaka);
  EmpShaka.VERSION = '2.1.111-453'; // Unset source handlers set by Html5 super class.
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
