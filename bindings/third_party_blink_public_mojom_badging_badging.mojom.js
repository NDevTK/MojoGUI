// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/badging/badging.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.BadgeValueSpec = { $: {} };
blink.mojom.BadgeService = {};
blink.mojom.BadgeService.$interfaceName = 'blink.mojom.BadgeService';
blink.mojom.BadgeService_SetBadge_ParamsSpec = { $: {} };
blink.mojom.BadgeService_ClearBadge_ParamsSpec = { $: {} };

// Union: BadgeValue
mojo.internal.Union(
    blink.mojom.BadgeValueSpec, 'blink.mojom.BadgeValue', {
      'flag': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'number': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Interface: BadgeService
mojo.internal.Struct(
    blink.mojom.BadgeService_SetBadge_ParamsSpec, 'blink.mojom.BadgeService_SetBadge_Params', [
      mojo.internal.StructField('value', 0, 0, blink.mojom.BadgeValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BadgeService_ClearBadge_ParamsSpec, 'blink.mojom.BadgeService_ClearBadge_Params', [
    ],
    [[0, 8]]);

blink.mojom.BadgeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BadgeServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BadgeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BadgeServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.BadgeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BadgeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setBadge(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BadgeService_SetBadge_ParamsSpec,
      null,
      [value],
      false);
  }

  clearBadge() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BadgeService_ClearBadge_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.BadgeService.getRemote = function() {
  let remote = new blink.mojom.BadgeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BadgeService',
    'context');
  return remote.$;
};

blink.mojom.BadgeServiceReceiver = class {
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
        
        // Try Method 0: SetBadge
        try {
             decoder.decodeStruct(blink.mojom.BadgeService_SetBadge_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBadge (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: ClearBadge
        try {
             decoder.decodeStruct(blink.mojom.BadgeService_ClearBadge_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearBadge (1)');
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
          const params = decoder.decodeStruct(blink.mojom.BadgeService_SetBadge_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBadge');
          const result = this.impl.setBadge(params.value);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BadgeService_ClearBadge_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearBadge');
          const result = this.impl.clearBadge();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.BadgeServiceReceiver = blink.mojom.BadgeServiceReceiver;

blink.mojom.BadgeServicePtr = blink.mojom.BadgeServiceRemote;
blink.mojom.BadgeServiceRequest = blink.mojom.BadgeServicePendingReceiver;

