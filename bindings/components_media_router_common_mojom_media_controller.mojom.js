// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/media_controller.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Interface: MediaController
media_router.mojom.MediaController = {};

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

// ParamsSpec for Play
media_router.mojom.MediaController_Play_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaController.Play_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Pause
media_router.mojom.MediaController_Pause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaController.Pause_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetMute
media_router.mojom.MediaController_SetMute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaController.SetMute_Params',
      packedSize: 16,
      fields: [
        { name: 'mute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetVolume
media_router.mojom.MediaController_SetVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaController.SetVolume_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Seek
media_router.mojom.MediaController_Seek_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaController.Seek_Params',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NextTrack
media_router.mojom.MediaController_NextTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaController.NextTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for PreviousTrack
media_router.mojom.MediaController_PreviousTrack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media_router.mojom.MediaController.PreviousTrack_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
media_router.mojom.MediaControllerPtr = media_router.mojom.MediaControllerRemote;
media_router.mojom.MediaControllerRequest = media_router.mojom.MediaControllerPendingReceiver;

