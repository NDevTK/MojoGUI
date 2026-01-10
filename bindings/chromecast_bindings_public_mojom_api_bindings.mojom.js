// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/bindings/public/mojom/api_bindings.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var blink = blink || {};

chromecast.mojom.ApiBindingSpec = { $: {} };
chromecast.mojom.ApiBindings = {};
chromecast.mojom.ApiBindings.$interfaceName = 'chromecast.mojom.ApiBindings';
chromecast.mojom.ApiBindings_GetAll_ParamsSpec = { $: {} };
chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec = { $: {} };
chromecast.mojom.ApiBindings_Connect_ParamsSpec = { $: {} };

// Struct: ApiBinding
mojo.internal.Struct(
    chromecast.mojom.ApiBindingSpec, 'chromecast.mojom.ApiBinding', [
      mojo.internal.StructField('script', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ApiBindings
mojo.internal.Struct(
    chromecast.mojom.ApiBindings_GetAll_ParamsSpec, 'chromecast.mojom.ApiBindings_GetAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec, 'chromecast.mojom.ApiBindings_GetAll_ResponseParams', [
      mojo.internal.StructField('bindings', 0, 0, mojo.internal.Array(chromecast.mojom.ApiBindingSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.ApiBindings_Connect_ParamsSpec, 'chromecast.mojom.ApiBindings_Connect_Params', [
      mojo.internal.StructField('port_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port', 8, 0, blink.mojom.MessagePortDescriptorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromecast.mojom.ApiBindingsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ApiBindingsRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ApiBindings';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ApiBindingsPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ApiBindingsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.ApiBindingsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAll() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.ApiBindings_GetAll_ParamsSpec,
      chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec,
      [],
      false);
  }

  connect(port_name, port) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.ApiBindings_Connect_ParamsSpec,
      null,
      [port_name, port],
      false);
  }

};

chromecast.mojom.ApiBindings.getRemote = function() {
  let remote = new chromecast.mojom.ApiBindingsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ApiBindings',
    'context');
  return remote.$;
};

chromecast.mojom.ApiBindingsReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.ApiBindings_GetAll_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAll (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromecast.mojom.ApiBindings_Connect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(chromecast.mojom.ApiBindings_GetAll_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAll');
          const result = this.impl.getAll();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.mojom.ApiBindings_GetAll_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.ApiBindings_Connect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.port_name, params.port);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.ApiBindingsReceiver = chromecast.mojom.ApiBindingsReceiver;

chromecast.mojom.ApiBindingsPtr = chromecast.mojom.ApiBindingsRemote;
chromecast.mojom.ApiBindingsRequest = chromecast.mojom.ApiBindingsPendingReceiver;

