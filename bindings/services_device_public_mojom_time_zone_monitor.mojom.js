// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/time_zone_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: TimeZoneMonitor
device.mojom.mojom.TimeZoneMonitor = {};

device.mojom.mojom.TimeZoneMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.TimeZoneMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.TimeZoneMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.TimeZoneMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.TimeZoneMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.TimeZoneMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.TimeZoneMonitor_AddClient_ParamsSpec,
      null,
      [client]);
  }

};

device.mojom.mojom.TimeZoneMonitor.getRemote = function() {
  let remote = new device.mojom.mojom.TimeZoneMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.TimeZoneMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for AddClient
device.mojom.mojom.TimeZoneMonitor_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.TimeZoneMonitor.AddClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.TimeZoneMonitorPtr = device.mojom.mojom.TimeZoneMonitorRemote;
device.mojom.mojom.TimeZoneMonitorRequest = device.mojom.mojom.TimeZoneMonitorPendingReceiver;


// Interface: TimeZoneMonitorClient
device.mojom.mojom.TimeZoneMonitorClient = {};

device.mojom.mojom.TimeZoneMonitorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.TimeZoneMonitorClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.TimeZoneMonitorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.TimeZoneMonitorClientPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.TimeZoneMonitorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.TimeZoneMonitorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTimeZoneChange(tz_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.TimeZoneMonitorClient_OnTimeZoneChange_ParamsSpec,
      null,
      [tz_info]);
  }

};

device.mojom.mojom.TimeZoneMonitorClient.getRemote = function() {
  let remote = new device.mojom.mojom.TimeZoneMonitorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.TimeZoneMonitorClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnTimeZoneChange
device.mojom.mojom.TimeZoneMonitorClient_OnTimeZoneChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.TimeZoneMonitorClient.OnTimeZoneChange_Params',
      packedSize: 16,
      fields: [
        { name: 'tz_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.TimeZoneMonitorClientPtr = device.mojom.mojom.TimeZoneMonitorClientRemote;
device.mojom.mojom.TimeZoneMonitorClientRequest = device.mojom.mojom.TimeZoneMonitorClientPendingReceiver;

