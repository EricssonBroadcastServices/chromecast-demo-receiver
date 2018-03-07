# EMP Chromecast sender version 2

**Custom message namespace:** urn:x-cast:com.ericsson.cast.receiver

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





### Connect to Chromecast receiver ###

The HTML5 player comes with a default Chromecast Receiver implementation, however, you can use your own Receiver by overriding the default Application ID. This is done by setting the appId option on the Chromecast button:
```javascript
options['controlBar'] = {
  'chromeCastButton': {
    'appId': receiverAppId
  }
};
```

EMP HTML5 sender is a videojs plugin. Include the javascript emp-cast-sender.js and the Chromecast button will appear in the sender's controlbar.
In the bundle script emp-player-all.js, the emp-cast-sender is already included. 

The receiver is compliant with the default Chromecast Receiver API unless otherwise stated. For information on how to build a sender, pleaes visit https://developers.google.com/cast/docs/sender_apps


*CurrentTime and Seek are handled with the Chromecast Sender API. The time is program-start based for programs and stream-start based for VOD's*

<br />


## LoadRequest ##

**Loading Media**
To load media on the receiver, add data to the customData parameter of the load method. Use [Playback method 1](chromecast.md#playback-method-1) for EMP streams. In order to cast EMP media, the EMP media has to be available in the DASH/CENC format.

Loading media is done using the following methods

GCKMediaControlChannel:loadMedia (iOS)

RemoteMediaPlayer.load (android)


**Start Time**

To start casting a media from a position other than 0, it is possible to set the currentTime attribute in the LoadRequest object (found in the Chromecast API).
Use startTime in [Playback method 1](chromecast.md#playback-method-1) for EMP streams, insted of the startTime parameter of the load method.

```javascript
// Setting start time
var loadRequest = new window.chrome.cast.media.LoadRequest(mediaInfo);
loadRequest.currentTime = startTime;
```

**CustomData**


```javascript
var loadRequest = new window.chrome.cast.media.LoadRequest(mediaInfo);
    loadRequest.customData = {
      ericssonexposure: {
        customer: 'customer',
        businessUnit: 'businessUnit',
        sessionToken: 'sessionToken', // Valid API session that has access to the requested media
        exposureApiURL: 'apiUrl'
      },
      assetId: 'assetId', // identifier of media to cast - only for VOD, null or empty for channel play
      channelId: 'ChannelId', // identifier of channel to cast
      programId: 'programId' // optional. The program to watch, otherwise the receiver will load the live program
    }
```
<br />

### Playback method 1 ###
The recommended playback method for EMP streams.

**valid playFrom values**
* **'defaultBehaviour'** (default) Start at beginning of the program if programId is included otherwise start at live edge
* **'startTime'** Start at a Unix startTime
* **'beginning'** Start at the beginning of the program 
* **'bookmark'** Start at the bookmark returned by EMP backend. If there is no bookmark, it falls back to the defaultBehaviour
´

```javascript
loadRequest.customData = {
    channelId: [mandatory]
    programId: [optional]
    playbackProperties {
     playFrom: [mandatory]
     startTime: [optional] // starttime milliseconds since 1970/01/01, used if playFrom is 'startTime',
     startOffset: [optional] // starttime in milliseconds since start of stream
   }
}
```
<br />

### Playback method 2 ###
This  playback method is for external streams (MPEG-DASH or mp4) and for lists of EMP streams.
<br />

```javascript
loadRequest.customData = {
    sources: [array of source to be played],
    source: {src: 'url or assetObject', type: 'MIME Type', licenseServer: 'licUrl', playToken: 'Lic Authorization Bearer', options: {videojs playerOptions} }
}
```
The source **src** attribute can be a 'stream url' or 'assetId' or assetObject {assetId:'', channelId:'', programId:''}
<br />
The source **type** attribute can be any of these 

* **'video/emp'** EMP streams, src attribute should contain an 'assetId' or assetObject 
* **'application/dash+xml'** External MPEG-DASH stream, src attribute should contain a stream url (mpd). 
* **'video/mp4'** External mp4 stream, src attribute should contain a stream url.


*For valid playerOptions see Video.js and EMP HTML5-player documentation*
<br />

You have the option to add a Chromecast title, subtitle and image. This however, isn't not relevant when using EMP streams because the data will be updated by the receiver. This option could be used when working with external streams.
```javascript
loadRequest.customData.source.options :{ 
  empcast : {
        title: '',
        subtitle: '',
        image: {url: '', width: '', height: ''}
  }
}
```

<br />

### Additional optional loadRequest.customData ###
```javascript
loadRequest.customData = {
  audioLanguage: 'en' (default is Chromecast device language) // prefered audio language,  
  subtitleLanguage: 'en' (default is Chromecast device language) // prefered subtitle language,   
  timeShiftDisabled: (default is false) //If timeShift should be enabled, overrides by contract restrictions
  useLastViewedOffset: (default is false) (use playbackProperties instead) // Start from bookmarks, 
  absoluteStartTime: '0' (use playbackProperties instead) // starttime milliseconds since 1970/01/01, this is not the preferde way because VOD case it will be a seek
  textTrackSettings: (default is true) //  If textTrackStyle should be able to be changed by senders
  textTrackStyle: '' // Initial textTrackStyle
  startTime: 0, (use playbackProperties instead) // start time in seconds since start of stream, will be override with loadRequest.currentTime
  autoplay: (default is true) // will be override with loadRequest.autoplay
}
```
<br />

HTML5 Sender will send the current textTrack-style to the reciver, it can be turned off by setting playerOptions.textTrackSettings to false.

**Valid options for textTrackStyle** 
```javascript
textTrackStyle: {
   "backgroundColor":"#000",
   "backgroundOpacity":"0",
   "color":"#FFF",
   "edgeStyle": ["none", "dropshadow", "raised", "depressed", "uniform"]
   "fontFamily":["proportionalSansSerif","monospaceSansSerif", "proportionalSerif", "monospaceSerif", "casual", "script", "small-caps"]
   "fontPercent": "1.00"
   "textOpacity":"1",
   "windowColor":"#000",
   "windowOpacity":"0"
}
```

<br />
<br />

## MediaInformation ##


**Title, Subtitle and Artwork**

It is possible to send media metadata along with the request: title, subtitle and image(s). This however, isn't not relevant when using EMP streams because the media metadata will be updated by the receiver. This option could be used when working with external streams.


```javascript
var assetMetadata = new window.chrome.cast.media.MovieMediaMetadata();
assetMetadata.title = '<MovieTitle>';
assetMetadata.subtitle = '<MovieSubtitle>';
assetMetadata.images = [new window.chrome.cast.Image('<ImageUrl>')];

mediaInfo.metadata = assetMetadata;
```
<br />

**Media Status Update is regularly sent by the receiver**
<br />
**_See_** Cast Sender API documentation and [Media Status](https://developers.google.com/cast/docs/reference/messages#MediaStatus)
<br />
With this event you will get:
<br />
PlayerState [BUFFERING, IDLE, PAUSED and PLAYING]
<br />
idleReason [FINISHED, CANCELLED and ERROR]
<br />

**Media Object** is received with the Media Status Update event
```javascript
media:{ "contentId":"766355-726896573_enigma", // asssetId, Note: It's not alway same as programId
  "streamType":"BUFFERED",  // StreamType will be BUFFERED even for live streams, to make live streams
                            // working with CC build-in controls, if timeshift is disabled it will be "LIVE" to hide progress bar.
  "contentType":"video/emp",
  "metadata":{
     "type":1,
     "metadataType":1,
     "duration":1697.948, //Important property
     "title":"",
     "subtitle":"",
     "images":[{"height":1100,"orientation":"LANDSCAPE","type":"other","url":"","width":1700},
               {"height":1700,"orientation":"PORTRAIT","type":"other","url":"","width":1200}]},
     "empPayload":{
        "assetId":"766355-726896573_enigma",
        "programId":"766355-726896573_enigma",
        "channelId":"766355_enigma"},
      "customData":{
        "assetId":"766355-726896573_enigma",
        "programId":"766355-726896573_enigma",
        "channelId":"766355_enigma"
      }
    }
}
```

**Note:** empPayload and customData will be the same, because some senders can't read one of them.
<br />
*When playing external streams empPayload/customData will contain the source video object.*

**empPayload** and **customData** are used when take back a cast session to continue the playback locally.

**Duration** is a property on the Media object, when live program is casting it will grow every second.

**CurrentTime** is calculated from the last received stream information and the elapsed wall-time since that update. 
Access currentTime with Cast Sender API:
* Web: getEstimatedTime()
* Android: 	getApproximateStreamPosition()
* iOS: approximateStreamPosition	

<br />

## Custom Messaging ##

### Receive Custom Messaging ###

All custom messages, to and from the receiver, will be sent over the namespace: urn:x-cast:com.ericsson.cast.receiver.

**Embedded tracks**

Embedded tracks are broadcasted to all connected senders when a sender sends the 'pull' ('refreshcontrols' Deprecated) message, when subtitles/audio tracks are changed or on period change.
Limitation: Don't use track and audio ids internaly becasue they can change during playback. Use the language code and track kind instead.


```javascript
{
  type: 'tracksupdated',
  data: {
    tracksInfo: {
      activeTrackIds: [0, 1] // array containing all active tracks
      tracks: [
        label: 'label', // textual representation of track
        type: '(text|audio)', // Track type, either text or audio
        trackId: 0, // Track identifier
        language: 'sv' // language identifier
        kind: 'subtitles' // videojs track kind below
      ]
    }
  }
}
```

- Use the 'activeTrackIds' property to display on the Sender which track is currently active on the Receiver.
- If only one audiotrack is available, no audiotracks are broadcasted.
- If no subtitle is currently active and only one audiotrack is available, the activeTrackIds array will be empty.
- Always use the last received message in order to display the correct information to the user. This is important because, in the case where multiple senders are connencted, they could modify the tracks at the same time. 



Text Track Kind values
* "subtitles" (default): Translations of the dialogue in the video for when audio is available but not understood. Subtitles are shown over the video.
* "captions": Transcription of the dialogue, sound effects, musical cues, and other audio information for viewer who are deaf/hard of hearing, or the video is muted. Captions are also shown over the video.
* "chapters": Chapter titles that are used to create navigation within the video. Typically, these are in the form of a list of chapters that the viewer can use to navigate the video.
* "descriptions": Text descriptions of the action in the content for when the video portion isn't available or because the viewer is blind or not using a screen. Descriptions are read by a screen reader or turned into a separate audio track.
* "metadata": Tracks that have data meant for JavaScript to parse and do something with. These aren't shown to the user

<br />

Audio Track Kind values
* "alternative": A possible alternative to the main track.
* "descriptions": An audio description of a video track.
* "main": (default): The primary audio track for this video.
* "main-desc": The primary audio track, mixed with audio descriptions.
* "translation": A translated version of the main audio track.
* "commentary": Commentary on the primary audio track, e.g. a director's commentary.

<br />




**timeShiftEnabled** - Signals whether timeshift is enabled or not.
```javascript
// Timeshift property
{
  type: 'timeShiftEnabled',
  data: (boolean)
}
```

**volumechange** - signals a change in the volume status.
```javascript
// Volume changed property
{
  type: 'volumechange',
  data: {
    volume: (number),
    muted: (boolean)
  }
}
```


**startTimeLive** - returns start time of the live stream.
```javascript
{
  type: 'startTimeLive',
  data: (milliseconds since 1970/01/01)
}
```

**programchanged** - signals a change of program for a given channel.
<br />
**Note:** The program object is returned, not only programId as it was in version 1
```javascript
{
  type: 'programchanged',
  data: {
    program: {object}
  }
}
```


**assetchanged** - signals that a new VOD is playing. It returns the asset that is currently playing.


```javascript
{
  type: 'assetchanged',
  data: {
    asset: {object}
  }
}
```

**entitlementchange** - signals a new entitlement call. It returns the current entitlement.

```javascript
{
  type: 'entitlementchange',
  data: {
    entitlement: {object}
  }
}
```

**error** - signals that an error occurred.
```javascript
{
  type: 'error',
  data: {
    { type: 'ERROR', code: error.code, message: message }
  }
}
```

**segmentmissing** - signals that seek is cancelled because of a segment is missing.

```javascript
// Seek cancelled
{
  type: 'segmentmissing',
  data: (position where segment is missing)
}
```

### Send Custom Messaging ###

**Pull state from receiver**

After joining a session, it might be necessary to request state, media and asset data from the Receiver. 
By sending the pull message to the Receiver, it will reply with current state, media and asset data.
*In version 1 this was called 'refreshcontrols' that's Deprecated and replaced with 'pull'*

```javascript
// Requesting controls update
{
  type: 'pull',
  data: {
  }
}
```

Response message from the receiver after a pull request
* volumechange
* timeShiftEnabled
* autoplay
* isLive
* startTimeLive
* programchanged
* assetchanged
* entitlementchange
* tracksupdated

**Changing subtitles**

To update which subtitle track is being displayed on the Receiver, the following messages can be sent


```javascript
// Showing a texttrack
{
  type: 'showtexttrack',
  data: {
    language: en // language code,
    kind: [optional] // leave empty if only one track of same language
  }
}

// Hiding subtitles
{
  type: 'hidetexttrack'
}
```

After changing subtitles, all connected senders (including the sender that made the request) receive a 'tracksupdated' message containing updated information about the embedded tracks.


**Changing audiotracks**

To update which audio track is being used on the Receiver, the following messages can be send


```javascript
// Enabling an audiotrack
{
  type: 'enableaudiotrack',
  data: {
    language: en // language code,
    kind: [optional] // leave empty if only one track of same language
  }
}
```

After changing audiotracks, all connected senders (including the sender that made the request) receive a 'tracksupdated' message containing updated information about the embedded tracks.


**set playheadTime**
Was named setabsolutetime (Deprecated) in version 1. 
To seek to a specific date time for the playing channel or VOD.

```javascript
{
  type: 'playheadtime',
  data: //Unix Time in ms
}
```


**playnextprogram**
Jump to the beginning of the next program


```javascript
{
  type: 'playnextprogram'
}
```

**playpreviousprogram**
Jump to the beginning of the previous program


```javascript
{
  type: 'playnextprogram'
  data: {
   end : false [optional] //If true, it will start playback 30 second from the end of the previous program    
  }
}
```

**gotolive**
Jump to the live edge

```javascript
{
  type: 'gotolive'
}
```

**texttrackstyle**
Update the subtile style

```javascript
{
  type: 'texttrackstyle',
  data: {
   "backgroundColor":"#000",
   "backgroundOpacity":"0",
   "color":"#FFF",
   "edgeStyle": ["none", "dropshadow", "raised", "depressed", "uniform"]
   "fontFamily":["proportionalSansSerif","monospaceSansSerif", "proportionalSerif", "monospaceSerif", "casual", "script", "small-caps"]
   "fontPercent": "1.00"
   "textOpacity":"1",
   "windowColor":"#000",
   "windowOpacity":"0"
  } 
}
```


**lineupsource**
Update lineup programs, assets and external streams to be played in sequence. 
Can also be  accomplished with [Playback method 2](chromecast.md#playback-method-2), See it for source description.

```javascript
{
  type: 'texttrackstyle',
  data: {
    src: 'url or assetObject', 
    type: ['video/emp', 'application/dash+xml', 'video/mp4'], 
    licenseServer: 'licUrl', [optional]
    playToken: 'Lic Authorization Bearer', [optional]
    options: {videojs playerOptions} [optional]

 }
}
```

**loadnextsource**
Plays the next source in line

```javascript
{
  type: 'loadnextsource'
}
```

