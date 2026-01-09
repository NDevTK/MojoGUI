// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/boot_phase_monitor.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: BootPhaseMonitorHost
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

};

arc.mojom.BootPhaseMonitorHost.getRemote = function() {
  let remote = new arc.mojom.BootPhaseMonitorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BootPhaseMonitorHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.BootPhaseMonitorHostPtr = arc.mojom.BootPhaseMonitorHostRemote;
arc.mojom.BootPhaseMonitorHostRequest = arc.mojom.BootPhaseMonitorHostPendingReceiver;


// Interface: BootPhaseMonitorInstance
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

};

arc.mojom.BootPhaseMonitorInstance.getRemote = function() {
  let remote = new arc.mojom.BootPhaseMonitorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BootPhaseMonitorInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.BootPhaseMonitorInstancePtr = arc.mojom.BootPhaseMonitorInstanceRemote;
arc.mojom.BootPhaseMonitorInstanceRequest = arc.mojom.BootPhaseMonitorInstancePendingReceiver;

