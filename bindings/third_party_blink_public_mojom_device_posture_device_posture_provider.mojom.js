// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/device_posture/device_posture_provider.mojom
// Module: blink.mojom

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
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.DevicePostureClientRemote), null, false, 0, undefined),
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
  addListenerAndGetCurrentPosture(client) {
    return this.$.addListenerAndGetCurrentPosture(client);
  }
  overrideDevicePostureForEmulation(posture) {
    return this.$.overrideDevicePostureForEmulation(posture);
  }
  disableDevicePostureOverrideForEmulation() {
    return this.$.disableDevicePostureOverrideForEmulation();
  }
};

blink.mojom.DevicePostureProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevicePostureProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addListenerAndGetCurrentPosture(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec,
      blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParamsSpec,
      [client],
      false);
  }

  overrideDevicePostureForEmulation(posture) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec,
      null,
      [posture],
      false);
  }

  disableDevicePostureOverrideForEmulation() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevicePostureProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec.$.structSpec);
          const result = this.impl.overrideDevicePostureForEmulation(params.posture);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec.$.structSpec);
          const result = this.impl.disableDevicePostureOverrideForEmulation();
          break;
        }
      }
      } catch (err) {}
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
  onPostureChanged(posture) {
    return this.$.onPostureChanged(posture);
  }
};

blink.mojom.DevicePostureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevicePostureClient', [
      { explicit: null },
    ]);
  }

  onPostureChanged(posture) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DevicePostureClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onPostureChanged(params.posture);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.DevicePostureClientReceiver = blink.mojom.DevicePostureClientReceiver;

blink.mojom.DevicePostureClientPtr = blink.mojom.DevicePostureClientRemote;
blink.mojom.DevicePostureClientRequest = blink.mojom.DevicePostureClientPendingReceiver;

