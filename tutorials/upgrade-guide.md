# Version 2 Upgrade Guide

**Changes for version 2.2**
* MediaInformation.ContentId  should be set to assetId or if you cast a external stream it should be set to stream url.
* MediaInformation.contentType should be set to **"video/emp"** or the content type for the external stream "application/dash+xml".
* MediaInformation.empPayload and MediaInformation.customData.assetId don't need to be set by the sender, they are set by the receiver.
* [Support for Playback PlayList (Media Que API).](https://github.com/EricssonBroadcastServices/chromecast-demo-receiver/blob/master/tutorials/chromecast.md#Playback-PlayList)

**Breaking changes for version 2**

When casting a channel or a program, the timeline is now relative to the beginning of the program and not the beginning of the stream. This change makes the Chromecast built-in sender controls and Cloud senders to work out-of-the-box, making it easier and faster to develop a sender.
<br />
* CurrentTime, Duration and Seek values are based on seconds and are now relative to the beginning of the program and not the beginning of the stream. The behaviour matches what occurs when playing locally.
* ProgramChanged message broadcasted by the Receiver is now an object containing the program’s full metadata. Before, it was just a string containing the programId. Senders should handle this api change.
* "refreshcontrols" message is deprecated. Please use "pull" instead.
* "setabsolutetime" message is deprecated. Please use "playheadtime" instead.
* DurationChanged has been removed, duration is now a property on the Media object that is sent on media status update. 
  This is necessary to make the senders built-in controls to work.
* Playback properties like default playback behaviour, startTime, etc.. were adapted so that they match the mobile client’s playback properties structure. To start casting use playbackProperties, described in [Playback method 1](chromecast.md#playback-method-1) below.  



* **[Chromcast sender tutorials](https://github.com/EricssonBroadcastServices/chromecast-demo-receiver/blob/master/tutorials/chromecast.md)**

