// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/power_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: PowerMonitor
device.mojom.mojom.PowerMonitor = {};

device.mojom.mojom.PowerMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.PowerMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PowerMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.PowerMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.PowerMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.PowerMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.PowerMonitor_AddClient_ParamsSpec,
      null,
      [client]);
  }

};

device.mojom.mojom.PowerMonitor.getRemote = function() {
  let remote = new device.mojom.mojom.PowerMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PowerMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for AddClient
device.mojom.mojom.PowerMonitor_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PowerMonitor.AddClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.PowerMonitorPtr = device.mojom.mojom.PowerMonitorRemote;
device.mojom.mojom.PowerMonitorRequest = device.mojom.mojom.PowerMonitorPendingReceiver;


// Interface: PowerMonitorClient
device.mojom.mojom.PowerMonitorClient = {};

device.mojom.mojom.PowerMonitorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.PowerMonitorClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PowerMonitorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.PowerMonitorClientPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.PowerMonitorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.PowerMonitorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  powerStateChange(battery_power_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec,
      null,
      [battery_power_status]);
  }

  suspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.PowerMonitorClient_Suspend_ParamsSpec,
      null,
      []);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.PowerMonitorClient_Resume_ParamsSpec,
      null,
      []);
  }

};

device.mojom.mojom.PowerMonitorClient.getRemote = function() {
  let remote = new device.mojom.mojom.PowerMonitorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PowerMonitorClient',
    'context');
  return remote.$;
};

// ParamsSpec for PowerStateChange
device.mojom.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PowerMonitorClient.PowerStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'battery_power_status', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BatteryPowerStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Suspend
device.mojom.mojom.PowerMonitorClient_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PowerMonitorClient.Suspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resume
device.mojom.mojom.PowerMonitorClient_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PowerMonitorClient.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.PowerMonitorClientPtr = device.mojom.mojom.PowerMonitorClientRemote;
device.mojom.mojom.PowerMonitorClientRequest = device.mojom.mojom.PowerMonitorClientPendingReceiver;

