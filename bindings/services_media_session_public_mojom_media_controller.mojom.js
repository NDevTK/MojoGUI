// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_controller.mojom
// Module: media_session.mojom

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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerRemote), null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec, 'media_session.mojom.MediaControllerManager_CreateActiveMediaController_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerRemote), null, false, 0, undefined),
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
  createMediaControllerForSession(receiver, request_id) {
    return this.$.createMediaControllerForSession(receiver, request_id);
  }
  createActiveMediaController(receiver) {
    return this.$.createActiveMediaController(receiver);
  }
  suspendAllSessions() {
    return this.$.suspendAllSessions();
  }
};

media_session.mojom.MediaControllerManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaControllerManager', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  createMediaControllerForSession(receiver, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec,
      null,
      [receiver, request_id],
      false);
  }

  createActiveMediaController(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec,
      null,
      [receiver],
      false);
  }

  suspendAllSessions() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MediaControllerManager', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
             decoder.decodeStructInline(media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec.$.structSpec);
          const result = this.impl.createMediaControllerForSession(params.receiver, params.request_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec.$.structSpec);
          const result = this.impl.createActiveMediaController(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec.$.structSpec);
          const result = this.impl.suspendAllSessions();
          break;
        }
      }
      } catch (err) {}
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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media_session.mojom.MediaControllerObserverRemote), null, false, 0, undefined),
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
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(media_session.mojom.MediaControllerImageObserverRemote), null, false, 0, undefined),
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
  suspend() {
    return this.$.suspend();
  }
  resume() {
    return this.$.resume();
  }
  stop() {
    return this.$.stop();
  }
  toggleSuspendResume() {
    return this.$.toggleSuspendResume();
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  previousTrack() {
    return this.$.previousTrack();
  }
  nextTrack() {
    return this.$.nextTrack();
  }
  seek(seek_time) {
    return this.$.seek(seek_time);
  }
  observeImages(type, minimum_size_px, desired_size_px, observer) {
    return this.$.observeImages(type, minimum_size_px, desired_size_px, observer);
  }
  seekTo(seek_time) {
    return this.$.seekTo(seek_time);
  }
  scrubTo(seek_time) {
    return this.$.scrubTo(seek_time);
  }
  enterPictureInPicture() {
    return this.$.enterPictureInPicture();
  }
  exitPictureInPicture() {
    return this.$.exitPictureInPicture();
  }
  setAudioSinkId(id) {
    return this.$.setAudioSinkId(id);
  }
  toggleMicrophone() {
    return this.$.toggleMicrophone();
  }
  toggleCamera() {
    return this.$.toggleCamera();
  }
  hangUp() {
    return this.$.hangUp();
  }
  raise() {
    return this.$.raise();
  }
  setMute(mute) {
    return this.$.setMute(mute);
  }
  requestMediaRemoting() {
    return this.$.requestMediaRemoting();
  }
  enterAutoPictureInPicture() {
    return this.$.enterAutoPictureInPicture();
  }
  skipAd() {
    return this.$.skipAd();
  }
};

