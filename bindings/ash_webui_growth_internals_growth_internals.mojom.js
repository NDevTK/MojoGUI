// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/growth_internals/growth_internals.mojom
// Module: ash.growth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.growth = ash.growth || {};
ash.growth.mojom = ash.growth.mojom || {};

ash.growth.mojom.PageHandler = {};
ash.growth.mojom.PageHandler.$interfaceName = 'ash.growth.mojom.PageHandler';
ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec = { $: {} };
ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec = { $: {} };
ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec = { $: {} };

// Interface: PageHandler
mojo.internal.Struct(
    ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec, 'ash.growth.mojom.PageHandler_GetCampaignsLogs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec, 'ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParams', [
      mojo.internal.StructField('logs', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec, 'ash.growth.mojom.PageHandler_ClearAllEvents_Params', [
    ],
    [[0, 8]]);

ash.growth.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.growth.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.growth.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.growth.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.growth.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.growth.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCampaignsLogs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec,
      ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec,
      [],
      false);
  }

  clearAllEvents() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.growth.mojom.PageHandler.getRemote = function() {
  let remote = new ash.growth.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.growth.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.growth.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetCampaignsLogs
        try {
             decoder.decodeStruct(ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCampaignsLogs (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: ClearAllEvents
        try {
             decoder.decodeStruct(ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearAllEvents (1)');
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
          const params = decoder.decodeStruct(ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCampaignsLogs');
          const result = this.impl.getCampaignsLogs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearAllEvents');
          const result = this.impl.clearAllEvents();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.growth.mojom.PageHandlerReceiver = ash.growth.mojom.PageHandlerReceiver;

ash.growth.mojom.PageHandlerPtr = ash.growth.mojom.PageHandlerRemote;
ash.growth.mojom.PageHandlerRequest = ash.growth.mojom.PageHandlerPendingReceiver;

