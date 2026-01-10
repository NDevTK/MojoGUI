// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/crash_collector.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};

arc.mojom.CrashCollectorHost = {};
arc.mojom.CrashCollectorHost.$interfaceName = 'arc.mojom.CrashCollectorHost';
arc.mojom.CrashCollectorHost_DumpCrash_ParamsSpec = { $: {} };
arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec = { $: {} };
arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec = { $: {} };
arc.mojom.CrashCollectorHost_DumpKernelCrash_ParamsSpec = { $: {} };
arc.mojom.CrashCollectorInstance = {};
arc.mojom.CrashCollectorInstance.$interfaceName = 'arc.mojom.CrashCollectorInstance';
arc.mojom.CrashCollectorInstance_Init_ParamsSpec = { $: {} };
arc.mojom.CrashCollectorInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: CrashCollectorHost
mojo.internal.Struct(
    arc.mojom.CrashCollectorHost_DumpCrash_ParamsSpec, 'arc.mojom.CrashCollectorHost_DumpCrash_Params', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pipe', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('uptime', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 6, undefined),
    ],
    [[0, 24], [6, 32]]);

mojo.internal.Struct(
    arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec, 'arc.mojom.CrashCollectorHost_SetBuildProperties_Params', [
      mojo.internal.StructField('device', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('board', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cpu_abi', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fingerprint', 24, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 32], [3, 40]]);

mojo.internal.Struct(
    arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec, 'arc.mojom.CrashCollectorHost_DumpNativeCrash_Params', [
      mojo.internal.StructField('exec_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('pid', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('minidump_fd', 20, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.CrashCollectorHost_DumpKernelCrash_ParamsSpec, 'arc.mojom.CrashCollectorHost_DumpKernelCrash_Params', [
      mojo.internal.StructField('ramoops_handle', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.CrashCollectorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CrashCollectorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CrashCollectorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CrashCollectorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.CrashCollectorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.CrashCollectorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dumpCrash(type, pipe, uptime) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.CrashCollectorHost_DumpCrash_ParamsSpec,
      null,
      [type, pipe, uptime],
      false);
  }

  setBuildProperties(device, board, cpu_abi, fingerprint) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec,
      null,
      [device, board, cpu_abi, fingerprint],
      false);
  }

  dumpNativeCrash(exec_name, pid, timestamp, minidump_fd) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec,
      null,
      [exec_name, pid, timestamp, minidump_fd],
      false);
  }

  dumpKernelCrash(ramoops_handle) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.CrashCollectorHost_DumpKernelCrash_ParamsSpec,
      null,
      [ramoops_handle],
      false);
  }

};

arc.mojom.CrashCollectorHost.getRemote = function() {
  let remote = new arc.mojom.CrashCollectorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CrashCollectorHost',
    'context');
  return remote.$;
};

arc.mojom.CrashCollectorHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: DumpCrash
        try {
             decoder.decodeStruct(arc.mojom.CrashCollectorHost_DumpCrash_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DumpCrash (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: SetBuildProperties
        try {
             decoder.decodeStruct(arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBuildProperties (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: DumpNativeCrash
        try {
             decoder.decodeStruct(arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DumpNativeCrash (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: DumpKernelCrash
        try {
             decoder.decodeStruct(arc.mojom.CrashCollectorHost_DumpKernelCrash_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DumpKernelCrash (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.CrashCollectorHost_DumpCrash_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dumpCrash');
          const result = this.impl.dumpCrash(params.type, params.pipe, params.uptime);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBuildProperties');
          const result = this.impl.setBuildProperties(params.device, params.board, params.cpu_abi, params.fingerprint);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dumpNativeCrash');
          const result = this.impl.dumpNativeCrash(params.exec_name, params.pid, params.timestamp, params.minidump_fd);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.CrashCollectorHost_DumpKernelCrash_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dumpKernelCrash');
          const result = this.impl.dumpKernelCrash(params.ramoops_handle);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.CrashCollectorHostReceiver = arc.mojom.CrashCollectorHostReceiver;

arc.mojom.CrashCollectorHostPtr = arc.mojom.CrashCollectorHostRemote;
arc.mojom.CrashCollectorHostRequest = arc.mojom.CrashCollectorHostPendingReceiver;


// Interface: CrashCollectorInstance
mojo.internal.Struct(
    arc.mojom.CrashCollectorInstance_Init_ParamsSpec, 'arc.mojom.CrashCollectorInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CrashCollectorHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.CrashCollectorInstance_Init_ResponseParamsSpec, 'arc.mojom.CrashCollectorInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.CrashCollectorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.CrashCollectorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.CrashCollectorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.CrashCollectorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.CrashCollectorInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.CrashCollectorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.CrashCollectorInstance_Init_ParamsSpec,
      arc.mojom.CrashCollectorInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.CrashCollectorInstance.getRemote = function() {
  let remote = new arc.mojom.CrashCollectorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.CrashCollectorInstance',
    'context');
  return remote.$;
};

arc.mojom.CrashCollectorInstanceReceiver = class {
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
             decoder.decodeStruct(arc.mojom.CrashCollectorInstance_Init_ParamsSpec.$, message.header.headerSize);
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
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.CrashCollectorInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.CrashCollectorInstance_Init_ResponseParamsSpec);
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

arc.mojom.CrashCollectorInstanceReceiver = arc.mojom.CrashCollectorInstanceReceiver;

arc.mojom.CrashCollectorInstancePtr = arc.mojom.CrashCollectorInstanceRemote;
arc.mojom.CrashCollectorInstanceRequest = arc.mojom.CrashCollectorInstancePendingReceiver;