media_session.mojom.MediaControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaController', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
    ]);
  }

  suspend() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_session.mojom.MediaController_Suspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media_session.mojom.MediaController_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media_session.mojom.MediaController_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  toggleSuspendResume() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec,
      null,
      [],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media_session.mojom.MediaController_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  previousTrack() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media_session.mojom.MediaController_PreviousTrack_ParamsSpec,
      null,
      [],
      false);
  }

  nextTrack() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media_session.mojom.MediaController_NextTrack_ParamsSpec,
      null,
      [],
      false);
  }

  seek(seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media_session.mojom.MediaController_Seek_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  observeImages(type, minimum_size_px, desired_size_px, observer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      media_session.mojom.MediaController_ObserveImages_ParamsSpec,
      null,
      [type, minimum_size_px, desired_size_px, observer],
      false);
  }

  seekTo(seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      media_session.mojom.MediaController_SeekTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  scrubTo(seek_time) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      media_session.mojom.MediaController_ScrubTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  enterPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  exitPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  setAudioSinkId(id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec,
      null,
      [id],
      false);
  }

  toggleMicrophone() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec,
      null,
      [],
      false);
  }

  toggleCamera() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      media_session.mojom.MediaController_ToggleCamera_ParamsSpec,
      null,
      [],
      false);
  }

  hangUp() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      media_session.mojom.MediaController_HangUp_ParamsSpec,
      null,
      [],
      false);
  }

  raise() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      media_session.mojom.MediaController_Raise_ParamsSpec,
      null,
      [],
      false);
  }

  setMute(mute) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      media_session.mojom.MediaController_SetMute_ParamsSpec,
      null,
      [mute],
      false);
  }

  requestMediaRemoting() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec,
      null,
      [],
      false);
  }

  enterAutoPictureInPicture() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  skipAd() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MediaController', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 18 },
      { explicit: 19 },
      { explicit: 20 },
      { explicit: 21 },
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
             decoder.decodeStructInline(media_session.mojom.MediaController_Suspend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_PreviousTrack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_NextTrack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_Seek_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_ObserveImages_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_SeekTo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_ScrubTo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_ToggleCamera_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_HangUp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_Raise_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_SetMute_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaController_SkipAd_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_Suspend_ParamsSpec.$.structSpec);
          const result = this.impl.suspend();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec.$.structSpec);
          const result = this.impl.toggleSuspendResume();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_PreviousTrack_ParamsSpec.$.structSpec);
          const result = this.impl.previousTrack();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_NextTrack_ParamsSpec.$.structSpec);
          const result = this.impl.nextTrack();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_Seek_ParamsSpec.$.structSpec);
          const result = this.impl.seek(params.seek_time);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_ObserveImages_ParamsSpec.$.structSpec);
          const result = this.impl.observeImages(params.type, params.minimum_size_px, params.desired_size_px, params.observer);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_SeekTo_ParamsSpec.$.structSpec);
          const result = this.impl.seekTo(params.seek_time);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_ScrubTo_ParamsSpec.$.structSpec);
          const result = this.impl.scrubTo(params.seek_time);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec.$.structSpec);
          const result = this.impl.enterPictureInPicture();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec.$.structSpec);
          const result = this.impl.exitPictureInPicture();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec.$.structSpec);
          const result = this.impl.setAudioSinkId(params.id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec.$.structSpec);
          const result = this.impl.toggleMicrophone();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_ToggleCamera_ParamsSpec.$.structSpec);
          const result = this.impl.toggleCamera();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_HangUp_ParamsSpec.$.structSpec);
          const result = this.impl.hangUp();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_Raise_ParamsSpec.$.structSpec);
          const result = this.impl.raise();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_SetMute_ParamsSpec.$.structSpec);
          const result = this.impl.setMute(params.mute);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec.$.structSpec);
          const result = this.impl.requestMediaRemoting();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec.$.structSpec);
          const result = this.impl.enterAutoPictureInPicture();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaController_SkipAd_ParamsSpec.$.structSpec);
          const result = this.impl.skipAd();
          break;
        }
      }
      } catch (err) {}
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
  mediaSessionInfoChanged(info) {
    return this.$.mediaSessionInfoChanged(info);
  }
  mediaSessionMetadataChanged(metadata) {
    return this.$.mediaSessionMetadataChanged(metadata);
  }
  mediaSessionActionsChanged(action) {
    return this.$.mediaSessionActionsChanged(action);
  }
  mediaSessionChanged(request_id) {
    return this.$.mediaSessionChanged(request_id);
  }
  mediaSessionPositionChanged(position) {
    return this.$.mediaSessionPositionChanged(position);
  }
};

media_session.mojom.MediaControllerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaControllerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  mediaSessionInfoChanged(info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec,
      null,
      [info],
      false);
  }

  mediaSessionMetadataChanged(metadata) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec,
      null,
      [metadata],
      false);
  }

  mediaSessionActionsChanged(action) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec,
      null,
      [action],
      false);
  }

  mediaSessionChanged(request_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec,
      null,
      [request_id],
      false);
  }

  mediaSessionPositionChanged(position) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MediaControllerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
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
             decoder.decodeStructInline(media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec.$.structSpec);
          const result = this.impl.mediaSessionInfoChanged(params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec.$.structSpec);
          const result = this.impl.mediaSessionMetadataChanged(params.metadata);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.mediaSessionActionsChanged(params.action);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec.$.structSpec);
          const result = this.impl.mediaSessionChanged(params.request_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec.$.structSpec);
          const result = this.impl.mediaSessionPositionChanged(params.position);
          break;
        }
      }
      } catch (err) {}
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
  mediaControllerImageChanged(type, bitmap) {
    return this.$.mediaControllerImageChanged(type, bitmap);
  }
  mediaControllerChapterImageChanged(index, bitmap) {
    return this.$.mediaControllerChapterImageChanged(index, bitmap);
  }
};

media_session.mojom.MediaControllerImageObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaControllerImageObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  mediaControllerImageChanged(type, bitmap) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec,
      null,
      [type, bitmap],
      false);
  }

  mediaControllerChapterImageChanged(index, bitmap) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MediaControllerImageObserver', [
      { explicit: 0 },
      { explicit: 1 },
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
             decoder.decodeStructInline(media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec.$.structSpec);
          const result = this.impl.mediaControllerImageChanged(params.type, params.bitmap);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec.$.structSpec);
          const result = this.impl.mediaControllerChapterImageChanged(params.index, params.bitmap);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media_session.mojom.MediaControllerImageObserverReceiver = media_session.mojom.MediaControllerImageObserverReceiver;

media_session.mojom.MediaControllerImageObserverPtr = media_session.mojom.MediaControllerImageObserverRemote;
media_session.mojom.MediaControllerImageObserverRequest = media_session.mojom.MediaControllerImageObserverPendingReceiver;

