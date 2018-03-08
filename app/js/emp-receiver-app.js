import window from 'global/window';
import document from 'global/document';
import empReceiver from 'emp-chromecast-receiver-2-dev';

const empPlayer = empReceiver.empPlayer;


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
      this.empReceiver_.player.on(empPlayer.Events.PLAYING, this.onPlayStateChange_.bind(this));
      this.empReceiver_.player.on(empPlayer.Events.PAUSE, this.onPlayStateChange_.bind(this));
      this.empReceiver_.player.on(empPlayer.Events.SEEKING, this.onPlayStateChange_.bind(this));
      this.empReceiver_.player.on(empPlayer.Events.WAITING, this.onPlayStateChange_.bind(this));
      this.empReceiver_.player.on(empPlayer.Events.ENDED, this.onPlayStateChange_.bind(this));
      this.empReceiver_.player.on(empPlayer.Events.ERROR, this.onPlayStateChange_.bind(this));
    });

    this.empReceiver_.on(empReceiver.Events.STATE_CHANGED, this.onStateChange_.bind(this));
    this.empReceiver_.on(empReceiver.Events.METADATA_UPDATED, this.onMetadataUpdate_.bind(this));
    this.empReceiver_.on(empReceiver.Events.RESOLUTION_CHANGED, this.onResolutionChanged_.bind(this));

  }

  /** @private */
  onMetadataUpdate_(metadata) {  
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
 
   
  /** @private */
  onResolutionChanged_(resolution) {
    let mediaResolutionHtml = document.getElementById('media-resolution');
    if(!mediaResolutionHtml) {
      return;
    }
    if(resolution) {
      mediaResolutionHtml.innerHTML = resolution;
      mediaResolutionHtml.style.display = 'inline';
    }
    else {
      mediaResolutionHtml.style.display = 'none';
    }
  }


  /** @private */
  onPlayStateChange_(event, payload) {
    empPlayer.log('playStateChanged', event);
    if ('ended' === event.type) {
      // You can now load the next asset...
    }
    else if ('playing' === event.type) {
      var els = document.getElementsByClassName('vjs-current-time');
      if (els && els.length > 0) {
        var timeDisplay = els[0];
        if (this.empReceiver_.player.isLive() === true) {
          timeDisplay.style.display = 'none';
        }
        else {
          timeDisplay.style.display = 'block';
        }
      }
    }
    else if ('error' === event.type) {
      const error = this.empReceiver_.player.getError();
      this.showError(error ? error.message : payload);
    }
  }


  /** @private */
  onStateChange_(state) {
    this.container_.setAttribute('state', state);
    if (state === 'loading') {
      this.hideError();
    }
  }

  showError(message) {
    let errorDisplay = document.getElementById('emp-error-display');
    if (errorDisplay) {
      errorDisplay.innerHTML = '[ERROR] ' + (message ? message : '');
      errorDisplay.style.display = 'block';
    }
  }

  hideError() {
    let errorDisplay = document.getElementById('emp-error-display');
    if (errorDisplay) {
      errorDisplay.style.display = 'none';
    }
  }

  get receiver() {
    this.empReceiver_;
  }

}


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
