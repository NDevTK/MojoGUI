// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/device_posture/device_posture_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.DevicePostureTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.DevicePostureProvider = {};
blink.mojom.DevicePostureProvider.$interfaceName = 'blink.mojom.DevicePostureProvider';
blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec = { $: {} };
blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParamsSpec = { $: {} };
blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec = { $: {} };
blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec = { $: {} };
blink.mojom.DevicePostureClient = {};
blink.mojom.DevicePostureClient.$interfaceName = 'blink.mojom.DevicePostureClient';
blink.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec = { $: {} };

// Enum: DevicePostureType
blink.mojom.DevicePostureType = {
  kContinuous: 0,
  kFolded: 1,
};

// Interface: DevicePostureProvider
mojo.internal.Struct(
    blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec, 'blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.DevicePostureClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParamsSpec, 'blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams', [
      mojo.internal.StructField('posture', 0, 0, blink.mojom.DevicePostureTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec, 'blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_Params', [
      mojo.internal.StructField('posture', 0, 0, blink.mojom.DevicePostureTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec, 'blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_Params', [
    ],
    [[0, 8]]);

blink.mojom.DevicePostureProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevicePostureProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevicePostureProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevicePostureProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevicePostureProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevicePostureProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addListenerAndGetCurrentPosture(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec,
      blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParamsSpec,
      [client],
      false);
  }

  overrideDevicePostureForEmulation(posture) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec,
      null,
      [posture],
      false);
  }

  disableDevicePostureOverrideForEmulation() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.DevicePostureProvider.getRemote = function() {
  let remote = new blink.mojom.DevicePostureProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevicePostureProvider',
    'context');
  return remote.$;
};

blink.mojom.DevicePostureProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addListenerAndGetCurrentPosture(params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.overrideDevicePostureForEmulation(params.posture);
          break;
        }
        case 2: {
          const params = blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.disableDevicePostureOverrideForEmulation();
          break;
        }
      }
    }});
  }
};

blink.mojom.DevicePostureProviderReceiver = blink.mojom.DevicePostureProviderReceiver;

blink.mojom.DevicePostureProviderPtr = blink.mojom.DevicePostureProviderRemote;
blink.mojom.DevicePostureProviderRequest = blink.mojom.DevicePostureProviderPendingReceiver;


// Interface: DevicePostureClient
mojo.internal.Struct(
    blink.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec, 'blink.mojom.DevicePostureClient_OnPostureChanged_Params', [
      mojo.internal.StructField('posture', 0, 0, blink.mojom.DevicePostureTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DevicePostureClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevicePostureClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevicePostureClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevicePostureClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevicePostureClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevicePostureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPostureChanged(posture) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec,
      null,
      [posture],
      false);
  }

};

blink.mojom.DevicePostureClient.getRemote = function() {
  let remote = new blink.mojom.DevicePostureClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevicePostureClient',
    'context');
  return remote.$;
};

blink.mojom.DevicePostureClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPostureChanged(params.posture);
          break;
        }
      }
    }});
  }
};

blink.mojom.DevicePostureClientReceiver = blink.mojom.DevicePostureClientReceiver;

blink.mojom.DevicePostureClientPtr = blink.mojom.DevicePostureClientRemote;
blink.mojom.DevicePostureClientRequest = blink.mojom.DevicePostureClientPendingReceiver;

