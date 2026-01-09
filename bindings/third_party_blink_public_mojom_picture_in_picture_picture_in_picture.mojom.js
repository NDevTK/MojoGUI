// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/picture_in_picture/picture_in_picture.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: PictureInPictureSessionObserver
blink.mojom.PictureInPictureSessionObserver = {};

blink.mojom.PictureInPictureSessionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PictureInPictureSessionObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PictureInPictureSessionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PictureInPictureSessionObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.PictureInPictureSessionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PictureInPictureSessionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWindowSizeChanged(size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec.$,
      null,
      [size]);
  }

  onStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec.$,
      null,
      []);
  }

};

blink.mojom.PictureInPictureSessionObserver.getRemote = function() {
  let remote = new blink.mojom.PictureInPictureSessionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PictureInPictureSessionObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnWindowSizeChanged
blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureSessionObserver.OnWindowSizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStopped
blink.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureSessionObserver.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PictureInPictureSessionObserverPtr = blink.mojom.PictureInPictureSessionObserverRemote;
blink.mojom.PictureInPictureSessionObserverRequest = blink.mojom.PictureInPictureSessionObserverPendingReceiver;


// Interface: PictureInPictureSession
blink.mojom.PictureInPictureSession = {};

blink.mojom.PictureInPictureSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PictureInPictureSessionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PictureInPictureSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PictureInPictureSessionPendingReceiver,
      handle);
    this.$ = new blink.mojom.PictureInPictureSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PictureInPictureSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(player_id, player_remote, surface_id, natural_size, show_play_pause_button) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PictureInPictureSession_Update_ParamsSpec.$,
      null,
      [player_id, player_remote, surface_id, natural_size, show_play_pause_button]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PictureInPictureSession_Stop_ParamsSpec.$,
      null,
      []);
  }

  updateMediaPosition(media_position) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec.$,
      null,
      [media_position]);
  }

};

blink.mojom.PictureInPictureSession.getRemote = function() {
  let remote = new blink.mojom.PictureInPictureSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PictureInPictureSession',
    'context');
  return remote.$;
};

// ParamsSpec for Update
blink.mojom.PictureInPictureSession_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureSession.Update_Params',
      packedSize: 48,
      fields: [
        { name: 'player_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'player_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'surface_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'natural_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'show_play_pause_button', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Stop
blink.mojom.PictureInPictureSession_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureSession.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateMediaPosition
blink.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureSession.UpdateMediaPosition_Params',
      packedSize: 16,
      fields: [
        { name: 'media_position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PictureInPictureSessionPtr = blink.mojom.PictureInPictureSessionRemote;
blink.mojom.PictureInPictureSessionRequest = blink.mojom.PictureInPictureSessionPendingReceiver;


// Interface: PictureInPictureService
blink.mojom.PictureInPictureService = {};

blink.mojom.PictureInPictureServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PictureInPictureServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PictureInPictureService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PictureInPictureServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.PictureInPictureServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PictureInPictureServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startSession(player_id, player_remote, surface_id, natural_size, show_play_pause_button, observer, source_bounds) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PictureInPictureService_StartSession_ParamsSpec.$,
      blink.mojom.PictureInPictureService_StartSession_ResponseParamsSpec.$,
      [player_id, player_remote, surface_id, natural_size, show_play_pause_button, observer, source_bounds]);
  }

};

blink.mojom.PictureInPictureService.getRemote = function() {
  let remote = new blink.mojom.PictureInPictureServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PictureInPictureService',
    'context');
  return remote.$;
};

// ParamsSpec for StartSession
blink.mojom.PictureInPictureService_StartSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureService.StartSession_Params',
      packedSize: 64,
      fields: [
        { name: 'player_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'player_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'surface_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'natural_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'show_play_pause_button', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'source_bounds', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PictureInPictureService_StartSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PictureInPictureService.StartSession_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PictureInPictureServicePtr = blink.mojom.PictureInPictureServiceRemote;
blink.mojom.PictureInPictureServiceRequest = blink.mojom.PictureInPictureServicePendingReceiver;

