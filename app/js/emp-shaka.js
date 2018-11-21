/**
 * @license
 * EMP-Player 2.1.95-234 
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


/**
 * Check is Object is isEmpty
 * @param {Object} value
 * @returns {Boolean}
 */
function isEmpty(value) {
  return keys(value).length === 0;
}

/*global
  document, atob
*/




function base64EncodeUint8Array(input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var chr1 = void 0;
  var chr2 = void 0;
  var chr3 = void 0;
  var enc1 = void 0;
  var enc2 = void 0;
  var enc3 = void 0;
  var enc4 = void 0;
  var i = 0;
  var output = '';

  while (i < input.length) {
    chr1 = input[i++];
    chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
    chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

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

  CHROMECAST_TECH: 500,

  HLS_MSE_TECH: 10000,

  DASHIF_TECH: 20000
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
 * EmpTech - General tech implementation, not specific to a certain tech
 *
 * @class EmpTech
 */

var EmpTech = function () {
  function EmpTech() {
    classCallCheck(this, EmpTech);
  }

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

  EmpTech.prototype.fetchWidevineCertificate = function fetchWidevineCertificate(certificateUrl, callback) {
    var _this = this;

    log$1('fetchWidevineCertificate');
    //Can't trigger here no handlers yet
    //this.trigger({ type: EmpPlayerEvents.DRM_SESSION_UPDATE, bubbles: true }, { 'messageType': 'WIDEVINE_CERTIFICATE_REQUEST', 'code': undefined, 'info': certificateUrl });
    var request = new XMLHttpRequest();
    request.addEventListener('error', this.checkForRecoverableErrors, false);
    //'irdeto'
    request.responseType = 'arraybuffer';
    request.addEventListener('load', function (event) {
      _this.onWidevineCertificateLoad_(event, {
        callback: callback, certificateUrl: certificateUrl
      });
    }, false);

    request.open('GET', certificateUrl, true);
    request.send();
  };

  EmpTech.prototype.onWidevineCertificateLoad_ = function onWidevineCertificateLoad_(event, _ref) {
    var callback = _ref.callback,
        certificateUrl = _ref.certificateUrl;

    log$1('onWidevineCertificateLoad');
    this.trigger({ type: empPlayerEvents.DRM_SESSION_UPDATE, bubbles: true }, { 'messageType': 'WIDEVINE_CERTIFICATE_REQUEST', 'code': undefined, 'info': certificateUrl });
    var request = event.target;
    if (request.status < 300 && request.readyState === 4) {
      var certificate = new Uint8Array(event.target.response);

      this.trigger({ type: empPlayerEvents.DRM_SESSION_UPDATE, bubbles: true }, { 'messageType': 'WIDEVINE_CERTIFICATE_RESPONSE', 'code': undefined, 'info': 'onWidevineCertificateLoad' });
      callback(certificate);
    } else {
      var error = {
        message: 'onWidevineCertificateLoad',
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

  EmpTech.prototype.baseHandleSource = function baseHandleSource(source, tech) {
    var _this2 = this;

    if (!source.src) {
      return false;
    }

    // Don't fetch certificate if IE or Edge or CC
    if (window.document.documentMode || /Edge/.test(window.navigator.userAgent) || IS_CHROMECAST || IS_ANDROID) {
      this.certificate_ = null;
    } else {
      if (source.certificateServer && !this.certificate_ && (source.licenseServer || source.licenseServers && !isEmpty(source.licenseServers))) {
        this.fetchWidevineCertificate(source.certificateServer, function (cert, error) {
          if (cert) {

            if (_this2.name_ === 'EmpDashif') {
              _this2.certificate_ = base64EncodeUint8Array(cert);
            } else {
              //Shaka
              _this2.certificate_ = cert;
            }
            _this2.handleSource(source, tech);
          } else {
            _this2.checkForRecoverableErrors(error ? error : { message: 'no certificate', category: 6 });
          }
        });
        return false;
      }
    }

    if (this.stopTrackingDuration) {
      this.stopTrackingDuration();
    }
    this.stopped_ = false;
    this.ended_ = false;
    this.hasStarted_ = false;
    this.hasMetadata_ = false;
    var options = this.options_;
    options.source = source;
    // If user select language keep it
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

    if (source.licenseServer || source.licenseServers) {
      this.playToken = source.playToken;
    }

    this.clearTracks(['text']);

    return true;
  };

  ///////////////////// Text tracks

  /**
   * isTextTrackSynchronized
   * @param {string[]} techTracksLanguages
   * @private
   */


  EmpTech.prototype.isTechTextTrackSynchronized = function isTechTextTrackSynchronized(techTracksLanguages) {
    techTracksLanguages = techTracksLanguages.sort();

    var videojsTextTracks = this.textTracks();
    var videojsTextTracksLanguages = [];
    for (var i = 0; i < videojsTextTracks.length; i++) {
      videojsTextTracksLanguages.push(videojsTextTracks[i].language);
    }
    videojsTextTracksLanguages = videojsTextTracksLanguages.sort();

    var isSync = techTracksLanguages.join() === videojsTextTracksLanguages.join();
    //log('isTextTrackSynchronized', isSync, techTracksLanguages.join(), videojsTextTracksLanguages.join());
    log$1('isTextTrackSynchronized', isSync);
    return isSync;
  };

  /**
  * syncVideojsTexttrackVisibility
  *
  * @private
  */


  EmpTech.prototype.syncVideojsTexttrackVisibility = function syncVideojsTexttrackVisibility() {
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
      var selectedTechTextLanguage = this.getSelectedTechTextLanguage();
      while (i--) {
        var track = textTracks[i];
        if (track.language === selectedTechTextLanguage && track.mode !== 'showing') {
          track.mode = 'showing';
        } else if (track.language !== selectedTechTextLanguage && track.mode !== 'disabled') {
          track.mode = 'disabled';
        }
      }
    }
    this.stopBlockLocalTrackChange('syncVideojsTexttrackVisibility');
  };

  /**
  * deferredSelectTextTrack
  * When changing tracklist we get many onTextTrackChange, wait to the update is done
  * @param {string} languageCode
  * @private
  */


  EmpTech.prototype.deferredSelectTextTrack = function deferredSelectTextTrack(languageCode) {
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

      this.selectTechTextLanguage(languageCode);
      this.stopBlockLocalTrackChange('deferredSelectTextTrack exit');
    }.bind(this), 2000); // 1 sec
  };

  /**
  * selectVideojsTextLanguage
  * @param {string} languageCode
  * @private
  */


  EmpTech.prototype.selectVideojsTextLanguage = function selectVideojsTextLanguage(languageCode) {
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
      }
    }
    this.stopBlockLocalTrackChange('selectVideojsAudioLanguage');
  };

  /**
  * VideoJS Text track change
  * @param {object} event
  * One of the VideoJS text track changed its mode
  *
  * @private
  */


  EmpTech.prototype.baseTextTrackChange = function baseTextTrackChange(event) {
    if (this.blockLocalTrackChange) {
      log$1('blockLocalTrackChange', 'baseTextTrackChange');
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

  ///////////////////// Audio tracks

  /**
  * isTechAudioTrackSynchronized
  * @param {string[]} techTracksLanguages
  * @private
  */


  EmpTech.prototype.isTechAudioTrackSynchronized = function isTechAudioTrackSynchronized(techTracksLanguages) {
    techTracksLanguages = techTracksLanguages.sort();

    var videojsAudioTracks = this.audioTracks();
    var videojsAudioTracksLanguages = [];
    for (var i = 0; i < videojsAudioTracks.length; i++) {
      videojsAudioTracksLanguages.push(videojsAudioTracks[i].language);
    }
    videojsAudioTracksLanguages = videojsAudioTracksLanguages.sort();

    var isSync = techTracksLanguages.join() === videojsAudioTracksLanguages.join();
    //log('isAudioTrackSynchronized', isSync, techTracksLanguages.join(), videojsAudioTracksLanguages.join());
    log$1('isAudioTrackSynchronized', isSync);
    return isSync;
  };

  /**
   * VideoJS
   * One of the VideoJS audio track changed its enabled
   * @param {object} event
   * @private
   */


  EmpTech.prototype.baseAudioTrackChange = function baseAudioTrackChange(event) {
    if (this.blockLocalTrackChange) {
      log$1('blockLocalTrackChange', 'baseAudioTrackChange');
      return;
    }
    log$1('onAudioTrackChange');
    var audioTracks = this.audioTracks();
    var i = audioTracks.length;
    while (i--) {
      var track = audioTracks[i];
      if (track.enabled) {
        this.selectTechAudioLanguage(track.language);
        return;
      }
    }
  };

  /**
  * selectVideojsAudioLanguage
  * @param {string} languageCode
  * @private
  */


  EmpTech.prototype.selectVideojsAudioLanguage = function selectVideojsAudioLanguage(languageCode) {
    log$1('selectVideojsAudioLanguage', languageCode);
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
  };

  /**
   * 
   * @param {string} kind
   * @param {string} label
   * @param {string} language
   * @param {boolean} enabled = false
   * @returns {object} new Track
   * @private
   */


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
  * stopBlockLocalTrackChange
  * @param {string} caller
  * @private
  */


  EmpTech.prototype.stopBlockLocalTrackChange = function stopBlockLocalTrackChange(caller) {
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

  return EmpTech;
}();

var shakaPlayer_compiled = createCommonjsModule(function (module, exports) {
(function(){var innerGlobal=typeof window!="undefined"?window:commonjsGlobal;var exportTo={};(function(window,global){var n,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value);},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ca(){ca=function(){};ba.Symbol||(ba.Symbol=da);}var da=function(){var b=0;return function(c){return"jscomp_symbol_"+(c||"")+b++}}();
function ea(){ca();var b=ba.Symbol.iterator;b||(b=ba.Symbol.iterator=ba.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&aa(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return fa(this)}});ea=function(){};}function fa(b){var c=0;return ha(function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}})}function ha(b){ea();b={next:b};b[ba.Symbol.iterator]=function(){return this};return b}function ia(b){ea();var c=b[Symbol.iterator];return c?c.call(b):fa(b)}
function ja(b,c){if(c){for(var d=ba,e=b.split("."),f=0;f<e.length-1;f++){var g=e[f];g in d||(d[g]={});d=d[g];}e=e[e.length-1];f=d[e];g=c(f);g!=f&&null!=g&&aa(d,e,{configurable:!0,writable:!0,value:g});}}
ja("Promise",function(b){function c(b){this.b=0;this.g=void 0;this.a=[];var c=this.c();try{b(c.resolve,c.reject);}catch(l){c.reject(l);}}function d(){this.a=null;}function e(b){return b instanceof c?b:new c(function(c){c(b);})}if(b)return b;d.prototype.b=function(b){null==this.a&&(this.a=[],this.f());this.a.push(b);};d.prototype.f=function(){var b=this;this.c(function(){b.h();});};var f=ba.setTimeout;d.prototype.c=function(b){f(b,0);};d.prototype.h=function(){for(;this.a&&this.a.length;){var b=this.a;this.a=
[];for(var c=0;c<b.length;++c){var d=b[c];b[c]=null;try{d();}catch(m){this.g(m);}}}this.a=null;};d.prototype.g=function(b){this.c(function(){throw b;});};c.prototype.c=function(){function b(b){return function(e){d||(d=!0,b.call(c,e));}}var c=this,d=!1;return{resolve:b(this.m),reject:b(this.f)}};c.prototype.m=function(b){if(b===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof c)this.o(b);else{a:switch(typeof b){case "object":var d=null!=b;break a;case "function":d=!0;
break a;default:d=!1;}d?this.l(b):this.h(b);}};c.prototype.l=function(b){var c=void 0;try{c=b.then;}catch(l){this.f(l);return}"function"==typeof c?this.s(c,b):this.h(b);};c.prototype.f=function(b){this.i(2,b);};c.prototype.h=function(b){this.i(1,b);};c.prototype.i=function(b,c){if(0!=this.b)throw Error("Cannot settle("+b+", "+c+"): Promise already settled in state"+this.b);this.b=b;this.g=c;this.j();};c.prototype.j=function(){if(null!=this.a){for(var b=0;b<this.a.length;++b)g.b(this.a[b]);this.a=null;}};
var g=new d;c.prototype.o=function(b){var c=this.c();b.qb(c.resolve,c.reject);};c.prototype.s=function(b,c){var d=this.c();try{b.call(c,d.resolve,d.reject);}catch(m){d.reject(m);}};c.prototype.then=function(b,d){function e(b,c){return"function"==typeof b?function(c){try{f(b(c));}catch(Ha){g(Ha);}}:c}var f,g,h=new c(function(b,c){f=b;g=c;});this.qb(e(b,f),e(d,g));return h};c.prototype["catch"]=function(b){return this.then(void 0,b)};c.prototype.qb=function(b,c){function d(){switch(e.b){case 1:b(e.g);break;
case 2:c(e.g);break;default:throw Error("Unexpected state: "+e.b);}}var e=this;null==this.a?g.b(d):this.a.push(d);};c.resolve=e;c.reject=function(b){return new c(function(c,d){d(b);})};c.race=function(b){return new c(function(c,d){for(var f=ia(b),g=f.next();!g.done;g=f.next())e(g.value).qb(c,d);})};c.all=function(b){var d=ia(b),f=d.next();return f.done?e([]):new c(function(b,c){function g(c){return function(d){h[c]=d;k--;0==k&&b(h);}}var h=[],k=0;do h.push(void 0),k++,e(f.value).qb(g(h.length-1),c),f=
d.next();while(!f.done)})};return c});ja("Promise.prototype.finally",function(b){return b?b:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;})})}});function ka(b){function c(c){return b.next(c)}function d(c){return b["throw"](c)}return new Promise(function(e,f){function g(b){b.done?e(b.value):Promise.resolve(b.value).then(c,d).then(g,f);}g(b.next());})}function p(b){return ka(b())}
function la(){this.g=!1;this.c=null;this.I=void 0;this.w=1;this.b=this.f=0;this.i=this.a=null;}function ma(b){if(b.g)throw new TypeError("Generator is already running");b.g=!0;}la.prototype.h=function(b){this.I=b;};function na(b,c){b.a={nc:c,uc:!0};b.w=b.f||b.b;}la.prototype["return"]=function(b){this.a={"return":b};this.w=this.b;};function q(b,c,d){b.w=d;return{value:c}}la.prototype.W=function(b){this.w=b;};function oa(b,c,d){b.f=c;void 0!=d&&(b.b=d);}function pa(b){b.f=0;b.b=2;}
function qa(b){b.w=0;b.f=0;}function ra(b){b.f=0;var c=b.a.nc;b.a=null;return c}function sa(b){b.i=[b.a];b.f=0;b.b=0;}function ta(b,c){var d=b.i.splice(0)[0];(d=b.a=b.a||d)?d.uc?b.w=b.f||b.b:void 0!=d.W&&b.b<d.W?(b.w=d.W,b.a=null):b.w=b.b:b.w=c;}function ua(b){this.a=new la;this.b=b;}function va(b,c){ma(b.a);var d=b.a.c;if(d)return wa(b,"return"in d?d["return"]:function(b){return{value:b,done:!0}},c,b.a["return"]);b.a["return"](c);return xa(b)}
function wa(b,c,d,e){try{var f=c.call(b.a.c,d);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return b.a.g=!1,f;var g=f.value;}catch(h){return b.a.c=null,na(b.a,h),xa(b)}b.a.c=null;e.call(b.a,g);return xa(b)}
function xa(b){for(;b.a.w;)try{var c=b.b(b.a);if(c)return b.a.g=!1,{value:c.value,done:!1}}catch(d){b.a.I=void 0,na(b.a,d);}b.a.g=!1;if(b.a.a){c=b.a.a;b.a.a=null;if(c.uc)throw c.nc;return{value:c["return"],done:!0}}return{value:void 0,done:!0}}
function ya(b){this.next=function(c){ma(b.a);b.a.c?c=wa(b,b.a.c.next,c,b.a.h):(b.a.h(c),c=xa(b));return c};this["throw"]=function(c){ma(b.a);b.a.c?c=wa(b,b.a.c["throw"],c,b.a.h):(na(b.a,c),c=xa(b));return c};this["return"]=function(c){return va(b,c)};ea();this[Symbol.iterator]=function(){return this};}function v(b,c){ya.prototype=b.prototype;return new ya(new ua(c))}
ja("Array.prototype.find",function(b){return b?b:function(b,d){a:{var c=this;c instanceof String&&(c=String(c));for(var f=c.length,g=0;g<f;g++){var h=c[g];if(b.call(d,h,g,c)){c=h;break a}}c=void 0;}return c}});var za=this;za.a=!0;function x(b,c){var d=b.split("."),e=za;d[0]in e||!e.execScript||e.execScript("var "+d[0]);for(var f;d.length&&(f=d.shift());)d.length||void 0===c?e[f]?e=e[f]:e=e[f]={}:e[f]=c;}
function Aa(b,c){function d(){}d.prototype=c.prototype;b.df=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.bf=function(b,d,g){return c.prototype[d].apply(b,Array.prototype.slice.call(arguments,2))};}/*

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
function Ba(b){this.c=Math.exp(Math.log(.5)/b);this.b=this.a=0;}function Ca(b,c,d){var e=Math.pow(b.c,c);d=d*(1-e)+e*b.a;isNaN(d)||(b.a=d,b.b+=c);}function Da(b){return b.a/(1-Math.pow(b.c,b.b))}function Ea(){this.b=new Ba(2);this.c=new Ba(5);this.a=0;}Ea.prototype.getBandwidthEstimate=function(b){return 128E3>this.a?b:Math.min(Da(this.b),Da(this.c))};function Fa(){}function Ga(){}window.console&&window.console.log.bind&&(Fa=console.warn.bind(console));var Ia=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ja(b){var c;b instanceof Ja?(Ka(this,b.ha),this.Da=b.Da,this.ka=b.ka,La(this,b.Pa),this.aa=b.aa,Ma(this,Na(b.a)),this.xa=b.xa):b&&(c=String(b).match(Ia))?(Ka(this,c[1]||"",!0),this.Da=Oa(c[2]||""),this.ka=Oa(c[3]||"",!0),La(this,c[4]),this.aa=Oa(c[5]||"",!0),Ma(this,c[6]||"",!0),this.xa=Oa(c[7]||"")):this.a=new Pa(null);}n=Ja.prototype;n.ha="";n.Da="";n.ka="";n.Pa=null;n.aa="";n.xa="";
n.toString=function(){var b=[],c=this.ha;c&&b.push(Qa(c,Ra,!0),":");if(c=this.ka){b.push("//");var d=this.Da;d&&b.push(Qa(d,Ra,!0),"@");b.push(encodeURIComponent(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));c=this.Pa;null!=c&&b.push(":",String(c));}if(c=this.aa)this.ka&&"/"!=c.charAt(0)&&b.push("/"),b.push(Qa(c,"/"==c.charAt(0)?Sa:Ta,!0));(c=this.a.toString())&&b.push("?",c);(c=this.xa)&&b.push("#",Qa(c,Ua));return b.join("")};
n.resolve=function(b){var c=new Ja(this);"data"===c.ha&&(c=new Ja);var d=!!b.ha;d?Ka(c,b.ha):d=!!b.Da;d?c.Da=b.Da:d=!!b.ka;d?c.ka=b.ka:d=null!=b.Pa;var e=b.aa;if(d)La(c,b.Pa);else if(d=!!b.aa){if("/"!=e.charAt(0))if(this.ka&&!this.aa)e="/"+e;else{var f=c.aa.lastIndexOf("/");-1!=f&&(e=c.aa.substr(0,f+1)+e);}if(".."==e||"."==e)e="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){f=0==e.lastIndexOf("/",0);e=e.split("/");for(var g=[],h=0;h<e.length;){var k=e[h++];"."==k?f&&h==e.length&&g.push(""):".."==
k?((1<g.length||1==g.length&&""!=g[0])&&g.pop(),f&&h==e.length&&g.push("")):(g.push(k),f=!0);}e=g.join("/");}}d?c.aa=e:d=""!==b.a.toString();d?Ma(c,Na(b.a)):d=!!b.xa;d&&(c.xa=b.xa);return c};function Ka(b,c,d){b.ha=d?Oa(c,!0):c;b.ha&&(b.ha=b.ha.replace(/:$/,""));}function La(b,c){if(c){c=Number(c);if(isNaN(c)||0>c)throw Error("Bad port number "+c);b.Pa=c;}else b.Pa=null;}function Ma(b,c,d){c instanceof Pa?b.a=c:(d||(c=Qa(c,Va)),b.a=new Pa(c));}
function Oa(b,c){return b?c?decodeURI(b):decodeURIComponent(b):""}function Qa(b,c,d){return"string"==typeof b?(b=encodeURI(b).replace(c,Xa),d&&(b=b.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b):null}function Xa(b){b=b.charCodeAt(0);return"%"+(b>>4&15).toString(16)+(b&15).toString(16)}var Ra=/[#\/\?@]/g,Ta=/[#\?:]/g,Sa=/[#\?]/g,Va=/[#\?@]/g,Ua=/#/g;function Pa(b){this.b=b||null;}Pa.prototype.a=null;Pa.prototype.c=null;
Pa.prototype.add=function(b,c){if(!this.a&&(this.a={},this.c=0,this.b))for(var d=this.b.split("&"),e=0;e<d.length;e++){var f=d[e].indexOf("="),g=null;if(0<=f){var h=d[e].substring(0,f);g=d[e].substring(f+1);}else h=d[e];h=decodeURIComponent(h.replace(/\+/g," "));g=g||"";this.add(h,decodeURIComponent(g.replace(/\+/g," ")));}this.b=null;(d=this.a.hasOwnProperty(b)&&this.a[b])||(this.a[b]=d=[]);d.push(c);this.c++;return this};
Pa.prototype.toString=function(){if(this.b)return this.b;if(!this.a)return"";var b=[],c;for(c in this.a)for(var d=encodeURIComponent(c),e=this.a[c],f=0;f<e.length;f++){var g=d;""!==e[f]&&(g+="="+encodeURIComponent(e[f]));b.push(g);}return this.b=b.join("&")};function Na(b){var c=new Pa;c.b=b.b;if(b.a){var d={},e;for(e in b.a)d[e]=b.a[e].concat();c.a=d;c.c=b.c;}return c}function z(){var b,c,d=new Promise(function(d,f){b=d;c=f;});d.resolve=b;d.reject=c;return d}z.prototype.resolve=function(){};z.prototype.reject=function(){};function Ya(b,c){var d=Za();this.i=null==b.maxAttempts?d.maxAttempts:b.maxAttempts;this.f=null==b.baseDelay?d.baseDelay:b.baseDelay;this.h=null==b.fuzzFactor?d.fuzzFactor:b.fuzzFactor;this.g=null==b.backoffFactor?d.backoffFactor:b.backoffFactor;this.a=0;this.b=this.f;if(this.c=c||!1)this.a=1;}function $a(b){if(b.a>=b.i)if(b.c)b.a=1,b.b=b.f;else return Promise.reject();var c=new z;b.a?(window.setTimeout(c.resolve,b.b*(1+(2*Math.random()-1)*b.h)),b.b*=b.g):c.resolve();b.a++;return c}
function Za(){return{maxAttempts:2,baseDelay:1E3,backoffFactor:2,fuzzFactor:.5,timeout:0}}function A(b,c,d,e){this.severity=b;this.category=c;this.code=d;this.data=Array.prototype.slice.call(arguments,3);this.handled=!1;}x("shaka.util.Error",A);A.prototype.toString=function(){return"shaka.util.Error "+JSON.stringify(this,null,"  ")};A.Severity={RECOVERABLE:1,CRITICAL:2};A.Category={NETWORK:1,TEXT:2,MEDIA:3,MANIFEST:4,STREAMING:5,DRM:6,PLAYER:7,CAST:8,STORAGE:9};
A.Code={UNSUPPORTED_SCHEME:1E3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,UNKNOWN_DATA_URI_ENCODING:1005,REQUEST_FILTER_ERROR:1006,RESPONSE_FILTER_ERROR:1007,MALFORMED_TEST_URI:1008,UNEXPECTED_TEST_REQUEST:1009,INVALID_TEXT_HEADER:2E3,INVALID_TEXT_CUE:2001,UNABLE_TO_DETECT_ENCODING:2003,BAD_ENCODING:2004,INVALID_XML:2005,INVALID_MP4_TTML:2007,INVALID_MP4_VTT:2008,UNABLE_TO_EXTRACT_CUE_START_TIME:2009,BUFFER_READ_OUT_OF_BOUNDS:3E3,JS_INTEGER_OVERFLOW:3001,EBML_OVERFLOW:3002,
EBML_BAD_FLOATING_POINT_SIZE:3003,MP4_SIDX_WRONG_BOX_TYPE:3004,MP4_SIDX_INVALID_TIMESCALE:3005,MP4_SIDX_TYPE_NOT_SUPPORTED:3006,WEBM_CUES_ELEMENT_MISSING:3007,WEBM_EBML_HEADER_ELEMENT_MISSING:3008,WEBM_SEGMENT_ELEMENT_MISSING:3009,WEBM_INFO_ELEMENT_MISSING:3010,WEBM_DURATION_ELEMENT_MISSING:3011,WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:3012,WEBM_CUE_TIME_ELEMENT_MISSING:3013,MEDIA_SOURCE_OPERATION_FAILED:3014,MEDIA_SOURCE_OPERATION_THREW:3015,VIDEO_ERROR:3016,QUOTA_EXCEEDED_ERROR:3017,TRANSMUXING_FAILED:3018,
UNABLE_TO_GUESS_MANIFEST_TYPE:4E3,DASH_INVALID_XML:4001,DASH_NO_SEGMENT_INFO:4002,DASH_EMPTY_ADAPTATION_SET:4003,DASH_EMPTY_PERIOD:4004,DASH_WEBM_MISSING_INIT:4005,DASH_UNSUPPORTED_CONTAINER:4006,DASH_PSSH_BAD_ENCODING:4007,DASH_NO_COMMON_KEY_SYSTEM:4008,DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:4009,DASH_CONFLICTING_KEY_IDS:4010,UNPLAYABLE_PERIOD:4011,RESTRICTIONS_CANNOT_BE_MET:4012,NO_PERIODS:4014,HLS_PLAYLIST_HEADER_MISSING:4015,INVALID_HLS_TAG:4016,HLS_INVALID_PLAYLIST_HIERARCHY:4017,DASH_DUPLICATE_REPRESENTATION_ID:4018,
HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:4020,HLS_COULD_NOT_GUESS_MIME_TYPE:4021,HLS_MASTER_PLAYLIST_NOT_PROVIDED:4022,HLS_REQUIRED_ATTRIBUTE_MISSING:4023,HLS_REQUIRED_TAG_MISSING:4024,HLS_COULD_NOT_GUESS_CODECS:4025,HLS_KEYFORMATS_NOT_SUPPORTED:4026,DASH_UNSUPPORTED_XLINK_ACTUATE:4027,DASH_XLINK_DEPTH_LIMIT:4028,HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:4030,CONTENT_UNSUPPORTED_BY_BROWSER:4032,CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM:4033,INVALID_STREAMS_CHOSEN:5005,NO_RECOGNIZED_KEY_SYSTEMS:6E3,REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:6001,
FAILED_TO_CREATE_CDM:6002,FAILED_TO_ATTACH_TO_VIDEO:6003,INVALID_SERVER_CERTIFICATE:6004,FAILED_TO_CREATE_SESSION:6005,FAILED_TO_GENERATE_LICENSE_REQUEST:6006,LICENSE_REQUEST_FAILED:6007,LICENSE_RESPONSE_REJECTED:6008,ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:6010,NO_LICENSE_SERVER_GIVEN:6012,OFFLINE_SESSION_REMOVED:6013,EXPIRED:6014,LOAD_INTERRUPTED:7E3,OPERATION_ABORTED:7001,NO_VIDEO_ELEMENT:7002,CAST_API_UNAVAILABLE:8E3,NO_CAST_RECEIVERS:8001,ALREADY_CASTING:8002,UNEXPECTED_CAST_ERROR:8003,CAST_CANCELED_BY_USER:8004,
CAST_CONNECTION_TIMED_OUT:8005,CAST_RECEIVER_APP_UNAVAILABLE:8006,STORAGE_NOT_SUPPORTED:9E3,INDEXED_DB_ERROR:9001,DEPRECATED_OPERATION_ABORTED:9002,REQUESTED_ITEM_NOT_FOUND:9003,MALFORMED_OFFLINE_URI:9004,CANNOT_STORE_LIVE_OFFLINE:9005,STORE_ALREADY_IN_PROGRESS:9006,NO_INIT_DATA_FOR_OFFLINE:9007,LOCAL_PLAYER_INSTANCE_REQUIRED:9008,NEW_KEY_OPERATION_NOT_SUPPORTED:9011,KEY_NOT_FOUND:9012,MISSING_STORAGE_CELL:9013};function B(b,c){this.promise=b;this.b=c;this.a=!1;}x("shaka.util.AbortableOperation",B);function ab(b){return new B(Promise.reject(b),function(){return Promise.resolve()})}B.failed=ab;function bb(){var b=Promise.reject(new A(2,7,7001));b["catch"](function(){});return new B(b,function(){return Promise.resolve()})}B.aborted=bb;function cb(b){return new B(Promise.resolve(b),function(){return Promise.resolve()})}B.completed=cb;
function db(b){return new B(b,function(){return b["catch"](function(){})})}B.notAbortable=db;B.prototype.abort=function(){this.a=!0;return this.b()};B.prototype.abort=B.prototype.abort;function eb(b){return new B(Promise.all(b.map(function(b){return b.promise})),function(){return Promise.all(b.map(function(b){return b.abort()}))})}B.all=eb;B.prototype["finally"]=function(b){this.promise.then(function(){return b(!0)},function(){return b(!1)});return this};B.prototype["finally"]=B.prototype["finally"];
B.prototype.V=function(b,c){function d(){f.reject(new A(2,7,7001));return e.abort()}var e=this,f=new z;this.promise.then(function(c){e.a?f.reject(new A(2,7,7001)):b?d=fb(b,c,f):f.resolve(c);},function(b){c?d=fb(c,b,f):f.reject(b);});return new B(f,function(){return d()})};B.prototype.chain=B.prototype.V;
function fb(b,c,d){try{var e=b(c);if(e&&e.promise&&e.abort)return d.resolve(e.promise),function(){return e.abort()};d.resolve(e);return function(){return Promise.resolve(e).then(function(){})["catch"](function(){})}}catch(f){return d.reject(f),function(){return Promise.resolve()}}}function gb(b,c){for(var d=[],e=0;e<b.length;++e){for(var f=!1,g=0;g<d.length&&!(f=c?c(b[e],d[g]):b[e]===d[g]);++g);f||d.push(b[e]);}return d}function hb(b,c,d){for(var e=0;e<b.length;++e)if(d(b[e],c))return e;return-1}function ib(b,c){var d=b.indexOf(c);-1<d&&b.splice(d,1);}function jb(b,c){var d=0;b.forEach(function(b){d+=c(b)?1:0;});return d}function kb(b,c,d,e,f){var g=f in e,h=!0,k;for(k in c){var l=f+"."+k,m=g?e[f]:d[k];g||k in b?void 0===c[k]?void 0===m||g?delete b[k]:b[k]=m:m.constructor==Object&&c[k]&&c[k].constructor==Object?(b[k]||(b[k]=m),l=kb(b[k],c[k],m,e,l),h=h&&l):typeof c[k]!=typeof m||null==c[k]||c[k].constructor!=m.constructor?h=!1:b[k]=c[k]:h=!1;}return h}
function lb(b){function c(b){switch(typeof b){case "undefined":case "boolean":case "number":case "string":case "symbol":case "function":return b;default:if(!b)return b;if(0<=d.indexOf(b))return null;var e=b.constructor==Array;if(b.constructor!=Object&&!e)return null;d.push(b);var g=e?[]:{},h;for(h in b)g[h]=c(b[h]);e&&(g.length=b.length);return g}}var d=[];return c(b)}function mb(b,c){function d(){return Promise.all(b.map(function(b){return b.destroy()}))}return Promise.resolve(c()).then(function(b){return d().then(function(){return b})},function(b){return d().then(function(){throw b;})})}function nb(){this.a=[];}function ob(b,c){b.a.push(c["finally"](function(){ib(b.a,c);}));}nb.prototype.destroy=function(){var b=[];this.a.forEach(function(c){c.promise["catch"](function(){});b.push(c.abort());});this.a=[];return Promise.all(b)};function C(b){this.c=!1;this.g=new nb;this.a=[];this.b=[];this.f=b||null;}x("shaka.net.NetworkingEngine",C);C.RequestType={MANIFEST:0,SEGMENT:1,LICENSE:2,APP:3};C.PluginPriority={FALLBACK:1,PREFERRED:2,APPLICATION:3};var pb={};function qb(b,c,d){d=d||3;var e=pb[b];if(!e||d>=e.priority)pb[b]={priority:d,ke:c};}C.registerScheme=qb;C.unregisterScheme=function(b){delete pb[b];};C.prototype.ne=function(b){this.a.push(b);};C.prototype.registerRequestFilter=C.prototype.ne;
C.prototype.Se=function(b){ib(this.a,b);};C.prototype.unregisterRequestFilter=C.prototype.Se;C.prototype.ed=function(){this.a=[];};C.prototype.clearAllRequestFilters=C.prototype.ed;C.prototype.oe=function(b){this.b.push(b);};C.prototype.registerResponseFilter=C.prototype.oe;C.prototype.Te=function(b){ib(this.b,b);};C.prototype.unregisterResponseFilter=C.prototype.Te;C.prototype.fd=function(){this.b=[];};C.prototype.clearAllResponseFilters=C.prototype.fd;
function rb(b,c){return{uris:b,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:c}}C.prototype.destroy=function(){this.c=!0;this.a=[];this.b=[];return this.g.destroy()};C.prototype.destroy=C.prototype.destroy;
function sb(b){b.then=function(c,d){Fa("The network request interface has changed!  Please update your application to the new interface, which allows operations to be aborted.  Support for the old API will be removed in v2.5.");return b.promise.then(c,d)};b["catch"]=function(c){Fa("The network request interface has changed!  Please update your application to the new interface, which allows operations to be aborted.  Support for the old API will be removed in v2.5.");return b.promise["catch"](c)};
return b}
C.prototype.request=function(b,c){var d=this;if(this.c)return sb(bb());c.method=c.method||"GET";c.headers=c.headers||{};c.retryParameters=c.retryParameters?lb(c.retryParameters):Za();c.uris=lb(c.uris);var e=tb(this,b,c),f=e.V(function(){return ub(d,b,c,new Ya(c.retryParameters,!1),0,null)}),g=f.V(function(c){return vb(d,b,c)}),h=Date.now(),k=0;e.promise.then(function(){k=Date.now()-h;},function(){});var l=0;f.promise.then(function(){l=Date.now();},function(){});e=g.V(function(c){var e=Date.now()-l;
c.timeMs+=k;c.timeMs+=e;d.f&&!c.fromCache&&1==b&&d.f(c.timeMs,c.data.byteLength);return c},function(b){b&&(b.severity=2);throw b;});ob(this.g,e);return sb(e)};C.prototype.request=C.prototype.request;function tb(b,c,d){var e=cb(void 0);b.a.forEach(function(b){e=e.V(function(){return b(c,d)});});return e.V(void 0,function(b){if(b&&7001==b.code)throw b;throw new A(2,1,1006,b);})}
function ub(b,c,d,e,f,g){var h=new Ja(d.uris[f]),k=h.ha;k||(k=location.protocol,k=k.slice(0,-1),Ka(h,k),d.uris[f]=h.toString());var l=(k=pb[k])?k.ke:null;if(!l)return ab(new A(2,1,1E3,h));var m;return db($a(e)).V(function(){if(b.c)return bb();m=Date.now();var e=l(d.uris[f],d,c);void 0==e.promise&&(Fa("The scheme plugin interface has changed!  Please update your scheme plugins to the new interface to add support for abort().  Support for the old plugin interface will be removed in v2.5."),e=db(e));
return e}).V(function(b){void 0==b.timeMs&&(b.timeMs=Date.now()-m);return b},function(h){if(h&&7001==h.code)throw h;if(b.c)return bb();if(h&&1==h.severity)return f=(f+1)%d.uris.length,ub(b,c,d,e,f,h);throw h||g;})}function vb(b,c,d){var e=cb(void 0);b.b.forEach(function(b){e=e.V(function(){return b(c,d)});});return e.V(function(){return d},function(b){if(b&&7001==b.code)throw b;var c=2;b instanceof A&&(c=b.severity);throw new A(c,1,1007,b);})}function wb(){this.a={};}wb.prototype.push=function(b,c){this.a.hasOwnProperty(b)?this.a[b].push(c):this.a[b]=[c];};wb.prototype.get=function(b){return(b=this.a[b])?b.slice():null};wb.prototype.remove=function(b,c){var d=this.a[b];if(d)for(var e=0;e<d.length;++e)d[e]==c&&(d.splice(e,1),--e);};function D(){this.a=new wb;}D.prototype.destroy=function(){xb(this);this.a=null;return Promise.resolve()};function E(b,c,d,e){b.a&&(c=new yb(c,d,e),b.a.push(d,c));}function zb(b,c,d,e){E(b,c,d,function(b){this.na(c,d);e(b);}.bind(b));}D.prototype.na=function(b,c){if(this.a)for(var d=this.a.get(c)||[],e=0;e<d.length;++e){var f=d[e];f.target==b&&(f.na(),this.a.remove(c,f));}};function xb(b){if(b.a){var c=b.a,d=[],e;for(e in c.a)d.push.apply(d,c.a[e]);for(c=0;c<d.length;++c)d[c].na();b.a.a={};}}
function yb(b,c,d){this.target=b;this.type=c;this.a=d;this.target.addEventListener(c,d,!1);}yb.prototype.na=function(){this.target.removeEventListener(this.type,this.a,!1);this.a=this.target=null;};function F(b,c){var d=c||{},e;for(e in d)this[e]=d[e];this.defaultPrevented=this.cancelable=this.bubbles=!1;this.timeStamp=window.performance&&window.performance.now?window.performance.now():Date.now();this.type=b;this.isTrusted=!1;this.target=this.currentTarget=null;this.a=!1;}F.prototype.preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0);};F.prototype.stopImmediatePropagation=function(){this.a=!0;};F.prototype.stopPropagation=function(){};function Ab(b,c){return b.reduce(function(b,c,f){return c["catch"](b.bind(null,f))}.bind(null,c),Promise.reject())}function Bb(b,c){return b.concat(c)}function Cb(){}function Db(b){return null!=b}function Eb(b,c,d){return d.indexOf(b)==c}function Fb(b,c){if(0==c.length)return b;var d=c.map(function(b){return new Ja(b)});return b.map(function(b){return new Ja(b)}).map(function(b){return d.map(b.resolve.bind(b))}).reduce(Bb,[]).map(function(b){return b.toString()})}function Gb(b,c){return{keySystem:b,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:c||[],keyIds:[]}}var Hb=1/15;function Ib(b){return!b||0==Object.keys(b).length}function G(b){return Object.keys(b).map(function(c){return b[c]})}function Jb(b,c){return Object.keys(b).every(function(d){return c(d,b[d])})}function Kb(b,c){Object.keys(b).forEach(function(d){c(d,b[d]);});}function Mb(b,c){var d=b;c&&(d+='; codecs="'+c+'"');return d}var Nb={codecs:"codecs",frameRate:"framerate",bandwidth:"bitrate",width:"width",height:"height",channelsCount:"channels"};function Ob(b){if(!b)return"";b=new Uint8Array(b);239==b[0]&&187==b[1]&&191==b[2]&&(b=b.subarray(3));b=escape(Pb(b));try{return decodeURIComponent(b)}catch(c){throw new A(2,2,2004);}}x("shaka.util.StringUtils.fromUTF8",Ob);
function Qb(b,c,d){if(!b)return"";if(!d&&0!=b.byteLength%2)throw new A(2,2,2004);if(b instanceof ArrayBuffer)var e=b;else d=new Uint8Array(b.byteLength),d.set(new Uint8Array(b)),e=d.buffer;b=Math.floor(b.byteLength/2);d=new Uint16Array(b);e=new DataView(e);for(var f=0;f<b;f++)d[f]=e.getUint16(2*f,c);return Pb(d)}x("shaka.util.StringUtils.fromUTF16",Qb);
function Rb(b){var c=new Uint8Array(b);if(239==c[0]&&187==c[1]&&191==c[2])return Ob(c);if(254==c[0]&&255==c[1])return Qb(c.subarray(2),!1);if(255==c[0]&&254==c[1])return Qb(c.subarray(2),!0);var d=function(b,c){return b.byteLength<=c||32<=b[c]&&126>=b[c]}.bind(null,c);if(0==c[0]&&0==c[2])return Qb(b,!1);if(0==c[1]&&0==c[3])return Qb(b,!0);if(d(0)&&d(1)&&d(2)&&d(3))return Ob(b);throw new A(2,2,2003);}x("shaka.util.StringUtils.fromBytesAutoDetect",Rb);
function Sb(b){b=encodeURIComponent(b);b=unescape(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c.buffer}x("shaka.util.StringUtils.toUTF8",Sb);function Pb(b){for(var c="",d=0;d<b.length;d+=16E3)c+=String.fromCharCode.apply(null,b.subarray(d,d+16E3));return c}function Tb(b){this.a=null;this.b=function(){this.a=null;b();}.bind(this);}Tb.prototype.cancel=function(){null!=this.a&&(clearTimeout(this.a),this.a=null);};function Ub(b){var c=Vb;b.cancel();b.a=setTimeout(b.b,1E3*c);}function Wb(b,c){b.cancel();var d=function(){this.b();this.a=setTimeout(d,1E3*c);}.bind(b);b.a=setTimeout(d,1E3*c);}function Xb(b,c){var d=void 0==c?!0:c,e=window.btoa(Pb(b)).replace(/\+/g,"-").replace(/\//g,"_");return d?e:e.replace(/=*$/,"")}x("shaka.util.Uint8ArrayUtils.toBase64",Xb);function Yb(b){b=window.atob(b.replace(/-/g,"+").replace(/_/g,"/"));for(var c=new Uint8Array(b.length),d=0;d<b.length;++d)c[d]=b.charCodeAt(d);return c}x("shaka.util.Uint8ArrayUtils.fromBase64",Yb);function Zb(b){for(var c=new Uint8Array(b.length/2),d=0;d<b.length;d+=2)c[d/2]=window.parseInt(b.substr(d,2),16);return c}
x("shaka.util.Uint8ArrayUtils.fromHex",Zb);function $b(b){for(var c="",d=0;d<b.length;++d){var e=b[d].toString(16);1==e.length&&(e="0"+e);c+=e;}return c}x("shaka.util.Uint8ArrayUtils.toHex",$b);function ac(b,c){if(!b&&!c)return!0;if(!b||!c||b.length!=c.length)return!1;for(var d=0;d<b.length;++d)if(b[d]!=c[d])return!1;return!0}x("shaka.util.Uint8ArrayUtils.equal",ac);function bc(b,c){if(!b&&!c)return!0;if(!b||!c)return!1;for(var d=0;d<b.length;++d)if(b[d]!=c[d])return!1;return!0}
x("shaka.util.Uint8ArrayUtils.firstPartEqual",bc);function cc(b){for(var c=0,d=0;d<arguments.length;++d)c+=arguments[d].length;c=new Uint8Array(c);for(var e=d=0;e<arguments.length;++e)c.set(arguments[e],d),d+=arguments[e].length;return c}x("shaka.util.Uint8ArrayUtils.concat",cc);function dc(b){this.m=b;this.l=this.j=this.u=null;this.L=!1;this.b=null;this.g=new D;this.a=[];this.s=[];this.i=new z;this.f=null;this.h=function(c){this.i.reject(c);b.onError(c);}.bind(this);this.R={};this.o={};this.G=new Tb(this.me.bind(this));this.fa=this.c=!1;this.J=[];this.X=!1;this.A=new Tb(this.le.bind(this));Wb(this.A,1);this.i["catch"](function(){});}n=dc.prototype;
n.destroy=function(){this.c=!0;var b=[];this.a.forEach(function(c){c=c.ia.close()["catch"](Cb);var d=new Promise(function(b){setTimeout(b,1E3*ec);});b.push(Promise.race([c,d]));});this.i.reject();this.g&&b.push(this.g.destroy());this.l&&b.push(this.l.setMediaKeys(null)["catch"](Cb));this.A&&(this.A.cancel(),this.A=null);this.G&&(this.G.cancel(),this.G=null);this.g=this.l=this.j=this.u=this.b=null;this.a=[];this.s=[];this.m=this.h=this.f=null;return Promise.all(b)};n.configure=function(b){this.f=b;};
n.init=function(b,c){var d={},e=[],f=b.periods.some(function(b){return b.variants.some(function(b){return b.drmInfos.length})});this.fa=c;this.s=b.offlineSessionIds;fc(this,b,c||0<b.offlineSessionIds.length,d,e);return e.length?gc(this,d,e,f):(this.L=!0,Promise.resolve())};
n.pb=function(b){if(!this.j)return zb(this.g,b,"encrypted",function(){this.h(new A(2,6,6010));}.bind(this)),Promise.resolve();this.l=b;zb(this.g,this.l,"play",this.Rd.bind(this));b=this.l.setMediaKeys(this.j);b=b["catch"](function(b){return Promise.reject(new A(2,6,6003,b.message))});var c=null;this.b.serverCertificate&&this.b.serverCertificate.length&&(c=this.j.setServerCertificate(this.b.serverCertificate).then(function(){})["catch"](function(b){return Promise.reject(new A(2,6,6004,b.message))}));
return Promise.all([b,c]).then(function(){if(this.c)return Promise.reject();hc(this);this.b.initData.length||this.s.length||E(this.g,this.l,"encrypted",this.Gd.bind(this));}.bind(this))["catch"](function(b){return this.c?Promise.resolve():Promise.reject(b)}.bind(this))};
function ic(b,c){return Promise.all(c.map(function(b){return jc(this,b).then(function(b){if(b){for(var c=new z,d=0;d<this.a.length;d++)if(this.a[d].ia==b){this.a[d].oa=c;break}return Promise.all([b.remove(),c])}}.bind(this))}.bind(b)))}function hc(b){var c=b.b?b.b.initData:[];c.forEach(function(b){kc(this,b.initDataType,b.initData);}.bind(b));b.s.forEach(function(b){jc(this,b);}.bind(b));c.length||b.s.length||b.i.resolve();return b.i}n.keySystem=function(){return this.b?this.b.keySystem:""};
function lc(b){return b.a.map(function(b){return b.ia.sessionId})}n.tb=function(){var b=this.a.map(function(b){b=b.ia.expiration;return isNaN(b)?Infinity:b});return Math.min.apply(Math,b)};
function fc(b,c,d,e,f){var g=mc(b),h=nc(b,c);c.periods.forEach(function(b){b.variants.forEach(function(b){g&&(b.drmInfos=[g]);h&&(b.drmInfos=h);b.drmInfos.forEach(function(c){oc(this,c);var g=e[c.keySystem];g||(g={audioCapabilities:[],videoCapabilities:[],distinctiveIdentifier:"optional",persistentState:d?"required":"optional",sessionTypes:[d?"persistent-license":"temporary"],label:c.keySystem,drmInfos:[]},e[c.keySystem]=g,f.push(c.keySystem));g.drmInfos.push(c);c.distinctiveIdentifierRequired&&(g.distinctiveIdentifier=
"required");c.persistentStateRequired&&(g.persistentState="required");var h=[];b.video&&h.push(b.video);b.audio&&h.push(b.audio);h.forEach(function(b){("video"==b.type?g.videoCapabilities:g.audioCapabilities).push({robustness:("video"==b.type?c.videoRobustness:c.audioRobustness)||"",contentType:Mb(b.mimeType,b.codecs)});}.bind(this));}.bind(this));}.bind(this));}.bind(b));}
function gc(b,c,d,e){if(1==d.length&&""==d[0])return Promise.reject(new A(2,6,6E3));var f=new z,g=f;[!0,!1].forEach(function(b){d.forEach(function(d){var e=c[d];e.drmInfos.some(function(b){return!!b.licenseServerUri})==b&&(0==e.audioCapabilities.length&&delete e.audioCapabilities,0==e.videoCapabilities.length&&delete e.videoCapabilities,g=g["catch"](function(){return this.c?Promise.reject():navigator.requestMediaKeySystemAccess(d,[e])}.bind(this)));}.bind(this));}.bind(b));g=g["catch"](function(){return Promise.reject(new A(2,
6,6001))});g=g.then(function(b){if(this.c)return Promise.reject();var d=0<=navigator.userAgent.indexOf("Edge/"),e=b.getConfiguration();this.u=(e.audioCapabilities||[]).concat(e.videoCapabilities||[]).map(function(b){return b.contentType});d&&(this.u=null);d=c[b.keySystem];pc(this,b.keySystem,d,d.drmInfos);return this.b.licenseServerUri?b.createMediaKeys():Promise.reject(new A(2,6,6012))}.bind(b)).then(function(b){if(this.c)return Promise.reject();this.j=b;this.L=!0;}.bind(b))["catch"](function(b){if(this.c)return Promise.resolve();
this.u=this.b=null;return b instanceof A?Promise.reject(b):Promise.reject(new A(2,6,6002,b.message))}.bind(b));e||(g=g["catch"](function(){}));f.reject();return g}
function oc(b,c){var d=c.keySystem;if(d){if(!c.licenseServerUri){var e=b.f.servers[d];e&&(c.licenseServerUri=e);}c.keyIds||(c.keyIds=[]);if(d=b.f.advanced[d])c.distinctiveIdentifierRequired||(c.distinctiveIdentifierRequired=d.distinctiveIdentifierRequired),c.persistentStateRequired||(c.persistentStateRequired=d.persistentStateRequired),c.videoRobustness||(c.videoRobustness=d.videoRobustness),c.audioRobustness||(c.audioRobustness=d.audioRobustness),c.serverCertificate||(c.serverCertificate=d.serverCertificate);}}
function mc(b){if(Ib(b.f.clearKeys))return null;var c=[],d=[],e;for(e in b.f.clearKeys){var f=b.f.clearKeys[e],g=Zb(e);f=Zb(f);g={kty:"oct",kid:Xb(g,!1),k:Xb(f,!1)};c.push(g);d.push(g.kid);}b=JSON.stringify({keys:c});d=JSON.stringify({kids:d});d=[{initData:new Uint8Array(Sb(d)),initDataType:"keyids"}];return{keySystem:"org.w3.clearkey",licenseServerUri:"data:application/json;base64,"+window.btoa(b),distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,
initData:d,keyIds:[]}}function nc(b,c){var d=b.f,e=Object.keys(d.servers);return!e.length||c.periods.some(function(b){return b.variants.some(function(b){return b.drmInfos.length})})?null:e.map(function(b){return{keySystem:b,licenseServerUri:d.servers[b],distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:[],keyIds:[]}})}
function pc(b,c,d,e){var f=[],g=[],h=[],k=[];qc(e,f,g,h,k);b.b={keySystem:c,licenseServerUri:f[0],distinctiveIdentifierRequired:"required"==d.distinctiveIdentifier,persistentStateRequired:"required"==d.persistentState,audioRobustness:d.audioCapabilities?d.audioCapabilities[0].robustness:"",videoRobustness:d.videoCapabilities?d.videoCapabilities[0].robustness:"",serverCertificate:g[0],initData:h,keyIds:k};}
function qc(b,c,d,e,f){function g(b,c){return b.keyId&&b.keyId==c.keyId?!0:b.initDataType==c.initDataType&&ac(b.initData,c.initData)}b.forEach(function(b){-1==c.indexOf(b.licenseServerUri)&&c.push(b.licenseServerUri);b.serverCertificate&&-1==hb(d,b.serverCertificate,ac)&&d.push(b.serverCertificate);b.initData&&b.initData.forEach(function(b){-1==hb(e,b,g)&&e.push(b);});if(b.keyIds)for(var h=0;h<b.keyIds.length;++h)-1==f.indexOf(b.keyIds[h])&&f.push(b.keyIds[h]);});}
n.Gd=function(b){for(var c=new Uint8Array(b.initData),d=0;d<this.a.length;++d)if(2*c.length===this.a[d].initData.length){if(bc(c,this.a[d].initData))return}else if(ac(c,this.a[d].initData))return;kc(this,b.initDataType,c);};
function jc(b,c){try{var d=b.j.createSession("persistent-license");}catch(g){var e=new A(2,6,6005,g.message);b.h(e);return Promise.reject(e)}E(b.g,d,"message",b.Ec.bind(b));E(b.g,d,"keystatuseschange",b.Ac.bind(b));var f={initData:null,ia:d,loaded:!1,Rb:Infinity,oa:null};b.a.push(f);return d.load(c).then(function(b){if(!this.c){if(b)return f.loaded=!0,this.a.every(function(b){return b.loaded})&&this.i.resolve(),d;this.a.splice(this.a.indexOf(f),1);this.h(new A(2,6,6013));}}.bind(b),function(b){this.c||
(this.a.splice(this.a.indexOf(f),1),this.h(new A(2,6,6005,b.message)));}.bind(b))}
function kc(b,c,d){try{var e=b.fa?b.j.createSession("persistent-license"):b.j.createSession();}catch(f){b.h(new A(2,6,6005,f.message));return}E(b.g,e,"message",b.Ec.bind(b));E(b.g,e,"keystatuseschange",b.Ac.bind(b));b.a.push({initData:d,ia:e,loaded:!1,Rb:Infinity,oa:null});e.generateRequest(c,d.buffer)["catch"](function(b){if(!this.c){for(var c=0;c<this.a.length;++c)if(this.a[c].ia==e){this.a.splice(c,1);break}this.h(new A(2,6,6006,b.message));}}.bind(b));}
n.Ec=function(b){this.f.delayLicenseRequestUntilPlayed&&this.l.paused&&!this.X?this.J.push(b):rc(this,b);};
function rc(b,c){for(var d=c.target,e,f=0;f<b.a.length;f++)if(b.a[f].ia==d){e=b.a[f];break}f=rb([b.b.licenseServerUri],b.f.retryParameters);f.body=c.message;f.method="POST";"com.microsoft.playready"!=b.b.keySystem&&"com.chromecast.playready"!=b.b.keySystem||sc(f);b.m.onEvent(new F("drmsessionbeforeupdate",{isCertificateRequest:2==c.message.byteLength}));b.m.La.request(2,f).promise.then(function(b){return this.c?Promise.reject():d.update(b.data).then(function(){this.m.onEvent(new F("drmsessionupdate",
{isCertificateRequest:2==c.message.byteLength}));e&&(e.oa&&e.oa.resolve(),setTimeout(function(){e.loaded=!0;this.a.every(function(b){return b.loaded})&&this.i.resolve();}.bind(this),1E3*tc));}.bind(this))}.bind(b),function(b){if(this.c)return Promise.resolve();b=new A(2,6,6007,b);this.h(b);e&&e.oa&&e.oa.reject(b);}.bind(b))["catch"](function(b){if(this.c)return Promise.resolve();b=new A(2,6,6008,b.message);this.h(b);e&&e.oa&&e.oa.reject(b);}.bind(b));}
function sc(b){var c=Qb(b.body,!0,!0);if(-1==c.indexOf("PlayReadyKeyMessage"))b.headers["Content-Type"]="text/xml; charset=utf-8";else{c=(new DOMParser).parseFromString(c,"application/xml");for(var d=c.getElementsByTagName("HttpHeader"),e=0;e<d.length;++e)b.headers[d[e].querySelector("name").textContent]=d[e].querySelector("value").textContent;b.body=Yb(c.querySelector("Challenge").textContent).buffer;}}
n.Ac=function(b){b=b.target;var c;for(c=0;c<this.a.length&&this.a[c].ia!=b;++c);if(c!=this.a.length){var d=!1;b.keyStatuses.forEach(function(b,e){if("string"==typeof e){var f=e;e=b;b=f;}if("com.microsoft.playready"==this.b.keySystem&&16==e.byteLength){f=new DataView(e);var g=f.getUint32(0,!0),l=f.getUint16(4,!0),m=f.getUint16(6,!0);f.setUint32(0,g,!1);f.setUint16(4,l,!1);f.setUint16(6,m,!1);}"com.microsoft.playready"==this.b.keySystem&&"status-pending"==b&&(b="usable");"status-pending"!=b&&(this.a[c].loaded=
!0);"expired"==b&&(d=!0);f=$b(new Uint8Array(e));this.R[f]=b;}.bind(this));var e=b.expiration-Date.now();(0>e||d&&1E3>e)&&!this.a[c].oa&&(this.a.splice(c,1),b.close()["catch"](function(){}));this.a.every(function(b){return b.loaded})&&(this.i.resolve(),Ub(this.G));}};n.me=function(){function b(b,c){return"expired"==c}this.o={};for(var c in this.R)this.o[c]=this.R[c];!Ib(this.o)&&Jb(this.o,b)&&this.h(new A(2,6,6014));this.m.vb(this.o);};
function uc(){var b=[],c=[{contentType:'video/mp4; codecs="avc1.42E01E"'},{contentType:'video/webm; codecs="vp8"'}],d=[{videoCapabilities:c,persistentState:"required",sessionTypes:["persistent-license"]},{videoCapabilities:c}],e={};"org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function(c){var f=navigator.requestMediaKeySystemAccess(c,d).then(function(b){var d=b.getConfiguration().sessionTypes;d=
d?0<=d.indexOf("persistent-license"):!1;0<=navigator.userAgent.indexOf("Tizen 3")&&(d=!1);e[c]={persistentState:d};return b.createMediaKeys()})["catch"](function(){e[c]=null;});b.push(f);});return Promise.all(b).then(function(){return e})}n.Rd=function(){for(var b=0;b<this.J.length;b++)rc(this,this.J[b]);this.X=!0;this.J=[];};function vc(b,c){var d=b.keySystem();return 0==c.drmInfos.length||c.drmInfos.some(function(b){return b.keySystem==d})}
function wc(b,c){if(!b.length)return c;if(!c.length)return b;for(var d=[],e=0;e<b.length;e++)for(var f=0;f<c.length;f++)if(b[e].keySystem==c[f].keySystem){var g=b[e];f=c[f];var h=[];h=h.concat(g.initData||[]);h=h.concat(f.initData||[]);var k=[];k=k.concat(g.keyIds);k=k.concat(f.keyIds);d.push({keySystem:g.keySystem,licenseServerUri:g.licenseServerUri||f.licenseServerUri,distinctiveIdentifierRequired:g.distinctiveIdentifierRequired||f.distinctiveIdentifierRequired,persistentStateRequired:g.persistentStateRequired||
f.persistentStateRequired,videoRobustness:g.videoRobustness||f.videoRobustness,audioRobustness:g.audioRobustness||f.audioRobustness,serverCertificate:g.serverCertificate||f.serverCertificate,initData:h,keyIds:k});break}return d}n.le=function(){this.a.forEach(function(b){var c=b.Rb,d=b.ia.expiration;isNaN(d)&&(d=Infinity);d!=c&&(this.m.onExpirationUpdated(b.ia.sessionId,d),b.Rb=d);}.bind(this));};var ec=1,tc=5,Vb=.5;function xc(b){return!b||1==b.length&&1E-6>b.end(0)-b.start(0)?null:b.length?b.end(b.length-1):null}function yc(b,c,d){d=void 0===d?0:d;return!b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0)||c>b.end(b.length-1)?!1:c+d>=b.start(0)}function zc(b,c){if(!b||!b.length||1==b.length&&1E-6>b.end(0)-b.start(0))return 0;for(var d=0,e=b.length-1;0<=e&&b.end(e)>c;--e)d+=b.end(e)-Math.max(b.start(e),c);return d}
function Ac(b){if(!b)return[];for(var c=[],d=0;d<b.length;d++)c.push({start:b.start(d),end:b.end(d)});return c}function H(b,c,d){this.startTime=b;this.endTime=c;this.payload=d;this.region=new Bc;this.position=null;this.positionAlign=Cc;this.size=100;this.textAlign=Dc;this.writingDirection=Ec;this.lineInterpretation=Fc;this.line=null;this.lineHeight="";this.lineAlign=Gc;this.displayAlign=Hc;this.fontSize=this.backgroundColor=this.color="";this.fontWeight=Ic;this.fontStyle=Jc;this.fontFamily="";this.textDecoration=[];this.wrapLine=!0;this.id="";}x("shaka.text.Cue",H);var Cc="auto";
H.positionAlign={LEFT:"line-left",RIGHT:"line-right",CENTER:"center",AUTO:Cc};var Dc="center",Kc={LEFT:"left",RIGHT:"right",CENTER:Dc,START:"start",END:"end"};H.textAlign=Kc;var Hc="before",Lc={BEFORE:Hc,CENTER:"center",AFTER:"after"};H.displayAlign=Lc;var Ec=0;H.writingDirection={HORIZONTAL_LEFT_TO_RIGHT:Ec,HORIZONTAL_RIGHT_TO_LEFT:1,VERTICAL_LEFT_TO_RIGHT:2,VERTICAL_RIGHT_TO_LEFT:3};var Fc=0;H.lineInterpretation={LINE_NUMBER:Fc,PERCENTAGE:1};var Gc="center",Mc={CENTER:Gc,START:"start",END:"end"};
H.lineAlign=Mc;var Ic=400;H.fontWeight={NORMAL:Ic,BOLD:700};var Jc="normal",Nc={NORMAL:Jc,ITALIC:"italic",OBLIQUE:"oblique"};H.fontStyle=Nc;H.textDecoration={UNDERLINE:"underline",LINE_THROUGH:"lineThrough",OVERLINE:"overline"};function Bc(){this.id="";this.regionAnchorY=this.regionAnchorX=this.viewportAnchorY=this.viewportAnchorX=0;this.height=this.width=100;this.viewportAnchorUnits=this.widthUnits=this.heightUnits=Oc;this.scroll=Pc;}x("shaka.text.CueRegion",Bc);var Oc=1;
Bc.units={PX:0,PERCENTAGE:Oc,LINES:2};var Pc="";Bc.scrollMode={NONE:Pc,UP:"up"};function Qc(){this.a=new muxjs.mp4.Transmuxer({keepOriginalTimestamps:!0});this.b=null;this.g=[];this.c=[];this.f=!1;this.a.on("data",this.i.bind(this));this.a.on("done",this.h.bind(this));}Qc.prototype.destroy=function(){this.a.dispose();this.a=null;return Promise.resolve()};function Rc(b,c){return window.muxjs&&"mp2t"==b.split(";")[0].split("/")[1]?c?MediaSource.isTypeSupported(Sc(c,b)):MediaSource.isTypeSupported(Sc("audio",b))||MediaSource.isTypeSupported(Sc("video",b)):!1}
function Sc(b,c){var d=c.replace("mp2t","mp4");"audio"==b&&(d=d.replace("video","audio"));var e=/avc1\.(66|77|100)\.(\d+)/.exec(d);if(e){var f="avc1.",g=e[1],h=Number(e[2]);f=("66"==g?f+"4200":"77"==g?f+"4d00":f+"6400")+(h>>4).toString(16);f+=(h&15).toString(16);d=d.replace(e[0],f);}return d}function Tc(b,c){b.f=!0;b.b=new z;b.g=[];b.c=[];var d=new Uint8Array(c);b.a.push(d);b.a.flush();b.f&&b.b.reject(new A(2,3,3018));return b.b}
Qc.prototype.i=function(b){for(var c=0;c<b.captions.length;c++){var d=b.captions[c];this.c.push(new H(d.startTime,d.endTime,d.text));}c=new Uint8Array(b.data.byteLength+b.initSegment.byteLength);c.set(b.initSegment,0);c.set(b.data,b.initSegment.byteLength);this.g.push(c);};Qc.prototype.h=function(){var b={data:cc.apply(null,this.g),cues:this.c};this.b.resolve(b);this.f=!1;};function Uc(b){this.f=null;this.c=b;this.i=this.g=0;this.h=Infinity;this.b=this.a=null;}var I={};x("shaka.text.TextEngine.registerParser",function(b,c){I[b]=c;});x("shaka.text.TextEngine.unregisterParser",function(b){delete I[b];});Uc.prototype.destroy=function(){this.c=this.f=null;return Promise.resolve()};Uc.prototype.Ce=function(b){this.c=b;};Uc.prototype.setDisplayer=Uc.prototype.Ce;
Uc.prototype.Ib=function(b){var c={periodStart:0,segmentStart:null,segmentEnd:0};try{return this.f.parseMedia(new Uint8Array(b),c)[0].startTime}catch(d){throw new A(2,2,2009,d);}};
function Vc(b,c,d,e){return Promise.resolve().then(function(){if(this.f&&this.c)if(null==d||null==e)this.f.parseInit(new Uint8Array(c));else{var b={periodStart:this.g,segmentStart:this.g+d,segmentEnd:this.g+e};b=this.f.parseMedia(new Uint8Array(c),b).filter(function(b){return b.startTime>=this.i&&b.startTime<this.h}.bind(this));this.c.append(b);null==this.a&&(this.a=Math.max(d,this.i));this.b=Math.min(e,this.h);}}.bind(b))}
Uc.prototype.remove=function(b,c){return Promise.resolve().then(function(){!this.c||!this.c.remove(b,c)||null==this.a||c<=this.a||b>=this.b||(b<=this.a&&c>=this.b?this.a=this.b=null:b<=this.a&&c<this.b?this.a=c:b>this.a&&c>=this.b&&(this.b=b));}.bind(this))};Uc.prototype.hc=function(b){this.c.append(b);};Uc.prototype.appendCues=Uc.prototype.hc;function Wc(b){this.f=b;this.o=null;this.b={};this.a=null;this.c={};this.i=new D;this.m=!1;this.h={};this.l=!1;b=this.j=new z;var c=new MediaSource;zb(this.i,c,"sourceopen",b.resolve);this.f.src=window.URL.createObjectURL(c);this.g=c;}
function Xc(){var b={};'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function(c){b[c]=!!I[c]||
MediaSource.isTypeSupported(c)||Rc(c);var d=c.split(";")[0];b[d]=b[d]||b[c];});return b}n=Wc.prototype;
n.destroy=function(){this.m=!0;var b=[],c;for(c in this.c){var d=this.c[c],e=d[0];this.c[c]=d.slice(0,1);e&&b.push(e.p["catch"](Cb));for(e=1;e<d.length;++e)d[e].p["catch"](Cb),d[e].p.reject();}this.a&&b.push(this.a.destroy());for(var f in this.h)b.push(this.h[f].destroy());this.f&&(this.f.removeAttribute("src"),this.f.load());return Promise.all(b).then(function(){this.i.destroy();this.o=this.a=this.g=this.f=this.i=null;this.b={};this.h={};this.c={};}.bind(this))};
n.init=function(b,c){var d=this;return this.j.then(function(){for(var e in b){var f=b[e];f=Mb(f.mimeType,f.codecs);"text"==e?Yc(d,f):(!c&&MediaSource.isTypeSupported(f)||!Rc(f,e)||(d.h[e]=new Qc,f=Sc(e,f)),f=d.g.addSourceBuffer(f),E(d.i,f,"error",d.Oe.bind(d,e)),E(d.i,f,"updateend",d.Na.bind(d,e)),d.b[e]=f,d.c[e]=[]);}})};function Yc(b,c){b.a||(b.a=new Uc(b.o));b.a.f=new I[c];}
function Zc(b,c){if("text"==c)var d=b.a.a;else d=$c(b,c),d=!d||1==d.length&&1E-6>d.end(0)-d.start(0)?null:1==d.length&&0>d.start(0)?0:d.length?d.start(0):null;return d}function ad(b,c){return"text"==c?b.a.b:xc($c(b,c))}function bd(b,c,d){if("text"==c)return b=b.a,null==b.b||b.b<d?0:b.b-Math.max(d,b.a);b=$c(b,c);return zc(b,d)}n.Eb=function(){var b=this.a&&null!=this.a.a?[{start:this.a.a,end:this.a.b}]:[];return{total:Ac(this.f.buffered),audio:Ac($c(this,"audio")),video:Ac($c(this,"video")),text:b}};
function $c(b,c){try{return b.b[c].buffered}catch(d){return null}}function cd(b,c,d,e,f){return"text"==c?Vc(b.a,d,e,f):b.h[c]?Tc(b.h[c],d).then(function(b){this.a||Yc(this,"text/vtt");this.l&&this.a.hc(b.cues);return dd(this,c,this.Sc.bind(this,c,b.data.buffer))}.bind(b)):dd(b,c,b.Sc.bind(b,c,d))}n.remove=function(b,c,d){return"text"==b?this.a.remove(c,d):dd(this,b,this.Tc.bind(this,b,c,d))};
function ed(b,c){return"text"==c?b.a?b.a.remove(0,Infinity):Promise.resolve():dd(b,c,b.Tc.bind(b,c,0,b.g.duration))}n.flush=function(b){return"text"==b?Promise.resolve():dd(this,b,this.jd.bind(this,b))};function fd(b,c,d,e,f){return"text"==c?(b.a.g=d,b=b.a,b.i=e,b.h=f,Promise.resolve()):Promise.all([dd(b,c,b.$c.bind(b,c)),dd(b,c,b.Ee.bind(b,c,d)),dd(b,c,b.Be.bind(b,c,e,f))])}n.endOfStream=function(b){return gd(this,function(){b?this.g.endOfStream(b):this.g.endOfStream();}.bind(this))};
n.ja=function(b){return gd(this,function(){this.g.duration=b;}.bind(this))};n.S=function(){return this.g.duration};n.Sc=function(b,c){this.b[b].appendBuffer(c);};n.Tc=function(b,c,d){d<=c?this.Na(b):this.b[b].remove(c,d);};n.$c=function(b){var c=this.b[b].appendWindowStart,d=this.b[b].appendWindowEnd;this.b[b].abort();this.b[b].appendWindowStart=c;this.b[b].appendWindowEnd=d;this.Na(b);};n.jd=function(b){this.f.currentTime-=.001;this.Na(b);};
n.Ee=function(b,c){0>c&&(c+=.001);this.b[b].timestampOffset=c;this.Na(b);};n.Be=function(b,c,d){this.b[b].appendWindowStart=0;this.b[b].appendWindowEnd=d;this.b[b].appendWindowStart=c;this.Na(b);};n.Oe=function(b){this.c[b][0].p.reject(new A(2,3,3014,this.f.error?this.f.error.code:0));};n.Na=function(b){var c=this.c[b][0];c&&(c.p.resolve(),hd(this,b));};
function dd(b,c,d){if(b.m)return Promise.reject();d={start:d,p:new z};b.c[c].push(d);if(1==b.c[c].length)try{d.start();}catch(e){"QuotaExceededError"==e.name?d.p.reject(new A(2,3,3017,c)):d.p.reject(new A(2,3,3015,e)),hd(b,c);}return d.p}
function gd(b,c){if(b.m)return Promise.reject();var d=[],e;for(e in b.b){var f=new z,g={start:function(b){b.resolve();}.bind(null,f),p:f};b.c[e].push(g);d.push(f);1==b.c[e].length&&g.start();}return Promise.all(d).then(function(){try{c();}catch(l){var b=Promise.reject(new A(2,3,3015,l));}for(var d in this.b)hd(this,d);return b}.bind(b),function(){return Promise.reject()}.bind(b))}function hd(b,c){b.c[c].shift();var d=b.c[c][0];if(d)try{d.start();}catch(e){d.p.reject(new A(2,3,3015,e)),hd(b,c);}}function id(b,c,d){return d==c||b>=jd&&d==c.split("-")[0]||b>=kd&&d.split("-")[0]==c.split("-")[0]?!0:!1}var jd=1,kd=2;function ld(b){b=b.toLowerCase().split("-");var c=md[b[0]];c&&(b[0]=c);return b.join("-")}
var md={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bod:"bo",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",ces:"cs",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cym:"cy",cze:"cs",dan:"da",deu:"de",div:"dv",dut:"nl",dzo:"dz",ell:"el",eng:"en",epo:"eo",est:"et",eus:"eu",ewe:"ee",fao:"fo",fas:"fa",fij:"fj",fin:"fi",fra:"fr",fre:"fr",
fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",hye:"hy",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",isl:"is",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kat:"ka",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",
lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mkd:"mk",mlg:"mg",mlt:"mt",mon:"mn",mri:"mi",msa:"ms",mya:"my",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nld:"nl",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",ron:"ro",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slk:"sk",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",sqi:"sq",
srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zho:"zh",zul:"zu"};function nd(b,c,d){var e=b.video;return e&&(e.width<c.minWidth||e.width>c.maxWidth||e.width>d.width||e.height<c.minHeight||e.height>c.maxHeight||e.height>d.height||e.width*e.height<c.minPixels||e.width*e.height>c.maxPixels)||b.bandwidth<c.minBandwidth||b.bandwidth>c.maxBandwidth?!1:!0}function od(b,c,d){var e=!1;b.variants.forEach(function(b){var f=b.allowedByApplication;b.allowedByApplication=nd(b,c,d);f!=b.allowedByApplication&&(e=!0);});return e}
function pd(b,c,d,e){e.variants=e.variants.filter(function(e){return b&&b.L&&!vc(b,e)?!1:qd(e.audio,b,c)&&qd(e.video,b,d)});e.textStreams=e.textStreams.filter(function(b){return!!I[Mb(b.mimeType,b.codecs)]});}
function qd(b,c,d){if(!b)return!0;var e=null;c&&c.L&&(e=c.u);c=Mb(b.mimeType,b.codecs);var f=Mb(b.mimeType,b.codecs),g=b.mimeType,h;for(h in Nb){var k=b[h],l=Nb[h];k&&(g+="; "+l+'="'+k+'"');}return!(I[f]||MediaSource.isTypeSupported(g)||Rc(f,b.type))||e&&b.encrypted&&0>e.indexOf(c)||d&&(b.mimeType!=d.mimeType||b.codecs.split(".")[0]!=d.codecs.split(".")[0])?!1:!0}
function rd(b){var c=b.audio,d=b.video,e=c?c.codecs:null,f=d?d.codecs:null,g=[];f&&g.push(f);e&&g.push(e);var h=[];d&&h.push(d.mimeType);c&&h.push(c.mimeType);h=h[0]||null;var k=[];c&&k.push(c.kind);d&&k.push(d.kind);k=k[0]||null;var l=[];c&&l.push.apply(l,c.roles);d&&l.push.apply(l,d.roles);l=gb(l);b={id:b.id,active:!1,type:"variant",bandwidth:b.bandwidth,language:b.language,label:null,kind:k,width:null,height:null,frameRate:null,mimeType:h,codecs:g.join(", "),audioCodec:e,videoCodec:f,primary:b.primary,
roles:l,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null};d&&(b.videoId=d.id,b.width=d.width||null,b.height=d.height||null,b.frameRate=d.frameRate||null,b.videoBandwidth=d.bandwidth||null);c&&(b.audioId=c.id,b.channelsCount=c.channelsCount,b.audioBandwidth=c.bandwidth||null,b.label=c.label);return b}
function sd(b){return{id:b.id,active:!1,type:"text",bandwidth:0,language:b.language,label:b.label,kind:b.kind||null,width:null,height:null,frameRate:null,mimeType:b.mimeType,codecs:b.codecs||null,audioCodec:null,videoCodec:null,primary:b.primary,roles:b.roles,videoId:null,audioId:null,channelsCount:null,audioBandwidth:null,videoBandwidth:null}}function td(b){var c=[],d=ud(b.variants);b=b.textStreams;d.forEach(function(b){c.push(rd(b));});b.forEach(function(b){c.push(sd(b));});return c}
function vd(b,c,d){return ud(b.variants).map(function(b){var e=rd(b);b.video&&b.audio?e.active=d==b.video.id&&c==b.audio.id:b.video?e.active=d==b.video.id:b.audio&&(e.active=c==b.audio.id);return e})}function wd(b,c){return b.textStreams.map(function(b){var d=sd(b);d.active=c==b.id;return d})}function xd(b,c){for(var d=0;d<b.variants.length;d++)if(b.variants[d].id==c.id)return b.variants[d];return null}function yd(b){return b.allowedByApplication&&b.allowedByKeySystem}
function ud(b){return b.filter(function(b){return yd(b)})}function zd(b,c,d,e,f){b=Ad(b,c,d,f);return Bd(b,e)}
function Ad(b,c,d,e){var f=ud(b),g=f;b=f.filter(function(b){return b.primary});b.length&&(g=b);var h=g.length?g[0].language:"";g=g.filter(function(b){return b.language==h});if(c){var k=ld(c);[kd,jd,0].forEach(function(b){var c=!1;f.forEach(function(d){k=ld(k);var f=ld(d.language);id(b,k,f)&&(c?g.push(d):(g=[d],c=!0),e&&(e.audio=!0));});});}if(d&&(c=Cd(g,d),c.length))return c;c=g.map(function(b){return(b.audio?b.audio.roles:[]).concat(b.video?b.video.roles:[])}).reduce(Bb,[]);return c.length?Cd(g,c[0]):
g}function Bd(b,c){var d=b.filter(function(b){return b.audio&&b.audio.channelsCount}).reduce(function(b,c){var d=c.audio.channelsCount;b[d]?b[d].push(c):b[d]=[c];return b},{}),e=Object.keys(d);if(0==e.length)return b;var f=e.filter(function(b){return b<=c});return f.length?d[Math.max.apply(null,f)]:d[Math.min.apply(null,e)]}
function Dd(b,c,d,e){var f=b,g=b.filter(function(b){return b.primary});g.length&&(f=g);var h=f.length?f[0].language:"";f=f.filter(function(b){return b.language==h});if(c){var k=ld(c);[kd,jd,0].forEach(function(c){var d=!1;b.forEach(function(b){var g=ld(b.language);id(c,k,g)&&(d?f.push(b):(f=[b],d=!0),e&&(e.text=!0));});});}if(d){if(c=Ed(f,d),c.length)return c}else if(c=f.filter(function(b){return 0==b.roles.length}),c.length)return c;c=f.map(function(b){return b.roles}).reduce(Bb,[]);return c.length?
Ed(f,c[0]):f}function Cd(b,c){return b.filter(function(b){return b.audio&&0<=b.audio.roles.indexOf(c)||b.video&&0<=b.video.roles.indexOf(c)})}function Ed(b,c){return b.filter(function(b){return 0<=b.roles.indexOf(c)})}function Fd(b,c,d){for(var e=0;e<d.length;e++)if(d[e].audio==b&&d[e].video==c)return d[e];return null}function Gd(b,c,d){function e(b,c){return null==b?null==c:c.id==b}for(var f=0;f<d.length;f++)if(e(b,d[f].audio)&&e(c,d[f].video))return d[f];return null}
function Hd(b,c){for(var d=b.periods.length-1;0<d;--d)if(c+Hb>=b.periods[d].startTime)return d;return 0}function Id(b,c){for(var d=0;d<b.periods.length;++d){var e=b.periods[d];if("text"==c.type)for(var f=0;f<e.textStreams.length;++f){if(e.textStreams[f]==c)return d}else for(f=0;f<e.variants.length;++f){var g=e.variants[f];if(g.audio==c||g.video==c||g.video&&g.video.trickModeVideo==c)return d}}return-1}function J(){this.h=null;this.f=!1;this.b=new Ea;this.c=[];this.i=!1;this.a=this.g=null;}x("shaka.abr.SimpleAbrManager",J);J.prototype.stop=function(){this.h=null;this.f=!1;this.c=[];this.g=null;};J.prototype.stop=J.prototype.stop;J.prototype.init=function(b){this.h=b;};J.prototype.init=J.prototype.init;
J.prototype.chooseVariant=function(){var b=Jd(this.a.restrictions,this.c),c=this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.c.length&&!b.length&&(b=Jd(null,this.c),b=[b[0]]);for(var d=b[0]||null,e=0;e<b.length;++e){var f=b[e],g=(b[e+1]||{bandwidth:Infinity}).bandwidth/this.a.bandwidthUpgradeTarget;c>=f.bandwidth/this.a.bandwidthDowngradeTarget&&c<=g&&(d=f);}this.g=Date.now();return d};J.prototype.chooseVariant=J.prototype.chooseVariant;J.prototype.enable=function(){this.f=!0;};
J.prototype.enable=J.prototype.enable;J.prototype.disable=function(){this.f=!1;};J.prototype.disable=J.prototype.disable;J.prototype.segmentDownloaded=function(b,c){var d=this.b;if(!(16E3>c)){var e=8E3*c/b,f=b/1E3;d.a+=c;Ca(d.b,f,e);Ca(d.c,f,e);}if(null!=this.g&&this.f)a:{if(!this.i){if(!(128E3<=this.b.a))break a;this.i=!0;}else if(Date.now()-this.g<1E3*this.a.switchInterval)break a;d=this.chooseVariant();this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);this.h(d);}};
J.prototype.segmentDownloaded=J.prototype.segmentDownloaded;J.prototype.getBandwidthEstimate=function(){return this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate)};J.prototype.getBandwidthEstimate=J.prototype.getBandwidthEstimate;J.prototype.setVariants=function(b){this.c=b;};J.prototype.setVariants=J.prototype.setVariants;J.prototype.configure=function(b){this.a=b;};J.prototype.configure=J.prototype.configure;
function Jd(b,c){b&&(c=c.filter(function(c){return nd(c,b,{width:Infinity,height:Infinity})}));return c.sort(function(b,c){return b.bandwidth-c.bandwidth})}var Kd="ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),Od="buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),Pd=["loop","playbackRate"],Qd=["pause","play"],Rd="adaptation buffering emsg error loading streaming texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged unloading".split(" "),Sd={getAudioLanguages:2,getAudioLanguagesAndRoles:2,getBufferedInfo:2,
getConfiguration:2,getExpiration:2,getManifestUri:2,getPlaybackRate:2,getTextLanguages:2,getTextLanguagesAndRoles:2,getTextTracks:2,getStats:5,usingEmbeddedTextTrack:2,getVariantTracks:2,isAudioOnly:10,isBuffering:1,isInProgress:1,isLive:10,isTextTrackVisible:1,keySystem:10,seekRange:1},Td={getPlayheadTimeAsDate:1,getPresentationStartTimeAsDate:20},Ud=[["getConfiguration","configure"]],Vd=[["isTextTrackVisible","setTextTrackVisibility"]],Wd="addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectEmbeddedTextTrack selectTextLanguage selectTextTrack selectVariantTrack setTextTrackVisibility trickPlay".split(" "),
Xd=["attach","detach","load","unload"];
function Yd(b){return JSON.stringify(b,function(b,d){if("function"!=typeof d){if(d instanceof Event||d instanceof F){var c={},f;for(f in d){var g=d[f];g&&"object"==typeof g?"detail"==f&&(c[f]=g):f in Event||(c[f]=g);}return c}if(d instanceof TimeRanges)for(c={__type__:"TimeRanges",length:d.length,start:[],end:[]},f=0;f<d.length;++f)c.start.push(d.start(f)),c.end.push(d.end(f));else c="number"==typeof d?isNaN(d)?"NaN":isFinite(d)?d:0>d?"-Infinity":"Infinity":d;return c}})}
function Zd(b){return JSON.parse(b,function(b,d){return"NaN"==d?NaN:"-Infinity"==d?-Infinity:"Infinity"==d?Infinity:d&&"object"==typeof d&&"TimeRanges"==d.__type__?$d(d):d})}function $d(b){return{length:b.length,start:function(c){return b.start[c]},end:function(c){return b.end[c]}}}function ae(b,c,d,e,f,g){this.J=b;this.g=c;this.L=d;this.j=!1;this.A=e;this.G=f;this.s=g;this.b=this.h=!1;this.u="";this.i=null;this.l=this.yc.bind(this);this.m=this.Nd.bind(this);this.a={video:{},player:{}};this.o=0;this.c={};this.f=null;}var be=!1,ce=null;n=ae.prototype;n.destroy=function(){de(this);ce&&ee(this);this.G=this.A=this.g=null;this.b=this.h=!1;this.m=this.l=this.f=this.c=this.a=this.i=null;return Promise.resolve()};n.Z=function(){return this.b};n.Vb=function(){return this.u};
n.init=function(){if(window.chrome&&chrome.cast&&chrome.cast.isAvailable){delete window.__onGCastApiAvailable;this.h=!0;this.g();var b=new chrome.cast.SessionRequest(this.J);b=new chrome.cast.ApiConfig(b,this.zc.bind(this),this.Ud.bind(this),"origin_scoped");chrome.cast.initialize(b,function(){},function(){});be&&setTimeout(this.g.bind(this),20);(b=ce)&&b.status!=chrome.cast.SessionStatus.STOPPED?this.zc(b):ce=null;}else window.__onGCastApiAvailable=function(b){b&&this.init();}.bind(this);};
n.Yb=function(b){this.i=b;this.b&&fe({type:"appData",appData:this.i});};n.cast=function(b){if(!this.h)return Promise.reject(new A(1,8,8E3));if(!be)return Promise.reject(new A(1,8,8001));if(this.b)return Promise.reject(new A(1,8,8002));this.f=new z;chrome.cast.requestSession(this.Sb.bind(this,b),this.xc.bind(this));return this.f};n.sb=function(){this.b&&(de(this),ce&&(ee(this),ce.stop(function(){},function(){}),ce=null));};
n.get=function(b,c){if("video"==b){if(0<=Qd.indexOf(c))return this.Ic.bind(this,b,c)}else if("player"==b){if(Td[c]&&!this.get("player","isLive")())return function(){};if(0<=Wd.indexOf(c))return this.Ic.bind(this,b,c);if(0<=Xd.indexOf(c))return this.qe.bind(this,b,c);if(Sd[c])return this.Fc.bind(this,b,c)}return this.Fc(b,c)};n.set=function(b,c,d){this.a[b][c]=d;fe({type:"set",targetName:b,property:c,value:d});};
n.Sb=function(b,c){ce=c;c.addUpdateListener(this.l);c.addMessageListener("urn:x-cast:com.google.shaka.v2",this.m);this.yc();fe({type:"init",initState:b,appData:this.i});this.f.resolve();};n.xc=function(b){var c=8003;switch(b.code){case "cancel":c=8004;break;case "timeout":c=8005;break;case "receiver_unavailable":c=8006;}this.f.reject(new A(2,8,c,b));};n.Fc=function(b,c){return this.a[b][c]};n.Ic=function(b,c){fe({type:"call",targetName:b,methodName:c,args:Array.prototype.slice.call(arguments,2)});};
n.qe=function(b,c){var d=Array.prototype.slice.call(arguments,2),e=new z,f=this.o.toString();this.o++;this.c[f]=e;fe({type:"asyncCall",targetName:b,methodName:c,args:d,id:f});return e};n.zc=function(b){var c=this.s();this.f=new z;this.j=!0;this.Sb(c,b);};n.Ud=function(b){be="available"==b;this.g();};function ee(b){var c=ce;c.removeUpdateListener(b.l);c.removeMessageListener("urn:x-cast:com.google.shaka.v2",b.m);}
n.yc=function(){var b=ce?"connected"==ce.status:!1;if(this.b&&!b){this.G();for(var c in this.a)this.a[c]={};de(this);}this.u=(this.b=b)?ce.receiver.friendlyName:"";this.g();};function de(b){for(var c in b.c){var d=b.c[c];delete b.c[c];d.reject(new A(1,7,7E3));}}
n.Nd=function(b,c){var d=Zd(c);switch(d.type){case "event":var e=d.event;this.A(d.targetName,new F(e.type,e));break;case "update":e=d.update;for(var f in e){d=this.a[f]||{};for(var g in e[f])d[g]=e[f][g];}this.j&&(this.L(),this.j=!1);break;case "asyncComplete":if(f=d.id,d=d.error,g=this.c[f],delete this.c[f],g)if(d){f=new A(d.severity,d.category,d.code);for(e in d)f[e]=d[e];g.reject(f);}else g.resolve();}};function fe(b){b=Yd(b);ce.sendMessage("urn:x-cast:com.google.shaka.v2",b,function(){},Ga);}function K(){this.zb=new wb;this.ib=this;}K.prototype.addEventListener=function(b,c){this.zb.push(b,c);};K.prototype.removeEventListener=function(b,c){this.zb.remove(b,c);};K.prototype.dispatchEvent=function(b){for(var c=this.zb.get(b.type)||[],d=0;d<c.length;++d){b.target=this.ib;b.currentTarget=this.ib;var e=c[d];try{e.handleEvent?e.handleEvent(b):e.call(this,b);}catch(f){}if(b.a)break}return b.defaultPrevented};function L(b,c,d){K.call(this);this.c=b;this.b=c;this.i=this.g=this.f=this.j=this.h=null;this.a=new ae(d,this.Je.bind(this),this.Ke.bind(this),this.Le.bind(this),this.Me.bind(this),this.pc.bind(this));ge(this);}Aa(L,K);x("shaka.cast.CastProxy",L);L.prototype.destroy=function(b){b&&this.a&&this.a.sb();b=[this.i?this.i.destroy():null,this.b?this.b.destroy():null,this.a?this.a.destroy():null];this.a=this.i=this.j=this.h=this.b=this.c=null;return Promise.all(b)};L.prototype.destroy=L.prototype.destroy;
L.prototype.yd=function(){return this.h};L.prototype.getVideo=L.prototype.yd;L.prototype.qd=function(){return this.j};L.prototype.getPlayer=L.prototype.qd;L.prototype.bd=function(){return this.a?this.a.h&&be:!1};L.prototype.canCast=L.prototype.bd;L.prototype.Z=function(){return this.a?this.a.Z():!1};L.prototype.isCasting=L.prototype.Z;L.prototype.Vb=function(){return this.a?this.a.Vb():""};L.prototype.receiverName=L.prototype.Vb;L.prototype.cast=function(){var b=this.pc();return this.a.cast(b).then(function(){if(this.b)return this.b.gb()}.bind(this))};
L.prototype.cast=L.prototype.cast;L.prototype.Yb=function(b){this.a.Yb(b);};L.prototype.setAppData=L.prototype.Yb;L.prototype.Qe=function(){var b=this.a;if(b.b){var c=b.s();chrome.cast.requestSession(b.Sb.bind(b,c),b.xc.bind(b));}};L.prototype.suggestDisconnect=L.prototype.Qe;L.prototype.sb=function(){this.a.sb();};L.prototype.forceDisconnect=L.prototype.sb;
function ge(b){b.a.init();b.i=new D;Kd.forEach(function(b){E(this.i,this.c,b,this.Ye.bind(this));}.bind(b));Rd.forEach(function(b){E(this.i,this.b,b,this.je.bind(this));}.bind(b));b.h={};for(var c in b.c)Object.defineProperty(b.h,c,{configurable:!1,enumerable:!0,get:b.Xe.bind(b,c),set:b.Ze.bind(b,c)});b.j={};for(var d in b.b)Object.defineProperty(b.j,d,{configurable:!1,enumerable:!0,get:b.ie.bind(b,d)});b.f=new K;b.f.ib=b.h;b.g=new K;b.g.ib=b.j;}n=L.prototype;
n.pc=function(){var b={video:{},player:{},playerAfterLoad:{},manifest:this.b.Gb(),startTime:null};this.c.pause();Pd.forEach(function(c){b.video[c]=this.c[c];}.bind(this));this.c.ended||(b.startTime=this.c.currentTime);Ud.forEach(function(c){var d=c[1];c=this.b[c[0]]();b.player[d]=c;}.bind(this));Vd.forEach(function(c){var d=c[1];c=this.b[c[0]]();b.playerAfterLoad[d]=c;}.bind(this));return b};n.Je=function(){this.dispatchEvent(new F("caststatuschanged"));};
n.Ke=function(){this.f.dispatchEvent(new F(this.h.paused?"pause":"play"));};
n.Me=function(){var b=this;Ud.forEach(function(b){var c=b[1];b=this.a.get("player",b[0])();this.b[c](b);}.bind(this));var c=this.a.get("player","getManifestUri")(),d=this.a.get("video","ended"),e=Promise.resolve(),f=this.c.autoplay,g=null;d||(g=this.a.get("video","currentTime"));c&&(this.c.autoplay=!1,e=this.b.load(c,g));var h={};Pd.forEach(function(b){h[b]=this.a.get("video",b);}.bind(this));e.then(function(){b.c&&(Pd.forEach(function(b){this.c[b]=h[b];}.bind(b)),Vd.forEach(function(b){var c=b[1];b=
this.a.get("player",b[0])();this.b[c](b);}.bind(b)),b.c.autoplay=f,c&&b.c.play());},function(c){b.b.dispatchEvent(new F("error",{detail:c}));});};n.Xe=function(b){if("addEventListener"==b)return this.f.addEventListener.bind(this.f);if("removeEventListener"==b)return this.f.removeEventListener.bind(this.f);if(this.a.Z()&&0==Object.keys(this.a.a.video).length){var c=this.c[b];if("function"!=typeof c)return c}return this.a.Z()?this.a.get("video",b):(b=this.c[b],"function"==typeof b&&(b=b.bind(this.c)),b)};
n.Ze=function(b,c){this.a.Z()?this.a.set("video",b,c):this.c[b]=c;};n.Ye=function(b){this.a.Z()||this.f.dispatchEvent(new F(b.type,b));};
n.ie=function(b){if("addEventListener"==b)return this.g.addEventListener.bind(this.g);if("removeEventListener"==b)return this.g.removeEventListener.bind(this.g);if("getMediaElement"==b)return function(){return this.h}.bind(this);if("getNetworkingEngine"==b)return this.b.qc.bind(this.b);if(this.a.Z()){if("getManifest"==b||"drmInfo"==b)return function(){Fa(b+"() does not work while casting!");return null};if("attach"==b||"detach"==b)return function(){Fa(b+"() does not work while casting!");return Promise.resolve()}}return this.a.Z()&&
0==Object.keys(this.a.a.video).length&&Sd[b]||!this.a.Z()?this.b[b].bind(this.b):this.a.get("player",b)};n.je=function(b){this.a.Z()||this.g.dispatchEvent(b);};n.Le=function(b,c){this.a.Z()&&("video"==b?this.f.dispatchEvent(c):"player"==b&&this.g.dispatchEvent(c));};function he(b,c,d,e){K.call(this);this.a=b;this.b=c;this.c=new D;this.s={video:b,player:c};this.u=d||function(){};this.A=e||function(b){return b};this.o=!1;this.h=!0;this.g=0;this.m=!1;this.j=!0;this.l=this.i=this.f=null;ie(this);}Aa(he,K);x("shaka.cast.CastReceiver",he);he.prototype.isConnected=function(){return this.o};he.prototype.isConnected=he.prototype.isConnected;he.prototype.Bd=function(){return this.h};he.prototype.isIdle=he.prototype.Bd;
he.prototype.destroy=function(){var b=[this.c?this.c.destroy():null,this.b?this.b.destroy():null];null!=this.l&&window.clearTimeout(this.l);this.u=this.s=this.c=this.b=this.a=null;this.o=!1;this.h=!0;this.l=this.i=this.f=null;return Promise.all(b).then(function(){cast.receiver.CastReceiverManager.getInstance().stop();})};he.prototype.destroy=he.prototype.destroy;
function ie(b){var c=cast.receiver.CastReceiverManager.getInstance();c.onSenderConnected=b.Dc.bind(b);c.onSenderDisconnected=b.Dc.bind(b);c.onSystemVolumeChanged=b.hd.bind(b);b.i=c.getCastMessageBus("urn:x-cast:com.google.cast.media");b.i.onMessage=b.Id.bind(b);b.f=c.getCastMessageBus("urn:x-cast:com.google.shaka.v2");b.f.onMessage=b.Xd.bind(b);c.start();Kd.forEach(function(b){E(this.c,this.a,b,this.Gc.bind(this,"video"));}.bind(b));Rd.forEach(function(b){E(this.c,this.b,b,this.Gc.bind(this,"player"));}.bind(b));
cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?b.b.Zb(3840,2160):b.b.Zb(1920,1080);E(b.c,b.a,"loadeddata",function(){this.m=!0;}.bind(b));E(b.c,b.b,"loading",function(){this.h=!1;je(this);}.bind(b));E(b.c,b.a,"playing",function(){this.h=!1;je(this);}.bind(b));E(b.c,b.a,"pause",function(){je(this);}.bind(b));E(b.c,b.b,"unloading",function(){this.h=!0;je(this);}.bind(b));E(b.c,b.a,"ended",function(){window.setTimeout(function(){this.a&&this.a.ended&&
(this.h=!0,je(this));}.bind(this),5E3);}.bind(b));}n=he.prototype;n.Dc=function(){this.g=0;this.j=!0;this.o=0!=cast.receiver.CastReceiverManager.getInstance().getSenders().length;je(this);};function je(b){Promise.resolve().then(function(){this.b&&(this.dispatchEvent(new F("caststatuschanged")),ke(this)||le(this,0));}.bind(b));}
function me(b,c,d){for(var e in c.player)b.b[e](c.player[e]);b.u(d);d=Promise.resolve();var f=b.a.autoplay;c.manifest&&(b.a.autoplay=!1,d=b.b.load(c.manifest,c.startTime));d.then(function(){if(b.b){for(var d in c.video)b.a[d]=c.video[d];for(var e in c.playerAfterLoad)b.b[e](c.playerAfterLoad[e]);b.a.autoplay=f;c.manifest&&(b.a.play(),le(b,0));}},function(c){b.b.dispatchEvent(new F("error",{detail:c}));});}n.Gc=function(b,c){this.b&&(this.Tb(),ne(this,{type:"event",targetName:b,event:c},this.f));};
n.Tb=function(){null!=this.l&&window.clearTimeout(this.l);this.l=window.setTimeout(this.Tb.bind(this),500);var b={video:{},player:{}};Od.forEach(function(c){b.video[c]=this.a[c];}.bind(this));if(this.b.O())for(var c in Td)0==this.g%Td[c]&&(b.player[c]=this.b[c]());for(var d in Sd)0==this.g%Sd[d]&&(b.player[d]=this.b[d]());if(c=cast.receiver.CastReceiverManager.getInstance().getSystemVolume())b.video.volume=c.level,b.video.muted=c.muted;this.m&&(this.g+=1);ne(this,{type:"update",update:b},this.f);ke(this);};
function ke(b){return b.j&&(b.a.duration||b.b.O())?(oe(b),b.j=!1,!0):!1}function oe(b){var c={contentId:b.b.Gb(),streamType:b.b.O()?"LIVE":"BUFFERED",duration:b.a.duration,contentType:""};le(b,0,c);}n.hd=function(){var b=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();b&&ne(this,{type:"update",update:{video:{volume:b.level,muted:b.muted}}},this.f);ne(this,{type:"event",targetName:"video",event:{type:"volumechange"}},this.f);};
n.Xd=function(b){var c=Zd(b.data);switch(c.type){case "init":this.g=0;this.m=!1;this.j=!0;me(this,c.initState,c.appData);this.Tb();break;case "appData":this.u(c.appData);break;case "set":var d=c.targetName,e=c.property;c=c.value;if("video"==d){var f=cast.receiver.CastReceiverManager.getInstance();if("volume"==e){f.setSystemVolumeLevel(c);break}else if("muted"==e){f.setSystemVolumeMuted(c);break}}this.s[d][e]=c;break;case "call":d=this.s[c.targetName];d[c.methodName].apply(d,c.args);break;case "asyncCall":d=
c.targetName;e=c.methodName;"player"==d&&"load"==e&&(this.g=0,this.m=!1);f=c.id;b=b.senderId;var g=this.s[d];c=g[e].apply(g,c.args);"player"==d&&"load"==e&&(c=c.then(function(){this.j=!0;}.bind(this)));c.then(this.Nc.bind(this,b,f,null),this.Nc.bind(this,b,f));}};
n.Id=function(b){var c=Zd(b.data);switch(c.type){case "PLAY":this.a.play();le(this,0);break;case "PAUSE":this.a.pause();le(this,0);break;case "SEEK":b=c.currentTime;var d=c.resumeState;null!=b&&(this.a.currentTime=Number(b));d&&"PLAYBACK_START"==d?(this.a.play(),le(this,0)):d&&"PLAYBACK_PAUSE"==d&&(this.a.pause(),le(this,0));break;case "STOP":this.b.gb().then(function(){this.b&&le(this,0);}.bind(this));break;case "GET_STATUS":le(this,Number(c.requestId));break;case "VOLUME":d=c.volume;b=d.level;d=
d.muted;var e=this.a.volume,f=this.a.muted;null!=b&&(this.a.volume=Number(b));null!=d&&(this.a.muted=d);e==this.a.volume&&f==this.a.muted||le(this,0);break;case "LOAD":this.g=0;this.j=this.m=!1;b=c.currentTime;d=this.A(c.media.contentId);this.a.autoplay=!0;this.b.load(d,b).then(function(){this.b&&oe(this);}.bind(this))["catch"](function(b){var d="LOAD_FAILED";7==b.category&&7E3==b.code&&(d="LOAD_CANCELLED");ne(this,{requestId:Number(c.requestId),type:d},this.i);}.bind(this));break;default:ne(this,{requestId:Number(c.requestId),
type:"INVALID_REQUEST",reason:"INVALID_COMMAND"},this.i);}};n.Nc=function(b,c,d){this.b&&ne(this,{type:"asyncComplete",id:c,error:d},this.f,b);};function ne(b,c,d,e){b.o&&(b=Yd(c),e?d.getCastChannel(e).send(b):d.broadcast(b));}
function le(b,c,d){var e=b.a.playbackRate;var f=pe;f=b.h?f.IDLE:b.b.tc()?f.Vc:b.a.paused?f.Xc:f.Yc;e={mediaSessionId:0,playbackRate:e,playerState:f,currentTime:b.a.currentTime,supportedMediaCommands:15,volume:{level:b.a.volume,muted:b.a.muted}};d&&(e.media=d);ne(b,{requestId:c,type:"MEDIA_STATUS",status:[e]},b.i);}var pe={IDLE:"IDLE",Yc:"PLAYING",Vc:"BUFFERING",Xc:"PAUSED"};function qe(b,c){var d=M(b,c);return 1!=d.length?null:d[0]}function M(b,c){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&b.tagName==c})}function re(b){return Array.prototype.filter.call(b.childNodes,function(b){return b instanceof Element&&"pssh"==b.localName&&"urn:mpeg:cenc:2013"==b.namespaceURI})}function se(b,c,d){return b.hasAttributeNS(c,d)?b.getAttributeNS(c,d):null}
function te(b){return Array.prototype.every.call(b.childNodes,function(b){return b.nodeType==Node.TEXT_NODE||b.nodeType==Node.CDATA_SECTION_NODE})?b.textContent.trim():null}function N(b,c,d,e){var f=null;b=b.getAttribute(c);null!=b&&(f=d(b));return null==f?void 0!=e?e:null:f}function ue(b){if(!b)return null;/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(b)&&(b+="Z");b=Date.parse(b);return isNaN(b)?null:Math.floor(b/1E3)}
function ve(b){if(!b)return null;b=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(b);if(!b)return null;b=31536E3*Number(b[1]||null)+2592E3*Number(b[2]||null)+86400*Number(b[3]||null)+3600*Number(b[4]||null)+60*Number(b[5]||null)+Number(b[6]||null);return isFinite(b)?b:null}function we(b){var c=/([0-9]+)-([0-9]+)/.exec(b);if(!c)return null;b=Number(c[1]);if(!isFinite(b))return null;c=Number(c[2]);return isFinite(c)?{start:b,end:c}:null}
function xe(b){b=Number(b);return 0===b%1?b:null}function ye(b){b=Number(b);return 0===b%1&&0<b?b:null}function ze(b){b=Number(b);return 0===b%1&&0<=b?b:null}function Ae(b){var c;b=(c=b.match(/^(\d+)\/(\d+)$/))?Number(c[1]/c[2]):Number(b);return isNaN(b)?null:b}var Be={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"};
function Ce(b,c,d){b=De(b);var e=null,f=[],g=[],h=b.map(function(b){return b.keyId}).filter(Db);if(h.length&&1<h.filter(Eb).length)throw new A(2,4,4010);d||(g=b.filter(function(b){return"urn:mpeg:dash:mp4protection:2011"==b.Mc?(e=b.init||e,!1):!0}),g.length&&(f=Ee(e,c,g),0==f.length&&(f=[Gb("",e)])));!b.length||!d&&g.length||(f=G(Be).filter(function(b){return"org.w3.clearkey"!=b}).map(function(b){return Gb(b,e)}));var k=h[0]||null;k&&f.forEach(function(b){b.initData.forEach(function(b){b.keyId=k;});});
return{jc:k,cf:e,drmInfos:f,oc:!0}}function Fe(b,c,d,e){var f=Ce(b,c,e);if(d.oc){b=1==d.drmInfos.length&&!d.drmInfos[0].keySystem;c=0==f.drmInfos.length;if(0==d.drmInfos.length||b&&!c)d.drmInfos=f.drmInfos;d.oc=!1;}else if(0<f.drmInfos.length&&(d.drmInfos=d.drmInfos.filter(function(b){return f.drmInfos.some(function(c){return c.keySystem==b.keySystem})}),0==d.drmInfos.length))throw new A(2,4,4008);return f.jc||d.jc}
function Ee(b,c,d){return d.map(function(d){var e=Be[d.Mc];return e?[Gb(e,d.init||b)]:c(d.node)||[]}).reduce(Bb,[])}
function De(b){return b.map(function(b){var c=b.getAttribute("schemeIdUri"),e=se(b,"urn:mpeg:cenc:2013","default_KID"),f=re(b).map(te);if(!c)return null;c=c.toLowerCase();if(e&&(e=e.replace(/-/g,"").toLowerCase(),0<=e.indexOf(" ")))throw new A(2,4,4009);var g=[];try{g=f.map(function(b){return{initDataType:"cenc",initData:Yb(b),keyId:null}});}catch(h){throw new A(2,4,4007);}return{node:b,Mc:c,keyId:e,init:0<g.length?g:null}}).filter(Db)}function Ge(b,c,d,e,f){var g={RepresentationID:c,Number:d,Bandwidth:e,Time:f};return b.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,function(b,c,d,e){if("$$"==b)return"$";var f=g[c];if(null==f)return b;"RepresentationID"==c&&d&&(d=void 0);"Time"==c&&(f=Math.round(f));switch(e){case void 0:case "d":case "i":case "u":b=f.toString();break;case "o":b=f.toString(8);break;case "x":b=f.toString(16);break;case "X":b=f.toString(16).toUpperCase();break;default:b=f.toString();}d=
window.parseInt(d,10)||1;return Array(Math.max(0,d-b.length)+1).join("0")+b})}
function He(b,c){var d=Ie(b,c,"timescale"),e=1;d&&(e=ye(d)||1);d=Ie(b,c,"duration");(d=ye(d||""))&&(d/=e);var f=Ie(b,c,"startNumber"),g=Number(Ie(b,c,"presentationTimeOffset"))||0,h=ze(f||"");if(null==f||null==h)h=1;var k=Je(b,c,"SegmentTimeline");f=null;if(k){f=e;var l=b.M.duration||Infinity;k=M(k,"S");for(var m=[],r=0,t=0;t<k.length;++t){var u=k[t],w=N(u,"t",ze),y=N(u,"d",ze);u=N(u,"r",xe);null!=w&&(w-=g);if(!y)break;w=null!=w?w:r;u=u||0;if(0>u)if(t+1<k.length){u=N(k[t+1],"t",ze);if(null==u)break;
else if(w>=u)break;u=Math.ceil((u-w)/y)-1;}else{if(Infinity==l)break;else if(w/f>=l)break;u=Math.ceil((l*f-w)/y)-1;}0<m.length&&w!=r&&(m[m.length-1].end=w/f);for(var Ha=0;Ha<=u;++Ha)r=w+y,m.push({start:w/f,end:r/f,Ue:w}),w=r;}f=m;}return{timescale:e,P:d,Ca:h,da:g/e||0,ec:g,H:f}}function Ie(b,c,d){return[c(b.v),c(b.U),c(b.ba)].filter(Db).map(function(b){return b.getAttribute(d)}).reduce(function(b,c){return b||c})}
function Je(b,c,d){return[c(b.v),c(b.U),c(b.ba)].filter(Db).map(function(b){return qe(b,d)}).reduce(function(b,c){return b||c})}function Ke(b,c){var d=new DOMParser;try{var e=Ob(b);var f=d.parseFromString(e,"text/xml");}catch(h){}if(f&&f.documentElement.tagName==c)var g=f.documentElement;return g&&0<g.getElementsByTagName("parsererror").length?null:g}
function Le(b,c,d,e,f,g){for(var h=se(b,"http://www.w3.org/1999/xlink","href"),k=se(b,"http://www.w3.org/1999/xlink","actuate")||"onRequest",l=0;l<b.attributes.length;l++){var m=b.attributes[l];"http://www.w3.org/1999/xlink"==m.namespaceURI&&(b.removeAttributeNS(m.namespaceURI,m.localName),--l);}if(5<=g)return ab(new A(2,4,4028));if("onLoad"!=k)return ab(new A(2,4,4027));var r=Fb([e],[h]);return f.request(0,rb(r,c)).V(function(e){e=Ke(e.data,b.tagName);if(!e)return ab(new A(2,4,4001,h));for(;b.childNodes.length;)b.removeChild(b.childNodes[0]);
for(;e.childNodes.length;){var k=e.childNodes[0];e.removeChild(k);b.appendChild(k);}for(k=0;k<e.attributes.length;k++){var l=e.attributes[k].nodeName,m=e.getAttribute(l);b.setAttribute(l,m);}return Me(b,c,d,r[0],f,g+1)})}
function Me(b,c,d,e,f,g){g=g||0;if(se(b,"http://www.w3.org/1999/xlink","href")){var h=Le(b,c,d,e,f,g);d&&(h=h.V(void 0,function(){return Me(b,c,d,e,f,g)}));return h}for(h=0;h<b.childNodes.length;h++){var k=b.childNodes[h];k instanceof Element&&"urn:mpeg:dash:resolve-to-zero:2013"==se(k,"http://www.w3.org/1999/xlink","href")&&(b.removeChild(k),--h);}h=[];for(k=0;k<b.childNodes.length;k++){var l=b.childNodes[k];l.nodeType==Node.ELEMENT_NODE&&h.push(Me(l,c,d,e,f,g));}return eb(h).V(function(){return b})}
function O(b,c,d){this.c=b;this.b=c;this.a=d;}x("shaka.media.InitSegmentReference",O);O.prototype.Bb=function(){return this.c()};O.prototype.createUris=O.prototype.Bb;O.prototype.Hb=function(){return this.b};O.prototype.getStartByte=O.prototype.Hb;O.prototype.Fb=function(){return this.a};O.prototype.getEndByte=O.prototype.Fb;function P(b,c,d,e,f,g){this.position=b;this.startTime=c;this.endTime=d;this.c=e;this.b=f;this.a=g;}x("shaka.media.SegmentReference",P);P.prototype.T=function(){return this.position};
P.prototype.getPosition=P.prototype.T;P.prototype.Ib=function(){return this.startTime};P.prototype.getStartTime=P.prototype.Ib;P.prototype.md=function(){return this.endTime};P.prototype.getEndTime=P.prototype.md;P.prototype.Bb=function(){return this.c()};P.prototype.createUris=P.prototype.Bb;P.prototype.Hb=function(){return this.b};P.prototype.getStartByte=P.prototype.Hb;P.prototype.Fb=function(){return this.a};P.prototype.getEndByte=P.prototype.Fb;function Q(b,c){this.D=b;this.b=c==Ne;this.a=0;}x("shaka.util.DataViewReader",Q);var Ne=1;Q.Endianness={$e:0,af:Ne};Q.prototype.ga=function(){return this.a<this.D.byteLength};Q.prototype.hasMoreData=Q.prototype.ga;Q.prototype.T=function(){return this.a};Q.prototype.getPosition=Q.prototype.T;Q.prototype.nd=function(){return this.D.byteLength};Q.prototype.getLength=Q.prototype.nd;Q.prototype.ca=function(){try{var b=this.D.getUint8(this.a);this.a+=1;return b}catch(c){Oe();}};Q.prototype.readUint8=Q.prototype.ca;
Q.prototype.ab=function(){try{var b=this.D.getUint16(this.a,this.b);this.a+=2;return b}catch(c){Oe();}};Q.prototype.readUint16=Q.prototype.ab;Q.prototype.B=function(){try{var b=this.D.getUint32(this.a,this.b);this.a+=4;return b}catch(c){Oe();}};Q.prototype.readUint32=Q.prototype.B;Q.prototype.Hc=function(){try{var b=this.D.getInt32(this.a,this.b);this.a+=4;return b}catch(c){Oe();}};Q.prototype.readInt32=Q.prototype.Hc;
Q.prototype.Qa=function(){try{if(this.b){var b=this.D.getUint32(this.a,!0);var c=this.D.getUint32(this.a+4,!0);}else c=this.D.getUint32(this.a,!1),b=this.D.getUint32(this.a+4,!1);}catch(d){Oe();}if(2097151<c)throw new A(2,3,3001);this.a+=8;return c*Math.pow(2,32)+b};Q.prototype.readUint64=Q.prototype.Qa;Q.prototype.Ba=function(b){this.a+b>this.D.byteLength&&Oe();var c=new Uint8Array(this.D.buffer,this.D.byteOffset+this.a,b);this.a+=b;return new Uint8Array(c)};Q.prototype.readBytes=Q.prototype.Ba;
Q.prototype.F=function(b){this.a+b>this.D.byteLength&&Oe();this.a+=b;};Q.prototype.skip=Q.prototype.F;Q.prototype.Lc=function(b){this.a<b&&Oe();this.a-=b;};Q.prototype.rewind=Q.prototype.Lc;Q.prototype.seek=function(b){(0>b||b>this.D.byteLength)&&Oe();this.a=b;};Q.prototype.seek=Q.prototype.seek;Q.prototype.Ub=function(){for(var b=this.a;this.ga()&&0!=this.D.getUint8(this.a);)this.a+=1;b=new Uint8Array(this.D.buffer,this.D.byteOffset+b,this.a-b);this.a+=1;return Ob(b)};
Q.prototype.readTerminatedString=Q.prototype.Ub;function Oe(){throw new A(2,3,3E3);}function R(){this.c=[];this.b=[];this.a=!1;}x("shaka.util.Mp4Parser",R);R.prototype.C=function(b,c){var d=Pe(b);this.c[d]=0;this.b[d]=c;return this};R.prototype.box=R.prototype.C;R.prototype.Y=function(b,c){var d=Pe(b);this.c[d]=1;this.b[d]=c;return this};R.prototype.fullBox=R.prototype.Y;R.prototype.stop=function(){this.a=!0;};R.prototype.stop=R.prototype.stop;
R.prototype.parse=function(b,c){var d=new Uint8Array(b);d=new Q(new DataView(d.buffer,d.byteOffset,d.byteLength),0);for(this.a=!1;d.ga()&&!this.a;)this.wb(0,d,c);};R.prototype.parse=R.prototype.parse;
R.prototype.wb=function(b,c,d){var e=c.T(),f=c.B(),g=c.B();switch(f){case 0:f=c.D.byteLength-e;break;case 1:f=c.Qa();}var h=this.b[g];if(h){var k=null,l=null;1==this.c[g]&&(l=c.B(),k=l>>>24,l&=16777215);g=e+f;d&&g>c.D.byteLength&&(g=c.D.byteLength);g-=c.T();c=0<g?c.Ba(g):new Uint8Array(0);c=new Q(new DataView(c.buffer,c.byteOffset,c.byteLength),0);h({parser:this,partialOkay:d||!1,version:k,flags:l,reader:c,size:f,start:e+b});}else c.F(Math.min(e+f-c.T(),c.D.byteLength-c.T()));};
R.prototype.parseNext=R.prototype.wb;function S(b){for(;b.reader.ga()&&!b.parser.a;)b.parser.wb(b.start,b.reader,b.partialOkay);}R.children=S;function Qe(b){for(var c=b.reader.B();0<c&&!b.parser.a;--c)b.parser.wb(b.start,b.reader,b.partialOkay);}R.sampleDescription=Qe;function Re(b){return function(c){b(c.reader.Ba(c.reader.D.byteLength-c.reader.T()));}}R.allData=Re;function Pe(b){for(var c=0,d=0;d<b.length;d++)c=c<<8|b.charCodeAt(d);return c}
function Se(b){return String.fromCharCode(b>>24&255,b>>16&255,b>>8&255,b&255)}R.typeToString=Se;function Te(b,c,d,e){var f,g=(new R).Y("sidx",function(b){f=Ue(c,e,d,b);});b&&g.parse(b);if(f)return f;throw new A(2,3,3004);}
function Ue(b,c,d,e){var f=[];e.reader.F(4);var g=e.reader.B();if(0==g)throw new A(2,3,3005);if(0==e.version){var h=e.reader.B();var k=e.reader.B();}else h=e.reader.Qa(),k=e.reader.Qa();e.reader.F(2);var l=e.reader.ab();b=b+e.size+k;for(k=0;k<l;k++){var m=e.reader.B(),r=(m&2147483648)>>>31;m&=2147483647;var t=e.reader.B();e.reader.F(4);if(1==r)throw new A(2,3,3006);f.push(new P(f.length,h/g-c,(h+t)/g-c,function(){return d},b,b+m-1));h+=t;b+=m;}e.parser.stop();return f}function T(b){this.a=b;}x("shaka.media.SegmentIndex",T);T.prototype.destroy=function(){this.a=null;return Promise.resolve()};T.prototype.destroy=T.prototype.destroy;T.prototype.find=function(b){for(var c=this.a.length-1;0<=c;--c){var d=this.a[c];if(b>=d.startTime&&b<d.endTime)return d.position}return this.a.length&&b<this.a[0].startTime?this.a[0].position:null};T.prototype.find=T.prototype.find;
T.prototype.get=function(b){if(0==this.a.length)return null;b-=this.a[0].position;return 0>b||b>=this.a.length?null:this.a[b]};T.prototype.get=T.prototype.get;T.prototype.offset=function(b){for(var c=0;c<this.a.length;++c)this.a[c].startTime+=b,this.a[c].endTime+=b;};T.prototype.offset=T.prototype.offset;
T.prototype.Nb=function(b){for(var c=[],d=0,e=0;d<this.a.length&&e<b.length;){var f=this.a[d],g=b[e];f.startTime<g.startTime?(c.push(f),d++):(f.startTime>g.startTime?0==d&&c.push(g):(.1<Math.abs(f.endTime-g.endTime)?c.push(new P(f.position,g.startTime,g.endTime,g.c,g.b,g.a)):c.push(f),d++),e++);}for(;d<this.a.length;)c.push(this.a[d++]);if(c.length)for(d=c[c.length-1].position+1;e<b.length;)f=b[e++],f=new P(d++,f.startTime,f.endTime,f.c,f.b,f.a),c.push(f);else c=b;this.a=c;};T.prototype.merge=T.prototype.Nb;
T.prototype.Db=function(b){for(var c=0;c<this.a.length;++c)if(this.a[c].endTime>b){this.a.splice(0,c);return}this.a=[];};T.prototype.evict=T.prototype.Db;function Ve(b,c){for(;b.a.length;)if(b.a[b.a.length-1].startTime>=c)b.a.pop();else break;for(;b.a.length;)if(0>=b.a[0].endTime)b.a.shift();else break;if(0!=b.a.length){var d=b.a[b.a.length-1];b.a[b.a.length-1]=new P(d.position,d.startTime,c,d.c,d.b,d.a);}}function We(b){this.b=b;this.a=new Q(b,0);Xe||(Xe=[new Uint8Array([255]),new Uint8Array([127,255]),new Uint8Array([63,255,255]),new Uint8Array([31,255,255,255]),new Uint8Array([15,255,255,255,255]),new Uint8Array([7,255,255,255,255,255]),new Uint8Array([3,255,255,255,255,255,255]),new Uint8Array([1,255,255,255,255,255,255,255])]);}var Xe;We.prototype.ga=function(){return this.a.ga()};
function Ye(b){var c=Ze(b);if(7<c.length)throw new A(2,3,3002);for(var d=0,e=0;e<c.length;e++)d=256*d+c[e];c=d;d=Ze(b);a:{for(e=0;e<Xe.length;e++)if(ac(d,Xe[e])){e=!0;break a}e=!1;}if(e)d=b.b.byteLength-b.a.T();else{if(8==d.length&&d[1]&224)throw new A(2,3,3001);e=d[0]&(1<<8-d.length)-1;for(var f=1;f<d.length;f++)e=256*e+d[f];d=e;}d=b.a.T()+d<=b.b.byteLength?d:b.b.byteLength-b.a.T();e=new DataView(b.b.buffer,b.b.byteOffset+b.a.T(),d);b.a.F(d);return new $e(c,e)}
function Ze(b){var c=b.a.ca(),d;for(d=1;8>=d&&!(c&1<<8-d);d++);if(8<d)throw new A(2,3,3002);var e=new Uint8Array(d);e[0]=c;for(c=1;c<d;c++)e[c]=b.a.ca();return e}function $e(b,c){this.id=b;this.a=c;}function af(b){if(8<b.a.byteLength)throw new A(2,3,3002);if(8==b.a.byteLength&&b.a.getUint8(0)&224)throw new A(2,3,3001);for(var c=0,d=0;d<b.a.byteLength;d++){var e=b.a.getUint8(d);c=256*c+e;}return c}function bf(){}
bf.prototype.parse=function(b,c,d,e){var f;c=new We(new DataView(c));if(440786851!=Ye(c).id)throw new A(2,3,3008);var g=Ye(c);if(408125543!=g.id)throw new A(2,3,3009);c=g.a.byteOffset;g=new We(g.a);for(f=null;g.ga();){var h=Ye(g);if(357149030==h.id){f=h;break}}if(!f)throw new A(2,3,3010);g=new We(f.a);f=1E6;for(h=null;g.ga();){var k=Ye(g);if(2807729==k.id)f=af(k);else if(17545==k.id)if(h=k,4==h.a.byteLength)h=h.a.getFloat32(0);else if(8==h.a.byteLength)h=h.a.getFloat64(0);else throw new A(2,3,3003);
}if(null==h)throw new A(2,3,3011);g=f/1E9;f=h*g;b=Ye(new We(new DataView(b)));if(475249515!=b.id)throw new A(2,3,3007);return cf(b,c,g,f,d,e)};function cf(b,c,d,e,f,g){function h(){return f}var k=[];b=new We(b.a);for(var l=null,m=null;b.ga();){var r=Ye(b);if(187==r.id){var t=df(r);t&&(r=d*t.Ve,t=c+t.pe,null!=l&&k.push(new P(k.length,l-g,r-g,h,m,t-1)),l=r,m=t);}}null!=l&&k.push(new P(k.length,l-g,e-g,h,m,null));return k}
function df(b){var c=new We(b.a);b=Ye(c);if(179!=b.id)throw new A(2,3,3013);b=af(b);c=Ye(c);if(183!=c.id)throw new A(2,3,3012);c=new We(c.a);for(var d=0;c.ga();){var e=Ye(c);if(241==e.id){d=af(e);break}}return{Ve:b,pe:d}}function ef(b,c){var d=Je(b,c,"Initialization");if(!d)return null;var e=b.v.ea,f=d.getAttribute("sourceURL");f&&(e=Fb(b.v.ea,[f]));f=0;var g=null;if(d=N(d,"range",we))f=d.start,g=d.end;return new O(function(){return e},f,g)}
function ff(b,c){var d=Number(Ie(b,gf,"presentationTimeOffset"))||0,e=Ie(b,gf,"timescale"),f=1;e&&(f=ye(e)||1);d=d/f||0;e=ef(b,gf);var g=b.v.contentType;f=b.v.mimeType.split("/")[1];if("text"!=g&&"mp4"!=f&&"webm"!=f)throw new A(2,4,4006);if("webm"==f&&!e)throw new A(2,4,4005);g=Je(b,gf,"RepresentationIndex");var h=Ie(b,gf,"indexRange"),k=b.v.ea;h=we(h||"");if(g){var l=g.getAttribute("sourceURL");l&&(k=Fb(b.v.ea,[l]));h=N(g,"range",we,h);}if(!h)throw new A(2,4,4002);f=hf(b,c,e,k,h.start,h.end,f,d);
return{createSegmentIndex:f.createSegmentIndex,findSegmentPosition:f.findSegmentPosition,getSegmentReference:f.getSegmentReference,initSegmentReference:e,da:d}}
function hf(b,c,d,e,f,g,h,k){var l=b.presentationTimeline,m=!b.Ga||!b.M.Jb,r=b.M.index,t=b.M.duration,u=c,w=null;return{createSegmentIndex:function(){var b=[u(e,f,g),"webm"==h?u(d.c(),d.b,d.a):null];u=null;return Promise.all(b).then(function(b){var c=b[0];b=b[1]||null;c="mp4"==h?Te(c,f,e,k):(new bf).parse(c,b,e,k);l.Ma(c,0==r);w=new T(c);m&&Ve(w,t);})},findSegmentPosition:function(b){return w.find(b)},getSegmentReference:function(b){return w.get(b)}}}function gf(b){return b.bb}function jf(b,c){var d=ef(b,kf);var e=lf(b);var f=He(b,kf),g=f.Ca;0==g&&(g=1);var h=0;f.P?h=f.P*(g-1):f.H&&0<f.H.length&&(h=f.H[0].start);e={P:f.P,startTime:h,Ca:g,da:f.da,H:f.H,Ka:e};if(!e.P&&!e.H&&1<e.Ka.length)throw new A(2,4,4002);if(!e.P&&!b.M.duration&&!e.H&&1==e.Ka.length)throw new A(2,4,4002);if(e.H&&0==e.H.length)throw new A(2,4,4002);g=f=null;b.ba.id&&b.v.id&&(g=b.ba.id+","+b.v.id,f=c[g]);h=mf(b.M.duration,e.Ca,b.v.ea,e);f?(f.Nb(h),g=b.presentationTimeline.Xa(),f.Db(g-b.M.start)):(b.presentationTimeline.Ma(h,
0==b.M.index),f=new T(h),g&&b.Ga&&(c[g]=f));b.Ga&&b.M.Jb||Ve(f,b.M.duration);return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:f.find.bind(f),getSegmentReference:f.get.bind(f),initSegmentReference:d,da:e.da}}function kf(b){return b.ra}
function mf(b,c,d,e){var f=e.Ka.length;e.H&&e.H.length!=e.Ka.length&&(f=Math.min(e.H.length,e.Ka.length));for(var g=[],h=e.startTime,k=0;k<f;k++){var l=e.Ka[k],m=Fb(d,[l.Dd]),r=void 0;r=null!=e.P?h+e.P:e.H?e.H[k].end:h+b;g.push(new P(k+c,h,r,function(b){return b}.bind(null,m),l.start,l.end));h=r;}return g}
function lf(b){return[b.v.ra,b.U.ra,b.ba.ra].filter(Db).map(function(b){return M(b,"SegmentURL")}).reduce(function(b,d){return 0<b.length?b:d}).map(function(c){c.getAttribute("indexRange")&&!b.sc&&(b.sc=!0);var d=c.getAttribute("media");c=N(c,"mediaRange",we,{start:0,end:null});return{Dd:d,start:c.start,end:c.end}})}function nf(b,c,d,e){var f=of(b);var g=He(b,pf);var h=Ie(b,pf,"media"),k=Ie(b,pf,"index");g={P:g.P,timescale:g.timescale,Ca:g.Ca,da:g.da,ec:g.ec,H:g.H,Mb:h,Za:k};h=g.Za?1:0;h+=g.H?1:0;h+=g.P?1:0;if(0==h)throw new A(2,4,4002);1!=h&&(g.Za&&(g.H=null),g.P=null);if(!g.Za&&!g.Mb)throw new A(2,4,4002);if(g.Za){d=b.v.mimeType.split("/")[1];if("mp4"!=d&&"webm"!=d)throw new A(2,4,4006);if("webm"==d&&!f)throw new A(2,4,4005);e=Ge(g.Za,b.v.id,null,b.bandwidth||null,null);e=Fb(b.v.ea,[e]);b=hf(b,c,f,e,0,null,
d,g.da);}else g.P?(e||b.presentationTimeline.Pb(g.P),b=qf(b,g)):(h=c=null,b.ba.id&&b.v.id&&(h=b.ba.id+","+b.v.id,c=d[h]),k=rf(b,g),e=!b.Ga||!b.M.Jb,c?(e&&Ve(new T(k),b.M.duration),c.Nb(k),d=b.presentationTimeline.Xa(),c.Db(d-b.M.start)):(b.presentationTimeline.Ma(k,0==b.M.index),c=new T(k),h&&b.Ga&&(d[h]=c)),e&&Ve(c,b.M.duration),b={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:c.find.bind(c),getSegmentReference:c.get.bind(c)});return{createSegmentIndex:b.createSegmentIndex,
findSegmentPosition:b.findSegmentPosition,getSegmentReference:b.getSegmentReference,initSegmentReference:f,da:g.da}}function pf(b){return b.eb}
function qf(b,c){var d=b.M.duration,e=c.P,f=c.Ca,g=c.timescale,h=c.Mb,k=b.bandwidth||null,l=b.v.id,m=b.v.ea;return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0>b||d&&b>=d?null:Math.floor(b/e)},getSegmentReference:function(b){var c=b*e,r=c+e;d&&(r=Math.min(r,d));return 0>r||d&&c>=d?null:new P(b,c,r,function(){var d=Ge(h,l,b+f,k,c*g);return Fb(m,[d])},0,null)}}}
function rf(b,c){for(var d=[],e=0;e<c.H.length;e++){var f=e+c.Ca;d.push(new P(f,c.H[e].start,c.H[e].end,function(b,c,d,e,f,r){b=Ge(b,c,f,d,r);return Fb(e,[b]).map(function(b){return b.toString()})}.bind(null,c.Mb,b.v.id,b.bandwidth||null,b.v.ea,f,c.H[e].Ue+c.ec),0,null));}return d}function of(b){var c=Ie(b,pf,"initialization");if(!c)return null;var d=b.v.id,e=b.bandwidth||null,f=b.v.ea;return new O(function(){var b=Ge(c,d,null,e,null);return Fb(f,[b])},0,null)}var sf={},tf={};x("shaka.media.ManifestParser.registerParserByExtension",function(b,c){tf[b]=c;});x("shaka.media.ManifestParser.registerParserByMime",function(b,c){sf[b]=c;});function uf(){var b={},c;for(c in sf)b[c]=!0;for(var d in tf)b[d]=!0;["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"].forEach(function(c){b[c]=!!sf[c];});["mpd","m3u8","ism"].forEach(function(c){b[c]=!!tf[c];});return b}
function vf(b,c,d,e){var f=e;f||(e=(new Ja(b)).aa.split("/").pop().split("."),1<e.length&&(e=e.pop().toLowerCase(),f=tf[e]));if(f)return Promise.resolve(f);d=rb([b],d);d.method="HEAD";return c.request(0,d).promise.then(function(c){(c=c.headers["content-type"])&&(c=c.toLowerCase());return(f=sf[c])?f:Promise.reject(new A(2,4,4E3,b))},function(b){b.severity=2;return Promise.reject(b)})}function U(b,c){this.f=b;this.l=c;this.c=this.b=Infinity;this.a=1;this.j=this.h=0;this.i=!0;this.g=0;}x("shaka.media.PresentationTimeline",U);U.prototype.S=function(){return this.b};U.prototype.getDuration=U.prototype.S;U.prototype.ja=function(b){this.b=b;};U.prototype.setDuration=U.prototype.ja;U.prototype.sd=function(){return this.f};U.prototype.getPresentationStartTime=U.prototype.sd;U.prototype.Oc=function(b){this.j=b;};U.prototype.setClockOffset=U.prototype.Oc;
U.prototype.xb=function(b){this.i=b;};U.prototype.setStatic=U.prototype.xb;U.prototype.$b=function(b){this.c=b;};U.prototype.setSegmentAvailabilityDuration=U.prototype.$b;U.prototype.Pc=function(b){this.l=b;};U.prototype.setDelay=U.prototype.Pc;U.prototype.Ma=function(b,c){0!=b.length&&(c&&(this.h=Math.max(this.h,b[0].startTime)),this.a=b.reduce(function(b,c){return Math.max(b,c.endTime-c.startTime)},this.a));};U.prototype.notifySegments=U.prototype.Ma;
U.prototype.Pb=function(b){this.a=Math.max(this.a,b);};U.prototype.notifyMaxSegmentDuration=U.prototype.Pb;U.prototype.O=function(){return Infinity==this.b&&!this.i};U.prototype.isLive=U.prototype.O;U.prototype.ya=function(){return Infinity!=this.b&&!this.i};U.prototype.isInProgress=U.prototype.ya;U.prototype.Xa=function(){if(Infinity==this.c)return this.g;var b=this.Ia()-this.c;return Math.max(this.g,b)};U.prototype.getSegmentAvailabilityStart=U.prototype.Xa;U.prototype.Qc=function(b){this.g=b;};
U.prototype.setUserSeekStart=U.prototype.Qc;U.prototype.Ia=function(){return this.O()||this.ya()?Math.min(Math.max(0,(Date.now()+this.j)/1E3-this.a-this.f),this.b):this.b};U.prototype.getSegmentAvailabilityEnd=U.prototype.Ia;U.prototype.Wa=function(b){var c=Math.max(this.h,this.g);if(Infinity==this.c)return c;var d=this.Ia()-this.c;b=Math.min(d+b,this.la());return Math.max(c,b)};U.prototype.getSafeSeekRangeStart=U.prototype.Wa;U.prototype.Ha=function(){return this.Wa(0)};
U.prototype.getSeekRangeStart=U.prototype.Ha;U.prototype.la=function(){var b=this.O()||this.ya()?this.l:0;return Math.max(0,this.Ia()-b)};U.prototype.getSeekRangeEnd=U.prototype.la;function wf(){this.a=this.b=null;this.h=[];this.c=null;this.j=[];this.i=1;this.l={};this.m=0;this.o=new Ba(5);this.g=null;this.f=new nb;}x("shaka.dash.DashParser",wf);n=wf.prototype;n.configure=function(b){this.b=b;};n.start=function(b,c){this.h=[b];this.a=c;return xf(this).then(function(b){this.a&&yf(this,b);return this.c}.bind(this))};n.stop=function(){this.b=this.a=null;this.h=[];this.c=null;this.j=[];this.l={};null!=this.g&&(window.clearTimeout(this.g),this.g=null);return this.f.destroy()};
n.update=function(){xf(this)["catch"](function(b){if(this.a)this.a.onError(b);}.bind(this));};n.onExpirationUpdated=function(){};function xf(b){var c=Date.now(),d=b.a.networkingEngine.request(0,rb(b.h,b.b.retryParameters));ob(b.f,d);return d.promise.then(function(c){if(b.a)return zf(b,c.data,c.uri)}).then(function(){var d=(Date.now()-c)/1E3;Ca(b.o,1,d);return d})}
function zf(b,c,d){c=Ke(c,"MPD");if(!c)throw new A(2,4,4001,d);c=Me(c,b.b.retryParameters,b.b.dash.xlinkFailGracefully,d,b.a.networkingEngine);ob(b.f,c);return c.promise.then(function(c){return Af(b,c,d)})}
function Af(b,c,d){d=[d];var e=M(c,"Location").map(te).filter(Db);0<e.length&&(d=b.h=e);e=M(c,"BaseURL").map(te);d=Fb(d,e);var f=N(c,"minBufferTime",ve);b.m=N(c,"minimumUpdatePeriod",ve,-1);var g=N(c,"availabilityStartTime",ue);e=N(c,"timeShiftBufferDepth",ve);var h=N(c,"suggestedPresentationDelay",ve),k=N(c,"maxSegmentDuration",ve),l=c.getAttribute("type")||"static";if(b.c)var m=b.c.presentationTimeline;else{var r=Math.max(b.b.dash.defaultPresentationDelay,1.5*f);m=new U(g,null!=h?h:r);}g=Bf(b,{Ga:"static"!=
l,presentationTimeline:m,ba:null,M:null,U:null,v:null,bandwidth:0,sc:!1},d,c);h=g.duration;var t=g.periods;m.xb("static"==l);"static"!=l&&g.kc||m.ja(h||Infinity);(l=m.O())&&!isNaN(b.b.availabilityWindowOverride)&&(e=b.b.availabilityWindowOverride);null==e&&(e=Infinity);m.$b(e);m.Pb(k||1);if(b.c)return Promise.resolve();c=M(c,"UTCTiming");return Cf(b,d,c,l).then(function(b){this.a&&(m.Oc(b),this.c={presentationTimeline:m,periods:t,offlineSessionIds:[],minBufferTime:f||0});}.bind(b))}
function Bf(b,c,d,e){var f=N(e,"mediaPresentationDuration",ve),g=[],h=0;e=M(e,"Period");for(var k=0;k<e.length;k++){var l=e[k];h=N(l,"start",ve,h);var m=N(l,"duration",ve),r=null;if(k!=e.length-1){var t=N(e[k+1],"start",ve);null!=t&&(r=t-h);}else null!=f&&(r=f-h);null==r&&(r=m);l=Df(b,c,d,{start:h,duration:r,node:l,index:k,Jb:null==r||k==e.length-1});g.push(l);m=c.ba.id;-1==b.j.indexOf(m)&&(b.j.push(m),b.c&&(b.a.filterNewPeriod(l),b.c.periods.push(l)));if(null==r){h=null;break}h+=r;}null==b.c&&b.a.filterAllPeriods(g);
return null!=f?{periods:g,duration:f,kc:!1}:{periods:g,duration:h,kc:!0}}
function Df(b,c,d,e){c.ba=Ef(e.node,null,d);c.M=e;c.ba.id||(c.ba.id="__shaka_period_"+e.start);M(e.node,"EventStream").forEach(b.ge.bind(b,e.start,e.duration));d=M(e.node,"AdaptationSet").map(b.ee.bind(b,c)).filter(Db);var f=d.map(function(b){return b.re}).reduce(Bb,[]),g=f.filter(Eb);if(c.Ga&&f.length!=g.length)throw new A(2,4,4018);var h=d.filter(function(b){return!b.dc});d.filter(function(b){return b.dc}).forEach(function(b){var c=b.streams[0],d=b.dc;h.forEach(function(b){b.id==d&&b.streams.forEach(function(b){b.trickModeVideo=
c;});});});d=Ff(h,"video");f=Ff(h,"audio");if(!d.length&&!f.length)throw new A(2,4,4004);f.length||(f=[null]);d.length||(d=[null]);c=[];for(g=0;g<f.length;g++)for(var k=0;k<d.length;k++)Gf(b,f[g],d[k],c);b=Ff(h,"text");d=[];for(f=0;f<b.length;f++)d.push.apply(d,b[f].streams);return{startTime:e.start,textStreams:d,variants:c}}function Ff(b,c){return b.filter(function(b){return b.contentType==c})}
function Gf(b,c,d,e){if(c||d)if(c&&d){var f=c.drmInfos;var g=d.drmInfos;if(f.length&&g.length?0<wc(f,g).length:1){g=wc(c.drmInfos,d.drmInfos);for(var h=0;h<c.streams.length;h++)for(var k=0;k<d.streams.length;k++)f=(d.streams[k].bandwidth||0)+(c.streams[h].bandwidth||0),f={id:b.i++,language:c.language,primary:c.Lb||d.Lb,audio:c.streams[h],video:d.streams[k],bandwidth:f,drmInfos:g,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}}else for(g=c||d,h=0;h<g.streams.length;h++)f=g.streams[h].bandwidth||
0,f={id:b.i++,language:g.language||"und",primary:g.Lb,audio:c?g.streams[h]:null,video:d?g.streams[h]:null,bandwidth:f,drmInfos:g.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0},e.push(f);}
n.ee=function(b,c){b.U=Ef(c,b.ba,null);var d=!1,e=M(c,"Role"),f=e.map(function(b){return b.getAttribute("value")}).filter(Db),g=void 0,h="text"==b.U.contentType;h&&(g="subtitle");for(var k=0;k<e.length;k++){var l=e[k].getAttribute("schemeIdUri");if(null==l||"urn:mpeg:dash:role:2011"==l)switch(l=e[k].getAttribute("value"),l){case "main":d=!0;break;case "caption":case "subtitle":g=l;}}var m=null,r=!1;M(c,"EssentialProperty").forEach(function(b){"http://dashif.org/guidelines/trickmode"==b.getAttribute("schemeIdUri")?
m=b.getAttribute("value"):r=!0;});if(r)return null;e=M(c,"ContentProtection");var t=Ce(e,this.b.dash.customScheme,this.b.dash.ignoreDrmInfo);e=ld(c.getAttribute("lang")||"und");l=c.getAttribute("label");k=M(c,"Representation");f=k.map(this.he.bind(this,b,t,g,e,l,d,f)).filter(function(b){return!!b});if(0==f.length){if(h)return null;throw new A(2,4,4003);}b.U.contentType&&"application"!=b.U.contentType||(b.U.contentType=Hf(f[0].mimeType,f[0].codecs),f.forEach(function(c){c.type=b.U.contentType;}));f.forEach(function(b){t.drmInfos.forEach(function(c){b.keyId&&
c.keyIds.push(b.keyId);});});h=k.map(function(b){return b.getAttribute("id")}).filter(Db);return{id:b.U.id||"__fake__"+this.i++,contentType:b.U.contentType,language:e,Lb:d,streams:f,drmInfos:t.drmInfos,dc:m,re:h}};
n.he=function(b,c,d,e,f,g,h,k){b.v=Ef(k,b.U,null);if(!If(b.v))return null;b.bandwidth=N(k,"bandwidth",ye)||0;var l=b.v.contentType;l="text"==l||"application"==l;try{var m=this.se.bind(this);if(b.v.bb)var r=ff(b,m);else if(b.v.ra)r=jf(b,this.l);else if(b.v.eb)r=nf(b,m,this.l,!!this.c);else{var t=b.v.ea,u=b.M.duration||0;r={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(b){return 0<=b&&b<u?1:null},getSegmentReference:function(b){return 1!=b?null:new P(1,0,u,function(){return t},
0,null)},initSegmentReference:null,da:0};}}catch(w){if(l&&4002==w.code)return null;throw w;}k=M(k,"ContentProtection");k=Fe(k,this.b.dash.customScheme,c,this.b.dash.ignoreDrmInfo);return{id:this.i++,createSegmentIndex:r.createSegmentIndex,findSegmentPosition:r.findSegmentPosition,getSegmentReference:r.getSegmentReference,initSegmentReference:r.initSegmentReference,presentationTimeOffset:r.da,mimeType:b.v.mimeType,codecs:b.v.codecs,frameRate:b.v.frameRate,bandwidth:b.bandwidth,width:b.v.width,height:b.v.height,
kind:d,encrypted:0<c.drmInfos.length,keyId:k,language:e,label:f,type:b.U.contentType,primary:g,trickModeVideo:null,containsEmsgBoxes:b.v.containsEmsgBoxes,roles:h,channelsCount:b.v.Qb}};n.Ne=function(){this.g=null;xf(this).then(function(b){this.a&&yf(this,b);}.bind(this))["catch"](function(b){this.a&&(b.severity=1,this.a.onError(b),yf(this,0));}.bind(this));};function yf(b,c){0>b.m||(b.g=window.setTimeout(b.Ne.bind(b),1E3*Math.max(3,b.m-c,Da(b.o))));}
function Ef(b,c,d){c=c||{contentType:"",mimeType:"",codecs:"",containsEmsgBoxes:!1,frameRate:void 0,Qb:null};d=d||c.ea;var e=M(b,"BaseURL").map(te),f=b.getAttribute("contentType")||c.contentType,g=b.getAttribute("mimeType")||c.mimeType,h=b.getAttribute("codecs")||c.codecs,k=N(b,"frameRate",Ae)||c.frameRate,l=!!M(b,"InbandEventStream").length,m=M(b,"AudioChannelConfiguration");m=Jf(m)||c.Qb;f||(f=Hf(g,h));return{ea:Fb(d,e),bb:qe(b,"SegmentBase")||c.bb,ra:qe(b,"SegmentList")||c.ra,eb:qe(b,"SegmentTemplate")||
c.eb,width:N(b,"width",ze)||c.width,height:N(b,"height",ze)||c.height,contentType:f,mimeType:g,codecs:h,frameRate:k,containsEmsgBoxes:l||c.containsEmsgBoxes,id:b.getAttribute("id"),Qb:m}}
function Jf(b){for(var c=0;c<b.length;++c){var d=b[c],e=d.getAttribute("schemeIdUri");if(e&&(d=d.getAttribute("value")))switch(e){case "urn:mpeg:dash:outputChannelPositionList:2012":return d.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":e=parseInt(d,10);if(!e)continue;return e;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":if(e=parseInt(d,
16)){for(b=0;e;)e&1&&++b,e>>=1;return b}}}return null}function If(b){var c=b.bb?1:0;c+=b.ra?1:0;c+=b.eb?1:0;if(0==c)return"text"==b.contentType||"application"==b.contentType?!0:!1;1!=c&&(b.bb&&(b.ra=null),b.eb=null);return!0}
function Kf(b,c,d,e){c=Fb(c,[d]);c=rb(c,b.b.retryParameters);c.method=e;c=b.a.networkingEngine.request(0,c);ob(b.f,c);return c.promise.then(function(b){if("HEAD"==e){if(!b.headers||!b.headers.date)return 0;b=b.headers.date;}else b=Ob(b.data);b=Date.parse(b);return isNaN(b)?0:b-Date.now()})}
function Cf(b,c,d,e){d=d.map(function(b){return{scheme:b.getAttribute("schemeIdUri"),value:b.getAttribute("value")}});var f=b.b.dash.clockSyncUri;e&&!d.length&&f&&d.push({scheme:"urn:mpeg:dash:utc:http-head:2014",value:f});return Ab(d,function(b){var d=b.value;switch(b.scheme){case "urn:mpeg:dash:utc:http-head:2014":case "urn:mpeg:dash:utc:http-head:2012":return Kf(this,c,d,"HEAD");case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return Kf(this,
c,d,"GET");case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return b=Date.parse(d),isNaN(b)?0:b-Date.now();case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":return Promise.reject();default:return Promise.reject()}}.bind(b))["catch"](function(){return 0})}
n.ge=function(b,c,d){var e=d.getAttribute("schemeIdUri")||"",f=d.getAttribute("value")||"",g=N(d,"timescale",ze)||1;M(d,"Event").forEach(function(d){var h=N(d,"presentationTime",ze)||0,l=N(d,"duration",ze)||0;h=h/g+b;l=h+l/g;null!=c&&(h=Math.min(h,b+c),l=Math.min(l,b+c));d={schemeIdUri:e,value:f,startTime:h,endTime:l,id:d.getAttribute("id")||"",eventElement:d};this.a.onTimelineRegionAdded(d);}.bind(this));};
n.se=function(b,c,d){b=rb(b,this.b.retryParameters);null!=c&&(b.headers.Range="bytes="+c+"-"+(null!=d?d:""));c=this.a.networkingEngine.request(1,b);ob(this.f,c);return c.promise.then(function(b){return b.data})};function Hf(b,c){return I[Mb(b,c)]?"text":b.split("/")[0]}tf.mpd=wf;sf["application/dash+xml"]=wf;function Lf(b,c,d,e){this.uri=b;this.type=c;this.a=d;this.segments=e||null;}function Mf(b,c,d,e){this.id=b;this.name=c;this.a=d;this.value=e||null;}Mf.prototype.toString=function(){function b(b){return b.name+'="'+b.value+'"'}return this.value?"#"+this.name+":"+this.value:0<this.a.length?"#"+this.name+":"+this.a.map(b).join(","):"#"+this.name};function Nf(b,c){this.name=b;this.value=c;}Mf.prototype.getAttribute=function(b){var c=this.a.filter(function(c){return c.name==b});return c.length?c[0]:null};
function Of(b,c,d){d=d||null;return(b=b.getAttribute(c))?b.value:d}function Pf(b,c){this.a=c;this.uri=b;}function Qf(b,c){return b.filter(function(b){return b.name==c})}function Rf(b,c){var d=Qf(b,c);return d.length?d[0]:null}function Sf(b,c,d){return b.filter(function(b){var e=b.getAttribute("TYPE");b=b.getAttribute("GROUP-ID");return e.value==c&&b.value==d})}function Tf(b,c){return Fb([b],[c])[0]}function Uf(b){this.b=b;this.a=0;}function Vf(b){Wf(b,/[ \t]+/gm);}function Wf(b,c){c.lastIndex=b.a;var d=c.exec(b.b);d=null==d?null:{position:d.index,length:d[0].length,ue:d};if(b.a==b.b.length||null==d||d.position!=b.a)return null;b.a+=d.length;return d.ue}function Xf(b){return b.a==b.b.length?null:(b=Wf(b,/[^ \t\n]*/gm))?b[0]:null}function Yf(){this.a=0;}
function Zf(b,c,d){c=Ob(c);c=c.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n").trim();var e=c.split(/\n+/m);if(!/^#EXTM3U($|[ \t\n])/m.test(e[0]))throw new A(2,4,4015);c=0;for(var f=1;f<e.length;f++)if(!/^#(?!EXT)/m.test(e[f])){var g=$f(b,e[f]);--b.a;if(0<=ag.indexOf(g.name)){c=1;break}else"EXT-X-STREAM-INF"==g.name&&(f+=1);}f=[];for(g=1;g<e.length;)if(/^#(?!EXT)/m.test(e[g]))g+=1;else{var h=$f(b,e[g]);if(0<=bg.indexOf(h.name)){if(1!=c)throw new A(2,4,4017);e=e.splice(g,e.length-g);b=cg(b,e,f);return new Lf(d,
c,f,b)}f.push(h);g+=1;"EXT-X-STREAM-INF"==h.name&&(h.a.push(new Nf("URI",e[g])),g+=1);}return new Lf(d,c,f)}function cg(b,c,d){var e=[],f=[];c.forEach(function(c){if(/^(#EXT)/.test(c))c=$f(b,c),0<=ag.indexOf(c.name)?d.push(c):f.push(c);else{if(/^#(?!EXT)/m.test(c))return[];e.push(new Pf(c.trim(),f));f=[];}});return e}
function $f(b,c){a:{var d=b.a++;var e=c.match(/^#(EXT[^:]*)(?::(.*))?$/);if(!e)throw new A(2,4,4016,c);var f=e[1],g=e[2];e=[];if(g&&0<=g.indexOf("=")){g=new Uf(g);for(var h,k=/([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;h=Wf(g,k);)e.push(new Nf(h[1],h[2]||h[3]));}else if(g){d=new Mf(d,f,e,g);break a}d=new Mf(d,f,e);}return d}var ag="EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(" "),bg="EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");function dg(b){try{var c=dg.parse(b);return cb({uri:b,data:c.data,headers:{"content-type":c.contentType}})}catch(d){return ab(d)}}x("shaka.net.DataUriPlugin",dg);
dg.parse=function(b){var c=b.split(":");if(2>c.length||"data"!=c[0])throw new A(2,1,1004,b);c=c.slice(1).join(":").split(",");if(2>c.length)throw new A(2,1,1004,b);var d=c[0];c=window.decodeURIComponent(c.slice(1).join(","));d=d.split(";");var e=null;1<d.length&&(e=d[1]);if("base64"==e)b=Yb(c).buffer;else{if(e)throw new A(2,1,1005,b);b=Sb(c);}return{data:b,contentType:d[0]}};qb("data",dg);function eg(){this.g=this.c=null;this.L=1;this.u={};this.J={};this.X={};this.a={};this.b=null;this.m="";this.s=new Yf;this.j=this.i=null;this.f=fg;this.o=null;this.l=0;this.A=Infinity;this.h=new nb;this.G=[];}x("shaka.hls.HlsParser",eg);n=eg.prototype;n.configure=function(b){this.g=b;};n.start=function(b,c){this.c=c;this.m=b;return gg(this,b).then(function(c){return hg(this,c.data,b).then(function(){ig(this,this.i);return this.o}.bind(this))}.bind(this))};
n.stop=function(){this.g=this.c=null;this.u={};this.J={};this.o=null;return this.h.destroy()};n.update=function(){if(this.f!=kg.pa){var b=[],c;for(c in this.a)b.push(lg(this,this.a[c],c));return Promise.all(b)}};
function lg(b,c,d){gg(b,d).then(function(b){var e=kg,g=Zf(this.s,b.data,d);if(1!=g.type)throw new A(2,4,4017);b=Rf(g.a,"EXT-X-MEDIA-SEQUENCE");var h=c.stream;mg(this,g,b?Number(b.value):0,h.mimeType,h.codecs).then(function(b){c.cb.a=b;b=b[b.length-1];Rf(g.a,"EXT-X-ENDLIST")&&(ng(this,e.pa),this.b.ja(b.endTime));}.bind(this));}.bind(b));}n.onExpirationUpdated=function(){};
function hg(b,c,d){c=Zf(b.s,c,d);if(0!=c.type)throw new A(2,4,4022);return og(b,c).then(function(b){this.c.filterAllPeriods([b]);var c=Infinity,d=0,e=0,k=Infinity;for(m in this.a){var l=this.a[m];c=Math.min(c,l.Ob);d=Math.max(d,l.Ob);e=Math.max(e,l.Cd);"text"!=l.stream.type&&(k=Math.min(k,l.duration));}var m=null;l=0;this.f!=kg.pa&&(m=Date.now()/1E3-e,l=3*this.l);this.b=new U(m,l);this.b.xb(this.f==kg.pa);pg(this);if(this.f!=kg.pa){c=3*this.l;this.b.Pc(c);this.i=this.A;this.f==kg.fc&&(isNaN(this.g.availabilityWindowOverride)||
(c=this.g.availabilityWindowOverride),this.b.$b(c));for(c=0;95443.7176888889<=d;)c+=95443.7176888889,d-=95443.7176888889;if(c)for(var r in this.a)d=this.a[r],95443.7176888889>d.Ob&&(d.stream.presentationTimeOffset=-c,d.cb.offset(c));}else{this.b.ja(k);for(var t in this.a)r=this.a[t],r.stream.presentationTimeOffset=c,r.cb.offset(-c),Ve(r.cb,k);}this.o={presentationTimeline:this.b,periods:[b],offlineSessionIds:[],minBufferTime:0};}.bind(b))}
function og(b,c){var d=c.a,e=Qf(c.a,"EXT-X-MEDIA").filter(function(b){return"SUBTITLES"==qg(b,"TYPE")}.bind(b)).map(function(b){return rg(this,b)}.bind(b));return Promise.all(e).then(function(b){var e=Qf(d,"EXT-X-STREAM-INF").map(function(b){return sg(this,b,c)}.bind(this));return Promise.all(e).then(function(c){return{startTime:0,variants:c.reduce(Bb,[]),textStreams:b}}.bind(this))}.bind(b))}
function sg(b,c,d){var e=Of(c,"CODECS","avc1.42E01E,mp4a.40.2").split(","),f=c.getAttribute("RESOLUTION"),g=null,h=null,k=Of(c,"FRAME-RATE"),l=Number(qg(c,"BANDWIDTH"));if(f){var m=f.value.split("x");g=m[0];h=m[1];}d=Qf(d.a,"EXT-X-MEDIA");var r=Of(c,"AUDIO"),t=Of(c,"VIDEO");r?d=Sf(d,"AUDIO",r):t&&(d=Sf(d,"VIDEO",t));if(m=tg("text",e)){var u=Of(c,"SUBTITLES");u&&(u=Sf(d,"SUBTITLES",u),u.length&&(b.u[u[0].id].stream.codecs=m));e.splice(e.indexOf(m),1);}d=d.map(function(b){return ug(this,b,e)}.bind(b));
var w=[],y=[];return Promise.all(d).then(function(b){r?w=b:t&&(y=b);b=!1;if(w.length||y.length)if(w.length)if(qg(c,"URI")==w[0].Xb){var d="audio";b=!0;}else d="video";else d="audio";else 1==e.length?(d=tg("video",e),d=f||k||d?"video":"audio"):(d="video",e=[e.join(",")]);return b?Promise.resolve():vg(this,c,e,d)}.bind(b)).then(function(b){b&&("audio"==b.stream.type?w=[b]:y=[b]);y&&wg(y);w&&wg(w);return xg(this,w,y,l,g,h,k)}.bind(b))}
function wg(b){b.forEach(function(b){var c=b.stream.codecs.split(",");c=c.filter(function(b){return"mp4a.40.34"!=b});b.stream.codecs=c.join(",");});}
function xg(b,c,d,e,f,g,h){d.forEach(function(b){if(b=b.stream)b.width=Number(f)||void 0,b.height=Number(g)||void 0,b.frameRate=Number(h)||void 0;}.bind(b));c.length||(c=[null]);d.length||(d=[null]);for(var k=[],l=0;l<c.length;l++)for(var m=0;m<d.length;m++){var r=c[l]?c[l].stream:null,t=d[m]?d[m].stream:null,u=c[l]?c[l].drmInfos:null,w=d[m]?d[m].drmInfos:null,y=void 0;if(r&&t)if(u.length&&w.length?0<wc(u,w).length:1)y=wc(u,w);else continue;else r?y=u:t&&(y=w);u=(d[l]?d[l].Xb:"")+" - "+(c[l]?c[l].Xb:
"");b.J[u]||(r=yg(b,r,t,e,y),k.push(r),b.J[u]=r);}return k}function yg(b,c,d,e,f){return{id:b.L++,language:c?c.language:"und",primary:!!c&&c.primary||!!d&&d.primary,audio:c,video:d,bandwidth:e,drmInfos:f,allowedByApplication:!0,allowedByKeySystem:!0}}function rg(b,c){qg(c,"TYPE");return ug(b,c,[]).then(function(b){return b.stream})}
function ug(b,c,d){var e=qg(c,"URI");e=Tf(b.m,e);if(b.a[e])return Promise.resolve(b.a[e]);var f=qg(c,"TYPE").toLowerCase();"subtitles"==f&&(f="text");var g=ld(Of(c,"LANGUAGE","und")),h=Of(c,"NAME"),k=c.getAttribute("DEFAULT"),l=c.getAttribute("AUTOSELECT"),m=Of(c,"CHANNELS");return zg(b,e,d,f,g,!!k||!!l,h,"audio"==f?Ag(m):null).then(function(b){if(this.a[e])return this.a[e];this.u[c.id]=b;return this.a[e]=b}.bind(b))}function Ag(b){if(!b)return null;b=b.split("/")[0];return parseInt(b,10)}
function vg(b,c,d,e){var f=qg(c,"URI");f=Tf(b.m,f);return b.a[f]?Promise.resolve(b.a[f]):zg(b,f,d,e,"und",!1,null,null).then(function(b){return this.a[f]?this.a[f]:this.a[f]=b}.bind(b))}
function zg(b,c,d,e,f,g,h,k){var l=c;c=Tf(b.m,c);var m,r="",t;return gg(b,c).then(function(b){m=Zf(this.s,b.data,c);if(1!=m.type)throw new A(2,4,4017);b=m;var f=kg,g=Rf(b.a,"EXT-X-PLAYLIST-TYPE"),h=Rf(b.a,"EXT-X-ENDLIST");h=g&&"VOD"==g.value||h;g=g&&"EVENT"==g.value&&!h;g=!h&&!g;h?ng(this,f.pa):(g?ng(this,f.fc):ng(this,f.Wc),b=Bg(b.a,"EXT-X-TARGETDURATION"),b=Number(b.value),this.l=Math.max(b,this.l),this.A=Math.min(b,this.A));if(1==d.length)r=d[0];else if(b=tg(e,d),null!=b)r=b;else throw new A(2,
4,4025,d);return Cg(this,e,r,m)}.bind(b)).then(function(b){t=b;b=Rf(m.a,"EXT-X-MEDIA-SEQUENCE");return mg(this,m,b?Number(b.value):0,t,r)}.bind(b)).then(function(b){var c=b[0].startTime,d=b[b.length-1].endTime,u=d-c;b=new T(b);var Wa=Dg(m),jg=void 0;"text"==e&&(jg="subtitle");var Ld=[];m.segments.forEach(function(b){b=Qf(b.a,"EXT-X-KEY");Ld.push.apply(Ld,b);});var Md=!1,Nd=[],Lb=null;Ld.forEach(function(b){if("NONE"!=qg(b,"METHOD")){Md=!0;var c=qg(b,"KEYFORMAT");if(b=(c=Eg[c])?c(b):null)b.keyIds.length&&
(Lb=b.keyIds[0]),Nd.push(b);}});if(Md&&!Nd.length)throw new A(2,4,4026);Wa={id:this.L++,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:b.find.bind(b),getSegmentReference:b.get.bind(b),initSegmentReference:Wa,presentationTimeOffset:0,mimeType:t,codecs:r,kind:jg,encrypted:Md,keyId:Lb,language:f,label:h||null,type:e,primary:g,trickModeVideo:null,containsEmsgBoxes:!1,frameRate:void 0,width:void 0,height:void 0,bandwidth:void 0,roles:[],channelsCount:k};this.X[Wa.id]=b;return{stream:Wa,
cb:b,drmInfos:Nd,Xb:l,Ob:c,Cd:d,duration:u}}.bind(b))}function Dg(b){var c=Qf(b.a,"EXT-X-MAP");if(!c.length)return null;if(1<c.length)throw new A(2,4,4020);c=c[0];var d=qg(c,"URI"),e=Tf(b.uri,d);b=0;d=null;if(c=Of(c,"BYTERANGE"))b=c.split("@"),c=Number(b[0]),b=Number(b[1]),d=b+c-1;return new O(function(){return[e]},b,d)}
function Fg(b,c,d,e,f){var g=d.a,h=Tf(b.uri,d.uri);b=Bg(g,"EXTINF").value.split(",");b=f+Number(b[0]);d=0;var k=null;if(g=Rf(g,"EXT-X-BYTERANGE"))d=g.value.split("@"),g=Number(d[0]),d=d[1]?Number(d[1]):c.a+1,k=d+g-1;return new P(e,f,b,function(){return[h]},d,k)}function pg(b){b.b&&(b.G.forEach(function(c){b.b.Ma(c,!0);}),b.G=[]);}
function mg(b,c,d,e,f){var g=c.segments,h=[],k=Tf(c.uri,g[0].uri),l=Fg(c,null,g[0],d,0),m=Dg(c);return Gg(b,c.uri,m,l,e,f).then(function(b){k.split("/").pop();for(var e=0;e<g.length;++e){var f=h[h.length-1];f=Fg(c,f,g[e],d+e,0==e?b:f.endTime);h.push(f);}this.G.push(h);pg(this);return h}.bind(b))}
function Hg(b,c){var d=b.c.networkingEngine,e=rb(c.c(),b.g.retryParameters),f={},g=c.b;f.Range="bytes="+g+"-"+(g+2048-1);var h={};if(0!=g||null!=c.a)g="bytes="+g+"-",null!=c.a&&(g+=c.a),h.Range=g;e.headers=f;f=d.request(1,e);ob(b.h,f);return f.promise["catch"](function(){Fa("Unable to fetch a partial HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.",e.uris[0]);e.headers=h;var c=d.request(1,e);ob(b.h,c);return c.promise})}
function Gg(b,c,d,e,f,g){if(b.o&&(c=b.a[c].cb.get(e.position)))return Promise.resolve(c.startTime);e=[Hg(b,e)];if("video/mp4"==f||"audio/mp4"==f)d?e.push(Hg(b,d)):e.push(e[0]);return Promise.all(e).then(function(b){if("video/mp4"==f||"audio/mp4"==f)return Ig(b[0].data,b[1].data);if("audio/mpeg"==f)return 0;if("video/mp2t"==f)return Jg(b[0].data);if("application/mp4"==f||0==f.indexOf("text/")){b=b[0].data;var c=Mb(f,g);if(I[c]){var d=new Uc(null);d.f=new I[c];b=d.Ib(b);}else b=0;return b}throw new A(2,
4,4030);}.bind(b))}function Ig(b,c){var d=0;(new R).C("moov",S).C("trak",S).C("mdia",S).Y("mdhd",function(b){b.reader.F(0==b.version?8:16);d=b.reader.B();b.parser.stop();}).parse(c,!0);if(!d)throw new A(2,4,4030);var e=0,f=!1;(new R).C("moof",S).C("traf",S).Y("tfdt",function(b){e=(0==b.version?b.reader.B():b.reader.Qa())/d;f=!0;b.parser.stop();}).parse(b,!0);if(!f)throw new A(2,4,4030);return e}
function Jg(b){function c(){throw new A(2,4,4030);}b=new Q(new DataView(b),0);for(var d=0,e=0;;)if(d=b.T(),e=b.ca(),71!=e&&c(),b.ab()&16384||c(),e=(b.ca()&48)>>4,0!=e&&2!=e||c(),3==e&&(e=b.ca(),b.F(e)),1!=b.B()>>8)b.seek(d+188),e=b.ca(),71!=e&&(b.seek(d+192),e=b.ca()),71!=e&&(b.seek(d+204),e=b.ca()),71!=e&&c(),b.Lc(1);else return b.F(3),d=b.ca()>>6,0!=d&&1!=d||c(),0==b.ca()&&c(),d=b.ca(),e=b.ab(),b=b.ab(),(1073741824*((d&14)>>1)+((e&65534)<<14|(b&65534)>>1))/9E4}
function tg(b,c){for(var d=Kg[b],e=0;e<d.length;e++)for(var f=0;f<c.length;f++)if(d[e].test(c[f].trim()))return c[f].trim();return"text"==b?"":null}
function Cg(b,c,d,e){e=Tf(e.uri,e.segments[0].uri);var f=(new Ja(e)).aa.split(".").pop(),g=Lg[c][f];if(g)return Promise.resolve(g);if("text"==c)return d&&"vtt"!=d?Promise.resolve("application/mp4"):Promise.resolve("text/vtt");c=rb([e],b.g.retryParameters);c.method="HEAD";c=b.c.networkingEngine.request(1,c);ob(b.h,c);return c.promise.then(function(b){b=b.headers["content-type"];if(!b)throw new A(2,4,4021,f);return b.split(";")[0]})}
function qg(b,c){var d=b.getAttribute(c);if(!d)throw new A(2,4,4023,c);return d.value}function Bg(b,c){var d=Rf(b,c);if(!d)throw new A(2,4,4024,c);return d}function gg(b,c){var d=b.c.networkingEngine.request(0,rb([c],b.g.retryParameters));ob(b.h,d);return d.promise}
var Kg={audio:[/^vorbis$/,/^opus$/,/^flac$/,/^mp4a/,/^[ae]c-3$/],video:[/^avc/,/^hev/,/^hvc/,/^vp0?[89]/,/^av1$/],text:[/^vtt$/,/^wvtt/,/^stpp/]},Lg={audio:{mp4:"audio/mp4",m4s:"audio/mp4",m4i:"audio/mp4",m4a:"audio/mp4",ts:"video/mp2t"},video:{mp4:"video/mp4",m4s:"video/mp4",m4i:"video/mp4",m4v:"video/mp4",ts:"video/mp2t"},text:{mp4:"application/mp4",m4s:"application/mp4",m4i:"application/mp4",vtt:"text/vtt",ttml:"application/ttml+xml"}};
eg.prototype.R=function(){this.c&&(this.j=null,this.update().then(function(){ig(this,this.i);}.bind(this))["catch"](function(b){this.c&&(b.severity=1,this.c.onError(b),ig(this,0));}.bind(this)));};function ig(b,c){null!=b.i&&null!=c&&(b.j=window.setTimeout(b.R.bind(b),1E3*c));}function ng(b,c){b.f=c;b.b&&b.b.xb(b.f==kg.pa);b.f==kg.pa&&null!=b.j&&(window.clearTimeout(b.j),b.j=null,b.i=null);}
var Eg={"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":function(b){var c=qg(b,"METHOD");if("SAMPLE-AES-CENC"!=c&&"SAMPLE-AES-CTR"!=c)return null;c=qg(b,"URI");c=dg.parse(c);c=new Uint8Array(c.data);c=Gb("com.widevine.alpha",[{initDataType:"cenc",initData:c}]);if(b=Of(b,"KEYID"))c.keyIds=[b.substr(2).toLowerCase()];return c}},fg="VOD",kg={pa:fg,Wc:"EVENT",fc:"LIVE"};tf.m3u8=eg;sf["application/x-mpegurl"]=eg;sf["application/vnd.apple.mpegurl"]=eg;function Mg(b,c,d,e){this.a=b;this.s=c;this.o=d;this.u=e;this.h=new D;this.b=null;this.g=!1;this.m=b.readyState;this.c=!1;this.j=this.A=-1;this.f=this.i=!1;c=this.l.bind(this);E(this.h,b,"waiting",c);this.b=new Tb(c);Wb(this.b,.25);}Mg.prototype.destroy=function(){var b=this.h.destroy();this.u=this.s=this.a=this.h=null;null!=this.b&&(this.b.cancel(),this.b=null);return b};Mg.prototype.$a=function(){this.f=!0;this.l();};
Mg.prototype.l=function(){if(0!=this.a.readyState){if(this.a.seeking){if(!this.g)return}else this.g=!1;if(!this.a.paused){this.a.readyState!=this.m&&(this.c=!1,this.m=this.a.readyState);var b=this.o.smallGapLimit,c=this.a.currentTime,d=this.a.buffered;a:{if(d&&d.length&&!(1==d.length&&1E-6>d.end(0)-d.start(0))){var e=.1;/(Edge\/|Trident\/|Tizen)/.test(navigator.userAgent)&&(e=.5);for(var f=0;f<d.length;f++)if(d.start(f)>c&&(0==f||d.end(f-1)-c<=e)){e=f;break a}}e=null;}if(null==e){if(d=this.a.currentTime,
c=this.a.buffered,3>this.a.readyState&&0<this.a.playbackRate)if(this.j!=d)this.j=d,this.A=Date.now(),this.i=!1;else if(!this.i&&this.A<Date.now()-1E3)for(e=0;e<c.length;e++)if(d>=c.start(e)&&d<c.end(e)-.5){this.a.currentTime+=.1;this.j=this.a.currentTime;this.i=!0;break}}else if(0!=e||this.f){f=d.start(e);var g=this.s.presentationTimeline.la();if(!(f>=g)){g=f-c;b=g<=b;var h=!1;.001>g||(b||this.c||(this.c=!0,c=new F("largegap",{currentTime:c,gapSize:g}),c.cancelable=!0,this.u(c),this.o.jumpLargeGaps&&
!c.defaultPrevented&&(h=!0)),!b&&!h)||(0!=e&&d.end(e-1),this.a.currentTime=f);}}}}};function Ng(b,c,d){this.a=b;this.i=c;this.h=d;this.c=new D;this.f=1;this.g=!1;this.b=null;0<b.readyState?this.Bc():zb(this.c,b,"loadedmetadata",this.Bc.bind(this));E(this.c,b,"ratechange",this.Td.bind(this));}n=Ng.prototype;n.destroy=function(){var b=this.c.destroy();this.c=null;null!=this.b&&(this.b.cancel(),this.b=null);this.i=this.a=null;return b};function Og(b){return 0<b.a.readyState?b.a.currentTime:b.h}function Pg(b,c){0<b.a.readyState?Qg(b,b.a.currentTime,c):(b.h=c,setTimeout(b.i,0));}n.Va=function(){return this.f};
function Rg(b,c){null!=b.b&&(b.b.cancel(),b.b=null);b.f=c;b.a.playbackRate=b.g||0>c?0:c;!b.g&&0>c&&(b.b=new Tb(function(){b.a.currentTime+=c/4;}),Wb(b.b,.25));}n.Td=function(){var b=this.g||0>this.f?0:this.f;this.a.playbackRate&&this.a.playbackRate!=b&&Rg(this,this.a.playbackRate);};n.Bc=function(){.001>Math.abs(this.a.currentTime-this.h)?this.Cc():(zb(this.c,this.a,"seeking",this.Cc.bind(this)),this.a.currentTime=0==this.a.currentTime?this.h:this.a.currentTime);};
n.Cc=function(){var b=this;E(this.c,this.a,"seeking",function(){return b.i()});};function Qg(b,c,d){function e(){!b.a||10<=f++||b.a.currentTime!=c||(b.a.currentTime=d,setTimeout(e,100));}b.a.currentTime=d;var f=0;setTimeout(e,100);}function Sg(b,c,d,e,f,g){this.c=b;this.b=c;this.h=d;this.j=f;this.f=null;this.g=new Mg(b,c,d,g);c=this.Vd.bind(this);d=this.b.presentationTimeline;null==e?e=Infinity>d.S()?d.Ha():d.la():0>e&&(e=d.la()+e);e=Tg(this,Ug(this,e));this.a=new Ng(b,c,e);this.f=new Tb(this.Sd.bind(this));Wb(this.f,.25);}n=Sg.prototype;n.destroy=function(){var b=Promise.all([this.a.destroy(),this.g.destroy()]);this.g=this.a=null;null!=this.f&&(this.f.cancel(),this.f=null);this.j=this.h=this.b=this.c=null;return b};
function Vg(b){var c=Og(b.a);0<b.c.readyState&&(b.c.paused||(c=Ug(b,c)));return c}n.Va=function(){return this.a.Va()};n.$a=function(){this.g.$a();};n.Sd=function(){if(0!=this.c.readyState&&!this.c.paused){var b=this.c.currentTime,c=this.b.presentationTimeline,d=c.Ha();c=c.la();3>c-d&&(d=c-3);b<d&&(b=Wg(this,b),this.c.currentTime=b);}};
n.Vd=function(){var b=this.g;b.g=!0;b.f=!1;b.c=!1;var c=Og(this.a);b=Wg(this,c);if(.001<Math.abs(b-c)&&(c=(new Date).getTime()/1E3,!this.i||this.i<c-1)){this.i=c;Pg(this.a,b);return}this.j();};function Tg(b,c){var d=b.b.presentationTimeline.S();return c>=d?d-b.h.durationBackoff:c}
function Wg(b,c){var d=yc.bind(null,b.c.buffered),e=Math.max(b.b.minBufferTime||0,b.h.rebufferingGoal),f=b.b.presentationTimeline,g=f.Ha(),h=f.la(),k=f.S();3>h-g&&(g=h-3);var l=f.Wa(e),m=f.Wa(5);e=f.Wa(e+5);return c>=k?Tg(b,c):c>h?h:c<g?d(m)?m:e:c>=l||d(c)?c:e}function Ug(b,c){var d=b.b.presentationTimeline.Ha();if(c<d)return d;d=b.b.presentationTimeline.la();return c>d?d:c}function Xg(b,c,d,e,f,g,h){this.a=b;this.u=c;this.g=d;this.s=e;this.l=f;this.h=g;this.A=h;this.c=[];this.j=new D;this.b=!1;this.i=-1;this.f=null;Yg(this);}Xg.prototype.destroy=function(){var b=this.j?this.j.destroy():Promise.resolve();this.j=null;Zg(this);this.A=this.h=this.l=this.s=this.g=this.u=this.a=null;this.c=[];return b};
Xg.prototype.o=function(b){if(!this.c.some(function(c){return c.info.schemeIdUri==b.schemeIdUri&&c.info.startTime==b.startTime&&c.info.endTime==b.endTime})){var c={info:b,status:1};this.c.push(c);var d=new F("timelineregionadded",{detail:$g(b)});this.h(d);this.m(!0,c);}};function $g(b){var c=lb(b);c.eventElement=b.eventElement;return c}
Xg.prototype.m=function(b,c){var d=c.info.startTime>this.a.currentTime?1:c.info.endTime<this.a.currentTime?3:2,e=2==c.status,f=2==d;if(d!=c.status){if(!b||e||f)e||this.h(new F("timelineregionenter",{detail:$g(c.info)})),f||this.h(new F("timelineregionexit",{detail:$g(c.info)}));c.status=d;}};function Yg(b){Zg(b);b.f=window.setTimeout(b.G.bind(b),250);}function Zg(b){b.f&&(window.clearTimeout(b.f),b.f=null);}
Xg.prototype.G=function(){this.f=null;Yg(this);var b=Hd(this.g,this.a.currentTime);b!=this.i&&(-1!=this.i&&this.A(),this.i=b);b=zc(this.a.buffered,this.a.currentTime);var c=xc(this.a.buffered),d=this.g.presentationTimeline,e=d.Ia();c=d.O()&&c>=e;d=this.u;d=d.g?"ended"==d.g.readyState:!0;c=c||this.a.ended||d;this.b?(d=Math.max(this.g.minBufferTime||0,this.s.rebufferingGoal),(c||b>=d)&&0!=this.b&&(this.b=!1,this.l(!1))):!c&&.5>b&&1!=this.b&&(this.b=!0,this.l(!0));this.c.forEach(this.m.bind(this,!1));};function ah(b,c){this.a=c;this.b=b;this.g=null;this.j=1;this.m=Promise.resolve();this.h=[];this.i={};this.c={};this.o=!1;this.A=null;this.u=this.f=this.l=!1;this.s=0;}n=ah.prototype;n.destroy=function(){for(var b in this.c)bh(this.c[b]);this.h=this.m=this.b=this.a=null;this.i={};this.g=this.c=null;this.f=!0;return Promise.resolve()};
n.configure=function(b){this.g=b;this.A=new Ya({maxAttempts:Math.max(b.retryParameters.maxAttempts,2),baseDelay:b.retryParameters.baseDelay,backoffFactor:b.retryParameters.backoffFactor,fuzzFactor:b.retryParameters.fuzzFactor,timeout:0},!0);};n.init=function(){var b=Vg(this.a.Oa);b=this.a.wc(this.b.periods[Hd(this.b,b)]);return b.variant||b.text?ch(this,b).then(function(){!this.f&&this.a&&this.a.Jd&&this.a.Jd();}.bind(this)):Promise.reject(new A(2,5,5005))};
function V(b){var c=Vg(b.a.Oa);return b.b.periods[Hd(b.b,c)]}function dh(b){var c=b.c.video||b.c.audio;return c?b.b.periods[c.za]:null}function eh(b){return fh(b,"audio")}function gh(b){return fh(b,"video")}function fh(b,c){var d=b.c[c];return d?d.qa||d.stream:null}
function hh(b,c,d){ed(b.a.K,"text");b.s++;b.u=!1;var e=b.s;return b.a.K.init({text:c},!1).then(function(){return ih(b,[c])}).then(function(){if(!b.f&&d&&b.s==e&&!b.c.text&&!b.u){var f=Vg(b.a.Oa);b.c.text=jh(c,Hd(b.b,f));kh(b,b.c.text,0);}})}function lh(b){b.u=!0;b.c.text&&(bh(b.c.text),delete b.c.text);}function mh(b,c){var d=b.c.video;if(d){var e=d.stream;if(e)if(c){var f=e.trickModeVideo;f&&!d.qa&&(nh(b,f,!1),d.qa=e);}else if(e=d.qa)d.qa=null,nh(b,e,!0);}}
function oh(b,c,d){c.video&&nh(b,c.video,d);c.audio&&nh(b,c.audio,d);}function nh(b,c,d){var e=b.c[c.type];if(!e&&"text"==c.type&&b.g.ignoreTextStreamFailures)hh(b,c,!0);else if(e){var f=Id(b.b,c);d&&f!=e.za?ph(b):(e.qa&&(c.trickModeVideo?(e.qa=c,c=c.trickModeVideo):e.qa=null),(f=b.h[f])&&f.Ra&&(f=b.i[c.id])&&f.Ra&&e.stream!=c&&("text"==c.type&&Yc(b.a.K,Mb(c.mimeType,c.codecs)),e.stream=c,e.ub=!0,d&&(e.wa?e.yb=!0:e.Aa?(e.ta=!0,e.yb=!0):(bh(e),qh(b,e,!0)))));}}
function rh(b){var c=Vg(b.a.Oa),d=b.g.smallGapLimit;Object.keys(b.c).every(function(b){var e=this.a.K;"text"==b?(b=e.a,b=c>=b.a&&c<b.b):(b=$c(e,b),b=yc(b,c,d));return b}.bind(b))||ph(b);}function ph(b){for(var c in b.c){var d=b.c[c];d.wa||d.ta||(d.Aa?d.ta=!0:null==Zc(b.a.K,c)?null==d.sa&&kh(b,d,0):(bh(d),qh(b,d,!1)));}}
function ch(b,c,d){var e=Vg(b.a.Oa),f=Hd(b.b,e),g={},h=[];c.variant&&c.variant.audio&&(g.audio=c.variant.audio,h.push(c.variant.audio));c.variant&&c.variant.video&&(g.video=c.variant.video,h.push(c.variant.video));c.text&&(g.text=c.text,h.push(c.text));return b.a.K.init(g,b.g.forceTransmuxTS).then(function(){if(!b.f){var c=b.b.presentationTimeline.S();Infinity>c?b.a.K.ja(c):b.a.K.ja(Math.pow(2,32));return ih(b,h)}}).then(function(){if(!b.f)for(var c in g){var e=g[c];b.c[c]||(b.c[c]=jh(e,f,d),kh(b,
b.c[c],0));}})}function jh(b,c,d){return{stream:b,type:b.type,Ja:null,ma:null,qa:null,ub:!0,za:c,endOfStream:!1,Aa:!1,sa:null,ta:!1,yb:!1,wa:!1,Wb:!1,Ya:!1,Jc:d||0}}
function sh(b,c){var d=b.h[c];if(d)return d.promise;d={promise:new z,Ra:!1};b.h[c]=d;var e=b.b.periods[c].variants.map(function(b){var c=[];b.audio&&c.push(b.audio);b.video&&c.push(b.video);b.video&&b.video.trickModeVideo&&c.push(b.video.trickModeVideo);return c}).reduce(Bb,[]).filter(Eb);e.push.apply(e,b.b.periods[c].textStreams);b.m=b.m.then(function(){if(!this.f)return ih(this,e)}.bind(b)).then(function(){this.f||(this.h[c].promise.resolve(),this.h[c].Ra=!0);}.bind(b))["catch"](function(b){this.f||
(this.h[c].promise["catch"](function(){}),this.h[c].promise.reject(),delete this.h[c],this.a.onError(b));}.bind(b));return d.promise}
function ih(b,c){c.map(function(b){return b.id}).filter(Eb);for(var d=[],e=0;e<c.length;++e){var f=c[e],g=b.i[f.id];g?d.push(g.promise):(b.i[f.id]={promise:new z,Ra:!1},d.push(f.createSegmentIndex()));}return Promise.all(d).then(function(){if(!this.f)for(var b=0;b<c.length;++b){var d=this.i[c[b].id];d.Ra||(d.promise.resolve(),d.Ra=!0);}}.bind(b))["catch"](function(b){if(!this.f){for(var d=0;d<c.length;d++)this.i[c[d].id].promise["catch"](function(){}),this.i[c[d].id].promise.reject(),delete this.i[c[d].id];
return Promise.reject(b)}}.bind(b))}n.Pe=function(b){if(!this.f&&!b.Aa&&null!=b.sa&&!b.wa)if(b.sa=null,b.ta)qh(this,b,b.yb);else{try{var c=th(this,b);null!=c&&(kh(this,b,c),b.Ya=!1);}catch(d){uh(this,d);return}c=G(this.c);vh(this,b);c.every(function(b){return b.endOfStream})&&this.a.K.endOfStream().then(function(){if(!this.f){var b=this.a.K.S();b<this.b.presentationTimeline.S()&&this.b.presentationTimeline.ja(b);}}.bind(this));}};
function th(b,c){var d=Vg(b.a.Oa),e=wh(b,c,d),f=Id(b.b,c.stream),g=Hd(b.b,e),h=bd(b.a.K,c.type,d),k=Math.max(b.j*Math.max(b.b.minBufferTime||0,b.g.rebufferingGoal),b.j*b.g.bufferingGoal);if(e>=b.b.presentationTimeline.S())return c.endOfStream=!0,null;c.endOfStream=!1;c.za=g;if(g!=f)return null;if(h>=k)return.5;g=ad(b.a.K,c.type);g=xh(b,c,d,g,f);if(!g)return 1;var l=Infinity;G(b.c).forEach(function(c){l=Math.min(l,wh(b,c,d));});if(e>=l+b.b.presentationTimeline.a)return 1;c.Jc=0;yh(b,c,d,f,g);return null}
function wh(b,c,d){return c.Ja&&c.ma?b.b.periods[Id(b.b,c.Ja)].startTime+c.ma.endTime:Math.max(d,c.Jc)}function xh(b,c,d,e,f){if(c.ma&&c.stream==c.Ja)return zh(b,c,f,c.ma.position+1);d=c.ma?c.stream.findSegmentPosition(Math.max(0,b.b.periods[Id(b.b,c.Ja)].startTime+c.ma.endTime-b.b.periods[f].startTime)):c.stream.findSegmentPosition(Math.max(0,(e||d)-b.b.periods[f].startTime));if(null==d)return null;var g=null;null==e&&(g=zh(b,c,f,Math.max(0,d-1)));return g||zh(b,c,f,d)}
function zh(b,c,d,e){d=b.b.periods[d];c=c.stream.getSegmentReference(e);if(!c)return null;e=b.b.presentationTimeline;b=e.Xa();e=e.Ia();return d.startTime+c.endTime<b||d.startTime+c.startTime>e?null:c}
function yh(b,c,d,e,f){var g=b.b.periods[e],h=c.stream,k=b.b.presentationTimeline.S(),l=b.b.periods[e+1];e=Ah(b,c,e,Math.max(0,g.startTime-.1),l?l.startTime:k);c.Aa=!0;c.ub=!1;k=Bh(b,f);Promise.all([e,k]).then(function(b){if(!this.f&&!this.l)return Ch(this,c,d,g,h,f,b[1])}.bind(b)).then(function(){this.f||this.l||(c.Aa=!1,c.Wb=!1,c.ta||this.a.$a(),kh(this,c,0),Dh(this,h));}.bind(b))["catch"](function(b){this.f||this.l||(c.Aa=!1,"text"==c.type&&this.g.ignoreTextStreamFailures?delete this.c.text:3017==
b.code?Eh(this,c,b):(c.Ya=!0,b.severity=2,uh(this,b)));}.bind(b));}function Eh(b,c,d){if(!G(b.c).some(function(b){return b!=c&&b.Wb})){var e=Math.round(100*b.j);if(20<e)b.j-=.2;else if(4<e)b.j-=.04;else{c.Ya=!0;b.l=!0;b.a.onError(d);return}c.Wb=!0;}kh(b,c,4);}
function Ah(b,c,d,e,f){if(!c.ub)return Promise.resolve();d=fd(b.a.K,c.type,b.b.periods[d].startTime-c.stream.presentationTimeOffset,e,f);if(!c.stream.initSegmentReference)return d;b=Bh(b,c.stream.initSegmentReference).then(function(b){if(!this.f)return cd(this.a.K,c.type,b,null,null)}.bind(b))["catch"](function(b){c.ub=!0;return Promise.reject(b)});return Promise.all([d,b])}
function Ch(b,c,d,e,f,g,h){f.containsEmsgBoxes&&(new R).Y("emsg",b.fe.bind(b,e,g)).parse(h);return Fh(b,c,d).then(function(){if(!this.f)return cd(this.a.K,c.type,h,g.startTime,g.endTime)}.bind(b)).then(function(){if(!this.f)return c.Ja=f,c.ma=g,Promise.resolve()}.bind(b))}
n.fe=function(b,c,d){var e=d.reader.Ub(),f=d.reader.Ub(),g=d.reader.B(),h=d.reader.B(),k=d.reader.B(),l=d.reader.B();d=d.reader.Ba(d.reader.D.byteLength-d.reader.T());b=b.startTime+c.startTime+h/g;if("urn:mpeg:dash:event:2012"==e)this.a.Ld();else this.a.onEvent(new F("emsg",{detail:{startTime:b,endTime:b+k/g,schemeIdUri:e,value:f,timescale:g,presentationTimeDelta:h,eventDuration:k,id:l,messageData:d}}));};
function Fh(b,c,d){var e=Math.max(b.g.bufferBehind,b.b.presentationTimeline.a),f=Zc(b.a.K,c.type);if(null==f)return Promise.resolve();d=d-f-e;return 0>=d?Promise.resolve():b.a.K.remove(c.type,f,f+d).then(function(){}.bind(b))}function Dh(b,c){if(!b.o&&(b.o=G(b.c).every(function(b){return"text"==b.type?!0:!b.ta&&!b.wa&&b.ma}),b.o)){var d=Id(b.b,c);b.h[d]||sh(b,d).then(function(){this.f||this.a.vc();}.bind(b))["catch"](Cb);for(d=0;d<b.b.periods.length;++d)sh(b,d)["catch"](Cb);b.a.Yd&&b.a.Yd();}}
function vh(b,c){if(c.za!=Id(b.b,c.stream)){var d=c.za,e=G(b.c);e.every(function(b){return b.za==d})&&e.every(Gh)&&sh(b,d).then(function(){if(!this.f&&e.every(function(b){var c=Id(this.b,b.stream);return Gh(b)&&b.za==d&&c!=d}.bind(this))){var b=this.b.periods[d],c=this.a.wc(b),h={};c.variant&&c.variant.video&&(h.video=c.variant.video);c.variant&&c.variant.audio&&(h.audio=c.variant.audio);c.text&&(h.text=c.text);for(var k in this.c)if(!h[k]&&"text"!=k){this.a.onError(new A(2,5,5005));return}for(var l in h)if(!this.c[l])if("text"==
l)ch(this,{text:h.text},b.startTime),delete h[l];else{this.a.onError(new A(2,5,5005));return}for(var m in this.c)(b=h[m])?(nh(this,b,!1),kh(this,this.c[m],0)):delete this.c[m];this.a.vc();}}.bind(b))["catch"](Cb);}}function Gh(b){return!b.Aa&&null==b.sa&&!b.ta&&!b.wa}function Bh(b,c){var d=rb(c.c(),b.g.retryParameters);if(0!=c.b||null!=c.a){var e="bytes="+c.b+"-";null!=c.a&&(e+=c.a);d.headers.Range=e;}return b.a.La.request(1,d).promise.then(function(b){return b.data})}
function qh(b,c,d){c.ta=!1;c.yb=!1;c.wa=!0;ed(b.a.K,c.type).then(function(){if(!this.f&&d)return this.a.K.flush(c.type)}.bind(b)).then(function(){this.f||(c.Ja=null,c.ma=null,c.wa=!1,c.endOfStream=!1,kh(this,c,0));}.bind(b));}function kh(b,c,d){c.sa=window.setTimeout(b.Pe.bind(b,c),1E3*d);}function bh(b){null!=b.sa&&(window.clearTimeout(b.sa),b.sa=null);}function uh(b,c){$a(b.A).then(function(){this.f||(this.a.onError(c),c.handled||this.g.failureCallback(c));}.bind(b));}function Hh(b,c,d,e,f,g){if(200<=d&&299>=d&&202!=d)return f&&(e=f),{uri:e,data:c,headers:b,fromCache:!!b["x-shaka-from-cache"]};f=null;try{f=Rb(c);}catch(h){}throw new A(401==d||403==d?2:1,1,1001,e,d,f,b,g);}function W(b,c,d){var e=new W.b;Kb(c.headers,function(b,c){e.append(b,c);});var f=new W.a,g={body:c.body||void 0,headers:e,method:c.method,signal:f.signal,credentials:c.allowCrossSiteCredentials?"include":void 0},h={ic:!1,Uc:!1},k;c.retryParameters.timeout&&(k=setTimeout(function(){h.Uc=!0;f.abort();},c.retryParameters.timeout));b=W.f(b,d,g,h,k);return new B(b,function(){h.ic=!0;f.abort();return Promise.resolve()})}x("shaka.net.HttpFetchPlugin",W);
W.f=function(b,c,d,e,f){return p(function h(){var k,l,m,r,t,u;return v(h,function(h){switch(h.w){case 1:return k=W.c,oa(h,2,3),q(h,k(b,d),5);case 5:return l=h.I,q(h,l.arrayBuffer(),6);case 6:m=h.I;case 3:sa(h);clearTimeout(f);ta(h,4);break;case 2:r=ra(h);if(e.ic)throw new A(1,1,7001,b,c);if(e.Uc)throw new A(1,1,1003,b,c);throw new A(1,1,1002,b,r,c);case 4:return t={},u=l.headers,u.forEach(function(b,c){t[c.trim()]=b;}),h["return"](Hh(t,m,l.status,b,l.url,c))}})})};
W.isSupported=function(){return!(!window.fetch||!window.AbortController)};W.isSupported=W.isSupported;W.c=window.fetch;W.a=window.AbortController;W.b=window.Headers;W.isSupported()&&(qb("http",W,2),qb("https",W,2));function Ih(b,c,d){var e=new Ih.g,f=new Promise(function(f,h){e.open(c.method,b,!0);e.responseType="arraybuffer";e.timeout=c.retryParameters.timeout;e.withCredentials=c.allowCrossSiteCredentials;e.onabort=function(){h(new A(1,1,7001,b,d));};e.onload=function(c){c=c.target;var e=c.getAllResponseHeaders().trim().split("\r\n").reduce(function(b,c){var d=c.split(": ");b[d[0].toLowerCase()]=d.slice(1).join(": ");return b},{});try{var g=Hh(e,c.response,c.status,b,c.responseURL,d);f(g);}catch(t){h(t);}};e.onerror=
function(c){h(new A(1,1,1002,b,c,d));};e.ontimeout=function(){h(new A(1,1,1003,b,d));};for(var g in c.headers)e.setRequestHeader(g.toLowerCase(),c.headers[g]);e.send(c.body);});return new B(f,function(){e.abort();return Promise.resolve()})}x("shaka.net.HttpXHRPlugin",Ih);Ih.g=window.XMLHttpRequest;qb("http",Ih,1);qb("https",Ih,1);function Jh(b){this.a={};this.c=Promise.resolve();this.h=!1;this.i=b;this.f=this.b=this.g=0;}Jh.prototype.destroy=function(){this.h=!0;var b=this.c["catch"](function(){});this.c=Promise.resolve();return b};function Kh(b,c,d,e,f){b.a[c]=b.a[c]||[];b.a[c].push({request:d,lc:e,Fd:f});}
function Lh(b,c){var d=G(b.a);b.a={};d.forEach(function(c){c.forEach(function(c){b.b+=c.lc;});});var e=Promise.resolve().then(function(){Mh(b);return Promise.all(d.map(function(d){return Nh(b,c,d)}))});b.c=b.c.then(function(){return e});return e}function Nh(b,c,d){var e=Promise.resolve();d.forEach(function(d){e=e.then(function(){Mh(b);return Oh(b,c,d)});});return e}
function Oh(b,c,d){return Promise.resolve().then(function(){Mh(b);return c.request(1,d.request).promise}).then(function(c){Mh(b);b.g+=d.lc;b.f+=c.data.byteLength;b.i(b.b?b.g/b.b:0,b.f);return d.Fd(c.data)})}function Mh(b){if(b.h)throw new A(2,9,7001);}function Ph(b,c){var d=this;this.c=b;this.b=b.objectStore(c);this.a=new z;b.onabort=function(b){b.preventDefault();d.a.reject();};b.onerror=function(b){b.preventDefault();d.a.reject();};b.oncomplete=function(){d.a.resolve();};}Ph.prototype.abort=function(){try{this.c.abort();}catch(b){}return this.a["catch"](function(){})};Ph.prototype.store=function(){return this.b};Ph.prototype.promise=function(){return this.a};function Qh(b){this.b=b;this.a=[];}Qh.prototype.destroy=function(){return Promise.all(this.a.map(function(b){return b.abort()}))};function Rh(b,c){return Sh(b,c,"readwrite")}function Sh(b,c,d){d=b.b.transaction([c],d);var e=new Ph(d,c);b.a.push(e);e.promise().then(function(){ib(b.a,e);},function(){ib(b.a,e);});return e}function Th(){this.a={};}Th.prototype.destroy=function(){var b=G(this.a).map(function(b){return b.destroy()});this.a={};return Promise.all(b)};Th.prototype.init=function(){var b=this;Kb(Uh,function(c,e){var d=e();d&&(b.a[c]=d);});var c=G(this.a).map(function(b){return b.init()});return Promise.all(c)};
function Vh(b){var c=null;Kb(b.a,function(b,e){Kb(e.getCells(),function(d,e){e.hasFixedKeySpace()||c||(c={path:{$:b,N:d},N:e});});});if(c)return c;throw new A(2,9,9013,"Could not find a cell that supports add-operations");}function Wh(b,c){Kb(b.a,function(b,e){Kb(e.getCells(),function(d,e){c({$:b,N:d},e);});});}function Xh(b,c,d){b=b.a[c];if(!b)throw new A(2,9,9013,"Could not find mechanism with name "+c);c=b.getCells()[d];if(!c)throw new A(2,9,9013,"Could not find cell with name "+d);return c}
function Yh(b){b=G(b.a).map(function(b){return b.erase()});return Promise.all(b)}x("shaka.offline.StorageMuxer.register",function(b,c){Uh[b]=c;});x("shaka.offline.StorageMuxer.unregister",function(b){delete Uh[b];});function Zh(){return G(Uh).some(function(b){return(b=b())?(b.destroy(),!0):!1})}var Uh={};function $h(b){this.a=new Qh(b);}n=$h.prototype;n.destroy=function(){return this.a.destroy()};n.hasFixedKeySpace=function(){return!0};n.addSegments=function(){return ai("segment")};n.removeSegments=function(b,c){return bi(this,"segment",b,c)};n.getSegments=function(b){return ci(this,"segment",b).then(function(b){return b.map(di)})};n.addManifests=function(){return ai("manifest")};
n.updateManifestExpiration=function(b,c){var d=Rh(this.a,"manifest"),e=d.store(),f=new z;e.get(b).onsuccess=function(d){(d=d.target.result)?(d.expiration=c,e.put(d),f.resolve()):f.reject(new A(2,9,9012,"Could not find values for "+b));};return d.promise().then(function(){return f})};n.removeManifests=function(b,c){return bi(this,"manifest",b,c)};n.getManifests=function(b){return ci(this,"manifest",b).then(function(b){return b.map(ei)})};
n.getAllManifests=function(){var b=Sh(this.a,"manifest","readonly"),c={};b.store().openCursor().onsuccess=function(b){if(b=b.target.result)c[b.key]=ei(b.value),b["continue"]();};return b.promise().then(function(){return c})};function ai(b){return Promise.reject(new A(2,9,9011,"Cannot add new value to "+b))}function bi(b,c,d,e){b=Rh(b.a,c);var f=b.store();d.forEach(function(b){f["delete"](b).onsuccess=function(){return e(b)};});return b.promise()}
function ci(b,c,d){b=Sh(b.a,c,"readonly");var e=b.store(),f={},g=[];d.forEach(function(b){e.get(b).onsuccess=function(c){c=c.target.result;void 0==c&&g.push(b);f[b]=c;};});return b.promise().then(function(){return g.length?Promise.reject(new A(2,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}
function ei(b){return{originalManifestUri:b.originalManifestUri,duration:b.duration,size:b.size,expiration:null==b.expiration?Infinity:b.expiration,periods:b.periods.map(fi),sessionIds:b.sessionIds,drmInfo:b.drmInfo,appMetadata:b.appMetadata}}function fi(b){gi(b);b.streams.forEach(function(){});return{startTime:b.startTime,streams:b.streams.map(hi)}}
function hi(b){var c=b.zd?ii(b.zd):null;return{id:b.id,primary:b.primary,presentationTimeOffset:b.presentationTimeOffset,contentType:b.contentType,mimeType:b.mimeType,codecs:b.codecs,frameRate:b.frameRate,kind:b.kind,language:b.language,label:b.label,width:b.width,height:b.height,initSegmentKey:c,encrypted:b.encrypted,keyId:b.keyId,segments:b.segments.map(ji),variantIds:b.variantIds}}function ji(b){var c=ii(b.uri);return{startTime:b.startTime,endTime:b.endTime,dataKey:c}}
function di(b){return{data:b.data}}function ii(b){var c;if((c=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(b))||(c=/^offline:segment\/([0-9]+)$/.exec(b)))return Number(c[1]);throw new A(2,9,9004,"Could not parse uri "+b);}
function gi(b){var c=b.streams.filter(function(b){return"audio"==b.contentType}),d=b.streams.filter(function(b){return"video"==b.contentType});if(!c.every(function(b){return b.variantIds})||!d.every(function(b){return b.variantIds})){c.forEach(function(b){b.variantIds=[];});d.forEach(function(b){b.variantIds=[];});var e=0;if(d.length&&!c.length){var f=e++;d.forEach(function(b){b.variantIds.push(f);});}if(!d.length&&c.length){var g=e++;c.forEach(function(b){b.variantIds.push(g);});}d.length&&c.length&&c.forEach(function(b){d.forEach(function(c){var d=
e++;b.variantIds.push(d);c.variantIds.push(d);});});}}function ki(b,c,d,e){this.a=new Qh(b);this.c=c;this.b=d;this.f=e;}n=ki.prototype;n.destroy=function(){return this.a.destroy()};n.hasFixedKeySpace=function(){return this.f};n.addSegments=function(b){return li(this,this.c,b)};n.removeSegments=function(b,c){return mi(this,this.c,b,c)};n.getSegments=function(b){return ni(this,this.c,b)};n.addManifests=function(b){return li(this,this.b,b)};
n.updateManifestExpiration=function(b,c){var d=Rh(this.a,this.b),e=d.store();e.get(b).onsuccess=function(d){if(d=d.target.result)d.expiration=c,e.put(d,b);};return d.promise()};n.removeManifests=function(b,c){return mi(this,this.b,b,c)};n.getManifests=function(b){return ni(this,this.b,b)};n.getAllManifests=function(){var b=Sh(this.a,this.b,"readonly"),c={};b.store().openCursor().onsuccess=function(b){if(b=b.target.result)c[b.key]=b.value,b["continue"]();};return b.promise().then(function(){return c})};
function li(b,c,d){if(b.f)return Promise.reject(new A(1,9,9011,"Cannot add new value to "+c));b=Rh(b.a,c);var e=b.store(),f=[];d.forEach(function(b){e.add(b).onsuccess=function(b){f.push(b.target.result);};});return b.promise().then(function(){return f})}function mi(b,c,d,e){b=Rh(b.a,c);var f=b.store();d.forEach(function(b){f["delete"](b).onsuccess=function(){return e(b)};});return b.promise()}
function ni(b,c,d){b=Sh(b.a,c,"readonly");var e=b.store(),f={},g=[];d.forEach(function(b){var c=e.get(b);c.onsuccess=function(){void 0==c.result&&g.push(b);f[b]=c.result;};});return b.promise().then(function(){return g.length?Promise.reject(new A(1,9,9012,"Could not find values for "+g)):d.map(function(b){return f[b]})})}function oi(){this.c=this.b=this.a=this.f=null;}
oi.prototype.init=function(){var b=this,c=new z,d=window.indexedDB.open("shaka_offline_db",3);d.onsuccess=function(d){d=d.target.result;b.f=d;var e=d.objectStoreNames;e=e.contains("manifest")&&e.contains("segment")?new $h(d):null;b.a=e;e=d.objectStoreNames;e=e.contains("manifest-v2")&&e.contains("segment-v2")?new ki(d,"segment-v2","manifest-v2",!0):null;b.b=e;e=d.objectStoreNames;d=e.contains("manifest-v3")&&e.contains("segment-v3")?new ki(d,"segment-v3","manifest-v3",!1):null;b.c=d;c.resolve();};
d.onupgradeneeded=function(b){b=b.target.result;var c={autoIncrement:!0};b.createObjectStore("manifest-v3",c);b.createObjectStore("segment-v3",c);};d.onerror=function(b){c.reject(new A(2,9,9001,d.error));b.preventDefault();};return c};
oi.prototype.destroy=function(){var b=this;return p(function d(){return v(d,function(d){switch(d.w){case 1:if(!b.a){d.W(2);break}return q(d,b.a.destroy(),2);case 2:if(!b.b){d.W(4);break}return q(d,b.b.destroy(),4);case 4:if(!b.c){d.W(6);break}return q(d,b.c.destroy(),6);case 6:b.f&&b.f.close(),d.w=0;}})})};oi.prototype.getCells=function(){var b={};this.a&&(b.v1=this.a);this.b&&(b.v2=this.b);this.c&&(b.v3=this.c);return b};
oi.prototype.erase=function(){var b=this;return p(function d(){return v(d,function(d){switch(d.w){case 1:if(!b.a){d.W(2);break}return q(d,b.a.destroy(),2);case 2:if(!b.b){d.W(4);break}return q(d,b.b.destroy(),4);case 4:if(!b.c){d.W(6);break}return q(d,b.c.destroy(),6);case 6:return b.f&&b.f.close(),q(d,pi(),8);case 8:return b.f=null,b.a=null,b.b=null,b.c=null,q(d,b.init(),0)}})})};
function pi(){var b=new z,c=window.indexedDB.deleteDatabase("shaka_offline_db");c.onblocked=function(){};c.onsuccess=function(){b.resolve();};c.onerror=function(d){b.reject(new A(2,9,9001,c.error));d.preventDefault();};return b}Uh.idb=function(){return window.indexedDB?new oi:null};function qi(b,c,d,e){this.a=b;this.g=c;this.f=d;this.c=e;this.b=["offline:",b,"/",c,"/",d,"/",e].join("");}qi.prototype.$=function(){return this.g};qi.prototype.N=function(){return this.f};qi.prototype.key=function(){return this.c};qi.prototype.toString=function(){return this.b};
function ri(b){b=/^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(b);if(null==b)return null;var c=b[1];if("manifest"!=c&&"segment"!=c)return null;var d=b[2];if(!d)return null;var e=b[3];return e&&null!=c?new qi(c,d,e,Number(b[4])):null}function si(b,c){this.b=b;this.a=c;}function ti(b,c){var d=new U(null,0);d.ja(c.duration);var e=c.periods.map(function(c){return ui(b,c,d)}),f=c.drmInfo?[c.drmInfo]:[];c.drmInfo&&e.forEach(function(b){b.variants.forEach(function(b){b.drmInfos=f;});});return{presentationTimeline:d,minBufferTime:2,offlineSessionIds:c.sessionIds,periods:e}}
function ui(b,c,d){var e=c.streams.filter(function(b){return"audio"==b.contentType}),f=c.streams.filter(function(b){return"video"==b.contentType});e=vi(b,e,f);f=c.streams.filter(function(b){return"text"==b.contentType}).map(function(c){return wi(b,c)});c.streams.forEach(function(c,e){var f=c.segments.map(function(c,d){return xi(b,d,c)});d.Ma(f,0==e);});return{startTime:c.startTime,variants:e,textStreams:f}}
function vi(b,c,d){var e={},f=[];f.push.apply(f,c);f.push.apply(f,d);f.forEach(function(b){b.variantIds.forEach(function(b){e[b]=e[b]||{id:b,language:"",primary:!1,audio:null,video:null,bandwidth:0,drmInfos:[],allowedByApplication:!0,allowedByKeySystem:!0};});});c.forEach(function(c){var d=wi(b,c);c.variantIds.forEach(function(b){b=e[b];b.language=d.language;b.primary=b.primary||d.primary;b.audio=d;});});d.forEach(function(c){var d=wi(b,c);c.variantIds.forEach(function(b){b=e[b];b.primary=b.primary||
d.primary;b.video=d;});});return G(e)}
function wi(b,c){var d=c.segments.map(function(c,d){return xi(b,d,c)}),e=new T(d);d={id:c.id,createSegmentIndex:function(){return Promise.resolve()},findSegmentPosition:function(b){return e.find(b)},getSegmentReference:function(b){return e.get(b)},initSegmentReference:null,presentationTimeOffset:c.presentationTimeOffset,mimeType:c.mimeType,codecs:c.codecs,width:c.width||void 0,height:c.height||void 0,frameRate:c.frameRate||void 0,kind:c.kind,encrypted:c.encrypted,keyId:c.keyId,language:c.language,
label:c.label||null,type:c.contentType,primary:c.primary,trickModeVideo:null,containsEmsgBoxes:!1,roles:[],channelsCount:null};null!=c.initSegmentKey&&(d.initSegmentReference=yi(b,c.initSegmentKey));return d}function xi(b,c,d){var e=new qi("segment",b.b,b.a,d.dataKey);return new P(c,d.startTime,d.endTime,function(){return[e.toString()]},0,null)}function yi(b,c){var d=new qi("segment",b.b,b.a,c);return new O(function(){return[d.toString()]},0,null)}function zi(){this.a=null;}n=zi.prototype;n.configure=function(){};n.start=function(b){var c=ri(b);this.a=c;if(null==c||"manifest"!=c.a)return Promise.reject(new A(2,1,9004,c));var d=new Th;return mb([d],function(){return p(function f(){var b,h,k,l;return v(f,function(f){switch(f.w){case 1:return q(f,d.init(),2);case 2:return q(f,Xh(d,c.$(),c.N()),3);case 3:return b=f.I,q(f,b.getManifests([c.key()]),4);case 4:return h=f.I,k=h[0],l=new si(c.$(),c.N()),f["return"](ti(l,k))}})})})};n.stop=function(){return Promise.resolve()};
n.update=function(){};n.onExpirationUpdated=function(b,c){var d=this.a,e=new Th;return mb([e],function(){return p(function g(){var h,k,l,m,r;return v(g,function(g){switch(g.w){case 1:return q(g,e.init(),2);case 2:return q(g,Xh(e,d.$(),d.N()),3);case 3:return h=g.I,q(g,h.getManifests([d.key()]),4);case 4:k=g.I;l=k[0];m=0<=l.sessionIds.indexOf(b);r=void 0==l.expiration||l.expiration>c;if(m&&r)return q(g,h.updateManifestExpiration(d.key(),c),0);g.W(0);}})})})["catch"](function(){})};
sf["application/x-offline-manifest"]=zi;function Ai(b){var c=ri(b);return c&&"manifest"==c.a?Ai.a(b):c&&"segment"==c.a?Ai.b(c.key(),c):ab(new A(2,1,9004,b))}x("shaka.offline.OfflineScheme",Ai);Ai.a=function(b){b={uri:b,data:new ArrayBuffer(0),headers:{"content-type":"application/x-offline-manifest"}};return cb(b)};
Ai.b=function(b,c){var d=new Th,e=mb([d],function(){return p(function g(){var b,e,l;return v(g,function(g){switch(g.w){case 1:return q(g,d.init(),2);case 2:return q(g,Xh(d,c.$(),c.N()),3);case 3:return b=g.I,q(g,b.getSegments([c.key()]),4);case 4:return e=g.I,l=e[0],g["return"]({uri:c,data:l.data,headers:{}})}})})});return db(e)};qb("offline",Ai);function X(b){this.a=null;this.b=b;for(var c=0;c<b.textTracks.length;++c){var d=b.textTracks[c];d.mode="disabled";"Shaka Player TextTrack"==d.label&&(this.a=d);}this.a||(this.a=b.addTextTrack("subtitles","Shaka Player TextTrack"));this.a.mode="hidden";0<this.a.cues.length&&this.remove(0,Infinity);}x("shaka.text.SimpleTextDisplayer",X);X.prototype.remove=function(b,c){if(!this.a)return!1;Bi(this.a,function(d){return!(d.startTime>=c||d.endTime<=b)});return!0};X.prototype.remove=X.prototype.remove;
X.prototype.append=function(b){var c=[];if(window.VTTRegion){var d=b.map(function(b){return b.region});d=d.filter(Eb);for(var e=0;e<d.length;e++){var f=Ci(this,d[e]);c.push(f);}}var g=[];for(d=0;d<b.length;d++)(e=Di(b[d],c))&&g.push(e);g.slice().sort(function(b,c){return b.startTime!=c.startTime?b.startTime-c.startTime:b.endTime!=c.endTime?b.endTime-c.startTime:g.indexOf(c)-g.indexOf(b)}).forEach(function(b){this.a.addCue(b);}.bind(this));};X.prototype.append=X.prototype.append;
X.prototype.destroy=function(){this.a&&Bi(this.a,function(){return!0});this.b=this.a=null;return Promise.resolve()};X.prototype.destroy=X.prototype.destroy;X.prototype.isTextVisible=function(){return"showing"==this.a.mode};X.prototype.isTextVisible=X.prototype.isTextVisible;X.prototype.setTextVisibility=function(b){this.a.mode=b?"showing":"hidden";};X.prototype.setTextVisibility=X.prototype.setTextVisibility;
function Di(b,c){if(b.startTime>=b.endTime)return null;var d=new VTTCue(b.startTime,b.endTime,b.payload);d.lineAlign=b.lineAlign;d.positionAlign=b.positionAlign;d.size=b.size;try{d.align=b.textAlign;}catch(f){}"center"==b.textAlign&&"center"!=d.align&&(d.align="middle");2==b.writingDirection?d.vertical="lr":3==b.writingDirection&&(d.vertical="rl");1==b.lineInterpretation&&(d.snapToLines=!1);null!=b.line&&(d.line=b.line);null!=b.position&&(d.position=b.position);if(b.region.id.length){var e=c.filter(function(c){return c.id==
b.region.id});e.length&&(d.region=e[0]);}return d}function Ci(b,c){var d=new VTTRegion,e=b.b.offsetWidth,f=b.b.offsetHeight;d.id=c.id;d.regionAnchorX=c.regionAnchorX;d.regionAnchorY=c.regionAnchorY;d.scroll=c.scroll;2==c.heightUnits&&(d.lines=c.height);d.width=0==c.widthUnits?100*c.width/e:c.width;0==c.viewportAnchorUnits?(d.viewportAnchorX=100*c.viewportAnchorX/e,d.viewportAnchorY=100*c.viewportAnchorY/f):(d.viewportAnchorX=c.viewportAnchorX,d.viewportAnchorY=c.viewportAnchorY);return d}
function Bi(b,c){var d=b.mode;b.mode="showing"==d?"showing":"hidden";for(var e=b.cues,f=e.length-1;0<=f;f--){var g=e[f];g&&c(g)&&b.removeCue(g);}b.mode=d;}function Y(b,c){K.call(this);this.ua=!1;this.f=null;this.Ua=!1;this.u=null;this.o=new D;this.h=this.Ab=this.b=this.m=this.a=this.A=this.g=this.i=this.l=this.s=null;this.Zc=1E9;this.kb=[];this.nb=!1;this.va=!0;this.R=this.ob=this.Fa=null;this.gc=!1;this.G=null;this.mb=[];this.J={};this.c=Ei(this);this.lb={width:Infinity,height:Infinity};this.j=Fi();this.jb=0;this.L=this.c.preferredAudioLanguage;this.fa=this.c.preferredTextLanguage;this.Ea=this.c.preferredVariantRole;this.Ta=this.c.preferredTextRole;
this.X=this.c.preferredAudioChannelCount;c&&c(this);this.s=new C(this.He.bind(this));b&&this.pb(b,!0);}Aa(Y,K);x("shaka.Player",Y);function Gi(b){if(!b.Fa)return Promise.resolve();var c=Promise.resolve();b.m&&(c=b.m.stop(),b.m=null);return Promise.all([c,b.Fa()])}
Y.prototype.destroy=function(){var b=this;return p(function d(){var e;return v(d,function(d){switch(d.w){case 1:return q(d,b.detach(),2);case 2:return b.ua=!0,e=Promise.all([b.o?b.o.destroy():null,b.s?b.s.destroy():null]),b.Ua=!1,b.o=null,b.h=null,b.s=null,b.c=null,q(d,e,0)}})})};Y.prototype.destroy=Y.prototype.destroy;Y.version="v2.4.4-1";var Hi={};Y.registerSupportPlugin=function(b,c){Hi[b]=c;};
Y.isBrowserSupported=function(){return!!window.Promise&&!!window.Uint8Array&&!!Array.prototype.forEach&&!!window.MediaSource&&!!MediaSource.isTypeSupported&&!!window.MediaKeys&&!!window.navigator&&!!window.navigator.requestMediaKeySystemAccess&&!!window.MediaKeySystemAccess&&!!window.MediaKeySystemAccess.prototype.getConfiguration};Y.probeSupport=function(){return uc().then(function(b){var c=uf(),d=Xc();b={manifest:c,media:d,drm:b};for(var e in Hi)b[e]=Hi[e]();return b})};
Y.prototype.pb=function(b,c){var d=this;return p(function f(){return v(f,function(f){switch(f.w){case 1:void 0===c&&(c=!0);if(!d.f){f.W(2);break}return q(f,d.detach(),2);case 2:d.f=b;E(d.o,d.f,"error",d.$d.bind(d));if(c)return d.i=new Wc(d.f),q(f,d.i.j,0);f.W(0);}})})};Y.prototype.attach=Y.prototype.pb;Y.prototype.detach=function(){var b=this;return p(function d(){return v(d,function(d){switch(d.w){case 1:return b.f?q(d,b.gb(!1),2):d["return"]();case 2:b.o.na(b.f,"error"),b.f=null,d.w=0;}})})};
Y.prototype.detach=Y.prototype.detach;function Ii(b,c,d){return p(function f(){var g,h;return v(f,function(f){switch(f.w){case 1:return q(f,vf(c,b.s,b.c.manifest.retryParameters,d),2);case 2:return g=f.I,b.m=new g,b.m.configure(b.c.manifest),h={networkingEngine:b.s,filterNewPeriod:b.rb.bind(b),filterAllPeriods:b.ac.bind(b),onTimelineRegionAdded:b.Zd.bind(b),onEvent:b.fb.bind(b),onError:b.Sa.bind(b)},f["return"](b.m.start(c,h))}})})}
function Ji(b){b.b.periods.some(function(b){return b.variants.some(function(b){return b.video&&b.audio})})&&b.b.periods.forEach(function(b){b.variants=b.variants.filter(function(b){return b.video&&b.audio});});if(0==b.b.periods.length)throw new A(2,4,4014);}function Ki(b){var c=b.b.presentationTimeline.S(),d=b.c.playRangeEnd,e=b.c.playRangeStart;0<e&&(b.O()||b.b.presentationTimeline.Qc(e));d<c&&(b.O()||b.b.presentationTimeline.ja(d));}
Y.prototype.load=function(b,c,d){var e=this;return p(function g(){var h,k,l,m,r,t,u,w,y,Ha,Wa;return v(g,function(g){switch(g.w){case 1:if(!e.f)throw new A(2,7,7002);k=new z;l=function(){h=new A(2,7,7E3);return k};e.dispatchEvent(new F("loading"));m=Date.now();oa(g,2);r=e.gb();e.Fa=l;return q(g,r,4);case 4:e.j=Fi();E(e.o,e.f,"playing",e.hb.bind(e));E(e.o,e.f,"pause",e.hb.bind(e));E(e.o,e.f,"ended",e.hb.bind(e));t=e.c.abrFactory;e.h=new t;e.h.configure(e.c.abr);e.u=new e.c.textDisplayFactory;e.u.setTextVisibility(e.Ua);
if(h)throw h;u=e;return q(g,Ii(e,b,d),5);case 5:u.b=g.I;e.Ab=b;if(h)throw h;Ji(e);e.l=new dc({La:e.s,onError:e.Sa.bind(e),vb:e.Kd.bind(e),onExpirationUpdated:e.Hd.bind(e),onEvent:e.fb.bind(e)});e.l.configure(e.c.drm);return q(g,e.l.init(e.b,!1),6);case 6:if(h)throw h;e.ac(e.b.periods);e.jb=Date.now()/1E3;e.L=e.c.preferredAudioLanguage;e.fa=e.c.preferredTextLanguage;e.X=e.c.preferredAudioChannelCount;Ki(e);return q(g,e.l.pb(e.f),7);case 7:if(h)throw h;e.h.init(e.Ie.bind(e));e.i||(e.i=new Wc(e.f));
e.i.o=e.u;e.g=new Sg(e.f,e.b,e.c.streaming,void 0==c?null:c,e.Ge.bind(e),e.fb.bind(e));e.A=new Xg(e.f,e.i,e.b,e.c.streaming,e.Rc.bind(e),e.fb.bind(e),e.Fe.bind(e));e.a=new ah(e.b,{Oa:e.g,K:e.i,La:e.s,wc:e.Ed.bind(e),vc:e.cd.bind(e),onError:e.Sa.bind(e),onEvent:e.fb.bind(e),Ld:e.Md.bind(e),$a:e.Wd.bind(e),filterNewPeriod:e.rb.bind(e),filterAllPeriods:e.ac.bind(e)});e.a.configure(e.c.streaming);Li(e);e.dispatchEvent(new F("streaming"));return q(g,e.a.init(),8);case 8:if(h)throw h;e.c.streaming.startAtSegmentBoundary&&
(w=Mi(e,Vg(e.g)),Pg(e.g.a,w));e.b.periods.forEach(e.rb.bind(e));Ni(e);Oi(e);y=V(e.a);Ha=zd(y.variants,e.L,e.Ea,e.X);e.h.setVariants(Ha);y.variants.some(function(b){return b.primary});e.mb.forEach(e.A.o.bind(e.A));e.mb=[];zb(e.o,e.f,"loadeddata",function(){this.j.loadLatency=(Date.now()-m)/1E3;}.bind(e));if(h)throw h;e.Fa=null;qa(g);break;case 2:return Wa=ra(g),k.resolve(),e.Fa==l&&(e.Fa=null,e.dispatchEvent(new F("unloading"))),h?g["return"](Promise.reject(h)):g["return"](Promise.reject(Wa))}})})};
Y.prototype.load=Y.prototype.load;
function Li(b){function c(b){return(b.video?b.video.codecs.split(".")[0]:"")+"-"+(b.audio?b.audio.codecs.split(".")[0]:"")}var d=b.b.periods.reduce(function(b,c){return b.concat(c.variants)},[]);d=Bd(d,b.c.preferredAudioChannelCount);var e={};d.forEach(function(b){var d=c(b);d in e||(e[d]=[]);e[d].push(b);});var f=null,g=Infinity;Kb(e,function(b,c){var d=0,e=0;c.forEach(function(b){d+=b.bandwidth||0;++e;});var h=d/e;h<g&&(f=b,g=h);});b.b.periods.forEach(function(b){b.variants=b.variants.filter(function(b){return c(b)==
f?!0:!1});});}Y.prototype.configure=function(b,c){if(2==arguments.length&&"string"==typeof b){for(var d=b,e={},f=e,g=0,h=0;;){g=d.indexOf(".",g);if(0>g)break;if(0==g||"\\"!=d[g-1])h=d.substring(h,g).replace(/\\\./g,"."),f[h]={},f=f[h],h=g+1;g+=1;}f[d.substring(h).replace(/\\\./g,".")]=c;b=e;}d=kb(this.c,b,Ei(this),Pi(),"");Qi(this);return d};Y.prototype.configure=Y.prototype.configure;
function Qi(b){b.m&&b.m.configure(b.c.manifest);b.l&&b.l.configure(b.c.drm);if(b.a){b.a.configure(b.c.streaming);try{b.b.periods.forEach(b.rb.bind(b));}catch(f){b.Sa(f);}var c=eh(b.a),d=gh(b.a),e=V(b.a);(c=Fd(c,d,e.variants))&&c.allowedByApplication&&c.allowedByKeySystem||Ri(b,e);}b.h&&(b.h.configure(b.c.abr),b.c.abr.enabled&&!b.va?b.h.enable():b.h.disable());}Y.prototype.getConfiguration=function(){var b=Ei(this);kb(b,this.c,Ei(this),Pi(),"");return b};Y.prototype.getConfiguration=Y.prototype.getConfiguration;
Y.prototype.te=function(){this.c=Ei(this);Qi(this);};Y.prototype.resetConfiguration=Y.prototype.te;Y.prototype.pd=function(){return this.f};Y.prototype.getMediaElement=Y.prototype.pd;Y.prototype.qc=function(){return this.s};Y.prototype.getNetworkingEngine=Y.prototype.qc;Y.prototype.Gb=function(){return this.Ab};Y.prototype.getManifestUri=Y.prototype.Gb;Y.prototype.O=function(){return this.b?this.b.presentationTimeline.O():!1};Y.prototype.isLive=Y.prototype.O;
Y.prototype.ya=function(){return this.b?this.b.presentationTimeline.ya():!1};Y.prototype.isInProgress=Y.prototype.ya;Y.prototype.Ad=function(){if(!this.b||!this.b.periods.length)return!1;var b=this.b.periods[0].variants;return b.length?!b[0].video:!1};Y.prototype.isAudioOnly=Y.prototype.Ad;Y.prototype.ve=function(){var b=0,c=0;this.b&&(c=this.b.presentationTimeline,b=c.Ha(),c=c.la());return{start:b,end:c}};Y.prototype.seekRange=Y.prototype.ve;
Y.prototype.keySystem=function(){return this.l?this.l.keySystem():""};Y.prototype.keySystem=Y.prototype.keySystem;Y.prototype.drmInfo=function(){return this.l?this.l.b:null};Y.prototype.drmInfo=Y.prototype.drmInfo;Y.prototype.tb=function(){return this.l?this.l.tb():Infinity};Y.prototype.getExpiration=Y.prototype.tb;Y.prototype.tc=function(){return this.nb};Y.prototype.isBuffering=Y.prototype.tc;
Y.prototype.gb=function(b){var c=this;return p(function e(){return v(e,function(e){switch(e.w){case 1:if(c.ua)return e["return"]();void 0===b&&(b=!0);c.dispatchEvent(new F("unloading"));return q(e,Gi(c),2);case 2:return c.ob||(c.ob=Si(c).then(function(){c.Rc(!1);c.ob=null;})),q(e,c.ob,3);case 3:if(b)return c.i=new Wc(c.f),q(e,c.i.j,0);e.W(0);}})})};Y.prototype.unload=Y.prototype.gb;Y.prototype.Va=function(){return this.g?this.g.Va():0};Y.prototype.getPlaybackRate=Y.prototype.Va;
Y.prototype.Re=function(b){this.g&&Rg(this.g.a,b);this.a&&mh(this.a,1!=b);};Y.prototype.trickPlay=Y.prototype.Re;Y.prototype.dd=function(){this.g&&Rg(this.g.a,1);this.a&&mh(this.a,!1);};Y.prototype.cancelTrickPlay=Y.prototype.dd;Y.prototype.xd=function(){if(!this.b||!this.g)return[];var b=Hd(this.b,Vg(this.g)),c=this.J[b]||{};return vd(this.b.periods[b],c.audio,c.video)};Y.prototype.getVariantTracks=Y.prototype.xd;
Y.prototype.wd=function(){if(!this.b||!this.g)return[];var b=Hd(this.b,Vg(this.g)),c=this.J[b]||{};if(!c.text){var d=Dd(this.b.periods[b].textStreams,this.fa,this.Ta);d.length&&(c.text=d[0].id);}return wd(this.b.periods[b],c.text).filter(function(b){return 0>this.kb.indexOf(b.id)}.bind(this))};Y.prototype.getTextTracks=Y.prototype.wd;
Y.prototype.ze=function(b){if(this.a){var c=V(this.a);a:{for(var d=0;d<c.textStreams.length;d++)if(c.textStreams[d].id==b.id){b=c.textStreams[d];break a}b=null;}b&&(this.i.l=!1,Ti(this,b,!1),c=b,this.va?this.G=c:nh(this.a,c,!0),this.fa=b.language);}};Y.prototype.selectTextTrack=Y.prototype.ze;Y.prototype.xe=function(){this.i.l=!0;lh(this.a);};Y.prototype.selectEmbeddedTextTrack=Y.prototype.xe;Y.prototype.We=function(){return this.i?this.i.l:!1};Y.prototype.usingEmbeddedTextTrack=Y.prototype.We;
Y.prototype.Ae=function(b,c){if(this.a){this.c.abr.enabled&&Fa("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");var d=V(this.a),e=xd(d,b);e&&yd(e)&&(Ui(this,e,!1),Vi(this,e,c),this.L=e.language,e.audio&&e.audio.channelsCount&&(this.X=e.audio.channelsCount),d=zd(d.variants,this.L,this.Ea,this.X),this.h.setVariants(d));}};Y.prototype.selectVariantTrack=Y.prototype.Ae;
Y.prototype.ld=function(){if(!this.a)return[];var b=V(this.a);b=ud(b.variants).map(function(b){return b.audio}).filter(Eb);return Wi(b)};Y.prototype.getAudioLanguagesAndRoles=Y.prototype.ld;Y.prototype.vd=function(){if(!this.a)return[];var b=V(this.a);return Wi(b.textStreams)};Y.prototype.getTextLanguagesAndRoles=Y.prototype.vd;Y.prototype.kd=function(){if(!this.a)return[];var b=V(this.a);return ud(b.variants).map(function(b){return b.language}).filter(Eb)};Y.prototype.getAudioLanguages=Y.prototype.kd;
Y.prototype.ud=function(){return this.a?V(this.a).textStreams.map(function(b){return b.language}).filter(Eb):[]};Y.prototype.getTextLanguages=Y.prototype.ud;function Wi(b){var c=[];b.forEach(function(b){if(b){var d=b.language;b.roles.length?b.roles.forEach(function(b){c.push({language:d,role:b});}):c.push({language:d,role:""});}else c.push({language:"und",role:""});});return gb(c,function(b,c){return b.language==c.language&&b.role==c.role})}
Y.prototype.we=function(b,c){if(this.a){var d=V(this.a);this.L=b;this.Ea=c||"";Ri(this,d);}};Y.prototype.selectAudioLanguage=Y.prototype.we;Y.prototype.ye=function(b,c){if(this.a){var d=V(this.a);this.fa=b;this.Ta=c||"";Ri(this,d);}};Y.prototype.selectTextLanguage=Y.prototype.ye;Y.prototype.Kb=function(){return this.u?this.u.isTextVisible():this.Ua};Y.prototype.isTextTrackVisible=Y.prototype.Kb;
Y.prototype.De=function(b){this.u&&this.u.setTextVisibility(b);this.Ua=b;Xi(this);!this.c.streaming.alwaysStreamText&&this.a&&(b?(b=V(this.a),(b=Dd(b.textStreams,this.fa,this.Ta)[0])&&hh(this.a,b,!0)):lh(this.a));};Y.prototype.setTextTrackVisibility=Y.prototype.De;Y.prototype.rd=function(){return this.b?new Date(1E3*this.b.presentationTimeline.f+1E3*this.f.currentTime):null};Y.prototype.getPlayheadTimeAsDate=Y.prototype.rd;
Y.prototype.td=function(){return this.b?new Date(1E3*this.b.presentationTimeline.f):null};Y.prototype.getPresentationStartTimeAsDate=Y.prototype.td;Y.prototype.Eb=function(){return this.i?this.i.Eb():{total:[],audio:[],video:[],text:[]}};Y.prototype.getBufferedInfo=Y.prototype.Eb;
Y.prototype.getStats=function(){Yi(this);this.hb();var b=null,c=null,d=this.f;d=d&&d.getVideoPlaybackQuality?d.getVideoPlaybackQuality():{};if(this.g&&this.b){var e=Hd(this.b,Vg(this.g)),f=this.b.periods[e];if(e=this.J[e])c=Gd(e.audio,e.video,f.variants),b=c.video||{};}b||(b={});c||(c={});return{width:b.width||0,height:b.height||0,streamBandwidth:c.bandwidth||0,decodedFrames:Number(d.totalVideoFrames),droppedFrames:Number(d.droppedVideoFrames),estimatedBandwidth:this.h?this.h.getBandwidthEstimate():
NaN,loadLatency:this.j.loadLatency,playTime:this.j.playTime,bufferingTime:this.j.bufferingTime,switchHistory:lb(this.j.switchHistory),stateHistory:lb(this.j.stateHistory)}};Y.prototype.getStats=Y.prototype.getStats;
Y.prototype.addTextTrack=function(b,c,d,e,f,g){if(!this.a)return Promise.reject();var h=V(this.a),k=this.b.periods.indexOf(h)+1,l=(k>=this.b.periods.length?this.b.presentationTimeline.S():this.b.periods[k].startTime)-h.startTime;if(Infinity==l)return Promise.reject(new A(1,4,4033));var m={id:this.Zc++,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return 1},getSegmentReference:function(c){return 1!=c?null:new P(1,0,l,function(){return[b]},0,null)},initSegmentReference:null,
presentationTimeOffset:0,mimeType:e,codecs:f||"",kind:d,encrypted:!1,keyId:null,language:c,label:g||null,type:"text",primary:!1,trickModeVideo:null,containsEmsgBoxes:!1,roles:[],channelsCount:null};this.kb.push(m.id);h.textStreams.push(m);return hh(this.a,m,this.Ua).then(function(){if(!this.ua){var b=this.b.periods.indexOf(h),e=fh(this.a,"text");e&&(this.J[b].text=e.id);this.kb.splice(this.kb.indexOf(m.id),1);Ri(this,h);Ni(this);return{id:m.id,active:!1,type:"text",bandwidth:0,language:c,label:g||
null,kind:d,width:null,height:null}}}.bind(this))};Y.prototype.addTextTrack=Y.prototype.addTextTrack;Y.prototype.Zb=function(b,c){this.lb.width=b;this.lb.height=c;};Y.prototype.setMaxHardwareResolution=Y.prototype.Zb;Y.prototype.Kc=function(){if(this.a){var b=this.a;if(b.f)b=!1;else if(b.l)b=!1;else{for(var c in b.c){var d=b.c[c];d.Ya&&(d.Ya=!1,kh(b,d,.1));}b=!0;}}else b=!1;return b};Y.prototype.retryStreaming=Y.prototype.Kc;Y.prototype.od=function(){return this.b};Y.prototype.getManifest=Y.prototype.od;
function Ui(b,c,d){c.video&&Zi(b,c.video);c.audio&&Zi(b,c.audio);var e=dh(b.a);c!=Fd(eh(b.a),gh(b.a),e?e.variants:[])&&b.j.switchHistory.push({timestamp:Date.now()/1E3,id:c.id,type:"variant",fromAdaptation:d,bandwidth:c.bandwidth});}function Ti(b,c,d){Zi(b,c);b.j.switchHistory.push({timestamp:Date.now()/1E3,id:c.id,type:"text",fromAdaptation:d,bandwidth:null});}function Zi(b,c){var d=Id(b.b,c);b.J[d]||(b.J[d]={});b.J[d][c.type]=c.id;}
function Si(b){b.o&&(b.o.na(b.f,"loadeddata"),b.o.na(b.f,"playing"),b.o.na(b.f,"pause"),b.o.na(b.f,"ended"));var c=Promise.all([b.h?b.h.stop():null,b.i?b.i.destroy():null,b.l?b.l.destroy():null,b.g?b.g.destroy():null,b.A?b.A.destroy():null,b.a?b.a.destroy():null,b.m?b.m.stop():null,b.u?b.u.destroy():null]);b.va=!0;b.l=null;b.i=null;b.g=null;b.A=null;b.a=null;b.m=null;b.u=null;b.b=null;b.Ab=null;b.mb=[];b.J={};b.j=Fi();return c}
function Pi(){return{".drm.servers":"",".drm.clearKeys":"",".drm.advanced":{distinctiveIdentifierRequired:!1,persistentStateRequired:!1,videoRobustness:"",audioRobustness:"",serverCertificate:new Uint8Array(0)}}}
function Ei(b){var c=5E5,d=Infinity;navigator.connection&&navigator.connection.type&&(c=1E6*navigator.connection.downlink,navigator.connection.saveData&&(d=360));return{drm:{retryParameters:Za(),servers:{},clearKeys:{},advanced:{},delayLicenseRequestUntilPlayed:!1},manifest:{retryParameters:Za(),availabilityWindowOverride:NaN,dash:{customScheme:function(b){if(b)return null},clockSyncUri:"",ignoreDrmInfo:!1,xlinkFailGracefully:!1,defaultPresentationDelay:10}},streaming:{retryParameters:Za(),failureCallback:b.gd.bind(b),
rebufferingGoal:2,bufferingGoal:10,bufferBehind:30,ignoreTextStreamFailures:!1,alwaysStreamText:!1,startAtSegmentBoundary:!1,smallGapLimit:.5,jumpLargeGaps:!1,durationBackoff:1,forceTransmuxTS:!1},abrFactory:J,textDisplayFactory:function(){return new X(b.f)},abr:{enabled:!0,defaultBandwidthEstimate:c,switchInterval:8,bandwidthUpgradeTarget:.85,bandwidthDowngradeTarget:.95,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:d,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity}},
preferredAudioLanguage:"",preferredTextLanguage:"",preferredVariantRole:"",preferredTextRole:"",preferredAudioChannelCount:2,restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity},playRangeStart:0,playRangeEnd:Infinity}}n=Y.prototype;n.gd=function(b){var c=[1001,1002,1003];this.O()&&0<=c.indexOf(b.code)&&(b.severity=1,this.Kc());};
function Fi(){return{width:NaN,height:NaN,streamBandwidth:NaN,decodedFrames:NaN,droppedFrames:NaN,estimatedBandwidth:NaN,loadLatency:NaN,playTime:0,bufferingTime:0,switchHistory:[],stateHistory:[]}}
n.ac=function(b){b.forEach(pd.bind(null,this.l,this.a?eh(this.a):null,this.a?gh(this.a):null));var c=jb(b,function(b){return b.variants.some(yd)});if(0==c)throw new A(2,4,4032);if(c<b.length)throw new A(2,4,4011);b.forEach(function(b){od(b,this.c.restrictions,this.lb)&&this.a&&V(this.a)==b&&Ni(this);if(!b.variants.some(yd))throw new A(2,4,4012);}.bind(this));};
n.rb=function(b){pd(this.l,this.a?eh(this.a):null,this.a?gh(this.a):null,b);var c=b.variants,d=c.some(yd);od(b,this.c.restrictions,this.lb)&&this.a&&V(this.a)==b&&Ni(this);b=c.some(yd);if(!d)throw new A(2,4,4011);if(!b)throw new A(2,4,4012);};function Vi(b,c,d){b.va?(b.R=c,b.gc=d||!1):oh(b.a,c,d||!1);}function Yi(b){if(b.b){var c=Date.now()/1E3;b.nb?b.j.bufferingTime+=c-b.jb:b.j.playTime+=c-b.jb;b.jb=c;}}
function Mi(b,c){function d(b,c){if(!b)return null;var d=b.findSegmentPosition(c-g.startTime);return null==d?null:(d=b.getSegmentReference(d))?d.startTime+g.startTime:null}var e=eh(b.a),f=gh(b.a),g=V(b.a);e=d(e,c);f=d(f,c);return null!=f&&null!=e?Math.max(f,e):null!=f?f:null!=e?e:c}n.He=function(b,c){this.h&&this.h.segmentDownloaded(b,c);};n.Rc=function(b){Yi(this);this.nb=b;this.hb();if(this.g){var c=this.g.a;b!=c.g&&(c.g=b,Rg(c,c.f));}this.dispatchEvent(new F("buffering",{buffering:b}));};n.Fe=function(){Ni(this);};
n.hb=function(){if(!this.ua){var b=this.nb?"buffering":this.f.ended?"ended":this.f.paused?"paused":"playing";var c=Date.now()/1E3;if(this.j.stateHistory.length){var d=this.j.stateHistory[this.j.stateHistory.length-1];d.duration=c-d.timestamp;if(b==d.state)return}this.j.stateHistory.push({timestamp:c,state:b,duration:0});}};n.Ge=function(){if(this.A){var b=this.A;b.c.forEach(b.m.bind(b,!0));}this.a&&rh(this.a);};
function $i(b,c){if(!c||!c.length)return b.Sa(new A(2,4,4012)),null;b.h.setVariants(c);return b.h.chooseVariant()}function Ri(b,c){var d=zd(c.variants,b.L,b.Ea,b.X),e=Dd(c.textStreams,b.fa,b.Ta);if(d=$i(b,d))Ui(b,d,!0),Vi(b,d,!0);(e=e[0])&&(b.c.streaming.alwaysStreamText||b.Kb())&&(Ti(b,e,!0),b.va?b.G=e:nh(b.a,e,!0));Oi(b);}
n.Ed=function(b){this.va=!0;this.h.disable();var c={audio:!1,text:!1},d=zd(b.variants,this.L,this.Ea,this.X,c),e=Dd(b.textStreams,this.fa,this.Ta,c);d=$i(this,d);e=e[0]||null;if(this.R){a:{var f=this.b;for(var g=0;g<f.periods.length;++g)for(var h=f.periods[g],k=0;k<h.variants.length;++k)if(h.variants[k]==this.R){f=g;break a}f=-1;}this.b.periods[f]==b&&(d=this.R);this.R=null;}this.G&&(this.b.periods[Id(this.b,this.G)]==b&&(e=this.G),this.G=null);d&&Ui(this,d,!0);e&&(Ti(this,e,!0),!dh(this.a)&&d&&d.audio&&
c.text&&e.language!=d.audio.language&&(this.u.setTextVisibility(!0),Xi(this)));return this.c.streaming.alwaysStreamText||this.Kb()?{variant:d,text:e}:{variant:d,text:null}};n.cd=function(){this.va=!1;this.c.abr.enabled&&this.h.enable();this.R&&(oh(this.a,this.R,this.gc),this.R=null);this.G&&(nh(this.a,this.G,!0),this.G=null);};n.Md=function(){this.m&&this.m.update&&this.m.update();};n.Wd=function(){this.g&&this.g.$a();};n.Ie=function(b,c){Ui(this,b,!0);this.a&&(oh(this.a,b,c||!1),Oi(this));};
function Oi(b){Promise.resolve().then(function(){this.ua||this.dispatchEvent(new F("adaptation"));}.bind(b));}function Ni(b){Promise.resolve().then(function(){this.ua||this.dispatchEvent(new F("trackschanged"));}.bind(b));}function Xi(b){b.dispatchEvent(new F("texttrackvisibility"));}n.Sa=function(b){if(!this.ua){var c=new F("error",{detail:b});this.dispatchEvent(c);c.defaultPrevented&&(b.handled=!0);}};n.Zd=function(b){this.A?this.A.o(b):this.mb.push(b);};n.fb=function(b){this.dispatchEvent(b);};
n.$d=function(){if(this.f.error){var b=this.f.error.code;if(1!=b){var c=this.f.error.msExtendedCode;c&&(0>c&&(c+=Math.pow(2,32)),c=c.toString(16));this.Sa(new A(2,3,3016,b,c,this.f.error.message));}}};
n.Kd=function(b){var c=["output-restricted","internal-error"],d=V(this.a),e=!1,f=Object.keys(b),g=1==f.length&&"00"==f[0];f.length&&d.variants.forEach(function(d){var f=[];d.audio&&f.push(d.audio);d.video&&f.push(d.video);f.forEach(function(f){var h=d.allowedByKeySystem;f.keyId&&(f=b[g?"00":f.keyId],d.allowedByKeySystem=!!f&&0>c.indexOf(f));h!=d.allowedByKeySystem&&(e=!0);});});(f=Fd(eh(this.a),gh(this.a),d.variants))&&!f.allowedByKeySystem&&Ri(this,d);e&&(Ni(this),d=zd(d.variants,this.L,this.Ea,this.X),
this.h.setVariants(d));};n.Hd=function(b,c){if(this.m&&this.m.onExpirationUpdated)this.m.onExpirationUpdated(b,c);this.dispatchEvent(new F("expirationupdated"));};function aj(b,c,d){var e=void 0==c.expiration?Infinity:c.expiration,f=c.presentationTimeline.S();c=td(c.periods[0]);return{offlineUri:null,originalManifestUri:b,duration:f,size:0,expiration:e,tracks:c,appMetadata:d}}function bj(b,c){var d=ui(new si(b.$(),b.N()),c.periods[0],new U(null,0)),e=c.appMetadata||{};d=td(d);return{offlineUri:b.toString(),originalManifestUri:c.originalManifestUri,duration:c.duration,size:c.size,expiration:c.expiration,tracks:d,appMetadata:e}}function cj(){this.a={};}function dj(b,c,d){d=d.endTime-d.startTime;return ej(b,c)*d}function ej(b,c){var d=b.a[c];null==d&&(d=0);return d}function Z(b){if(!b||b.constructor!=Y)throw new A(2,9,9008);this.a=b;this.b=fj(this);this.g=!1;this.c=null;this.f=[];}x("shaka.offline.Storage",Z);function gj(){return Zh()}Z.support=gj;Z.prototype.destroy=function(){this.a=this.b=null;return Promise.resolve()};Z.prototype.destroy=Z.prototype.destroy;Z.prototype.configure=function(b){kb(this.b,b,fj(this),{},"");};Z.prototype.configure=Z.prototype.configure;
Z.prototype.store=function(b,c,d){var e=this;return p(function g(){var h,k,l,m,r,t;return v(g,function(g){switch(g.w){case 1:hj();if(e.g)return g["return"](Promise.reject(new A(2,9,9006)));e.g=!0;h=c||{};k=null;l=function(b){k=k||b;};return q(g,ij(e,b,l,d),2);case 2:m=g.I;r=!m.manifest.presentationTimeline.O()&&!m.manifest.presentationTimeline.ya();if(!r)throw new A(2,9,9005,b);jj(e);if(k)throw k;t=new Th;return g["return"](mb([t,m.Cb],function(){return p(function y(){var c,d,g,l,r,u,Lb;return v(y,
function(y){switch(y.w){case 1:return pa(y),q(y,t.init(),4);case 4:return jj(e),kj(e,m.Cb,m.manifest.periods),q(y,Vh(t),5);case 5:return c=y.I,jj(e),oa(y,6),q(y,lj(e,c.N,m.Cb,m.manifest,b,h||{}),8);case 8:return d=y.I,jj(e),q(y,c.N.addManifests([d]),9);case 9:return g=y.I,jj(e),l=new qi("manifest",c.path.$,c.path.N,g[0]),y["return"](bj(l,d));case 6:return r=ra(y),u=e.f,Lb=function(){},q(y,c.N.removeSegments(u,Lb),10);case 10:throw k||r;case 2:sa(y),e.g=!1,e.c=null,e.f=[],ta(y,0);}})})}))}})})};
Z.prototype.store=Z.prototype.store;function lj(b,c,d,e,f,g){var h=aj(f,e,g),k=new Jh(function(c,d){h.size=d;b.b.progressCallback(h,c);}),l;return mb([k],function(){l=mj(b,k,c,d,e,f,g);return Lh(k,b.a.s)}).then(function(){l.size=h.size;return l})}
Z.prototype.remove=function(b){var c=this;hj();var d=ri(b);if(null==d||"manifest"!=d.a)return Promise.reject(new A(2,9,9004,b));var e=new Th;return mb([e],function(){return p(function g(){var b,k,l;return v(g,function(g){switch(g.w){case 1:return q(g,e.init(),2);case 2:return q(g,Xh(e,d.$(),d.N()),3);case 3:return b=g.I,q(g,b.getManifests([d.key()]),4);case 4:return k=g.I,l=k[0],q(g,Promise.all([nj(c,d,l),oj(c,b,d,l)]),0)}})})})};Z.prototype.remove=Z.prototype.remove;
function nj(b,c,d){var e,f=new dc({La:b.a.s,onError:function(b){6013!=b.code&&(e=b);},vb:function(){},onExpirationUpdated:function(){},onEvent:function(){}});f.configure(b.a.getConfiguration().drm);var g=ti(new si(c.$(),c.N()),d);return mb([f],function(){return p(function k(){return v(k,function(c){switch(c.w){case 1:return q(c,f.init(g,b.b.usePersistentLicense),2);case 2:return q(c,ic(f,d.sessionIds),0)}})})}).then(function(){if(e)throw e;})}
function oj(b,c,d,e){function f(){k+=1;b.b.progressCallback(l,k/h);}var g=pj(e),h=g.length+1,k=0,l=bj(d,e);return Promise.all([c.removeSegments(g,f),c.removeManifests([d.key()],f)])}
Z.prototype.list=function(){function b(b,d){return p(function h(){var e;return v(h,function(f){switch(f.w){case 1:return q(f,d.getAllManifests(),2);case 2:e=f.I,Kb(e,function(d,e){var f=bj(new qi("manifest",b.$,b.N,d),e);c.push(f);}),f.w=0;}})})}hj();var c=[],d=new Th;return mb([d],function(){return p(function f(){var c;return v(f,function(f){switch(f.w){case 1:return q(f,d.init(),2);case 2:return c=Promise.resolve(),Wh(d,function(d,f){c=c.then(function(){return b(d,f)});}),q(f,c,0)}})})}).then(function(){return c})};
Z.prototype.list=Z.prototype.list;
function ij(b,c,d,e){function f(){}var g=b.a.s,h=b.a.getConfiguration(),k,l,m;return vf(c,g,h.manifest.retryParameters,e).then(function(b){var e=this;jj(this);l=new dc({La:g,onError:d,vb:f,onExpirationUpdated:function(){},onEvent:function(){}});l.configure(h.drm);var k={networkingEngine:g,filterAllPeriods:function(b){kj(e,l,b);},filterNewPeriod:function(b){qj(e,l,b);},onTimelineRegionAdded:function(){},onEvent:function(){},onError:d};m=new b;m.configure(h.manifest);return m.start(c,k)}.bind(b)).then(function(b){jj(this);
k=b;return l.init(k,this.b.usePersistentLicense)}.bind(b)).then(function(){jj(this);return rj(k)}.bind(b)).then(function(){jj(this);return hc(l)}.bind(b)).then(function(){jj(this);return m.stop()}.bind(b)).then(function(){jj(this);return{manifest:k,Cb:l}}.bind(b))["catch"](function(b){if(m)return m.stop().then(function(){throw b;});throw b;})}
function sj(b,c){var d=[],e=ld(b),f=[0,jd,kd],g=c.filter(function(b){return"variant"==b.type});f=f.map(function(b){return g.filter(function(c){c=ld(c.language);return id(b,e,c)})});for(var h,k=0;k<f.length;k++)if(f[k].length){h=f[k];break}h||(f=g.filter(function(b){return b.primary}),f.length&&(h=f));h||(h=g,g.map(function(b){return b.language}).filter(Eb));var l=h.filter(function(b){return b.height&&480>=b.height});l.length&&(l.sort(function(b,c){return c.height-b.height}),h=l.filter(function(b){return b.height==
l[0].height}));h.sort(function(b,c){return b.bandwidth-c.bandwidth});h.length&&d.push(h[Math.floor(h.length/2)]);d.push.apply(d,c.filter(function(b){return"text"==b.type}));return d}function fj(b){return{trackSelectionCallback:function(c){var d=b.a.getConfiguration();return sj(d.preferredAudioLanguage,c)},progressCallback:function(b,d){if(b||d)return null},usePersistentLicense:!0}}function kj(b,c,d){d.forEach(function(d){return qj(b,c,d)});}
function qj(b,c,d){var e=null;if(b.c){var f=b.c.filter(function(b){return"variant"==b.type})[0];f&&(e=xd(d,f));}var g=f=null;e&&(e.audio&&(f=e.audio),e.video&&(g=e.video));pd(c,f,g,d);od(d,b.a.getConfiguration().restrictions,{width:Infinity,height:Infinity});}
function rj(b){var c=b.periods.map(function(b){return b.variants}).reduce(Bb,[]).map(function(b){var c=[];b.audio&&c.push(b.audio);b.video&&c.push(b.video);return c}).reduce(Bb,[]).filter(Eb);b=b.periods.map(function(b){return b.textStreams}).reduce(Bb,[]);c.push.apply(c,b);return Promise.all(c.map(function(b){return b.createSegmentIndex()}))}
function mj(b,c,d,e,f,g,h){var k=new cj,l=f.periods.map(function(g){return tj(b,c,d,k,e,f,g)}),m=e.b,r=lc(e);if(m&&b.b.usePersistentLicense){if(!r.length)throw new A(2,9,9007,g);m.initData=[];}return{originalManifestUri:g,duration:f.presentationTimeline.S(),size:0,expiration:e.tb(),periods:l,sessionIds:b.b.usePersistentLicense?r:[],drmInfo:m,appMetadata:h}}
function tj(b,c,d,e,f,g,h){var k=vd(h,null,null),l=wd(h,null);k=b.b.trackSelectionCallback(k.concat(l));null==b.c&&(b.c=k,kj(b,f,g.periods));uj(k);g.periods.forEach(function(b){b.variants.forEach(function(b){var c=b.audio,d=b.video;c&&!d&&(e.a[c.id]=c.bandwidth||b.bandwidth);!c&&d&&(e.a[d.id]=d.bandwidth||b.bandwidth);if(c&&d){var f=c.bandwidth||393216,g=d.bandwidth||b.bandwidth-f;0>=g&&(g=b.bandwidth);e.a[c.id]=f;e.a[d.id]=g;}});b.textStreams.forEach(function(b){e.a[b.id]=52;});});var m={};k.forEach(function(b){"variant"==
b.type&&null!=b.audioId&&(m[b.audioId]=!0);"variant"==b.type&&null!=b.videoId&&(m[b.videoId]=!0);"text"==b.type&&(m[b.id]=!0);});var r={};vj(g).filter(function(b){return!!m[b.id]}).forEach(function(f){r[f.id]=wj(b,c,d,e,g,f);});k.forEach(function(b){"variant"==b.type&&null!=b.audioId&&r[b.audioId].variantIds.push(b.id);"variant"==b.type&&null!=b.videoId&&r[b.videoId].variantIds.push(b.id);});return{startTime:h.startTime,streams:G(r)}}
function wj(b,c,d,e,f,g){var h={id:g.id,primary:g.primary,presentationTimeOffset:g.presentationTimeOffset||0,contentType:g.type,mimeType:g.mimeType,codecs:g.codecs,frameRate:g.frameRate,kind:g.kind,language:g.language,label:g.label,width:g.width||null,height:g.height||null,initSegmentKey:null,encrypted:g.encrypted,keyId:g.keyId,segments:[],variantIds:[]};f=f.presentationTimeline.Xa();var k=g.id;xj(g,f,function(f){Kh(c,k,yj(b,f),dj(e,g.id,f),function(c){return d.addSegments([{data:c}]).then(function(c){b.f.push(c[0]);
h.segments.push({startTime:f.startTime,endTime:f.endTime,dataKey:c[0]});})});});(f=g.initSegmentReference)&&Kh(c,k,yj(b,f),.5*ej(e,g.id),function(c){return d.addSegments([{data:c}]).then(function(c){b.f.push(c[0]);h.initSegmentKey=c[0];})});return h}function xj(b,c,d){c=b.findSegmentPosition(c);for(var e=null==c?null:b.getSegmentReference(c);e;)d(e),e=b.getSegmentReference(++c);}function jj(b){if(!b.a)throw new A(2,9,7001);}function hj(){if(!Zh())throw new A(2,9,9E3);}
function yj(b,c){var d=b.a.getConfiguration().streaming.retryParameters;d=rb(c.c(),d);if(0!=c.b||null!=c.a)d.headers.Range="bytes="+c.b+"-"+(null==c.a?"":c.a);return d}function pj(b){var c=[];b.periods.forEach(function(b){b.streams.forEach(function(b){null!=b.initSegmentKey&&c.push(b.initSegmentKey);b.segments.forEach(function(b){c.push(b.dataKey);});});});return c}
Z.deleteAll=function(b){var c=b.s,d=b.getConfiguration().drm,e=new Th;return mb([e],function(){return p(function g(){var b,k;return v(g,function(g){switch(g.w){case 1:return q(g,e.init(),2);case 2:return q(g,zj(e),3);case 3:return b=g.I,k=Promise.resolve(),b.forEach(function(b){k=k.then(function(){return Aj(c,d,b)});}),q(g,k,4);case 4:return q(g,Yh(e),0)}})})})};
function Aj(b,c,d){var e=new dc({La:b,onError:function(){},vb:function(){},onExpirationUpdated:function(){},onEvent:function(){}});e.configure(c);return mb([e],function(){return p(function g(){return v(g,function(b){switch(b.w){case 1:return q(b,e.init(d,!0),2);case 2:return q(b,ic(e,d.offlineSessionIds),0)}})})})}function uj(b){b.some(function(c){return b.some(function(b){return c!=b&&c.type==b.type&&c.kind==b.kind&&c.language==b.language})});}
function vj(b){var c={};b.periods.forEach(function(b){b.textStreams.forEach(function(b){c[b.id]=b;});b.variants.forEach(function(b){b.audio&&(c[b.audio.id]=b.audio);b.video&&(c[b.video.id]=b.video);});});return G(c)}function zj(b){var c=[],d=[];Wh(b,function(b,f){var e=new si(b.$,b.N);d.push(f.getAllManifests().then(function(b){G(b).forEach(function(b){c.push(ti(e,b));});}));});return Promise.all(d).then(function(){return c})}Hi.offline=gj;x("shaka.polyfill.installAll",function(){for(var b=0;b<Bj.length;++b)Bj[b].ad();});var Bj=[];function Cj(b,c){c=c||0;for(var d={priority:c,ad:b},e=0;e<Bj.length;e++)if(Bj[e].priority<c){Bj.splice(e,0,d);return}Bj.push(d);}x("shaka.polyfill.register",Cj);Cj(function(){var b=navigator.userAgent;b&&0<=b.indexOf("CrKey")&&delete window.indexedDB;});var Dj;function Ej(b,c,d){if("input"==b)switch(this.type){case "range":b="change";}Dj.call(this,b,c,d);}Cj(function(){0>navigator.userAgent.indexOf("Trident/")||HTMLInputElement.prototype.addEventListener==Ej||(Dj=HTMLInputElement.prototype.addEventListener,HTMLInputElement.prototype.addEventListener=Ej);});Cj(function(){});function Fj(){var b=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(){var c=b.apply(this,arguments);c.abort=function(){};return c};}function Gj(){var b=SourceBuffer.prototype.remove;SourceBuffer.prototype.remove=function(c,d){return b.call(this,c,d-.001)};}
function Hj(){var b=MediaSource.prototype.endOfStream;MediaSource.prototype.endOfStream=function(){for(var c=0,d=0;d<this.sourceBuffers.length;++d){var g=this.sourceBuffers[d];g=g.buffered.end(g.buffered.length-1);c=Math.max(c,g);}if(!isNaN(this.duration)&&c<this.duration)for(this.rc=!0,c=0;c<this.sourceBuffers.length;++c)this.sourceBuffers[c].mc=!1;return b.apply(this,arguments)};var c=!1,d=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(){var b=d.apply(this,arguments);
b.mediaSource_=this;b.addEventListener("updateend",Ij,!1);c||(this.addEventListener("sourceclose",Jj,!1),c=!0);return b};}function Ij(b){var c=b.target,d=c.mediaSource_;if(d.rc){b.preventDefault();b.stopPropagation();b.stopImmediatePropagation();c.mc=!0;for(b=0;b<d.sourceBuffers.length;++b)if(0==d.sourceBuffers[b].mc)return;d.rc=!1;}}
function Jj(b){b=b.target;for(var c=0;c<b.sourceBuffers.length;++c)b.sourceBuffers[c].removeEventListener("updateend",Ij,!1);b.removeEventListener("sourceclose",Jj,!1);}function Kj(){var b=MediaSource.isTypeSupported;MediaSource.isTypeSupported=function(c){return"mp2t"==c.split(/ *; */)[0].split("/")[1]?!1:b(c)};}
function Lj(){var b=MediaSource.isTypeSupported,c=/^dv(?:he|av)\./;MediaSource.isTypeSupported=function(d){for(var e=d.split(/ *; */),f=e[0],g={},h=1;h<e.length;++h){var k=e[h].split("="),l=k[0];k=k[1].replace(/"(.*)"/,"$1");g[l]=k;}e=g.codecs;if(!e)return b(d);var m=!1,r=!1;d=e.split(",").filter(function(b){if(c.test(b))return r=!0,!1;/^(hev|hvc)1\.2/.test(b)&&(m=!0);return!0});r&&(m=!1);g.codecs=d.join(",");m&&(g.eotf="smpte2084");for(var t in g)f+="; "+t+'="'+g[t]+'"';return cast.__platform__.canDisplayType(f)};}
Cj(function(){if(window.MediaSource)if(window.cast&&cast.__platform__&&cast.__platform__.canDisplayType)Lj();else if(navigator.vendor&&0<=navigator.vendor.indexOf("Apple")){var b=navigator.appVersion;Kj();0<=b.indexOf("Version/8")?window.MediaSource=null:0<=b.indexOf("Version/9")?Fj():0<=b.indexOf("Version/10")?(Fj(),Hj()):0<=b.indexOf("Version/11")&&(Fj(),Gj());}});function Mj(b){this.f=[];this.b=[];this.a=[];(new R).Y("pssh",this.c.bind(this)).parse(b.buffer);}Mj.prototype.c=function(b){if(!(1<b.version)){var c=$b(b.reader.Ba(16)),d=[];if(0<b.version)for(var e=b.reader.B(),f=0;f<e;++f){var g=$b(b.reader.Ba(16));d.push(g);}e=b.reader.B();b.reader.F(e);this.b.push.apply(this.b,d);this.f.push(c);this.a.push({start:b.start,end:b.start+b.size-1});}};function Nj(b,c){try{var d=new Oj(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}
function Oj(b,c){this.keySystem=b;for(var d=!1,e=0;e<c.length;++e){var f=c[e],g={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:f.initDataTypes,sessionTypes:["temporary"],label:f.label},h=!1;if(f.audioCapabilities)for(var k=0;k<f.audioCapabilities.length;++k){var l=f.audioCapabilities[k];if(l.contentType){h=!0;var m=l.contentType.split(";")[0];MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.audioCapabilities.push(l),d=!0);}}if(f.videoCapabilities)for(k=
0;k<f.videoCapabilities.length;++k)l=f.videoCapabilities[k],l.contentType&&(h=!0,m=l.contentType.split(";")[0],MSMediaKeys.isTypeSupported(this.keySystem,m)&&(g.videoCapabilities.push(l),d=!0));h||(d=MSMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));"required"==f.persistentState&&(d=!1);if(d){this.a=g;return}}d=Error("Unsupported keySystem");d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}Oj.prototype.createMediaKeys=function(){var b=new Pj(this.keySystem);return Promise.resolve(b)};
Oj.prototype.getConfiguration=function(){return this.a};function Qj(b){var c=this.mediaKeys;c&&c!=b&&Rj(c,null);delete this.mediaKeys;return(this.mediaKeys=b)?Rj(b,this):Promise.resolve()}function Pj(b){this.a=new MSMediaKeys(b);this.b=new D;}Pj.prototype.createSession=function(b){var c=b||"temporary";if("temporary"!=c)throw new TypeError("Session type "+b+" is unsupported on this platform.");return new Sj(this.a,c)};Pj.prototype.setServerCertificate=function(){return Promise.resolve(!1)};
function Rj(b,c){function d(){c.msSetMediaKeys(e.a);c.removeEventListener("loadedmetadata",d);}xb(b.b);if(!c)return Promise.resolve();E(b.b,c,"msneedkey",Tj);var e=b;try{return 1<=c.readyState?c.msSetMediaKeys(b.a):c.addEventListener("loadedmetadata",d),Promise.resolve()}catch(f){return Promise.reject(f)}}function Sj(b){K.call(this);this.c=null;this.g=b;this.b=this.a=null;this.f=new D;this.sessionId="";this.expiration=NaN;this.closed=new z;this.keyStatuses=new Uj;}Aa(Sj,K);n=Sj.prototype;
n.generateRequest=function(b,c){this.a=new z;try{this.c=this.g.createSession("video/mp4",new Uint8Array(c),null),E(this.f,this.c,"mskeymessage",this.Qd.bind(this)),E(this.f,this.c,"mskeyadded",this.Od.bind(this)),E(this.f,this.c,"mskeyerror",this.Pd.bind(this)),Vj(this,"status-pending");}catch(d){this.a.reject(d);}return this.a};n.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};n.update=function(b){this.b=new z;try{this.c.update(new Uint8Array(b));}catch(c){this.b.reject(c);}return this.b};
n.close=function(){try{this.c.close(),this.closed.resolve(),xb(this.f);}catch(b){this.closed.reject(b);}return this.closed};n.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};
function Tj(b){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="cenc";if(b=b.initData){var d=new Mj(b);if(!(1>=d.a.length)){for(var e=[],f=0;f<d.a.length;f++)e.push(b.subarray(d.a[f].start,d.a[f].end+1));b=gb(e,Wj);for(e=d=0;e<b.length;e++)d+=b[e].length;d=new Uint8Array(d);for(f=e=0;f<b.length;f++)d.set(b[f],e),e+=b[f].length;b=d;}}c.initData=b;this.dispatchEvent(c);}function Wj(b,c){return ac(b,c)}
n.Qd=function(b){this.a&&(this.a.resolve(),this.a=null);this.dispatchEvent(new F("message",{messageType:void 0==this.keyStatuses.a?"licenserequest":"licenserenewal",message:b.message.buffer}));};n.Od=function(){this.a?(Vj(this,"usable"),this.a.resolve(),this.a=null):this.b&&(Vj(this,"usable"),this.b.resolve(),this.b=null);};
n.Pd=function(){var b=Error("EME PatchedMediaKeysMs key error");b.errorCode=this.c.error;if(null!=this.a)this.a.reject(b),this.a=null;else if(null!=this.b)this.b.reject(b),this.b=null;else switch(this.c.error.code){case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:Vj(this,"output-not-allowed");break;default:Vj(this,"internal-error");}};function Vj(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new F("keystatuseschange"));}
function Uj(){this.size=0;this.a=void 0;}var Xj;n=Uj.prototype;n.forEach=function(b){this.a&&b(this.a,Xj);};n.get=function(b){if(this.has(b))return this.a};n.has=function(b){var c=Xj;return this.a&&ac(new Uint8Array(b),new Uint8Array(c))?!0:!1};n.entries=function(){};n.keys=function(){};n.values=function(){};
Cj(function(){!window.HTMLVideoElement||!window.MSMediaKeys||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(Xj=(new Uint8Array([0])).buffer,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=Qj,window.MediaKeys=Pj,window.MediaKeySystemAccess=Oj,navigator.requestMediaKeySystemAccess=Nj);});function Yj(){return Promise.reject(Error("The key system specified is not supported."))}function Zj(b){return null==b?Promise.resolve():Promise.reject(Error("MediaKeys not supported."))}function ak(){throw new TypeError("Illegal constructor.");}ak.prototype.createSession=function(){};ak.prototype.setServerCertificate=function(){};function bk(){throw new TypeError("Illegal constructor.");}bk.prototype.getConfiguration=function(){};bk.prototype.createMediaKeys=function(){};
Cj(function(){!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(navigator.requestMediaKeySystemAccess=Yj,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=Zj,window.MediaKeys=ak,window.MediaKeySystemAccess=bk);},-10);var ck="";function dk(b){var c=ck;return c?c+b.charAt(0).toUpperCase()+b.slice(1):b}function ek(b,c){try{var d=new fk(b,c);return Promise.resolve(d)}catch(e){return Promise.reject(e)}}function gk(b){var c=this.mediaKeys;c&&c!=b&&hk(c,null);delete this.mediaKeys;(this.mediaKeys=b)&&hk(b,this);return Promise.resolve()}
function fk(b,c){this.a=this.keySystem=b;var d=!1;"org.w3.clearkey"==b&&(this.a="webkit-org.w3.clearkey",d=!1);var e=!1;var f=document.getElementsByTagName("video");f=f.length?f[0]:document.createElement("video");for(var g=0;g<c.length;++g){var h=c[g],k={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:h.initDataTypes,sessionTypes:["temporary"],label:h.label},l=!1;if(h.audioCapabilities)for(var m=0;m<h.audioCapabilities.length;++m){var r=
h.audioCapabilities[m];if(r.contentType){l=!0;var t=r.contentType.split(";")[0];f.canPlayType(t,this.a)&&(k.audioCapabilities.push(r),e=!0);}}if(h.videoCapabilities)for(m=0;m<h.videoCapabilities.length;++m)r=h.videoCapabilities[m],r.contentType&&(l=!0,f.canPlayType(r.contentType,this.a)&&(k.videoCapabilities.push(r),e=!0));l||(e=f.canPlayType("video/mp4",this.a)||f.canPlayType("video/webm",this.a));"required"==h.persistentState&&(d?(k.persistentState="required",k.sessionTypes=["persistent-license"]):
e=!1);if(e){this.b=k;return}}d="Unsupported keySystem";if("org.w3.clearkey"==b||"com.widevine.alpha"==b)d="None of the requested configurations were supported.";d=Error(d);d.name="NotSupportedError";d.code=DOMException.NOT_SUPPORTED_ERR;throw d;}fk.prototype.createMediaKeys=function(){var b=new ik(this.a);return Promise.resolve(b)};fk.prototype.getConfiguration=function(){return this.b};function ik(b){this.g=b;this.b=null;this.a=new D;this.c=[];this.f={};}
function hk(b,c){b.b=c;xb(b.a);var d=ck;c&&(E(b.a,c,d+"needkey",b.de.bind(b)),E(b.a,c,d+"keymessage",b.ce.bind(b)),E(b.a,c,d+"keyadded",b.ae.bind(b)),E(b.a,c,d+"keyerror",b.be.bind(b)));}n=ik.prototype;n.createSession=function(b){var c=b||"temporary";if("temporary"!=c&&"persistent-license"!=c)throw new TypeError("Session type "+b+" is unsupported on this platform.");b=this.b||document.createElement("video");b.src||(b.src="about:blank");c=new jk(b,this.g,c);this.c.push(c);return c};
n.setServerCertificate=function(){return Promise.resolve(!1)};n.de=function(b){var c=document.createEvent("CustomEvent");c.initCustomEvent("encrypted",!1,!1,null);c.initDataType="webm";c.initData=b.initData;this.b.dispatchEvent(c);};n.ce=function(b){var c=kk(this,b.sessionId);c&&(b=new F("message",{messageType:void 0==c.keyStatuses.a?"licenserequest":"licenserenewal",message:b.message}),c.b&&(c.b.resolve(),c.b=null),c.dispatchEvent(b));};
n.ae=function(b){if(b=kk(this,b.sessionId))lk(b,"usable"),b.a&&b.a.resolve(),b.a=null;};
n.be=function(b){var c=kk(this,b.sessionId);if(c){var d=Error("EME v0.1b key error");d.errorCode=b.errorCode;d.errorCode.systemCode=b.systemCode;!b.sessionId&&c.b?(d.method="generateRequest",45==b.systemCode&&(d.message="Unsupported session type."),c.b.reject(d),c.b=null):b.sessionId&&c.a?(d.method="update",c.a.reject(d),c.a=null):(d=b.systemCode,b.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?lk(c,"output-restricted"):1==d?lk(c,"expired"):lk(c,"internal-error"));}};
function kk(b,c){var d=b.f[c];return d?d:(d=b.c.shift())?(d.sessionId=c,b.f[c]=d):null}function jk(b,c,d){K.call(this);this.f=b;this.h=!1;this.a=this.b=null;this.c=c;this.g=d;this.sessionId="";this.expiration=NaN;this.closed=new z;this.keyStatuses=new mk;}Aa(jk,K);
function nk(b,c,d){if(b.h)return Promise.reject(Error("The session is already initialized."));b.h=!0;try{if("persistent-license"==b.g)if(d)var e=new Uint8Array(Sb("LOAD_SESSION|"+d));else{var f=Sb("PERSISTENT|"),g=new Uint8Array(f.byteLength+c.byteLength);g.set(new Uint8Array(f),0);g.set(new Uint8Array(c),f.byteLength);e=g;}else e=new Uint8Array(c);}catch(k){return Promise.reject(k)}b.b=new z;var h=dk("generateKeyRequest");try{b.f[h](b.c,e);}catch(k){if("InvalidStateError"!=k.name)return b.b=null,Promise.reject(k);
setTimeout(function(){try{this.f[h](this.c,e);}catch(l){this.b.reject(l),this.b=null;}}.bind(b),10);}return b.b}n=jk.prototype;
n.bc=function(b,c){if(this.a)this.a.then(this.bc.bind(this,b,c))["catch"](this.bc.bind(this,b,c));else{this.a=b;if("webkit-org.w3.clearkey"==this.c){var d=Ob(c);var e=JSON.parse(d);"oct"!=e.keys[0].kty&&(this.a.reject(Error("Response is not a valid JSON Web Key Set.")),this.a=null);d=Yb(e.keys[0].k);e=Yb(e.keys[0].kid);}else d=new Uint8Array(c),e=null;var f=dk("addKey");try{this.f[f](this.c,d,e,this.sessionId);}catch(g){this.a.reject(g),this.a=null;}}};
function lk(b,c){var d=b.keyStatuses;d.size=void 0==c?0:1;d.a=c;b.dispatchEvent(new F("keystatuseschange"));}n.generateRequest=function(b,c){return nk(this,c,null)};n.load=function(b){return"persistent-license"==this.g?nk(this,null,b):Promise.reject(Error("Not a persistent session."))};n.update=function(b){var c=new z;this.bc(c,b);return c};
n.close=function(){if("persistent-license"!=this.g){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;var b=dk("cancelKeyRequest");try{this.f[b](this.c,this.sessionId);}catch(c){}}this.closed.resolve();return this.closed};n.remove=function(){return"persistent-license"!=this.g?Promise.reject(Error("Not a persistent session.")):this.close()};function mk(){this.size=0;this.a=void 0;}var ok;n=mk.prototype;n.forEach=function(b){this.a&&b(this.a,ok);};n.get=function(b){if(this.has(b))return this.a};
n.has=function(b){var c=ok;return this.a&&ac(new Uint8Array(b),new Uint8Array(c))?!0:!1};n.entries=function(){};n.keys=function(){};n.values=function(){};
Cj(function(){if(!(!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration)){if(HTMLMediaElement.prototype.webkitGenerateKeyRequest)ck="webkit";else if(!HTMLMediaElement.prototype.generateKeyRequest)return;ok=(new Uint8Array([0])).buffer;navigator.requestMediaKeySystemAccess=ek;delete HTMLMediaElement.prototype.mediaKeys;HTMLMediaElement.prototype.mediaKeys=null;HTMLMediaElement.prototype.setMediaKeys=gk;window.MediaKeys=ik;window.MediaKeySystemAccess=
fk;}});Cj(function(){if(window.HTMLMediaElement){var b=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){var c=b.apply(this,arguments);c&&c["catch"](function(){});return c};}});function pk(){return{droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}}Cj(function(){if(window.HTMLVideoElement){var b=HTMLVideoElement.prototype;!b.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in b&&(b.getVideoPlaybackQuality=pk);}});function qk(b,c,d){return new window.TextTrackCue(b,c,d)}function rk(b,c,d){return new window.TextTrackCue(b+"-"+c+"-"+d,b,c,d)}Cj(function(){if(!window.VTTCue&&window.TextTrackCue){var b=TextTrackCue.length;if(3==b)window.VTTCue=qk;else if(6==b)window.VTTCue=rk;else{try{var c=!!qk(1,2,"");}catch(d){c=!1;}c&&(window.VTTCue=qk);}}});function sk(){}sk.prototype.parseInit=function(){};
sk.prototype.parseMedia=function(b,c){var d=Ob(b),e=[],f=new DOMParser,g=null;try{g=f.parseFromString(d,"text/xml");}catch(Ha){throw new A(2,2,2005);}if(g){if(f=g.getElementsByTagName("tt")[0]){g=f.getAttribute("ttp:frameRate");var h=f.getAttribute("ttp:subFrameRate");var k=f.getAttribute("ttp:frameRateMultiplier");var l=f.getAttribute("ttp:tickRate");d=f.getAttribute("xml:space")||"default";}else throw new A(2,2,2005);if("default"!=d&&"preserve"!=d)throw new A(2,2,2005);d="default"==d;g=new tk(g,h,
k,l);h=uk(f.getElementsByTagName("styling")[0]);k=uk(f.getElementsByTagName("layout")[0]);l=[];for(var m=0;m<k.length;m++){var r=k[m],t=h;var u=new Bc;var w=r.getAttribute("xml:id");if(w){u.id=w;var y;if(y=vk(r,t,"tts:extent"))y=(w=wk.exec(y))||xk.exec(y),null!=y&&(u.width=Number(y[1]),u.height=Number(y[2]),u.widthUnits=w?Oc:0,u.heightUnits=w?Oc:0);if(r=vk(r,t,"tts:origin"))y=(w=wk.exec(r))||xk.exec(r),null!=y&&(u.viewportAnchorX=Number(y[1]),u.viewportAnchorY=Number(y[2]),u.viewportAnchorUnits=w?
Oc:0);}else u=null;u&&l.push(u);}f=uk(f.getElementsByTagName("body")[0]);for(m=0;m<f.length;m++)(u=yk(f[m],c.periodStart,g,h,k,l,d))&&e.push(u);}return e};
var wk=/^(\d{1,2}|100)% (\d{1,2}|100)%$/,zk=/^(\d+px|\d+em)$/,xk=/^(\d+)px (\d+)px$/,Ak=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Bk=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,Ck=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,Dk=/^(\d*(?:\.\d*)?)f$/,Ek=/^(\d*(?:\.\d*)?)t$/,Fk=/^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,Gk={left:"start",center:Gc,right:"end",start:"start",end:"end"},Hk={left:"line-left",center:"center",right:"line-right"};
function uk(b){var c=[];if(!b)return c;for(var d=b.childNodes,e=0;e<d.length;e++){var f="span"==d[e].nodeName&&"p"==b.nodeName;d[e].nodeType!=Node.ELEMENT_NODE||"br"==d[e].nodeName||f||(f=uk(d[e]),c=c.concat(f));}c.length||c.push(b);return c}function Ik(b,c){for(var d=b.childNodes,e=0;e<d.length;e++)if("br"==d[e].nodeName&&0<e)d[e-1].textContent+="\n";else if(0<d[e].childNodes.length)Ik(d[e],c);else if(c){var f=d[e].textContent.trim();f=f.replace(/\s+/g," ");d[e].textContent=f;}}
function yk(b,c,d,e,f,g,h){if(!b.hasAttribute("begin")&&!b.hasAttribute("end")&&/^\s*$/.test(b.textContent))return null;Ik(b,h);h=Jk(b.getAttribute("begin"),d);var k=Jk(b.getAttribute("end"),d);d=Jk(b.getAttribute("dur"),d);var l=b.textContent;null==k&&null!=d&&(k=h+d);if(null==h||null==k)throw new A(2,2,2001);c=new H(h+c,k+c,l);if((f=Kk(b,"region",f))&&f.getAttribute("xml:id")){var m=f.getAttribute("xml:id");g=g.filter(function(b){return b.id==m});c.region=g[0];}Lk(c,b,f,e);return c}
function Lk(b,c,d,e){"rtl"==Mk(c,d,e,"tts:direction")&&(b.writingDirection=1);var f=Mk(c,d,e,"tts:writingMode");"tb"==f||"tblr"==f?b.writingDirection=2:"tbrl"==f?b.writingDirection=3:"rltb"==f||"rl"==f?b.writingDirection=1:f&&(b.writingDirection=Ec);if(f=Mk(c,d,e,"tts:textAlign"))b.positionAlign=Hk[f],b.lineAlign=Gk[f],b.textAlign=Kc[f.toUpperCase()];if(f=Mk(c,d,e,"tts:displayAlign"))b.displayAlign=Lc[f.toUpperCase()];if(f=Mk(c,d,e,"tts:color"))b.color=f;if(f=Mk(c,d,e,"tts:backgroundColor"))b.backgroundColor=
f;if(f=Mk(c,d,e,"tts:fontFamily"))b.fontFamily=f;(f=Mk(c,d,e,"tts:fontWeight"))&&"bold"==f&&(b.fontWeight=700);(f=Mk(c,d,e,"tts:wrapOption"))&&"noWrap"==f&&(b.wrapLine=!1);(f=Mk(c,d,e,"tts:lineHeight"))&&f.match(zk)&&(b.lineHeight=f);(f=Mk(c,d,e,"tts:fontSize"))&&f.match(zk)&&(b.fontSize=f);if(f=Mk(c,d,e,"tts:fontStyle"))b.fontStyle=Nc[f.toUpperCase()];(d=vk(d,e,"tts:textDecoration"))&&Nk(b,d);(c=Ok(c,e,"tts:textDecoration"))&&Nk(b,c);}
function Nk(b,c){for(var d=c.split(" "),e=0;e<d.length;e++)switch(d[e]){case "underline":0>b.textDecoration.indexOf("underline")&&b.textDecoration.push("underline");break;case "noUnderline":0<=b.textDecoration.indexOf("underline")&&ib(b.textDecoration,"underline");break;case "lineThrough":0>b.textDecoration.indexOf("lineThrough")&&b.textDecoration.push("lineThrough");break;case "noLineThrough":0<=b.textDecoration.indexOf("lineThrough")&&ib(b.textDecoration,"lineThrough");break;case "overline":0>b.textDecoration.indexOf("overline")&&
b.textDecoration.push("overline");break;case "noOverline":0<=b.textDecoration.indexOf("overline")&&ib(b.textDecoration,"overline");}}function Mk(b,c,d,e){return(b=Ok(b,d,e))?b:vk(c,d,e)}function vk(b,c,d){for(var e=uk(b),f=0;f<e.length;f++){var g=e[f].getAttribute(d);if(g)return g}return(b=Kk(b,"style",c))?b.getAttribute(d):null}function Ok(b,c,d){return(b=Kk(b,"style",c))?b.getAttribute(d):null}
function Kk(b,c,d){if(!b||1>d.length)return null;var e=null,f=b;for(b=null;f&&!(b=f.getAttribute(c))&&(f=f.parentNode,f instanceof Element););if(c=b)for(b=0;b<d.length;b++)if(d[b].getAttribute("xml:id")==c){e=d[b];break}return e}
function Jk(b,c){var d=null;if(Ak.test(b)){d=Ak.exec(b);var e=Number(d[1]),f=Number(d[2]),g=Number(d[3]),h=Number(d[4]);h+=(Number(d[5])||0)/c.b;g+=h/c.frameRate;d=g+60*f+3600*e;}else Bk.test(b)?d=Pk(Bk,b):Ck.test(b)?d=Pk(Ck,b):Dk.test(b)?(d=Dk.exec(b),d=Number(d[1])/c.frameRate):Ek.test(b)?(d=Ek.exec(b),d=Number(d[1])/c.a):Fk.test(b)&&(d=Pk(Fk,b));return d}
function Pk(b,c){var d=b.exec(c);return null==d||""==d[0]?null:(Number(d[4])||0)/1E3+(Number(d[3])||0)+60*(Number(d[2])||0)+3600*(Number(d[1])||0)}function tk(b,c,d,e){this.frameRate=Number(b)||30;this.b=Number(c)||1;this.a=Number(e);0==this.a&&(this.a=b?this.frameRate*this.b:1);d&&(b=/^(\d+) (\d+)$/g.exec(d))&&(this.frameRate*=b[1]/b[2]);}I["application/ttml+xml"]=sk;function Qk(){this.a=new sk;}Qk.prototype.parseInit=function(b){var c=!1;(new R).C("moov",S).C("trak",S).C("mdia",S).C("minf",S).C("stbl",S).Y("stsd",Qe).C("stpp",function(b){c=!0;b.parser.stop();}).parse(b);if(!c)throw new A(2,2,2007);};Qk.prototype.parseMedia=function(b,c){var d=!1,e=[];(new R).C("mdat",Re(function(b){d=!0;e=e.concat(this.a.parseMedia(b,c));}.bind(this))).parse(b);if(!d)throw new A(2,2,2007);return e};I['application/mp4; codecs="stpp"']=Qk;
I['application/mp4; codecs="stpp.TTML.im1t"']=Qk;function Rk(){}Rk.prototype.parseInit=function(){};
Rk.prototype.parseMedia=function(b,c){var d=Ob(b);d=d.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n");d=d.split(/\n{2,}/m);if(!/^WEBVTT($|[ \t\n])/m.test(d[0]))throw new A(2,2,2E3);var e=c.segmentStart;if(null==e&&(e=0,0<=d[0].indexOf("X-TIMESTAMP-MAP"))){var f=d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),g=d[0].match(/MPEGTS:(\d+)/m);f&&g&&(e=Sk(new Uf(f[1])),e=c.periodStart+(Number(g[1])/9E4-e));}g=[];var h=d[0].split("\n");for(f=1;f<h.length;f++)if(/^Region:/.test(h[f])){var k=new Uf(h[f]),
l=new Bc;Xf(k);Vf(k);for(var m=Xf(k);m;){var r=l,t=m;(m=/^id=(.*)$/.exec(t))?r.id=m[1]:(m=/^width=(\d{1,2}|100)%$/.exec(t))?r.width=Number(m[1]):(m=/^lines=(\d+)$/.exec(t))?(r.height=Number(m[1]),r.heightUnits=2):(m=/^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(t))?(r.regionAnchorX=Number(m[1]),r.regionAnchorY=Number(m[2])):(m=/^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(t))?(r.viewportAnchorX=Number(m[1]),r.viewportAnchorY=Number(m[2])):/^scroll=up$/.exec(t)&&(r.scroll="up");Vf(k);
m=Xf(k);}g.push(l);}f=[];for(k=1;k<d.length;k++){h=d[k].split("\n");m=h;t=e;h=g;if(1==m.length&&!m[0]||/^NOTE($|[ \t])/.test(m[0])||"STYLE"==m[0])h=null;else{l=null;0>m[0].indexOf("--\x3e")&&(l=m[0],m.splice(0,1));r=new Uf(m[0]);var u=Sk(r),w=Wf(r,/[ \t]+--\x3e[ \t]+/g),y=Sk(r);if(null==u||null==w||null==y)throw new A(2,2,2001);m=new H(u+t,y+t,m.slice(1).join("\n").trim());Vf(r);for(t=Xf(r);t;)Tk(m,t,h),Vf(r),t=Xf(r);null!=l&&(m.id=l);h=m;}h&&f.push(h);}return f};
function Tk(b,c,d){var e;if(e=/^align:(start|middle|center|end|left|right)$/.exec(c))c=e[1],"middle"==c?b.textAlign=Dc:b.textAlign=Kc[c.toUpperCase()];else if(e=/^vertical:(lr|rl)$/.exec(c))b.writingDirection="lr"==e[1]?2:3;else if(e=/^size:([\d.]+)%$/.exec(c))b.size=Number(e[1]);else if(e=/^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(c))b.position=Number(e[1]),e[2]&&(c=e[2],b.positionAlign="line-left"==c||"start"==c?"line-left":"line-right"==c||"end"==c?"line-right":"center");
else if(e=/^region:(.*)$/.exec(c)){if(c=Uk(d,e[1]))b.region=c;}else if(d=/^line:([\d.]+)%(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=1,b.line=Number(d[1]),d[2]&&(b.lineAlign=Mc[d[2].toUpperCase()]);else if(d=/^line:(-?\d+)(?:,(start|end|center))?$/.exec(c))b.lineInterpretation=Fc,b.line=Number(d[1]),d[2]&&(b.lineAlign=Mc[d[2].toUpperCase()]);}function Uk(b,c){var d=b.filter(function(b){return b.id==c});return d.length?d[0]:null}
function Sk(b){b=Wf(b,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);if(null==b)return null;var c=Number(b[2]),d=Number(b[3]);return 59<c||59<d?null:Number(b[4])/1E3+d+60*c+3600*(Number(b[1])||0)}I["text/vtt"]=Rk;I['text/vtt; codecs="vtt"']=Rk;function Vk(){this.a=null;}Vk.prototype.parseInit=function(b){var c=!1;(new R).C("moov",S).C("trak",S).C("mdia",S).Y("mdhd",function(b){0==b.version?(b.reader.F(4),b.reader.F(4),this.a=b.reader.B(),b.reader.F(4)):(b.reader.F(8),b.reader.F(8),this.a=b.reader.B(),b.reader.F(8));b.reader.F(4);}.bind(this)).C("minf",S).C("stbl",S).Y("stsd",Qe).C("wvtt",function(){c=!0;}).parse(b);if(!this.a)throw new A(2,2,2008);if(!c)throw new A(2,2,2008);};
Vk.prototype.parseMedia=function(b,c){var d=this;if(!this.a)throw new A(2,2,2008);var e=0,f=[],g,h=[],k=!1,l=!1,m=!1,r=null;(new R).C("moof",S).C("traf",S).Y("tfdt",function(b){k=!0;e=0==b.version?b.reader.B():b.reader.Qa();}).Y("tfhd",function(b){var c=b.flags;b=b.reader;b.F(4);c&1&&b.F(8);c&2&&b.F(4);r=c&8?b.B():null;}).Y("trun",function(b){l=!0;var c=b.version,d=b.flags;b=b.reader;var e=b.B();d&1&&b.F(4);d&4&&b.F(4);for(var g=[],h=0;h<e;h++){var k={duration:null,sampleSize:null,cc:null};d&256&&(k.duration=
b.B());d&512&&(k.sampleSize=b.B());d&1024&&b.F(4);d&2048&&(k.cc=0==c?b.B():b.Hc());g.push(k);}f=g;}).C("mdat",Re(function(b){m=!0;g=b;})).parse(b);if(!m&&!k&&!l)throw new A(2,2,2008);var t=e,u=new DataView(g.buffer,g.byteOffset,g.byteLength),w=new Q(u,0);f.forEach(function(b){var f=b.duration||r,g=b.cc?e+b.cc:t;t=g+(f||0);var k=0;do{var l=w.B();k+=l;var m=w.B(),u=null;"vttc"==Se(m)?8<l&&(u=w.Ba(l-8)):w.F(l-8);f&&u&&h.push(Wk(u,c.periodStart+g/d.a,c.periodStart+t/d.a));}while(b.sampleSize&&k<b.sampleSize)});
return h.filter(Db)};function Wk(b,c,d){var e,f,g;(new R).C("payl",Re(function(b){e=Ob(b);})).C("iden",Re(function(b){f=Ob(b);})).C("sttg",Re(function(b){g=Ob(b);})).parse(b);return e?Xk(e,f,g,c,d):null}function Xk(b,c,d,e,f){b=new H(e,f,b);c&&(b.id=c);if(d)for(c=new Uf(d),d=Xf(c);d;)Tk(b,d,[]),Vf(c),d=Xf(c);return b}I['application/mp4; codecs="wvtt"']=Vk;}).call(exportTo,innerGlobal,innerGlobal);for(var k in exportTo.shaka)exports[k]=exportTo.shaka[k];})();


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
    log$1('Offline Track: ' + found);
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
      'progressCallback': this.setDownloadProgress_.bind(this),
      //'trackSelectionCallback': this.selectTracks_.bind(this),
      'usePersistentLicense': !useNoPersistentLicense
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

DownloadService.VERSION = '2.1.95-234';

if (videojs.getPlugin('DownloadService')) {
  videojs.log.warn('A plugin named "DownloadService" already exists.');
} else {
  videojs.registerPlugin('download', DownloadService);
}

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

    // Block call to handleSource before constructor
    options.constructing_ = true;

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

    _this.textTrackChangeBind = _this.baseTextTrackChange.bind(_this);
    _this.textTracks().on('selectedlanguagechange', _this.textTrackChangeBind);

    _this.audioTrackChangeBind = _this.baseAudioTrackChange.bind(_this);
    _this.audioTracks().on(empPlayerEvents.CHANGE, _this.audioTrackChangeBind);

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

    _this.options_.constructing_ = options.constructing_ = undefined;
    if (_this.options_.source && _this.options_.source.src) {
      _this.setSource(_this.options_.source);
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


  EmpShaka.prototype.handleSource = function handleSource(source, tech) {
    var _this2 = this;

    if (tech.options_.constructing_ || !this.baseHandleSource(source, tech)) {
      return;
    }

    this.preActiveVariantTrack = null;
    this.preActiveTextTrack = null;

    // Shaka is loading
    if (this.loading_ || !source.src) {
      log$1.warn('handleSource shaka is loading');
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
      ignoreTextStreamFailures: true
    };

    if (IS_ANDROID) {
      config.drm = {
        advanced: {
          'com.widevine.alpha': {
            'videoRobustness': 'SW_SECURE_CRYPTO',
            'audioRobustness': 'SW_SECURE_CRYPTO'
          }
        }
      };
    } else {
      config.drm = {
        advanced: {
          'com.widevine.alpha': {
            'videoRobustness': 'SW_SECURE_DECODE',
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
      startTime = this.options_.startTime;
    }
    log$1('before load stream');
    this.loading_ = true; //Block load call if loading 

    if (window_1.ShakaPlayerDnaWrapper && this.options_.streamrootkey && !this.streamrootWrapper_) {
      this.createStreamrootWrapper_(this.options_.streamrootkey);
    }

    this.shakaPlayer_.load(source.src, startTime).then(function () {
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
      if (!_this3.preActiveVariantTrack || activeVariantTrack.videoBandwidth !== _this3.preActiveVariantTrack.videoBandwidth) {
        log$1('BITRATE_CHANGED', activeVariantTrack.videoBandwidth);
        var auto = false;
        var config = _this3.shakaPlayer_.getConfiguration();
        if (config.abr.enabled) {
          auto = true;
        }
        _this3.trigger({ type: empPlayerEvents.BITRATE_CHANGED, 'bubbles': true }, {
          'bitrate': activeVariantTrack.videoBandwidth, 'auto': auto
        });
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
    var bitrates = [];

    variantTracks.forEach(function (track) {
      //Add only unique videoBandwidth
      if (track.language === activeVariantTrack.language && bitrates.indexOf(track.videoBandwidth) === -1) {
        bitrates.push(track.videoBandwidth);
      }
    });
    bitrates.sort(function (a, b) {
      return b - a;
    });
    return bitrates;
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
      this.trigger({ type: empPlayerEvents.BITRATE_CHANGED, bubbles: true }, { bitrate: value, auto: true });
      this.preActiveVariantTrack = null;
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
    var langcodes = this.shakaPlayer_.getVariantTracks().map(function (track) {
      return track.language;
    }).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
    return this.isTechAudioTrackSynchronized(langcodes);
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
      this.selectVideojsAudioLanguage(this.getSelectedTechAudioLanguage());
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
  * selectTechAudioLanguage
  *
  * @private
  */


  EmpShaka.prototype.selectTechAudioLanguage = function selectTechAudioLanguage(languageCode) {
    if (languageCode) {
      //Make selection sticky
      if (!this.options_) {
        this.options_ = {
          'audioLanguage': languageCode
        };
      } else {
        this.options_.audioLanguage = languageCode;
      }

      if (languageCode !== this.getSelectedTechAudioLanguage()) {
        log$1('selectTechAudioLanguage', languageCode);
        this.shakaPlayer_.selectAudioLanguage(languageCode);
      }
    }
  };

  /**
   * getSelectedTechAudioLanguage
   *
   * @private
   */


  EmpShaka.prototype.getSelectedTechAudioLanguage = function getSelectedTechAudioLanguage() {
    if (!this.shakaPlayer_) {
      return null;
    }
    var activeVariantTrack = this.getActiveVariantTrack();
    return activeVariantTrack ? activeVariantTrack.language : null;
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
  * getSelectedTechTextLanguage
  *
  * @private
  */


  EmpShaka.prototype.getSelectedTechTextLanguage = function getSelectedTechTextLanguage() {
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
    return this.isTechTextTrackSynchronized(shakaTextTracksLanguages);
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
      this.selectVideojsTextLanguage(this.getSelectedTechTextLanguage());
      return;
    }

    this.blockLocalTrackChange = true;
    log$1('configureVideojsTextTracks');
    // Clear videojs text tracks
    this.clearTracks(['text']);

    // Add available text tracks to videojs
    var textTracks = this.shakaPlayer_.getTextTracks();
    var selectedVideojsTrack = void 0;
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
    });
    //We need change mode after all tracks are added for UI menu to work.
    if (selectedVideojsTrack) {
      selectedVideojsTrack.mode = 'showing';
      if (!this.shakaPlayer_.isTextTrackVisible()) {
        this.shakaPlayer_.setTextTrackVisibility(true);
      }
    } else {
      this.shakaPlayer_.setTextTrackVisibility(false);
    }
    this.stopBlockLocalTrackChange('configureVideojsTextTracks');
  };

  /**
  * selectTechTextLanguage
  *
  * @private
  */


  EmpShaka.prototype.selectTechTextLanguage = function selectTechTextLanguage(languageCode) {
    if (languageCode) {
      // Show text track
      if (!this.shakaPlayer_.isTextTrackVisible()) {
        log$1('Shaka texttrack', 'show', this.getSelectedTechTextLanguage());
        this.shakaPlayer_.setTextTrackVisibility(true);
      }
      if (this.getSelectedTechTextLanguage() !== languageCode) {
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

  /////////////////// Text tracks end


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
    this.audioTracks().off('change', this.audioTrackChangeBind);
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

  createClass(EmpShaka, [{
    key: 'streamType',
    get: function get$$1() {
      if (this.options_ && this.options_.streamType === 'HLS') {
        return 'HLS';
      } else {
        return 'DASH';
      }
    }
  }], [{
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
        canHandleSource: function canHandleSource(source, options) {
          // Keep this so when setting the source to an mpd url it still works
          var dashExtRE = /\.mpd/i;

          if (EmpShaka.nativeSourceHandler.canPlayType(source.type, options)) {
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
          tech.handleSource(source, tech);
        },

        /**
         * Determine if we can play type
         * @param {String}  type mime-type
         * @returns {probably|''}
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

EmpShaka.VERSION = '2.1.95-234';

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
