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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddListenerAndGetCurrentPosture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddListenerAndGetCurrentPosture (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OverrideDevicePostureForEmulation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OverrideDevicePostureForEmulation (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: DisableDevicePostureOverrideForEmulation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableDevicePostureOverrideForEmulation (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevicePostureProvider_AddListenerAndGetCurrentPosture_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addListenerAndGetCurrentPosture');
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
          const params = decoder.decodeStruct(blink.mojom.DevicePostureProvider_OverrideDevicePostureForEmulation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.overrideDevicePostureForEmulation');
          const result = this.impl.overrideDevicePostureForEmulation(params.posture);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevicePostureProvider_DisableDevicePostureOverrideForEmulation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disableDevicePostureOverrideForEmulation');
          const result = this.impl.disableDevicePostureOverrideForEmulation();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnPostureChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPostureChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevicePostureClient_OnPostureChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPostureChanged');
          const result = this.impl.onPostureChanged(params.posture);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevicePostureClientReceiver = blink.mojom.DevicePostureClientReceiver;

blink.mojom.DevicePostureClientPtr = blink.mojom.DevicePostureClientRemote;
blink.mojom.DevicePostureClientRequest = blink.mojom.DevicePostureClientPendingReceiver;

