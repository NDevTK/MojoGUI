// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_player.mojom
// Module: media.mojom

'use strict';

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
};

media.mojom.MediaPlayerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestPlay() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaPlayer_RequestPlay_ParamsSpec,
      null,
      [],
      false);
  }

  requestPause(triggered_by_user) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaPlayer_RequestPause_ParamsSpec,
      null,
      [triggered_by_user],
      false);
  }

  requestSeekForward(seek_time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  requestSeekBackward(seek_time) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  requestSeekTo(seek_time) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  requestEnterPictureInPicture() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  requestMute(mute) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.MediaPlayer_RequestMute_ParamsSpec,
      null,
      [mute],
      false);
  }

  setVolumeMultiplier(multiplier) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec,
      null,
      [multiplier],
      false);
  }

  setPersistentState(persistent) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.MediaPlayer_SetPersistentState_ParamsSpec,
      null,
      [persistent],
      false);
  }

  setPowerExperimentState(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setAudioSinkId(sink_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec,
      null,
      [sink_id],
      false);
  }

  suspendForFrameClosed() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec,
      null,
      [],
      false);
  }

  requestMediaRemoting() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec,
      null,
      [],
      false);
  }

  requestVisibility() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      media.mojom.MediaPlayer_RequestVisibility_ParamsSpec,
      media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec,
      [],
      false);
  }

  recordAutoPictureInPictureInfo(auto_picture_in_picture_info) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RequestPlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestPlay_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPlay (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestPause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestPause_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPause (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestSeekForward
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSeekForward (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestSeekBackward
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSeekBackward (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RequestSeekTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSeekTo (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RequestEnterPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestEnterPictureInPicture (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RequestMute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestMute_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestMute (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetVolumeMultiplier
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolumeMultiplier (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetPersistentState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_SetPersistentState_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPersistentState (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetPowerExperimentState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPowerExperimentState (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetAudioSinkId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAudioSinkId (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SuspendForFrameClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuspendForFrameClosed (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RequestMediaRemoting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestMediaRemoting (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RequestVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RequestVisibility_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestVisibility (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RecordAutoPictureInPictureInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordAutoPictureInPictureInfo (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestPlay_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestPlay');
          const result = this.impl.requestPlay();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestPause_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestPause');
          const result = this.impl.requestPause(params.triggered_by_user);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestSeekForward');
          const result = this.impl.requestSeekForward(params.seek_time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestSeekBackward');
          const result = this.impl.requestSeekBackward(params.seek_time);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestSeekTo');
          const result = this.impl.requestSeekTo(params.seek_time);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestEnterPictureInPicture');
          const result = this.impl.requestEnterPictureInPicture();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestMute_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestMute');
          const result = this.impl.requestMute(params.mute);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setVolumeMultiplier');
          const result = this.impl.setVolumeMultiplier(params.multiplier);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_SetPersistentState_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setPersistentState');
          const result = this.impl.setPersistentState(params.persistent);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setPowerExperimentState');
          const result = this.impl.setPowerExperimentState(params.enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setAudioSinkId');
          const result = this.impl.setAudioSinkId(params.sink_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.suspendForFrameClosed');
          const result = this.impl.suspendForFrameClosed();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestMediaRemoting');
          const result = this.impl.requestMediaRemoting();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RequestVisibility_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.requestVisibility');
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
          const params = decoder.decodeStructInline(media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.recordAutoPictureInPictureInfo');
          const result = this.impl.recordAutoPictureInPictureInfo(params.auto_picture_in_picture_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

media.mojom.MediaPlayerObserverClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getHasPlayedBefore() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetHasPlayedBefore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHasPlayedBefore (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getHasPlayedBefore');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

media.mojom.MediaPlayerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMediaPlaying() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec,
      null,
      [],
      false);
  }

  onMediaPaused(stream_ended) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec,
      null,
      [stream_ended],
      false);
  }

  onMutedStatusChanged(muted) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec,
      null,
      [muted],
      false);
  }

  onMediaMetadataChanged(has_audio, has_video, content_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec,
      null,
      [has_audio, has_video, content_type],
      false);
  }

  onMediaPositionStateChanged(media_position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec,
      null,
      [media_position],
      false);
  }

  onMediaEffectivelyFullscreenChanged(status) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec,
      null,
      [status],
      false);
  }

  onMediaSizeChanged(size) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec,
      null,
      [size],
      false);
  }

  onPictureInPictureAvailabilityChanged(available) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec,
      null,
      [available],
      false);
  }

  onAudioOutputSinkChanged(hashed_device_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec,
      null,
      [hashed_device_id],
      false);
  }

  onUseAudioServiceChanged(uses_audio_service) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec,
      null,
      [uses_audio_service],
      false);
  }

  onAudioOutputSinkChangingDisabled() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec,
      null,
      [],
      false);
  }

  onRemotePlaybackMetadataChange(remote_playback_metadata) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec,
      null,
      [remote_playback_metadata],
      false);
  }

  onVideoVisibilityChanged(meets_visibility_threshold) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnMediaPlaying
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaPlaying (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnMediaPaused
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaPaused (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnMutedStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMutedStatusChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnMediaMetadataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaMetadataChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnMediaPositionStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaPositionStateChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnMediaEffectivelyFullscreenChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaEffectivelyFullscreenChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnMediaSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaSizeChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnPictureInPictureAvailabilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPictureInPictureAvailabilityChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnAudioOutputSinkChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAudioOutputSinkChanged (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnUseAudioServiceChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUseAudioServiceChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnAudioOutputSinkChangingDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAudioOutputSinkChangingDisabled (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnRemotePlaybackMetadataChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRemotePlaybackMetadataChange (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnVideoVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVideoVisibilityChanged (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onMediaPlaying');
          const result = this.impl.onMediaPlaying();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onMediaPaused');
          const result = this.impl.onMediaPaused(params.stream_ended);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onMutedStatusChanged');
          const result = this.impl.onMutedStatusChanged(params.muted);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onMediaMetadataChanged');
          const result = this.impl.onMediaMetadataChanged(params.has_audio, params.has_video, params.content_type);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onMediaPositionStateChanged');
          const result = this.impl.onMediaPositionStateChanged(params.media_position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onMediaEffectivelyFullscreenChanged');
          const result = this.impl.onMediaEffectivelyFullscreenChanged(params.status);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onMediaSizeChanged');
          const result = this.impl.onMediaSizeChanged(params.size);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onPictureInPictureAvailabilityChanged');
          const result = this.impl.onPictureInPictureAvailabilityChanged(params.available);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onAudioOutputSinkChanged');
          const result = this.impl.onAudioOutputSinkChanged(params.hashed_device_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onUseAudioServiceChanged');
          const result = this.impl.onUseAudioServiceChanged(params.uses_audio_service);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onAudioOutputSinkChangingDisabled');
          const result = this.impl.onAudioOutputSinkChangingDisabled();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onRemotePlaybackMetadataChange');
          const result = this.impl.onRemotePlaybackMetadataChange(params.remote_playback_metadata);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onVideoVisibilityChanged');
          const result = this.impl.onVideoVisibilityChanged(params.meets_visibility_threshold);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

media.mojom.MediaPlayerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMediaPlayerAdded(player_remote, observer, player_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnMediaPlayerAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMediaPlayerAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onMediaPlayerAdded');
          const result = this.impl.onMediaPlayerAdded(params.player_remote, params.observer, params.player_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.MediaPlayerHostReceiver = media.mojom.MediaPlayerHostReceiver;

media.mojom.MediaPlayerHostPtr = media.mojom.MediaPlayerHostRemote;
media.mojom.MediaPlayerHostRequest = media.mojom.MediaPlayerHostPendingReceiver;

