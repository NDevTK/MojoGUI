// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_session.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

media_session.mojom.MediaPlaybackStateSpec = { $: mojo.internal.Enum() };
media_session.mojom.MediaSessionActionSpec = { $: mojo.internal.Enum() };
media_session.mojom.MediaSessionImageTypeSpec = { $: mojo.internal.Enum() };
media_session.mojom.MediaPictureInPictureStateSpec = { $: mojo.internal.Enum() };
media_session.mojom.MediaAudioVideoStateSpec = { $: mojo.internal.Enum() };
media_session.mojom.MediaImageBitmapColorTypeSpec = { $: mojo.internal.Enum() };
media_session.mojom.MicrophoneStateSpec = { $: mojo.internal.Enum() };
media_session.mojom.CameraStateSpec = { $: mojo.internal.Enum() };
media_session.mojom.SessionStateSpec = { $: mojo.internal.Enum() };
media_session.mojom.SuspendTypeSpec = { $: mojo.internal.Enum() };
media_session.mojom.MediaImageSpec = { $: {} };
media_session.mojom.ChapterInformationSpec = { $: {} };
media_session.mojom.MediaMetadataSpec = { $: {} };
media_session.mojom.MediaImageBitmapSpec = { $: {} };
media_session.mojom.MediaPositionSpec = { $: {} };
media_session.mojom.RemotePlaybackMetadataSpec = { $: {} };
media_session.mojom.MediaSessionInfoSpec = { $: {} };
media_session.mojom.MediaSessionDebugInfoSpec = { $: {} };
media_session.mojom.MediaSessionObserver = {};
media_session.mojom.MediaSessionObserver.$interfaceName = 'media_session.mojom.MediaSessionObserver';
media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaSession = {};
media_session.mojom.MediaSession.$interfaceName = 'media_session.mojom.MediaSession';
media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParamsSpec = { $: {} };
media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_GetDebugInfo_ResponseParamsSpec = { $: {} };
media_session.mojom.MediaSession_StartDucking_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_StopDucking_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_Suspend_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_Resume_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_AddObserver_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_PreviousTrack_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_NextTrack_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_Seek_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_Stop_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_SkipAd_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParamsSpec = { $: {} };
media_session.mojom.MediaSession_SeekTo_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_ScrubTo_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_ToggleCamera_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_HangUp_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_Raise_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_SetMute_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_PreviousSlide_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_NextSlide_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_GetVisibility_ParamsSpec = { $: {} };
media_session.mojom.MediaSession_GetVisibility_ResponseParamsSpec = { $: {} };

// Enum: MediaPlaybackState
media_session.mojom.MediaPlaybackState = {
  kPaused: 0,
  kPlaying: 1,
};

// Enum: MediaSessionAction
media_session.mojom.MediaSessionAction = {
  kPlay: 0,
  kPause: 1,
  kPreviousTrack: 2,
  kNextTrack: 3,
  kSeekBackward: 4,
  kSeekForward: 5,
  kSkipAd: 6,
  kStop: 7,
  kSeekTo: 8,
  kScrubTo: 9,
  kEnterPictureInPicture: 10,
  kExitPictureInPicture: 11,
  kSwitchAudioDevice: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
};

// Enum: MediaSessionImageType
media_session.mojom.MediaSessionImageType = {
  kArtwork: 0,
  kSourceIcon: 1,
  MinVersion: 1,
};

// Enum: MediaPictureInPictureState
media_session.mojom.MediaPictureInPictureState = {
  kNotInPictureInPicture: 0,
  kInPictureInPicture: 1,
};

// Enum: MediaAudioVideoState
media_session.mojom.MediaAudioVideoState = {
  kDeprecatedUnknown: 0,
  kAudioOnly: 1,
  kAudioVideo: 2,
  MinVersion: 2,
};

// Enum: MediaImageBitmapColorType
media_session.mojom.MediaImageBitmapColorType = {
  kRGBA_8888: 0,
  kBGRA_8888: 1,
};

// Enum: MicrophoneState
media_session.mojom.MicrophoneState = {
  kUnknown: 0,
  kMuted: 1,
  kUnmuted: 2,
};

// Enum: CameraState
media_session.mojom.CameraState = {
  kUnknown: 0,
  kTurnedOn: 1,
  kTurnedOff: 2,
};

