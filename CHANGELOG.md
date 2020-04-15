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

## 2.0.93

### Bug fixes
- **EMP-11837** Playback.Aborted should not be sent after Playback.Error + order of the events is not always right
- **EMP-11899** Playback.Aborted not sent when jumping to live
- **EMP-11902** Playback.Aborted events sent by the CC have offset null

### New features
- **EMP-11832** Adapt the timeline in the player for streams with DVR-window in the manifest URL (streams without epg)
- **EMP-11791** Update to Shaka 2.4.4
- **EMP-11904** Analytics improvement - Send browser/version in Name and Model

## 2.0.94

### New features
- New HtML5 player 2.0.94

## 2.1.95

### New features
- New HtML5 player 2.1.95
- **EMP-12047** Add EmpDashif tech to Chromecast

## 2.1.98

### New features
- New HtML5 player 2.1.98
- **EMP-12315** Use the new entitlement service V2.
- Remove Dashif as supported tech

## 2.1.99

### New features
- Latest HtML5-player 2.1.99

## 2.1.100

### New features
- Latest HtML5-player 2.1.100
- **EMP-11617** Update videojs to 7.4.1 [CHANGELOG](https://github.com/videojs/video.js/blob/master/CHANGELOG.md)
- **EMP-12394** Update shaka to 2.5  (Drift is now tolerated in live streams)

## 2.1.101
### Bug fixes
- **EMP-12503** Static catch-up won't start, stop start at 2.1 sec.

### New features
- Latest HtML5-player 2.1.101

## 2.1.102

### New features
- Latest HtML5-player 2.1.102

## 2.1.103

### New features
- Latest HtML5-player 2.1.103
- **EMP-12569**	Program service use new endpoints to fetch next/previous program.
- **New options** epgPollingDisabled
- **EMP-12627** Handle endless sessions.
- **EMP-12637** Don't stop playback when network disconnected or io_suppended.

## 2.1.104

### New features
- Latest HtML5-player 2.1.104
- **EMP-12697** Use the new entitlement service V2 for entitle call. 

## 2.1.105

### New features
- Latest HtML5-player 2.1.105
- **EMP-12715** Live Events in HTML5 and CC SDK

### Bug fixes
- **EMP-12727** Autoplay and stream stalling

## 2.1.106

### New features
- **EMP-11676 Improvement** - Use Mediainfo bar in Cromecast receiver
- Add redbee-cc-skin.css

### Bug fixes
- Fix send duration on update duration if duration has changed.

## 2.1.108

### New features
- **EMP-12780** Add a playlist to the player
- **EMP-12728** Update Shaka to 2.5.1

## 2.1.109

### Bug fixes
- **EMP-12813** Autoplay does not always work.
- **EMP-12770**  Subtitle menu shows 2 entries for each language.

## 2.1.110

### New features
- **EMP-12825** HTML5 2.0 - Create WLA CC Receiver.

## 2.1.119

### New features
**EMP-13616** Use the latest EMPAnalytics 2.1.119
**EMP-13724**  Player should support multiple languages for media info bar

## 2.2.122

### New features
**EMP-13821** Playlist for Chromecast

## 2.2.123

### New features
- **EMP-13963** Update Shaka to v2.5.8 Fix problems with Ad's and Multi-period DASH

## 2.2.125

### Bug fixes
EMP-14057 Problem with ended live events.
EMP-14060 Start from bookmark with VOD used old technology.

### New features
- Use imagescaler for media info images.
- Add getMediaInfo method to player.
- Update to HTML5 Player 2.2.125

## 2.2.126

### Bug fixes
- fix problem with VTT Thumbnails class
- fix events leaks on dispose
- EMP-14147 Double call to src method when not setting sessionToken with anonymous login

### New features
- update hls.js to 0.13.2, EmpHLS-MSE

## 2.2.127

### Bug fixes
EMP-14065 Poster is not showing with more than one tech.

## 2.2.128

### Bug fixes
EMP-14280 The progress bar grows outside its container.

### New features
- EMP-14130 Add a timeline for moving DVR Window (dvr_window_length).
- EMP-14257 Handle Virtual Live Stream.
- EMP-14271 Configurable threshold for DVR/Live, minDvrWindow
- EMP-14278 dvr_window_length and minDvrWindow with Chromecast
- EMP-14279 Casting unencrypted HLS (Virtual Live Streams)
- Update to HTML5 Player 2.2.128




