/**
 * @license
 * EMP-Player 2.0.92-173 
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

var document_1 = doccy;

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











var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
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

//TODO Remove this maybe not good for treeshaking
var videojsTmp = window_1.videojs;
var videojs$1 = videojsTmp;

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
 * Get the keys of an Object
 *
 * @param {Object}
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
 * @param {Object} object
 *        The object to iterate over
 *
 * @param {obj:EachCallback} fn
 *        The callback function which is called for each key in the object.
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


/**
 * Object.assign-style object shallow merge/extend.
 *
 * @param  {Object} target
 * @param  {Object} ...sources
 * @return {Object}
 */
function assign(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
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
 * @param  {Object} value
 * @return {Boolean}
 */
function isObject(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

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
    src = [{ src: src }];
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
    var track = new videojs$1.AudioTrack({
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
    this.trigger(empPlayerEvents.RECOVERABLE_ASSET_ERROR, { source: this.options_.source, techName: techName, message: message, error: error });
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

var shakaPlayer_compiled = createCommonjsModule(function (module, exports) {
(function(){var innerGlobal=typeof window!="undefined"?window:commonjsGlobal;var exportTo={};(function(window,global){var n,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value);},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function da(){da=function(){};ca.Symbol||(ca.Symbol=ea);}var ea=function(){var b=0;return function(c){return"jscomp_symbol_"+(c||"")+b++}}();
function fa(){da();var b=ca.Symbol.iterator;b||(b=ca.Symbol.iterator=ca.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&aa(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return ha(this)}});fa=function(){};}function ha(b){var c=0;return ia(function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}})}function ia(b){fa();b={next:b};b[ca.Symbol.iterator]=function(){return this};return b}function ja(b){fa();var c=b[Symbol.iterator];return c?c.call(b):ha(b)}
function ka(b,c){if(c){for(var d=ca,e=b.split("."),f=0;f<e.length-1;f++){var g=e[f];g in d||(d[g]={});d=d[g];}e=e[e.length-1];f=d[e];g=c(f);g!=f&&null!=g&&aa(d,e,{configurable:!0,writable:!0,value:g});}}
ka("Promise",function(b){function c(b){this.b=0;this.g=void 0;this.a=[];var c=this.c();try{b(c.resolve,c.reject);}catch(l){c.reject(l);}}function d(){this.a=null;}function e(b){return b instanceof c?b:new c(function(c){c(b);})}if(b)return b;d.prototype.b=function(b){null==this.a&&(this.a=[],this.f());this.a.push(b);};d.prototype.f=function(){var b=this;this.c(function(){b.h();});};var f=ca.setTimeout;d.prototype.c=function(b){f(b,0);};d.prototype.h=function(){for(;this.a&&this.a.length;){var b=this.a;this.a=
[];for(var c=0;c<b.length;++c){var d=b[c];b[c]=null;try{d();}catch(m){this.g(m);}}}this.a=null;};d.prototype.g=function(b){this.c(function(){throw b;});};c.prototype.c=function(){function b(b){return function(e){d||(d=!0,b.call(c,e));}}var c=this,d=!1;return{resolve:b(this.m),reject:b(this.f)}};c.prototype.m=function(b){if(b===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof c)this.o(b);else{a:switch(typeof b){case "object":var d=null!=b;break a;case "function":d=!0;
break a;default:d=!1;}d?this.l(b):this.h(b);}};c.prototype.l=function(b){var c=void 0;try{c=b.then;}catch(l){this.f(l);return}"function"==typeof c?this.u(c,b):this.h(b);};c.prototype.f=function(b){this.i(2,b);};c.prototype.h=function(b){this.i(1,b);};c.prototype.i=function(b,c){if(0!=this.b)throw Error("Cannot settle("+b+", "+c+"): Promise already settled in state"+this.b);this.b=b;this.g=c;this.j();};c.prototype.j=function(){if(null!=this.a){for(var b=0;b<this.a.length;++b)g.b(this.a[b]);this.a=null;}};
var g=new d;c.prototype.o=function(b){var c=this.c();b.Bb(c.resolve,c.reject);};c.prototype.u=function(b,c){var d=this.c();try{b.call(c,d.resolve,d.reject);}catch(m){d.reject(m);}};c.prototype.then=function(b,d){function e(b,c){return"function"==typeof b?function(c){try{f(b(c));}catch(Y){g(Y);}}:c}var f,g,h=new c(function(b,c){f=b;g=c;});this.Bb(e(b,f),e(d,g));return h};c.prototype["catch"]=function(b){return this.then(void 0,b)};c.prototype.Bb=function(b,c){function d(){switch(e.b){case 1:b(e.g);break;
case 2:c(e.g);break;default:throw Error("Unexpected state: "+e.b);}}var e=this;null==this.a?g.b(d):this.a.push(d);};c.resolve=e;c.reject=function(b){return new c(function(c,d){d(b);})};c.race=function(b){return new c(function(c,d){for(var f=ja(b),g=f.next();!g.done;g=f.next())e(g.value).Bb(c,d);})};c.all=function(b){var d=ja(b),f=d.next();return f.done?e([]):new c(function(b,c){function g(c){return function(d){h[c]=d;k--;0==k&&b(h);}}var h=[],k=0;do h.push(void 0),k++,e(f.value).Bb(g(h.length-1),c),f=
d.next();while(!f.done)})};return c});ka("Promise.prototype.finally",function(b){return b?b:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;})})}});function la(b){function c(c){return b.next(c)}function d(c){return b["throw"](c)}return new Promise(function(e,f){function g(b){b.done?e(b.value):Promise.resolve(b.value).then(c,d).then(g,f);}g(b.next());})}function p(b){return la(b())}
function ma(){this.f=!1;this.b=null;this.C=void 0;this.s=1;this.c=this.pa=0;this.h=this.a=null;}function na(b){if(b.f)throw new TypeError("Generator is already running");b.f=!0;}ma.prototype.g=function(b){this.C=b;};function oa(b,c){b.a={Bc:c,Hc:!0};b.s=b.pa||b.c;}ma.prototype["return"]=function(b){this.a={"return":b};this.s=this.c;};function q(b,c,d){b.s=d;return{value:c}}ma.prototype.P=function(b){this.s=b;};function pa(b){b.pa=0;b.c=2;}function qa(b){b.s=0;b.pa=0;}
function ra(b){b.pa=0;var c=b.a.Bc;b.a=null;return c}function sa(b){b.h=[b.a];b.pa=0;b.c=0;}function ta(b){var c=b.h.splice(0)[0];(c=b.a=b.a||c)?c.Hc?b.s=b.pa||b.c:void 0!=c.P&&b.c<c.P?(b.s=c.P,b.a=null):b.s=b.c:b.s=0;}function ua(b){this.a=new ma;this.b=b;}function va(b,c){na(b.a);var d=b.a.b;if(d)return wa(b,"return"in d?d["return"]:function(b){return{value:b,done:!0}},c,b.a["return"]);b.a["return"](c);return xa(b)}
function wa(b,c,d,e){try{var f=c.call(b.a.b,d);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return b.a.f=!1,f;var g=f.value;}catch(h){return b.a.b=null,oa(b.a,h),xa(b)}b.a.b=null;e.call(b.a,g);return xa(b)}
function xa(b){for(;b.a.s;)try{var c=b.b(b.a);if(c)return b.a.f=!1,{value:c.value,done:!1}}catch(d){b.a.C=void 0,oa(b.a,d);}b.a.f=!1;if(b.a.a){c=b.a.a;b.a.a=null;if(c.Hc)throw c.Bc;return{value:c["return"],done:!0}}return{value:void 0,done:!0}}
function ya(b){this.next=function(c){na(b.a);b.a.b?c=wa(b,b.a.b.next,c,b.a.g):(b.a.g(c),c=xa(b));return c};this["throw"]=function(c){na(b.a);b.a.b?c=wa(b,b.a.b["throw"],c,b.a.g):(oa(b.a,c),c=xa(b));return c};this["return"]=function(c){return va(b,c)};fa();this[Symbol.iterator]=function(){return this};}function w(b,c){ya.prototype=b.prototype;return new ya(new ua(c))}
ka("Array.prototype.find",function(b){return b?b:function(b,d){a:{var c=this;c instanceof String&&(c=String(c));for(var f=c.length,g=0;g<f;g++){var h=c[g];if(b.call(d,h,g,c)){c=h;break a}}c=void 0;}return c}});var za=this;za.a=!0;function x(b,c){var d=b.split("."),e=za;d[0]in e||!e.execScript||e.execScript("var "+d[0]);for(var f;d.length&&(f=d.shift());)d.length||void 0===c?e[f]?e=e[f]:e=e[f]={}:e[f]=c;}
function Aa(b,c){function d(){}d.prototype=c.prototype;b.tf=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.qf=function(b,d,g){return c.prototype[d].apply(b,Array.prototype.slice.call(arguments,2))};}/*

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
function Ba(b){this.c=Math.exp(Math.log(.5)/b);this.b=this.a=0;}function Ca(b,c,d){var e=Math.pow(b.c,c);d=d*(1-e)+e*b.a;isNaN(d)||(b.a=d,b.b+=c);}function Da(b){return b.a/(1-Math.pow(b.c,b.b))}function Ga(){this.b=new Ba(2);this.c=new Ba(5);this.a=0;}Ga.prototype.getBandwidthEstimate=function(b){return 128E3>this.a?b:Math.min(Da(this.b),Da(this.c))};function Ha(){}function Ia(){}window.console&&window.console.log.bind&&(Ha=console.warn.bind(console));var Ja=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ka(b){var c;b instanceof Ka?(La(this,b.na),this.Ma=b.Ma,this.qa=b.qa,Ma(this,b.Za),this.ca=b.ca,Na(this,Oa(b.a)),this.Ea=b.Ea):b&&(c=String(b).match(Ja))?(La(this,c[1]||"",!0),this.Ma=Pa(c[2]||""),this.qa=Pa(c[3]||"",!0),Ma(this,c[4]),this.ca=Pa(c[5]||"",!0),Na(this,c[6]||"",!0),this.Ea=Pa(c[7]||"")):this.a=new Ta(null);}n=Ka.prototype;n.na="";n.Ma="";n.qa="";n.Za=null;n.ca="";n.Ea="";
n.toString=function(){var b=[],c=this.na;c&&b.push(Ua(c,Va,!0),":");if(c=this.qa){b.push("//");var d=this.Ma;d&&b.push(Ua(d,Va,!0),"@");b.push(encodeURIComponent(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));c=this.Za;null!=c&&b.push(":",String(c));}if(c=this.ca)this.qa&&"/"!=c.charAt(0)&&b.push("/"),b.push(Ua(c,"/"==c.charAt(0)?Wa:Xa,!0));(c=this.a.toString())&&b.push("?",c);(c=this.Ea)&&b.push("#",Ua(c,Ya));return b.join("")};
n.resolve=function(b){var c=new Ka(this);"data"===c.na&&(c=new Ka);var d=!!b.na;d?La(c,b.na):d=!!b.Ma;d?c.Ma=b.Ma:d=!!b.qa;d?c.qa=b.qa:d=null!=b.Za;var e=b.ca;if(d)Ma(c,b.Za);else if(d=!!b.ca){if("/"!=e.charAt(0))if(this.qa&&!this.ca)e="/"+e;else{var f=c.ca.lastIndexOf("/");-1!=f&&(e=c.ca.substr(0,f+1)+e);}if(".."==e||"."==e)e="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){f=0==e.lastIndexOf("/",0);e=e.split("/");for(var g=[],h=0;h<e.length;){var k=e[h++];"."==k?f&&h==e.length&&g.push(""):".."==
k?((1<g.length||1==g.length&&""!=g[0])&&g.pop(),f&&h==e.length&&g.push("")):(g.push(k),f=!0);}e=g.join("/");}}d?c.ca=e:d=""!==b.a.toString();d?Na(c,Oa(b.a)):d=!!b.Ea;d&&(c.Ea=b.Ea);return c};function La(b,c,d){b.na=d?Pa(c,!0):c;b.na&&(b.na=b.na.replace(/:$/,""));}function Ma(b,c){if(c){c=Number(c);if(isNaN(c)||0>c)throw Error("Bad port number "+c);b.Za=c;}else b.Za=null;}function Na(b,c,d){c instanceof Ta?b.a=c:(d||(c=Ua(c,ab)),b.a=new Ta(c));}
function Pa(b,c){return b?c?decodeURI(b):decodeURIComponent(b):""}function Ua(b,c,d){return"string"==typeof b?(b=encodeURI(b).replace(c,bb),d&&(b=b.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b):null}function bb(b){b=b.charCodeAt(0);return"%"+(b>>4&15).toString(16)+(b&15).toString(16)}var Va=/[#\/\?@]/g,Xa=/[#\?:]/g,Wa=/[#\?]/g,ab=/[#\?@]/g,Ya=/#/g;function Ta(b){this.b=b||null;}Ta.prototype.a=null;Ta.prototype.c=null;
Ta.prototype.add=function(b,c){if(!this.a&&(this.a={},this.c=0,this.b))for(var d=this.b.split("&"),e=0;e<d.length;e++){var f=d[e].indexOf("="),g=null;if(0<=f){var h=d[e].substring(0,f);g=d[e].substring(f+1);}else h=d[e];h=decodeURIComponent(h.replace(/\+/g," "));g=g||"";this.add(h,decodeURIComponent(g.replace(/\+/g," ")));}this.b=null;(d=this.a.hasOwnProperty(b)&&this.a[b])||(this.a[b]=d=[]);d.push(c);this.c++;return this};
Ta.prototype.toString=function(){if(this.b)return this.b;if(!this.a)return"";var b=[],c;for(c in this.a)for(var d=encodeURIComponent(c),e=this.a[c],f=0;f<e.length;f++){var g=d;""!==e[f]&&(g+="="+encodeURIComponent(e[f]));b.push(g);}return this.b=b.join("&")};function Oa(b){var c=new Ta;c.b=b.b;if(b.a){var d={},e;for(e in b.a)d[e]=b.a[e].concat();c.a=d;c.c=b.c;}return c}function y(){var b,c,d=new Promise(function(d,f){b=d;c=f;});d.resolve=b;d.reject=c;return d}y.prototype.resolve=function(){};y.prototype.reject=function(){};function cb(b,c){var d=db();this.i=null==b.maxAttempts?d.maxAttempts:b.maxAttempts;this.f=null==b.baseDelay?d.baseDelay:b.baseDelay;this.h=null==b.fuzzFactor?d.fuzzFactor:b.fuzzFactor;this.g=null==b.backoffFactor?d.backoffFactor:b.backoffFactor;this.a=0;this.b=this.f;if(this.c=void 0===c?!1:c)this.a=1;}function eb(b){if(b.a>=b.i)if(b.c)b.a=1,b.b=b.f;else return Promise.reject();var c=new y;b.a?(window.setTimeout(c.resolve,b.b*(1+(2*Math.random()-1)*b.h)),b.b*=b.g):c.resolve();b.a++;return c}
function db(){return{maxAttempts:2,baseDelay:1E3,backoffFactor:2,fuzzFactor:.5,timeout:0}}function A(b,c,d,e){for(var f=[],g=3;g<arguments.length;++g)f[g-3]=arguments[g];this.severity=b;this.category=c;this.code=d;this.data=f;this.handled=!1;}x("shaka.util.Error",A);A.prototype.toString=function(){return"shaka.util.Error "+JSON.stringify(this,null,"  ")};A.Severity={RECOVERABLE:1,CRITICAL:2};A.Category={NETWORK:1,TEXT:2,MEDIA:3,MANIFEST:4,STREAMING:5,DRM:6,PLAYER:7,CAST:8,STORAGE:9};
A.Code={UNSUPPORTED_SCHEME:1E3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,UNKNOWN_DATA_URI_ENCODING:1005,REQUEST_FILTER_ERROR:1006,RESPONSE_FILTER_ERROR:1007,MALFORMED_TEST_URI:1008,UNEXPECTED_TEST_REQUEST:1009,INVALID_TEXT_HEADER:2E3,INVALID_TEXT_CUE:2001,UNABLE_TO_DETECT_ENCODING:2003,BAD_ENCODING:2004,INVALID_XML:2005,INVALID_MP4_TTML:2007,INVALID_MP4_VTT:2008,UNABLE_TO_EXTRACT_CUE_START_TIME:2009,BUFFER_READ_OUT_OF_BOUNDS:3E3,JS_INTEGER_OVERFLOW:3001,EBML_OVERFLOW:3002,
EBML_BAD_FLOATING_POINT_SIZE:3003,MP4_SIDX_WRONG_BOX_TYPE:3004,MP4_SIDX_INVALID_TIMESCALE:3005,MP4_SIDX_TYPE_NOT_SUPPORTED:3006,WEBM_CUES_ELEMENT_MISSING:3007,WEBM_EBML_HEADER_ELEMENT_MISSING:3008,WEBM_SEGMENT_ELEMENT_MISSING:3009,WEBM_INFO_ELEMENT_MISSING:3010,WEBM_DURATION_ELEMENT_MISSING:3011,WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:3012,WEBM_CUE_TIME_ELEMENT_MISSING:3013,MEDIA_SOURCE_OPERATION_FAILED:3014,MEDIA_SOURCE_OPERATION_THREW:3015,VIDEO_ERROR:3016,QUOTA_EXCEEDED_ERROR:3017,TRANSMUXING_FAILED:3018,
UNABLE_TO_GUESS_MANIFEST_TYPE:4E3,DASH_INVALID_XML:4001,DASH_NO_SEGMENT_INFO:4002,DASH_EMPTY_ADAPTATION_SET:4003,DASH_EMPTY_PERIOD:4004,DASH_WEBM_MISSING_INIT:4005,DASH_UNSUPPORTED_CONTAINER:4006,DASH_PSSH_BAD_ENCODING:4007,DASH_NO_COMMON_KEY_SYSTEM:4008,DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:4009,DASH_CONFLICTING_KEY_IDS:4010,UNPLAYABLE_PERIOD:4011,RESTRICTIONS_CANNOT_BE_MET:4012,NO_PERIODS:4014,HLS_PLAYLIST_HEADER_MISSING:4015,INVALID_HLS_TAG:4016,HLS_INVALID_PLAYLIST_HIERARCHY:4017,DASH_DUPLICATE_REPRESENTATION_ID:4018,
HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:4020,HLS_COULD_NOT_GUESS_MIME_TYPE:4021,HLS_MASTER_PLAYLIST_NOT_PROVIDED:4022,HLS_REQUIRED_ATTRIBUTE_MISSING:4023,HLS_REQUIRED_TAG_MISSING:4024,HLS_COULD_NOT_GUESS_CODECS:4025,HLS_KEYFORMATS_NOT_SUPPORTED:4026,DASH_UNSUPPORTED_XLINK_ACTUATE:4027,DASH_XLINK_DEPTH_LIMIT:4028,HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:4030,CONTENT_UNSUPPORTED_BY_BROWSER:4032,CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM:4033,INVALID_STREAMS_CHOSEN:5005,NO_RECOGNIZED_KEY_SYSTEMS:6E3,REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:6001,
FAILED_TO_CREATE_CDM:6002,FAILED_TO_ATTACH_TO_VIDEO:6003,INVALID_SERVER_CERTIFICATE:6004,FAILED_TO_CREATE_SESSION:6005,FAILED_TO_GENERATE_LICENSE_REQUEST:6006,LICENSE_REQUEST_FAILED:6007,LICENSE_RESPONSE_REJECTED:6008,ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:6010,NO_LICENSE_SERVER_GIVEN:6012,OFFLINE_SESSION_REMOVED:6013,EXPIRED:6014,LOAD_INTERRUPTED:7E3,OPERATION_ABORTED:7001,NO_VIDEO_ELEMENT:7002,CAST_API_UNAVAILABLE:8E3,NO_CAST_RECEIVERS:8001,ALREADY_CASTING:8002,UNEXPECTED_CAST_ERROR:8003,CAST_CANCELED_BY_USER:8004,
CAST_CONNECTION_TIMED_OUT:8005,CAST_RECEIVER_APP_UNAVAILABLE:8006,STORAGE_NOT_SUPPORTED:9E3,INDEXED_DB_ERROR:9001,DEPRECATED_OPERATION_ABORTED:9002,REQUESTED_ITEM_NOT_FOUND:9003,MALFORMED_OFFLINE_URI:9004,CANNOT_STORE_LIVE_OFFLINE:9005,STORE_ALREADY_IN_PROGRESS:9006,NO_INIT_DATA_FOR_OFFLINE:9007,LOCAL_PLAYER_INSTANCE_REQUIRED:9008,NEW_KEY_OPERATION_NOT_SUPPORTED:9011,KEY_NOT_FOUND:9012,MISSING_STORAGE_CELL:9013};function B(b,c){this.promise=b;this.b=c;this.a=!1;}x("shaka.util.AbortableOperation",B);function fb(b){return new B(Promise.reject(b),function(){return Promise.resolve()})}B.failed=fb;function gb(){var b=Promise.reject(new A(2,7,7001));b["catch"](function(){});return new B(b,function(){return Promise.resolve()})}B.aborted=gb;function hb(b){return new B(Promise.resolve(b),function(){return Promise.resolve()})}B.completed=hb;
function ib(b){return new B(b,function(){return b["catch"](function(){})})}B.notAbortable=ib;B.prototype.abort=function(){this.a=!0;return this.b()};B.prototype.abort=B.prototype.abort;function jb(b){return new B(Promise.all(b.map(function(b){return b.promise})),function(){return Promise.all(b.map(function(b){return b.abort()}))})}B.all=jb;B.prototype["finally"]=function(b){this.promise.then(function(){return b(!0)},function(){return b(!1)});return this};B.prototype["finally"]=B.prototype["finally"];
B.prototype.X=function(b,c){function d(){f.reject(new A(2,7,7001));return e.abort()}var e=this,f=new y;this.promise.then(function(c){e.a?f.reject(new A(2,7,7001)):b?d=kb(b,c,f):f.resolve(c);},function(b){c?d=kb(c,b,f):f.reject(b);});return new B(f,function(){return d()})};B.prototype.chain=B.prototype.X;
function kb(b,c,d){try{var e=b(c);if(e&&e.promise&&e.abort)return d.resolve(e.promise),function(){return e.abort()};d.resolve(e);return function(){return Promise.resolve(e).then(function(){})["catch"](function(){})}}catch(f){return d.reject(f),function(){return Promise.resolve()}}}function lb(b,c){for(var d=[],e=0;e<b.length;++e){for(var f=!1,g=0;g<d.length&&!(f=c?c(b[e],d[g]):b[e]===d[g]);++g);f||d.push(b[e]);}return d}function mb(b,c,d){for(var e=0;e<b.length;++e)if(d(b[e],c))return e;return-1}function nb(b,c){var d=b.indexOf(c);-1<d&&b.splice(d,1);}function ob(b,c){var d=0;b.forEach(function(b){d+=c(b)?1:0;});return d}function pb(b){function c(b){switch(typeof b){case "undefined":case "boolean":case "number":case "string":case "symbol":case "function":return b;default:if(!b)return b;if(0<=d.indexOf(b))return null;var e=b.constructor==Array;if(b.constructor!=Object&&!e)return null;d.push(b);var g=e?[]:{},h;for(h in b)g[h]=c(b[h]);e&&(g.length=b.length);return g}}var d=[];return c(b)}function qb(){this.a=[];}function rb(b,c){b.a.push(c["finally"](function(){nb(b.a,c);}));}qb.prototype.destroy=function(){var b=[];this.a.forEach(function(c){c.promise["catch"](function(){});b.push(c.abort());});this.a=[];return Promise.all(b)};function C(b){this.c=!1;this.g=new qb;this.a=[];this.b=[];this.f=b||null;}x("shaka.net.NetworkingEngine",C);C.RequestType={MANIFEST:0,SEGMENT:1,LICENSE:2,APP:3,TIMING:4};C.PluginPriority={FALLBACK:1,PREFERRED:2,APPLICATION:3};var sb={};function tb(b,c,d){d=d||3;var e=sb[b];if(!e||d>=e.priority)sb[b]={priority:d,ze:c};}C.registerScheme=tb;C.unregisterScheme=function(b){delete sb[b];};C.prototype.Ae=function(b){this.a.push(b);};C.prototype.registerRequestFilter=C.prototype.Ae;
C.prototype.ef=function(b){nb(this.a,b);};C.prototype.unregisterRequestFilter=C.prototype.ef;C.prototype.td=function(){this.a=[];};C.prototype.clearAllRequestFilters=C.prototype.td;C.prototype.Be=function(b){this.b.push(b);};C.prototype.registerResponseFilter=C.prototype.Be;C.prototype.ff=function(b){nb(this.b,b);};C.prototype.unregisterResponseFilter=C.prototype.ff;C.prototype.ud=function(){this.b=[];};C.prototype.clearAllResponseFilters=C.prototype.ud;
function ub(b,c){return{uris:b,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:c}}C.prototype.destroy=function(){this.c=!0;this.a=[];this.b=[];return this.g.destroy()};C.prototype.destroy=C.prototype.destroy;
function vb(b){b.then=function(c,d){Ha("The network request interface has changed!  Please update your application to the new interface, which allows operations to be aborted.  Support for the old API will be removed in v2.5.");return b.promise.then(c,d)};b["catch"]=function(c){Ha("The network request interface has changed!  Please update your application to the new interface, which allows operations to be aborted.  Support for the old API will be removed in v2.5.");return b.promise["catch"](c)};
return b}
C.prototype.request=function(b,c){var d=this;if(this.c)return vb(gb());c.method=c.method||"GET";c.headers=c.headers||{};c.retryParameters=c.retryParameters?pb(c.retryParameters):db();c.uris=pb(c.uris);var e=wb(this,b,c),f=e.X(function(){return xb(d,b,c,new cb(c.retryParameters,!1),0,null)}),g=f.X(function(c){return yb(d,b,c)}),h=Date.now(),k=0;e.promise.then(function(){k=Date.now()-h;},function(){});var l=0;f.promise.then(function(){l=Date.now();},function(){});e=g.X(function(c){var e=Date.now()-l;
c.timeMs+=k;c.timeMs+=e;d.f&&!c.fromCache&&1==b&&d.f(c.timeMs,c.data.byteLength);return c},function(b){b&&(b.severity=2);throw b;});rb(this.g,e);return vb(e)};C.prototype.request=C.prototype.request;function wb(b,c,d){var e=hb(void 0);b.a.forEach(function(b){e=e.X(function(){return b(c,d)});});return e.X(void 0,function(b){if(b&&7001==b.code)throw b;throw new A(2,1,1006,b);})}
function xb(b,c,d,e,f,g){var h=new Ka(d.uris[f]),k=h.na;k||(k=location.protocol,k=k.slice(0,-1),La(h,k),d.uris[f]=h.toString());var l=(k=sb[k])?k.ze:null;if(!l)return fb(new A(2,1,1E3,h));var m;return ib(eb(e)).X(function(){if(b.c)return gb();m=Date.now();var e=l(d.uris[f],d,c);void 0==e.promise&&(Ha("The scheme plugin interface has changed!  Please update your scheme plugins to the new interface to add support for abort().  Support for the old plugin interface will be removed in v2.5."),e=ib(e));
return e}).X(function(b){void 0==b.timeMs&&(b.timeMs=Date.now()-m);return b},function(h){if(h&&7001==h.code)throw h;if(b.c)return gb();if(h&&1==h.severity)return f=(f+1)%d.uris.length,xb(b,c,d,e,f,h);throw h||g;})}function yb(b,c,d){var e=hb(void 0);b.b.forEach(function(b){e=e.X(function(){return b(c,d)});});return e.X(function(){return d},function(b){if(b&&7001==b.code)throw b;var c=2;b instanceof A&&(c=b.severity);throw new A(c,1,1007,b);})}function zb(){this.a={};}zb.prototype.push=function(b,c){this.a.hasOwnProperty(b)?this.a[b].push(c):this.a[b]=[c];};zb.prototype.get=function(b){return(b=this.a[b])?b.slice():null};zb.prototype.remove=function(b,c){var d=this.a[b];if(d)for(var e=0;e<d.length;++e)d[e]==c&&(d.splice(e,1),--e);};zb.prototype.forEach=function(b){for(var c in this.a)b(c,this.a[c]);};function Ab(){this.a=new zb;}Ab.prototype.destroy=function(){Bb(this);this.a=null;return Promise.resolve()};function D(b,c,d,e){b.a&&(c=new Cb(c,d,e),b.a.push(d,c));}function Db(b,c,d,e){D(b,c,d,function(b){this.ua(c,d);e(b);}.bind(b));}Ab.prototype.ua=function(b,c){if(this.a)for(var d=this.a.get(c)||[],e=0;e<d.length;++e){var f=d[e];f.target==b&&(f.ua(),this.a.remove(c,f));}};function Bb(b){if(b.a){var c=b.a,d=[],e;for(e in c.a)d.push.apply(d,c.a[e]);for(c=0;c<d.length;++c)d[c].ua();b.a.a={};}}
function Cb(b,c,d){this.target=b;this.type=c;this.a=d;this.target.addEventListener(c,d,!1);}Cb.prototype.ua=function(){this.target.removeEventListener(this.type,this.a,!1);this.a=this.target=null;};function E(b,c){c=void 0===c?{}:c;for(var d in c)this[d]=c[d];this.defaultPrevented=this.cancelable=this.bubbles=!1;this.timeStamp=window.performance&&window.performance.now?window.performance.now():Date.now();this.type=b;this.isTrusted=!1;this.target=this.currentTarget=null;this.a=!1;}E.prototype.preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0);};E.prototype.stopImmediatePropagation=function(){this.a=!0;};E.prototype.stopPropagation=function(){};var F={vd:function(b,c){return b.reduce(function(b,c,f){return c["catch"](b.bind(null,f))}.bind(null,c),Promise.reject())},ja:function(b,c){return b.concat(c)},Ha:function(){},ma:function(b){return null!=b},la:function(b,c,d){return d.indexOf(b)==c}};function Eb(b,c){if(0==c.length)return b;var d=c.map(function(b){return new Ka(b)});return b.map(function(b){return new Ka(b)}).map(function(b){return d.map(b.resolve.bind(b))}).reduce(F.ja,[]).map(function(b){return b.toString()})}function Fb(b,c){return{keySystem:b,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:c||[],keyIds:[]}}var Gb=1/15;function Hb(b){return!b||0==Object.keys(b).length}function G(b){return Object.keys(b).map(function(c){return b[c]})}function Ib(b,c){return Object.keys(b).every(function(d){return c(d,b[d])})}function Kb(b,c){Object.keys(b).forEach(function(d){c(d,b[d]);});}function Lb(b,c){var d=b;c&&(d+='; codecs="'+c+'"');return d}var Mb={codecs:"codecs",frameRate:"framerate",bandwidth:"bitrate",width:"width",height:"height",channelsCount:"channels"};function Nb(b){if(!b)return"";b=new Uint8Array(b);239==b[0]&&187==b[1]&&191==b[2]&&(b=b.subarray(3));b=escape(Ob(b));try{return decodeURIComponent(b)}catch(c){throw new A(2,2,2004);}}x("shaka.util.StringUtils.fromUTF8",Nb);
function Pb(b,c,d){if(!b)return"";if(!d&&0!=b.byteLength%2)throw new A(2,2,2004);if(b instanceof ArrayBuffer)var e=b;else d=new Uint8Array(b.byteLength),d.set(new Uint8Array(b)),e=d.buffer;b=Math.floor(b.byteLength/2);d=new Uint16Array(b);e=new DataView(e);for(var f=0;f<b;f++)d[f]=e.getUint16(2*f,c);return Ob(d)}x("shaka.util.StringUtils.fromUTF16",Pb);
function Qb(b){var c=new Uint8Array(b);if(239==c[0]&&187==c[1]&&191==c[2])return Nb(c);if(254==c[0]&&255==c[1])return Pb(c.subarray(2),!1);if(255==c[0]&&254==c[1])return Pb(c.subarray(2),!0);var d=function(b,c){return b.byteLength<=c||32<=b[c]&&126>=b[c]}.bind(null,c);if(0==c[0]&&0==c[2])return Pb(b,!1);if(0==c[1]&&0==c[3])return Pb(b,!0);if(d(0)&&d(1)&&d(2)&&d(3))return Nb(b);throw new A(2,2,2003);}x("shaka.util.StringUtils.fromBytesAutoDetect",Qb);
function Rb(b){b=encodeURIComponent(b);b=unescape(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c.buffer}x("shaka.util.StringUtils.toUTF8",Rb);function Ob(b){for(var c="",d=0;d<b.length;d+=16E3)c+=String.fromCharCode.apply(null,b.subarray(d,d+16E3));return c}function Sb(b){this.a=null;this.b=function(){this.a=null;b();}.bind(this);}Sb.prototype.cancel=function(){null!=this.a&&(clearTimeout(this.a),this.a=null);};function Tb(b){b.cancel();b.a=setTimeout(b.b,500);}function Ub(b,c){b.cancel();var d=function(){this.b();this.a=setTimeout(d,1E3*c);}.bind(b);b.a=setTimeout(d,1E3*c);}function Vb(b,c){var d=Ob(b);c=void 0==c?!0:c;d=window.btoa(d).replace(/\+/g,"-").replace(/\//g,"_");return c?d:d.replace(/=*$/,"")}x("shaka.util.Uint8ArrayUtils.toBase64",Vb);function Wb(b){b=window.atob(b.replace(/-/g,"+").replace(/_/g,"/"));for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c}x("shaka.util.Uint8ArrayUtils.fromBase64",Wb);function Xb(b){for(var c=new Uint8Array(b.length/2),d=0;d<b.length;d+=2)c[d/2]=window.parseInt(b.substr(d,2),16);return c}
x("shaka.util.Uint8ArrayUtils.fromHex",Xb);function Yb(b){for(var c="",d=0;d<b.length;++d){var e=b[d].toString(16);1==e.length&&(e="0"+e);c+=e;}return c}x("shaka.util.Uint8ArrayUtils.toHex",Yb);function Zb(b,c){if(!b&&!c)return!0;if(!b||!c||b.length!=c.length)return!1;for(var d=0;d<b.length;++d)if(b[d]!=c[d])return!1;return!0}x("shaka.util.Uint8ArrayUtils.equal",Zb);
function $b(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];for(var e=d=0;e<c.length;++e)d+=c[e].length;d=new Uint8Array(d);for(var f=e=0;f<c.length;++f)d.set(c[f],e),e+=c[f].length;return d}x("shaka.util.Uint8ArrayUtils.concat",$b);function ac(b){var c=this;this.m=b;this.l=this.j=this.w=null;this.M=!1;this.b=null;this.g=new Ab;this.a=[];this.u=[];this.i=new y;this.f=null;this.h=function(d){c.i.reject(d);b.onError(d);};this.o={};this.I=new Sb(function(){return bc(c)});this.Z=this.c=!1;this.K=[];this.V=!1;this.A=new Sb(function(){return cc(c)});Ub(this.A,1);this.i["catch"](function(){});}n=ac.prototype;
n.destroy=function(){this.c=!0;var b=[];this.a.forEach(function(c){c=c.ha.close()["catch"](F.Ha);var d=dc(1E3);b.push(Promise.race([c,d]));});this.i.reject();this.g&&b.push(this.g.destroy());this.l&&b.push(this.l.setMediaKeys(null)["catch"](F.Ha));this.A&&(this.A.cancel(),this.A=null);this.I&&(this.I.cancel(),this.I=null);this.g=this.l=this.j=this.w=this.b=null;this.a=[];this.u=[];this.m=this.h=this.f=null;return Promise.all(b)};n.configure=function(b){this.f=b;};
n.init=function(b,c){var d={},e=[],f=b.periods.some(function(b){return b.variants.some(function(b){return b.drmInfos.length})});this.Z=c;this.u=b.offlineSessionIds;ec(this,b,c||0<b.offlineSessionIds.length,d,e,f);return e.length?fc(this,d,e,f):(this.M=!0,Promise.resolve())};
n.Ab=function(b){var c=this;if(!this.j)return Db(this.g,b,"encrypted",function(){c.h(new A(2,6,6010));}),Promise.resolve();this.l=b;Db(this.g,this.l,"play",function(){for(var b=0;b<c.K.length;b++)gc(c,c.K[b]);c.V=!0;c.K=[];});b=this.l.setMediaKeys(this.j);b=b["catch"](function(b){return Promise.reject(new A(2,6,6003,b.message))});var d=null;this.b.serverCertificate&&this.b.serverCertificate.length&&(d=this.j.setServerCertificate(this.b.serverCertificate).then(function(){})["catch"](function(b){return Promise.reject(new A(2,
6,6004,b.message))}));return Promise.all([b,d]).then(function(){if(c.c)return Promise.reject();hc(c);c.b.initData.length||c.u.length||D(c.g,c.l,"encrypted",function(b){a:{for(var d=new Uint8Array(b.initData),e=0;e<c.a.length;++e)if(Zb(d,c.a[e].initData)){b=void 0;break a}ic(c,b.initDataType,d);b=void 0;}return b});})["catch"](function(b){return c.c?Promise.resolve():Promise.reject(b)})};function jc(b,c){return Promise.all(c.map(function(c){return kc(b,c)}))}
function kc(b,c){return p(function e(){var f,g,h;return w(e,function(e){switch(e.s){case 1:return q(e,lc(b,c),2);case 2:f=e.C;if(!f)return e["return"]();g=[];h=b.a.filter(function(b){return b.ha==f});h.forEach(function(b){var c=new y;g.push(c);b.ia=c;});g.push(f.remove());return e["return"](Promise.all(g))}})})}
function hc(b){var c=b.b?b.b.initData:[];c.forEach(function(c){return ic(b,c.initDataType,c.initData)});b.u.forEach(function(c){return lc(b,c)});c.length||b.u.length||b.i.resolve();return b.i}n.keySystem=function(){return this.b?this.b.keySystem:""};function mc(b){return b.a.map(function(b){return b.ha.sessionId})}n.Gb=function(){var b=this.a.map(function(b){b=b.ha.expiration;return isNaN(b)?Infinity:b});return Math.min.apply(Math,b)};
function ec(b,c,d,e,f,g){c=nc(c);var h=oc(b);h&&c.forEach(function(b){b.drmInfos=[h];});if(!g){var k=b.f,l=Object.keys(k.servers).map(function(b){return{keySystem:b,licenseServerUri:k.servers[b],distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:[],keyIds:[]}});l.length&&c.forEach(function(b){b.drmInfos=l;});}c.forEach(function(c){pc(b,c,d,e,f);});}
function pc(b,c,d,e,f){var g=qc(c);c.drmInfos.forEach(function(c){var d=c.keySystem;if(d){if(!c.licenseServerUri){var e=b.f.servers[d];e&&(c.licenseServerUri=e);}c.keyIds||(c.keyIds=[]);if(d=b.f.advanced[d])c.distinctiveIdentifierRequired||(c.distinctiveIdentifierRequired=d.distinctiveIdentifierRequired),c.persistentStateRequired||(c.persistentStateRequired=d.persistentStateRequired),c.videoRobustness||(c.videoRobustness=d.videoRobustness),c.audioRobustness||(c.audioRobustness=d.audioRobustness),c.serverCertificate||
(c.serverCertificate=d.serverCertificate);}});c.drmInfos.forEach(function(b){e[b.keySystem]||(e[b.keySystem]={audioCapabilities:[],videoCapabilities:[],distinctiveIdentifier:"optional",persistentState:d?"required":"optional",sessionTypes:[d?"persistent-license":"temporary"],label:b.keySystem,drmInfos:[]},f.push(b.keySystem));});c.drmInfos.forEach(function(b){var c=e[b.keySystem];c.drmInfos.push(b);b.distinctiveIdentifierRequired&&(c.distinctiveIdentifier="required");b.persistentStateRequired&&(c.persistentState=
"required");g.forEach(function(d){var e="video"==d.type;d={robustness:(e?b.videoRobustness:b.audioRobustness)||"",contentType:Lb(d.mimeType,d.codecs)};e?c.videoCapabilities.push(d):c.audioCapabilities.push(d);});});}
function fc(b,c,d,e){if(1==d.length&&""==d[0])return Promise.reject(new A(2,6,6E3));var f=new y,g=f;[!0,!1].forEach(function(b){d.forEach(function(d){var e=c[d];e.drmInfos.some(function(b){return!!b.licenseServerUri})==b&&(0==e.audioCapabilities.length&&delete e.audioCapabilities,0==e.videoCapabilities.length&&delete e.videoCapabilities,g=g["catch"](function(){return this.c?Promise.reject():navigator.requestMediaKeySystemAccess(d,[e])}.bind(this)));}.bind(this));}.bind(b));g=g["catch"](function(){return Promise.reject(new A(2,
6,6001))});g=g.then(function(b){if(this.c)return Promise.reject();var d=0<=navigator.userAgent.indexOf("Edge/"),e=b.getConfiguration();this.w=(e.audioCapabilities||[]).concat(e.videoCapabilities||[]).map(function(b){return b.contentType});d&&(this.w=null);d=c[b.keySystem];rc(this,b.keySystem,d,d.drmInfos);return this.b.licenseServerUri?b.createMediaKeys():Promise.reject(new A(2,6,6012))}.bind(b)).then(function(b){if(this.c)return Promise.reject();this.j=b;this.M=!0;}.bind(b))["catch"](function(b){if(this.c)return Promise.resolve();
this.w=this.b=null;return b instanceof A?Promise.reject(b):Promise.reject(new A(2,6,6002,b.message))}.bind(b));e||(g=g["catch"](function(){}));f.reject();return g}
function oc(b){if(Hb(b.f.clearKeys))return null;var c=[],d=[],e;for(e in b.f.clearKeys){var f=b.f.clearKeys[e],g=Xb(e);f=Xb(f);g={kty:"oct",kid:Vb(g,!1),k:Vb(f,!1)};c.push(g);d.push(g.kid);}b=JSON.stringify({keys:c});d=JSON.stringify({kids:d});d=[{initData:new Uint8Array(Rb(d)),initDataType:"keyids"}];return{keySystem:"org.w3.clearkey",licenseServerUri:"data:application/json;base64,"+window.btoa(b),distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,
initData:d,keyIds:[]}}function rc(b,c,d,e){var f=[],g=[],h=[],k=[];sc(e,f,g,h,k);b.b={keySystem:c,licenseServerUri:f[0],distinctiveIdentifierRequired:"required"==d.distinctiveIdentifier,persistentStateRequired:"required"==d.persistentState,audioRobustness:d.audioCapabilities?d.audioCapabilities[0].robustness:"",videoRobustness:d.videoCapabilities?d.videoCapabilities[0].robustness:"",serverCertificate:g[0],initData:h,keyIds:k};}
function sc(b,c,d,e,f){function g(b,c){return b.keyId&&b.keyId==c.keyId?!0:b.initDataType==c.initDataType&&Zb(b.initData,c.initData)}b.forEach(function(b){-1==c.indexOf(b.licenseServerUri)&&c.push(b.licenseServerUri);b.serverCertificate&&-1==mb(d,b.serverCertificate,Zb)&&d.push(b.serverCertificate);b.initData&&b.initData.forEach(function(b){-1==mb(e,b,g)&&e.push(b);});if(b.keyIds)for(var h=0;h<b.keyIds.length;++h)-1==f.indexOf(b.keyIds[h])&&f.push(b.keyIds[h]);});}
function lc(b,c){try{var d=b.j.createSession("persistent-license");}catch(g){var e=new A(2,6,6005,g.message);b.h(e);return Promise.reject(e)}D(b.g,d,"message",b.Rc.bind(b));D(b.g,d,"keystatuseschange",b.Nc.bind(b));var f={initData:null,ha:d,loaded:!1,gc:Infinity,ia:null};b.a.push(f);return d.load(c).then(function(b){if(!this.c){if(b)return f.loaded=!0,this.a.every(function(b){return b.loaded})&&this.i.resolve(),d;this.a.splice(this.a.indexOf(f),1);this.h(new A(2,6,6013));}}.bind(b),function(b){this.c||
(this.a.splice(this.a.indexOf(f),1),this.h(new A(2,6,6005,b.message)));}.bind(b))}
function ic(b,c,d){try{var e=b.Z?b.j.createSession("persistent-license"):b.j.createSession();}catch(f){b.h(new A(2,6,6005,f.message));return}D(b.g,e,"message",b.Rc.bind(b));D(b.g,e,"keystatuseschange",b.Nc.bind(b));b.a.push({initData:d,ha:e,loaded:!1,gc:Infinity,ia:null});e.generateRequest(c,d.buffer)["catch"](function(b){if(!this.c){for(var c=0;c<this.a.length;++c)if(this.a[c].ha==e){this.a.splice(c,1);break}this.h(new A(2,6,6006,b.message));}}.bind(b));}
n.Rc=function(b){var c=this;if(this.f.delayLicenseRequestUntilPlayed&&this.l.paused&&!this.V)this.K.push(b);else if("license-release"===b.messageType&&tc()){b=b.target;for(var d,e=0;e<this.a.length;e++)if(this.a[e].ha==b){d=this.a[e];break}d&&(d.ia&&d.ia.resolve(),dc(5E3).then(function(){d.loaded=!0;c.a.every(function(b){return b.loaded})&&c.i.resolve();}));}else gc(this,b);};
function gc(b,c){for(var d=c.target,e,f=0;f<b.a.length;f++)if(b.a[f].ha==d){e=b.a[f];break}f=ub([b.b.licenseServerUri],b.f.retryParameters);f.body=c.message;f.method="POST";"com.microsoft.playready"!=b.b.keySystem&&"com.chromecast.playready"!=b.b.keySystem||uc(f);b.m.onEvent(new E("drmsessionbeforeupdate",{isCertificateRequest:2==c.message.byteLength}));b.m.Va.request(2,f).promise.then(function(b){return this.c?Promise.reject():d.update(b.data).then(function(){var b=this;this.m.onEvent(new E("drmsessionupdate",
{isCertificateRequest:2==c.message.byteLength}));e&&(e.ia&&e.ia.resolve(),dc(5E3).then(function(){e.loaded=!0;b.a.every(function(b){return b.loaded})&&b.i.resolve();}));}.bind(this))}.bind(b),function(b){if(this.c)return Promise.resolve();b=new A(2,6,6007,b);this.h(b);e&&e.ia&&e.ia.reject(b);}.bind(b))["catch"](function(b){if(this.c)return Promise.resolve();b=new A(2,6,6008,b.message);this.h(b);e&&e.ia&&e.ia.reject(b);}.bind(b));}
function uc(b){var c=Pb(b.body,!0,!0);if(-1==c.indexOf("PlayReadyKeyMessage"))b.headers["Content-Type"]="text/xml; charset=utf-8";else{c=(new DOMParser).parseFromString(c,"application/xml");for(var d=c.getElementsByTagName("HttpHeader"),e=0;e<d.length;++e)b.headers[d[e].querySelector("name").textContent]=d[e].querySelector("value").textContent;b.body=Wb(c.querySelector("Challenge").textContent).buffer;}}
n.Nc=function(b){b=b.target;var c;for(c=0;c<this.a.length&&this.a[c].ha!=b;++c);if(c!=this.a.length){var d=!1;b.keyStatuses.forEach(function(b,e){if("string"==typeof e){var f=e;e=b;b=f;}if("com.microsoft.playready"==this.b.keySystem&&16==e.byteLength){f=new DataView(e);var g=f.getUint32(0,!0),l=f.getUint16(4,!0),m=f.getUint16(6,!0);f.setUint32(0,g,!1);f.setUint16(4,l,!1);f.setUint16(6,m,!1);}"com.microsoft.playready"==this.b.keySystem&&"status-pending"==b&&(b="usable");"status-pending"!=b&&(this.a[c].loaded=
!0,this.a.every(function(b){return b.loaded})&&this.i.resolve());"expired"==b&&(d=!0);f=Yb(new Uint8Array(e));this.o[f]=b;}.bind(this));var e=b.expiration-Date.now();(0>e||d&&1E3>e)&&!this.a[c].ia&&(this.a.splice(c,1),b.close()["catch"](function(){}));Tb(this.I);}};function bc(b){function c(b,c){return"expired"==c}!Hb(b.o)&&Ib(b.o,c)&&b.h(new A(2,6,6014));b.m.Ib(b.o);}
function vc(){var b=[],c=[{contentType:'video/mp4; codecs="avc1.42E01E"'},{contentType:'video/webm; codecs="vp8"'}],d=[{videoCapabilities:c,persistentState:"required",sessionTypes:["persistent-license"]},{videoCapabilities:c}],e={};"org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function(c){var f=navigator.requestMediaKeySystemAccess(c,d).then(function(b){var d=b.getConfiguration().sessionTypes;d=
d?0<=d.indexOf("persistent-license"):!1;0<=navigator.userAgent.indexOf("Tizen 3")&&(d=!1);e[c]={persistentState:d};return b.createMediaKeys()})["catch"](function(){e[c]=null;});b.push(f);});return Promise.all(b).then(function(){return e})}function wc(b,c){var d=b.keySystem();return 0==c.drmInfos.length||c.drmInfos.some(function(b){return b.keySystem==d})}
function xc(b,c){if(!b.length)return c;if(!c.length)return b;for(var d=[],e=0;e<b.length;e++)for(var f=0;f<c.length;f++)if(b[e].keySystem==c[f].keySystem){var g=b[e];f=c[f];var h=[];h=h.concat(g.initData||[]);h=h.concat(f.initData||[]);var k=[];k=k.concat(g.keyIds);k=k.concat(f.keyIds);d.push({keySystem:g.keySystem,licenseServerUri:g.licenseServerUri||f.licenseServerUri,distinctiveIdentifierRequired:g.distinctiveIdentifierRequired||f.distinctiveIdentifierRequired,persistentStateRequired:g.persistentStateRequired||
f.persistentStateRequired,videoRobustness:g.videoRobustness||f.videoRobustness,audioRobustness:g.audioRobustness||f.audioRobustness,serverCertificate:g.serverCertificate||f.serverCertificate,initData:h,keyIds:k});break}return d}function cc(b){b.a.forEach(function(b){var c=b.gc,e=b.ha.expiration;isNaN(e)&&(e=Infinity);e!=c&&(this.m.onExpirationUpdated(b.ha.sessionId,e),b.gc=e);}.bind(b));}function dc(b){return new Promise(function(c){return setTimeout(c,b)})}function yc(b){return!b||1==b.length&&1E-6>b.end(0)-b.start(0)?null:b.length?b.end(b.length-1):null}function Cc(b,c,d){d=void 0===d?0:d;return!b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0)||c>b.end(b.length-1)?!1:c+d>=b.start(0)}function Dc(b,c){if(!b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0))return 0;for(var d=0,e=b.length-1;0<=e&&b.end(e)>c;--e)d+=b.end(e)-Math.max(b.start(e),c);return d}
function Ec(b){if(!b)return[];for(var c=[],d=0;d<b.length;d++)c.push({start:b.start(d),end:b.end(d)});return c}function H(b,c,d){this.startTime=b;this.endTime=c;this.payload=d;this.region=new Fc;this.position=null;this.positionAlign=Gc;this.size=100;this.textAlign=Hc;this.writingDirection=Ic;this.lineInterpretation=Jc;this.line=null;this.lineHeight="";this.lineAlign=Kc;this.displayAlign=Lc;this.fontSize=this.backgroundColor=this.color="";this.fontWeight=Mc;this.fontStyle=Nc;this.fontFamily="";this.textDecoration=[];this.wrapLine=!0;this.id="";}x("shaka.text.Cue",H);var Gc="auto";
H.positionAlign={LEFT:"line-left",RIGHT:"line-right",CENTER:"center",AUTO:Gc};var Hc="center",Oc={LEFT:"left",RIGHT:"right",CENTER:Hc,START:"start",END:"end"};H.textAlign=Oc;var Lc="before",Pc={BEFORE:Lc,CENTER:"center",AFTER:"after"};H.displayAlign=Pc;var Ic=0;H.writingDirection={HORIZONTAL_LEFT_TO_RIGHT:Ic,HORIZONTAL_RIGHT_TO_LEFT:1,VERTICAL_LEFT_TO_RIGHT:2,VERTICAL_RIGHT_TO_LEFT:3};var Jc=0;H.lineInterpretation={LINE_NUMBER:Jc,PERCENTAGE:1};var Kc="center",Qc={CENTER:Kc,START:"start",END:"end"};
H.lineAlign=Qc;var Mc=400;H.fontWeight={NORMAL:Mc,BOLD:700};var Nc="normal",Rc={NORMAL:Nc,ITALIC:"italic",OBLIQUE:"oblique"};H.fontStyle=Rc;H.textDecoration={UNDERLINE:"underline",LINE_THROUGH:"lineThrough",OVERLINE:"overline"};function Fc(){this.id="";this.regionAnchorY=this.regionAnchorX=this.viewportAnchorY=this.viewportAnchorX=0;this.height=this.width=100;this.viewportAnchorUnits=this.widthUnits=this.heightUnits=Sc;this.scroll=Tc;}x("shaka.text.CueRegion",Fc);var Sc=1;
Fc.units={PX:0,PERCENTAGE:Sc,LINES:2};var Tc="";Fc.scrollMode={NONE:Tc,UP:"up"};function Uc(){this.a=new muxjs.mp4.Transmuxer({keepOriginalTimestamps:!0});this.b=null;this.g=[];this.c=[];this.f=!1;this.a.on("data",this.i.bind(this));this.a.on("done",this.h.bind(this));}Uc.prototype.destroy=function(){this.a.dispose();this.a=null;return Promise.resolve()};function Vc(b,c){return window.muxjs&&"mp2t"==b.split(";")[0].split("/")[1]?c?MediaSource.isTypeSupported(Wc(c,b)):MediaSource.isTypeSupported(Wc("audio",b))||MediaSource.isTypeSupported(Wc("video",b)):!1}
function Wc(b,c){var d=c.replace("mp2t","mp4");"audio"==b&&(d=d.replace("video","audio"));var e=/avc1\.(66|77|100)\.(\d+)/.exec(d);if(e){var f="avc1.",g=e[1],h=Number(e[2]);f=("66"==g?f+"4200":"77"==g?f+"4d00":f+"6400")+(h>>4).toString(16);f+=(h&15).toString(16);d=d.replace(e[0],f);}return d}function Xc(b,c){b.f=!0;b.b=new y;b.g=[];b.c=[];var d=new Uint8Array(c);b.a.push(d);b.a.flush();b.f&&b.b.reject(new A(2,3,3018));return b.b}
Uc.prototype.i=function(b){for(var c=0;c<b.captions.length;c++){var d=b.captions[c];this.c.push(new H(d.startTime,d.endTime,d.text));}c=new Uint8Array(b.data.byteLength+b.initSegment.byteLength);c.set(b.initSegment,0);c.set(b.data,b.initSegment.byteLength);this.g.push(c);};Uc.prototype.h=function(){var b={data:$b.apply(null,this.g),cues:this.c};this.b.resolve(b);this.f=!1;};function Yc(b){this.f=null;this.c=b;this.i=this.g=0;this.h=Infinity;this.b=this.a=null;}var I={};x("shaka.text.TextEngine.registerParser",function(b,c){I[b]=c;});x("shaka.text.TextEngine.unregisterParser",function(b){delete I[b];});Yc.prototype.destroy=function(){this.c=this.f=null;return Promise.resolve()};Yc.prototype.Qe=function(b){this.c=b;};Yc.prototype.setDisplayer=Yc.prototype.Qe;
Yc.prototype.Yb=function(b){var c={periodStart:0,segmentStart:null,segmentEnd:0};try{return this.f.parseMedia(new Uint8Array(b),c)[0].startTime}catch(d){throw new A(2,2,2009,d);}};
function Zc(b,c,d,e){return Promise.resolve().then(function(){if(this.f&&this.c)if(null==d||null==e)this.f.parseInit(new Uint8Array(c));else{var b={periodStart:this.g,segmentStart:this.g+d,segmentEnd:this.g+e};b=this.f.parseMedia(new Uint8Array(c),b).filter(function(b){return b.startTime>=this.i&&b.startTime<this.h}.bind(this));this.c.append(b);null==this.a&&(this.a=Math.max(d,this.i));this.b=Math.min(e,this.h);}}.bind(b))}
Yc.prototype.remove=function(b,c){return Promise.resolve().then(function(){!this.c||!this.c.remove(b,c)||null==this.a||c<=this.a||b>=this.b||(b<=this.a&&c>=this.b?this.a=this.b=null:b<=this.a&&c<this.b?this.a=c:b>this.a&&c>=this.b&&(this.b=b));}.bind(this))};Yc.prototype.xc=function(b){this.c.append(b);};Yc.prototype.appendCues=Yc.prototype.xc;function $c(b){this.f=b;this.o=null;this.b={};this.a=null;this.c={};this.i=new Ab;this.m=!1;this.h={};this.l=!1;b=this.j=new y;var c=new MediaSource;Db(this.i,c,"sourceopen",b.resolve);this.f.src=window.URL.createObjectURL(c);this.g=c;}
function ad(){var b={};'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function(c){b[c]=!!I[c]||
MediaSource.isTypeSupported(c)||Vc(c);var d=c.split(";")[0];b[d]=b[d]||b[c];});return b}n=$c.prototype;
n.destroy=function(){this.m=!0;var b=[],c;for(c in this.c){var d=this.c[c],e=d[0];this.c[c]=d.slice(0,1);e&&b.push(e.p["catch"](F.Ha));for(e=1;e<d.length;++e)d[e].p["catch"](F.Ha),d[e].p.reject();}this.a&&b.push(this.a.destroy());for(var f in this.h)b.push(this.h[f].destroy());this.f&&(this.f.removeAttribute("src"),this.f.load());return Promise.all(b).then(function(){this.i.destroy();this.o=this.a=this.g=this.f=this.i=null;this.b={};this.h={};this.c={};}.bind(this))};
n.init=function(b,c){var d=this;return this.j.then(function(){for(var e in b){var f=b[e];f=Lb(f.mimeType,f.codecs);"text"==e?bd(d,f):(!c&&MediaSource.isTypeSupported(f)||!Vc(f,e)||(d.h[e]=new Uc,f=Wc(e,f)),f=d.g.addSourceBuffer(f),D(d.i,f,"error",d.af.bind(d,e)),D(d.i,f,"updateend",d.Xa.bind(d,e)),d.b[e]=f,d.c[e]=[]);}})};function bd(b,c){b.a||(b.a=new Yc(b.o));b.a.f=new I[c];}
function cd(b,c){if("text"==c)var d=b.a.a;else d=dd(b,c),d=!d||1==d.length&&1E-6>d.end(0)-d.start(0)?null:1==d.length&&0>d.start(0)?0:d.length?d.start(0):null;return d}function ed(b,c){return"text"==c?b.a.b:yc(dd(b,c))}function fd(b,c,d){if("text"==c)return b=b.a,null==b.b||b.b<d?0:b.b-Math.max(d,b.a);b=dd(b,c);return Dc(b,d)}n.Vb=function(){var b=this.a&&null!=this.a.a?[{start:this.a.a,end:this.a.b}]:[];return{total:Ec(this.f.buffered),audio:Ec(dd(this,"audio")),video:Ec(dd(this,"video")),text:b}};
function dd(b,c){try{return b.b[c].buffered}catch(d){return null}}function gd(b,c,d,e,f){return"text"==c?Zc(b.a,d,e,f):b.h[c]?Xc(b.h[c],d).then(function(b){this.a||bd(this,"text/vtt");this.l&&this.a.xc(b.cues);return hd(this,c,this.fd.bind(this,c,b.data.buffer))}.bind(b)):hd(b,c,b.fd.bind(b,c,d))}n.remove=function(b,c,d){return"text"==b?this.a.remove(c,d):hd(this,b,this.gd.bind(this,b,c,d))};
function id(b,c){return"text"==c?b.a?b.a.remove(0,Infinity):Promise.resolve():hd(b,c,b.gd.bind(b,c,0,b.g.duration))}n.flush=function(b){return"text"==b?Promise.resolve():hd(this,b,this.zd.bind(this,b))};function jd(b,c,d,e,f){return"text"==c?(b.a.g=d,b=b.a,b.i=e,b.h=f,Promise.resolve()):Promise.all([hd(b,c,b.od.bind(b,c)),hd(b,c,b.Se.bind(b,c,d)),hd(b,c,b.Oe.bind(b,c,e,f))])}n.endOfStream=function(b){return kd(this,function(){b?this.g.endOfStream(b):this.g.endOfStream();}.bind(this))};
n.oa=function(b){return kd(this,function(){this.g.duration=b;}.bind(this))};n.S=function(){return this.g.duration};n.fd=function(b,c){this.b[b].appendBuffer(c);};n.gd=function(b,c,d){d<=c?this.Xa(b):this.b[b].remove(c,d);};n.od=function(b){var c=this.b[b].appendWindowStart,d=this.b[b].appendWindowEnd;this.b[b].abort();this.b[b].appendWindowStart=c;this.b[b].appendWindowEnd=d;this.Xa(b);};n.zd=function(b){this.f.currentTime-=.001;this.Xa(b);};
n.Se=function(b,c){0>c&&(c+=.001);this.b[b].timestampOffset=c;this.Xa(b);};n.Oe=function(b,c,d){this.b[b].appendWindowStart=0;this.b[b].appendWindowEnd=d;this.b[b].appendWindowStart=c;this.Xa(b);};n.af=function(b){this.c[b][0].p.reject(new A(2,3,3014,this.f.error?this.f.error.code:0));};n.Xa=function(b){var c=this.c[b][0];c&&(c.p.resolve(),ld(this,b));};
function hd(b,c,d){if(b.m)return Promise.reject();d={start:d,p:new y};b.c[c].push(d);if(1==b.c[c].length)try{d.start();}catch(e){"QuotaExceededError"==e.name?d.p.reject(new A(2,3,3017,c)):d.p.reject(new A(2,3,3015,e)),ld(b,c);}return d.p}
function kd(b,c){if(b.m)return Promise.reject();var d=[],e;for(e in b.b){var f=new y,g={start:function(b){b.resolve();}.bind(null,f),p:f};b.c[e].push(g);d.push(f);1==b.c[e].length&&g.start();}return Promise.all(d).then(function(){try{c();}catch(l){var b=Promise.reject(new A(2,3,3015,l));}for(var d in this.b)ld(this,d);return b}.bind(b),function(){return Promise.reject()}.bind(b))}function ld(b,c){b.c[c].shift();var d=b.c[c][0];if(d)try{d.start();}catch(e){d.p.reject(new A(2,3,3015,e)),ld(b,c);}}function md(b,c,d){return d==c||b>=nd&&d==c.split("-")[0]||b>=od&&d.split("-")[0]==c.split("-")[0]?!0:!1}var nd=1,od=2;function pd(b){b=b.toLowerCase().split("-");var c=qd[b[0]];c&&(b[0]=c);return b.join("-")}
var qd={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bod:"bo",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",ces:"cs",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cym:"cy",cze:"cs",dan:"da",deu:"de",div:"dv",dut:"nl",dzo:"dz",ell:"el",eng:"en",epo:"eo",est:"et",eus:"eu",ewe:"ee",fao:"fo",fas:"fa",fij:"fj",fin:"fi",fra:"fr",fre:"fr",
fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",hye:"hy",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",isl:"is",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kat:"ka",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",
lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mkd:"mk",mlg:"mg",mlt:"mt",mon:"mn",mri:"mi",msa:"ms",mya:"my",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nld:"nl",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",ron:"ro",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slk:"sk",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",sqi:"sq",
srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zho:"zh",zul:"zu"};function rd(b,c,d){var e=b.video;return e&&(e.width<c.minWidth||e.width>c.maxWidth||e.width>d.width||e.height<c.minHeight||e.height>c.maxHeight||e.height>d.height||e.width*e.height<c.minPixels||e.width*e.height>c.maxPixels)||b.bandwidth<c.minBandwidth||b.bandwidth>c.maxBandwidth?!1:!0}function sd(b,c,d){var e=!1;b.forEach(function(b){var f=b.allowedByApplication;b.allowedByApplication=rd(b,c,d);f!=b.allowedByApplication&&(e=!0);});return e}
function td(b,c,d,e){e.variants=e.variants.filter(function(e){return b&&b.M&&!wc(b,e)?!1:ud(e.audio,b,c)&&ud(e.video,b,d)});e.textStreams=e.textStreams.filter(function(b){return!!I[Lb(b.mimeType,b.codecs)]});}
function ud(b,c,d){if(!b)return!0;var e=null;c&&c.M&&(e=c.w);c=Lb(b.mimeType,b.codecs);var f=Lb(b.mimeType,b.codecs),g=b.mimeType,h;for(h in Mb){var k=b[h],l=Mb[h];k&&(g+="; "+l+'="'+k+'"');}return!(I[f]||MediaSource.isTypeSupported(g)||Vc(f,b.type))||e&&b.encrypted&&0>e.indexOf(c)||d&&(b.mimeType!=d.mimeType||b.codecs.split(".")[0]!=d.codecs.split(".")[0])?!1:!0}
function vd(b){var c=b.audio,d=b.video,e=c?c.codecs:null,f=d?d.codecs:null,g=[];f&&g.push(f);e&&g.push(e);var h=[];d&&h.push(d.mimeType);c&&h.push(c.mimeType);h=h[0]||null;var k=[];c&&k.push(c.kind);d&&k.push(d.kind);k=k[0]||null;var l=[];c&&l.push.apply(l,c.roles);d&&l.push.apply(l,d.roles);l=lb(l);b={id:b.id,active:!1,type:"variant",bandwidth:b.bandwidth,language:b.language,label:null,kind:k,width:null,height:null,frameRate:null,mimeType:h,codecs:g.join(", "),audioCodec:e,videoCodec:f,primary:b.primary,
roles:l,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:null};d&&(b.videoId=d.id,b.originalVideoId=d.originalId,b.width=d.width||null,b.height=d.height||null,b.frameRate=d.frameRate||null,b.videoBandwidth=d.bandwidth||null);c&&(b.audioId=c.id,b.originalAudioId=c.originalId,b.channelsCount=c.channelsCount,b.audioBandwidth=c.bandwidth||null,b.label=c.label);return b}
function wd(b){return{id:b.id,active:!1,type:"text",bandwidth:0,language:b.language,label:b.label,kind:b.kind||null,width:null,height:null,frameRate:null,mimeType:b.mimeType,codecs:b.codecs||null,audioCodec:null,videoCodec:null,primary:b.primary,roles:b.roles,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null,originalVideoId:null,originalAudioId:null,originalTextId:b.originalId}}
function xd(b){var c=[],d=yd(b.variants);b=b.textStreams;d.forEach(function(b){c.push(vd(b));});b.forEach(function(b){c.push(wd(b));});return c}function zd(b,c,d){return yd(b.variants).map(function(b){var e=vd(b);b.video&&b.audio?e.active=d==b.video.id&&c==b.audio.id:b.video?e.active=d==b.video.id:b.audio&&(e.active=c==b.audio.id);return e})}function Ad(b,c){return b.textStreams.map(function(b){var d=wd(b);d.active=c==b.id;return d})}
function Bd(b,c){for(var d=0;d<b.variants.length;d++)if(b.variants[d].id==c.id)return b.variants[d];return null}function Cd(b){return b.allowedByApplication&&b.allowedByKeySystem}function yd(b){return b.filter(function(b){return Cd(b)})}function Dd(b,c,d,e,f){b=Ed(b,c,d,f);return Fd(b,e)}
function Ed(b,c,d,e){var f=yd(b),g=f;b=f.filter(function(b){return b.primary});b.length&&(g=b);var h=g.length?g[0].language:"";g=g.filter(function(b){return b.language==h});if(c){var k=pd(c);[od,nd,0].forEach(function(b){var c=!1;f.forEach(function(d){k=pd(k);var f=pd(d.language);md(b,k,f)&&(c?g.push(d):(g=[d],c=!0),e&&(e.audio=!0));});});}if(d&&(c=Gd(g,d),c.length))return c;c=g.map(function(b){return(b.audio?b.audio.roles:[]).concat(b.video?b.video.roles:[])}).reduce(F.ja,[]);return c.length?Gd(g,c[0]):
g}function Fd(b,c){var d=b.filter(function(b){return b.audio&&b.audio.channelsCount}).reduce(function(b,c){var d=c.audio.channelsCount;b[d]?b[d].push(c):b[d]=[c];return b},{}),e=Object.keys(d);if(0==e.length)return b;var f=e.filter(function(b){return b<=c});return f.length?d[Math.max.apply(null,f)]:d[Math.min.apply(null,e)]}
function Hd(b,c,d,e){var f=b,g=b.filter(function(b){return b.primary});g.length&&(f=g);var h=f.length?f[0].language:"";f=f.filter(function(b){return b.language==h});if(c){var k=pd(c);[od,nd,0].forEach(function(c){var d=!1;b.forEach(function(b){var g=pd(b.language);md(c,k,g)&&(d?f.push(b):(f=[b],d=!0),e&&(e.text=!0));});});}if(d){if(c=Id(f,d),c.length)return c}else if(c=f.filter(function(b){return 0==b.roles.length}),c.length)return c;c=f.map(function(b){return b.roles}).reduce(F.ja,[]);return c.length?
Id(f,c[0]):f}function Gd(b,c){return b.filter(function(b){return b.audio&&0<=b.audio.roles.indexOf(c)||b.video&&0<=b.video.roles.indexOf(c)})}function Id(b,c){return b.filter(function(b){return 0<=b.roles.indexOf(c)})}function Jd(b,c,d){for(var e=0;e<d.length;e++)if(d[e].audio==b&&d[e].video==c)return d[e];return null}function Kd(b,c,d){function e(b,c){return null==b?null==c:c.id==b}for(var f=0;f<d.length;f++)if(e(b,d[f].audio)&&e(c,d[f].video))return d[f];return null}
function Ld(b,c){for(var d=b.periods.length-1;0<d;--d)if(c+Gb>=b.periods[d].startTime)return d;return 0}function Md(b,c){for(var d=0;d<b.periods.length;++d){var e=b.periods[d];if("text"==c.type)for(var f=0;f<e.textStreams.length;++f){if(e.textStreams[f]==c)return d}else for(f=0;f<e.variants.length;++f){var g=e.variants[f];if(g.audio==c||g.video==c||g.video&&g.video.trickModeVideo==c)return d}}return-1}
function nc(b){var c=[];b.periods.forEach(function(b){b.variants.forEach(function(b){c.push(b);});});return c}function qc(b){var c=[];b.audio&&c.push(b.audio);b.video&&c.push(b.video);return c}function J(){this.h=null;this.f=!1;this.b=new Ga;this.c=[];this.i=!1;this.a=this.g=null;}x("shaka.abr.SimpleAbrManager",J);J.prototype.stop=function(){this.h=null;this.f=!1;this.c=[];this.g=null;};J.prototype.stop=J.prototype.stop;J.prototype.init=function(b){this.h=b;};J.prototype.init=J.prototype.init;
J.prototype.chooseVariant=function(){var b=Nd(this.a.restrictions,this.c),c=this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.c.length&&!b.length&&(b=Nd(null,this.c),b=[b[0]]);for(var d=b[0]||null,e=0;e<b.length;++e){var f=b[e],g=(b[e+1]||{bandwidth:Infinity}).bandwidth/this.a.bandwidthUpgradeTarget;c>=f.bandwidth/this.a.bandwidthDowngradeTarget&&c<=g&&(d=f);}this.g=Date.now();return d};J.prototype.chooseVariant=J.prototype.chooseVariant;J.prototype.enable=function(){this.f=!0;};
J.prototype.enable=J.prototype.enable;J.prototype.disable=function(){this.f=!1;};J.prototype.disable=J.prototype.disable;J.prototype.segmentDownloaded=function(b,c){var d=this.b;if(!(16E3>c)){var e=8E3*c/b,f=b/1E3;d.a+=c;Ca(d.b,f,e);Ca(d.c,f,e);}if(null!=this.g&&this.f)a:{if(!this.i){if(!(128E3<=this.b.a))break a;this.i=!0;}else if(Date.now()-this.g<1E3*this.a.switchInterval)break a;d=this.chooseVariant();this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.h(d);}};
J.prototype.segmentDownloaded=J.prototype.segmentDownloaded;J.prototype.getBandwidthEstimate=function(){return this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate)};J.prototype.getBandwidthEstimate=J.prototype.getBandwidthEstimate;J.prototype.setVariants=function(b){this.c=b;};J.prototype.setVariants=J.prototype.setVariants;J.prototype.configure=function(b){this.a=b;};J.prototype.configure=J.prototype.configure;
function Nd(b,c){b&&(c=c.filter(function(c){return rd(c,b,{width:Infinity,height:Infinity})}));return c.sort(function(b,c){return b.bandwidth-c.bandwidth})}var Od="ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),Pd="buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),Qd=["loop","playbackRate"],Rd=["pause","play"],Sd="adaptation buffering emsg error loading streaming texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged unloading".split(" "),Td={getAssetUri:2,getAudioLanguages:2,getAudioLanguagesAndRoles:2,
getBufferedInfo:2,getConfiguration:2,getExpiration:2,getPlaybackRate:2,getTextLanguages:2,getTextLanguagesAndRoles:2,getTextTracks:2,getStats:5,usingEmbeddedTextTrack:2,getVariantTracks:2,isAudioOnly:10,isBuffering:1,isInProgress:1,isLive:10,isTextTrackVisible:1,keySystem:10,seekRange:1},Ud={getPlayheadTimeAsDate:1,getPresentationStartTimeAsDate:20},Vd=[["getConfiguration","configure"]],Wd=[["isTextTrackVisible","setTextTrackVisibility"]],Xd="addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectEmbeddedTextTrack selectTextLanguage selectTextTrack selectVariantTrack setTextTrackVisibility trickPlay".split(" "),
Yd=["attach","detach","load","unload"];
function Zd(b){return JSON.stringify(b,function(b,d){if("function"!=typeof d){if(d instanceof Event||d instanceof E){var c={},f;for(f in d){var g=d[f];g&&"object"==typeof g?"detail"==f&&(c[f]=g):f in Event||(c[f]=g);}return c}if(d instanceof TimeRanges)for(c={__type__:"TimeRanges",length:d.length,start:[],end:[]},f=0;f<d.length;++f)c.start.push(d.start(f)),c.end.push(d.end(f));else c="number"==typeof d?isNaN(d)?"NaN":isFinite(d)?d:0>d?"-Infinity":"Infinity":d;return c}})}
function $d(b){return JSON.parse(b,function(b,d){return"NaN"==d?NaN:"-Infinity"==d?-Infinity:"Infinity"==d?Infinity:d&&"object"==typeof d&&"TimeRanges"==d.__type__?ae(d):d})}function ae(b){return{length:b.length,start:function(c){return b.start[c]},end:function(c){return b.end[c]}}}function be(b,c,d,e,f,g){this.K=b;this.g=c;this.M=d;this.j=!1;this.A=e;this.I=f;this.u=g;this.b=this.h=!1;this.w="";this.i=null;this.l=this.Lc.bind(this);this.m=this.de.bind(this);this.a={video:{},player:{}};this.o=0;this.c={};this.f=null;}var ce=!1,de=null;n=be.prototype;n.destroy=function(){ee(this);de&&fe(this);this.I=this.A=this.g=null;this.b=this.h=!1;this.m=this.l=this.f=this.c=this.a=this.i=null;return Promise.resolve()};n.aa=function(){return this.b};n.kc=function(){return this.w};
n.init=function(){if(window.chrome&&chrome.cast&&chrome.cast.isAvailable){delete window.__onGCastApiAvailable;this.h=!0;this.g();var b=new chrome.cast.SessionRequest(this.K);b=new chrome.cast.ApiConfig(b,this.Mc.bind(this),this.je.bind(this),"origin_scoped");chrome.cast.initialize(b,function(){},function(){});ce&&setTimeout(this.g.bind(this),20);(b=de)&&b.status!=chrome.cast.SessionStatus.STOPPED?this.Mc(b):de=null;}else window.__onGCastApiAvailable=function(b){b&&this.init();}.bind(this);};
n.nc=function(b){this.i=b;this.b&&ge({type:"appData",appData:this.i});};n.cast=function(b){if(!this.h)return Promise.reject(new A(1,8,8E3));if(!ce)return Promise.reject(new A(1,8,8001));if(this.b)return Promise.reject(new A(1,8,8002));this.f=new y;chrome.cast.requestSession(this.hc.bind(this,b),this.Kc.bind(this));return this.f};n.Eb=function(){this.b&&(ee(this),de&&(fe(this),de.stop(function(){},function(){}),de=null));};
n.get=function(b,c){if("video"==b){if(0<=Rd.indexOf(c))return this.Wc.bind(this,b,c)}else if("player"==b){if(Ud[c]&&!this.get("player","isLive")())return function(){};if(0<=Xd.indexOf(c))return this.Wc.bind(this,b,c);if(0<=Yd.indexOf(c))return this.De.bind(this,b,c);if(Td[c])return this.Tc.bind(this,b,c)}return this.Tc(b,c)};n.set=function(b,c,d){this.a[b][c]=d;ge({type:"set",targetName:b,property:c,value:d});};
n.hc=function(b,c){de=c;c.addUpdateListener(this.l);c.addMessageListener("urn:x-cast:com.google.shaka.v2",this.m);this.Lc();ge({type:"init",initState:b,appData:this.i});this.f.resolve();};n.Kc=function(b){var c=8003;switch(b.code){case "cancel":c=8004;break;case "timeout":c=8005;break;case "receiver_unavailable":c=8006;}this.f.reject(new A(2,8,c,b));};n.Tc=function(b,c){return this.a[b][c]};
n.Wc=function(b,c,d){for(var e=[],f=2;f<arguments.length;++f)e[f-2]=arguments[f];ge({type:"call",targetName:b,methodName:c,args:e});};n.De=function(b,c,d){for(var e=[],f=2;f<arguments.length;++f)e[f-2]=arguments[f];f=new y;var g=this.o.toString();this.o++;this.c[g]=f;ge({type:"asyncCall",targetName:b,methodName:c,args:e,id:g});return f};n.Mc=function(b){var c=this.u();this.f=new y;this.j=!0;this.hc(c,b);};n.je=function(b){ce="available"==b;this.g();};
function fe(b){var c=de;c.removeUpdateListener(b.l);c.removeMessageListener("urn:x-cast:com.google.shaka.v2",b.m);}n.Lc=function(){var b=de?"connected"==de.status:!1;if(this.b&&!b){this.I();for(var c in this.a)this.a[c]={};ee(this);}this.w=(this.b=b)?de.receiver.friendlyName:"";this.g();};function ee(b){for(var c in b.c){var d=b.c[c];delete b.c[c];d.reject(new A(1,7,7E3));}}
n.de=function(b,c){var d=$d(c);switch(d.type){case "event":var e=d.event;this.A(d.targetName,new E(e.type,e));break;case "update":e=d.update;for(var f in e){d=this.a[f]||{};for(var g in e[f])d[g]=e[f][g];}this.j&&(this.M(),this.j=!1);break;case "asyncComplete":if(f=d.id,d=d.error,g=this.c[f],delete this.c[f],g)if(d){f=new A(d.severity,d.category,d.code);for(e in d)f[e]=d[e];g.reject(f);}else g.resolve();}};function ge(b){b=Zd(b);de.sendMessage("urn:x-cast:com.google.shaka.v2",b,function(){},Ia);}function K(){this.Ob=new zb;this.ub=this;}K.prototype.addEventListener=function(b,c){this.Ob.push(b,c);};K.prototype.removeEventListener=function(b,c){this.Ob.remove(b,c);};K.prototype.dispatchEvent=function(b){for(var c=this.Ob.get(b.type)||[],d=0;d<c.length;++d){b.target=this.ub;b.currentTarget=this.ub;var e=c[d];try{e.handleEvent?e.handleEvent(b):e.call(this,b);}catch(f){}if(b.a)break}return b.defaultPrevented};function L(b,c,d){K.call(this);this.c=b;this.b=c;this.i=this.g=this.f=this.j=this.h=null;this.a=new be(d,this.We.bind(this),this.Xe.bind(this),this.Ye.bind(this),this.Ze.bind(this),this.Dc.bind(this));he(this);}Aa(L,K);x("shaka.cast.CastProxy",L);L.prototype.destroy=function(b){b&&this.a&&this.a.Eb();b=[this.i?this.i.destroy():null,this.b?this.b.destroy():null,this.a?this.a.destroy():null];this.a=this.i=this.j=this.h=this.b=this.c=null;return Promise.all(b)};L.prototype.destroy=L.prototype.destroy;
L.prototype.Rd=function(){return this.h};L.prototype.getVideo=L.prototype.Rd;L.prototype.Id=function(){return this.j};L.prototype.getPlayer=L.prototype.Id;L.prototype.qd=function(){return this.a?this.a.h&&ce:!1};L.prototype.canCast=L.prototype.qd;L.prototype.aa=function(){return this.a?this.a.aa():!1};L.prototype.isCasting=L.prototype.aa;L.prototype.kc=function(){return this.a?this.a.kc():""};L.prototype.receiverName=L.prototype.kc;L.prototype.cast=function(){var b=this.Dc();return this.a.cast(b).then(function(){if(this.b)return this.b.sb()}.bind(this))};
L.prototype.cast=L.prototype.cast;L.prototype.nc=function(b){this.a.nc(b);};L.prototype.setAppData=L.prototype.nc;L.prototype.cf=function(){var b=this.a;if(b.b){var c=b.u();chrome.cast.requestSession(b.hc.bind(b,c),b.Kc.bind(b));}};L.prototype.suggestDisconnect=L.prototype.cf;L.prototype.Eb=function(){this.a.Eb();};L.prototype.forceDisconnect=L.prototype.Eb;
function he(b){b.a.init();b.i=new Ab;Od.forEach(function(b){D(this.i,this.c,b,this.lf.bind(this));}.bind(b));Sd.forEach(function(b){D(this.i,this.b,b,this.ye.bind(this));}.bind(b));b.h={};for(var c in b.c)Object.defineProperty(b.h,c,{configurable:!1,enumerable:!0,get:b.kf.bind(b,c),set:b.mf.bind(b,c)});b.j={};for(var d in b.b)Object.defineProperty(b.j,d,{configurable:!1,enumerable:!0,get:b.Sc.bind(b,d)});b.f=new K;b.f.ub=b.h;b.g=new K;b.g.ub=b.j;}n=L.prototype;
n.Dc=function(){var b={video:{},player:{},playerAfterLoad:{},manifest:this.b.Ub(),startTime:null};this.c.pause();Qd.forEach(function(c){b.video[c]=this.c[c];}.bind(this));this.c.ended||(b.startTime=this.c.currentTime);Vd.forEach(function(c){var d=c[1];c=this.b[c[0]]();b.player[d]=c;}.bind(this));Wd.forEach(function(c){var d=c[1];c=this.b[c[0]]();b.playerAfterLoad[d]=c;}.bind(this));return b};n.We=function(){this.dispatchEvent(new E("caststatuschanged"));};
n.Xe=function(){this.f.dispatchEvent(new E(this.h.paused?"pause":"play"));};
n.Ze=function(){var b=this;Vd.forEach(function(b){var c=b[1];b=this.a.get("player",b[0])();this.b[c](b);}.bind(this));var c=this.a.get("player","getAssetUri")(),d=this.a.get("video","ended"),e=Promise.resolve(),f=this.c.autoplay,g=null;d||(g=this.a.get("video","currentTime"));c&&(this.c.autoplay=!1,e=this.b.load(c,g));var h={};Qd.forEach(function(b){h[b]=this.a.get("video",b);}.bind(this));e.then(function(){b.c&&(Qd.forEach(function(b){this.c[b]=h[b];}.bind(b)),Wd.forEach(function(b){var c=b[1];b=this.a.get("player",
b[0])();this.b[c](b);}.bind(b)),b.c.autoplay=f,c&&b.c.play());},function(c){b.b.dispatchEvent(new E("error",{detail:c}));});};n.kf=function(b){if("addEventListener"==b)return this.f.addEventListener.bind(this.f);if("removeEventListener"==b)return this.f.removeEventListener.bind(this.f);if(this.a.aa()&&0==Object.keys(this.a.a.video).length){var c=this.c[b];if("function"!=typeof c)return c}return this.a.aa()?this.a.get("video",b):(b=this.c[b],"function"==typeof b&&(b=b.bind(this.c)),b)};
n.mf=function(b,c){this.a.aa()?this.a.set("video",b,c):this.c[b]=c;};n.lf=function(b){this.a.aa()||this.f.dispatchEvent(new E(b.type,b));};
n.Sc=function(b){if("addEventListener"==b)return this.g.addEventListener.bind(this.g);if("removeEventListener"==b)return this.g.removeEventListener.bind(this.g);if("getMediaElement"==b)return function(){return this.h}.bind(this);if("getSharedConfiguration"==b)return this.a.get("player","getConfiguration");if("getNetworkingEngine"==b)return this.b.Qa.bind(this.b);if(this.a.aa()){if("getManifest"==b||"drmInfo"==b)return function(){Ha(b+"() does not work while casting!");return null};if("getManifestUri"==
b)return Ha('"getManifestUri" is deprecated. Please use "getAssetUri".'),this.Sc("getAssetUri");if("attach"==b||"detach"==b)return function(){Ha(b+"() does not work while casting!");return Promise.resolve()}}return this.a.aa()&&0==Object.keys(this.a.a.video).length&&Td[b]||!this.a.aa()?this.b[b].bind(this.b):this.a.get("player",b)};n.ye=function(b){this.a.aa()||this.g.dispatchEvent(b);};n.Ye=function(b,c){this.a.aa()&&("video"==b?this.f.dispatchEvent(c):"player"==b&&this.g.dispatchEvent(c));};function ie(b,c,d,e){K.call(this);this.a=b;this.b=c;this.c=new Ab;this.u={video:b,player:c};this.w=d||function(){};this.A=e||function(b){return b};this.o=!1;this.h=!0;this.g=0;this.m=!1;this.j=!0;this.l=this.i=this.f=null;je(this);}Aa(ie,K);x("shaka.cast.CastReceiver",ie);ie.prototype.isConnected=function(){return this.o};ie.prototype.isConnected=ie.prototype.isConnected;ie.prototype.Ud=function(){return this.h};ie.prototype.isIdle=ie.prototype.Ud;
ie.prototype.destroy=function(){var b=[this.c?this.c.destroy():null,this.b?this.b.destroy():null];null!=this.l&&window.clearTimeout(this.l);this.w=this.u=this.c=this.b=this.a=null;this.o=!1;this.h=!0;this.l=this.i=this.f=null;return Promise.all(b).then(function(){cast.receiver.CastReceiverManager.getInstance().stop();})};ie.prototype.destroy=ie.prototype.destroy;
function je(b){var c=cast.receiver.CastReceiverManager.getInstance();c.onSenderConnected=b.Qc.bind(b);c.onSenderDisconnected=b.Qc.bind(b);c.onSystemVolumeChanged=b.xd.bind(b);b.i=c.getCastMessageBus("urn:x-cast:com.google.cast.media");b.i.onMessage=b.Zd.bind(b);b.f=c.getCastMessageBus("urn:x-cast:com.google.shaka.v2");b.f.onMessage=b.me.bind(b);c.start();Od.forEach(function(b){D(this.c,this.a,b,this.Uc.bind(this,"video"));}.bind(b));Sd.forEach(function(b){D(this.c,this.b,b,this.Uc.bind(this,"player"));}.bind(b));
cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?b.b.oc(3840,2160):b.b.oc(1920,1080);D(b.c,b.a,"loadeddata",function(){this.m=!0;}.bind(b));D(b.c,b.b,"loading",function(){this.h=!1;ke(this);}.bind(b));D(b.c,b.a,"playing",function(){this.h=!1;ke(this);}.bind(b));D(b.c,b.a,"pause",function(){ke(this);}.bind(b));D(b.c,b.b,"unloading",function(){this.h=!0;ke(this);}.bind(b));D(b.c,b.a,"ended",function(){window.setTimeout(function(){this.a&&this.a.ended&&
(this.h=!0,ke(this));}.bind(this),5E3);}.bind(b));}n=ie.prototype;n.Qc=function(){this.g=0;this.j=!0;this.o=0!=cast.receiver.CastReceiverManager.getInstance().getSenders().length;ke(this);};function ke(b){Promise.resolve().then(function(){this.b&&(this.dispatchEvent(new E("caststatuschanged")),le(this)||me(this,0));}.bind(b));}
function ne(b,c,d){for(var e in c.player)b.b[e](c.player[e]);b.w(d);d=Promise.resolve();var f=b.a.autoplay;c.manifest&&(b.a.autoplay=!1,d=b.b.load(c.manifest,c.startTime));d.then(function(){if(b.b){for(var d in c.video)b.a[d]=c.video[d];for(var e in c.playerAfterLoad)b.b[e](c.playerAfterLoad[e]);b.a.autoplay=f;c.manifest&&(b.a.play(),me(b,0));}},function(c){b.b.dispatchEvent(new E("error",{detail:c}));});}n.Uc=function(b,c){this.b&&(this.ic(),oe(this,{type:"event",targetName:b,event:c},this.f));};
n.ic=function(){null!=this.l&&window.clearTimeout(this.l);this.l=window.setTimeout(this.ic.bind(this),500);var b={video:{},player:{}};Pd.forEach(function(c){b.video[c]=this.a[c];}.bind(this));if(this.b.U())for(var c in Ud)0==this.g%Ud[c]&&(b.player[c]=this.b[c]());for(var d in Td)0==this.g%Td[d]&&(b.player[d]=this.b[d]());if(c=cast.receiver.CastReceiverManager.getInstance().getSystemVolume())b.video.volume=c.level,b.video.muted=c.muted;this.m&&(this.g+=1);oe(this,{type:"update",update:b},this.f);le(this);};
function le(b){return b.j&&(b.a.duration||b.b.U())?(pe(b),b.j=!1,!0):!1}function pe(b){var c={contentId:b.b.Ub(),streamType:b.b.U()?"LIVE":"BUFFERED",duration:b.a.duration,contentType:""};me(b,0,c);}n.xd=function(){var b=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();b&&oe(this,{type:"update",update:{video:{volume:b.level,muted:b.muted}}},this.f);oe(this,{type:"event",targetName:"video",event:{type:"volumechange"}},this.f);};
n.me=function(b){var c=$d(b.data);switch(c.type){case "init":this.g=0;this.m=!1;this.j=!0;ne(this,c.initState,c.appData);this.ic();break;case "appData":this.w(c.appData);break;case "set":var d=c.targetName,e=c.property;c=c.value;if("video"==d){var f=cast.receiver.CastReceiverManager.getInstance();if("volume"==e){f.setSystemVolumeLevel(c);break}else if("muted"==e){f.setSystemVolumeMuted(c);break}}this.u[d][e]=c;break;case "call":d=this.u[c.targetName];d[c.methodName].apply(d,c.args);break;case "asyncCall":d=
c.targetName;e=c.methodName;"player"==d&&"load"==e&&(this.g=0,this.m=!1);f=c.id;b=b.senderId;var g=this.u[d];c=g[e].apply(g,c.args);"player"==d&&"load"==e&&(c=c.then(function(){this.j=!0;}.bind(this)));c.then(this.ad.bind(this,b,f,null),this.ad.bind(this,b,f));}};
n.Zd=function(b){var c=$d(b.data);switch(c.type){case "PLAY":this.a.play();me(this,0);break;case "PAUSE":this.a.pause();me(this,0);break;case "SEEK":b=c.currentTime;var d=c.resumeState;null!=b&&(this.a.currentTime=Number(b));d&&"PLAYBACK_START"==d?(this.a.play(),me(this,0)):d&&"PLAYBACK_PAUSE"==d&&(this.a.pause(),me(this,0));break;case "STOP":this.b.sb().then(function(){this.b&&me(this,0);}.bind(this));break;case "GET_STATUS":me(this,Number(c.requestId));break;case "VOLUME":d=c.volume;b=d.level;d=
d.muted;var e=this.a.volume,f=this.a.muted;null!=b&&(this.a.volume=Number(b));null!=d&&(this.a.muted=d);e==this.a.volume&&f==this.a.muted||me(this,0);break;case "LOAD":this.g=0;this.j=this.m=!1;b=c.currentTime;d=this.A(c.media.contentId);this.a.autoplay=!0;this.b.load(d,b).then(function(){this.b&&pe(this);}.bind(this))["catch"](function(b){var d="LOAD_FAILED";7==b.category&&7E3==b.code&&(d="LOAD_CANCELLED");oe(this,{requestId:Number(c.requestId),type:d},this.i);}.bind(this));break;default:oe(this,{requestId:Number(c.requestId),
type:"INVALID_REQUEST",reason:"INVALID_COMMAND"},this.i);}};n.ad=function(b,c,d){this.b&&oe(this,{type:"asyncComplete",id:c,error:d},this.f,b);};function oe(b,c,d,e){b.o&&(b=Zd(c),e?d.getCastChannel(e).send(b):d.broadcast(b));}
function me(b,c,d){var e=b.a.playbackRate;var f=qe;f=b.h?f.IDLE:b.b.Gc()?f.jd:b.a.paused?f.ld:f.md;e={mediaSessionId:0,playbackRate:e,playerState:f,currentTime:b.a.currentTime,supportedMediaCommands:15,volume:{level:b.a.volume,muted:b.a.muted}};d&&(e.media=d);oe(b,{requestId:c,type:"MEDIA_STATUS",status:[e]},b.i);}var qe={IDLE:"IDLE",md:"PLAYING",jd:"BUFFERING",ld:"PAUSED"};var M={Db:function(b,c){var d=M.N(b,c);return 1!=d.length?null:d[0]},N:function(b,c){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&b.tagName==c})},yd:function(b,c,d){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&b.localName==d&&b.namespaceURI==c})},getAttributeNS:function(b,c,d){return b.hasAttributeNS(c,d)?b.getAttributeNS(c,d):null},Fb:function(b){return Array.prototype.every.call(b.childNodes,function(b){return b.nodeType==
Node.TEXT_NODE||b.nodeType==Node.CDATA_SECTION_NODE})?b.textContent.trim():null},F:function(b,c,d,e){e=void 0===e?null:e;var f=null;b=b.getAttribute(c);null!=b&&(f=d(b));return null==f?e:f},ue:function(b){if(!b)return null;/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(b)&&(b+="Z");b=Date.parse(b);return isNaN(b)?null:Math.floor(b/1E3)},ta:function(b){if(!b)return null;b=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(b);if(!b)return null;b=31536E3*
Number(b[1]||null)+2592E3*Number(b[2]||null)+86400*Number(b[3]||null)+3600*Number(b[4]||null)+60*Number(b[5]||null)+Number(b[6]||null);return isFinite(b)?b:null},Lb:function(b){var c=/([0-9]+)-([0-9]+)/.exec(b);if(!c)return null;b=Number(c[1]);if(!isFinite(b))return null;c=Number(c[2]);return isFinite(c)?{start:b,end:c}:null},parseInt:function(b){b=Number(b);return 0===b%1?b:null},Kb:function(b){b=Number(b);return 0===b%1&&0<b?b:null},Ya:function(b){b=Number(b);return 0===b%1&&0<=b?b:null},parseFloat:function(b){b=
Number(b);return isNaN(b)?null:b},wd:function(b){var c;b=(c=b.match(/^(\d+)\/(\d+)$/))?Number(c[1]/c[2]):Number(b);return isNaN(b)?null:b}};var re={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"};
function se(b,c,d){b=te(b);var e=null,f=[],g=[],h=b.map(function(b){return b.keyId}).filter(F.ma);if(h.length&&1<h.filter(F.la).length)throw new A(2,4,4010);d||(g=b.filter(function(b){return"urn:mpeg:dash:mp4protection:2011"==b.$c?(e=b.init||e,!1):!0}),g.length&&(f=ue(e,c,g),0==f.length&&(f=[Fb("",e)])));!b.length||!d&&g.length||(f=G(re).filter(function(b){return"org.w3.clearkey"!=b}).map(function(b){return Fb(b,e)}));var k=h[0]||null;k&&f.forEach(function(b){b.initData.forEach(function(b){b.keyId=
k;});});return{yc:k,rf:e,drmInfos:f,Cc:!0}}function ve(b,c,d,e){var f=se(b,c,e);if(d.Cc){b=1==d.drmInfos.length&&!d.drmInfos[0].keySystem;c=0==f.drmInfos.length;if(0==d.drmInfos.length||b&&!c)d.drmInfos=f.drmInfos;d.Cc=!1;}else if(0<f.drmInfos.length&&(d.drmInfos=d.drmInfos.filter(function(b){return f.drmInfos.some(function(c){return c.keySystem==b.keySystem})}),0==d.drmInfos.length))throw new A(2,4,4008);return f.yc||d.yc}
function ue(b,c,d){return d.map(function(d){var e=re[d.$c];return e?[Fb(e,d.init||b)]:c(d.node)||[]}).reduce(F.ja,[])}
function te(b){return b.map(function(b){var c=b.getAttribute("schemeIdUri"),e=M.getAttributeNS(b,"urn:mpeg:cenc:2013","default_KID"),f=M.yd(b,"urn:mpeg:cenc:2013","pssh").map(M.Fb);if(!c)return null;c=c.toLowerCase();if(e&&(e=e.replace(/-/g,"").toLowerCase(),0<=e.indexOf(" ")))throw new A(2,4,4009);var g=[];try{g=f.map(function(b){return{initDataType:"cenc",initData:Wb(b),keyId:null}});}catch(h){throw new A(2,4,4007);}return{node:b,$c:c,keyId:e,init:0<g.length?g:null}}).filter(F.ma)}function we(b,c,d,e,f){null!=f&&(f=Math.round(f));var g={RepresentationID:c,Number:d,Bandwidth:e,Time:f};return b.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,function(b,c,d,e){if("$$"==b)return"$";var f=g[c];if(null==f)return b;"RepresentationID"==c&&d&&(d=void 0);switch(e){case void 0:case "d":case "i":case "u":b=f.toString();break;case "o":b=f.toString(8);break;case "x":b=f.toString(16);break;case "X":b=f.toString(16).toUpperCase();break;default:b=f.toString();}d=
window.parseInt(d,10)||1;return Array(Math.max(0,d-b.length)+1).join("0")+b})}
function xe(b,c){var d=ye(b,c,"timescale"),e=1;d&&(e=M.Kb(d)||1);d=ye(b,c,"duration");(d=M.Kb(d||""))&&(d/=e);var f=ye(b,c,"startNumber"),g=Number(ye(b,c,"presentationTimeOffset"))||0,h=M.Ya(f||"");if(null==f||null==h)h=1;var k=ze(b,c,"SegmentTimeline");f=null;if(k){f=e;var l=b.O.duration||Infinity;k=M.N(k,"S");for(var m=[],r=0,t=0;t<k.length;++t){var u=k[t],v=M.F(u,"t",M.Ya),z=M.F(u,"d",M.Ya);u=M.F(u,"r",M.parseInt);null!=v&&(v-=g);if(!z)break;v=null!=v?v:r;u=u||0;if(0>u)if(t+1<k.length){u=M.F(k[t+
1],"t",M.Ya);if(null==u)break;else if(v>=u)break;u=Math.ceil((u-v)/z)-1;}else{if(Infinity==l)break;else if(v/f>=l)break;u=Math.ceil((l*f-v)/z)-1;}0<m.length&&v!=r&&(m[m.length-1].end=v/f);for(var Y=0;Y<=u;++Y)r=v+z,m.push({start:v/f,end:r/f,gf:v}),v=r;}f=m;}return{timescale:e,T:d,La:h,fa:g/e||0,tc:g,J:f}}function ye(b,c,d){return[c(b.v),c(b.W),c(b.da)].filter(F.ma).map(function(b){return b.getAttribute(d)}).reduce(function(b,c){return b||c})}
function ze(b,c,d){return[c(b.v),c(b.W),c(b.da)].filter(F.ma).map(function(b){return M.Db(b,d)}).reduce(function(b,c){return b||c})}function Ae(b,c){var d=new DOMParser;try{var e=Nb(b);var f=d.parseFromString(e,"text/xml");}catch(h){}if(f&&f.documentElement.tagName==c)var g=f.documentElement;return g&&0<g.getElementsByTagName("parsererror").length?null:g}
function Be(b,c,d,e,f,g){for(var h=M.getAttributeNS(b,"http://www.w3.org/1999/xlink","href"),k=M.getAttributeNS(b,"http://www.w3.org/1999/xlink","actuate")||"onRequest",l=0;l<b.attributes.length;l++){var m=b.attributes[l];"http://www.w3.org/1999/xlink"==m.namespaceURI&&(b.removeAttributeNS(m.namespaceURI,m.localName),--l);}if(5<=g)return fb(new A(2,4,4028));if("onLoad"!=k)return fb(new A(2,4,4027));var r=Eb([e],[h]);return f.request(0,ub(r,c)).X(function(e){e=Ae(e.data,b.tagName);if(!e)return fb(new A(2,
4,4001,h));for(;b.childNodes.length;)b.removeChild(b.childNodes[0]);for(;e.childNodes.length;){var k=e.childNodes[0];e.removeChild(k);b.appendChild(k);}for(k=0;k<e.attributes.length;k++){var m=e.attributes[k].nodeName,l=e.getAttribute(m);b.setAttribute(m,l);}return Ce(b,c,d,r[0],f,g+1)})}
function Ce(b,c,d,e,f,g){g=void 0===g?0:g;if(M.getAttributeNS(b,"http://www.w3.org/1999/xlink","href")){var h=Be(b,c,d,e,f,g);d&&(h=h.X(void 0,function(){return Ce(b,c,d,e,f,g)}));return h}for(h=0;h<b.childNodes.length;h++){var k=b.childNodes[h];k instanceof Element&&"urn:mpeg:dash:resolve-to-zero:2013"==M.getAttributeNS(k,"http://www.w3.org/1999/xlink","href")&&(b.removeChild(k),--h);}h=[];for(k=0;k<b.childNodes.length;k++){var l=b.childNodes[k];l.nodeType==Node.ELEMENT_NODE&&h.push(Ce(l,c,d,e,f,
g));}return jb(h).X(function(){return b})}function De(b,c,d){this.c=b;this.b=c;this.a=d;}x("shaka.media.InitSegmentReference",De);De.prototype.Qb=function(){return this.c()};De.prototype.createUris=De.prototype.Qb;De.prototype.Xb=function(){return this.b};De.prototype.getStartByte=De.prototype.Xb;De.prototype.Wb=function(){return this.a};De.prototype.getEndByte=De.prototype.Wb;function N(b,c,d,e,f,g){this.position=b;this.startTime=c;this.endTime=d;this.c=e;this.b=f;this.a=g;}x("shaka.media.SegmentReference",N);N.prototype.Y=function(){return this.position};
N.prototype.getPosition=N.prototype.Y;N.prototype.Yb=function(){return this.startTime};N.prototype.getStartTime=N.prototype.Yb;N.prototype.Dd=function(){return this.endTime};N.prototype.getEndTime=N.prototype.Dd;N.prototype.Qb=function(){return this.c()};N.prototype.createUris=N.prototype.Qb;N.prototype.Xb=function(){return this.b};N.prototype.getStartByte=N.prototype.Xb;N.prototype.Wb=function(){return this.a};N.prototype.getEndByte=N.prototype.Wb;function O(b,c){this.H=b;this.b=c==Ee;this.a=0;}x("shaka.util.DataViewReader",O);var Ee=1;O.Endianness={nf:0,pf:Ee};O.prototype.ka=function(){return this.a<this.H.byteLength};O.prototype.hasMoreData=O.prototype.ka;O.prototype.Y=function(){return this.a};O.prototype.getPosition=O.prototype.Y;O.prototype.Ed=function(){return this.H.byteLength};O.prototype.getLength=O.prototype.Ed;O.prototype.ea=function(){try{var b=this.H.getUint8(this.a);this.a+=1;return b}catch(c){Fe();}};O.prototype.readUint8=O.prototype.ea;
O.prototype.mb=function(){try{var b=this.H.getUint16(this.a,this.b);this.a+=2;return b}catch(c){Fe();}};O.prototype.readUint16=O.prototype.mb;O.prototype.B=function(){try{var b=this.H.getUint32(this.a,this.b);this.a+=4;return b}catch(c){Fe();}};O.prototype.readUint32=O.prototype.B;O.prototype.Vc=function(){try{var b=this.H.getInt32(this.a,this.b);this.a+=4;return b}catch(c){Fe();}};O.prototype.readInt32=O.prototype.Vc;
O.prototype.$a=function(){try{if(this.b){var b=this.H.getUint32(this.a,!0);var c=this.H.getUint32(this.a+4,!0);}else c=this.H.getUint32(this.a,!1),b=this.H.getUint32(this.a+4,!1);}catch(d){Fe();}if(2097151<c)throw new A(2,3,3001);this.a+=8;return c*Math.pow(2,32)+b};O.prototype.readUint64=O.prototype.$a;O.prototype.Ka=function(b){this.a+b>this.H.byteLength&&Fe();var c=new Uint8Array(this.H.buffer,this.H.byteOffset+this.a,b);this.a+=b;return new Uint8Array(c)};O.prototype.readBytes=O.prototype.Ka;
O.prototype.G=function(b){this.a+b>this.H.byteLength&&Fe();this.a+=b;};O.prototype.skip=O.prototype.G;O.prototype.Zc=function(b){this.a<b&&Fe();this.a-=b;};O.prototype.rewind=O.prototype.Zc;O.prototype.seek=function(b){(0>b||b>this.H.byteLength)&&Fe();this.a=b;};O.prototype.seek=O.prototype.seek;O.prototype.jc=function(){for(var b=this.a;this.ka()&&0!=this.H.getUint8(this.a);)this.a+=1;b=new Uint8Array(this.H.buffer,this.H.byteOffset+b,this.a-b);this.a+=1;return Nb(b)};
O.prototype.readTerminatedString=O.prototype.jc;function Fe(){throw new A(2,3,3E3);}function P(){this.c=[];this.b=[];this.a=!1;}x("shaka.util.Mp4Parser",P);P.prototype.D=function(b,c){var d=Ge(b);this.c[d]=0;this.b[d]=c;return this};P.prototype.box=P.prototype.D;P.prototype.$=function(b,c){var d=Ge(b);this.c[d]=1;this.b[d]=c;return this};P.prototype.fullBox=P.prototype.$;P.prototype.stop=function(){this.a=!0;};P.prototype.stop=P.prototype.stop;
P.prototype.parse=function(b,c){var d=new Uint8Array(b);d=new O(new DataView(d.buffer,d.byteOffset,d.byteLength),0);for(this.a=!1;d.ka()&&!this.a;)this.Jb(0,d,c);};P.prototype.parse=P.prototype.parse;
P.prototype.Jb=function(b,c,d){var e=c.Y(),f=c.B(),g=c.B();switch(f){case 0:f=c.H.byteLength-e;break;case 1:f=c.$a();}var h=this.b[g];if(h){var k=null,l=null;1==this.c[g]&&(l=c.B(),k=l>>>24,l&=16777215);g=e+f;d&&g>c.H.byteLength&&(g=c.H.byteLength);g-=c.Y();c=0<g?c.Ka(g):new Uint8Array(0);c=new O(new DataView(c.buffer,c.byteOffset,c.byteLength),0);h({parser:this,partialOkay:d||!1,version:k,flags:l,reader:c,size:f,start:e+b});}else c.G(e+f-c.Y());};P.prototype.parseNext=P.prototype.Jb;
function R(b){for(;b.reader.ka()&&!b.parser.a;)b.parser.Jb(b.start,b.reader,b.partialOkay);}P.children=R;function He(b){for(var c=b.reader.B();0<c&&!b.parser.a;--c)b.parser.Jb(b.start,b.reader,b.partialOkay);}P.sampleDescription=He;function Ie(b){return function(c){b(c.reader.Ka(c.reader.H.byteLength-c.reader.Y()));}}P.allData=Ie;function Ge(b){for(var c=0,d=0;d<b.length;d++)c=c<<8|b.charCodeAt(d);return c}function Je(b){return String.fromCharCode(b>>24&255,b>>16&255,b>>8&255,b&255)}P.typeToString=Je;function Ke(b,c,d,e){var f,g=(new P).$("sidx",function(b){f=Le(c,e,d,b);});b&&g.parse(b);if(f)return f;throw new A(2,3,3004);}
function Le(b,c,d,e){var f=[];e.reader.G(4);var g=e.reader.B();if(0==g)throw new A(2,3,3005);if(0==e.version){var h=e.reader.B();var k=e.reader.B();}else h=e.reader.$a(),k=e.reader.$a();e.reader.G(2);var l=e.reader.mb();b=b+e.size+k;for(k=0;k<l;k++){var m=e.reader.B(),r=(m&2147483648)>>>31;m&=2147483647;var t=e.reader.B();e.reader.G(4);if(1==r)throw new A(2,3,3006);f.push(new N(f.length,h/g-c,(h+t)/g-c,function(){return d},b,b+m-1));h+=t;b+=m;}e.parser.stop();return f}function S(b){this.a=b;}x("shaka.media.SegmentIndex",S);S.prototype.Md=function(){return this.a};S.prototype.getReferences=S.prototype.Md;S.prototype.destroy=function(){this.a=null;return Promise.resolve()};S.prototype.destroy=S.prototype.destroy;S.prototype.find=function(b){for(var c=this.a.length-1;0<=c;--c){var d=this.a[c];if(b>=d.startTime&&b<d.endTime)return d.position}return this.a.length&&b<this.a[0].startTime?this.a[0].position:null};S.prototype.find=S.prototype.find;
S.prototype.get=function(b){if(0==this.a.length)return null;b-=this.a[0].position;return 0>b||b>=this.a.length?null:this.a[b]};S.prototype.get=S.prototype.get;S.prototype.offset=function(b){for(var c=0;c<this.a.length;++c)this.a[c].startTime+=b,this.a[c].endTime+=b;};S.prototype.offset=S.prototype.offset;S.prototype.cc=function(b){var c;for(c=0;c<b.length;c++)this.a.push(b[c]);};S.prototype.merge=S.prototype.cc;
S.prototype.Sb=function(b){for(var c=0;c<this.a.length;++c)if(this.a[c].endTime>b){this.a.splice(0,c);return}this.a=[];};S.prototype.evict=S.prototype.Sb;function Me(b,c){for(;b.a.length;)if(b.a[b.a.length-1].startTime>=c)b.a.pop();else break;for(;b.a.length;)if(0>=b.a[0].endTime)b.a.shift();else break;if(0!=b.a.length){var d=b.a[b.a.length-1];b.a[b.a.length-1]=new N(d.position,d.startTime,c,d.c,d.b,d.a);}}function Ne(b){this.b=b;this.a=new O(b,0);Oe||(Oe=[new Uint8Array([255]),new Uint8Array([127,255]),new Uint8Array([63,255,255]),new Uint8Array([31,255,255,255]),new Uint8Array([15,255,255,255,255]),new Uint8Array([7,255,255,255,255,255]),new Uint8Array([3,255,255,255,255,255,255]),new Uint8Array([1,255,255,255,255,255,255,255])]);}var Oe;Ne.prototype.ka=function(){return this.a.ka()};
function Pe(b){var c=Qe(b);if(7<c.length)throw new A(2,3,3002);for(var d=0,e=0;e<c.length;e++)d=256*d+c[e];c=d;d=Qe(b);a:{for(e=0;e<Oe.length;e++)if(Zb(d,Oe[e])){e=!0;break a}e=!1;}if(e)d=b.b.byteLength-b.a.Y();else{if(8==d.length&&d[1]&224)throw new A(2,3,3001);e=d[0]&(1<<8-d.length)-1;for(var f=1;f<d.length;f++)e=256*e+d[f];d=e;}d=b.a.Y()+d<=b.b.byteLength?d:b.b.byteLength-b.a.Y();e=new DataView(b.b.buffer,b.b.byteOffset+b.a.Y(),d);b.a.G(d);return new Re(c,e)}
function Qe(b){var c=b.a.ea(),d;for(d=1;8>=d&&!(c&1<<8-d);d++);if(8<d)throw new A(2,3,3002);var e=new Uint8Array(d);e[0]=c;for(c=1;c<d;c++)e[c]=b.a.ea();return e}function Re(b,c){this.id=b;this.a=c;}function Se(b){if(8<b.a.byteLength)throw new A(2,3,3002);if(8==b.a.byteLength&&b.a.getUint8(0)&224)throw new A(2,3,3001);for(var c=0,d=0;d<b.a.byteLength;d++){var e=b.a.getUint8(d);c=256*c+e;}return c}function Te(){}
Te.prototype.parse=function(b,c,d,e){var f;c=new Ne(new DataView(c));if(440786851!=Pe(c).id)throw new A(2,3,3008);var g=Pe(c);if(408125543!=g.id)throw new A(2,3,3009);c=g.a.byteOffset;g=new Ne(g.a);for(f=null;g.ka();){var h=Pe(g);if(357149030==h.id){f=h;break}}if(!f)throw new A(2,3,3010);g=new Ne(f.a);f=1E6;for(h=null;g.ka();){var k=Pe(g);if(2807729==k.id)f=Se(k);else if(17545==k.id)if(h=k,4==h.a.byteLength)h=h.a.getFloat32(0);else if(8==h.a.byteLength)h=h.a.getFloat64(0);else throw new A(2,3,3003);
}if(null==h)throw new A(2,3,3011);g=f/1E9;f=h*g;b=Pe(new Ne(new DataView(b)));if(475249515!=b.id)throw new A(2,3,3007);return Ue(b,c,g,f,d,e)};function Ue(b,c,d,e,f,g){function h(){return f}var k=[];b=new Ne(b.a);for(var l=null,m=null;b.ka();){var r=Pe(b);if(187==r.id){var t=Ve(r);t&&(r=d*t.hf,t=c+t.Ce,null!=l&&k.push(new N(k.length,l-g,r-g,h,m,t-1)),l=r,m=t);}}null!=l&&k.push(new N(k.length,l-g,e-g,h,m,null));return k}
function Ve(b){var c=new Ne(b.a);b=Pe(c);if(179!=b.id)throw new A(2,3,3013);b=Se(b);c=Pe(c);if(183!=c.id)throw new A(2,3,3012);c=new Ne(c.a);for(var d=0;c.ka();){var e=Pe(c);if(241==e.id){d=Se(e);break}}return{hf:b,Ce:d}}function We(b,c){var d=ze(b,c,"Initialization");if(!d)return null;var e=b.v.ga,f=d.getAttribute("sourceURL");f&&(e=Eb(b.v.ga,[f]));f=0;var g=null;if(d=M.F(d,"range",M.Lb))f=d.start,g=d.end;return new De(function(){return e},f,g)}
function Xe(b,c){var d=Number(ye(b,Ye,"presentationTimeOffset"))||0,e=ye(b,Ye,"timescale"),f=1;e&&(f=M.Kb(e)||1);d=d/f||0;e=We(b,Ye);var g=b.v.contentType;f=b.v.mimeType.split("/")[1];if("text"!=g&&"mp4"!=f&&"webm"!=f)throw new A(2,4,4006);if("webm"==f&&!e)throw new A(2,4,4005);g=ze(b,Ye,"RepresentationIndex");var h=ye(b,Ye,"indexRange"),k=b.v.ga;h=M.Lb(h||"");if(g){var l=g.getAttribute("sourceURL");l&&(k=Eb(b.v.ga,[l]));h=M.F(g,"range",M.Lb,h);}if(!h)throw new A(2,4,4002);f=Ze(b,c,e,k,h.start,h.end,
f,d);return{createSegmentIndex:f.createSegmentIndex,findSegmentPosition:f.findSegmentPosition,getSegmentReference:f.getSegmentReference,initSegmentReference:e,fa:d}}
function Ze(b,c,d,e,f,g,h,k){var l=b.presentationTimeline,m=!b.Pa||!b.O.Zb,r=b.O.index,t=b.O.duration,u=c,v=null;return{createSegmentIndex:function(){var b=[u(e,f,g),"webm"==h?u(d.c(),d.b,d.a):null];u=null;return Promise.all(b).then(function(b){var c=b[0];b=b[1]||null;c="mp4"==h?Ke(c,f,e,k):(new Te).parse(c,b,e,k);l.Wa(c,0==r);v=new S(c);m&&Me(v,t);})},findSegmentPosition:function(b){return v.find(b)},getSegmentReference:function(b){return v.get(b)}}}function Ye(b){return b.nb}function $e(b,c){var d=We(b,af);var e=bf(b);var f=xe(b,af),g=f.La;0==g&&(g=1);var h=0;f.T?h=f.T*(g-1):f.J&&0<f.J.length&&(h=f.J[0].start);e={T:f.T,startTime:h,La:g,fa:f.fa,J:f.J,Ua:e};if(!e.T&&!e.J&&1<e.Ua.length)throw new A(2,4,4002);if(!e.T&&!b.O.duration&&!e.J&&1==e.Ua.length)throw new A(2,4,4002);if(e.J&&0==e.J.length)throw new A(2,4,4002);g=f=null;b.da.id&&b.v.id&&(g=b.da.id+","+b.v.id,f=c[g]);h=cf(b.O.duration,e.La,b.v.ga,e);f?(f.cc(h),g=b.presentationTimeline.ib(),f.Sb(g-b.O.start)):(b.presentationTimeline.Wa(h,
0==b.O.index),f=new S(h),g&&b.Pa&&(c[g]=f));b.Pa&&b.O.Zb||Me(f,b.O.duration);return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:f.find.bind(f),getSegmentReference:f.get.bind(f),initSegmentReference:d,fa:e.fa}}function af(b){return b.wa}
function cf(b,c,d,e){var f=e.Ua.length;e.J&&e.J.length!=e.Ua.length&&(f=Math.min(e.J.length,e.Ua.length));for(var g=[],h=e.startTime,k=0;k<f;k++){var l=e.Ua[k],m=Eb(d,[l.Vd]),r=void 0;r=null!=e.T?h+e.T:e.J?e.J[k].end:h+b;g.push(new N(k+c,h,r,function(b){return b}.bind(null,m),l.start,l.end));h=r;}return g}
function bf(b){return[b.v.wa,b.W.wa,b.da.wa].filter(F.ma).map(function(b){return M.N(b,"SegmentURL")}).reduce(function(b,d){return 0<b.length?b:d}).map(function(c){c.getAttribute("indexRange")&&!b.Fc&&(b.Fc=!0);var d=c.getAttribute("media");c=M.F(c,"mediaRange",M.Lb,{start:0,end:null});return{Vd:d,start:c.start,end:c.end}})}function df(b,c,d,e){var f=ef(b);var g=xe(b,ff);var h=ye(b,ff,"media"),k=ye(b,ff,"index");g={T:g.T,timescale:g.timescale,La:g.La,fa:g.fa,tc:g.tc,J:g.J,bc:h,kb:k};h=g.kb?1:0;h+=g.J?1:0;h+=g.T?1:0;if(0==h)throw new A(2,4,4002);1!=h&&(g.kb&&(g.J=null),g.T=null);if(!g.kb&&!g.bc)throw new A(2,4,4002);if(g.kb){d=b.v.mimeType.split("/")[1];if("mp4"!=d&&"webm"!=d)throw new A(2,4,4006);if("webm"==d&&!f)throw new A(2,4,4005);e=we(g.kb,b.v.id,null,b.bandwidth||null,null);e=Eb(b.v.ga,[e]);b=Ze(b,c,f,e,0,null,
d,g.fa);}else g.T?(e||b.presentationTimeline.ec(g.T),b=gf(b,g)):(h=c=null,b.da.id&&b.v.id&&(h=b.da.id+","+b.v.id,c=d[h]),k=hf(b,g,c),e=!b.Pa||!b.O.Zb,c?(e&&Me(new S(k),b.O.duration),c.cc(k),d=b.presentationTimeline.ib(),c.Sb(d-b.O.start)):(b.presentationTimeline.Wa(k,0==b.O.index),c=new S(k),h&&b.Pa&&(d[h]=c)),e&&Me(c,b.O.duration),b={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:c.find.bind(c),getSegmentReference:c.get.bind(c)});return{createSegmentIndex:b.createSegmentIndex,
findSegmentPosition:b.findSegmentPosition,getSegmentReference:b.getSegmentReference,initSegmentReference:f,fa:g.fa}}function ff(b){return b.pb}
function gf(b,c){var d=b.O.duration,e=c.T,f=c.La,g=c.timescale,h=c.bc,k=b.bandwidth||null,l=b.v.id,m=b.v.ga;return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0>b||d&&b>=d?null:Math.floor(b/e)},getSegmentReference:function(b){var c=b*e,r=c+e;d&&(r=Math.min(r,d));return 0>r||d&&c>=d?null:new N(b,c,r,function(){var d=we(h,l,b+f,k,c*g);return Eb(m,[d])},0,null)}}}
function hf(b,c,d){var e=[];for(d=d?d.a.length:0;d<c.J.length;d++){var f=d+c.La;e.push(new N(f,c.J[d].start,c.J[d].end,function(b,c,d,e,f,r){b=we(b,c,f,d,r);return Eb(e,[b]).map(function(b){return b.toString()})}.bind(null,c.bc,b.v.id,b.bandwidth||null,b.v.ga,f,c.J[d].gf+c.tc),0,null));}return e}function ef(b){var c=ye(b,ff,"initialization");if(!c)return null;var d=b.v.id,e=b.bandwidth||null,f=b.v.ga;return new De(function(){var b=we(c,d,null,e,null);return Eb(f,[b])},0,null)}var jf={},kf={};x("shaka.media.ManifestParser.registerParserByExtension",function(b,c){kf[b]=c;});x("shaka.media.ManifestParser.registerParserByMime",function(b,c){jf[b]=c;});function lf(){var b={},c;for(c in jf)b[c]=!0;for(var d in kf)b[d]=!0;["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"].forEach(function(c){b[c]=!!jf[c];});["mpd","m3u8","ism"].forEach(function(c){b[c]=!!kf[c];});return b}
function mf(b,c,d,e){return p(function g(){var h;return w(g,function(g){switch(g.s){case 1:return g.pa=2,q(g,nf(b,c,d,e),4);case 4:return g["return"](g.C);case 2:throw h=ra(g),h.severity=2,h;}})})}
function nf(b,c,d,e){return p(function g(){var h,k,l,m,r,t,u,v,z,Y;return w(g,function(g){switch(g.s){case 1:if(e&&(h=e.toLowerCase(),k=jf[h]))return g["return"](k);l=new Ka(b);m=l.ca.split("/");r=m.pop();t=r.split(".");return 1<t.length&&(u=t.pop().toLowerCase(),v=kf[u])?g["return"](v):q(g,of(b,c,d),2);case 2:z=g.C;if(Y=jf[z])return g["return"](Y);throw new A(2,4,4E3,b);}})})}
function of(b,c,d){return p(function f(){var g,h,k;return w(f,function(f){switch(f.s){case 1:return g=ub([b],d),g.method="HEAD",q(f,c.request(0,g).promise,2);case 2:return h=f.C,k=h.headers["content-type"],f["return"](k?k.toLowerCase():"")}})})}function T(b,c){this.b=b;this.Mb=c;this.f=this.c=Infinity;this.a=1;this.j=0;this.g=null;this.i=0;this.l=!0;this.h=0;}x("shaka.media.PresentationTimeline",T);T.prototype.S=function(){return this.c};T.prototype.getDuration=T.prototype.S;T.prototype.oa=function(b){this.c=b;};T.prototype.setDuration=T.prototype.oa;T.prototype.Kd=function(){return this.b};T.prototype.getPresentationStartTime=T.prototype.Kd;T.prototype.bd=function(b){this.i=b;};T.prototype.setClockOffset=T.prototype.bd;
T.prototype.qb=function(b){this.l=b;};T.prototype.setStatic=T.prototype.qb;T.prototype.pc=function(b){this.f=b;};T.prototype.setSegmentAvailabilityDuration=T.prototype.pc;T.prototype.Pe=function(b){this.Mb=b;};T.prototype.setDelay=T.prototype.Pe;T.prototype.Cd=function(){return this.Mb};T.prototype.getDelay=T.prototype.Cd;
T.prototype.Wa=function(b,c){0!=b.length&&(c&&(this.j=Math.max(this.j,b[0].startTime)),this.a=b.reduce(function(b,c){return Math.max(b,c.endTime-c.startTime)},this.a),this.g=Math.max(this.g,b[b.length-1].endTime),null!=this.b&&(this.b=(Date.now()+this.i)/1E3-this.g-this.a));};T.prototype.notifySegments=T.prototype.Wa;T.prototype.ec=function(b){this.a=Math.max(this.a,b);};T.prototype.notifyMaxSegmentDuration=T.prototype.ec;T.prototype.U=function(){return Infinity==this.c&&!this.l};
T.prototype.isLive=T.prototype.U;T.prototype.Fa=function(){return Infinity!=this.c&&!this.l};T.prototype.isInProgress=T.prototype.Fa;T.prototype.ib=function(){if(Infinity==this.f)return this.h;var b=this.Sa()-this.f;return Math.max(this.h,b)};T.prototype.getSegmentAvailabilityStart=T.prototype.ib;T.prototype.cd=function(b){this.h=b;};T.prototype.setUserSeekStart=T.prototype.cd;T.prototype.Sa=function(){return this.U()||this.Fa()?Math.min(Math.max(0,(Date.now()+this.i)/1E3-this.a-this.b),this.c):this.c};
T.prototype.getSegmentAvailabilityEnd=T.prototype.Sa;T.prototype.hb=function(b){var c=Math.max(this.j,this.h);if(Infinity==this.f)return c;var d=this.Sa()-this.f;b=Math.min(d+b,this.ra());return Math.max(c,b)};T.prototype.getSafeSeekRangeStart=T.prototype.hb;T.prototype.Ra=function(){return this.hb(0)};T.prototype.getSeekRangeStart=T.prototype.Ra;T.prototype.ra=function(){var b=this.U()||this.Fa()?this.Mb:0;return Math.max(0,this.Sa()-b)};T.prototype.getSeekRangeEnd=T.prototype.ra;
T.prototype.hd=function(){return null==this.b||null!=this.g?!1:!0};T.prototype.usingPresentationStartTime=T.prototype.hd;function pf(){this.a=this.b=null;this.h=[];this.c=null;this.j=[];this.i=1;this.l={};this.m=0;this.o=new Ba(5);this.f=null;this.g=new qb;}x("shaka.dash.DashParser",pf);n=pf.prototype;n.configure=function(b){this.b=b;};n.start=function(b,c){this.h=[b];this.a=c;return qf(this).then(function(b){this.a&&rf(this,b);return this.c}.bind(this))};n.stop=function(){this.b=this.a=null;this.h=[];this.c=null;this.j=[];this.l={};null!=this.f&&(window.clearTimeout(this.f),this.f=null);return this.g.destroy()};
n.update=function(){qf(this)["catch"](function(b){if(this.a)this.a.onError(b);}.bind(this));};n.onExpirationUpdated=function(){};function qf(b){var c=Date.now(),d=b.a.networkingEngine.request(0,ub(b.h,b.b.retryParameters));rb(b.g,d);return d.promise.then(function(c){if(b.a)return sf(b,c.data,c.uri)}).then(function(){var d=(Date.now()-c)/1E3;Ca(b.o,1,d);return d})}
function sf(b,c,d){c=Ae(c,"MPD");if(!c)throw new A(2,4,4001,d);c=Ce(c,b.b.retryParameters,b.b.dash.xlinkFailGracefully,d,b.a.networkingEngine);rb(b.g,c);return c.promise.then(function(c){return tf(b,c,d)})}
function tf(b,c,d){return p(function f(){var g,h,k,l,m,r,t,u,v,z,Y,ba,Ea,Fa,X,Q,Qa,$f,ag,bg,cg,dg,eg,fg;return w(f,function(f){switch(f.s){case 1:l=F;m=M;r=[d];t=m.N(c,"Location").map(m.Fb).filter(l.ma);0<t.length&&(r=b.h=t);u=m.N(c,"BaseURL").map(m.Fb);v=Eb(r,u);z=m.F(c,"minBufferTime",m.ta);b.m=m.F(c,"minimumUpdatePeriod",m.ta,-1);Y=m.F(c,"availabilityStartTime",m.ue);ba=m.F(c,"timeShiftBufferDepth",m.ta);Ea=m.F(c,"suggestedPresentationDelay",m.ta);Fa=m.F(c,"maxSegmentDuration",m.ta);X=c.getAttribute("type")||
"static";b.c?Q=b.c.presentationTimeline:(Qa=Math.max(b.b.dash.defaultPresentationDelay,1.5*z),$f=null!=Ea?Ea:Qa,Q=new T(Y,$f));ag={Pa:"static"!=X,presentationTimeline:Q,da:null,O:null,W:null,v:null,bandwidth:0,Fc:!1};for(var gg=ag,nj=v,zc=M.F(c,"mediaPresentationDuration",M.ta),Ac=[],Ra=0,Jb=M.N(c,"Period"),Za=0;Za<Jb.length;Za++){var $a=Jb[Za];Ra=M.F($a,"start",M.ta,Ra);var Bc=M.F($a,"duration",M.ta),Sa=null;if(Za!=Jb.length-1){var hg=M.F(Jb[Za+1],"start",M.ta);null!=hg&&(Sa=hg-Ra);}else null!=zc&&
(Sa=zc-Ra);null==Sa&&(Sa=Bc);$a=uf(b,gg,nj,{start:Ra,duration:Sa,node:$a,index:Za,Zb:null==Sa||Za==Jb.length-1});Ac.push($a);Bc=gg.da.id;-1==b.j.indexOf(Bc)&&(b.j.push(Bc),b.c&&(b.a.filterNewPeriod($a),b.c.periods.push($a)));if(null==Sa){Ra=null;break}Ra+=Sa;}null==b.c&&b.a.filterAllPeriods(Ac);null!=zc?(g=Ac,h=zc,k=!1):(g=Ac,h=Ra,k=!0);bg=h;cg=g;Q.qb("static"==X);"static"!=X&&k||Q.oa(bg||Infinity);(dg=Q.U())&&!isNaN(b.b.availabilityWindowOverride)&&(ba=b.b.availabilityWindowOverride);null==ba&&(ba=
Infinity);Q.pc(ba);Q.ec(Fa||1);if(b.c){f.P(0);break}b.c={presentationTimeline:Q,periods:cg,offlineSessionIds:[],minBufferTime:z||0};if(!Q.hd()){f.P(0);break}eg=m.N(c,"UTCTiming");return q(f,vf(b,v,eg,dg),4);case 4:fg=f.C;if(!b.a)return f["return"]();Q.bd(fg);f.s=0;}})})}
function uf(b,c,d,e){c.da=wf(e.node,null,d);c.O=e;c.da.id||(c.da.id="__shaka_period_"+e.start);M.N(e.node,"EventStream").forEach(b.we.bind(b,e.start,e.duration));d=M.N(e.node,"AdaptationSet").map(b.te.bind(b,c)).filter(F.ma);if(c.Pa){c=d.map(function(b){return b.Ee}).reduce(F.ja,[]);var f=c.filter(F.la);if(c.length!=f.length)throw new A(2,4,4018);}var g=d.filter(function(b){return!b.sc});d.filter(function(b){return b.sc}).forEach(function(b){var c=b.streams[0],d=b.sc;g.forEach(function(b){b.id==d&&
b.streams.forEach(function(b){b.trickModeVideo=c;});});});c=xf(g,"video");f=xf(g,"audio");if(!c.length&&!f.length)throw new A(2,4,4004);f.length||(f=[null]);c.length||(c=[null]);d=[];for(var h=0;h<f.length;h++)for(var k=0;k<c.length;k++)yf(b,f[h],c[k],d);b=xf(g,"text");c=[];for(f=0;f<b.length;f++)c.push.apply(c,b[f].streams);return{startTime:e.start,textStreams:c,variants:d}}function xf(b,c){return b.filter(function(b){return b.contentType==c})}
function yf(b,c,d,e){if(c||d)if(c&&d){var f=c.drmInfos;var g=d.drmInfos;if(f.length&&g.length?0<xc(f,g).length:1){g=xc(c.drmInfos,d.drmInfos);for(var h=0;h<c.streams.length;h++)for(var k=0;k<d.streams.length;k++)f=(d.streams[k].bandwidth||0)+(c.streams[h].bandwidth||0),f={id:b.i++,language:c.language,primary:c.ac||d.ac,audio:c.streams[h],video:d.streams[k],bandwidth:f,drmInfos:g,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}}else for(g=c||d,h=0;h<g.streams.length;h++)f=g.streams[h].bandwidth||
0,f={id:b.i++,language:g.language||"und",primary:g.ac,audio:c?g.streams[h]:null,video:d?g.streams[h]:null,bandwidth:f,drmInfos:g.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}
n.te=function(b,c){b.W=wf(c,b.da,null);var d=!1,e=M.N(c,"Role"),f=e.map(function(b){return b.getAttribute("value")}).filter(F.ma),g=void 0,h="text"==b.W.contentType;h&&(g="subtitle");for(var k=0;k<e.length;k++){var l=e[k].getAttribute("schemeIdUri");if(null==l||"urn:mpeg:dash:role:2011"==l)switch(l=e[k].getAttribute("value"),l){case "main":d=!0;break;case "caption":case "subtitle":g=l;}}var m=null,r=!1;M.N(c,"EssentialProperty").forEach(function(b){"http://dashif.org/guidelines/trickmode"==b.getAttribute("schemeIdUri")?
m=b.getAttribute("value"):r=!0;});if(r)return null;e=M.N(c,"ContentProtection");var t=se(e,this.b.dash.customScheme,this.b.dash.ignoreDrmInfo);e=pd(c.getAttribute("lang")||"und");l=c.getAttribute("label");k=M.N(c,"Representation");f=k.map(this.xe.bind(this,b,t,g,e,l,d,f)).filter(function(b){return!!b});if(0==f.length){if(h)return null;throw new A(2,4,4003);}b.W.contentType&&"application"!=b.W.contentType||(b.W.contentType=zf(f[0].mimeType,f[0].codecs),f.forEach(function(c){c.type=b.W.contentType;}));
f.forEach(function(b){t.drmInfos.forEach(function(c){b.keyId&&c.keyIds.push(b.keyId);});});h=k.map(function(b){return b.getAttribute("id")}).filter(F.ma);return{id:b.W.id||"__fake__"+this.i++,contentType:b.W.contentType,language:e,ac:d,streams:f,drmInfos:t.drmInfos,sc:m,Ee:h}};
n.xe=function(b,c,d,e,f,g,h,k){b.v=wf(k,b.W,null);if(!Af(b.v))return null;b.bandwidth=M.F(k,"bandwidth",M.Kb)||0;var l=b.v.contentType;l="text"==l||"application"==l;try{var m=this.Fe.bind(this);if(b.v.nb)var r=Xe(b,m);else if(b.v.wa)r=$e(b,this.l);else if(b.v.pb)r=df(b,m,this.l,!!this.c);else{var t=b.v.ga,u=b.O.duration||0;r={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0<=b&&b<u?1:null},getSegmentReference:function(b){return 1!=b?null:new N(1,0,u,function(){return t},
0,null)},initSegmentReference:null,fa:0};}}catch(v){if(l&&4002==v.code)return null;throw v;}k=M.N(k,"ContentProtection");k=ve(k,this.b.dash.customScheme,c,this.b.dash.ignoreDrmInfo);return{id:this.i++,originalId:b.v.id,createSegmentIndex:r.createSegmentIndex,findSegmentPosition:r.findSegmentPosition,getSegmentReference:r.getSegmentReference,initSegmentReference:r.initSegmentReference,presentationTimeOffset:r.fa,mimeType:b.v.mimeType,codecs:b.v.codecs,frameRate:b.v.frameRate,bandwidth:b.bandwidth,width:b.v.width,
height:b.v.height,kind:d,encrypted:0<c.drmInfos.length,keyId:k,language:e,label:f,type:b.W.contentType,primary:g,trickModeVideo:null,containsEmsgBoxes:b.v.containsEmsgBoxes,roles:h,channelsCount:b.v.fc}};n.$e=function(){null!=this.f&&(window.clearTimeout(this.f),this.f=null);qf(this).then(function(b){this.a&&rf(this,b);}.bind(this))["catch"](function(b){this.a&&(b.severity=1,this.a.onError(b),rf(this,0));}.bind(this));};
function rf(b,c){0>b.m||(b.f=window.setTimeout(b.$e.bind(b),1E3*Math.max(3,b.m-c,Da(b.o))));}
function wf(b,c,d){c=c||{contentType:"",mimeType:"",codecs:"",containsEmsgBoxes:!1,frameRate:void 0,fc:null};d=d||c.ga;var e=M.Ya,f=M.wd,g=M.N(b,"BaseURL").map(M.Fb),h=b.getAttribute("contentType")||c.contentType,k=b.getAttribute("mimeType")||c.mimeType,l=b.getAttribute("codecs")||c.codecs;f=M.F(b,"frameRate",f)||c.frameRate;var m=!!M.N(b,"InbandEventStream").length,r=M.N(b,"AudioChannelConfiguration");r=Bf(r)||c.fc;h||(h=zf(k,l));return{ga:Eb(d,g),nb:M.Db(b,"SegmentBase")||c.nb,wa:M.Db(b,"SegmentList")||
c.wa,pb:M.Db(b,"SegmentTemplate")||c.pb,width:M.F(b,"width",e)||c.width,height:M.F(b,"height",e)||c.height,contentType:h,mimeType:k,codecs:l,frameRate:f,containsEmsgBoxes:m||c.containsEmsgBoxes,id:b.getAttribute("id"),fc:r}}
function Bf(b){for(var c=0;c<b.length;++c){var d=b[c],e=d.getAttribute("schemeIdUri");if(e&&(d=d.getAttribute("value")))switch(e){case "urn:mpeg:dash:outputChannelPositionList:2012":return d.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":e=parseInt(d,10);if(!e)continue;return e;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":if(e=parseInt(d,
16)){for(b=0;e;)e&1&&++b,e>>=1;return b}}}return null}function Af(b){var c=b.nb?1:0;c+=b.wa?1:0;c+=b.pb?1:0;if(0==c)return"text"==b.contentType||"application"==b.contentType?!0:!1;1!=c&&(b.nb&&(b.wa=null),b.pb=null);return!0}
function Cf(b,c,d,e){c=Eb(c,[d]);c=ub(c,b.b.retryParameters);c.method=e;c=b.a.networkingEngine.request(4,c);rb(b.g,c);return c.promise.then(function(b){if("HEAD"==e){if(!b.headers||!b.headers.date)return 0;b=b.headers.date;}else b=Nb(b.data);b=Date.parse(b);return isNaN(b)?0:b-Date.now()})}
function vf(b,c,d,e){d=d.map(function(b){return{scheme:b.getAttribute("schemeIdUri"),value:b.getAttribute("value")}});var f=b.b.dash.clockSyncUri;e&&!d.length&&f&&d.push({scheme:"urn:mpeg:dash:utc:http-head:2014",value:f});return F.vd(d,function(b){var d=b.value;switch(b.scheme){case "urn:mpeg:dash:utc:http-head:2014":case "urn:mpeg:dash:utc:http-head:2012":return Cf(this,c,d,"HEAD");case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return Cf(this,
c,d,"GET");case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return b=Date.parse(d),isNaN(b)?0:b-Date.now();case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":return Promise.reject();default:return Promise.reject()}}.bind(b))["catch"](function(){return 0})}
n.we=function(b,c,d){var e=M.Ya,f=d.getAttribute("schemeIdUri")||"",g=d.getAttribute("value")||"",h=M.F(d,"timescale",e)||1;M.N(d,"Event").forEach(function(d){var k=M.F(d,"presentationTime",e)||0,m=M.F(d,"duration",e)||0;k=k/h+b;m=k+m/h;null!=c&&(k=Math.min(k,b+c),m=Math.min(m,b+c));d={schemeIdUri:f,value:g,startTime:k,endTime:m,id:d.getAttribute("id")||"",eventElement:d};this.a.onTimelineRegionAdded(d);}.bind(this));};
n.Fe=function(b,c,d){b=ub(b,this.b.retryParameters);null!=c&&(b.headers.Range="bytes="+c+"-"+(null!=d?d:""));c=this.a.networkingEngine.request(1,b);rb(this.g,c);return c.promise.then(function(b){return b.data})};function zf(b,c){return I[Lb(b,c)]?"text":b.split("/")[0]}kf.mpd=pf;jf["application/dash+xml"]=pf;function Df(b,c,d,e){this.uri=b;this.type=c;this.a=d;this.segments=e||null;}function Ef(b,c,d,e){this.id=b;this.name=c;this.a=d;this.value=void 0===e?null:e;}Ef.prototype.toString=function(){function b(b){return b.name+'="'+b.value+'"'}return this.value?"#"+this.name+":"+this.value:0<this.a.length?"#"+this.name+":"+this.a.map(b).join(","):"#"+this.name};function Ff(b,c){this.name=b;this.value=c;}
Ef.prototype.getAttribute=function(b){var c=this.a.filter(function(c){return c.name==b});return c.length?c[0]:null};function Gf(b,c,d){return(b=b.getAttribute(c))?b.value:d||null}function Hf(b,c){this.a=c;this.uri=b;}function If(b,c){return b.filter(function(b){return b.name==c})}function Jf(b,c){var d=If(b,c);return d.length?d[0]:null}function Kf(b,c,d){return b.filter(function(b){var e=b.getAttribute("TYPE");b=b.getAttribute("GROUP-ID");return e.value==c&&b.value==d})}function Lf(b,c){return Eb([b],[c])[0]}function Mf(b){this.b=b;this.a=0;}function Nf(b){Of(b,/[ \t]+/gm);}function Of(b,c){c.lastIndex=b.a;var d=c.exec(b.b);d=null==d?null:{position:d.index,length:d[0].length,He:d};if(b.a==b.b.length||null==d||d.position!=b.a)return null;b.a+=d.length;return d.He}function Pf(b){return b.a==b.b.length?null:(b=Of(b,/[^ \t\n]*/gm))?b[0]:null}function Qf(){this.a=0;}
function Rf(b,c,d){c=Nb(c);c=c.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n").trim();var e=c.split(/\n+/m);if(!/^#EXTM3U($|[ \t\n])/m.test(e[0]))throw new A(2,4,4015);c=0;for(var f=1;f<e.length;f++)if(!/^#(?!EXT)/m.test(e[f])){var g=Sf(b,e[f]);--b.a;if(0<=Tf.indexOf(g.name)){c=1;break}else"EXT-X-STREAM-INF"==g.name&&(f+=1);}f=[];for(g=1;g<e.length;)if(/^#(?!EXT)/m.test(e[g]))g+=1;else{var h=Sf(b,e[g]);if(0<=Uf.indexOf(h.name)){if(1!=c)throw new A(2,4,4017);e=e.splice(g,e.length-g);b=Vf(b,e,f);return new Df(d,
c,f,b)}f.push(h);g+=1;"EXT-X-STREAM-INF"==h.name&&(h.a.push(new Ff("URI",e[g])),g+=1);}return new Df(d,c,f)}function Vf(b,c,d){var e=[],f=[];c.forEach(function(c){if(/^(#EXT)/.test(c))c=Sf(b,c),0<=Tf.indexOf(c.name)?d.push(c):f.push(c);else{if(/^#(?!EXT)/m.test(c))return[];e.push(new Hf(c.trim(),f));f=[];}});return e}
function Sf(b,c){a:{var d=b.a++;var e=c.match(/^#(EXT[^:]*)(?::(.*))?$/);if(!e)throw new A(2,4,4016,c);var f=e[1],g=e[2];e=[];if(g&&0<=g.indexOf("=")){g=new Mf(g);for(var h,k=/([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;h=Of(g,k);)e.push(new Ff(h[1],h[2]||h[3]));}else if(g){d=new Ef(d,f,e,g);break a}d=new Ef(d,f,e);}return d}var Tf="EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(" "),Uf="EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");function Wf(b){try{var c=Wf.parse(b);return hb({uri:b,data:c.data,headers:{"content-type":c.contentType}})}catch(d){return fb(d)}}x("shaka.net.DataUriPlugin",Wf);
Wf.parse=function(b){var c=b.split(":");if(2>c.length||"data"!=c[0])throw new A(2,1,1004,b);c=c.slice(1).join(":").split(",");if(2>c.length)throw new A(2,1,1004,b);var d=c[0];c=window.decodeURIComponent(c.slice(1).join(","));d=d.split(";");var e=null;1<d.length&&(e=d[1]);if("base64"==e)b=Wb(c).buffer;else{if(e)throw new A(2,1,1005,b);b=Rb(c);}return{data:b,contentType:d[0]}};tb("data",Wf);function Xf(){this.g=this.c=null;this.M=1;this.w={};this.K={};this.Z={};this.a={};this.b=null;this.l="";this.o=new Qf;this.j=this.i=null;this.f=Yf;this.m=null;this.u=0;this.A=Infinity;this.h=new qb;this.I=[];}x("shaka.hls.HlsParser",Xf);n=Xf.prototype;n.configure=function(b){this.g=b;};n.start=function(b,c){this.c=c;this.l=b;return Zf(this,b).then(function(c){return ig(this,c.data,b).then(function(){jg(this,this.i);return this.m}.bind(this))}.bind(this))};
n.stop=function(){this.g=this.c=null;this.w={};this.K={};this.m=null;return this.h.destroy()};n.update=function(){if(this.f!=kg.Ca){var b=[],c;for(c in this.a)b.push(lg(this,this.a[c],c));return Promise.all(b)}};
function lg(b,c,d){Zf(b,d).then(function(b){var e=kg,g=Rf(this.o,b.data,d);if(1!=g.type)throw new A(2,4,4017);b=Jf(g.a,"EXT-X-MEDIA-SEQUENCE");var h=c.stream;mg(this,g,b?Number(b.value):0,h.mimeType,h.codecs).then(function(b){c.ob.a=b;b=b[b.length-1];Jf(g.a,"EXT-X-ENDLIST")&&(ng(this,e.Ca),this.b.oa(b.endTime));}.bind(this));}.bind(b));}n.onExpirationUpdated=function(){};
function ig(b,c,d){c=Rf(b.o,c,d);if(0!=c.type)throw new A(2,4,4022);return og(b,c).then(function(b){this.c.filterAllPeriods([b]);var c=Infinity,d=0,e=Infinity,k;for(k in this.a){var l=this.a[k];c=Math.min(c,l.dc);d=Math.max(d,l.dc);"text"!=l.stream.type&&(e=Math.min(e,l.duration));}this.f!=kg.Ca?(this.b=new T(0,3*this.u),this.b.qb(!1)):(this.b=new T(null,0),this.b.qb(!0));pg(this);if(this.f!=kg.Ca){this.i=this.A;this.f==kg.uc&&(c=this.b.Mb,isNaN(this.g.availabilityWindowOverride)||(c=this.g.availabilityWindowOverride),
this.b.pc(c));for(c=0;95443.7176888889<=d;)c+=95443.7176888889,d-=95443.7176888889;if(c)for(var m in this.a)d=this.a[m],95443.7176888889>d.dc&&(d.stream.presentationTimeOffset=-c,d.ob.offset(c));}else{this.b.oa(e);for(var r in this.a)m=this.a[r],m.stream.presentationTimeOffset=c,m.ob.offset(-c),Me(m.ob,e);}this.m={presentationTimeline:this.b,periods:[b],offlineSessionIds:[],minBufferTime:0};}.bind(b))}
function og(b,c){var d=c.a,e=If(c.a,"EXT-X-MEDIA").filter(function(b){return"SUBTITLES"==qg(b,"TYPE")}.bind(b)).map(function(b){return rg(this,b)}.bind(b));return Promise.all(e).then(function(b){var e=If(d,"EXT-X-STREAM-INF").map(function(b){return sg(this,b,c)}.bind(this));return Promise.all(e).then(function(c){return{startTime:0,variants:c.reduce(F.ja,[]),textStreams:b}}.bind(this))}.bind(b))}
function sg(b,c,d){var e=Gf(c,"CODECS","avc1.42E01E,mp4a.40.2").split(","),f=c.getAttribute("RESOLUTION"),g=null,h=null,k=Gf(c,"FRAME-RATE"),l=Number(qg(c,"BANDWIDTH"));if(f){var m=f.value.split("x");g=m[0];h=m[1];}d=If(d.a,"EXT-X-MEDIA");var r=Gf(c,"AUDIO"),t=Gf(c,"VIDEO");r?d=Kf(d,"AUDIO",r):t&&(d=Kf(d,"VIDEO",t));if(m=tg("text",e)){var u=Gf(c,"SUBTITLES");u&&(u=Kf(d,"SUBTITLES",u),u.length&&(b.w[u[0].id].stream.codecs=m));e.splice(e.indexOf(m),1);}d=d.map(function(b){return ug(this,b,e)}.bind(b));
var v=[],z=[];return Promise.all(d).then(function(b){r?v=b:t&&(z=b);b=!1;if(v.length||z.length)if(v.length)if(qg(c,"URI")==v[0].mc){var d="audio";b=!0;}else d="video";else d="audio";else 1==e.length?(d=tg("video",e),d=f||k||d?"video":"audio"):(d="video",e=[e.join(",")]);return b?Promise.resolve():vg(this,c,e,d)}.bind(b)).then(function(b){b&&("audio"==b.stream.type?v=[b]:z=[b]);z&&wg(z);v&&wg(v);return xg(this,v,z,l,g,h,k)}.bind(b))}
function wg(b){b.forEach(function(b){var c=b.stream.codecs.split(",");c=c.filter(function(b){return"mp4a.40.34"!=b});b.stream.codecs=c.join(",");});}
function xg(b,c,d,e,f,g,h){d.forEach(function(b){if(b=b.stream)b.width=Number(f)||void 0,b.height=Number(g)||void 0,b.frameRate=Number(h)||void 0;}.bind(b));c.length||(c=[null]);d.length||(d=[null]);for(var k=[],l=0;l<c.length;l++)for(var m=0;m<d.length;m++){var r=c[l]?c[l].stream:null,t=d[m]?d[m].stream:null,u=c[l]?c[l].drmInfos:null,v=d[m]?d[m].drmInfos:null,z=void 0;if(r&&t)if(u.length&&v.length?0<xc(u,v).length:1)z=xc(u,v);else continue;else r?z=u:t&&(z=v);u=(d[l]?d[l].mc:"")+" - "+(c[l]?c[l].mc:
"");b.K[u]||(r=yg(b,r,t,e,z),k.push(r),b.K[u]=r);}return k}function yg(b,c,d,e,f){return{id:b.M++,language:c?c.language:"und",primary:!!c&&c.primary||!!d&&d.primary,audio:c,video:d,bandwidth:e,drmInfos:f,allowedByApplication:!0,allowedByKeySystem:!0}}function rg(b,c){qg(c,"TYPE");return ug(b,c,[]).then(function(b){return b.stream})}
function ug(b,c,d){var e=qg(c,"URI");e=Lf(b.l,e);if(b.a[e])return Promise.resolve(b.a[e]);var f=qg(c,"TYPE").toLowerCase();"subtitles"==f&&(f="text");var g=pd(Gf(c,"LANGUAGE","und")),h=Gf(c,"NAME"),k=c.getAttribute("DEFAULT"),l=c.getAttribute("AUTOSELECT"),m=Gf(c,"CHANNELS");return zg(b,e,d,f,g,!!k||!!l,h,"audio"==f?Ag(m):null).then(function(b){if(this.a[e])return this.a[e];this.w[c.id]=b;return this.a[e]=b}.bind(b))}function Ag(b){if(!b)return null;b=b.split("/")[0];return parseInt(b,10)}
function vg(b,c,d,e){var f=qg(c,"URI");f=Lf(b.l,f);return b.a[f]?Promise.resolve(b.a[f]):zg(b,f,d,e,"und",!1,null,null).then(function(b){return this.a[f]?this.a[f]:this.a[f]=b}.bind(b))}
function zg(b,c,d,e,f,g,h,k){var l=c;c=Lf(b.l,c);var m,r="",t;return Zf(b,c).then(function(b){m=Rf(this.o,b.data,c);if(1!=m.type)throw new A(2,4,4017);b=m;var f=kg,g=Jf(b.a,"EXT-X-PLAYLIST-TYPE"),h=Jf(b.a,"EXT-X-ENDLIST");h=g&&"VOD"==g.value||h;g=g&&"EVENT"==g.value&&!h;g=!h&&!g;h?ng(this,f.Ca):(g?ng(this,f.uc):ng(this,f.kd),b=Bg(b.a,"EXT-X-TARGETDURATION"),b=Number(b.value),this.u=Math.max(b,this.u),this.A=Math.min(b,this.A));if(1==d.length)r=d[0];else if(b=tg(e,d),null!=b)r=b;else throw new A(2,
4,4025,d);return Cg(this,e,r,m)}.bind(b)).then(function(b){t=b;b=Jf(m.a,"EXT-X-MEDIA-SEQUENCE");return mg(this,m,b?Number(b.value):0,t,r)}.bind(b)).then(function(b){var c=b[0].startTime,d=b[b.length-1].endTime,u=d-c;b=new S(b);var ba=Dg(m),Ea=void 0;"text"==e&&(Ea="subtitle");var Fa=[];m.segments.forEach(function(b){b=If(b.a,"EXT-X-KEY");Fa.push.apply(Fa,b);});var X=!1,Q=[],Qa=null;Fa.forEach(function(b){if("NONE"!=qg(b,"METHOD")){X=!0;var c=qg(b,"KEYFORMAT");if(b=(c=Eg[c])?c(b):null)b.keyIds.length&&
(Qa=b.keyIds[0]),Q.push(b);}});if(X&&!Q.length)throw new A(2,4,4026);ba={id:this.M++,originalId:h,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:b.find.bind(b),getSegmentReference:b.get.bind(b),initSegmentReference:ba,presentationTimeOffset:0,mimeType:t,codecs:r,kind:Ea,encrypted:X,keyId:Qa,language:f,label:h,type:e,primary:g,trickModeVideo:null,containsEmsgBoxes:!1,frameRate:void 0,width:void 0,height:void 0,bandwidth:void 0,roles:[],channelsCount:k};this.Z[ba.id]=b;return{stream:ba,
ob:b,drmInfos:Q,mc:l,dc:c,sf:d,duration:u}}.bind(b))}function Dg(b){var c=If(b.a,"EXT-X-MAP");if(!c.length)return null;if(1<c.length)throw new A(2,4,4020);c=c[0];var d=qg(c,"URI"),e=Lf(b.uri,d);b=0;d=null;if(c=Gf(c,"BYTERANGE"))b=c.split("@"),c=Number(b[0]),b=Number(b[1]),d=b+c-1;return new De(function(){return[e]},b,d)}
function Fg(b,c,d,e,f){var g=d.a,h=Lf(b.uri,d.uri);b=Bg(g,"EXTINF").value.split(",");b=f+Number(b[0]);d=0;var k=null;if(g=Jf(g,"EXT-X-BYTERANGE"))d=g.value.split("@"),g=Number(d[0]),d=d[1]?Number(d[1]):c.a+1,k=d+g-1;return new N(e,f,b,function(){return[h]},d,k)}function pg(b){b.b&&(b.I.forEach(function(c){b.b.Wa(c,!0);}),b.I=[]);}
function mg(b,c,d,e,f){var g=c.segments,h=[],k=Lf(c.uri,g[0].uri),l=Fg(c,null,g[0],d,0),m=Dg(c);return Gg(b,c.uri,m,l,e,f).then(function(b){k.split("/").pop();for(var e=0;e<g.length;++e){var f=h[h.length-1];f=Fg(c,f,g[e],d+e,0==e?b:f.endTime);h.push(f);}this.I.push(h);pg(this);return h}.bind(b))}
function Hg(b,c){var d=b.c.networkingEngine,e=ub(c.c(),b.g.retryParameters),f={},g=c.b;f.Range="bytes="+g+"-"+(g+2048-1);var h={};if(0!=g||null!=c.a)g="bytes="+g+"-",null!=c.a&&(g+=c.a),h.Range=g;e.headers=f;f=d.request(1,e);rb(b.h,f);return f.promise["catch"](function(){Ha("Unable to fetch a partial HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",e.uris[0]);e.headers=h;var c=d.request(1,e);rb(b.h,c);return c.promise})}
function Gg(b,c,d,e,f,g){if(b.m&&(c=b.a[c].ob.get(e.position)))return Promise.resolve(c.startTime);e=[Hg(b,e)];if("video/mp4"==f||"audio/mp4"==f)d?e.push(Hg(b,d)):e.push(e[0]);return Promise.all(e).then(function(b){if("video/mp4"==f||"audio/mp4"==f)return Ig(b[0].data,b[1].data);if("audio/mpeg"==f)return 0;if("video/mp2t"==f)return Jg(b[0].data);if("application/mp4"==f||0==f.indexOf("text/")){b=b[0].data;var c=Lb(f,g);if(I[c]){var d=new Yc(null);d.f=new I[c];b=d.Yb(b);}else b=0;return b}throw new A(2,
4,4030);}.bind(b))}function Ig(b,c){var d=0;(new P).D("moov",R).D("trak",R).D("mdia",R).$("mdhd",function(b){b.reader.G(0==b.version?8:16);d=b.reader.B();b.parser.stop();}).parse(c,!0);if(!d)throw new A(2,4,4030);var e=0,f=!1;(new P).D("moof",R).D("traf",R).$("tfdt",function(b){e=(0==b.version?b.reader.B():b.reader.$a())/d;f=!0;b.parser.stop();}).parse(b,!0);if(!f)throw new A(2,4,4030);return e}
function Jg(b){function c(){throw new A(2,4,4030);}b=new O(new DataView(b),0);for(var d=0,e=0;;)if(d=b.Y(),e=b.ea(),71!=e&&c(),b.mb()&16384||c(),e=(b.ea()&48)>>4,0!=e&&2!=e||c(),3==e&&(e=b.ea(),b.G(e)),1!=b.B()>>8)b.seek(d+188),e=b.ea(),71!=e&&(b.seek(d+192),e=b.ea()),71!=e&&(b.seek(d+204),e=b.ea()),71!=e&&c(),b.Zc(1);else return b.G(3),d=b.ea()>>6,0!=d&&1!=d||c(),0==b.ea()&&c(),d=b.ea(),e=b.mb(),b=b.mb(),(1073741824*((d&14)>>1)+((e&65534)<<14|(b&65534)>>1))/9E4}
function tg(b,c){for(var d=Kg[b],e=0;e<d.length;e++)for(var f=0;f<c.length;f++)if(d[e].test(c[f].trim()))return c[f].trim();return"text"==b?"":null}
function Cg(b,c,d,e){e=Lf(e.uri,e.segments[0].uri);var f=(new Ka(e)).ca.split(".").pop(),g=Lg[c][f];if(g)return Promise.resolve(g);if("text"==c)return d&&"vtt"!=d?Promise.resolve("application/mp4"):Promise.resolve("text/vtt");c=ub([e],b.g.retryParameters);c.method="HEAD";c=b.c.networkingEngine.request(1,c);rb(b.h,c);return c.promise.then(function(b){b=b.headers["content-type"];if(!b)throw new A(2,4,4021,f);return b.split(";")[0]})}
function qg(b,c){var d=b.getAttribute(c);if(!d)throw new A(2,4,4023,c);return d.value}function Bg(b,c){var d=Jf(b,c);if(!d)throw new A(2,4,4024,c);return d}function Zf(b,c){var d=b.c.networkingEngine.request(0,ub([c],b.g.retryParameters));rb(b.h,d);return d.promise}
var Kg={audio:[/^vorbis$/,/^opus$/,/^flac$/,/^mp4a/,/^[ae]c-3$/],video:[/^avc/,/^hev/,/^hvc/,/^vp0?[89]/,/^av1$/],text:[/^vtt$/,/^wvtt/,/^stpp/]},Lg={audio:{mp4:"audio/mp4",m4s:"audio/mp4",m4i:"audio/mp4",m4a:"audio/mp4",ts:"video/mp2t"},video:{mp4:"video/mp4",m4s:"video/mp4",m4i:"video/mp4",m4v:"video/mp4",ts:"video/mp2t"},text:{mp4:"application/mp4",m4s:"application/mp4",m4i:"application/mp4",vtt:"text/vtt",ttml:"application/ttml+xml"}};
Xf.prototype.V=function(){this.c&&(this.j=null,this.update().then(function(){jg(this,this.i);}.bind(this))["catch"](function(b){this.c&&(b.severity=1,this.c.onError(b),jg(this,0));}.bind(this)));};function jg(b,c){null!=b.i&&null!=c&&(b.j=window.setTimeout(b.V.bind(b),1E3*c));}function ng(b,c){b.f=c;b.b&&b.b.qb(b.f==kg.Ca);b.f==kg.Ca&&null!=b.j&&(window.clearTimeout(b.j),b.j=null,b.i=null);}
var Eg={"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":function(b){var c=qg(b,"METHOD");if(0>["SAMPLE-AES","SAMPLE-AES-CTR","SAMPLE-AES-CENC"].indexOf(c))return null;c=qg(b,"URI");c=Wf.parse(c);c=new Uint8Array(c.data);c=Fb("com.widevine.alpha",[{initDataType:"cenc",initData:c}]);if(b=Gf(b,"KEYID"))c.keyIds=[b.substr(2).toLowerCase()];return c}},Yf="VOD",kg={Ca:Yf,kd:"EVENT",uc:"LIVE"};kf.m3u8=Xf;jf["application/x-mpegurl"]=Xf;jf["application/vnd.apple.mpegurl"]=Xf;function Mg(b,c,d,e){this.a=b;this.w=c;this.o=d;this.u=e;this.h=new Ab;this.b=null;this.g=!1;this.m=b.readyState;this.c=!1;this.j=this.A=-1;this.f=this.i=!1;c=this.l.bind(this);D(this.h,b,"waiting",c);this.b=new Sb(c);Ub(this.b,.25);}Mg.prototype.destroy=function(){var b=this.h.destroy();this.u=this.w=this.a=this.h=null;null!=this.b&&(this.b.cancel(),this.b=null);return b};Mg.prototype.lb=function(){this.f=!0;this.l();};
Mg.prototype.l=function(){if(0!=this.a.readyState){if(this.a.seeking){if(!this.g)return}else this.g=!1;if(!this.a.paused){this.a.readyState!=this.m&&(this.c=!1,this.m=this.a.readyState);var b=this.o.smallGapLimit,c=this.a.currentTime,d=this.a.buffered;a:{if(d&&d.length&&!(1==d.length&&1E-6>d.end(0)-d.start(0))){var e=.1;/(Edge\/|Trident\/|Tizen)/.test(navigator.userAgent)&&(e=.5);for(var f=0;f<d.length;f++)if(d.start(f)>c&&(0==f||d.end(f-1)-c<=e)){e=f;break a}}e=null;}if(null==e){if(d=this.a.currentTime,
c=this.a.buffered,3>this.a.readyState&&0<this.a.playbackRate)if(this.j!=d)this.j=d,this.A=Date.now(),this.i=!1;else if(!this.i&&this.A<Date.now()-1E3)for(e=0;e<c.length;e++)if(d>=c.start(e)&&d<c.end(e)-.5){this.a.currentTime+=.1;this.j=this.a.currentTime;this.i=!0;break}}else if(0!=e||this.f){f=d.start(e);var g=this.w.ra();if(!(f>=g)){g=f-c;b=g<=b;var h=!1;.001>g||(b||this.c||(this.c=!0,c=new E("largegap",{currentTime:c,gapSize:g}),c.cancelable=!0,this.u(c),this.o.jumpLargeGaps&&!c.defaultPrevented&&
(h=!0)),!b&&!h)||(0!=e&&d.end(e-1),this.a.currentTime=f);}}}}};function Ng(b,c,d){this.a=b;this.i=c;this.h=d;this.c=new Ab;this.f=1;this.g=!1;this.b=null;0<b.readyState?this.Oc():Db(this.c,b,"loadedmetadata",this.Oc.bind(this));D(this.c,b,"ratechange",this.ie.bind(this));}n=Ng.prototype;n.destroy=function(){var b=this.c.destroy();this.c=null;null!=this.b&&(this.b.cancel(),this.b=null);this.i=this.a=null;return b};function Og(b){return 0<b.a.readyState?b.a.currentTime:b.h}function Pg(b,c){0<b.a.readyState?Qg(b,b.a.currentTime,c):(b.h=c,setTimeout(b.i,0));}
n.gb=function(){return this.f};function Rg(b,c){null!=b.b&&(b.b.cancel(),b.b=null);b.f=c;b.a.playbackRate=b.g||0>c?0:c;!b.g&&0>c&&(b.b=new Sb(function(){b.a.currentTime+=c/4;}),Ub(b.b,.25));}n.ie=function(){var b=this.g||0>this.f?0:this.f;this.a.playbackRate&&this.a.playbackRate!=b&&Rg(this,this.a.playbackRate);};n.Oc=function(){.001>Math.abs(this.a.currentTime-this.h)?this.Pc():(Db(this.c,this.a,"seeking",this.Pc.bind(this)),this.a.currentTime=0==this.a.currentTime?this.h:this.a.currentTime);};
n.Pc=function(){var b=this;D(this.c,this.a,"seeking",function(){return b.i()});};function Qg(b,c,d){function e(){!b.a||10<=f++||b.a.currentTime!=c||(b.a.currentTime=d,setTimeout(e,100));}b.a.currentTime=d;var f=0;setTimeout(e,100);}function Sg(b,c,d,e,f,g,h){this.c=b;this.a=c;this.l=d;this.h=e;this.j=g;this.f=null;this.g=new Mg(b,c,e,h);c=this.ke.bind(this);null==f?f=Infinity>this.a.S()?this.a.Ra():this.a.ra():0>f&&(f=this.a.ra()+f);f=Tg(this,Ug(this,f));this.b=new Ng(b,c,f);this.f=new Sb(this.he.bind(this));Ub(this.f,.25);}n=Sg.prototype;n.destroy=function(){var b=Promise.all([this.b.destroy(),this.g.destroy()]);this.g=this.b=null;null!=this.f&&(this.f.cancel(),this.f=null);this.j=this.h=this.a=this.c=null;return b};
function Vg(b){var c=Og(b.b);0<b.c.readyState&&(b.c.paused||(c=Ug(b,c)));return c}n.gb=function(){return this.b.gb()};n.lb=function(){this.g.lb();};n.he=function(){if(0!=this.c.readyState&&!this.c.paused){var b=this.c.currentTime,c=this.a.Ra(),d=this.a.ra();3>d-c&&(c=d-3);b<c&&(b=Wg(this,b),this.c.currentTime=b);}};n.ke=function(){var b=this.g;b.g=!0;b.f=!1;b.c=!1;var c=Og(this.b);b=Wg(this,c);if(.001<Math.abs(b-c)&&(c=(new Date).getTime()/1E3,!this.i||this.i<c-1)){this.i=c;Pg(this.b,b);return}this.j();};
function Tg(b,c){var d=b.a.S();return c>=d?d-b.h.durationBackoff:c}function Wg(b,c){var d=Cc.bind(null,b.c.buffered),e=Math.max(b.l,b.h.rebufferingGoal),f=b.a.Ra(),g=b.a.ra(),h=b.a.S();3>g-f&&(f=g-3);var k=b.a.hb(e),l=b.a.hb(5);e=b.a.hb(e+5);return c>=h?Tg(b,c):c>g?g:c<f?d(l)?l:e:c>=k||d(c)?c:e}function Ug(b,c){var d=b.a.Ra();if(c<d)return d;d=b.a.ra();return c>d?d:c}function Xg(b){this.a=!1;this.b=new y;this.c=b;}Xg.prototype.destroy=function(){var b=this;if(this.a)return this.b;this.a=!0;return this.c().then(function(){b.b.resolve();},function(){b.b.resolve();})};function Yg(b,c){return p(function e(){return w(e,function(e){switch(e.s){case 1:return pa(e),q(e,Promise.resolve(c()),4);case 4:return e["return"](e.C);case 2:return sa(e),q(e,Promise.all(b.map(function(b){return b.destroy()})),5);case 5:ta(e);}})})}function Zg(b,c,d,e,f,g,h){var k=this;this.a=b;this.K=c;this.u=d;this.l=e;this.h=f;this.w=g;this.f=[];this.j=new Ab;this.c=!1;this.i=-1;this.g=null;this.b=h;this.I=new Xg(function(){var b=Promise.all([k.j?k.j.destroy():null,k.b?k.b.destroy():null]);k.j=null;$g(k);k.a=null;k.u=null;k.l=null;k.h=null;k.w=null;k.f=[];k.b=null;return b});ah(this);}Zg.prototype.destroy=function(){return this.I.destroy()};
Zg.prototype.o=function(b){if(!this.f.some(function(c){return c.info.schemeIdUri==b.schemeIdUri&&c.info.startTime==b.startTime&&c.info.endTime==b.endTime})){var c={info:b,status:1};this.f.push(c);var d=new E("timelineregionadded",{detail:bh(b)});this.h(d);this.m(!0,c);}};function bh(b){var c=pb(b);c.eventElement=b.eventElement;return c}
Zg.prototype.m=function(b,c){var d=c.info.startTime>this.a.currentTime?1:c.info.endTime<this.a.currentTime?3:2,e=2==c.status,f=2==d;if(d!=c.status){if(!b||e||f)e||this.h(new E("timelineregionenter",{detail:bh(c.info)})),f||this.h(new E("timelineregionexit",{detail:bh(c.info)}));c.status=d;}};function ah(b){$g(b);b.g=window.setTimeout(b.A.bind(b),250);}function $g(b){b.g&&(window.clearTimeout(b.g),b.g=null);}
Zg.prototype.A=function(){this.g=null;ah(this);var b=Ld(this.b.a,this.a.currentTime);b!=this.i&&(-1!=this.i&&this.w(),this.i=b);b=Dc(this.a.buffered,this.a.currentTime);var c=yc(this.a.buffered);var d=this.b;c=c||0;var e=d.a.presentationTimeline,f=e.Sa();c=e.U()&&c>=f;e=d.b;e=e.g?"ended"==e.g.readyState:!0;d=c||e||d.c.ended;this.c?(c=Math.max(this.K,this.u.rebufferingGoal),(d||b>=c)&&0!=this.c&&(this.c=!1,this.l(!1))):!d&&.5>b&&1!=this.c&&(this.c=!0,this.l(!0));this.f.forEach(this.m.bind(this,!1));};
function ch(b,c,d){this.c=b;this.b=c;this.a=d;}ch.prototype.destroy=function(){this.a=this.b=this.c=null;return Promise.resolve()};function dh(b,c){this.a=c;this.b=b;this.g=null;this.j=1;this.m=Promise.resolve();this.h=[];this.i={};this.c={};this.o=!1;this.A=null;this.w=this.f=this.l=!1;this.u=0;}n=dh.prototype;n.destroy=function(){for(var b in this.c)eh(this.c[b]);this.h=this.m=this.b=this.a=null;this.i={};this.g=this.c=null;this.f=!0;return Promise.resolve()};
n.configure=function(b){this.g=b;this.A=new cb({maxAttempts:Math.max(b.retryParameters.maxAttempts,2),baseDelay:b.retryParameters.baseDelay,backoffFactor:b.retryParameters.backoffFactor,fuzzFactor:b.retryParameters.fuzzFactor,timeout:0},!0);};n.init=function(){var b=Vg(this.a.Ja);b=this.a.Jc(this.b.periods[Ld(this.b,b)]);return b.variant||b.text?fh(this,b).then(function(){!this.f&&this.a&&this.a.$d&&this.a.$d();}.bind(this)):Promise.reject(new A(2,5,5005))};
function U(b){var c=Vg(b.a.Ja);return b.b.periods[Ld(b.b,c)]}function gh(b){var c=b.c.video||b.c.audio;return c?b.b.periods[c.Ga]:null}function hh(b){return ih(b,"audio")}function jh(b){return ih(b,"video")}function ih(b,c){var d=b.c[c];return d?d.va||d.stream:null}
function kh(b,c,d){id(b.a.L,"text");b.u++;b.w=!1;var e=b.u;return b.a.L.init({text:c},!1).then(function(){return lh(b,[c])}).then(function(){if(!b.f&&d&&b.u==e&&!b.c.text&&!b.w){var f=Vg(b.a.Ja);b.c.text=mh(c,Ld(b.b,f));nh(b,b.c.text,0);}})}function oh(b){b.w=!0;b.c.text&&(eh(b.c.text),delete b.c.text);}function ph(b,c){var d=b.c.video;if(d){var e=d.stream;if(e)if(c){var f=e.trickModeVideo;f&&!d.va&&(qh(b,f,!1,0),d.va=e);}else if(e=d.va)d.va=null,qh(b,e,!0,0);}}
function rh(b,c,d,e){c.video&&qh(b,c.video,d,e);c.audio&&qh(b,c.audio,d,e);}function qh(b,c,d,e){var f=b.c[c.type];if(!f&&"text"==c.type&&b.g.ignoreTextStreamFailures)kh(b,c,!0);else if(f){var g=Md(b.b,c);d&&g!=f.Ga?sh(b):(f.va&&(c.trickModeVideo?(f.va=c,c=c.trickModeVideo):f.va=null),(g=b.h[g])&&g.ab&&(g=b.i[c.id])&&g.ab&&f.stream!=c&&("text"==c.type&&bd(b.a.L,Lb(c.mimeType,c.codecs)),f.stream=c,f.Hb=!0,d&&(f.Da?f.Nb=!0:f.Ia?(f.ya=!0,f.Cb=e,f.Nb=!0):(eh(f),th(b,f,!0,e)))));}}
function uh(b){var c=Vg(b.a.Ja),d=b.g.smallGapLimit;Object.keys(b.c).every(function(b){var e=this.a.L;"text"==b?(b=e.a,b=c>=b.a&&c<b.b):(b=dd(e,b),b=Cc(b,c,d));return b}.bind(b))||sh(b);}function sh(b){for(var c in b.c){var d=b.c[c];d.Da||d.ya||(d.Ia?(d.ya=!0,d.Cb=0):null==cd(b.a.L,c)?null==d.xa&&nh(b,d,0):(eh(d),th(b,d,!1,0)));}}
function fh(b,c,d){var e=Vg(b.a.Ja),f=Ld(b.b,e),g={},h=[];c.variant&&c.variant.audio&&(g.audio=c.variant.audio,h.push(c.variant.audio));c.variant&&c.variant.video&&(g.video=c.variant.video,h.push(c.variant.video));c.text&&(g.text=c.text,h.push(c.text));return b.a.L.init(g,b.g.forceTransmuxTS).then(function(){if(!b.f){var c=b.b.presentationTimeline.S();Infinity>c?b.a.L.oa(c):b.a.L.oa(Math.pow(2,32));return lh(b,h)}}).then(function(){if(!b.f)for(var c in g){var e=g[c];b.c[c]||(b.c[c]=mh(e,f,d),nh(b,
b.c[c],0));}})}function mh(b,c,d){return{stream:b,type:b.type,Ta:null,sa:null,va:null,Hb:!0,Ga:c,endOfStream:!1,Ia:!1,xa:null,ya:!1,Cb:0,Nb:!1,Da:!1,lc:!1,jb:!1,Xc:d||0}}
function vh(b,c){var d=b.h[c];if(d)return d.promise;d={promise:new y,ab:!1};b.h[c]=d;var e=b.b.periods[c].variants.map(function(b){var c=qc(b);b.video&&b.video.trickModeVideo&&c.push(b.video.trickModeVideo);return c}).reduce(F.ja,[]).filter(F.la);e.push.apply(e,b.b.periods[c].textStreams);b.m=b.m.then(function(){if(!this.f)return lh(this,e)}.bind(b)).then(function(){this.f||(this.h[c].promise.resolve(),this.h[c].ab=!0);}.bind(b))["catch"](function(b){this.f||(this.h[c].promise["catch"](function(){}),
this.h[c].promise.reject(),delete this.h[c],this.a.onError(b));}.bind(b));return d.promise}
function lh(b,c){c.map(function(b){return b.id}).filter(F.la);for(var d=[],e=0;e<c.length;++e){var f=c[e],g=b.i[f.id];g?d.push(g.promise):(b.i[f.id]={promise:new y,ab:!1},d.push(f.createSegmentIndex()));}return Promise.all(d).then(function(){if(!this.f)for(var b=0;b<c.length;++b){var d=this.i[c[b].id];d.ab||(d.promise.resolve(),d.ab=!0);}}.bind(b))["catch"](function(b){if(!this.f){for(var d=0;d<c.length;d++)this.i[c[d].id].promise["catch"](function(){}),this.i[c[d].id].promise.reject(),delete this.i[c[d].id];
return Promise.reject(b)}}.bind(b))}n.bf=function(b){if(!this.f&&!b.Ia&&null!=b.xa&&!b.Da)if(b.xa=null,b.ya)th(this,b,b.Nb,b.Cb);else{try{var c=wh(this,b);null!=c&&(nh(this,b,c),b.jb=!1);}catch(d){xh(this,d);return}c=G(this.c);yh(this,b);c.every(function(b){return b.endOfStream})&&this.a.L.endOfStream().then(function(){if(!this.f){var b=this.a.L.S();b<this.b.presentationTimeline.S()&&this.b.presentationTimeline.oa(b);}}.bind(this));}};
function wh(b,c){var d=Vg(b.a.Ja),e=zh(b,c,d),f=Md(b.b,c.stream),g=Ld(b.b,e),h=fd(b.a.L,c.type,d),k=Math.max(b.b.minBufferTime||0,b.g.rebufferingGoal,b.g.bufferingGoal)*b.j;if(e>=b.b.presentationTimeline.S())return c.endOfStream=!0,null;c.endOfStream=!1;c.Ga=g;if(g!=f)return null;if(h>=k)return.5;g=ed(b.a.L,c.type);g=Ah(b,c,d,g,f);if(!g)return 1;var l=Infinity;G(b.c).forEach(function(c){l=Math.min(l,zh(b,c,d));});if(e>=l+b.b.presentationTimeline.a)return 1;c.Xc=0;Bh(b,c,d,f,g);return null}
function zh(b,c,d){return c.Ta&&c.sa?b.b.periods[Md(b.b,c.Ta)].startTime+c.sa.endTime:Math.max(d,c.Xc)}function Ah(b,c,d,e,f){if(c.sa&&c.stream==c.Ta)return Ch(b,c,f,c.sa.position+1);d=c.sa?c.stream.findSegmentPosition(Math.max(0,b.b.periods[Md(b.b,c.Ta)].startTime+c.sa.endTime-b.b.periods[f].startTime)):c.stream.findSegmentPosition(Math.max(0,(e||d)-b.b.periods[f].startTime));if(null==d)return null;var g=null;null==e&&(g=Ch(b,c,f,Math.max(0,d-1)));return g||Ch(b,c,f,d)}
function Ch(b,c,d,e){d=b.b.periods[d];c=c.stream.getSegmentReference(e);if(!c)return null;e=b.b.presentationTimeline;b=e.ib();e=e.Sa();return d.startTime+c.endTime<b||d.startTime+c.startTime>e?null:c}
function Bh(b,c,d,e,f){var g=b.b.periods[e],h=c.stream,k=b.b.presentationTimeline.S(),l=b.b.periods[e+1];e=Dh(b,c,e,Math.max(0,g.startTime-.1),l?l.startTime:k);c.Ia=!0;c.Hb=!1;k=Eh(b,f);Promise.all([e,k]).then(function(b){if(!this.f&&!this.l)return Fh(this,c,d,g,h,f,b[1])}.bind(b)).then(function(){this.f||this.l||(c.Ia=!1,c.lc=!1,c.ya||this.a.lb(),nh(this,c,0),Gh(this,h));}.bind(b))["catch"](function(b){this.f||this.l||(c.Ia=!1,"text"==c.type&&this.g.ignoreTextStreamFailures?delete this.c.text:3017==
b.code?Hh(this,c,b):(c.jb=!0,b.severity=2,xh(this,b)));}.bind(b));}function Hh(b,c,d){if(!G(b.c).some(function(b){return b!=c&&b.lc})){var e=Math.round(100*b.j);if(20<e)b.j-=.2;else if(4<e)b.j-=.04;else{c.jb=!0;b.l=!0;b.a.onError(d);return}c.lc=!0;}nh(b,c,4);}
function Dh(b,c,d,e,f){if(!c.Hb)return Promise.resolve();d=jd(b.a.L,c.type,b.b.periods[d].startTime-c.stream.presentationTimeOffset,e,f);if(!c.stream.initSegmentReference)return d;b=Eh(b,c.stream.initSegmentReference).then(function(b){if(!this.f)return gd(this.a.L,c.type,b,null,null)}.bind(b))["catch"](function(b){c.Hb=!0;return Promise.reject(b)});return Promise.all([d,b])}
function Fh(b,c,d,e,f,g,h){f.containsEmsgBoxes&&(new P).$("emsg",b.ve.bind(b,e,g)).parse(h);return Ih(b,c,d).then(function(){if(!this.f)return gd(this.a.L,c.type,h,g.startTime,g.endTime)}.bind(b)).then(function(){if(!this.f)return c.Ta=f,c.sa=g,Promise.resolve()}.bind(b))}
n.ve=function(b,c,d){var e=d.reader.jc(),f=d.reader.jc(),g=d.reader.B(),h=d.reader.B(),k=d.reader.B(),l=d.reader.B();d=d.reader.Ka(d.reader.H.byteLength-d.reader.Y());b=b.startTime+c.startTime+h/g;if("urn:mpeg:dash:event:2012"==e)this.a.be();else this.a.onEvent(new E("emsg",{detail:{startTime:b,endTime:b+k/g,schemeIdUri:e,value:f,timescale:g,presentationTimeDelta:h,eventDuration:k,id:l,messageData:d}}));};
function Ih(b,c,d){var e=Math.max(b.g.bufferBehind,b.b.presentationTimeline.a),f=cd(b.a.L,c.type);if(null==f)return Promise.resolve();d=d-f-e;return 0>=d?Promise.resolve():b.a.L.remove(c.type,f,f+d).then(function(){}.bind(b))}function Gh(b,c){if(!b.o&&(b.o=G(b.c).every(function(b){return"text"==b.type?!0:!b.ya&&!b.Da&&b.sa}),b.o)){var d=Md(b.b,c);b.h[d]||vh(b,d).then(function(){this.f||this.a.Ic();}.bind(b))["catch"](F.Ha);for(d=0;d<b.b.periods.length;++d)vh(b,d)["catch"](F.Ha);b.a.ne&&b.a.ne();}}
function yh(b,c){if(c.Ga!=Md(b.b,c.stream)){var d=c.Ga,e=G(b.c);e.every(function(b){return b.Ga==d})&&e.every(Jh)&&vh(b,d).then(function(){if(!this.f&&e.every(function(b){var c=Md(this.b,b.stream);return Jh(b)&&b.Ga==d&&c!=d}.bind(this))){var b=this.b.periods[d],c=this.a.Jc(b),h={};c.variant&&c.variant.video&&(h.video=c.variant.video);c.variant&&c.variant.audio&&(h.audio=c.variant.audio);c.text&&(h.text=c.text);for(var k in this.c)if(!h[k]&&"text"!=k){this.a.onError(new A(2,5,5005));return}for(var l in h)if(!this.c[l])if("text"==
l)fh(this,{text:h.text},b.startTime),delete h[l];else{this.a.onError(new A(2,5,5005));return}for(var m in this.c)(b=h[m])?(qh(this,b,!1,0),nh(this,this.c[m],0)):delete this.c[m];this.a.Ic();}}.bind(b))["catch"](F.Ha);}}function Jh(b){return!b.Ia&&null==b.xa&&!b.ya&&!b.Da}function Eh(b,c){var d=ub(c.c(),b.g.retryParameters);if(0!=c.b||null!=c.a){var e="bytes="+c.b+"-";null!=c.a&&(e+=c.a);d.headers.Range=e;}return b.a.Va.request(1,d).promise.then(function(b){return b.data})}
function th(b,c,d,e){c.ya=!1;c.Nb=!1;c.Cb=0;c.Da=!0;if(e){var f=Vg(b.a.Ja);e=b.a.L.remove(c.type,f+e,b.a.L.S());}else e=id(b.a.L,c.type).then(function(){if(!this.f&&d)return this.a.L.flush(c.type)}.bind(b));e.then(function(){this.f||(c.Ta=null,c.sa=null,c.Da=!1,c.endOfStream=!1,nh(this,c,0));}.bind(b));}function nh(b,c,d){c.xa=window.setTimeout(b.bf.bind(b,c),1E3*d);}function eh(b){null!=b.xa&&(window.clearTimeout(b.xa),b.xa=null);}
function xh(b,c){eb(b.A).then(function(){this.f||(this.a.onError(c),c.handled||this.g.failureCallback(c));}.bind(b));}function Kh(b,c,d,e,f,g){if(200<=d&&299>=d&&202!=d)return f&&(e=f),{uri:e,data:c,headers:b,fromCache:!!b["x-shaka-from-cache"]};f=null;try{f=Qb(c);}catch(h){}throw new A(401==d||403==d?2:1,1,1001,e,d,f,b,g);}function Lh(b,c,d){var e=new Lh.b;Kb(c.headers,function(b,c){e.append(b,c);});var f=new Lh.a,g={body:c.body||void 0,headers:e,method:c.method,signal:f.signal,credentials:c.allowCrossSiteCredentials?"include":void 0},h=!1,k=!1,l;c.retryParameters.timeout&&(l=setTimeout(function(){k=!0;f.abort();},c.retryParameters.timeout));c=Lh.f;g=c(b,g).then(function(c){clearTimeout(l);return c.arrayBuffer().then(function(e){var f={};c.headers.forEach(function(b,c){f[c.trim()]=b;});return Kh(f,e,c.status,b,c.url,d)})})["catch"](function(c){clearTimeout(l);
return h?Promise.reject(new A(1,1,7001,b,d)):k?Promise.reject(new A(1,1,1003,b,d)):void 0==c.severity?Promise.reject(new A(1,1,1002,b,c,d)):Promise.reject(c)});return new B(g,function(){h=!0;f.abort();return Promise.resolve()})}x("shaka.net.HttpFetchPlugin",Lh);Lh.isSupported=function(){return!(!window.fetch||!window.AbortController)};Lh.isSupported=Lh.isSupported;Lh.f=window.fetch;Lh.a=window.AbortController;Lh.b=window.Headers;Lh.isSupported()&&(tb("http",Lh,2),tb("https",Lh,2));function Mh(b,c,d){var e=new Mh.c,f=new Promise(function(f,h){e.open(c.method,b,!0);e.responseType="arraybuffer";e.timeout=c.retryParameters.timeout;e.withCredentials=c.allowCrossSiteCredentials;e.onabort=function(){h(new A(1,1,7001,b,d));};e.onload=function(c){c=c.target;var e=c.getAllResponseHeaders().trim().split("\r\n"),g={};e=ja(e);for(var k=e.next();!k.done;k=e.next())k=k.value.split(": "),g[k[0].toLowerCase()]=k.slice(1).join(": ");try{var l=Kh(g,c.response,c.status,b,c.responseURL,d);f(l);}catch(v){h(v);}};
e.onerror=function(c){h(new A(1,1,1002,b,c,d));};e.ontimeout=function(){h(new A(1,1,1003,b,d));};for(var g in c.headers)e.setRequestHeader(g.toLowerCase(),c.headers[g]);e.send(c.body);});return new B(f,function(){e.abort();return Promise.resolve()})}x("shaka.net.HttpXHRPlugin",Mh);Mh.c=window.XMLHttpRequest;tb("http",Mh,1);tb("https",Mh,1);function Nh(b){this.a={};this.c=Promise.resolve();this.h=!1;this.i=b;this.f=this.b=this.g=0;}Nh.prototype.destroy=function(){this.h=!0;var b=this.c["catch"](function(){});this.c=Promise.resolve();return b};function Oh(b,c,d,e,f){b.a[c]=b.a[c]||[];b.a[c].push({request:d,zc:e,Xd:f});}
function Ph(b,c){var d=G(b.a);b.a={};d.forEach(function(c){c.forEach(function(c){b.b+=c.zc;});});var e=Promise.resolve().then(function(){Qh(b);return Promise.all(d.map(function(d){return Rh(b,c,d)}))});b.c=b.c.then(function(){return e});return e}function Rh(b,c,d){var e=Promise.resolve();d.forEach(function(d){e=e.then(function(){Qh(b);return Sh(b,c,d)});});return e}
function Sh(b,c,d){return Promise.resolve().then(function(){Qh(b);return c.request(1,d.request).promise}).then(function(c){Qh(b);b.g+=d.zc;b.f+=c.data.byteLength;b.i(b.b?b.g/b.b:0,b.f);return d.Xd(c.data)})}function Qh(b){if(b.h)throw new A(2,9,7001);}function Th(b,c){var d=this;this.c=b;this.b=b.objectStore(c);this.a=new y;b.onabort=function(b){b.preventDefault();d.a.reject();};b.onerror=function(b){b.preventDefault();d.a.reject();};b.oncomplete=function(){d.a.resolve();};}Th.prototype.abort=function(){try{this.c.abort();}catch(b){}return this.a["catch"](function(){})};Th.prototype.store=function(){return this.b};Th.prototype.promise=function(){return this.a};function Uh(b){this.b=b;this.a=[];}Uh.prototype.destroy=function(){return Promise.all(this.a.map(function(b){return b.abort()}))};function Vh(b,c){return Wh(b,c,"readwrite")}function Wh(b,c,d){d=b.b.transaction([c],d);var e=new Th(d,c);b.a.push(e);e.promise().then(function(){nb(b.a,e);},function(){nb(b.a,e);});return e}function Xh(){this.a={};}Xh.prototype.destroy=function(){var b=G(this.a).map(function(b){return b.destroy()});this.a={};return Promise.all(b)};Xh.prototype.init=function(){var b=this;Kb(Yh,function(c,e){var d=e();d&&(b.a[c]=d);});var c=G(this.a).map(function(b){return b.init()});return Promise.all(c)};
function Zh(b){var c=null;Kb(b.a,function(b,e){Kb(e.getCells(),function(d,e){e.hasFixedKeySpace()||c||(c={path:{ba:b,R:d},R:e});});});if(c)return c;throw new A(2,9,9013,"Could not find a cell that supports add-operations");}function $h(b,c){Kb(b.a,function(b,e){Kb(e.getCells(),function(d,e){c({ba:b,R:d},e);});});}function ai(b,c,d){b=b.a[c];if(!b)throw new A(2,9,9013,"Could not find mechanism with name "+c);c=b.getCells()[d];if(!c)throw new A(2,9,9013,"Could not find cell with name "+d);return c}
function bi(b){b=G(b.a).map(function(b){return b.erase()});return Promise.all(b)}x("shaka.offline.StorageMuxer.register",function(b,c){Yh[b]=c;});x("shaka.offline.StorageMuxer.unregister",function(b){delete Yh[b];});function ci(){return G(Yh).some(function(b){return(b=b())?(b.destroy(),!0):!1})}var Yh={};function di(b){this.a=new Uh(b);}n=di.prototype;n.destroy=function(){return this.a.destroy()};n.hasFixedKeySpace=function(){return!0};n.addSegments=function(){return ei("segment")};n.removeSegments=function(b,c){return fi(this,"segment",b,c)};n.getSegments=function(b){return gi(this,"segment",b).then(function(b){return b.map(hi)})};n.addManifests=function(){return ei("manifest")};
n.updateManifestExpiration=function(b,c){var d=Vh(this.a,"manifest"),e=d.store(),f=new y;e.get(b).onsuccess=function(d){(d=d.target.result)?(d.expiration=c,e.put(d),f.resolve()):f.reject(new A(2,9,9012,"Could not find values for "+b));};return d.promise().then(function(){return f})};n.removeManifests=function(b,c){return fi(this,"manifest",b,c)};n.getManifests=function(b){return gi(this,"manifest",b).then(function(b){return b.map(ii)})};
n.getAllManifests=function(){var b=Wh(this.a,"manifest","readonly"),c={};b.store().openCursor().onsuccess=function(b){if(b=b.target.result)c[b.key]=ii(b.value),b["continue"]();};return b.promise().then(function(){return c})};function ei(b){return Promise.reject(new A(2,9,9011,"Cannot add new value to "+b))}function fi(b,c,d,e){b=Vh(b.a,c);var f=b.store();d.forEach(function(b){f["delete"](b).onsuccess=function(){return e(b)};});return b.promise()}
function gi(b,c,d){b=Wh(b.a,c,"readonly");var e=b.store(),f={},g=[];d.forEach(function(b){e.get(b).onsuccess=function(c){c=c.target.result;void 0==c&&g.push(b);f[b]=c;};});return b.promise().then(function(){return g.length?Promise.reject(new A(2,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}
function ii(b){return{originalManifestUri:b.originalManifestUri,duration:b.duration,size:b.size,expiration:null==b.expiration?Infinity:b.expiration,periods:b.periods.map(ji),sessionIds:b.sessionIds,drmInfo:b.drmInfo,appMetadata:b.appMetadata}}function ji(b){ki(b);b.streams.forEach(function(){});return{startTime:b.startTime,streams:b.streams.map(li)}}
function li(b){var c=b.Sd?mi(b.Sd):null;return{id:b.id,originalId:null,primary:b.primary,presentationTimeOffset:b.presentationTimeOffset,contentType:b.contentType,mimeType:b.mimeType,codecs:b.codecs,frameRate:b.frameRate,kind:b.kind,language:b.language,label:b.label,width:b.width,height:b.height,initSegmentKey:c,encrypted:b.encrypted,keyId:b.keyId,segments:b.segments.map(ni),variantIds:b.variantIds}}function ni(b){var c=mi(b.uri);return{startTime:b.startTime,endTime:b.endTime,dataKey:c}}
function hi(b){return{data:b.data}}function mi(b){var c;if((c=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(b))||(c=/^offline:segment\/([0-9]+)$/.exec(b)))return Number(c[1]);throw new A(2,9,9004,"Could not parse uri "+b);}
function ki(b){var c=b.streams.filter(function(b){return"audio"==b.contentType}),d=b.streams.filter(function(b){return"video"==b.contentType});if(!c.every(function(b){return b.variantIds})||!d.every(function(b){return b.variantIds})){c.forEach(function(b){b.variantIds=[];});d.forEach(function(b){b.variantIds=[];});var e=0;if(d.length&&!c.length){var f=e++;d.forEach(function(b){b.variantIds.push(f);});}if(!d.length&&c.length){var g=e++;c.forEach(function(b){b.variantIds.push(g);});}d.length&&c.length&&c.forEach(function(b){d.forEach(function(c){var d=
e++;b.variantIds.push(d);c.variantIds.push(d);});});}}function oi(b,c,d,e){this.a=new Uh(b);this.c=c;this.b=d;this.f=e;}n=oi.prototype;n.destroy=function(){return this.a.destroy()};n.hasFixedKeySpace=function(){return this.f};n.addSegments=function(b){return pi(this,this.c,b)};n.removeSegments=function(b,c){return qi(this,this.c,b,c)};n.getSegments=function(b){return ri(this,this.c,b)};n.addManifests=function(b){return pi(this,this.b,b)};
n.updateManifestExpiration=function(b,c){var d=Vh(this.a,this.b),e=d.store();e.get(b).onsuccess=function(d){if(d=d.target.result)d.expiration=c,e.put(d,b);};return d.promise()};n.removeManifests=function(b,c){return qi(this,this.b,b,c)};n.getManifests=function(b){return ri(this,this.b,b)};n.getAllManifests=function(){var b=Wh(this.a,this.b,"readonly"),c={};b.store().openCursor().onsuccess=function(b){if(b=b.target.result)c[b.key]=b.value,b["continue"]();};return b.promise().then(function(){return c})};
function pi(b,c,d){if(b.f)return Promise.reject(new A(1,9,9011,"Cannot add new value to "+c));b=Vh(b.a,c);var e=b.store(),f=[];d.forEach(function(b){e.add(b).onsuccess=function(b){f.push(b.target.result);};});return b.promise().then(function(){return f})}function qi(b,c,d,e){b=Vh(b.a,c);var f=b.store();d.forEach(function(b){f["delete"](b).onsuccess=function(){return e(b)};});return b.promise()}
function ri(b,c,d){b=Wh(b.a,c,"readonly");var e=b.store(),f={},g=[];d.forEach(function(b){var c=e.get(b);c.onsuccess=function(){void 0==c.result&&g.push(b);f[b]=c.result;};});return b.promise().then(function(){return g.length?Promise.reject(new A(1,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}function si(){this.c=this.b=this.a=this.f=null;}
si.prototype.init=function(){var b=this,c=new y,d=window.indexedDB.open("shaka_offline_db",3);d.onsuccess=function(d){d=d.target.result;b.f=d;var e=d.objectStoreNames;e=e.contains("manifest")&&e.contains("segment")?new di(d):null;b.a=e;e=d.objectStoreNames;e=e.contains("manifest-v2")&&e.contains("segment-v2")?new oi(d,"segment-v2","manifest-v2",!0):null;b.b=e;e=d.objectStoreNames;d=e.contains("manifest-v3")&&e.contains("segment-v3")?new oi(d,"segment-v3","manifest-v3",!1):null;b.c=d;c.resolve();};
d.onupgradeneeded=function(b){b=b.target.result;var c={autoIncrement:!0};b.createObjectStore("manifest-v3",c);b.createObjectStore("segment-v3",c);};d.onerror=function(b){c.reject(new A(2,9,9001,d.error));b.preventDefault();};return c};
si.prototype.destroy=function(){var b=this;return p(function d(){return w(d,function(d){switch(d.s){case 1:if(!b.a){d.P(2);break}return q(d,b.a.destroy(),2);case 2:if(!b.b){d.P(4);break}return q(d,b.b.destroy(),4);case 4:if(!b.c){d.P(6);break}return q(d,b.c.destroy(),6);case 6:b.f&&b.f.close(),d.s=0;}})})};si.prototype.getCells=function(){var b={};this.a&&(b.v1=this.a);this.b&&(b.v2=this.b);this.c&&(b.v3=this.c);return b};
si.prototype.erase=function(){var b=this;return p(function d(){return w(d,function(d){switch(d.s){case 1:if(!b.a){d.P(2);break}return q(d,b.a.destroy(),2);case 2:if(!b.b){d.P(4);break}return q(d,b.b.destroy(),4);case 4:if(!b.c){d.P(6);break}return q(d,b.c.destroy(),6);case 6:return b.f&&b.f.close(),q(d,ti(),8);case 8:return b.f=null,b.a=null,b.b=null,b.c=null,q(d,b.init(),0)}})})};
function ti(){var b=new y,c=window.indexedDB.deleteDatabase("shaka_offline_db");c.onblocked=function(){};c.onsuccess=function(){b.resolve();};c.onerror=function(d){b.reject(new A(2,9,9001,c.error));d.preventDefault();};return b}Yh.idb=function(){return window.indexedDB?new si:null};function ui(b,c,d,e){this.a=b;this.g=c;this.f=d;this.c=e;this.b=["offline:",b,"/",c,"/",d,"/",e].join("");}ui.prototype.ba=function(){return this.g};ui.prototype.R=function(){return this.f};ui.prototype.key=function(){return this.c};ui.prototype.toString=function(){return this.b};
function vi(b){b=/^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(b);if(null==b)return null;var c=b[1];if("manifest"!=c&&"segment"!=c)return null;var d=b[2];if(!d)return null;var e=b[3];return e&&null!=c?new ui(c,d,e,Number(b[4])):null}function wi(b,c){this.b=b;this.a=c;}function xi(b,c){var d=new T(null,0);d.oa(c.duration);var e=c.periods.map(function(c){return yi(b,c,d)}),f=c.drmInfo?[c.drmInfo]:[];c.drmInfo&&e.forEach(function(b){b.variants.forEach(function(b){b.drmInfos=f;});});return{presentationTimeline:d,minBufferTime:2,offlineSessionIds:c.sessionIds,periods:e}}
function yi(b,c,d){var e=c.streams.filter(function(b){return"audio"==b.contentType}),f=c.streams.filter(function(b){return"video"==b.contentType});e=zi(b,e,f);f=c.streams.filter(function(b){return"text"==b.contentType}).map(function(c){return Ai(b,c)});c.streams.forEach(function(c,e){var f=c.segments.map(function(c,d){return Bi(b,d,c)});d.Wa(f,0==e);});return{startTime:c.startTime,variants:e,textStreams:f}}
function zi(b,c,d){var e={},f=[];f.push.apply(f,c);f.push.apply(f,d);f.forEach(function(b){b.variantIds.forEach(function(b){e[b]=e[b]||{id:b,language:"",primary:!1,audio:null,video:null,bandwidth:0,drmInfos:[],allowedByApplication:!0,allowedByKeySystem:!0};});});c.forEach(function(c){var d=Ai(b,c);c.variantIds.forEach(function(b){b=e[b];b.language=d.language;b.primary=b.primary||d.primary;b.audio=d;});});d.forEach(function(c){var d=Ai(b,c);c.variantIds.forEach(function(b){b=e[b];b.primary=b.primary||
d.primary;b.video=d;});});return G(e)}
function Ai(b,c){var d=c.segments.map(function(c,d){return Bi(b,d,c)}),e=new S(d);d={id:c.id,originalId:c.originalId,createSegmentIndex:function(){return Promise.resolve()},findSegmentPosition:function(b){return e.find(b)},getSegmentReference:function(b){return e.get(b)},initSegmentReference:null,presentationTimeOffset:c.presentationTimeOffset,mimeType:c.mimeType,codecs:c.codecs,width:c.width||void 0,height:c.height||void 0,frameRate:c.frameRate||void 0,kind:c.kind,encrypted:c.encrypted,keyId:c.keyId,
language:c.language,label:c.label||null,type:c.contentType,primary:c.primary,trickModeVideo:null,containsEmsgBoxes:!1,roles:[],channelsCount:null};null!=c.initSegmentKey&&(d.initSegmentReference=Ci(b,c.initSegmentKey));return d}function Bi(b,c,d){var e=new ui("segment",b.b,b.a,d.dataKey);return new N(c,d.startTime,d.endTime,function(){return[e.toString()]},0,null)}function Ci(b,c){var d=new ui("segment",b.b,b.a,c);return new De(function(){return[d.toString()]},0,null)}function Di(){this.a=null;}n=Di.prototype;n.configure=function(){};n.start=function(b){var c=vi(b);this.a=c;if(null==c||"manifest"!=c.a)return Promise.reject(new A(2,1,9004,c));var d=new Xh;return Yg([d],function(){return p(function f(){var b,h,k,l;return w(f,function(f){switch(f.s){case 1:return q(f,d.init(),2);case 2:return q(f,ai(d,c.ba(),c.R()),3);case 3:return b=f.C,q(f,b.getManifests([c.key()]),4);case 4:return h=f.C,k=h[0],l=new wi(c.ba(),c.R()),f["return"](xi(l,k))}})})})};n.stop=function(){return Promise.resolve()};
n.update=function(){};n.onExpirationUpdated=function(b,c){var d=this.a,e=new Xh;return Yg([e],function(){return p(function g(){var h,k,l,m,r;return w(g,function(g){switch(g.s){case 1:return q(g,e.init(),2);case 2:return q(g,ai(e,d.ba(),d.R()),3);case 3:return h=g.C,q(g,h.getManifests([d.key()]),4);case 4:k=g.C;l=k[0];m=0<=l.sessionIds.indexOf(b);r=void 0==l.expiration||l.expiration>c;if(m&&r)return q(g,h.updateManifestExpiration(d.key(),c),0);g.P(0);}})})})["catch"](function(){})};
jf["application/x-offline-manifest"]=Di;function Ei(b){var c=vi(b);return c&&"manifest"==c.a?Ei.a(b):c&&"segment"==c.a?Ei.b(c.key(),c):fb(new A(2,1,9004,b))}x("shaka.offline.OfflineScheme",Ei);Ei.a=function(b){b={uri:b,data:new ArrayBuffer(0),headers:{"content-type":"application/x-offline-manifest"}};return hb(b)};
Ei.b=function(b,c){var d=new Xh,e=Yg([d],function(){return p(function g(){var b,e,l;return w(g,function(g){switch(g.s){case 1:return q(g,d.init(),2);case 2:return q(g,ai(d,c.ba(),c.R()),3);case 3:return b=g.C,q(g,b.getSegments([c.key()]),4);case 4:return e=g.C,l=e[0],g["return"]({uri:c,data:l.data,headers:{}})}})})});return ib(e)};tb("offline",Ei);function V(b){this.a=null;this.b=b;for(var c=0;c<b.textTracks.length;++c){var d=b.textTracks[c];d.mode="disabled";"Shaka Player TextTrack"==d.label&&(this.a=d);}this.a||(this.a=b.addTextTrack("subtitles","Shaka Player TextTrack"));this.a.mode="hidden";0<this.a.cues.length&&this.remove(0,Infinity);}x("shaka.text.SimpleTextDisplayer",V);V.prototype.remove=function(b,c){if(!this.a)return!1;Fi(this.a,function(d){return!(d.startTime>=c||d.endTime<=b)});return!0};V.prototype.remove=V.prototype.remove;
V.prototype.append=function(b){var c=Gi,d=Hi,e=[];if(window.VTTRegion){var f=b.map(function(b){return b.region});f=f.filter(F.la);for(var g=this.b.offsetWidth,h=this.b.offsetHeight,k=0;k<f.length;k++){var l=c(f[k],g,h);e.push(l);}}var m=[];for(c=0;c<b.length;c++)(f=d(b[c],e))&&m.push(f);m.slice().sort(function(b,c){return b.startTime!=c.startTime?b.startTime-c.startTime:b.endTime!=c.endTime?b.endTime-c.startTime:m.indexOf(c)-m.indexOf(b)}).forEach(function(b){this.a.addCue(b);}.bind(this));};
V.prototype.append=V.prototype.append;V.prototype.destroy=function(){this.a&&Fi(this.a,function(){return!0});this.b=this.a=null;return Promise.resolve()};V.prototype.destroy=V.prototype.destroy;V.prototype.isTextVisible=function(){return"showing"==this.a.mode};V.prototype.isTextVisible=V.prototype.isTextVisible;V.prototype.setTextVisibility=function(b){this.a.mode=b?"showing":"hidden";};V.prototype.setTextVisibility=V.prototype.setTextVisibility;
function Hi(b,c){if(b.startTime>=b.endTime)return null;var d=new VTTCue(b.startTime,b.endTime,b.payload);d.lineAlign=b.lineAlign;d.positionAlign=b.positionAlign;d.size=b.size;try{d.align=b.textAlign;}catch(f){}"center"==b.textAlign&&"center"!=d.align&&(d.align="middle");2==b.writingDirection?d.vertical="lr":3==b.writingDirection&&(d.vertical="rl");1==b.lineInterpretation&&(d.snapToLines=!1);null!=b.line&&(d.line=b.line);null!=b.position&&(d.position=b.position);if(b.region.id.length){var e=c.filter(function(c){return c.id==
b.region.id});e.length&&(d.region=e[0]);}return d}function Gi(b,c,d){var e=new VTTRegion;e.id=b.id;e.regionAnchorX=b.regionAnchorX;e.regionAnchorY=b.regionAnchorY;e.scroll=b.scroll;2==b.heightUnits&&(e.lines=b.height);e.width=0==b.widthUnits?100*b.width/c:b.width;0==b.viewportAnchorUnits?(e.viewportAnchorX=100*b.viewportAnchorX/c,e.viewportAnchorY=100*b.viewportAnchorY/d):(e.viewportAnchorX=b.viewportAnchorX,e.viewportAnchorY=b.viewportAnchorY);return e}
function Fi(b,c){var d=b.mode;b.mode="showing"==d?"showing":"hidden";for(var e=b.cues,f=e.length-1;0<=f;f--){var g=e[f];g&&c(g)&&b.removeCue(g);}b.mode=d;}function Ii(b,c,d,e,f){var g=f in e,h=!0,k;for(k in c){var l=f+"."+k,m=g?e[f]:d[k];g||k in b?void 0===c[k]?void 0===m||g?delete b[k]:b[k]=m:m.constructor==Object&&c[k]&&c[k].constructor==Object?(b[k]||(b[k]=m),l=Ii(b[k],c[k],m,e,l),h=h&&l):typeof c[k]!=typeof m||null==c[k]||c[k].constructor!=m.constructor?h=!1:b[k]=c[k]:h=!1;}return h}function Ji(){var b=5E5,c=Infinity;navigator.connection&&navigator.connection.type&&(b=1E6*navigator.connection.downlink,navigator.connection.saveData&&(c=360));var d={trackSelectionCallback:function(b){return b},progressCallback:function(){},usePersistentLicense:!0},e={drm:{retryParameters:db(),servers:{},clearKeys:{},advanced:{},delayLicenseRequestUntilPlayed:!1},manifest:{retryParameters:db(),availabilityWindowOverride:NaN,dash:{customScheme:function(b){if(b)return null},clockSyncUri:"",ignoreDrmInfo:!1,
xlinkFailGracefully:!1,defaultPresentationDelay:10}},streaming:{retryParameters:db(),failureCallback:function(){},rebufferingGoal:2,bufferingGoal:10,bufferBehind:30,ignoreTextStreamFailures:!1,alwaysStreamText:!1,startAtSegmentBoundary:!1,smallGapLimit:.5,jumpLargeGaps:!1,durationBackoff:1,forceTransmuxTS:!1},offline:d,abrFactory:J,abr:{enabled:!0,defaultBandwidthEstimate:b,switchInterval:8,bandwidthUpgradeTarget:.85,bandwidthDowngradeTarget:.95,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,
maxHeight:c,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity}},preferredAudioLanguage:"",preferredTextLanguage:"",preferredVariantRole:"",preferredTextRole:"",preferredAudioChannelCount:2,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity},playRangeStart:0,playRangeEnd:Infinity,textDisplayFactory:function(){return null}};d.trackSelectionCallback=function(b){return Ki(b,e.preferredAudioLanguage)};
return e}
function Ki(b,c){var d=[],e=pd(c),f=[0,nd,od],g=b.filter(function(b){return"variant"==b.type});f=f.map(function(b){return g.filter(function(c){c=pd(c.language);return md(b,e,c)})});for(var h,k=0;k<f.length;k++)if(f[k].length){h=f[k];break}h||(f=g.filter(function(b){return b.primary}),f.length&&(h=f));h||(h=g,g.map(function(b){return b.language}).filter(F.la));var l=h.filter(function(b){return b.height&&480>=b.height});l.length&&(l.sort(function(b,c){return c.height-b.height}),h=l.filter(function(b){return b.height==l[0].height}));
h.sort(function(b,c){return b.bandwidth-c.bandwidth});h.length&&d.push(h[Math.floor(h.length/2)]);d.push.apply(d,b.filter(function(b){return"text"==b.type}));return d}function W(b,c){var d=this;K.call(this);this.f=null;this.fb=!1;this.u=null;this.o=new Ab;this.h=this.cb=this.b=this.m=this.a=this.w=this.g=this.j=this.i=this.I=null;this.nd=1E9;this.Pb=[];this.yb=!1;this.Ba=!0;this.V=this.zb=this.Oa=null;this.wc=!1;this.vc=0;this.A=null;this.xb=[];this.K={};this.c=Li(this);this.wb={width:Infinity,height:Infinity};this.l=Mi();this.vb=0;this.M=this.c.preferredAudioLanguage;this.za=this.c.preferredTextLanguage;this.Na=this.c.preferredVariantRole;this.eb=this.c.preferredTextRole;
this.Z=this.c.preferredAudioChannelCount;c&&c(this);this.I=Ni(this);b&&this.Ab(b,!0);this.Aa=new Xg(function(){return p(function f(){var b;return w(f,function(c){switch(c.s){case 1:return b=Promise.all([d.o?d.o.destroy():null,d.I?d.I.destroy():null]),d.fb=!1,d.o=null,d.h=null,d.I=null,d.c=null,q(c,b,0)}})})});}Aa(W,K);x("shaka.Player",W);function Oi(b){if(!b.Oa)return Promise.resolve();var c=Promise.resolve();b.m&&(c=b.m.stop(),b.m=null);return Promise.all([c,b.Oa()])}
W.prototype.destroy=function(){var b=this;return p(function d(){return w(d,function(d){switch(d.s){case 1:return q(d,b.detach(),2);case 2:return q(d,b.Aa.destroy(),0)}})})};W.prototype.destroy=W.prototype.destroy;W.version="v2.4.3-6";var Pi=["output-restricted","internal-error"],Qi={};W.registerSupportPlugin=function(b,c){Qi[b]=c;};
W.isBrowserSupported=function(){return!!window.Promise&&!!window.Uint8Array&&!!Array.prototype.forEach&&!!window.MediaSource&&!!MediaSource.isTypeSupported&&!!window.MediaKeys&&!!window.navigator&&!!window.navigator.requestMediaKeySystemAccess&&!!window.MediaKeySystemAccess&&!!window.MediaKeySystemAccess.prototype.getConfiguration};W.probeSupport=function(){return vc().then(function(b){var c=lf(),d=ad();b={manifest:c,media:d,drm:b};for(var e in Qi)b[e]=Qi[e]();return b})};
W.prototype.Ab=function(b,c){var d=this;return p(function f(){return w(f,function(f){switch(f.s){case 1:void 0===c&&(c=!0);if(!d.f){f.P(2);break}return q(f,d.detach(),2);case 2:d.f=b;D(d.o,d.f,"error",d.oe.bind(d));if(c)return d.j=new $c(d.f),q(f,d.j.j,0);f.P(0);}})})};W.prototype.attach=W.prototype.Ab;W.prototype.detach=function(){var b=this;return p(function d(){return w(d,function(d){switch(d.s){case 1:return b.f?q(d,b.sb(!1),2):d["return"]();case 2:b.o.ua(b.f,"error"),b.f=null,d.s=0;}})})};
W.prototype.detach=W.prototype.detach;function Ri(b,c,d){return p(function f(){var g;return w(f,function(f){switch(f.s){case 1:return q(f,mf(c,b.I,b.c.manifest.retryParameters,d),2);case 2:return g=f.C,f["return"](new g)}})})}function Si(b){return b.m.start(b.cb,{networkingEngine:b.I,filterNewPeriod:b.Tb.bind(b),filterAllPeriods:b.dd.bind(b),onTimelineRegionAdded:function(c){b.w?b.w.o(c):b.xb.push(c);},onEvent:b.rb.bind(b),onError:b.bb.bind(b)})}
function Ti(b){b.b.periods.some(function(b){return b.variants.some(function(b){return b.video&&b.audio})})&&b.b.periods.forEach(function(b){b.variants=b.variants.filter(function(b){return b.video&&b.audio});});if(0==b.b.periods.length)throw new A(2,4,4014);}
W.prototype.load=function(b,c,d){c=void 0===c?null:c;var e=this;return p(function g(){var h,k,l,m,r,t,u,v,z,Y,ba,Ea,Fa,X,Q,Qa;return w(g,function(g){switch(g.s){case 1:if(!e.f)throw new A(2,7,7002);k=new y;l=function(){h=new A(2,7,7E3);return k};e.dispatchEvent(new E("loading"));m=Date.now();g.pa=2;r=e.sb();e.Oa=l;return q(g,r,4);case 4:e.l=Mi();D(e.o,e.f,"playing",e.tb.bind(e));D(e.o,e.f,"pause",e.tb.bind(e));D(e.o,e.f,"ended",e.tb.bind(e));t=e.c.abrFactory;e.h=new t;e.h.configure(e.c.abr);u=e.c.textDisplayFactory;
e.u=new u;e.u.setTextVisibility(e.fb);if(h)throw h;z=v=null;d&&("string"==typeof d?z=d:(Ha("Loading with a manifest parser factory is deprecated. Instead please register a manifest parser and pass in the mime type."),v=d));Y=e;if(v){ba=new v;g.P(5);break}return q(g,Ri(e,b,z),6);case 6:ba=g.C;case 5:return Y.m=ba,e.m.configure(e.c.manifest),e.cb=b,Ea=e,q(g,Si(e),7);case 7:Ea.b=g.C;if(h)throw h;Ti(e);e.i=new ac({Va:e.I,onError:e.bb.bind(e),Ib:e.ae.bind(e),onExpirationUpdated:e.Yd.bind(e),onEvent:e.rb.bind(e)});
e.i.configure(e.c.drm);return q(g,e.i.init(e.b,!1),8);case 8:if(h)throw h;e.dd(e.b.periods);e.vb=Date.now()/1E3;e.M=e.c.preferredAudioLanguage;e.za=e.c.preferredTextLanguage;e.Z=e.c.preferredAudioChannelCount;Ui(e.b.presentationTimeline,e.c.playRangeStart,e.c.playRangeEnd,e.U());return q(g,e.i.Ab(e.f),9);case 9:if(h)throw h;e.h.init(e.Ve.bind(e));e.j||(e.j=new $c(e.f));e.j.o=e.u;e.g=new Sg(e.f,e.b.presentationTimeline,e.b.minBufferTime||0,e.c.streaming,c,e.Ue.bind(e),e.rb.bind(e));e.w=new Zg(e.f,
e.b.minBufferTime,e.c.streaming,e.ed.bind(e),e.rb.bind(e),e.Te.bind(e),new ch(e.f,e.j,e.b));e.a=new dh(e.b,{Ja:e.g,L:e.j,Va:e.I,Jc:e.Wd.bind(e),Ic:e.rd.bind(e),onError:e.bb.bind(e),onEvent:e.rb.bind(e),be:e.ce.bind(e),lb:e.le.bind(e)});e.a.configure(e.c.streaming);Vi(e);e.dispatchEvent(new E("streaming"));return q(g,e.a.init(),10);case 10:if(h)throw h;e.c.streaming.startAtSegmentBoundary&&(Fa=Wi(e,Vg(e.g)),Pg(e.g.b,Fa));e.b.periods.forEach(e.Tb.bind(e));Xi(e);Yi(e);X=U(e.a);Q=Dd(X.variants,e.M,e.Na,
e.Z);e.h.setVariants(Q);X.variants.some(function(b){return b.primary});e.xb.forEach(e.w.o.bind(e.w));e.xb=[];Db(e.o,e.f,"loadeddata",function(){this.l.loadLatency=(Date.now()-m)/1E3;}.bind(e));if(h)throw h;e.Oa=null;qa(g);break;case 2:return Qa=ra(g),k.resolve(),e.Oa==l&&(e.Oa=null,e.dispatchEvent(new E("unloading"))),h?g["return"](Promise.reject(h)):g["return"](Promise.reject(Qa))}})})};W.prototype.load=W.prototype.load;
function Vi(b){function c(b){return(b.video?b.video.codecs.split(".")[0]:"")+"-"+(b.audio?b.audio.codecs.split(".")[0]:"")}var d=b.b.periods.reduce(function(b,c){return b.concat(c.variants)},[]);d=Fd(d,b.c.preferredAudioChannelCount);var e=new zb;d.forEach(function(b){e.push(c(b),b);});var f=null,g=Infinity;e.forEach(function(b,c){var d=0,e=0;c.forEach(function(b){d+=b.bandwidth||0;++e;});var h=d/e;h<g&&(f=b,g=h);});b.b.periods.forEach(function(b){b.variants=b.variants.filter(function(b){return c(b)==
f?!0:!1});});}function Ni(b){return new C(function(c,d){b.h&&b.h.segmentDownloaded(c,d);})}W.prototype.configure=function(b,c){if(2==arguments.length&&"string"==typeof b){for(var d=b,e={},f=e,g=0,h=0;;){g=d.indexOf(".",g);if(0>g)break;if(0==g||"\\"!=d[g-1])h=d.substring(h,g).replace(/\\\./g,"."),f[h]={},f=f[h],h=g+1;g+=1;}f[d.substring(h).replace(/\\\./g,".")]=c;b=e;}d=Ii(this.c,b,Li(this),Zi(),"");$i(this);return d};W.prototype.configure=W.prototype.configure;
function $i(b){b.m&&b.m.configure(b.c.manifest);b.i&&b.i.configure(b.c.drm);if(b.a){b.a.configure(b.c.streaming);try{b.b.periods.forEach(b.Tb.bind(b));}catch(f){b.bb(f);}var c=hh(b.a),d=jh(b.a),e=U(b.a);(c=Jd(c,d,e.variants))&&c.allowedByApplication&&c.allowedByKeySystem||aj(b,e);}b.h&&(b.h.configure(b.c.abr),b.c.abr.enabled&&!b.Ba?b.h.enable():b.h.disable());}W.prototype.getConfiguration=function(){var b=Li(this);Ii(b,this.c,Li(this),Zi(),"");return b};W.prototype.getConfiguration=W.prototype.getConfiguration;
W.prototype.Ge=function(){this.c=Li(this);$i(this);};W.prototype.resetConfiguration=W.prototype.Ge;W.prototype.Hd=function(){return this.f};W.prototype.getMediaElement=W.prototype.Hd;W.prototype.Qa=function(){return this.I};W.prototype.getNetworkingEngine=W.prototype.Qa;W.prototype.Ub=function(){return this.cb};W.prototype.getAssetUri=W.prototype.Ub;W.prototype.Gd=function(){Ha('"getManifestUri" is deprecated and will be removed in v2.6. Please use "getAssetUri" instead.');return this.cb};
W.prototype.getManifestUri=W.prototype.Gd;W.prototype.U=function(){return this.b?this.b.presentationTimeline.U():!1};W.prototype.isLive=W.prototype.U;W.prototype.Fa=function(){return this.b?this.b.presentationTimeline.Fa():!1};W.prototype.isInProgress=W.prototype.Fa;W.prototype.Td=function(){if(!this.b||!this.b.periods.length)return!1;var b=this.b.periods[0].variants;return b.length?!b[0].video:!1};W.prototype.isAudioOnly=W.prototype.Td;
W.prototype.Ie=function(){var b=0,c=0;this.b&&(c=this.b.presentationTimeline,b=c.Ra(),c=c.ra());return{start:b,end:c}};W.prototype.seekRange=W.prototype.Ie;W.prototype.keySystem=function(){return this.i?this.i.keySystem():""};W.prototype.keySystem=W.prototype.keySystem;W.prototype.drmInfo=function(){return this.i?this.i.b:null};W.prototype.drmInfo=W.prototype.drmInfo;W.prototype.Gb=function(){return this.i?this.i.Gb():Infinity};W.prototype.getExpiration=W.prototype.Gb;W.prototype.Gc=function(){return this.yb};
W.prototype.isBuffering=W.prototype.Gc;W.prototype.sb=function(b){var c=this;return p(function e(){return w(e,function(e){switch(e.s){case 1:if(c.Aa.a)return e["return"]();void 0===b&&(b=!0);c.dispatchEvent(new E("unloading"));return q(e,Oi(c),2);case 2:return c.zb||(c.zb=bj(c).then(function(){c.ed(!1);c.zb=null;})),q(e,c.zb,3);case 3:if(b)return c.j=new $c(c.f),q(e,c.j.j,0);e.P(0);}})})};W.prototype.unload=W.prototype.sb;W.prototype.gb=function(){return this.g?this.g.gb():0};
W.prototype.getPlaybackRate=W.prototype.gb;W.prototype.df=function(b){this.g&&Rg(this.g.b,b);this.a&&ph(this.a,1!=b);};W.prototype.trickPlay=W.prototype.df;W.prototype.sd=function(){this.g&&Rg(this.g.b,1);this.a&&ph(this.a,!1);};W.prototype.cancelTrickPlay=W.prototype.sd;W.prototype.Qd=function(){if(!this.b||!this.g)return[];var b=Ld(this.b,Vg(this.g)),c=this.K[b]||{};return zd(this.b.periods[b],c.audio,c.video)};W.prototype.getVariantTracks=W.prototype.Qd;
W.prototype.Pd=function(){if(!this.b||!this.g)return[];var b=Ld(this.b,Vg(this.g)),c=this.K[b]||{};if(!c.text){var d=Hd(this.b.periods[b].textStreams,this.za,this.eb);d.length&&(c.text=d[0].id);}return Ad(this.b.periods[b],c.text).filter(function(b){return 0>this.Pb.indexOf(b.id)}.bind(this))};W.prototype.getTextTracks=W.prototype.Pd;
W.prototype.Me=function(b){if(this.a){var c=U(this.a);a:{for(var d=0;d<c.textStreams.length;d++)if(c.textStreams[d].id==b.id){b=c.textStreams[d];break a}b=null;}b&&(this.j.l=!1,cj(this,b,!1),c=b,this.Ba?this.A=c:qh(this.a,c,!0,0),this.za=b.language);}};W.prototype.selectTextTrack=W.prototype.Me;W.prototype.Ke=function(){this.j.l=!0;oh(this.a);};W.prototype.selectEmbeddedTextTrack=W.prototype.Ke;W.prototype.jf=function(){return this.j?this.j.l:!1};W.prototype.usingEmbeddedTextTrack=W.prototype.jf;
W.prototype.Ne=function(b,c,d){d=void 0===d?0:d;if(this.a){this.c.abr.enabled&&Ha("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");var e=U(this.a);(b=Bd(e,b))&&Cd(b)&&(dj(this,b,!1),ej(this,b,c,d),this.M=b.language,b.audio&&b.audio.channelsCount&&(this.Z=b.audio.channelsCount),c=Dd(e.variants,this.M,this.Na,this.Z),this.h.setVariants(c));}};W.prototype.selectVariantTrack=W.prototype.Ne;
W.prototype.Bd=function(){if(!this.a)return[];var b=U(this.a);b=yd(b.variants).map(function(b){return b.audio}).filter(F.la);return fj(b)};W.prototype.getAudioLanguagesAndRoles=W.prototype.Bd;W.prototype.Od=function(){if(!this.a)return[];var b=U(this.a);return fj(b.textStreams)};W.prototype.getTextLanguagesAndRoles=W.prototype.Od;W.prototype.Ad=function(){if(!this.a)return[];var b=U(this.a);return yd(b.variants).map(function(b){return b.language}).filter(F.la)};W.prototype.getAudioLanguages=W.prototype.Ad;
W.prototype.Nd=function(){return this.a?U(this.a).textStreams.map(function(b){return b.language}).filter(F.la):[]};W.prototype.getTextLanguages=W.prototype.Nd;function fj(b){var c=[];b.forEach(function(b){if(b){var d=b.language;b.roles.length?b.roles.forEach(function(b){c.push({language:d,role:b});}):c.push({language:d,role:""});}else c.push({language:"und",role:""});});return lb(c,function(b,c){return b.language==c.language&&b.role==c.role})}
W.prototype.Je=function(b,c){if(this.a){var d=U(this.a);this.M=b;this.Na=c||"";aj(this,d);}};W.prototype.selectAudioLanguage=W.prototype.Je;W.prototype.Le=function(b,c){if(this.a){var d=U(this.a);this.za=b;this.eb=c||"";aj(this,d);}};W.prototype.selectTextLanguage=W.prototype.Le;W.prototype.$b=function(){return this.u?this.u.isTextVisible():this.fb};W.prototype.isTextTrackVisible=W.prototype.$b;
W.prototype.Re=function(b){this.u&&this.u.setTextVisibility(b);this.fb=b;gj(this);!this.c.streaming.alwaysStreamText&&this.a&&(b?(b=U(this.a),(b=Hd(b.textStreams,this.za,this.eb)[0])&&kh(this.a,b,!0)):oh(this.a));};W.prototype.setTextTrackVisibility=W.prototype.Re;W.prototype.Jd=function(){return this.b?new Date(1E3*this.b.presentationTimeline.b+1E3*this.f.currentTime):null};W.prototype.getPlayheadTimeAsDate=W.prototype.Jd;
W.prototype.Ld=function(){return this.b?new Date(1E3*this.b.presentationTimeline.b):null};W.prototype.getPresentationStartTimeAsDate=W.prototype.Ld;W.prototype.Vb=function(){return this.j?this.j.Vb():{total:[],audio:[],video:[],text:[]}};W.prototype.getBufferedInfo=W.prototype.Vb;
W.prototype.getStats=function(){hj(this);this.tb();var b=null,c=null,d=this.f;d=d&&d.getVideoPlaybackQuality?d.getVideoPlaybackQuality():{};if(this.g&&this.b){var e=Ld(this.b,Vg(this.g)),f=this.b.periods[e];if(e=this.K[e])c=Kd(e.audio,e.video,f.variants),b=c.video||{};}b||(b={});c||(c={});return{width:b.width||0,height:b.height||0,streamBandwidth:c.bandwidth||0,decodedFrames:Number(d.totalVideoFrames),droppedFrames:Number(d.droppedVideoFrames),estimatedBandwidth:this.h?this.h.getBandwidthEstimate():
NaN,loadLatency:this.l.loadLatency,playTime:this.l.playTime,bufferingTime:this.l.bufferingTime,switchHistory:pb(this.l.switchHistory),stateHistory:pb(this.l.stateHistory)}};W.prototype.getStats=W.prototype.getStats;
W.prototype.addTextTrack=function(b,c,d,e,f,g){if(!this.a)return Promise.reject();var h=U(this.a),k=this.b.periods.indexOf(h)+1,l=(k>=this.b.periods.length?this.b.presentationTimeline.S():this.b.periods[k].startTime)-h.startTime;if(Infinity==l)return Promise.reject(new A(1,4,4033));var m={id:this.nd++,originalId:null,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return 1},getSegmentReference:function(c){return 1!=c?null:new N(1,0,l,function(){return[b]},0,null)},
initSegmentReference:null,presentationTimeOffset:0,mimeType:e,codecs:f||"",kind:d,encrypted:!1,keyId:null,language:c,label:g||null,type:"text",primary:!1,trickModeVideo:null,containsEmsgBoxes:!1,roles:[],channelsCount:null};this.Pb.push(m.id);h.textStreams.push(m);return kh(this.a,m,this.fb).then(function(){if(!this.Aa.a){var b=this.b.periods.indexOf(h),e=ih(this.a,"text");e&&(this.K[b].text=e.id);nb(this.Pb,m.id);aj(this,h);Xi(this);return{id:m.id,active:!1,type:"text",bandwidth:0,language:c,label:g||
null,kind:d,width:null,height:null}}}.bind(this))};W.prototype.addTextTrack=W.prototype.addTextTrack;W.prototype.oc=function(b,c){this.wb.width=b;this.wb.height=c;};W.prototype.setMaxHardwareResolution=W.prototype.oc;W.prototype.Yc=function(){if(this.a){var b=this.a;if(b.f)b=!1;else if(b.l)b=!1;else{for(var c in b.c){var d=b.c[c];d.jb&&(d.jb=!1,nh(b,d,.1));}b=!0;}}else b=!1;return b};W.prototype.retryStreaming=W.prototype.Yc;W.prototype.Fd=function(){return this.b};W.prototype.getManifest=W.prototype.Fd;
function dj(b,c,d){c.video&&ij(b,c.video);c.audio&&ij(b,c.audio);var e=gh(b.a);c!=Jd(hh(b.a),jh(b.a),e?e.variants:[])&&b.l.switchHistory.push({timestamp:Date.now()/1E3,id:c.id,type:"variant",fromAdaptation:d,bandwidth:c.bandwidth});}function cj(b,c,d){ij(b,c);b.l.switchHistory.push({timestamp:Date.now()/1E3,id:c.id,type:"text",fromAdaptation:d,bandwidth:null});}function ij(b,c){var d=Md(b.b,c);b.K[d]||(b.K[d]={});b.K[d][c.type]=c.id;}
function bj(b){b.o&&(b.o.ua(b.f,"loadeddata"),b.o.ua(b.f,"playing"),b.o.ua(b.f,"pause"),b.o.ua(b.f,"ended"));var c=Promise.all([b.h?b.h.stop():null,b.j?b.j.destroy():null,b.i?b.i.destroy():null,b.g?b.g.destroy():null,b.w?b.w.destroy():null,b.a?b.a.destroy():null,b.m?b.m.stop():null,b.u?b.u.destroy():null]);b.Ba=!0;b.i=null;b.j=null;b.g=null;b.w=null;b.a=null;b.m=null;b.u=null;b.b=null;b.cb=null;b.xb=[];b.K={};b.l=Mi();return c}
function Zi(){return{".drm.servers":"",".drm.clearKeys":"",".drm.advanced":{distinctiveIdentifierRequired:!1,persistentStateRequired:!1,videoRobustness:"",audioRobustness:"",serverCertificate:new Uint8Array(0)}}}function Li(b){var c=Ji();c.streaming.failureCallback=function(c){var d=[1001,1002,1003];b.U()&&0<=d.indexOf(c.code)&&(c.severity=1,b.Yc());};c.textDisplayFactory=function(){return new V(b.f)};return c}
function Mi(){return{width:NaN,height:NaN,streamBandwidth:NaN,decodedFrames:NaN,droppedFrames:NaN,estimatedBandwidth:NaN,loadLatency:NaN,playTime:0,bufferingTime:0,switchHistory:[],stateHistory:[]}}n=W.prototype;
n.dd=function(b){b.forEach(td.bind(null,this.i,this.a?hh(this.a):null,this.a?jh(this.a):null));var c=ob(b,function(b){return b.variants.some(Cd)});if(0==c)throw new A(2,4,4032);if(c<b.length)throw new A(2,4,4011);b.forEach(function(b){sd(b.variants,this.c.restrictions,this.wb)&&this.a&&U(this.a)==b&&Xi(this);jj(this,b.variants);}.bind(this));};
n.Tb=function(b){td(this.i,this.a?hh(this.a):null,this.a?jh(this.a):null,b);var c=b.variants;if(!c.some(Cd))throw new A(2,4,4011);jj(this,b.variants);sd(c,this.c.restrictions,this.wb)&&this.a&&U(this.a)==b&&Xi(this);};function ej(b,c,d,e){d=void 0===d?!1:d;e=void 0===e?0:e;b.Ba?(b.V=c,b.wc=d,b.vc=e):rh(b.a,c,d,e);}function hj(b){if(b.b){var c=Date.now()/1E3;b.yb?b.l.bufferingTime+=c-b.vb:b.l.playTime+=c-b.vb;b.vb=c;}}
function Wi(b,c){function d(b,c){if(!b)return null;var d=b.findSegmentPosition(c-g.startTime);return null==d?null:(d=b.getSegmentReference(d))?d.startTime+g.startTime:null}var e=hh(b.a),f=jh(b.a),g=U(b.a);e=d(e,c);f=d(f,c);return null!=f&&null!=e?Math.max(f,e):null!=f?f:null!=e?e:c}n.ed=function(b){hj(this);this.yb=b;this.tb();if(this.g){var c=this.g.b;b!=c.g&&(c.g=b,Rg(c,c.f));}this.dispatchEvent(new E("buffering",{buffering:b}));};n.Te=function(){Xi(this);};
n.tb=function(){if(!this.Aa.a){var b=this.yb?"buffering":this.f.ended?"ended":this.f.paused?"paused":"playing";var c=Date.now()/1E3;if(this.l.stateHistory.length){var d=this.l.stateHistory[this.l.stateHistory.length-1];d.duration=c-d.timestamp;if(b==d.state)return}this.l.stateHistory.push({timestamp:c,state:b,duration:0});}};n.Ue=function(){if(this.w){var b=this.w;b.f.forEach(b.m.bind(b,!0));}this.a&&uh(this.a);};
function kj(b,c,d){try{jj(b,c.variants);}catch(e){return b.bb(e),null}b.h.setVariants(d);return b.h.chooseVariant()}function aj(b,c){var d=Dd(c.variants,b.M,b.Na,b.Z),e=Hd(c.textStreams,b.za,b.eb);if(d=kj(b,c,d))dj(b,d,!0),ej(b,d,!0);(e=e[0])&&(b.c.streaming.alwaysStreamText||b.$b())&&(cj(b,e,!0),b.Ba?b.A=e:qh(b.a,e,!0,0));Yi(b);}
n.Wd=function(b){this.Ba=!0;this.h.disable();var c={audio:!1,text:!1},d=Dd(b.variants,this.M,this.Na,this.Z,c),e=Hd(b.textStreams,this.za,this.eb,c);d=kj(this,b,d);e=e[0]||null;if(this.V){a:{var f=this.b;for(var g=0;g<f.periods.length;++g)for(var h=f.periods[g],k=0;k<h.variants.length;++k)if(h.variants[k]==this.V){f=g;break a}f=-1;}this.b.periods[f]==b&&(d=this.V);this.V=null;}this.A&&(this.b.periods[Md(this.b,this.A)]==b&&(e=this.A),this.A=null);d&&dj(this,d,!0);e&&(cj(this,e,!0),!gh(this.a)&&d&&d.audio&&
c.text&&e.language!=d.audio.language&&(this.u.setTextVisibility(!0),gj(this)));return this.c.streaming.alwaysStreamText||this.$b()?{variant:d,text:e}:{variant:d,text:null}};n.rd=function(){this.Ba=!1;this.c.abr.enabled&&this.h.enable();this.V&&(rh(this.a,this.V,this.wc,this.vc),this.V=null);this.A&&(qh(this.a,this.A,!0,0),this.A=null);};n.ce=function(){this.m&&this.m.update&&this.m.update();};n.le=function(){this.g&&this.g.lb();};
n.Ve=function(b,c,d){c=void 0===c?!1:c;d=void 0===d?0:d;dj(this,b,!0);this.a&&(rh(this.a,b,c,d),Yi(this));};function Yi(b){Promise.resolve().then(function(){this.Aa.a||this.dispatchEvent(new E("adaptation"));}.bind(b));}function Xi(b){Promise.resolve().then(function(){this.Aa.a||this.dispatchEvent(new E("trackschanged"));}.bind(b));}function gj(b){b.dispatchEvent(new E("texttrackvisibility"));}
n.bb=function(b){if(!this.Aa.a){var c=new E("error",{detail:b});this.dispatchEvent(c);c.defaultPrevented&&(b.handled=!0);}};n.rb=function(b){this.dispatchEvent(b);};n.oe=function(){if(this.f.error){var b=this.f.error.code;if(1!=b){var c=this.f.error.msExtendedCode;c&&(0>c&&(c+=Math.pow(2,32)),c=c.toString(16));this.bb(new A(2,3,3016,b,c,this.f.error.message));}}};
n.ae=function(b){var c=U(this.a),d=!1,e=Object.keys(b),f=1==e.length&&"00"==e[0];e.length&&c.variants.forEach(function(c){qc(c).forEach(function(e){var g=c.allowedByKeySystem;e.keyId&&(e=b[f?"00":e.keyId],c.allowedByKeySystem=!!e&&0>Pi.indexOf(e));g!=c.allowedByKeySystem&&(d=!0);});});(e=Jd(hh(this.a),jh(this.a),c.variants))&&!e.allowedByKeySystem&&aj(this,c);d&&(Xi(this),c=Dd(c.variants,this.M,this.Na,this.Z),this.h.setVariants(c));};
n.Yd=function(b,c){if(this.m&&this.m.onExpirationUpdated)this.m.onExpirationUpdated(b,c);this.dispatchEvent(new E("expirationupdated"));};function Ui(b,c,d,e){0<c&&(e||b.cd(c));d<b.S()&&(e||b.oa(d));}
function jj(b,c){var d=b.i?b.i.o:{},e=Object.keys(d);e=e.length&&"00"==e[0];for(var f=!1,g=!1,h=[],k=[],l=ja(c),m=l.next();!m.done;m=l.next()){m=m.value;var r=[];m.audio&&r.push(m.audio);m.video&&r.push(m.video);r=ja(r);for(var t=r.next();!t.done;t=r.next())if(t=t.value,t.keyId){var u=d[e?"00":t.keyId];u?0<=Pi.indexOf(u)&&0>k.indexOf(u)&&k.push(u):0>h.indexOf(t.keyId)&&h.push(t.keyId);}m.allowedByApplication?m.allowedByKeySystem&&(f=!0):g=!0;}if(!f)throw new A(2,4,4012,{hasAppRestrictions:g,missingKeys:h,
restrictedKeyStatuses:k});}function lj(b,c,d){var e=void 0==c.expiration?Infinity:c.expiration,f=c.presentationTimeline.S();c=xd(c.periods[0]);return{offlineUri:null,originalManifestUri:b,duration:f,size:0,expiration:e,tracks:c,appMetadata:d}}function mj(b,c){var d=yi(new wi(b.ba(),b.R()),c.periods[0],new T(null,0)),e=c.appMetadata||{};d=xd(d);return{offlineUri:b.toString(),originalManifestUri:c.originalManifestUri,duration:c.duration,size:c.size,expiration:c.expiration,tracks:d,appMetadata:e}}function oj(){this.a={};}function pj(b,c,d){d=d.endTime-d.startTime;return qj(b,c)*d}function qj(b,c){var d=b.a[c];null==d&&(d=0);return d}function Z(b){if(b.constructor!=W)throw new A(2,9,9008);this.a=b.c;this.b=b.Qa();this.h=!1;this.c=null;this.f=[];this.g=[];}var rj;x("shaka.offline.Storage",Z);function sj(){return ci()}Z.support=sj;function tc(b){void 0!==b&&(rj=b);return rj}Z.doNotReleaseLicense=tc;Z.prototype.destroy=function(){function b(){}this.b=this.a=null;return Promise.all(this.g.map(function(c){return c.then(b,b)}))};Z.prototype.destroy=Z.prototype.destroy;
Z.prototype.configure=function(b){var c=!1;null!=b.trackSelectionCallback&&(c=!0,b.offline=b.offline||{},b.offline.trackSelectionCallback=b.trackSelectionCallback);null!=b.progressCallback&&(c=!0,b.offline=b.offline||{},b.offline.progressCallback=b.progressCallback);null!=b.usePersistentLicense&&(c=!0,b.offline=b.offline||{},b.offline.usePersistentLicense=b.usePersistentLicense);c&&Ha("Storage.configure should now be passed a player configuration structure. Using a non-player configuration will be deprecated in v2.6.");
Ii(this.a,b,Ji(),{},"");};Z.prototype.configure=Z.prototype.configure;Z.prototype.Qa=function(){return this.b};Z.prototype.getNetworkingEngine=Z.prototype.Qa;
Z.prototype.store=function(b,c,d){var e=this,f=null,g=null;d&&("string"==typeof d?g=d:(Ha("Loading with a manifest parser factory is deprecated. Instead please register a manifest parser and pass in the mime type."),f=d));return tj(this,uj(this,b,c||{},function(){return p(function k(){var c,d;return w(k,function(k){switch(k.s){case 1:if(f){c=new f;k.P(2);break}return q(k,vj(e,b,g),3);case 3:c=k.C;case 2:return d=c,d.configure(e.a.manifest),k["return"](d)}})})}))};Z.prototype.store=Z.prototype.store;
function uj(b,c,d,e){return p(function g(){var h,k,l,m,r;return w(g,function(g){switch(g.s){case 1:wj();if(b.h)return g["return"](Promise.reject(new A(2,9,9006)));b.h=!0;h=null;k=function(b){h=h||b;};return q(g,xj(b,c,k,e),2);case 2:l=g.C;m=!l.manifest.presentationTimeline.U()&&!l.manifest.presentationTimeline.Fa();if(!m)throw new A(2,9,9005,c);yj(b);if(h)throw h;r=new Xh;return g["return"](Yg([r,l.Rb],function(){return p(function v(){var e,g,k,m,t,X,Q;return w(v,function(z){switch(z.s){case 1:return pa(z),
q(z,r.init(),4);case 4:return yj(b),zj(b,l.Rb,l.manifest.periods),q(z,Zh(r),5);case 5:return e=z.C,yj(b),z.pa=6,q(z,Aj(b,e.R,l.Rb,l.manifest,c,d),8);case 8:return g=z.C,yj(b),q(z,e.R.addManifests([g]),9);case 9:return k=z.C,yj(b),m=new ui("manifest",e.path.ba,e.path.R,k[0]),z["return"](mj(m,g));case 6:return t=ra(z),X=b.f,Q=function(){},q(z,e.R.removeSegments(X,Q),10);case 10:throw h||t;case 2:sa(z),b.h=!1,b.c=null,b.f=[],ta(z);}})})}))}})})}
function Aj(b,c,d,e,f,g){return p(function k(){var l,m,r,t;return w(k,function(k){switch(k.s){case 1:return l=lj(f,e,g),m=new Nh(function(c,d){l.size=d;b.a.offline.progressCallback(l,c);}),r=b.b,q(k,Yg([m],function(){return p(function z(){return w(z,function(k){switch(k.s){case 1:return t=Bj(b,m,c,d,e,f,g),q(k,Ph(m,r),0)}})})}),2);case 2:return t.size=l.size,k["return"](t)}})})}Z.prototype.remove=function(b){return tj(this,Cj(this,b))};Z.prototype.remove=Z.prototype.remove;
function Cj(b,c){wj();var d=vi(c);if(null==d||"manifest"!=d.a)return Promise.reject(new A(2,9,9004,c));var e=new Xh;return Yg([e],function(){return p(function g(){var c,k,l;return w(g,function(g){switch(g.s){case 1:return q(g,e.init(),2);case 2:return q(g,ai(e,d.ba(),d.R()),3);case 3:return c=g.C,q(g,c.getManifests([d.key()]),4);case 4:return k=g.C,l=k[0],q(g,Promise.all([Dj(b,d,l),Ej(b,c,d,l)]),0)}})})})}
function Dj(b,c,d){var e,f=new ac({Va:b.b,onError:function(b){6013!=b.code&&(e=b);},Ib:function(){},onExpirationUpdated:function(){},onEvent:function(){}});f.configure(b.a.drm);var g=xi(new wi(c.ba(),c.R()),d);return Yg([f],function(){return p(function k(){return w(k,function(c){switch(c.s){case 1:return q(c,f.init(g,b.a.offline.usePersistentLicense),2);case 2:return q(c,jc(f,d.sessionIds),0)}})})}).then(function(){if(e)throw e;})}
function Ej(b,c,d,e){function f(){k+=1;b.a.offline.progressCallback(l,k/h);}var g=Fj(e),h=g.length+1,k=0,l=mj(d,e);return Promise.all([c.removeSegments(g,f),c.removeManifests([d.key()],f)])}Z.prototype.list=function(){return tj(this,Gj())};Z.prototype.list=Z.prototype.list;
function Gj(){function b(b,d){return p(function h(){var e;return w(h,function(f){switch(f.s){case 1:return q(f,d.getAllManifests(),2);case 2:e=f.C,Kb(e,function(d,e){var f=mj(new ui("manifest",b.ba,b.R,d),e);c.push(f);}),f.s=0;}})})}wj();var c=[],d=new Xh;return Yg([d],function(){return p(function f(){var c;return w(f,function(f){switch(f.s){case 1:return q(f,d.init(),2);case 2:return c=Promise.resolve(),$h(d,function(d,f){c=c.then(function(){return b(d,f)});}),q(f,c,0)}})})}).then(function(){return c})}
function xj(b,c,d,e){function f(){}var g=b.b,h=b.a,k,l,m;return e().then(function(b){var e=this;yj(this);m=b;l=new ac({Va:g,onError:d,Ib:f,onExpirationUpdated:function(){},onEvent:function(){}});l.configure(h.drm);return m.start(c,{networkingEngine:g,filterAllPeriods:function(b){zj(e,l,b);},filterNewPeriod:function(b){Hj(e,l,b);},onTimelineRegionAdded:function(){},onEvent:function(){},onError:d})}.bind(b)).then(function(b){yj(this);k=b;return l.init(k,this.a.offline.usePersistentLicense)}.bind(b)).then(function(){yj(this);
return Ij(k)}.bind(b)).then(function(){yj(this);return hc(l)}.bind(b)).then(function(){yj(this);return m.stop()}.bind(b)).then(function(){yj(this);return{manifest:k,Rb:l}}.bind(b))["catch"](function(b){if(m)return m.stop().then(function(){throw b;});throw b;})}function zj(b,c,d){d.forEach(function(d){return Hj(b,c,d)});}
function Hj(b,c,d){var e=null;if(b.c){var f=b.c.filter(function(b){return"variant"==b.type})[0];f&&(e=Bd(d,f));}var g=f=null;e&&(e.audio&&(f=e.audio),e.video&&(g=e.video));td(c,f,g,d);sd(d.variants,b.a.restrictions,{width:Infinity,height:Infinity});}
function Ij(b){var c=b.periods.map(function(b){return b.variants}).reduce(F.ja,[]).map(function(b){return qc(b)}).reduce(F.ja,[]).filter(F.la);b=b.periods.map(function(b){return b.textStreams}).reduce(F.ja,[]);c.push.apply(c,b);return Promise.all(c.map(function(b){return b.createSegmentIndex()}))}
function Bj(b,c,d,e,f,g,h){var k=new oj,l=f.periods.map(function(g){return Jj(b,c,d,k,e,f,g)}),m=e.b,r=mc(e);if(m&&b.a.offline.usePersistentLicense){if(!r.length)throw new A(2,9,9007,g);m.initData=[];}return{originalManifestUri:g,duration:f.presentationTimeline.S(),size:0,expiration:e.Gb(),periods:l,sessionIds:b.a.offline.usePersistentLicense?r:[],drmInfo:m,appMetadata:h}}
function Jj(b,c,d,e,f,g,h){var k=zd(h,null,null),l=Ad(h,null);k=b.a.offline.trackSelectionCallback(k.concat(l));null==b.c&&(b.c=k,zj(b,f,g.periods));Kj(k);g.periods.forEach(function(b){b.variants.forEach(function(b){var c=b.audio,d=b.video;c&&!d&&(e.a[c.id]=c.bandwidth||b.bandwidth);!c&&d&&(e.a[d.id]=d.bandwidth||b.bandwidth);if(c&&d){var f=c.bandwidth||393216,g=d.bandwidth||b.bandwidth-f;0>=g&&(g=b.bandwidth);e.a[c.id]=f;e.a[d.id]=g;}});b.textStreams.forEach(function(b){e.a[b.id]=52;});});var m={};
k.forEach(function(b){"variant"==b.type&&null!=b.audioId&&(m[b.audioId]=!0);"variant"==b.type&&null!=b.videoId&&(m[b.videoId]=!0);"text"==b.type&&(m[b.id]=!0);});var r={};Lj(g).filter(function(b){return!!m[b.id]}).forEach(function(f){r[f.id]=Mj(b,c,d,e,g,f);});k.forEach(function(b){"variant"==b.type&&null!=b.audioId&&r[b.audioId].variantIds.push(b.id);"variant"==b.type&&null!=b.videoId&&r[b.videoId].variantIds.push(b.id);});return{startTime:h.startTime,streams:G(r)}}
function Mj(b,c,d,e,f,g){var h={id:g.id,originalId:g.originalId,primary:g.primary,presentationTimeOffset:g.presentationTimeOffset||0,contentType:g.type,mimeType:g.mimeType,codecs:g.codecs,frameRate:g.frameRate,kind:g.kind,language:g.language,label:g.label,width:g.width||null,height:g.height||null,initSegmentKey:null,encrypted:g.encrypted,keyId:g.keyId,segments:[],variantIds:[]};f=f.presentationTimeline.ib();var k=g.id;Nj(g,f,function(f){Oh(c,k,Oj(b,f),pj(e,g.id,f),function(c){return d.addSegments([{data:c}]).then(function(c){b.f.push(c[0]);
h.segments.push({startTime:f.startTime,endTime:f.endTime,dataKey:c[0]});})});});(f=g.initSegmentReference)&&Oh(c,k,Oj(b,f),.5*qj(e,g.id),function(c){return d.addSegments([{data:c}]).then(function(c){b.f.push(c[0]);h.initSegmentKey=c[0];})});return h}function Nj(b,c,d){c=b.findSegmentPosition(c);for(var e=null==c?null:b.getSegmentReference(c);e;)d(e),e=b.getSegmentReference(++c);}function yj(b){if(!b.b)throw new A(2,9,7001);}function wj(){if(!ci())throw new A(2,9,9E3);}
function Oj(b,c){var d=b.a.streaming.retryParameters;d=ub(c.c(),d);if(0!=c.b||null!=c.a)d.headers.Range="bytes="+c.b+"-"+(null==c.a?"":c.a);return d}function tj(b,c){return p(function e(){return w(e,function(e){switch(e.s){case 1:return b.g.push(c),pa(e),q(e,c,4);case 4:return e["return"](e.C);case 2:sa(e),nb(b.g,c),ta(e);}})})}
function vj(b,c,d){return p(function f(){var g,h;return w(f,function(f){switch(f.s){case 1:return g=b.b,q(f,mf(c,g,b.a.manifest.retryParameters,d),2);case 2:return h=f.C,f["return"](new h)}})})}function Fj(b){var c=[];b.periods.forEach(function(b){b.streams.forEach(function(b){null!=b.initSegmentKey&&c.push(b.initSegmentKey);b.segments.forEach(function(b){c.push(b.dataKey);});});});return c}Z.deleteAll=function(b){var c=b.Qa();b=b.getConfiguration();return Pj(c,b.drm)};
function Pj(b,c){var d=Qj,e=new Xh;return Yg([e],function(){return p(function g(){var h,k;return w(g,function(g){switch(g.s){case 1:return q(g,e.init(),2);case 2:return q(g,Rj(e),3);case 3:return h=g.C,k=Promise.resolve(),h.forEach(function(e){k=k.then(function(){return d(b,c,e)});}),q(g,k,4);case 4:return q(g,bi(e),0)}})})})}
function Qj(b,c,d){var e=new ac({Va:b,onError:function(){},Ib:function(){},onExpirationUpdated:function(){},onEvent:function(){}});e.configure(c);return Yg([e],function(){return p(function g(){return w(g,function(b){switch(b.s){case 1:return q(b,e.init(d,!0),2);case 2:return q(b,jc(e,d.offlineSessionIds),0)}})})})}function Kj(b){b.some(function(c){return b.some(function(b){return c!=b&&c.type==b.type&&c.kind==b.kind&&c.language==b.language})});}
function Lj(b){var c={};b.periods.forEach(function(b){b.textStreams.forEach(function(b){c[b.id]=b;});b.variants.forEach(function(b){b.audio&&(c[b.audio.id]=b.audio);b.video&&(c[b.video.id]=b.video);});});return G(c)}function Rj(b){var c=[],d=[];$h(b,function(b,f){var e=new wi(b.ba,b.R);d.push(f.getAllManifests().then(function(b){G(b).forEach(function(b){c.push(xi(e,b));});}));});return Promise.all(d).then(function(){return c})}Qi.offline=sj;x("shaka.polyfill.installAll",function(){for(var b=0;b<Sj.length;++b)Sj[b].pd();});var Sj=[];function Tj(b,c){c=c||0;for(var d={priority:c,pd:b},e=0;e<Sj.length;e++)if(Sj[e].priority<c){Sj.splice(e,0,d);return}Sj.push(d);}x("shaka.polyfill.register",Tj);Tj(function(){var b=navigator.userAgent;b&&0<=b.indexOf("CrKey")&&delete window.indexedDB;});var Uj;function Vj(b,c,d){if("input"==b)switch(this.type){case "range":b="change";}Uj.call(this,b,c,d);}Tj(function(){0>navigator.userAgent.indexOf("Trident/")||HTMLInputElement.prototype.addEventListener==Vj||(Uj=HTMLInputElement.prototype.addEventListener,HTMLInputElement.prototype.addEventListener=Vj);});Tj(function(){});function Wj(){var b=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];d=b.apply(this,d);d.abort=function(){};return d};}function Xj(){var b=SourceBuffer.prototype.remove;SourceBuffer.prototype.remove=function(c,d){return b.call(this,c,d-.001)};}
function Yj(){var b=MediaSource.prototype.endOfStream;MediaSource.prototype.endOfStream=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];for(var h=e=0;h<this.sourceBuffers.length;++h){var k=this.sourceBuffers[h];k=k.buffered.end(k.buffered.length-1);e=Math.max(e,k);}if(!isNaN(this.duration)&&e<this.duration)for(this.Ec=!0,e=0;e<this.sourceBuffers.length;++e)this.sourceBuffers[e].Ac=!1;return b.apply(this,d)};var c=!1,d=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=
function(b){for(var e=[],g=0;g<arguments.length;++g)e[g]=arguments[g];e=d.apply(this,e);e.mediaSource_=this;e.addEventListener("updateend",Zj,!1);c||(this.addEventListener("sourceclose",ak,!1),c=!0);return e};}function Zj(b){var c=b.target,d=c.mediaSource_;if(d.Ec){b.preventDefault();b.stopPropagation();b.stopImmediatePropagation();c.Ac=!0;for(b=0;b<d.sourceBuffers.length;++b)if(0==d.sourceBuffers[b].Ac)return;d.Ec=!1;}}
function ak(b){b=b.target;for(var c=0;c<b.sourceBuffers.length;++c)b.sourceBuffers[c].removeEventListener("updateend",Zj,!1);b.removeEventListener("sourceclose",ak,!1);}function bk(){var b=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(c){return"mp2t"==c.split(/ *; */)[0].split("/")[1]?!1:b(c)};}
function ck(){var b=MediaSource.isTypeSupported,c=/^dv(?:he|av)\./;MediaSource.isTypeSupported=function(d){for(var e=d.split(/ *; */),f=e[0],g={},h=1;h<e.length;++h){var k=e[h].split("="),l=k[0];k=k[1].replace(/"(.*)"/,"$1");g[l]=k;}e=g.codecs;if(!e)return b(d);var m=!1,r=!1;d=e.split(",").filter(function(b){if(c.test(b))return r=!0,!1;/^(hev|hvc)1\.2/.test(b)&&(m=!0);return!0});r&&(m=!1);g.codecs=d.join(",");m&&(g.eotf="smpte2084");for(var t in g)f+="; "+t+'="'+g[t]+'"';return cast.__platform__.canDisplayType(f)};}
Tj(function(){if(window.MediaSource)if(window.cast&&cast.__platform__&&cast.__platform__.canDisplayType)ck();else if(navigator.vendor&&0<=navigator.vendor.indexOf("Apple")){var b=navigator.appVersion;bk();0<=b.indexOf("Version/8")?window.MediaSource=null:0<=b.indexOf("Version/9")?Wj():0<=b.indexOf("Version/10")?(Wj(),Yj()):0<=b.indexOf("Version/11")&&(Wj(),Xj());}});function dk(b){this.f=[];this.b=[];this.a=[];(new P).$("pssh",this.c.bind(this)).parse(b.buffer);}dk.prototype.c=function(b){if(!(1<b.version)){var c=Yb(b.reader.Ka(16)),d=[];if(0<b.version)for(var e=b.reader.B(),f=0;f<e;++f){var g=Yb(b.reader.Ka(16));d.push(g);}e=b.reader.B();b.reader.G(e);this.b.push.apply(this.b,d);this.f.push(c);this.a.push({start:b.start,end:b.start+b.size-1});}};function ek(b,c){try{var d=new fk(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}
function fk(b,c){this.keySystem=b;for(var d=!1,e=0;e<c.length;++e){var f=c[e],g={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:f.initDataTypes,sessionTypes:["temporary"],label:f.label},h=!1;if(f.audioCapabilities)for(var k=0;k<f.audioCapabilities.length;++k){var l=f.audioCapabilities[k];if(l.contentType){h=!0;var m=l.contentType.split(";")[0];MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.audioCapabilities.push(l),d=!0);}}if(f.videoCapabilities)for(k=
0;k<f.videoCapabilities.length;++k)l=f.videoCapabilities[k],l.contentType&&(h=!0,m=l.contentType.split(";")[0],MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.videoCapabilities.push(l),d=!0));h||(d=MSMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));"required"==f.persistentState&&(d=!1);if(d){this.a=g;return}}d=Error("Unsupported keySystem");d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}fk.prototype.createMediaKeys=function(){var b=new gk(this.keySystem);return Promise.resolve(b)};
fk.prototype.getConfiguration=function(){return this.a};function hk(b){var c=this.mediaKeys;c&&c!=b&&ik(c,null);delete this.mediaKeys;return(this.mediaKeys=b)?ik(b,this):Promise.resolve()}function gk(b){this.a=new MSMediaKeys(b);this.b=new Ab;}gk.prototype.createSession=function(b){b=b||"temporary";if("temporary"!=b)throw new TypeError("Session type "+b+" is unsupported on this platform.");return new jk(this.a,b)};gk.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
function ik(b,c){function d(){c.msSetMediaKeys(e.a);c.removeEventListener("loadedmetadata",d);}Bb(b.b);if(!c)return Promise.resolve();D(b.b,c,"msneedkey",kk);var e=b;try{return 1<=c.readyState?c.msSetMediaKeys(b.a):c.addEventListener("loadedmetadata",d),Promise.resolve()}catch(f){return Promise.reject(f)}}function jk(b){K.call(this);this.c=null;this.g=b;this.b=this.a=null;this.f=new Ab;this.sessionId="";this.expiration=NaN;this.closed=new y;this.keyStatuses=new lk;}Aa(jk,K);n=jk.prototype;
n.generateRequest=function(b,c){this.a=new y;try{this.c=this.g.createSession("video/mp4",new Uint8Array(c),null),D(this.f,this.c,"mskeymessage",this.ge.bind(this)),D(this.f,this.c,"mskeyadded",this.ee.bind(this)),D(this.f,this.c,"mskeyerror",this.fe.bind(this)),mk(this,"status-pending");}catch(d){this.a.reject(d);}return this.a};n.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};n.update=function(b){this.b=new y;try{this.c.update(new Uint8Array(b));}catch(c){this.b.reject(c);}return this.b};
n.close=function(){try{this.c.close(),this.closed.resolve(),Bb(this.f);}catch(b){this.closed.reject(b);}return this.closed};n.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};
function kk(b){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="cenc";if(b=b.initData){var d=new dk(b);if(!(1>=d.a.length)){for(var e=[],f=0;f<d.a.length;f++)e.push(b.subarray(d.a[f].start,d.a[f].end+1));b=lb(e,nk);for(e=d=0;e<b.length;e++)d+=b[e].length;d=new Uint8Array(d);for(f=e=0;f<b.length;f++)d.set(b[f],e),e+=b[f].length;b=d;}}c.initData=b;this.dispatchEvent(c);}function nk(b,c){return Zb(b,c)}
n.ge=function(b){this.a&&(this.a.resolve(),this.a=null);this.dispatchEvent(new E("message",{messageType:void 0==this.keyStatuses.a?"licenserequest":"licenserenewal",message:b.message.buffer}));};n.ee=function(){this.a?(mk(this,"usable"),this.a.resolve(),this.a=null):this.b&&(mk(this,"usable"),this.b.resolve(),this.b=null);};
n.fe=function(){var b=Error("EME PatchedMediaKeysMs key error");b.errorCode=this.c.error;if(null!=this.a)this.a.reject(b),this.a=null;else if(null!=this.b)this.b.reject(b),this.b=null;else switch(this.c.error.code){case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:mk(this,"output-not-allowed");break;default:mk(this,"internal-error");}};function mk(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new E("keystatuseschange"));}
function lk(){this.size=0;this.a=void 0;}var ok;n=lk.prototype;n.forEach=function(b){this.a&&b(this.a,ok);};n.get=function(b){if(this.has(b))return this.a};n.has=function(b){var c=ok;return this.a&&Zb(new Uint8Array(b),new Uint8Array(c))?!0:!1};n.entries=function(){};n.keys=function(){};n.values=function(){};
Tj(function(){!window.HTMLVideoElement||!window.MSMediaKeys||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(ok=(new Uint8Array([0])).buffer,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=hk,window.MediaKeys=gk,window.MediaKeySystemAccess=fk,navigator.requestMediaKeySystemAccess=ek);});function pk(){return Promise.reject(Error("The key system specified is not supported."))}function qk(b){return null==b?Promise.resolve():Promise.reject(Error("MediaKeys not supported."))}function rk(){throw new TypeError("Illegal constructor.");}rk.prototype.createSession=function(){};rk.prototype.setServerCertificate=function(){};function sk(){throw new TypeError("Illegal constructor.");}sk.prototype.getConfiguration=function(){};sk.prototype.createMediaKeys=function(){};
Tj(function(){!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(navigator.requestMediaKeySystemAccess=pk,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=qk,window.MediaKeys=rk,window.MediaKeySystemAccess=sk);},-10);var tk="";function uk(b){var c=tk;return c?c+b.charAt(0).toUpperCase()+b.slice(1):b}function vk(b,c){try{var d=new wk(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}function xk(b){var c=this.mediaKeys;c&&c!=b&&yk(c,null);delete this.mediaKeys;(this.mediaKeys=b)&&yk(b,this);return Promise.resolve()}
function wk(b,c){this.a=this.keySystem=b;var d=!1;"org.w3.clearkey"==b&&(this.a="webkit-org.w3.clearkey",d=!1);var e=!1;var f=document.getElementsByTagName("video");f=f.length?f[0]:document.createElement("video");for(var g=0;g<c.length;++g){var h=c[g],k={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:h.initDataTypes,sessionTypes:["temporary"],label:h.label},l=!1;if(h.audioCapabilities)for(var m=0;m<h.audioCapabilities.length;++m){var r=
h.audioCapabilities[m];if(r.contentType){l=!0;var t=r.contentType.split(";")[0];f.canPlayType(t,this.a)&&(k.audioCapabilities.push(r),e=!0);}}if(h.videoCapabilities)for(m=0;m<h.videoCapabilities.length;++m)r=h.videoCapabilities[m],r.contentType&&(l=!0,f.canPlayType(r.contentType,this.a)&&(k.videoCapabilities.push(r),e=!0));l||(e=f.canPlayType("video/mp4",this.a)||f.canPlayType("video/webm",this.a));"required"==h.persistentState&&(d?(k.persistentState="required",k.sessionTypes=["persistent-license"]):
e=!1);if(e){this.b=k;return}}d="Unsupported keySystem";if("org.w3.clearkey"==b||"com.widevine.alpha"==b)d="None of the requested configurations were supported.";d=Error(d);d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}wk.prototype.createMediaKeys=function(){var b=new zk(this.a);return Promise.resolve(b)};wk.prototype.getConfiguration=function(){return this.b};function zk(b){this.g=b;this.b=null;this.a=new Ab;this.c=[];this.f={};}
function yk(b,c){b.b=c;Bb(b.a);var d=tk;c&&(D(b.a,c,d+"needkey",b.se.bind(b)),D(b.a,c,d+"keymessage",b.re.bind(b)),D(b.a,c,d+"keyadded",b.pe.bind(b)),D(b.a,c,d+"keyerror",b.qe.bind(b)));}n=zk.prototype;n.createSession=function(b){b=b||"temporary";if("temporary"!=b&&"persistent-license"!=b)throw new TypeError("Session type "+b+" is unsupported on this platform.");var c=this.b||document.createElement("video");c.src||(c.src="about:blank");b=new Ak(c,this.g,b);this.c.push(b);return b};
n.setServerCertificate=function(){return Promise.resolve(!1)};n.se=function(b){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="webm";c.initData=b.initData;this.b.dispatchEvent(c);};n.re=function(b){var c=Bk(this,b.sessionId);c&&(b=new E("message",{messageType:void 0==c.keyStatuses.a?"licenserequest":"licenserenewal",message:b.message}),c.b&&(c.b.resolve(),c.b=null),c.dispatchEvent(b));};
n.pe=function(b){if(b=Bk(this,b.sessionId))Ck(b,"usable"),b.a&&b.a.resolve(),b.a=null;};
n.qe=function(b){var c=Bk(this,b.sessionId);if(c){var d=Error("EME v0.1b key error");d.errorCode=b.errorCode;d.errorCode.systemCode=b.systemCode;!b.sessionId&&c.b?(d.method="generateRequest",45==b.systemCode&&(d.message="Unsupported session type."),c.b.reject(d),c.b=null):b.sessionId&&c.a?(d.method="update",c.a.reject(d),c.a=null):(d=b.systemCode,b.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?Ck(c,"output-restricted"):1==d?Ck(c,"expired"):Ck(c,"internal-error"));}};
function Bk(b,c){var d=b.f[c];return d?d:(d=b.c.shift())?(d.sessionId=c,b.f[c]=d):null}function Ak(b,c,d){K.call(this);this.f=b;this.h=!1;this.a=this.b=null;this.c=c;this.g=d;this.sessionId="";this.expiration=NaN;this.closed=new y;this.keyStatuses=new Dk;}Aa(Ak,K);
function Ek(b,c,d){if(b.h)return Promise.reject(Error("The session is already initialized."));b.h=!0;try{if("persistent-license"==b.g)if(d)var e=new Uint8Array(Rb("LOAD_SESSION|"+d));else{var f=Rb("PERSISTENT|"),g=new Uint8Array(f.byteLength+c.byteLength);g.set(new Uint8Array(f),0);g.set(new Uint8Array(c),f.byteLength);e=g;}else e=new Uint8Array(c);}catch(k){return Promise.reject(k)}b.b=new y;var h=uk("generateKeyRequest");try{b.f[h](b.c,e);}catch(k){if("InvalidStateError"!=k.name)return b.b=null,Promise.reject(k);
setTimeout(function(){try{this.f[h](this.c,e);}catch(l){this.b.reject(l),this.b=null;}}.bind(b),10);}return b.b}n=Ak.prototype;
n.qc=function(b,c){if(this.a)this.a.then(this.qc.bind(this,b,c))["catch"](this.qc.bind(this,b,c));else{this.a=b;if("webkit-org.w3.clearkey"==this.c){var d=Nb(c);var e=JSON.parse(d);"oct"!=e.keys[0].kty&&(this.a.reject(Error("Response is not a valid JSON Web Key Set.")),this.a=null);d=Wb(e.keys[0].k);e=Wb(e.keys[0].kid);}else d=new Uint8Array(c),e=null;var f=uk("addKey");try{this.f[f](this.c,d,e,this.sessionId);}catch(g){this.a.reject(g),this.a=null;}}};
function Ck(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new E("keystatuseschange"));}n.generateRequest=function(b,c){return Ek(this,c,null)};n.load=function(b){return"persistent-license"==this.g?Ek(this,null,b):Promise.reject(Error("Not a persistent session."))};n.update=function(b){var c=new y;this.qc(c,b);return c};
n.close=function(){if("persistent-license"!=this.g){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;var b=uk("cancelKeyRequest");try{this.f[b](this.c,this.sessionId);}catch(c){}}this.closed.resolve();return this.closed};n.remove=function(){return"persistent-license"!=this.g?Promise.reject(Error("Not a persistent session.")):this.close()};function Dk(){this.size=0;this.a=void 0;}var Fk;n=Dk.prototype;n.forEach=function(b){this.a&&b(this.a,Fk);};n.get=function(b){if(this.has(b))return this.a};
n.has=function(b){var c=Fk;return this.a&&Zb(new Uint8Array(b),new Uint8Array(c))?!0:!1};n.entries=function(){};n.keys=function(){};n.values=function(){};
Tj(function(){if(!(!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration)){if(HTMLMediaElement.prototype.webkitGenerateKeyRequest)tk="webkit";else if(!HTMLMediaElement.prototype.generateKeyRequest)return;Fk=(new Uint8Array([0])).buffer;navigator.requestMediaKeySystemAccess=vk;delete HTMLMediaElement.prototype.mediaKeys;HTMLMediaElement.prototype.mediaKeys=null;HTMLMediaElement.prototype.setMediaKeys=xk;window.MediaKeys=zk;window.MediaKeySystemAccess=
wk;}});Tj(function(){if(window.HTMLMediaElement){var b=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){var c=b.apply(this);c&&c["catch"](function(){});return c};}});function Gk(){return{droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}}Tj(function(){if(window.HTMLVideoElement){var b=HTMLVideoElement.prototype;!b.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in b&&(b.getVideoPlaybackQuality=Gk);}});function Hk(b,c,d){return new window.TextTrackCue(b,c,d)}function Ik(b,c,d){return new window.TextTrackCue(b+"-"+c+"-"+d,b,c,d)}Tj(function(){if(!window.VTTCue&&window.TextTrackCue){var b=TextTrackCue.length;if(3==b)window.VTTCue=Hk;else if(6==b)window.VTTCue=Ik;else{try{var c=!!Hk(1,2,"");}catch(d){c=!1;}c&&(window.VTTCue=Hk);}}});function Jk(){}Jk.prototype.parseInit=function(){};
Jk.prototype.parseMedia=function(b,c){var d=Nb(b),e=[],f=new DOMParser,g=null;try{g=f.parseFromString(d,"text/xml");}catch(Y){throw new A(2,2,2005);}if(g){if(f=g.getElementsByTagName("tt")[0]){g=f.getAttribute("ttp:frameRate");var h=f.getAttribute("ttp:subFrameRate");var k=f.getAttribute("ttp:frameRateMultiplier");var l=f.getAttribute("ttp:tickRate");d=f.getAttribute("xml:space")||"default";}else throw new A(2,2,2005);if("default"!=d&&"preserve"!=d)throw new A(2,2,2005);d="default"==d;g=new Kk(g,h,
k,l);h=Lk(f.getElementsByTagName("styling")[0]);k=Lk(f.getElementsByTagName("layout")[0]);l=[];for(var m=0;m<k.length;m++){var r=k[m],t=h;var u=new Fc;var v=r.getAttribute("xml:id");if(v){u.id=v;var z;if(z=Mk(r,t,"tts:extent"))z=(v=Nk.exec(z))||Ok.exec(z),null!=z&&(u.width=Number(z[1]),u.height=Number(z[2]),u.widthUnits=v?Sc:0,u.heightUnits=v?Sc:0);if(r=Mk(r,t,"tts:origin"))z=(v=Nk.exec(r))||Ok.exec(r),null!=z&&(u.viewportAnchorX=Number(z[1]),u.viewportAnchorY=Number(z[2]),u.viewportAnchorUnits=v?
Sc:0);}else u=null;u&&l.push(u);}f=Lk(f.getElementsByTagName("body")[0]);for(m=0;m<f.length;m++)(u=Pk(f[m],c.periodStart,g,h,k,l,d))&&e.push(u);}return e};
var Nk=/^(\d{1,2}|100)% (\d{1,2}|100)%$/,Qk=/^(\d+px|\d+em)$/,Ok=/^(\d+)px (\d+)px$/,Rk=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Sk=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,Tk=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,Uk=/^(\d*(?:\.\d*)?)f$/,Vk=/^(\d*(?:\.\d*)?)t$/,Wk=/^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,Xk={left:"start",center:Kc,right:"end",start:"start",end:"end"},Yk={left:"line-left",center:"center",right:"line-right"};
function Lk(b){var c=[];if(!b)return c;for(var d=b.childNodes,e=0;e<d.length;e++){var f="span"==d[e].nodeName&&"p"==b.nodeName;d[e].nodeType!=Node.ELEMENT_NODE||"br"==d[e].nodeName||f||(f=Lk(d[e]),c=c.concat(f));}c.length||c.push(b);return c}function Zk(b,c){for(var d=b.childNodes,e=0;e<d.length;e++)if("br"==d[e].nodeName&&0<e)d[e-1].textContent+="\n";else if(0<d[e].childNodes.length)Zk(d[e],c);else if(c){var f=d[e].textContent.trim();f=f.replace(/\s+/g," ");d[e].textContent=f;}}
function Pk(b,c,d,e,f,g,h){if(!b.hasAttribute("begin")&&!b.hasAttribute("end")&&/^\s*$/.test(b.textContent))return null;Zk(b,h);h=$k(b.getAttribute("begin"),d);var k=$k(b.getAttribute("end"),d);d=$k(b.getAttribute("dur"),d);var l=b.textContent;null==k&&null!=d&&(k=h+d);if(null==h||null==k)throw new A(2,2,2001);c=new H(h+c,k+c,l);if((f=al(b,"region",f))&&f.getAttribute("xml:id")){var m=f.getAttribute("xml:id");g=g.filter(function(b){return b.id==m});c.region=g[0];}bl(c,b,f,e);return c}
function bl(b,c,d,e){"rtl"==cl(c,d,e,"tts:direction")&&(b.writingDirection=1);var f=cl(c,d,e,"tts:writingMode");"tb"==f||"tblr"==f?b.writingDirection=2:"tbrl"==f?b.writingDirection=3:"rltb"==f||"rl"==f?b.writingDirection=1:f&&(b.writingDirection=Ic);if(f=cl(c,d,e,"tts:textAlign"))b.positionAlign=Yk[f],b.lineAlign=Xk[f],b.textAlign=Oc[f.toUpperCase()];if(f=cl(c,d,e,"tts:displayAlign"))b.displayAlign=Pc[f.toUpperCase()];if(f=cl(c,d,e,"tts:color"))b.color=f;if(f=cl(c,d,e,"tts:backgroundColor"))b.backgroundColor=
f;if(f=cl(c,d,e,"tts:fontFamily"))b.fontFamily=f;(f=cl(c,d,e,"tts:fontWeight"))&&"bold"==f&&(b.fontWeight=700);(f=cl(c,d,e,"tts:wrapOption"))&&"noWrap"==f&&(b.wrapLine=!1);(f=cl(c,d,e,"tts:lineHeight"))&&f.match(Qk)&&(b.lineHeight=f);(f=cl(c,d,e,"tts:fontSize"))&&f.match(Qk)&&(b.fontSize=f);if(f=cl(c,d,e,"tts:fontStyle"))b.fontStyle=Rc[f.toUpperCase()];(d=Mk(d,e,"tts:textDecoration"))&&dl(b,d);(c=el(c,e,"tts:textDecoration"))&&dl(b,c);}
function dl(b,c){for(var d=c.split(" "),e=0;e<d.length;e++)switch(d[e]){case "underline":0>b.textDecoration.indexOf("underline")&&b.textDecoration.push("underline");break;case "noUnderline":0<=b.textDecoration.indexOf("underline")&&nb(b.textDecoration,"underline");break;case "lineThrough":0>b.textDecoration.indexOf("lineThrough")&&b.textDecoration.push("lineThrough");break;case "noLineThrough":0<=b.textDecoration.indexOf("lineThrough")&&nb(b.textDecoration,"lineThrough");break;case "overline":0>b.textDecoration.indexOf("overline")&&
b.textDecoration.push("overline");break;case "noOverline":0<=b.textDecoration.indexOf("overline")&&nb(b.textDecoration,"overline");}}function cl(b,c,d,e){return(b=el(b,d,e))?b:Mk(c,d,e)}function Mk(b,c,d){for(var e=Lk(b),f=0;f<e.length;f++){var g=e[f].getAttribute(d);if(g)return g}return(b=al(b,"style",c))?b.getAttribute(d):null}function el(b,c,d){return(b=al(b,"style",c))?b.getAttribute(d):null}
function al(b,c,d){if(!b||1>d.length)return null;var e=null,f=b;for(b=null;f&&!(b=f.getAttribute(c))&&(f=f.parentNode,f instanceof Element););if(c=b)for(b=0;b<d.length;b++)if(d[b].getAttribute("xml:id")==c){e=d[b];break}return e}
function $k(b,c){var d=null;if(Rk.test(b)){d=Rk.exec(b);var e=Number(d[1]),f=Number(d[2]),g=Number(d[3]),h=Number(d[4]);h+=(Number(d[5])||0)/c.b;g+=h/c.frameRate;d=g+60*f+3600*e;}else Sk.test(b)?d=fl(Sk,b):Tk.test(b)?d=fl(Tk,b):Uk.test(b)?(d=Uk.exec(b),d=Number(d[1])/c.frameRate):Vk.test(b)?(d=Vk.exec(b),d=Number(d[1])/c.a):Wk.test(b)&&(d=fl(Wk,b));return d}
function fl(b,c){var d=b.exec(c);return null==d||""==d[0]?null:(Number(d[4])||0)/1E3+(Number(d[3])||0)+60*(Number(d[2])||0)+3600*(Number(d[1])||0)}function Kk(b,c,d,e){this.frameRate=Number(b)||30;this.b=Number(c)||1;this.a=Number(e);0==this.a&&(this.a=b?this.frameRate*this.b:1);d&&(b=/^(\d+) (\d+)$/g.exec(d))&&(this.frameRate*=b[1]/b[2]);}I["application/ttml+xml"]=Jk;function gl(){this.a=new Jk;}gl.prototype.parseInit=function(b){var c=!1;(new P).D("moov",R).D("trak",R).D("mdia",R).D("minf",R).D("stbl",R).$("stsd",He).D("stpp",function(b){c=!0;b.parser.stop();}).parse(b);if(!c)throw new A(2,2,2007);};gl.prototype.parseMedia=function(b,c){var d=!1,e=[];(new P).D("mdat",Ie(function(b){d=!0;e=e.concat(this.a.parseMedia(b,c));}.bind(this))).parse(b);if(!d)throw new A(2,2,2007);return e};I['application/mp4; codecs="stpp"']=gl;
I['application/mp4; codecs="stpp.TTML.im1t"']=gl;function hl(){}hl.prototype.parseInit=function(){};
hl.prototype.parseMedia=function(b,c){var d=Nb(b);d=d.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n");d=d.split(/\n{2,}/m);if(!/^WEBVTT($|[ \t\n])/m.test(d[0]))throw new A(2,2,2E3);var e=c.segmentStart;if(null==e&&(e=0,0<=d[0].indexOf("X-TIMESTAMP-MAP"))){var f=d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),g=d[0].match(/MPEGTS:(\d+)/m);f&&g&&(e=il(new Mf(f[1])),e=c.periodStart+(Number(g[1])/9E4-e));}g=[];var h=d[0].split("\n");for(f=1;f<h.length;f++)if(/^Region:/.test(h[f])){var k=new Mf(h[f]),
l=new Fc;Pf(k);Nf(k);for(var m=Pf(k);m;){var r=l,t=m;(m=/^id=(.*)$/.exec(t))?r.id=m[1]:(m=/^width=(\d{1,2}|100)%$/.exec(t))?r.width=Number(m[1]):(m=/^lines=(\d+)$/.exec(t))?(r.height=Number(m[1]),r.heightUnits=2):(m=/^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(t))?(r.regionAnchorX=Number(m[1]),r.regionAnchorY=Number(m[2])):(m=/^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(t))?(r.viewportAnchorX=Number(m[1]),r.viewportAnchorY=Number(m[2])):/^scroll=up$/.exec(t)&&(r.scroll="up");Nf(k);
m=Pf(k);}g.push(l);}f=[];for(k=1;k<d.length;k++){h=d[k].split("\n");m=h;t=e;h=g;if(1==m.length&&!m[0]||/^NOTE($|[ \t])/.test(m[0])||"STYLE"==m[0])h=null;else{l=null;0>m[0].indexOf("--\x3e")&&(l=m[0],m.splice(0,1));r=new Mf(m[0]);var u=il(r),v=Of(r,/[ \t]+--\x3e[ \t]+/g),z=il(r);if(null==u||null==v||null==z)throw new A(2,2,2001);m=new H(u+t,z+t,m.slice(1).join("\n").trim());Nf(r);for(t=Pf(r);t;)jl(m,t,h),Nf(r),t=Pf(r);null!=l&&(m.id=l);h=m;}h&&f.push(h);}return f};
function jl(b,c,d){var e;if(e=/^align:(start|middle|center|end|left|right)$/.exec(c))c=e[1],"middle"==c?b.textAlign=Hc:b.textAlign=Oc[c.toUpperCase()];else if(e=/^vertical:(lr|rl)$/.exec(c))b.writingDirection="lr"==e[1]?2:3;else if(e=/^size:([\d.]+)%$/.exec(c))b.size=Number(e[1]);else if(e=/^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(c))b.position=Number(e[1]),e[2]&&(c=e[2],b.positionAlign="line-left"==c||"start"==c?"line-left":"line-right"==c||"end"==c?"line-right":"center");
else if(e=/^region:(.*)$/.exec(c)){if(c=kl(d,e[1]))b.region=c;}else if(d=/^line:([\d.]+)%(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=1,b.line=Number(d[1]),d[2]&&(b.lineAlign=Qc[d[2].toUpperCase()]);else if(d=/^line:(-?\d+)(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=Jc,b.line=Number(d[1]),d[2]&&(b.lineAlign=Qc[d[2].toUpperCase()]);}function kl(b,c){var d=b.filter(function(b){return b.id==c});return d.length?d[0]:null}
function il(b){b=Of(b,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);if(null==b)return null;var c=Number(b[2]),d=Number(b[3]);return 59<c||59<d?null:Number(b[4])/1E3+d+60*c+3600*(Number(b[1])||0)}I["text/vtt"]=hl;I['text/vtt; codecs="vtt"']=hl;function ll(){this.a=null;}ll.prototype.parseInit=function(b){var c=!1;(new P).D("moov",R).D("trak",R).D("mdia",R).$("mdhd",function(b){0==b.version?(b.reader.G(4),b.reader.G(4),this.a=b.reader.B(),b.reader.G(4)):(b.reader.G(8),b.reader.G(8),this.a=b.reader.B(),b.reader.G(8));b.reader.G(4);}.bind(this)).D("minf",R).D("stbl",R).$("stsd",He).D("wvtt",function(){c=!0;}).parse(b);if(!this.a)throw new A(2,2,2008);if(!c)throw new A(2,2,2008);};
ll.prototype.parseMedia=function(b,c){var d=this;if(!this.a)throw new A(2,2,2008);var e=0,f=[],g,h=[],k=!1,l=!1,m=!1,r=null;(new P).D("moof",R).D("traf",R).$("tfdt",function(b){k=!0;e=0==b.version?b.reader.B():b.reader.$a();}).$("tfhd",function(b){var c=b.flags;b=b.reader;b.G(4);c&1&&b.G(8);c&2&&b.G(4);r=c&8?b.B():null;}).$("trun",function(b){l=!0;var c=b.version,d=b.flags;b=b.reader;var e=b.B();d&1&&b.G(4);d&4&&b.G(4);for(var g=[],h=0;h<e;h++){var k={duration:null,sampleSize:null,rc:null};d&256&&(k.duration=
b.B());d&512&&(k.sampleSize=b.B());d&1024&&b.G(4);d&2048&&(k.rc=0==c?b.B():b.Vc());g.push(k);}f=g;}).D("mdat",Ie(function(b){m=!0;g=b;})).parse(b);if(!m&&!k&&!l)throw new A(2,2,2008);var t=e,u=new DataView(g.buffer,g.byteOffset,g.byteLength),v=new O(u,0);f.forEach(function(b){var f=b.duration||r,g=b.rc?e+b.rc:t;t=g+(f||0);var k=0;do{var l=v.B();k+=l;var m=v.B(),u=null;"vttc"==Je(m)?8<l&&(u=v.Ka(l-8)):v.G(l-8);f&&u&&h.push(ml(u,c.periodStart+g/d.a,c.periodStart+t/d.a));}while(b.sampleSize&&k<b.sampleSize)});
return h.filter(F.ma)};function ml(b,c,d){var e,f,g;(new P).D("payl",Ie(function(b){e=Nb(b);})).D("iden",Ie(function(b){f=Nb(b);})).D("sttg",Ie(function(b){g=Nb(b);})).parse(b);return e?nl(e,f,g,c,d):null}function nl(b,c,d,e,f){b=new H(e,f,b);c&&(b.id=c);if(d)for(c=new Mf(d),d=Pf(c);d;)jl(b,d,[]),Nf(c),d=Pf(c);return b}I['application/mp4; codecs="wvtt"']=ll;}).call(exportTo,innerGlobal,innerGlobal);for(var k in exportTo.shaka)exports[k]=exportTo.shaka[k];})();


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

//Override npm shaka if external defined for debug
var shaka$1 = window_1.shaka ? window_1.shaka : shakaPlayer_compiled;
var Plugin = videojs.getPlugin('plugin');
var Tech$1 = videojs.getComponent('Tech');

/**
 *  DownloadService
 *  This manages persistent offline data including storage, listing, and deleting stored manifests. 
 *  Playback of offline manifests are done through the Player using a special URI (see shaka.offline.OfflineUri). 
 *  First, check isSupported to see if offline is supported by the platform. 
 *  Second, listen to EmpPlayerEvents.DOWNLOAD_PROGRESS on the download plugin
 *  Third, call startDownload(), remove(), or list() as needed.
 *  Start playback with load().
 *    
 * @param player
 * @param options
 */

var DownloadService = function (_Plugin) {
  inherits(DownloadService, _Plugin);

  function DownloadService(player, options) {
    classCallCheck(this, DownloadService);

    var _this = possibleConstructorReturn(this, _Plugin.call(this, player, options));

    log$1('DownloadService', 'create');
    _this.options_ = options ? options : {};
    _this.offlineOperationInProgress_ = false;
    return _this;
  }

  /**
   * if offline is supported by the platform
   * @returns {boolean}
   */


  /**
   * Delete all
   *  
   * @returns {Promise}
   */
  DownloadService.prototype.deleteAll = function deleteAll() {
    shaka$1.offline.Storage.doNotReleaseLicense(false);
    return shaka$1.offline.Storage.deleteAll(this.player.tech_.shakaPlayer_);
  };

  /**
   * start download of asset or program
   *  
   * @param {any} assetId   Identifier of the asset to load
   * @param {any} channelId Identifier of the channel to load
   * @param {any} programId Identifier of the program to load
   * @param {?object} metadata (optional) An arbitrary object from the application that will be stored along-side the offline content. Use this for any application-specific metadata you need associated with the stored content. For details on the data types that can be stored here, please refer to https://goo.gl/h62coS
   * @param {?boolean} usePersistentLicense (optional) use PersistentLicense default=true
   * @returns {Promise}
   */


  DownloadService.prototype.startDownload = function startDownload(assetId, channelId, programId, metadata, usePersistentLicense) {
    var _this2 = this;

    var errorMsg = void 0;
    if (this.offlineOperationInProgress_) {
      errorMsg = 'Offline Operation In Progress';
      log$1.error(errorMsg);
      return Promise.reject(errorMsg);
    }

    if (!assetId && !channelId && !programId) {
      errorMsg = 'assetId or channelId or programId is undefined';
      log$1.error(errorMsg);
      return Promise.reject(errorMsg);
    }
    this.offlineOperationInProgress_ = true;

    var entitlementRequest = {
      'assetId': assetId ? assetId : null,
      'programId': programId ? programId : null,
      'channelId': channelId ? channelId : null
    };
    if (this.player.programService) {
      exposure = this.player.programService().exposure;
    } else {
      errorMsg = 'No programService';
      log$1.error(errorMsg);
      return Promise.reject(errorMsg);
    }
    var entitlementPlayRequest = Tech$1.getTech('EmpShaka').entitlementPlayRequest;

    return new Promise(function (resolve, reject) {
      exposure.getEntitlement(entitlementRequest, entitlementPlayRequest, function (entitlement, error) {
        // If we have an fatal error during playcall break out of the loop else try next tech
        if (error) {
          if (error.fatal) {
            _this2.offlineOperationInProgress_ = false;
            var error = new EmpPlayerError(error, EmpPlayerErrorCodes.ENTITLEMENT);
            _this2.player.analytics && _this2.player.analytics().onError({ code: error.code, message: error.message, stack: error.stack });
            reject(error);
          }
        } else {
          if (!metadata) {
            metadata = {};
          }
          if (!metadata.name) {
            metadata.name = entitlement.programId ? entitlement.programId : entitlement.assetId;
          }
          metadata.assetId = assetId;
          metadata.programId = programId;
          metadata.channelId = channelId;
          var mediaId = metadata.programId ? metadata.programId : metadata.assetId;
          _this2.player.programService().getAssetMetadata(mediaId, function (assetMetadata, error) {
            //Don't care is error
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
  };

  /**
   * startDownloadEntitlement_
   *  
   * @param entitlement
   * @param metadata
   * @param usePersistentLicense
   * @param resolve
   * @param reject
   * @private
   */


  DownloadService.prototype.startDownloadEntitlement_ = function startDownloadEntitlement_(entitlement, metadata, usePersistentLicense, resolve, reject) {
    var self = this;
    this.startDownloadSource(entitlement, metadata, usePersistentLicense).then(function (content) {
      self.offlineOperationInProgress_ = false;
      resolve(content);
    })['catch'](function (error) {
      if (self.cancelInProgress_) {
        resolve(null);
      } else {
        self.offlineOperationInProgress_ = false;
        self.player.analytics && self.player.analytics().onError({ code: error.code, message: error.message, stack: error.stack });
        log$1.error(error.message);
        reject(error);
      }
    });
  };

  /**
   * start download of a source
   * 
   * @param {string|object} source The Source element of a video element
   * @param {?object} metadata (optional) An arbitrary object from the application that will be stored along-side the offline content. Use this for any application-specific metadata you need associated with the stored content. For details on the data types that can be stored here, please refer to https://goo.gl/h62coS
   * @param {?boolean} usePersistentLicense (optional) use PersistentLicense default=true
   * @returns {Promise}
   */


  DownloadService.prototype.startDownloadSource = function startDownloadSource(source, metadata, usePersistentLicense) {
    this.cancelInProgress_ = false;
    if (typeof source === 'undefined') {
      errorMsg = 'source is undefined';
      log$1.error(errorMsg);
      return Promise.reject(errorMsg);
    }

    // filter out invalid sources and turn our source into
    // an array of source objects
    var sources = filterSource(source);
    if (!sources.length) {
      errorMsg = 'source is undefined';
      log$1.error(errorMsg);
      return Promise.reject(errorMsg);
    }

    this.destroy();
    if (!this.storage_) {
      this.initStorage_(usePersistentLicense === false);
    }
    this.offlineOperationInProgress_ = true;

    var config = {};
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

    this.player.tech_.shakaPlayer_.configure(config);

    if (metadata) {
      metadata.downloaded = new Date();
    }

    return this.storage_.store(sources[0].src, metadata);
  };

  /**
   * selectTracks
   *  
   * @param {object[]} tracks
   * @returns {object[]}
   * @private
   */


  DownloadService.prototype.selectTracks_ = function selectTracks_(tracks) {
    // TODO select diffrent bandwidth. Don't working with drm, Why?
    // Store the highest bandwidth variant.
    var found = tracks.filter(function (track) {
      return track.type == 'variant';
    }).sort(function (a, b) {
      return a.bandwidth > b.bandwidth;
    }).pop();
    console.log('Offline Track: ' + found);
    return [found];
  };

  /**
   * initStorage
   * 
   * @param {?boolean} useNoPersistentLicense
   * @private
   */


  DownloadService.prototype.initStorage_ = function initStorage_(useNoPersistentLicense) {
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
    this.storage_ = new shaka$1.offline.Storage(this.player.tech_.shakaPlayer_);
    this.storage_.configure({
      'offline': {
        'progressCallback': this.setDownloadProgress_.bind(this),
        //'trackSelectionCallback': this.selectTracks_.bind(this),
        'usePersistentLicense': !useNoPersistentLicense
      }
    });
  };

  /**
   * setDownloadProgress
   * 
   * @param {?object} content
   * @param {number} progress
   *  
   * @private
   */


  DownloadService.prototype.setDownloadProgress_ = function setDownloadProgress_(content, progress) {
    this.trigger(empPlayerEvents.DOWNLOAD_PROGRESS, { 'content': content, 'progress': progress });
  };

  /**
   * List all downloaded assests
   * @returns {Promise}
   */


  DownloadService.prototype.list = function list() {
    if (!this.storage_) {
      this.initStorage_();
    }
    return this.storage_.list();
  };

  /**
   * Remove downloaded assest
   * @param {string} offlineUri
   * @returns {Promise}
   */


  DownloadService.prototype.remove = function remove(offlineUri) {
    if (!this.storage_) {
      this.initStorage_();
    }
    shaka$1.offline.Storage.doNotReleaseLicense(false);
    return this.storage_.remove(offlineUri);
  };

  /**
   * Play downloaded assest
   * @param {string} 
   * @param {Object=} options Player Options
   */


  DownloadService.prototype.load = function load(offlineUri) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { 'autoplay': true };

    if (!offlineUri) {
      log$1.error('offlineUri is undefined');
      return;
    }

    if (options) {
      this.player.options(options);
      if (options.autoplay) {
        this.player.autoplay(true);
      }
    }

    this.player.src({ 'type': 'application/dash+xml', 'src': offlineUri });
  };

  DownloadService.prototype.cancel = function cancel() {
    if (this.offlineOperationInProgress_) {
      this.cancelInProgress_ = true;
      this.destroy();
    }
  };

  /**
   * destroy current download
   */


  DownloadService.prototype.destroy = function destroy() {
    if (this.storage_) {
      this.storage_.destroy();
      this.storage_ = null;
    }
    this.offlineOperationInProgress_ = false;
  };

  /**
   * dispose DownloadService
   */


  DownloadService.prototype.dispose = function dispose() {
    log$1('DownloadService is being disposed');
    if (this.storage_) {
      this.storage_.destroy();
      this.storage_ = null;
    }
    this.offlineOperationInProgress_ = false;
    _Plugin.prototype.dispose.call(this);
  };

  createClass(DownloadService, [{
    key: 'isSupported',
    get: function get$$1() {
      if (shaka$1.offline.Storage) {
        return shaka$1.offline.Storage.support();
      } else {
        false;
      }
    }
  }, {
    key: 'offlineOperationInProgress',
    get: function get$$1() {
      return this.offlineOperationInProgress_;
    }
  }]);
  return DownloadService;
}(Plugin);

DownloadService.VERSION = '2.0.92-173';

if (videojs.getPlugin('DownloadService')) {
  videojs.log.warn('A plugin named "DownloadService" already exists.');
} else {
  videojs.registerPlugin('download', DownloadService);
}

/**
 * Unique ID for an element or function
 * @type {Number}
 * @private
 */
/**
 * Get the next unique ID
 *
 * @return {String}
 * @function newGUID
 */

var _templateObject = taggedTemplateLiteralLoose(['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ', ' to ', '.'], ['Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ', ' to ', '.']);

/**
 * Whether the current DOM interface appears to be real.
 *
 * @return {Boolean}
 */
function isReal() {
  return (

    // Both document and window will never be undefined thanks to `global`.
    document_1 === window_1.document &&

    // In IE < 9, DOM methods return "object" as their type, so all we can
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


/**
 * Determines if the current DOM is embedded in an iframe.
 *
 * @return {boolean}
 *
 */


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


/**
 * Insert an element as the first child node of another
 *
 * @param {Element} child
 *        Element to insert
 *
 * @param {Element} parent
 *        Element to insert child into
 */


/**
 * Check if an element has a CSS class
 *
 * @param {Element} element
 *        Element to check
 *
 * @param {string} classToCheck
 *        Class name to check for
 *
 * @return {boolean}
 *         - True if the element had the class
 *         - False otherwise.
 *
 * @throws {Error}
 *         Throws an error if `classToCheck` has white space.
 */


/**
 * Add a CSS class name to an element
 *
 * @param {Element} element
 *        Element to add class name to.
 *
 * @param {string} classToAdd
 *        Class name to add.
 *
 * @return {Element}
 *         The dom element with the added class name.
 */


/**
 * Remove a CSS class name from an element
 *
 * @param {Element} element
 *        Element to remove a class name from.
 *
 * @param {string} classToRemove
 *        Class name to remove
 *
 * @return {Element}
 *         The dom element with class name removed.
 */


/**
 * The callback definition for toggleElClass.
 *
 * @callback Dom~PredicateCallback
 * @param {Element} element
 *        The DOM element of the Component.
 *
 * @param {string} classToToggle
 *        The `className` that wants to be toggled
 *
 * @return {boolean|undefined}
 *         - If true the `classToToggle` will get added to `element`.
 *         - If false the `classToToggle` will get removed from `element`.
 *         - If undefined this callback will be ignored
 */

/**
 * Adds or removes a CSS class name on an element depending on an optional
 * condition or the presence/absence of the class name.
 *
 * @param {Element} element
 *        The element to toggle a class name on.
 *
 * @param {string} classToToggle
 *        The class that should be toggled
 *
 * @param {boolean|PredicateCallback} [predicate]
 *        See the return value for {@link Dom~PredicateCallback}
 *
 * @return {Element}
 *         The element with a class that has been toggled.
 */


/**
 * Apply attributes to an HTML element.
 *
 * @param {Element} el
 *        Element to add attributes to.
 *
 * @param {Object} [attributes]
 *        Attributes to be applied.
 */


/**
 * Get an element's attribute values, as defined on the HTML tag
 * Attributes are not the same as properties. They're defined on the tag
 * or with setAttribute (which shouldn't be used with HTML)
 * This will return true or false for boolean attributes.
 *
 * @param {Element} tag
 *        Element from which to get tag attributes.
 *
 * @return {Object}
 *         All attributes of the element.
 */


/**
 * Get the value of an element's attribute
 *
 * @param {Element} el
 *        A DOM element
 *
 * @param {string} attribute
 *        Attribute to get the value of
 *
 * @return {string}
 *         value of the attribute
 */


/**
 * Set the value of an element's attribute
 *
 * @param {Element} el
 *        A DOM element
 *
 * @param {string} attribute
 *        Attribute to set
 *
 * @param {string} value
 *        Value to set the attribute to
 */


/**
 * Remove an element's attribute
 *
 * @param {Element} el
 *        A DOM element
 *
 * @param {string} attribute
 *        Attribute to remove
 */


/**
 * Attempt to block the ability to select text while dragging controls
 */


/**
 * Turn off text selection blocking
 */


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


/**
 * The postion of a DOM element on the page.
 *
 * @typedef {Object} module:dom~Position
 *
 * @property {number} left
 *           Pixels to the left
 *
 * @property {number} top
 *           Pixels on top
 */

/**
 * Offset Left.
 * getBoundingClientRect technique from
 * John Resig
 *
 * @see http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @param {Element} el
 *        Element from which to get offset
 *
 * @return {module:dom~Position}
 *         The position of the element that was passed in.
 */


/**
 * x and y coordinates for a dom element or mouse pointer
 *
 * @typedef {Object} Dom~Coordinates
 *
 * @property {number} x
 *           x coordinate in pixels
 *
 * @property {number} y
 *           y coordinate in pixels
 */

/**
 * Get pointer position in element
 * Returns an object with x and y coordinates.
 * The base on the coordinates are the bottom left of the element.
 *
 * @param {Element} el
 *        Element on which to get the pointer position on
 *
 * @param {EventTarget~Event} event
 *        Event object
 *
 * @return {Dom~Coordinates}
 *         A Coordinates object corresponding to the mouse position.
 *
 */


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


/**
 * Empties the contents of an element.
 *
 * @param {Element} el
 *        The element to empty children from
 *
 * @return {Element}
 *         The element with no children
 */


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
 * @param {String|Element|TextNode|Array|Function} content
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


/**
 * Normalizes and appends content to an element.
 *
 * @param {Element} el
 *        Element to append normalized content to.
 *
 *
 * @param {String|Element|TextNode|Array|Function} content
 *        See the `content` argument of {@link dom:normalizeContent}
 *
 * @return {Element}
 *         The element with appended normalized content.
 */


/**
 * Normalizes and inserts content into an element; this is identical to
 * `appendContent()`, except it empties the element first.
 *
 * @param {Element} el
 *        Element to insert normalized content into.
 *
 * @param {String|Element|TextNode|Array|Function} content
 *        See the `content` argument of {@link dom:normalizeContent}
 *
 * @return {Element}
 *         The element with inserted normalized content.
 *
 */


/**
 * Finds a single DOM element matching `selector` within the optional
 * `context` of another DOM element (defaulting to `document`).
 *
 * @param {string} selector
 *        A valid CSS selector, which will be passed to `querySelector`.
 *
 * @param {Element|String} [context=document]
 *        A DOM element within which to query. Can also be a selector
 *        string in which case the first matching element will be used
 *        as context. If missing (or no element matches selector), falls
 *        back to `document`.
 *
 * @return {Element|null}
 *         The element that was found or null.
 */


/**
 * Finds a all DOM elements matching `selector` within the optional
 * `context` of another DOM element (defaulting to `document`).
 *
 * @param {string} selector
 *           A valid CSS selector, which will be passed to `querySelectorAll`.
 *
 * @param {Element|String} [context=document]
 *           A DOM element within which to query. Can also be a selector
 *           string in which case the first matching element will be used
 *           as context. If missing (or no element matches selector), falls
 *           back to `document`.
 *
 * @return {NodeList}
 *         A element list of elements that were found. Will be empty if none were found.
 *
 */

var USER_AGENT = window_1.navigator && window_1.navigator.userAgent || '';
var webkitVersionMap = /AppleWebKit\/([\d.]+)/i.exec(USER_AGENT);
/*
 * Device is an iPhone
 *
 * @type {Boolean}
 * @constant
 * @private
 */
var IS_IPAD = /iPad/i.test(USER_AGENT);

var IS_CHROMECAST = window_1.navigator.userAgent.indexOf('CrKey') >= 0;

// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
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
}();

// Old Android is defined as Version older than 2.3, and requiring a webkit version of the android browser
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





var BACKGROUND_SIZE_SUPPORTED = isReal() && 'backgroundSize' in window_1.document.createElement('video').style;

/**
 * @file emp-shaka.js
 * @module empShaka
 */
//Override npm shaka if external defined for debug
var shaka = window_1.shaka ? window_1.shaka : shakaPlayer_compiled;
var Html5 = videojs$1.getTech('Html5');
var Tech = videojs$1.getComponent('Tech');
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
    _this.certificate_ = null;

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
    //Workaround for Firefox bug 
    //https://bugzilla.mozilla.org/show_bug.cgi?id=1491365
    if (IS_FIREFOX) {
      window_1.VTTRegion = null;
    }
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
        this.streamrootWrapper_ = null;
      }
    }
    // Don't fetch certificate if IE or Edge or CC
    if (window_1.document.documentMode || /Edge/.test(window_1.navigator.userAgent) || IS_CHROMECAST) {
      this.certificate_ = null;
    } else {
      if (source.certificateServer && !this.certificate_) {
        this.fetchCertificate(source.certificateServer, function (cert, error) {
          if (cert) {
            _this2.certificate_ = cert;
            _this2.handleSource(source);
          } else {
            _this2.checkForRecoverableErrors(error ? error : { message: 'no certificate', category: 6 });
          }
        });
        return;
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
    this.options_ = assign(this.options_, source.options);
    this.currentProgram_ = null;

    var manifestSource = void 0;

    this.playToken = source.playToken;

    manifestSource = source.src;

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

    if (this.certificate_) {
      config.drm.advanced['com.widevine.alpha']['serverCertificate'] = this.certificate_;
    }

    this.shakaPlayer_.configure(config);
    this.shakaPlayer_.setTextTrackVisibility(textLanguage !== '');

    // Configure network filters
    var networkingEngine = this.shakaPlayer_.getNetworkingEngine();

    // Filter requests and set auth header
    if (this.playToken) {
      var header = { 'Authorization': 'Bearer ' + this.playToken };
      if (this.requestFilter) {
        networkingEngine.unregisterRequestFilter(this.requestFilter);
      }
      this.requestFilter = this.addLicenseRequestHeaders.bind(null, header);
      networkingEngine.registerRequestFilter(this.requestFilter);
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

    if (window_1.ShakaPlayerDnaWrapper && options.streamrootkey && !this.streamrootWrapper_) {
      this.createStreamrootWrapper_(options.streamrootkey);
    }

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

  EmpShaka.prototype.createStreamrootWrapper_ = function createStreamrootWrapper_(streamrootkey) {
    var dnaConfig = {};
    var wrapperConfig = {
      shakaNamespace: shaka
    };
    this.streamrootWrapper_ = new ShakaPlayerDnaWrapper(this.shakaPlayer_, streamrootkey, dnaConfig, wrapperConfig);
    return this.streamrootWrapper_;
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
      if (_this3.hasMetadata_ && !_this3.blockLocalTrackChange) {
        _this3.syncVideojsTexttrackVisibility();
      }
    });

    this.shakaPlayer_.addEventListener('drmsessionbeforeupdate', function (event) {
      log$1('drmsessionbeforeupdate', event);
      if (_this3.shakaPlayer_.drmInfo()) {
        var message = void 0;
        if (_this3.shakaPlayer_.drmInfo().keySystem === 'com.microsoft.playready') {
          message = { 'messageType': 'PLAYREADY_LICENSE_REQUEST', 'code': undefined, 'info': _this3.shakaPlayer_.drmInfo().licenseServerUri };
        } else if (_this3.shakaPlayer_.drmInfo().keySystem === 'com.widevine.alpha') {
          if (event.isCertificateRequest) {
            message = { 'messageType': 'WIDEVINE_CERTIFICATE_REQUEST', 'code': undefined, 'info': _this3.shakaPlayer_.drmInfo().licenseServerUri };
          } else {
            message = { 'messageType': 'WIDEVINE_LICENSE_REQUEST', 'code': undefined, 'info': _this3.shakaPlayer_.drmInfo().licenseServerUri };
          }
        } else {
          message = { 'messageType': 'FAIRPLAY_LICENSE_REQUES', 'code': undefined, 'info': _this3.shakaPlayer_.drmInfo().licenseServerUri };
        }
        _this3.trigger({ type: empPlayerEvents.DRM_SESSION_UPDATE, bubbles: true }, message);
      }
    });

    this.shakaPlayer_.addEventListener('drmsessionupdate', function (event) {
      log$1('drmsessionupdate', event);
      if (_this3.shakaPlayer_.drmInfo()) {
        var message = void 0;
        if (_this3.shakaPlayer_.drmInfo().keySystem === 'com.microsoft.playready') {
          message = { 'messageType': 'PLAYREADY_LICENSE_RESPONSE', 'code': undefined, 'info': 'drmsessionupdate' };
        } else if (_this3.shakaPlayer_.drmInfo().keySystem === 'com.widevine.alpha') {
          if (event.isCertificateRequest) {
            message = { 'messageType': 'WIDEVINE_CERTIFICATE_RESPONSE', 'code': undefined, 'info': 'drmsessionupdate' };
          } else {
            message = { 'messageType': 'WIDEVINE_LICENSE_RESPONSE', 'code': undefined, 'info': 'drmsessionupdate' };
          }
        } else {
          message = { 'messageType': 'FAIRPLAY_LICENSE_RESPONSE', 'code': undefined, 'info': 'drmsessionupdate' };
        }
        _this3.trigger({ type: empPlayerEvents.DRM_SESSION_UPDATE, bubbles: true }, message);
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
    return this.shakaPlayer_;
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
        this.trigger({ type: empPlayerEvents.DRM_SESSION_UPDATE, bubbles: true }, { 'messageType': messageType, 'code': error.code, 'info': error.message });
        this.triggerRecoverableError(error);
        break;
      default:
        this.triggerRecoverableError(error);
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
      _Html.prototype.setCurrentTime.call(this, time);
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
    if (!videojs$1.getTech('Html5').isSupported()) {
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
    var _this5 = this;

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
      _this5.addAudioTrack(audioTrack.kind, getLanguageName(audioTrack.language).split(';')[0], audioTrack.language, audioTrack.language === activeVariantTrack.language);
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
    var _this6 = this;

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
      var newTrack = _this6.addTextTrack(track.kind ? track.kind : 'subtitles', getLanguageName(track.language).split(';')[0], track.language);
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
    }.bind(this), 2000); // 1 sec
  };

  /**
  * selectShakaTextLanguage
  *
  * @private
  */


  EmpShaka.prototype.selectShakaTextLanguage = function selectShakaTextLanguage(languageCode) {
    if (languageCode) {
      // Show text track
      if (!this.shakaPlayer_.isTextTrackVisible()) {
        log$1('Shaka texttrack', 'show', this.getSelectedShakaTextLanguage());
        this.shakaPlayer_.setTextTrackVisibility(true);
      }
      if (this.getSelectedShakaTextLanguage() !== languageCode) {
        log$1('select Shaka texttrack', languageCode);
        this.shakaPlayer_.selectTextLanguage(languageCode);
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
          log$1(caller, 'stopBlockLocalTrackChange', ' TRACK_CHANGE');
          this.trigger(empPlayerEvents.TRACK_CHANGE);
          this.blockLocalTrackChange = false;
        } catch (e) {} //Crash when navigate away
      }.bind(this), 2000); //Stop block LocalTrackChange after 1 sec
    }
  };

  /**
  *
  * Overide play() and block videojs from send play when autoplay, should be handle by Shaka player
  */


  EmpShaka.prototype.play = function play() {
    if (this.stopped_ || this.ended_) {
      this.trigger({ type: empPlayerEvents.REPLAY, bubbles: true });
    } else {
      //Don't working! do we still need it? Can't press play button  with sll and autoplay
      //if ((!this.options_.autoplay && this.el_.networkState > this.el_.HAVE_METADATA) ||
      //(this.hasStarted_ && this.el_.networkState > this.el_.HAVE_METADATA)) {
      //this.trigger('play'); not needed
      //return this.el_.play();
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
      try {
        this.shakaPlayer_.destroy();
      } catch (e) {}
    }
    this.shakaPlayer_ = null;
    this.streamrootWrapper_ = null;
    this.certificate_ = null;

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

  EmpShaka.prototype.fetchCertificate = function fetchCertificate(certificateUrl, callback) {
    var _this7 = this;

    log$1('fetchCertificate()');
    this.trigger({ type: empPlayerEvents.DRM_SESSION_UPDATE, bubbles: true }, { 'messageType': 'WIDEVINE_CERTIFICATE_REQUEST', 'code': undefined, 'info': certificateUrl });
    var request = new XMLHttpRequest();
    request.addEventListener('error', this.checkForRecoverableErrors, false);
    //'irdeto'
    request.responseType = 'arraybuffer';
    request.addEventListener('load', function (event) {
      _this7.onCertificateLoad(event, {
        callback: callback
      });
    }, false);

    request.open('GET', certificateUrl, true);
    request.send();
  };

  EmpShaka.prototype.onCertificateLoad = function onCertificateLoad(event, _ref) {
    var callback = _ref.callback;

    log$1('onCertificateLoad()');
    var request = event.target;
    if (request.status < 300 && request.readyState === 4) {
      var certificate = new Uint8Array(event.target.response);
      this.trigger({ type: empPlayerEvents.DRM_SESSION_UPDATE, bubbles: true }, { 'messageType': 'WIDEVINE_CERTIFICATE_RESPONSE', 'code': undefined, 'info': 'onCertificateLoad' });
      callback(certificate);
    } else {
      var error = {
        message: 'onLicensonCertificateLoadeLoadBin',
        code: request.status
      };
      if (request.responseType === "arraybuffer") {
        var enc = new TextDecoder('utf-8');
        error.message = enc.decode(request.response);
      }
      error.category = 6;
      callback(null, error);
    }
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

          if (window_1.muxjs) {
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
    key: 'entitlementPlayRequest',
    get: function get$$1() {
      return {
        drm: 'CENC',
        format: 'DASH',
        type: 'application/dash+xml'
      };
    }
  }, {
    key: 'entitlementPlayRequests',
    get: function get$$1() {
      return {
        'DASH': {
          drm: 'CENC',
          format: 'DASH',
          type: 'application/dash+xml'
        },
        'HLS': {
          drm: 'UNENCRYPTED',
          format: 'HLS',
          type: 'application/x-mpegurl'
        }
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

EmpShaka.VERSION = '2.0.92-173';

// Unset source handlers set by Html5 super class.
// We do not intent to support any sources other then sources allowed by nativeSourceHandler
EmpShaka.sourceHandlers = [];
EmpShaka.registerSourceHandler(EmpShaka.nativeSourceHandler);
if (Tech.getTech(TechName)) {
  videojs$1.log.warn('Not using ' + TechName + ' as it appears to already be registered');
  videojs$1.log.warn(TechName + ' should only be used with emp-player@2 and above');
} else {
  Tech.registerTech(TechName, EmpShaka);
}

return EmpShaka;

})));
