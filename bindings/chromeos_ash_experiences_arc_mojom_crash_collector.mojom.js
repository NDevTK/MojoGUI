// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/crash_collector.mojom
// Module: arc.mojom

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
  dumpCrash(type, pipe, uptime) {
    return this.$.dumpCrash(type, pipe, uptime);
  }
  setBuildProperties(device, board, cpu_abi, fingerprint) {
    return this.$.setBuildProperties(device, board, cpu_abi, fingerprint);
  }
  dumpNativeCrash(exec_name, pid, timestamp, minidump_fd) {
    return this.$.dumpNativeCrash(exec_name, pid, timestamp, minidump_fd);
  }
  dumpKernelCrash(ramoops_handle) {
    return this.$.dumpKernelCrash(ramoops_handle);
  }
};

arc.mojom.CrashCollectorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrashCollectorHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  dumpCrash(type, pipe, uptime) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.CrashCollectorHost_DumpCrash_ParamsSpec,
      null,
      [type, pipe, uptime],
      false);
  }

  setBuildProperties(device, board, cpu_abi, fingerprint) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec,
      null,
      [device, board, cpu_abi, fingerprint],
      false);
  }

  dumpNativeCrash(exec_name, pid, timestamp, minidump_fd) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec,
      null,
      [exec_name, pid, timestamp, minidump_fd],
      false);
  }

  dumpKernelCrash(ramoops_handle) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('CrashCollectorHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.CrashCollectorHost_DumpCrash_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.CrashCollectorHost_DumpKernelCrash_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CrashCollectorHost_DumpCrash_ParamsSpec.$.structSpec);
          const result = this.impl.dumpCrash(params.type, params.pipe, params.uptime);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec.$.structSpec);
          const result = this.impl.setBuildProperties(params.device, params.board, params.cpu_abi, params.fingerprint);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec.$.structSpec);
          const result = this.impl.dumpNativeCrash(params.exec_name, params.pid, params.timestamp, params.minidump_fd);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CrashCollectorHost_DumpKernelCrash_ParamsSpec.$.structSpec);
          const result = this.impl.dumpKernelCrash(params.ramoops_handle);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.CrashCollectorHostReceiver = arc.mojom.CrashCollectorHostReceiver;

arc.mojom.CrashCollectorHostPtr = arc.mojom.CrashCollectorHostRemote;
arc.mojom.CrashCollectorHostRequest = arc.mojom.CrashCollectorHostPendingReceiver;


// Interface: CrashCollectorInstance
mojo.internal.Struct(
    arc.mojom.CrashCollectorInstance_Init_ParamsSpec, 'arc.mojom.CrashCollectorInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.CrashCollectorHostRemote), null, false, 0, undefined),
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
  init(host_remote) {
    return this.$.init(host_remote);
  }
};

arc.mojom.CrashCollectorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrashCollectorInstance', [
      { explicit: 1 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('CrashCollectorInstance', [
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.CrashCollectorInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.CrashCollectorInstance_Init_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

arc.mojom.CrashCollectorInstanceReceiver = arc.mojom.CrashCollectorInstanceReceiver;

arc.mojom.CrashCollectorInstancePtr = arc.mojom.CrashCollectorInstanceRemote;
arc.mojom.CrashCollectorInstanceRequest = arc.mojom.CrashCollectorInstancePendingReceiver;

