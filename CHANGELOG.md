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
- **EMP-11084** Show progress and titel bar CC on programchange and assetchange.
- Show the program image with type === 'chromecast' in Chromecast demo receiver.

### Bug fixes
- **EMP-11115** No ProgramChanged event in Analytic after program boundary crossing.
- **EMP-11005** HTML Player 2.0 - OffsetTime is missing for the following analytics event: Playback.ProgramChanged.
- **EMP-11060** Analytics is validate session every second when casting
- **EMP-10946** Analytic error: There is no timeout scheduled with the given id "3819903156412202"

## 2.0.80 Beta Release

### New features
- **EMP-11161**   Add Channel information to the program object
- **EMP-11085**   Don't show title bar and buffering when it's not a real buffering, (stalling-playback)
- **EMP-11197**   Program end as duration for live program 

### Bug fixes
- **EMP-11167** 	CC Receiver - Sometimes the playback just stops on the receiver 
- **EMP-10957**   HTML Player 2.0 - Wrong error message: not entitled instead of stream not available
- **EMP-10979**	Shaka - loading the stream for live channels take long time for some channels
- **EMP-11162**   Cast error, can't recover code: session_error message: INVALID_MEDIA_SESSION_ID
- **EMP-11164**   Flipping timebar - CurrentProgram remove before pre program switch to new program
- **EMP-11114**   CC Receiver - Seeking crashes the receiver

## 2.0.82

### New features
- **EMP-10978** Upgrade Shaka 2.2.6 -> 2.3.6
https://github.com/google/shaka-player/releases
              
### Bug fixes
- **EMP-11340** Reset Shaka when new asset is cast.

## 2.0.83
             
### Bug fixes
- **EMP-11300** Chromecast version 1 not working
- **EMP-11341** Can't casting to Chromecast v1, Unbundle libraries fix this issue.
- **EMP-11342** emp-receiver don't include videojs, emp-player and emp-shaka theses have to be added to the index.html

## 2.0.84

### Bug fixes
- **EMP-11343** Event memory leak when cast new asset or program.

### New features
- **EMP-11344** Shaka 2.3.6-3: Only add new segment references for SegmentTimeline.
- **EMP-11345** Shaka 2.3.6-4: Calculate liveEdge from last segment starttime for SegmentTimeline.
- **EMP-11330** Send livedelay from CC receiver
- **EMP-11346** Optimize start casting, reduce media status update.
- **EMP-11347** Receiver do not close when last sender dissconect.
- **EMP-11353** Don't try recover from error by try other tech on receiver.

## 2.0.85

### Bug fixes
- **EMP-11346** Optimize start casting, reduce more media status update and send them not to early.
- **EMP-11389** **contentID** Should be set to assetId, see documentation for Chromecast senders. *(This fix build-in minicontrol show up as it should)*.

### New features
-  **EMP-11388** Set initiate volume level and muted when start casting.

## 2.0.86

### New features
- Upgrade HTML5 Player to 2.0.86

## 2.0.88

### Bug fixes
- **EMP-11134** Error event is sent on a closed session causes a lot of unnecessary errors
- **EMP-11383** Device.Info event should always be send when an error occur
- **EMP-11622** MediaLocator sent in Playback.Started does not include the t params

### New features
- Upgrade HTML5 Player to 2.0.88

## 2.0.89

### Bug fixes
- **EMP-11480** Consol error from HTML5 player

### New features
- **EMP-11616** Upgrade Shaka to 2.4.3 (latest)
- **EMP-11448** Tracking license requests to Irdeto through analytics trace

## 2.0.90

### Bug fixes
- **EMP-11674** Shaka memory leak in Chromecast v1
- **EMP-11686** Analytics send synchronous call's to backend
- **EMP-11693** CC timeline not working after jump to previous program

### New features
- **EMP-11669** HTML5/CC 2.x - Send EE requestID in Playback.Created
- **EMP-11692** The clients need to handle the http 410 response from backend
- **EMP-11705** Timeout in hours when a "Are You Still Watching?" message will be displayed.

## 2.0.92

### Bug fixes
- **EMP-11770** HTML5 and CC - Improve error logging in analytics, several error-sessions without any info about the asset/channel/program
- **EMP-11222** Unnecessary error-sessions sent to analytics from the web player

### New features
- **EMP-11768** HTML5 and CC should log errors in analytics according to the standard
- **EMP-11785** Html5 and CC Start playback with only programId.


