# EMP Chromecast Receiver 2

This document provides an overview of building a custom Google Cast receiver application.
https://developers.google.com/cast/docs/custom_receiver
Your custom receiver application have to be deployed to a web server with domain name and SSL support.
The url to the receiver application have to be registed at Google, with a company account owning the streaming services.
https://developers.google.com/cast/docs/registration
Google Cast SDK Developer Console
https://cast.google.com/u/2/publish/#/overview

The receiver is compliant with the default chromecast receiver API unless otherwise stated. For information on how to build a sender and other functionality not described here. See https://developers.google.com/cast/docs/sender_apps

[See sender tutorials](tutorials/chromecast.md)

# Release notes

## 2.0.79

### New features and Enhancements
**Breaking changes for version 2**

When casting a channel or a program, the timeline is now relative to the beginning of the program and not the beginning of the stream. This change makes the Chromecast built-in sender controls and Cloud senders to work out-of-the-box, making it easier and faster to develop a sender.
<br />
* CurrentTime, Duration and Seek values are based on seconds, and are now relative to the beginning of the program and not the beginning of the stream. The behaviour matches what is done when playing locally.
* Use **channelId** & **programId** for live and catchup playback. **AssetId** should only be used for VoD.
* ProgramChanged message broadcasted by the Receiver is now an object containing the program’s full metadata. Before, it was just a string containing the programId. Senders should handle this api change.
* "refreshcontrols" message is deprecated. Please use "pull" instead.
* "setabsolutetime" message is deprecated. Please use "playheadtime" instead.
* DurationChanged has been removed, duration is now a property on the Media object that is sent on media status update. 
  This is necessary to make the senders built-in controls to work.
* Playback properties like default playback behaviour, startTime, etc.. were adapted so that they match the mobile client’s playback properties structure. To start casting use playbackProperties, described in [Playback method 1](chromecast.md#playback-method-1) below.  

**New fetures**

* Program related progress bar with seamless switching between programs for a channel.
* Switch program by sending new playheadtime, play next, play previus or goto live messages.
* AssetChanged event is sent when a new VOD content is playing and the message includes the asset object.
* Support for casting external streams in MPEG-DASH or MP4 format.
* Line up programs, assets and external streams to be played in sequence.
* Jump to the next lineup video asset.
* Change text track style from the senders.
* Audio and Text kind for multiple tracks in the same language (e.g. Tracks with descriptions and comments for disabled viewers).
* Media.empPayload and Media.customData don't need to be set by the sender, they are set by the receiver.
* Entitlement will be returned as an object containing contract restrictions for a specific playback. Contract restrictions are enforced on the receiver but the sender might want to have the info in order to hide or show controls affected.


### Bug fixes

## 1.63.0

### New features and Enhancements
**EMP-9869** Hiding time display (start time) for live streams

### Bug fixes
**EMP-9819** Changing CSS so that the timeline bar shows when seeking/buffering and not after the event has finished
**EMP-9836** Hiding pause icon if the media has not been loaded yet & showing ControlBar spinner for live asset loads.
**EMP-9909** Handling error states on the receiver app side.


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

update from emp-chromecast-receiver-2

**Warning** will overwrite images, css, index.html and emp-receiver-app.js
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

### Tutorial

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
This demo app uses emp-chromecast-receiver. Check the API documentation [here](https://www.npmjs.com/package/emp-chromecast-receiver-2#api)

EMP HTML5 Player
=======
The receiver makes use of emp-player.



