# EMP Chromecast Receiver 2

EMP Chromecast Receiver now exposes a library that can be used by third parties. The library is available as an NPM [package](https://www.npmjs.com/package/emp-chromecast-receiver-2)

EMP Chromecast demo receiver app shows how to work with the npm package. 
The source code is available as a github repository [here](https://github.com/EricssonBroadcastServices/chromecast-demo-receiver). 
You can find more information on the project's github tutorial section [here](https://github.com/EricssonBroadcastServices/chromecast-demo-receiver#tutorial)

This document provides an overview of building a custom Google Cast receiver application.
https://developers.google.com/cast/docs/custom_receiver
Your custom receiver application have to be deployed to a web server with domain name and SSL support.
The url to the receiver application have to be registed at Google, with a company account owning the streaming services.
https://developers.google.com/cast/docs/registration

emp-player options can be send to empReceiver constructor and emp-player events can be subscribed to.
[here](https://github.com/EricssonBroadcastServices/chromecast-demo-receiver/blob/master/app/js/emp-receiver-app.js).

```javascript
  let options = {
      debug: false,
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
```