// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/vsync_parameter_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};

viz.mojom.VSyncParameterObserver = {};
viz.mojom.VSyncParameterObserver.$interfaceName = 'viz.mojom.VSyncParameterObserver';
viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec = { $: {} };

// Interface: VSyncParameterObserver
mojo.internal.Struct(
    viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec, 'viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_Params', [
      mojo.internal.StructField('timebase', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interval', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

viz.mojom.VSyncParameterObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.VSyncParameterObserverRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.VSyncParameterObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.VSyncParameterObserverPendingReceiver,
      handle);
    this.$ = new viz.mojom.VSyncParameterObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.VSyncParameterObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUpdateVSyncParameters(timebase, interval) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec,
      null,
      [timebase, interval],
      false);
  }

};

viz.mojom.VSyncParameterObserver.getRemote = function() {
  let remote = new viz.mojom.VSyncParameterObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.VSyncParameterObserver',
    'context');
  return remote.$;
};

viz.mojom.VSyncParameterObserverReceiver = class {
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
        
        // Try Method 0: OnUpdateVSyncParameters
        try {
             decoder.decodeStruct(viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUpdateVSyncParameters (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.VSyncParameterObserver_OnUpdateVSyncParameters_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onUpdateVSyncParameters');
          const result = this.impl.onUpdateVSyncParameters(params.timebase, params.interval);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.VSyncParameterObserverReceiver = viz.mojom.VSyncParameterObserverReceiver;

viz.mojom.VSyncParameterObserverPtr = viz.mojom.VSyncParameterObserverRemote;
viz.mojom.VSyncParameterObserverRequest = viz.mojom.VSyncParameterObserverPendingReceiver;

