// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/wake_lock.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.WakeLockHost = {};
arc.mojom.WakeLockHost.$interfaceName = 'arc.mojom.WakeLockHost';
arc.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec = { $: {} };
arc.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParamsSpec = { $: {} };
arc.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec = { $: {} };
arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec = { $: {} };
arc.mojom.WakeLockInstance = {};
arc.mojom.WakeLockInstance.$interfaceName = 'arc.mojom.WakeLockInstance';
arc.mojom.WakeLockInstance_Init_ParamsSpec = { $: {} };
arc.mojom.WakeLockInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: WakeLockHost
mojo.internal.Struct(
    arc.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec, 'arc.mojom.WakeLockHost_AcquirePartialWakeLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParamsSpec, 'arc.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec, 'arc.mojom.WakeLockHost_ReleasePartialWakeLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec, 'arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.WakeLockHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.WakeLockHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WakeLockHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.WakeLockHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.WakeLockHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.WakeLockHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  acquirePartialWakeLock() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec,
      arc.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParamsSpec,
      [],
      false);
  }

  releasePartialWakeLock() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec,
      arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.WakeLockHost.getRemote = function() {
  let remote = new arc.mojom.WakeLockHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WakeLockHost',
    'context');
  return remote.$;
};

arc.mojom.WakeLockHostReceiver = class {
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
        
        // Try Method 0: AcquirePartialWakeLock
        try {
             decoder.decodeStruct(arc.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquirePartialWakeLock (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: ReleasePartialWakeLock
        try {
             decoder.decodeStruct(arc.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleasePartialWakeLock (1)');
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
          const params = decoder.decodeStruct(arc.mojom.WakeLockHost_AcquirePartialWakeLock_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.acquirePartialWakeLock');
          const result = this.impl.acquirePartialWakeLock();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.WakeLockHost_AcquirePartialWakeLock_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.WakeLockHost_ReleasePartialWakeLock_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.releasePartialWakeLock');
          const result = this.impl.releasePartialWakeLock();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.WakeLockHost_ReleasePartialWakeLock_ResponseParamsSpec);
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

arc.mojom.WakeLockHostReceiver = arc.mojom.WakeLockHostReceiver;

arc.mojom.WakeLockHostPtr = arc.mojom.WakeLockHostRemote;
arc.mojom.WakeLockHostRequest = arc.mojom.WakeLockHostPendingReceiver;


// Interface: WakeLockInstance
mojo.internal.Struct(
    arc.mojom.WakeLockInstance_Init_ParamsSpec, 'arc.mojom.WakeLockInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.WakeLockHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.WakeLockInstance_Init_ResponseParamsSpec, 'arc.mojom.WakeLockInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.WakeLockInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.WakeLockInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.WakeLockInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.WakeLockInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.WakeLockInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.WakeLockInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.WakeLockInstance_Init_ParamsSpec,
      arc.mojom.WakeLockInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.WakeLockInstance.getRemote = function() {
  let remote = new arc.mojom.WakeLockInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.WakeLockInstance',
    'context');
  return remote.$;
};

arc.mojom.WakeLockInstanceReceiver = class {
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
        try {
             decoder.decodeStruct(arc.mojom.WakeLockInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
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
          const params = decoder.decodeStruct(arc.mojom.WakeLockInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.WakeLockInstance_Init_ResponseParamsSpec);
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

arc.mojom.WakeLockInstanceReceiver = arc.mojom.WakeLockInstanceReceiver;

arc.mojom.WakeLockInstancePtr = arc.mojom.WakeLockInstanceRemote;
arc.mojom.WakeLockInstanceRequest = arc.mojom.WakeLockInstancePendingReceiver;

