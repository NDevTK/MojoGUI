// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/adbd.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: AdbdMonitorHost
arc.mojom.AdbdMonitorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AdbdMonitorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AdbdMonitorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AdbdMonitorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.AdbdMonitorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AdbdMonitorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.AdbdMonitorHost.getRemote = function() {
  let remote = new arc.mojom.AdbdMonitorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AdbdMonitorHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.AdbdMonitorHostPtr = arc.mojom.AdbdMonitorHostRemote;
arc.mojom.AdbdMonitorHostRequest = arc.mojom.AdbdMonitorHostPendingReceiver;


// Interface: AdbdMonitorInstance
arc.mojom.AdbdMonitorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AdbdMonitorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AdbdMonitorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AdbdMonitorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AdbdMonitorInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AdbdMonitorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.AdbdMonitorInstance.getRemote = function() {
  let remote = new arc.mojom.AdbdMonitorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AdbdMonitorInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.AdbdMonitorInstancePtr = arc.mojom.AdbdMonitorInstanceRemote;
arc.mojom.AdbdMonitorInstanceRequest = arc.mojom.AdbdMonitorInstancePendingReceiver;

