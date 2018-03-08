## Classes

<dl>
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

<a name="EmpReceiverEvents"></a>

## EmpReceiverEvents
**Kind**: global class  
<a name="new_EmpReceiverEvents_new"></a>

### new EmpReceiverEvents()
EmpReceiverEvents - Holds all available receiver events

<a name="empReceiver"></a>

## empReceiver
**Kind**: global class  

* [empReceiver](#empReceiver)
    * [new empReceiver(element, [options], [ready])](#new_empReceiver_new)
    * [.state](#empReceiver+state) ⇒ <code>empReceiver.ReceiverStates</code>
    * [.version](#empReceiver+version) ⇒ <code>Number</code>
    * [.player](#empReceiver+player) ⇒ <code>EmpPlayer</code>
    * [.mockMediaManagerEvent_()](#empReceiver+mockMediaManagerEvent_)
    * [.onMessage()](#empReceiver+onMessage)
    * [.hideMediaResolution()](#empReceiver+hideMediaResolution)
    * [.displayMediaResolution()](#empReceiver+displayMediaResolution)
    * [.loadDebug_()](#empReceiver+loadDebug_)
    * [.sendTracks()](#empReceiver+sendTracks)
    * [.refreshControls()](#empReceiver+refreshControls)
    * [.getMediaInformation()](#empReceiver+getMediaInformation) ⇒ <code>MediaInformation</code>
    * [.getAnalyticsDeviceInfo_()](#empReceiver+getAnalyticsDeviceInfo_)
    * [.createPlayer()](#empReceiver+createPlayer)
    * [.sendMessage_(json, id)](#empReceiver+sendMessage_)
    * [.sendStatus_(id, id)](#empReceiver+sendStatus_)

<a name="new_empReceiver_new"></a>

### new empReceiver(element, [options], [ready])
empReceiver - Object that interacts with chromecast


| Param | Type | Description |
| --- | --- | --- |
| element | <code>String</code> | ID or DOM element of the receiver html element |
| [options] | <code>Object</code> | receiver options such as: controls (children), debug, messageUrn |
| [ready] | <code>Callback</code> | callback to be called when the receiver is reader |

<a name="empReceiver+state"></a>

### empReceiver.state ⇒ <code>empReceiver.ReceiverStates</code>
**Kind**: instance property of [<code>empReceiver</code>](#empReceiver)  
**Returns**: <code>empReceiver.ReceiverStates</code> - current receiver state.  
<a name="empReceiver+version"></a>

### empReceiver.version ⇒ <code>Number</code>
Player version

**Kind**: instance property of [<code>empReceiver</code>](#empReceiver)  
**Returns**: <code>Number</code> - The player version  
<a name="empReceiver+player"></a>

### empReceiver.player ⇒ <code>EmpPlayer</code>
Returns the underlying EmpPlayer object
EmpPlayer API: https://www.npmjs.com/package/empplayer

**Kind**: instance property of [<code>empReceiver</code>](#empReceiver)  
**Export**:   
<a name="empReceiver+mockMediaManagerEvent_"></a>

### empReceiver.mockMediaManagerEvent_()
debugging the receiver UI in Chrome.

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
<a name="empReceiver+onMessage"></a>

### empReceiver.onMessage()
cast.receiver.CastMessageBus.Event
public for debugging the receiver UI in Chrome.

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   
<a name="empReceiver+hideMediaResolution"></a>

### empReceiver.hideMediaResolution()
emits RESOLUTION_CHANGED event

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   
<a name="empReceiver+displayMediaResolution"></a>

### empReceiver.displayMediaResolution()
gets current displayed resolution and emits RESOLUTION_CHANGED event with resolution as argument

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   
<a name="empReceiver+loadDebug_"></a>

### empReceiver.loadDebug_()
debugging the receiver UI in Chrome.

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
<a name="empReceiver+sendTracks"></a>

### empReceiver.sendTracks()
broadcasts tracks to the senders

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   
<a name="empReceiver+refreshControls"></a>

### empReceiver.refreshControls()
updates the controls on in the senders (volume level, timeshift enabled, autplay, is live, duration)

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   
<a name="empReceiver+getMediaInformation"></a>

### empReceiver.getMediaInformation() ⇒ <code>MediaInformation</code>
**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Returns**: <code>MediaInformation</code> - current asset metadata.  
<a name="empReceiver+getAnalyticsDeviceInfo_"></a>

### empReceiver.getAnalyticsDeviceInfo_()
geta analytics deviceInfo, which includes emp-chromecast-receiver version

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   
<a name="empReceiver+createPlayer"></a>

### empReceiver.createPlayer()
Handle initialization of a player when a new video is cast

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
<a name="empReceiver+sendMessage_"></a>

### empReceiver.sendMessage_(json, id)
sends message to the senders

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| json | <code>message</code> | object with message details |
| id | <code>opt_senderId</code> | optional set if you want to send message to just one specific sender |

<a name="empReceiver+sendStatus_"></a>

### empReceiver.sendStatus_(id, id)
sends message to the senders

**Kind**: instance method of [<code>empReceiver</code>](#empReceiver)  
**Export**:   

| Param | Type | Description |
| --- | --- | --- |
| id | <code>opt_senderId</code> | optional sender id |
| id | <code>opt_requestId</code> | optional request id |

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
