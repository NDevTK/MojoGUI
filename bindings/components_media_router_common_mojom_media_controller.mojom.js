// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_controller.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};
var components = components || {};

media_router.mojom.MediaController = {};
media_router.mojom.MediaController.$interfaceName = 'media_router.mojom.MediaController';
media_router.mojom.MediaController_Play_ParamsSpec = { $: {} };
media_router.mojom.MediaController_Pause_ParamsSpec = { $: {} };
media_router.mojom.MediaController_SetMute_ParamsSpec = { $: {} };
media_router.mojom.MediaController_SetVolume_ParamsSpec = { $: {} };
media_router.mojom.MediaController_Seek_ParamsSpec = { $: {} };
media_router.mojom.MediaController_NextTrack_ParamsSpec = { $: {} };
media_router.mojom.MediaController_PreviousTrack_ParamsSpec = { $: {} };

// Interface: MediaController
mojo.internal.Struct(
    media_router.mojom.MediaController_Play_ParamsSpec, 'media_router.mojom.MediaController_Play_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_Pause_ParamsSpec, 'media_router.mojom.MediaController_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_SetMute_ParamsSpec, 'media_router.mojom.MediaController_SetMute_Params', [
      mojo.internal.StructField('mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_SetVolume_ParamsSpec, 'media_router.mojom.MediaController_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_Seek_ParamsSpec, 'media_router.mojom.MediaController_Seek_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_NextTrack_ParamsSpec, 'media_router.mojom.MediaController_NextTrack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.MediaController_PreviousTrack_ParamsSpec, 'media_router.mojom.MediaController_PreviousTrack_Params', [
    ],
    [[0, 8]]);

media_router.mojom.MediaControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.MediaControllerRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.MediaController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.MediaControllerPendingReceiver,
      handle);
    this.$ = new media_router.mojom.MediaControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_router.mojom.MediaControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  play() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.MediaController_Play_ParamsSpec,
      null,
      []);
  }

  pause() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.MediaController_Pause_ParamsSpec,
      null,
      []);
  }

  setMute(mute) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.MediaController_SetMute_ParamsSpec,
      null,
      [mute]);
  }

  setVolume(volume) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media_router.mojom.MediaController_SetVolume_ParamsSpec,
      null,
      [volume]);
  }

  seek(time) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media_router.mojom.MediaController_Seek_ParamsSpec,
      null,
      [time]);
  }

  nextTrack() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media_router.mojom.MediaController_NextTrack_ParamsSpec,
      null,
      []);
  }

  previousTrack() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media_router.mojom.MediaController_PreviousTrack_ParamsSpec,
      null,
      []);
  }

};

media_router.mojom.MediaController.getRemote = function() {
  let remote = new media_router.mojom.MediaControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.MediaController',
    'context');
  return remote.$;
};

media_router.mojom.MediaControllerPtr = media_router.mojom.MediaControllerRemote;
media_router.mojom.MediaControllerRequest = media_router.mojom.MediaControllerPendingReceiver;

