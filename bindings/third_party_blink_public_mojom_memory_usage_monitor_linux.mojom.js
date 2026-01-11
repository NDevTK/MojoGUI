// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/memory_usage_monitor_linux.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  setProcFiles(statm_file, status_file) {
    return this.$.setProcFiles(statm_file, status_file);
  }
};

blink.mojom.MemoryUsageMonitorLinuxRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MemoryUsageMonitorLinux', [
      { explicit: null },
    ]);
  }

  setProcFiles(statm_file, status_file) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MemoryUsageMonitorLinux', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.MemoryUsageMonitorLinux_SetProcFiles_ParamsSpec.$.structSpec);
          const result = this.impl.setProcFiles(params.statm_file, params.status_file);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.MemoryUsageMonitorLinuxReceiver = blink.mojom.MemoryUsageMonitorLinuxReceiver;

blink.mojom.MemoryUsageMonitorLinuxPtr = blink.mojom.MemoryUsageMonitorLinuxRemote;
blink.mojom.MemoryUsageMonitorLinuxRequest = blink.mojom.MemoryUsageMonitorLinuxPendingReceiver;

