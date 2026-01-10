// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/legion_internals/legion_internals.mojom
// Module: legion_internals.mojom

'use strict';

// Module namespace
var legion_internals = legion_internals || {};
legion_internals.mojom = legion_internals.mojom || {};

legion_internals.mojom.LegionResponseSpec = { $: {} };
legion_internals.mojom.LegionInternalsPageHandler = {};
legion_internals.mojom.LegionInternalsPageHandler.$interfaceName = 'legion_internals.mojom.LegionInternalsPageHandler';
legion_internals.mojom.LegionInternalsPageHandler_Connect_ParamsSpec = { $: {} };
legion_internals.mojom.LegionInternalsPageHandler_Connect_ResponseParamsSpec = { $: {} };
legion_internals.mojom.LegionInternalsPageHandler_Close_ParamsSpec = { $: {} };
legion_internals.mojom.LegionInternalsPageHandler_Close_ResponseParamsSpec = { $: {} };
legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ParamsSpec = { $: {} };
legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ResponseParamsSpec = { $: {} };

// Struct: LegionResponse
mojo.internal.Struct(
    legion_internals.mojom.LegionResponseSpec, 'legion_internals.mojom.LegionResponse', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: LegionInternalsPageHandler
mojo.internal.Struct(
    legion_internals.mojom.LegionInternalsPageHandler_Connect_ParamsSpec, 'legion_internals.mojom.LegionInternalsPageHandler_Connect_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('api_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    legion_internals.mojom.LegionInternalsPageHandler_Connect_ResponseParamsSpec, 'legion_internals.mojom.LegionInternalsPageHandler_Connect_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    legion_internals.mojom.LegionInternalsPageHandler_Close_ParamsSpec, 'legion_internals.mojom.LegionInternalsPageHandler_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    legion_internals.mojom.LegionInternalsPageHandler_Close_ResponseParamsSpec, 'legion_internals.mojom.LegionInternalsPageHandler_Close_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ParamsSpec, 'legion_internals.mojom.LegionInternalsPageHandler_SendRequest_Params', [
      mojo.internal.StructField('feature_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ResponseParamsSpec, 'legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, legion_internals.mojom.LegionResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

legion_internals.mojom.LegionInternalsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

legion_internals.mojom.LegionInternalsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'legion_internals.mojom.LegionInternalsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      legion_internals.mojom.LegionInternalsPageHandlerPendingReceiver,
      handle);
    this.$ = new legion_internals.mojom.LegionInternalsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

legion_internals.mojom.LegionInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(url, api_key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      legion_internals.mojom.LegionInternalsPageHandler_Connect_ParamsSpec,
      legion_internals.mojom.LegionInternalsPageHandler_Connect_ResponseParamsSpec,
      [url, api_key],
      false);
  }

  close() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      legion_internals.mojom.LegionInternalsPageHandler_Close_ParamsSpec,
      legion_internals.mojom.LegionInternalsPageHandler_Close_ResponseParamsSpec,
      [],
      false);
  }

  sendRequest(feature_name, request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ParamsSpec,
      legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ResponseParamsSpec,
      [feature_name, request],
      false);
  }

};

legion_internals.mojom.LegionInternalsPageHandler.getRemote = function() {
  let remote = new legion_internals.mojom.LegionInternalsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'legion_internals.mojom.LegionInternalsPageHandler',
    'context');
  return remote.$;
};

legion_internals.mojom.LegionInternalsPageHandlerReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(legion_internals.mojom.LegionInternalsPageHandler_Connect_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(legion_internals.mojom.LegionInternalsPageHandler_Close_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SendRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendRequest (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
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
          const params = decoder.decodeStructInline(legion_internals.mojom.LegionInternalsPageHandler_Connect_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.url, params.api_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, legion_internals.mojom.LegionInternalsPageHandler_Connect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(legion_internals.mojom.LegionInternalsPageHandler_Close_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, legion_internals.mojom.LegionInternalsPageHandler_Close_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.sendRequest');
          const result = this.impl.sendRequest(params.feature_name, params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ResponseParamsSpec);
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

legion_internals.mojom.LegionInternalsPageHandlerReceiver = legion_internals.mojom.LegionInternalsPageHandlerReceiver;

legion_internals.mojom.LegionInternalsPageHandlerPtr = legion_internals.mojom.LegionInternalsPageHandlerRemote;
legion_internals.mojom.LegionInternalsPageHandlerRequest = legion_internals.mojom.LegionInternalsPageHandlerPendingReceiver;

