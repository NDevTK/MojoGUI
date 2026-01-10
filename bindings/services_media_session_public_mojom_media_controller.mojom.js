// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_controller.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};
var mojo_base = mojo_base || {};

media_session.mojom.MediaControllerManager = {};
media_session.mojom.MediaControllerManager.$interfaceName = 'media_session.mojom.MediaControllerManager';
media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec = { $: {} };
media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec = { $: {} };
media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec = { $: {} };
media_session.mojom.MediaController = {};
media_session.mojom.MediaController.$interfaceName = 'media_session.mojom.MediaController';
media_session.mojom.MediaController_Suspend_ParamsSpec = { $: {} };
media_session.mojom.MediaController_Resume_ParamsSpec = { $: {} };
media_session.mojom.MediaController_Stop_ParamsSpec = { $: {} };
media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec = { $: {} };
media_session.mojom.MediaController_AddObserver_ParamsSpec = { $: {} };
media_session.mojom.MediaController_PreviousTrack_ParamsSpec = { $: {} };
media_session.mojom.MediaController_NextTrack_ParamsSpec = { $: {} };
media_session.mojom.MediaController_Seek_ParamsSpec = { $: {} };
media_session.mojom.MediaController_ObserveImages_ParamsSpec = { $: {} };
media_session.mojom.MediaController_SeekTo_ParamsSpec = { $: {} };
media_session.mojom.MediaController_ScrubTo_ParamsSpec = { $: {} };
media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec = { $: {} };
media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec = { $: {} };
media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec = { $: {} };
media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec = { $: {} };
media_session.mojom.MediaController_ToggleCamera_ParamsSpec = { $: {} };
media_session.mojom.MediaController_HangUp_ParamsSpec = { $: {} };
media_session.mojom.MediaController_Raise_ParamsSpec = { $: {} };
media_session.mojom.MediaController_SetMute_ParamsSpec = { $: {} };
media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec = { $: {} };
media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec = { $: {} };
media_session.mojom.MediaController_SkipAd_ParamsSpec = { $: {} };
media_session.mojom.MediaControllerObserver = {};
media_session.mojom.MediaControllerObserver.$interfaceName = 'media_session.mojom.MediaControllerObserver';
media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaControllerImageObserver = {};
media_session.mojom.MediaControllerImageObserver.$interfaceName = 'media_session.mojom.MediaControllerImageObserver';
media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec = { $: {} };
media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec = { $: {} };

// Interface: MediaControllerManager
mojo.internal.Struct(
    media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec, 'media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerSpec), null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec, 'media_session.mojom.MediaControllerManager_CreateActiveMediaController_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec, 'media_session.mojom.MediaControllerManager_SuspendAllSessions_Params', [
    ],
    [[0, 8]]);

media_session.mojom.MediaControllerManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaControllerManagerRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaControllerManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaControllerManagerPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaControllerManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaControllerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createMediaControllerForSession(receiver, request_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec,
      null,
      [receiver, request_id],
      false);
  }

  createActiveMediaController(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec,
      null,
      [receiver],
      false);
  }

  suspendAllSessions() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec,
      null,
      [],
      false);
  }

};

media_session.mojom.MediaControllerManager.getRemote = function() {
  let remote = new media_session.mojom.MediaControllerManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaControllerManager',
    'context');
  return remote.$;
};

