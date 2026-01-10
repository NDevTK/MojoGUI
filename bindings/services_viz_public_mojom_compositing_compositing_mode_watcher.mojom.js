// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositing_mode_watcher.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.CompositingModeWatcher = {};
viz.mojom.CompositingModeWatcher.$interfaceName = 'viz.mojom.CompositingModeWatcher';
viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec = { $: {} };
viz.mojom.CompositingModeReporter = {};
viz.mojom.CompositingModeReporter.$interfaceName = 'viz.mojom.CompositingModeReporter';
viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec = { $: {} };

// Interface: CompositingModeWatcher
mojo.internal.Struct(
    viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec, 'viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_Params', [
    ],
    [[0, 8]]);

viz.mojom.CompositingModeWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositingModeWatcherRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositingModeWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositingModeWatcherPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositingModeWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CompositingModeWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  compositingModeFallbackToSoftware() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec,
      null,
      [],
      false);
  }

};

viz.mojom.CompositingModeWatcher.getRemote = function() {
  let remote = new viz.mojom.CompositingModeWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositingModeWatcher',
    'context');
  return remote.$;
};

viz.mojom.CompositingModeWatcherReceiver = class {
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
        
        // Try Method 0: CompositingModeFallbackToSoftware
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CompositingModeFallbackToSoftware (0)');
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
          const params = decoder.decodeStruct(viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.compositingModeFallbackToSoftware');
          const result = this.impl.compositingModeFallbackToSoftware();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.CompositingModeWatcherReceiver = viz.mojom.CompositingModeWatcherReceiver;

viz.mojom.CompositingModeWatcherPtr = viz.mojom.CompositingModeWatcherRemote;
viz.mojom.CompositingModeWatcherRequest = viz.mojom.CompositingModeWatcherPendingReceiver;


// Interface: CompositingModeReporter
mojo.internal.Struct(
    viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec, 'viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_Params', [
      mojo.internal.StructField('watcher', 0, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositingModeWatcherSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.CompositingModeReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositingModeReporterRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositingModeReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositingModeReporterPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositingModeReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CompositingModeReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addCompositingModeWatcher(watcher) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec,
      null,
      [watcher],
      false);
  }

};

viz.mojom.CompositingModeReporter.getRemote = function() {
  let remote = new viz.mojom.CompositingModeReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositingModeReporter',
    'context');
  return remote.$;
};

viz.mojom.CompositingModeReporterReceiver = class {
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
        
        // Try Method 0: AddCompositingModeWatcher
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCompositingModeWatcher (0)');
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
          const params = decoder.decodeStruct(viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addCompositingModeWatcher');
          const result = this.impl.addCompositingModeWatcher(params.watcher);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.CompositingModeReporterReceiver = viz.mojom.CompositingModeReporterReceiver;

viz.mojom.CompositingModeReporterPtr = viz.mojom.CompositingModeReporterRemote;
viz.mojom.CompositingModeReporterRequest = viz.mojom.CompositingModeReporterPendingReceiver;

