// Auto-generated MojoJS binding
// Source: chromium_src/services/media_session/public/mojom/media_controller.mojom
// Module: media_session.mojom

'use strict';

// Module namespace
var media_session = media_session || {};
media_session.mojom = media_session.mojom || {};


// Interface: MediaControllerManager
media_session.mojom.MediaControllerManager = {};

media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerRemote), nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerManager_CreateActiveMediaController_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerManager_SuspendAllSessions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      [receiver, request_id]);
  }

  createActiveMediaController(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec,
      null,
      [receiver]);
  }

  suspendAllSessions() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec,
      null,
      []);
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

// ParamsSpec for CreateMediaControllerForSession
media_session.mojom.MediaControllerManager_CreateMediaControllerForSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerManager.CreateMediaControllerForSession_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerRemote), nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateActiveMediaController
media_session.mojom.MediaControllerManager_CreateActiveMediaController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerManager.CreateActiveMediaController_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SuspendAllSessions
media_session.mojom.MediaControllerManager_SuspendAllSessions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerManager.SuspendAllSessions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
media_session.mojom.MediaControllerManagerPtr = media_session.mojom.MediaControllerManagerRemote;
media_session.mojom.MediaControllerManagerRequest = media_session.mojom.MediaControllerManagerPendingReceiver;


// Interface: MediaController
media_session.mojom.MediaController = {};

media_session.mojom.MediaController_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_Suspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_ToggleSuspendResume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media_session.mojom.MediaControllerObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaController_PreviousTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_PreviousTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_NextTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_NextTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_Seek_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_Seek_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaController_ObserveImages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_ObserveImages_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: media_session.mojom.MediaSessionImageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'minimum_size_px', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'desired_size_px', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media_session.mojom.MediaControllerImageObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

media_session.mojom.MediaController_SeekTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_SeekTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaController_ScrubTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_ScrubTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_EnterPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_ExitPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_SetAudioSinkId_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_ToggleMicrophone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_ToggleCamera_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_ToggleCamera_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_HangUp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_HangUp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_Raise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_Raise_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_SetMute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_SetMute_Params',
      packedSize: 16,
      fields: [
        { name: 'mute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_RequestMediaRemoting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_EnterAutoPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media_session.mojom.MediaController_SkipAd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController_SkipAd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      []);
  }

  resume() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaController_Resume_ParamsSpec,
      null,
      []);
  }

  stop() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaController_Stop_ParamsSpec,
      null,
      []);
  }

  toggleSuspendResume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec,
      null,
      []);
  }

  addObserver(observer) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_session.mojom.MediaController_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  previousTrack() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_session.mojom.MediaController_PreviousTrack_ParamsSpec,
      null,
      []);
  }

  nextTrack() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_session.mojom.MediaController_NextTrack_ParamsSpec,
      null,
      []);
  }

  seek(seek_time) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media_session.mojom.MediaController_Seek_ParamsSpec,
      null,
      [seek_time]);
  }

  observeImages(type, minimum_size_px, desired_size_px, observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media_session.mojom.MediaController_ObserveImages_ParamsSpec,
      null,
      [type, minimum_size_px, desired_size_px, observer]);
  }

  seekTo(seek_time) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media_session.mojom.MediaController_SeekTo_ParamsSpec,
      null,
      [seek_time]);
  }

  scrubTo(seek_time) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media_session.mojom.MediaController_ScrubTo_ParamsSpec,
      null,
      [seek_time]);
  }

  enterPictureInPicture() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec,
      null,
      []);
  }

  exitPictureInPicture() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec,
      null,
      []);
  }

  setAudioSinkId(id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec,
      null,
      [id]);
  }

  toggleMicrophone() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec,
      null,
      []);
  }

  toggleCamera() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      media_session.mojom.MediaController_ToggleCamera_ParamsSpec,
      null,
      []);
  }

  hangUp() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      media_session.mojom.MediaController_HangUp_ParamsSpec,
      null,
      []);
  }

  raise() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      media_session.mojom.MediaController_Raise_ParamsSpec,
      null,
      []);
  }

  setMute(mute) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      media_session.mojom.MediaController_SetMute_ParamsSpec,
      null,
      [mute]);
  }

  requestMediaRemoting() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec,
      null,
      []);
  }

  enterAutoPictureInPicture() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec,
      null,
      []);
  }

  skipAd() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      media_session.mojom.MediaController_SkipAd_ParamsSpec,
      null,
      []);
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

