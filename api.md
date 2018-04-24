## Classes

<dl>
<dt><a href="#EmpMediaPlayer">EmpMediaPlayer</a></dt>
<dd></dd>
<dt><a href="#EmpReceiverEvents">EmpReceiverEvents</a></dt>
<dd></dd>
<dt><a href="#empReceiver">empReceiver</a></dt>
<dd></dd>
</dl>

## Events

<dl>
<dt><a href="#event_METADATA_UPDATED">"METADATA_UPDATED"</a></dt>
<dd><p>Fired when asset metadata has been updated</p>
</dd>
<dt><a href="#event_STATE_CHANGED">"STATE_CHANGED"</a></dt>
<dd><p>Fired when receiver state has changed</p>
</dd>
<dt><a href="#event_RESOLUTION_CHANGED">"RESOLUTION_CHANGED"</a></dt>
<dd><p>Fired when receiver &#39;resolution has changed - resolution parameter (if null, app should hide UI display element)</p>
</dd>
</dl>

<a name="EmpMediaPlayer"></a>

## EmpMediaPlayer
**Kind**: global class  
<a name="new_EmpMediaPlayer_new"></a>

### new EmpMediaPlayer(receiver)
Implement cast.receiver.media.Player interface


| Param | Type |
| --- | --- |
| receiver | [<code>empReceiver</code>](#empReceiver) |

<a name="EmpReceiverEvents"></a>

## EmpReceiverEvents
**Kind**: global class  
<a name="new_EmpReceiverEvents_new"></a>

### new EmpReceiverEvents()
EmpReceiverEvents - Holds receiver events
METADATA_UPDATED, STATE_CHANGED, RESOLUTION_CHANGED

<a name="empReceiver"></a>

## empReceiver
**Kind**: global class  

* [empReceiver](#empReceiver)
    * [new empReceiver(element, [options], [ready])](#new_empReceiver_new)
    * [.state](#empReceiver+state) ⇒ <code>string</code>
    * [.isChromecast](#empReceiver+isChromecast) ⇒ <code>bool</code>
    * [.version](#empReceiver+version) ⇒ <code>string</code>
    * [.player](#empReceiver+player) ⇒ <code>EmpPlayer</code>
    * [.onMessage(event)](#empReceiver+onMessage)
    * [.onEmpError(error)](#empReceiver+onEmpError)
    * [.getMediaInformation()](#empReceiver+getMediaInformation) ⇒ <code>cast.receiver.media.MediaInformation</code>
    * [.getMediaManager(safety)](#empReceiver+getMediaManager) ⇒ <code>cast.receiver.MediaManager</code>
    * [.getCastReceiverManager(safety)](#empReceiver+getCastReceiverManager) ⇒ <code>cast.receiver.CastReceiverManager</code>
    * [.getVideoElement(safety)](#empReceiver+getVideoElement) ⇒ <code>Element</code>
    * [.sendMessage(message, opt_senderId)](#empReceiver+sendMessage)
    * [.sendStatus(opt_senderId, opt_requestId)](#empReceiver+sendStatus)

<a name="new_empReceiver_new"></a>

### new empReceiver(element, [options], [ready])
empReceiver - Interacts with chromecast and senders


| Param | Type | Description |
| --- | --- | --- |
| element | <code>String</code> | HTML video element id |
| [options] | <code>Object</code> | receiver options such as: playerOptions, statusText, controls, debug, messageUrn |
| [ready] | <code>Callback</code> | callback to be called when the receiver is reader |

<a name="empReceiver+state"></a>

### empReceiver.state ⇒ <code>string</code>
Current receiver state. ['launching', 'loading','buffering', 'seeking', 'playing', 'paused', 'done', 'idle']

**Kind**: instance property of [<code>empReceiver</code>](#empReceiver)  
**Returns**: <code>string</code> - empReceiver.ReceiverStates ['launching', 'loading','buffering', 'seeking', 'playing', 'paused', 'done', 'idle']  
<a name="empReceiver+isChromecast"></a>

### empReceiver.isChromecast ⇒ <code>bool</code>
Check if running on Chromecast device.

**Kind**: instance property of [<code>empReceiver</code>](#empReceiver)  
**Returns**: <code>bool</code> - True if running on Chromecast device.  
<a name="empReceiver+version"></a>

### empReceiver.version ⇒ <code>string</code>
EMPReceiver version

**Kind**: instance property of [<code>empReceiver</code>](#empReceiver)  
**Returns**: <code>string</code> - The EMPReceiver version  
<a name="empReceiver+player"></a>

### empReceiver.player ⇒ <code>EmpPlayer</code>
Returns the underlying EmpPlayer version 2.  
EmpPlayer API: https://www.npmjs.com/package/empplayer2

**Kind**: instance property of [<code>empReceiver</code>](#empReceiver)  
**Export**:   
<a name="empReceiver+onMessage"></a>

### empReceiver.onMessage(event)
Handle custom message from senders

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| event | <code>cast.receiver.CastMessageBus.Event</code> | { data:{ type:'', data:{} } } |

<a name="empReceiver+onEmpError"></a>

### empReceiver.onEmpError(error)
Error handler for empPlayer Errors.
 Broadcast error message to all connected senders.

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>string</code> \| <code>object</code> | error message to broadcast |

<a name="empReceiver+getMediaInformation"></a>

### empReceiver.getMediaInformation() ⇒ <code>cast.receiver.media.MediaInformation</code>
Provides information about the media currently loaded.

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Returns**: <code>cast.receiver.media.MediaInformation</code> - [Google Cast MediaInformation](https://developers.google.com/cast/docs/reference/receiver/cast.receiver.media.MediaInformation).  
<a name="empReceiver+getMediaManager"></a>

### empReceiver.getMediaManager(safety) ⇒ <code>cast.receiver.MediaManager</code>
Get current media manager instance.  
The MediaManager is used to send/receive media messages/events.  
It will print a warning by default about the danger of using the MediaManager directly
but any argument that is passed in will silence the warning.

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Returns**: <code>cast.receiver.MediaManager</code> - [Google Cast MediaManager](https://developers.google.com/cast/docs/reference/receiver/cast.receiver.MediaManager).  

| Param | Type | Description |
| --- | --- | --- |
| safety | <code>any</code> | Anything passed in to silence the warning |

<a name="empReceiver+getCastReceiverManager"></a>

### empReceiver.getCastReceiverManager(safety) ⇒ <code>cast.receiver.CastReceiverManager</code>
Get current cast receiver manager instance.  
The receiver manager allows communication with the platform and is used to send/receive system messages/events.

It will print a warning by default about the danger of using the CastReceiverManager directly
but any argument that is passed in will silence the warning.

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Returns**: <code>cast.receiver.CastReceiverManager</code> - [Google Cast ReceiverManager](https://developers.google.com/cast/docs/reference/receiver/cast.receiver.CastReceiverManager).  

| Param | Type | Description |
| --- | --- | --- |
| safety | <code>any</code> | Anything passed in to silence the warning |

<a name="empReceiver+getVideoElement"></a>

### empReceiver.getVideoElement(safety) ⇒ <code>Element</code>
Get current Video Element

It will print a warning by default about the danger of using the Video Element directly
but any argument that is passed in will silence the warning.

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Returns**: <code>Element</code> - The Video Element  

| Param | Type | Description |
| --- | --- | --- |
| safety | <code>any</code> | Anything passed in to silence the warning |

<a name="empReceiver+sendMessage"></a>

### empReceiver.sendMessage(message, opt_senderId)
Sends a custom message to a specific sender or
broadcast custom message to all connected senders.
It can be dangerous to send message directly from ReceiverApp, but if you know what you're doing it's public.

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| message | <code>object</code> | object with message details |
| opt_senderId | <code>string</code> | optional set if you want to send message to just one specific sender |

<a name="empReceiver+sendStatus"></a>

### empReceiver.sendStatus(opt_senderId, opt_requestId)
Sends media status to a specific sender or
broadcast media status to all connected senders.

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| opt_senderId | <code>string</code> | optional sender id |
| opt_requestId | <code>number</code> | optional request id |

<a name="event_METADATA_UPDATED"></a>

## "METADATA_UPDATED"
Fired when asset metadata has been updated

**Kind**: event emitted  
<a name="event_STATE_CHANGED"></a>

## "STATE_CHANGED"
Fired when receiver state has changed

**Kind**: event emitted  
<a name="event_RESOLUTION_CHANGED"></a>

## "RESOLUTION_CHANGED"
Fired when receiver 'resolution has changed - resolution parameter (if null, app should hide UI display element)

**Kind**: event emitted  
