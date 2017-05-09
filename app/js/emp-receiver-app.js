import window from 'global/window';
import document from 'global/document';
import empReceiver from 'emp-chromecast-receiver';

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
      mediaArtworkImg.src = metadata.images[0].url;
      mediaArtworkImg.style.display = 'block';
    }
    else {
      mediaArtworkImg.style.display = 'none';
    }
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
  onPlayStateChange_(event) {
    empPlayer.log('playStateChanged', event);
    if ('ended' === event.type) {
      // You can now load the next asset...
    }
  }


  /** @private */
  onStateChange_(state) {
    this.container_.setAttribute('state', state);
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
