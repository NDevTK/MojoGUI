// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/conflicts/module_event_sink_win.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};

mojom.ModuleEventSink = {};
mojom.ModuleEventSink.$interfaceName = 'mojom.ModuleEventSink';
mojom.ModuleEventSink_OnModuleEvents_ParamsSpec = { $: {} };

// Interface: ModuleEventSink
mojo.internal.Struct(
    mojom.ModuleEventSink_OnModuleEvents_ParamsSpec, 'mojom.ModuleEventSink_OnModuleEvents_Params', [
      mojo.internal.StructField('module_load_addresses', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.ModuleEventSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.ModuleEventSinkRemote = class {
  static get $interfaceName() {
    return 'mojom.ModuleEventSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.ModuleEventSinkPendingReceiver,
      handle);
    this.$ = new mojom.ModuleEventSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.ModuleEventSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onModuleEvents(module_load_addresses) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.ModuleEventSink_OnModuleEvents_ParamsSpec,
      null,
      [module_load_addresses],
      false);
  }

};

mojom.ModuleEventSink.getRemote = function() {
  let remote = new mojom.ModuleEventSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.ModuleEventSink',
    'context');
  return remote.$;
};

mojom.ModuleEventSinkReceiver = class {
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
        
        // Try Method 0: OnModuleEvents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(mojom.ModuleEventSink_OnModuleEvents_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnModuleEvents (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(mojom.ModuleEventSink_OnModuleEvents_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onModuleEvents');
          const result = this.impl.onModuleEvents(params.module_load_addresses);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojom.ModuleEventSinkReceiver = mojom.ModuleEventSinkReceiver;

mojom.ModuleEventSinkPtr = mojom.ModuleEventSinkRemote;
mojom.ModuleEventSinkRequest = mojom.ModuleEventSinkPendingReceiver;

