/**
 * @license
 * EMP-Player 2.1.101-324 
 * Copyright Ericsson, Inc. <https://www.ericsson.com/>
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.empPlayer = factory());
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

  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    strings.raw = raw;
    return strings;
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

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
  };

  var empPlayerEvents = new EmpPlayerEvents();

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
   * Array-like reduce for objects.
   *
   * @param {Object} object
   *        The Object that you want to reduce.
   *
   * @param {Function} fn
   *         A callback function which is called for each key in the object. It
   *         receives the accumulated value and the per-iteration value and key
   *         as arguments.
   *
   * @param {Mixed} [initial = 0]
   *        Starting value
   *
   * @return {Mixed}
   *         The final accumulated value.
   */

  function reduce(object, fn, initial) {
    if (initial === void 0) {
      initial = 0;
    }

    return keys(object).reduce(function (accum, key) {
      return fn(accum, object[key], key);
    }, initial);
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
  /**
   * Rename properties in a object
   *
   * @param {Object} obj obj
   * @param {Object} newKeys newKeys
   * @return {Object} renameKeys
   */

  function renameKeys(obj, newKeys) {
    var newObj = {};
    Object.keys(obj).forEach(function (key) {
      var value = obj[key];
      var newKey = newKeys[key] || key;
      newObj[newKey] = value;
    });
    return newObj;
  }

  /* global
    document, atob
  */
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
   * parse a video source
   *
   * @param {string} src src
   * @return {Object} asset
   */

  function parseSrc(src) {
    var asset = {
      assetId: undefined,
      programId: undefined,
      channelId: undefined
    };

    try {
      asset = JSON.parse(src);
    } catch (e) {
      asset.assetId = src;
    }

    return asset;
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
   * get Parameter in url by name
   *
   * @param {string} name name
   * @param {string} url url
   * @return {string} Parameter
   */

  function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);

    if (!results) {
      return null;
    }

    if (!results[2]) {
      return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  /**
   * EmpPlayerErrorCodes - Holds all available error codes
   * EmpPlayerError - Emp custom Error object
   *
   * @class EmpPlayerError
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
    DASHIF_TECH: 20000
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
     * @param {number} code = EmpPlayerErrorCodes.UNKNOWN
     * @param {Object} status = null
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
   * Unique ID for an element or function
   * @type {Number}
   * @private
   */
  var _guid = 1;
  /**
   * Get the next unique ID
   *
   * @return {string} a GUID
   * @function newGUID
   */

  function newGUID() {
    return _guid++;
  }

  /**
   * Bind (a.k.a proxy or Context). A simple method for changing the context of a function
   * It also stores a unique id on the function so it can be easily removed from events.
   *
   * @param {Mixed} context
   *        The object to bind as scope.
   *
   * @param {Function} fn
   *        The function to be bound to a scope.
   *
   * @param {number} [uid]
   *        An optional unique ID for the function to be set
   *
   * @return {Function}
   *         The new function that will be bound into the context given
   */

  var bind = function bind(context, fn, uid) {
    // Make sure the function has a unique ID
    if (!fn.guid) {
      fn.guid = newGUID();
    } // Create the new function that changes the context


    var bound = function bound() {
      return fn.apply(context, arguments);
    }; // Allow for the ability to individualize this function
    // Needed in the case where multiple objects might share the same prototype
    // IF both items add an event listener with the same function, then you try to remove just one
    // it will remove both because they both have the same guid.
    // when using this, you need to use the bind method when you remove the listener as well.
    // currently used in text tracks


    bound.guid = uid ? uid + '_' + fn.guid : fn.guid;
    return bound;
  };
  /**
   * Wraps the given function, `fn`, with a new function that only invokes `fn`
   * at most once per every `wait` milliseconds.
   *
   * @param  {Function} fn
   *         The function to be throttled.
   *
   * @param  {number}   wait
   *         The number of milliseconds by which to throttle.
   *
   * @return {Function} throttled function
   */

  var throttle = function throttle(fn, wait) {
    var last = Date.now();

    var throttled = function throttled() {
      var now = Date.now();

      if (now - last >= wait) {
        fn.apply(void 0, arguments);
        last = now;
      }
    };

    return throttled;
  };

  var MenuItem = videojs.getComponent('MenuItem');
  var Component = videojs.getComponent('Component');
  /**
   * The specific menu item type for selecting a bitrate
   *
   * @param {Player|Object} player
   * @param {Object=} options
   * @extends MenuItem
   * @class BitrateMenuItem
   */

  var BitrateMenuItem =
  /*#__PURE__*/
  function (_MenuItem) {
    _inheritsLoose(BitrateMenuItem, _MenuItem);

    /**
     * Create a BitrateMenuItem button
     *
     * @param {Player|Object} player
     * @param {Object=} options
     */
    function BitrateMenuItem(player, options) {
      var _this;

      var bitrate = options.bitrate; // Modify options for parent MenuItem class's init.

      options.label = bitrate === 0 ? 'auto' : Math.max(0, Math.round(bitrate / 1000)) + ' kbps';
      options.selected = bitrate === 0;
      _this = _MenuItem.call(this, player, options) || this;
      _this.bitrate = bitrate;

      _this.player_.on(empPlayerEvents.BITRATE_CHANGED, function (event, data) {
        if (_this.el()) {
          if (_this.bitrate === 0) {
            _this.selected(data.auto);
          } else {
            _this.selected(!data.auto && data.bitrate === _this.bitrate);
          }
        }
      });

      return _this;
    }
    /**
     * Handle click on audio track
     *
     * @param {EventTarget~Event} [event]
     */


    var _proto = BitrateMenuItem.prototype;

    _proto.handleClick = function handleClick(event) {
      this.player_.bitrate(this.bitrate);
    };

    return BitrateMenuItem;
  }(MenuItem);

  Component.registerComponent('BitrateMenuItem', BitrateMenuItem);

  var MenuButton = videojs.getComponent('MenuButton');
  var Component$1 = videojs.getComponent('Component');
  /**
   * The class for BitrateButton
   *
   * @extends MenuButton
   * @class BitrateButton
   */

  var BitrateButton =
  /*#__PURE__*/
  function (_MenuButton) {
    _inheritsLoose(BitrateButton, _MenuButton);

    /**
     * Create a BitrateButton button
     *
     * @param {Player|Object} player
     * @param {Object=} options
     */
    function BitrateButton(player, options) {
      var _this;

      _this = _MenuButton.call(this, player, options) || this;

      _this.el_.setAttribute('aria-label', 'Bitrate menu');

      _this.hide();

      var updateHandler = bind(_assertThisInitialized(_this), _this.update);

      _this.player_.on(empPlayerEvents.LOADED_DATA, updateHandler);

      _this.player_.on(empPlayerEvents.CHROMECAST_CASTING, updateHandler);

      _this.player_.on(empPlayerEvents.ENDED, function () {
        return _this.hide();
      });

      _this.player_.on(empPlayerEvents.PLAYING, function () {
        if (_this.items && _this.items.length > 1 && _this.player_.techName_ !== 'EmpHLS') {
          _this.show();
        }
      });

      _this.player_.on(empPlayerEvents.DISPOSE, function () {
        this.player_.on(empPlayerEvents.LOADED_DATA, updateHandler);
      });

      return _this;
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */


    var _proto = BitrateButton.prototype;

    _proto.buildCSSClass = function buildCSSClass() {
      return "vjs-bitrate-button " + _MenuButton.prototype.buildCSSClass.call(this);
    } // buildWrapperCSSClass() {
    //  return `vjs-bitrate-button ${super.buildWrapperCSSClass()}`;
    // }

    /**
     * Create sub-menu items
     *
     * @param {Array=} items
     * @return {Array} Array of BitrateMenuItems
     */
    ;

    _proto.createItems = function createItems(items) {
      if (items === void 0) {
        items = [];
      }

      var bitrates = this.player_.bitrates();

      if (!bitrates || bitrates.length === 1 || this.player_.techName_ === 'EmpHLS') {
        this.hide();
        return items;
      }

      if (bitrates.length > 0) {
        // add an AUTO menu item
        items.push(new BitrateMenuItem(this.player_, {
          selectable: true,
          bitrate: 0
        }));
      }

      for (var i = 0; i < bitrates.length; i++) {
        var bitrate = bitrates[i];
        items.push(new BitrateMenuItem(this.player_, {
          // MenuItem is selectable
          selectable: true,
          bitrate: bitrate
        }));
      }

      this.show();
      return items;
    };

    return BitrateButton;
  }(MenuButton);

  BitrateButton.prototype.controlText_ = 'Bitrate';
  Component$1.registerComponent('BitrateButton', BitrateButton);

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

  function clean (s) {
    return s.replace(/\n\r?\s*/g, '')
  }


  var tsml = function tsml (sa) {
    var s = ''
      , i = 0;

    for (; i < arguments.length; i++)
      s += clean(sa[i]) + (arguments[i + 1] || '');

    return s
  };

  /**
   * A safe getComputedStyle with an IE8 fallback.
   *
   * This is needed because in Firefox, if the player is loaded in an iframe with
   * `display:none`, then `getComputedStyle` returns `null`, so, we do a null-check to
   * make sure  that the player doesn't break in these cases.
   *
   * @param {Element} el
   *        The element you want the computed style of
   *
   * @param {string} prop
   *        The property name you want
   *
   * @return {string} currentStyle
   *
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   *
   * @static
   * @const
   */

  function computedStyle(el, prop) {
    if (!el || !prop) {
      return '';
    }

    if (typeof window_1.getComputedStyle === 'function') {
      var cs = window_1.getComputedStyle(el);
      return cs ? cs[prop] : '';
    }

    return el.currentStyle[prop] || '';
  }

  function _templateObject() {
    var data = _taggedTemplateLiteralLoose(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
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
  /**
   * Determines, via duck typing, whether or not a value is a DOM element.
   *
   * @param {Mixed} value
   *        The thing to check
   *
   * @return {boolean}
   *         - True if it is a DOM element
   *         - False otherwise
   */

  function isEl(value) {
    return isObject(value) && value.nodeType === 1;
  }
  /**
   * Creates an element and applies properties.
   *
   * @param {string} [tagName='div']
   *         Name of tag to be created.
   *
   * @param {Object} [properties={}]
   *         Element properties to be applied.
   *
   * @param {Object} [attributes={}]
   *         Element attributes to be applied.
   *
   * @param {String|Element|TextNode|Array|Function} [content]
   *         Contents for the element (see: {@link dom:normalizeContent})
   *
   * @return {Element}
   *         The element that was created.
   */


  function createEl(tagName, properties, attributes, content) {
    if (tagName === void 0) {
      tagName = 'div';
    }

    if (properties === void 0) {
      properties = {};
    }

    if (attributes === void 0) {
      attributes = {};
    }

    var el = document_1.createElement(tagName);
    Object.getOwnPropertyNames(properties).forEach(function (propName) {
      var val = properties[propName]; // See #2176
      // We originally were accepting both properties and attributes in the
      // same object, but that doesn't work so well.

      if (propName.indexOf('aria-') !== -1 || propName === 'role' || propName === 'type') {
        log.warn(tsml(_templateObject(), propName, val));
        el.setAttribute(propName, val); // Handle textContent since it's not supported everywhere and we have a
        // method for it.
      } else if (propName === 'textContent') {
        textContent(el, val);
      } else {
        el[propName] = val;
      }
    });
    Object.getOwnPropertyNames(attributes).forEach(function (attrName) {
      el.setAttribute(attrName, attributes[attrName]);
    });

    if (content) {
      appendContent(el, content);
    }

    return el;
  }
  /**
   * Injects text into an element, replacing any existing contents entirely.
   *
   * @param {Element} el
   *        The element to add text content into
   *
   * @param {string} text
   *        The text content to add.
   *
   * @return {Element}
   *         The element with added text content.
   */

  function textContent(el, text) {
    if (typeof el.textContent === 'undefined') {
      el.innerText = text;
    } else {
      el.textContent = text;
    }

    return el;
  }
  /**
   * Identical to the native `getBoundingClientRect` function, but ensures that
   * the method is supported at all (it is in all browsers we claim to support)
   * and that the element is in the DOM before continuing.
   *
   * This wrapper function also shims properties which are not provided by some
   * older browsers (namely, IE8).
   *
   * Additionally, some browsers do not support adding properties to a
   * `ClientRect`/`DOMRect` object; so, we shallow-copy it with the standard
   * properties (except `x` and `y` which are not widely supported). This helps
   * avoid implementations where keys are non-enumerable.
   *
   * @param  {Element} el
   *         Element whose `ClientRect` we want to calculate.
   *
   * @return {Object|undefined}
   *         Always returns a plain
   */

  function getBoundingClientRect(el) {
    if (el && el.getBoundingClientRect && el.parentNode) {
      var rect = el.getBoundingClientRect();
      var result = {};
      ['bottom', 'height', 'left', 'right', 'top', 'width'].forEach(function (k) {
        if (rect[k] !== undefined) {
          result[k] = rect[k];
        }
      });

      if (!result.height) {
        result.height = parseFloat(computedStyle(el, 'height'));
      }

      if (!result.width) {
        result.width = parseFloat(computedStyle(el, 'width'));
      }

      return result;
    }
  }
  /**
   * Determines, via duck typing, whether or not a value is a text node.
   *
   * @param {Mixed} value
   *        Check if this value is a text node.
   *
   * @return {boolean}
   *         - True if it is a text node
   *         - False otherwise
   */

  function isTextNode(value) {
    return isObject(value) && value.nodeType === 3;
  }
  /**
   * Normalizes content for eventual insertion into the DOM.
   *
   * This allows a wide range of content definition methods, but protects
   * from falling into the trap of simply writing to `innerHTML`, which is
   * an XSS concern.
   *
   * The content for an element can be passed in multiple types and
   * combinations, whose behavior is as follows:
   *
   * @param {string|Element|TextNode|Array|Function} content
   *        - String: Normalized into a text node.
   *        - Element/TextNode: Passed through.
   *        - Array: A one-dimensional array of strings, elements, nodes, or functions
   *          (which return single strings, elements, or nodes).
   *        - Function: If the sole argument, is expected to produce a string, element,
   *          node, or array as defined above.
   *
   * @return {Array}
   *         All of the content that was passed in normalized.
   */

  function normalizeContent(content) {
    // First, invoke content if it is a function. If it produces an array,
    // that needs to happen before normalization.
    if (typeof content === 'function') {
      content = content();
    } // Next up, normalize to an array, so one or many items can be normalized,
    // filtered, and returned.


    return (Array.isArray(content) ? content : [content]).map(function (value) {
      // First, invoke value if it is a function to produce a new value,
      // which will be subsequently normalized to a Node of some kind.
      if (typeof value === 'function') {
        value = value();
      }

      if (isEl(value) || isTextNode(value)) {
        return value;
      }

      if (typeof value === 'string' && /\S/.test(value)) {
        return document_1.createTextNode(value);
      }
    }).filter(function (value) {
      return value;
    });
  }
  /**
   * Normalizes and appends content to an element.
   *
   * @param {Element} el
   *        Element to append normalized content to.
   *
   *
   * @param {string|Element|TextNode|Array|Function} content
   *        See the `content` argument of {@link dom:normalizeContent}
   *
   * @return {Element}
   *         The element with appended normalized content.
   */

  function appendContent(el, content) {
    normalizeContent(content).forEach(function (node) {
      return el.appendChild(node);
    });
    return el;
  }

  var extplayer = {
    bitrates: function bitrates(player) {
      if (!player.tech_ || player.tech_.bitrates === undefined) {
        return [];
      }

      return player.techGet_('bitrates');
    },
    bitrate: function bitrate(player, value) {
      if (!player.tech_ || player.tech_.bitrate === undefined) {
        return 0;
      }

      if (value !== undefined) {
        player.techCall_('bitrate', value);
      }

      return player.techGet_('bitrate');
    },
    canRestart: function canRestart(player) {
      if (!player.tech_ || player.tech_.canRestart === undefined) {
        return true;
      }

      return player.techGet_('canRestart');
    },
    restart: function restart(player, useLastViewedOffset, absoluteStartTime) {
      if (player.currentSource()) {
        player.options_.startTime = 0;
        player.options_.absoluteStartTime = undefined;
        player.previousAbsoluteStartTime = undefined;

        if (!player.options_.autoplay) {
          // User-action to restart, enforce autoplay
          player.options_.autoplay = true;
          player.one('play', function () {
            player.options_.autoplay = false;
          });
        }

        player.trigger(empPlayerEvents.RESTARTING);

        if (absoluteStartTime) {
          player.options_.absoluteStartTime = absoluteStartTime;
          player.options_.useLastViewedOffset = false;
        } else {
          player.options_.useLastViewedOffset = useLastViewedOffset;
        }

        player.trigger(empPlayerEvents.REPLAY);
      }
    },
    getSelectedAudioTrack: function getSelectedAudioTrack(player) {
      var audioTracks = player.audioTracks();
      var i = audioTracks.length;

      while (i--) {
        var track = audioTracks[i];

        if (track.enabled) {
          return track.language;
        }
      }

      return null;
    },
    getSelectedTextTrack: function getSelectedTextTrack(player) {
      var textTracks = player.textTracks();
      var i = textTracks.length;

      while (i--) {
        var track = textTracks[i];

        if (track.mode === 'showing') {
          return track.language;
        }
      }

      return null;
    },
    loadAsset: function loadAsset(player, assetId, programId, channelId, callback) {
      if (callback === void 0) {
        callback = function callback() {};
      }

      var asset = {
        assetId: assetId,
        programId: programId,
        channelId: channelId
      };
      player.one(empPlayerEvents.LOADED_DATA, function () {
        // Clone of entitlement
        callback(player.entitlement);
      });

      if (player.startResetAndReloadTimer_) {
        player.startResetAndReloadTimer_();
      }

      player.src({
        type: 'video/emp',
        src: JSON.stringify(asset)
      });
    },
    currentAsset: function currentAsset(player, assetId, programId, channelId) {
      if (!assetId && !programId && !channelId) {
        var srcObj = player.cache_.source;

        if (srcObj && srcObj.src && srcObj.type === 'video/emp') {
          var asset = parseSrc(srcObj.src);
          return asset;
        } else if (srcObj && srcObj.assetId) {
          return {
            assetId: srcObj.assetId,
            programId: srcObj.programId,
            channelId: srcObj.channelId
          };
        }

        return null;
      }

      log('Update currentAsset', assetId, programId, channelId);

      if (player.cache_.source && player.cache_.source.type === 'video/emp') {
        player.cache_.source.src = JSON.stringify({
          assetId: assetId,
          programId: programId,
          channelId: channelId
        });
      } else if (player.cache_.source && player.cache_.source.assetId) {
        player.cache_.source.assetId = assetId;
        player.cache_.source.programId = programId;
        player.cache_.source.channelId = channelId;
      } else {
        var _asset = {
          assetId: assetId,
          programId: programId,
          channelId: channelId
        };
        player.cache_.source = {
          type: 'video/emp',
          src: JSON.stringify(_asset)
        };
      }

      player.cache_.sources = [player.cache_.source];
    },
    getAbsoluteTime: function getAbsoluteTime(player) {
      if (!player.tech_ || player.tech_.getAbsoluteTime === undefined) {
        return new Date(0);
      }

      var nowDate = this.getServerTime(player);
      var value = player.tech_.getAbsoluteTime(nowDate);

      if (player.techName_ !== 'EmpCast') {
        var entitlement = this.getEntitlement(player);

        if (value && entitlement && entitlement.isStaticCachupAsLive) {
          value = new Date(value.getTime() + entitlement.streamInfo.start.getTime());
        } else if (entitlement && entitlement.isDynamicCachupAsLive && player.streamType === 'HLS') {
          value = new Date(player.tech_.baseCurrentTime() * 1000 + entitlement.streamInfo.start.getTime());
        }
      }

      if (value && value.getTime) {
        return value;
      }

      return new Date(0);
    },
    getPlayheadTime: function getPlayheadTime(player) {
      var value = this.getAbsoluteTime(player);

      if (value) {
        return value.getTime();
      }

      return 0;
    },
    timeBehindLive: function timeBehindLive(player) {
      if (!player.tech_ || player.tech_.timeBehindLive === undefined) {
        return 0;
      }

      var value = 0;
      var nowdate = this.getServerTime(player);
      var entitlement = this.getEntitlement(player);

      if (entitlement && entitlement.isStaticCachupAsLive) {
        value = (nowdate - this.getPlayheadTime(player)) / 1000;
      } else {
        value = player.tech_.timeBehindLive(nowdate);
      }

      return value === Infinity || !value ? 0 : Math.round(value);
    },
    liveDelay: function liveDelay(player) {
      var liveDelay = 0;

      if (this.isLive(player)) {
        if (player.tech_ && player.tech_.liveDelay !== undefined) {
          liveDelay = player.tech_.liveDelay();
        } else {
          liveDelay = (this.getServerTime(player) - this.getSeekTimerange(player).end) / 1000;
        }
      }

      return Math.round(liveDelay);
    },
    stop: function stop(player, afterStopCallback) {
      if (player.stopProgramService) {
        player.stopProgramService();
      }

      player.sourceChanging_ = false;
      player.cache_.sources = [];

      if (!player.tech_ || player.tech_.stop === undefined) {
        player.techCall_('stopTrackingCurrentTime');

        if (afterStopCallback) {
          afterStopCallback();
        }
      } else {
        player.techCall_('stop', afterStopCallback);
        player.techCall_('stopTrackingCurrentTime');
      }
    },
    timeShiftEnabled: function timeShiftEnabled(player) {
      if (!player.tech_ || player.tech_.timeShiftEnabled === undefined) {
        return true;
      }

      return player.techGet_('timeShiftEnabled');
    },
    baseCurrentTime: function baseCurrentTime(player) {
      if (!player.tech_ || player.tech_.baseCurrentTime === undefined) {
        return player.currentTime();
      }

      return player.techGet_('baseCurrentTime');
    },
    baseDuration: function baseDuration(player) {
      if (!player.tech_ || player.tech_.duration === undefined) {
        return 0;
      }

      return player.techGet_('duration');
    },
    startTimeLive: function startTimeLive(player) {
      if (!player.tech_ || player.tech_.startTimeLive === undefined) {
        return 0;
      }

      var nowdate = this.getServerTime(player);
      var value = player.tech_.startTimeLive(nowdate);
      var entitlement = this.getEntitlement(player);

      if (entitlement && entitlement.isDynamicCachupAsLive && player.streamType === 'HLS') {
        value = entitlement.streamInfo.referenceTime;
      }

      if (entitlement && entitlement.isStaticCachupAsLive && player.techName_ !== 'EmpCast') {
        value = entitlement.streamInfo.referenceTime;
      }

      return value;
    },
    driftingTime: function driftingTime(player) {
      if (!player.tech_ || !this.isLive(player) || player.techName_ !== 'EmpShaka') {
        return NaN;
      }

      var entitlement = this.getEntitlement(player);

      if (!entitlement) {
        return NaN;
      }

      var drifting = player.tech_.getPresentationStartTime();
      drifting = (entitlement.streamInfo.referenceTime - drifting) / 1000;
      return Math.round(drifting);
    },
    isLive: function isLive(player) {
      if (!player.tech_ || player.tech_.live === undefined) {
        return false;
      }

      return player.techGet_('live');
    },
    isCatchupAsLive: function isCatchupAsLive(player) {
      var entitlement = this.getEntitlement(player);
      return !this.isLive(player) && entitlement && entitlement.live;
    },
    getBitrate: function getBitrate(player) {
      if (!player.tech_ || player.tech_.getBitrate === undefined) {
        return 0;
      }

      return player.techGet_('getBitrate');
    },
    duration: function duration(player, seconds) {
      if (!player.tech_ || player.tech_.duration === undefined) {
        return player.duration(seconds);
      }

      player.duration(seconds);
      return player.techGet_('duration');
    },
    techVersion: function techVersion(player) {
      if (!player.tech_ || player.tech_.techVersion === undefined) {
        return '2.x.x';
      }

      return player.techGet_('techVersion');
    },
    canSeekTo: function canSeekTo(player, position) {
      if (this.timeShiftEnabled(player) === false || !player.hasStarted()) {
        return false;
      }

      var entitlement = this.getEntitlement(player);

      if (entitlement && player.cache_ && entitlement.ffEnabled === false) {
        if (player.cache_.currentTime <= position) {
          return false;
        }
      }

      if (entitlement && player.cache_ && entitlement.rwEnabled === false) {
        if (player.cache_.currentTime >= position) {
          return false;
        }
      }

      return true;
    },
    remainingTime: function remainingTime(player) {
      if (!player.tech_ || player.tech_.remainingTime === undefined) {
        var duration = player.duration();

        if (duration === Infinity || duration === 0) {
          return Infinity;
        }

        return duration - player.currentTime();
      }

      return player.techGet_('remainingTime');
    },
    casting: function casting(player, sources) {
      if (player.castPlugin && player.castPlugin().canOverride('Cast')) {
        // intial sources
        player.cache_.sources = sources; // intial source

        player.cache_.source = sources[0];
        player.castPlugin().cast();
        return true;
      }

      return false;
    },
    setAbsoluteTime: function setAbsoluteTime(player, date) {
      if (!player.tech_ || player.tech_.setAbsoluteTime === undefined) {
        var seconds = (date.getTime() - new Date(0)) / 1000;
        player.currentTime(seconds);
        return;
      }

      var nowDate = this.getServerTime(player);

      if (player.techName_ !== 'EmpCast') {
        var entitlement = this.getEntitlement(player);

        if (entitlement && entitlement.isStaticCachupAsLive) {
          if (date.getTime() < entitlement.streamInfo.start.getTime()) {
            log('setAbsoluteTime', 'playPreviousProgram');
            this.playProgram(player, date);
            date = 0;
          } else if (date.getTime() >= entitlement.streamInfo.end.getTime()) {
            log('setAbsoluteTime', 'playNextProgram');
            this.playProgram(player, date);
            return;
          } else {
            date = date.getTime() - entitlement.streamInfo.start.getTime();
          }

          player.techCall_('setCurrentTime', date / 1000);
          return;
        } else if (entitlement && entitlement.isDynamicCachupAsLive) {
          if (date.getTime() < entitlement.streamInfo.start.getTime()) {
            log('setAbsoluteTime', 'playPreviousProgram');
            this.playProgram(player, date); // Go to start of stream as a fallback

            if (player.streamType === 'HLS') {
              player.techCall_('setCurrentTime', 0);
              return;
            } // DASH


            date = new Date(entitlement.streamInfo.start.getTime());
          } else if (player.streamType === 'HLS') {
            date = date - entitlement.streamInfo.start.getTime();
            player.techCall_('setCurrentTime', date / 1000);
            return;
          }
        }
      }

      player.techCall_('setAbsoluteTime', {
        date: date,
        nowDate: nowDate
      });
    },
    gotoLive: function gotoLive(player) {
      if (player.sourceChanging_) {
        log('gotoLive ignore sourceChanging');
        return;
      }

      if (player.tech_.gotoLive) {
        player.techCall_('gotoLive');
      } else {
        var entitlement = this.getEntitlement(player);

        if (entitlement && entitlement.isDynamicCachupAsLive) {
          this.setAbsoluteTime(player, new Date(player.getServerTime()));
        } else if (entitlement && entitlement.isStaticCachupAsLive) {
          var asset = this.currentAsset(player);

          if (asset && asset.channelId) {
            player.startPlayback(null, asset.channelId, null);
          }
        } else if (this.isLive(player)) {
          var duration = player.duration();
          player.currentTime(duration);
        } else {
          log.warn('Not suppoted for VOD');
        }
      }
    },
    setPlayheadTime: function setPlayheadTime(player, unixTime) {
      this.setAbsoluteTime(player, new Date(unixTime));
    },
    supportsEpgProgramChange: function supportsEpgProgramChange(player) {
      if (!player.tech_ || player.tech_.supportsEpgProgramChange === undefined) {
        return;
      }

      return player.techGet_('supportsEpgProgramChange');
    },
    program: function program(player) {
      if (!player.tech_ || player.tech_.program === undefined) {
        return null;
      }

      return player.techGet_('program');
    },
    playPreviousProgram: function playPreviousProgram(player, theEnd) {
      if (player.sourceChanging_) {
        log('playPreviousProgram ignore sourceChanging');
        return;
      }

      if (player.programService) {
        player.sourceChanging_ = true;
        player.programService().getPreviousProgram(function (program, error) {
          if (error) {
            player.sourceChanging_ = false;
            log.warn('playPreviousProgram', error);
          } else {
            var playbackProperties = {};

            if (theEnd) {
              playbackProperties.playFrom = 'startTime';
              var dateTime = new Date(program.endTime);
              dateTime.setSeconds(dateTime.getSeconds() - 30);
              playbackProperties.startTime = dateTime;
            } else {
              playbackProperties.playFrom = 'beginning';
            }

            player.startPlayback(program.assetId, program.channelId, program.programId, playbackProperties);
          }
        });
      }
    },
    playNextProgram: function playNextProgram(player) {
      if (player.sourceChanging_) {
        log('playNextProgram ignore sourceChanging');
        return;
      }

      if (player.programService && player.programService().currentProgram) {
        if (this.getServerTime(player) > player.programService().currentProgram.end.getTime()) {
          player.sourceChanging_ = true;
          player.programService().getNextProgram(function (program, error) {
            if (error) {
              player.sourceChanging_ = false;
              log.warn('playNextProgram', error);
            } else {
              var playbackProperties = {};
              playbackProperties.playFrom = 'beginning';
              player.startPlayback(program.assetId, program.channelId, program.programId, playbackProperties);
            }
          });
        }
      }
    },
    playProgram: function playProgram(player, startTime) {
      if (player.sourceChanging_) {
        log('playProgram ignore sourceChanging');
        return;
      }

      if (player.programService) {
        player.sourceChanging_ = true;
        player.programService().getProgram(startTime, function (program, error) {
          if (error) {
            player.sourceChanging_ = false;
            log.warn('getProgram', error);
          } else {
            var playbackProperties = {};
            playbackProperties.playFrom = 'startTime';
            playbackProperties.startTime = startTime;
            player.startPlayback(program.assetId, program.channelId, program.programId, playbackProperties);
          }
        });
      }
    },
    getServerTime: function getServerTime(player) {
      if (player.programService && player.programService() && player.programService().exposure) {
        return player.programService().exposure.getCachedServerTime();
      }

      return Date.now();
    },
    getEntitlement: function getEntitlement(player) {
      if (player.programService) {
        return player.programService().entitlement();
      } else if (player.tech_) {
        var opt = player.tech_.options_;

        if (opt && opt.source && opt.source.playSessionId) {
          return opt.source;
        }
      }

      return null;
    },
    getSeekTimerange: function getSeekTimerange(player) {
      var result = {
        start: 0,
        end: 0
      };

      if (!player.tech_ || player.tech_.seekable === undefined || player.seeking()) {
        return result;
      }

      var seekable = player.techGet_('seekable');

      if (seekable && seekable.length > 0) {
        var entitlement = this.getEntitlement(player);
        var referenceTime = 0;

        if (entitlement && entitlement.isDynamicCachupAsLive && player.streamType === 'HLS') {
          referenceTime = entitlement.streamInfo.referenceTime;
        }

        result.start = seekable.start(seekable.length - 1) * 1000 + referenceTime;
        result.end = seekable.end(seekable.length - 1) * 1000 + referenceTime;

        if (player.techName_ === 'EmpCast') {
          var liveDelay = this.liveDelay(player);

          if (result.end > this.getServerTime(player) - liveDelay * 1000) {
            result.end = this.getServerTime(player) - liveDelay * 1000;
          }
        }
      }

      return result;
    },
    getBufferedTimerange: function getBufferedTimerange(player) {
      var result = {
        start: 0,
        end: 0
      };

      if (!player.tech_ || player.tech_.buffered === undefined || player.seeking()) {
        return result;
      }

      var buffered = player.techGet_('buffered');

      if (buffered && buffered.length > 0) {
        result.start = Math.round(buffered.start(buffered.length - 1) * 1000);
        result.end = Math.round(buffered.end(buffered.length - 1) * 1000);
      }

      return result;
    },
    setTechProgram: function setTechProgram(player, program) {
      if (player.tech_ && player.tech_.program !== undefined) {
        player.techCall_('program', program);
      }
    }
  };

  var Button = videojs.getComponent('Button');
  var Component$2 = videojs.getComponent('Component');
  /**
   * Displays the live indicator
   *
   * @extends Button
   */

  var EmpLiveDisplay =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(EmpLiveDisplay, _Button);

    /**
     * Create a live button
     *
     * @param {Player|Object} player
     * @param {Object=} options
     */
    function EmpLiveDisplay(player, options) {
      var _this;

      _this = _Button.call(this, player, options) || this;

      _this.updateShowing();

      _this.on(_this.player(), empPlayerEvents.PLAYING, function () {
        return _this.updateShowing();
      });

      _this.on(_this.player(), empPlayerEvents.DURATION_CHANGE, function () {
        return _this.updateShowing();
      });

      _this.on(_this.player(), empPlayerEvents.TIME_UPDATE, function () {
        return _this.timeUpdate();
      });

      _this.on(_this.player(), empPlayerEvents.ENDED, function () {
        return _this.hide();
      });

      return _this;
    }
    /**
     * Create the component's DOM element
     *
     * @return {Element}  The element that was created.
     * @method createEl
     */


    var _proto = EmpLiveDisplay.prototype;

    _proto.createEl = function createEl$$1() {
      var el = _Button.prototype.createEl.call(this, 'button', {
        className: 'emp-live-control vjs-control'
      });

      this.contentEl_ = createEl('div', {
        className: 'emp-live-display',
        innerHTML: "<span class=\"vjs-control-text\">" + this.localize('Stream Type') + "</span>" + this.localize('LIVE')
      }, {
        'aria-live': 'off'
      });
      el.appendChild(this.contentEl_);
      return el;
    }
    /**
     * Get Entitlement
     *
     * @return {Entitlement} Entitlement
     * @private
     */
    ;

    /**
     * updateShowing
     *
     * @private
     */
    _proto.updateShowing = function updateShowing() {
      if (this.player().isLive() || this.entitlement && this.entitlement.isStaticCachupAsLive) {
        this.show();
      } else {
        this.hide();
      }
    }
    /**
     * timeUpdate
     *
     * @private
     */
    ;

    _proto.timeUpdate = function timeUpdate() {
      if (this.player().isLive() || this.entitlement && this.entitlement.isStaticCachupAsLive) {
        // margin for what is considered the live edge
        var edgeMargin = 20;
        var timeBehindLive = this.player().timeBehindLive();

        if (this.player().isLive() && timeBehindLive < edgeMargin) {
          this.addClass('emp-live-edge');
        } else {
          this.removeClass('emp-live-edge');
        }
      }
    }
    /**
     * gotoLive
     *
     * @private
     */
    ;

    _proto.handleClick = function handleClick() {
      this.player().gotoLive();
    };

    _createClass(EmpLiveDisplay, [{
      key: "entitlement",
      get: function get() {
        return extplayer.getEntitlement(this.player());
      }
    }]);

    return EmpLiveDisplay;
  }(Button);

  Component$2.registerComponent('EmpLiveDisplay', EmpLiveDisplay);

  /**
   * @file format-time.js
   * @module format-time
   */

  /**
   * Format seconds as a time string, H:MM:SS or M:SS. Supplying a guide (in
   * seconds) will force a number of leading zeros to cover the length of the
   * guide.
   *
   * @private
   * @param  {number} seconds
   *         Number of seconds to be turned into a string
   *
   * @param  {number} guide
   *         Number (in seconds) to model the string after
   *
   * @return {string}
   *         Time formatted as H:MM:SS or M:SS
   */
  function formatTime(seconds, guide) {
    if (guide === void 0) {
      guide = seconds;
    }

    seconds = seconds < 0 ? 0 : seconds;
    var s = Math.floor(seconds % 60);
    var m = Math.floor(seconds / 60 % 60);
    var h = Math.floor(seconds / 3600);
    var gm = Math.floor(guide / 60 % 60);
    var gh = Math.floor(guide / 3600); // handle invalid times

    if (isNaN(seconds) || seconds === Infinity) {
      // '-' is false for all relational operators (e.g. <, >=) so this setting
      // will add the minimum number of fields specified by the guide
      h = m = s = '-';
    } // Check if we need to show hours


    h = h > 0 || gh > 0 ? h + ':' : ''; // If hours are showing, we may need to add a leading zero.
    // Always show at least one digit of minutes.

    m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':'; // Check if leading zero is need for seconds

    s = s < 10 ? '0' + s : s;
    return h + m + s;
  }

  var Component$3 = videojs.getComponent('Component');
  /**
   * EmpMarker gui element for ad markers
   *
   * @param {Player|Object} player
   * @param {Object=} options
   * @extends MenuButton
   * @class EmpMarker
   */

  var EmpMarker =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(EmpMarker, _Component);

    /**
     * Create a EmpMarker button
     *
     * @param {Player|Object} player
     * @param {Object=} options
     */
    function EmpMarker(player, options) {
      var _this;

      _this = _Component.call(this, player, options) || this;

      _this.on(_this.player(), empPlayerEvents.PLAYING, function () {
        return _this.updateVisibility();
      });

      _this.on(_this.player(), empPlayerEvents.DURATION_CHANGE, function () {
        return _this.updateVisibility();
      });

      _this.on(_this.player(), empPlayerEvents.SEEKED, function () {
        return _this.updateVisibility();
      });

      _this.addClass('vjs-hidden');

      return _this;
    }
    /**
    * Create the component's DOM element
    *
    * @return {Element} The element that was created.
    * @method createEl
    */


    var _proto = EmpMarker.prototype;

    _proto.createEl = function createEl() {
      var el = _Component.prototype.createEl.call(this, 'div', {
        className: 'emp-ad-marker'
      });

      return el;
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */
    ;

    _proto.buildCSSClass = function buildCSSClass() {
      return "emp-ad-marker " + _Component.prototype.buildCSSClass.call(this);
    }
    /**
     * updateVisibility
     *
     * @private
     */
    ;

    _proto.updateVisibility = function updateVisibility() {
      if (this.player_.duration()) {
        var element = this.options_.element;

        if (element.offset + element.duration < this.player_.currentTime()) {
          this.addClass('emp-ad-past');
        } else {
          this.removeClass('emp-ad-past');
        }

        var percentStartTime = element.offset / this.player_.duration();

        if (percentStartTime >= 1) {
          percentStartTime = 1;
        }

        var percentDuration = element.duration / this.player_.duration();

        if (percentDuration >= 1) {
          percentDuration = 1;
        }

        this.el_.style.left = (percentStartTime * 100).toFixed(2) + '%';
        this.el_.style.width = (percentDuration * 100).toFixed(2) + '%';
        this.show();
      }
    }
    /**
     * dispose
     */
    ;

    _proto.dispose = function dispose() {
      _Component.prototype.dispose.call(this);
    };

    return EmpMarker;
  }(Component$3);

  Component$3.registerComponent('EmpMarker', EmpMarker);

  var Component$4 = videojs.getComponent('Component');
  var MouseTimeDisplay = videojs.getComponent('MouseTimeDisplay');
  /**
   * The Mouse Time Display component shows the time you will seek to
   * when hovering over the progress bar
   *
   * @extends MouseTimeDisplay
   */

  var EmpMouseTimeDisplay =
  /*#__PURE__*/
  function (_MouseTimeDisplay) {
    _inheritsLoose(EmpMouseTimeDisplay, _MouseTimeDisplay);

    /**
     * Create a time display component
     *
     * @param {Player|Object} player
     * @param {Object=} options
     */
    function EmpMouseTimeDisplay(player, options) {
      return _MouseTimeDisplay.call(this, player, options) || this;
    }
    /**
     * Enqueues updates to its own DOM as well as the DOM of its
     * {@link TimeTooltip} child.
     *
     * @param {Object} seekBarRect
     *        The `ClientRect` for the {@link SeekBar} element.
     *
     * @param {number} seekBarPoint
     *        A number from 0 to 1, representing a horizontal reference point
     *        from the left edge of the {@link SeekBar}
     */


    var _proto = EmpMouseTimeDisplay.prototype;

    _proto.update = function update(seekBarRect, seekBarPoint) {
      var _this = this;

      // If there is an existing rAF ID, cancel it so we don't over-queue.
      if (this.rafId_) {
        this.cancelAnimationFrame(this.rafId_);
      }

      this.rafId_ = this.requestAnimationFrame(function () {
        var duration = _this.player_.duration();

        var content = formatTime(seekBarPoint * duration, duration);
        _this.el_.style.left = seekBarRect.width * seekBarPoint + "px";

        _this.getChild('timeTooltip').update(seekBarRect, seekBarPoint, content);
      });
    };

    return EmpMouseTimeDisplay;
  }(MouseTimeDisplay);

  Component$4.registerComponent('MouseTimeDisplay', EmpMouseTimeDisplay);

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
  var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
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
  var IS_SAFARI = /Safari/i.test(USER_AGENT) && !IS_CHROME && !IS_ANDROID && !IS_EDGE;
  var IS_IE_OR_EDGE = IS_EDGE || IE_VERSION !== null;
  var TOUCH_ENABLED = isReal() && ('ontouchstart' in window_1 || window_1.DocumentTouch && window_1.document instanceof window_1.DocumentTouch);
  var BACKGROUND_SIZE_SUPPORTED = isReal() && 'backgroundSize' in window_1.document.createElement('video').style;
  /**
   * detectClient
   *
   * @return {Object} Client name and version
   */

  function detectClient() {
    var ua = window_1.navigator.userAgent;
    var tem;
    var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([0-9.]+)/i) || [];

    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+([0-9.]+)/g.exec(ua) || [];
      return {
        name: 'Explorer',
        version: tem[1] || ''
      };
    }

    if (M[1] === 'Chrome') {
      tem = ua.match(/\b(OPR|Edge)\/([0-9.]+)/);

      if (tem !== null) {
        var app = tem.slice(1).toString().split(',');
        return {
          name: app[0].replace('OPR', 'Opera'),
          version: app[1]
        };
      }
    }

    M = M[2] ? [M[1], M[2]] : [window_1.navigator.appName, window_1.navigator.appVersion, '-?'];

    if ((tem = ua.match(/version\/([0-9.]+)/i)) !== null) {
      M.splice(1, 1, tem[1]);
    }

    return {
      name: M[0],
      version: M[1]
    };
  }

  var Component$5 = videojs.getComponent('Component');
  var Slider = videojs.getComponent('Slider'); // The number of seconds the `step*` functions move the timeline.

  var STEP_SECONDS = 5; // The interval at which the bar should update as it progresses.

  var UPDATE_REFRESH_INTERVAL = !IS_CHROMECAST && !window_1.EMP_DEBUG_CHROMECAST ? 30 : 1000;
  /**
   * Seek bar and container for the progress bars. Uses {@link PlayProgressBar}
   * as its `bar`.
   *
   * @extends Slider
   */

  var SeekBar =
  /*#__PURE__*/
  function (_Slider) {
    _inheritsLoose(SeekBar, _Slider);

    /**
     * Creates an instance of this class.
     *
     * @param {Player} player
     *        The `Player` that this class should be attached to.
     *
     * @param {Object} [options]
     *        The key/value store of player options.
     */
    function SeekBar(player, options) {
      var _this;

      _this = _Slider.call(this, player, options) || this;
      _this.markers = [];
      _this.update = throttle(bind(_assertThisInitialized(_this), _this.update), UPDATE_REFRESH_INTERVAL);

      _this.on(player, empPlayerEvents.TIME_UPDATE, _this.update);

      _this.on(player, empPlayerEvents.ENDED, _this.handleEnded);

      _this.on(player, empPlayerEvents.AD_TIMELINE_CHANGED, _this.updateMarkers); // when playing, let's ensure we smoothly update the play progress bar
      // via an interval


      _this.updateInterval = null;

      _this.on(player, ['playing'], function () {
        if (_this.updateInterval) {
          _this.clearInterval(_this.updateInterval);

          _this.updateInterval = null;
        }

        if (!IS_CHROMECAST && !window_1.EMP_DEBUG_CHROMECAST) {
          _this.updateInterval = _this.setInterval(function () {
            _this.requestAnimationFrame(function () {
              _this.update();
            });
          }, UPDATE_REFRESH_INTERVAL);
        }
      });

      _this.on(player, ['ended', 'pause', 'waiting'], function () {
        if (_this.updateInterval) {
          _this.clearInterval(_this.updateInterval);

          _this.updateInterval = null;
        }
      });

      _this.on(player, ['timeupdate', 'ended'], _this.update);

      return _this;
    }
    /**
     * Update the marker displays
     *
     * @param {EventTarget~Event} [event]
     * @param {Object} data
     */


    var _proto = SeekBar.prototype;

    _proto.updateMarkers = function updateMarkers(event, data) {
      for (var _iterator = this.markers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var _marker = _ref;
        this.removeChild(_marker);
      }

      if (data && data.timeline) {
        for (var _iterator2 = data.timeline.getAllElements(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var element = _ref2;

          if (element.type === 'advert') {
            var marker = new EmpMarker(this.player_, {
              element: element
            });
            this.markers.push(marker);
            this.addChild(marker);
            marker.updateVisibility();
          }
        }
      }
    }
    /**
     * Create the `Component`'s DOM element
     *
     * @return {Element}
     *         The element that was created.
     */
    ;

    _proto.createEl = function createEl$$1() {
      return _Slider.prototype.createEl.call(this, 'div', {
        className: 'vjs-progress-holder'
      }, {
        'aria-label': this.localize('Progress Bar')
      });
    }
    /**
     * This function updates the play progress bar and accessiblity
     * attributes to whatever is passed in.
     *
     * @param {number} currentTime
     *        The currentTime value that should be used for accessiblity
     *
     * @param {number} percent
     *        The percentage as a decimal that the bar should be filled from 0-1.
     *
     * @private
     */
    ;

    _proto.update_ = function update_(currentTime, percent) {
      var duration = this.player_.duration(); // machine readable value of progress bar (percentage complete)

      this.el_.setAttribute('aria-valuenow', (percent * 100).toFixed(2)); // human readable value of progress bar (time complete)

      this.el_.setAttribute('aria-valuetext', this.localize('progress bar timing: currentTime={1} duration={2}', [formatTime(currentTime, duration), formatTime(duration, duration)], '{1} of {2}')); // Update the `PlayProgressBar`.

      if (!IS_CHROMECAST && !window_1.EMP_DEBUG_CHROMECAST) {
        this.bar.update(getBoundingClientRect(this.el_), percent);
      }
    }
    /**
     * Update the seek bar's UI.
     *
     * @param {EventTarget~Event} [event]
     *        The `timeupdate` or `ended` event that caused this to run.
     * @param {Object} data
     *
     * @listens Player#timeupdate
     *
     * @return {number}
     *          The current percent at a number from 0-1
     */
    ;

    _proto.update = function update(event, data) {
      var percent = _Slider.prototype.update.call(this);

      this.update_(this.getCurrentTime_(), percent);
      return percent;
    }
    /**
     * Get the value of current time but allows for smooth scrubbing,
     * when player can't keep up.
     *
     * @return {number}
     *         The current time value to display
     *
     * @private
     */
    ;

    _proto.getCurrentTime_ = function getCurrentTime_() {
      if (this.player_.scrubbing()) {
        if (this.player_.getCache().currentTime >= 0) {
          return this.player_.getCache().currentTime;
        }

        return this.player_.getCache().currentTime;
      }

      this.player_.getCache().currentTime = this.player_.currentTime();
      return this.player_.currentTime();
    }
    /**
     * We want the seek bar to be full on ended
     * no matter what the actual internal values are. so we force it.
     *
     * @param {EventTarget~Event} [event]
     *        The `timeupdate` or `ended` event that caused this to run.
     *
     * @listens Player#ended
     */
    ;

    _proto.handleEnded = function handleEnded(event) {
      this.update_(this.player_.duration(), 1);

      for (var _iterator3 = this.markers, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var marker = _ref3;
        this.removeChild(marker);
      }
    }
    /**
     * Get the percentage of media played so far.
     *
     * @return {number}
     *         The percentage of media played so far (0 to 1).
     */
    ;

    _proto.getPercent = function getPercent() {
      var percent = this.getCurrentTime_() / this.player_.duration();
      return percent >= 1 ? 1 : percent;
    }
    /**
     * Handle mouse down on seek bar
     *
     * @param {EventTarget~Event} event
     *        The `mousedown` event that caused this to run.
     *
     * @listens mousedown
     */
    ;

    _proto.handleMouseDown = function handleMouseDown(event) {
      this.player_.scrubbing(true);

      _Slider.prototype.handleMouseDown.call(this, event);
    }
    /**
     * Handle mouse move on seek bar
     *
     * @param {EventTarget~Event} event
     *        The `mousemove` event that caused this to run.
     *
     * @listens mousemove
     */
    ;

    _proto.handleMouseMove = function handleMouseMove(event) {
      var newTime = this.calculateDistance(event) * this.player_.duration(); // Don't let video end while scrubbing.

      if (newTime === this.player_.duration()) {
        newTime = newTime - 0.1;
      }

      this.setCurrentTime(newTime);
    }
    /**
     * setCurrentTime
     *
     * @param {number} newTime
     */
    ;

    _proto.setCurrentTime = function setCurrentTime(newTime) {
      var src = this.player_.src() ? this.player_.src() : '';
      var isDownload = src.indexOf('offline:') === 0;
      var start = this.player_.buffered().start(0);
      var end = this.player_.buffered().end(0);

      if (isDownload || newTime >= start && newTime <= end) {
        this.player_.currentTime(newTime);
        this.player_.getCache().currentTime = newTime;
      } else if (this.player_.scrubbing()) {
        this.player_.getCache().currentTime = newTime;
        this.player_.getCache().currentTime = newTime;
      } else {
        this.player_.currentTime(newTime);
        this.player_.getCache().currentTime = newTime;
      }
    }
    /**
    * Throttle Set CurrentTime
    *
    *   @param {number} newTime
    *        The new currentTime value
    */
    ;

    _proto.throttleSetCurrentTime = function throttleSetCurrentTime(newTime) {
      if (this.seekTimeoutId_ !== null) {
        window_1.clearTimeout(this.seekTimeoutId_);
      }

      var start = this.player_.buffered().start(0);
      var end = this.player_.buffered().end(0);

      if (newTime >= start && newTime <= end) {
        this.player_.scrubbing(false);
        this.player_.currentTime(newTime);
        this.player_.getCache().currentTime = newTime;
      } else {
        this.player_.scrubbing(true);
        this.player_.getCache().currentTime = newTime;
        this.seekTimeoutId_ = window_1.setTimeout(this.onSeekInputTimeout_.bind(this, newTime), 1000);
      }
    }
    /**
    * on Seek Input Timeout
    *
    * @param {number} newTime
    */
    ;

    _proto.onSeekInputTimeout_ = function onSeekInputTimeout_(newTime) {
      this.seekTimeoutId_ = null; // Set new time (tell player to seek to new time)

      this.player_.scrubbing(false);
      this.player_.currentTime(newTime);
      this.player_.getCache().currentTime = newTime;
    }
    /**
     * enable
     */
    ;

    _proto.enable = function enable() {
      _Slider.prototype.enable.call(this);

      var mouseTimeDisplay = this.getChild('mouseTimeDisplay');

      if (!mouseTimeDisplay) {
        return;
      }

      mouseTimeDisplay.show();
    }
    /**
     * disable
     */
    ;

    _proto.disable = function disable() {
      _Slider.prototype.disable.call(this);

      var mouseTimeDisplay = this.getChild('mouseTimeDisplay');

      if (!mouseTimeDisplay) {
        return;
      }

      mouseTimeDisplay.hide();
    }
    /**
     * Handle mouse up on seek bar
     *
     * @param {EventTarget~Event} event
     *        The `mouseup` event that caused this to run.
     *
     * @listens mouseup
     */
    ;

    _proto.handleMouseUp = function handleMouseUp(event) {
      _Slider.prototype.handleMouseUp.call(this, event);

      this.player_.scrubbing(false);
      this.setCurrentTime(this.player_.getCache().currentTime);
    }
    /**
     * Move more quickly fast forward for keyboard-only users
     */
    ;

    _proto.stepForward = function stepForward() {
      this.throttleSetCurrentTime(this.player_.getCache().currentTime + STEP_SECONDS);
    }
    /**
     * Move more quickly rewind for keyboard-only users
     */
    ;

    _proto.stepBack = function stepBack() {
      this.throttleSetCurrentTime(this.player_.getCache().currentTime - STEP_SECONDS);
    }
    /**
     * Toggles the playback state of the player
     * This gets called when enter or space is used on the seekbar
     *
     * @param {EventTarget~Event} event
     *        The `keydown` event that caused this function to be called
     *
     */
    ;

    _proto.handleAction = function handleAction(event) {
      if (this.player_.paused()) {
        this.player_.play();
      } else {
        this.player_.pause();
      }
    }
    /**
     * Called when this SeekBar has focus and a key gets pressed down. By
     * default it will call `this.handleAction` when the key is space or enter.
     *
     * @param {EventTarget~Event} event
     *        The `keydown` event that caused this function to be called.
     *
     * @listens keydown
     */
    ;

    _proto.handleKeyPress = function handleKeyPress(event) {
      // Support Space (32) or Enter (13) key operation to fire a click event
      if (event.which === 32 || event.which === 13) {
        event.preventDefault();
        this.handleAction(event);
      } else if (_Slider.prototype.handleKeyPress) {
        // Pass keypress handling up for unsupported keys
        _Slider.prototype.handleKeyPress.call(this, event);
      }
    };

    return SeekBar;
  }(Slider);
  /**
   * Default options for the `SeekBar`
   *
   * @type {Object}
   * @private
   */


  SeekBar.prototype.options_ = {
    children: ['loadProgressBar', 'playProgressBar'],
    barName: 'playProgressBar'
  }; // MouseTimeDisplay tooltips should not be added to a player on mobile devices or IE8

  if ((!IE_VERSION || IE_VERSION > 8) && !IS_IOS && !IS_ANDROID) {
    SeekBar.prototype.options_.children.splice(1, 0, 'mouseTimeDisplay');
  }
  /**
   * Call the update event for this Slider when this event happens on the player.
   *
   * @type {string}
   */


  SeekBar.prototype.playerEvent = 'timeupdate';
  Component$5.registerComponent('SeekBar', SeekBar);

  /**
   * Returns whether an object is `Promise`-like (i.e. has a `then` method).
   *
   * @param  {Object}  value
   *         An object that may or may not be `Promise`-like.
   *
   * @return {boolean}
   *         Whether or not the object is `Promise`-like.
   */
  function isPromise(value) {
    return value !== undefined && typeof value.then === 'function';
  }
  /**
   * Silence a Promise-like object.
   *
   * This is useful for avoiding non-harmful, but potentially confusing "uncaught
   * play promise" rejection error messages.
   *
   * @param  {Object} value
   *         An object that may or may not be `Promise`-like.
   */

  function silencePromise(value) {
    if (isPromise(value)) {
      value.then(null, function (e) {});
    }
  }

  var Button$1 = videojs.getComponent('Button');
  var Component$6 = videojs.getComponent('Component');
  /**
   * Displays a button to jump back to the beginning of the current asset / program
   *
   * @extends Button
   */

  var EmpRestartButton =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(EmpRestartButton, _Button);

    /**
     * Create a restart button
     *
     * @param {Player|Object} player
     * @param {Object=} options
     */
    function EmpRestartButton(player, options) {
      var _this;

      _this = _Button.call(this, player, options) || this;
      _this.shouldRestart_ = true;

      _this.updateShowing();

      _this.on(_this.player(), empPlayerEvents.LOADED_METADATA, _this.updateShowing);

      _this.on(_this.player(), empPlayerEvents.PLAYING, function () {
        _this.shouldRestart_ = false;

        _this.updateShowing();
      });

      _this.on(_this.player(), empPlayerEvents.ERROR, function () {
        _this.shouldRestart_ = true;
      });

      return _this;
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */


    var _proto = EmpRestartButton.prototype;

    _proto.buildCSSClass = function buildCSSClass() {
      return "emp-restart-control " + _Button.prototype.buildCSSClass.call(this);
    }
    /**
     * updateShowing
     */
    ;

    _proto.updateShowing = function updateShowing() {
      if (this.player().canRestart()) {
        this.show();
      } else {
        this.hide();
      }
    }
    /**
     * Jump to beginning
     */
    ;

    _proto.handleClick = function handleClick() {
      if (this.shouldRestart_ === true) {
        this.player_.restart();
        return;
      }

      this.player_.scrubbing(true);
      var videoWasPlaying = !this.player_.paused();
      this.player_.pause();
      this.player_.currentTime(0);
      this.player_.scrubbing(false);

      if (videoWasPlaying) {
        silencePromise(this.player_.play());
      }
    };

    return EmpRestartButton;
  }(Button$1);

  EmpRestartButton.prototype.controlText_ = 'Restart';
  Component$6.registerComponent('EmpRestartButton', EmpRestartButton);

  var Button$2 = videojs.getComponent('Button');
  var Component$7 = videojs.getComponent('Component');
  /**
   * Displays a button to jump forward a few seconds
   *
   * @extends Button
   */

  var EmpForwardButton =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(EmpForwardButton, _Button);

    /**
     * Create a fast-forward button
     *
     * @param {Player} player
     * @param {Object} [options] - Object of option names and values
     * @param {integer} [options.seconds=30] - The number of seconds to jump forward.
     */
    function EmpForwardButton(player, options) {
      var _this;

      options = assign({
        seconds: 30
      }, options);
      _this = _Button.call(this, player, options) || this;

      _this.controlText("Forward " + options.seconds + "s");

      player.on(empPlayerEvents.TIMESHIFT_CHANGE, function () {
        return _this.onTimeshift();
      });
      player.on(empPlayerEvents.PROGRAM_CHANGED, function (event, data) {
        return _this.updateEnabled(data && data.program);
      });
      player.on(empPlayerEvents.DURATION_CHANGE, function () {
        return _this.updateEnabled();
      });

      _this.updateEnabled();

      return _this;
    }
    /**
     * Get Entitlement
     *
     * @return {Entitlement} Entitlement
     * @private
     */


    var _proto = EmpForwardButton.prototype;

    /**
     * updateEnabled
     *
     * @param {Object} program The program
     */
    _proto.updateEnabled = function updateEnabled(program) {
      if (this.entitlement && !this.entitlement.ffEnabled || !this.player().timeShiftEnabled()) {
        this.disable();
        this.controlText('Forward restricted');
      } else {
        this.enable();
        this.show();
        this.controlText("Forward " + this.options_.seconds + "s");
      }
    }
    /**
     * Handle onTimeshift event
     */
    ;

    _proto.onTimeshift = function onTimeshift() {
      if (!this.player()) {
        return;
      }

      if (!this.player().timeShiftEnabled()) {
        this.hide();
      } else {
        this.show();
      }
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */
    ;

    _proto.buildCSSClass = function buildCSSClass() {
      return "emp-forward-control " + _Button.prototype.buildCSSClass.call(this);
    }
    /**
     * handleClick, Jump to beginning
     */
    ;

    _proto.handleClick = function handleClick() {
      if (this.player().ended()) {
        return;
      }

      this.player().scrubbing(true);
      var newTime = this.player().currentTime() + this.options_.seconds;
      this.player().currentTime(newTime);
      this.player().scrubbing(false);
    };

    _createClass(EmpForwardButton, [{
      key: "entitlement",
      get: function get() {
        return extplayer.getEntitlement(this.player());
      }
    }]);

    return EmpForwardButton;
  }(Button$2);

  EmpForwardButton.prototype.controlText_ = 'Forward';
  Component$7.registerComponent('EmpForwardButton', EmpForwardButton);

  var Button$3 = videojs.getComponent('Button');
  var Component$8 = videojs.getComponent('Component');
  /**
   * Displays a button to jump back a few seconds
   *
   * @extends Button
   */

  var EmpRewindButton =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(EmpRewindButton, _Button);

    /**
     * Create a rewind button
     *
     * @param {Player|Object} player
     * @param {Object[]} [options] - Object of option names and values
     * @param {integer} [options[].seconds=30] - The number of seconds to jump back.
     */
    function EmpRewindButton(player, options) {
      var _this;

      options = assign({
        seconds: 30
      }, options);
      _this = _Button.call(this, player, options) || this;

      _this.controlText("Rewind " + options.seconds + "s");

      player.on(empPlayerEvents.TIMESHIFT_CHANGE, function () {
        return _this.onTimeshift();
      });
      player.on(empPlayerEvents.PROGRAM_CHANGED, function (event, data) {
        return _this.updateEnabled(data && data.program);
      });
      player.on(empPlayerEvents.DURATION_CHANGE, function () {
        return _this.updateEnabled();
      });

      _this.updateEnabled();

      return _this;
    }
    /**
     * Get Entitlement
     *
     * @return {Entitlement} Entitlement
     * @private
     */


    var _proto = EmpRewindButton.prototype;

    /**
     * updateEnabled
     *
     * @param {Object} program
     */
    _proto.updateEnabled = function updateEnabled(program) {
      if (this.entitlement && !this.entitlement.rwEnabled || !this.player().timeShiftEnabled()) {
        this.disable();
        this.controlText('Rewind restricted');
      } else {
        this.enable();
        this.show();
        this.controlText("Rewind " + this.options_.seconds + "s");
      }
    }
    /**
     * Handle onTimeshift event
     */
    ;

    _proto.onTimeshift = function onTimeshift() {
      if (!this.player()) {
        return;
      }

      if (!this.player().timeShiftEnabled()) {
        this.hide();
      } else {
        this.show();
      }
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */
    ;

    _proto.buildCSSClass = function buildCSSClass() {
      return "emp-rewind-control " + _Button.prototype.buildCSSClass.call(this);
    }
    /**
     * Jump backwards
     */
    ;

    _proto.handleClick = function handleClick() {
      if (this.player().ended()) {
        return;
      }

      this.player().scrubbing(true);
      var newTime = this.player().currentTime() - this.options_.seconds;
      this.player().currentTime(newTime);
      this.player().scrubbing(false);
    };

    _createClass(EmpRewindButton, [{
      key: "entitlement",
      get: function get() {
        return extplayer.getEntitlement(this.player());
      }
    }]);

    return EmpRewindButton;
  }(Button$3);

  EmpRewindButton.prototype.controlText_ = 'Rewind';
  Component$8.registerComponent('EmpRewindButton', EmpRewindButton);

  var Button$4 = videojs.getComponent('Button');
  var Component$9 = videojs.getComponent('Component');
  /**
   * Displays a button to jump back to the beginning of the current asset / program and request a new entitlement
   *
   * @extends Button
   */

  var EmpReloadButton =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(EmpReloadButton, _Button);

    /**
     * Create a rewind button
     *
     * @param {Player|Object} player
     * @param {Object=} options
     */
    function EmpReloadButton(player, options) {
      return _Button.call(this, player, options) || this;
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */


    var _proto = EmpReloadButton.prototype;

    _proto.buildCSSClass = function buildCSSClass() {
      return "emp-reload-control " + _Button.prototype.buildCSSClass.call(this);
    }
    /**
     * Restart playback
     */
    ;

    _proto.handleClick = function handleClick() {
      this.player_.restart();
    };

    return EmpReloadButton;
  }(Button$4);

  EmpReloadButton.prototype.controlText_ = 'Reload';
  Component$9.registerComponent('EmpReloadButton', EmpReloadButton);

  var Component$a = videojs.getComponent('Component');
  var UPDATE_REFRESH_INTERVAL$1 = !IS_CHROMECAST && !window_1.EMP_DEBUG_CHROMECAST ? 30 : 1000;
  /**
   * Displays the time left or the current time in the video
   *
   * @extends Component
   */

  var EmpTimeDisplay =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(EmpTimeDisplay, _Component);

    /**
     * Create a fast-forward button
     *
     * @param {Player} player
     * @param {Object} [options] - Object of option names and values
     * @param {string} [options.mode=remainingTime] - _remainingTime_ displays a countdown timer and _currentTime_ the current time of a live stream
     */
    function EmpTimeDisplay(player, options) {
      var _this;

      _this = _Component.call(this, player, options) || this;
      _this.mode_ = options.mode || 'remainingTime';
      _this.throttledUpdateContent = throttle(bind(_assertThisInitialized(_this), _this.updateContent), UPDATE_REFRESH_INTERVAL$1);

      _this.on(player, empPlayerEvents.TIME_UPDATE, _this.throttledUpdateContent);

      _this.on(player, empPlayerEvents.DURATION_CHANGE, _this.updateContent);

      player.on(empPlayerEvents.ENDED, function () {
        _this.hide();
      });
      player.on(empPlayerEvents.PLAYING, function () {
        _this.show();
      });
      return _this;
    }
    /**
     * Create the component's DOM element
     *
     * @return {Element} The element that was created.
     * @method createEl
     */


    var _proto = EmpTimeDisplay.prototype;

    _proto.createEl = function createEl$$1() {
      var classNameStr = 'emp-time vjs-time-control vjs-remaining-time vjs-control';

      if (this.options_ && this.options_.mode === 'remainingTime') {
        classNameStr += ' emp-remaining-time';
      } else {
        classNameStr += ' emp-currentTime-time';
      }

      var el = _Component.prototype.createEl.call(this, 'div', {
        className: classNameStr
      });

      this.contentEl_ = createEl('div', {
        className: 'emp-time-display',
        // label the remaining time for screen reader users
        innerHTML: "<span class=\"vjs-control-text\">" + this.localize('Remaining Time') + "</span>0:00"
      }, {
        // tell screen readers not to automatically read the time as it changes
        'aria-live': 'off'
      });
      el.appendChild(this.contentEl_);
      return el;
    }
    /**
     * Update time display
     *
     * @method updateContent
     */
    ;

    _proto.updateContent = function updateContent() {
      if (this.mode_ === 'currentTime') {
        var time = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
        var localizedText = this.localize('Current Time');
        var formattedTime = formatTime(time, this.player_.duration());

        if (formattedTime !== this.formattedTime_) {
          this.formattedTime_ = formattedTime;
          this.contentEl_.innerHTML = "<span class=\"vjs-control-text\">" + localizedText + "</span>" + formattedTime;
        }
      } else {
        // remainingTime and default mode
        var duration = this.player_.duration();

        if (duration) {
          var _localizedText = this.localize('Remaining Time');

          var _formattedTime;

          if (duration > 0xFFFFFFFF) {
            _formattedTime = '';

            if (_formattedTime !== this.formattedTime_) {
              this.formattedTime_ = _formattedTime;
              this.contentEl_.innerHTML = "<span class=\"vjs-control-text\">" + _localizedText + "</span>" + _formattedTime;
            }
          } else {
            var remainingTime = this.player_.remainingTime();

            if (remainingTime < 0) {
              remainingTime = 0;
            }

            _formattedTime = formatTime(remainingTime);

            if (_formattedTime !== this.formattedTime_) {
              this.formattedTime_ = _formattedTime;
              this.contentEl_.innerHTML = "<span class=\"vjs-control-text\">" + _localizedText + "</span>" + _formattedTime;
            }
          }
        }
      }
    };

    return EmpTimeDisplay;
  }(Component$a);

  Component$a.registerComponent('EmpTimeDisplay', EmpTimeDisplay);
  Component$a.registerComponent('EmpTimeDisplay2', EmpTimeDisplay);

  var Button$5 = videojs.getComponent('Button');
  var Component$b = videojs.getComponent('Component');
  /**
   * The button component for stopping playback
   *
   * @extends EmpStopButton
   */

  var EmpStopButton =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(EmpStopButton, _Button);

    /**
     * Create a button to stop playback
     *
     * @param {Player|Object} player - Player object
     * @param {Object=} options - Object of option names and values
     * @param {Function=} ready - Ready callback function
     */
    function EmpStopButton(player, options, ready) {
      var _this;

      _this = _Button.call(this, player, options, ready) || this;

      _this.el_.setAttribute('aria-label', 'Stop Playback');

      player.on(empPlayerEvents.TIMESHIFT_CHANGE, function () {
        return _this.onTimeshift();
      });
      player.on(empPlayerEvents.PLAYING, function () {
        return _this.onTimeshift();
      });
      player.on(empPlayerEvents.ENDED, function () {
        return _this.hide();
      });
      return _this;
    }
    /**
     * Handle onTimeshift event
     */


    var _proto = EmpStopButton.prototype;

    _proto.onTimeshift = function onTimeshift() {
      if (!this.player()) {
        return;
      }

      if (this.player().timeShiftEnabled()) {
        this.hide();
      } else {
        this.show();
      }
    }
    /**
     * Handle click on audio track
     *
     * @param {EventTarget~Event} [event]
     *        The `timeupdate` or `ended` event that caused this to run.
     */
    ;

    _proto.handleClick = function handleClick(event) {
      if (this.player()) {
        this.player().stop();
      }
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */
    ;

    _proto.buildCSSClass = function buildCSSClass() {
      return 'emp-stop-control vjs-icon-square ' + _Button.prototype.buildCSSClass.call(this);
    };

    return EmpStopButton;
  }(Button$5);

  EmpStopButton.prototype.kind_ = 'stop';
  EmpStopButton.prototype.controlText_ = 'stop';
  Component$b.registerComponent('EmpStopButton', EmpStopButton);

  var PlayToggle = videojs.getComponent('PlayToggle');
  var Component$c = videojs.getComponent('Component');
  /**
   * The button component for the play toggle
   *
   * @extends EmpPlayToggle
   */

  var EmpPlayToggle =
  /*#__PURE__*/
  function (_PlayToggle) {
    _inheritsLoose(EmpPlayToggle, _PlayToggle);

    /**
     * Create a button to stop playback
     *
     * @param {Player|Object} player - Player object
     * @param {Object=} options - Object of option names and values
     * @param {Function=} ready - Ready callback function
     */
    function EmpPlayToggle(player, options, ready) {
      var _this;

      _this = _PlayToggle.call(this, player, options, ready) || this;

      _this.el_.setAttribute('aria-label', 'Play Toggle');

      player.on(empPlayerEvents.TIMESHIFT_CHANGE, function () {
        return _this.onTimeshift();
      });
      player.on(empPlayerEvents.PLAYING, function () {
        return _this.onTimeshift();
      });
      return _this;
    }
    /**
     * Handle onTimeshift event
     */


    var _proto = EmpPlayToggle.prototype;

    _proto.onTimeshift = function onTimeshift() {
      if (!this.player()) {
        return;
      }

      if (this.player().timeShiftEnabled()) {
        this.show();
      } else {
        this.hide();
      }
    }
    /**
     * Handle click on audio track
     *
     * @param {EventTarget~Event} [event]
     */
    ;

    _proto.handleClick = function handleClick(event) {
      _PlayToggle.prototype.handleClick.call(this, event);
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */
    ;

    _proto.buildCSSClass = function buildCSSClass() {
      return "" + _PlayToggle.prototype.buildCSSClass.call(this);
    };

    return EmpPlayToggle;
  }(PlayToggle);

  EmpPlayToggle.prototype.kind_ = 'playToggle';
  EmpPlayToggle.prototype.controlText_ = 'playToggle';
  Component$c.registerComponent('EmpPlayToggle', EmpPlayToggle);

  var Button$6 = videojs.getComponent('Button');
  /**
   * The class for AirplayToggle
   *
   * @class AirplayToggle
   * @extends Button
  */

  var AirplayToggle =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(AirplayToggle, _Button);

    /**
     * Create a AirplayToggle button
     *
     * @param {Player|Object} player
     * @param {Object=} options
     */
    function AirplayToggle(player, options) {
      var _this;

      _this = _Button.call(this, player, options) || this;

      _this.addClass('vjs-hidden');

      player.ready(function () {
        _this.initAirPlay();
      });
      return _this;
    }
    /**
     * Get Entitlement
     *
     * @return {Entitlement} Entitlement
     * @private
     */


    var _proto = AirplayToggle.prototype;

    /**
     * initAirPlay
     *
     * @private
     */
    _proto.initAirPlay = function initAirPlay() {
      var player = this.player();

      if (window_1.WebKitPlaybackTargetAvailabilityEvent) {
        var videoEl = player.el().getElementsByTagName('video')[0];
        videoEl.addEventListener('webkitplaybacktargetavailabilitychanged', function (event) {
          switch (event.availability) {
            case 'available':
              log('Airplay available');
              player.on('loadeddata', function () {
                if (player.controlBar.childNameIndex_.hasOwnProperty('AirplayToggle')) {
                  if (this.entitlement && this.entitlement.airplayBlocked) {
                    player.controlBar.airplayToggle.hide();
                  } else {
                    player.controlBar.airplayToggle.show();
                  }
                }
              });
              break;

            case 'not-available':
              log('Airplay not-available');
              break;
          }
        });
      }
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */
    ;

    _proto.buildCSSClass = function buildCSSClass() {
      return "vjs-airplay-control " + _Button.prototype.buildCSSClass.call(this);
    }
    /**
     * handleClick
     */
    ;

    _proto.handleClick = function handleClick() {
      if (!this.entitlement || !this.entitlement.airplayBlocked) {
        this.player().el().getElementsByTagName('video')[0].webkitShowPlaybackTargetPicker();
        this.player().trigger(empPlayerEvents.AIRPLAY_START);
      } else {
        log('Airplay Blocked');
      }
    };

    _createClass(AirplayToggle, [{
      key: "entitlement",
      get: function get() {
        return extplayer.getEntitlement(this.player());
      }
    }]);

    return AirplayToggle;
  }(Button$6);

  AirplayToggle.prototype.controlText_ = 'Airplay';
  videojs.registerComponent('AirplayToggle', AirplayToggle);

  var Button$7 = videojs.getComponent('Button');
  var Component$d = videojs.getComponent('Component');
  /**
   * Displays a button to jump forward a few seconds
   *
   * @extends Button
   */

  var EmpNextButton =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(EmpNextButton, _Button);

    /**
     * Create a fast-forward button
     *
     * @param {Player} player
     * @param {Object} [options] - Object of option names and values
     */
    function EmpNextButton(player, options) {
      var _this;

      _this = _Button.call(this, player, options) || this;

      _this.controlText('Next program');

      _this.updateShowing();

      _this.on(_this.player(), empPlayerEvents.PLAYING, function () {
        return _this.updateShowing();
      });

      _this.on(_this.player(), empPlayerEvents.DURATION_CHANGE, function () {
        return _this.updateShowing();
      });

      _this.on(_this.player(), empPlayerEvents.PROGRAM_CHANGED, function (event, data) {
        return _this.updateShowing(data && data.program);
      });

      return _this;
    }
    /**
     * Create a AirplayToggle button
     *
     * @param {Player|Object} player
     * @param {Object=} options
     */


    var _proto = EmpNextButton.prototype;

    /**
     * updateShowing
     *
     * @param {Object} program
     */
    _proto.updateShowing = function updateShowing(program) {
      program = program ? program : this.player().getProgramDetails();

      if (!this.player().noEPG() && this.entitlement && program) {
        this.show();
        this.enable();
      } else {
        this.hide();
      }

      if (program && Date.now() < program.end.getTime()) {
        this.disable();
      }

      if (this.entitlement && (this.entitlement.isDynamicCachupAsLive || this.entitlement.isStaticCachupAsLive)) ; else {
        this.hide();
      }
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */
    ;

    _proto.buildCSSClass = function buildCSSClass() {
      return "emp-next-control " + _Button.prototype.buildCSSClass.call(this);
    }
    /**
     * playNextProgram
     *
     * @private
     */
    ;

    _proto.handleClick = function handleClick() {
      if (this.player().ended()) {
        return;
      }

      this.player().playNextProgram();
    };

    _createClass(EmpNextButton, [{
      key: "entitlement",
      get: function get() {
        return extplayer.getEntitlement(this.player());
      }
    }]);

    return EmpNextButton;
  }(Button$7);

  EmpNextButton.prototype.controlText_ = 'Next';
  Component$d.registerComponent('EmpNextButton', EmpNextButton);

  var Button$8 = videojs.getComponent('Button');
  var Component$e = videojs.getComponent('Component');
  /**
   * Displays a button to jump back a few seconds
   *
   * @extends Button
   */

  var EmpPreviousButton =
  /*#__PURE__*/
  function (_Button) {
    _inheritsLoose(EmpPreviousButton, _Button);

    /**
     * Create a rewind button
     *
     * @param {Player|Object} player
     * @param {Object[]} [options] - Object of option names and values
     */
    function EmpPreviousButton(player, options) {
      var _this;

      _this = _Button.call(this, player, options) || this;

      _this.controlText('Previous Program');

      _this.updateShowing();

      _this.on(_this.player(), empPlayerEvents.PLAYING, function () {
        return _this.updateShowing();
      });

      _this.on(_this.player(), empPlayerEvents.DURATION_CHANGE, function () {
        return _this.updateShowing();
      });

      _this.on(_this.player(), empPlayerEvents.PROGRAM_CHANGED, function () {
        return _this.updateShowing();
      });

      return _this;
    }
    /**
     * Get Entitlement
     *
     * @return {Entitlement} Entitlement
     * @private
     */


    var _proto = EmpPreviousButton.prototype;

    /**
     * updateShowing
     */
    _proto.updateShowing = function updateShowing() {
      var program = this.player().getProgramDetails();

      if (!this.player().noEPG() && this.entitlement && program) {
        this.show();
      } else {
        this.hide();
      }

      if (this.entitlement && (this.entitlement.isDynamicCachupAsLive || this.entitlement.isStaticCachupAsLive)) ; else {
        this.hide();
      }
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */
    ;

    _proto.buildCSSClass = function buildCSSClass() {
      return "emp-previous-control " + _Button.prototype.buildCSSClass.call(this);
    }
    /**
     * Jump backwards
     */
    ;

    _proto.handleClick = function handleClick() {
      if (this.player().ended()) {
        return;
      }

      this.player().playPreviousProgram();
    };

    _createClass(EmpPreviousButton, [{
      key: "entitlement",
      get: function get() {
        return extplayer.getEntitlement(this.player());
      }
    }]);

    return EmpPreviousButton;
  }(Button$8);

  EmpPreviousButton.prototype.controlText_ = 'Previous';
  Component$e.registerComponent('EmpPreviousButton', EmpPreviousButton);

  var ControlBar = videojs.getComponent('ControlBar');
  var Component$f = videojs.getComponent('Component');
  /**
   * Container of main controls
   *
   * @extends ControlBar
   * @class ControlBar
   */

  var EmpControlBar =
  /*#__PURE__*/
  function (_ControlBar) {
    _inheritsLoose(EmpControlBar, _ControlBar);

    function EmpControlBar() {
      return _ControlBar.apply(this, arguments) || this;
    }

    return EmpControlBar;
  }(ControlBar);

  EmpControlBar.prototype.options_ = {
    loadEvent: 'play',
    children: {
      empPlayToggle: {},
      empReloadButton: {},
      empStopButton: {},
      empPreviousButton: {},
      empRewindButton: {},
      empForwardButton: {},
      empNextButton: {},
      volumePanel: {
        inline: false
      },
      empTimeDisplay: {
        mode: 'currentTime'
      },
      timeDivider: {},
      durationDisplay: {},
      empLiveDisplay: {},
      progressControl: {},
      empTimeDisplay2: {
        mode: 'remainingTime'
      },
      customControlSpacer: {},
      empRestartButton: {},
      playbackRateMenuButton: {},
      chaptersButton: {},
      bitrateButton: {},
      audioTrackButton: {},
      subsCapsButton: {},
      airplayToggle: {},
      fullscreenToggle: {}
    }
  }; // loadProgressBar > seekBar > mouseTimeDisplay uses a reference to 'controlbar' so we need to override the name for compatibility with our own controlbar

  Component$f.registerComponent('ControlBar', EmpControlBar);

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

  var Component$g = videojs.getComponent('Component');
  var darkGray = '#222';
  var lightGray = '#ccc';
  var fontMap = {
    monospace: 'monospace',
    sansSerif: 'sans-serif',
    serif: 'serif',
    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
    monospaceSerif: '"Courier New", monospace',
    proportionalSansSerif: 'sans-serif',
    proportionalSerif: 'serif',
    casual: '"Comic Sans MS", Impact, fantasy',
    script: '"Monotype Corsiva", cursive',
    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
  };
  /**
   * Construct an rgba color from a given hex color code.
   *
   * @param {number} color
   *        Hex number for color, like #f0e.
   *
   * @param {number} opacity
   *        Value for opacity, 0.0 - 1.0.
   *
   * @return {string}
   *         The rgba color that was created, like 'rgba(255, 0, 0, 0.3)'.
   *
   * @private
   */

  function constructColor(color, opacity) {
    return 'rgba(' + // color looks like "#f0e"
    parseInt(color[1] + color[1], 16) + ',' + parseInt(color[2] + color[2], 16) + ',' + parseInt(color[3] + color[3], 16) + ',' + opacity + ')';
  }
  /**
   * Try to update the style of a DOM element. Some style changes will throw an error,
   * particularly in IE8. Those should be noops.
   *
   * @param {Element} el
   *        The DOM element to be styled.
   *
   * @param {string} style
   *        The CSS property on the element that should be styled.
   *
   * @param {string} rule
   *        The style rule that should be applied to the property.
   *
   * @private
   */

  /*
  function tryUpdateStyle(el, style, rule) {
    try {
      el.style[style] = rule;
    } catch (e) {

      // Satisfies linter.
      return;
    }
  }
  */

  /**
   * The component for displaying text track cues.
   *
   * @extends Component
   */


  var TextTrackDisplay =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(TextTrackDisplay, _Component);

    /**
     * Creates an instance of this class.
     *
     * @param {Player} player
     *        The `Player` that this class should be attached to.
     *
     * @param {Object} [options]
     *        The key/value store of player options.
     *
     * @param {Component~ReadyCallback} [ready]
     *        The function to call when `TextTrackDisplay` is ready.
     */
    function TextTrackDisplay(player, options, ready) {
      var _this;

      _this = _Component.call(this, player, options, ready) || this;
      player.on('loadstart', bind(_assertThisInitialized(_this), _this.toggleDisplay));
      player.on('texttrackchange', bind(_assertThisInitialized(_this), _this.updateDisplay));
      player.on('loadstart', bind(_assertThisInitialized(_this), _this.preselectTrack)); // This used to be called during player init, but was causing an error
      // if a track should show by default and the display hadn't loaded yet.
      // Should probably be moved to an external track loader when we support
      // tracks that don't need a display.

      player.ready(bind(_assertThisInitialized(_this), function () {
        if (player.tech_ && player.tech_.featuresNativeTextTracks) {
          this.hide();
          return;
        }

        if (player.streamType === 'DASH' || player.streamType === 'HLS' || player.techName_ === 'EmpCast') {
          this.hide();
          return;
        }

        player.on('fullscreenchange', bind(this, this.updateDisplay));
        var tracks = this.options_.playerOptions.tracks || [];

        for (var i = 0; i < tracks.length; i++) {
          this.player_.addRemoteTextTrack(tracks[i], true);
        }

        this.preselectTrack();
      }));
      return _this;
    }
    /**
    * Preselect a track following this precedence:
    * - matches the previously selected {@link TextTrack}'s language and kind
    * - matches the previously selected {@link TextTrack}'s language only
    * - is the first default captions track
    * - is the first default descriptions track
    *
    * @listens Player#loadstart
    */


    var _proto = TextTrackDisplay.prototype;

    _proto.preselectTrack = function preselectTrack() {
      var modes = {
        captions: 1,
        subtitles: 1
      };
      var trackList = this.player_.textTracks();
      var userPref = this.player_.cache_.selectedLanguage;
      var firstDesc;
      var firstCaptions;
      var preferredTrack;

      for (var i = 0; i < trackList.length; i++) {
        var track = trackList[i];

        if (userPref && userPref.enabled && userPref.language === track.language) {
          // Always choose the track that matches both language and kind
          if (track.kind === userPref.kind) {
            preferredTrack = track; // or choose the first track that matches language
          } else if (!preferredTrack) {
            preferredTrack = track;
          } // clear everything if offTextTrackMenuItem was clicked

        } else if (userPref && !userPref.enabled) {
          preferredTrack = null;
          firstDesc = null;
          firstCaptions = null;
        } else if (track.default) {
          if (track.kind === 'descriptions' && !firstDesc) {
            firstDesc = track;
          } else if (track.kind in modes && !firstCaptions) {
            firstCaptions = track;
          }
        }
      } // The preferredTrack matches the user preference and takes
      // precendence over all the other tracks.
      // So, display the preferredTrack before the first default track
      // and the subtitles/captions track before the descriptions track


      if (preferredTrack) {
        preferredTrack.mode = 'showing';
      } else if (firstCaptions) {
        firstCaptions.mode = 'showing';
      } else if (firstDesc) {
        firstDesc.mode = 'showing';
      }
    }
    /**
     * Turn display of {@link TextTrack}'s from the current state into the other state.
     * There are only two states:
     * - 'shown'
     * - 'hidden'
     *
     * @listens Player#loadstart
     */
    ;

    _proto.toggleDisplay = function toggleDisplay() {
      if (this.player_.streamType === 'DASH' || this.player_.streamType === 'HLS' || this.player_.techName_ === 'EmpCast') {
        this.hide();
        return;
      }

      if (this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks) {
        this.hide();
      } else {
        this.show();
      }
    }
    /**
     * Create the {@link Component}'s DOM element.
     *
     * @return {Element}
     *         The element that was created.
     */
    ;

    _proto.createEl = function createEl() {
      return _Component.prototype.createEl.call(this, 'div', {
        className: 'vjs-text-track-display'
      }, {
        'aria-live': 'off',
        'aria-atomic': 'true'
      });
    }
    /**
     * Clear all displayed {@link TextTrack}s.
     */
    ;

    _proto.clearDisplay = function clearDisplay() {
      if (typeof window_1.WebVTT === 'function') {
        window_1.WebVTT.processCues(window_1, [], this.el_);
      }
    }
    /**
     * removeStyles
     *
     * @param {string} styleName
     * @return {Element} style Element
     */
    ;

    _proto.removeStyles = function removeStyles(styleName) {
      var styleElement = document_1.getElementById(styleName);

      if (styleElement) {
        document_1.getElementsByTagName('head')[0].removeChild(styleElement);
      }

      return styleElement;
    }
    /**
     * writeStyles
     *
     * @param {string} styleName
     * @param {string} cssText
     */
    ;

    _proto.writeStyles = function writeStyles(styleName, cssText) {
      var styleElement = this.removeStyles(styleName);
      styleElement = document_1.createElement('style');
      styleElement.type = 'text/css';
      styleElement.id = styleName;
      styleElement.innerHTML = cssText;
      document_1.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    /**
     * getStyle
     *
     * @param {Object} overrides
     * @return {Object} style
     */
    ;

    _proto.getStyle = function getStyle(overrides) {
      var color;
      var backgroundColor;
      var textShadow;
      var fontSize;
      var height;
      var top;
      var bottom;
      var fontVariant;
      var fontFamily;
      var windowColor;

      if (overrides.color) {
        color = 'color: ' + overrides.color;
      }

      if (overrides.textOpacity) {
        color = 'color: ' + constructColor(overrides.color || '#fff', overrides.textOpacity);
      }

      if (overrides.backgroundColor) {
        backgroundColor = 'background-color: ' + overrides.backgroundColor;
      }

      if (overrides.backgroundOpacity) {
        backgroundColor = 'background-color: ' + constructColor(overrides.backgroundColor || '#000', overrides.backgroundOpacity);
      }

      if (overrides.windowColor) {
        if (overrides.windowOpacity) {
          windowColor = 'outline: ' + constructColor(overrides.windowColor, overrides.windowOpacity) + ' solid 10px';
        } else {
          windowColor = 'outline: ' + overrides.windowColor + ' solid 10px';
        }
      }

      if (overrides.edgeStyle) {
        if (overrides.edgeStyle === 'dropshadow') {
          // textShadow = 'text-shadow: ' + `2px 2px 3px ${darkGray}, 2px 2px 4px ${darkGray}, 2px 2px 5px ${darkGray}`;
          textShadow = 'text-shadow: ' + '0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black, black 0.1em 0.1em 0.2em';
        } else if (overrides.edgeStyle === 'raised') {
          textShadow = 'text-shadow: ' + ("1px 1px " + darkGray + ", 2px 2px " + darkGray + ", 3px 3px " + darkGray);
        } else if (overrides.edgeStyle === 'depressed') {
          textShadow = 'text-shadow: ' + ("1px 1px " + lightGray + ", 0 1px " + lightGray + ", -1px -1px " + darkGray + ", 0 -1px " + darkGray);
        } else if (overrides.edgeStyle === 'uniform') {
          textShadow = 'text-shadow: ' + ("0 0 4px " + darkGray + ", 0 0 4px " + darkGray + ", 0 0 4px " + darkGray + ", 0 0 4px " + darkGray);
        }
      }

      if (overrides.fontPercent && overrides.fontPercent !== 1) {
        // fontSize = 92;
        fontSize = 'font-size: ' + overrides.fontPercent + 'em';
        height = 'height: ' + 'auto';
        top = 'top: ' + 'auto';
        bottom = 'bottom: ' + '2px';
      }

      if (overrides.fontFamily && overrides.fontFamily !== 'default') {
        if (overrides.fontFamily === 'small-caps') {
          fontVariant = 'font-variant: ' + 'small-caps';
        } else {
          fontFamily = 'font-family: ' + fontMap[overrides.fontFamily];
        }
      }

      var style = (color ? color + '; ' : '') + (backgroundColor ? backgroundColor + '; ' : '') + (textShadow ? textShadow + '; ' : '') + (fontSize ? fontSize + '; ' : '') + (height ? height + '; ' : '') + (top ? top + '; ' : '') + (bottom ? bottom + '; ' : '') + (fontVariant ? fontVariant + '; ' : '') + (fontFamily ? fontFamily + '; ' : '') + (windowColor ? windowColor + '; ' : '');
      return style;
    }
    /**
     * getSafariStyle
     *
     * @param {Object} overrides
     * @return {Object} style
     */
    ;

    _proto.getSafariStyle = function getSafariStyle(overrides) {
      var backgroundColor;

      if (overrides.backgroundColor) {
        backgroundColor = 'background-color: ' + overrides.backgroundColor;
      }

      if (overrides.backgroundOpacity) {
        backgroundColor = 'background-color: ' + constructColor(overrides.backgroundColor || '#000', overrides.backgroundOpacity);
      }

      if (backgroundColor) {
        return 'video::-webkit-media-text-track-display-backdrop {' + backgroundColor + ' !important;' + 'overflow: visible !important;}';
      }

      return '';
    }
    /**
     * Update the displayed TextTrack when a either a {@link Player#texttrackchange} or
     * a {@link Player#fullscreenchange} is fired.
     *
     * @listens Player#texttrackchange
     * @listens Player#fullscreenchange
     */
    ;

    _proto.updateDisplay = function updateDisplay() {
      if (this.player_.textTrackSettings) {
        var overrides;

        if (this.player_.options_.textTrackStyle) {
          overrides = this.player_.options_.textTrackStyle;
        } else {
          overrides = this.player_.textTrackSettings.getValues();
        }

        var styleName = 'styles_cue';

        if (this.player_.streamType === 'DASH' || this.player_.techName_ === 'EmpHLS' || this.player_.streamType === 'HLS') {
          var styleStr = this.getStyle(overrides);

          if (this.player_.techName_ === 'EmpHLS') {
            this.writeStyles(styleName, 'video::cue {' + styleStr + '}' + '\n' + this.getSafariStyle(overrides));
          } else {
            this.writeStyles(styleName, 'video::cue {' + styleStr + '}');
          }

          this.clearDisplay();
          return;
        }

        this.removeStyles(styleName);
      } else {
        // remove texttrack settings dialogs
        this.writeStyles('style_no_texttrack_settings', '.vjs-texttrack-settings {display: none;}');
      } // Shaka and HLS handle text tracks


      return;
      /*
       const tracks = this.player_.textTracks();
       this.clearDisplay();
       // Track display prioritization model: if multiple tracks are 'showing',
      //  display the first 'subtitles' or 'captions' track which is 'showing',
      //  otherwise display the first 'descriptions' track which is 'showing'
       let descriptionsTrack = null;
      let captionsSubtitlesTrack = null;
      let i = tracks.length;
       while (i--) {
        const track = tracks[i];
         if (track.mode === 'showing') {
          if (track.kind === 'descriptions') {
            descriptionsTrack = track;
          } else {
            captionsSubtitlesTrack = track;
          }
        }
      }
       if (captionsSubtitlesTrack) {
        if (this.getAttribute('aria-live') !== 'off') {
          this.setAttribute('aria-live', 'off');
        }
        this.updateForTrack(captionsSubtitlesTrack);
      } else if (descriptionsTrack) {
        if (this.getAttribute('aria-live') !== 'assertive') {
          this.setAttribute('aria-live', 'assertive');
        }
        this.updateForTrack(descriptionsTrack);
      }
      */
    }
    /**
     * Add an {@link Texttrack} to to the {@link Tech}s {@link TextTrackList}.
     *
     * @param {TextTrack} track
     *        Text track object to be added to the list.
     */
    ;

    _proto.updateForTrack = function updateForTrack(track) {
      // Shaka and HLS handle text tracks
      return;
      /*
      if (typeof window.WebVTT !== 'function' || !track.activeCues) {
        return;
      }
       let overrides;
       if (this.player_.textTrackSettings) {
        overrides = this.player_.textTrackSettings.getValues();
      }
      const cues = [];
       for (let i = 0; i < track.activeCues.length; i++) {
        cues.push(track.activeCues[i]);
      }
       window.WebVTT.processCues(window, cues, this.el_);
       if (overrides) {
        return;
      }
       let i = cues.length;
       while (i--) {
        const cue = cues[i];
         if (!cue) {
          continue;
        }
         const cueDiv = cue.displayState;
         if (overrides.color) {
          cueDiv.firstChild.style.color = overrides.color;
        }
        if (overrides.textOpacity) {
          tryUpdateStyle(
            cueDiv.firstChild,
            'color',
            constructColor(
              overrides.color || '#fff',
              overrides.textOpacity
            )
          );
        }
        if (overrides.backgroundColor) {
          cueDiv.firstChild.style.backgroundColor = overrides.backgroundColor;
        }
        if (overrides.backgroundOpacity) {
          tryUpdateStyle(
            cueDiv.firstChild,
            'backgroundColor',
            constructColor(
              overrides.backgroundColor || '#000',
              overrides.backgroundOpacity
            )
          );
        }
        if (overrides.windowColor) {
          if (overrides.windowOpacity) {
            tryUpdateStyle(
              cueDiv,
              'backgroundColor',
              constructColor(overrides.windowColor, overrides.windowOpacity)
            );
          } else {
            cueDiv.style.backgroundColor = overrides.windowColor;
          }
        }
        if (overrides.edgeStyle) {
          if (overrides.edgeStyle === 'dropshadow') {
            cueDiv.firstChild.style.textShadow = `2px 2px 3px ${darkGray}, 2px 2px 4px ${darkGray}, 2px 2px 5px ${darkGray}`;
          } else if (overrides.edgeStyle === 'raised') {
            cueDiv.firstChild.style.textShadow = `1px 1px ${darkGray}, 2px 2px ${darkGray}, 3px 3px ${darkGray}`;
          } else if (overrides.edgeStyle === 'depressed') {
            cueDiv.firstChild.style.textShadow = `1px 1px ${lightGray}, 0 1px ${lightGray}, -1px -1px ${darkGray}, 0 -1px ${darkGray}`;
          } else if (overrides.edgeStyle === 'uniform') {
            cueDiv.firstChild.style.textShadow = `0 0 4px ${darkGray}, 0 0 4px ${darkGray}, 0 0 4px ${darkGray}, 0 0 4px ${darkGray}`;
          }
        }
        if (overrides.fontPercent && overrides.fontPercent !== 1) {
          const fontSize = window.parseFloat(cueDiv.style.fontSize);
           cueDiv.style.fontSize = (fontSize * overrides.fontPercent) + 'px';
          cueDiv.style.height = 'auto';
          cueDiv.style.top = 'auto';
          cueDiv.style.bottom = '2px';
        }
        if (overrides.fontFamily && overrides.fontFamily !== 'default') {
          if (overrides.fontFamily === 'small-caps') {
            cueDiv.firstChild.style.fontVariant = 'small-caps';
          } else {
            cueDiv.firstChild.style.fontFamily = fontMap[overrides.fontFamily];
          }
        }
      }
      */
    };

    return TextTrackDisplay;
  }(Component$g);

  Component$g.registerComponent('TextTrackDisplay', TextTrackDisplay);

  var Component$h = videojs.getComponent('Component');
  var ModalDialog = videojs.getComponent('ModalDialog');
  var LOCAL_STORAGE_KEY = 'vjs-text-track-settings';
  var COLOR_BLACK = ['#000', 'Black'];
  var COLOR_BLUE = ['#00F', 'Blue'];
  var COLOR_CYAN = ['#0FF', 'Cyan'];
  var COLOR_GREEN = ['#0F0', 'Green'];
  var COLOR_MAGENTA = ['#F0F', 'Magenta'];
  var COLOR_RED = ['#F00', 'Red'];
  var COLOR_WHITE = ['#FFF', 'White'];
  var COLOR_YELLOW = ['#FF0', 'Yellow'];
  var OPACITY_OPAQUE = ['1', 'Opaque'];
  var OPACITY_SEMI = ['0.5', 'Semi-Transparent'];
  var OPACITY_TRANS = ['0', 'Transparent']; // Configuration for the various <select> elements in the DOM of this component.
  //
  // Possible keys include:
  //
  // `default`:
  //   The default option index. Only needs to be provided if not zero.
  // `parser`:
  //   A function which is used to parse the value from the selected option in
  //   a customized way.
  // `selector`:
  //   The selector used to find the associated <select> element.

  var selectConfigs = {
    backgroundColor: {
      selector: '.vjs-bg-color > select',
      id: 'captions-background-color-%s',
      label: 'Color',
      options: [COLOR_BLACK, COLOR_WHITE, COLOR_RED, COLOR_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_MAGENTA, COLOR_CYAN]
    },
    backgroundOpacity: {
      selector: '.vjs-bg-opacity > select',
      id: 'captions-background-opacity-%s',
      label: 'Transparency',
      options: [OPACITY_TRANS, OPACITY_SEMI, OPACITY_OPAQUE]
    },
    color: {
      selector: '.vjs-fg-color > select',
      id: 'captions-foreground-color-%s',
      label: 'Color',
      options: [COLOR_WHITE, COLOR_BLACK, COLOR_RED, COLOR_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_MAGENTA, COLOR_CYAN]
    },
    edgeStyle: {
      selector: '.vjs-edge-style > select',
      id: '%s',
      label: 'Text Edge Style',
      options: [['none', 'None'], ['raised', 'Raised'], ['depressed', 'Depressed'], ['uniform', 'Uniform'], ['dropshadow', 'Dropshadow']],
      default: 4
    },
    fontFamily: {
      selector: '.vjs-font-family > select',
      id: 'captions-font-family-%s',
      label: 'Font Family',
      options: [['proportionalSansSerif', 'Proportional Sans-Serif'], ['monospaceSansSerif', 'Monospace Sans-Serif'], ['proportionalSerif', 'Proportional Serif'], ['monospaceSerif', 'Monospace Serif'], ['casual', 'Casual'], ['script', 'Script'], ['small-caps', 'Small Caps']]
    },
    fontPercent: {
      selector: '.vjs-font-percent > select',
      id: 'captions-font-size-%s',
      label: 'Font Size',
      options: [['0.25', '25%'], ['0.50', '50%'], ['0.75', '75%'], ['1.00', '100%'], ['1.25', '125%'], ['1.50', '150%'], ['1.75', '175%'], ['2.00', '200%'], ['2.50', '250%']],
      default: 3,
      parser: function parser(v) {
        return v === '1.00' ? null : Number(v);
      }
    },
    textOpacity: {
      selector: '.vjs-text-opacity > select',
      id: 'captions-foreground-opacity-%s',
      label: 'Transparency',
      options: [OPACITY_OPAQUE, OPACITY_SEMI]
    },
    // Options for this object are defined below.
    windowColor: {
      selector: '.vjs-window-color > select',
      id: 'captions-window-color-%s',
      label: 'Color'
    },
    // Options for this object are defined below.
    windowOpacity: {
      selector: '.vjs-window-opacity > select',
      id: 'captions-window-opacity-%s',
      label: 'Transparency',
      options: [OPACITY_TRANS, OPACITY_SEMI, OPACITY_OPAQUE]
    }
  };
  selectConfigs.windowColor.options = selectConfigs.backgroundColor.options;
  /**
   * Get the actual value of an option.
   *
   * @param  {string} value
   *         The value to get
   *
   * @param  {Function} [parser]
   *         Optional function to adjust the value.
   *
   * @return {Mixed}
   *         - Will be `undefined` if no value exists
   *         - Will be `undefined` if the given value is "none".
   *         - Will be the actual value otherwise.
   *
   * @private
   */

  function parseOptionValue(value, parser) {
    if (parser) {
      value = parser(value);
    }

    if (value && value !== 'none') {
      return value;
    }
  }
  /**
   * Gets the value of the selected <option> element within a <select> element.
   *
   * @param  {Element} el
   *         the element to look in
   *
   * @param  {Function} [parser]
   *         Optional function to adjust the value.
   *
   * @return {Mixed}
   *         - Will be `undefined` if no value exists
   *         - Will be `undefined` if the given value is "none".
   *         - Will be the actual value otherwise.
   *
   * @private
   */


  function getSelectedOptionValue(el, parser) {
    var value = el.options[el.options.selectedIndex].value;
    return parseOptionValue(value, parser);
  }
  /**
   * Sets the selected <option> element within a <select> element based on a
   * given value.
   *
   * @param {Element} el
   *        The element to look in.
   *
   * @param {string} value
   *        the property to look on.
   *
   * @param {Function} [parser]
   *        Optional function to adjust the value before comparing.
   *
   * @private
   */


  function setSelectedOption(el, value, parser) {
    if (!value) {
      return;
    }

    for (var i = 0; i < el.options.length; i++) {
      if (parseOptionValue(el.options[i].value, parser) === value) {
        el.selectedIndex = i;
        break;
      }
    }
  }
  /**
   * Manipulate Text Tracks settings.
   *
   * @extends ModalDialog
   */


  var TextTrackSettings =
  /*#__PURE__*/
  function (_ModalDialog) {
    _inheritsLoose(TextTrackSettings, _ModalDialog);

    /**
     * Creates an instance of this class.
     *
     * @param {Player} player
     *         The `Player` that this class should be attached to.
     *
     * @param {Object} [options]
     *         The key/value store of player options.
     */
    function TextTrackSettings(player, options) {
      var _this;

      options.temporary = false;
      _this = _ModalDialog.call(this, player, options) || this;
      _this.updateDisplay = bind(_assertThisInitialized(_this), _this.updateDisplay); // fill the modal and pretend we have opened it

      _this.fill();

      _this.hasBeenOpened_ = _this.hasBeenFilled_ = true;
      _this.endDialog = createEl('p', {
        className: 'vjs-control-text',
        textContent: _this.localize('End of dialog window.')
      });

      _this.el().appendChild(_this.endDialog);

      _this.setDefaults(); // Grab `persistTextTrackSettings` from the player options if not passed in child options


      if (options.persistTextTrackSettings === undefined) {
        _this.options_.persistTextTrackSettings = _this.options_.playerOptions.persistTextTrackSettings;
      }

      _this.on(_this.$('.vjs-done-button'), 'click', function () {
        _this.saveSettings();

        _this.close();
      });

      _this.on(_this.$('.vjs-default-button'), 'click', function () {
        _this.setDefaults();

        _this.updateDisplay();
      });

      each(selectConfigs, function (config) {
        _this.on(_this.$(config.selector), 'change', _this.updateDisplay);
      });

      if (_this.options_.persistTextTrackSettings) {
        _this.restoreSettings();
      }

      return _this;
    }
    /**
     * dispose
     */


    var _proto = TextTrackSettings.prototype;

    _proto.dispose = function dispose() {
      this.endDialog = null;

      _ModalDialog.prototype.dispose.call(this);
    }
    /**
     * Create a <select> element with configured options.
     *
     * @param {string} key
     *        Configuration key to use during creation.
     * @param {string} legendId
     *        legendId.
     * @param {string} type
     *        label.
     *
     * @return {string}
     *         An HTML string.
     *
     * @private
     */
    ;

    _proto.createElSelect_ = function createElSelect_(key, legendId, type) {
      var _this2 = this;

      if (legendId === void 0) {
        legendId = '';
      }

      if (type === void 0) {
        type = 'label';
      }

      var config = selectConfigs[key];
      var id = config.id.replace('%s', this.id_);
      return ["<" + type + " id=\"" + id + "\" class=\"" + (type === 'label' ? 'vjs-label' : '') + "\">", this.localize(config.label), "</" + type + ">", "<select aria-labelledby=\"" + (legendId !== '' ? legendId + ' ' : '') + id + "\">"].concat(config.options.map(function (o) {
        var optionId = id + '-' + o[1];
        return ["<option id=\"" + optionId + "\" value=\"" + o[0] + "\" ", "aria-labelledby=\"" + (legendId !== '' ? legendId + ' ' : '') + id + " " + optionId + "\">", _this2.localize(o[1]), '</option>'].join('');
      })).concat('</select>').join('');
    }
    /**
     * Create foreground color element for the component
     *
     * @return {string}
     *         An HTML string.
     *
     * @private
     */
    ;

    _proto.createElFgColor_ = function createElFgColor_() {
      var legendId = "captions-text-legend-" + this.id_;
      return ['<fieldset class="vjs-fg-color vjs-track-setting">', "<legend id=\"" + legendId + "\">", this.localize('Text'), '</legend>', this.createElSelect_('color', legendId), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_('textOpacity', legendId), '</span>', '</fieldset>'].join('');
    }
    /**
     * Create background color element for the component
     *
     * @return {string}
     *         An HTML string.
     *
     * @private
     */
    ;

    _proto.createElBgColor_ = function createElBgColor_() {
      var legendId = "captions-background-" + this.id_;
      return ['<fieldset class="vjs-bg-color vjs-track-setting">', "<legend id=\"" + legendId + "\">", this.localize('Background'), '</legend>', this.createElSelect_('backgroundColor', legendId), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_('backgroundOpacity', legendId), '</span>', '</fieldset>'].join('');
    }
    /**
     * Create window color element for the component
     *
     * @return {string}
     *         An HTML string.
     *
     * @private
     */
    ;

    _proto.createElWinColor_ = function createElWinColor_() {
      var legendId = "captions-window-" + this.id_;
      return ['<fieldset class="vjs-window-color vjs-track-setting">', "<legend id=\"" + legendId + "\">", this.localize('Window'), '</legend>', this.createElSelect_('windowColor', legendId), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_('windowOpacity', legendId), '</span>', '</fieldset>'].join('');
    }
    /**
     * Create color elements for the component
     *
     * @return {Element}
     *         The element that was created
     *
     * @private
     */
    ;

    _proto.createElColors_ = function createElColors_() {
      return createEl('div', {
        className: 'vjs-track-settings-colors',
        innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join('')
      });
    }
    /**
     * Create font elements for the component
     *
     * @return {Element}
     *         The element that was created.
     *
     * @private
     */
    ;

    _proto.createElFont_ = function createElFont_() {
      return createEl('div', {
        className: 'vjs-track-settings-font">',
        innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_('fontPercent', '', 'legend'), '</fieldset>', '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_('edgeStyle', '', 'legend'), '</fieldset>', '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_('fontFamily', '', 'legend'), '</fieldset>'].join('')
      });
    }
    /**
     * Create controls for the component
     *
     * @return {Element}
     *         The element that was created.
     *
     * @private
     */
    ;

    _proto.createElControls_ = function createElControls_() {
      var defaultsDescription = this.localize('restore all settings to the default values');
      return createEl('div', {
        className: 'vjs-track-settings-controls',
        innerHTML: ["<button class=\"vjs-default-button\" title=\"" + defaultsDescription + "\">", this.localize('Reset'), "<span class=\"vjs-control-text\"> " + defaultsDescription + "</span>", '</button>', "<button class=\"vjs-done-button\">" + this.localize('Done') + "</button>"].join('')
      });
    }
    /**
     * Get content
     *
     * @return {Object} content
     */
    ;

    _proto.content = function content() {
      return [this.createElColors_(), this.createElFont_(), this.createElControls_()];
    }
    /**
     * Get localize label
     *
     * @return {string} localize label
     */
    ;

    _proto.label = function label() {
      return this.localize('Caption Settings Dialog');
    }
    /**
     * Get localize description
     *
     * @return {string} localize description
     */
    ;

    _proto.description = function description() {
      return this.localize('Beginning of dialog window. Escape will cancel and close the window.');
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */
    ;

    _proto.buildCSSClass = function buildCSSClass() {
      return _ModalDialog.prototype.buildCSSClass.call(this) + ' vjs-text-track-settings';
    }
    /**
     * Gets an object of text track settings (or null).
     *
     * @return {Object}
     *         An object with config values parsed from the DOM or localStorage.
     */
    ;

    _proto.getValues = function getValues() {
      var _this3 = this;

      return reduce(selectConfigs, function (accum, config, key) {
        var value = getSelectedOptionValue(_this3.$(config.selector), config.parser);

        if (value !== undefined) {
          accum[key] = value;
        }

        return accum;
      }, {});
    }
    /**
     * Sets text track settings from an object of values.
     *
     * @param {Object} values
     *        An object with config values parsed from the DOM or localStorage.
     */
    ;

    _proto.setValues = function setValues(values) {
      var _this4 = this;

      each(selectConfigs, function (config, key) {
        setSelectedOption(_this4.$(config.selector), values[key], config.parser);
      });
    }
    /**
     * Sets all `<select>` elements to their default values.
     */
    ;

    _proto.setDefaults = function setDefaults() {
      var _this5 = this;

      each(selectConfigs, function (config) {
        var index = config.hasOwnProperty('default') ? config.default : 0;
        _this5.$(config.selector).selectedIndex = index;
      });
    }
    /**
     * Restore texttrack settings from localStorage
     */
    ;

    _proto.restoreSettings = function restoreSettings() {
      var values;

      try {
        values = JSON.parse(window_1.localStorage.getItem(LOCAL_STORAGE_KEY));
      } catch (err) {
        log.warn(err);
      }

      if (values) {
        this.setValues(values);
      }
    }
    /**
     * Save text track settings to localStorage
     */
    ;

    _proto.saveSettings = function saveSettings() {
      var values = this.getValues(); // override textTrackStyle with dialog values

      this.player_.options_.textTrackStyle = undefined; // send to CC if casting

      if (this.player_.techName_ === 'EmpCast') {
        this.player_.techCall_('sendTextTrackStyle', values);
      }

      if (!this.options_.persistTextTrackSettings) {
        return;
      }

      try {
        if (Object.keys(values).length) {
          window_1.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
        } else {
          window_1.localStorage.removeItem(LOCAL_STORAGE_KEY);
        }
      } catch (err) {
        log.warn(err);
      }
    }
    /**
     * Update display of text track settings
     */
    ;

    _proto.updateDisplay = function updateDisplay() {
      var ttDisplay = this.player_.getChild('textTrackDisplay');

      if (ttDisplay) {
        ttDisplay.updateDisplay();
      }
    }
    /**
     * conditionally blur the element and refocus the captions button
     *
     * @private
     */
    ;

    _proto.conditionalBlur_ = function conditionalBlur_() {
      this.previouslyActiveEl_ = null;
      this.off(document_1, 'keydown', this.handleKeyDown);
      var cb = this.player_.controlBar;
      var subsCapsBtn = cb && cb.subsCapsButton;
      var ccBtn = cb && cb.captionsButton;

      if (subsCapsBtn) {
        subsCapsBtn.focus();
      } else if (ccBtn) {
        ccBtn.focus();
      }
    };

    return TextTrackSettings;
  }(ModalDialog);

  Component$h.registerComponent('TextTrackSettings', TextTrackSettings);

  var Component$i = videojs.getComponent('Component');
  /**
   * EmpMediaInfoBar Show media-title, media-artwork, media-resolution and media-subtitle
   *
   * @param {Player|Object} player
   * @param {Object=} options
   * @extends Component
   * @class EmpMediaInfoBar
   */

  var EmpMediaInfoBar =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(EmpMediaInfoBar, _Component);

    /**
     * Create a EmpMediaInfoBar button
     *
     * @param {Player|Object} player
     * @param {Object=} options
     */
    function EmpMediaInfoBar(player, options) {
      var _this;

      _this = _Component.call(this, player, options) || this;
      _this.assetMetadata = null;

      _this.on(_this.player(), empPlayerEvents.ENDED, function () {
        _this.hide();

        _this.clearEl();

        _this.assetMetadata = null;
      });

      _this.on(_this.player(), empPlayerEvents.ABORT, function () {
        _this.hide();

        _this.clearEl();

        _this.assetMetadata = null;
      });

      _this.on(_this.player(), empPlayerEvents.CHROMECAST_CASTING, function () {
        _this.hide();

        _this.clearEl();

        _this.assetMetadata = null;
      });

      _this.on(_this.player(), empPlayerEvents.PLAYING, function () {
        _this.show();

        if (!_this.assetMetadata) {
          var opt = _this.player().options();

          if (opt.mediaInfo) {
            _this.updateMediaInformation_({
              title: opt.mediaInfo.title,
              subtitle: opt.mediaInfo.subtitle,
              images: opt.mediaInfo.artworkUrl ? [{
                url: opt.mediaInfo.artworkUrl
              }] : [],
              channelInfo: {
                images: opt.mediaInfo.logoUrl ? [{
                  url: opt.mediaInfo.logoUrl
                }] : []
              }
            });
          }
        }
      });

      _this.on(_this.player(), empPlayerEvents.PROGRAM_CHANGED, function (event, data) {
        var programId = data && data.program ? data.program.programId : null;

        if (programId) {
          _this.assetMetadata = _this.player().programService().extractAssetMetadata(data.program.asset);
          _this.assetMetadata.channelInfo = data.program.channelInfo;

          _this.updateMediaInformation_(_this.assetMetadata);
        } else {
          _this.hide();

          _this.clearEl();

          _this.assetMetadata = null;
        }
      });

      _this.on(_this.player(), empPlayerEvents.ASSET_CHANGED, function (event, data) {
        if (data && data.asset) {
          _this.assetMetadata = _this.player().programService().extractAssetMetadata(data.asset);

          _this.updateMediaInformation_(_this.assetMetadata);
        } else {
          _this.hide();

          _this.clearEl();

          _this.assetMetadata = null;
        }
      });

      _this.on(_this.player(), empPlayerEvents.DISPOSE, function () {
        _this.hide();

        _this.clearEl();
      });

      _this.fillEl();

      return _this;
    }
    /**
     * Builds the default DOM class name.
     *
     * @return {string}
     *         The DOM class name for this object.
     * @private
     */


    var _proto = EmpMediaInfoBar.prototype;

    _proto.buildCSSClass = function buildCSSClass() {
      return "emp-mediainfo-bar " + _Component.prototype.buildCSSClass.call(this);
    }
    /**
     * Create the component's DOM element
     *
     * @return {Element} The element that was created.
     * @method createEl
     */
    ;

    _proto.createEl = function createEl() {
      var el = _Component.prototype.createEl.call(this, 'div', {
        className: 'emp-mediainfo-bar'
      });

      return el;
    }
    /**
     * Select the image to display for the asset
     *
     * @param {Array} images image objects
     * @param {string} imageType image type in backend
     * @return {image} image object
     */
    ;

    _proto.imageSelector = function imageSelector(images, imageType) {
      var image;

      if (images.length > 0) {
        image = images[0];
      }

      for (var i = 0; i < images.length; i++) {
        if (images[i].url && images[i].type === imageType) {
          return images[i];
        }
      }

      return image;
    }
    /**
     * updateMediaInformation
     *
     * @param {Object} assetMetadata
     * @private
     */
    ;

    _proto.updateMediaInformation_ = function updateMediaInformation_(assetMetadata) {
      if (!this.el_) {
        return;
      }

      this.show();
      var opt = this.player().options();

      if (!opt.mediaInfo) {
        return;
      }

      this.fillEl();
      var mediaArtworkElCollection = this.el_.getElementsByClassName('emp-media-artwork');
      var mediaLogoElCollection = this.el_.getElementsByClassName('emp-media-logo');
      var mediaTitleElCollection = this.el_.getElementsByClassName('emp-media-title');
      var mediaSubtitleElCollection = this.el_.getElementsByClassName('emp-media-subtitle');
      var mediaArtworkEl = mediaArtworkElCollection.length ? mediaArtworkElCollection[0] : null;
      var mediaLogoEl = mediaLogoElCollection.length ? mediaLogoElCollection[0] : null;
      var mediaTitleEl = mediaTitleElCollection.length ? mediaTitleElCollection[0] : null;
      var mediaSubtitleEl = mediaSubtitleElCollection.length ? mediaSubtitleElCollection[0] : null;

      if (mediaTitleEl) {
        mediaTitleEl.innerHTML = assetMetadata.title || '';
      }

      if (mediaSubtitleEl) {
        mediaSubtitleEl.innerHTML = assetMetadata.subtitle || '';
      }

      if (mediaArtworkEl && assetMetadata.images && assetMetadata.images.length > 0) {
        var image = this.imageSelector(assetMetadata.images, 'chromecast');
        mediaArtworkEl.style.backgroundImage = 'url("' + image.url + '")';
        mediaArtworkEl.style.display = 'block';
      } else if (mediaArtworkEl) {
        mediaArtworkEl.style.display = 'none';
        mediaArtworkEl.style.backgroundImage = 'none';
      }

      if (mediaLogoEl && assetMetadata.channelInfo) {
        var channelLogo = this.imageSelector(assetMetadata.channelInfo.images, 'thumbnail');

        if (channelLogo && channelLogo.url) {
          mediaLogoEl.style.backgroundImage = 'url("' + channelLogo.url + '")';
          mediaLogoEl.style.display = 'block';
        } else {
          mediaLogoEl.style.display = 'none';
          mediaLogoEl.style.backgroundImage = 'none';
        }
      } // Show the control and mediainfo bar


      this.player().userActive(true);
    }
    /**
     * clearEl
     *
     * @private
     */
    ;

    _proto.clearEl = function clearEl() {
      if (!this.el_) {
        return;
      }

      this.el_.innerHTML = '';
    }
    /**
     * fillEl
     *
     * @private
     */
    ;

    _proto.fillEl = function fillEl() {
      var opt = this.player().options();

      if (opt.mediaInfo) {
        var html = '';

        if (opt.mediaInfo.artworkEnable) {
          html += '<div class="emp-media-artwork"></div>';
        }

        if (opt.mediaInfo.titleEnable || opt.mediaInfo.subtitleEnable) {
          html += '<div class="emp-media-text">';
        }

        if (opt.mediaInfo.titleEnable) {
          html += '<div class="emp-media-title"></div>';
        }

        if (opt.mediaInfo.subtitleEnable) {
          html += '<div class="emp-media-subtitle"></div>';
        }

        if (opt.mediaInfo.titleEnable || opt.mediaInfo.subtitleEnable) {
          html += '</div>';
        }

        if (opt.mediaInfo.logoEnable) {
          html += '<div class="emp-media-logo"></div>';
        }

        this.el_.innerHTML = html;
      } else {
        this.el_.innerHTML = '';
      }
    };

    return EmpMediaInfoBar;
  }(Component$i);

  EmpMediaInfoBar.prototype.controlText_ = 'MediaInfo';
  Component$i.registerComponent('EmpMediaInfoBar', EmpMediaInfoBar);

  /**
   * A Custom `MediaError` class which mimics the standard HTML5 `MediaError` class.
   *
   * @param {number|string|Object|MediaError} value
   *        This can be of multiple types:
   *        - number: should be a standard error code
   *        - string: an error message (the code will be 0)
   *        - Object: arbitrary properties
   *        - `MediaError` (native): used to populate a video.js `MediaError` object
   *        - `MediaError` (video.js): will return itself if it's already a
   *          video.js `MediaError` object.
   *
   * @see [MediaError Spec]{@link https://dev.w3.org/html5/spec-author-view/video.html#mediaerror}
   * @see [Encrypted MediaError Spec]{@link https://www.w3.org/TR/2013/WD-encrypted-media-20130510/#error-codes}
   *
   * @class MediaError
   */

  function MediaError(value) {
    // Allow redundant calls to this constructor to avoid having `instanceof`
    // checks peppered around the code.
    if (value instanceof MediaError) {
      return value;
    }

    if (typeof value === 'number') {
      this.code = value;
    } else if (typeof value === 'string') {
      // default code is zero, so this is a custom error
      this.message = value;
    } else if (isObject(value)) {
      // We assign the `code` property manually because native `MediaError` objects
      // do not expose it as an own/enumerable property of the object.
      if (typeof value.code === 'number') {
        this.code = value.code;
      } // Videojs bug fix message and status be removed


      if (value.message) {
        this.message = value.message;
      }

      if (value.status) {
        this.status = value.status;
      }

      assign(this, value);
    }

    if (!this.message) {
      this.message = MediaError.defaultMessages[this.code] || '';
    }
  }
  /**
   * The error code that refers two one of the defined `MediaError` types
   *
   * @type {Number}
   */


  MediaError.prototype.code = 0;
  /**
   * An optional message that to show with the error. Message is not part of the HTML5
   * video spec but allows for more informative custom errors.
   *
   * @type {String}
   */

  MediaError.prototype.message = '';
  /**
   * An optional status code that can be set by plugins to allow even more detail about
   * the error. For example a plugin might provide a specific HTTP status code and an
   * error message for that code. Then when the plugin gets that error this class will
   * know how to display an error message for it. This allows a custom message to show
   * up on the `Player` error overlay.
   *
   * @type {Array}
   */

  MediaError.prototype.status = null;
  /**
   * Errors indexed by the W3C standard. The order **CANNOT CHANGE**! See the
   * specification listed under {@link MediaError} for more information.
   *
   * @enum {array}
   * @readonly
   * @property {string} 0 - MEDIA_ERR_CUSTOM
   * @property {string} 1 - MEDIA_ERR_CUSTOM
   * @property {string} 2 - MEDIA_ERR_ABORTED
   * @property {string} 3 - MEDIA_ERR_NETWORK
   * @property {string} 4 - MEDIA_ERR_SRC_NOT_SUPPORTED
   * @property {string} 5 - MEDIA_ERR_ENCRYPTED
   */

  MediaError.errorTypes = ['MEDIA_ERR_CUSTOM', 'MEDIA_ERR_ABORTED', 'MEDIA_ERR_NETWORK', 'MEDIA_ERR_DECODE', 'MEDIA_ERR_SRC_NOT_SUPPORTED', 'MEDIA_ERR_ENCRYPTED'];
  /**
   * The default `MediaError` messages based on the {@link MediaError.errorTypes}.
   *
   * @type {Array}
   * @constant
   */

  MediaError.defaultMessages = {
    1: 'You aborted the media playback',
    2: 'A network error caused the media download to fail part-way.',
    3: 'The media playback was aborted due to a corruption problem or because the media used features your browser did not support.',
    4: 'The media could not be loaded, either because the server or network failed or because the format is not supported.',
    5: 'The media is encrypted and we do not have the keys to decrypt it.'
  }; // Add types as properties on MediaError
  // e.g. MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;

  for (var errNum = 0; errNum < MediaError.errorTypes.length; errNum++) {
    MediaError[MediaError.errorTypes[errNum]] = errNum; // values should be accessible on both the class and instance

    MediaError.prototype[MediaError.errorTypes[errNum]] = errNum;
  } // jsdocs for instance/static members added above

  var VjsPlayer = videojs.getComponent('Player');
  var Tech = videojs.getComponent('Tech');
  var CaptionSettingsMenuItem = videojs.getComponent('CaptionSettingsMenuItem'); // Shaka polyfill this

  if (window_1.vttjs) {
    window_1.vttjs.restore();
  }
  /**
   * Player class, inherits from videojs Player class.
   *
   * @param {Element}   tag     The original video tag used for configuring options
   * @param {Object=}   options Player Options
   * @param {Function=} ready   Ready callback
   * @extends videojs.Player
   * @class Player
   */


  var Player =
  /*#__PURE__*/
  function (_VjsPlayer) {
    _inheritsLoose(Player, _VjsPlayer);

    /**
     * Create the Player
     *
     * @param {Element}   tag     The original video tag used for configuring options
     * @param {Object=}   options Player Options
     * @param {Function=} ready   Ready callback
     */
    function Player(tag, options, ready) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      if (ready === void 0) {
        ready = function ready() {};
      }

      // options.nativeTextTracks = true;
      // options.empshaka.nativeTextTracks = true;
      // absoluteStartTime override startTime
      if (options.absoluteStartTime) {
        options.startTime = 0;
      }

      options = assign({
        children: ['mediaLoader', 'PosterImage', 'textTrackDisplay', 'loadingSpinner', 'empMediaInfoBar', 'controlBar', 'errorDisplay', 'textTrackSettings', 'BigPlayButton']
      }, options);

      if (options.techOrder === 'auto' || Array.isArray(options.techOrder) && options.techOrder.length === 1 && options.techOrder[0] === 'auto') {
        options.techOrder = Player.AutoTechArray('EmpShaka');
      } else if (options.techOrder === 'auto-dashif' || Array.isArray(options.techOrder) && options.techOrder.length === 1 && options.techOrder[0] === 'auto-dashif') {
        options.techOrder = Player.AutoTechArray('EmpDashif');
      } else if (Array.isArray(options.techOrder)) {
        options.techOrder = Player.GetValidAutoTechOrder(options.techOrder);
      } // element data-setup


      var tagOptions = Player.getTagSettings(tag); // Add default options for every player instance
      // default options are overidden by options set in the options parameter

      options = videojs.mergeOptions({
        'entitlement-engine': 'EricssonExposure',
        'sources': tagOptions.sources ? tagOptions.sources : undefined,
        'techOrder': tagOptions.techOrder ? tagOptions.techOrder : Player.AutoTechArray('EmpShaka'),
        'maxBitrate': tagOptions.maxBitrate ? tagOptions.maxBitrate : 0,
        'timeShiftDisabled': tagOptions.timeShiftDisabled ? tagOptions.timeShiftDisabled : false,
        'useLastViewedOffset': tagOptions.useLastViewedOffset ? tagOptions.useLastViewedOffset : false,
        'startTime': tagOptions.startTime ? tagOptions.startTime : 0,
        'absoluteStartTime': tagOptions.absoluteStartTime ? tagOptions.absoluteStartTime : undefined,
        'persistTextTrackSettings': tagOptions.persistTextTrackSettings ? tagOptions.persistTextTrackSettings : !IS_IE_OR_EDGE,
        'textTrackSettings': tagOptions.textTrackSettings ? tagOptions.textTrackSettings : !IS_IE_OR_EDGE
      }, options); // Fix that HTML attribute is lowercase

      if (options.sources) {
        for (var i = 0; i < options.sources.length; i++) {
          var newKeys = {
            licenseserver: 'licenseServer',
            certificateserver: 'certificateServer',
            playtoken: 'playToken',
            keysystems: 'keySystems'
          };
          options.sources[i] = renameKeys(options.sources[i], newKeys);

          if (isString(options.sources[i].keySystems)) {
            options.sources[i].keySystems = JSON.parse(options.sources[i].keySystems);
          }
        }
      }

      _this = _VjsPlayer.call(this, tag, options, ready) || this;

      _this.monkeyPatchingTextMenu_();

      if (window_1.empPlayer && log.islogToBrowserConsole) {
        window_1.empPlayer.setInstance(_assertThisInitialized(_this));
      }

      _this.previousAbsoluteStartTime_ = undefined;

      if (_this.castPlugin) {
        _this.castPlugin();
      } // For Html5 tech with videojs-contrib-eme


      if (_this.eme) {
        _this.eme();
      }

      _this.on(empPlayerEvents.ENDED, function () {
        log('ENDED');
        _this.ended_ = true;
        _this.sourceChanging_ = false;

        _this.stopProgramService();

        if (_this.entitlementExpirationService) {
          _this.entitlementExpirationService().stop();
        }

        if (_this.techName_ !== 'EmpCast') {
          _this.loadNextSource();
        }

        if (_this.yospace) {
          _this.yospace().stop();
        }
      });

      _this.on(empPlayerEvents.DISPOSE, function () {
        _this.loadNextSrc_ = null;

        if (_this.loadingSrc_) {
          clearInterval(_this.loadingSrc_);
          _this.loadingSrc_ = null;
        }

        _this.sourceChanging_ = false;

        _this.clearResetAndReloadTimer_();

        _this.stopProgramService();

        if (_this.entitlementExpirationService) {
          _this.entitlementExpirationService().stop();
        }
      });

      _this.on(empPlayerEvents.ERROR, function () {
        _this.loadNextSrc_ = null;

        if (_this.loadingSrc_) {
          clearInterval(_this.loadingSrc_);
          _this.loadingSrc_ = null;
        }

        _this.sourceChanging_ = false;

        _this.clearResetAndReloadTimer_();

        _this.stopProgramService();

        if (_this.entitlementExpirationService) {
          _this.entitlementExpirationService().stop();
        }

        if (_this.yospace) {
          _this.yospace().stop();
        }
      });

      _this.on(empPlayerEvents.CAN_PLAY, function () {
        _this.disableTimeShift(_this.options_.timeShiftDisabled);
      });

      _this.on(empPlayerEvents.LOADED_DATA, function () {
        _this.addClass('vjs-has-started');

        _this.ended_ = false; // Don't set referenceTime
        // if (this.programService) {
        //  var entitlement = this.programService().entitlement();
        //  if (entitlement) {
        //    entitlement.streamInfo.referenceTime = this.startTimeLive();
        //  }
        // }
      });

      _this.on(empPlayerEvents.REPLAY, function () {
        if (_this.cache_ && _this.cache_.source && _this.cache_.source.yospaceUrl) {
          _this.src({
            src: _this.cache_.source.yospaceUrl,
            type: 'application/yospace'
          });
        } else if (_this.cache_ && _this.cache_.source) {
          _this.src(_this.cache_.source);
        }
      });

      _this.on(empPlayerEvents.FIRST_PLAY, function () {
        log('FIRST_PLAY');

        if (_this.options_.startTime && _this.techName_ === 'Html5') {
          _this.currentTime(_this.options_.startTime);
        }

        _this.options_.startTime = 0;
      });

      _this.initialSeekToAbsoluteStartTimeBind = _this.initialSeekToAbsoluteStartTime_.bind(_assertThisInitialized(_this));
      _this.isCreated = true;

      _this.trigger(empPlayerEvents.PLAYER_CREATED);

      _this.ended_ = false;
      _this.sourceChanging_ = false;
      return _this;
    }
    /**
     * Monkey-Patching text track menu to add CaptionSettingsMenuItem for HLS
     *
     * @private
     */


    var _proto = Player.prototype;

    _proto.monkeyPatchingTextMenu_ = function monkeyPatchingTextMenu_() {
      if (this.controlBar && this.controlBar.subsCapsButton) {
        var originalCreateItems = this.controlBar.subsCapsButton.createItems;
        /* eslint-disable */

        var self = this;
        /* eslint-disable */

        this.controlBar.subsCapsButton.createItems = function () {
          var oriItems = originalCreateItems.apply(this, arguments);
          var items = [];

          for (var ii = 0; ii < oriItems.length; ii++) {
            if (oriItems[ii].track && oriItems[ii].track.label !== '') {
              items.push(oriItems[ii]);
            }
          }

          if (items && items.length > 1 && items[0].name() !== 'CaptionSettingsMenuItem' && self.techName_ === 'EmpHLS' && self.options_.textTrackSettings) {
            items.unshift(new CaptionSettingsMenuItem(this.player_, {
              kind: this.label_
            }));
            this.hideThreshold_ += 1;
          } else if (items && items.length > 1 && items[0].name() === 'CaptionSettingsMenuItem' && self.techName_ === 'EmpDashif') {
            items.shift();
            this.hideThreshold_ -= 1;
          }

          return items;
        };
      } // Bug fix textTracks.onchange event is not firing
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8019792/


      if (IS_EDGE) {
        var textTrackMenuItem = videojs.getComponent('TextTrackMenuItem');

        if (textTrackMenuItem) {
          var originalTextTrackMenuItemHandleClick = textTrackMenuItem.prototype.handleClick;
          /* eslint-disable */

          var _self = this;
          /* eslint-enable */


          textTrackMenuItem.prototype.handleClick = function () {
            originalTextTrackMenuItemHandleClick.apply(this, arguments);

            _self.trigger(empPlayerEvents.TRACK_CHANGE);

            _self.trigger(empPlayerEvents.TEXT_TRACK_CHANGE);
          };
        }
      }
    }
    /**
    * Set/Get The player options
    *
    * @param {Object} obj
    * @return {Object} options
    */
    ;

    _proto.options = function options(obj) {
      if (!obj) {
        return this.options_;
      }

      if (obj.techOrder === 'auto' || Array.isArray(obj.techOrder) && obj.techOrder.length === 1 && obj.techOrder[0] === 'auto') {
        obj.techOrder = Player.AutoTechArray('EmpShaka');
      } else if (obj.techOrder === 'auto-dashif' || Array.isArray(obj.techOrder) && obj.techOrder.length === 1 && obj.techOrder[0] === 'auto-dashif') {
        obj.techOrder = Player.AutoTechArray('EmpDashif');
      } else if (Array.isArray(obj.techOrder)) {
        obj.techOrder = Player.GetValidAutoTechOrder(obj.techOrder);
      }

      if (obj.startTime !== undefined) {
        obj.startTime = parseFloat(obj.startTime) || 0;
      } // absoluteStartTime override startTime


      if (obj.absoluteStartTime !== undefined) {
        obj.startTime = 0;
      }

      this.options_ = videojs.mergeOptions(this.options_, obj);
      return this.options_;
    }
    /**
     * get options to add to tech
     *
     * @return {Object} Tech Options
     * @private
     */
    ;

    _proto.getTechOptions_ = function getTechOptions_() {
      var techOptions = {};
      assign(techOptions, this.options_[this.techName_.toLowerCase()]);
      var playOptions = {
        autoplay: this.options_.autoplay,
        muted: this.options_.muted,
        language: this.options_.language,
        maxBitrate: this.options_.maxBitrate,
        timeShiftDisabled: this.options_.timeShiftDisabled,
        useLastViewedOffset: this.options_.useLastViewedOffset,
        startTime: this.options_.startTime,
        absoluteStartTime: this.options_.absoluteStartTime,
        audioLanguage: this.options_.audioLanguage,
        subtitleLanguage: this.options_.subtitleLanguage,
        liveDelay: this.options_.liveDelay
      };
      assign(techOptions, playOptions);
      return techOptions;
    }
    /**
     * loadTech_
     *
     * @param {string} techName
     * @param {Object} source
     * @private
     */
    ;

    _proto.loadTech_ = function loadTech_(techName, source) {
      var _this2 = this;

      _VjsPlayer.prototype.loadTech_.call(this, techName, source);

      this.on(this.tech_, empPlayerEvents.RECOVERABLE_ASSET_ERROR, this.handleRecoverableError); // If we receive normal error events from the techs, error them trough on the player.

      this.on(this.tech_, empPlayerEvents.ERROR, function (event, error) {
        _this2.player_.error(error);
      });
      this.on(this.tech_, empPlayerEvents.TRACK_CHANGE, function () {
        log('TRACK_CHANGE');

        _this2.player_.trigger(empPlayerEvents.TRACK_CHANGE);
      });
      this.on(this.tech_, empPlayerEvents.DURATION_CHANGE, function () {
        // log('DURATION_CHANGE');
        _this2.player_.trigger(empPlayerEvents.DURATION_CHANGE);
      });
    }
    /**
     * load and play next video/program in the playback queue
     *
     * @return {boolean} True if there was something in the queue
     */
    ;

    _proto.loadNextSource = function loadNextSource() {
      if (this.sourceChanging_) {
        log('loadNextSource ignore sourceChanging');
        return;
      }

      this.sourceChanging_ = true;

      if (this.tech_ && this.tech_.loadNextSource !== undefined) {
        this.techCall_('loadNextSource');
        return true;
      } else if (this.cache_.sources && this.cache_.sources.length > 1) {
        this.cache_.sources.shift();
        this.src(this.cache_.sources);
        return true;
      }

      this.sourceChanging_ = false;
      return false;
    }
    /**
     * set videojs TextTrackStyle or send to Chromecast
     *
     * @param {Object} style
     */
    ;

    _proto.setTextTrackStyle = function setTextTrackStyle(style) {
      if (this.techName_ === 'EmpCast') {
        this.techCall_('sendTextTrackStyle', style);
      } else {
        this.options_.textTrackStyle = style;
        this.trigger(empPlayerEvents.TEXT_TRACK_CHANGE);
      }
    }
    /**
     * Add a asset/program to the playback queue
     *
     * @param {?string} assetId optional
     * @param {?string} channelId optional
     * @param {?string} programId optional
     * @param {?number} startTime optional startTime in unix time (ms)
     */
    ;

    _proto.lineUpAsset = function lineUpAsset(assetId, channelId, programId, startTime) {
      var asset = {
        assetId: assetId,
        programId: programId,
        channelId: channelId
      };

      if (startTime) {
        this.options({
          playFrom: 'beginning',
          absoluteStartTime: startTime
        });
      }

      this.lineupSource({
        type: 'video/emp',
        src: JSON.stringify(asset)
      });
    }
    /**
     * Add video source to the playback queue
     *
     * @param {Tech~SourceObject|Tech~SourceObject[]|string} [source]
     *        A SourceObject, or a string referencing URL to a media source.
     */
    ;

    _proto.lineupSource = function lineupSource(source) {
      if (this.tech_ && this.tech_.lineupSource !== undefined) {
        this.techCall_('lineupSource', source);
        return;
      }

      this.cache_.sources.push(source);
    }
    /**
     * unloadTech
     *
     * @private
     */
    ;

    _proto.unloadTech_ = function unloadTech_() {
      // Don't think we need to remove events, it seems to work.
      this.techName_ = null;

      _VjsPlayer.prototype.unloadTech_.call(this); // bugfix: WARN: Calling addRemoteTextTrack without explicitly setting the "manualCleanup"
      // parameter to`true` is deprecated and default to `false` in future version of video.js


      this.textTracksJson_ = [];
    }
    /**
     * stop playback Unload mediasource, It's resource and time consuming task
     * Try not to call this method
     *
     * @param {Function=} afterStopCallback
     * @private
     */
    ;

    _proto.stop = function stop(afterStopCallback) {
      if (this.analytics) {
        this.analytics().stop();
      }

      if (this.yospace) {
        this.yospace().stop();
      }

      extplayer.stop(this, afterStopCallback);
    }
    /**
     * Get Avalible Techs
     *
     * @param {Object} excludeTechs
     * @return {Array} Avalible Techs
     */
    ;

    _proto.getAvalibleTechs_ = function getAvalibleTechs_(excludeTechs) {
      var techs = this.options_.techOrder.map(function (techName) {
        return techName.charAt(0).toUpperCase() + techName.slice(1);
      }).map(function (techName) {
        return [techName, Tech.getTech(techName)];
      }).filter(function (_ref) {
        var techName = _ref[0],
            tech = _ref[1];

        if (tech && techName !== 'Html5' && techName !== 'EmpCast' && excludeTechs.indexOf(techName) === -1) {
          return tech.isSupported();
        }
      });
      return techs;
    }
    /**
     * Select source based on tech-order or source-order
     * Uses source-order selection if `options.sourceOrder` is truthy. Otherwise,
     * defaults to tech-order selection
     *
     * @param {Array} sources
     *        The sources for a media asset
     *
     * @return {Object|boolean}
     *         Object of source and tech order or false
     *
     * @private
     */
    ;

    _proto.selectSource = function selectSource(sources) {
      var _this3 = this;

      var orgTechOrder = this.options_.techOrder;

      if (this.options_.excludeTechs && this.options_.excludeTechs.length > 0) {
        var techs = this.options_.techOrder.filter(function (techName) {
          if (_this3.options_.excludeTechs.indexOf(techName) === -1) {
            return true;
          }
        });
        this.options_.techOrder = techs;
      }

      var sourceTech = _VjsPlayer.prototype.selectSource.call(this, sources);

      this.options_.techOrder = orgTechOrder;
      return sourceTech;
    }
    /**
     * handleRecoverableError
     *
     * @param {EventTarget~Event} [event]
     * @param {Object} data
     * @private
     */
    ;

    _proto.handleRecoverableError = function handleRecoverableError(event, data) {
      var excludeTechs = [];

      if (this.options_.excludeTechs) {
        excludeTechs = this.options_.excludeTechs.slice(0);
      }

      excludeTechs.push(data.techName);
      var techs = this.getAvalibleTechs_(excludeTechs); // Not for CHROMECAST and not for encrypted streams and tech left to try

      if (data.source && !data.source.licenseServer && (!data.source.keySystems || isEmpty(data.source.keySystems)) && !data.source.protection && !IS_CHROMECAST && techs.length > 0) {
        if (data.error.code !== 6001) {
          log.error('handleRecoverableError', data.techName, data.message);

          if (this.analytics) {
            this.analytics().onError({
              code: data.error.code,
              message: data.message,
              stack: data.error.stack
            });
          }
        }

        if (!this.options_.excludeTechs) {
          this.options_.excludeTechs = [];
        }

        this.options_.excludeTechs.push(data.techName); // If we want to try Dash then we can ship add to excludeTechs and set this.options_.empshaka['streamType'] = null

        if (this.options_.techOrder.length > this.options_.excludeTechs.length) {
          this.error(null);
          this.resetWithoutReload_();

          if (this.hasStarted()) {
            this.options_.autoplay = true;
          }

          this.autoplay(this.options_.autoplay);
          this.options_.absoluteStartTime = this.previousAbsoluteStartTime_;

          if (data.source.assetId) {
            var asset = {
              assetId: data.source.assetId
            };

            _VjsPlayer.prototype.src.call(this, {
              type: 'video/emp',
              src: JSON.stringify(asset)
            });

            return;
          } else if (data.source.channelId) {
            var _asset = {
              channelId: data.source.channelId,
              programId: data.source.programId
            };

            _VjsPlayer.prototype.src.call(this, {
              type: 'video/emp',
              src: JSON.stringify(_asset)
            });

            return;
          }
        }
      }

      if (data.error.code && data.error.message) {
        this.error(data.error);
      } else {
        data.message = data.message || this.localize('Tech error, can\'t recover');
        this.error(new EmpPlayerError(data.message, data.error.code));
      }

      this.resetWithoutReload_();
    }
    /**
     * resetWithoutReload_
     *
     * @private
     */
    ;

    _proto.resetWithoutReload_ = function resetWithoutReload_() {
      if (this.tech_) {
        this.techCall_('reset');
        this.unloadTech_();
      }
    }
    /**
     * Reset and restart form current playhead position
     */
    ;

    _proto.resetAndRestartFormPlayhead = function resetAndRestartFormPlayhead() {
      var program = this.getProgramDetails();

      if (program) {
        extplayer.currentAsset(this, program.assetId, program.programId, program.channelId);
      }

      var startTime = this.getAbsoluteTime();
      log('resetAndRestartFormPlayhead', startTime);
      this.reset();
      this.startResetAndReloadTimer_();
      this.restart(null, startTime);
    }
    /**
     * Returns a list of available bitrates
     *
     * @return {number[]}) Array of available bitrates
     */
    ;

    _proto.bitrates = function bitrates() {
      return extplayer.bitrates(this);
    }
    /**
    * Get/Set bitrate
    *
    * Will always return a bitrate equal to the current video bitrate. However it may change due to dynamic switching.
    *
    * Setting this value disable dynamic switching, and fixes the bitrate as specified.
    * To set a ceiling, but allow it to dynamically switch quality when
    * able use setMaxBitrate instead
    *
    * @param {number} value Bitrate to set
    * @return {number} bitrate when getting
    */
    ;

    _proto.bitrate = function bitrate(value) {
      return extplayer.bitrate(this, value);
    }
    /**
    * Get current bitrate
    *
    * Always returns the current bitrate, unlike bitrate() which returns 0 if ABR is enabled
    *
    * @return {number} bitrate when getting
    */
    ;

    _proto.getBitrate = function getBitrate() {
      return extplayer.getBitrate(this);
    }
    /**
    * select audio track with languageCode (en, sv, de ...) and optional kind
    *
    * @param {string} languageCode
    * @param {string} kind or empty
    */
    ;

    _proto.selectAudioTrack = function selectAudioTrack(languageCode, kind) {
      var audioTracks = this.audioTracks();
      var i = audioTracks.length;

      while (i--) {
        var track = audioTracks[i]; // find the audio track and set it to enabled

        if (track.language === languageCode && !track.enabled) {
          if (!kind || track.kind === kind) {
            track.enabled = true;
          }

          return;
        }
      }
    }
    /**
     * get languageCode for current Audio Track (en, sv, de ...)
     *
     * @return {string} languageCode
     */
    ;

    _proto.getSelectedAudioTrack = function getSelectedAudioTrack() {
      return extplayer.getSelectedAudioTrack(this);
    }
    /**
     * Get all Audio track language codes
     *
     * @return {strings[]} Array of language codes
     */
    ;

    _proto.getAudioTracksLanguages = function getAudioTracksLanguages() {
      var audioTracksLanguages = [];
      var audioTracks = this.audioTracks();

      for (var i = 0; i < audioTracks.length; i++) {
        audioTracksLanguages.push(audioTracks[i].language);
      }

      return audioTracksLanguages;
    }
    /**
    * select text track with languageCode (en, sv, de) and optional kind
    *
    * @param {?string} languageCode or null
    * @param {?string} kind or empty
    */
    ;

    _proto.selectTextTrack = function selectTextTrack(languageCode, kind) {
      languageCode = languageCode && languageCode !== 'None' ? languageCode : null;
      var textTracks = this.textTracks();
      var i = textTracks.length;

      while (i--) {
        var track = textTracks[i]; // find the text track and showing

        if (track.language === languageCode) {
          if (!kind || track.kind === kind) {
            track.mode = 'showing';
          }
        } else if (track.mode !== 'disabled') {
          // disable other tracks
          track.mode = 'disabled';
        }
      } // Bug fix textTracks.onchange event is not firing
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8019792/


      if (this.techName_ === 'EmpHLS' && IS_EDGE) {
        this.trigger(empPlayerEvents.TRACK_CHANGE);
        this.trigger(empPlayerEvents.TEXT_TRACK_CHANGE);
      }
    }
    /**
    * get languageCode for current Text Track (null, en, sv, de ...)
    *
    * @return {?string} languageCode or null
    */
    ;

    _proto.getSelectedTextTrack = function getSelectedTextTrack() {
      return extplayer.getSelectedTextTrack(this);
    }
    /**
     * Hide or Show Text tracks
     *
     * @param {boolean} visible
     */
    ;

    _proto.textTrackVisible = function textTrackVisible(visible) {
      var textTracks = this.textTracks();
      var i = textTracks.length;

      while (i--) {
        var track = textTracks[i];

        if (visible) {
          if (track.mode === 'hidden') {
            track.mode = 'showing';
            return;
          }
        } else if (track.mode === 'showing') {
          track.mode = 'hidden';
        } else if (track.mode !== 'disabled') {
          track.mode = 'disabled';
        }
      }
    }
    /**
     * Is text track is visible
     *
     * @return {boolean} Is the TextTrack Visible
     */
    ;

    _proto.isTextTrackVisible = function isTextTrackVisible() {
      var textTracks = this.textTracks();
      var i = textTracks.length;

      while (i--) {
        var track = textTracks[i];

        if (track.mode === 'showing') {
          return true;
        }
      }

      return false;
    }
    /**
     * Get all text track language codes
     *
     * @return {string[]} Array of language codes
     */
    ;

    _proto.getTextTracksLanguages = function getTextTracksLanguages() {
      var textTracksLanguages = [];
      var textTracks = this.textTracks();

      for (var i = 0; i < textTracks.length; i++) {
        textTracksLanguages.push(textTracks[i].language);
      }

      return textTracksLanguages;
    }
    /**
     * Can Seek To position
     *
     * @param {number} position
     * @return {boolean} Can Seek To
     */
    ;

    _proto.canSeekTo = function canSeekTo(position) {
      return extplayer.canSeekTo(this, position);
    }
    /**
     * Get Contract Restrictions
     *
     * @return {Object} Contract Restrictions
     */
    ;

    _proto.getRestrictions = function getRestrictions() {
      var restrictions = {};
      var entitlement = extplayer.getEntitlement(this);

      if (entitlement) {
        restrictions = {
          minBitrate: entitlement.minBitrate,
          maxBitrate: entitlement.maxBitrate,
          maxResWidth: entitlement.maxResWidth,
          maxResHeight: entitlement.maxResHeight,
          rwEnabled: entitlement.rwEnabled,
          ffEnabled: entitlement.ffEnabled
        };
      }

      return restrictions;
    }
    /**
     * Has the playback started
     *
     * * > **NOTE**: True if paused
     *
     * @return {boolean} Is video playing
     */
    ;

    _proto.isPlaying = function isPlaying() {
      return this.hasStarted();
    }
    /**
     * Is playback a live stream
     *
     * @return {boolean} isLive
     */
    ;

    _proto.isLive = function isLive() {
      return extplayer.isLive(this);
    }
    /**
     * Get the current tech verion
     *
     * @return {string} the version number
     */
    ;

    _proto.techVersion = function techVersion() {
      return extplayer.techVersion(this);
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
      return extplayer.baseCurrentTime(this);
    }
    /**
     * Normally gets the length in time of the video in seconds;
     * in all but the rarest use cases an argument will NOT be passed to the method
     *
     * > **NOTE**: It's the raw duration from the video element
     *
     * > **NOTE**: The video must have started loading before the duration can be
     * known,
     * playing.
     *
     * @fires Player#durationchange
     *
     * @param {number} [seconds]
     *        The duration of the video to set in seconds
     *
     * @return {number}
     *         - The duration of the video in seconds when getting
     */
    ;

    _proto.baseDuration = function baseDuration(seconds) {
      if (seconds === undefined) {
        return extplayer.baseDuration(this);
      }

      _VjsPlayer.prototype.duration.call(this, seconds);
    }
    /**
    * Get or set the video source.
    *
    * @param {Tech~SourceObject|Tech~SourceObject[]|string} [source]
    *        A SourceObject, an array of SourceObjects, or a string referencing
    *        a URL to a media source. It is _highly recommended_ that an object
    *        or array of objects is used here, so that source selection
    *        algorithms can take the `type` into account.
    *
    *        If not provided, this method acts as a getter.
    *
    * @return {string|undefined}
    *         If the `source` argument is missing, returns the current source
    *         URL. Otherwise, returns nothing/undefined.
    */
    ;

    _proto.src = function src(source) {
      var _this4 = this;

      if (typeof source === 'undefined') {
        return this.cache_.src || '';
      }

      if (!this.isCreated) {
        this.one(empPlayerEvents.PLAYER_CREATED, function () {
          _this4.src(source);
        });
        return;
      } // filter out invalid sources and turn our source into
      // an array of source objects


      var sources = filterSource(source); // if a source was passed in then it is invalid because
      // it was filtered to a zero length Array. So we have to
      // show an error

      if (!sources.length) {
        this.setTimeout(function () {
          this.error({
            code: 4,
            message: this.localize(this.options_.notSupportedMessage)
          });
        }, 0);
        return;
      }

      sources.forEach(function (srcobj) {
        if (!srcobj.type) {
          srcobj.type = 'video/emp';
        }
      }); // Throttling the play request

      if (sources[0].type === 'video/emp') {
        // already loading an src, block this for now
        if (this.loadingSrc_) {
          log('load src blocked', source); // saves the last src that comes in

          this.loadNextSrc_ = source;
          return;
        } // Block load src calls for 3 seconds, after that load the last src


        this.loadingSrc_ = setTimeout(function () {
          _this4.loadingSrc_ = null;

          if (_this4.loadNextSrc_) {
            // Call this method
            _this4.src(_this4.loadNextSrc_);
          } // ms of blocking

        }, 3000);
      }

      this.loadNextSrc_ = null;
      log('load src OK');

      if (this.yospace) {
        this.yospace().stop();
      }

      this.options_.excludeTechs = [];

      if (!this.tech_) {
        this.reset();
      }

      this.cache_.currentTime = 0;
      this.cache_.duration = NaN;
      this.error(null); // Keep current program to it start play new

      if (sources[0].type !== 'video/emp') {
        this.stopProgramService();
      }

      if (this.isPlaying()) {
        this.sourceChanging_ = true;
      } // Will start casting if connected


      if (!extplayer.casting(this, sources)) {
        if (sources[0].options) {
          this.options(sources[0].options);
        } // for external dash streams copy options


        if (sources[0].type !== 'video/emp') {
          sources[0].options = this.getTechOptions_();
        } // Start playback


        this.off(empPlayerEvents.LOADED_DATA, this.initialSeekToAbsoluteStartTimeBind);
        this.one(empPlayerEvents.LOADED_DATA, this.initialSeekToAbsoluteStartTimeBind);

        if (sources[0].type === 'application/yospace' && this.yospace) {
          this.yospace().start('VoD', sources[0].src).then(function (mediaLocator) {
            log('yospace mediaLocator returned', mediaLocator);

            _this4.options_.excludeTechs.push('EmpShaka');

            _this4.options_.excludeTechs.push('EmpDashif');

            sources[0] = {
              src: mediaLocator,
              type: 'application/x-mpegURL',
              yospaceUrl: sources[0].src
            };

            _VjsPlayer.prototype.src.call(_this4, sources);
          }).catch(function (errMsg) {
            _this4.error(errMsg);
          });
          return;
        }

        return _VjsPlayer.prototype.src.call(this, sources);
      }
    }
    /**
     *
     * Reset the tech by removing all sources and then calling
     * {@link Html5.resetMediaElement}.
     */
    ;

    _proto.reset = function reset() {
      this.clearResetAndReloadTimer_();
      this.hasStarted(false);

      _VjsPlayer.prototype.reset.call(this);
    }
    /**
     *  clearResetAndReloadTimer_
     *
     *  @private
     */
    ;

    _proto.clearResetAndReloadTimer_ = function clearResetAndReloadTimer_() {
      if (this.resetAndReloadTimer_) {
        log('clearResetAndReloadTimer');
        clearInterval(this.resetAndReloadTimer_);
        this.resetAndReloadTimer_ = null;
      }
    }
    /**
     *  startResetAndReloadTimer_ use to fix memory issue when play long time
     *
     *  @private
     */
    ;

    _proto.startResetAndReloadTimer_ = function startResetAndReloadTimer_() {
      var _this5 = this;

      if (!IS_CHROMECAST || !this.hasStarted()) {
        this.clearResetAndReloadTimer_();
        log('startResetAndReloadTimer');

        if (this.options_.resetAndReloadLive !== false) {
          // Disable resetAndReloadLive
          var time = 120;

          if (this.options_.resetAndReloadLive) {
            // Use resetAndReloadLive config
            time = this.options_.resetAndReloadLive > 1 ? this.options_.resetAndReloadLive : 1;
          } else if (IS_CHROMECAST) {
            // reset and reload CC every 2 hour
            time = 120;
          } else {
            // reset and reload Web every 6 hour
            time = 120 * 3;
          }

          this.resetAndReloadTimer_ = this.setTimeout(function () {
            _this5.clearResetAndReloadTimer_();

            if (_this5.isLive() && _this5.streamType === 'DASH') {
              _this5.resetAndRestartFormPlayhead();
            }
          }, time * 1000 * 60);
        }
      }
    }
    /**
     * initialSeekToAbsoluteStartTime_
     *
     * @private
     */
    ;

    _proto.initialSeekToAbsoluteStartTime_ = function initialSeekToAbsoluteStartTime_() {
      var entitlement = extplayer.getEntitlement(this); // dash and hls live streams have different stream startTime and different currentTime
      // absoluteStartTime is slower, use startTime in the most cases

      if (this.options_.absoluteStartTime && this.timeShiftEnabled()) {
        this.setAbsoluteTime(new Date(this.options_.absoluteStartTime));
        this.previousAbsoluteStartTime_ = this.options_.absoluteStartTime;
        this.options_.absoluteStartTime = undefined;
      } else if (this.options_.useLastViewedOffset && entitlement && !this.isLive() && this.streamType === 'DASH' && entitlement.lastViewedOffset) {
        // Seek to lastViewedOffset, can't use startTime with Shaka if stream not dashed
        this.currentTime(entitlement.lastViewedOffset / 1000);
      }
    }
    /**
     * Set Max Bitrate
     *
     * @param {number} bitrate
     */
    ;

    _proto.setMaxBitrate = function setMaxBitrate(bitrate) {
      this.options_.maxBitrate = bitrate;

      if (!this.tech_ || this.tech_.setMaxBitrate === undefined) {
        return;
      }

      this.techCall_('setMaxBitrate', bitrate);
    }
    /**
     * Get Max Bitrate
     *
     * @return {number} Max Bitrate
     */
    ;

    _proto.getMaxBitrate = function getMaxBitrate() {
      if (!this.tech_ || this.tech_.getMaxBitrate === undefined) {
        return 0;
      }

      return this.techGet_('getMaxBitrate');
    }
    /**
     * Set / Get timeShift disable
     *
     *> **NOTE**: For backward compatibility, use timeShiftEnabled.
     *
     * @param {boolean} value true=disable false=enabled
     * @return {boolean} true if timeShift is disable
     */
    ;

    _proto.disableTimeShift = function disableTimeShift(value) {
      if (!this.tech_ || this.tech_.disableTimeShift === undefined) {
        return false;
      }

      if (value !== undefined) {
        if (value === false && !this.canEnableTimeshift()) {
          return !extplayer.timeShiftEnabled(this);
        }

        this.techCall_('disableTimeShift', value); // tech should decide if it can enable timeShift

        var isEnabled = extplayer.timeShiftEnabled(this);

        if (isEnabled === undefined) {
          this.options_.timeShiftDisabled = value;
        } else {
          this.options_.timeShiftDisabled = !isEnabled;
        }

        this.trigger(empPlayerEvents.TIMESHIFT_CHANGE, {
          timeShiftDisabled: this.options_.timeShiftDisabled
        });
        return this.options_.timeShiftDisabled;
      }

      return !extplayer.timeShiftEnabled(this);
    }
    /**
     * Can timeShift be enabled according to contract restriction
     *
     * @return {boolean} Can Enable Timeshift
     */
    ;

    _proto.canEnableTimeshift = function canEnableTimeshift() {
      var entitlement = extplayer.getEntitlement(this);

      if (entitlement && entitlement.timeshiftEnabled === false) {
        return false;
      }

      return true;
    }
    /**
     * Get or Set timeShiftEnabled
     *
     * @param {boolean} value
     * @return {boolean} is timeShift enabled
     */
    ;

    _proto.timeShiftEnabled = function timeShiftEnabled(value) {
      if (value !== undefined) {
        this.disableTimeShift(!value);
      } else {
        return extplayer.timeShiftEnabled(this);
      }
    }
    /**
     * No EPG for current program
     *
     * @return {boolean} current program has no EPG
     */
    ;

    _proto.noEPG = function noEPG() {
      if (!this.getProgramDetails()) {
        var entitlement = extplayer.getEntitlement(this);

        if (!entitlement) {
          return true;
        }

        return entitlement && (entitlement.isDynamicCachupAsLive || entitlement.isStaticCachupAsLive);
      }

      return false;
    }
    /**
     * Can video or program restart from begining
     *
     * @return {boolean} Can Restart
     */
    ;

    _proto.canRestart = function canRestart() {
      var entitlement = extplayer.getEntitlement(this);

      if (!entitlement) {
        return true;
      }

      if (this.noEPG()) {
        return false;
      }

      return extplayer.canRestart(this);
    }
    /**
     * Restart the program from beginning or with LastViewedOffset
     *
     * @param {?boolean}  useLastViewedOffset optional start from last viewed offset
     * @param {?number} startTime optional startTime in unix time (ms)
     */
    ;

    _proto.restart = function restart(useLastViewedOffset, startTime) {
      extplayer.restart(this, useLastViewedOffset, startTime);
    }
    /**
     * Set the player in error state or clear error with null
     *
     * @param {Object | string} err The error or null for clear error
     * @return {Object | string} The current Error
     */
    ;

    _proto.error = function error(err) {
      if (err === undefined) {
        return this.error_ || null;
      } // restoring to default


      if (err === null) {
        _VjsPlayer.prototype.error.call(this, err);

        return;
      }

      if (this.error_ && err && err.code === 4) {
        // secondary fault use first one
        return this.error_;
      }

      if (err && isString(err)) {
        err = new EmpPlayerError(err);
      } else if (isObject(err) && !err.code) {
        err.code = EmpPlayerErrorCodes.UNKNOWN;
      }

      if (isObject(err) && this.cache_.sources && this.cache_.sources.length > 1) {
        log.error(err);
        this.loadNextSource();
        return err;
      }

      return this.videojsError_(err);
    }
    /**
     * videojs base error patched
     *
     * @param {Object | string} err The error or null for clear error
     * @return {Object | string} The current Error
     *
     * @private
     */
    ;

    _proto.videojsError_ = function videojsError_(err) {
      if (err === undefined) {
        return this.error_ || null;
      } // restoring to default


      if (err === null) {
        this.error_ = err;
        this.removeClass('vjs-error');

        if (this.errorDisplay) {
          this.errorDisplay.close();
        }

        return;
      }

      this.error_ = new MediaError(err); // add the vjs-error classname to the player

      this.addClass('vjs-error'); // log the name of the error type and any message
      // ie8 just logs "[object object]" if you just log the error object

      var errorTypes = '';

      if (MediaError.errorTypes.hasOwnProperty(this.error_.code)) {
        errorTypes = MediaError.errorTypes[this.error_.code];
      }

      log.error('(CODE:' + this.error_.code + ' ' + errorTypes + ')', this.error_.message, this.error_);
      this.trigger({
        type: empPlayerEvents.ERROR,
        bubbles: true
      }, this.error_);
      return;
    }
    /**
     * Get current Error
     *
     * @return {Object} Error object
     */
    ;

    _proto.getError = function getError() {
      return this.error_;
    }
    /**
     * Set the playheadTime as a Date
     *
     * @param {Date} date
     */
    ;

    _proto.setAbsoluteTime = function setAbsoluteTime(date) {
      extplayer.setAbsoluteTime(this, date);
    }
    /**
     * Get the playheadTime as a Date
     *
     * @return {Date} playheadTime
     */
    ;

    _proto.getAbsoluteTime = function getAbsoluteTime() {
      return extplayer.getAbsoluteTime(this);
    }
    /**
     * Set / Get the play head time unix time (ms)
     *
     * @param {number} unixTime
     * @return {number} playheadTime
     */
    ;

    _proto.playheadTime = function playheadTime(unixTime) {
      if (unixTime === undefined) {
        return extplayer.getPlayheadTime(this);
      }

      extplayer.setPlayheadTime(this, unixTime);
    }
    /**
    * Sets analytics custom attributes
    *
    * @param {string}      key   Attribute name
    * @param {string=}     value Attribute value
    */
    ;

    _proto.setAnalyticsCustomAttribute = function setAnalyticsCustomAttribute(key, value) {
      if (!this.options_.analytics) {
        this.options_.analytics = {};
      }

      if (!this.options_.analytics.customAttributes) {
        this.options_.analytics.customAttributes = [];
      }

      this.options_.analytics.customAttributes.push({
        key: key,
        value: value
      });
    }
    /**
      * Load an asset for playback
      *
      * @param {string}      assetId   Identifier of the asset or channel to load
      * @param {string=}     programId (optional) Identifier of the program to load
      * @param {Function=}   callback  Callback when entitlement request has completed
      * @deprecated since version 1, use startPlayback() or src() instead
      */
    ;

    _proto.loadAsset = function loadAsset(assetId, programId, callback) {
      if (callback === void 0) {
        callback = function callback() {};
      }

      log.warn('loadAsset() has been deprecated with new US a/v pipe use startPlayback() or src() instead');
      this.options({
        playFrom: undefined
      });

      if (!assetId && programId) {
        log.error('loadAsset: with only programId is not supported');
        callback();
        return;
      }

      extplayer.loadAsset(this, programId ? undefined : assetId, programId, programId ? assetId : undefined, callback);
    }
    /**
     * Load an asset for playback
     *
     * @param {any} assetId   Identifier of the asset to load (VOD, Channel or Program)
     * @param {any} playbackProperties (optional) Playback properties
     */
    ;

    _proto.startPlaybackV2 = function startPlaybackV2(assetId, playbackProperties) {
      this.startPlayback(assetId, '', '', playbackProperties);
    }
    /**
     * Load an asset for playback
     *
     * @param {any} assetId   Identifier of the asset to load (VOD, Channel or Program)
     * @param {any} channelId (optional) Identifier of the channel to load
     * @param {any} programId (optional) Identifier of the program to load (channelId is mandatory with programId)
     * @param {any} playbackProperties (optional) Playback properties
     */
    ;

    _proto.startPlayback = function startPlayback(assetId, channelId, programId, playbackProperties) {
      if (!playbackProperties) {
        playbackProperties = {};
      }

      if (!assetId && !channelId && !programId) {
        log.error('startPlayback: assetId or channelId or programId is undefined');
        return;
      }

      if (!assetId && !channelId && programId) {
        log.error('startPlayback: with only programId is not supported');
        return;
      }

      if (!playbackProperties.playFrom) {
        playbackProperties.playFrom = 'defaultBehaviour';
      }

      var options = {
        playFrom: playbackProperties.playFrom,
        autoplay: true
      };

      if (playbackProperties.autoplay !== undefined) {
        options.autoplay = playbackProperties.autoplay;
      }

      if (options.autoplay) {
        this.autoplay(options.autoplay);
      }

      if (playbackProperties.startTime && playbackProperties.playFrom === 'startTime') {
        options.absoluteStartTime = playbackProperties.startTime;
        this.options_.useLastViewedOffset = false;
      } else {
        options.absoluteStartTime = undefined;
      }

      if (playbackProperties.startOffset !== undefined) {
        options.startTime = playbackProperties.startOffset / 1000;
      } else {
        options.startTime = 0;
      }

      options.useLastViewedOffset = playbackProperties.playFrom === 'bookmark' || this.options_.useLastViewedOffset === true;
      this.options(options);
      extplayer.loadAsset(this, assetId, programId, channelId);
    }
    /**
    * Plays an entitlement
    *
    * Automatically select a playback tech based on the entitlement and prepares playback.
    *
    * @param {Object} entitlement Entitlement returned from entitlementengine
    */
    ;

    _proto.playEntitlement = function playEntitlement(entitlement) {
      if (entitlement && isObject(entitlement)) {
        entitlement.type = 'video/emp';

        _VjsPlayer.prototype.src.call(this, entitlement);
      } else {
        log.error('Call playEntitlement without entitlement');
      }
    }
    /**
     * seconds behinde live edge
     *
     * @return {number} timeBehindLive
     */
    ;

    _proto.timeBehindLive = function timeBehindLive() {
      return extplayer.timeBehindLive(this);
    }
    /**
     * get live delay, how many seconds player live edge differ fom server time
     *
     * @return {number} live delay in seconds
     */
    ;

    _proto.liveDelay = function liveDelay() {
      return extplayer.liveDelay(this);
    }
    /**
     * The unix time (ms) when stream was started
     *
     * @return {number} Start Time Live
     */
    ;

    _proto.startTimeLive = function startTimeLive() {
      return extplayer.startTimeLive(this);
    }
    /**
     * The time (s) the live stream has drifted
     *
     * @return {number} drifting Time or NaN
     */
    ;

    _proto.driftingTime = function driftingTime() {
      return extplayer.driftingTime(this);
    }
    /**
     * Get Current Tech Name
     *
     * @return {string} Current Tech Name
     */
    ;

    _proto.getCurrentTechName = function getCurrentTechName() {
      return this.techName_;
    }
    /**
     * Get version
     *
     * @return {string} version number
     */
    ;

    /**
     * Get current Exposure
     *
    * @return {Exposure} Exposure
    */
    _proto.getExposure = function getExposure() {
      if (this.programService) {
        return this.programService().exposure;
      }

      return null;
    }
    /**
    * Sync localtime with servertime
     *
    * @param {Function=}  callback  Callback when localtime sync with servertime or an error occurs
    */
    ;

    _proto.syncServerTime = function syncServerTime(callback) {
      if (this.programService) {
        var exposure = this.programService().exposure;

        if (exposure) {
          exposure.syncServerTime(callback);
          return;
        }
      }

      var errMsg = 'No programService or No exposure';
      log.error(errMsg);

      if (callback) {
        callback(0, errMsg);
      }
    }
    /**
    * Stop the Program Service
    */
    ;

    _proto.stopProgramService = function stopProgramService() {
      if (this.programService) {
        this.programService().reset();
      }
    }
    /**
     * Start the Program Service
     */
    ;

    _proto.startProgramService = function startProgramService() {
      if (this.programService) {
        this.programService().start();
      }
    }
    /**
     * Supports Epg Program Change
     *
     * > **NOTE**: For backward compatibility only.
     *
     * @return {boolean} True if programService is available
     */
    ;

    _proto.supportsEpgProgramChange = function supportsEpgProgramChange() {
      return this.programService !== undefined;
    }
    /**
     * Get Server Now Time
     *
     * @return {number} ServerTime
     */
    ;

    _proto.getServerTime = function getServerTime() {
      return extplayer.getServerTime(this);
    }
    /**
     * getProgram
     *
     * > **NOTE**: For backward compatibility only.
     *
     * @param {Function=} callback Callback with the program
     * @deprecated since version 1 use getProgramDetails instead
     */
    ;

    _proto.getProgram = function getProgram(callback) {
      if (this.programService) {
        var program = this.getProgramDetails();
        callback(program, program ? null : 'No EPG for program');
      }
    }
    /**
     * Get Program Details
     *
     * @return {Object} Program Details
     */
    ;

    _proto.getProgramDetails = function getProgramDetails() {
      if (extplayer.supportsEpgProgramChange(this)) {
        return extplayer.program(this);
      }

      if (this.programService) {
        return this.programService().currentProgram;
      }
    }
    /**
     * Get Asset/VOD Details
     *
     * @return {Object} Asset/VOD Details
     */
    ;

    _proto.getAssetDetails = function getAssetDetails() {
      if (this.tech_ && this.tech_.VOD) {
        return this.techGet_('VOD');
      }

      if (this.programService) {
        return this.programService().currentVOD;
      }
    }
    /**
    * Get a unix time (ms) `TimeRange` object for seekable range.
    *
    * @return {TimeRange} The time range object.
    */
    ;

    _proto.getSeekTimerange = function getSeekTimerange() {
      return extplayer.getSeekTimerange(this);
    }
    /**
    * Get a unix time (ms) `TimeRange` object for buffering.
    *
    * @return {TimeRange} The time range object.
    */
    ;

    _proto.getBufferedTimerange = function getBufferedTimerange() {
      return extplayer.getBufferedTimerange(this);
    }
    /**
     * Get StreamType (DASH OR HLS)
     *
     * @return {string} StreamType
     */
    ;

    /**
    * Get or set the current time (in seconds) for the program or video
    *
    * @param {number|string} [seconds]
    *        The time to seek to in seconds
    *
    * @return {number}
    *         - the current time in seconds when getting
    */
    _proto.currentTime = function currentTime(seconds) {
      var entitlement = extplayer.getEntitlement(this);

      if (entitlement && (entitlement.isDynamicCachupAsLive || entitlement.isStaticCachupAsLive) && this.techName_ !== 'EmpCast') {
        if (typeof seconds !== 'undefined') {
          var _program = this.getProgramDetails();

          if (_program) {
            if (seconds < 1 && seconds > -1) {
              seconds = 1;
            }

            var start = new Date(_program.startTime);

            if (entitlement.isStaticCachupAsLive || this.streamType === 'HLS') {
              var t = entitlement.streamInfo;
              seconds = seconds + (start.getTime() - t.start.getTime()) / 1000;

              if (seconds <= 0) {
                seconds = 0; // log('currentTime', 'playPreviousProgram');

                extplayer.playPreviousProgram(this, true);
                return;
              }
            } else {
              seconds = seconds + start.getTime() / 1000;

              if (seconds * 1000 <= entitlement.streamInfo.start.getTime()) {
                seconds = entitlement.streamInfo.start.getTime() / 1000 + 1; // log('currentTime', 'playPreviousProgram');

                extplayer.playPreviousProgram(this, true);
                return;
              }
            }
          }

          if (seconds < 0) {
            seconds = 0;
          }

          this.techCall_('setCurrentTime', seconds);
          return;
        } // cache last currentTime and return. default to 0 seconds
        //
        // Caching the currentTime is meant to prevent a massive amount of reads on the tech's
        // currentTime when scrubbing, but may not provide much performance benefit afterall.
        // Should be tested. Also something has to read the actual current time or the cache will
        // never get updated.


        var currentTime = this.techGet_('currentTime') || 0;
        var program = this.getProgramDetails();

        if (program && currentTime > 1) {
          var _start = new Date(program.startTime);

          if (entitlement.isStaticCachupAsLive || this.streamType === 'HLS') {
            var _t = entitlement.streamInfo;
            currentTime = currentTime - (_start.getTime() - _t.start.getTime()) / 1000;
          } else {
            currentTime = currentTime - _start.getTime() / 1000;
          }
        } else if (!program) {
          // Don't show progressbar
          this.duration(Infinity); // log('currentTimeN', this.hasClass('vjs-live'));
        }

        if (!this.scrubbing()) {
          this.cache_.currentTime = currentTime;
        }

        return this.cache_.currentTime;
      }

      if (typeof seconds !== 'undefined') {
        if (entitlement && (entitlement.isDynamicCachupAsLive || entitlement.isStaticCachupAsLive) && this.techName_ === 'EmpCast') ; else {
          seconds = seconds < 0 ? 0 : seconds;
        }

        this.techCall_('setCurrentTime', seconds);
        return;
      }

      if (!this.scrubbing()) {
        this.cache_.currentTime = this.techGet_('currentTime') || 0;
      }

      return this.cache_.currentTime;
    }
    /**
     * Gets the length in time of the video or program in seconds;
     * in all but the rarest use cases an argument will NOT be passed to the method
     *
     * > **NOTE**: The video must have started loading before the duration can be
     * known.
     *
     * @fires Player#durationchange
     *
     * @param {number} [seconds]
     *        The duration of the video to set in seconds
     *
     * @return {number}
     *         - The duration of the video in seconds when getting
     */
    ;

    _proto.duration = function duration(seconds) {
      var entitlement = extplayer.getEntitlement(this);

      if (entitlement && (entitlement.isDynamicCachupAsLive || entitlement.isStaticCachupAsLive) && this.techName_ !== 'EmpCast') {
        if (seconds !== undefined) {
          var _program2 = this.getProgramDetails();

          if (_program2 && seconds !== Infinity) {
            var start = new Date(_program2.startTime);

            if (entitlement.isStaticCachupAsLive || this.streamType === 'HLS') {
              var t = entitlement.streamInfo;
              seconds = seconds - (start.getTime() - t.start.getTime()) / 1000;
            } else {
              seconds = seconds - start.getTime() / 1000;
            }
          }

          if (this.noEPG()) {
            seconds = Infinity;
            this.addClass('vjs-live');
          } // log('set duration', seconds);


          _VjsPlayer.prototype.duration.call(this, seconds);

          return;
        } // seconds === undefined


        var duration = this.techGet_('duration');
        var program = this.getProgramDetails();

        if (program && duration !== Infinity) {
          duration = program.duration / 1000;
        }

        if (this.noEPG()) {
          duration = Infinity;
          this.addClass('vjs-live');
        }

        this.cache_.duration = duration;
        return duration;
      }

      _VjsPlayer.prototype.duration.call(this, seconds);

      return this.techGet_('duration');
    }
    /**
    * Get a program related `TimeRange` object for seekable range.
    *
    * @return {TimeRange} The time range object.
    */
    ;

    _proto.seekable = function seekable() {
      var range = _VjsPlayer.prototype.seekable.call(this);

      if (this.techName_ !== 'EmpCast') {
        return this.getRange_(range);
      }

      return range;
    }
    /**
     * Get a program related `TimeRange` object for buffering.
     *
     * @return {TimeRange} The time range object.
     */
    ;

    _proto.buffered = function buffered() {
      var range = _VjsPlayer.prototype.buffered.call(this);

      if (this.techName_ !== 'EmpCast') {
        return this.getRange_(range);
      }

      return range;
    }
    /**
     * getRange_
     *
     * @param {Object} range
     * @return {Object} TimeRanges
     * @private
     */
    ;

    _proto.getRange_ = function getRange_(range) {
      var entitlement = extplayer.getEntitlement(this);

      if (this.seeking() || !range) {
        return createTimeRanges(0, 0);
      }

      if (range.length > 0) {
        if (entitlement && (entitlement.isDynamicCachupAsLive || entitlement.isStaticCachupAsLive)) {
          var program = this.getProgramDetails();

          if (program) {
            var programStart = new Date(program.startTime);
            var t = entitlement.streamInfo;
            var startRange = range.start(range.length - 1);
            var endRange = range.end(range.length - 1);

            if (endRange) {
              if (entitlement.isStaticCachupAsLive || this.streamType === 'HLS') {
                startRange = startRange - (programStart.getTime() - t.start.getTime()) / 1000;
                endRange = endRange - (programStart.getTime() - t.start.getTime()) / 1000;
                range = createTimeRanges(startRange > 0 ? startRange : 0, endRange > this.duration() ? this.duration() : endRange);
              } else if (entitlement.isDynamicCachupAsLive) {
                startRange = startRange - programStart.getTime() / 1000;
                endRange = endRange - programStart.getTime() / 1000;
                var liveDuration = this.getGrowingLiveDuration();
                range = createTimeRanges(startRange > 0 ? startRange : 0, endRange > liveDuration ? liveDuration : endRange);
              }
            }
          }
        }
      }

      return range;
    }
    /**
     * Get a growing (program based) live duration
     *
     * @return {number}  - The duration of the video in seconds when getting
     */
    ;

    _proto.getGrowingLiveDuration = function getGrowingLiveDuration() {
      var entitlement = extplayer.getEntitlement(this);
      var duration = this.duration();
      var program = this.getProgramDetails();

      if (program && duration !== Infinity && entitlement && entitlement.isDynamicCachupAsLive) {
        var nowDate = this.getServerTime();
        var end = new Date(program.endTime).getTime();

        if (nowDate < end) {
          // live
          duration = this.techGet_('duration');

          if (duration !== Infinity) {
            var t = entitlement.streamInfo;

            if (this.streamType === 'HLS') {
              duration = (t.start.getTime() + duration * 1000 - program.start.getTime()) / 1000;
            } else {
              duration = (duration * 1000 - program.start.getTime()) / 1000;
            }
          }
        } else {
          duration = program.duration / 1000;
        }
      }

      return duration;
    }
    /**
     * Get remaining time of the program/vod
     *
     * @return {number} remaining time
     */
    ;

    _proto.remainingTime = function remainingTime() {
      var entitlement = extplayer.getEntitlement(this);
      var time = 0;

      if (entitlement && (entitlement.isDynamicCachupAsLive || entitlement.isStaticCachupAsLive) && this.techName_ !== 'EmpCast') {
        var duration = this.duration();

        if (duration === Infinity || duration === 0) {
          return Infinity;
        }

        time = duration - this.currentTime();
      } else {
        time = extplayer.remainingTime(this);
      }

      if (time < 0) {
        time = 0;
      }

      return Math.round(time);
    }
    /**
     * Jump to the live edge
     */
    ;

    _proto.gotoLive = function gotoLive() {
      extplayer.gotoLive(this);
    }
    /**
     * Play Previous Program
     *
     * @param {boolean} end If it should play 30 sec from the end
     */
    ;

    _proto.playPreviousProgram = function playPreviousProgram(end) {
      var _this6 = this;

      if (this.sourceChanging_) {
        log('playPreviousProgram ignore sourceChanging');
        return;
      }

      if (this.tech_.playPreviousProgram) {
        this.techCall_('playPreviousProgram', end);
      } else {
        var entitlement = extplayer.getEntitlement(this);

        if (this.programService && (entitlement.isStaticCachupAsLive || entitlement.isDynamicCachupAsLive) && entitlement.rwEnabled) {
          this.programService().getPreviousProgram(function (program, error) {
            if (error) {
              log.warn('playPreviousProgram', error);
            } else if (end) {
              _this6.playheadTime(program.end.getTime() - 30000);
            } else {
              _this6.playheadTime(program.start.getTime() + 1000);
            }
          });
        } else {
          extplayer.playPreviousProgram(this);
        }
      }
    }
    /**
     * Play Next Program
    */
    ;

    _proto.playNextProgram = function playNextProgram() {
      if (this.sourceChanging_) {
        log('playNextProgram ignore sourceChanging');
        return;
      }

      if (this.tech_.playNextProgram) {
        this.techCall_('playNextProgram');
      } else {
        var entitlement = extplayer.getEntitlement(this);
        var program = this.getProgramDetails();

        if (program && (entitlement.isStaticCachupAsLive || entitlement.isDynamicCachupAsLive) && entitlement.ffEnabled) {
          this.playheadTime(program.end.getTime() + 1000);
        } else {
          extplayer.playNextProgram(this);
        }
      }
    }
    /**
     * Is the playing program live
     *
     * @return {boolean} is Program Live
     */
    ;

    _proto.isProgramLive = function isProgramLive() {
      var program = this.getProgramDetails();

      if (program) {
        return program.end.getTime() > this.getServerTime();
      }

      return this.isLive();
    }
    /**
     * Is the playing program a Catchup
     *
     * @return {boolean} Is program a catchup
     */
    ;

    _proto.isProgramCatchup = function isProgramCatchup() {
      var entitlement = extplayer.getEntitlement(this);

      if (entitlement) {
        return entitlement.isStaticCachupAsLive || !this.isProgramLive() && entitlement.isDynamicCachupAsLive;
      }

      return !this.isLive();
    }
    /**
     * Get current video source asset object
     *
     * @return {Object} video source asset object { 'assetId': assetId, 'programId': programId, 'channelId': channelId }
     */
    ;

    _proto.currentAsset = function currentAsset() {
      return extplayer.currentAsset(this);
    }
    /**
     * Check if video has ended
     *
     * @return {boolean}  true if Video has ended
     */
    ;

    _proto.ended = function ended() {
      return this.ended_;
    }
    /**
    * handleTechWaiting, filter if no real buffering
     *
    * @private
    */
    ;

    _proto.handleTechWaiting_ = function handleTechWaiting_() {
      var _this7 = this;

      if (this.hasStarted() && !this.ended() && !this.paused() && !this.hasClass('vjs-waiting')) {
        this.playheadMoving_(function (moving) {
          // log('playheadMoving', moving);
          if (!moving) {
            _this7.addClass('vjs-waiting');

            _this7.trigger(empPlayerEvents.WAITING);

            _this7.removeWaitingClass_();
          }
        });
      }
    }
    /**
     * remove vjs-waiting class
     *
     * @private
     */
    ;

    _proto.removeWaitingClass_ = function removeWaitingClass_() {
      var _this8 = this;

      this.one('timeupdate', function () {
        // log('playheadMoving off', this.prePlayheadTime_, this.playheadTime(), this.playheadTime() - this.prePlayheadTime_);
        if (_this8.playheadTime() - _this8.prePlayheadTime_ > 1 || _this8.playheadTime() - _this8.prePlayheadTime_ < -1) {
          // log('playheadMoving off', true);
          _this8.prePlayheadTime_ = 0;

          _this8.removeClass('vjs-waiting'); // edgeIELoadingBugWorkaround_(); Add if need


          if (_this8.paused()) {
            _this8.trigger(empPlayerEvents.PAUSE);
          } else {
            _this8.trigger(empPlayerEvents.PLAYING);
          }
        } else {
          _this8.removeWaitingClass_();
        }
      });
    }
    /*
    //Temporary bug fix to overcome shaka bug in IE/Edge where the loading spinner never disapears after seek occurs.
    edgeIELoadingBugWorkaround_() {
      this.on(EmpPlayerEvents.SEEKED, () => {
        var loadings = document.getElementsByClassName('vjs-waiting');
        [].forEach.call(loadings, function (loadingEl) {
          if (loadingEl && loadingEl.classList) {
            loadingEl.classList.remove('vjs-waiting');
          }
        });
      });
    }
    */

    /**
    * Check if playhead is moving
     *
    * @param {Function=} callback moving callback
    * @private
    */
    ;

    _proto.playheadMoving_ = function playheadMoving_(callback) {
      if (this.playheadMovingTimer_) {
        clearInterval(this.playheadMovingTimer_);
        this.playheadMovingTimer_ = null;
      }

      this.prePlayheadTime_ = this.playheadTime();
      this.playheadMovingTimer_ = this.setTimeout(function () {
        // log('playheadMoving', this.prePlayheadTime_, this.playheadTime(), this.playheadTime() - this.prePlayheadTime_);
        callback(this.playheadTime() - this.prePlayheadTime_ > 200 || this.playheadTime() - this.prePlayheadTime_ < -200);
      }, 2000);
    }
    /**
    * Retrigger the `canplay` event that was triggered by the {@link Tech}.
    * > Note: This is not consistent between browsers. See #1351
    *
    * @fires Player#canplay
    * @listens Tech#canplay
    * @private
    */
    ;

    _proto.handleTechCanPlay_ = function handleTechCanPlay_() {
      if (!this.prePlayheadTime_) {
        this.removeClass('vjs-waiting');
      }
      /**
       * The media has a readyState of HAVE_FUTURE_DATA or greater.
       *
       * @event Player#canplay
       * @type {EventTarget~Event}
       */


      this.trigger(empPlayerEvents.CAN_PLAY);
    }
    /**
     * Retrigger the `canplaythrough` event that was triggered by the {@link Tech}.
     *
     * @fires Player#canplaythrough
     * @listens Tech#canplaythrough
     * @private
     */
    ;

    _proto.handleTechCanPlayThrough_ = function handleTechCanPlayThrough_() {
      if (!this.prePlayheadTime_) {
        this.removeClass('vjs-waiting');
      }
      /**
       * The media has a readyState of HAVE_ENOUGH_DATA or greater. This means that the
       * entire media file can be played without buffering.
       *
       * @event Player#canplaythrough
       * @type {EventTarget~Event}
       */


      this.trigger(empPlayerEvents.CAN_PLAY_THROUGH);
    }
    /**
     * Retrigger the `playing` event that was triggered by the {@link Tech}.
     *
     * @fires Player#playing
     * @listens Tech#playing
     * @private
     */
    ;

    _proto.handleTechPlaying_ = function handleTechPlaying_() {
      if (!this.prePlayheadTime_) {
        this.removeClass('vjs-waiting');
      }

      this.sourceChanging_ = false;
      /**
       * The media is no longer blocked from playback, and has started playing.
       *
       * @event Player#playing
       * @type {EventTarget~Event}
       */

      this.trigger(empPlayerEvents.PLAYING);
    }
    /**
     * Video Source is changing
     *
     * @return {boolean}  true if video source is changing
     */
    ;

    _proto.sourceChanging = function sourceChanging() {
      return this.sourceChanging_;
    }
    /**
     * Check if player is casting to Chromecast
     *
     * @return {boolean}  true if casting
     */
    ;

    _proto.isCasting = function isCasting() {
      return this.techName_ === 'EmpCast';
    };

    _createClass(Player, [{
      key: "version",
      get: function get() {
        return '2.1.101-324';
      }
      /**
       * Get entitlement
       *
      * @return {Entitlement} current entitlement
      */

    }, {
      key: "entitlement",
      get: function get() {
        var entitlement = extplayer.getEntitlement(this); // Clone entitlement

        if (entitlement) {
          entitlement = assign({}, entitlement);
          entitlement.options = undefined;
        }

        return entitlement;
      }
    }, {
      key: "streamType",
      get: function get() {
        if (this.tech_) {
          return this.tech_.streamType;
        }

        return undefined;
      }
    }]);

    return Player;
  }(VjsPlayer);
  /**
   * Get AutoTechArray
   *
   * @param {string} chosenDashTech choice of dash tech
   * @return {string[]} AutoTechArray
   *  @static
   */


  Player.AutoTechArray = function (chosenDashTech) {
    var dashTech1 = Tech.techs_.hasOwnProperty('EmpShaka');
    var dashTech2 = Tech.techs_.hasOwnProperty('EmpDashif');

    if (dashTech1 && dashTech2) ; else if (dashTech1) {
      chosenDashTech = 'EmpShaka';
    } else {
      chosenDashTech = 'EmpDashif';
    }

    var autoTechOrder = [chosenDashTech, 'EmpHLS-MSE', 'EmpHLS', 'Html5'];

    if (Player.SupportFairplay()) {
      autoTechOrder = ['EmpHLS', chosenDashTech, 'Html5'];
    }

    var validAutoTechOrder = Player.GetValidAutoTechOrder(autoTechOrder);
    return validAutoTechOrder;
  };

  Player.GetValidAutoTechOrder = function (techOrder) {
    var validAutoTechOrder = [];

    for (var i = 0; i < techOrder.length; i++) {
      if (Tech.techs_.hasOwnProperty(techOrder[i])) {
        validAutoTechOrder.push(techOrder[i]);
      }
    }

    return validAutoTechOrder;
  };
  /**
   * Check if the browser and plattform suppot Fairplay
   *
   * @return {boolean} True if the browser and plattform support Fairplay
   */


  Player.SupportFairplay = function () {
    var hlsTech = videojs.getTech('EmpHLS');

    if (undefined !== hlsTech && hlsTech.isSupported() && window_1.WebKitMediaKeys && hlsTech.getKeySystem && window_1.WebKitMediaKeys.isTypeSupported(hlsTech.getKeySystem(), 'video/mp4')) {
      return true;
    }

    return false;
  }; // Override default 'Player' component


  var Component$j = videojs.getComponent('Component');
  Component$j.registerComponent('Player', Player);

  /**
   * Detects if the current browser has the required technology to play an unencrypted stream provided by EMP.
   *
   * @return {Promise} that is always fulfilled with a boolean value
   */

  function canPlayUnencrypted() {
    // test if DASH is supported
    var shakaTech = videojs.getTech('EmpShaka');

    if (undefined !== shakaTech && shakaTech.isSupported()) {
      return Promise.resolve(true);
    }

    var dashifTech = videojs.getTech('EmpDashif');

    if (undefined !== dashifTech && dashifTech.isSupported()) {
      return Promise.resolve(true);
    } // test if HLS is supported


    var hlsTech = videojs.getTech('EmpHLS');

    if (undefined !== hlsTech && hlsTech.isSupported()) {
      return Promise.resolve(true);
    }

    var hlsMseTech = videojs.getTech('EmpHLS-MSE');

    if (undefined !== hlsMseTech && hlsMseTech.isSupported()) {
      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  }
  /**
   * Detects if the current browser has the required technology to play an encrypted stream provided by EMP.
   *
   * @return {Promise} that is always fulfilled with a boolean value
   */

  function canPlayEncrypted() {
    var ptable = [];

    if (typeof window_1.navigator.requestMediaKeySystemAccess === 'function') {
      var isAndroid = window_1.navigator.userAgent.indexOf('Android') !== -1;
      var config = [{
        initDataTypes: ['cenc'],
        audioCapabilities: [{
          contentType: 'audio/mp4; codecs="mp4a.40.5"',
          robustness: 'SW_SECURE_CRYPTO'
        }],
        videoCapabilities: [{
          contentType: 'video/mp4; codecs="avc1.4d401f"',
          robustness: isAndroid === true ? 'SW_SECURE_DECODE' : 'SW_SECURE_CRYPTO'
        }],
        distinctiveIdentifier: 'optional',
        persistentState: 'optional',
        sessionTypes: ['temporary']
      }]; // test if DASH + Widevine or Playready is supported

      var shakaTech = videojs.getTech('EmpShaka');
      var dashifTech = videojs.getTech('EmpDashif');

      if (undefined !== shakaTech && shakaTech.isSupported() || undefined !== dashifTech && dashifTech.isSupported()) {
        ptable.push(new Promise(function (resolve, reject) {
          window_1.navigator.requestMediaKeySystemAccess('com.microsoft.playready', config).then(function () {
            resolve(true);
          }, function () {
            resolve(false);
          });
        }));
        ptable.push(new Promise(function (resolve, reject) {
          window_1.navigator.requestMediaKeySystemAccess('com.widevine.alpha', config).then(function () {
            resolve(true);
          }, function () {
            resolve(false);
          });
        }));
      }
    } else {
      var _shakaTech = videojs.getTech('EmpShaka');

      var _dashifTech = videojs.getTech('EmpDashif');

      if (undefined !== _shakaTech && _shakaTech.isSupported() || undefined !== _dashifTech && _dashifTech.isSupported()) {
        if (IE_VERSION === 11 && window_1.MSMediaKeys) {
          if (window_1.MSMediaKeys.isTypeSupported('com.microsoft.playready', 'video/mp4')) {
            ptable.push(true);
          }
        }
      }
    } // test if HLS + Fairplay is supported


    var hlsTech = videojs.getTech('EmpHLS');

    if (undefined !== hlsTech && hlsTech.isSupported() && window_1.WebKitMediaKeys && hlsTech.getKeySystem && window_1.WebKitMediaKeys.isTypeSupported(hlsTech.getKeySystem(), 'video/mp4')) {
      ptable.push(true);
    } // If no playback technology is available, resolve to false


    if (ptable.length === 0) {
      ptable.push(false);
    }

    return Promise.all(ptable).then(function (values) {
      return values.indexOf(true) === -1 ? false : true;
    }, function (reason) {
      return false;
    });
  }

  /**
   * Player class, inherits from videojs Player class.
   *
   * @param {Player} player The `Player` that this class should be attached to.
   * @param {Object} analytics EMPAnalytics
   * @param {Object=} analyticsConfig The key/value store of analytics options.
   * @class EMPAnalyticsConnector
   */

  var EMPAnalyticsConnector =
  /*#__PURE__*/
  function () {
    /**
     * constructor
     *
     * @param {Player} player The `Player` that this class should be attached to.
     * @param {Object} analytics EMPAnalytics
     * @param {Object=} analyticsConfig The key/value store of analytics options.
     */
    function EMPAnalyticsConnector(player, analytics, analyticsConfig) {
      this.INITIAL_REFERENCE_TIME = 1;
      this.player_ = player;
      this.analytics_ = analytics;
      this.sessionId_ = null;
      this.customAttributes = analyticsConfig.analytics && analyticsConfig.analytics.customAttributes;
      this.exposure = analyticsConfig.exposure;
      this.currentTimeTimer = null;
      this.onPlayBind = this.onPlay.bind(this);
      this.onResumedBind = this.onResume.bind(this);
      this.onPlayingBind = this.onPlaying.bind(this);
      this.onPauseBind = this.onPause.bind(this);
      this.onEndedBind = this.onEnded.bind(this);
      this.onErrorBind = this.onError.bind(this);
      this.onDrmSessionUpdateBind = this.onDrmSessionUpdate.bind(this);
      this.onEntitlementLoadStartBind = this.onEntitlementLoadStart.bind(this);
      this.onBitrateChangeBind = this.onBitrateChange.bind(this);
      this.onDisposeBind = this.onDispose.bind(this);
      this.onLoadStartBind = this.onLoadStart.bind(this);
      this.onSeekedBind = this.onSeeked.bind(this);
      this.onWaitingBind = this.onWaiting.bind(this);
      this.onChromeCastingStartBind = this.onChromeCastingStart.bind(this);
      this.onChromeCastingStopBind = this.onChromeCastingStop.bind(this);
      this.onProgramChangeBind = this.onProgramChange.bind(this);
      this.onWaitingEndedBind = this.onWaitingEnded.bind(this);
      this.onErrorBeforeAssetBind = this.onErrorBeforeAsset.bind(this);
      this.onEntitlementChangeBind = this.onEntitlementChange.bind(this);
      this.onWindowUnloadBind = this.onWindowUnload.bind(this);
      this.onPlayingAfterStartBind = this.onPlayingAfterStart.bind(this);
      this.allEvents_ = Object.keys(empPlayerEvents).map(function (key) {
        return empPlayerEvents[key];
      });
      this.init();
      this.createdSessions = {};
      this.mem = {};
    }
    /**
     * Retrieves ongoing playback session id
     *
     * @param {string} playSessionId playSessionId
     * @return {string} playSessionId
     */


    var _proto = EMPAnalyticsConnector.prototype;

    _proto.SessionId = function SessionId(playSessionId) {
      if (!playSessionId) {
        if (!this.entitlement() || !this.entitlementLoaded_) {
          return this.errorSessionId;
        }
      }

      var sId = playSessionId ? playSessionId : this.entitlement().playSessionId;

      if (!this.mem[sId]) {
        this.mem[sId] = {
          pause: {},
          resume: {}
        };
      }

      return sId;
    }
    /**
     * hasSessionId
     *
     * @return {boolean} if it hasSessionId
     */
    ;

    _proto.hasSessionId = function hasSessionId() {
      if (!this.entitlement() || !this.entitlementLoaded_) {
        return false;
      }

      return true;
    }
    /**
     * Sends current playback time to analytics
     *
     */
    ;

    _proto.sendCurrentTime = function sendCurrentTime() {
      var sessionId = this.SessionId();

      if (sessionId && this.player_ && this.analytics_.getSessionState && this.analytics_.getSessionState(sessionId) === 'PLAYING') {
        this.analytics_.setCurrentTime(sessionId, this.OffsetTime());
      }
    }
    /**
     * Registers a new timer
     *
     */
    ;

    _proto.registerCurrentTimeTimer = function registerCurrentTimeTimer() {
      var _this = this;

      this.clearTimers();
      this.currentTimeTimer = setInterval(function () {
        _this.sendCurrentTime();

        var sessionId = _this.SessionId();

        if (sessionId && _this.analytics_ && _this.analytics_.ok && _this.analytics_.ok(sessionId) === false) {
          if (_this.exposure) {
            _this.exposure.verifySession(null, function () {
              if (_this.player_.el_) {
                _this.player_.trigger(empPlayerEvents.ERROR, '401 INVALID_SESSION_TOKEN: The session token is no longer valid.');

                extplayer.stop(_this.player_);
              }

              _this.clearTimers();
            });
          } else {
            log.error('registerCurrentTimeTimer Exposure is undefined');
          }
        }
      }, 1000);
    }
    /**
     * Method to unregister and clear timers
     *
     */
    ;

    _proto.clearTimers = function clearTimers() {
      if (this.currentTimeTimer) {
        clearInterval(this.currentTimeTimer);
      }

      this.currentTimeTimer = null;
    }
    /**
     * Initialization method
     *
     */
    ;

    _proto.init = function init() {
      if (!this.player_ || !this.analytics_) {
        log.warn('Warning: init failed . Possible causes: either player or analytics were not set.');
        return;
      }

      this._errorSessionId = null;
      this.disabled_ = false;
      this.entitlementLoaded_ = false;
      log('Initialization EmpAnalytics');
      this.analytics_.init();
      window_1.addEventListener('beforeunload', this.onWindowUnloadBind);
      this.player_.on(empPlayerEvents.ENTITLEMENT_LOAD_START, this.onEntitlementLoadStartBind);
      this.player_.on(empPlayerEvents.PAUSE, this.onPauseBind);
      this.player_.on(empPlayerEvents.SEEKED, this.onSeekedBind);
      this.player_.on(empPlayerEvents.ENDED, this.onEndedBind);
      this.player_.on(empPlayerEvents.ERROR, this.onErrorBind);
      this.player_.on(empPlayerEvents.DISPOSE, this.onDisposeBind);
      this.player_.on(empPlayerEvents.STOPPED, this.onDisposeBind);
      this.player_.on(empPlayerEvents.BITRATE_CHANGED, this.onBitrateChangeBind);
      this.player_.on(empPlayerEvents.WAITING, this.onWaitingBind);
      this.player_.on(empPlayerEvents.CHROMECAST_CASTING, this.onChromeCastingStartBind);
      this.player_.on(empPlayerEvents.CHROMECAST_STOPPED, this.onChromeCastingStopBind);
      this.player_.on(empPlayerEvents.PROGRAM_CHANGED, this.onProgramChangeBind);
      this.player_.on(empPlayerEvents.DRM_SESSION_UPDATE, this.onDrmSessionUpdateBind);
    }
    /**
     * Callback when user closes browser tab or refreshes the page
     *
     */
    ;

    _proto.onWindowUnload = function onWindowUnload() {
      var _this2 = this;

      this.onGeneric('WindowClose', this.analytics_.dispose, function () {
        if (_this2.hasSessionId() === true) {
          _this2.analytics_.dispose(_this2.SessionId(), _this2.getCachedCurrentTime());
        }

        _this2.analytics_.dispatchNow(false);

        _this2.clearTimers();
      }, true);
    }
    /**
     * Callback when chromecast starts casting
     *
     */
    ;

    _proto.onChromeCastingStart = function onChromeCastingStart() {
      var _this3 = this;

      this.onGeneric('StartCasting', this.analytics_.startCasting, function () {
        if (_this3.hasSessionId() === false) {
          return;
        }

        var sId = _this3.SessionId();

        if (sId) {
          var currentTime = _this3.getCachedCurrentTime();

          log('StartCasting', currentTime);

          _this3.analytics_.startCasting(_this3.SessionId(), currentTime);
        }

        _this3.clearTimers();
      }, false);
      this.disabled_ = true;
    }
    /**
     * Callback when chromecast stops casting and sender takes back playback session
     *
     * @param {boolean} isChromecast
     */
    ;

    _proto.onChromeCastingStop = function onChromeCastingStop(isChromecast) {
      var _this4 = this;

      this.disabled_ = false;

      if (isChromecast) {
        this.onGeneric('StopCasting', this.analytics_.stopCasting, function () {
          if (_this4.hasSessionId() === false) {
            return;
          }

          _this4.analytics_.stopCasting(_this4.SessionId(), _this4.OffsetTime());
        }, false);
      }
    }
    /**
     * Callback when Program Change
     *
     * @param {EventTarget~Event} [event]
     * @param {Object} data
     */
    ;

    _proto.onProgramChange = function onProgramChange(event, data) {
      var _this5 = this;

      var program = data ? data.program : null;
      log('analytics', 'onProgramChange', program);

      if (program && this.analytics_.programChanged) {
        // Don't send ProgramChange if it's a new session
        if (this.player_.hasStarted()) {
          this.onGeneric('ProgramChange', this.analytics_.programChanged, function () {
            _this5.analytics_.programChanged(_this5.SessionId(), _this5.OffsetTime(), {
              programId: program.programId
            });
          }, true);
        }
      }
    }
    /**
     * Callback when there is an event to change entitlement
     *
     */

    /**
     * Callback when there is an event to change entitlement
     *
     * @param {EventTarget~Event} [event]
     * @param {Object} data
     * @param {string} errorSessionId
     */
    ;

    _proto.onEntitlementChange = function onEntitlementChange(event, data, errorSessionId) {
      var _this6 = this;

      this.entitlementLoaded_ = true;
      this.player_.off(empPlayerEvents.ERROR, this.onErrorBeforeAssetBind); // entitlement method will cache entitlement

      var entitlement = this.entitlement(data && data.entitlement);
      this.onGeneric('HandShake', this.analytics_.handshake, function () {
        var params = {};

        if (entitlement && entitlement.assetId) {
          params.assetId = entitlement.assetId;
        }

        if (entitlement && entitlement.programId) {
          params.programId = entitlement.programId;
        }

        if (!entitlement) {
          var asset = extplayer.currentAsset(_this6.player_);

          if (asset) {
            params.assetId = asset.assetId;
            params.channelId = asset.channelId;
            params.programId = asset.programId;
          }
        } // Use this new playSessionId


        var playSessionId = entitlement ? entitlement.playSessionId : errorSessionId;

        _this6.analytics_.handshake(_this6.SessionId(playSessionId), params);

        _this6.onLoadStart(playSessionId);
      }, false);
    }
    /**
     * Callback when starting to load an entitlement
     *
     */
    ;

    _proto.onEntitlementLoadStart = function onEntitlementLoadStart() {
      var _this7 = this;

      this.entitlementLoaded_ = false;
      this.onGeneric('ExitOngoingSession', this.analytics_.exitOngoingSession, function () {
        return _this7.analytics_.exitOngoingSession(_this7.getCachedCurrentTime());
      });
      this.player_.one(empPlayerEvents.ERROR, this.onErrorBeforeAssetBind);
      this.player_.one(empPlayerEvents.ENTITLEMENT_CHANGE, this.onEntitlementChangeBind);
    }
    /**
     * Callback when starting to load new media chunks
     *
     * @param {string} playSessionId
     */
    ;

    _proto.onLoadStart = function onLoadStart(playSessionId) {
      var _this8 = this;

      var currentSessionId = playSessionId ? playSessionId : this.SessionId();

      if (!currentSessionId) {
        log('onLoadStart called but not session available.');
        return;
      }

      if (!this.sessionCreated(currentSessionId)) {
        this.createdSessions[currentSessionId] = true;
        this.onGeneric('Created', this.analytics_.created, function () {
          var options = _this8.player_.options();

          var params = {
            version: _this8.playerVersion
          };

          if (options && options.autoplay) {
            params.autoplay = options.autoplay;
          }

          if (_this8.entitlement() && _this8.entitlement().requestId) {
            params.requestId = _this8.entitlement().requestId;
          }

          _this8.analytics_.created(currentSessionId, params);
        }, false);
        this.player_.off(empPlayerEvents.PLAYING, this.onResumedBind);
        this.player_.off(empPlayerEvents.PLAYING, this.onPlayingAfterStartBind);
        this.player_.one(empPlayerEvents.PLAYING, this.onPlayingAfterStartBind);
      }
    }
    /**
     * Callback when there is a playing event after load started
     *
     */
    ;

    _proto.onPlayingAfterStart = function onPlayingAfterStart() {
      this.onPlayBind();
      this.onPlayingBind();
      this.player_.on(empPlayerEvents.PLAYING, this.onResumedBind);
    }
    /**
     * Callback when there is a bitrate change in the playback
     *
     */
    ;

    _proto.onBitrateChange = function onBitrateChange() {
      var _this9 = this;

      this.onGeneric('BitrateChange', this.analytics_.bitrateChanged, function () {
        var params = {
          bitrate: Math.max(0, Math.round(_this9.getBitrate() / 1000))
        };

        _this9.analytics_.bitrateChanged(_this9.SessionId(), _this9.OffsetTime(), params);
      }, true);
    }
    /**
     * Callback when playback enters a waiting state
     *
     */
    ;

    _proto.onWaiting = function onWaiting() {
      var _this10 = this;

      this.onGeneric('StartWaiting', this.analytics_.waiting, function () {
        if (_this10.player_.hasStarted()) {
          _this10.analytics_.waiting(_this10.SessionId(), _this10.OffsetTime());
        }

        _this10.allEvents_.map(function (eventName) {
          if (eventName === empPlayerEvents.PLAY || eventName === empPlayerEvents.PLAYING || eventName === empPlayerEvents.ENDED || eventName === empPlayerEvents.ERROR || eventName === empPlayerEvents.DISPOSE || eventName === empPlayerEvents.SEEKED || eventName === empPlayerEvents.CHROMECAST_CASTING || eventName === empPlayerEvents.CHROMECAST_STOPPED) {
            _this10.player_.one(eventName, _this10.onWaitingEndedBind);
          }
        });
      }, true);
    }
    /**
     * OffsetTime
     *
     * @return {number} OffsetTime
     * @private
     */
    ;

    _proto.OffsetTime = function OffsetTime() {
      if (this.entitlement() && (this.entitlement().isStaticCachupAsLive || this.entitlement().isDynamicCachupAsLive)) {
        return extplayer.getPlayheadTime(this.player_) / 1000;
      }

      return extplayer.baseCurrentTime(this.player_);
    }
    /**
     * startTimeLive
     *
     * @return {number} startTimeLive
     * @private
     */
    ;

    _proto.startTimeLive = function startTimeLive() {
      return extplayer.startTimeLive(this.player_);
    }
    /**
     * isLive
     *
     * @return {boolean} isLive
     * @private
     */
    ;

    _proto.isLive = function isLive() {
      return extplayer.isLive(this.player_);
    }
    /**
     * Get current bitrate
     *
     * @return {number} bitrate
     */
    ;

    _proto.getBitrate = function getBitrate() {
      return extplayer.getBitrate(this.player_);
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
      if (this.entitlement() && (this.entitlement().isStaticCachupAsLive || this.entitlement().isDynamicCachupAsLive)) {
        if (this.player_.getProgramDetails && this.player_.getProgramDetails()) {
          return this.player_.getProgramDetails().duration / 1000;
        }
      }

      return extplayer.duration(this.player_);
    }
    /**
     * techVersion
     *
     * @return {string} techVersion
     */
    ;

    /**
     * get or set entitlement
     *
     * @param {Object=} value entitlement
     * @return {Object} entitlement
     */
    _proto.entitlement = function entitlement(value) {
      if (typeof value === 'undefined') {
        return extplayer.getEntitlement(this.player_) || this.entitlement_;
      }

      this.entitlement_ = value;
      return value;
    }
    /**
     * Callback when playback leaves a waiting state
     *
     */
    ;

    _proto.onWaitingEnded = function onWaitingEnded() {
      var _this11 = this;

      this.allEvents_.map(function (eventNameOff) {
        _this11.player_.off(eventNameOff, _this11.onWaitingEndedBind);
      });
      this.onGeneric('WaitingEnded', this.analytics_.waitingEnded, function () {
        _this11.analytics_.waitingEnded(_this11.SessionId(), _this11.OffsetTime());
      }, true);
    }
    /**
     * Callback when playback exists
     *
     * @param {EventTarget~Event} [event]
     * @param {Object} data
     */
    ;

    _proto.onDispose = function onDispose(event, data) {
      var _this12 = this;

      this.onGeneric('Dispose', this.analytics_.dispose, function () {
        if (_this12.hasSessionId() === false) {
          return;
        }

        _this12.analytics_.dispose(_this12.SessionId(), _this12.getCachedCurrentTime());

        _this12.clearTimers();
      }, true, true);
    }
    /**
     * Get Cached Current Time
     *
     * @return {number} CachedCurrentTime
     */
    ;

    _proto.getCachedCurrentTime = function getCachedCurrentTime() {
      if (this.player_) {
        var cachedcurrentTime = this.player_.getCache().currentTime;
        var currentTime = this.OffsetTime();
        return currentTime ? currentTime : cachedcurrentTime;
      }

      return undefined;
    }
    /**
     * Callback when playback is finished
     *
     */
    ;

    _proto.onEnded = function onEnded() {
      var _this13 = this;

      this.onGeneric('End of Stream', this.analytics_.endOfStream, function () {
        _this13.analytics_.endOfStream(_this13.SessionId());

        _this13.clearTimers();
      }, true, true);
    }
    /**
     * Callback when play command is triggered
     *
     */
    ;

    _proto.onPlay = function onPlay() {
      var _this14 = this;

      this.onGeneric('Play', this.analytics_.play, function () {
        var tech = _this14.player_.techName_;
        var techName = 'Unknown';

        switch (tech) {
          case 'EmpShaka':
            techName = 'Shaka';
            break;

          case 'EmpDashif':
            techName = 'DashIf';
            break;

          case 'EmpHLS':
            techName = 'NativeHLS';
            break;

          case 'EmpHLS-MSE':
            techName = 'HLS-MSE';
            break;
        }

        var params = {
          techName: techName,
          version: _this14.playerVersion,
          techVersion: _this14.techVersion
        };

        _this14.analytics_.play(_this14.SessionId(), _this14.OffsetTime(), params);

        _this14.registerCurrentTimeTimer();
      }, false);
    }
    /**
     * Callback when media is playing
     *
     */
    ;

    _proto.onPlaying = function onPlaying() {
      var _this15 = this;

      this.onGeneric('Playing', this.analytics_.playing, function () {
        var params = {};
        params.bitrate = Math.max(0, Math.round(_this15.getBitrate() / 1024));

        if (_this15.isLive() === true) {
          params.referenceTime = _this15.startTimeLive();
        } else {
          params.duration = _this15.duration();
        }

        if (_this15.entitlement() && _this15.entitlement().mediaLocator) {
          params.mediaLocator = _this15.entitlement().mediaLocator;
        }

        if (params.mediaLocator && params.mediaLocator.indexOf('.isml') >= 0) {
          params.referenceTime = _this15.INITIAL_REFERENCE_TIME;
        }

        _this15.analytics_.clearCustomAttributes();

        (_this15.customAttributes || []).map(function (item) {
          _this15.analytics_.setCustomAttribute(item.key, item.value);
        });

        _this15.analytics_.playing(_this15.SessionId(), _this15.OffsetTime(), params);
      }, false);
    }
    /**
     * Callback when media is seeked
     *
     */
    ;

    _proto.onSeeked = function onSeeked() {
      var _this16 = this;

      this.onGeneric('Seeked', this.analytics_.seek, function () {
        _this16.analytics_.seek(_this16.SessionId(), _this16.OffsetTime());
      }, true);
    }
    /**
     * Callback when playback is paused
     *
     */
    ;

    _proto.onPause = function onPause() {
      var _this17 = this;

      this.onGeneric('Pause', this.analytics_.paused, function () {
        if (_this17.player_.hasStarted() === false) {
          return;
        }

        var sId = _this17.SessionId();

        var refTim = parseInt((new Date() - 0) / 25, 10);

        if (_this17.mem[sId].pause[refTim]) {
          return;
        }

        _this17.mem[sId].pause[refTim] = true;

        _this17.analytics_.paused(sId, _this17.OffsetTime());
      }, true);
    }
    /**
     * Callback when playback is resumed
     *
     */
    ;

    _proto.onResume = function onResume() {
      var _this18 = this;

      this.onGeneric('Resume', this.analytics_.resume, function () {
        var sId = _this18.SessionId();

        var refTim = parseInt((new Date() - 0) / 25, 10);

        if (_this18.mem[sId].resume[refTim]) {
          return;
        }

        _this18.mem[sId].resume[refTim] = true;

        _this18.analytics_.resume(sId, _this18.OffsetTime());
      }, true);
    }
    /**
     * Callback when error occurs before loading the asset
     *
     */
    ;

    _proto.onErrorBeforeAsset = function onErrorBeforeAsset() {
      this.entitlementLoaded_ = false;
      this.onEntitlementChange(null, null, this.errorSessionId);
      this.onError(null, this.errorSessionId);
      this.clearTimers(); // this.entitlementLoaded_ = true;
    }
    /**
     * errorSessionId
     *
     * @return {string} errorSessionId
     * @private
     */
    ;

    /**
     * Callback when error occurs
     *
     * @param {Object=} errorEvent
     * @param {string=} fallbackSessionId
     */
    _proto.onError = function onError(errorEvent, fallbackSessionId) {
      var _this19 = this;

      if (errorEvent === void 0) {
        errorEvent = null;
      }

      if (fallbackSessionId === void 0) {
        fallbackSessionId = null;
      }

      if (!fallbackSessionId && !this.entitlementLoaded_) {
        return;
      }

      this.onGeneric('Error', this.analytics_.error, function () {
        var err = _this19.player_.error();

        var params = {};

        if (err && err.code) {
          params.errorCode = err.code;
        }

        if (err && err.message) {
          params.errorMessage = err.message;
        }

        if (err && err.status) {
          params.errorDetails = err.status + '';
        }

        if (err && err.stack) {
          params.errorDetails = params.errorDetails ? params.errorDetails + '\n' + err.stack.toString() : err.stack.toString();
        }

        var options = _this19.player_.options();

        if (_this19.player_.tech_) {
          var streamType = _this19.player_.techName_ === 'EmpShaka' && options && options.empshaka ? options.empshaka.streamType : '';
          params.errorInfo = _this19.player_.techName_ + (streamType ? '-' + streamType : '');
        } else {
          params.errorInfo = 'Unknown tech, techOrder: ' + options.techOrder.toString();
        }

        if (!err && errorEvent) {
          params.errorCode = errorEvent.code;
          params.errorMessage = errorEvent.message ? errorEvent.message : 'Browser Error';

          if (errorEvent.status) {
            params.errorDetails = errorEvent.status + '';
          }

          if (errorEvent.stack) {
            params.errorDetails = params.errorDetails ? params.errorDetails + '\n' + errorEvent.stack.toString() : errorEvent.stack.toString();
          }
        }

        var currentSessId = _this19.SessionId();

        if (currentSessId || fallbackSessionId) {
          _this19.analytics_.error(currentSessId || fallbackSessionId, _this19.OffsetTime(), params);
        }

        _this19.clearTimers();
      }, false);
    }
    /**
     * onDrmSessionUpdate
     *
     * @param {EventTarget~Event} [event]
     * @param {Object} data
     */
    ;

    _proto.onDrmSessionUpdate = function onDrmSessionUpdate(event, data) {
      var _this20 = this;

      log('onDrmSessionUpdate', event, data);
      this.onGeneric('DrmSessionUpdate', this.analytics_.drmSessionUpdate, function () {
        _this20.analytics_.drmSessionUpdate(_this20.SessionId(), {
          message: data.messageType,
          code: data.code,
          info: data.info
        });
      }, true);
    }
    /**
     * Generic analytics function
     *
     * @param {string} eventName
     * @param {Function=} eventFnc
     * @param {Function=} callback
     * @param {boolean} checkSessionCreation
     * @param {boolean=} ignoreDisabled
     */
    ;

    _proto.onGeneric = function onGeneric(eventName, eventFnc, callback, checkSessionCreation, ignoreDisabled) {
      if (ignoreDisabled === void 0) {
        ignoreDisabled = false;
      }

      if (this.disabled_ && !ignoreDisabled) {
        log(eventName + ' not delivered: analytics disabled.');
        return;
      }

      if (checkSessionCreation && !this.sessionCreated(this.SessionId())) {
        log(eventName + ' was discarded.');
      } else if (eventFnc && callback) {
        callback();
      }
    }
    /**
     * Check if a session with given sessionId was already created
     *
     * @param {string} sessionId
     * @return {string} sessionId
     */
    ;

    _proto.sessionCreated = function sessionCreated(sessionId) {
      return sessionId && this.createdSessions[sessionId];
    }
    /**
     * Cleanup and unregister events to send to analytics
     *
     */
    ;

    _proto.dispose = function dispose() {
      this.clearTimers();

      if (this.analytics_) {
        this.analytics_.exitOngoingSession(this.getCachedCurrentTime());
        this.analytics_.dispatchNow(false);
      }

      window_1.removeEventListener('beforeunload', this.onWindowUnloadBind);
      this.player_.off(empPlayerEvents.PLAY, this.onPlayBind);
      this.player_.off(empPlayerEvents.PLAYING, this.onPlayingBind);
      this.player_.off(empPlayerEvents.PLAYING, this.onResumedBind);
      this.player_.off(empPlayerEvents.PAUSE, this.onPauseBind);
      this.player_.off(empPlayerEvents.SEEKED, this.onSeekedBind);
      this.player_.off(empPlayerEvents.ENTITLEMENT_LOAD_START, this.onEntitlementLoadStartBind);
      this.player_.off(empPlayerEvents.ENTITLEMENT_CHANGE, this.onEntitlementChangeBind);
      this.player_.off(empPlayerEvents.BITRATE_CHANGED, this.onBitrateChangeBind);
      this.player_.off(empPlayerEvents.ENDED, this.onEndedBind);
      this.player_.off(empPlayerEvents.DISPOSE, this.onDisposeBind);
      this.player_.off(empPlayerEvents.STOPPED, this.onDisposeBind);
      this.player_.off(empPlayerEvents.ERROR, this.onErrorBind);
      this.player_.off(empPlayerEvents.ERROR, this.onErrorBeforeAssetBind);
      this.player_.off(empPlayerEvents.WAITING, this.onWaitingBind);
      this.player_.off(empPlayerEvents.CHROMECAST_CASTING, this.onChromeCastingStartBind);
      this.player_.off(empPlayerEvents.CHROMECAST_STOPPED, this.onChromeCastingStopBind);
      this.player_.off(empPlayerEvents.PROGRAM_CHANGED, this.onProgramChangeBind);
      this.player_.off(empPlayerEvents.PLAYING, this.onPlayingAfterStartBind);
      this.player_.off(empPlayerEvents.DRM_SESSION_UPDATE, this.onDrmSessionUpdateBind);
    };

    _createClass(EMPAnalyticsConnector, [{
      key: "techVersion",
      get: function get() {
        return extplayer.techVersion(this.player_);
      }
      /**
       * playerVersion
       *
       * @return {string} playerVersion
       */

    }, {
      key: "playerVersion",
      get: function get() {
        if (!this.player_.version) {
          return window_1.videojs ? window_1.videojs.VERSION : '2.x.x';
        }

        return this.player_.version;
      }
    }, {
      key: "errorSessionId",
      get: function get() {
        if (!this._errorSessionId) {
          this._errorSessionId = 'error-' + Math.random().toString().split('.')[1];
        }

        return this._errorSessionId;
      }
    }]);

    return EMPAnalyticsConnector;
  }();

  var empAnalytics_min = createCommonjsModule(function (module, exports) {
  !function(a){module.exports=a();}(function(){return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof commonjsRequire&&commonjsRequire;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d);}return c[g].exports}for(var f="function"==typeof commonjsRequire&&commonjsRequire,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){var c;c="undefined"!=typeof window?window:"undefined"!=typeof a?a:"undefined"!=typeof self?self:{},b.exports=c;}).call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],2:[function(b,c,d){!function(e,f){"object"==typeof d&&"undefined"!=typeof c?f(d,b("worker-timers-broker")):f(e.workerTimers={},e.workerTimersBroker);}(this,function(a,b){var c='!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,r){"use strict";r.r(t);r(1)},function(e,t,r){!function(){"use strict";var w=new Map,T=new Map,b=function(e,t){var r,n;if("performance"in self){var o=performance.now(),i=Math.max(0,o-t);r=o,n=e-i}else r=Date.now(),n=e;var a=r+n;return{expected:a,remainingDelay:n}},M=function e(t,r,n,o){var i="performance"in self?performance.now():Date.now();n<i?postMessage({id:null,method:"call",params:{timerId:r,timerType:o}}):t.set(r,setTimeout(e,n-i,t,r,n,o))};addEventListener("message",function(e){var t,r,n,o,i,a,u,s,c=e.data;try{if("clear"===c.method){var l=c.id,d=c.params,f=d.timerId,p=d.timerType;if("interval"===p)!function(e){var t=w.get(e);if(void 0===t)throw new Error(\'There is no interval scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(t),w.delete(e)}(f),postMessage({error:null,id:l});else{if("timeout"!==p)throw new Error(\'The given type "\'.concat(p,\'" is not supported\'));!function(e){var t=T.get(e);if(void 0===t)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(t),T.delete(e)}(f),postMessage({error:null,id:l})}}else{if("set"!==c.method)throw new Error(\'The given method "\'.concat(c.method,\'" is not supported\'));var m=c.params,v=m.delay,h=m.now,g=m.timerId,y=m.timerType;if("interval"===y)i=g,a=b(v,h),u=a.expected,s=a.remainingDelay,w.set(i,setTimeout(M,s,w,i,u,"interval"));else{if("timeout"!==y)throw new Error(\'The given type "\'.concat(y,\'" is not supported\'));t=g,r=b(v,h),n=r.expected,o=r.remainingDelay,T.set(t,setTimeout(M,o,T,t,n,"timeout"))}}}catch(e){postMessage({error:{message:e.message},id:c.id,result:null})}})}()}]);',d=new Blob([c],{type:"application/javascript; charset=utf-8"}),e=URL.createObjectURL(d),f=b.load(e),g=f.clearInterval,h=f.clearTimeout,i=f.setInterval,j=f.setTimeout;URL.revokeObjectURL(e),a.clearInterval=g,a.clearTimeout=h,a.setInterval=i,a.setTimeout=j,Object.defineProperty(a,"__esModule",{value:!0});});},{"worker-timers-broker":3}],3:[function(b,c,d){!function(e,f){"object"==typeof d&&"undefined"!=typeof c?f(d,b("fast-unique-numbers")):f(e.workerTimersBroker={},e.fastUniqueNumbers);}(this,function(a,b){var c=function(a){return void 0!==a.method&&"call"===a.method},d=function(a){return null===a.error&&"number"==typeof a.id},e=function(a){var e=new Map,f=new Map,g=new Map,h=new Worker(a);h.addEventListener("message",function(a){var b=a.data;if(c(b)){var h=b.params,i=h.timerId,j=h.timerType;if("interval"===j){var k=e.get(i);if("number"==typeof k){var l=g.get(k);if(void 0===l||l.timerId!==i||l.timerType!==j)throw new Error("The timer is in an undefined state.")}else{if("undefined"==typeof k)throw new Error("The timer is in an undefined state.");k();}}else if("timeout"===j){var m=f.get(i);if("number"==typeof m){var n=g.get(m);if(void 0===n||n.timerId!==i||n.timerType!==j)throw new Error("The timer is in an undefined state.")}else{if("undefined"==typeof m)throw new Error("The timer is in an undefined state.");m(),f["delete"](i);}}}else{if(!d(b)){var o=b.error.message;throw new Error(o)}var p=b.id,q=g.get(p);if(void 0===q)throw new Error("The timer is in an undefined state.");var r=q.timerId,s=q.timerType;g["delete"](p),"interval"===s?e["delete"](r):f["delete"](r);}});var i=function(a){var c=b.generateUniqueNumber(g);g.set(c,{timerId:a,timerType:"interval"}),e.set(a,c),h.postMessage({id:c,method:"clear",params:{timerId:a,timerType:"interval"}});},j=function(a){var c=b.generateUniqueNumber(g);g.set(c,{timerId:a,timerType:"timeout"}),f.set(a,c),h.postMessage({id:c,method:"clear",params:{timerId:a,timerType:"timeout"}});},k=function(a,c){var d=b.generateUniqueNumber(e);return e.set(d,function(){a(),"function"==typeof e.get(d)&&h.postMessage({id:null,method:"set",params:{delay:c,now:performance.now(),timerId:d,timerType:"interval"}});}),h.postMessage({id:null,method:"set",params:{delay:c,now:performance.now(),timerId:d,timerType:"interval"}}),d},l=function(a,c){var d=b.generateUniqueNumber(f);return f.set(d,a),h.postMessage({id:null,method:"set",params:{delay:c,now:performance.now(),timerId:d,timerType:"timeout"}}),d};return {clearInterval:i,clearTimeout:j,setInterval:k,setTimeout:l}};a.load=e,Object.defineProperty(a,"__esModule",{value:!0});});},{"fast-unique-numbers":4}],4:[function(b,c,d){!function(b,e){"object"==typeof d&&"undefined"!=typeof c?e(d):e(b.fastUniqueNumbers={});}(this,function(a){var b=new WeakMap,c=Number.MAX_SAFE_INTEGER||9007199254740991,d=function(a,c){return b.set(a,c),c},e=function(a){var e=b.get(a),f=void 0===e?a.size:e>2147483648?0:e+1;if(!a.has(f))return d(a,f);if(a.size<1073741824){for(;a.has(f);)f=Math.floor(2147483648*Math.random());return d(a,f)}if(a.size>c)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;a.has(f);)f=Math.floor(Math.random()*c);return d(a,f)},f=function(a){var b=e(a);return a.add(b),b};a.addUniqueNumber=f,a.generateUniqueNumber=e,Object.defineProperty(a,"__esModule",{value:!0});});},{}],5:[function(a,b,c){function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}c.__esModule=!0;var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d);}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a("global/window"),i=e(h),j=a("./platform"),k=e(j),l=a("worker-timers"),m=d(l),n=function(){function a(b,c,d,e,g){var h=arguments.length<=5||void 0===arguments[5]?{}:arguments[5],i=arguments.length<=6||void 0===arguments[6]?{}:arguments[6];f(this,a),this.CYCLE_TIME=1e3,this.EVENT_PURGE_TIME_DEFAULT=3*this.CYCLE_TIME,this.TIME_WITHOUT_BEAT_DEFAULT=60*this.CYCLE_TIME,this.SERVER_URL_DEFAULT="",this.CUSTOMER_DEFAULT="",this.BUSINESS_UNIT_DEFAULT="",this.INCLUDE_DEVICE_METRICS_DEFAULT=!0,this.SESSION_TOKEN_DEFAULT="",this.SESSION_ID_DEFAULT="",this.DEBUG_DEFAULT=!1,this.MAX_RETRIES=20,this.DEVICE_CLOCK_CHECK_THRESHOLD=3e5,this.eventsSkeleton=this.initEventSkeleton(),this.customer_=c,this.businessUnit_=d,this.sessionToken_=e,this.serverURL_=b,this.includeDeviceMetrics_=!1,this.userId_=g,this.deviceInfoData_=h,this.props_=i||{},this.pendingRequest_=!1;}return a.prototype.init=function(){var a=this;this.cycleTimer&&("undefined"!=typeof Worker&&this.props_.disableWebWorkers!==!0?m.clearInterval(this.cycleTimer):clearInterval(this.cycleTimer)),"undefined"!=typeof Worker&&this.props_.disableWebWorkers!==!0?this.cycleTimer=m.setInterval(function(){return a.cycle()},this.CYCLE_TIME):this.cycleTimer=setInterval(function(){return a.cycle()},this.CYCLE_TIME),this.communicationCurrentTime=0,this.lastCommunicationTime=0,this.eventPool={};},a.prototype.clear=function(){this.eventPool={};},a.prototype.ok=function(a){var b=this.eventPool[a];return !!b&&(b.forbidden===!1&&b.retries<this.MAX_RETRIES)},a.prototype.created=function(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],c={type:"Created"};this.addEventToPool(a,c,b);},a.prototype.play=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"PlayerReady",currentTime:b};this.deviceAppInfo&&(c.deviceAppInfo=this.deviceAppInfo),this.addEventToPool(a,d,c);},a.prototype.playing=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"Started",currentTime:b};if(this.customAttributes){var e=Object.keys(this.customAttributes);e.length&&e.length>0&&(c.attributes=this.customAttributes);}this.addEventToPool(a,d,c),this.changeSessionState(a,"PLAYING");},a.prototype.paused=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"Paused",currentTime:b};this.addEventToPool(a,d,c,!0);},a.prototype.seek=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"ScrubbedTo",currentTime:b};this.addEventToPool(a,d,c,!0);},a.prototype.programChanged=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"ProgramChanged",currentTime:b};this.addEventToPool(a,d,c,!0);},a.prototype.startCasting=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"StartCasting",currentTime:b};this.addEventToPool(a,d,c,!0),this.changeSessionState(a,"FINISHED");},a.prototype.stopCasting=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"StopCasting",currentTime:b};this.addEventToPool(a,d,c,!0),this.changeSessionState(a,"FINISHED");},a.prototype.setCurrentTime=function(a,b){this.eventPool[a]&&(this.eventPool[a].currentTime=b);},a.prototype.handshake=function(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],c={type:"HandshakeStarted"};this.addEventToPool(a,c,b);},a.prototype.resume=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"Resumed",currentTime:b};this.addEventToPool(a,d,c,!0);},a.prototype.bitrateChanged=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"BitrateChanged",currentTime:b};this.addEventToPool(a,d,c,!0);},a.prototype.drmSessionUpdate=function(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],c={type:"DRM"};this.addEventToPool(a,c,b,!0);},a.prototype.endOfStream=function(a){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],c={type:"Completed"};this.addEventToPool(a,c,b,!0),this.changeSessionState(a,"FINISHED");},a.prototype.error=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"Error",currentTime:b};this.addEventToPool(a,d,c),this.changeSessionState(a,"FINISHED");},a.prototype.dispose=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d=this.eventPool[a];if(d&&"FINISHED"!==d.currentState){var e={type:"Aborted"};b&&(e.currentTime=b),this.addEventToPool(a,e,c,!0),this.changeSessionState(a,"FINISHED");}},a.prototype.waiting=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"BufferingStarted",currentTime:b};this.addEventToPool(a,d,c);},a.prototype.waitingEnded=function(a,b){var c=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],d={type:"BufferingEnded",currentTime:b};this.addEventToPool(a,d,c);},a.prototype.getSessionState=function(a){return this.eventPool[a]?this.eventPool[a].currentState||"IDLE":"IDLE"},a.prototype.dispatchNow=function(){var a=arguments.length<=0||void 0===arguments[0]||arguments[0];this.cycle(a,!0);},a.prototype.exitOngoingSession=function(a){var b=this,c=Object.keys(this.eventPool);c.map(function(c){b.eventPool[c]&&b.dispose(c,a);});},a.prototype.setCustomAttribute=function(a,b){this.customAttributes||this.resetAnalyticsCustomAttributes(),this.customAttributes[a]=b;},a.prototype.clearCustomAttributes=function(){this.customAttributes={};},a.prototype.removeSession=function(a){var b=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];if(b===!0)delete this.eventPool[a];else{var c=this.eventPool[a];c&&(c.currentState="REMOVED");}},a.prototype.hasDataToSend=function(){for(var a=Object.keys(this.eventPool),b=0;b<a.length;++b)if(this.eventPool[a[b]].events.length>0)return !0;return !1},a.prototype.sendData=function(){var a=this,b=arguments.length<=0||void 0===arguments[0]||arguments[0],c=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];if(!this.pendingRequest_){var d=!1;this.pendingRequest_=!0;var e=void 0;e="undefined"!=typeof Worker&&this.props_.disableWebWorkers!==!0?m.setTimeout(function(){a.pendingRequest_=!1,e=void 0;},2*this.EVENT_PURGE_TIME_DEFAULT):setTimeout(function(){a.pendingRequest_=!1,e=void 0;},2*this.EVENT_PURGE_TIME_DEFAULT);var f=Object.keys(this.eventPool);f.map(function(f){var g=a.eventPool[f];if(g){if(!f)return g.events=[],void a.removeSession(f,!0);if("PLAYING"===g.currentState&&0===g.events.length&&c&&g.events.push({EventType:"Playback.Heartbeat",Timestamp:(new Date).getTime(),OffsetTime:Math.floor(1e3*g.currentTime)}),"IDLE"!==g.currentState&&"REMOVED"!==g.currentState){if(0===g.events.length)return void("FINISHED"===g.currentState&&a.removeSession(f));var h={DispatchTime:(new Date).getTime(),Customer:a.customer_,BusinessUnit:a.businessUnit_,Payload:g.events,SessionId:f,ClockOffset:g.clockOffset};if(a.debugLog("Sending analytics - sessionId: "+f+" and params: ",h),g.retries>a.MAX_RETRIES||g.forbidden===!0)return void(g.events=[]);Math.abs(a.communicationCurrentDate-a.lastCommunicationDate)>a.DEVICE_CLOCK_CHECK_THRESHOLD&&a.initRequest(f).then(function(){}),d=!0,a.sendRequest(b,h,function(b,c){if(e)try{"undefined"!=typeof Worker&&a.props_.disableWebWorkers!==!0?(m.clearTimeout(e),e=void 0):(clearTimeout(e),e=void 0);}catch(d){}a.pendingRequest_=!1;var h=b&&b.httpCode?b.httpCode:200;"undefined"!=typeof c||200!==h?(401===h&&(g.forbidden=!0),a.debugLog("Error sending request to backend",c),g.retries++):(g.events=[],g.retries=0,"FINISHED"===g.currentState&&a.removeSession(f));});}}}),d||(this.pendingRequest_=!1);}},a.prototype.cycle=function(){var a=arguments.length<=0||void 0===arguments[0]||arguments[0],b=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];this.communicationCurrentDate=new Date,this.communicationCurrentTime+=this.CYCLE_TIME,this.hasDataToSend()?(b||this.lastCommunicationTime+this.EVENT_PURGE_TIME_DEFAULT<this.communicationCurrentTime)&&(this.sendData(a),this.lastCommunicationTime=this.communicationCurrentTime,this.lastCommunicationDate=this.communicationCurrentDate):(b||this.lastCommunicationTime+this.TIME_WITHOUT_BEAT_DEFAULT<this.communicationCurrentTime)&&(this.sendData(a,!0),this.lastCommunicationTime=this.communicationCurrentTime,this.lastCommunicationDate=this.communicationCurrentDate);},a.prototype.sendRequest=function(a,b,c){var d=new XMLHttpRequest;d.open("POST",this.serverURL_+"/eventsink/send",!0),d.setRequestHeader("Content-type","application/json"),d.setRequestHeader("Authorization","Bearer "+this.sessionToken_),d.onload=function(){var a=JSON.parse(this.responseText);c(a);},d.onerror=function(a){c(null,a);},d.send(JSON.stringify(b));},a.prototype.initRequest=function(a){var b=this;return new Promise(function(c,d){var e=(new Date).getTime(),f=new XMLHttpRequest;f.open("POST",b.serverURL_+"/eventsink/init",!0),f.setRequestHeader("Content-type","application/json"),f.setRequestHeader("Authorization","Bearer "+b.sessionToken_),f.onload=function(){var d=(new Date).getTime(),g=JSON.parse(f.responseText);if(b.determineClockOffset(a,g,e,d),g&&g.settings){g.settings;g.settings.includeDeviceMetrics&&(b.includeDeviceMetrics_=!!g.settings.includeDeviceMetrics);}c();},f.onerror=function(a){b.debugLog("Unable to init. Aborting."),d(a);};var g={Customer:b.customer_,BusinessUnit:b.businessUnit_,SessionId:a};f.send(JSON.stringify(g));})},a.prototype.debugLog=function(a,b){b=b||"",this.debug_;},a.prototype.addDeviceInfoEvent=function(a){var b=this.eventPool[a];if(this.includeDeviceMetrics_&&b&&b.events&&b.events.length){var c={Timestamp:(new Date).getTime(),EventType:"Device.Info",DeviceModel:this.deviceInfoData_.deviceModel||"Desktop",UserAgent:this.deviceInfoData_.userAgent||i["default"].navigator.userAgent,Height:this.deviceInfoData_.screenHeight||i["default"].screen.height,Width:this.deviceInfoData_.screenWidth||i["default"].screen.width,Model:this.deviceInfoData_.model||i["default"].navigator.appName,Name:this.deviceInfoData_.deviceName||i["default"].navigator.product,OS:this.deviceInfoData_.deviceOS||k["default"].os.family,OSVersion:this.deviceInfoData_.deviceOSVersion||k["default"].os.version,Type:this.deviceInfoData_.type||"WEB"};(this.deviceInfoData_.deviceManufacturer||k["default"].manufacturer)&&(c.Manufacturer=this.deviceInfoData_.deviceManufacturer||k["default"].manufacturer),this.deviceInfoData_.deviceId&&(c.DeviceId=this.deviceInfoData_.deviceId),b.events.push(c);}},a.prototype.determineClockOffset=function(a,b,c,d){var e=this.eventPool[a];e&&(e.clockOffset=Math.floor((d-b.repliedTime+c-b.receivedTime)/2));},a.prototype.createPool=function(a){var b=this;return new Promise(function(c,d){b.eventPool[a]={currentState:"IDLE",currentTime:0,clockOffset:0,events:[],retries:0,forbidden:!1},b.initRequest(a).then(function(){b.addDeviceInfoEvent(a),c();})["catch"](function(a){d(a);});})},a.prototype.addEventToPool=function(a,b,c){var d=this,e=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];if(!e||!this.eventPool[a]||"FINISHED"!==this.eventPool[a].currentState&&"REMOVED"!==this.eventPool[a].currentState){var f;this.eventPool[a]||(f=this.createPool(a)),f?f.then(function(){d.internalAddEventToPool(a,b,c);}):this.internalAddEventToPool(a,b,c);}},a.prototype.internalAddEventToPool=function(a,b,c){var d=this.eventsSkeleton[b.type];if(!d)return void this.debugLog("Unknown playback event: ",b);var e={Timestamp:(new Date).getTime(),EventType:"Playback."+d.event};d.includeOffset&&(e.OffsetTime=Math.floor(1e3*b.currentTime)),d.attributes&&"function"==typeof d.attributes&&(e=this.objectAssign(e,d.attributes(c))),this.eventPool[a].events.push(e),this.debugLog("added "+d.event+" to queue");},a.prototype.changeSessionState=function(a,b){var c,d=this;this.eventPool[a]||(c=this.createPool(a)),c?c.then(function(){d.eventPool[a].currentState=b;}):this.eventPool[a].currentState=b;},a.prototype.initEventSkeleton=function(){var b={};return b.Completed={event:"Completed",autoListener:!1},b.PlayerReady={event:"PlayerReady",autoListener:!1,attributes:function(b){var c={Technology:b.techName,PlayerVersion:b.version};return b.techVersion&&(c.TechVersion=b.techVersion),c.AnalyticsVersion=a.VERSION,b.deviceAppInfo&&(c.DeviceAppInfo=b.deviceAppInfo),b.playMode&&(c.PlayMode=b.playMode),c}},b.Resumed={event:"Resumed",autoListener:!1,includeOffset:!0},b.BufferingStarted={event:"BufferingStarted",includeOffset:!0},b.BufferingEnded={event:"BufferingEnded",includeOffset:!0},b.ScrubbedTo={event:"ScrubbedTo",includeOffset:!0},b.Created={event:"Created",attributes:function(a){var b={};return "undefined"!=typeof a.autoplay&&(b.AutoPlay=a.autoplay),a.techName&&(b.Technology=a.techName),a.player&&(b.Player=a.player),a.version&&(b.Version=a.version),a.requestId&&(b.RequestId=a.requestId),a.techVersion&&(b.TechVersion=a.techVersion),a.deviceAppInfo&&(b.DeviceAppInfo=a.deviceAppInfo),a.playMode&&(b.PlayMode=a.playMode),b}},b.StartCasting={event:"StartCasting",includeOffset:!0},b.StopCasting={event:"StopCasting",includeOffset:!0},b.Paused={event:"Paused",includeOffset:!0},b.BitrateChanged={event:"BitrateChanged",includeOffset:!0,attributes:function(a){return {Bitrate:a.bitrate}}},b.DRM={event:"DRM",includeOffset:!1,attributes:function c(a){var c={};return a.message&&(c.Message=a.message),a.code&&(c.Code=a.code),a.info&&(c.Info=a.info),c}},b.Error={event:"Error",includeOffset:!0,attributes:function d(a){var d={};return a.errorCode&&(d.Code=a.errorCode),a.errorMessage?d.Message=a.errorMessage:d.Message="Unknown Error",a.errorInfo&&(d.Info=a.errorInfo),a.errorDetails&&(d.Details=a.errorDetails),d}},b.HandshakeStarted={event:"HandshakeStarted",autoListener:!1,attributes:function e(a){if(!a.assetId)return {};var e={AssetId:a.assetId};return a.programId&&(e.ProgramId=a.programId),e}},b.ProgramChanged={event:"ProgramChanged",includeOffset:!0,autoListener:!1,attributes:function(a){return a.programId?{ProgramId:a.programId}:{}}},b.Aborted={event:"Aborted",autoListener:!1,includeOffset:!0},b.Started={event:"Started",autoListener:!1,includeOffset:!0,attributes:function f(a){var f={};return a.bitrate&&(f.Bitrate=a.bitrate),a.duration&&(f.VideoLength=1e3*a.duration),a.mediaLocator&&(f.MediaLocator=a.mediaLocator),a.attributes&&(f.Attributes=a.attributes),a.referenceTime&&(f.ReferenceTime=a.referenceTime),a.playMode&&(f.PlayMode=a.playMode),f}},b},a.prototype.objectAssign=function(a,b){for(var c,d,e=1;e<arguments.length;++e){d=arguments[e];for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}return a},g(a,[{key:"debug",get:function(){return this.debug_},set:function(a){this.debug_=a;}},{key:"deviceAppInfo",get:function(){return this.deviceInfoData_?this.deviceInfoData_.deviceAppInfo:null}}]),a}();n.VERSION="2.0.93-7",c["default"]=n,b.exports=c["default"];},{"./platform":6,"global/window":1,"worker-timers":2}],6:[function(b,c,d){(function(b){(function(){function e(a){return a=String(a),a.charAt(0).toUpperCase()+a.slice(1)}function f(a,b,c){var d={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"7 / Server 2008 R2","6.0":"Vista / Server 2008",5.2:"XP 64-bit / Server 2003",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return b&&c&&/^Win/i.test(a)&&!/^Windows Phone /i.test(a)&&(d=d[/[\d.]+$/.exec(a)])&&(a="Windows "+d),a=String(a),b&&c&&(a=a.replace(RegExp(b,"i"),c)),a=h(a.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}function g(a,b){var c=-1,d=a?a.length:0;if("number"==typeof d&&d>-1&&d<=v)for(;++c<d;)b(a[c],c,a);else i(a,b);}function h(a){return a=n(a),/^(?:webOS|i(?:OS|P))/.test(a)?a:e(a)}function i(a,b){for(var c in a)z.call(a,c)&&b(a[c],c,a);}function j(a){return null==a?e(a):A.call(a).slice(8,-1)}function k(a,b){var c=null!=a?typeof a[b]:"number";return !(/^(?:boolean|number|string|undefined)$/.test(c)||"object"==c&&!a[b])}function l(a){return String(a).replace(/([ -])(?!$)/g,"$1?")}function m(a,b){var c=null;return g(a,function(d,e){c=b(c,d,e,a);}),c}function n(a){return String(a).replace(/^ +| +$/g,"")}function o(a){function b(b){return m(b,function(b,c){return b||RegExp("\\b"+(c.pattern||l(c))+"\\b","i").exec(a)&&(c.label||c)})}function c(b){return m(b,function(b,c,d){return b||(c[X]||c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(X)]||RegExp("\\b"+l(d)+"(?:\\b|\\w*\\d)","i").exec(a))&&d})}function d(b){return m(b,function(b,c){return b||RegExp("\\b"+(c.pattern||l(c))+"\\b","i").exec(a)&&(c.label||c)})}function e(b){return m(b,function(b,c){var d=c.pattern||l(c);return !b&&(b=RegExp("\\b"+d+"(?:/[\\d.]+|[ \\w.]*)","i").exec(a))&&(b=f(b,d,c.label||c)),b})}function g(b){return m(b,function(b,c){var d=c.pattern||l(c);return !b&&(b=RegExp("\\b"+d+" *\\d+[.\\w_]*","i").exec(a)||RegExp("\\b"+d+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(a))&&((b=String(c.label&&!RegExp(d,"i").test(c.label)?c.label:b).split("/"))[1]&&!/[\d.]+/.test(b[0])&&(b[0]+=" "+b[1]),c=c.label||c,b=h(b[0].replace(RegExp(d,"i"),c).replace(RegExp("; *(?:"+c+"[_-])?","i")," ").replace(RegExp("("+c+")[-_.]?(\\w)","i"),"$1 $2"))),b})}function p(b){return m(b,function(b,c){return b||(RegExp(c+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(a)||0)[1]||null})}function s(){return this.description||""}var t=q,u=a&&"object"==typeof a&&"String"!=j(a);u&&(t=a,a=null);var v=t.navigator||{},y=v.userAgent||"";a||(a=y);var z,B,C=u||x==r,D=u?!!v.likeChrome:/\bChrome\b/.test(a)&&!/internal|\n/i.test(A.toString()),E="Object",F=u?E:"ScriptBridgingProxyObject",G=u?E:"Environment",H=u&&t.java?"JavaPackage":j(t.java),I=u?E:"RuntimeObject",J=/\bJava/.test(H)&&t.java,K=J&&j(t.environment)==G,L=J?"a":"α",M=J?"b":"β",N=t.document||{},O=t.operamini||t.opera,P=w.test(P=u&&O?O["[[Class]]"]:j(O))?P:O=null,Q=a,R=[],S=null,T=a==y,U=T&&O&&"function"==typeof O.version&&O.version(),V=b([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),W=d(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt","SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox Mobile",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),X=g([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation 3","PlayStation 4","PlayStation Vita","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),Y=c({Apple:{iPad:1,iPhone:1,iPod:1},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{"PlayStation 4":1,"PlayStation 3":1,"PlayStation Vita":1}}),Z=e(["Windows Phone ","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(V&&(V=[V]),Y&&!X&&(X=g([Y])),(z=/\bGoogle TV\b/.exec(X))&&(X=z[0]),/\bSimulator\b/i.test(a)&&(X=(X?X+" ":"")+"Simulator"),"Opera Mini"==W&&/\bOPiOS\b/.test(a)&&R.push("running in Turbo/Uncompressed mode"),/^iP/.test(X)?(W||(W="Safari"),Z="iOS"+((z=/ OS ([\d_]+)/i.exec(a))?" "+z[1].replace(/_/g,"."):"")):"Konqueror"!=W||/buntu/i.test(Z)?Y&&"Google"!=Y&&(/Chrome/.test(W)&&!/\bMobile Safari\b/i.test(a)||/\bVita\b/.test(X))?(W="Android Browser",Z=/\bAndroid\b/.test(Z)?Z:"Android"):"Silk"==W?(/\bMobi/i.test(a)||(Z="Android",R.unshift("desktop mode")),/Accelerated *= *true/i.test(a)&&R.unshift("accelerated")):"PaleMoon"==W&&(z=/\bFirefox\/([\d.]+)\b/.exec(a))?R.push("identifying as Firefox "+z[1]):"Firefox"==W&&(z=/\b(Mobile|Tablet|TV)\b/i.exec(a))?(Z||(Z="Firefox OS"),X||(X=z[1])):W&&!(z=!/\bMinefield\b/i.test(a)&&/\b(?:Firefox|Safari)\b/.exec(W))||(W&&!X&&/[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(z+"/")+8))&&(W=null),(z=X||Y||Z)&&(X||Y||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Z))&&(W=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Z)?Z:z)+" Browser")):Z="Kubuntu",U||(U=p(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))","Version",l(W),"(?:Firefox|Minefield|NetFront)"])),(z="iCab"==V&&parseFloat(U)>3&&"WebKit"||/\bOpera\b/.test(W)&&(/\bOPR\b/.test(a)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(a)&&!/^(?:Trident|EdgeHTML)$/.test(V)&&"WebKit"||!V&&/\bMSIE\b/i.test(a)&&("Mac OS"==Z?"Tasman":"Trident")||"WebKit"==V&&/\bPlayStation\b(?! Vita\b)/i.test(W)&&"NetFront")&&(V=[z]),"IE"==W&&(z=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a)||0)[1])?(W+=" Mobile",Z="Windows Phone "+(/\+$/.test(z)?z:z+".x"),R.unshift("desktop mode")):/\bWPDesktop\b/i.test(a)?(W="IE Mobile",Z="Windows Phone 8.x",R.unshift("desktop mode"),U||(U=(/\brv:([\d.]+)/.exec(a)||0)[1])):"IE"!=W&&"Trident"==V&&(z=/\brv:([\d.]+)/.exec(a))&&(W&&R.push("identifying as "+W+(U?" "+U:"")),W="IE",U=z[1]),T){if(k(t,"global"))if(J&&(z=J.lang.System,Q=z.getProperty("os.arch"),Z=Z||z.getProperty("os.name")+" "+z.getProperty("os.version")),C&&k(t,"system")&&(z=[t.system])[0]){Z||(Z=z[0].os||null);try{z[1]=t.require("ringo/engine").version,U=z[1].join("."),W="RingoJS";}catch($){z[0].global.system==t.system&&(W="Narwhal");}}else"object"==typeof t.process&&(z=t.process)?(W="Node.js",Q=z.arch,Z=z.platform,U=/[\d.]+/.exec(z.version)[0]):K&&(W="Rhino");else j(z=t.runtime)==F?(W="Adobe AIR",Z=z.flash.system.Capabilities.os):j(z=t.phantom)==I?(W="PhantomJS",U=(z=z.version||null)&&z.major+"."+z.minor+"."+z.patch):"number"==typeof N.documentMode&&(z=/\bTrident\/(\d+)/i.exec(a))&&(U=[U,N.documentMode],(z=+z[1]+4)!=U[1]&&(R.push("IE "+U[1]+" mode"),V&&(V[1]=""),U[1]=z),U="IE"==W?String(U[1].toFixed(1)):U[0]);Z=Z&&h(Z);}U&&(z=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(U)||/(?:alpha|beta)(?: ?\d)?/i.exec(a+";"+(T&&v.appMinorVersion))||/\bMinefield\b/i.test(a)&&"a")&&(S=/b/i.test(z)?"beta":"alpha",U=U.replace(RegExp(z+"\\+?$"),"")+("beta"==S?M:L)+(/\d+\+?/.exec(z)||"")),"Fennec"==W||"Firefox"==W&&/\b(?:Android|Firefox OS)\b/.test(Z)?W="Firefox Mobile":"Maxthon"==W&&U?U=U.replace(/\.[\d.]+/,".x"):/\bXbox\b/i.test(X)?(Z=null,"Xbox 360"==X&&/\bIEMobile\b/.test(a)&&R.unshift("mobile mode")):!/^(?:Chrome|IE|Opera)$/.test(W)&&(!W||X||/Browser|Mobi/.test(W))||"Windows CE"!=Z&&!/Mobi/i.test(a)?"IE"==W&&T&&null===t.external?R.unshift("platform preview"):(/\bBlackBerry\b/.test(X)||/\bBB10\b/.test(a))&&(z=(RegExp(X.replace(/ +/g," *")+"/([.\\d]+)","i").exec(a)||0)[1]||U)?(z=[z,/BB10/.test(a)],Z=(z[1]?(X=null,Y="BlackBerry"):"Device Software")+" "+z[0],U=null):this!=i&&"Wii"!=X&&(T&&O||/Opera/.test(W)&&/\b(?:MSIE|Firefox)\b/i.test(a)||"Firefox"==W&&/\bOS X (?:\d+\.){2,}/.test(Z)||"IE"==W&&(Z&&!/^Win/.test(Z)&&U>5.5||/\bWindows XP\b/.test(Z)&&U>8||8==U&&!/\bTrident\b/.test(a)))&&!w.test(z=o.call(i,a.replace(w,"")+";"))&&z.name&&(z="ing as "+z.name+((z=z.version)?" "+z:""),w.test(W)?(/\bIE\b/.test(z)&&"Mac OS"==Z&&(Z=null),
  z="identify"+z):(z="mask"+z,W=P?h(P.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(z)&&(Z=null),T||(U=null)),V=["Presto"],R.push(z)):W+=" Mobile",(z=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(a)||0)[1])&&(z=[parseFloat(z.replace(/\.(\d)$/,".0$1")),z],"Safari"==W&&"+"==z[1].slice(-1)?(W="WebKit Nightly",S="alpha",U=z[1].slice(0,-1)):U!=z[1]&&U!=(z[2]=(/\bSafari\/([\d.]+\+?)/i.exec(a)||0)[1])||(U=null),z[1]=(/\bChrome\/([\d.]+)/i.exec(a)||0)[1],537.36==z[0]&&537.36==z[2]&&parseFloat(z[1])>=28&&"WebKit"==V&&(V=["Blink"]),T&&(D||z[1])?(V&&(V[1]="like Chrome"),z=z[1]||(z=z[0],z<530?1:z<532?2:z<532.05?3:z<533?4:z<534.03?5:z<534.07?6:z<534.1?7:z<534.13?8:z<534.16?9:z<534.24?10:z<534.3?11:z<535.01?12:z<535.02?"13+":z<535.07?15:z<535.11?16:z<535.19?17:z<536.05?18:z<536.1?19:z<537.01?20:z<537.11?"21+":z<537.13?23:z<537.18?24:z<537.24?25:z<537.36?26:"Blink"!=V?"27":"28")):(V&&(V[1]="like Safari"),z=z[0],z=z<400?1:z<500?2:z<526?3:z<533?4:z<534?"4+":z<535?5:z<537?6:z<538?7:z<601?8:"8"),V&&(V[1]+=" "+(z+="number"==typeof z?".x":/[.+]/.test(z)?"":"+")),"Safari"==W&&(!U||parseInt(U)>45)&&(U=z)),"Opera"==W&&(z=/\bzbov|zvav$/.exec(Z))?(W+=" ",R.unshift("desktop mode"),"zvav"==z?(W+="Mini",U=null):W+="Mobile",Z=Z.replace(RegExp(" *"+z+"$"),"")):"Safari"==W&&/\bChrome\b/.exec(V&&V[1])&&(R.unshift("desktop mode"),W="Chrome Mobile",U=null,/\bOS X\b/.test(Z)?(Y="Apple",Z="iOS 4.3+"):Z=null),U&&0==U.indexOf(z=/[\d.]+$/.exec(Z))&&a.indexOf("/"+z+"-")>-1&&(Z=n(Z.replace(z,""))),V&&!/\b(?:Avant|Nook)\b/.test(W)&&(/Browser|Lunascape|Maxthon/.test(W)||"Safari"!=W&&/^iOS/.test(Z)&&/\bSafari\b/.test(V[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(W)&&V[1])&&(z=V[V.length-1])&&R.push(z),R.length&&(R=["("+R.join("; ")+")"]),Y&&X&&X.indexOf(Y)<0&&R.push("on "+Y),X&&R.push((/^on /.test(R[R.length-1])?"":"on ")+X),Z&&(z=/ ([\d.+]+)$/.exec(Z)||(B=/^[a-z]+ ([\d.+]+) \//i.exec(Z)),Z={architecture:32,family:z&&!B?Z.replace(z[0],""):Z,version:z?z[1]:null,toString:function(){var a=this.version;return this.family+(a&&!B?" "+a:"")+(64==this.architecture?" 64-bit":"")}}),(z=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(Q))&&!/\bi686\b/i.test(Q)&&(Z&&(Z.architecture=64,Z.family=Z.family.replace(RegExp(" *"+z),"")),W&&(/\bWOW64\b/i.test(a)||T&&/\w(?:86|32)$/.test(v.cpuClass||v.platform)&&!/\bWin64; x64\b/i.test(a))&&R.unshift("32-bit")),a||(a=null);var _={};return _.description=a,_.layout=V&&V[0],_.manufacturer=Y,_.name=W,_.prerelease=S,_.product=X,_.ua=a,_.version=W&&U,_.os=Z||{architecture:null,family:null,version:null,toString:function(){return "null"}},_.parse=o,_.toString=s,_.version&&R.unshift(U),_.name&&R.unshift(W),Z&&W&&(Z!=String(Z).split(" ")[0]||Z!=W.split(" ")[0]&&!X)&&R.push(X?"("+Z+")":"on "+Z),R.length&&(_.description=R.join(" ")),_}var p={"function":!0,object:!0},q=p[typeof window]&&window||this,r=q,s=p[typeof d]&&d,t=p[typeof c]&&c&&!c.nodeType&&c,u=s&&t&&"object"==typeof b&&b;!u||u.global!==u&&u.window!==u&&u.self!==u||(q=u);var v=Math.pow(2,53)-1,w=/\bOpera/,x=this,y=Object.prototype,z=y.hasOwnProperty,A=y.toString;s&&t?i(o(),function(a,b){s[b]=a;}):q.platform=o();}).call(void 0);}).call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}]},{},[5])(5)});
  });

  var empAnalyticsTmp = unwrapExports(empAnalytics_min);

  var EMPAnalytics = window_1.empAnalytics ? window_1.empAnalytics : empAnalyticsTmp;
  var Plugin = videojs.getPlugin('plugin');
  /**
   * AnalyticsPlugin
   *
   * @param {Player} player The `Player` that this class should be attached to.
   * @param {Object=} options The key/value store of player options.
   * @class AnalyticsPlugin
   */

  var AnalyticsPlugin =
  /*#__PURE__*/
  function (_Plugin) {
    _inheritsLoose(AnalyticsPlugin, _Plugin);

    /**
    * constructor
    *
    * @param {Player} player The `Player` that this class should be attached to.
    * @param {Object=} options The key/value store of player options.
    */
    function AnalyticsPlugin(player, options) {
      var _this;

      _this = _Plugin.call(this, player, options) || this;
      log('AnalyticsPlugin', 'create');
      _this.analyticsConnector_ = null;
      _this.options_ = options;
      _this.onLoadStartBind = _this.onLoadStart_.bind(_assertThisInitialized(_this));

      _this.player.on(empPlayerEvents.LOAD_START, _this.onLoadStartBind);

      var client = detectClient();
      _this.options_ = _this.options_ ? _this.options_ : {};
      _this.options_.analytics = _this.options_.analytics ? _this.options_.analytics : {};
      _this.options_.analytics.deviceInfo = _this.options_.analytics.deviceInfo ? _this.options_.analytics.deviceInfo : {};
      _this.options_.analytics.deviceInfo = videojs.mergeOptions({
        deviceName: client.name,
        model: client.version
      }, _this.options_.analytics.deviceInfo);
      return _this;
    }
    /**
     *  stop Analytics
     */


    var _proto = AnalyticsPlugin.prototype;

    _proto.stop = function stop() {
      if (this.analyticsConnector_ && this.analyticsConnector_.dispose) {
        this.analyticsConnector_.dispose();
        this.analyticsConnector_ = null;
      }
    }
    /**
     * stopCasting
     */
    ;

    _proto.stopCasting = function stopCasting() {
      if (this.analyticsConnector_ && this.analyticsConnector_.dispose) {
        this.analyticsConnector_.onChromeCastingStop(true);
        this.analyticsConnector_ = null;
      }
    }
    /**
     * dispose Analytics
     */
    ;

    _proto.dispose = function dispose() {
      log('AnalyticsPlugin', 'dispose');
      this.player.off(empPlayerEvents.LOAD_START, this.onLoadStartBind);
      this.stop();

      _Plugin.prototype.dispose.call(this);
    }
    /**
     * Set or get the key/value store of analytics options.
     *
     * @param {Object=} opt options
     * @return {Object} options
     */
    ;

    _proto.options = function options(opt) {
      if (!opt) {
        return this.options_;
      }

      this.options_ = videojs.mergeOptions(this.options_, opt);
    }
    /**
     * Create a new Analytics session
     *
     * @param {Object=} opt options
     */
    ;

    _proto.newAnalytics = function newAnalytics(opt) {
      log('new EMPAnalytics'); // exposureApiURL, customer, businessUnit, sessionToken, userId, deviceInfoData = {}, props = {}

      var analytics = new EMPAnalytics(opt.exposureApiURL, opt.customer, opt.businessUnit, opt.sessionToken, opt.userId, this.options_.analytics && this.options_.analytics.deviceInfo);
      this.stop();
      log('new EMPAnalyticsConnector');
      this.analyticsConnector_ = new EMPAnalyticsConnector(this.player, analytics, this.options_);
    }
    /**
     * Getter for analyticsConnector
     *
     */
    ;

    /**
     * Call onEntitlementLoadStart
     */
    _proto.onEntitlementLoadStart = function onEntitlementLoadStart() {
      if (this.analyticsConnector_) {
        this.analyticsConnector_.onEntitlementLoadStart();
      }
    }
    /**
     * Call onError
     *
     * @param {Error} e
     */
    ;

    _proto.onError = function onError(e) {
      if (this.analyticsConnector_) {
        this.analyticsConnector_.onError(e);
      }
    }
    /**
     * Call onWindowUnload
     */
    ;

    _proto.onWindowUnload = function onWindowUnload() {
      if (this.analyticsConnector_) {
        this.analyticsConnector_.onWindowUnload();
      }
    }
    /**
     *  Handle onLoadStart event
     *
     * @param {EventTarget~Event} [event]
     * @private
     */
    ;

    _proto.onLoadStart_ = function onLoadStart_(event) {
      // if no entitlement stop analytics
      if (!extplayer.getEntitlement(this.player)) {
        this.stop();
      }
    }
    /**
     * Get version
     *
     @return {string} version
    */
    ;

    _proto.version = function version() {
      if (EMPAnalytics) {
        return EMPAnalytics.VERSION;
      }

      return _Plugin.prototype.version.call(this);
    };

    _createClass(AnalyticsPlugin, [{
      key: "connector",
      get: function get() {
        return this.analyticsConnector_;
      }
    }]);

    return AnalyticsPlugin;
  }(Plugin);

  AnalyticsPlugin.VERSION = '2.1.101-324';

  if (videojs.getPlugin('analytics')) {
    videojs.log.warn('A plugin named "analytics" already exists.');
  } else {
    videojs.registerPlugin('analytics', AnalyticsPlugin);
  }

  var dist = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ExtendableError = (function (_Error) {
    _inherits(ExtendableError, _Error);

    function ExtendableError() {
      var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      _classCallCheck(this, ExtendableError);

      _get(Object.getPrototypeOf(ExtendableError.prototype), 'constructor', this).call(this, message);

      // extending Error is weird and does not propagate `message`
      Object.defineProperty(this, 'message', {
        enumerable: false,
        value: message,
        writable: true
      });

      Object.defineProperty(this, 'name', {
        enumerable: false,
        value: this.constructor.name,
        writable: true
      });

      if (Error.hasOwnProperty('captureStackTrace')) {
        Error.captureStackTrace(this, this.constructor);
        return;
      }

      Object.defineProperty(this, 'stack', {
        enumerable: false,
        value: new Error(message).stack,
        writable: true
      });
    }

    return ExtendableError;
  })(Error);

  exports['default'] = ExtendableError;
  module.exports = exports['default'];
  });

  var ExtendableError = unwrapExports(dist);

  /**
    * EntitlementError
    *
    * @class EntitlementError
    * @extends EntitlementError
    * @param {Object=} error Object or string describing error
    */

  var EntitlementError =
  /*#__PURE__*/
  function (_ExtendableError) {
    _inheritsLoose(EntitlementError, _ExtendableError);

    /**
     * Constructor
     *
     * @param {Object=} error Object or string describing error
     */
    function EntitlementError(error) {
      var _this;

      if (error === void 0) {
        error = {};
      }

      // Error can be either string with error message. or Object with more information.
      // Parse whatever we get
      var message;
      var fatal = true;
      var code = EmpPlayerErrorCodes.ENTITLEMENT2;

      if (typeof error === 'string') {
        message = error;
      } else if (error instanceof Object) {
        message = error.message;

        if (error.fatal === false) {
          fatal = error.fatal;
        }

        if (error.code) {
          code = error.code;
        }
      }

      _this = _ExtendableError.call(this, message) || this;
      _this.fatal = fatal;
      _this.code = code;
      return _this;
    }
    /**
     * Get fatal
     *
     * @return {boolean} is fatal
     */


    _createClass(EntitlementError, [{
      key: "fatal",
      get: function get() {
        return !!this.fatal_;
      }
      /**
       * Set fatal
       *
       * @param {boolean} fatal
       */
      ,
      set: function set(fatal) {
        this.fatal_ = fatal;
      }
    }]);

    return EntitlementError;
  }(ExtendableError);

  /**
   * EntitlementEngine base class. Used to retrieve entitlements for VODs or LIVE videos
   * To use a custom implementation of an EntitlementEngine extend this class,
   * implement getVodEntitlement and getLiveEntitlement and register is using EntitlementEngine.registerEntitlementEngine(name, class);
   */
  /**
   * EntitlementEngine Class
   *
   * @param {Object=} options Object of option names and values
   * @class EntitlementEngine
   */

  var EntitlementEngine =
  /*#__PURE__*/
  function () {
    /**
     * Create EntitlementEngine
     *
     * @param {Object=} options Object of option names and values
     */
    function EntitlementEngine(options) {
      if (options === void 0) {
        options = {};
      }

      this.options_ = options;
    }
    /**
     * Get Entitlement
     *
     * Called by the player to get an entitlement. Entitlement requests contain an assetId and an optional programId.
     * If the programId exists, the assetId is the channelId. if the programId doesn't exist the assetId is the assetId.
     *
     * The callback should be called when the requests completes, if it fails it should contain an EntitlementError
     * Exception object as it's second parameter.
     *
     * if it succeeds it should return the Entitlement as the first parameter.
     *
     * The Entitlement should contain the following parameters:
     *
     * playToken - Playtoken required for drm
     * mediaLocator - URL of playlist file
     *
     * @param {EntitlementRequest}    entitlementRequest  Entitlement request to execute
     * @param {Object}                playRequest         Playrequest object containing information about the required
     *                                                    attributes of the entitlement (e.g. { drm: 'EDRM', 'format': 'HLS' }
     * @param {function}             callback            Callback when entitlement is fetched or an error occurs
     */


    var _proto = EntitlementEngine.prototype;

    _proto.getEntitlement = function getEntitlement(entitlementRequest, playRequest, callback) {
      throw new EntitlementError('EntitlementEngine: getEntitlement should be implemented in subclass.');
    }
    /**
    * Get Entitlement version 2
    *
    * Called by the player to get an entitlement. Entitlement requests contain an assetId and an optional programId.
    * If the programId exists, the assetId is the channelId. if the programId doesn't exist the assetId is the assetId.
    *
    * The callback should be called when the requests completes, if it fails it should contain an EntitlementError
    * Exception object as it's second parameter.
    *
    * if it succeeds it should return the Entitlement as the first parameter.
    *
    * The Entitlement should contain the following parameters:
    *
    * playToken - Playtoken required for drm
    * mediaLocator - URL of playlist file
    *
    * @param {EntitlementRequest}    entitlementRequest  Entitlement request to execute
    * @param {Object}                playRequest         Playrequest object containing information about the required
    *                                                    attributes of the entitlement (e.g. { drm: 'EDRM', 'format': 'HLS' }
    * @param {function}             callback             Callback when entitlement is fetched or an error occurs
    * @param {Entitlement}          preEntitlement       Previous Entitlement after error
    */
    ;

    _proto.getV2Entitlement = function getV2Entitlement(entitlementRequest, playRequest, callback, preEntitlement) {
      throw new EntitlementError('EntitlementEngine: getV2Entitlement should be implemented in subclass.');
    }
    /**
    * Get VOD entitlement version 2
    *
    * @param {EntitlementRequest}    entitlementRequest  Entitlement request to execute
    * @param {Object}    playRequest Playrequest payload
    * @param {Entitlement}    preEntitlement  pre Entitlement
    * @param {Function=} callback    Callback when entitlement is fetched
    * @private
    */
    ;

    _proto.getV2Asset_ = function getV2Asset_(entitlementRequest, playRequest, preEntitlement, callback) {
      if (callback === void 0) {
        callback = function callback() {};
      }

      throw new EntitlementError('EntitlementEngine: getV2Asset_ should be implemented in subclass.');
    }
    /**
     * Returns the exact servertime
     *
     * @param {EntitlementEngine~getServerTimeCallback}  callback  Callback when server time is fetched or an error occurs
     */
    ;

    _proto.getServerTime = function getServerTime(callback) {
      throw new EntitlementError('EntitlementEngine: getServerTime should be implemented in subclass.');
    }
    /**
    * Sync localtime with servertime
     *
    * @param {EntitlementEngine~getServerTimeCallback}  callback  Callback when localtime sync with servertime or an error occurs
    */
    ;

    _proto.syncServerTime = function syncServerTime(callback) {
      this.getServerTime(function (date, error) {
        if (error) {
          log.error('getServerTime', error);
          date = new Date();
        }

        EntitlementEngine.ServerTimeDiff_ = date - new Date();
        log('serverDiff', EntitlementEngine.ServerTimeDiff_);

        if (callback) {
          callback(EntitlementEngine.ServerTimeDiff_, error);
        }
      });
    }
    /**
     * getCachedServerTime
     *
     * @return {number} getCachedServerTime
     */
    ;

    _proto.getCachedServerTime = function getCachedServerTime() {
      return EntitlementEngine.ServerTimeDiff_ !== undefined ? Date.now() + EntitlementEngine.ServerTimeDiff_ : Date.now();
    }
    /**
    * Get user preferences key/value pair of (audioLang, subtitlesLang)
    *
    * @param {EntitlementEngine~getPreferences}  callback  Callback with user Preferences
    */
    ;

    _proto.getPreferences = function getPreferences(callback) {
      throw new EntitlementError('EntitlementEngine: getPreferences should be implemented in subclass.');
    }
    /**
    * Save user preferences (audioLang, subtitlesLang)
    *
    * @param {any} preferences key/value pair of (audioLang, subtitlesLang)
    * @param {function} callback
    */
    ;

    _proto.savePreferences = function savePreferences(preferences, callback) {
      throw new EntitlementError('EntitlementEngine: savePreferences should be implemented in subclass.');
    }
    /**
     * This callback is called by getServerTime when current time is fetched from the server or an error occured
     * @callback EntitlementEngine~getServerTimeCallback
     * @param {Date} date Current server time
     * @param {string} error Error description
     */

    /**
     * Get the program based on EPG
     *
     * @param {string} channelId
     * @param {Date} date
     * @param {Function} callback
     * @param {string} programId
     */
    ;

    _proto.getProgramInfo = function getProgramInfo(channelId, date, callback, programId) {
      throw new EntitlementError('EntitlementEngine: getProgramInfo should be implemented in subclass.');
    }
    /**
    * Get EPG
     *
    * @param {string} channelId
    * @param {string} from
    * @param {string} to
    * @param {Function} callback
    */
    ;

    _proto.getEPG = function getEPG(channelId, from, to, callback) {
      throw new EntitlementError('EntitlementEngine: getEPG should be implemented in subclass.');
    }
    /**
    * Get the Asset Info
     *
    * @param {string} assetId
    * @param {Function} callback
    */
    ;

    _proto.getAssetInfo = function getAssetInfo(assetId, callback) {
      throw new EntitlementError('EntitlementEngine: getAssetInfo should be implemented in subclass.');
    }
    /**
     * get ChannelInfo
     *
     * @param {string}    channelId Channel to fetch from
     * @param {function}  callback Callback when entitlement is fetched
     */
    ;

    _proto.getChannelInfo = function getChannelInfo(channelId, callback) {
      throw new EntitlementError('EntitlementEngine: getChannelInfo should be implemented in subclass.');
    }
    /**
     * Verifies if sessionToken is still valid
     *
     * @param {Function} okFn - callback if session is ok
     * @param {Function} nokFn - callback if session is not ok
     */
    ;

    _proto.verifySession = function verifySession(okFn, nokFn) {
      throw new EntitlementError('EntitlementEngine: verifySession should be implemented in subclass.');
    }
    /**
    * verify the entitlement
     *
    * @param {string} assetId
    * @param {Object} playRequest
    * @param {function} callback
    */
    ;

    _proto.verifyEntitlement = function verifyEntitlement(assetId, playRequest, callback) {
      throw new EntitlementError('EntitlementEngine: verifyEntitlement should be implemented in subclass.');
    }
    /**
    * Login
     *
    * @param {string} username
    * @param {string} password
    * @param {Function} callback
    * @param {string} mfacode
    */
    ;

    _proto.login = function login(username, password, callback, mfacode) {
      throw new EntitlementError('EntitlementEngine: login should be implemented in subclass.');
    }
    /**
     * logout
     *
     * @param {Function} callBack
     */
    ;

    _proto.logout = function logout(callBack) {
      throw new EntitlementError('EntitlementEngine: logout should be implemented in subclass.');
    }
    /**
      * Fetch user Preferences
     *
      * @param {Function} callback
     */
    ;

    _proto.fetchPreferences = function fetchPreferences(callback) {
      throw new EntitlementError('EntitlementEngine: fetchPreferences should be implemented in subclass.');
    }
    /**
    * Save user preferences
     *
    * @param {Object} preferences
    * @param {Function} callback
    */
    ;

    _proto.savePreferences = function savePreferences(preferences, callback) {
      throw new EntitlementError('EntitlementEngine: savePreferences should be implemented in subclass.');
    }
    /**
     * Return whether the past argument is an entitlement engine or not
     *
     * @param {Object} object An item to check
     * @return {boolean}      Wheter it is a entitlement engine or not
     */
    ;

    EntitlementEngine.isEntitlementEngine = function isEntitlementEngine(object) {
      return object.prototype instanceof EntitlementEngine || object instanceof EntitlementEngine || object === EntitlementEngine;
    }
    /**
     * Register an entitlement engine
     *
     * @param {string} name     Name of the entitlement engine
     * @param {EntitlementEngine} entitlementEngine The entitlement engine to register
     * @return {EntitlementEngine} EntitlementEngine
     * @throws Error
     * @static
     */
    ;

    EntitlementEngine.registerEntitlementEngine = function registerEntitlementEngine(name, entitlementEngine) {
      if (!EntitlementEngine.engines_) {
        EntitlementEngine.engines_ = {};
      }

      if (!EntitlementEngine.isEntitlementEngine(entitlementEngine)) {
        throw new EntitlementError('EntitlementEngine ' + name + ' must be a EntitlementEngine');
      }

      EntitlementEngine.engines_[name] = entitlementEngine;
      return entitlementEngine;
    }
    /**
     * Get an entitlement engine by name
     *
     * @param {string} name Name of the entitlement engine
     * @static
     * @return {EntitlementEngine} EntitlementEngine
     */
    ;

    EntitlementEngine.getEntitlementEngine = function getEntitlementEngine(name) {
      name = name ? name : 'EricssonExposure';

      if (EntitlementEngine.engines_ && EntitlementEngine.engines_[name]) {
        return EntitlementEngine.engines_[name];
      }

      return null;
    };

    return EntitlementEngine;
  }();

  EntitlementEngine.ServerTimeDiff_ = undefined;

  /**
   * Entitlement Base Class
   *
   * @class Entitlement
   * @param {Object}  [options]              - Object of option names and values
   * @param {string}  [options.assetId]      - asset identifier
   * @param {string}  [options.programId]     - program identifier
   * @param {string}  [options.channelId]     - channel identifier
   * @param {string}  [options.playToken=''] - play token string to be used to authenticate the DRM license requests
   * @param {string}  [options.mediaLocator=''] - stream locator to be used by the underlying playback technology
   * @param {Object}  [options.edrmConfig=null] - EDRM configuration object as provided by EMP Exposure API
   * @param {boolean} [options.live=false]   - set to true if the Entitlement represents a Live stream
   * @param {integer} [options.minBitrate=0] - set to any value >0 to limit the minimum playback bitrate
   * @param {integer} [options.maxBitrate=0] - set to any value >0 to limit the maximum playback bitrate
   * @param {integer} [options.maxResWidth=0] - set to any value >0 to limit the maximum playback resolution width
   * @param {integer} [options.maxResHeight=0] - set to any value >0 to limit the maximum playback resolution height
   * @param {boolean} [options.rwEnabled=true] - set to false to disable rewind option
   * @param {boolean} [options.ffEnabled=true] - set to false to disable fast forward option
   * @param {boolean} [options.airplayBlocked=false] - set to true to disable airplay option
   * @param {boolean} [options.timeshiftEnabled=undefined] - set to false to disable timeshift option
   * @param {Object}  [options.protection] - certificateUrl and licenseAcquisitionUrl for fairplay
   * @param {string}  [options.mdnRequestRouterUrl= ''] - MDN request router URL
   * @param {Array}   [options.baseUris= ''] -  baseUris from MDN request router
   * @param {Object}  [options.analyticsConfig=null] - analytics props to override on analytics object
   * @param {string}  [options.lastViewedOffset=null] - Last viewed offset
   * @param {string}  [options.lastViewedTime=null] - Last viewed offset absolute time
   * @param {string}  [options.liveTime=null] - Last viewed offset liveTime
   * @param {Object}  [options.keySystems] - keySystems for dash
   * @param {Object}  [options.requestId] - requestId for the play call
   * @param {Object}  [options.adMediaLocator] - MediaLocator for ad override MediaLocator
   * @param {Object}  [options.fairplayConfig] - fairplayConfig {certificateUrl, licenseAcquisitionUrl}
   * @param {Object}  [options.widevineConfig]  - widevineConfig {certificateServer}

   */

  var Entitlement =
  /*#__PURE__*/
  function () {
    /**
     * Creat Entitlement
     */
    function Entitlement() {
      // derived properties
      this.channelId = 0;
      this.assetId = undefined;
      this.programId = undefined;
      this.productId = '';
      this.mimeType = '';
      this.playRequest = null;
      this.requestId = ''; // properties from play call

      this.edrmConfig = null;
      this.live = false;
      this.playSessionId = '';
      this.analyticsConfig = null;
      this.lastViewedOffset = null;
      this.lastViewedTime = null;
      this.liveTime = null;
      this.entitlementType = '';
      this.licenseExpiration = null;
      this.licenseExpirationReason = '';
      this.minBitrate = 0;
      this.maxBitrate = 0;
      this.maxResWidth = 0;
      this.maxResHeight = 0;
      this.rwEnabled = true;
      this.ffEnabled = true;
      this.airplayBlocked = false;
      this.mdnRequestRouterUrl = '';
      this.timeshiftEnabled = true;
      this.formats = null; // processed properties from play call

      this.mediaLocator = '';
      this.src = '';
      this.adMediaLocator = '';
      this.streamInfo = null;
      this.playToken = '';
      this.playTokenExpiration = '';
      this.protection = undefined;
      this.certificateServer = undefined;
      this.keySystems = undefined;
    }
    /**
     * common Initiate
     *
     * @param {Object} options Object of option names and values
     * @private
     */


    var _proto = Entitlement.prototype;

    _proto.commonInitiate = function commonInitiate(options) {
      // properties from play call
      this.edrmConfig = options.edrmConfig || null;
      this.playSessionId = options.playSessionId || '';
      this.analyticsConfig = options.analyticsConfig || null;
      this.entitlementType = options.entitlementType || '';
      this.mdnRequestRouterUrl = options.mdnRequestRouterUrl || '';
      this.playToken = options.playToken || '';
      this.playTokenExpiration = options.playTokenExpiration || '';
    }
    /**
     * Initiate entitlement Version 1
     *
     * @param {Object} options Object of option names and values
     * @param {number} serverTime
     * @private
     */
    ;

    _proto.initiateV1 = function initiateV1(options, serverTime) {
      this.commonInitiate(options);
      this.minBitrate = options.minBitrate || 0;
      this.maxBitrate = options.maxBitrate || 0;
      this.maxResWidth = options.maxResWidth || 0;
      this.maxResHeight = options.maxResHeight || 0;
      this.rwEnabled = options.rwEnabled === undefined ? true : options.rwEnabled;
      this.ffEnabled = options.ffEnabled === undefined ? true : options.ffEnabled;
      this.airplayBlocked = options.airplayBlocked === undefined ? false : options.airplayBlocked;
      this.timeshiftEnabled = options.timeshiftEnabled || true;
      this.lastViewedOffset = options.lastViewedOffset || null;
      this.lastViewedTime = options.lastViewedTime || null;
      this.liveTime = options.liveTime || null;
      this.live = options.live || false;
      var licenseExpirationTimestamp = Date.parse(options.licenseExpiration || null);

      if (isNaN(licenseExpirationTimestamp) === false) {
        this.licenseExpiration = new Date(licenseExpirationTimestamp);
      }

      this.licenseExpirationReason = options.licenseExpirationReason || ''; // processed properties from play call

      this.mediaLocator = options.mediaLocator || '';

      if (this.mediaLocator) {
        if (window_1.location.hostname === 'localhost') {
          this.src = this.mediaLocator;
        } else {
          this.src = this.mediaLocator.replace(/^(http:)/, '').replace(/^(https:)/, '');
        }
      }

      this.adMediaLocator = options.adMediaLocator || '';

      if (options.streamInfo) {
        this.streamInfo = options.streamInfo;
      } else {
        this.setupStreamInfo(serverTime);
      }

      if (options.fairplayConfig) {
        this.protection = {};
        this.protection.certificateUrl = options.fairplayConfig.certificateUrl || '';
        this.protection.licenseUrl = options.fairplayConfig.licenseAcquisitionUrl || '';

        if (options.fairplayConfig.secondaryMediaLocator) {
          this.protection.version = 'mrr';
        } else {
          this.protection.version = 'irdeto';
        } // For Html5 tech with videojs-contrib-eme


        this.keySystems = {
          'com.apple.fps.1_0': {
            certificateUri: options.fairplayConfig.certificateUrl || '',
            licenseUri: options.fairplayConfig.licenseAcquisitionUrl || ''
          }
        };
      }

      if (options.widevineConfig) {
        this.certificateServer = options.widevineConfig.certificateUrl || '';
      }

      if (options.cencConfig) {
        this.keySystems = options.cencConfig;
      }
    }
    /**
     * Initiate entitlement Version 2
     *
     * @param {Object} options Object of option names and values
     * @private
     */
    ;

    _proto.initiateV2 = function initiateV2(options) {
      this.commonInitiate(options);
      this.formats = options.formats || null;

      if (options.contractRestrictions) {
        var contractRestrictions = options.contractRestrictions;
        this.minBitrate = contractRestrictions.minBitrate || 0;
        this.maxBitrate = contractRestrictions.maxBitrate || 0;
        this.maxResWidth = contractRestrictions.maxResWidth || 0;
        this.maxResHeight = contractRestrictions.maxResHeight || 0;
        this.rwEnabled = contractRestrictions.rwEnabled === undefined ? true : contractRestrictions.rwEnabled;
        this.ffEnabled = contractRestrictions.ffEnabled === undefined ? true : contractRestrictions.ffEnabled;
        this.airplayBlocked = contractRestrictions.airplayEnabled === undefined ? true : !contractRestrictions.airplayEnabled;
        this.timeshiftEnabled = contractRestrictions.timeshiftEnabled || true;
      }

      if (options.bookmarks) {
        var bookmarks = options.bookmarks;
        this.lastViewedOffset = bookmarks.lastViewedOffset || null;
        this.lastViewedTime = bookmarks.lastViewedTime || null;
        this.liveTime = bookmarks.liveTime || null;
      }

      if (options.streamInfo) {
        var streamInfo = options.streamInfo; // Use streamInfo in code

        this.streamInfo = {
          referenceTime: 0
        };
        this.live = streamInfo.live || false;
        this.streamInfo.live = streamInfo.live || false;
        this.channelId = streamInfo.channelId || undefined;
        this.programId = streamInfo.programId || undefined;
        this.streamInfo.channelId = streamInfo.channelId || undefined;
        this.streamInfo.programId = streamInfo.programId || undefined;
        this.streamInfo.static = streamInfo.static || false;
        this.isDynamicCachupAsLive = !streamInfo.static && streamInfo.start !== undefined;
        this.isStaticCachupAsLive = streamInfo.static && streamInfo.end !== undefined;

        if (streamInfo.start) {
          this.streamInfo.start = new Date(streamInfo.start * 1000);
          this.streamInfo.startTime = this.streamInfo.start.getTime();
        }

        if (streamInfo.end) {
          this.streamInfo.end = new Date(streamInfo.end * 1000);
          this.streamInfo.endTime = this.streamInfo.end.getTime();
        }
      }
    }
    /**
     * setup Media Locator
     *
     * @param {Object} format
     * @private
     */
    ;

    _proto.setupMediaLocator = function setupMediaLocator(format) {
      this.mediaLocator = format.mediaLocator || '';

      if (this.mediaLocator) {
        if (window_1.location.hostname === 'localhost') {
          this.src = this.mediaLocator;
        } else {
          this.src = this.mediaLocator.replace(/^(http:)/, '').replace(/^(https:)/, '');
        }
      }

      this.adMediaLocator = format.adMediaLocator || '';
      var licenseExpirationTimestamp = Date.parse(format.licenseExpiration || null);

      if (isNaN(licenseExpirationTimestamp) === false) {
        this.licenseExpiration = new Date(licenseExpirationTimestamp);
      }

      this.licenseExpirationReason = format.licenseExpirationReason || '';
    }
    /**
     * select Format
     *
     * @param {Object} playRequest
     * @private
     */
    ;

    _proto.selectFormat = function selectFormat(playRequest) {
      var _this = this;

      var formats;
      this.mediaLocator = '';
      this.src = '';
      this.playRequest = playRequest;
      this.mimeType = playRequest.type;

      switch (playRequest.format) {
        case 'DASH':
          formats = this.formats.filter(function (obj) {
            return obj.format === 'DASH';
          });

          if (formats.length > 0) {
            var format = formats[0];
            this.setupMediaLocator(format);

            if (format.drm) {
              this.keySystems = format.drm;

              if (format.drm['com.widevine.alpha']) {
                this.certificateServer = format.drm['com.widevine.alpha'].certificateUrl;
              }

              this.keySystems = {};
              Object.keys(format.drm).forEach(function (key) {
                _this.keySystems[key] = format.drm[key].licenseServerUrl;
              });
            }
          }

          break;

        case 'HLS':
          formats = this.formats.filter(function (obj) {
            return obj.format === 'HLS';
          });

          if (formats.length > 0) {
            var _format = formats[0];
            this.setupMediaLocator(_format);

            if (_format.drm && _format.drm['com.apple.fps']) {
              this.protection = {};
              this.protection.certificateUrl = _format.drm['com.apple.fps'].certificateUrl || '';
              this.protection.licenseUrl = _format.drm['com.apple.fps'].licenseServerUrl || '';
              this.protection.version = 'irdeto'; // For Html5 tech with videojs-contrib-eme

              this.keySystems = {
                'com.apple.fps.1_0': {
                  certificateUri: _format.drm['com.apple.fps'].certificateUrl || '',
                  licenseUri: _format.drm['com.apple.fps'].licenseServerUrl || ''
                }
              };
            }
          }

          break;

        default:
      }
    }
    /**
     * setup StreamInfo
     *
     * @param {number} serverTime
     */
    ;

    _proto.setupStreamInfo = function setupStreamInfo(serverTime) {
      this.streamInfo = {
        referenceTime: 0
      };
      this.isDynamicCachupAsLive = false;
      this.isStaticCachupAsLive = false;

      if (this.mediaLocator) {
        var t = getParameterByName('t', this.mediaLocator);

        if (!t) {
          var dvrWindowLength = getParameterByName('dvr_window_length', this.mediaLocator);

          if (dvrWindowLength) {
            var nowDate = serverTime ? new Date(serverTime) : new Date();
            t = new Date(nowDate.getTime() - dvrWindowLength * 1000).toISOString().replace(/Z/g, '');
          } else if (this.live) {
            var _nowDate = serverTime ? new Date(serverTime) : new Date();

            t = new Date(_nowDate.getTime() - 7200 * 1000).toISOString().replace(/Z/g, '');
          }
        }

        if (t) {
          try {
            if (t && t.length === 47) {
              this.streamInfo.start = new Date(t.slice(0, 23) + 'Z');
              this.streamInfo.startTime = this.streamInfo.start.getTime();
              this.streamInfo.end = new Date(t.slice(24) + 'Z');
              this.streamInfo.endTime = this.streamInfo.end.getTime();
            } else if (t && t.length === 23) {
              this.streamInfo.start = new Date(t + 'Z');
              this.streamInfo.startTime = this.streamInfo.start.getTime();
            }

            this.isDynamicCachupAsLive = this.streamInfo.start !== undefined && this.streamInfo.end === undefined;
            this.isStaticCachupAsLive = this.streamInfo.start !== undefined && this.streamInfo.end !== undefined;
          } catch (e) {
            log.warn('timeParams', e);
          }
        }
      }
    }
    /**
     * Get Stream Type
     *
     * @return {string} Stream Type
     */
    ;

    _createClass(Entitlement, null, [{
      key: "Type",
      get: function get() {
        return {
          DASH: 'DASH',
          HLS: 'HLS'
        };
      }
    }]);

    return Entitlement;
  }();

  var isFunction_1 = isFunction;

  var toString$1 = Object.prototype.toString;

  function isFunction (fn) {
    var string = toString$1.call(fn);
    return string === '[object Function]' ||
      (typeof fn === 'function' && string !== '[object RegExp]') ||
      (typeof window !== 'undefined' &&
       // IE8 and below
       (fn === window.setTimeout ||
        fn === window.alert ||
        fn === window.confirm ||
        fn === window.prompt))
  }

  var trim_1 = createCommonjsModule(function (module, exports) {
  exports = module.exports = trim;

  function trim(str){
    return str.replace(/^\s*|\s*$/g, '');
  }

  exports.left = function(str){
    return str.replace(/^\s*/, '');
  };

  exports.right = function(str){
    return str.replace(/\s*$/, '');
  };
  });
  var trim_2 = trim_1.left;
  var trim_3 = trim_1.right;

  var fnToStr = Function.prototype.toString;

  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
  	try {
  		var fnStr = fnToStr.call(value);
  		return constructorRegex.test(fnStr);
  	} catch (e) {
  		return false; // not a function
  	}
  };

  var tryFunctionObject = function tryFunctionToStr(value) {
  	try {
  		if (isES6ClassFn(value)) { return false; }
  		fnToStr.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };
  var toStr = Object.prototype.toString;
  var fnClass = '[object Function]';
  var genClass = '[object GeneratorFunction]';
  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isCallable = function isCallable(value) {
  	if (!value) { return false; }
  	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
  	if (typeof value === 'function' && !value.prototype) { return true; }
  	if (hasToStringTag) { return tryFunctionObject(value); }
  	if (isES6ClassFn(value)) { return false; }
  	var strClass = toStr.call(value);
  	return strClass === fnClass || strClass === genClass;
  };

  var toStr$1 = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var forEachArray = function forEachArray(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
          if (hasOwnProperty.call(array, i)) {
              if (receiver == null) {
                  iterator(array[i], i, array);
              } else {
                  iterator.call(receiver, array[i], i, array);
              }
          }
      }
  };

  var forEachString = function forEachString(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
          // no such thing as a sparse string.
          if (receiver == null) {
              iterator(string.charAt(i), i, string);
          } else {
              iterator.call(receiver, string.charAt(i), i, string);
          }
      }
  };

  var forEachObject = function forEachObject(object, iterator, receiver) {
      for (var k in object) {
          if (hasOwnProperty.call(object, k)) {
              if (receiver == null) {
                  iterator(object[k], k, object);
              } else {
                  iterator.call(receiver, object[k], k, object);
              }
          }
      }
  };

  var forEach = function forEach(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
          throw new TypeError('iterator must be a function');
      }

      var receiver;
      if (arguments.length >= 3) {
          receiver = thisArg;
      }

      if (toStr$1.call(list) === '[object Array]') {
          forEachArray(list, iterator, receiver);
      } else if (typeof list === 'string') {
          forEachString(list, iterator, receiver);
      } else {
          forEachObject(list, iterator, receiver);
      }
  };

  var forEach_1 = forEach;

  var isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      };

  var parseHeaders = function (headers) {
    if (!headers)
      return {}

    var result = {};

    forEach_1(
        trim_1(headers).split('\n')
      , function (row) {
          var index = row.indexOf(':')
            , key = trim_1(row.slice(0, index)).toLowerCase()
            , value = trim_1(row.slice(index + 1));

          if (typeof(result[key]) === 'undefined') {
            result[key] = value;
          } else if (isArray(result[key])) {
            result[key].push(value);
          } else {
            result[key] = [ result[key], value ];
          }
        }
    );

    return result
  };

  var immutable = extend;

  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

  function extend() {
      var target = {};

      for (var i = 0; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
              if (hasOwnProperty$1.call(source, key)) {
                  target[key] = source[key];
              }
          }
      }

      return target
  }

  var xhr = createXHR;
  createXHR.XMLHttpRequest = window_1.XMLHttpRequest || noop$1;
  createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window_1.XDomainRequest;

  forEachArray$1(["get", "put", "post", "patch", "head", "delete"], function(method) {
      createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
          options = initParams(uri, options, callback);
          options.method = method.toUpperCase();
          return _createXHR(options)
      };
  });

  function forEachArray$1(array, iterator) {
      for (var i = 0; i < array.length; i++) {
          iterator(array[i]);
      }
  }

  function isEmpty$1(obj){
      for(var i in obj){
          if(obj.hasOwnProperty(i)) return false
      }
      return true
  }

  function initParams(uri, options, callback) {
      var params = uri;

      if (isFunction_1(options)) {
          callback = options;
          if (typeof uri === "string") {
              params = {uri:uri};
          }
      } else {
          params = immutable(options, {uri: uri});
      }

      params.callback = callback;
      return params
  }

  function createXHR(uri, options, callback) {
      options = initParams(uri, options, callback);
      return _createXHR(options)
  }

  function _createXHR(options) {
      if(typeof options.callback === "undefined"){
          throw new Error("callback argument missing")
      }

      var called = false;
      var callback = function cbOnce(err, response, body){
          if(!called){
              called = true;
              options.callback(err, response, body);
          }
      };

      function readystatechange() {
          if (xhr.readyState === 4) {
              setTimeout(loadFunc, 0);
          }
      }

      function getBody() {
          // Chrome with requestType=blob throws errors arround when even testing access to responseText
          var body = undefined;

          if (xhr.response) {
              body = xhr.response;
          } else {
              body = xhr.responseText || getXml(xhr);
          }

          if (isJson) {
              try {
                  body = JSON.parse(body);
              } catch (e) {}
          }

          return body
      }

      function errorFunc(evt) {
          clearTimeout(timeoutTimer);
          if(!(evt instanceof Error)){
              evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") );
          }
          evt.statusCode = 0;
          return callback(evt, failureResponse)
      }

      // will load the data & process the response in a special response object
      function loadFunc() {
          if (aborted) return
          var status;
          clearTimeout(timeoutTimer);
          if(options.useXDR && xhr.status===undefined) {
              //IE8 CORS GET successful response doesn't have a status field, but body is fine
              status = 200;
          } else {
              status = (xhr.status === 1223 ? 204 : xhr.status);
          }
          var response = failureResponse;
          var err = null;

          if (status !== 0){
              response = {
                  body: getBody(),
                  statusCode: status,
                  method: method,
                  headers: {},
                  url: uri,
                  rawRequest: xhr
              };
              if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                  response.headers = parseHeaders(xhr.getAllResponseHeaders());
              }
          } else {
              err = new Error("Internal XMLHttpRequest Error");
          }
          return callback(err, response, response.body)
      }

      var xhr = options.xhr || null;

      if (!xhr) {
          if (options.cors || options.useXDR) {
              xhr = new createXHR.XDomainRequest();
          }else{
              xhr = new createXHR.XMLHttpRequest();
          }
      }

      var key;
      var aborted;
      var uri = xhr.url = options.uri || options.url;
      var method = xhr.method = options.method || "GET";
      var body = options.body || options.data;
      var headers = xhr.headers = options.headers || {};
      var sync = !!options.sync;
      var isJson = false;
      var timeoutTimer;
      var failureResponse = {
          body: undefined,
          headers: {},
          statusCode: 0,
          method: method,
          url: uri,
          rawRequest: xhr
      };

      if ("json" in options && options.json !== false) {
          isJson = true;
          headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json"); //Don't override existing accept header declared by user
          if (method !== "GET" && method !== "HEAD") {
              headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json"); //Don't override existing accept header declared by user
              body = JSON.stringify(options.json === true ? body : options.json);
          }
      }

      xhr.onreadystatechange = readystatechange;
      xhr.onload = loadFunc;
      xhr.onerror = errorFunc;
      // IE9 must have onprogress be set to a unique function.
      xhr.onprogress = function () {
          // IE must die
      };
      xhr.onabort = function(){
          aborted = true;
      };
      xhr.ontimeout = errorFunc;
      xhr.open(method, uri, !sync, options.username, options.password);
      //has to be after open
      if(!sync) {
          xhr.withCredentials = !!options.withCredentials;
      }
      // Cannot set timeout with sync request
      // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
      // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
      if (!sync && options.timeout > 0 ) {
          timeoutTimer = setTimeout(function(){
              if (aborted) return
              aborted = true;//IE9 may still call readystatechange
              xhr.abort("timeout");
              var e = new Error("XMLHttpRequest timeout");
              e.code = "ETIMEDOUT";
              errorFunc(e);
          }, options.timeout );
      }

      if (xhr.setRequestHeader) {
          for(key in headers){
              if(headers.hasOwnProperty(key)){
                  xhr.setRequestHeader(key, headers[key]);
              }
          }
      } else if (options.headers && !isEmpty$1(options.headers)) {
          throw new Error("Headers cannot be set on an XDomainRequest object")
      }

      if ("responseType" in options) {
          xhr.responseType = options.responseType;
      }

      if ("beforeSend" in options &&
          typeof options.beforeSend === "function"
      ) {
          options.beforeSend(xhr);
      }

      // Microsoft Edge browser sends "undefined" when send is called with undefined value.
      // XMLHttpRequest spec says to pass null as body to indicate no body
      // See https://github.com/naugtur/xhr/issues/100.
      xhr.send(body || null);

      return xhr


  }

  function getXml(xhr) {
      if (xhr.responseType === "document") {
          return xhr.responseXML
      }
      var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror";
      if (xhr.responseType === "" && !firefoxBugTakenEffect) {
          return xhr.responseXML
      }

      return null
  }

  function noop$1() {}

  /* global
    XMLHttpRequest
  */

  /**
   * EricssonMDN
   *
   * @class EricssonMDN
   */

  var EricssonMDN =
  /*#__PURE__*/
  function () {
    function EricssonMDN() {}

    /**
    * Register an entitlement engine
    *
    * @param {Object} entitlement
    * @param {Object} callback
    * @static
    */
    EricssonMDN.getBaseUrl = function getBaseUrl(entitlement, callback) {
      var oXHR = new XMLHttpRequest();
      oXHR.open('GET', entitlement.mdnRequestRouterUrl);

      oXHR.onreadystatechange = function (oEvent) {
        if (oXHR.readyState === 4) {
          if (oXHR.status === 200) {
            log('getBaseUrl OK');
            var xmlDoc = oXHR.responseXML;

            try {
              var baseURL = xmlDoc.firstChild.getElementsByTagName('baseURL')[0].textContent;

              if (baseURL) {
                entitlement.baseUrl = baseURL;
              } else {
                log.error('getBaseUrl Error can not find baseURL');
              }

              callback(entitlement);
            } catch (err) {
              log.error('getBaseUrl Error', err);
              callback(entitlement);
            }
          } else {
            log.error('getBaseUrl Error', oXHR.statusText);
            callback(entitlement);
          }
        }
      };

      oXHR.send(null);
    };

    return EricssonMDN;
  }();

  /**
   * EricssonExposure EntitlementEngine
   *
   * @extends EntitlementEngine
   * @param {Object=} options Object of option names and values
   * @class EricssonExposure
   */

  var EricssonExposure =
  /*#__PURE__*/
  function (_EntitlementEngine) {
    _inheritsLoose(EricssonExposure, _EntitlementEngine);

    /**
     * Create EricssonExposure
     *
     * @param {Object=} options Object of option names and values
     */
    function EricssonExposure(options) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      options = assign({
        exposureApiURL: 'https://exposure.emps.ebsd.ericsson.net',
        exposureApiVersion: 'v1'
      }, options);
      _this = _EntitlementEngine.call(this, options) || this;
      _this.errorMap = {
        400: {
          INVALID_JSON: {
            message: 'Invalid json.',
            fatal: false
          }
        },
        401: {
          NO_SESSION_TOKEN: {
            message: 'The session token is missing.',
            fatal: true
          },
          INVALID_SESSION_TOKEN: {
            message: 'The session token is not valid.',
            fatal: true
          }
        },
        403: {
          FORBIDDEN: {
            message: 'The business unit has been configured to require server to server authentication, but it is not valid.',
            fatal: true
          },
          NOT_ENTITLED: {
            message: 'The user is not entitled.',
            fatal: true
          },
          DEVICE_BLOCKED: {
            message: 'The device is not allowed to play the asset.',
            fatal: true
          },
          GEO_BLOCKED: {
            message: 'Not allowed from this region.',
            fatal: true
          },
          LICENSE_EXPIRED: {
            message: 'Asset has been expired.',
            fatal: true
          },
          NOT_AVAILABLE_IN_FORMAT: {
            message: 'The media is not available in the requested format.',
            fatal: false
          },
          NOT_ENABLED: {
            message: 'The media is not enabled.',
            fatal: true
          },
          CONCURRENT_STREAMS_LIMIT_REACHED: {
            message: 'You have reached the maximum number of concurrent streams you are allowed to watch.',
            fatal: true
          },
          NO_MEDIA_ON_CHANNEL: {
            message: 'The media is not available on the channel.',
            fatal: false
          },
          NO_MEDIA_FOR_PROGRAM: {
            message: 'No media available for this program.',
            fatal: false
          }
        },
        404: {
          UNKNOWN_BUSINESS_UNIT: {
            message: 'The business unit cannot be found.',
            fatal: true
          },
          UNKNOWN_ASSET: {
            message: 'The asset cannot be found.',
            fatal: false
          }
        },
        0: {
          NETWORK_ERROR: {
            message: 'Network error.',
            fatal: false
          }
        }
      };

      if (EntitlementEngine.ServerTimeDiff_ === undefined) {
        _this.getServerTime(function (date, error) {
          if (error) {
            log.error('getServerTime', error);
            date = new Date();
          }

          EntitlementEngine.ServerTimeDiff_ = date - new Date();
          log('serverDiff', EntitlementEngine.ServerTimeDiff_);
        });
      }

      return _this;
    }
    /**
     * exposureLogin
     *
     * @param {string} username username
     * @param {string} password password
     * @param {function} callback callback
     * @param {string} mfacode mfacode
     */


    var _proto = EricssonExposure.prototype;

    _proto.login = function login(username, password, callback, mfacode) {
      var _this2 = this;

      if (!callback) {
        throw new EntitlementError('callback is mandantory for login');
      }

      var is2factor = false;

      if (mfacode) {
        is2factor = true;
      }

      var isAnonymous = username === '';
      var expiration = new Date(this.getCachedServerTime()); // 24h expiration

      var expirationSeconds = 24 * 60 * 60;
      expiration.setTime(expiration.getTime() + expirationSeconds * 1000);

      if (this.options_.apiKey) {
        var requestHeaders = {
          'EMP-Auth': this.options_.apiKey
        };
        var loginUrl = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + this.customer + '/businessunit/' + this.businessUnit + '/auth/session';
        var requestData = {
          accountId: username,
          userId: username,
          deviceId: 'WEB_' + username,
          device: {
            height: window_1.screen.height,
            width: window_1.screen.width,
            model: window_1.navigator.appName,
            name: window_1.navigator.product,
            os: window_1.navigator.platform,
            osVersion: window_1.navigator.appVersion,
            manufacturer: window_1.navigator.vendor,
            type: 'WEB'
          },
          expiration: expiration.toISOString(),
          anonymous: false
        };
        xhr.post(loginUrl, {
          json: requestData,
          headers: requestHeaders
        }, function (error, response, data) {
          // Check and handles error
          if (_this2.checkForError(error, response, function (nothing, err) {
            callback({
              success: false,
              expiration: 0,
              message: err.message
            });
          })) {
            return;
          }

          _this2.sessionToken = data.sessionToken;
          callback({
            success: true,
            expiration: expirationSeconds * 1000,
            session: data
          });
        });
      } else {
        var _loginUrl = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + this.customer + '/businessunit/' + this.businessUnit;

        if (isAnonymous === true) {
          _loginUrl += '/auth/anonymous';
        } else if (is2factor === true) {
          _loginUrl += '/auth/twofactorlogin';
        } else {
          _loginUrl += '/auth/login';
        }

        var _requestData = {
          deviceId: 'WEB_' + username,
          device: {
            height: window_1.screen.height,
            width: window_1.screen.width,
            model: window_1.navigator.appName,
            name: window_1.navigator.product,
            os: window_1.navigator.platform,
            osVersion: window_1.navigator.appVersion,
            manufacturer: window_1.navigator.vendor,
            type: 'WEB'
          },
          rememberMe: false,
          username: username,
          password: password,
          totp: is2factor === true ? mfacode : undefined
        };
        xhr.post(_loginUrl, {
          json: _requestData
        }, function (error, response, data) {
          // Check and handles error
          if (_this2.checkForError(error, response, function (nothing, err) {
            callback({
              success: false,
              expiration: 0,
              message: err.message
            });
          })) {
            return;
          }

          _this2.sessionToken = data.sessionToken;
          callback({
            success: true,
            expiration: data.expirationDateTime ? new Date(data.expirationDateTime) - new Date(_this2.getCachedServerTime()) : expirationSeconds * 1000,
            session: data
          });
        });
      }
    }
    /**
     * logout
     *
     * @param {Funktion=} callback
     * @param {string} sessionToken
     */
    ;

    _proto.logout = function logout(callback, sessionToken) {
      var _this3 = this;

      if (callback === void 0) {
        callback = function callback() {};
      }

      var customer = this.customer;
      var businessUnit = this.businessUnit;

      if (!customer) {
        throw new EntitlementError('Customer was not provided.');
      }

      if (!businessUnit) {
        throw new EntitlementError('Business unit was not provided.');
      }

      var requestHeaders = this.requestHeaders;

      if (sessionToken) {
        requestHeaders = {
          Authorization: 'Bearer ' + sessionToken
        };
      }

      var queryUrl = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/auth/session';
      xhr.del(queryUrl, {
        headers: requestHeaders
      }, function (error, response, data) {
        // Check and handles error
        if (_this3.checkForError(error, response, callback)) {
          return;
        }

        _this3.sessionToken = null;

        if (typeof callback !== undefined) {
          callback(true);
        }
      });
    }
    /**
     * Get Entitlement version 2
     *
     * Called by the player to get an entitlement. Entitlement requests contain an assetId and an optional programId.
     * If the programId exists, the assetId is the channelId. if the programId doesn't exist the assetId is the assetId.
     *
     * The callback should be called when the requests completes, if it fails it should contain an EntitlementError
     * Exception object as it's second parameter.
     *
     * if it succeeds it should return the Entitlement as the first parameter.
     *
     * The Entitlement should contain the following parameters:
     *
     * playToken - Playtoken required for drm
     * mediaLocator - URL of playlist file
     *
     * @param {EntitlementRequest}    entitlementRequest  Entitlement request to execute
     * @param {Object}                playRequest         Playrequest object containing information about the required
     *                                                    attributes of the entitlement (e.g. { drm: 'EDRM', 'format': 'HLS' }
     * @param {function}             callback             Callback when entitlement is fetched or an error occurs
     * @param {Entitlement}          preEntitlement       Previous Entitlement after error
     */
    ;

    _proto.getV2Entitlement = function getV2Entitlement(entitlementRequest, playRequest, callback, preEntitlement) {
      if (typeof entitlementRequest === 'undefined') {
        throw new EntitlementError('No request specified.');
      }

      if (typeof playRequest === 'undefined') {
        throw new EntitlementError('Media not found.');
      }

      if (!playRequest.drm || !playRequest.format) {
        throw new EntitlementError('Invalid playrequest specified.');
      }

      if (!entitlementRequest.assetId && entitlementRequest.programId) {
        this.getProgram_(entitlementRequest.channelId, entitlementRequest.programId, playRequest, callback);
      } else {
        this.getV2Asset_(entitlementRequest, playRequest, preEntitlement, callback);
      }
    }
    /**
     * Get Entitlement
     *
     * Called by the player to get an entitlement. Entitlement requests contain an assetId and an optional programId.
     * If the programId exists, the assetId is the channelId. if the programId doesn't exist the assetId is the assetId.
     *
     * The callback should be called when the requests completes, if it fails it should contain an EntitlementError
     * Exception object as it's second parameter.
     *
     * if it succeeds it should return the Entitlement as the first parameter.
     *
     * The Entitlement should contain the following parameters:
     *
     * playToken - Playtoken required for drm
     * mediaLocator - URL of playlist file
     *
     * @param {EntitlementRequest}    entitlementRequest  Entitlement request to execute
     * @param {Object}                playRequest         Playrequest object containing information about the required
     *                                                    attributes of the entitlement (e.g. { drm: 'EDRM', 'format': 'HLS' }
     * @param {function}             callback            Callback when entitlement is fetched or an error occurs
     */
    ;

    _proto.getEntitlement = function getEntitlement(entitlementRequest, playRequest, callback) {
      if (typeof entitlementRequest === 'undefined') {
        throw new EntitlementError('No request specified.');
      }

      if (typeof playRequest === 'undefined') {
        throw new EntitlementError('Media not found.');
      }

      if (!playRequest.drm || !playRequest.format) {
        throw new EntitlementError('Invalid playrequest specified.');
      }

      if (entitlementRequest.programId !== null || entitlementRequest.channelId) {
        this.getProgram_(entitlementRequest.channelId, entitlementRequest.programId, playRequest, callback);
      } else {
        this.getAsset_(entitlementRequest.assetId, playRequest, callback);
      }
    }
    /**
    * Get error for response
    *
    * @param {Object} response xhr response object
    * @return {EntitlementError} EntitlementError
    * @private
    */
    ;

    _proto.getErrorForResponse = function getErrorForResponse(response) {
      if (!response) {
        return null;
      }

      var statusCode = response.statusCode;
      var message = '';

      if (!(statusCode >= 200 && statusCode <= 299)) {
        if (response.body && response.body.message) {
          message = response.body.message;
        } else if (response.body) {
          try {
            message = JSON.parse(response.body).message;
          } catch (e) {
            message = response.body;
          }
        }
      } // Try to match known errors


      var error = this.errorMap[statusCode]; // Known error code

      if (error) {
        // Default error message
        var errorMessage = statusCode + ' ' + message; // Add our own message if we have it

        var matchedError = error[message];

        if (matchedError) {
          errorMessage += ': ' + matchedError.message;
        } // If it's a known error check for fatal


        if (matchedError) {
          return new EntitlementError({
            message: errorMessage,
            fatal: !!matchedError.fatal
          });
        }

        return new EntitlementError(errorMessage); // HTTP no success code, can ben an error or something else we don't expect
      } else if (!(statusCode >= 200 && statusCode <= 299)) {
        var _errorMessage = statusCode + ' ' + message;

        return new EntitlementError(_errorMessage);
      } // No error


      return null;
    }
    /**
     * Check for errors and returns it to the callback
     *
     * @param {Object} xhrError xhr Error object
     * @param {Object} xhrResponse xhr response
     * @param {Function=} callback Callback after xhr finished the request
     * @return {boolean} true if there is an error
     * @private
     */
    ;

    _proto.checkForError = function checkForError(xhrError, xhrResponse, callback) {
      // If CORS is not setup correctly, xhr will return an 'Internal XMLHttpRequest Error' error
      var error = xhrError; // No internal xhr error

      if (!xhrError) {
        // Check xhrResponse for error
        error = this.getErrorForResponse(xhrResponse);
      }

      if (error) {
        if (callback) {
          callback(null, error);
        }

        return error;
      } // No error


      return null;
    }
    /**
     * Get VOD entitlement version 2
     *
     * @param {EntitlementRequest}    entitlementRequest  Entitlement request to execute
     * @param {Object}    playRequest Playrequest payload
     * @param {Entitlement}    preEntitlement  pre Entitlement
     * @param {Function=} callback    Callback when entitlement is fetched
     * @private
     */
    ;

    _proto.getV2Asset_ = function getV2Asset_(entitlementRequest, playRequest, preEntitlement, callback) {
      var _this4 = this;

      if (callback === void 0) {
        callback = function callback() {};
      }

      if (!this.customer) {
        throw new EntitlementError('getV2Asset_: Customer was not provided.');
      }

      if (!this.businessUnit) {
        throw new EntitlementError('getV2Asset_: Business unit was not provided.');
      }

      var assetId = entitlementRequest.assetId ? entitlementRequest.assetId : entitlementRequest.channelId;

      if (!assetId) {
        throw new EntitlementError('getV2Asset_: No assetId or channelId specified.');
      }

      if (preEntitlement && preEntitlement.formats) {
        preEntitlement.selectFormat(playRequest);

        if (preEntitlement.mediaLocator) {
          callback(preEntitlement, null);
        } else {
          var entitlementError = new EntitlementError(playRequest.format + ' not avalible');
          entitlementError.fatal = false;
          callback(preEntitlement, entitlementError);
        }
      } else {
        var requestURL = this.options_.exposureApiURL + '/' + 'v2' + '/customer/' + this.customer + '/businessunit/' + this.businessUnit + '/entitlement/' + assetId + '/play';
        xhr.get(requestURL, {
          headers: this.requestHeaders
        }, function (error, response, body) {
          if (error) {
            log.warn('Fallback to Entitlement request v1', error);

            _this4.getEntitlement(entitlementRequest, playRequest, callback);

            return;
          } // Check and handles error


          error = _this4.checkForError(error, response);

          if (error) {
            log.warn('Fallback to Entitlement request v1', error.message);

            _this4.getEntitlement(entitlementRequest, playRequest, callback);

            return;
          }

          var options = JSON.parse(body);
          var entitlement = new Entitlement();
          entitlement.initiateV2(options);
          entitlement.selectFormat(playRequest);
          entitlement.assetId = assetId;

          if (entitlement.channelId || entitlement.programId) {
            _this4.setStreamReferenceTime_(entitlement);
          }

          var requestId = response.headers['x-request-id'];
          entitlement.requestId = requestId ? requestId : '';

          if (entitlement.mediaLocator) {
            callback(entitlement, null);
          } else {
            var _entitlementError = new EntitlementError(playRequest.format + ' not avalible');

            _entitlementError.fatal = false;
            callback(entitlement, _entitlementError);
          }
        });
      }
    }
    /**
     * Get VOD entitlement
     *
     * @param {string}    assetId     Asset to fetch
     * @param {Object}    playRequest Playrequest payload
     * @param {Function=} callback    Callback when entitlement is fetched
     * @private
     */
    ;

    _proto.getAsset_ = function getAsset_(assetId, playRequest, callback) {
      var _this5 = this;

      if (callback === void 0) {
        callback = function callback() {};
      }

      var customer = this.customer;
      var businessUnit = this.businessUnit;

      if (!customer) {
        throw new EntitlementError('getAsset_: Customer was not provided.');
      }

      if (!businessUnit) {
        throw new EntitlementError('getAsset_: Business unit was not provided.');
      }

      if (!assetId) {
        throw new EntitlementError('getAsset_: assetId was not provided.');
      }

      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/entitlement/' + assetId + '/play';
      xhr.post(requestURL, {
        json: playRequest,
        headers: this.requestHeaders
      }, function (error, response, body) {
        // Check and handles error
        if (_this5.checkForError(error, response, callback)) {
          return;
        }

        var entitlement = new Entitlement();
        entitlement.initiateV1(body, response.headers.date);
        entitlement.assetId = assetId;
        entitlement.playRequest = playRequest;
        entitlement.mimeType = playRequest.type;
        var requestId = response.headers['x-request-id'];
        entitlement.requestId = requestId ? requestId : '';

        if (entitlement.mdnRequestRouterUrl) {
          EricssonMDN.getBaseUrl(entitlement, callback);
        } else {
          callback(entitlement);
        }
      });
    }
    /**
     * Add StreamReferenceTime to entitlement
     *
     * @param {Object} entitlement
     * @private
     */
    ;

    _proto.setStreamReferenceTime_ = function setStreamReferenceTime_(entitlement) {
      if (entitlement.isDynamicCachupAsLive || entitlement.isStaticCachupAsLive) {
        if (entitlement.mimeType === 'application/dash+xml') {
          if (entitlement.isStaticCachupAsLive) {
            entitlement.streamInfo.referenceTime = entitlement.streamInfo.startTime;
          } else {
            entitlement.streamInfo.referenceTime = 0;
          }
        } else if (entitlement.mimeType === 'application/x-mpegurl') {
          entitlement.streamInfo.referenceTime = entitlement.streamInfo.startTime;
        }
      }
    }
    /**
     * Get asset metadata
     *
     * @param {string}    assetId     Asset to fetch metadata for
     * @param {Function}  callback    Callback when fetching has completed
     * @private
     */
    ;

    _proto.getAssetMetadata_ = function getAssetMetadata_(assetId, callback) {
      var _this6 = this;

      if (!this.customer) {
        throw new EntitlementError('getAssetMetadata_: Customer was not provided.');
      }

      if (!this.businessUnit) {
        throw new EntitlementError('getAssetMetadata_: Business unit was not provided.');
      }

      if (!assetId) {
        throw new EntitlementError('getAssetMetadata_: assetId was not provided.');
      }

      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + this.customer + '/businessunit/' + this.businessUnit + '/content/asset/' + assetId;
      xhr.get(requestURL, null, function (error, response, body) {
        // Check and handles error
        if (_this6.checkForError(error, response, callback)) {
          return;
        }

        var metadata = JSON.parse(body);
        callback(metadata);
      });
    }
    /**
     * Get program entitlement
     *
     * @param {string}    channelId Channel to fetch from
     * @param {string}    programId Program to fetch
     * @param {Object}    playRequest Playrequest payload
     * @param {function} callback Callback when entitlement is fetched
     * @private
     */
    ;

    _proto.getProgram_ = function getProgram_(channelId, programId, playRequest, callback) {
      var _this7 = this;

      if (callback === void 0) {
        callback = function callback() {};
      }

      var customer = this.customer;
      var businessUnit = this.businessUnit;

      if (!customer) {
        throw new EntitlementError('getProgram_: Customer was not provided.');
      }

      if (!businessUnit) {
        throw new EntitlementError('getProgram_: Business unit was not provided.');
      }

      if (!channelId && !programId) {
        throw new EntitlementError('getProgram_: channelId or programId was not provided.');
      }

      var programUrl = '';

      if (programId) {
        programUrl = '/program/' + programId;
      }

      var channelUrl = '';

      if (channelId) {
        channelUrl = '/channel/' + channelId;
      }

      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/entitlement' + channelUrl + programUrl + '/play';
      xhr.post(requestURL, {
        json: playRequest,
        headers: this.requestHeaders
      }, function (error, response, body) {
        // Check and handles error
        if (_this7.checkForError(error, response, callback)) {
          return;
        }

        var entitlement = new Entitlement();
        entitlement.initiateV1(body, response.headers.date);

        if (channelId) {
          entitlement.assetId = channelId;
          entitlement.channelId = channelId;
        }

        if (programId) {
          entitlement.programId = programId;
        }

        entitlement.playRequest = playRequest;
        entitlement.mimeType = playRequest.type;

        _this7.setStreamReferenceTime_(entitlement);

        var requestId = response.headers['x-request-id'];
        entitlement.requestId = requestId ? requestId : '';

        if (entitlement.mdnRequestRouterUrl) {
          EricssonMDN.getBaseUrl(entitlement, callback);
        } else {
          callback(entitlement);
        }
      });
    }
    /**
     * Get server time
     *
     * Should return the exact servertime
     *
     * @param {function}  callback  Callback when server time is fetched or an error occurs
     */
    ;

    _proto.getServerTime = function getServerTime(callback) {
      var customer = this.customer;
      var businessUnit = this.businessUnit;

      if (!customer || !businessUnit) {
        log.warn('getServerTime no customer or businessUnit');
        callback(new Date());
        return;
      }

      if (window_1.navigator.onLine === false) {
        log('getServerTime offline');
        callback(new Date());
        return;
      }

      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/time';
      xhr.get(requestURL, null, function (error, response, body) {
        if (error) {
          callback(null, error);
          return;
        }

        var json = JSON.parse(body);
        var date = new Date(json.iso8601);
        callback(date);
      });
    }
    /**
     * Get user preferences key/value pair of (audioLang, subtitlesLang)
     *
     * @param {function} callback
     */
    ;

    _proto.getPreferences = function getPreferences(callback) {
      var _this8 = this;

      var customer = this.customer;
      var businessUnit = this.businessUnit;
      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/preferences';
      xhr.get(requestURL, {
        headers: this.requestHeaders
      }, function (error, response, body) {
        if (_this8.checkForError(error, response, callback)) {
          return;
        }

        var json = JSON.parse(body);
        callback(json);
      });
    }
    /**
     * Save user preferences (audioLang, subtitlesLang)
     *
     * @param {any} preferences key/value pair of (audioLang, subtitlesLang)
     * @param {function} callback
     */
    ;

    _proto.savePreferences = function savePreferences(preferences, callback) {
      var _this9 = this;

      var customer = this.customer;
      var businessUnit = this.businessUnit;

      if (!preferences) {
        log.error('Preferences was not provided.');
        return;
      }

      var data = {
        preferences: preferences
      };
      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/preferences';
      xhr.post(requestURL, {
        json: data,
        headers: this.requestHeaders
      }, function (error, response, body) {
        // Check and handles error
        if (_this9.checkForError(error, response, callback)) {
          return;
        }

        callback(true);
      });
    }
    /**
    * Get EPG
     *
    * @param {string} channelId
    * @param {number} from
    * @param {number} to
    * @param {Function} callback
    */
    ;

    _proto.getEPG = function getEPG(channelId, from, to, callback) {
      var _this10 = this;

      var customer = this.customer;
      var businessUnit = this.businessUnit;
      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/epg/' + channelId;
      requestURL += '?from=' + from + '&to=' + to;
      xhr.get(requestURL, null, function (error, response, body) {
        if (_this10.checkForError(error, response, callback)) {
          return;
        }

        var json = JSON.parse(body);
        callback(json);
      });
    }
    /**
     * Get the program based on EPG
     *
     * @param {string} channelId
     * @param {Date} date
     * @param {Function} callback
     * @param {string=} programId
     */
    ;

    _proto.getProgramInfo = function getProgramInfo(channelId, date, callback, programId) {
      var customer = this.customer;
      var businessUnit = this.businessUnit;
      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/epg/' + channelId;

      if (programId) {
        requestURL = requestURL + '/program/' + programId;
      } else {
        requestURL += '?from=' + date.getTime() + '&to=' + date.getTime();
      }

      xhr.get(requestURL, null, function (error, response, body) {
        if (error) {
          callback(null, error);
          return;
        }

        var json = JSON.parse(body);
        var program;

        if (json.programs && json.programs.length > 0) {
          program = json.programs[0];
        } else if (json.programId) {
          program = json;
        } else {
          callback(null, 'No programs found.');
          return;
        }

        program.start = new Date(program.startTime);
        program.end = new Date(program.endTime);
        program.duration = new Date(program.endTime) - new Date(program.startTime);
        callback(program);
      });
    }
    /**
    *
    * Get the Channel Info
     *
    * @param {string}    channelId Channel to fetch from
    * @param {function} callback Callback when entitlement is fetched
    */
    ;

    _proto.getChannelInfo = function getChannelInfo(channelId, callback) {
      if (callback === void 0) {
        callback = function callback() {};
      }

      this.getAssetInfo(channelId, callback);
    }
    /**
     * Get the Asset Info
     *
     * @param {string} assetId
     * @param {Function} callback
     */
    ;

    _proto.getAssetInfo = function getAssetInfo(assetId, callback) {
      var _this11 = this;

      var customer = this.customer;
      var businessUnit = this.businessUnit;
      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/content/asset/' + assetId;
      xhr.get(requestURL, null, function (error, response, body) {
        if (error) {
          callback(null, error);
          return;
        } // Check and handles error


        if (_this11.checkForError(error, response, callback)) {
          return;
        }

        var asset = JSON.parse(body);
        callback(asset);
      });
    }
    /**
     * verify the entitlement
     *
     * @param {string} assetId
     * @param {Object} playRequest playRequest
     * @param {Function=} callback
     */
    ;

    _proto.verifyEntitlement = function verifyEntitlement(assetId, playRequest, callback) {
      var _this12 = this;

      if (callback === void 0) {
        callback = function callback() {};
      }

      var customer = this.customer;
      var businessUnit = this.businessUnit;

      if (!customer) {
        throw new EntitlementError('verifyEntitlement: Customer was not provided.');
      }

      if (!businessUnit) {
        throw new EntitlementError('verifyEntitlement: Business unit was not provided.');
      }

      if (!assetId) {
        throw new EntitlementError('verifyEntitlement: assetId was not provided.');
      }

      if (!playRequest) {
        throw new EntitlementError('verifyEntitlement: playRequest was not provided.');
      }

      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/entitlement/' + assetId + '?drm=' + playRequest.drm + '&format=' + playRequest.format;
      xhr.get(requestURL, {
        headers: this.requestHeaders
      }, function (error, response, body) {
        // Check and handles error
        if (_this12.checkForError(error, response, callback)) {
          return;
        }

        if (typeof callback !== undefined) {
          callback(JSON.parse(body));
        }
      });
    }
    /**
     * Verifies if sessionToken is still valid
     *
     * @param {Function} okFn - callback if session is ok
     * @param {Function} nokFn - callback if session is not ok
     */
    ;

    _proto.verifySession = function verifySession(okFn, nokFn) {
      var _this13 = this;

      var customer = this.customer;
      var businessUnit = this.businessUnit;
      var requestURL = this.options_.exposureApiURL + '/' + this.options_.exposureApiVersion + '/customer/' + customer + '/businessunit/' + businessUnit + '/auth/session';
      xhr.get(requestURL, {
        headers: this.requestHeaders
      }, function (error, response, body) {
        // Check and handles error
        if (_this13.checkForError(error, response)) {
          if (nokFn) {
            nokFn();
          }

          return;
        }

        if (okFn) {
          okFn();
        }
      });
    }
    /**
     * Get Play request headers. Including apiKey if set
     *
     * @return {Object} Play request headers
     * @private
     */
    ;

    _createClass(EricssonExposure, [{
      key: "requestHeaders",
      get: function get() {
        var headers = {
          Authorization: 'Bearer ' + this.sessionToken
        };

        if (this.options_.apiKey) {
          headers = assign({
            'EMP-Auth': this.options_.apiKey
          }, headers);
        }

        return headers;
      }
      /**
       * Get customer. Defaults to value set in options if available
       *
       * @return {string} customer
       */

    }, {
      key: "customer",
      get: function get() {
        return this.customer_ || this.options_.customer || null;
      }
      /**
       * Set customer.
       *
       * @param {string}  customer
       */
      ,
      set: function set(customer) {
        this.customer_ = customer;
      }
      /**
       * Get business unit. Defaults to value set in options if available
       *
       * @return {string} businessUnit
       */

    }, {
      key: "businessUnit",
      get: function get() {
        return this.businessUnit_ || this.options_.businessUnit || null;
      }
      /**
       * Set business unit
       *
       * @param {string}  businessUnit
       */
      ,
      set: function set(businessUnit) {
        this.businessUnit_ = businessUnit;
      }
      /**
       * Get session token. Defaults to value set in options if available
       *
       * @return {string} sessionToken
       */

    }, {
      key: "sessionToken",
      get: function get() {
        return this.options_.sessionToken || null;
      }
      /**
       * Set session token
       *
       * @param {string}  sessionToken
       */
      ,
      set: function set(sessionToken) {
        this.options_.sessionToken = sessionToken;
      }
    }]);

    return EricssonExposure;
  }(EntitlementEngine);

  EntitlementEngine.registerEntitlementEngine('EricssonExposure', EricssonExposure);

  /**
   * EntitlementRequest Class
   *
   * @param {Object} options Object of option names and values
   * @class EntitlementRequest
   */
  var EntitlementRequest =
  /*#__PURE__*/
  function () {
    /**
     * Create EntitlementRequest
     *
     * @param {Object=} options Object of option names and values
     */
    function EntitlementRequest(options) {
      this.assetId = options.assetId || null;
      this.programId = options.programId || null;
      this.channelId = options.channelId || null;
    }
    /**
     * get assetId
     *
     * @return {string} assetId
     */


    _createClass(EntitlementRequest, [{
      key: "assetId",
      get: function get() {
        return this.assetId_;
      }
      /**
       * Set assetId
       *
       * @param {string} assetId
       */
      ,
      set: function set(assetId) {
        this.assetId_ = assetId;
      }
      /**
       * get programId
       *
       * @return {string} programId
       */

    }, {
      key: "programId",
      get: function get() {
        return this.programId_;
      }
      /**
       * Set programId
       *
       * @param {string} programId
       */
      ,
      set: function set(programId) {
        this.programId_ = programId;
      }
      /**
       * get channelId
       *
       * @return {string} channelId
       */

    }, {
      key: "channelId",
      get: function get() {
        return this.channelId_;
      }
      /**
       * Set channelId
       *
       * @param {string} channelId
       */
      ,
      set: function set(channelId) {
        this.channelId_ = channelId;
      }
    }]);

    return EntitlementRequest;
  }();

  var Plugin$1 = videojs.getPlugin('plugin');
  /**
   *  ProgramService
   * @param player
   * @param options
   */

  var ProgramService =
  /*#__PURE__*/
  function (_Plugin) {
    _inheritsLoose(ProgramService, _Plugin);

    function ProgramService(player, options) {
      var _this;

      _this = _Plugin.call(this, player, options) || this;
      log('ProgramService', 'create');
      _this.MIN_PROGRAM_CHECK_TIMEOUT = 1000;
      _this.checkForProgramChangeBind = _this.checkForProgramChange_.bind(_assertThisInitialized(_this));
      _this.onEntitlementChangeBind = _this.onEntitlementChange.bind(_assertThisInitialized(_this));
      _this.clearProgramChangeTimeoutBind = _this.clearProgramChangeTimeout_.bind(_assertThisInitialized(_this));
      _this.options_ = options ? options : {};
      _this.programChangeTimeout_ = null;
      _this.programChangeCheckTimestamp_ = 0;

      _this.player.on(empPlayerEvents.ENTITLEMENT_CHANGE, _this.onEntitlementChangeBind);

      return _this;
    }
    /**
    * @return {Exposure} current exposure
    */


    var _proto = ProgramService.prototype;

    /**
     * set / get entitlement
     *
     * @param value
     * @return {Entitlement}
     */
    _proto.entitlement = function entitlement(value) {
      if (typeof value === 'undefined') {
        return this.entitlement_;
      }

      this.entitlement_ = value;
      return value;
    }
    /**
     * Set / Get options
     *
     * @param obj
     * @return {Object}
     */
    ;

    _proto.options = function options(obj) {
      if (!obj) {
        return this.options_;
      }

      this.options_ = obj;
    }
    /**
     * onEntitlementChange
     *
     * @param {EventTarget~Event} [event]
     * @param data
     */
    ;

    _proto.onEntitlementChange = function onEntitlementChange(event, data) {
      var entitlement = data && data.entitlement;

      if (entitlement) {
        if (!(entitlement instanceof Entitlement)) {
          // From entitlement CC establish Entitlement object
          this.stop();
          entitlement = assign(new Entitlement({}), entitlement);
        }

        this.entitlement(entitlement);
      } // Only manually update if tech doesn't natively support program changes.


      if (!extplayer.supportsEpgProgramChange(this.player)) {
        // Only check for program change when player is playing.
        this.player.off(empPlayerEvents.PLAYING, this.checkForProgramChangeBind);
        this.player.one(empPlayerEvents.PLAYING, this.checkForProgramChangeBind);
      }
    }
    /**
     * start program service
     *
     * @param entitlement
     */
    ;

    _proto.start = function start() {
      log('ProgramService', 'start');

      if (this.entitlement()) {
        this.checkForProgramChange_({
          type: 'startplayback'
        });
      }
    }
    /**
     * stop program service
     */
    ;

    _proto.stop = function stop() {
      log('ProgramService stop');
      this.clearProgramChangeTimeout_();

      if (this.player) {
        this.player.off(empPlayerEvents.SEEKED, this.checkForProgramChangeBind);
        this.player.off(empPlayerEvents.PLAYING, this.checkForProgramChangeBind);
        this.player.off(empPlayerEvents.PAUSE, this.clearProgramChangeTimeoutBind);
        this.player.off(empPlayerEvents.PLAY, this.checkForProgramChangeBind);
      }

      this.currentProgram_ = null;
      this.currentVOD_ = null;
    };

    _proto.reset = function reset() {
      this.stop();
      this.currentProgram_ = null;
      this.currentVOD_ = null;
      this.entitlement_ = null;
    };

    _proto.clearProgramChangeTimeout_ = function clearProgramChangeTimeout_(event, data) {
      if (this.programChangeTimeout_) {
        if (event) {
          log('clearProgramChangeTimeout', event.type);
        }

        clearTimeout(this.programChangeTimeout_);
        this.programChangeTimeout_ = null;
      }
    }
    /**
     *  Check if ProgramService is running
     *
     * @return {boolean}
    */
    ;

    _proto.running = function running() {
      if (this.programChangeTimeout_) {
        log('ProgramService:running', this.programChangeCheckTimestamp_ ? new Date(this.programChangeCheckTimestamp_) : 0);
        return true;
      }

      return false;
    }
    /**
     * dispose
     */
    ;

    _proto.dispose = function dispose() {
      log('ProgramService', 'dispose');
      this.player.off(empPlayerEvents.ENTITLEMENT_CHANGE, this.onEntitlementChangeBind);
      this.stop();

      _Plugin.prototype.dispose.call(this);
    }
    /**
     * current Program
     *
     * @return {Object}
     */
    ;

    /**
     * Check if program changed
     *
     * @param {EventTarget~Event} [event]
     * @param data
     * @private
     */
    _proto.checkForProgramChange_ = function checkForProgramChange_(event, data) {
      var _this2 = this;

      if (!event) {
        log.error('checkForProgramChange', 'event was not provided.');
        return;
      }

      log('checkForProgramChange', event.type); // Not need update a program or real VOD

      if (!this.entitlement().live && !this.entitlement().isStaticCachupAsLive && !this.entitlement().isDynamicCachupAsLive && event.type === empPlayerEvents.SEEKED) {
        return;
      }

      if (!this.player || !this.player.options_) {
        return;
      }

      if (this.player.options_.absoluteStartTime && event.type === empPlayerEvents.SEEKED) {
        log('checkForProgramChange', 'ignore livepoint');
        return;
      } // If called, due to SEEK or other events, clear previous timer that could cause this method to be called.


      this.clearProgramChangeTimeout_(); // For Cast

      if (extplayer.supportsEpgProgramChange(this.player)) {
        var program = extplayer.program(this.player);

        if (program) {
          log('updateCurrentProgram from player');
          return;
        }
      }

      var channelId = this.entitlement().channelId;
      var isLive = this.entitlement().live;
      var programId = this.entitlement().programId; // VOD

      if (!isLive && !programId) {
        this.updateVOD_(this.entitlement().assetId);
        return;
      }

      var dateTime; // Reagula Live

      if (isLive && !programId) {
        var serverDate = new Date(this.exposure.getCachedServerTime()); // Margin to live edge

        var secondsBehind = event.type === 'startplayback' ? 15 : extplayer.timeBehindLive(this.player);
        serverDate.setSeconds(serverDate.getSeconds() - secondsBehind);
        dateTime = serverDate;
        log('checkForProgramChange', 'Live', secondsBehind);

        if (this.currentProgram && this.currentProgram.channelId === this.entitlement().channelId && dateTime.getTime() < this.currentProgram.end.getTime() && dateTime.getTime() >= this.currentProgram.start.getTime()) {
          log('checkForProgramChange', 'Same');
          dateTime = null;
          this.updateCurrentProgram_(this.currentProgram, false);
          return;
        }
      } else if (event.type !== 'startplayback' && (this.entitlement().isDynamicCachupAsLive || this.entitlement().isStaticCachupAsLive)) {
        // CachupAsLive
        var playHeadTime = extplayer.getPlayheadTime(this.player);

        if (playHeadTime) {
          dateTime = new Date(playHeadTime); // Load next stream

          if (this.currentProgram && this.entitlement().isStaticCachupAsLive && dateTime.getTime() + 2000 >= this.entitlement().streamInfo.end.getTime()) {
            if (this.player.lineUpAsset && dateTime.getTime() + 2000 < this.currentProgram.end.getTime()) {
              log('checkForProgramChange', 'Load next stream', dateTime);
              this.player.lineUpAsset(null, this.currentProgram.channelId, this.currentProgram.programId, dateTime.getTime());
            } else {
              log('checkForProgramChange', 'playNextProgram', dateTime);
              this.player.playNextProgram();
            }

            return;
          } else if (this.currentProgram && dateTime.getTime() + 2000 >= this.currentProgram.end.getTime()) {
            // Next Program
            // play request if outside stream boundery
            log('checkForProgramChange', 'Next', dateTime); // Margin to next program

            dateTime.setSeconds(dateTime.getSeconds() + 2);
          } else if (this.currentProgram && dateTime.getTime() < this.currentProgram.end.getTime() && dateTime.getTime() >= this.currentProgram.start.getTime()) {
            log('checkForProgramChange', 'Same', dateTime);
            dateTime = null;
            this.updateCurrentProgram_(this.currentProgram, false);
            return;
          } else {
            log('checkForProgramChange', 'Prev', dateTime); // Margin to prev program
            // dateTime.setSeconds(dateTime.getSeconds() - 2);
          }
        }
      }

      this.exposure.getProgramInfo(channelId, dateTime, function (program, error) {
        _this2.currentVOD_ = null;

        if (error) {
          log('getProgramInfo', 'No EPG found.', error);

          _this2.pollingForEPG_();

          return;
        }

        _this2.updateCurrentProgram_(program, event.type === 'startplayback');
      }, dateTime ? null : programId);
    }
    /**
    * updateChannelInfo
     *
    * @param {Object} program
    * @param {Function=} callback when done
    * @private
    */
    ;

    _proto.updateChannelInfo_ = function updateChannelInfo_(program, callback) {
      var _this3 = this;

      if (!program || !program.channelId) {
        log.error('updateChannelInfo', 'program or channelId empty');
        callback();
        return;
      }

      if (this.currentChannelAsset_ && this.currentChannelAsset_.assetId === program.channelId) {
        program.channelInfo = this.extractAssetMetadata(this.currentChannelAsset_);
        callback();
        return;
      }

      this.exposure.getChannelInfo(program.channelId, function (channelAsset, error) {
        if (error) {
          log.warn('updateChannelInfo', 'No ChannelInfo found.', error);
          callback();
          return;
        }

        log('updateChannelInfo', program.channelId);
        _this3.currentChannelAsset_ = channelAsset;
        program.channelInfo = _this3.extractAssetMetadata(_this3.currentChannelAsset_);
        callback();
        return;
      });
    }
    /**
     * updateVOD
     *
     * @param assetId
     * @private
     */
    ;

    _proto.updateVOD_ = function updateVOD_(assetId) {
      var _this4 = this;

      this.exposure.getAssetInfo(assetId, function (asset, error) {
        _this4.currentProgram_ = null;

        if (!_this4.player) {
          return;
        }

        if (error) {
          log.warn('No AssetInfo found.', error);
          _this4.currentVOD_ = null;

          _this4.player.trigger(empPlayerEvents.ASSET_CHANGED, {
            asset: null
          });

          return;
        }

        if (!_this4.currentVOD_ || _this4.currentVOD_.assetId !== asset.assetId) {
          _this4.currentVOD_ = asset;
          log('ASSET_CHANGED');

          _this4.player.trigger(empPlayerEvents.ASSET_CHANGED, {
            asset: asset
          });
        }
      });
    }
    /**
     * updateCurrentProgram_
     *
     * @param program
     * @param startplayback
     * @private
     */
    ;

    _proto.updateCurrentProgram_ = function updateCurrentProgram_(program, startplayback) {
      var _this5 = this;

      log('updateCurrentProgram', program, startplayback);
      this.clearProgramChangeTimeout_();

      if (!this.player) {
        return;
      } // Program changed due to seek or other event


      if (!this.currentProgram_ || this.currentProgram_.programId !== program.programId) {
        this.currentVOD_ = null;
        this.currentProgram_ = program;

        if (!startplayback) {
          this.verifyEntitlement();
        }

        this.updateChannelInfo_(program, function () {
          if (!_this5.player) {
            return;
          }

          extplayer.currentAsset(_this5.player, program.assetId, program.programId, program.channelId);

          if (_this5.entitlement_) {
            _this5.entitlement_.channelId = program.channelId;
            _this5.entitlement_.assetId = program.assetId;
            _this5.entitlement_.programId = program.programId;
          }

          extplayer.setTechProgram(_this5.player, program);

          _this5.player.removeClass('vjs-live');

          _this5.player.trigger(empPlayerEvents.PROGRAM_CHANGED, {
            program: program
          }); // Update progressbar


          _this5.player.trigger(empPlayerEvents.DURATION_CHANGE);
        });
      }

      if (startplayback) {
        log('updateCurrentProgram', 'startplayback');
        return;
      }

      if (this.entitlement().isDynamicCachupAsLive || this.entitlement().live || this.entitlement().isStaticCachupAsLive) {
        var date;

        if (this.entitlement().isStaticCachupAsLive || this.entitlement().isDynamicCachupAsLive) {
          var playHeadTime = extplayer.getPlayheadTime(this.player);

          if (!playHeadTime) {
            log('updateCurrentProgram', 'no playHeadTime', playHeadTime);
            return;
          }

          date = new Date(playHeadTime);
        } else {
          // calculate live time from user position for old MMR Streams
          var secondsBehind = extplayer.timeBehindLive(this.player);
          date = new Date(this.exposure.getCachedServerTime());
          date.setSeconds(date.getSeconds() - secondsBehind);
        } // Set a timer that fires after X seconds. where X is the amount of seconds it takes from NOW to get to program boundary


        var expiryDate = new Date(program.start.getTime() + program.duration);
        var streamEnd = this.entitlement().streamInfo.end;

        if (streamEnd && expiryDate.getTime() > streamEnd.getTime()) {
          expiryDate = streamEnd;
        }

        var timediff = expiryDate.getTime() - date.getTime();

        if (!timediff || timediff < this.MIN_PROGRAM_CHECK_TIMEOUT) {
          log('updateCurrentProgram', 'timediff is below minimum', timediff);
          timediff = this.MIN_PROGRAM_CHECK_TIMEOUT;
        }

        this.programChangeCheckTimestamp_ = Date.now() + timediff;
        log('updateCurrentProgram', 'programChangeTimeout', new Date(this.programChangeCheckTimestamp_));
        this.programChangeTimeout_ = setTimeout(function () {
          _this5.checkForProgramChange_({
            type: 'programend'
          });

          _this5.programChangeTimeout_ = null;
        }, timediff > 0x7FFFFFFF ? 0x7FFFFFFF : timediff);
      }

      this.player.off(empPlayerEvents.SEEKED, this.checkForProgramChangeBind);
      this.player.one(empPlayerEvents.SEEKED, this.checkForProgramChangeBind);
      this.player.off(empPlayerEvents.PLAY, this.checkForProgramChangeBind);
      this.player.one(empPlayerEvents.PLAY, this.checkForProgramChangeBind);
      this.player.off(empPlayerEvents.PAUSE, this.clearProgramChangeTimeoutBind);
      this.player.one(empPlayerEvents.PAUSE, this.clearProgramChangeTimeoutBind);
    }
    /**
     * polling backend for new EPG
     *
     * @private
     */
    ;

    _proto.pollingForEPG_ = function pollingForEPG_() {
      var _this6 = this;

      this.currentProgram_ = null;
      this.player.trigger(empPlayerEvents.PROGRAM_CHANGED, {
        program: null
      }); // Update progressbar

      this.player.trigger(empPlayerEvents.DURATION_CHANGE);
      this.player.addClass('vjs-live');
      var pollingRate = 2 * 60 * 1000;
      this.programChangeCheckTimestamp_ = Date.now() + pollingRate;
      this.programChangeTimeout_ = setTimeout(function () {
        _this6.checkForProgramChange_({
          type: 'pollingforepg'
        });

        _this6.programChangeTimeout_ = null;
      }, pollingRate);
    }
    /**
     * get Next Program
     *
     * @param {Function=} callback with next program
     */
    ;

    _proto.getNextProgram = function getNextProgram(callback) {
      if (!this.currentProgram) {
        if (callback) {
          callback(null, {
            message: 'getNextProgram No Current Program'
          });
          return;
        }
      }

      if (this.exposure.getCachedServerTime() < this.currentProgram.end.getTime()) {
        callback(this.currentProgram);
        return;
      }

      var dateTime = new Date(this.currentProgram.endTime);
      dateTime.setSeconds(dateTime.getSeconds() + 15);
      this.exposure.getProgramInfo(this.currentProgram.channelId, dateTime, function (program, error) {
        if (error) {
          callback(null, error);
        } else {
          callback(program);
        }
      }, null);
    }
    /**
     * get Previous Program
     *
     * @param {Function=} callback with previous program
     */
    ;

    _proto.getPreviousProgram = function getPreviousProgram(callback) {
      if (!this.currentProgram) {
        if (callback) {
          callback(null, {
            message: 'getPreviousProgram No Current Program'
          });
          return;
        }
      }

      var dateTime = new Date(this.currentProgram.startTime);
      dateTime.setSeconds(dateTime.getSeconds() - 15);
      this.exposure.getProgramInfo(this.currentProgram.channelId, dateTime, function (program, error) {
        if (error) {
          callback(null, error);
        } else {
          callback(program);
        }
      }, null);
    }
    /**
     * get Program
     *
     * @param date
     * @param {Function=} callback with program
     */
    ;

    _proto.getProgram = function getProgram(dateTime, callback) {
      if (!this.currentProgram) {
        if (callback) {
          callback(null, {
            message: 'getProgram No Current Program'
          });
          return;
        }
      }

      this.exposure.getProgramInfo(this.currentProgram.channelId, dateTime, function (program, error) {
        if (error) {
          callback(null, error);
        } else {
          callback(program);
        }
      }, null);
    }
    /**
     * verifyEntitlement
     */
    ;

    _proto.verifyEntitlement = function verifyEntitlement() {
      var _this7 = this;

      if (!this.currentProgram) {
        return;
      }

      this.exposure.verifyEntitlement(this.currentProgram.assetId, this.entitlement().playRequest, function (data, error) {
        if (error) {
          _this7.player.error('verifyEntitlement ' + error.message);

          extplayer.stop(_this7.player);
          return;
        }

        if (!data || data.status !== 'SUCCESS') {
          _this7.player.error(data ? data.status : 'verifyEntitlement no status');

          extplayer.stop(_this7.player);
          return;
        }

        log('verifyEntitlement', data.status);
      });
    }
    /**
     *
     * @param assetId
     * @param {Function=} callback with asset metadata
     */
    ;

    _proto.getAssetMetadata = function getAssetMetadata(assetId, callback) {
      var _this8 = this;

      var asset = this.currentProgram ? this.currentProgram.asset : this.currentVOD;

      if (!asset || asset.assetId !== assetId) {
        this.exposure.getAssetMetadata_(assetId, function (assetMetadata, error) {
          if (error) {
            log.warn('getAssetMetadata', 'No data found.', error);
            callback(null, error);
            return;
          }

          callback(_this8.extractAssetMetadata(assetMetadata));
          return;
        });
      } else {
        callback(this.extractAssetMetadata(asset));
      }

      return;
    }
    /**
    * Extract title, subtitle and images from assetMetadata
    *
    * @param {Object} assetMetadata
    * @return {Object} title, subtitle and images
    */
    ;

    _proto.extractAssetMetadata = function extractAssetMetadata(assetMetadata) {
      // Used by CC sender and CC Reveiver
      var title = null;
      var subtitle = null;
      var images = null; // We take first localized

      if (assetMetadata && assetMetadata.localized && assetMetadata.localized.length > 0) {
        if (assetMetadata.localized[0].title) {
          title = assetMetadata.localized[0].title;
        }

        if (assetMetadata.localized[0].shortDescription) {
          subtitle = assetMetadata.localized[0].shortDescription;
        }

        if (assetMetadata.localized[0].images && assetMetadata.localized[0].images.length > 0 && assetMetadata.localized[0].images[0].url) {
          images = assetMetadata.localized[0].images;
        }
      }

      return {
        title: title ? title : '',
        subtitle: subtitle ? subtitle : '',
        images: images ? images : []
      };
    };

    _createClass(ProgramService, [{
      key: "exposure",
      get: function get() {
        if (!this.options_.exposure) {
          var exposureServiceName = this.player.options_['entitlement-engine'];

          if (!exposureServiceName) {
            exposureServiceName = this.player.options_['exposure-service'] ? this.player.options_['exposure-service'] : 'EricssonExposure';
          }

          var entitlementOptions = this.player.options_[exposureServiceName.toLowerCase()];

          if (!entitlementOptions) {
            return null;
          }

          var Exposure = EntitlementEngine.getEntitlementEngine(exposureServiceName);
          this.options_.exposure = new Exposure(entitlementOptions);
        }

        return this.options_.exposure;
      }
    }, {
      key: "currentProgram",
      get: function get() {
        if (extplayer.supportsEpgProgramChange(this.player)) {
          var program = extplayer.program(this.player);
          return program;
        }

        return this.currentProgram_;
      }
      /**
       * current Channel Asset
       *
       * @return {Object}
       */

    }, {
      key: "currentChannelAsset",
      get: function get() {
        return this.currentChannelAsset_;
      }
      /**
       * current VOD Asset
       *
       * @return {Object}
       */

    }, {
      key: "currentVOD",
      get: function get() {
        // FOR CC currentVOD comming from tech
        return this.currentVOD_;
      }
    }]);

    return ProgramService;
  }(Plugin$1);

  ProgramService.VERSION = '2.1.101-324';

  if (videojs.getPlugin('programService')) {
    videojs.log.warn('A plugin named "programService" already exists.');
  } else {
    videojs.registerPlugin('programService', ProgramService);
  }

  var Plugin$2 = videojs.getPlugin('plugin');
  /**
   * EntitlementExpirationService
   *
   * Checks if entitlements are still valid according to their expiration and handles refreshing of expired entitlements
   * @param {Player} player The `Player` that this class should be attached to.
   * @param {Object=} options The key/value store of player options.
   * @extends videojs.Plugin
   * @class EntitlementExpirationService
   *
   */

  var EntitlementExpirationService =
  /*#__PURE__*/
  function (_Plugin) {
    _inheritsLoose(EntitlementExpirationService, _Plugin);

    /**
     * Create the EntitlementExpirationService
     *
     * @param {Player} player The `Player` that this class should be attached to.
     * @param {Object=} options The key/value store of player options.
     */
    function EntitlementExpirationService(player, options) {
      var _this;

      _this = _Plugin.call(this, player, options) || this;
      log('EntitlementExpirationService', 'create');
      _this.options_ = options;
      _this.onEntitlementChangeBind = _this.onEntitlementChange.bind(_assertThisInitialized(_this));
      return _this;
    }
    /**
     * exposure
     *
     *  @return {Exposure} current exposure
     */


    var _proto = EntitlementExpirationService.prototype;

    /**
     * dispose
     */
    _proto.dispose = function dispose() {
      log('EntitlementExpirationService', 'dispose');
      this.stop();

      _Plugin.prototype.dispose.call(this);
    }
    /**
     * stop
     */
    ;

    _proto.stop = function stop() {
      log('EntitlementExpirationService', 'stop');
      this.player.off(empPlayerEvents.ENTITLEMENT_CHANGE, this.onEntitlementChangeBind);

      if (this.expirationTimeout_) {
        clearTimeout(this.expirationTimeout_);
        this.expirationTimeout_ = null;
      }
    }
    /**
     * start
     */
    ;

    _proto.start = function start() {
      log('EntitlementExpirationService', 'start');

      if (this.expirationTimeout_) {
        clearTimeout(this.expirationTimeout_);
        this.expirationTimeout_ = null;
      }

      this.player.off(empPlayerEvents.ENTITLEMENT_CHANGE, this.onEntitlementChangeBind);
      this.player.on(empPlayerEvents.ENTITLEMENT_CHANGE, this.onEntitlementChangeBind);
    }
    /**
     * get and set entitlement
     *
     * @param {Entitlement} value
     * @return {Entitlement} Entitlement
     */
    ;

    _proto.entitlement = function entitlement(value) {
      if (typeof value === 'undefined') {
        return this.entitlement_;
      }

      this.entitlement_ = value;
      return value;
    }
    /**
     * onEntitlementChange
     *
     * @param {EventTarget~Event} [event]
     * @param {Object} data
     */
    ;

    _proto.onEntitlementChange = function onEntitlementChange(event, data) {
      this.entitlement(data && data.entitlement);

      if (this.expirationTimeout_) {
        clearTimeout(this.expirationTimeout_);
        this.expirationTimeout_ = null;
      }

      this.checkForExpiration();
    }
    /**
    * Set/Get The options
    *
    * @param {Object} obj
    * @return {Object} options
    */
    ;

    _proto.options = function options(obj) {
      if (!obj) {
        return this.options_;
      }

      this.options_ = obj;
    }
    /**
     * checkForExpiration
     */
    ;

    _proto.checkForExpiration = function checkForExpiration() {
      var _this2 = this;

      var entitlement = this.entitlement();
      log('EntitlementExpirationService', 'checkForExpiration', entitlement.licenseExpiration);

      if (!this.hasLicenseExpiration(entitlement)) {
        // If no license expiration is present.
        return;
      }

      var timediff = entitlement.licenseExpiration.getTime() - this.exposure.getCachedServerTime();

      if (timediff <= 0) {
        // license expired
        this.player.error(this.errorForReason(entitlement.licenseExpirationReason));
        extplayer.stop(this.player);
        return;
      } // Set timeout to refresh entitlement
      // Check to make sure the timeDiff is not bigger than the maximum allowed value in setTimeout.


      if (timediff < 0x7FFFFFFF) {
        this.expirationTimeout_ = setTimeout(function () {
          _this2.expirationTimeout_ = null;
          log('EntitlementExpirationService', 'license expired');

          _this2.refreshEntitlement();
        }, timediff);
      } else {
        setTimeout(function () {
          return _this2.checkForExpiration();
        }, 0x3FFFFFFF);
      }
    }
    /**
     * Refresh entitlement
     *
     * Asks the entitlement engine to re-request the entitlement using the previously used data.
     *
     */
    ;

    _proto.refreshEntitlement = function refreshEntitlement() {
      extplayer.restart(this.player, true);
    }
    /**
     * Error for reason
     *
     * Returns a human readable string for expiration error
     *
     * @param {string} reason Error reason
     * @return {string} Human readable error string
     */
    ;

    _proto.errorForReason = function errorForReason(reason) {
      switch (reason) {
        case 'GEO_BLOCKED':
          return this.player.localize('Not allowed from this region.');

        case 'NOT_ENTITLED':
          return this.player.localize('The user is not entitled.');

        case 'GAP_IN_EPG':
          return this.player.localize('Asset temporarily not available');

        case 'EPG_PLAY_MAX_HOURS':
        /* falls through */

        default:
          return this.player.localize('Asset exceeded maximum playback time');
      }
    }
    /**
     * Checks if the current entitlement has a license expiration
     *
     * @param {Entitlement} entitlement
     *
     * @return {boolean} Bool Does entitlement have an expiration?
     */
    ;

    _proto.hasLicenseExpiration = function hasLicenseExpiration(entitlement) {
      return !!entitlement.licenseExpiration;
    };

    _createClass(EntitlementExpirationService, [{
      key: "exposure",
      get: function get() {
        return this.options_ && this.options_.exposure;
      }
    }]);

    return EntitlementExpirationService;
  }(Plugin$2);

  EntitlementExpirationService.VERSION = '2.1.101-324';

  if (videojs.getPlugin('entitlementExpirationService')) {
    videojs.log.warn('A plugin named "entitlementExpirationService" already exists.');
  } else {
    videojs.registerPlugin('entitlementExpirationService', EntitlementExpirationService);
  }

  /**
   * Loop method to do a loop while executing async requests inside of it
   *
   * example:
   *
   * asyncLoop(2, function(loop) {
   *  console.log(loop.iterations();
   *  // do something asyncy
   *  loop.next();
   * }, function() {
   *  console.log('all done');
   * });
   *
   * would output: 1, 2, all done
   *
   * You have to manually call .next on the loop for it to continue execution
   *
   * @param  {number}   iterations - Number of times to iterate
   * @param  {Function} func - Function to execute when iterating
   * @param  {Function} callback - Callback function when all iterations have been complete
   * @return {Object} - asyncLoop
   * @private
   */
  function asyncLoop(iterations, func, callback) {
    var index = 0;
    var done = false;
    var loop = {
      next: function next() {
        if (done) {
          return;
        }

        if (index < iterations) {
          index++;
          func(loop);
        } else {
          done = true;
          callback();
        }
      },
      iteration: function iteration() {
        return index - 1;
      },
      break: function _break() {
        done = true;
        callback();
      }
    };
    loop.next();
    return loop;
  }

  /**
  * @file entitlement-middleware.js
  * @module empEntitlement
  */
  var Tech$1 = videojs.getComponent('Tech');
  /**
   * Inject a Source handler for EMP streams
   *
   * @param {Player} player The `Player` that this class should be attached to.
   * @class EntitlementMiddleware
   */

  var EntitlementMiddleware = function EntitlementMiddleware(player) {
    /**
     * start the ProgramService
     *
     * @param {Object} options The key/value store of player options.
     * @param {exposure} exposure
     * @param {Entitlement} srcEntitlement
     * @param {Function} callback
     * @private
     */
    function startProgramService_(options, exposure, srcEntitlement, callback) {
      // Don't play behind the live egde
      if (player.options_.absoluteStartTime && player.options_.absoluteStartTime > exposure.getCachedServerTime()) {
        player.options_.absoluteStartTime = exposure.getCachedServerTime() - 10000;
      } else if (player.options_.startTime && player.options_.startTime > exposure.getCachedServerTime() / 1000) {
        player.options_.startTime = (exposure.getCachedServerTime() - 10000) / 1000;
      }

      var seekToProgramStart = false;

      if (player.programService && (!options.programService || !options.programService.disable)) {
        player.programService().options({
          exposure: exposure
        });

        if (srcEntitlement.isDynamicCachupAsLive && options.playFrom) {
          // it's set by useLastViewedOffset or options.playFrom === 'startTime'
          seekToProgramStart = options.playFrom === 'beginning' || !srcEntitlement.live && !player.options_.absoluteStartTime && !player.options_.startTime;

          if (seekToProgramStart) {
            // Use timeParams.start as startTime
            var startTime = srcEntitlement.streamInfo.start.getTime() + 100;

            if (srcEntitlement.mimeType === 'application/dash+xml') {
              log('SET startTime', startTime);
              player.options({
                startTime: startTime / 1000
              });
              srcEntitlement.options.startTime = startTime / 1000;
            } else {
              // HLS
              log('SET startTime', 0.1);
              player.options({
                startTime: 0.1
              });
              srcEntitlement.options.startTime = 0.1;
            }
          } else if (player.options_.absoluteStartTime) {
            // Don't play before program start
            if (player.options_.absoluteStartTime < srcEntitlement.streamInfo.start.getTime()) {
              player.options_.absoluteStartTime = srcEntitlement.streamInfo.start.getTime();
            }

            var _startTime = player.options_.absoluteStartTime;

            if (player.streamType === 'HLS') {
              _startTime = player.options_.absoluteStartTime - srcEntitlement.streamInfo.start.getTime();
            }

            _startTime = _startTime ? _startTime : 0.1;
            log('absoluteStartTime SET startTime', _startTime);
            player.options({
              startTime: _startTime / 1000
            });
            srcEntitlement.options.startTime = _startTime / 1000;
            player.options_.absoluteStartTime = undefined;
            srcEntitlement.options.absoluteStartTime = undefined;
          } else if (player.options_.startTime) {
            srcEntitlement.options.startTime = player.options_.startTime;
            player.options_.absoluteStartTime = undefined;
            srcEntitlement.options.absoluteStartTime = undefined;
          }
        } else if (srcEntitlement.isStaticCachupAsLive && player.options_.absoluteStartTime) {
          // Don't play before program start
          if (player.options_.absoluteStartTime < srcEntitlement.streamInfo.start.getTime()) {
            player.options_.absoluteStartTime = srcEntitlement.streamInfo.start.getTime();
          }

          var _startTime2 = player.options_.absoluteStartTime - srcEntitlement.streamInfo.start.getTime();

          log('absoluteStartTime SET startTime', _startTime2);
          player.options({
            startTime: _startTime2 / 1000
          });
          srcEntitlement.options.startTime = _startTime2 / 1000;
          player.options_.absoluteStartTime = undefined;
          srcEntitlement.options.absoluteStartTime = undefined;
        } else if (srcEntitlement.isStaticCachupAsLive && player.options_.startTime) {
          srcEntitlement.options.startTime = player.options_.startTime;
          player.options_.absoluteStartTime = undefined;
          srcEntitlement.options.absoluteStartTime = undefined;
        }

        player.programService().start();
      }

      callback();
    }
    /**
     * Start up analytics
     *
     * @param {Object} options The key/value store of player options.
     * @param {Object} entitlementOptions The key/value store of entitlement options.
     * @param {Exposure} exposure
     * @private
     */


    function startAnalytics_(options, entitlementOptions, exposure) {
      // backward compatibility with 1.x
      var analyticsDeviceInfo = options.analyticsDeviceInfo;

      if (analyticsDeviceInfo) {
        log.warn('options.analyticsDeviceInfo is deprecated. Use options.analytics.deviceInfo.');

        if (!options.analytics) {
          options.analytics = {};
        }

        options.analytics.deviceInfo = analyticsDeviceInfo;
      }

      if (player.analytics) {
        player.analytics().options({
          exposure: exposure,
          analytics: options.analytics
        });
        player.analytics().newAnalytics({
          exposureApiURL: entitlementOptions.exposureApiURL,
          customer: entitlementOptions.customer,
          businessUnit: entitlementOptions.businessUnit,
          sessionToken: entitlementOptions.sessionToken
        });
        player.analytics().onEntitlementLoadStart();
      }
    }
    /**
     * Test if it's an entitlement
     *
     * @param {Entitlement} entitlement
     * @return  {boolean} is Entitlement
     * @private
     */


    function isEntitlement_(entitlement) {
      return entitlement && entitlement.playSessionId && entitlement.playToken && entitlement.mediaLocator;
    }
    /**
     * Setup Entitlement
     *
     * @param {Entitlement} entitlement
     * @param {Tech} tech
     * @param {Object} options The key/value store of player options.
     * @return {Entitlement} Entitlement
     * @private
     */


    function setupEntitlement_(entitlement, tech, options) {
      if (!entitlement) {
        log.error('setupEntitlement_ no entitlement');
        return;
      }

      if (options.useLastViewedOffset === true) {
        if ((entitlement.isStaticCachupAsLive || entitlement.isDynamicCachupAsLive || entitlement.live) && (entitlement.lastViewedTime || entitlement.liveTime)) {
          if (entitlement.liveTime) {
            log('liveTime', new Date(entitlement.liveTime), entitlement.liveTime);
            player.options({
              absoluteStartTime: entitlement.liveTime
            });
          } // old code
          // else {
          //  log('lastViewedTime', new Date(entitlement.lastViewedTime), entitlement.lastViewedTime);
          //  player.options({ 'absoluteStartTime': entitlement.lastViewedTime });
          // }

        } else if (entitlement.lastViewedOffset) {
          log('lastViewedOffset', entitlement.lastViewedOffset / 1000);

          if (player.streamType !== 'DASH') {
            // Is HLS
            player.options({
              startTime: entitlement.lastViewedOffset / 1000
            });
          }
        }
      }

      if (entitlement.timeshiftEnabled === false) {
        player.options({
          timeShiftDisabled: true
        });
      }

      player.trigger(empPlayerEvents.ENTITLEMENT_CHANGE, {
        entitlement: entitlement
      });
      entitlement = assign(new Entitlement({}), entitlement);
      entitlement.type = entitlement.mimeType; // Grab tech-specific options from player options and add source.
      // Will be send to handleSource

      var techOptions = {};
      assign(techOptions, player.options_[tech.name.toLowerCase()]);
      var playOptions = {
        autoplay: player.options_.autoplay,
        muted: player.options_.muted,
        language: player.options_.language,
        maxBitrate: player.options_.maxBitrate,
        timeShiftDisabled: player.options_.timeShiftDisabled,
        useLastViewedOffset: player.options_.useLastViewedOffset,
        startTime: player.options_.startTime,
        absoluteStartTime: player.options_.absoluteStartTime,
        audioLanguage: player.options_.audioLanguage,
        subtitleLanguage: player.options_.subtitleLanguage,
        liveDelay: player.options_.liveDelay
      };
      assign(techOptions, playOptions);
      entitlement.options = playOptions; // Change to new entitlement EMP-10229

      entitlement.options.source = entitlement;
      player.entitlementExpirationService().start();
      return entitlement;
    } // return setSource middleware


    return {
      setSource: function setSource(srcObj, next) {
        var options = player.options();
        var srcEntitlement = null;
        var preEntitlement = null;
        var entitlementRequest = null;

        if (player.programService) {
          player.programService().stop();
        } // playEntitlement was called by the player


        if (isEntitlement_(player.currentSource())) {
          srcEntitlement = player.currentSource();
        } else {
          var asset = parseSrc(srcObj.src);
          entitlementRequest = new EntitlementRequest(asset);
          player.trigger(empPlayerEvents.ENTITLEMENT_LOAD_START, entitlementRequest);
        }

        var exposureServiceName = options['entitlement-engine'];

        if (!exposureServiceName) {
          exposureServiceName = options['exposure-service'] ? options['exposure-service'] : 'EricssonExposure';
        }

        var entitlementOptions = options[exposureServiceName.toLowerCase()];

        if (!entitlementOptions) {
          var error = new EmpPlayerError('Missing entitlementOptions in player options', EmpPlayerErrorCodes.ENTITLEMENT);
          player.error(error);
          next(error);
          return;
        }

        var exposure = EntitlementMiddleware.getExposure(entitlementOptions, exposureServiceName);

        if (!entitlementOptions.sessionToken) {
          // Try Anonymous login
          exposure.login('', '', function (response) {
            if (response.success) {
              entitlementOptions.sessionToken = response.session.sessionToken;
              player.trigger(empPlayerEvents.REPLAY);
            } else {
              log.error('Anonymous login fail', response.message);

              var _error = new EmpPlayerError('Anonymous login fail', EmpPlayerErrorCodes.ENTITLEMENT);

              player.error(_error);
            }
          }, '');
          return;
        }

        if (!options.analytics || !options.analytics.disable) {
          startAnalytics_(options, entitlementOptions, exposure);
        }

        player.entitlementExpirationService().options({
          exposure: exposure
        }); // Get avalible techs

        var techs = options.techOrder.map(function (techName) {
          return techName.charAt(0).toUpperCase() + techName.slice(1);
        }).map(function (techName) {
          return [techName, Tech$1.getTech(techName)];
        }).filter(function (_ref) {
          var techName = _ref[0],
              tech = _ref[1];

          if (tech && tech.entitlementPlayRequest) {
            return tech.isSupported();
          }
        });

        if (techs.length === 0) {
          var _error2 = new EmpPlayerError('Unable to load asset: None of the playback technologies are supported', EmpPlayerErrorCodes.ENTITLEMENT);

          player.error(_error2);
          next(_error2);
          return;
        }

        var entitlementRequestError; // Start the tech selecting loop

        asyncLoop(techs.length, function (loop) {
          var i = loop.iteration();

          if (options.excludeTechs && options.excludeTechs.indexOf(techs[i][0]) !== -1) {
            loop.next();
            return;
          } // Get reference to the tech object


          var tech = techs[i][1];

          if (player.tech_ && player.techName_ !== techs[i][0]) {
            player.techCall_('reset');
            player.unloadTech_(); // player.reset(); crash without emp-player for hls
          }

          try {
            if (srcEntitlement) {
              // playEntitlement was called by the player
              srcEntitlement = setupEntitlement_(srcEntitlement, tech, options);
              startProgramService_(options, exposure, srcEntitlement, function () {
                next(null, srcEntitlement);
              });
              loop.break();
              return;
            }

            var techOptions = options[techs[i][0].toLowerCase()];
            var playRequest = techOptions && techOptions.streamType && tech.entitlementPlayRequests ? tech.entitlementPlayRequests[techOptions.streamType] : tech.entitlementPlayRequest;
            exposure.getV2Entitlement(entitlementRequest, playRequest, function (entitlement, error) {
              // If we have an fatal error during playcall break out of the loop else try next tech
              if (error) {
                if (!player.options_.excludeTechs) {
                  player.options_.excludeTechs = [];
                }

                player.options_.excludeTechs.push(techs[i][0]);
                entitlementRequestError = new EmpPlayerError(error.message + '  ' + JSON.stringify(playRequest) + JSON.stringify(entitlementRequest), error.code, error.stack);

                if (error.fatal) {
                  player.error(entitlementRequestError);
                  extplayer.stop(player);
                  next(entitlementRequestError);
                  return;
                }

                preEntitlement = entitlement;
                loop.next();
              } else {
                // Set the entitlement to use, and break out of the loop. No need to get other entitlements.
                srcEntitlement = setupEntitlement_(entitlement, tech, options);
                extplayer.currentAsset(player, entitlement.assetId, entitlement.programId, entitlement.channelId);

                if (srcEntitlement.adMediaLocator && player.yospace) {
                  log('play adMediaLocator with yospace', srcEntitlement.adMediaLocator);
                  player.yospace().start('VoD', srcEntitlement.adMediaLocator).then(function (mediaLocator) {
                    log('yospace mediaLocator returned', mediaLocator);
                    srcEntitlement.mediaLocator = mediaLocator;
                    srcEntitlement.src = mediaLocator;
                    startProgramService_(options, exposure, srcEntitlement, function () {
                      next(null, srcEntitlement);
                    });
                    loop.break();
                  }).catch(function (errMsg) {
                    entitlementRequestError = new EmpPlayerError(errMsg, EmpPlayerErrorCodes.ENTITLEMENT);
                    player.error(entitlementRequestError);
                    extplayer.stop(player);
                    srcEntitlement = null;
                  });
                } else {
                  startProgramService_(options, exposure, srcEntitlement, function () {
                    next(null, srcEntitlement);
                  });
                  loop.break();
                }
              }
            }, preEntitlement);
          } catch (error) {
            // If we get other error try next tech
            log.warn('error try next tech', new EmpPlayerError(error, EmpPlayerErrorCodes.ENTITLEMENT));
            loop.next();
            return;
          }
        }, function () {
          if (srcEntitlement === null) {
            if (!entitlementRequestError) {
              entitlementRequestError = new EmpPlayerError('Unable to load asset: None of the playback technologies are supported', EmpPlayerErrorCodes.ENTITLEMENT);
            }

            player.error(entitlementRequestError);
            extplayer.stop(player);
            next(entitlementRequestError);
            return;
          }
        });
      }
    };
  };
  /**
  * Return whether the past argument is an Exposure Service or not
  *
  * @param {Object} object An item to check
  * @static
  * @return {boolean}      Wheter it is a entitlement engine or not
  */


  EntitlementMiddleware.isExposure = function (object) {
    return EntitlementEngine.isEntitlementEngine(object);
  };
  /**
  * Return EntitlementClass
  *
  * @static
  * @return {Class}  EntitlementClass
  */


  EntitlementMiddleware.EntitlementClass = Entitlement;
  /**
  * Get an Exposure Service by name
  *
  * @param {Object} options The key/value store of player options.
  * @param {string} name Name of the entitlement engine
  * @static
  * @return {Exposure} Exposure
  */

  EntitlementMiddleware.getExposure = function (options, name) {
    if (options) {
      var Exposure = EntitlementEngine.getEntitlementEngine(name);
      return new Exposure(options);
    }

    throw new EmpPlayerError('Missing exposureOptions', EmpPlayerErrorCodes.ENTITLEMENT);
  };
  /**
  * Register an Exposure Service
  *
  * @param {string} name     Name of the entitlement engine
  * @param {EntitlementEngine} entitlementEngine The entitlement engine to register
  * @return {EntitlementEngine} EntitlementEngine
  * @throws Error
  * @static
  */


  EntitlementMiddleware.registerExposure = function (name, entitlementEngine) {
    return EntitlementEngine.registerEntitlementEngine(name, entitlementEngine);
  };
  /**
  * get the EMP log object
   *
  * @static
  * @return {*|log} EMP log object
  */


  EntitlementMiddleware.getLog = function () {
    return log;
  };

  EntitlementMiddleware.getEntitlementEngine = EntitlementEngine.getEntitlementEngine;
  EntitlementMiddleware.registerEntitlementEngine = EntitlementEngine.registerEntitlementEngine;
  EntitlementMiddleware.isEntitlementEngine = EntitlementEngine.isEntitlementEngine;
  EntitlementMiddleware.VERSION = '2.1.101-324';

  if (videojs.EntitlementMiddleware) {
    videojs.log.warn('EntitlementMiddleware already exists.');
  } else {
    // Register the plugin with video.js.
    videojs.use('video/emp', EntitlementMiddleware);
    videojs.EntitlementMiddleware = EntitlementMiddleware;
  }

  /**
   * @file emp-player.js
   * @module empPlayer
   */

  var EntitlementMiddleware$1 = window_1.empEntitlement ? window_1.empEntitlement : EntitlementMiddleware;
  /**
   * empPlayer - Extend videojs class
   *
   * @class empPlayer
   */

  var empPlayer = videojs;
  /**
   * Detects if the current browser has the required technology to play an unencrypted stream provided by EMP.
   *
   * @returns {Promise} that is always fulfilled with a boolean value
   * @static
   */

  empPlayer.canPlayUnencrypted = canPlayUnencrypted;
  /**
   * Detects if the current browser has the required technology to play an encrypted stream provided by EMP.
   *
   * @returns {Promise} that is always fulfilled with a boolean value
   * @static
   */

  empPlayer.canPlayEncrypted = canPlayEncrypted;
  /**
  * Get an Exposure Service by name
  *
  * @param {String} name Name of the entitlement engine
  * @static
  * @returns {EntitlementEngine}
  */

  empPlayer.getExposure = EntitlementMiddleware$1.getExposure;
  /**
  * Get an entitlement engine by name
  *
  * @param {String} name Name of the entitlement engine
  * @static
  * @returns {EntitlementEngine}
  */

  empPlayer.getEntitlementEngine = EntitlementMiddleware$1.getEntitlementEngine;
  /**
  * Register an Exposure Service
  *
  * @param {String} name     Name of the entitlement engine
  * @param entitlementEngine The entitlement engine to register
  * @throws Error
  * @static
  */

  empPlayer.registerEntitlementEngine = EntitlementMiddleware$1.registerEntitlementEngine;
  /**
  * Return whether the past argument is an Exposure Service or not
  *
  * @param {Object} object An item to check
  * @static
  * @return {Boolean}      Wheter it is a entitlement engine or not
  */

  empPlayer.isEntitlementEngine = EntitlementMiddleware$1.isEntitlementEngine;
  /**
  * Return EntitlementClass
  *
  * @static
  * @return {Class}  EntitlementClass
  */

  empPlayer.EntitlementClass = EntitlementMiddleware$1.EntitlementClass;
  /**
  * get the EMP log object
  * @static
  * @returns {*|log}
  */

  empPlayer.log = log;
  /**
  * get plugin
  * @static
  * @returns {*}
  */

  empPlayer.plugin = videojs.plugin;
  /**
  * get videojs
  * @static
  * @returns {*}
  */

  empPlayer.videojs = videojs;
  /**
  * get EntitlementMiddleware
  * @static
  * @returns {*} EntitlementMiddleware
  */

  empPlayer.EntitlementMiddleware = EntitlementMiddleware$1;
  /**
   * Extend function for non ES6 classes - Wrapper around videojs extend method
   * @param {String} superClass       class to extend
   * @param {String} subClassMethods  methods to extend
   * @returns {Function}              Newly created subclass
   */

  empPlayer.extend = videojs.extend;
  /**
   * Returns EmpPlayerEvents which holds all player events
   *
   * @returns {EmpPlayerEvents}
   * @method Events
   * @memberOf EMPPlayer
   */

  empPlayer.Events = empPlayerEvents;
  empPlayer.VERSION = '2.1.101-324';
  /*
   * Universal Module Definition (UMD)
   *
   */

  /* eslint-disable */

  if (typeof define === 'function' && define.amd) {
    define('empPlayer', [], function () {
      return empPlayer;
    }); // checking that module is an object too because of umdjs/umd#35
  } else if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = empPlayer;
  }

  return empPlayer;

})));
