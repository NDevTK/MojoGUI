// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/nfc_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.NFCProvider = {};
device.mojom.NFCProvider.$interfaceName = 'device.mojom.NFCProvider';
device.mojom.NFCProvider_GetNFCForHost_ParamsSpec = { $: {} };
device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec = { $: {} };
device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec = { $: {} };

// Interface: NFCProvider
mojo.internal.Struct(
    device.mojom.NFCProvider_GetNFCForHost_ParamsSpec, 'device.mojom.NFCProvider_GetNFCForHost_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.NFCRemote), null, false, 0, undefined),
      mojo.internal.StructField('host_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec, 'device.mojom.NFCProvider_SuspendNFCOperations_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec, 'device.mojom.NFCProvider_ResumeNFCOperations_Params', [
    ],
    [[0, 8]]);

device.mojom.NFCProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.NFCProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.NFCProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.NFCProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.NFCProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.NFCProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getNFCForHost(host_id, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.NFCProvider_GetNFCForHost_ParamsSpec,
      null,
      [host_id, receiver],
      false);
  }

  suspendNFCOperations() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec,
      null,
      [],
      false);
  }

  resumeNFCOperations() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.NFCProvider.getRemote = function() {
  let remote = new device.mojom.NFCProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.NFCProvider',
    'context');
  return remote.$;
};

device.mojom.NFCProviderReceiver = class {
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
        
        // Try Method 0: GetNFCForHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.NFCProvider_GetNFCForHost_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNFCForHost (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SuspendNFCOperations
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuspendNFCOperations (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ResumeNFCOperations
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResumeNFCOperations (2)');
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
          const params = decoder.decodeStruct(device.mojom.NFCProvider_GetNFCForHost_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getNFCForHost');
          const result = this.impl.getNFCForHost(params.host_id, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.NFCProvider_SuspendNFCOperations_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suspendNFCOperations');
          const result = this.impl.suspendNFCOperations();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.NFCProvider_ResumeNFCOperations_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resumeNFCOperations');
          const result = this.impl.resumeNFCOperations();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.NFCProviderReceiver = device.mojom.NFCProviderReceiver;

device.mojom.NFCProviderPtr = device.mojom.NFCProviderRemote;
device.mojom.NFCProviderRequest = device.mojom.NFCProviderPendingReceiver;

