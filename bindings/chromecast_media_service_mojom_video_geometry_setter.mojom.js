// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/media/service/mojom/video_geometry_setter.mojom
// Module: chromecast.media.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.media.mojom = chromecast.media.media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: VideoGeometryChangeClient
chromecast.media.media.mojom.mojom.VideoGeometryChangeClient = {};

chromecast.media.media.mojom.mojom.VideoGeometryChangeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.media.mojom.mojom.VideoGeometryChangeClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.VideoGeometryChangeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.media.mojom.mojom.VideoGeometryChangeClientPendingReceiver,
      handle);
    this.$ = new chromecast.media.media.mojom.mojom.VideoGeometryChangeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.media.media.mojom.mojom.VideoGeometryChangeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVideoGeometryChange(rect_f, transform) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.media.media.mojom.mojom.VideoGeometryChangeClient_OnVideoGeometryChange_ParamsSpec,
      null,
      [rect_f, transform]);
  }

};

chromecast.media.media.mojom.mojom.VideoGeometryChangeClient.getRemote = function() {
  let remote = new chromecast.media.media.mojom.mojom.VideoGeometryChangeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.VideoGeometryChangeClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnVideoGeometryChange
chromecast.media.media.mojom.mojom.VideoGeometryChangeClient_OnVideoGeometryChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.VideoGeometryChangeClient.OnVideoGeometryChange_Params',
      packedSize: 24,
      fields: [
        { name: 'rect_f', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'transform', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.OverlayTransformSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromecast.media.media.mojom.mojom.VideoGeometryChangeClientPtr = chromecast.media.media.mojom.mojom.VideoGeometryChangeClientRemote;
chromecast.media.media.mojom.mojom.VideoGeometryChangeClientRequest = chromecast.media.media.mojom.mojom.VideoGeometryChangeClientPendingReceiver;


// Interface: VideoGeometryChangeSubscriber
chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriber = {};

chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriberPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriberRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.VideoGeometryChangeSubscriber';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriberPendingReceiver,
      handle);
    this.$ = new chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriberRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriberRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subscribeToVideoGeometryChange(overlay_plane_id, client_pending_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ParamsSpec,
      null,
      [overlay_plane_id, client_pending_remote]);
  }

};

chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriber.getRemote = function() {
  let remote = new chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriberRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.VideoGeometryChangeSubscriber',
    'context');
  return remote.$;
};

// ParamsSpec for SubscribeToVideoGeometryChange
chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.VideoGeometryChangeSubscriber.SubscribeToVideoGeometryChange_Params',
      packedSize: 24,
      fields: [
        { name: 'overlay_plane_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'client_pending_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.media.mojom.VideoGeometryChangeClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriberPtr = chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriberRemote;
chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriberRequest = chromecast.media.media.mojom.mojom.VideoGeometryChangeSubscriberPendingReceiver;


// Interface: VideoGeometrySetter
chromecast.media.media.mojom.mojom.VideoGeometrySetter = {};

chromecast.media.media.mojom.mojom.VideoGeometrySetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.media.media.mojom.mojom.VideoGeometrySetterRemote = class {
  static get $interfaceName() {
    return 'chromecast.media.mojom.VideoGeometrySetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.media.media.mojom.mojom.VideoGeometrySetterPendingReceiver,
      handle);
    this.$ = new chromecast.media.media.mojom.mojom.VideoGeometrySetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.media.media.mojom.mojom.VideoGeometrySetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setVideoGeometry(rect_f, transform, overlay_plane_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.media.media.mojom.mojom.VideoGeometrySetter_SetVideoGeometry_ParamsSpec,
      null,
      [rect_f, transform, overlay_plane_id]);
  }

};

chromecast.media.media.mojom.mojom.VideoGeometrySetter.getRemote = function() {
  let remote = new chromecast.media.media.mojom.mojom.VideoGeometrySetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.media.mojom.VideoGeometrySetter',
    'context');
  return remote.$;
};

// ParamsSpec for SetVideoGeometry
chromecast.media.media.mojom.mojom.VideoGeometrySetter_SetVideoGeometry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.VideoGeometrySetter.SetVideoGeometry_Params',
      packedSize: 32,
      fields: [
        { name: 'rect_f', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'transform', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.OverlayTransformSpec, nullable: false, minVersion: 0 },
        { name: 'overlay_plane_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
chromecast.media.media.mojom.mojom.VideoGeometrySetterPtr = chromecast.media.media.mojom.mojom.VideoGeometrySetterRemote;
chromecast.media.media.mojom.mojom.VideoGeometrySetterRequest = chromecast.media.media.mojom.mojom.VideoGeometrySetterPendingReceiver;

