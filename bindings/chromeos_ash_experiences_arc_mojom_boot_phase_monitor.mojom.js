// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/boot_phase_monitor.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.BootPhaseMonitorHost = {};
arc.mojom.BootPhaseMonitorHost.$interfaceName = 'arc.mojom.BootPhaseMonitorHost';
arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec = { $: {} };
arc.mojom.BootPhaseMonitorInstance = {};
arc.mojom.BootPhaseMonitorInstance.$interfaceName = 'arc.mojom.BootPhaseMonitorInstance';
arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec = { $: {} };
arc.mojom.BootPhaseMonitorInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: BootPhaseMonitorHost
mojo.internal.Struct(
    arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec, 'arc.mojom.BootPhaseMonitorHost_OnBootCompleted_Params', [
    ],
    [[0, 8]]);

arc.mojom.BootPhaseMonitorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.BootPhaseMonitorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BootPhaseMonitorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.BootPhaseMonitorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.BootPhaseMonitorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.BootPhaseMonitorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBootCompleted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.BootPhaseMonitorHost.getRemote = function() {
  let remote = new arc.mojom.BootPhaseMonitorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BootPhaseMonitorHost',
    'context');
  return remote.$;
};

arc.mojom.BootPhaseMonitorHostReceiver = class {
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
        
        // Try Method 0: OnBootCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBootCompleted (0)');
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
          const params = decoder.decodeStructInline(arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBootCompleted');
          const result = this.impl.onBootCompleted();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.BootPhaseMonitorHostReceiver = arc.mojom.BootPhaseMonitorHostReceiver;

arc.mojom.BootPhaseMonitorHostPtr = arc.mojom.BootPhaseMonitorHostRemote;
arc.mojom.BootPhaseMonitorHostRequest = arc.mojom.BootPhaseMonitorHostPendingReceiver;


// Interface: BootPhaseMonitorInstance
mojo.internal.Struct(
    arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec, 'arc.mojom.BootPhaseMonitorInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.BootPhaseMonitorHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.BootPhaseMonitorInstance_Init_ResponseParamsSpec, 'arc.mojom.BootPhaseMonitorInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.BootPhaseMonitorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.BootPhaseMonitorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BootPhaseMonitorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.BootPhaseMonitorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.BootPhaseMonitorInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.BootPhaseMonitorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec,
      arc.mojom.BootPhaseMonitorInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.BootPhaseMonitorInstance.getRemote = function() {
  let remote = new arc.mojom.BootPhaseMonitorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BootPhaseMonitorInstance',
    'context');
  return remote.$;
};

arc.mojom.BootPhaseMonitorInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
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
          const params = decoder.decodeStructInline(arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.BootPhaseMonitorInstance_Init_ResponseParamsSpec);
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

arc.mojom.BootPhaseMonitorInstanceReceiver = arc.mojom.BootPhaseMonitorInstanceReceiver;

arc.mojom.BootPhaseMonitorInstancePtr = arc.mojom.BootPhaseMonitorInstanceRemote;
arc.mojom.BootPhaseMonitorInstanceRequest = arc.mojom.BootPhaseMonitorInstancePendingReceiver;