// Enum: SessionState
media_session.mojom.SessionState = {
  kActive: 0,
  kDucking: 1,
  kSuspended: 2,
  kInactive: 3,
};

// Enum: SuspendType
media_session.mojom.SuspendType = {
  kSystem: 0,
  kUI: 1,
  kContent: 2,
};

// Struct: MediaImage
mojo.internal.Struct(
    media_session.mojom.MediaImageSpec, 'media_session.mojom.MediaImage', [
      mojo.internal.StructField('src', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('sizes', 16, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ChapterInformation
mojo.internal.Struct(
    media_session.mojom.ChapterInformationSpec, 'media_session.mojom.ChapterInformation', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('startTime', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('artwork', 16, 0, mojo.internal.Array(media_session.mojom.MediaImageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MediaMetadata
mojo.internal.Struct(
    media_session.mojom.MediaMetadataSpec, 'media_session.mojom.MediaMetadata', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('artist', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('album', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_title', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('chapters', 32, 0, mojo.internal.Array(media_session.mojom.ChapterInformationSpec.$, false), null, true, 21, undefined),
    ],
    [[0, 40], [21, 48]]);

// Struct: MediaImageBitmap
mojo.internal.Struct(
    media_session.mojom.MediaImageBitmapSpec, 'media_session.mojom.MediaImageBitmap', [
      mojo.internal.StructField('pixel_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('color_type', 16, 0, media_session.mojom.MediaImageBitmapColorTypeSpec.$, null, false, 5, undefined),
    ],
    [[0, 24], [5, 32]]);

// Struct: MediaPosition
mojo.internal.Struct(
    media_session.mojom.MediaPositionSpec, 'media_session.mojom.MediaPosition', [
      mojo.internal.StructField('playback_rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('duration', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('position', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_updated_time', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end_of_media', 32, 0, mojo.internal.Bool, false, false, 13, undefined),
    ],
    [[0, 40], [13, 48]]);

// Struct: RemotePlaybackMetadata
mojo.internal.Struct(
    media_session.mojom.RemotePlaybackMetadataSpec, 'media_session.mojom.RemotePlaybackMetadata', [
      mojo.internal.StructField('video_codec', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('audio_codec', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('remote_playback_disabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unused_field', 24, 0, mojo.internal.String, null, true, 17, undefined),
      mojo.internal.StructField('remote_playback_started', 32, 0, mojo.internal.Bool, false, false, 17, undefined),
      mojo.internal.StructField('is_encrypted_media', 32, 1, mojo.internal.Bool, false, false, 18, undefined),
    ],
    [[0, 32], [17, 48], [18, 48]]);

// Struct: MediaSessionInfo
mojo.internal.Struct(
    media_session.mojom.MediaSessionInfoSpec, 'media_session.mojom.MediaSessionInfo', [
      mojo.internal.StructField('kActive', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MediaSessionDebugInfo
mojo.internal.Struct(
    media_session.mojom.MediaSessionDebugInfoSpec, 'media_session.mojom.MediaSessionDebugInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('owner', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: MediaSessionObserver
mojo.internal.Struct(
    media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec, 'media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_Params', [
      mojo.internal.StructField('info', 0, 0, media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec, 'media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_Params', [
      mojo.internal.StructField('metadata', 0, 0, media_session.mojom.MediaMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec, 'media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_Params', [
      mojo.internal.StructField('action', 0, 0, mojo.internal.Array(media_session.mojom.MediaSessionActionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec, 'media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_Params', [
      mojo.internal.StructField('images', 0, 0, mojo.internal.Map(media_session.mojom.MediaSessionImageTypeSpec.$, mojo.internal.Array(media_session.mojom.MediaImageSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec, 'media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_Params', [
      mojo.internal.StructField('position', 0, 0, media_session.mojom.MediaPositionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

media_session.mojom.MediaSessionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaSessionObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaSessionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaSessionObserverPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaSessionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaSessionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mediaSessionInfoChanged(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec,
      null,
      [info],
      false);
  }

  mediaSessionMetadataChanged(metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec,
      null,
      [metadata],
      false);
  }

  mediaSessionActionsChanged(action) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec,
      null,
      [action],
      false);
  }

  mediaSessionImagesChanged(images) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec,
      null,
      [images],
      false);
  }

  mediaSessionPositionChanged(position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec,
      null,
      [position],
      false);
  }

};

media_session.mojom.MediaSessionObserver.getRemote = function() {
  let remote = new media_session.mojom.MediaSessionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaSessionObserver',
    'context');
  return remote.$;
};

media_session.mojom.MediaSessionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: MediaSessionInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionInfoChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MediaSessionMetadataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionMetadataChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: MediaSessionActionsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionActionsChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MediaSessionImagesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionImagesChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: MediaSessionPositionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaSessionPositionChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStruct(media_session.mojom.MediaSessionObserver_MediaSessionInfoChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionInfoChanged');
          const result = this.impl.mediaSessionInfoChanged(params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSessionObserver_MediaSessionMetadataChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionMetadataChanged');
          const result = this.impl.mediaSessionMetadataChanged(params.metadata);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSessionObserver_MediaSessionActionsChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionActionsChanged');
          const result = this.impl.mediaSessionActionsChanged(params.action);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSessionObserver_MediaSessionImagesChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionImagesChanged');
          const result = this.impl.mediaSessionImagesChanged(params.images);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSessionObserver_MediaSessionPositionChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionPositionChanged');
          const result = this.impl.mediaSessionPositionChanged(params.position);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_session.mojom.MediaSessionObserverReceiver = media_session.mojom.MediaSessionObserverReceiver;

media_session.mojom.MediaSessionObserverPtr = media_session.mojom.MediaSessionObserverRemote;
media_session.mojom.MediaSessionObserverRequest = media_session.mojom.MediaSessionObserverPendingReceiver;


// Interface: MediaSession
mojo.internal.Struct(
    media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec, 'media_session.mojom.MediaSession_GetMediaSessionInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParamsSpec, 'media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, media_session.mojom.MediaSessionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec, 'media_session.mojom.MediaSession_GetDebugInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_GetDebugInfo_ResponseParamsSpec, 'media_session.mojom.MediaSession_GetDebugInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, media_session.mojom.MediaSessionDebugInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_StartDucking_ParamsSpec, 'media_session.mojom.MediaSession_StartDucking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_StopDucking_ParamsSpec, 'media_session.mojom.MediaSession_StopDucking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_Suspend_ParamsSpec, 'media_session.mojom.MediaSession_Suspend_Params', [
      mojo.internal.StructField('suspend_type', 0, 0, media_session.mojom.SuspendTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_Resume_ParamsSpec, 'media_session.mojom.MediaSession_Resume_Params', [
      mojo.internal.StructField('suspend_type', 0, 0, media_session.mojom.SuspendTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_AddObserver_ParamsSpec, 'media_session.mojom.MediaSession_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media_session.mojom.MediaSessionObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_PreviousTrack_ParamsSpec, 'media_session.mojom.MediaSession_PreviousTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_NextTrack_ParamsSpec, 'media_session.mojom.MediaSession_NextTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_Seek_ParamsSpec, 'media_session.mojom.MediaSession_Seek_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_Stop_ParamsSpec, 'media_session.mojom.MediaSession_Stop_Params', [
      mojo.internal.StructField('suspend_type', 0, 0, media_session.mojom.SuspendTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_SkipAd_ParamsSpec, 'media_session.mojom.MediaSession_SkipAd_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec, 'media_session.mojom.MediaSession_GetMediaImageBitmap_Params', [
      mojo.internal.StructField('image', 0, 0, media_session.mojom.MediaImageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('minimum_size_px', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('desired_size_px', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParamsSpec, 'media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParams', [
      mojo.internal.StructField('image', 0, 0, media_session.mojom.MediaImageBitmapSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_SeekTo_ParamsSpec, 'media_session.mojom.MediaSession_SeekTo_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_ScrubTo_ParamsSpec, 'media_session.mojom.MediaSession_ScrubTo_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec, 'media_session.mojom.MediaSession_EnterPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec, 'media_session.mojom.MediaSession_ExitPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec, 'media_session.mojom.MediaSession_SetAudioSinkId_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec, 'media_session.mojom.MediaSession_ToggleMicrophone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_ToggleCamera_ParamsSpec, 'media_session.mojom.MediaSession_ToggleCamera_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_HangUp_ParamsSpec, 'media_session.mojom.MediaSession_HangUp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_Raise_ParamsSpec, 'media_session.mojom.MediaSession_Raise_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_SetMute_ParamsSpec, 'media_session.mojom.MediaSession_SetMute_Params', [
      mojo.internal.StructField('mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec, 'media_session.mojom.MediaSession_RequestMediaRemoting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_PreviousSlide_ParamsSpec, 'media_session.mojom.MediaSession_PreviousSlide_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_NextSlide_ParamsSpec, 'media_session.mojom.MediaSession_NextSlide_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec, 'media_session.mojom.MediaSession_EnterAutoPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_GetVisibility_ParamsSpec, 'media_session.mojom.MediaSession_GetVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaSession_GetVisibility_ResponseParamsSpec, 'media_session.mojom.MediaSession_GetVisibility_ResponseParams', [
      mojo.internal.StructField('has_sufficiently_visible_video', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media_session.mojom.MediaSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaSessionRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaSessionPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMediaSessionInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec,
      media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParamsSpec,
      [],
      false);
  }

  getDebugInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec,
      media_session.mojom.MediaSession_GetDebugInfo_ResponseParamsSpec,
      [],
      false);
  }

  startDucking() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaSession_StartDucking_ParamsSpec,
      null,
      [],
      false);
  }

  stopDucking() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_session.mojom.MediaSession_StopDucking_ParamsSpec,
      null,
      [],
      false);
  }

  suspend(suspend_type) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_session.mojom.MediaSession_Suspend_ParamsSpec,
      null,
      [suspend_type],
      false);
  }

  resume(suspend_type) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_session.mojom.MediaSession_Resume_ParamsSpec,
      null,
      [suspend_type],
      false);
  }

  addObserver(observer) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_session.mojom.MediaSession_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  previousTrack() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media_session.mojom.MediaSession_PreviousTrack_ParamsSpec,
      null,
      [],
      false);
  }

  nextTrack() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media_session.mojom.MediaSession_NextTrack_ParamsSpec,
      null,
      [],
      false);
  }

  seek(seek_time) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media_session.mojom.MediaSession_Seek_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  stop(suspend_type) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media_session.mojom.MediaSession_Stop_ParamsSpec,
      null,
      [suspend_type],
      false);
  }

  skipAd() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media_session.mojom.MediaSession_SkipAd_ParamsSpec,
      null,
      [],
      false);
  }

  getMediaImageBitmap(image, minimum_size_px, desired_size_px) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec,
      media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParamsSpec,
      [image, minimum_size_px, desired_size_px],
      false);
  }

  seekTo(seek_time) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      media_session.mojom.MediaSession_SeekTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  scrubTo(seek_time) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      media_session.mojom.MediaSession_ScrubTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  enterPictureInPicture() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  exitPictureInPicture() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  setAudioSinkId(id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec,
      null,
      [id],
      false);
  }

  toggleMicrophone() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec,
      null,
      [],
      false);
  }

  toggleCamera() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      media_session.mojom.MediaSession_ToggleCamera_ParamsSpec,
      null,
      [],
      false);
  }

  hangUp() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      media_session.mojom.MediaSession_HangUp_ParamsSpec,
      null,
      [],
      false);
  }

  raise() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      media_session.mojom.MediaSession_Raise_ParamsSpec,
      null,
      [],
      false);
  }

  setMute(mute) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      media_session.mojom.MediaSession_SetMute_ParamsSpec,
      null,
      [mute],
      false);
  }

  requestMediaRemoting() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec,
      null,
      [],
      false);
  }

  previousSlide() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      media_session.mojom.MediaSession_PreviousSlide_ParamsSpec,
      null,
      [],
      false);
  }

  nextSlide() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      media_session.mojom.MediaSession_NextSlide_ParamsSpec,
      null,
      [],
      false);
  }

  enterAutoPictureInPicture() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  getVisibility() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      media_session.mojom.MediaSession_GetVisibility_ParamsSpec,
      media_session.mojom.MediaSession_GetVisibility_ResponseParamsSpec,
      [],
      false);
  }

};