media_session.mojom.MediaControllerManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createMediaControllerForSession');
          const result = this.impl.createMediaControllerForSession(params.receiver, params.request_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createActiveMediaController');
          const result = this.impl.createActiveMediaController(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.suspendAllSessions');
          const result = this.impl.suspendAllSessions();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_session.mojom.MediaControllerManagerReceiver = media_session.mojom.MediaControllerManagerReceiver;

media_session.mojom.MediaControllerManagerPtr = media_session.mojom.MediaControllerManagerRemote;
media_session.mojom.MediaControllerManagerRequest = media_session.mojom.MediaControllerManagerPendingReceiver;


// Interface: MediaController
mojo.internal.Struct(
    media_session.mojom.MediaController_Suspend_ParamsSpec, 'media_session.mojom.MediaController_Suspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_Resume_ParamsSpec, 'media_session.mojom.MediaController_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_Stop_ParamsSpec, 'media_session.mojom.MediaController_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec, 'media_session.mojom.MediaController_ToggleSuspendResume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_AddObserver_ParamsSpec, 'media_session.mojom.MediaController_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media_session.mojom.MediaControllerObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_PreviousTrack_ParamsSpec, 'media_session.mojom.MediaController_PreviousTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_NextTrack_ParamsSpec, 'media_session.mojom.MediaController_NextTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_Seek_ParamsSpec, 'media_session.mojom.MediaController_Seek_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_ObserveImages_ParamsSpec, 'media_session.mojom.MediaController_ObserveImages_Params', [
      mojo.internal.StructField('type', 0, 0, media_session.mojom.MediaSessionImageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(media_session.mojom.MediaControllerImageObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('minimum_size_px', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('desired_size_px', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_SeekTo_ParamsSpec, 'media_session.mojom.MediaController_SeekTo_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_ScrubTo_ParamsSpec, 'media_session.mojom.MediaController_ScrubTo_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec, 'media_session.mojom.MediaController_EnterPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec, 'media_session.mojom.MediaController_ExitPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec, 'media_session.mojom.MediaController_SetAudioSinkId_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec, 'media_session.mojom.MediaController_ToggleMicrophone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_ToggleCamera_ParamsSpec, 'media_session.mojom.MediaController_ToggleCamera_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_HangUp_ParamsSpec, 'media_session.mojom.MediaController_HangUp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_Raise_ParamsSpec, 'media_session.mojom.MediaController_Raise_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_SetMute_ParamsSpec, 'media_session.mojom.MediaController_SetMute_Params', [
      mojo.internal.StructField('mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec, 'media_session.mojom.MediaController_RequestMediaRemoting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec, 'media_session.mojom.MediaController_EnterAutoPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_session.mojom.MediaController_SkipAd_ParamsSpec, 'media_session.mojom.MediaController_SkipAd_Params', [
    ],
    [[0, 8]]);

media_session.mojom.MediaControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaControllerRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaControllerPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  suspend() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.MediaController_Suspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaController_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  stop() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaController_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  toggleSuspendResume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec,
      null,
      [],
      false);
  }

  addObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_session.mojom.MediaController_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  previousTrack() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_session.mojom.MediaController_PreviousTrack_ParamsSpec,
      null,
      [],
      false);
  }

  nextTrack() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_session.mojom.MediaController_NextTrack_ParamsSpec,
      null,
      [],
      false);
  }

  seek(seek_time) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media_session.mojom.MediaController_Seek_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  observeImages(type, minimum_size_px, desired_size_px, observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media_session.mojom.MediaController_ObserveImages_ParamsSpec,
      null,
      [type, minimum_size_px, desired_size_px, observer],
      false);
  }

  seekTo(seek_time) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media_session.mojom.MediaController_SeekTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  scrubTo(seek_time) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media_session.mojom.MediaController_ScrubTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  enterPictureInPicture() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  exitPictureInPicture() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  setAudioSinkId(id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec,
      null,
      [id],
      false);
  }

  toggleMicrophone() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec,
      null,
      [],
      false);
  }

  toggleCamera() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      media_session.mojom.MediaController_ToggleCamera_ParamsSpec,
      null,
      [],
      false);
  }

  hangUp() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      media_session.mojom.MediaController_HangUp_ParamsSpec,
      null,
      [],
      false);
  }

  raise() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      media_session.mojom.MediaController_Raise_ParamsSpec,
      null,
      [],
      false);
  }

  setMute(mute) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      media_session.mojom.MediaController_SetMute_ParamsSpec,
      null,
      [mute],
      false);
  }

  requestMediaRemoting() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec,
      null,
      [],
      false);
  }

  enterAutoPictureInPicture() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  skipAd() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      media_session.mojom.MediaController_SkipAd_ParamsSpec,
      null,
      [],
      false);
  }

};

media_session.mojom.MediaController.getRemote = function() {
  let remote = new media_session.mojom.MediaControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaController',
    'context');
  return remote.$;
};