// ParamsSpec for Suspend
media_session.mojom.MediaController_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.Suspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resume
media_session.mojom.MediaController_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Stop
media_session.mojom.MediaController_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ToggleSuspendResume
media_session.mojom.MediaController_ToggleSuspendResume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.ToggleSuspendResume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AddObserver
media_session.mojom.MediaController_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media_session.mojom.MediaControllerObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PreviousTrack
media_session.mojom.MediaController_PreviousTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.PreviousTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NextTrack
media_session.mojom.MediaController_NextTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.NextTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Seek
media_session.mojom.MediaController_Seek_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.Seek_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveImages
media_session.mojom.MediaController_ObserveImages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.ObserveImages_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: media_session.mojom.MediaSessionImageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'minimum_size_px', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'desired_size_px', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media_session.mojom.MediaControllerImageObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SeekTo
media_session.mojom.MediaController_SeekTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.SeekTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ScrubTo
media_session.mojom.MediaController_ScrubTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.ScrubTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnterPictureInPicture
media_session.mojom.MediaController_EnterPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.EnterPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ExitPictureInPicture
media_session.mojom.MediaController_ExitPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.ExitPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetAudioSinkId
media_session.mojom.MediaController_SetAudioSinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.SetAudioSinkId_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ToggleMicrophone
media_session.mojom.MediaController_ToggleMicrophone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.ToggleMicrophone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ToggleCamera
media_session.mojom.MediaController_ToggleCamera_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.ToggleCamera_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for HangUp
media_session.mojom.MediaController_HangUp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.HangUp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Raise
media_session.mojom.MediaController_Raise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.Raise_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetMute
media_session.mojom.MediaController_SetMute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.SetMute_Params',
      packedSize: 16,
      fields: [
        { name: 'mute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestMediaRemoting
media_session.mojom.MediaController_RequestMediaRemoting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.RequestMediaRemoting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for EnterAutoPictureInPicture
media_session.mojom.MediaController_EnterAutoPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.EnterAutoPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SkipAd
media_session.mojom.MediaController_SkipAd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaController.SkipAd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
media_session.mojom.MediaControllerPtr = media_session.mojom.MediaControllerRemote;
media_session.mojom.MediaControllerRequest = media_session.mojom.MediaControllerPendingReceiver;


// Interface: MediaControllerObserver
media_session.mojom.MediaControllerObserver = {};

media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media_session.mojom.MediaSessionActionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerObserver_MediaSessionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaPositionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [info]);
  }

  mediaSessionMetadataChanged(metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec,
      null,
      [metadata]);
  }

  mediaSessionActionsChanged(action) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec,
      null,
      [action]);
  }

  mediaSessionChanged(request_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec,
      null,
      [request_id]);
  }

  mediaSessionPositionChanged(position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec,
      null,
      [position]);
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

// ParamsSpec for MediaSessionInfoChanged
media_session.mojom.MediaControllerObserver_MediaSessionInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerObserver.MediaSessionInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaSessionInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MediaSessionMetadataChanged
media_session.mojom.MediaControllerObserver_MediaSessionMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerObserver.MediaSessionMetadataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaMetadataSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MediaSessionActionsChanged
media_session.mojom.MediaControllerObserver_MediaSessionActionsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerObserver.MediaSessionActionsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media_session.mojom.MediaSessionActionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MediaSessionChanged
media_session.mojom.MediaControllerObserver_MediaSessionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerObserver.MediaSessionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MediaSessionPositionChanged
media_session.mojom.MediaControllerObserver_MediaSessionPositionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerObserver.MediaSessionPositionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaPositionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media_session.mojom.MediaControllerObserverPtr = media_session.mojom.MediaControllerObserverRemote;
media_session.mojom.MediaControllerObserverRequest = media_session.mojom.MediaControllerObserverPendingReceiver;


// Interface: MediaControllerImageObserver
media_session.mojom.MediaControllerImageObserver = {};

media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: media_session.mojom.MediaSessionImageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaImageBitmapSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaImageBitmapSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [type, bitmap]);
  }

  mediaControllerChapterImageChanged(index, bitmap) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec,
      null,
      [index, bitmap]);
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

// ParamsSpec for MediaControllerImageChanged
media_session.mojom.MediaControllerImageObserver_MediaControllerImageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerImageObserver.MediaControllerImageChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: media_session.mojom.MediaSessionImageTypeSpec, nullable: false, minVersion: 0 },
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaImageBitmapSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for MediaControllerChapterImageChanged
media_session.mojom.MediaControllerImageObserver_MediaControllerChapterImageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_session.mojom.MediaControllerImageObserver.MediaControllerChapterImageChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaImageBitmapSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media_session.mojom.MediaControllerImageObserverPtr = media_session.mojom.MediaControllerImageObserverRemote;
media_session.mojom.MediaControllerImageObserverRequest = media_session.mojom.MediaControllerImageObserverPendingReceiver;

