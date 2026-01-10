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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createMediaControllerForSession(params.receiver, params.request_id);
          break;
        }
        case 1: {
          const params = media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createActiveMediaController(params.receiver);
          break;
        }
        case 2: {
          const params = media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.suspendAllSessions();
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media_session.mojom.MediaController_Suspend_ParamsSpec.$.decode(message.payload);
          const result = this.impl.suspend();
          break;
        }
        case 1: {
          const params = media_session.mojom.MediaController_Resume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resume();
          break;
        }
        case 2: {
          const params = media_session.mojom.MediaController_Stop_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stop();
          break;
        }
        case 3: {
          const params = media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleSuspendResume();
          break;
        }
        case 4: {
          const params = media_session.mojom.MediaController_AddObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 5: {
          const params = media_session.mojom.MediaController_PreviousTrack_ParamsSpec.$.decode(message.payload);
          const result = this.impl.previousTrack();
          break;
        }
        case 6: {
          const params = media_session.mojom.MediaController_NextTrack_ParamsSpec.$.decode(message.payload);
          const result = this.impl.nextTrack();
          break;
        }
        case 7: {
          const params = media_session.mojom.MediaController_Seek_ParamsSpec.$.decode(message.payload);
          const result = this.impl.seek(params.seek_time);
          break;
        }
        case 8: {
          const params = media_session.mojom.MediaController_ObserveImages_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeImages(params.type, params.minimum_size_px, params.desired_size_px, params.observer);
          break;
        }
        case 9: {
          const params = media_session.mojom.MediaController_SeekTo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.seekTo(params.seek_time);
          break;
        }
        case 10: {
          const params = media_session.mojom.MediaController_ScrubTo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.scrubTo(params.seek_time);
          break;
        }
        case 11: {
          const params = media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enterPictureInPicture();
          break;
        }
        case 12: {
          const params = media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.exitPictureInPicture();
          break;
        }
        case 13: {
          const params = media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAudioSinkId(params.id);
          break;
        }
        case 14: {
          const params = media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleMicrophone();
          break;
        }
        case 15: {
          const params = media_session.mojom.MediaController_ToggleCamera_ParamsSpec.$.decode(message.payload);
          const result = this.impl.toggleCamera();
          break;
        }
        case 16: {
          const params = media_session.mojom.MediaController_HangUp_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hangUp();
          break;
        }
        case 17: {
          const params = media_session.mojom.MediaController_Raise_ParamsSpec.$.decode(message.payload);
          const result = this.impl.raise();
          break;
        }
        case 18: {
          const params = media_session.mojom.MediaController_SetMute_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setMute(params.mute);
          break;
        }
        case 19: {
          const params = media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestMediaRemoting();
          break;
        }
        case 20: {
          const params = media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enterAutoPictureInPicture();
          break;
        }
        case 21: {
          const params = media_session.mojom.MediaController_SkipAd_ParamsSpec.$.decode(message.payload);
          const result = this.impl.skipAd();
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mediaSessionInfoChanged(params.info);
          break;
        }
        case 1: {
          const params = media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mediaSessionMetadataChanged(params.metadata);
          break;
        }
        case 2: {
          const params = media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mediaSessionActionsChanged(params.action);
          break;
        }
        case 3: {
          const params = media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mediaSessionChanged(params.request_id);
          break;
        }
        case 4: {
          const params = media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mediaSessionPositionChanged(params.position);
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mediaControllerImageChanged(params.type, params.bitmap);
          break;
        }
        case 1: {
          const params = media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.mediaControllerChapterImageChanged(params.index, params.bitmap);
          break;
        }
      }
    }});
  }
};

media_session.mojom.MediaControllerImageObserverReceiver = media_session.mojom.MediaControllerImageObserverReceiver;

media_session.mojom.MediaControllerImageObserverPtr = media_session.mojom.MediaControllerImageObserverRemote;
media_session.mojom.MediaControllerImageObserverRequest = media_session.mojom.MediaControllerImageObserverPendingReceiver;

