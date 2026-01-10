// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/android_overlay.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: AndroidOverlayConfig
media.mojom.mojom.AndroidOverlayConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlayConfig',
      packedSize: 32,
      fields: [
        { name: 'routing_token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'secure', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'power_efficient', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: AndroidOverlayProvider
media.mojom.mojom.AndroidOverlayProvider = {};

media.mojom.mojom.AndroidOverlayProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AndroidOverlayProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AndroidOverlayProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AndroidOverlayProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AndroidOverlayProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AndroidOverlayProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createOverlay(overlay, client, config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AndroidOverlayProvider_CreateOverlay_ParamsSpec,
      null,
      [overlay, client, config]);
  }

};

media.mojom.mojom.AndroidOverlayProvider.getRemote = function() {
  let remote = new media.mojom.mojom.AndroidOverlayProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AndroidOverlayProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateOverlay
media.mojom.mojom.AndroidOverlayProvider_CreateOverlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlayProvider.CreateOverlay_Params',
      packedSize: 32,
      fields: [
        { name: 'overlay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.AndroidOverlayRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.AndroidOverlayClientRemote), nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 16, packedBitOffset: 0, type: media.mojom.AndroidOverlayConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AndroidOverlayProviderPtr = media.mojom.mojom.AndroidOverlayProviderRemote;
media.mojom.mojom.AndroidOverlayProviderRequest = media.mojom.mojom.AndroidOverlayProviderPendingReceiver;


// Interface: AndroidOverlay
media.mojom.mojom.AndroidOverlay = {};

media.mojom.mojom.AndroidOverlayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AndroidOverlayRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AndroidOverlay';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AndroidOverlayPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AndroidOverlayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AndroidOverlayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  scheduleLayout(rect) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AndroidOverlay_ScheduleLayout_ParamsSpec,
      null,
      [rect]);
  }

};

media.mojom.mojom.AndroidOverlay.getRemote = function() {
  let remote = new media.mojom.mojom.AndroidOverlayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AndroidOverlay',
    'context');
  return remote.$;
};

// ParamsSpec for ScheduleLayout
media.mojom.mojom.AndroidOverlay_ScheduleLayout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlay.ScheduleLayout_Params',
      packedSize: 16,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AndroidOverlayPtr = media.mojom.mojom.AndroidOverlayRemote;
media.mojom.mojom.AndroidOverlayRequest = media.mojom.mojom.AndroidOverlayPendingReceiver;


// Interface: AndroidOverlayClient
media.mojom.mojom.AndroidOverlayClient = {};

media.mojom.mojom.AndroidOverlayClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AndroidOverlayClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AndroidOverlayClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AndroidOverlayClientPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AndroidOverlayClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AndroidOverlayClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSurfaceReady(surface_key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AndroidOverlayClient_OnSurfaceReady_ParamsSpec,
      null,
      [surface_key]);
  }

  onDestroyed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.AndroidOverlayClient_OnDestroyed_ParamsSpec,
      null,
      []);
  }

  onSynchronouslyDestroyed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ParamsSpec,
      null,
      []);
  }

  onPowerEfficientState(is_power_efficient) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.AndroidOverlayClient_OnPowerEfficientState_ParamsSpec,
      null,
      [is_power_efficient]);
  }

};

media.mojom.mojom.AndroidOverlayClient.getRemote = function() {
  let remote = new media.mojom.mojom.AndroidOverlayClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AndroidOverlayClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnSurfaceReady
media.mojom.mojom.AndroidOverlayClient_OnSurfaceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlayClient.OnSurfaceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'surface_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDestroyed
media.mojom.mojom.AndroidOverlayClient_OnDestroyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlayClient.OnDestroyed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSynchronouslyDestroyed
media.mojom.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlayClient.OnSynchronouslyDestroyed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnPowerEfficientState
media.mojom.mojom.AndroidOverlayClient_OnPowerEfficientState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlayClient.OnPowerEfficientState_Params',
      packedSize: 16,
      fields: [
        { name: 'is_power_efficient', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AndroidOverlayClientPtr = media.mojom.mojom.AndroidOverlayClientRemote;
media.mojom.mojom.AndroidOverlayClientRequest = media.mojom.mojom.AndroidOverlayClientPendingReceiver;

