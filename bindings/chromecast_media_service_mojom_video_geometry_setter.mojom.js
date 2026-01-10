// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/media/service/mojom/video_geometry_setter.mojom
// Module: chromecast.media.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.mojom = chromecast.media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

chromecast.media.mojom.VideoGeometryChangeClient = {};
chromecast.media.mojom.VideoGeometryChangeClient.$interfaceName = 'chromecast.media.mojom.VideoGeometryChangeClient';
chromecast.media.mojom.VideoGeometryChangeClient_OnVideoGeometryChange_ParamsSpec = { $: {} };
chromecast.media.mojom.VideoGeometryChangeSubscriber = {};
chromecast.media.mojom.VideoGeometryChangeSubscriber.$interfaceName = 'chromecast.media.mojom.VideoGeometryChangeSubscriber';
chromecast.media.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ParamsSpec = { $: {} };
chromecast.media.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ResponseParamsSpec = { $: {} };
chromecast.media.mojom.VideoGeometrySetter = {};
chromecast.media.mojom.VideoGeometrySetter.$interfaceName = 'chromecast.media.mojom.VideoGeometrySetter';
chromecast.media.mojom.VideoGeometrySetter_SetVideoGeometry_ParamsSpec = { $: {} };

// Interface: VideoGeometryChangeClient
mojo.internal.Struct(
    chromecast.media.mojom.VideoGeometryChangeClient_OnVideoGeometryChange_ParamsSpec, 'chromecast.media.mojom.VideoGeometryChangeClient_OnVideoGeometryChange_Params', [
      mojo.internal.StructField('rect_f', 0, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('transform', 8, 0, gfx.mojom.OverlayTransformSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromecast.media.mojom.VideoGeometryChangeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.mojom.VideoGeometryChangeClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.VideoGeometryChangeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.mojom.VideoGeometryChangeClientPendingReceiver,
      handle);
    this.$ = new chromecast.media.mojom.VideoGeometryChangeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.media.mojom.VideoGeometryChangeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVideoGeometryChange(rect_f, transform) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.media.mojom.VideoGeometryChangeClient_OnVideoGeometryChange_ParamsSpec,
      null,
      [rect_f, transform]);
  }

};

chromecast.media.mojom.VideoGeometryChangeClient.getRemote = function() {
  let remote = new chromecast.media.mojom.VideoGeometryChangeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.VideoGeometryChangeClient',
    'context');
  return remote.$;
};

chromecast.media.mojom.VideoGeometryChangeClientPtr = chromecast.media.mojom.VideoGeometryChangeClientRemote;
chromecast.media.mojom.VideoGeometryChangeClientRequest = chromecast.media.mojom.VideoGeometryChangeClientPendingReceiver;


// Interface: VideoGeometryChangeSubscriber
mojo.internal.Struct(
    chromecast.media.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ParamsSpec, 'chromecast.media.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_Params', [
      mojo.internal.StructField('overlay_plane_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('client_pending_remote', 8, 0, mojo.internal.InterfaceProxy(chromecast.media.mojom.VideoGeometryChangeClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.media.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ResponseParamsSpec, 'chromecast.media.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ResponseParams', [
    ],
    [[0, 8]]);

chromecast.media.mojom.VideoGeometryChangeSubscriberPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.mojom.VideoGeometryChangeSubscriberRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.VideoGeometryChangeSubscriber';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.mojom.VideoGeometryChangeSubscriberPendingReceiver,
      handle);
    this.$ = new chromecast.media.mojom.VideoGeometryChangeSubscriberRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.media.mojom.VideoGeometryChangeSubscriberRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subscribeToVideoGeometryChange(overlay_plane_id, client_pending_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.media.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ParamsSpec,
      chromecast.media.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ResponseParamsSpec,
      [overlay_plane_id, client_pending_remote]);
  }

};

chromecast.media.mojom.VideoGeometryChangeSubscriber.getRemote = function() {
  let remote = new chromecast.media.mojom.VideoGeometryChangeSubscriberRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.VideoGeometryChangeSubscriber',
    'context');
  return remote.$;
};

chromecast.media.mojom.VideoGeometryChangeSubscriberPtr = chromecast.media.mojom.VideoGeometryChangeSubscriberRemote;
chromecast.media.mojom.VideoGeometryChangeSubscriberRequest = chromecast.media.mojom.VideoGeometryChangeSubscriberPendingReceiver;


// Interface: VideoGeometrySetter
mojo.internal.Struct(
    chromecast.media.mojom.VideoGeometrySetter_SetVideoGeometry_ParamsSpec, 'chromecast.media.mojom.VideoGeometrySetter_SetVideoGeometry_Params', [
      mojo.internal.StructField('rect_f', 0, 0, gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('transform', 8, 0, gfx.mojom.OverlayTransformSpec, null, false, 0, undefined),
      mojo.internal.StructField('overlay_plane_id', 16, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

chromecast.media.mojom.VideoGeometrySetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.mojom.VideoGeometrySetterRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.VideoGeometrySetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.mojom.VideoGeometrySetterPendingReceiver,
      handle);
    this.$ = new chromecast.media.mojom.VideoGeometrySetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.media.mojom.VideoGeometrySetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setVideoGeometry(rect_f, transform, overlay_plane_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.media.mojom.VideoGeometrySetter_SetVideoGeometry_ParamsSpec,
      null,
      [rect_f, transform, overlay_plane_id]);
  }

};

chromecast.media.mojom.VideoGeometrySetter.getRemote = function() {
  let remote = new chromecast.media.mojom.VideoGeometrySetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.VideoGeometrySetter',
    'context');
  return remote.$;
};

chromecast.media.mojom.VideoGeometrySetterPtr = chromecast.media.mojom.VideoGeometrySetterRemote;
chromecast.media.mojom.VideoGeometrySetterRequest = chromecast.media.mojom.VideoGeometrySetterPendingReceiver;

