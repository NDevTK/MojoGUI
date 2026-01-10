// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/picture_in_picture/picture_in_picture.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: PictureInPictureSessionObserver
blink.mojom.mojom.PictureInPictureSessionObserver = {};

blink.mojom.mojom.PictureInPictureSessionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PictureInPictureSessionObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PictureInPictureSessionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PictureInPictureSessionObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PictureInPictureSessionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PictureInPictureSessionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWindowSizeChanged(size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec,
      null,
      [size]);
  }

  onStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.PictureInPictureSessionObserver.getRemote = function() {
  let remote = new blink.mojom.mojom.PictureInPictureSessionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PictureInPictureSessionObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnWindowSizeChanged
blink.mojom.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureSessionObserver.OnWindowSizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnStopped
blink.mojom.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureSessionObserver.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PictureInPictureSessionObserverPtr = blink.mojom.mojom.PictureInPictureSessionObserverRemote;
blink.mojom.mojom.PictureInPictureSessionObserverRequest = blink.mojom.mojom.PictureInPictureSessionObserverPendingReceiver;


// Interface: PictureInPictureSession
blink.mojom.mojom.PictureInPictureSession = {};

blink.mojom.mojom.PictureInPictureSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PictureInPictureSessionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PictureInPictureSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PictureInPictureSessionPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PictureInPictureSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PictureInPictureSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(player_id, player_remote, surface_id, natural_size, show_play_pause_button) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PictureInPictureSession_Update_ParamsSpec,
      null,
      [player_id, player_remote, surface_id, natural_size, show_play_pause_button]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.PictureInPictureSession_Stop_ParamsSpec,
      null,
      []);
  }

  updateMediaPosition(media_position) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec,
      null,
      [media_position]);
  }

};

blink.mojom.mojom.PictureInPictureSession.getRemote = function() {
  let remote = new blink.mojom.mojom.PictureInPictureSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PictureInPictureSession',
    'context');
  return remote.$;
};

// ParamsSpec for Update
blink.mojom.mojom.PictureInPictureSession_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureSession.Update_Params',
      packedSize: 40,
      fields: [
        { name: 'player_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'player_remote', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'surface_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SurfaceIdSpec, nullable: false, minVersion: 0 },
        { name: 'natural_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'show_play_pause_button', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for Stop
blink.mojom.mojom.PictureInPictureSession_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureSession.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdateMediaPosition
blink.mojom.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureSession.UpdateMediaPosition_Params',
      packedSize: 16,
      fields: [
        { name: 'media_position', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaPositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PictureInPictureSessionPtr = blink.mojom.mojom.PictureInPictureSessionRemote;
blink.mojom.mojom.PictureInPictureSessionRequest = blink.mojom.mojom.PictureInPictureSessionPendingReceiver;


// Interface: PictureInPictureService
blink.mojom.mojom.PictureInPictureService = {};

blink.mojom.mojom.PictureInPictureServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PictureInPictureServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PictureInPictureService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PictureInPictureServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PictureInPictureServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PictureInPictureServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startSession(player_id, player_remote, surface_id, natural_size, show_play_pause_button, observer, source_bounds) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PictureInPictureService_StartSession_ParamsSpec,
      blink.mojom.mojom.PictureInPictureService_StartSession_ResponseParamsSpec,
      [player_id, player_remote, surface_id, natural_size, show_play_pause_button, observer, source_bounds]);
  }

};

blink.mojom.mojom.PictureInPictureService.getRemote = function() {
  let remote = new blink.mojom.mojom.PictureInPictureServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PictureInPictureService',
    'context');
  return remote.$;
};

// ParamsSpec for StartSession
blink.mojom.mojom.PictureInPictureService_StartSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureService.StartSession_Params',
      packedSize: 48,
      fields: [
        { name: 'player_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'player_remote', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'surface_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SurfaceIdSpec, nullable: false, minVersion: 0 },
        { name: 'natural_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'show_play_pause_button', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'source_bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

blink.mojom.mojom.PictureInPictureService_StartSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureService.StartSession_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PictureInPictureServicePtr = blink.mojom.mojom.PictureInPictureServiceRemote;
blink.mojom.mojom.PictureInPictureServiceRequest = blink.mojom.mojom.PictureInPictureServicePendingReceiver;

