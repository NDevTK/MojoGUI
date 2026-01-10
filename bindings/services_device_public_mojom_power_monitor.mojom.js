// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/power_monitor.mojom
// Module: device.mojom

'use strict';

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
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(device.mojom.PowerMonitorClientSpec), null, false, 0, undefined),
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
};

device.mojom.PowerMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.PowerMonitor_AddClient_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.addClient');
          const result = this.impl.addClient(params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
};

device.mojom.PowerMonitorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  powerStateChange(battery_power_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec,
      null,
      [battery_power_status],
      false);
  }

  suspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.PowerMonitorClient_Suspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.PowerMonitorClient_PowerStateChange_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.powerStateChange');
          const result = this.impl.powerStateChange(params.battery_power_status);
          break;
        }
        case 1: {
          const params = device.mojom.PowerMonitorClient_Suspend_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.suspend');
          const result = this.impl.suspend();
          break;
        }
        case 2: {
          const params = device.mojom.PowerMonitorClient_Resume_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.PowerMonitorClientReceiver = device.mojom.PowerMonitorClientReceiver;

device.mojom.PowerMonitorClientPtr = device.mojom.PowerMonitorClientRemote;
device.mojom.PowerMonitorClientRequest = device.mojom.PowerMonitorClientPendingReceiver;

