// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/adbd.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: AdbdMonitorHost
arc.mojom.AdbdMonitorHost = {};

arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AdbdMonitorHost_AdbdStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AdbdMonitorHost_AdbdStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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

  adbdStarted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec,
      null,
      []);
  }

  adbdStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec,
      null,
      []);
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

// ParamsSpec for AdbdStarted
arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AdbdMonitorHost.AdbdStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for AdbdStopped
arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AdbdMonitorHost.AdbdStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.AdbdMonitorHostPtr = arc.mojom.AdbdMonitorHostRemote;
arc.mojom.AdbdMonitorHostRequest = arc.mojom.AdbdMonitorHostPendingReceiver;


// Interface: AdbdMonitorInstance
arc.mojom.AdbdMonitorInstance = {};

arc.mojom.AdbdMonitorInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AdbdMonitorInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AdbdMonitorHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AdbdMonitorInstance_Init_ParamsSpec,
      null,
      [host_remote]);
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

// ParamsSpec for Init
arc.mojom.AdbdMonitorInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AdbdMonitorInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AdbdMonitorHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.AdbdMonitorInstancePtr = arc.mojom.AdbdMonitorInstanceRemote;
arc.mojom.AdbdMonitorInstanceRequest = arc.mojom.AdbdMonitorInstancePendingReceiver;

