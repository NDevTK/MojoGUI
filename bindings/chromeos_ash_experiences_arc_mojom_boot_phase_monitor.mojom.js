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
      []);
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

arc.mojom.BootPhaseMonitorHostPtr = arc.mojom.BootPhaseMonitorHostRemote;
arc.mojom.BootPhaseMonitorHostRequest = arc.mojom.BootPhaseMonitorHostPendingReceiver;


// Interface: BootPhaseMonitorInstance
mojo.internal.Struct(
    arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec, 'arc.mojom.BootPhaseMonitorInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.BootPhaseMonitorHostRemote), null, false, 0, undefined),
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
      [host_remote]);
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

arc.mojom.BootPhaseMonitorInstancePtr = arc.mojom.BootPhaseMonitorInstanceRemote;
arc.mojom.BootPhaseMonitorInstanceRequest = arc.mojom.BootPhaseMonitorInstancePendingReceiver;

