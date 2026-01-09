// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/media/service/mojom/video_geometry_setter.mojom
// Module: chromecast.media.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.media = chromecast.media || {};
chromecast.media.mojom = chromecast.media.mojom || {};


// Interface: VideoGeometryChangeClient
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
      chromecast.media.mojom.VideoGeometryChangeClient_OnVideoGeometryChange_ParamsSpec.$,
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

// ParamsSpec for OnVideoGeometryChange
chromecast.media.mojom.VideoGeometryChangeClient_OnVideoGeometryChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.VideoGeometryChangeClient.OnVideoGeometryChange_Params',
      packedSize: 24,
      fields: [
        { name: 'rect_f', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'transform', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.media.mojom.VideoGeometryChangeClientPtr = chromecast.media.mojom.VideoGeometryChangeClientRemote;
chromecast.media.mojom.VideoGeometryChangeClientRequest = chromecast.media.mojom.VideoGeometryChangeClientPendingReceiver;


// Interface: VideoGeometryChangeSubscriber
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
      chromecast.media.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ParamsSpec.$,
      null,
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

// ParamsSpec for SubscribeToVideoGeometryChange
chromecast.media.mojom.VideoGeometryChangeSubscriber_SubscribeToVideoGeometryChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.VideoGeometryChangeSubscriber.SubscribeToVideoGeometryChange_Params',
      packedSize: 24,
      fields: [
        { name: 'overlay_plane_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_pending_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.media.mojom.VideoGeometryChangeSubscriberPtr = chromecast.media.mojom.VideoGeometryChangeSubscriberRemote;
chromecast.media.mojom.VideoGeometryChangeSubscriberRequest = chromecast.media.mojom.VideoGeometryChangeSubscriberPendingReceiver;


// Interface: VideoGeometrySetter
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
      chromecast.media.mojom.VideoGeometrySetter_SetVideoGeometry_ParamsSpec.$,
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

// ParamsSpec for SetVideoGeometry
chromecast.media.mojom.VideoGeometrySetter_SetVideoGeometry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.media.mojom.VideoGeometrySetter.SetVideoGeometry_Params',
      packedSize: 32,
      fields: [
        { name: 'rect_f', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'transform', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'overlay_plane_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.media.mojom.VideoGeometrySetterPtr = chromecast.media.mojom.VideoGeometrySetterRemote;
chromecast.media.mojom.VideoGeometrySetterRequest = chromecast.media.mojom.VideoGeometrySetterPendingReceiver;

