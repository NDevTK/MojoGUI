// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_player.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var media_session = media_session || {};
var gfx = gfx || {};

media.mojom.MediaPlayer = {};
media.mojom.MediaPlayer.$interfaceName = 'media.mojom.MediaPlayer';
media.mojom.MediaPlayer_RequestPlay_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestPause_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestMute_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_SetPersistentState_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestVisibility_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec = { $: {} };
media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserverClient = {};
media.mojom.MediaPlayerObserverClient.$interfaceName = 'media.mojom.MediaPlayerObserverClient';
media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver = {};
media.mojom.MediaPlayerObserver.$interfaceName = 'media.mojom.MediaPlayerObserver';
media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerHost = {};
media.mojom.MediaPlayerHost.$interfaceName = 'media.mojom.MediaPlayerHost';
media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec = { $: {} };

// Interface: MediaPlayer
mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestPlay_ParamsSpec, 'media.mojom.MediaPlayer_RequestPlay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestPause_ParamsSpec, 'media.mojom.MediaPlayer_RequestPause_Params', [
      mojo.internal.StructField('triggered_by_user', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec, 'media.mojom.MediaPlayer_RequestSeekForward_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec, 'media.mojom.MediaPlayer_RequestSeekBackward_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec, 'media.mojom.MediaPlayer_RequestSeekTo_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec, 'media.mojom.MediaPlayer_RequestEnterPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestMute_ParamsSpec, 'media.mojom.MediaPlayer_RequestMute_Params', [
      mojo.internal.StructField('mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec, 'media.mojom.MediaPlayer_SetVolumeMultiplier_Params', [
      mojo.internal.StructField('multiplier', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_SetPersistentState_ParamsSpec, 'media.mojom.MediaPlayer_SetPersistentState_Params', [
      mojo.internal.StructField('persistent', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec, 'media.mojom.MediaPlayer_SetPowerExperimentState_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec, 'media.mojom.MediaPlayer_SetAudioSinkId_Params', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec, 'media.mojom.MediaPlayer_SuspendForFrameClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec, 'media.mojom.MediaPlayer_RequestMediaRemoting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestVisibility_ParamsSpec, 'media.mojom.MediaPlayer_RequestVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec, 'media.mojom.MediaPlayer_RequestVisibility_ResponseParams', [
      mojo.internal.StructField('has_sufficiently_visible_video', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec, 'media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_Params', [
      mojo.internal.StructField('auto_picture_in_picture_info', 0, 0, media.mojom.AutoPipInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaPlayerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaPlayerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaPlayerPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaPlayerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestPlay() {
    return this.$.requestPlay();
  }
  requestPause(triggered_by_user) {
    return this.$.requestPause(triggered_by_user);
  }
  requestSeekForward(seek_time) {
    return this.$.requestSeekForward(seek_time);
  }
  requestSeekBackward(seek_time) {
    return this.$.requestSeekBackward(seek_time);
  }
  requestSeekTo(seek_time) {
    return this.$.requestSeekTo(seek_time);
  }
  requestEnterPictureInPicture() {
    return this.$.requestEnterPictureInPicture();
  }
  requestMute(mute) {
    return this.$.requestMute(mute);
  }
  setVolumeMultiplier(multiplier) {
    return this.$.setVolumeMultiplier(multiplier);
  }
  setPersistentState(persistent) {
    return this.$.setPersistentState(persistent);
  }
  setPowerExperimentState(enabled) {
    return this.$.setPowerExperimentState(enabled);
  }
  setAudioSinkId(sink_id) {
    return this.$.setAudioSinkId(sink_id);
  }
  suspendForFrameClosed() {
    return this.$.suspendForFrameClosed();
  }
  requestMediaRemoting() {
    return this.$.requestMediaRemoting();
  }
  requestVisibility() {
    return this.$.requestVisibility();
  }
  recordAutoPictureInPictureInfo(auto_picture_in_picture_info) {
    return this.$.recordAutoPictureInPictureInfo(auto_picture_in_picture_info);
  }
};

media.mojom.MediaPlayerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPlayer', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestPlay() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaPlayer_RequestPlay_ParamsSpec,
      null,
      [],
      false);
  }

  requestPause(triggered_by_user) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.MediaPlayer_RequestPause_ParamsSpec,
      null,
      [triggered_by_user],
      false);
  }

  requestSeekForward(seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  requestSeekBackward(seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  requestSeekTo(seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  requestEnterPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  requestMute(mute) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.MediaPlayer_RequestMute_ParamsSpec,
      null,
      [mute],
      false);
  }

  setVolumeMultiplier(multiplier) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec,
      null,
      [multiplier],
      false);
  }

  setPersistentState(persistent) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      media.mojom.MediaPlayer_SetPersistentState_ParamsSpec,
      null,
      [persistent],
      false);
  }

  setPowerExperimentState(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setAudioSinkId(sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec,
      null,
      [sink_id],
      false);
  }

  suspendForFrameClosed() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec,
      null,
      [],
      false);
  }

  requestMediaRemoting() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec,
      null,
      [],
      false);
  }

  requestVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      media.mojom.MediaPlayer_RequestVisibility_ParamsSpec,
      media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec,
      [],
      false);
  }

  recordAutoPictureInPictureInfo(auto_picture_in_picture_info) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec,
      null,
      [auto_picture_in_picture_info],
      false);
  }

};