media_session.mojom.MediaControllerReceiver = class {
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_Suspend_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.suspend');
          const result = this.impl.suspend();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_Resume_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_Stop_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.toggleSuspendResume');
          const result = this.impl.toggleSuspendResume();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_AddObserver_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_PreviousTrack_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.previousTrack');
          const result = this.impl.previousTrack();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_NextTrack_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.nextTrack');
          const result = this.impl.nextTrack();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_Seek_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.seek');
          const result = this.impl.seek(params.seek_time);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_ObserveImages_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.observeImages');
          const result = this.impl.observeImages(params.type, params.minimum_size_px, params.desired_size_px, params.observer);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_SeekTo_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.seekTo');
          const result = this.impl.seekTo(params.seek_time);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_ScrubTo_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.scrubTo');
          const result = this.impl.scrubTo(params.seek_time);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.enterPictureInPicture');
          const result = this.impl.enterPictureInPicture();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.exitPictureInPicture');
          const result = this.impl.exitPictureInPicture();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setAudioSinkId');
          const result = this.impl.setAudioSinkId(params.id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.toggleMicrophone');
          const result = this.impl.toggleMicrophone();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_ToggleCamera_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.toggleCamera');
          const result = this.impl.toggleCamera();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_HangUp_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.hangUp');
          const result = this.impl.hangUp();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_Raise_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.raise');
          const result = this.impl.raise();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_SetMute_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setMute');
          const result = this.impl.setMute(params.mute);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.requestMediaRemoting');
          const result = this.impl.requestMediaRemoting();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.enterAutoPictureInPicture');
          const result = this.impl.enterAutoPictureInPicture();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaController_SkipAd_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.skipAd');
          const result = this.impl.skipAd();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_session.mojom.MediaControllerReceiver = media_session.mojom.MediaControllerReceiver;

media_session.mojom.MediaControllerPtr = media_session.mojom.MediaControllerRemote;
media_session.mojom.MediaControllerRequest = media_session.mojom.MediaControllerPendingReceiver;


// Interface: MediaControllerObserver
mojo.internal.Struct(
    media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec, 'media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_Params', [
      mojo.internal.StructField('info', 0, 0, media_session.mojom.MediaSessionInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec, 'media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_Params', [
      mojo.internal.StructField('metadata', 0, 0, media_session.mojom.MediaMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec, 'media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_Params', [
      mojo.internal.StructField('action', 0, 0, mojo.internal.Array(media_session.mojom.MediaSessionActionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec, 'media_session.mojom.MediaControllerObserver_MediaSessionChanged_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec, 'media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_Params', [
      mojo.internal.StructField('position', 0, 0, media_session.mojom.MediaPositionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

media_session.mojom.MediaControllerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaControllerObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaControllerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaControllerObserverPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaControllerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaControllerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mediaSessionInfoChanged(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec,
      null,
      [info],
      false);
  }

  mediaSessionMetadataChanged(metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec,
      null,
      [metadata],
      false);
  }

  mediaSessionActionsChanged(action) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec,
      null,
      [action],
      false);
  }

  mediaSessionChanged(request_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec,
      null,
      [request_id],
      false);
  }

  mediaSessionPositionChanged(position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec,
      null,
      [position],
      false);
  }

};

media_session.mojom.MediaControllerObserver.getRemote = function() {
  let remote = new media_session.mojom.MediaControllerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaControllerObserver',
    'context');
  return remote.$;
};

media_session.mojom.MediaControllerObserverReceiver = class {
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionInfoChanged');
          const result = this.impl.mediaSessionInfoChanged(params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionMetadataChanged');
          const result = this.impl.mediaSessionMetadataChanged(params.metadata);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionActionsChanged');
          const result = this.impl.mediaSessionActionsChanged(params.action);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.mediaSessionChanged');
          const result = this.impl.mediaSessionChanged(params.request_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec.$, 0);
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

media_session.mojom.MediaControllerObserverReceiver = media_session.mojom.MediaControllerObserverReceiver;

media_session.mojom.MediaControllerObserverPtr = media_session.mojom.MediaControllerObserverRemote;
media_session.mojom.MediaControllerObserverRequest = media_session.mojom.MediaControllerObserverPendingReceiver;


// Interface: MediaControllerImageObserver
mojo.internal.Struct(
    media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec, 'media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_Params', [
      mojo.internal.StructField('type', 0, 0, media_session.mojom.MediaSessionImageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bitmap', 8, 0, media_session.mojom.MediaImageBitmapSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec, 'media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_Params', [
      mojo.internal.StructField('bitmap', 0, 0, media_session.mojom.MediaImageBitmapSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

media_session.mojom.MediaControllerImageObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_session.mojom.MediaControllerImageObserverRemote = class {
  static get $interfaceName() {
    return 'media_session.mojom.MediaControllerImageObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_session.mojom.MediaControllerImageObserverPendingReceiver,
      handle);
    this.$ = new media_session.mojom.MediaControllerImageObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_session.mojom.MediaControllerImageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mediaControllerImageChanged(type, bitmap) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec,
      null,
      [type, bitmap],
      false);
  }

  mediaControllerChapterImageChanged(index, bitmap) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec,
      null,
      [index, bitmap],
      false);
  }

};

media_session.mojom.MediaControllerImageObserver.getRemote = function() {
  let remote = new media_session.mojom.MediaControllerImageObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_session.mojom.MediaControllerImageObserver',
    'context');
  return remote.$;
};

media_session.mojom.MediaControllerImageObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.mediaControllerImageChanged');
          const result = this.impl.mediaControllerImageChanged(params.type, params.bitmap);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.mediaControllerChapterImageChanged');
          const result = this.impl.mediaControllerChapterImageChanged(params.index, params.bitmap);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_session.mojom.MediaControllerImageObserverReceiver = media_session.mojom.MediaControllerImageObserverReceiver;

media_session.mojom.MediaControllerImageObserverPtr = media_session.mojom.MediaControllerImageObserverRemote;
media_session.mojom.MediaControllerImageObserverRequest = media_session.mojom.MediaControllerImageObserverPendingReceiver;

