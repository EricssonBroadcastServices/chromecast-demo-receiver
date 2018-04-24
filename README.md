# EMP Chromecast Receiver 2

This document provides an overview of building a custom Google Cast receiver application.
https://developers.google.com/cast/docs/custom_receiver
Your custom receiver application have to be deployed to a web server with domain name and SSL support.
The url to the receiver application have to be registed at Google, with a company account owning the streaming services.
https://developers.google.com/cast/docs/registration
Google Cast SDK Developer Console
https://cast.google.com/u/2/publish/#/overview

The receiver is compliant with the default chromecast receiver API unless otherwise stated. For information on how to build a sender and other functionality not described here. See https://developers.google.com/cast/docs/sender_apps

* **[Upgrade Guide](https://github.com/EricssonBroadcastServices/chromecast-demo-receiver/blob/master/tutorials/upgrade-guide.md)**
* **[Chromcast sender tutorials](https://github.com/EricssonBroadcastServices/chromecast-demo-receiver/blob/master/tutorials/chromecast.md)**
* **[Release notes](https://github.com/EricssonBroadcastServices/chromecast-demo-receiver/blob/master/CHANGELOG.md)**
* **[Hosted API docs](https://emps-chromecast-receiver.azurewebsites.net/chromecast-demo-receiver/stage/docs/)**


Hosted Demo receiverAppId E5A43176 (private)


# Development

A demo receiver app that uses this package is available [here](https://github.com/EricssonBroadcastServices/chromecast-demo-receiver)

Starting development
--------------------

As a developer you need to add custom ui-logic to the receiver-app and customize index.html file.
To build the code there are a few requirements
- Node.js -- We use Node for build and test automation. [Download and install Node.js](http://nodejs.org/download/)
- grunt-cli

Unix-based systems
```bash
sudo npm install -g grunt-cli
```

Windows
```bash
npm install -g grunt-cli
```

to setup your project
```bash
npm install
```

to build a local copy of the receiver
```bash
grunt build
```

pull update from emp-chromecast-receiver-2 npm package. (will overwrite images, css, index.html and emp-receiver-app.js)
```bash
grunt update
```

then deploy the `dist` directory in any webserver, add the URL in chromecast console and enjoy!

Grunt commands
==============

Some grunt tasks are available:

```bash
grunt
```

```bash
grunt build
```
Builds the code and and places the final app in `dist` folder.

```bash
grunt deploy
```
An example on how to use ftp to send the app to a webserver.
If the ftp server requires authentication, credentials should be placed in a file .ftpauth in the root of the project



About the code
==============
Javascript for the Receiver will be written using the new ES6 standard. Using grunt tasks this is then re-written to the ES5 standard where available. To learn more about Es6 see [babel](https://babeljs.io/).
To keep our code clean and separated, we uses [Browserify](http://browserify.org/). This allows us to use require statements to import javascript code from other files.

All of the above is done automatically using the grunt build system, but during development one should be aware of the power, and the limitations of both systems.

Separate UI-logic
==============
The Receiver has separate ui-logic and playback-logic.
emp-receiver playback-logic is installed from a npm package.
Run npm install to get all depending npm packages.
As a developer you need to add custom ui-logic to the receiver-app and customize index.html file.
Receiver-app should implement event listener for
METADATA_UPDATED: fire when program changed, should be used to display title and images about the current program.
STATE_CHANGED: fire when playback state changed, should be used to display play icon, buffer spinner etc.
emp-receiver expose the inner emp-player, other playback event can be handle directly on the emp-player.
Receiver-app.js and index.html are samples how to implement a custom emp-receiver.

EMP Chromecast Receiver
=======

**[See EMP-Receiver API Docs](https://github.com/EricssonBroadcastServices/chromecast-demo-receiver/blob/master/api.md)**

emp-player options can be send to empReceiver constructor and emp-player events can be subscribed to.

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

<br />

EMP HTML5 Player
=======
The receiver makes use of emp-player version 2.
- [emp-player docs](https://emps-chromecast-receiver.azurewebsites.net/html5-player-2/reference/docs/index.html)
- [emp-player npm](https://www.npmjs.com/package/empplayer2-dev)



