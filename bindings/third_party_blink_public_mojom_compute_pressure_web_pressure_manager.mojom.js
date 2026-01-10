// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/compute_pressure/web_pressure_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Interface: WebPressureManager
blink.mojom.mojom.WebPressureManager = {};

blink.mojom.mojom.WebPressureManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebPressureManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPressureManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebPressureManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebPressureManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebPressureManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addClient(source, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebPressureManager_AddClient_ParamsSpec,
      blink.mojom.mojom.WebPressureManager_AddClient_ResponseParamsSpec,
      [source, client]);
  }

};

blink.mojom.mojom.WebPressureManager.getRemote = function() {
  let remote = new blink.mojom.mojom.WebPressureManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPressureManager',
    'context');
  return remote.$;
};

// ParamsSpec for AddClient
blink.mojom.mojom.WebPressureManager_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPressureManager.AddClient_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.WebPressureClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.WebPressureManager_AddClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPressureManager.AddClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PressureManagerAddClientResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebPressureManagerPtr = blink.mojom.mojom.WebPressureManagerRemote;
blink.mojom.mojom.WebPressureManagerRequest = blink.mojom.mojom.WebPressureManagerPendingReceiver;


// Interface: WebPressureClient
blink.mojom.mojom.WebPressureClient = {};

blink.mojom.mojom.WebPressureClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebPressureClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPressureClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebPressureClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebPressureClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebPressureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPressureUpdated(update) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebPressureClient_OnPressureUpdated_ParamsSpec,
      null,
      [update]);
  }

};

blink.mojom.mojom.WebPressureClient.getRemote = function() {
  let remote = new blink.mojom.mojom.WebPressureClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPressureClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnPressureUpdated
blink.mojom.mojom.WebPressureClient_OnPressureUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPressureClient.OnPressureUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebPressureUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebPressureClientPtr = blink.mojom.mojom.WebPressureClientRemote;
blink.mojom.mojom.WebPressureClientRequest = blink.mojom.mojom.WebPressureClientPendingReceiver;