media_session.mojom.MediaSession.getRemote = function() {
  let remote = new media_session.mojom.MediaSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaSession',
    'context');
  return remote.$;
};

media_session.mojom.MediaSessionReceiver = class {
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
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetMediaSessionInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMediaSessionInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDebugInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDebugInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartDucking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_StartDucking_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDucking (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StopDucking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_StopDucking_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDucking (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Suspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_Suspend_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Suspend (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_Resume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: PreviousTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_PreviousTrack_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviousTrack (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: NextTrack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_NextTrack_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NextTrack (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Seek
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_Seek_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Seek (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_Stop_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SkipAd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_SkipAd_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SkipAd (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetMediaImageBitmap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMediaImageBitmap (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SeekTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_SeekTo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SeekTo (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ScrubTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_ScrubTo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrubTo (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: EnterPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnterPictureInPicture (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ExitPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExitPictureInPicture (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetAudioSinkId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAudioSinkId (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: ToggleMicrophone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleMicrophone (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: ToggleCamera
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_ToggleCamera_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleCamera (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: HangUp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_HangUp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HangUp (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: Raise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_Raise_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Raise (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: SetMute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_SetMute_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMute (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: RequestMediaRemoting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestMediaRemoting (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: PreviousSlide
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_PreviousSlide_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreviousSlide (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: NextSlide
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_NextSlide_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NextSlide (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: EnterAutoPictureInPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnterAutoPictureInPicture (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: GetVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_session.mojom.MediaSession_GetVisibility_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVisibility (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
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
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_GetMediaSessionInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMediaSessionInfo');
          const result = this.impl.getMediaSessionInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.MediaSession_GetMediaSessionInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_GetDebugInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDebugInfo');
          const result = this.impl.getDebugInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.MediaSession_GetDebugInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_StartDucking_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startDucking');
          const result = this.impl.startDucking();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_StopDucking_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopDucking');
          const result = this.impl.stopDucking();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_Suspend_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suspend');
          const result = this.impl.suspend(params.suspend_type);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_Resume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume(params.suspend_type);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_PreviousTrack_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.previousTrack');
          const result = this.impl.previousTrack();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_NextTrack_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.nextTrack');
          const result = this.impl.nextTrack();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_Seek_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.seek');
          const result = this.impl.seek(params.seek_time);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_Stop_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop(params.suspend_type);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_SkipAd_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.skipAd');
          const result = this.impl.skipAd();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_GetMediaImageBitmap_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMediaImageBitmap');
          const result = this.impl.getMediaImageBitmap(params.image, params.minimum_size_px, params.desired_size_px);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.MediaSession_GetMediaImageBitmap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_SeekTo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.seekTo');
          const result = this.impl.seekTo(params.seek_time);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_ScrubTo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.scrubTo');
          const result = this.impl.scrubTo(params.seek_time);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_EnterPictureInPicture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enterPictureInPicture');
          const result = this.impl.enterPictureInPicture();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_ExitPictureInPicture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.exitPictureInPicture');
          const result = this.impl.exitPictureInPicture();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_SetAudioSinkId_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAudioSinkId');
          const result = this.impl.setAudioSinkId(params.id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_ToggleMicrophone_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.toggleMicrophone');
          const result = this.impl.toggleMicrophone();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_ToggleCamera_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.toggleCamera');
          const result = this.impl.toggleCamera();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_HangUp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hangUp');
          const result = this.impl.hangUp();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_Raise_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.raise');
          const result = this.impl.raise();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_SetMute_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setMute');
          const result = this.impl.setMute(params.mute);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_RequestMediaRemoting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestMediaRemoting');
          const result = this.impl.requestMediaRemoting();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_PreviousSlide_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.previousSlide');
          const result = this.impl.previousSlide();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_NextSlide_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.nextSlide');
          const result = this.impl.nextSlide();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_EnterAutoPictureInPicture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enterAutoPictureInPicture');
          const result = this.impl.enterAutoPictureInPicture();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaSession_GetVisibility_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getVisibility');
          const result = this.impl.getVisibility();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_session.mojom.MediaSession_GetVisibility_ResponseParamsSpec);
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

media_session.mojom.MediaSessionReceiver = media_session.mojom.MediaSessionReceiver;

media_session.mojom.MediaSessionPtr = media_session.mojom.MediaSessionRemote;
media_session.mojom.MediaSessionRequest = media_session.mojom.MediaSessionPendingReceiver;

