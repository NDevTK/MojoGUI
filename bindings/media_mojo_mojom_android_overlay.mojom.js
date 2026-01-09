// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/android_overlay.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: AndroidOverlayProvider
media.mojom.AndroidOverlayProvider = {};

media.mojom.AndroidOverlayProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AndroidOverlayProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AndroidOverlayProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AndroidOverlayProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.AndroidOverlayProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AndroidOverlayProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createOverlay(overlay, client, config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AndroidOverlayProvider_CreateOverlay_ParamsSpec,
      null,
      null,
      [overlay, client, config],
      undefined,
      undefined
    );
  }

};

media.mojom.AndroidOverlayProvider.getRemote = function() {
  let remote = new media.mojom.AndroidOverlayProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AndroidOverlayProvider',
    'context');
  return remote.$;
};

// ParamsSpec for CreateOverlay
media.mojom.AndroidOverlayProvider_CreateOverlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlayProvider.CreateOverlay_Params',
      packedSize: 32,
      fields: [
        { name: 'overlay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'config', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
media.mojom.AndroidOverlayProviderPtr = media.mojom.AndroidOverlayProviderRemote;
media.mojom.AndroidOverlayProviderRequest = media.mojom.AndroidOverlayProviderPendingReceiver;


// Interface: AndroidOverlay
media.mojom.AndroidOverlay = {};

media.mojom.AndroidOverlayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AndroidOverlayRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AndroidOverlay';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AndroidOverlayPendingReceiver,
      handle);
    this.$ = new media.mojom.AndroidOverlayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AndroidOverlayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  scheduleLayout(rect) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AndroidOverlay_ScheduleLayout_ParamsSpec,
      null,
      null,
      [rect],
      undefined,
      undefined
    );
  }

};

media.mojom.AndroidOverlay.getRemote = function() {
  let remote = new media.mojom.AndroidOverlayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AndroidOverlay',
    'context');
  return remote.$;
};

// ParamsSpec for ScheduleLayout
media.mojom.AndroidOverlay_ScheduleLayout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlay.ScheduleLayout_Params',
      packedSize: 16,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.AndroidOverlayPtr = media.mojom.AndroidOverlayRemote;
media.mojom.AndroidOverlayRequest = media.mojom.AndroidOverlayPendingReceiver;


// Interface: AndroidOverlayClient
media.mojom.AndroidOverlayClient = {};

media.mojom.AndroidOverlayClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AndroidOverlayClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AndroidOverlayClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AndroidOverlayClientPendingReceiver,
      handle);
    this.$ = new media.mojom.AndroidOverlayClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AndroidOverlayClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSurfaceReady(surface_key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AndroidOverlayClient_OnSurfaceReady_ParamsSpec,
      null,
      null,
      [surface_key],
      undefined,
      undefined
    );
  }

  onDestroyed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AndroidOverlayClient_OnDestroyed_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onSynchronouslyDestroyed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ParamsSpec,
      null,
      null,
      [],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  onPowerEfficientState(is_power_efficient) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.AndroidOverlayClient_OnPowerEfficientState_ParamsSpec,
      null,
      null,
      [is_power_efficient],
      undefined,
      undefined
    );
  }

};

media.mojom.AndroidOverlayClient.getRemote = function() {
  let remote = new media.mojom.AndroidOverlayClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AndroidOverlayClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnSurfaceReady
media.mojom.AndroidOverlayClient_OnSurfaceReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlayClient.OnSurfaceReady_Params',
      packedSize: 16,
      fields: [
        { name: 'surface_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDestroyed
media.mojom.AndroidOverlayClient_OnDestroyed_ParamsSpec = {
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
media.mojom.AndroidOverlayClient_OnSynchronouslyDestroyed_ParamsSpec = {
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
media.mojom.AndroidOverlayClient_OnPowerEfficientState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AndroidOverlayClient.OnPowerEfficientState_Params',
      packedSize: 16,
      fields: [
        { name: 'is_power_efficient', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.AndroidOverlayClientPtr = media.mojom.AndroidOverlayClientRemote;
media.mojom.AndroidOverlayClientRequest = media.mojom.AndroidOverlayClientPendingReceiver;

