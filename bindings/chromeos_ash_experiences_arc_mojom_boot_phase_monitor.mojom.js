// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/boot_phase_monitor.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: BootPhaseMonitorHost
arc.mojom.BootPhaseMonitorHost = {};

arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BootPhaseMonitorHost_OnBootCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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

// ParamsSpec for OnBootCompleted
arc.mojom.BootPhaseMonitorHost_OnBootCompleted_ParamsSpec = {
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
arc.mojom.BootPhaseMonitorHostPtr = arc.mojom.BootPhaseMonitorHostRemote;
arc.mojom.BootPhaseMonitorHostRequest = arc.mojom.BootPhaseMonitorHostPendingReceiver;


// Interface: BootPhaseMonitorInstance
arc.mojom.BootPhaseMonitorInstance = {};

arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.BootPhaseMonitorInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.BootPhaseMonitorHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      null,
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

// ParamsSpec for Init
arc.mojom.BootPhaseMonitorInstance_Init_ParamsSpec = {
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
arc.mojom.BootPhaseMonitorInstancePtr = arc.mojom.BootPhaseMonitorInstanceRemote;
arc.mojom.BootPhaseMonitorInstanceRequest = arc.mojom.BootPhaseMonitorInstancePendingReceiver;

