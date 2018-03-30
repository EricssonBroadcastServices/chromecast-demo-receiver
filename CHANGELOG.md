# Release notes 

## 2.0.79   The first 2.0 release

### New features and Enhancements
**Sender**
* Program related progress bar with seamless switching between programs for a channel.
* Switch program by sending new playheadtime, play next, play previous or goto live messages.
* AssetChanged event is sent when a new VOD content is playing and the message includes the asset object.
* Support for casting external streams in MPEG-DASH or MP4 format.
* Line up programs, assets and external streams to be played in sequence.
* Jump to next lined up video asset.
* Change text track style from the senders.
* Audio and Text kind for multiple tracks in the same language (e.g. Tracks with descriptions and comments for disabled viewers).
* Media.empPayload and Media.customData don't need to be set by the sender, they are set by the receiver.
* Entitlement will be returned as an object containing contract restrictions for a specific playback. Contract restrictions are enforced on the receiver but the sender might want to have the info in order to hide or show controls affected.

**Receiver**
* Get cast.receiver.MediaManager from empReceiver *(for advanced customization)*
* Get cast.receiver.CastReceiverManager from empReceiver *(for advanced customization)*
* Get current Video Element from empReceiver *(for advanced customization)*
* Send custom messages to senders *(for advanced customization)*
* Send error messages to senders *(for advanced customization)*

## 2.0.79-11 Beta Release

### New features
**EMP-11084** Show progress and titel bar CC on programchange and assetchange.
Show the program image with type === 'chromecast' in Chromecast demo receiver.

### Bug fixes
**EMP-11115** No ProgramChanged event in Analytic after program boundary crossing.
**EMP-11005** HTML Player 2.0 - OffsetTime is missing for the following analytics event: Playback.ProgramChanged.
**EMP-11060** Analytics is validate session every second when casting
**EMP-10946** Analytic error: There is no timeout scheduled with the given id "3819903156412202"

## 2.0.80 Beta Release

### New features
**EMP-11161**   Add Channel information to the program object
**EMP-11085**   Don't show title bar and buffering when it's not a real buffering, (stalling-playback)
**EMP-11197**   Program end as duration for live program 

### Bug fixes
**EMP-11167** 	CC Receiver - Sometimes the playback just stops on the receiver 
**EMP-10957**   HTML Player 2.0 - Wrong error message: not entitled instead of stream not available
**EMP-10979**	Shaka - loading the stream for live channels take long time for some channels
**EMP-11162**   Cast error, can't recover code: session_error message: INVALID_MEDIA_SESSION_ID
**EMP-11164**   Flipping timebar - CurrentProgram remove before pre program switch to new program
**EMP-11114**   CC Receiver - Seeking crashes the receiver



