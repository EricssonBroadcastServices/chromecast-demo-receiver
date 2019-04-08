/**
 * @license
 * EMP-Player 2.1.105-393 
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
  (function(){var innerGlobal=typeof window!="undefined"?window:commonjsGlobal;var exportTo={};(function(window,global){var n,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value);},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ca(){ca=function(){};ba.Symbol||(ba.Symbol=da);}var da=function(){var b=0;return function(c){return "jscomp_symbol_"+(c||"")+b++}}();
  function fa(){ca();var b=ba.Symbol.iterator;b||(b=ba.Symbol.iterator=ba.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&aa(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return ja(this)}});fa=function(){};}function ja(b){var c=0;return ka(function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}})}function ka(b){fa();b={next:b};b[ba.Symbol.iterator]=function(){return this};return b}function q(b){fa();var c=b[Symbol.iterator];return c?c.call(b):ja(b)}
  function la(b,c){if(c){for(var d=ba,e=b.split("."),f=0;f<e.length-1;f++){var g=e[f];g in d||(d[g]={});d=d[g];}e=e[e.length-1];f=d[e];g=c(f);g!=f&&null!=g&&aa(d,e,{configurable:!0,writable:!0,value:g});}}
  la("Promise",function(b){function c(b){this.b=0;this.g=void 0;this.a=[];var c=this.c();try{b(c.resolve,c.reject);}catch(l){c.reject(l);}}function d(){this.a=null;}function e(b){return b instanceof c?b:new c(function(c){c(b);})}if(b)return b;d.prototype.b=function(b){null==this.a&&(this.a=[],this.f());this.a.push(b);};d.prototype.f=function(){var b=this;this.c(function(){b.h();});};var f=ba.setTimeout;d.prototype.c=function(b){f(b,0);};d.prototype.h=function(){for(;this.a&&this.a.length;){var b=this.a;this.a=
  [];for(var c=0;c<b.length;++c){var d=b[c];b[c]=null;try{d();}catch(m){this.g(m);}}}this.a=null;};d.prototype.g=function(b){this.c(function(){throw b;});};c.prototype.c=function(){function b(b){return function(e){d||(d=!0,b.call(c,e));}}var c=this,d=!1;return {resolve:b(this.o),reject:b(this.f)}};c.prototype.o=function(b){if(b===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof c)this.s(b);else{a:switch(typeof b){case "object":var d=null!=b;break a;case "function":d=!0;
  break a;default:d=!1;}d?this.m(b):this.h(b);}};c.prototype.m=function(b){var c=void 0;try{c=b.then;}catch(l){this.f(l);return}"function"==typeof c?this.v(c,b):this.h(b);};c.prototype.f=function(b){this.i(2,b);};c.prototype.h=function(b){this.i(1,b);};c.prototype.i=function(b,c){if(0!=this.b)throw Error("Cannot settle("+b+", "+c+"): Promise already settled in state"+this.b);this.b=b;this.g=c;this.l();};c.prototype.l=function(){if(null!=this.a){for(var b=0;b<this.a.length;++b)g.b(this.a[b]);this.a=null;}};
  var g=new d;c.prototype.s=function(b){var c=this.c();b.Eb(c.resolve,c.reject);};c.prototype.v=function(b,c){var d=this.c();try{b.call(c,d.resolve,d.reject);}catch(m){d.reject(m);}};c.prototype.then=function(b,d){function e(b,c){return "function"==typeof b?function(c){try{f(b(c));}catch(P){g(P);}}:c}var f,g,h=new c(function(b,c){f=b;g=c;});this.Eb(e(b,f),e(d,g));return h};c.prototype["catch"]=function(b){return this.then(void 0,b)};c.prototype.Eb=function(b,c){function d(){switch(e.b){case 1:b(e.g);break;
  case 2:c(e.g);break;default:throw Error("Unexpected state: "+e.b);}}var e=this;null==this.a?g.b(d):this.a.push(d);};c.resolve=e;c.reject=function(b){return new c(function(c,d){d(b);})};c.race=function(b){return new c(function(c,d){for(var f=q(b),g=f.next();!g.done;g=f.next())e(g.value).Eb(c,d);})};c.all=function(b){var d=q(b),f=d.next();return f.done?e([]):new c(function(b,c){function g(c){return function(d){h[c]=d;k--;0==k&&b(h);}}var h=[],k=0;do h.push(void 0),k++,e(f.value).Eb(g(h.length-1),c),f=d.next();
  while(!f.done)})};return c});la("Promise.prototype.finally",function(b){return b?b:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;})})}});function ma(b){function c(c){return b.next(c)}function d(c){return b["throw"](c)}return new Promise(function(e,f){function g(b){b.done?e(b.value):Promise.resolve(b.value).then(c,d).then(g,f);}g(b.next());})}function t(b){return ma(b())}
  function na(){this.g=!1;this.c=null;this.u=void 0;this.j=1;this.b=this.f=0;this.i=this.a=null;}function oa(b){if(b.g)throw new TypeError("Generator is already running");b.g=!0;}na.prototype.h=function(b){this.u=b;};function pa(b,c){b.a={Sc:c,gd:!0};b.j=b.f||b.b;}na.prototype["return"]=function(b){this.a={"return":b};this.j=this.b;};function u(b,c,d){b.j=d;return {value:c}}na.prototype.B=function(b){this.j=b;};function qa(b,c,d){b.f=c;void 0!=d&&(b.b=d);}function ra(b,c){b.f=0;b.b=c||0;}
  function sa(b,c){b.j=c;b.f=0;}function ta(b){b.f=0;var c=b.a.Sc;b.a=null;return c}function ua(b){b.i=[b.a];b.f=0;b.b=0;}function va(b,c){var d=b.i.splice(0)[0];(d=b.a=b.a||d)?d.gd?b.j=b.f||b.b:void 0!=d.B&&b.b<d.B?(b.j=d.B,b.a=null):b.j=b.b:b.j=c;}function wa(b){this.a=new na;this.b=b;}function xa(b,c){oa(b.a);var d=b.a.c;if(d)return ya(b,"return"in d?d["return"]:function(b){return {value:b,done:!0}},c,b.a["return"]);b.a["return"](c);return za(b)}
  function ya(b,c,d,e){try{var f=c.call(b.a.c,d);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return b.a.g=!1,f;var g=f.value;}catch(h){return b.a.c=null,pa(b.a,h),za(b)}b.a.c=null;e.call(b.a,g);return za(b)}
  function za(b){for(;b.a.j;)try{var c=b.b(b.a);if(c)return b.a.g=!1,{value:c.value,done:!1}}catch(d){b.a.u=void 0,pa(b.a,d);}b.a.g=!1;if(b.a.a){c=b.a.a;b.a.a=null;if(c.gd)throw c.Sc;return {value:c["return"],done:!0}}return {value:void 0,done:!0}}
  function Aa(b){this.next=function(c){oa(b.a);b.a.c?c=ya(b,b.a.c.next,c,b.a.h):(b.a.h(c),c=za(b));return c};this["throw"]=function(c){oa(b.a);b.a.c?c=ya(b,b.a.c["throw"],c,b.a.h):(pa(b.a,c),c=za(b));return c};this["return"]=function(c){return xa(b,c)};fa();this[Symbol.iterator]=function(){return this};}function v(b,c){Aa.prototype=b.prototype;return new Aa(new wa(c))}function Ba(b,c){return Object.prototype.hasOwnProperty.call(b,c)}
  la("WeakMap",function(b){function c(b){this.a=(g+=Math.random()+1).toString();if(b){ca();fa();b=q(b);for(var c;!(c=b.next()).done;)c=c.value,this.set(c[0],c[1]);}}function d(b){Ba(b,f)||aa(b,f,{value:{}});}function e(b){var c=Object[b];c&&(Object[b]=function(b){d(b);return c(b)});}if(function(){if(!b||!Object.seal)return !1;try{var c=Object.seal({}),d=Object.seal({}),e=new b([[c,2],[d,3]]);if(2!=e.get(c)||3!=e.get(d))return !1;e["delete"](c);e.set(d,4);return !e.has(c)&&4==e.get(d)}catch(m){return !1}}())return b;
  var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;c.prototype.set=function(b,c){d(b);if(!Ba(b,f))throw Error("WeakMap key fail: "+b);b[f][this.a]=c;return this};c.prototype.get=function(b){return Ba(b,f)?b[f][this.a]:void 0};c.prototype.has=function(b){return Ba(b,f)&&Ba(b[f],this.a)};c.prototype["delete"]=function(b){return Ba(b,f)&&Ba(b[f],this.a)?delete b[f][this.a]:!1};return c});
  la("Map",function(b){function c(){var b={};return b.ta=b.next=b.head=b}function d(b,c){var d=b.a;return ka(function(){if(d){for(;d.head!=b.a;)d=d.ta;for(;d.next!=d.head;)return d=d.next,{done:!1,value:c(d)};d=null;}return {done:!0,value:void 0}})}function e(b,c){var d=c&&typeof c;"object"==d||"function"==d?g.has(c)?d=g.get(c):(d=""+ ++h,g.set(c,d)):d="p_"+c;var e=b.b[d];if(e&&Ba(b.b,d))for(var f=0;f<e.length;f++){var k=e[f];if(c!==c&&k.key!==k.key||c===k.key)return {id:d,list:e,index:f,S:k}}return {id:d,
  list:e,index:-1,S:void 0}}function f(b){this.b={};this.a=c();this.size=0;if(b){b=q(b);for(var d;!(d=b.next()).done;)d=d.value,this.set(d[0],d[1]);}}if(function(){if(!b||"function"!=typeof b||!b.prototype.entries||"function"!=typeof Object.seal)return !1;try{var c=Object.seal({x:4}),d=new b(q([[c,"s"]]));if("s"!=d.get(c)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return !1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||"s"!=f.value[1])return !1;f=e.next();return f.done||4!=f.value[0].x||
  "t"!=f.value[1]||!e.next().done?!1:!0}catch(r){return !1}}())return b;ca();fa();var g=new WeakMap;f.prototype.set=function(b,c){var d=e(this,b);d.list||(d.list=this.b[d.id]=[]);d.S?d.S.value=c:(d.S={next:this.a,ta:this.a.ta,head:this.a,key:b,value:c},d.list.push(d.S),this.a.ta.next=d.S,this.a.ta=d.S,this.size++);return this};f.prototype["delete"]=function(b){b=e(this,b);return b.S&&b.list?(b.list.splice(b.index,1),b.list.length||delete this.b[b.id],b.S.ta.next=b.S.next,b.S.next.ta=b.S.ta,b.S.head=
  null,this.size--,!0):!1};f.prototype.clear=function(){this.b={};this.a=this.a.ta=c();this.size=0;};f.prototype.has=function(b){return !!e(this,b).S};f.prototype.get=function(b){return (b=e(this,b).S)&&b.value};f.prototype.entries=function(){return d(this,function(b){return [b.key,b.value]})};f.prototype.keys=function(){return d(this,function(b){return b.key})};f.prototype.values=function(){return d(this,function(b){return b.value})};f.prototype.forEach=function(b,c){for(var d=this.entries(),e;!(e=d.next()).done;)e=
  e.value,b.call(c,e[1],e[0],this);};f.prototype[Symbol.iterator]=f.prototype.entries;var h=0;return f});
  la("Set",function(b){function c(b){this.a=new Map;if(b){b=q(b);for(var c;!(c=b.next()).done;)this.add(c.value);}this.size=this.a.size;}if(function(){if(!b||"function"!=typeof b||!b.prototype.entries||"function"!=typeof Object.seal)return !1;try{var c=Object.seal({x:4}),e=new b(q([c]));if(!e.has(c)||1!=e.size||e.add(c)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return !1;var f=e.entries(),g=f.next();if(g.done||g.value[0]!=c||g.value[1]!=c)return !1;g=f.next();return g.done||g.value[0]==c||4!=g.value[0].x||
  g.value[1]!=g.value[0]?!1:f.next().done}catch(h){return !1}}())return b;ca();fa();c.prototype.add=function(b){this.a.set(b,b);this.size=this.a.size;return this};c.prototype["delete"]=function(b){b=this.a["delete"](b);this.size=this.a.size;return b};c.prototype.clear=function(){this.a.clear();this.size=0;};c.prototype.has=function(b){return this.a.has(b)};c.prototype.entries=function(){return this.a.entries()};c.prototype.values=function(){return this.a.values()};c.prototype.keys=c.prototype.values;
  c.prototype[Symbol.iterator]=c.prototype.values;c.prototype.forEach=function(b,c){var d=this;this.a.forEach(function(e){return b.call(c,e,e,d)});};return c});function Ca(b,c,d){b instanceof String&&(b=String(b));for(var e=b.length,f=0;f<e;f++){var g=b[f];if(c.call(d,g,f,b))return {cd:f,Ld:g}}return {cd:-1,Ld:void 0}}la("Array.prototype.findIndex",function(b){return b?b:function(b,d){return Ca(this,b,d).cd}});
  function Da(b,c){fa();b instanceof String&&(b+="");var d=0,e={next:function(){if(d<b.length){var f=d++;return {value:c(f,b[f]),done:!1}}e.next=function(){return {done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e}la("Array.prototype.keys",function(b){return b?b:function(){return Da(this,function(b){return b})}});la("Object.is",function(b){return b?b:function(b,d){return b===d?0!==b||1/b===1/d:b!==b&&d!==d}});
  la("Array.prototype.includes",function(b){return b?b:function(b,d){var c=this;c instanceof String&&(c=String(c));var f=c.length,g=d||0;for(0>g&&(g=Math.max(g+f,0));g<f;g++){var h=c[g];if(h===b||Object.is(h,b))return !0}return !1}});function Ea(b,c,d){if(null==b)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return b+""}
  la("String.prototype.includes",function(b){return b?b:function(b,d){return -1!==Ea(this,b,"includes").indexOf(b,d||0)}});la("Array.from",function(b){return b?b:function(b,d,e){fa();d=null!=d?d:function(b){return b};var c=[],g=b[Symbol.iterator];if("function"==typeof g)for(b=g.call(b);!(g=b.next()).done;)c.push(d.call(e,g.value));else{g=b.length;for(var h=0;h<g;h++)c.push(d.call(e,b[h]));}return c}});la("Array.prototype.find",function(b){return b?b:function(b,d){return Ca(this,b,d).Ld}});
  la("String.prototype.startsWith",function(b){return b?b:function(b,d){for(var c=Ea(this,b,"startsWith"),f=c.length,g=b.length,h=Math.max(0,Math.min(d|0,c.length)),k=0;k<g&&h<f;)if(c[h++]!=b[k++])return !1;return k>=g}});var Fa=this;Fa.a=!0;function y(b,c){var d=b.split("."),e=Fa;d[0]in e||!e.execScript||e.execScript("var "+d[0]);for(var f;d.length&&(f=d.shift());)d.length||void 0===c?e[f]?e=e[f]:e=e[f]={}:e[f]=c;}
  function Ga(b,c){function d(){}d.prototype=c.prototype;b.$f=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.Wf=function(b,d,g){return c.prototype[d].apply(b,Array.prototype.slice.call(arguments,2))};}function Ha(b){this.c=Math.exp(Math.log(.5)/b);this.b=this.a=0;}function Ia(b,c,d){var e=Math.pow(b.c,c);d=d*(1-e)+e*b.a;isNaN(d)||(b.a=d,b.b+=c);}function Ka(b){return b.a/(1-Math.pow(b.c,b.b))}function La(){this.b=new Ha(2);this.c=new Ha(5);this.a=0;}La.prototype.getBandwidthEstimate=function(b){return 128E3>this.a?b:Math.min(Ka(this.b),Ka(this.c))};function Ma(){}function Na(){}function Oa(){}window.console&&window.console.log.bind&&(Na=console.warn.bind(console),Ma=console.error.bind(console));var Pa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Qa(b){var c;b instanceof Qa?(Ra(this,b.la),this.Ma=b.Ma,this.pa=b.pa,Sa(this,b.$a),this.da=b.da,Ta(this,b.a.clone()),this.Fa=b.Fa):b&&(c=String(b).match(Pa))?(Ra(this,c[1]||"",!0),this.Ma=Ua(c[2]||""),this.pa=Ua(c[3]||"",!0),Sa(this,c[4]),this.da=Ua(c[5]||"",!0),Ta(this,c[6]||"",!0),this.Fa=Ua(c[7]||"")):this.a=new Va(null);}n=Qa.prototype;n.la="";n.Ma="";n.pa="";n.$a=null;n.da="";n.Fa="";
  n.toString=function(){var b=[],c=this.la;c&&b.push(Za(c,$a,!0),":");if(c=this.pa){b.push("//");var d=this.Ma;d&&b.push(Za(d,$a,!0),"@");b.push(encodeURIComponent(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));c=this.$a;null!=c&&b.push(":",String(c));}if(c=this.da)this.pa&&"/"!=c.charAt(0)&&b.push("/"),b.push(Za(c,"/"==c.charAt(0)?ab:bb,!0));(c=this.a.toString())&&b.push("?",c);(c=this.Fa)&&b.push("#",Za(c,cb));return b.join("")};
  n.resolve=function(b){var c=this.clone();"data"===c.la&&(c=new Qa);var d=!!b.la;d?Ra(c,b.la):d=!!b.Ma;d?c.Ma=b.Ma:d=!!b.pa;d?c.pa=b.pa:d=null!=b.$a;var e=b.da;if(d)Sa(c,b.$a);else if(d=!!b.da){if("/"!=e.charAt(0))if(this.pa&&!this.da)e="/"+e;else{var f=c.da.lastIndexOf("/");-1!=f&&(e=c.da.substr(0,f+1)+e);}if(".."==e||"."==e)e="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){f=0==e.lastIndexOf("/",0);e=e.split("/");for(var g=[],h=0;h<e.length;){var k=e[h++];"."==k?f&&h==e.length&&g.push(""):".."==
  k?((1<g.length||1==g.length&&""!=g[0])&&g.pop(),f&&h==e.length&&g.push("")):(g.push(k),f=!0);}e=g.join("/");}}d?c.da=e:d=""!==b.a.toString();d?Ta(c,b.a.clone()):d=!!b.Fa;d&&(c.Fa=b.Fa);return c};n.clone=function(){return new Qa(this)};function Ra(b,c,d){b.la=d?Ua(c,!0):c;b.la&&(b.la=b.la.replace(/:$/,""));}function Sa(b,c){if(c){c=Number(c);if(isNaN(c)||0>c)throw Error("Bad port number "+c);b.$a=c;}else b.$a=null;}function Ta(b,c,d){c instanceof Va?b.a=c:(d||(c=Za(c,db)),b.a=new Va(c));}
  function Ua(b,c){return b?c?decodeURI(b):decodeURIComponent(b):""}function Za(b,c,d){return "string"==typeof b?(b=encodeURI(b).replace(c,eb),d&&(b=b.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b):null}function eb(b){b=b.charCodeAt(0);return "%"+(b>>4&15).toString(16)+(b&15).toString(16)}var $a=/[#\/\?@]/g,bb=/[#\?:]/g,ab=/[#\?]/g,db=/[#\?@]/g,cb=/#/g;function Va(b){this.a=b||null;}n=Va.prototype;n.ca=null;n.Gb=null;
  n.add=function(b,c){if(!this.ca&&(this.ca={},this.Gb=0,this.a))for(var d=this.a.split("&"),e=0;e<d.length;e++){var f=d[e].indexOf("="),g=null;if(0<=f){var h=d[e].substring(0,f);g=d[e].substring(f+1);}else h=d[e];h=decodeURIComponent(h.replace(/\+/g," "));g=g||"";this.add(h,decodeURIComponent(g.replace(/\+/g," ")));}this.a=null;(d=this.ca.hasOwnProperty(b)&&this.ca[b])||(this.ca[b]=d=[]);d.push(c);this.Gb++;return this};
  n.toString=function(){if(this.a)return this.a;if(!this.ca)return "";var b=[],c;for(c in this.ca)for(var d=encodeURIComponent(c),e=this.ca[c],f=0;f<e.length;f++){var g=d;""!==e[f]&&(g+="="+encodeURIComponent(e[f]));b.push(g);}return this.a=b.join("&")};n.clone=function(){var b=new Va;b.a=this.a;if(this.ca){var c={},d;for(d in this.ca)c[d]=this.ca[d].concat();b.ca=c;b.Gb=this.Gb;}return b};function z(){var b,c,d=new Promise(function(d,f){b=d;c=f;});d.resolve=b;d.reject=c;return d}z.prototype.resolve=function(){};z.prototype.reject=function(){};function fb(b,c){var d=gb();this.i=null==b.maxAttempts?d.maxAttempts:b.maxAttempts;this.f=null==b.baseDelay?d.baseDelay:b.baseDelay;this.h=null==b.fuzzFactor?d.fuzzFactor:b.fuzzFactor;this.g=null==b.backoffFactor?d.backoffFactor:b.backoffFactor;this.a=0;this.b=this.f;if(this.c=void 0===c?!1:c)this.a=1;}function ib(b){if(b.a>=b.i)if(b.c)b.a=1,b.b=b.f;else return Promise.reject();var c=new z;b.a?(window.setTimeout(c.resolve,b.b*(1+(2*Math.random()-1)*b.h)),b.b*=b.g):c.resolve();b.a++;return c}
  function gb(){return {maxAttempts:2,baseDelay:1E3,backoffFactor:2,fuzzFactor:.5,timeout:0}}function B(b,c,d,e){for(var f=[],g=3;g<arguments.length;++g)f[g-3]=arguments[g];this.severity=b;this.category=c;this.code=d;this.data=f;this.handled=!1;}y("shaka.util.Error",B);B.prototype.toString=function(){return "shaka.util.Error "+JSON.stringify(this,null,"  ")};B.Severity={RECOVERABLE:1,CRITICAL:2};B.Category={NETWORK:1,TEXT:2,MEDIA:3,MANIFEST:4,STREAMING:5,DRM:6,PLAYER:7,CAST:8,STORAGE:9};
  B.Code={UNSUPPORTED_SCHEME:1E3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,UNKNOWN_DATA_URI_ENCODING:1005,REQUEST_FILTER_ERROR:1006,RESPONSE_FILTER_ERROR:1007,MALFORMED_TEST_URI:1008,UNEXPECTED_TEST_REQUEST:1009,INVALID_TEXT_HEADER:2E3,INVALID_TEXT_CUE:2001,UNABLE_TO_DETECT_ENCODING:2003,BAD_ENCODING:2004,INVALID_XML:2005,INVALID_MP4_TTML:2007,INVALID_MP4_VTT:2008,UNABLE_TO_EXTRACT_CUE_START_TIME:2009,BUFFER_READ_OUT_OF_BOUNDS:3E3,JS_INTEGER_OVERFLOW:3001,EBML_OVERFLOW:3002,
  EBML_BAD_FLOATING_POINT_SIZE:3003,MP4_SIDX_WRONG_BOX_TYPE:3004,MP4_SIDX_INVALID_TIMESCALE:3005,MP4_SIDX_TYPE_NOT_SUPPORTED:3006,WEBM_CUES_ELEMENT_MISSING:3007,WEBM_EBML_HEADER_ELEMENT_MISSING:3008,WEBM_SEGMENT_ELEMENT_MISSING:3009,WEBM_INFO_ELEMENT_MISSING:3010,WEBM_DURATION_ELEMENT_MISSING:3011,WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:3012,WEBM_CUE_TIME_ELEMENT_MISSING:3013,MEDIA_SOURCE_OPERATION_FAILED:3014,MEDIA_SOURCE_OPERATION_THREW:3015,VIDEO_ERROR:3016,QUOTA_EXCEEDED_ERROR:3017,TRANSMUXING_FAILED:3018,
  UNABLE_TO_GUESS_MANIFEST_TYPE:4E3,DASH_INVALID_XML:4001,DASH_NO_SEGMENT_INFO:4002,DASH_EMPTY_ADAPTATION_SET:4003,DASH_EMPTY_PERIOD:4004,DASH_WEBM_MISSING_INIT:4005,DASH_UNSUPPORTED_CONTAINER:4006,DASH_PSSH_BAD_ENCODING:4007,DASH_NO_COMMON_KEY_SYSTEM:4008,DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:4009,DASH_CONFLICTING_KEY_IDS:4010,UNPLAYABLE_PERIOD:4011,RESTRICTIONS_CANNOT_BE_MET:4012,NO_PERIODS:4014,HLS_PLAYLIST_HEADER_MISSING:4015,INVALID_HLS_TAG:4016,HLS_INVALID_PLAYLIST_HIERARCHY:4017,DASH_DUPLICATE_REPRESENTATION_ID:4018,
  HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:4020,HLS_COULD_NOT_GUESS_MIME_TYPE:4021,HLS_MASTER_PLAYLIST_NOT_PROVIDED:4022,HLS_REQUIRED_ATTRIBUTE_MISSING:4023,HLS_REQUIRED_TAG_MISSING:4024,HLS_COULD_NOT_GUESS_CODECS:4025,HLS_KEYFORMATS_NOT_SUPPORTED:4026,DASH_UNSUPPORTED_XLINK_ACTUATE:4027,DASH_XLINK_DEPTH_LIMIT:4028,HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:4030,CONTENT_UNSUPPORTED_BY_BROWSER:4032,CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM:4033,INVALID_STREAMS_CHOSEN:5005,NO_RECOGNIZED_KEY_SYSTEMS:6E3,REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:6001,
  FAILED_TO_CREATE_CDM:6002,FAILED_TO_ATTACH_TO_VIDEO:6003,INVALID_SERVER_CERTIFICATE:6004,FAILED_TO_CREATE_SESSION:6005,FAILED_TO_GENERATE_LICENSE_REQUEST:6006,LICENSE_REQUEST_FAILED:6007,LICENSE_RESPONSE_REJECTED:6008,ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:6010,NO_LICENSE_SERVER_GIVEN:6012,OFFLINE_SESSION_REMOVED:6013,EXPIRED:6014,LOAD_INTERRUPTED:7E3,OPERATION_ABORTED:7001,NO_VIDEO_ELEMENT:7002,CAST_API_UNAVAILABLE:8E3,NO_CAST_RECEIVERS:8001,ALREADY_CASTING:8002,UNEXPECTED_CAST_ERROR:8003,CAST_CANCELED_BY_USER:8004,
  CAST_CONNECTION_TIMED_OUT:8005,CAST_RECEIVER_APP_UNAVAILABLE:8006,STORAGE_NOT_SUPPORTED:9E3,INDEXED_DB_ERROR:9001,DEPRECATED_OPERATION_ABORTED:9002,REQUESTED_ITEM_NOT_FOUND:9003,MALFORMED_OFFLINE_URI:9004,CANNOT_STORE_LIVE_OFFLINE:9005,STORE_ALREADY_IN_PROGRESS:9006,NO_INIT_DATA_FOR_OFFLINE:9007,LOCAL_PLAYER_INSTANCE_REQUIRED:9008,NEW_KEY_OPERATION_NOT_SUPPORTED:9011,KEY_NOT_FOUND:9012,MISSING_STORAGE_CELL:9013};function C(b,c){this.promise=b;this.b=c;this.a=!1;}y("shaka.util.AbortableOperation",C);function jb(b){return new C(Promise.reject(b),function(){return Promise.resolve()})}C.failed=jb;function kb(){var b=Promise.reject(new B(2,7,7001));b["catch"](function(){});return new C(b,function(){return Promise.resolve()})}C.aborted=kb;function lb(b){return new C(Promise.resolve(b),function(){return Promise.resolve()})}C.completed=lb;
  function mb(b){return new C(b,function(){return b["catch"](function(){})})}C.notAbortable=mb;C.prototype.abort=function(){this.a=!0;return this.b()};C.prototype.abort=C.prototype.abort;function nb(b){return new C(Promise.all(b.map(function(b){return b.promise})),function(){return Promise.all(b.map(function(b){return b.abort()}))})}C.all=nb;C.prototype["finally"]=function(b){this.promise.then(function(){return b(!0)},function(){return b(!1)});return this};C.prototype["finally"]=C.prototype["finally"];
  C.prototype.Z=function(b,c){function d(){f.reject(new B(2,7,7001));return e.abort()}var e=this,f=new z;this.promise.then(function(c){e.a?f.reject(new B(2,7,7001)):b?d=ob(b,c,f):f.resolve(c);},function(b){c?d=ob(c,b,f):f.reject(b);});return new C(f,function(){return d()})};C.prototype.chain=C.prototype.Z;
  function ob(b,c,d){try{var e=b(c);if(e&&e.promise&&e.abort)return d.resolve(e.promise),function(){return e.abort()};d.resolve(e);return function(){return Promise.resolve(e).then(function(){})["catch"](function(){})}}catch(f){return d.reject(f),function(){return Promise.resolve()}}}function D(b,c){c=void 0===c?{}:c;for(var d in c)this[d]=c[d];this.defaultPrevented=this.cancelable=this.bubbles=!1;this.timeStamp=window.performance&&window.performance.now?window.performance.now():Date.now();this.type=b;this.isTrusted=!1;this.target=this.currentTarget=null;this.a=!1;}D.prototype.preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0);};D.prototype.stopImmediatePropagation=function(){this.a=!0;};D.prototype.stopPropagation=function(){};function pb(){this.a={};}n=pb.prototype;n.push=function(b,c){this.a.hasOwnProperty(b)?this.a[b].push(c):this.a[b]=[c];};n.get=function(b){return (b=this.a[b])?b.slice():null};n.getAll=function(){var b=[],c;for(c in this.a)b.push.apply(b,this.a[c]);return b};n.remove=function(b,c){var d=this.a[b];if(d)for(var e=0;e<d.length;++e)d[e]==c&&(d.splice(e,1),--e);};n.forEach=function(b){for(var c in this.a)b(c,this.a[c]);};function E(){this.Xb=new pb;this.zb=this;}E.prototype.addEventListener=function(b,c){this.Xb.push(b,c);};E.prototype.removeEventListener=function(b,c){this.Xb.remove(b,c);};E.prototype.dispatchEvent=function(b){for(var c=this.Xb.get(b.type)||[],d=0;d<c.length;++d){b.target=this.zb;b.currentTarget=this.zb;var e=c[d];try{e.handleEvent?e.handleEvent(b):e.call(this,b);}catch(f){}if(b.a)break}return b.defaultPrevented};function qb(b){function c(b){switch(typeof b){case "undefined":case "boolean":case "number":case "string":case "symbol":case "function":return b;default:if(!b||b.buffer&&b.buffer.constructor==ArrayBuffer)return b;if(d.has(b))return null;var e=b.constructor==Array;if(b.constructor!=Object&&!e)return null;d.add(b);var g=e?[]:{},h;for(h in b)g[h]=c(b[h]);e&&(g.length=b.length);return g}}var d=new Set;return c(b)}function rb(b,c){return "number"===typeof b&&"number"===typeof c&&isNaN(b)&&isNaN(c)?!0:b===c}function tb(b,c){var d=b.indexOf(c);-1<d&&b.splice(d,1);}function ub(b,c){var d=0;b.forEach(function(b){d+=c(b)?1:0;});return d}
  function vb(b,c,d){d||(d=rb);if(b.length!=c.length)return !1;c=c.slice();var e={};b=q(b);for(var f=b.next();!f.done;e={item:e.item},f=b.next()){e.item=f.value;f=c.findIndex(function(b){return function(c){return d(b.item,c)}}(e));if(-1==f)return !1;c[f]=c[c.length-1];c.pop();}return 0==c.length}function wb(){this.a=[];}function xb(b,c){b.a.push(c["finally"](function(){tb(b.a,c);}));}wb.prototype.destroy=function(){var b=[];this.a.forEach(function(c){c.promise["catch"](function(){});b.push(c.abort());});this.a=[];return Promise.all(b)};function F(b){E.call(this);this.f=!1;this.g=new wb;this.a=new Set;this.b=new Set;this.c=b||null;}Ga(F,E);y("shaka.net.NetworkingEngine",F);F.RequestType={MANIFEST:0,SEGMENT:1,LICENSE:2,APP:3,TIMING:4};F.PluginPriority={FALLBACK:1,PREFERRED:2,APPLICATION:3};var yb={};function zb(b,c,d){d=d||3;var e=yb[b];if(!e||d>=e.priority)yb[b]={priority:d,hf:c};}F.registerScheme=zb;F.unregisterScheme=function(b){delete yb[b];};F.prototype.jf=function(b){this.a.add(b);};F.prototype.registerRequestFilter=F.prototype.jf;
  F.prototype.Lf=function(b){this.a["delete"](b);};F.prototype.unregisterRequestFilter=F.prototype.Lf;F.prototype.$d=function(){this.a.clear();};F.prototype.clearAllRequestFilters=F.prototype.$d;F.prototype.kf=function(b){this.b.add(b);};F.prototype.registerResponseFilter=F.prototype.kf;F.prototype.Mf=function(b){this.b["delete"](b);};F.prototype.unregisterResponseFilter=F.prototype.Mf;F.prototype.ae=function(){this.b.clear();};F.prototype.clearAllResponseFilters=F.prototype.ae;
  function Ab(b,c){return {uris:b,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:c,licenseRequestType:null}}F.prototype.destroy=function(){this.f=!0;this.a.clear();this.b.clear();return this.g.destroy()};F.prototype.destroy=F.prototype.destroy;
  F.prototype.request=function(b,c){var d=this;if(this.f)return kb();c.method=c.method||"GET";c.headers=c.headers||{};c.retryParameters=c.retryParameters?qb(c.retryParameters):gb();c.uris=qb(c.uris);var e=Bb(this,b,c),f=e.Z(function(){return Cb(d,b,c,new fb(c.retryParameters,!1),0,null)}),g=f.Z(function(c){return Db(d,b,c)}),h=Date.now(),k=0;e.promise.then(function(){k=Date.now()-h;},function(){});var l=0;f.promise.then(function(){l=Date.now();},function(){});e=g.Z(function(c){var e=Date.now()-l,f=c.response;
  f.timeMs+=k;f.timeMs+=e;c.Ae||!d.c||f.fromCache||1!=b||d.c(f.timeMs,f.data.byteLength);return f},function(b){b&&(b.severity=2);throw b;});xb(this.g,e);return e};F.prototype.request=F.prototype.request;function Bb(b,c,d){var e=lb(void 0),f={};b=q(b.a);for(var g=b.next();!g.done;f={xc:f.xc},g=b.next())f.xc=g.value,e=e.Z(function(b){return function(){return b.xc(c,d)}}(f));return e.Z(void 0,function(b){if(b&&7001==b.code)throw b;throw new B(2,1,1006,b);})}
  function Cb(b,c,d,e,f,g){var h=new Qa(d.uris[f]),k=h.la,l=!1;k||(k=location.protocol,k=k.slice(0,-1),Ra(h,k),d.uris[f]=h.toString());var m=(k=yb[k])?k.hf:null;if(!m)return jb(new B(2,1,1E3,h));var p;return mb(ib(e)).Z(function(){if(b.f)return kb();p=Date.now();return m(d.uris[f],d,c,function(d,e){b.c&&1==c&&(b.c(d,e),l=!0);})}).Z(function(b){void 0==b.timeMs&&(b.timeMs=Date.now()-p);return {response:b,Ae:l}},function(h){if(h&&7001==h.code)throw h;if(b.f)return kb();if(h&&1==h.severity)return b.dispatchEvent(new D("retry",
  {error:h instanceof B?h:null})),f=(f+1)%d.uris.length,Cb(b,c,d,e,f,h);throw h||g;})}function Db(b,c,d){var e=lb(void 0);b=q(b.b);for(var f=b.next();!f.done;f=b.next())e=e.Z(f.value.bind(null,c,d.response));return e.Z(function(){return d},function(b){if(b&&7001==b.code)throw b;var c=2;b instanceof B&&(c=b.severity);throw new B(c,1,1007,b);})}function Eb(){this.a=new pb;}Eb.prototype.L=function(){Fb(this);this.a=null;};function G(b,c,d,e){b.a&&(c=new Gb(c,d,e),b.a.push(d,c));}function Hb(b,c,d,e){G(b,c,d,function(b){this.ua(c,d);e(b);}.bind(b));}Eb.prototype.ua=function(b,c){if(this.a)for(var d=this.a.get(c)||[],e=0;e<d.length;++e){var f=d[e];f.target==b&&(f.ua(),this.a.remove(c,f));}};function Fb(b){if(b.a){for(var c=b.a.getAll(),d=0;d<c.length;++d)c[d].ua();b.a.a={};}}
  function Gb(b,c,d){this.target=b;this.type=c;this.a=d;this.target.addEventListener(c,d,!1);}Gb.prototype.ua=function(){this.target.removeEventListener(this.type,this.a,!1);this.a=this.target=null;};function Ib(b,c){for(var d=[],e=q(b),f=e.next();!f.done;f=e.next())d.push(c(f.value));return d}function Jb(b,c){for(var d=q(b),e=d.next();!e.done;e=d.next())if(!c(e.value))return !1;return !0}function Kb(b){var c=new Map;Object.keys(b).forEach(function(d){c.set(d,b[d]);});return c}function Lb(b){var c={};b.forEach(function(b,e){c[e]=b;});return c}function Mb(b,c){var d=b;c&&(d+='; codecs="'+c+'"');return d}function Nb(b){var c=[b.mimeType];Ob.forEach(function(d,e){var f=b[e];f&&c.push(d+'="'+f+'"');});return c.join(";")}function Pb(b){b=b.split(".");var c=b[0];b.pop();return [c,b.join(".")]}var Ob=(new Map).set("codecs","codecs").set("frameRate","framerate").set("bandwidth","bitrate").set("width","width").set("height","height").set("channelsCount","channels");function Qb(b){return (navigator.userAgent||"").includes(b)}function Sb(b){if(!b)return "";b=new Uint8Array(b);239==b[0]&&187==b[1]&&191==b[2]&&(b=b.subarray(3));b=escape(Tb(b));try{return decodeURIComponent(b)}catch(c){throw new B(2,2,2004);}}y("shaka.util.StringUtils.fromUTF8",Sb);
  function Ub(b,c,d){if(!b)return "";if(!d&&0!=b.byteLength%2)throw new B(2,2,2004);if(b instanceof ArrayBuffer)var e=b;else d=new Uint8Array(b.byteLength),d.set(new Uint8Array(b)),e=d.buffer;b=Math.floor(b.byteLength/2);d=new Uint16Array(b);e=new DataView(e);for(var f=0;f<b;f++)d[f]=e.getUint16(2*f,c);return Tb(d)}y("shaka.util.StringUtils.fromUTF16",Ub);
  function Vb(b){var c=new Uint8Array(b);if(239==c[0]&&187==c[1]&&191==c[2])return Sb(c);if(254==c[0]&&255==c[1])return Ub(c.subarray(2),!1);if(255==c[0]&&254==c[1])return Ub(c.subarray(2),!0);var d=function(b,c){return b.byteLength<=c||32<=b[c]&&126>=b[c]}.bind(null,c);if(0==c[0]&&0==c[2])return Ub(b,!1);if(0==c[1]&&0==c[3])return Ub(b,!0);if(d(0)&&d(1)&&d(2)&&d(3))return Sb(b);throw new B(2,2,2003);}y("shaka.util.StringUtils.fromBytesAutoDetect",Vb);
  function Wb(b){b=encodeURIComponent(b);b=unescape(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c.buffer}y("shaka.util.StringUtils.toUTF8",Wb);function Tb(b){for(var c="",d=0;d<b.length;d+=16E3)c+=String.fromCharCode.apply(null,b.subarray(d,d+16E3));return c}function Xb(b){this.b=b;this.a=null;}y("shaka.util.Timer",Xb);Xb.prototype.start=function(b,c){function d(){e.b();e.a=c?setTimeout(d,f):null;}var e=this,f=1E3*b;null!=this.a&&clearTimeout(this.a);this.a=setTimeout(d,f);};Xb.prototype.start=Xb.prototype.start;Xb.prototype.stop=function(){null!=this.a&&clearTimeout(this.a);this.a=null;};Xb.prototype.stop=Xb.prototype.stop;function Yb(b,c){var d=Tb(b);c=void 0==c?!0:c;d=window.btoa(d).replace(/\+/g,"-").replace(/\//g,"_");return c?d:d.replace(/=*$/,"")}y("shaka.util.Uint8ArrayUtils.toBase64",Yb);function Zb(b){b=window.atob(b.replace(/-/g,"+").replace(/_/g,"/"));for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c}y("shaka.util.Uint8ArrayUtils.fromBase64",Zb);function $b(b){for(var c=new Uint8Array(b.length/2),d=0;d<b.length;d+=2)c[d/2]=window.parseInt(b.substr(d,2),16);return c}
  y("shaka.util.Uint8ArrayUtils.fromHex",$b);function ac(b){for(var c="",d=0;d<b.length;++d){var e=b[d].toString(16);1==e.length&&(e="0"+e);c+=e;}return c}y("shaka.util.Uint8ArrayUtils.toHex",ac);function bc(b,c){if(!b&&!c)return !0;if(!b||!c||b.length!=c.length)return !1;for(var d=0;d<b.length;++d)if(b[d]!=c[d])return !1;return !0}y("shaka.util.Uint8ArrayUtils.equal",bc);
  function cc(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];for(var e=d=0;e<c.length;++e)d+=c[e].length;d=new Uint8Array(d);for(var f=e=0;f<c.length;++f)d.set(c[f],e),e+=c[f].length;return d}y("shaka.util.Uint8ArrayUtils.concat",cc);function dc(b){var c=this;this.v=b;this.s=new Set;this.m=this.h=null;this.R=!1;this.a=null;this.i=new Eb;this.b=new Map;this.o=[];this.l=new z;this.f=null;this.g=function(d){c.l.reject(d);b.onError(d);};this.va=new Map;this.$=new Map;this.P=new Xb(function(){return ec(c)});this.c=!1;this.ha=new z;this.A=!1;this.D=[];this.oa=!1;this.M=new Xb(function(){return fc(c)});this.M.start(1,!0);this.l["catch"](function(){});}n=dc.prototype;
  n.destroy=function(){var b=this;return t(function d(){return v(d,function(d){switch(d.j){case 1:if(b.c)return u(d,b.ha,0);b.c=!0;return u(d,gc(b),4);case 4:b.ha.resolve(),d.B(0);}})})};
  function gc(b){return t(function d(){var e;return v(d,function(d){switch(d.j){case 1:return b.i.L(),b.i=null,b.l.reject(),b.M.stop(),b.M=null,b.P.stop(),b.P=null,e=Array.from(b.b.keys()),b.b.clear(),u(d,Promise.all(e.map(function(b){return Promise.resolve().then(function(){return t(function k(){return v(k,function(d){switch(d.j){case 1:return qa(d,2),u(d,hc(b),4);case 4:sa(d,0);break;case 2:ta(d),d.j=0;}})})})})),2);case 2:if(!b.m){d.B(3);break}qa(d,4);return u(d,b.m.setMediaKeys(null),6);case 6:sa(d,
  5);break;case 4:ta(d);case 5:b.m=null;case 3:b.a=null,b.s.clear(),b.h=null,b.o=[],b.f=null,b.g=null,b.v=null,d.j=0;}})})}n.configure=function(b){this.f=b;};function ic(b,c,d){b.o=[];b.A=d;return jc(b,c)}function kc(b,c,d){b.o=d;b.A=0<d.length;return jc(b,c)}
  function lc(b,c,d,e,f,g){var h=new Map;h.set(c,{audioCapabilities:f,videoCapabilities:g,distinctiveIdentifier:"optional",persistentState:"required",sessionTypes:["persistent-license"],label:c,drmInfos:[{keySystem:c,licenseServerUri:d,distinctiveIdentifierRequired:!1,persistentStateRequired:!0,audioRobustness:"",videoRobustness:"",serverCertificate:e,initData:null,keyIds:null}]});return mc(b,h)}
  function jc(b,c){var d=c.some(function(b){return 0<b.drmInfos.length});if(!d){var e=Kb(b.f.servers);nc(c,e);}var f=oc(b);if(f){var g=q(c);for(e=g.next();!e.done;e=g.next())e.value.drmInfos=[f];}f=q(c);for(e=f.next();!e.done;e=f.next())for(e=q(e.value.drmInfos),g=e.next();!g.done;g=e.next())pc(g.value,Kb(b.f.servers),Kb(b.f.advanced||{}));e=qc(b,c);if(!e.size)return b.R=!0,Promise.resolve();e=mc(b,e);return d?e:e["catch"](function(){})}
  n.Db=function(b){var c=this;if(!this.h)return Hb(this.i,b,"encrypted",function(){c.g(new B(2,6,6010));}),Promise.resolve();this.m=b;Hb(this.i,this.m,"play",function(){for(var b=0;b<c.D.length;b++)rc(c,c.D[b]);c.oa=!0;c.D=[];});b=this.m.setMediaKeys(this.h);b=b["catch"](function(b){return Promise.reject(new B(2,6,6003,b.message))});var d=sc(this);return Promise.all([b,d]).then(function(){if(c.c)return Promise.reject();tc(c);c.a.initData.length||c.o.length||G(c.i,c.m,"encrypted",function(b){return uc(c,
  b.initDataType,new Uint8Array(b.initData))});})["catch"](function(b){if(!c.c)return Promise.reject(b)})};function sc(b){return t(function d(){var e;return v(d,function(d){switch(d.j){case 1:if(!(b.h&&b.a&&b.a.serverCertificate&&b.a.serverCertificate.length)){d.B(0);break}qa(d,3);return u(d,b.h.setServerCertificate(b.a.serverCertificate),5);case 5:sa(d,0);break;case 3:return e=ta(d),d["return"](Promise.reject(new B(2,6,6004,e.message)))}})})}
  function vc(b,c){return t(function e(){var f,g,h;return v(e,function(e){switch(e.j){case 1:return u(e,wc(b,c),2);case 2:f=e.u;if(!f)return e["return"]();g=[];if(h=b.b.get(f))h.na=new z,g.push(h.na);g.push(f.remove());return u(e,Promise.all(g),0)}})})}function tc(b){var c=b.a?b.a.initData:[];c.forEach(function(c){return xc(b,c.initDataType,c.initData)});b.o.forEach(function(c){return wc(b,c)});c.length||b.o.length||b.l.resolve();return b.l}
  function uc(b,c,d){var e=b.b.values();e=q(e);for(var f=e.next();!f.done;f=e.next())if(bc(d,f.value.initData))return;xc(b,c,d);}n.keySystem=function(){return this.a?this.a.keySystem:""};function yc(b,c){return Qb("Edge/")?!0:b.s.has(c)}function zc(b){b=b.b.keys();b=Ib(b,function(b){return b.sessionId});return Array.from(b)}n.Mb=function(){var b=Infinity,c=this.b.keys();c=q(c);for(var d=c.next();!d.done;d=c.next())d=d.value,isNaN(d.expiration)||(b=Math.min(b,d.expiration));return b};
  function qc(b,c){for(var d=new Set,e=q(c),f=e.next();!f.done;f=e.next()){var g=q(f.value.drmInfos);for(f=g.next();!f.done;f=g.next())d.add(f.value);}e=q(d);for(f=e.next();!f.done;f=e.next())pc(f.value,Kb(b.f.servers),Kb(b.f.advanced||{}));g=b.A?"required":"optional";var h=b.A?["persistent-license"]:["temporary"];e=new Map;d=q(d);for(f=d.next();!f.done;f=d.next())f=f.value,e.set(f.keySystem,{audioCapabilities:[],videoCapabilities:[],distinctiveIdentifier:"optional",persistentState:g,sessionTypes:h,
  label:f.keySystem,drmInfos:[]});d=q(c);for(f=d.next();!f.done;f=d.next()){f=f.value;g=f.audio;h=f.video;var k=g?Mb(g.mimeType,g.codecs):"",l=h?Mb(h.mimeType,h.codecs):"",m=q(f.drmInfos);for(f=m.next();!f.done;f=m.next()){f=f.value;var p=e.get(f.keySystem);p.drmInfos.push(f);f.distinctiveIdentifierRequired&&(p.distinctiveIdentifier="required");f.persistentStateRequired&&(p.persistentState="required");g&&p.audioCapabilities.push({robustness:f.audioRobustness||"",contentType:k});h&&p.videoCapabilities.push({robustness:f.videoRobustness||
  "",contentType:l});}}return e}
  function mc(b,c){if(1==c.size&&c.has(""))return Promise.reject(new B(2,6,6E3));for(var d=q(c.values()),e=d.next();!e.done;e=d.next())e=e.value,0==e.audioCapabilities.length&&delete e.audioCapabilities,0==e.videoCapabilities.length&&delete e.videoCapabilities;var f=d=new z;[!0,!1].forEach(function(b){var d=this;c.forEach(function(c,e){c.drmInfos.some(function(b){return !!b.licenseServerUri})==b&&(f=f["catch"](function(){if(!this.c)return navigator.requestMediaKeySystemAccess(e,[c])}.bind(d)));});}.bind(b));
  f=f["catch"](function(){return Promise.reject(new B(2,6,6001))});f=f.then(function(b){if(this.c)return Promise.reject();this.s.clear();var d=b.getConfiguration(),e=d.videoCapabilities||[],f=q(d.audioCapabilities||[]);for(d=f.next();!d.done;d=f.next())this.s.add(d.value.contentType);e=q(e);for(d=e.next();!d.done;d=e.next())this.s.add(d.value.contentType);e=b.keySystem;d=c.get(b.keySystem);f=[];var g=[],p=[],r=[];Ac(d.drmInfos,f,g,p,r);this.a={keySystem:e,licenseServerUri:f[0],distinctiveIdentifierRequired:"required"==
  d.distinctiveIdentifier,persistentStateRequired:"required"==d.persistentState,audioRobustness:d.audioCapabilities?d.audioCapabilities[0].robustness:"",videoRobustness:d.videoCapabilities?d.videoCapabilities[0].robustness:"",serverCertificate:g[0],initData:p,keyIds:r};return this.a.licenseServerUri?b.createMediaKeys():Promise.reject(new B(2,6,6012))}.bind(b)).then(function(b){if(this.c)return Promise.reject();this.h=b;this.R=!0;}.bind(b))["catch"](function(b){if(!this.c)return this.a=null,this.s.clear(),
  b instanceof B?Promise.reject(b):Promise.reject(new B(2,6,6002,b.message))}.bind(b));d.reject();return f}
  function oc(b){b=Kb(b.f.clearKeys);if(0==b.size)return null;var c=[],d=[];b.forEach(function(b,e){var f=$b(e),g=$b(b);f={kty:"oct",kid:Yb(f,!1),k:Yb(g,!1)};c.push(f);d.push(f.kid);});b=JSON.stringify({keys:c});var e=JSON.stringify({kids:d});e=[{initData:new Uint8Array(Wb(e)),initDataType:"keyids"}];return {keySystem:"org.w3.clearkey",licenseServerUri:"data:application/json;base64,"+window.btoa(b),distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,
  initData:e,keyIds:[]}}
  function wc(b,c){try{var d=b.h.createSession("persistent-license");}catch(g){var e=new B(2,6,6005,g.message);b.g(e);return Promise.reject(e)}G(b.i,d,"message",b.rd.bind(b));G(b.i,d,"keystatuseschange",b.nd.bind(b));var f={initData:null,loaded:!1,qc:Infinity,na:null};b.b.set(d,f);return d.load(c).then(function(b){if(this.c)return Promise.reject();if(b)return f.loaded=!0,Bc(this)&&this.l.resolve(),d;this.b["delete"](d);this.g(new B(2,6,6013));}.bind(b),function(b){this.c||(this.b["delete"](d),this.g(new B(2,
  6,6005,b.message)));}.bind(b))}
  function xc(b,c,d){try{var e=b.A?b.h.createSession("persistent-license"):b.h.createSession();}catch(f){b.g(new B(2,6,6005,f.message));return}G(b.i,e,"message",b.rd.bind(b));G(b.i,e,"keystatuseschange",b.nd.bind(b));b.b.set(e,{initData:d,loaded:!1,qc:Infinity,na:null});e.generateRequest(c,d.buffer)["catch"](function(c){if(!b.c){b.b["delete"](e);if(c.errorCode&&c.errorCode.systemCode){var d=c.errorCode.systemCode;0>d&&(d+=Math.pow(2,32));d="0x"+d.toString(16);}b.g(new B(2,6,6006,c.message,c,d));}});}
  n.rd=function(b){this.f.delayLicenseRequestUntilPlayed&&this.m.paused&&!this.oa?this.D.push(b):rc(this,b);};
  function rc(b,c){var d=c.target,e=b.b.get(d),f=b.a.licenseServerUri,g=b.f.advanced[b.a.keySystem];"individualization-request"==c.messageType&&g&&g.individualizationServer&&(f=g.individualizationServer);f=Ab([f],b.f.retryParameters);f.body=c.message;f.method="POST";f.licenseRequestType=c.messageType;"com.microsoft.playready"!=b.a.keySystem&&"com.chromecast.playready"!=b.a.keySystem||Cc(f);b.v.ob.request(2,f).promise.then(function(b){return this.c?Promise.reject():d.update(b.data).then(function(){var b=
  this;this.v.onEvent(new D("drmsessionupdate"));e&&(e.na&&e.na.resolve(),Dc(Ec).then(function(){e.loaded=!0;Bc(b)&&b.l.resolve();}));}.bind(this))}.bind(b),function(b){this.c||(b=new B(2,6,6007,b),this.g(b),e&&e.na&&e.na.reject(b));}.bind(b))["catch"](function(b){this.c||(b=new B(2,6,6008,b.message),this.g(b),e&&e.na&&e.na.reject(b));}.bind(b));}
  function Cc(b){var c=Ub(b.body,!0,!0);if(c.includes("PlayReadyKeyMessage")){c=(new DOMParser).parseFromString(c,"application/xml");for(var d=c.getElementsByTagName("HttpHeader"),e=0;e<d.length;++e)b.headers[d[e].querySelector("name").textContent]=d[e].querySelector("value").textContent;b.body=Zb(c.querySelector("Challenge").textContent).buffer;}else b.headers["Content-Type"]="text/xml; charset=utf-8";}
  n.nd=function(b){b=b.target;var c=this.b.get(b),d=!1;b.keyStatuses.forEach(function(b,e){if("string"==typeof e){var f=e;e=b;b=f;}if("com.microsoft.playready"==this.a.keySystem&&16==e.byteLength&&!Qb("Tizen")){f=new DataView(e);var g=f.getUint32(0,!0),l=f.getUint16(4,!0),m=f.getUint16(6,!0);f.setUint32(0,g,!1);f.setUint16(4,l,!1);f.setUint16(6,m,!1);}"com.microsoft.playready"==this.a.keySystem&&"status-pending"==b&&(b="usable");"status-pending"!=b&&(c.loaded=!0);"expired"==b&&(d=!0);f=ac(new Uint8Array(e));
  this.va.set(f,b);}.bind(this));var e=b.expiration-Date.now();(0>e||d&&1E3>e)&&c&&!c.na&&(this.b["delete"](b),b.close()["catch"](function(){}));Bc(this)&&(this.l.resolve(),this.P.start(Fc,!1));};function ec(b){var c=b.va,d=b.$;d.clear();c.forEach(function(b,c){return d.set(c,b)});c=Array.from(d.values());c.length&&c.every(function(b){return "expired"==b})&&b.g(new B(2,6,6014));b.v.rc(Lb(d));}
  function Gc(){function b(b){return t(function h(){var c,f,m;return v(h,function(h){switch(h.j){case 1:return qa(h,2),u(h,navigator.requestMediaKeySystemAccess(b,d),4);case 4:return c=h.u,m=(f=c.getConfiguration().sessionTypes)?f.includes("persistent-license"):!1,Qb("Tizen 3")&&(m=!1),e.set(b,{persistentState:m}),u(h,c.createMediaKeys(),5);case 5:sa(h,0);break;case 2:ta(h),e.set(b,null),h.j=0;}})})}var c=[{contentType:'video/mp4; codecs="avc1.42E01E"'},{contentType:'video/webm; codecs="vp8"'}],d=[{videoCapabilities:c,
  persistentState:"required",sessionTypes:["persistent-license"]},{videoCapabilities:c}],e=new Map;c="org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").map(function(c){return b(c)});return Promise.all(c).then(function(){return Lb(e)})}
  function Hc(b,c){var d=c.audio,e=c.video;if(d&&d.encrypted&&!yc(b,Mb(d.mimeType,d.codecs))||e&&e.encrypted&&!yc(b,Mb(e.mimeType,e.codecs)))return !1;var f=b.keySystem();return 0==c.drmInfos.length||c.drmInfos.some(function(b){return b.keySystem==f})}
  function Ic(b,c){if(!b.length)return c;if(!c.length)return b;for(var d=[],e=0;e<b.length;e++)for(var f=0;f<c.length;f++)if(b[e].keySystem==c[f].keySystem){var g=b[e];f=c[f];var h=[];h=h.concat(g.initData||[]);h=h.concat(f.initData||[]);var k=[];k=k.concat(g.keyIds);k=k.concat(f.keyIds);d.push({keySystem:g.keySystem,licenseServerUri:g.licenseServerUri||f.licenseServerUri,distinctiveIdentifierRequired:g.distinctiveIdentifierRequired||f.distinctiveIdentifierRequired,persistentStateRequired:g.persistentStateRequired||
  f.persistentStateRequired,videoRobustness:g.videoRobustness||f.videoRobustness,audioRobustness:g.audioRobustness||f.audioRobustness,serverCertificate:g.serverCertificate||f.serverCertificate,initData:h,keyIds:k});break}return d}function fc(b){b.b.forEach(function(c,d){var e=c.qc,f=d.expiration;isNaN(f)&&(f=Infinity);f!=e&&(b.v.onExpirationUpdated(d.sessionId,f),c.qc=f);});}function Bc(b){b=b.b.values();return Jb(b,function(b){return b.loaded})}
  function Dc(b){return new Promise(function(c){return setTimeout(c,1E3*b)})}function nc(b,c){var d=[];c.forEach(function(b,c){d.push({keySystem:c,licenseServerUri:b,distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:[],keyIds:[]});});for(var e=q(b),f=e.next();!f.done;f=e.next())f.value.drmInfos=d;}
  function Ac(b,c,d,e,f){b.forEach(function(b){c.includes(b.licenseServerUri)||c.push(b.licenseServerUri);b.serverCertificate&&(d.some(function(c){return bc(c,b.serverCertificate)})||d.push(b.serverCertificate));b.initData&&b.initData.forEach(function(b){e.some(function(c){return c.keyId&&c.keyId==b.keyId?!0:c.initDataType==b.initDataType&&bc(c.initData,b.initData)})||e.push(b);});if(b.keyIds)for(var g=0;g<b.keyIds.length;++g)f.includes(b.keyIds[g])||f.push(b.keyIds[g]);});}
  function pc(b,c,d){var e=b.keySystem;if(e){if(c=c.get(e))b.licenseServerUri=c;b.keyIds||(b.keyIds=[]);if(d=d.get(e))b.distinctiveIdentifierRequired||(b.distinctiveIdentifierRequired=d.distinctiveIdentifierRequired),b.persistentStateRequired||(b.persistentStateRequired=d.persistentStateRequired),b.videoRobustness||(b.videoRobustness=d.videoRobustness),b.audioRobustness||(b.audioRobustness=d.audioRobustness),b.serverCertificate||(b.serverCertificate=d.serverCertificate);window.cast&&window.cast.__platform__&&
  "com.microsoft.playready"==b.keySystem&&(b.keySystem="com.chromecast.playready");}}function hc(b){return t(function d(){var e,f;return v(d,function(d){switch(d.j){case 1:return e=b.close().then(function(){return !0}),f=Dc(Jc).then(function(){return !1}),u(d,Promise.race([e,f]),2);case 2:d.j=0;}})})}var Jc=1,Ec=5,Fc=.5;function Kc(){this.a=new muxjs.mp4.CaptionParser;this.g=[];this.f={};}Kc.prototype.init=function(b){var c=muxjs.mp4.probe;b=new Uint8Array(b);this.g=c.videoTrackIds(b);this.f=c.timescale(b);this.a.init();};Kc.prototype.b=function(b,c){var d=new Uint8Array(b);(d=this.a.parse(d,this.g,this.f))&&d.captions&&c(d.captions);this.a.clearParsedCaptions();};Kc.prototype.c=function(){this.a.resetCaptionStream();};function Pc(){}Pc.prototype.init=function(){};Pc.prototype.b=function(){};Pc.prototype.c=function(){};function Qc(b){return !b||1==b.length&&1E-6>b.end(0)-b.start(0)?null:b.length?b.end(b.length-1):null}function Rc(b,c,d){d=void 0===d?0:d;return !b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0)||c>b.end(b.length-1)?!1:c+d>=b.start(0)}function Sc(b,c){if(!b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0))return 0;for(var d=0,e=b.length-1;0<=e&&b.end(e)>c;--e)d+=b.end(e)-Math.max(b.start(e),c);return d}
  function Tc(b){if(!b)return [];for(var c=[],d=0;d<b.length;d++)c.push({start:b.start(d),end:b.end(d)});return c}var H={be:function(b,c){return b.reduce(function(b,c,f){return c["catch"](b.bind(null,f))}.bind(null,c),Promise.reject())},Yb:function(b,c){return b.concat(c)},pb:function(){},wa:function(b){return null!=b}};function Uc(b,c){if(0==c.length)return b;var d=c.map(function(b){return new Qa(b)});return b.map(function(b){return new Qa(b)}).map(function(b){return d.map(b.resolve.bind(b))}).reduce(H.Yb,[]).map(function(b){return b.toString()})}function Vc(b,c){return {keySystem:b,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:c||[],keyIds:[]}}var Wc={Sd:"video",Nd:"audio",Pa:"text",Tf:"application"},Xc=1/15;function Yc(){this.a=new muxjs.mp4.Transmuxer({keepOriginalTimestamps:!0});this.b=null;this.g=[];this.c=[];this.f=!1;this.a.on("data",this.i.bind(this));this.a.on("done",this.h.bind(this));}Yc.prototype.destroy=function(){this.a.dispose();this.a=null;return Promise.resolve()};function Zc(b,c){return window.muxjs&&"mp2t"==b.split(";")[0].split("/")[1]?c?MediaSource.isTypeSupported($c(c,b)):MediaSource.isTypeSupported($c("audio",b))||MediaSource.isTypeSupported($c("video",b)):!1}
  function $c(b,c){var d=c.replace("mp2t","mp4");"audio"==b&&(d=d.replace("video","audio"));var e=/avc1\.(66|77|100)\.(\d+)/.exec(d);if(e){var f="avc1.",g=e[1],h=Number(e[2]);f=("66"==g?f+"4200":"77"==g?f+"4d00":f+"6400")+(h>>4).toString(16);f+=(h&15).toString(16);d=d.replace(e[0],f);}return d}function ad(b,c){b.f=!0;b.b=new z;b.g=[];b.c=[];var d=new Uint8Array(c);b.a.push(d);b.a.flush();b.f&&b.b.reject(new B(2,3,3018));return b.b}
  Yc.prototype.i=function(b){this.c=b.captions;var c=new Uint8Array(b.data.byteLength+b.initSegment.byteLength);c.set(b.initSegment,0);c.set(b.data,b.initSegment.byteLength);this.g.push(c);};Yc.prototype.h=function(){var b={data:cc.apply(null,this.g),captions:this.c};this.b.resolve(b);this.f=!1;};function bd(b){this.g=null;this.c=b;this.f=this.m=0;this.h=Infinity;this.b=this.a=null;this.l="";this.i=new Map;}var cd={};y("shaka.text.TextEngine.registerParser",function(b,c){cd[b]=c;});y("shaka.text.TextEngine.unregisterParser",function(b){delete cd[b];});function dd(b){return cd[b]||window.muxjs&&"application/cea-608"==b?!0:!1}bd.prototype.destroy=function(){this.c=this.g=null;this.i.clear();return Promise.resolve()};function ed(b,c){"application/cea-608"!=c&&(b.g=new cd[c]);}
  bd.prototype.fc=function(b){var c={periodStart:0,segmentStart:null,segmentEnd:0};try{return this.g.parseMedia(new Uint8Array(b),c)[0].startTime}catch(d){throw new B(2,2,2009,d);}};
  function fd(b,c,d,e){return Promise.resolve().then(function(){if(this.g&&this.c)if(null==d||null==e)this.g.parseInit(new Uint8Array(c));else{var b={periodStart:this.m,segmentStart:d,segmentEnd:e};b=this.g.parseMedia(new Uint8Array(c),b).filter(function(b){return b.startTime>=this.f&&b.startTime<this.h}.bind(this));this.c.append(b);null==this.a&&(this.a=Math.max(d,this.f));this.b=Math.min(e,this.h);}}.bind(b))}
  bd.prototype.remove=function(b,c){return Promise.resolve().then(function(){!this.c||!this.c.remove(b,c)||null==this.a||c<=this.a||b>=this.b||(b<=this.a&&c>=this.b?this.a=this.b=null:b<=this.a&&c<this.b?this.a=c:b>this.a&&c>=this.b&&(this.b=b));}.bind(this))};bd.prototype.Vd=function(b){this.c.append(b);};bd.prototype.appendCues=bd.prototype.Vd;
  bd.prototype.Tb=function(b,c){this.l=b;var d=this.i.get(b);if(d)for(var e=q(d.keys()),f=e.next();!f.done;f=e.next())if(f=d.get(f.value))f=f.filter(function(b){return b.endTime<=c}),this.c.append(f);};bd.prototype.setSelectedClosedCaptionId=bd.prototype.Tb;
  function gd(b,c,d,e){var f=d+" "+e,g=new Map;c=q(c);for(var h=c.next();!h.done;h=c.next()){var k=h.value;h=k.stream;g.has(h)||g.set(h,new Map);g.get(h).has(f)||g.get(h).set(f,[]);k.startTime>=b.f&&k.startTime<b.h&&(k=new hd(k.startTime,k.endTime,k.text),g.get(h).get(f).push(k),h==b.l&&b.c.append([k]));}f=q(g.keys());for(c=f.next();!c.done;c=f.next())for(c=c.value,b.i.has(c)||b.i.set(c,new Map),h=q(g.get(c).keys()),k=h.next();!k.done;k=h.next()){k=k.value;var l=g.get(c).get(k);b.i.get(c).set(k,l);}b.a=
  null==b.a?Math.max(d,b.f):Math.min(b.a,Math.max(d,b.f));b.b=Math.max(b.b,Math.min(e,b.h));}function id(b,c,d){this.f=b;this.l=d;this.b={};this.a=null;this.c={};this.h=new Eb;this.s=!1;this.i={};this.m=c;b=this.o=new z;c=new MediaSource;Hb(this.h,c,"sourceopen",b.resolve);this.f.src=window.URL.createObjectURL(c);this.g=c;}function jd(b){var c=Mb(b.mimeType,b.codecs),d=Nb(b);return dd(c)||MediaSource.isTypeSupported(d)||Zc(c,b.type)}
  function kd(){var b={};'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function(c){b[c]=dd(c)||
  MediaSource.isTypeSupported(c)||Zc(c);var d=c.split(";")[0];b[d]=b[d]||b[c];});return b}n=id.prototype;
  n.destroy=function(){var b=this;this.s=!0;var c=[],d;for(d in this.c){var e=this.c[d],f=e[0];this.c[d]=e.slice(0,1);f&&c.push(f.p["catch"](H.pb));for(f=1;f<e.length;++f)e[f].p["catch"](H.pb),e[f].p.reject();}this.a&&c.push(this.a.destroy());this.l&&c.push(this.l.destroy());for(var g in this.i)c.push(this.i[g].destroy());return Promise.all(c).then(function(){b.h&&(b.h.L(),b.h=null);b.f&&(b.f.removeAttribute("src"),b.f.load(),b.f=null);b.g=null;b.a=null;b.l=null;b.b={};b.i={};b.m=null;b.c={};})};
  n.init=function(b,c){var d=this;return t(function f(){var g;return v(f,function(f){switch(f.j){case 1:return g=Wc,u(f,d.o,2);case 2:b.forEach(function(b,f){var h=Mb(b.mimeType,b.codecs);f==g.Pa?ld(d,h):(!c&&MediaSource.isTypeSupported(h)||!Zc(h,f)||(d.i[f]=new Yc,h=$c(f,h)),h=d.g.addSourceBuffer(h),G(d.h,h,"error",d.Hf.bind(d,f)),G(d.h,h,"updateend",d.Ya.bind(d,f)),d.b[f]=h,d.c[f]=[]);}),f.j=0;}})})};function ld(b,c){b.a||(b.a=new bd(b.l));ed(b.a,c);}
  function md(b,c){if("text"==c)var d=b.a.a;else d=nd(b,c),d=!d||1==d.length&&1E-6>d.end(0)-d.start(0)?null:1==d.length&&0>d.start(0)?0:d.length?d.start(0):null;return d}function od(b,c){return "text"==c?b.a.b:Qc(nd(b,c))}function pd(b,c,d){if("text"==c)return b=b.a,null==b.b||b.b<d?0:b.b-Math.max(d,b.a);b=nd(b,c);return Sc(b,d)}n.cc=function(){var b=this.a&&null!=this.a.a?[{start:this.a.a,end:this.a.b}]:[];return {total:Tc(this.f.buffered),audio:Tc(nd(this,"audio")),video:Tc(nd(this,"video")),text:b}};
  function nd(b,c){try{return b.b[c].buffered}catch(d){return null}}function qd(b,c,d,e,f,g){if("text"==c)return fd(b.a,d,e,f);if(b.i[c])return ad(b.i[c],d).then(function(b){this.a||ld(this,"text/vtt");b.captions&&gd(this.a,b.captions,e,f);return rd(this,c,this.Hd.bind(this,c,b.data.buffer))}.bind(b));g&&window.muxjs&&(b.a||ld(b,"text/vtt"),null==e&&null==f?b.m.init(d):b.m.b(d,function(c){c.length&&gd(b.a,c,e,f);}));return rd(b,c,b.Hd.bind(b,c,d))}
  n.Tb=function(b){var c=od(this,"video")||0;this.a.Tb(b,c);};n.remove=function(b,c,d){return "text"==b?this.a.remove(c,d):rd(this,b,this.Id.bind(this,b,c,d))};function sd(b,c){if("text"==c){if(!b.a)return Promise.resolve();b.m.c();return b.a.remove(0,Infinity)}return rd(b,c,b.Id.bind(b,c,0,b.g.duration))}n.flush=function(b){return "text"==b?Promise.resolve():rd(this,b,this.he.bind(this,b))};
  function td(b,c,d,e,f){return "text"==c?(b.a.m=d,b=b.a,b.f=e,b.h=f,Promise.resolve()):Promise.all([rd(b,c,b.Td.bind(b,c)),rd(b,c,b.Af.bind(b,c,d)),rd(b,c,b.yf.bind(b,c,e,f))])}n.endOfStream=function(b){return ud(this,function(){b?this.g.endOfStream(b):this.g.endOfStream();}.bind(this))};n.ma=function(b){return ud(this,function(){this.g.duration=b;}.bind(this))};n.T=function(){return this.g.duration};n.Hd=function(b,c){this.b[b].appendBuffer(c);};
  n.Id=function(b,c,d){d<=c?this.Ya(b):this.b[b].remove(c,d);};n.Td=function(b){var c=this.b[b].appendWindowStart,d=this.b[b].appendWindowEnd;this.b[b].abort();this.b[b].appendWindowStart=c;this.b[b].appendWindowEnd=d;this.Ya(b);};n.he=function(b){this.f.currentTime-=.001;this.Ya(b);};n.Af=function(b,c){0>c&&(c+=.001);this.b[b].timestampOffset=c;this.Ya(b);};n.yf=function(b,c,d){this.b[b].appendWindowStart=0;this.b[b].appendWindowEnd=d;this.b[b].appendWindowStart=c;this.Ya(b);};
  n.Hf=function(b){this.c[b][0].p.reject(new B(2,3,3014,this.f.error?this.f.error.code:0));};n.Ya=function(b){var c=this.c[b][0];c&&(c.p.resolve(),vd(this,b));};function rd(b,c,d){if(b.s)return Promise.reject();d={start:d,p:new z};b.c[c].push(d);if(1==b.c[c].length)try{d.start();}catch(e){"QuotaExceededError"==e.name?d.p.reject(new B(2,3,3017,c)):d.p.reject(new B(2,3,3015,e)),vd(b,c);}return d.p}
  function ud(b,c){if(b.s)return Promise.reject();var d=[],e;for(e in b.b){var f=new z,g={start:function(b){b.resolve();}.bind(null,f),p:f};b.c[e].push(g);d.push(f);1==b.c[e].length&&g.start();}return Promise.all(d).then(function(){try{c();}catch(l){var b=Promise.reject(new B(2,3,3015,l));}for(var d in this.b)vd(this,d);return b}.bind(b),function(){return Promise.reject()}.bind(b))}function vd(b,c){b.c[c].shift();var d=b.c[c][0];if(d)try{d.start();}catch(e){d.p.reject(new B(2,3,3015,e)),vd(b,c);}}function wd(b,c){b=I(b);c=I(c);return b.split("-")[0]==c.split("-")[0]}function xd(b,c){b=I(b);c=I(c);var d=b.split("-"),e=c.split("-");return d[0]==e[0]&&1==d.length&&2==e.length}function I(b){var c=b.split("-");b=c[0]||"";c=c[1]||"";b=b.toLowerCase();b=yd.get(b)||b;return (c=c.toUpperCase())?b+"-"+c:b}function zd(b){return b.language?I(b.language):b.audio&&b.audio.language?I(b.audio.language):b.video&&b.video.language?I(b.video.language):"und"}
  function Ad(b,c){for(var d=I(b),e=new Set,f=q(c),g=f.next();!g.done;g=f.next())e.add(I(g.value));f=q(e);for(g=f.next();!g.done;g=f.next())if(g=g.value,g==d)return g;f=q(e);for(g=f.next();!g.done;g=f.next())if(g=g.value,xd(g,d))return g;f=q(e);for(g=f.next();!g.done;g=f.next()){var h=g=g.value,k=d;h=I(h);k=I(k);h=h.split("-");k=k.split("-");if(2==h.length&&2==k.length&&h[0]==k[0])return g}e=q(e);for(g=e.next();!g.done;g=e.next())if(f=g.value,xd(d,f))return f;return null}
  var yd=new Map([["aar","aa"],["abk","ab"],["afr","af"],["aka","ak"],["alb","sq"],["amh","am"],["ara","ar"],["arg","an"],["arm","hy"],["asm","as"],["ava","av"],["ave","ae"],["aym","ay"],["aze","az"],["bak","ba"],["bam","bm"],["baq","eu"],["bel","be"],["ben","bn"],["bih","bh"],["bis","bi"],["bod","bo"],["bos","bs"],["bre","br"],["bul","bg"],["bur","my"],["cat","ca"],["ces","cs"],["cha","ch"],["che","ce"],["chi","zh"],["chu","cu"],["chv","cv"],["cor","kw"],["cos","co"],["cre","cr"],["cym","cy"],["cze",
  "cs"],["dan","da"],["deu","de"],["div","dv"],["dut","nl"],["dzo","dz"],["ell","el"],["eng","en"],["epo","eo"],["est","et"],["eus","eu"],["ewe","ee"],["fao","fo"],["fas","fa"],["fij","fj"],["fin","fi"],["fra","fr"],["fre","fr"],["fry","fy"],["ful","ff"],["geo","ka"],["ger","de"],["gla","gd"],["gle","ga"],["glg","gl"],["glv","gv"],["gre","el"],["grn","gn"],["guj","gu"],["hat","ht"],["hau","ha"],["heb","he"],["her","hz"],["hin","hi"],["hmo","ho"],["hrv","hr"],["hun","hu"],["hye","hy"],["ibo","ig"],["ice",
  "is"],["ido","io"],["iii","ii"],["iku","iu"],["ile","ie"],["ina","ia"],["ind","id"],["ipk","ik"],["isl","is"],["ita","it"],["jav","jv"],["jpn","ja"],["kal","kl"],["kan","kn"],["kas","ks"],["kat","ka"],["kau","kr"],["kaz","kk"],["khm","km"],["kik","ki"],["kin","rw"],["kir","ky"],["kom","kv"],["kon","kg"],["kor","ko"],["kua","kj"],["kur","ku"],["lao","lo"],["lat","la"],["lav","lv"],["lim","li"],["lin","ln"],["lit","lt"],["ltz","lb"],["lub","lu"],["lug","lg"],["mac","mk"],["mah","mh"],["mal","ml"],["mao",
  "mi"],["mar","mr"],["may","ms"],["mkd","mk"],["mlg","mg"],["mlt","mt"],["mon","mn"],["mri","mi"],["msa","ms"],["mya","my"],["nau","na"],["nav","nv"],["nbl","nr"],["nde","nd"],["ndo","ng"],["nep","ne"],["nld","nl"],["nno","nn"],["nob","nb"],["nor","no"],["nya","ny"],["oci","oc"],["oji","oj"],["ori","or"],["orm","om"],["oss","os"],["pan","pa"],["per","fa"],["pli","pi"],["pol","pl"],["por","pt"],["pus","ps"],["que","qu"],["roh","rm"],["ron","ro"],["rum","ro"],["run","rn"],["rus","ru"],["sag","sg"],["san",
  "sa"],["sin","si"],["slk","sk"],["slo","sk"],["slv","sl"],["sme","se"],["smo","sm"],["sna","sn"],["snd","sd"],["som","so"],["sot","st"],["spa","es"],["sqi","sq"],["srd","sc"],["srp","sr"],["ssw","ss"],["sun","su"],["swa","sw"],["swe","sv"],["tah","ty"],["tam","ta"],["tat","tt"],["tel","te"],["tgk","tg"],["tgl","tl"],["tha","th"],["tib","bo"],["tir","ti"],["ton","to"],["tsn","tn"],["tso","ts"],["tuk","tk"],["tur","tr"],["twi","tw"],["uig","ug"],["ukr","uk"],["urd","ur"],["uzb","uz"],["ven","ve"],["vie",
  "vi"],["vol","vo"],["wel","cy"],["wln","wa"],["wol","wo"],["xho","xh"],["yid","yi"],["yor","yo"],["zha","za"],["zho","zh"],["zul","zu"]]);var J={kc:function(b,c,d){function e(b,c,d){return b>=c&&b<=d}var f=b.video;return f&&f.width&&f.height&&!(e(f.width,c.minWidth,Math.min(c.maxWidth,d.width))&&e(f.height,c.minHeight,Math.min(c.maxHeight,d.height))&&e(f.width*f.height,c.minPixels,c.maxPixels))||!e(b.bandwidth,c.minBandwidth,c.maxBandwidth)?!1:!0},Mc:function(b,c,d){var e=!1;b.forEach(function(b){var f=b.allowedByApplication;b.allowedByApplication=J.kc(b,c,d);f!=b.allowedByApplication&&(e=!0);});return e},filterNewPeriod:function(b,
  c,d,e){e.variants=e.variants.filter(function(e){if(b&&b.R&&!Hc(b,e))return !1;var f=e.audio;e=e.video;return f&&!jd(f)||e&&!jd(e)||f&&c&&!J.Nc(f,c)||e&&d&&!J.Nc(e,d)?!1:!0});e.textStreams=e.textStreams.filter(function(b){return dd(Mb(b.mimeType,b.codecs))});},Nc:function(b,c){return b.mimeType!=c.mimeType||b.codecs.split(".")[0]!=c.codecs.split(".")[0]?!1:!0},Hc:function(b){var c=b.audio,d=b.video,e=c?c.codecs:null,f=d?d.codecs:null,g=[];f&&g.push(f);e&&g.push(e);var h=[];d&&h.push(d.mimeType);c&&h.push(c.mimeType);
  h=h[0]||null;var k=[];c&&k.push(c.kind);d&&k.push(d.kind);k=k[0]||null;var l=new Set;c&&c.roles.forEach(function(b){return l.add(b)});d&&d.roles.forEach(function(b){return l.add(b)});b={id:b.id,active:!1,type:"variant",bandwidth:b.bandwidth,language:b.language,label:null,kind:k,width:null,height:null,frameRate:null,mimeType:h,codecs:g.join(", "),audioCodec:e,videoCodec:f,primary:b.primary,roles:Array.from(l),videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,
  originalAudioId:null,originalTextId:null};d&&(b.videoId=d.id,b.originalVideoId=d.originalId,b.width=d.width||null,b.height=d.height||null,b.frameRate=d.frameRate||null,b.videoBandwidth=d.bandwidth||null);c&&(b.audioId=c.id,b.originalAudioId=c.originalId,b.channelsCount=c.channelsCount,b.audioBandwidth=c.bandwidth||null,b.label=c.label);return b},Dc:function(b){return {id:b.id,active:!1,type:"text",bandwidth:0,language:b.language,label:b.label,kind:b.kind||null,width:null,height:null,frameRate:null,
  mimeType:b.mimeType,codecs:b.codecs||null,audioCodec:null,videoCodec:null,primary:b.primary,roles:b.roles,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:b.originalId}},ge:function(b,c){for(var d=0;d<b.variants.length;d++)if(b.variants[d].id==c.id)return b.variants[d];return null},fe:function(b,c){for(var d=0;d<b.textStreams.length;d++)if(b.textStreams[d].id==c.id)return b.textStreams[d];return null},Ua:function(b){return b.allowedByApplication&&
  b.allowedByKeySystem},qe:function(b){return b.filter(function(b){return J.Ua(b)})},Vc:function(b,c){var d=b.filter(function(b){return b.audio&&b.audio.channelsCount}).reduce(function(b,c){var d=c.audio.channelsCount;b[d]?b[d].push(c):b[d]=[c];return b},{}),e=Object.keys(d);if(0==e.length)return b;var f=e.filter(function(b){return b<=c});return f.length?d[Math.max.apply(null,f)]:d[Math.min.apply(null,e)]},Hb:function(b,c,d){var e=b,f=b.filter(function(b){return b.primary});f.length&&(e=f);var g=e.length?
  e[0].language:"";e=e.filter(function(b){return b.language==g});if(c){var h=Ad(I(c),b.map(function(b){return b.language}));h&&(e=b.filter(function(b){return I(b.language)==h}));}if(d){if(b=J.Uc(e,d),b.length)return b}else if(b=e.filter(function(b){return 0==b.roles.length}),b.length)return b;b=e.map(function(b){return b.roles}).reduce(H.Yb,[]);return b.length?J.Uc(e,b[0]):e},Uc:function(b,c){return b.filter(function(b){return b.roles.includes(c)})},bd:function(b,c,d){for(var e=0;e<d.length;e++)if(d[e].audio==
  b&&d[e].video==c)return d[e];return null},Jb:function(b,c){for(var d=b.periods.length-1;0<d;--d)if(c+Xc>=b.periods[d].startTime)return d;return 0},Ea:function(b,c){for(var d=0;d<b.periods.length;++d){var e=b.periods[d];if("text"==c.type)for(var f=0;f<e.textStreams.length;++f){if(e.textStreams[f]==c)return d}else for(f=0;f<e.variants.length;++f){var g=e.variants[f];if(g.audio==c||g.video==c||g.video&&g.video.trickModeVideo==c)return d}}return -1},ee:function(b,c){for(var d=0;d<b.periods.length;++d)for(var e=
  b.periods[d],f=0;f<e.variants.length;++f)if(e.variants[f]==c)return d;return -1},Ce:function(b){return "audio"==b.type},Fe:function(b){return "video"==b.type},Zc:function(b){var c=[];b.periods.forEach(function(b){b.variants.forEach(function(b){c.push(b);});});return c},xe:function(b){var c=[];b.audio&&c.push(b.audio);b.video&&c.push(b.video);return c},Yf:function(b){return J.Ce(b)?"type=audio codecs="+b.codecs+" bandwidth="+b.bandwidth+" channelsCount="+b.channelsCount:J.Fe(b)?"type=video codecs="+b.codecs+
  " bandwidth="+b.bandwidth+" frameRate="+b.frameRate+" width="+b.width+" height="+b.height:"unexpected stream type"}};function K(){this.h=null;this.f=!1;this.b=new La;this.c=[];this.i=!1;this.a=this.g=null;}y("shaka.abr.SimpleAbrManager",K);K.prototype.stop=function(){this.h=null;this.f=!1;this.c=[];this.g=null;};K.prototype.stop=K.prototype.stop;K.prototype.init=function(b){this.h=b;};K.prototype.init=K.prototype.init;
  K.prototype.chooseVariant=function(){var b=Bd(this.a.restrictions,this.c),c=this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.c.length&&!b.length&&(b=Bd(null,this.c),b=[b[0]]);for(var d=b[0]||null,e=0;e<b.length;++e){var f=b[e],g=(b[e+1]||{bandwidth:Infinity}).bandwidth/this.a.bandwidthUpgradeTarget;c>=f.bandwidth/this.a.bandwidthDowngradeTarget&&c<=g&&(d=f);}this.g=Date.now();return d};K.prototype.chooseVariant=K.prototype.chooseVariant;K.prototype.enable=function(){this.f=!0;};
  K.prototype.enable=K.prototype.enable;K.prototype.disable=function(){this.f=!1;};K.prototype.disable=K.prototype.disable;K.prototype.segmentDownloaded=function(b,c){var d=this.b;if(!(16E3>c)){var e=8E3*c/b,f=b/1E3;d.a+=c;Ia(d.b,f,e);Ia(d.c,f,e);}if(null!=this.g&&this.f)a:{if(!this.i){if(!(128E3<=this.b.a))break a;this.i=!0;}else if(Date.now()-this.g<1E3*this.a.switchInterval)break a;d=this.chooseVariant();this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.h(d);}};
  K.prototype.segmentDownloaded=K.prototype.segmentDownloaded;K.prototype.getBandwidthEstimate=function(){return this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate)};K.prototype.getBandwidthEstimate=K.prototype.getBandwidthEstimate;K.prototype.setVariants=function(b){this.c=b;};K.prototype.setVariants=K.prototype.setVariants;K.prototype.configure=function(b){this.a=b;};K.prototype.configure=K.prototype.configure;
  function Bd(b,c){b&&(c=c.filter(function(c){return J.kc(c,b,{width:Infinity,height:Infinity})}));return c.sort(function(b,c){return b.bandwidth-c.bandwidth})}function Cd(b,c){this.a=b;this.b=c;}Cd.prototype.toString=function(){return "v"+this.a+"."+this.b};function Dd(b,c){var d=new Cd(2,6),e=Ed,f=e.a,g=d.b-f.b;(0<(d.a-f.a||g)?e.c:e.b)(e.a,d,b,c);}function Fd(b,c,d,e){Na([d,"has been deprecated and will be removed in",c,". We are currently at version",b,". Additional information:",e].join(" "));}function Gd(b,c,d,e){Ma([d,"has been deprecated and has been removed in",c,". We are now at version",b,". Additional information:",e].join(""));}var Ed=null;var Hd="ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),Id="buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),Jd=["loop","playbackRate"],Kd=["pause","play"],Ld="adaptation buffering emsg error loading streaming texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged unloading variantchanged textchanged".split(" "),Md={getAssetUri:2,getAudioLanguages:2,
  getAudioLanguagesAndRoles:2,getBufferedInfo:2,getConfiguration:2,getExpiration:2,getPlaybackRate:2,getTextLanguages:2,getTextLanguagesAndRoles:2,getTextTracks:2,getStats:5,getVariantTracks:2,isAudioOnly:10,isBuffering:1,isInProgress:1,isLive:10,isTextTrackVisible:1,keySystem:10,seekRange:1,usingEmbeddedTextTrack:2},Nd={getPlayheadTimeAsDate:1,getPresentationStartTimeAsDate:20},Od=[["getConfiguration","configure"]],Pd=[["isTextTrackVisible","setTextTrackVisibility"]],Qd="addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectEmbeddedTextTrack selectTextLanguage selectTextTrack selectVariantTrack setTextTrackVisibility trickPlay".split(" "),
  Rd=["attach","detach","load","unload"];
  function Sd(b){return JSON.stringify(b,function(b,d){if("function"!=typeof d){if(d instanceof Event||d instanceof D){var c={},f;for(f in d){var g=d[f];g&&"object"==typeof g?"detail"==f&&(c[f]=g):f in Event||(c[f]=g);}return c}if(d instanceof TimeRanges)for(c={__type__:"TimeRanges",length:d.length,start:[],end:[]},f=0;f<d.length;++f)c.start.push(d.start(f)),c.end.push(d.end(f));else c=d instanceof Uint8Array?{__type__:"Uint8Array",entries:Array.from(d)}:"number"==typeof d?isNaN(d)?"NaN":isFinite(d)?
  d:0>d?"-Infinity":"Infinity":d;return c}})}function Td(b){return JSON.parse(b,function(b,d){return "NaN"==d?NaN:"-Infinity"==d?-Infinity:"Infinity"==d?Infinity:d&&"object"==typeof d&&"TimeRanges"==d.__type__?Ud(d):d&&"object"==typeof d&&"Uint8Array"==d.__type__?new Uint8Array(d.entries):d})}function Ud(b){return {length:b.length,start:function(c){return b.start[c]},end:function(c){return b.end[c]}}}function Vd(b,c,d,e,f,g){this.P=b;this.g=c;this.R=d;this.l=!1;this.D=e;this.M=f;this.v=g;this.b=this.h=!1;this.A="";this.i=null;this.m=this.ld.bind(this);this.o=this.Me.bind(this);this.a={video:{},player:{}};this.s=0;this.c={};this.f=null;}var Wd=!1,Xd=null;n=Vd.prototype;n.destroy=function(){Yd(this);Xd&&Zd(this);this.M=this.D=this.g=null;this.b=this.h=!1;this.o=this.m=this.f=this.c=this.a=this.i=null;return Promise.resolve()};n.ba=function(){return this.b};n.vc=function(){return this.A};
  n.init=function(){if(window.chrome&&chrome.cast&&chrome.cast.isAvailable){delete window.__onGCastApiAvailable;this.h=!0;this.g();var b=new chrome.cast.SessionRequest(this.P);b=new chrome.cast.ApiConfig(b,this.md.bind(this),this.Se.bind(this),"origin_scoped");chrome.cast.initialize(b,function(){},function(){});Wd&&setTimeout(this.g.bind(this),20);(b=Xd)&&b.status!=chrome.cast.SessionStatus.STOPPED?this.md(b):Xd=null;}else window.__onGCastApiAvailable=function(b){b&&this.init();}.bind(this);};
  n.zc=function(b){this.i=b;this.b&&$d({type:"appData",appData:this.i});};n.cast=function(b){if(!this.h)return Promise.reject(new B(1,8,8E3));if(!Wd)return Promise.reject(new B(1,8,8001));if(this.b)return Promise.reject(new B(1,8,8002));this.f=new z;chrome.cast.requestSession(this.sc.bind(this,b),this.kd.bind(this));return this.f};n.Kb=function(){this.b&&(Yd(this),Xd&&(Zd(this),Xd.stop(function(){},function(){}),Xd=null));};
  n.get=function(b,c){if("video"==b){if(Kd.includes(c))return this.yd.bind(this,b,c)}else if("player"==b){if(Nd[c]&&!this.get("player","isLive")())return function(){};if(Qd.includes(c))return this.yd.bind(this,b,c);if(Rd.includes(c))return this.mf.bind(this,b,c);if(Md[c])return this.vd.bind(this,b,c)}return this.vd(b,c)};n.set=function(b,c,d){this.a[b][c]=d;$d({type:"set",targetName:b,property:c,value:d});};
  n.sc=function(b,c){Xd=c;c.addUpdateListener(this.m);c.addMessageListener("urn:x-cast:com.google.shaka.v2",this.o);this.ld();$d({type:"init",initState:b,appData:this.i});this.f.resolve();};n.kd=function(b){var c=8003;switch(b.code){case "cancel":c=8004;break;case "timeout":c=8005;break;case "receiver_unavailable":c=8006;}this.f.reject(new B(2,8,c,b));};n.vd=function(b,c){return this.a[b][c]};
  n.yd=function(b,c,d){for(var e=[],f=2;f<arguments.length;++f)e[f-2]=arguments[f];$d({type:"call",targetName:b,methodName:c,args:e});};n.mf=function(b,c,d){for(var e=[],f=2;f<arguments.length;++f)e[f-2]=arguments[f];f=new z;var g=this.s.toString();this.s++;this.c[g]=f;$d({type:"asyncCall",targetName:b,methodName:c,args:e,id:g});return f};n.md=function(b){var c=this.v();this.f=new z;this.l=!0;this.sc(c,b);};n.Se=function(b){Wd="available"==b;this.g();};
  function Zd(b){var c=Xd;c.removeUpdateListener(b.m);c.removeMessageListener("urn:x-cast:com.google.shaka.v2",b.o);}n.ld=function(){var b=Xd?"connected"==Xd.status:!1;if(this.b&&!b){this.M();for(var c in this.a)this.a[c]={};Yd(this);}this.A=(this.b=b)?Xd.receiver.friendlyName:"";this.g();};function Yd(b){for(var c in b.c){var d=b.c[c];delete b.c[c];d.reject(new B(1,7,7E3));}}
  n.Me=function(b,c){var d=Td(c);switch(d.type){case "event":var e=d.event;this.D(d.targetName,new D(e.type,e));break;case "update":e=d.update;for(var f in e){d=this.a[f]||{};for(var g in e[f])d[g]=e[f][g];}this.l&&(this.R(),this.l=!1);break;case "asyncComplete":if(f=d.id,d=d.error,g=this.c[f],delete this.c[f],g)if(d){f=new B(d.severity,d.category,d.code);for(e in d)f[e]=d[e];g.reject(f);}else g.resolve();}};function $d(b){b=Sd(b);Xd.sendMessage("urn:x-cast:com.google.shaka.v2",b,function(){},Oa);}function L(b,c,d){E.call(this);this.c=b;this.b=c;this.i=this.g=this.f=this.l=this.h=null;this.a=new Vd(d,this.Cf.bind(this),this.Df.bind(this),this.Ef.bind(this),this.Ff.bind(this),this.$c.bind(this));ae(this);}Ga(L,E);y("shaka.cast.CastProxy",L);L.prototype.destroy=function(b){b&&this.a&&this.a.Kb();this.i&&(this.i.L(),this.i=null);b=[];this.b&&(b.push(this.b.destroy()),this.b=null);this.a&&(b.push(this.a.destroy()),this.a=null);this.l=this.h=this.c=null;return Promise.all(b)};
  L.prototype.destroy=L.prototype.destroy;L.prototype.ze=function(){return this.h};L.prototype.getVideo=L.prototype.ze;L.prototype.re=function(){return this.l};L.prototype.getPlayer=L.prototype.re;L.prototype.Xd=function(){return this.a?this.a.h&&Wd:!1};L.prototype.canCast=L.prototype.Xd;L.prototype.ba=function(){return this.a?this.a.ba():!1};L.prototype.isCasting=L.prototype.ba;L.prototype.vc=function(){return this.a?this.a.vc():""};L.prototype.receiverName=L.prototype.vc;
  L.prototype.cast=function(){var b=this.$c();return this.a.cast(b).then(function(){if(this.b)return this.b.xb()}.bind(this))};L.prototype.cast=L.prototype.cast;L.prototype.zc=function(b){this.a.zc(b);};L.prototype.setAppData=L.prototype.zc;L.prototype.Jf=function(){var b=this.a;if(b.b){var c=b.v();chrome.cast.requestSession(b.sc.bind(b,c),b.kd.bind(b));}};L.prototype.suggestDisconnect=L.prototype.Jf;L.prototype.Kb=function(){this.a.Kb();};L.prototype.forceDisconnect=L.prototype.Kb;
  function ae(b){b.a.init();b.i=new Eb;Hd.forEach(function(b){G(this.i,this.c,b,this.Rf.bind(this));}.bind(b));Ld.forEach(function(b){G(this.i,this.b,b,this.gf.bind(this));}.bind(b));b.h={};for(var c in b.c)Object.defineProperty(b.h,c,{configurable:!1,enumerable:!0,get:b.Qf.bind(b,c),set:b.Sf.bind(b,c)});b.l={};for(var d in b.b)Object.defineProperty(b.l,d,{configurable:!1,enumerable:!0,get:b.ud.bind(b,d)});b.f=new E;b.f.zb=b.h;b.g=new E;b.g.zb=b.l;}n=L.prototype;
  n.$c=function(){var b={video:{},player:{},playerAfterLoad:{},manifest:this.b.bc(),startTime:null};this.c.pause();Jd.forEach(function(c){b.video[c]=this.c[c];}.bind(this));this.c.ended||(b.startTime=this.c.currentTime);Od.forEach(function(c){var d=c[1];c=this.b[c[0]]();b.player[d]=c;}.bind(this));Pd.forEach(function(c){var d=c[1];c=this.b[c[0]]();b.playerAfterLoad[d]=c;}.bind(this));return b};n.Cf=function(){this.dispatchEvent(new D("caststatuschanged"));};
  n.Df=function(){this.f.dispatchEvent(new D(this.h.paused?"pause":"play"));};
  n.Ff=function(){var b=this;Od.forEach(function(b){var c=b[1];b=this.a.get("player",b[0])();this.b[c](b);}.bind(this));var c=this.a.get("player","getAssetUri")(),d=this.a.get("video","ended"),e=Promise.resolve(),f=this.c.autoplay,g=null;d||(g=this.a.get("video","currentTime"));c&&(this.c.autoplay=!1,e=this.b.load(c,g));var h={};Jd.forEach(function(b){h[b]=this.a.get("video",b);}.bind(this));e.then(function(){b.c&&(Jd.forEach(function(b){this.c[b]=h[b];}.bind(b)),Pd.forEach(function(b){var c=b[1];b=this.a.get("player",
  b[0])();this.b[c](b);}.bind(b)),b.c.autoplay=f,c&&b.c.play());},function(c){b.b.dispatchEvent(new D("error",{detail:c}));});};n.Qf=function(b){if("addEventListener"==b)return this.f.addEventListener.bind(this.f);if("removeEventListener"==b)return this.f.removeEventListener.bind(this.f);if(this.a.ba()&&0==Object.keys(this.a.a.video).length){var c=this.c[b];if("function"!=typeof c)return c}return this.a.ba()?this.a.get("video",b):(b=this.c[b],"function"==typeof b&&(b=b.bind(this.c)),b)};
  n.Sf=function(b,c){this.a.ba()?this.a.set("video",b,c):this.c[b]=c;};n.Rf=function(b){this.a.ba()||this.f.dispatchEvent(new D(b.type,b));};
  n.ud=function(b){if("addEventListener"==b)return this.g.addEventListener.bind(this.g);if("removeEventListener"==b)return this.g.removeEventListener.bind(this.g);if("getMediaElement"==b)return function(){return this.h}.bind(this);if("getSharedConfiguration"==b)return this.a.get("player","getConfiguration");if("getNetworkingEngine"==b)return this.b.ib.bind(this.b);if(this.a.ba()){if("getManifest"==b||"drmInfo"==b)return function(){Na(b+"() does not work while casting!");return null};if("getManifestUri"==
  b)return Dd("getManifestUri",'Please use "getAssetUri" instead.'),this.ud("getAssetUri");if("attach"==b||"detach"==b)return function(){Na(b+"() does not work while casting!");return Promise.resolve()}}return this.a.ba()&&0==Object.keys(this.a.a.video).length&&Md[b]||!this.a.ba()?this.b[b].bind(this.b):this.a.get("player",b)};n.gf=function(b){this.a.ba()||this.g.dispatchEvent(b);};n.Ef=function(b,c){this.a.ba()&&("video"==b?this.f.dispatchEvent(c):"player"==b&&this.g.dispatchEvent(c));};function be(b,c,d,e){E.call(this);this.a=b;this.b=c;this.c=new Eb;this.v={video:b,player:c};this.A=d||function(){};this.D=e||function(b){return b};this.s=!1;this.h=!0;this.g=0;this.o=!1;this.l=!0;this.m=this.i=this.f=null;ce(this);}Ga(be,E);y("shaka.cast.CastReceiver",be);be.prototype.isConnected=function(){return this.s};be.prototype.isConnected=be.prototype.isConnected;be.prototype.Ee=function(){return this.h};be.prototype.isIdle=be.prototype.Ee;
  be.prototype.destroy=function(){var b=this;return t(function d(){var e,f;return v(d,function(d){switch(d.j){case 1:return b.c&&(b.c.L(),b.c=null),e=[],b.b&&(e.push(b.b.destroy()),b.b=null),null!=b.m&&window.clearTimeout(b.m),b.a=null,b.v=null,b.A=null,b.s=!1,b.h=!0,b.f=null,b.i=null,b.m=null,u(d,Promise.all(e),2);case 2:f=cast.receiver.CastReceiverManager.getInstance(),f.stop(),d.j=0;}})})};be.prototype.destroy=be.prototype.destroy;
  function ce(b){var c=cast.receiver.CastReceiverManager.getInstance();c.onSenderConnected=b.qd.bind(b);c.onSenderDisconnected=b.qd.bind(b);c.onSystemVolumeChanged=b.de.bind(b);b.i=c.getCastMessageBus("urn:x-cast:com.google.cast.media");b.i.onMessage=b.Ie.bind(b);b.f=c.getCastMessageBus("urn:x-cast:com.google.shaka.v2");b.f.onMessage=b.Ve.bind(b);c.start();Hd.forEach(function(b){G(this.c,this.a,b,this.wd.bind(this,"video"));}.bind(b));Ld.forEach(function(b){G(this.c,this.b,b,this.wd.bind(this,"player"));}.bind(b));
  cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?b.b.Ac(3840,2160):b.b.Ac(1920,1080);G(b.c,b.a,"loadeddata",function(){this.o=!0;}.bind(b));G(b.c,b.b,"loading",function(){this.h=!1;de(this);}.bind(b));G(b.c,b.a,"playing",function(){this.h=!1;de(this);}.bind(b));G(b.c,b.a,"pause",function(){de(this);}.bind(b));G(b.c,b.b,"unloading",function(){this.h=!0;de(this);}.bind(b));G(b.c,b.a,"ended",function(){window.setTimeout(function(){this.a&&this.a.ended&&
  (this.h=!0,de(this));}.bind(this),5E3);}.bind(b));}n=be.prototype;n.qd=function(){this.g=0;this.l=!0;this.s=0!=cast.receiver.CastReceiverManager.getInstance().getSenders().length;de(this);};function de(b){Promise.resolve().then(function(){this.b&&(this.dispatchEvent(new D("caststatuschanged")),ee(this)||fe(this,0));}.bind(b));}
  function ge(b,c,d){for(var e in c.player)b.b[e](c.player[e]);b.A(d);d=Promise.resolve();var f=b.a.autoplay;c.manifest&&(b.a.autoplay=!1,d=b.b.load(c.manifest,c.startTime));d.then(function(){if(b.b){for(var d in c.video)b.a[d]=c.video[d];for(var e in c.playerAfterLoad)b.b[e](c.playerAfterLoad[e]);b.a.autoplay=f;c.manifest&&(b.a.play(),fe(b,0));}},function(c){b.b.dispatchEvent(new D("error",{detail:c}));});}n.wd=function(b,c){this.b&&(this.tc(),he(this,{type:"event",targetName:b,event:c},this.f));};
  n.tc=function(){null!=this.m&&window.clearTimeout(this.m);this.m=window.setTimeout(this.tc.bind(this),500);var b={video:{},player:{}};Id.forEach(function(c){b.video[c]=this.a[c];}.bind(this));if(this.b.U())for(var c in Nd)0==this.g%Nd[c]&&(b.player[c]=this.b[c]());for(var d in Md)0==this.g%Md[d]&&(b.player[d]=this.b[d]());if(c=cast.receiver.CastReceiverManager.getInstance().getSystemVolume())b.video.volume=c.level,b.video.muted=c.muted;this.o&&(this.g+=1);he(this,{type:"update",update:b},this.f);ee(this);};
  function ee(b){return b.l&&(b.a.duration||b.b.U())?(ie(b),b.l=!1,!0):!1}function ie(b){var c={contentId:b.b.bc(),streamType:b.b.U()?"LIVE":"BUFFERED",duration:b.a.duration,contentType:""};fe(b,0,c);}n.de=function(){var b=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();b&&he(this,{type:"update",update:{video:{volume:b.level,muted:b.muted}}},this.f);he(this,{type:"event",targetName:"video",event:{type:"volumechange"}},this.f);};
  n.Ve=function(b){var c=Td(b.data);switch(c.type){case "init":this.g=0;this.o=!1;this.l=!0;ge(this,c.initState,c.appData);this.tc();break;case "appData":this.A(c.appData);break;case "set":var d=c.targetName,e=c.property;c=c.value;if("video"==d){var f=cast.receiver.CastReceiverManager.getInstance();if("volume"==e){f.setSystemVolumeLevel(c);break}else if("muted"==e){f.setSystemVolumeMuted(c);break}}this.v[d][e]=c;break;case "call":d=this.v[c.targetName];d[c.methodName].apply(d,c.args);break;case "asyncCall":d=
  c.targetName;e=c.methodName;"player"==d&&"load"==e&&(this.g=0,this.o=!1);f=c.id;b=b.senderId;var g=this.v[d];c=g[e].apply(g,c.args);"player"==d&&"load"==e&&(c=c.then(function(){this.l=!0;}.bind(this)));c.then(this.Dd.bind(this,b,f,null),this.Dd.bind(this,b,f));}};
  n.Ie=function(b){var c=Td(b.data);switch(c.type){case "PLAY":this.a.play();fe(this,0);break;case "PAUSE":this.a.pause();fe(this,0);break;case "SEEK":b=c.currentTime;var d=c.resumeState;null!=b&&(this.a.currentTime=Number(b));d&&"PLAYBACK_START"==d?(this.a.play(),fe(this,0)):d&&"PLAYBACK_PAUSE"==d&&(this.a.pause(),fe(this,0));break;case "STOP":this.b.xb().then(function(){this.b&&fe(this,0);}.bind(this));break;case "GET_STATUS":fe(this,Number(c.requestId));break;case "VOLUME":d=c.volume;b=d.level;d=
  d.muted;var e=this.a.volume,f=this.a.muted;null!=b&&(this.a.volume=Number(b));null!=d&&(this.a.muted=d);e==this.a.volume&&f==this.a.muted||fe(this,0);break;case "LOAD":this.g=0;this.l=this.o=!1;b=c.currentTime;d=this.D(c.media.contentId);this.a.autoplay=!0;this.b.load(d,b).then(function(){this.b&&ie(this);}.bind(this))["catch"](function(b){var d="LOAD_FAILED";7==b.category&&7E3==b.code&&(d="LOAD_CANCELLED");he(this,{requestId:Number(c.requestId),type:d},this.i);}.bind(this));break;default:he(this,{requestId:Number(c.requestId),
  type:"INVALID_REQUEST",reason:"INVALID_COMMAND"},this.i);}};n.Dd=function(b,c,d){this.b&&he(this,{type:"asyncComplete",id:c,error:d},this.f,b);};function he(b,c,d,e){b.s&&(b=Sd(c),e?d.getCastChannel(e).send(b):d.broadcast(b));}
  function fe(b,c,d){var e=b.a.playbackRate;var f=je;f=b.h?f.IDLE:b.b.fd()?f.Od:b.a.paused?f.Qd:f.Rd;e={mediaSessionId:0,playbackRate:e,playerState:f,currentTime:b.a.currentTime,supportedMediaCommands:15,volume:{level:b.a.volume,muted:b.a.muted}};d&&(e.media=d);he(b,{requestId:c,type:"MEDIA_STATUS",status:[e]},b.i);}var je={IDLE:"IDLE",Rd:"PLAYING",Od:"BUFFERING",Qd:"PAUSED"};var M={Ib:function(b,c){var d=M.N(b,c);return 1!=d.length?null:d[0]},Wc:function(b,c,d){b=M.Xc(b,c,d);return 1!=b.length?null:b[0]},N:function(b,c){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&b.tagName==c})},Xc:function(b,c,d){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&b.localName==d&&b.namespaceURI==c})},getAttributeNS:function(b,c,d){return b.hasAttributeNS(c,d)?b.getAttributeNS(c,d):null},Lb:function(b){return Array.prototype.every.call(b.childNodes,
  function(b){return b.nodeType==Node.TEXT_NODE||b.nodeType==Node.CDATA_SECTION_NODE})?b.textContent.trim():null},G:function(b,c,d,e){e=void 0===e?null:e;var f=null;b=b.getAttribute(c);null!=b&&(f=d(b));return null==f?e:f},cf:function(b){if(!b)return null;/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(b)&&(b+="Z");b=Date.parse(b);return isNaN(b)?null:Math.floor(b/1E3)},sa:function(b){if(!b)return null;b=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(b);
  if(!b)return null;b=31536E3*Number(b[1]||null)+2592E3*Number(b[2]||null)+86400*Number(b[3]||null)+3600*Number(b[4]||null)+60*Number(b[5]||null)+Number(b[6]||null);return isFinite(b)?b:null},Rb:function(b){var c=/([0-9]+)-([0-9]+)/.exec(b);if(!c)return null;b=Number(c[1]);if(!isFinite(b))return null;c=Number(c[2]);return isFinite(c)?{start:b,end:c}:null},parseInt:function(b){b=Number(b);return 0===b%1?b:null},Qb:function(b){b=Number(b);return 0===b%1&&0<b?b:null},Za:function(b){b=Number(b);return 0===
  b%1&&0<=b?b:null},parseFloat:function(b){b=Number(b);return isNaN(b)?null:b},ce:function(b){var c;b=(c=b.match(/^(\d+)\/(\d+)$/))?Number(c[1]/c[2]):Number(b);return isNaN(b)?null:b},td:function(b,c){var d=new DOMParser;try{var e=d.parseFromString(b,"text/xml");}catch(g){}if(e&&e.documentElement.tagName==c)var f=e.documentElement;return f&&0<f.getElementsByTagName("parsererror").length?null:f},sd:function(b,c){try{var d=Sb(b);return M.td(d,c)}catch(e){}}};var ke=(new Map).set("urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b","org.w3.clearkey").set("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed","com.widevine.alpha").set("urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95","com.microsoft.playready").set("urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb","com.adobe.primetime");
  function le(b,c,d){var e=me(b),f=null;b=[];var g=[],h=new Set(e.map(function(b){return b.keyId}));h["delete"](null);if(1<h.size)throw new B(2,4,4010);d||(g=e.filter(function(b){return "urn:mpeg:dash:mp4protection:2011"==b.Bd?(f=b.init||f,!1):!0}),g.length&&(b=ne(f,c,g),0==b.length&&(b=[Vc("",f)])));if(e.length&&(d||!g.length))for(b=[],c=q(ke.values()),d=c.next();!d.done;d=c.next())d=d.value,"org.w3.clearkey"!=d&&b.push(Vc(d,f));if(h=Array.from(h)[0]||null)for(c=q(b),d=c.next();!d.done;d=c.next())for(d=
  q(d.value.initData),e=d.next();!e.done;e=d.next())e.value.keyId=h;return {Pc:h,Xf:f,drmInfos:b,Yc:!0}}function oe(b,c,d,e){var f=le(b,c,e);if(d.Yc){b=1==d.drmInfos.length&&!d.drmInfos[0].keySystem;c=0==f.drmInfos.length;if(0==d.drmInfos.length||b&&!c)d.drmInfos=f.drmInfos;d.Yc=!1;}else if(0<f.drmInfos.length&&(d.drmInfos=d.drmInfos.filter(function(b){return f.drmInfos.some(function(c){return c.keySystem==b.keySystem})}),0==d.drmInfos.length))throw new B(2,4,4008);return f.Pc||d.Pc}
  function pe(b){var c=0,d=(new DataView(b)).getUint32(c,!0);if(d!==b.byteLength)return [];c+=6;d=[];for(var e=new DataView(b);c<b.byteLength-1;){var f=e.getUint16(c,!0);c+=2;var g=e.getUint16(c,!0);c+=2;var h=new Uint8Array(b,c,g);d.push({type:f,value:h});c+=g;}return d}function qe(b){return (b=b.querySelector("DATA > LA_URL"))?b.textContent:""}
  function ne(b,c,d){var e=[];d=q(d);for(var f=d.next();!f.done;f=d.next()){f=f.value;var g=ke.get(f.Bd);if(g){var h=Vc(g,f.init||b);if(g=re.get(g))h.licenseServerUri=g(f);e.push(h);}else for(f=c(f.node)||[],f=q(f),h=f.next();!h.done;h=f.next())e.push(h.value);}return e}
  var re=(new Map).set("com.widevine.alpha",function(b){return (b=M.Wc(b.node,"urn:microsoft","laurl"))?b.getAttribute("licenseUrl")||"":""}).set("com.microsoft.playready",function(b){b=M.Wc(b.node,"urn:microsoft:playready","pro");if(!b)return "";b=Zb(b.textContent);b=pe(b.buffer).filter(function(b){return 1===b.type})[0];if(!b)return "";b=Ub(b.value,!0);return (b=M.td(b,"WRMHEADER"))?qe(b):""});function me(b){var c=[];b=q(b);for(var d=b.next();!d.done;d=b.next())(d=se(d.value))&&c.push(d);return c}
  function se(b){var c=b.getAttribute("schemeIdUri"),d=M.getAttributeNS(b,"urn:mpeg:cenc:2013","default_KID"),e=M.Xc(b,"urn:mpeg:cenc:2013","pssh").map(M.Lb);if(!c)return null;c=c.toLowerCase();if(d&&(d=d.replace(/-/g,"").toLowerCase(),d.includes(" ")))throw new B(2,4,4009);var f=[];try{f=e.map(function(b){return {initDataType:"cenc",initData:Zb(b),keyId:null}});}catch(g){throw new B(2,4,4007);}return {node:b,Bd:c,keyId:d,init:0<f.length?f:null}}function te(b,c,d,e,f){var g={RepresentationID:c,Number:d,Bandwidth:e,Time:f};return b.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,function(b,c,d,e){if("$$"==b)return "$";var f=g[c];if(null==f)return b;"RepresentationID"==c&&d&&(d=void 0);"Time"==c&&(f=Math.round(f));switch(e){case void 0:case "d":case "i":case "u":b=f.toString();break;case "o":b=f.toString(8);break;case "x":b=f.toString(16);break;case "X":b=f.toString(16).toUpperCase();break;default:b=f.toString();}d=
  window.parseInt(d,10)||1;return Array(Math.max(0,d-b.length)+1).join("0")+b})}
  function ue(b,c){var d=ve(b,c,"timescale"),e=1;d&&(e=M.Qb(d)||1);d=ve(b,c,"duration");(d=M.Qb(d||""))&&(d/=e);var f=ve(b,c,"startNumber"),g=Number(ve(b,c,"presentationTimeOffset"))||0,h=M.Za(f||"");if(null==f||null==h)h=1;var k=we(b,c,"SegmentTimeline");f=null;if(k){f=e;var l=b.O.duration||Infinity;k=M.N(k,"S");for(var m=[],p=0,r=0;r<k.length;++r){var w=k[r],x=M.G(w,"t",M.Za),A=M.G(w,"d",M.Za);w=M.G(w,"r",M.parseInt);null!=x&&(x-=g);if(!A)break;x=null!=x?x:p;w=w||0;if(0>w)if(r+1<k.length){w=M.G(k[r+
  1],"t",M.Za);if(null==w)break;else if(x>=w)break;w=Math.ceil((w-x)/A)-1;}else{if(Infinity==l)break;else if(x/f>=l)break;w=Math.ceil((l*f-x)/A)-1;}0<m.length&&x!=p&&(m[m.length-1].end=x/f);for(var P=0;P<=w;++P)p=x+A,m.push({start:x/f,end:p/f,Nf:x}),x=p;}f=m;}return {timescale:e,V:d,La:h,ga:g/e||0,Gc:g,K:f}}function ve(b,c,d){return [c(b.w),c(b.Y),c(b.ea)].filter(H.wa).map(function(b){return b.getAttribute(d)}).reduce(function(b,c){return b||c})}
  function we(b,c,d){return [c(b.w),c(b.Y),c(b.ea)].filter(H.wa).map(function(b){return M.Ib(b,d)}).reduce(function(b,c){return b||c})}
  function xe(b,c,d,e,f,g){for(var h=M.getAttributeNS(b,"http://www.w3.org/1999/xlink","href"),k=M.getAttributeNS(b,"http://www.w3.org/1999/xlink","actuate")||"onRequest",l=0;l<b.attributes.length;l++){var m=b.attributes[l];"http://www.w3.org/1999/xlink"==m.namespaceURI&&(b.removeAttributeNS(m.namespaceURI,m.localName),--l);}if(5<=g)return jb(new B(2,4,4028));if("onLoad"!=k)return jb(new B(2,4,4027));var p=Uc([e],[h]);return f.request(0,Ab(p,c)).Z(function(e){e=M.sd(e.data,b.tagName);if(!e)return jb(new B(2,
  4,4001,h));for(;b.childNodes.length;)b.removeChild(b.childNodes[0]);for(;e.childNodes.length;){var k=e.childNodes[0];e.removeChild(k);b.appendChild(k);}for(k=0;k<e.attributes.length;k++){var l=e.attributes[k].nodeName,m=e.getAttribute(l);b.setAttribute(l,m);}return ye(b,c,d,p[0],f,g+1)})}
  function ye(b,c,d,e,f,g){g=void 0===g?0:g;if(M.getAttributeNS(b,"http://www.w3.org/1999/xlink","href")){var h=xe(b,c,d,e,f,g);d&&(h=h.Z(void 0,function(){return ye(b,c,d,e,f,g)}));return h}h=[];for(var k=0;k<b.childNodes.length;k++){var l=b.childNodes[k];l instanceof Element&&("urn:mpeg:dash:resolve-to-zero:2013"==M.getAttributeNS(l,"http://www.w3.org/1999/xlink","href")?(b.removeChild(l),--k):"SegmentTimeline"!=l.tagName&&h.push(ye(l,c,d,e,f,g)));}return nb(h).Z(function(){return b})}function ze(b,c,d){this.c=b;this.b=c;this.a=d;}y("shaka.media.InitSegmentReference",ze);ze.prototype.Zb=function(){return this.c()};ze.prototype.createUris=ze.prototype.Zb;ze.prototype.ec=function(){return this.b};ze.prototype.getStartByte=ze.prototype.ec;ze.prototype.dc=function(){return this.a};ze.prototype.getEndByte=ze.prototype.dc;function N(b,c,d,e,f,g){this.position=b;this.startTime=c;this.endTime=d;this.c=e;this.b=f;this.a=g;}y("shaka.media.SegmentReference",N);N.prototype.X=function(){return this.position};
  N.prototype.getPosition=N.prototype.X;N.prototype.fc=function(){return this.startTime};N.prototype.getStartTime=N.prototype.fc;N.prototype.le=function(){return this.endTime};N.prototype.getEndTime=N.prototype.le;N.prototype.Zb=function(){return this.c()};N.prototype.createUris=N.prototype.Zb;N.prototype.ec=function(){return this.b};N.prototype.getStartByte=N.prototype.ec;N.prototype.dc=function(){return this.a};N.prototype.getEndByte=N.prototype.dc;function O(b,c){this.H=b;this.b=c==Ae;this.a=0;}y("shaka.util.DataViewReader",O);var Ae=1;O.Endianness={Uf:0,Vf:Ae};O.prototype.ja=function(){return this.a<this.H.byteLength};O.prototype.hasMoreData=O.prototype.ja;O.prototype.X=function(){return this.a};O.prototype.getPosition=O.prototype.X;O.prototype.me=function(){return this.H.byteLength};O.prototype.getLength=O.prototype.me;O.prototype.fa=function(){try{var b=this.H.getUint8(this.a);this.a+=1;return b}catch(c){Be();}};O.prototype.readUint8=O.prototype.fa;
  O.prototype.rb=function(){try{var b=this.H.getUint16(this.a,this.b);this.a+=2;return b}catch(c){Be();}};O.prototype.readUint16=O.prototype.rb;O.prototype.C=function(){try{var b=this.H.getUint32(this.a,this.b);this.a+=4;return b}catch(c){Be();}};O.prototype.readUint32=O.prototype.C;O.prototype.xd=function(){try{var b=this.H.getInt32(this.a,this.b);this.a+=4;return b}catch(c){Be();}};O.prototype.readInt32=O.prototype.xd;
  O.prototype.ab=function(){try{if(this.b){var b=this.H.getUint32(this.a,!0);var c=this.H.getUint32(this.a+4,!0);}else c=this.H.getUint32(this.a,!1),b=this.H.getUint32(this.a+4,!1);}catch(d){Be();}if(2097151<c)throw new B(2,3,3001);this.a+=8;return c*Math.pow(2,32)+b};O.prototype.readUint64=O.prototype.ab;O.prototype.Ja=function(b){this.a+b>this.H.byteLength&&Be();var c=new Uint8Array(this.H.buffer,this.H.byteOffset+this.a,b);this.a+=b;return new Uint8Array(c)};O.prototype.readBytes=O.prototype.Ja;
  O.prototype.I=function(b){this.a+b>this.H.byteLength&&Be();this.a+=b;};O.prototype.skip=O.prototype.I;O.prototype.Ad=function(b){this.a<b&&Be();this.a-=b;};O.prototype.rewind=O.prototype.Ad;O.prototype.seek=function(b){(0>b||b>this.H.byteLength)&&Be();this.a=b;};O.prototype.seek=O.prototype.seek;O.prototype.uc=function(){for(var b=this.a;this.ja()&&0!=this.H.getUint8(this.a);)this.a+=1;b=new Uint8Array(this.H.buffer,this.H.byteOffset+b,this.a-b);this.a+=1;return Sb(b)};
  O.prototype.readTerminatedString=O.prototype.uc;function Be(){throw new B(2,3,3E3);}function Q(){this.c=[];this.b=[];this.a=!1;}y("shaka.util.Mp4Parser",Q);Q.prototype.F=function(b,c){var d=Ce(b);this.c[d]=0;this.b[d]=c;return this};Q.prototype.box=Q.prototype.F;Q.prototype.aa=function(b,c){var d=Ce(b);this.c[d]=1;this.b[d]=c;return this};Q.prototype.fullBox=Q.prototype.aa;Q.prototype.stop=function(){this.a=!0;};Q.prototype.stop=Q.prototype.stop;
  Q.prototype.parse=function(b,c){var d=new Uint8Array(b);d=new O(new DataView(d.buffer,d.byteOffset,d.byteLength),0);for(this.a=!1;d.ja()&&!this.a;)this.Pb(0,d,c);};Q.prototype.parse=Q.prototype.parse;
  Q.prototype.Pb=function(b,c,d){var e=c.X(),f=c.C(),g=c.C();switch(f){case 0:f=c.H.byteLength-e;break;case 1:f=c.ab();}var h=this.b[g];if(h){var k=null,l=null;1==this.c[g]&&(l=c.C(),k=l>>>24,l&=16777215);g=e+f;d&&g>c.H.byteLength&&(g=c.H.byteLength);g-=c.X();c=0<g?c.Ja(g):new Uint8Array(0);c=new O(new DataView(c.buffer,c.byteOffset,c.byteLength),0);h({parser:this,partialOkay:d||!1,version:k,flags:l,reader:c,size:f,start:e+b});}else c.I(Math.min(e+f-c.X(),c.H.byteLength-c.X()));};
  Q.prototype.parseNext=Q.prototype.Pb;function R(b){for(;b.reader.ja()&&!b.parser.a;)b.parser.Pb(b.start,b.reader,b.partialOkay);}Q.children=R;function De(b){for(var c=b.reader.C();0<c&&!b.parser.a;--c)b.parser.Pb(b.start,b.reader,b.partialOkay);}Q.sampleDescription=De;function Ee(b){return function(c){b(c.reader.Ja(c.reader.H.byteLength-c.reader.X()));}}Q.allData=Ee;function Ce(b){for(var c=0,d=0;d<b.length;d++)c=c<<8|b.charCodeAt(d);return c}
  function Fe(b){return String.fromCharCode(b>>24&255,b>>16&255,b>>8&255,b&255)}Q.typeToString=Fe;function Ge(b,c,d,e){var f,g=(new Q).aa("sidx",function(b){f=He(c,e,d,b);});b&&g.parse(b);if(f)return f;throw new B(2,3,3004);}
  function He(b,c,d,e){var f=[];e.reader.I(4);var g=e.reader.C();if(0==g)throw new B(2,3,3005);if(0==e.version){var h=e.reader.C();var k=e.reader.C();}else h=e.reader.ab(),k=e.reader.ab();e.reader.I(2);var l=e.reader.rb();b=b+e.size+k;for(k=0;k<l;k++){var m=e.reader.C(),p=(m&2147483648)>>>31;m&=2147483647;var r=e.reader.C();e.reader.I(4);if(1==p)throw new B(2,3,3006);f.push(new N(f.length,h/g-c,(h+r)/g-c,function(){return d},b,b+m-1));h+=r;b+=m;}e.parser.stop();return f}function S(b){this.a=b;}y("shaka.media.SegmentIndex",S);S.prototype.destroy=function(){this.a=null;return Promise.resolve()};S.prototype.destroy=S.prototype.destroy;S.prototype.find=function(b){for(var c=this.a.length-1;0<=c;--c){var d=this.a[c];if(b>=d.startTime&&b<d.endTime)return d.position}return this.a.length&&b<this.a[0].startTime?this.a[0].position:null};S.prototype.find=S.prototype.find;
  S.prototype.get=function(b){if(0==this.a.length)return null;b-=this.a[0].position;return 0>b||b>=this.a.length?null:this.a[b]};S.prototype.get=S.prototype.get;S.prototype.offset=function(b){for(var c=0;c<this.a.length;++c)this.a[c].startTime+=b,this.a[c].endTime+=b;};S.prototype.offset=S.prototype.offset;
  S.prototype.lc=function(b){for(var c=[],d=0,e=0;d<this.a.length&&e<b.length;){var f=this.a[d],g=b[e];f.startTime<g.startTime?(c.push(f),d++):(f.startTime>g.startTime?0==d&&c.push(g):(.1<Math.abs(f.endTime-g.endTime)?c.push(new N(f.position,g.startTime,g.endTime,g.c,g.b,g.a)):c.push(f),d++),e++);}for(;d<this.a.length;)c.push(this.a[d++]);if(c.length)for(d=c[c.length-1].position+1;e<b.length;)f=b[e++],f=new N(d++,f.startTime,f.endTime,f.c,f.b,f.a),c.push(f);else c=b;this.a=c;};S.prototype.merge=S.prototype.lc;
  S.prototype.$b=function(b){for(var c=0;c<this.a.length;++c)if(this.a[c].endTime>b){this.a.splice(0,c);return}this.a=[];};S.prototype.evict=S.prototype.$b;function Ie(b,c){for(;b.a.length;)if(b.a[b.a.length-1].startTime>=c)b.a.pop();else break;for(;b.a.length;)if(0>=b.a[0].endTime)b.a.shift();else break;if(0!=b.a.length){var d=b.a[b.a.length-1];b.a[b.a.length-1]=new N(d.position,d.startTime,c,d.c,d.b,d.a);}}function Je(b){this.b=b;this.a=new O(b,0);Ke||(Ke=[new Uint8Array([255]),new Uint8Array([127,255]),new Uint8Array([63,255,255]),new Uint8Array([31,255,255,255]),new Uint8Array([15,255,255,255,255]),new Uint8Array([7,255,255,255,255,255]),new Uint8Array([3,255,255,255,255,255,255]),new Uint8Array([1,255,255,255,255,255,255,255])]);}var Ke;Je.prototype.ja=function(){return this.a.ja()};
  function Le(b){var c=Me(b);if(7<c.length)throw new B(2,3,3002);for(var d=0,e=0;e<c.length;e++)d=256*d+c[e];c=d;d=Me(b);a:{for(e=0;e<Ke.length;e++)if(bc(d,Ke[e])){e=!0;break a}e=!1;}if(e)d=b.b.byteLength-b.a.X();else{if(8==d.length&&d[1]&224)throw new B(2,3,3001);e=d[0]&(1<<8-d.length)-1;for(var f=1;f<d.length;f++)e=256*e+d[f];d=e;}d=b.a.X()+d<=b.b.byteLength?d:b.b.byteLength-b.a.X();e=new DataView(b.b.buffer,b.b.byteOffset+b.a.X(),d);b.a.I(d);return new Ne(c,e)}
  function Me(b){var c=b.a.fa(),d;for(d=1;8>=d&&!(c&1<<8-d);d++);if(8<d)throw new B(2,3,3002);var e=new Uint8Array(d);e[0]=c;for(c=1;c<d;c++)e[c]=b.a.fa();return e}function Ne(b,c){this.id=b;this.a=c;}function Oe(b){if(8<b.a.byteLength)throw new B(2,3,3002);if(8==b.a.byteLength&&b.a.getUint8(0)&224)throw new B(2,3,3001);for(var c=0,d=0;d<b.a.byteLength;d++){var e=b.a.getUint8(d);c=256*c+e;}return c}function Pe(){}
  Pe.prototype.parse=function(b,c,d,e){var f;c=new Je(new DataView(c));if(440786851!=Le(c).id)throw new B(2,3,3008);var g=Le(c);if(408125543!=g.id)throw new B(2,3,3009);c=g.a.byteOffset;g=new Je(g.a);for(f=null;g.ja();){var h=Le(g);if(357149030==h.id){f=h;break}}if(!f)throw new B(2,3,3010);g=new Je(f.a);f=1E6;for(h=null;g.ja();){var k=Le(g);if(2807729==k.id)f=Oe(k);else if(17545==k.id)if(h=k,4==h.a.byteLength)h=h.a.getFloat32(0);else if(8==h.a.byteLength)h=h.a.getFloat64(0);else throw new B(2,3,3003);
  }if(null==h)throw new B(2,3,3011);g=f/1E9;f=h*g;b=Le(new Je(new DataView(b)));if(475249515!=b.id)throw new B(2,3,3007);return Qe(b,c,g,f,d,e)};function Qe(b,c,d,e,f,g){function h(){return f}var k=[];b=new Je(b.a);for(var l=null,m=null;b.ja();){var p=Le(b);if(187==p.id){var r=Re(p);r&&(p=d*r.Of,r=c+r.lf,null!=l&&k.push(new N(k.length,l-g,p-g,h,m,r-1)),l=p,m=r);}}null!=l&&k.push(new N(k.length,l-g,e-g,h,m,null));return k}
  function Re(b){var c=new Je(b.a);b=Le(c);if(179!=b.id)throw new B(2,3,3013);b=Oe(b);c=Le(c);if(183!=c.id)throw new B(2,3,3012);c=new Je(c.a);for(var d=0;c.ja();){var e=Le(c);if(241==e.id){d=Oe(e);break}}return {Of:b,lf:d}}function Se(b,c){var d=we(b,c,"Initialization");if(!d)return null;var e=b.w.ia,f=d.getAttribute("sourceURL");f&&(e=Uc(b.w.ia,[f]));f=0;var g=null;if(d=M.G(d,"range",M.Rb))f=d.start,g=d.end;return new ze(function(){return e},f,g)}
  function Te(b,c){var d=Number(ve(b,Ue,"presentationTimeOffset"))||0,e=ve(b,Ue,"timescale"),f=1;e&&(f=M.Qb(e)||1);d=d/f||0;e=Se(b,Ue);var g=b.w.contentType;f=b.w.mimeType.split("/")[1];if("text"!=g&&"mp4"!=f&&"webm"!=f)throw new B(2,4,4006);if("webm"==f&&!e)throw new B(2,4,4005);g=we(b,Ue,"RepresentationIndex");var h=ve(b,Ue,"indexRange"),k=b.w.ia;h=M.Rb(h||"");if(g){var l=g.getAttribute("sourceURL");l&&(k=Uc(b.w.ia,[l]));h=M.G(g,"range",M.Rb,h);}if(!h)throw new B(2,4,4002);f=Ve(b,c,e,k,h.start,h.end,
  f,d);return {createSegmentIndex:f.createSegmentIndex,findSegmentPosition:f.findSegmentPosition,getSegmentReference:f.getSegmentReference,initSegmentReference:e,ga:d}}
  function Ve(b,c,d,e,f,g,h,k){var l=b.presentationTimeline,m=!b.Qa||!b.O.gc,p=b.O.start,r=b.O.duration,w=c,x=null;return {createSegmentIndex:function(){var b=[w(e,f,g),"webm"==h?w(d.c(),d.b,d.a):null];w=null;return Promise.all(b).then(function(b){var c=b[0];b=b[1]||null;c="mp4"==h?Ge(c,f,e,k):(new Pe).parse(c,b,e,k);l.Xa(c,p);x=new S(c);m&&Ie(x,r);})},findSegmentPosition:function(b){return x.find(b)},getSegmentReference:function(b){return x.get(b)}}}function Ue(b){return b.sb}function We(b,c){var d=Se(b,Xe);var e=Ye(b);var f=ue(b,Xe),g=f.La;0==g&&(g=1);var h=0;f.V?h=f.V*(g-1):f.K&&0<f.K.length&&(h=f.K[0].start);e={V:f.V,startTime:h,La:g,ga:f.ga,K:f.K,Wa:e};if(!e.V&&!e.K&&1<e.Wa.length)throw new B(2,4,4002);if(!e.V&&!b.O.duration&&!e.K&&1==e.Wa.length)throw new B(2,4,4002);if(e.K&&0==e.K.length)throw new B(2,4,4002);g=f=null;b.ea.id&&b.w.id&&(g=b.ea.id+","+b.w.id,f=c[g]);h=Ze(b.O.duration,e.La,b.w.ia,e);f?(f.lc(h),g=b.presentationTimeline.lb(),f.$b(g-b.O.start)):(b.presentationTimeline.Xa(h,
  b.O.start),f=new S(h),g&&b.Qa&&(c[g]=f));b.Qa&&b.O.gc||Ie(f,b.O.duration);return {createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:f.find.bind(f),getSegmentReference:f.get.bind(f),initSegmentReference:d,ga:e.ga}}function Xe(b){return b.za}
  function Ze(b,c,d,e){var f=e.Wa.length;e.K&&e.K.length!=e.Wa.length&&(f=Math.min(e.K.length,e.Wa.length));for(var g=[],h=e.startTime,k=0;k<f;k++){var l=e.Wa[k],m=Uc(d,[l.Ge]),p=void 0;p=null!=e.V?h+e.V:e.K?e.K[k].end:h+b;g.push(new N(k+c,h,p,function(b){return b}.bind(null,m),l.start,l.end));h=p;}return g}
  function Ye(b){return [b.w.za,b.Y.za,b.ea.za].filter(H.wa).map(function(b){return M.N(b,"SegmentURL")}).reduce(function(b,d){return 0<b.length?b:d}).map(function(c){c.getAttribute("indexRange")&&!b.ed&&(b.ed=!0);var d=c.getAttribute("media");c=M.G(c,"mediaRange",M.Rb,{start:0,end:null});return {Ge:d,start:c.start,end:c.end}})}function $e(b,c,d,e){var f=af(b);var g=ue(b,bf);var h=ve(b,bf,"media"),k=ve(b,bf,"index");g={V:g.V,timescale:g.timescale,La:g.La,ga:g.ga,Gc:g.Gc,K:g.K,jc:h,nb:k};h=g.nb?1:0;h+=g.K?1:0;h+=g.V?1:0;if(0==h)throw new B(2,4,4002);1!=h&&(g.nb&&(g.K=null),g.V=null);if(!g.nb&&!g.jc)throw new B(2,4,4002);if(g.nb){d=b.w.mimeType.split("/")[1];if("mp4"!=d&&"webm"!=d)throw new B(2,4,4006);if("webm"==d&&!f)throw new B(2,4,4005);e=te(g.nb,b.w.id,null,b.bandwidth||null,null);e=Uc(b.w.ia,[e]);b=Ve(b,c,f,e,0,null,
  d,g.ga);}else g.V?(e||(b.presentationTimeline.nc(g.V),b.presentationTimeline.oc(b.O.start)),b=cf(b,g)):(h=c=null,b.ea.id&&b.w.id&&(h=b.ea.id+","+b.w.id,c=d[h]),k=df(b,g),e=!b.Qa||!b.O.gc,c?(e&&Ie(new S(k),b.O.duration),c.lc(k),d=b.presentationTimeline.lb(),c.$b(d-b.O.start)):(b.presentationTimeline.Xa(k,b.O.start),c=new S(k),h&&b.Qa&&(d[h]=c)),e&&Ie(c,b.O.duration),b={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:c.find.bind(c),getSegmentReference:c.get.bind(c)});return {createSegmentIndex:b.createSegmentIndex,
  findSegmentPosition:b.findSegmentPosition,getSegmentReference:b.getSegmentReference,initSegmentReference:f,ga:g.ga}}function bf(b){return b.ub}
  function cf(b,c){var d=b.O.duration,e=c.V,f=c.La,g=c.timescale,h=c.jc,k=b.bandwidth||null,l=b.w.id,m=b.w.ia;return {createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0>b||d&&b>=d?null:Math.floor(b/e)},getSegmentReference:function(b){var c=b*e,p=c+e;d&&(p=Math.min(p,d));return 0>p||d&&c>=d?null:new N(b,c,p,function(){var d=te(h,l,b+f,k,c*g);return Uc(m,[d])},0,null)}}}
  function df(b,c){for(var d=[],e=0;e<c.K.length;e++){var f=e+c.La;d.push(new N(f,c.K[e].start,c.K[e].end,function(b,c,d,e,f,p){b=te(b,c,f,d,p);return Uc(e,[b]).map(function(b){return b.toString()})}.bind(null,c.jc,b.w.id,b.bandwidth||null,b.w.ia,f,c.K[e].Nf+c.Gc),0,null));}return d}function af(b){var c=ve(b,bf,"initialization");if(!c)return null;var d=b.w.id,e=b.bandwidth||null,f=b.w.ia;return new ze(function(){var b=te(c,d,null,e,null);return Uc(f,[b])},0,null)}var ef={},ff={};y("shaka.media.ManifestParser.registerParserByExtension",function(b,c){ff[b]=c;});y("shaka.media.ManifestParser.registerParserByMime",function(b,c){ef[b]=c;});function gf(){var b={},c;for(c in ef)b[c]=!0;for(var d in ff)b[d]=!0;["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"].forEach(function(c){b[c]=!!ef[c];});["mpd","m3u8","ism"].forEach(function(c){b[c]=!!ff[c];});return b}
  function hf(b,c,d,e){return t(function g(){var h;return v(g,function(g){switch(g.j){case 1:return qa(g,2),u(g,jf(b,c,d,e),4);case 4:return g["return"](g.u);case 2:throw h=ta(g),h.severity=2,h;}})})}
  function jf(b,c,d,e){return t(function g(){var h,k,l,m,p,r,w,x,A,P;return v(g,function(g){switch(g.j){case 1:if(e&&(h=e.toLowerCase(),k=ef[h]))return g["return"](k);l=new Qa(b);m=l.da.split("/");p=m.pop();r=p.split(".");return 1<r.length&&(w=r.pop().toLowerCase(),x=ff[w])?g["return"](x):u(g,kf(b,c,d),2);case 2:A=g.u;if(P=ef[A])return g["return"](P);throw new B(2,4,4E3,b);}})})}
  function kf(b,c,d){return t(function f(){var g,h,k;return v(f,function(f){switch(f.j){case 1:return g=Ab([b],d),g.method="HEAD",u(f,c.request(0,g).promise,2);case 2:return h=f.u,k=h.headers["content-type"],f["return"](k?k.toLowerCase():"")}})})}function T(b,c){this.f=b;this.Sb=c;this.h=this.g=Infinity;this.a=1;this.b=this.c=null;this.l=0;this.m=!0;this.i=0;}y("shaka.media.PresentationTimeline",T);T.prototype.T=function(){return this.g};T.prototype.getDuration=T.prototype.T;T.prototype.ma=function(b){this.g=b;};T.prototype.setDuration=T.prototype.ma;T.prototype.te=function(){return this.f};T.prototype.getPresentationStartTime=T.prototype.te;T.prototype.Ed=function(b){this.l=b;};T.prototype.setClockOffset=T.prototype.Ed;
  T.prototype.vb=function(b){this.m=b;};T.prototype.setStatic=T.prototype.vb;T.prototype.Bc=function(b){this.h=b;};T.prototype.setSegmentAvailabilityDuration=T.prototype.Bc;T.prototype.zf=function(b){this.Sb=b;};T.prototype.setDelay=T.prototype.zf;T.prototype.ke=function(){return this.Sb};T.prototype.getDelay=T.prototype.ke;
  T.prototype.Xa=function(b,c){if(0!=b.length){var d=b[b.length-1].endTime+c;this.oc(b[0].startTime+c);this.a=b.reduce(function(b,c){return Math.max(b,c.endTime-c.startTime)},this.a);this.b=Math.max(this.b,d);null!=this.f&&(this.f=(Date.now()+this.l)/1E3-this.b-this.a);}};T.prototype.notifySegments=T.prototype.Xa;T.prototype.oc=function(b){this.c=null==this.c?b:Math.max(this.c,b);};T.prototype.notifyMinSegmentStartTime=T.prototype.oc;T.prototype.nc=function(b){this.a=Math.max(this.a,b);};
  T.prototype.notifyMaxSegmentDuration=T.prototype.nc;T.prototype.offset=function(b){null!=this.c&&(this.c+=b);null!=this.b&&(this.b+=b);};T.prototype.offset=T.prototype.offset;T.prototype.U=function(){return Infinity==this.g&&!this.m};T.prototype.isLive=T.prototype.U;T.prototype.Ha=function(){return Infinity!=this.g&&!this.m};T.prototype.isInProgress=T.prototype.Ha;T.prototype.lb=function(){if(Infinity==this.h)return this.i;var b=this.Ta()-this.h;return Math.max(this.i,b)};
  T.prototype.getSegmentAvailabilityStart=T.prototype.lb;T.prototype.Gd=function(b){this.i=b;};T.prototype.setUserSeekStart=T.prototype.Gd;T.prototype.Ta=function(){return this.U()||this.Ha()?Math.min(Math.max(0,(Date.now()+this.l)/1E3-this.a-this.f),this.g):this.g};T.prototype.getSegmentAvailabilityEnd=T.prototype.Ta;T.prototype.kb=function(b){var c=Math.max(this.c,this.i);if(Infinity==this.h)return c;var d=this.Ta()-this.h;b=Math.min(d+b,this.qa());return Math.max(c,b)};
  T.prototype.getSafeSeekRangeStart=T.prototype.kb;T.prototype.Sa=function(){return this.kb(0)};T.prototype.getSeekRangeStart=T.prototype.Sa;T.prototype.qa=function(){var b=this.U()||this.Ha()?this.Sb:0;return Math.max(0,this.Ta()-b)};T.prototype.getSeekRangeEnd=T.prototype.qa;T.prototype.Kd=function(){return null==this.f||null!=this.b?!1:!0};T.prototype.usingPresentationStartTime=T.prototype.Kd;function lf(){this.a=this.b=null;this.h=[];this.c=null;this.l=[];this.i=1;this.m={};this.o=0;this.s=new Ha(5);this.g=null;this.f=new wb;}y("shaka.dash.DashParser",lf);n=lf.prototype;n.configure=function(b){this.b=b;};n.start=function(b,c){this.h=[b];this.a=c;return mf(this).then(function(b){this.a&&nf(this,b);return this.c}.bind(this))};n.stop=function(){this.b=this.a=null;this.h=[];this.c=null;this.l=[];this.m={};null!=this.g&&(window.clearTimeout(this.g),this.g=null);return this.f.destroy()};
  n.update=function(){mf(this)["catch"](function(b){if(this.a)this.a.onError(b);}.bind(this));};n.onExpirationUpdated=function(){};function mf(b){var c=Date.now(),d=b.a.networkingEngine.request(0,Ab(b.h,b.b.retryParameters));xb(b.f,d);return d.promise.then(function(c){if(b.a)return of(b,c.data,c.uri)}).then(function(){var d=(Date.now()-c)/1E3;Ia(b.s,1,d);return d})}
  function of(b,c,d){c=M.sd(c,"MPD");if(!c)throw new B(2,4,4001,d);c=ye(c,b.b.retryParameters,b.b.dash.xlinkFailGracefully,d,b.a.networkingEngine);xb(b.f,c);return c.promise.then(function(c){return pf(b,c,d)})}
  function pf(b,c,d){return t(function f(){var g,h,k,l,m,p,r,w,x,A,P,U,X,ea,ha,Ja,Wa,ia,mg,Lc,ng,og,pg,qg,rg,sg;return v(f,function(f){switch(f.j){case 1:l=H;m=M;p=[d];r=m.N(c,"Location").map(m.Lb).filter(l.wa);0<r.length&&(w=Uc(p,r),p=b.h=w);x=m.N(c,"BaseURL").map(m.Lb);A=Uc(p,x);P=b.b.dash.ignoreMinBufferTime;U=0;P||(U=m.G(c,"minBufferTime",m.sa));b.o=m.G(c,"minimumUpdatePeriod",m.sa,-1);X=m.G(c,"availabilityStartTime",m.cf);ea=m.G(c,"timeShiftBufferDepth",m.sa);ha=m.G(c,"suggestedPresentationDelay",
  m.sa);Ja=m.G(c,"maxSegmentDuration",m.sa);Wa=c.getAttribute("type")||"static";b.c?ia=b.c.presentationTimeline:(mg=Math.max(b.b.dash.defaultPresentationDelay,1.5*U),Lc=null!=ha?ha:mg,ia=new T(X,Lc));ng={Qa:"static"!=Wa,presentationTimeline:ia,ea:null,O:null,Y:null,w:null,bandwidth:0,ed:!1};for(var tg=ng,bk=A,Mc=M.G(c,"mediaPresentationDuration",M.sa),Nc=[],Xa=0,Rb=M.N(c,"Period"),sb=0;sb<Rb.length;sb++){var hb=Rb[sb];Xa=M.G(hb,"start",M.sa,Xa);var Oc=M.G(hb,"duration",M.sa),Ya=null;if(sb!=Rb.length-
  1){var ug=M.G(Rb[sb+1],"start",M.sa);null!=ug&&(Ya=ug-Xa);}else null!=Mc&&(Ya=Mc-Xa);null==Ya&&(Ya=Oc);hb=qf(b,tg,bk,{start:Xa,duration:Ya,node:hb,gc:null==Ya||sb==Rb.length-1});Nc.push(hb);Oc=tg.ea.id;b.l.includes(Oc)||(b.l.push(Oc),b.c&&(b.a.filterNewPeriod(hb),b.c.periods.push(hb)));if(null==Ya){Xa=null;break}Xa+=Ya;}null==b.c&&b.a.filterAllPeriods(Nc);null!=Mc?(g=Nc,h=Mc,k=!1):(g=Nc,h=Xa,k=!0);og=h;pg=g;ia.vb("static"==Wa);"static"!=Wa&&k||ia.ma(og||Infinity);(qg=ia.U())&&!isNaN(b.b.availabilityWindowOverride)&&
  (ea=b.b.availabilityWindowOverride);null==ea&&(ea=Infinity);ia.Bc(ea);ia.nc(Ja||1);if(b.c){f.B(0);break}b.c={presentationTimeline:ia,periods:pg,offlineSessionIds:[],minBufferTime:U||0};if(!ia.Kd()){f.B(0);break}rg=m.N(c,"UTCTiming");return u(f,rf(b,A,rg,qg),4);case 4:sg=f.u;if(!b.a)return f["return"]();ia.Ed(sg);f.j=0;}})})}
  function qf(b,c,d,e){c.ea=sf(e.node,null,d);c.O=e;c.ea.id||(c.ea.id="__shaka_period_"+e.start);M.N(e.node,"EventStream").forEach(b.ef.bind(b,e.start,e.duration));d=M.N(e.node,"AdaptationSet").map(b.bf.bind(b,c)).filter(H.wa);if(c.Qa){c=[];for(var f=q(d),g=f.next();!g.done;g=f.next()){g=q(g.value.pf);for(var h=g.next();!h.done;h=g.next())c.push(h.value);}if(c.length!=(new Set(c)).size)throw new B(2,4,4018);}var k=d.filter(function(b){return !b.Fc});d.filter(function(b){return b.Fc}).forEach(function(b){var c=
  b.streams[0],d=b.Fc;k.forEach(function(b){b.id==d&&b.streams.forEach(function(b){b.trickModeVideo=c;});});});c=tf(k,"video");f=tf(k,"audio");if(!c.length&&!f.length)throw new B(2,4,4004);f.length||(f=[null]);c.length||(c=[null]);d=[];for(g=0;g<f.length;g++)for(h=0;h<c.length;h++)uf(b,f[g],c[h],d);b=tf(k,"text");c=[];for(f=0;f<b.length;f++)c.push.apply(c,b[f].streams);return {startTime:e.start,textStreams:c,variants:d}}function tf(b,c){return b.filter(function(b){return b.contentType==c})}
  function uf(b,c,d,e){if(c||d)if(c&&d){var f=c.drmInfos;var g=d.drmInfos;if(f.length&&g.length?0<Ic(f,g).length:1){g=Ic(c.drmInfos,d.drmInfos);for(var h=0;h<c.streams.length;h++)for(var k=0;k<d.streams.length;k++)f=(d.streams[k].bandwidth||0)+(c.streams[h].bandwidth||0),f={id:b.i++,language:c.language,primary:c.ic||d.ic,audio:c.streams[h],video:d.streams[k],bandwidth:f,drmInfos:g,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}}else for(g=c||d,h=0;h<g.streams.length;h++)f=g.streams[h].bandwidth||
  0,f={id:b.i++,language:g.language||"und",primary:g.ic,audio:c?g.streams[h]:null,video:d?g.streams[h]:null,bandwidth:f,drmInfos:g.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}
  n.bf=function(b,c){b.Y=sf(c,b.ea,null);var d=!1,e=M.N(c,"Role"),f=e.map(function(b){return b.getAttribute("value")}).filter(H.wa),g=void 0,h="text"==b.Y.contentType;h&&(g="subtitle");for(var k=0;k<e.length;k++){var l=e[k].getAttribute("schemeIdUri");if(null==l||"urn:mpeg:dash:role:2011"==l)switch(l=e[k].getAttribute("value"),l){case "main":d=!0;break;case "caption":case "subtitle":g=l;}}var m=null,p=!1;M.N(c,"EssentialProperty").forEach(function(b){"http://dashif.org/guidelines/trickmode"==b.getAttribute("schemeIdUri")?
  m=b.getAttribute("value"):p=!0;});k=M.N(c,"Accessibility");var r=new Map;e={};k=q(k);for(l=k.next();!l.done;e={hb:e.hb},l=k.next()){l=l.value;var w=l.getAttribute("schemeIdUri");if("urn:scte:dash:cc:cea-608:2015"==w||"urn:scte:dash:cc:cea-708:2015"==w)e.hb=1,l=l.getAttribute("value"),null!=l?l.split(";").forEach(function(b){return function(c){if(c.includes("=")){c=c.split("=");var d=c[0].startsWith("CC")?c[0]:"CC"+c[0];c=c[1].split(",")[0].split(":").pop();}else d="CC"+b.hb,b.hb+=2;r.set(d,I(c));}}(e)):
  r.set("CC1","und");}if(p)return null;e=M.N(c,"ContentProtection");var x=le(e,this.b.dash.customScheme,this.b.dash.ignoreDrmInfo);e=I(c.getAttribute("lang")||"und");l=c.getAttribute("label");k=M.N(c,"Representation");f=k.map(this.ff.bind(this,b,x,g,e,l,d,f,r)).filter(function(b){return !!b});if(0==f.length){if(h)return null;throw new B(2,4,4003);}b.Y.contentType&&"application"!=b.Y.contentType||(b.Y.contentType=vf(f[0].mimeType,f[0].codecs),f.forEach(function(c){c.type=b.Y.contentType;}));f.forEach(function(b){x.drmInfos.forEach(function(c){b.keyId&&
  c.keyIds.push(b.keyId);});});h=k.map(function(b){return b.getAttribute("id")}).filter(H.wa);return {id:b.Y.id||"__fake__"+this.i++,contentType:b.Y.contentType,language:e,ic:d,streams:f,drmInfos:x.drmInfos,Fc:m,pf:h}};
  n.ff=function(b,c,d,e,f,g,h,k,l){b.w=sf(l,b.Y,null);if(!wf(b.w))return null;b.bandwidth=M.G(l,"bandwidth",M.Qb)||0;var m=b.w.contentType;m="text"==m||"application"==m;try{var p=this.qf.bind(this);if(b.w.sb)var r=Te(b,p);else if(b.w.za)r=We(b,this.m);else if(b.w.ub)r=$e(b,p,this.m,!!this.c);else{var w=b.w.ia,x=b.O.duration||0;r={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0<=b&&b<x?1:null},getSegmentReference:function(b){return 1!=b?null:new N(1,0,x,function(){return w},
  0,null)},initSegmentReference:null,ga:0};}}catch(A){if(m&&4002==A.code)return null;throw A;}l=M.N(l,"ContentProtection");l=oe(l,this.b.dash.customScheme,c,this.b.dash.ignoreDrmInfo);return {id:this.i++,originalId:b.w.id,createSegmentIndex:r.createSegmentIndex,findSegmentPosition:r.findSegmentPosition,getSegmentReference:r.getSegmentReference,initSegmentReference:r.initSegmentReference,presentationTimeOffset:r.ga,mimeType:b.w.mimeType,codecs:b.w.codecs,frameRate:b.w.frameRate,bandwidth:b.bandwidth,width:b.w.width,
  height:b.w.height,kind:d,encrypted:0<c.drmInfos.length,keyId:l,language:e,label:f,type:b.Y.contentType,primary:g,trickModeVideo:null,emsgSchemeIdUris:b.w.emsgSchemeIdUris,roles:h,channelsCount:b.w.pc,closedCaptions:k}};n.Gf=function(){this.g=null;mf(this).then(function(b){this.a&&nf(this,b);}.bind(this))["catch"](function(b){this.a&&(b.severity=1,this.a.onError(b),nf(this,0));}.bind(this));};function nf(b,c){0>b.o||(b.g=window.setTimeout(b.Gf.bind(b),1E3*Math.max(3,b.o-c,Ka(b.s))));}
  function sf(b,c,d){c=c||{contentType:"",mimeType:"",codecs:"",emsgSchemeIdUris:[],frameRate:void 0,pc:null};d=d||c.ia;var e=M.Za,f=M.ce,g=M.N(b,"BaseURL").map(M.Lb),h=b.getAttribute("contentType")||c.contentType,k=b.getAttribute("mimeType")||c.mimeType,l=b.getAttribute("codecs")||c.codecs;f=M.G(b,"frameRate",f)||c.frameRate;var m=M.N(b,"InbandEventStream"),p=c.emsgSchemeIdUris.slice();m=q(m);for(var r=m.next();!r.done;r=m.next())r=r.value.getAttribute("schemeIdUri"),p.includes(r)||p.push(r);m=M.N(b,
  "AudioChannelConfiguration");m=xf(m)||c.pc;h||(h=vf(k,l));return {ia:Uc(d,g),sb:M.Ib(b,"SegmentBase")||c.sb,za:M.Ib(b,"SegmentList")||c.za,ub:M.Ib(b,"SegmentTemplate")||c.ub,width:M.G(b,"width",e)||c.width,height:M.G(b,"height",e)||c.height,contentType:h,mimeType:k,codecs:l,frameRate:f,emsgSchemeIdUris:p,id:b.getAttribute("id"),pc:m}}
  function xf(b){for(var c=0;c<b.length;++c){var d=b[c],e=d.getAttribute("schemeIdUri");if(e&&(d=d.getAttribute("value")))switch(e){case "urn:mpeg:dash:outputChannelPositionList:2012":return d.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":e=parseInt(d,10);if(!e)continue;return e;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":if(e=parseInt(d,
  16)){for(b=0;e;)e&1&&++b,e>>=1;return b}}}return null}function wf(b){var c=b.sb?1:0;c+=b.za?1:0;c+=b.ub?1:0;if(0==c)return "text"==b.contentType||"application"==b.contentType?!0:!1;1!=c&&(b.sb&&(b.za=null),b.ub=null);return !0}
  function yf(b,c,d,e){c=Uc(c,[d]);c=Ab(c,b.b.retryParameters);c.method=e;c=b.a.networkingEngine.request(4,c);xb(b.f,c);return c.promise.then(function(b){if("HEAD"==e){if(!b.headers||!b.headers.date)return 0;b=b.headers.date;}else b=Sb(b.data);b=Date.parse(b);return isNaN(b)?0:b-Date.now()})}
  function rf(b,c,d,e){d=d.map(function(b){return {scheme:b.getAttribute("schemeIdUri"),value:b.getAttribute("value")}});var f=b.b.dash.clockSyncUri;e&&!d.length&&f&&d.push({scheme:"urn:mpeg:dash:utc:http-head:2014",value:f});return H.be(d,function(b){var d=b.value;switch(b.scheme){case "urn:mpeg:dash:utc:http-head:2014":case "urn:mpeg:dash:utc:http-head:2012":return yf(this,c,d,"HEAD");case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return yf(this,
  c,d,"GET");case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return b=Date.parse(d),isNaN(b)?0:b-Date.now();case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":return Promise.reject();default:return Promise.reject()}}.bind(b))["catch"](function(){return 0})}
  n.ef=function(b,c,d){var e=M.Za,f=d.getAttribute("schemeIdUri")||"",g=d.getAttribute("value")||"",h=M.G(d,"timescale",e)||1;M.N(d,"Event").forEach(function(d){var k=M.G(d,"presentationTime",e)||0,m=M.G(d,"duration",e)||0;k=k/h+b;m=k+m/h;null!=c&&(k=Math.min(k,b+c),m=Math.min(m,b+c));d={schemeIdUri:f,value:g,startTime:k,endTime:m,id:d.getAttribute("id")||"",eventElement:d};this.a.onTimelineRegionAdded(d);}.bind(this));};
  n.qf=function(b,c,d){b=Ab(b,this.b.retryParameters);null!=c&&(b.headers.Range="bytes="+c+"-"+(null!=d?d:""));c=this.a.networkingEngine.request(1,b);xb(this.f,c);return c.promise.then(function(b){return b.data})};function vf(b,c){return dd(Mb(b,c))?"text":b.split("/")[0]}ff.mpd=lf;ef["application/dash+xml"]=lf;function zf(b,c,d,e){this.b=b;this.type=c;this.a=d;this.segments=e||null;}function Af(b,c,d,e){this.id=b;this.name=c;this.a=d;this.value=void 0===e?null:e;}Af.prototype.toString=function(){function b(b){return b.name+'="'+b.value+'"'}return this.value?"#"+this.name+":"+this.value:0<this.a.length?"#"+this.name+":"+this.a.map(b).join(","):"#"+this.name};function Bf(b,c){this.name=b;this.value=c;}
  Af.prototype.getAttribute=function(b){var c=this.a.filter(function(c){return c.name==b});return c.length?c[0]:null};function Cf(b,c,d){return (b=b.getAttribute(c))?b.value:d||null}function Df(b,c){this.b=c;this.a=b;}function Ef(b,c){return b.filter(function(b){return b.name==c})}function Ff(b,c){var d=Ef(b,c);return d.length?d[0]:null}function Gf(b,c,d){return b.filter(function(b){var e=b.getAttribute("TYPE");b=b.getAttribute("GROUP-ID");return e.value==c&&b.value==d})}function Hf(b){this.b=b;this.a=0;}function If(b){Jf(b,/[ \t]+/gm);}function Jf(b,c){c.lastIndex=b.a;var d=c.exec(b.b);d=null==d?null:{position:d.index,length:d[0].length,sf:d};if(b.a==b.b.length||null==d||d.position!=b.a)return null;b.a+=d.length;return d.sf}function Kf(b){return b.a==b.b.length?null:(b=Jf(b,/[^ \t\n]*/gm))?b[0]:null}function Lf(){this.a=0;}
  function Mf(b,c,d){c=Sb(c);c=c.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n").trim();var e=c.split(/\n+/m);if(!/^#EXTM3U($|[ \t\n])/m.test(e[0]))throw new B(2,4,4015);c=0;for(var f=1;f<e.length;f++)if(!/^#(?!EXT)/m.test(e[f])){var g=Nf(b,e[f]);--b.a;if(Of.includes(g.name)){c=1;break}else"EXT-X-STREAM-INF"==g.name&&(f+=1);}f=[];for(g=1;g<e.length;)if(/^#(?!EXT)/m.test(e[g]))g+=1;else{var h=Nf(b,e[g]);if(Pf.includes(h.name)){if(1!=c)throw new B(2,4,4017);e=e.splice(g,e.length-g);b=Qf(b,d,e,f);return new zf(d,
  c,f,b)}f.push(h);g+=1;"EXT-X-STREAM-INF"==h.name&&(h.a.push(new Bf("URI",e[g])),g+=1);}return new zf(d,c,f)}function Qf(b,c,d,e){var f=[],g=[];d.forEach(function(d){if(/^(#EXT)/.test(d))d=Nf(b,d),Of.includes(d.name)?e.push(d):g.push(d);else{if(/^#(?!EXT)/m.test(d))return [];d=Uc([c],[d.trim()])[0];f.push(new Df(d,g));g=[];}});return f}
  function Nf(b,c){a:{var d=b.a++;var e=c.match(/^#(EXT[^:]*)(?::(.*))?$/);if(!e)throw new B(2,4,4016,c);var f=e[1],g=e[2];e=[];if(g&&g.includes("=")){g=new Hf(g);for(var h,k=/([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;h=Jf(g,k);)e.push(new Bf(h[1],h[2]||h[3]));}else if(g){d=new Af(d,f,e,g);break a}d=new Af(d,f,e);}return d}var Of="EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(" "),Pf="EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");function Rf(b){try{var c=Rf.parse(b);return lb({uri:b,data:c.data,headers:{"content-type":c.contentType}})}catch(d){return jb(d)}}y("shaka.net.DataUriPlugin",Rf);
  Rf.parse=function(b){var c=b.split(":");if(2>c.length||"data"!=c[0])throw new B(2,1,1004,b);c=c.slice(1).join(":").split(",");if(2>c.length)throw new B(2,1,1004,b);var d=c[0];c=window.decodeURIComponent(c.slice(1).join(","));d=d.split(";");var e=null;1<d.length&&(e=d[1]);if("base64"==e)b=Zb(c).buffer;else{if(e)throw new B(2,1,1005,b);b=Wb(c);}return {data:b,contentType:d[0]}};zb("data",Rf);function Sf(){this.g=this.c=null;this.$=1;this.D=new Map;this.R=new Set;this.a=new Map;this.b=null;this.v="";this.s=new Lf;this.l=this.i=null;this.f=Tf;this.o=null;this.A=0;this.M=Infinity;this.h=new wb;this.P=[];this.m=new Map;}y("shaka.hls.HlsParser",Sf);n=Sf.prototype;n.configure=function(b){this.g=b;};n.start=function(b,c){this.c=c;return Uf(this,b).then(function(b){this.v=b.uri;return Vf(this,b.data).then(function(){Wf(this,this.i);return this.o}.bind(this))}.bind(this))};
  n.stop=function(){this.g=this.c=null;this.D.clear();this.R.clear();this.a.clear();this.o=null;return this.h.destroy()};n.update=function(){if(this.f!=Xf.Ca){for(var b=[],c=q(this.a.values()),d=c.next();!d.done;d=c.next())b.push(Yf(this,d.value));return Promise.all(b)}};
  function Yf(b,c){Uf(b,c.Ud).then(function(b){var d=Xf,f=Mf(this.s,b.data,b.uri);if(1!=f.type)throw new B(2,4,4017);b=Ff(f.a,"EXT-X-MEDIA-SEQUENCE");var g=c.stream;Zf(this,c.Ub,f,b?Number(b.value):0,g.mimeType,g.codecs).then(function(b){c.tb.a=b;b=b[b.length-1];Ff(f.a,"EXT-X-ENDLIST")&&($f(this,d.Ca),this.b.ma(b.endTime));}.bind(this));}.bind(b));}n.onExpirationUpdated=function(){};
  function Vf(b,c){var d=Mf(b.s,c,b.v);if(0!=d.type)throw new B(2,4,4022);return ag(b,d).then(function(b){this.c.filterAllPeriods([b]);for(var c=Infinity,d=0,e=Infinity,k=q(this.a.values()),l=k.next();!l.done;l=k.next())l=l.value,c=Math.min(c,l.mc),d=Math.max(d,l.mc),"text"!=l.stream.type&&(e=Math.min(e,l.duration));this.f!=Xf.Ca?(this.b=new T(0,3*this.A),this.b.vb(!1)):(this.b=new T(null,0),this.b.vb(!0));bg(this);if(this.f!=Xf.Ca){this.i=this.M;this.f==Xf.Ic&&(c=this.b.Sb,isNaN(this.g.availabilityWindowOverride)||
  (c=this.g.availabilityWindowOverride),this.b.Bc(c));for(c=0;95443.7176888889<=d;)c+=95443.7176888889,d-=95443.7176888889;if(c)for(d=q(this.a.values()),l=d.next();!l.done;l=d.next())e=l.value,95443.7176888889>e.mc&&(e.stream.presentationTimeOffset=-c,e.tb.offset(c));}else for(this.b.ma(e),this.b.offset(-c),d=q(this.a.values()),l=d.next();!l.done;l=d.next())l=l.value,l.stream.presentationTimeOffset=c,l.tb.offset(-c),Ie(l.tb,e);this.o={presentationTimeline:this.b,periods:[b],offlineSessionIds:[],minBufferTime:0};}.bind(b))}
  function ag(b,c){var d=c.a,e=Ef(c.a,"EXT-X-MEDIA"),f=e.filter(function(b){return "SUBTITLES"==V(b,"TYPE")}.bind(b)).map(function(b){return cg(this,b)}.bind(b));e=e.filter(function(b){return "CLOSED-CAPTIONS"==V(b,"TYPE")});dg(b,e);return Promise.all(f).then(function(b){var e=Ef(d,"EXT-X-STREAM-INF").map(function(b){return eg(this,b,c)}.bind(this));return Promise.all(e).then(function(c){return {startTime:0,variants:c.reduce(H.Yb,[]),textStreams:b}}.bind(this))}.bind(b))}
  function eg(b,c,d){var e=Cf(c,"CODECS","avc1.42E01E,mp4a.40.2").split(/\s*,\s*/),f=c.getAttribute("RESOLUTION"),g=null,h=null,k=Cf(c,"FRAME-RATE"),l=Number(V(c,"BANDWIDTH"));if(f){var m=f.value.split("x");g=m[0];h=m[1];}d=Ef(d.a,"EXT-X-MEDIA");d=d.filter(function(b){return "CLOSED-CAPTIONS"!=V(b,"TYPE")});d=d.filter(function(b){var c=Cf(b,"URI")||"";return "SUBTITLES"==(Cf(b,"TYPE")||"")||""!=c});var p=Cf(c,"AUDIO"),r=Cf(c,"VIDEO");p?d=Gf(d,"AUDIO",p):r&&(d=Gf(d,"VIDEO",r));if(m=fg("text",e)){var w=
  Cf(c,"SUBTITLES");w&&(w=Gf(d,"SUBTITLES",w),w.length&&(b.D.get(w[0].id).stream.codecs=m));tb(e,m);}d=d.map(function(b){return gg(this,b,e)}.bind(b));var x=[],A=[];return Promise.all(d).then(function(b){p?x=b:r&&(A=b);b=!1;if(x.length||A.length)if(x.length)if(V(c,"URI")==x[0].Ub){var d="audio";b=!0;}else d="video";else d="audio";else 1==e.length?(d=fg("video",e),d=f||k||d?"video":"audio"):(d="video",e=[e.join(",")]);return b?Promise.resolve():hg(this,c,e,d)}.bind(b)).then(function(b){b&&("audio"==b.stream.type?
  x=[b]:A=[b]);A&&ig(A);x&&ig(x);return jg(this,x,A,l,g,h,k)}.bind(b))}function ig(b){b.forEach(function(b){var c=b.stream.codecs.split(",");c=c.filter(function(b){return "mp4a.40.34"!=b});b.stream.codecs=c.join(",");});}
  function jg(b,c,d,e,f,g,h){d.forEach(function(b){if(b=b.stream)b.width=Number(f)||void 0,b.height=Number(g)||void 0,b.frameRate=Number(h)||void 0;}.bind(b));c.length||(c=[null]);d.length||(d=[null]);for(var k=[],l=0;l<c.length;l++)for(var m=0;m<d.length;m++){var p=c[l]?c[l].stream:null,r=d[m]?d[m].stream:null,w=c[l]?c[l].drmInfos:null,x=d[m]?d[m].drmInfos:null,A=void 0;if(p&&r)if(w.length&&x.length?0<Ic(w,x).length:1)A=Ic(w,x);else continue;else p?A=w:r&&(A=x);w=(d[l]?d[l].Ub:"")+" - "+(c[l]?c[l].Ub:
  "");b.R.has(w)||(p=kg(b,p,r,e,A),k.push(p),b.R.add(w));}return k}function kg(b,c,d,e,f){return {id:b.$++,language:c?c.language:"und",primary:!!c&&c.primary||!!d&&d.primary,audio:c,video:d,bandwidth:e,drmInfos:f,allowedByApplication:!0,allowedByKeySystem:!0}}function cg(b,c){V(c,"TYPE");return gg(b,c,[]).then(function(b){return b.stream})}
  function dg(b,c){for(var d=q(c),e=d.next();!e.done;e=d.next()){e=e.value;V(e,"TYPE");var f=Cf(e,"LANGUAGE")||"und";f=I(f);var g=V(e,"GROUP-ID");e=V(e,"INSTREAM-ID");b.m.get(g)||b.m.set(g,new Map);b.m.get(g).set(e,f);}}
  function gg(b,c,d){var e=V(c,"URI");if(b.a.has(e))return Promise.resolve(b.a.get(e));var f=V(c,"TYPE").toLowerCase();"subtitles"==f&&(f="text");var g=I(Cf(c,"LANGUAGE","und")),h=Cf(c,"NAME"),k=c.getAttribute("DEFAULT"),l=c.getAttribute("AUTOSELECT"),m=Cf(c,"CHANNELS");return lg(b,e,d,f,g,!!k||!!l,h,"audio"==f?vg(m):null,null).then(function(b){if(this.a.has(e))return this.a.get(e);this.D.set(c.id,b);this.a.set(e,b);return b}.bind(b))}
  function vg(b){if(!b)return null;b=b.split("/")[0];return parseInt(b,10)}function hg(b,c,d,e){var f=V(c,"URI");if(b.a.has(f))return Promise.resolve(b.a.get(f));c=Cf(c,"CLOSED-CAPTIONS");var g=null;"video"==e&&c&&"NONE"!=c&&(g=b.m.get(c));return lg(b,f,d,e,"und",!1,null,null,g).then(function(b){if(this.a.has(f))return this.a.get(f);this.a.set(f,b);return b}.bind(b))}
  function lg(b,c,d,e,f,g,h,k,l){var m=Uc([b.v],[c])[0],p,r="",w;return Uf(b,m).then(function(c){m=c.uri;p=Mf(b.s,c.data,m);if(1!=p.type)throw new B(2,4,4017);c=p;var f=Xf,g=Ff(c.a,"EXT-X-PLAYLIST-TYPE"),h=Ff(c.a,"EXT-X-ENDLIST");h=g&&"VOD"==g.value||h;g=g&&"EVENT"==g.value&&!h;g=!h&&!g;h?$f(b,f.Ca):(g?$f(b,f.Ic):$f(b,f.Pd),c=wg(c.a,"EXT-X-TARGETDURATION"),c=Number(c.value),b.A=Math.max(c,b.A),b.M=Math.min(c,b.M));if(1==d.length)r=d[0];else if(c=fg(e,d),null!=c)r=c;else throw new B(2,4,4025,d);return xg(b,
  e,r,p)}).then(function(d){w=d;d=Ff(p.a,"EXT-X-MEDIA-SEQUENCE");return Zf(b,c,p,d?Number(d.value):0,w,r)}).then(function(d){var A=d[0].startTime,x=d[d.length-1].endTime,U=x-A;d=new S(d);var X=yg(p),ea=void 0;"text"==e&&(ea="subtitle");var ha=[];p.segments.forEach(function(b){b=Ef(b.b,"EXT-X-KEY");ha.push.apply(ha,b);});var Ja=!1,Wa=[],ia=null;ha.forEach(function(b){if("NONE"!=V(b,"METHOD")){Ja=!0;var c=V(b,"KEYFORMAT");if(b=(c=zg[c])?c(b):null)b.keyIds.length&&(ia=b.keyIds[0]),Wa.push(b);}});if(Ja&&
  !Wa.length)throw new B(2,4,4026);return {stream:{id:b.$++,originalId:h,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:d.find.bind(d),getSegmentReference:d.get.bind(d),initSegmentReference:X,presentationTimeOffset:0,mimeType:w,codecs:r,kind:ea,encrypted:Ja,keyId:ia,language:f,label:h,type:e,primary:g,trickModeVideo:null,emsgSchemeIdUris:null,frameRate:void 0,width:void 0,height:void 0,bandwidth:void 0,roles:[],channelsCount:k,closedCaptions:l},tb:d,drmInfos:Wa,Ub:c,Ud:m,mc:A,Zf:x,
  duration:U}})}function yg(b){var c=Ef(b.a,"EXT-X-MAP");if(!c.length)return null;if(1<c.length)throw new B(2,4,4020);c=c[0];var d=V(c,"URI"),e=Uc([b.b],[d])[0];b=0;d=null;if(c=Cf(c,"BYTERANGE"))b=c.split("@"),c=Number(b[0]),b=Number(b[1]),d=b+c-1;return new ze(function(){return [e]},b,d)}
  function Ag(b,c,d,e){var f=c.b,g=c.a;c=wg(f,"EXTINF").value.split(",");c=e+Number(c[0]);var h=0,k=null;if(f=Ff(f,"EXT-X-BYTERANGE"))h=f.value.split("@"),f=Number(h[0]),h=h[1]?Number(h[1]):b.a+1,k=h+f-1;return new N(d,e,c,function(){return [g]},h,k)}function bg(b){b.b&&(b.P.forEach(function(c){b.b.Xa(c,0);}),b.P=[]);}
  function Zf(b,c,d,e,f,g){var h=d.segments,k=[],l=h[0].a,m=Ag(null,h[0],e,0);d=yg(d);return Bg(b,c,d,m,f,g).then(function(b){l.split("/").pop();for(var c=0;c<h.length;++c){var d=k[k.length-1];d=Ag(d,h[c],e+c,0==c?b:d.endTime);k.push(d);}this.P.push(k);bg(this);return k}.bind(b))}
  function Cg(b,c){var d=b.c.networkingEngine,e=Ab(c.c(),b.g.retryParameters),f={},g=c.b;f.Range="bytes="+g+"-"+(g+2048-1);var h={};if(0!=g||null!=c.a)g="bytes="+g+"-",null!=c.a&&(g+=c.a),h.Range=g;e.headers=f;f=d.request(1,e);xb(b.h,f);return f.promise["catch"](function(){Na("Unable to fetch a partial HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",e.uris[0]);e.headers=h;var c=d.request(1,e);xb(b.h,c);return c.promise})}
  function Bg(b,c,d,e,f,g){if(b.o&&(c=b.a.get(c).tb.get(e.position)))return Promise.resolve(c.startTime);e=[Cg(b,e)];if("video/mp4"==f||"audio/mp4"==f)d?e.push(Cg(b,d)):e.push(e[0]);return Promise.all(e).then(function(b){if("video/mp4"==f||"audio/mp4"==f)return Dg(b[0].data,b[1].data);if("audio/mpeg"==f)return 0;if("video/mp2t"==f)return Eg(b[0].data);if("application/mp4"==f||f.startsWith("text/")){b=b[0].data;var c=Mb(f,g);if(dd(c)){var d=new bd(null);ed(d,c);b=d.fc(b);}else b=0;return b}throw new B(2,
  4,4030);}.bind(b))}function Dg(b,c){var d=0;(new Q).F("moov",R).F("trak",R).F("mdia",R).aa("mdhd",function(b){b.reader.I(0==b.version?8:16);d=b.reader.C();b.parser.stop();}).parse(c,!0);if(!d)throw new B(2,4,4030);var e=0,f=!1;(new Q).F("moof",R).F("traf",R).aa("tfdt",function(b){e=(0==b.version?b.reader.C():b.reader.ab())/d;f=!0;b.parser.stop();}).parse(b,!0);if(!f)throw new B(2,4,4030);return e}
  function Eg(b){function c(){throw new B(2,4,4030);}b=new O(new DataView(b),0);for(var d=0,e=0;;)if(d=b.X(),e=b.fa(),71!=e&&c(),b.rb()&16384||c(),e=(b.fa()&48)>>4,0!=e&&2!=e||c(),3==e&&(e=b.fa(),b.I(e)),1!=b.C()>>8)b.seek(d+188),e=b.fa(),71!=e&&(b.seek(d+192),e=b.fa()),71!=e&&(b.seek(d+204),e=b.fa()),71!=e&&c(),b.Ad(1);else return b.I(3),d=b.fa()>>6,0!=d&&1!=d||c(),0==b.fa()&&c(),d=b.fa(),e=b.rb(),b=b.rb(),(1073741824*((d&14)>>1)+((e&65534)<<14|(b&65534)>>1))/9E4}
  function fg(b,c){for(var d=Fg[b],e=0;e<d.length;e++)for(var f=0;f<c.length;f++)if(d[e].test(c[f].trim()))return c[f].trim();return "text"==b?"":null}
  function xg(b,c,d,e){e=e.segments[0].a;var f=(new Qa(e)).da.split(".").pop(),g=Gg[c][f];if(g)return Promise.resolve(g);if("text"==c)return d&&"vtt"!=d?Promise.resolve("application/mp4"):Promise.resolve("text/vtt");c=Ab([e],b.g.retryParameters);c.method="HEAD";c=b.c.networkingEngine.request(1,c);xb(b.h,c);return c.promise.then(function(b){b=b.headers["content-type"];if(!b)throw new B(2,4,4021,f);return b.split(";")[0]})}
  function V(b,c){var d=b.getAttribute(c);if(!d)throw new B(2,4,4023,c);return d.value}function wg(b,c){var d=Ff(b,c);if(!d)throw new B(2,4,4024,c);return d}function Uf(b,c){var d=b.c.networkingEngine.request(0,Ab([c],b.g.retryParameters));xb(b.h,d);return d.promise}
  var Fg={audio:[/^vorbis$/,/^opus$/,/^flac$/,/^mp4a/,/^[ae]c-3$/],video:[/^avc/,/^hev/,/^hvc/,/^vp0?[89]/,/^av1$/],text:[/^vtt$/,/^wvtt/,/^stpp/]},Gg={audio:{mp4:"audio/mp4",m4s:"audio/mp4",m4i:"audio/mp4",m4a:"audio/mp4",ts:"video/mp2t"},video:{mp4:"video/mp4",m4s:"video/mp4",m4i:"video/mp4",m4v:"video/mp4",ts:"video/mp2t"},text:{mp4:"application/mp4",m4s:"application/mp4",m4i:"application/mp4",vtt:"text/vtt",ttml:"application/ttml+xml"}};
  Sf.prototype.ha=function(){this.c&&(this.l=null,this.update().then(function(){Wf(this,this.i);}.bind(this))["catch"](function(b){this.c&&(b.severity=1,this.c.onError(b),Wf(this,0));}.bind(this)));};function Wf(b,c){null!=b.i&&null!=c&&(b.l=window.setTimeout(b.ha.bind(b),1E3*c));}function $f(b,c){b.f=c;b.b&&b.b.vb(b.f==Xf.Ca);b.f==Xf.Ca&&null!=b.l&&(window.clearTimeout(b.l),b.l=null,b.i=null);}
  var zg={"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":function(b){var c=V(b,"METHOD");Dd("HLS SAMPLE-AES-CENC","SAMPLE-AES-CENC will no longer be supported, see Issue #1227");if(!["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].includes(c))return null;c=V(b,"URI");c=Rf.parse(c);c=new Uint8Array(c.data);c=Vc("com.widevine.alpha",[{initDataType:"cenc",initData:c}]);if(b=Cf(b,"KEYID"))c.keyIds=[b.substr(2).toLowerCase()];return c}},Tf="VOD",Xf={Ca:Tf,Pd:"EVENT",Ic:"LIVE"};ff.m3u8=Sf;
  ef["application/x-mpegurl"]=Sf;ef["application/vnd.apple.mpegurl"]=Sf;function Hg(){this.a=new Map;}function Ig(b,c){b.a.has(c)||b.a.set(c,new Jg);return b.a.get(c)}function Jg(){this.text=this.variant=null;}function Kg(b,c){this.a=b;this.b=new Set([b]);c=c||[];for(var d=q(c),e=d.next();!e.done;e=d.next())this.add(e.value);}Kg.prototype.add=function(b){return Lg(this.a,b)?(this.b.add(b),!0):!1};function Lg(b,c){var d;if(!(d=!!b.audio!=!!c.audio||!!b.video!=!!c.video||b.language!=c.language)&&(d=b.audio&&c.audio)){d=b.audio;var e=c.audio;d=!(d.channelsCount==e.channelsCount&&Mg(d,e)&&Ng(d.roles,e.roles));}!d&&(d=b.video&&c.video)&&(d=b.video,e=c.video,d=!(Mg(d,e)&&Ng(d.roles,e.roles)));return d?!1:!0}
  Kg.prototype.values=function(){return this.b.values()};function Mg(b,c){if(b.mimeType!=c.mimeType)return !1;var d=b.codecs.split(",").map(function(b){return Pb(b)[0]}),e=c.codecs.split(",").map(function(b){return Pb(b)[0]});if(d.length!=e.length)return !1;d.sort();e.sort();for(var f=0;f<d.length;f++)if(d[f]!=e[f])return !1;return !0}
  function Ng(b,c){var d=new Set(b),e=new Set(c);d["delete"]("main");e["delete"]("main");if(d.size!=e.size)return !1;d=q(d);for(var f=d.next();!f.done;f=d.next())if(!e.has(f.value))return !1;return !0}function Og(b){this.a=b;this.b=new Pg(b.language,"",b.audio&&b.audio.channelsCount?b.audio.channelsCount:0);}Og.prototype.create=function(b){var c=this,d=b.filter(function(b){return Lg(c.a,b)});return d.length?new Kg(d[0],d):this.b.create(b)};function Pg(b,c,d){this.c=b;this.b=c;this.a=d;}
  Pg.prototype.create=function(b){var c=[];c=Qg(b,this.c);var d=b.filter(function(b){return b.primary});c=c.length?c:d.length?d:b;this.b&&(b=Rg(c,this.b),b.length&&(c=b));this.a&&(b=J.Vc(c,this.a),b.length&&(c=b));b=new Kg(c[0]);c=q(c);for(d=c.next();!d.done;d=c.next())d=d.value,Lg(b.a,d)&&b.add(d);return b};function Qg(b,c){var d=I(c),e=Ad(d,b.map(function(b){return zd(b)}));return e?b.filter(function(b){return e==zd(b)}):[]}
  function Rg(b,c){return b.filter(function(b){var d=b.audio;b=b.video;return d&&0<=d.roles.indexOf(c)||b&&0<=b.roles.indexOf(c)})}function Sg(b){var c=this;this.c=b;this.a=new Set;this.b=new Xb(function(){Tg(c,!1);});this.b.start(.25,!0);}Sg.prototype.L=function(){this.b.stop();for(var b=q(this.a),c=b.next();!c.done;c=b.next())c.value.L();this.a.clear();};function Tg(b,c){for(var d=q(b.a),e=d.next();!e.done;e=d.next())e.value.g(b.c.currentTime,c);}function Ug(b,c,d){var e=this;this.c=Vg;this.f=.5;this.h=b;this.l=d;this.i=c;this.b=function(){};this.a=function(){};this.m=[{Md:Vg,is:Wg,Qc:function(){return e.a()}},{Md:Wg,is:Vg,Qc:function(){return e.b()}}];this.f>=this.h&&(Na("Rebuffering threshold is set too low!  This could cause poor buffering behavior during playback!"),this.f=this.h/2);}Ug.prototype.L=function(){this.b=function(){};this.a=function(){};};
  Ug.prototype.g=function(b){var c=this.c==Wg?this.f:this.h;b=this.i(b);c=this.l()||b>=c?Wg:Vg;b=q(this.m);for(var d=b.next();!d.done;d=b.next())d=d.value,this.c==d.Md&&c==d.is&&d.Qc();this.c=c;};function Xg(b,c,d){b.b=c;b.a=d;}var Vg=0,Wg=1;function Yg(b){this.g=b;this.f=Zg(b);this.a=b.a.currentTime;this.b=Date.now()/1E3;this.c=function(){};}function $g(b,c){b.c=c;}function ah(b){this.a=b;}function Zg(b){if(b.a.paused||0==b.a.playbackRate||null==b.a.buffered)var c=!1;else a:{c=b.a.buffered;b=b.a.currentTime;for(var d=0;d<c.length;d++){var e=c.start(d),f=c.end(d);if(!(b<e||b>f-.5)){c=!0;break a}}c=!1;}return c}function bh(b,c,d,e){this.a=b;this.s=c;this.m=d;this.o=e;this.f=new Eb;this.b=null;this.h=!1;this.l=b.readyState;this.c=!1;this.v=new Yg(new ah(b));$g(this.v,function(){b.currentTime+=.1;});this.g=!1;c=this.i.bind(this);G(this.f,b,"waiting",c);this.b=new Xb(c);this.b.start(.25,!0);}bh.prototype.L=function(){this.f&&(this.f.L(),this.f=null);null!=this.b&&(this.b.stop(),this.b=null);this.a=this.s=this.o=null;};bh.prototype.qb=function(){this.g=!0;this.i();};
  bh.prototype.i=function(){if(0!=this.a.readyState){if(this.a.seeking){if(!this.h)return}else this.h=!1;if(!this.a.paused){this.a.readyState!=this.l&&(this.c=!1,this.l=this.a.readyState);var b=this.m.smallGapLimit,c=this.a.currentTime,d=this.a.buffered;a:{if(d&&d.length&&!(1==d.length&&1E-6>d.end(0)-d.start(0))){var e=Qb("Edge/")||Qb("Trident/")||Qb("Tizen")||Qb("CrKey")?.5:.1;for(var f=0;f<d.length;f++)if(d.start(f)>c&&(0==f||d.end(f-1)-c<=e)){e=f;break a}}e=null;}if(null==e){d=this.v;e=d.g;c=Zg(e);
  e=e.a.currentTime;f=Date.now()/1E3;if(d.a!=e||d.f!=c)d.b=f,d.a=e,d.f=c;e=f-d.b;1<=e&&c&&d.c(d.a,e);}else if(0!=e||this.g){f=d.start(e);var g=this.s.qa();if(!(f>=g)){g=f-c;b=g<=b;var h=!1;.001>g||(b||this.c||(this.c=!0,c=new D("largegap",{currentTime:c,gapSize:g}),c.cancelable=!0,this.o(c),this.m.jumpLargeGaps&&!c.defaultPrevented&&(h=!0)),!b&&!h)||(0!=e&&d.end(e-1),this.a.currentTime=f);}}}}};function ch(b){this.c=b;this.a=null;this.b=function(){};}ch.prototype.L=function(){this.a=this.c=null;this.b=function(){};};ch.prototype.g=function(b){for(var c=this.a,d=this.c.periods[0],e=q(this.c.periods),f=e.next();!f.done;f=e.next())f=f.value,b>=f.startTime&&(d=f);b=d;c!=b&&this.b(b);this.a=b;};function dh(b,c){b.b=c;}function eh(b,c,d){this.a=b;this.i=c;this.h=d;this.c=new Eb;this.f=1;this.g=!1;this.b=null;0<b.readyState?this.od():Hb(this.c,b,"loadedmetadata",this.od.bind(this));G(this.c,b,"ratechange",this.Re.bind(this));}n=eh.prototype;n.L=function(){this.c&&(this.c.L(),this.c=null);null!=this.b&&(this.b.stop(),this.b=null);this.a=this.i=null;};function fh(b){return 0<b.a.readyState?b.a.currentTime:b.h}function gh(b,c){0<b.a.readyState?hh(b,b.a.currentTime,c):(b.h=c,setTimeout(b.i,0));}n.jb=function(){return this.f};
  function ih(b,c){null!=b.b&&(b.b.stop(),b.b=null);b.f=c;b.a.playbackRate=b.g||0>c?0:c;!b.g&&0>c&&(b.b=new Xb(function(){b.a.currentTime+=c/4;}),b.b.start(.25,!0));}n.Re=function(){var b=this.g||0>this.f?0:this.f;this.a.playbackRate&&this.a.playbackRate!=b&&ih(this,this.a.playbackRate);};n.od=function(){.001>Math.abs(this.a.currentTime-this.h)?this.pd():(Hb(this.c,this.a,"seeking",this.pd.bind(this)),this.a.currentTime=0==this.a.currentTime?this.h:this.a.currentTime);};
  n.pd=function(){var b=this;G(this.c,this.a,"seeking",function(){return b.i()});};function hh(b,c,d){function e(){!b.a||10<=f++||b.a.currentTime!=c||(b.a.currentTime=d,setTimeout(e,100));}b.a.currentTime=d;var f=0;setTimeout(e,100);}function jh(b,c,d,e,f,g,h){this.c=b;this.a=c;this.m=d;this.h=e;this.l=g;this.f=null;this.g=new bh(b,c,e,h);c=this.Te.bind(this);null==f?f=Infinity>this.a.T()?this.a.Sa():this.a.qa():0>f&&(f=this.a.qa()+f);f=kh(this,lh(this,f));this.b=new eh(b,c,f);this.f=new Xb(this.Qe.bind(this));this.f.start(.25,!0);}n=jh.prototype;n.L=function(){this.b&&(this.b.L(),this.b=null);this.g&&(this.g.L(),this.g=null);this.f&&(this.f.stop(),this.f=null);this.c=this.b=this.a=this.l=this.h=null;};
  function mh(b){var c=fh(b.b);0<b.c.readyState&&(b.c.paused||(c=lh(b,c)));return c}n.jb=function(){return this.b.jb()};n.qb=function(){this.g.qb();};n.Qe=function(){if(0!=this.c.readyState&&!this.c.paused){var b=this.c.currentTime,c=this.a.Sa(),d=this.a.qa();3>d-c&&(c=d-3);b<c&&(b=nh(this,b),this.c.currentTime=b);}};n.Te=function(){var b=this.g;b.h=!0;b.g=!1;b.c=!1;var c=fh(this.b);b=nh(this,c);if(.001<Math.abs(b-c)&&(c=(new Date).getTime()/1E3,!this.i||this.i<c-1)){this.i=c;gh(this.b,b);return}this.l();};
  function kh(b,c){var d=b.a.T();return c>=d?d-b.h.durationBackoff:c}function nh(b,c){var d=Rc.bind(null,b.c.buffered),e=Math.max(b.m,b.h.rebufferingGoal),f=b.h.safeSeekOffset,g=b.a.Sa(),h=b.a.qa(),k=b.a.T();3>h-g&&(g=h-3);var l=b.a.kb(e),m=b.a.kb(f);e=b.a.kb(e+f);return c>=k?kh(b,c):c>h?h:c<g?d(m)?m:e:c>=l||d(c)?c:e}function lh(b,c){var d=b.a.Sa();if(c<d)return d;d=b.a.qa();return c>d?d:c}function oh(){this.b=function(){};this.a=new Set;}oh.prototype.L=function(){this.b=function(){};this.a.clear();};function ph(b,c){b.b=c;}function qh(b){var c=this;this.h=b;this.f=new Map;this.a=function(){};this.b=function(){};this.c=function(){};this.i=[{Oa:null,Na:rh,Ga:function(b,e){return c.a(b,e)}},{Oa:sh,Na:rh,Ga:function(b,e){return c.a(b,e)}},{Oa:th,Na:rh,Ga:function(b,e){return c.a(b,e)}},{Oa:rh,Na:sh,Ga:function(b,e){return c.b(b,e)}},{Oa:rh,Na:th,Ga:function(b,e){return c.b(b,e)}},{Oa:sh,Na:th,Ga:function(b,e){return c.c(b,e)}},{Oa:th,Na:sh,Ga:function(b,e){return c.c(b,e)}}];}
  qh.prototype.L=function(){this.h=null;this.f.clear();this.a=function(){};this.b=function(){};this.c=function(){};};qh.prototype.g=function(b,c){for(var d=q(this.h.a),e=d.next();!e.done;e=d.next()){e=e.value;var f=this.f.get(e),g=b<e.startTime?sh:b>e.endTime?th:rh;this.f.set(e,g);for(var h=q(this.i),k=h.next();!k.done;k=h.next())k=k.value,k.Oa==f&&k.Na==g&&k.Ga(e,c);}};function uh(b,c,d,e){b.a=c;b.b=d;b.c=e;}var sh=1,rh=2,th=3;function vh(b,c){this.a=c;this.b=b;this.g=null;this.l=1;this.s=Promise.resolve();this.h=[];this.i=new Map;this.c=new Map;this.o=!1;this.D=null;this.A=this.f=this.m=!1;this.v=0;}n=vh.prototype;n.destroy=function(){for(var b=q(this.c.values()),c=b.next();!c.done;c=b.next())wh(c.value);this.c.clear();this.i.clear();this.g=this.h=this.s=this.b=this.a=null;this.f=!0;return Promise.resolve()};
  n.configure=function(b){this.g=b;this.D=new fb({maxAttempts:Math.max(b.retryParameters.maxAttempts,2),baseDelay:b.retryParameters.baseDelay,backoffFactor:b.retryParameters.backoffFactor,fuzzFactor:b.retryParameters.fuzzFactor,timeout:0},!0);};
  n.init=function(){var b=this;return t(function d(){var e,f,g;return v(d,function(d){switch(d.j){case 1:return e=b.a.Ra(),f=J.Jb(b.b,e),g=b.a.jd(b.b.periods[f]),g.variant||g.text?u(d,xh(b,g.variant?g.variant.audio:null,g.variant?g.variant.video:null,g.text,e),2):d["return"](Promise.reject(new B(2,5,5005)));case 2:if(b.f)return d["return"]();b.a&&b.a.Je&&b.a.Je();d.j=0;}})})};function yh(b){return zh(b,"audio")}function Ah(b){return zh(b,"video")}
  function zh(b,c){var d=b.c.get(c);return d?d.ya||d.stream:null}function Bh(b,c){return t(function e(){var f,g,h,k,l,m,p,r;return v(e,function(e){switch(e.j){case 1:return f=Wc,sd(b.a.J,f.Pa),b.v++,b.A=!1,g=b.v,h=b.a.J,k=new Map,l=new Set,k.set(f.Pa,c),l.add(c),u(e,h.init(k,!1),2);case 2:return b.f?e["return"]():u(e,Ch(b,l),3);case 3:if(b.f)return e["return"]();b.v!=g||b.c.has(f.Pa)||b.A||(m=b.a.Ra(),p=J.Jb(b.b,m),r=Dh(c,p,0),b.c.set(f.Pa,r),b.o&&Eh(b,r,0));e.j=0;}})})}
  function Fh(b,c){var d=b.c.get("video");if(d){var e=d.stream;if(e)if(c){var f=e.trickModeVideo;f&&!d.ya&&(Gh(b,f,!1,0),d.ya=e);}else if(e=d.ya)d.ya=null,Gh(b,e,!0,0);}}function Hh(b,c,d,e){c.video&&Gh(b,c.video,d,e);c.audio&&Gh(b,c.audio,d,e);}
  function Gh(b,c,d,e){var f=b.c.get(c.type);if(!f&&"text"==c.type&&b.g.ignoreTextStreamFailures)Bh(b,c);else if(f){var g=J.Ea(b.b,c);d&&g!=f.xa?Ih(b):(f.ya&&(c.trickModeVideo?(f.ya=c,c=c.trickModeVideo):f.ya=null),(g=b.h[g])&&g.bb&&(g=b.i.get(c.id))&&g.bb&&f.stream!=c&&("text"==c.type&&ld(b.a.J,Mb(c.mimeType,c.codecs)),f.stream=c,f.Ob=!0,d&&(f.Da?f.Vb=!0:f.Ia?(f.Ba=!0,f.Fb=e,f.Vb=!0):(wh(f),Jh(b,f,!0,e)))));}}
  function Kh(b){var c=b.a.Ra(),d=b.g.smallGapLimit;Array.from(b.c.keys()).every(function(e){var f=b.a.J;"text"==e?(e=f.a,e=c>=e.a&&c<e.b):(e=nd(f,e),e=Rc(e,c,d));return e})||Ih(b);}function Ih(b){b.c.forEach(function(c,d){c.Da||c.Ba||(c.Ia?(c.Ba=!0,c.Fb=0):null==md(b.a.J,d)?null==c.Aa&&Eh(b,c,0):(wh(c),Jh(b,c,!1,0)));});}
  function xh(b,c,d,e,f){return t(function h(){var k,l,m,p,r,w,x;return v(h,function(h){switch(h.j){case 1:return k=b.a.Ra(),l=J.Jb(b.b,k),m=Wc,p=new Map,r=new Set,c&&(p.set(m.Nd,c),r.add(c)),d&&(p.set(m.Sd,d),r.add(d)),e&&(p.set(m.Pa,e),r.add(e)),w=b.a.J,x=b.g.forceTransmuxTS,u(h,w.init(p,x),2);case 2:if(b.f)return h["return"]();Lh(b);return u(h,Ch(b,r),3);case 3:if(b.f)return h["return"]();p.forEach(function(c,d){if(!b.c.has(d)){var e=Dh(c,l,f);b.c.set(d,e);Eh(b,e,0);}});h.j=0;}})})}
  function Dh(b,c,d){return {stream:b,type:b.type,Va:null,ra:null,ya:null,Ob:!0,xa:c,endOfStream:!1,Ia:!1,Aa:null,Ba:!1,Fb:0,Vb:!1,Da:!1,wc:!1,mb:!1,zd:d}}
  function Mh(b,c){var d=b.h[c];if(d)return d.promise;d={promise:new z,bb:!1};b.h[c]=d;for(var e=new Set,f=q(b.b.periods[c].variants),g=f.next();!g.done;g=f.next())g=g.value,g.video&&e.add(g.video),g.video&&g.video.trickModeVideo&&e.add(g.video.trickModeVideo),g.audio&&e.add(g.audio);f=q(b.b.periods[c].textStreams);for(g=f.next();!g.done;g=f.next())e.add(g.value);b.s=b.s.then(function(){if(!this.f)return Ch(this,e)}.bind(b)).then(function(){this.f||(this.h[c].promise.resolve(),this.h[c].bb=!0);}.bind(b))["catch"](function(b){this.f||
  (this.h[c].promise["catch"](function(){}),this.h[c].promise.reject(),delete this.h[c],this.a.onError(b));}.bind(b));return d.promise}
  function Ch(b,c){return t(function e(){var f,g,h,k,l,m,p;return v(e,function(e){switch(e.j){case 1:f=[];for(var r=q(c),x=r.next();!x.done;x=r.next())g=x.value,(h=b.i.get(g.id))?f.push(h.promise):(b.i.set(g.id,{promise:new z,bb:!1}),f.push(g.createSegmentIndex()));qa(e,2);return u(e,Promise.all(f),4);case 4:if(b.f)return e["return"]();sa(e,3);break;case 2:k=ta(e);if(b.f)return e["return"]();e=q(c);for(x=e.next();!x.done;x=e.next())l=x.value,b.i.get(l.id).promise["catch"](function(){}),b.i.get(l.id).promise.reject(),
  b.i["delete"](l.id);throw k;case 3:r=q(c);for(x=r.next();!x.done;x=r.next())m=x.value,p=b.i.get(m.id),p.bb||(p.promise.resolve(),p.bb=!0);e.j=0;}})})}function Lh(b){var c=b.b.presentationTimeline.T();Infinity>c?b.a.J.ma(c):b.a.J.ma(Math.pow(2,32));}
  n.If=function(b){if(!this.f&&!b.Ia&&null!=b.Aa&&!b.Da)if(b.Aa=null,b.Ba)Jh(this,b,b.Vb,b.Fb);else{try{var c=Nh(this,b);null!=c&&(Eh(this,b,c),b.mb=!1);}catch(d){Oh(this,d);return}c=Array.from(this.c.values());Ph(this,b);c.every(function(b){return b.endOfStream})&&this.a.J.endOfStream().then(function(){if(!this.f){var b=this.a.J.T();b<this.b.presentationTimeline.T()&&this.b.presentationTimeline.ma(b);}}.bind(this));}};
  function Nh(b,c){function d(b){return "text"==b.type&&"application/cea-608"==b.stream.mimeType}if(d(c))return b.a.J.Tb(c.stream.originalId||""),null;var e=b.a.Ra(),f=Qh(b,c,e),g=J.Ea(b.b,c.stream),h=J.Jb(b.b,f),k=pd(b.a.J,c.type,e),l=Math.max(b.b.minBufferTime||0,b.g.rebufferingGoal,b.g.bufferingGoal)*b.l;if(f>=b.b.presentationTimeline.T())return c.endOfStream=!0,"video"==c.type&&(f=b.c.get("text"))&&"application/cea-608"==f.stream.mimeType&&(f.endOfStream=!0),null;c.endOfStream=!1;c.xa=h;if(h!=g)return null;
  if(k>=l)return .5;h=od(b.a.J,c.type);h=Rh(b,c,e,h,g);if(!h)return 1;var m=Infinity;Array.from(b.c.values()).forEach(function(c){d(c)||(m=Math.min(m,Qh(b,c,e)));});if(f>=m+b.b.presentationTimeline.a)return 1;c.zd=0;Sh(b,c,e,g,h);return null}function Qh(b,c,d){return c.Va&&c.ra?b.b.periods[J.Ea(b.b,c.Va)].startTime+c.ra.endTime:Math.max(d,c.zd)}
  function Rh(b,c,d,e,f){if(c.ra&&c.stream==c.Va)return Th(b,c,f,c.ra.position+1);d=c.ra?c.stream.findSegmentPosition(Math.max(0,b.b.periods[J.Ea(b.b,c.Va)].startTime+c.ra.endTime-b.b.periods[f].startTime)):c.stream.findSegmentPosition(Math.max(0,(e||d)-b.b.periods[f].startTime));if(null==d)return null;var g=null;null==e&&(g=Th(b,c,f,Math.max(0,d-1)));return g||Th(b,c,f,d)}
  function Th(b,c,d,e){d=b.b.periods[d];c=c.stream.getSegmentReference(e);if(!c)return null;e=b.b.presentationTimeline;b=e.lb();e=e.Ta();return d.startTime+c.endTime<b||d.startTime+c.startTime>e?null:c}
  function Sh(b,c,d,e,f){var g=b.b.periods[e],h=c.stream,k=b.b.presentationTimeline.T(),l=b.b.periods[e+1];e=Uh(b,c,e,Math.max(0,g.startTime-.1),l?l.startTime+.01:k);c.Ia=!0;c.Ob=!1;k=Vh(b,f);Promise.all([e,k]).then(function(b){if(!this.f&&!this.m)return Wh(this,c,d,g,h,f,b[1])}.bind(b)).then(function(){this.f||this.m||(c.Ia=!1,c.wc=!1,c.Ba||this.a.qb(),Eh(this,c,0),Xh(this,h));}.bind(b))["catch"](function(b){this.f||this.m||(c.Ia=!1,"text"==c.type&&this.g.ignoreTextStreamFailures?this.c["delete"]("text"):
  3017==b.code?Yh(this,c,b):(c.mb=!0,b.severity=2,Oh(this,b)));}.bind(b));}function Yh(b,c,d){if(!Array.from(b.c.values()).some(function(b){return b!=c&&b.wc})){var e=Math.round(100*b.l);if(20<e)b.l-=.2;else if(4<e)b.l-=.04;else{c.mb=!0;b.m=!0;b.a.onError(d);return}c.wc=!0;}Eh(b,c,4);}
  function Uh(b,c,d,e,f){if(!c.Ob)return Promise.resolve();d=td(b.a.J,c.type,b.b.periods[d].startTime-c.stream.presentationTimeOffset,e,f);if(!c.stream.initSegmentReference)return d;b=Vh(b,c.stream.initSegmentReference).then(function(b){if(!this.f)return qd(this.a.J,c.type,b,null,null,c.stream.closedCaptions&&0<c.stream.closedCaptions.size)}.bind(b))["catch"](function(b){c.Ob=!0;return Promise.reject(b)});return Promise.all([d,b])}
  function Wh(b,c,d,e,f,g,h){var k=f.closedCaptions&&0<f.closedCaptions.size;null!=f.emsgSchemeIdUris&&0<f.emsgSchemeIdUris.length&&(new Q).aa("emsg",b.df.bind(b,e,g,f.emsgSchemeIdUris)).parse(h);return Zh(b,c,d).then(function(){if(!this.f)return qd(this.a.J,c.type,h,g.startTime+e.startTime,g.endTime+e.startTime,k)}.bind(b)).then(function(){if(!this.f)return c.Va=f,c.ra=g,Promise.resolve()}.bind(b))}
  n.df=function(b,c,d,e){var f=e.reader.uc(),g=e.reader.uc(),h=e.reader.C(),k=e.reader.C(),l=e.reader.C(),m=e.reader.C();e=e.reader.Ja(e.reader.H.byteLength-e.reader.X());b=b.startTime+c.startTime+k/h;if(d.includes(f))if("urn:mpeg:dash:event:2012"==f)this.a.Ke();else this.a.onEvent(new D("emsg",{detail:{startTime:b,endTime:b+l/h,schemeIdUri:f,value:g,timescale:h,presentationTimeDelta:k,eventDuration:l,id:m,messageData:e}}));};
  function Zh(b,c,d){var e=Math.max(b.g.bufferBehind,b.b.presentationTimeline.a),f=md(b.a.J,c.type);if(null==f)return Promise.resolve();d=d-f-e;return 0>=d?Promise.resolve():b.a.J.remove(c.type,f,f+d).then(function(){}.bind(b))}
  function Xh(b,c){if(!b.o&&(b.o=Array.from(b.c.values()).every(function(b){return "text"==b.type?!0:!b.Ba&&!b.Da&&b.ra}),b.o)){var d=J.Ea(b.b,c);b.h[d]||Mh(b,d).then(function(){this.f||this.a.hd();}.bind(b))["catch"](H.pb);for(d=0;d<b.b.periods.length;++d)Mh(b,d)["catch"](H.pb);b.a.We&&b.a.We();}}
  function Ph(b,c){if(c.xa!=J.Ea(b.b,c.stream)){var d=c.xa,e=Array.from(b.c.values());e.every(function(b){return b.xa==d})&&e.every($h)&&Mh(b,d).then(function(){if(!this.f&&e.every(function(b){var c=J.Ea(this.b,b.stream);return $h(b)&&b.xa==d&&c!=d}.bind(this))){var b=this.b.periods[d],c=this.a.jd(b),h=new Map;c.variant&&c.variant.video&&h.set("video",c.variant.video);c.variant&&c.variant.audio&&h.set("audio",c.variant.audio);c.text&&h.set("text",c.text);var k=q(this.c.keys());for(c=k.next();!c.done;c=
  k.next())if(c=c.value,!h.has(c)&&"text"!=c){this.a.onError(new B(2,5,5005));return}k=q(Array.from(h.keys()));for(c=k.next();!c.done;c=k.next())if(c=c.value,!this.c.has(c))if("text"==c)xh(this,null,null,h.get("text"),b.startTime),h["delete"](c);else{this.a.onError(new B(2,5,5005));return}b=q(Array.from(this.c.keys()));for(c=b.next();!c.done;c=b.next())c=c.value,(k=h.get(c))?(Gh(this,k,!1,0),Eh(this,this.c.get(c),0)):this.c["delete"](c);this.a.hd();}}.bind(b))["catch"](H.pb);}}
  function $h(b){return !b.Ia&&null==b.Aa&&!b.Ba&&!b.Da}function Vh(b,c){var d=Ab(c.c(),b.g.retryParameters);if(0!=c.b||null!=c.a){var e="bytes="+c.b+"-";null!=c.a&&(e+=c.a);d.headers.Range=e;}return b.a.ob.request(1,d).promise.then(function(b){return b.data})}
  function Jh(b,c,d,e){t(function g(){var h,k,l;return v(g,function(g){switch(g.j){case 1:return c.Ba=!1,c.Vb=!1,c.Fb=0,c.Da=!0,e?(k=b.a.Ra(),l=b.a.J.T(),h=b.a.J.remove(c.type,k+e,l)):h=sd(b.a.J,c.type).then(function(){if(!this.f&&d)return this.a.J.flush(c.type)}.bind(b)),u(g,h,2);case 2:if(b.f)return g["return"]();c.Va=null;c.ra=null;c.Da=!1;c.endOfStream=!1;Eh(b,c,0);g.j=0;}})});}function Eh(b,c,d){c.Aa=window.setTimeout(b.If.bind(b,c),1E3*d);}
  function wh(b){null!=b.Aa&&(window.clearTimeout(b.Aa),b.Aa=null);}function Oh(b,c){ib(b.D).then(function(){this.f||(this.a.onError(c),c.handled||this.g.failureCallback(c));}.bind(b));}function ai(b,c,d,e,f,g){if(200<=d&&299>=d&&202!=d)return f&&(e=f),{uri:e,data:c,headers:b,fromCache:!!b["x-shaka-from-cache"]};f=null;try{f=Vb(c);}catch(h){}throw new B(401==d||403==d?2:1,1,1001,e,d,f,b,g);}function W(b,c,d,e){var f=new W.b;Kb(c.headers).forEach(function(b,c){f.append(c,b);});var g=new W.a,h={body:c.body||void 0,headers:f,method:c.method,signal:g.signal,credentials:c.allowCrossSiteCredentials?"include":void 0},k={Oc:!1,Jd:!1},l;c.retryParameters.timeout&&(l=setTimeout(function(){k.Jd=!0;g.abort();},c.retryParameters.timeout));b=W.h(b,d,h,k,l,e);return new C(b,function(){k.Oc=!0;g.abort();return Promise.resolve()})}y("shaka.net.HttpFetchPlugin",W);
  W.h=function(b,c,d,e,f,g){return t(function k(){var l,m,p,r,w,x,A,P,U,X,ea,ha;return v(k,function(k){switch(k.j){case 1:return l=W.g,m=W.c,x=w=0,A=Date.now(),qa(k,2,3),u(k,l(b,d),5);case 5:return p=k.u,P=p.clone().body.getReader(),U=function(b){function c(){return t(function Lc(){var d,e;return v(Lc,function(f){switch(f.j){case 1:return u(f,P.read(),2);case 2:d=f.u;d.done||(w+=d.value.byteLength);e=Date.now();if(100<e-A||d.done)g(e-A,w-x),x=w,A=e;d.done?b.close():(b.enqueue(d.value),c());f.j=0;}})})}
  c();},new m({start:U}),u(k,p.arrayBuffer(),6);case 6:r=k.u;case 3:ua(k);clearTimeout(f);va(k,4);break;case 2:X=ta(k);if(e.Oc)throw new B(1,1,7001,b,c);if(e.Jd)throw new B(1,1,1003,b,c);throw new B(1,1,1002,b,X,c);case 4:return ea={},ha=p.headers,ha.forEach(function(b,c){ea[c.trim()]=b;}),k["return"](ai(ea,r,p.status,b,p.url,c))}})})};W.isSupported=function(){if(window.ReadableStream)try{new ReadableStream({});}catch(b){return !1}else return !1;return !(!window.fetch||!window.AbortController)};
  W.isSupported=W.isSupported;W.g=window.fetch;W.a=window.AbortController;W.c=window.ReadableStream;W.b=window.Headers;W.isSupported()&&(zb("http",W,2),zb("https",W,2));function bi(b,c,d,e){var f=new bi.f,g=Date.now(),h=0,k=new Promise(function(k,m){f.open(c.method,b,!0);f.responseType="arraybuffer";f.timeout=c.retryParameters.timeout;f.withCredentials=c.allowCrossSiteCredentials;f.onabort=function(){m(new B(1,1,7001,b,d));};f.onload=function(c){c=c.target;var e=c.getAllResponseHeaders().trim().split("\r\n"),f={};e=q(e);for(var g=e.next();!g.done;g=e.next())g=g.value.split(": "),f[g[0].toLowerCase()]=g.slice(1).join(": ");try{var h=ai(f,c.response,c.status,b,c.responseURL,
  d);k(h);}catch(U){m(U);}};f.onerror=function(c){m(new B(1,1,1002,b,c,d));};f.ontimeout=function(){m(new B(1,1,1003,b,d));};f.onprogress=function(b){var c=Date.now();if(100<c-g||b.lengthComputable&&b.loaded==b.total)e(c-g,b.loaded-h),h=b.loaded,g=c;};for(var l in c.headers)f.setRequestHeader(l.toLowerCase(),c.headers[l]);f.send(c.body);});return new C(k,function(){f.abort();return Promise.resolve()})}y("shaka.net.HttpXHRPlugin",bi);bi.f=window.XMLHttpRequest;zb("http",bi,1);zb("https",bi,1);function ci(b,c){this.i=b;this.c=new Map;this.g=!1;this.h=c;this.a=this.b=this.f=0;}ci.prototype.destroy=function(){this.g=!0;return Promise.all(this.c.values()).then(function(){},function(){})};
  function di(b,c,d,e,f){b.b+=e;var g=b.c.get(c)||Promise.resolve();b.c.set(c,g.then(function(){return t(function k(){var c,g;return v(k,function(k){switch(k.j){case 1:return u(k,ei(b,d),2);case 2:c=k.u;if(b.g)throw new B(2,9,7001);b.f+=e;b.a+=c.byteLength;g=b.b?b.f/b.b:0;b.h(g,b.a);return k["return"](f(c))}})})}));}function fi(b){return t(function d(){return v(d,function(d){switch(d.j){case 1:return u(d,Promise.all(b.c.values()),2);case 2:return d["return"](b.a)}})})}
  function ei(b,c){return t(function e(){var f,g;return v(e,function(e){switch(e.j){case 1:return f=b.i.request(1,c),u(e,f.promise,2);case 2:return g=e.u,e["return"](g.data)}})})}function gi(b,c){var d=this;this.c=b;this.b=b.objectStore(c);this.a=new z;b.onabort=function(b){b.preventDefault();d.a.reject();};b.onerror=function(b){b.preventDefault();d.a.reject();};b.oncomplete=function(){d.a.resolve();};}gi.prototype.abort=function(){try{this.c.abort();}catch(b){}return this.a["catch"](function(){})};
  function hi(b,c){return new Promise(function(d,e){var f=b.b.openCursor();f.onerror=e;f.onsuccess=function(b){b=b.target.result;if(!b)return d();c(b.key,b.value,b);b["continue"]();};})}gi.prototype.store=function(){return this.b};gi.prototype.promise=function(){return this.a};function ii(b){this.b=b;this.a=[];}ii.prototype.destroy=function(){return Promise.all(this.a.map(function(b){return b.abort()}))};function ji(b,c){return ki(b,c,"readonly")}function li(b,c){return ki(b,c,"readwrite")}function ki(b,c,d){d=b.b.transaction([c],d);var e=new gi(d,c);b.a.push(e);e.promise().then(function(){tb(b.a,e);},function(){tb(b.a,e);});return e}function mi(b){this.a=new ii(b);}mi.prototype.destroy=function(){return this.a.destroy()};mi.prototype.getAll=function(){var b=this;return t(function d(){var e,f;return v(d,function(d){switch(d.j){case 1:return e=ji(b.a,"session-ids"),f=[],u(d,hi(e,function(b,d){f.push(d);}),2);case 2:return u(d,e.promise(),3);case 3:return d["return"](f)}})})};mi.prototype.add=function(b){var c=li(this.a,"session-ids"),d=c.store();b=q(b);for(var e=b.next();!e.done;e=b.next())d.add(e.value);return c.promise()};
  mi.prototype.remove=function(b){var c=this;return t(function e(){var f;return v(e,function(e){switch(e.j){case 1:return f=li(c.a,"session-ids"),u(e,hi(f,function(c,e,f){0<=b.indexOf(e.sessionId)&&f["delete"]();}),2);case 2:return u(e,f.promise(),0)}})})};function ni(){this.a=new Map;}ni.prototype.destroy=function(){for(var b=[],c=q(this.a.values()),d=c.next();!d.done;d=c.next())b.push(d.value.destroy());this.a.clear();return Promise.all(b)};ni.prototype.init=function(){var b=this;oi.forEach(function(c,d){var e=c();e&&b.a.set(d,e);});for(var c=[],d=q(this.a.values()),e=d.next();!e.done;e=d.next())c.push(e.value.init());return Promise.all(c)};
  function pi(b){var c=null;b.a.forEach(function(b,e){b.getCells().forEach(function(b,d){b.hasFixedKeySpace()||c||(c={path:{ka:e,W:d},W:b});});});if(c)return c;throw new B(2,9,9013,"Could not find a cell that supports add-operations");}function qi(b,c){b.a.forEach(function(b,e){b.getCells().forEach(function(b,d){c({ka:e,W:d},b);});});}
  function ri(b,c,d){b=b.a.get(c);if(!b)throw new B(2,9,9013,"Could not find mechanism with name "+c);c=b.getCells().get(d);if(!c)throw new B(2,9,9013,"Could not find cell with name "+d);return c}function si(b,c){b.a.forEach(function(b){c(b.getEmeSessionCell());});}function ti(b){var c=Array.from(b.a.keys());if(!c.length)throw new B(2,9,9E3,"No supported storage mechanisms found");return b.a.get(c[0]).getEmeSessionCell()}
  ni.prototype.erase=function(){var b=this;return t(function d(){var e,f,g;return v(d,function(d){switch(d.j){case 1:return e=Array.from(b.a.values()),f=0<e.length,f||(g=oi,g.forEach(function(b){(b=b())&&e.push(b);})),u(d,Promise.all(e.map(function(b){return b.erase()})),2);case 2:if(f)d.B(0);else return u(d,Promise.all(e.map(function(b){return b.destroy()})),0)}})})};function ui(b,c){oi.set(b,c);}y("shaka.offline.StorageMuxer.register",ui);y("shaka.offline.StorageMuxer.unregister",function(b){oi["delete"](b);});
  function vi(){for(var b=q(oi.values()),c=b.next();!c.done;c=b.next())if(c=c.value,c=c())return c.destroy(),!0;return !1}var oi=new Map;function wi(b){this.a=new ii(b);}n=wi.prototype;n.destroy=function(){return this.a.destroy()};n.hasFixedKeySpace=function(){return !0};n.addSegments=function(){return xi("segment")};n.removeSegments=function(b,c){return yi(this,"segment",b,c)};n.getSegments=function(b){return zi(this,"segment",b).then(function(b){return b.map(Ai)})};n.addManifests=function(){return xi("manifest")};
  n.updateManifestExpiration=function(b,c){var d=li(this.a,"manifest"),e=d.store(),f=new z;e.get(b).onsuccess=function(d){(d=d.target.result)?(d.expiration=c,e.put(d),f.resolve()):f.reject(new B(2,9,9012,"Could not find values for "+b));};return d.promise().then(function(){return f})};n.removeManifests=function(b,c){return yi(this,"manifest",b,c)};n.getManifests=function(b){return zi(this,"manifest",b).then(function(b){return b.map(Bi)})};
  n.getAllManifests=function(){var b=this;return t(function d(){var e,f,g;return v(d,function(d){switch(d.j){case 1:return e=Bi,f=ji(b.a,"manifest"),g=new Map,u(d,hi(f,function(b,d){g.set(b,e(d));}),2);case 2:return u(d,f.promise(),3);case 3:return d["return"](g)}})})};function xi(b){return Promise.reject(new B(2,9,9011,"Cannot add new value to "+b))}function yi(b,c,d,e){b=li(b.a,c);var f=b.store();d.forEach(function(b){f["delete"](b).onsuccess=function(){return e(b)};});return b.promise()}
  function zi(b,c,d){b=ji(b.a,c);var e=b.store(),f={},g=[];d.forEach(function(b){e.get(b).onsuccess=function(c){c=c.target.result;void 0==c&&g.push(b);f[b]=c;};});return b.promise().then(function(){return g.length?Promise.reject(new B(2,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}
  function Bi(b){return {originalManifestUri:b.originalManifestUri,duration:b.duration,size:b.size,expiration:null==b.expiration?Infinity:b.expiration,periods:b.periods.map(Ci),sessionIds:b.sessionIds,drmInfo:b.drmInfo,appMetadata:b.appMetadata}}function Ci(b){Di(b);b.streams.forEach(function(){});return {startTime:b.startTime,streams:b.streams.map(Ei)}}
  function Ei(b){var c=b.Be?Fi(b.Be):null;return {id:b.id,originalId:null,primary:b.primary,presentationTimeOffset:b.presentationTimeOffset,contentType:b.contentType,mimeType:b.mimeType,codecs:b.codecs,frameRate:b.frameRate,kind:b.kind,language:b.language,label:b.label,width:b.width,height:b.height,initSegmentKey:c,encrypted:b.encrypted,keyId:b.keyId,segments:b.segments.map(Gi),variantIds:b.variantIds}}function Gi(b){var c=Fi(b.uri);return {startTime:b.startTime,endTime:b.endTime,dataKey:c}}
  function Ai(b){return {data:b.data}}function Fi(b){var c;if((c=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(b))||(c=/^offline:segment\/([0-9]+)$/.exec(b)))return Number(c[1]);throw new B(2,9,9004,"Could not parse uri "+b);}
  function Di(b){var c=b.streams.filter(function(b){return "audio"==b.contentType}),d=b.streams.filter(function(b){return "video"==b.contentType});if(!c.every(function(b){return b.variantIds})||!d.every(function(b){return b.variantIds})){c.forEach(function(b){b.variantIds=[];});d.forEach(function(b){b.variantIds=[];});var e=0;if(d.length&&!c.length){var f=e++;d.forEach(function(b){b.variantIds.push(f);});}if(!d.length&&c.length){var g=e++;c.forEach(function(b){b.variantIds.push(g);});}d.length&&c.length&&c.forEach(function(b){d.forEach(function(c){var d=
  e++;b.variantIds.push(d);c.variantIds.push(d);});});}}function Hi(b,c,d,e){this.a=new ii(b);this.c=c;this.b=d;this.f=e;}n=Hi.prototype;n.destroy=function(){return this.a.destroy()};n.hasFixedKeySpace=function(){return this.f};n.addSegments=function(b){return Ii(this,this.c,b)};n.removeSegments=function(b,c){return Ji(this,this.c,b,c)};n.getSegments=function(b){return Ki(this,this.c,b)};n.addManifests=function(b){return Ii(this,this.b,b)};
  n.updateManifestExpiration=function(b,c){var d=li(this.a,this.b),e=d.store();e.get(b).onsuccess=function(d){if(d=d.target.result)d.expiration=c,e.put(d,b);};return d.promise()};n.removeManifests=function(b,c){return Ji(this,this.b,b,c)};n.getManifests=function(b){return Ki(this,this.b,b)};
  n.getAllManifests=function(){var b=this;return t(function d(){var e,f;return v(d,function(d){switch(d.j){case 1:return e=ji(b.a,b.b),f=new Map,u(d,hi(e,function(b,d){f.set(b,d);}),2);case 2:return u(d,e.promise(),3);case 3:return d["return"](f)}})})};
  function Ii(b,c,d){if(b.f)return Promise.reject(new B(1,9,9011,"Cannot add new value to "+c));b=li(b.a,c);var e=b.store(),f=[];d.forEach(function(b){e.add(b).onsuccess=function(b){f.push(b.target.result);};});return b.promise().then(function(){return f})}function Ji(b,c,d,e){b=li(b.a,c);var f=b.store();d.forEach(function(b){f["delete"](b).onsuccess=function(){return e(b)};});return b.promise()}
  function Ki(b,c,d){b=ji(b.a,c);var e=b.store(),f={},g=[];d.forEach(function(b){var c=e.get(b);c.onsuccess=function(){void 0==c.result&&g.push(b);f[b]=c.result;};});return b.promise().then(function(){return g.length?Promise.reject(new B(1,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}function Li(){this.g=this.c=this.b=this.a=this.f=null;}n=Li.prototype;
  n.init=function(){var b=this,c=new z,d=window.indexedDB.open("shaka_offline_db",4);d.onsuccess=function(d){d=d.target.result;b.f=d;var e=d.objectStoreNames;e=e.contains("manifest")&&e.contains("segment")?new wi(d):null;b.a=e;e=d.objectStoreNames;e=e.contains("manifest-v2")&&e.contains("segment-v2")?new Hi(d,"segment-v2","manifest-v2",!0):null;b.b=e;e=d.objectStoreNames;e=e.contains("manifest-v3")&&e.contains("segment-v3")?new Hi(d,"segment-v3","manifest-v3",!1):null;b.c=e;d=d.objectStoreNames.contains("session-ids")?
  new mi(d):null;b.g=d;c.resolve();};d.onupgradeneeded=function(b){b=b.target.result;for(var c=q(["segment-v3","manifest-v3","session-ids"]),d=c.next();!d.done;d=c.next())d=d.value,b.objectStoreNames.contains(d)||b.createObjectStore(d,{autoIncrement:!0});};d.onerror=function(b){c.reject(new B(2,9,9001,d.error));b.preventDefault();};return c};
  n.destroy=function(){var b=this;return t(function d(){return v(d,function(d){switch(d.j){case 1:if(!b.a){d.B(2);break}return u(d,b.a.destroy(),2);case 2:if(!b.b){d.B(4);break}return u(d,b.b.destroy(),4);case 4:if(!b.c){d.B(6);break}return u(d,b.c.destroy(),6);case 6:if(!b.g){d.B(8);break}return u(d,b.g.destroy(),8);case 8:b.f&&b.f.close(),d.j=0;}})})};n.getCells=function(){var b=new Map;this.a&&b.set("v1",this.a);this.b&&b.set("v2",this.b);this.c&&b.set("v3",this.c);return b};n.getEmeSessionCell=function(){return this.g};
  n.erase=function(){var b=this;return t(function d(){return v(d,function(d){switch(d.j){case 1:if(!b.a){d.B(2);break}return u(d,b.a.destroy(),2);case 2:if(!b.b){d.B(4);break}return u(d,b.b.destroy(),4);case 4:if(!b.c){d.B(6);break}return u(d,b.c.destroy(),6);case 6:return b.f&&b.f.close(),u(d,Mi(),8);case 8:return b.f=null,b.a=null,b.b=null,b.c=null,u(d,b.init(),0)}})})};
  function Mi(){var b=new z,c=window.indexedDB.deleteDatabase("shaka_offline_db");c.onblocked=function(){};c.onsuccess=function(){b.resolve();};c.onerror=function(d){b.reject(new B(2,9,9001,c.error));d.preventDefault();};return b}ui("idb",function(){return window.indexedDB?new Li:null});function Ni(b,c,d,e){this.a=b;this.g=c;this.f=d;this.c=e;this.b=["offline:",b,"/",c,"/",d,"/",e].join("");}Ni.prototype.ka=function(){return this.g};Ni.prototype.W=function(){return this.f};Ni.prototype.key=function(){return this.c};Ni.prototype.toString=function(){return this.b};
  function Oi(b){b=/^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(b);if(null==b)return null;var c=b[1];if("manifest"!=c&&"segment"!=c)return null;var d=b[2];if(!d)return null;var e=b[3];return e&&null!=c?new Ni(c,d,e,Number(b[4])):null}function Pi(b,c){this.b=b;this.a=c;}function Qi(b,c){var d=new T(null,0);d.ma(c.duration);var e=c.periods.map(function(c){return Ri(b,c,d)}),f=c.drmInfo?[c.drmInfo]:[];c.drmInfo&&e.forEach(function(b){b.variants.forEach(function(b){b.drmInfos=f;});});return {presentationTimeline:d,minBufferTime:2,offlineSessionIds:c.sessionIds,periods:e}}
  function Ri(b,c,d){var e=c.streams.filter(function(b){return "audio"==b.contentType}),f=c.streams.filter(function(b){return "video"==b.contentType});e=Si(b,e,f);f=c.streams.filter(function(b){return "text"==b.contentType}).map(function(c){return Ti(b,c)});c.streams.forEach(function(e){e=e.segments.map(function(c,d){return Ui(b,d,c)});d.Xa(e,c.startTime);});return {startTime:c.startTime,variants:Array.from(e.values()),textStreams:f}}
  function Si(b,c,d){for(var e=new Set,f=q(c),g=f.next();!g.done;g=f.next()){var h=q(g.value.variantIds);for(g=h.next();!g.done;g=h.next())e.add(g.value);}f=q(d);for(g=f.next();!g.done;g=f.next())for(h=q(g.value.variantIds),g=h.next();!g.done;g=h.next())e.add(g.value);f=new Map;e=q(e);for(g=e.next();!g.done;g=e.next())g=g.value,f.set(g,{id:g,language:"",primary:!1,audio:null,video:null,bandwidth:0,drmInfos:[],allowedByApplication:!0,allowedByKeySystem:!0});c=q(c);for(e=c.next();!e.done;e=c.next())for(e=
  e.value,g=Ti(b,e),h=q(e.variantIds),e=h.next();!e.done;e=h.next())e=f.get(e.value),e.language=g.language,e.primary=e.primary||g.primary,e.audio=g;d=q(d);for(c=d.next();!c.done;c=d.next())for(e=c.value,c=Ti(b,e),g=q(e.variantIds),e=g.next();!e.done;e=g.next())e=f.get(e.value),e.primary=e.primary||c.primary,e.video=c;return f}
  function Ti(b,c){var d=c.segments.map(function(c,d){return Ui(b,d,c)}),e=new S(d);d={id:c.id,originalId:c.originalId,createSegmentIndex:function(){return Promise.resolve()},findSegmentPosition:function(b){return e.find(b)},getSegmentReference:function(b){return e.get(b)},initSegmentReference:null,presentationTimeOffset:c.presentationTimeOffset,mimeType:c.mimeType,codecs:c.codecs,width:c.width||void 0,height:c.height||void 0,frameRate:c.frameRate||void 0,kind:c.kind,encrypted:c.encrypted,keyId:c.keyId,
  language:c.language,label:c.label||null,type:c.contentType,primary:c.primary,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],channelsCount:null,closedCaptions:null};null!=c.initSegmentKey&&(d.initSegmentReference=Vi(b,c.initSegmentKey));return d}function Ui(b,c,d){var e=new Ni("segment",b.b,b.a,d.dataKey);return new N(c,d.startTime,d.endTime,function(){return [e.toString()]},0,null)}function Vi(b,c){var d=new Ni("segment",b.b,b.a,c);return new ze(function(){return [d.toString()]},0,null)}function Wi(b){this.a=!1;this.b=new z;this.c=b;}Wi.prototype.destroy=function(){var b=this;if(this.a)return this.b;this.a=!0;return this.c().then(function(){b.b.resolve();},function(){b.b.resolve();})};function Xi(b,c){return t(function e(){return v(e,function(e){switch(e.j){case 1:return ra(e,2),u(e,Promise.resolve(c()),4);case 4:return e["return"](e.u);case 2:return ua(e),u(e,Promise.all(b.map(function(b){return b.destroy()})),5);case 5:va(e,0);}})})}function Yi(){this.a=null;}n=Yi.prototype;n.configure=function(){};n.start=function(b){var c=Oi(b);this.a=c;if(null==c||"manifest"!=c.a)return Promise.reject(new B(2,1,9004,c));var d=new ni;return Xi([d],function(){return t(function f(){var b,h,k,l;return v(f,function(f){switch(f.j){case 1:return u(f,d.init(),2);case 2:return u(f,ri(d,c.ka(),c.W()),3);case 3:return b=f.u,u(f,b.getManifests([c.key()]),4);case 4:return h=f.u,k=h[0],l=new Pi(c.ka(),c.W()),f["return"](Qi(l,k))}})})})};n.stop=function(){return Promise.resolve()};
  n.update=function(){};n.onExpirationUpdated=function(b,c){var d=this.a,e=new ni;return Xi([e],function(){return t(function g(){var h,k,l,m,p;return v(g,function(g){switch(g.j){case 1:return u(g,e.init(),2);case 2:return u(g,ri(e,d.ka(),d.W()),3);case 3:return h=g.u,u(g,h.getManifests([d.key()]),4);case 4:k=g.u;l=k[0];m=l.sessionIds.includes(b);p=void 0==l.expiration||l.expiration>c;if(m&&p)return u(g,h.updateManifestExpiration(d.key(),c),0);g.B(0);}})})})["catch"](function(){})};
  ef["application/x-offline-manifest"]=Yi;function Zi(b){var c=Oi(b);return c&&"manifest"==c.a?Zi.a(b):c&&"segment"==c.a?Zi.b(c.key(),c):jb(new B(2,1,9004,b))}y("shaka.offline.OfflineScheme",Zi);Zi.a=function(b){b={uri:b,data:new ArrayBuffer(0),headers:{"content-type":"application/x-offline-manifest"}};return lb(b)};
  Zi.b=function(b,c){var d=new ni,e=Xi([d],function(){return t(function g(){var b,e,l;return v(g,function(g){switch(g.j){case 1:return u(g,d.init(),2);case 2:return u(g,ri(d,c.ka(),c.W()),3);case 3:return b=g.u,u(g,b.getSegments([c.key()]),4);case 4:return e=g.u,l=e[0],g["return"]({uri:c,data:l.data,headers:{}})}})})});return mb(e)};zb("offline",Zi);function $i(b,c,d){return t(function f(){var g,h,k,l,m,p;return v(f,function(f){switch(f.j){case 1:g=[];for(var r=[],x=q(d),A=x.next();!A.done;A=x.next()){A=A.value;for(var P=!1,U=q(r),X=U.next();!X.done;X=U.next())if(X=X.value,aj(X.info,A)){X.sessionIds.push(A.sessionId);P=!0;break}P||r.push({info:A,sessionIds:[A.sessionId]});}h=q(r);k=h.next();case 2:if(k.done){f.B(4);break}l=k.value;m=bj(b,c,l);return u(f,m,5);case 5:p=f.u;g=g.concat(p);k=h.next();f.B(2);break;case 4:return f["return"](g)}})})}
  function bj(b,c,d){return t(function f(){var g,h;return v(f,function(f){switch(f.j){case 1:return g=new dc({ob:c,onError:function(){},rc:function(){},onExpirationUpdated:function(){},onEvent:function(){}}),qa(f,2),g.configure(b),u(f,lc(g,d.info.keySystem,d.info.licenseUri,d.info.serverCertificate,d.info.audioCapabilities,d.info.videoCapabilities),4);case 4:sa(f,3);break;case 2:return ta(f),u(f,g.destroy(),5);case 5:return f["return"]([]);case 3:return qa(f,6),u(f,sc(g),8);case 8:sa(f,7);break;case 6:return ta(f),
  u(f,g.destroy(),9);case 9:return f["return"]([]);case 7:return h=[],u(f,Promise.all(d.sessionIds.map(function(b){return t(function p(){return v(p,function(c){switch(c.j){case 1:return qa(c,2),u(c,vc(g,b),4);case 4:h.push(b);sa(c,0);break;case 2:ta(c),c.j=0;}})})})),10);case 10:return u(f,g.destroy(),11);case 11:return f["return"](h)}})})}
  function aj(b,c){function d(b,c){return b.robustness==c.robustness&&b.contentType==c.contentType}return b.keySystem==c.keySystem&&b.licenseUri==c.licenseUri&&vb(b.audioCapabilities,c.audioCapabilities,d)&&vb(b.videoCapabilities,c.videoCapabilities,d)}function cj(b,c,d,e,f){var g=f in e,h=!0,k;for(k in c){var l=f+"."+k,m=g?e[f]:d[k];g||k in d?void 0===c[k]?void 0===m||g?delete b[k]:b[k]=qb(m):m.constructor==Object&&c[k]&&c[k].constructor==Object?(b[k]||(b[k]=qb(m)),l=cj(b[k],c[k],m,e,l),h=h&&l):typeof c[k]!=typeof m||null==c[k]||c[k].constructor!=m.constructor?h=!1:b[k]=c[k]:h=!1;}return h}y("shaka.util.ConfigUtils.mergeConfigObjects",cj);function dj(){var b=5E5,c=Infinity;navigator.connection&&navigator.connection.type&&(b=1E6*navigator.connection.downlink,navigator.connection.saveData&&(c=360));var d={trackSelectionCallback:function(b){return b},progressCallback:function(){},usePersistentLicense:!0},e={drm:{retryParameters:gb(),servers:{},clearKeys:{},advanced:{},delayLicenseRequestUntilPlayed:!1},manifest:{retryParameters:gb(),availabilityWindowOverride:NaN,dash:{customScheme:function(b){if(b)return null},clockSyncUri:"",ignoreDrmInfo:!1,
  xlinkFailGracefully:!1,defaultPresentationDelay:10,ignoreMinBufferTime:!1}},streaming:{retryParameters:gb(),failureCallback:function(){},rebufferingGoal:2,bufferingGoal:10,bufferBehind:30,ignoreTextStreamFailures:!1,alwaysStreamText:!1,startAtSegmentBoundary:!1,smallGapLimit:.5,jumpLargeGaps:!1,durationBackoff:1,forceTransmuxTS:!1,safeSeekOffset:5},offline:d,abrFactory:K,abr:{enabled:!0,defaultBandwidthEstimate:b,switchInterval:8,bandwidthUpgradeTarget:.85,bandwidthDowngradeTarget:.95,restrictions:{minWidth:0,
  maxWidth:Infinity,minHeight:0,maxHeight:c,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity}},preferredAudioLanguage:"",preferredTextLanguage:"",preferredVariantRole:"",preferredTextRole:"",preferredAudioChannelCount:2,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity},playRangeStart:0,playRangeEnd:Infinity,textDisplayFactory:function(){return null}};d.trackSelectionCallback=function(b){return ej(b,
  e.preferredAudioLanguage)};return e}function fj(b,c,d){return cj(b,c,d||dj(),{".drm.servers":"",".drm.clearKeys":"",".drm.advanced":{distinctiveIdentifierRequired:!1,persistentStateRequired:!1,videoRobustness:"",audioRobustness:"",serverCertificate:new Uint8Array(0),individualizationServer:""}},"")}
  function ej(b,c){var d=b.filter(function(b){return "variant"==b.type}),e=[],f=Ad(c,d.map(function(b){return b.language}));f&&(e=d.filter(function(b){return I(b.language)==f}));0==e.length&&(e=d.filter(function(b){return b.primary}));0==e.length&&(d.map(function(b){return b.language}),e=d);var g=e.filter(function(b){return b.height&&480>=b.height});g.length&&(g.sort(function(b,c){return c.height-b.height}),e=g.filter(function(b){return b.height==g[0].height}));d=[];if(e.length){var h=Math.floor(e.length/
  2);e.sort(function(b,c){return b.bandwidth-c.bandwidth});d.push(e[h]);}e=q(b);for(h=e.next();!h.done;h=e.next())h=h.value,"text"==h.type&&d.push(h);return d}function gj(b){this.c=b;this.a=null;this.b=[];}function hj(b){function c(b){return {timestamp:b.timestamp,state:b.state,duration:b.duration}}for(var d=[],e=q(b.b),f=e.next();!f.done;f=e.next())d.push(c(f.value));b.a&&d.push(c(b.a));return d}function ij(b,c){return c?"buffering":b.c.ended?"ended":b.c.paused?"paused":"playing"}function jj(){this.b=this.c=null;this.a=[];}function kj(b,c,d){b.b!=c&&(b.b=c,b.a.push({timestamp:Date.now()/1E3,id:c.id,type:"text",fromAdaptation:d,bandwidth:null}));}function lj(b){this.l=this.A=NaN;this.b=this.h=0;this.i=this.v=this.f=this.g=this.o=this.s=NaN;this.c=null;this.m=new gj(b);this.a=new jj;}function mj(b,c){var d=Date.now()/1E3,e=null==b.c?0:d-b.c;c?b.b+=e:b.h+=e;b.c=d;}function Y(b,c){var d=this;E.call(this);this.f=null;this.gb=!1;this.o=new Eb;this.Wb=this.g=this.va=this.c=this.m=this.a=this.R=this.ha=this.i=this.s=this.h=this.A=null;this.Lc=1E9;this.Ab=new Set;this.eb=!1;this.oa=!0;this.M=this.Cb=this.$=null;this.Kc=!1;this.Jc=0;this.D=null;this.v=new Hg;this.b=nj(this);this.Bb={width:Infinity,height:Infinity};this.l=null;this.yb=new Pg(this.b.preferredAudioLanguage,this.b.preferredVariantRole,this.b.preferredAudioChannelCount);this.P=this.b.preferredTextLanguage;
  this.cb=this.b.preferredTextRole;c&&c(this);this.A=oj(this);b&&this.Db(b,!0);this.fb=new Wi(function(){d.o&&(d.o.L(),d.o=null);var b=[];d.A&&(b.push(d.A.destroy()),d.A=null);d.gb=!1;d.o=null;d.g=null;d.Wb=null;d.b=null;return Promise.all(b)});G(this.o,window,"online",function(){d.yc();});}Ga(Y,E);y("shaka.Player",Y);function pj(b){if(!b.$)return Promise.resolve();var c=Promise.resolve();b.m&&(c=b.m.stop(),b.m=null);return Promise.all([c,b.$()])}
  Y.prototype.destroy=function(){var b=this;return t(function d(){return v(d,function(d){switch(d.j){case 1:return u(d,b.detach(),2);case 2:return u(d,b.fb.destroy(),0)}})})};Y.prototype.destroy=Y.prototype.destroy;Y.version="v2.5.0-b2-1";var qj=["2","5"];Ed=new function(b){this.a=b;this.c=Fd;this.b=Gd;}(new Cd(Number(qj[0]),Number(qj[1])));var rj=["output-restricted","internal-error"],sj={};Y.registerSupportPlugin=function(b,c){sj[b]=c;};
  Y.isBrowserSupported=function(){return !!window.Promise&&!!window.Uint8Array&&!!Array.prototype.forEach&&!!window.MediaSource&&!!MediaSource.isTypeSupported&&!!window.MediaKeys&&!!window.navigator&&!!window.navigator.requestMediaKeySystemAccess&&!!window.MediaKeySystemAccess&&!!window.MediaKeySystemAccess.prototype.getConfiguration};Y.probeSupport=function(){return Gc().then(function(b){var c=gf(),d=kd();b={manifest:c,media:d,drm:b};for(var e in sj)b[e]=sj[e]();return b})};
  Y.prototype.Db=function(b,c){var d=this;return t(function f(){return v(f,function(f){switch(f.j){case 1:void 0===c&&(c=!0);if(!d.f){f.B(2);break}return u(f,d.detach(),2);case 2:d.f=b;G(d.o,d.f,"error",d.Xe.bind(d));if(c)return d.s=tj(d),u(f,d.s.o,0);f.B(0);}})})};Y.prototype.attach=Y.prototype.Db;Y.prototype.detach=function(){var b=this;return t(function d(){return v(d,function(d){switch(d.j){case 1:return b.f?u(d,b.xb(!1),2):d["return"]();case 2:b.o.ua(b.f,"error"),b.f=null,d.j=0;}})})};
  Y.prototype.detach=Y.prototype.detach;function uj(b,c,d){return t(function f(){var g;return v(f,function(f){switch(f.j){case 1:return u(f,hf(c,b.A,b.b.manifest.retryParameters,d),2);case 2:return g=f.u,f["return"](new g)}})})}
  function vj(b){b.R=new oh;ph(b.R,function(c){wj(b,"timelineregionadded",c);});return b.m.start(b.va,{networkingEngine:b.A,filterNewPeriod:b.ac.bind(b),filterAllPeriods:b.Tc.bind(b),onTimelineRegionAdded:function(c){var d=b.R;a:{var e=q(d.a);for(var f=e.next();!f.done;f=e.next())if(f=f.value,f.schemeIdUri==c.schemeIdUri&&f.startTime==c.startTime&&f.endTime==c.endTime){e=f;break a}e=null;}null==e&&(d.a.add(c),d.b(c));},onEvent:b.wb.bind(b),onError:b.Ka.bind(b)})}
  function xj(b){function c(b){return b.video&&b.audio||b.video&&b.video.codecs.includes(",")}b.c.periods.some(function(b){return b.variants.some(c)})&&b.c.periods.forEach(function(b){b.variants=b.variants.filter(c);});if(0==b.c.periods.length)throw new B(2,4,4014);}
  Y.prototype.load=function(b,c,d){c=void 0===c?null:c;var e=this;return t(function g(){var h,k,l,m,p,r,w,x,A,P,U,X,ea,ha,Ja;return v(g,function(g){switch(g.j){case 1:if(!e.f)throw new B(2,7,7002);k=new z;l=function(){h=new B(2,7,7E3);return k};e.dispatchEvent(new D("loading"));qa(g,2);m=e.f;p=e.xb();e.$=l;return u(g,p,4);case 4:e.l=new lj(m);e.l.g=Date.now()/1E3;G(e.o,m,"playing",function(){yj(e);});G(e.o,m,"pause",function(){yj(e);});G(e.o,m,"ended",function(){yj(e);});r=e.b.abrFactory;e.g&&e.Wb==r||
  (e.Wb=r,e.g=new r,e.g.configure(e.b.abr));if(h)throw h;x=w=null;d&&("string"==typeof d?x=d:(Dd("Loading with a manifest parser factory","Please register a manifest parser and for the mime-type."),w=d));A=e;if(w){P=new w;g.B(5);break}return u(g,uj(e,b,x),6);case 6:P=g.u;case 5:return A.m=P,e.m.configure(e.b.manifest),e.va=b,u(g,vj(e),7);case 7:U=g.u;e.c=U;if(h)throw h;xj(e);X=e;return u(g,zj(e,U),8);case 8:X.h=g.u;if(h)throw h;e.Tc(e.c.periods);Aj(e,e.c.periods);e.yb=new Pg(e.b.preferredAudioLanguage,
  e.b.preferredVariantRole,e.b.preferredAudioChannelCount);e.P=e.b.preferredTextLanguage;Bj(e.c.presentationTimeline,e.b.playRangeStart,e.b.playRangeEnd);return u(g,e.h.Db(m),9);case 9:if(h)throw h;e.g.init(function(b,c,d){c=void 0===c?!1:c;d=void 0===d?0:d;Cj(e,e.c.periods[J.ee(e.c,b)],b,!0);e.a&&(Hh(e.a,b,c,d),Dj(e));});e.s||(e.s=tj(e));e.i=new jh(e.f,e.c.presentationTimeline,e.c.minBufferTime||0,e.b.streaming,c,e.Bf.bind(e),e.wb.bind(e));e.ha=Ej(e);e.a=Fj(e);e.a.configure(e.b.streaming);Gj(e);e.dispatchEvent(new D("streaming"));
  return u(g,e.a.init(),10);case 10:if(h)throw h;e.b.streaming.startAtSegmentBoundary&&(ea=Hj(e,mh(e.i)),gh(e.i.b,ea));e.c.periods.forEach(e.ac.bind(e));Ij(e);Dj(e);ha=Jj(e);ha.variants.some(function(b){return b.primary});Kj(e,ha.variants);Hb(e.o,m,"loadeddata",function(){e.l.f=Date.now()/1E3;});if(h)throw h;e.$=null;sa(g,0);break;case 2:return Ja=ta(g),k.resolve(),e.$==l&&(e.$=null,e.dispatchEvent(new D("unloading"))),g["return"](Promise.reject(h||Ja))}})})};Y.prototype.load=Y.prototype.load;
  function Gj(b){function c(b){var c="";b.video&&(c=Pb(b.video.codecs)[0]);var d="";b.audio&&(d=Pb(b.audio.codecs)[0]);return c+"-"+d}var d=b.c.periods.reduce(function(b,c){return b.concat(c.variants)},[]);d=J.Vc(d,b.b.preferredAudioChannelCount);var e=new pb;d.forEach(function(b){var d=c(b);e.push(d,b);});var f=null,g=Infinity;e.forEach(function(b,c){var d=0,e=0;c.forEach(function(b){d+=b.bandwidth||0;++e;});var h=d/e;h<g&&(f=b,g=h);});b.c.periods.forEach(function(b){b.variants=b.variants.filter(function(b){return c(b)==
  f?!0:!1});});}function zj(b,c){return t(function e(){var f,g,h;return v(e,function(e){switch(e.j){case 1:return f={ob:b.A,onError:function(c){b.Ka(c);},rc:function(c){Lj(b,c);},onExpirationUpdated:function(c,e){if(b.m&&b.m.onExpirationUpdated)b.m.onExpirationUpdated(c,e);b.dispatchEvent(new D("expirationupdated"));},onEvent:function(c){b.wb(c);}},g=new dc(f),g.configure(b.b.drm),h=J.Zc(c),u(e,kc(g,h,c.offlineSessionIds),2);case 2:return e["return"](g)}})})}
  function oj(b){return new F(function(c,d){b.g&&b.g.segmentDownloaded(c,d);})}
  function Ej(b){var c=new ch(b.c);dh(c,function(){Ij(b);});var d=new qh(b.R);uh(d,function(c){wj(b,"timelineregionenter",c);},function(c){wj(b,"timelineregionexit",c);},function(c,d){d||(wj(b,"timelineregionenter",c),wj(b,"timelineregionexit",c));});var e=new Ug(Math.max(b.c.minBufferTime,b.b.streaming.rebufferingGoal),function(c){return Sc(b.f.buffered,c)},function(){var c;a:if((c=b.f.ended)||(c=b.s,c=c.g?"ended"==c.g.readyState:!0),c)c=!0;else{if(b.c.presentationTimeline.U()&&(c=b.c.presentationTimeline.Ta(),
  Qc(b.f.buffered)>=c)){c=!0;break a}c=!1;}return c});Xg(e,function(){return Mj(b,!0)},function(){return Mj(b,!1)});var f=new Sg(b.f);f.a.add(c);f.a.add(d);f.a.add(e);return f}function tj(b){var c=window.muxjs?new Kc:new Pc,d=new b.b.textDisplayFactory;d.setTextVisibility(b.gb);return new id(b.f,c,d)}function Fj(b){return new vh(b.c,{Ra:function(){return mh(b.i)},J:b.s,ob:b.A,jd:b.He.bind(b),hd:b.Yd.bind(b),onError:b.Ka.bind(b),onEvent:b.wb.bind(b),Ke:b.Le.bind(b),qb:b.Ue.bind(b)})}
  Y.prototype.configure=function(b,c){if(2==arguments.length&&"string"==typeof b){for(var d=b,e={},f=e,g=0,h=0;;){g=d.indexOf(".",g);if(0>g)break;if(0==g||"\\"!=d[g-1])h=d.substring(h,g).replace(/\\\./g,"."),f[h]={},f=f[h],h=g+1;g+=1;}f[d.substring(h).replace(/\\\./g,".")]=c;b=e;}d=fj(this.b,b,nj(this));Nj(this);return d};Y.prototype.configure=Y.prototype.configure;
  function Nj(b){b.m&&b.m.configure(b.b.manifest);b.h&&b.h.configure(b.b.drm);if(b.a){b.a.configure(b.b.streaming);try{b.c.periods.forEach(b.ac.bind(b));}catch(f){b.Ka(f);}var c=yh(b.a),d=Ah(b.a),e=Jj(b);c=J.bd(c,d,e.variants);b.g&&c&&c.allowedByApplication&&c.allowedByKeySystem?Kj(b,e.variants):Oj(b,e);}b.g&&(b.g.configure(b.b.abr),b.b.abr.enabled&&!b.oa?b.g.enable():b.g.disable());}Y.prototype.getConfiguration=function(){var b=nj(this);fj(b,this.b,nj(this));return b};Y.prototype.getConfiguration=Y.prototype.getConfiguration;
  Y.prototype.rf=function(){for(var b in this.b)delete this.b[b];fj(this.b,nj(this),nj(this));Nj(this);};Y.prototype.resetConfiguration=Y.prototype.rf;Y.prototype.pe=function(){return this.f};Y.prototype.getMediaElement=Y.prototype.pe;Y.prototype.ib=function(){return this.A};Y.prototype.getNetworkingEngine=Y.prototype.ib;Y.prototype.bc=function(){return this.va};Y.prototype.getAssetUri=Y.prototype.bc;Y.prototype.oe=function(){Dd("getManifestUri",'Please use "getAssetUri" instead.');return this.va};
  Y.prototype.getManifestUri=Y.prototype.oe;Y.prototype.U=function(){return this.c?this.c.presentationTimeline.U():!1};Y.prototype.isLive=Y.prototype.U;Y.prototype.Ha=function(){return this.c?this.c.presentationTimeline.Ha():!1};Y.prototype.isInProgress=Y.prototype.Ha;Y.prototype.De=function(){if(!this.c||!this.c.periods.length)return !1;var b=this.c.periods[0].variants;return b.length?!b[0].video:!1};Y.prototype.isAudioOnly=Y.prototype.De;
  Y.prototype.tf=function(){var b=0,c=0;this.c&&(c=this.c.presentationTimeline,b=c.Sa(),c=c.qa());return {start:b,end:c}};Y.prototype.seekRange=Y.prototype.tf;Y.prototype.keySystem=function(){return this.h?this.h.keySystem():""};Y.prototype.keySystem=Y.prototype.keySystem;Y.prototype.drmInfo=function(){return this.h?this.h.a:null};Y.prototype.drmInfo=Y.prototype.drmInfo;Y.prototype.Mb=function(){return this.h?this.h.Mb():Infinity};Y.prototype.getExpiration=Y.prototype.Mb;Y.prototype.fd=function(){return this.eb};
  Y.prototype.isBuffering=Y.prototype.fd;Y.prototype.xb=function(b){var c=this;return t(function e(){return v(e,function(e){switch(e.j){case 1:if(c.fb.a)return e["return"]();void 0===b&&(b=!0);c.dispatchEvent(new D("unloading"));return u(e,pj(c),2);case 2:return c.Cb||(c.Cb=Pj(c).then(function(){Mj(c,!1);c.Cb=null;})),u(e,c.Cb,3);case 3:if(b)return c.s=tj(c),u(e,c.s.o,0);e.B(0);}})})};Y.prototype.unload=Y.prototype.xb;Y.prototype.jb=function(){return this.i?this.i.jb():0};
  Y.prototype.getPlaybackRate=Y.prototype.jb;Y.prototype.Kf=function(b){this.i&&ih(this.i.b,b);this.a&&Fh(this.a,1!=b);};Y.prototype.trickPlay=Y.prototype.Kf;Y.prototype.Zd=function(){this.i&&ih(this.i.b,1);this.a&&Fh(this.a,!1);};Y.prototype.cancelTrickPlay=Y.prototype.Zd;Y.prototype.ye=function(){for(var b=Qj(this),c=[],d=q(Rj(this)),e=d.next();!e.done;e=d.next()){e=e.value;var f=J.Hc(e);f.active=e==b;c.push(f);}return c};Y.prototype.getVariantTracks=Y.prototype.ye;
  Y.prototype.ad=function(){var b=Jj(this);if(null==b)b=null;else{if(!Ig(this.v,b).text){var c=J.Hb(b.textStreams,this.P,this.cb);c.length&&(c=c[0],Ig(this.v,b).text=c);}b=Ig(this.v,b).text;}c=[];for(var d=q(Sj(this)),e=d.next();!e.done;e=d.next()){e=e.value;var f=J.Dc(e);f.active=e==b;c.push(f);}return c};Y.prototype.getTextTracks=Y.prototype.ad;Y.prototype.Cd=function(b){var c=Jj(this);null!=c&&(b=J.fe(c,b))&&(Ig(this.v,c).text=b,kj(this.l.a,b,!1),Tj(this,b),this.P=b.language);};
  Y.prototype.selectTextTrack=Y.prototype.Cd;Y.prototype.vf=function(){Dd("selectEmbeddedTextTrack","If closed captions are signaled in the manifest, a text stream will be created to represent them. Please use SelectTextTrack.");var b=this.ad().filter(function(b){return "application/cea-608"==b.mimeType});0<b.length&&this.Cd(b[0]);};Y.prototype.selectEmbeddedTextTrack=Y.prototype.vf;
  Y.prototype.Pf=function(){Dd("usingEmbeddedTextTrack","If closed captions are signaled in the manifest, a text stream will be created to represent them. There should be no reason to know if the player is playing embedded text.");var b=this.a?zh(this.a,"text"):null;return null!=b&&"application/cea-608"==b.mimeType};Y.prototype.usingEmbeddedTextTrack=Y.prototype.Pf;
  Y.prototype.xf=function(b,c,d){d=void 0===d?0:d;var e=Jj(this);null!=e&&(this.b.abr.enabled&&Na("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack()."),(b=J.ge(e,b))&&J.Ua(b)&&(Cj(this,e,b,!1),Uj(this,b,c,d),this.yb=new Og(b),Kj(this,e.variants)));};Y.prototype.selectVariantTrack=Y.prototype.xf;
  Y.prototype.je=function(){for(var b=[],c=q(Rj(this)),d=c.next();!d.done;d=c.next())b.push(d.value.audio);return Vj(b)};Y.prototype.getAudioLanguagesAndRoles=Y.prototype.je;Y.prototype.we=function(){return Vj(Sj(this))};Y.prototype.getTextLanguagesAndRoles=Y.prototype.we;Y.prototype.ie=function(){for(var b=[],c=q(Rj(this)),d=c.next();!d.done;d=c.next())b.push(d.value.audio);return Array.from(Wj(b))};Y.prototype.getAudioLanguages=Y.prototype.ie;Y.prototype.ve=function(){return Array.from(Wj(Sj(this)))};
  Y.prototype.getTextLanguages=Y.prototype.ve;Y.prototype.uf=function(b,c){var d=Jj(this);null!=d&&(this.yb=new Pg(b,c||"",0),Oj(this,d));};Y.prototype.selectAudioLanguage=Y.prototype.uf;Y.prototype.wf=function(b,c){var d=Jj(this);null!=d&&(this.P=b,this.cb=c||"",Oj(this,d));};Y.prototype.selectTextLanguage=Y.prototype.wf;Y.prototype.hc=function(){return this.gb};Y.prototype.isTextTrackVisible=Y.prototype.hc;
  Y.prototype.Fd=function(b){var c=this;return t(function e(){var f,g,h,k;return v(e,function(e){switch(e.j){case 1:if(b==c.gb)return e["return"]();c.s&&c.s.l.setTextVisibility(b);c.gb=b;Xj(c);if(c.b.streaming.alwaysStreamText||!c.a)return e["return"]();f=J;if(b){if(g=Jj(c),h=f.Hb(g.textStreams,c.P,c.cb),k=h[0])return u(e,Bh(c.a,k),0)}else{var l=c.a;l.A=!0;var p=l.c.get("text");p&&(wh(p),l.c["delete"]("text"));}e.B(0);}})})};Y.prototype.setTextTrackVisibility=Y.prototype.Fd;
  Y.prototype.se=function(){return this.c?new Date(1E3*this.c.presentationTimeline.f+1E3*this.f.currentTime):null};Y.prototype.getPlayheadTimeAsDate=Y.prototype.se;Y.prototype.ue=function(){return this.c?new Date(1E3*this.c.presentationTimeline.f):null};Y.prototype.getPresentationStartTimeAsDate=Y.prototype.ue;Y.prototype.cc=function(){return this.s?this.s.cc():{total:[],audio:[],video:[],text:[]}};Y.prototype.getBufferedInfo=Y.prototype.cc;
  Y.prototype.getStats=function(){if(null==this.l)return {width:NaN,height:NaN,streamBandwidth:NaN,decodedFrames:NaN,droppedFrames:NaN,estimatedBandwidth:NaN,loadLatency:NaN,playTime:NaN,bufferingTime:NaN,switchHistory:[],stateHistory:[]};mj(this.l,this.eb);yj(this);var b=this.f;if(b.getVideoPlaybackQuality){b=b.getVideoPlaybackQuality();var c=this.l,d=Number(b.totalVideoFrames);c.s=Number(b.droppedVideoFrames);c.o=d;}if(b=Qj(this))this.l.v=b.bandwidth;b&&b.video&&(c=this.l,d=b.video.height||NaN,c.A=
  b.video.width||NaN,c.l=d);this.g&&(b=this.g.getBandwidthEstimate(),this.l.i=b);b=this.l;c=b.A;d=b.l;for(var e=b.v,f=b.o,g=b.s,h=b.i,k=b.f>b.g?b.f-b.g:NaN,l=b.h,m=b.b,p=[],r=q(b.a.a),w=r.next();!w.done;w=r.next())w=w.value,p.push({timestamp:w.timestamp,id:w.id,type:w.type,fromAdaptation:w.fromAdaptation,bandwidth:w.bandwidth});return {width:c,height:d,streamBandwidth:e,decodedFrames:f,droppedFrames:g,estimatedBandwidth:h,loadLatency:k,playTime:l,bufferingTime:m,switchHistory:p,stateHistory:hj(b.m)}};
  Y.prototype.getStats=Y.prototype.getStats;
  Y.prototype.addTextTrack=function(b,c,d,e,f,g){var h=Jj(this);if(null==h)return Promise.reject();var k=this.c.periods.indexOf(h)+1,l=(k>=this.c.periods.length?this.c.presentationTimeline.T():this.c.periods[k].startTime)-h.startTime;if(Infinity==l)return Promise.reject(new B(1,4,4033));var m={id:this.Lc++,originalId:null,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return 1},getSegmentReference:function(c){return 1!=c?null:new N(1,0,l,function(){return [b]},0,null)},
  initSegmentReference:null,presentationTimeOffset:0,mimeType:e,codecs:f||"",kind:d,encrypted:!1,keyId:null,language:c,label:g||null,type:"text",primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:[],channelsCount:null,closedCaptions:null};this.Ab.add(m);h.textStreams.push(m);return Bh(this.a,m).then(function(){if(!this.fb.a){var b=zh(this.a,"text");b&&(Ig(this.v,h).text=b);this.Ab["delete"](m);Oj(this,h);Ij(this);return {id:m.id,active:!1,type:"text",bandwidth:0,language:c,label:g||null,kind:d,
  width:null,height:null}}}.bind(this))};Y.prototype.addTextTrack=Y.prototype.addTextTrack;Y.prototype.Ac=function(b,c){this.Bb.width=b;this.Bb.height=c;};Y.prototype.setMaxHardwareResolution=Y.prototype.Ac;Y.prototype.yc=function(){if(this.a){var b=this.a;if(b.f)b=!1;else if(b.m)b=!1;else{for(var c=q(b.c.values()),d=c.next();!d.done;d=c.next())d=d.value,d.mb&&(d.mb=!1,Eh(b,d,.1));b=!0;}}else b=!1;return b};Y.prototype.retryStreaming=Y.prototype.yc;Y.prototype.ne=function(){return this.c};
  Y.prototype.getManifest=Y.prototype.ne;function Cj(b,c,d,e){Ig(b.v,c).variant=d;b=b.l.a;b.c!=d&&(b.c=d,b.a.push({timestamp:Date.now()/1E3,id:d.id,type:"variant",fromAdaptation:e,bandwidth:d.bandwidth}));}
  function Pj(b){b.o&&(b.o.ua(b.f,"loadeddata"),b.o.ua(b.f,"playing"),b.o.ua(b.f,"pause"),b.o.ua(b.f,"ended"));b.ha&&(b.ha.L(),b.ha=null);b.i&&(b.i.L(),b.i=null);var c=b.h,d=Promise.all([b.g?b.g.stop():null,b.s?b.s.destroy():null,b.a?b.a.destroy():null,b.m?b.m.stop():null]).then(function(){return c?c.destroy():null});b.R&&(b.R.L(),b.R=null);b.oa=!0;b.h=null;b.s=null;b.a=null;b.m=null;b.c=null;b.va=null;b.v.a.clear();b.Ab.clear();b.l=null;return d}
  function nj(b){var c=dj();c.streaming.failureCallback=function(c){var d=[1001,1002,1003];b.U()&&d.includes(c.code)&&(c.severity=1,b.yc());};c.textDisplayFactory=function(){return new Yj(b.f)};return c}
  function Aj(b,c){for(var d=0;d<c.length;d++){for(var e=c[d],f=new Map,g=q(e.variants),h=g.next();!h.done;h=g.next())if(h=h.value,h.video&&h.video.closedCaptions){h=h.video;for(var k=q(h.closedCaptions.keys()),l=k.next();!l.done;l=k.next())if(l=l.value,!f.has(l)){var m={id:b.Lc++,originalId:l,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return null},getSegmentReference:function(){return null},initSegmentReference:null,presentationTimeOffset:0,mimeType:"application/cea-608",
  codecs:"",kind:"caption",encrypted:!1,keyId:null,language:h.closedCaptions.get(l),label:null,type:"text",primary:!1,trickModeVideo:null,emsgSchemeIdUris:null,roles:h.roles,channelsCount:null,closedCaptions:null};f.set(l,m);}}f=q(f.values());for(g=f.next();!g.done;g=f.next())e.textStreams.push(g.value);}}n=Y.prototype;
  n.Tc=function(b){var c=this.a?yh(this.a):null,d=this.a?Ah(this.a):null;b.forEach(J.filterNewPeriod.bind(null,this.h,c,d));c=ub(b,function(b){return b.variants.some(J.Ua)});if(0==c)throw new B(2,4,4032);if(c<b.length)throw new B(2,4,4011);b.forEach(function(b){J.Mc(b.variants,this.b.restrictions,this.Bb)&&this.a&&Jj(this)==b&&Ij(this);Zj(this,b.variants);}.bind(this));};
  n.ac=function(b){var c=this.a?yh(this.a):null,d=this.a?Ah(this.a):null;J.filterNewPeriod(this.h,c,d,b);c=b.variants;if(!c.some(J.Ua))throw new B(2,4,4011);Zj(this,b.variants);J.Mc(c,this.b.restrictions,this.Bb)&&this.a&&Jj(this)==b&&Ij(this);if(b=this.h?this.h.a:null)for(c=q(c),d=c.next();!d.done;d=c.next()){d=q(d.value.drmInfos);for(var e=d.next();!e.done;e=d.next())if(e=e.value,e.keySystem==b.keySystem){e=q(e.initData||[]);for(var f=e.next();!f.done;f=e.next())f=f.value,uc(this.h,f.initDataType,
  f.initData);}}};function Uj(b,c,d,e){d=void 0===d?!1:d;e=void 0===e?0:e;b.oa?(b.M=c,b.Kc=d,b.Jc=e):(Hh(b.a,c,d,e),ak(b,new D("variantchanged")));}function Tj(b,c){b.oa?b.D=c:(Gh(b.a,c,!0,0),ak(b,new D("textchanged")));}function Hj(b,c){function d(b,c){if(!b)return null;var d=b.findSegmentPosition(c-g.startTime);return null==d?null:(d=b.getSegmentReference(d))?d.startTime+g.startTime:null}var e=yh(b.a),f=Ah(b.a),g=Jj(b);e=d(e,c);f=d(f,c);return null!=f&&null!=e?Math.max(f,e):null!=f?f:null!=e?e:c}
  function Mj(b,c){b.l&&mj(b.l,b.eb);b.eb=c;yj(b);if(b.i){var d=b.i.b;c!=d.g&&(d.g=c,ih(d,d.f));}b.dispatchEvent(new D("buffering",{buffering:c}));}function yj(b){if(b.l){var c=b.l.m,d=b.eb;null==c.a?c.a={timestamp:Date.now()/1E3,state:ij(c,d),duration:0}:(b=Date.now()/1E3,d=ij(c,d),c.a.duration=b-c.a.timestamp,c.a.state!=d&&(c.b.push(c.a),c.a={timestamp:b,state:d,duration:0}));}}n.Bf=function(){this.ha&&Tg(this.ha,!0);this.a&&Kh(this.a);};
  function Kj(b,c){try{Zj(b,c);}catch(e){return b.Ka(e),null}var d=c.filter(function(b){return J.Ua(b)});d=b.yb.create(d);b.g.setVariants(Array.from(d.values()));return b.g.chooseVariant()}function Oj(b,c){var d=Kj(b,c.variants);d&&(Cj(b,c,d,!0),Uj(b,d,!0));(d=J.Hb(c.textStreams,b.P,b.cb)[0]||null)&&(b.b.streaming.alwaysStreamText||b.hc())&&(Ig(b.v,c).text=d,kj(b.l.a,d,!0),Tj(b,d));Dj(b);}
  n.He=function(b){try{this.oa=!0;this.g.disable();var c=Kj(this,b.variants),d=J.Hb(b.textStreams,this.P,this.cb)[0]||null;this.M&&(b.variants.includes(this.M)&&(c=this.M),this.M=null);this.D&&(b.textStreams.includes(this.D)&&(d=this.D),this.D=null);c&&Cj(this,b,c,!0);if(d){var e=d;Ig(this.v,b).text=e;kj(this.l.a,e,!0);}var f=this.a,g=f.c.get("video");if(g)var h=f.b.periods[g.xa];else{var k=f.c.get("audio");h=k?f.b.periods[k.xa]:null;}var l=c?c.audio:null,m;if(m=!h&&l&&d){b=d;var p=I(this.b.preferredTextLanguage),
  r=I(l.language),w=I(b.language);m=wd(w,p)&&!wd(r,w);}m&&(this.Fd(!0),Xj(this));return this.b.streaming.alwaysStreamText||this.hc()?{variant:c,text:d}:{variant:c,text:null}}catch(x){return this.Ka(x),{variant:null,text:null}}};n.Yd=function(){this.oa=!1;this.b.abr.enabled&&this.g.enable();this.M&&(Hh(this.a,this.M,this.Kc,this.Jc),this.M=null);this.D&&(Gh(this.a,this.D,!0,0),this.D=null);};n.Le=function(){this.m&&this.m.update&&this.m.update();};n.Ue=function(){this.i&&this.i.qb();};
  function Dj(b){ak(b,new D("adaptation"));}function Ij(b){ak(b,new D("trackschanged"));}function Xj(b){b.dispatchEvent(new D("texttrackvisibility"));}n.Ka=function(b){if(!this.fb.a){var c=new D("error",{detail:b});this.dispatchEvent(c);c.defaultPrevented&&(b.handled=!0);}};n.wb=function(b){this.dispatchEvent(b);};function wj(b,c,d){b.wb(new D(c,{detail:{schemeIdUri:d.schemeIdUri,value:d.value,startTime:d.startTime,endTime:d.endTime,id:d.id,eventElement:d.eventElement}}));}
  n.Xe=function(){if(this.f.error){var b=this.f.error.code;if(1!=b){var c=this.f.error.msExtendedCode;c&&(0>c&&(c+=Math.pow(2,32)),c=c.toString(16));this.Ka(new B(2,3,3016,b,c,this.f.error.message));}}};
  function Lj(b,c){var d=Jj(b),e=!1,f=Object.keys(c),g=1==f.length&&"00"==f[0];f.length&&d.variants.forEach(function(b){J.xe(b).forEach(function(d){var f=b.allowedByKeySystem;d.keyId&&(d=c[g?"00":d.keyId],b.allowedByKeySystem=!!d&&!rj.includes(d));f!=b.allowedByKeySystem&&(e=!0);});});f=yh(b.a);var h=Ah(b.a);(f=J.bd(f,h,d.variants))&&!f.allowedByKeySystem&&Oj(b,d);e&&(Ij(b),Kj(b,d.variants));}function Bj(b,c,d){0<c&&(b.U()||b.Gd(c));d<b.T()&&(b.U()||b.ma(d));}
  function Zj(b,c){var d=b.h?Lb(b.h.$):{},e=Object.keys(d);e=e.length&&"00"==e[0];for(var f=!1,g=!1,h=[],k=[],l=q(c),m=l.next();!m.done;m=l.next()){m=m.value;var p=[];m.audio&&p.push(m.audio);m.video&&p.push(m.video);p=q(p);for(var r=p.next();!r.done;r=p.next())if(r=r.value,r.keyId){var w=d[e?"00":r.keyId];w?rj.includes(w)&&(k.includes(w)||k.push(w)):h.includes(r.keyId)||h.push(r.keyId);}m.allowedByApplication?m.allowedByKeySystem&&(f=!0):g=!0;}if(!f)throw new B(2,4,4012,{hasAppRestrictions:g,missingKeys:h,
  restrictedKeyStatuses:k});}function ak(b,c){t(function e(){return v(e,function(e){switch(e.j){case 1:return u(e,Promise.resolve(),2);case 2:b.fb.a||b.dispatchEvent(c),e.j=0;}})});}function Wj(b){var c=new Set;b=q(b);for(var d=b.next();!d.done;d=b.next())(d=d.value)&&d.language?c.add(I(d.language)):c.add("und");return c}
  function Vj(b){var c=new Map,d=[""];b=q(b);for(var e=b.next();!e.done;e=b.next()){var f=e.value;e="und";var g=d;f&&f.language&&(e=I(f.language));f&&f.roles.length&&(g=f.roles);c.has(e)||c.set(e,new Set);f=q(g);for(g=f.next();!g.done;g=f.next())g=g.value,c.get(e).add(g);}var h=[];c.forEach(function(b,c){for(var d=q(b),e=d.next();!e.done;e=d.next())h.push({language:c,role:e.value});});return h}function Rj(b){b=Jj(b);return null==b?[]:b.variants.filter(function(b){return J.Ua(b)})}
  function Sj(b){var c=Jj(b);return null==c?[]:c.textStreams.filter(function(c){return !b.Ab.has(c)})}function Jj(b){if(null==b.c||null==b.i)return null;var c=mh(b.i),d=null;b=q(b.c.periods);for(var e=b.next();!e.done;e=b.next())e=e.value,e.startTime<=c&&(d=e);return d}function Qj(b){var c=Jj(b);return c?Ig(b.v,c).variant:null}function ck(b,c,d){var e=void 0==c.expiration?Infinity:c.expiration,f=c.presentationTimeline.T();c=dk(c.periods[0]);return {offlineUri:null,originalManifestUri:b,duration:f,size:0,expiration:e,tracks:c,appMetadata:d}}function ek(b,c){var d=Ri(new Pi(b.ka(),b.W()),c.periods[0],new T(null,0)),e=c.appMetadata||{};d=dk(d);return {offlineUri:b.toString(),originalManifestUri:c.originalManifestUri,duration:c.duration,size:c.size,expiration:c.expiration,tracks:d,appMetadata:e}}
  function dk(b){var c=[],d=J.qe(b.variants);d=q(d);for(var e=d.next();!e.done;e=d.next())c.push(J.Hc(e.value));b=q(b.textStreams);for(d=b.next();!d.done;d=b.next())c.push(J.Dc(d.value));return c}function fk(){this.a={};}function gk(b,c,d){d=d.endTime-d.startTime;return hk(b,c)*d}function hk(b,c){var d=b.a[c];null==d&&(d=0);return d}function ik(b,c){for(var d={width:Infinity,height:Infinity},e=q(b.periods),f=e.next();!f.done;f=e.next())f=f.value,f.variants=f.variants.filter(function(b){return J.kc(b,c,d)});}function jk(b){b=q(b.periods);for(var c=b.next();!c.done;c=b.next())c=c.value,c.variants=c.variants.filter(function(b){var c=!0;b.audio&&(c=c&&jd(b.audio));b.video&&(c=c&&jd(b.video));return c});}
  function kk(b,c){for(var d=q(b.periods),e=d.next();!e.done;e=d.next())e=e.value,e.variants=e.variants.filter(function(b){return Hc(c,b)});}function lk(b){var c=new mk;b.periods.forEach(function(b,d){var e=nk(b.variants);if(0==d){e=q(e.a);for(var f=e.next();!f.done;f=e.next())c.add(f.value);}else ok(c,e);});b=q(b.periods);for(var d=b.next();!d.done;d=b.next())d=d.value,d.variants=d.variants.filter(function(b){return pk(c,new qk(b))});}
  function rk(b,c){var d=new mk;b.periods.forEach(function(b,f){0<f&&(b.variants=b.variants.filter(function(b){return pk(d,new qk(b))}));c(b);d=nk(b.variants);});}function qk(b){var c=b.audio;b=b.video;this.b=c?c.mimeType:null;this.a=c?c.codecs.split(".")[0]:null;this.f=b?b.mimeType:null;this.c=b?b.codecs.split(".")[0]:null;}function mk(){this.a=[];}mk.prototype.add=function(b){pk(this,b)||this.a.push(b);};function ok(b,c){b.a=b.a.filter(function(b){return pk(c,b)});}
  function pk(b,c){return b.a.some(function(b){return c.b==b.b&&c.a==b.a&&c.f==b.f&&c.c==b.c})}function nk(b){var c=new mk;b=q(b);for(var d=b.next();!d.done;d=b.next())c.add(new qk(d.value));return c}function Z(b){var c=this;if(b&&b.constructor!=Y)throw new B(2,9,9008);this.b=this.a=null;b?(this.a=b.b,this.b=b.ib()):(this.a=dj(),this.b=new F);this.g=!1;this.c=[];this.f=[];var d=!b;this.h=new Wi(function(){return t(function f(){var b;return v(f,function(f){switch(f.j){case 1:return b=function(){},u(f,Promise.all(c.f.map(function(c){return c.then(b,b)})),2);case 2:if(!d){f.B(3);break}return u(f,c.b.destroy(),3);case 3:c.a=null,c.b=null,f.j=0;}})})});}y("shaka.offline.Storage",Z);
  function sk(){return vi()}Z.support=sk;Z.prototype.destroy=function(){return this.h.destroy()};Z.prototype.destroy=Z.prototype.destroy;
  Z.prototype.configure=function(b){var c=!1;null!=b.trackSelectionCallback&&(c=!0,b.offline=b.offline||{},b.offline.trackSelectionCallback=b.trackSelectionCallback);null!=b.progressCallback&&(c=!0,b.offline=b.offline||{},b.offline.progressCallback=b.progressCallback);null!=b.usePersistentLicense&&(c=!0,b.offline=b.offline||{},b.offline.usePersistentLicense=b.usePersistentLicense);c&&Dd("Storage.configure with OfflineConfig","Please configure storage with a player configuration.");return fj(this.a,
  b)};Z.prototype.configure=Z.prototype.configure;Z.prototype.ib=function(){return this.b};Z.prototype.getNetworkingEngine=Z.prototype.ib;
  Z.prototype.store=function(b,c,d){var e=this;return tk(this,uk(this,b,c||{},function(){return t(function g(){var c;return v(g,function(g){switch(g.j){case 1:if(d&&"string"!=typeof d){Dd("Storing with a manifest parser factory","Please register a manifest parser and for the mime-type.");c=d;g.B(2);break}return u(g,hf(b,e.b,e.a.manifest.retryParameters,d),3);case 3:c=g.u;case 2:return g["return"](new c)}})})}))};Z.prototype.store=Z.prototype.store;
  function uk(b,c,d,e){return t(function g(){var h,k,l,m,p,r,w,x,A,P;return v(g,function(g){switch(g.j){case 1:vk();if(b.g)return g["return"](Promise.reject(new B(2,9,9006)));b.g=!0;return u(g,wk(b,c,e),2);case 2:h=g.u;xk(b);k=!h.presentationTimeline.U()&&!h.presentationTimeline.Ha();if(!k)throw new B(2,9,9005,c);l=null;m=new ni;r=p=null;qa(g,3,4);return u(g,yk(b,h,function(b){r=r||b;}),6);case 6:l=g.u;xk(b);if(r)throw r;zk(b,h,l);return u(g,m.init(),7);case 7:return xk(b),u(g,pi(m),8);case 8:return p=
  g.u,xk(b),u(g,Ak(b,p.W,l,h,c,d),9);case 9:w=g.u;xk(b);if(r)throw r;return u(g,p.W.addManifests([w]),10);case 10:return x=g.u,xk(b),A=new Ni("manifest",p.path.ka,p.path.W,x[0]),g["return"](ek(A,w));case 4:return ua(g),b.g=!1,b.c=[],u(g,m.destroy(),11);case 11:if(!l){g.B(12);break}return u(g,l.destroy(),12);case 12:va(g,0);break;case 3:P=ta(g);if(!p){g.B(14);break}return u(g,p.W.removeSegments(b.c,function(){}),14);case 14:throw r||P;}})})}
  function zk(b,c,d){ik(c,b.a.restrictions);jk(c);kk(c,d);lk(c);rk(c,function(c){for(var d=[],e=q(c.variants),h=e.next();!h.done;h=e.next())d.push(J.Hc(h.value));e=q(c.textStreams);for(h=e.next();!h.done;h=e.next())d.push(J.Dc(h.value));d=b.a.offline.trackSelectionCallback(d);var k=new Set,l=new Set;d=q(d);for(e=d.next();!e.done;e=d.next())e=e.value,"variant"==e.type&&k.add(e.id),"text"==e.type&&l.add(e.id);c.variants=c.variants.filter(function(b){return k.has(b.id)});c.textStreams=c.textStreams.filter(function(b){return l.has(b.id)});});
  Bk(c);}function Ak(b,c,d,e,f,g){return t(function k(){var l,m,p,r;return v(k,function(k){switch(k.j){case 1:return l=ck(f,e,g),m=new ci(b.b,function(c,d){l.size=d;b.a.offline.progressCallback(l,c);}),ra(k,2),r=p=Ck(b,m,c,d,e,f,g),u(k,fi(m),4);case 4:return r.size=k.u,k["return"](p);case 2:return ua(k),u(k,m.destroy(),5);case 5:va(k,0);}})})}Z.prototype.remove=function(b){return tk(this,Dk(this,b))};Z.prototype.remove=Z.prototype.remove;
  function Dk(b,c){vk();var d=Oi(c);if(null==d||"manifest"!=d.a)return Promise.reject(new B(2,9,9004,c));var e=new ni;return Xi([e],function(){return t(function g(){var c,k,l;return v(g,function(g){switch(g.j){case 1:return u(g,e.init(),2);case 2:return u(g,ri(e,d.ka(),d.W()),3);case 3:return c=g.u,u(g,c.getManifests([d.key()]),4);case 4:return k=g.u,l=k[0],u(g,Promise.all([Ek(b,l,e),Fk(b,c,d,l)]),0)}})})})}
  function Gk(b,c){for(var d=[],e=q(b.periods),f=e.next();!f.done;f=e.next()){f=q(f.value.streams);for(var g=f.next();!g.done;g=f.next())g=g.value,c&&"video"==g.contentType?d.push({contentType:Mb(g.mimeType,g.codecs),robustness:b.drmInfo.videoRobustness}):c||"audio"!=g.contentType||d.push({contentType:Mb(g.mimeType,g.codecs),robustness:b.drmInfo.audioRobustness});}return d}function Ek(b,c,d){return t(function f(){return v(f,function(f){switch(f.j){case 1:return u(f,Hk(b.b,b.a.drm,d,c),0)}})})}
  function Fk(b,c,d,e){function f(){k+=1;b.a.offline.progressCallback(l,k/h);}var g=Ik(e),h=g.length+1,k=0,l=ek(d,e);return Promise.all([c.removeSegments(g,f),c.removeManifests([d.key()],f)])}Z.prototype.nf=function(){return tk(this,Jk(this))};Z.prototype.removeEmeSessions=Z.prototype.nf;
  function Jk(b){vk();var c=b.b,d=b.a.drm,e=new ni;return Xi([e],function(){return t(function g(){var b,k,l,m,p,r,w;return v(g,function(g){switch(g.j){case 1:return u(g,e.init(),2);case 2:b=!1,k=[],si(e,function(b){return k.push(b)}),l=q(k),m=l.next();case 3:if(m.done){g.B(5);break}p=m.value;return u(g,p.getAll(),6);case 6:return r=g.u,u(g,$i(d,c,r),7);case 7:return w=g.u,u(g,p.remove(w),8);case 8:w.length!=r.length&&(b=!0);m=l.next();g.B(3);break;case 5:return g["return"](!b)}})})})}
  Z.prototype.list=function(){return tk(this,Kk())};Z.prototype.list=Z.prototype.list;
  function Kk(){function b(b,d){return t(function h(){var e;return v(h,function(f){switch(f.j){case 1:return u(f,d.getAllManifests(),2);case 2:e=f.u,e.forEach(function(d,e){var f=ek(new Ni("manifest",b.ka,b.W,e),d);c.push(f);}),f.j=0;}})})}vk();var c=[],d=new ni;return Xi([d],function(){return t(function f(){var c;return v(f,function(f){switch(f.j){case 1:return u(f,d.init(),2);case 2:return c=Promise.resolve(),qi(d,function(d,f){c=c.then(function(){return b(d,f)});}),u(f,c,0)}})})}).then(function(){return c})}
  function wk(b,c,d){return t(function f(){var g,h,k,l,m,p;return v(f,function(f){switch(f.j){case 1:return g=null,h=b.b,k={networkingEngine:h,filterAllPeriods:function(){},filterNewPeriod:function(){},onTimelineRegionAdded:function(){},onEvent:function(){},onError:function(b){g=b;}},u(f,d(),2);case 2:return l=f.u,l.configure(b.a.manifest),xk(b),ra(f,3),u(f,l.start(c,k),5);case 5:return m=f.u,xk(b),p=Lk(m),u(f,Promise.all(Array.from(p).map(function(b){return b.createSegmentIndex()})),6);case 6:xk(b);
  if(g)throw g;return f["return"](m);case 3:return ua(f),u(f,l.stop(),7);case 7:va(f,0);}})})}function yk(b,c,d){return t(function f(){var g,h,k;return v(f,function(f){switch(f.j){case 1:return g=new dc({ob:b.b,onError:d,rc:function(){},onExpirationUpdated:function(){},onEvent:function(){}}),h=J.Zc(c),k=b.a,g.configure(k.drm),u(f,ic(g,h,k.offline.usePersistentLicense),2);case 2:return u(f,sc(g),3);case 3:return u(f,tc(g),4);case 4:return f["return"](g)}})})}
  function Ck(b,c,d,e,f,g,h){var k=new fk,l=f.periods.map(function(e){return Mk(b,c,d,k,f,e)}),m=e.a,p=zc(e);if(m&&b.a.offline.usePersistentLicense){if(!p.length)throw new B(2,9,9007,g);m.initData=[];}return {originalManifestUri:g,duration:f.presentationTimeline.T(),size:0,expiration:e.Mb(),periods:l,sessionIds:b.a.offline.usePersistentLicense?p:[],drmInfo:m,appMetadata:h}}
  function Mk(b,c,d,e,f,g){f.periods.forEach(function(b){b.variants.forEach(function(b){var c=b.audio,d=b.video;c&&!d&&(e.a[c.id]=c.bandwidth||b.bandwidth);!c&&d&&(e.a[d.id]=d.bandwidth||b.bandwidth);if(c&&d){var f=c.bandwidth||393216,g=d.bandwidth||b.bandwidth-f;0>=g&&(g=b.bandwidth);e.a[c.id]=f;e.a[d.id]=g;}});b.textStreams.forEach(function(b){e.a[b.id]=52;});});var h=Lk(f),k=new Map;h=q(h);for(var l=h.next();!l.done;l=h.next()){l=l.value;var m=Nk(b,c,d,e,f,l);k.set(l.id,m);}g.variants.forEach(function(b){b.audio&&
  k.get(b.audio.id).variantIds.push(b.id);b.video&&k.get(b.video.id).variantIds.push(b.id);});return {startTime:g.startTime,streams:Array.from(k.values())}}
  function Nk(b,c,d,e,f,g){var h={id:g.id,originalId:g.originalId,primary:g.primary,presentationTimeOffset:g.presentationTimeOffset||0,contentType:g.type,mimeType:g.mimeType,codecs:g.codecs,frameRate:g.frameRate,kind:g.kind,language:g.language,label:g.label,width:g.width||null,height:g.height||null,initSegmentKey:null,encrypted:g.encrypted,keyId:g.keyId,segments:[],variantIds:[]};f=f.presentationTimeline.lb();var k=g.id;Ok(g,f,function(f){di(c,k,Pk(b,f),gk(e,g.id,f),function(c){return d.addSegments([{data:c}]).then(function(c){b.c.push(c[0]);
  h.segments.push({startTime:f.startTime,endTime:f.endTime,dataKey:c[0]});})});});(f=g.initSegmentReference)&&di(c,k,Pk(b,f),.5*hk(e,g.id),function(c){return d.addSegments([{data:c}]).then(function(c){b.c.push(c[0]);h.initSegmentKey=c[0];})});return h}function Ok(b,c,d){c=b.findSegmentPosition(c);for(var e=null==c?null:b.getSegmentReference(c);e;)d(e),e=b.getSegmentReference(++c);}function xk(b){if(b.h.a)throw new B(2,9,7001);}function vk(){if(!vi())throw new B(2,9,9E3);}
  function Pk(b,c){var d=b.a.streaming.retryParameters;d=Ab(c.c(),d);if(0!=c.b||null!=c.a)d.headers.Range="bytes="+c.b+"-"+(null==c.a?"":c.a);return d}function tk(b,c){return t(function e(){return v(e,function(e){switch(e.j){case 1:return b.f.push(c),ra(e,2),u(e,c,4);case 4:return e["return"](e.u);case 2:ua(e),tb(b.f,c),va(e,0);}})})}
  function Ik(b){var c=[];b.periods.forEach(function(b){b.streams.forEach(function(b){null!=b.initSegmentKey&&c.push(b.initSegmentKey);b.segments.forEach(function(b){c.push(b.dataKey);});});});return c}Z.deleteAll=function(){return t(function c(){var d;return v(c,function(c){switch(c.j){case 1:return d=new ni,ra(c,2),u(c,d.erase(),2);case 2:return ua(c),u(c,d.destroy(),5);case 5:va(c,0);}})})};
  function Hk(b,c,d,e){return t(function g(){var h,k,l;return v(g,function(g){switch(g.j){case 1:if(!e.drmInfo)return g["return"]();h=ti(d);k=e.sessionIds.map(function(b){return {sessionId:b,keySystem:e.drmInfo.keySystem,licenseUri:e.drmInfo.licenseServerUri,serverCertificate:e.drmInfo.serverCertificate,audioCapabilities:Gk(e,!1),videoCapabilities:Gk(e,!0)}});return u(g,$i(c,b,k),2);case 2:return l=g.u,u(g,h.remove(l),3);case 3:return u(g,h.add(k.filter(function(b){return -1==l.indexOf(b.sessionId)})),
  0)}})})}function Lk(b){var c=new Set;b=q(b.periods);for(var d=b.next();!d.done;d=b.next()){d=d.value;for(var e=q(d.textStreams),f=e.next();!f.done;f=e.next())c.add(f.value);d=q(d.variants);for(e=d.next();!e.done;e=d.next())e=e.value,e.audio&&c.add(e.audio),e.video&&c.add(e.video);}return c}function Bk(b){if(0==b.periods.length)throw new B(2,4,4014);b=q(b.periods);for(var c=b.next();!c.done;c=b.next())Qk(c.value);}
  function Qk(b){b.variants.map(function(b){return b.video});var c=new Set(b.variants.map(function(b){return b.audio}));b=b.textStreams;for(var d=q(c),e=d.next();!e.done;e=d.next()){e=q(c);for(var f=e.next();!f.done;f=e.next());}c=q(b);for(d=c.next();!d.done;d=c.next())for(d=q(b),e=d.next();!e.done;e=d.next());}sj.offline=sk;y("shaka.polyfill.installAll",function(){for(var b=0;b<Rk.length;++b)Rk[b].Wd();});var Rk=[];function Sk(b,c){c=c||0;for(var d={priority:c,Wd:b},e=0;e<Rk.length;e++)if(Rk[e].priority<c){Rk.splice(e,0,d);return}Rk.push(d);}y("shaka.polyfill.register",Sk);function Tk(b){var c=b.type.replace(/^(webkit|moz|MS)/,"").toLowerCase();if("function"===typeof Event)var d=new Event(c,b);else d=document.createEvent("Event"),d.initEvent(c,b.bubbles,b.cancelable);b.target.dispatchEvent(d);}
  Sk(function(){if(window.Document){var b=Element.prototype;b.requestFullscreen=b.requestFullscreen||b.mozRequestFullScreen||b.msRequestFullscreen||b.webkitRequestFullscreen;b=Document.prototype;b.exitFullscreen=b.exitFullscreen||b.mozCancelFullScreen||b.msExitFullscreen||b.webkitExitFullscreen;"fullscreenElement"in document||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}}),Object.defineProperty(document,
  "fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled}}));document.addEventListener("webkitfullscreenchange",Tk);document.addEventListener("webkitfullscreenerror",Tk);document.addEventListener("mozfullscreenchange",Tk);document.addEventListener("mozfullscreenerror",Tk);document.addEventListener("MSFullscreenChange",Tk);document.addEventListener("MSFullscreenError",Tk);}});Sk(function(){Qb("CrKey")&&delete window.indexedDB;});var Uk;function Vk(b,c,d){if("input"==b)switch(this.type){case "range":b="change";}Uk.call(this,b,c,d);}Sk(function(){Qb("Trident/")&&HTMLInputElement.prototype.addEventListener!=Vk&&(Uk=HTMLInputElement.prototype.addEventListener,HTMLInputElement.prototype.addEventListener=Vk);});Sk(function(){});function Wk(){var b=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];d=b.apply(this,d);d.abort=function(){};return d};}function Xk(){var b=SourceBuffer.prototype.remove;SourceBuffer.prototype.remove=function(c,d){return b.call(this,c,d-.001)};}
  function Yk(){var b=MediaSource.prototype.endOfStream;MediaSource.prototype.endOfStream=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];for(var h=e=0;h<this.sourceBuffers.length;++h){var k=this.sourceBuffers[h];k=k.buffered.end(k.buffered.length-1);e=Math.max(e,k);}if(!isNaN(this.duration)&&e<this.duration)for(this.dd=!0,e=0;e<this.sourceBuffers.length;++e)this.sourceBuffers[e].Rc=!1;return b.apply(this,d)};var c=!1,d=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=
  function(b){for(var e=[],g=0;g<arguments.length;++g)e[g]=arguments[g];e=d.apply(this,e);e.mediaSource_=this;e.addEventListener("updateend",Zk,!1);c||(this.addEventListener("sourceclose",$k,!1),c=!0);return e};}function Zk(b){var c=b.target,d=c.mediaSource_;if(d.dd){b.preventDefault();b.stopPropagation();b.stopImmediatePropagation();c.Rc=!0;for(b=0;b<d.sourceBuffers.length;++b)if(0==d.sourceBuffers[b].Rc)return;d.dd=!1;}}
  function $k(b){b=b.target;for(var c=0;c<b.sourceBuffers.length;++c)b.sourceBuffers[c].removeEventListener("updateend",Zk,!1);b.removeEventListener("sourceclose",$k,!1);}function al(){var b=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(c){return "mp2t"==c.split(/ *; */)[0].split("/")[1]?!1:b(c)};}
  function bl(){var b=MediaSource.isTypeSupported,c=/^dv(?:he|av)\./;MediaSource.isTypeSupported=function(d){for(var e=d.split(/ *; */),f=e[0],g={},h=1;h<e.length;++h){var k=e[h].split("="),l=k[0];k=k[1].replace(/"(.*)"/,"$1");g[l]=k;}e=g.codecs;if(!e)return b(d);var m=!1,p=!1;d=e.split(",").filter(function(b){if(c.test(b))return p=!0,!1;/^(hev|hvc)1\.2/.test(b)&&(m=!0);return !0});p&&(m=!1);g.codecs=d.join(",");m&&(g.eotf="smpte2084");for(var r in g)f+="; "+r+'="'+g[r]+'"';return cast.__platform__.canDisplayType(f)};}
  Sk(function(){if(window.MediaSource)if(window.cast&&cast.__platform__&&cast.__platform__.canDisplayType)bl();else if(navigator.vendor&&navigator.vendor.includes("Apple")){var b=navigator.appVersion;al();if(b.includes("Version/8"))window.MediaSource=null;else if(b.includes("Version/9"))Wk();else if(b.includes("Version/10"))Wk(),Yk();else if(b.includes("Version/11")||b.includes("Version/12"))Wk(),Xk();}});function cl(b){this.f=[];this.b=[];this.a=[];(new Q).aa("pssh",this.c.bind(this)).parse(b.buffer);}cl.prototype.c=function(b){if(!(1<b.version)){var c=ac(b.reader.Ja(16)),d=[];if(0<b.version)for(var e=b.reader.C(),f=0;f<e;++f){var g=ac(b.reader.Ja(16));d.push(g);}e=b.reader.C();b.reader.I(e);this.b.push.apply(this.b,d);this.f.push(c);this.a.push({start:b.start,end:b.start+b.size-1});}};function dl(b,c){try{var d=new el(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}
  function el(b,c){this.keySystem=b;for(var d=!1,e=0;e<c.length;++e){var f=c[e],g={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:f.initDataTypes,sessionTypes:["temporary"],label:f.label},h=!1;if(f.audioCapabilities)for(var k=0;k<f.audioCapabilities.length;++k){var l=f.audioCapabilities[k];if(l.contentType){h=!0;var m=l.contentType.split(";")[0];MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.audioCapabilities.push(l),d=!0);}}if(f.videoCapabilities)for(k=
  0;k<f.videoCapabilities.length;++k)l=f.videoCapabilities[k],l.contentType&&(h=!0,m=l.contentType.split(";")[0],MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.videoCapabilities.push(l),d=!0));h||(d=MSMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));"required"==f.persistentState&&(d=!1);if(d){this.a=g;return}}d=Error("Unsupported keySystem");d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}el.prototype.createMediaKeys=function(){var b=new fl(this.keySystem);return Promise.resolve(b)};
  el.prototype.getConfiguration=function(){return this.a};function gl(b){var c=this.mediaKeys;c&&c!=b&&hl(c,null);delete this.mediaKeys;return (this.mediaKeys=b)?hl(b,this):Promise.resolve()}function fl(b){this.a=new MSMediaKeys(b);this.b=new Eb;}fl.prototype.createSession=function(b){b=b||"temporary";if("temporary"!=b)throw new TypeError("Session type "+b+" is unsupported on this platform.");return new il(this.a,b)};fl.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
  function hl(b,c){function d(){c.msSetMediaKeys(e.a);c.removeEventListener("loadedmetadata",d);}Fb(b.b);if(!c)return Promise.resolve();G(b.b,c,"msneedkey",jl);var e=b;try{return 1<=c.readyState?c.msSetMediaKeys(b.a):c.addEventListener("loadedmetadata",d),Promise.resolve()}catch(f){return Promise.reject(f)}}function il(b){E.call(this);this.c=null;this.g=b;this.b=this.a=null;this.f=new Eb;this.sessionId="";this.expiration=NaN;this.closed=new z;this.keyStatuses=new kl;}Ga(il,E);n=il.prototype;
  n.generateRequest=function(b,c){this.a=new z;try{this.c=this.g.createSession("video/mp4",new Uint8Array(c),null),G(this.f,this.c,"mskeymessage",this.Pe.bind(this)),G(this.f,this.c,"mskeyadded",this.Ne.bind(this)),G(this.f,this.c,"mskeyerror",this.Oe.bind(this)),ll(this,"status-pending");}catch(d){this.a.reject(d);}return this.a};n.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};n.update=function(b){this.b=new z;try{this.c.update(new Uint8Array(b));}catch(c){this.b.reject(c);}return this.b};
  n.close=function(){try{this.c.close(),this.closed.resolve(),Fb(this.f);}catch(b){this.closed.reject(b);}return this.closed};n.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};function jl(b){if(b.initData){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="cenc";c.initData=ml(b.initData);this.dispatchEvent(c);}}
  function ml(b){if(!b)return b;var c=new cl(b);if(1>=c.a.length)return b;for(var d=[],e=0;e<c.a.length;e++)d.push(b.subarray(c.a[e].start,c.a[e].end+1));b=[];c={};e=q(d);for(d=e.next();!d.done;c={Nb:c.Nb},d=e.next())c.Nb=d.value,b.some(function(b){return function(c){return bc(c,b.Nb)}}(c))||b.push(c.Nb);c=0;e=q(b);for(d=e.next();!d.done;d=e.next())c+=d.value.length;c=new Uint8Array(c);e=0;b=q(b);for(d=b.next();!d.done;d=b.next())d=d.value,c.set(d,e),e+=d.length;return c}
  n.Pe=function(b){this.a&&(this.a.resolve(),this.a=null);this.dispatchEvent(new D("message",{messageType:void 0==this.keyStatuses.a?"license-request":"license-renewal",message:b.message.buffer}));};n.Ne=function(){this.a?(ll(this,"usable"),this.a.resolve(),this.a=null):this.b&&(ll(this,"usable"),this.b.resolve(),this.b=null);};
  n.Oe=function(){var b=Error("EME PatchedMediaKeysMs key error");b.errorCode=this.c.error;if(null!=this.a)this.a.reject(b),this.a=null;else if(null!=this.b)this.b.reject(b),this.b=null;else switch(this.c.error.code){case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:ll(this,"output-not-allowed");break;default:ll(this,"internal-error");}};function ll(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new D("keystatuseschange"));}
  function kl(){this.size=0;this.a=void 0;}var nl;n=kl.prototype;n.forEach=function(b){this.a&&b(this.a,nl);};n.get=function(b){if(this.has(b))return this.a};n.has=function(b){var c=nl;return this.a&&bc(new Uint8Array(b),new Uint8Array(c))?!0:!1};n.entries=function(){};n.keys=function(){};n.values=function(){};
  Sk(function(){!window.HTMLVideoElement||!window.MSMediaKeys||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(nl=(new Uint8Array([0])).buffer,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=gl,window.MediaKeys=fl,window.MediaKeySystemAccess=el,navigator.requestMediaKeySystemAccess=dl);});function ol(){return Promise.reject(Error("The key system specified is not supported."))}function pl(b){return null==b?Promise.resolve():Promise.reject(Error("MediaKeys not supported."))}function ql(){throw new TypeError("Illegal constructor.");}ql.prototype.createSession=function(){};ql.prototype.setServerCertificate=function(){};function rl(){throw new TypeError("Illegal constructor.");}rl.prototype.getConfiguration=function(){};rl.prototype.createMediaKeys=function(){};
  Sk(function(){!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(navigator.requestMediaKeySystemAccess=ol,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=pl,window.MediaKeys=ql,window.MediaKeySystemAccess=rl);},-10);var sl="";function tl(b){var c=sl;return c?c+b.charAt(0).toUpperCase()+b.slice(1):b}function ul(b,c){try{var d=new vl(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}function wl(b){var c=this.mediaKeys;c&&c!=b&&xl(c,null);delete this.mediaKeys;(this.mediaKeys=b)&&xl(b,this);return Promise.resolve()}
  function vl(b,c){this.a=this.keySystem=b;var d=!1;"org.w3.clearkey"==b&&(this.a="webkit-org.w3.clearkey",d=!1);var e=!1;var f=document.getElementsByTagName("video");f=f.length?f[0]:document.createElement("video");for(var g=0;g<c.length;++g){var h=c[g],k={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:h.initDataTypes,sessionTypes:["temporary"],label:h.label},l=!1;if(h.audioCapabilities)for(var m=0;m<h.audioCapabilities.length;++m){var p=
  h.audioCapabilities[m];if(p.contentType){l=!0;var r=p.contentType.split(";")[0];f.canPlayType(r,this.a)&&(k.audioCapabilities.push(p),e=!0);}}if(h.videoCapabilities)for(m=0;m<h.videoCapabilities.length;++m)p=h.videoCapabilities[m],p.contentType&&(l=!0,f.canPlayType(p.contentType,this.a)&&(k.videoCapabilities.push(p),e=!0));l||(e=f.canPlayType("video/mp4",this.a)||f.canPlayType("video/webm",this.a));"required"==h.persistentState&&(d?(k.persistentState="required",k.sessionTypes=["persistent-license"]):
  e=!1);if(e){this.b=k;return}}d="Unsupported keySystem";if("org.w3.clearkey"==b||"com.widevine.alpha"==b)d="None of the requested configurations were supported.";d=Error(d);d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}vl.prototype.createMediaKeys=function(){var b=new yl(this.a);return Promise.resolve(b)};vl.prototype.getConfiguration=function(){return this.b};function yl(b){this.g=b;this.b=null;this.a=new Eb;this.c=[];this.f={};}
  function xl(b,c){b.b=c;Fb(b.a);var d=sl;c&&(G(b.a,c,d+"needkey",b.af.bind(b)),G(b.a,c,d+"keymessage",b.$e.bind(b)),G(b.a,c,d+"keyadded",b.Ye.bind(b)),G(b.a,c,d+"keyerror",b.Ze.bind(b)));}n=yl.prototype;n.createSession=function(b){b=b||"temporary";if("temporary"!=b&&"persistent-license"!=b)throw new TypeError("Session type "+b+" is unsupported on this platform.");var c=this.b||document.createElement("video");c.src||(c.src="about:blank");b=new zl(c,this.g,b);this.c.push(b);return b};
  n.setServerCertificate=function(){return Promise.resolve(!1)};n.af=function(b){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="webm";c.initData=b.initData;this.b.dispatchEvent(c);};n.$e=function(b){var c=Al(this,b.sessionId);c&&(b=new D("message",{messageType:void 0==c.keyStatuses.a?"licenserequest":"licenserenewal",message:b.message}),c.b&&(c.b.resolve(),c.b=null),c.dispatchEvent(b));};
  n.Ye=function(b){if(b=Al(this,b.sessionId))Bl(b,"usable"),b.a&&b.a.resolve(),b.a=null;};
  n.Ze=function(b){var c=Al(this,b.sessionId);if(c){var d=Error("EME v0.1b key error");d.errorCode=b.errorCode;d.errorCode.systemCode=b.systemCode;!b.sessionId&&c.b?(d.method="generateRequest",45==b.systemCode&&(d.message="Unsupported session type."),c.b.reject(d),c.b=null):b.sessionId&&c.a?(d.method="update",c.a.reject(d),c.a=null):(d=b.systemCode,b.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?Bl(c,"output-restricted"):1==d?Bl(c,"expired"):Bl(c,"internal-error"));}};
  function Al(b,c){var d=b.f[c];return d?d:(d=b.c.shift())?(d.sessionId=c,b.f[c]=d):null}function zl(b,c,d){E.call(this);this.f=b;this.h=!1;this.a=this.b=null;this.c=c;this.g=d;this.sessionId="";this.expiration=NaN;this.closed=new z;this.keyStatuses=new Cl;}Ga(zl,E);
  function Dl(b,c,d){if(b.h)return Promise.reject(Error("The session is already initialized."));b.h=!0;try{if("persistent-license"==b.g)if(d)var e=new Uint8Array(Wb("LOAD_SESSION|"+d));else{var f=Wb("PERSISTENT|"),g=new Uint8Array(f.byteLength+c.byteLength);g.set(new Uint8Array(f),0);g.set(new Uint8Array(c),f.byteLength);e=g;}else e=new Uint8Array(c);}catch(k){return Promise.reject(k)}b.b=new z;var h=tl("generateKeyRequest");try{b.f[h](b.c,e);}catch(k){if("InvalidStateError"!=k.name)return b.b=null,Promise.reject(k);
  setTimeout(function(){try{this.f[h](this.c,e);}catch(l){this.b.reject(l),this.b=null;}}.bind(b),10);}return b.b}n=zl.prototype;
  n.Cc=function(b,c){if(this.a)this.a.then(this.Cc.bind(this,b,c))["catch"](this.Cc.bind(this,b,c));else{this.a=b;if("webkit-org.w3.clearkey"==this.c){var d=Sb(c);var e=JSON.parse(d);"oct"!=e.keys[0].kty&&(this.a.reject(Error("Response is not a valid JSON Web Key Set.")),this.a=null);d=Zb(e.keys[0].k);e=Zb(e.keys[0].kid);}else d=new Uint8Array(c),e=null;var f=tl("addKey");try{this.f[f](this.c,d,e,this.sessionId);}catch(g){this.a.reject(g),this.a=null;}}};
  function Bl(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new D("keystatuseschange"));}n.generateRequest=function(b,c){return Dl(this,c,null)};n.load=function(b){return "persistent-license"==this.g?Dl(this,null,b):Promise.reject(Error("Not a persistent session."))};n.update=function(b){var c=new z;this.Cc(c,b);return c};
  n.close=function(){if("persistent-license"!=this.g){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;var b=tl("cancelKeyRequest");try{this.f[b](this.c,this.sessionId);}catch(c){}}this.closed.resolve();return this.closed};n.remove=function(){return "persistent-license"!=this.g?Promise.reject(Error("Not a persistent session.")):this.close()};function Cl(){this.size=0;this.a=void 0;}var El;n=Cl.prototype;n.forEach=function(b){this.a&&b(this.a,El);};n.get=function(b){if(this.has(b))return this.a};
  n.has=function(b){var c=El;return this.a&&bc(new Uint8Array(b),new Uint8Array(c))?!0:!1};n.entries=function(){};n.keys=function(){};n.values=function(){};
  Sk(function(){if(!(!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration)){if(HTMLMediaElement.prototype.webkitGenerateKeyRequest)sl="webkit";else if(!HTMLMediaElement.prototype.generateKeyRequest)return;El=(new Uint8Array([0])).buffer;navigator.requestMediaKeySystemAccess=ul;delete HTMLMediaElement.prototype.mediaKeys;HTMLMediaElement.prototype.mediaKeys=null;HTMLMediaElement.prototype.setMediaKeys=wl;window.MediaKeys=yl;window.MediaKeySystemAccess=
  vl;}});Sk(function(){if(window.HTMLMediaElement){var b=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){var c=b.apply(this);c&&c["catch"](function(){});return c};}});function Fl(){return {droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}}Sk(function(){if(window.HTMLVideoElement){var b=HTMLVideoElement.prototype;!b.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in b&&(b.getVideoPlaybackQuality=Fl);}});function Gl(b,c,d){return new window.TextTrackCue(b,c,d)}function Hl(b,c,d){return new window.TextTrackCue(b+"-"+c+"-"+d,b,c,d)}Sk(function(){if(!window.VTTCue&&window.TextTrackCue){var b=TextTrackCue.length;if(3==b)window.VTTCue=Gl;else if(6==b)window.VTTCue=Hl;else{try{var c=!!Gl(1,2,"");}catch(d){c=!1;}c&&(window.VTTCue=Gl);}}});function hd(b,c,d){this.startTime=b;this.direction=Il;this.endTime=c;this.payload=d;this.region=new Jl;this.position=null;this.positionAlign=Kl;this.size=100;this.textAlign=Ll;this.writingMode=Ml;this.lineInterpretation=Nl;this.line=null;this.lineHeight="";this.lineAlign=Ol;this.displayAlign=Pl;this.fontSize=this.backgroundColor=this.color="";this.fontWeight=Ql;this.fontStyle=Rl;this.fontFamily="";this.textDecoration=[];this.wrapLine=!0;this.id="";}y("shaka.text.Cue",hd);var Kl="auto";
  hd.positionAlign={LEFT:"line-left",RIGHT:"line-right",CENTER:"center",AUTO:Kl};var Ll="center",Sl={LEFT:"left",RIGHT:"right",CENTER:Ll,START:"start",END:"end"};hd.textAlign=Sl;var Pl="after",Tl={BEFORE:"before",CENTER:"center",AFTER:Pl};hd.displayAlign=Tl;var Il="ltr";hd.direction={HORIZONTAL_LEFT_TO_RIGHT:Il,HORIZONTAL_RIGHT_TO_LEFT:"rtl"};var Ml="horizontal-tb";hd.writingMode={HORIZONTAL_TOP_TO_BOTTOM:Ml,VERTICAL_LEFT_TO_RIGHT:"vertical-lr",VERTICAL_RIGHT_TO_LEFT:"vertical-rl"};var Nl=0;
  hd.lineInterpretation={LINE_NUMBER:Nl,PERCENTAGE:1};var Ol="start",Ul={CENTER:"center",START:Ol,END:"end"};hd.lineAlign=Ul;var Ql=400;hd.fontWeight={NORMAL:Ql,BOLD:700};var Rl="normal",Vl={NORMAL:Rl,ITALIC:"italic",OBLIQUE:"oblique"};hd.fontStyle=Vl;hd.textDecoration={UNDERLINE:"underline",LINE_THROUGH:"lineThrough",OVERLINE:"overline"};
  function Jl(){this.id="";this.regionAnchorY=this.regionAnchorX=this.viewportAnchorY=this.viewportAnchorX=0;this.height=this.width=100;this.viewportAnchorUnits=this.widthUnits=this.heightUnits=Wl;this.scroll=Xl;}y("shaka.text.CueRegion",Jl);var Wl=1;Jl.units={PX:0,PERCENTAGE:Wl,LINES:2};var Xl="";Jl.scrollMode={NONE:Xl,UP:"up"};function Yl(){}Yl.prototype.parseInit=function(){};
  Yl.prototype.parseMedia=function(b,c){var d=Sb(b),e=[],f=new DOMParser,g=null;try{g=f.parseFromString(d,"text/xml");}catch(P){throw new B(2,2,2005);}if(g){if(f=g.getElementsByTagName("tt")[0]){g=M.getAttributeNS(f,"http://www.w3.org/ns/ttml#parameter","frameRate");var h=M.getAttributeNS(f,"http://www.w3.org/ns/ttml#parameter","subFrameRate");var k=M.getAttributeNS(f,"http://www.w3.org/ns/ttml#parameter","frameRateMultiplier");var l=M.getAttributeNS(f,"http://www.w3.org/ns/ttml#parameter","tickRate");
  d=f.getAttribute("xml:space")||"default";}else throw new B(2,2,2005);if("default"!=d&&"preserve"!=d)throw new B(2,2,2005);d="default"==d;g=new Zl(g,h,k,l);h=$l(f.getElementsByTagName("styling")[0]);k=$l(f.getElementsByTagName("layout")[0]);l=[];for(var m=0;m<k.length;m++){var p=k[m],r=h;var w=new Jl;var x=p.getAttribute("xml:id");if(x){w.id=x;var A;if(A=am(p,r,"extent"))A=(x=bm.exec(A))||cm.exec(A),null!=A&&(w.width=Number(A[1]),w.height=Number(A[2]),w.widthUnits=x?Wl:0,w.heightUnits=x?Wl:0);if(p=
  am(p,r,"origin"))A=(x=bm.exec(p))||cm.exec(p),null!=A&&(w.viewportAnchorX=Number(A[1]),w.viewportAnchorY=Number(A[2]),w.viewportAnchorUnits=x?Wl:0);}else w=null;w&&l.push(w);}f=$l(f.getElementsByTagName("body")[0]);for(m=0;m<f.length;m++)(w=dm(f[m],c.periodStart,g,h,k,l,d))&&e.push(w);}return e};
  var bm=/^(\d{1,2}|100)% (\d{1,2}|100)%$/,em=/^(\d+px|\d+em)$/,cm=/^(\d+)px (\d+)px$/,fm=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,gm=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,hm=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,im=/^(\d*(?:\.\d*)?)f$/,jm=/^(\d*(?:\.\d*)?)t$/,km=/^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,lm={left:Ol,center:"center",right:"end",start:Ol,end:"end"},mm={left:"line-left",center:"center",right:"line-right"};
  function $l(b){var c=[];if(!b)return c;for(var d=b.childNodes,e=0;e<d.length;e++){var f="span"==d[e].nodeName&&"p"==b.nodeName;d[e].nodeType!=Node.ELEMENT_NODE||"br"==d[e].nodeName||f||(f=$l(d[e]),c=c.concat(f));}c.length||c.push(b);return c}function nm(b,c){for(var d=b.childNodes,e=0;e<d.length;e++)if("br"==d[e].nodeName&&0<e)d[e-1].textContent+="\n";else if(0<d[e].childNodes.length)nm(d[e],c);else if(c){var f=d[e].textContent.trim();f=f.replace(/\s+/g," ");d[e].textContent=f;}}
  function dm(b,c,d,e,f,g,h){if(!b.hasAttribute("begin")&&!b.hasAttribute("end")&&/^\s*$/.test(b.textContent))return null;nm(b,h);h=om(b.getAttribute("begin"),d);var k=om(b.getAttribute("end"),d);d=om(b.getAttribute("dur"),d);var l=b.textContent;null==k&&null!=d&&(k=h+d);if(null==h||null==k)throw new B(2,2,2001);c=new hd(h+c,k+c,l);if((f=pm(b,"region",f))&&f.getAttribute("xml:id")){var m=f.getAttribute("xml:id");g=g.filter(function(b){return b.id==m});c.region=g[0];}qm(c,b,f,e);return c}
  function qm(b,c,d,e){"rtl"==rm(c,d,e,"direction")&&(b.direction="rtl");var f=rm(c,d,e,"writingMode");"tb"==f||"tblr"==f?b.writingMode="vertical-lr":"tbrl"==f?b.writingMode="vertical-rl":"rltb"==f||"rl"==f?b.direction="rtl":f&&(b.direction=Il);if(f=rm(c,d,e,"textAlign"))b.positionAlign=mm[f],b.lineAlign=lm[f],b.textAlign=Sl[f.toUpperCase()];if(f=rm(c,d,e,"displayAlign"))b.displayAlign=Tl[f.toUpperCase()];if(f=rm(c,d,e,"color"))b.color=f;if(f=rm(c,d,e,"backgroundColor"))b.backgroundColor=f;if(f=rm(c,
  d,e,"fontFamily"))b.fontFamily=f;(f=rm(c,d,e,"fontWeight"))&&"bold"==f&&(b.fontWeight=700);(f=rm(c,d,e,"wrapOption"))&&"noWrap"==f&&(b.wrapLine=!1);(f=rm(c,d,e,"lineHeight"))&&f.match(em)&&(b.lineHeight=f);(f=rm(c,d,e,"fontSize"))&&f.match(em)&&(b.fontSize=f);if(f=rm(c,d,e,"fontStyle"))b.fontStyle=Vl[f.toUpperCase()];(d=am(d,e,"textDecoration"))&&sm(b,d);(c=tm(c,e,"textDecoration"))&&sm(b,c);}
  function sm(b,c){for(var d=c.split(" "),e=0;e<d.length;e++)switch(d[e]){case "underline":b.textDecoration.includes("underline")||b.textDecoration.push("underline");break;case "noUnderline":b.textDecoration.includes("underline")&&tb(b.textDecoration,"underline");break;case "lineThrough":b.textDecoration.includes("lineThrough")||b.textDecoration.push("lineThrough");break;case "noLineThrough":b.textDecoration.includes("lineThrough")&&tb(b.textDecoration,"lineThrough");break;case "overline":b.textDecoration.includes("overline")||
  b.textDecoration.push("overline");break;case "noOverline":b.textDecoration.includes("overline")&&tb(b.textDecoration,"overline");}}function rm(b,c,d,e){return (b=tm(b,d,e))?b:am(c,d,e)}function am(b,c,d){for(var e=$l(b),f=0;f<e.length;f++){var g=M.getAttributeNS(e[f],"http://www.w3.org/ns/ttml#styling",d);if(g)return g}return (b=pm(b,"style",c))?M.getAttributeNS(b,"http://www.w3.org/ns/ttml#styling",d):null}
  function tm(b,c,d){return (b=pm(b,"style",c))?M.getAttributeNS(b,"http://www.w3.org/ns/ttml#styling",d):null}function pm(b,c,d){if(!b||1>d.length)return null;var e=null,f=b;for(b=null;f&&!(b=f.getAttribute(c))&&(f=f.parentNode,f instanceof Element););if(c=b)for(b=0;b<d.length;b++)if(d[b].getAttribute("xml:id")==c){e=d[b];break}return e}
  function om(b,c){var d=null;if(fm.test(b)){d=fm.exec(b);var e=Number(d[1]),f=Number(d[2]),g=Number(d[3]),h=Number(d[4]);h+=(Number(d[5])||0)/c.b;g+=h/c.frameRate;d=g+60*f+3600*e;}else gm.test(b)?d=um(gm,b):hm.test(b)?d=um(hm,b):im.test(b)?(d=im.exec(b),d=Number(d[1])/c.frameRate):jm.test(b)?(d=jm.exec(b),d=Number(d[1])/c.a):km.test(b)&&(d=um(km,b));return d}
  function um(b,c){var d=b.exec(c);return null==d||""==d[0]?null:(Number(d[4])||0)/1E3+(Number(d[3])||0)+60*(Number(d[2])||0)+3600*(Number(d[1])||0)}function Zl(b,c,d,e){this.frameRate=Number(b)||30;this.b=Number(c)||1;this.a=Number(e);0==this.a&&(this.a=b?this.frameRate*this.b:1);d&&(b=/^(\d+) (\d+)$/g.exec(d))&&(this.frameRate*=b[1]/b[2]);}cd["application/ttml+xml"]=Yl;function vm(){this.a=new Yl;}vm.prototype.parseInit=function(b){var c=!1;(new Q).F("moov",R).F("trak",R).F("mdia",R).F("minf",R).F("stbl",R).aa("stsd",De).F("stpp",function(b){c=!0;b.parser.stop();}).parse(b);if(!c)throw new B(2,2,2007);};vm.prototype.parseMedia=function(b,c){var d=!1,e=[];(new Q).F("mdat",Ee(function(b){d=!0;e=e.concat(this.a.parseMedia(b,c));}.bind(this))).parse(b);if(!d)throw new B(2,2,2007);return e};cd['application/mp4; codecs="stpp"']=vm;
  cd['application/mp4; codecs="stpp.TTML.im1t"']=vm;function wm(){}wm.prototype.parseInit=function(){};
  wm.prototype.parseMedia=function(b,c){var d=Sb(b);d=d.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n");d=d.split(/\n{2,}/m);if(!/^WEBVTT($|[ \t\n])/m.test(d[0]))throw new B(2,2,2E3);var e=c.segmentStart;if(null==e&&(e=0,d[0].includes("X-TIMESTAMP-MAP"))){var f=d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),g=d[0].match(/MPEGTS:(\d+)/m);f&&g&&(e=xm(new Hf(f[1])),e=c.periodStart+(Number(g[1])/9E4-e));}g=[];var h=d[0].split("\n");for(f=1;f<h.length;f++)if(/^Region:/.test(h[f])){var k=new Hf(h[f]),
  l=new Jl;Kf(k);If(k);for(var m=Kf(k);m;){var p=l,r=m;(m=/^id=(.*)$/.exec(r))?p.id=m[1]:(m=/^width=(\d{1,2}|100)%$/.exec(r))?p.width=Number(m[1]):(m=/^lines=(\d+)$/.exec(r))?(p.height=Number(m[1]),p.heightUnits=2):(m=/^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(r))?(p.regionAnchorX=Number(m[1]),p.regionAnchorY=Number(m[2])):(m=/^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(r))?(p.viewportAnchorX=Number(m[1]),p.viewportAnchorY=Number(m[2])):/^scroll=up$/.exec(r)&&(p.scroll="up");If(k);
  m=Kf(k);}g.push(l);}f=[];for(k=1;k<d.length;k++){h=d[k].split("\n");m=h;r=e;h=g;if(1==m.length&&!m[0]||/^NOTE($|[ \t])/.test(m[0])||"STYLE"==m[0])h=null;else{l=null;m[0].includes("--\x3e")||(l=m[0],m.splice(0,1));p=new Hf(m[0]);var w=xm(p),x=Jf(p,/[ \t]+--\x3e[ \t]+/g),A=xm(p);if(null==w||null==x||null==A)throw new B(2,2,2001);m=new hd(w+r,A+r,m.slice(1).join("\n").trim());If(p);for(r=Kf(p);r;)ym(m,r,h),If(p),r=Kf(p);null!=l&&(m.id=l);h=m;}h&&f.push(h);}return f};
  function ym(b,c,d){var e;if(e=/^align:(start|middle|center|end|left|right)$/.exec(c))c=e[1],"middle"==c?b.textAlign=Ll:b.textAlign=Sl[c.toUpperCase()];else if(e=/^vertical:(lr|rl)$/.exec(c))b.writingMode="lr"==e[1]?"vertical-lr":"vertical-rl";else if(e=/^size:([\d.]+)%$/.exec(c))b.size=Number(e[1]);else if(e=/^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(c))b.position=Number(e[1]),e[2]&&(c=e[2],b.positionAlign="line-left"==c||"start"==c?"line-left":"line-right"==c||"end"==
  c?"line-right":"center");else if(e=/^region:(.*)$/.exec(c)){if(c=zm(d,e[1]))b.region=c;}else if(d=/^line:([\d.]+)%(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=1,b.line=Number(d[1]),d[2]&&(b.lineAlign=Ul[d[2].toUpperCase()]);else if(d=/^line:(-?\d+)(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=Nl,b.line=Number(d[1]),d[2]&&(b.lineAlign=Ul[d[2].toUpperCase()]);}function zm(b,c){var d=b.filter(function(b){return b.id==c});return d.length?d[0]:null}
  function xm(b){b=Jf(b,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);if(null==b)return null;var c=Number(b[2]),d=Number(b[3]);return 59<c||59<d?null:Number(b[4])/1E3+d+60*c+3600*(Number(b[1])||0)}cd["text/vtt"]=wm;cd['text/vtt; codecs="vtt"']=wm;function Am(){this.a=null;}Am.prototype.parseInit=function(b){var c=!1;(new Q).F("moov",R).F("trak",R).F("mdia",R).aa("mdhd",function(b){0==b.version?(b.reader.I(4),b.reader.I(4),this.a=b.reader.C(),b.reader.I(4)):(b.reader.I(8),b.reader.I(8),this.a=b.reader.C(),b.reader.I(8));b.reader.I(4);}.bind(this)).F("minf",R).F("stbl",R).aa("stsd",De).F("wvtt",function(){c=!0;}).parse(b);if(!this.a)throw new B(2,2,2008);if(!c)throw new B(2,2,2008);};
  Am.prototype.parseMedia=function(b,c){var d=this;if(!this.a)throw new B(2,2,2008);var e=0,f=[],g,h=[],k=!1,l=!1,m=!1,p=null;(new Q).F("moof",R).F("traf",R).aa("tfdt",function(b){k=!0;e=0==b.version?b.reader.C():b.reader.ab();}).aa("tfhd",function(b){var c=b.flags;b=b.reader;b.I(4);c&1&&b.I(8);c&2&&b.I(4);p=c&8?b.C():null;}).aa("trun",function(b){l=!0;var c=b.version,d=b.flags;b=b.reader;var e=b.C();d&1&&b.I(4);d&4&&b.I(4);for(var g=[],h=0;h<e;h++){var k={duration:null,sampleSize:null,Ec:null};d&256&&
  (k.duration=b.C());d&512&&(k.sampleSize=b.C());d&1024&&b.I(4);d&2048&&(k.Ec=0==c?b.C():b.xd());g.push(k);}f=g;}).F("mdat",Ee(function(b){m=!0;g=b;})).parse(b);if(!m&&!k&&!l)throw new B(2,2,2008);var r=e,w=new DataView(g.buffer,g.byteOffset,g.byteLength),x=new O(w,0);f.forEach(function(b){var f=b.duration||p,g=b.Ec?e+b.Ec:r;r=g+(f||0);var k=0;do{var l=x.C();k+=l;var m=x.C(),w=null;"vttc"==Fe(m)?8<l&&(w=x.Ja(l-8)):x.I(l-8);f&&w&&h.push(Bm(w,c.periodStart+g/d.a,c.periodStart+r/d.a));}while(b.sampleSize&&
  k<b.sampleSize)});return h.filter(H.wa)};function Bm(b,c,d){var e,f,g;(new Q).F("payl",Ee(function(b){e=Sb(b);})).F("iden",Ee(function(b){f=Sb(b);})).F("sttg",Ee(function(b){g=Sb(b);})).parse(b);return e?Cm(e,f,g,c,d):null}function Cm(b,c,d,e,f){b=new hd(e,f,b);c&&(b.id=c);if(d)for(c=new Hf(d),d=Kf(c);d;)ym(b,d,[]),If(c),d=Kf(c);return b}cd['application/mp4; codecs="wvtt"']=Am;function Yj(b){this.a=null;for(var c=0;c<b.textTracks.length;++c){var d=b.textTracks[c];d.mode="disabled";"Shaka Player TextTrack"==d.label&&(this.a=d);}this.a||(this.a=b.addTextTrack("subtitles","Shaka Player TextTrack"));this.a.mode="hidden";}y("shaka.text.SimpleTextDisplayer",Yj);Yj.prototype.remove=function(b,c){if(!this.a)return !1;Dm(this.a,function(d){return d.startTime<c&&d.endTime>b});return !0};Yj.prototype.remove=Yj.prototype.remove;
  Yj.prototype.append=function(b){for(var c=Em,d=[],e=0;e<b.length;e++){var f=c(b[e]);f&&d.push(f);}d.slice().sort(function(b,c){return b.startTime!=c.startTime?b.startTime-c.startTime:b.endTime!=c.endTime?b.endTime-c.startTime:d.indexOf(c)-d.indexOf(b)}).forEach(function(b){this.a.addCue(b);}.bind(this));};Yj.prototype.append=Yj.prototype.append;Yj.prototype.destroy=function(){this.a&&Dm(this.a,function(){return !0});this.a=null;return Promise.resolve()};Yj.prototype.destroy=Yj.prototype.destroy;
  Yj.prototype.isTextVisible=function(){return "showing"==this.a.mode};Yj.prototype.isTextVisible=Yj.prototype.isTextVisible;Yj.prototype.setTextVisibility=function(b){this.a.mode=b?"showing":"hidden";};Yj.prototype.setTextVisibility=Yj.prototype.setTextVisibility;
  function Em(b){if(b.startTime>=b.endTime)return null;var c=new VTTCue(b.startTime,b.endTime,b.payload);c.lineAlign=b.lineAlign;c.positionAlign=b.positionAlign;c.size=b.size;try{c.align=b.textAlign;}catch(d){}"center"==b.textAlign&&"center"!=c.align&&(c.align="middle");"vertical-lr"==b.writingMode?c.vertical="lr":"vertical-rl"==b.writingMode&&(c.vertical="rl");1==b.lineInterpretation&&(c.snapToLines=!1);null!=b.line&&(c.line=b.line);null!=b.position&&(c.position=b.position);return c}
  function Dm(b,c){var d=b.mode;b.mode="showing"==d?"showing":"hidden";for(var e=b.cues,f=e.length-1;0<=f;f--){var g=e[f];g&&c(g)&&b.removeCue(g);}b.mode=d;}}).call(exportTo,innerGlobal,innerGlobal);for(var k in exportTo.shaka)exports[k]=exportTo.shaka[k];})();


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
      } // Don't fetch certificate if IE or Edge or CC


      if (window_1.document.documentMode || /Edge/.test(window_1.navigator.userAgent) || IS_CHROMECAST || IS_ANDROID) {
        this.certificate_ = null;
      } else if (source.certificateServer && !this.certificate_ && (source.licenseServer || source.keySystems && !isEmpty(source.keySystems))) {
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

      if (source.licenseServer || source.keySystems) {
        this.playToken = source.playToken;
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

      if (source.licenseServer) {
        config.drm.servers = {
          'com.widevine.alpha': source.licenseServer,
          'com.microsoft.playready': source.licenseServer,
          'com.adobe.primetime': source.licenseServer
        };
      } else if (source.keySystems) {
        config.drm.servers = source.keySystems;
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
        this.player.tech_.createPlayer_();
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
          this.player.autoplay(true);
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

  DownloadService.VERSION = '2.1.105-393';

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
        this.createPlayer_();
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
        jumpLargeGaps: true // startAtSegmentBoundary: true

      };

      if (IS_ANDROID) {
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

      if (source.licenseServer) {
        config.drm.servers = {
          'com.widevine.alpha': source.licenseServer,
          'com.microsoft.playready': source.licenseServer,
          'com.adobe.primetime': source.licenseServer
        };
      } else if (source.keySystems) {
        config.drm.servers = source.keySystems;
      } // Remove playready from smartTV, we only use widevine for smartTV


      if (IS_SMARTTV && config.drm.servers && config.drm.servers['com.microsoft.playready']) {
        config.drm.servers['com.microsoft.playready'] = undefined;
      }

      if (this.certificate_) {
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

      log('before load stream'); // Block load call if loading

      this.loading_ = true;

      if (window_1.ShakaPlayerDnaWrapper && this.options_.streamrootkey && !this.streamrootWrapper_) {
        this.createStreamrootWrapper_(this.options_.streamrootkey);
      }

      this.shakaPlayer_.load(source.src, startTime).then(function () {
        log('after load stream');
        _this2.loading_ = false;

        _this2.trackDuration();
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
     * @return {Object} shaka.Player
     * @private
     */
    ;

    _proto.createPlayer_ = function createPlayer_() {
      var _this3 = this;

      log('createPlayer Shaka');
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

          if (_this3.shakaPlayer_.getTextTracks().length || _this3.textTracks().length) {
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
      if (this.shakaPlayer_ && this.live() && this.shakaPlayer_.getPresentationStartTimeAsDate()) {
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

      if (this.live()) {
        var seekRange = this.shakaPlayer_.seekRange(); // Clamp to seek range

        time = time > seekRange.start ? time : seekRange.start;
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
      var textTracks = this.shakaPlayer_.getTextTracks();
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
      var shakaTextTracksLanguages = this.shakaPlayer_.getTextTracks().map(function (track) {
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

      var textTracks = this.shakaPlayer_.getTextTracks();
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
      // Overide play() and block videojs from send play when autoplay, should be handle by Shaka player
      if (this.stopped_ || this.ended_) {
        this.trigger({
          type: empPlayerEvents.REPLAY,
          bubbles: true
        });
      } else {
        // Don't working! do we still need it? Can't press play button  with sll and autoplay
        // if ((!this.options_.autoplay && this.el_.networkState > this.el_.HAVE_METADATA) ||
        // (this.hasStarted_ && this.el_.networkState > this.el_.HAVE_METADATA)) {
        // this.trigger('play'); not needed
        // return this.el_.play();
        return _Html.prototype.play.call(this);
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
        var start = seekRange.start;

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
  EmpShaka.VERSION = '2.1.105-393'; // Unset source handlers set by Html5 super class.
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
