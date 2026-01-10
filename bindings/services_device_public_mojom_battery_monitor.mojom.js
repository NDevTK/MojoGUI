// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/battery_monitor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.BatteryMonitor = {};
device.mojom.BatteryMonitor.$interfaceName = 'device.mojom.BatteryMonitor';
device.mojom.BatteryMonitor_QueryNextStatus_ParamsSpec = { $: {} };
device.mojom.BatteryMonitor_QueryNextStatus_ResponseParamsSpec = { $: {} };

// Interface: BatteryMonitor
mojo.internal.Struct(
    device.mojom.BatteryMonitor_QueryNextStatus_ParamsSpec, 'device.mojom.BatteryMonitor_QueryNextStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.BatteryMonitor_QueryNextStatus_ResponseParamsSpec, 'device.mojom.BatteryMonitor_QueryNextStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, device.mojom.BatteryStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.BatteryMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.BatteryMonitorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.BatteryMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.BatteryMonitorPendingReceiver,
      handle);
    this.$ = new device.mojom.BatteryMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.BatteryMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryNextStatus() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.BatteryMonitor_QueryNextStatus_ParamsSpec,
      device.mojom.BatteryMonitor_QueryNextStatus_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.BatteryMonitor.getRemote = function() {
  let remote = new device.mojom.BatteryMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.BatteryMonitor',
    'context');
  return remote.$;
};

device.mojom.BatteryMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.BatteryMonitor_QueryNextStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queryNextStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.BatteryMonitor_QueryNextStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

device.mojom.BatteryMonitorReceiver = device.mojom.BatteryMonitorReceiver;

device.mojom.BatteryMonitorPtr = device.mojom.BatteryMonitorRemote;
device.mojom.BatteryMonitorRequest = device.mojom.BatteryMonitorPendingReceiver;

