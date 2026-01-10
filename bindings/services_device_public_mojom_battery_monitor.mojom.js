// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/battery_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: BatteryMonitor
device.mojom.mojom.BatteryMonitor = {};

device.mojom.mojom.BatteryMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.BatteryMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.BatteryMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.BatteryMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.BatteryMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.BatteryMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryNextStatus() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.BatteryMonitor_QueryNextStatus_ParamsSpec,
      device.mojom.mojom.BatteryMonitor_QueryNextStatus_ResponseParamsSpec,
      []);
  }

};

device.mojom.mojom.BatteryMonitor.getRemote = function() {
  let remote = new device.mojom.mojom.BatteryMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.BatteryMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for QueryNextStatus
device.mojom.mojom.BatteryMonitor_QueryNextStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.BatteryMonitor.QueryNextStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.BatteryMonitor_QueryNextStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.BatteryMonitor.QueryNextStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: device.mojom.BatteryStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.BatteryMonitorPtr = device.mojom.mojom.BatteryMonitorRemote;
device.mojom.mojom.BatteryMonitorRequest = device.mojom.mojom.BatteryMonitorPendingReceiver;

