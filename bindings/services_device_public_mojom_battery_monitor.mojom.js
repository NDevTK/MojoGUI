// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/battery_monitor.mojom
// Module: device.mojom

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
  queryNextStatus() {
    return this.$.queryNextStatus();
  }
};

device.mojom.BatteryMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BatteryMonitor', [
      { explicit: null },
    ]);
  }

  queryNextStatus() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BatteryMonitor', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.BatteryMonitor_QueryNextStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.BatteryMonitor_QueryNextStatus_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

device.mojom.BatteryMonitorReceiver = device.mojom.BatteryMonitorReceiver;

device.mojom.BatteryMonitorPtr = device.mojom.BatteryMonitorRemote;
device.mojom.BatteryMonitorRequest = device.mojom.BatteryMonitorPendingReceiver;

