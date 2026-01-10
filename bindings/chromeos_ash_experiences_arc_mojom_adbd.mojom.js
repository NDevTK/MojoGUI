// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/adbd.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.AdbdMonitorHost = {};
arc.mojom.AdbdMonitorHost.$interfaceName = 'arc.mojom.AdbdMonitorHost';
arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec = { $: {} };
arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec = { $: {} };
arc.mojom.AdbdMonitorInstance = {};
arc.mojom.AdbdMonitorInstance.$interfaceName = 'arc.mojom.AdbdMonitorInstance';
arc.mojom.AdbdMonitorInstance_Init_ParamsSpec = { $: {} };
arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: AdbdMonitorHost
mojo.internal.Struct(
    arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec, 'arc.mojom.AdbdMonitorHost_AdbdStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec, 'arc.mojom.AdbdMonitorHost_AdbdStopped_Params', [
    ],
    [[0, 8]]);

arc.mojom.AdbdMonitorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AdbdMonitorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AdbdMonitorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AdbdMonitorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.AdbdMonitorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AdbdMonitorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  adbdStarted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec,
      null,
      [],
      false);
  }

  adbdStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.AdbdMonitorHost.getRemote = function() {
  let remote = new arc.mojom.AdbdMonitorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AdbdMonitorHost',
    'context');
  return remote.$;
};

arc.mojom.AdbdMonitorHostReceiver = class {
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
        
        // Try Method 0: AdbdStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AdbdStarted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: AdbdStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AdbdStopped (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
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
          const params = decoder.decodeStruct(arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.adbdStarted');
          const result = this.impl.adbdStarted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.adbdStopped');
          const result = this.impl.adbdStopped();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.AdbdMonitorHostReceiver = arc.mojom.AdbdMonitorHostReceiver;

arc.mojom.AdbdMonitorHostPtr = arc.mojom.AdbdMonitorHostRemote;
arc.mojom.AdbdMonitorHostRequest = arc.mojom.AdbdMonitorHostPendingReceiver;


// Interface: AdbdMonitorInstance
mojo.internal.Struct(
    arc.mojom.AdbdMonitorInstance_Init_ParamsSpec, 'arc.mojom.AdbdMonitorInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AdbdMonitorHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec, 'arc.mojom.AdbdMonitorInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.AdbdMonitorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AdbdMonitorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AdbdMonitorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AdbdMonitorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AdbdMonitorInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AdbdMonitorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AdbdMonitorInstance_Init_ParamsSpec,
      arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.AdbdMonitorInstance.getRemote = function() {
  let remote = new arc.mojom.AdbdMonitorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AdbdMonitorInstance',
    'context');
  return remote.$;
};

arc.mojom.AdbdMonitorInstanceReceiver = class {
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
             decoder.decodeStruct(arc.mojom.AdbdMonitorInstance_Init_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(arc.mojom.AdbdMonitorInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec);
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

arc.mojom.AdbdMonitorInstanceReceiver = arc.mojom.AdbdMonitorInstanceReceiver;

arc.mojom.AdbdMonitorInstancePtr = arc.mojom.AdbdMonitorInstanceRemote;
arc.mojom.AdbdMonitorInstanceRequest = arc.mojom.AdbdMonitorInstancePendingReceiver;

