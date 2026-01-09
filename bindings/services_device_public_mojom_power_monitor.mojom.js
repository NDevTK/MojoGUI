// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/power_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: PowerMonitor
device.mojom.PowerMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PowerMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PowerMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PowerMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.PowerMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.PowerMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.PowerMonitor_AddClient_ParamsSpec.$,
      null,
      [client]);
  }

};

device.mojom.PowerMonitor.getRemote = function() {
  let remote = new device.mojom.PowerMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PowerMonitor',
    'context');
  return remote.$;
}};

// ParamsSpec for AddClient
device.mojom.PowerMonitor_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PowerMonitor.AddClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
device.mojom.PowerMonitorPtr = device.mojom.PowerMonitorRemote;
device.mojom.PowerMonitorRequest = device.mojom.PowerMonitorPendingReceiver;


// Interface: PowerMonitorClient
device.mojom.PowerMonitorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PowerMonitorClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PowerMonitorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PowerMonitorClientPendingReceiver,
      handle);
    this.$ = new device.mojom.PowerMonitorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.PowerMonitorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  powerStateChange(battery_power_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec.$,
      null,
      [battery_power_status]);
  }

  suspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.PowerMonitorClient_Suspend_ParamsSpec.$,
      null,
      []);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.PowerMonitorClient_Resume_ParamsSpec.$,
      null,
      []);
  }

};

device.mojom.PowerMonitorClient.getRemote = function() {
  let remote = new device.mojom.PowerMonitorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PowerMonitorClient',
    'context');
  return remote.$;
}};

// ParamsSpec for PowerStateChange
device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PowerMonitorClient.PowerStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'battery_power_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Suspend
device.mojom.PowerMonitorClient_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PowerMonitorClient.Suspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Resume
device.mojom.PowerMonitorClient_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PowerMonitorClient.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
device.mojom.PowerMonitorClientPtr = device.mojom.PowerMonitorClientRemote;
device.mojom.PowerMonitorClientRequest = device.mojom.PowerMonitorClientPendingReceiver;