media.mojom.MediaPlayer.getRemote = function() {
  let remote = new media.mojom.MediaPlayerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayer',
    'context');
  return remote.$;
};

media.mojom.MediaPlayerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPlayer', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestPlay_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestPause_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestMute_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_SetPersistentState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestPlay_ParamsSpec.$.structSpec);
          const result = this.impl.requestPlay();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestPause_ParamsSpec.$.structSpec);
          const result = this.impl.requestPause(params.triggered_by_user);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec.$.structSpec);
          const result = this.impl.requestSeekForward(params.seek_time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec.$.structSpec);
          const result = this.impl.requestSeekBackward(params.seek_time);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec.$.structSpec);
          const result = this.impl.requestSeekTo(params.seek_time);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec.$.structSpec);
          const result = this.impl.requestEnterPictureInPicture();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestMute_ParamsSpec.$.structSpec);
          const result = this.impl.requestMute(params.mute);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec.$.structSpec);
          const result = this.impl.setVolumeMultiplier(params.multiplier);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_SetPersistentState_ParamsSpec.$.structSpec);
          const result = this.impl.setPersistentState(params.persistent);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec.$.structSpec);
          const result = this.impl.setPowerExperimentState(params.enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec.$.structSpec);
          const result = this.impl.setAudioSinkId(params.sink_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec.$.structSpec);
          const result = this.impl.suspendForFrameClosed();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec.$.structSpec);
          const result = this.impl.requestMediaRemoting();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.requestVisibility();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec.$.structSpec);
          const result = this.impl.recordAutoPictureInPictureInfo(params.auto_picture_in_picture_info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaPlayerReceiver = media.mojom.MediaPlayerReceiver;

media.mojom.MediaPlayerPtr = media.mojom.MediaPlayerRemote;
media.mojom.MediaPlayerRequest = media.mojom.MediaPlayerPendingReceiver;


// Interface: MediaPlayerObserverClient
mojo.internal.Struct(
    media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec, 'media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec, 'media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParams', [
      mojo.internal.StructField('has_played_before', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaPlayerObserverClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaPlayerObserverClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayerObserverClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaPlayerObserverClientPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaPlayerObserverClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getHasPlayedBefore() {
    return this.$.getHasPlayedBefore();
  }
};

media.mojom.MediaPlayerObserverClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPlayerObserverClient', [
      { explicit: null },
    ]);
  }

  getHasPlayedBefore() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec,
      media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.MediaPlayerObserverClient.getRemote = function() {
  let remote = new media.mojom.MediaPlayerObserverClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayerObserverClient',
    'context');
  return remote.$;
};

media.mojom.MediaPlayerObserverClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPlayerObserverClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec.$.structSpec);
          const result = this.impl.getHasPlayedBefore();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaPlayerObserverClientReceiver = media.mojom.MediaPlayerObserverClientReceiver;

media.mojom.MediaPlayerObserverClientPtr = media.mojom.MediaPlayerObserverClientRemote;
media.mojom.MediaPlayerObserverClientRequest = media.mojom.MediaPlayerObserverClientPendingReceiver;


