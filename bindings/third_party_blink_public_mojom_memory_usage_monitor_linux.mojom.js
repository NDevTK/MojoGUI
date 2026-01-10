// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/memory_usage_monitor_linux.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.MemoryUsageMonitorLinux = {};
blink.mojom.MemoryUsageMonitorLinux.$interfaceName = 'blink.mojom.MemoryUsageMonitorLinux';
blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec = { $: {} };

// Interface: MemoryUsageMonitorLinux
mojo.internal.Struct(
    blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec, 'blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_Params', [
      mojo.internal.StructField('statm_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_file', 8, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.MemoryUsageMonitorLinuxPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.MemoryUsageMonitorLinuxRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.MemoryUsageMonitorLinux';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.MemoryUsageMonitorLinuxPendingReceiver,
      handle);
    this.$ = new blink.mojom.MemoryUsageMonitorLinuxRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.MemoryUsageMonitorLinuxRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setProcFiles(statm_file, status_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec,
      null,
      [statm_file, status_file],
      false);
  }

};

blink.mojom.MemoryUsageMonitorLinux.getRemote = function() {
  let remote = new blink.mojom.MemoryUsageMonitorLinuxRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.MemoryUsageMonitorLinux',
    'context');
  return remote.$;
};

blink.mojom.MemoryUsageMonitorLinuxReceiver = class {
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
        
        // Try Method 0: SetProcFiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProcFiles (0)');
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
          const params = decoder.decodeStruct(blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setProcFiles');
          const result = this.impl.setProcFiles(params.statm_file, params.status_file);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.MemoryUsageMonitorLinuxReceiver = blink.mojom.MemoryUsageMonitorLinuxReceiver;

blink.mojom.MemoryUsageMonitorLinuxPtr = blink.mojom.MemoryUsageMonitorLinuxRemote;
blink.mojom.MemoryUsageMonitorLinuxRequest = blink.mojom.MemoryUsageMonitorLinuxPendingReceiver;

