// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/system_state.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.SystemAppRunningStateSpec = { $: {} };
arc.mojom.SystemStateHost = {};
arc.mojom.SystemStateHost.$interfaceName = 'arc.mojom.SystemStateHost';
arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec = { $: {} };
arc.mojom.SystemStateInstance = {};
arc.mojom.SystemStateInstance.$interfaceName = 'arc.mojom.SystemStateInstance';
arc.mojom.SystemStateInstance_Init_ParamsSpec = { $: {} };
arc.mojom.SystemStateInstance_Init_ResponseParamsSpec = { $: {} };

// Struct: SystemAppRunningState
mojo.internal.Struct(
    arc.mojom.SystemAppRunningStateSpec, 'arc.mojom.SystemAppRunningState', [
      mojo.internal.StructField('top_layer_app', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('foreground_app', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('background_app', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('performance_sensitive_app', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('background_service', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SystemStateHost
mojo.internal.Struct(
    arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec, 'arc.mojom.SystemStateHost_UpdateAppRunningState_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.SystemAppRunningStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.SystemStateHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.SystemStateHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SystemStateHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.SystemStateHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.SystemStateHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.SystemStateHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateAppRunningState(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec,
      null,
      [state],
      false);
  }

};

arc.mojom.SystemStateHost.getRemote = function() {
  let remote = new arc.mojom.SystemStateHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SystemStateHost',
    'context');
  return remote.$;
};

arc.mojom.SystemStateHostReceiver = class {
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
        
        // Try Method 0: UpdateAppRunningState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAppRunningState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
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
          const params = decoder.decodeStruct(arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateAppRunningState');
          const result = this.impl.updateAppRunningState(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.SystemStateHostReceiver = arc.mojom.SystemStateHostReceiver;

arc.mojom.SystemStateHostPtr = arc.mojom.SystemStateHostRemote;
arc.mojom.SystemStateHostRequest = arc.mojom.SystemStateHostPendingReceiver;


// Interface: SystemStateInstance
mojo.internal.Struct(
    arc.mojom.SystemStateInstance_Init_ParamsSpec, 'arc.mojom.SystemStateInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.SystemStateHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.SystemStateInstance_Init_ResponseParamsSpec, 'arc.mojom.SystemStateInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.SystemStateInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.SystemStateInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SystemStateInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.SystemStateInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.SystemStateInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.SystemStateInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.SystemStateInstance_Init_ParamsSpec,
      arc.mojom.SystemStateInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.SystemStateInstance.getRemote = function() {
  let remote = new arc.mojom.SystemStateInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SystemStateInstance',
    'context');
  return remote.$;
};

arc.mojom.SystemStateInstanceReceiver = class {
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.SystemStateInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
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
          const params = decoder.decodeStruct(arc.mojom.SystemStateInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.SystemStateInstance_Init_ResponseParamsSpec);
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

arc.mojom.SystemStateInstanceReceiver = arc.mojom.SystemStateInstanceReceiver;

arc.mojom.SystemStateInstancePtr = arc.mojom.SystemStateInstanceRemote;
arc.mojom.SystemStateInstanceRequest = arc.mojom.SystemStateInstancePendingReceiver;

