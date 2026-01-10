// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/crash_collector.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

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
      mojo.internal.StructField('uptime', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 6, undefined),
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
      mojo.internal.StructField('pid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('minidump_fd', 24, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 40]]);

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

arc.mojom.CrashCollectorInstancePtr = arc.mojom.CrashCollectorInstanceRemote;
arc.mojom.CrashCollectorInstanceRequest = arc.mojom.CrashCollectorInstancePendingReceiver;

