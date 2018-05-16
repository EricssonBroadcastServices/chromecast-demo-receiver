/**
 * @license
 * EMP-Player 2.0.84-85 
 * Copyright Ericsson, Inc. <https://www.ericsson.com/>
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.empShaka = factory());
}(this, (function () {

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





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

var empty = {};


var empty$1 = (Object.freeze || Object)({
	'default': empty
});

var minDoc = ( empty$1 && empty ) || empty$1;

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * EmpPlayerEvents - Holds all available player events
 *
 * @class EmpPlayerEvents
 */
var EmpPlayerEvents = function EmpPlayerEvents() {
  classCallCheck(this, EmpPlayerEvents);

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

  this.SEGMENTS_UPDATED = 'segmentsupdated';
  this.SEGMENT_CHANGED = 'segmentchanged';

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
};

var empPlayerEvents = new EmpPlayerEvents();

//TODO Remove this maybe not good for treeshaking
var videojsTmp = window_1.videojs;
var videojs = videojsTmp;

var logToBrowserConsole = false;

var log_temp = function log_temp() {
  if (logToBrowserConsole) {
    _log(null, arguments);
  }
};

// Allway log if EMP_DEBUG_LOG and with correct stack trace
if (window_1.EMP_DEBUG_LOG) {
  log_temp = window_1.console && window_1.console.log && console.log.bind(console) || function () {};
}

/**
 * Log plain debug messages
 * @method log
 */
var log$1 = log_temp;

/**
 * Keep a history of log messages
 * @type {Array}
 */
log$1.history = [];

/**
 * Log error messages
 */
log$1.error = function () {
  _log('error', arguments);
};

/**
 * Log warning messages
 */
log$1.warn = function () {
  _log('warn', arguments);
};

/**
 * Log debug  messages
 */
log$1.debug = function () {
  _log('debug', arguments);
};

// Allway log if EMP_DEBUG_LOG and with correct stack trace
if (window_1.EMP_DEBUG_LOG) {
  var noop = function noop() {};
  log$1.debug = window_1.console && window_1.console.debug && console.debug.bind(console) || noop;
  log$1.warn = window_1.WARN = window_1.console && window_1.console.warn && console.warn.bind(console) || noop;
  log$1.error = window_1.ERROR = window_1.console && window_1.console.error && console.error.bind(console) || noop;
}

/**
 * setLogToBrowserConsole and debug mode
 */
log$1.setLogToBrowserConsole = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  logToBrowserConsole = value;
};

/**
 * Log messages to the console and history based on the type of message
 *
 * @param {String} type The type of message, or 'null' for 'log'
 * @param {Object} args The arguments to be passed to the log
 * @private
 * @method _log
 */
function _log(type, args) {
  // converts args to an array to get array functions
  var argsArray = Array.prototype.slice.call(args);

  // if there's no console then don't try to output messages
  // they will be stored in the log.history
  var noop = function noop() {};

  var console = window_1['console'] || {
    'log': noop,
    'warn': noop,
    'error': noop,
    'trace': noop
  };

  if (type) {
    // add log type in front of message
    argsArray.unshift(type.toUpperCase() + ':');
  } else {
    type = 'log';
  }

  // add to history
  //log.history.push(argsArray);

  // add console prefix after adding to history
  argsArray.unshift('EMPPlayer:');

  // call the appropriate log function
  if (console[type].apply) {
    console[type].apply(console, argsArray);
  } else {
    console[type](argsArray.join(' '));
  }
}

/**
 * Array-like iteration for objects.
 *
 * @param {Object} object
 *        The object to iterate over
 *
 * @param {obj:EachCallback} fn
 *        The callback function which is called for each key in the object.
 */


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


/**
 * Object.assign-style object shallow merge/extend.
 *
 * @param  {Object} target
 * @param  {Object} ...sources
 * @return {Object}
 */


/**
 * Returns whether a value is an object of any kind - including DOM nodes,
 * arrays, regular expressions, etc. Not functions, though.
 *
 * This avoids the gotcha where using `typeof` on a `null` value
 * results in `'object'`.
 *
 * @param  {Object} value
 * @return {Boolean}
 */


/**
 * Returns whether an object appears to be a "plain" object - that is, a
 * direct instance of `Object`.
 *
 * @param  {Object} value
 * @return {Boolean}
 */

/*global
  document, atob
*/










function isString(val) {
  return typeof val === 'string' || !!val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && Object.prototype.toString.call(val) === '[object String]';
}



/**
 * Filter out single bad source objects or multiple source objects in an
 * array.Also flattens nested source object arrays into a 1 dimensional
 * array of source objects.
 */

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

  SHAKA_TECH: 200,

  HLS_TECH: 300,

  FLASH_TECH: 400,

  CHROMECAST_TECH: 500
};

var EmpPlayerError = function (_Error) {
  inherits(EmpPlayerError, _Error);

  function EmpPlayerError(value) {
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EmpPlayerErrorCodes.UNKNOWN;
    var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    classCallCheck(this, EmpPlayerError);

    var _this = possibleConstructorReturn(this, _Error.call(this));

    _this.code = code;
    if (isString(value)) {
      _this.message = value;
    } else if (value.message) {
      _this.message = value.message;
    }
    _this.status = status;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, EmpPlayerError);
    }
    return _this;
  }

  createClass(EmpPlayerError, [{
    key: 'codes',
    get: function get$$1() {
      return EmpPlayerErrorCodes;
    }
  }]);
  return EmpPlayerError;
}(Error);

/**
 * EmpTech - General tech implementation, not specific to a certain tech
 *
 * @class EmpTech
 */

var EmpTech = function () {
  function EmpTech() {
    classCallCheck(this, EmpTech);
  }

  EmpTech.prototype.addAudioTrack = function addAudioTrack(kind, label, language) {
    var enabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    // Add the track to the player's audio track list.
    var track = new videojs.AudioTrack({
      enabled: enabled,
      kind: kind || 'main',
      label: label,
      language: language
    });
    this.audioTracks().addTrack(track);
    return track;
  };

  /**
   * Returns the language code of a language string: 'en-English' to 'en' or returns the original string if '-' can't be found
   * @returns {String} language code
   */


  EmpTech.prototype.languageCode = function languageCode(language) {
    return language ? language.split('-')[0] : null;
  };

  EmpTech.prototype.remainingTime = function remainingTime() {
    var duration = this.duration();
    if (duration === Infinity || duration === 0) {
      return Infinity;
    } else {
      return duration - this.currentTime();
    }
  };

  EmpTech.prototype.supportsEpgProgramChange = function supportsEpgProgramChange() {
    return this.supportsEpgProgramChange_ || false;
  };

  EmpTech.prototype.base = function base() {}
  // noop


  /**
  * Trigger a recoverable error
  * allows the player to fallback to another tech
  *
  * @param {Object} error
  * @private
  */
  ;

  EmpTech.prototype.triggerRecoverableTechError = function triggerRecoverableTechError(error, techName) {
    log$1('RecoverableTechError', techName, error);
    var category = error.category || '';
    var code = error.code || '';
    var msg = error.message || '';
    var message = 'Tech: ' + techName + '  Can\'t load video: error category: ' + category + ' code: ' + code + ' message: ' + msg;
    if (category !== 6 && code !== 6001) {
      //Hide DRM error for Safari with Shaka-Dash
      log$1.error(message);
    }
    this.trigger(empPlayerEvents.RECOVERABLE_ASSET_ERROR, { source: this.options_.source, techName: techName, message: message, code: error.code });
  };

  /**
    * Tracking Duration
    *
    */


  EmpTech.prototype.trackDuration = function trackDuration() {
    if (this.durationInterval) {
      this.stopTrackingDuration();
    }
    this.preDuration_ = 0;
    this.durationInterval = this.setInterval(function () {
      if (this.isReady_) {
        this.onDurationUpdate();
      }
    }, 1000);
  };

  /**
    * stop Tracking Duration
    *
    */


  EmpTech.prototype.stopTrackingDuration = function stopTrackingDuration() {
    if (this.durationInterval) {
      this.clearInterval(this.durationInterval);
      this.durationInterval = null;
      this.preDuration_ = 0;
    }
    this.trigger(empPlayerEvents.DURATION_CHANGE);
  };

  /**
  * Trigger durationchange event
  *
  */


  EmpTech.prototype.onDurationUpdate = function onDurationUpdate() {
    var duration = this.duration();
    if (this.preDuration_ !== duration) {
      //only trigger DURATION_CHANGE if change bigger than 1 sec.
      if (duration - this.preDuration_ >= 1.0 || duration - this.preDuration_ <= -1.0 || duration === 0) {
        this.preDuration_ = this.duration();
        this.trigger(empPlayerEvents.DURATION_CHANGE);
      }
    }
  };

  return EmpTech;
}();

var shakaPlayer_compiled = createCommonjsModule(function (module) {
(function(){var g={};
(function(window){var n,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value);},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof commonjsGlobal&&null!=commonjsGlobal?commonjsGlobal:this;function ca(){ca=function(){};ba.Symbol||(ba.Symbol=da);}var da=function(){var b=0;return function(c){return"jscomp_symbol_"+(c||"")+b++}}();
function ea(){ca();var b=ba.Symbol.iterator;b||(b=ba.Symbol.iterator=ba.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&aa(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return fa(this)}});ea=function(){};}function fa(b){var c=0;return ha(function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}})}function ha(b){ea();b={next:b};b[ba.Symbol.iterator]=function(){return this};return b}function ia(b){ea();var c=b[Symbol.iterator];return c?c.call(b):fa(b)}
function ja(b,c){if(c){for(var d=ba,e=b.split("."),f=0;f<e.length-1;f++){var g=e[f];g in d||(d[g]={});d=d[g];}e=e[e.length-1];f=d[e];g=c(f);g!=f&&null!=g&&aa(d,e,{configurable:!0,writable:!0,value:g});}}
ja("Promise",function(b){function c(b){this.b=0;this.g=void 0;this.a=[];var c=this.c();try{b(c.resolve,c.reject);}catch(l){c.reject(l);}}function d(){this.a=null;}function e(b){return b instanceof c?b:new c(function(c){c(b);})}if(b)return b;d.prototype.b=function(b){null==this.a&&(this.a=[],this.f());this.a.push(b);};d.prototype.f=function(){var b=this;this.c(function(){b.h();});};var f=ba.setTimeout;d.prototype.c=function(b){f(b,0);};d.prototype.h=function(){for(;this.a&&this.a.length;){var b=this.a;this.a=
[];for(var c=0;c<b.length;++c){var d=b[c];b[c]=null;try{d();}catch(m){this.g(m);}}}this.a=null;};d.prototype.g=function(b){this.c(function(){throw b;});};c.prototype.c=function(){function b(b){return function(e){d||(d=!0,b.call(c,e));}}var c=this,d=!1;return{resolve:b(this.m),reject:b(this.f)}};c.prototype.m=function(b){if(b===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof c)this.o(b);else{a:switch(typeof b){case "object":var d=null!=b;break a;case "function":d=!0;
break a;default:d=!1;}d?this.l(b):this.h(b);}};c.prototype.l=function(b){var c=void 0;try{c=b.then;}catch(l){this.f(l);return}"function"==typeof c?this.u(c,b):this.h(b);};c.prototype.f=function(b){this.i(2,b);};c.prototype.h=function(b){this.i(1,b);};c.prototype.i=function(b,c){if(0!=this.b)throw Error("Cannot settle("+b+", "+c+"): Promise already settled in state"+this.b);this.b=b;this.g=c;this.j();};c.prototype.j=function(){if(null!=this.a){for(var b=0;b<this.a.length;++b)g.b(this.a[b]);this.a=null;}};
var g=new d;c.prototype.o=function(b){var c=this.c();b.rb(c.resolve,c.reject);};c.prototype.u=function(b,c){var d=this.c();try{b.call(c,d.resolve,d.reject);}catch(m){d.reject(m);}};c.prototype.then=function(b,d){function e(b,c){return"function"==typeof b?function(c){try{f(b(c));}catch(Da){g(Da);}}:c}var f,g,h=new c(function(b,c){f=b;g=c;});this.rb(e(b,f),e(d,g));return h};c.prototype["catch"]=function(b){return this.then(void 0,b)};c.prototype.rb=function(b,c){function d(){switch(e.b){case 1:b(e.g);break;
case 2:c(e.g);break;default:throw Error("Unexpected state: "+e.b);}}var e=this;null==this.a?g.b(d):this.a.push(d);};c.resolve=e;c.reject=function(b){return new c(function(c,d){d(b);})};c.race=function(b){return new c(function(c,d){for(var f=ia(b),g=f.next();!g.done;g=f.next())e(g.value).rb(c,d);})};c.all=function(b){var d=ia(b),f=d.next();return f.done?e([]):new c(function(b,c){function g(c){return function(d){h[c]=d;k--;0==k&&b(h);}}var h=[],k=0;do h.push(void 0),k++,e(f.value).rb(g(h.length-1),c),f=
d.next();while(!f.done)})};return c});ja("Promise.prototype.finally",function(b){return b?b:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;})})}});function ka(b){function c(c){return b.next(c)}function d(c){return b["throw"](c)}return new Promise(function(e,f){function g(b){b.done?e(b.value):Promise.resolve(b.value).then(c,d).then(g,f);}g(b.next());})}
function la(){this.g=!1;this.b=null;this.Ea=void 0;this.H=1;this.c=this.f=0;this.i=this.a=null;}function ma(b){if(b.g)throw new TypeError("Generator is already running");b.g=!0;}la.prototype.h=function(b){this.Ea=b;};function na(b,c){b.a={oc:c,wc:!0};b.H=b.f||b.c;}la.prototype["return"]=function(b){this.a={"return":b};this.H=this.c;};function p(b,c,d){b.H=d;return{value:c}}la.prototype.X=function(b){this.H=b;};function oa(b,c){b.f=2;void 0!=c&&(b.c=c);}function pa(b){b.H=0;b.f=0;}
function qa(b){b.f=0;var c=b.a.oc;b.a=null;return c}function ra(b){b.i=[b.a];b.f=0;b.c=0;}function sa(b){var c=b.i.splice(0)[0];(c=b.a=b.a||c)?c.wc?b.H=b.f||b.c:void 0!=c.X&&b.c<c.X?(b.H=c.X,b.a=null):b.H=b.c:b.H=0;}function ta(b){this.a=new la;this.b=b;}function ua(b,c){ma(b.a);var d=b.a.b;if(d)return va(b,"return"in d?d["return"]:function(b){return{value:b,done:!0}},c,b.a["return"]);b.a["return"](c);return wa(b)}
function va(b,c,d,e){try{var f=c.call(b.a.b,d);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return b.a.g=!1,f;var g=f.value;}catch(h){return b.a.b=null,na(b.a,h),wa(b)}b.a.b=null;e.call(b.a,g);return wa(b)}
function wa(b){for(;b.a.H;)try{var c=b.b(b.a);if(c)return b.a.g=!1,{value:c.value,done:!1}}catch(d){b.a.Ea=void 0,na(b.a,d);}b.a.g=!1;if(b.a.a){c=b.a.a;b.a.a=null;if(c.wc)throw c.oc;return{value:c["return"],done:!0}}return{value:void 0,done:!0}}
function xa(b){this.next=function(c){ma(b.a);b.a.b?c=va(b,b.a.b.next,c,b.a.h):(b.a.h(c),c=wa(b));return c};this["throw"]=function(c){ma(b.a);b.a.b?c=va(b,b.a.b["throw"],c,b.a.h):(na(b.a,c),c=wa(b));return c};this["return"]=function(c){return ua(b,c)};ea();this[Symbol.iterator]=function(){return this};}function ya(b,c){xa.prototype=b.prototype;return new xa(new ta(c))}
ja("Array.prototype.find",function(b){return b?b:function(b,d){a:{var c=this;c instanceof String&&(c=String(c));for(var f=c.length,g=0;g<f;g++){var h=c[g];if(b.call(d,h,g,c)){c=h;break a}}c=void 0;}return c}});var za=this;za.a=!0;function q(b,c){var d=b.split("."),e=za;d[0]in e||!e.execScript||e.execScript("var "+d[0]);for(var f;d.length&&(f=d.shift());)d.length||void 0===c?e[f]?e=e[f]:e=e[f]={}:e[f]=c;}
function Aa(b,c){function d(){}d.prototype=c.prototype;b.gf=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.ef=function(b,d,g){return c.prototype[d].apply(b,Array.prototype.slice.call(arguments,2))};}/*

 Copyright 2016 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ba(b){this.c=Math.exp(Math.log(.5)/b);this.b=this.a=0;}function Ca(b,c,d){var e=Math.pow(b.c,c);d=d*(1-e)+e*b.a;isNaN(d)||(b.a=d,b.b+=c);}function Ea(b){return b.a/(1-Math.pow(b.c,b.b))}function Fa(){this.b=new Ba(2);this.c=new Ba(5);this.a=0;}Fa.prototype.getBandwidthEstimate=function(b){return 128E3>this.a?b:Math.min(Ea(this.b),Ea(this.c))};function Ga(){}function Ha(){}window.console&&window.console.log.bind&&(Ga=console.warn.bind(console));function u(b,c,d,e){this.severity=b;this.category=c;this.code=d;this.data=Array.prototype.slice.call(arguments,3);this.handled=!1;}q("shaka.util.Error",u);u.prototype.toString=function(){return"shaka.util.Error "+JSON.stringify(this,null,"  ")};u.Severity={RECOVERABLE:1,CRITICAL:2};u.Category={NETWORK:1,TEXT:2,MEDIA:3,MANIFEST:4,STREAMING:5,DRM:6,PLAYER:7,CAST:8,STORAGE:9};
u.Code={UNSUPPORTED_SCHEME:1E3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,UNKNOWN_DATA_URI_ENCODING:1005,REQUEST_FILTER_ERROR:1006,RESPONSE_FILTER_ERROR:1007,MALFORMED_TEST_URI:1008,UNEXPECTED_TEST_REQUEST:1009,INVALID_TEXT_HEADER:2E3,INVALID_TEXT_CUE:2001,UNABLE_TO_DETECT_ENCODING:2003,BAD_ENCODING:2004,INVALID_XML:2005,INVALID_MP4_TTML:2007,INVALID_MP4_VTT:2008,UNABLE_TO_EXTRACT_CUE_START_TIME:2009,BUFFER_READ_OUT_OF_BOUNDS:3E3,JS_INTEGER_OVERFLOW:3001,EBML_OVERFLOW:3002,
EBML_BAD_FLOATING_POINT_SIZE:3003,MP4_SIDX_WRONG_BOX_TYPE:3004,MP4_SIDX_INVALID_TIMESCALE:3005,MP4_SIDX_TYPE_NOT_SUPPORTED:3006,WEBM_CUES_ELEMENT_MISSING:3007,WEBM_EBML_HEADER_ELEMENT_MISSING:3008,WEBM_SEGMENT_ELEMENT_MISSING:3009,WEBM_INFO_ELEMENT_MISSING:3010,WEBM_DURATION_ELEMENT_MISSING:3011,WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:3012,WEBM_CUE_TIME_ELEMENT_MISSING:3013,MEDIA_SOURCE_OPERATION_FAILED:3014,MEDIA_SOURCE_OPERATION_THREW:3015,VIDEO_ERROR:3016,QUOTA_EXCEEDED_ERROR:3017,UNABLE_TO_GUESS_MANIFEST_TYPE:4E3,
DASH_INVALID_XML:4001,DASH_NO_SEGMENT_INFO:4002,DASH_EMPTY_ADAPTATION_SET:4003,DASH_EMPTY_PERIOD:4004,DASH_WEBM_MISSING_INIT:4005,DASH_UNSUPPORTED_CONTAINER:4006,DASH_PSSH_BAD_ENCODING:4007,DASH_NO_COMMON_KEY_SYSTEM:4008,DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:4009,DASH_CONFLICTING_KEY_IDS:4010,UNPLAYABLE_PERIOD:4011,RESTRICTIONS_CANNOT_BE_MET:4012,NO_PERIODS:4014,HLS_PLAYLIST_HEADER_MISSING:4015,INVALID_HLS_TAG:4016,HLS_INVALID_PLAYLIST_HIERARCHY:4017,DASH_DUPLICATE_REPRESENTATION_ID:4018,HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:4020,
HLS_COULD_NOT_GUESS_MIME_TYPE:4021,HLS_MASTER_PLAYLIST_NOT_PROVIDED:4022,HLS_REQUIRED_ATTRIBUTE_MISSING:4023,HLS_REQUIRED_TAG_MISSING:4024,HLS_COULD_NOT_GUESS_CODECS:4025,HLS_KEYFORMATS_NOT_SUPPORTED:4026,DASH_UNSUPPORTED_XLINK_ACTUATE:4027,DASH_XLINK_DEPTH_LIMIT:4028,HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:4030,CONTENT_UNSUPPORTED_BY_BROWSER:4032,INVALID_STREAMS_CHOSEN:5005,NO_RECOGNIZED_KEY_SYSTEMS:6E3,REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:6001,FAILED_TO_CREATE_CDM:6002,FAILED_TO_ATTACH_TO_VIDEO:6003,
INVALID_SERVER_CERTIFICATE:6004,FAILED_TO_CREATE_SESSION:6005,FAILED_TO_GENERATE_LICENSE_REQUEST:6006,LICENSE_REQUEST_FAILED:6007,LICENSE_RESPONSE_REJECTED:6008,ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:6010,NO_LICENSE_SERVER_GIVEN:6012,OFFLINE_SESSION_REMOVED:6013,EXPIRED:6014,LOAD_INTERRUPTED:7E3,OPERATION_ABORTED:7001,NO_VIDEO_ELEMENT:7002,CAST_API_UNAVAILABLE:8E3,NO_CAST_RECEIVERS:8001,ALREADY_CASTING:8002,UNEXPECTED_CAST_ERROR:8003,CAST_CANCELED_BY_USER:8004,CAST_CONNECTION_TIMED_OUT:8005,CAST_RECEIVER_APP_UNAVAILABLE:8006,
STORAGE_NOT_SUPPORTED:9E3,INDEXED_DB_ERROR:9001,DEPRECATED_OPERATION_ABORTED:9002,REQUESTED_ITEM_NOT_FOUND:9003,MALFORMED_OFFLINE_URI:9004,CANNOT_STORE_LIVE_OFFLINE:9005,STORE_ALREADY_IN_PROGRESS:9006,NO_INIT_DATA_FOR_OFFLINE:9007,LOCAL_PLAYER_INSTANCE_REQUIRED:9008,UNSUPPORTED_UPGRADE_REQUEST:9010,NEW_KEY_OPERATION_NOT_SUPPORTED:9011,KEY_NOT_FOUND:9012,MISSING_STORAGE_CELL:9013};var Ia=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ja(b){var c;b instanceof Ja?(Ka(this,b.ea),this.Da=b.Da,this.ha=b.ha,La(this,b.Oa),this.Y=b.Y,Ma(this,Na(b.a)),this.wa=b.wa):b&&(c=String(b).match(Ia))?(Ka(this,c[1]||"",!0),this.Da=Oa(c[2]||""),this.ha=Oa(c[3]||"",!0),La(this,c[4]),this.Y=Oa(c[5]||"",!0),Ma(this,c[6]||"",!0),this.wa=Oa(c[7]||"")):this.a=new Pa(null);}n=Ja.prototype;n.ea="";n.Da="";n.ha="";n.Oa=null;n.Y="";n.wa="";
n.toString=function(){var b=[],c=this.ea;c&&b.push(Qa(c,Sa,!0),":");if(c=this.ha){b.push("//");var d=this.Da;d&&b.push(Qa(d,Sa,!0),"@");b.push(encodeURIComponent(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));c=this.Oa;null!=c&&b.push(":",String(c));}if(c=this.Y)this.ha&&"/"!=c.charAt(0)&&b.push("/"),b.push(Qa(c,"/"==c.charAt(0)?Ta:Ua,!0));(c=this.a.toString())&&b.push("?",c);(c=this.wa)&&b.push("#",Qa(c,Va));return b.join("")};
n.resolve=function(b){var c=new Ja(this);"data"===c.ea&&(c=new Ja);var d=!!b.ea;d?Ka(c,b.ea):d=!!b.Da;d?c.Da=b.Da:d=!!b.ha;d?c.ha=b.ha:d=null!=b.Oa;var e=b.Y;if(d)La(c,b.Oa);else if(d=!!b.Y){if("/"!=e.charAt(0))if(this.ha&&!this.Y)e="/"+e;else{var f=c.Y.lastIndexOf("/");-1!=f&&(e=c.Y.substr(0,f+1)+e);}if(".."==e||"."==e)e="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){f=0==e.lastIndexOf("/",0);e=e.split("/");for(var g=[],h=0;h<e.length;){var k=e[h++];"."==k?f&&h==e.length&&g.push(""):".."==k?
((1<g.length||1==g.length&&""!=g[0])&&g.pop(),f&&h==e.length&&g.push("")):(g.push(k),f=!0);}e=g.join("/");}}d?c.Y=e:d=""!==b.a.toString();d?Ma(c,Na(b.a)):d=!!b.wa;d&&(c.wa=b.wa);return c};function Ka(b,c,d){b.ea=d?Oa(c,!0):c;b.ea&&(b.ea=b.ea.replace(/:$/,""));}function La(b,c){if(c){c=Number(c);if(isNaN(c)||0>c)throw Error("Bad port number "+c);b.Oa=c;}else b.Oa=null;}function Ma(b,c,d){c instanceof Pa?b.a=c:(d||(c=Qa(c,Wa)),b.a=new Pa(c));}
function Oa(b,c){return b?c?decodeURI(b):decodeURIComponent(b):""}function Qa(b,c,d){return"string"==typeof b?(b=encodeURI(b).replace(c,Xa),d&&(b=b.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b):null}function Xa(b){b=b.charCodeAt(0);return"%"+(b>>4&15).toString(16)+(b&15).toString(16)}var Sa=/[#\/\?@]/g,Ua=/[#\?:]/g,Ta=/[#\?]/g,Wa=/[#\?@]/g,Va=/#/g;function Pa(b){this.b=b||null;}Pa.prototype.a=null;Pa.prototype.c=null;
Pa.prototype.add=function(b,c){if(!this.a&&(this.a={},this.c=0,this.b))for(var d=this.b.split("&"),e=0;e<d.length;e++){var f=d[e].indexOf("="),g=null;if(0<=f){var h=d[e].substring(0,f);g=d[e].substring(f+1);}else h=d[e];h=decodeURIComponent(h.replace(/\+/g," "));g=g||"";this.add(h,decodeURIComponent(g.replace(/\+/g," ")));}this.b=null;(d=this.a.hasOwnProperty(b)&&this.a[b])||(this.a[b]=d=[]);d.push(c);this.c++;return this};
Pa.prototype.toString=function(){if(this.b)return this.b;if(!this.a)return"";var b=[],c;for(c in this.a)for(var d=encodeURIComponent(c),e=this.a[c],f=0;f<e.length;f++){var g=d;""!==e[f]&&(g+="="+encodeURIComponent(e[f]));b.push(g);}return this.b=b.join("&")};function Na(b){var c=new Pa;c.b=b.b;if(b.a){var d={},e;for(e in b.a)d[e]=b.a[e].concat();c.a=d;c.c=b.c;}return c}function y(){var b,c,d=new Promise(function(d,f){b=d;c=f;});d.resolve=b;d.reject=c;return d}y.prototype.resolve=function(){};y.prototype.reject=function(){};function Ya(b,c){var d=Za();this.i=null==b.maxAttempts?d.maxAttempts:b.maxAttempts;this.f=null==b.baseDelay?d.baseDelay:b.baseDelay;this.h=null==b.fuzzFactor?d.fuzzFactor:b.fuzzFactor;this.g=null==b.backoffFactor?d.backoffFactor:b.backoffFactor;this.a=0;this.b=this.f;if(this.c=c||!1)this.a=1;}function $a(b){if(b.a>=b.i)if(b.c)b.a=1,b.b=b.f;else return Promise.reject();var c=new y;b.a?(window.setTimeout(c.resolve,b.b*(1+(2*Math.random()-1)*b.h)),b.b*=b.g):c.resolve();b.a++;return c}
function Za(){return{maxAttempts:2,baseDelay:1E3,backoffFactor:2,fuzzFactor:.5,timeout:0}}function z(b,c){this.promise=b;this.b=c;this.a=!1;}q("shaka.util.AbortableOperation",z);function ab(b){return new z(Promise.reject(b),function(){return Promise.resolve()})}z.failed=ab;function bb(){var b=Promise.reject(new u(2,7,7001));b["catch"](function(){});return new z(b,function(){return Promise.resolve()})}z.aborted=bb;function cb(b){return new z(Promise.resolve(b),function(){return Promise.resolve()})}z.completed=cb;
function db(b){return new z(b,function(){return b["catch"](function(){})})}z.notAbortable=db;z.prototype.abort=function(){this.a=!0;return this.b()};z.prototype.abort=z.prototype.abort;function eb(b){return new z(Promise.all(b.map(function(b){return b.promise})),function(){return Promise.all(b.map(function(b){return b.abort()}))})}z.all=eb;z.prototype["finally"]=function(b){this.promise.then(function(){return b(!0)},function(){return b(!1)});return this};z.prototype["finally"]=z.prototype["finally"];
z.prototype.T=function(b,c){function d(){f.reject(new u(2,7,7001));return e.abort()}var e=this,f=new y;this.promise.then(function(c){e.a?f.reject(new u(2,7,7001)):b?d=fb(b,c,f):f.resolve(c);},function(b){c?d=fb(c,b,f):f.reject(b);});return new z(f,function(){return d()})};z.prototype.chain=z.prototype.T;
function fb(b,c,d){try{var e=b(c);if(e&&e.promise&&e.abort)return d.resolve(e.promise),function(){return e.abort()};d.resolve(e);return function(){return Promise.resolve(e).then(function(){})["catch"](function(){})}}catch(f){return d.reject(f),function(){return Promise.resolve()}}}function gb(b,c){for(var d=[],e=0;e<b.length;++e){for(var f=!1,g=0;g<d.length&&!(f=c?c(b[e],d[g]):b[e]===d[g]);++g);f||d.push(b[e]);}return d}function hb(b,c,d){for(var e=0;e<b.length;++e)if(d(b[e],c))return e;return-1}function ib(b,c){var d=b.indexOf(c);-1<d&&b.splice(d,1);}function lb(b,c){var d=0;b.forEach(function(b){d+=c(b)?1:0;});return d}function mb(b,c,d,e,f){var g=f in e,h=!0,k;for(k in c){var l=f+"."+k,m=g?e[f]:d[k];g||k in b?void 0===c[k]?void 0===m||g?delete b[k]:b[k]=m:m.constructor==Object&&c[k]&&c[k].constructor==Object?(b[k]||(b[k]=m),h=h&&mb(b[k],c[k],m,e,l)):typeof c[k]!=typeof m||null==c[k]||c[k].constructor!=m.constructor?h=!1:b[k]=c[k]:h=!1;}return h}
function nb(b){function c(b){switch(typeof b){case "undefined":case "boolean":case "number":case "string":case "symbol":case "function":return b;default:if(!b)return b;if(0<=d.indexOf(b))return null;var e=b.constructor==Array;if(b.constructor!=Object&&!e)return null;d.push(b);var g=e?[]:{},h;for(h in b)g[h]=c(b[h]);e&&(g.length=b.length);return g}}var d=[];return c(b)}function ob(b,c){var d=c();return Promise.resolve(d).then(function(c){return b.destroy().then(function(){return c})},function(c){return b.destroy().then(function(){throw c;})})}function pb(){this.a=[];}function qb(b,c){b.a.push(c["finally"](function(){ib(b.a,c);}));}pb.prototype.destroy=function(){var b=[];this.a.forEach(function(c){c.promise["catch"](function(){});b.push(c.abort());});this.a=[];return Promise.all(b)};function A(b){this.c=!1;this.g=new pb;this.a=[];this.b=[];this.f=b||null;}q("shaka.net.NetworkingEngine",A);A.RequestType={MANIFEST:0,SEGMENT:1,LICENSE:2,APP:3};A.PluginPriority={FALLBACK:1,PREFERRED:2,APPLICATION:3};var rb={};function sb(b,c,d){d=d||3;var e=rb[b];if(!e||d>=e.priority)rb[b]={priority:d,me:c};}A.registerScheme=sb;A.unregisterScheme=function(b){delete rb[b];};A.prototype.pe=function(b){this.a.push(b);};A.prototype.registerRequestFilter=A.prototype.pe;
A.prototype.Ve=function(b){ib(this.a,b);};A.prototype.unregisterRequestFilter=A.prototype.Ve;A.prototype.fd=function(){this.a=[];};A.prototype.clearAllRequestFilters=A.prototype.fd;A.prototype.qe=function(b){this.b.push(b);};A.prototype.registerResponseFilter=A.prototype.qe;A.prototype.We=function(b){ib(this.b,b);};A.prototype.unregisterResponseFilter=A.prototype.We;A.prototype.gd=function(){this.b=[];};A.prototype.clearAllResponseFilters=A.prototype.gd;
function B(b,c){return{uris:b,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:c}}A.prototype.destroy=function(){this.c=!0;this.a=[];this.b=[];return this.g.destroy()};A.prototype.destroy=A.prototype.destroy;
function tb(b){b.then=function(c,d){Ga("The network request interface has changed!  Please update your application to the new interface, which allows operations to be aborted.  Support for the old API will be removed in v2.5.");return b.promise.then(c,d)};b["catch"]=function(c){Ga("The network request interface has changed!  Please update your application to the new interface, which allows operations to be aborted.  Support for the old API will be removed in v2.5.");return b.promise["catch"](c)};
return b}
A.prototype.request=function(b,c){var d=this;if(this.c)return tb(bb());c.method=c.method||"GET";c.headers=c.headers||{};c.retryParameters=c.retryParameters?nb(c.retryParameters):Za();c.uris=nb(c.uris);var e=ub(this,b,c),f=e.T(function(){return vb(d,b,c,new Ya(c.retryParameters,!1),0,null)}),g=f.T(function(c){return wb(d,b,c)}),h=Date.now(),k=0;e.promise.then(function(){k=Date.now()-h;},function(){});var l=0;f.promise.then(function(){l=Date.now();},function(){});e=g.T(function(c){var e=Date.now()-l;
c.timeMs+=k;c.timeMs+=e;d.f&&!c.fromCache&&1==b&&d.f(c.timeMs,c.data.byteLength);return c},function(b){b&&(b.severity=2);throw b;});qb(this.g,e);return tb(e)};A.prototype.request=A.prototype.request;function ub(b,c,d){var e=cb(void 0);b.a.forEach(function(b){e=e.T(function(){return b(c,d)});});return e.T(void 0,function(b){if(b&&7001==b.code)throw b;throw new u(2,1,1006,b);})}
function vb(b,c,d,e,f,g){var h=new Ja(d.uris[f]),k=h.ea;k||(k=location.protocol,k=k.slice(0,-1),Ka(h,k),d.uris[f]=h.toString());var l=(k=rb[k])?k.me:null;if(!l)return ab(new u(2,1,1E3,h));var m;return db($a(e)).T(function(){if(b.c)return bb();m=Date.now();var e=l(d.uris[f],d,c);void 0==e.promise&&(Ga("The scheme plugin interface has changed!  Please update your scheme plugins to the new interface to add support for abort().  Support for the old plugin interface will be removed in v2.5."),e=db(e));
return e}).T(function(b){void 0==b.timeMs&&(b.timeMs=Date.now()-m);return b},function(h){if(h&&7001==h.code)throw h;if(b.c)return bb();if(h&&1==h.severity)return f=(f+1)%d.uris.length,vb(b,c,d,e,f,h);throw h||g;})}function wb(b,c,d){var e=cb(void 0);b.b.forEach(function(b){e=e.T(function(){return b(c,d)});});return e.T(function(){return d},function(b){if(b&&7001==b.code)throw b;var c=2;b instanceof u&&(c=b.severity);throw new u(c,1,1007,b);})}function xb(){this.a={};}xb.prototype.push=function(b,c){this.a.hasOwnProperty(b)?this.a[b].push(c):this.a[b]=[c];};xb.prototype.get=function(b){return(b=this.a[b])?b.slice():null};xb.prototype.remove=function(b,c){var d=this.a[b];if(d)for(var e=0;e<d.length;++e)d[e]==c&&(d.splice(e,1),--e);};function C(){this.a=new xb;}C.prototype.destroy=function(){yb(this);this.a=null;return Promise.resolve()};function D(b,c,d,e){b.a&&(c=new zb(c,d,e),b.a.push(d,c));}function Ab(b,c,d,e){D(b,c,d,function(b){this.ka(c,d);e(b);}.bind(b));}C.prototype.ka=function(b,c){if(this.a)for(var d=this.a.get(c)||[],e=0;e<d.length;++e){var f=d[e];f.target==b&&(f.ka(),this.a.remove(c,f));}};function yb(b){if(b.a){var c=b.a,d=[],e;for(e in c.a)d.push.apply(d,c.a[e]);for(c=0;c<d.length;++c)d[c].ka();b.a.a={};}}
function zb(b,c,d){this.target=b;this.type=c;this.a=d;this.target.addEventListener(c,d,!1);}zb.prototype.ka=function(){this.target.removeEventListener(this.type,this.a,!1);this.a=this.target=null;};function E(b,c){var d=c||{},e;for(e in d)this[e]=d[e];this.defaultPrevented=this.cancelable=this.bubbles=!1;this.timeStamp=window.performance&&window.performance.now?window.performance.now():Date.now();this.type=b;this.isTrusted=!1;this.target=this.currentTarget=null;this.a=!1;}E.prototype.preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0);};E.prototype.stopImmediatePropagation=function(){this.a=!0;};E.prototype.stopPropagation=function(){};function Bb(b,c){return b.reduce(function(b,c,f){return c["catch"](b.bind(null,f))}.bind(null,c),Promise.reject())}function Cb(b,c){return b.concat(c)}function Db(){}function Eb(b){return null!=b}function Fb(b,c,d){return d.indexOf(b)==c}function F(b,c){if(0==c.length)return b;var d=c.map(function(b){return new Ja(b)});return b.map(function(b){return new Ja(b)}).map(function(b){return d.map(b.resolve.bind(b))}).reduce(Cb,[]).map(function(b){return b.toString()})}function Gb(b,c){return{keySystem:b,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:c||[],keyIds:[]}}var Hb=1/15;function Ib(b){return!b||0==Object.keys(b).length}function Jb(b){return Object.keys(b).map(function(c){return b[c]})}function Kb(b,c){return Object.keys(b).every(function(d){return c(d,b[d])})}function Lb(b,c){Object.keys(b).forEach(function(d){c(d,b[d]);});}function Mb(b,c){var d=b;c&&(d+='; codecs="'+c+'"');return d}var Nb={codecs:"codecs",frameRate:"framerate",bandwidth:"bitrate",width:"width",height:"height",channelsCount:"channels"};function G(b){if(!b)return"";b=new Uint8Array(b);239==b[0]&&187==b[1]&&191==b[2]&&(b=b.subarray(3));b=escape(Ob(b));try{return decodeURIComponent(b)}catch(c){throw new u(2,2,2004);}}q("shaka.util.StringUtils.fromUTF8",G);
function Pb(b,c,d){if(!b)return"";if(!d&&0!=b.byteLength%2)throw new u(2,2,2004);if(b instanceof ArrayBuffer)var e=b;else d=new Uint8Array(b.byteLength),d.set(new Uint8Array(b)),e=d.buffer;b=Math.floor(b.byteLength/2);d=new Uint16Array(b);e=new DataView(e);for(var f=0;f<b;f++)d[f]=e.getUint16(2*f,c);return Ob(d)}q("shaka.util.StringUtils.fromUTF16",Pb);
function Qb(b){var c=new Uint8Array(b);if(239==c[0]&&187==c[1]&&191==c[2])return G(c);if(254==c[0]&&255==c[1])return Pb(c.subarray(2),!1);if(255==c[0]&&254==c[1])return Pb(c.subarray(2),!0);var d=function(b,c){return b.byteLength<=c||32<=b[c]&&126>=b[c]}.bind(null,c);if(0==c[0]&&0==c[2])return Pb(b,!1);if(0==c[1]&&0==c[3])return Pb(b,!0);if(d(0)&&d(1)&&d(2)&&d(3))return G(b);throw new u(2,2,2003);}q("shaka.util.StringUtils.fromBytesAutoDetect",Qb);
function Rb(b){b=encodeURIComponent(b);b=unescape(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c.buffer}q("shaka.util.StringUtils.toUTF8",Rb);function Ob(b){for(var c="",d=0;d<b.length;d+=16E3)c+=String.fromCharCode.apply(null,b.subarray(d,d+16E3));return c}function Sb(b){this.a=null;this.b=function(){this.a=null;b();}.bind(this);}Sb.prototype.cancel=function(){null!=this.a&&(clearTimeout(this.a),this.a=null);};function Tb(b){b.cancel();b.a=setTimeout(b.b,500);}function Ub(b,c){b.cancel();var d=function(){this.b();this.a=setTimeout(d,1E3*c);}.bind(b);b.a=setTimeout(d,1E3*c);}function Vb(b,c){var d=void 0==c?!0:c,e=window.btoa(Ob(b)).replace(/\+/g,"-").replace(/\//g,"_");return d?e:e.replace(/=*$/,"")}q("shaka.util.Uint8ArrayUtils.toBase64",Vb);function Wb(b){b=window.atob(b.replace(/-/g,"+").replace(/_/g,"/"));for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c}q("shaka.util.Uint8ArrayUtils.fromBase64",Wb);function Xb(b){for(var c=new Uint8Array(b.length/2),d=0;d<b.length;d+=2)c[d/2]=window.parseInt(b.substr(d,2),16);return c}
q("shaka.util.Uint8ArrayUtils.fromHex",Xb);function Yb(b){for(var c="",d=0;d<b.length;++d){var e=b[d].toString(16);1==e.length&&(e="0"+e);c+=e;}return c}q("shaka.util.Uint8ArrayUtils.toHex",Yb);function Zb(b,c){if(!b&&!c)return!0;if(!b||!c||b.length!=c.length)return!1;for(var d=0;d<b.length;++d)if(b[d]!=c[d])return!1;return!0}q("shaka.util.Uint8ArrayUtils.equal",Zb);
function $b(b){for(var c=0,d=0;d<arguments.length;++d)c+=arguments[d].length;c=new Uint8Array(c);for(var e=d=0;e<arguments.length;++e)c.set(arguments[e],d),d+=arguments[e].length;return c}q("shaka.util.Uint8ArrayUtils.concat",$b);function ac(b){this.o=b;this.l=this.j=this.u=null;this.L=!1;this.b=null;this.g=new C;this.a=[];this.m=[];this.i=new y;this.f=null;this.h=function(c){this.i.reject(c);b.onError(c);}.bind(this);this.A={};this.G=new Sb(this.oe.bind(this));this.ba=this.c=!1;this.K=[];this.R=!1;this.v=new Sb(this.ne.bind(this));Ub(this.v,1);this.i["catch"](function(){});}n=ac.prototype;
n.destroy=function(){this.c=!0;var b=[];this.a.forEach(function(c){c=c.fa.close()["catch"](Db);var d=new Promise(function(b){setTimeout(b,1E3);});b.push(Promise.race([c,d]));});this.i.reject();this.g&&b.push(this.g.destroy());this.l&&b.push(this.l.setMediaKeys(null)["catch"](Db));this.v&&(this.v.cancel(),this.v=null);this.G&&(this.G.cancel(),this.G=null);this.g=this.l=this.j=this.u=this.b=null;this.a=[];this.m=[];this.o=this.h=this.f=null;return Promise.all(b)};n.configure=function(b){this.f=b;};
n.init=function(b,c){var d={},e=[];this.ba=c;this.m=b.offlineSessionIds;bc(this,b,c||0<b.offlineSessionIds.length,d,e);return e.length?cc(this,d,e):(this.L=!0,Promise.resolve())};
n.qb=function(b){if(!this.j)return Ab(this.g,b,"encrypted",function(){this.h(new u(2,6,6010));}.bind(this)),Promise.resolve();this.l=b;Ab(this.g,this.l,"play",this.Td.bind(this));b=this.l.setMediaKeys(this.j);b=b["catch"](function(b){return Promise.reject(new u(2,6,6003,b.message))});var c=null;this.b.serverCertificate&&this.b.serverCertificate.length&&(c=this.j.setServerCertificate(this.b.serverCertificate).then(function(){})["catch"](function(b){return Promise.reject(new u(2,6,6004,b.message))}));
return Promise.all([b,c]).then(function(){if(this.c)return Promise.reject();dc(this);this.b.initData.length||this.m.length||D(this.g,this.l,"encrypted",this.Id.bind(this));}.bind(this))["catch"](function(b){return this.c?Promise.resolve():Promise.reject(b)}.bind(this))};
function ec(b,c){return Promise.all(c.map(function(b){return fc(this,b).then(function(b){if(b){for(var c=new y,d=0;d<this.a.length;d++)if(this.a[d].fa==b){this.a[d].la=c;break}return Promise.all([b.remove(),c])}}.bind(this))}.bind(b)))}function dc(b){var c=b.b?b.b.initData:[];c.forEach(function(b){gc(this,b.initDataType,b.initData);}.bind(b));b.m.forEach(function(b){fc(this,b);}.bind(b));c.length||b.m.length||b.i.resolve();return b.i}n.keySystem=function(){return this.b?this.b.keySystem:""};
function hc(b){return b.a.map(function(b){return b.fa.sessionId})}n.ub=function(){var b=this.a.map(function(b){b=b.fa.expiration;return isNaN(b)?Infinity:b});return Math.min.apply(Math,b)};
function bc(b,c,d,e,f){var g=ic(b),h=jc(b,c);c.periods.forEach(function(b){b.variants.forEach(function(b){g&&(b.drmInfos=[g]);h&&(b.drmInfos=h);b.drmInfos.forEach(function(c){kc(this,c);var g=e[c.keySystem];g||(g={audioCapabilities:[],videoCapabilities:[],distinctiveIdentifier:"optional",persistentState:d?"required":"optional",sessionTypes:[d?"persistent-license":"temporary"],label:c.keySystem,drmInfos:[]},e[c.keySystem]=g,f.push(c.keySystem));g.drmInfos.push(c);c.distinctiveIdentifierRequired&&(g.distinctiveIdentifier=
"required");c.persistentStateRequired&&(g.persistentState="required");var h=[];b.video&&h.push(b.video);b.audio&&h.push(b.audio);h.forEach(function(b){("video"==b.type?g.videoCapabilities:g.audioCapabilities).push({robustness:("video"==b.type?c.videoRobustness:c.audioRobustness)||"",contentType:Mb(b.mimeType,b.codecs)});}.bind(this));}.bind(this));}.bind(this));}.bind(b));}
function cc(b,c,d){if(1==d.length&&""==d[0])return Promise.reject(new u(2,6,6E3));var e=new y,f=e;[!0,!1].forEach(function(b){d.forEach(function(d){var e=c[d];e.drmInfos.some(function(b){return!!b.licenseServerUri})==b&&(0==e.audioCapabilities.length&&delete e.audioCapabilities,0==e.videoCapabilities.length&&delete e.videoCapabilities,f=f["catch"](function(){return this.c?Promise.reject():navigator.requestMediaKeySystemAccess(d,[e])}.bind(this)));}.bind(this));}.bind(b));f=f["catch"](function(){return Promise.reject(new u(2,
6,6001))});f=f.then(function(b){if(this.c)return Promise.reject();var d=0<=navigator.userAgent.indexOf("Edge/"),e=b.getConfiguration();this.u=(e.audioCapabilities||[]).concat(e.videoCapabilities||[]).map(function(b){return b.contentType});d&&(this.u=null);d=c[b.keySystem];lc(this,b.keySystem,d,d.drmInfos);return this.b.licenseServerUri?b.createMediaKeys():Promise.reject(new u(2,6,6012))}.bind(b)).then(function(b){if(this.c)return Promise.reject();this.j=b;this.L=!0;}.bind(b))["catch"](function(b){if(this.c)return Promise.resolve();
this.u=this.b=null;return b instanceof u?Promise.reject(b):Promise.reject(new u(2,6,6002,b.message))}.bind(b));e.reject();return f}
function kc(b,c){var d=c.keySystem;if(d){if(!c.licenseServerUri){var e=b.f.servers[d];e&&(c.licenseServerUri=e);}c.keyIds||(c.keyIds=[]);if(d=b.f.advanced[d])c.distinctiveIdentifierRequired||(c.distinctiveIdentifierRequired=d.distinctiveIdentifierRequired),c.persistentStateRequired||(c.persistentStateRequired=d.persistentStateRequired),c.videoRobustness||(c.videoRobustness=d.videoRobustness),c.audioRobustness||(c.audioRobustness=d.audioRobustness),c.serverCertificate||(c.serverCertificate=d.serverCertificate);}}
function ic(b){if(Ib(b.f.clearKeys))return null;var c=[],d=[],e;for(e in b.f.clearKeys){var f=b.f.clearKeys[e],g=Xb(e);f=Xb(f);g={kty:"oct",kid:Vb(g,!1),k:Vb(f,!1)};c.push(g);d.push(g.kid);}b=JSON.stringify({keys:c});d=JSON.stringify({kids:d});d=[{initData:new Uint8Array(Rb(d)),initDataType:"keyids"}];return{keySystem:"org.w3.clearkey",licenseServerUri:"data:application/json;base64,"+window.btoa(b),distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,
initData:d,keyIds:[]}}function jc(b,c){var d=b.f,e=Object.keys(d.servers);return!e.length||c.periods.some(function(b){return b.variants.some(function(b){return b.drmInfos.length})})?null:e.map(function(b){return{keySystem:b,licenseServerUri:d.servers[b],distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:[],keyIds:[]}})}
function lc(b,c,d,e){var f=[],g=[],h=[],k=[];mc(e,f,g,h,k);b.b={keySystem:c,licenseServerUri:f[0],distinctiveIdentifierRequired:"required"==d.distinctiveIdentifier,persistentStateRequired:"required"==d.persistentState,audioRobustness:d.audioCapabilities?d.audioCapabilities[0].robustness:"",videoRobustness:d.videoCapabilities?d.videoCapabilities[0].robustness:"",serverCertificate:g[0],initData:h,keyIds:k};}
function mc(b,c,d,e,f){function g(b,c){return b.keyId&&b.keyId==c.keyId?!0:b.initDataType==c.initDataType&&Zb(b.initData,c.initData)}b.forEach(function(b){-1==c.indexOf(b.licenseServerUri)&&c.push(b.licenseServerUri);b.serverCertificate&&-1==hb(d,b.serverCertificate,Zb)&&d.push(b.serverCertificate);b.initData&&b.initData.forEach(function(b){-1==hb(e,b,g)&&e.push(b);});if(b.keyIds)for(var h=0;h<b.keyIds.length;++h)-1==f.indexOf(b.keyIds[h])&&f.push(b.keyIds[h]);});}
n.Id=function(b){for(var c=new Uint8Array(b.initData),d=0;d<this.a.length;++d)if(Zb(c,this.a[d].initData))return;gc(this,b.initDataType,c);};
function fc(b,c){try{var d=b.j.createSession("persistent-license");}catch(g){var e=new u(2,6,6005,g.message);b.h(e);return Promise.reject(e)}D(b.g,d,"message",b.Gc.bind(b));D(b.g,d,"keystatuseschange",b.Cc.bind(b));var f={initData:null,fa:d,loaded:!1,Rb:Infinity,la:null};b.a.push(f);return d.load(c).then(function(b){if(!this.c){if(b)return f.loaded=!0,this.a.every(function(b){return b.loaded})&&this.i.resolve(),d;this.a.splice(this.a.indexOf(f),1);this.h(new u(2,6,6013));}}.bind(b),function(b){this.c||
(this.a.splice(this.a.indexOf(f),1),this.h(new u(2,6,6005,b.message)));}.bind(b))}
function gc(b,c,d){try{var e=b.ba?b.j.createSession("persistent-license"):b.j.createSession();}catch(f){b.h(new u(2,6,6005,f.message));return}D(b.g,e,"message",b.Gc.bind(b));D(b.g,e,"keystatuseschange",b.Cc.bind(b));b.a.push({initData:d,fa:e,loaded:!1,Rb:Infinity,la:null});e.generateRequest(c,d.buffer)["catch"](function(b){if(!this.c){for(var c=0;c<this.a.length;++c)if(this.a[c].fa==e){this.a.splice(c,1);break}this.h(new u(2,6,6006,b.message));}}.bind(b));}
n.Gc=function(b){this.f.delayLicenseRequestUntilPlayed&&this.l.paused&&!this.R?this.K.push(b):nc(this,b);};
function nc(b,c){for(var d=c.target,e,f=0;f<b.a.length;f++)if(b.a[f].fa==d){e=b.a[f];break}f=B([b.b.licenseServerUri],b.f.retryParameters);f.body=c.message;f.method="POST";"com.microsoft.playready"!=b.b.keySystem&&"com.chromecast.playready"!=b.b.keySystem||oc(f);b.o.Xa.request(2,f).promise.then(function(b){return this.c?Promise.reject():d.update(b.data).then(function(){this.o.onEvent(new E("drmsessionupdate"));e&&(e.la&&e.la.resolve(),setTimeout(function(){e.loaded=!0;this.a.every(function(b){return b.loaded})&&
this.i.resolve();}.bind(this),5E3));}.bind(this))}.bind(b),function(b){if(this.c)return Promise.resolve();b=new u(2,6,6007,b);this.h(b);e&&e.la&&e.la.reject(b);}.bind(b))["catch"](function(b){if(this.c)return Promise.resolve();b=new u(2,6,6008,b.message);this.h(b);e&&e.la&&e.la.reject(b);}.bind(b));}
function oc(b){var c=Pb(b.body,!0,!0);if(-1==c.indexOf("PlayReadyKeyMessage"))b.headers["Content-Type"]="text/xml; charset=utf-8";else{c=(new DOMParser).parseFromString(c,"application/xml");for(var d=c.getElementsByTagName("HttpHeader"),e=0;e<d.length;++e)b.headers[d[e].querySelector("name").textContent]=d[e].querySelector("value").textContent;b.body=Wb(c.querySelector("Challenge").textContent).buffer;}}
n.Cc=function(b){b=b.target;var c;for(c=0;c<this.a.length&&this.a[c].fa!=b;++c);if(c!=this.a.length){var d=!1;b.keyStatuses.forEach(function(b,e){if("string"==typeof e){var f=e;e=b;b=f;}if("com.microsoft.playready"==this.b.keySystem&&16==e.byteLength){f=new DataView(e);var g=f.getUint32(0,!0),l=f.getUint16(4,!0),m=f.getUint16(6,!0);f.setUint32(0,g,!1);f.setUint16(4,l,!1);f.setUint16(6,m,!1);}"com.microsoft.playready"==this.b.keySystem&&"status-pending"==b&&(b="usable");"status-pending"!=b&&(this.a[c].loaded=
!0,this.a.every(function(b){return b.loaded})&&this.i.resolve());"expired"==b&&(d=!0);f=Yb(new Uint8Array(e));this.A[f]=b;}.bind(this));var e=b.expiration-Date.now();(0>e||d&&1E3>e)&&!this.a[c].la&&(this.a.splice(c,1),b.close()["catch"](function(){}));Tb(this.G);}};n.oe=function(){function b(b,d){return"expired"==d}!Ib(this.A)&&Kb(this.A,b)&&this.h(new u(2,6,6014));this.o.Sb(this.A);};
function pc(){var b=[],c=[{contentType:'video/mp4; codecs="avc1.42E01E"'},{contentType:'video/webm; codecs="vp8"'}],d=[{videoCapabilities:c,persistentState:"required",sessionTypes:["persistent-license"]},{videoCapabilities:c}],e={};"org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function(c){var f=navigator.requestMediaKeySystemAccess(c,d).then(function(b){var d=b.getConfiguration().sessionTypes;d=
d?0<=d.indexOf("persistent-license"):!1;0<=navigator.userAgent.indexOf("Tizen 3")&&(d=!1);e[c]={persistentState:d};return b.createMediaKeys()})["catch"](function(){e[c]=null;});b.push(f);});return Promise.all(b).then(function(){return e})}n.Td=function(){for(var b=0;b<this.K.length;b++)nc(this,this.K[b]);this.R=!0;this.K=[];};function qc(b,c){var d=b.keySystem();return 0==c.drmInfos.length||c.drmInfos.some(function(b){return b.keySystem==d})}
function rc(b,c){if(!b.length)return c;if(!c.length)return b;for(var d=[],e=0;e<b.length;e++)for(var f=0;f<c.length;f++)if(b[e].keySystem==c[f].keySystem){var g=b[e];f=c[f];var h=[];h=h.concat(g.initData||[]);h=h.concat(f.initData||[]);var k=[];k=k.concat(g.keyIds);k=k.concat(f.keyIds);d.push({keySystem:g.keySystem,licenseServerUri:g.licenseServerUri||f.licenseServerUri,distinctiveIdentifierRequired:g.distinctiveIdentifierRequired||f.distinctiveIdentifierRequired,persistentStateRequired:g.persistentStateRequired||
f.persistentStateRequired,videoRobustness:g.videoRobustness||f.videoRobustness,audioRobustness:g.audioRobustness||f.audioRobustness,serverCertificate:g.serverCertificate||f.serverCertificate,initData:h,keyIds:k});break}return d}n.ne=function(){this.a.forEach(function(b){var c=b.Rb,d=b.fa.expiration;isNaN(d)&&(d=Infinity);d!=c&&(this.o.onExpirationUpdated(b.fa.sessionId,d),b.Rb=d);}.bind(this));};function sc(b){return!b||1==b.length&&1E-6>b.end(0)-b.start(0)?null:b.length?b.end(b.length-1):null}function tc(b,c){return!b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0)?!1:c>=b.start(0)&&c<=b.end(b.length-1)}function uc(b,c){if(!b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0))return 0;for(var d=0,e=b.length-1;0<=e&&b.end(e)>c;--e)d+=b.end(e)-Math.max(b.start(e),c);return d}function vc(b){if(!b)return[];for(var c=[],d=0;d<b.length;d++)c.push({start:b.start(d),end:b.end(d)});return c}function H(b,c,d){this.startTime=b;this.endTime=c;this.payload=d;this.region=new wc;this.position=null;this.positionAlign=xc;this.size=100;this.textAlign=yc;this.writingDirection=zc;this.lineInterpretation=Ac;this.line=null;this.lineHeight="";this.lineAlign=Bc;this.displayAlign=Cc;this.fontSize=this.backgroundColor=this.color="";this.fontWeight=Dc;this.fontStyle=Ec;this.fontFamily="";this.textDecoration=[];this.wrapLine=!0;this.id="";}q("shaka.text.Cue",H);var xc="auto";
H.positionAlign={LEFT:"line-left",RIGHT:"line-right",CENTER:"center",AUTO:xc};var yc="center",Fc={LEFT:"left",RIGHT:"right",CENTER:yc,START:"start",END:"end"};H.textAlign=Fc;var Cc="before",Gc={BEFORE:Cc,CENTER:"center",AFTER:"after"};H.displayAlign=Gc;var zc=0;H.writingDirection={HORIZONTAL_LEFT_TO_RIGHT:zc,HORIZONTAL_RIGHT_TO_LEFT:1,VERTICAL_LEFT_TO_RIGHT:2,VERTICAL_RIGHT_TO_LEFT:3};var Ac=0;H.lineInterpretation={LINE_NUMBER:Ac,PERCENTAGE:1};var Bc="center",Hc={CENTER:Bc,START:"start",END:"end"};
H.lineAlign=Hc;var Dc=400;H.fontWeight={NORMAL:Dc,BOLD:700};var Ec="normal",Ic={NORMAL:Ec,ITALIC:"italic",OBLIQUE:"oblique"};H.fontStyle=Ic;H.textDecoration={UNDERLINE:"underline",LINE_THROUGH:"lineThrough",OVERLINE:"overline"};function wc(){this.id="";this.regionAnchorY=this.regionAnchorX=this.viewportAnchorY=this.viewportAnchorX=0;this.height=this.width=100;this.viewportAnchorUnits=this.widthUnits=this.heightUnits=Jc;this.scroll=Kc;}q("shaka.text.CueRegion",wc);var Jc=1;
wc.units={PX:0,PERCENTAGE:Jc,LINES:2};var Kc="";wc.scrollMode={NONE:Kc,UP:"up"};function Lc(){this.a=new muxjs.mp4.Transmuxer({keepOriginalTimestamps:!0});this.c=null;this.f=[];this.b=[];this.a.on("data",this.h.bind(this));this.a.on("done",this.g.bind(this));}Lc.prototype.destroy=function(){this.a.dispose();this.a=null;return Promise.resolve()};function Mc(b,c){return window.muxjs&&"mp2t"==b.split(";")[0].split("/")[1]?c?MediaSource.isTypeSupported(Nc(c,b)):MediaSource.isTypeSupported(Nc("audio",b))||MediaSource.isTypeSupported(Nc("video",b)):!1}
function Nc(b,c){var d=c.replace("mp2t","mp4");"audio"==b&&(d=d.replace("video","audio"));var e=/avc1\.(66|77|100)\.(\d+)/.exec(d);if(e){var f="avc1.",g=e[1],h=Number(e[2]);f=("66"==g?f+"4200":"77"==g?f+"4d00":f+"6400")+(h>>4).toString(16);f+=(h&15).toString(16);d=d.replace(e[0],f);}return d}function Oc(b,c){b.c=new y;b.f=[];b.b=[];var d=new Uint8Array(c);b.a.push(d);b.a.flush();return b.c}
Lc.prototype.h=function(b){for(var c=0;c<b.captions.length;c++){var d=b.captions[c];this.b.push(new H(d.startTime,d.endTime,d.text));}c=new Uint8Array(b.data.byteLength+b.initSegment.byteLength);c.set(b.initSegment,0);c.set(b.data,b.initSegment.byteLength);this.f.push(c);};Lc.prototype.g=function(){var b={data:$b.apply(null,this.f),cues:this.b};this.c.resolve(b);};function Pc(b){this.f=null;this.c=b;this.i=this.g=0;this.h=Infinity;this.b=this.a=null;}var I={};q("shaka.text.TextEngine.registerParser",function(b,c){I[b]=c;});q("shaka.text.TextEngine.unregisterParser",function(b){delete I[b];});Pc.prototype.destroy=function(){this.c=this.f=null;return Promise.resolve()};Pc.prototype.Fe=function(b){this.c=b;};Pc.prototype.setDisplayer=Pc.prototype.Fe;
Pc.prototype.Jb=function(b){var c={periodStart:0,segmentStart:null,segmentEnd:0};try{return this.f.parseMedia(new Uint8Array(b),c)[0].startTime}catch(d){throw new u(2,2,2009,d);}};
function Qc(b,c,d,e){return Promise.resolve().then(function(){if(this.f&&this.c)if(null==d||null==e)this.f.parseInit(new Uint8Array(c));else{var b={periodStart:this.g,segmentStart:this.g+d,segmentEnd:this.g+e};b=this.f.parseMedia(new Uint8Array(c),b).filter(function(b){return b.startTime>=this.i&&b.startTime<this.h}.bind(this));this.c.append(b);null==this.a&&(this.a=Math.max(d,this.i));this.b=Math.min(e,this.h);}}.bind(b))}
Pc.prototype.remove=function(b,c){return Promise.resolve().then(function(){!this.c||!this.c.remove(b,c)||null==this.a||c<=this.a||b>=this.b||(b<=this.a&&c>=this.b?this.a=this.b=null:b<=this.a&&c<this.b?this.a=c:b>this.a&&c>=this.b&&(this.b=b));}.bind(this))};Pc.prototype.jc=function(b){this.c.append(b);};Pc.prototype.appendCues=Pc.prototype.jc;function Rc(b){this.f=b;this.o=null;this.b={};this.a=null;this.c={};this.i=new C;this.m=!1;this.h={};this.l=!1;b=this.j=new y;var c=new MediaSource;Ab(this.i,c,"sourceopen",b.resolve);this.f.src=window.URL.createObjectURL(c);this.g=c;}
function Sc(){var b={};'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="av1",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function(c){b[c]=!!I[c]||
MediaSource.isTypeSupported(c)||Mc(c);var d=c.split(";")[0];b[d]=b[d]||b[c];});return b}n=Rc.prototype;
n.destroy=function(){this.m=!0;var b=[],c;for(c in this.c){var d=this.c[c],e=d[0];this.c[c]=d.slice(0,1);e&&b.push(e.p["catch"](Db));for(e=1;e<d.length;++e)d[e].p["catch"](Db),d[e].p.reject();}this.a&&b.push(this.a.destroy());for(var f in this.h)b.push(this.h[f].destroy());this.f&&(this.f.removeAttribute("src"),this.f.load());return Promise.all(b).then(function(){this.i.destroy();this.o=this.a=this.g=this.f=this.i=null;this.b={};this.h={};this.c={};}.bind(this))};
n.init=function(b,c){var d=this;return this.j.then(function(){for(var e in b){var f=b[e];f=Mb(f.mimeType,f.codecs);"text"==e?Tc(d,f):(!c&&MediaSource.isTypeSupported(f)||!Mc(f,e)||(d.h[e]=new Lc,f=Nc(e,f)),f=d.g.addSourceBuffer(f),D(d.i,f,"error",d.Re.bind(d,e)),D(d.i,f,"updateend",d.Ma.bind(d,e)),d.b[e]=f,d.c[e]=[]);}})};function Tc(b,c){b.a||(b.a=new Pc(b.o));b.a.f=new I[c];}
function Uc(b,c){if("text"==c)var d=b.a.a;else d=Vc(b,c),d=!d||1==d.length&&1E-6>d.end(0)-d.start(0)?null:1==d.length&&0>d.start(0)?0:d.length?d.start(0):null;return d}function Wc(b,c){return"text"==c?b.a.b:sc(Vc(b,c))}function Xc(b,c,d){if("text"==c)return b=b.a,null==b.b||b.b<d?0:b.b-Math.max(d,b.a);b=Vc(b,c);return uc(b,d)}n.Fb=function(){var b=this.a&&null!=this.a.a?[{start:this.a.a,end:this.a.b}]:[];return{total:vc(this.f.buffered),audio:vc(Vc(this,"audio")),video:vc(Vc(this,"video")),text:b}};
function Vc(b,c){try{return b.b[c].buffered}catch(d){return null}}function Yc(b,c,d,e,f){return"text"==c?Qc(b.a,d,e,f):b.h[c]?Oc(b.h[c],d).then(function(b){this.a||Tc(this,"text/vtt");this.l&&this.a.jc(b.cues);return Zc(this,c,this.Uc.bind(this,c,b.data.buffer))}.bind(b)):Zc(b,c,b.Uc.bind(b,c,d))}n.remove=function(b,c,d){return"text"==b?this.a.remove(c,d):Zc(this,b,this.Vc.bind(this,b,c,d))};
function $c(b,c){return"text"==c?b.a?b.a.remove(0,Infinity):Promise.resolve():Zc(b,c,b.Vc.bind(b,c,0,b.g.duration))}n.flush=function(b){return"text"==b?Promise.resolve():Zc(this,b,this.kd.bind(this,b))};function ad(b,c,d,e,f){return"text"==c?(b.a.g=d,b=b.a,b.i=e,b.h=f,Promise.resolve()):Promise.all([Zc(b,c,b.ad.bind(b,c)),Zc(b,c,b.He.bind(b,c,d)),Zc(b,c,b.Ee.bind(b,c,e,f))])}n.endOfStream=function(b){return bd(this,function(){b?this.g.endOfStream(b):this.g.endOfStream();}.bind(this))};
n.ga=function(b){return bd(this,function(){this.g.duration=b;}.bind(this))};n.P=function(){return this.g.duration};n.Uc=function(b,c){this.b[b].appendBuffer(c);};n.Vc=function(b,c,d){d<=c?this.Ma(b):this.b[b].remove(c,d);};n.ad=function(b){var c=this.b[b].appendWindowStart,d=this.b[b].appendWindowEnd;this.b[b].abort();this.b[b].appendWindowStart=c;this.b[b].appendWindowEnd=d;this.Ma(b);};n.kd=function(b){this.f.currentTime-=.001;this.Ma(b);};
n.He=function(b,c){0>c&&(c+=.001);this.b[b].timestampOffset=c;this.Ma(b);};n.Ee=function(b,c,d){this.b[b].appendWindowStart=0;this.b[b].appendWindowEnd=d;this.b[b].appendWindowStart=c;this.Ma(b);};n.Re=function(b){this.c[b][0].p.reject(new u(2,3,3014,this.f.error?this.f.error.code:0));};n.Ma=function(b){var c=this.c[b][0];c&&(c.p.resolve(),cd(this,b));};
function Zc(b,c,d){if(b.m)return Promise.reject();d={start:d,p:new y};b.c[c].push(d);if(1==b.c[c].length)try{d.start();}catch(e){"QuotaExceededError"==e.name?d.p.reject(new u(2,3,3017,c)):d.p.reject(new u(2,3,3015,e)),cd(b,c);}return d.p}
function bd(b,c){if(b.m)return Promise.reject();var d=[],e;for(e in b.b){var f=new y,g={start:function(b){b.resolve();}.bind(null,f),p:f};b.c[e].push(g);d.push(f);1==b.c[e].length&&g.start();}return Promise.all(d).then(function(){try{c();}catch(l){var b=Promise.reject(new u(2,3,3015,l));}for(var d in this.b)cd(this,d);return b}.bind(b),function(){return Promise.reject()}.bind(b))}function cd(b,c){b.c[c].shift();var d=b.c[c][0];if(d)try{d.start();}catch(e){d.p.reject(new u(2,3,3015,e)),cd(b,c);}}function dd(b,c,d){return d==c||b>=ed&&d==c.split("-")[0]||b>=fd&&d.split("-")[0]==c.split("-")[0]?!0:!1}var ed=1,fd=2;function gd(b){b=b.toLowerCase().split("-");var c=hd[b[0]];c&&(b[0]=c);return b.join("-")}
var hd={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bod:"bo",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",ces:"cs",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cym:"cy",cze:"cs",dan:"da",deu:"de",div:"dv",dut:"nl",dzo:"dz",ell:"el",eng:"en",epo:"eo",est:"et",eus:"eu",ewe:"ee",fao:"fo",fas:"fa",fij:"fj",fin:"fi",fra:"fr",fre:"fr",
fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",hye:"hy",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",isl:"is",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kat:"ka",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",
lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mkd:"mk",mlg:"mg",mlt:"mt",mon:"mn",mri:"mi",msa:"ms",mya:"my",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nld:"nl",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",ron:"ro",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slk:"sk",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",sqi:"sq",
srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zho:"zh",zul:"zu"};function id(b,c,d){var e=b.video;return e&&(e.width<c.minWidth||e.width>c.maxWidth||e.width>d.width||e.height<c.minHeight||e.height>c.maxHeight||e.height>d.height||e.width*e.height<c.minPixels||e.width*e.height>c.maxPixels)||b.bandwidth<c.minBandwidth||b.bandwidth>c.maxBandwidth?!1:!0}function jd(b,c,d){var e=!1;b.variants.forEach(function(b){var f=b.allowedByApplication;b.allowedByApplication=id(b,c,d);f!=b.allowedByApplication&&(e=!0);});return e}
function kd(b,c,d,e){e.variants=e.variants.filter(function(e){return b&&b.L&&!qc(b,e)?!1:ld(e.audio,b,c)&&ld(e.video,b,d)});e.textStreams=e.textStreams.filter(function(b){return!!I[Mb(b.mimeType,b.codecs)]});}
function ld(b,c,d){if(!b)return!0;var e=null;c&&c.L&&(e=c.u);c=Mb(b.mimeType,b.codecs);var f=Mb(b.mimeType,b.codecs),g=b.mimeType,h;for(h in Nb){var k=b[h],l=Nb[h];k&&(g+="; "+l+'="'+k+'"');}return!(I[f]||MediaSource.isTypeSupported(g)||Mc(f,b.type))||e&&b.encrypted&&0>e.indexOf(c)||d&&(b.mimeType!=d.mimeType||b.codecs.split(".")[0]!=d.codecs.split(".")[0])?!1:!0}
function md(b){var c=b.audio,d=b.video,e=c?c.codecs:null,f=d?d.codecs:null,g=[];f&&g.push(f);e&&g.push(e);var h=[];d&&h.push(d.mimeType);c&&h.push(c.mimeType);h=h[0]||null;var k=[];c&&k.push(c.kind);d&&k.push(d.kind);k=k[0]||null;var l=[];c&&l.push.apply(l,c.roles);d&&l.push.apply(l,d.roles);l=gb(l);b={id:b.id,active:!1,type:"variant",bandwidth:b.bandwidth,language:b.language,label:null,kind:k,width:null,height:null,frameRate:null,mimeType:h,codecs:g.join(", "),audioCodec:e,videoCodec:f,primary:b.primary,
roles:l,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null};d&&(b.videoId=d.id,b.width=d.width||null,b.height=d.height||null,b.frameRate=d.frameRate||null,b.videoBandwidth=d.bandwidth||null);c&&(b.audioId=c.id,b.channelsCount=c.channelsCount,b.audioBandwidth=c.bandwidth||null,b.label=c.label);return b}
function nd(b){return{id:b.id,active:!1,type:"text",bandwidth:0,language:b.language,label:b.label,kind:b.kind||null,width:null,height:null,frameRate:null,mimeType:b.mimeType,codecs:b.codecs||null,audioCodec:null,videoCodec:null,primary:b.primary,roles:b.roles,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null}}function od(b){var c=[],d=pd(b.variants);b=b.textStreams;d.forEach(function(b){c.push(md(b));});b.forEach(function(b){c.push(nd(b));});return c}
function qd(b,c,d){return pd(b.variants).map(function(b){var e=md(b);b.video&&b.audio?e.active=d==b.video.id&&c==b.audio.id:b.video?e.active=d==b.video.id:b.audio&&(e.active=c==b.audio.id);return e})}function rd(b,c){return b.textStreams.map(function(b){var d=nd(b);d.active=c==b.id;return d})}function sd(b,c){for(var d=0;d<b.variants.length;d++)if(b.variants[d].id==c.id)return b.variants[d];return null}function td(b){return b.allowedByApplication&&b.allowedByKeySystem}
function pd(b){return b.filter(function(b){return td(b)})}function ud(b,c,d,e,f){b=vd(b,c,d,f);return wd(b,e)}
function vd(b,c,d,e){var f=pd(b),g=f;b=f.filter(function(b){return b.primary});b.length&&(g=b);var h=g.length?g[0].language:"";g=g.filter(function(b){return b.language==h});if(c){var k=gd(c);[fd,ed,0].forEach(function(b){var c=!1;f.forEach(function(d){k=gd(k);var f=gd(d.language);dd(b,k,f)&&(c?g.push(d):(g=[d],c=!0),e&&(e.audio=!0));});});}if(d&&(c=xd(g,d),c.length))return c;c=g.map(function(b){return(b.audio?b.audio.roles:[]).concat(b.video?b.video.roles:[])}).reduce(Cb,[]);return c.length?xd(g,c[0]):
g}function wd(b,c){var d=b.filter(function(b){return b.audio&&b.audio.channelsCount}).reduce(function(b,c){var d=c.audio.channelsCount;b[d]?b[d].push(c):b[d]=[c];return b},{}),e=Object.keys(d);if(0==e.length)return b;var f=e.filter(function(b){return b<=c});return f.length?d[Math.max.apply(null,f)]:d[Math.min.apply(null,e)]}
function yd(b,c,d,e){var f=b,g=b.filter(function(b){return b.primary});g.length&&(f=g);var h=f.length?f[0].language:"";f=f.filter(function(b){return b.language==h});if(c){var k=gd(c);[fd,ed,0].forEach(function(c){var d=!1;b.forEach(function(b){var g=gd(b.language);dd(c,k,g)&&(d?f.push(b):(f=[b],d=!0),e&&(e.text=!0));});});}if(d){if(c=zd(f,d),c.length)return c}else if(c=f.filter(function(b){return 0==b.roles.length}),c.length)return c;c=f.map(function(b){return b.roles}).reduce(Cb,[]);return c.length?
zd(f,c[0]):f}function xd(b,c){return b.filter(function(b){return b.audio&&0<=b.audio.roles.indexOf(c)||b.video&&0<=b.video.roles.indexOf(c)})}function zd(b,c){return b.filter(function(b){return 0<=b.roles.indexOf(c)})}function Ad(b,c,d){for(var e=0;e<d.length;e++)if(d[e].audio==b&&d[e].video==c)return d[e];return null}function Bd(b,c,d){function e(b,c){return null==b?null==c:c.id==b}for(var f=0;f<d.length;f++)if(e(b,d[f].audio)&&e(c,d[f].video))return d[f];return null}
function Cd(b,c){for(var d=b.periods.length-1;0<d;--d)if(c+Hb>=b.periods[d].startTime)return d;return 0}function Dd(b,c){for(var d=0;d<b.periods.length;++d){var e=b.periods[d];if("text"==c.type)for(var f=0;f<e.textStreams.length;++f){if(e.textStreams[f]==c)return d}else for(f=0;f<e.variants.length;++f){var g=e.variants[f];if(g.audio==c||g.video==c||g.video&&g.video.trickModeVideo==c)return d}}return-1}function J(){this.h=null;this.c=!1;this.b=new Fa;this.g=[];this.i=!1;this.a=this.f=null;}q("shaka.abr.SimpleAbrManager",J);J.prototype.stop=function(){this.h=null;this.c=!1;this.g=[];this.f=null;};J.prototype.stop=J.prototype.stop;J.prototype.init=function(b){this.h=b;};J.prototype.init=J.prototype.init;
J.prototype.chooseVariant=function(){var b=Ed(this.a.restrictions,this.g),c=this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);if(this.g.length&&!b.length)throw new u(2,4,4012);for(var d=b[0]||null,e=0;e<b.length;++e){var f=b[e],g=(b[e+1]||{bandwidth:Infinity}).bandwidth/this.a.bandwidthUpgradeTarget;c>=f.bandwidth/this.a.bandwidthDowngradeTarget&&c<=g&&(d=f);}this.f=Date.now();return d};J.prototype.chooseVariant=J.prototype.chooseVariant;J.prototype.enable=function(){this.c=!0;};
J.prototype.enable=J.prototype.enable;J.prototype.disable=function(){this.c=!1;};J.prototype.disable=J.prototype.disable;J.prototype.segmentDownloaded=function(b,c){var d=this.b;if(!(16E3>c)){var e=8E3*c/b,f=b/1E3;d.a+=c;Ca(d.b,f,e);Ca(d.c,f,e);}if(null!=this.f&&this.c)a:{if(!this.i){if(!(128E3<=this.b.a))break a;this.i=!0;}else if(Date.now()-this.f<1E3*this.a.switchInterval)break a;d=this.chooseVariant();this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.h(d);}};
J.prototype.segmentDownloaded=J.prototype.segmentDownloaded;J.prototype.getBandwidthEstimate=function(){return this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate)};J.prototype.getBandwidthEstimate=J.prototype.getBandwidthEstimate;J.prototype.setVariants=function(b){this.g=b;};J.prototype.setVariants=J.prototype.setVariants;J.prototype.configure=function(b){this.a=b;};J.prototype.configure=J.prototype.configure;
function Ed(b,c){return c.filter(function(c){return id(c,b,{width:Infinity,height:Infinity})}).sort(function(b,c){return b.bandwidth-c.bandwidth})}var Fd="ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),Hd="buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),Id=["loop","playbackRate"],Jd=["pause","play"],Kd="adaptation buffering emsg error loading streaming texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged unloading".split(" "),Ld={drmInfo:20,getAudioLanguages:2,getAudioLanguagesAndRoles:2,
getBufferedInfo:2,getConfiguration:2,getExpiration:2,getManifestUri:2,getPlaybackRate:2,getTextLanguages:2,getTextLanguagesAndRoles:2,getTextTracks:2,getStats:5,usingEmbeddedTextTrack:2,getVariantTracks:2,isAudioOnly:10,isBuffering:1,isInProgress:1,isLive:10,isTextTrackVisible:1,keySystem:10,seekRange:1},Md={getPlayheadTimeAsDate:1,getPresentationStartTimeAsDate:20},Nd=[["getConfiguration","configure"]],Od=[["isTextTrackVisible","setTextTrackVisibility"]],Pd="addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectEmbeddedTextTrack selectTextLanguage selectTextTrack selectVariantTrack setTextTrackVisibility trickPlay".split(" "),
Qd=["attach","detach","load","unload"];
function Rd(b){return JSON.stringify(b,function(b,d){if("function"!=typeof d){if(d instanceof Event||d instanceof E){var c={},f;for(f in d){var g=d[f];g&&"object"==typeof g?"detail"==f&&(c[f]=g):f in Event||(c[f]=g);}return c}if(d instanceof TimeRanges)for(c={__type__:"TimeRanges",length:d.length,start:[],end:[]},f=0;f<d.length;++f)c.start.push(d.start(f)),c.end.push(d.end(f));else c="number"==typeof d?isNaN(d)?"NaN":isFinite(d)?d:0>d?"-Infinity":"Infinity":d;return c}})}
function Sd(b){return JSON.parse(b,function(b,d){return"NaN"==d?NaN:"-Infinity"==d?-Infinity:"Infinity"==d?Infinity:d&&"object"==typeof d&&"TimeRanges"==d.__type__?Td(d):d})}function Td(b){return{length:b.length,start:function(c){return b.start[c]},end:function(c){return b.end[c]}}}function Ud(b,c,d,e,f,g){this.K=b;this.g=c;this.L=d;this.j=!1;this.A=e;this.G=f;this.u=g;this.b=this.h=!1;this.v="";this.i=null;this.l=this.Ac.bind(this);this.m=this.Pd.bind(this);this.a={video:{},player:{}};this.o=0;this.c={};this.f=null;}var Vd=!1,Wd=null;n=Ud.prototype;n.destroy=function(){Xd(this);Wd&&Yd(this);this.G=this.A=this.g=null;this.b=this.h=!1;this.m=this.l=this.f=this.c=this.a=this.i=null;return Promise.resolve()};n.W=function(){return this.b};n.Wb=function(){return this.v};
n.init=function(){if(window.chrome&&chrome.cast&&chrome.cast.isAvailable){delete window.__onGCastApiAvailable;this.h=!0;this.g();var b=new chrome.cast.SessionRequest(this.K);b=new chrome.cast.ApiConfig(b,this.Bc.bind(this),this.Wd.bind(this),"origin_scoped");chrome.cast.initialize(b,function(){},function(){});Vd&&setTimeout(this.g.bind(this),20);(b=Wd)&&b.status!=chrome.cast.SessionStatus.STOPPED?this.Bc(b):Wd=null;}else window.__onGCastApiAvailable=function(b){b&&this.init();}.bind(this);};
n.Zb=function(b){this.i=b;this.b&&Zd({type:"appData",appData:this.i});};n.cast=function(b){if(!this.h)return Promise.reject(new u(1,8,8E3));if(!Vd)return Promise.reject(new u(1,8,8001));if(this.b)return Promise.reject(new u(1,8,8002));this.f=new y;chrome.cast.requestSession(this.Tb.bind(this,b),this.zc.bind(this));return this.f};n.tb=function(){this.b&&(Xd(this),Wd&&(Yd(this),Wd.stop(function(){},function(){}),Wd=null));};
n.get=function(b,c){if("video"==b){if(0<=Jd.indexOf(c))return this.Lc.bind(this,b,c)}else if("player"==b){if(Md[c]&&!this.get("player","isLive")())return function(){};if(0<=Pd.indexOf(c))return this.Lc.bind(this,b,c);if(0<=Qd.indexOf(c))return this.se.bind(this,b,c);if(Ld[c])return this.Ic.bind(this,b,c)}return this.Ic(b,c)};n.set=function(b,c,d){this.a[b][c]=d;Zd({type:"set",targetName:b,property:c,value:d});};
n.Tb=function(b,c){Wd=c;c.addUpdateListener(this.l);c.addMessageListener("urn:x-cast:com.google.shaka.v2",this.m);this.Ac();Zd({type:"init",initState:b,appData:this.i});this.f.resolve();};n.zc=function(b){var c=8003;switch(b.code){case "cancel":c=8004;break;case "timeout":c=8005;break;case "receiver_unavailable":c=8006;}this.f.reject(new u(2,8,c,b));};n.Ic=function(b,c){return this.a[b][c]};n.Lc=function(b,c){Zd({type:"call",targetName:b,methodName:c,args:Array.prototype.slice.call(arguments,2)});};
n.se=function(b,c){var d=Array.prototype.slice.call(arguments,2),e=new y,f=this.o.toString();this.o++;this.c[f]=e;Zd({type:"asyncCall",targetName:b,methodName:c,args:d,id:f});return e};n.Bc=function(b){var c=this.u();this.f=new y;this.j=!0;this.Tb(c,b);};n.Wd=function(b){Vd="available"==b;this.g();};function Yd(b){var c=Wd;c.removeUpdateListener(b.l);c.removeMessageListener("urn:x-cast:com.google.shaka.v2",b.m);}
n.Ac=function(){var b=Wd?"connected"==Wd.status:!1;if(this.b&&!b){this.G();for(var c in this.a)this.a[c]={};Xd(this);}this.v=(this.b=b)?Wd.receiver.friendlyName:"";this.g();};function Xd(b){for(var c in b.c){var d=b.c[c];delete b.c[c];d.reject(new u(1,7,7E3));}}
n.Pd=function(b,c){var d=Sd(c);switch(d.type){case "event":var e=d.event;this.A(d.targetName,new E(e.type,e));break;case "update":e=d.update;for(var f in e){d=this.a[f]||{};for(var g in e[f])d[g]=e[f][g];}this.j&&(this.L(),this.j=!1);break;case "asyncComplete":if(f=d.id,d=d.error,g=this.c[f],delete this.c[f],g)if(d){f=new u(d.severity,d.category,d.code);for(e in d)f[e]=d[e];g.reject(f);}else g.resolve();}};function Zd(b){b=Rd(b);Wd.sendMessage("urn:x-cast:com.google.shaka.v2",b,function(){},Ha);}function K(){this.Ab=new xb;this.ib=this;}K.prototype.addEventListener=function(b,c){this.Ab.push(b,c);};K.prototype.removeEventListener=function(b,c){this.Ab.remove(b,c);};K.prototype.dispatchEvent=function(b){for(var c=this.Ab.get(b.type)||[],d=0;d<c.length;++d){b.target=this.ib;b.currentTarget=this.ib;var e=c[d];try{e.handleEvent?e.handleEvent(b):e.call(this,b);}catch(f){}if(b.a)break}return b.defaultPrevented};function L(b,c,d){K.call(this);this.c=b;this.b=c;this.i=this.g=this.f=this.j=this.h=null;this.a=new Ud(d,this.Me.bind(this),this.Ne.bind(this),this.Oe.bind(this),this.Pe.bind(this),this.qc.bind(this));$d(this);}Aa(L,K);q("shaka.cast.CastProxy",L);L.prototype.destroy=function(b){b&&this.a&&this.a.tb();b=[this.i?this.i.destroy():null,this.b?this.b.destroy():null,this.a?this.a.destroy():null];this.a=this.i=this.j=this.h=this.b=this.c=null;return Promise.all(b)};L.prototype.destroy=L.prototype.destroy;
L.prototype.Bd=function(){return this.h};L.prototype.getVideo=L.prototype.Bd;L.prototype.sd=function(){return this.j};L.prototype.getPlayer=L.prototype.sd;L.prototype.cd=function(){return this.a?this.a.h&&Vd:!1};L.prototype.canCast=L.prototype.cd;L.prototype.W=function(){return this.a?this.a.W():!1};L.prototype.isCasting=L.prototype.W;L.prototype.Wb=function(){return this.a?this.a.Wb():""};L.prototype.receiverName=L.prototype.Wb;L.prototype.cast=function(){var b=this.qc();return this.a.cast(b).then(function(){if(this.b)return this.b.fb()}.bind(this))};
L.prototype.cast=L.prototype.cast;L.prototype.Zb=function(b){this.a.Zb(b);};L.prototype.setAppData=L.prototype.Zb;L.prototype.Te=function(){var b=this.a;if(b.b){var c=b.u();chrome.cast.requestSession(b.Tb.bind(b,c),b.zc.bind(b));}};L.prototype.suggestDisconnect=L.prototype.Te;L.prototype.tb=function(){this.a.tb();};L.prototype.forceDisconnect=L.prototype.tb;
function $d(b){b.a.init();b.i=new C;Fd.forEach(function(b){D(this.i,this.c,b,this.af.bind(this));}.bind(b));Kd.forEach(function(b){D(this.i,this.b,b,this.le.bind(this));}.bind(b));b.h={};for(var c in b.c)Object.defineProperty(b.h,c,{configurable:!1,enumerable:!0,get:b.$e.bind(b,c),set:b.bf.bind(b,c)});b.j={};for(var d in b.b)Object.defineProperty(b.j,d,{configurable:!1,enumerable:!0,get:b.ke.bind(b,d)});b.f=new K;b.f.ib=b.h;b.g=new K;b.g.ib=b.j;}n=L.prototype;
n.qc=function(){var b={video:{},player:{},playerAfterLoad:{},manifest:this.b.Hb(),startTime:null};this.c.pause();Id.forEach(function(c){b.video[c]=this.c[c];}.bind(this));this.c.ended||(b.startTime=this.c.currentTime);Nd.forEach(function(c){var d=c[1];c=this.b[c[0]]();b.player[d]=c;}.bind(this));Od.forEach(function(c){var d=c[1];c=this.b[c[0]]();b.playerAfterLoad[d]=c;}.bind(this));return b};n.Me=function(){this.dispatchEvent(new E("caststatuschanged"));};
n.Ne=function(){this.f.dispatchEvent(new E(this.h.paused?"pause":"play"));};
n.Pe=function(){var b=this;Nd.forEach(function(b){var c=b[1];b=this.a.get("player",b[0])();this.b[c](b);}.bind(this));var c=this.a.get("player","getManifestUri")(),d=this.a.get("video","ended"),e=Promise.resolve(),f=this.c.autoplay,g=null;d||(g=this.a.get("video","currentTime"));c&&(this.c.autoplay=!1,e=this.b.load(c,g));var h={};Id.forEach(function(b){h[b]=this.a.get("video",b);}.bind(this));e.then(function(){b.c&&(Id.forEach(function(b){this.c[b]=h[b];}.bind(b)),Od.forEach(function(b){var c=b[1];b=
this.a.get("player",b[0])();this.b[c](b);}.bind(b)),b.c.autoplay=f,c&&b.c.play());},function(c){b.b.dispatchEvent(new E("error",{detail:c}));});};n.$e=function(b){if("addEventListener"==b)return this.f.addEventListener.bind(this.f);if("removeEventListener"==b)return this.f.removeEventListener.bind(this.f);if(this.a.W()&&0==Object.keys(this.a.a.video).length){var c=this.c[b];if("function"!=typeof c)return c}return this.a.W()?this.a.get("video",b):(b=this.c[b],"function"==typeof b&&(b=b.bind(this.c)),b)};
n.bf=function(b,c){this.a.W()?this.a.set("video",b,c):this.c[b]=c;};n.af=function(b){this.a.W()||this.f.dispatchEvent(new E(b.type,b));};
n.ke=function(b){if("addEventListener"==b)return this.g.addEventListener.bind(this.g);if("removeEventListener"==b)return this.g.removeEventListener.bind(this.g);if("getMediaElement"==b)return function(){return this.h}.bind(this);if("getNetworkingEngine"==b)return this.b.sc.bind(this.b);if(this.a.W()){if("getManifest"==b)return function(){Ga("getManifest() does not work while casting!");return null};if("attach"==b)return function(){Ga("attach() does not work while casting!");return Promise.resolve()};
if("detach"==b)return function(){Ga("detach() does not work while casting!");return Promise.resolve()}}return this.a.W()&&0==Object.keys(this.a.a.video).length&&Ld[b]||!this.a.W()?this.b[b].bind(this.b):this.a.get("player",b)};n.le=function(b){this.a.W()||this.g.dispatchEvent(b);};n.Oe=function(b,c){this.a.W()&&("video"==b?this.f.dispatchEvent(c):"player"==b&&this.g.dispatchEvent(c));};function ae(b,c,d,e){K.call(this);this.a=b;this.b=c;this.c=new C;this.u={video:b,player:c};this.v=d||function(){};this.A=e||function(b){return b};this.o=!1;this.h=!0;this.g=0;this.m=!1;this.j=!0;this.l=this.i=this.f=null;be(this);}Aa(ae,K);q("shaka.cast.CastReceiver",ae);ae.prototype.isConnected=function(){return this.o};ae.prototype.isConnected=ae.prototype.isConnected;ae.prototype.Dd=function(){return this.h};ae.prototype.isIdle=ae.prototype.Dd;
ae.prototype.destroy=function(){var b=[this.c?this.c.destroy():null,this.b?this.b.destroy():null];null!=this.l&&window.clearTimeout(this.l);this.v=this.u=this.c=this.b=this.a=null;this.o=!1;this.h=!0;this.l=this.i=this.f=null;return Promise.all(b).then(function(){cast.receiver.CastReceiverManager.getInstance().stop();})};ae.prototype.destroy=ae.prototype.destroy;
function be(b){var c=cast.receiver.CastReceiverManager.getInstance();c.onSenderConnected=b.Fc.bind(b);c.onSenderDisconnected=b.Fc.bind(b);c.onSystemVolumeChanged=b.jd.bind(b);b.i=c.getCastMessageBus("urn:x-cast:com.google.cast.media");b.i.onMessage=b.Kd.bind(b);b.f=c.getCastMessageBus("urn:x-cast:com.google.shaka.v2");b.f.onMessage=b.Zd.bind(b);c.start();Fd.forEach(function(b){D(this.c,this.a,b,this.Jc.bind(this,"video"));}.bind(b));Kd.forEach(function(b){D(this.c,this.b,b,this.Jc.bind(this,"player"));}.bind(b));
cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?b.b.ac(3840,2160):b.b.ac(1920,1080);D(b.c,b.a,"loadeddata",function(){this.m=!0;}.bind(b));D(b.c,b.b,"loading",function(){this.h=!1;ce(this);}.bind(b));D(b.c,b.a,"playing",function(){this.h=!1;ce(this);}.bind(b));D(b.c,b.a,"pause",function(){ce(this);}.bind(b));D(b.c,b.b,"unloading",function(){this.h=!0;ce(this);}.bind(b));D(b.c,b.a,"ended",function(){window.setTimeout(function(){this.a&&this.a.ended&&
(this.h=!0,ce(this));}.bind(this),5E3);}.bind(b));}n=ae.prototype;n.Fc=function(){this.g=0;this.j=!0;this.o=0!=cast.receiver.CastReceiverManager.getInstance().getSenders().length;ce(this);};function ce(b){Promise.resolve().then(function(){this.b&&(this.dispatchEvent(new E("caststatuschanged")),de(this)||ee(this,0));}.bind(b));}
function fe(b,c,d){for(var e in c.player)b.b[e](c.player[e]);b.v(d);d=Promise.resolve();var f=b.a.autoplay;c.manifest&&(b.a.autoplay=!1,d=b.b.load(c.manifest,c.startTime));d.then(function(){if(b.b){for(var d in c.video)b.a[d]=c.video[d];for(var e in c.playerAfterLoad)b.b[e](c.playerAfterLoad[e]);b.a.autoplay=f;c.manifest&&(b.a.play(),ee(b,0));}},function(c){b.b.dispatchEvent(new E("error",{detail:c}));});}n.Jc=function(b,c){this.b&&(this.Ub(),ge(this,{type:"event",targetName:b,event:c},this.f));};
n.Ub=function(){null!=this.l&&window.clearTimeout(this.l);this.l=window.setTimeout(this.Ub.bind(this),500);var b={video:{},player:{}};Hd.forEach(function(c){b.video[c]=this.a[c];}.bind(this));if(this.b.N())for(var c in Md)0==this.g%Md[c]&&(b.player[c]=this.b[c]());for(var d in Ld)0==this.g%Ld[d]&&(b.player[d]=this.b[d]());if(c=cast.receiver.CastReceiverManager.getInstance().getSystemVolume())b.video.volume=c.level,b.video.muted=c.muted;this.m&&(this.g+=1);ge(this,{type:"update",update:b},this.f);de(this);};
function de(b){return b.j&&(b.a.duration||b.b.N())?(he(b),b.j=!1,!0):!1}function he(b){var c={contentId:b.b.Hb(),streamType:b.b.N()?"LIVE":"BUFFERED",duration:b.a.duration,contentType:""};ee(b,0,c);}n.jd=function(){var b=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();b&&ge(this,{type:"update",update:{video:{volume:b.level,muted:b.muted}}},this.f);ge(this,{type:"event",targetName:"video",event:{type:"volumechange"}},this.f);};
n.Zd=function(b){var c=Sd(b.data);switch(c.type){case "init":this.g=0;this.m=!1;this.j=!0;fe(this,c.initState,c.appData);this.Ub();break;case "appData":this.v(c.appData);break;case "set":var d=c.targetName,e=c.property;c=c.value;if("video"==d){var f=cast.receiver.CastReceiverManager.getInstance();if("volume"==e){f.setSystemVolumeLevel(c);break}else if("muted"==e){f.setSystemVolumeMuted(c);break}}this.u[d][e]=c;break;case "call":d=this.u[c.targetName];d[c.methodName].apply(d,c.args);break;case "asyncCall":d=
c.targetName;e=c.methodName;"player"==d&&"load"==e&&(this.g=0,this.m=!1);f=c.id;b=b.senderId;var g=this.u[d];c=g[e].apply(g,c.args);"player"==d&&"load"==e&&(c=c.then(function(){this.j=!0;}.bind(this)));c.then(this.Qc.bind(this,b,f,null),this.Qc.bind(this,b,f));}};
n.Kd=function(b){var c=Sd(b.data);switch(c.type){case "PLAY":this.a.play();ee(this,0);break;case "PAUSE":this.a.pause();ee(this,0);break;case "SEEK":b=c.currentTime;var d=c.resumeState;null!=b&&(this.a.currentTime=Number(b));d&&"PLAYBACK_START"==d?(this.a.play(),ee(this,0)):d&&"PLAYBACK_PAUSE"==d&&(this.a.pause(),ee(this,0));break;case "STOP":this.b.fb().then(function(){this.b&&ee(this,0);}.bind(this));break;case "GET_STATUS":ee(this,Number(c.requestId));break;case "VOLUME":d=c.volume;b=d.level;d=
d.muted;var e=this.a.volume,f=this.a.muted;null!=b&&(this.a.volume=Number(b));null!=d&&(this.a.muted=d);e==this.a.volume&&f==this.a.muted||ee(this,0);break;case "LOAD":this.g=0;this.j=this.m=!1;b=c.currentTime;d=this.A(c.media.contentId);this.a.autoplay=!0;this.b.load(d,b).then(function(){this.b&&he(this);}.bind(this))["catch"](function(b){var d="LOAD_FAILED";7==b.category&&7E3==b.code&&(d="LOAD_CANCELLED");ge(this,{requestId:Number(c.requestId),type:d},this.i);}.bind(this));break;default:ge(this,{requestId:Number(c.requestId),
type:"INVALID_REQUEST",reason:"INVALID_COMMAND"},this.i);}};n.Qc=function(b,c,d){this.b&&ge(this,{type:"asyncComplete",id:c,error:d},this.f,b);};function ge(b,c,d,e){b.o&&(b=Rd(c),e?d.getCastChannel(e).send(b):d.broadcast(b));}
function ee(b,c,d){var e=b.a.playbackRate;var f=ie;f=b.h?f.IDLE:b.b.vc()?f.Wc:b.a.paused?f.Yc:f.Zc;e={mediaSessionId:0,playbackRate:e,playerState:f,currentTime:b.a.currentTime,supportedMediaCommands:15,volume:{level:b.a.volume,muted:b.a.muted}};d&&(e.media=d);ge(b,{requestId:c,type:"MEDIA_STATUS",status:[e]},b.i);}var ie={IDLE:"IDLE",Zc:"PLAYING",Wc:"BUFFERING",Yc:"PAUSED"};function je(b,c){var d=M(b,c);return 1!=d.length?null:d[0]}function M(b,c){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&b.tagName==c})}function ke(b){var c=b.firstChild;return c&&c.nodeType==Node.TEXT_NODE?b.textContent.trim():null}function N(b,c,d,e){var f=null;b=b.getAttribute(c);null!=b&&(f=d(b));return null==f?void 0!=e?e:null:f}
function le(b){if(!b)return null;/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(b)&&(b+="Z");b=Date.parse(b);return isNaN(b)?null:Math.floor(b/1E3)}function me(b){if(!b)return null;b=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(b);if(!b)return null;b=31536E3*Number(b[1]||null)+2592E3*Number(b[2]||null)+86400*Number(b[3]||null)+3600*Number(b[4]||null)+60*Number(b[5]||null)+Number(b[6]||null);return isFinite(b)?b:null}
function ne(b){var c=/([0-9]+)-([0-9]+)/.exec(b);if(!c)return null;b=Number(c[1]);if(!isFinite(b))return null;c=Number(c[2]);return isFinite(c)?{start:b,end:c}:null}function oe(b){b=Number(b);return 0===b%1?b:null}function pe(b){b=Number(b);return 0===b%1&&0<b?b:null}function qe(b){b=Number(b);return 0===b%1&&0<=b?b:null}function re(b){var c;b=(c=b.match(/^(\d+)\/(\d+)$/))?Number(c[1]/c[2]):Number(b);return isNaN(b)?null:b}var se={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"};
function te(b,c,d){b=ue(b);var e=null,f=[],g=[],h=b.map(function(b){return b.keyId}).filter(Eb);if(h.length&&1<h.filter(Fb).length)throw new u(2,4,4010);d||(g=b.filter(function(b){return"urn:mpeg:dash:mp4protection:2011"==b.Pc?(e=b.init||e,!1):!0}),g.length&&(f=ve(e,c,g),0==f.length&&(f=[Gb("",e)])));!b.length||!d&&g.length||(f=Jb(se).map(function(b){return Gb(b,e)}));var k=h[0]||null;k&&f.forEach(function(b){b.initData.forEach(function(b){b.keyId=k;});});return{kc:k,ff:e,drmInfos:f,pc:!0}}
function we(b,c,d,e){var f=te(b,c,e);if(d.pc){b=1==d.drmInfos.length&&!d.drmInfos[0].keySystem;c=0==f.drmInfos.length;if(0==d.drmInfos.length||b&&!c)d.drmInfos=f.drmInfos;d.pc=!1;}else if(0<f.drmInfos.length&&(d.drmInfos=d.drmInfos.filter(function(b){return f.drmInfos.some(function(c){return c.keySystem==b.keySystem})}),0==d.drmInfos.length))throw new u(2,4,4008);return f.kc||d.kc}
function ve(b,c,d){return d.map(function(d){var e=se[d.Pc];if(e){var g=d.init||b,h="";if(d.node&&d.node.childNodes&&0<d.node.childNodes.length)for(var k=0;k<d.node.childNodes.length;k++){var l=d.node.childNodes[k];"ms:laurl"===l.nodeName&&l instanceof Element&&(h=l.getAttribute("licenseUrl"));}if(!h&&"com.microsoft.playready"===e&&g&&0<g.length&&"cenc"===g[0].initDataType)a:{if((h=g[0].initData)&&0===h.buffer.byteLength%2&&(h=String.fromCharCode.apply(null,new Uint16Array(h.buffer)),d=h.indexOf("<WRMHEADER"))&&
(h=h.substr(d))){h=(new DOMParser).parseFromString(h,"application/xml");if(h.getElementsByTagName("LA_URL")[0]&&(d=h.getElementsByTagName("LA_URL")[0].childNodes[0].nodeValue)){h=d;break a}if(h.getElementsByTagName("LUI_URL")[0]&&(h=h.getElementsByTagName("LUI_URL")[0].childNodes[0].nodeValue))break a}h="";}e=Gb(e,g);e.licenseServerUri=h?h:"";return[e]}return c(d.node)||[]}).reduce(Cb,[])}
function ue(b){return b.map(function(b){var c=b.getAttribute("schemeIdUri"),e=b.getAttribute("cenc:default_KID"),f=M(b,"cenc:pssh").map(ke);if(!c)return null;c=c.toLowerCase();if(e&&(e=e.replace(/-/g,"").toLowerCase(),0<=e.indexOf(" ")))throw new u(2,4,4009);var g=[];try{g=f.map(function(b){return{initDataType:"cenc",initData:Wb(b),keyId:null}});}catch(h){throw new u(2,4,4007);}return{node:b,Pc:c,keyId:e,init:0<g.length?g:null}}).filter(Eb)}function xe(b,c,d,e,f){null!=f&&(f=Math.round(f));var g={RepresentationID:c,Number:d,Bandwidth:e,Time:f};return b.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,function(b,c,d,e){if("$$"==b)return"$";var f=g[c];if(null==f)return b;"RepresentationID"==c&&d&&(d=void 0);switch(e){case void 0:case "d":case "i":case "u":b=f.toString();break;case "o":b=f.toString(8);break;case "x":b=f.toString(16);break;case "X":b=f.toString(16).toUpperCase();break;default:b=f.toString();}d=
window.parseInt(d,10)||1;return Array(Math.max(0,d-b.length)+1).join("0")+b})}
function ye(b,c){var d=ze(b,c,"timescale"),e=1;d&&(e=pe(d)||1);d=ze(b,c,"duration");(d=pe(d||""))&&(d/=e);var f=ze(b,c,"startNumber"),g=Number(ze(b,c,"presentationTimeOffset"))||0,h=qe(f||"");if(null==f||null==h)h=1;var k=Ae(b,c,"SegmentTimeline");f=null;if(k){f=e;var l=b.M.duration||Infinity;k=M(k,"S");for(var m=[],r=0,t=0;t<k.length;++t){var v=k[t],w=N(v,"t",qe),x=N(v,"d",qe);v=N(v,"r",oe);null!=w&&(w-=g);if(!x)break;w=null!=w?w:r;v=v||0;if(0>v)if(t+1<k.length){v=N(k[t+1],"t",qe);if(null==v)break;
else if(w>=v)break;v=Math.ceil((v-w)/x)-1;}else{if(Infinity==l)break;else if(w/f>=l)break;v=Math.ceil((l*f-w)/x)-1;}0<m.length&&w!=r&&(m[m.length-1].end=w/f);for(var Da=0;Da<=v;++Da)r=w+x,m.push({start:w/f,end:r/f,Xe:w}),w=r;}f=m;}return{timescale:e,O:d,Ca:h,aa:g/e||0,gc:g,I:f}}function ze(b,c,d){return[c(b.w),c(b.S),c(b.Z)].filter(Eb).map(function(b){return b.getAttribute(d)}).reduce(function(b,c){return b||c})}
function Ae(b,c,d){return[c(b.w),c(b.S),c(b.Z)].filter(Eb).map(function(b){return je(b,d)}).reduce(function(b,c){return b||c})}function Be(b,c){var d=new DOMParser;try{var e=G(b);var f=d.parseFromString(e,"text/xml");}catch(h){}if(f&&f.documentElement.tagName==c)var g=f.documentElement;return g&&0<g.getElementsByTagName("parsererror").length?null:g}
function Ce(b,c,d,e,f,g){for(var h=b.getAttribute("xlink:href"),k=b.getAttribute("xlink:actuate")||"onRequest",l=0;l<b.attributes.length;l++){var m=b.attributes[l].nodeName;-1!=m.indexOf("xlink:")&&(b.removeAttribute(m),--l);}if(5<=g)return ab(new u(2,4,4028));if("onLoad"!=k)return ab(new u(2,4,4027));var r=F([e],[h]);return f.request(0,B(r,c)).T(function(e){e=Be(e.data,b.tagName);if(!e)return ab(new u(2,4,4001,h));for(;b.childNodes.length;)b.removeChild(b.childNodes[0]);for(;e.childNodes.length;){var k=
e.childNodes[0];e.removeChild(k);b.appendChild(k);}for(k=0;k<e.attributes.length;k++){var l=e.attributes[k].nodeName,m=e.getAttribute(l);b.setAttribute(l,m);}return De(b,c,d,r[0],f,g+1)})}
function De(b,c,d,e,f,g){g=g||0;if(b.getAttribute("xlink:href")){var h=Ce(b,c,d,e,f,g);d&&(h=h.T(void 0,function(){return De(b,c,d,e,f,g)}));return h}for(h=0;h<b.childNodes.length;h++){var k=b.childNodes[h];k instanceof Element&&"urn:mpeg:dash:resolve-to-zero:2013"==k.getAttribute("xlink:href")&&(b.removeChild(k),--h);}h=[];for(k=0;k<b.childNodes.length;k++){var l=b.childNodes[k];l.nodeType==Node.ELEMENT_NODE&&h.push(De(l,c,d,e,f,g));}return eb(h).T(function(){return b})}function O(b,c,d){this.c=b;this.b=c;this.a=d;}q("shaka.media.InitSegmentReference",O);O.prototype.Cb=function(){return this.c()};O.prototype.createUris=O.prototype.Cb;O.prototype.Ib=function(){return this.b};O.prototype.getStartByte=O.prototype.Ib;O.prototype.Gb=function(){return this.a};O.prototype.getEndByte=O.prototype.Gb;function P(b,c,d,e,f,g){this.position=b;this.startTime=c;this.endTime=d;this.c=e;this.b=f;this.a=g;}q("shaka.media.SegmentReference",P);P.prototype.U=function(){return this.position};
P.prototype.getPosition=P.prototype.U;P.prototype.Jb=function(){return this.startTime};P.prototype.getStartTime=P.prototype.Jb;P.prototype.od=function(){return this.endTime};P.prototype.getEndTime=P.prototype.od;P.prototype.Cb=function(){return this.c()};P.prototype.createUris=P.prototype.Cb;P.prototype.Ib=function(){return this.b};P.prototype.getStartByte=P.prototype.Ib;P.prototype.Gb=function(){return this.a};P.prototype.getEndByte=P.prototype.Gb;function Q(b,c){this.F=b;this.b=c==Ee;this.a=0;}q("shaka.util.DataViewReader",Q);var Ee=1;Q.Endianness={cf:0,df:Ee};Q.prototype.da=function(){return this.a<this.F.byteLength};Q.prototype.hasMoreData=Q.prototype.da;Q.prototype.U=function(){return this.a};Q.prototype.getPosition=Q.prototype.U;Q.prototype.qd=function(){return this.F.byteLength};Q.prototype.getLength=Q.prototype.qd;Q.prototype.$=function(){try{var b=this.F.getUint8(this.a);this.a+=1;return b}catch(c){Fe();}};Q.prototype.readUint8=Q.prototype.$;
Q.prototype.$a=function(){try{var b=this.F.getUint16(this.a,this.b);this.a+=2;return b}catch(c){Fe();}};Q.prototype.readUint16=Q.prototype.$a;Q.prototype.B=function(){try{var b=this.F.getUint32(this.a,this.b);this.a+=4;return b}catch(c){Fe();}};Q.prototype.readUint32=Q.prototype.B;Q.prototype.Kc=function(){try{var b=this.F.getInt32(this.a,this.b);this.a+=4;return b}catch(c){Fe();}};Q.prototype.readInt32=Q.prototype.Kc;
Q.prototype.Pa=function(){try{if(this.b){var b=this.F.getUint32(this.a,!0);var c=this.F.getUint32(this.a+4,!0);}else c=this.F.getUint32(this.a,!1),b=this.F.getUint32(this.a+4,!1);}catch(d){Fe();}if(2097151<c)throw new u(2,3,3001);this.a+=8;return c*Math.pow(2,32)+b};Q.prototype.readUint64=Q.prototype.Pa;Q.prototype.Ba=function(b){this.a+b>this.F.byteLength&&Fe();var c=new Uint8Array(this.F.buffer,this.F.byteOffset+this.a,b);this.a+=b;return new Uint8Array(c)};Q.prototype.readBytes=Q.prototype.Ba;
Q.prototype.D=function(b){this.a+b>this.F.byteLength&&Fe();this.a+=b;};Q.prototype.skip=Q.prototype.D;Q.prototype.Oc=function(b){this.a<b&&Fe();this.a-=b;};Q.prototype.rewind=Q.prototype.Oc;Q.prototype.seek=function(b){(0>b||b>this.F.byteLength)&&Fe();this.a=b;};Q.prototype.seek=Q.prototype.seek;Q.prototype.Vb=function(){for(var b=this.a;this.da()&&0!=this.F.getUint8(this.a);)this.a+=1;b=new Uint8Array(this.F.buffer,this.F.byteOffset+b,this.a-b);this.a+=1;return G(b)};
Q.prototype.readTerminatedString=Q.prototype.Vb;function Fe(){throw new u(2,3,3E3);}function R(){this.c=[];this.b=[];this.a=!1;}q("shaka.util.Mp4Parser",R);R.prototype.C=function(b,c){var d=Ge(b);this.c[d]=0;this.b[d]=c;return this};R.prototype.box=R.prototype.C;R.prototype.V=function(b,c){var d=Ge(b);this.c[d]=1;this.b[d]=c;return this};R.prototype.fullBox=R.prototype.V;R.prototype.stop=function(){this.a=!0;};R.prototype.stop=R.prototype.stop;
R.prototype.parse=function(b,c){var d=new Uint8Array(b);d=new Q(new DataView(d.buffer,d.byteOffset,d.byteLength),0);for(this.a=!1;d.da()&&!this.a;)this.xb(0,d,c);};R.prototype.parse=R.prototype.parse;
R.prototype.xb=function(b,c,d){var e=c.U(),f=c.B(),g=c.B();switch(f){case 0:f=c.F.byteLength-e;break;case 1:f=c.Pa();}var h=this.b[g];if(h){var k=null,l=null;1==this.c[g]&&(l=c.B(),k=l>>>24,l&=16777215);g=e+f;d&&g>c.F.byteLength&&(g=c.F.byteLength);g-=c.U();c=0<g?c.Ba(g):new Uint8Array(0);c=new Q(new DataView(c.buffer,c.byteOffset,c.byteLength),0);h({na:this,Hc:d||!1,version:k,flags:l,s:c,size:f,start:e+b});}else c.D(e+f-c.U());};R.prototype.parseNext=R.prototype.xb;
function S(b){for(;b.s.da()&&!b.na.a;)b.na.xb(b.start,b.s,b.Hc);}R.children=S;function He(b){for(var c=b.s.B();0<c&&!b.na.a;--c)b.na.xb(b.start,b.s,b.Hc);}R.sampleDescription=He;function Ie(b){return function(c){b(c.s.Ba(c.s.F.byteLength-c.s.U()));}}R.allData=Ie;function Ge(b){for(var c=0,d=0;d<b.length;d++)c=c<<8|b.charCodeAt(d);return c}function Je(b){return String.fromCharCode(b>>24&255,b>>16&255,b>>8&255,b&255)}R.typeToString=Je;function Ke(b,c,d,e){var f,g=(new R).V("sidx",function(b){f=Le(c,e,d,b);});b&&g.parse(b);if(f)return f;throw new u(2,3,3004);}
function Le(b,c,d,e){var f=[];e.s.D(4);var g=e.s.B();if(0==g)throw new u(2,3,3005);if(0==e.version){var h=e.s.B();var k=e.s.B();}else h=e.s.Pa(),k=e.s.Pa();e.s.D(2);var l=e.s.$a();b=b+e.size+k;for(k=0;k<l;k++){var m=e.s.B(),r=(m&2147483648)>>>31;m&=2147483647;var t=e.s.B();e.s.D(4);if(1==r)throw new u(2,3,3006);f.push(new P(f.length,h/g-c,(h+t)/g-c,function(){return d},b,b+m-1));h+=t;b+=m;}e.na.stop();return f}function T(b){this.a=b;}q("shaka.media.SegmentIndex",T);T.prototype.wd=function(){return this.a};T.prototype.getReferences=T.prototype.wd;T.prototype.destroy=function(){this.a=null;return Promise.resolve()};T.prototype.destroy=T.prototype.destroy;T.prototype.find=function(b){for(var c=this.a.length-1;0<=c;--c){var d=this.a[c];if(b>=d.startTime&&b<d.endTime)return d.position}return this.a.length&&b<this.a[0].startTime?this.a[0].position:null};T.prototype.find=T.prototype.find;
T.prototype.get=function(b){if(0==this.a.length)return null;b-=this.a[0].position;return 0>b||b>=this.a.length?null:this.a[b]};T.prototype.get=T.prototype.get;T.prototype.offset=function(b){for(var c=0;c<this.a.length;++c)this.a[c].startTime+=b,this.a[c].endTime+=b;};T.prototype.offset=T.prototype.offset;T.prototype.Ob=function(b){var c;for(c=0;c<b.length;c++)this.a.push(b[c]);};T.prototype.merge=T.prototype.Ob;T.prototype.replace=function(b){this.a=b;};
T.prototype.Eb=function(b){for(var c=0;c<this.a.length;++c)if(this.a[c].endTime>b){this.a.splice(0,c);return}this.a=[];};T.prototype.evict=T.prototype.Eb;function Me(b,c){for(;b.a.length;)if(b.a[b.a.length-1].startTime>=c)b.a.pop();else break;for(;b.a.length;)if(0>=b.a[0].endTime)b.a.shift();else break;if(0!=b.a.length){var d=b.a[0];d.startTime<Hb&&(b.a[0]=new P(d.position,0,d.endTime,d.c,d.b,d.a));d=b.a[b.a.length-1];b.a[b.a.length-1]=new P(d.position,d.startTime,c,d.c,d.b,d.a);}}function Ne(b){this.b=b;this.a=new Q(b,0);Oe||(Oe=[new Uint8Array([255]),new Uint8Array([127,255]),new Uint8Array([63,255,255]),new Uint8Array([31,255,255,255]),new Uint8Array([15,255,255,255,255]),new Uint8Array([7,255,255,255,255,255]),new Uint8Array([3,255,255,255,255,255,255]),new Uint8Array([1,255,255,255,255,255,255,255])]);}var Oe;Ne.prototype.da=function(){return this.a.da()};
function Pe(b){var c=Qe(b);if(7<c.length)throw new u(2,3,3002);for(var d=0,e=0;e<c.length;e++)d=256*d+c[e];c=d;d=Qe(b);a:{for(e=0;e<Oe.length;e++)if(Zb(d,Oe[e])){e=!0;break a}e=!1;}if(e)d=b.b.byteLength-b.a.U();else{if(8==d.length&&d[1]&224)throw new u(2,3,3001);e=d[0]&(1<<8-d.length)-1;for(var f=1;f<d.length;f++)e=256*e+d[f];d=e;}d=b.a.U()+d<=b.b.byteLength?d:b.b.byteLength-b.a.U();e=new DataView(b.b.buffer,b.b.byteOffset+b.a.U(),d);b.a.D(d);return new Re(c,e)}
function Qe(b){var c=b.a.$(),d;for(d=1;8>=d&&!(c&1<<8-d);d++);if(8<d)throw new u(2,3,3002);var e=new Uint8Array(d);e[0]=c;for(c=1;c<d;c++)e[c]=b.a.$();return e}function Re(b,c){this.id=b;this.a=c;}function Se(b){if(8<b.a.byteLength)throw new u(2,3,3002);if(8==b.a.byteLength&&b.a.getUint8(0)&224)throw new u(2,3,3001);for(var c=0,d=0;d<b.a.byteLength;d++){var e=b.a.getUint8(d);c=256*c+e;}return c}function Te(){}
Te.prototype.parse=function(b,c,d,e){var f;c=new Ne(new DataView(c));if(440786851!=Pe(c).id)throw new u(2,3,3008);var g=Pe(c);if(408125543!=g.id)throw new u(2,3,3009);c=g.a.byteOffset;g=new Ne(g.a);for(f=null;g.da();){var h=Pe(g);if(357149030==h.id){f=h;break}}if(!f)throw new u(2,3,3010);g=new Ne(f.a);f=1E6;for(h=null;g.da();){var k=Pe(g);if(2807729==k.id)f=Se(k);else if(17545==k.id)if(h=k,4==h.a.byteLength)h=h.a.getFloat32(0);else if(8==h.a.byteLength)h=h.a.getFloat64(0);else throw new u(2,3,3003);
}if(null==h)throw new u(2,3,3011);g=f/1E9;f=h*g;b=Pe(new Ne(new DataView(b)));if(475249515!=b.id)throw new u(2,3,3007);return Ue(b,c,g,f,d,e)};function Ue(b,c,d,e,f,g){function h(){return f}var k=[];b=new Ne(b.a);for(var l=null,m=null;b.da();){var r=Pe(b);if(187==r.id){var t=Ve(r);t&&(r=d*t.Ye,t=c+t.re,null!=l&&k.push(new P(k.length,l-g,r-g,h,m,t-1)),l=r,m=t);}}null!=l&&k.push(new P(k.length,l-g,e-g,h,m,null));return k}
function Ve(b){var c=new Ne(b.a);b=Pe(c);if(179!=b.id)throw new u(2,3,3013);b=Se(b);c=Pe(c);if(183!=c.id)throw new u(2,3,3012);c=new Ne(c.a);for(var d=0;c.da();){var e=Pe(c);if(241==e.id){d=Se(e);break}}return{Ye:b,re:d}}function We(b,c){var d=Ae(b,c,"Initialization");if(!d)return null;var e=b.w.ca,f=d.getAttribute("sourceURL");f&&(e=F(b.w.ca,[f]));f=0;var g=null;if(d=N(d,"range",ne))f=d.start,g=d.end;return new O(function(){return e},f,g)}
function Xe(b,c){var d=Number(ze(b,Ye,"presentationTimeOffset"))||0,e=ze(b,Ye,"timescale"),f=1;e&&(f=pe(e)||1);d=d/f||0;e=We(b,Ye);var g=b.w.contentType;f=b.w.mimeType.split("/")[1];if("text"!=g&&"mp4"!=f&&"webm"!=f)throw new u(2,4,4006);if("webm"==f&&!e)throw new u(2,4,4005);g=Ae(b,Ye,"RepresentationIndex");var h=ze(b,Ye,"indexRange"),k=b.w.ca;h=ne(h||"");if(g){var l=g.getAttribute("sourceURL");l&&(k=F(b.w.ca,[l]));h=N(g,"range",ne,h);}if(!h)throw new u(2,4,4002);f=Ze(b,c,e,k,h.start,h.end,f,d);return{createSegmentIndex:f.createSegmentIndex,
findSegmentPosition:f.findSegmentPosition,getSegmentReference:f.getSegmentReference,initSegmentReference:e,aa:d}}
function Ze(b,c,d,e,f,g,h,k){var l=b.presentationTimeline,m=!b.va||!b.M.Kb,r=b.M.index,t=b.M.duration,v=c,w=null;return{createSegmentIndex:function(){var b=[v(e,f,g),"webm"==h?v(d.c(),d.b,d.a):null];v=null;return Promise.all(b).then(function(b){var c=b[0];b=b[1]||null;c="mp4"==h?Ke(c,f,e,k):(new Te).parse(c,b,e,k);l.Ya(c,0==r);w=new T(c);m&&Me(w,t);})},findSegmentPosition:function(b){return w.find(b)},getSegmentReference:function(b){return w.get(b)}}}function Ye(b){return b.ab}function $e(b,c){var d=We(b,af);var e=bf(b);var f=ye(b,af),g=f.Ca;0==g&&(g=1);var h=0;f.O?h=f.O*(g-1):f.I&&0<f.I.length&&(h=f.I[0].start);e={O:f.O,startTime:h,Ca:g,aa:f.aa,I:f.I,La:e};if(!e.O&&!e.I&&1<e.La.length)throw new u(2,4,4002);if(!e.O&&!b.M.duration&&!e.I&&1==e.La.length)throw new u(2,4,4002);if(e.I&&0==e.I.length)throw new u(2,4,4002);g=f=null;b.Z.id&&b.w.id&&(g=b.Z.id+","+b.w.id,f=c[g]);h=cf(b.M.duration,e.Ca,b.w.ca,e);f?(f.Ob(h),g=b.presentationTimeline.Ja(),f.Eb(g-b.M.start)):(b.presentationTimeline.Ya(h,
0==b.M.index),f=new T(h),g&&b.va&&(c[g]=f));b.va&&b.M.Kb||Me(f,b.M.duration);return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:f.find.bind(f),getSegmentReference:f.get.bind(f),initSegmentReference:d,aa:e.aa}}function af(b){return b.pa}
function cf(b,c,d,e){var f=e.La.length;e.I&&e.I.length!=e.La.length&&(f=Math.min(e.I.length,e.La.length));for(var g=[],h=e.startTime,k=0;k<f;k++){var l=e.La[k],m=F(d,[l.Fd]),r=void 0;r=null!=e.O?h+e.O:e.I?e.I[k].end:h+b;g.push(new P(k+c,h,r,function(b){return b}.bind(null,m),l.start,l.end));h=r;}return g}
function bf(b){return[b.w.pa,b.S.pa,b.Z.pa].filter(Eb).map(function(b){return M(b,"SegmentURL")}).reduce(function(b,d){return 0<b.length?b:d}).map(function(c){c.getAttribute("indexRange")&&!b.uc&&(b.uc=!0);var d=c.getAttribute("media");c=N(c,"mediaRange",ne,{start:0,end:null});return{Fd:d,start:c.start,end:c.end}})}function df(b,c,d,e){var f=ef(b);var g=ye(b,ff);var h=ze(b,ff,"media"),k=ze(b,ff,"index");g={O:g.O,timescale:g.timescale,Ca:g.Ca,aa:g.aa,gc:g.gc,I:g.I,Nb:h,Wa:k};h=g.Wa?1:0;h+=g.I?1:0;h+=g.O?1:0;if(0==h)throw new u(2,4,4002);1!=h&&(g.Wa&&(g.I=null),g.O=null);if(!g.Wa&&!g.Nb)throw new u(2,4,4002);if(g.Wa){d=b.w.mimeType.split("/")[1];if("mp4"!=d&&"webm"!=d)throw new u(2,4,4006);if("webm"==d&&!f)throw new u(2,4,4005);e=xe(g.Wa,b.w.id,null,b.bandwidth||null,null);e=F(b.w.ca,[e]);b=Ze(b,c,f,e,0,null,
d,g.aa);}else g.O?(e||b.presentationTimeline.wb(g.O),b=gf(b,g)):(e=c=null,b.Z.id&&b.w.id&&(e=b.Z.id+","+b.w.id,c=d[e]),h=hf(b,g,c),c?(c.Ob(h),d=b.presentationTimeline.Ja(),c.Eb(d-b.M.start)):(b.presentationTimeline.Ya(h,0==b.M.index),b.va&&null!==b.presentationTimeline.c&&(c=Math.round(b.presentationTimeline.rc()-h[h.length-1].startTime)+Math.max(b.presentationTimeline.m,15),c>b.presentationTimeline.g&&b.presentationTimeline.$b(c)),c=new T(h),e&&b.va&&(d[e]=c)),b.va&&b.M.Kb||Me(c,b.M.duration),b={createSegmentIndex:Promise.resolve.bind(Promise),
findSegmentPosition:c.find.bind(c),getSegmentReference:c.get.bind(c)});return{createSegmentIndex:b.createSegmentIndex,findSegmentPosition:b.findSegmentPosition,getSegmentReference:b.getSegmentReference,initSegmentReference:f,aa:g.aa}}function ff(b){return b.cb}
function gf(b,c){var d=b.M.duration,e=c.O,f=c.Ca,g=c.timescale,h=c.Nb,k=b.bandwidth||null,l=b.w.id,m=b.w.ca;return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0>b||d&&b>=d?null:Math.floor(b/e)},getSegmentReference:function(b){var c=b*e,r=c+e;d&&(r=Math.min(r,d));return 0>r||d&&c>=d?null:new P(b,c,r,function(){var d=xe(h,l,b+f,k,c*g);return F(m,[d])},0,null)}}}
function hf(b,c,d){var e=[];for(d=d?d.a.length:0;d<c.I.length;d++){var f=d+c.Ca;e.push(new P(f,c.I[d].start,c.I[d].end,function(b,c,d,e,f,r){b=xe(b,c,f,d,r);return F(e,[b]).map(function(b){return b.toString()})}.bind(null,c.Nb,b.w.id,b.bandwidth||null,b.w.ca,f,c.I[d].Xe+c.gc),0,null));}return e}function ef(b){var c=ze(b,ff,"initialization");if(!c)return null;var d=b.w.id,e=b.bandwidth||null,f=b.w.ca;return new O(function(){var b=xe(c,d,null,e,null);return F(f,[b])},0,null)}var jf={},kf={};q("shaka.media.ManifestParser.registerParserByExtension",function(b,c){kf[b]=c;});q("shaka.media.ManifestParser.registerParserByMime",function(b,c){jf[b]=c;});function lf(){var b={},c;for(c in jf)b[c]=!0;for(var d in kf)b[d]=!0;["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"].forEach(function(c){b[c]=!!jf[c];});["mpd","m3u8","ism"].forEach(function(c){b[c]=!!kf[c];});return b}
function mf(b,c,d,e){var f=e;f||(e=(new Ja(b)).Y.split("/").pop().split("."),1<e.length&&(e=e.pop().toLowerCase(),f=kf[e]));if(f)return Promise.resolve(f);d=B([b],d);d.method="HEAD";return c.request(0,d).promise.then(function(c){(c=c.headers["content-type"])&&(c=c.toLowerCase());return(f=jf[c])?f:Promise.reject(new u(2,4,4E3,b))},function(b){b.severity=2;return Promise.reject(b)})}function U(b,c){this.c=b;this.m=this.g=c;this.f=this.b=Infinity;this.a=1;this.l=this.i=0;this.j=!0;this.h=0;}q("shaka.media.PresentationTimeline",U);U.prototype.P=function(){return this.b};U.prototype.getDuration=U.prototype.P;U.prototype.ga=function(b){this.b=b;};U.prototype.setDuration=U.prototype.ga;U.prototype.ud=function(){return this.c};U.prototype.getPresentationStartTime=U.prototype.ud;U.prototype.Rc=function(b){this.l=b;};U.prototype.setClockOffset=U.prototype.Rc;
U.prototype.yb=function(b){this.j=b;};U.prototype.setStatic=U.prototype.yb;U.prototype.bc=function(b){this.f=b;};U.prototype.setSegmentAvailabilityDuration=U.prototype.bc;U.prototype.$b=function(b){this.g=b;};U.prototype.setDelay=U.prototype.$b;U.prototype.nd=function(){return this.g};U.prototype.getDelay=U.prototype.nd;U.prototype.pd=function(){return this.m};U.prototype.getInitDelay=U.prototype.pd;
U.prototype.Ya=function(b,c){0!=b.length&&(c&&(this.i=Math.max(this.i,b[0].startTime)),this.a=b.reduce(function(b,c){return Math.max(b,c.endTime-c.startTime)},this.a));};U.prototype.notifySegments=U.prototype.Ya;U.prototype.wb=function(b){this.a=Math.max(this.a,b);};U.prototype.notifyMaxSegmentDuration=U.prototype.wb;U.prototype.N=function(){return Infinity==this.b&&!this.j};U.prototype.isLive=U.prototype.N;U.prototype.ya=function(){return Infinity!=this.b&&!this.j};U.prototype.isInProgress=U.prototype.ya;
U.prototype.Ja=function(){if(Infinity==this.f)return this.h;var b=this.xa()-this.f;return Math.max(this.h,b)};U.prototype.getSegmentAvailabilityStart=U.prototype.Ja;U.prototype.Sc=function(b){this.h=b;};U.prototype.setUserSeekStart=U.prototype.Sc;U.prototype.xa=function(){return this.N()||this.ya()?Math.min(nf(this),this.b):this.b};U.prototype.getSegmentAvailabilityEnd=U.prototype.xa;
U.prototype.Ua=function(b){var c=Math.max(this.i,this.h);if(Infinity==this.f)return c;var d=this.xa()-this.f;b=Math.min(d+b,this.ia());return Math.max(c,b)};U.prototype.getSafeSeekRangeStart=U.prototype.Ua;U.prototype.Ia=function(){return this.Ua(0)};U.prototype.getSeekRangeStart=U.prototype.Ia;U.prototype.ia=function(){var b=this.N()||this.ya()?this.g:0;return Math.max(0,this.xa()-b)};U.prototype.getSeekRangeEnd=U.prototype.ia;function nf(b){return Math.max(0,(Date.now()+b.l)/1E3-b.a-b.c)}
U.prototype.rc=function(){return nf(this)};U.prototype.getLiveEdge=U.prototype.rc;function of(){this.a=this.b=null;this.h=[];this.c=null;this.j=[];this.i=1;this.l={};this.m=0;this.o=new Ba(5);this.f=null;this.g=new pb;}q("shaka.dash.DashParser",of);n=of.prototype;n.configure=function(b){this.b=b;};n.start=function(b,c){this.h=[b];this.a=c;return pf(this).then(function(b){this.a&&qf(this,b);return this.c}.bind(this))};n.stop=function(){this.b=this.a=null;this.h=[];this.c=null;this.j=[];this.l={};null!=this.f&&(window.clearTimeout(this.f),this.f=null);return this.g.destroy()};
n.update=function(){pf(this)["catch"](function(b){if(this.a)this.a.onError(b);}.bind(this));};n.onExpirationUpdated=function(){};function pf(b){var c=Date.now(),d=b.a.networkingEngine.request(0,B(b.h,b.b.retryParameters));qb(b.g,d);return d.promise.then(function(c){if(b.a)return rf(b,c.data,c.uri)}).then(function(){var d=(Date.now()-c)/1E3;Ca(b.o,1,d);return d})}
function rf(b,c,d){c=Be(c,"MPD");if(!c)throw new u(2,4,4001,d);c=De(c,b.b.retryParameters,b.b.dash.xlinkFailGracefully,d,b.a.networkingEngine);qb(b.g,c);return c.promise.then(function(c){return sf(b,c,d)})}
function sf(b,c,d){function e(b,c){b=b.replace(/[[\]]/g,"\\$&");var d=(new RegExp("[?&]"+b+"(=([^&#]*)|&|#|$)")).exec(c);return d?d[2]?decodeURIComponent(d[2].replace(/\+/g," ")):"":null}var f=[d],g=M(c,"Location").map(ke).filter(Eb);0<g.length&&(f=b.h=g);g=M(c,"BaseURL").map(ke);f=F(f,g);var h=N(c,"minBufferTime",me);b.m=N(c,"minimumUpdatePeriod",me,-1);var k=N(c,"availabilityStartTime",le);g=c.getAttribute("type")||"static";"dynamic"===g&&-1!==d.indexOf("&time_shift=")&&(d=e("time_shift",d))&&(k+=
parseInt(d,10));d=N(c,"timeShiftBufferDepth",me);var l=N(c,"suggestedPresentationDelay",me),m=N(c,"maxSegmentDuration",me);if(b.c)var r=b.c.presentationTimeline;else{var t=Math.max(b.b.dash.defaultPresentationDelay,1.5*h);r=new U(k,null!=l?l:t);}k=tf(b,{va:"static"!=g,presentationTimeline:r,Z:null,M:null,S:null,w:null,bandwidth:0,uc:!1},f,c);l=k.duration;var v=k.periods;r.yb("static"==g);"static"!=g&&k.lc||r.ga(l||Infinity);r.bc(null!=d?d:Infinity);r.wb(m||1);if(b.c)return Promise.resolve();c=M(c,
"UTCTiming");g=r.N();return uf(b,f,c,g).then(function(b){this.a&&(r.Rc(b),this.c={presentationTimeline:r,periods:v,offlineSessionIds:[],minBufferTime:h||0});}.bind(b))}
function tf(b,c,d,e){var f=N(e,"mediaPresentationDuration",me),g=[],h=0;e=M(e,"Period");for(var k=0;k<e.length;k++){var l=e[k];h=N(l,"start",me,h);var m=N(l,"duration",me),r=null;if(k!=e.length-1){var t=N(e[k+1],"start",me);null!=t&&(r=t-h);}else null!=f&&(r=f-h);null==r&&(r=m);l=vf(b,c,d,{start:h,duration:r,node:l,index:k,Kb:null==r||k==e.length-1});g.push(l);m=c.Z.id;-1==b.j.indexOf(m)&&(b.j.push(m),b.c&&(b.a.filterNewPeriod(l),b.c.periods.push(l)));if(null==r){h=null;break}h+=r;}null==b.c&&b.a.filterAllPeriods(g);
return null!=f?{periods:g,duration:f,lc:!1}:{periods:g,duration:h,lc:!0}}
function vf(b,c,d,e){c.Z=wf(e.node,null,d);c.M=e;c.Z.id||(c.Z.id="__shaka_period_"+e.start);M(e.node,"EventStream").forEach(b.ie.bind(b,e.start,e.duration));d=M(e.node,"AdaptationSet").map(b.ge.bind(b,c)).filter(Eb);var f=d.map(function(b){return b.te}).reduce(Cb,[]),g=f.filter(Fb);if(c.va&&f.length!=g.length)throw new u(2,4,4018);var h=d.filter(function(b){return!b.fc});d.filter(function(b){return b.fc}).forEach(function(b){var c=b.streams[0],d=b.fc;h.forEach(function(b){b.id==d&&b.streams.forEach(function(b){b.trickModeVideo=
c;});});});d=xf(h,"video");f=xf(h,"audio");if(!d.length&&!f.length)throw new u(2,4,4004);f.length||(f=[null]);d.length||(d=[null]);c=[];for(g=0;g<f.length;g++)for(var k=0;k<d.length;k++)yf(b,f[g],d[k],c);b=xf(h,"text");d=[];for(f=0;f<b.length;f++)d.push.apply(d,b[f].streams);return{startTime:e.start,textStreams:d,variants:c}}function xf(b,c){return b.filter(function(b){return b.contentType==c})}
function yf(b,c,d,e){if(c||d)if(c&&d){var f=c.drmInfos;var g=d.drmInfos;if(f.length&&g.length?0<rc(f,g).length:1){g=rc(c.drmInfos,d.drmInfos);for(var h=0;h<c.streams.length;h++)for(var k=0;k<d.streams.length;k++)f=(d.streams[k].bandwidth||0)+(c.streams[h].bandwidth||0),f={id:b.i++,language:c.language,primary:c.Mb||d.Mb,audio:c.streams[h],video:d.streams[k],bandwidth:f,drmInfos:g,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}}else for(g=c||d,h=0;h<g.streams.length;h++)f=g.streams[h].bandwidth||
0,f={id:b.i++,language:g.language||"und",primary:g.Mb,audio:c?g.streams[h]:null,video:d?g.streams[h]:null,bandwidth:f,drmInfos:g.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}
n.ge=function(b,c){b.S=wf(c,b.Z,null);var d=!1,e=M(c,"Role"),f=e.map(function(b){return b.getAttribute("value")}).filter(Eb),g=void 0;"text"==b.S.contentType&&(g="subtitle");for(var h=0;h<e.length;h++){var k=e[h].getAttribute("schemeIdUri");if(null==k||"urn:mpeg:dash:role:2011"==k)switch(k=e[h].getAttribute("value"),k){case "main":d=!0;break;case "caption":case "subtitle":g=k;}}var l=null,m=!1;M(c,"EssentialProperty").forEach(function(b){"http://dashif.org/guidelines/trickmode"==b.getAttribute("schemeIdUri")?
l=b.getAttribute("value"):m=!0;});if(m)return null;e=M(c,"ContentProtection");var r=te(e,this.b.dash.customScheme,this.b.dash.ignoreDrmInfo);e=gd(c.getAttribute("lang")||"und");k=c.getAttribute("label");h=M(c,"Representation");f=h.map(this.je.bind(this,b,r,g,e,k,d,f)).filter(function(b){return!!b});if(0==f.length)throw new u(2,4,4003);b.S.contentType&&"application"!=b.S.contentType||(b.S.contentType=zf(f[0].mimeType,f[0].codecs),f.forEach(function(c){c.type=b.S.contentType;}));f.forEach(function(b){r.drmInfos.forEach(function(c){b.keyId&&
c.keyIds.push(b.keyId);});});g=h.map(function(b){return b.getAttribute("id")}).filter(Eb);return{id:b.S.id||"__fake__"+this.i++,contentType:b.S.contentType,language:e,Mb:d,streams:f,drmInfos:r.drmInfos,fc:l,te:g}};
n.je=function(b,c,d,e,f,g,h,k){b.w=wf(k,b.S,null);if(!Af(b.w))return null;b.bandwidth=N(k,"bandwidth",pe)||0;var l=this.ue.bind(this);if(b.w.ab)l=Xe(b,l);else if(b.w.pa)l=$e(b,this.l);else if(b.w.cb)l=df(b,l,this.l,!!this.c);else{var m=b.w.ca,r=b.M.duration||0;l={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0<=b&&b<r?1:null},getSegmentReference:function(b){return 1!=b?null:new P(1,0,r,function(){return m},0,null)},initSegmentReference:null,aa:0};}k=M(k,"ContentProtection");
k=we(k,this.b.dash.customScheme,c,this.b.dash.ignoreDrmInfo);return{id:this.i++,createSegmentIndex:l.createSegmentIndex,findSegmentPosition:l.findSegmentPosition,getSegmentReference:l.getSegmentReference,initSegmentReference:l.initSegmentReference,presentationTimeOffset:l.aa,mimeType:b.w.mimeType,codecs:b.w.codecs,frameRate:b.w.frameRate,bandwidth:b.bandwidth,width:b.w.width,height:b.w.height,kind:d,encrypted:0<c.drmInfos.length,keyId:k,language:e,label:f,type:b.S.contentType,primary:g,trickModeVideo:null,
containsEmsgBoxes:b.w.containsEmsgBoxes,roles:h,channelsCount:b.w.Qb}};n.Qe=function(){null!=this.f&&(window.clearTimeout(this.f),this.f=null);pf(this).then(function(b){this.a&&qf(this,b);}.bind(this))["catch"](function(b){this.a&&(b.severity=1,this.a.onError(b),qf(this,0));}.bind(this));};function qf(b,c){0>b.m||(b.f=window.setTimeout(b.Qe.bind(b),1E3*Math.max(3,b.m-c,Ea(b.o))));}
function wf(b,c,d){c=c||{contentType:"",mimeType:"",codecs:"",containsEmsgBoxes:!1,frameRate:void 0,Qb:null};d=d||c.ca;var e=M(b,"BaseURL").map(ke),f=b.getAttribute("contentType")||c.contentType,g=b.getAttribute("mimeType")||c.mimeType,h=b.getAttribute("codecs")||c.codecs,k=N(b,"frameRate",re)||c.frameRate,l=!!M(b,"InbandEventStream").length,m=M(b,"AudioChannelConfiguration");m=Bf(m)||c.Qb;f||(f=zf(g,h));return{ca:F(d,e),ab:je(b,"SegmentBase")||c.ab,pa:je(b,"SegmentList")||c.pa,cb:je(b,"SegmentTemplate")||
c.cb,width:N(b,"width",qe)||c.width,height:N(b,"height",qe)||c.height,contentType:f,mimeType:g,codecs:h,frameRate:k,containsEmsgBoxes:l||c.containsEmsgBoxes,id:b.getAttribute("id"),Qb:m}}
function Bf(b){for(var c=0;c<b.length;++c){var d=b[c],e=d.getAttribute("schemeIdUri");if(e&&(d=d.getAttribute("value")))switch(e){case "urn:mpeg:dash:outputChannelPositionList:2012":return d.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":e=parseInt(d,10);if(!e)continue;return e;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":if(e=parseInt(d,
16)){for(b=0;e;)e&1&&++b,e>>=1;return b}}}return null}function Af(b){var c=b.ab?1:0;c+=b.pa?1:0;c+=b.cb?1:0;if(0==c)return"text"==b.contentType||"application"==b.contentType?!0:!1;1!=c&&(b.ab&&(b.pa=null),b.cb=null);return!0}
function Cf(b,c,d,e){c=F(c,[d]);c=B(c,b.b.retryParameters);c.method=e;c=b.a.networkingEngine.request(0,c);qb(b.g,c);return c.promise.then(function(b){if("HEAD"==e){if(!b.headers||!b.headers.date)return 0;b=b.headers.date;}else b=G(b.data);b=Date.parse(b);return isNaN(b)?0:b-Date.now()})}
function uf(b,c,d,e){d=d.map(function(b){return{scheme:b.getAttribute("schemeIdUri"),value:b.getAttribute("value")}});var f=b.b.dash.clockSyncUri;e&&!d.length&&f&&d.push({scheme:"urn:mpeg:dash:utc:http-head:2014",value:f});return Bb(d,function(b){var d=b.value;switch(b.scheme){case "urn:mpeg:dash:utc:http-head:2014":case "urn:mpeg:dash:utc:http-head:2012":return Cf(this,c,d,"HEAD");case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return Cf(this,
c,d,"GET");case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return b=Date.parse(d),isNaN(b)?0:b-Date.now();case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":return Promise.reject();default:return Promise.reject()}}.bind(b))["catch"](function(){return 0})}
n.ie=function(b,c,d){var e=d.getAttribute("schemeIdUri")||"",f=d.getAttribute("value")||"",g=N(d,"timescale",qe)||1;M(d,"Event").forEach(function(d){var h=N(d,"presentationTime",qe)||0,l=N(d,"duration",qe)||0;h=h/g+b;l=h+l/g;null!=c&&(h=Math.min(h,b+c),l=Math.min(l,b+c));d={schemeIdUri:e,value:f,startTime:h,endTime:l,id:d.getAttribute("id")||"",eventElement:d};this.a.onTimelineRegionAdded(d);}.bind(this));};
n.ue=function(b,c,d){b=B(b,this.b.retryParameters);null!=c&&(b.headers.Range="bytes="+c+"-"+(null!=d?d:""));c=this.a.networkingEngine.request(1,b);qb(this.g,c);return c.promise.then(function(b){return b.data})};function zf(b,c){return I[Mb(b,c)]?"text":b.split("/")[0]}kf.mpd=of;jf["application/dash+xml"]=of;function Df(b,c,d,e){this.uri=b;this.type=c;this.a=d;this.segments=e||null;}function Ef(b,c,d,e){this.id=b;this.name=c;this.a=d;this.value=e||null;}Ef.prototype.toString=function(){function b(b){return b.name+'="'+b.value+'"'}return this.value?"#"+this.name+":"+this.value:0<this.a.length?"#"+this.name+":"+this.a.map(b).join(","):"#"+this.name};function Ff(b,c){this.name=b;this.value=c;}Ef.prototype.getAttribute=function(b){var c=this.a.filter(function(c){return c.name==b});return c.length?c[0]:null};
function Gf(b,c,d){d=d||null;return(b=b.getAttribute(c))?b.value:d}function Hf(b,c){this.a=c;this.uri=b;}function If(b,c){return b.filter(function(b){return b.name==c})}function Jf(b,c){var d=If(b,c);return d.length?d[0]:null}function Kf(b,c,d){return b.filter(function(b){var e=b.getAttribute("TYPE");b=b.getAttribute("GROUP-ID");return e.value==c&&b.value==d})}function Lf(b,c){return F([b],[c])[0]}function Mf(b){this.b=b;this.a=0;}function Nf(b){Of(b,/[ \t]+/gm);}function Of(b,c){c.lastIndex=b.a;var d=c.exec(b.b);d=null==d?null:{position:d.index,length:d[0].length,we:d};if(b.a==b.b.length||null==d||d.position!=b.a)return null;b.a+=d.length;return d.we}function Pf(b){return b.a==b.b.length?null:(b=Of(b,/[^ \t\n]*/gm))?b[0]:null}function Qf(){this.a=0;}
function Rf(b,c,d){c=G(c);c=c.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n").trim();var e=c.split(/\n+/m);if(!/^#EXTM3U($|[ \t\n])/m.test(e[0]))throw new u(2,4,4015);c=0;for(var f=1;f<e.length;f++)if(!/^#(?!EXT)/m.test(e[f])){var g=Sf(b,e[f]);--b.a;if(0<=Tf.indexOf(g.name)){c=1;break}else"EXT-X-STREAM-INF"==g.name&&(f+=1);}f=[];for(g=1;g<e.length;)if(/^#(?!EXT)/m.test(e[g]))g+=1;else{var h=Sf(b,e[g]);if(0<=Uf.indexOf(h.name)){if(1!=c)throw new u(2,4,4017);e=e.splice(g,e.length-g);b=Vf(b,e,f);return new Df(d,
c,f,b)}f.push(h);g+=1;"EXT-X-STREAM-INF"==h.name&&(h.a.push(new Ff("URI",e[g])),g+=1);}return new Df(d,c,f)}function Vf(b,c,d){var e=[],f=[];c.forEach(function(c){if(/^(#EXT)/.test(c))c=Sf(b,c),0<=Tf.indexOf(c.name)?d.push(c):f.push(c);else{if(/^#(?!EXT)/m.test(c))return[];e.push(new Hf(c.trim(),f));f=[];}});return e}
function Sf(b,c){a:{var d=b.a++;var e=c.match(/^#(EXT[^:]*)(?::(.*))?$/);if(!e)throw new u(2,4,4016,c);var f=e[1],g=e[2];e=[];if(g&&0<=g.indexOf("=")){g=new Mf(g);for(var h,k=/([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;h=Of(g,k);)e.push(new Ff(h[1],h[2]||h[3]));}else if(g){d=new Ef(d,f,e,g);break a}d=new Ef(d,f,e);}return d}var Tf="EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(" "),Uf="EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");function Wf(b){try{var c=Wf.parse(b);return cb({uri:b,data:c.data,headers:{"content-type":c.contentType}})}catch(d){return ab(d)}}q("shaka.net.DataUriPlugin",Wf);
Wf.parse=function(b){var c=b.split(":");if(2>c.length||"data"!=c[0])throw new u(2,1,1004,b);c=c.slice(1).join(":").split(",");if(2>c.length)throw new u(2,1,1004,b);var d=c[0];c=window.decodeURIComponent(c.slice(1).join(","));d=d.split(";");var e=null;1<d.length&&(e=d[1]);if("base64"==e)b=Wb(c).buffer;else{if(e)throw new u(2,1,1005,b);b=Rb(c);}return{data:b,contentType:d[0]}};sb("data",Wf);function Xf(){this.h=this.c=null;this.K=1;this.v={};this.G={};this.R={};this.a={};this.b=null;this.l="";this.u=new Qf;this.j=this.i=null;this.f=Yf;this.m=null;this.g=0;this.A=Infinity;this.o=new pb;}q("shaka.hls.HlsParser",Xf);n=Xf.prototype;n.configure=function(b){this.h=b;};n.start=function(b,c){this.c=c;this.l=b;return Zf(this,b).then(function(c){return $f(this,c.data,b).then(function(){ag(this,this.i);return this.m}.bind(this))}.bind(this))};
n.stop=function(){this.h=this.c=null;this.v={};this.G={};this.m=null;return this.o.destroy()};n.update=function(){if(this.f!=bg.ma){var b=[],c;for(c in this.a)b.push(cg(this,this.a[c],c));return Promise.all(b)}};
function cg(b,c,d){Zf(b,d).then(function(b){var e=bg,g=Rf(this.u,b.data,d);if(1!=g.type)throw new u(2,4,4017);b=Jf(g.a,"EXT-X-MEDIA-SEQUENCE");var h=c.stream;fg(this,g,b?Number(b.value):0,h.mimeType,h.codecs).then(function(b){c.bb.replace(b);b=b[b.length-1];Jf(g.a,"EXT-X-ENDLIST")&&(gg(this,e.ma),this.b.ga(b.endTime));}.bind(this));}.bind(b));}n.onExpirationUpdated=function(){};
function $f(b,c,d){c=Rf(b.u,c,d);if(0!=c.type)throw new u(2,4,4022);return hg(b,c).then(function(b){this.c.filterAllPeriods([b]);var c=Infinity,d=0,e=0,k=Infinity;for(m in this.a){var l=this.a[m];c=Math.min(c,l.Pb);d=Math.max(d,l.Pb);e=Math.max(e,l.Ed);"text"!=l.stream.type&&(k=Math.min(k,l.duration));}var m=null;l=0;this.f!=bg.ma&&(m=Date.now()/1E3-e,l=3*this.g);this.b=new U(m,l);this.b.yb(this.f==bg.ma);this.b.wb(this.g);if(this.f!=bg.ma){c=3*this.g;this.b.$b(c);this.i=this.A;this.f==bg.hc&&this.b.bc(c);
for(c=0;95443.7176888889<=d;)c+=95443.7176888889,d-=95443.7176888889;if(c)for(var r in this.a)d=this.a[r],95443.7176888889>d.Pb&&(d.stream.presentationTimeOffset=-c,d.bb.offset(c));}else{this.b.ga(k);for(var t in this.a)r=this.a[t],r.stream.presentationTimeOffset=c,r.bb.offset(-c),Me(r.bb,k);}this.m={presentationTimeline:this.b,periods:[b],offlineSessionIds:[],minBufferTime:0};}.bind(b))}
function hg(b,c){var d=c.a,e=If(c.a,"EXT-X-MEDIA").filter(function(b){return"SUBTITLES"==ig(b,"TYPE")}.bind(b)).map(function(b){return jg(this,b)}.bind(b));return Promise.all(e).then(function(b){var e=If(d,"EXT-X-STREAM-INF").map(function(b){return kg(this,b,c)}.bind(this));return Promise.all(e).then(function(c){return{startTime:0,variants:c.reduce(Cb,[]),textStreams:b}}.bind(this))}.bind(b))}
function kg(b,c,d){var e=Gf(c,"CODECS","avc1.42E01E,mp4a.40.2").split(","),f=c.getAttribute("RESOLUTION"),g=null,h=null,k=Gf(c,"FRAME-RATE"),l=Number(ig(c,"BANDWIDTH"));if(f){var m=f.value.split("x");g=m[0];h=m[1];}d=If(d.a,"EXT-X-MEDIA");var r=Gf(c,"AUDIO"),t=Gf(c,"VIDEO");r?d=Kf(d,"AUDIO",r):t&&(d=Kf(d,"VIDEO",t));if(m=lg("text",e)){var v=Gf(c,"SUBTITLES");v&&(v=Kf(d,"SUBTITLES",v),v.length&&(b.v[v[0].id].stream.codecs=m));e.splice(e.indexOf(m),1);}d=d.map(function(b){return mg(this,b,e)}.bind(b));
var w=[],x=[];return Promise.all(d).then(function(b){r?w=b:t&&(x=b);b=!1;if(w.length||x.length)if(w.length)if(ig(c,"URI")==w[0].Yb){var d="audio";b=!0;}else d="video";else d="audio";else 1==e.length?(d=lg("video",e),d=f||k||d?"video":"audio"):(d="video",e=[e.join(",")]);return b?Promise.resolve():ng(this,c,e,d)}.bind(b)).then(function(b){b&&("audio"==b.stream.type?w=[b]:x=[b]);x&&og(x);w&&og(w);return pg(this,w,x,l,g,h,k)}.bind(b))}
function og(b){b.forEach(function(b){var c=b.stream.codecs.split(",");c=c.filter(function(b){return"mp4a.40.34"!=b});b.stream.codecs=c.join(",");});}
function pg(b,c,d,e,f,g,h){d.forEach(function(b){if(b=b.stream)b.width=Number(f)||void 0,b.height=Number(g)||void 0,b.frameRate=Number(h)||void 0;}.bind(b));c.length||(c=[null]);d.length||(d=[null]);for(var k=[],l=0;l<c.length;l++)for(var m=0;m<d.length;m++){var r=c[l]?c[l].stream:null,t=d[m]?d[m].stream:null,v=c[l]?c[l].drmInfos:null,w=d[m]?d[m].drmInfos:null,x=void 0;if(r&&t)if(v.length&&w.length?0<rc(v,w).length:1)x=rc(v,w);else continue;else r?x=v:t&&(x=w);v=(d[l]?d[l].Yb:"")+" - "+(c[l]?c[l].Yb:
"");b.G[v]||(r=qg(b,r,t,e,x),k.push(r),b.G[v]=r);}return k}function qg(b,c,d,e,f){return{id:b.K++,language:c?c.language:"und",primary:!!c&&c.primary||!!d&&d.primary,audio:c,video:d,bandwidth:e,drmInfos:f,allowedByApplication:!0,allowedByKeySystem:!0}}function jg(b,c){ig(c,"TYPE");return mg(b,c,[]).then(function(b){return b.stream})}
function mg(b,c,d){var e=ig(c,"URI");e=Lf(b.l,e);if(b.a[e])return Promise.resolve(b.a[e]);var f=ig(c,"TYPE").toLowerCase();"subtitles"==f&&(f="text");var g=gd(Gf(c,"LANGUAGE","und")),h=Gf(c,"NAME"),k=c.getAttribute("DEFAULT"),l=c.getAttribute("AUTOSELECT"),m=Gf(c,"CHANNELS");return rg(b,e,d,f,g,!!k||!!l,h,"audio"==f?sg(m):null).then(function(b){if(this.a[e])return this.a[e];this.v[c.id]=b;return this.a[e]=b}.bind(b))}function sg(b){if(!b)return null;b=b.split("/")[0];return parseInt(b,10)}
function ng(b,c,d,e){var f=ig(c,"URI");f=Lf(b.l,f);return b.a[f]?Promise.resolve(b.a[f]):rg(b,f,d,e,"und",!1,null,null).then(function(b){return this.a[f]?this.a[f]:this.a[f]=b}.bind(b))}
function rg(b,c,d,e,f,g,h,k){var l=c;c=Lf(b.l,c);var m,r="",t;return Zf(b,c).then(function(b){m=Rf(this.u,b.data,c);if(1!=m.type)throw new u(2,4,4017);b=m;var f=bg,g=Jf(b.a,"EXT-X-PLAYLIST-TYPE"),h=Jf(b.a,"EXT-X-ENDLIST");h=g&&"VOD"==g.value||h;g=g&&"EVENT"==g.value&&!h;g=!h&&!g;h?gg(this,f.ma):(g?gg(this,f.hc):gg(this,f.Xc),b=tg(b.a,"EXT-X-TARGETDURATION"),b=Number(b.value),this.g=Math.max(b,this.g),this.A=Math.min(b,this.A));if(1==d.length)r=d[0];else if(b=lg(e,d),null!=b)r=b;else throw new u(2,
4,4025,d);return ug(this,e,r,m)}.bind(b)).then(function(b){t=b;b=Jf(m.a,"EXT-X-MEDIA-SEQUENCE");return fg(this,m,b?Number(b.value):0,t,r)}.bind(b)).then(function(b){var c=b[0].startTime,d=b[b.length-1].endTime,v=d-c;b=new T(b);var Ra=vg(m),dg=void 0;"text"==e&&(dg="subtitle");var Gd=[];m.segments.forEach(function(b){b=If(b.a,"EXT-X-KEY");Gd.push.apply(Gd,b);});var jb=!1,kb=[],eg=null;Gd.forEach(function(b){if("NONE"!=ig(b,"METHOD")){jb=!0;var c=ig(b,"KEYFORMAT");if(b=(c=wg[c])?c(b):null)b.keyIds.length&&
(eg=b.keyIds[0]),kb.push(b);}});if(jb&&!kb.length)throw new u(2,4,4026);Ra={id:this.K++,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:b.find.bind(b),getSegmentReference:b.get.bind(b),initSegmentReference:Ra,presentationTimeOffset:0,mimeType:t,codecs:r,kind:dg,encrypted:jb,keyId:eg,language:f,label:h||null,type:e,primary:g,trickModeVideo:null,containsEmsgBoxes:!1,frameRate:void 0,width:void 0,height:void 0,bandwidth:void 0,roles:[],channelsCount:k};this.R[Ra.id]=b;return{stream:Ra,
bb:b,drmInfos:kb,Yb:l,Pb:c,Ed:d,duration:v}}.bind(b))}function vg(b){var c=If(b.a,"EXT-X-MAP");if(!c.length)return null;if(1<c.length)throw new u(2,4,4020);c=c[0];var d=ig(c,"URI"),e=Lf(b.uri,d);b=0;d=null;if(c=Gf(c,"BYTERANGE"))b=c.split("@"),c=Number(b[0]),b=Number(b[1]),d=b+c-1;return new O(function(){return[e]},b,d)}
function xg(b,c,d,e,f){var g=d.a,h=Lf(b.uri,d.uri);b=tg(g,"EXTINF").value.split(",");b=f+Number(b[0]);d=0;var k=null;if(g=Jf(g,"EXT-X-BYTERANGE"))d=g.value.split("@"),g=Number(d[0]),d=d[1]?Number(d[1]):c.a+1,k=d+g-1;return new P(e,f,b,function(){return[h]},d,k)}
function fg(b,c,d,e,f){var g=c.segments,h=[],k=Lf(c.uri,g[0].uri),l=xg(c,null,g[0],d,0),m=vg(c);return yg(b,c.uri,m,l,e,f).then(function(b){k.split("/").pop();for(var e=0;e<g.length;++e){var f=h[h.length-1];f=xg(c,f,g[e],d+e,0==e?b:f.endTime);h.push(f);}return h}.bind(b))}
function zg(b,c){var d=b.c.networkingEngine,e=B(c.c(),b.h.retryParameters),f={},g=c.b;f.Range="bytes="+g+"-"+(g+2048-1);var h={};if(0!=g||null!=c.a)g="bytes="+g+"-",null!=c.a&&(g+=c.a),h.Range=g;e.headers=f;f=d.request(1,e);qb(b.o,f);return f.promise["catch"](function(){Ga("Unable to fetch a partial HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",e.uris[0]);e.headers=h;return d.request(1,e)})}
function yg(b,c,d,e,f,g){if(b.m&&(c=b.a[c].bb.get(e.position)))return Promise.resolve(c.startTime);e=[zg(b,e)];if("video/mp4"==f||"audio/mp4"==f)d?e.push(zg(b,d)):e.push(e[0]);return Promise.all(e).then(function(b){if("video/mp4"==f||"audio/mp4"==f)return Ag(b[0].data,b[1].data);if("audio/mpeg"==f)return 0;if("video/mp2t"==f)return Bg(b[0].data);if("application/mp4"==f||0==f.indexOf("text/")){b=b[0].data;var c=Mb(f,g);if(I[c]){var d=new Pc(null);d.f=new I[c];b=d.Jb(b);}else b=0;return b}throw new u(2,
4,4030);}.bind(b))}function Ag(b,c){var d=0;(new R).C("moov",S).C("trak",S).C("mdia",S).V("mdhd",function(b){b.s.D(0==b.version?8:16);d=b.s.B();b.na.stop();}).parse(c,!0);if(!d)throw new u(2,4,4030);var e=0,f=!1;(new R).C("moof",S).C("traf",S).V("tfdt",function(b){e=(0==b.version?b.s.B():b.s.Pa())/d;f=!0;b.na.stop();}).parse(b,!0);if(!f)throw new u(2,4,4030);return e}
function Bg(b){function c(){throw new u(2,4,4030);}b=new Q(new DataView(b),0);for(var d=0,e=0;;)if(d=b.U(),e=b.$(),71!=e&&c(),b.$a()&16384||c(),e=(b.$()&48)>>4,0!=e&&2!=e||c(),3==e&&(e=b.$(),b.D(e)),1!=b.B()>>8)b.seek(d+188),e=b.$(),71!=e&&(b.seek(d+192),e=b.$()),71!=e&&(b.seek(d+204),e=b.$()),71!=e&&c(),b.Oc(1);else return b.D(3),d=b.$()>>6,0!=d&&1!=d||c(),0==b.$()&&c(),d=b.$(),e=b.$a(),b=b.$a(),(1073741824*((d&14)>>1)+((e&65534)<<14|(b&65534)>>1))/9E4}
function lg(b,c){for(var d=Cg[b],e=0;e<d.length;e++)for(var f=0;f<c.length;f++)if(d[e].test(c[f].trim()))return c[f].trim();return"text"==b?"":null}
function ug(b,c,d,e){e=Lf(e.uri,e.segments[0].uri);var f=(new Ja(e)).Y.split(".").pop(),g=Dg[c][f];if(g)return Promise.resolve(g);if("text"==c)return d&&"vtt"!=d?Promise.resolve("application/mp4"):Promise.resolve("text/vtt");c=B([e],b.h.retryParameters);c.method="HEAD";c=b.c.networkingEngine.request(1,c);qb(b.o,c);return c.promise.then(function(b){b=b.headers["content-type"];if(!b)throw new u(2,4,4021,f);return b.split(";")[0]})}
function ig(b,c){var d=b.getAttribute(c);if(!d)throw new u(2,4,4023,c);return d.value}function tg(b,c){var d=Jf(b,c);if(!d)throw new u(2,4,4024,c);return d}function Zf(b,c){var d=b.c.networkingEngine.request(0,B([c],b.h.retryParameters));qb(b.o,d);return d.promise}
var Cg={audio:[/^vorbis$/,/^opus$/,/^flac$/,/^mp4a/,/^[ae]c-3$/],video:[/^avc/,/^hev/,/^hvc/,/^vp0?[89]/,/^av1$/],text:[/^vtt$/,/^wvtt/,/^stpp/]},Dg={audio:{mp4:"audio/mp4",m4s:"audio/mp4",m4i:"audio/mp4",m4a:"audio/mp4",ts:"video/mp2t"},video:{mp4:"video/mp4",m4s:"video/mp4",m4i:"video/mp4",m4v:"video/mp4",ts:"video/mp2t"},text:{mp4:"application/mp4",m4s:"application/mp4",m4i:"application/mp4",vtt:"text/vtt",ttml:"application/ttml+xml"}};
Xf.prototype.L=function(){this.c&&(this.j=null,this.update().then(function(){ag(this,this.i);}.bind(this))["catch"](function(b){this.c&&(b.severity=1,this.c.onError(b),ag(this,0));}.bind(this)));};function ag(b,c){null!=b.i&&null!=c&&(b.j=window.setTimeout(b.L.bind(b),1E3*c));}function gg(b,c){b.f=c;b.b&&b.b.yb(b.f==bg.ma);b.f==bg.ma&&null!=b.j&&(window.clearTimeout(b.j),b.j=null,b.i=null);}
var wg={"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":function(b){var c=ig(b,"METHOD");if("SAMPLE-AES-CENC"!=c&&"SAMPLE-AES-CTR"!=c)return null;c=ig(b,"URI");c=Wf.parse(c);c=new Uint8Array(c.data);c=Gb("com.widevine.alpha",[{initDataType:"cenc",initData:c}]);if(b=Gf(b,"KEYID"))c.keyIds=[b.substr(2).toLowerCase()];return c}},Yf="VOD",bg={ma:Yf,Xc:"EVENT",hc:"LIVE"};kf.m3u8=Xf;jf["application/x-mpegurl"]=Xf;jf["application/vnd.apple.mpegurl"]=Xf;function Eg(b,c,d,e){this.a=b;this.u=c;this.o=d;this.v=e;this.h=new C;this.b=null;this.g=!1;this.m=b.readyState;this.c=!1;this.j=this.A=-1;this.f=this.i=!1;c=this.l.bind(this);D(this.h,b,"waiting",c);this.b=new Sb(c);Ub(this.b,.25);}Eg.prototype.destroy=function(){var b=this.h.destroy();this.v=this.u=this.a=this.h=null;null!=this.b&&(this.b.cancel(),this.b=null);return b};Eg.prototype.Za=function(){this.f=!0;this.l();};
Eg.prototype.l=function(){if(0!=this.a.readyState){if(this.a.seeking){if(!this.g)return}else this.g=!1;if(!this.a.paused){this.a.readyState!=this.m&&(this.c=!1,this.m=this.a.readyState);var b=this.o.smallGapLimit,c=this.a.currentTime,d=this.a.buffered;a:{if(d&&d.length&&!(1==d.length&&1E-6>d.end(0)-d.start(0))){var e=.1;/(Edge\/|Trident\/|Tizen)/.test(navigator.userAgent)&&(e=.5);for(var f=0;f<d.length;f++)if(d.start(f)>c&&(0==f||d.end(f-1)-c<=e)){e=f;break a}}e=null;}if(null==e){if(d=this.a.currentTime,
c=this.a.buffered,3>this.a.readyState&&0<this.a.playbackRate)if(this.j!=d)this.j=d,this.A=Date.now(),this.i=!1;else if(!this.i&&this.A<Date.now()-1E3)for(e=0;e<c.length;e++)if(d>=c.start(e)&&d<c.end(e)-.5){this.a.currentTime+=.1;this.j=this.a.currentTime;this.i=!0;break}}else if(0!=e||this.f){f=d.start(e);var g=this.u.presentationTimeline.ia();if(!(f>=g)){g=f-c;b=g<=b;var h=!1;.001>g||(b||this.c||(this.c=!0,c=new E("largegap",{currentTime:c,gapSize:g}),c.cancelable=!0,this.v(c),this.o.jumpLargeGaps&&
!c.defaultPrevented&&(h=!0)),!b&&!h)||(0!=e&&d.end(e-1),this.a.currentTime=f);}}}}};function Fg(b,c,d){this.a=b;this.i=c;this.h=d;this.c=new C;this.f=1;this.g=!1;this.b=null;0<b.readyState?this.Dc():Ab(this.c,b,"loadedmetadata",this.Dc.bind(this));D(this.c,b,"ratechange",this.Vd.bind(this));}n=Fg.prototype;n.destroy=function(){var b=this.c.destroy();this.c=null;null!=this.b&&(this.b.cancel(),this.b=null);this.i=this.a=null;return b};function Gg(b){return 0<b.a.readyState?b.a.currentTime:b.h}function Hg(b,c){0<b.a.readyState?Ig(b,b.a.currentTime,c):(b.h=c,setTimeout(b.i,0));}n.Ta=function(){return this.f};
function Jg(b,c){null!=b.b&&(b.b.cancel(),b.b=null);b.f=c;b.a.playbackRate=b.g||0>c?0:c;!b.g&&0>c&&(b.b=new Sb(function(){b.a.currentTime+=c/4;}),Ub(b.b,.25));}n.Vd=function(){var b=this.g||0>this.f?0:this.f;this.a.playbackRate&&this.a.playbackRate!=b&&Jg(this,this.a.playbackRate);};n.Dc=function(){.001>Math.abs(this.a.currentTime-this.h)?this.Ec():(Ab(this.c,this.a,"seeking",this.Ec.bind(this)),this.a.currentTime=0==this.a.currentTime?this.h:this.a.currentTime);};
n.Ec=function(){var b=this;D(this.c,this.a,"seeking",function(){return b.i()});};function Ig(b,c,d){function e(){!b.a||10<=f++||b.a.currentTime!=c||(b.a.currentTime=d,setTimeout(e,100));}b.a.currentTime=d;var f=0;setTimeout(e,100);}function Kg(b,c,d,e,f,g){this.c=b;this.b=c;this.h=d;this.i=f;this.f=null;this.g=new Eg(b,c,d,g);c=this.Xd.bind(this);d=this.b.presentationTimeline;null==e?e=Infinity>d.P()?d.Ia():d.ia():0>e&&(e=d.ia()+e);e=Lg(this,Mg(this,e));this.a=new Fg(b,c,e);this.f=new Sb(this.Ud.bind(this));Ub(this.f,.25);}n=Kg.prototype;n.destroy=function(){var b=Promise.all([this.a.destroy(),this.g.destroy()]);this.g=this.a=null;null!=this.f&&(this.f.cancel(),this.f=null);this.i=this.h=this.b=this.c=null;return b};
function Ng(b){var c=Gg(b.a);0<b.c.readyState&&(b.c.paused||(c=Mg(b,c)));return c}n.Ta=function(){return this.a.Ta()};n.Za=function(){this.g.Za();};n.Ud=function(){if(0!=this.c.readyState&&!this.c.paused){var b=this.c.currentTime,c=this.b.presentationTimeline,d=c.Ia();c=c.ia();3>c-d&&(d=c-3);b<d&&(b=Og(this,b),this.c.currentTime=b);}};n.Xd=function(){var b=this.g;b.g=!0;b.f=!1;b.c=!1;b=Gg(this.a);var c=Og(this,b);.001<Math.abs(c-b)?Hg(this.a,c):this.i();};
function Lg(b,c){var d=b.b.presentationTimeline.P();return c>=d?d-b.h.durationBackoff:c}function Og(b,c){var d=tc.bind(null,b.c.buffered),e=Math.max(b.b.minBufferTime||0,b.h.rebufferingGoal),f=b.b.presentationTimeline,g=f.Ia(),h=f.ia(),k=f.P();3>h-g&&(g=h-3);var l=f.Ua(e),m=f.Ua(5);e=f.Ua(e+5);return c>=k?Lg(b,c):c>h?h:c<g?d(m)?m:e:c>=l||d(c)?c:e}function Mg(b,c){var d=b.b.presentationTimeline.Ia();if(c<d)return d;d=b.b.presentationTimeline.ia();return c>d?d:c}function Pg(b,c,d,e,f,g,h){this.a=b;this.v=c;this.g=d;this.u=e;this.l=f;this.h=g;this.A=h;this.c=[];this.j=new C;this.b=!1;this.i=-1;this.f=null;Qg(this);}Pg.prototype.destroy=function(){var b=this.j?this.j.destroy():Promise.resolve();this.j=null;Rg(this);this.A=this.h=this.l=this.u=this.g=this.v=this.a=null;this.c=[];return b};
Pg.prototype.o=function(b){if(!this.c.some(function(c){return c.info.schemeIdUri==b.schemeIdUri&&c.info.startTime==b.startTime&&c.info.endTime==b.endTime})){var c={info:b,status:1};this.c.push(c);var d=new E("timelineregionadded",{detail:Sg(b)});this.h(d);this.m(!0,c);}};function Sg(b){var c=nb(b);c.eventElement=b.eventElement;return c}
Pg.prototype.m=function(b,c){var d=c.info.startTime>this.a.currentTime?1:c.info.endTime<this.a.currentTime?3:2,e=2==c.status,f=2==d;if(d!=c.status){if(!b||e||f)e||this.h(new E("timelineregionenter",{detail:Sg(c.info)})),f||this.h(new E("timelineregionexit",{detail:Sg(c.info)}));c.status=d;}};function Qg(b){Rg(b);b.f=window.setTimeout(b.G.bind(b),250);}function Rg(b){b.f&&(window.clearTimeout(b.f),b.f=null);}
Pg.prototype.G=function(){this.f=null;Qg(this);var b=Cd(this.g,this.a.currentTime);b!=this.i&&(-1!=this.i&&this.A(),this.i=b);b=uc(this.a.buffered,this.a.currentTime);var c=sc(this.a.buffered),d=this.g.presentationTimeline,e=d.xa();c=d.N()&&c>=e;d=this.v;d=d.g?"ended"==d.g.readyState:!0;c=c||this.a.ended||d;this.b?(d=Math.max(this.g.minBufferTime||0,this.u.rebufferingGoal),(c||b>=d)&&0!=this.b&&(this.b=!1,this.l(!1))):!c&&.5>b&&1!=this.b&&(this.b=!0,this.l(!0));this.c.forEach(this.m.bind(this,!1));};function Tg(b,c){this.a=c;this.b=b;this.g=null;this.i=1;this.m=Promise.resolve();this.h=[];this.j={};this.c={};this.o=!1;this.A=null;this.v=this.f=this.l=!1;this.u=0;}n=Tg.prototype;n.destroy=function(){for(var b in this.c)Ug(this.c[b]);this.g=this.c=this.j=this.h=this.m=this.b=this.a=null;this.f=!0;return Promise.resolve()};
n.configure=function(b){this.g=b;this.A=new Ya({maxAttempts:Math.max(b.retryParameters.maxAttempts,2),baseDelay:b.retryParameters.baseDelay,backoffFactor:b.retryParameters.backoffFactor,fuzzFactor:b.retryParameters.fuzzFactor,timeout:0},!0);};n.init=function(){var b=Ng(this.a.Na);b=this.a.yc(this.b.periods[Cd(this.b,b)]);return b.variant||b.text?Vg(this,b).then(function(){!this.f&&this.a&&this.a.Ld&&this.a.Ld();}.bind(this)):Promise.reject(new u(2,5,5005))};
function V(b){var c=Ng(b.a.Na);return b.b.periods[Cd(b.b,c)]}function Wg(b){var c=b.c.video||b.c.audio;return c?b.b.periods[c.za]:null}function Xg(b){return Yg(b,"audio")}function Zg(b){return Yg(b,"video")}function Yg(b,c){var d=b.c[c];return d?d.oa||d.stream:null}
function $g(b,c){$c(b.a.J,"text");b.u++;b.v=!1;var d=b.u;return b.a.J.init({text:c},!1).then(function(){return ah(b,[c])}).then(function(){if(!b.f&&b.u==d&&!b.c.text&&!b.v){var e=Ng(b.a.Na);b.c.text=bh(c,Cd(b.b,e));ch(b,b.c.text,0);}})}function dh(b){b.v=!0;b.c.text&&(Ug(b.c.text),delete b.c.text);}function eh(b,c){var d=b.c.video;if(d){var e=d.stream;if(e)if(c){var f=e.trickModeVideo;f&&!d.oa&&(fh(b,f,!1),d.oa=e);}else if(e=d.oa)d.oa=null,fh(b,e,!0);}}
function gh(b,c,d){c.video&&fh(b,c.video,d);c.audio&&fh(b,c.audio,d);}function fh(b,c,d){var e=b.c[c.type];if(!e&&"text"==c.type&&b.g.ignoreTextStreamFailures)$g(b,c);else if(e){var f=Dd(b.b,c);d&&f!=e.za?hh(b):(e.oa&&(c.trickModeVideo?(e.oa=c,c=c.trickModeVideo):e.oa=null),(f=b.h[f])&&f.Qa&&(f=b.j[c.id])&&f.Qa&&e.stream!=c&&("text"==c.type&&Tc(b.a.J,Mb(c.mimeType,c.codecs)),e.stream=c,e.vb=!0,d&&(e.ua?e.zb=!0:e.Aa?(e.ra=!0,e.zb=!0):(Ug(e),ih(b,e,!0)))));}}
function jh(b){var c=Ng(b.a.Na);Object.keys(b.c).every(function(b){var d=this.a.J;"text"==b?(b=d.a,b=c>=b.a&&c<b.b):(b=Vc(d,b),b=tc(b,c));return b}.bind(b))||hh(b);}function hh(b){for(var c in b.c){var d=b.c[c];d.ua||d.ra||(d.Aa?d.ra=!0:null==Uc(b.a.J,c)?null==d.qa&&ch(b,d,0):(Ug(d),ih(b,d,!1)));}}
function Vg(b,c,d){var e=Ng(b.a.Na),f=Cd(b.b,e),g={},h=[];c.variant&&c.variant.audio&&(g.audio=c.variant.audio,h.push(c.variant.audio));c.variant&&c.variant.video&&(g.video=c.variant.video,h.push(c.variant.video));c.text&&(g.text=c.text,h.push(c.text));return b.a.J.init(g,b.g.forceTransmuxTS).then(function(){if(!b.f){var c=b.b.presentationTimeline.P();Infinity>c?b.a.J.ga(c):b.a.J.ga(Math.pow(2,32));return ah(b,h)}}).then(function(){if(!b.f)for(var c in g){var e=g[c];b.c[c]||(b.c[c]=bh(e,f,d),ch(b,
b.c[c],0));}})}function bh(b,c,d){return{stream:b,type:b.type,Ka:null,ja:null,oa:null,vb:!0,za:c,endOfStream:!1,Aa:!1,qa:null,ra:!1,zb:!1,ua:!1,Xb:!1,Va:!1,Mc:d||0}}
function kh(b,c){var d=b.h[c];if(d)return d.promise;d={promise:new y,Qa:!1};b.h[c]=d;var e=b.b.periods[c].variants.map(function(b){var c=[];b.audio&&c.push(b.audio);b.video&&c.push(b.video);b.video&&b.video.trickModeVideo&&c.push(b.video.trickModeVideo);return c}).reduce(Cb,[]).filter(Fb);e.push.apply(e,b.b.periods[c].textStreams);b.m=b.m.then(function(){if(!this.f)return ah(this,e)}.bind(b)).then(function(){this.f||(this.h[c].promise.resolve(),this.h[c].Qa=!0);}.bind(b))["catch"](function(b){this.f||
(this.h[c].promise.reject(),delete this.h[c],this.a.onError(b));}.bind(b));return d.promise}
function ah(b,c){c.map(function(b){return b.id}).filter(Fb);for(var d=[],e=0;e<c.length;++e){var f=c[e],g=b.j[f.id];g?d.push(g.promise):(b.j[f.id]={promise:new y,Qa:!1},d.push(f.createSegmentIndex()));}return Promise.all(d).then(function(){if(!this.f)for(var b=0;b<c.length;++b){var d=this.j[c[b].id];d.Qa||(d.promise.resolve(),d.Qa=!0);}}.bind(b))["catch"](function(b){if(!this.f){for(var d=0;d<c.length;d++)this.j[c[d].id].promise.reject(),delete this.j[c[d].id];return Promise.reject(b)}}.bind(b))}
n.Se=function(b){if(!this.f&&!b.Aa&&null!=b.qa&&!b.ua)if(b.qa=null,b.ra)ih(this,b,b.zb);else{try{var c=lh(this,b);null!=c&&(ch(this,b,c),b.Va=!1);}catch(d){mh(this,d);return}c=Jb(this.c);nh(this,b);c.every(function(b){return b.endOfStream})&&this.a.J.endOfStream().then(function(){if(!this.f){var b=this.a.J.P();b<this.b.presentationTimeline.P()&&this.b.presentationTimeline.ga(b);}}.bind(this));}};
function lh(b,c){var d=Ng(b.a.Na),e=oh(b,c,d),f=Dd(b.b,c.stream),g=Cd(b.b,e),h=Xc(b.a.J,c.type,d),k=Math.max(b.i*Math.max(b.b.minBufferTime||0,b.g.rebufferingGoal),b.i*b.g.bufferingGoal);if(e>=b.b.presentationTimeline.P())return c.endOfStream=!0,null;c.endOfStream=!1;c.za=g;if(g!=f)return null;if(h>=k)return.5;g=Wc(b.a.J,c.type);g=ph(b,c,d,g,f);if(!g)return 1;var l=Infinity;Jb(b.c).forEach(function(c){l=Math.min(l,oh(b,c,d));});if(e>=l+b.b.presentationTimeline.a)return 1;c.Mc=0;qh(b,c,d,f,g);return null}
function oh(b,c,d){return c.Ka&&c.ja?b.b.periods[Dd(b.b,c.Ka)].startTime+c.ja.endTime:Math.max(d,c.Mc)}function ph(b,c,d,e,f){if(c.ja&&c.stream==c.Ka)return rh(b,c,f,c.ja.position+1);d=c.ja?c.stream.findSegmentPosition(Math.max(0,b.b.periods[Dd(b.b,c.Ka)].startTime+c.ja.endTime-b.b.periods[f].startTime)):c.stream.findSegmentPosition(Math.max(0,(e||d)-b.b.periods[f].startTime));if(null==d)return null;var g=null;null==e&&(g=rh(b,c,f,Math.max(0,d-1)));return g||rh(b,c,f,d)}
function rh(b,c,d,e){d=b.b.periods[d];c=c.stream.getSegmentReference(e);if(!c)return null;e=b.b.presentationTimeline;b=e.Ja();e=e.xa();return d.startTime+c.endTime<b||d.startTime+c.startTime>e?null:c}
function qh(b,c,d,e,f){var g=b.b.periods[e],h=c.stream,k=b.b.presentationTimeline.P(),l=b.b.periods[e+1];e=sh(b,c,e,Math.max(0,g.startTime-.1),l?l.startTime:k);c.Aa=!0;c.vb=!1;k=th(b,f);Promise.all([e,k]).then(function(b){if(!this.f&&!this.l)return uh(this,c,d,g,h,f,b[1])}.bind(b)).then(function(){this.f||this.l||(c.Aa=!1,c.Xb=!1,c.ra||this.a.Za(),ch(this,c,0),vh(this,h));}.bind(b))["catch"](function(b){this.f||this.l||(c.Aa=!1,"text"==c.type&&this.g.ignoreTextStreamFailures?delete this.c.text:3017==
b.code?wh(this,c,b):(c.Va=!0,b.severity=2,mh(this,b)));}.bind(b));}function wh(b,c,d){if(!Jb(b.c).some(function(b){return b!=c&&b.Xb})){var e=Math.round(100*b.i);if(20<e)b.i-=.2;else if(4<e)b.i-=.04;else{c.Va=!0;b.l=!0;b.a.onError(d);return}c.Xb=!0;}ch(b,c,4);}
function sh(b,c,d,e,f){if(!c.vb)return Promise.resolve();d=ad(b.a.J,c.type,b.b.periods[d].startTime-c.stream.presentationTimeOffset,e,f);if(!c.stream.initSegmentReference)return d;b=th(b,c.stream.initSegmentReference).then(function(b){if(!this.f)return Yc(this.a.J,c.type,b,null,null)}.bind(b))["catch"](function(b){c.vb=!0;return Promise.reject(b)});return Promise.all([d,b])}
function uh(b,c,d,e,f,g,h){f.containsEmsgBoxes&&(new R).V("emsg",b.he.bind(b,e,g)).parse(h);return xh(b,c,d).then(function(){if(!this.f)return Yc(this.a.J,c.type,h,g.startTime,g.endTime)}.bind(b)).then(function(){if(!this.f)return c.Ka=f,c.ja=g,Promise.resolve()}.bind(b))}
n.he=function(b,c,d){var e=d.s.Vb(),f=d.s.Vb(),g=d.s.B(),h=d.s.B(),k=d.s.B(),l=d.s.B();d=d.s.Ba(d.s.F.byteLength-d.s.U());b=b.startTime+c.startTime+h/g;if("urn:mpeg:dash:event:2012"==e)this.a.Nd();else this.a.onEvent(new E("emsg",{detail:{startTime:b,endTime:b+k/g,schemeIdUri:e,value:f,timescale:g,presentationTimeDelta:h,eventDuration:k,id:l,messageData:d}}));};
function xh(b,c,d){var e=Math.max(b.g.bufferBehind,b.b.presentationTimeline.a),f=Uc(b.a.J,c.type);if(null==f)return Promise.resolve();d=d-f-e;return 0>=d?Promise.resolve():b.a.J.remove(c.type,f,f+d).then(function(){}.bind(b))}function vh(b,c){if(!b.o&&(b.o=Jb(b.c).every(function(b){return"text"==b.type?!0:!b.ra&&!b.ua&&b.ja}),b.o)){var d=Dd(b.b,c);b.h[d]||kh(b,d).then(function(){this.f||this.a.xc();}.bind(b))["catch"](Db);for(d=0;d<b.b.periods.length;++d)kh(b,d)["catch"](Db);b.a.$d&&b.a.$d();}}
function nh(b,c){if(c.za!=Dd(b.b,c.stream)){var d=c.za,e=Jb(b.c);e.every(function(b){return b.za==d})&&e.every(yh)&&kh(b,d).then(function(){if(!this.f&&e.every(function(b){var c=Dd(this.b,b.stream);return yh(b)&&b.za==d&&c!=d}.bind(this))){var b=this.b.periods[d],c=this.a.yc(b),h={};c.variant&&c.variant.video&&(h.video=c.variant.video);c.variant&&c.variant.audio&&(h.audio=c.variant.audio);c.text&&(h.text=c.text);for(var k in this.c)if(!h[k]&&"text"!=k){this.a.onError(new u(2,5,5005));return}for(var l in h)if(!this.c[l])if("text"==
l)Vg(this,{text:h.text},b.startTime),delete h[l];else{this.a.onError(new u(2,5,5005));return}for(var m in this.c)(b=h[m])?(fh(this,b,!1),ch(this,this.c[m],0)):delete this.c[m];this.a.xc();}}.bind(b))["catch"](Db);}}function yh(b){return!b.Aa&&null==b.qa&&!b.ra&&!b.ua}function th(b,c){var d=B(c.c(),b.g.retryParameters);if(0!=c.b||null!=c.a){var e="bytes="+c.b+"-";null!=c.a&&(e+=c.a);d.headers.Range=e;}return b.a.Xa.request(1,d).promise.then(function(b){return b.data})}
function ih(b,c,d){c.ra=!1;c.zb=!1;c.ua=!0;$c(b.a.J,c.type).then(function(){if(!this.f&&d)return this.a.J.flush(c.type)}.bind(b)).then(function(){this.f||(c.Ka=null,c.ja=null,c.ua=!1,c.endOfStream=!1,ch(this,c,0));}.bind(b));}function ch(b,c,d){c.qa=window.setTimeout(b.Se.bind(b,c),1E3*d);}function Ug(b){null!=b.qa&&(window.clearTimeout(b.qa),b.qa=null);}function mh(b,c){$a(b.A).then(function(){this.f||(this.a.onError(c),c.handled||this.g.failureCallback(c));}.bind(b));}function zh(b,c,d,e,f,g){if(200<=d&&299>=d&&202!=d)return f&&(e=f),{uri:e,data:c,headers:b,fromCache:!!b["x-shaka-from-cache"]};f=null;try{f=Qb(c);}catch(h){}throw new u(401==d||403==d?2:1,1,1001,e,d,f,b,g);}function W(b,c,d){var e=new W.b;Lb(c.headers,function(b,c){e.append(b,c);});var f=new W.a,g={body:c.body||void 0,headers:e,method:c.method,signal:f.signal,credentials:c.allowCrossSiteCredentials?"include":void 0},h=!1,k=!1,l;c.retryParameters.timeout&&(l=setTimeout(function(){k=!0;f.abort();},c.retryParameters.timeout));c=W.c;g=c(b,g).then(function(c){clearTimeout(l);return c.arrayBuffer().then(function(e){var f={};c.headers.forEach(function(b,c){f[c.trim()]=b;});return zh(f,e,c.status,b,c.url,d)})})["catch"](function(c){clearTimeout(l);
return h?Promise.reject(new u(1,1,7001,b,d)):k?Promise.reject(new u(1,1,1003,b,d)):void 0==c.severity?Promise.reject(new u(1,1,1002,b,c,d)):Promise.reject(c)});return new z(g,function(){h=!0;f.abort();return Promise.resolve()})}q("shaka.net.HttpFetchPlugin",W);W.isSupported=function(){return!(!window.fetch||!window.AbortController)};W.isSupported=W.isSupported;W.c=window.fetch;W.a=window.AbortController;W.b=window.Headers;W.isSupported()&&(sb("http",W,2),sb("https",W,2));function Ah(b,c,d){var e=new Ah.f,f=new Promise(function(f,h){e.open(c.method,b,!0);e.responseType="arraybuffer";e.timeout=c.retryParameters.timeout;e.withCredentials=c.allowCrossSiteCredentials;e.onabort=function(){h(new u(1,1,7001,b,d));};e.onload=function(c){c=c.target;var e=c.getAllResponseHeaders().trim().split("\r\n").reduce(function(b,c){var d=c.split(": ");b[d[0].toLowerCase()]=d.slice(1).join(": ");return b},{});try{var g=zh(e,c.response,c.status,b,c.responseURL,d);f(g);}catch(t){h(t);}};e.onerror=
function(c){h(new u(1,1,1002,b,c,d));};e.ontimeout=function(){h(new u(1,1,1003,b,d));};for(var g in c.headers)e.setRequestHeader(g.toLowerCase(),c.headers[g]);e.send(c.body);});return new z(f,function(){e.abort();return Promise.resolve()})}q("shaka.net.HttpXHRPlugin",Ah);Ah.f=window.XMLHttpRequest;sb("http",Ah,1);sb("https",Ah,1);function Bh(){this.b=null;this.a=[];}function Ch(){if(!window.indexedDB)return Promise.resolve();var b=window.indexedDB.deleteDatabase("shaka_offline_db"),c=new y;b.onsuccess=function(){c.resolve();};b.onerror=Dh.bind(null,b,c);return c}Bh.prototype.init=function(b){var c=this;return Eh(b).then(function(b){c.b=b;})};
Bh.prototype.destroy=function(){var b=this;return Promise.all(this.a.map(function(b){try{b.transaction.abort();}catch(d){}return b.promise["catch"](function(){})})).then(function(){b.b&&(b.b.close(),b.b=null);})};Bh.prototype.Sa=function(b){return Fh(this,"manifest-v3",b)};function Gh(b,c){return Hh(b,c)}function Ih(b,c,d){return Jh(b,"manifest-v3",c,d)}function Kh(b,c){return Lh(b,"segment-v3",c)}
function Fh(b,c,d){var e;return Mh(b,c,"readonly",function(b){e=b.get(d);}).then(function(){return e.result})}function Hh(b,c){return Mh(b,"manifest-v3","readonly",function(b){b.openCursor().onsuccess=function(b){if(b=b.target.result)c(b.key,b.value),b["continue"]();};})}function Nh(b,c,d){return Mh(b,"manifest-v3","readwrite",function(b){b.put(d,c);})}function Lh(b,c,d){var e;return Mh(b,c,"readwrite",function(b){b.add(d).onsuccess=function(b){e=b.target.result;};}).then(function(){return e})}
function Jh(b,c,d,e){return Mh(b,c,"readwrite",function(b){d.forEach(function(c){b["delete"](c).onsuccess=function(){e&&e(c);};});})}function Mh(b,c,d,e){var f={transaction:b.b.transaction([c],d),promise:new y};f.transaction.oncomplete=function(){b.a.splice(b.a.indexOf(f),1);f.promise.resolve();};f.transaction.onabort=function(c){b.a.splice(b.a.indexOf(f),1);Dh(f.transaction,f.promise,c);};f.transaction.onerror=Oh();c=f.transaction.objectStore(c);e(c);b.a.push(f);return f.promise}
function Ph(b,c,d){function e(){var c=g.pop();c?f(c,e):(b.reject(new u(1,9,9010,h)),d.abort());}function f(b,c){d.objectStore(b).openCursor().onsuccess=function(b){(b=b.target.result)?(h.push(b.value.originalManifestUri),b["continue"]()):c();};}var g=["manifest","manifest-v2"].filter(function(b){return c.objectStoreNames.contains(b)}),h=[];e();}function Dh(b,c,d){c.reject(b.error?new u(2,9,9001,b.error):new u(2,9,7001));d.preventDefault();}
function Eh(b){function c(){return new Promise(function(b){return setTimeout(b,1E3)})}var d=b||0,e=0<d;b=Qh(e);for(var f=0;f<d;f++)b=b.then(function(b){return b?b:c().then(function(){return Qh(e)})});return b.then(function(b){return b?b:Promise.reject(new u(2,9,9001,"Failed to issue upgrade after "+d+" retries"))})}
function Qh(b){var c=new y,d=!1,e=window.indexedDB.open("shaka_offline_db",3);e.onupgradeneeded=function(b){var e=b.target.transaction,f=e.db,k={autoIncrement:!0};0==b.oldVersion?(f.createObjectStore("manifest-v3",k),f.createObjectStore("segment-v3",k)):Ph(c,f,e);d=!0;};e.onsuccess=function(e){e=e.target.result;b&&!d?(e.close(),c.resolve(null)):c.resolve(e);};e.onerror=Oh(function(){c.reject(new u(2,9,9001,"Failed to open IndexedDB Connection",e.error.message));});return c}
function Oh(b){return function(c){c.preventDefault();b&&b(c);}}function Rh(b){this.a={};this.c=Promise.resolve();this.h=!1;this.i=b;this.f=this.b=this.g=0;}Rh.prototype.destroy=function(){this.h=!0;var b=this.c["catch"](function(){});this.c=Promise.resolve();return b};function Sh(b,c,d,e,f){b.a[c]=b.a[c]||[];b.a[c].push({request:d,mc:e,Hd:f});}
function Th(b,c){var d=Jb(b.a);b.a={};d.forEach(function(c){c.forEach(function(c){b.b+=c.mc;});});var e=Promise.resolve().then(function(){Uh(b);return Promise.all(d.map(function(d){return Vh(b,c,d)}))});b.c=b.c.then(function(){return e});return e}function Vh(b,c,d){var e=Promise.resolve();d.forEach(function(d){e=e.then(function(){Uh(b);return Wh(b,c,d)});});return e}
function Wh(b,c,d){return Promise.resolve().then(function(){Uh(b);return c.request(1,d.request).promise}).then(function(c){Uh(b);b.g+=d.mc;b.f+=c.data.byteLength;b.i(b.b?b.g/b.b:0,b.f);return d.Hd(c.data)})}function Uh(b){if(b.h)throw new u(2,9,7001);}function Xh(b,c){var d=this;this.c=b;this.b=b.objectStore(c);this.a=new y;b.onabort=function(b){b.preventDefault();d.a.reject();};b.onerror=function(b){b.preventDefault();d.a.reject();};b.oncomplete=function(){d.a.resolve();};}Xh.prototype.abort=function(){try{this.c.abort();}catch(b){}return this.a["catch"](function(){})};Xh.prototype.store=function(){return this.b};Xh.prototype.promise=function(){return this.a};function Yh(b){this.b=b;this.a=[];}Yh.prototype.destroy=function(){return Promise.all(this.a.map(function(b){return b.abort()}))};function Zh(b,c,d){d=b.b.transaction([c],d);var e=new Xh(d,c);b.a.push(e);e.promise().then(function(){ib(b.a,e);},function(){ib(b.a,e);});return e}q("shaka.offline.StorageMuxer.register",function(b,c){$h[b]=c;});q("shaka.offline.StorageMuxer.unregister",function(b){delete $h[b];});var $h={};function ai(b,c,d,e){this.a=new Yh(b);this.c=c;this.b=d;this.f=e;}n=ai.prototype;n.destroy=function(){return this.a.destroy()};n.hasFixedKeySpace=function(){return this.f};n.addSegments=function(b){return bi(this,this.c,b)};n.removeSegments=function(b){return ci(this,this.c,b)};n.getSegments=function(b){return di(this,this.c,b)};n.addManifests=function(b){return bi(this,this.b,b)};
n.updateManifestExpiration=function(b,c){var d=Zh(this.a,this.b,"readwrite"),e=d.store();e.get(b).onsuccess=function(d){if(d=d.target.result)d.expiration=c,e.put(d,b);};return d.promise()};n.removeManifests=function(b){return ci(this,this.b,b)};n.getManifests=function(b){return di(this,this.b,b)};n.getAllManifests=function(){var b=Zh(this.a,this.b,"readonly"),c={};b.store().openCursor().onsuccess=function(b){if(b=b.target.result)c[b.key]=b.value,b["continue"]();};return b.promise().then(function(){return c})};
function bi(b,c,d){if(b.f)return Promise.reject(new u(1,9,9011,"Cannot add new value to "+c));b=Zh(b.a,c,"readwrite");var e=b.store(),f=[];d.forEach(function(b){e.add(b).onsuccess=function(b){f.push(b.target.result);};});return b.promise().then(function(){return f})}function ci(b,c,d){b=Zh(b.a,c,"readwrite");var e=b.store();d.forEach(function(b){e["delete"](b);});return b.promise()}
function di(b,c,d){b=Zh(b.a,c,"readonly");var e=b.store(),f={},g=[];d.forEach(function(b){var c=e.get(b);c.onsuccess=function(){void 0==c.result&&g.push(b);f[b]=c.result;};});return b.promise().then(function(){return g.length?Promise.reject(new u(1,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}function ei(){this.c=this.b=this.a=this.f=null;}
ei.prototype.init=function(){var b=this,c=new y,d=window.indexedDB.open("shaka_offline_db",3);d.onsuccess=function(d){d=d.target.result;b.f=d;b.a=null;var e=d.objectStoreNames;e=e.contains("manifest-v2")&&e.contains("segment-v2")?new ai(d,"segment-v2","manifest-v2",!0):null;b.b=e;e=d.objectStoreNames;d=e.contains("manifest-v3")&&e.contains("segment-v3")?new ai(d,"segment-v3","manifest-v3",!1):null;b.c=d;c.resolve();};d.onupgradeneeded=function(b){b=b.target.result;var c={autoIncrement:!0};b.createObjectStore("manifest-v3",
c);b.createObjectStore("segment-v3",c);};d.onerror=function(b){c.reject(new u(2,9,9001,d.error));b.preventDefault();};return c};ei.prototype.destroy=function(){var b=this;return ka(function d(){return ya(d,function(d){switch(d.H){case 1:if(!b.a){d.X(2);break}return p(d,b.a.destroy(),2);case 2:if(!b.b){d.X(4);break}return p(d,b.b.destroy(),4);case 4:if(!b.c){d.X(6);break}return p(d,b.c.destroy(),6);case 6:b.f.close(),d.H=0;}})}())};
ei.prototype.getCells=function(){var b={};this.a&&(b.v1=this.a);this.b&&(b.v2=this.b);this.c&&(b.v3=this.c);return b};ei.prototype.erase=function(){var b=this;return ka(function d(){return ya(d,function(d){switch(d.H){case 1:if(!b.a){d.X(2);break}return p(d,b.a.destroy(),2);case 2:if(!b.b){d.X(4);break}return p(d,b.b.destroy(),4);case 4:if(!b.c){d.X(6);break}return p(d,b.c.destroy(),6);case 6:return b.f&&b.f.close(),p(d,fi(),8);case 8:return b.f=null,b.a=null,b.b=null,b.c=null,p(d,b.init(),0)}})}())};
function fi(){var b=new y,c=window.indexedDB.deleteDatabase("shaka_offline_db");c.onblocked=function(){};c.onsuccess=function(){b.resolve();};c.onerror=function(d){b.reject(new u(2,9,9001,c.error));d.preventDefault();};return b}$h.idb=function(){return new ei};function gi(b,c,d,e){this.a=b;this.c=c;this.b=d;this.g=e;this.f=["offline:",b,"/",c,"/",d,"/",e].join("");}gi.prototype.key=function(){return this.g};gi.prototype.toString=function(){return this.f};function hi(b){b=/^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(b);if(null==b)return null;var c=b[1];if("manifest"!=c&&"segment"!=c)return null;var d=b[2];if(!d)return null;var e=b[3];return e&&null!=c?new gi(c,d,e,Number(b[4])):null}function ii(b){return new gi("manifest","mechanism","cell",b)}function ji(b,c){this.b=b;this.a=c;}function ki(b,c){var d=new U(null,0);d.ga(c.duration);var e=c.periods.map(function(c){return li(b,c,d)}),f=c.drmInfo?[c.drmInfo]:[];c.drmInfo&&e.forEach(function(b){b.variants.forEach(function(b){b.drmInfos=f;});});return{presentationTimeline:d,minBufferTime:2,offlineSessionIds:c.sessionIds,periods:e}}
function li(b,c,d){var e=c.streams.filter(function(b){return"audio"==b.contentType}),f=c.streams.filter(function(b){return"video"==b.contentType});e=mi(b,e,f);f=c.streams.filter(function(b){return"text"==b.contentType}).map(function(c){return ni(b,c)});c.streams.forEach(function(c,e){var f=c.segments.map(function(c,d){return oi(b,d,c)});d.Ya(f,0==e);});return{startTime:c.startTime,variants:e,textStreams:f}}
function mi(b,c,d){var e={},f=[];f.push.apply(f,c);f.push.apply(f,d);f.forEach(function(b){b.variantIds.forEach(function(b){e[b]=e[b]||{id:b,language:"",primary:!1,audio:null,video:null,bandwidth:0,drmInfos:[],allowedByApplication:!0,allowedByKeySystem:!0};});});c.forEach(function(c){var d=ni(b,c);c.variantIds.forEach(function(b){b=e[b];b.language=d.language;b.primary=b.primary||d.primary;b.audio=d;});});d.forEach(function(c){var d=ni(b,c);c.variantIds.forEach(function(b){b=e[b];b.primary=b.primary||
d.primary;b.video=d;});});return Jb(e)}
function ni(b,c){var d=c.segments.map(function(c,d){return oi(b,d,c)}),e=new T(d);d={id:c.id,createSegmentIndex:function(){return Promise.resolve()},findSegmentPosition:function(b){return e.find(b)},getSegmentReference:function(b){return e.get(b)},initSegmentReference:null,presentationTimeOffset:c.presentationTimeOffset,mimeType:c.mimeType,codecs:c.codecs,width:c.width||void 0,height:c.height||void 0,frameRate:c.frameRate||void 0,kind:c.kind,encrypted:c.encrypted,keyId:c.keyId,language:c.language,
label:c.label||null,type:c.contentType,primary:c.primary,trickModeVideo:null,containsEmsgBoxes:!1,roles:[],channelsCount:null};null!=c.initSegmentKey&&(d.initSegmentReference=pi(b,c.initSegmentKey));return d}function oi(b,c,d){var e=new gi("segment",b.b,b.a,d.dataKey);return new P(c,d.startTime,d.endTime,function(){return[e.toString()]},0,null)}function pi(b,c){var d=new gi("segment",b.b,b.a,c);return new O(function(){return[d.toString()]},0,null)}function qi(){return ri().then(function(){var b=new Bh;return b.init().then(function(){return b})})}function si(){return ri().then(function(){return Ch()})}function ri(){return null!=window.indexedDB?Promise.resolve():Promise.reject(new u(2,9,9E3))}function ti(){this.a=null;}n=ti.prototype;n.configure=function(){};n.start=function(b){var c=this;this.a=hi(b);if(null==this.a||"manifest"!=this.a.a)return Promise.reject(new u(2,1,9004,b));var d=new ji(this.a.c,this.a.b),e;return qi().then(function(b){e=b;return e.Sa(c.a.key())}).then(function(b){if(!b)throw new u(2,9,9003,c.a.key());return ki(d,b)}).then(function(b){return e.destroy().then(function(){return b})},function(b){return e.destroy().then(function(){throw b;})})};n.stop=function(){return Promise.resolve()};
n.update=function(){};n.onExpirationUpdated=function(b,c){var d=this,e;qi().then(function(b){e=b;return e.Sa(d.a.key())}).then(function(f){if(f&&!(0>f.sessionIds.indexOf(b))&&(void 0==f.expiration||f.expiration>c)){f.expiration=c;var g=d.a.key();return Nh(e,g,f)}})["catch"](function(){}).then(function(){return e.destroy()});};jf["application/x-offline-manifest"]=ti;function ui(b){var c=hi(b);return c&&"manifest"==c.a?ui.a(b):c&&"segment"==c.a?ui.b(c.key(),b):ab(new u(2,1,9004,b))}q("shaka.offline.OfflineScheme",ui);ui.a=function(b){b={uri:b,data:new ArrayBuffer(0),headers:{"content-type":"application/x-offline-manifest"}};return cb(b)};ui.b=function(b,c){var d,e,f=qi().then(function(c){d=c;return Fh(d,"segment-v3",b)}).then(function(b){e=b;return d.destroy()}).then(function(){if(!e)throw new u(2,9,9003,b);return{uri:c,data:e.data,headers:{}}});return db(f)};
sb("offline",ui);function X(b){this.a=null;this.b=b;for(var c=0;c<b.textTracks.length;++c){var d=b.textTracks[c];d.mode="disabled";"Shaka Player TextTrack"==d.label&&(this.a=d);}this.a||(this.a=b.addTextTrack("subtitles","Shaka Player TextTrack"));this.a.mode="hidden";0<this.a.cues.length&&this.remove(0,Infinity);this.c=this.a.cues;}q("shaka.text.SimpleTextDisplayer",X);X.prototype.remove=function(b,c){if(!this.a)return!1;vi(this,function(d){return d.startTime>=c||d.endTime<=b?!1:!0});return!0};X.prototype.remove=X.prototype.remove;
X.prototype.append=function(b){var c=[];if(window.VTTRegion){var d=b.map(function(b){return b.region});d=d.filter(Fb);for(var e=0;e<d.length;e++){var f=wi(this,d[e]);c.push(f);}}var g=[];for(d=0;d<b.length;d++)(e=xi(b[d],c))&&g.push(e);g.slice().sort(function(b,c){return b.startTime!=c.startTime?b.startTime-c.startTime:b.endTime!=c.endTime?b.endTime-c.startTime:g.indexOf(c)-g.indexOf(b)}).forEach(function(b){this.a.addCue(b);}.bind(this));};X.prototype.append=X.prototype.append;
X.prototype.destroy=function(){this.a&&vi(this,function(){return!0});this.b=this.a=null;return Promise.resolve()};X.prototype.destroy=X.prototype.destroy;X.prototype.isTextVisible=function(){return"showing"==this.a.mode};X.prototype.isTextVisible=X.prototype.isTextVisible;X.prototype.setTextVisibility=function(b){this.a.mode=b?"showing":"hidden";};X.prototype.setTextVisibility=X.prototype.setTextVisibility;
function xi(b,c){if(b.startTime>=b.endTime)return null;var d=new VTTCue(b.startTime,b.endTime,b.payload);d.lineAlign=b.lineAlign;d.positionAlign=b.positionAlign;d.size=b.size;try{d.align=b.textAlign;}catch(f){}"center"==b.textAlign&&"center"!=d.align&&(d.align="middle");2==b.writingDirection?d.vertical="lr":3==b.writingDirection&&(d.vertical="rl");1==b.lineInterpretation&&(d.snapToLines=!1);null!=b.line&&(d.line=b.line);null!=b.position&&(d.position=b.position);if(b.region.id.length){var e=c.filter(function(c){return c.id==
b.region.id});e.length&&(d.region=e[0]);}return d}function wi(b,c){var d=new VTTRegion,e=b.b.offsetWidth,f=b.b.offsetHeight;d.id=c.id;d.regionAnchorX=c.regionAnchorX;d.regionAnchorY=c.regionAnchorY;d.scroll=c.scroll;2==c.heightUnits&&(d.lines=c.height);d.width=0==c.widthUnits?100*c.width/e:c.width;0==c.viewportAnchorUnits?(d.viewportAnchorX=100*c.viewportAnchorX/e,d.viewportAnchorY=100*c.viewportAnchorY/f):(d.viewportAnchorX=c.viewportAnchorX,d.viewportAnchorY=c.viewportAnchorY);return d}
function vi(b,c){for(var d=b.c,e=[],f=0;f<d.length;++f)c(d[f])&&e.push(d[f]);for(d=0;d<e.length;++d)b.a.removeCue(e[d]);}function Y(b,c){K.call(this);this.ba=!1;this.f=null;this.ob=!1;this.v=null;this.o=new C;this.h=this.Bb=this.b=this.m=this.a=this.A=this.g=this.i=this.l=this.u=null;this.$c=1E9;this.kb=[];this.nb=!1;this.ta=!0;this.R=this.pb=this.Ha=null;this.ic=!1;this.G=null;this.mb=[];this.K={};this.c=yi(this);this.lb={width:Infinity,height:Infinity};this.j=zi();this.jb=0;this.L=this.c.preferredAudioLanguage;this.Fa=this.c.preferredTextLanguage;this.Ga=this.c.preferredVariantRole;this.hb=this.c.preferredTextRole;
this.sa=this.c.preferredAudioChannelCount;c&&c(this);this.u=new A(this.Ke.bind(this));b&&this.qb(b,!0);}Aa(Y,K);q("shaka.Player",Y);function Ai(b){if(!b.Ha)return Promise.resolve();var c=Promise.resolve();b.m&&(c=b.m.stop(),b.m=null);return Promise.all([c,b.Ha()])}
Y.prototype.destroy=function(){var b=this;return ka(function d(){var e;return ya(d,function(d){switch(d.H){case 1:return p(d,b.detach(),2);case 2:return b.ba=!0,e=Promise.all([b.o?b.o.destroy():null,b.u?b.u.destroy():null]),b.ob=!1,b.o=null,b.h=null,b.u=null,b.c=null,p(d,e,0)}})}())};Y.prototype.destroy=Y.prototype.destroy;Y.version="v2.3.6-4";var Bi={};Y.registerSupportPlugin=function(b,c){Bi[b]=c;};
Y.isBrowserSupported=function(){return!!window.Promise&&!!window.Uint8Array&&!!Array.prototype.forEach&&!!window.MediaSource&&!!MediaSource.isTypeSupported&&!!window.MediaKeys&&!!window.navigator&&!!window.navigator.requestMediaKeySystemAccess&&!!window.MediaKeySystemAccess&&!!window.MediaKeySystemAccess.prototype.getConfiguration};Y.probeSupport=function(){return pc().then(function(b){var c=lf(),d=Sc();b={manifest:c,media:d,drm:b};for(var e in Bi)b[e]=Bi[e]();return b})};
Y.prototype.qb=function(b,c){var d=this;return ka(function f(){return ya(f,function(f){switch(f.H){case 1:void 0===c&&(c=!0);if(!d.f){f.X(2);break}return p(f,d.detach(),2);case 2:d.f=b;D(d.o,d.f,"error",d.be.bind(d));if(c)return d.i=new Rc(d.f),p(f,d.i.j,0);f.X(0);}})}())};Y.prototype.attach=Y.prototype.qb;Y.prototype.detach=function(){var b=this;return ka(function d(){return ya(d,function(d){switch(d.H){case 1:return b.f?p(d,b.fb(!1),2):d["return"]();case 2:b.o.ka(b.f,"error"),b.f=null,d.H=0;}})}())};
Y.prototype.detach=Y.prototype.detach;function Ci(b,c,d){return ka(function f(){var g,h;return ya(f,function(f){switch(f.H){case 1:return p(f,mf(c,b.u,b.c.manifest.retryParameters,d),2);case 2:return g=f.Ea,b.m=new g,b.m.configure(b.c.manifest),h={networkingEngine:b.u,filterNewPeriod:b.sb.bind(b),filterAllPeriods:b.cc.bind(b),onTimelineRegionAdded:b.ae.bind(b),onEvent:b.eb.bind(b),onError:b.Ra.bind(b)},f["return"](b.m.start(c,h))}})}())}
function Di(b){b.b.periods.some(function(b){return b.variants.some(function(b){return b.video&&b.audio})})&&b.b.periods.forEach(function(b){b.variants=b.variants.filter(function(b){return b.video&&b.audio});});if(0==b.b.periods.length)throw new u(2,4,4014);}function Ei(b){var c=b.b.presentationTimeline.P(),d=b.c.playRangeEnd,e=b.c.playRangeStart;0<e&&(b.N()||b.b.presentationTimeline.Sc(e));d<c&&(b.N()||b.b.presentationTimeline.ga(d));}
Y.prototype.load=function(b,c,d){var e=this;return ka(function g(){var h,k,l,m,r,t,v,w,x,Da,Ra;return ya(g,function(g){switch(g.H){case 1:if(!e.f)throw new u(2,7,7002);k=new y;l=function(){h=new u(2,7,7E3);return k};e.dispatchEvent(new E("loading"));m=Date.now();oa(g);r=e.fb();e.Ha=l;return p(g,r,4);case 4:e.j=zi();D(e.o,e.f,"playing",e.gb.bind(e));D(e.o,e.f,"pause",e.gb.bind(e));D(e.o,e.f,"ended",e.gb.bind(e));t=e.c.abrFactory;e.h=new t;e.h.configure(e.c.abr);e.v=new e.c.textDisplayFactory;e.v.setTextVisibility(e.ob);
if(h)throw h;v=e;return p(g,Ci(e,b,d),5);case 5:v.b=g.Ea;e.Bb=b;if(h)throw h;Di(e);e.l=new ac({Xa:e.u,onError:e.Ra.bind(e),Sb:e.Md.bind(e),onExpirationUpdated:e.Jd.bind(e),onEvent:e.eb.bind(e)});e.l.configure(e.c.drm);return p(g,e.l.init(e.b,!1),6);case 6:if(h)throw h;e.cc(e.b.periods);e.jb=Date.now()/1E3;e.L=e.c.preferredAudioLanguage;e.Fa=e.c.preferredTextLanguage;e.sa=e.c.preferredAudioChannelCount;Ei(e);return p(g,e.l.qb(e.f),7);case 7:if(h)throw h;e.h.init(e.Le.bind(e));e.i||(e.i=new Rc(e.f));
e.i.o=e.v;e.g=new Kg(e.f,e.b,e.c.streaming,void 0==c?null:c,e.Je.bind(e),e.eb.bind(e));e.A=new Pg(e.f,e.i,e.b,e.c.streaming,e.Tc.bind(e),e.eb.bind(e),e.Ie.bind(e));e.a=new Tg(e.b,{Na:e.g,J:e.i,Xa:e.u,yc:e.Gd.bind(e),xc:e.dd.bind(e),onError:e.Ra.bind(e),onEvent:e.eb.bind(e),Nd:e.Od.bind(e),Za:e.Yd.bind(e),filterNewPeriod:e.sb.bind(e),filterAllPeriods:e.cc.bind(e)});e.a.configure(e.c.streaming);Fi(e);e.dispatchEvent(new E("streaming"));return p(g,e.a.init(),8);case 8:if(h)throw h;e.c.streaming.startAtSegmentBoundary&&
(w=Gi(e,Ng(e.g)),Hg(e.g.a,w));e.b.periods.forEach(e.sb.bind(e));Hi(e);Ii(e);x=V(e.a);Da=ud(x.variants,e.L,e.Ga,e.sa);e.h.setVariants(Da);x.variants.some(function(b){return b.primary});e.mb.forEach(e.A.o.bind(e.A));e.mb=[];Ab(e.o,e.f,"loadeddata",function(){this.j.loadLatency=(Date.now()-m)/1E3;}.bind(e));if(h)throw h;e.Ha=null;pa(g);break;case 2:return Ra=qa(g),k.resolve(),e.Ha==l&&(e.Ha=null,e.dispatchEvent(new E("unloading"))),g["return"](Promise.reject(Ra))}})}())};Y.prototype.load=Y.prototype.load;
function Fi(b){function c(b){return(b.video?b.video.codecs.split(".")[0]:"")+"-"+(b.audio?b.audio.codecs.split(".")[0]:"")}var d=b.b.periods.reduce(function(b,c){return b.concat(c.variants)},[]);d=wd(d,b.c.preferredAudioChannelCount);var e={};d.forEach(function(b){var d=c(b);d in e||(e[d]=[]);e[d].push(b);});var f=null,g=Infinity;Lb(e,function(b,c){var d=0,e=0;c.forEach(function(b){d+=b.bandwidth||0;++e;});var h=d/e;h<g&&(f=b,g=h);});b.b.periods.forEach(function(b){b.variants=b.variants.filter(function(b){return c(b)==
f?!0:!1});});}Y.prototype.configure=function(b){b=mb(this.c,b,yi(this),Ji(),"");Ki(this);return b};Y.prototype.configure=Y.prototype.configure;function Ki(b){b.m&&b.m.configure(b.c.manifest);b.l&&b.l.configure(b.c.drm);if(b.a){b.a.configure(b.c.streaming);try{b.b.periods.forEach(b.sb.bind(b));}catch(f){b.Ra(f);}var c=Xg(b.a),d=Zg(b.a),e=V(b.a);(c=Ad(c,d,e.variants))&&c.allowedByApplication&&c.allowedByKeySystem||Li(b,e);}b.h&&(b.h.configure(b.c.abr),b.c.abr.enabled&&!b.ta?b.h.enable():b.h.disable());}
Y.prototype.getConfiguration=function(){var b=yi(this);mb(b,this.c,yi(this),Ji(),"");return b};Y.prototype.getConfiguration=Y.prototype.getConfiguration;Y.prototype.ve=function(){this.c=yi(this);Ki(this);};Y.prototype.resetConfiguration=Y.prototype.ve;Y.prototype.rd=function(){return this.f};Y.prototype.getMediaElement=Y.prototype.rd;Y.prototype.sc=function(){return this.u};Y.prototype.getNetworkingEngine=Y.prototype.sc;Y.prototype.Hb=function(){return this.Bb};Y.prototype.getManifestUri=Y.prototype.Hb;
Y.prototype.N=function(){return this.b?this.b.presentationTimeline.N():!1};Y.prototype.isLive=Y.prototype.N;Y.prototype.ya=function(){return this.b?this.b.presentationTimeline.ya():!1};Y.prototype.isInProgress=Y.prototype.ya;Y.prototype.Cd=function(){if(!this.b||!this.b.periods.length)return!1;var b=this.b.periods[0].variants;return b.length?!b[0].video:!1};Y.prototype.isAudioOnly=Y.prototype.Cd;
Y.prototype.xe=function(){var b=0,c=0;this.b&&(c=this.b.presentationTimeline,b=c.Ia(),c=c.ia());return{start:b,end:c}};Y.prototype.seekRange=Y.prototype.xe;Y.prototype.keySystem=function(){return this.l?this.l.keySystem():""};Y.prototype.keySystem=Y.prototype.keySystem;Y.prototype.drmInfo=function(){return this.l?this.l.b:null};Y.prototype.drmInfo=Y.prototype.drmInfo;Y.prototype.ub=function(){return this.l?this.l.ub():Infinity};Y.prototype.getExpiration=Y.prototype.ub;Y.prototype.vc=function(){return this.nb};
Y.prototype.isBuffering=Y.prototype.vc;Y.prototype.fb=function(b){var c=this;return ka(function e(){return ya(e,function(e){switch(e.H){case 1:if(c.ba)return e["return"]();void 0===b&&(b=!0);c.dispatchEvent(new E("unloading"));return p(e,Ai(c),2);case 2:return c.pb||(c.pb=Mi(c).then(function(){c.Tc(!1);c.pb=null;})),p(e,c.pb,3);case 3:if(b)return c.i=new Rc(c.f),p(e,c.i.j,0);e.X(0);}})}())};Y.prototype.unload=Y.prototype.fb;Y.prototype.Ta=function(){return this.g?this.g.Ta():0};
Y.prototype.getPlaybackRate=Y.prototype.Ta;Y.prototype.Ue=function(b){this.g&&Jg(this.g.a,b);this.a&&eh(this.a,1!=b);};Y.prototype.trickPlay=Y.prototype.Ue;Y.prototype.ed=function(){this.g&&Jg(this.g.a,1);this.a&&eh(this.a,!1);};Y.prototype.cancelTrickPlay=Y.prototype.ed;Y.prototype.Ad=function(){if(!this.b||!this.g)return[];var b=Cd(this.b,Ng(this.g)),c=this.K[b]||{};return qd(this.b.periods[b],c.audio,c.video)};Y.prototype.getVariantTracks=Y.prototype.Ad;
Y.prototype.zd=function(){if(!this.b||!this.g)return[];var b=Cd(this.b,Ng(this.g));return rd(this.b.periods[b],(this.K[b]||{}).text).filter(function(b){return 0>this.kb.indexOf(b.id)}.bind(this))};Y.prototype.getTextTracks=Y.prototype.zd;Y.prototype.Ce=function(b){if(this.a){var c=V(this.a);a:{for(var d=0;d<c.textStreams.length;d++)if(c.textStreams[d].id==b.id){b=c.textStreams[d];break a}b=null;}b&&(this.i.l=!1,Ni(this,b,!1),c=b,this.ta?this.G=c:fh(this.a,c,!0),this.Fa=b.language);}};
Y.prototype.selectTextTrack=Y.prototype.Ce;Y.prototype.Ae=function(){this.i.l=!0;dh(this.a);};Y.prototype.selectEmbeddedTextTrack=Y.prototype.Ae;Y.prototype.Ze=function(){return this.i?this.i.l:!1};Y.prototype.usingEmbeddedTextTrack=Y.prototype.Ze;
Y.prototype.De=function(b,c){if(this.a){this.c.abr.enabled&&Ga("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");var d=V(this.a),e=sd(d,b);e&&td(e)&&(Oi(this,e,!1),Pi(this,e,c),this.L=e.language,e.audio&&e.audio.channelsCount&&(this.sa=e.audio.channelsCount),d=ud(d.variants,this.L,this.Ga,this.sa),this.h.setVariants(d));}};Y.prototype.selectVariantTrack=Y.prototype.De;
Y.prototype.md=function(){if(!this.a)return[];var b=V(this.a);b=pd(b.variants).map(function(b){return b.audio}).filter(Fb);return Qi(b)};Y.prototype.getAudioLanguagesAndRoles=Y.prototype.md;Y.prototype.yd=function(){if(!this.a)return[];var b=V(this.a);return Qi(b.textStreams)};Y.prototype.getTextLanguagesAndRoles=Y.prototype.yd;Y.prototype.ld=function(){if(!this.a)return[];var b=V(this.a);return pd(b.variants).map(function(b){return b.language}).filter(Fb)};Y.prototype.getAudioLanguages=Y.prototype.ld;
Y.prototype.xd=function(){return this.a?V(this.a).textStreams.map(function(b){return b.language}).filter(Fb):[]};Y.prototype.getTextLanguages=Y.prototype.xd;function Qi(b){var c=[];b.forEach(function(b){if(b){var d=b.language;b.roles.length?b.roles.forEach(function(b){c.push({language:d,role:b});}):c.push({language:d,role:""});}else c.push({language:"und",role:""});});return gb(c,function(b,c){return b.language==c.language&&b.role==c.role})}
Y.prototype.ze=function(b,c){if(this.a){var d=V(this.a);this.L=b;this.Ga=c||"";Li(this,d);}};Y.prototype.selectAudioLanguage=Y.prototype.ze;Y.prototype.Be=function(b,c){if(this.a){var d=V(this.a);this.Fa=b;this.hb=c||"";Li(this,d);}};Y.prototype.selectTextLanguage=Y.prototype.Be;Y.prototype.Lb=function(){return this.v?this.v.isTextVisible():this.ob};Y.prototype.isTextTrackVisible=Y.prototype.Lb;
Y.prototype.Ge=function(b){this.v&&this.v.setTextVisibility(b);this.ob=b;Ri(this);!this.c.streaming.alwaysStreamText&&this.a&&(b?(b=V(this.a),(b=yd(b.textStreams,this.Fa,this.hb)[0])&&$g(this.a,b)):dh(this.a));};Y.prototype.setTextTrackVisibility=Y.prototype.Ge;Y.prototype.td=function(){return this.b?new Date(1E3*this.b.presentationTimeline.c+1E3*this.f.currentTime):null};Y.prototype.getPlayheadTimeAsDate=Y.prototype.td;
Y.prototype.vd=function(){return this.b?new Date(1E3*this.b.presentationTimeline.c):null};Y.prototype.getPresentationStartTimeAsDate=Y.prototype.vd;Y.prototype.Fb=function(){return this.i?this.i.Fb():{total:[],audio:[],video:[],text:[]}};Y.prototype.getBufferedInfo=Y.prototype.Fb;
Y.prototype.getStats=function(){Si(this);this.gb();var b=null,c=null,d=this.f;d=d&&d.getVideoPlaybackQuality?d.getVideoPlaybackQuality():{};if(this.g&&this.b){var e=Cd(this.b,Ng(this.g)),f=this.b.periods[e];if(e=this.K[e])c=Bd(e.audio,e.video,f.variants),b=c.video||{};}b||(b={});c||(c={});return{width:b.width||0,height:b.height||0,streamBandwidth:c.bandwidth||0,decodedFrames:Number(d.totalVideoFrames),droppedFrames:Number(d.droppedVideoFrames),estimatedBandwidth:this.h?this.h.getBandwidthEstimate():
NaN,loadLatency:this.j.loadLatency,playTime:this.j.playTime,bufferingTime:this.j.bufferingTime,switchHistory:nb(this.j.switchHistory),stateHistory:nb(this.j.stateHistory)}};Y.prototype.getStats=Y.prototype.getStats;
Y.prototype.addTextTrack=function(b,c,d,e,f,g){if(!this.a)return Promise.reject();for(var h=V(this.a),k,l=0;l<this.b.periods.length;l++)if(this.b.periods[l]==h){if(l==this.b.periods.length-1){if(k=this.b.presentationTimeline.P()-h.startTime,Infinity==k)return Promise.reject()}else k=this.b.periods[l+1].startTime-h.startTime;break}var m={id:this.$c++,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return 1},getSegmentReference:function(c){return 1!=c?null:new P(1,0,
k,function(){return[b]},0,null)},initSegmentReference:null,presentationTimeOffset:0,mimeType:e,codecs:f||"",kind:d,encrypted:!1,keyId:null,language:c,label:g||null,type:"text",primary:!1,trickModeVideo:null,containsEmsgBoxes:!1,roles:[],channelsCount:null};this.kb.push(m.id);h.textStreams.push(m);return $g(this.a,m).then(function(){if(!this.ba){var b=this.b.periods.indexOf(h),e=Yg(this.a,"text");e&&(this.K[b].text=e.id);this.kb.splice(this.kb.indexOf(m.id),1);Li(this,h);Hi(this);return{id:m.id,active:!1,
type:"text",bandwidth:0,language:c,label:g||null,kind:d,width:null,height:null}}}.bind(this))};Y.prototype.addTextTrack=Y.prototype.addTextTrack;Y.prototype.ac=function(b,c){this.lb.width=b;this.lb.height=c;};Y.prototype.setMaxHardwareResolution=Y.prototype.ac;Y.prototype.Nc=function(){if(this.a){var b=this.a;if(b.f)b=!1;else if(b.l)b=!1;else{for(var c in b.c){var d=b.c[c];d.Va&&(d.Va=!1,ch(b,d,.1));}b=!0;}}else b=!1;return b};Y.prototype.retryStreaming=Y.prototype.Nc;Y.prototype.Sa=function(){return this.b};
Y.prototype.getManifest=Y.prototype.Sa;function Oi(b,c,d){c.video&&Ti(b,c.video);c.audio&&Ti(b,c.audio);var e=Wg(b.a);c!=Ad(Xg(b.a),Zg(b.a),e?e.variants:[])&&b.j.switchHistory.push({timestamp:Date.now()/1E3,id:c.id,type:"variant",fromAdaptation:d,bandwidth:c.bandwidth});}function Ni(b,c,d){Ti(b,c);b.j.switchHistory.push({timestamp:Date.now()/1E3,id:c.id,type:"text",fromAdaptation:d,bandwidth:null});}function Ti(b,c){var d=Dd(b.b,c);b.K[d]||(b.K[d]={});b.K[d][c.type]=c.id;}
function Mi(b){b.o&&(b.o.ka(b.f,"loadeddata"),b.o.ka(b.f,"playing"),b.o.ka(b.f,"pause"),b.o.ka(b.f,"ended"));var c=Promise.all([b.h?b.h.stop():null,b.i?b.i.destroy():null,b.l?b.l.destroy():null,b.g?b.g.destroy():null,b.A?b.A.destroy():null,b.a?b.a.destroy():null,b.m?b.m.stop():null,b.v?b.v.destroy():null]);b.ta=!0;b.l=null;b.i=null;b.g=null;b.A=null;b.a=null;b.m=null;b.v=null;b.b=null;b.Bb=null;b.mb=[];b.K={};b.j=zi();return c}
function Ji(){return{".drm.servers":"",".drm.clearKeys":"",".drm.advanced":{distinctiveIdentifierRequired:!1,persistentStateRequired:!1,videoRobustness:"",audioRobustness:"",serverCertificate:new Uint8Array(0)}}}
function yi(b){var c=5E5;navigator.connection&&navigator.connection.type&&(c=1E6*navigator.connection.downlink);return{drm:{retryParameters:Za(),servers:{},clearKeys:{},advanced:{},delayLicenseRequestUntilPlayed:!1},manifest:{retryParameters:Za(),dash:{customScheme:function(b){if(b)return null},clockSyncUri:"",ignoreDrmInfo:!1,xlinkFailGracefully:!1,defaultPresentationDelay:10}},streaming:{retryParameters:Za(),failureCallback:b.hd.bind(b),rebufferingGoal:2,bufferingGoal:10,bufferBehind:30,ignoreTextStreamFailures:!1,
alwaysStreamText:!1,startAtSegmentBoundary:!1,smallGapLimit:.5,jumpLargeGaps:!1,durationBackoff:1,forceTransmuxTS:!1},abrFactory:J,textDisplayFactory:function(){return new X(b.f)},abr:{enabled:!0,defaultBandwidthEstimate:c,switchInterval:8,bandwidthUpgradeTarget:.85,bandwidthDowngradeTarget:.95,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity}},preferredAudioLanguage:"",preferredTextLanguage:"",preferredVariantRole:"",
preferredTextRole:"",preferredAudioChannelCount:2,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity},playRangeStart:0,playRangeEnd:Infinity}}n=Y.prototype;n.hd=function(b){var c=[1001,1002,1003];this.N()&&0<=c.indexOf(b.code)&&(b.severity=1,this.Nc());};
function zi(){return{width:NaN,height:NaN,streamBandwidth:NaN,decodedFrames:NaN,droppedFrames:NaN,estimatedBandwidth:NaN,loadLatency:NaN,playTime:0,bufferingTime:0,switchHistory:[],stateHistory:[]}}
n.cc=function(b){b.forEach(kd.bind(null,this.l,this.a?Xg(this.a):null,this.a?Zg(this.a):null));var c=lb(b,function(b){return b.variants.some(td)});if(0==c)throw new u(2,4,4032);if(c<b.length)throw new u(2,4,4011);b.forEach(function(b){jd(b,this.c.restrictions,this.lb)&&this.a&&V(this.a)==b&&Hi(this);if(!b.variants.some(td))throw new u(2,4,4012);}.bind(this));};
n.sb=function(b){kd(this.l,this.a?Xg(this.a):null,this.a?Zg(this.a):null,b);var c=b.variants,d=c.some(td);jd(b,this.c.restrictions,this.lb)&&this.a&&V(this.a)==b&&Hi(this);b=c.some(td);if(!d)throw new u(2,4,4011);if(!b)throw new u(2,4,4012);};function Pi(b,c,d){b.ta?(b.R=c,b.ic=d||!1):gh(b.a,c,d||!1);}function Si(b){if(b.b){var c=Date.now()/1E3;b.nb?b.j.bufferingTime+=c-b.jb:b.j.playTime+=c-b.jb;b.jb=c;}}
function Gi(b,c){function d(b,c){if(!b)return null;var d=b.findSegmentPosition(c-g.startTime);return null==d?null:(d=b.getSegmentReference(d))?d.startTime+g.startTime:null}var e=Xg(b.a),f=Zg(b.a),g=V(b.a);e=d(e,c);f=d(f,c);return null!=f&&null!=e?Math.max(f,e):null!=f?f:null!=e?e:c}n.Ke=function(b,c){this.h&&this.h.segmentDownloaded(b,c);};n.Tc=function(b){Si(this);this.nb=b;this.gb();if(this.g){var c=this.g.a;b!=c.g&&(c.g=b,Jg(c,c.f));}this.dispatchEvent(new E("buffering",{buffering:b}));};n.Ie=function(){Hi(this);};
n.gb=function(){if(!this.ba){var b=this.nb?"buffering":this.f.ended?"ended":this.f.paused?"paused":"playing";var c=Date.now()/1E3;if(this.j.stateHistory.length){var d=this.j.stateHistory[this.j.stateHistory.length-1];d.duration=c-d.timestamp;if(b==d.state)return}this.j.stateHistory.push({timestamp:c,state:b,duration:0});}};n.Je=function(){if(this.A){var b=this.A;b.c.forEach(b.m.bind(b,!0));}this.a&&jh(this.a);};
function Ui(b,c){if(!c||!c.length)return b.Ra(new u(2,4,4012)),null;b.h.setVariants(c);return b.h.chooseVariant()}function Li(b,c){var d=ud(c.variants,b.L,b.Ga,b.sa),e=yd(c.textStreams,b.Fa,b.hb);if(d=Ui(b,d))Oi(b,d,!0),Pi(b,d,!0);(e=e[0])&&(b.c.streaming.alwaysStreamText||b.Lb())&&(Ni(b,e,!0),b.ta?b.G=e:fh(b.a,e,!0));Ii(b);}
n.Gd=function(b){this.ta=!0;this.h.disable();var c={audio:!1,text:!1},d=ud(b.variants,this.L,this.Ga,this.sa,c),e=yd(b.textStreams,this.Fa,this.hb,c);d=Ui(this,d);e=e[0]||null;if(this.R){a:{var f=this.b;for(var g=0;g<f.periods.length;++g)for(var h=f.periods[g],k=0;k<h.variants.length;++k)if(h.variants[k]==this.R){f=g;break a}f=-1;}this.b.periods[f]==b&&(d=this.R);this.R=null;}this.G&&(this.b.periods[Dd(this.b,this.G)]==b&&(e=this.G),this.G=null);d&&Oi(this,d,!0);e&&(Ni(this,e,!0),!Wg(this.a)&&d&&d.audio&&
c.text&&e.language!=d.audio.language&&(this.v.setTextVisibility(!0),Ri(this)));return this.c.streaming.alwaysStreamText||this.Lb()?{variant:d,text:e}:{variant:d,text:null}};n.dd=function(){this.ta=!1;this.c.abr.enabled&&this.h.enable();this.R&&(gh(this.a,this.R,this.ic),this.R=null);this.G&&(fh(this.a,this.G,!0),this.G=null);};n.Od=function(){this.m&&this.m.update&&this.m.update();};n.Yd=function(){this.g&&this.g.Za();};n.Le=function(b,c){Oi(this,b,!0);this.a&&(gh(this.a,b,c||!1),Ii(this));};
function Ii(b){Promise.resolve().then(function(){this.ba||this.dispatchEvent(new E("adaptation"));}.bind(b));}function Hi(b){Promise.resolve().then(function(){this.ba||this.dispatchEvent(new E("trackschanged"));}.bind(b));}function Ri(b){b.dispatchEvent(new E("texttrackvisibility"));}n.Ra=function(b){if(!this.ba){var c=new E("error",{detail:b});this.dispatchEvent(c);c.defaultPrevented&&(b.handled=!0);}};n.ae=function(b){this.A?this.A.o(b):this.mb.push(b);};n.eb=function(b){this.dispatchEvent(b);};
n.be=function(){if(this.f.error){var b=this.f.error.code;if(1!=b){var c=this.f.error.msExtendedCode;c&&(0>c&&(c+=Math.pow(2,32)),c=c.toString(16));this.Ra(new u(2,3,3016,b,c,this.f.error.message));}}};
n.Md=function(b){var c=["output-restricted","internal-error"],d=V(this.a),e=!1,f=Object.keys(b),g=1==f.length&&"00"==f[0];f.length&&d.variants.forEach(function(d){var f=[];d.audio&&f.push(d.audio);d.video&&f.push(d.video);f.forEach(function(f){var h=d.allowedByKeySystem;f.keyId&&(f=b[g?"00":f.keyId],d.allowedByKeySystem=!!f&&0>c.indexOf(f));h!=d.allowedByKeySystem&&(e=!0);});});(f=Ad(Xg(this.a),Zg(this.a),d.variants))&&!f.allowedByKeySystem&&Li(this,d);e&&(Hi(this),d=ud(d.variants,this.L,this.Ga,this.sa),
this.h.setVariants(d));};n.Jd=function(b,c){if(this.m&&this.m.onExpirationUpdated)this.m.onExpirationUpdated(b,c);this.dispatchEvent(new E("expirationupdated"));};
n.ye=function(b){if(this.ba)return Promise.resolve();if(this.b&&this.b.presentationTimeline){var c=this.b.presentationTimeline.Ja();if(b<c)return Promise.reject();c=this.b.presentationTimeline.xa();if(b>c)return Promise.reject();c=Zg(this.a);if(!c){a:{for(c=this.b.periods.length-1;0<c;--c)if(b>=this.b.periods[c].startTime)break a;c=0;}c=this.b.periods[c].variants[0].video;}b=c.findSegmentPosition(b);return(b=null!=b?c.getSegmentReference(b):null)?Vi(this,b):Promise.reject()}return Promise.resolve()};
Y.prototype.segmentExist=Y.prototype.ye;function Vi(b,c){var d=B(c.c(),Za());if(0!=c.b||null!=c.a){var e="bytes="+c.b+"-";null!=c.a&&(e+=c.a);d.headers.Range=e;}return b.u.request(1,d).promise.then(function(b){return b.data})}function Wi(b,c,d){var e=void 0==c.expiration?Infinity:c.expiration,f=c.presentationTimeline.P();c=od(c.periods[0]);return{offlineUri:null,originalManifestUri:b,duration:f,size:0,expiration:e,tracks:c,appMetadata:d}}function Xi(b,c){var d=li(new ji(b.c,b.b),c.periods[0],new U(null,0)),e=c.appMetadata||{};d=od(d);return{offlineUri:b.toString(),originalManifestUri:c.originalManifestUri,duration:c.duration,size:c.size,expiration:c.expiration,tracks:d,appMetadata:e}}function Yi(){this.a={};}function Zi(b,c,d){d=d.endTime-d.startTime;return $i(b,c)*d}function $i(b,c){var d=b.a[c];null==d&&(d=0);return d}function Z(b){if(!b||b.constructor!=Y)throw new u(2,9,9008);this.a=b;this.b=aj(this);this.g=!1;this.c=null;this.f=[];}q("shaka.offline.Storage",Z);function bj(){return null!=window.indexedDB}Z.support=bj;Z.prototype.destroy=function(){this.a=this.b=null;return Promise.resolve()};Z.prototype.destroy=Z.prototype.destroy;Z.prototype.configure=function(b){mb(this.b,b,aj(this),{},"");};Z.prototype.configure=Z.prototype.configure;
Z.prototype.store=function(b,c,d){var e=this;return ka(function g(){var h,k,l,m;return ya(g,function(g){switch(g.H){case 1:cj();if(e.g)return g["return"](Promise.reject(new u(2,9,9006)));e.g=!0;h=c||{};k=null;return p(g,dj(e,b,function(b){k=b;},d),2);case 2:l=g.Ea;m=!l.manifest.presentationTimeline.N()&&!l.manifest.presentationTimeline.ya();if(!m)throw new u(2,9,9005,b);ej(e);if(k)throw k;return g["return"](fj(function(c){return ob(l.Db,function(){return ka(function w(){var d,g,m,r,t,jb,kb;return ya(w,
function(x){switch(x.H){case 1:return oa(x,3),gj(e,l.Db,l.manifest.periods),p(x,hj(e,c,l.Db,l.manifest,b,h),5);case 5:return d=x.Ea,p(x,Lh(c,"manifest-v3",d),6);case 6:return g=x.Ea,m=ii(g),r=Xi(m,d),x["return"](r);case 3:ra(x);e.g=!1;e.c=null;e.f=[];sa(x);break;case 2:return t=qa(x),jb=e.f,kb=function(){},p(x,Jh(c,"segment-v3",jb,kb),7);case 7:throw k||t;}})}())})}))}})}())};Z.prototype.store=Z.prototype.store;
function hj(b,c,d,e,f,g){var h=Wi(f,e,g),k=new Rh(function(c,d){h.size=d;b.b.progressCallback(h,c);}),l;return ob(k,function(){l=ij(b,k,c,d,e,f,g);return Th(k,b.a.u)}).then(function(){l.size=h.size;return l})}Z.prototype.remove=function(b){var c=this;cj();var d=hi(b);return null!=d&&"manifest"==d.a?fj(function(e){return e.Sa(d.key()).then(function(f){return f?Promise.all([jj(c,d,f),kj(c,e,d,f)]):Promise.reject(new u(2,9,9003,b))})}):Promise.reject(new u(2,9,9004,b))};Z.prototype.remove=Z.prototype.remove;
function jj(b,c,d){var e,f=new ac({Xa:b.a.u,onError:function(b){6013!=b.code&&(e=b);},Sb:function(){},onExpirationUpdated:function(){},onEvent:function(){}});f.configure(b.a.getConfiguration().drm);var g=ki(new ji(c.c,c.b),d);return ob(f,function(){return Promise.resolve().then(function(){return f.init(g,b.b.usePersistentLicense)}).then(function(){return ec(f,d.sessionIds)})}).then(function(){if(e)throw e;})}
function kj(b,c,d,e){function f(){k++;g(h,k/l);}var g=b.b.progressCallback,h=Xi(d,e);b=lj(e);var k=0,l=b.length+1;return Promise.all([Jh(c,"segment-v3",b,f),Ih(c,[d.key()],f)])}Z.prototype.list=function(){cj();var b=[];return fj(function(c){return Gh(c,function(c,e){var d=Xi(ii(c),e);b.push(d);})}).then(function(){return b})};Z.prototype.list=Z.prototype.list;
function dj(b,c,d,e){function f(){}var g=b.a.u,h=b.a.getConfiguration(),k,l,m;return mf(c,g,h.manifest.retryParameters,e).then(function(b){var e=this;ej(this);l=new ac({Xa:g,onError:d,Sb:f,onExpirationUpdated:function(){},onEvent:function(){}});l.configure(h.drm);var k={networkingEngine:g,filterAllPeriods:function(b){gj(e,l,b);},filterNewPeriod:function(b){mj(e,l,b);},onTimelineRegionAdded:function(){},onEvent:function(){},onError:d};m=new b;m.configure(h.manifest);return m.start(c,k)}.bind(b)).then(function(b){ej(this);
k=b;return l.init(k,this.b.usePersistentLicense)}.bind(b)).then(function(){ej(this);return nj(k)}.bind(b)).then(function(){ej(this);return dc(l)}.bind(b)).then(function(){ej(this);return m.stop()}.bind(b)).then(function(){ej(this);return{manifest:k,Db:l}}.bind(b))["catch"](function(b){if(m)return m.stop().then(function(){throw b;});throw b;})}
Z.prototype.h=function(b){var c=[],d=gd(this.a.getConfiguration().preferredAudioLanguage),e=[0,ed,fd],f=b.filter(function(b){return"variant"==b.type});e=e.map(function(b){return f.filter(function(c){c=gd(c.language);return dd(b,d,c)})});for(var g,h=0;h<e.length;h++)if(e[h].length){g=e[h];break}g||(e=f.filter(function(b){return b.primary}),e.length&&(g=e));g||(g=f,f.map(function(b){return b.language}).filter(Fb));var k=g.filter(function(b){return b.height&&480>=b.height});k.length&&(k.sort(function(b,
c){return c.height-b.height}),g=k.filter(function(b){return b.height==k[0].height}));g.sort(function(b,c){return b.bandwidth-c.bandwidth});g.length&&c.push(g[Math.floor(g.length/2)]);c.push.apply(c,b.filter(function(b){return"text"==b.type}));return c};function aj(b){return{trackSelectionCallback:b.h.bind(b),progressCallback:function(b,d){if(b||d)return null},usePersistentLicense:!0}}function gj(b,c,d){d.forEach(function(d){return mj(b,c,d)});}
function mj(b,c,d){var e=null;if(b.c){var f=b.c.filter(function(b){return"variant"==b.type})[0];f&&(e=sd(d,f));}var g=f=null;e&&(e.audio&&(f=e.audio),e.video&&(g=e.video));kd(c,f,g,d);jd(d,b.a.getConfiguration().restrictions,{width:Infinity,height:Infinity});}
function nj(b){var c=b.periods.map(function(b){return b.variants}).reduce(Cb,[]).map(function(b){var c=[];b.audio&&c.push(b.audio);b.video&&c.push(b.video);return c}).reduce(Cb,[]).filter(Fb);b=b.periods.map(function(b){return b.textStreams}).reduce(Cb,[]);c.push.apply(c,b);return Promise.all(c.map(function(b){return b.createSegmentIndex()}))}
function ij(b,c,d,e,f,g,h){var k=new Yi,l=f.periods.map(function(g){return oj(b,c,d,k,e,f,g)}),m=e.b,r=hc(e);if(m&&b.b.usePersistentLicense){if(!r.length)throw new u(2,9,9007,g);m.initData=[];}return{originalManifestUri:g,duration:f.presentationTimeline.P(),size:0,expiration:e.ub(),periods:l,sessionIds:b.b.usePersistentLicense?r:[],drmInfo:m,appMetadata:h}}
function oj(b,c,d,e,f,g,h){var k=qd(h,null,null),l=rd(h,null);k=b.b.trackSelectionCallback(k.concat(l));null==b.c&&(b.c=k,gj(b,f,g.periods));pj(k);g.periods.forEach(function(b){b.variants.forEach(function(b){var c=b.audio,d=b.video;c&&!d&&(e.a[c.id]=c.bandwidth||b.bandwidth);!c&&d&&(e.a[d.id]=d.bandwidth||b.bandwidth);if(c&&d){var f=c.bandwidth||393216,g=d.bandwidth||b.bandwidth-f;0>=g&&(g=b.bandwidth);e.a[c.id]=f;e.a[d.id]=g;}});b.textStreams.forEach(function(b){e.a[b.id]=52;});});var m={};k.forEach(function(b){"variant"==
b.type&&null!=b.audioId&&(m[b.audioId]=!0);"variant"==b.type&&null!=b.videoId&&(m[b.videoId]=!0);"text"==b.type&&(m[b.id]=!0);});var r={};qj(g).filter(function(b){return!!m[b.id]}).forEach(function(f){r[f.id]=rj(b,c,d,e,g,f);});k.forEach(function(b){"variant"==b.type&&null!=b.audioId&&r[b.audioId].variantIds.push(b.id);"variant"==b.type&&null!=b.videoId&&r[b.videoId].variantIds.push(b.id);});return{startTime:h.startTime,streams:Jb(r)}}
function rj(b,c,d,e,f,g){var h={id:g.id,primary:g.primary,presentationTimeOffset:g.presentationTimeOffset||0,contentType:g.type,mimeType:g.mimeType,codecs:g.codecs,frameRate:g.frameRate,kind:g.kind,language:g.language,label:g.label,width:g.width||null,height:g.height||null,initSegmentKey:null,encrypted:g.encrypted,keyId:g.keyId,segments:[],variantIds:[]};f=f.presentationTimeline.Ja();var k=g.id;sj(g,f,function(f){Sh(c,k,tj(b,f),Zi(e,g.id,f),function(c){return Kh(d,{data:c}).then(function(c){b.f.push(c);
h.segments.push({startTime:f.startTime,endTime:f.endTime,dataKey:c});})});});(f=g.initSegmentReference)&&Sh(c,k,tj(b,f),.5*$i(e,g.id),function(c){return Kh(d,{data:c}).then(function(c){b.f.push(c);h.initSegmentKey=c;})});return h}function sj(b,c,d){c=b.findSegmentPosition(c);for(var e=null==c?null:b.getSegmentReference(c);e;)d(e),e=b.getSegmentReference(++c);}function ej(b){if(!b.a)throw new u(2,9,7001);}function cj(){if(null==window.indexedDB)throw new u(2,9,9E3);}
function tj(b,c){var d=b.a.getConfiguration().streaming.retryParameters;d=B(c.c(),d);if(0!=c.b||null!=c.a)d.headers.Range="bytes="+c.b+"-"+(null==c.a?"":c.a);return d}function lj(b){var c=[];b.periods.forEach(function(b){b.streams.forEach(function(b){null!=b.initSegmentKey&&c.push(b.initSegmentKey);b.segments.forEach(function(b){c.push(b.dataKey);});});});return c}function fj(b){return qi().then(function(c){return ob(c,function(){return b(c)})})}Z.deleteAll=function(){return si()};
function pj(b){b.some(function(c){return b.some(function(b){return c!=b&&c.type==b.type&&c.kind==b.kind&&c.language==b.language})});}function qj(b){var c={};b.periods.forEach(function(b){b.textStreams.forEach(function(b){c[b.id]=b;});b.variants.forEach(function(b){b.audio&&(c[b.audio.id]=b.audio);b.video&&(c[b.video.id]=b.video);});});return Jb(c)}Bi.offline=bj;q("shaka.polyfill.installAll",function(){for(var b=0;b<uj.length;++b)uj[b].bd();});var uj=[];function vj(b,c){c=c||0;for(var d={priority:c,bd:b},e=0;e<uj.length;e++)if(uj[e].priority<c){uj.splice(e,0,d);return}uj.push(d);}q("shaka.polyfill.register",vj);vj(function(){var b=navigator.userAgent;b&&0<=b.indexOf("CrKey")&&delete window.indexedDB;});var wj;function xj(b,c,d){if("input"==b)switch(this.type){case "range":b="change";}wj.call(this,b,c,d);}vj(function(){0>navigator.userAgent.indexOf("Trident/")||HTMLInputElement.prototype.addEventListener==xj||(wj=HTMLInputElement.prototype.addEventListener,HTMLInputElement.prototype.addEventListener=xj);});vj(function(){});function yj(){var b=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(){var c=b.apply(this,arguments);c.abort=function(){};return c};}function zj(){var b=SourceBuffer.prototype.remove;SourceBuffer.prototype.remove=function(c,d){return b.call(this,c,d-.001)};}
function Aj(){var b=MediaSource.prototype.endOfStream;MediaSource.prototype.endOfStream=function(){for(var c=0,d=0;d<this.sourceBuffers.length;++d){var g=this.sourceBuffers[d];g=g.buffered.end(g.buffered.length-1);c=Math.max(c,g);}if(!isNaN(this.duration)&&c<this.duration)for(this.tc=!0,c=0;c<this.sourceBuffers.length;++c)this.sourceBuffers[c].nc=!1;return b.apply(this,arguments)};var c=!1,d=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(){var b=d.apply(this,arguments);
b.mediaSource_=this;b.addEventListener("updateend",Bj,!1);c||(this.addEventListener("sourceclose",Cj,!1),c=!0);return b};}function Bj(b){var c=b.target,d=c.mediaSource_;if(d.tc){b.preventDefault();b.stopPropagation();b.stopImmediatePropagation();c.nc=!0;for(b=0;b<d.sourceBuffers.length;++b)if(0==d.sourceBuffers[b].nc)return;d.tc=!1;}}
function Cj(b){b=b.target;for(var c=0;c<b.sourceBuffers.length;++c)b.sourceBuffers[c].removeEventListener("updateend",Bj,!1);b.removeEventListener("sourceclose",Cj,!1);}function Dj(){var b=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(c){return"mp2t"==c.split(/ *; */)[0].split("/")[1]?!1:b(c)};}
function Ej(){var b=MediaSource.isTypeSupported,c=/^dv(?:he|av)\./;MediaSource.isTypeSupported=function(d){for(var e=d.split(/ *; */),f=e[0],g={},h=1;h<e.length;++h){var k=e[h].split("="),l=k[0];k=k[1].replace(/"(.*)"/,"$1");g[l]=k;}e=g.codecs;if(!e)return b(d);var m=!1,r=!1;d=e.split(",").filter(function(b){if(c.test(b))return r=!0,!1;/^(hev|hvc)1\.2/.test(b)&&(m=!0);return!0});r&&(m=!1);g.codecs=d.join(",");m&&(g.eotf="smpte2084");for(var t in g)f+="; "+t+'="'+g[t]+'"';return cast.__platform__.canDisplayType(f)};}
vj(function(){if(window.MediaSource)if(window.cast&&cast.__platform__&&cast.__platform__.canDisplayType)Ej();else if(navigator.vendor&&0<=navigator.vendor.indexOf("Apple")){var b=navigator.appVersion;Dj();0<=b.indexOf("Version/8")?window.MediaSource=null:0<=b.indexOf("Version/9")?yj():0<=b.indexOf("Version/10")?(yj(),Aj()):0<=b.indexOf("Version/11")&&(yj(),zj());}});function Fj(b){this.f=[];this.b=[];this.a=[];(new R).V("pssh",this.c.bind(this)).parse(b.buffer);}Fj.prototype.c=function(b){if(!(1<b.version)){var c=Yb(b.s.Ba(16)),d=[];if(0<b.version)for(var e=b.s.B(),f=0;f<e;++f){var g=Yb(b.s.Ba(16));d.push(g);}e=b.s.B();b.s.D(e);this.b.push.apply(this.b,d);this.f.push(c);this.a.push({start:b.start,end:b.start+b.size-1});}};function Gj(b,c){try{var d=new Hj(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}
function Hj(b,c){this.keySystem=b;for(var d=!1,e=0;e<c.length;++e){var f=c[e],g={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:f.initDataTypes,sessionTypes:["temporary"],label:f.label},h=!1;if(f.audioCapabilities)for(var k=0;k<f.audioCapabilities.length;++k){var l=f.audioCapabilities[k];if(l.contentType){h=!0;var m=l.contentType.split(";")[0];MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.audioCapabilities.push(l),d=!0);}}if(f.videoCapabilities)for(k=
0;k<f.videoCapabilities.length;++k)l=f.videoCapabilities[k],l.contentType&&(h=!0,m=l.contentType.split(";")[0],MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.videoCapabilities.push(l),d=!0));h||(d=MSMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));"required"==f.persistentState&&(d=!1);if(d){this.a=g;return}}d=Error("Unsupported keySystem");d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}Hj.prototype.createMediaKeys=function(){var b=new Ij(this.keySystem);return Promise.resolve(b)};
Hj.prototype.getConfiguration=function(){return this.a};function Jj(b){var c=this.mediaKeys;c&&c!=b&&Kj(c,null);delete this.mediaKeys;return(this.mediaKeys=b)?Kj(b,this):Promise.resolve()}function Ij(b){this.a=new MSMediaKeys(b);this.b=new C;}Ij.prototype.createSession=function(b){var c=b||"temporary";if("temporary"!=c)throw new TypeError("Session type "+b+" is unsupported on this platform.");return new Lj(this.a,c)};Ij.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
function Kj(b,c){function d(){c.msSetMediaKeys(e.a);c.removeEventListener("loadedmetadata",d);}yb(b.b);if(!c)return Promise.resolve();D(b.b,c,"msneedkey",Mj);var e=b;try{return 1<=c.readyState?c.msSetMediaKeys(b.a):c.addEventListener("loadedmetadata",d),Promise.resolve()}catch(f){return Promise.reject(f)}}function Lj(b){K.call(this);this.c=null;this.g=b;this.b=this.a=null;this.f=new C;this.sessionId="";this.expiration=NaN;this.closed=new y;this.keyStatuses=new Nj;}Aa(Lj,K);n=Lj.prototype;
n.generateRequest=function(b,c){this.a=new y;try{this.c=this.g.createSession("video/mp4",new Uint8Array(c),null),D(this.f,this.c,"mskeymessage",this.Sd.bind(this)),D(this.f,this.c,"mskeyadded",this.Qd.bind(this)),D(this.f,this.c,"mskeyerror",this.Rd.bind(this)),Oj(this,"status-pending");}catch(d){this.a.reject(d);}return this.a};n.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};n.update=function(b){this.b=new y;try{this.c.update(new Uint8Array(b));}catch(c){this.b.reject(c);}return this.b};
n.close=function(){try{this.c.close(),this.closed.resolve(),yb(this.f);}catch(b){this.closed.reject(b);}return this.closed};n.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};
function Mj(b){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="cenc";if(b=b.initData){var d=new Fj(b);if(!(1>=d.a.length)){for(var e=[],f=0;f<d.a.length;f++)e.push(b.subarray(d.a[f].start,d.a[f].end+1));b=gb(e,Pj);for(e=d=0;e<b.length;e++)d+=b[e].length;d=new Uint8Array(d);for(f=e=0;f<b.length;f++)d.set(b[f],e),e+=b[f].length;b=d;}}c.initData=b;this.dispatchEvent(c);}function Pj(b,c){return Zb(b,c)}
n.Sd=function(b){this.a&&(this.a.resolve(),this.a=null);this.dispatchEvent(new E("message",{messageType:void 0==this.keyStatuses.a?"licenserequest":"licenserenewal",message:b.message.buffer}));};n.Qd=function(){this.a?(Oj(this,"usable"),this.a.resolve(),this.a=null):this.b&&(Oj(this,"usable"),this.b.resolve(),this.b=null);};
n.Rd=function(){var b=Error("EME PatchedMediaKeysMs key error");b.errorCode=this.c.error;if(null!=this.a)this.a.reject(b),this.a=null;else if(null!=this.b)this.b.reject(b),this.b=null;else switch(this.c.error.code){case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:Oj(this,"output-not-allowed");break;default:Oj(this,"internal-error");}};function Oj(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new E("keystatuseschange"));}
function Nj(){this.size=0;this.a=void 0;}var Qj;n=Nj.prototype;n.forEach=function(b){this.a&&b(this.a,Qj);};n.get=function(b){if(this.has(b))return this.a};n.has=function(b){var c=Qj;return this.a&&Zb(new Uint8Array(b),new Uint8Array(c))?!0:!1};n.entries=function(){};n.keys=function(){};n.values=function(){};
vj(function(){!window.HTMLVideoElement||!window.MSMediaKeys||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(Qj=(new Uint8Array([0])).buffer,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=Jj,window.MediaKeys=Ij,window.MediaKeySystemAccess=Hj,navigator.requestMediaKeySystemAccess=Gj);});function Rj(){return Promise.reject(Error("The key system specified is not supported."))}function Sj(b){return null==b?Promise.resolve():Promise.reject(Error("MediaKeys not supported."))}function Tj(){throw new TypeError("Illegal constructor.");}Tj.prototype.createSession=function(){};Tj.prototype.setServerCertificate=function(){};function Uj(){throw new TypeError("Illegal constructor.");}Uj.prototype.getConfiguration=function(){};Uj.prototype.createMediaKeys=function(){};
vj(function(){!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(navigator.requestMediaKeySystemAccess=Rj,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=Sj,window.MediaKeys=Tj,window.MediaKeySystemAccess=Uj);},-10);var Vj="";function Wj(b){var c=Vj;return c?c+b.charAt(0).toUpperCase()+b.slice(1):b}function Xj(b,c){try{var d=new Yj(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}function Zj(b){var c=this.mediaKeys;c&&c!=b&&ak(c,null);delete this.mediaKeys;(this.mediaKeys=b)&&ak(b,this);return Promise.resolve()}
function Yj(b,c){this.a=this.keySystem=b;var d=!1;"org.w3.clearkey"==b&&(this.a="webkit-org.w3.clearkey",d=!1);var e=!1;var f=document.getElementsByTagName("video");f=f.length?f[0]:document.createElement("video");for(var g=0;g<c.length;++g){var h=c[g],k={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:h.initDataTypes,sessionTypes:["temporary"],label:h.label},l=!1;if(h.audioCapabilities)for(var m=0;m<h.audioCapabilities.length;++m){var r=
h.audioCapabilities[m];if(r.contentType){l=!0;var t=r.contentType.split(";")[0];f.canPlayType(t,this.a)&&(k.audioCapabilities.push(r),e=!0);}}if(h.videoCapabilities)for(m=0;m<h.videoCapabilities.length;++m)r=h.videoCapabilities[m],r.contentType&&(l=!0,f.canPlayType(r.contentType,this.a)&&(k.videoCapabilities.push(r),e=!0));l||(e=f.canPlayType("video/mp4",this.a)||f.canPlayType("video/webm",this.a));"required"==h.persistentState&&(d?(k.persistentState="required",k.sessionTypes=["persistent-license"]):
e=!1);if(e){this.b=k;return}}d="Unsupported keySystem";if("org.w3.clearkey"==b||"com.widevine.alpha"==b)d="None of the requested configurations were supported.";d=Error(d);d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}Yj.prototype.createMediaKeys=function(){var b=new bk(this.a);return Promise.resolve(b)};Yj.prototype.getConfiguration=function(){return this.b};function bk(b){this.g=b;this.b=null;this.a=new C;this.c=[];this.f={};}
function ak(b,c){b.b=c;yb(b.a);var d=Vj;c&&(D(b.a,c,d+"needkey",b.fe.bind(b)),D(b.a,c,d+"keymessage",b.ee.bind(b)),D(b.a,c,d+"keyadded",b.ce.bind(b)),D(b.a,c,d+"keyerror",b.de.bind(b)));}n=bk.prototype;n.createSession=function(b){var c=b||"temporary";if("temporary"!=c&&"persistent-license"!=c)throw new TypeError("Session type "+b+" is unsupported on this platform.");b=this.b||document.createElement("video");b.src||(b.src="about:blank");c=new ck(b,this.g,c);this.c.push(c);return c};
n.setServerCertificate=function(){return Promise.resolve(!1)};n.fe=function(b){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="webm";c.initData=b.initData;this.b.dispatchEvent(c);};n.ee=function(b){var c=dk(this,b.sessionId);c&&(b=new E("message",{messageType:void 0==c.keyStatuses.a?"licenserequest":"licenserenewal",message:b.message}),c.b&&(c.b.resolve(),c.b=null),c.dispatchEvent(b));};
n.ce=function(b){if(b=dk(this,b.sessionId))ek(b,"usable"),b.a&&b.a.resolve(),b.a=null;};
n.de=function(b){var c=dk(this,b.sessionId);if(c){var d=Error("EME v0.1b key error");d.errorCode=b.errorCode;d.errorCode.systemCode=b.systemCode;!b.sessionId&&c.b?(d.method="generateRequest",45==b.systemCode&&(d.message="Unsupported session type."),c.b.reject(d),c.b=null):b.sessionId&&c.a?(d.method="update",c.a.reject(d),c.a=null):(d=b.systemCode,b.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?ek(c,"output-restricted"):1==d?ek(c,"expired"):ek(c,"internal-error"));}};
function dk(b,c){var d=b.f[c];return d?d:(d=b.c.shift())?(d.sessionId=c,b.f[c]=d):null}function ck(b,c,d){K.call(this);this.f=b;this.h=!1;this.a=this.b=null;this.c=c;this.g=d;this.sessionId="";this.expiration=NaN;this.closed=new y;this.keyStatuses=new fk;}Aa(ck,K);
function gk(b,c,d){if(b.h)return Promise.reject(Error("The session is already initialized."));b.h=!0;try{if("persistent-license"==b.g)if(d)var e=new Uint8Array(Rb("LOAD_SESSION|"+d));else{var f=Rb("PERSISTENT|"),g=new Uint8Array(f.byteLength+c.byteLength);g.set(new Uint8Array(f),0);g.set(new Uint8Array(c),f.byteLength);e=g;}else e=new Uint8Array(c);}catch(k){return Promise.reject(k)}b.b=new y;var h=Wj("generateKeyRequest");try{b.f[h](b.c,e);}catch(k){if("InvalidStateError"!=k.name)return b.b=null,Promise.reject(k);
setTimeout(function(){try{this.f[h](this.c,e);}catch(l){this.b.reject(l),this.b=null;}}.bind(b),10);}return b.b}n=ck.prototype;
n.dc=function(b,c){if(this.a)this.a.then(this.dc.bind(this,b,c))["catch"](this.dc.bind(this,b,c));else{this.a=b;if("webkit-org.w3.clearkey"==this.c){var d=G(c);var e=JSON.parse(d);"oct"!=e.keys[0].kty&&(this.a.reject(Error("Response is not a valid JSON Web Key Set.")),this.a=null);d=Wb(e.keys[0].k);e=Wb(e.keys[0].kid);}else d=new Uint8Array(c),e=null;var f=Wj("addKey");try{this.f[f](this.c,d,e,this.sessionId);}catch(g){this.a.reject(g),this.a=null;}}};
function ek(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new E("keystatuseschange"));}n.generateRequest=function(b,c){return gk(this,c,null)};n.load=function(b){return"persistent-license"==this.g?gk(this,null,b):Promise.reject(Error("Not a persistent session."))};n.update=function(b){var c=new y;this.dc(c,b);return c};
n.close=function(){if("persistent-license"!=this.g){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;var b=Wj("cancelKeyRequest");try{this.f[b](this.c,this.sessionId);}catch(c){}}this.closed.resolve();return this.closed};n.remove=function(){return"persistent-license"!=this.g?Promise.reject(Error("Not a persistent session.")):this.close()};function fk(){this.size=0;this.a=void 0;}var hk;n=fk.prototype;n.forEach=function(b){this.a&&b(this.a,hk);};n.get=function(b){if(this.has(b))return this.a};
n.has=function(b){var c=hk;return this.a&&Zb(new Uint8Array(b),new Uint8Array(c))?!0:!1};n.entries=function(){};n.keys=function(){};n.values=function(){};
vj(function(){if(!(!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration)){if(HTMLMediaElement.prototype.webkitGenerateKeyRequest)Vj="webkit";else if(!HTMLMediaElement.prototype.generateKeyRequest)return;hk=(new Uint8Array([0])).buffer;navigator.requestMediaKeySystemAccess=Xj;delete HTMLMediaElement.prototype.mediaKeys;HTMLMediaElement.prototype.mediaKeys=null;HTMLMediaElement.prototype.setMediaKeys=Zj;window.MediaKeys=bk;window.MediaKeySystemAccess=
Yj;}});vj(function(){if(window.HTMLMediaElement){var b=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){var c=b.apply(this,arguments);c&&c["catch"](function(){});return c};}});function ik(){return{droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}}vj(function(){if(window.HTMLVideoElement){var b=HTMLVideoElement.prototype;!b.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in b&&(b.getVideoPlaybackQuality=ik);}});function jk(b,c,d){return new window.TextTrackCue(b,c,d)}function kk(b,c,d){return new window.TextTrackCue(b+"-"+c+"-"+d,b,c,d)}vj(function(){if(!window.VTTCue&&window.TextTrackCue){var b=TextTrackCue.length;if(3==b)window.VTTCue=jk;else if(6==b)window.VTTCue=kk;else{try{var c=!!jk(1,2,"");}catch(d){c=!1;}c&&(window.VTTCue=jk);}}});function lk(){}lk.prototype.parseInit=function(){};
lk.prototype.parseMedia=function(b,c){var d=G(b),e=[],f=new DOMParser,g=null;try{g=f.parseFromString(d,"text/xml");}catch(Da){throw new u(2,2,2005);}if(g){if(f=g.getElementsByTagName("tt")[0]){g=f.getAttribute("ttp:frameRate");var h=f.getAttribute("ttp:subFrameRate");var k=f.getAttribute("ttp:frameRateMultiplier");var l=f.getAttribute("ttp:tickRate");d=f.getAttribute("xml:space")||"default";}else throw new u(2,2,2005);if("default"!=d&&"preserve"!=d)throw new u(2,2,2005);d="default"==d;g=new mk(g,h,
k,l);h=nk(f.getElementsByTagName("styling")[0]);k=nk(f.getElementsByTagName("layout")[0]);l=[];for(var m=0;m<k.length;m++){var r=k[m],t=h;var v=new wc;var w=r.getAttribute("xml:id");if(w){v.id=w;var x;if(x=ok(r,t,"tts:extent"))x=(w=pk.exec(x))||qk.exec(x),null!=x&&(v.width=Number(x[1]),v.height=Number(x[2]),v.widthUnits=w?Jc:0,v.heightUnits=w?Jc:0);if(r=ok(r,t,"tts:origin"))x=(w=pk.exec(r))||qk.exec(r),null!=x&&(v.viewportAnchorX=Number(x[1]),v.viewportAnchorY=Number(x[2]),v.viewportAnchorUnits=w?
Jc:0);}else v=null;v&&l.push(v);}f=nk(f.getElementsByTagName("body")[0]);for(m=0;m<f.length;m++)(v=rk(f[m],c.periodStart,g,h,k,l,d))&&e.push(v);}return e};
var pk=/^(\d{1,2}|100)% (\d{1,2}|100)%$/,sk=/^(\d+px|\d+em)$/,qk=/^(\d+)px (\d+)px$/,tk=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,uk=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,vk=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,wk=/^(\d*(?:\.\d*)?)f$/,xk=/^(\d*(?:\.\d*)?)t$/,yk=/^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,zk={left:"start",center:Bc,right:"end",start:"start",end:"end"},Ak={left:"line-left",center:"center",right:"line-right"};
function nk(b){var c=[];if(!b)return c;for(var d=b.childNodes,e=0;e<d.length;e++){var f="span"==d[e].nodeName&&"p"==b.nodeName;d[e].nodeType!=Node.ELEMENT_NODE||"br"==d[e].nodeName||f||(f=nk(d[e]),c=c.concat(f));}c.length||c.push(b);return c}function Bk(b,c){for(var d=b.childNodes,e=0;e<d.length;e++)if("br"==d[e].nodeName&&0<e)d[e-1].textContent+="\n";else if(0<d[e].childNodes.length)Bk(d[e],c);else if(c){var f=d[e].textContent.trim();f=f.replace(/\s+/g," ");d[e].textContent=f;}}
function rk(b,c,d,e,f,g,h){if(!b.hasAttribute("begin")&&!b.hasAttribute("end")&&/^\s*$/.test(b.textContent))return null;Bk(b,h);h=Ck(b.getAttribute("begin"),d);var k=Ck(b.getAttribute("end"),d);d=Ck(b.getAttribute("dur"),d);var l=b.textContent;null==k&&null!=d&&(k=h+d);if(null==h||null==k)throw new u(2,2,2001);c=new H(h+c,k+c,l);if((f=Dk(b,"region",f))&&f.getAttribute("xml:id")){var m=f.getAttribute("xml:id");g=g.filter(function(b){return b.id==m});c.region=g[0];}Ek(c,b,f,e);return c}
function Ek(b,c,d,e){"rtl"==Fk(c,d,e,"tts:direction")&&(b.writingDirection=1);var f=Fk(c,d,e,"tts:writingMode");"tb"==f||"tblr"==f?b.writingDirection=2:"tbrl"==f?b.writingDirection=3:"rltb"==f||"rl"==f?b.writingDirection=1:f&&(b.writingDirection=zc);if(f=Fk(c,d,e,"tts:textAlign"))b.positionAlign=Ak[f],b.lineAlign=zk[f],b.textAlign=Fc[f.toUpperCase()];if(f=Fk(c,d,e,"tts:displayAlign"))b.displayAlign=Gc[f.toUpperCase()];if(f=Fk(c,d,e,"tts:color"))b.color=f;if(f=Fk(c,d,e,"tts:backgroundColor"))b.backgroundColor=
f;if(f=Fk(c,d,e,"tts:fontFamily"))b.fontFamily=f;(f=Fk(c,d,e,"tts:fontWeight"))&&"bold"==f&&(b.fontWeight=700);(f=Fk(c,d,e,"tts:wrapOption"))&&"noWrap"==f&&(b.wrapLine=!1);(f=Fk(c,d,e,"tts:lineHeight"))&&f.match(sk)&&(b.lineHeight=f);(f=Fk(c,d,e,"tts:fontSize"))&&f.match(sk)&&(b.fontSize=f);if(f=Fk(c,d,e,"tts:fontStyle"))b.fontStyle=Ic[f.toUpperCase()];(d=ok(d,e,"tts:textDecoration"))&&Gk(b,d);(c=Hk(c,e,"tts:textDecoration"))&&Gk(b,c);}
function Gk(b,c){for(var d=c.split(" "),e=0;e<d.length;e++)switch(d[e]){case "underline":0>b.textDecoration.indexOf("underline")&&b.textDecoration.push("underline");break;case "noUnderline":0<=b.textDecoration.indexOf("underline")&&ib(b.textDecoration,"underline");break;case "lineThrough":0>b.textDecoration.indexOf("lineThrough")&&b.textDecoration.push("lineThrough");break;case "noLineThrough":0<=b.textDecoration.indexOf("lineThrough")&&ib(b.textDecoration,"lineThrough");break;case "overline":0>b.textDecoration.indexOf("overline")&&
b.textDecoration.push("overline");break;case "noOverline":0<=b.textDecoration.indexOf("overline")&&ib(b.textDecoration,"overline");}}function Fk(b,c,d,e){return(b=Hk(b,d,e))?b:ok(c,d,e)}function ok(b,c,d){for(var e=nk(b),f=0;f<e.length;f++){var g=e[f].getAttribute(d);if(g)return g}return(b=Dk(b,"style",c))?b.getAttribute(d):null}function Hk(b,c,d){return(b=Dk(b,"style",c))?b.getAttribute(d):null}
function Dk(b,c,d){if(!b||1>d.length)return null;var e=null,f=b;for(b=null;f&&!(b=f.getAttribute(c))&&(f=f.parentNode,f instanceof Element););if(c=b)for(b=0;b<d.length;b++)if(d[b].getAttribute("xml:id")==c){e=d[b];break}return e}
function Ck(b,c){var d=null;if(tk.test(b)){d=tk.exec(b);var e=Number(d[1]),f=Number(d[2]),g=Number(d[3]),h=Number(d[4]);h+=(Number(d[5])||0)/c.b;g+=h/c.frameRate;d=g+60*f+3600*e;}else uk.test(b)?d=Ik(uk,b):vk.test(b)?d=Ik(vk,b):wk.test(b)?(d=wk.exec(b),d=Number(d[1])/c.frameRate):xk.test(b)?(d=xk.exec(b),d=Number(d[1])/c.a):yk.test(b)&&(d=Ik(yk,b));return d}
function Ik(b,c){var d=b.exec(c);return null==d||""==d[0]?null:(Number(d[4])||0)/1E3+(Number(d[3])||0)+60*(Number(d[2])||0)+3600*(Number(d[1])||0)}function mk(b,c,d,e){this.frameRate=Number(b)||30;this.b=Number(c)||1;this.a=Number(e);0==this.a&&(this.a=b?this.frameRate*this.b:1);d&&(b=/^(\d+) (\d+)$/g.exec(d))&&(this.frameRate*=b[1]/b[2]);}I["application/ttml+xml"]=lk;function Jk(){this.a=new lk;}Jk.prototype.parseInit=function(b){var c=!1;(new R).C("moov",S).C("trak",S).C("mdia",S).C("minf",S).C("stbl",S).V("stsd",He).C("stpp",function(b){c=!0;b.na.stop();}).parse(b);if(!c)throw new u(2,2,2007);};Jk.prototype.parseMedia=function(b,c){var d=!1,e=[];(new R).C("mdat",Ie(function(b){d=!0;e=e.concat(this.a.parseMedia(b,c));}.bind(this))).parse(b);if(!d)throw new u(2,2,2007);return e};I['application/mp4; codecs="stpp"']=Jk;
I['application/mp4; codecs="stpp.TTML.im1t"']=Jk;function Kk(){}Kk.prototype.parseInit=function(){};
Kk.prototype.parseMedia=function(b,c){var d=G(b);d=d.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n");d=d.split(/\n{2,}/m);if(!/^WEBVTT($|[ \t\n])/m.test(d[0]))throw new u(2,2,2E3);var e=c.segmentStart;if(null==e&&(e=0,0<=d[0].indexOf("X-TIMESTAMP-MAP"))){var f=d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),g=d[0].match(/MPEGTS:(\d+)/m);f&&g&&(e=Lk(new Mf(f[1])),e=c.periodStart+(Number(g[1])/9E4-e));}g=[];var h=d[0].split("\n");for(f=1;f<h.length;f++)if(/^Region:/.test(h[f])){var k=new Mf(h[f]),
l=new wc;Pf(k);Nf(k);for(var m=Pf(k);m;){var r=l,t=m;(m=/^id=(.*)$/.exec(t))?r.id=m[1]:(m=/^width=(\d{1,2}|100)%$/.exec(t))?r.width=Number(m[1]):(m=/^lines=(\d+)$/.exec(t))?(r.height=Number(m[1]),r.heightUnits=2):(m=/^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(t))?(r.regionAnchorX=Number(m[1]),r.regionAnchorY=Number(m[2])):(m=/^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(t))?(r.viewportAnchorX=Number(m[1]),r.viewportAnchorY=Number(m[2])):/^scroll=up$/.exec(t)&&(r.scroll="up");Nf(k);
m=Pf(k);}g.push(l);}f=[];for(k=1;k<d.length;k++){h=d[k].split("\n");m=h;t=e;h=g;if(1==m.length&&!m[0]||/^NOTE($|[ \t])/.test(m[0])||"STYLE"==m[0])h=null;else{l=null;0>m[0].indexOf("--\x3e")&&(l=m[0],m.splice(0,1));r=new Mf(m[0]);var v=Lk(r),w=Of(r,/[ \t]+--\x3e[ \t]+/g),x=Lk(r);if(null==v||null==w||null==x)throw new u(2,2,2001);m=new H(v+t,x+t,m.slice(1).join("\n").trim());Nf(r);for(t=Pf(r);t;)Mk(m,t,h),Nf(r),t=Pf(r);null!=l&&(m.id=l);h=m;}h&&f.push(h);}return f};
function Mk(b,c,d){var e;if(e=/^align:(start|middle|center|end|left|right)$/.exec(c))c=e[1],"middle"==c?b.textAlign=yc:b.textAlign=Fc[c.toUpperCase()];else if(e=/^vertical:(lr|rl)$/.exec(c))b.writingDirection="lr"==e[1]?2:3;else if(e=/^size:([\d.]+)%$/.exec(c))b.size=Number(e[1]);else if(e=/^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(c))b.position=Number(e[1]),e[2]&&(c=e[2],b.positionAlign="line-left"==c||"start"==c?"line-left":"line-right"==c||"end"==c?"line-right":"center");
else if(e=/^region:(.*)$/.exec(c)){if(c=Nk(d,e[1]))b.region=c;}else if(d=/^line:([\d.]+)%(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=1,b.line=Number(d[1]),d[2]&&(b.lineAlign=Hc[d[2].toUpperCase()]);else if(d=/^line:(-?\d+)(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=Ac,b.line=Number(d[1]),d[2]&&(b.lineAlign=Hc[d[2].toUpperCase()]);}function Nk(b,c){var d=b.filter(function(b){return b.id==c});return d.length?d[0]:null}
function Lk(b){b=Of(b,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);if(null==b)return null;var c=Number(b[2]),d=Number(b[3]);return 59<c||59<d?null:Number(b[4])/1E3+d+60*c+3600*(Number(b[1])||0)}I["text/vtt"]=Kk;I['text/vtt; codecs="vtt"']=Kk;function Ok(){this.a=null;}Ok.prototype.parseInit=function(b){var c=!1;(new R).C("moov",S).C("trak",S).C("mdia",S).V("mdhd",function(b){0==b.version?(b.s.D(4),b.s.D(4),this.a=b.s.B(),b.s.D(4)):(b.s.D(8),b.s.D(8),this.a=b.s.B(),b.s.D(8));b.s.D(4);}.bind(this)).C("minf",S).C("stbl",S).V("stsd",He).C("wvtt",function(){c=!0;}).parse(b);if(!this.a)throw new u(2,2,2008);if(!c)throw new u(2,2,2008);};
Ok.prototype.parseMedia=function(b,c){var d=this;if(!this.a)throw new u(2,2,2008);var e=0,f=[],g,h=[],k=!1,l=!1,m=!1,r=null;(new R).C("moof",S).C("traf",S).V("tfdt",function(b){k=!0;e=0==b.version?b.s.B():b.s.Pa();}).V("tfhd",function(b){var c=b.flags;b=b.s;b.D(4);c&1&&b.D(8);c&2&&b.D(4);r=c&8?b.B():null;}).V("trun",function(b){l=!0;var c=b.version,d=b.flags;b=b.s;var e=b.B();d&1&&b.D(4);d&4&&b.D(4);for(var g=[],h=0;h<e;h++){var k={duration:null,sampleSize:null,ec:null};d&256&&(k.duration=b.B());d&
512&&(k.sampleSize=b.B());d&1024&&b.D(4);d&2048&&(k.ec=0==c?b.B():b.Kc());g.push(k);}f=g;}).C("mdat",Ie(function(b){m=!0;g=b;})).parse(b);if(!m&&!k&&!l)throw new u(2,2,2008);var t=e,v=new DataView(g.buffer,g.byteOffset,g.byteLength),w=new Q(v,0);f.forEach(function(b){var f=b.duration||r,g=b.ec?e+b.ec:t;t=g+(f||0);var k=0;do{var l=w.B();k+=l;var m=w.B(),v=null;"vttc"==Je(m)?8<l&&(v=w.Ba(l-8)):w.D(l-8);f&&v&&h.push(Pk(v,c.periodStart+g/d.a,c.periodStart+t/d.a));}while(b.sampleSize&&k<b.sampleSize)});return h.filter(Eb)};
function Pk(b,c,d){var e,f,g;(new R).C("payl",Ie(function(b){e=G(b);})).C("iden",Ie(function(b){f=G(b);})).C("sttg",Ie(function(b){g=G(b);})).parse(b);return e?Qk(e,f,g,c,d):null}function Qk(b,c,d,e,f){b=new H(e,f,b);c&&(b.id=c);if(d)for(c=new Mf(d),d=Pf(c);d;)Mk(b,d,[]),Nf(c),d=Pf(c);return b}I['application/mp4; codecs="wvtt"']=Ok;}.call(g,this));
if ('object'!="undefined"&&module.exports)module.exports=g.shaka;
else if (typeof(undefined)!="undefined" && undefined.amd)undefined(function(){return g.shaka});
else this.shaka=g.shaka;
}).call(window);


});

/**
 * @file time-ranges.js
 *
 * Should create a fake TimeRange object
 * Mimics an HTML5 time range instance, which has functions that
 * return the start and end times for a range
 * TimeRanges are returned by the buffered() method
 *
 * @param  {(Number|Array)} Start of a single range or an array of ranges
 * @param  {Number} End of a single range
 * @private
 * @method createTimeRanges
 */
function createTimeRanges(start, end) {
  if (Array.isArray(start)) {
    return createTimeRangesObj(start);
  } else if (start === undefined || end === undefined) {
    return createTimeRangesObj();
  }
  return createTimeRangesObj([[start, end]]);
}

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

function getRange(fnName, valueIndex, ranges, rangeIndex) {
  if (rangeIndex === undefined) {
    log.warn('DEPRECATED: Function \'' + fnName + '\' on \'TimeRanges\' called without an index argument.');
    rangeIndex = 0;
  }
  rangeCheck(fnName, rangeIndex, ranges.length - 1);
  return ranges[rangeIndex][valueIndex];
}

function rangeCheck(fnName, index, maxIndex) {
  if (index < 0 || index > maxIndex) {
    throw new Error('Failed to execute \'' + fnName + '\' on \'TimeRanges\': The index provided (' + index + ') is greater than or equal to the maximum bound (' + maxIndex + ').');
  }
}

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
        _classCallCheck(this, Mixins);
    }

    _createClass(Mixins, [{
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

function ISO639Converter() {
  this['aar'] = { 'ISO_639-1': 'aa', 'ISO_639-3': 'aar' };
  this['abk'] = { 'ISO_639-1': 'ab', 'ISO_639-3': 'abk' };
  this['ave'] = { 'ISO_639-1': 'ae', 'ISO_639-3': 'ave' };
  this['afr'] = { 'ISO_639-1': 'af', 'ISO_639-3': 'afr' };
  this['aka'] = { 'ISO_639-1': 'ak', 'ISO_639-3': 'aka' };
  this['amh'] = { 'ISO_639-1': 'am', 'ISO_639-3': 'amh' };
  this['arg'] = { 'ISO_639-1': 'an', 'ISO_639-3': 'arg' };
  this['ara'] = { 'ISO_639-1': 'ar', 'ISO_639-3': 'ara' };
  this['asm'] = { 'ISO_639-1': 'as', 'ISO_639-3': 'asm' };
  this['ava'] = { 'ISO_639-1': 'av', 'ISO_639-3': 'ava' };
  this['aym'] = { 'ISO_639-1': 'ay', 'ISO_639-3': 'aym' };
  this['aze'] = { 'ISO_639-1': 'az', 'ISO_639-3': 'aze' };
  this['bak'] = { 'ISO_639-1': 'ba', 'ISO_639-3': 'bak' };
  this['bel'] = { 'ISO_639-1': 'be', 'ISO_639-3': 'bel' };
  this['bul'] = { 'ISO_639-1': 'bg', 'ISO_639-3': 'bul' };
  this['bis'] = { 'ISO_639-1': 'bi', 'ISO_639-3': 'bis' };
  this['bam'] = { 'ISO_639-1': 'bm', 'ISO_639-3': 'bam' };
  this['ben'] = { 'ISO_639-1': 'bn', 'ISO_639-3': 'ben' };
  this['bod'] = { 'ISO_639-1': 'bo', 'ISO_639-3': 'bod' };
  this['bre'] = { 'ISO_639-1': 'br', 'ISO_639-3': 'bre' };
  this['bos'] = { 'ISO_639-1': 'bs', 'ISO_639-3': 'bos' };
  this['cat'] = { 'ISO_639-1': 'ca', 'ISO_639-3': 'cat' };
  this['che'] = { 'ISO_639-1': 'ce', 'ISO_639-3': 'che' };
  this['cha'] = { 'ISO_639-1': 'ch', 'ISO_639-3': 'cha' };
  this['cos'] = { 'ISO_639-1': 'co', 'ISO_639-3': 'cos' };
  this['cre'] = { 'ISO_639-1': 'cr', 'ISO_639-3': 'cre' };
  this['ces'] = { 'ISO_639-1': 'cs', 'ISO_639-3': 'ces' };
  this['chu'] = { 'ISO_639-1': 'cu', 'ISO_639-3': 'chu' };
  this['chv'] = { 'ISO_639-1': 'cv', 'ISO_639-3': 'chv' };
  this['cym'] = { 'ISO_639-1': 'cy', 'ISO_639-3': 'cym' };
  this['dan'] = { 'ISO_639-1': 'da', 'ISO_639-3': 'dan' };
  this['deu'] = { 'ISO_639-1': 'de', 'ISO_639-3': 'deu' };
  this['div'] = { 'ISO_639-1': 'dv', 'ISO_639-3': 'div' };
  this['dzo'] = { 'ISO_639-1': 'dz', 'ISO_639-3': 'dzo' };
  this['ewe'] = { 'ISO_639-1': 'ee', 'ISO_639-3': 'ewe' };
  this['ell'] = { 'ISO_639-1': 'el', 'ISO_639-3': 'ell' };
  this['eng'] = { 'ISO_639-1': 'en', 'ISO_639-3': 'eng' };
  this['epo'] = { 'ISO_639-1': 'eo', 'ISO_639-3': 'epo' };
  this['spa'] = { 'ISO_639-1': 'es', 'ISO_639-3': 'spa' };
  this['est'] = { 'ISO_639-1': 'et', 'ISO_639-3': 'est' };
  this['eus'] = { 'ISO_639-1': 'eu', 'ISO_639-3': 'eus' };
  this['fas'] = { 'ISO_639-1': 'fa', 'ISO_639-3': 'fas' };
  this['ful'] = { 'ISO_639-1': 'ff', 'ISO_639-3': 'ful' };
  this['fin'] = { 'ISO_639-1': 'fi', 'ISO_639-3': 'fin' };
  this['fij'] = { 'ISO_639-1': 'fj', 'ISO_639-3': 'fij' };
  this['fao'] = { 'ISO_639-1': 'fo', 'ISO_639-3': 'fao' };
  this['fra'] = { 'ISO_639-1': 'fr', 'ISO_639-3': 'fra' };
  this['fry'] = { 'ISO_639-1': 'fy', 'ISO_639-3': 'fry' };
  //Bugfix some track have "ger" as code
  this['ger'] = { 'ISO_639-1': 'de', 'ISO_639-3': 'deu' };
  this['gle'] = { 'ISO_639-1': 'ga', 'ISO_639-3': 'gle' };
  this['gla'] = { 'ISO_639-1': 'gd', 'ISO_639-3': 'gla' };
  this['glg'] = { 'ISO_639-1': 'gl', 'ISO_639-3': 'glg' };
  this['grn'] = { 'ISO_639-1': 'gn', 'ISO_639-3': 'grn' };
  this['guj'] = { 'ISO_639-1': 'gu', 'ISO_639-3': 'guj' };
  this['glv'] = { 'ISO_639-1': 'gv', 'ISO_639-3': 'glv' };
  this['hau'] = { 'ISO_639-1': 'ha', 'ISO_639-3': 'hau' };
  this['heb'] = { 'ISO_639-1': 'he', 'ISO_639-3': 'heb' };
  this['hin'] = { 'ISO_639-1': 'hi', 'ISO_639-3': 'hin' };
  this['hmo'] = { 'ISO_639-1': 'ho', 'ISO_639-3': 'hmo' };
  this['hrv'] = { 'ISO_639-1': 'hr', 'ISO_639-3': 'hrv' };
  this['hat'] = { 'ISO_639-1': 'ht', 'ISO_639-3': 'hat' };
  this['hun'] = { 'ISO_639-1': 'hu', 'ISO_639-3': 'hun' };
  this['hye'] = { 'ISO_639-1': 'hy', 'ISO_639-3': 'hye' };
  this['her'] = { 'ISO_639-1': 'hz', 'ISO_639-3': 'her' };
  this['ina'] = { 'ISO_639-1': 'ia', 'ISO_639-3': 'ina' };
  this['ind'] = { 'ISO_639-1': 'id', 'ISO_639-3': 'ind' };
  this['ile'] = { 'ISO_639-1': 'ie', 'ISO_639-3': 'ile' };
  this['ibo'] = { 'ISO_639-1': 'ig', 'ISO_639-3': 'ibo' };
  this['iii'] = { 'ISO_639-1': 'ii', 'ISO_639-3': 'iii' };
  this['ipk'] = { 'ISO_639-1': 'ik', 'ISO_639-3': 'ipk' };
  this['ido'] = { 'ISO_639-1': 'io', 'ISO_639-3': 'ido' };
  this['isl'] = { 'ISO_639-1': 'is', 'ISO_639-3': 'isl' };
  this['ita'] = { 'ISO_639-1': 'it', 'ISO_639-3': 'ita' };
  this['iku'] = { 'ISO_639-1': 'iu', 'ISO_639-3': 'iku' };
  this['jpn'] = { 'ISO_639-1': 'ja', 'ISO_639-3': 'jpn' };
  this['jav'] = { 'ISO_639-1': 'jv', 'ISO_639-3': 'jav' };
  this['kat'] = { 'ISO_639-1': 'ka', 'ISO_639-3': 'kat' };
  this['kon'] = { 'ISO_639-1': 'kg', 'ISO_639-3': 'kon' };
  this['kik'] = { 'ISO_639-1': 'ki', 'ISO_639-3': 'kik' };
  this['kua'] = { 'ISO_639-1': 'kj', 'ISO_639-3': 'kua' };
  this['kaz'] = { 'ISO_639-1': 'kk', 'ISO_639-3': 'kaz' };
  this['kal'] = { 'ISO_639-1': 'kl', 'ISO_639-3': 'kal' };
  this['khm'] = { 'ISO_639-1': 'km', 'ISO_639-3': 'khm' };
  this['kan'] = { 'ISO_639-1': 'kn', 'ISO_639-3': 'kan' };
  this['kor'] = { 'ISO_639-1': 'ko', 'ISO_639-3': 'kor' };
  this['kau'] = { 'ISO_639-1': 'kr', 'ISO_639-3': 'kau' };
  this['kas'] = { 'ISO_639-1': 'ks', 'ISO_639-3': 'kas' };
  this['kur'] = { 'ISO_639-1': 'ku', 'ISO_639-3': 'kur' };
  this['kom'] = { 'ISO_639-1': 'kv', 'ISO_639-3': 'kom' };
  this['cor'] = { 'ISO_639-1': 'kw', 'ISO_639-3': 'cor' };
  this['kir'] = { 'ISO_639-1': 'ky', 'ISO_639-3': 'kir' };
  this['lat'] = { 'ISO_639-1': 'la', 'ISO_639-3': 'lat' };
  this['ltz'] = { 'ISO_639-1': 'lb', 'ISO_639-3': 'ltz' };
  this['lug'] = { 'ISO_639-1': 'lg', 'ISO_639-3': 'lug' };
  this['lim'] = { 'ISO_639-1': 'li', 'ISO_639-3': 'lim' };
  this['lin'] = { 'ISO_639-1': 'ln', 'ISO_639-3': 'lin' };
  this['lao'] = { 'ISO_639-1': 'lo', 'ISO_639-3': 'lao' };
  this['lit'] = { 'ISO_639-1': 'lt', 'ISO_639-3': 'lit' };
  this['lub'] = { 'ISO_639-1': 'lu', 'ISO_639-3': 'lub' };
  this['lav'] = { 'ISO_639-1': 'lv', 'ISO_639-3': 'lav' };
  this['mlg'] = { 'ISO_639-1': 'mg', 'ISO_639-3': 'mlg' };
  this['mah'] = { 'ISO_639-1': 'mh', 'ISO_639-3': 'mah' };
  this['mri'] = { 'ISO_639-1': 'mi', 'ISO_639-3': 'mri' };
  this['mkd'] = { 'ISO_639-1': 'mk', 'ISO_639-3': 'mkd' };
  this['mal'] = { 'ISO_639-1': 'ml', 'ISO_639-3': 'mal' };
  this['mon'] = { 'ISO_639-1': 'mn', 'ISO_639-3': 'mon' };
  this['mar'] = { 'ISO_639-1': 'mr', 'ISO_639-3': 'mar' };
  this['msa'] = { 'ISO_639-1': 'ms', 'ISO_639-3': 'msa' };
  this['mlt'] = { 'ISO_639-1': 'mt', 'ISO_639-3': 'mlt' };
  this['mya'] = { 'ISO_639-1': 'my', 'ISO_639-3': 'mya' };
  this['nau'] = { 'ISO_639-1': 'na', 'ISO_639-3': 'nau' };
  this['nob'] = { 'ISO_639-1': 'nb', 'ISO_639-3': 'nob' };
  this['nde'] = { 'ISO_639-1': 'nd', 'ISO_639-3': 'nde' };
  this['nep'] = { 'ISO_639-1': 'ne', 'ISO_639-3': 'nep' };
  this['ndo'] = { 'ISO_639-1': 'ng', 'ISO_639-3': 'ndo' };
  this['nld'] = { 'ISO_639-1': 'nl', 'ISO_639-3': 'nld' };
  this['nno'] = { 'ISO_639-1': 'nn', 'ISO_639-3': 'nno' };
  this['nor'] = { 'ISO_639-1': 'no', 'ISO_639-3': 'nor' };
  this['nbl'] = { 'ISO_639-1': 'nr', 'ISO_639-3': 'nbl' };
  this['nav'] = { 'ISO_639-1': 'nv', 'ISO_639-3': 'nav' };
  this['nya'] = { 'ISO_639-1': 'ny', 'ISO_639-3': 'nya' };
  this['oci'] = { 'ISO_639-1': 'oc', 'ISO_639-3': 'oci' };
  this['oji'] = { 'ISO_639-1': 'oj', 'ISO_639-3': 'oji' };
  this['orm'] = { 'ISO_639-1': 'om', 'ISO_639-3': 'orm' };
  this['ori'] = { 'ISO_639-1': 'or', 'ISO_639-3': 'ori' };
  this['oss'] = { 'ISO_639-1': 'os', 'ISO_639-3': 'oss' };
  this['pan'] = { 'ISO_639-1': 'pa', 'ISO_639-3': 'pan' };
  this['pli'] = { 'ISO_639-1': 'pi', 'ISO_639-3': 'pli' };
  this['pol'] = { 'ISO_639-1': 'pl', 'ISO_639-3': 'pol' };
  this['pus'] = { 'ISO_639-1': 'ps', 'ISO_639-3': 'pus' };
  this['por'] = { 'ISO_639-1': 'pt', 'ISO_639-3': 'por' };
  this['que'] = { 'ISO_639-1': 'qu', 'ISO_639-3': 'que' };
  this['roh'] = { 'ISO_639-1': 'rm', 'ISO_639-3': 'roh' };
  this['run'] = { 'ISO_639-1': 'rn', 'ISO_639-3': 'run' };
  this['ron'] = { 'ISO_639-1': 'ro', 'ISO_639-3': 'ron' };
  this['rus'] = { 'ISO_639-1': 'ru', 'ISO_639-3': 'rus' };
  this['kin'] = { 'ISO_639-1': 'rw', 'ISO_639-3': 'kin' };
  this['san'] = { 'ISO_639-1': 'sa', 'ISO_639-3': 'san' };
  this['srd'] = { 'ISO_639-1': 'sc', 'ISO_639-3': 'srd' };
  this['snd'] = { 'ISO_639-1': 'sd', 'ISO_639-3': 'snd' };
  this['sme'] = { 'ISO_639-1': 'se', 'ISO_639-3': 'sme' };
  this['sag'] = { 'ISO_639-1': 'sg', 'ISO_639-3': 'sag' };
  this['hbs'] = { 'ISO_639-1': 'sh (deprecated)', 'ISO_639-3': 'hbs' };
  this['sin'] = { 'ISO_639-1': 'si', 'ISO_639-3': 'sin' };
  this['slk'] = { 'ISO_639-1': 'sk', 'ISO_639-3': 'slk' };
  this['slv'] = { 'ISO_639-1': 'sl', 'ISO_639-3': 'slv' };
  this['smo'] = { 'ISO_639-1': 'sm', 'ISO_639-3': 'smo' };
  this['sna'] = { 'ISO_639-1': 'sn', 'ISO_639-3': 'sna' };
  this['som'] = { 'ISO_639-1': 'so', 'ISO_639-3': 'som' };
  this['sqi'] = { 'ISO_639-1': 'sq', 'ISO_639-3': 'sqi' };
  this['srp'] = { 'ISO_639-1': 'sr', 'ISO_639-3': 'srp' };
  this['ssw'] = { 'ISO_639-1': 'ss', 'ISO_639-3': 'ssw' };
  this['sot'] = { 'ISO_639-1': 'st', 'ISO_639-3': 'sot' };
  this['sun'] = { 'ISO_639-1': 'su', 'ISO_639-3': 'sun' };
  this['swe'] = { 'ISO_639-1': 'sv', 'ISO_639-3': 'swe' };
  this['swa'] = { 'ISO_639-1': 'sw', 'ISO_639-3': 'swa' };
  this['tam'] = { 'ISO_639-1': 'ta', 'ISO_639-3': 'tam' };
  this['tel'] = { 'ISO_639-1': 'te', 'ISO_639-3': 'tel' };
  this['tgk'] = { 'ISO_639-1': 'tg', 'ISO_639-3': 'tgk' };
  this['tha'] = { 'ISO_639-1': 'th', 'ISO_639-3': 'tha' };
  this['tir'] = { 'ISO_639-1': 'ti', 'ISO_639-3': 'tir' };
  this['tuk'] = { 'ISO_639-1': 'tk', 'ISO_639-3': 'tuk' };
  this['tgl'] = { 'ISO_639-1': 'tl', 'ISO_639-3': 'tgl' };
  this['tsn'] = { 'ISO_639-1': 'tn', 'ISO_639-3': 'tsn' };
  this['ton'] = { 'ISO_639-1': 'to', 'ISO_639-3': 'ton' };
  this['tur'] = { 'ISO_639-1': 'tr', 'ISO_639-3': 'tur' };
  this['tso'] = { 'ISO_639-1': 'ts', 'ISO_639-3': 'tso' };
  this['tat'] = { 'ISO_639-1': 'tt', 'ISO_639-3': 'tat' };
  this['twi'] = { 'ISO_639-1': 'tw', 'ISO_639-3': 'twi' };
  this['tah'] = { 'ISO_639-1': 'ty', 'ISO_639-3': 'tah' };
  this['uig'] = { 'ISO_639-1': 'ug', 'ISO_639-3': 'uig' };
  this['ukr'] = { 'ISO_639-1': 'uk', 'ISO_639-3': 'ukr' };
  this['urd'] = { 'ISO_639-1': 'ur', 'ISO_639-3': 'urd' };
  this['uzb'] = { 'ISO_639-1': 'uz', 'ISO_639-3': 'uzb' };
  this['ven'] = { 'ISO_639-1': 've', 'ISO_639-3': 'ven' };
  this['vie'] = { 'ISO_639-1': 'vi', 'ISO_639-3': 'vie' };
  this['vol'] = { 'ISO_639-1': 'vo', 'ISO_639-3': 'vol' };
  this['wln'] = { 'ISO_639-1': 'wa', 'ISO_639-3': 'wln' };
  this['wol'] = { 'ISO_639-1': 'wo', 'ISO_639-3': 'wol' };
  this['xho'] = { 'ISO_639-1': 'xh', 'ISO_639-3': 'xho' };
  this['yid'] = { 'ISO_639-1': 'yi', 'ISO_639-3': 'yid' };
  this['yor'] = { 'ISO_639-1': 'yo', 'ISO_639-3': 'yor' };
  this['zha'] = { 'ISO_639-1': 'za', 'ISO_639-3': 'zha' };
  this['zho'] = { 'ISO_639-1': 'zh', 'ISO_639-3': 'zho' };
  this['zul'] = { 'ISO_639-1': 'zu', 'ISO_639-3': 'zul' };
}
ISO639Converter.prototype.from3to1 = function (ISO3Code) {
  if (this.hasOwnProperty(ISO3Code)) {
    return this[ISO3Code]['ISO_639-1'];
  } else {
    return null;
  }
};

window.iso639Converter = new ISO639Converter();

/**
* @author Phil Teare
* using wikipedia data
*/
var isoLangs = {
  "ab": {
    "name": "Abkhaz",
    "nativeName": "аҧсуа"
  },
  "aa": {
    "name": "Afar",
    "nativeName": "Afaraf"
  },
  "af": {
    "name": "Afrikaans",
    "nativeName": "Afrikaans"
  },
  "ak": {
    "name": "Akan",
    "nativeName": "Akan"
  },
  "sq": {
    "name": "Albanian",
    "nativeName": "Shqip"
  },
  "am": {
    "name": "Amharic",
    "nativeName": "አማርኛ"
  },
  "ar": {
    "name": "Arabic",
    "nativeName": "العربية"
  },
  "an": {
    "name": "Aragonese",
    "nativeName": "Aragonés"
  },
  "hy": {
    "name": "Armenian",
    "nativeName": "Հայերեն"
  },
  "as": {
    "name": "Assamese",
    "nativeName": "অসমীয়া"
  },
  "av": {
    "name": "Avaric",
    "nativeName": "авар мацӀ, магӀарул мацӀ"
  },
  "ae": {
    "name": "Avestan",
    "nativeName": "avesta"
  },
  "ay": {
    "name": "Aymara",
    "nativeName": "aymar aru"
  },
  "az": {
    "name": "Azerbaijani",
    "nativeName": "azərbaycan dili"
  },
  "bm": {
    "name": "Bambara",
    "nativeName": "bamanankan"
  },
  "ba": {
    "name": "Bashkir",
    "nativeName": "башҡорт теле"
  },
  "eu": {
    "name": "Basque",
    "nativeName": "euskara, euskera"
  },
  "be": {
    "name": "Belarusian",
    "nativeName": "Беларуская"
  },
  "bn": {
    "name": "Bengali",
    "nativeName": "বাংলা"
  },
  "bh": {
    "name": "Bihari",
    "nativeName": "भोजपुरी"
  },
  "bi": {
    "name": "Bislama",
    "nativeName": "Bislama"
  },
  "bs": {
    "name": "Bosnian",
    "nativeName": "bosanski jezik"
  },
  "br": {
    "name": "Breton",
    "nativeName": "brezhoneg"
  },
  "bg": {
    "name": "Bulgarian",
    "nativeName": "български език"
  },
  "my": {
    "name": "Burmese",
    "nativeName": "ဗမာစာ"
  },
  "ca": {
    "name": "Catalan; Valencian",
    "nativeName": "Català"
  },
  "ch": {
    "name": "Chamorro",
    "nativeName": "Chamoru"
  },
  "ce": {
    "name": "Chechen",
    "nativeName": "нохчийн мотт"
  },
  "ny": {
    "name": "Chichewa; Chewa; Nyanja",
    "nativeName": "chiCheŵa, chinyanja"
  },
  "zh": {
    "name": "Chinese",
    "nativeName": "中文 (Zhōngwén), 汉语, 漢語"
  },
  "cv": {
    "name": "Chuvash",
    "nativeName": "чӑваш чӗлхи"
  },
  "kw": {
    "name": "Cornish",
    "nativeName": "Kernewek"
  },
  "co": {
    "name": "Corsican",
    "nativeName": "corsu, lingua corsa"
  },
  "cr": {
    "name": "Cree",
    "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ"
  },
  "hr": {
    "name": "Croatian",
    "nativeName": "hrvatski"
  },
  "cs": {
    "name": "Czech",
    "nativeName": "česky, čeština"
  },
  "da": {
    "name": "Danish",
    "nativeName": "dansk"
  },
  "dv": {
    "name": "Divehi; Dhivehi; Maldivian;",
    "nativeName": "ދިވެހި"
  },
  "nl": {
    "name": "Dutch",
    "nativeName": "Nederlands, Vlaams"
  },
  "en": {
    "name": "English",
    "nativeName": "English"
  },
  "eo": {
    "name": "Esperanto",
    "nativeName": "Esperanto"
  },
  "et": {
    "name": "Estonian",
    "nativeName": "eesti, eesti keel"
  },
  "ee": {
    "name": "Ewe",
    "nativeName": "Eʋegbe"
  },
  "fo": {
    "name": "Faroese",
    "nativeName": "føroyskt"
  },
  "fj": {
    "name": "Fijian",
    "nativeName": "vosa Vakaviti"
  },
  "fi": {
    "name": "Finnish",
    "nativeName": "suomi, suomen kieli"
  },
  "fr": {
    "name": "French",
    "nativeName": "français, langue française"
  },
  "ff": {
    "name": "Fula; Fulah; Pulaar; Pular",
    "nativeName": "Fulfulde, Pulaar, Pular"
  },
  "gl": {
    "name": "Galician",
    "nativeName": "Galego"
  },
  "ka": {
    "name": "Georgian",
    "nativeName": "ქართული"
  },
  "de": {
    "name": "German",
    "nativeName": "Deutsch"
  },
  "el": {
    "name": "Greek, Modern",
    "nativeName": "Ελληνικά"
  },
  "gn": {
    "name": "Guaraní",
    "nativeName": "Avañeẽ"
  },
  "gu": {
    "name": "Gujarati",
    "nativeName": "ગુજરાતી"
  },
  "ht": {
    "name": "Haitian; Haitian Creole",
    "nativeName": "Kreyòl ayisyen"
  },
  "ha": {
    "name": "Hausa",
    "nativeName": "Hausa, هَوُسَ"
  },
  "he": {
    "name": "Hebrew (modern)",
    "nativeName": "עברית"
  },
  "hz": {
    "name": "Herero",
    "nativeName": "Otjiherero"
  },
  "hi": {
    "name": "Hindi",
    "nativeName": "हिन्दी, हिंदी"
  },
  "ho": {
    "name": "Hiri Motu",
    "nativeName": "Hiri Motu"
  },
  "hu": {
    "name": "Hungarian",
    "nativeName": "Magyar"
  },
  "ia": {
    "name": "Interlingua",
    "nativeName": "Interlingua"
  },
  "id": {
    "name": "Indonesian",
    "nativeName": "Bahasa Indonesia"
  },
  "ie": {
    "name": "Interlingue",
    "nativeName": "Originally called Occidental; then Interlingue after WWII"
  },
  "ga": {
    "name": "Irish",
    "nativeName": "Gaeilge"
  },
  "ig": {
    "name": "Igbo",
    "nativeName": "Asụsụ Igbo"
  },
  "ik": {
    "name": "Inupiaq",
    "nativeName": "Iñupiaq, Iñupiatun"
  },
  "io": {
    "name": "Ido",
    "nativeName": "Ido"
  },
  "is": {
    "name": "Icelandic",
    "nativeName": "Íslenska"
  },
  "it": {
    "name": "Italian",
    "nativeName": "Italiano"
  },
  "iu": {
    "name": "Inuktitut",
    "nativeName": "ᐃᓄᒃᑎᑐᑦ"
  },
  "ja": {
    "name": "Japanese",
    "nativeName": "日本語 (にほんご／にっぽんご)"
  },
  "jv": {
    "name": "Javanese",
    "nativeName": "basa Jawa"
  },
  "kl": {
    "name": "Kalaallisut, Greenlandic",
    "nativeName": "kalaallisut, kalaallit oqaasii"
  },
  "kn": {
    "name": "Kannada",
    "nativeName": "ಕನ್ನಡ"
  },
  "kr": {
    "name": "Kanuri",
    "nativeName": "Kanuri"
  },
  "ks": {
    "name": "Kashmiri",
    "nativeName": "कश्मीरी, كشميري‎"
  },
  "kk": {
    "name": "Kazakh",
    "nativeName": "Қазақ тілі"
  },
  "km": {
    "name": "Khmer",
    "nativeName": "ភាសាខ្មែរ"
  },
  "ki": {
    "name": "Kikuyu, Gikuyu",
    "nativeName": "Gĩkũyũ"
  },
  "rw": {
    "name": "Kinyarwanda",
    "nativeName": "Ikinyarwanda"
  },
  "ky": {
    "name": "Kirghiz, Kyrgyz",
    "nativeName": "кыргыз тили"
  },
  "kv": {
    "name": "Komi",
    "nativeName": "коми кыв"
  },
  "kg": {
    "name": "Kongo",
    "nativeName": "KiKongo"
  },
  "ko": {
    "name": "Korean",
    "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)"
  },
  "ku": {
    "name": "Kurdish",
    "nativeName": "Kurdî, كوردی‎"
  },
  "kj": {
    "name": "Kwanyama, Kuanyama",
    "nativeName": "Kuanyama"
  },
  "la": {
    "name": "Latin",
    "nativeName": "latine, lingua latina"
  },
  "lb": {
    "name": "Luxembourgish, Letzeburgesch",
    "nativeName": "Lëtzebuergesch"
  },
  "lg": {
    "name": "Luganda",
    "nativeName": "Luganda"
  },
  "li": {
    "name": "Limburgish, Limburgan, Limburger",
    "nativeName": "Limburgs"
  },
  "ln": {
    "name": "Lingala",
    "nativeName": "Lingála"
  },
  "lo": {
    "name": "Lao",
    "nativeName": "ພາສາລາວ"
  },
  "lt": {
    "name": "Lithuanian",
    "nativeName": "lietuvių kalba"
  },
  "lu": {
    "name": "Luba-Katanga",
    "nativeName": ""
  },
  "lv": {
    "name": "Latvian",
    "nativeName": "latviešu valoda"
  },
  "gv": {
    "name": "Manx",
    "nativeName": "Gaelg, Gailck"
  },
  "mk": {
    "name": "Macedonian",
    "nativeName": "македонски јазик"
  },
  "mg": {
    "name": "Malagasy",
    "nativeName": "Malagasy fiteny"
  },
  "ms": {
    "name": "Malay",
    "nativeName": "bahasa Melayu, بهاس ملايو‎"
  },
  "ml": {
    "name": "Malayalam",
    "nativeName": "മലയാളം"
  },
  "mt": {
    "name": "Maltese",
    "nativeName": "Malti"
  },
  "mi": {
    "name": "Māori",
    "nativeName": "te reo Māori"
  },
  "mr": {
    "name": "Marathi (Marāṭhī)",
    "nativeName": "मराठी"
  },
  "mh": {
    "name": "Marshallese",
    "nativeName": "Kajin M̧ajeļ"
  },
  "mn": {
    "name": "Mongolian",
    "nativeName": "монгол"
  },
  "na": {
    "name": "Nauru",
    "nativeName": "Ekakairũ Naoero"
  },
  "nv": {
    "name": "Navajo, Navaho",
    "nativeName": "Diné bizaad, Dinékʼehǰí"
  },
  "nb": {
    "name": "Norwegian Bokmål",
    "nativeName": "Norsk bokmål"
  },
  "nd": {
    "name": "North Ndebele",
    "nativeName": "isiNdebele"
  },
  "ne": {
    "name": "Nepali",
    "nativeName": "नेपाली"
  },
  "ng": {
    "name": "Ndonga",
    "nativeName": "Owambo"
  },
  "nn": {
    "name": "Norwegian Nynorsk",
    "nativeName": "Norsk nynorsk"
  },
  "no": {
    "name": "Norwegian",
    "nativeName": "Norsk"
  },
  "ii": {
    "name": "Nuosu",
    "nativeName": "ꆈꌠ꒿ Nuosuhxop"
  },
  "nr": {
    "name": "South Ndebele",
    "nativeName": "isiNdebele"
  },
  "oc": {
    "name": "Occitan",
    "nativeName": "Occitan"
  },
  "oj": {
    "name": "Ojibwe, Ojibwa",
    "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ"
  },
  "cu": {
    "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
    "nativeName": "ѩзыкъ словѣньскъ"
  },
  "om": {
    "name": "Oromo",
    "nativeName": "Afaan Oromoo"
  },
  "or": {
    "name": "Oriya",
    "nativeName": "ଓଡ଼ିଆ"
  },
  "os": {
    "name": "Ossetian, Ossetic",
    "nativeName": "ирон æвзаг"
  },
  "pa": {
    "name": "Panjabi, Punjabi",
    "nativeName": "ਪੰਜਾਬੀ, پنجابی‎"
  },
  "pi": {
    "name": "Pāli",
    "nativeName": "पाऴि"
  },
  "fa": {
    "name": "Persian",
    "nativeName": "فارسی"
  },
  "pl": {
    "name": "Polish",
    "nativeName": "polski"
  },
  "ps": {
    "name": "Pashto, Pushto",
    "nativeName": "پښتو"
  },
  "pt": {
    "name": "Portuguese",
    "nativeName": "Português"
  },
  "qu": {
    "name": "Quechua",
    "nativeName": "Runa Simi, Kichwa"
  },
  "rm": {
    "name": "Romansh",
    "nativeName": "rumantsch grischun"
  },
  "rn": {
    "name": "Kirundi",
    "nativeName": "kiRundi"
  },
  "ro": {
    "name": "Romanian, Moldavian, Moldovan",
    "nativeName": "română"
  },
  "ru": {
    "name": "Russian",
    "nativeName": "русский язык"
  },
  "sa": {
    "name": "Sanskrit (Saṁskṛta)",
    "nativeName": "संस्कृतम्"
  },
  "sc": {
    "name": "Sardinian",
    "nativeName": "sardu"
  },
  "sd": {
    "name": "Sindhi",
    "nativeName": "सिन्धी, سنڌي، سندھی‎"
  },
  "se": {
    "name": "Northern Sami",
    "nativeName": "Davvisámegiella"
  },
  "sm": {
    "name": "Samoan",
    "nativeName": "gagana faa Samoa"
  },
  "sg": {
    "name": "Sango",
    "nativeName": "yângâ tî sängö"
  },
  "sr": {
    "name": "Serbian",
    "nativeName": "српски језик"
  },
  "gd": {
    "name": "Scottish Gaelic; Gaelic",
    "nativeName": "Gàidhlig"
  },
  "sn": {
    "name": "Shona",
    "nativeName": "chiShona"
  },
  "si": {
    "name": "Sinhala, Sinhalese",
    "nativeName": "සිංහල"
  },
  "sk": {
    "name": "Slovak",
    "nativeName": "slovenčina"
  },
  "sl": {
    "name": "Slovene",
    "nativeName": "slovenščina"
  },
  "so": {
    "name": "Somali",
    "nativeName": "Soomaaliga, af Soomaali"
  },
  "st": {
    "name": "Southern Sotho",
    "nativeName": "Sesotho"
  },
  "es": {
    "name": "Spanish; Castilian",
    "nativeName": "español, castellano"
  },
  "su": {
    "name": "Sundanese",
    "nativeName": "Basa Sunda"
  },
  "sw": {
    "name": "Swahili",
    "nativeName": "Kiswahili"
  },
  "ss": {
    "name": "Swati",
    "nativeName": "SiSwati"
  },
  "sv": {
    "name": "Swedish",
    "nativeName": "svenska"
  },
  "ta": {
    "name": "Tamil",
    "nativeName": "தமிழ்"
  },
  "te": {
    "name": "Telugu",
    "nativeName": "తెలుగు"
  },
  "tg": {
    "name": "Tajik",
    "nativeName": "тоҷикӣ, toğikī, تاجیکی‎"
  },
  "th": {
    "name": "Thai",
    "nativeName": "ไทย"
  },
  "ti": {
    "name": "Tigrinya",
    "nativeName": "ትግርኛ"
  },
  "bo": {
    "name": "Tibetan Standard, Tibetan, Central",
    "nativeName": "བོད་ཡིག"
  },
  "tk": {
    "name": "Turkmen",
    "nativeName": "Türkmen, Түркмен"
  },
  "tl": {
    "name": "Tagalog",
    "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
  },
  "tn": {
    "name": "Tswana",
    "nativeName": "Setswana"
  },
  "to": {
    "name": "Tonga (Tonga Islands)",
    "nativeName": "faka Tonga"
  },
  "tr": {
    "name": "Turkish",
    "nativeName": "Türkçe"
  },
  "ts": {
    "name": "Tsonga",
    "nativeName": "Xitsonga"
  },
  "tt": {
    "name": "Tatar",
    "nativeName": "татарча, tatarça, تاتارچا‎"
  },
  "tw": {
    "name": "Twi",
    "nativeName": "Twi"
  },
  "ty": {
    "name": "Tahitian",
    "nativeName": "Reo Tahiti"
  },
  "ug": {
    "name": "Uighur, Uyghur",
    "nativeName": "Uyƣurqə, ئۇيغۇرچە‎"
  },
  "uk": {
    "name": "Ukrainian",
    "nativeName": "українська"
  },
  "ur": {
    "name": "Urdu",
    "nativeName": "اردو"
  },
  "uz": {
    "name": "Uzbek",
    "nativeName": "zbek, Ўзбек, أۇزبېك‎"
  },
  "ve": {
    "name": "Venda",
    "nativeName": "Tshivenḓa"
  },
  "vi": {
    "name": "Vietnamese",
    "nativeName": "Tiếng Việt"
  },
  "vo": {
    "name": "Volapük",
    "nativeName": "Volapük"
  },
  "wa": {
    "name": "Walloon",
    "nativeName": "Walon"
  },
  "cy": {
    "name": "Welsh",
    "nativeName": "Cymraeg"
  },
  "wo": {
    "name": "Wolof",
    "nativeName": "Wollof"
  },
  "fy": {
    "name": "Western Frisian",
    "nativeName": "Frysk"
  },
  "xh": {
    "name": "Xhosa",
    "nativeName": "isiXhosa"
  },
  "yi": {
    "name": "Yiddish",
    "nativeName": "ייִדיש"
  },
  "yo": {
    "name": "Yoruba",
    "nativeName": "Yorùbá"
  },
  "za": {
    "name": "Zhuang, Chuang",
    "nativeName": "Saɯ cueŋƅ, Saw cuengh"
  }
};

function getLanguageName(value) {
  var key;
  if (value.length == 3) key = window.iso639Converter.from3to1(value);else key = value.slice(0, 2);
  var lang = isoLangs[key];
  return lang ? lang.name : value; //Return value if no hit
}

/**
 * @file emp-shaka.js
 * @module empShaka
 */
//Override npm shaka if external defined for debug
var shaka = window_1.shaka ? window_1.shaka : shakaPlayer_compiled;
var Html5 = videojs.getTech('Html5');
var Tech = videojs.getComponent('Tech');
var TechName = 'EmpShaka';
/**
 * HTML5 Dash Media Controller - Wrapper for HTML5 Media API using MPEG-Dash playback
 *
 * @param {Object=} options Object of option names and values
 * @param {Function=} ready Ready callback function
 * @extends videojs.Html5
 * @class EmpShaka
 */

var EmpShaka = function (_Html) {
  inherits(EmpShaka, _Html);

  function EmpShaka() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ready = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    classCallCheck(this, EmpShaka);

    // es6-mixins adds the method to the prototype
    // meaning the second time this object is created the methods are already on the prototype
    // therefore do not merge duplicates
    var _this = possibleConstructorReturn(this, _Html.call(this, options, ready));

    if (!_this.base) {
      es6Mixins(EmpTech, _this, { mergeDuplicates: false });
    }

    _this.isDispose_ = false;
    _this.loading_ = false;

    // Shaka polyfills, fullscreen has been excluded because VideoJS handles this api
    shaka.polyfill.installAll();

    _this.textTrackChangeBind = _this.textTrackChange.bind(_this);
    _this.textTracks().on('selectedlanguagechange', _this.textTrackChangeBind);

    _this.textTrackAddedBind = _this.textTrackAdded.bind(_this);
    _this.textTracks().on(empPlayerEvents.ADD_TRACK, _this.textTrackAddedBind);

    _this.audioTrackChangeBind = _this.audioTrackChange.bind(_this);
    _this.audioTracks().on(empPlayerEvents.CHANGE, _this.audioTrackChangeBind);

    _this.audioTrackAddedBind = _this.audioTrackAdded.bind(_this);
    _this.audioTracks().on(empPlayerEvents.ADD_TRACK, _this.audioTrackAddedBind);

    _this.onEndedBind = _this.onEnded.bind(_this);
    _this.el_.addEventListener(empPlayerEvents.ENDED, _this.onEndedBind);

    _this.preActiveVariantTrack = null;
    _this.preActiveTextTrack = null;

    _this.onLoadStartBind = _this.onLoadStart.bind(_this);
    _this.on(_this, empPlayerEvents.LOAD_START, _this.onLoadStartBind);
    return _this;
  }

  EmpShaka.prototype.onLoadStart = function onLoadStart(event) {
    this.hasMetadata_ = true;
    log$1('onLoadStart');
    if (this.stopped_) {
      event.stopImmediatePropagation();
      this.trigger({ type: empPlayerEvents.ENDED, bubbles: true });
    }
  };

  /**
   * Disables timeshifting for livestreams
   *
   * Setting this to true, hides the player progress controlbar
   *
   * @param {Boolean} disable
   */


  EmpShaka.prototype.disableTimeShift = function disableTimeShift(disable) {
    if (!this.options_) {
      this.options_ = {
        'timeShiftDisabled': disable
      };
    } else {
      this.options_.timeShiftDisabled = disable;
    }
    this.trigger(empPlayerEvents.DURATION_CHANGE);
  };

  /**
   * Handle source
   *
   * Source handler for dash playback.
   *
   * @param {Object} source Source object for playback
   * @method handleSource
   */


  EmpShaka.prototype.handleSource = function handleSource(source) {
    var _this2 = this;

    // Do nothing if the src is falsey
    if (!source.src) {
      return;
    }
    // Shaka is loading
    if (this.loading_ || !source.src) {
      log$1.warn('handleSource shaka is loading');
      if (this.shakaPlayer_) {
        this.shakaPlayer_.destroy();
        this.shakaPlayer_ = null;
      }
    }
    //For testing fallback
    //setTimeout(() => {
    //   this.triggerRecoverableError({ code: 1, message: 'test fallback' });
    //}, 30000); 
    if (this.stopTrackingDuration) {
      this.stopTrackingDuration();
    }
    this.stopped_ = false;
    this.ended_ = false;
    this.hasStarted_ = false;
    this.hasMetadata_ = false;
    this.preActiveVariantTrack = null;
    this.preActiveTextTrack = null;
    var options = this.options_;
    options.source = source;
    this.options_ = Object.assign(this.options_, source.options);
    this.currentProgram_ = null;

    var manifestSource = void 0;

    this.playToken = source.playToken;

    manifestSource = source.src;
    if (source.live && source.src.indexOf('dynamic') === -1 && !source.isDynamicCachupAsLive) {
      manifestSource += source.src.indexOf('?') >= 0 ? '&dynamic' : '?dynamic';
    }

    this.isDispose_ = false;

    if (!this.shakaPlayer_) {
      // We can re-use the old player. calling the 'load' method automatically calls 'unload' if a previous manifest has
      // been loaded
      this.createPlayer_();
    }
    //Needed for not get Promise rejected error
    else if (!this.el_.paused) {
        //If playing, pause first before load new asset
        this.el_.pause();
      }

    this.shakaPlayer_.resetConfiguration();

    // Default language is defined (in descending order)
    // 1. language set in player options
    // 2. document language (lang attribute on html tag)
    // 3. Browser preferred language
    // 4. 'None'
    var audioLanguage = this.options_.audioLanguage || this.options_.language;
    var textLanguage = this.options_.subtitleLanguage || this.options_.language;
    textLanguage = textLanguage !== 'None' ? textLanguage : '';
    log$1('preferredAudioLanguage', audioLanguage);
    log$1('preferredTextLanguage', textLanguage);
    this.clearTracks(['text']);
    var config = { streaming: {}, abr: {}, restrictions: {}, preferredAudioLanguage: audioLanguage, preferredTextLanguage: textLanguage };
    config.abr.enabled = true;
    // minBandwidth/maxBandwidth bit/sec, from entitlement we get kbit/sec. Not Byte/sec.
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
    }

    //override with custom value
    if (options.maxBitrate) {
      config.restrictions.maxBandwidth = options.maxBitrate * 1000;
    }

    config.manifest = {
      dash: {}
    };

    if (options.clockSyncUri) {
      config.manifest.dash.clockSyncUri = options.clockSyncUri;
    }

    if (source.baseUrl) {
      //Remove Last Directory Part Of BaseUrl, EMP MDN Rule
      var the_arr = source.baseUrl.split('/');
      the_arr.pop(); // last separator
      the_arr.pop(); // last directory
      var baseUrl = the_arr.join('/') + '/';
      config.manifest.dash.baseUrl = baseUrl;
    }

    if (options.liveDelay !== undefined) {
      config.manifest.dash.defaultPresentationDelay = options.liveDelay;
    }

    if (options.abr) {
      if (options.abr.defaultBandwidthEstimate) {
        config.abr.defaultBandwidthEstimate = options.abr.defaultBandwidthEstimate;
      }
      if (options.abr.bandwidth_upgrade_target) {
        config.abr.bandwidthUpgradeTarget = options.abr.bandwidth_upgrade_target;
      }
      if (options.abr.bandwidth_downgrade_target) {
        config.abr.bandwidthDowngradeTarget = options.abr.bandwidth_downgrade_target;
      }
      if (options.abr.switch_interval_ms) {
        config.abr.switchInterval = options.abr.switch_interval_ms / 1000;
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
      ignoreTextStreamFailures: true
    };

    if (window_1.navigator.userAgent.indexOf('Android') === -1) {
      config.drm = {
        advanced: {
          'com.widevine.alpha': {
            'videoRobustness': 'SW_SECURE_DECODE',
            'audioRobustness': 'SW_SECURE_CRYPTO'
          }
        }
      };
    } else {
      //Android
      config.drm = {
        advanced: {
          'com.widevine.alpha': {
            'videoRobustness': 'SW_SECURE_CRYPTO',
            'audioRobustness': 'SW_SECURE_CRYPTO'
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
    } else if (source.licenseServers) {
      config.drm.servers = source.licenseServers;
    }

    this.shakaPlayer_.configure(config);
    this.shakaPlayer_.setTextTrackVisibility(textLanguage !== '');

    // Configure network filters
    var networkingEngine = this.shakaPlayer_.getNetworkingEngine();
    networkingEngine.clearAllRequestFilters();
    networkingEngine.clearAllResponseFilters();

    // Filter requests and set auth header
    if (this.playToken) {
      var header = { 'Authorization': 'Bearer ' + this.playToken };
      var filter = this.addLicenseRequestHeaders.bind(null, header);
      networkingEngine.registerRequestFilter(filter);
    }

    var startTime;
    // In order to start from the beginning of live stream send 0.1s as startTime
    if (this.options_.startTime > 0) {
      if (!this.options._timeShiftDisabled) {
        startTime = this.options_.startTime;
      }
    }
    log$1('before load stream');
    this.loading_ = true; //Block load call if loading 
    this.shakaPlayer_.load(manifestSource, startTime).then(function () {
      log$1('after load stream');
      _this2.loading_ = false;
      _this2.trackDuration();
    })['catch'](function (error) {
      _this2.loading_ = false;
      if (error.code === shaka.util.Error.Code.LOAD_INTERRUPTED) {
        log$1('Shaka load() interrupted');
      } else {
        _this2.checkForRecoverableErrors(error);
      }
    });
  };

  EmpShaka.prototype.streamingFailureCallback = function streamingFailureCallback(error) {
    //The default streamingFailureCallback will infiniteRetriesForLiveStreams
    //Error will be fire later
    log$1(TechName, 'Streaming Failure', error);
  };

  EmpShaka.prototype.techVersion = function techVersion() {
    if (shaka && shaka.Player) {
      return shaka.Player.version || 'N/A';
    }
    return 'N/A';
  };

  /**
   * Creates an instance of Shaka.Player for use and sets the relevant listeners
   * @private
   */


  EmpShaka.prototype.createPlayer_ = function createPlayer_() {
    var _this3 = this;

    log$1('createPlayer Shaka');
    this.shakaPlayer_ = new shaka.Player(this.el_);

    this.shakaPlayer_.addEventListener('texttrackvisibility', function (event) {
      log$1('texttrackvisibility', _this3.hasMetadata_, _this3.shakaPlayer_.isTextTrackVisible());
      if (_this3.hasMetadata_) {
        _this3.syncVideojsTexttrackVisibility();
      }
    });

    this.shakaPlayer_.addEventListener('adaptation', function (event) {
      log$1('Shaka adaptationchanged');
      if (!_this3.hasMetadata_) {
        return;
      }
      //For debug
      //var state = this.shakaPlayer_.getStats();
      //log('Shaka state', state.estimatedBandwidth, state.streamBandwidth, state.switchHistory.length, state.switchHistory);
      //if(state.switchHistory.length > 1) {
      //  log('switchHistory1', state.switchHistory[state.switchHistory.length -2].id, state.switchHistory[state.switchHistory.length -2].type, state.switchHistory[state.switchHistory.length -2].bandwidth);
      //  log('switchHistory2', state.switchHistory[state.switchHistory.length -1].id, state.switchHistory[state.switchHistory.length -1].type, state.switchHistory[state.switchHistory.length -1].bandwidth);
      //}

      var activeVariantTrack = _this3.getActiveVariantTrack();
      var activeTextTrack = _this3.getActiveTextTrack();

      if (_this3.preActiveVariantTrack === null || activeVariantTrack.language !== _this3.preActiveVariantTrack.language) {
        _this3.blockLocalTrackChange = true;
        _this3.configureVideojsAudioTracks();
      }

      if (_this3.preActiveTextTrack === null || activeTextTrack && activeTextTrack.language !== _this3.preActiveTextTrack.language) {
        //Shaka bug fix
        if (_this3.preActiveTextTrack === null && _this3.shakaPlayer_.getConfiguration().preferredTextLanguage === '' && _this3.shakaPlayer_.isTextTrackVisible()) {
          _this3.shakaPlayer_.setTextTrackVisibility(false);
        }
        if (_this3.shakaPlayer_.getTextTracks().length || _this3.textTracks().length) {
          _this3.blockLocalTrackChange = true;
          _this3.configureVideojsTextTracks();
        }
      }

      if (_this3.preActiveVariantTrack && activeVariantTrack.videoBandwidth !== _this3.preActiveVariantTrack.videoBandwidth) {
        log$1('BITRATE_CHANGED', activeVariantTrack.videoBandwidth);
        _this3.trigger({ type: empPlayerEvents.BITRATE_CHANGED, bubbles: true }, { bitrate: activeVariantTrack.videoBandwidth, auto: false });
      }

      _this3.stopBlockLocalTrackChange('adaptationchanged');

      _this3.preActiveVariantTrack = activeVariantTrack;
      _this3.preActiveTextTrack = activeTextTrack;
    });

    this.shakaPlayer_.addEventListener('trackschanged', function (event) {
      log$1('Shaka trackschanged', event);
      //TODO: With multi periods we maybe have to update tracks and send TRACK_CHANGE from here.
    });

    this.shakaPlayer_.addEventListener('error', function (event) {
      _this3.checkForRecoverableErrors(event.detail);
    });

    this.shakaPlayer_.addEventListener('buffering', function (event) {
      //Shaka player send buffering after ended and stop
      if (!_this3.stopped_ && !_this3.ended_) {
        log$1('buffering', event, event ? event.buffering : null);
        if (event.buffering) {
          _this3.trigger(empPlayerEvents.WAITING);
        } else {
          if (_this3.el_ && _this3.el_.paused) {
            //Needed for not get Promise rejected error
            if (_this3.paused()) {
              _this3.trigger({ type: empPlayerEvents.PAUSE, bubbles: true });
            } else {
              _this3.trigger({ type: empPlayerEvents.PLAYING, bubbles: true });
            }
          }
        }
      }
    });
  };

  EmpShaka.prototype.addErrorMessage = function addErrorMessage(error) {
    if (error.message) return;
    var categoryName = 'UNKNOWN';
    var codeName = 'UNKNOWN';

    for (var k in shaka.util.Error.Category) {
      if (shaka.util.Error.Category[k] === error.category) categoryName = k;
    }
    for (var c in shaka.util.Error.Code) {
      if (shaka.util.Error.Code[c] === error.code) codeName = c;
    }
    error.message = categoryName + ' ' + codeName;
  };

  /**
  * Check for recoverable errors
  * allows the player to fallback to another tech
  *
  * @param {Object} error
  * @private
  */


  EmpShaka.prototype.checkForRecoverableErrors = function checkForRecoverableErrors(error) {
    this.addErrorMessage(error);
    if (error && error.data && error.data.length > 0) {
      log$1.error(TechName, error.code, error.data, error.message);
    }
    switch (error.category) {
      // 404s on MPD
      case 1:
        if (error.code === 1002) {
          this.triggerRecoverableError(error);
          break;
        }
      /* falls through */
      // Errors parsing or processing audio or video streams.
      case 3:
        //Ignore Reload error from previous mediasource
        if (error.code === 3015) return;
        this.triggerRecoverableError(error);
        break;
      // Errors parsing the Manifest.
      case 4:
        this.triggerRecoverableError(error);
        break;
      // Errors related to DRM.
      case 6:
        this.triggerRecoverableError(error);
        break;
      default:
        this.trigger(empPlayerEvents.ERROR, error);
        break;
    }
  };

  EmpShaka.prototype.stop = function stop(afterStopCallback) {
    var _this4 = this;

    this.stopped_ = true;
    this.loading_ = false;
    this.stopTrackingDuration();
    if (this.shakaPlayer_) {
      this.hasMetadata_ = false;
      this.shakaPlayer_.unload().then(function () {
        _this4.clearTracks(['text']);
        _this4.clearTracks(['audio']);
        _this4.trigger({ type: empPlayerEvents.PAUSE, bubbles: true });
        _this4.trigger({ type: empPlayerEvents.ABORT, bubbles: true });
        _this4.trigger({ type: empPlayerEvents.STOPPED, bubbles: true });
        if (afterStopCallback) {
          afterStopCallback();
        }
      });
    }
  };

  EmpShaka.prototype.onEnded = function onEnded(event) {
    this.ended_ = true;
    this.stopTrackingDuration();
    if (this.shakaPlayer_) {
      this.reset();
    }
  };

  EmpShaka.prototype.reset = function reset() {
    this.loading_ = false;
    this.hasMetadata_ = false;
    this.clearTracks(['text']);
    this.clearTracks(['audio']);
    _Html.prototype.reset.call(this);
  };

  /**
   * Adds headers to the license requests
   *
   * @param {!Object.<string, string>} headers
   * @param {shaka.net.NetworkingEngine.RequestType} requestType
   * @param {shakaExtern.Request} request
   */


  EmpShaka.prototype.addLicenseRequestHeaders = function addLicenseRequestHeaders(headers, requestType, request) {
    if (requestType !== shaka.net.NetworkingEngine.RequestType.LICENSE) {
      return;
    }

    // Add these to the existing headers.  Do not clobber them!
    // For PlayReady, there will already be headers in the request.
    for (var field in headers) {
      request.headers[field] = headers[field];
    }
  };

  /**
  * Is current playback live or not?
  *
  * @return {Boolean} whether or not current playback is live
  */


  EmpShaka.prototype.live = function live() {
    if (this.shakaPlayer_) {
      return this.shakaPlayer_.isLive();
    } else if (this.options_ && this.options_.source) {
      return this.options_.source.live;
    }
    return false;
  };

  /**
   * Duration
   *
   * Total length of the video
   *
   * @return {Number} The duration of the video in seconds
   */


  EmpShaka.prototype.duration = function duration() {
    if (this.live()) {
      if (this.timeShiftEnabled()) {
        if (!this.shakaPlayer_) {
          return 0;
        }
        var seekRange = this.shakaPlayer_.seekRange();
        var duration = seekRange.end;
        return duration;
        // No progress control
      } else {
        return Infinity;
      }
    }
    return _Html.prototype.duration.call(this);
  };

  /**
   * currentTime
   *
   * The time at which the video is currently playing
   *
   * @return {Number} Current time in seconds
   */


  EmpShaka.prototype.currentTime = function currentTime() {
    if (!this.shakaPlayer_) {
      return 0;
    }

    var currentTime = _Html.prototype.currentTime.call(this);

    // Return currentTime based on seekRange
    if (this.live() && this.duration() !== Infinity) {
      var seekRange = this.shakaPlayer_.seekRange();
      var behindLive = Math.floor(seekRange.end - currentTime);
      var duration = this.duration();
      currentTime = Math.max(0, duration - behindLive);
    }
    return currentTime;
  };

  EmpShaka.prototype.baseCurrentTime = function baseCurrentTime() {
    return _Html.prototype.currentTime.call(this);
  };

  EmpShaka.prototype.setAbsoluteTime = function setAbsoluteTime(value) {
    log$1('setAbsoluteTime', value.date);
    try {
      if (this.live()) {
        var moreAccurateTime = (value.date - this.startTimeLive()) / 1000;
        log$1('setAbsoluteTime setCurrentTime', moreAccurateTime);
        this.setCurrentTime(moreAccurateTime);
      }
      //VOD
      else {
          this.setCurrentTime(value.date / 1000);
        }
    } catch (e) {
      log$1.error(e);
    }
  };

  EmpShaka.prototype.getAbsoluteTime = function getAbsoluteTime() {
    if (!this.shakaPlayer_) {
      return 0;
    }
    return this.shakaPlayer_.getPlayheadTimeAsDate();
  };

  EmpShaka.prototype.timeBehindLive = function timeBehindLive() {
    if (!this.shakaPlayer_ || !this.live()) {
      return 0;
    }
    var seekRange = this.shakaPlayer_.seekRange();
    var currentTime = _Html.prototype.currentTime.call(this);
    return Math.floor(seekRange.end - currentTime);
  };

  EmpShaka.prototype.startTimeLive = function startTimeLive() {
    if (this.shakaPlayer_ && this.shakaPlayer_.getPresentationStartTimeAsDate()) {
      return this.shakaPlayer_.getPresentationStartTimeAsDate().getTime();
    }
    return 0;
  };

  //It's ok to seek to beginning or end


  EmpShaka.prototype.allowJump_ = function allowJump_(time) {
    var seekRange = this.shakaPlayer_.seekRange();
    if (time > seekRange.end - 2) {
      return true;
    }
    return time < 2;
  };

  /**
   * Set current time
   *
   * @param {Number} time Current time of video
   * @method setCurrentTime
   */


  EmpShaka.prototype.setCurrentTime = function setCurrentTime(time) {
    var _this5 = this;

    // handle restrictions
    if (this.options_.source) {
      if (this.options_.source.ffEnabled === false && !this.allowJump_(time)) {
        if (this.currentTime() <= time) return;
      }
      if (this.options_.source.rwEnabled === false && !this.allowJump_(time)) {
        if (this.currentTime() >= time) return;
      }
    }

    if (this.live()) {
      var seekRange = this.shakaPlayer_.seekRange();
      // Clamp to seek range
      time = time > seekRange.start ? time : seekRange.start;
      time = time < seekRange.end ? time : seekRange.end;
      _Html.prototype.setCurrentTime.call(this, time);
    } else {
      this.shakaPlayer_.segmentExist(time).then(function () {
        log$1('segmentExist sucess');
        _Html.prototype.setCurrentTime.call(_this5, time);
      })['catch'](function (error) {
        log$1('segmentExist faild', error);
        this.trigger({ type: empPlayerEvents.SEGMENT_MISSING, bubbles: true });
        return;
      }.bind(this));
    }
  };

  /**
   * Get timeShiftEnabled
   * @return {Boolean} if timeShift is enabled
   */


  EmpShaka.prototype.timeShiftEnabled = function timeShiftEnabled() {
    return this.options_.timeShiftDisabled === false;
  };

  /**
   * Returns a list of available bitrates
   *
   * @return {Number[]}) Array of available bitrates
   */


  EmpShaka.prototype.bitrates = function bitrates() {
    if (!this.shakaPlayer_) {
      return [];
    }

    var activeVariantTrack = this.getActiveVariantTrack();
    var variantTracks = this.getVariantTracks();
    var bitrateList = [];

    variantTracks.forEach(function (track) {
      //Add only unique videoBandwidth
      if (track.language === activeVariantTrack.language && bitrateList.indexOf(track.videoBandwidth) === -1) {
        bitrateList.push(track.videoBandwidth);
      }
    });
    bitrateList = bitrateList.reverse();
    return bitrateList;
  };

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
   * @param {Number} value Bitrate to set. 0 to 'reset' back to ABR
   * @return {Number} bitrate when getting
   */


  EmpShaka.prototype.bitrate = function bitrate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var activeVariantTrack = this.getActiveVariantTrack();
    if (value == null) {
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
      this.shakaPlayer_.configure({ abr: { enabled: true } });
      this.trigger({ type: empPlayerEvents.BITRATE_CHANGED, bubbles: true }, { bitrate: value, auto: false });
      return;
    } else {
      // Set bitrate and stop auto switch.
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
      this.shakaPlayer_.configure({ abr: { enabled: false } });
      // Finnaly, set the bitrate
      this.shakaPlayer_.selectVariantTrack(newTrack, true);
      this.trigger({ type: empPlayerEvents.BITRATE_CHANGED, bubbles: true }, { bitrate: value, auto: false });
    }
  };

  /**
   * Get current bitrate
   *
   * Always returns the current bitrate, unlike bitrate() which returns 0 if ABR is enabled
   *
   * @return {Number} bitrate
   */


  EmpShaka.prototype.getBitrate = function getBitrate() {
    var activeVariantTrack = this.getActiveVariantTrack();
    if (activeVariantTrack) {
      return activeVariantTrack.videoBandwidth;
    }
    return 0;
  };

  /**
   * Is Dash supported?
   * @returns {boolean}
   */


  EmpShaka.isSupported = function isSupported() {

    // Dash is definitely not supported if HTML5 video isn't
    if (!videojs.getTech('Html5').isSupported()) {
      return false;
    }

    var hasWebKit = 'WebKitMediaSource' in window_1;
    var hasMediaSource = 'MediaSource' in window_1;

    return hasWebKit || hasMediaSource;
  };

  /**
   * Define source handler options.
   *
   * These options check whether or not we can playback the source object.
   *
   * @returns {Object}
   * @static
   */


  /**
   * Set max bitrate
   *
   * Setting this to NaN will clear the max bitrate
   *
   * @param {Number} bitrate in kbps
   */
  EmpShaka.prototype.setMaxBitrate = function setMaxBitrate(bitrate) {
    if (this.shakaPlayer_) {
      // set to max
      if (isNaN(bitrate)) {
        bitrate = Number.POSITIVE_INFINITY;
      } else {
        bitrate * 1000;
      }

      var config = { restrictions: { maxBandwidth: bitrate } };
      this.shakaPlayer_.configure(config);
      // Updates the bitrate button
      this.trigger(empPlayerEvents.LOADED_DATA);
    } else {
      this.options_.maxBitrate = bitrate;
    }
  };

  /**
   * Get bitrate
   * @returns {Number} bitrate in kbps
   */


  EmpShaka.prototype.getMaxBitrate = function getMaxBitrate() {
    if (this.shakaPlayer_) {
      var config = this.shakaPlayer_.getConfiguration();
      if (config.restrictions.maxBandwidth) {
        return config.restrictions.maxBandwidth / 1000;
      } else {
        return config.restrictions.maxBandwidth;
      }
    } else {
      return this.options_.maxBitrate;
    }
  };

  /**
   * Return the object presentation of the play-request required for the entitlement engine
   */


  /**
   * Returns true if the playback can be restarted
   */
  EmpShaka.prototype.canRestart = function canRestart() {
    return !this.live() || this.timeShiftEnabled();
  };

  /**
   * Get the current track of a specific type
   *
   * @param {String} type track type (deprecated in Shaka 2.2)
   * @private
   */


  EmpShaka.prototype.getActiveVariantTrack = function getActiveVariantTrack() {
    var variantTracks = this.getVariantTracks();
    for (var i = 0; i < variantTracks.length; i++) {
      var track = variantTracks[i];
      if (track.active) {
        return track;
      }
    }

    return null;
  };

  /**
   * Get all variantTracks
   *
   * @param {String} type track type (deprecated in Shaka 2.2)
   * @returns {Array} Array with Track items
   * @private
   */


  EmpShaka.prototype.getVariantTracks = function getVariantTracks() {
    var variantTracks = this.shakaPlayer_.getVariantTracks();
    return variantTracks;
  };

  ///////////////////// Audio tracks


  /**
  * isAudioTrackSynchronized
  *
  * @private
  */


  EmpShaka.prototype.isAudioTrackSynchronized = function isAudioTrackSynchronized() {
    var shakaVariantTracksLanguages = this.shakaPlayer_.getVariantTracks().map(function (track) {
      return track.language;
    }).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });

    shakaVariantTracksLanguages = shakaVariantTracksLanguages.sort();

    var videojsAudioTracks = this.audioTracks();
    var videojsAudioTracksLanguages = [];
    for (var i = 0; i < videojsAudioTracks.length; i++) {
      videojsAudioTracksLanguages.push(videojsAudioTracks[i].language);
    }
    videojsAudioTracksLanguages = videojsAudioTracksLanguages.sort();

    var isSync = shakaVariantTracksLanguages.join() === videojsAudioTracksLanguages.join();
    //log('isAudioTrackSynchronized', isSync, shakaVariantTracksLanguages.join(), videojsAudioTracksLanguages.join());
    log$1('isAudioTrackSynchronized', isSync);
    return isSync;
  };

  /**
   * Configure audio tracks
   *
   * Adds available audio tracks to the video
   * @private
   */


  EmpShaka.prototype.configureVideojsAudioTracks = function configureVideojsAudioTracks() {
    var _this6 = this;

    if (this.isAudioTrackSynchronized()) {
      this.selectVideojsAudioLanguage(this.getSelectedShakaAudioLanguage());
      return;
    }

    log$1('configureVideojsAudioTracks');
    var variantTracks = this.getVariantTracks();
    // Clear current audio tracks 
    this.clearTracks(['audio']);

    // Audio tracks can have multiple bitrates, filter out the highest for each language
    var filteredTracks = {};
    variantTracks.forEach(function (variantTrack) {
      var language = variantTrack.language;

      // Check if language has been added already
      if (filteredTracks.hasOwnProperty(language)) {
        var track = filteredTracks[language];

        // replace the filtered track if the current track contains a higher bandwidth
        if (variantTrack.audioBandwidth > track.audioBandwidth) {
          filteredTracks[language] = variantTrack;
        }
        // Language hasn't been added yet
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
      _this6.addAudioTrack(audioTrack.kind, getLanguageName(audioTrack.language).split(';')[0], audioTrack.language, audioTrack.language === activeVariantTrack.language);
    });
  };

  /**
  * selectShakaAudioLanguage
  *
  * @private
  */


  EmpShaka.prototype.selectShakaAudioLanguage = function selectShakaAudioLanguage(languageCode) {
    if (languageCode) {
      //Make selection sticky
      if (!this.options_) {
        this.options_ = {
          'audioLanguage': languageCode
        };
      } else {
        this.options_.audioLanguage = languageCode;
      }

      if (languageCode !== this.getSelectedShakaAudioLanguage()) {
        log$1('selectShakaAudioLanguage', languageCode);
        this.shakaPlayer_.selectAudioLanguage(languageCode);
      }
    }
  };

  /**
   * getSelectedShakaAudioLanguage
   *
   * @private
   */


  EmpShaka.prototype.getSelectedShakaAudioLanguage = function getSelectedShakaAudioLanguage() {
    if (!this.shakaPlayer_) {
      return null;
    }
    var activeVariantTrack = this.getActiveVariantTrack();
    return activeVariantTrack ? activeVariantTrack.language : null;
  };

  /**
   * VideoJS audioTrackChange
   * One of the VideoJS audio track changed its enabled
   *
   * @private
   */


  EmpShaka.prototype.audioTrackChange = function audioTrackChange(event) {
    if (this.blockLocalTrackChange) {
      log$1('blockLocalTrackChange', 'audioTrackChange');
      return;
    }
    log$1('onAudioTrackChange');
    var audioTracks = this.audioTracks();
    var i = audioTracks.length;
    while (i--) {
      var track = audioTracks[i];
      if (track.enabled) {
        this.selectShakaAudioLanguage(track.language);
        return;
      }
    }
  };

  /**
  * selectVideojsAudioLanguage
  *
  * @private
  */


  EmpShaka.prototype.selectVideojsAudioLanguage = function selectVideojsAudioLanguage(languageCode) {
    log$1('selectVideojsAudioLanguage', languageCode);
    if (languageCode) {
      var audioTracks = this.audioTracks();
      var i = audioTracks.length;
      while (i--) {
        var track = audioTracks[i];
        if (track.language === languageCode && !track.enabled) {
          this.blockLocalTrackChange = true;
          track.enabled = true;
          return;
        }
      }
      this.stopBlockLocalTrackChange('selectVideojsAudioLanguage');
    }
  };

  /**
  * Called when a VideoJS audio track has been added
  *
  * @private
  */


  EmpShaka.prototype.audioTrackAdded = function audioTrackAdded(event) {
    //No code here
    log$1('videojs audioTrackAdded', event);
  };

  //////////////////////////// Text tracks


  /**
  * get Shaka ActiveTextTrack
  *
  * @private
  */


  EmpShaka.prototype.getActiveTextTrack = function getActiveTextTrack() {
    var textTracks = this.shakaPlayer_.getTextTracks();
    var activeTextTrack = textTracks.filter(function (track) {
      return track.active;
    });
    return activeTextTrack.length > 0 ? activeTextTrack[0] : null;
  };

  /**
  * getSelectedShakaTextLanguage
  *
  * @private
  */


  EmpShaka.prototype.getSelectedShakaTextLanguage = function getSelectedShakaTextLanguage() {
    if (!this.shakaPlayer_) {
      return null;
    }
    var activeTextTrack = this.getActiveTextTrack();
    return activeTextTrack && this.shakaPlayer_.isTextTrackVisible() ? activeTextTrack.language : null;
  };

  /**
   * isTextTrackSynchronized
   *
   * @private
   */


  EmpShaka.prototype.isTextTrackSynchronized = function isTextTrackSynchronized() {
    var shakaTextTracksLanguages = this.shakaPlayer_.getTextTracks().map(function (track) {
      return track.language;
    });
    shakaTextTracksLanguages = shakaTextTracksLanguages.sort();

    var videojsTextTracks = this.textTracks();
    var videojsTextTracksLanguages = [];
    for (var i = 0; i < videojsTextTracks.length; i++) {
      videojsTextTracksLanguages.push(videojsTextTracks[i].language);
    }
    videojsTextTracksLanguages = videojsTextTracksLanguages.sort();

    var isSync = shakaTextTracksLanguages.join() === videojsTextTracksLanguages.join();
    //log('isTextTrackSynchronized', isSync, shakaTextTracksLanguages.join(), videojsTextTracksLanguages.join());
    log$1('isTextTrackSynchronized', isSync);
    return isSync;
  };

  /**
  * syncVideojsTexttrackVisibility
  *
  * @private
  */


  EmpShaka.prototype.syncVideojsTexttrackVisibility = function syncVideojsTexttrackVisibility() {
    log$1('syncVideojsTexttrackVisibility');
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
      var selectedShakaTextLanguage = this.getSelectedShakaTextLanguage();
      while (i--) {
        var track = textTracks[i];
        if (track.language === selectedShakaTextLanguage && track.mode !== 'showing') {
          track.mode = 'showing';
        } else if (track.language !== selectedShakaTextLanguage && track.mode !== 'disabled') {
          track.mode = 'disabled';
        }
      }
    }
    this.stopBlockLocalTrackChange('syncVideojsTexttrackVisibility');
  };

  /**
   * Configure text tracks
   *
   * Clear all videojs text tracks then Adds shaka text tracks to the videojs
   * @private
   */


  EmpShaka.prototype.configureVideojsTextTracks = function configureVideojsTextTracks() {
    var _this7 = this;

    if (this.isTextTrackSynchronized()) {
      this.selectVideojsTextLanguage(this.getSelectedShakaTextLanguage());
      return;
    }

    this.blockLocalTrackChange = true;
    log$1('configureVideojsTextTracks');
    // Clear videojs text tracks
    this.clearTracks(['text']);

    // Add available text tracks to videojs
    var textTracks = this.shakaPlayer_.getTextTracks();
    var selectedVideojsTrack = void 0;
    var selectedShakaTextLanguage = this.getSelectedShakaTextLanguage();
    /*
     Videojs TextTrack kind
      "subtitles" (default): Translations of the dialogue in the video for when audio is available but not understood. Subtitles are shown over the video.
      "captions": Transcription of the dialogue, sound effects, musical cues, and other audio information for viewer who are deaf/hard of hearing, or the video is muted. Captions are also shown over the video.
      "chapters": Chapter titles that are used to create navigation within the video. Typically, these are in the form of a list of chapters that the viewer can use to navigate the video.
      "descriptions": Text descriptions of the action in the content for when the video portion isn't available or because the viewer is blind or not using a screen. Descriptions are read by a screen reader or turned into a separate audio track.
      "metadata": Tracks that have data meant for JavaScript to parse and do something with. These aren't shown to the user
    */
    textTracks.forEach(function (track) {
      var newTrack = _this7.addTextTrack(track.kind ? track.kind : 'subtitles', getLanguageName(track.language).split(';')[0], track.language);
      if (selectedShakaTextLanguage === track.language) {
        selectedVideojsTrack = newTrack;
      }
    });
    //We need change mode after all tracks are added for UI menu to work.
    if (selectedVideojsTrack) {
      selectedVideojsTrack.mode = 'showing';
      if (!this.shakaPlayer_.isTextTrackVisible()) {
        this.shakaPlayer_.setTextTrackVisibility(true);
      }
    } else {
      this.shakaPlayer_.setTextTrackVisibility(true);
    }
  };

  /**
  * selectVideojsTextLanguage
  *
  * @private
  */


  EmpShaka.prototype.selectVideojsTextLanguage = function selectVideojsTextLanguage(languageCode) {
    log$1('selectVideojsTextLanguage', languageCode);
    var textTracks = this.textTracks();
    var i = textTracks.length;
    while (i--) {
      var track = textTracks[i];
      if (languageCode === track.language && track.mode !== 'showing') {
        this.blockLocalTrackChange = true;
        track.mode === 'showing';
      } else if (languageCode !== track.language && track.mode === 'showing') {
        this.blockLocalTrackChange = true;
        track.mode === 'disabled';
        return;
      }
    }
    this.stopBlockLocalTrackChange('selectVideojsAudioLanguage');
  };

  /**
   * VideoJS Text track change
   *
   * One of the VideoJS text track changed its mode
   *
   * @private
   */


  EmpShaka.prototype.textTrackChange = function textTrackChange(event) {
    if (this.blockLocalTrackChange) {
      log$1('blockLocalTrackChange', 'textTrackChange');
      return;
    }

    log$1('ontextTrackChange');
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
  };

  /**
  * deferredSelectTextTrack
  * When changing tracklist we get many onTextTrackChange, wait to the update is done
  *
  * @private
  */


  EmpShaka.prototype.deferredSelectTextTrack = function deferredSelectTextTrack(languageCode) {
    log$1('deferredSelectTextTrack enter', languageCode);
    if (this.deferredTextTrackChangeTimeOut) {
      //Reset TrackChange, new selection comming in
      clearTimeout(this.deferredTextTrackChangeTimeOut);
    }
    this.deferredTextTrackChangeTimeOut = setTimeout(function () {
      log$1('update texttrack');
      clearTimeout(this.deferredTextTrackChangeTimeOut);
      this.deferredTextTrackChangeTimeOut = null;
      if (this.isDispose_) {
        return;
      }
      this.blockLocalTrackChange = true;

      this.selectShakaTextLanguage(languageCode);
      this.stopBlockLocalTrackChange('deferredSelectTextTrack exit');
    }.bind(this), 1000); // 1 sec
  };

  /**
  * selectShakaTextLanguage
  *
  * @private
  */


  EmpShaka.prototype.selectShakaTextLanguage = function selectShakaTextLanguage(languageCode) {
    if (languageCode) {
      // Show text track
      if (this.getSelectedShakaTextLanguage() !== languageCode) {
        log$1('select Shaka texttrack', languageCode);
        this.shakaPlayer_.selectTextLanguage(languageCode);
      }
      if (!this.shakaPlayer_.isTextTrackVisible()) {
        log$1('Shaka texttrack', 'show');
        this.shakaPlayer_.setTextTrackVisibility(true);
      }
    } else {
      // Hide text track
      if (this.shakaPlayer_.isTextTrackVisible()) {
        log$1('Shaka texttrack', 'hide');
        this.shakaPlayer_.setTextTrackVisibility(false);
      }
    }
    languageCode = languageCode ? languageCode : 'None';
    //Make selection sticky
    if (!this.options_) {
      this.options_ = {
        'subtitleLanguage': languageCode
      };
    } else {
      this.options_.subtitleLanguage = languageCode;
    }
  };

  /**
   * Called when a VideoJS text track has been added
   *
   * @private
   */


  EmpShaka.prototype.textTrackAdded = function textTrackAdded(event) {
    //No code here
    log$1('videojs textTrackAdded', event);
  };

  /////////////////// Text tracks end

  EmpShaka.prototype.stopBlockLocalTrackChange = function stopBlockLocalTrackChange(caller) {
    if (this.blockLocalTrackChange) {
      if (this.blockLocalTrackChangeTimeOut) {
        clearTimeout(this.blockLocalTrackChangeTimeOut);
      }

      this.blockLocalTrackChangeTimeOut = setTimeout(function () {
        try {
          clearTimeout(this.blockLocalTrackChangeTimeOut);
          this.blockLocalTrackChangeTimeOut = null;
          log$1(caller + ' TRACK_CHANGE');
          this.trigger(empPlayerEvents.TRACK_CHANGE);
          this.blockLocalTrackChange = false;
        } catch (e) {} //Crash when navigate away
      }.bind(this), 1000); //Stop block LocalTrackChange after 1 sec
    }
  };

  /**
  *
  * Overide play() and block videojs from send play when autoplay, should be handle by Shaka player
  */


  EmpShaka.prototype.play = function play() {
    if (this.stopped_ || this.ended_) {
      this.trigger({ type: empPlayerEvents.REPLAY, bubbles: true });
    } else if (!this.options_.autoplay && this.el_.networkState > this.el_.HAVE_METADATA || this.hasStarted_ && this.el_.networkState > this.el_.HAVE_METADATA) {
      //this.trigger('play'); not needed
      return _Html.prototype.play.call(this);
    }
  };

  EmpShaka.prototype.pause = function pause() {
    if (this.live() && this.options_.timeShiftDisabled) {
      return;
    }
    _Html.prototype.pause.call(this);
    this.trigger({ type: empPlayerEvents.PAUSE, bubbles: true });
  };

  /**
   *
   * Dispose of the tech
   * @private
   */


  EmpShaka.prototype.dispose = function dispose() {
    log$1('dispose ' + TechName);
    this.stopTrackingDuration();
    this.textTracks().off('selectedlanguagechange', this.textTrackChangeBind);
    this.textTracks().off('addtrack', this.textTrackAddedBind);
    this.audioTracks().off('change', this.audioTrackChangeBind);
    this.audioTracks().off('addtrack', this.audioTrackAddedBind);
    this.el_.removeEventListener('ended', this.onEndedBind);
    this.off(empPlayerEvents.LOAD_START, this.onLoadStartBind);

    if (this.shakaPlayer_) {
      this.shakaPlayer_.destroy();
    }

    _Html.prototype.dispose.call(this);
    this.isDispose_ = true;
  };

  EmpShaka.prototype.program = function program(currentProgram) {
    if (currentProgram) {
      this.currentProgram_ = currentProgram;
    }
  };

  EmpShaka.prototype.seekable = function seekable() {
    if (this.shakaPlayer_) {
      var seekRange = this.shakaPlayer_.seekRange();
      var start = seekRange.start;
      if (this.options_.source && this.options_.source.isDynamicCachupAsLive) {
        start = this.options_.source.streamInfo.startTime / 1000;
      }

      return createTimeRanges(start, seekRange.end);
    } else {
      return createTimeRanges(0, 0);
    }
  };

  EmpShaka.prototype.triggerRecoverableError = function triggerRecoverableError(error) {
    this.triggerRecoverableTechError(error, TechName);
  };

  createClass(EmpShaka, null, [{
    key: 'nativeSourceHandler',
    get: function get$$1() {
      return {
        /**
         * Checks if we can handle source from source object
         *
         * @param {Object} source Source for playback
         * @returns {probably|maybe|*}
         * @method canHandleSource
         */
        canHandleSource: function canHandleSource(source) {
          // Keep this so when setting the source to an mpd url it still works
          var dashExtRE = /\.mpd/i;

          if (EmpShaka.nativeSourceHandler.canPlayType(source.type)) {
            return 'probably';
          } else if (dashExtRE.test(source.src)) {
            return 'maybe';
          } else {
            return '';
          }
        },

        /**
         * Handle source
         * @param {Object} source Source for playback
         * @param {Tech}   tech Tech object to use for playback
         */
        handleSource: function handleSource(source, tech) {
          tech.handleSource(source);
        },

        /**
         * Determine if we can play type
         * @param {String}  type mime-type
         * @returns {probably|''}
         */
        canPlayType: function canPlayType(type) {
          var dashTypeRE = /^application\/dash\+xml/i;
          if (dashTypeRE.test(type) && shaka.Player.isBrowserSupported()) {
            return 'probably';
          }

          return '';
        }
      };
    }
  }, {
    key: 'entitlementPlayRequest',
    get: function get$$1() {
      return {
        drm: 'CENC',
        format: 'DASH',
        type: 'application/dash+xml'
      };
    }
  }, {
    key: 'log',
    get: function get$$1() {
      return log$1;
    }
  }]);
  return EmpShaka;
}(Html5);

EmpShaka.prototype['featuresNativeTextTracks'] = false;

Tech.withSourceHandlers(EmpShaka);

EmpShaka.VERSION = '2.0.84-85';

// Unset source handlers set by Html5 super class.
// We do not intent to support any sources other then sources allowed by nativeSourceHandler
EmpShaka.sourceHandlers = [];
EmpShaka.registerSourceHandler(EmpShaka.nativeSourceHandler);
if (Tech.getTech(TechName)) {
  videojs.log.warn('Not using ' + TechName + ' as it appears to already be registered');
  videojs.log.warn(TechName + ' should only be used with emp-player@2 and above');
} else {
  Tech.registerTech(TechName, EmpShaka);
}

return EmpShaka;

})));
