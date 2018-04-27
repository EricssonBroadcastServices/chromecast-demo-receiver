/**
 * @license
 * EMP-Player 2.0.81-44 
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
(function(window){var l,aa=this;aa.Ve=!0;function n(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b;}function ba(a){var b=ca;function c(){}c.prototype=b.prototype;a.af=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ze=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))};}/*

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
function da(a){this.c=Math.exp(Math.log(.5)/a);this.b=this.a=0;}function ea(a,b,c){var d=Math.pow(a.c,b);c=c*(1-d)+d*a.a;isNaN(c)||(a.a=c,a.b+=b);}function fa(a){return a.a/(1-Math.pow(a.c,a.b))}function ga(){this.b=new da(2);this.c=new da(5);this.a=0;}ga.prototype.getBandwidthEstimate=function(a){return 128E3>this.a?a:Math.min(fa(this.b),fa(this.c))};function ha(){}function ia(){}window.console&&window.console.log.bind&&(ha=console.warn.bind(console));function p(a,b,c,d){this.severity=a;this.category=b;this.code=c;this.data=Array.prototype.slice.call(arguments,3);this.handled=!1;}n("shaka.util.Error",p);p.prototype.toString=function(){return"shaka.util.Error "+JSON.stringify(this,null,"  ")};p.Severity={RECOVERABLE:1,CRITICAL:2};p.Category={NETWORK:1,TEXT:2,MEDIA:3,MANIFEST:4,STREAMING:5,DRM:6,PLAYER:7,CAST:8,STORAGE:9};
p.Code={UNSUPPORTED_SCHEME:1E3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,UNKNOWN_DATA_URI_ENCODING:1005,REQUEST_FILTER_ERROR:1006,RESPONSE_FILTER_ERROR:1007,INVALID_TEXT_HEADER:2E3,INVALID_TEXT_CUE:2001,UNABLE_TO_DETECT_ENCODING:2003,BAD_ENCODING:2004,INVALID_XML:2005,INVALID_MP4_TTML:2007,INVALID_MP4_VTT:2008,UNABLE_TO_EXTRACT_CUE_START_TIME:2009,BUFFER_READ_OUT_OF_BOUNDS:3E3,JS_INTEGER_OVERFLOW:3001,EBML_OVERFLOW:3002,EBML_BAD_FLOATING_POINT_SIZE:3003,MP4_SIDX_WRONG_BOX_TYPE:3004,
MP4_SIDX_INVALID_TIMESCALE:3005,MP4_SIDX_TYPE_NOT_SUPPORTED:3006,WEBM_CUES_ELEMENT_MISSING:3007,WEBM_EBML_HEADER_ELEMENT_MISSING:3008,WEBM_SEGMENT_ELEMENT_MISSING:3009,WEBM_INFO_ELEMENT_MISSING:3010,WEBM_DURATION_ELEMENT_MISSING:3011,WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:3012,WEBM_CUE_TIME_ELEMENT_MISSING:3013,MEDIA_SOURCE_OPERATION_FAILED:3014,MEDIA_SOURCE_OPERATION_THREW:3015,VIDEO_ERROR:3016,QUOTA_EXCEEDED_ERROR:3017,UNABLE_TO_GUESS_MANIFEST_TYPE:4E3,DASH_INVALID_XML:4001,DASH_NO_SEGMENT_INFO:4002,
DASH_EMPTY_ADAPTATION_SET:4003,DASH_EMPTY_PERIOD:4004,DASH_WEBM_MISSING_INIT:4005,DASH_UNSUPPORTED_CONTAINER:4006,DASH_PSSH_BAD_ENCODING:4007,DASH_NO_COMMON_KEY_SYSTEM:4008,DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:4009,DASH_CONFLICTING_KEY_IDS:4010,UNPLAYABLE_PERIOD:4011,RESTRICTIONS_CANNOT_BE_MET:4012,NO_PERIODS:4014,HLS_PLAYLIST_HEADER_MISSING:4015,INVALID_HLS_TAG:4016,HLS_INVALID_PLAYLIST_HIERARCHY:4017,DASH_DUPLICATE_REPRESENTATION_ID:4018,HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:4020,HLS_COULD_NOT_GUESS_MIME_TYPE:4021,
HLS_MASTER_PLAYLIST_NOT_PROVIDED:4022,HLS_REQUIRED_ATTRIBUTE_MISSING:4023,HLS_REQUIRED_TAG_MISSING:4024,HLS_COULD_NOT_GUESS_CODECS:4025,HLS_KEYFORMATS_NOT_SUPPORTED:4026,DASH_UNSUPPORTED_XLINK_ACTUATE:4027,DASH_XLINK_DEPTH_LIMIT:4028,HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:4030,HLS_MEDIA_SEQUENCE_REQUIRED_IN_LIVE_STREAMS:4031,INVALID_STREAMS_CHOSEN:5005,NO_RECOGNIZED_KEY_SYSTEMS:6E3,REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:6001,FAILED_TO_CREATE_CDM:6002,FAILED_TO_ATTACH_TO_VIDEO:6003,INVALID_SERVER_CERTIFICATE:6004,
FAILED_TO_CREATE_SESSION:6005,FAILED_TO_GENERATE_LICENSE_REQUEST:6006,LICENSE_REQUEST_FAILED:6007,LICENSE_RESPONSE_REJECTED:6008,ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:6010,NO_LICENSE_SERVER_GIVEN:6012,OFFLINE_SESSION_REMOVED:6013,EXPIRED:6014,LOAD_INTERRUPTED:7E3,CAST_API_UNAVAILABLE:8E3,NO_CAST_RECEIVERS:8001,ALREADY_CASTING:8002,UNEXPECTED_CAST_ERROR:8003,CAST_CANCELED_BY_USER:8004,CAST_CONNECTION_TIMED_OUT:8005,CAST_RECEIVER_APP_UNAVAILABLE:8006,STORAGE_NOT_SUPPORTED:9E3,INDEXED_DB_ERROR:9001,OPERATION_ABORTED:9002,
REQUESTED_ITEM_NOT_FOUND:9003,MALFORMED_OFFLINE_URI:9004,CANNOT_STORE_LIVE_OFFLINE:9005,STORE_ALREADY_IN_PROGRESS:9006,NO_INIT_DATA_FOR_OFFLINE:9007,LOCAL_PLAYER_INSTANCE_REQUIRED:9008,CONTENT_UNSUPPORTED_BY_BROWSER:9009};var ja=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function ka(a){var b;a instanceof ka?(la(this,a.ea),this.Ca=a.Ca,this.ja=a.ja,ma(this,a.Ka),this.V=a.V,na(this,oa(a.a)),this.wa=a.wa):a&&(b=String(a).match(ja))?(la(this,b[1]||"",!0),this.Ca=pa(b[2]||""),this.ja=pa(b[3]||"",!0),ma(this,b[4]),this.V=pa(b[5]||"",!0),na(this,b[6]||"",!0),this.wa=pa(b[7]||"")):this.a=new qa(null);}l=ka.prototype;l.ea="";l.Ca="";l.ja="";l.Ka=null;l.V="";l.wa="";
l.toString=function(){var a=[],b=this.ea;b&&a.push(ra(b,sa,!0),":");if(b=this.ja){a.push("//");var c=this.Ca;c&&a.push(ra(c,sa,!0),"@");a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.Ka;null!=b&&a.push(":",String(b));}if(b=this.V)this.ja&&"/"!=b.charAt(0)&&a.push("/"),a.push(ra(b,"/"==b.charAt(0)?ta:ua,!0));(b=this.a.toString())&&a.push("?",b);(b=this.wa)&&a.push("#",ra(b,va));return a.join("")};
l.resolve=function(a){var b=new ka(this);"data"===b.ea&&(b=new ka);var c=!!a.ea;c?la(b,a.ea):c=!!a.Ca;c?b.Ca=a.Ca:c=!!a.ja;c?b.ja=a.ja:c=null!=a.Ka;var d=a.V;if(c)ma(b,a.Ka);else if(c=!!a.V){if("/"!=d.charAt(0))if(this.ja&&!this.V)d="/"+d;else{var e=b.V.lastIndexOf("/");-1!=e&&(d=b.V.substr(0,e+1)+d);}if(".."==d||"."==d)d="";else if(-1!=d.indexOf("./")||-1!=d.indexOf("/.")){for(var e=!d.lastIndexOf("/",0),d=d.split("/"),f=[],g=0;g<d.length;){var h=d[g++];"."==h?e&&g==d.length&&f.push(""):".."==h?((1<
f.length||1==f.length&&""!=f[0])&&f.pop(),e&&g==d.length&&f.push("")):(f.push(h),e=!0);}d=f.join("/");}}c?b.V=d:c=""!==a.a.toString();c?na(b,oa(a.a)):c=!!a.wa;c&&(b.wa=a.wa);return b};function la(a,b,c){a.ea=c?pa(b,!0):b;a.ea&&(a.ea=a.ea.replace(/:$/,""));}function ma(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ka=b;}else a.Ka=null;}function na(a,b,c){b instanceof qa?a.a=b:(c||(b=ra(b,wa)),a.a=new qa(b));}
function pa(a,b){return a?b?decodeURI(a):decodeURIComponent(a):""}function ra(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,xa),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xa(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sa=/[#\/\?@]/g,ua=/[\#\?:]/g,ta=/[\#\?]/g,wa=/[\#\?@]/g,va=/#/g;function qa(a){this.b=a||null;}qa.prototype.a=null;qa.prototype.c=null;
qa.prototype.toString=function(){if(this.b)return this.b;if(!this.a)return"";var a=[],b;for(b in this.a)for(var c=encodeURIComponent(b),d=this.a[b],e=0;e<d.length;e++){var f=c;""!==d[e]&&(f+="="+encodeURIComponent(d[e]));a.push(f);}return this.b=a.join("&")};function oa(a){var b=new qa;b.b=a.b;if(a.a){var c={},d;for(d in a.a)c[d]=a.a[d].concat();b.a=c;b.c=a.c;}return b}function u(){var a,b,c=new Promise(function(c,e){a=c;b=e;});c.resolve=a;c.reject=b;return c}function ya(a,b,c){var d=za();this.j=null==a.maxAttempts?d.maxAttempts:a.maxAttempts;this.f=null==a.baseDelay?d.baseDelay:a.baseDelay;this.i=null==a.fuzzFactor?d.fuzzFactor:a.fuzzFactor;this.h=null==a.backoffFactor?d.backoffFactor:a.backoffFactor;this.a=0;this.b=this.f;this.c=b||!1;this.g=c||null;this.c&&(this.a=1);}function Aa(a){if(a.a>=a.j)if(a.c)a.a=1,a.b=a.f;else return Promise.reject();var b=new u;a.a?(Ba(a,b.resolve,a.b*(1+(2*Math.random()-1)*a.i)),a.b*=a.h):b.resolve();a.a++;return b}
function za(){return{maxAttempts:2,baseDelay:1E3,backoffFactor:2,fuzzFactor:.5,timeout:0}}function Ba(a,b,c){if(a.g)if(a.g()||!c)b();else{var d=Math.min(200,c);Ca(function(){Ba(this,b,c-d);}.bind(a),d);}else Ca(b,c);}function Ca(a,b){window.setTimeout(a,b);}function Da(a,b,c,d,e){var f=e in d,g;for(g in b){var h=e+"."+g,k=f?d[e]:c[g];if(f||g in a)void 0===b[g]?void 0===k||f?delete a[g]:a[g]=k:k.constructor==Object&&b[g]&&b[g].constructor==Object?(a[g]||(a[g]=k),Da(a[g],b[g],k,d,h)):typeof b[g]==typeof k&&null!=b[g]&&b[g].constructor==k.constructor&&(a[g]=b[g]);}}
function Ea(a){function b(a){switch(typeof a){case "undefined":case "boolean":case "number":case "string":case "symbol":case "function":return a;default:if(!a)return a;if(0<=c.indexOf(a))return null;var d=a.constructor==Array;if(a.constructor!=Object&&!d)return null;c.push(a);var f=d?[]:{},g;for(g in a)f[g]=b(a[g]);d&&(f.length=a.length);return f}}var c=[];return b(a)}function Fa(a,b){return a.reduce(function(a,b,e){return b["catch"](a.bind(null,e))}.bind(null,b),Promise.reject())}function x(a,b){return a.concat(b)}function Ga(){}function Ha(a){return null!=a}function Ia(a,b,c){return c.indexOf(a)==b}function z(a){this.f=!1;this.a=[];this.b=[];this.c=[];this.g=a||null;}n("shaka.net.NetworkingEngine",z);z.RequestType={MANIFEST:0,SEGMENT:1,LICENSE:2,APP:3};z.PluginPriority={We:1,Ye:2,Te:3};var Ja={};function Ka(a,b,c){c=c||3;var d=Ja[a];if(!d||c>=d.ee)Ja[a]={ee:c,ce:b};}z.registerScheme=Ka;z.unregisterScheme=function(a){delete Ja[a];};z.prototype.ge=function(a){this.b.push(a);};z.prototype.registerRequestFilter=z.prototype.ge;z.prototype.Me=function(a){var b=this.b;a=b.indexOf(a);0<=a&&b.splice(a,1);};
z.prototype.unregisterRequestFilter=z.prototype.Me;z.prototype.Xc=function(){this.b=[];};z.prototype.clearAllRequestFilters=z.prototype.Xc;z.prototype.he=function(a){this.c.push(a);};z.prototype.registerResponseFilter=z.prototype.he;z.prototype.Ne=function(a){var b=this.c;a=b.indexOf(a);0<=a&&b.splice(a,1);};z.prototype.unregisterResponseFilter=z.prototype.Ne;z.prototype.Yc=function(){this.c=[];};z.prototype.clearAllResponseFilters=z.prototype.Yc;
function A(a,b){return{uris:a,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:b}}z.prototype.o=function(){this.f=!0;this.b=[];this.c=[];for(var a=[],b=0;b<this.a.length;++b)a.push(this.a[b]["catch"](Ga));return Promise.all(a)};z.prototype.destroy=z.prototype.o;
z.prototype.request=function(a,b,c){var d=c||function(){return!1};if(this.f)return Promise.reject();b.method=b.method||"GET";b.headers=b.headers||{};b.retryParameters=b.retryParameters?Ea(b.retryParameters):za();b.uris=Ea(b.uris);var e=Date.now(),f=Promise.resolve();this.b.forEach(function(c){f=f.then(c.bind(null,a,b));});f=f["catch"](function(a){throw new p(2,1,1006,a);});f=f.then(function(){var f=Date.now()-e,h=new ya(b.retryParameters,!1,c);return Aa(h).then(function(){return La(this,a,b,h,0,f,
d)}.bind(this))}.bind(this));this.a.push(f);return f.then(function(b){0<=this.a.indexOf(f)&&this.a.splice(this.a.indexOf(f),1);this.g&&!b.fromCache&&1==a&&this.g(b.timeMs,b.data.byteLength);return b}.bind(this))["catch"](function(a){a&&(a.severity=2);0<=this.a.indexOf(f)&&this.a.splice(this.a.indexOf(f),1);return Promise.reject(a)}.bind(this))};z.prototype.request=z.prototype.request;
function La(a,b,c,d,e,f,g){if(a.f||g())return Promise.reject();var h=new ka(c.uris[e]),k=h.ea;k||(k=location.protocol,k=k.slice(0,-1),la(h,k),c.uris[e]=h.toString());k=(k=Ja[k])?k.ce:null;if(!k)return Promise.reject(new p(2,1,1E3,h));var m=Date.now();return k(c.uris[e],c,b).then(function(a){void 0==a.timeMs&&(a.timeMs=Date.now()-m);var c=Date.now(),d=Promise.resolve();this.c.forEach(function(c){d=d.then(function(){return Promise.resolve(c(b,a))}.bind(this));}.bind(this));d=d["catch"](function(a){var b=
2;a instanceof p&&(b=a.severity);throw new p(b,1,1007,a);});return d.then(function(){a.timeMs+=Date.now()-c;a.timeMs+=f;return a})}.bind(a))["catch"](function(a){if(a&&1==a.severity)return e=(e+1)%c.uris.length,g()?Promise.reject():Aa(d).then(function(){return La(this,b,c,d,e,f,g)}.bind(this),function(){throw a;});throw a;}.bind(a))}function Ma(a,b){for(var c=[],d=0;d<a.length;++d){for(var e=!1,f=0;f<c.length&&!(e=b?b(a[d],c[f]):a[d]===c[f]);++f);e||c.push(a[d]);}return c}function Na(a,b,c){for(var d=0;d<a.length;++d)if(c(a[d],b))return d;return-1}function Oa(a,b){var c=a.indexOf(b);-1<c&&a.splice(c,1);}function Pa(a,b){var c=0;a.forEach(function(a){c+=b(a)?1:0;});return c}function Qa(){this.a={};}Qa.prototype.push=function(a,b){this.a.hasOwnProperty(a)?this.a[a].push(b):this.a[a]=[b];};Qa.prototype.get=function(a){return(a=this.a[a])?a.slice():null};Qa.prototype.remove=function(a,b){var c=this.a[a];if(c)for(var d=0;d<c.length;++d)c[d]==b&&(c.splice(d,1),--d);};function Ra(){this.a=new Qa;}Ra.prototype.o=function(){Sa(this);this.a=null;return Promise.resolve()};function B(a,b,c,d){a.a&&(b=new Ta(b,c,d),a.a.push(c,b));}function Ua(a,b,c,d){B(a,b,c,function(a){this.na(b,c);d(a);}.bind(a));}Ra.prototype.na=function(a,b){if(this.a)for(var c=this.a.get(b)||[],d=0;d<c.length;++d){var e=c[d];e.target==a&&(e.na(),this.a.remove(b,e));}};function Sa(a){if(a.a){var b=a.a,c=[],d;for(d in b.a)c.push.apply(c,b.a[d]);for(b=0;b<c.length;++b)c[b].na();a.a.a={};}}
function Ta(a,b,c){this.target=a;this.type=b;this.a=c;this.target.addEventListener(b,c,!1);}Ta.prototype.na=function(){this.target.removeEventListener(this.type,this.a,!1);this.a=this.target=null;};function C(a,b){var c=b||{},d;for(d in c)this[d]=c[d];this.defaultPrevented=this.cancelable=this.bubbles=!1;this.timeStamp=window.performance&&window.performance.now?window.performance.now():Date.now();this.type=a;this.isTrusted=!1;this.target=this.currentTarget=null;this.a=!1;}C.prototype.preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0);};C.prototype.stopImmediatePropagation=function(){this.a=!0;};C.prototype.stopPropagation=function(){};function D(a,b){if(!b.length)return a;var c=b.map(function(a){return new ka(a)});return a.map(function(a){return new ka(a)}).map(function(a){return c.map(a.resolve.bind(a))}).reduce(x,[]).map(function(a){return a.toString()})}function Va(a,b){return{keySystem:a,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:b||[],keyIds:[]}}var Wa=1/15;function Xa(a){return!a||!Object.keys(a).length}function Ya(a){return Object.keys(a).map(function(b){return a[b]})}function Za(a,b){return Object.keys(a).every(function(c){return b(c,a[c])})}function $a(a,b){Object.keys(a).forEach(function(c){b(c,a[c]);});}function ab(a,b){var c=a;b&&(c+='; codecs="'+b+'"');return c}var bb={codecs:"codecs",frameRate:"framerate",bandwidth:"bitrate",width:"width",height:"height",channelsCount:"channels"};function E(a){if(!a)return"";a=new Uint8Array(a);239==a[0]&&187==a[1]&&191==a[2]&&(a=a.subarray(3));a=escape(cb(a));try{return decodeURIComponent(a)}catch(b){throw new p(2,2,2004);}}n("shaka.util.StringUtils.fromUTF8",E);
function db(a,b,c){if(!a)return"";if(!c&&a.byteLength%2)throw new p(2,2,2004);if(a instanceof ArrayBuffer)var d=a;else c=new Uint8Array(a.byteLength),c.set(new Uint8Array(a)),d=c.buffer;a=Math.floor(a.byteLength/2);c=new Uint16Array(a);d=new DataView(d);for(var e=0;e<a;e++)c[e]=d.getUint16(2*e,b);return cb(c)}n("shaka.util.StringUtils.fromUTF16",db);
function eb(a){var b=new Uint8Array(a);if(239==b[0]&&187==b[1]&&191==b[2])return E(b);if(254==b[0]&&255==b[1])return db(b.subarray(2),!1);if(255==b[0]&&254==b[1])return db(b.subarray(2),!0);var c=function(a,b){return a.byteLength<=b||32<=a[b]&&126>=a[b]}.bind(null,b);if(b[0]||b[2]){if(!b[1]&&!b[3])return db(a,!0);if(c(0)&&c(1)&&c(2)&&c(3))return E(a)}else return db(a,!1);throw new p(2,2,2003);}n("shaka.util.StringUtils.fromBytesAutoDetect",eb);
function fb(a){a=unescape(encodeURIComponent(a));for(var b=new Uint8Array(a.length),c=0;c<a.length;++c)b[c]=a.charCodeAt(c);return b.buffer}n("shaka.util.StringUtils.toUTF8",fb);function cb(a){for(var b="",c=0;c<a.length;c+=16E3)b+=String.fromCharCode.apply(null,a.subarray(c,c+16E3));return b}function gb(a){this.a=null;this.b=function(){this.a=null;a();}.bind(this);}gb.prototype.cancel=function(){null!=this.a&&(clearTimeout(this.a),this.a=null);};function hb(a){a.cancel();a.a=setTimeout(a.b,500);}function ib(a,b){a.cancel();var c=function(){this.b();this.a=setTimeout(c,1E3*b);}.bind(a);a.a=setTimeout(c,1E3*b);}function jb(a,b){var c=void 0==b?!0:b,d=window.btoa(String.fromCharCode.apply(null,a)).replace(/\+/g,"-").replace(/\//g,"_");return c?d:d.replace(/=*$/,"")}n("shaka.util.Uint8ArrayUtils.toBase64",jb);function kb(a){a=window.atob(a.replace(/-/g,"+").replace(/_/g,"/"));for(var b=new Uint8Array(a.length),c=0;c<a.length;++c)b[c]=a.charCodeAt(c);return b}n("shaka.util.Uint8ArrayUtils.fromBase64",kb);
function lb(a){for(var b=new Uint8Array(a.length/2),c=0;c<a.length;c+=2)b[c/2]=window.parseInt(a.substr(c,2),16);return b}n("shaka.util.Uint8ArrayUtils.fromHex",lb);function mb(a){for(var b="",c=0;c<a.length;++c){var d=a[c].toString(16);1==d.length&&(d="0"+d);b+=d;}return b}n("shaka.util.Uint8ArrayUtils.toHex",mb);function nb(a,b){if(!a&&!b)return!0;if(!a||!b||a.length!=b.length)return!1;for(var c=0;c<a.length;++c)if(a[c]!=b[c])return!1;return!0}n("shaka.util.Uint8ArrayUtils.equal",nb);
function ob(a){for(var b=0,c=0;c<arguments.length;++c)b+=arguments[c].length;for(var b=new Uint8Array(b),d=0,c=0;c<arguments.length;++c)b.set(arguments[c],d),d+=arguments[c].length;return b}n("shaka.util.Uint8ArrayUtils.concat",ob);function pb(a){this.v=a;this.l=this.j=this.w=null;this.M=!1;this.b=null;this.f=new Ra;this.a=[];this.m=[];this.i=new u;this.h=null;this.g=function(b){this.i.reject(b);a.onError(b);}.bind(this);this.C={};this.H=new gb(this.fe.bind(this));this.ia=this.c=!1;this.L=[];this.ha=!1;this.B=new gb(this.de.bind(this));ib(this.B,1);this.i["catch"](function(){});}l=pb.prototype;
l.o=function(){this.c=!0;var a=this.a.map(function(a){return(a.fa.close()||Promise.resolve())["catch"](Ga)});this.i.reject();this.f&&a.push(this.f.o());this.l&&a.push(this.l.setMediaKeys(null)["catch"](Ga));this.B&&(this.B.cancel(),this.B=null);this.H&&(this.H.cancel(),this.H=null);this.f=this.l=this.j=this.w=this.b=null;this.a=[];this.m=[];this.v=this.g=this.h=null;return Promise.all(a)};l.configure=function(a){this.h=a;};
l.init=function(a,b){var c={},d=[];this.ia=b;this.m=a.offlineSessionIds;qb(this,a,b||0<a.offlineSessionIds.length,c,d);return d.length?rb(this,c,d):(this.M=!0,Promise.resolve())};
function sb(a,b){if(!a.j)return Ua(a.f,b,"encrypted",function(){this.g(new p(2,6,6010));}.bind(a)),Promise.resolve();a.l=b;Ua(a.f,a.l,"play",a.Kd.bind(a));var c=a.l.setMediaKeys(a.j),c=c["catch"](function(a){return Promise.reject(new p(2,6,6003,a.message))}),d=null;a.b.serverCertificate&&a.b.serverCertificate.length&&(d=a.j.setServerCertificate(a.b.serverCertificate).then(function(){})["catch"](function(a){return Promise.reject(new p(2,6,6004,a.message))}));return Promise.all([c,d]).then(function(){if(this.c)return Promise.reject();
tb(this);this.b.initData.length||this.m.length||B(this.f,this.l,"encrypted",this.zd.bind(this));}.bind(a))["catch"](function(a){return this.c?Promise.resolve():Promise.reject(a)}.bind(a))}function ub(a,b){return Promise.all(b.map(function(a){return vb(this,a).then(function(a){if(a){for(var b=new u,c=0;c<this.a.length;c++)if(this.a[c].fa==a){this.a[c].oa=b;break}return Promise.all([a.remove(),b])}}.bind(this))}.bind(a)))}
function tb(a){var b=a.b?a.b.initData:[];b.forEach(function(a){wb(this,a.initDataType,a.initData);}.bind(a));a.m.forEach(function(a){vb(this,a);}.bind(a));b.length||a.m.length||a.i.resolve();return a.i}l.keySystem=function(){return this.b?this.b.keySystem:""};function xb(a){return a.a.map(function(a){return a.fa.sessionId})}l.pb=function(){var a=this.a.map(function(a){a=a.fa.expiration;return isNaN(a)?Infinity:a});return Math.min.apply(Math,a)};
function qb(a,b,c,d,e){var f=yb(a);b.periods.forEach(function(a){a.variants.forEach(function(a){f&&(a.drmInfos=[f]);a.drmInfos.forEach(function(b){zb(this,b);var f=d[b.keySystem];f||(f={audioCapabilities:[],videoCapabilities:[],distinctiveIdentifier:"optional",persistentState:c?"required":"optional",sessionTypes:[c?"persistent-license":"temporary"],label:b.keySystem,drmInfos:[]},d[b.keySystem]=f,e.push(b.keySystem));f.drmInfos.push(b);b.distinctiveIdentifierRequired&&(f.distinctiveIdentifier="required");
b.persistentStateRequired&&(f.persistentState="required");var g=[];a.video&&g.push(a.video);a.audio&&g.push(a.audio);g.forEach(function(a){("video"==a.type?f.videoCapabilities:f.audioCapabilities).push({robustness:("video"==a.type?b.videoRobustness:b.audioRobustness)||"",contentType:ab(a.mimeType,a.codecs)});}.bind(this));}.bind(this));}.bind(this));}.bind(a));}
function rb(a,b,c){if(1==c.length&&""==c[0])return Promise.reject(new p(2,6,6E3));var d=new u,e=d;[!0,!1].forEach(function(a){c.forEach(function(c){var d=b[c];d.drmInfos.some(function(a){return!!a.licenseServerUri})==a&&(d.audioCapabilities.length||delete d.audioCapabilities,d.videoCapabilities.length||delete d.videoCapabilities,e=e["catch"](function(){return this.c?Promise.reject():navigator.requestMediaKeySystemAccess(c,[d])}.bind(this)));}.bind(this));}.bind(a));e=e["catch"](function(){return Promise.reject(new p(2,
6,6001))});e=e.then(function(a){if(this.c)return Promise.reject();var c=0<=navigator.userAgent.indexOf("Edge/"),d=a.getConfiguration();this.w=(d.audioCapabilities||[]).concat(d.videoCapabilities||[]).map(function(a){return a.contentType});c&&(this.w=null);c=b[a.keySystem];Ab(this,a.keySystem,c,c.drmInfos);return this.b.licenseServerUri?a.createMediaKeys():Promise.reject(new p(2,6,6012))}.bind(a)).then(function(a){if(this.c)return Promise.reject();this.j=a;this.M=!0;}.bind(a))["catch"](function(a){if(this.c)return Promise.resolve();
this.w=this.b=null;return a instanceof p?Promise.reject(a):Promise.reject(new p(2,6,6002,a.message))}.bind(a));d.reject();return e}
function zb(a,b){var c=b.keySystem;if(c){if(!b.licenseServerUri){var d=a.h.servers[c];d&&(b.licenseServerUri=d);}b.keyIds||(b.keyIds=[]);if(c=a.h.advanced[c])b.distinctiveIdentifierRequired||(b.distinctiveIdentifierRequired=c.distinctiveIdentifierRequired),b.persistentStateRequired||(b.persistentStateRequired=c.persistentStateRequired),b.videoRobustness||(b.videoRobustness=c.videoRobustness),b.audioRobustness||(b.audioRobustness=c.audioRobustness),b.serverCertificate||(b.serverCertificate=c.serverCertificate);}}
function yb(a){if(Xa(a.h.clearKeys))return null;var b=[],c=[],d;for(d in a.h.clearKeys){var e=a.h.clearKeys[d],f=lb(d),e=lb(e),f={kty:"oct",kid:jb(f,!1),k:jb(e,!1)};b.push(f);c.push(f.kid);}a=JSON.stringify({keys:b});c=JSON.stringify({kids:c});c=[{initData:new Uint8Array(fb(c)),initDataType:"keyids"}];return{keySystem:"org.w3.clearkey",licenseServerUri:"data:application/json;base64,"+window.btoa(a),distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,
initData:c,keyIds:[]}}function Ab(a,b,c,d){var e=[],f=[],g=[],h=[];Bb(d,e,f,g,h);a.b={keySystem:b,licenseServerUri:e[0],distinctiveIdentifierRequired:"required"==c.distinctiveIdentifier,persistentStateRequired:"required"==c.persistentState,audioRobustness:c.audioCapabilities?c.audioCapabilities[0].robustness:"",videoRobustness:c.videoCapabilities?c.videoCapabilities[0].robustness:"",serverCertificate:f[0],initData:g,keyIds:h};}
function Bb(a,b,c,d,e){function f(a,b){return a.keyId&&a.keyId==b.keyId?!0:a.initDataType==b.initDataType&&nb(a.initData,b.initData)}a.forEach(function(a){-1==b.indexOf(a.licenseServerUri)&&b.push(a.licenseServerUri);a.serverCertificate&&-1==Na(c,a.serverCertificate,nb)&&c.push(a.serverCertificate);a.initData&&a.initData.forEach(function(a){-1==Na(d,a,f)&&d.push(a);});if(a.keyIds)for(var g=0;g<a.keyIds.length;++g)-1==e.indexOf(a.keyIds[g])&&e.push(a.keyIds[g]);});}
l.zd=function(a){for(var b=new Uint8Array(a.initData),c=0;c<this.a.length;++c)if(nb(b,this.a[c].initData))return;wb(this,a.initDataType,b);};
function vb(a,b){try{var c=a.j.createSession("persistent-license");}catch(f){var d=new p(2,6,6005,f.message);a.g(d);return Promise.reject(d)}B(a.f,c,"message",a.wc.bind(a));B(a.f,c,"keystatuseschange",a.qc.bind(a));var e={initData:null,fa:c,loaded:!1,Jb:Infinity,oa:null};a.a.push(e);return c.load(b).then(function(a){if(!this.c){if(a)return e.loaded=!0,this.a.every(function(a){return a.loaded})&&this.i.resolve(),c;this.a.splice(this.a.indexOf(e),1);this.g(new p(2,6,6013));}}.bind(a),function(a){this.c||
(this.a.splice(this.a.indexOf(e),1),this.g(new p(2,6,6005,a.message)));}.bind(a))}
function wb(a,b,c){try{var d=a.ia?a.j.createSession("persistent-license"):a.j.createSession();}catch(e){a.g(new p(2,6,6005,e.message));return}B(a.f,d,"message",a.wc.bind(a));B(a.f,d,"keystatuseschange",a.qc.bind(a));a.a.push({initData:c,fa:d,loaded:!1,Jb:Infinity,oa:null});d.generateRequest(b,c.buffer)["catch"](function(a){if(!this.c){for(var b=0;b<this.a.length;++b)if(this.a[b].fa==d){this.a.splice(b,1);break}this.g(new p(2,6,6006,a.message));}}.bind(a));}
l.wc=function(a){this.h.delayLicenseRequestUntilPlayed&&this.l.paused&&!this.ha?this.L.push(a):Cb(this,a);};
function Cb(a,b){for(var c=b.target,d,e=0;e<a.a.length;e++)if(a.a[e].fa==c){d=a.a[e];break}e=A([a.b.licenseServerUri],a.h.retryParameters);e.body=b.message;e.method="POST";"com.microsoft.playready"!=a.b.keySystem&&"com.chromecast.playready"!=a.b.keySystem||Db(e);a.v.Va.request(2,e).then(function(a){return this.c?Promise.reject():c.update(a.data).then(function(){this.v.onEvent(new C("drmsessionupdate"));d&&(d.oa&&d.oa.resolve(),setTimeout(function(){d.loaded=!0;this.a.every(function(a){return a.loaded})&&
this.i.resolve();}.bind(this),5E3));}.bind(this))}.bind(a),function(a){if(this.c)return Promise.resolve();a=new p(2,6,6007,a);this.g(a);d&&d.oa&&d.oa.reject(a);}.bind(a))["catch"](function(a){if(this.c)return Promise.resolve();a=new p(2,6,6008,a.message);this.g(a);d&&d.oa&&d.oa.reject(a);}.bind(a));}
function Db(a){var b=db(a.body,!0,!0);if(-1==b.indexOf("PlayReadyKeyMessage"))a.headers["Content-Type"]="text/xml; charset=utf-8";else{for(var b=(new DOMParser).parseFromString(b,"application/xml"),c=b.getElementsByTagName("HttpHeader"),d=0;d<c.length;++d)a.headers[c[d].querySelector("name").textContent]=c[d].querySelector("value").textContent;a.body=kb(b.querySelector("Challenge").textContent).buffer;}}
l.qc=function(a){a=a.target;var b;for(b=0;b<this.a.length&&this.a[b].fa!=a;++b);if(b!=this.a.length){var c=!1;a.keyStatuses.forEach(function(a,d){if("string"==typeof d){var e=d;d=a;a=e;}if("com.microsoft.playready"==this.b.keySystem&&16==d.byteLength){var e=new DataView(d),f=e.getUint32(0,!0),k=e.getUint16(4,!0),m=e.getUint16(6,!0);e.setUint32(0,f,!1);e.setUint16(4,k,!1);e.setUint16(6,m,!1);}"com.microsoft.playready"==this.b.keySystem&&"status-pending"==a&&(a="usable");"status-pending"!=a&&(this.a[b].loaded=
!0,this.a.every(function(a){return a.loaded})&&this.i.resolve());"expired"==a&&(c=!0);e=mb(new Uint8Array(d));this.C[e]=a;}.bind(this));var d=a.expiration-Date.now();(0>d||c&&1E3>d)&&!this.a[b].oa&&(this.a.splice(b,1),a.close());hb(this.H);}};l.fe=function(){function a(a,c){return"expired"==c}!Xa(this.C)&&Za(this.C,a)&&this.g(new p(2,6,6014));this.v.Kb(this.C);};
function Eb(){var a=[],b=[{contentType:'video/mp4; codecs="avc1.42E01E"'},{contentType:'video/webm; codecs="vp8"'}],c=[{videoCapabilities:b,persistentState:"required",sessionTypes:["persistent-license"]},{videoCapabilities:b}],d={};"org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function(b){var e=navigator.requestMediaKeySystemAccess(b,c).then(function(a){var c=a.getConfiguration().sessionTypes,c=
c?0<=c.indexOf("persistent-license"):!1;0<=navigator.userAgent.indexOf("Tizen 3")&&(c=!1);d[b]={persistentState:c};return a.createMediaKeys()})["catch"](function(){d[b]=null;});a.push(e);});return Promise.all(a).then(function(){return d})}l.Kd=function(){for(var a=0;a<this.L.length;a++)Cb(this,this.L[a]);this.ha=!0;this.L=[];};function Fb(a,b){var c=a.keySystem();return!b.drmInfos.length||b.drmInfos.some(function(a){return a.keySystem==c})}
function Gb(a,b){if(!a.length)return b;if(!b.length)return a;for(var c=[],d=0;d<a.length;d++)for(var e=0;e<b.length;e++)if(a[d].keySystem==b[e].keySystem){var f=a[d],e=b[e],g=[],g=g.concat(f.initData||[]),g=g.concat(e.initData||[]),h=[],h=h.concat(f.keyIds),h=h.concat(e.keyIds);c.push({keySystem:f.keySystem,licenseServerUri:f.licenseServerUri||e.licenseServerUri,distinctiveIdentifierRequired:f.distinctiveIdentifierRequired||e.distinctiveIdentifierRequired,persistentStateRequired:f.persistentStateRequired||
e.persistentStateRequired,videoRobustness:f.videoRobustness||e.videoRobustness,audioRobustness:f.audioRobustness||e.audioRobustness,serverCertificate:f.serverCertificate||e.serverCertificate,initData:g,keyIds:h});break}return c}l.de=function(){this.a.forEach(function(a){var b=a.Jb,c=a.fa.expiration;isNaN(c)&&(c=Infinity);c!=b&&(this.v.onExpirationUpdated(a.fa.sessionId,c),a.Jb=c);}.bind(this));};function Hb(a){return!a||1==a.length&&1E-6>a.end(0)-a.start(0)?null:a.length?a.end(a.length-1):null}function Ib(a,b){return!a||!a.length||1==a.length&&1E-6>a.end(0)-a.start(0)?!1:b>=a.start(0)&&b<=a.end(a.length-1)}function Jb(a,b){if(!a||!a.length||1==a.length&&1E-6>a.end(0)-a.start(0))return 0;for(var c=0,d=a.length-1;0<=d&&a.end(d)>b;--d)c+=a.end(d)-Math.max(a.start(d),b);return c}function Kb(a){if(!a)return[];for(var b=[],c=0;c<a.length;c++)b.push({start:a.start(c),end:a.end(c)});return b}function Lb(){this.a=new muxjs.mp4.Transmuxer;this.b=null;this.c=[];this.f=!1;this.a.on("data",this.h.bind(this));this.a.on("done",this.g.bind(this));}Lb.prototype.o=function(){this.a.dispose();this.a=null;return Promise.resolve()};function Mb(a,b){var c=b.replace("mp2t","mp4");"audio"==a&&(c=c.replace("video","audio"));return c}function Nb(a,b,c){a.b=new u;a.c=[];null==c||a.f||(a.a.setBaseMediaDecodeTime(9E4*c),a.f=!0);b=new Uint8Array(b);a.a.push(b);a.a.flush();return a.b}
Lb.prototype.h=function(a){var b=new Uint8Array(a.data.byteLength+a.initSegment.byteLength);b.set(a.initSegment,0);b.set(a.data,a.initSegment.byteLength);this.c.push(b);};Lb.prototype.g=function(){var a=ob.apply(null,this.c);this.b.resolve(a);};function Ob(a){this.c=null;this.f=a;this.h=this.i=0;this.g=Infinity;this.b=this.a=null;}var Pb={};function Qb(a,b){b.length?(ha("The use of stateless text parsers is deprecated."),Pb[a]=Rb.bind(null,b)):Pb[a]=b;}n("shaka.text.TextEngine.registerParser",Qb);n("shaka.text.TextEngine.unregisterParser",function(a){delete Pb[a];});Ob.prototype.o=function(){this.f=this.c=null;return Promise.resolve()};Ob.prototype.ve=function(a){this.f=a;};Ob.prototype.setDisplayer=Ob.prototype.ve;
function Sb(a,b,c,d){return Promise.resolve().then(function(){if(this.c&&this.f)if(null==c||null==d)this.c.parseInit(b);else{var a={periodStart:this.i,segmentStart:c,segmentEnd:d},a=this.c.parseMedia(new Uint8Array(b),a).filter(function(a){return a.startTime>=this.h&&a.startTime<this.g}.bind(this));this.f.append(a);null==this.a&&(this.a=Math.max(c,this.h));this.b=Math.min(d,this.g);}}.bind(a))}
Ob.prototype.remove=function(a,b){return Promise.resolve().then(function(){!this.f||!this.f.remove(a,b)||null==this.a||b<=this.a||a>=this.b||(a<=this.a&&b>=this.b?this.a=this.b=null:a<=this.a&&b<this.b?this.a=b:a>this.a&&b>=this.b&&(this.b=a));}.bind(this))};function Rb(a){this.ba=a;}Rb.prototype.parseInit=function(a){this.ba(a,0,null,null);};
Rb.prototype.parseMedia=function(a,b){if(a.byteLength!=a.buffer.byteLength||a.byteOffset){var c=new Uint8Array(a.byteLength);c.set(a);c=c.buffer;}else c=a.buffer;return this.ba(c,b.periodStart,b.segmentStart,b.segmentEnd)};function Tb(a,b,c){this.g=a;this.f=b;this.l=c;this.b={};this.a=null;this.c={};this.i=new Ra;this.j=!1;this.h={};}
function Ub(){var a={};'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="av1",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",video/mp2t; codecs="mp4a.40.2",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function(b){a[b]=!!Pb[b]||
MediaSource.isTypeSupported(b);var c=b.split(";")[0];a[c]=a[c]||a[b];});return a}l=Tb.prototype;l.o=function(){this.j=!0;var a=[],b;for(b in this.c){var c=this.c[b],d=c[0];this.c[b]=c.slice(0,1);d&&a.push(d.p["catch"](Ga));for(d=1;d<c.length;++d)c[d].p["catch"](Ga),c[d].p.reject();}this.a&&a.push(this.a.o());for(b in this.h)a.push(this.h[b].o());return Promise.all(a).then(function(){this.i.o();this.l=this.a=this.f=this.g=this.i=null;this.b={};this.h={};this.c={};}.bind(this))};
l.init=function(a){for(var b in a){var c=a[b],c=ab(c.mimeType,c.codecs);"text"==b?Vb(this,c):(!MediaSource.isTypeSupported(c)&&window.muxjs&&"mp2t"==c.split(";")[0].split("/")[1]&&MediaSource.isTypeSupported(Mb(b,c))&&(this.h[b]=new Lb,c=Mb(b,c)),c=this.f.addSourceBuffer(c),B(this.i,c,"error",this.Ge.bind(this,b)),B(this.i,c,"updateend",this.Ja.bind(this,b)),this.b[b]=c,this.c[b]=[]);}};function Vb(a,b){a.a||(a.a=new Ob(a.l));a.a.c=new Pb[b];}
function Wb(a,b){if("text"==b)var c=a.a.a;else c=Xb(a,b),c=!c||1==c.length&&1E-6>c.end(0)-c.start(0)?null:1==c.length&&0>c.start(0)?0:c.length?c.start(0):null;return c}l.Bb=function(){var a=this.a&&null!=this.a.a?[{start:this.a.a,end:this.a.b}]:[];return{total:Kb(this.g.buffered),audio:Kb(Xb(this,"audio")),video:Kb(Xb(this,"video")),text:a}};function Xb(a,b){try{return a.b[b].buffered}catch(c){return null}}
function Yb(a,b,c,d,e){return"text"==b?Sb(a.a,c,d,e):a.h[b]?Nb(a.h[b],c,d).then(function(a){return Zb(this,b,this.Nc.bind(this,b,a.buffer))}.bind(a)):Zb(a,b,a.Nc.bind(a,b,c))}l.remove=function(a,b,c){return"text"==a?this.a.remove(b,c):Zb(this,a,this.Cc.bind(this,a,b,c))};function $b(a,b){return"text"==b?a.a.remove(0,Infinity):Zb(a,b,a.Cc.bind(a,b,0,a.f.duration))}
function ac(a,b,c,d,e){return"text"==b?(a.a.i=c,a=a.a,a.h=d,a.g=e,Promise.resolve()):Promise.all([Zb(a,b,a.Tc.bind(a,b)),Zb(a,b,a.xe.bind(a,b,c)),Zb(a,b,a.ue.bind(a,b,d,e))])}l.endOfStream=function(a){return bc(this,function(){a?this.f.endOfStream(a):this.f.endOfStream();}.bind(this))};l.ga=function(a){return bc(this,function(){this.f.duration=a;}.bind(this))};l.ka=function(){return this.f.duration};l.Nc=function(a,b){this.b[a].appendBuffer(b);};
l.Cc=function(a,b,c){c<=b?this.Ja(a):this.b[a].remove(b,c);};l.Tc=function(a){var b=this.b[a].appendWindowStart,c=this.b[a].appendWindowEnd;this.b[a].abort();this.b[a].appendWindowStart=b;this.b[a].appendWindowEnd=c;this.Ja(a);};l.bd=function(a){this.g.currentTime-=.001;this.Ja(a);};l.xe=function(a,b){this.b[a].timestampOffset=b;this.Ja(a);};l.ue=function(a,b,c){this.b[a].appendWindowStart=0;this.b[a].appendWindowEnd=c;this.b[a].appendWindowStart=b;this.Ja(a);};
l.Ge=function(a){this.c[a][0].p.reject(new p(2,3,3014,this.g.error?this.g.error.code:0));};l.Ja=function(a){var b=this.c[a][0];b&&(b.p.resolve(),cc(this,a));};function Zb(a,b,c){if(a.j)return Promise.reject();c={start:c,p:new u};a.c[b].push(c);if(1==a.c[b].length)try{c.start();}catch(d){"QuotaExceededError"==d.name?c.p.reject(new p(2,3,3017,b)):c.p.reject(new p(2,3,3015,d)),cc(a,b);}return c.p}
function bc(a,b){if(a.j)return Promise.reject();var c=[],d;for(d in a.b){var e=new u,f={start:function(a){a.resolve();}.bind(null,e),p:e};a.c[d].push(f);c.push(e);1==a.c[d].length&&f.start();}return Promise.all(c).then(function(){var a;try{b();}catch(k){var c=Promise.reject(new p(2,3,3015,k));}for(a in this.b)cc(this,a);return c}.bind(a),function(){return Promise.reject()}.bind(a))}function cc(a,b){a.c[b].shift();var c=a.c[b][0];if(c)try{c.start();}catch(d){c.p.reject(new p(2,3,3015,d)),cc(a,b);}}function dc(a,b,c){return c==b||a>=ec&&c==b.split("-")[0]||a>=fc&&c.split("-")[0]==b.split("-")[0]?!0:!1}var ec=1,fc=2;function gc(a){a=a.toLowerCase().split("-");var b=hc[a[0]];b&&(a[0]=b);return a.join("-")}
var hc={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bod:"bo",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",ces:"cs",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cym:"cy",cze:"cs",dan:"da",deu:"de",div:"dv",dut:"nl",dzo:"dz",ell:"el",eng:"en",epo:"eo",est:"et",eus:"eu",ewe:"ee",fao:"fo",fas:"fa",fij:"fj",fin:"fi",fra:"fr",fre:"fr",
fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",hye:"hy",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",isl:"is",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kat:"ka",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",
lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mkd:"mk",mlg:"mg",mlt:"mt",mon:"mn",mri:"mi",msa:"ms",mya:"my",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nld:"nl",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",ron:"ro",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slk:"sk",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",sqi:"sq",
srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zho:"zh",zul:"zu"};function ic(a,b,c){var d=a.video;return d&&(d.width<b.minWidth||d.width>b.maxWidth||d.width>c.width||d.height<b.minHeight||d.height>b.maxHeight||d.height>c.height||d.width*d.height<b.minPixels||d.width*d.height>b.maxPixels)||a.bandwidth<b.minBandwidth||a.bandwidth>b.maxBandwidth?!1:!0}function jc(a,b,c){var d=!1;a.variants.forEach(function(a){var e=a.allowedByApplication;a.allowedByApplication=ic(a,b,c);e!=a.allowedByApplication&&(d=!0);});return d}
function kc(a,b,c,d){d.variants=d.variants.filter(function(d){return a&&a.M&&!Fb(a,d)?!1:lc(d.audio,a,b)&&lc(d.video,a,c)});d.textStreams=d.textStreams.filter(function(a){return!!Pb[ab(a.mimeType,a.codecs)]});}
function lc(a,b,c){if(!a)return!0;var d=null;b&&b.M&&(d=b.w);b=ab(a.mimeType,a.codecs);var e=ab(a.mimeType,a.codecs),f=a.mimeType,g;for(g in bb){var h=a[g],k=bb[g];h&&(f+="; "+k+'="'+h+'"');}return!(Pb[e]||MediaSource.isTypeSupported(f)||window.muxjs&&"mp2t"==e.split(";")[0].split("/")[1]&&MediaSource.isTypeSupported(Mb(a.type,e)))||d&&a.encrypted&&0>d.indexOf(b)||c&&(a.mimeType!=c.mimeType||a.codecs.split(".")[0]!=c.codecs.split(".")[0])?!1:!0}
function mc(a){var b=a.audio,c=a.video,d=b?b.codecs:null,e=c?c.codecs:null,f=[];e&&f.push(e);d&&f.push(d);var g=[];c&&g.push(c.mimeType);b&&g.push(b.mimeType);var g=g[0]||null,h=[];b&&h.push(b.kind);c&&h.push(c.kind);var h=h[0]||null,k=[];b&&k.push.apply(k,b.roles);c&&k.push.apply(k,c.roles);k=Ma(k);a={id:a.id,active:!1,type:"variant",bandwidth:a.bandwidth,language:a.language,label:null,kind:h,width:null,height:null,frameRate:null,mimeType:g,codecs:f.join(", "),audioCodec:d,videoCodec:e,primary:a.primary,
roles:k,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null};c&&(a.videoId=c.id,a.width=c.width||null,a.height=c.height||null,a.frameRate=c.frameRate||null,a.videoBandwidth=c.bandwidth||null);b&&(a.audioId=b.id,a.channelsCount=b.channelsCount,a.audioBandwidth=b.bandwidth||null,a.label=b.label);return a}
function nc(a){return{id:a.id,active:!1,type:"text",bandwidth:0,language:a.language,label:a.label,kind:a.kind||null,width:null,height:null,frameRate:null,mimeType:a.mimeType,codecs:a.codecs||null,audioCodec:null,videoCodec:null,primary:a.primary,roles:a.roles,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null}}function oc(a){var b=[],c=pc(a.variants);a=a.textStreams;c.forEach(function(a){b.push(mc(a));});a.forEach(function(a){b.push(nc(a));});return b}
function qc(a,b,c){return pc(a.variants).map(function(a){var d=mc(a);a.video&&a.audio?d.active=c==a.video.id&&b==a.audio.id:a.video?d.active=c==a.video.id:a.audio&&(d.active=b==a.audio.id);return d})}function rc(a,b){return a.textStreams.map(function(a){var c=nc(a);c.active=b==a.id;return c})}function sc(a,b){for(var c=0;c<a.variants.length;c++)if(a.variants[c].id==b.id)return a.variants[c];return null}
function tc(a,b){for(var c=0;c<a.textStreams.length;c++)if(a.textStreams[c].id==b.id)return a.textStreams[c];return null}function uc(a){return a.allowedByApplication&&a.allowedByKeySystem}function pc(a){return a.filter(function(a){return uc(a)})}
function vc(a,b,c,d){var e=pc(a.variants),f=e.filter(function(a){return a.primary});f.length||(f=e);var g=f.length?f[0].language:"",f=f.filter(function(a){return a.language==g});if(b){var h=gc(b);[fc,ec,0].forEach(function(a){var b=!1;e.forEach(function(c){h=gc(h);var e=gc(c.language);dc(a,h,e)&&(b?f.push(c):(f=[c],b=!0),d&&(d.audio=!0));});});}if(c&&(a=wc(f,c),a.length))return a;a=f.map(function(a){return(a.audio?a.audio.roles:[]).concat(a.video?a.video.roles:[])}).reduce(x,[]);return a.length?wc(f,
a[0]):f}function xc(a,b,c,d){var e=a.textStreams,f=e.filter(function(a){return a.primary});f.length||(f=e);var g=f.length?f[0].language:"",f=f.filter(function(a){return a.language==g});if(b){var h=gc(b);[fc,ec,0].forEach(function(a){var b=!1;e.forEach(function(c){var e=gc(c.language);dc(a,h,e)&&(b?f.push(c):(f=[c],b=!0),d&&(d.text=!0));});});}if(c&&(a=yc(f,c),a.length))return a;a=f.map(function(a){return a.roles}).reduce(x,[]);return a.length?yc(f,a[0]):f}
function wc(a,b){return a.filter(function(a){return a.audio&&0<=a.audio.roles.indexOf(b)||a.video&&0<=a.video.roles.indexOf(b)})}function yc(a,b){return a.filter(function(a){return 0<=a.roles.indexOf(b)})}function zc(a,b,c){for(var d=0;d<c.length;d++)if(c[d].audio==a&&c[d].video==b)return c[d];return null}function Ac(a,b,c){function d(a,b){return null==a?null==b:b.id==a}for(var e=0;e<c.length;e++)if(d(a,c[e].audio)&&d(b,c[e].video))return c[e];return null}
function Bc(a,b){for(var c=a.periods.length-1;0<c;--c)if(b+Wa>=a.periods[c].startTime)return c;return 0}function Cc(a,b){for(var c=0;c<a.periods.length;++c){var d=a.periods[c];if("text"==b.type)for(var e=0;e<d.textStreams.length;++e){if(d.textStreams[e]==b)return c}else for(e=0;e<d.variants.length;++e){var f=d.variants[e];if(f.audio==b||f.video==b||f.video&&f.video.trickModeVideo==b)return c}}return-1}function F(){this.h=null;this.c=!1;this.b=new ga;this.g=[];this.i=!1;this.a=this.f=null;}n("shaka.abr.SimpleAbrManager",F);F.prototype.stop=function(){this.h=null;this.c=!1;this.g=[];this.f=null;};F.prototype.stop=F.prototype.stop;F.prototype.init=function(a){this.h=a;};F.prototype.init=F.prototype.init;
F.prototype.chooseVariant=function(){var a=Dc(this.a.restrictions,this.g),b=this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);if(this.g.length&&!a.length)throw new p(2,4,4012);for(var c=a[0]||null,d=0;d<a.length;++d){var e=a[d],f=(a[d+1]||{bandwidth:Infinity}).bandwidth/this.a.bandwidthUpgradeTarget;b>=e.bandwidth/this.a.bandwidthDowngradeTarget&&b<=f&&(c=e);}this.f=Date.now();return c};F.prototype.chooseVariant=F.prototype.chooseVariant;F.prototype.enable=function(){this.c=!0;};
F.prototype.enable=F.prototype.enable;F.prototype.disable=function(){this.c=!1;};F.prototype.disable=F.prototype.disable;F.prototype.segmentDownloaded=function(a,b){var c=this.b;if(!(16E3>b)){var d=8E3*b/a,e=a/1E3;c.a+=b;ea(c.b,e,d);ea(c.c,e,d);}if(null!=this.f&&this.c)a:{if(!this.i){if(!(128E3<=this.b.a))break a;this.i=!0;}else if(Date.now()-this.f<1E3*this.a.switchInterval)break a;c=this.chooseVariant();this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.h(c);}};
F.prototype.segmentDownloaded=F.prototype.segmentDownloaded;F.prototype.getBandwidthEstimate=function(){return this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate)};F.prototype.getBandwidthEstimate=F.prototype.getBandwidthEstimate;F.prototype.setVariants=function(a){this.g=a;};F.prototype.setVariants=F.prototype.setVariants;F.prototype.configure=function(a){this.a=a;};F.prototype.configure=F.prototype.configure;
function Dc(a,b){return b.filter(function(b){return ic(b,a,{width:Infinity,height:Infinity})}).sort(function(a,b){return a.bandwidth-b.bandwidth})}var Ec="ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),Fc="buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),Gc=["loop","playbackRate"],Hc=["pause","play"],Ic="adaptation buffering emsg error loading streaming texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged unloading".split(" "),Jc="drmInfo getAudioLanguages getBufferedInfo getConfiguration getExpiration getManifest getManifestUri getPlaybackRate getTextLanguages getTextTracks getStats getVariantTracks isAudioOnly isBuffering isInProgress isLive isTextTrackVisible keySystem seekRange".split(" "),
Kc=["getPlayheadTimeAsDate","getPresentationStartTimeAsDate"],Lc=[["getConfiguration","configure"]],Mc=[["isTextTrackVisible","setTextTrackVisibility"]],Nc="addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectTextLanguage selectTextTrack selectVariantTrack setTextTrackVisibility trickPlay".split(" "),Oc=["load","unload"];
function Pc(a){return JSON.stringify(a,function(a,c){if("manager"!=a&&"function"!=typeof c){if(c instanceof Event||c instanceof C){var b={},e;for(e in c){var f=c[e];f&&"object"==typeof f?"detail"==e&&(b[e]=f):e in Event||(b[e]=f);}return b}if(c instanceof TimeRanges)for(b={__type__:"TimeRanges",length:c.length,start:[],end:[]},e=0;e<c.length;++e)b.start.push(c.start(e)),b.end.push(c.end(e));else b="number"==typeof c?isNaN(c)?"NaN":isFinite(c)?c:0>c?"-Infinity":"Infinity":c;return b}})}
function Tc(a){return JSON.parse(a,function(a,c){return"NaN"==c?NaN:"-Infinity"==c?-Infinity:"Infinity"==c?Infinity:c&&"object"==typeof c&&"TimeRanges"==c.__type__?Uc(c):c})}function Uc(a){return{length:a.length,start:function(b){return a.start[b]},end:function(b){return a.end[b]}}}function Vc(a,b,c,d,e,f){this.L=a;this.g=b;this.M=c;this.j=!1;this.C=d;this.H=e;this.w=f;this.b=this.h=!1;this.B="";this.i=null;this.l=this.oc.bind(this);this.m=this.Gd.bind(this);this.a={video:{},player:{}};this.v=0;this.c={};this.f=null;}var Wc=!1,G=null;l=Vc.prototype;l.o=function(){Xc(this);G&&Yc(this);this.H=this.C=this.g=null;this.b=this.h=!1;this.m=this.l=this.f=this.c=this.a=this.i=null;return Promise.resolve()};l.aa=function(){return this.b};l.Pb=function(){return this.B};
l.init=function(){if(window.chrome&&chrome.cast&&chrome.cast.isAvailable){delete window.__onGCastApiAvailable;this.h=!0;this.g();var a=new chrome.cast.SessionRequest(this.L),a=new chrome.cast.ApiConfig(a,this.pc.bind(this),this.Md.bind(this),"origin_scoped");chrome.cast.initialize(a,function(){},function(){});Wc&&setTimeout(this.g.bind(this),20);(a=G)&&a.status!=chrome.cast.SessionStatus.STOPPED?this.pc(a):G=null;}else window.__onGCastApiAvailable=function(a){a&&this.init();}.bind(this);};
l.Tb=function(a){this.i=a;this.b&&Zc({type:"appData",appData:this.i});};l.cast=function(a){if(!this.h)return Promise.reject(new p(1,8,8E3));if(!Wc)return Promise.reject(new p(1,8,8001));if(this.b)return Promise.reject(new p(1,8,8002));this.f=new u;chrome.cast.requestSession(this.Mb.bind(this,a),this.nc.bind(this));return this.f};l.ob=function(){this.b&&(Xc(this),G&&(Yc(this),G.stop(function(){},function(){}),G=null));};
l.get=function(a,b){if("video"==a){if(0<=Hc.indexOf(b))return this.Bc.bind(this,a,b)}else if("player"==a){if(0<=Kc.indexOf(b)&&!this.get("player","isLive")())return function(){};if(0<=Nc.indexOf(b))return this.Bc.bind(this,a,b);if(0<=Oc.indexOf(b))return this.je.bind(this,a,b);if(0<=Jc.indexOf(b))return this.yc.bind(this,a,b)}return this.yc(a,b)};l.set=function(a,b,c){this.a[a][b]=c;Zc({type:"set",targetName:a,property:b,value:c});};
l.Mb=function(a,b){G=b;b.addUpdateListener(this.l);b.addMessageListener("urn:x-cast:com.google.shaka.v2",this.m);this.oc();Zc({type:"init",initState:a,appData:this.i});this.f.resolve();};l.nc=function(a){var b=8003;switch(a.code){case "cancel":b=8004;break;case "timeout":b=8005;break;case "receiver_unavailable":b=8006;}this.f.reject(new p(2,8,b,a));};l.yc=function(a,b){return this.a[a][b]};l.Bc=function(a,b){Zc({type:"call",targetName:a,methodName:b,args:Array.prototype.slice.call(arguments,2)});};
l.je=function(a,b){var c=Array.prototype.slice.call(arguments,2),d=new u,e=this.v.toString();this.v++;this.c[e]=d;Zc({type:"asyncCall",targetName:a,methodName:b,args:c,id:e});return d};l.pc=function(a){var b=this.w();this.f=new u;this.j=!0;this.Mb(b,a);};l.Md=function(a){Wc="available"==a;this.g();};function Yc(a){var b=G;b.removeUpdateListener(a.l);b.removeMessageListener("urn:x-cast:com.google.shaka.v2",a.m);}
l.oc=function(){var a=G?"connected"==G.status:!1;if(this.b&&!a){this.H();for(var b in this.a)this.a[b]={};Xc(this);}this.B=(this.b=a)?G.receiver.friendlyName:"";this.g();};function Xc(a){for(var b in a.c){var c=a.c[b];delete a.c[b];c.reject(new p(1,7,7E3));}}
l.Gd=function(a,b){var c=Tc(b);switch(c.type){case "event":var d=c.targetName,e=c.event;this.C(d,new C(e.type,e));break;case "update":e=c.update;for(d in e){var c=this.a[d]||{};for(f in e[d])c[f]=e[d][f];}this.j&&(this.M(),this.j=!1);break;case "asyncComplete":d=c.id;var f=c.error;c=this.c[d];delete this.c[d];if(c)if(f){d=new p(f.severity,f.category,f.code);for(e in f)d[e]=f[e];c.reject(d);}else c.resolve();}};function Zc(a){a=Pc(a);G.sendMessage("urn:x-cast:com.google.shaka.v2",a,function(){},ia);}function ca(){this.yb=new Qa;this.fb=this;}ca.prototype.addEventListener=function(a,b){this.yb.push(a,b);};ca.prototype.removeEventListener=function(a,b){this.yb.remove(a,b);};ca.prototype.dispatchEvent=function(a){for(var b=this.yb.get(a.type)||[],c=0;c<b.length;++c){a.target=this.fb;a.currentTarget=this.fb;var d=b[c];try{d.handleEvent?d.handleEvent(a):d.call(this,a);}catch(e){}if(a.a)break}return a.defaultPrevented};function H(a,b,c){ca.call(this);this.c=a;this.b=b;this.i=this.g=this.f=this.j=this.h=null;this.a=new Vc(c,this.Be.bind(this),this.Ce.bind(this),this.De.bind(this),this.Ee.bind(this),this.hc.bind(this));$c(this);}ba(H);n("shaka.cast.CastProxy",H);H.prototype.o=function(a){a&&this.a&&this.a.ob();a=[this.i?this.i.o():null,this.b?this.b.o():null,this.a?this.a.o():null];this.a=this.i=this.j=this.h=this.b=this.c=null;return Promise.all(a)};H.prototype.destroy=H.prototype.o;H.prototype.rd=function(){return this.h};
H.prototype.getVideo=H.prototype.rd;H.prototype.hd=function(){return this.j};H.prototype.getPlayer=H.prototype.hd;H.prototype.Uc=function(){return this.a?this.a.h&&Wc:!1};H.prototype.canCast=H.prototype.Uc;H.prototype.aa=function(){return this.a?this.a.aa():!1};H.prototype.isCasting=H.prototype.aa;H.prototype.Pb=function(){return this.a?this.a.Pb():""};H.prototype.receiverName=H.prototype.Pb;H.prototype.cast=function(){var a=this.hc();return this.a.cast(a).then(function(){return this.b.vb()}.bind(this))};
H.prototype.cast=H.prototype.cast;H.prototype.Tb=function(a){this.a.Tb(a);};H.prototype.setAppData=H.prototype.Tb;H.prototype.Je=function(){var a=this.a;if(a.b){var b=a.w();chrome.cast.requestSession(a.Mb.bind(a,b),a.nc.bind(a));}};H.prototype.suggestDisconnect=H.prototype.Je;H.prototype.ob=function(){this.a.ob();};H.prototype.forceDisconnect=H.prototype.ob;
function $c(a){a.a.init();a.i=new Ra;Ec.forEach(function(a){B(this.i,this.c,a,this.Re.bind(this));}.bind(a));Ic.forEach(function(a){B(this.i,this.b,a,this.be.bind(this));}.bind(a));a.h={};for(var b in a.c)Object.defineProperty(a.h,b,{configurable:!1,enumerable:!0,get:a.Qe.bind(a,b),set:a.Se.bind(a,b)});a.j={};for(b in a.b)Object.defineProperty(a.j,b,{configurable:!1,enumerable:!0,get:a.ae.bind(a,b)});a.f=new ca;a.f.fb=a.h;a.g=new ca;a.g.fb=a.j;}l=H.prototype;
l.hc=function(){var a={video:{},player:{},playerAfterLoad:{},manifest:this.b.lb,startTime:null};this.c.pause();Gc.forEach(function(b){a.video[b]=this.c[b];}.bind(this));this.c.ended||(a.startTime=this.c.currentTime);Lc.forEach(function(b){var c=b[1];b=this.b[b[0]]();a.player[c]=b;}.bind(this));Mc.forEach(function(b){var c=b[1];b=this.b[b[0]]();a.playerAfterLoad[c]=b;}.bind(this));return a};l.Be=function(){this.dispatchEvent(new C("caststatuschanged"));};
l.Ce=function(){this.f.dispatchEvent(new C(this.h.paused?"pause":"play"));};
l.Ee=function(){Lc.forEach(function(a){var b=a[1];a=this.a.get("player",a[0])();this.b[b](a);}.bind(this));var a=this.a.get("player","getManifestUri")(),b=this.a.get("video","ended"),c=Promise.resolve(),d=this.c.autoplay,e=null;b||(e=this.a.get("video","currentTime"));a&&(this.c.autoplay=!1,c=this.b.load(a,e),c["catch"](function(a){this.b.dispatchEvent(new C("error",{detail:a}));}.bind(this)));var f={};Gc.forEach(function(a){f[a]=this.a.get("video",a);}.bind(this));c.then(function(){Gc.forEach(function(a){this.c[a]=
f[a];}.bind(this));Mc.forEach(function(a){var b=a[1];a=this.a.get("player",a[0])();this.b[b](a);}.bind(this));this.c.autoplay=d;a&&this.c.play();}.bind(this));};
l.Qe=function(a){if("addEventListener"==a)return this.f.addEventListener.bind(this.f);if("removeEventListener"==a)return this.f.removeEventListener.bind(this.f);if(this.a.aa()&&!Object.keys(this.a.a.video).length){var b=this.c[a];if("function"!=typeof b)return b}return this.a.aa()?this.a.get("video",a):(b=this.c[a],"function"==typeof b&&(b=b.bind(this.c)),b)};l.Se=function(a,b){this.a.aa()?this.a.set("video",a,b):this.c[a]=b;};l.Re=function(a){this.a.aa()||this.f.dispatchEvent(new C(a.type,a));};
l.ae=function(a){return"addEventListener"==a?this.g.addEventListener.bind(this.g):"removeEventListener"==a?this.g.removeEventListener.bind(this.g):"getMediaElement"==a?function(){return this.h}.bind(this):"getNetworkingEngine"==a?this.b.ic.bind(this.b):this.a.aa()&&!Object.keys(this.a.a.video).length&&0<=Jc.indexOf(a)||!this.a.aa()?(a=this.b[a],a.bind(this.b)):this.a.get("player",a)};l.be=function(a){this.a.aa()||this.g.dispatchEvent(a);};
l.De=function(a,b){this.a.aa()&&("video"==a?this.f.dispatchEvent(b):"player"==a&&this.g.dispatchEvent(b));};function I(a,b,c,d){ca.call(this);this.a=a;this.b=b;this.j={video:a,player:b};this.l=c||function(){};this.m=d||function(a){return a};this.i=!1;this.f=!0;this.h=this.g=this.c=null;ad(this);}ba(I);n("shaka.cast.CastReceiver",I);I.prototype.isConnected=function(){return this.i};I.prototype.isConnected=I.prototype.isConnected;I.prototype.ud=function(){return this.f};I.prototype.isIdle=I.prototype.ud;
I.prototype.o=function(){var a=this.b?this.b.o():Promise.resolve();null!=this.h&&window.clearTimeout(this.h);this.l=this.j=this.b=this.a=null;this.i=!1;this.f=!0;this.h=this.g=this.c=null;return a.then(function(){cast.receiver.CastReceiverManager.getInstance().stop();})};I.prototype.destroy=I.prototype.o;
function ad(a){var b=cast.receiver.CastReceiverManager.getInstance();b.onSenderConnected=a.vc.bind(a);b.onSenderDisconnected=a.vc.bind(a);b.onSystemVolumeChanged=a.ad.bind(a);a.g=b.getCastMessageBus("urn:x-cast:com.google.cast.media");a.g.onMessage=a.Bd.bind(a);a.c=b.getCastMessageBus("urn:x-cast:com.google.shaka.v2");a.c.onMessage=a.Pd.bind(a);b.start();Ec.forEach(function(a){this.a.addEventListener(a,this.zc.bind(this,"video"));}.bind(a));Ic.forEach(function(a){this.b.addEventListener(a,this.zc.bind(this,
"player"));}.bind(a));cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?a.b.Ub(3840,2160):a.b.Ub(1920,1080);a.b.addEventListener("loading",function(){this.f=!1;bd(this);}.bind(a));a.a.addEventListener("playing",function(){this.f=!1;bd(this);}.bind(a));a.a.addEventListener("pause",function(){bd(this);}.bind(a));a.b.addEventListener("unloading",function(){this.f=!0;bd(this);}.bind(a));a.a.addEventListener("ended",function(){window.setTimeout(function(){this.a&&
this.a.ended&&(this.f=!0,bd(this));}.bind(this),5E3);}.bind(a));}l=I.prototype;l.vc=function(){this.i=!!cast.receiver.CastReceiverManager.getInstance().getSenders().length;bd(this);};function bd(a){Promise.resolve().then(function(){this.dispatchEvent(new C("caststatuschanged"));cd(this,0);}.bind(a));}
function dd(a,b,c){for(var d in b.player)a.b[d](b.player[d]);a.l(c);c=Promise.resolve();var e=a.a.autoplay;b.manifest&&(a.a.autoplay=!1,c=a.b.load(b.manifest,b.startTime),c["catch"](function(a){this.b.dispatchEvent(new C("error",{detail:a}));}.bind(a)));c.then(function(){var a;for(a in b.video){var c=b.video[a];this.a[a]=c;}for(a in b.playerAfterLoad)c=b.playerAfterLoad[a],this.b[a](c);this.a.autoplay=e;b.manifest&&(this.a.play(),cd(this,0));}.bind(a));}
l.zc=function(a,b){this.Nb();ed(this,{type:"event",targetName:a,event:b},this.c);};
l.Nb=function(){null!=this.h&&window.clearTimeout(this.h);this.h=window.setTimeout(this.Nb.bind(this),500);var a={video:{},player:{}};Fc.forEach(function(b){a.video[b]=this.a[b];}.bind(this));var b=Jc;this.b.S()&&(b=b.concat(Kc));b.forEach(function(b){a.player[b]=this.b[b]();}.bind(this));if(b=cast.receiver.CastReceiverManager.getInstance().getSystemVolume())a.video.volume=b.level,a.video.muted=b.muted;ed(this,{type:"update",update:a},this.c);};
l.ad=function(){var a=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();a&&ed(this,{type:"update",update:{video:{volume:a.level,muted:a.muted}}},this.c);ed(this,{type:"event",targetName:"video",event:{type:"volumechange"}},this.c);};
l.Pd=function(a){var b=Tc(a.data);switch(b.type){case "init":dd(this,b.initState,b.appData);this.Nb();break;case "appData":this.l(b.appData);break;case "set":var c=b.targetName,d=b.property,e=b.value;if("video"==c)if(b=cast.receiver.CastReceiverManager.getInstance(),"volume"==d){b.setSystemVolumeLevel(e);break}else if("muted"==d){b.setSystemVolumeMuted(e);break}this.j[c][d]=e;break;case "call":c=b.targetName;d=b.methodName;e=b.args;c=this.j[c];c[d].apply(c,e);break;case "asyncCall":c=b.targetName,
d=b.methodName,e=b.args,b=b.id,a=a.senderId,c=this.j[c],c[d].apply(c,e).then(this.Hc.bind(this,a,b,null),this.Hc.bind(this,a,b));}};
l.Bd=function(a){var b=Tc(a.data);switch(b.type){case "PLAY":this.a.play();cd(this,0);break;case "PAUSE":this.a.pause();cd(this,0);break;case "SEEK":a=b.currentTime;var c=b.resumeState;null!=a&&(this.a.currentTime=Number(a));c&&"PLAYBACK_START"==c?(this.a.play(),cd(this,0)):c&&"PLAYBACK_PAUSE"==c&&(this.a.pause(),cd(this,0));break;case "STOP":this.b.vb().then(function(){cd(this,0);}.bind(this));break;case "GET_STATUS":cd(this,Number(b.requestId));break;case "VOLUME":c=b.volume;a=c.level;var c=c.muted,
d=this.a.volume,e=this.a.muted;null!=a&&(this.a.volume=Number(a));null!=c&&(this.a.muted=c);d==this.a.volume&&e==this.a.muted||cd(this,0);break;case "LOAD":c=b.media.contentId;a=b.currentTime;var f=this.m(c);this.a.autoplay=!0;this.b.load(f,a).then(function(){cd(this,0,{contentId:f,streamType:this.b.S()?"LIVE":"BUFFERED",contentType:""});}.bind(this))["catch"](function(a){var c="LOAD_FAILED";7==a.category&&7E3==a.code&&(c="LOAD_CANCELLED");ed(this,{requestId:Number(b.requestId),type:c},this.g);}.bind(this));
break;default:ed(this,{requestId:Number(b.requestId),type:"INVALID_REQUEST",reason:"INVALID_COMMAND"},this.g);}};l.Hc=function(a,b,c){ed(this,{type:"asyncComplete",id:b,error:c},this.c,a);};function ed(a,b,c,d){a.i&&(a=Pc(b),d?c.getCastChannel(d).send(a):c.broadcast(a));}
function cd(a,b,c){var d=fd,d={mediaSessionId:0,playbackRate:a.a.playbackRate,playerState:a.f?d.IDLE:a.b.Ra?d.Oc:a.a.paused?d.Qc:d.Rc,currentTime:a.a.currentTime,supportedMediaCommands:15,volume:{level:a.a.volume,muted:a.a.muted}};c&&(d.media=c);ed(a,{requestId:b,type:"MEDIA_STATUS",status:[d]},a.g);}var fd={IDLE:"IDLE",Rc:"PLAYING",Oc:"BUFFERING",Qc:"PAUSED"};function gd(a,b){var c=J(a,b);return 1!=c.length?null:c[0]}function J(a,b){return Array.prototype.filter.call(a.childNodes,function(a){return a.tagName==b})}function hd(a){var b=a.firstChild;return b&&b.nodeType==Node.TEXT_NODE?a.textContent.trim():null}function K(a,b,c,d){var e=null;a=a.getAttribute(b);null!=a&&(e=c(a));return null==e?void 0!=d?d:null:e}
function id(a){if(!a)return null;/^\d+\-\d+\-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a)&&(a+="Z");a=Date.parse(a);return isNaN(a)?null:Math.floor(a/1E3)}function jd(a){if(!a)return null;a=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);if(!a)return null;a=31536E3*Number(a[1]||null)+2592E3*Number(a[2]||null)+86400*Number(a[3]||null)+3600*Number(a[4]||null)+60*Number(a[5]||null)+Number(a[6]||null);return isFinite(a)?a:null}
function kd(a){var b=/([0-9]+)-([0-9]+)/.exec(a);if(!b)return null;a=Number(b[1]);if(!isFinite(a))return null;b=Number(b[2]);return isFinite(b)?{start:a,end:b}:null}function ld(a){a=Number(a);return a%1?null:a}function md(a){a=Number(a);return!(a%1)&&0<a?a:null}function nd(a){a=Number(a);return!(a%1)&&0<=a?a:null}function od(a){var b;a=(b=a.match(/^(\d+)\/(\d+)$/))?Number(b[1]/b[2]):Number(a);return isNaN(a)?null:a}var pd={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"};
function qd(a,b,c){a=rd(a);var d=null,e=[],f=[],g=a.map(function(a){return a.keyId}).filter(Ha);if(g.length&&1<g.filter(Ia).length)throw new p(2,4,4010);c||(f=a.filter(function(a){return"urn:mpeg:dash:mp4protection:2011"==a.Gc?(d=a.init||d,!1):!0}),f.length&&(e=sd(d,b,f),e.length||(e=[Va("",d)])));!a.length||!c&&f.length||(e=Ya(pd).map(function(a){return Va(a,d)}));var h=g[0]||null;h&&e.forEach(function(a){a.initData.forEach(function(a){a.keyId=h;});});return{dc:h,$e:d,drmInfos:e,fc:!0}}
function td(a,b,c,d){var e=qd(a,b,d);if(c.fc){a=1==c.drmInfos.length&&!c.drmInfos[0].keySystem;b=!e.drmInfos.length;if(!c.drmInfos.length||a&&!b)c.drmInfos=e.drmInfos;c.fc=!1;}else if(0<e.drmInfos.length&&(c.drmInfos=c.drmInfos.filter(function(a){return e.drmInfos.some(function(b){return b.keySystem==a.keySystem})}),!c.drmInfos.length))throw new p(2,4,4008);return e.dc||c.dc}
function sd(a,b,c){return c.map(function(c){var d=pd[c.Gc];if(d){var f=c.init||a,g="";if(c.node&&c.node.childNodes&&0<c.node.childNodes.length)for(var h=0;h<c.node.childNodes.length;h++){var k=c.node.childNodes[h];"ms:laurl"===k.nodeName&&k instanceof Element&&(g=k.getAttribute("licenseUrl"));}if(!g&&"com.microsoft.playready"===d&&f&&0<f.length&&"cenc"===f[0].initDataType)a:{if((g=f[0].initData)&&!(g.buffer.byteLength%2)&&(g=String.fromCharCode.apply(null,new Uint16Array(g.buffer)),c=g.indexOf("<WRMHEADER"))&&
(g=g.substr(c))){g=(new DOMParser).parseFromString(g,"application/xml");if(g.getElementsByTagName("LA_URL")[0]&&(c=g.getElementsByTagName("LA_URL")[0].childNodes[0].nodeValue)){g=c;break a}if(g.getElementsByTagName("LUI_URL")[0]&&(g=g.getElementsByTagName("LUI_URL")[0].childNodes[0].nodeValue))break a}g="";}d=Va(d,f);d.licenseServerUri=g?g:"";return[d]}return b(c.node)||[]}).reduce(x,[])}
function rd(a){return a.map(function(a){var b=a.getAttribute("schemeIdUri"),d=a.getAttribute("cenc:default_KID"),e=J(a,"cenc:pssh").map(hd);if(!b)return null;b=b.toLowerCase();if(d&&(d=d.replace(/-/g,"").toLowerCase(),0<=d.indexOf(" ")))throw new p(2,4,4009);var f=[];try{f=e.map(function(a){return{initDataType:"cenc",initData:kb(a),keyId:null}});}catch(g){throw new p(2,4,4007);}return{node:a,Gc:b,keyId:d,init:0<f.length?f:null}}).filter(Ha)}function ud(a,b,c,d,e){null!=e&&(e=Math.round(e));var f={RepresentationID:b,Number:c,Bandwidth:d,Time:e};return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g,function(a,b,c){if("$$"==a)return"$";var d=f[b];if(null==d)return a;"RepresentationID"==b&&c&&(c=void 0);a=d.toString();c=window.parseInt(c,10)||1;return Array(Math.max(0,c-a.length)+1).join("0")+a})}
function vd(a,b){var c=wd(a,b,"timescale"),d=1;c&&(d=md(c)||1);c=wd(a,b,"duration");(c=md(c||""))&&(c/=d);var e=wd(a,b,"startNumber"),f=Number(wd(a,b,"presentationTimeOffset"))||0,g=nd(e||"");if(null==e||null==g)g=1;var h=xd(a,b,"SegmentTimeline"),e=null;if(h){for(var e=d,k=a.T.duration||Infinity,h=J(h,"S"),m=[],q=0,v=0;v<h.length;++v){var r=h[v],t=K(r,"t",nd),y=K(r,"d",nd),r=K(r,"r",ld);null!=t&&(t-=f);if(!y)break;t=null!=t?t:q;r=r||0;if(0>r)if(v+1<h.length){r=K(h[v+1],"t",nd);if(null==r)break;else if(t>=
r)break;r=Math.ceil((r-t)/y)-1;}else{if(Infinity==k)break;else if(t/e>=k)break;r=Math.ceil((k*e-t)/y)-1;}0<m.length&&t!=q&&(m[m.length-1].end=t/e);for(var w=0;w<=r;++w)q=t+y,m.push({start:t/e,end:q/e,Oe:t}),t=q;}e=m;}return{timescale:d,R:c,Aa:g,Y:f/d||0,$b:f,K:e}}function wd(a,b,c){return[b(a.A),b(a.U),b(a.W)].filter(Ha).map(function(a){return a.getAttribute(c)}).reduce(function(a,b){return a||b})}
function xd(a,b,c){return[b(a.A),b(a.U),b(a.W)].filter(Ha).map(function(a){return gd(a,c)}).reduce(function(a,b){return a||b})}function yd(a,b){var c=new DOMParser;try{var d=E(a);var e=c.parseFromString(d,"text/xml");}catch(g){}if(e&&e.documentElement.tagName==b)var f=e.documentElement;return f&&0<f.getElementsByTagName("parsererror").length?null:f}
function zd(a,b,c,d,e,f){for(var g=a.getAttribute("xlink:href"),h=a.getAttribute("xlink:actuate")||"onRequest",k=0;k<a.attributes.length;k++){var m=a.attributes[k].nodeName;-1!=m.indexOf("xlink:")&&(a.removeAttribute(m),--k);}if(5<=f)return Promise.reject(new p(2,4,4028));if("onLoad"!=h)return Promise.reject(new p(2,4,4027));var q=D([d],[g]);return e.request(0,A(q,b)).then(function(d){d=yd(d.data,a.tagName);if(!d)return Promise.reject(new p(2,4,4001,g));for(;a.childNodes.length;)a.removeChild(a.childNodes[0]);
for(;d.childNodes.length;){var h=d.childNodes[0];d.removeChild(h);a.appendChild(h);}for(h=0;h<d.attributes.length;h++){var k=d.attributes[h].nodeName,m=d.getAttribute(k);a.setAttribute(k,m);}return Ad(a,b,c,q[0],e,f+1)}.bind(a))}
function Ad(a,b,c,d,e,f){f=f||0;if(a.getAttribute("xlink:href")){var g=zd(a,b,c,d,e,f);c&&(g=g["catch"](function(){return Ad(a,b,c,d,e,f)}));return g}for(g=0;g<a.childNodes.length;g++){var h=a.childNodes[g];h instanceof Element&&"urn:mpeg:dash:resolve-to-zero:2013"==h.getAttribute("xlink:href")&&(a.removeChild(h),--g);}for(var k=[],g=0;g<a.childNodes.length;g++)h=a.childNodes[g],h.nodeType==Node.ELEMENT_NODE&&(h=Ad(h,b,c,d,e,f),k.push(h));return Promise.all(k).then(function(){return a})}function Bd(a,b,c){this.a=a;this.P=b;this.G=c;}n("shaka.media.InitSegmentReference",Bd);function L(a,b,c,d,e,f){this.position=a;this.startTime=b;this.endTime=c;this.a=d;this.P=e;this.G=f;}n("shaka.media.SegmentReference",L);function M(a,b){this.I=a;this.a=b==Cd;this.s=0;}n("shaka.util.DataViewReader",M);var Cd=1;M.Endianness={Ue:0,Xe:Cd};M.prototype.da=function(){return this.s<this.I.byteLength};M.prototype.hasMoreData=M.prototype.da;M.prototype.kd=function(){return this.s};M.prototype.getPosition=M.prototype.kd;M.prototype.dd=function(){return this.I.byteLength};M.prototype.getLength=M.prototype.dd;M.prototype.X=function(){try{var a=this.I.getUint8(this.s);}catch(b){Dd();}this.s+=1;return a};M.prototype.readUint8=M.prototype.X;
M.prototype.Xa=function(){try{var a=this.I.getUint16(this.s,this.a);}catch(b){Dd();}this.s+=2;return a};M.prototype.readUint16=M.prototype.Xa;M.prototype.D=function(){try{var a=this.I.getUint32(this.s,this.a);}catch(b){Dd();}this.s+=4;return a};M.prototype.readUint32=M.prototype.D;M.prototype.Ac=function(){try{var a=this.I.getInt32(this.s,this.a);}catch(b){Dd();}this.s+=4;return a};M.prototype.readInt32=M.prototype.Ac;
M.prototype.Ma=function(){try{if(this.a){var a=this.I.getUint32(this.s,!0);var b=this.I.getUint32(this.s+4,!0);}else b=this.I.getUint32(this.s,!1),a=this.I.getUint32(this.s+4,!1);}catch(c){Dd();}if(2097151<b)throw new p(2,3,3001);this.s+=8;return b*Math.pow(2,32)+a};M.prototype.readUint64=M.prototype.Ma;M.prototype.La=function(a){this.s+a>this.I.byteLength&&Dd();var b=new Uint8Array(this.I.buffer,this.I.byteOffset+this.s,a);this.s+=a;return new Uint8Array(b)};M.prototype.readBytes=M.prototype.La;
M.prototype.J=function(a){this.s+a>this.I.byteLength&&Dd();this.s+=a;};M.prototype.skip=M.prototype.J;M.prototype.Fc=function(a){this.s<a&&Dd();this.s-=a;};M.prototype.rewind=M.prototype.Fc;M.prototype.seek=function(a){(0>a||a>this.I.byteLength)&&Dd();this.s=a;};M.prototype.seek=M.prototype.seek;M.prototype.Ob=function(){for(var a=this.s;this.da()&&this.I.getUint8(this.s);)this.s+=1;a=new Uint8Array(this.I.buffer,this.I.byteOffset+a,this.s-a);this.s+=1;return E(a)};M.prototype.readTerminatedString=M.prototype.Ob;
function Dd(){throw new p(2,3,3E3);}function N(){this.c=[];this.b=[];this.a=!1;}n("shaka.util.Mp4Parser",N);N.prototype.F=function(a,b){var c=Ed(a);this.c[c]=0;this.b[c]=b;return this};N.prototype.box=N.prototype.F;N.prototype.$=function(a,b){var c=Ed(a);this.c[c]=1;this.b[c]=b;return this};N.prototype.fullBox=N.prototype.$;N.prototype.stop=function(){this.a=!0;};N.prototype.stop=N.prototype.stop;
N.prototype.parse=function(a,b){var c=new Uint8Array(a),c=new M(new DataView(c.buffer,c.byteOffset,c.byteLength),0);for(this.a=!1;c.da()&&!this.a;)this.sb(0,c,b);};N.prototype.parse=N.prototype.parse;
N.prototype.sb=function(a,b,c){var d=b.s,e=b.D(),f=b.D();switch(e){case 0:e=b.I.byteLength-d;break;case 1:e=b.Ma();}var g=this.b[f];if(g){var h=null,k=null;1==this.c[f]&&(k=b.D(),h=k>>>24,k&=16777215);f=d+e;c&&f>b.I.byteLength&&(f=b.I.byteLength);f-=b.s;b=0<f?b.La(f):new Uint8Array(0);b=new M(new DataView(b.buffer,b.byteOffset,b.byteLength),0);g({ba:this,xc:c||!1,version:h,gc:k,u:b,size:e,start:d+a});}else b.J(d+e-b.s);};N.prototype.parseNext=N.prototype.sb;
function O(a){for(;a.u.da()&&!a.ba.a;)a.ba.sb(a.start,a.u,a.xc);}N.children=O;function Fd(a){for(var b=a.u.D();0<b&&!a.ba.a;--b)a.ba.sb(a.start,a.u,a.xc);}N.sampleDescription=Fd;function Gd(a){return function(b){a(b.u.La(b.u.I.byteLength-b.u.s));}}N.allData=Gd;function Ed(a){for(var b=0,c=0;c<a.length;c++)b=b<<8|a.charCodeAt(c);return b}function Hd(a,b,c,d){var e,f=(new N).$("sidx",function(a){e=Id(b,d,c,a);});a&&f.parse(a);if(e)return e;throw new p(2,3,3004);}
function Id(a,b,c,d){var e=[];d.u.J(4);var f=d.u.D();if(!f)throw new p(2,3,3005);if(d.version){var g=d.u.Ma();var h=d.u.Ma();}else g=d.u.D(),h=d.u.D();d.u.J(2);var k=d.u.Xa();a=a+d.size+h;for(h=0;h<k;h++){var m=d.u.D(),q=(m&2147483648)>>>31,m=m&2147483647,v=d.u.D();d.u.J(4);if(1==q)throw new p(2,3,3006);e.push(new L(e.length,g/f-b,(g+v)/f-b,function(){return c},a,a+m-1));g+=v;a+=m;}d.ba.stop();return e}function P(a){this.a=a;}n("shaka.media.SegmentIndex",P);P.prototype.o=function(){this.a=null;return Promise.resolve()};P.prototype.destroy=P.prototype.o;P.prototype.find=function(a){for(var b=this.a.length-1;0<=b;--b){var c=this.a[b];if(a>=c.startTime&&a<c.endTime)return c.position}return this.a.length&&a<this.a[0].startTime?this.a[0].position:null};P.prototype.find=P.prototype.find;P.prototype.get=function(a){if(!this.a.length)return null;a-=this.a[0].position;return 0>a||a>=this.a.length?null:this.a[a]};
P.prototype.get=P.prototype.get;P.prototype.offset=function(a){for(var b=0;b<this.a.length;++b)this.a[b].startTime+=a,this.a[b].endTime+=a;};P.prototype.offset=P.prototype.offset;
P.prototype.Gb=function(a){for(var b,c,d,e=[],f=b=0;b<this.a.length&&f<a.length;)c=this.a[b],d=a[f],c.startTime<d.startTime?(e.push(c),b++):(c.startTime>d.startTime?b||e.push(d):(.1<Math.abs(c.endTime-d.endTime)?(d=new L(c.position,d.startTime,d.endTime,d.a,d.P,d.G),e.push(d)):e.push(c),b++),f++);for(;b<this.a.length;)e.push(this.a[b++]);if(e.length)for(b=e[e.length-1].position+1;f<a.length;)d=a[f++],d=new L(b++,d.startTime,d.endTime,d.a,d.P,d.G),e.push(d);else e=a;this.a=e;};P.prototype.merge=P.prototype.Gb;
P.prototype.replace=function(a){this.a=a;};P.prototype.Ab=function(a){for(var b=0;b<this.a.length&&!(this.a[b].endTime>a);++b);this.a.splice(0,b);};P.prototype.evict=P.prototype.Ab;
function Jd(a,b){for(var c;a.a.length;)if(c=a.a[a.a.length-1],c.startTime>=b)a.a.pop();else break;for(;a.a.length;)if(c=a.a[0],0>=c.endTime)a.a.shift();else break;a.a.length&&(c=a.a[0],c.startTime<Wa&&(a.a[0]=new L(c.position,0,c.endTime,c.a,c.P,c.G)),c=a.a[a.a.length-1],a.a[a.a.length-1]=new L(c.position,c.startTime,b,c.a,c.P,c.G));}function Kd(a){this.b=a;this.a=new M(a,0);Ld||(Ld=[new Uint8Array([255]),new Uint8Array([127,255]),new Uint8Array([63,255,255]),new Uint8Array([31,255,255,255]),new Uint8Array([15,255,255,255,255]),new Uint8Array([7,255,255,255,255,255]),new Uint8Array([3,255,255,255,255,255,255]),new Uint8Array([1,255,255,255,255,255,255,255])]);}var Ld;Kd.prototype.da=function(){return this.a.da()};
function Md(a){var b=Nd(a);if(7<b.length)throw new p(2,3,3002);for(var c=0,d=0;d<b.length;d++)c=256*c+b[d];b=c;c=Nd(a);a:{for(d=0;d<Ld.length;d++)if(nb(c,Ld[d])){d=!0;break a}d=!1;}if(d)c=a.b.byteLength-a.a.s;else{if(8==c.length&&c[1]&224)throw new p(2,3,3001);for(var d=c[0]&(1<<8-c.length)-1,e=1;e<c.length;e++)d=256*d+c[e];c=d;}c=a.a.s+c<=a.b.byteLength?c:a.b.byteLength-a.a.s;d=new DataView(a.b.buffer,a.b.byteOffset+a.a.s,c);a.a.J(c);return new Od(b,d)}
function Nd(a){var b=a.a.X(),c;for(c=1;8>=c&&!(b&1<<8-c);c++);if(8<c)throw new p(2,3,3002);var d=new Uint8Array(c);d[0]=b;for(b=1;b<c;b++)d[b]=a.a.X();return d}function Od(a,b){this.id=a;this.a=b;}function Pd(a){if(8<a.a.byteLength)throw new p(2,3,3002);if(8==a.a.byteLength&&a.a.getUint8(0)&224)throw new p(2,3,3001);for(var b=0,c=0;c<a.a.byteLength;c++)var d=a.a.getUint8(c),b=256*b+d;return b}function Qd(){}
Qd.prototype.parse=function(a,b,c,d){var e;b=new Kd(new DataView(b));if(440786851!=Md(b).id)throw new p(2,3,3008);var f=Md(b);if(408125543!=f.id)throw new p(2,3,3009);b=f.a.byteOffset;f=new Kd(f.a);for(e=null;f.da();){var g=Md(f);if(357149030==g.id){e=g;break}}if(!e)throw new p(2,3,3010);f=new Kd(e.a);e=1E6;for(g=null;f.da();){var h=Md(f);if(2807729==h.id)e=Pd(h);else if(17545==h.id)if(g=h,4==g.a.byteLength)g=g.a.getFloat32(0);else if(8==g.a.byteLength)g=g.a.getFloat64(0);else throw new p(2,3,3003);
}if(null==g)throw new p(2,3,3011);f=e/1E9;e=g*f;a=Md(new Kd(new DataView(a)));if(475249515!=a.id)throw new p(2,3,3007);return Rd(a,b,f,e,c,d)};function Rd(a,b,c,d,e,f){function g(){return e}var h=[];a=new Kd(a.a);for(var k=null,m=null;a.da();){var q=Md(a);if(187==q.id){var v=Sd(q);v&&(q=c*v.Pe,v=b+v.ie,null!=k&&h.push(new L(h.length,k-f,q-f,g,m,v-1)),k=q,m=v);}}null!=k&&h.push(new L(h.length,k-f,d-f,g,m,null));return h}
function Sd(a){var b=new Kd(a.a);a=Md(b);if(179!=a.id)throw new p(2,3,3013);a=Pd(a);b=Md(b);if(183!=b.id)throw new p(2,3,3012);for(var b=new Kd(b.a),c=0;b.da();){var d=Md(b);if(241==d.id){c=Pd(d);break}}return{Pe:a,ie:c}}function Td(a,b){var c=xd(a,b,"Initialization");if(!c)return null;var d=a.A.Z,e=c.getAttribute("sourceURL");e&&(d=D(a.A.Z,[e]));var e=0,f=null;if(c=K(c,"range",kd))e=c.start,f=c.end;return new Bd(function(){return d},e,f)}
function Ud(a,b){var c=Number(wd(a,Vd,"presentationTimeOffset"))||0,d=wd(a,Vd,"timescale"),e=1;d&&(e=md(d)||1);var c=c/e||0,d=Td(a,Vd),f=a.A.contentType,e=a.A.mimeType.split("/")[1];if("text"!=f&&"mp4"!=e&&"webm"!=e)throw new p(2,4,4006);if("webm"==e&&!d)throw new p(2,4,4005);var f=xd(a,Vd,"RepresentationIndex"),g=wd(a,Vd,"indexRange"),h=a.A.Z,g=kd(g||"");if(f){var k=f.getAttribute("sourceURL");k&&(h=D(a.A.Z,[k]));g=K(f,"range",kd,g);}if(!g)throw new p(2,4,4002);e=Wd(a,b,d,h,g.start,g.end,e,c);return{createSegmentIndex:e.createSegmentIndex,
findSegmentPosition:e.findSegmentPosition,getSegmentReference:e.getSegmentReference,initSegmentReference:d,Y:c}}
function Wd(a,b,c,d,e,f,g,h){var k=a.presentationTimeline,m=!a.Ea||!a.T.Db,q=a.T.duration,v=b,r=null;return{createSegmentIndex:function(){var a=[v(d,e,f),"webm"==g?v(c.a(),c.P,c.G):null];v=null;return Promise.all(a).then(function(a){var b=a[0];a=a[1]||null;b="mp4"==g?Hd(b,e,d,h):(new Qd).parse(b,a,d,h);k.Ia(0,b);r=new P(b);m&&Jd(r,q);})},findSegmentPosition:function(a){return r.find(a)},getSegmentReference:function(a){return r.get(a)}}}function Vd(a){return a.Ya}function Xd(a,b){var c=Td(a,Yd);var d=Zd(a);var e=vd(a,Yd),f=e.Aa;f||(f=1);var g=0;e.R?g=e.R*(f-1):e.K&&0<e.K.length&&(g=e.K[0].start);d={R:e.R,startTime:g,Aa:f,Y:e.Y,K:e.K,Ha:d};if(!d.R&&!d.K&&1<d.Ha.length)throw new p(2,4,4002);if(!d.R&&!a.T.duration&&!d.K&&1==d.Ha.length)throw new p(2,4,4002);if(d.K&&!d.K.length)throw new p(2,4,4002);f=e=null;a.W.id&&a.A.id&&(f=a.W.id+","+a.A.id,e=b[f]);g=$d(a.T.duration,d.Aa,a.A.Z,d);e?(e.Gb(g),e.Ab(a.presentationTimeline.ca()-a.T.start)):(a.presentationTimeline.Ia(0,
g),e=new P(g),f&&a.Ea&&(b[f]=e));a.Ea&&a.T.Db||Jd(e,a.T.duration);return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:e.find.bind(e),getSegmentReference:e.get.bind(e),initSegmentReference:c,Y:d.Y}}function Yd(a){return a.sa}
function $d(a,b,c,d){var e=d.Ha.length;d.K&&d.K.length!=d.Ha.length&&(e=Math.min(d.K.length,d.Ha.length));for(var f=[],g=d.startTime,h=0;h<e;h++){var k=d.Ha[h],m=D(c,[k.wd]);var q=null!=d.R?g+d.R:d.K?d.K[h].end:g+a;f.push(new L(h+b,g,q,function(a){return a}.bind(null,m),k.start,k.end));g=q;}return f}
function Zd(a){return[a.A.sa,a.U.sa,a.W.sa].filter(Ha).map(function(a){return J(a,"SegmentURL")}).reduce(function(a,c){return 0<a.length?a:c}).map(function(b){b.getAttribute("indexRange")&&!a.kc&&(a.kc=!0);var c=b.getAttribute("media");b=K(b,"mediaRange",kd,{start:0,end:null});return{wd:c,start:b.start,end:b.end}})}function ae(a,b,c,d){var e=be(a);var f=vd(a,ce);var g=wd(a,ce,"media"),h=wd(a,ce,"index");f={R:f.R,timescale:f.timescale,Aa:f.Aa,Y:f.Y,$b:f.$b,K:f.K,Fb:g,Ua:h};g=0+(f.Ua?1:0);g+=f.K?1:0;g+=f.R?1:0;if(!g)throw new p(2,4,4002);1!=g&&(f.Ua&&(f.K=null),f.R=null);if(!f.Ua&&!f.Fb)throw new p(2,4,4002);if(f.Ua){c=a.A.mimeType.split("/")[1];if("mp4"!=c&&"webm"!=c)throw new p(2,4,4006);if("webm"==c&&!e)throw new p(2,4,4005);d=ud(f.Ua,a.A.id,null,a.bandwidth||null,null);d=D(a.A.Z,[d]);a=Wd(a,b,e,d,0,null,c,
f.Y);}else f.R?(d||a.presentationTimeline.Hb(f.R),a=de(a,f)):(d=b=null,a.W.id&&a.A.id&&(d=a.W.id+","+a.A.id,b=c[d]),g=ee(a,f),b?(b.Gb(g),b.Ab(a.presentationTimeline.ca()-a.T.start)):(a.presentationTimeline.Ia(0,g),b=new P(g),d&&a.Ea&&(c[d]=b)),a.Ea&&a.T.Db||Jd(b,a.T.duration),a={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:b.find.bind(b),getSegmentReference:b.get.bind(b)});return{createSegmentIndex:a.createSegmentIndex,findSegmentPosition:a.findSegmentPosition,getSegmentReference:a.getSegmentReference,
initSegmentReference:e,Y:f.Y}}function ce(a){return a.Za}function de(a,b){var c=a.T.duration,d=b.R,e=b.Aa,f=b.timescale,g=b.Fb,h=a.bandwidth||null,k=a.A.id,m=a.A.Z;return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(a){return 0>a||c&&a>=c?null:Math.floor(a/d)},getSegmentReference:function(a){var b=a*d;return 0>b||c&&b>=c?null:new L(a,b,b+d,function(){var c=ud(g,k,a+e,h,b*f);return D(m,[c])},0,null)}}}
function ee(a,b){for(var c=[],d=0;d<b.K.length;d++){var e=d+b.Aa;c.push(new L(e,b.K[d].start,b.K[d].end,function(a,b,c,d,e,q){a=ud(a,b,e,c,q);return D(d,[a]).map(function(a){return a.toString()})}.bind(null,b.Fb,a.A.id,a.bandwidth||null,a.A.Z,e,b.K[d].Oe+b.$b),0,null));}return c}function be(a){var b=wd(a,ce,"initialization");if(!b)return null;var c=a.A.id,d=a.bandwidth||null,e=a.A.Z;return new Bd(function(){var a=ud(b,c,null,d,null);return D(e,[a])},0,null)}var fe={},ge={};n("shaka.media.ManifestParser.registerParserByExtension",function(a,b){ge[a]=b;});n("shaka.media.ManifestParser.registerParserByMime",function(a,b){fe[a]=b;});function he(){var a={},b;for(b in fe)a[b]=!0;for(b in ge)a[b]=!0;["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"].forEach(function(b){a[b]=!!fe[b];});["mpd","m3u8","ism"].forEach(function(b){a[b]=!!ge[b];});return a}
function ie(a,b,c,d){var e=d;e||(d=(new ka(a)).V.split("/").pop().split("."),1<d.length&&(d=d.pop().toLowerCase(),e=ge[d]));if(e)return Promise.resolve(e);c=A([a],c);c.method="HEAD";return b.request(0,c).then(function(b){(b=b.headers["content-type"])&&(b=b.toLowerCase());return(e=fe[b])?e:Promise.reject(new p(2,4,4E3,a))},function(a){a.severity=2;return Promise.reject(a)})}function Q(a,b){this.c=a;this.j=b;this.f=this.a=Infinity;this.b=1;this.i=0;this.h=!0;this.g=0;}n("shaka.media.PresentationTimeline",Q);Q.prototype.ka=function(){return this.a};Q.prototype.getDuration=Q.prototype.ka;Q.prototype.ga=function(a){this.a=a;};Q.prototype.setDuration=Q.prototype.ga;Q.prototype.ld=function(){return this.c};Q.prototype.getPresentationStartTime=Q.prototype.ld;Q.prototype.Jc=function(a){this.i=a;};Q.prototype.setClockOffset=Q.prototype.Jc;Q.prototype.ub=function(a){this.h=a;};
Q.prototype.setStatic=Q.prototype.ub;Q.prototype.nd=function(){return this.f};Q.prototype.getSegmentAvailabilityDuration=Q.prototype.nd;Q.prototype.Vb=function(a){this.f=a;};Q.prototype.setSegmentAvailabilityDuration=Q.prototype.Vb;Q.prototype.Kc=function(a){this.j=a;};Q.prototype.setDelay=Q.prototype.Kc;Q.prototype.Ia=function(a,b){b.length&&(this.b=b.reduce(function(a,b){return Math.max(a,b.endTime-b.startTime)},this.b));};Q.prototype.notifySegments=Q.prototype.Ia;
Q.prototype.Hb=function(a){this.b=Math.max(this.b,a);};Q.prototype.notifyMaxSegmentDuration=Q.prototype.Hb;Q.prototype.S=function(){return Infinity==this.a&&!this.h};Q.prototype.isLive=Q.prototype.S;Q.prototype.xa=function(){return Infinity!=this.a&&!this.h};Q.prototype.isInProgress=Q.prototype.xa;Q.prototype.ca=function(){return this.Fa(0)};Q.prototype.getSegmentAvailabilityStart=Q.prototype.ca;
Q.prototype.Fa=function(a){if(Infinity==this.f)return this.g;var b=this.qa();return Math.max(this.g,Math.min(b-this.f+a,b))};Q.prototype.getSafeAvailabilityStart=Q.prototype.Fa;Q.prototype.Ic=function(a){this.g=a;};Q.prototype.setAvailabilityStart=Q.prototype.Ic;Q.prototype.qa=function(){return this.S()||this.xa()?Math.min(Math.max(0,(Date.now()+this.i)/1E3-this.b-this.c),this.a):this.a};Q.prototype.getSegmentAvailabilityEnd=Q.prototype.qa;
Q.prototype.qb=function(){return Math.max(0,this.qa()-(this.S()||this.xa()?this.j:0))};Q.prototype.getSeekRangeEnd=Q.prototype.qb;function je(){this.a=this.b=null;this.g=[];this.c=null;this.i=[];this.h=1;this.j={};this.l=0;this.f=null;}n("shaka.dash.DashParser",je);l=je.prototype;l.configure=function(a){this.b=a;};l.start=function(a,b){this.g=[a];this.a=b;return ke(this).then(function(){this.a&&le(this,0);return this.c}.bind(this))};l.stop=function(){this.b=this.a=null;this.g=[];this.c=null;this.i=[];this.j={};null!=this.f&&(window.clearTimeout(this.f),this.f=null);return Promise.resolve()};l.update=function(){ke(this)["catch"](function(a){if(this.a)this.a.onError(a);}.bind(this));};
l.onExpirationUpdated=function(){};function ke(a){return a.a.networkingEngine.request(0,A(a.g,a.b.retryParameters),function(){return!this.a}.bind(a)).then(function(a){if(this.a)return me(this,a.data,a.uri)}.bind(a))}function me(a,b,c){b=yd(b,"MPD");if(!b)throw new p(2,4,4001,c);return Ad(b,a.b.retryParameters,a.b.dash.xlinkFailGracefully,c,a.a.networkingEngine).then(function(a){return ne(this,a,c)}.bind(a))}
function ne(a,b,c){function d(a){var b="time_shift".replace(/[\[\]]/g,"\\$&");return(a=(new RegExp("[?&]"+b+"(=([^&#]*)|&|#|$)")).exec(a))?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}var e=[c],f=J(b,"Location").map(hd).filter(Ha);0<f.length&&(e=a.g=f);var f=b.getAttribute("type")||"static",g=J(b,"BaseURL").map(hd),e=D(e,g),h=K(b,"minBufferTime",jd);a.l=K(b,"minimumUpdatePeriod",jd,-1);var k=K(b,"publishTime",id),g=K(b,"availabilityStartTime",id);"dynamic"===f&&-1!==c.indexOf("&time_shift=")&&
(c=d(c))&&(g+=parseInt(c,10));null===g&&"dynamic"===f&&(g=k);c=K(b,"timeShiftBufferDepth",jd);var m=K(b,"suggestedPresentationDelay",jd),m=a.b.dash.liveDelay?m+a.b.dash.liveDelay:m,k=K(b,"maxSegmentDuration",jd);if(a.c)var q=a.c.presentationTimeline;else{var v=Math.max(10,1.5*h);q=new Q(g,null!=m?m:v);}var g=oe(a,{Ea:"static"!=f,presentationTimeline:q,W:null,T:null,U:null,A:null,bandwidth:0,kc:!1},e,b),m=g.duration,r=g.periods;q.ub("static"==f);q.ga(m||Infinity);q.Vb(null!=c?c:Infinity);q.Hb(k||1);
if(a.c)return Promise.resolve();b=J(b,"UTCTiming");return pe(a,e,b,q.S()).then(function(a){this.a&&(q.Jc(a),this.c={presentationTimeline:q,periods:r,offlineSessionIds:[],minBufferTime:h||0});}.bind(a))}
function oe(a,b,c,d){var e=K(d,"mediaPresentationDuration",jd),f=[],g=0;d=J(d,"Period");for(var h=0;h<d.length;h++){var k=d[h],g=K(k,"start",jd,g),m=K(k,"duration",jd),q=null;if(h!=d.length-1){var v=K(d[h+1],"start",jd);null!=v&&(q=v-g);}else null!=e&&(q=e-g);null==q&&(q=m);k=qe(a,b,c,{start:g,duration:q,node:k,Db:null==q||h==d.length-1});f.push(k);m=b.W.id;-1==a.i.indexOf(m)&&(a.i.push(m),a.c&&(a.a.filterNewPeriod(k),a.c.periods.push(k)));if(null==q){g=null;break}g+=q;}a.c||a.a.filterAllPeriods(f);
return null!=e?{periods:f,duration:e}:{periods:f,duration:g}}
function qe(a,b,c,d){b.W=re(a,d.node,null,c);b.T=d;b.W.id||(b.W.id="__shaka_period_"+d.start);J(d.node,"EventStream").forEach(a.Zd.bind(a,d.start,d.duration));c=J(d.node,"AdaptationSet").map(a.Xd.bind(a,b)).filter(Ha);var e=c.map(function(a){return a.ke}).reduce(x,[]),f=e.filter(Ia);if(b.Ea&&e.length!=f.length)throw new p(2,4,4018);var g=c.filter(function(a){return!a.Zb});c.filter(function(a){return a.Zb}).forEach(function(a){var b=a.streams[0],c=a.Zb;g.forEach(function(a){a.id==c&&a.streams.forEach(function(a){a.trickModeVideo=
b;});});});e=se(g,"video");f=se(g,"audio");if(!e.length&&!f.length)throw new p(2,4,4004);f.length||(f=[null]);e.length||(e=[null]);b=[];for(c=0;c<f.length;c++)for(var h=0;h<e.length;h++)te(a,f[c],e[h],b);a=se(g,"text");e=[];for(c=0;c<a.length;c++)e.push.apply(e,a[c].streams);return{startTime:d.start,textStreams:e,variants:b}}function se(a,b){return a.filter(function(a){return a.contentType==b})}
function te(a,b,c,d){if(b||c)if(b&&c){var e=b.drmInfos;var f=c.drmInfos;if(e.length&&f.length?0<Gb(e,f).length:1)for(var g=Gb(b.drmInfos,c.drmInfos),e=0;e<b.streams.length;e++)for(var h=0;h<c.streams.length;h++)f=(c.streams[h].bandwidth||0)+(b.streams[e].bandwidth||0),f={id:a.h++,language:b.language,primary:b.Eb||c.Eb,audio:b.streams[e],video:c.streams[h],bandwidth:f,drmInfos:g,allowedByApplication:!0,allowedByKeySystem:!0},d.push(f);}else for(g=b||c,e=0;e<g.streams.length;e++)f=g.streams[e].bandwidth||
0,f={id:a.h++,language:g.language||"und",primary:g.Eb,audio:b?g.streams[e]:null,video:c?g.streams[e]:null,bandwidth:f,drmInfos:g.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0},d.push(f);}
l.Xd=function(a,b){a.U=re(this,b,a.W,null);var c=!1,d=J(b,"Role"),e=d.map(function(a){return a.getAttribute("value")}).filter(Ha),f=void 0;"text"==a.U.contentType&&(f="subtitle");for(var g=0;g<d.length;g++){var h=d[g].getAttribute("schemeIdUri");if(null==h||"urn:mpeg:dash:role:2011"==h)switch(h=d[g].getAttribute("value"),h){case "main":c=!0;break;case "caption":case "subtitle":f=h;}}var k=null,m=!1;J(b,"EssentialProperty").forEach(function(a){"http://dashif.org/guidelines/trickmode"==a.getAttribute("schemeIdUri")?
k=a.getAttribute("value"):m=!0;});if(m)return null;var d=J(b,"ContentProtection"),q=qd(d,this.b.dash.customScheme,this.b.dash.ignoreDrmInfo),d=gc(b.getAttribute("lang")||"und"),h=b.getAttribute("label"),g=J(b,"Representation"),e=g.map(this.$d.bind(this,a,q,f,d,h,c,e)).filter(function(a){return!!a});if(!e.length)throw new p(2,4,4003);a.U.contentType&&"application"!=a.U.contentType||(a.U.contentType=ue(e[0].mimeType,e[0].codecs),e.forEach(function(b){b.type=a.U.contentType;}));e.forEach(function(a){q.drmInfos.forEach(function(b){a.keyId&&
b.keyIds.push(a.keyId);});});f=g.map(function(a){return a.getAttribute("id")}).filter(Ha);return{id:a.U.id||"__fake__"+this.h++,contentType:a.U.contentType,language:d,Eb:c,streams:e,drmInfos:q.drmInfos,Zb:k,ke:f}};
l.$d=function(a,b,c,d,e,f,g,h){a.A=re(this,h,a.U,null);if(!ve(a.A))return null;a.bandwidth=K(h,"bandwidth",md)||0;var k=this.le.bind(this);if(a.A.Ya)k=Ud(a,k);else if(a.A.sa)k=Xd(a,this.j);else if(a.A.Za)k=ae(a,k,this.j,!!this.c);else{var m=a.A.Z,q=a.T.duration||0;k={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(a){return 0<=a&&a<q?1:null},getSegmentReference:function(a){return 1!=a?null:new L(1,0,q,function(){return m},0,null)},initSegmentReference:null,Y:0};}h=J(h,
"ContentProtection");h=td(h,this.b.dash.customScheme,b,this.b.dash.ignoreDrmInfo);return{id:this.h++,createSegmentIndex:k.createSegmentIndex,findSegmentPosition:k.findSegmentPosition,getSegmentReference:k.getSegmentReference,initSegmentReference:k.initSegmentReference,presentationTimeOffset:k.Y,mimeType:a.A.mimeType,codecs:a.A.codecs,frameRate:a.A.frameRate,bandwidth:a.bandwidth,width:a.A.width,height:a.A.height,kind:c,encrypted:0<b.drmInfos.length,keyId:h,language:d,label:e,type:a.U.contentType,
primary:f,trickModeVideo:null,containsEmsgBoxes:a.A.containsEmsgBoxes,roles:g,channelsCount:a.A.Ib}};l.Fe=function(){this.f=null;var a=Date.now();ke(this).then(function(){this.a&&le(this,(Date.now()-a)/1E3);}.bind(this))["catch"](function(a){this.a&&(a.severity=1,this.a.onError(a),le(this,0));}.bind(this));};function le(a,b){0>a.l||(a.f=window.setTimeout(a.Fe.bind(a),1E3*Math.max(Math.max(3,a.l)-b,0)));}
function re(a,b,c,d){c=c||{contentType:"",mimeType:"",codecs:"",containsEmsgBoxes:!1,frameRate:void 0,Ib:null};d=d||c.Z;var e=J(b,"BaseURL").map(hd);if(0<e.length&&a.b.dash.baseUrl){var f=e[0].split("/");""===f[f.length-1]&&(e=[a.b.dash.baseUrl+f[f.length-4]+"/"+f[f.length-3]+"/"+f[f.length-2]+"/"]);}a=b.getAttribute("contentType")||c.contentType;var f=b.getAttribute("mimeType")||c.mimeType,g=b.getAttribute("codecs")||c.codecs,h=K(b,"frameRate",od)||c.frameRate,k=!!J(b,"InbandEventStream").length,
m=J(b,"AudioChannelConfiguration"),m=we(m)||c.Ib;a||(a=ue(f,g));return{Z:D(d,e),Ya:gd(b,"SegmentBase")||c.Ya,sa:gd(b,"SegmentList")||c.sa,Za:gd(b,"SegmentTemplate")||c.Za,width:K(b,"width",nd)||c.width,height:K(b,"height",nd)||c.height,contentType:a,mimeType:f,codecs:g,frameRate:h,containsEmsgBoxes:k||c.containsEmsgBoxes,id:b.getAttribute("id"),Ib:m}}
function we(a){for(var b=0;b<a.length;++b){var c=a[b],d=c.getAttribute("schemeIdUri");if(d&&(c=c.getAttribute("value")))switch(d){case "urn:mpeg:dash:outputChannelPositionList:2012":return c.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":d=parseInt(c,10);if(!d)continue;return d;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":if(d=parseInt(c,
16)){for(a=0;d;)d&1&&++a,d>>=1;return a}}}return null}function ve(a){var b=0+(a.Ya?1:0);b+=a.sa?1:0;b+=a.Za?1:0;if(!b)return"text"==a.contentType||"application"==a.contentType?!0:!1;1!=b&&(a.Ya&&(a.sa=null),a.Za=null);return!0}function xe(a,b,c,d){b=D(b,[c]);b=A(b,a.b.retryParameters);b.method=d;return a.a.networkingEngine.request(0,b).then(function(a){if("HEAD"==d){if(!a.headers||!a.headers.date)return 0;a=a.headers.date;}else a=E(a.data);a=Date.parse(a);return isNaN(a)?0:a-Date.now()})}
function pe(a,b,c,d){c=c.map(function(a){return{scheme:a.getAttribute("schemeIdUri"),value:a.getAttribute("value")}});var e=a.b.dash.clockSyncUri;d&&!c.length&&e&&c.push({scheme:"urn:mpeg:dash:utc:http-head:2014",value:e});return Fa(c,function(a){var c=a.value;switch(a.scheme){case "urn:mpeg:dash:utc:http-head:2014":case "urn:mpeg:dash:utc:http-head:2012":return xe(this,b,c,"HEAD");case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return xe(this,
b,c,"GET");case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return a=Date.parse(c),isNaN(a)?0:a-Date.now();case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":return Promise.reject();default:return Promise.reject()}}.bind(a))["catch"](function(){return 0})}
l.Zd=function(a,b,c){var d=c.getAttribute("schemeIdUri")||"",e=c.getAttribute("value")||"",f=K(c,"timescale",nd)||1;J(c,"Event").forEach(function(c){var g=K(c,"presentationTime",nd)||0,k=K(c,"duration",nd)||0,g=g/f+a,k=g+k/f;null!=b&&(g=Math.min(g,a+b),k=Math.min(k,a+b));c={schemeIdUri:d,value:e,startTime:g,endTime:k,id:c.getAttribute("id")||"",eventElement:c};this.a.onTimelineRegionAdded(c);}.bind(this));};
l.le=function(a,b,c){a=A(a,this.b.retryParameters);null!=b&&(a.headers.Range="bytes="+b+"-"+(null!=c?c:""));return this.a.networkingEngine.request(1,a).then(function(a){return a.data})};function ue(a,b){return Pb[ab(a,b)]?"text":a.split("/")[0]}ge.mpd=je;fe["application/dash+xml"]=je;function ye(a,b,c,d){this.uri=a;this.type=b;this.a=c;this.segments=d||null;}function ze(a,b,c,d){this.id=a;this.name=b;this.a=c;this.value=d||null;}ze.prototype.toString=function(){function a(a){return a.name+'="'+a.value+'"'}return this.value?"#"+this.name+":"+this.value:0<this.a.length?"#"+this.name+":"+this.a.map(a).join(","):"#"+this.name};function Ae(a,b){this.name=a;this.value=b;}ze.prototype.getAttribute=function(a){var b=this.a.filter(function(b){return b.name==a});return b.length?b[0]:null};
function Be(a,b,c){c=c||null;return(a=a.getAttribute(b))?a.value:c}function Ce(a,b){this.a=b;this.uri=a;}function De(a,b){return a.filter(function(a){return a.name==b})}function Ee(a,b){var c=De(a,b);return c.length?c[0]:null}function Fe(a,b,c){return a.filter(function(a){var d=a.getAttribute("TYPE");a=a.getAttribute("GROUP-ID");return d.value==b&&a.value==c})}function Ge(a,b){return D([a],[b])[0]}function He(a){this.b=a;this.a=0;}function Ie(a,b){b.lastIndex=a.a;var c=(c=b.exec(a.b))?{position:c.index,length:c[0].length,ne:c}:null;if(a.a==a.b.length||!c||c.position!=a.a)return null;a.a+=c.length;return c.ne}function Je(a){return a.a==a.b.length?null:(a=Ie(a,/[^ \t\n]*/gm))?a[0]:null}function Ke(){this.a=0;}
function Le(a,b,c){b=E(b);b=b.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n").trim();var d=b.split(/\n+/m);if(!/^#EXTM3U($|[ \t\n])/m.test(d[0]))throw new p(2,4,4015);b=0;for(var e=[],f=1;f<d.length;)if(/^#(?!EXT)/m.test(d[f]))f+=1;else{var g=d[f];g=Me(a.a++,g);if(0<=Ne.indexOf(g.name))b=1;else if(0<=Oe.indexOf(g.name)){if(1!=b)throw new p(2,4,4017);d=d.splice(f,d.length-f);a=Pe(a,d,e);return new ye(c,b,e,a)}e.push(g);f+=1;"EXT-X-STREAM-INF"==g.name&&(g.a.push(new Ae("URI",d[f])),f+=1);}return new ye(c,b,e)}
function Pe(a,b,c){var d=[],e=[];b.forEach(function(a){/^(#EXT)/.test(a)?(a=Me(this.a++,a),0<=Ne.indexOf(a.name)?c.push(a):e.push(a)):/^#(?!EXT)/m.test(a)||(d.push(new Ce(a.trim(),e)),e=[]);}.bind(a));return d}
function Me(a,b){var c=b.match(/^#(EXT[^:]*)(?::(.*))?$/);if(!c)throw new p(2,4,4016);var d=c[1],e=c[2],c=[];if(e&&0<=e.indexOf("="))for(var e=new He(e),f,g=/([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;f=Ie(e,g);)c.push(new Ae(f[1],f[2]||f[3]));else if(e)return new ze(a,d,c,e);return new ze(a,d,c)}var Ne="EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(" "),Oe="EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");function Qe(a){return new Promise(function(b){var c=Qe.parse(a);b({uri:a,data:c.data,headers:{"content-type":c.contentType}});})}n("shaka.net.DataUriPlugin",Qe);
Qe.parse=function(a){var b=a.split(":");if(2>b.length||"data"!=b[0])throw new p(2,1,1004,a);b=b.slice(1).join(":").split(",");if(2>b.length)throw new p(2,1,1004,a);var c=b[0],b=window.decodeURIComponent(b.slice(1).join(",")),c=c.split(";"),d=null;1<c.length&&(d=c[1]);if("base64"==d)a=kb(b).buffer;else{if(d)throw new p(2,1,1005,a);a=fb(b);}return{data:a,contentType:c[0]}};Ka("data",Qe);function Re(){this.g=this.f=null;this.H=1;this.w={};this.C={};this.M={};this.a={};this.b=null;this.l="";this.v=new Ke;this.i=this.h=null;this.c=Se;this.m=null;this.j=0;this.B=Infinity;}n("shaka.hls.HlsParser",Re);l=Re.prototype;l.configure=function(a){this.g=a;};l.start=function(a,b){this.f=b;this.l=a;return Te(this,a).then(function(b){return Ue(this,b.data,a).then(function(){We(this,this.h);return this.m}.bind(this))}.bind(this))};
l.stop=function(){this.g=this.f=null;this.w={};this.C={};this.m=null;return Promise.resolve()};l.update=function(){if(this.c!=Xe.pa){var a=[],b;for(b in this.a)a.push(Ye(this,this.a[b],b));return Promise.all(a)}};
function Ye(a,b,c){Te(a,c).then(function(a){var d=Xe,f=Le(this.v,a.data,c);if(1!=f.type)throw new p(2,4,4017);a=Ee(f.a,"EXT-X-MEDIA-SEQUENCE");if(this.c==d.eb&&!a)throw new p(2,4,4031);var g=b.stream;Ze(this,f,a?Number(a.value):0,g.mimeType,g.codecs).then(function(a){b.tb.replace(a);a=a[a.length-1];Ee(f.a,"EXT-X-ENDLIST")&&($e(this,d.pa),this.b.ga(a.endTime));}.bind(this));}.bind(a));}l.onExpirationUpdated=function(){};
function Ue(a,b,c){b=Le(a.v,b,c);if(0!=b.type)throw new p(2,4,4022);return af(a,b).then(function(a){this.f.filterAllPeriods([a]);if(this.c!=Xe.pa){var b=3*this.j;this.b.Kc(b);this.h=this.B;this.c==Xe.eb&&this.b.Vb(b);}else{var c=Infinity,d=Infinity,h;for(h in this.a)b=this.a[h],c=Math.min(c,b.xd),d=Math.min(d,b.duration);this.b.ga(d);for(h in this.a)b=this.a[h],b.stream.presentationTimeOffset=c,b.tb.offset(-c),Jd(b.tb,d);}this.m={presentationTimeline:this.b,periods:[a],offlineSessionIds:[],minBufferTime:0};}.bind(a))}
function af(a,b){var c=b.a,d=De(b.a,"EXT-X-MEDIA").filter(function(a){return"SUBTITLES"==bf(a,"TYPE")}.bind(a)).map(function(a){return cf(this,a)}.bind(a));return Promise.all(d).then(function(a){var d=De(c,"EXT-X-STREAM-INF").map(function(a){return df(this,a,b)}.bind(this));return Promise.all(d).then(function(b){return{startTime:0,variants:b.reduce(x,[]),textStreams:a}}.bind(this))}.bind(a))}
function df(a,b,c){var d=Be(b,"CODECS","avc1.42E01E,mp4a.40.2").split(","),e=b.getAttribute("RESOLUTION"),f=null,g=null,h=Be(b,"FRAME-RATE"),k=Number(bf(b,"BANDWIDTH"));if(e)var m=e.value.split("x"),f=m[0],g=m[1];c=De(c.a,"EXT-X-MEDIA");var q=Be(b,"AUDIO"),v=Be(b,"VIDEO");q?c=Fe(c,"AUDIO",q):v&&(c=Fe(c,"VIDEO",v));if(m=ef("text",d)){var r=Be(b,"SUBTITLES");r&&(r=Fe(c,"SUBTITLES",r),r.length&&(a.w[r[0].id].stream.codecs=m));d.splice(d.indexOf(m),1);}c=c.map(function(a){return ff(this,a,d)}.bind(a));
var t=[],y=[];return Promise.all(c).then(function(a){q?t=a:v&&(y=a);if(t.length||y.length)if(t.length)if(bf(b,"URI")==t[0].Rb){a="audio";var c=!0;}else a="video";else a="audio";else c=!1,1==d.length?(a=ef("video",d),a=e||h||a?"video":"audio"):(a="video",d=[d.join(",")]);return c?Promise.resolve():gf(this,b,d,a)}.bind(a)).then(function(a){a&&("audio"==a.stream.type?t=[a]:y=[a]);return jf(this,t,y,k,f,g,h)}.bind(a))}
function jf(a,b,c,d,e,f,g){c.forEach(function(a){if(a=a.stream)a.width=Number(e)||void 0,a.height=Number(f)||void 0,a.frameRate=Number(g)||void 0;}.bind(a));b.length||(b=[null]);c.length||(c=[null]);for(var h=[],k=0;k<b.length;k++)for(var m=0;m<c.length;m++){var q=b[k]?b[k].stream:null,v=c[m]?c[m].stream:null,r=b[k]?b[k].drmInfos:null,t=c[m]?c[m].drmInfos:null;if(q&&v)if(r.length&&t.length?0<Gb(r,t).length:1)var y=Gb(r,t);else continue;else q?y=r:v&&(y=t);r=(c[k]?c[k].Rb:"")+" - "+(b[k]?b[k].Rb:"");
a.C[r]||(q=kf(a,q,v,d,y),h.push(q),a.C[r]=q);}return h}function kf(a,b,c,d,e){return{id:a.H++,language:b?b.language:"und",primary:!!b&&b.primary||!!c&&c.primary,audio:b,video:c,bandwidth:d,drmInfos:e,allowedByApplication:!0,allowedByKeySystem:!0}}function cf(a,b){bf(b,"TYPE");return ff(a,b,[]).then(function(a){return a.stream})}
function ff(a,b,c){var d=bf(b,"URI"),d=Ge(a.l,d);if(a.a[d])return Promise.resolve(a.a[d]);var e=bf(b,"TYPE").toLowerCase();"subtitles"==e&&(e="text");var f=gc(Be(b,"LANGUAGE","und")),g=Be(b,"NAME"),h=b.getAttribute("DEFAULT"),k=b.getAttribute("AUTOSELECT"),m=Be(b,"CHANNELS");return lf(a,d,c,e,f,!!h||!!k,g,"audio"==e?mf(m):null).then(function(a){if(this.a[d])return this.a[d];this.w[b.id]=a;return this.a[d]=a}.bind(a))}function mf(a){if(!a)return null;a=a.split("/")[0];return parseInt(a,10)}
function gf(a,b,c,d){var e=bf(b,"URI"),e=Ge(a.l,e);return a.a[e]?Promise.resolve(a.a[e]):lf(a,e,c,d,"und",!1,null,null).then(function(a){return this.a[e]?this.a[e]:this.a[e]=a}.bind(a))}
function lf(a,b,c,d,e,f,g,h){var k=Xe,m=b;b=Ge(a.l,b);var q,v="",r;return Te(a,b).then(function(a){q=Le(this.v,a.data,b);if(1!=q.type)throw new p(2,4,4017);a=q;var e=Xe,f=Ee(a.a,"EXT-X-PLAYLIST-TYPE"),g=Ee(a.a,"EXT-X-ENDLIST"),g=f&&"VOD"==f.value||g,f=f&&"EVENT"==f.value&&!g,f=!g&&!f;g?$e(this,e.pa):(f?$e(this,e.eb):$e(this,e.Pc),a=nf(a.a,"EXT-X-TARGETDURATION"),a=Number(a.value),this.j=Math.max(a,this.j),this.B=Math.min(a,this.B));if(1==c.length)v=c[0];else if(a=ef(d,c),null!=a)v=a;else throw new p(2,
4,4025,c);return of(this,d,v,q)}.bind(a)).then(function(a){r=a;a=Ee(q.a,"EXT-X-MEDIA-SEQUENCE");if(this.c==k.eb&&!a)throw new p(2,4,4031);return Ze(this,q,a?Number(a.value):0,r,v)}.bind(a)).then(function(a){var b=a[0].startTime,c=a[a.length-1].endTime,k=c-b,t=new P(a);this.b||pf(this,c);c=null;"text"!=d&&(c=qf(q));this.b.Ia(0,a);a=void 0;"text"==d&&(a="subtitle");var Qc=[];q.segments.forEach(function(a){a=De(a.a,"EXT-X-KEY");Qc.push.apply(Qc,a);});var Rc=!1,Sc=[],hf=null;Qc.forEach(function(a){if("NONE"!=
bf(a,"METHOD")){Rc=!0;var b=bf(a,"KEYFORMAT");if(a=(b=rf[b])?b(a):null)a.keyIds.length&&(hf=a.keyIds[0]),Sc.push(a);}});if(Rc&&!Sc.length)throw new p(2,4,4026);a={id:this.H++,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:t.find.bind(t),getSegmentReference:t.get.bind(t),initSegmentReference:c,presentationTimeOffset:0,mimeType:r,codecs:v,kind:a,encrypted:Rc,keyId:hf,language:e,label:g||null,type:d,primary:f,trickModeVideo:null,containsEmsgBoxes:!1,frameRate:void 0,width:void 0,
height:void 0,bandwidth:void 0,roles:[],channelsCount:h};this.M[a.id]=t;return{stream:a,tb:t,drmInfos:Sc,Rb:m,xd:b,duration:k}}.bind(a))}function pf(a,b){var c=null,d=0;a.c!=Xe.pa&&(c=Date.now()/1E3-b,d=3*a.j);a.b=new Q(c,d);a.b.ub(a.c==Xe.pa);}
function qf(a){var b=De(a.a,"EXT-X-MAP");if(!b.length)return null;if(1<b.length)throw new p(2,4,4020);var b=b[0],c=bf(b,"URI"),d=Ge(a.uri,c);a=0;c=null;if(b=Be(b,"BYTERANGE"))a=b.split("@"),b=Number(a[0]),a=Number(a[1]),c=a+b-1;return new Bd(function(){return[d]},a,c)}
function sf(a,b,c,d,e){var f=c.a,g=Ge(a.uri,c.uri);a=nf(f,"EXTINF").value.split(",");a=e+Number(a[0]);c=0;var h=null;if(f=Ee(f,"EXT-X-BYTERANGE"))c=f.value.split("@"),f=Number(c[0]),c=c[1]?Number(c[1]):b.G+1,h=c+f-1;return new L(d,e,a,function(){return[g]},c,h)}
function Ze(a,b,c,d,e){var f=b.segments,g=[],h=Ge(b.uri,f[0].uri),k=sf(b,null,f[0],c,0);return tf(a,b.uri,k,d,e).then(function(a){h.split("/").pop();for(var d=0;d<f.length;++d){var e=g[g.length-1],e=sf(b,e,f[d],c+d,d?e.endTime:a);g.push(e);}return g}.bind(a))}
function uf(a,b){var c=a.f.networkingEngine,d=A(b.a(),a.g.retryParameters),e={},f=b.P;e.Range="bytes="+f+"-"+(f+1024-1);var g={};if(f||null!=b.G)f="bytes="+f+"-",null!=b.G&&(f+=b.G),g.Range=f;d.headers=e;return c.request(1,d)["catch"](function(){ha("Unable to fetch a partial HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",d.uris[0]);d.headers=g;return c.request(1,d)})}
function tf(a,b,c,d,e){return a.m&&(b=a.a[b].tb.get(c.position))?Promise.resolve(b.startTime):uf(a,c).then(function(a){if("video/mp4"==d||"audio/mp4"==d)return vf(a.data);if("video/mp2t"==d)return wf(a.data);if("application/mp4"!=d&&d.indexOf("text/"))throw new p(2,4,4030);a=a.data;var b=ab(d,e);if(Pb[b]){var c=new Ob(null);c.c=new Pb[b];b={periodStart:0,segmentStart:0,segmentEnd:0};try{var f=c.c.parseMedia(new Uint8Array(a),b)[0].startTime;}catch(m){throw new p(2,2,2009,m);}}else f=0;return f}.bind(a))}
function vf(a){var b=0,c=!1;(new N).F("moof",O).F("traf",O).$("tfdt",function(a){b=(a.version?a.u.Ma():a.u.D())/9E4;c=!0;a.ba.stop();}).parse(a,!0);if(!c)throw new p(2,4,4030);return b}
function wf(a){function b(){throw new p(2,4,4030);}a=new M(new DataView(a),0);for(var c=0;;){c=a.s;var d=a.X();71!=d&&b();a.Xa()&16384||b();(d=(a.X()&48)>>4)&&2!=d||b();3==d&&(d=a.X(),a.J(d));if(1!=a.D()>>8)a.seek(c+188),d=a.X(),71!=d&&(a.seek(c+192),d=a.X()),71!=d&&(a.seek(c+204),d=a.X()),71!=d&&b(),a.Fc(1);else return a.J(3),(c=a.X()>>6)&&1!=c||b(),a.X()||b(),c=a.X(),d=a.Xa(),a=a.Xa(),(1073741824*((c&14)>>1)+((d&65534)<<14|(a&65534)>>1))/9E4}}
function ef(a,b){for(var c=xf[a],d=0;d<c.length;d++)for(var e=0;e<b.length;e++)if(c[d].test(b[e].trim()))return b[e].trim();return"text"==a?"":null}
function of(a,b,c,d){d=Ge(d.uri,d.segments[0].uri);var e=(new ka(d)).V.split(".").pop(),f=yf[b][e];if(f)return Promise.resolve(f);if("text"==b)return c&&"vtt"!=c?Promise.resolve("application/mp4"):Promise.resolve("text/vtt");b=A([d],a.g.retryParameters);b.method="HEAD";return a.f.networkingEngine.request(1,b).then(function(a){a=a.headers["content-type"];if(!a)throw new p(2,4,4021,e);return a.split(";")[0]})}function bf(a,b){var c=a.getAttribute(b);if(!c)throw new p(2,4,4023,b);return c.value}
function nf(a,b){var c=Ee(a,b);if(!c)throw new p(2,4,4024,b);return c}function Te(a,b){return a.f.networkingEngine.request(0,A([b],a.g.retryParameters),function(){return!this.f}.bind(a))}
var xf={audio:[/^vorbis$/,/^opus$/,/^flac$/,/^mp4a/,/^[ae]c-3$/],video:[/^avc/,/^hev/,/^hvc/,/^vp0?[89]/,/^av1$/],text:[/^vtt$/,/^wvtt/,/^stpp/]},yf={audio:{mp4:"audio/mp4",m4s:"audio/mp4",m4i:"audio/mp4",m4a:"audio/mp4",ts:"video/mp2t"},video:{mp4:"video/mp4",m4s:"video/mp4",m4i:"video/mp4",m4v:"video/mp4",ts:"video/mp2t"},text:{mp4:"application/mp4",m4s:"application/mp4",m4i:"application/mp4",vtt:"text/vtt",ttml:"application/ttml+xml"}};
Re.prototype.L=function(){this.f&&(this.i=null,this.update().then(function(){We(this,this.h);}.bind(this))["catch"](function(a){this.f&&(a.severity=1,this.f.onError(a),We(this,0));}.bind(this)));};function We(a,b){null!=a.h&&null!=b&&(a.i=window.setTimeout(a.L.bind(a),1E3*b));}function $e(a,b){a.c=b;a.b&&a.b.ub(a.c==Xe.pa);a.c==Xe.pa&&null!=a.i&&(window.clearTimeout(a.i),a.i=null,a.h=null);}
var rf={"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":function(a){if("SAMPLE-AES-CENC"!=bf(a,"METHOD"))return null;var b=bf(a,"URI"),b=Qe.parse(b),b=new Uint8Array(b.data),b=Va("com.widevine.alpha",[{initDataType:"cenc",initData:b}]);if(a=Be(a,"KEYID"))b.keyIds=[a.substr(2).toLowerCase()];return b}},Se="VOD",Xe={pa:Se,Pc:"EVENT",eb:"LIVE"};ge.m3u8=Re;fe["application/x-mpegurl"]=Re;fe["application/vnd.apple.mpegurl"]=Re;function zf(a,b,c,d,e,f){this.a=a;this.c=b;this.l=c;this.B=d;this.L=e;this.H=f;this.b=new Ra;this.i=!1;this.h=1;this.g=this.f=null;this.C=a.readyState;this.j=!1;this.w=this.M=-1;this.m=this.v=!1;0<a.readyState?this.rc():Ua(this.b,a,"loadedmetadata",this.rc.bind(this));b=this.tc.bind(this);B(this.b,a,"ratechange",this.Ld.bind(this));B(this.b,a,"waiting",b);this.g=new gb(b);ib(this.g,.25);}l=zf.prototype;
l.o=function(){var a=this.b.o();this.b=null;this.f&&(this.f.cancel(),this.f=null);this.g&&(this.g.cancel(),this.g=null);this.H=this.L=this.l=this.c=this.a=null;return a};function Af(a,b){0<a.a.readyState?a.a.currentTime=Bf(a,b):a.B=b;}function Cf(a){return 0<a.a.readyState?Bf(a,a.a.currentTime):Df(a)}function Df(a){if(null!=a.B)return Bf(a,a.B);a=a.c.presentationTimeline;return Infinity>a.ka()?a.ca():a.qb()}l.Cb=function(){return this.h};
function Ef(a,b){a.f&&(a.f.cancel(),a.f=null);a.h=b;a.a.playbackRate=a.i||0>b?0:b;!a.i&&0>b&&(a.f=new gb(function(){this.a.currentTime+=b/4;}.bind(a)),ib(a.f,.25));}l.Lb=function(){this.m=!0;this.tc();};l.Ld=function(){var a=this.i||0>this.h?0:this.h;this.a.playbackRate&&this.a.playbackRate!=a&&Ef(this,this.a.playbackRate);};
l.rc=function(){var a=Df(this);.001>Math.abs(this.a.currentTime-a)?(B(this.b,this.a,"seeking",this.uc.bind(this)),B(this.b,this.a,"playing",this.sc.bind(this))):(Ua(this.b,this.a,"seeking",this.Nd.bind(this)),this.a.currentTime=a);};l.Nd=function(){B(this.b,this.a,"seeking",this.uc.bind(this));B(this.b,this.a,"playing",this.sc.bind(this));};
l.tc=function(){if(this.a.readyState&&!this.a.seeking&&!this.a.paused){this.a.readyState!=this.C&&(this.j=!1,this.C=this.a.readyState);var a=this.l.smallGapLimit,b=this.a.currentTime,c=this.a.buffered;if(b<this.c.presentationTimeline.ca())c=Ff(this,b),Gf(this,b,c);else{a:{if(c&&c.length&&!(1==c.length&&1E-6>c.end(0)-c.start(0))){var d=.1;/(Edge\/|Trident\/|Tizen)/.test(navigator.userAgent)&&(d=.5);for(var e=0;e<c.length;e++)if(c.start(e)>b&&(!e||c.end(e-1)-b<=d)){d=e;break a}}d=null;}if(null==d){if(3>
this.a.readyState&&0<this.a.playbackRate)if(this.w!=b)this.w=b,this.M=Date.now(),this.v=!1;else if(!this.v&&this.M<Date.now()-1E3)for(d=0;d<c.length;d++)if(b>=c.start(d)&&b<c.end(d)-.5){this.a.currentTime+=.1;this.w=this.a.currentTime;this.v=!0;break}}else if(d||this.m)if(e=c.start(d),!(e>=this.c.presentationTimeline.qb())){var f=e-b,a=f<=a,g=!1;a||this.j||(this.j=!0,f=new C("largegap",{currentTime:b,gapSize:f}),f.cancelable=!0,this.H(f),this.l.jumpLargeGaps&&!f.defaultPrevented&&(g=!0));if(a||g)d&&
c.end(d-1),Gf(this,b,e);}}}};l.uc=function(){this.m=!1;var a=this.a.currentTime,b=Ff(this,a);.001<Math.abs(b-a)?Gf(this,a,b):(this.j=!1,this.L());};l.sc=function(){var a=this.a.currentTime,b=Ff(this,a);.001<Math.abs(b-a)&&Gf(this,a,b);};function Ff(a,b){var c=Ib.bind(null,a.a.buffered),d=1*Math.max(a.c.minBufferTime||0,a.l.rebufferingGoal),e=a.c.presentationTimeline,f=e.qa(),g=e.Fa(d),h=e.Fa(5),d=e.Fa(d+5);return b>f?f:b<e.Fa(0)?c(h)?h:d:b>=g||c(b)?b:d}
function Gf(a,b,c){a.a.currentTime=c;var d=0,e=function(){!this.a||10<=d++||this.a.currentTime!=b||(this.a.currentTime=c,setTimeout(e,100));}.bind(a);setTimeout(e,100);}function Bf(a,b){var c=a.c.presentationTimeline.ca();if(b<c)return c;c=a.c.presentationTimeline.qa();return b>=c?c?c-.1:0:b}function Hf(a,b,c,d,e,f,g){this.a=a;this.B=b;this.g=c;this.w=d;this.l=e;this.h=f;this.C=g;this.c=[];this.j=new Ra;this.b=!1;this.i=-1;this.f=null;If(this);}Hf.prototype.o=function(){var a=this.j?this.j.o():Promise.resolve();this.j=null;Jf(this);this.C=this.h=this.l=this.w=this.g=this.B=this.a=null;this.c=[];return a};
Hf.prototype.v=function(a){if(!this.c.some(function(b){return b.info.schemeIdUri==a.schemeIdUri&&b.info.startTime==a.startTime&&b.info.endTime==a.endTime})){var b={info:a,status:1};this.c.push(b);var c=new C("timelineregionadded",{detail:Kf(a)});this.h(c);this.m(!0,b);}};function Kf(a){var b=Ea(a);b.eventElement=a.eventElement;return b}
Hf.prototype.m=function(a,b){var c=b.info.startTime>this.a.currentTime?1:b.info.endTime<this.a.currentTime?3:2,d=2==b.status,e=2==c;if(c!=b.status){if(!a||d||e)d||this.h(new C("timelineregionenter",{detail:Kf(b.info)})),e||this.h(new C("timelineregionexit",{detail:Kf(b.info)}));b.status=c;}};function If(a){Jf(a);a.f=window.setTimeout(a.H.bind(a),250);}function Jf(a){a.f&&(window.clearTimeout(a.f),a.f=null);}
Hf.prototype.H=function(){this.f=null;If(this);var a=Bc(this.g,this.a.currentTime);a!=this.i&&(-1!=this.i&&this.C(),this.i=a);var a=Jb(this.a.buffered,this.a.currentTime),b=Hb(this.a.buffered),c=this.g.presentationTimeline,d=c.qa(),e="ended"==this.B.readyState,b=c.S()&&b>=d||this.a.ended||e;this.b?(c=1*Math.max(this.g.minBufferTime||0,this.w.rebufferingGoal),(b||a>=c)&&0!=this.b&&(this.b=!1,this.l(!1))):!b&&.5>a&&1!=this.b&&(this.b=!0,this.l(!0));this.c.forEach(this.m.bind(this,!1));};function Lf(a,b){this.a=b;this.b=a;this.h=null;this.i=1;this.m=Promise.resolve();this.g=[];this.j={};this.c={};this.v=!1;this.w=null;this.f=this.l=!1;}l=Lf.prototype;l.o=function(){for(var a in this.c)Mf(this.c[a]);this.h=this.c=this.j=this.g=this.m=this.b=this.a=null;this.f=!0;return Promise.resolve()};
l.configure=function(a){this.h=a;this.w=new ya({maxAttempts:Math.max(a.retryParameters.maxAttempts,2),baseDelay:a.retryParameters.baseDelay,backoffFactor:a.retryParameters.backoffFactor,fuzzFactor:a.retryParameters.fuzzFactor,timeout:0},!0);};l.init=function(){var a=this.a.mc(this.b.periods[Bc(this.b,Cf(this.a.Wa))]);return a.variant||a.text?Nf(this,a).then(function(){this.a&&this.a.Cd&&this.a.Cd();}.bind(this)):Promise.reject(new p(2,5,5005))};function R(a){return a.b.periods[Bc(a.b,Cf(a.a.Wa))]}
function Of(a){var b=a.c.video||a.c.audio;return b?a.b.periods[b.ya]:null}function Pf(a){return Qf(a,"audio")}function Rf(a){return Qf(a,"video")}function Qf(a,b){var c=a.c[b];return c?c.ra||c.stream:null}function Sf(a,b){var c=a.c.video;if(c){var d=c.stream;if(d)if(b){var e=d.trickModeVideo;if(e){var f=c.ra;f||(Tf(a,e,!1),c.ra=d);}}else if(f=c.ra)c.ra=null,Tf(a,f,!0);}}function Uf(a,b,c){b.video&&Tf(a,b.video,c);b.audio&&Tf(a,b.audio,c);}
function Tf(a,b,c){var d=a.c[b.type];if(!d&&"text"==b.type&&a.h.ignoreTextStreamFailures)Nf(a,{text:b});else if(d){var e=Cc(a.b,b);c&&e!=d.ya?Vf(a):(d.ra&&(b.trickModeVideo?(d.ra=b,b=b.trickModeVideo):d.ra=null),(e=a.g[e])&&e.Na&&(e=a.j[b.id])&&e.Na&&d.stream!=b&&("text"==b.type&&Vb(a.a.N,ab(b.mimeType,b.codecs)),d.stream=b,d.rb=!0,c&&(d.va?d.wb=!0:d.za?(d.ua=!0,d.wb=!0):(Mf(d),Wf(a,d,!0)))));}}
function Xf(a){var b=Cf(a.a.Wa);Object.keys(a.c).every(function(a){var c=this.a.N;"text"==a?(a=c.a,a=b>=a.a&&b<a.b):(a=Xb(c,a),a=Ib(a,b));return a}.bind(a))||Vf(a);}function Vf(a){for(var b in a.c){var c=a.c[b];c.va||c.ua||(c.za?c.ua=!0:null==Wb(a.a.N,b)?null==c.ta&&Yf(a,c,0):(Mf(c),Wf(a,c,!1)));}}
function Nf(a,b,c){var d=Bc(a.b,Cf(a.a.Wa)),e={},f=[];b.variant&&b.variant.audio&&(e.audio=b.variant.audio,f.push(b.variant.audio));b.variant&&b.variant.video&&(e.video=b.variant.video,f.push(b.variant.video));b.text&&(e.text=b.text,f.push(b.text));a.a.N.init(e);Zf(a);return $f(a,f).then(function(){if(!this.f)for(var a in e){var b=e[a];this.c[a]||(this.c[a]={stream:b,type:a,Ga:null,la:null,ra:null,rb:!0,ya:d,endOfStream:!1,za:!1,ta:null,ua:!1,wb:!1,va:!1,Qb:!1,Ta:!1,Dc:c||0},Yf(this,this.c[a],0));}}.bind(a))}
function ag(a,b){var c=a.g[b];if(c)return c.O;c={O:new u,Na:!1};a.g[b]=c;var d=a.b.periods[b].variants.map(function(a){var b=[];a.audio&&b.push(a.audio);a.video&&b.push(a.video);a.video&&a.video.trickModeVideo&&b.push(a.video.trickModeVideo);return b}).reduce(x,[]).filter(Ia);d.push.apply(d,a.b.periods[b].textStreams);a.m=a.m.then(function(){if(!this.f)return $f(this,d)}.bind(a)).then(function(){this.f||(this.g[b].O.resolve(),this.g[b].Na=!0);}.bind(a))["catch"](function(a){this.f||(this.g[b].O.reject(),
delete this.g[b],this.a.onError(a));}.bind(a));return c.O}
function $f(a,b){b.map(function(a){return a.id}).filter(Ia);for(var c=[],d=0;d<b.length;++d){var e=b[d];var f=a.j[e.id];f?c.push(f.O):(a.j[e.id]={O:new u,Na:!1},c.push(e.createSegmentIndex()));}return Promise.all(c).then(function(){if(!this.f)for(var a=0;a<b.length;++a){var c=this.j[b[a].id];c.Na||(c.O.resolve(),c.Na=!0);}}.bind(a))["catch"](function(a){if(!this.f)return this.j[e.id].O.reject(),delete this.j[e.id],Promise.reject(a)}.bind(a))}
function Zf(a){var b=a.b.presentationTimeline.ka();Infinity>b?a.a.N.ga(b):a.a.N.ga(Math.pow(2,32));}l.He=function(a){if(!this.f&&!a.za&&null!=a.ta&&!a.va)if(a.ta=null,a.ua)Wf(this,a,a.wb);else{try{var b=bg(this,a);null!=b&&(Yf(this,a,b),a.Ta=!1);}catch(c){cg(this,c);return}b=Ya(this.c);dg(this,a);b.every(function(a){return a.endOfStream})&&this.a.N.endOfStream().then(function(){this.b.presentationTimeline.ga(this.a.N.ka());}.bind(this));}};
function bg(a,b){var c=Cf(a.a.Wa),d=b.Ga&&b.la?a.b.periods[Cc(a.b,b.Ga)].startTime+b.la.endTime:Math.max(c,b.Dc),e=Cc(a.b,b.stream),f=Bc(a.b,d);var g=a.a.N;var h=b.type;"text"==h?(g=g.a,g=null==g.b||g.b<c?0:g.b-Math.max(c,g.a)):(g=Xb(g,h),g=Jb(g,c));h=Math.max(a.i*Math.max(a.b.minBufferTime||0,a.h.rebufferingGoal),a.i*a.h.bufferingGoal);if(d>=a.b.presentationTimeline.ka())return b.endOfStream=!0,null;b.endOfStream=!1;b.ya=f;if(f!=e)return null;if(g>=h)return.5;d=a.a.N;f=b.type;d="text"==f?d.a.b:Hb(Xb(d,
f));b.la&&b.stream==b.Ga?(f=b.la.position+1,d=eg(a,b,e,f)):(f=b.la?b.stream.findSegmentPosition(Math.max(0,a.b.periods[Cc(a.b,b.Ga)].startTime+b.la.endTime-a.b.periods[e].startTime)):b.stream.findSegmentPosition(Math.max(0,(d||c)-a.b.periods[e].startTime)),null==f?d=null:(g=null,null==d&&(g=eg(a,b,e,Math.max(0,f-1))),d=g||eg(a,b,e,f)));if(!d)return 1;b.Dc=0;fg(a,b,c,e,d);return null}
function eg(a,b,c,d){c=a.b.periods[c];b=b.stream.getSegmentReference(d);if(!b)return null;a=a.b.presentationTimeline;d=a.qa();return c.startTime+b.endTime<a.ca()||c.startTime+b.startTime>d?null:b}
function fg(a,b,c,d,e){var f=a.b.periods[d],g=b.stream,h=a.b.presentationTimeline.ka(),k=a.b.periods[d+1];d=gg(a,b,d,f.startTime,k?k.startTime:h);b.za=!0;b.rb=!1;h=hg(a,e);Promise.all([d,h]).then(function(a){if(!this.f&&!this.l)return ig(this,b,c,f,g,e,a[1])}.bind(a)).then(function(){this.f||this.l||(b.za=!1,b.Qb=!1,b.ua||this.a.Lb(),Yf(this,b,0),jg(this,g));}.bind(a))["catch"](function(a){this.f||this.l||(b.za=!1,"text"==b.type&&this.h.ignoreTextStreamFailures?delete this.c.text:3017==a.code?kg(this,
b,a):(b.Ta=!0,a.severity=2,cg(this,a)));}.bind(a));}function kg(a,b,c){if(!Ya(a.c).some(function(a){return a!=b&&a.Qb})){var d=Math.round(100*a.i);if(20<d)a.i-=.2;else if(4<d)a.i-=.04;else{b.Ta=!0;a.l=!0;a.a.onError(c);return}b.Qb=!0;}Yf(a,b,4);}
function gg(a,b,c,d,e){if(!b.rb)return Promise.resolve();c=ac(a.a.N,b.type,a.b.periods[c].startTime-b.stream.presentationTimeOffset,d,e);if(!b.stream.initSegmentReference)return c;a=hg(a,b.stream.initSegmentReference).then(function(a){if(!this.f)return Yb(this.a.N,b.type,a,null,null)}.bind(a))["catch"](function(a){b.rb=!0;return Promise.reject(a)});return Promise.all([c,a])}
function ig(a,b,c,d,e,f,g){e.containsEmsgBoxes&&(new N).$("emsg",a.Yd.bind(a,d,f)).parse(g);return lg(a,b,c).then(function(){if(!this.f)return Yb(this.a.N,b.type,g,f.startTime+d.startTime,f.endTime+d.startTime)}.bind(a)).then(function(){if(!this.f)return b.Ga=e,b.la=f,Promise.resolve()}.bind(a))}
l.Yd=function(a,b,c){var d=c.u.Ob(),e=c.u.Ob(),f=c.u.D(),g=c.u.D(),h=c.u.D(),k=c.u.D(),m=c.u.La(c.u.I.byteLength-c.u.s);a=a.startTime+b.startTime+g/f;if("urn:mpeg:dash:event:2012"==d)this.a.Ed();else this.a.onEvent(new C("emsg",{detail:{startTime:a,endTime:a+h/f,schemeIdUri:d,value:e,timescale:f,presentationTimeDelta:g,eventDuration:h,id:k,messageData:m}}));c.ba.stop();};
function lg(a,b,c){var d=Wb(a.a.N,b.type);if(null==d)return Promise.resolve();c=c-d-a.h.bufferBehind;return 0>=c?Promise.resolve():a.a.N.remove(b.type,d,d+c).then(function(){}.bind(a))}function jg(a,b){if(!a.v&&(a.v=Ya(a.c).every(function(a){return"text"==a.type?!0:!a.ua&&!a.va&&a.la}),a.v)){var c=Cc(a.b,b);a.g[c]||ag(a,c).then(function(){this.a.lc();}.bind(a))["catch"](Ga);for(c=0;c<a.b.periods.length;++c)ag(a,c)["catch"](Ga);a.a.Qd&&a.a.Qd();}}
function dg(a,b){if(b.ya!=Cc(a.b,b.stream)){var c=b.ya,d=Ya(a.c);d.every(function(a){return a.ya==c})&&d.every(mg)&&ag(a,c).then(function(){if(!this.f&&d.every(function(a){var b=Cc(this.b,a.stream);return mg(a)&&a.ya==c&&b!=c}.bind(this))){var a=this.b.periods[c],b=this.a.mc(a),g={};b.variant&&b.variant.video&&(g.video=b.variant.video);b.variant&&b.variant.audio&&(g.audio=b.variant.audio);b.text&&(g.text=b.text);for(var h in this.c)if(!g[h]&&"text"!=h){this.a.onError(new p(2,5,5005));return}for(h in g)if(!this.c[h])if("text"==
h)Nf(this,{text:g.text},a.startTime),delete g[h];else{this.a.onError(new p(2,5,5005));return}for(h in this.c)(a=g[h])?(Tf(this,a,!1),Yf(this,this.c[h],0)):delete this.c[h];this.a.lc();}}.bind(a))["catch"](Ga);}}function mg(a){return!a.za&&null==a.ta&&!a.ua&&!a.va}function hg(a,b){var c=A(b.a(),a.h.retryParameters);if(b.P||null!=b.G){var d="bytes="+b.P+"-";null!=b.G&&(d+=b.G);c.headers.Range=d;}return a.a.Va.request(1,c).then(function(a){return a.data})}
function Wf(a,b,c){b.ua=!1;b.wb=!1;b.va=!0;$b(a.a.N,b.type).then(function(){if(!this.f&&c){var a=this.a.N,e=b.type;return"text"==e?Promise.resolve():Zb(a,e,a.bd.bind(a,e))}}.bind(a)).then(function(){this.f||(b.Ga=null,b.la=null,b.va=!1,b.endOfStream=!1,Yf(this,b,0));}.bind(a));}function Yf(a,b,c){b.ta=window.setTimeout(a.He.bind(a,b),1E3*c);}function Mf(a){null!=a.ta&&(window.clearTimeout(a.ta),a.ta=null);}
function cg(a,b){Aa(a.w).then(function(){this.a.onError(b);b.handled||this.h.failureCallback(b);}.bind(a));}function ng(a,b){return new Promise(function(c,d){var e=new XMLHttpRequest;e.open(b.method,a,!0);e.responseType="arraybuffer";e.timeout=b.retryParameters.timeout;e.withCredentials=b.allowCrossSiteCredentials;e.onload=function(b){b=b.target;var e=b.getAllResponseHeaders().split("\r\n").reduce(function(a,b){var c=b.split(": ");a[c[0].toLowerCase()]=c.slice(1).join(": ");return a},{});if(200<=b.status&&299>=b.status&&202!=b.status)b.responseURL&&(a=b.responseURL),c({uri:a,data:b.response,headers:e,fromCache:!!e["x-shaka-from-cache"]});
else{var f=null;try{f=eb(b.response);}catch(m){}d(new p(401==b.status||403==b.status?2:1,1,1001,a,b.status,f,e));}};e.onerror=function(){d(new p(1,1,1002,a));};e.ontimeout=function(){d(new p(1,1,1003,a));};for(var f in b.headers)e.setRequestHeader(f,b.headers[f]);e.send(b.body);})}n("shaka.net.HttpPlugin",ng);Ka("http",ng,1);Ka("https",ng,1);function og(){this.b=null;this.a=[];this.c={};}l=og.prototype;l.init=function(a,b){return pg(this,a,b).then(function(){var b=Object.keys(a);return Promise.all(b.map(function(a){return qg(this,a).then(function(b){this.c[a]=b;}.bind(this))}.bind(this)))}.bind(this))};l.o=function(){return Promise.all(this.a.map(function(a){try{a.transaction.abort();}catch(b){}return a.O["catch"](Ga)})).then(function(){this.b&&(this.b.close(),this.b=null);}.bind(this))};
l.get=function(a,b){var c;return rg(this,a,"readonly",function(a){c=a.get(b);}).then(function(){return c.result})};l.forEach=function(a,b){return rg(this,a,"readonly",function(a){a.openCursor().onsuccess=function(a){if(a=a.target.result)b(a.value),a["continue"]();};})};function sg(a,b,c){return rg(a,b,"readwrite",function(a){a.put(c);})}l.remove=function(a,b){return rg(this,a,"readwrite",function(a){a["delete"](b);})};
function tg(a,b,c){return rg(a,"segment","readwrite",function(a){for(var d=0;d<b.length;d++)a["delete"](b[d]).onsuccess=c||function(){};})}function qg(a,b){var c=0;return rg(a,b,"readonly",function(a){a.openCursor(null,"prev").onsuccess=function(a){(a=a.target.result)&&(c=a.key+1);};}).then(function(){return c})}
function rg(a,b,c,d){var e={transaction:a.b.transaction([b],c),O:new u};e.transaction.oncomplete=function(){this.a.splice(this.a.indexOf(e),1);e.O.resolve();}.bind(a);e.transaction.onabort=function(a){this.a.splice(this.a.indexOf(e),1);ug(e.transaction,e.O,a);}.bind(a);e.transaction.onerror=function(a){a.preventDefault();}.bind(a);b=e.transaction.objectStore(b);d(b);a.a.push(e);return e.O}
function pg(a,b,c){var d=window.indexedDB.open("shaka_offline_db",1),e=!1,f=new u;d.onupgradeneeded=function(a){e=!0;a=a.target.result;for(var c in b)a.createObjectStore(c,{keyPath:b[c]});};d.onsuccess=function(a){c&&!e?(a.target.result.close(),setTimeout(function(){pg(this,b,c-1).then(f.resolve,f.reject);}.bind(this),1E3)):(this.b=a.target.result,f.resolve());}.bind(a);d.onerror=ug.bind(null,d,f);return f}
function ug(a,b,c){a.error?b.reject(new p(2,9,9001,a.error)):b.reject(new p(2,9,9002));c.preventDefault();}function vg(){if(!window.indexedDB)return Promise.reject(new p(2,9,9E3));var a=new og;return a.init({manifest:"key",segment:"key"}).then(function(){return a})}function S(a){if(null!=S.a(a))return S.g(a);var b=S.b(a);return null!=b?S.h(b,a):Promise.reject(new p(2,1,9004,a))}n("shaka.offline.OfflineScheme",S);S.g=function(a){a={uri:a,data:new ArrayBuffer(0),headers:{"content-type":"application/x-offline-manifest"}};return Promise.resolve(a)};S.h=function(a,b){var c,d;return vg().then(function(b){c=b;return c.get("segment",a)}).then(function(a){d=a;return c.o()}).then(function(){if(!d)throw new p(2,9,9003,a);return{uri:b,data:d.data,headers:{}}})};
S.f=function(a){return"offline:"+a};S.a=function(a){return(a=/^offline:([0-9]+)$/.exec(a))?Number(a[1]):null};S.c=function(a,b,c){return"offline:"+a+"/"+b+"/"+c};S.b=function(a){return(a=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a))?Number(a[1]):null};Ka("offline",S);function wg(a){var b=xg(a.periods[0],[],new Q(null,0)),b=oc(b);return{offlineUri:S.f(a.key),originalManifestUri:a.originalManifestUri,duration:a.duration,size:a.size,expiration:void 0==a.expiration?Infinity:a.expiration,tracks:b,appMetadata:a.appMetadata}}function xg(a,b,c){var d=a.streams.filter(yg),e=a.streams.filter(zg);b=Ag(d,e,b);d=a.streams.filter(Bg).map(Cg);a.streams.forEach(function(a){a=Dg(a);c.Ia(0,a);});return{startTime:a.startTime,variants:b,textStreams:d}}
function Dg(a){return a.segments.map(function(a,c){return new L(c,a.startTime,a.endTime,function(){return[a.uri]},0,null)})}
function Ag(a,b,c){var d=[];d.push.apply(d,a);d.push.apply(d,b);var e=d.every(function(a){return!a.variantIds});d.every(function(a){return!!a.variantIds});if(e){d.forEach(function(a){a.variantIds=[];});var f=0;a.length&&b.length?a.forEach(function(a){b.forEach(function(b){a.variantIds.push(f);b.variantIds.push(f);f++;});}):d.forEach(function(a){a.variantIds.push(f);f++;});}var g={};d.forEach(function(a){a.variantIds.forEach(function(a){g[a]||(g[a]={id:a,language:"",primary:!1,audio:null,video:null,bandwidth:0,
drmInfos:c,allowedByApplication:!0,allowedByKeySystem:!0});});});a.forEach(function(a){var b=Cg(a);a.variantIds.forEach(function(a){a=g[a];a.language=b.language;a.primary=a.primary||b.primary;a.audio=b;});});b.forEach(function(a){var b=Cg(a);a.variantIds.forEach(function(a){a=g[a];a.primary=a.primary||b.primary;a.video=b;});});return Ya(g)}
function Cg(a){var b=Dg(a),b=new P(b);return{id:a.id,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:b.find.bind(b),getSegmentReference:b.get.bind(b),initSegmentReference:a.initSegmentUri?new Bd(function(){return[a.initSegmentUri]},0,null):null,presentationTimeOffset:a.presentationTimeOffset,mimeType:a.mimeType,codecs:a.codecs,width:a.width||void 0,height:a.height||void 0,frameRate:a.frameRate||void 0,kind:a.kind,encrypted:a.encrypted,keyId:a.keyId,language:a.language,label:a.label||
null,type:a.contentType,primary:a.primary,trickModeVideo:null,containsEmsgBoxes:!1,roles:[],channelsCount:null}}function yg(a){return"audio"==a.contentType}function zg(a){return"video"==a.contentType}function Bg(a){return"text"==a.contentType}function Eg(a,b,c,d){this.b={};this.l=[];this.m=d;this.j=a;this.v=b;this.w=c;this.i=this.a=null;this.f=this.g=this.h=this.c=0;}Eg.prototype.o=function(){var a=this.j,b=this.l,c=this.i||Promise.resolve();b.length&&(c=c.then(function(){return tg(a,b)}));this.b={};this.l=[];this.i=this.a=this.w=this.v=this.j=this.m=null;return c};function Fg(a,b,c,d,e){a.b[b]=a.b[b]||[];a.b[b].push({uris:c.a(),P:c.P,G:c.G,cc:d,Sb:e});}
function Gg(a,b){a.c=0;a.h=0;a.g=0;a.f=0;Ya(a.b).forEach(function(a){a.forEach(function(a){null!=a.G?this.c+=a.G-a.P+1:this.g+=a.cc;}.bind(this));}.bind(a));a.a=b;a.a.size=a.c;var c=Ya(a.b).map(function(a){var b=0,c=function(){if(!this.m)return Promise.reject(new p(2,9,9002));if(b>=a.length)return Promise.resolve();var d=a[b++];return Hg(this,d).then(c)}.bind(this);return c()}.bind(a));a.b={};a.i=Promise.all(c).then(function(){return sg(this.j,"manifest",b)}.bind(a)).then(function(){this.l=[];}.bind(a));
return a.i}
function Hg(a,b){var c=A(b.uris,a.w);if(b.P||null!=b.G)c.headers.Range="bytes="+b.P+"-"+(null==b.G?"":b.G);var d;return a.v.request(1,c).then(function(a){if(!this.a)return Promise.reject(new p(2,9,9002));d=a.data.byteLength;this.l.push(b.Sb.key);b.Sb.data=a.data;return sg(this.j,"segment",b.Sb)}.bind(a)).then(function(){if(!this.a)return Promise.reject(new p(2,9,9002));null==b.G?(this.a.size+=d,this.f+=b.cc):this.h+=d;var a=(this.h+this.f)/(this.c+this.g),c=wg(this.a);this.m.progressCallback(c,a);}.bind(a))}
function Ig(){this.a=-1;}l=Ig.prototype;l.configure=function(){};l.start=function(a){var b=S.a(a);if(null==b)return Promise.reject(new p(2,1,9004,a));this.a=b;var c;return vg().then(function(a){c=a;return c.get("manifest",this.a)}.bind(this)).then(function(a){if(!a)throw new p(2,9,9003,b);return Jg(a)}).then(function(a){return c.o().then(function(){return a})},function(a){return c.o().then(function(){throw a;})})};l.stop=function(){return Promise.resolve()};l.update=function(){};
l.onExpirationUpdated=function(a,b){var c=this.a,d;vg().then(function(a){d=a;return d.get("manifest",c)}).then(function(c){if(c&&!(0>c.sessionIds.indexOf(a))&&(void 0==c.expiration||c.expiration>b))return c.expiration=b,sg(d,"manifest",c)})["catch"](function(){}).then(function(){return d.o()});};
function Jg(a){var b=new Q(null,0);b.ga(a.duration);var c=a.drmInfo?[a.drmInfo]:[];return{presentationTimeline:b,minBufferTime:10,offlineSessionIds:a.sessionIds,periods:a.periods.map(function(a){return xg(a,c,b)})}}fe["application/x-offline-manifest"]=Ig;function T(a){this.a=null;for(var b=0;b<a.textTracks.length;++b){var c=a.textTracks[b];c.mode="disabled";"Shaka Player TextTrack"==c.label&&(this.a=c);}this.a||(this.a=a.addTextTrack("subtitles","Shaka Player TextTrack"));this.a.mode="hidden";0<this.a.cues.length&&this.remove(0,Infinity);this.b=this.a.cues;}n("shaka.text.SimpleTextDisplayer",T);T.prototype.remove=function(a,b){if(!this.a)return!1;Kg(this,function(c){return c.startTime>=b||c.endTime<=a?!1:!0});return!0};T.prototype.remove=T.prototype.remove;
T.prototype.append=function(a){this.a.cues.length&&a.length&&"EMPTY"!=a[0].id&&""!=a[0].id&&this.a.cues[this.a.cues.length-1].id==a[0].id&&a.shift();for(var b=[],c=0;c<a.length;c++){var d=Lg(a[c]);d&&(this.a.cues.getCueById&&this.a.cues.getCueById(d.id)||b.push(d));}b.slice().sort(function(a,c){return a.startTime!=c.startTime?a.startTime-c.startTime:a.endTime!=c.endTime?a.endTime-c.startTime:b.indexOf(c)-b.indexOf(a)}).forEach(function(a){this.a.addCue(a);}.bind(this));};T.prototype.append=T.prototype.append;
T.prototype.o=function(){this.a&&Kg(this,function(){return!0});this.a=null;return Promise.resolve()};T.prototype.destroy=T.prototype.o;T.prototype.isTextVisible=function(){return"showing"==this.a.mode};T.prototype.isTextVisible=T.prototype.isTextVisible;T.prototype.setTextVisibility=function(a){this.a.mode=a?"showing":"hidden";};T.prototype.setTextVisibility=T.prototype.setTextVisibility;
function Lg(a){if(a.startTime>=a.endTime)return null;var b=new VTTCue(a.startTime,a.endTime,a.payload);b.id=a.id;b.lineAlign=a.lineAlign;b.positionAlign=a.positionAlign;b.size=a.size;try{b.align=a.textAlign;}catch(d){}"center"==a.textAlign&&"center"!=b.align&&(b.align="middle");a.writingDirection==Mg?b.vertical="lr":a.writingDirection==Ng&&(b.vertical="rl");a.lineInterpretation==Og&&(b.snapToLines=!1);null!=a.line&&(b.line=a.line);null!=a.position&&(b.position=a.position);if(window.VTTRegion&&a.region){var c=
new VTTRegion;c.viewportAnchorX=a.region.x;c.viewportAnchorY=a.region.y;c.width=a.region.width;c.height=a.region.height;b.region=c;}return b}function Kg(a,b){for(var c=a.b,d=[],e=0;e<c.length;++e)b(c[e])&&d.push(c[e]);for(e=0;e<d.length;++e)a.a.removeCue(d[e]);}function Pg(){this.a=Promise.resolve();this.b=this.c=this.f=!1;this.i=new Promise(function(a){this.g=a;}.bind(this));}Pg.prototype.then=function(a){this.a=this.a.then(a).then(function(a){return this.b?(this.g(),Promise.reject(this.h)):Promise.resolve(a)}.bind(this));return this};function Qg(a){a.f||(a.a=a.a.then(function(a){this.c=!0;return Promise.resolve(a)}.bind(a),function(a){this.c=!0;return this.b?(this.g(),Promise.reject(this.h)):Promise.reject(a)}.bind(a)));a.f=!0;return a.a}
Pg.prototype.cancel=function(a){if(this.c)return Promise.resolve();this.b=!0;this.h=a;return this.i};function U(a,b){ca.call(this);this.C=!1;this.f=a;this.mb=!1;this.w=null;this.m=new Ra;this.g=this.lb=this.b=this.i=this.a=this.B=this.h=this.jb=this.L=this.M=this.l=this.v=null;this.Sc=1E9;this.hb=[];this.Ra=!1;this.Da=!0;this.Qa=this.Sa=this.ia=null;this.ac=!1;this.ha=null;this.kb=[];this.H={};this.c=Rg(this);this.ib={width:Infinity,height:Infinity};this.j=Sg();this.gb=0;this.Pa=this.c.preferredAudioLanguage;this.bb=this.c.preferredTextLanguage;this.xb=this.cb="";this.bc=!0;b&&b(this);this.v=new z(this.Ae.bind(this));
this.jb=Tg(this);B(this.m,this.f,"error",this.Sd.bind(this));}ba(U);n("shaka.Player",U);function Ug(a){if(!a.ia)return Promise.resolve();var b=Promise.resolve();a.i&&(b=a.i.stop(),a.i=null);a=a.ia.cancel(new p(2,7,7E3));return Promise.all([b,a])}U.prototype.o=function(){this.C=!0;return Ug(this).then(function(){var a=Promise.all([this.Sa,Vg(this),this.m?this.m.o():null,this.v?this.v.o():null]);this.f=null;this.mb=!1;this.c=this.v=this.g=this.m=null;return a}.bind(this))};U.prototype.destroy=U.prototype.o;
U.version="v2.2.6-7-gca38bd4";var Wg={};U.registerSupportPlugin=function(a,b){Wg[a]=b;};U.isBrowserSupported=function(){return!!window.Promise&&!!window.Uint8Array&&!!Array.prototype.forEach&&!!window.MediaSource&&!!MediaSource.isTypeSupported&&!!window.MediaKeys&&!!window.navigator&&!!window.navigator.requestMediaKeySystemAccess&&!!window.MediaKeySystemAccess&&!!window.MediaKeySystemAccess.prototype.getConfiguration};
U.probeSupport=function(){return Eb().then(function(a){var b=he(),c=Ub();a={manifest:b,media:c,drm:a};for(var d in Wg)a[d]=Wg[d]();return a})};
U.prototype.load=function(a,b,c){var d=this.vb(),e=new Pg;this.ia=e;this.dispatchEvent(new C("loading"));var f=Date.now();return Qg(e.then(function(){return d}).then(function(){this.j=Sg();B(this.m,this.f,"playing",this.ab.bind(this));B(this.m,this.f,"pause",this.ab.bind(this));B(this.m,this.f,"ended",this.ab.bind(this));this.g=new this.c.abrFactory;Xg(this);this.w=new this.c.textDisplayFactory;this.w.setTextVisibility(this.mb);return ie(a,this.v,this.c.manifest.retryParameters,c)}.bind(this)).then(function(b){this.i=
new b;this.i.configure(this.c.manifest);b={networkingEngine:this.v,filterNewPeriod:this.nb.bind(this),filterAllPeriods:this.Wb.bind(this),onTimelineRegionAdded:this.Rd.bind(this),onEvent:this.$a.bind(this),onError:this.Oa.bind(this)};return 2<this.i.start.length?(ha("The ManifestParser interface has changed. Please upgrade your plugin to accept the PlayerInterface structure. See the ManifestParser documentation for details."),this.i.start(a,this.v,b.filterNewPeriod,b.onError,b.onEvent)):this.i.start(a,
b)}.bind(this)).then(function(b){b.periods.some(function(a){return a.variants.some(function(a){return a.video&&a.audio})})&&b.periods.forEach(function(a){a.variants=a.variants.filter(function(a){return a.video&&a.audio});});if(0==b.periods.length)throw new p(2,4,4014);this.b=b;this.lb=a;this.l=new pb({Va:this.v,onError:this.Oa.bind(this),Kb:this.Dd.bind(this),onExpirationUpdated:this.Ad.bind(this),onEvent:this.$a.bind(this)});this.l.configure(this.c.drm);return this.l.init(b,!1)}.bind(this)).then(function(){this.Wb(this.b.periods);
this.gb=Date.now()/1E3;this.Pa=this.c.preferredAudioLanguage;this.bb=this.c.preferredTextLanguage;var a=this.b.presentationTimeline.ka(),b=this.c.playRangeEnd,c=this.c.playRangeStart;0<c&&(this.S()||this.b.presentationTimeline.Ic(c));b<a&&(this.S()||this.b.presentationTimeline.ga(b));return Promise.all([sb(this.l,this.f),this.jb])}.bind(this)).then(function(){this.g.chooseStreams?(ha("AbrManager API has changed. The SwitchCallback signature has changed to accept a variant instead of a map. Please update your AbrManager. The old API will be removed in v2.3."),
this.g.init(this.Ke.bind(this))):this.g.init(this.Mc.bind(this));this.h=new zf(this.f,this.b,this.c.streaming,void 0==b?null:b,this.ze.bind(this),this.$a.bind(this));this.B=new Hf(this.f,this.M,this.b,this.c.streaming,this.Lc.bind(this),this.$a.bind(this),this.ye.bind(this));this.L=new Tb(this.f,this.M,this.w);this.a=new Lf(this.b,{Wa:this.h,N:this.L,Va:this.v,mc:this.yd.bind(this),lc:this.Vc.bind(this),onError:this.Oa.bind(this),onEvent:this.$a.bind(this),Ed:this.Fd.bind(this),Lb:this.Od.bind(this),
filterNewPeriod:this.nb.bind(this),filterAllPeriods:this.Wb.bind(this)});this.a.configure(this.c.streaming);this.dispatchEvent(new C("streaming"));Yg(this);return this.a.init()}.bind(this)).then(function(){if(this.c.streaming.startAtSegmentBoundary){var a=Zg(this,Cf(this.h));Af(this.h,a);}this.b.periods.forEach(this.nb.bind(this));$g(this);ah(this);var a=R(this.a),b=vc(a,this.Pa,this.cb);this.g.setVariants(b);a.variants.some(function(a){return a.primary});this.kb.forEach(this.B.v.bind(this.B));this.kb=
[];Ua(this.m,this.f,"loadeddata",function(){this.j.loadLatency=(Date.now()-f)/1E3;}.bind(this));this.ia=null;}.bind(this)))["catch"](function(a){this.ia==e&&(this.ia=null,this.dispatchEvent(new C("unloading")));return Promise.reject(a)}.bind(this))};U.prototype.load=U.prototype.load;
function Yg(a){function b(a){return(a.video?a.video.codecs.split(".")[0]:"")+"-"+(a.audio?a.audio.codecs.split(".")[0]:"")}var c={};a.b.periods.forEach(function(a){a.variants.forEach(function(a){var d=b(a);d in c||(c[d]=[]);c[d].push(a);});});var d=null,e=Infinity;$a(c,function(a,b){var c=0,f=0;b.forEach(function(a){c+=a.bandwidth||0;++f;});var g=c/f;g<e&&(d=a,e=g);});a.b.periods.forEach(function(a){a.variants=a.variants.filter(function(a){return b(a)==d?!0:!1});});}
function Tg(a){a.M=new MediaSource;var b=new u;B(a.m,a.M,"sourceopen",b.resolve);a.f.src=window.URL.createObjectURL(a.M);return b}
U.prototype.configure=function(a){if(a.abr&&a.abr.manager){ha("AbrManager configuration has changed. Please use abrFactory instead of abr.manager. The old API will be removed in v2.3.");var b=a.abr.manager;delete a.abr.manager;a.abrFactory=function(){return b};}a.streaming&&null!=a.streaming.infiniteRetriesForLiveStreams&&(ha("Streaming configuration has changed. Please use streaming.failureCallback instead of streaming.infiniteRetriesForLiveStreams. The old API will be removed in v2.3."),this.bc=
!!a.streaming.infiniteRetriesForLiveStreams,delete a.streaming.infiniteRetriesForLiveStreams);Da(this.c,a,Rg(this),bh(),"");ch(this,"restrictions"in a);};U.prototype.configure=U.prototype.configure;function ch(a,b){a.i&&a.i.configure(a.c.manifest);a.l&&a.l.configure(a.c.drm);if(a.a){a.a.configure(a.c.streaming);try{a.b.periods.forEach(a.nb.bind(a));}catch(c){a.Oa(c);}dh(a,R(a.a),b);}a.g&&(Xg(a),a.c.abr.enabled&&!a.Da?a.g.enable():a.g.disable());}
function Xg(a){a.g.configure?a.g.configure(a.c.abr):(ha("AbrManager API has changed. AbrManager.setDefaultEstimate() and AbrManager.setRestrictions() are deprecated. AbrManager.configure() is used instead. Please upgrade to the new API. The old API will be removed in v2.3."),a.g.setDefaultEstimate(a.c.abr.defaultBandwidthEstimate),a.g.setRestrictions(a.c.abr.restrictions));}U.prototype.getConfiguration=function(){var a=Rg(this);Da(a,this.c,Rg(this),bh(),"");return a};U.prototype.getConfiguration=U.prototype.getConfiguration;
U.prototype.me=function(){this.c=Rg(this);ch(this,!0);};U.prototype.resetConfiguration=U.prototype.me;U.prototype.gd=function(){return this.f};U.prototype.getMediaElement=U.prototype.gd;U.prototype.ic=function(){return this.v};U.prototype.getNetworkingEngine=U.prototype.ic;U.prototype.fd=function(){return this.lb};U.prototype.getManifestUri=U.prototype.fd;U.prototype.S=function(){return this.b?this.b.presentationTimeline.S():!1};U.prototype.isLive=U.prototype.S;
U.prototype.xa=function(){return this.b?this.b.presentationTimeline.xa():!1};U.prototype.isInProgress=U.prototype.xa;U.prototype.sd=function(){if(!this.b||!this.b.periods.length)return!1;var a=this.b.periods[0].variants;return a.length?!a[0].video:!1};U.prototype.isAudioOnly=U.prototype.sd;U.prototype.oe=function(){var a=0,b=0;this.b&&(b=this.b.presentationTimeline,a=b.ca(),b=b.qb());return{start:a,end:b}};U.prototype.seekRange=U.prototype.oe;
U.prototype.keySystem=function(){return this.l?this.l.keySystem():""};U.prototype.keySystem=U.prototype.keySystem;U.prototype.drmInfo=function(){return this.l?this.l.b:null};U.prototype.drmInfo=U.prototype.drmInfo;U.prototype.pb=function(){return this.l?this.l.pb():Infinity};U.prototype.getExpiration=U.prototype.pb;U.prototype.td=function(){return this.Ra};U.prototype.isBuffering=U.prototype.td;
U.prototype.vb=function(){if(this.C)return Promise.resolve();this.dispatchEvent(new C("unloading"));return Ug(this).then(function(){this.Sa||(this.Sa=eh(this).then(function(){this.Sa=null;}.bind(this)));return this.Sa}.bind(this))};U.prototype.unload=U.prototype.vb;U.prototype.Cb=function(){return this.h?this.h.Cb():0};U.prototype.getPlaybackRate=U.prototype.Cb;U.prototype.Le=function(a){this.h&&Ef(this.h,a);this.a&&Sf(this.a,1!=a);};U.prototype.trickPlay=U.prototype.Le;
U.prototype.Wc=function(){this.h&&Ef(this.h,1);this.a&&Sf(this.a,!1);};U.prototype.cancelTrickPlay=U.prototype.Wc;U.prototype.qd=function(){if(!this.b)return[];var a=Bc(this.b,Cf(this.h)),b=this.H[a]||{};return qc(this.b.periods[a],b.audio,b.video)};U.prototype.getVariantTracks=U.prototype.qd;U.prototype.pd=function(){if(!this.b)return[];var a=Bc(this.b,Cf(this.h));return rc(this.b.periods[a],(this.H[a]||{}).text).filter(function(a){return 0>this.hb.indexOf(a.id)}.bind(this))};
U.prototype.getTextTracks=U.prototype.pd;U.prototype.se=function(a){this.a&&(a=tc(R(this.a),a))&&(fh(this,a,!1),this.Da?this.ha=a:Tf(this.a,a,!0));};U.prototype.selectTextTrack=U.prototype.se;U.prototype.te=function(a,b){if(this.a){this.c.abr.enabled&&ha("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");var c=sc(R(this.a),a);c&&uc(c)&&(gh(this,c,!1),hh(this,c,b));}};
U.prototype.selectVariantTrack=U.prototype.te;U.prototype.cd=function(){return this.a?pc(R(this.a).variants).map(function(a){return a.language}).filter(Ia):[]};U.prototype.getAudioLanguages=U.prototype.cd;U.prototype.od=function(){return this.a?R(this.a).textStreams.map(function(a){return a.language}).filter(Ia):[]};U.prototype.getTextLanguages=U.prototype.od;U.prototype.qe=function(a,b){if(this.a){var c=R(this.a);this.Pa=a;this.cb=b||"";dh(this,c,!0);}};U.prototype.selectAudioLanguage=U.prototype.qe;
U.prototype.re=function(a,b){if(this.a){var c=R(this.a);this.bb=a;this.xb=b||"";dh(this,c,!0);}};U.prototype.selectTextLanguage=U.prototype.re;U.prototype.vd=function(){return this.w?this.w.isTextVisible():this.mb};U.prototype.isTextTrackVisible=U.prototype.vd;U.prototype.we=function(a){this.w?this.w.setTextVisibility(a):this.mb=a;ih(this);};U.prototype.setTextTrackVisibility=U.prototype.we;U.prototype.jd=function(){return this.b?new Date(1E3*this.b.presentationTimeline.c+1E3*this.f.currentTime):null};
U.prototype.getPlayheadTimeAsDate=U.prototype.jd;U.prototype.md=function(){return this.b?new Date(1E3*this.b.presentationTimeline.c):null};U.prototype.getPresentationStartTimeAsDate=U.prototype.md;U.prototype.Bb=function(){return this.L?this.L.Bb():{total:[],audio:[],video:[],text:[]}};U.prototype.getBufferedInfo=U.prototype.Bb;
U.prototype.getStats=function(){jh(this);this.ab();var a=null,b=null,c=this.f,c=c&&c.getVideoPlaybackQuality?c.getVideoPlaybackQuality():{};this.h&&this.b&&(a=Bc(this.b,Cf(this.h)),b=this.H[a],b=Ac(b.audio,b.video,this.b.periods[a].variants),a=b.video||{});a||(a={});b||(b={});return{width:a.width||0,height:a.height||0,streamBandwidth:b.bandwidth||0,decodedFrames:Number(c.totalVideoFrames),droppedFrames:Number(c.droppedVideoFrames),estimatedBandwidth:this.g?this.g.getBandwidthEstimate():NaN,loadLatency:this.j.loadLatency,
playTime:this.j.playTime,bufferingTime:this.j.bufferingTime,switchHistory:Ea(this.j.switchHistory),stateHistory:Ea(this.j.stateHistory)}};U.prototype.getStats=U.prototype.getStats;
U.prototype.addTextTrack=function(a,b,c,d,e,f){if(!this.a)return Promise.reject();for(var g=R(this.a),h,k=0;k<this.b.periods.length;k++)if(this.b.periods[k]==g){if(k==this.b.periods.length-1){if(h=this.b.presentationTimeline.ka()-g.startTime,Infinity==h)return Promise.reject()}else h=this.b.periods[k+1].startTime-g.startTime;break}var m={id:this.Sc++,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return 1},getSegmentReference:function(b){return 1!=b?null:new L(1,0,
h,function(){return[a]},0,null)},initSegmentReference:null,presentationTimeOffset:0,mimeType:d,codecs:e||"",kind:c,encrypted:!1,keyId:null,language:b,label:f||null,type:"text",primary:!1,trickModeVideo:null,containsEmsgBoxes:!1,roles:[],channelsCount:null};this.hb.push(m.id);g.textStreams.push(m);return Nf(this.a,{text:m}).then(function(){if(!this.C){var a=this.b.periods.indexOf(g),d=Qf(this.a,"text");d&&(this.H[a].text=d.id);this.hb.splice(this.hb.indexOf(m.id),1);dh(this,g,!0);$g(this);return{id:m.id,
active:!1,type:"text",bandwidth:0,language:b,label:f||null,kind:c,width:null,height:null}}}.bind(this))};U.prototype.addTextTrack=U.prototype.addTextTrack;U.prototype.Ub=function(a,b){this.ib.width=a;this.ib.height=b;};U.prototype.setMaxHardwareResolution=U.prototype.Ub;U.prototype.Ec=function(){if(this.a){var a=this.a;if(a.f)a=!1;else if(a.l)a=!1;else{for(var b in a.c){var c=a.c[b];c.Ta&&(c.Ta=!1,Yf(a,c,.1));}a=!0;}}else a=!1;return a};U.prototype.retryStreaming=U.prototype.Ec;U.prototype.ed=function(){return this.b};
U.prototype.getManifest=U.prototype.ed;function gh(a,b,c){b.video&&kh(a,b.video);b.audio&&kh(a,b.audio);var d=Of(a.a);b!=zc(Pf(a.a),Rf(a.a),d?d.variants:[])&&a.j.switchHistory.push({timestamp:Date.now()/1E3,id:b.id,type:"variant",fromAdaptation:c,bandwidth:b.bandwidth});}function fh(a,b,c){kh(a,b);a.j.switchHistory.push({timestamp:Date.now()/1E3,id:b.id,type:"text",fromAdaptation:c,bandwidth:null});}function kh(a,b){var c=Cc(a.b,b);a.H[c]||(a.H[c]={});a.H[c][b.type]=b.id;}
function Vg(a){a.m&&(a.m.na(a.M,"sourceopen"),a.m.na(a.f,"loadeddata"),a.m.na(a.f,"playing"),a.m.na(a.f,"pause"),a.m.na(a.f,"ended"));a.f&&(a.f.removeAttribute("src"),a.f.load());var b=Promise.all([a.g?a.g.stop():null,a.l?a.l.o():null,a.L?a.L.o():null,a.h?a.h.o():null,a.B?a.B.o():null,a.a?a.a.o():null,a.i?a.i.stop():null,a.w?a.w.o():null]);a.l=null;a.L=null;a.h=null;a.B=null;a.a=null;a.i=null;a.w=null;a.b=null;a.lb=null;a.jb=null;a.M=null;a.kb=[];a.H={};a.j=Sg();return b}
function eh(a){return a.i?Vg(a).then(function(){this.C||(this.Lc(!1),this.jb=Tg(this));}.bind(a)):Promise.resolve()}function bh(){return{".drm.servers":"",".drm.clearKeys":"",".drm.advanced":{distinctiveIdentifierRequired:!1,persistentStateRequired:!1,videoRobustness:"",audioRobustness:"",serverCertificate:new Uint8Array(0)}}}
function Rg(a){return{drm:{retryParameters:za(),servers:{},clearKeys:{},advanced:{},delayLicenseRequestUntilPlayed:!1},manifest:{retryParameters:za(),dash:{customScheme:function(a){if(a)return null},clockSyncUri:"",liveDelay:0,baseUrl:"",ignoreDrmInfo:!1,xlinkFailGracefully:!1}},streaming:{retryParameters:za(),failureCallback:a.Zc.bind(a),rebufferingGoal:2,bufferingGoal:10,bufferBehind:30,ignoreTextStreamFailures:!1,startAtSegmentBoundary:!1,smallGapLimit:.5,jumpLargeGaps:!1},abrFactory:F,textDisplayFactory:function(a){return new T(a)}.bind(null,
a.f),abr:{enabled:!0,defaultBandwidthEstimate:5E5,switchInterval:8,bandwidthUpgradeTarget:.85,bandwidthDowngradeTarget:.95,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity}},preferredAudioLanguage:"",preferredTextLanguage:"",restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity},playRangeStart:0,playRangeEnd:Infinity}}
l=U.prototype;l.Zc=function(a){var b=[1001,1002,1003];this.S()&&this.bc&&0<=b.indexOf(a.code)&&(a.severity=1,this.Ec());};function Sg(){return{width:NaN,height:NaN,streamBandwidth:NaN,decodedFrames:NaN,droppedFrames:NaN,estimatedBandwidth:NaN,loadLatency:NaN,playTime:0,bufferingTime:0,switchHistory:[],stateHistory:[]}}
l.Wb=function(a){a.forEach(kc.bind(null,this.l,this.a?Pf(this.a):null,this.a?Rf(this.a):null));var b=Pa(a,function(a){return a.variants.some(uc)});if(!b)throw new p(2,4,9009);if(b<a.length)throw new p(2,4,4011);a.forEach(function(a){jc(a,this.c.restrictions,this.ib)&&this.a&&R(this.a)==a&&$g(this);if(!a.variants.some(uc))throw new p(2,4,4012);}.bind(this));};
l.nb=function(a){kc(this.l,this.a?Pf(this.a):null,this.a?Rf(this.a):null,a);var b=a.variants,c=b.some(uc);jc(a,this.c.restrictions,this.ib)&&this.a&&R(this.a)==a&&$g(this);a=b.some(uc);if(!c)throw new p(2,4,4011);if(!a)throw new p(2,4,4012);};function hh(a,b,c){a.Da?(a.Qa=b,a.ac=c||!1):Uf(a.a,b,c||!1);}function jh(a){if(a.b){var b=Date.now()/1E3;a.Ra?a.j.bufferingTime+=b-a.gb:a.j.playTime+=b-a.gb;a.gb=b;}}
function Zg(a,b){function c(a,b){if(!a)return null;var c=a.findSegmentPosition(b-e.startTime);return null==c?null:(c=a.getSegmentReference(c))?c.startTime+e.startTime:null}var d=Rf(a.a),e=R(a.a),f=c(Pf(a.a),b),d=c(d,b);return null!=d&&null!=f?Math.max(d,f):null!=d?d:null!=f?f:b}l.Ae=function(a,b){this.g&&this.g.segmentDownloaded(a,b);};l.Lc=function(a){jh(this);this.Ra=a;this.ab();if(this.h){var b=this.h;a!=b.i&&(b.i=a,Ef(b,b.h));}this.dispatchEvent(new C("buffering",{buffering:a}));};l.ye=function(){$g(this);};
l.ab=function(){if(!this.C){var a=this.Ra?"buffering":this.f.ended?"ended":this.f.paused?"paused":"playing";var b=Date.now()/1E3;if(this.j.stateHistory.length){var c=this.j.stateHistory[this.j.stateHistory.length-1];c.duration=b-c.timestamp;if(a==c.state)return}this.j.stateHistory.push({timestamp:b,state:a,duration:0});}};l.ze=function(){if(this.B){var a=this.B;a.c.forEach(a.m.bind(a,!0));}this.a&&Xf(this.a);};
function lh(a,b){if(!b||!b.length)return a.Oa(new p(2,4,4012)),null;a.g.setVariants(b);if(a.g.chooseStreams){ha("AbrManager API has changed. AbrManager.chooseStreams() is deprecated. Please implement AbrManager.chooseVariant() to upgrade. The old API will be removed in v2.3.");var c=a.g.chooseStreams(["video","audio"]);return zc(c.audio,c.video,b)}return a.g.chooseVariant()}
function dh(a,b,c){var d=vc(b,a.Pa,a.cb);b=xc(b,a.bb,a.xb);if(d=lh(a,d))gh(a,d,!0),hh(a,d,c);if(c=b[0])fh(a,c,!0),a.Da?a.ha=c:Tf(a.a,c,!0);ah(a);}l.yd=function(a){this.Da=!0;this.g.disable();var b={audio:!1,text:!1},c=vc(a,this.Pa,this.cb,b);a=xc(a,this.bb,this.xb,b);c=lh(this,c);a=a[0]||null;this.ha=this.Qa=null;c&&gh(this,c,!0);a&&(fh(this,a,!0),!Of(this.a)&&c&&c.audio&&b.text&&a.language!=c.audio.language&&(this.w.setTextVisibility(!0),ih(this)));return{variant:c,text:a}};
l.Vc=function(){this.Da=!1;this.c.abr.enabled&&this.g.enable();this.Qa&&(Uf(this.a,this.Qa,this.ac),this.Qa=null);this.ha&&(Tf(this.a,this.ha,!0),this.ha=null);};l.Fd=function(){this.i&&this.i.update&&this.i.update();};l.Od=function(){this.h&&this.h.Lb();};l.Mc=function(a,b){gh(this,a,!0);this.a&&(Uf(this.a,a,b||!1),ah(this));};l.Ke=function(a,b){if(this.a){var c=Of(this.a);(c=zc(a.audio,a.video,c?c.variants:[]))&&this.Mc(c,b);}};
function ah(a){Promise.resolve().then(function(){this.C||this.dispatchEvent(new C("adaptation"));}.bind(a));}function $g(a){Promise.resolve().then(function(){this.C||this.dispatchEvent(new C("trackschanged"));}.bind(a));}function ih(a){a.dispatchEvent(new C("texttrackvisibility"));}l.Oa=function(a){if(!this.C){var b=new C("error",{detail:a});this.dispatchEvent(b);b.defaultPrevented&&(a.handled=!0);}};l.Rd=function(a){this.B?this.B.v(a):this.kb.push(a);};l.$a=function(a){this.dispatchEvent(a);};
l.Sd=function(){if(this.f.error){var a=this.f.error.code;if(1!=a){var b=this.f.error.msExtendedCode;b&&(0>b&&(b+=Math.pow(2,32)),b=b.toString(16));this.Oa(new p(2,3,3016,a,b,this.f.error.message));}}};
l.Dd=function(a){var b=["output-restricted","internal-error"],c=R(this.a),d=!1,e=1==Object.keys(a).length&&"00"==Object.keys(a)[0];c.variants.forEach(function(c){var f=[];c.audio&&f.push(c.audio);c.video&&f.push(c.video);f.forEach(function(f){var g=c.allowedByKeySystem;f.keyId&&(f=a[e?"00":f.keyId],c.allowedByKeySystem=!!f&&0>b.indexOf(f));g!=c.allowedByKeySystem&&(d=!0);});});var f=zc(Pf(this.a),Rf(this.a),c.variants);f&&!f.allowedByKeySystem&&dh(this,c,!0);d&&$g(this);};
l.Ad=function(a,b){if(this.i&&this.i.onExpirationUpdated)this.i.onExpirationUpdated(a,b);this.dispatchEvent(new C("expirationupdated"));};
l.pe=function(a){if(this.C)return Promise.resolve();if(this.b&&this.b.presentationTimeline){if(a<this.b.presentationTimeline.ca()||a>this.b.presentationTimeline.qa())return Promise.reject();var b=Rf(this.a);if(!b){a:{for(b=this.b.periods.length-1;0<b;--b)if(a>=this.b.periods[b].startTime)break a;b=0;}b=this.b.periods[b].variants[0].video;}a=b.findSegmentPosition(a);return(a=null!=a?b.getSegmentReference(a):null)?mh(this,a):Promise.reject()}return Promise.resolve()};U.prototype.segmentExist=U.prototype.pe;
function mh(a,b){var c=A(b.a(),za());if(b.P||null!=b.G){var d="bytes="+b.P+"-";null!=b.G&&(d+=b.G);c.headers.Range=d;}return a.v.request(1,c).then(function(a){return a.data})}function V(a){if(!a||a.constructor!=U)throw new p(2,9,9008);this.a=null;this.b=a;this.c=nh(this);this.f=null;this.v=!1;this.j=null;this.i=-1;this.l=0;this.h=this.g=null;}n("shaka.offline.Storage",V);function oh(){return!!window.indexedDB}V.support=oh;V.prototype.o=function(){var a=this.a,b=this.h?this.h.o()["catch"](function(){}).then(function(){if(a)return a.o()}):Promise.resolve();this.c=this.b=this.h=this.a=null;return b};V.prototype.destroy=V.prototype.o;
V.prototype.configure=function(a){Da(this.c,a,nh(this),{},"");};V.prototype.configure=V.prototype.configure;
V.prototype.Ie=function(a,b,c){function d(a){f=a;}if(this.v)return Promise.reject(new p(2,9,9006));this.v=!0;var e,f=null;return ph(this).then(function(){W(this);return qh(this,a,d,c)}.bind(this)).then(function(c){W(this);this.g=c.manifest;this.f=c.$c;if(this.g.presentationTimeline.S()||this.g.presentationTimeline.xa())throw new p(2,9,9005,a);this.m(this.g.periods);this.i=this.a.c.manifest++;this.l=0;c=b||{};var d=this.g.periods.map(this.C.bind(this)),f=this.f.b,g=xb(this.f);if(f){if(!g.length)throw new p(2,
9,9007,a);f.initData=[];}e={key:this.i,originalManifestUri:a,duration:this.l,size:0,expiration:this.f.pb(),periods:d,sessionIds:this.c.usePersistentLicense?g:[],drmInfo:f,appMetadata:c};return Gg(this.h,e)}.bind(this)).then(function(){W(this);if(f)throw f;return rh(this)}.bind(this)).then(function(){return wg(e)}.bind(this))["catch"](function(a){return rh(this)["catch"](Ga).then(function(){throw a;})}.bind(this))};V.prototype.store=V.prototype.Ie;
V.prototype.remove=function(a){function b(a){6013!=a.code&&(e=a);}var c=a.offlineUri,d=S.a(c);if(null==d)return Promise.reject(new p(2,9,9004,c));var e=null,f,g;return ph(this).then(function(){W(this);return this.a.get("manifest",d)}.bind(this)).then(function(a){W(this);if(!a)throw new p(2,9,9003,c);f=a;a=Jg(f);g=new pb({Va:this.b.v,onError:b,Kb:function(){},onExpirationUpdated:function(){},onEvent:function(){}});g.configure(this.b.getConfiguration().drm);return g.init(a,this.c.usePersistentLicense||
!1)}.bind(this)).then(function(){return ub(g,f.sessionIds)}.bind(this)).then(function(){return g.o()}.bind(this)).then(function(){W(this);if(e)throw e;var b=f.periods.map(function(a){return a.streams.map(function(a){var b=a.segments.map(function(a){return S.b(a.uri)});a.initSegmentUri&&b.push(S.b(a.initSegmentUri));return b}).reduce(x,[])}).reduce(x,[]),c=0,d=b.length,g=this.c.progressCallback;return tg(this.a,b,function(){c++;g(a,c/d);})}.bind(this)).then(function(){W(this);this.c.progressCallback(a,
1);return this.a.remove("manifest",d)}.bind(this))};V.prototype.remove=V.prototype.remove;V.prototype.list=function(){var a=[];return ph(this).then(function(){W(this);return this.a.forEach("manifest",function(b){a.push(wg(b));})}.bind(this)).then(function(){return a})};V.prototype.list=V.prototype.list;
function qh(a,b,c,d){function e(){}var f=a.b.v,g=a.b.getConfiguration(),h,k,m;return ie(b,f,g.manifest.retryParameters,d).then(function(a){W(this);m=new a;m.configure(g.manifest);return m.start(b,{networkingEngine:f,filterAllPeriods:this.m.bind(this),filterNewPeriod:this.w.bind(this),onTimelineRegionAdded:function(){},onEvent:function(){},onError:c})}.bind(a)).then(function(a){W(this);h=a;k=new pb({Va:f,onError:c,Kb:e,onExpirationUpdated:function(){},onEvent:function(){}});k.configure(g.drm);return k.init(h,
this.c.usePersistentLicense||!1)}.bind(a)).then(function(){W(this);return sh(h)}.bind(a)).then(function(){W(this);return tb(k)}.bind(a)).then(function(){W(this);return m.stop()}.bind(a)).then(function(){W(this);return{manifest:h,$c:k}}.bind(a))["catch"](function(a){if(m)return m.stop().then(function(){throw a;});throw a;})}
V.prototype.B=function(a){for(var b=[],c=gc(this.b.getConfiguration().preferredAudioLanguage),d=[0,ec,fc],e=a.filter(function(a){return"variant"==a.type}),d=d.map(function(a){return e.filter(function(b){b=gc(b.language);return dc(a,c,b)})}),f,g=0;g<d.length;g++)if(d[g].length){f=d[g];break}f||(d=e.filter(function(a){return a.primary}),d.length&&(f=d));f||(f=e,e.map(function(a){return a.language}).filter(Ia));var h=f.filter(function(a){return a.height&&480>=a.height});h.length&&(h.sort(function(a,
b){return b.height-a.height}),f=h.filter(function(a){return a.height==h[0].height}));f.sort(function(a,b){return a.bandwidth-b.bandwidth});f.length&&b.push(f[Math.floor(f.length/2)]);b.push.apply(b,a.filter(function(a){return"text"==a.type}));return b};function nh(a){return{trackSelectionCallback:a.B.bind(a),progressCallback:function(a,c){if(a||c)return null},usePersistentLicense:!0}}
function ph(a){if(!window.indexedDB)return Promise.reject(new p(2,9,9E3));if(a.a)return Promise.resolve();var b=a.b.v,c=a.b.getConfiguration().streaming.retryParameters,d=a.c;return vg().then(function(a){this.a=a;this.h=new Eg(a,b,c,d);}.bind(a))}V.prototype.m=function(a){a.forEach(this.w.bind(this));};
V.prototype.w=function(a){var b=null;if(this.j){var c=this.j.filter(function(a){return"variant"==a.type})[0];c&&(b=sc(a,c));}var d=c=null;b&&(b.audio&&(c=b.audio),b.video&&(d=b.video));kc(this.f,c,d,a);jc(a,this.b.getConfiguration().restrictions,{width:Infinity,height:Infinity});};function rh(a){var b=a.f?a.f.o():Promise.resolve();a.f=null;a.g=null;a.v=!1;a.j=null;a.i=-1;return b}
function sh(a){var b=a.periods.map(function(a){return a.variants}).reduce(x,[]).map(function(a){var b=[];a.audio&&b.push(a.audio);a.video&&b.push(a.video);return b}).reduce(x,[]).filter(Ia);a=a.periods.map(function(a){return a.textStreams}).reduce(x,[]);b.push.apply(b,a);return Promise.all(b.map(function(a){return a.createSegmentIndex()}))}
V.prototype.C=function(a){var b,c,d=qc(a,null,null),e=rc(a,null),d=this.c.trackSelectionCallback(d.concat(e));this.j||(this.j=d,this.m(this.g.periods));for(e=d.length-1;0<e;--e){var f=!1;for(c=e-1;0<=c;--c)if(d[e].type==d[c].type&&d[e].kind==d[c].kind&&d[e].language==d[c].language){f=!0;break}if(f)break}f=[];for(e=0;e<d.length;e++)(b=sc(a,d[e]))?(b.audio&&((c=f.filter(function(a){return a.id==b.audio.id})[0])?c.variantIds.push(b.id):(c=b.video?b.bandwidth/2:b.bandwidth,f.push(th(this,a,b.audio,c,
b.id)))),b.video&&((c=f.filter(function(a){return a.id==b.video.id})[0])?c.variantIds.push(b.id):(c=b.audio?b.bandwidth/2:b.bandwidth,f.push(th(this,a,b.video,c,b.id))))):f.push(th(this,a,tc(a,d[e]),0));return{startTime:a.startTime,streams:f}};
function th(a,b,c,d,e){var f=[],g=a.g.presentationTimeline.ca();var h=g;for(var k=c.findSegmentPosition(g),m=null!=k?c.getSegmentReference(k):null;m;)h=a.a.c.segment++,Fg(a.h,c.type,m,(m.endTime-m.startTime)*d/8,{key:h,data:null,manifestKey:a.i,streamNumber:c.id,segmentNumber:h}),f.push({startTime:m.startTime,endTime:m.endTime,uri:S.c(a.i,c.id,h)}),h=m.endTime+b.startTime,m=c.getSegmentReference(++k);a.l=Math.max(a.l,h-g);b=null;c.initSegmentReference&&(h=a.a.c.segment++,b=S.c(a.i,c.id,h),Fg(a.h,
c.contentType,c.initSegmentReference,0,{key:h,data:null,manifestKey:a.i,streamNumber:c.id,segmentNumber:-1}));a=[];null!=e&&a.push(e);return{id:c.id,primary:c.primary,presentationTimeOffset:c.presentationTimeOffset||0,contentType:c.type,mimeType:c.mimeType,codecs:c.codecs,frameRate:c.frameRate,kind:c.kind,language:c.language,label:c.label,width:c.width||null,height:c.height||null,initSegmentUri:b,encrypted:c.encrypted,keyId:c.keyId,segments:f,variantIds:a}}
function W(a){if(!a.b)throw new p(2,9,9002);}Wg.offline=oh;n("shaka.polyfill.installAll",function(){for(var a=0;a<uh.length;++a)uh[a]();});var uh=[];function vh(a){uh.push(a);}n("shaka.polyfill.register",vh);vh(function(){var a=navigator.userAgent;a&&0<=a.indexOf("CrKey")&&delete window.indexedDB;});var wh;function xh(a,b,c){if("input"==a)switch(this.type){case "range":a="change";}wh.call(this,a,b,c);}vh(function(){0>navigator.userAgent.indexOf("Trident/")||HTMLInputElement.prototype.addEventListener==xh||(wh=HTMLInputElement.prototype.addEventListener,HTMLInputElement.prototype.addEventListener=xh);});vh(function(){if(4503599627370497!=Math.round(4503599627370497)){var a=Math.round;Math.round=function(b){var c=b;4503599627370496>=b&&(c=a(b));return c};}});function yh(a){this.f=[];this.b=[];this.a=[];(new N).$("pssh",this.c.bind(this)).parse(a.buffer);}yh.prototype.c=function(a){if(!(1<a.version)){var b=mb(a.u.La(16)),c=[];if(0<a.version)for(var d=a.u.D(),e=0;e<d;++e){var f=mb(a.u.La(16));c.push(f);}d=a.u.D();a.u.J(d);this.b.push.apply(this.b,c);this.f.push(b);this.a.push({start:a.start,end:a.start+a.size-1});}};function zh(a,b){try{var c=new Ah(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}
function Ah(a,b){this.keySystem=a;for(var c=!1,d=0;d<b.length;++d){var e=b[d];var f={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:e.initDataTypes,sessionTypes:["temporary"],label:e.label},g=!1;if(e.audioCapabilities)for(var h=0;h<e.audioCapabilities.length;++h){var k=e.audioCapabilities[h];if(k.contentType){g=!0;var m=k.contentType.split(";")[0];MSMediaKeys.isTypeSupported(this.keySystem,m)&&(f.audioCapabilities.push(k),c=!0);}}if(e.videoCapabilities)for(h=
0;h<e.videoCapabilities.length;++h)k=e.videoCapabilities[h],k.contentType&&(g=!0,m=k.contentType.split(";")[0],MSMediaKeys.isTypeSupported(this.keySystem,m)&&(f.videoCapabilities.push(k),c=!0));g||(c=MSMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));"required"==e.persistentState&&(c=!1);if(c){this.a=f;return}}e=Error("Unsupported keySystem");e.name="NotSupportedError";e.code=DOMException.NOT_SUPPORTED_ERR;throw e;}Ah.prototype.createMediaKeys=function(){var a=new Bh(this.keySystem);return Promise.resolve(a)};
Ah.prototype.getConfiguration=function(){return this.a};function Ch(a){var b=this.mediaKeys;b&&b!=a&&Dh(b,null);delete this.mediaKeys;return(this.mediaKeys=a)?Dh(a,this):Promise.resolve()}function Bh(a){this.a=new MSMediaKeys(a);this.b=new Ra;}Bh.prototype.createSession=function(a){if("temporary"!=(a||"temporary"))throw new TypeError("Session type "+a+" is unsupported on this platform.");return new Eh(this.a)};Bh.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
function Dh(a,b){function c(){b.msSetMediaKeys(d.a);b.removeEventListener("loadedmetadata",c);}Sa(a.b);if(!b)return Promise.resolve();B(a.b,b,"msneedkey",Fh);var d=a;try{return 1<=b.readyState?b.msSetMediaKeys(a.a):b.addEventListener("loadedmetadata",c),Promise.resolve()}catch(e){return Promise.reject(e)}}function Eh(a){ca.call(this);this.c=null;this.g=a;this.b=this.a=null;this.f=new Ra;this.sessionId="";this.expiration=NaN;this.closed=new u;this.keyStatuses=new Gh;}ba(Eh);l=Eh.prototype;
l.generateRequest=function(a,b){this.a=new u;try{this.c=this.g.createSession("video/mp4",new Uint8Array(b),null),B(this.f,this.c,"mskeymessage",this.Jd.bind(this)),B(this.f,this.c,"mskeyadded",this.Hd.bind(this)),B(this.f,this.c,"mskeyerror",this.Id.bind(this)),Hh(this,"status-pending");}catch(c){this.a.reject(c);}return this.a};l.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};l.update=function(a){this.b=new u;try{this.c.update(new Uint8Array(a));}catch(b){this.b.reject(b);}return this.b};
l.close=function(){try{this.c.close(),this.closed.resolve(),Sa(this.f);}catch(a){this.closed.reject(a);}return this.closed};l.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};
function Fh(a){var b=document.createEvent("CustomEvent");b.initCustomEvent("encrypted",!1,!1,null);b.initDataType="cenc";var c=a.initData;if(c){var d=new yh(c);if(1>=d.a.length)a=c;else{var e=[];for(a=0;a<d.a.length;a++)e.push(c.subarray(d.a[a].start,d.a[a].end+1));c=Ma(e,Ih);for(a=d=0;a<c.length;a++)d+=c[a].length;d=new Uint8Array(d);for(a=e=0;a<c.length;a++)d.set(c[a],e),e+=c[a].length;a=d;}}else a=c;b.initData=a;this.dispatchEvent(b);}function Ih(a,b){return nb(a,b)}
l.Jd=function(a){this.a&&(this.a.resolve(),this.a=null);this.dispatchEvent(new C("message",{messageType:void 0==this.keyStatuses.a?"licenserequest":"licenserenewal",message:a.message.buffer}));};l.Hd=function(){this.a?(Hh(this,"usable"),this.a.resolve(),this.a=null):this.b&&(Hh(this,"usable"),this.b.resolve(),this.b=null);};
l.Id=function(){var a=Error("EME PatchedMediaKeysMs key error");a.errorCode=this.c.error;if(this.a)this.a.reject(a),this.a=null;else if(this.b)this.b.reject(a),this.b=null;else switch(this.c.error.code){case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:Hh(this,"output-not-allowed");default:Hh(this,"internal-error");}};function Hh(a,b){var c=a.keyStatuses;c.size=void 0==b?0:1;c.a=b;a.dispatchEvent(new C("keystatuseschange"));}
function Gh(){this.size=0;this.a=void 0;}var Jh;l=Gh.prototype;l.forEach=function(a){this.a&&a(this.a,Jh);};l.get=function(a){if(this.has(a))return this.a};l.has=function(a){var b=Jh;return this.a&&nb(new Uint8Array(a),new Uint8Array(b))?!0:!1};l.entries=function(){};l.keys=function(){};l.values=function(){};function Kh(){return Promise.reject(Error("The key system specified is not supported."))}function Lh(a){return a?Promise.reject(Error("MediaKeys not supported.")):Promise.resolve()}function Mh(){throw new TypeError("Illegal constructor.");}Mh.prototype.createSession=function(){};Mh.prototype.setServerCertificate=function(){};function Nh(){throw new TypeError("Illegal constructor.");}Nh.prototype.getConfiguration=function(){};Nh.prototype.createMediaKeys=function(){};var Oh="";function Ph(a){Oh=a;Qh=(new Uint8Array([0])).buffer;navigator.requestMediaKeySystemAccess=Rh;delete HTMLMediaElement.prototype.mediaKeys;HTMLMediaElement.prototype.mediaKeys=null;HTMLMediaElement.prototype.setMediaKeys=Sh;window.MediaKeys=Th;window.MediaKeySystemAccess=Uh;}function Vh(a){var b=Oh;return b?b+a.charAt(0).toUpperCase()+a.slice(1):a}function Rh(a,b){try{var c=new Uh(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}
function Sh(a){var b=this.mediaKeys;b&&b!=a&&Wh(b,null);delete this.mediaKeys;(this.mediaKeys=a)&&Wh(a,this);return Promise.resolve()}
function Uh(a,b){this.a=this.keySystem=a;var c=!1;"org.w3.clearkey"==a&&(this.a="webkit-org.w3.clearkey",c=!1);var d=!1;var e=document.getElementsByTagName("video");var f=e.length?e[0]:document.createElement("video");for(var g=0;g<b.length;++g){e=b[g];var h={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:e.initDataTypes,sessionTypes:["temporary"],label:e.label},k=!1;if(e.audioCapabilities)for(var m=0;m<e.audioCapabilities.length;++m){var q=
e.audioCapabilities[m];if(q.contentType){var k=!0,v=q.contentType.split(";")[0];f.canPlayType(v,this.a)&&(h.audioCapabilities.push(q),d=!0);}}if(e.videoCapabilities)for(m=0;m<e.videoCapabilities.length;++m)q=e.videoCapabilities[m],q.contentType&&(k=!0,f.canPlayType(q.contentType,this.a)&&(h.videoCapabilities.push(q),d=!0));k||(d=f.canPlayType("video/mp4",this.a)||f.canPlayType("video/webm",this.a));"required"==e.persistentState&&(c?(h.persistentState="required",h.sessionTypes=["persistent-license"]):
d=!1);if(d){this.b=h;return}}c="Unsupported keySystem";if("org.w3.clearkey"==a||"com.widevine.alpha"==a)c="None of the requested configurations were supported.";c=Error(c);c.name="NotSupportedError";c.code=DOMException.NOT_SUPPORTED_ERR;throw c;}Uh.prototype.createMediaKeys=function(){var a=new Th(this.a);return Promise.resolve(a)};Uh.prototype.getConfiguration=function(){return this.b};function Th(a){this.g=a;this.b=null;this.a=new Ra;this.c=[];this.f={};}
function Wh(a,b){a.b=b;Sa(a.a);var c=Oh;b&&(B(a.a,b,c+"needkey",a.Wd.bind(a)),B(a.a,b,c+"keymessage",a.Vd.bind(a)),B(a.a,b,c+"keyadded",a.Td.bind(a)),B(a.a,b,c+"keyerror",a.Ud.bind(a)));}l=Th.prototype;l.createSession=function(a){var b=a||"temporary";if("temporary"!=b&&"persistent-license"!=b)throw new TypeError("Session type "+a+" is unsupported on this platform.");a=this.b||document.createElement("video");a.src||(a.src="about:blank");b=new Xh(a,this.g,b);this.c.push(b);return b};
l.setServerCertificate=function(){return Promise.resolve(!1)};l.Wd=function(a){var b=document.createEvent("CustomEvent");b.initCustomEvent("encrypted",!1,!1,null);b.initDataType="webm";b.initData=a.initData;this.b.dispatchEvent(b);};l.Vd=function(a){var b=Yh(this,a.sessionId);b&&(a=new C("message",{messageType:void 0==b.keyStatuses.a?"licenserequest":"licenserenewal",message:a.message}),b.b&&(b.b.resolve(),b.b=null),b.dispatchEvent(a));};
l.Td=function(a){if(a=Yh(this,a.sessionId))$h(a,"usable"),a.a&&a.a.resolve(),a.a=null;};
l.Ud=function(a){var b=Yh(this,a.sessionId);if(b){var c=Error("EME v0.1b key error");c.errorCode=a.errorCode;c.errorCode.systemCode=a.systemCode;!a.sessionId&&b.b?(c.method="generateRequest",45==a.systemCode&&(c.message="Unsupported session type."),b.b.reject(c),b.b=null):a.sessionId&&b.a?(c.method="update",b.a.reject(c),b.a=null):(c=a.systemCode,a.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?$h(b,"output-restricted"):1==c?$h(b,"expired"):$h(b,"internal-error"));}};
function Yh(a,b){var c=a.f[b];return c?c:(c=a.c.shift())?(c.sessionId=b,a.f[b]=c):null}function Xh(a,b,c){ca.call(this);this.f=a;this.h=!1;this.a=this.b=null;this.c=b;this.g=c;this.sessionId="";this.expiration=NaN;this.closed=new u;this.keyStatuses=new ai;}ba(Xh);
function bi(a,b,c){if(a.h)return Promise.reject(Error("The session is already initialized."));a.h=!0;try{if("persistent-license"==a.g)if(c)var d=new Uint8Array(fb("LOAD_SESSION|"+c));else{var e=fb("PERSISTENT|"),f=new Uint8Array(e.byteLength+b.byteLength);f.set(new Uint8Array(e),0);f.set(new Uint8Array(b),e.byteLength);d=f;}else d=new Uint8Array(b);}catch(h){return Promise.reject(h)}a.b=new u;var g=Vh("generateKeyRequest");try{a.f[g](a.c,d);}catch(h){if("InvalidStateError"!=h.name)return a.b=null,Promise.reject(h);
setTimeout(function(){try{this.f[g](this.c,d);}catch(k){this.b.reject(k),this.b=null;}}.bind(a),10);}return a.b}l=Xh.prototype;
l.Xb=function(a,b){if(this.a)this.a.then(this.Xb.bind(this,a,b))["catch"](this.Xb.bind(this,a,b));else{this.a=a;if("webkit-org.w3.clearkey"==this.c){var c=E(b);var d=JSON.parse(c);"oct"!=d.keys[0].kty&&(this.a.reject(Error("Response is not a valid JSON Web Key Set.")),this.a=null);c=kb(d.keys[0].k);d=kb(d.keys[0].kid);}else c=new Uint8Array(b),d=null;var e=Vh("addKey");try{this.f[e](this.c,c,d,this.sessionId);}catch(f){this.a.reject(f),this.a=null;}}};
function $h(a,b){var c=a.keyStatuses;c.size=void 0==b?0:1;c.a=b;a.dispatchEvent(new C("keystatuseschange"));}l.generateRequest=function(a,b){return bi(this,b,null)};l.load=function(a){return"persistent-license"==this.g?bi(this,null,a):Promise.reject(Error("Not a persistent session."))};l.update=function(a){var b=new u;this.Xb(b,a);return b};
l.close=function(){if("persistent-license"!=this.g){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;var a=Vh("cancelKeyRequest");try{this.f[a](this.c,this.sessionId);}catch(b){}}this.closed.resolve();return this.closed};l.remove=function(){return"persistent-license"!=this.g?Promise.reject(Error("Not a persistent session.")):this.close()};function ai(){this.size=0;this.a=void 0;}var Qh;l=ai.prototype;l.forEach=function(a){this.a&&a(this.a,Qh);};l.get=function(a){if(this.has(a))return this.a};
l.has=function(a){var b=Qh;return this.a&&nb(new Uint8Array(a),new Uint8Array(b))?!0:!1};l.entries=function(){};l.keys=function(){};l.values=function(){};vh(function(){!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(HTMLMediaElement.prototype.webkitGenerateKeyRequest?Ph("webkit"):HTMLMediaElement.prototype.generateKeyRequest?Ph(""):window.MSMediaKeys?(Jh=(new Uint8Array([0])).buffer,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=Ch,window.MediaKeys=Bh,window.MediaKeySystemAccess=Ah,navigator.requestMediaKeySystemAccess=
zh):(navigator.requestMediaKeySystemAccess=Kh,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=Lh,window.MediaKeys=Mh,window.MediaKeySystemAccess=Nh));});function ci(){var a=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(){var b=a.apply(this,arguments);b.abort=function(){};return b};}function di(){var a=SourceBuffer.prototype.remove;SourceBuffer.prototype.remove=function(b,c){return a.call(this,b,c-.001)};}
function ei(){var a=MediaSource.prototype.endOfStream;MediaSource.prototype.endOfStream=function(){for(var b,c=0,f=0;f<this.sourceBuffers.length;++f)b=this.sourceBuffers[f],b=b.buffered.end(b.buffered.length-1),c=Math.max(c,b);if(!isNaN(this.duration)&&c<this.duration)for(this.jc=!0,f=0;f<this.sourceBuffers.length;++f)b=this.sourceBuffers[f],b.ec=!1;return a.apply(this,arguments)};var b=!1,c=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(){var a=c.apply(this,
arguments);a.mediaSource_=this;a.addEventListener("updateend",fi,!1);b||(this.addEventListener("sourceclose",gi,!1),b=!0);return a};}function fi(a){var b=a.target,c=b.mediaSource_;if(c.jc){a.preventDefault();a.stopPropagation();a.stopImmediatePropagation();b.ec=!0;for(a=0;a<c.sourceBuffers.length;++a)if(0==c.sourceBuffers[a].ec)return;c.jc=!1;}}
function gi(a){a=a.target;for(var b=0;b<a.sourceBuffers.length;++b)a.sourceBuffers[b].removeEventListener("updateend",fi,!1);a.removeEventListener("sourceclose",gi,!1);}function hi(){var a=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(b){return"mp2t"==b.split(/ *; */)[0].split("/")[1]?!1:a(b)};}
function ii(){var a=MediaSource.isTypeSupported,b=/^dv(?:he|av)\./;MediaSource.isTypeSupported=function(c){for(var d,e,f=c.split(/ *; */),g=f[0],h={},k=1;k<f.length;++k)d=f[k].split("="),e=d[0],d=d[1].replace(/"(.*)"/,"$1"),h[e]=d;d=h.codecs;if(!d)return a(c);var m=!1,q=!1;c=d.split(",").filter(function(a){if(b.test(a))return q=!0,!1;/^(hev|hvc)1\.2/.test(a)&&(m=!0);return!0});q&&(m=!1);h.codecs=c.join(",");m&&(h.eotf="smpte2084");for(e in h)d=h[e],g+="; "+e+'="'+d+'"';return cast.__platform__.canDisplayType(g)};}
vh(function(){if(window.MediaSource)if(window.cast&&cast.__platform__&&cast.__platform__.canDisplayType)ii();else if(navigator.vendor&&0<=navigator.vendor.indexOf("Apple")){var a=navigator.appVersion;hi();0<=a.indexOf("Version/8")?window.MediaSource=null:0<=a.indexOf("Version/9")?ci():0<=a.indexOf("Version/10")?(ci(),ei()):0<=a.indexOf("Version/11")&&(ci(),di());}});function X(a){this.c=[];this.b=[];this.Ba=ji;if(a)try{a(this.ma.bind(this),this.a.bind(this));}catch(b){this.a(b);}}var ji=0;function ki(a){var b=new X;b.ma(void 0);return b.then(function(){return a})}function li(a){var b=new X;b.a(a);return b}function mi(a){function b(a,b,c){a.Ba==ji&&(e[b]=c,d++,d==e.length&&a.ma(e));}var c=new X;if(!a.length)return c.ma([]),c;for(var d=0,e=Array(a.length),f=c.a.bind(c),g=0;g<a.length;++g)a[g]&&a[g].then?a[g].then(b.bind(null,c,g),f):b(c,g,a[g]);return c}
function ni(a){for(var b=new X,c=b.ma.bind(b),d=b.a.bind(b),e=0;e<a.length;++e)a[e]&&a[e].then?a[e].then(c,d):c(a[e]);return b}X.prototype.then=function(a,b){var c=new X;switch(this.Ba){case 1:oi(this,c,a);break;case 2:oi(this,c,b);break;case ji:this.c.push({O:c,zb:a}),this.b.push({O:c,zb:b});}return c};X.prototype["catch"]=function(a){return this.then(void 0,a)};
X.prototype.ma=function(a){if(this.Ba==ji){this.f=a;this.Ba=1;for(a=0;a<this.c.length;++a)oi(this,this.c[a].O,this.c[a].zb);this.c=[];this.b=[];}};X.prototype.a=function(a){if(this.Ba==ji){this.f=a;this.Ba=2;for(a=0;a<this.b.length;++a)oi(this,this.b[a].O,this.b[a].zb);this.c=[];this.b=[];}};
function oi(a,b,c){pi.push(function(){if(c&&"function"==typeof c){try{var a=c(this.f);}catch(f){b.a(f);return}try{var e=a&&a.then;}catch(f){b.a(f);return}a instanceof X?a==b?b.a(new TypeError("Chaining cycle detected")):a.then(b.ma.bind(b),b.a.bind(b)):e?qi(a,e,b):b.ma(a);}else 1==this.Ba?b.ma(this.f):b.a(this.f);}.bind(a));null==ri&&(ri=si(ti));}
function qi(a,b,c){try{var d=!1;b.call(a,function(a){if(!d){d=!0;try{var b=a&&a.then;}catch(g){c.a(g);return}b?qi(a,b,c):c.ma(a);}},c.a.bind(c));}catch(e){c.a(e);}}function ti(){for(;pi.length;){null!=ri&&(ui(ri),ri=null);var a=pi;pi=[];for(var b=0;b<a.length;++b)a[b]();}}function si(){return 0}function ui(){}var ri=null,pi=[];
vh(function(a){window.setImmediate?(si=function(a){return window.setImmediate(a)},ui=function(a){return window.clearImmediate(a)}):(si=function(a){return window.setTimeout(a,0)},ui=function(a){return window.clearTimeout(a)});if(!window.Promise||a)window.Promise=X,window.Promise.resolve=ki,window.Promise.reject=li,window.Promise.all=mi,window.Promise.race=ni,window.Promise.prototype.then=X.prototype.then,window.Promise.prototype["catch"]=X.prototype["catch"];});vh(function(){if(window.HTMLMediaElement){var a=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){var b=a.apply(this,arguments);b&&b["catch"](function(){});return b};}});function vi(){return{droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}}vh(function(){if(window.HTMLVideoElement){var a=HTMLVideoElement.prototype;!a.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in a&&(a.getVideoPlaybackQuality=vi);}});function wi(a,b,c){return new window.TextTrackCue(a,b,c)}function xi(a,b,c){return new window.TextTrackCue(a+"-"+b+"-"+c,a,b,c)}vh(function(){var a=window.navigator.userAgent.indexOf("Edge/");if((-1!=window.navigator.userAgent.indexOf("Trident/")||-1!=a||!window.VTTCue)&&window.TextTrackCue)if(a=TextTrackCue.length,3==a)window.VTTCue=wi;else if(6==a)window.VTTCue=xi;else{try{var b=!!wi(1,2,"");}catch(c){b=!1;}b&&(window.VTTCue=wi);}});function Y(a,b,c){this.startTime=a;this.endTime=b;this.payload=c;this.region={x:0,y:0,width:100,height:100};this.position=null;this.positionAlign=yi;this.size=100;this.textAlign=zi;this.writingDirection=Ai;this.lineInterpretation=Bi;this.line=null;this.lineHeight="";this.lineAlign=Ci;this.displayAlign=Di;this.fontSize=this.backgroundColor=this.color="";this.fontWeight=Ei;this.fontStyle=Fi;this.fontFamily="";this.textDecoration=[];this.wrapLine=!0;this.id="";}n("shaka.text.Cue",Y);var yi="auto";
Y.positionAlign={LEFT:"line-left",RIGHT:"line-right",CENTER:"center",AUTO:yi};var zi="center",Gi={LEFT:"left",RIGHT:"right",CENTER:zi,START:"start",END:"end"};Y.textAlign=Gi;var Di="before",Hi={BEFORE:Di,CENTER:"center",AFTER:"after"};Y.displayAlign=Hi;var Ai=0,Mg=2,Ng=3;Y.writingDirection={HORIZONTAL_LEFT_TO_RIGHT:Ai,HORIZONTAL_RIGHT_TO_LEFT:1,VERTICAL_LEFT_TO_RIGHT:Mg,VERTICAL_RIGHT_TO_LEFT:Ng};var Bi=0,Og=1;Y.lineInterpretation={LINE_NUMBER:Bi,PERCENTAGE:Og};
var Ci="center",Ii={CENTER:Ci,START:"start",END:"end"};Y.lineAlign=Ii;var Ei=400;Y.fontWeight={NORMAL:Ei,BOLD:700};var Fi="normal",Ji={NORMAL:Fi,ITALIC:"italic",OBLIQUE:"oblique"};Y.fontStyle=Ji;Y.textDecoration={UNDERLINE:"underline",LINE_THROUGH:"lineThrough",OVERLINE:"overline"};function Ki(){}Ki.prototype.parseInit=function(){};
Ki.prototype.parseMedia=function(a,b){var c=E(a),d=[],e=new DOMParser,f=null;try{f=e.parseFromString(c,"text/xml");}catch(kj){throw new p(2,2,2005);}if(f){var g=f.getElementsByTagName("tt")[0];if(g){e=g.getAttribute("ttp:frameRate");f=g.getAttribute("ttp:subFrameRate");var h=g.getAttribute("ttp:frameRateMultiplier");var k=g.getAttribute("ttp:tickRate");c=g.getAttribute("xml:space")||"default";}else throw new p(2,2,2005);if("default"!=c&&"preserve"!=c)throw new p(2,2,2005);c="default"==c;e=new Li(e,
f,h,k);f=Mi(g.getElementsByTagName("styling")[0]);h=Mi(g.getElementsByTagName("layout")[0]);g=Mi(g.getElementsByTagName("body")[0]);for(k=0;k<g.length;k++){var m=g[k];var q=b.periodStart;var v=e,r=f,t=h,y=c;if(m.hasAttribute("begin")||m.hasAttribute("end")||!/^\s*$/.test(m.textContent)){Ni(m,y);var y=Oi(m.getAttribute("begin"),v),w=Oi(m.getAttribute("end"),v),v=Oi(m.getAttribute("dur"),v),Zh=m.textContent;null==w&&null!=v&&(w=y+v);if(null==y||null==w)throw new p(2,2,2001);q=new Y(y+q,w+q,Zh);y=Pi(m,
"region",t);t=q;"rtl"==Z(m,y,r,"tts:direction")&&(t.writingDirection=1);w=Z(m,y,r,"tts:writingMode");"tb"==w||"tblr"==w?t.writingDirection=Mg:"tbrl"==w?t.writingDirection=Ng:"rltb"==w||"rl"==w?t.writingDirection=1:w&&(t.writingDirection=Ai);if(w=Z(m,y,r,"tts:origin"))if(w=Qi.exec(w))t.region.x=Number(w[1]),t.region.y=Number(w[2]);if(w=Z(m,y,r,"tts:extent"))if(w=Qi.exec(w))t.region.width=Number(w[1]),t.region.height=Number(w[2]);if(w=Z(m,y,r,"tts:textAlign"))t.positionAlign=Ri[w],t.lineAlign=Si[w],
t.textAlign=Gi[w.toUpperCase()];if(w=Z(m,y,r,"tts:displayAlign"))t.displayAlign=Hi[w.toUpperCase()];if(w=Z(m,y,r,"tts:color"))t.color=w;if(w=Z(m,y,r,"tts:backgroundColor"))t.backgroundColor=w;if(w=Z(m,y,r,"tts:fontFamily"))t.fontFamily=w;(w=Z(m,y,r,"tts:fontWeight"))&&"bold"==w&&(t.fontWeight=700);(w=Z(m,y,r,"tts:wrapOption"))&&"noWrap"==w&&(t.wrapLine=!1);(w=Z(m,y,r,"tts:lineHeight"))&&w.match(Ti)&&(t.lineHeight=w);(w=Z(m,y,r,"tts:fontSize"))&&w.match(Ti)&&(t.fontSize=w);if(w=Z(m,y,r,"tts:fontStyle"))t.fontStyle=
Ji[w.toUpperCase()];(y=Ui(y,r,"tts:textDecoration"))&&Vi(t,y);(m=Wi(m,r,"tts:textDecoration"))&&Vi(t,m);}else q=null;q&&d.push(q);}}return d};
var Xi=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Yi=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,Zi=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,$i=/^(\d*\.?\d*)f$/,aj=/^(\d*\.?\d*)t$/,bj=/^(?:(\d*\.?\d*)h)?(?:(\d*\.?\d*)m)?(?:(\d*\.?\d*)s)?(?:(\d*\.?\d*)ms)?$/,Qi=/^(\d{1,2}|100)% (\d{1,2}|100)%$/,Ti=/^(\d+px|\d+em)$/,Si={left:"start",center:"center",right:"end",start:"start",end:"end"},Ri={left:"line-left",center:"center",right:"line-right"};
function Mi(a){var b=[];if(!a)return b;for(var c=a.childNodes,d=0;d<c.length;d++){var e="span"==c[d].nodeName&&"p"==a.nodeName;c[d].nodeType!=Node.ELEMENT_NODE||"br"==c[d].nodeName||e||(e=Mi(c[d]),b=b.concat(e));}b.length||b.push(a);return b}function Ni(a,b){for(var c=a.childNodes,d=0;d<c.length;d++)if("br"==c[d].nodeName&&0<d)c[d-1].textContent+="\n";else if(0<c[d].childNodes.length)Ni(c[d],b);else if(b){var e=c[d].textContent.trim(),e=e.replace(/\s+/g," ");c[d].textContent=e;}}
function Vi(a,b){for(var c=b.split(" "),d=0;d<c.length;d++)switch(c[d]){case "underline":0>a.textDecoration.indexOf("underline")&&a.textDecoration.push("underline");break;case "noUnderline":0<=a.textDecoration.indexOf("underline")&&Oa(a.textDecoration,"underline");break;case "lineThrough":0>a.textDecoration.indexOf("lineThrough")&&a.textDecoration.push("lineThrough");break;case "noLineThrough":0<=a.textDecoration.indexOf("lineThrough")&&Oa(a.textDecoration,"lineThrough");break;case "overline":0>a.textDecoration.indexOf("overline")&&
a.textDecoration.push("overline");break;case "noOverline":0<=a.textDecoration.indexOf("overline")&&Oa(a.textDecoration,"overline");}}function Z(a,b,c,d){return(a=Wi(a,c,d))?a:Ui(b,c,d)}function Ui(a,b,c){for(var d=Mi(a),e=0;e<d.length;e++){var f=d[e].getAttribute(c);if(f)return f}return(a=Pi(a,"style",b))?a.getAttribute(c):null}function Wi(a,b,c){return(a=Pi(a,"style",b))?a.getAttribute(c):null}
function Pi(a,b,c){if(!a||1>c.length)return null;var d=null,e=a;for(a=null;e&&!(a=e.getAttribute(b))&&(e=e.parentNode,e instanceof Element););if(b=a)for(a=0;a<c.length;a++)if(c[a].getAttribute("xml:id")==b){d=c[a];break}return d}
function Oi(a,b){var c=null;if(Xi.test(a))var c=Xi.exec(a),d=Number(c[1]),e=Number(c[2]),f=Number(c[3]),g=Number(c[4]),g=g+(Number(c[5])||0)/b.b,f=f+g/b.frameRate,c=f+60*e+3600*d;else Yi.test(a)?c=cj(Yi,a):Zi.test(a)?c=cj(Zi,a):$i.test(a)?(c=$i.exec(a),c=Number(c[1])/b.frameRate):aj.test(a)?(c=aj.exec(a),c=Number(c[1])/b.a):bj.test(a)&&(c=cj(bj,a));return c}
function cj(a,b){var c=a.exec(b);return c&&""!=c[0]?(Number(c[4])||0)/1E3+(Number(c[3])||0)+60*(Number(c[2])||0)+3600*(Number(c[1])||0):null}function Li(a,b,c,d){this.frameRate=Number(a)||30;this.b=Number(b)||1;this.a=Number(d);this.a||(this.a=a?this.frameRate*this.b:1);c&&(a=/^(\d+) (\d+)$/g.exec(c))&&(this.frameRate*=a[1]/a[2]);}Qb("application/ttml+xml",Ki);function dj(){this.a=new Ki;}dj.prototype.parseInit=function(a){var b=!1;(new N).F("moov",O).F("trak",O).F("mdia",O).F("minf",O).F("stbl",O).$("stsd",Fd).F("stpp",function(a){b=!0;a.ba.stop();}).parse(a);if(!b)throw new p(2,2,2007);};dj.prototype.parseMedia=function(a,b){var c=!1,d=[];(new N).F("mdat",Gd(function(a){c=!0;d=d.concat(this.a.parseMedia(a,b));}.bind(this))).parse(a);if(!c)throw new p(2,2,2007);return d};Qb('application/mp4; codecs="stpp"',dj);
Qb('application/mp4; codecs="stpp.TTML.im1t"',dj);function ej(){}ej.prototype.parseInit=function(){};
ej.prototype.parseMedia=function(a,b){var c=E(a),c=c.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n"),c=c.split(/\n{2,}/m);if(!/^WEBVTT($|[ \t\n])/m.test(c[0]))throw new p(2,2,2E3);for(var d=b.segmentStart,e=[],f=1;f<c.length;f++){var g=c[f].split("\n"),h=d;if(1==g.length&&!g[0]||/^NOTE($|[ \t])/.test(g[0]))var k=null;else{k=null;0>g[0].indexOf("--\x3e")&&(k=g[0],g.splice(0,1));var m=new He(g[0]),q=fj(m),v=Ie(m,/[ \t]+--\x3e[ \t]+/g),r=fj(m);if(null==q||!v||null==r)throw new p(2,2,2001);g=new Y(q+h,r+h,g.slice(1).join("\n").trim());
Ie(m,/[ \t]+/gm);for(h=Je(m);h;)gj(g,h),Ie(m,/[ \t]+/gm),h=Je(m);null!=k&&(g.id=k);k=g;}k&&e.push(k);}return e};
function gj(a,b){var c;if(c=/^align:(start|middle|center|end|left|right)$/.exec(b))c=c[1],"middle"==c?a.textAlign=zi:a.textAlign=Gi[c.toUpperCase()];else if(c=/^vertical:(lr|rl)$/.exec(b))a.writingDirection="lr"==c[1]?Mg:Ng;else if(c=/^size:([\d\.]+)%$/.exec(b))a.size=Number(c[1]);else if(c=/^position:([\d\.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(b))a.position=Number(c[1]),c[2]&&(c=c[2],a.positionAlign="line-left"==c||"start"==c?"line-left":"line-right"==c||"end"==c?"line-right":
"center");else if(c=/^line:([\d\.]+)%(?:,(start|end|center))?$/.exec(b))a.lineInterpretation=Og,a.line=Number(c[1]),c[2]&&(a.lineAlign=Ii[c[2].toUpperCase()]);else if(c=/^line:(-?\d+)(?:,(start|end|center))?$/.exec(b))a.lineInterpretation=Bi,a.line=Number(c[1]),c[2]&&(a.lineAlign=Ii[c[2].toUpperCase()]);}function fj(a){a=Ie(a,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);if(!a)return null;var b=Number(a[2]),c=Number(a[3]);return 59<b||59<c?null:Number(a[4])/1E3+c+60*b+3600*(Number(a[1])||0)}
Qb("text/vtt",ej);Qb('text/vtt; codecs="vtt"',ej);function hj(){this.a=null;}hj.prototype.parseInit=function(a){var b=!1;(new N).F("moov",O).F("trak",O).F("mdia",O).$("mdhd",function(a){0==a.version?(a.u.J(4),a.u.J(4),this.a=a.u.D(),a.u.J(4)):(a.u.J(8),a.u.J(8),this.a=a.u.D(),a.u.J(8));a.u.J(4);}.bind(this)).F("minf",O).F("stbl",O).$("stsd",Fd).F("wvtt",function(){b=!0;}).parse(a);if(!this.a)throw new p(2,2,2008);if(!b)throw new p(2,2,2008);};
hj.prototype.parseMedia=function(a,b){if(!this.a)throw new p(2,2,2008);var c=0,d=[],e=[],f=[],g=!1,h=!1,k=!1,m=null;(new N).F("moof",O).F("traf",O).$("tfdt",function(a){g=!0;c=a.version?a.u.Ma():a.u.D();}).$("tfhd",function(a){var b=a.gc;a=a.u;a.J(4);b&1&&a.J(8);b&2&&a.J(4);m=b&8?a.D():null;}).$("trun",function(a){h=!0;var b=a.version,c=a.gc;a=a.u;var e=a.D();c&1&&a.J(4);c&4&&a.J(4);for(var f=[],g=0;g<e;g++){var k={duration:null,Yb:null};c&256&&(k.duration=a.D());c&512&&a.J(4);c&1024&&a.J(4);c&2048&&
(k.Yb=b?a.Ac():a.D());f.push(k);}d=f;}).F("vtte",function(){e.push(null);}).F("vttc",Gd(function(a){e.push(a);})).F("mdat",function(a){k=!0;O(a);}).parse(a);if(!k&&!g&&!h)throw new p(2,2,2008);for(var q=c,v=0;v<d.length;v++){var r=d[v],t=e[v],y=r.duration||m;y&&(r=r.Yb?c+r.Yb:q,q=r+y,t&&f.push(ij(t,b.periodStart+r/this.a,b.periodStart+q/this.a)));}return f.filter(Ha)};
function ij(a,b,c){var d,e,f;(new N).F("payl",Gd(function(a){d=E(a);})).F("iden",Gd(function(a){e=E(a);})).F("sttg",Gd(function(a){f=E(a);})).parse(a);return d?jj(d,e,f,b,c):null}function jj(a,b,c,d,e){a=new Y(d,e,a);b&&(a.id=b);if(c)for(b=new He(c),c=Je(b);c;)gj(a,c),Ie(b,/[ \t]+/gm),c=Je(b);return a}Qb('application/mp4; codecs="wvtt"',hj);}.call(g,this));
if ('object'!="undefined"&&module.exports)module.exports=g.shaka;
else if (typeof(undefined)!="undefined" && undefined.amd)undefined(function(){return g.shaka});
else this.shaka=g.shaka;
})();


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
      config.manifest.dash.liveDelay = options.liveDelay;
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
          if (_this3.paused()) {
            _this3.trigger({ type: empPlayerEvents.PAUSE, bubbles: true });
          } else {
            _this3.trigger({ type: empPlayerEvents.PLAYING, bubbles: true });
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

EmpShaka.VERSION = '2.0.81-44';

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
