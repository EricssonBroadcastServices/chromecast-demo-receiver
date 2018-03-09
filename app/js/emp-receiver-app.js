import window from 'global/window';
import document from 'global/document';
import empReceiver from 'emp-chromecast-receiver-2-dev';

const empPlayer = empReceiver.empPlayer;

 /**
 * EMPReceiverApp - UIController that handle the ui-logic for the receiver.
 * It instantiate the empReceiver and listen to events.
 *  
 * You make changes in this class to build your own Receiver, with your preferred look and feel.
 */
class EMPReceiverApp {

  constructor() {
    let player = document.getElementById('player');
    this.container_ = document.getElementById('receiver');

    let options = {
      debug: false,
      statusText: 'EMP Receiver App',
      playerOptions: {
        empshaka: {
          abr: {
            // startBitrate 5Mbps 
            defaultBandwidthEstimate: 5e6
          }
        }
      }
    };

    this.empReceiver_ = new empReceiver(player, options, () => {
      this.empReceiver_.player.on(empPlayer.Events.PLAYING, this.onPlayStateChange.bind(this));
      this.empReceiver_.player.on(empPlayer.Events.PAUSE, this.onPlayStateChange.bind(this));
      this.empReceiver_.player.on(empPlayer.Events.SEEKING, this.onPlayStateChange.bind(this));
      this.empReceiver_.player.on(empPlayer.Events.WAITING, this.onPlayStateChange.bind(this));
      this.empReceiver_.player.on(empPlayer.Events.ENDED, this.onPlayStateChange.bind(this));
      this.empReceiver_.player.on(empPlayer.Events.ERROR, this.onPlayStateChange.bind(this));
    });

    this.empReceiver_.on(empReceiver.Events.STATE_CHANGED, this.onStateChange.bind(this));
    this.empReceiver_.on(empReceiver.Events.METADATA_UPDATED, this.onMetadataUpdate.bind(this));
    this.empReceiver_.on(empReceiver.Events.RESOLUTION_CHANGED, this.onResolutionChanged.bind(this));
  }


  /**
  * Handle metadata changed, Update the mediaArt UI here
  *
  * @param {object} metadata {title:'', subtitle:'', images:[]}
  */
  onMetadataUpdate(metadata) {
    let mediaArtworkImg = document.getElementById('media-artwork-img');
    let mediaTitle = document.getElementById('media-title');
    let mediaSubtitle = document.getElementById('media-subtitle');
    if (mediaTitle) {
      mediaTitle.innerHTML = metadata.title || '';
    }
    if (mediaSubtitle) {
      mediaSubtitle.innerHTML = metadata.subtitle || '';
    }
    if (mediaArtworkImg && metadata.images && metadata.images.length > 0) {
      var image = this.imageSelector(metadata.images);
      mediaArtworkImg.src = image.url;
      mediaArtworkImg.height = image.height;
      mediaArtworkImg.width = image.width;
      mediaArtworkImg.style.display = 'block';
      mediaArtworkImg.style.position = 'absolute';
      mediaArtworkImg.style.bottom = '0px';
    }
    else {
      mediaArtworkImg.style.display = 'none';
    }
  }

  /**
  * Select the image to display for the asset
  * @param {Array} images image objects
  */
  imageSelector(images) {
    let image;
    if (images.length === 1) {
      image = images[0];
    }
    for (var i = 0; i < images.length; i++) {
      if (images[i].url && images.type === 'chromecast') {
        return images[i];
      }
    }
    return image;
  }


  /**
  * Handle resolution changed, show/hide resolution text
  *
  * @param {string} resolution ['SD','HD','2K','4K']
  */
  onResolutionChanged(resolution) {
    let mediaResolutionHtml = document.getElementById('media-resolution');
    if (!mediaResolutionHtml) {
      return;
    }
    if (resolution) {
      mediaResolutionHtml.innerHTML = resolution;
      mediaResolutionHtml.style.display = 'inline';
    }
    else {
      mediaResolutionHtml.style.display = 'none';
    }
  }


  /**
  *  Handle play state change,
  *
  * @param {Event} event the play state event that triggered this function
  * @param {object} data the data that was sent with the event
  */
  onPlayStateChange(event, data) {
    empPlayer.log('playStateChanged', event, data);
    if ('ended' === event.type) {
      // You can now load the next asset...
    }
    else if ('playing' === event.type) {
      var els = document.getElementsByClassName('vjs-current-time');
      if (els && els.length > 0) {
        var timeDisplay = els[0];
        if (this.empReceiver_.player.isLive() && !this.empReceiver_.player.timeShiftEnabled()) {
          timeDisplay.style.display = 'none';
        }
        else {
          timeDisplay.style.display = 'block';
        }
      }
    }
    else if ('error' === event.type) {
      const error = this.empReceiver_.player.getError();
      this.showError(error ? error.message : data);
    }
  }


  /**
  *  Handle empReceiver state change,
  *
  * @param {string} state empReceiver.ReceiverStates ['launching', 'loading','buffering', 'seeking', 'playing', 'paused', 'done', 'idle']
  */
  onStateChange(state) {
    this.container_.setAttribute('state', state);
    if (state === 'loading') {
      this.hideError();
    }
  }

  /**
  * show error message on screen
  *
  * @param {string} message
  */
  showError(message) {
    let errorDisplay = document.getElementById('emp-error-display');
    if (errorDisplay) {
      errorDisplay.innerHTML = '[ERROR] ' + (message ? message : '');
      errorDisplay.style.display = 'block';
    }
  }

  /**
  * Hide error message on screen
  *
  */
  hideError() {
    let errorDisplay = document.getElementById('emp-error-display');
    if (errorDisplay) {
      errorDisplay.style.display = 'none';
    }
  }
}

/**
*  Initialize then receiver app
*/
function receiverAppInit() {
  empPlayer.log.setLogToBrowserConsole(true);
  window.receiverApp = new EMPReceiverApp();
}

if (document.readyState === 'loading' ||
  document.readyState === 'interactive') {
  window.addEventListener('load', receiverAppInit);
} else {
  receiverAppInit();
}
