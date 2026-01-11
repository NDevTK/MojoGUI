// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/power_monitor.mojom
// Module: device.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

device.mojom.PowerMonitor = {};
device.mojom.PowerMonitor.$interfaceName = 'device.mojom.PowerMonitor';
device.mojom.PowerMonitor_AddClient_ParamsSpec = { $: {} };
device.mojom.PowerMonitorClient = {};
device.mojom.PowerMonitorClient.$interfaceName = 'device.mojom.PowerMonitorClient';
device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec = { $: {} };
device.mojom.PowerMonitorClient_Suspend_ParamsSpec = { $: {} };
device.mojom.PowerMonitorClient_Resume_ParamsSpec = { $: {} };

// Interface: PowerMonitor
mojo.internal.Struct(
    device.mojom.PowerMonitor_AddClient_ParamsSpec, 'device.mojom.PowerMonitor_AddClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(device.mojom.PowerMonitorClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  addClient(client) {
    return this.$.addClient(client);
  }
};

device.mojom.PowerMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PowerMonitor', [
      { explicit: null },
    ]);
  }

  addClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.PowerMonitor_AddClient_ParamsSpec,
      null,
      [client],
      false);
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
};

device.mojom.PowerMonitorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PowerMonitor', [
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
             decoder.decodeStructInline(device.mojom.PowerMonitor_AddClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PowerMonitor_AddClient_ParamsSpec.$.structSpec);
          const result = this.impl.addClient(params.client);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

device.mojom.PowerMonitorReceiver = device.mojom.PowerMonitorReceiver;

device.mojom.PowerMonitorPtr = device.mojom.PowerMonitorRemote;
device.mojom.PowerMonitorRequest = device.mojom.PowerMonitorPendingReceiver;


// Interface: PowerMonitorClient
mojo.internal.Struct(
    device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec, 'device.mojom.PowerMonitorClient_PowerStateChange_Params', [
      mojo.internal.StructField('battery_power_status', 0, 0, mojo_base.mojom.BatteryPowerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.PowerMonitorClient_Suspend_ParamsSpec, 'device.mojom.PowerMonitorClient_Suspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.PowerMonitorClient_Resume_ParamsSpec, 'device.mojom.PowerMonitorClient_Resume_Params', [
    ],
    [[0, 8]]);

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
  powerStateChange(battery_power_status) {
    return this.$.powerStateChange(battery_power_status);
  }
  suspend() {
    return this.$.suspend();
  }
  resume() {
    return this.$.resume();
  }
};

device.mojom.PowerMonitorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PowerMonitorClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  powerStateChange(battery_power_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec,
      null,
      [battery_power_status],
      false);
  }

  suspend() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.PowerMonitorClient_Suspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.PowerMonitorClient_Resume_ParamsSpec,
      null,
      [],
      false);
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
};

device.mojom.PowerMonitorClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PowerMonitorClient', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PowerMonitorClient_Suspend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.PowerMonitorClient_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec.$.structSpec);
          const result = this.impl.powerStateChange(params.battery_power_status);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PowerMonitorClient_Suspend_ParamsSpec.$.structSpec);
          const result = this.impl.suspend();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.PowerMonitorClient_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

device.mojom.PowerMonitorClientReceiver = device.mojom.PowerMonitorClientReceiver;

device.mojom.PowerMonitorClientPtr = device.mojom.PowerMonitorClientRemote;
device.mojom.PowerMonitorClientRequest = device.mojom.PowerMonitorClientPendingReceiver;