// Interface: MediaPlayerObserver
mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaPlaying_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaPaused_Params', [
      mojo.internal.StructField('stream_ended', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMutedStatusChanged_Params', [
      mojo.internal.StructField('muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_Params', [
      mojo.internal.StructField('content_type', 0, 0, media.mojom.MediaContentTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_audio', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_video', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_Params', [
      mojo.internal.StructField('media_position', 0, 0, media_session.mojom.MediaPositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.FullscreenVideoStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaSizeChanged_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_Params', [
      mojo.internal.StructField('available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_Params', [
      mojo.internal.StructField('hashed_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_Params', [
      mojo.internal.StructField('uses_audio_service', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_Params', [
      mojo.internal.StructField('remote_playback_metadata', 0, 0, media_session.mojom.RemotePlaybackMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_Params', [
      mojo.internal.StructField('meets_visibility_threshold', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaPlayerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaPlayerObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaPlayerObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaPlayerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMediaPlaying() {
    return this.$.onMediaPlaying();
  }
  onMediaPaused(stream_ended) {
    return this.$.onMediaPaused(stream_ended);
  }
  onMutedStatusChanged(muted) {
    return this.$.onMutedStatusChanged(muted);
  }
  onMediaMetadataChanged(has_audio, has_video, content_type) {
    return this.$.onMediaMetadataChanged(has_audio, has_video, content_type);
  }
  onMediaPositionStateChanged(media_position) {
    return this.$.onMediaPositionStateChanged(media_position);
  }
  onMediaEffectivelyFullscreenChanged(status) {
    return this.$.onMediaEffectivelyFullscreenChanged(status);
  }
  onMediaSizeChanged(size) {
    return this.$.onMediaSizeChanged(size);
  }
  onPictureInPictureAvailabilityChanged(available) {
    return this.$.onPictureInPictureAvailabilityChanged(available);
  }
  onAudioOutputSinkChanged(hashed_device_id) {
    return this.$.onAudioOutputSinkChanged(hashed_device_id);
  }
  onUseAudioServiceChanged(uses_audio_service) {
    return this.$.onUseAudioServiceChanged(uses_audio_service);
  }
  onAudioOutputSinkChangingDisabled() {
    return this.$.onAudioOutputSinkChangingDisabled();
  }
  onRemotePlaybackMetadataChange(remote_playback_metadata) {
    return this.$.onRemotePlaybackMetadataChange(remote_playback_metadata);
  }
  onVideoVisibilityChanged(meets_visibility_threshold) {
    return this.$.onVideoVisibilityChanged(meets_visibility_threshold);
  }
};

media.mojom.MediaPlayerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPlayerObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onMediaPlaying() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec,
      null,
      [],
      false);
  }

  onMediaPaused(stream_ended) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec,
      null,
      [stream_ended],
      false);
  }

  onMutedStatusChanged(muted) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec,
      null,
      [muted],
      false);
  }

  onMediaMetadataChanged(has_audio, has_video, content_type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec,
      null,
      [has_audio, has_video, content_type],
      false);
  }

  onMediaPositionStateChanged(media_position) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec,
      null,
      [media_position],
      false);
  }

  onMediaEffectivelyFullscreenChanged(status) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec,
      null,
      [status],
      false);
  }

  onMediaSizeChanged(size) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec,
      null,
      [size],
      false);
  }

  onPictureInPictureAvailabilityChanged(available) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec,
      null,
      [available],
      false);
  }

  onAudioOutputSinkChanged(hashed_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec,
      null,
      [hashed_device_id],
      false);
  }

  onUseAudioServiceChanged(uses_audio_service) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec,
      null,
      [uses_audio_service],
      false);
  }

  onAudioOutputSinkChangingDisabled() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec,
      null,
      [],
      false);
  }

  onRemotePlaybackMetadataChange(remote_playback_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec,
      null,
      [remote_playback_metadata],
      false);
  }

  onVideoVisibilityChanged(meets_visibility_threshold) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec,
      null,
      [meets_visibility_threshold],
      false);
  }

};

media.mojom.MediaPlayerObserver.getRemote = function() {
  let remote = new media.mojom.MediaPlayerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayerObserver',
    'context');
  return remote.$;
};

media.mojom.MediaPlayerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPlayerObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaPlaying();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaPaused(params.stream_ended);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onMutedStatusChanged(params.muted);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaMetadataChanged(params.has_audio, params.has_video, params.content_type);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaPositionStateChanged(params.media_position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaEffectivelyFullscreenChanged(params.status);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaSizeChanged(params.size);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onPictureInPictureAvailabilityChanged(params.available);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onAudioOutputSinkChanged(params.hashed_device_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onUseAudioServiceChanged(params.uses_audio_service);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec.$.structSpec);
          const result = this.impl.onAudioOutputSinkChangingDisabled();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec.$.structSpec);
          const result = this.impl.onRemotePlaybackMetadataChange(params.remote_playback_metadata);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onVideoVisibilityChanged(params.meets_visibility_threshold);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaPlayerObserverReceiver = media.mojom.MediaPlayerObserverReceiver;

media.mojom.MediaPlayerObserverPtr = media.mojom.MediaPlayerObserverRemote;
media.mojom.MediaPlayerObserverRequest = media.mojom.MediaPlayerObserverPendingReceiver;


// Interface: MediaPlayerHost
mojo.internal.Struct(
    media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec, 'media.mojom.MediaPlayerHost_OnMediaPlayerAdded_Params', [
      mojo.internal.StructField('player_remote', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('player_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

media.mojom.MediaPlayerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaPlayerHostRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaPlayerHostPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaPlayerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMediaPlayerAdded(player_remote, observer, player_id) {
    return this.$.onMediaPlayerAdded(player_remote, observer, player_id);
  }
};

media.mojom.MediaPlayerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaPlayerHost', [
      { explicit: null },
    ]);
  }

  onMediaPlayerAdded(player_remote, observer, player_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec,
      null,
      [player_remote, observer, player_id],
      false);
  }

};

media.mojom.MediaPlayerHost.getRemote = function() {
  let remote = new media.mojom.MediaPlayerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayerHost',
    'context');
  return remote.$;
};

media.mojom.MediaPlayerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MediaPlayerHost', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onMediaPlayerAdded(params.player_remote, params.observer, params.player_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaPlayerHostReceiver = media.mojom.MediaPlayerHostReceiver;

media.mojom.MediaPlayerHostPtr = media.mojom.MediaPlayerHostRemote;
media.mojom.MediaPlayerHostRequest = media.mojom.MediaPlayerHostPendingReceiver;

