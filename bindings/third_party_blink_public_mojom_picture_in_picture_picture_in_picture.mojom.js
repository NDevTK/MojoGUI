// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/picture_in_picture/picture_in_picture.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.PictureInPictureSessionObserver = {};
blink.mojom.PictureInPictureSessionObserver.$interfaceName = 'blink.mojom.PictureInPictureSessionObserver';
blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureSession = {};
blink.mojom.PictureInPictureSession.$interfaceName = 'blink.mojom.PictureInPictureSession';
blink.mojom.PictureInPictureSession_Update_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureSession_Stop_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureSession_Stop_ResponseParamsSpec = { $: {} };
blink.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureService = {};
blink.mojom.PictureInPictureService.$interfaceName = 'blink.mojom.PictureInPictureService';
blink.mojom.PictureInPictureService_StartSession_ParamsSpec = { $: {} };
blink.mojom.PictureInPictureService_StartSession_ResponseParamsSpec = { $: {} };

// Interface: PictureInPictureSessionObserver
mojo.internal.Struct(
    blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec, 'blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec, 'blink.mojom.PictureInPictureSessionObserver_OnStopped_Params', [
    ],
    [[0, 8]]);

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
      blink.mojom.PictureInPictureSessionObserver_OnWindowSizeChanged_ParamsSpec,
      null,
      [size]);
  }

  onStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PictureInPictureSessionObserver_OnStopped_ParamsSpec,
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

blink.mojom.PictureInPictureSessionObserverPtr = blink.mojom.PictureInPictureSessionObserverRemote;
blink.mojom.PictureInPictureSessionObserverRequest = blink.mojom.PictureInPictureSessionObserverPendingReceiver;


// Interface: PictureInPictureSession
mojo.internal.Struct(
    blink.mojom.PictureInPictureSession_Update_ParamsSpec, 'blink.mojom.PictureInPictureSession_Update_Params', [
      mojo.internal.StructField('player_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('player_remote', 8, 0, mojo.internal.AssociatedInterfaceProxy(media.mojom.MediaPlayerRemote), null, false, 0, undefined),
      mojo.internal.StructField('surface_id', 16, 0, viz.mojom.SurfaceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('natural_size', 24, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('show_play_pause_button', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.PictureInPictureSession_Stop_ParamsSpec, 'blink.mojom.PictureInPictureSession_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PictureInPictureSession_Stop_ResponseParamsSpec, 'blink.mojom.PictureInPictureSession_Stop_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec, 'blink.mojom.PictureInPictureSession_UpdateMediaPosition_Params', [
      mojo.internal.StructField('media_position', 0, 0, media_session.mojom.MediaPositionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      blink.mojom.PictureInPictureSession_Update_ParamsSpec,
      null,
      [player_id, player_remote, surface_id, natural_size, show_play_pause_button]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PictureInPictureSession_Stop_ParamsSpec,
      blink.mojom.PictureInPictureSession_Stop_ResponseParamsSpec,
      []);
  }

  updateMediaPosition(media_position) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PictureInPictureSession_UpdateMediaPosition_ParamsSpec,
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

blink.mojom.PictureInPictureSessionPtr = blink.mojom.PictureInPictureSessionRemote;
blink.mojom.PictureInPictureSessionRequest = blink.mojom.PictureInPictureSessionPendingReceiver;


// Interface: PictureInPictureService
mojo.internal.Struct(
    blink.mojom.PictureInPictureService_StartSession_ParamsSpec, 'blink.mojom.PictureInPictureService_StartSession_Params', [
      mojo.internal.StructField('player_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('player_remote', 8, 0, mojo.internal.AssociatedInterfaceProxy(media.mojom.MediaPlayerRemote), null, false, 0, undefined),
      mojo.internal.StructField('surface_id', 16, 0, viz.mojom.SurfaceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('natural_size', 24, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('show_play_pause_button', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('observer', 40, 0, mojo.internal.InterfaceProxy(blink.mojom.PictureInPictureSessionObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('source_bounds', 48, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    blink.mojom.PictureInPictureService_StartSession_ResponseParamsSpec, 'blink.mojom.PictureInPictureService_StartSession_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PictureInPictureSessionRemote), null, true, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      blink.mojom.PictureInPictureService_StartSession_ParamsSpec,
      blink.mojom.PictureInPictureService_StartSession_ResponseParamsSpec,
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

blink.mojom.PictureInPictureServicePtr = blink.mojom.PictureInPictureServiceRemote;
blink.mojom.PictureInPictureServiceRequest = blink.mojom.PictureInPictureServicePendingReceiver;

