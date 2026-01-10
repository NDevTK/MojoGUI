// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/crash_collector.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: CrashCollectorHost
arc.mojom.CrashCollectorHost = {};

arc.mojom.CrashCollectorHost_DumpCrash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CrashCollectorHost_DumpCrash_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'uptime', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 6 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 6, packedSize: 32}]
    }
  }
};

arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CrashCollectorHost_SetBuildProperties_Params',
      packedSize: 40,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'board', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cpu_abi', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fingerprint', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 3, packedSize: 40}]
    }
  }
};

arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CrashCollectorHost_DumpNativeCrash_Params',
      packedSize: 32,
      fields: [
        { name: 'exec_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'minidump_fd', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.CrashCollectorHost_DumpKernelCrash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CrashCollectorHost_DumpKernelCrash_Params',
      packedSize: 16,
      fields: [
        { name: 'ramoops_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [type, pipe, uptime]);
  }

  setBuildProperties(device, board, cpu_abi, fingerprint) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec,
      null,
      [device, board, cpu_abi, fingerprint]);
  }

  dumpNativeCrash(exec_name, pid, timestamp, minidump_fd) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec,
      null,
      [exec_name, pid, timestamp, minidump_fd]);
  }

  dumpKernelCrash(ramoops_handle) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.CrashCollectorHost_DumpKernelCrash_ParamsSpec,
      null,
      [ramoops_handle]);
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

// ParamsSpec for DumpCrash
arc.mojom.CrashCollectorHost_DumpCrash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CrashCollectorHost.DumpCrash_Params',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'uptime', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 6 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 6, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetBuildProperties
arc.mojom.CrashCollectorHost_SetBuildProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CrashCollectorHost.SetBuildProperties_Params',
      packedSize: 40,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'board', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cpu_abi', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fingerprint', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 3, packedSize: 40}]
    }
  }
};

// ParamsSpec for DumpNativeCrash
arc.mojom.CrashCollectorHost_DumpNativeCrash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CrashCollectorHost.DumpNativeCrash_Params',
      packedSize: 32,
      fields: [
        { name: 'exec_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'minidump_fd', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DumpKernelCrash
arc.mojom.CrashCollectorHost_DumpKernelCrash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CrashCollectorHost.DumpKernelCrash_Params',
      packedSize: 16,
      fields: [
        { name: 'ramoops_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.CrashCollectorHostPtr = arc.mojom.CrashCollectorHostRemote;
arc.mojom.CrashCollectorHostRequest = arc.mojom.CrashCollectorHostPendingReceiver;


// Interface: CrashCollectorInstance
arc.mojom.CrashCollectorInstance = {};

arc.mojom.CrashCollectorInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CrashCollectorInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.CrashCollectorHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      null,
      [host_remote]);
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

// ParamsSpec for Init
arc.mojom.CrashCollectorInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CrashCollectorInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.CrashCollectorHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.CrashCollectorInstancePtr = arc.mojom.CrashCollectorInstanceRemote;
arc.mojom.CrashCollectorInstanceRequest = arc.mojom.CrashCollectorInstancePendingReceiver;

