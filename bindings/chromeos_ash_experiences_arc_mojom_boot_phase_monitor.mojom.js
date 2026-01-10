// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/boot_phase_monitor.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: BootPhaseMonitorHost
arc.mojom.mojom.BootPhaseMonitorHost = {};

arc.mojom.mojom.BootPhaseMonitorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.BootPhaseMonitorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BootPhaseMonitorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.BootPhaseMonitorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.BootPhaseMonitorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.BootPhaseMonitorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBootCompleted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.mojom.BootPhaseMonitorHost.getRemote = function() {
  let remote = new arc.mojom.mojom.BootPhaseMonitorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BootPhaseMonitorHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnBootCompleted
arc.mojom.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BootPhaseMonitorHost.OnBootCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.BootPhaseMonitorHostPtr = arc.mojom.mojom.BootPhaseMonitorHostRemote;
arc.mojom.mojom.BootPhaseMonitorHostRequest = arc.mojom.mojom.BootPhaseMonitorHostPendingReceiver;


// Interface: BootPhaseMonitorInstance
arc.mojom.mojom.BootPhaseMonitorInstance = {};

arc.mojom.mojom.BootPhaseMonitorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.BootPhaseMonitorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BootPhaseMonitorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.BootPhaseMonitorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.BootPhaseMonitorInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.BootPhaseMonitorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.BootPhaseMonitorInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.BootPhaseMonitorInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.BootPhaseMonitorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BootPhaseMonitorInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.BootPhaseMonitorInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BootPhaseMonitorInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.BootPhaseMonitorHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.BootPhaseMonitorInstancePtr = arc.mojom.mojom.BootPhaseMonitorInstanceRemote;
arc.mojom.mojom.BootPhaseMonitorInstanceRequest = arc.mojom.mojom.BootPhaseMonitorInstancePendingReceiver;

