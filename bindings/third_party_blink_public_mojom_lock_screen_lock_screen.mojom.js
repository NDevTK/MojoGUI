// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/lock_screen/lock_screen.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.LockScreenServiceStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.LockScreenService = {};
blink.mojom.LockScreenService.$interfaceName = 'blink.mojom.LockScreenService';
blink.mojom.LockScreenService_GetKeys_ParamsSpec = { $: {} };
blink.mojom.LockScreenService_GetKeys_ResponseParamsSpec = { $: {} };
blink.mojom.LockScreenService_SetData_ParamsSpec = { $: {} };
blink.mojom.LockScreenService_SetData_ResponseParamsSpec = { $: {} };

// Enum: LockScreenServiceStatus
blink.mojom.LockScreenServiceStatus = {
  kSuccess: 0,
  kNotAllowedFromContext: 1,
  kWriteError: 2,
};

// Interface: LockScreenService
mojo.internal.Struct(
    blink.mojom.LockScreenService_GetKeys_ParamsSpec, 'blink.mojom.LockScreenService_GetKeys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LockScreenService_GetKeys_ResponseParamsSpec, 'blink.mojom.LockScreenService_GetKeys_ResponseParams', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LockScreenService_SetData_ParamsSpec, 'blink.mojom.LockScreenService_SetData_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.LockScreenService_SetData_ResponseParamsSpec, 'blink.mojom.LockScreenService_SetData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.LockScreenServiceStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.LockScreenServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LockScreenServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockScreenService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LockScreenServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.LockScreenServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LockScreenServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getKeys() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LockScreenService_GetKeys_ParamsSpec,
      blink.mojom.LockScreenService_GetKeys_ResponseParamsSpec,
      [],
      false);
  }

  setData(key, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LockScreenService_SetData_ParamsSpec,
      blink.mojom.LockScreenService_SetData_ResponseParamsSpec,
      [key, data],
      false);
  }

};

blink.mojom.LockScreenService.getRemote = function() {
  let remote = new blink.mojom.LockScreenServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockScreenService',
    'context');
  return remote.$;
};

blink.mojom.LockScreenServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: GetKeys
        try {
             decoder.decodeStruct(blink.mojom.LockScreenService_GetKeys_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetKeys (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: SetData
        try {
             decoder.decodeStruct(blink.mojom.LockScreenService_SetData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetData (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.LockScreenService_GetKeys_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getKeys');
          const result = this.impl.getKeys();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LockScreenService_GetKeys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.LockScreenService_SetData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setData');
          const result = this.impl.setData(params.key, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LockScreenService_SetData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.LockScreenServiceReceiver = blink.mojom.LockScreenServiceReceiver;

blink.mojom.LockScreenServicePtr = blink.mojom.LockScreenServiceRemote;
blink.mojom.LockScreenServiceRequest = blink.mojom.LockScreenServicePendingReceiver;

