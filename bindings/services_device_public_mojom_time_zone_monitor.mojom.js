// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/time_zone_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: TimeZoneMonitor
device.mojom.TimeZoneMonitor = {};

device.mojom.TimeZoneMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.TimeZoneMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.TimeZoneMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.TimeZoneMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.TimeZoneMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.TimeZoneMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.TimeZoneMonitor_AddClient_ParamsSpec,
      null,
      null,
      [client],
      undefined,
      undefined
    );
  }

};

device.mojom.TimeZoneMonitor.getRemote = function() {
  let remote = new device.mojom.TimeZoneMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.TimeZoneMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for AddClient
device.mojom.TimeZoneMonitor_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.TimeZoneMonitor.AddClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.TimeZoneMonitorPtr = device.mojom.TimeZoneMonitorRemote;
device.mojom.TimeZoneMonitorRequest = device.mojom.TimeZoneMonitorPendingReceiver;


// Interface: TimeZoneMonitorClient
device.mojom.TimeZoneMonitorClient = {};

device.mojom.TimeZoneMonitorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.TimeZoneMonitorClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.TimeZoneMonitorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.TimeZoneMonitorClientPendingReceiver,
      handle);
    this.$ = new device.mojom.TimeZoneMonitorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.TimeZoneMonitorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTimeZoneChange(tz_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.TimeZoneMonitorClient_OnTimeZoneChange_ParamsSpec,
      null,
      null,
      [tz_info],
      undefined,
      undefined
    );
  }

};

device.mojom.TimeZoneMonitorClient.getRemote = function() {
  let remote = new device.mojom.TimeZoneMonitorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.TimeZoneMonitorClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnTimeZoneChange
device.mojom.TimeZoneMonitorClient_OnTimeZoneChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.TimeZoneMonitorClient.OnTimeZoneChange_Params',
      packedSize: 16,
      fields: [
        { name: 'tz_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.TimeZoneMonitorClientPtr = device.mojom.TimeZoneMonitorClientRemote;
device.mojom.TimeZoneMonitorClientRequest = device.mojom.TimeZoneMonitorClientPendingReceiver;

