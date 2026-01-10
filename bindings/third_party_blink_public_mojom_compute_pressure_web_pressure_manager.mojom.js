// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/compute_pressure/web_pressure_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WebPressureManager
blink.mojom.WebPressureManager = {};

blink.mojom.WebPressureManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebPressureManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPressureManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebPressureManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebPressureManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebPressureManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addClient(source, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebPressureManager_AddClient_ParamsSpec,
      blink.mojom.WebPressureManager_AddClient_ResponseParamsSpec,
      [source, client]);
  }

};

blink.mojom.WebPressureManager.getRemote = function() {
  let remote = new blink.mojom.WebPressureManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPressureManager',
    'context');
  return remote.$;
};

// ParamsSpec for AddClient
blink.mojom.WebPressureManager_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPressureManager.AddClient_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.WebPressureManager_AddClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PressureManagerAddClientResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebPressureManagerPtr = blink.mojom.WebPressureManagerRemote;
blink.mojom.WebPressureManagerRequest = blink.mojom.WebPressureManagerPendingReceiver;


// Interface: WebPressureClient
blink.mojom.WebPressureClient = {};

blink.mojom.WebPressureClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebPressureClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebPressureClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebPressureClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebPressureClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebPressureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPressureUpdated(update) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebPressureClient_OnPressureUpdated_ParamsSpec,
      null,
      [update]);
  }

};

blink.mojom.WebPressureClient.getRemote = function() {
  let remote = new blink.mojom.WebPressureClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebPressureClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnPressureUpdated
blink.mojom.WebPressureClient_OnPressureUpdated_ParamsSpec = {
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
blink.mojom.WebPressureClientPtr = blink.mojom.WebPressureClientRemote;
blink.mojom.WebPressureClientRequest = blink.mojom.WebPressureClientPendingReceiver;

